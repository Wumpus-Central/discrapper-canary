n.d(t, { A: () => ei });
var i = n(858899),
    r = n(176781),
    a = n(73153),
    s = n(77729),
    l = n(627363),
    o = n(50258),
    d = n(397369),
    c = n(454908),
    u = n(652896),
    _ = n(324029),
    E = n(72611),
    A = n(616356),
    f = n(46653),
    h = n(754712),
    I = n(741394),
    p = n(734066),
    m = n(205693),
    T = n(439372),
    g = n(967347),
    S = n(253932),
    N = n(617617),
    C = n(734057),
    O = n(495867),
    R = n(753181),
    L = n(287809),
    y = n(129230),
    D = n(312809);
let b = (0, n(945810).mj)({
    kind: "user",
    name: "2026-10-clips-default-on-geo",
    defaultConfig: { allowDefaultOn: !1 },
    variations: { 1: { allowDefaultOn: !0 } },
});
var v = n(419490),
    P = n(696016);
let M = "1002",
    U = "8086",
    w = { "10de": "Nvidia/NVENC", [M]: "AMD/AMF", [U]: "Intel/QSV" },
    G = new Set([M, U]);
function x(e) {
    return e.includes("H.264") && e.endsWith("(HW)");
}
function k(e, t) {
    let n = w[e.vendor_id];
    return null != n && t.some((e) => e.startsWith(n));
}
var F = n(572164),
    B = n(652215),
    V = n(55010),
    H = n(731854);
