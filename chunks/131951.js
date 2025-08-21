let r, i, a, o, s, l, c;
n.d(t, { Z: () => rS }), n(388685), n(953529), n(457542), n(539854), n(642613), n(49124), n(337869);
var u,
    d = n(512722),
    f = n.n(d),
    _ = n(392711),
    p = n.n(_),
    h = n(209739),
    m = n.n(h),
    g = n(404097),
    E = n(442837),
    b = n(46973),
    y = n(433517),
    O = n(846519),
    v = n(570140),
    I = n(579806),
    T = n(887278),
    S = n(547727),
    A = n(435064),
    C = n(779618),
    N = n(710845),
    R = n(535911),
    P = n(458725),
    w = n(353926),
    D = n(646047),
    x = n(594190),
    L = n(502286),
    j = n(883794),
    M = n(822253),
    k = n(177732),
    U = n(355552),
    G = n(294473),
    B = n(706629),
    Z = n(159142),
    V = n(166884),
    F = n(585360),
    H = n(947851),
    Y = n(839758),
    W = n(529558),
    K = n(111672),
    z = n(441167),
    q = n(580930),
    X = n(787517),
    Q = n(338336),
    J = n(751571),
    $ = n(311473),
    ee = n(725380),
    et = n(581883),
    en = n(875527),
    er = n(420439),
    ei = n(626135),
    ea = n(12647),
    eo = n(70956),
    es = n(358085),
    el = n(747268),
    ec = n(960048),
    eu = n(998502),
    ed = n(13140),
    ef = n(314897),
    e_ = n(967368),
    ep = n(463395),
    eh = n(592125),
    em = n(19780),
    eg = n(704806),
    eE = n(594174),
    eb = n(631768),
    ey = n(981631),
    eO = n(70722),
    ev = n(761274),
    eI = n(526761),
    eT = n(345655),
    eS = n(65154),
    eA = n(388032);
