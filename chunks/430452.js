"use strict";
let r, i, s, a, o, l, u, c, d, _, f;
n.d(t, { Ay: () => r8 }), n(323874), n(14289), n(35956), n(321073), n(790599);
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
    P = n(626584),
    x = n(211597),
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
    Z = n(233232),
    X = n(140175);
n(491642);
var Q = n(801644),
    J = n(223572),
    ee = n(993628),
    et = n(886124),
    en = n(165479),
    er = n(896014),
    ei = n(765396),
    es = n(75076),
    ea = n(674966),
    eo = n(559633),
    el = n(3527),
    eu = n(90361),
    ec = n(879172),
    ed = n(617617),
    e_ = n(499156),
    ef = n(996744),
    ep = n(28075),
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
    eP = n(509381),
    ex = n(731854),
    ek = n(985018);
let eU = new P.A("MediaEngineStore"),
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
        mostRecentlyRequestedVoiceFilter: null,
        voiceFilterPlaybackEnabled: !0,
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
        inputVolume: ex.Hz,
        outputVolume: ex.Hz,
        inputDeviceId: ex.dx,
        outputDeviceId: ex.dx,
        videoDeviceId: ex.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: e7.supports(ex.O5.VIDEO_HOOK),
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
        [eP.m.CUSTOM]: {},
        [eP.m.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [eP.m.STUDIO]: {
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
    e9 = new Set([ex.x.DEFAULT]),
    te = e7.supports(ex.O5.AUTO_ENABLE),
    tt = !1,
    tn = ex.x.STREAM,
    tr = performance.now(),
    ti = null,
    ts = { [ex.dx]: ng("No Input Devices") },
    ta = { [ex.dx]: ng("No Output Devices") },
    to = { [ex.dx]: ng("No Video Devices") },
    tl = new N.Ep(),
    tu = !1,
    tc = !1,
    td = !1,
    t_ = !1,
    tf = !1,
    tp = ex.qe,
    th = ex.qe,
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
    tD = null,
    tL = null,
    tw = null,
    tM = null,
    tP = !1,
    tx = !1,
    tk = !1,
    tU = {},
    tG = null,
    tF = null,
    tV = !1;
ea.A.hasPermission(ew.iL.AUDIO, { showAuthorizationError: !1 }),
    ea.A.hasPermission(ew.iL.CAMERA, { showAuthorizationError: !1 });
let tB = !1,
    tH = new Set(),
    tj = tB,
    tY = new Set(),
    tW = {},
    tK = null,
    t$ = null,
    tz = !0,
    tq = !1,
    tZ = new N.Ep(),
    tX = !1,
    tQ = !1,
    tJ = !1,
    t0 = !1;
function t1(e) {
    return (0, K.p)({ location: e }).hdrCaptureMode;
}
async function t2() {
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
function t3() {
    return null != tF ? tF : "u" > typeof window ? (tF = t2().then((e) => ((tG = e), e))) : Promise.resolve(!1);
}
function t6() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.x.DEFAULT,
        t = e8[e];
    return null == t && ((t = e4()), (e8[e] = t)), t;
}
function t4() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.x.DEFAULT,
        t = t6(e),
        n = e5[t.activeInputProfile ?? eP.m.CUSTOM],
        r = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}) };
    if (
        (null == r.vadDuringPreProcess && (r.vadDuringPreProcess = (0, J.R)({ location: "getSettings" }).enabled),
        (null == r.vadKrispActivationThreshold && !0 === n.automaticGainControl) || !0 === t.automaticGainControl)
    ) {
        let e = (0, B.F)({ location: "getSettings" });
        null != e.vadKrispActivationThreshold && (r.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return { ...t, ...n, modeOptions: r };
}
function t5(e) {
    let t = t4(e.context),
        n = t.mode;
    e.context === ex.x.DEFAULT && (0, X.N)(!1, !1);
    let { showPTTSpeakingIndicator: r } = e_.A.getConfig({ location: "setInputMode" }),
        i = r && n === eD.TBI.PUSH_TO_TALK;
    e.setInputMode(n, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: !!i || t.modeOptions.autoThreshold,
        vadUseKrisp: (!!i || t.modeOptions.vadUseKrisp) && rT(),
        vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? ej,
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        vadDuringPreProcess: t.modeOptions.vadDuringPreProcess ?? !1,
        pttReleaseDelay: Math.round(t.modeOptions.delay),
    });
}
function t7(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ex.Hz;
    return E().clamp(e, 0, t);
}
function t8(e) {
    let t = t4(e.context),
        n = !te || t.mute || t.deaf;
    e.context === ex.x.DEFAULT
        ? (n = n || tu || tc || td || !ea.A.didHavePermission(ew.iL.AUDIO))
        : e.context === ex.x.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === ex.x.DEFAULT && b.A.updateNativeMute();
}
function t9(e) {
    e !== tn && (null != s && e7.setGoLiveSource(null, tn), (tn = e));
}
function ne() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tf,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
        n = s;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, eg.isWindows)() && O.c1(n.desktopSource.soundshareId),
            e7.setGoLiveSource(null, tn)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            e7.setGoLiveSource(null, tn),
        tf || e)
    ) {
        let t = t4().videoDeviceId;
        tf && t === ex.dx && th === ex.dx && tp !== ex.qe ? (t = tp) : (th = t),
            (tp = (tf = e) ? nI(to, t) : ex.qe),
            e7.setVideoInputDevice(tp);
    }
    if (((s = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = t1("MediaEngineStore go live"),
                i = t4().videoHook,
                s = nl(),
                a = s ? (nu() ? eL.zl : eL.eg) : 0,
                o = !1;
            (0, eg.isWindows)() &&
                a >= eL.zl &&
                (o =
                    !0 === t$
                        ? en.q.getConfig({ location: "updateVideo" }).enabled
                        : et.d.getConfig({ location: "updateVideo" }).enabled),
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
                            allowScreenCaptureKit: nc(),
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
function nt(e) {
    switch (e) {
        case ex.CO.CPU_OVERUSE:
            return k.B6.NoiseCancellerCpuOveruse;
        case ex.CO.FAILED:
            return k.B6.NoiseCancellerFailed;
        case ex.CO.VAD_CPU_OVERUSE:
            return k.B6.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function nn() {
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
function nr(e) {
    let t = (0, B.F)({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function ni(e, t) {
    e.setAutomaticGainControl(nr(t));
}
function ns(e, t) {
    let n = (0, el.A)(t, r.getSystemMicrophoneMode());
    n !== t && eU.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: i } = (0, B.F)({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(i);
    let { noiseCancellationAfterProcessing: s, vadAfterWebrtc: a } = (0, q.$)({ location: "setNoiseCancellation" });
    e.setNoiseCancellationAfterProcessing(s), e.setVADAfterWebrtc(a);
}
function na(e) {
    let t = t4(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(ev.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(ev.A.hasNoiseSuppression(n) || t.noiseSuppression),
        ni(e, ev.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        ns(e, t.noiseCancellation),
        e.setVoiceFilterId(tb),
        (0, eg.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function no() {
    tl.start(eZ, () => {
        eU.error("Device enumeration timed out"), eh.default.track(eD.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
    }),
        e7.on(y.bg.Connection, (e) => {
            t5(e), t8(e), na(e);
            let t = t4();
            e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
                e.setQoS(t.qos),
                (0, eg.isWindows)()
                    ? (e.setExperimentFlag(ex.fd.H265_HARDWARE_ONLY, !0),
                      t3().then((t) => {
                          e.setExperimentFlag(ex.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                      }))
                    : (0, eg.isMac)() && e.setExperimentFlag(ex.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                (0, eg.isLinux)() && t.openH264Enabled && e.setExperimentFlag(ex.fd.USE_LIBOPENH264_DECODER, !0),
                (0, Z.J)({ location: "setupMediaEngine" }).enabled &&
                    e.setExperimentFlag(ex.fd.LOW_LATENCY_RATE_CONTROL, !0);
            let n = !1,
                i = !0;
            e.setExperimentFlag(ex.fd.RESET_DECODER_ON_ERRORS, !0),
                n && e.setExperimentFlag(ex.fd.SOFTWARE_FALLBACK_ON_ERRORS, !0),
                i && e.setExperimentFlag(ex.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
            let { swallowVolumeOnlySpeakingEvents: a } = D.A.getConfig({ location: "MediaEngineStore" });
            if ((a && e.setExperimentFlag(ex.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === ex.x.STREAM)) {
                let t = nv(ta);
                e.setSoundshareDiscardRearChannels(t);
            }
            if ((0, eg.isWindows)())
                e.setExperimentFlag(ex.fd.SIGNAL_AV1, !0), e.setExperimentFlag(ex.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            else if ((0, eg.isMac)())
                e.setExperimentFlag(ex.fd.SIGNAL_AV1_DECODE, !0),
                    e.setExperimentFlag(ex.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            else if ((0, eg.isLinux)()) e.setExperimentFlag(ex.fd.SIGNAL_AV1_DECODE, !0);
            else if ((0, eg.isIOS)() && e6()) {
                let { enabled: t } = (0, H.$)("MediaEngineStore");
                t &&
                    (e.setExperimentFlag(ex.fd.SIGNAL_AV1_DECODE, !0),
                    e.setExperimentFlag(ex.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
            }
            if ((0, eg.isWeb)()) {
                let { enabled: t } = Y.A.getConfig({ location: "MediaEngineStore" });
                e.setExperimentFlag(ex.fd.BROWSER_HEVC, t);
            }
            for (let n of ((0, eg.isWindows)() &&
                tK?.startsWith("AMD") &&
                (0, er.F)("MediaEngineStore").enabled &&
                e.setExperimentFlag(ex.fd.WMF_GPU_ENCODE, !0),
            (0, eg.isWindows)() &&
                tK?.startsWith("Intel") &&
                (0, ei.J)("MediaEngineStore").enabled &&
                e.setExperimentFlag(ex.fd.WMF_GPU_ENCODE, !0),
            (0, eg.isWindows)() &&
                tK?.startsWith("Qualcomm") &&
                (0, er.F)("MediaEngineStore").enabled &&
                e.setExperimentFlag(ex.fd.WMF_GPU_ENCODE, !0),
            e7.setHasFullbandPerformance((0, x.A)()),
            e.setRemoteAudioHistory(1e3),
            (0, w.A)(r) && e.setClipsKeyFrameInterval(ex.X1),
            (t = t4(e.context)),
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
                e.context === ex.x.DEFAULT &&
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
                        (0, k.QW)({ type: k.iy.NOISE_CANCELLER_ERROR, underlyingError: nt(e) }),
                        (tP = !0),
                        eh.default.track(eD.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        C.h.dispatch({ type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: !0 }),
                        C.h.dispatch({ type: "AUDIO_SET_NOISE_CANCELLATION", enabled: !1 }),
                        C.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e });
                }),
                e.on(y.yq.VoiceActivityDetectorError, (e) => {
                    eU.warn(`voiceactivitydetectorerror event: ${e}`),
                        (0, k.QW)({ type: k.iy.NOISE_CANCELLER_ERROR, underlyingError: nt(e) }),
                        eh.default.track(eD.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        C.h.dispatch({
                            type: "AUDIO_SET_MODE",
                            context: ex.x.DEFAULT,
                            mode: eD.TBI.VOICE_ACTIVITY,
                            options: { ...t4(ex.x.DEFAULT).modeOptions, vadUseKrisp: !1 },
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
                    e7.supports(ex.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
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
            (tV = !0), C.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
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
            let t = ee.A.getConfig({ location: "watchdog_timeout" }).enabled && null != R.A.processUtils.setCrashReason;
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
            let t = r7(e);
            null !== t && eh.default.track(eD.HAw.VOICE_QUEUE_METRICS, t);
        }),
        e7.setOnVideoContainerResized((e, t, n) => {
            C.h.wait(() =>
                C.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
            );
        }),
        re(),
        rn(),
        o.reset(),
        (0, eR.w)().then((e) => {
            null != e && ((tK = e.gpu_brand), (t$ = e.has_intel_hybrid_igpu));
        }),
        e7.on(y.bg.SystemMicrophoneModeChange, (e) => {
            (f = e), e7.eachConnection(na), r.emitChange();
        });
}
function nl() {
    return (0, eg.isWindows)() && T().satisfies(R.A?.os.release, eL.yg);
}
function nu() {
    return (0, eg.isWindows)() && T().satisfies(R.A?.os.release, eL.fG);
}
function nc() {
    return (0, eg.isMac)() && e7.supports(ex.O5.SCREEN_CAPTURE_KIT) && T().satisfies(R.A?.os.release, eL.e);
}
function nd() {
    return (
        (0, eg.isWindows)() &&
        e7.supports(ex.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        e7.supports(ex.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function n_() {
    return e7.supports(ex.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function nf() {
    let e = v.w.get("audio");
    null != e && (v.w.set(eG, { [ex.x.DEFAULT]: e }), v.w.remove("audio")),
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
                e7.supports(ex.O5.SIDECHAIN_COMPRESSION) &&
                    e.sidechainCompressionSettingVersion < eH &&
                    ((e.sidechainCompressionSettingVersion = eH), (e.sidechainCompression = !0)),
                (0, eg.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== eB &&
                      ((e.ncUseKrispjsSettingVersion = eB), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== eV &&
                      ((e.ncUseKrispSettingVersion = eV), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
        }),
        nm();
}
function np(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ex.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = t6(t);
    return Object.assign(r, e), !__OVERLAY__ && n && v.w.set(eG, e8), r;
}
function nh() {
    v.w.remove(eG), location.reload();
}
function nm() {
    let e = t4();
    nS(e.inputDeviceId),
        e7.setAudioOutputDevice(e.outputDeviceId),
        ne(),
        e7.setInputVolume(e.inputVolume),
        e7.setOutputVolume(e.outputVolume),
        e7.setAecDump(e.aecDumpEnabled),
        e7.setSidechainCompression(e.sidechainCompression),
        e7.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        e7.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        eI.Ay?.setOpenH264Enabled?.(e.openH264Enabled);
}
function nE() {
    te || e7.enable().then(() => C.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function ng(e) {
    return { id: ex.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
}
function nA(e, t) {
    if (0 === e.length) {
        let e = ng(t);
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
function nI(e, t) {
    let n = e[t] ?? e[ex.dx] ?? E()(e).values().first();
    return null != n ? n.id : t;
}
function nT(e) {
    if (!(0, eg.isWindows)() || !j.A.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects)
        return;
    let t = ts[e];
    t?.guid != null && (0, eu.A)(t.guid, e, e7);
}
function nS(e) {
    e7.setAudioInputDevice(e), nT(e);
}
function ny(e) {
    let t = ts;
    if (((ts = nA(e, ek.intl.string(ek.t["/QIjDA"]))), !E().isEqual(ts, t))) {
        let e = t4();
        nS(nI(ts, e.inputDeviceId)), e7.eachConnection(na);
    }
}
function nv(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nN(e) {
    e7.eachConnection((t) => {
        t.context === ex.x.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function nC(e) {
    let t = ta;
    if (((ta = nA(e, ek.intl.string(ek.t.xlUg0v))), !E().isEqual(ta, t))) {
        let e = t4(),
            n = nI(ta, e.outputDeviceId);
        e7.setAudioOutputDevice(n);
        let r = nv(t),
            i = nv(ta);
        r !== i && nN(i);
    }
}
function nR(e) {
    tI = e.length > 0;
    let t = to;
    if (((to = nA(e, ek.intl.string(ek.t.WKWARY))), tf && !E().isEqual(to, t))) {
        let e = void 0 !== to[tp],
            n = tp === ex.dx && t[ex.dx]?.disabled,
            r = "Firefox" === A().name && "" === tp && t[tp]?.name === "Default" && !t[tp]?.disabled;
        ne(e || n || r);
    }
}
function nO() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = ed.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let r = n === eM.W.USER ? ex.x.DEFAULT : ex.x.STREAM,
            i = r === ex.x.STREAM ? ex.Cn : ex.Hz,
            s = t[n] ?? {},
            { localMutes: a, localVolumes: o } = t4(r);
        for (let [e, t] of Object.entries(s))
            null == (0, ec.tM)(r, e) &&
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
        np({ localMutes: a, localVolumes: o }, r);
    }
}
function nb(e) {
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
function nD(e, t) {
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
function nL(e) {
    (i = e.sessionId), (tu = !1), (t_ = !1);
    let t = t4();
    nd() && (n_() ? rP(ex.rB.AUTOMATIC) : t.automaticAudioSubsystem && rx()),
        e7.supports(ex.O5.OFFLOAD_ADM_CONTROLS) && e7.setOffloadAdmControls(!0),
        (0, eg.isIOS)() &&
            (0, $.Y)("handleConnectionOpen").enabled &&
            e7.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
        (0, ef.Lb)({ location: "MediaEngineStore", autoTrackExposure: !1 }) &&
            null !== t.mostRecentlyRequestedVoiceFilter &&
            (0, eg.isDesktop)() &&
            (ep.A.getLastInitAttemptMayHaveCrashed()
                ? (C.h.dispatch({ type: "AUDIO_SET_SELF_MUTE", mute: !0, context: ex.x.DEFAULT, playSoundEffect: !0 }),
                  np({ mostRecentlyRequestedVoiceFilter: null }))
                : n(342887).md()),
        nT(t.inputDeviceId),
        nO();
}
function nw(e) {
    let { mediaEngineState: t } = e;
    (e8 = t.settingsByContext),
        (ts = t.inputDevices),
        (ta = t.outputDevices),
        (tW = t.appSupported),
        (tC = t.krispModuleLoaded),
        (c = t.krispVersion),
        (tn = t.goLiveContext);
}
function nM() {
    i = null;
}
function nP() {
    return (0, eg.isWeb)() && r.startDavePreload(), !1;
}
function nx(e) {
    switch (e.state) {
        case eD.S7L.CONNECTING:
            nE();
            break;
        case eD.S7L.RTC_CONNECTING:
            (tS = !1), (l = void 0), (u = void 0), (tT = !1), (tq = !1), tZ.stop(), ty.stop(), o.reset();
            break;
        case eD.S7L.RTC_CONNECTED:
            ne();
            break;
        case eD.S7L.DISCONNECTED:
            nY(), nW();
    }
}
function nk(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (tu = t.mute || t.suppress), (t_ = t.deaf), e7.eachConnection(t8);
            let e = null != t.guildId && null != t.channelId && null != tM && tM !== t.channelId,
                n = !tv && null == t.channelId;
            return ne(!e && !n && tf), (tM = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== eS.default.getId() || null != eC.A.getChannelId() || ne(!1, null), e;
    }, !1);
}
function nU(e) {
    let { mute: t } = e;
    (tc = t), e7.eachConnection(t8);
}
function nG(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = t4(t);
    if (t === ex.x.DEFAULT && (ea.A.requestPermission(ew.iL.AUDIO), td)) return !1;
    (r = !i && !r) || (i = !1), n || (tm = !0), np({ mute: r, deaf: i }, t), e7.eachConnection(t8);
}
function nF(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    np({ mute: n }, t), r || (tm = !0), e7.eachConnection(t8);
}
function nV(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== eM.oD.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    nO(!0);
}
function nB(e) {
    let { context: t } = e;
    np({ deaf: !t4(t).deaf }, t), e7.eachConnection(t8);
}
function nH(e) {
    let { context: t, userId: n } = e;
    if (n === eS.default.getId()) return;
    let { localMutes: r } = t4(t);
    r[n] ? delete r[n] : (r[n] = !0),
        np({ localMutes: r }, t),
        e7.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nj(e) {
    let { context: t, userId: n, videoToggleState: r, persist: i, isAutomatic: s } = e;
    h()(!(i && s), "These are not allowed to both be true.");
    let a = r === eD.bb8.DISABLED,
        { disabledLocalVideos: o } = t4(t),
        l = o[n] ?? !1,
        u = tH.has(n),
        c = r === eD.bb8.AUTO_ENABLED || r === eD.bb8.MANUAL_ENABLED;
    eU.info(`disableVideo=${a} currentlyDisabled=${l} currentlyAutoDisabled=${u}, isVideoShown=${c}`),
        h()(!(u && !l), "If you are auto-disabled, then you are also disabled.");
    let d = a !== l,
        _ = t === ex.x.DEFAULT,
        f = s && d && _,
        p = i && d && _;
    eU.info(`changed=${d} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${f} isManualToggleByUser=${p}`);
    let { videoToggleStateMap: m } = t4(t);
    if (
        (m[n] === eD.bb8.AUTO_PROBING &&
            r === eD.bb8.AUTO_ENABLED &&
            (0, es.A)(n, a ? ex.Al.AUTO_DISABLE : ex.Al.AUTO_ENABLE, c),
        (m[n] = r),
        np({ videoToggleStateMap: m }, t, i),
        r === eD.bb8.AUTO_PROBING
            ? eC.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
            : eC.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
        tj ||
            (eU.info(`isAutoDisableAllowed=${tj} - disabling VideoHealthManager`),
            eC.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
        f)
    ) {
        if ((!a && !u) || (a && !tj)) return;
        (0, es.A)(n, a ? ex.Al.AUTO_DISABLE : ex.Al.AUTO_ENABLE, c), a ? tH.add(n) : tH.delete(n);
    } else
        p &&
            (u && !a
                ? (eU.info("disallowing auto-disable for this session because of manual override by user"),
                  (tj = !1),
                  eC.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                  (0, es.A)(n, ex.Al.MANUAL_REENABLE, c))
                : (0, es.A)(n, a ? ex.Al.MANUAL_DISABLE : ex.Al.MANUAL_ENABLE, c));
    _ && !a && tH.delete(n),
        a ? (o[n] = !0) : delete o[n],
        np({ disabledLocalVideos: o }, t, i),
        e7.eachConnection((e) => e.setLocalVideoDisabled(n, o[n] ?? !1), t);
}
function nY() {
    if (0 === tH.size) return;
    let e = ex.x.DEFAULT,
        { disabledLocalVideos: t } = t4(e);
    tH.forEach((n) => {
        h()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            e7.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tH.clear(),
        np({ disabledLocalVideos: t }, e, !1);
}
function nW() {
    let e = ex.x.DEFAULT,
        { videoToggleStateMap: t } = t4(e);
    for (let [e, n] of Object.entries(t)) n === eD.bb8.AUTO_PROBING && delete t[e];
    np({ videoToggleStateMap: t }, e, !1);
}
function nK(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === eS.default.getId()) return;
    let i = t === ex.x.STREAM ? ex.Cn : ex.Hz,
        { localVolumes: s } = t4(t);
    r === i ? delete s[n] : (s[n] = r), np({ localVolumes: s }, t), e7.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function n$(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: s } = t4(t);
    (s[n] = { left: r, right: i }), np({ localPans: s }, t), e7.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function nz(e) {
    let { context: t, mode: n, options: r } = e;
    np({ mode: n, modeOptions: { ...r, updatedAt: Date.now() } }, t), e7.eachConnection(t5);
}
function nq(e) {
    let { volume: t } = e;
    np({ inputVolume: t7(t) }), e7.setInputVolume(t);
}
function nZ(e) {
    let { volume: t } = e;
    np({ outputVolume: t }), e7.setOutputVolume(t);
}
function nX(e) {
    let { id: t } = e;
    (t = nI(ts, t)),
        (tr = performance.now()),
        np({ inputDeviceId: t }),
        nS(t),
        e7.eachConnection(na),
        (l = void 0),
        (u = void 0),
        tZ.stop(),
        (tq = !1);
    let { resetSilenceWarningOnDeviceChange: n } = Q.A.getConfig({ location: "MediaEngineStore.handleSetInputDevice" });
    n && ((tT = !1), o.reset());
}
function nQ(e) {
    let { id: t } = e;
    np({ outputDeviceId: (t = nI(ta, t)) }), e7.setAudioOutputDevice(t);
}
function nJ(e) {
    let { id: t } = e;
    np({ videoDeviceId: (t = nI(to, t)) }), ne();
}
function n0(e) {
    let { inputProfile: t } = e;
    np({ activeInputProfile: t });
    let n = t4();
    e7.eachConnection((e) => {
        t5(e), na(e);
    }),
        e7.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        rt();
}
function n1(e) {
    return tt !== e.required && ((tt = e.required), e.required || e7.interact(), !0);
}
function n2(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    ny(t), nC(n), nR(r);
}
function n3(e) {
    let { inputVolume: t, outputVolume: n } = e;
    np({ inputVolume: t7(t), outputVolume: n });
}
function n6(e) {
    let t = t4(),
        n = e7.getAudioSubsystem(),
        i = e7.getAudioLayer(),
        s = nI(ts, t.inputDeviceId),
        a = ts[s]?.name,
        o = (0, el.A)(t.noiseCancellation, r.getSystemMicrophoneMode());
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
function n4(e) {
    let t = np({ echoCancellation: e.enabled });
    e7.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), rt(), n6(e.location);
}
function n5(e) {
    n8(e.enabled);
}
function n7(e) {
    let t = np({ sidechainCompressionStrength: e.strength });
    e7.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function n8(e) {
    let t = np({ sidechainCompression: e });
    e7.setSidechainCompression(t.sidechainCompression);
}
function n9(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tY.add(n) : tY.delete(n), re(), rt();
}
function re() {
    let e = !tY.has("voice_filter_preview") && !tY.has("mic_test");
    e7.setMaybePreprocessMute(e);
}
function rt() {
    let e = t4(),
        t = tY.size > 0,
        n = e.inputDeviceId,
        r = ev.A.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        s = ev.A.hasNoiseSuppression(n) || e.noiseSuppression,
        a = nr(ev.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        o = e.noiseCancellation,
        l = null !== tb,
        u = tY.has("voice_filter") && 1 === tY.size;
    e7.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: s,
        automaticGainControlConfig: a,
        noiseCancellation: o,
        voiceFilters: l,
        loopbackUseAudioMode: u,
    });
}
async function rn() {
    if (!e7.supports(ex.O5.VAAPI)) return;
    let e = 4098;
    if (window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let t = await window.DiscordNative.processUtils.getSystemInfo();
    (t.electronGPUInfo?.gpuDevice ?? []).some((t) => t.vendorId === e) &&
        ((tJ = !0), (tQ = e7.supports(ex.O5.GAMESCOPE_CAPTURE)));
}
function rr(e) {
    let t = np({ noiseSuppression: e.enabled });
    e7.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), rt(), n6(e.location);
}
function ri(e) {
    let t = np({ automaticGainControl: e.enabled });
    e7.eachConnection((e) => ni(e, t.automaticGainControl)), rt(), n6(e.location);
}
function rs(e) {
    let t = np({ noiseCancellation: e.enabled });
    e7.eachConnection((e) => ns(e, t.noiseCancellation)), rt(), n6(e.location);
}
function ra(e) {
    eo.A.setKrispModelOverride(e.model), (_ = e.model), rt();
}
function ro(e) {
    (0, eg.isWeb)() || ((tO = e.enabled), e7.setNoiseCancellationEnableStats?.(e.enabled));
}
function rl(e) {
    np({ silenceWarning: e.enabled });
}
function ru(e) {
    e7.setDebugLogging(e.enabled);
}
function rc(e) {
    let { level: t } = e;
    (d = t), eo.A.setKrispSuppressionLevel(t);
}
function rd(e) {
    np({ videoHook: e.enabled });
}
function r_(e) {
    np({ experimentalSoundshare2: e.enabled });
}
function rf(e) {
    let { enabled: t } = e;
    np({ useSystemScreensharePicker: t });
}
function rp(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = np({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r });
    e7.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function rh(e) {
    let { enabled: t } = e;
    np({ qos: t }), e7.eachConnection((e) => e.setQoS(t));
}
function rm() {
    nh();
}
function rE(e) {
    let { osVolume: t, osMuted: n } = e;
    (u = t), (l = n);
}
function rg(e) {
    let { inputDetected: t } = e;
    if (null == t) return !1;
    if (((tS = !0 !== tT && !t), t)) (tT = !0), (tq = !1), tZ.stop(), ty.stop();
    else if (t4().mode === eD.TBI.VOICE_ACTIVITY && tT) {
        let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = Q.A.getConfig({
            location: "MediaEngineStore.handleInputDetected",
        });
        e &&
            tZ.start(eX, () => {
                eh.default.track(eD.HAw.HARDWARE_MUTE_GUESSED, {
                    input_device_name: ts[nI(ts, t4().inputDeviceId)]?.name,
                    rtc_connection_id: eC.A.getRTCConnectionId(),
                }),
                    (tq = !0),
                    r.emitChange();
            }),
            null != t &&
                ty.start(t * eE.A.Millis.MINUTE, () => {
                    (tT = !1), o.reset();
                });
    }
}
function rA(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === td) return !1;
    (td = n), e7.eachConnection(t8);
}
function rI(e) {
    let { state: t, permissionType: n } = e,
        r = t === ew.hL.ACCEPTED;
    switch (n) {
        case ew.iL.AUDIO:
            (tV = !0), e7.eachConnection(t8);
            break;
        case ew.iL.CAMERA:
            !r && tf && ne(!1);
            break;
        default:
            return !1;
    }
}
function rT() {
    return tC || !1;
}
async function rS() {
    try {
        await eI.Ay.ensureModule("discord_krisp");
        let e = eI.Ay.requireModule("discord_krisp");
        (tC = !0),
            (c = e.getSdkVersion?.()),
            (d = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (tR = e), r.emitChange();
            }),
            r.emitChange();
    } catch (t) {
        eU.warn(`Failed to load Krisp module: ${t.message}`), eA.A.captureException(t);
        let e = ex.CO.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? ex.CO.INITIALIZED : n;
        }
        eh.default.track(eD.HAw.VOICE_PROCESSING, { noise_canceller_error: e }), np({ noiseCancellation: !1 });
    } finally {
        tN = !1;
    }
}
function ry() {
    return (0, eg.isWindows)() || (0, eg.isLinux)() || (0, eg.isMac)();
}
function rv() {
    !ry() || __OVERLAY__ || tN || tC
        ? (0, eg.isWeb)() && e7.supports(ex.O5.NOISE_CANCELLATION)
            ? ((tC = !0), r.emitChange())
            : (0, eg.isWeb)() && np({ noiseCancellation: !1 })
        : ((tN = !0), rS());
}
async function rN() {
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
function rC() {
    (0, eg.isLinux)() && rN();
}
function rR(e) {
    let { enabled: t } = e;
    eh.default.track(eD.HAw.VOICE_FILTER_PLAYBACK_TOGGLED, { active_voice_filter_id: tb ?? null, enabled: t }),
        np({ voiceFilterPlaybackEnabled: t });
}
function rO(e) {
    let { newVoiceFilterId: t } = e;
    np({ mostRecentlyRequestedVoiceFilter: t }), e7.eachConnection((e) => e.setVoiceFilterId(t));
}
function rb() {
    np({ mostRecentlyRequestedVoiceFilter: null });
}
function rD(e) {
    let { deviceId: t, active: n, available: r } = e;
    tU[t] = { active: n, available: r };
}
function rL(e) {
    let { voiceFilterId: t } = e;
    (tL = tb), (tw = tD), (tb = t), (tD = null === t ? null : Date.now());
}
function rw(e) {
    let t = e.bypassEnabled;
    np({ bypassSystemInputProcessing: t }), e7.setAudioInputBypassSystemProcessing(t), n6(e.location);
}
function rM(e) {
    rP(e.subsystem);
}
function rP(e) {
    e === ex.rB.AUTOMATIC
        ? (np({ automaticAudioSubsystem: !0 }), rx())
        : (np({ automaticAudioSubsystem: !1 }), e7.setAudioSubsystem(e));
}
function rx() {
    e7.queueAudioSubsystem(ex.rB.EXPERIMENTAL);
}
function rk(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && ne(i, null), null != t || null == n)) {
        tv = !1;
        return;
    }
    if (tv) return;
    tv = !0;
    let s = t4();
    (s.mute || s.deaf) && (np({ deaf: !1, mute: !1 }), e7.eachConnection(t8));
}
function rU(e) {
    let { application: t } = e;
    e9.add(t.id);
}
function rG(e) {
    let { application: t } = e;
    e9.delete(t.id);
}
function rF(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (te = !1), e7.eachConnection(t8);
                break;
            case "video":
                ne(!1);
        }
}
function rV(e) {
    (te = e.enabled), e.unmute && np({ mute: !1, deaf: !1 }), e7.eachConnection(t8);
}
function rB(e) {
    let { enabled: t } = e;
    ea.A.requestPermission(ew.iL.CAMERA), ne(t);
}
function rH(e) {
    let { sourceId: t, applicationName: n, quality: i } = e;
    if (!(0, M.Ao)() || null == R.A) return !1;
    let s = null,
        o = null,
        l = em.A.getPidFromDesktopSource(t);
    ({ soundshareId: s, soundshareSession: o } = nb(l));
    let u = { desktopSource: { id: t, sourcePid: l, soundshareId: s, soundshareSession: o }, quality: i };
    null != a &&
        (e7.setClipsSource(null),
        (0, eg.isWindows)() && null != a.desktopSource.soundshareId && O.c1(a.desktopSource.soundshareId)),
        null != s && nD(s, o),
        (a = u);
    let c = t1("MediaEngineStore clips"),
        d = t4().videoHook;
    e7.setClipsSource({
        desktopDescription: {
            id: a.desktopSource.id,
            soundshareId: a.desktopSource.soundshareId,
            useVideoHook: d,
            useGraphicsCapture: nl(),
            useCaptureDeviceForEncode: !1,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: nc(),
            videoHookStaleFrameTimeoutMs: eW,
            graphicsCaptureStaleFrameTimeoutMs: eK,
            hdrCaptureMode: c,
        },
        quality: i,
        applicationName: n,
    });
}
function rj(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((a = null), e7.setClipsSource(null));
}
function rY(e) {
    let { settings: t } = e;
    if (t?.desktopSettings != null) {
        let e = null,
            n = null,
            { sourceId: r, sound: i } = t.desktopSettings,
            s = t.context ?? ex.x.DEFAULT,
            a = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
            o = !1 === i ? null : em.A.getPidFromDesktopSource(r);
        eg.isPlatformEmbedded &&
            !0 === i &&
            (({ soundshareId: e, soundshareSession: n } = nb(o)), null != e && nD(e, n)),
            t9(s),
            ne(s === ex.x.STREAM && tf, {
                desktopSource: { id: r, sourcePid: o, soundshareId: e, soundshareSession: n },
                quality: { resolution: a.resolution, frameRate: a.frameRate },
            });
    } else if (t?.cameraSettings != null) {
        let e = t.context ?? ex.x.DEFAULT,
            { videoDeviceGuid: n, audioDeviceGuid: r } = t.cameraSettings,
            i = e === ex.x.STREAM && tf,
            s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
        ne(i, {
            cameraSource: { videoDeviceGuid: n, audioDeviceGuid: r },
            quality: { resolution: s.resolution, frameRate: s.frameRate },
        });
    } else ne(tf, null);
}
function rW(e) {
    let { section: t } = e;
    return t === eD.nc_.VOICE && nE(), !1;
}
function rK() {
    return e7.eachConnection(na), !1;
}
function r$(e) {
    let { enabled: t } = e,
        n = np({ aecDumpEnabled: t });
    e7.setAecDump(n.aecDumpEnabled);
}
function rz(e) {
    let { enabled: t } = e;
    np({ openH264Enabled: t }), eI.Ay?.setOpenH264Enabled?.(t);
}
function rq(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (e8 = Object.values(ex.x).reduce((e, n) => {
        let r = n,
            i = e4();
        return (e[r] = E().merge(i, t[r])), e;
    }, {})),
        v.w.set(eG, e8),
        nm();
}
function rZ(e) {
    let { state: t } = e,
        n = G.A.isEnabled();
    if (t === eD.g6G.BACKGROUND && tf && !n) (tA = !0), ne(!1);
    else {
        if (t !== eD.g6G.ACTIVE || !tA) return !1;
        (tA = !1), ne(!0);
    }
    return !0;
}
function rX(e) {
    e7.eachConnection((t) => t.setBitRate(e.bitrate));
}
function rQ() {
    if ((!tf && null == s) || null != eC.A.getRTCConnectionId()) return !1;
    ne(!1, null);
}
function rJ() {
    return !!tP && ((tP = !1), !0);
}
function r0(e) {
    e7.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function r1(e) {
    let { settings: t } = e;
    e7.applyMediaFilterSettings(t).finally(() => {
        (tx = !1), r.emitChange();
    });
}
function r2() {
    tx = !0;
}
function r3() {
    tx = !1;
}
function r6(e) {
    tz = e.enabled;
}
function r4() {
    if ((0, eg.isDesktop)() && eg.isPlatformEmbedded && !t0) {
        t0 = !0;
        let e = async () => {
            let t = await new Promise((e) => {
                eI.Ay.pollQueueMetrics((t) => {
                    e(t);
                });
            });
            t.periodMs = ex.tl;
            let n = r7(t);
            null !== n && eh.default.track(eD.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, ex.tl);
        };
        setTimeout(e, ex.tl);
    }
}
class r5 extends S.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        no(),
            nf(),
            rv(),
            rC(),
            nW(),
            r4(),
            (0, eg.isWindows)() && eg.isPlatformEmbedded && nn(),
            (tW = {
                [ex.O5.VIDEO]: e7.supports(ex.O5.VIDEO),
                [ex.O5.DESKTOP_CAPTURE]: e7.supports(ex.O5.DESKTOP_CAPTURE),
                [ex.O5.HYBRID_VIDEO]: e7.supports(ex.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eS.default, ey.A, ev.A, eN.A, L.A, U.A, eC.A, F.Ay, ed.A, eO.default, eb.A, ep.A);
    }
    supports(e) {
        return e7.supports(e);
    }
    supportsInApp(e) {
        return tW[e] || e7.supports(e);
    }
    isSupported() {
        return e7.supported();
    }
    isNoiseSuppressionSupported() {
        return e7.supports(ex.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return rT();
    }
    isNoiseCancellationError() {
        return tP;
    }
    isAutomaticGainControlSupported() {
        return e7.supports(ex.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !n_() && (e7.supports(ex.O5.LEGACY_AUDIO_SUBSYSTEM) || e7.supports(ex.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return e7.supports(ex.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === e7.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return rT();
    }
    isAecDumpSupported() {
        return e7.supports(ex.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return e7.supports(ex.O5.VIDEO) && e7.supports(ex.O5.SIMULCAST);
    }
    getAecDump() {
        return t4().aecDumpEnabled;
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
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.x.DEFAULT;
        return e === ex.x.DEFAULT && tc;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.x.DEFAULT;
        return (
            !this.isEnabled() ||
            t4(e).mute ||
            !ea.A.didHavePermission(ew.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === ex.x.DEFAULT && td)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tm;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tm = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.x.DEFAULT,
            t = tq && "voice_isolation" !== this.getSystemMicrophoneMode() && t4(e).mode === eD.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (ev.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return tz;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.x.DEFAULT;
        return !this.isSupported() || t4(e).deaf;
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
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.x.STREAM;
        return tn === e && null != s;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.x.STREAM;
        return tn === e && null != s && s.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ex.x.DEFAULT;
        return e !== eS.default.getId() && (t4(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return e7.supports(ex.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ex.x.DEFAULT;
        return t4(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ex.x.DEFAULT;
        return t4(t).videoToggleStateMap[e] ?? eD.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ex.x.DEFAULT;
        return t === ex.x.DEFAULT && tH.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.x.DEFAULT;
        return e === ex.x.DEFAULT && tH.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tx;
    }
    isNativeAudioPermissionReady() {
        return tV;
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
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ex.x.DEFAULT,
            n = t4(t).localPans[e];
        return null != n ? n : eY;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ex.x.DEFAULT,
            n = t === ex.x.STREAM ? ex.Cn : ex.Hz,
            r = t4(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return t4().inputVolume;
    }
    getOutputVolume() {
        return t4().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.x.DEFAULT;
        return t4(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.x.DEFAULT;
        return t4(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return tb;
    }
    getActiveVoiceFilterAppliedAt() {
        return tD;
    }
    getPreviousVoiceFilter() {
        return tL;
    }
    getPreviousVoiceFilterAppliedAt() {
        return tw;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return t4().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return t4().voiceFilterPlaybackEnabled;
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
        return nI(ts, t4().inputDeviceId);
    }
    getOutputDeviceId() {
        return nI(ta, t4().outputDeviceId);
    }
    getVideoDeviceId() {
        return nI(to, t4().videoDeviceId);
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
        let e = t4();
        return ev.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return e7.supports(ex.O5.SIDECHAIN_COMPRESSION) && t4().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return t4().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return t4().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tG && tG;
    }
    getOpenH264Enabled() {
        return (0, eg.isLinux)() && t4().openH264Enabled;
    }
    getLoopback() {
        return tY.size > 0;
    }
    getLoopbackReasons() {
        return tY;
    }
    getNoiseSuppression() {
        let e = t4();
        return ev.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = t4();
        return ev.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return t4().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return t4().noiseCancellation;
    }
    getHardwareEncoding() {
        return eQ;
    }
    getEnableSilenceWarning() {
        return t4().silenceWarning;
    }
    getDebugLogging() {
        return e7.getDebugLogging();
    }
    getQoS() {
        return t4().qos;
    }
    getAttenuation() {
        return t4().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return t4().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return t4().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return nd() && t4().automaticAudioSubsystem ? ex.rB.AUTOMATIC : e7.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return e7.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return t4().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eP.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.x.DEFAULT;
        return t4(e);
    }
    getState() {
        return {
            settingsByContext: e8,
            inputDevices: ts,
            outputDevices: ta,
            appSupported: tW,
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
        return t4().videoHook;
    }
    supportsVideoHook() {
        return e7.supports(ex.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = t4().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return e7.supports(ex.O5.EXPERIMENTAL_SOUNDSHARE) && T().satisfies(R.A?.os.release, eL.$x);
    }
    supportsHookSoundshare() {
        return (0, eg.isWindows)() && e7.supports(ex.O5.SOUNDSHARE) && T().satisfies(R.A?.os.release, eL.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = t4().useSystemScreensharePicker,
            n = (0, eg.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return e7.supports(ex.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return tJ;
    }
    getUseGamescopeCapture() {
        return tQ;
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
        return t4().modeOptions.vadKrispActivationThreshold ?? ej;
    }
    hasActiveCallKitCall() {
        return tX;
    }
    setHasActiveCallKitCall(e) {
        tX = e;
    }
    supportsScreenSoundshare() {
        return (0, eg.isMac)()
            ? e7.supports(ex.O5.SOUNDSHARE) && T().satisfies(R.A?.os.release, eL.P$) && nc()
            : (0, eg.isWindows)()
              ? e7.supports(ex.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, eg.isLinux)() && e7.supports(ex.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, eg.isWindows)()) {
            if (this.getBypassSystemInputProcessing()) return;
            return tU[this.getInputDeviceId()]?.active?.find((e) => e === eJ);
        }
        if ((0, eg.isMac)() || (0, eg.isIOS)()) return f;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.x.DEFAULT,
            t = this.supports(ex.O5.VIDEO)
                ? [{ rid: "100", type: e === ex.x.DEFAULT ? ex.mI.VIDEO : ex.mI.SCREEN, quality: ex.Y4 }]
                : [];
        return (
            this.isSimulcastSupported() &&
                e === ex.x.DEFAULT &&
                t.push({ rid: "50", type: ex.mI.VIDEO, quality: ex.Cl }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: (0, eg.isWeb)() };
        return e7.fetchAsyncResources(e);
    }
    startDavePreload() {
        if (!tk && ((tk = !0), (0, eg.isWeb)())) {
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
        return tK;
    }
}
function r7(e) {
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
(r = new r5(C.h, {
    VOICE_CHANNEL_SELECT: rk,
    VOICE_STATE_UPDATES: nk,
    CONNECTION_OPEN: nL,
    CONNECTION_CLOSED: nM,
    POST_CONNECTION_OPEN: nP,
    RTC_CONNECTION_STATE: nx,
    AUDIO_SET_TEMPORARY_SELF_MUTE: nU,
    AUDIO_TOGGLE_SELF_MUTE: nG,
    AUDIO_SET_SELF_MUTE: nF,
    AUDIO_TOGGLE_SELF_DEAF: nB,
    AUDIO_TOGGLE_LOCAL_MUTE: nH,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: nj,
    AUDIO_SET_LOCAL_VOLUME: nK,
    AUDIO_SET_LOCAL_PAN: n$,
    AUDIO_SET_MODE: nz,
    AUDIO_SET_INPUT_VOLUME: nq,
    AUDIO_SET_OUTPUT_VOLUME: nZ,
    AUDIO_SET_INPUT_DEVICE: nX,
    AUDIO_SET_OUTPUT_DEVICE: nQ,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: n0,
    AUDIO_SET_ECHO_CANCELLATION: n4,
    AUDIO_SET_SIDECHAIN_COMPRESSION: n5,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: n7,
    AUDIO_SET_LOOPBACK: n9,
    AUDIO_SET_NOISE_SUPPRESSION: rr,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: ri,
    AUDIO_SET_NOISE_CANCELLATION: rs,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: ra,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: rl,
    AUDIO_SET_DEBUG_LOGGING: ru,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: rc,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: ro,
    MEDIA_ENGINE_SET_VIDEO_HOOK: rd,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: r_,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: rf,
    AUDIO_SET_ATTENUATION: rp,
    AUDIO_SET_QOS: rh,
    MEDIA_ENGINE_DEVICES: n2,
    AUDIO_VOLUME_CHANGE: n3,
    AUDIO_RESET: rm,
    AUDIO_INPUT_DETECTED: rg,
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: rE,
    AUDIO_SET_SUBSYSTEM: rM,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rw,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rV,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rB,
    MEDIA_ENGINE_PERMISSION: rF,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rY,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nJ,
    MEDIA_ENGINE_INTERACTION_REQUIRED: n1,
    USER_SETTINGS_MODAL_INIT: rW,
    USER_SETTINGS_MODAL_SET_SECTION: rW,
    CERTIFIED_DEVICES_SET: rK,
    RPC_APP_CONNECTED: rU,
    RPC_APP_DISCONNECTED: rG,
    OVERLAY_INITIALIZE: nw,
    APP_STATE_UPDATE: rZ,
    SET_CHANNEL_BITRATE: rX,
    SET_VAD_PERMISSION: rA,
    SET_NATIVE_PERMISSION: rI,
    SET_CHANNEL_VIDEO_QUALITY_MODE: r0,
    MEDIA_ENGINE_SET_AEC_DUMP: r$,
    MEDIA_ENGINE_SET_OPENH264_ENABLED: rz,
    MEDIA_ENGINE_RESET_SETTINGS: rq,
    CHANNEL_DELETE: rQ,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rJ,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: r1,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: r2,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: r3,
    USER_SETTINGS_PROTO_UPDATE: nV,
    CLIPS_INIT: rH,
    CLIPS_SETTINGS_UPDATE: rj,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: r6,
    VOICE_FILTER_REQUEST_SWITCH: rO,
    VOICE_FILTER_LOOPBACK_TOGGLE: rR,
    VOICE_FILTER_APPLIED: rL,
    VOICE_FILTER_DOWNLOAD_FAILED: rb,
    VOICE_FILTER_APPLY_FAILED: rb,
    MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: rD,
})),
    (o = new z.A(e7, r));
let r8 = r;
