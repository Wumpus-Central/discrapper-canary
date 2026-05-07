"use strict";
n.d(t, { A: () => X });
var i,
    r = n(192308),
    s = n(691540),
    a = n(97483),
    o = n(228366),
    l = n(793943),
    u = n(710195),
    c = n(952818),
    d = n(616356),
    _ = n(186111),
    f = n(235058),
    h = n(19575),
    p = n(459838),
    E = n(439372),
    m = n(77729),
    g = n(652896),
    A = n(967347),
    I = n(885386),
    T = n(495544),
    S = n(763827),
    N = n(116956),
    y = n(174459),
    C = n(723702),
    v = n(734066),
    O = n(274372),
    R = n(372684),
    b = n(915618),
    D = n(572164),
    L = n(696016),
    w = n(652215),
    M = n(325278);
class P extends E.A {
    actions = {
        POST_CONNECTION_OPEN: (e) => this.handlePostConnectionOpen(),
        RTC_CONNECTION_FLAGS: (e) => this.handleRTCConnectionFlags(e),
        RTC_CONNECTION_USERS_MERGED: (e) => this.handleRTCUsersUpdate(e),
        CLIPS_INIT_FAILURE: (e) => this.handleClipsInitFailure(e),
        CLIPS_SETTINGS_UPDATE: (e) => this.applyNativeClipsSettings(e),
        CLIPS_ALLOW_VOICE_RECORDING_UPDATE: () => this.handleClipsAllowVoiceRecordingUpdate(),
        STREAM_START: () => this.applyNativeClipsSettings(),
        RUNNING_GAME_TOGGLE_DETECTION: (e) => this.handleClipsInitOnToggleDetection(e),
        RUNNING_GAMES_CHANGE: (e) => this.handleClipsInitOnGamesChange(e),
        CLIPS_RESTART: () => this.fireClipsInitEvent(),
        RTC_CONNECTION_VIDEO: (e) => this.handleRTCConnectionVideo(e),
        RTC_CONNECTION_STATE: (e) => this.handleRTCConnectionState(e),
    };
    handleRTCConnectionState(e) {
        let { context: t, state: n, streamKey: i } = e;
        if (!(0, v.Pm)() || n !== w.S7L.RTC_CONNECTED) return;
        let r = T.default.getId();
        if (t === p.x.DEFAULT) {
            this.applyUserVoiceRecording(r), this.applyUserSoundboardRecording(r);
            return;
        }
        if (t === p.x.STREAM && null != i) {
            let { ownerId: e } = (0, g.Iy)(i);
            if (e !== r) return;
            let t = N.A.getRTCConnection(i);
            if (null == t) return;
            this.applyStreamRecording(r, t);
        }
    }
    handleRTCUsersUpdate(e) {
        let { userIds: t, context: n } = e;
        n === p.x.DEFAULT &&
            t.forEach((e) => {
                this.applyUserVoiceRecording(e), this.applyUserSoundboardRecording(e);
            });
    }
    handleRTCConnectionFlags(e) {
        let { userId: t, channelId: n, guildId: i } = e;
        this.maybeShowClipsWarning(t), this.applyUserVoiceRecording(t), this.applyUserSoundboardRecording(t);
        let r = N.A.getRTCConnection(
            g._z({ streamType: null != i ? M.U4.GUILD : M.U4.CALL, ownerId: t, channelId: n, guildId: i }),
        );
        null != r && this.applyStreamRecording(t, r);
    }
    handleClipsInitFailure(e) {
        let { applicationName: t, errMsg: n } = e;
        y.default.track(w.HAw.CLIPS_INIT_FAILURE, { application_name: t, error_message: n });
    }
    maybeShowClipsWarning(e) {
        let t = S.A.getChannelId();
        null == t ||
            O.A.getClipsWarningShown(t) ||
            e === T.default.getId() ||
            !O.A.isClipsEnabledForUser(e) ||
            (I.Q$.getSetting() &&
                (o.h.dispatch({ type: "CLIPS_SHOW_CALL_WARNING", channelId: t }), this.showClipsToast()));
    }
    handleClipsAllowVoiceRecordingUpdate() {
        S.A.getUserIds()?.forEach((e) => this.maybeShowClipsWarning(e));
    }
    handlePostConnectionOpen() {
        !(0, b.A)(f.Ay) ||
            (this.applyNativeClipsSettings(),
            (0, v.Pm)() &&
                (this.loadClipsFromStorage(),
                (null == O.A.getHardwareClassification() ||
                    null == O.A.getHardwareClassificationForDecoupled() ||
                    O.A.getHardwareClassificationVersion() !== L.V0) &&
                    this.classifyHardwareAndTrack().then((e) => {
                        o.h.dispatch({ type: "CLIPS_CLASSIFY_HARDWARE", classification: e });
                    })));
    }
    loadClipsFromStorage() {}
    handleRTCConnectionVideo(e) {
        let { userId: t, context: n, channelId: i, guildId: r } = e;
        if (n !== p.x.STREAM || !(0, b.A)(f.Ay)) return;
        let s = N.A.getRTCConnection(
            g._z({ streamType: null != r ? M.U4.GUILD : M.U4.CALL, ownerId: t, channelId: i, guildId: r }),
        );
        null != s && this.applyStreamRecording(t, s);
    }
    async classifyHardwareAndTrack() {
        try {
            let { gpuModels: e, classification: t } = await (async () => {
                let e = await (0, A.w)();
                if (e?.gpus != null) {
                    let t = e.gpus.map((e) => e.brand),
                        n = this.classifyHardware(t);
                    return { gpuModels: t, classification: n };
                }
                {
                    let e = (await m.A.processUtils.getSystemInfo()).gpus.map((e) => {
                            let { model: t } = e;
                            return t;
                        }),
                        t = this.classifyHardware(e);
                    return { gpuModels: e, classification: t };
                }
            })();
            return (
                y.default.track(w.HAw.CLIPS_HARDWARE_CLASSIFICATION, {
                    classification: t,
                    version: L.V0,
                    gpu_models: e,
                }),
                t
            );
        } catch (e) {
            return R.k9.UNKNOWN;
        }
    }
    classifyHardware(e) {
        if ((0, C.isWindows)()) {
            let t = e.some((e) => L.sc.test(e)),
                n = e.some((e) => L.l_.test(e));
            return t ? R.k9.MEETS_AUTO_ENABLE : n ? R.k9.MEETS_MINIMUM : R.k9.BELOW_MINIMUM;
        }
        return (0, C.isMac)()
            ? "arm64" === m.A.app.getAppArch()
                ? R.k9.MEETS_AUTO_ENABLE
                : R.k9.MEETS_MINIMUM
            : R.k9.UNKNOWN;
    }
    applyUserVoiceRecording(e) {
        if (!(0, b.A)(f.Ay)) return;
        let t = S.A.getRTCConnection();
        if (null == t) return;
        if (e === T.default.getId()) return void t.setClipRecordUser(e, "audio", (0, D.TD)());
        let n = O.A.isVoiceRecordingAllowedForUser(e);
        t.setClipRecordUser(e, "audio", n);
    }
    applyUserSoundboardRecording(e) {
        if (!(0, b.A)(f.Ay)) return;
        let t = S.A.getRTCConnection();
        null != t && t.setClipRecordUser(e, "soundboard", (0, D.TD)());
    }
    applyStreamRecording(e, t) {
        if ((0, b.A)(f.Ay) && T.default.getId() === e) {
            let n = (0, D.TD)();
            t.setClipRecordUser(e, "audio", n), t.setClipRecordUser(e, "video", n);
            return;
        }
    }
}
var x = n(150616),
    U = n(974293);
