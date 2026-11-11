n.d(t, { A: () => eo });
var i = n(574381),
    r = n(858899),
    a = n(176781),
    s = n(73153),
    l = n(77729),
    o = n(627363),
    d = n(50258),
    c = n(644727),
    u = n(454908),
    _ = n(652896),
    E = n(324029),
    A = n(72611),
    f = n(616356),
    h = n(46653),
    I = n(754712),
    p = n(287809),
    m = n(741394),
    T = n(474090),
    g = n(734066),
    S = n(205693),
    N = n(439372),
    C = n(967347),
    O = n(253932),
    R = n(617617),
    L = n(734057),
    y = n(495867),
    D = n(753181),
    b = n(129230),
    v = n(312809);
let P = (0, n(945810).mj)({
    kind: "user",
    name: "2026-10-clips-default-on-geo",
    defaultConfig: { allowDefaultOn: !1 },
    variations: { 1: { allowDefaultOn: !0 } },
});
var M = n(419490),
    U = n(696016);
let w = "1002",
    G = "8086",
    x = { "10de": "Nvidia/NVENC", [w]: "AMD/AMF", [G]: "Intel/QSV" },
    k = new Set([w, G]);
function F(e) {
    return e.includes("H.264") && e.endsWith("(HW)");
}
function B(e, t) {
    let n = x[e.vendor_id];
    return null != n && t.some((e) => e.startsWith(n));
}
var V = n(572164),
    H = n(652215),
    j = n(55010),
    W = n(731854);
