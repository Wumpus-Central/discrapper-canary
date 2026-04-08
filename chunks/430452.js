"use strict";
let r, i, s, a, o, l, u, c, d, _, f;
n.d(t, { Ay: () => r0 }), n(323874), n(14289), n(35956), n(321073), n(790599);
var p = n(284009),
    h = n.n(p),
    m = n(735438),
    E = n.n(m),
    g = n(481613),
    A = n.n(g),
    I = n(299855),
    T = n.n(I),
    S = n(311907),
    y = n(205693),
    v = n(506774),
    N = n(451988),
    C = n(73153),
    R = n(77729),
    O = n(719129),
    b = n(894539),
    D = n(124838),
    L = n(274372),
    w = n(915618),
    M = n(572164),
    x = n(626584),
    P = n(211597),
    k = n(487329),
    U = n(49463),
    G = n(784113),
    F = n(15285),
    V = n(540305),
    B = n(17300),
    H = n(544746),
    j = n(448215),
    Y = n(934341),
    W = n(658046),
    K = n(621963),
    $ = n(227493),
    z = n(264866),
    q = n(927170),
    Z = n(342092),
    X = n(233232),
    Q = n(140175);
n(491642);
var J = n(801644),
    ee = n(223572),
    et = n(147490),
    en = n(993628),
    er = n(886124),
    ei = n(165479),
    es = n(896014),
    ea = n(765396),
    eo = n(75076),
    el = n(674966),
    eu = n(559633),
    ec = n(3527),
    ed = n(90361),
    e_ = n(879172),
    ef = n(617617),
    ep = n(499156),
    eh = n(954571),
    em = n(353835),
    eE = n(927813),
    eg = n(723702),
    eA = n(728458),
    eI = n(837921),
    eT = n(350535),
    eS = n(961350),
    ey = n(131319),
    ev = n(347481),
    eN = n(734057),
    eC = n(383501),
    eR = n(851581),
    eO = n(287809),
    eb = n(117549),
    eD = n(652215),
    eL = n(502075),
    ew = n(765682),
    eM = n(355097),
    ex = n(509381),
    eP = n(731854),
    ek = n(985018);
let eU = new x.A("MediaEngineStore"),
    eG = "MediaEngineStore",
    eF = 4,
    eV = 1,
    eB = 1,
    eH = 1,
    ej = 0.5,
    eY = { left: 1, right: 1 },
    eW = 500,
    eK = 5 * eE.A.Millis.SECOND,
    e$ = -60,
    ez = 100,
    eq = 2 * eE.A.Millis.SECOND,
    eZ = 30 * eE.A.Millis.SECOND,
    eX = +eE.A.Millis.MINUTE,
    eQ = !0,
    eJ = "deep_noise_suppression",
    e0 = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2",
    e1 = "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f",
    e2 = 0,
    e3 = null;
