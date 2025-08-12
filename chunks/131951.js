let r, i, o, a, s, l, c;
n.d(t, { Z: () => rO }), n(388685), n(953529), n(457542), n(539854), n(642613), n(49124), n(337869);
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
    N = n(779618),
    C = n(710845),
    R = n(535911),
    P = n(458725),
    w = n(353926),
    D = n(646047),
    L = n(594190),
    x = n(502286),
    M = n(883794),
    k = n(822253),
    j = n(177732),
    U = n(355552),
    G = n(294473),
    B = n(706629),
    Z = n(166884),
    F = n(585360),
    V = n(529558),
    H = n(111672),
    Y = n(441167),
    W = n(580930),
    K = n(787517),
    z = n(338336),
    q = n(751571),
    X = n(311473),
    Q = n(725380),
    J = n(581883),
    $ = n(875527),
    ee = n(420439),
    et = n(626135),
    en = n(12647),
    er = n(70956),
    ei = n(358085),
    eo = n(747268),
    ea = n(960048),
    es = n(998502),
    el = n(13140),
    ec = n(314897),
    eu = n(967368),
    ed = n(463395),
    ef = n(592125),
    e_ = n(19780),
    ep = n(704806),
    eh = n(594174),
    em = n(631768),
    eg = n(981631),
    eE = n(70722),
    eb = n(761274),
    ey = n(526761),
    eO = n(345655),
    ev = n(65154),
    eI = n(388032);
