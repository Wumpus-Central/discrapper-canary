n.d(t, { A: () => ee });
var i = n(858899),
    r = n(176781),
    a = n(73153),
    s = n(77729),
    l = n(627363),
    o = n(710195),
    d = n(952818),
    c = n(454908),
    u = n(652896),
    _ = n(324029),
    E = n(72611),
    A = n(616356),
    h = n(280450),
    f = n(999926),
    I = n(741394),
    p = n(734066),
    m = n(205693),
    T = n(439372),
    g = n(967347),
    S = n(253932),
    N = n(617617),
    C = n(734057),
    O = n(763827),
    R = n(728557),
    L = n(287809),
    y = n(174459),
    D = n(723702),
    b = n(312809);
let v = (0, n(945810).mj)({
    kind: "user",
    name: "2026-10-clips-default-on-geo",
    defaultConfig: { allowDefaultOn: !1 },
    variations: { 1: { allowDefaultOn: !0 } },
});
var P = n(738935),
    M = n(572164),
    U = n(696016),
    w = n(652215),
    G = n(325278),
    x = n(731854);
function k() {
    return f.Ay.getMediaEngine().supports(x.O5.UNIFIED_CAPTURE_BROKER);
}
class F extends T.A {
    actions = {
        POST_CONNECTION_OPEN: (e) => this.handlePostConnectionOpen(),
        RTC_CONNECTION_FLAGS: (e) => this.handleRTCConnectionFlags(e),
        RTC_CONNECTION_USERS_MERGED: (e) => this.handleRTCUsersUpdate(e),
        CLIPS_INIT_FAILURE: (e) => this.handleClipsInitFailure(e),
        CLIPS_SETTINGS_UPDATE: (e) => this.applyNativeClipsSettings(e),
        CLIPS_ALLOW_VOICE_RECORDING_UPDATE: () => this.handleClipsAllowVoiceRecordingUpdate(),
        STREAM_START: () => {
            k() || this.applyNativeClipsSettings();
        },
        STREAM_DELETE: (e) => {
            k() || this.handleStreamEnded(e);
        },
        STREAM_CLOSE: (e) => {
            k() || this.handleStreamEnded(e);
        },
        RUNNING_GAME_TOGGLE_DETECTION: (e) => this.handleClipsInitOnToggleDetection(e),
        RUNNING_GAMES_CHANGE: (e) => this.handleClipsInitOnGamesChange(e),
        CLIPS_RESTART: () => this.fireClipsInitEvent(!0),
        RTC_CONNECTION_VIDEO: (e) => this.handleRTCConnectionVideo(e),
        RTC_CONNECTION_STATE: (e) => this.handleRTCConnectionState(e),
    };
    handleRTCConnectionState(e) {
        let { context: t, state: n, streamKey: i } = e;
        if (!(0, p.Pm)() || n !== w.S7L.RTC_CONNECTED) return;
        let r = h.default.getId();
        switch (t) {
            case m.x.DEFAULT:
                (this.applyUserVoiceRecording(r), this.applyUserSoundboardRecording(r));
                break;
            case m.x.STREAM: {
                if (null == i) return;
                let { ownerId: e } = (0, u.Iy)(i);
                if (e !== r) return;
                let t = R.A.getRTCConnection(i);
                if (null == t) return;
                this.applyStreamRecording(r, t);
            }
        }
    }
    handleRTCUsersUpdate(e) {
        let { userIds: t, context: n } = e;
        n === m.x.DEFAULT &&
            t.forEach((e) => {
                (this.applyUserVoiceRecording(e), this.applyUserSoundboardRecording(e));
            });
    }
    handleRTCConnectionFlags(e) {
        let { userId: t, channelId: n, guildId: i } = e;
        (this.maybeShowClipsWarning(t), this.applyUserVoiceRecording(t), this.applyUserSoundboardRecording(t));
        let r = R.A.getRTCConnection(
            u._z({ streamType: null != i ? G.U4.GUILD : G.U4.CALL, ownerId: t, channelId: n, guildId: i }),
        );
        null != r && this.applyStreamRecording(t, r);
    }
    handleClipsInitFailure(e) {
        let { applicationName: t, errMsg: n } = e;
        y.default.track(w.HAw.CLIPS_INIT_FAILURE, { application_name: t, error_message: n, clip_runtime: U.sT });
    }
    maybeShowClipsWarning(e) {
        let t = O.A.getChannelId();
        null == t ||
            P.Ay.getClipsWarningShown(t) ||
            e === h.default.getId() ||
            !P.Ay.isClipsEnabledForUser(e) ||
            (S.Q$.getSetting() &&
                (a.h.dispatch({ type: "CLIPS_SHOW_CALL_WARNING", channelId: t }), this.showClipsToast()));
    }
    handleClipsAllowVoiceRecordingUpdate() {
        O.A.getUserIds()?.forEach((e) => this.maybeShowClipsWarning(e));
    }
    handlePostConnectionOpen() {
        if (!(0, p.ri)(f.Ay) || (this.applyNativeClipsSettings(), !(0, p.Pm)())) return;
        (this.loadClipsFromStorage(), this.maybeStartNtpClock());
        let e = P.Ay.getHardwareClassification();
        if (
            null != e &&
            null != P.Ay.getHardwareClassificationForDecoupled() &&
            P.Ay.getHardwareClassificationVersion() === U.V0
        ) {
            let t = this.getClipsDefaultSettingsDecision(e);
            null != t && this.applyClipsDefaultSettings(e, t);
            return;
        }
        this.classifyHardwareAndTrack().then((e) => {
            this.applyClipsDefaultSettings(e, this.getClipsDefaultSettingsDecision(e));
        });
    }
    async applyClipsDefaultSettings(e, t) {
        let n = P.Ay.getState().clipsSettings.clipsEnabled,
            i = P.Ay.getClipsDefaultSettingsState().clipsEnabledSource,
            r = P.Ay.getEnableAutoclipping(),
            s = null != P.Ay.getHardwareClassification();
        if (
            (await a.h.dispatch({ type: "CLIPS_APPLY_DEFAULT_SETTINGS", classification: e, decision: t }),
            this.applyNativeClipsSettings(),
            null == t)
        )
            return;
        let l = S.Q$.getSetting(),
            o = N.A.settings.clips?.allowVoiceRecording == null && !t.allowVoiceRecording;
        (o && this.updateAllowVoiceRecordingDefault(!1),
            y.default.track(w.HAw.CLIPS_DEFAULT_SETTINGS_APPLIED, {
                hardware_classification: e,
                was_hardware_classified: s,
                nsfw_allowed: t.nsfwAllowed,
                geo_allowed: t.geoAllowed,
                default_clips_enabled: t.clipsEnabled,
                version: U.l6,
                previous_clips_enabled: n,
                previous_clips_enabled_source: i,
                actual_clips_enabled: P.Ay.getState().clipsSettings.clipsEnabled,
                clips_enabled_source: P.Ay.getClipsDefaultSettingsState().clipsEnabledSource,
                default_autoclipping_enabled: t.enableAutoclipping,
                previous_autoclipping_enabled: r,
                actual_autoclipping_enabled: P.Ay.getEnableAutoclipping(),
                default_allow_voice_recording: t.allowVoiceRecording,
                previous_allow_voice_recording: l,
                actual_allow_voice_recording: l && !o,
                clip_runtime: U.sT,
            }));
    }
    async updateAllowVoiceRecordingDefault(e) {
        (await S.Q$.updateSetting(e), a.h.dispatch({ type: "CLIPS_ALLOW_VOICE_RECORDING_UPDATE" }));
    }
    getClipsDefaultSettingsDecision(e) {
        if (P.Ay.getClipsDefaultSettingsState().version >= U.l6) return null;
        let t = L.default.getCurrentUser();
        if (!(0, p.qj)(t) || !b.A.getConfig({ location: "getClipsDefaultSettingsDecision" }).enabled) return null;
        let n = t?.nsfwAllowed ?? null,
            i = !0 === n && e === U.k9.MEETS_AUTO_ENABLE,
            r = !0 === n ? v.getConfig({ location: "getClipsDefaultSettingsDecision" }).allowDefaultOn : null;
        return {
            clipsEnabled: i,
            enableAutoclipping: i && !0 === r,
            allowVoiceRecording: !0 === r,
            nsfwAllowed: n,
            geoAllowed: r,
        };
    }
    loadClipsFromStorage() {}
    handleRTCConnectionVideo(e) {
        let { userId: t, context: n, channelId: i, guildId: r } = e;
        if (n !== m.x.STREAM || !(0, p.ri)(f.Ay)) return;
        let a = R.A.getRTCConnection(
            u._z({ streamType: null != r ? G.U4.GUILD : G.U4.CALL, ownerId: t, channelId: i, guildId: r }),
        );
        null != a && this.applyStreamRecording(t, a);
    }
    async classifyHardwareAndTrack() {
        try {
            let { gpuModels: e, classification: t } = await (async () => {
                let e = await (0, g.w)();
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
                y.default.track(w.HAw.CLIPS_HARDWARE_CLASSIFICATION, {
                    classification: t,
                    version: U.V0,
                    gpu_models: e,
                    clip_runtime: U.sT,
                }),
                t
            );
        } catch (e) {
            return U.k9.UNKNOWN;
        }
    }
    classifyHardware(e) {
        if ((0, D.isWindows)()) {
            let t = e.some((e) => U.sc.test(e)),
                n = e.some((e) => U.l_.test(e));
            return t ? U.k9.MEETS_AUTO_ENABLE : n ? U.k9.MEETS_MINIMUM : U.k9.BELOW_MINIMUM;
        }
        return (0, D.isMac)()
            ? "arm64" === s.A.app.getAppArch()
                ? U.k9.MEETS_AUTO_ENABLE
                : U.k9.MEETS_MINIMUM
            : U.k9.UNKNOWN;
    }
    applyUserVoiceRecording(e) {
        if (!(0, p.ri)(f.Ay)) return;
        let t = O.A.getRTCConnection();
        if (null == t) return;
        if (C.A.getChannel(O.A.getChannelId())?.isGuildStageVoice()) return void t.setClipRecordUser(e, "audio", !1);
        if (e === h.default.getId()) return void t.setClipRecordUser(e, "audio", (0, M.T)());
        let n = P.Ay.isVoiceRecordingAllowedForUser(e);
        t.setClipRecordUser(e, "audio", n);
    }
    applyUserSoundboardRecording(e) {
        if (!(0, p.ri)(f.Ay)) return;
        let t = O.A.getRTCConnection();
        null != t && t.setClipRecordUser(e, "soundboard", (0, M.T)());
    }
    applyStreamRecording(e, t) {
        if ((0, p.ri)(f.Ay) && h.default.getId() === e) {
            let n = (0, M.T)();
            (t.setClipRecordUser(e, "audio", n), t.setClipRecordUser(e, "video", n));
            return;
        }
    }
}
var B = n(341923),
    V = n(775363),
    H = n(614584);
n(423341);
var j = n(201538),
    W = n(564973),
    Y = n(409067),
    K = n(227628),
    $ = n(468550),
    z = n(171251),
    X = n(826685),
    q = n(190443),
    Z = n(105292);
class Q extends F {
    constructor() {
        (super(),
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
                    null != t ? this.handleClipsReminder(t) : (0, $.kF)();
                },
                RPC_SERVER_READY: () => this.installGameEventIntegrations(),
                CLIPS_APPLY_DEFAULT_SETTINGS: (e) => {
                    let { decision: t } = e;
                    null != t && this.installGameEventIntegrations();
                },
            }));
    }
    handlePostConnectionOpen() {
        (super.handlePostConnectionOpen(), this.installGameEventIntegrations());
    }
    async installGameEventIntegrations() {
        (0, B.s)() && (await W.b.fetchMany([z.w], [X.b], [q.e]));
        let e = (0, M.T)() && P.Ay.getEnableAutoclipping();
        ((0, _.se)(e), (0, E.eZ)(e), (0, V.B)(e));
    }
    maybeFetchAutoclipsCapabilities(e) {
        let { force: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        null == e || ((0, B.s)() && P.Ay.getEnableAutoclipping() && (t ? W.b.refetchMany([e]) : W.b.fetchMany([e])));
    }
    stores = new Map().set(o.A, () => this.applyNativeClipsSettings());
    maybeOpenQuickBar() {
        if (!P.Ay.canShowReminders()) return;
        let e = d.Ay.getVisibleGame();
        null == e ||
            (P.Ay.getLastClipsSession()
                ?.clipIds.map(P.Ay.getClipById)
                .some((t) => t?.applicationId === e.id) &&
                (K.MZ.getState().isOpen || (0, K.w9)()));
    }
    handleClipsReminder(e) {
        if (null == e || !P.Ay.canShowReminders()) return;
        let t = P.Ay.getLastClipsSession();
        if (null == t || !t.hasClips) return;
        let n = !P.Ay.getSettings().showPovClipsInGallery;
        t.clipIds.some((t) => {
            let i = P.Ay.getClipById(t);
            return null != i && i.applicationId === e && (!n || !(0, Y.kD)(i));
        }) && (0, $.M8)(e);
    }
    showClipsToast() {
        (0, i.P0)({ text: Z.intl.string(Z.t["d+41qJ"]), icon: r.x, duration: U.Vi });
    }
    applyNativeClipsSettings(e) {
        if (
            ((e?.settings.clipsEnabled != null || e?.settings.enableAutoclipping != null) &&
                this.installGameEventIntegrations(),
            !(0, p.ri)(f.Ay))
        )
            return;
        (0, j.mj)();
        let t = f.Ay.getMediaEngine(),
            n = () => {
                let n = P.Ay.getSettings(),
                    i = (0, M.T)();
                t.setClipsRecordingEnabled(i);
                let r = !i && !t.supports(x.O5.UNIFIED_CAPTURE_BROKER);
                if (
                    (t.setClipBufferLength(r ? 0 : n.clipsLength / 1e3),
                    e?.settings.clipsEnabled === !0 && this.fireClipsInitEvent(),
                    null == e || e?.settings.clipsQuality != null)
                ) {
                    let { frameRate: i, resolution: r, bitratePercent: a } = n.clipsQuality;
                    t.setClipsQualitySettings(r <= 480 ? (r / 3) * 4 : (r / 9) * 16, r, i, a) ||
                        null == e ||
                        this.fireClipsInitEvent();
                }
            };
        (0, M.T)() ? ((0, j.t_)() ? n() : (0, j.so)().then(n)) : n();
    }
    handleClipsInitOnToggleDetection(e) {
        let t = d.Ay.getVisibleGame();
        null != t &&
            t.id === e.game.id &&
            (this.prefetchRichPresenceData(t.id),
            this.maybeFetchAutoclipsCapabilities(t.id, { force: !0 }),
            this.fireClipsInitEvent());
    }
    handleClipsInitOnGamesChange(e) {
        let t = d.Ay.getVisibleGame();
        if (((0, K.yj)(), null == t)) return;
        this.prefetchRichPresenceData(t.id);
        let n = !!e.added.find((e) => e.pid === t.pid);
        (this.maybeFetchAutoclipsCapabilities(t.id, { force: n }),
            n ? setTimeout(() => this.fireClipsInitEvent(), U.dV) : this.fireClipsInitEvent(),
            this.maybeOpenQuickBar());
    }
    prefetchRichPresenceData(e) {
        (c.I.fetchMany([e]), l.YY.fetchMany([e]));
    }
    handleStreamEnded(e) {
        if (!(0, M.T)()) return;
        let { ownerId: t } = (0, u.Iy)(e.streamKey);
        t === h.default.getId() && this.fireClipsInitEvent();
    }
    fireClipsInitEvent() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (
            !(0, p.ri)(f.Ay) ||
            !(0, M.T)() ||
            (!e &&
                !f.Ay.getMediaEngine().supports(x.O5.UNIFIED_CAPTURE_BROKER) &&
                null != A.A.getCurrentUserActiveStream())
        )
            return;
        let t = d.Ay.getVisibleGame();
        if (t?.pid == null || t?.windowHandle == null || null == t.name || "" === t.name) return;
        if (!(0, j.t_)())
            return void (0, j.so)().then(() => {
                (0, j.t_)() && this.fireClipsInitEvent(e);
            });
        let n = P.Ay.getSettings();
        a.h.dispatch({
            type: "CLIPS_INIT",
            sourceId: `window:${t?.windowHandle}`,
            applicationName: t.name,
            quality: n.clipsQuality,
        });
    }
    loadClipsFromStorage() {
        let { storageLocation: e } = P.Ay.getSettings();
        "" !== e &&
            e !== P.he &&
            H.Fb(e)
                .then(() => J())
                .catch((e) => {
                    U.nx.error("Failed to load clips directory on connection open", e);
                });
    }
    maybeStartNtpClock() {
        s.A?.ntpClock?.start().catch(() => {});
    }
}
async function J() {
    if (P.Ay.hasClips() || null == s.A || null == s.A.app) return;
    let e = await s.A.app.getPath("documents");
    if (P.Ay.getSettings().storageLocation === e)
        try {
            let e = await s.A.app.getPath("videos");
            H.HU((0, I.CN)(e, P._c));
        } catch (e) {
            U.nx.error("Failed to resolve videos path for old default storage migration", e);
        }
}
let ee = new Q();
