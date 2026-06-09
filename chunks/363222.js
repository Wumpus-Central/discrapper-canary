"use strict";
n.d(t, { A: () => er });
var i,
    r = n(691540),
    s = n(97483),
    a = n(228366),
    o = n(77729),
    l = n(627363),
    u = n(710195),
    c = n(952818),
    d = n(569926),
    _ = n(652896),
    h = n(616356),
    f = n(495544),
    p = n(555975),
    E = n(741394),
    m = n(19575),
    g = n(459838),
    A = n(439372),
    I = n(967347),
    T = n(885386),
    S = n(763827),
    y = n(116956),
    N = n(174459),
    v = n(723702),
    C = n(734066),
    R = n(274372),
    O = n(372684),
    b = n(974293),
    D = n(915618),
    L = n(572164),
    w = n(696016),
    M = n(652215),
    P = n(325278);
class x extends A.A {
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
        if (!(0, C.Pm)() || n !== M.S7L.RTC_CONNECTED) return;
        let r = f.default.getId();
        if (t === g.x.DEFAULT) {
            this.applyUserVoiceRecording(r), this.applyUserSoundboardRecording(r);
            return;
        }
        if (t === g.x.STREAM && null != i) {
            let { ownerId: e } = (0, _.Iy)(i);
            if (e !== r) return;
            let t = y.A.getRTCConnection(i);
            if (null == t) return;
            this.applyStreamRecording(r, t);
        }
    }
    handleRTCUsersUpdate(e) {
        let { userIds: t, context: n } = e;
        n === g.x.DEFAULT &&
            t.forEach((e) => {
                this.applyUserVoiceRecording(e), this.applyUserSoundboardRecording(e);
            });
    }
    handleRTCConnectionFlags(e) {
        let { userId: t, channelId: n, guildId: i } = e;
        this.maybeShowClipsWarning(t), this.applyUserVoiceRecording(t), this.applyUserSoundboardRecording(t);
        let r = y.A.getRTCConnection(
            _._z({ streamType: null != i ? P.U4.GUILD : P.U4.CALL, ownerId: t, channelId: n, guildId: i }),
        );
        null != r && this.applyStreamRecording(t, r);
    }
    handleClipsInitFailure(e) {
        let { applicationName: t, errMsg: n } = e;
        N.default.track(M.HAw.CLIPS_INIT_FAILURE, { application_name: t, error_message: n, clip_runtime: (0, b.GN)() });
    }
    maybeShowClipsWarning(e) {
        let t = S.A.getChannelId();
        null == t ||
            R.Ay.getClipsWarningShown(t) ||
            e === f.default.getId() ||
            !R.Ay.isClipsEnabledForUser(e) ||
            (T.Q$.getSetting() &&
                (a.h.dispatch({ type: "CLIPS_SHOW_CALL_WARNING", channelId: t }), this.showClipsToast()));
    }
    handleClipsAllowVoiceRecordingUpdate() {
        S.A.getUserIds()?.forEach((e) => this.maybeShowClipsWarning(e));
    }
    handlePostConnectionOpen() {
        !(0, D.A)(p.Ay) ||
            (this.applyNativeClipsSettings(),
            (0, C.Pm)() &&
                (this.loadClipsFromStorage(),
                (null == R.Ay.getHardwareClassification() ||
                    null == R.Ay.getHardwareClassificationForDecoupled() ||
                    R.Ay.getHardwareClassificationVersion() !== w.V0) &&
                    this.classifyHardwareAndTrack().then((e) => {
                        a.h.dispatch({ type: "CLIPS_CLASSIFY_HARDWARE", classification: e });
                    })));
    }
    loadClipsFromStorage() {}
    handleRTCConnectionVideo(e) {
        let { userId: t, context: n, channelId: i, guildId: r } = e;
        if (n !== g.x.STREAM || !(0, D.A)(p.Ay)) return;
        let s = y.A.getRTCConnection(
            _._z({ streamType: null != r ? P.U4.GUILD : P.U4.CALL, ownerId: t, channelId: i, guildId: r }),
        );
        null != s && this.applyStreamRecording(t, s);
    }
    async classifyHardwareAndTrack() {
        try {
            let { gpuModels: e, classification: t } = await (async () => {
                let e = await (0, I.w)();
                if (e?.gpus != null) {
                    let t = e.gpus.map((e) => e.brand).filter((e) => null != e && "" !== e),
                        n = this.classifyHardware(t);
                    return { gpuModels: t, classification: n };
                }
                {
                    let e = (await o.A.processUtils.getSystemInfo()).gpus.map((e) => {
                            let { model: t } = e;
                            return t;
                        }),
                        t = this.classifyHardware(e);
                    return { gpuModels: e, classification: t };
                }
            })();
            return (
                N.default.track(M.HAw.CLIPS_HARDWARE_CLASSIFICATION, {
                    classification: t,
                    version: w.V0,
                    gpu_models: e,
                    clip_runtime: (0, b.GN)(),
                }),
                t
            );
        } catch (e) {
            return O.k9.UNKNOWN;
        }
    }
    classifyHardware(e) {
        if ((0, v.isWindows)()) {
            let t = e.some((e) => w.sc.test(e)),
                n = e.some((e) => w.l_.test(e));
            return t ? O.k9.MEETS_AUTO_ENABLE : n ? O.k9.MEETS_MINIMUM : O.k9.BELOW_MINIMUM;
        }
        return (0, v.isMac)()
            ? "arm64" === o.A.app.getAppArch()
                ? O.k9.MEETS_AUTO_ENABLE
                : O.k9.MEETS_MINIMUM
            : O.k9.UNKNOWN;
    }
    applyUserVoiceRecording(e) {
        if (!(0, D.A)(p.Ay)) return;
        let t = S.A.getRTCConnection();
        if (null == t) return;
        if (e === f.default.getId()) return void t.setClipRecordUser(e, "audio", (0, L.TD)());
        let n = R.Ay.isVoiceRecordingAllowedForUser(e);
        t.setClipRecordUser(e, "audio", n);
    }
    applyUserSoundboardRecording(e) {
        if (!(0, D.A)(p.Ay)) return;
        let t = S.A.getRTCConnection();
        null != t && t.setClipRecordUser(e, "soundboard", (0, L.TD)());
    }
    applyStreamRecording(e, t) {
        if ((0, D.A)(p.Ay) && f.default.getId() === e) {
            let n = (0, L.TD)();
            t.setClipRecordUser(e, "audio", n), t.setClipRecordUser(e, "video", n);
            return;
        }
    }
}
var k = n(138082);
n(321073);
var U = n(626584),
    G = (((i = {}).MISSING = "missing"), (i.DOWNLOADED = "downloaded"), (i.DOWNLOADING = "downloading"), i);