function Y() {
    return I.Ay.getMediaEngine().supports(W.O5.UNIFIED_CAPTURE_BROKER);
}
class K extends N.A {
    classifyHardwarePromise = null;
    actions = {
        POST_CONNECTION_OPEN: (e) => this.handlePostConnectionOpen(),
        RTC_CONNECTION_FLAGS: (e) => this.handleRTCConnectionFlags(e),
        RTC_CONNECTION_USERS_MERGED: (e) => this.handleRTCUsersUpdate(e),
        CLIPS_INIT_FAILURE: (e) => this.handleClipsInitFailure(e),
        CLIPS_SETTINGS_UPDATE: (e) => this.applyNativeClipsSettings(e),
        CLIPS_ALLOW_VOICE_RECORDING_UPDATE: () => this.handleClipsAllowVoiceRecordingUpdate(),
        STREAM_START: () => {
            Y() || this.applyNativeClipsSettings();
        },
        STREAM_DELETE: (e) => {
            Y() || this.handleStreamEnded(e);
        },
        STREAM_CLOSE: (e) => {
            Y() || this.handleStreamEnded(e);
        },
        RUNNING_GAME_TOGGLE_DETECTION: (e) => this.handleClipsInitOnToggleDetection(e),
        RUNNING_GAMES_CHANGE: (e) => this.handleClipsInitOnGamesChange(e),
        CLIPS_RESTART: () => this.fireClipsInitEvent(!0),
        RTC_CONNECTION_VIDEO: (e) => this.handleRTCConnectionVideo(e),
        RTC_CONNECTION_STATE: (e) => this.handleRTCConnectionState(e),
    };
    handleRTCConnectionState(e) {
        let { context: t, state: n, streamKey: i } = e;
        if (!(0, g.Pm)() || n !== H.S7L.RTC_CONNECTED) return;
        let r = h.default.getId();
        switch (t) {
            case S.x.DEFAULT:
                (this.applyUserVoiceRecording(r), this.applyUserSoundboardRecording(r));
                break;
            case S.x.STREAM: {
                if (null == i) return;
                let { ownerId: e } = (0, _.Iy)(i);
                if (e !== r) return;
                let t = D.A.getRTCConnection(i);
                if (null == t) return;
                this.applyStreamRecording(r, t);
            }
        }
    }
    handleRTCUsersUpdate(e) {
        let { userIds: t, context: n } = e;
        n === S.x.DEFAULT &&
            t.forEach((e) => {
                (this.applyUserVoiceRecording(e), this.applyUserSoundboardRecording(e));
            });
    }
    handleRTCConnectionFlags(e) {
        let { userId: t, channelId: n, guildId: i } = e;
        (this.maybeShowClipsWarning(t), this.applyUserVoiceRecording(t), this.applyUserSoundboardRecording(t));
        let r = D.A.getRTCConnection(
            _._z({ streamType: null != i ? j.U4.GUILD : j.U4.CALL, ownerId: t, channelId: n, guildId: i }),
        );
        null != r && this.applyStreamRecording(t, r);
    }
    handleClipsInitFailure(e) {
        let { applicationName: t, errMsg: n } = e;
        b.default.track(H.HAw.CLIPS_INIT_FAILURE, { application_name: t, error_message: n, clip_runtime: "v3" });
    }
    maybeShowClipsWarning(e) {
        let t = y.A.getChannelId();
        if (null == t || M.Ay.getClipsWarningShown(t) || e === h.default.getId() || !M.Ay.isClipsEnabledForUser(e))
            return;
        let n = this.shouldUseClipsInUseNotice();
        (n || O.Q$.getSetting()) &&
            (s.h.dispatch({ type: "CLIPS_SHOW_CALL_WARNING", channelId: t }), n || this.showClipsToast());
    }
    shouldUseClipsInUseNotice() {
        return !1;
    }
    handleClipsAllowVoiceRecordingUpdate() {
        y.A.getUserIds()?.forEach((e) => this.maybeShowClipsWarning(e));
    }
    handlePostConnectionOpen() {
        (0, g.ri)(I.Ay) &&
            ((this.applyNativeClipsSettings(), (0, g.Pm)())
                ? (this.loadClipsFromStorage(), this.maybeStartNtpClock(), this.updateHardwareClassification())
                : s.h.dispatch({ type: "CLIPS_APPLY_DEFAULT_SETTINGS_COMPLETE" }));
    }
    async applyClipsDefaultSettings(e, t) {
        let n = M.Ay.getState().clipsSettings.clipsEnabled,
            i = M.Ay.getClipsDefaultSettingsState().clipsEnabledSource,
            r = M.Ay.getEnableAutoclipping(),
            a = null != M.Ay.getHardwareClassification();
        if (
            (await s.h.dispatch({ type: "CLIPS_APPLY_DEFAULT_SETTINGS", classification: e, decision: t }),
            this.applyNativeClipsSettings(),
            null == t)
        )
            return;
        let l = O.Q$.getSetting(),
            o = R.A.settings.clips?.allowVoiceRecording == null && !t.allowVoiceRecording;
        (o && this.updateAllowVoiceRecordingDefault(!1),
            b.default.track(H.HAw.CLIPS_DEFAULT_SETTINGS_APPLIED, {
                hardware_classification: e,
                was_hardware_classified: a,
                nsfw_allowed: t.nsfwAllowed,
                geo_allowed: t.geoAllowed,
                default_clips_enabled: t.clipsEnabled,
                version: 1,
                previous_clips_enabled: n,
                previous_clips_enabled_source: i,
                actual_clips_enabled: M.Ay.getState().clipsSettings.clipsEnabled,
                clips_enabled_source: M.Ay.getClipsDefaultSettingsState().clipsEnabledSource,
                default_autoclipping_enabled: t.enableAutoclipping,
                previous_autoclipping_enabled: r,
                actual_autoclipping_enabled: M.Ay.getEnableAutoclipping(),
                default_allow_voice_recording: t.allowVoiceRecording,
                previous_allow_voice_recording: l,
                actual_allow_voice_recording: l && !o,
                clip_runtime: "v3",
            }));
    }
    async updateAllowVoiceRecordingDefault(e) {
        (await O.Q$.updateSetting(e), s.h.dispatch({ type: "CLIPS_ALLOW_VOICE_RECORDING_UPDATE" }));
    }
    getClipsDefaultSettingsDecision(e) {
        if (e === U.k9.UNKNOWN || M.Ay.getClipsDefaultSettingsState().version >= 1) return null;
        let t = p.default.getCurrentUser();
        if (!(0, g.qj)(t) || !v.A.getConfig({ location: "getClipsDefaultSettingsDecision" }).enabled) return null;
        let n = t?.nsfwAllowed ?? null,
            i = !0 === n && e === U.k9.MEETS_AUTO_ENABLE,
            r = !0 === n ? P.getConfig({ location: "getClipsDefaultSettingsDecision" }).allowDefaultOn : null;
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
        if (n !== S.x.STREAM || !(0, g.ri)(I.Ay)) return;
        let a = D.A.getRTCConnection(
            _._z({ streamType: null != r ? j.U4.GUILD : j.U4.CALL, ownerId: t, channelId: i, guildId: r }),
        );
        null != a && this.applyStreamRecording(t, a);
    }
    async updateHardwareClassification() {
        ((this.classifyHardwarePromise ??= this.classifyHardware()), await this.classifyHardwarePromise);
        let e = M.Ay.getHardwareClassification(),
            t = null != e ? this.getClipsDefaultSettingsDecision(e) : null;
        if (null != e && null != t)
            try {
                await this.applyClipsDefaultSettings(e, t);
            } catch (e) {
                U.GU.error("Failed to apply clips default settings", e);
            }
        s.h.dispatch({ type: "CLIPS_APPLY_DEFAULT_SETTINGS_COMPLETE" });
    }
    async classifyHardware() {
        try {
            await this.classifyAndApplyHardware();
        } catch (e) {
            U.GU.error("Failed to classify hardware", e);
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
                                return JSON.parse(await I.Ay.getMediaEngine().getCodecSurvey());
                            } catch (e) {
                                return (U.GU.warn("Failed to get codec survey", e), null);
                            }
                        })(),
                        (0, C.w)(),
                    ]),
                    i = n?.gpus ?? null,
                    r = (i ?? []).map((e) => e.brand).filter((e) => null != e && "" !== e);
                if (t?.available_video_decoders == null)
                    return { classification: U.k9.UNKNOWN, gpuModels: r, videoEncoders: [] };
                let a = t.available_video_encoders ?? [];
                return {
                    classification:
                        ((e = a.filter(F)),
                        null == i || 0 === i.length
                            ? e.length > 0
                                ? U.k9.MEETS_MINIMUM
                                : U.k9.BELOW_MINIMUM
                            : i.some((t) => !t.is_hybrid_integrated && t.memory >= 6e9 && B(t, e))
                              ? U.k9.MEETS_AUTO_ENABLE
                              : i.some(
                                      (t) =>
                                          B(t, e) ||
                                          (k.has(t.vendor_id) && e.some((e) => e.startsWith("MediaFoundation"))),
                                  )
                                ? U.k9.MEETS_MINIMUM
                                : U.k9.BELOW_MINIMUM),
                    gpuModels: r,
                    videoEncoders: a,
                };
            })(),
            i = M.Ay.getHardwareClassification();
        (e === U.k9.UNKNOWN && null != i && i !== U.k9.UNKNOWN) ||
            ((e !== i || 3 !== M.Ay.getHardwareClassificationVersion()) &&
                (b.default.track(H.HAw.CLIPS_HARDWARE_CLASSIFICATION, {
                    classification: e,
                    version: 3,
                    gpu_models: t,
                    video_encoders: n,
                    clip_runtime: "v3",
                }),
                await this.applyClipsDefaultSettings(e, this.getClipsDefaultSettingsDecision(e))));
    }
    applyUserVoiceRecording(e) {
        if (!(0, g.ri)(I.Ay)) return;
        let t = y.A.getRTCConnection();
        if (null == t) return;
        if (L.A.getChannel(y.A.getChannelId())?.isGuildStageVoice()) return void t.setClipRecordUser(e, "audio", !1);
        if (e === h.default.getId()) return void t.setClipRecordUser(e, "audio", (0, V.T)());
        let n = M.Ay.isVoiceRecordingAllowedForUser(e);
        t.setClipRecordUser(e, "audio", n);
    }
    applyUserSoundboardRecording(e) {
        if (!(0, g.ri)(I.Ay)) return;
        let t = y.A.getRTCConnection();
        null != t && t.setClipRecordUser(e, "soundboard", (0, V.T)());
    }
    applyStreamRecording(e, t) {
        if ((0, g.ri)(I.Ay) && h.default.getId() === e) {
            let n = (0, V.T)();
            (t.setClipRecordUser(e, "audio", n), t.setClipRecordUser(e, "video", n));
            return;
        }
    }
}
var $ = n(898105),
    X = n(341923),
    z = n(775363),
    q = n(489496);