function e6() {
    if (!(0, eg.isIOS)() || null == e3) return !1;
    let e = e3();
    if (null == e || !e.startsWith("ARM64_")) return !1;
    let t = e.substring(6);
    return ("T" === t[0] || "S" === t[0]) && parseInt(t.substring(1), 10) >= 8122;
}
function e4() {
    return {
        mode: eD.TBI.VOICE_ACTIVITY,
        modeOptions: {
            threshold: e$,
            autoThreshold: eg.isPlatformEmbedded || __OVERLAY__,
            vadUseKrisp: !0,
            vadKrispActivationThreshold: ej,
            vadLeading: 5,
            vadTrailing: 25,
            delay: 20,
            shortcut: [],
            updatedAt: void 0,
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
        hardwareEnabledVersion: 0,
        silenceWarning: !0,
        attenuation: 0,
        attenuateWhileSpeakingSelf: !1,
        attenuateWhileSpeakingOthers: !0,
        localMutes: {},
        disabledLocalVideos: {},
        videoToggleStateMap: {},
        localVolumes: {},
        localPans: {},
        inputVolume: eP.Hz,
        outputVolume: eP.Hz,
        inputDeviceId: eP.dx,
        outputDeviceId: eP.dx,
        videoDeviceId: eP.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: e7.supports(eP.O5.VIDEO_HOOK),
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        h265Enabled: !0,
        vadThrehsoldMigrated: !1,
        aecDumpEnabled: !1,
        openH264Enabled: !0,
        sidechainCompression: !0,
        sidechainCompressionSettingVersion: 1,
        sidechainCompressionStrength: 50,
        automaticAudioSubsystem: !0,
        activeInputProfile: null,
    };
}
let e5 = {
        [ex.m.CUSTOM]: {},
        [ex.m.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [ex.m.STUDIO]: {
            mode: eD.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    e7 = (0, y.hB)((0, y.WI)());
eU.enableNativeLogger(!0);
let e8 = {},
    e9 = new Set([eP.x.DEFAULT]),
    te = e7.supports(eP.O5.AUTO_ENABLE),
    tt = !1,
    tn = eP.x.STREAM,
    tr = performance.now(),
    ti = null,
    ts = { [eP.dx]: np("No Input Devices") },
    ta = { [eP.dx]: np("No Output Devices") },
    to = { [eP.dx]: np("No Video Devices") },
    tl = new N.Ep(),
    tu = !1,
    tc = !1,
    td = !1,
    t_ = !1,
    tf = !1,
    tp = eP.qe,
    th = eP.qe,
    tm = !1,
    tE = !1,
    tg = new N.Ep(),
    tA = !1,
    tI = !1,
    tT = !1,
    tS = !1,
    ty = new N.Ep(),
    tv = !1,
    tN = !1,
    tC = !1,
    tR = [],
    tO = !1,
    tb = null,
    tD = !1,
    tL = !1,
    tw = !1,
    tM = {},
    tx = null,
    tP = null,
    tk = !1;
el.A.hasPermission(ew.iL.AUDIO, { showAuthorizationError: !1 }),
    el.A.hasPermission(ew.iL.CAMERA, { showAuthorizationError: !1 });
let tU = !1,
    tG = new Set(),
    tF = tU,
    tV = new Set(),
    tB = {},
    tH = null,
    tj = null,
    tY = !0,
    tW = !1,
    tK = new N.Ep(),
    t$ = !1,
    tz = !1,
    tq = !1,
    tZ = !1;
function tX(e) {
    return (0, K.p)({ location: e }).hdrCaptureMode;
}
async function tQ() {
    if (
        "u" < typeof window ||
        "u" < typeof navigator ||
        !("mediaCapabilities" in navigator) ||
        null == navigator.mediaCapabilities
    )
        return !1;
    try {
        let e = await navigator.mediaCapabilities.decodingInfo({
            type: "file",
            video: {
                contentType: 'video/mp4; codecs="hev1.1.6.L153.B0"',
                width: 1920,
                height: 1080,
                bitrate: 2e6,
                framerate: 30,
            },
        });
        return e.supported && e.powerEfficient;
    } catch {
        return !1;
    }
}
function tJ() {
    return null != tP ? tP : "u" > typeof window ? (tP = tQ().then((e) => ((tx = e), e))) : Promise.resolve(!1);
}
function t0() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.x.DEFAULT,
        t = e8[e];
    return null == t && ((t = e4()), (e8[e] = t)), t;
}
function t1() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.x.DEFAULT,
        t = t0(e),
        n = e5[t.activeInputProfile ?? ex.m.CUSTOM],
        r = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}) };
    if (
        (null == r.vadDuringPreProcess && (r.vadDuringPreProcess = (0, ee.R)({ location: "getSettings" }).enabled),
        (null == r.vadKrispActivationThreshold && !0 === n.automaticGainControl) || !0 === t.automaticGainControl)
    ) {
        let e = (0, B.F)({ location: "getSettings" });
        null != e.vadKrispActivationThreshold && (r.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return { ...t, ...n, modeOptions: r };
}
function t2(e) {
    let t = t1(e.context),
        n = t.mode;
    e.context === eP.x.DEFAULT && (0, Q.N)(!1, !1);
    let { showPTTSpeakingIndicator: r } = ep.A.getConfig({ location: "setInputMode" }),
        i = r && n === eD.TBI.PUSH_TO_TALK;
    e.setInputMode(n, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: !!i || t.modeOptions.autoThreshold,
        vadUseKrisp: (!!i || t.modeOptions.vadUseKrisp) && rE(),
        vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? ej,
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        vadDuringPreProcess: t.modeOptions.vadDuringPreProcess ?? !1,
        pttReleaseDelay: Math.round(t.modeOptions.delay),
    });
}
function t3(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eP.Hz;
    return E().clamp(e, 0, t);
}
function t6(e) {
    let t = t1(e.context),
        n = !te || t.mute || t.deaf;
    e.context === eP.x.DEFAULT
        ? (n = n || tu || tc || td || !el.A.didHavePermission(ew.iL.AUDIO))
        : e.context === eP.x.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eP.x.DEFAULT && b.A.updateNativeMute();
}
function t4(e) {
    e !== tn && (null != s && e7.setGoLiveSource(null, tn), (tn = e));
}
function t5() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tf,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
        n = s;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, eg.isWindows)()
                ? O.c1(n.desktopSource.soundshareId)
                : null != n.desktopSource.sourcePid && t1().videoHook && O.c1(n.desktopSource.sourcePid),
            e7.setGoLiveSource(null, tn)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            e7.setGoLiveSource(null, tn),
        tf || e)
    ) {
        let t = t1().videoDeviceId;
        tf && t === eP.dx && th === eP.dx && tp !== eP.qe ? (t = tp) : (th = t),
            (tp = (tf = e) ? nm(to, t) : eP.qe),
            e7.setVideoInputDevice(tp);
    }
    if (((s = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = tX("MediaEngineStore go live"),
                i = t1().videoHook,
                s = ni(),
                a = s ? (ns() ? eL.zl : eL.eg) : 0,
                o = !1;
            (0, eg.isWindows)() &&
                a >= eL.zl &&
                (o =
                    !0 === tj
                        ? ei.q.getConfig({ location: "updateVideo" }).enabled
                        : er.d.getConfig({ location: "updateVideo" }).enabled),
                e7.setGoLiveSource(
                    {
                        desktopDescription: {
                            id: t.desktopSource.id,
                            soundshareId: t.desktopSource.soundshareId,
                            useVideoHook: i,
                            useGraphicsCapture: s,
                            useGraphicsCaptureApiLevel: a,
                            useCaptureDeviceForEncode: (0, eg.isWindows)(),
                            useLoopback: r.getExperimentalSoundshare(),
                            useQuartzCapturer: !0,
                            allowScreenCaptureKit: na(),
                            videoHookStaleFrameTimeoutMs: eW,
                            graphicsCaptureStaleFrameTimeoutMs: eK,
                            hdrCaptureMode: n,
                            enableGlobalFramePoolLock: (0, W.H)({ location: "updateVideo" }).enabled,
                            useGraphicsCaptureDirtyRegions: o,
                        },
                        quality: e,
                    },
                    tn,
                );
        }
        null != t.cameraSource &&
            e7.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: t.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: t.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                tn,
            );
    }
}
function t7(e) {
    switch (e) {
        case eP.CO.CPU_OVERUSE:
            return k.B6.NoiseCancellerCpuOveruse;
        case eP.CO.FAILED:
            return k.B6.NoiseCancellerFailed;
        case eP.CO.VAD_CPU_OVERUSE:
            return k.B6.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function t8() {
    null === ti &&
        e7
            .getCodecSurvey()
            .then((e) => {
                try {
                    let t = JSON.parse(e);
                    if (null == t || null == t.available_video_decoders) throw Error("decoder survey is not available");
                    ti = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                } catch (e) {
                    eU.error("Failed to parse codec survey", e), (ti = !1);
                }
            })
            .catch((e) => {
                eU.error("Failed to get codec survey", e), (ti = !1);
            })
            .finally(() => {
                C.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
            });
}
function t9(e) {
    let t = (0, B.F)({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function ne(e, t) {
    e.setAutomaticGainControl(t9(t));
}
function nt(e, t) {
    let n = (0, ec.A)(t, r.getSystemMicrophoneMode());
    n !== t && eU.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: i } = (0, B.F)({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(i);
    let { noiseCancellationAfterProcessing: s, vadAfterWebrtc: a } = (0, q.$)({ location: "setNoiseCancellation" });
    e.setNoiseCancellationAfterProcessing(s), e.setVADAfterWebrtc(a);
}
function nn(e) {
    let t = t1(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(ev.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(ev.A.hasNoiseSuppression(n) || t.noiseSuppression),
        ne(e, ev.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        nt(e, t.noiseCancellation),
        (0, eg.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function nr() {
    tl.start(eZ, () => {
        eU.error("Device enumeration timed out"), eh.default.track(eD.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
    }),
        e7.on(y.bg.Connection, (e) => {
            t2(e), t6(e), nn(e);
            let t = t1();
            e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
                e.setQoS(t.qos),
                (0, eg.isWindows)()
                    ? (e.setExperimentFlag(eP.fd.H265_HARDWARE_ONLY, !0),
                      tJ().then((t) => {
                          e.setExperimentFlag(eP.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                      }))
                    : (0, eg.isMac)() && e.setExperimentFlag(eP.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                (0, eg.isLinux)() && t.openH264Enabled && e.setExperimentFlag(eP.fd.USE_LIBOPENH264_DECODER, !0),
                (0, X.J)({ location: "setupMediaEngine" }).enabled &&
                    e.setExperimentFlag(eP.fd.LOW_LATENCY_RATE_CONTROL, !0);
            let n = !1,
                i = !0;
            e.setExperimentFlag(eP.fd.RESET_DECODER_ON_ERRORS, !0),
                n && e.setExperimentFlag(eP.fd.SOFTWARE_FALLBACK_ON_ERRORS, !0),
                i && e.setExperimentFlag(eP.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
            let { swallowVolumeOnlySpeakingEvents: a } = D.A.getConfig({ location: "MediaEngineStore" });
            if ((a && e.setExperimentFlag(eP.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === eP.x.STREAM)) {
                let t = nI(ta);
                e.setSoundshareDiscardRearChannels(t);
            }
            if ((0, eg.isWindows)())
                e.setExperimentFlag(eP.fd.SIGNAL_AV1, !0), e.setExperimentFlag(eP.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            else if ((0, eg.isMac)())
                e.setExperimentFlag(eP.fd.SIGNAL_AV1_DECODE, !0),
                    e.setExperimentFlag(eP.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            else if ((0, eg.isLinux)()) e.setExperimentFlag(eP.fd.SIGNAL_AV1_DECODE, !0);
            else if ((0, eg.isIOS)() && e6()) {
                let { enabled: t } = (0, H.$)("MediaEngineStore");
                t &&
                    (e.setExperimentFlag(eP.fd.SIGNAL_AV1_DECODE, !0),
                    e.setExperimentFlag(eP.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
            }
            if ((0, eg.isWeb)()) {
                let { enabled: t } = Y.A.getConfig({ location: "MediaEngineStore" });
                e.setExperimentFlag(eP.fd.BROWSER_HEVC, t);
            }
            for (let n of ((0, eg.isWindows)() &&
                tH?.startsWith("AMD") &&
                (0, es.F)("MediaEngineStore").enabled &&
                e.setExperimentFlag(eP.fd.WMF_GPU_ENCODE, !0),
            (0, eg.isWindows)() &&
                tH?.startsWith("Intel") &&
                (0, ea.J)("MediaEngineStore").enabled &&
                e.setExperimentFlag(eP.fd.WMF_GPU_ENCODE, !0),
            (0, eg.isWindows)() &&
                tH?.startsWith("Qualcomm") &&
                (0, es.F)("MediaEngineStore").enabled &&
                e.setExperimentFlag(eP.fd.WMF_GPU_ENCODE, !0),
            e7.setHasFullbandPerformance((0, P.A)()),
            e.setRemoteAudioHistory(1e3),
            (0, w.A)(r) && e.setClipsKeyFrameInterval(eP.X1),
            (t = t1(e.context)),
            e.setPostponeDecodeLevel(ez),
            Object.keys(t.localMutes)))
                n !== eS.default.getId() && e.setLocalMute(n, t.localMutes[n]);
            for (let n of Object.keys(t.localVolumes))
                n !== eS.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
            for (let n of Object.keys(t.localPans)) {
                let r = t.localPans[n];
                e.setLocalPan(n, r.left, r.right);
            }
            for (let n of Object.keys(t.disabledLocalVideos)) e.setLocalVideoDisabled(n, t.disabledLocalVideos[n]);
            e.on(y.yq.Speaking, (t, n, r, i) => {
                C.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: i });
            }),
                e.context === eP.x.DEFAULT &&
                    ((tE = !1),
                    e.on(y.yq.SpeakingWhileMuted, () => {
                        let e = !tE;
                        (tE = !0),
                            e && r.emitChange(),
                            tg.start(eq, () => {
                                (tE = !1), r.emitChange();
                            });
                    })),
                e.on(y.yq.DesktopSourceEnd, (t, n) => {
                    C.h.dispatch({
                        type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                        settings: { context: e.context },
                        endReason: t,
                        errorCode: n,
                    });
                }),
                e.on(y.yq.InteractionRequired, (e) => {
                    C.h.dispatch({ type: "MEDIA_ENGINE_INTERACTION_REQUIRED", required: e });
                }),
                e.on(y.yq.VideoHookInitialize, (e, t, n, r, i, a) => {
                    s?.desktopSource != null &&
                        eh.default.track(eD.HAw.VIDEOHOOK_INITIALIZED, {
                            backend: e,
                            format: t,
                            framebuffer_format: n,
                            sample_count: r,
                            success: i,
                            reinitialization: a,
                            ...(0, V.A)(s?.desktopSource),
                        });
                }),
                e.on(y.yq.NoiseCancellationError, (e) => {
                    eU.warn(`noisecancellererror event: ${e}`),
                        (0, k.QW)({ type: k.iy.NOISE_CANCELLER_ERROR, underlyingError: t7(e) }),
                        (tD = !0),
                        eh.default.track(eD.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        C.h.dispatch({ type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: !0 }),
                        C.h.dispatch({ type: "AUDIO_SET_NOISE_CANCELLATION", enabled: !1 }),
                        C.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e });
                }),
                e.on(y.yq.VoiceActivityDetectorError, (e) => {
                    eU.warn(`voiceactivitydetectorerror event: ${e}`),
                        (0, k.QW)({ type: k.iy.NOISE_CANCELLER_ERROR, underlyingError: t7(e) }),
                        eh.default.track(eD.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        C.h.dispatch({
                            type: "AUDIO_SET_MODE",
                            context: eP.x.DEFAULT,
                            mode: eD.TBI.VOICE_ACTIVITY,
                            options: { ...t1(eP.x.DEFAULT).modeOptions, vadUseKrisp: !1 },
                        }),
                        C.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e });
                }),
                e.on(y.yq.SdpError, (e, t, n, r) => {
                    eh.default.track(eD.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: r });
                }),
                e.on(y.yq.VideoState, (t) => {
                    C.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                }),
                e.setBitRate(ey.A.bitrate),
                e.applyVideoQualityMode(eb.A.mode),
                (0, eg.isWindows)() &&
                    e7.supports(eP.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                    e7.setAsyncVideoInputDeviceInit(!0);
        }),
        e7.on(y.bg.DeviceChange, (e, t, n) => {
            tl.stop(),
                C.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
        }),
        e7.on(y.bg.VolumeChange, (e, t) => {
            C.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
        }),
        e7.on(y.bg.DesktopSourceEnd, (e, t) => {
            C.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
        }),
        e7.on(y.bg.AudioPermission, (e) => {
            (tk = !0), C.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
        }),
        e7.on(y.bg.VideoPermission, (e) => {
            C.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
        }),
        e7.on(y.bg.WatchdogTimeout, async () => {
            let e;
            if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                try {
                    await em.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                } catch (t) {
                    "number" == typeof t.status && (e = t.status);
                }
            eU.warn(`Watchdog timeout, report submission status: ${e ?? 200}`);
            let t = en.A.getConfig({ location: "watchdog_timeout" }).enabled && null != R.A.processUtils.setCrashReason;
            try {
                await eh.default.track(
                    eD.HAw.VOICE_WATCHDOG_TIMEOUT,
                    { minidump_submission_error: e, will_restart: t },
                    { flush: !0 },
                );
            } catch (e) {
                eU.error("Failed to flush voice watchdog timeout analytics event", e);
            }
            t &&
                (eU.info("Relaunching app due to voice watchdog timeout"),
                await R.A.processUtils.setCrashReason("voice-watchdog-timeout"),
                v.w.set("discord_watchdog_restart_timestamp", Date.now().toString()),
                R.A.app.relaunch());
        }),
        e7.on(y.bg.VideoInputInitialized, (e) => {
            eh.default.track(eD.HAw.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired
                    ? null
                    : Math.round(e.timeToFirstFrame * eE.A.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: eC.A.getMediaSessionId(),
                rtc_connection_id: eC.A.getRTCConnectionId(),
            });
        }),
        e7.on(y.bg.AudioInputInitialized, (e) => {
            eh.default.track(eD.HAw.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * eE.A.Millis.SECOND),
                rtc_connection_id: eC.A.getRTCConnectionId(),
            });
        }),
        e7.on(y.bg.ClipsRecordingRestartNeeded, () => {
            C.h.dispatch({ type: "CLIPS_RESTART" });
        }),
        e7.on(y.bg.ClipsInitFailure, (e, t) => {
            C.h.wait(() => {
                C.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t });
            });
        }),
        e7.on(y.bg.ClipsRecordingEnded, (e, t) => {
            a?.desktopSource?.id === e && (null != t && s?.desktopSource?.soundshareId !== t && O.c1(t), (a = null));
        }),
        e7.on(y.bg.NativeScreenSharePickerUpdate, (e, t) => {
            C.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
        }),
        e7.on(y.bg.NativeScreenSharePickerCancel, (e) => {
            C.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
        }),
        e7.on(y.bg.NativeScreenSharePickerError, (e) => {
            C.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
        }),
        e7.on(y.bg.AudioDeviceModuleError, (e, t, n) => {
            eh.default.track(eD.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
        }),
        e7.on(y.bg.VideoCodecError, (e) => {
            let t = "encode" === e.mode ? k.iy.VIDEO_ENCODE_ERROR : k.iy.VIDEO_DECODE_ERROR,
                n = { videoCodec: e.codecStandard, errorMessage: e.message };
            (0, k.QW)(
                t === k.iy.VIDEO_ENCODE_ERROR
                    ? { type: t, ...n, videoEncoder: e.implName }
                    : { type: t, ...n, videoDecoder: e.implName },
            );
        }),
        e7.on(y.bg.ConnectionStats, (e) => {
            C.h.dispatch({
                type: "MEDIA_ENGINE_CONNECTION_STATS",
                connectionStats: e.map((e) => {
                    let { stats: t, connection: n } = e;
                    return {
                        stats: t,
                        mediaEngineConnectionId: n.mediaEngineConnectionId,
                        version: e2++,
                        context: n.context,
                    };
                }),
            });
        }),
        e7.on(y.bg.VoiceQueueMetrics, (e) => {
            let t = rJ(e);
            null !== t && eh.default.track(eD.HAw.VOICE_QUEUE_METRICS, t);
        }),
        e7.setOnVideoContainerResized((e, t, n) => {
            C.h.wait(() =>
                C.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
            );
        }),
        n8(),
        o.reset(),
        (0, eR.w)().then((e) => {
            null != e && ((tH = e.gpu_brand), (tj = e.has_intel_hybrid_igpu));
        }),
        e7.on(y.bg.SystemMicrophoneModeChange, (e) => {
            (f = e), e7.eachConnection(nn), r.emitChange();
        });
}
function ni() {
    return (0, eg.isWindows)() && T().satisfies(R.A?.os.release, eL.yg);
}
function ns() {
    return (0, eg.isWindows)() && T().satisfies(R.A?.os.release, eL.fG);
}
function na() {
    return (0, eg.isMac)() && e7.supports(eP.O5.SCREEN_CAPTURE_KIT) && T().satisfies(R.A?.os.release, eL.e);
}
function no() {
    return (
        (0, eg.isWindows)() &&
        e7.supports(eP.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        e7.supports(eP.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nl() {
    return e7.supports(eP.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function nu() {
    let e = v.w.get("audio");
    null != e && (v.w.set(eG, { [eP.x.DEFAULT]: e }), v.w.remove("audio")),
        (e8 = v.w.get(eG) ?? {}),
        E().each(e8, (e) => {
            E().defaultsDeep(e, e4()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, eT.OH)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== eF &&
                    ((e.vadUseKrispSettingVersion = eF), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                e.vadThrehsoldMigrated ||
                    ((e.vadThrehsoldMigrated = !0), e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = e$)),
                e7.supports(eP.O5.SIDECHAIN_COMPRESSION) &&
                    e.sidechainCompressionSettingVersion < eH &&
                    ((e.sidechainCompressionSettingVersion = eH), (e.sidechainCompression = !0)),
                (0, eg.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== eB &&
                      ((e.ncUseKrispjsSettingVersion = eB), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== eV &&
                      ((e.ncUseKrispSettingVersion = eV), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
        }),
        n_();
}
function nc(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eP.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = t0(t);
    return Object.assign(r, e), !__OVERLAY__ && n && v.w.set(eG, e8), r;
}
function nd() {
    v.w.remove(eG), location.reload();
}
function n_() {
    let e = t1();
    ng(e.inputDeviceId),
        e7.setAudioOutputDevice(e.outputDeviceId),
        t5(),
        e7.setInputVolume(e.inputVolume),
        e7.setOutputVolume(e.outputVolume),
        e7.setAecDump(e.aecDumpEnabled),
        e7.setSidechainCompression(e.sidechainCompression),
        e7.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        e7.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        (0, eg.isLinux)() && eI.Ay?.setOpenH264Enabled?.(e.openH264Enabled);
}
function nf() {
    te || e7.enable().then(() => C.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function np(e) {
    return { id: eP.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
}
function nh(e, t) {
    if (0 === e.length) {
        let e = np(t);
        return { [e.id]: e };
    }
    return E()(e)
        .map((e) => ({
            id: e.id,
            index: e.index,
            name: e.name,
            disabled: !1,
            facing: e.facing,
            guid: e.originalId,
            hardwareId: e.hardwareId,
            containerId: e.containerId,
            effects: e.effects,
        }))
        .keyBy("id")
        .value();
}
function nm(e, t) {
    let n = e[t] ?? e[eP.dx] ?? E()(e).values().first();
    return null != n ? n.id : t;
}
function nE(e) {
    if (!(0, eg.isWindows)() || !j.A.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects)
        return;
    let t = ts[e];
    t?.guid != null && (0, ed.A)(t.guid, e, e7);
}
function ng(e) {
    e7.setAudioInputDevice(e), nE(e);
}
function nA(e) {
    let t = ts;
    if (((ts = nh(e, ek.intl.string(ek.t["/QIjDA"]))), !E().isEqual(ts, t))) {
        let e = t1();
        ng(nm(ts, e.inputDeviceId)), e7.eachConnection(nn);
    }
}
function nI(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nT(e) {
    e7.eachConnection((t) => {
        t.context === eP.x.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function nS(e) {
    let t = ta;
    if (((ta = nh(e, ek.intl.string(ek.t.xlUg0v))), !E().isEqual(ta, t))) {
        let e = t1(),
            n = nm(ta, e.outputDeviceId);
        e7.setAudioOutputDevice(n);
        let r = nI(t),
            i = nI(ta);
        r !== i && nT(i);
    }
}
function ny(e) {
    tI = e.length > 0;
    let t = to;
    if (((to = nh(e, ek.intl.string(ek.t.WKWARY))), tf && !E().isEqual(to, t))) {
        let e = void 0 !== to[tp],
            n = tp === eP.dx && t[eP.dx]?.disabled,
            r = "Firefox" === A().name && "" === tp && t[tp]?.name === "Default" && !t[tp]?.disabled;
        t5(e || n || r);
    }
}
function nv() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = ef.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let r = n === eM.W.USER ? eP.x.DEFAULT : eP.x.STREAM,
            i = r === eP.x.STREAM ? eP.Cn : eP.Hz,
            s = t[n] ?? {},
            { localMutes: a, localVolumes: o } = t1(r);
        for (let [e, t] of Object.entries(s))
            null == (0, e_.tM)(r, e) &&
                (t.muted ? (a[e] = !0) : delete a[e],
                t.volume !== i ? (o[e] = t.volume) : delete o[e],
                e7.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, r));
        if (e)
            for (let e of new Set([...Object.keys(a), ...Object.keys(o)]))
                null == s[e] &&
                    (delete a[e],
                    delete o[e],
                    e7.eachConnection((t) => {
                        t.setLocalVolume(e, i), t.setLocalMute(e, !1);
                    }, r));
        nc({ localMutes: a, localVolumes: o }, r);
    }
}
function nN(e) {
    if (null == r)
        return (
            eU.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
            { soundshareId: null, soundshareSession: "" }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : em.A.getAudioPid(e),
            n = "";
        return null != t && (n = em.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n };
    }
}
function nC(e, t) {
    if (t) {
        let { soundshareId: t, soundshareSession: n } = nN(e);
        if (null != t) return nR(t, n), { soundshareId: t, soundshareSession: n };
    }
    return null != e && t1().videoHook && O.GH(e), { soundshareId: null, soundshareSession: null };
}
function nR(e, t) {
    (0, eg.isWindows)() &&
        e > 1 &&
        O.GH(e, { soundshare_session: t }).then((t) => {
            null == t ||
                F.Ay.shouldContinueWithoutElevatedProcessForPID(e) ||
                C.h.wait(() => {
                    C.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: t });
                });
        });
}
function nO(e) {
    (i = e.sessionId), (tu = !1), (t_ = !1);
    let t = t1();
    no() && (nl() ? rC(eP.rB.AUTOMATIC) : t.automaticAudioSubsystem && rR()),
        e7.supports(eP.O5.OFFLOAD_ADM_CONTROLS) && e7.setOffloadAdmControls(!0),
        (0, eg.isIOS)() &&
            (0, $.Y)("handleConnectionOpen").enabled &&
            e7.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
        nE(t.inputDeviceId),
        nv();
}
function nb(e) {
    let { mediaEngineState: t } = e;
    (e8 = t.settingsByContext),
        (ts = t.inputDevices),
        (ta = t.outputDevices),
        (tB = t.appSupported),
        (tC = t.krispModuleLoaded),
        (c = t.krispVersion),
        (tn = t.goLiveContext);
}
function nD() {
    i = null;
}
function nL() {
    return (0, eg.isWeb)() && r.startDavePreload(), !1;
}
function nw(e) {
    switch (e.state) {
        case eD.S7L.CONNECTING:
            nf();
            break;
        case eD.S7L.RTC_CONNECTING:
            (tS = !1), (l = void 0), (u = void 0), (tT = !1), (tW = !1), tK.stop(), ty.stop(), o.reset();
            break;
        case eD.S7L.RTC_CONNECTED:
            t5();
            break;
        case eD.S7L.DISCONNECTED:
            nB(), nH();
    }
}
function nM(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (tu = t.mute || t.suppress), (t_ = t.deaf), e7.eachConnection(t6);
            let e = null != t.guildId && null != t.channelId && null != tb && tb !== t.channelId,
                n = !tv && null == t.channelId;
            return t5(!e && !n && tf), (tb = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== eS.default.getId() || null != eC.A.getChannelId() || t5(!1, null), e;
    }, !1);
}
function nx(e) {
    let { mute: t } = e;
    (tc = t), e7.eachConnection(t6);
}
function nP(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = t1(t);
    if (t === eP.x.DEFAULT && (el.A.requestPermission(ew.iL.AUDIO), td)) return !1;
    (r = !i && !r) || (i = !1), n || (tm = !0), nc({ mute: r, deaf: i }, t), e7.eachConnection(t6);
}
function nk(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    nc({ mute: n }, t), r || (tm = !0), e7.eachConnection(t6);
}
function nU(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== eM.oD.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    nv(!0);
}
function nG(e) {
    let { context: t } = e;
    nc({ deaf: !t1(t).deaf }, t), e7.eachConnection(t6);
}
function nF(e) {
    let { context: t, userId: n } = e;
    if (n === eS.default.getId()) return;
    let { localMutes: r } = t1(t);
    r[n] ? delete r[n] : (r[n] = !0),
        nc({ localMutes: r }, t),
        e7.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nV(e) {
    let { context: t, userId: n, videoToggleState: r, persist: i, isAutomatic: s } = e;
    h()(!(i && s), "These are not allowed to both be true.");
    let a = r === eD.bb8.DISABLED,
        { disabledLocalVideos: o } = t1(t),
        l = o[n] ?? !1,
        u = tG.has(n),
        c = r === eD.bb8.AUTO_ENABLED || r === eD.bb8.MANUAL_ENABLED;
    eU.info(`disableVideo=${a} currentlyDisabled=${l} currentlyAutoDisabled=${u}, isVideoShown=${c}`),
        h()(!(u && !l), "If you are auto-disabled, then you are also disabled.");
    let d = a !== l,
        _ = t === eP.x.DEFAULT,
        f = s && d && _,
        p = i && d && _;
    eU.info(`changed=${d} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${f} isManualToggleByUser=${p}`);
    let { videoToggleStateMap: m } = t1(t);
    if (
        (m[n] === eD.bb8.AUTO_PROBING &&
            r === eD.bb8.AUTO_ENABLED &&
            (0, eo.A)(n, a ? eP.Al.AUTO_DISABLE : eP.Al.AUTO_ENABLE, c),
        (m[n] = r),
        nc({ videoToggleStateMap: m }, t, i),
        r === eD.bb8.AUTO_PROBING
            ? eC.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
            : eC.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
        tF ||
            (eU.info(`isAutoDisableAllowed=${tF} - disabling VideoHealthManager`),
            eC.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
        f)
    ) {
        if ((!a && !u) || (a && !tF)) return;
        (0, eo.A)(n, a ? eP.Al.AUTO_DISABLE : eP.Al.AUTO_ENABLE, c), a ? tG.add(n) : tG.delete(n);
    } else
        p &&
            (u && !a
                ? (eU.info("disallowing auto-disable for this session because of manual override by user"),
                  (tF = !1),
                  eC.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                  (0, eo.A)(n, eP.Al.MANUAL_REENABLE, c))
                : (0, eo.A)(n, a ? eP.Al.MANUAL_DISABLE : eP.Al.MANUAL_ENABLE, c));
    _ && !a && tG.delete(n),
        a ? (o[n] = !0) : delete o[n],
        nc({ disabledLocalVideos: o }, t, i),
        e7.eachConnection((e) => e.setLocalVideoDisabled(n, o[n] ?? !1), t);
}
function nB() {
    if (0 === tG.size) return;
    let e = eP.x.DEFAULT,
        { disabledLocalVideos: t } = t1(e);
    tG.forEach((n) => {
        h()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            e7.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tG.clear(),
        nc({ disabledLocalVideos: t }, e, !1);
}
function nH() {
    let e = eP.x.DEFAULT,
        { videoToggleStateMap: t } = t1(e);
    for (let [e, n] of Object.entries(t)) n === eD.bb8.AUTO_PROBING && delete t[e];
    nc({ videoToggleStateMap: t }, e, !1);
}
function nj(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === eS.default.getId()) return;
    let i = t === eP.x.STREAM ? eP.Cn : eP.Hz,
        { localVolumes: s } = t1(t);
    r === i ? delete s[n] : (s[n] = r), nc({ localVolumes: s }, t), e7.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function nY(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: s } = t1(t);
    (s[n] = { left: r, right: i }), nc({ localPans: s }, t), e7.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function nW(e) {
    let { context: t, mode: n, options: r } = e;
    nc({ mode: n, modeOptions: { ...r, updatedAt: Date.now() } }, t), e7.eachConnection(t2);
}
function nK(e) {
    let { volume: t } = e;
    nc({ inputVolume: t3(t) }), e7.setInputVolume(t);
}
function n$(e) {
    let { volume: t } = e;
    nc({ outputVolume: t }), e7.setOutputVolume(t);
}
function nz(e) {
    let { id: t } = e;
    (t = nm(ts, t)),
        (tr = performance.now()),
        nc({ inputDeviceId: t }),
        ng(t),
        e7.eachConnection(nn),
        (l = void 0),
        (u = void 0),
        tK.stop(),
        (tW = !1);
    let { resetSilenceWarningOnDeviceChange: n } = J.A.getConfig({ location: "MediaEngineStore.handleSetInputDevice" });
    n && ((tT = !1), o.reset());
}
function nq(e) {
    let { id: t } = e;
    nc({ outputDeviceId: (t = nm(ta, t)) }), e7.setAudioOutputDevice(t);
}
function nZ(e) {
    let { id: t } = e;
    nc({ videoDeviceId: (t = nm(to, t)) }), t5();
}
function nX(e) {
    let { inputProfile: t } = e;
    nc({ activeInputProfile: t });
    let n = t1();
    e7.eachConnection((e) => {
        t2(e), nn(e);
    }),
        e7.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        n7();
}
function nQ(e) {
    return tt !== e.required && ((tt = e.required), e.required || e7.interact(), !0);
}
function nJ(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    nA(t), nS(n), ny(r);
}
function n0(e) {
    let { inputVolume: t, outputVolume: n } = e;
    nc({ inputVolume: t3(t), outputVolume: n });
}
function n1(e) {
    let t = t1(),
        n = e7.getAudioSubsystem(),
        i = e7.getAudioLayer(),
        s = nm(ts, t.inputDeviceId),
        a = ts[s]?.name,
        o = (0, ec.A)(t.noiseCancellation, r.getSystemMicrophoneMode());
    eh.default.track(eD.HAw.VOICE_PROCESSING, {
        echo_cancellation: t.echoCancellation,
        noise_cancellation: t.noiseCancellation,
        noise_suppression: t.noiseSuppression,
        automatic_gain_control: t.automaticGainControl,
        location: e,
        bypass_system_input_processing: t.bypassSystemInputProcessing,
        audio_subsystem: n,
        audio_layer: i,
        input_device: a,
        effective_noise_cancellation: o,
    });
}
function n2(e) {
    let t = nc({ echoCancellation: e.enabled });
    e7.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), n7(), n1(e.location);
}
function n3(e) {
    n4(e.enabled);
}
function n6(e) {
    let t = nc({ sidechainCompressionStrength: e.strength });
    e7.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function n4(e) {
    let t = nc({ sidechainCompression: e });
    e7.setSidechainCompression(t.sidechainCompression);
}
function n5(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tV.add(n) : tV.delete(n), n7();
}
function n7() {
    let e = t1(),
        t = tV.size > 0,
        n = e.inputDeviceId,
        r = ev.A.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        s = ev.A.hasNoiseSuppression(n) || e.noiseSuppression,
        a = t9(ev.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        o = e.noiseCancellation;
    e7.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: s,
        automaticGainControlConfig: a,
        noiseCancellation: o,
    });
}
async function n8() {
    if (!e7.supports(eP.O5.VAAPI)) return;
    let e = 4098;
    if (window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let t = await window.DiscordNative.processUtils.getSystemInfo();
    (t.electronGPUInfo?.gpuDevice ?? []).some((t) => t.vendorId === e) &&
        ((tq = !0), (tz = e7.supports(eP.O5.GAMESCOPE_CAPTURE)));
}
function n9(e) {
    let t = nc({ noiseSuppression: e.enabled });
    e7.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), n7(), n1(e.location);
}
function re(e) {
    let t = nc({ automaticGainControl: e.enabled });
    e7.eachConnection((e) => ne(e, t.automaticGainControl)), n7(), n1(e.location);
}
function rt(e) {
    let t = nc({ noiseCancellation: e.enabled });
    e7.eachConnection((e) => nt(e, t.noiseCancellation)), n7(), n1(e.location);
}
function rn(e) {
    eu.A.setKrispModelOverride(e.model), (_ = e.model), n7();
}
function rr(e) {
    (0, eg.isWeb)() || ((tO = e.enabled), e7.setNoiseCancellationEnableStats?.(e.enabled));
}
function ri(e) {
    nc({ silenceWarning: e.enabled });
}
function rs(e) {
    e7.setDebugLogging(e.enabled);
}
function ra(e) {
    let { level: t } = e;
    (d = t), eu.A.setKrispSuppressionLevel(t);
}
function ro(e) {
    nc({ videoHook: e.enabled });
}
function rl(e) {
    nc({ experimentalSoundshare2: e.enabled });
}
function ru(e) {
    let { enabled: t } = e;
    nc({ useSystemScreensharePicker: t });
}
function rc(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = nc({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r });
    e7.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function rd(e) {
    let { enabled: t } = e;
    nc({ qos: t }), e7.eachConnection((e) => e.setQoS(t));
}
function r_() {
    nd();
}
function rf(e) {
    let { osVolume: t, osMuted: n } = e;
    (u = t), (l = n);
}
function rp(e) {
    let { inputDetected: t } = e;
    if (null == t) return !1;
    if (((tS = !0 !== tT && !t), t)) (tT = !0), (tW = !1), tK.stop(), ty.stop();
    else if (t1().mode === eD.TBI.VOICE_ACTIVITY && tT) {
        let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = J.A.getConfig({
            location: "MediaEngineStore.handleInputDetected",
        });
        e &&
            tK.start(eX, () => {
                eh.default.track(eD.HAw.HARDWARE_MUTE_GUESSED, {
                    input_device_name: ts[nm(ts, t1().inputDeviceId)]?.name,
                    rtc_connection_id: eC.A.getRTCConnectionId(),
                }),
                    (tW = !0),
                    r.emitChange();
            }),
            null != t &&
                ty.start(t * eE.A.Millis.MINUTE, () => {
                    (tT = !1), o.reset();
                });
    }
}
function rh(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === td) return !1;
    (td = n), e7.eachConnection(t6);
}
function rm(e) {
    let { state: t, permissionType: n } = e,
        r = t === ew.hL.ACCEPTED;
    switch (n) {
        case ew.iL.AUDIO:
            (tk = !0), e7.eachConnection(t6);
            break;
        case ew.iL.CAMERA:
            !r && tf && t5(!1);
            break;
        default:
            return !1;
    }
}
function rE() {
    return tC || !1;
}
async function rg() {
    try {
        await eI.Ay.ensureModule("discord_krisp");
        let e = eI.Ay.requireModule("discord_krisp");
        (tC = !0),
            (c = e.getSdkVersion?.()),
            (d = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (tR = e), r.emitChange();
            }),
            r.emitChange(),
            await eI.Ay.ensureModule("discord_voice");
        let t = eI.Ay.requireModule("discord_voice");
        t.setupKrispPath?.();
    } catch (t) {
        eU.warn(`Failed to load Krisp module: ${t.message}`), eA.A.captureException(t);
        let e = eP.CO.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eP.CO.INITIALIZED : n;
        }
        eh.default.track(eD.HAw.VOICE_PROCESSING, { noise_canceller_error: e }), nc({ noiseCancellation: !1 });
    } finally {
        tN = !1;
    }
}
function rA() {
    return (0, eg.isWindows)() || (0, eg.isLinux)() || (0, eg.isMac)();
}
function rI() {
    !rA() || __OVERLAY__ || tN || tC
        ? (0, eg.isWeb)() && e7.supports(eP.O5.NOISE_CANCELLATION)
            ? ((tC = !0), r.emitChange())
            : (0, eg.isWeb)() && nc({ noiseCancellation: !1 })
        : ((tN = !0), rg());
}
async function rT() {
    try {
        let e,
            t = "",
            n = !1,
            r = URL.parse(e0);
        if (null === r) return void eU.log("OpenH264 URL ", r, " is invalid");
        let i = r.pathname.split("/"),
            s = i[i.length - 1].replace(".bz2", "");
        try {
            let t = await eI.Ay.downloadOpenH264(e0, s, e1, (e) => {
                eU.log("OpenH264 download status", e);
            });
            eU.log("OpenH264 is ready", t), (n = t.fetchedFromNetwork), (e = !0);
        } catch (n) {
            eU.error("OpenH264 download failed", n), (t = n.message), (e = !1);
        }
        if (
            (eh.default.track(eD.HAw.VIDEO_OPENH264_DOWNLOADED, {
                success: e,
                fetched_from_network: n,
                error_message: t,
            }),
            e)
        ) {
            let e = await eI.Ay.cleanupUnusedOpenH264Files([s]);
            eU.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        eU.error("OpenH264 download failed", e);
    }
}
function rS() {
    (0, eg.isLinux)() && rT();
}
function ry(e) {
    let { deviceId: t, active: n, available: r } = e;
    tM[t] = { active: n, available: r };
}
function rv(e) {
    let t = e.bypassEnabled;
    nc({ bypassSystemInputProcessing: t }), e7.setAudioInputBypassSystemProcessing(t), n1(e.location);
}
function rN(e) {
    rC(e.subsystem);
}
function rC(e) {
    e === eP.rB.AUTOMATIC
        ? (nc({ automaticAudioSubsystem: !0 }), rR())
        : (nc({ automaticAudioSubsystem: !1 }), e7.setAudioSubsystem(e));
}
function rR() {
    e7.queueAudioSubsystem(eP.rB.EXPERIMENTAL);
}
function rO(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && t5(i, null), null != t || null == n)) {
        tv = !1;
        return;
    }
    if (tv) return;
    tv = !0;
    let s = t1();
    (s.mute || s.deaf) && (nc({ deaf: !1, mute: !1 }), e7.eachConnection(t6));
}
function rb(e) {
    let { application: t } = e;
    e9.add(t.id);
}
function rD(e) {
    let { application: t } = e;
    e9.delete(t.id);
}
function rL(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (te = !1), e7.eachConnection(t6);
                break;
            case "video":
                t5(!1);
        }
}
function rw(e) {
    (te = e.enabled), e.unmute && nc({ mute: !1, deaf: !1 }), e7.eachConnection(t6);
}
function rM(e) {
    let { enabled: t } = e;
    el.A.requestPermission(ew.iL.CAMERA), t5(t);
}
function rx(e) {
    let { sourceId: t, applicationName: n, quality: i } = e;
    if (!(0, M.Ao)() || null == R.A) return !1;
    null != a &&
        (e7.setClipsSource(null),
        (0, eg.isWindows)() &&
            (null != a.desktopSource.soundshareId
                ? O.c1(a.desktopSource.soundshareId)
                : null != a.desktopSource.sourcePid && t1().videoHook && O.c1(a.desktopSource.sourcePid)));
    let s = em.A.getPidFromDesktopSource(t),
        { soundshareId: o, soundshareSession: l } = nC(s, !0);
    a = { desktopSource: { id: t, sourcePid: s, soundshareId: o, soundshareSession: l }, quality: i };
    let u = tX("MediaEngineStore clips"),
        c = t1().videoHook;
    e7.setClipsSource({
        desktopDescription: {
            id: a.desktopSource.id,
            soundshareId: a.desktopSource.soundshareId,
            useVideoHook: c,
            useGraphicsCapture: ni(),
            useCaptureDeviceForEncode: !1,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: na(),
            videoHookStaleFrameTimeoutMs: eW,
            graphicsCaptureStaleFrameTimeoutMs: eK,
            hdrCaptureMode: u,
        },
        quality: i,
        applicationName: n,
        videoEncoderExperiments: r.getVideoEncoderExperiments(eP.x.STREAM, "streamer"),
    });
}
function rP(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((a = null), e7.setClipsSource(null));
}
function rk(e) {
    let { settings: t } = e;
    if (t?.desktopSettings != null) {
        let e = null,
            n = null,
            { sourceId: r, sound: i } = t.desktopSettings,
            s = t.context ?? eP.x.DEFAULT,
            a = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
            o = em.A.getPidFromDesktopSource(r);
        eg.isPlatformEmbedded && ({ soundshareId: e, soundshareSession: n } = nC(o, i)),
            t4(s),
            t5(s === eP.x.STREAM && tf, {
                desktopSource: { id: r, sourcePid: o, soundshareId: e, soundshareSession: n },
                quality: { resolution: a.resolution, frameRate: a.frameRate },
            });
    } else if (t?.cameraSettings != null) {
        let e = t.context ?? eP.x.DEFAULT,
            { videoDeviceGuid: n, audioDeviceGuid: r } = t.cameraSettings,
            i = e === eP.x.STREAM && tf,
            s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
        t5(i, {
            cameraSource: { videoDeviceGuid: n, audioDeviceGuid: r },
            quality: { resolution: s.resolution, frameRate: s.frameRate },
        });
    } else t5(tf, null);
}
function rU(e) {
    let { section: t } = e;
    return t === eD.nc_.VOICE && nf(), !1;
}
function rG() {
    return e7.eachConnection(nn), !1;
}
function rF(e) {
    let { enabled: t } = e,
        n = nc({ aecDumpEnabled: t });
    e7.setAecDump(n.aecDumpEnabled);
}
function rV(e) {
    let { enabled: t } = e;
    nc({ openH264Enabled: t }), eI.Ay?.setOpenH264Enabled?.(t);
}
function rB(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (e8 = Object.values(eP.x).reduce((e, n) => {
        let r = n,
            i = e4();
        return (e[r] = E().merge(i, t[r])), e;
    }, {})),
        v.w.set(eG, e8),
        n_();
}
function rH(e) {
    let { state: t } = e,
        n = G.A.isEnabled();
    if (t === eD.g6G.BACKGROUND && tf && !n) (tA = !0), t5(!1);
    else {
        if (t !== eD.g6G.ACTIVE || !tA) return !1;
        (tA = !1), t5(!0);
    }
    return !0;
}
function rj(e) {
    e7.eachConnection((t) => t.setBitRate(e.bitrate));
}
function rY() {
    if ((!tf && null == s) || null != eC.A.getRTCConnectionId()) return !1;
    t5(!1, null);
}
function rW() {
    return !!tD && ((tD = !1), !0);
}
function rK(e) {
    e7.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function r$(e) {
    let { settings: t } = e;
    e7.applyMediaFilterSettings(t).finally(() => {
        (tL = !1), r.emitChange();
    });
}
function rz() {
    tL = !0;
}
function rq() {
    tL = !1;
}
function rZ(e) {
    tY = e.enabled;
}
function rX() {
    if ((0, eg.isDesktop)() && eg.isPlatformEmbedded && !tZ) {
        tZ = !0;
        let e = async () => {
            let t = await new Promise((e) => {
                eI.Ay.pollQueueMetrics((t) => {
                    e(t);
                });
            });
            t.periodMs = eP.tl;
            let n = rJ(t);
            null !== n && eh.default.track(eD.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, eP.tl);
        };
        setTimeout(e, eP.tl);
    }
}
class rQ extends S.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        nr(),
            nu(),
            rI(),
            rS(),
            nH(),
            rX(),
            (0, eg.isWindows)() && eg.isPlatformEmbedded && t8(),
            (tB = {
                [eP.O5.VIDEO]: e7.supports(eP.O5.VIDEO),
                [eP.O5.DESKTOP_CAPTURE]: e7.supports(eP.O5.DESKTOP_CAPTURE),
                [eP.O5.HYBRID_VIDEO]: e7.supports(eP.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eS.default, ey.A, ev.A, eN.A, L.A, U.A, eC.A, F.Ay, ef.A, eO.default, eb.A);
    }
    supports(e) {
        return e7.supports(e);
    }
    supportsInApp(e) {
        return tB[e] || e7.supports(e);
    }
    isSupported() {
        return e7.supported();
    }
    isNoiseSuppressionSupported() {
        return e7.supports(eP.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return rE();
    }
    isNoiseCancellationError() {
        return tD;
    }
    isAutomaticGainControlSupported() {
        return e7.supports(eP.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nl() && (e7.supports(eP.O5.LEGACY_AUDIO_SUBSYSTEM) || e7.supports(eP.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return e7.supports(eP.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === e7.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return rE();
    }
    isAecDumpSupported() {
        return e7.supports(eP.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return e7.supports(eP.O5.VIDEO) && e7.supports(eP.O5.SIMULCAST);
    }
    getAecDump() {
        return t1().aecDumpEnabled;
    }
    getMediaEngine() {
        return e7;
    }
    getVideoComponent() {
        return e7.Video;
    }
    getCameraComponent() {
        return e7.Camera;
    }
    getKrispSuppressionLevel() {
        return d ?? 100;
    }
    getKrispEnableStats() {
        return tO;
    }
    isEnabled() {
        return te;
    }
    isMute() {
        return this.isSelfMute() || tu;
    }
    isDeaf() {
        return this.isSelfDeaf() || t_;
    }
    hasContext(e) {
        return null != e8[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.x.DEFAULT;
        return e === eP.x.DEFAULT && tc;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.x.DEFAULT;
        return (
            !this.isEnabled() ||
            t1(e).mute ||
            !el.A.didHavePermission(ew.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eP.x.DEFAULT && td)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tm;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tm = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.x.DEFAULT,
            t = tW && "voice_isolation" !== this.getSystemMicrophoneMode() && t1(e).mode === eD.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (ev.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return tY;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.x.DEFAULT;
        return !this.isSupported() || t1(e).deaf;
    }
    isVideoEnabled() {
        return tf && tI;
    }
    isVideoAvailable() {
        return Object.values(to).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return tI;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.x.STREAM;
        return tn === e && null != s;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.x.STREAM;
        return tn === e && null != s && s.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eP.x.DEFAULT;
        return e !== eS.default.getId() && (t1(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return e7.supports(eP.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eP.x.DEFAULT;
        return t1(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eP.x.DEFAULT;
        return t1(t).videoToggleStateMap[e] ?? eD.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eP.x.DEFAULT;
        return t === eP.x.DEFAULT && tG.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.x.DEFAULT;
        return e === eP.x.DEFAULT && tG.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tL;
    }
    isNativeAudioPermissionReady() {
        return tk;
    }
    getGoLiveSource() {
        return s;
    }
    getGoLiveContext() {
        return tn;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return tr;
    }
    isH264MfDecodeAvailable() {
        return ti;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eP.x.DEFAULT,
            n = t1(t).localPans[e];
        return null != n ? n : eY;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eP.x.DEFAULT,
            n = t === eP.x.STREAM ? eP.Cn : eP.Hz,
            r = t1(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return t1().inputVolume;
    }
    getOutputVolume() {
        return t1().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.x.DEFAULT;
        return t1(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.x.DEFAULT;
        return t1(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            E().each(e8, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === eD.TBI.PUSH_TO_TALK && e9.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nm(ts, t1().inputDeviceId);
    }
    getOutputDeviceId() {
        return nm(ta, t1().outputDeviceId);
    }
    getVideoDeviceId() {
        return nm(to, t1().videoDeviceId);
    }
    getInputDevices() {
        return ts;
    }
    getOutputDevices() {
        return ta;
    }
    getVideoDevices() {
        return to;
    }
    getEchoCancellation() {
        let e = t1();
        return ev.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return e7.supports(eP.O5.SIDECHAIN_COMPRESSION) && t1().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return t1().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return t1().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tx && tx;
    }
    getOpenH264Enabled() {
        return (0, eg.isLinux)() && t1().openH264Enabled;
    }
    getLoopback() {
        return tV.size > 0;
    }
    getLoopbackReasons() {
        return tV;
    }
    getNoiseSuppression() {
        let e = t1();
        return ev.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = t1();
        return ev.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return t1().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return t1().noiseCancellation;
    }
    getHardwareEncoding() {
        return eQ;
    }
    getEnableSilenceWarning() {
        return t1().silenceWarning;
    }
    getDebugLogging() {
        return e7.getDebugLogging();
    }
    getQoS() {
        return t1().qos;
    }
    getAttenuation() {
        return t1().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return t1().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return t1().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return no() && t1().automaticAudioSubsystem ? eP.rB.AUTOMATIC : e7.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return e7.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return t1().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === ex.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.x.DEFAULT;
        return t1(e);
    }
    getState() {
        return {
            settingsByContext: e8,
            inputDevices: ts,
            outputDevices: ta,
            appSupported: tB,
            krispModuleLoaded: tC,
            krispVersion: c,
            krispSuppressionLevel: d,
            goLiveSource: s,
            goLiveContext: tn,
        };
    }
    getInputDetectedThisConnection() {
        return tT;
    }
    getInputDetected() {
        return o.inputDetected;
    }
    getLastInputDetectedUpdateTime() {
        return o.lastUpdateTime;
    }
    getNoInputDetectedNotice() {
        return tS;
    }
    getInputDeviceOSMuted() {
        return l;
    }
    getInputDeviceOSVolume() {
        return u;
    }
    getPacketDelay() {
        return eg.isPlatformEmbedded || this.getMode() !== eD.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        e7.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return tt;
    }
    getVideoHook() {
        return t1().videoHook;
    }
    supportsVideoHook() {
        return e7.supports(eP.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = t1().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return e7.supports(eP.O5.EXPERIMENTAL_SOUNDSHARE) && T().satisfies(R.A?.os.release, eL.$x);
    }
    supportsHookSoundshare() {
        return (0, eg.isWindows)() && e7.supports(eP.O5.SOUNDSHARE) && T().satisfies(R.A?.os.release, eL.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = t1().useSystemScreensharePicker,
            n = (0, eg.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return e7.supports(eP.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return tq;
    }
    getVideoEncoderExperiments(e, t) {
        let n = ["unk"];
        if (
            (n.push("nvNewPresets"),
            e === eP.x.STREAM ? n.push("nvRelaxRc=250") : n.push("nvRelaxRc=75"),
            this.getUseVaapiEncoder() && n.push("vaapi"),
            e === eP.x.STREAM && "streamer" === t && (0, eg.isWindows)())
        ) {
            n.push("useCaptureDeviceForEncode");
            let { overrideDeviceReuse: e } = et.g.getConfig({ location: "handleReady" });
            e && n.push("videoCaptureDeviceOverrideReuse");
        }
        return (0, Z.n)({ location: "handleReady" }).enabled && n.push("linux-vulkan"), n.join(",");
    }
    getUseGamescopeCapture() {
        return tz;
    }
    getSpeakingWhileMuted() {
        return tE;
    }
    getKrispModelOverride() {
        return _;
    }
    getKrispModels() {
        return tR;
    }
    getKrispVadActivationThreshold() {
        return t1().modeOptions.vadKrispActivationThreshold ?? ej;
    }
    hasActiveCallKitCall() {
        return t$;
    }
    setHasActiveCallKitCall(e) {
        t$ = e;
    }
    supportsScreenSoundshare() {
        return (0, eg.isMac)()
            ? e7.supports(eP.O5.SOUNDSHARE) && T().satisfies(R.A?.os.release, eL.P$) && na()
            : (0, eg.isWindows)()
              ? e7.supports(eP.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, eg.isLinux)() && e7.supports(eP.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, eg.isWindows)()) {
            if (this.getBypassSystemInputProcessing()) return;
            return tM[this.getInputDeviceId()]?.active?.find((e) => e === eJ);
        }
        if ((0, eg.isMac)() || (0, eg.isIOS)()) return f;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.x.DEFAULT,
            t = this.supports(eP.O5.VIDEO)
                ? [{ rid: "100", type: e === eP.x.DEFAULT ? eP.mI.VIDEO : eP.mI.SCREEN, quality: eP.Y4 }]
                : [];
        return (
            this.isSimulcastSupported() &&
                e === eP.x.DEFAULT &&
                t.push({ rid: "50", type: eP.mI.VIDEO, quality: eP.Cl }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: (0, eg.isWeb)() };
        return e7.fetchAsyncResources(e);
    }
    startDavePreload() {
        if (!tw && ((tw = !0), (0, eg.isWeb)())) {
            let e = { fetchDave: !0 };
            e7.fetchAsyncResources(e).catch((e) => {
                eU.warn("DAVE preload failed:", e), eA.A.captureException(e);
            });
        }
    }
    getSupportedSecureFramesProtocolVersion() {
        return e7.getSupportedSecureFramesProtocolVersion();
    }
    hasClipsSource() {
        return null != a;
    }
    getGpuBrand() {
        return tH;
    }
}
function rJ(e) {
    if (null == e.taskMetrics || 0 === e.taskMetrics.length || 1 === e.taskMetrics.length) return null;
    let t = { metrics_period_ms: e.periodMs, total_tasks: 0, total_exec_time_ns: 0, queue_name: e.queueName };
    (t.total_tasks = e.taskMetrics.reduce((e, t) => e + t.count, 0)),
        (t.total_exec_time_ns = e.taskMetrics.reduce((e, t) => e + t.totalExecTimeNs, 0));
    let n = [...e.taskMetrics].sort((e, t) => t.longestExecTimeNs - e.longestExecTimeNs),
        r = [...e.taskMetrics].sort((e, t) => t.longestQueueTimeNs - e.longestQueueTimeNs);
    for (let e = 0; e < 3; e++)
        if (e < n.length) {
            let r = n[e];
            (t[`slow_task_${e}_name`] = r.name), (t[`slow_task_${e}_longest_exec_time_ns`] = r.longestExecTimeNs);
        }
    for (let e = 0; e < 3; e++)
        if (e < r.length) {
            let n = r[e];
            (t[`delayed_task_${e}_name`] = n.name),
                (t[`delayed_task_${e}_longest_queue_time_ns`] = n.longestQueueTimeNs);
        }
    return (t.full_task_report = JSON.stringify(n)), t;
}
(r = new rQ(C.h, {
    VOICE_CHANNEL_SELECT: rO,
    VOICE_STATE_UPDATES: nM,
    CONNECTION_OPEN: nO,
    CONNECTION_CLOSED: nD,
    POST_CONNECTION_OPEN: nL,
    RTC_CONNECTION_STATE: nw,
    AUDIO_SET_TEMPORARY_SELF_MUTE: nx,
    AUDIO_TOGGLE_SELF_MUTE: nP,
    AUDIO_SET_SELF_MUTE: nk,
    AUDIO_TOGGLE_SELF_DEAF: nG,
    AUDIO_TOGGLE_LOCAL_MUTE: nF,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: nV,
    AUDIO_SET_LOCAL_VOLUME: nj,
    AUDIO_SET_LOCAL_PAN: nY,
    AUDIO_SET_MODE: nW,
    AUDIO_SET_INPUT_VOLUME: nK,
    AUDIO_SET_OUTPUT_VOLUME: n$,
    AUDIO_SET_INPUT_DEVICE: nz,
    AUDIO_SET_OUTPUT_DEVICE: nq,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: nX,
    AUDIO_SET_ECHO_CANCELLATION: n2,
    AUDIO_SET_SIDECHAIN_COMPRESSION: n3,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: n6,
    AUDIO_SET_LOOPBACK: n5,
    AUDIO_SET_NOISE_SUPPRESSION: n9,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: re,
    AUDIO_SET_NOISE_CANCELLATION: rt,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: rn,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: ri,
    AUDIO_SET_DEBUG_LOGGING: rs,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: ra,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: rr,
    MEDIA_ENGINE_SET_VIDEO_HOOK: ro,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: rl,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: ru,
    AUDIO_SET_ATTENUATION: rc,
    AUDIO_SET_QOS: rd,
    MEDIA_ENGINE_DEVICES: nJ,
    AUDIO_VOLUME_CHANGE: n0,
    AUDIO_RESET: r_,
    AUDIO_INPUT_DETECTED: rp,
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: rf,
    AUDIO_SET_SUBSYSTEM: rN,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rv,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rw,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rM,
    MEDIA_ENGINE_PERMISSION: rL,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rk,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nZ,
    MEDIA_ENGINE_INTERACTION_REQUIRED: nQ,
    USER_SETTINGS_MODAL_INIT: rU,
    USER_SETTINGS_MODAL_SET_SECTION: rU,
    CERTIFIED_DEVICES_SET: rG,
    RPC_APP_CONNECTED: rb,
    RPC_APP_DISCONNECTED: rD,
    OVERLAY_INITIALIZE: nb,
    APP_STATE_UPDATE: rH,
    SET_CHANNEL_BITRATE: rj,
    SET_VAD_PERMISSION: rh,
    SET_NATIVE_PERMISSION: rm,
    SET_CHANNEL_VIDEO_QUALITY_MODE: rK,
    MEDIA_ENGINE_SET_AEC_DUMP: rF,
    MEDIA_ENGINE_SET_OPENH264_ENABLED: rV,
    MEDIA_ENGINE_RESET_SETTINGS: rB,
    CHANNEL_DELETE: rY,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rW,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: r$,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rz,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rq,
    USER_SETTINGS_PROTO_UPDATE: nU,
    CLIPS_INIT: rx,
    CLIPS_SETTINGS_UPDATE: rP,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rZ,
    MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: ry,
})),
    (o = new z.A(e7, r));
let r0 = r;
