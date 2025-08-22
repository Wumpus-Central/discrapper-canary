let r, i, a, o, s, l, c;
n.d(t, { Z: () => rI }), n(388685), n(953529), n(457542), n(539854), n(642613), n(49124), n(337869);
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
    K = n(441167),
    z = n(787517),
    q = n(338336),
    X = n(751571),
    Q = n(311473),
    J = n(725380),
    $ = n(581883),
    ee = n(875527),
    et = n(420439),
    en = n(626135),
    er = n(12647),
    ei = n(70956),
    ea = n(358085),
    eo = n(747268),
    es = n(960048),
    el = n(998502),
    ec = n(13140),
    eu = n(314897),
    ed = n(967368),
    ef = n(463395),
    e_ = n(592125),
    ep = n(19780),
    eh = n(704806),
    em = n(594174),
    eg = n(631768),
    eE = n(981631),
    eb = n(70722),
    ey = n(761274),
    eO = n(526761),
    ev = n(345655),
    eI = n(65154),
    eT = n(388032);
function eS(e, t, n) {
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
function eA(e) {
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
                eS(e, t, n[t]);
            });
    }
    return e;
}
function eC(e, t) {
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
            : eC(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eR = new N.Z("MediaEngineStore"),
    eP = "MediaEngineStore",
    ew = 4,
    eD = 1,
    ex = 1,
    eL = 1,
    ej = 1,
    eM = 0.5,
    ek = {
        left: 1,
        right: 1,
    },
    eU = 500,
    eG = 5 * ei.Z.Millis.SECOND,
    eB = -60,
    eZ = 100,
    eV = 2 * ei.Z.Millis.SECOND,
    eF = 0;
function eH() {
    return {
        mode: eE.pM4.VOICE_ACTIVITY,
        modeOptions: {
            threshold: eB,
            autoThreshold: ea.isPlatformEmbedded || __OVERLAY__,
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
        inputVolume: eI.Qx,
        outputVolume: eI.Qx,
        inputDeviceId: eI.w5,
        outputDeviceId: eI.w5,
        videoDeviceId: eI.w5,
        qos: !1,
        qosMigrated: !1,
        videoHook: eW.supports(eI.AN.VIDEO_HOOK),
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        openH264: !0,
        h265Enabled: !0,
        vadThrehsoldMigrated: !1,
        aecDumpEnabled: !1,
        sidechainCompression: !0,
        sidechainCompressionSettingVersion: 1,
        sidechainCompressionStrength: 50,
        automaticAudioSubsystem: !0,
        activeInputProfile: null,
    };
}
let eY = {
        [ev._.CUSTOM]: {},
        [ev._.VOICE_ISOLATION]: {
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
        [ev._.STUDIO]: {
            mode: eE.pM4.VOICE_ACTIVITY,
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
    eW = (0, b.Mt)((0, b.jj)());
eR.enableNativeLogger(!0);
let eK = {},
    ez = new Set([eI.Yn.DEFAULT]),
    eq = eW.supports(eI.AN.AUTO_ENABLE),
    eX = !1,
    eQ = eI.Yn.STREAM,
    eJ = performance.now(),
    e$ = { [eI.w5]: t$("No Input Devices") },
    e0 = { [eI.w5]: t$("No Output Devices") },
    e1 = { [eI.w5]: t$("No Video Devices") },
    e2 = !1,
    e3 = !1,
    e4 = !1,
    e8 = !1,
    e6 = !1,
    e5 = eI.Av,
    e7 = !1,
    e9 = !1,
    te = !1,
    tt = new O.V7(),
    tn = !1,
    tr = !1,
    ti = null,
    ta = !1,
    to = !1,
    ts = !1,
    tl = !1,
    tc = !1,
    tu = [],
    td = !1,
    tf = null,
    t_ = null,
    tp = null,
    th = null,
    tm = null,
    tg = !1,
    tE = !1,
    tb = !1;
X.Z.hasPermission(ey.Eu.AUDIO, { showAuthorizationError: !1 }),
    X.Z.hasPermission(ey.Eu.CAMERA, { showAuthorizationError: !1 });
let ty = !1,
    tO = new Set(),
    tv = ty,
    tI = new Set(),
    tT = {},
    tS = null,
    tA = !0,
    tC = !1;
function tN() {
    var e, t;
    return null != (t = null == (e = em.default.getCurrentUser()) ? void 0 : e.isStaff()) && t
        ? "always"
        : eo.Z === g.R.CANARY
          ? "permittedDevicesOnly"
          : "never";
}
function tR() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT,
        t = eK[e];
    return null == t && ((t = eH()), (eK[e] = t)), t;
}
function tP() {
    var e, t, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT,
        i = tR(r),
        a = eY[null != (e = i.activeInputProfile) ? e : ev._.CUSTOM];
    return eN(eA({}, i, a), {
        modeOptions: eA({}, null != (t = i.modeOptions) ? t : {}, null != (n = a.modeOptions) ? n : {}),
    });
}
function tw(e) {
    var t;
    let n = tP(e.context);
    e.setInputMode(n.mode, {
        vadThreshold: n.modeOptions.threshold,
        vadAutoThreshold: n.modeOptions.autoThreshold,
        vadUseKrisp: n.modeOptions.vadUseKrisp && nQ(),
        vadKrispActivationThreshold: null != (t = n.modeOptions.vadKrispActivationThreshold) ? t : 0.5,
        vadLeading: n.modeOptions.vadLeading,
        vadTrailing: n.modeOptions.vadTrailing,
        pttReleaseDelay: Math.round(n.modeOptions.delay),
    });
}
function tD(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.Qx;
    return p().clamp(e, 0, t);
}
function tx(e) {
    let t = tP(e.context),
        n = !eq || t.mute || t.deaf;
    e.context === eI.Yn.DEFAULT
        ? (n = n || e2 || e3 || e4 || !X.Z.didHavePermission(ey.Eu.AUDIO))
        : e.context === eI.Yn.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eI.Yn.DEFAULT && S.Z.updateNativeMute();
}
function tL(e) {
    e !== eQ && (null != a && eW.setGoLiveSource(null, eQ), (eQ = e));
}
function tj() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e6,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        s = a;
    if (
        ((null == s ? void 0 : s.desktopSource) != null &&
            s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? void 0 : e.id) &&
            (null != s.desktopSource.soundshareId && (0, ea.isWindows)() && T.pn(s.desktopSource.soundshareId),
            eW.setGoLiveSource(null, eQ)),
        (null == s ? void 0 : s.cameraSource) != null &&
            (s.cameraSource.videoDeviceGuid !==
                (null == o || null == (t = o.cameraSource) ? void 0 : t.videoDeviceGuid) ||
                s.cameraSource.audioDeviceGuid !==
                    (null == o || null == (n = o.cameraSource) ? void 0 : n.audioDeviceGuid)) &&
            eW.setGoLiveSource(null, eQ),
        e6 || i)
    ) {
        let e = tP().videoDeviceId;
        e6 && e === eI.w5 && e5 !== eI.Av && (e = e5), (e5 = (e6 = i) ? t1(e1, e) : eI.Av), eW.setVideoInputDevice(e5);
    }
    if (((a = o), null != o)) {
        let e = {
            resolution: o.quality.resolution,
            frameRate: o.quality.frameRate,
        };
        if (null != o.desktopSource) {
            let t = tN(),
                n = tP().videoHook,
                i = tV(),
                a = i ? (tF() && (0, z.R)("MediaEngineStore_updateVideo").enabled ? eb.zj : eb.ZM) : 0;
            eW.setGoLiveSource(
                {
                    desktopDescription: {
                        id: o.desktopSource.id,
                        soundshareId: o.desktopSource.soundshareId,
                        useVideoHook: n,
                        useGraphicsCapture: i,
                        useGraphicsCaptureApiLevel: a,
                        useLoopback: r.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: tH(),
                        videoHookStaleFrameTimeoutMs: eU,
                        graphicsCaptureStaleFrameTimeoutMs: eG,
                        hdrCaptureMode: t,
                    },
                    quality: e,
                },
                eQ,
            );
        }
        null != o.cameraSource &&
            eW.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: o.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                eQ,
            );
    }
}
function tM(e) {
    switch (e) {
        case eI.H3.CPU_OVERUSE:
            return P.Nk.NoiseCancellerCpuOveruse;
        case eI.H3.FAILED:
            return P.Nk.NoiseCancellerFailed;
        case eI.H3.VAD_CPU_OVERUSE:
            return P.Nk.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function tk(e) {
    let t = (0, j.U)({
        location: "getAutomaticGainControlConfig",
        disable: !e,
    });
    return eA({ enabled: e }, t);
}
function tU(e, t) {
    e.setAutomaticGainControl(tk(t));
}
function tG(e, t) {
    e.setNoiseCancellation(t);
    let n = (0, Y.n)({
        location: "getAutomaticGainControlConfig",
        disable: !t,
    }).enabled;
    e.setNoiseCancellationDuringProcessing(n);
}
function tB(e) {
    let t = tP(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(ef.Z.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(ef.Z.hasNoiseSuppression(n) || t.noiseSuppression),
        tU(e, ef.Z.hasAutomaticGainControl(n) || t.automaticGainControl),
        tG(e, t.noiseCancellation),
        e.setVoiceFilterId(tf),
        (0, ea.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function tZ() {
    eW.on(b.aB.Connection, (e) => {
        var t;
        tw(e), tx(e), tB(e);
        let n = tP();
        e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers),
            e.setQoS(n.qos),
            e.setExperimentalEncoders(n.experimentalEncoders),
            e.setHardwareH264(r.getHardwareEncoding()),
            e.setSoftwareH264(null == (t = n.openH264) || t);
        let i = ep.Z.getGuildId(),
            {
                muteBeforeProcessing: o,
                pttBeforeProcessing: s,
                skipEncode: l,
            } = (null != i ? B.Z : G.Z).getCurrentConfig(
                eA({ location: "setupMediaEngine" }, null != i && { guildId: i }),
                { autoTrackExposure: !0 },
            );
        o && e.setExperimentFlag(eI.V8.MUTE_BEFORE_PROCESSING, !0),
            s && e.setExperimentFlag(eI.V8.PTT_BEFORE_PROCESSING, !0),
            l && e.setExperimentFlag(eI.V8.SKIP_ENCODE, !0);
        let c = !1,
            u = !0;
        if (
            (e.setExperimentFlag(eI.V8.RESET_DECODER_ON_ERRORS, !0),
            c && e.setExperimentFlag(eI.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0),
            u && e.setExperimentFlag(eI.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0),
            e.context === eI.Yn.STREAM)
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
            ((0, ea.isWindows)()
                ? (null == tS ? void 0 : tS.startsWith("NVIDIA")) || (null == tS ? void 0 : tS.startsWith("AMD"))
                    ? e.setExperimentFlag(eI.V8.SIGNAL_AV1, !0)
                    : e.setExperimentFlag(eI.V8.SIGNAL_AV1_DECODE, !0)
                : ((0, ea.isMac)() || (0, ea.isLinux)()) && e.setExperimentFlag(eI.V8.SIGNAL_AV1_DECODE, !0),
            (0, ea.isWindows)() && e.setExperimentFlag(eI.V8.SIGNAL_AV1_HARDWARE_DECODE, !0),
            (0, ea.isWeb)())
        ) {
            let { enabled: t } = (0, Z.A)("MediaEngineStore");
            e.setExperimentFlag(eI.V8.BROWSER_HEVC, t);
        }
        eW.setHasFullbandPerformance((0, R.Z)());
        let d = (0, U.D)("setupMediaEngine").enabled;
        if ((e.setRemoteAudioHistory(1000 * !!d), (0, C.Z)(r))) {
            let t = A.Z.getSettings();
            e.setExperimentFlag(eI.V8.STREAMER_CLIP, t.clipsEnabled);
            let { enableViewerClipping: n } = K.Z.getCurrentConfig(
                { location: "f627ab_15" },
                { autoTrackExposure: !1 },
            );
            e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eI.ux);
        }
        for (let t of ((n = tP(e.context)), e.setPostponeDecodeLevel(eZ), Object.keys(n.localMutes)))
            t !== eu.default.getId() && e.setLocalMute(t, n.localMutes[t]);
        for (let t of Object.keys(n.localVolumes)) t !== eu.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
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
            e.context === eI.Yn.DEFAULT &&
                ((e9 = !1),
                (te = !1),
                e.on(b.Sh.SpeakingWhileMuted, () => {
                    (e9 = !0),
                        (te = !0),
                        r.emitChange(),
                        tt.stop(),
                        tt.start(eV, () => {
                            (te = !1), r.emitChange();
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
                    en.default.track(
                        eE.rMx.VIDEOHOOK_INITIALIZED,
                        eA(
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
                eR.warn("noisecancellererror event: ".concat(e)),
                    (0, P.kr)({
                        type: P.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tM(e),
                    }),
                    (tg = !0),
                    en.default.track(eE.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
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
                eR.warn("voiceactivitydetectorerror event: ".concat(e)),
                    (0, P.kr)({
                        type: P.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tM(e),
                    }),
                    en.default.track(eE.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    v.Z.dispatch({
                        type: "AUDIO_SET_MODE",
                        context: eI.Yn.DEFAULT,
                        mode: eE.pM4.VOICE_ACTIVITY,
                        options: eN(eA({}, tP(eI.Yn.DEFAULT).modeOptions), { vadUseKrisp: !1 }),
                    }),
                    v.Z.dispatch({
                        type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
                        code: e,
                    });
            }),
            e.on(b.Sh.SdpError, (e, t, n, r) => {
                en.default.track(eE.rMx.SDP_ERROR, {
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
            e.setBitRate(ed.Z.bitrate),
            e.applyVideoQualityMode(eg.Z.mode);
    }),
        eW.on(b.aB.DeviceChange, (e, t, n) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_DEVICES",
                inputDevices: e,
                outputDevices: t,
                videoDevices: n,
            });
        }),
        eW.on(b.aB.VolumeChange, (e, t) => {
            v.Z.dispatch({
                type: "AUDIO_VOLUME_CHANGE",
                inputVolume: e,
                outputVolume: t,
            });
        }),
        eW.on(b.aB.DesktopSourceEnd, (e, t) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                settings: null,
                endReason: e,
                errorCode: t,
            });
        }),
        eW.on(b.aB.AudioPermission, (e) => {
            (tb = !0),
                v.Z.dispatch({
                    type: "MEDIA_ENGINE_PERMISSION",
                    kind: "audio",
                    granted: e,
                });
        }),
        eW.on(b.aB.VideoPermission, (e) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_PERMISSION",
                kind: "video",
                granted: e,
            });
        }),
        eW.on(b.aB.WatchdogTimeout, async () => {
            let e;
            try {
                await er.Z.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
            } catch (t) {
                "number" == typeof t.status && (e = t.status);
            }
            eR.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)),
                en.default.track(eE.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        eW.on(b.aB.VideoInputInitialized, (e) => {
            en.default.track(eE.rMx.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired
                    ? null
                    : Math.round(e.timeToFirstFrame * ei.Z.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: ep.Z.getMediaSessionId(),
                rtc_connection_id: ep.Z.getRTCConnectionId(),
            });
        }),
        eW.on(b.aB.AudioInputInitialized, (e) => {
            en.default.track(eE.rMx.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * ei.Z.Millis.SECOND),
                rtc_connection_id: ep.Z.getRTCConnectionId(),
            });
        }),
        eW.on(b.aB.ClipsRecordingRestartNeeded, () => {
            v.Z.dispatch({ type: "CLIPS_RESTART" });
        }),
        eW.on(b.aB.ClipsInitFailure, (e, t) => {
            v.Z.wait(() => {
                v.Z.dispatch({
                    type: "CLIPS_INIT_FAILURE",
                    errMsg: e,
                    applicationName: t,
                });
            });
        }),
        eW.on(b.aB.ClipsRecordingEnded, (e, t) => {
            var n, r;
            (null == o || null == (n = o.desktopSource) ? void 0 : n.id) === e &&
                (null != t && (null == a || null == (r = a.desktopSource) ? void 0 : r.soundshareId) !== t && T.pn(t),
                (o = null));
        }),
        eW.on(b.aB.NativeScreenSharePickerUpdate, (e, t) => {
            v.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE",
                existing: e,
                content: t,
            });
        }),
        eW.on(b.aB.NativeScreenSharePickerCancel, (e) => {
            v.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL",
                existing: e,
            });
        }),
        eW.on(b.aB.NativeScreenSharePickerError, (e) => {
            v.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_ERROR",
                error: e,
            });
        }),
        eW.on(b.aB.AudioDeviceModuleError, (e, t, n) => {
            en.default.track(eE.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                audio_device_module: e,
                code: t,
                device_name: n,
            });
        }),
        eW.on(b.aB.VideoCodecError, (e) => {
            let t = "encode" === e.mode ? P.u.VIDEO_ENCODE_ERROR : P.u.VIDEO_DECODE_ERROR,
                n = {
                    videoCodec: e.codecStandard,
                    errorMessage: e.message,
                };
            (0, P.kr)(
                t === P.u.VIDEO_ENCODE_ERROR
                    ? eN(eA({ type: t }, n), { videoEncoder: e.implName })
                    : eN(eA({ type: t }, n), { videoDecoder: e.implName }),
            );
        }),
        eW.on(b.aB.ConnectionStats, (e) => {
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
        eW.on(b.aB.VoiceQueueMetrics, (e) => {
            let t = rv(e);
            null !== t && en.default.track(eE.rMx.VOICE_QUEUE_METRICS, t);
        }),
        eW.setOnVideoContainerResized((e, t, n) => {
            v.Z.wait(() =>
                v.Z.dispatch({
                    type: "VIDEO_SIZE_UPDATE",
                    streamId: e,
                    width: t,
                    height: n,
                }),
            );
        }),
        nP(),
        tK.reset(),
        (0, eh.q)().then((e) => {
            null != e && (tS = e.gpu_brand);
        });
}
function tV() {
    return (0, ea.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eb.c5);
}
function tF() {
    return (0, ea.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eb.sN);
}
function tH() {
    return (
        (0, ea.isMac)() &&
        eW.supports(eI.AN.SCREEN_CAPTURE_KIT) &&
        m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eb.C7)
    );
}
function tY() {
    return (
        (0, ea.isWindows)() &&
        eW.supports(eI.AN.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        eW.supports(eI.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function tW() {
    return eW.supports(eI.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
let tK = new (class {
    start() {
        this.started || ((this.started = !0), eW.on(b.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout &&
                (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            eW.removeListener(b.aB.Silence, this.handleSilence),
            v.Z.dispatch({
                type: "AUDIO_INPUT_DETECTED",
                inputDetected: null,
            }));
    }
    update() {
        let e = tP();
        !ta && ep.Z.getState() === eE.hes.RTC_CONNECTED && e.mode === eE.pM4.VOICE_ACTIVITY && e.silenceWarning
            ? this.start()
            : this.stop();
    }
    reset() {
        this.stop(), this.update();
    }
    constructor() {
        eS(this, "stateChangeTimeout", void 0),
            eS(this, "noVoiceTimeout", 5000),
            eS(this, "voiceTimeout", 1500),
            eS(this, "started", !1),
            eS(this, "handleSilence", (e) => {
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
function tz() {
    var e;
    let t = y.K.get("audio");
    null != t && (y.K.set(eP, { [eI.Yn.DEFAULT]: t }), y.K.remove("audio")),
        (eK = null != (e = y.K.get(eP)) ? e : {}),
        p().each(eK, (e) => {
            if (
                (p().defaultsDeep(e, eH()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, ec.Kd)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== ew &&
                    ((e.vadUseKrispSettingVersion = ew), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                !e.vadThrehsoldMigrated)
            ) {
                var t;
                (e.vadThrehsoldMigrated = !0),
                    (null == (t = e.modeOptions) ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = eB);
            }
            eW.supports(eI.AN.SIDECHAIN_COMPRESSION) &&
                e.sidechainCompressionSettingVersion < ej &&
                ((e.sidechainCompressionSettingVersion = ej), (e.sidechainCompression = !0)),
                (0, ea.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== ex &&
                      ((e.ncUseKrispjsSettingVersion = ex), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== eD &&
                      ((e.ncUseKrispSettingVersion = eD), (e.noiseSuppression = !1), (e.noiseCancellation = !0)),
                e.hardwareEnabledVersion !== eL && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = eL)),
                null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
        }),
        tQ();
}
function tq(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = tR(t);
    return Object.assign(r, e), !__OVERLAY__ && n && y.K.set(eP, eK), r;
}
function tX() {
    y.K.remove(eP), location.reload();
}
function tQ() {
    let e = tP();
    eW.setAudioInputDevice(e.inputDeviceId),
        eW.setAudioOutputDevice(e.outputDeviceId),
        tj(),
        eW.setInputVolume(e.inputVolume),
        eW.setOutputVolume(e.outputVolume),
        eW.setH264Enabled(r.getHardwareEncoding() || e.openH264),
        eW.setAv1Enabled(r.getHardwareEncoding()),
        eW.setH265Enabled(r.getHardwareEncoding()),
        eW.setAecDump(e.aecDumpEnabled),
        eW.setSidechainCompression(e.sidechainCompression),
        eW.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        eW.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing);
}
function tJ() {
    eq ||
        eW.enable().then(() =>
            v.Z.dispatch({
                type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
                enabled: !0,
                unmute: !1,
            }),
        );
}
function t$(e) {
    return {
        id: eI.w5,
        index: 0,
        name: e,
        disabled: !0,
        hardwareId: void 0,
        containerId: void 0,
    };
}
function t0(e, t) {
    if (0 === e.length) {
        let e = t$(t);
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
function t1(e, t) {
    var n;
    let r = null != (n = e[t]) ? n : p()(e).values().first();
    return null != r ? r.id : t;
}
function t2(e) {
    let t = e$;
    if (((e$ = t0(e, eT.intl.string(eT.t["/QIjDA"]))), !p().isEqual(e$, t))) {
        let e = tP(),
            t = t1(e$, e.inputDeviceId);
        eW.setAudioInputDevice(t);
    }
}
function t3(e) {
    let t = e0;
    if (((e0 = t0(e, eT.intl.string(eT.t.xlUg0t))), !p().isEqual(e0, t))) {
        let e = tP(),
            t = t1(e0, e.outputDeviceId);
        eW.setAudioOutputDevice(t);
    }
}
function t4(e) {
    tr = e.length > 0;
    let t = e1;
    if (((e1 = t0(e, eT.intl.string(eT.t.WKWARU))), e6 && !p().isEqual(e1, t))) {
        var n;
        let e = void 0 !== e1[e5],
            r = e5 === eI.w5 && (null == (n = t[eI.w5]) ? void 0 : n.disabled);
        tj(e || r);
    }
}
function t8() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        r =
            null != (e = $.Z.settings.audioContextSettings)
                ? e
                : {
                      user: {},
                      stream: {},
                  };
    for (let e of Object.keys(r)) {
        let i = e === eO.u0.USER ? eI.Yn.DEFAULT : eI.Yn.STREAM,
            a = i === eI.Yn.STREAM ? eI.Yh : eI.Qx,
            o = null != (t = r[e]) ? t : {},
            { localMutes: s, localVolumes: l } = tP(i);
        for (let [e, t] of Object.entries(o))
            null == (0, J.Ky)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== a ? (l[e] = t.volume) : delete l[e],
                eW.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (n)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == o[e] &&
                    (delete s[e],
                    delete l[e],
                    eW.eachConnection((t) => {
                        t.setLocalVolume(e, a), t.setLocalMute(e, !1);
                    }, i));
        tq(
            {
                localMutes: s,
                localVolumes: l,
            },
            i,
        );
    }
}
function t6(e) {
    if (null == r)
        return (
            eR.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
            {
                soundshareId: null,
                soundshareSession: "",
            }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : er.Z.getAudioPid(e),
            n = "";
        return (
            null != t && (n = er.Z.generateSessionFromPid(t)),
            {
                soundshareId: t,
                soundshareSession: n,
            }
        );
    }
}
function t5(e, t) {
    (0, ea.isWindows)() &&
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
function t7(e) {
    (i = e.sessionId), (e2 = !1), (e8 = !1);
    let t = tP();
    if (
        (tY() && (tW() ? n5(eI.iA.AUTOMATIC) : t.automaticAudioSubsystem && n7()),
        eW.supports(eI.AN.OFFLOAD_ADM_CONTROLS))
    ) {
        let e = !1;
        (0, ea.isDesktop)()
            ? (e = (0, M.E)({ location: "handleConnectionOpen" }).enabled)
            : ((0, ea.isIOS)() || (0, ea.isAndroid)()) && (e = (0, k.W)({ location: "handleConnectionOpen" }).enabled),
            eW.setOffloadAdmControls(e);
    }
    (0, ee.wt)({
        location: "MediaEngineStore",
        autoTrackExposure: !1,
    }) &&
        null !== t.mostRecentlyRequestedVoiceFilter &&
        (0, ea.isDesktop)() &&
        (et.Z.getLastInitAttemptMayHaveCrashed()
            ? (v.Z.dispatch({
                  type: "AUDIO_SET_SELF_MUTE",
                  mute: !0,
                  context: eI.Yn.DEFAULT,
                  playSoundEffect: !0,
              }),
              tq({ mostRecentlyRequestedVoiceFilter: null }))
            : n(358820).r5()),
        t8();
}
function t9(e) {
    let { mediaEngineState: t } = e;
    (eK = t.settingsByContext),
        (e$ = t.inputDevices),
        (e0 = t.outputDevices),
        (tT = t.appSupported),
        (tc = t.krispModuleLoaded),
        (s = t.krispVersion),
        (eQ = t.goLiveContext);
}
function ne() {
    i = null;
}
function nt(e) {
    switch (e.state) {
        case eE.hes.CONNECTING:
            tJ();
            break;
        case eE.hes.RTC_CONNECTING:
            (ta = !1), (to = !1);
            break;
        case eE.hes.RTC_CONNECTED:
            tj();
            break;
        case eE.hes.DISCONNECTED:
            nu(), nd();
    }
    tK.update();
}
function nn(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (e2 = t.mute || t.suppress), (e8 = t.deaf), eW.eachConnection(tx);
            let e = null != t.guildId && null != t.channelId && null != tm && tm !== t.channelId,
                n = !ts && null == t.channelId;
            return tj(!e && !n && e6), (tm = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== eu.default.getId() || null != ep.Z.getChannelId() || tj(!1, null), e;
    }, !1);
}
function nr(e) {
    let { mute: t } = e;
    (e3 = t), eW.eachConnection(tx);
}
function ni(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = tP(t);
    if (t === eI.Yn.DEFAULT && (X.Z.requestPermission(ey.Eu.AUDIO), e4)) return !1;
    (r = !i && !r) || (i = !1),
        n || (e7 = !0),
        tq(
            {
                mute: r,
                deaf: i,
            },
            t,
        ),
        eW.eachConnection(tx);
}
function na(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    tq({ mute: n }, t), r || (e7 = !0), eW.eachConnection(tx);
}
function no(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== eO.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    t8(!0);
}
function ns(e) {
    let { context: t } = e;
    tq({ deaf: !tP(t).deaf }, t), eW.eachConnection(tx);
}
function nl(e) {
    let { context: t, userId: n } = e;
    if (n === eu.default.getId()) return;
    let { localMutes: r } = tP(t);
    r[n] ? delete r[n] : (r[n] = !0),
        tq({ localMutes: r }, t),
        eW.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nc(e) {
    var t, n, r, i, a, o, s;
    let { context: l, userId: c, videoToggleState: u, persist: d, isAutomatic: _ } = e;
    f()(!(d && _), "These are not allowed to both be true.");
    let p = u === eE.ZUi.DISABLED,
        { disabledLocalVideos: h } = tP(l),
        m = null != (t = h[c]) && t,
        g = tO.has(c),
        E = u === eE.ZUi.AUTO_ENABLED || u === eE.ZUi.MANUAL_ENABLED;
    eR.info(
        "disableVideo="
            .concat(p, " currentlyDisabled=")
            .concat(m, " currentlyAutoDisabled=")
            .concat(g, ", isVideoShown=")
            .concat(E),
    ),
        f()(!(g && !m), "If you are auto-disabled, then you are also disabled.");
    let b = p !== m,
        y = l === eI.Yn.DEFAULT,
        O = _ && b && y,
        v = d && b && y;
    eR.info(
        "changed="
            .concat(b, " isDefaultContext=")
            .concat(y, " isUpdateCausedByVideoHealthManager=")
            .concat(O, " isManualToggleByUser=")
            .concat(v),
    );
    let { videoToggleStateMap: I } = tP(l);
    if (
        (I[c] === eE.ZUi.AUTO_PROBING &&
            u === eE.ZUi.AUTO_ENABLED &&
            (0, q.Z)(c, p ? eI.fC.AUTO_DISABLE : eI.fC.AUTO_ENABLE, E),
        (I[c] = u),
        tq({ videoToggleStateMap: I }, l, d),
        u === eE.ZUi.AUTO_PROBING
            ? null == (n = ep.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, !0)
            : null == (r = ep.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, !1),
        tv ||
            (eR.info("isAutoDisableAllowed=".concat(tv, " - disabling VideoHealthManager")),
            null == (a = ep.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()),
        O)
    ) {
        if ((!p && !g) || (p && !tv)) return;
        (0, q.Z)(c, p ? eI.fC.AUTO_DISABLE : eI.fC.AUTO_ENABLE, E), p ? tO.add(c) : tO.delete(c);
    } else
        v &&
            (g && !p
                ? (eR.info("disallowing auto-disable for this session because of manual override by user"),
                  (tv = !1),
                  null == (s = ep.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(),
                  (0, q.Z)(c, eI.fC.MANUAL_REENABLE, E))
                : (0, q.Z)(c, p ? eI.fC.MANUAL_DISABLE : eI.fC.MANUAL_ENABLE, E));
    y && !p && tO.delete(c),
        p ? (h[c] = !0) : delete h[c],
        tq({ disabledLocalVideos: h }, l, d),
        eW.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(c, null != (t = h[c]) && t);
        }, l);
}
function nu() {
    if (0 === tO.size) return;
    let e = eI.Yn.DEFAULT,
        { disabledLocalVideos: t } = tP(e);
    tO.forEach((n) => {
        f()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            eW.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tO.clear(),
        tq({ disabledLocalVideos: t }, e, !1);
}
function nd() {
    let e = eI.Yn.DEFAULT,
        { videoToggleStateMap: t } = tP(e);
    for (let [e, n] of Object.entries(t)) n === eE.ZUi.AUTO_PROBING && delete t[e];
    tq({ videoToggleStateMap: t }, e, !1);
}
function nf(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === eu.default.getId()) return;
    let i = t === eI.Yn.STREAM ? eI.Yh : eI.Qx,
        { localVolumes: a } = tP(t);
    r === i ? delete a[n] : (a[n] = r), tq({ localVolumes: a }, t), eW.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function n_(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: a } = tP(t);
    (a[n] = {
        left: r,
        right: i,
    }),
        tq({ localPans: a }, t),
        eW.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function np(e) {
    let { context: t, mode: n, options: r } = e;
    tq(
        {
            mode: n,
            modeOptions: r,
        },
        t,
    ),
        eW.eachConnection(tw),
        tK.update();
}
function nh(e) {
    let { volume: t } = e;
    tq({ inputVolume: tD(t) }), eW.setInputVolume(t);
}
function nm(e) {
    let { volume: t } = e;
    tq({ outputVolume: t }), eW.setOutputVolume(t);
}
function ng(e) {
    let { id: t } = e;
    (t = t1(e$, t)), (eJ = performance.now()), tq({ inputDeviceId: t }), eW.setAudioInputDevice(t);
}
function nE(e) {
    let { id: t } = e;
    tq({ outputDeviceId: (t = t1(e0, t)) }), eW.setAudioOutputDevice(t);
}
function nb(e) {
    let { id: t } = e;
    tq({ videoDeviceId: (t = t1(e1, t)) }), tj();
}
function ny(e) {
    let { inputProfile: t } = e,
        n = tq({ activeInputProfile: t });
    eW.eachConnection((e) => {
        tw(e),
            tU(e, n.automaticGainControl),
            e.setEchoCancellation(n.echoCancellation),
            e.setExperimentalEncoders(n.experimentalEncoders),
            tG(e, n.noiseCancellation),
            e.setNoiseSuppression(n.noiseSuppression);
    }),
        eW.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        tK.update(),
        nw();
}
function nO(e) {
    return eX !== e.required && ((eX = e.required), e.required || eW.interact(), !0);
}
function nv(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    t2(t), t3(n), t4(r);
}
function nI(e) {
    let { inputVolume: t, outputVolume: n } = e;
    tq({
        inputVolume: tD(t),
        outputVolume: n,
    });
}
function nT(e) {
    var t;
    let n = tP(),
        r = eW.getAudioSubsystem(),
        i = eW.getAudioLayer(),
        a = t1(e$, n.inputDeviceId),
        o = null == (t = e$[a]) ? void 0 : t.name;
    en.default.track(eE.rMx.VOICE_PROCESSING, {
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
function nS(e) {
    let t = tq({ echoCancellation: e.enabled });
    eW.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nw(), nT(e.location);
}
function nA(e) {
    nN(e.enabled);
}
function nC(e) {
    let t = tq({ sidechainCompressionStrength: e.strength });
    eW.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function nN(e) {
    let t = tq({ sidechainCompression: e });
    eW.setSidechainCompression(t.sidechainCompression);
}
function nR(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tI.add(n) : tI.delete(n), nP(), nw();
}
function nP() {
    let e = !tI.has("voice_filter_preview") && !tI.has("mic_test");
    eW.setMaybePreprocessMute(e);
}
function nw() {
    let e = tP(),
        t = tI.size > 0,
        n = e.inputDeviceId,
        r = ef.Z.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        a = ef.Z.hasNoiseSuppression(n) || e.noiseSuppression,
        o = tk(ef.Z.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation,
        l = null !== tf,
        c = tI.has("voice_filter") && 1 === tI.size;
    eW.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: a,
        automaticGainControlConfig: o,
        noiseCancellation: s,
        voiceFilters: l,
        loopbackUseAudioMode: c,
    });
}
function nD(e) {
    let t = tq({ noiseSuppression: e.enabled });
    eW.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nw(), nT(e.location);
}
function nx(e) {
    let t = tq({ automaticGainControl: e.enabled });
    eW.eachConnection((e) => tU(e, t.automaticGainControl)), nw(), nT(e.location);
}
function nL(e) {
    let t = tq({ noiseCancellation: e.enabled });
    eW.eachConnection((e) => tG(e, t.noiseCancellation)), nw(), nT(e.location);
}
function nj(e) {
    Q.Z.setKrispModelOverride(e.model), (c = e.model), nw();
}
function nM(e) {
    var t;
    (0, ea.isWeb)() || ((td = e.enabled), null == (t = eW.setNoiseCancellationEnableStats) || t.call(eW, e.enabled));
}
function nk(e) {
    let t = tq({ experimentalEncoders: e.enabled });
    eW.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
}
function nU(e) {
    let { enabled: t } = e,
        n = tq({ hardwareEncoding: t }),
        i = r.getHardwareEncoding();
    eW.eachConnection((e) => e.setHardwareH264(i)),
        eW.setH264Enabled(i || n.openH264),
        eW.setAv1Enabled(i),
        eW.setH265Enabled(i);
}
function nG(e) {
    tq({ silenceWarning: e.enabled }), tK.update();
}
function nB(e) {
    eW.setDebugLogging(e.enabled);
}
function nZ(e) {
    let { level: t } = e;
    (l = t), Q.Z.setKrispSuppressionLevel(t);
}
function nV(e) {
    tq({ videoHook: e.enabled });
}
function nF(e) {
    tq({ experimentalSoundshare2: e.enabled });
}
function nH(e) {
    let { enabled: t } = e;
    tq({ useSystemScreensharePicker: t });
}
function nY(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = tq({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r,
        });
    eW.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function nW(e) {
    let { enabled: t } = e;
    tq({ qos: t }), eW.eachConnection((e) => e.setQoS(t));
}
function nK() {
    tX();
}
function nz(e) {
    let { inputDetected: t } = e;
    (ti = t), !ta && ti && ((ta = !0), tK.update());
}
function nq(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === e4) return !1;
    (e4 = n), eW.eachConnection(tx);
}
function nX(e) {
    let { state: t, permissionType: n } = e,
        r = t === ey.PQ.ACCEPTED;
    switch (n) {
        case ey.Eu.AUDIO:
            (tb = !0), eW.eachConnection(tx);
            break;
        case ey.Eu.CAMERA:
            !r && e6 && tj(!1);
            break;
        default:
            return !1;
    }
}
function nQ() {
    return tc || !1;
}
async function nJ() {
    try {
        var e, t, n, i;
        await el.ZP.ensureModule("discord_krisp");
        let a = el.ZP.requireModule("discord_krisp");
        (tc = !0),
            (s = null == (e = a.getSdkVersion) ? void 0 : e.call(a)),
            (l = null != (i = null == (t = a.getSuppressionLevel) ? void 0 : t.call(a)) ? i : 100),
            null == (n = a.getNcModels) ||
                n.call(a).then((e) => {
                    (tu = e), r.emitChange();
                }),
            r.emitChange();
    } catch (t) {
        eR.warn("Failed to load Krisp module: ".concat(t.message)), es.Z.captureException(t);
        let e = eI.H3.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eI.H3.INITIALIZED : n;
        }
        en.default.track(eE.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), tq({ noiseCancellation: !1 });
    } finally {
        tl = !1;
    }
}
function n$() {
    return ((0, ea.isWindows)() && "arm64" !== el.ZP.architecture) || (0, ea.isLinux)() || (0, ea.isMac)();
}
function n0() {
    !n$() || __OVERLAY__ || tl || tc
        ? (0, ea.isWeb)() && eW.supports(eI.AN.NOISE_CANCELLATION)
            ? ((tc = !0), r.emitChange())
            : (0, ea.isWeb)() && tq({ noiseCancellation: !1 })
        : ((tl = !0), nJ());
}
function n1(e) {
    let { enabled: t } = e;
    en.default.track(eE.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != tf ? tf : null,
        enabled: t,
    }),
        tq({ voiceFilterPlaybackEnabled: t });
}
function n2(e) {
    let { newVoiceFilterId: t } = e;
    tq({ mostRecentlyRequestedVoiceFilter: t }), eW.eachConnection((e) => e.setVoiceFilterId(t));
}
function n3() {
    tq({ mostRecentlyRequestedVoiceFilter: null });
}
function n4(e) {
    let { voiceFilterId: t } = e;
    (tp = tf), (th = t_), (tf = t), (t_ = null === t ? null : Date.now());
}
function n8(e) {
    let t = e.bypassEnabled;
    tq({ bypassSystemInputProcessing: t }), eW.setAudioInputBypassSystemProcessing(t), nT(e.location);
}
function n6(e) {
    n5(e.subsystem);
}
function n5(e) {
    e === eI.iA.AUTOMATIC
        ? (tq({ automaticAudioSubsystem: !0 }), n7())
        : (tq({ automaticAudioSubsystem: !1 }), eW.setAudioSubsystem(e));
}
function n7() {
    eW.queueAudioSubsystem(eI.iA.EXPERIMENTAL);
}
function n9(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && tj(i, null), null != t || null == n)) {
        ts = !1;
        return;
    }
    if (ts) return;
    ts = !0;
    let a = tP();
    (a.mute || a.deaf) &&
        (tq({
            deaf: !1,
            mute: !1,
        }),
        eW.eachConnection(tx));
}
function re(e) {
    let { application: t } = e;
    ez.add(t.id);
}
function rt(e) {
    let { application: t } = e;
    ez.delete(t.id);
}
function rn(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (eq = !1), eW.eachConnection(tx);
                break;
            case "video":
                tj(!1);
        }
}
function rr(e) {
    (eq = e.enabled),
        e.unmute &&
            tq({
                mute: !1,
                deaf: !1,
            }),
        eW.eachConnection(tx);
}
function ri(e) {
    let { enabled: t } = e;
    X.Z.requestPermission(ey.Eu.CAMERA), tj(t);
}
function ra(e) {
    let { sourceId: t, applicationName: n, quality: i } = e,
        a = A.Z.isDecoupledGameClippingEnabled(),
        s = A.Z.getSettings().decoupledClipsEnabled;
    if (!a || !s || null == I.Z) return;
    let l = null,
        c = null,
        u = er.Z.getPidFromDesktopSource(t);
    ({ soundshareId: l, soundshareSession: c } = t6(u));
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
        (eW.setClipsSource(null),
        (0, ea.isWindows)() && null != o.desktopSource.soundshareId && T.pn(o.desktopSource.soundshareId)),
        null != l && t5(l, c),
        (o = d);
    let f = tN(),
        _ = tP().videoHook;
    eW.setClipsSource({
        desktopDescription: {
            id: o.desktopSource.id,
            soundshareId: o.desktopSource.soundshareId,
            useVideoHook: _,
            useGraphicsCapture: tV(),
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: tH(),
            videoHookStaleFrameTimeoutMs: eU,
            graphicsCaptureStaleFrameTimeoutMs: eG,
            hdrCaptureMode: f,
        },
        quality: i,
        applicationName: n,
    });
}
function ro(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((o = null), eW.setClipsSource(null));
}
function rs(e) {
    var t, n, r, i;
    let { settings: a } = e;
    if ((null == a ? void 0 : a.desktopSettings) != null) {
        let e = null,
            r = null,
            { sourceId: i, sound: o } = a.desktopSettings,
            s = null != (t = a.context) ? t : eI.Yn.DEFAULT,
            l =
                null != (n = a.qualityOptions)
                    ? n
                    : {
                          resolution: 720,
                          frameRate: 30,
                      },
            c = !1 === o ? null : er.Z.getPidFromDesktopSource(i);
        ea.isPlatformEmbedded &&
            !0 === o &&
            (({ soundshareId: e, soundshareSession: r } = t6(c)), null != e && t5(e, r)),
            tL(s),
            tj(s === eI.Yn.STREAM && e6, {
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
        let e = null != (r = a.context) ? r : eI.Yn.DEFAULT,
            { videoDeviceGuid: t, audioDeviceGuid: n } = a.cameraSettings,
            o = e === eI.Yn.STREAM && e6,
            s =
                null != (i = a.qualityOptions)
                    ? i
                    : {
                          resolution: 720,
                          frameRate: 30,
                      };
        tj(o, {
            cameraSource: {
                videoDeviceGuid: t,
                audioDeviceGuid: n,
            },
            quality: {
                resolution: s.resolution,
                frameRate: s.frameRate,
            },
        });
    } else tj(e6, null);
}
function rl(e) {
    let { section: t } = e;
    return t === eE.oAB.VOICE && tJ(), !1;
}
function rc() {
    return eW.eachConnection(tB), !1;
}
function ru(e) {
    let { enabled: t } = e,
        n = tq({ openH264: t });
    eW.setH264Enabled(r.getHardwareEncoding() || n.openH264),
        eW.eachConnection((e) => {
            var t;
            return e.setSoftwareH264(null == (t = n.openH264) || t);
        });
}
function rd(e) {
    let { enabled: t } = e,
        n = tq({ aecDumpEnabled: t });
    eW.setAecDump(n.aecDumpEnabled);
}
function rf(e) {
    let { state: t } = e,
        n = D.Z.isEnabled();
    if (t === eE.$7l.BACKGROUND && e6 && !n) (tn = !0), tj(!1);
    else {
        if (t !== eE.$7l.ACTIVE || !tn) return !1;
        (tn = !1), tj(!0);
    }
    return !0;
}
function r_(e) {
    eW.eachConnection((t) => t.setBitRate(e.bitrate));
}
function rp() {
    if ((!e6 && null == a) || null != ep.Z.getRTCConnectionId()) return !1;
    tj(!1, null);
}
function rh() {
    return !!tg && ((tg = !1), !0);
}
function rm(e) {
    eW.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function rg(e) {
    let { settings: t } = e;
    eW.applyMediaFilterSettings(t).finally(() => {
        (tE = !1), r.emitChange();
    });
}
function rE() {
    tE = !0;
}
function rb() {
    tE = !1;
}
function ry(e) {
    tA = e.enabled;
}
class rO extends (u = E.ZP.Store) {
    initialize() {
        tZ(),
            tz(),
            n0(),
            nd(),
            (tT = {
                [eI.AN.VIDEO]: eW.supports(eI.AN.VIDEO),
                [eI.AN.DESKTOP_CAPTURE]: eW.supports(eI.AN.DESKTOP_CAPTURE),
                [eI.AN.HYBRID_VIDEO]: eW.supports(eI.AN.HYBRID_VIDEO),
            }),
            this.waitFor(eu.default, ef.Z, e_.Z, ep.Z, x.ZP, X.Z.storage, $.Z, w.Z, A.Z);
    }
    supports(e) {
        return eW.supports(e);
    }
    supportsInApp(e) {
        return tT[e] || eW.supports(e);
    }
    isSupported() {
        return eW.supported();
    }
    isExperimentalEncodersSupported() {
        return eW.supports(eI.AN.EXPERIMENTAL_ENCODERS);
    }
    isNoiseSuppressionSupported() {
        return eW.supports(eI.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return nQ();
    }
    isNoiseCancellationError() {
        return tg;
    }
    isAutomaticGainControlSupported() {
        return eW.supports(eI.AN.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !tW() && (eW.supports(eI.AN.LEGACY_AUDIO_SUBSYSTEM) || eW.supports(eI.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return eW.supports(eI.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === eW.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return nQ();
    }
    isAecDumpSupported() {
        return eW.supports(eI.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return eW.supports(eI.AN.VIDEO) && eW.supports(eI.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        let t = (null == (e = e_.Z.getChannel(tm)) ? void 0 : e.type) === eE.d4z.GUILD_STAGE_VOICE,
            n = r.getHardwareEncoding();
        return !t && n && V.Z.simulcastEnabled();
    }
    getAecDump() {
        return tP().aecDumpEnabled;
    }
    getMediaEngine() {
        return eW;
    }
    getVideoComponent() {
        return eW.Video;
    }
    getCameraComponent() {
        return eW.Camera;
    }
    getKrispSuppressionLevel() {
        return null != l ? l : 100;
    }
    getKrispEnableStats() {
        return td;
    }
    isEnabled() {
        return eq;
    }
    isMute() {
        return this.isSelfMute() || e2;
    }
    isDeaf() {
        return this.isSelfDeaf() || e8;
    }
    hasContext(e) {
        return null != eK[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT;
        return e === eI.Yn.DEFAULT && e3;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT;
        return (
            !this.isEnabled() ||
            tP(e).mute ||
            !X.Z.didHavePermission(ey.Eu.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eI.Yn.DEFAULT && e4)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return e7;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        e7 = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && ef.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return tA;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT;
        return !this.isSupported() || tP(e).deaf;
    }
    isVideoEnabled() {
        return e6 && tr;
    }
    isVideoAvailable() {
        return Object.values(e1).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.STREAM;
        return eQ === e && null != a;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.STREAM;
        return eQ === t && null != a && (null == (e = a.desktopSource) ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.Yn.DEFAULT;
        return e !== eu.default.getId() && (tP(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return eW.supports(eI.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.Yn.DEFAULT;
        return null != (t = tP(n).disabledLocalVideos[e]) && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.Yn.DEFAULT;
        return null != (t = tP(n).videoToggleStateMap[e]) ? t : eE.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.Yn.DEFAULT;
        return t === eI.Yn.DEFAULT && tO.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT;
        return e === eI.Yn.DEFAULT && tO.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tE;
    }
    isNativeAudioPermissionReady() {
        return tb;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return eQ;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return eJ;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.Yn.DEFAULT,
            n = tP(t).localPans[e];
        return null != n ? n : ek;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.Yn.DEFAULT,
            n = t === eI.Yn.STREAM ? eI.Yh : eI.Qx,
            r = tP(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return tP().inputVolume;
    }
    getOutputVolume() {
        return tP().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT;
        return tP(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT;
        return tP(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return tf;
    }
    getActiveVoiceFilterAppliedAt() {
        return t_;
    }
    getPreviousVoiceFilter() {
        return tp;
    }
    getPreviousVoiceFilterAppliedAt() {
        return th;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return tP().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return tP().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            p().each(eK, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === eE.pM4.PUSH_TO_TALK && ez.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return t1(e$, tP().inputDeviceId);
    }
    getOutputDeviceId() {
        return t1(e0, tP().outputDeviceId);
    }
    getVideoDeviceId() {
        return t1(e1, tP().videoDeviceId);
    }
    getInputDevices() {
        return e$;
    }
    getOutputDevices() {
        return e0;
    }
    getVideoDevices() {
        return e1;
    }
    getEchoCancellation() {
        let e = tP();
        return ef.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return eW.supports(eI.AN.SIDECHAIN_COMPRESSION) && tP().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return tP().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return tP().h265Enabled;
    }
    getLoopback() {
        return tI.size > 0;
    }
    getLoopbackReasons() {
        return tI;
    }
    getNoiseSuppression() {
        let e = tP();
        return ef.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tP();
        return ef.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return tP().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return tP().noiseCancellation;
    }
    getExperimentalEncoders() {
        return tP().experimentalEncoders;
    }
    getHardwareEncoding() {
        var e;
        return !!(0, H.m)("MediaEngineStore") || null == (e = tP().hardwareEncoding) || e;
    }
    getHardwareEncodingSetting() {
        var e;
        return null == (e = tP().hardwareEncoding) || e;
    }
    getEnableSilenceWarning() {
        return tP().silenceWarning;
    }
    getDebugLogging() {
        return eW.getDebugLogging();
    }
    getQoS() {
        return tP().qos;
    }
    getAttenuation() {
        return tP().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return tP().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return tP().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return tY() && tP().automaticAudioSubsystem ? eI.iA.AUTOMATIC : eW.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return eW.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return tP().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === ev._.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT;
        return tP(e);
    }
    getState() {
        return {
            settingsByContext: eK,
            inputDevices: e$,
            outputDevices: e0,
            appSupported: tT,
            krispModuleLoaded: tc,
            krispVersion: s,
            krispSuppressionLevel: l,
            goLiveSource: a,
            goLiveContext: eQ,
        };
    }
    getInputDetected() {
        return ti;
    }
    getNoInputDetectedNotice() {
        return to;
    }
    getPacketDelay() {
        return ea.isPlatformEmbedded || this.getMode() !== eE.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        eW.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return eX;
    }
    getVideoHook() {
        return tP().videoHook;
    }
    supportsVideoHook() {
        return eW.supports(eI.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tP().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return (
            eW.supports(eI.AN.EXPERIMENTAL_SOUNDSHARE) &&
            m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eb.T6)
        );
    }
    supportsHookSoundshare() {
        return (
            (0, ea.isWindows)() &&
            eW.supports(eI.AN.SOUNDSHARE) &&
            m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eb.sA)
        );
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = tP().useSystemScreensharePicker,
            n =
                (0, ea.isLinux)() ||
                ((0, ea.isMac)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eb.jR));
        return e && (null != t ? t : n);
    }
    supportsSystemScreensharePicker() {
        return eW.supports(eI.AN.NATIVE_SCREENSHARE_PICKER);
    }
    getOpenH264() {
        return tP().openH264;
    }
    getEverSpeakingWhileMuted() {
        return e9;
    }
    getSpeakingWhileMuted() {
        return te;
    }
    getKrispModelOverride() {
        return c;
    }
    getKrispModels() {
        return tu;
    }
    getKrispVadActivationThreshold() {
        var e;
        return null != (e = tP().modeOptions.vadKrispActivationThreshold) ? e : eM;
    }
    hasActiveCallKitCall() {
        return tC;
    }
    setHasActiveCallKitCall(e) {
        tC = e;
    }
    supportsScreenSoundshare() {
        return (0, ea.isMac)()
            ? eW.supports(eI.AN.SOUNDSHARE) &&
                  m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eb.yG) &&
                  tH()
            : (0, ea.isWindows)()
              ? eW.supports(eI.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, ea.isLinux)() && eW.supports(eI.AN.SCREEN_SOUNDSHARE);
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT,
            t = this.supports(eI.AN.VIDEO)
                ? [
                      {
                          rid: "100",
                          type: e === eI.Yn.DEFAULT ? eI.Tr.VIDEO : eI.Tr.SCREEN,
                          quality: eI.y7,
                      },
                  ]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === eI.Yn.DEFAULT || this.goLiveSimulcastEnabled()) &&
                t.push({
                    rid: "50",
                    type: e === eI.Yn.DEFAULT ? eI.Tr.VIDEO : eI.Tr.SCREEN,
                    quality: eI.LD,
                }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: !1 };
        return (
            (0, ea.isWeb)() &&
                (e.fetchDave = W.N.getCurrentConfig({
                    location: "MediaEngineStore fetchAsyncResources",
                }).loadWasmModule),
            eW.fetchAsyncResources(e)
        );
    }
    getSupportedSecureFramesProtocolVersion() {
        if ((0, ea.isWeb)()) {
            let { useWasmModule: e } = W.N.getCurrentConfig({
                location: "MediaEngineStore getSupportedSecureFramesProtocolVersion",
            });
            if (!e) return 0;
        }
        let e = eW.getSupportedSecureFramesProtocolVersion(),
            t = W.m.getCurrentConfig({ location: "MediaEngineStore" });
        return 114 === e && (e = 1), t.canSupportDaveProtocol && e >= t.protocolVersionFloor ? e : 0;
    }
    hasClipsSource() {
        return null != o;
    }
    getGpuBrand() {
        return tS;
    }
}
function rv(e) {
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
eS(rO, "displayName", "MediaEngineStore");
let rI = (r = new rO(v.Z, {
    VOICE_CHANNEL_SELECT: n9,
    VOICE_STATE_UPDATES: nn,
    CONNECTION_OPEN: t7,
    CONNECTION_CLOSED: ne,
    RTC_CONNECTION_STATE: nt,
    AUDIO_SET_TEMPORARY_SELF_MUTE: nr,
    AUDIO_TOGGLE_SELF_MUTE: ni,
    AUDIO_SET_SELF_MUTE: na,
    AUDIO_TOGGLE_SELF_DEAF: ns,
    AUDIO_TOGGLE_LOCAL_MUTE: nl,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: nc,
    AUDIO_SET_LOCAL_VOLUME: nf,
    AUDIO_SET_LOCAL_PAN: n_,
    AUDIO_SET_MODE: np,
    AUDIO_SET_INPUT_VOLUME: nh,
    AUDIO_SET_OUTPUT_VOLUME: nm,
    AUDIO_SET_INPUT_DEVICE: ng,
    AUDIO_SET_OUTPUT_DEVICE: nE,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: ny,
    AUDIO_SET_ECHO_CANCELLATION: nS,
    AUDIO_SET_SIDECHAIN_COMPRESSION: nA,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nC,
    AUDIO_SET_LOOPBACK: nR,
    AUDIO_SET_NOISE_SUPPRESSION: nD,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nx,
    AUDIO_SET_NOISE_CANCELLATION: nL,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: nj,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: nG,
    AUDIO_SET_DEBUG_LOGGING: nB,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: nZ,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: nM,
    MEDIA_ENGINE_SET_VIDEO_HOOK: nV,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: nF,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: nH,
    AUDIO_SET_ATTENUATION: nY,
    AUDIO_SET_QOS: nW,
    MEDIA_ENGINE_DEVICES: nv,
    AUDIO_VOLUME_CHANGE: nI,
    AUDIO_RESET: nK,
    AUDIO_INPUT_DETECTED: nz,
    AUDIO_SET_SUBSYSTEM: n6,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: n8,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rr,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: ri,
    MEDIA_ENGINE_PERMISSION: rn,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rs,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nb,
    MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nk,
    MEDIA_ENGINE_INTERACTION_REQUIRED: nO,
    USER_SETTINGS_MODAL_INIT: rl,
    USER_SETTINGS_MODAL_SET_SECTION: rl,
    CERTIFIED_DEVICES_SET: rc,
    RPC_APP_CONNECTED: re,
    RPC_APP_DISCONNECTED: rt,
    OVERLAY_INITIALIZE: t9,
    MEDIA_ENGINE_SET_OPEN_H264: ru,
    MEDIA_ENGINE_SET_HARDWARE_ENCODING: nU,
    APP_STATE_UPDATE: rf,
    SET_CHANNEL_BITRATE: r_,
    SET_VAD_PERMISSION: nq,
    SET_NATIVE_PERMISSION: nX,
    SET_CHANNEL_VIDEO_QUALITY_MODE: rm,
    MEDIA_ENGINE_SET_AEC_DUMP: rd,
    CHANNEL_DELETE: rp,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rh,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rg,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rE,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rb,
    USER_SETTINGS_PROTO_UPDATE: no,
    CLIPS_INIT: ra,
    CLIPS_SETTINGS_UPDATE: ro,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: ry,
    VOICE_FILTER_REQUEST_SWITCH: n2,
    VOICE_FILTER_LOOPBACK_TOGGLE: n1,
    VOICE_FILTER_APPLIED: n4,
    VOICE_FILTER_DOWNLOAD_FAILED: n3,
    VOICE_FILTER_APPLY_FAILED: n3,
}));