n(325392);
var Q = n(160759),
    J = n(564973),
    Z = n(409067),
    ee = n(923566),
    et = n(227628),
    en = n(468550),
    ei = n(171251),
    er = n(826685),
    ea = n(190443),
    es = n(682901),
    el = n(792996);
let eo = new (class extends K {
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
                    null != t ? this.handleClipsReminder(t) : (0, en.kF)();
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
        (0, X.s)() && (await J.b.fetchMany([ei.w], [er.b], [ea.e]));
        let e = (0, V.T)() && M.Ay.getEnableAutoclipping();
        ((0, E.se)(e), (0, A.eZ)(e), (0, z.B)(e));
    }
    maybeFetchAutoclipsCapabilities(e) {
        let { force: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        null == e || ((0, X.s)() && M.Ay.getEnableAutoclipping() && (t ? J.b.refetchMany([e]) : J.b.fetchMany([e])));
    }
    stores = new Map().set(d.A, () => this.applyNativeClipsSettings());
    maybeOpenQuickBar() {
        if (!M.Ay.canShowReminders()) return;
        let e = c.Ay.getVisibleGame();
        null == e ||
            (M.Ay.getLastClipsSession()
                ?.clipIds.map(M.Ay.getClipById)
                .some((t) => t?.applicationId === e.id) &&
                (et.MZ.getState().isOpen || (0, et.w9)()));
    }
    handleClipsReminder(e) {
        if (null == e || !M.Ay.canShowReminders()) return;
        let t = M.Ay.getLastClipsSession();
        if (null == t || !t.hasClips) return;
        let n = !M.Ay.getSettings().showPovClipsInGallery;
        t.clipIds.some((t) => {
            let i = M.Ay.getClipById(t);
            return null != i && i.applicationId === e && (!n || !(0, Z.kD)(i));
        }) && (0, en.M8)(e);
    }
    maybeOfferAutoclipsEaUpsell(e) {
        let { games: t, removed: n } = e;
        if (t.length > 0) return void (0, ee.eM)();
        let i = n.map((e) => e.id).find((e) => null != e);
        null == i ||
            (0, T.YE)(p.default.getCurrentUser(), es.PremiumTypes.TIER_2) ||
            ((0, $.C)("ClipsManager").enabled && (0, ee.OT)(i));
    }
    shouldUseClipsInUseNotice() {
        return (0, i.xl)() && (0, $.C)("ClipsInCallNotice").enabled;
    }
    showClipsToast() {
        (0, r.P0)({ text: el.intl.string(el.t["d+41qJ"]), icon: a.ClipsIcon, duration: U.Vi });
    }
    applyNativeClipsSettings(e) {
        if (
            ((e?.settings.clipsEnabled != null || e?.settings.enableAutoclipping != null) &&
                this.installGameEventIntegrations(),
            !(0, g.ri)(I.Ay))
        )
            return;
        (0, Q.mj)();
        let t = I.Ay.getMediaEngine(),
            n = () => {
                let n = M.Ay.getSettings(),
                    i = (0, V.T)();
                t.setClipsRecordingEnabled(i);
                let r = !i && !t.supports(W.O5.UNIFIED_CAPTURE_BROKER);
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
        (0, V.T)() ? ((0, Q.t_)() ? n() : (0, Q.so)().then(n)) : n();
    }
    handleClipsInitOnToggleDetection(e) {
        let t = c.Ay.getVisibleGame();
        null != t &&
            t.id === e.game.id &&
            (this.prefetchRichPresenceData(t.id),
            this.maybeFetchAutoclipsCapabilities(t.id, { force: !0 }),
            this.fireClipsInitEvent());
    }
    handleClipsInitOnGamesChange(e) {
        let t = c.Ay.getVisibleGame();
        if (((0, et.yj)(), this.maybeOfferAutoclipsEaUpsell(e), null == t)) return;
        this.prefetchRichPresenceData(t.id);
        let n = !!e.added.find((e) => e.pid === t.pid);
        (this.maybeFetchAutoclipsCapabilities(t.id, { force: n }),
            n ? setTimeout(() => this.fireClipsInitEvent(), 3e4) : this.fireClipsInitEvent(),
            this.maybeOpenQuickBar());
    }
    prefetchRichPresenceData(e) {
        (u.I.fetchMany([e]), o.YY.fetchMany([e]));
    }
    handleStreamEnded(e) {
        if (!(0, V.T)()) return;
        let { ownerId: t } = (0, _.Iy)(e.streamKey);
        t === h.default.getId() && this.fireClipsInitEvent();
    }
    fireClipsInitEvent() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (
            !(0, g.ri)(I.Ay) ||
            !(0, V.T)() ||
            (!e &&
                !I.Ay.getMediaEngine().supports(W.O5.UNIFIED_CAPTURE_BROKER) &&
                null != f.A.getCurrentUserActiveStream())
        )
            return;
        let t = c.Ay.getVisibleGame();
        if (t?.pid == null || t?.windowHandle == null || null == t.name || "" === t.name) return;
        if (!(0, Q.t_)())
            return void (0, Q.so)().then(() => {
                (0, Q.t_)() && this.fireClipsInitEvent(e);
            });
        let n = M.Ay.getSettings();
        s.h.dispatch({
            type: "CLIPS_INIT",
            sourceId: `window:${t?.windowHandle}`,
            applicationName: t.name,
            quality: n.clipsQuality,
        });
    }
    loadClipsFromStorage() {
        let { storageLocation: e } = M.Ay.getSettings();
        "" !== e &&
            e !== M.he &&
            q
                .Fb(e)
                .then(() =>
                    (async function () {
                        if (M.Ay.hasClips() || null == l.A || null == l.A.app) return;
                        let e = await l.A.app.getPath("documents");
                        if (M.Ay.getSettings().storageLocation === e)
                            try {
                                let e = await l.A.app.getPath("videos");
                                q.HU((0, m.CN)(e, M._c));
                            } catch (e) {
                                U.GU.error("Failed to resolve videos path for old default storage migration", e);
                            }
                    })(),
                )
                .catch((e) => {
                    U.GU.error("Failed to load clips directory on connection open", e);
                });
    }
    maybeStartNtpClock() {
        l.A?.ntpClock?.start().catch(() => {});
    }
})();
