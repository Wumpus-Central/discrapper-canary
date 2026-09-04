n.d(t, { A: () => H });
var i = n(691540),
    r = n(97483),
    a = n(228366),
    s = n(77729),
    l = n(627363),
    o = n(710195),
    d = n(952818),
    c = n(569926),
    u = n(652896),
    _ = n(324029),
    E = n(616356),
    A = n(280450),
    h = n(303277),
    I = n(741394),
    f = n(459838),
    p = n(439372),
    T = n(967347),
    m = n(885386),
    g = n(763827),
    S = n(116956),
    N = n(174459),
    C = n(723702),
    O = n(734066),
    R = n(915725),
    L = n(915618),
    y = n(572164),
    D = n(696016),
    v = n(652215),
    b = n(325278);
class M extends p.A {
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
        CLIPS_RESTART: () => this.fireClipsInitEvent(!0),
        RTC_CONNECTION_VIDEO: (e) => this.handleRTCConnectionVideo(e),
        RTC_CONNECTION_STATE: (e) => this.handleRTCConnectionState(e),
    };
    handleRTCConnectionState(e) {
        let { context: t, state: n, streamKey: i } = e;
        if (!(0, O.Pm)() || n !== v.S7L.RTC_CONNECTED) return;
        let r = A.default.getId();
        switch (t) {
            case f.x.DEFAULT:
                this.applyUserVoiceRecording(r), this.applyUserSoundboardRecording(r);
                break;
            case f.x.STREAM: {
                if (null == i) return;
                let { ownerId: e } = (0, u.Iy)(i);
                if (e !== r) return;
                let t = S.A.getRTCConnection(i);
                if (null == t) return;
                this.applyStreamRecording(r, t);
            }
        }
    }
    handleRTCUsersUpdate(e) {
        let { userIds: t, context: n } = e;
        n === f.x.DEFAULT &&
            t.forEach((e) => {
                this.applyUserVoiceRecording(e), this.applyUserSoundboardRecording(e);
            });
    }
    handleRTCConnectionFlags(e) {
        let { userId: t, channelId: n, guildId: i } = e;
        this.maybeShowClipsWarning(t), this.applyUserVoiceRecording(t), this.applyUserSoundboardRecording(t);
        let r = S.A.getRTCConnection(
            u._z({ streamType: null != i ? b.U4.GUILD : b.U4.CALL, ownerId: t, channelId: n, guildId: i }),
        );
        null != r && this.applyStreamRecording(t, r);
    }
    handleClipsInitFailure(e) {
        let { applicationName: t, errMsg: n } = e;
        N.default.track(v.HAw.CLIPS_INIT_FAILURE, { application_name: t, error_message: n, clip_runtime: D.sT });
    }
    maybeShowClipsWarning(e) {
        let t = g.A.getChannelId();
        null == t ||
            R.Ay.getClipsWarningShown(t) ||
            e === A.default.getId() ||
            !R.Ay.isClipsEnabledForUser(e) ||
            (m.Q$.getSetting() &&
                (a.h.dispatch({ type: "CLIPS_SHOW_CALL_WARNING", channelId: t }), this.showClipsToast()));
    }
    handleClipsAllowVoiceRecordingUpdate() {
        g.A.getUserIds()?.forEach((e) => this.maybeShowClipsWarning(e));
    }
    handlePostConnectionOpen() {
        !(0, L.A)(h.Ay) ||
            (this.applyNativeClipsSettings(),
            (0, O.Pm)() &&
                (this.loadClipsFromStorage(),
                this.maybeStartNtpClock(),
                (null == R.Ay.getHardwareClassification() ||
                    null == R.Ay.getHardwareClassificationForDecoupled() ||
                    R.Ay.getHardwareClassificationVersion() !== D.V0) &&
                    this.classifyHardwareAndTrack().then((e) => {
                        a.h.dispatch({ type: "CLIPS_CLASSIFY_HARDWARE", classification: e });
                    })));
    }
    loadClipsFromStorage() {}
    handleRTCConnectionVideo(e) {
        let { userId: t, context: n, channelId: i, guildId: r } = e;
        if (n !== f.x.STREAM || !(0, L.A)(h.Ay)) return;
        let a = S.A.getRTCConnection(
            u._z({ streamType: null != r ? b.U4.GUILD : b.U4.CALL, ownerId: t, channelId: i, guildId: r }),
        );
        null != a && this.applyStreamRecording(t, a);
    }
    async classifyHardwareAndTrack() {
        try {
            let { gpuModels: e, classification: t } = await (async () => {
                let e = await (0, T.w)();
                if (e?.gpus != null) {
                    let t = e.gpus.map((e) => e.brand).filter((e) => null != e && "" !== e),
                        n = this.classifyHardware(t);
                    return { gpuModels: t, classification: n };
                }
                {
                    let e = (await s.A.processUtils.getSystemInfo()).gpus.map((e) => {
                            let { model: t } = e;
                            return t;
                        }),
                        t = this.classifyHardware(e);
                    return { gpuModels: e, classification: t };
                }
            })();
            return (
                N.default.track(v.HAw.CLIPS_HARDWARE_CLASSIFICATION, {
                    classification: t,
                    version: D.V0,
                    gpu_models: e,
                    clip_runtime: D.sT,
                }),
                t
            );
        } catch (e) {
            return D.k9.UNKNOWN;
        }
    }
    classifyHardware(e) {
        if ((0, C.isWindows)()) {
            let t = e.some((e) => D.sc.test(e)),
                n = e.some((e) => D.l_.test(e));
            return t ? D.k9.MEETS_AUTO_ENABLE : n ? D.k9.MEETS_MINIMUM : D.k9.BELOW_MINIMUM;
        }
        return (0, C.isMac)()
            ? "arm64" === s.A.app.getAppArch()
                ? D.k9.MEETS_AUTO_ENABLE
                : D.k9.MEETS_MINIMUM
            : D.k9.UNKNOWN;
    }
    applyUserVoiceRecording(e) {
        if (!(0, L.A)(h.Ay)) return;
        let t = g.A.getRTCConnection();
        if (null == t) return;
        if (e === A.default.getId()) return void t.setClipRecordUser(e, "audio", (0, y.T)());
        let n = R.Ay.isVoiceRecordingAllowedForUser(e);
        t.setClipRecordUser(e, "audio", n);
    }
    applyUserSoundboardRecording(e) {
        if (!(0, L.A)(h.Ay)) return;
        let t = g.A.getRTCConnection();
        null != t && t.setClipRecordUser(e, "soundboard", (0, y.T)());
    }
    applyStreamRecording(e, t) {
        if ((0, L.A)(h.Ay) && A.default.getId() === e) {
            let n = (0, y.T)();
            t.setClipRecordUser(e, "audio", n), t.setClipRecordUser(e, "video", n);
            return;
        }
    }
}
let P = (0, n(945810).mj)({
    kind: "user",
    name: "2026-07-clips-ntp-clock",
    defaultConfig: { useNtpClock: !1 },
    variations: { 1: { useNtpClock: !0 } },
});
var U = n(655180);
n(282098);
var w = n(201538),
    G = n(409067),
    x = n(227628),
    k = n(468550),
    F = n(375708);
