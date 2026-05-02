"use strict";
n.d(t, { A: () => K });
var i,
    r = n(192308),
    s = n(691540),
    a = n(97483),
    o = n(228366),
    l = n(793943),
    u = n(328153),
    c = n(616356),
    d = n(186111),
    _ = n(51760),
    f = n(19575),
    h = n(459838),
    p = n(439372),
    E = n(77729),
    m = n(652896),
    g = n(967347),
    A = n(885386),
    I = n(495544),
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
class M extends p.A {
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
        if (!(0, C.Pm)() || n !== L.S7L.RTC_CONNECTED) return;
        let r = I.default.getId();
        if (t === h.x.DEFAULT) {
            this.applyUserVoiceRecording(r), this.applyUserSoundboardRecording(r);
            return;
        }
        if (t === h.x.STREAM && null != i) {
            let { ownerId: e } = (0, m.Iy)(i);
            if (e !== r) return;
            let t = S.A.getRTCConnection(i);
            if (null == t) return;
            this.applyStreamRecording(r, t);
        }
    }
    handleRTCUsersUpdate(e) {
        let { userIds: t, context: n } = e;
        n === h.x.DEFAULT &&
            t.forEach((e) => {
                this.applyUserVoiceRecording(e), this.applyUserSoundboardRecording(e);
            });
    }
    handleRTCConnectionFlags(e) {
        let { userId: t, channelId: n, guildId: i } = e;
        this.maybeShowClipsWarning(t), this.applyUserVoiceRecording(t), this.applyUserSoundboardRecording(t);
        let r = S.A.getRTCConnection(
            m._z({ streamType: null != i ? w.U4.GUILD : w.U4.CALL, ownerId: t, channelId: n, guildId: i }),
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
            e === I.default.getId() ||
            !v.A.isClipsEnabledForUser(e) ||
            (A.Q$.getSetting() &&
                (o.h.dispatch({ type: "CLIPS_SHOW_CALL_WARNING", channelId: t }), this.showClipsToast()));
    }
    handleClipsAllowVoiceRecordingUpdate() {
        T.A.getUserIds()?.forEach((e) => this.maybeShowClipsWarning(e));
    }
    handlePostConnectionOpen() {
        !(0, R.A)(_.Ay) ||
            (this.applyNativeClipsSettings(),
            (0, C.Pm)() &&
                (this.loadClipsFromStorage(),
                (null == v.A.getHardwareClassification() ||
                    null == v.A.getHardwareClassificationForDecoupled() ||
                    v.A.getHardwareClassificationVersion() !== D.V0) &&
                    this.classifyHardwareAndTrack().then((e) => {
                        o.h.dispatch({ type: "CLIPS_CLASSIFY_HARDWARE", classification: e });
                    })));
    }
    loadClipsFromStorage() {}
    handleRTCConnectionVideo(e) {
        let { userId: t, context: n, channelId: i, guildId: r } = e;
        if (n !== h.x.STREAM || !(0, R.A)(_.Ay)) return;
        let s = S.A.getRTCConnection(
            m._z({ streamType: null != r ? w.U4.GUILD : w.U4.CALL, ownerId: t, channelId: i, guildId: r }),
        );
        null != s && this.applyStreamRecording(t, s);
    }
    async classifyHardwareAndTrack() {
        try {
            let { gpuModels: e, classification: t } = await (async () => {
                let e = await (0, g.w)();
                if (e?.gpus != null) {
                    let t = e.gpus.map((e) => e.brand),
                        n = this.classifyHardware(t);
                    return { gpuModels: t, classification: n };
                }
                {
                    let e = (await E.A.processUtils.getSystemInfo()).gpus.map((e) => {
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
            ? "arm64" === E.A.app.getAppArch()
                ? O.k9.MEETS_AUTO_ENABLE
                : O.k9.MEETS_MINIMUM
            : O.k9.UNKNOWN;
    }
    applyUserVoiceRecording(e) {
        if (!(0, R.A)(_.Ay)) return;
        let t = T.A.getRTCConnection();
        if (null == t) return;
        if (e === I.default.getId()) return void t.setClipRecordUser(e, "audio", (0, b.TD)());
        let n = v.A.isVoiceRecordingAllowedForUser(e);
        t.setClipRecordUser(e, "audio", n);
    }
    applyUserSoundboardRecording(e) {
        if (!(0, R.A)(_.Ay)) return;
        let t = T.A.getRTCConnection();
        null != t && t.setClipRecordUser(e, "soundboard", (0, b.TD)());
    }
    applyStreamRecording(e, t) {
        if ((0, R.A)(_.Ay) && I.default.getId() === e) {
            let n = (0, b.TD)();
            t.setClipRecordUser(e, "audio", n), t.setClipRecordUser(e, "video", n);
            return;
        }
    }
}
var P = n(150616);
n(321073);
var x = n(626584),
    U = (((i = {}).MISSING = "missing"), (i.DOWNLOADED = "downloaded"), (i.DOWNLOADING = "downloading"), i);
let k = [
        ["laughter_screaming_krispy", "onnx", "8835cfe08b2517162462b710c44bda60c116611c997fbce4d14679a26d6d75ed"],
        ["ggml-base", "bin", "60ed5bc3dd14eea856493d334349b405782ddcaf0028d4b5df4088345fba2efe"],
    ],
    G = new x.A("ClipsAssetManager");
class F {
    state = { assets: {}, assetState: {}, catalogLastFetchTime: void 0, catalogFetchFailed: !1 };
    activeDownloads = new Map();
    catalogRefreshing = !1;
    started = !1;
    start() {
        !this.started &&
            ((this.started = !0),
            G.info("Clips asset manager started"),
            (0, b.TD)() && (G.info("Clips enabled on startup, prefetching assets"), this.maybePrefetchAssets()));
    }
    stop() {
        f.Ay.stopClipsDownloads(),
            this.activeDownloads.clear(),
            (this.started = !1),
            G.info("Clips asset manager stopped");
    }
    getAssetState(e) {
        return this.state.assetState[e];
    }
    areAllAssetsDownloaded() {
        let e = Object.values(this.state.assetState);
        return e.length > 0 && e.every((e) => e.status === U.DOWNLOADED);
    }
    async maybePrefetchAssets() {
        if (!__OVERLAY__ && (0, y.isWindows)())
            try {
                await this.refreshCatalog(), await this.prefetchAssets();
            } catch (e) {
                G.warn(`Failed to prefetch clips assets: ${e.message}`);
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
                await f.Ay.cleanupUnusedClipsFiles(t), G.info("Clips asset catalog refreshed");
            } catch (e) {
                G.warn(`Failed to refresh clips asset catalog: ${e.message}`), (this.state.catalogFetchFailed = !0);
            } finally {
                this.catalogRefreshing = !1;
            }
    }
    loadCatalog() {
        let e = { assets: {} };
        for (let [t, n, i] of k)
            e.assets[t] = { url: `https://cdn.discordapp.com/assets/content/${i}.${n}`, fileName: `${t}.${n}` };
        return G.info("Loaded clips asset catalog with assets:", Object.keys(e.assets)), e;
    }
    async scanAssetState(e) {
        if (!f.Ay.canCheckClipsFilesExist()) return;
        let t = Object.entries(e.assets).map((e) => {
            let [t, n] = e;
            return { id: t, fileName: n.fileName };
        });
        for (let { id: e, exists: n } of await f.Ay.checkClipsFilesExist(t))
            this.state.assetState[e] = { status: n ? U.DOWNLOADED : U.MISSING };
    }
    async prefetchAssets() {
        if (__OVERLAY__) return;
        let e = this.state.assets,
            t = [];
        for (let [n, i] of Object.entries(e)) {
            let e = this.state.assetState[n];
            e?.status !== U.DOWNLOADED &&
                e?.status !== U.DOWNLOADING &&
                t.push(this.downloadAsset({ assetId: n, url: i.url, fileName: i.fileName }));
        }
        G.info(`Waiting for ${t.length} clips asset downloads`),
            await Promise.all(t),
            G.info("Finished downloading all clips assets");
    }
    downloadAsset(e) {
        let { url: t, assetId: n, fileName: i } = e,
            r = this.state.assetState[n],
            s = this.activeDownloads.get(n);
        if (null != s) return s;
        if (r?.status === U.DOWNLOADED) return Promise.resolve();
        if (r?.status === U.DOWNLOADING)
            return Promise.reject(Error("Clips asset is downloading but not in active downloads map"));
        this.state.assetState[n] = { status: U.DOWNLOADING, downloadedBytes: 0 };
        let a = f.Ay.downloadClipsFile(t, i, (e) => {
            let { downloadedBytes: t, totalBytes: i } = e;
            this.state.assetState[n] = { ...this.state.assetState[n], downloadedBytes: t, totalBytes: i };
        })
            .then((e) => {
                e.fetchedFromNetwork && G.info("Downloaded clips asset from network:", n),
                    (this.state.assetState[n] = { status: U.DOWNLOADED, downloadedBytes: void 0 });
            })
            .catch((t) => {
                t?.USER_CANCELED_DOWNLOAD
                    ? G.info("User canceled the download for clips asset", e)
                    : G.error("Failed to download clips asset", { reason: t, ...e }),
                    (this.state.assetState[n] = { status: U.MISSING });
            })
            .finally(() => {
                this.activeDownloads.delete(n);
            });
        return this.activeDownloads.set(n, a), a;
    }
}
let V = new F();
var B = n(948138);
n(871421);
var H = n(731854),
    j = n(375708);
let Y = !1,
    W = null,
    K = new (class extends M {
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
        maybeOpenReminderSidebar() {
            let { enableReminderSidebar: e } = P.Z.getConfig({ location: "ClipsManager" });
            !e ||
                !v.A.canShowReminders() ||
                l.fy.getState().activePanel === l.HP.CLIPS_REMINDER ||
                d.A.hasLayers() ||
                (0, r.hasAnyModalOpen)() ||
                (0, l.nf)(l.HP.CLIPS_REMINDER);
        }
        showClipsToast() {
            (0, s.P0)({
                id: "CLIPS_IN_CALL_WARNING",
                message: j.intl.string(j.t["d+41qJ"]),
                type: a.Ck.CLIP,
                options: { duration: D.Vi },
            });
        }
        applyNativeClipsSettings(e) {
            if (!(0, R.A)(_.Ay)) return;
            let t = _.Ay.getMediaEngine(),
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
            Y || !t.supports(H.O5.CLIPS_V3)
                ? n()
                : (Y
                      ? Promise.resolve()
                      : null != W
                        ? W
                        : (W = (async () => {
                              try {
                                  await f.Ay.ensureModule("discord_clips");
                                  let e = f.Ay.requireModule("discord_clips").getModulePath(),
                                      t = _.Ay.getMediaEngine(),
                                      n = f.Ay.getClipsDataDirSync();
                                  t.setClipsDataPath(n),
                                      V.start(),
                                      t.setClipsModulePath(e),
                                      (Y = !0),
                                      D.nx.info("discord_clips module loaded, path: " + e);
                              } catch (e) {
                                  (W = null), D.nx.error("Failed to load discord_clips module", e);
                              }
                          })())
                  ).then(n);
        }
        handleClipsInitOnToggleDetection(e) {
            let t = u.Ay.getVisibleGame();
            null != t && t.id === e.game.id && this.fireClipsInitEvent();
        }
        handleClipsInitOnGamesChange(e) {
            let t = u.Ay.getVisibleGame();
            null == t ||
                (e.added.find((e) => e.pid === t.pid)
                    ? setTimeout(() => this.fireClipsInitEvent(), D.dV)
                    : this.fireClipsInitEvent());
        }
        fireClipsInitEvent() {
            if (!(0, b.TD)() || null != c.A.getCurrentUserActiveStream()) return;
            let e = u.Ay.getVisibleGame();
            if (e?.pid == null || e?.windowHandle == null || null == e.name || "" === e.name) return;
            let t = v.A.getSettings();
            o.h.dispatch({
                type: "CLIPS_INIT",
                sourceId: `window:${e?.windowHandle}`,
                applicationName: e.name,
                quality: t.clipsQuality,
            });
        }
        loadClipsFromStorage() {
            let e = v.A.getSettings().storageLocation;
            "" !== e &&
                B.Fb(e).catch((e) => {
                    D.nx.error("Failed to load clips directory on connection open", e);
                });
        }
    })();
