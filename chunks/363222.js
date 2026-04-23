"use strict";
n.d(t, { A: () => H });
var i,
    r = n(691540),
    s = n(97483),
    a = n(228366),
    o = n(328153),
    l = n(616356),
    d = n(969341),
    _ = n(19575),
    u = n(205693),
    c = n(439372),
    E = n(77729),
    h = n(652896),
    m = n(967347),
    f = n(253932),
    g = n(495544),
    p = n(763827),
    A = n(116956),
    I = n(954571),
    T = n(723702),
    S = n(734066),
    N = n(274372),
    C = n(372684),
    R = n(915618),
    O = n(572164),
    y = n(696016),
    v = n(652215),
    D = n(325278);
class L extends c.A {
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
        if (!(0, S.Pm)() || n !== v.S7L.RTC_CONNECTED) return;
        let r = g.default.getId();
        if (t === u.x.DEFAULT) {
            this.applyUserVoiceRecording(r), this.applyUserSoundboardRecording(r);
            return;
        }
        if (t === u.x.STREAM && null != i) {
            let { ownerId: e } = (0, h.Iy)(i);
            if (e !== r) return;
            let t = A.A.getRTCConnection(i);
            if (null == t) return;
            this.applyStreamRecording(r, t);
        }
    }
    handleRTCUsersUpdate(e) {
        let { userIds: t, context: n } = e;
        n === u.x.DEFAULT &&
            t.forEach((e) => {
                this.applyUserVoiceRecording(e), this.applyUserSoundboardRecording(e);
            });
    }
    handleRTCConnectionFlags(e) {
        let { userId: t, channelId: n, guildId: i } = e;
        this.maybeShowClipsWarning(t), this.applyUserVoiceRecording(t), this.applyUserSoundboardRecording(t);
        let r = A.A.getRTCConnection(
            h._z({ streamType: null != i ? D.U4.GUILD : D.U4.CALL, ownerId: t, channelId: n, guildId: i }),
        );
        null != r && this.applyStreamRecording(t, r);
    }
    handleClipsInitFailure(e) {
        let { applicationName: t, errMsg: n } = e;
        I.default.track(v.HAw.CLIPS_INIT_FAILURE, { application_name: t, error_message: n });
    }
    maybeShowClipsWarning(e) {
        let t = p.A.getChannelId();
        null == t ||
            N.A.getClipsWarningShown(t) ||
            e === g.default.getId() ||
            !N.A.isClipsEnabledForUser(e) ||
            (f.Q$.getSetting() &&
                (a.h.dispatch({ type: "CLIPS_SHOW_CALL_WARNING", channelId: t }), this.showClipsToast()));
    }
    handleClipsAllowVoiceRecordingUpdate() {
        p.A.getUserIds()?.forEach((e) => this.maybeShowClipsWarning(e));
    }
    handlePostConnectionOpen() {
        !(0, R.A)(d.Ay) ||
            (this.applyNativeClipsSettings(),
            (0, S.Pm)() &&
                (this.loadClipsFromStorage(),
                (null == N.A.getHardwareClassification() ||
                    null == N.A.getHardwareClassificationForDecoupled() ||
                    N.A.getHardwareClassificationVersion() !== y.V0) &&
                    this.classifyHardwareAndTrack().then((e) => {
                        a.h.dispatch({ type: "CLIPS_CLASSIFY_HARDWARE", classification: e });
                    })));
    }
    loadClipsFromStorage() {}
    handleRTCConnectionVideo(e) {
        let { userId: t, context: n, channelId: i, guildId: r } = e;
        if (n !== u.x.STREAM || !(0, R.A)(d.Ay)) return;
        let s = A.A.getRTCConnection(
            h._z({ streamType: null != r ? D.U4.GUILD : D.U4.CALL, ownerId: t, channelId: i, guildId: r }),
        );
        null != s && this.applyStreamRecording(t, s);
    }
    async classifyHardwareAndTrack() {
        try {
            let { gpuModels: e, classification: t } = await (async () => {
                let e = await (0, m.w)();
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
                I.default.track(v.HAw.CLIPS_HARDWARE_CLASSIFICATION, {
                    classification: t,
                    version: y.V0,
                    gpu_models: e,
                }),
                t
            );
        } catch (e) {
            return C.k9.UNKNOWN;
        }
    }
    classifyHardware(e) {
        if ((0, T.isWindows)()) {
            let t = e.some((e) => y.sc.test(e)),
                n = e.some((e) => y.l_.test(e));
            return t ? C.k9.MEETS_AUTO_ENABLE : n ? C.k9.MEETS_MINIMUM : C.k9.BELOW_MINIMUM;
        }
        return (0, T.isMac)()
            ? "arm64" === E.A.app.getAppArch()
                ? C.k9.MEETS_AUTO_ENABLE
                : C.k9.MEETS_MINIMUM
            : C.k9.UNKNOWN;
    }
    applyUserVoiceRecording(e) {
        if (!(0, R.A)(d.Ay)) return;
        let t = p.A.getRTCConnection();
        if (null == t) return;
        if (e === g.default.getId()) return void t.setClipRecordUser(e, "audio", (0, O.TD)());
        let n = N.A.isVoiceRecordingAllowedForUser(e);
        t.setClipRecordUser(e, "audio", n);
    }
    applyUserSoundboardRecording(e) {
        if (!(0, R.A)(d.Ay)) return;
        let t = p.A.getRTCConnection();
        null != t && t.setClipRecordUser(e, "soundboard", (0, O.TD)());
    }
    applyStreamRecording(e, t) {
        if ((0, R.A)(d.Ay) && g.default.getId() === e) {
            let n = (0, O.TD)();
            t.setClipRecordUser(e, "audio", n), t.setClipRecordUser(e, "video", n);
            return;
        }
    }
}
n(321073);
var b = n(626584),
    w = (((i = {}).MISSING = "missing"), (i.DOWNLOADED = "downloaded"), (i.DOWNLOADING = "downloading"), i);
