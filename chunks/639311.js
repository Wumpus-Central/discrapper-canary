"use strict";
n.d(t, { A: () => J });
var i,
    r = n(691540),
    s = n(97483),
    a = n(228366),
    o = n(627363),
    l = n(710195),
    u = n(952818),
    c = n(569926),
    d = n(652896),
    _ = n(616356),
    f = n(495544),
    h = n(761853),
    p = n(19575),
    E = n(459838),
    m = n(439372),
    g = n(77729),
    A = n(967347),
    I = n(885386),
    T = n(763827),
    S = n(116956),
    N = n(174459),
    y = n(723702),
    C = n(734066),
    v = n(274372),
    O = n(372684),
    R = n(915618),
    b = n(572164),
    D = n(696016),
    L = n(652215),
    w = n(325278);
class M extends m.A {
    actions = {
        POST_CONNECTION_OPEN: (e) => this.handlePostConnectionOpen(),
        RTC_CONNECTION_FLAGS: (e) => this.handleRTCConnectionFlags(e),
        RTC_CONNECTION_USERS_MERGED: (e) => this.handleRTCUsersUpdate(e),
        CLIPS_INIT_FAILURE: (e) => this.handleClipsInitFailure(e),
        CLIPS_SETTINGS_UPDATE: (e) => this.applyNativeClipsSettings(e),
        CLIPS_ALLOW_VOICE_RECORDING_UPDATE: () => this.handleClipsAllowVoiceRecordingUpdate(),
        STREAM_START: () => this.applyNativeClipsSettings(),
        STREAM_DELETE: (e) => this.handleStreamEnded(e),
        STREAM_CLOSE: (e) => this.handleStreamEnded(e),
        RUNNING_GAME_TOGGLE_DETECTION: (e) => this.handleClipsInitOnToggleDetection(e),
        RUNNING_GAMES_CHANGE: (e) => this.handleClipsInitOnGamesChange(e),
        CLIPS_RESTART: () => this.fireClipsInitEvent(),
        RTC_CONNECTION_VIDEO: (e) => this.handleRTCConnectionVideo(e),
        RTC_CONNECTION_STATE: (e) => this.handleRTCConnectionState(e),
    };
    handleRTCConnectionState(e) {
        let { context: t, state: n, streamKey: i } = e;
        if (!(0, C.Pm)() || n !== L.S7L.RTC_CONNECTED) return;
        let r = f.default.getId();
        if (t === E.x.DEFAULT) {
            this.applyUserVoiceRecording(r), this.applyUserSoundboardRecording(r);
            return;
        }
        if (t === E.x.STREAM && null != i) {
            let { ownerId: e } = (0, d.Iy)(i);
            if (e !== r) return;
            let t = S.A.getRTCConnection(i);
            if (null == t) return;
            this.applyStreamRecording(r, t);
        }
    }
    handleRTCUsersUpdate(e) {
        let { userIds: t, context: n } = e;
        n === E.x.DEFAULT &&
            t.forEach((e) => {
                this.applyUserVoiceRecording(e), this.applyUserSoundboardRecording(e);
            });
    }
    handleRTCConnectionFlags(e) {
        let { userId: t, channelId: n, guildId: i } = e;
        this.maybeShowClipsWarning(t), this.applyUserVoiceRecording(t), this.applyUserSoundboardRecording(t);
        let r = S.A.getRTCConnection(
            d._z({ streamType: null != i ? w.U4.GUILD : w.U4.CALL, ownerId: t, channelId: n, guildId: i }),
        );
        null != r && this.applyStreamRecording(t, r);
    }
    handleClipsInitFailure(e) {
        let { applicationName: t, errMsg: n } = e;
        N.default.track(L.HAw.CLIPS_INIT_FAILURE, { application_name: t, error_message: n });
    }
    maybeShowClipsWarning(e) {
        let t = T.A.getChannelId();
        null == t ||
            v.A.getClipsWarningShown(t) ||
            e === f.default.getId() ||
            !v.A.isClipsEnabledForUser(e) ||
            (I.Q$.getSetting() &&
                (a.h.dispatch({ type: "CLIPS_SHOW_CALL_WARNING", channelId: t }), this.showClipsToast()));
    }
    handleClipsAllowVoiceRecordingUpdate() {
        T.A.getUserIds()?.forEach((e) => this.maybeShowClipsWarning(e));
    }
    handlePostConnectionOpen() {
        !(0, R.A)(h.Ay) ||
            (this.applyNativeClipsSettings(),
            (0, C.Pm)() &&
                (this.loadClipsFromStorage(),
                (null == v.A.getHardwareClassification() ||
                    null == v.A.getHardwareClassificationForDecoupled() ||
                    v.A.getHardwareClassificationVersion() !== D.V0) &&
                    this.classifyHardwareAndTrack().then((e) => {
                        a.h.dispatch({ type: "CLIPS_CLASSIFY_HARDWARE", classification: e });
                    })));
    }
    loadClipsFromStorage() {}
    handleRTCConnectionVideo(e) {
        let { userId: t, context: n, channelId: i, guildId: r } = e;
        if (n !== E.x.STREAM || !(0, R.A)(h.Ay)) return;
        let s = S.A.getRTCConnection(
            d._z({ streamType: null != r ? w.U4.GUILD : w.U4.CALL, ownerId: t, channelId: i, guildId: r }),
        );
        null != s && this.applyStreamRecording(t, s);
    }
    async classifyHardwareAndTrack() {
        try {
            let { gpuModels: e, classification: t } = await (async () => {
                let e = await (0, A.w)();
                if (e?.gpus != null) {
                    let t = e.gpus.map((e) => e.brand).filter((e) => null != e && "" !== e),
                        n = this.classifyHardware(t);
                    return { gpuModels: t, classification: n };
                }
                {
                    let e = (await g.A.processUtils.getSystemInfo()).gpus.map((e) => {
                            let { model: t } = e;
                            return t;
                        }),
                        t = this.classifyHardware(e);
                    return { gpuModels: e, classification: t };
                }
            })();
            return (
                N.default.track(L.HAw.CLIPS_HARDWARE_CLASSIFICATION, {
                    classification: t,
                    version: D.V0,
                    gpu_models: e,
                }),
                t
            );
        } catch (e) {
            return O.k9.UNKNOWN;
        }
    }
    classifyHardware(e) {
        if ((0, y.isWindows)()) {
            let t = e.some((e) => D.sc.test(e)),
                n = e.some((e) => D.l_.test(e));
            return t ? O.k9.MEETS_AUTO_ENABLE : n ? O.k9.MEETS_MINIMUM : O.k9.BELOW_MINIMUM;
        }
        return (0, y.isMac)()
            ? "arm64" === g.A.app.getAppArch()
                ? O.k9.MEETS_AUTO_ENABLE
                : O.k9.MEETS_MINIMUM
            : O.k9.UNKNOWN;
    }
    applyUserVoiceRecording(e) {
        if (!(0, R.A)(h.Ay)) return;
        let t = T.A.getRTCConnection();
        if (null == t) return;
        if (e === f.default.getId()) return void t.setClipRecordUser(e, "audio", (0, b.TD)());
        let n = v.A.isVoiceRecordingAllowedForUser(e);
        t.setClipRecordUser(e, "audio", n);
    }
    applyUserSoundboardRecording(e) {
        if (!(0, R.A)(h.Ay)) return;
        let t = T.A.getRTCConnection();
        null != t && t.setClipRecordUser(e, "soundboard", (0, b.TD)());
    }
    applyStreamRecording(e, t) {
        if ((0, R.A)(h.Ay) && f.default.getId() === e) {
            let n = (0, b.TD)();
            t.setClipRecordUser(e, "audio", n), t.setClipRecordUser(e, "video", n);
            return;
        }
    }
}
var P = n(138082);
let x = (0, n(945810).mj)({
    kind: "user",
    name: "2026-04-clips-v3-runtime",
    defaultConfig: { enableClipsV3: !1, enableClipsV3ML: !1 },
    variations: { 1: { enableClipsV3: !0, enableClipsV3ML: !1 }, 2: { enableClipsV3: !0, enableClipsV3ML: !0 } },
});
function U() {
    return x.getConfig({ location: "isClipsV3Enabled" }).enableClipsV3;
}
n(321073);
var k = n(626584),
    G = (((i = {}).MISSING = "missing"), (i.DOWNLOADED = "downloaded"), (i.DOWNLOADING = "downloading"), i);
