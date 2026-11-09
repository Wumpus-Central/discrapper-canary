n.d(t, { A: () => el });
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
    I = n(287809),
    p = n(741394),
    m = n(474090),
    T = n(734066),
    g = n(205693),
    S = n(439372),
    N = n(967347),
    C = n(253932),
    O = n(617617),
    R = n(734057),
    L = n(495867),
    y = n(753181),
    D = n(129230),
    b = n(312809);
let v = (0, n(945810).mj)({
    kind: "user",
    name: "2026-10-clips-default-on-geo",
    defaultConfig: { allowDefaultOn: !1 },
    variations: { 1: { allowDefaultOn: !0 } },
});
var P = n(419490),
    M = n(696016);
let U = "1002",
    w = "8086",
    G = { "10de": "Nvidia/NVENC", [U]: "AMD/AMF", [w]: "Intel/QSV" },
    x = new Set([U, w]);
function k(e) {
    return e.includes("H.264") && e.endsWith("(HW)");
}
function F(e, t) {
    let n = G[e.vendor_id];
    return null != n && t.some((e) => e.startsWith(n));
}
var B = n(572164),
    V = n(652215),
    H = n(55010),
    j = n(731854);
function W() {
    return h.Ay.getMediaEngine().supports(j.O5.UNIFIED_CAPTURE_BROKER);
}
class Y extends S.A {
    classifyHardwarePromise = null;
    actions = {
        POST_CONNECTION_OPEN: (e) => this.handlePostConnectionOpen(),
        RTC_CONNECTION_FLAGS: (e) => this.handleRTCConnectionFlags(e),
        RTC_CONNECTION_USERS_MERGED: (e) => this.handleRTCUsersUpdate(e),
        CLIPS_INIT_FAILURE: (e) => this.handleClipsInitFailure(e),
        CLIPS_SETTINGS_UPDATE: (e) => this.applyNativeClipsSettings(e),
        CLIPS_ALLOW_VOICE_RECORDING_UPDATE: () => this.handleClipsAllowVoiceRecordingUpdate(),
        STREAM_START: () => {
            W() || this.applyNativeClipsSettings();
        },
        STREAM_DELETE: (e) => {
            W() || this.handleStreamEnded(e);
        },
        STREAM_CLOSE: (e) => {
            W() || this.handleStreamEnded(e);
        },
        RUNNING_GAME_TOGGLE_DETECTION: (e) => this.handleClipsInitOnToggleDetection(e),
        RUNNING_GAMES_CHANGE: (e) => this.handleClipsInitOnGamesChange(e),
        CLIPS_RESTART: () => this.fireClipsInitEvent(!0),
        RTC_CONNECTION_VIDEO: (e) => this.handleRTCConnectionVideo(e),
        RTC_CONNECTION_STATE: (e) => this.handleRTCConnectionState(e),
    };
    handleRTCConnectionState(e) {
        let { context: t, state: n, streamKey: i } = e;
        if (!(0, T.Pm)() || n !== V.S7L.RTC_CONNECTED) return;
        let r = f.default.getId();
        switch (t) {
            case g.x.DEFAULT:
                (this.applyUserVoiceRecording(r), this.applyUserSoundboardRecording(r));
                break;
            case g.x.STREAM: {
                if (null == i) return;
                let { ownerId: e } = (0, u.Iy)(i);
                if (e !== r) return;
                let t = y.A.getRTCConnection(i);
                if (null == t) return;
                this.applyStreamRecording(r, t);
            }
        }
    }
    handleRTCUsersUpdate(e) {
        let { userIds: t, context: n } = e;
        n === g.x.DEFAULT &&
            t.forEach((e) => {
                (this.applyUserVoiceRecording(e), this.applyUserSoundboardRecording(e));
            });
    }
    handleRTCConnectionFlags(e) {
        let { userId: t, channelId: n, guildId: i } = e;
        (this.maybeShowClipsWarning(t), this.applyUserVoiceRecording(t), this.applyUserSoundboardRecording(t));
        let r = y.A.getRTCConnection(
            u._z({ streamType: null != i ? H.U4.GUILD : H.U4.CALL, ownerId: t, channelId: n, guildId: i }),
        );
        null != r && this.applyStreamRecording(t, r);
    }
    handleClipsInitFailure(e) {
        let { applicationName: t, errMsg: n } = e;
        D.default.track(V.HAw.CLIPS_INIT_FAILURE, { application_name: t, error_message: n, clip_runtime: "v3" });
    }
    maybeShowClipsWarning(e) {
        let t = L.A.getChannelId();
        null == t ||
            P.Ay.getClipsWarningShown(t) ||
            e === f.default.getId() ||
            !P.Ay.isClipsEnabledForUser(e) ||
            (C.Q$.getSetting() &&
                (a.h.dispatch({ type: "CLIPS_SHOW_CALL_WARNING", channelId: t }), this.showClipsToast()));
    }
    handleClipsAllowVoiceRecordingUpdate() {
        L.A.getUserIds()?.forEach((e) => this.maybeShowClipsWarning(e));
    }
    handlePostConnectionOpen() {
        (0, T.ri)(h.Ay) &&
            ((this.applyNativeClipsSettings(), (0, T.Pm)())
                ? (this.loadClipsFromStorage(), this.maybeStartNtpClock(), this.updateHardwareClassification())
                : a.h.dispatch({ type: "CLIPS_APPLY_DEFAULT_SETTINGS_COMPLETE" }));
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
        let l = C.Q$.getSetting(),
            o = O.A.settings.clips?.allowVoiceRecording == null && !t.allowVoiceRecording;
        (o && this.updateAllowVoiceRecordingDefault(!1),
            D.default.track(V.HAw.CLIPS_DEFAULT_SETTINGS_APPLIED, {
                hardware_classification: e,
                was_hardware_classified: s,
                nsfw_allowed: t.nsfwAllowed,
                geo_allowed: t.geoAllowed,
                default_clips_enabled: t.clipsEnabled,
                version: 1,
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
                clip_runtime: "v3",
            }));
    }
    async updateAllowVoiceRecordingDefault(e) {
        (await C.Q$.updateSetting(e), a.h.dispatch({ type: "CLIPS_ALLOW_VOICE_RECORDING_UPDATE" }));
    }
    getClipsDefaultSettingsDecision(e) {
        if (e === M.k9.UNKNOWN || P.Ay.getClipsDefaultSettingsState().version >= 1) return null;
        let t = I.default.getCurrentUser();
        if (!(0, T.qj)(t) || !b.A.getConfig({ location: "getClipsDefaultSettingsDecision" }).enabled) return null;
        let n = t?.nsfwAllowed ?? null,
            i = !0 === n && e === M.k9.MEETS_AUTO_ENABLE,
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
        if (n !== g.x.STREAM || !(0, T.ri)(h.Ay)) return;
        let a = y.A.getRTCConnection(
            u._z({ streamType: null != r ? H.U4.GUILD : H.U4.CALL, ownerId: t, channelId: i, guildId: r }),
        );
        null != a && this.applyStreamRecording(t, a);
    }
    async updateHardwareClassification() {
        ((this.classifyHardwarePromise ??= this.classifyHardware()), await this.classifyHardwarePromise);
        let e = P.Ay.getHardwareClassification(),
            t = null != e ? this.getClipsDefaultSettingsDecision(e) : null;
        if (null != e && null != t)
            try {
                await this.applyClipsDefaultSettings(e, t);
            } catch (e) {
                M.GU.error("Failed to apply clips default settings", e);
            }
        a.h.dispatch({ type: "CLIPS_APPLY_DEFAULT_SETTINGS_COMPLETE" });
    }
    async classifyHardware() {
        try {
            await this.classifyAndApplyHardware();
        } catch (e) {
            M.GU.error("Failed to classify hardware", e);
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
                                return (M.GU.warn("Failed to get codec survey", e), null);
                            }
                        })(),
                        (0, N.w)(),
                    ]),
                    i = n?.gpus ?? null,
                    r = (i ?? []).map((e) => e.brand).filter((e) => null != e && "" !== e);
                if (t?.available_video_decoders == null)
                    return { classification: M.k9.UNKNOWN, gpuModels: r, videoEncoders: [] };
                let a = t.available_video_encoders ?? [];
                return {
                    classification:
                        ((e = a.filter(k)),
                        null == i || 0 === i.length
                            ? e.length > 0
                                ? M.k9.MEETS_MINIMUM
                                : M.k9.BELOW_MINIMUM
                            : i.some((t) => !t.is_hybrid_integrated && t.memory >= 6e9 && F(t, e))
                              ? M.k9.MEETS_AUTO_ENABLE
                              : i.some(
                                      (t) =>
                                          F(t, e) ||
                                          (x.has(t.vendor_id) && e.some((e) => e.startsWith("MediaFoundation"))),
                                  )
                                ? M.k9.MEETS_MINIMUM
                                : M.k9.BELOW_MINIMUM),
                    gpuModels: r,
                    videoEncoders: a,
                };
            })(),
            i = P.Ay.getHardwareClassification();
        (e === M.k9.UNKNOWN && null != i && i !== M.k9.UNKNOWN) ||
            ((e !== i || 3 !== P.Ay.getHardwareClassificationVersion()) &&
                (D.default.track(V.HAw.CLIPS_HARDWARE_CLASSIFICATION, {
                    classification: e,
                    version: 3,
                    gpu_models: t,
                    video_encoders: n,
                    clip_runtime: "v3",
                }),
                await this.applyClipsDefaultSettings(e, this.getClipsDefaultSettingsDecision(e))));
    }
    applyUserVoiceRecording(e) {
        if (!(0, T.ri)(h.Ay)) return;
        let t = L.A.getRTCConnection();
        if (null == t) return;
        if (R.A.getChannel(L.A.getChannelId())?.isGuildStageVoice()) return void t.setClipRecordUser(e, "audio", !1);
        if (e === f.default.getId()) return void t.setClipRecordUser(e, "audio", (0, B.T)());
        let n = P.Ay.isVoiceRecordingAllowedForUser(e);
        t.setClipRecordUser(e, "audio", n);
    }
    applyUserSoundboardRecording(e) {
        if (!(0, T.ri)(h.Ay)) return;
        let t = L.A.getRTCConnection();
        null != t && t.setClipRecordUser(e, "soundboard", (0, B.T)());
    }
    applyStreamRecording(e, t) {
        if ((0, T.ri)(h.Ay) && f.default.getId() === e) {
            let n = (0, B.T)();
            (t.setClipRecordUser(e, "audio", n), t.setClipRecordUser(e, "video", n));
            return;
        }
    }
}
var K = n(898105),
    $ = n(341923),
    X = n(775363),
    z = n(489496);