let P = [
        ["laughter_screaming_krispy", "onnx", "8835cfe08b2517162462b710c44bda60c116611c997fbce4d14679a26d6d75ed"],
        ["ggml-base", "bin", "60ed5bc3dd14eea856493d334349b405782ddcaf0028d4b5df4088345fba2efe"],
    ],
    k = new b.A("ClipsAssetManager");
class M {
    state = { assets: {}, assetState: {}, catalogLastFetchTime: void 0, catalogFetchFailed: !1 };
    activeDownloads = new Map();
    catalogRefreshing = !1;
    started = !1;
    start() {
        !this.started &&
            ((this.started = !0),
            k.info("Clips asset manager started"),
            (0, O.TD)() && (k.info("Clips enabled on startup, prefetching assets"), this.maybePrefetchAssets()));
    }
    stop() {
        _.Ay.stopClipsDownloads(),
            this.activeDownloads.clear(),
            (this.started = !1),
            k.info("Clips asset manager stopped");
    }
    getAssetState(e) {
        return this.state.assetState[e];
    }
    areAllAssetsDownloaded() {
        let e = Object.values(this.state.assetState);
        return e.length > 0 && e.every((e) => e.status === w.DOWNLOADED);
    }
    async maybePrefetchAssets() {
        if (!__OVERLAY__ && (0, T.isWindows)())
            try {
                await this.refreshCatalog(), await this.prefetchAssets();
            } catch (e) {
                k.warn(`Failed to prefetch clips assets: ${e.message}`);
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
                await _.Ay.cleanupUnusedClipsFiles(t), k.info("Clips asset catalog refreshed");
            } catch (e) {
                k.warn(`Failed to refresh clips asset catalog: ${e.message}`), (this.state.catalogFetchFailed = !0);
            } finally {
                this.catalogRefreshing = !1;
            }
    }
    loadCatalog() {
        let e = { assets: {} };
        for (let [t, n, i] of P)
            e.assets[t] = { url: `https://cdn.discordapp.com/assets/content/${i}.${n}`, fileName: `${t}.${n}` };
        return k.info("Loaded clips asset catalog with assets:", Object.keys(e.assets)), e;
    }
    async scanAssetState(e) {
        if (!_.Ay.canCheckClipsFilesExist()) return;
        let t = Object.entries(e.assets).map((e) => {
            let [t, n] = e;
            return { id: t, fileName: n.fileName };
        });
        for (let { id: e, exists: n } of await _.Ay.checkClipsFilesExist(t))
            this.state.assetState[e] = { status: n ? w.DOWNLOADED : w.MISSING };
    }
    async prefetchAssets() {
        if (__OVERLAY__) return;
        let e = this.state.assets,
            t = [];
        for (let [n, i] of Object.entries(e)) {
            let e = this.state.assetState[n];
            e?.status !== w.DOWNLOADED &&
                e?.status !== w.DOWNLOADING &&
                t.push(this.downloadAsset({ assetId: n, url: i.url, fileName: i.fileName }));
        }
        k.info(`Waiting for ${t.length} clips asset downloads`),
            await Promise.all(t),
            k.info("Finished downloading all clips assets");
    }
    downloadAsset(e) {
        let { url: t, assetId: n, fileName: i } = e,
            r = this.state.assetState[n],
            s = this.activeDownloads.get(n);
        if (null != s) return s;
        if (r?.status === w.DOWNLOADED) return Promise.resolve();
        if (r?.status === w.DOWNLOADING)
            return Promise.reject(Error("Clips asset is downloading but not in active downloads map"));
        this.state.assetState[n] = { status: w.DOWNLOADING, downloadedBytes: 0 };
        let a = _.Ay.downloadClipsFile(t, i, (e) => {
            let { downloadedBytes: t, totalBytes: i } = e;
            this.state.assetState[n] = { ...this.state.assetState[n], downloadedBytes: t, totalBytes: i };
        })
            .then((e) => {
                e.fetchedFromNetwork && k.info("Downloaded clips asset from network:", n),
                    (this.state.assetState[n] = { status: w.DOWNLOADED, downloadedBytes: void 0 });
            })
            .catch((t) => {
                t?.USER_CANCELED_DOWNLOAD
                    ? k.info("User canceled the download for clips asset", e)
                    : k.error("Failed to download clips asset", { reason: t, ...e }),
                    (this.state.assetState[n] = { status: w.MISSING });
            })
            .finally(() => {
                this.activeDownloads.delete(n);
            });
        return this.activeDownloads.set(n, a), a;
    }
}
let U = new M();
var x = n(399925);
n(822151);
var G = n(731854),
    V = n(985018);