n(321073);
var k = n(626584),
    G = (((i = {}).MISSING = "missing"), (i.DOWNLOADED = "downloaded"), (i.DOWNLOADING = "downloading"), i);
let F = [
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
            (0, D.TD)() && (V.info("Clips enabled on startup, prefetching assets"), this.maybePrefetchAssets()));
    }
    stop() {
        h.Ay.stopClipsDownloads(),
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
        if (!__OVERLAY__ && (0, C.isWindows)())
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
                await h.Ay.cleanupUnusedClipsFiles(t), V.info("Clips asset catalog refreshed");
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
        if (!h.Ay.canCheckClipsFilesExist()) return;
        let t = Object.entries(e.assets).map((e) => {
            let [t, n] = e;
            return { id: t, fileName: n.fileName };
        });
        for (let { id: e, exists: n } of await h.Ay.checkClipsFilesExist(t))
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
        let a = h.Ay.downloadClipsFile(t, i, (e) => {
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
var j = n(948138);
n(871421);
var Y = n(375708);
let W = !1,
    K = null,
    z = null,
    $ = null;
function q() {
    let e = (0, U.qi)(),
        t = (0, U.$i)(),
        n = z !== e,
        i = $ !== t;
    if (!n && !i) return;
    let r = f.Ay.getMediaEngine();
    n && r.setClipsV3Enabled(e),
        i && r.setClipsV3MLEnabled(t),
        L.nx.info(`clips v3 runtime flags pushed: v3=${e} (was ${z}), ml=${t} (was ${$})`),
        (z = e),
        ($ = t),
        e && t && H.start();
}
class Z extends P {
    constructor() {
        super(),
            Object.assign(this.actions, {
                CLIPS_SAVE_CLIP: (e) => {
                    let { clip: t } = e;
                    t.isCandidate || this.maybeOpenReminderSidebar();
                },
                CLIPS_PROMOTE_CLIP_CANDIDATE: (e) => this.maybeOpenReminderSidebar(),
            });
    }
    stores = new Map().set(u.A, () => this.applyNativeClipsSettings());
    maybeOpenReminderSidebar() {
        let { enableReminderSidebar: e } = x.Z.getConfig({ location: "ClipsManager" });
        !e ||
            !O.A.canShowReminders() ||
            l.fy.getState().activePanel === l.HP.CLIPS_REMINDER ||
            _.A.hasLayers() ||
            (0, r.hasAnyModalOpen)() ||
            (0, l.nf)(l.HP.CLIPS_REMINDER);
    }
    showClipsToast() {
        (0, s.P0)({
            id: "CLIPS_IN_CALL_WARNING",
            message: Y.intl.string(Y.t["d+41qJ"]),
            type: a.Ck.CLIP,
            options: { duration: L.Vi },
        });
    }
    applyNativeClipsSettings(e) {
        if (!(0, b.A)(f.Ay)) return;
        let t = f.Ay.getMediaEngine(),
            n = () => {
                let n = O.A.getSettings(),
                    i = (0, D.TD)();
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
        q(),
            !(0, U.qi)() || W
                ? n()
                : (W
                      ? Promise.resolve()
                      : null != K
                        ? K
                        : (K = (async () => {
                              try {
                                  q(), await h.Ay.ensureModule("discord_clips");
                                  let e = h.Ay.requireModule("discord_clips").getModulePath(),
                                      t = f.Ay.getMediaEngine(),
                                      n = h.Ay.getClipsDataDirSync();
                                  t.setClipsDataPath(n),
                                      t.setClipsModulePath(e),
                                      (W = !0),
                                      L.nx.info("discord_clips module loaded, path: " + e);
                              } catch (e) {
                                  (K = null), L.nx.error("Failed to load discord_clips module", e);
                              }
                          })())
                  ).then(n);
    }
    handleClipsInitOnToggleDetection(e) {
        let t = c.Ay.getVisibleGame();
        null != t && t.id === e.game.id && this.fireClipsInitEvent();
    }
    handleClipsInitOnGamesChange(e) {
        let t = c.Ay.getVisibleGame();
        null == t ||
            (e.added.find((e) => e.pid === t.pid)
                ? setTimeout(() => this.fireClipsInitEvent(), L.dV)
                : this.fireClipsInitEvent());
    }
    fireClipsInitEvent() {
        if (!(0, D.TD)() || null != d.A.getCurrentUserActiveStream()) return;
        let e = c.Ay.getVisibleGame();
        if (e?.pid == null || e?.windowHandle == null || null == e.name || "" === e.name) return;
        let t = O.A.getSettings();
        o.h.dispatch({
            type: "CLIPS_INIT",
            sourceId: `window:${e?.windowHandle}`,
            applicationName: e.name,
            quality: t.clipsQuality,
        });
    }
    loadClipsFromStorage() {
        let e = O.A.getSettings().storageLocation;
        "" !== e &&
            j.Fb(e).catch((e) => {
                L.nx.error("Failed to load clips directory on connection open", e);
            });
    }
}
let X = new Z();