class V extends M {
    constructor() {
        super(),
            Object.assign(this.actions, {
                CLIPS_SAVE_CLIP: (e) => {
                    let { clip: t } = e;
                    t.isCandidate || this.maybeOpenQuickBar();
                },
                CLIPS_PROMOTE_CLIP_CANDIDATE: (e) => this.maybeOpenQuickBar(),
                CLIPS_SESSION_STOP: (e) => {
                    let { gameId: t } = e;
                    return this.handleClipsReminder(t ?? void 0);
                },
                CLIPS_SESSION_START: (e) => {
                    let { previousGameId: t } = e;
                    null != t ? this.handleClipsReminder(t) : (0, k.kF)();
                },
                RPC_SERVER_READY: () => {
                    (0, _.se)(R.Ay.getEnableAutoclipping());
                },
            });
    }
    handlePostConnectionOpen() {
        super.handlePostConnectionOpen(), (0, _.se)(R.Ay.getEnableAutoclipping());
    }
    stores = new Map().set(o.A, () => this.applyNativeClipsSettings());
    maybeOpenQuickBar() {
        if (!R.Ay.canShowReminders()) return;
        let e = d.Ay.getVisibleGame();
        null == e ||
            (R.Ay.getLastClipsSession()
                ?.newClipIds.map(R.Ay.getClipById)
                .some((t) => t?.applicationId === e.id) &&
                (x.MZ.getState().isOpen || (0, x.w9)()));
    }
    handleClipsReminder(e) {
        if (null == e || !R.Ay.canShowReminders()) return;
        let t = R.Ay.getLastClipsSession();
        if (null == t || 0 === t.newClipIds.length) return;
        let n = !R.Ay.getSettings().showPovClipsInGallery;
        t.newClipIds.some((t) => {
            let i = R.Ay.getClipById(t);
            return null != i && i.applicationId === e && (!n || !(0, G.kD)(i));
        }) && (0, k.M8)(e);
    }
    showClipsToast() {
        (0, i.P0)({
            id: "CLIPS_IN_CALL_WARNING",
            message: F.intl.string(F.t["d+41qJ"]),
            type: r.Ck.CLIP,
            options: { duration: D.Vi },
        });
    }
    applyNativeClipsSettings(e) {
        if ((e?.settings.enableAutoclipping != null && (0, _.se)(e.settings.enableAutoclipping), !(0, L.A)(h.Ay)))
            return;
        (0, w.mj)();
        let t = h.Ay.getMediaEngine(),
            n = () => {
                let n = R.Ay.getSettings(),
                    i = (0, y.T)();
                if (
                    (t.setClipsRecordingEnabled(i),
                    t.setClipBufferLength(i ? n.clipsLength / 1e3 : 0),
                    e?.settings.clipsEnabled === !0 && this.fireClipsInitEvent(),
                    null == e || e?.settings.clipsQuality != null)
                ) {
                    let { frameRate: i, resolution: r, bitratePercent: a } = n.clipsQuality;
                    t.setClipsQualitySettings(r <= 480 ? (r / 3) * 4 : (r / 9) * 16, r, i, a) ||
                        null == e ||
                        this.fireClipsInitEvent();
                }
            };
        (0, y.T)() ? ((0, w.t_)() ? n() : (0, w.so)().then(n)) : n();
    }
    handleClipsInitOnToggleDetection(e) {
        let t = d.Ay.getVisibleGame();
        null != t && t.id === e.game.id && (this.prefetchRichPresenceData(t.id), this.fireClipsInitEvent());
    }
    handleClipsInitOnGamesChange(e) {
        let t = d.Ay.getVisibleGame();
        (0, x.yj)(),
            null == t ||
                (this.prefetchRichPresenceData(t.id),
                e.added.find((e) => e.pid === t.pid)
                    ? setTimeout(() => this.fireClipsInitEvent(), D.dV)
                    : this.fireClipsInitEvent(),
                this.maybeOpenQuickBar());
    }
    prefetchRichPresenceData(e) {
        c.I.fetchMany([e]), l.YY.fetchMany([e]);
    }
    handleStreamEnded(e) {
        if (!(0, y.T)()) return;
        let { ownerId: t } = (0, u.Iy)(e.streamKey);
        t === A.default.getId() && this.fireClipsInitEvent();
    }
    fireClipsInitEvent() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!(0, y.T)() || (!e && null != E.A.getCurrentUserActiveStream())) return;
        let t = d.Ay.getVisibleGame();
        if (t?.pid == null || t?.windowHandle == null || null == t.name || "" === t.name) return;
        if (!(0, w.t_)())
            return void (0, w.so)().then(() => {
                (0, w.t_)() && this.fireClipsInitEvent(e);
            });
        let n = R.Ay.getSettings();
        a.h.dispatch({
            type: "CLIPS_INIT",
            sourceId: `window:${t?.windowHandle}`,
            applicationName: t.name,
            quality: n.clipsQuality,
        });
    }
    loadClipsFromStorage() {
        let { storageLocation: e } = R.Ay.getSettings();
        "" !== e &&
            e !== R.he &&
            U.Fb(e)
                .then(() => B())
                .catch((e) => {
                    D.nx.error("Failed to load clips directory on connection open", e);
                });
    }
    maybeStartNtpClock() {
        let { useNtpClock: e } = P.getConfig({ location: "ClipsManager#handlePostConnectionOpen" });
        e && s.A.ntpClock?.start().catch(() => {});
    }
}
async function B() {
    if (R.Ay.hasClips() || null == s.A || null == s.A.app) return;
    let e = await s.A.app.getPath("documents");
    if (R.Ay.getSettings().storageLocation === e)
        try {
            let e = await s.A.app.getPath("videos");
            U.HU((0, I.CN)(e, R._c));
        } catch (e) {
            D.nx.error("Failed to resolve videos path for old default storage migration", e);
        }
}
let H = new V();