function j() {
    return h.Ay.getMediaEngine().supports(H.O5.UNIFIED_CAPTURE_BROKER);
}
class W extends T.A {
    classifyHardwarePromise = null;
    actions = {
        POST_CONNECTION_OPEN: (e) => this.handlePostConnectionOpen(),
        RTC_CONNECTION_FLAGS: (e) => this.handleRTCConnectionFlags(e),
        RTC_CONNECTION_USERS_MERGED: (e) => this.handleRTCUsersUpdate(e),
        CLIPS_INIT_FAILURE: (e) => this.handleClipsInitFailure(e),
        CLIPS_SETTINGS_UPDATE: (e) => this.applyNativeClipsSettings(e),
        CLIPS_ALLOW_VOICE_RECORDING_UPDATE: () => this.handleClipsAllowVoiceRecordingUpdate(),
        STREAM_START: () => {
            j() || this.applyNativeClipsSettings();
        },
        STREAM_DELETE: (e) => {
            j() || this.handleStreamEnded(e);
        },
        STREAM_CLOSE: (e) => {
            j() || this.handleStreamEnded(e);
        },
        RUNNING_GAME_TOGGLE_DETECTION: (e) => this.handleClipsInitOnToggleDetection(e),
        RUNNING_GAMES_CHANGE: (e) => this.handleClipsInitOnGamesChange(e),
        CLIPS_RESTART: () => this.fireClipsInitEvent(!0),
        RTC_CONNECTION_VIDEO: (e) => this.handleRTCConnectionVideo(e),
        RTC_CONNECTION_STATE: (e) => this.handleRTCConnectionState(e),
    };
    handleRTCConnectionState(e) {
        let { context: t, state: n, streamKey: i } = e;
        if (!(0, p.Pm)() || n !== B.S7L.RTC_CONNECTED) return;
        let r = f.default.getId();
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
            u._z({ streamType: null != i ? V.U4.GUILD : V.U4.CALL, ownerId: t, channelId: n, guildId: i }),
        );
        null != r && this.applyStreamRecording(t, r);
    }
    handleClipsInitFailure(e) {
        let { applicationName: t, errMsg: n } = e;
        y.default.track(B.HAw.CLIPS_INIT_FAILURE, { application_name: t, error_message: n, clip_runtime: "v3" });
    }
    maybeShowClipsWarning(e) {
        let t = O.A.getChannelId();
        null == t ||
            v.Ay.getClipsWarningShown(t) ||
            e === f.default.getId() ||
            !v.Ay.isClipsEnabledForUser(e) ||
            (S.Q$.getSetting() &&
                (a.h.dispatch({ type: "CLIPS_SHOW_CALL_WARNING", channelId: t }), this.showClipsToast()));
    }
    handleClipsAllowVoiceRecordingUpdate() {
        O.A.getUserIds()?.forEach((e) => this.maybeShowClipsWarning(e));
    }
    handlePostConnectionOpen() {
        !(0, p.ri)(h.Ay) ||
            (this.applyNativeClipsSettings(),
            (0, p.Pm)() &&
                (this.loadClipsFromStorage(), this.maybeStartNtpClock(), this.updateHardwareClassification()));
    }
    async applyClipsDefaultSettings(e, t) {
        let n = v.Ay.getState().clipsSettings.clipsEnabled,
            i = v.Ay.getClipsDefaultSettingsState().clipsEnabledSource,
            r = v.Ay.getEnableAutoclipping(),
            s = null != v.Ay.getHardwareClassification();
        if (
            (await a.h.dispatch({ type: "CLIPS_APPLY_DEFAULT_SETTINGS", classification: e, decision: t }),
            this.applyNativeClipsSettings(),
            null == t)
        )
            return;
        let l = S.Q$.getSetting(),
            o = N.A.settings.clips?.allowVoiceRecording == null && !t.allowVoiceRecording;
        (o && this.updateAllowVoiceRecordingDefault(!1),
            y.default.track(B.HAw.CLIPS_DEFAULT_SETTINGS_APPLIED, {
                hardware_classification: e,
                was_hardware_classified: s,
                nsfw_allowed: t.nsfwAllowed,
                geo_allowed: t.geoAllowed,
                default_clips_enabled: t.clipsEnabled,
                version: 1,
                previous_clips_enabled: n,
                previous_clips_enabled_source: i,
                actual_clips_enabled: v.Ay.getState().clipsSettings.clipsEnabled,
                clips_enabled_source: v.Ay.getClipsDefaultSettingsState().clipsEnabledSource,
                default_autoclipping_enabled: t.enableAutoclipping,
                previous_autoclipping_enabled: r,
                actual_autoclipping_enabled: v.Ay.getEnableAutoclipping(),
                default_allow_voice_recording: t.allowVoiceRecording,
                previous_allow_voice_recording: l,
                actual_allow_voice_recording: l && !o,
                clip_runtime: "v3",
            }));
    }
    async updateAllowVoiceRecordingDefault(e) {
        (await S.Q$.updateSetting(e), a.h.dispatch({ type: "CLIPS_ALLOW_VOICE_RECORDING_UPDATE" }));
    }
    getClipsDefaultSettingsDecision(e) {
        if (e === P.k9.UNKNOWN || v.Ay.getClipsDefaultSettingsState().version >= 1) return null;
        let t = L.default.getCurrentUser();
        if (!(0, p.qj)(t) || !D.A.getConfig({ location: "getClipsDefaultSettingsDecision" }).enabled) return null;
        let n = t?.nsfwAllowed ?? null,
            i = !0 === n && e === P.k9.MEETS_AUTO_ENABLE,
            r = !0 === n ? b.getConfig({ location: "getClipsDefaultSettingsDecision" }).allowDefaultOn : null;
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
        if (n !== m.x.STREAM || !(0, p.ri)(h.Ay)) return;
        let a = R.A.getRTCConnection(
            u._z({ streamType: null != r ? V.U4.GUILD : V.U4.CALL, ownerId: t, channelId: i, guildId: r }),
        );
        null != a && this.applyStreamRecording(t, a);
    }
    async updateHardwareClassification() {
        ((this.classifyHardwarePromise ??= this.classifyHardware()), await this.classifyHardwarePromise);
        let e = v.Ay.getHardwareClassification();
        if (null == e) return;
        let t = this.getClipsDefaultSettingsDecision(e);
        if (null != t)
            try {
                await this.applyClipsDefaultSettings(e, t);
            } catch (e) {
                P.GU.error("Failed to apply clips default settings", e);
            }
    }
    async classifyHardware() {
        try {
            await this.classifyAndApplyHardware();
        } catch (e) {
            P.GU.error("Failed to classify hardware", e);
        }
    }
    async classifyAndApplyHardware() {
        let {
                classification: e,
                gpuModels: t,
                videoEncoders: n,
            } = await (async function () {
                let e,
                    [t, n] = await Promise.all([
                        (async function () {
                            try {
                                return JSON.parse(await h.Ay.getMediaEngine().getCodecSurvey());
                            } catch (e) {
                                return (P.GU.warn("Failed to get codec survey", e), null);
                            }
                        })(),
                        (0, g.w)(),
                    ]),
                    i = n?.gpus ?? null,
                    r = (i ?? []).map((e) => e.brand).filter((e) => null != e && "" !== e);
                if (t?.available_video_decoders == null)
                    return { classification: P.k9.UNKNOWN, gpuModels: r, videoEncoders: [] };
                let a = t.available_video_encoders ?? [];
                return {
                    classification:
                        ((e = a.filter(x)),
                        null == i || 0 === i.length
                            ? e.length > 0
                                ? P.k9.MEETS_MINIMUM
                                : P.k9.BELOW_MINIMUM
                            : i.some((t) => !t.is_hybrid_integrated && t.memory >= 6e9 && k(t, e))
                              ? P.k9.MEETS_AUTO_ENABLE
                              : i.some(
                                      (t) =>
                                          k(t, e) ||
                                          (G.has(t.vendor_id) && e.some((e) => e.startsWith("MediaFoundation"))),
                                  )
                                ? P.k9.MEETS_MINIMUM
                                : P.k9.BELOW_MINIMUM),
                    gpuModels: r,
                    videoEncoders: a,
                };
            })(),
            i = v.Ay.getHardwareClassification();
        (e === P.k9.UNKNOWN && null != i && i !== P.k9.UNKNOWN) ||
            ((e !== i || 3 !== v.Ay.getHardwareClassificationVersion()) &&
                (y.default.track(B.HAw.CLIPS_HARDWARE_CLASSIFICATION, {
                    classification: e,
                    version: 3,
                    gpu_models: t,
                    video_encoders: n,
                    clip_runtime: "v3",
                }),
                await this.applyClipsDefaultSettings(e, this.getClipsDefaultSettingsDecision(e))));
    }
    applyUserVoiceRecording(e) {
        if (!(0, p.ri)(h.Ay)) return;
        let t = O.A.getRTCConnection();
        if (null == t) return;
        if (C.A.getChannel(O.A.getChannelId())?.isGuildStageVoice()) return void t.setClipRecordUser(e, "audio", !1);
        if (e === f.default.getId()) return void t.setClipRecordUser(e, "audio", (0, F.T)());
        let n = v.Ay.isVoiceRecordingAllowedForUser(e);
        t.setClipRecordUser(e, "audio", n);
    }
    applyUserSoundboardRecording(e) {
        if (!(0, p.ri)(h.Ay)) return;
        let t = O.A.getRTCConnection();
        null != t && t.setClipRecordUser(e, "soundboard", (0, F.T)());
    }
    applyStreamRecording(e, t) {
        if ((0, p.ri)(h.Ay) && f.default.getId() === e) {
            let n = (0, F.T)();
            (t.setClipRecordUser(e, "audio", n), t.setClipRecordUser(e, "video", n));
            return;
        }
    }
}
var Y = n(341923),
    K = n(775363),
    $ = n(489496);