function eC(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function eN(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                eC(e, t, n[t]);
            });
    }
    return e;
}
function eR(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function eP(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eR(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ew = new N.Z("MediaEngineStore"),
    eD = "MediaEngineStore",
    ex = 4,
    eL = 1,
    ej = 1,
    eM = 1,
    ek = 1,
    eU = 0.5,
    eG = {
        left: 1,
        right: 1,
    },
    eB = 500,
    eZ = 5 * eo.Z.Millis.SECOND,
    eV = -60,
    eF = 100,
    eH = 2 * eo.Z.Millis.SECOND,
    eY = 0;
function eW() {
    return {
        mode: ey.pM4.VOICE_ACTIVITY,
        modeOptions: {
            threshold: eV,
            autoThreshold: es.isPlatformEmbedded || __OVERLAY__,
            vadUseKrisp: !0,
            vadKrispActivationThreshold: eU,
            vadLeading: 5,
            vadTrailing: 25,
            delay: 20,
            shortcut: [],
        },
        vadUseKrispSettingVersion: 0,
        ncUseKrispSettingVersion: 0,
        ncUseKrispjsSettingVersion: 0,
        mute: !1,
        deaf: !1,
        echoCancellation: !0,
        noiseSuppression: !1,
        automaticGainControl: !0,
        noiseCancellation: !0,
        bypassSystemInputProcessing: !0,
        mostRecentlyRequestedVoiceFilter: null,
        voiceFilterPlaybackEnabled: !0,
        experimentalEncoders: !1,
        hardwareH264: !0,
        hardwareEnabledVersion: 0,
        hardwareEncoding: null,
        silenceWarning: !0,
        attenuation: 0,
        attenuateWhileSpeakingSelf: !1,
        attenuateWhileSpeakingOthers: !0,
        localMutes: {},
        disabledLocalVideos: {},
        videoToggleStateMap: {},
        localVolumes: {},
        localPans: {},
        inputVolume: eS.Qx,
        outputVolume: eS.Qx,
        inputDeviceId: eS.w5,
        outputDeviceId: eS.w5,
        videoDeviceId: eS.w5,
        qos: !1,
        qosMigrated: !1,
        videoHook: ez.supports(eS.AN.VIDEO_HOOK),
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        openH264: !0,
        h265Enabled: !0,
        vadThrehsoldMigrated: !1,
        aecDumpEnabled: !1,
        sidechainCompression: !1,
        sidechainCompressionSettingVersion: 0,
        sidechainCompressionStrength: 50,
        automaticAudioSubsystem: !0,
        activeInputProfile: null,
    };
}
let eK = {
        [eT._.CUSTOM]: {},
        [eT._.VOICE_ISOLATION]: {
            modeOptions: {
                autoThreshold: !0,
                vadUseKrisp: !0,
            },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !1,
        },
        [eT._.STUDIO]: {
            mode: ey.pM4.VOICE_ACTIVITY,
            modeOptions: {
                threshold: -84,
                autoThreshold: !1,
                vadUseKrisp: !1,
            },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    ez = (0, b.Mt)((0, b.jj)());
ew.enableNativeLogger(!0);
let eq = {},
    eX = new Set([eS.Yn.DEFAULT]),
    eQ = ez.supports(eS.AN.AUTO_ENABLE),
    eJ = !1,
    e$ = eS.Yn.STREAM,
    e0 = performance.now(),
    e1 = { [eS.w5]: t1("No Input Devices") },
    e2 = { [eS.w5]: t1("No Output Devices") },
    e3 = { [eS.w5]: t1("No Video Devices") },
    e4 = !1,
    e8 = !1,
    e6 = !1,
    e5 = !1,
    e7 = !1,
    e9 = eS.Av,
    te = !1,
    tt = !1,
    tn = !1,
    tr = new O.V7(),
    ti = !1,
    ta = !1,
    to = null,
    ts = !1,
    tl = !1,
    tc = !1,
    tu = !1,
    td = !1,
    tf = [],
    t_ = !1,
    tp = null,
    th = null,
    tm = null,
    tg = null,
    tE = null,
    tb = !1,
    ty = !1,
    tO = !1;
J.Z.hasPermission(ev.Eu.AUDIO, { showAuthorizationError: !1 }),
    J.Z.hasPermission(ev.Eu.CAMERA, { showAuthorizationError: !1 });
let tv = !1,
    tI = new Set(),
    tT = tv,
    tS = new Set(),
    tA = {},
    tC = null,
    tN = !0,
    tR = !1;
function tP() {
    var e, t;
    return null != (t = null == (e = eE.default.getCurrentUser()) ? void 0 : e.isStaff()) && t
        ? "always"
        : el.Z === g.R.CANARY
          ? "permittedDevicesOnly"
          : "never";
}
function tw() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.Yn.DEFAULT,
        t = eq[e];
    return null == t && ((t = eW()), (eq[e] = t)), t;
}
function tD() {
    var e, t, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.Yn.DEFAULT,
        i = tw(r),
        a = eK[null != (e = i.activeInputProfile) ? e : eT._.CUSTOM];
    return eP(eN({}, i, a), {
        modeOptions: eN({}, null != (t = i.modeOptions) ? t : {}, null != (n = a.modeOptions) ? n : {}),
    });
}
function tx(e) {
    var t;
    let n = tD(e.context);
    e.setInputMode(n.mode, {
        vadThreshold: n.modeOptions.threshold,
        vadAutoThreshold: n.modeOptions.autoThreshold,
        vadUseKrisp: n.modeOptions.vadUseKrisp && n$(),
        vadKrispActivationThreshold: null != (t = n.modeOptions.vadKrispActivationThreshold) ? t : 0.5,
        vadLeading: n.modeOptions.vadLeading,
        vadTrailing: n.modeOptions.vadTrailing,
        pttReleaseDelay: Math.round(n.modeOptions.delay),
    });
}
function tL(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eS.Qx;
    return p().clamp(e, 0, t);
}
function tj(e) {
    let t = tD(e.context),
        n = !eQ || t.mute || t.deaf;
    e.context === eS.Yn.DEFAULT
        ? (n = n || e4 || e8 || e6 || !J.Z.didHavePermission(ev.Eu.AUDIO))
        : e.context === eS.Yn.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eS.Yn.DEFAULT && S.Z.updateNativeMute();
}
function tM(e) {
    e !== e$ && (null != a && ez.setGoLiveSource(null, e$), (e$ = e));
}
function tk() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e7,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        s = a;
    if (
        ((null == s ? void 0 : s.desktopSource) != null &&
            s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? void 0 : e.id) &&
            (null != s.desktopSource.soundshareId && (0, es.isWindows)() && T.pn(s.desktopSource.soundshareId),
            ez.setGoLiveSource(null, e$)),
        (null == s ? void 0 : s.cameraSource) != null &&
            (s.cameraSource.videoDeviceGuid !==
                (null == o || null == (t = o.cameraSource) ? void 0 : t.videoDeviceGuid) ||
                s.cameraSource.audioDeviceGuid !==
                    (null == o || null == (n = o.cameraSource) ? void 0 : n.audioDeviceGuid)) &&
            ez.setGoLiveSource(null, e$),
        e7 || i)
    ) {
        let e = tD().videoDeviceId;
        e7 && e === eS.w5 && e9 !== eS.Av && (e = e9), (e9 = (e7 = i) ? t3(e3, e) : eS.Av), ez.setVideoInputDevice(e9);
    }
    if (((a = o), null != o)) {
        let e = {
            resolution: o.quality.resolution,
            frameRate: o.quality.frameRate,
        };
        if (null != o.desktopSource) {
            let t = tP(),
                n = tD().videoHook,
                i = tH(),
                a = i ? (tY() && (0, X.R)("MediaEngineStore_updateVideo").enabled ? eO.zj : eO.ZM) : 0;
            ez.setGoLiveSource(
                {
                    desktopDescription: {
                        id: o.desktopSource.id,
                        soundshareId: o.desktopSource.soundshareId,
                        useVideoHook: n,
                        useGraphicsCapture: i,
                        useGraphicsCaptureApiLevel: a,
                        useLoopback: r.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: tW(),
                        videoHookStaleFrameTimeoutMs: eB,
                        graphicsCaptureStaleFrameTimeoutMs: eZ,
                        hdrCaptureMode: t,
                    },
                    quality: e,
                },
                e$,
            );
        }
        null != o.cameraSource &&
            ez.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: o.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                e$,
            );
    }
}
function tU(e) {
    switch (e) {
        case eS.H3.CPU_OVERUSE:
            return P.Nk.NoiseCancellerCpuOveruse;
        case eS.H3.FAILED:
            return P.Nk.NoiseCancellerFailed;
        case eS.H3.VAD_CPU_OVERUSE:
            return P.Nk.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function tG(e) {
    let t = (0, j.U)({
        location: "getAutomaticGainControlConfig",
        disable: !e,
    });
    return eN({ enabled: e }, t);
}
function tB(e, t) {
    e.setAutomaticGainControl(tG(t));
}
function tZ(e, t) {
    e.setNoiseCancellation(t);
    let n = (0, Y.n)({
        location: "getAutomaticGainControlConfig",
        disable: !t,
    }).enabled;
    e.setNoiseCancellationDuringProcessing(n);
}
function tV(e) {
    let t = tD(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(ep.Z.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(ep.Z.hasNoiseSuppression(n) || t.noiseSuppression),
        tB(e, ep.Z.hasAutomaticGainControl(n) || t.automaticGainControl),
        tZ(e, t.noiseCancellation),
        e.setVoiceFilterId(tp),
        (0, es.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function tF() {
    ez.on(b.aB.Connection, (e) => {
        var t;
        tx(e), tj(e), tV(e);
        let n = tD();
        e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers),
            e.setQoS(n.qos),
            e.setExperimentalEncoders(n.experimentalEncoders),
            e.setHardwareH264(r.getHardwareEncoding()),
            e.setSoftwareH264(null == (t = n.openH264) || t);
        let i = em.Z.getGuildId(),
            {
                muteBeforeProcessing: o,
                pttBeforeProcessing: s,
                skipEncode: l,
            } = (null != i ? B.Z : G.Z).getCurrentConfig(
                eN({ location: "setupMediaEngine" }, null != i && { guildId: i }),
                { autoTrackExposure: !0 },
            );
        o && e.setExperimentFlag(eS.V8.MUTE_BEFORE_PROCESSING, !0),
            s && e.setExperimentFlag(eS.V8.PTT_BEFORE_PROCESSING, !0),
            l && e.setExperimentFlag(eS.V8.SKIP_ENCODE, !0);
        let c = !1,
            u = !0;
        if (
            (e.setExperimentFlag(eS.V8.RESET_DECODER_ON_ERRORS, !0),
            c && e.setExperimentFlag(eS.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0),
            u && e.setExperimentFlag(eS.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0),
            e.context === eS.Yn.STREAM)
        ) {
            let { simulcastEnabled: t, lqStreamBitrate: n } = V.Z.getConfig();
            e.configureGoLiveSimulcast(t, n);
            let {
                enabled: r,
                scaleOffBitrateFloor: i,
                adjustMaxBitrateFloor: a,
            } = (0, F.k)({
                location: "setupMediaEngine",
                autoTrackExposure: !0,
            });
            e.setGoLiveUsePixelCounts(r, i, a);
        }
        if (
            ((0, es.isWindows)()
                ? (null == tC ? void 0 : tC.startsWith("NVIDIA")) || (null == tC ? void 0 : tC.startsWith("AMD"))
                    ? e.setExperimentFlag(eS.V8.SIGNAL_AV1, !0)
                    : e.setExperimentFlag(eS.V8.SIGNAL_AV1_DECODE, !0)
                : ((0, es.isMac)() || (0, es.isLinux)()) && e.setExperimentFlag(eS.V8.SIGNAL_AV1_DECODE, !0),
            (0, es.isWindows)() && e.setExperimentFlag(eS.V8.SIGNAL_AV1_HARDWARE_DECODE, !0),
            (0, es.isWeb)())
        ) {
            let { enabled: t } = (0, Z.A)("MediaEngineStore");
            e.setExperimentFlag(eS.V8.BROWSER_HEVC, t);
        }
        ez.setHasFullbandPerformance((0, R.Z)());
        let d = (0, U.D)("setupMediaEngine").enabled;
        if ((e.setRemoteAudioHistory(1000 * !!d), (0, C.Z)(r))) {
            let t = A.Z.getSettings();
            e.setExperimentFlag(eS.V8.STREAMER_CLIP, t.clipsEnabled);
            let { enableViewerClipping: n } = z.Z.getCurrentConfig(
                { location: "f627ab_15" },
                { autoTrackExposure: !1 },
            );
            e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eS.ux);
        }
        for (let t of ((n = tD(e.context)), e.setPostponeDecodeLevel(eF), Object.keys(n.localMutes)))
            t !== ef.default.getId() && e.setLocalMute(t, n.localMutes[t]);
        for (let t of Object.keys(n.localVolumes)) t !== ef.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
        for (let t of Object.keys(n.localPans)) {
            let r = n.localPans[t];
            e.setLocalPan(t, r.left, r.right);
        }
        for (let t of Object.keys(n.disabledLocalVideos)) e.setLocalVideoDisabled(t, n.disabledLocalVideos[t]);
        e.on(b.Sh.Speaking, (t, n) => {
            v.Z.dispatch({
                type: "SPEAKING",
                context: e.context,
                userId: t,
                speakingFlags: n,
            });
        }),
            e.context === eS.Yn.DEFAULT &&
                ((tt = !1),
                (tn = !1),
                e.on(b.Sh.SpeakingWhileMuted, () => {
                    (tt = !0),
                        (tn = !0),
                        r.emitChange(),
                        tr.stop(),
                        tr.start(eH, () => {
                            (tn = !1), r.emitChange();
                        });
                })),
            e.on(b.Sh.DesktopSourceEnd, (t, n) => {
                v.Z.dispatch({
                    type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                    settings: { context: e.context },
                    endReason: t,
                    errorCode: n,
                });
            }),
            e.on(b.Sh.InteractionRequired, (e) => {
                v.Z.dispatch({
                    type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
                    required: e,
                });
            }),
            e.on(b.Sh.VideoHookInitialize, (e, t, n, r, i, o) => {
                (null == a ? void 0 : a.desktopSource) != null &&
                    ei.default.track(
                        ey.rMx.VIDEOHOOK_INITIALIZED,
                        eN(
                            {
                                backend: e,
                                format: t,
                                framebuffer_format: n,
                                sample_count: r,
                                success: i,
                                reinitialization: o,
                            },
                            (0, L.Z)(null == a ? void 0 : a.desktopSource),
                        ),
                    );
            }),
            e.on(b.Sh.NoiseCancellationError, (e) => {
                ew.warn("noisecancellererror event: ".concat(e)),
                    (0, P.kr)({
                        type: P.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tU(e),
                    }),
                    (tb = !0),
                    ei.default.track(ey.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    v.Z.dispatch({
                        type: "AUDIO_SET_NOISE_SUPPRESSION",
                        enabled: !0,
                    }),
                    v.Z.dispatch({
                        type: "AUDIO_SET_NOISE_CANCELLATION",
                        enabled: !1,
                    }),
                    v.Z.dispatch({
                        type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR",
                        code: e,
                    });
            }),
            e.on(b.Sh.VoiceActivityDetectorError, (e) => {
                ew.warn("voiceactivitydetectorerror event: ".concat(e)),
                    (0, P.kr)({
                        type: P.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tU(e),
                    }),
                    ei.default.track(ey.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    v.Z.dispatch({
                        type: "AUDIO_SET_MODE",
                        context: eS.Yn.DEFAULT,
                        mode: ey.pM4.VOICE_ACTIVITY,
                        options: eP(eN({}, tD(eS.Yn.DEFAULT).modeOptions), { vadUseKrisp: !1 }),
                    }),
                    v.Z.dispatch({
                        type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
                        code: e,
                    });
            }),
            e.on(b.Sh.SdpError, (e, t, n, r) => {
                ei.default.track(ey.rMx.SDP_ERROR, {
                    operation: e,
                    error: t,
                    type: n,
                    sdp: r,
                });
            }),
            e.on(b.Sh.VideoState, (t) => {
                v.Z.dispatch({
                    type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED",
                    videoState: t,
                    context: e.context,
                });
            }),
            e.setBitRate(e_.Z.bitrate),
            e.applyVideoQualityMode(eb.Z.mode);
    }),
        ez.on(b.aB.DeviceChange, (e, t, n) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_DEVICES",
                inputDevices: e,
                outputDevices: t,
                videoDevices: n,
            });
        }),
        ez.on(b.aB.VolumeChange, (e, t) => {
            v.Z.dispatch({
                type: "AUDIO_VOLUME_CHANGE",
                inputVolume: e,
                outputVolume: t,
            });
        }),
        ez.on(b.aB.DesktopSourceEnd, (e, t) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                settings: null,
                endReason: e,
                errorCode: t,
            });
        }),
        ez.on(b.aB.AudioPermission, (e) => {
            (tO = !0),
                v.Z.dispatch({
                    type: "MEDIA_ENGINE_PERMISSION",
                    kind: "audio",
                    granted: e,
                });
        }),
        ez.on(b.aB.VideoPermission, (e) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_PERMISSION",
                kind: "video",
                granted: e,
            });
        }),
        ez.on(b.aB.WatchdogTimeout, async () => {
            let e;
            try {
                await ea.Z.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
            } catch (t) {
                "number" == typeof t.status && (e = t.status);
            }
            ew.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)),
                ei.default.track(ey.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        ez.on(b.aB.VideoInputInitialized, (e) => {
            ei.default.track(ey.rMx.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired
                    ? null
                    : Math.round(e.timeToFirstFrame * eo.Z.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: em.Z.getMediaSessionId(),
                rtc_connection_id: em.Z.getRTCConnectionId(),
            });
        }),
        ez.on(b.aB.AudioInputInitialized, (e) => {
            ei.default.track(ey.rMx.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * eo.Z.Millis.SECOND),
                rtc_connection_id: em.Z.getRTCConnectionId(),
            });
        }),
        ez.on(b.aB.ClipsRecordingRestartNeeded, () => {
            v.Z.dispatch({ type: "CLIPS_RESTART" });
        }),
        ez.on(b.aB.ClipsInitFailure, (e, t) => {
            v.Z.wait(() => {
                v.Z.dispatch({
                    type: "CLIPS_INIT_FAILURE",
                    errMsg: e,
                    applicationName: t,
                });
            });
        }),
        ez.on(b.aB.ClipsRecordingEnded, (e, t) => {
            var n, r;
            (null == o || null == (n = o.desktopSource) ? void 0 : n.id) === e &&
                (null != t && (null == a || null == (r = a.desktopSource) ? void 0 : r.soundshareId) !== t && T.pn(t),
                (o = null));
        }),
        ez.on(b.aB.NativeScreenSharePickerUpdate, (e, t) => {
            v.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE",
                existing: e,
                content: t,
            });
        }),
        ez.on(b.aB.NativeScreenSharePickerCancel, (e) => {
            v.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL",
                existing: e,
            });
        }),
        ez.on(b.aB.NativeScreenSharePickerError, (e) => {
            v.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_ERROR",
                error: e,
            });
        }),
        ez.on(b.aB.AudioDeviceModuleError, (e, t, n) => {
            ei.default.track(ey.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                audio_device_module: e,
                code: t,
                device_name: n,
            });
        }),
        ez.on(b.aB.VideoCodecError, (e) => {
            let t = "encode" === e.mode ? P.u.VIDEO_ENCODE_ERROR : P.u.VIDEO_DECODE_ERROR,
                n = {
                    videoCodec: e.codecStandard,
                    errorMessage: e.message,
                };
            (0, P.kr)(
                t === P.u.VIDEO_ENCODE_ERROR
                    ? eP(eN({ type: t }, n), { videoEncoder: e.implName })
                    : eP(eN({ type: t }, n), { videoDecoder: e.implName }),
            );
        }),
        ez.on(b.aB.ConnectionStats, (e) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_CONNECTION_STATS",
                connectionStats: e.map((e) => {
                    let { stats: t, connection: n } = e;
                    return {
                        stats: t,
                        mediaEngineConnectionId: n.mediaEngineConnectionId,
                        version: eY++,
                        context: n.context,
                    };
                }),
            });
        }),
        ez.on(b.aB.VoiceQueueMetrics, (e) => {
            let t = rT(e);
            null !== t && ei.default.track(ey.rMx.VOICE_QUEUE_METRICS, t);
        }),
        ez.setOnVideoContainerResized((e, t, n) => {
            v.Z.wait(() =>
                v.Z.dispatch({
                    type: "VIDEO_SIZE_UPDATE",
                    streamId: e,
                    width: t,
                    height: n,
                }),
            );
        }),
        tq.reset(),
        (0, eg.q)().then((e) => {
            null != e && (tC = e.gpu_brand);
        });
}
function tH() {
    return (0, es.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eO.c5);
}
function tY() {
    return (0, es.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eO.sN);
}
function tW() {
    return (
        (0, es.isMac)() &&
        ez.supports(eS.AN.SCREEN_CAPTURE_KIT) &&
        m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eO.C7)
    );
}
function tK() {
    return (
        (0, es.isWindows)() &&
        ez.supports(eS.AN.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        ez.supports(eS.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function tz() {
    return ez.supports(eS.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
let tq = new (class {
    start() {
        this.started || ((this.started = !0), ez.on(b.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout &&
                (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            ez.removeListener(b.aB.Silence, this.handleSilence),
            v.Z.dispatch({
                type: "AUDIO_INPUT_DETECTED",
                inputDetected: null,
            }));
    }
    update() {
        let e = tD();
        !ts && em.Z.getState() === ey.hes.RTC_CONNECTED && e.mode === ey.pM4.VOICE_ACTIVITY && e.silenceWarning
            ? this.start()
            : this.stop();
    }
    reset() {
        this.stop(), this.update();
    }
    constructor() {
        eC(this, "stateChangeTimeout", void 0),
            eC(this, "noVoiceTimeout", 5000),
            eC(this, "voiceTimeout", 1500),
            eC(this, "started", !1),
            eC(this, "handleSilence", (e) => {
                let t = !e;
                null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout),
                    (this.stateChangeTimeout = setTimeout(
                        () => {
                            (this.stateChangeTimeout = null),
                                this.started &&
                                    (v.Z.dispatch({
                                        type: "AUDIO_INPUT_DETECTED",
                                        inputDetected: t,
                                    }),
                                    e && (tl = !0));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout,
                    ));
            });
    }
})();
function tX() {
    var e;
    let t = y.K.get("audio");
    null != t && (y.K.set(eD, { [eS.Yn.DEFAULT]: t }), y.K.remove("audio")),
        (eq = null != (e = y.K.get(eD)) ? e : {}),
        p().each(eq, (e) => {
            if (
                (p().defaultsDeep(e, eW()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, ed.Kd)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== ex &&
                    ((e.vadUseKrispSettingVersion = ex), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                !e.vadThrehsoldMigrated)
            ) {
                var t;
                (e.vadThrehsoldMigrated = !0),
                    (null == (t = e.modeOptions) ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = eV);
            }
            (0, es.isWeb)()
                ? e.ncUseKrispjsSettingVersion !== ej &&
                  ((e.ncUseKrispjsSettingVersion = ej), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                : e.ncUseKrispSettingVersion !== eL &&
                  ((e.ncUseKrispSettingVersion = eL), (e.noiseSuppression = !1), (e.noiseCancellation = !0)),
                e.hardwareEnabledVersion !== eM && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = eM)),
                null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
        }),
        t$();
}
function tQ(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eS.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = tw(t);
    return Object.assign(r, e), !__OVERLAY__ && n && y.K.set(eD, eq), r;
}
function tJ() {
    y.K.remove(eD), location.reload();
}
function t$() {
    let e = tD();
    ez.setAudioInputDevice(e.inputDeviceId),
        ez.setAudioOutputDevice(e.outputDeviceId),
        tk(),
        ez.setInputVolume(e.inputVolume),
        ez.setOutputVolume(e.outputVolume),
        ez.setH264Enabled(r.getHardwareEncoding() || e.openH264),
        ez.setAv1Enabled(r.getHardwareEncoding()),
        ez.setH265Enabled(r.getHardwareEncoding()),
        ez.setAecDump(e.aecDumpEnabled),
        ez.setSidechainCompression(e.sidechainCompression),
        ez.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        ez.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing);
}
function t0() {
    eQ ||
        ez.enable().then(() =>
            v.Z.dispatch({
                type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
                enabled: !0,
                unmute: !1,
            }),
        );
}
function t1(e) {
    return {
        id: eS.w5,
        index: 0,
        name: e,
        disabled: !0,
        hardwareId: void 0,
        containerId: void 0,
    };
}
function t2(e, t) {
    if (0 === e.length) {
        let e = t1(t);
        return { [e.id]: e };
    }
    return p()(e)
        .map((e) => ({
            id: e.id,
            index: e.index,
            name: e.name,
            disabled: !1,
            facing: e.facing,
            hardwareId: e.hardwareId,
            containerId: e.containerId,
        }))
        .keyBy("id")
        .value();
}
function t3(e, t) {
    var n;
    let r = null != (n = e[t]) ? n : p()(e).values().first();
    return null != r ? r.id : t;
}
function t4(e) {
    let t = e1;
    if (((e1 = t2(e, eA.intl.string(eA.t["/QIjDA"]))), !p().isEqual(e1, t))) {
        let e = tD(),
            t = t3(e1, e.inputDeviceId);
        ez.setAudioInputDevice(t);
    }
}
function t8(e) {
    let t = e2;
    if (((e2 = t2(e, eA.intl.string(eA.t.xlUg0t))), !p().isEqual(e2, t))) {
        let e = tD(),
            t = t3(e2, e.outputDeviceId);
        ez.setAudioOutputDevice(t);
    }
}
function t6(e) {
    ta = e.length > 0;
    let t = e3;
    if (((e3 = t2(e, eA.intl.string(eA.t.WKWARU))), e7 && !p().isEqual(e3, t))) {
        var n;
        let e = void 0 !== e3[e9],
            r = e9 === eS.w5 && (null == (n = t[eS.w5]) ? void 0 : n.disabled);
        tk(e || r);
    }
}
function t5() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        r =
            null != (e = et.Z.settings.audioContextSettings)
                ? e
                : {
                      user: {},
                      stream: {},
                  };
    for (let e of Object.keys(r)) {
        let i = e === eI.u0.USER ? eS.Yn.DEFAULT : eS.Yn.STREAM,
            a = i === eS.Yn.STREAM ? eS.Yh : eS.Qx,
            o = null != (t = r[e]) ? t : {},
            { localMutes: s, localVolumes: l } = tD(i);
        for (let [e, t] of Object.entries(o))
            null == (0, ee.Ky)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== a ? (l[e] = t.volume) : delete l[e],
                ez.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (n)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == o[e] &&
                    (delete s[e],
                    delete l[e],
                    ez.eachConnection((t) => {
                        t.setLocalVolume(e, a), t.setLocalMute(e, !1);
                    }, i));
        tQ(
            {
                localMutes: s,
                localVolumes: l,
            },
            i,
        );
    }
}
function t7(e) {
    if (null == r)
        return (
            ew.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
            {
                soundshareId: null,
                soundshareSession: "",
            }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : ea.Z.getAudioPid(e),
            n = "";
        return (
            null != t && (n = ea.Z.generateSessionFromPid(t)),
            {
                soundshareId: t,
                soundshareSession: n,
            }
        );
    }
}
function t9(e, t) {
    (0, es.isWindows)() &&
        T.YT(e, { soundshare_session: t }).then((t) => {
            null == t ||
                x.ZP.shouldContinueWithoutElevatedProcessForPID(e) ||
                v.Z.wait(() => {
                    v.Z.dispatch({
                        type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                        errorMessage: t,
                    });
                });
        });
}
function ne(e) {
    (i = e.sessionId),
        (e4 = !1),
        (e5 = !1),
        (0, es.isWeb)() ||
            (K.Z.subscribe({ location: "handleConnectionOpen" }, (e) => {
                let t = tD();
                !e.sidechainAvailable && t.sidechainCompression
                    ? (tQ({ sidechainCompressionSettingVersion: 0 }), nP(!1))
                    : e.sidechainAvailable &&
                      t.sidechainCompressionSettingVersion < ek &&
                      (tQ({ sidechainCompressionSettingVersion: ek }), nP(e.sidechainEnabled));
            }),
            nD());
    let t = tD();
    if (
        (tK() && (tz() ? n9(eS.iA.AUTOMATIC) : t.automaticAudioSubsystem && re()),
        ez.supports(eS.AN.OFFLOAD_ADM_CONTROLS))
    ) {
        let e = !1;
        (0, es.isDesktop)()
            ? (e = (0, M.E)({ location: "handleConnectionOpen" }).enabled)
            : ((0, es.isIOS)() || (0, es.isAndroid)()) && (e = (0, k.W)({ location: "handleConnectionOpen" }).enabled),
            ez.setOffloadAdmControls(e);
    }
    (0, en.wt)({
        location: "MediaEngineStore",
        autoTrackExposure: !1,
    }) &&
        null !== t.mostRecentlyRequestedVoiceFilter &&
        (0, es.isDesktop)() &&
        (er.Z.getLastInitAttemptMayHaveCrashed()
            ? (v.Z.dispatch({
                  type: "AUDIO_SET_SELF_MUTE",
                  mute: !0,
                  context: eS.Yn.DEFAULT,
                  playSoundEffect: !0,
              }),
              tQ({ mostRecentlyRequestedVoiceFilter: null }))
            : n(358820).r5()),
        t5();
}
function nt(e) {
    let { mediaEngineState: t } = e;
    (eq = t.settingsByContext),
        (e1 = t.inputDevices),
        (e2 = t.outputDevices),
        (tA = t.appSupported),
        (td = t.krispModuleLoaded),
        (s = t.krispVersion),
        (e$ = t.goLiveContext);
}
function nn() {
    i = null;
}
function nr(e) {
    switch (e.state) {
        case ey.hes.CONNECTING:
            t0();
            break;
        case ey.hes.RTC_CONNECTING:
            (ts = !1), (tl = !1);
            break;
        case ey.hes.RTC_CONNECTED:
            tk();
            break;
        case ey.hes.DISCONNECTED:
            nf(), n_();
    }
    tq.update();
}
function ni(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (e4 = t.mute || t.suppress), (e5 = t.deaf), ez.eachConnection(tj);
            let e = null != t.guildId && null != t.channelId && null != tE && tE !== t.channelId,
                n = !tc && null == t.channelId;
            return tk(!e && !n && e7), (tE = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== ef.default.getId() || null != em.Z.getChannelId() || tk(!1, null), e;
    }, !1);
}
function na(e) {
    let { mute: t } = e;
    (e8 = t), ez.eachConnection(tj);
}
function no(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = tD(t);
    if (t === eS.Yn.DEFAULT && (J.Z.requestPermission(ev.Eu.AUDIO), e6)) return !1;
    (r = !i && !r) || (i = !1),
        n || (te = !0),
        tQ(
            {
                mute: r,
                deaf: i,
            },
            t,
        ),
        ez.eachConnection(tj);
}
function ns(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    tQ({ mute: n }, t), r || (te = !0), ez.eachConnection(tj);
}
function nl(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== eI.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    t5(!0);
}
function nc(e) {
    let { context: t } = e;
    tQ({ deaf: !tD(t).deaf }, t), ez.eachConnection(tj);
}
function nu(e) {
    let { context: t, userId: n } = e;
    if (n === ef.default.getId()) return;
    let { localMutes: r } = tD(t);
    r[n] ? delete r[n] : (r[n] = !0),
        tQ({ localMutes: r }, t),
        ez.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nd(e) {
    var t, n, r, i, a, o, s;
    let { context: l, userId: c, videoToggleState: u, persist: d, isAutomatic: _ } = e;
    f()(!(d && _), "These are not allowed to both be true.");
    let p = u === ey.ZUi.DISABLED,
        { disabledLocalVideos: h } = tD(l),
        m = null != (t = h[c]) && t,
        g = tI.has(c),
        E = u === ey.ZUi.AUTO_ENABLED || u === ey.ZUi.MANUAL_ENABLED;
    ew.info(
        "disableVideo="
            .concat(p, " currentlyDisabled=")
            .concat(m, " currentlyAutoDisabled=")
            .concat(g, ", isVideoShown=")
            .concat(E),
    ),
        f()(!(g && !m), "If you are auto-disabled, then you are also disabled.");
    let b = p !== m,
        y = l === eS.Yn.DEFAULT,
        O = _ && b && y,
        v = d && b && y;
    ew.info(
        "changed="
            .concat(b, " isDefaultContext=")
            .concat(y, " isUpdateCausedByVideoHealthManager=")
            .concat(O, " isManualToggleByUser=")
            .concat(v),
    );
    let { videoToggleStateMap: I } = tD(l);
    if (
        (I[c] === ey.ZUi.AUTO_PROBING &&
            u === ey.ZUi.AUTO_ENABLED &&
            (0, Q.Z)(c, p ? eS.fC.AUTO_DISABLE : eS.fC.AUTO_ENABLE, E),
        (I[c] = u),
        tQ({ videoToggleStateMap: I }, l, d),
        u === ey.ZUi.AUTO_PROBING
            ? null == (n = em.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, !0)
            : null == (r = em.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, !1),
        tT ||
            (ew.info("isAutoDisableAllowed=".concat(tT, " - disabling VideoHealthManager")),
            null == (a = em.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()),
        O)
    ) {
        if ((!p && !g) || (p && !tT)) return;
        (0, Q.Z)(c, p ? eS.fC.AUTO_DISABLE : eS.fC.AUTO_ENABLE, E), p ? tI.add(c) : tI.delete(c);
    } else
        v &&
            (g && !p
                ? (ew.info("disallowing auto-disable for this session because of manual override by user"),
                  (tT = !1),
                  null == (s = em.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(),
                  (0, Q.Z)(c, eS.fC.MANUAL_REENABLE, E))
                : (0, Q.Z)(c, p ? eS.fC.MANUAL_DISABLE : eS.fC.MANUAL_ENABLE, E));
    y && !p && tI.delete(c),
        p ? (h[c] = !0) : delete h[c],
        tQ({ disabledLocalVideos: h }, l, d),
        ez.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(c, null != (t = h[c]) && t);
        }, l);
}
function nf() {
    if (0 === tI.size) return;
    let e = eS.Yn.DEFAULT,
        { disabledLocalVideos: t } = tD(e);
    tI.forEach((n) => {
        f()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            ez.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tI.clear(),
        tQ({ disabledLocalVideos: t }, e, !1);
}
function n_() {
    let e = eS.Yn.DEFAULT,
        { videoToggleStateMap: t } = tD(e);
    for (let [e, n] of Object.entries(t)) n === ey.ZUi.AUTO_PROBING && delete t[e];
    tQ({ videoToggleStateMap: t }, e, !1);
}
function np(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === ef.default.getId()) return;
    let i = t === eS.Yn.STREAM ? eS.Yh : eS.Qx,
        { localVolumes: a } = tD(t);
    r === i ? delete a[n] : (a[n] = r), tQ({ localVolumes: a }, t), ez.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function nh(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: a } = tD(t);
    (a[n] = {
        left: r,
        right: i,
    }),
        tQ({ localPans: a }, t),
        ez.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function nm(e) {
    let { context: t, mode: n, options: r } = e;
    tQ(
        {
            mode: n,
            modeOptions: r,
        },
        t,
    ),
        ez.eachConnection(tx),
        tq.update();
}
function ng(e) {
    let { volume: t } = e;
    tQ({ inputVolume: tL(t) }), ez.setInputVolume(t);
}
function nE(e) {
    let { volume: t } = e;
    tQ({ outputVolume: t }), ez.setOutputVolume(t);
}
function nb(e) {
    let { id: t } = e;
    (t = t3(e1, t)), (e0 = performance.now()), tQ({ inputDeviceId: t }), ez.setAudioInputDevice(t);
}
function ny(e) {
    let { id: t } = e;
    tQ({ outputDeviceId: (t = t3(e2, t)) }), ez.setAudioOutputDevice(t);
}
function nO(e) {
    let { id: t } = e;
    tQ({ videoDeviceId: (t = t3(e3, t)) }), tk();
}
function nv(e) {
    let { inputProfile: t } = e,
        n = tQ({ activeInputProfile: t });
    ez.eachConnection((e) => {
        tx(e),
            tB(e, n.automaticGainControl),
            e.setEchoCancellation(n.echoCancellation),
            e.setExperimentalEncoders(n.experimentalEncoders),
            tZ(e, n.noiseCancellation),
            e.setNoiseSuppression(n.noiseSuppression);
    }),
        ez.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        tq.update(),
        nx();
}
function nI(e) {
    return eJ !== e.required && ((eJ = e.required), e.required || ez.interact(), !0);
}
function nT(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    t4(t), t8(n), t6(r);
}
function nS(e) {
    let { inputVolume: t, outputVolume: n } = e;
    tQ({
        inputVolume: tL(t),
        outputVolume: n,
    });
}
function nA(e) {
    var t;
    let n = tD(),
        r = ez.getAudioSubsystem(),
        i = ez.getAudioLayer(),
        a = t3(e1, n.inputDeviceId),
        o = null == (t = e1[a]) ? void 0 : t.name;
    ei.default.track(ey.rMx.VOICE_PROCESSING, {
        echo_cancellation: n.echoCancellation,
        noise_cancellation: n.noiseCancellation,
        noise_suppression: n.noiseSuppression,
        automatic_gain_control: n.automaticGainControl,
        location: e,
        bypass_system_input_processing: n.bypassSystemInputProcessing,
        audio_subsystem: r,
        audio_layer: i,
        input_device: o,
    });
}
function nC(e) {
    let t = tQ({ echoCancellation: e.enabled });
    ez.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nx(), nA(e.location);
}
function nN(e) {
    nP(e.enabled);
}
function nR(e) {
    let t = tQ({ sidechainCompressionStrength: e.strength });
    ez.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function nP(e) {
    let t = tQ({ sidechainCompression: e });
    ez.setSidechainCompression(t.sidechainCompression);
}
function nw(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tS.add(n) : tS.delete(n), nD(), nx();
}
function nD() {
    let { voiceFiltersPreProcessMute: e } = q.Z.getCurrentConfig(
            { location: "setMaybePreprocessMute" },
            { autoTrackExposure: !0 },
        ),
        t = e && !tS.has("voice_filter_preview") && !tS.has("mic_test");
    ez.setMaybePreprocessMute(t);
}
function nx() {
    let e = tD(),
        t = tS.size > 0,
        n = e.inputDeviceId,
        r = ep.Z.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        a = ep.Z.hasNoiseSuppression(n) || e.noiseSuppression,
        o = tG(ep.Z.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation,
        l = null !== tp,
        c = tS.has("voice_filter") && 1 === tS.size;
    ez.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: a,
        automaticGainControlConfig: o,
        noiseCancellation: s,
        voiceFilters: l,
        loopbackUseAudioMode: c,
    });
}
function nL(e) {
    let t = tQ({ noiseSuppression: e.enabled });
    ez.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nx(), nA(e.location);
}
function nj(e) {
    let t = tQ({ automaticGainControl: e.enabled });
    ez.eachConnection((e) => tB(e, t.automaticGainControl)), nx(), nA(e.location);
}
function nM(e) {
    let t = tQ({ noiseCancellation: e.enabled });
    ez.eachConnection((e) => tZ(e, t.noiseCancellation)), nx(), nA(e.location);
}
function nk(e) {
    $.Z.setKrispModelOverride(e.model), (c = e.model), nx();
}
function nU(e) {
    var t;
    (0, es.isWeb)() || ((t_ = e.enabled), null == (t = ez.setNoiseCancellationEnableStats) || t.call(ez, e.enabled));
}
function nG(e) {
    let t = tQ({ experimentalEncoders: e.enabled });
    ez.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
}
function nB(e) {
    let { enabled: t } = e,
        n = tQ({ hardwareEncoding: t }),
        i = r.getHardwareEncoding();
    ez.eachConnection((e) => e.setHardwareH264(i)),
        ez.setH264Enabled(i || n.openH264),
        ez.setAv1Enabled(i),
        ez.setH265Enabled(i);
}
function nZ(e) {
    tQ({ silenceWarning: e.enabled }), tq.update();
}
function nV(e) {
    ez.setDebugLogging(e.enabled);
}
function nF(e) {
    let { level: t } = e;
    (l = t), $.Z.setKrispSuppressionLevel(t);
}
function nH(e) {
    tQ({ videoHook: e.enabled });
}
function nY(e) {
    tQ({ experimentalSoundshare2: e.enabled });
}
function nW(e) {
    let { enabled: t } = e;
    tQ({ useSystemScreensharePicker: t });
}
function nK(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = tQ({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r,
        });
    ez.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function nz(e) {
    let { enabled: t } = e;
    tQ({ qos: t }), ez.eachConnection((e) => e.setQoS(t));
}
function nq() {
    tJ();
}
function nX(e) {
    let { inputDetected: t } = e;
    (to = t), !ts && to && ((ts = !0), tq.update());
}
function nQ(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === e6) return !1;
    (e6 = n), ez.eachConnection(tj);
}
function nJ(e) {
    let { state: t, permissionType: n } = e,
        r = t === ev.PQ.ACCEPTED;
    switch (n) {
        case ev.Eu.AUDIO:
            (tO = !0), ez.eachConnection(tj);
            break;
        case ev.Eu.CAMERA:
            !r && e7 && tk(!1);
            break;
        default:
            return !1;
    }
}
function n$() {
    return td || !1;
}
async function n0() {
    try {
        var e, t, n, i;
        await eu.ZP.ensureModule("discord_krisp");
        let a = eu.ZP.requireModule("discord_krisp");
        (td = !0),
            (s = null == (e = a.getSdkVersion) ? void 0 : e.call(a)),
            (l = null != (i = null == (t = a.getSuppressionLevel) ? void 0 : t.call(a)) ? i : 100),
            null == (n = a.getNcModels) ||
                n.call(a).then((e) => {
                    (tf = e), r.emitChange();
                }),
            r.emitChange();
    } catch (t) {
        ew.warn("Failed to load Krisp module: ".concat(t.message)), ec.Z.captureException(t);
        let e = eS.H3.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eS.H3.INITIALIZED : n;
        }
        ei.default.track(ey.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), tQ({ noiseCancellation: !1 });
    } finally {
        tu = !1;
    }
}
function n1() {
    return ((0, es.isWindows)() && "arm64" !== eu.ZP.architecture) || (0, es.isLinux)() || (0, es.isMac)();
}
function n2() {
    !n1() || __OVERLAY__ || tu || td
        ? (0, es.isWeb)() && ez.supports(eS.AN.NOISE_CANCELLATION)
            ? ((td = !0), r.emitChange())
            : (0, es.isWeb)() && tQ({ noiseCancellation: !1 })
        : ((tu = !0), n0());
}
function n3(e) {
    let { enabled: t } = e;
    ei.default.track(ey.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != tp ? tp : null,
        enabled: t,
    }),
        tQ({ voiceFilterPlaybackEnabled: t });
}
function n4(e) {
    let { newVoiceFilterId: t } = e;
    tQ({ mostRecentlyRequestedVoiceFilter: t }), ez.eachConnection((e) => e.setVoiceFilterId(t));
}
function n8() {
    tQ({ mostRecentlyRequestedVoiceFilter: null });
}
function n6(e) {
    let { voiceFilterId: t } = e;
    (tm = tp), (tg = th), (tp = t), (th = null === t ? null : Date.now());
}
function n5(e) {
    let t = e.bypassEnabled;
    tQ({ bypassSystemInputProcessing: t }), ez.setAudioInputBypassSystemProcessing(t), nA(e.location);
}
function n7(e) {
    n9(e.subsystem);
}
function n9(e) {
    e === eS.iA.AUTOMATIC
        ? (tQ({ automaticAudioSubsystem: !0 }), re())
        : (tQ({ automaticAudioSubsystem: !1 }), ez.setAudioSubsystem(e));
}
function re() {
    ez.queueAudioSubsystem(eS.iA.EXPERIMENTAL);
}
function rt(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && tk(i, null), null != t || null == n)) {
        tc = !1;
        return;
    }
    if (tc) return;
    tc = !0;
    let a = tD();
    (a.mute || a.deaf) &&
        (tQ({
            deaf: !1,
            mute: !1,
        }),
        ez.eachConnection(tj));
}
function rn(e) {
    let { application: t } = e;
    eX.add(t.id);
}
function rr(e) {
    let { application: t } = e;
    eX.delete(t.id);
}
function ri(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (eQ = !1), ez.eachConnection(tj);
                break;
            case "video":
                tk(!1);
        }
}
function ra(e) {
    (eQ = e.enabled),
        e.unmute &&
            tQ({
                mute: !1,
                deaf: !1,
            }),
        ez.eachConnection(tj);
}
function ro(e) {
    let { enabled: t } = e;
    J.Z.requestPermission(ev.Eu.CAMERA), tk(t);
}
function rs(e) {
    let { sourceId: t, applicationName: n, quality: i } = e,
        a = A.Z.isDecoupledGameClippingEnabled(),
        s = A.Z.getSettings().decoupledClipsEnabled;
    if (!a || !s || null == I.Z) return;
    let l = null,
        c = null,
        u = ea.Z.getPidFromDesktopSource(t);
    ({ soundshareId: l, soundshareSession: c } = t7(u));
    let d = {
        desktopSource: {
            id: t,
            sourcePid: u,
            soundshareId: l,
            soundshareSession: c,
        },
        quality: i,
    };
    null != o &&
        (ez.setClipsSource(null),
        (0, es.isWindows)() && null != o.desktopSource.soundshareId && T.pn(o.desktopSource.soundshareId)),
        null != l && t9(l, c),
        (o = d);
    let f = tP(),
        _ = tD().videoHook;
    ez.setClipsSource({
        desktopDescription: {
            id: o.desktopSource.id,
            soundshareId: o.desktopSource.soundshareId,
            useVideoHook: _,
            useGraphicsCapture: tH(),
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: tW(),
            videoHookStaleFrameTimeoutMs: eB,
            graphicsCaptureStaleFrameTimeoutMs: eZ,
            hdrCaptureMode: f,
        },
        quality: i,
        applicationName: n,
    });
}
function rl(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((o = null), ez.setClipsSource(null));
}
function rc(e) {
    var t, n, r, i;
    let { settings: a } = e;
    if ((null == a ? void 0 : a.desktopSettings) != null) {
        let e = null,
            r = null,
            { sourceId: i, sound: o } = a.desktopSettings,
            s = null != (t = a.context) ? t : eS.Yn.DEFAULT,
            l =
                null != (n = a.qualityOptions)
                    ? n
                    : {
                          resolution: 720,
                          frameRate: 30,
                      },
            c = !1 === o ? null : ea.Z.getPidFromDesktopSource(i);
        es.isPlatformEmbedded &&
            !0 === o &&
            (({ soundshareId: e, soundshareSession: r } = t7(c)), null != e && t9(e, r)),
            tM(s),
            tk(s === eS.Yn.STREAM && e7, {
                desktopSource: {
                    id: i,
                    sourcePid: c,
                    soundshareId: e,
                    soundshareSession: r,
                },
                quality: {
                    resolution: l.resolution,
                    frameRate: l.frameRate,
                },
            });
    } else if ((null == a ? void 0 : a.cameraSettings) != null) {
        let e = null != (r = a.context) ? r : eS.Yn.DEFAULT,
            { videoDeviceGuid: t, audioDeviceGuid: n } = a.cameraSettings,
            o = e === eS.Yn.STREAM && e7,
            s =
                null != (i = a.qualityOptions)
                    ? i
                    : {
                          resolution: 720,
                          frameRate: 30,
                      };
        tk(o, {
            cameraSource: {
                videoDeviceGuid: t,
                audioDeviceGuid: n,
            },
            quality: {
                resolution: s.resolution,
                frameRate: s.frameRate,
            },
        });
    } else tk(e7, null);
}
function ru(e) {
    let { section: t } = e;
    return t === ey.oAB.VOICE && t0(), !1;
}
function rd() {
    return ez.eachConnection(tV), !1;
}
function rf(e) {
    let { enabled: t } = e,
        n = tQ({ openH264: t });
    ez.setH264Enabled(r.getHardwareEncoding() || n.openH264),
        ez.eachConnection((e) => {
            var t;
            return e.setSoftwareH264(null == (t = n.openH264) || t);
        });
}
function r_(e) {
    let { enabled: t } = e,
        n = tQ({ aecDumpEnabled: t });
    ez.setAecDump(n.aecDumpEnabled);
}
function rp(e) {
    let { state: t } = e,
        n = D.Z.isEnabled();
    if (t === ey.$7l.BACKGROUND && e7 && !n) (ti = !0), tk(!1);
    else {
        if (t !== ey.$7l.ACTIVE || !ti) return !1;
        (ti = !1), tk(!0);
    }
    return !0;
}
function rh(e) {
    ez.eachConnection((t) => t.setBitRate(e.bitrate));
}
function rm() {
    if ((!e7 && null == a) || null != em.Z.getRTCConnectionId()) return !1;
    tk(!1, null);
}
function rg() {
    return !!tb && ((tb = !1), !0);
}
function rE(e) {
    ez.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function rb(e) {
    let { settings: t } = e;
    ez.applyMediaFilterSettings(t).finally(() => {
        (ty = !1), r.emitChange();
    });
}
function ry() {
    ty = !0;
}
function rO() {
    ty = !1;
}
function rv(e) {
    tN = e.enabled;
}
class rI extends (u = E.ZP.Store) {
    initialize() {
        tF(),
            tX(),
            n2(),
            n_(),
            (tA = {
                [eS.AN.VIDEO]: ez.supports(eS.AN.VIDEO),
                [eS.AN.DESKTOP_CAPTURE]: ez.supports(eS.AN.DESKTOP_CAPTURE),
                [eS.AN.HYBRID_VIDEO]: ez.supports(eS.AN.HYBRID_VIDEO),
            }),
            this.waitFor(ef.default, ep.Z, eh.Z, em.Z, x.ZP, J.Z.storage, et.Z, w.Z, A.Z);
    }
    supports(e) {
        return ez.supports(e);
    }
    supportsInApp(e) {
        return tA[e] || ez.supports(e);
    }
    isSupported() {
        return ez.supported();
    }
    isExperimentalEncodersSupported() {
        return ez.supports(eS.AN.EXPERIMENTAL_ENCODERS);
    }
    isNoiseSuppressionSupported() {
        return ez.supports(eS.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return n$();
    }
    isNoiseCancellationError() {
        return tb;
    }
    isAutomaticGainControlSupported() {
        return ez.supports(eS.AN.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !tz() && (ez.supports(eS.AN.LEGACY_AUDIO_SUBSYSTEM) || ez.supports(eS.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return ez.supports(eS.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === ez.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return n$();
    }
    isAecDumpSupported() {
        return ez.supports(eS.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return ez.supports(eS.AN.VIDEO) && ez.supports(eS.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        let t = (null == (e = eh.Z.getChannel(tE)) ? void 0 : e.type) === ey.d4z.GUILD_STAGE_VOICE,
            n = r.getHardwareEncoding();
        return !t && n && V.Z.simulcastEnabled();
    }
    getAecDump() {
        return tD().aecDumpEnabled;
    }
    getMediaEngine() {
        return ez;
    }
    getVideoComponent() {
        return ez.Video;
    }
    getCameraComponent() {
        return ez.Camera;
    }
    getKrispSuppressionLevel() {
        return null != l ? l : 100;
    }
    getKrispEnableStats() {
        return t_;
    }
    isEnabled() {
        return eQ;
    }
    isMute() {
        return this.isSelfMute() || e4;
    }
    isDeaf() {
        return this.isSelfDeaf() || e5;
    }
    hasContext(e) {
        return null != eq[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.Yn.DEFAULT;
        return e === eS.Yn.DEFAULT && e8;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.Yn.DEFAULT;
        return (
            !this.isEnabled() ||
            tD(e).mute ||
            !J.Z.didHavePermission(ev.Eu.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eS.Yn.DEFAULT && e6)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return te;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        te = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && ep.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return tN;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.Yn.DEFAULT;
        return !this.isSupported() || tD(e).deaf;
    }
    isVideoEnabled() {
        return e7 && ta;
    }
    isVideoAvailable() {
        return Object.values(e3).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.Yn.STREAM;
        return e$ === e && null != a;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.Yn.STREAM;
        return e$ === t && null != a && (null == (e = a.desktopSource) ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eS.Yn.DEFAULT;
        return e !== ef.default.getId() && (tD(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return ez.supports(eS.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eS.Yn.DEFAULT;
        return null != (t = tD(n).disabledLocalVideos[e]) && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eS.Yn.DEFAULT;
        return null != (t = tD(n).videoToggleStateMap[e]) ? t : ey.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eS.Yn.DEFAULT;
        return t === eS.Yn.DEFAULT && tI.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.Yn.DEFAULT;
        return e === eS.Yn.DEFAULT && tI.size > 0;
    }
    isMediaFilterSettingLoading() {
        return ty;
    }
    isNativeAudioPermissionReady() {
        return tO;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return e$;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return e0;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eS.Yn.DEFAULT,
            n = tD(t).localPans[e];
        return null != n ? n : eG;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eS.Yn.DEFAULT,
            n = t === eS.Yn.STREAM ? eS.Yh : eS.Qx,
            r = tD(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return tD().inputVolume;
    }
    getOutputVolume() {
        return tD().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.Yn.DEFAULT;
        return tD(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.Yn.DEFAULT;
        return tD(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return tp;
    }
    getActiveVoiceFilterAppliedAt() {
        return th;
    }
    getPreviousVoiceFilter() {
        return tm;
    }
    getPreviousVoiceFilterAppliedAt() {
        return tg;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return tD().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return tD().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            p().each(eq, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === ey.pM4.PUSH_TO_TALK && eX.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return t3(e1, tD().inputDeviceId);
    }
    getOutputDeviceId() {
        return t3(e2, tD().outputDeviceId);
    }
    getVideoDeviceId() {
        return t3(e3, tD().videoDeviceId);
    }
    getInputDevices() {
        return e1;
    }
    getOutputDevices() {
        return e2;
    }
    getVideoDevices() {
        return e3;
    }
    getEchoCancellation() {
        let e = tD();
        return ep.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return tD().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return tD().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return tD().h265Enabled;
    }
    getLoopback() {
        return tS.size > 0;
    }
    getLoopbackReasons() {
        return tS;
    }
    getNoiseSuppression() {
        let e = tD();
        return ep.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tD();
        return ep.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return tD().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return tD().noiseCancellation;
    }
    getExperimentalEncoders() {
        return tD().experimentalEncoders;
    }
    getHardwareEncoding() {
        var e;
        return !!(0, H.m)("MediaEngineStore") || null == (e = tD().hardwareEncoding) || e;
    }
    getHardwareEncodingSetting() {
        var e;
        return null == (e = tD().hardwareEncoding) || e;
    }
    getEnableSilenceWarning() {
        return tD().silenceWarning;
    }
    getDebugLogging() {
        return ez.getDebugLogging();
    }
    getQoS() {
        return tD().qos;
    }
    getAttenuation() {
        return tD().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return tD().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return tD().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return tK() && tD().automaticAudioSubsystem ? eS.iA.AUTOMATIC : ez.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return ez.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return tD().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eT._.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.Yn.DEFAULT;
        return tD(e);
    }
    getState() {
        return {
            settingsByContext: eq,
            inputDevices: e1,
            outputDevices: e2,
            appSupported: tA,
            krispModuleLoaded: td,
            krispVersion: s,
            krispSuppressionLevel: l,
            goLiveSource: a,
            goLiveContext: e$,
        };
    }
    getInputDetected() {
        return to;
    }
    getNoInputDetectedNotice() {
        return tl;
    }
    getPacketDelay() {
        return es.isPlatformEmbedded || this.getMode() !== ey.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        ez.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return eJ;
    }
    getVideoHook() {
        return tD().videoHook;
    }
    supportsVideoHook() {
        return ez.supports(eS.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tD().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return (
            ez.supports(eS.AN.EXPERIMENTAL_SOUNDSHARE) &&
            m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eO.T6)
        );
    }
    supportsHookSoundshare() {
        return (
            (0, es.isWindows)() &&
            ez.supports(eS.AN.SOUNDSHARE) &&
            m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eO.sA)
        );
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = tD().useSystemScreensharePicker,
            n =
                (0, es.isLinux)() ||
                ((0, es.isMac)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eO.jR));
        return e && (null != t ? t : n);
    }
    supportsSystemScreensharePicker() {
        return ez.supports(eS.AN.NATIVE_SCREENSHARE_PICKER);
    }
    getOpenH264() {
        return tD().openH264;
    }
    getEverSpeakingWhileMuted() {
        return tt;
    }
    getSpeakingWhileMuted() {
        return tn;
    }
    getKrispModelOverride() {
        return c;
    }
    getKrispModels() {
        return tf;
    }
    getKrispVadActivationThreshold() {
        var e;
        return null != (e = tD().modeOptions.vadKrispActivationThreshold) ? e : eU;
    }
    hasActiveCallKitCall() {
        return tR;
    }
    setHasActiveCallKitCall(e) {
        tR = e;
    }
    supportsScreenSoundshare() {
        return (0, es.isMac)()
            ? ez.supports(eS.AN.SOUNDSHARE) &&
                  m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eO.yG) &&
                  tW()
            : (0, es.isWindows)()
              ? ez.supports(eS.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, es.isLinux)() && ez.supports(eS.AN.SCREEN_SOUNDSHARE);
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.Yn.DEFAULT,
            t = this.supports(eS.AN.VIDEO)
                ? [
                      {
                          rid: "100",
                          type: e === eS.Yn.DEFAULT ? eS.Tr.VIDEO : eS.Tr.SCREEN,
                          quality: eS.y7,
                      },
                  ]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === eS.Yn.DEFAULT || this.goLiveSimulcastEnabled()) &&
                t.push({
                    rid: "50",
                    type: e === eS.Yn.DEFAULT ? eS.Tr.VIDEO : eS.Tr.SCREEN,
                    quality: eS.LD,
                }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: !1 };
        return (
            (0, es.isWeb)() &&
                (e.fetchDave = W.N.getCurrentConfig({
                    location: "MediaEngineStore fetchAsyncResources",
                }).loadWasmModule),
            ez.fetchAsyncResources(e)
        );
    }
    getSupportedSecureFramesProtocolVersion() {
        if ((0, es.isWeb)()) {
            let { useWasmModule: e } = W.N.getCurrentConfig({
                location: "MediaEngineStore getSupportedSecureFramesProtocolVersion",
            });
            if (!e) return 0;
        }
        let e = ez.getSupportedSecureFramesProtocolVersion(),
            t = W.m.getCurrentConfig({ location: "MediaEngineStore" });
        return 114 === e && (e = 1), t.canSupportDaveProtocol && e >= t.protocolVersionFloor ? e : 0;
    }
    hasClipsSource() {
        return null != o;
    }
    getGpuBrand() {
        return tC;
    }
}
function rT(e) {
    if (null == e.taskMetrics || 0 === e.taskMetrics.length || 1 === e.taskMetrics.length) return null;
    let t = {
        metrics_period_ms: e.periodMs,
        total_tasks: 0,
        total_exec_time_ns: 0,
    };
    (t.total_tasks = e.taskMetrics.reduce((e, t) => e + t.count, 0)),
        (t.total_exec_time_ns = e.taskMetrics.reduce((e, t) => e + t.totalExecTimeNs, 0));
    let n = [...e.taskMetrics].sort((e, t) => t.longestExecTimeNs - e.longestExecTimeNs),
        r = [...e.taskMetrics].sort((e, t) => t.longestQueueTimeNs - e.longestQueueTimeNs);
    for (let e = 0; e < 3; e++)
        if (e < n.length) {
            let r = n[e];
            (t["slow_task_".concat(e, "_name")] = r.name),
                (t["slow_task_".concat(e, "_longest_exec_time_ns")] = r.longestExecTimeNs);
        }
    for (let e = 0; e < 3; e++)
        if (e < r.length) {
            let n = r[e];
            (t["delayed_task_".concat(e, "_name")] = n.name),
                (t["delayed_task_".concat(e, "_longest_queue_time_ns")] = n.longestQueueTimeNs);
        }
    return (t.full_task_report = JSON.stringify(n)), t;
}
eC(rI, "displayName", "MediaEngineStore");
let rS = (r = new rI(v.Z, {
    VOICE_CHANNEL_SELECT: rt,
    VOICE_STATE_UPDATES: ni,
    CONNECTION_OPEN: ne,
    CONNECTION_CLOSED: nn,
    RTC_CONNECTION_STATE: nr,
    AUDIO_SET_TEMPORARY_SELF_MUTE: na,
    AUDIO_TOGGLE_SELF_MUTE: no,
    AUDIO_SET_SELF_MUTE: ns,
    AUDIO_TOGGLE_SELF_DEAF: nc,
    AUDIO_TOGGLE_LOCAL_MUTE: nu,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: nd,
    AUDIO_SET_LOCAL_VOLUME: np,
    AUDIO_SET_LOCAL_PAN: nh,
    AUDIO_SET_MODE: nm,
    AUDIO_SET_INPUT_VOLUME: ng,
    AUDIO_SET_OUTPUT_VOLUME: nE,
    AUDIO_SET_INPUT_DEVICE: nb,
    AUDIO_SET_OUTPUT_DEVICE: ny,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: nv,
    AUDIO_SET_ECHO_CANCELLATION: nC,
    AUDIO_SET_SIDECHAIN_COMPRESSION: nN,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nR,
    AUDIO_SET_LOOPBACK: nw,
    AUDIO_SET_NOISE_SUPPRESSION: nL,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nj,
    AUDIO_SET_NOISE_CANCELLATION: nM,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: nk,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: nZ,
    AUDIO_SET_DEBUG_LOGGING: nV,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: nF,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: nU,
    MEDIA_ENGINE_SET_VIDEO_HOOK: nH,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: nY,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: nW,
    AUDIO_SET_ATTENUATION: nK,
    AUDIO_SET_QOS: nz,
    MEDIA_ENGINE_DEVICES: nT,
    AUDIO_VOLUME_CHANGE: nS,
    AUDIO_RESET: nq,
    AUDIO_INPUT_DETECTED: nX,
    AUDIO_SET_SUBSYSTEM: n7,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: n5,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: ra,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: ro,
    MEDIA_ENGINE_PERMISSION: ri,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rc,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nO,
    MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nG,
    MEDIA_ENGINE_INTERACTION_REQUIRED: nI,
    USER_SETTINGS_MODAL_INIT: ru,
    USER_SETTINGS_MODAL_SET_SECTION: ru,
    CERTIFIED_DEVICES_SET: rd,
    RPC_APP_CONNECTED: rn,
    RPC_APP_DISCONNECTED: rr,
    OVERLAY_INITIALIZE: nt,
    MEDIA_ENGINE_SET_OPEN_H264: rf,
    MEDIA_ENGINE_SET_HARDWARE_ENCODING: nB,
    APP_STATE_UPDATE: rp,
    SET_CHANNEL_BITRATE: rh,
    SET_VAD_PERMISSION: nQ,
    SET_NATIVE_PERMISSION: nJ,
    SET_CHANNEL_VIDEO_QUALITY_MODE: rE,
    MEDIA_ENGINE_SET_AEC_DUMP: r_,
    CHANNEL_DELETE: rm,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rg,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rb,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: ry,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rO,
    USER_SETTINGS_PROTO_UPDATE: nl,
    CLIPS_INIT: rs,
    CLIPS_SETTINGS_UPDATE: rl,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rv,
    VOICE_FILTER_REQUEST_SWITCH: n4,
    VOICE_FILTER_LOOPBACK_TOGGLE: n3,
    VOICE_FILTER_APPLIED: n6,
    VOICE_FILTER_DOWNLOAD_FAILED: n8,
    VOICE_FILTER_APPLY_FAILED: n8,
}));