let F = [
        ["laughter_screaming_exp58", "onnx", "f5a655cb76a57561ae84c9a9eb1829433db9ad8f4fd192a40f3277a5a5cfa6ad"],
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
    V = new U.A("ClipsAssetManager");
class B {
    state = { assets: {}, assetState: {}, catalogLastFetchTime: void 0, catalogFetchFailed: !1 };
    activeDownloads = new Map();
    catalogRefreshing = !1;
    downloadRunning = !1;
    downloadPromise = null;
    async start() {
        if ((V.info("Clips asset manager started"), !(0, L.TD)() || !(0, v.isWindows)() || __OVERLAY__))
            return { allAssetsDownloaded: !1 };
        if (null != this.downloadPromise && (this.downloadRunning || this.areAllAssetsDownloaded()))
            await this.downloadPromise;
        else {
            V.info("Clips enabled on startup, prefetching assets"), (this.downloadRunning = !0);
            try {
                (this.downloadPromise = this.maybePrefetchAssets()), await this.downloadPromise;
            } finally {
                this.downloadRunning = !1;
            }
        }
        return { allAssetsDownloaded: this.areAllAssetsDownloaded() };
    }
    areAllAssetsDownloaded() {
        let e = Object.values(this.state.assetState);
        return e.length > 0 && e.every((e) => e.status === G.DOWNLOADED);
    }
    async maybePrefetchAssets() {
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
                await m.Ay.cleanupUnusedClipsFiles(t), V.info("Clips asset catalog refreshed");
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
        if (!m.Ay.canCheckClipsFilesExist()) return;
        let t = Object.entries(e.assets).map((e) => {
            let [t, n] = e;
            return { id: t, fileName: n.fileName };
        });
        for (let { id: e, exists: n } of await m.Ay.checkClipsFilesExist(t))
            this.state.assetState[e] = { status: n ? G.DOWNLOADED : G.MISSING };
    }
    async prefetchAssets() {
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
        let a = m.Ay.downloadClipsFile(t, i, (e) => {
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
var j = n(334686),
    Y = n(315240);
n(257290);
var W = n(409067),
    K = n(227628),
    $ = n(468550),
    z = n(375708);
let q = !1,
    X = null,
    Z = null,
    Q = null,
    J = null,
    ee = null;
function et() {
    let e = (0, b.qi)(),
        t = (0, b.$i)(),
        n = R.Ay.getEnableAutoclipping(),
        i = Z !== e,
        r = Q !== t,
        s = J !== n;
    if (!i && !r && !s) return;
    let a = p.Ay.getMediaEngine();
    i && a.setClipsV3Enabled(e),
        w.nx.info(
            `clips v3 runtime flags pushed: v3=${e} (was ${Z}), ml=${t} (was ${Q}), autoclipping=${n} (was ${J})`,
        ),
        (Z = e),
        (Q = t),
        (J = n),
        e &&
            (t
                ? (null === ee &&
                      (w.nx.info("clips v3 ml flag set ml=false until download complete"),
                      a.setClipsV3MLEnabled(!1),
                      (ee = !1)),
                  (async () => {
                      let { allAssetsDownloaded: e } = await H.start(),
                          t = e && !0 === Q && !0 === J;
                      ee !== t &&
                          (w.nx.info(
                              `clips v3 ml flag set ml=${t} (was ${ee}). allAssetsDownloaded=${e}, autoclipping=${J}`,
                          ),
                          a.setClipsV3MLEnabled(t),
                          (ee = t));
                  })())
                : !1 !== ee &&
                  (w.nx.info(`clips v3 ml flag set ml=false (was ${ee})`), a.setClipsV3MLEnabled(!1), (ee = !1)));
}
class en extends x {
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
    stores = new Map().set(u.A, () => this.applyNativeClipsSettings());
    maybeOpenQuickBar() {
        let { enableQuickBar: e } = k.h.getConfig({ location: "ClipsManager" });
        if (!e || !R.Ay.canShowReminders()) return;
        let t = c.Ay.getVisibleGame();
        null == t ||
            (R.Ay.getLastClipsSession()
                ?.newClipIds.map(R.Ay.getClipById)
                .some((e) => e?.applicationId === t.id) &&
                (K.MZ.getState().isOpen || (0, K.w9)()));
    }
    handleClipsReminder(e) {
        if (null == e) return;
        let { enableQuickBar: t } = k.h.getConfig({ location: "ClipsManager" });
        if (!t || !R.Ay.canShowReminders()) return;
        let n = R.Ay.getLastClipsSession();
        if (null == n || 0 === n.newClipIds.length) return;
        let { enabled: i } = j.O.getConfig({ location: "ClipsManager" }),
            r = i && !R.Ay.getSettings().showPovClipsInGallery;
        n.newClipIds.some((t) => {
            let n = R.Ay.getClipById(t);
            return null != n && n.applicationId === e && (!r || !(0, W.kD)(n));
        }) && (0, $.M8)(e);
    }
    showClipsToast() {
        (0, r.P0)({
            id: "CLIPS_IN_CALL_WARNING",
            message: z.intl.string(z.t["d+41qJ"]),
            type: s.Ck.CLIP,
            options: { duration: w.Vi },
        });
    }
    applyNativeClipsSettings(e) {
        if (!(0, D.A)(p.Ay)) return;
        let t = p.Ay.getMediaEngine(),
            n = () => {
                let n = R.Ay.getSettings(),
                    i = (0, L.TD)();
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
        et(),
            !(0, b.qi)() || q
                ? n()
                : (q
                      ? Promise.resolve()
                      : null != X
                        ? X
                        : (X = (async () => {
                              try {
                                  et(), await m.Ay.ensureModule("discord_clips");
                                  let e = m.Ay.requireModule("discord_clips").getModulePath(),
                                      t = p.Ay.getMediaEngine(),
                                      n = m.Ay.getClipsDataDirSync();
                                  t.setClipsDataPath(n),
                                      t.setClipsModulePath(e),
                                      (q = !0),
                                      w.nx.info("discord_clips module loaded, path: " + e);
                              } catch (e) {
                                  (X = null), w.nx.error("Failed to load discord_clips module", e);
                              }
                          })())
                  ).then(n);
    }
    handleClipsInitOnToggleDetection(e) {
        let t = c.Ay.getVisibleGame();
        null != t && t.id === e.game.id && (this.prefetchRichPresenceData(t.id), this.fireClipsInitEvent());
    }
    handleClipsInitOnGamesChange(e) {
        let t = c.Ay.getVisibleGame();
        if (((0, K.yj)(), e.removed.length > 0 && null == t)) {
            let t = e.removed[0]?.id;
            queueMicrotask(() => this.handleClipsReminder(t));
        }
        null == t ||
            ((0, $.kF)(),
            this.prefetchRichPresenceData(t.id),
            e.added.find((e) => e.pid === t.pid)
                ? setTimeout(() => this.fireClipsInitEvent(), w.dV)
                : this.fireClipsInitEvent(),
            this.maybeOpenQuickBar());
    }
    prefetchRichPresenceData(e) {
        d.I.fetchMany([e]), l.YY.fetchMany([e]);
    }
    handleStreamEnded(e) {
        if (!(0, b.qi)()) return;
        let { ownerId: t } = (0, _.Iy)(e.streamKey);
        t === f.default.getId() && this.fireClipsInitEvent();
    }
    fireClipsInitEvent() {
        if (!(0, L.TD)() || null != h.A.getCurrentUserActiveStream()) return;
        let e = c.Ay.getVisibleGame();
        if (e?.pid == null || e?.windowHandle == null || null == e.name || "" === e.name) return;
        let t = R.Ay.getSettings();
        a.h.dispatch({
            type: "CLIPS_INIT",
            sourceId: `window:${e?.windowHandle}`,
            applicationName: e.name,
            quality: t.clipsQuality,
        });
    }
    loadClipsFromStorage() {
        let { storageLocation: e } = R.Ay.getSettings();
        "" !== e &&
            e !== R.he &&
            Y.Fb(e)
                .then(() => ei())
                .catch((e) => {
                    w.nx.error("Failed to load clips directory on connection open", e);
                });
    }
}
async function ei() {
    if (R.Ay.hasClips() || null == o.A || null == o.A.app) return;
    let e = await o.A.app.getPath("documents");
    if (R.Ay.getSettings().storageLocation === e)
        try {
            let e = await o.A.app.getPath("videos");
            Y.HU((0, E.CN)(e, R._c));
        } catch (e) {
            w.nx.error("Failed to resolve videos path for old default storage migration", e);
        }
}
let er = new en();