n(325392);
var X = n(160759),
    z = n(564973),
    q = n(409067),
    Q = n(227628),
    Z = n(468550),
    J = n(171251),
    ee = n(826685),
    et = n(190443),
    en = n(792996);
let ei = new (class extends W {
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
                    null != t ? this.handleClipsReminder(t) : (0, Z.kF)();
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
        (0, Y.s)() && (await z.b.fetchMany([J.w], [ee.b], [et.e]));
        let e = (0, F.T)() && v.Ay.getEnableAutoclipping();
        ((0, _.se)(e), (0, E.eZ)(e), (0, K.B)(e));
    }
    maybeFetchAutoclipsCapabilities(e) {
        let { force: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        null == e || ((0, Y.s)() && v.Ay.getEnableAutoclipping() && (t ? z.b.refetchMany([e]) : z.b.fetchMany([e])));
    }
    stores = new Map().set(o.A, () => this.applyNativeClipsSettings());
    maybeOpenQuickBar() {
        if (!v.Ay.canShowReminders()) return;
        let e = d.Ay.getVisibleGame();
        null == e ||
            (v.Ay.getLastClipsSession()
                ?.clipIds.map(v.Ay.getClipById)
                .some((t) => t?.applicationId === e.id) &&
                (Q.MZ.getState().isOpen || (0, Q.w9)()));
    }
    handleClipsReminder(e) {
        if (null == e || !v.Ay.canShowReminders()) return;
        let t = v.Ay.getLastClipsSession();
        if (null == t || !t.hasClips) return;
        let n = !v.Ay.getSettings().showPovClipsInGallery;
        t.clipIds.some((t) => {
            let i = v.Ay.getClipById(t);
            return null != i && i.applicationId === e && (!n || !(0, q.kD)(i));
        }) && (0, Z.M8)(e);
    }
    showClipsToast() {
        (0, i.P0)({ text: en.intl.string(en.t["d+41qJ"]), icon: r.ClipsIcon, duration: P.Vi });
    }
    applyNativeClipsSettings(e) {
        if (
            ((e?.settings.clipsEnabled != null || e?.settings.enableAutoclipping != null) &&
                this.installGameEventIntegrations(),
            !(0, p.ri)(h.Ay))
        )
            return;
        (0, X.mj)();
        let t = h.Ay.getMediaEngine(),
            n = () => {
                let n = v.Ay.getSettings(),
                    i = (0, F.T)();
                t.setClipsRecordingEnabled(i);
                let r = !i && !t.supports(H.O5.UNIFIED_CAPTURE_BROKER);
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
        (0, F.T)() ? ((0, X.t_)() ? n() : (0, X.so)().then(n)) : n();
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
        if (((0, Q.yj)(), null == t)) return;
        this.prefetchRichPresenceData(t.id);
        let n = !!e.added.find((e) => e.pid === t.pid);
        (this.maybeFetchAutoclipsCapabilities(t.id, { force: n }),
            n ? setTimeout(() => this.fireClipsInitEvent(), 3e4) : this.fireClipsInitEvent(),
            this.maybeOpenQuickBar());
    }
    prefetchRichPresenceData(e) {
        (c.I.fetchMany([e]), l.YY.fetchMany([e]));
    }
    handleStreamEnded(e) {
        if (!(0, F.T)()) return;
        let { ownerId: t } = (0, u.Iy)(e.streamKey);
        t === f.default.getId() && this.fireClipsInitEvent();
    }
    fireClipsInitEvent() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (
            !(0, p.ri)(h.Ay) ||
            !(0, F.T)() ||
            (!e &&
                !h.Ay.getMediaEngine().supports(H.O5.UNIFIED_CAPTURE_BROKER) &&
                null != A.A.getCurrentUserActiveStream())
        )
            return;
        let t = d.Ay.getVisibleGame();
        if (t?.pid == null || t?.windowHandle == null || null == t.name || "" === t.name) return;
        if (!(0, X.t_)())
            return void (0, X.so)().then(() => {
                (0, X.t_)() && this.fireClipsInitEvent(e);
            });
        let n = v.Ay.getSettings();
        a.h.dispatch({
            type: "CLIPS_INIT",
            sourceId: `window:${t?.windowHandle}`,
            applicationName: t.name,
            quality: n.clipsQuality,
        });
    }
    loadClipsFromStorage() {
        let { storageLocation: e } = v.Ay.getSettings();
        "" !== e &&
            e !== v.he &&
            $.Fb(e)
                .then(() =>
                    (async function () {
                        if (v.Ay.hasClips() || null == s.A || null == s.A.app) return;
                        let e = await s.A.app.getPath("documents");
                        if (v.Ay.getSettings().storageLocation === e)
                            try {
                                let e = await s.A.app.getPath("videos");
                                $.HU((0, I.CN)(e, v._c));
                            } catch (e) {
                                P.GU.error("Failed to resolve videos path for old default storage migration", e);
                            }
                    })(),
                )
                .catch((e) => {
                    P.GU.error("Failed to load clips directory on connection open", e);
                });
    }
    maybeStartNtpClock() {
        s.A?.ntpClock?.start().catch(() => {});
    }
})();