let F = [
        [
            "laughter_screaming_krispy_21_may",
            "onnx",
            "308042d0bfa4a0280afccfb341da722448d826968652e0f6fc2cfdf303276522",
        ],
        [
            "laughter_screaming_old_spliced_2s",
            "onnx",
            "dce8aec92bae18f32afb08a94bdac1d72f02d7d5589e8ad75c57c2e4228e104b",
        ],
        ["laughter_screaming_krispy", "onnx", "8835cfe08b2517162462b710c44bda60c116611c997fbce4d14679a26d6d75ed"],
        ["ggml-base", "bin", "60ed5bc3dd14eea856493d334349b405782ddcaf0028d4b5df4088345fba2efe"],
    ],
    V = new k.A("ClipsAssetManager");
class B {
    state = { assets: {}, assetState: {}, catalogLastFetchTime: void 0, catalogFetchFailed: !1 };
    activeDownloads = new Map();
    catalogRefreshing = !1;
    started = !1;
    start() {
        !this.started &&
            ((this.started = !0),
            V.info("Clips asset manager started"),
            (0, b.TD)() && (V.info("Clips enabled on startup, prefetching assets"), this.maybePrefetchAssets()));
    }
    stop() {
        p.Ay.stopClipsDownloads(),
            this.activeDownloads.clear(),
            (this.started = !1),
            V.info("Clips asset manager stopped");
    }
    getAssetState(e) {
        return this.state.assetState[e];
    }
    areAllAssetsDownloaded() {
        let e = Object.values(this.state.assetState);
        return e.length > 0 && e.every((e) => e.status === G.DOWNLOADED);
    }
    async maybePrefetchAssets() {
        if (!__OVERLAY__ && (0, y.isWindows)())
            try {
                await this.refreshCatalog(), await this.prefetchAssets();
            } catch (e) {
                V.warn(`Failed to prefetch clips assets: ${e.message}`);
            }
    }
    async refreshCatalog() {
        if (!this.catalogRefreshing)
            try {
                this.catalogRefreshing = !0;
                let e = this.loadCatalog();
                null == this.state.catalogLastFetchTime && (await this.scanAssetState(e)),
                    (this.state.assets = e.assets),
                    (this.state.catalogLastFetchTime = new Date()),
                    (this.state.catalogFetchFailed = !1);
                let t = Object.values(e.assets).map((e) => e.fileName);
                await p.Ay.cleanupUnusedClipsFiles(t), V.info("Clips asset catalog refreshed");
            } catch (e) {
                V.warn(`Failed to refresh clips asset catalog: ${e.message}`), (this.state.catalogFetchFailed = !0);
            } finally {
                this.catalogRefreshing = !1;
            }
    }
    loadCatalog() {
        let e = { assets: {} };
        for (let [t, n, i] of F)
            e.assets[t] = { url: `https://cdn.discordapp.com/assets/content/${i}.${n}`, fileName: `${t}.${n}` };
        return V.info("Loaded clips asset catalog with assets:", Object.keys(e.assets)), e;
    }
    async scanAssetState(e) {
        if (!p.Ay.canCheckClipsFilesExist()) return;
        let t = Object.entries(e.assets).map((e) => {
            let [t, n] = e;
            return { id: t, fileName: n.fileName };
        });
        for (let { id: e, exists: n } of await p.Ay.checkClipsFilesExist(t))
            this.state.assetState[e] = { status: n ? G.DOWNLOADED : G.MISSING };
    }
    async prefetchAssets() {
        if (__OVERLAY__) return;
        let e = this.state.assets,
            t = [];
        for (let [n, i] of Object.entries(e)) {
            let e = this.state.assetState[n];
            e?.status !== G.DOWNLOADED &&
                e?.status !== G.DOWNLOADING &&
                t.push(this.downloadAsset({ assetId: n, url: i.url, fileName: i.fileName }));
        }
        V.info(`Waiting for ${t.length} clips asset downloads`),
            await Promise.all(t),
            V.info("Finished downloading all clips assets");
    }
    downloadAsset(e) {
        let { url: t, assetId: n, fileName: i } = e,
            r = this.state.assetState[n],
            s = this.activeDownloads.get(n);
        if (null != s) return s;
        if (r?.status === G.DOWNLOADED) return Promise.resolve();
        if (r?.status === G.DOWNLOADING)
            return Promise.reject(Error("Clips asset is downloading but not in active downloads map"));
        this.state.assetState[n] = { status: G.DOWNLOADING, downloadedBytes: 0 };
        let a = p.Ay.downloadClipsFile(t, i, (e) => {
            let { downloadedBytes: t, totalBytes: i } = e;
            this.state.assetState[n] = { ...this.state.assetState[n], downloadedBytes: t, totalBytes: i };
        })
            .then((e) => {
                e.fetchedFromNetwork && V.info("Downloaded clips asset from network:", n),
                    (this.state.assetState[n] = { status: G.DOWNLOADED, downloadedBytes: void 0 });
            })
            .catch((t) => {
                t?.USER_CANCELED_DOWNLOAD
                    ? V.info("User canceled the download for clips asset", e)
                    : V.error("Failed to download clips asset", { reason: t, ...e }),
                    (this.state.assetState[n] = { status: G.MISSING });
            })
            .finally(() => {
                this.activeDownloads.delete(n);
            });
        return this.activeDownloads.set(n, a), a;
    }
}
let H = new B();
var j = n(607814);
n(871421);
var Y = n(227628),
    W = n(468550),
    K = n(375708);