n(325392);
var q = n(160759),
    Q = n(564973),
    Z = n(409067),
    J = n(923566),
    ee = n(227628),
    et = n(468550),
    en = n(171251),
    ei = n(826685),
    er = n(190443),
    ea = n(682901),
    es = n(792996);
let el = new (class extends Y {
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
                    null != t ? this.handleClipsReminder(t) : (0, et.kF)();
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
        (0, $.s)() && (await Q.b.fetchMany([en.w], [ei.b], [er.e]));
        let e = (0, B.T)() && P.Ay.getEnableAutoclipping();
        ((0, _.se)(e), (0, E.eZ)(e), (0, X.B)(e));
    }
    maybeFetchAutoclipsCapabilities(e) {
        let { force: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        null == e || ((0, $.s)() && P.Ay.getEnableAutoclipping() && (t ? Q.b.refetchMany([e]) : Q.b.fetchMany([e])));
    }
    stores = new Map().set(o.A, () => this.applyNativeClipsSettings());
    maybeOpenQuickBar() {
        if (!P.Ay.canShowReminders()) return;
        let e = d.Ay.getVisibleGame();
        null == e ||
            (P.Ay.getLastClipsSession()
                ?.clipIds.map(P.Ay.getClipById)
                .some((t) => t?.applicationId === e.id) &&
                (ee.MZ.getState().isOpen || (0, ee.w9)()));
    }
    handleClipsReminder(e) {
        if (null == e || !P.Ay.canShowReminders()) return;
        let t = P.Ay.getLastClipsSession();
        if (null == t || !t.hasClips) return;
        let n = !P.Ay.getSettings().showPovClipsInGallery;
        t.clipIds.some((t) => {
            let i = P.Ay.getClipById(t);
            return null != i && i.applicationId === e && (!n || !(0, Z.kD)(i));
        }) && (0, et.M8)(e);
    }
    maybeOfferAutoclipsEaUpsell(e) {
        let { games: t, removed: n } = e;
        if (t.length > 0) return void (0, J.eM)();
        let i = n.map((e) => e.id).find((e) => null != e);
        null == i ||
            (0, m.YE)(I.default.getCurrentUser(), ea.PremiumTypes.TIER_2) ||
            ((0, K.C)("ClipsManager").enabled && (0, J.OT)(i));
    }
    showClipsToast() {
        (0, i.P0)({ text: es.intl.string(es.t["d+41qJ"]), icon: r.ClipsIcon, duration: M.Vi });
    }
    applyNativeClipsSettings(e) {
        if (
            ((e?.settings.clipsEnabled != null || e?.settings.enableAutoclipping != null) &&
                this.installGameEventIntegrations(),
            !(0, T.ri)(h.Ay))
        )
            return;
        (0, q.mj)();
        let t = h.Ay.getMediaEngine(),
            n = () => {
                let n = P.Ay.getSettings(),
                    i = (0, B.T)();
                t.setClipsRecordingEnabled(i);
                let r = !i && !t.supports(j.O5.UNIFIED_CAPTURE_BROKER);
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
        (0, B.T)() ? ((0, q.t_)() ? n() : (0, q.so)().then(n)) : n();
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
        if (((0, ee.yj)(), this.maybeOfferAutoclipsEaUpsell(e), null == t)) return;
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
        if (!(0, B.T)()) return;
        let { ownerId: t } = (0, u.Iy)(e.streamKey);
        t === f.default.getId() && this.fireClipsInitEvent();
    }
    fireClipsInitEvent() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (
            !(0, T.ri)(h.Ay) ||
            !(0, B.T)() ||
            (!e &&
                !h.Ay.getMediaEngine().supports(j.O5.UNIFIED_CAPTURE_BROKER) &&
                null != A.A.getCurrentUserActiveStream())
        )
            return;
        let t = d.Ay.getVisibleGame();
        if (t?.pid == null || t?.windowHandle == null || null == t.name || "" === t.name) return;
        if (!(0, q.t_)())
            return void (0, q.so)().then(() => {
                (0, q.t_)() && this.fireClipsInitEvent(e);
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
            z
                .Fb(e)
                .then(() =>
                    (async function () {
                        if (P.Ay.hasClips() || null == s.A || null == s.A.app) return;
                        let e = await s.A.app.getPath("documents");
                        if (P.Ay.getSettings().storageLocation === e)
                            try {
                                let e = await s.A.app.getPath("videos");
                                z.HU((0, p.CN)(e, P._c));
                            } catch (e) {
                                M.GU.error("Failed to resolve videos path for old default storage migration", e);
                            }
                    })(),
                )
                .catch((e) => {
                    M.GU.error("Failed to load clips directory on connection open", e);
                });
    }
    maybeStartNtpClock() {
        s.A?.ntpClock?.start().catch(() => {});
    }
})();