function eT(e, t, n) {
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
function eS(e) {
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
                eT(e, t, n[t]);
            });
    }
    return e;
}
function eA(e, t) {
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
function eN(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eA(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eC = new C.Z("MediaEngineStore"),
    eR = "MediaEngineStore",
    eP = 4,
    ew = 1,
    eD = 1,
    eL = 1,
    ex = 1,
    eM = 0.5,
    ek = {
        left: 1,
        right: 1,
    },
    ej = 500,
    eU = 5 * er.Z.Millis.SECOND,
    eG = -60,
    eB = 100,
    eZ = 2 * er.Z.Millis.SECOND,
    eF = 0;
function eV() {
    return {
        mode: eg.pM4.VOICE_ACTIVITY,
        modeOptions: {
            threshold: eG,
            autoThreshold: ei.isPlatformEmbedded || __OVERLAY__,
            vadUseKrisp: !0,
            vadKrispActivationThreshold: eM,
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
        inputVolume: ev.Qx,
        outputVolume: ev.Qx,
        inputDeviceId: ev.w5,
        outputDeviceId: ev.w5,
        videoDeviceId: ev.w5,
        qos: !1,
        qosMigrated: !1,
        videoHook: eY.supports(ev.AN.VIDEO_HOOK),
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
let eH = {
        [eO._.CUSTOM]: {},
        [eO._.VOICE_ISOLATION]: {
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
        [eO._.STUDIO]: {
            mode: eg.pM4.VOICE_ACTIVITY,
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
    eY = (0, b.Mt)((0, b.jj)());
eC.enableNativeLogger(!0);
let eW = {},
    eK = new Set([ev.Yn.DEFAULT]),
    ez = eY.supports(ev.AN.AUTO_ENABLE),
    eq = !1,
    eX = ev.Yn.STREAM,
    eQ = performance.now(),
    eJ = { [ev.w5]: tQ("No Input Devices") },
    e$ = { [ev.w5]: tQ("No Output Devices") },
    e0 = { [ev.w5]: tQ("No Video Devices") },
    e1 = !1,
    e2 = !1,
    e3 = !1,
    e5 = !1,
    e4 = !1,
    e6 = ev.Av,
    e8 = !1,
    e7 = !1,
    e9 = !1,
    te = new O.V7(),
    tt = !1,
    tn = !1,
    tr = null,
    ti = !1,
    to = !1,
    ta = !1,
    ts = !1,
    tl = !1,
    tc = [],
    tu = !1,
    td = null,
    tf = null,
    t_ = null,
    tp = null,
    th = null,
    tm = !1,
    tg = !1,
    tE = !1;
q.Z.hasPermission(eb.Eu.AUDIO, { showAuthorizationError: !1 }),
    q.Z.hasPermission(eb.Eu.CAMERA, { showAuthorizationError: !1 });
let tb = !1,
    ty = new Set(),
    tO = tb,
    tv = new Set(),
    tI = {},
    tT = null,
    tS = !0,
    tA = !1;
function tN() {
    var e, t;
    return null != (t = null == (e = eh.default.getCurrentUser()) ? void 0 : e.isStaff()) && t
        ? "always"
        : eo.Z === g.R.CANARY
          ? "permittedDevicesOnly"
          : "never";
}
function tC() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.DEFAULT,
        t = eW[e];
    return null == t && ((t = eV()), (eW[e] = t)), t;
}
function tR() {
    var e, t, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.DEFAULT,
        i = tC(r),
        o = eH[null != (e = i.activeInputProfile) ? e : eO._.CUSTOM];
    return eN(eS({}, i, o), {
        modeOptions: eS({}, null != (t = i.modeOptions) ? t : {}, null != (n = o.modeOptions) ? n : {}),
    });
}
function tP(e) {
    var t;
    let n = tR(e.context);
    e.setInputMode(n.mode, {
        vadThreshold: n.modeOptions.threshold,
        vadAutoThreshold: n.modeOptions.autoThreshold,
        vadUseKrisp: n.modeOptions.vadUseKrisp && nq(),
        vadKrispActivationThreshold: null != (t = n.modeOptions.vadKrispActivationThreshold) ? t : 0.5,
        vadLeading: n.modeOptions.vadLeading,
        vadTrailing: n.modeOptions.vadTrailing,
        pttReleaseDelay: Math.round(n.modeOptions.delay),
    });
}
function tw(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ev.Qx;
    return p().clamp(e, 0, t);
}
function tD(e) {
    let t = tR(e.context),
        n = !ez || t.mute || t.deaf;
    e.context === ev.Yn.DEFAULT
        ? (n = n || e1 || e2 || e3 || !q.Z.didHavePermission(eb.Eu.AUDIO))
        : e.context === ev.Yn.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === ev.Yn.DEFAULT && S.Z.updateNativeMute();
}
function tL(e) {
    e !== eX && (null != o && eY.setGoLiveSource(null, eX), (eX = e));
}
function tx() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e4,
        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
        s = o;
    if (
        ((null == s ? void 0 : s.desktopSource) != null &&
            s.desktopSource.id !== (null == a || null == (e = a.desktopSource) ? void 0 : e.id) &&
            (null != s.desktopSource.soundshareId && (0, ei.isWindows)() && T.pn(s.desktopSource.soundshareId),
            eY.setGoLiveSource(null, eX)),
        (null == s ? void 0 : s.cameraSource) != null &&
            (s.cameraSource.videoDeviceGuid !==
                (null == a || null == (t = a.cameraSource) ? void 0 : t.videoDeviceGuid) ||
                s.cameraSource.audioDeviceGuid !==
                    (null == a || null == (n = a.cameraSource) ? void 0 : n.audioDeviceGuid)) &&
            eY.setGoLiveSource(null, eX),
        (e4 || i) && ((e6 = (e4 = i) ? t$(e0, tR().videoDeviceId) : ev.Av), eY.setVideoInputDevice(e6)),
        (o = a),
        null != a)
    ) {
        let e = {
            resolution: a.quality.resolution,
            frameRate: a.quality.frameRate,
        };
        if (null != a.desktopSource) {
            let t = tN(),
                n = tR().videoHook,
                i = tB(),
                o = i ? (tZ() && (0, K.R)("MediaEngineStore_updateVideo").enabled ? eE.zj : eE.ZM) : 0;
            eY.setGoLiveSource(
                {
                    desktopDescription: {
                        id: a.desktopSource.id,
                        soundshareId: a.desktopSource.soundshareId,
                        useVideoHook: n,
                        useGraphicsCapture: i,
                        useGraphicsCaptureApiLevel: o,
                        useLoopback: r.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: tF(),
                        videoHookStaleFrameTimeoutMs: ej,
                        graphicsCaptureStaleFrameTimeoutMs: eU,
                        hdrCaptureMode: t,
                    },
                    quality: e,
                },
                eX,
            );
        }
        null != a.cameraSource &&
            eY.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: a.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: a.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                eX,
            );
    }
}
function tM(e) {
    switch (e) {
        case ev.H3.CPU_OVERUSE:
            return P.Nk.NoiseCancellerCpuOveruse;
        case ev.H3.FAILED:
            return P.Nk.NoiseCancellerFailed;
        case ev.H3.VAD_CPU_OVERUSE:
            return P.Nk.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function tk(e) {
    let t = (0, M.U)({
        location: "getAutomaticGainControlConfig",
        disable: !e,
    });
    return eS({ enabled: e }, t);
}
function tj(e, t) {
    e.setAutomaticGainControl(tk(t));
}
function tU(e) {
    let t = tR(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(ed.Z.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(ed.Z.hasNoiseSuppression(n) || t.noiseSuppression),
        tj(e, ed.Z.hasAutomaticGainControl(n) || t.automaticGainControl),
        e.setNoiseCancellation(t.noiseCancellation),
        e.setVoiceFilterId(td),
        (0, ei.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function tG() {
    eY.on(b.aB.Connection, (e) => {
        var t, n;
        tP(e), tD(e), tU(e);
        let i = tR();
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
            e.setQoS(i.qos),
            e.setExperimentalEncoders(i.experimentalEncoders),
            e.setHardwareH264(null == (t = i.hardwareEncoding) || t),
            e.setSoftwareH264(null == (n = i.openH264) || n);
        let a = e_.Z.getGuildId(),
            {
                muteBeforeProcessing: s,
                pttBeforeProcessing: l,
                skipEncode: c,
            } = (null != a ? B.Z : G.Z).getCurrentConfig(
                eS({ location: "setupMediaEngine" }, null != a && { guildId: a }),
                { autoTrackExposure: !0 },
            );
        s && e.setExperimentFlag(ev.V8.MUTE_BEFORE_PROCESSING, !0),
            l && e.setExperimentFlag(ev.V8.PTT_BEFORE_PROCESSING, !0),
            c && e.setExperimentFlag(ev.V8.SKIP_ENCODE, !0);
        let u = !1,
            d = !0;
        if (
            (e.setExperimentFlag(ev.V8.RESET_DECODER_ON_ERRORS, !0),
            u && e.setExperimentFlag(ev.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0),
            d && e.setExperimentFlag(ev.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0),
            e.context === ev.Yn.STREAM)
        ) {
            let { simulcastEnabled: t, lqStreamBitrate: n } = Z.Z.getConfig();
            e.configureGoLiveSimulcast(t, n);
            let { enabled: r, adjustResolution: i } = (0, F.k)({
                location: "setupMediaEngine",
                autoTrackExposure: !0,
            });
            e.setGoLiveUsePixelCounts(r, i);
        }
        (0, ei.isWindows)()
            ? (null == tT ? void 0 : tT.startsWith("NVIDIA")) || (null == tT ? void 0 : tT.startsWith("AMD"))
                ? e.setExperimentFlag(ev.V8.SIGNAL_AV1, !0)
                : e.setExperimentFlag(ev.V8.SIGNAL_AV1_DECODE, !0)
            : ((0, ei.isMac)() || (0, ei.isLinux)()) && e.setExperimentFlag(ev.V8.SIGNAL_AV1_DECODE, !0),
            (0, ei.isWindows)() && e.setExperimentFlag(ev.V8.SIGNAL_AV1_HARDWARE_DECODE, !0),
            eY.setHasFullbandPerformance((0, R.Z)());
        let f = (0, U.D)("setupMediaEngine").enabled;
        if ((e.setRemoteAudioHistory(1000 * !!f), (0, N.Z)(r))) {
            let t = A.Z.getSettings();
            e.setExperimentFlag(ev.V8.STREAMER_CLIP, t.clipsEnabled);
            let { enableViewerClipping: n } = Y.Z.getCurrentConfig(
                { location: "f627ab_15" },
                { autoTrackExposure: !1 },
            );
            e.setViewerSideClip(n), e.setClipsKeyFrameInterval(ev.ux);
        }
        for (let t of ((i = tR(e.context)), e.setPostponeDecodeLevel(eB), Object.keys(i.localMutes)))
            t !== ec.default.getId() && e.setLocalMute(t, i.localMutes[t]);
        for (let t of Object.keys(i.localVolumes)) t !== ec.default.getId() && e.setLocalVolume(t, i.localVolumes[t]);
        for (let t of Object.keys(i.localPans)) {
            let n = i.localPans[t];
            e.setLocalPan(t, n.left, n.right);
        }
        for (let t of Object.keys(i.disabledLocalVideos)) e.setLocalVideoDisabled(t, i.disabledLocalVideos[t]);
        e.on(b.Sh.Speaking, (t, n) => {
            v.Z.dispatch({
                type: "SPEAKING",
                context: e.context,
                userId: t,
                speakingFlags: n,
            });
        }),
            e.context === ev.Yn.DEFAULT &&
                ((e7 = !1),
                (e9 = !1),
                e.on(b.Sh.SpeakingWhileMuted, () => {
                    (e7 = !0),
                        (e9 = !0),
                        r.emitChange(),
                        te.stop(),
                        te.start(eZ, () => {
                            (e9 = !1), r.emitChange();
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
            e.on(b.Sh.VideoHookInitialize, (e, t, n, r, i, a) => {
                (null == o ? void 0 : o.desktopSource) != null &&
                    et.default.track(
                        eg.rMx.VIDEOHOOK_INITIALIZED,
                        eS(
                            {
                                backend: e,
                                format: t,
                                framebuffer_format: n,
                                sample_count: r,
                                success: i,
                                reinitialization: a,
                            },
                            (0, x.Z)(null == o ? void 0 : o.desktopSource),
                        ),
                    );
            }),
            e.on(b.Sh.NoiseCancellationError, (e) => {
                eC.warn("noisecancellererror event: ".concat(e)),
                    (0, P.kr)({
                        type: P.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tM(e),
                    }),
                    (tm = !0),
                    et.default.track(eg.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
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
                eC.warn("voiceactivitydetectorerror event: ".concat(e)),
                    (0, P.kr)({
                        type: P.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tM(e),
                    }),
                    et.default.track(eg.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    v.Z.dispatch({
                        type: "AUDIO_SET_MODE",
                        context: ev.Yn.DEFAULT,
                        mode: eg.pM4.VOICE_ACTIVITY,
                        options: eN(eS({}, tR(ev.Yn.DEFAULT).modeOptions), { vadUseKrisp: !1 }),
                    }),
                    v.Z.dispatch({
                        type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
                        code: e,
                    });
            }),
            e.on(b.Sh.SdpError, (e, t, n, r) => {
                et.default.track(eg.rMx.SDP_ERROR, {
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
            e.setBitRate(eu.Z.bitrate),
            e.applyVideoQualityMode(em.Z.mode);
    }),
        eY.on(b.aB.DeviceChange, (e, t, n) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_DEVICES",
                inputDevices: e,
                outputDevices: t,
                videoDevices: n,
            });
        }),
        eY.on(b.aB.VolumeChange, (e, t) => {
            v.Z.dispatch({
                type: "AUDIO_VOLUME_CHANGE",
                inputVolume: e,
                outputVolume: t,
            });
        }),
        eY.on(b.aB.DesktopSourceEnd, (e, t) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                settings: null,
                endReason: e,
                errorCode: t,
            });
        }),
        eY.on(b.aB.AudioPermission, (e) => {
            (tE = !0),
                v.Z.dispatch({
                    type: "MEDIA_ENGINE_PERMISSION",
                    kind: "audio",
                    granted: e,
                });
        }),
        eY.on(b.aB.VideoPermission, (e) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_PERMISSION",
                kind: "video",
                granted: e,
            });
        }),
        eY.on(b.aB.WatchdogTimeout, async () => {
            let e;
            try {
                await en.Z.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
            } catch (t) {
                "number" == typeof t.status && (e = t.status);
            }
            eC.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)),
                et.default.track(eg.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        eY.on(b.aB.VideoInputInitialized, (e) => {
            et.default.track(eg.rMx.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired
                    ? null
                    : Math.round(e.timeToFirstFrame * er.Z.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: e_.Z.getMediaSessionId(),
                rtc_connection_id: e_.Z.getRTCConnectionId(),
            });
        }),
        eY.on(b.aB.AudioInputInitialized, (e) => {
            et.default.track(eg.rMx.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * er.Z.Millis.SECOND),
                rtc_connection_id: e_.Z.getRTCConnectionId(),
            });
        }),
        eY.on(b.aB.ClipsRecordingRestartNeeded, () => {
            v.Z.dispatch({ type: "CLIPS_RESTART" });
        }),
        eY.on(b.aB.ClipsInitFailure, (e, t) => {
            v.Z.wait(() => {
                v.Z.dispatch({
                    type: "CLIPS_INIT_FAILURE",
                    errMsg: e,
                    applicationName: t,
                });
            });
        }),
        eY.on(b.aB.ClipsRecordingEnded, (e, t) => {
            var n, r;
            (null == a || null == (n = a.desktopSource) ? void 0 : n.id) === e &&
                (null != t && (null == o || null == (r = o.desktopSource) ? void 0 : r.soundshareId) !== t && T.pn(t),
                (a = null));
        }),
        eY.on(b.aB.NativeScreenSharePickerUpdate, (e, t) => {
            v.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE",
                existing: e,
                content: t,
            });
        }),
        eY.on(b.aB.NativeScreenSharePickerCancel, (e) => {
            v.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL",
                existing: e,
            });
        }),
        eY.on(b.aB.NativeScreenSharePickerError, (e) => {
            v.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_ERROR",
                error: e,
            });
        }),
        eY.on(b.aB.AudioDeviceModuleError, (e, t, n) => {
            et.default.track(eg.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                audio_device_module: e,
                code: t,
                device_name: n,
            });
        }),
        eY.on(b.aB.VideoCodecError, (e) => {
            let t = "encode" === e.mode ? P.u.VIDEO_ENCODE_ERROR : P.u.VIDEO_DECODE_ERROR,
                n = {
                    videoCodec: e.codecStandard,
                    errorMessage: e.message,
                };
            (0, P.kr)(
                t === P.u.VIDEO_ENCODE_ERROR
                    ? eN(eS({ type: t }, n), { videoEncoder: e.implName })
                    : eN(eS({ type: t }, n), { videoDecoder: e.implName }),
            );
        }),
        eY.on(b.aB.ConnectionStats, (e) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_CONNECTION_STATS",
                connectionStats: e.map((e) => {
                    let { stats: t, connection: n } = e;
                    return {
                        stats: t,
                        mediaEngineConnectionId: n.mediaEngineConnectionId,
                        version: eF++,
                        context: n.context,
                    };
                }),
            });
        }),
        eY.on(b.aB.VoiceQueueMetrics, (e) => {
            let t = ry(e);
            null !== t && et.default.track(eg.rMx.VOICE_QUEUE_METRICS, t);
        }),
        eY.setOnVideoContainerResized((e, t, n) => {
            v.Z.wait(() =>
                v.Z.dispatch({
                    type: "VIDEO_SIZE_UPDATE",
                    streamId: e,
                    width: t,
                    height: n,
                }),
            );
        }),
        tY.reset(),
        (0, ep.q)().then((e) => {
            null != e && (tT = e.gpu_brand);
        });
}
function tB() {
    return (0, ei.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eE.c5);
}
function tZ() {
    return (0, ei.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eE.sN);
}
function tF() {
    return (
        (0, ei.isMac)() &&
        eY.supports(ev.AN.SCREEN_CAPTURE_KIT) &&
        m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eE.C7)
    );
}
function tV() {
    return (
        (0, ei.isWindows)() &&
        eY.supports(ev.AN.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        eY.supports(ev.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function tH() {
    return eY.supports(ev.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
let tY = new (class {
    start() {
        this.started || ((this.started = !0), eY.on(b.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout &&
                (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            eY.removeListener(b.aB.Silence, this.handleSilence),
            v.Z.dispatch({
                type: "AUDIO_INPUT_DETECTED",
                inputDetected: null,
            }));
    }
    update() {
        let e = tR();
        !ti && e_.Z.getState() === eg.hes.RTC_CONNECTED && e.mode === eg.pM4.VOICE_ACTIVITY && e.silenceWarning
            ? this.start()
            : this.stop();
    }
    reset() {
        this.stop(), this.update();
    }
    constructor() {
        eT(this, "stateChangeTimeout", void 0),
            eT(this, "noVoiceTimeout", 5000),
            eT(this, "voiceTimeout", 1500),
            eT(this, "started", !1),
            eT(this, "handleSilence", (e) => {
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
                                    e && (to = !0));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout,
                    ));
            });
    }
})();
function tW() {
    var e;
    let t = y.K.get("audio");
    null != t && (y.K.set(eR, { [ev.Yn.DEFAULT]: t }), y.K.remove("audio")),
        (eW = null != (e = y.K.get(eR)) ? e : {}),
        p().each(eW, (e) => {
            if (
                (p().defaultsDeep(e, eV()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, el.Kd)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== eP &&
                    ((e.vadUseKrispSettingVersion = eP), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                !e.vadThrehsoldMigrated)
            ) {
                var t;
                (e.vadThrehsoldMigrated = !0),
                    (null == (t = e.modeOptions) ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = eG);
            }
            (0, ei.isWeb)()
                ? e.ncUseKrispjsSettingVersion !== eD &&
                  ((e.ncUseKrispjsSettingVersion = eD), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                : e.ncUseKrispSettingVersion !== ew &&
                  ((e.ncUseKrispSettingVersion = ew), (e.noiseSuppression = !1), (e.noiseCancellation = !0)),
                e.hardwareEnabledVersion !== eL && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = eL)),
                null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
        }),
        tq();
}
function tK(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ev.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = tC(t);
    return Object.assign(r, e), !__OVERLAY__ && n && y.K.set(eR, eW), r;
}
function tz() {
    y.K.remove(eR), location.reload();
}
function tq() {
    var e, t, n;
    let r = tR();
    eY.setAudioInputDevice(r.inputDeviceId),
        eY.setAudioOutputDevice(r.outputDeviceId),
        tx(),
        eY.setInputVolume(r.inputVolume),
        eY.setOutputVolume(r.outputVolume),
        eY.setH264Enabled(null == (e = r.hardwareEncoding) || e || r.openH264),
        eY.setAv1Enabled(null == (t = r.hardwareEncoding) || t),
        eY.setH265Enabled(null == (n = r.hardwareEncoding) || n),
        eY.setAecDump(r.aecDumpEnabled),
        eY.setSidechainCompression(r.sidechainCompression),
        eY.setSidechainCompressionStrength(r.sidechainCompressionStrength),
        eY.setAudioInputBypassSystemProcessing(r.bypassSystemInputProcessing);
}
function tX() {
    ez ||
        eY.enable().then(() =>
            v.Z.dispatch({
                type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
                enabled: !0,
                unmute: !1,
            }),
        );
}
function tQ(e) {
    return {
        id: ev.w5,
        index: 0,
        name: e,
        disabled: !0,
        hardwareId: void 0,
        containerId: void 0,
    };
}
function tJ(e, t) {
    if (0 === e.length) {
        let e = tQ(t);
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
function t$(e, t) {
    var n;
    let r = null != (n = e[t]) ? n : p()(e).values().first();
    return null != r ? r.id : t;
}
function t0(e) {
    let t = eJ;
    if (((eJ = tJ(e, eI.intl.string(eI.t["/QIjDA"]))), !p().isEqual(eJ, t))) {
        let e = tR(),
            t = t$(eJ, e.inputDeviceId);
        eY.setAudioInputDevice(t);
    }
}
function t1(e) {
    let t = e$;
    if (((e$ = tJ(e, eI.intl.string(eI.t.xlUg0t))), !p().isEqual(e$, t))) {
        let e = tR(),
            t = t$(e$, e.outputDeviceId);
        eY.setAudioOutputDevice(t);
    }
}
function t2(e) {
    tn = e.length > 0;
    let t = e0;
    if (((e0 = tJ(e, eI.intl.string(eI.t.WKWARU))), e4 && !p().isEqual(e0, t))) {
        var n;
        let e = void 0 !== e0[e6],
            r = e6 === ev.w5 && (null == (n = t[ev.w5]) ? void 0 : n.disabled);
        tx(e || r);
    }
}
function t3() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        r =
            null != (e = J.Z.settings.audioContextSettings)
                ? e
                : {
                      user: {},
                      stream: {},
                  };
    for (let e of Object.keys(r)) {
        let i = e === ey.u0.USER ? ev.Yn.DEFAULT : ev.Yn.STREAM,
            o = i === ev.Yn.STREAM ? ev.Yh : ev.Qx,
            a = null != (t = r[e]) ? t : {},
            { localMutes: s, localVolumes: l } = tR(i);
        for (let [e, t] of Object.entries(a))
            null == (0, Q.Ky)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== o ? (l[e] = t.volume) : delete l[e],
                eY.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (n)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == a[e] &&
                    (delete s[e],
                    delete l[e],
                    eY.eachConnection((t) => {
                        t.setLocalVolume(e, o), t.setLocalMute(e, !1);
                    }, i));
        tK(
            {
                localMutes: s,
                localVolumes: l,
            },
            i,
        );
    }
}
function t5(e) {
    if (null == r)
        return (
            eC.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
            {
                soundshareId: null,
                soundshareSession: "",
            }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : en.Z.getAudioPid(e),
            n = "";
        return (
            null != t && (n = en.Z.generateSessionFromPid(t)),
            {
                soundshareId: t,
                soundshareSession: n,
            }
        );
    }
}
function t4(e, t) {
    (0, ei.isWindows)() &&
        T.YT(e, { soundshare_session: t }).then((t) => {
            null == t ||
                L.ZP.shouldContinueWithoutElevatedProcessForPID(e) ||
                v.Z.wait(() => {
                    v.Z.dispatch({
                        type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                        errorMessage: t,
                    });
                });
        });
}
function t6(e) {
    (i = e.sessionId),
        (e1 = !1),
        (e5 = !1),
        (0, ei.isWeb)() ||
            (H.Z.subscribe({ location: "handleConnectionOpen" }, (e) => {
                let t = tR();
                !e.sidechainAvailable && t.sidechainCompression
                    ? (tK({ sidechainCompressionSettingVersion: 0 }), nA(!1))
                    : e.sidechainAvailable &&
                      t.sidechainCompressionSettingVersion < ex &&
                      (tK({ sidechainCompressionSettingVersion: ex }), nA(e.sidechainEnabled));
            }),
            nC());
    let t = tR();
    if (
        (tV() && (tH() ? n4(ev.iA.AUTOMATIC) : t.automaticAudioSubsystem && n6()),
        eY.supports(ev.AN.OFFLOAD_ADM_CONTROLS))
    ) {
        let e = !1;
        (0, ei.isDesktop)()
            ? (e = (0, k.E)({ location: "handleConnectionOpen" }).enabled)
            : ((0, ei.isIOS)() || (0, ei.isAndroid)()) && (e = (0, j.W)({ location: "handleConnectionOpen" }).enabled),
            eY.setOffloadAdmControls(e);
    }
    (0, $.wt)({
        location: "MediaEngineStore",
        autoTrackExposure: !1,
    }) &&
        null !== t.mostRecentlyRequestedVoiceFilter &&
        (0, ei.isDesktop)() &&
        (ee.Z.getLastInitAttemptMayHaveCrashed()
            ? (v.Z.dispatch({
                  type: "AUDIO_SET_SELF_MUTE",
                  mute: !0,
                  context: ev.Yn.DEFAULT,
                  playSoundEffect: !0,
              }),
              tK({ mostRecentlyRequestedVoiceFilter: null }))
            : n(358820).r5()),
        t3();
}
function t8(e) {
    let { mediaEngineState: t } = e;
    (eW = t.settingsByContext),
        (eJ = t.inputDevices),
        (e$ = t.outputDevices),
        (tI = t.appSupported),
        (tl = t.krispModuleLoaded),
        (s = t.krispVersion),
        (eX = t.goLiveContext);
}
function t7() {
    i = null;
}
function t9(e) {
    switch (e.state) {
        case eg.hes.CONNECTING:
            tX();
            break;
        case eg.hes.RTC_CONNECTING:
            (ti = !1), (to = !1);
            break;
        case eg.hes.RTC_CONNECTED:
            tx();
            break;
        case eg.hes.DISCONNECTED:
            nl(), nc();
    }
    tY.update();
}
function ne(e) {
    let { voiceStates: t } = e;
    return t.reduce(
        (e, t) =>
            i === t.sessionId
                ? ((e1 = t.mute || t.suppress),
                  (e5 = t.deaf),
                  eY.eachConnection(tD),
                  tx((null == t.guildId || null == t.channelId || null == th || th === t.channelId) && e4),
                  (th = t.channelId),
                  !0)
                : (__OVERLAY__ || t.userId !== ec.default.getId() || null != e_.Z.getChannelId() || tx(!1, null), e),
        !1,
    );
}
function nt(e) {
    let { mute: t } = e;
    (e2 = t), eY.eachConnection(tD);
}
function nn(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = tR(t);
    if (t === ev.Yn.DEFAULT && (q.Z.requestPermission(eb.Eu.AUDIO), e3)) return !1;
    (r = !i && !r) || (i = !1),
        n || (e8 = !0),
        tK(
            {
                mute: r,
                deaf: i,
            },
            t,
        ),
        eY.eachConnection(tD);
}
function nr(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    tK({ mute: n }, t), r || (e8 = !0), eY.eachConnection(tD);
}
function ni(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== ey.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    t3(!0);
}
function no(e) {
    let { context: t } = e;
    tK({ deaf: !tR(t).deaf }, t), eY.eachConnection(tD);
}
function na(e) {
    let { context: t, userId: n } = e;
    if (n === ec.default.getId()) return;
    let { localMutes: r } = tR(t);
    r[n] ? delete r[n] : (r[n] = !0),
        tK({ localMutes: r }, t),
        eY.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function ns(e) {
    var t, n, r, i, o, a, s;
    let { context: l, userId: c, videoToggleState: u, persist: d, isAutomatic: _ } = e;
    f()(!(d && _), "These are not allowed to both be true.");
    let p = u === eg.ZUi.DISABLED,
        { disabledLocalVideos: h } = tR(l),
        m = null != (t = h[c]) && t,
        g = ty.has(c),
        E = u === eg.ZUi.AUTO_ENABLED || u === eg.ZUi.MANUAL_ENABLED;
    eC.info(
        "disableVideo="
            .concat(p, " currentlyDisabled=")
            .concat(m, " currentlyAutoDisabled=")
            .concat(g, ", isVideoShown=")
            .concat(E),
    ),
        f()(!(g && !m), "If you are auto-disabled, then you are also disabled.");
    let b = p !== m,
        y = l === ev.Yn.DEFAULT,
        O = _ && b && y,
        v = d && b && y;
    eC.info(
        "changed="
            .concat(b, " isDefaultContext=")
            .concat(y, " isUpdateCausedByVideoHealthManager=")
            .concat(O, " isManualToggleByUser=")
            .concat(v),
    );
    let { videoToggleStateMap: I } = tR(l);
    if (
        (I[c] === eg.ZUi.AUTO_PROBING &&
            u === eg.ZUi.AUTO_ENABLED &&
            (0, z.Z)(c, p ? ev.fC.AUTO_DISABLE : ev.fC.AUTO_ENABLE, E),
        (I[c] = u),
        tK({ videoToggleStateMap: I }, l, d),
        u === eg.ZUi.AUTO_PROBING
            ? null == (n = e_.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, !0)
            : null == (r = e_.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, !1),
        tO ||
            (eC.info("isAutoDisableAllowed=".concat(tO, " - disabling VideoHealthManager")),
            null == (o = e_.Z.getRTCConnection()) || null == (i = o.getVideoHealthManager()) || i.disable()),
        O)
    ) {
        if ((!p && !g) || (p && !tO)) return;
        (0, z.Z)(c, p ? ev.fC.AUTO_DISABLE : ev.fC.AUTO_ENABLE, E), p ? ty.add(c) : ty.delete(c);
    } else
        v &&
            (g && !p
                ? (eC.info("disallowing auto-disable for this session because of manual override by user"),
                  (tO = !1),
                  null == (s = e_.Z.getRTCConnection()) || null == (a = s.getVideoHealthManager()) || a.disable(),
                  (0, z.Z)(c, ev.fC.MANUAL_REENABLE, E))
                : (0, z.Z)(c, p ? ev.fC.MANUAL_DISABLE : ev.fC.MANUAL_ENABLE, E));
    y && !p && ty.delete(c),
        p ? (h[c] = !0) : delete h[c],
        tK({ disabledLocalVideos: h }, l, d),
        eY.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(c, null != (t = h[c]) && t);
        }, l);
}
function nl() {
    if (0 === ty.size) return;
    let e = ev.Yn.DEFAULT,
        { disabledLocalVideos: t } = tR(e);
    ty.forEach((n) => {
        f()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            eY.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        ty.clear(),
        tK({ disabledLocalVideos: t }, e, !1);
}
function nc() {
    let e = ev.Yn.DEFAULT,
        { videoToggleStateMap: t } = tR(e);
    for (let [e, n] of Object.entries(t)) n === eg.ZUi.AUTO_PROBING && delete t[e];
    tK({ videoToggleStateMap: t }, e, !1);
}
function nu(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === ec.default.getId()) return;
    let i = t === ev.Yn.STREAM ? ev.Yh : ev.Qx,
        { localVolumes: o } = tR(t);
    r === i ? delete o[n] : (o[n] = r), tK({ localVolumes: o }, t), eY.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function nd(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: o } = tR(t);
    (o[n] = {
        left: r,
        right: i,
    }),
        tK({ localPans: o }, t),
        eY.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function nf(e) {
    let { context: t, mode: n, options: r } = e;
    tK(
        {
            mode: n,
            modeOptions: r,
        },
        t,
    ),
        eY.eachConnection(tP),
        tY.update();
}
function n_(e) {
    let { volume: t } = e;
    tK({ inputVolume: tw(t) }), eY.setInputVolume(t);
}
function np(e) {
    let { volume: t } = e;
    tK({ outputVolume: t }), eY.setOutputVolume(t);
}
function nh(e) {
    let { id: t } = e;
    (t = t$(eJ, t)), (eQ = performance.now()), tK({ inputDeviceId: t }), eY.setAudioInputDevice(t);
}
function nm(e) {
    let { id: t } = e;
    tK({ outputDeviceId: (t = t$(e$, t)) }), eY.setAudioOutputDevice(t);
}
function ng(e) {
    let { id: t } = e;
    tK({ videoDeviceId: (t = t$(e0, t)) }), tx();
}
function nE(e) {
    let { inputProfile: t } = e,
        n = tK({ activeInputProfile: t });
    eY.eachConnection((e) => {
        tP(e),
            tj(e, n.automaticGainControl),
            e.setEchoCancellation(n.echoCancellation),
            e.setExperimentalEncoders(n.experimentalEncoders),
            e.setNoiseCancellation(n.noiseCancellation),
            e.setNoiseSuppression(n.noiseSuppression);
    }),
        eY.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        tY.update(),
        nR();
}
function nb(e) {
    return eq !== e.required && ((eq = e.required), e.required || eY.interact(), !0);
}
function ny(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    t0(t), t1(n), t2(r);
}
function nO(e) {
    let { inputVolume: t, outputVolume: n } = e;
    tK({
        inputVolume: tw(t),
        outputVolume: n,
    });
}
function nv(e) {
    var t;
    let n = tR(),
        r = eY.getAudioSubsystem(),
        i = eY.getAudioLayer(),
        o = t$(eJ, n.inputDeviceId),
        a = null == (t = eJ[o]) ? void 0 : t.name;
    et.default.track(eg.rMx.VOICE_PROCESSING, {
        echo_cancellation: n.echoCancellation,
        noise_cancellation: n.noiseCancellation,
        noise_suppression: n.noiseSuppression,
        automatic_gain_control: n.automaticGainControl,
        location: e,
        bypass_system_input_processing: n.bypassSystemInputProcessing,
        audio_subsystem: r,
        audio_layer: i,
        input_device: a,
    });
}
function nI(e) {
    let t = tK({ echoCancellation: e.enabled });
    eY.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nR(), nv(e.location);
}
function nT(e) {
    nA(e.enabled);
}
function nS(e) {
    let t = tK({ sidechainCompressionStrength: e.strength });
    eY.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function nA(e) {
    let t = tK({ sidechainCompression: e });
    eY.setSidechainCompression(t.sidechainCompression);
}
function nN(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tv.add(n) : tv.delete(n), nC(), nR();
}
function nC() {
    let { voiceFiltersPreProcessMute: e } = W.Z.getCurrentConfig(
            { location: "setMaybePreprocessMute" },
            { autoTrackExposure: !0 },
        ),
        t = e && !tv.has("voice_filter_preview") && !tv.has("mic_test");
    eY.setMaybePreprocessMute(t);
}
function nR() {
    let e = tR(),
        t = tv.size > 0,
        n = e.inputDeviceId,
        r = ed.Z.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        o = ed.Z.hasNoiseSuppression(n) || e.noiseSuppression,
        a = tk(ed.Z.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation,
        l = null !== td,
        c = tv.has("voice_filter") && 1 === tv.size;
    eY.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: o,
        automaticGainControlConfig: a,
        noiseCancellation: s,
        voiceFilters: l,
        loopbackUseAudioMode: c,
    });
}
function nP(e) {
    let t = tK({ noiseSuppression: e.enabled });
    eY.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nR(), nv(e.location);
}
function nw(e) {
    let t = tK({ automaticGainControl: e.enabled });
    eY.eachConnection((e) => tj(e, t.automaticGainControl)), nR(), nv(e.location);
}
function nD(e) {
    let t = tK({ noiseCancellation: e.enabled });
    eY.eachConnection((e) => e.setNoiseCancellation(t.noiseCancellation)), nR(), nv(e.location);
}
function nL(e) {
    X.Z.setKrispModelOverride(e.model), (c = e.model), nR();
}
function nx(e) {
    var t;
    (0, ei.isWeb)() || ((tu = e.enabled), null == (t = eY.setNoiseCancellationEnableStats) || t.call(eY, e.enabled));
}
function nM(e) {
    let t = tK({ experimentalEncoders: e.enabled });
    eY.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
}
function nk(e) {
    var t, n;
    let { enabled: r } = e,
        i = tK({ hardwareEncoding: r });
    eY.eachConnection((e) => {
        var t;
        return e.setHardwareH264(null == (t = i.hardwareEncoding) || t);
    }),
        eY.setH264Enabled(i.hardwareEncoding || i.openH264),
        eY.setAv1Enabled(null == (t = i.hardwareEncoding) || t),
        eY.setH265Enabled(null == (n = i.hardwareEncoding) || n);
}
function nj(e) {
    tK({ silenceWarning: e.enabled }), tY.update();
}
function nU(e) {
    eY.setDebugLogging(e.enabled);
}
function nG(e) {
    let { level: t } = e;
    (l = t), X.Z.setKrispSuppressionLevel(t);
}
function nB(e) {
    tK({ videoHook: e.enabled });
}
function nZ(e) {
    tK({ experimentalSoundshare2: e.enabled });
}
function nF(e) {
    let { enabled: t } = e;
    tK({ useSystemScreensharePicker: t });
}
function nV(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = tK({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r,
        });
    eY.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function nH(e) {
    let { enabled: t } = e;
    tK({ qos: t }), eY.eachConnection((e) => e.setQoS(t));
}
function nY() {
    tz();
}
function nW(e) {
    let { inputDetected: t } = e;
    (tr = t), !ti && tr && ((ti = !0), tY.update());
}
function nK(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === e3) return !1;
    (e3 = n), eY.eachConnection(tD);
}
function nz(e) {
    let { state: t, permissionType: n } = e,
        r = t === eb.PQ.ACCEPTED;
    switch (n) {
        case eb.Eu.AUDIO:
            (tE = !0), eY.eachConnection(tD);
            break;
        case eb.Eu.CAMERA:
            !r && e4 && tx(!1);
            break;
        default:
            return !1;
    }
}
function nq() {
    return tl || !1;
}
async function nX() {
    try {
        var e, t, n, i;
        await es.ZP.ensureModule("discord_krisp");
        let o = es.ZP.requireModule("discord_krisp");
        (tl = !0),
            (s = null == (e = o.getSdkVersion) ? void 0 : e.call(o)),
            (l = null != (i = null == (t = o.getSuppressionLevel) ? void 0 : t.call(o)) ? i : 100),
            null == (n = o.getNcModels) ||
                n.call(o).then((e) => {
                    (tc = e), r.emitChange();
                }),
            r.emitChange();
    } catch (t) {
        eC.warn("Failed to load Krisp module: ".concat(t.message)), ea.Z.captureException(t);
        let e = ev.H3.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? ev.H3.INITIALIZED : n;
        }
        et.default.track(eg.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), tK({ noiseCancellation: !1 });
    } finally {
        ts = !1;
    }
}
function nQ() {
    return ((0, ei.isWindows)() && "arm64" !== es.ZP.architecture) || (0, ei.isLinux)() || (0, ei.isMac)();
}
function nJ() {
    !nQ() || __OVERLAY__ || ts || tl
        ? (0, ei.isWeb)() && eY.supports(ev.AN.NOISE_CANCELLATION)
            ? ((tl = !0), r.emitChange())
            : (0, ei.isWeb)() && tK({ noiseCancellation: !1 })
        : ((ts = !0), nX());
}
function n$(e) {
    let { enabled: t } = e;
    et.default.track(eg.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != td ? td : null,
        enabled: t,
    }),
        tK({ voiceFilterPlaybackEnabled: t });
}
function n0(e) {
    let { newVoiceFilterId: t } = e;
    tK({ mostRecentlyRequestedVoiceFilter: t }), eY.eachConnection((e) => e.setVoiceFilterId(t));
}
function n1() {
    tK({ mostRecentlyRequestedVoiceFilter: null });
}
function n2(e) {
    let { voiceFilterId: t } = e;
    (t_ = td), (tp = tf), (td = t), (tf = null === t ? null : Date.now());
}
function n3(e) {
    let t = e.bypassEnabled;
    tK({ bypassSystemInputProcessing: t }), eY.setAudioInputBypassSystemProcessing(t), nv(e.location);
}
function n5(e) {
    n4(e.subsystem);
}
function n4(e) {
    e === ev.iA.AUTOMATIC
        ? (tK({ automaticAudioSubsystem: !0 }), n6())
        : (tK({ automaticAudioSubsystem: !1 }), eY.setAudioSubsystem(e));
}
function n6() {
    eY.queueAudioSubsystem(ev.iA.EXPERIMENTAL);
}
function n8(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && tx(i, null), null != t || null == n)) {
        ta = !1;
        return;
    }
    if (ta) return;
    ta = !0;
    let o = tR();
    (o.mute || o.deaf) &&
        (tK({
            deaf: !1,
            mute: !1,
        }),
        eY.eachConnection(tD));
}
function n7(e) {
    let { application: t } = e;
    eK.add(t.id);
}
function n9(e) {
    let { application: t } = e;
    eK.delete(t.id);
}
function re(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (ez = !1), eY.eachConnection(tD);
                break;
            case "video":
                tx(!1);
        }
}
function rt(e) {
    (ez = e.enabled),
        e.unmute &&
            tK({
                mute: !1,
                deaf: !1,
            }),
        eY.eachConnection(tD);
}
function rn(e) {
    let { enabled: t } = e;
    q.Z.requestPermission(eb.Eu.CAMERA), tx(t);
}
function rr(e) {
    let { sourceId: t, applicationName: n, quality: i } = e,
        o = A.Z.isDecoupledGameClippingEnabled(),
        s = A.Z.getSettings().decoupledClipsEnabled;
    if (!o || !s || null == I.Z) return;
    let l = null,
        c = null,
        u = en.Z.getPidFromDesktopSource(t);
    ({ soundshareId: l, soundshareSession: c } = t5(u));
    let d = {
        desktopSource: {
            id: t,
            sourcePid: u,
            soundshareId: l,
            soundshareSession: c,
        },
        quality: i,
    };
    null != a &&
        a.desktopSource.id !== d.desktopSource.id &&
        (eY.setClipsSource(null),
        (0, ei.isWindows)() && null != a.desktopSource.soundshareId && T.pn(a.desktopSource.soundshareId)),
        null != l && t4(l, c),
        (a = d);
    let f = tN(),
        _ = tR().videoHook;
    eY.setClipsSource({
        desktopDescription: {
            id: a.desktopSource.id,
            soundshareId: a.desktopSource.soundshareId,
            useVideoHook: _,
            useGraphicsCapture: tB(),
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: tF(),
            videoHookStaleFrameTimeoutMs: ej,
            graphicsCaptureStaleFrameTimeoutMs: eU,
            hdrCaptureMode: f,
        },
        quality: i,
        applicationName: n,
    });
}
function ri(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((a = null), eY.setClipsSource(null));
}
function ro(e) {
    var t, n, r, i;
    let { settings: o } = e;
    if ((null == o ? void 0 : o.desktopSettings) != null) {
        let e = null,
            r = null,
            { sourceId: i, sound: a } = o.desktopSettings,
            s = null != (t = o.context) ? t : ev.Yn.DEFAULT,
            l =
                null != (n = o.qualityOptions)
                    ? n
                    : {
                          resolution: 720,
                          frameRate: 30,
                      },
            c = !1 === a ? null : en.Z.getPidFromDesktopSource(i);
        ei.isPlatformEmbedded &&
            !0 === a &&
            (({ soundshareId: e, soundshareSession: r } = t5(c)), null != e && t4(e, r)),
            tL(s),
            tx(s === ev.Yn.STREAM && e4, {
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
    } else if ((null == o ? void 0 : o.cameraSettings) != null) {
        let e = null != (r = o.context) ? r : ev.Yn.DEFAULT,
            { videoDeviceGuid: t, audioDeviceGuid: n } = o.cameraSettings,
            a = e === ev.Yn.STREAM && e4,
            s =
                null != (i = o.qualityOptions)
                    ? i
                    : {
                          resolution: 720,
                          frameRate: 30,
                      };
        tx(a, {
            cameraSource: {
                videoDeviceGuid: t,
                audioDeviceGuid: n,
            },
            quality: {
                resolution: s.resolution,
                frameRate: s.frameRate,
            },
        });
    } else tx(e4, null);
}
function ra(e) {
    let { section: t } = e;
    return t === eg.oAB.VOICE && tX(), !1;
}
function rs() {
    return eY.eachConnection(tU), !1;
}
function rl(e) {
    let { enabled: t } = e,
        n = tK({ openH264: t });
    eY.setH264Enabled(n.hardwareEncoding || n.openH264),
        eY.eachConnection((e) => {
            var t;
            return e.setSoftwareH264(null == (t = n.openH264) || t);
        });
}
function rc(e) {
    let { enabled: t } = e,
        n = tK({ aecDumpEnabled: t });
    eY.setAecDump(n.aecDumpEnabled);
}
function ru(e) {
    let { state: t } = e,
        n = D.Z.isEnabled();
    if (t === eg.$7l.BACKGROUND && e4 && !n) (tt = !0), tx(!1);
    else {
        if (t !== eg.$7l.ACTIVE || !tt) return !1;
        (tt = !1), tx(!0);
    }
    return !0;
}
function rd(e) {
    eY.eachConnection((t) => t.setBitRate(e.bitrate));
}
function rf() {
    if ((!e4 && null == o) || null != e_.Z.getRTCConnectionId()) return !1;
    tx(!1, null);
}
function r_() {
    return !!tm && ((tm = !1), !0);
}
function rp(e) {
    eY.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function rh(e) {
    let { settings: t } = e;
    eY.applyMediaFilterSettings(t).finally(() => {
        (tg = !1), r.emitChange();
    });
}
function rm() {
    tg = !0;
}
function rg() {
    tg = !1;
}
function rE(e) {
    tS = e.enabled;
}
class rb extends (u = E.ZP.Store) {
    initialize() {
        tG(),
            tW(),
            nJ(),
            nc(),
            (tI = {
                [ev.AN.VIDEO]: eY.supports(ev.AN.VIDEO),
                [ev.AN.DESKTOP_CAPTURE]: eY.supports(ev.AN.DESKTOP_CAPTURE),
                [ev.AN.HYBRID_VIDEO]: eY.supports(ev.AN.HYBRID_VIDEO),
            }),
            this.waitFor(ec.default, ed.Z, ef.Z, e_.Z, L.ZP, q.Z.storage, J.Z, w.Z, A.Z);
    }
    supports(e) {
        return eY.supports(e);
    }
    supportsInApp(e) {
        return tI[e] || eY.supports(e);
    }
    isSupported() {
        return eY.supported();
    }
    isExperimentalEncodersSupported() {
        return eY.supports(ev.AN.EXPERIMENTAL_ENCODERS);
    }
    isNoiseSuppressionSupported() {
        return eY.supports(ev.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return nq();
    }
    isNoiseCancellationError() {
        return tm;
    }
    isAutomaticGainControlSupported() {
        return eY.supports(ev.AN.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !tH() && (eY.supports(ev.AN.LEGACY_AUDIO_SUBSYSTEM) || eY.supports(ev.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return eY.supports(ev.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === eY.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return nq();
    }
    isAecDumpSupported() {
        return eY.supports(ev.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return eY.supports(ev.AN.VIDEO) && eY.supports(ev.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        let t = (null == (e = ef.Z.getChannel(th)) ? void 0 : e.type) === eg.d4z.GUILD_STAGE_VOICE,
            n = r.getHardwareEncoding();
        return !t && n && Z.Z.simulcastEnabled();
    }
    getAecDump() {
        return tR().aecDumpEnabled;
    }
    getMediaEngine() {
        return eY;
    }
    getVideoComponent() {
        return eY.Video;
    }
    getCameraComponent() {
        return eY.Camera;
    }
    getKrispSuppressionLevel() {
        return null != l ? l : 100;
    }
    getKrispEnableStats() {
        return tu;
    }
    isEnabled() {
        return ez;
    }
    isMute() {
        return this.isSelfMute() || e1;
    }
    isDeaf() {
        return this.isSelfDeaf() || e5;
    }
    hasContext(e) {
        return null != eW[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.DEFAULT;
        return e === ev.Yn.DEFAULT && e2;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.DEFAULT;
        return (
            !this.isEnabled() ||
            tR(e).mute ||
            !q.Z.didHavePermission(eb.Eu.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === ev.Yn.DEFAULT && e3)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return e8;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        e8 = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && ed.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return tS;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.DEFAULT;
        return !this.isSupported() || tR(e).deaf;
    }
    isVideoEnabled() {
        return e4 && tn;
    }
    isVideoAvailable() {
        return Object.values(e0).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.STREAM;
        return eX === e && null != o;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.STREAM;
        return eX === t && null != o && (null == (e = o.desktopSource) ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ev.Yn.DEFAULT;
        return e !== ec.default.getId() && (tR(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return eY.supports(ev.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ev.Yn.DEFAULT;
        return null != (t = tR(n).disabledLocalVideos[e]) && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ev.Yn.DEFAULT;
        return null != (t = tR(n).videoToggleStateMap[e]) ? t : eg.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ev.Yn.DEFAULT;
        return t === ev.Yn.DEFAULT && ty.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.DEFAULT;
        return e === ev.Yn.DEFAULT && ty.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tg;
    }
    isNativeAudioPermissionReady() {
        return tE;
    }
    getGoLiveSource() {
        return o;
    }
    getGoLiveContext() {
        return eX;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return eQ;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ev.Yn.DEFAULT,
            n = tR(t).localPans[e];
        return null != n ? n : ek;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ev.Yn.DEFAULT,
            n = t === ev.Yn.STREAM ? ev.Yh : ev.Qx,
            r = tR(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return tR().inputVolume;
    }
    getOutputVolume() {
        return tR().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.DEFAULT;
        return tR(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.DEFAULT;
        return tR(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return td;
    }
    getActiveVoiceFilterAppliedAt() {
        return tf;
    }
    getPreviousVoiceFilter() {
        return t_;
    }
    getPreviousVoiceFilterAppliedAt() {
        return tp;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return tR().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return tR().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            p().each(eW, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === eg.pM4.PUSH_TO_TALK && eK.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return t$(eJ, tR().inputDeviceId);
    }
    getOutputDeviceId() {
        return t$(e$, tR().outputDeviceId);
    }
    getVideoDeviceId() {
        return t$(e0, tR().videoDeviceId);
    }
    getInputDevices() {
        return eJ;
    }
    getOutputDevices() {
        return e$;
    }
    getVideoDevices() {
        return e0;
    }
    getEchoCancellation() {
        let e = tR();
        return ed.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return tR().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return tR().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return tR().h265Enabled;
    }
    getLoopback() {
        return tv.size > 0;
    }
    getLoopbackReasons() {
        return tv;
    }
    getNoiseSuppression() {
        let e = tR();
        return ed.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tR();
        return ed.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return tR().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return tR().noiseCancellation;
    }
    getExperimentalEncoders() {
        return tR().experimentalEncoders;
    }
    getHardwareEncoding() {
        var e;
        return null == (e = tR().hardwareEncoding) || e;
    }
    getEnableSilenceWarning() {
        return tR().silenceWarning;
    }
    getDebugLogging() {
        return eY.getDebugLogging();
    }
    getQoS() {
        return tR().qos;
    }
    getAttenuation() {
        return tR().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return tR().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return tR().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return tV() && tR().automaticAudioSubsystem ? ev.iA.AUTOMATIC : eY.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return eY.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return tR().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eO._.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.DEFAULT;
        return tR(e);
    }
    getState() {
        return {
            settingsByContext: eW,
            inputDevices: eJ,
            outputDevices: e$,
            appSupported: tI,
            krispModuleLoaded: tl,
            krispVersion: s,
            krispSuppressionLevel: l,
            goLiveSource: o,
            goLiveContext: eX,
        };
    }
    getInputDetected() {
        return tr;
    }
    getNoInputDetectedNotice() {
        return to;
    }
    getPacketDelay() {
        return ei.isPlatformEmbedded || this.getMode() !== eg.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        eY.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return eq;
    }
    getVideoHook() {
        return tR().videoHook;
    }
    supportsVideoHook() {
        return eY.supports(ev.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tR().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return (
            eY.supports(ev.AN.EXPERIMENTAL_SOUNDSHARE) &&
            m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eE.T6)
        );
    }
    supportsHookSoundshare() {
        return (
            (0, ei.isWindows)() &&
            eY.supports(ev.AN.SOUNDSHARE) &&
            m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eE.sA)
        );
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = tR().useSystemScreensharePicker,
            n =
                (0, ei.isLinux)() ||
                ((0, ei.isMac)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eE.jR));
        return e && (null != t ? t : n);
    }
    supportsSystemScreensharePicker() {
        return eY.supports(ev.AN.NATIVE_SCREENSHARE_PICKER);
    }
    getOpenH264() {
        return tR().openH264;
    }
    getEverSpeakingWhileMuted() {
        return e7;
    }
    getSpeakingWhileMuted() {
        return e9;
    }
    getKrispModelOverride() {
        return c;
    }
    getKrispModels() {
        return tc;
    }
    getKrispVadActivationThreshold() {
        var e;
        return null != (e = tR().modeOptions.vadKrispActivationThreshold) ? e : eM;
    }
    hasActiveCallKitCall() {
        return tA;
    }
    setHasActiveCallKitCall(e) {
        tA = e;
    }
    supportsScreenSoundshare() {
        return (0, ei.isMac)()
            ? eY.supports(ev.AN.SOUNDSHARE) &&
                  m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eE.yG) &&
                  tF()
            : (0, ei.isWindows)()
              ? eY.supports(ev.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, ei.isLinux)() && eY.supports(ev.AN.SCREEN_SOUNDSHARE);
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.DEFAULT,
            t = this.supports(ev.AN.VIDEO)
                ? [
                      {
                          rid: "100",
                          type: e === ev.Yn.DEFAULT ? ev.Tr.VIDEO : ev.Tr.SCREEN,
                          quality: ev.y7,
                      },
                  ]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === ev.Yn.DEFAULT || this.goLiveSimulcastEnabled()) &&
                t.push({
                    rid: "50",
                    type: e === ev.Yn.DEFAULT ? ev.Tr.VIDEO : ev.Tr.SCREEN,
                    quality: ev.LD,
                }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: !1 };
        return (
            (0, ei.isWeb)() &&
                (e.fetchDave = V.N.getCurrentConfig({
                    location: "MediaEngineStore fetchAsyncResources",
                }).loadWasmModule),
            eY.fetchAsyncResources(e)
        );
    }
    getSupportedSecureFramesProtocolVersion() {
        if ((0, ei.isWeb)()) {
            let { useWasmModule: e } = V.N.getCurrentConfig({
                location: "MediaEngineStore getSupportedSecureFramesProtocolVersion",
            });
            if (!e) return 0;
        }
        let e = eY.getSupportedSecureFramesProtocolVersion(),
            t = V.m.getCurrentConfig({ location: "MediaEngineStore" });
        return 114 === e && (e = 1), t.canSupportDaveProtocol && e >= t.protocolVersionFloor ? e : 0;
    }
    hasClipsSource() {
        return null != a;
    }
    getGpuBrand() {
        return tT;
    }
}
function ry(e) {
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
eT(rb, "displayName", "MediaEngineStore");
let rO = (r = new rb(v.Z, {
    VOICE_CHANNEL_SELECT: n8,
    VOICE_STATE_UPDATES: ne,
    CONNECTION_OPEN: t6,
    CONNECTION_CLOSED: t7,
    RTC_CONNECTION_STATE: t9,
    AUDIO_SET_TEMPORARY_SELF_MUTE: nt,
    AUDIO_TOGGLE_SELF_MUTE: nn,
    AUDIO_SET_SELF_MUTE: nr,
    AUDIO_TOGGLE_SELF_DEAF: no,
    AUDIO_TOGGLE_LOCAL_MUTE: na,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: ns,
    AUDIO_SET_LOCAL_VOLUME: nu,
    AUDIO_SET_LOCAL_PAN: nd,
    AUDIO_SET_MODE: nf,
    AUDIO_SET_INPUT_VOLUME: n_,
    AUDIO_SET_OUTPUT_VOLUME: np,
    AUDIO_SET_INPUT_DEVICE: nh,
    AUDIO_SET_OUTPUT_DEVICE: nm,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: nE,
    AUDIO_SET_ECHO_CANCELLATION: nI,
    AUDIO_SET_SIDECHAIN_COMPRESSION: nT,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nS,
    AUDIO_SET_LOOPBACK: nN,
    AUDIO_SET_NOISE_SUPPRESSION: nP,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nw,
    AUDIO_SET_NOISE_CANCELLATION: nD,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: nL,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: nj,
    AUDIO_SET_DEBUG_LOGGING: nU,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: nG,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: nx,
    MEDIA_ENGINE_SET_VIDEO_HOOK: nB,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: nZ,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: nF,
    AUDIO_SET_ATTENUATION: nV,
    AUDIO_SET_QOS: nH,
    MEDIA_ENGINE_DEVICES: ny,
    AUDIO_VOLUME_CHANGE: nO,
    AUDIO_RESET: nY,
    AUDIO_INPUT_DETECTED: nW,
    AUDIO_SET_SUBSYSTEM: n5,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: n3,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rt,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rn,
    MEDIA_ENGINE_PERMISSION: re,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: ro,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: ng,
    MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nM,
    MEDIA_ENGINE_INTERACTION_REQUIRED: nb,
    USER_SETTINGS_MODAL_INIT: ra,
    USER_SETTINGS_MODAL_SET_SECTION: ra,
    CERTIFIED_DEVICES_SET: rs,
    RPC_APP_CONNECTED: n7,
    RPC_APP_DISCONNECTED: n9,
    OVERLAY_INITIALIZE: t8,
    MEDIA_ENGINE_SET_OPEN_H264: rl,
    MEDIA_ENGINE_SET_HARDWARE_ENCODING: nk,
    APP_STATE_UPDATE: ru,
    SET_CHANNEL_BITRATE: rd,
    SET_VAD_PERMISSION: nK,
    SET_NATIVE_PERMISSION: nz,
    SET_CHANNEL_VIDEO_QUALITY_MODE: rp,
    MEDIA_ENGINE_SET_AEC_DUMP: rc,
    CHANNEL_DELETE: rf,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: r_,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rh,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rm,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rg,
    USER_SETTINGS_PROTO_UPDATE: ni,
    CLIPS_INIT: rr,
    CLIPS_SETTINGS_UPDATE: ri,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rE,
    VOICE_FILTER_REQUEST_SWITCH: n0,
    VOICE_FILTER_LOOPBACK_TOGGLE: n$,
    VOICE_FILTER_APPLIED: n2,
    VOICE_FILTER_DOWNLOAD_FAILED: n1,
    VOICE_FILTER_APPLY_FAILED: n1,
}));