let z = !1,
    $ = null,
    q = null,
    Z = null;
function X() {
    let e = U(),
        t = (function () {
            let { enableClipsV3: e, enableClipsV3ML: t } = x.getConfig({ location: "isClipsV3MLEnabled" });
            return e && t;
        })(),
        n = q !== e,
        i = Z !== t;
    if (!n && !i) return;
    let r = h.Ay.getMediaEngine();
    n && r.setClipsV3Enabled(e),
        i && r.setClipsV3MLEnabled(t),
        D.nx.info(`clips v3 runtime flags pushed: v3=${e} (was ${q}), ml=${t} (was ${Z})`),
        (q = e),
        (Z = t),
        e && t && H.start();
}
class Q extends M {
    constructor() {
        super(),
            Object.assign(this.actions, {
                CLIPS_SAVE_CLIP: (e) => {
                    let { clip: t } = e;
                    t.isCandidate || this.maybeOpenQuickBar();
                },
                CLIPS_PROMOTE_CLIP_CANDIDATE: (e) => this.maybeOpenQuickBar(),
            });
    }
    stores = new Map().set(l.A, () => this.applyNativeClipsSettings());
    maybeOpenQuickBar() {
        let { enableQuickBar: e } = P.h.getConfig({ location: "ClipsManager" });
        if (!e || !v.A.canShowReminders()) return;
        let t = u.Ay.getVisibleGame();
        null == t ||
            (v.A.getLastClipsSession()
                ?.newClipIds.map(v.A.getClipById)
                .some((e) => e?.applicationId === t.id) &&
                (Y.MZ.getState().isOpen || (0, Y.w9)()));
    }
    handleClipsReminder(e) {
        if (null == e) return;
        let { enableQuickBar: t } = P.h.getConfig({ location: "ClipsManager" });
        if (!t || !v.A.canShowReminders()) return;
        let n = v.A.getLastClipsSession();
        if (null == n || 0 === n.newClipIds.length) return;
        let i = v.A.getClipById(n.newClipIds[0]);
        i?.applicationId === e && (0, W.M8)(e);
    }
    showClipsToast() {
        (0, r.P0)({
            id: "CLIPS_IN_CALL_WARNING",
            message: K.intl.string(K.t["d+41qJ"]),
            type: s.Ck.CLIP,
            options: { duration: D.Vi },
        });
    }
    applyNativeClipsSettings(e) {
        if (!(0, R.A)(h.Ay)) return;
        let t = h.Ay.getMediaEngine(),
            n = () => {
                let n = v.A.getSettings(),
                    i = (0, b.TD)();
                if (
                    (t.setClipBufferLength(i ? n.clipsLength / 1e3 : 0),
                    e?.settings.decoupledClipsEnabled === !0 && this.fireClipsInitEvent(),
                    null == e || e?.settings.clipsQuality != null)
                ) {
                    let { frameRate: i, resolution: r } = n.clipsQuality;
                    t.setClipsQualitySettings(r <= 480 ? (r / 3) * 4 : (r / 9) * 16, r, i) ||
                        null == e ||
                        this.fireClipsInitEvent();
                }
            };
        X(),
            !U() || z
                ? n()
                : (z
                      ? Promise.resolve()
                      : null != $
                        ? $
                        : ($ = (async () => {
                              try {
                                  X(), await p.Ay.ensureModule("discord_clips");
                                  let e = p.Ay.requireModule("discord_clips").getModulePath(),
                                      t = h.Ay.getMediaEngine(),
                                      n = p.Ay.getClipsDataDirSync();
                                  t.setClipsDataPath(n),
                                      t.setClipsModulePath(e),
                                      (z = !0),
                                      D.nx.info("discord_clips module loaded, path: " + e);
                              } catch (e) {
                                  ($ = null), D.nx.error("Failed to load discord_clips module", e);
                              }
                          })())
                  ).then(n);
    }
    handleClipsInitOnToggleDetection(e) {
        let t = u.Ay.getVisibleGame();
        null != t && t.id === e.game.id && (this.prefetchRichPresenceData(t.id), this.fireClipsInitEvent());
    }
    handleClipsInitOnGamesChange(e) {
        let t = u.Ay.getVisibleGame();
        (0, Y.yj)(),
            e.removed.length > 0 && null == t && this.handleClipsReminder(e.removed[0]?.id),
            null == t ||
                ((0, W.kF)(),
                this.prefetchRichPresenceData(t.id),
                e.added.find((e) => e.pid === t.pid)
                    ? setTimeout(() => this.fireClipsInitEvent(), D.dV)
                    : this.fireClipsInitEvent(),
                this.maybeOpenQuickBar());
    }
    prefetchRichPresenceData(e) {
        c.I.fetchMany([e]), o.YY.fetchMany([e]);
    }
    handleStreamEnded(e) {
        if (!U()) return;
        let { ownerId: t } = (0, d.Iy)(e.streamKey);
        t === f.default.getId() && this.fireClipsInitEvent();
    }
    fireClipsInitEvent() {
        if (!(0, b.TD)() || null != _.A.getCurrentUserActiveStream()) return;
        let e = u.Ay.getVisibleGame();
        if (e?.pid == null || e?.windowHandle == null || null == e.name || "" === e.name) return;
        let t = v.A.getSettings();
        a.h.dispatch({
            type: "CLIPS_INIT",
            sourceId: `window:${e?.windowHandle}`,
            applicationName: e.name,
            quality: t.clipsQuality,
        });
    }
    loadClipsFromStorage() {
        let e = v.A.getSettings().storageLocation;
        "" !== e &&
            j.Fb(e).catch((e) => {
                D.nx.error("Failed to load clips directory on connection open", e);
            });
    }
}
let J = new Q();