let F = !1,
    B = null,
    H = new (class extends L {
        showClipsToast() {
            (0, r.P0)({
                id: "CLIPS_IN_CALL_WARNING",
                message: V.intl.string(V.t["d+41qJ"]),
                type: s.Ck.CLIP,
                options: { duration: y.Vi },
            });
        }
        applyNativeClipsSettings(e) {
            if (!(0, R.A)(d.Ay)) return;
            let t = d.Ay.getMediaEngine(),
                n = () => {
                    let n = N.A.getSettings(),
                        i = (0, O.TD)();
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
            F || !t.supports(G.O5.CLIPS_V3)
                ? n()
                : (F
                      ? Promise.resolve()
                      : null != B
                        ? B
                        : (B = (async () => {
                              try {
                                  await _.Ay.ensureModule("discord_clips");
                                  let e = _.Ay.requireModule("discord_clips").getModulePath(),
                                      t = d.Ay.getMediaEngine(),
                                      n = _.Ay.getClipsDataDirSync();
                                  t.setClipsDataPath(n),
                                      U.start(),
                                      t.setClipsModulePath(e),
                                      (F = !0),
                                      y.nx.info("discord_clips module loaded, path: " + e);
                              } catch (e) {
                                  (B = null), y.nx.error("Failed to load discord_clips module", e);
                              }
                          })())
                  ).then(n);
        }
        handleClipsInitOnToggleDetection(e) {
            let t = o.Ay.getVisibleGame();
            null != t && t.id === e.game.id && this.fireClipsInitEvent();
        }
        handleClipsInitOnGamesChange(e) {
            let t = o.Ay.getVisibleGame();
            null == t ||
                (e.added.find((e) => e.pid === t.pid)
                    ? setTimeout(() => this.fireClipsInitEvent(), y.dV)
                    : this.fireClipsInitEvent());
        }
        fireClipsInitEvent() {
            if (!(0, O.TD)() || null != l.A.getCurrentUserActiveStream()) return;
            let e = o.Ay.getVisibleGame();
            if (e?.pid == null || e?.windowHandle == null || null == e.name || "" === e.name) return;
            let t = N.A.getSettings();
            a.h.dispatch({
                type: "CLIPS_INIT",
                sourceId: `window:${e?.windowHandle}`,
                applicationName: e.name,
                quality: t.clipsQuality,
            });
        }
        loadClipsFromStorage() {
            let e = N.A.getSettings().storageLocation;
            "" !== e &&
                x.Fb(e).catch((e) => {
                    y.nx.error("Failed to load clips directory on connection open", e);
                });
        }
    })();
