"use strict";
let r, i, s, a, o, l, u, c, d, _, f;
n.d(t, { Ay: () => r6 }), n(323874), n(14289), n(35956), n(321073), n(790599);
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
    j = n(638188),
    Y = n(269377),
    W = n(934341),
    K = n(658046),
    $ = n(621963),
    z = n(227493),
    q = n(264866),
    Z = n(927170),
    X = n(233232),
    Q = n(140175);
n(491642);
var J = n(801644),
    ee = n(223572),
    et = n(993628),
    en = n(886124),
    er = n(165479),
    ei = n(896014),
    es = n(765396),
    ea = n(75076),
    eo = n(674966),
    el = n(559633),
    eu = n(3527),
    ec = n(879172),
    ed = n(617617),
    e_ = n(340913),
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
    ts = { [eP.dx]: nE("No Input Devices") },
    ta = { [eP.dx]: nE("No Output Devices") },
    to = { [eP.dx]: nE("No Video Devices") },
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
    tD = null,
    tL = null,
    tw = null,
    tM = null,
    tx = !1,
    tP = !1,
    tk = !1,
    tU = null,
    tG = null,
    tF = !1;
eo.A.hasPermission(ew.iL.AUDIO, { showAuthorizationError: !1 }),
    eo.A.hasPermission(ew.iL.CAMERA, { showAuthorizationError: !1 });
let tV = !1,
    tB = new Set(),
    tH = tV,
    tj = new Set(),
    tY = {},
    tW = null,
    tK = null,
    t$ = !0,
    tz = !1,
    tq = new N.Ep(),
    tZ = !1,
    tX = !1,
    tQ = !1,
    tJ = !1;
function t0(e) {
    return (0, $.p)({ location: e }).hdrCaptureMode;
}
async function t1() {
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
function t2() {
    return null != tG ? tG : "u" > typeof window ? (tG = t1().then((e) => ((tU = e), e))) : Promise.resolve(!1);
}
function t3() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.x.DEFAULT,
        t = e8[e];
    return null == t && ((t = e4()), (e8[e] = t)), t;
}
function t6() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.x.DEFAULT,
        t = t3(e),
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
function t4(e) {
    let t = t6(e.context),
        n = t.mode;
    e.context === eP.x.DEFAULT && (0, Q.N)(!1, !1);
    let { showPTTSpeakingIndicator: r } = e_.A.getConfig({ location: "setInputMode" }),
        i = r && n === eD.TBI.PUSH_TO_TALK;
    e.setInputMode(n, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: !!i || t.modeOptions.autoThreshold,
        vadUseKrisp: (!!i || t.modeOptions.vadUseKrisp) && rg(),
        vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? ej,
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        vadDuringPreProcess: t.modeOptions.vadDuringPreProcess ?? !1,
        pttReleaseDelay: Math.round(t.modeOptions.delay),
    });
}
function t5(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eP.Hz;
    return E().clamp(e, 0, t);
}
function t7(e) {
    let t = t6(e.context),
        n = !te || t.mute || t.deaf;
    e.context === eP.x.DEFAULT
        ? (n = n || tu || tc || td || !eo.A.didHavePermission(ew.iL.AUDIO))
        : e.context === eP.x.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eP.x.DEFAULT && b.A.updateNativeMute();
}
function t8(e) {
    e !== tn && (null != s && e7.setGoLiveSource(null, tn), (tn = e));
}
function t9() {
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
        let t = t6().videoDeviceId;
        tf && t === eP.dx && th === eP.dx && tp !== eP.qe ? (t = tp) : (th = t),
            (tp = (tf = e) ? nA(to, t) : eP.qe),
            e7.setVideoInputDevice(tp);
    }
    if (((s = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = t0("MediaEngineStore go live"),
                i = t6().videoHook,
                s = no(),
                a = s ? (nl() ? eL.zl : eL.eg) : 0,
                o = !1;
            (0, eg.isWindows)() &&
                a >= eL.zl &&
                (o =
                    !0 === tK
                        ? er.q.getConfig({ location: "updateVideo" }).enabled
                        : en.d.getConfig({ location: "updateVideo" }).enabled),
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
                            allowScreenCaptureKit: nu(),
                            videoHookStaleFrameTimeoutMs: eW,
                            graphicsCaptureStaleFrameTimeoutMs: eK,
                            hdrCaptureMode: n,
                            enableGlobalFramePoolLock: (0, K.H)({ location: "updateVideo" }).enabled,
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
function ne(e) {
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
function nt() {
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
function nn(e) {
    let t = (0, B.F)({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function nr(e, t) {
    e.setAutomaticGainControl(nn(t));
}
function ni(e, t) {
    let n = (0, eu.A)(t, r.getSystemMicrophoneMode());
    n !== t && eU.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: i } = (0, B.F)({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(i);
    let { noiseCancellationAfterProcessing: s, vadAfterWebrtc: a } = (0, Z.$)({ location: "setNoiseCancellation" });
    e.setNoiseCancellationAfterProcessing(s), e.setVADAfterWebrtc(a);
}
function ns(e) {
    let t = t6(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(ev.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(ev.A.hasNoiseSuppression(n) || t.noiseSuppression),
        nr(e, ev.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        ni(e, t.noiseCancellation),
        e.setVoiceFilterId(tb),
        (0, eg.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function na() {
    tl.start(eZ, () => {
        eU.error("Device enumeration timed out"), eh.default.track(eD.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
    }),
        e7.on(y.bg.Connection, (e) => {
            t4(e), t7(e), ns(e);
            let t = t6();
            e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
                e.setQoS(t.qos),
                (0, eg.isWindows)()
                    ? (e.setExperimentFlag(eP.fd.H265_HARDWARE_ONLY, !0),
                      t2().then((t) => {
                          e.setExperimentFlag(eP.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                      }))
                    : (0, eg.isMac)() && e.setExperimentFlag(eP.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                (0, eg.isLinux)() && t.openH264Enabled && e.setExperimentFlag(eP.fd.USE_LIBOPENH264_DECODER, !0);
            let n = eC.A.getGuildId(),
                {
                    muteBeforeProcessing: i,
                    pttBeforeProcessing: a,
                    skipEncode: o,
                } = (null != n ? Y.A : j.A).getCurrentConfig(
                    { location: "setupMediaEngine", guildId: n ?? void 0 },
                    { autoTrackExposure: !0 },
                );
            i && e.setExperimentFlag(eP.fd.MUTE_BEFORE_PROCESSING, !0),
                a && e.setExperimentFlag(eP.fd.PTT_BEFORE_PROCESSING, !0),
                o && e.setExperimentFlag(eP.fd.SKIP_ENCODE, !0),
                (0, X.J)({ location: "setupMediaEngine" }).enabled &&
                    e.setExperimentFlag(eP.fd.LOW_LATENCY_RATE_CONTROL, !0);
            let l = !1,
                u = !0;
            e.setExperimentFlag(eP.fd.RESET_DECODER_ON_ERRORS, !0),
                l && e.setExperimentFlag(eP.fd.SOFTWARE_FALLBACK_ON_ERRORS, !0),
                u && e.setExperimentFlag(eP.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
            let { swallowVolumeOnlySpeakingEvents: c } = D.A.getConfig({ location: "MediaEngineStore" });
            if ((c && e.setExperimentFlag(eP.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === eP.x.STREAM)) {
                let t = nT(ta);
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
                let { enabled: t } = W.A.getConfig({ location: "MediaEngineStore" });
                e.setExperimentFlag(eP.fd.BROWSER_HEVC, t);
            }
            for (let n of ((0, eg.isWindows)() &&
                tW?.startsWith("AMD") &&
                (0, ei.F)("MediaEngineStore").enabled &&
                e.setExperimentFlag(eP.fd.WMF_GPU_ENCODE, !0),
            (0, eg.isWindows)() &&
                tW?.startsWith("Intel") &&
                (0, es.J)("MediaEngineStore").enabled &&
                e.setExperimentFlag(eP.fd.WMF_GPU_ENCODE, !0),
            (0, eg.isWindows)() &&
                tW?.startsWith("Qualcomm") &&
                (0, ei.F)("MediaEngineStore").enabled &&
                e.setExperimentFlag(eP.fd.WMF_GPU_ENCODE, !0),
            e7.setHasFullbandPerformance((0, P.A)()),
            e.setRemoteAudioHistory(1e3),
            (0, w.A)(r) && e.setClipsKeyFrameInterval(eP.X1),
            (t = t6(e.context)),
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
                        (0, k.QW)({ type: k.iy.NOISE_CANCELLER_ERROR, underlyingError: ne(e) }),
                        (tx = !0),
                        eh.default.track(eD.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        C.h.dispatch({ type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: !0 }),
                        C.h.dispatch({ type: "AUDIO_SET_NOISE_CANCELLATION", enabled: !1 }),
                        C.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e });
                }),
                e.on(y.yq.VoiceActivityDetectorError, (e) => {
                    eU.warn(`voiceactivitydetectorerror event: ${e}`),
                        (0, k.QW)({ type: k.iy.NOISE_CANCELLER_ERROR, underlyingError: ne(e) }),
                        eh.default.track(eD.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        C.h.dispatch({
                            type: "AUDIO_SET_MODE",
                            context: eP.x.DEFAULT,
                            mode: eD.TBI.VOICE_ACTIVITY,
                            options: { ...t6(eP.x.DEFAULT).modeOptions, vadUseKrisp: !1 },
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
            (tF = !0), C.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
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
            let t = et.A.getConfig({ location: "watchdog_timeout" }).enabled && null != R.A.processUtils.setCrashReason;
            eh.default.track(
                eD.HAw.VOICE_WATCHDOG_TIMEOUT,
                { minidump_submission_error: e, will_restart: t },
                { flush: !0 },
            ),
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
            let t = r3(e);
            null !== t && eh.default.track(eD.HAw.VOICE_QUEUE_METRICS, t);
        }),
        e7.setOnVideoContainerResized((e, t, n) => {
            C.h.wait(() =>
                C.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
            );
        }),
        n7(),
        n9(),
        o.reset(),
        (0, eR.w)().then((e) => {
            null != e && ((tW = e.gpu_brand), (tK = e.has_intel_hybrid_igpu));
        }),
        e7.on(y.bg.SystemMicrophoneModeChange, (e) => {
            (f = e), e7.eachConnection(ns), r.emitChange();
        });
}
function no() {
    return (0, eg.isWindows)() && T().satisfies(R.A?.os.release, eL.yg);
}
function nl() {
    return (0, eg.isWindows)() && T().satisfies(R.A?.os.release, eL.fG);
}
function nu() {
    return (0, eg.isMac)() && e7.supports(eP.O5.SCREEN_CAPTURE_KIT) && T().satisfies(R.A?.os.release, eL.e);
}
function nc() {
    return (
        (0, eg.isWindows)() &&
        e7.supports(eP.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        e7.supports(eP.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nd() {
    return e7.supports(eP.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function n_() {
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
        nh();
}
function nf(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eP.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = t3(t);
    return Object.assign(r, e), !__OVERLAY__ && n && v.w.set(eG, e8), r;
}
function np() {
    v.w.remove(eG), location.reload();
}
function nh() {
    let e = t6();
    e7.setAudioInputDevice(e.inputDeviceId),
        e7.setAudioOutputDevice(e.outputDeviceId),
        t9(),
        e7.setInputVolume(e.inputVolume),
        e7.setOutputVolume(e.outputVolume),
        e7.setAecDump(e.aecDumpEnabled),
        e7.setSidechainCompression(e.sidechainCompression),
        e7.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        e7.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        eI.Ay?.setOpenH264Enabled?.(e.openH264Enabled);
}
function nm() {
    te || e7.enable().then(() => C.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nE(e) {
    return { id: eP.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
}
function ng(e, t) {
    if (0 === e.length) {
        let e = nE(t);
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
function nA(e, t) {
    let n = e[t] ?? e[eP.dx] ?? E()(e).values().first();
    return null != n ? n.id : t;
}
function nI(e) {
    let t = ts;
    if (((ts = ng(e, ek.intl.string(ek.t["/QIjDA"]))), !E().isEqual(ts, t))) {
        let e = t6(),
            t = nA(ts, e.inputDeviceId);
        e7.setAudioInputDevice(t), e7.eachConnection(ns);
    }
}
function nT(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nS(e) {
    e7.eachConnection((t) => {
        t.context === eP.x.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function ny(e) {
    let t = ta;
    if (((ta = ng(e, ek.intl.string(ek.t.xlUg0v))), !E().isEqual(ta, t))) {
        let e = t6(),
            n = nA(ta, e.outputDeviceId);
        e7.setAudioOutputDevice(n);
        let r = nT(t),
            i = nT(ta);
        r !== i && nS(i);
    }
}
function nv(e) {
    tI = e.length > 0;
    let t = to;
    if (((to = ng(e, ek.intl.string(ek.t.WKWARY))), tf && !E().isEqual(to, t))) {
        let e = void 0 !== to[tp],
            n = tp === eP.dx && t[eP.dx]?.disabled,
            r = "Firefox" === A().name && "" === tp && t[tp]?.name === "Default" && !t[tp]?.disabled;
        t9(e || n || r);
    }
}
function nN() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = ed.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let r = n === eM.W.USER ? eP.x.DEFAULT : eP.x.STREAM,
            i = r === eP.x.STREAM ? eP.Cn : eP.Hz,
            s = t[n] ?? {},
            { localMutes: a, localVolumes: o } = t6(r);
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
        nf({ localMutes: a, localVolumes: o }, r);
    }
}
function nC(e) {
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
    let t = t6();
    nc() && (nd() ? rD(eP.rB.AUTOMATIC) : t.automaticAudioSubsystem && rL()),
        e7.supports(eP.O5.OFFLOAD_ADM_CONTROLS) && e7.setOffloadAdmControls(!0),
        (0, eg.isIOS)() &&
            (0, z.Y)("handleConnectionOpen").enabled &&
            e7.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
        (0, ef.Lb)({ location: "MediaEngineStore", autoTrackExposure: !1 }) &&
            null !== t.mostRecentlyRequestedVoiceFilter &&
            (0, eg.isDesktop)() &&
            (ep.A.getLastInitAttemptMayHaveCrashed()
                ? (C.h.dispatch({ type: "AUDIO_SET_SELF_MUTE", mute: !0, context: eP.x.DEFAULT, playSoundEffect: !0 }),
                  nf({ mostRecentlyRequestedVoiceFilter: null }))
                : n(342887).md()),
        nN();
}
function nb(e) {
    let { mediaEngineState: t } = e;
    (e8 = t.settingsByContext),
        (ts = t.inputDevices),
        (ta = t.outputDevices),
        (tY = t.appSupported),
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
            nm();
            break;
        case eD.S7L.RTC_CONNECTING:
            (tS = !1), (l = void 0), (u = void 0), (tT = !1), (tz = !1), tq.stop(), ty.stop(), o.reset();
            break;
        case eD.S7L.RTC_CONNECTED:
            t9();
            break;
        case eD.S7L.DISCONNECTED:
            nB(), nH();
    }
}
function nM(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (tu = t.mute || t.suppress), (t_ = t.deaf), e7.eachConnection(t7);
            let e = null != t.guildId && null != t.channelId && null != tM && tM !== t.channelId,
                n = !tv && null == t.channelId;
            return t9(!e && !n && tf), (tM = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== eS.default.getId() || null != eC.A.getChannelId() || t9(!1, null), e;
    }, !1);
}
function nx(e) {
    let { mute: t } = e;
    (tc = t), e7.eachConnection(t7);
}
function nP(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = t6(t);
    if (t === eP.x.DEFAULT && (eo.A.requestPermission(ew.iL.AUDIO), td)) return !1;
    (r = !i && !r) || (i = !1), n || (tm = !0), nf({ mute: r, deaf: i }, t), e7.eachConnection(t7);
}
function nk(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    nf({ mute: n }, t), r || (tm = !0), e7.eachConnection(t7);
}
function nU(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== eM.oD.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    nN(!0);
}
function nG(e) {
    let { context: t } = e;
    nf({ deaf: !t6(t).deaf }, t), e7.eachConnection(t7);
}
function nF(e) {
    let { context: t, userId: n } = e;
    if (n === eS.default.getId()) return;
    let { localMutes: r } = t6(t);
    r[n] ? delete r[n] : (r[n] = !0),
        nf({ localMutes: r }, t),
        e7.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nV(e) {
    let { context: t, userId: n, videoToggleState: r, persist: i, isAutomatic: s } = e;
    h()(!(i && s), "These are not allowed to both be true.");
    let a = r === eD.bb8.DISABLED,
        { disabledLocalVideos: o } = t6(t),
        l = o[n] ?? !1,
        u = tB.has(n),
        c = r === eD.bb8.AUTO_ENABLED || r === eD.bb8.MANUAL_ENABLED;
    eU.info(`disableVideo=${a} currentlyDisabled=${l} currentlyAutoDisabled=${u}, isVideoShown=${c}`),
        h()(!(u && !l), "If you are auto-disabled, then you are also disabled.");
    let d = a !== l,
        _ = t === eP.x.DEFAULT,
        f = s && d && _,
        p = i && d && _;
    eU.info(`changed=${d} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${f} isManualToggleByUser=${p}`);
    let { videoToggleStateMap: m } = t6(t);
    if (
        (m[n] === eD.bb8.AUTO_PROBING &&
            r === eD.bb8.AUTO_ENABLED &&
            (0, ea.A)(n, a ? eP.Al.AUTO_DISABLE : eP.Al.AUTO_ENABLE, c),
        (m[n] = r),
        nf({ videoToggleStateMap: m }, t, i),
        r === eD.bb8.AUTO_PROBING
            ? eC.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
            : eC.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
        tH ||
            (eU.info(`isAutoDisableAllowed=${tH} - disabling VideoHealthManager`),
            eC.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
        f)
    ) {
        if ((!a && !u) || (a && !tH)) return;
        (0, ea.A)(n, a ? eP.Al.AUTO_DISABLE : eP.Al.AUTO_ENABLE, c), a ? tB.add(n) : tB.delete(n);
    } else
        p &&
            (u && !a
                ? (eU.info("disallowing auto-disable for this session because of manual override by user"),
                  (tH = !1),
                  eC.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                  (0, ea.A)(n, eP.Al.MANUAL_REENABLE, c))
                : (0, ea.A)(n, a ? eP.Al.MANUAL_DISABLE : eP.Al.MANUAL_ENABLE, c));
    _ && !a && tB.delete(n),
        a ? (o[n] = !0) : delete o[n],
        nf({ disabledLocalVideos: o }, t, i),
        e7.eachConnection((e) => e.setLocalVideoDisabled(n, o[n] ?? !1), t);
}
function nB() {
    if (0 === tB.size) return;
    let e = eP.x.DEFAULT,
        { disabledLocalVideos: t } = t6(e);
    tB.forEach((n) => {
        h()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            e7.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tB.clear(),
        nf({ disabledLocalVideos: t }, e, !1);
}
function nH() {
    let e = eP.x.DEFAULT,
        { videoToggleStateMap: t } = t6(e);
    for (let [e, n] of Object.entries(t)) n === eD.bb8.AUTO_PROBING && delete t[e];
    nf({ videoToggleStateMap: t }, e, !1);
}
function nj(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === eS.default.getId()) return;
    let i = t === eP.x.STREAM ? eP.Cn : eP.Hz,
        { localVolumes: s } = t6(t);
    r === i ? delete s[n] : (s[n] = r), nf({ localVolumes: s }, t), e7.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function nY(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: s } = t6(t);
    (s[n] = { left: r, right: i }), nf({ localPans: s }, t), e7.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function nW(e) {
    let { context: t, mode: n, options: r } = e;
    nf({ mode: n, modeOptions: { ...r, updatedAt: Date.now() } }, t), e7.eachConnection(t4);
}
function nK(e) {
    let { volume: t } = e;
    nf({ inputVolume: t5(t) }), e7.setInputVolume(t);
}
function n$(e) {
    let { volume: t } = e;
    nf({ outputVolume: t }), e7.setOutputVolume(t);
}
function nz(e) {
    let { id: t } = e;
    (t = nA(ts, t)),
        (tr = performance.now()),
        nf({ inputDeviceId: t }),
        e7.setAudioInputDevice(t),
        e7.eachConnection(ns),
        (l = void 0),
        (u = void 0),
        tq.stop(),
        (tz = !1);
    let { resetSilenceWarningOnDeviceChange: n } = J.A.getConfig({ location: "MediaEngineStore.handleSetInputDevice" });
    n && ((tT = !1), o.reset());
}
function nq(e) {
    let { id: t } = e;
    nf({ outputDeviceId: (t = nA(ta, t)) }), e7.setAudioOutputDevice(t);
}
function nZ(e) {
    let { id: t } = e;
    nf({ videoDeviceId: (t = nA(to, t)) }), t9();
}
function nX(e) {
    let { inputProfile: t } = e;
    nf({ activeInputProfile: t });
    let n = t6();
    e7.eachConnection((e) => {
        t4(e), ns(e);
    }),
        e7.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        n8();
}
function nQ(e) {
    return tt !== e.required && ((tt = e.required), e.required || e7.interact(), !0);
}
function nJ(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    nI(t), ny(n), nv(r);
}
function n0(e) {
    let { inputVolume: t, outputVolume: n } = e;
    nf({ inputVolume: t5(t), outputVolume: n });
}
function n1(e) {
    let t = t6(),
        n = e7.getAudioSubsystem(),
        i = e7.getAudioLayer(),
        s = nA(ts, t.inputDeviceId),
        a = ts[s]?.name,
        o = (0, eu.A)(t.noiseCancellation, r.getSystemMicrophoneMode());
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
    let t = nf({ echoCancellation: e.enabled });
    e7.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), n8(), n1(e.location);
}
function n3(e) {
    n4(e.enabled);
}
function n6(e) {
    let t = nf({ sidechainCompressionStrength: e.strength });
    e7.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function n4(e) {
    let t = nf({ sidechainCompression: e });
    e7.setSidechainCompression(t.sidechainCompression);
}
function n5(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tj.add(n) : tj.delete(n), n7(), n8();
}
function n7() {
    let e = !tj.has("voice_filter_preview") && !tj.has("mic_test");
    e7.setMaybePreprocessMute(e);
}
function n8() {
    let e = t6(),
        t = tj.size > 0,
        n = e.inputDeviceId,
        r = ev.A.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        s = ev.A.hasNoiseSuppression(n) || e.noiseSuppression,
        a = nn(ev.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        o = e.noiseCancellation,
        l = null !== tb,
        u = tj.has("voice_filter") && 1 === tj.size;
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
async function n9() {
    if (!e7.supports(eP.O5.VAAPI)) return;
    let e = 4098;
    if (window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let t = await window.DiscordNative.processUtils.getSystemInfo();
    (t.electronGPUInfo?.gpuDevice ?? []).some((t) => t.vendorId === e) &&
        ((tQ = !0), (tX = e7.supports(eP.O5.GAMESCOPE_CAPTURE)));
}
function re(e) {
    let t = nf({ noiseSuppression: e.enabled });
    e7.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), n8(), n1(e.location);
}
function rt(e) {
    let t = nf({ automaticGainControl: e.enabled });
    e7.eachConnection((e) => nr(e, t.automaticGainControl)), n8(), n1(e.location);
}
function rn(e) {
    let t = nf({ noiseCancellation: e.enabled });
    e7.eachConnection((e) => ni(e, t.noiseCancellation)), n8(), n1(e.location);
}
function rr(e) {
    el.A.setKrispModelOverride(e.model), (_ = e.model), n8();
}
function ri(e) {
    (0, eg.isWeb)() || ((tO = e.enabled), e7.setNoiseCancellationEnableStats?.(e.enabled));
}
function rs(e) {
    nf({ silenceWarning: e.enabled });
}
function ra(e) {
    e7.setDebugLogging(e.enabled);
}
function ro(e) {
    let { level: t } = e;
    (d = t), el.A.setKrispSuppressionLevel(t);
}
function rl(e) {
    nf({ videoHook: e.enabled });
}
function ru(e) {
    nf({ experimentalSoundshare2: e.enabled });
}
function rc(e) {
    let { enabled: t } = e;
    nf({ useSystemScreensharePicker: t });
}
function rd(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = nf({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r });
    e7.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function r_(e) {
    let { enabled: t } = e;
    nf({ qos: t }), e7.eachConnection((e) => e.setQoS(t));
}
function rf() {
    np();
}
function rp(e) {
    let { osVolume: t, osMuted: n } = e;
    (u = t), (l = n);
}
function rh(e) {
    let { inputDetected: t } = e;
    if (null == t) return !1;
    if (((tS = !0 !== tT && !t), t)) (tT = !0), (tz = !1), tq.stop(), ty.stop();
    else if (t6().mode === eD.TBI.VOICE_ACTIVITY && tT) {
        let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = J.A.getConfig({
            location: "MediaEngineStore.handleInputDetected",
        });
        e &&
            tq.start(eX, () => {
                eh.default.track(eD.HAw.HARDWARE_MUTE_GUESSED, {
                    input_device_name: ts[nA(ts, t6().inputDeviceId)]?.name,
                    rtc_connection_id: eC.A.getRTCConnectionId(),
                }),
                    (tz = !0),
                    r.emitChange();
            }),
            null != t &&
                ty.start(t * eE.A.Millis.MINUTE, () => {
                    (tT = !1), o.reset();
                });
    }
}
function rm(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === td) return !1;
    (td = n), e7.eachConnection(t7);
}
function rE(e) {
    let { state: t, permissionType: n } = e,
        r = t === ew.hL.ACCEPTED;
    switch (n) {
        case ew.iL.AUDIO:
            (tF = !0), e7.eachConnection(t7);
            break;
        case ew.iL.CAMERA:
            !r && tf && t9(!1);
            break;
        default:
            return !1;
    }
}
function rg() {
    return tC || !1;
}
async function rA() {
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
        let e = eP.CO.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eP.CO.INITIALIZED : n;
        }
        eh.default.track(eD.HAw.VOICE_PROCESSING, { noise_canceller_error: e }), nf({ noiseCancellation: !1 });
    } finally {
        tN = !1;
    }
}
function rI() {
    return (0, eg.isWindows)() || (0, eg.isLinux)() || (0, eg.isMac)();
}
function rT() {
    !rI() || __OVERLAY__ || tN || tC
        ? (0, eg.isWeb)() && e7.supports(eP.O5.NOISE_CANCELLATION)
            ? ((tC = !0), r.emitChange())
            : (0, eg.isWeb)() && nf({ noiseCancellation: !1 })
        : ((tN = !0), rA());
}
async function rS() {
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
function ry() {
    (0, eg.isLinux)() && rS();
}
function rv(e) {
    let { enabled: t } = e;
    eh.default.track(eD.HAw.VOICE_FILTER_PLAYBACK_TOGGLED, { active_voice_filter_id: tb ?? null, enabled: t }),
        nf({ voiceFilterPlaybackEnabled: t });
}
function rN(e) {
    let { newVoiceFilterId: t } = e;
    nf({ mostRecentlyRequestedVoiceFilter: t }), e7.eachConnection((e) => e.setVoiceFilterId(t));
}
function rC() {
    nf({ mostRecentlyRequestedVoiceFilter: null });
}
function rR(e) {
    let { voiceFilterId: t } = e;
    (tL = tb), (tw = tD), (tb = t), (tD = null === t ? null : Date.now());
}
function rO(e) {
    let t = e.bypassEnabled;
    nf({ bypassSystemInputProcessing: t }), e7.setAudioInputBypassSystemProcessing(t), n1(e.location);
}
function rb(e) {
    rD(e.subsystem);
}
function rD(e) {
    e === eP.rB.AUTOMATIC
        ? (nf({ automaticAudioSubsystem: !0 }), rL())
        : (nf({ automaticAudioSubsystem: !1 }), e7.setAudioSubsystem(e));
}
function rL() {
    e7.queueAudioSubsystem(eP.rB.EXPERIMENTAL);
}
function rw(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && t9(i, null), null != t || null == n)) {
        tv = !1;
        return;
    }
    if (tv) return;
    tv = !0;
    let s = t6();
    (s.mute || s.deaf) && (nf({ deaf: !1, mute: !1 }), e7.eachConnection(t7));
}
function rM(e) {
    let { application: t } = e;
    e9.add(t.id);
}
function rx(e) {
    let { application: t } = e;
    e9.delete(t.id);
}
function rP(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (te = !1), e7.eachConnection(t7);
                break;
            case "video":
                t9(!1);
        }
}
function rk(e) {
    (te = e.enabled), e.unmute && nf({ mute: !1, deaf: !1 }), e7.eachConnection(t7);
}
function rU(e) {
    let { enabled: t } = e;
    eo.A.requestPermission(ew.iL.CAMERA), t9(t);
}
function rG(e) {
    let { sourceId: t, applicationName: n, quality: i } = e;
    if (!(0, M.Ao)() || null == R.A) return !1;
    let s = null,
        o = null,
        l = em.A.getPidFromDesktopSource(t);
    ({ soundshareId: s, soundshareSession: o } = nC(l));
    let u = { desktopSource: { id: t, sourcePid: l, soundshareId: s, soundshareSession: o }, quality: i };
    null != a &&
        (e7.setClipsSource(null),
        (0, eg.isWindows)() && null != a.desktopSource.soundshareId && O.c1(a.desktopSource.soundshareId)),
        null != s && nR(s, o),
        (a = u);
    let c = t0("MediaEngineStore clips"),
        d = t6().videoHook;
    e7.setClipsSource({
        desktopDescription: {
            id: a.desktopSource.id,
            soundshareId: a.desktopSource.soundshareId,
            useVideoHook: d,
            useGraphicsCapture: no(),
            useCaptureDeviceForEncode: !1,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: nu(),
            videoHookStaleFrameTimeoutMs: eW,
            graphicsCaptureStaleFrameTimeoutMs: eK,
            hdrCaptureMode: c,
        },
        quality: i,
        applicationName: n,
    });
}
function rF(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((a = null), e7.setClipsSource(null));
}
function rV(e) {
    let { settings: t } = e;
    if (t?.desktopSettings != null) {
        let e = null,
            n = null,
            { sourceId: r, sound: i } = t.desktopSettings,
            s = t.context ?? eP.x.DEFAULT,
            a = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
            o = !1 === i ? null : em.A.getPidFromDesktopSource(r);
        eg.isPlatformEmbedded &&
            !0 === i &&
            (({ soundshareId: e, soundshareSession: n } = nC(o)), null != e && nR(e, n)),
            t8(s),
            t9(s === eP.x.STREAM && tf, {
                desktopSource: { id: r, sourcePid: o, soundshareId: e, soundshareSession: n },
                quality: { resolution: a.resolution, frameRate: a.frameRate },
            });
    } else if (t?.cameraSettings != null) {
        let e = t.context ?? eP.x.DEFAULT,
            { videoDeviceGuid: n, audioDeviceGuid: r } = t.cameraSettings,
            i = e === eP.x.STREAM && tf,
            s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
        t9(i, {
            cameraSource: { videoDeviceGuid: n, audioDeviceGuid: r },
            quality: { resolution: s.resolution, frameRate: s.frameRate },
        });
    } else t9(tf, null);
}
function rB(e) {
    let { section: t } = e;
    return t === eD.nc_.VOICE && nm(), !1;
}
function rH() {
    return e7.eachConnection(ns), !1;
}
function rj(e) {
    let { enabled: t } = e,
        n = nf({ aecDumpEnabled: t });
    e7.setAecDump(n.aecDumpEnabled);
}
function rY(e) {
    let { enabled: t } = e;
    nf({ openH264Enabled: t }), eI.Ay?.setOpenH264Enabled?.(t);
}
function rW(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (e8 = Object.values(eP.x).reduce((e, n) => {
        let r = n,
            i = e4();
        return (e[r] = E().merge(i, t[r])), e;
    }, {})),
        v.w.set(eG, e8),
        nh();
}
function rK(e) {
    let { state: t } = e,
        n = G.A.isEnabled();
    if (t === eD.g6G.BACKGROUND && tf && !n) (tA = !0), t9(!1);
    else {
        if (t !== eD.g6G.ACTIVE || !tA) return !1;
        (tA = !1), t9(!0);
    }
    return !0;
}
function r$(e) {
    e7.eachConnection((t) => t.setBitRate(e.bitrate));
}
function rz() {
    if ((!tf && null == s) || null != eC.A.getRTCConnectionId()) return !1;
    t9(!1, null);
}
function rq() {
    return !!tx && ((tx = !1), !0);
}
function rZ(e) {
    e7.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function rX(e) {
    let { settings: t } = e;
    e7.applyMediaFilterSettings(t).finally(() => {
        (tP = !1), r.emitChange();
    });
}
function rQ() {
    tP = !0;
}
function rJ() {
    tP = !1;
}
function r0(e) {
    t$ = e.enabled;
}
function r1() {
    if ((0, eg.isDesktop)() && eg.isPlatformEmbedded && !tJ) {
        tJ = !0;
        let e = async () => {
            let t = await new Promise((e) => {
                eI.Ay.pollQueueMetrics((t) => {
                    e(t);
                });
            });
            t.periodMs = eP.tl;
            let n = r3(t);
            null !== n && eh.default.track(eD.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, eP.tl);
        };
        setTimeout(e, eP.tl);
    }
}
class r2 extends S.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        na(),
            n_(),
            rT(),
            ry(),
            nH(),
            r1(),
            (0, eg.isWindows)() && eg.isPlatformEmbedded && nt(),
            (tY = {
                [eP.O5.VIDEO]: e7.supports(eP.O5.VIDEO),
                [eP.O5.DESKTOP_CAPTURE]: e7.supports(eP.O5.DESKTOP_CAPTURE),
                [eP.O5.HYBRID_VIDEO]: e7.supports(eP.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eS.default, ey.A, ev.A, eN.A, L.A, U.A, eC.A, F.Ay, ed.A, eO.default, eb.A, ep.A);
    }
    supports(e) {
        return e7.supports(e);
    }
    supportsInApp(e) {
        return tY[e] || e7.supports(e);
    }
    isSupported() {
        return e7.supported();
    }
    isNoiseSuppressionSupported() {
        return e7.supports(eP.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return rg();
    }
    isNoiseCancellationError() {
        return tx;
    }
    isAutomaticGainControlSupported() {
        return e7.supports(eP.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nd() && (e7.supports(eP.O5.LEGACY_AUDIO_SUBSYSTEM) || e7.supports(eP.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return e7.supports(eP.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === e7.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return rg();
    }
    isAecDumpSupported() {
        return e7.supports(eP.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return e7.supports(eP.O5.VIDEO) && e7.supports(eP.O5.SIMULCAST);
    }
    getAecDump() {
        return t6().aecDumpEnabled;
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
            t6(e).mute ||
            !eo.A.didHavePermission(ew.iL.AUDIO) ||
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
            t = tz && "voice_isolation" !== this.getSystemMicrophoneMode() && t6(e).mode === eD.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (ev.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return t$;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.x.DEFAULT;
        return !this.isSupported() || t6(e).deaf;
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
        return e !== eS.default.getId() && (t6(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return e7.supports(eP.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eP.x.DEFAULT;
        return t6(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eP.x.DEFAULT;
        return t6(t).videoToggleStateMap[e] ?? eD.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eP.x.DEFAULT;
        return t === eP.x.DEFAULT && tB.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.x.DEFAULT;
        return e === eP.x.DEFAULT && tB.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tP;
    }
    isNativeAudioPermissionReady() {
        return tF;
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
            n = t6(t).localPans[e];
        return null != n ? n : eY;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eP.x.DEFAULT,
            n = t === eP.x.STREAM ? eP.Cn : eP.Hz,
            r = t6(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return t6().inputVolume;
    }
    getOutputVolume() {
        return t6().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.x.DEFAULT;
        return t6(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.x.DEFAULT;
        return t6(e).modeOptions;
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
        return t6().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return t6().voiceFilterPlaybackEnabled;
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
        return nA(ts, t6().inputDeviceId);
    }
    getOutputDeviceId() {
        return nA(ta, t6().outputDeviceId);
    }
    getVideoDeviceId() {
        return nA(to, t6().videoDeviceId);
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
        let e = t6();
        return ev.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return e7.supports(eP.O5.SIDECHAIN_COMPRESSION) && t6().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return t6().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return t6().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tU && tU;
    }
    getOpenH264Enabled() {
        return (0, eg.isLinux)() && t6().openH264Enabled;
    }
    getLoopback() {
        return tj.size > 0;
    }
    getLoopbackReasons() {
        return tj;
    }
    getNoiseSuppression() {
        let e = t6();
        return ev.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = t6();
        return ev.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return t6().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return t6().noiseCancellation;
    }
    getHardwareEncoding() {
        return eQ;
    }
    getEnableSilenceWarning() {
        return t6().silenceWarning;
    }
    getDebugLogging() {
        return e7.getDebugLogging();
    }
    getQoS() {
        return t6().qos;
    }
    getAttenuation() {
        return t6().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return t6().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return t6().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return nc() && t6().automaticAudioSubsystem ? eP.rB.AUTOMATIC : e7.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return e7.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return t6().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === ex.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.x.DEFAULT;
        return t6(e);
    }
    getState() {
        return {
            settingsByContext: e8,
            inputDevices: ts,
            outputDevices: ta,
            appSupported: tY,
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
        return t6().videoHook;
    }
    supportsVideoHook() {
        return e7.supports(eP.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = t6().experimentalSoundshare2;
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
            t = t6().useSystemScreensharePicker,
            n = (0, eg.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return e7.supports(eP.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return tQ;
    }
    getUseGamescopeCapture() {
        return tX;
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
        return t6().modeOptions.vadKrispActivationThreshold ?? ej;
    }
    hasActiveCallKitCall() {
        return tZ;
    }
    setHasActiveCallKitCall(e) {
        tZ = e;
    }
    supportsScreenSoundshare() {
        return (0, eg.isMac)()
            ? e7.supports(eP.O5.SOUNDSHARE) && T().satisfies(R.A?.os.release, eL.P$) && nu()
            : (0, eg.isWindows)()
              ? e7.supports(eP.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, eg.isLinux)() && e7.supports(eP.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        return (0, eg.isWindows)()
            ? this.getInputDevices()[this.getInputDeviceId()]?.effects?.find((e) => e === eJ)
            : (0, eg.isMac)() || (0, eg.isIOS)()
              ? f
              : void 0;
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
        return tW;
    }
}
function r3(e) {
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
(r = new r2(C.h, {
    VOICE_CHANNEL_SELECT: rw,
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
    AUDIO_SET_NOISE_SUPPRESSION: re,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: rt,
    AUDIO_SET_NOISE_CANCELLATION: rn,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: rr,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: rs,
    AUDIO_SET_DEBUG_LOGGING: ra,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: ro,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: ri,
    MEDIA_ENGINE_SET_VIDEO_HOOK: rl,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: ru,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: rc,
    AUDIO_SET_ATTENUATION: rd,
    AUDIO_SET_QOS: r_,
    MEDIA_ENGINE_DEVICES: nJ,
    AUDIO_VOLUME_CHANGE: n0,
    AUDIO_RESET: rf,
    AUDIO_INPUT_DETECTED: rh,
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: rp,
    AUDIO_SET_SUBSYSTEM: rb,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rO,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rk,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rU,
    MEDIA_ENGINE_PERMISSION: rP,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rV,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nZ,
    MEDIA_ENGINE_INTERACTION_REQUIRED: nQ,
    USER_SETTINGS_MODAL_INIT: rB,
    USER_SETTINGS_MODAL_SET_SECTION: rB,
    CERTIFIED_DEVICES_SET: rH,
    RPC_APP_CONNECTED: rM,
    RPC_APP_DISCONNECTED: rx,
    OVERLAY_INITIALIZE: nb,
    APP_STATE_UPDATE: rK,
    SET_CHANNEL_BITRATE: r$,
    SET_VAD_PERMISSION: rm,
    SET_NATIVE_PERMISSION: rE,
    SET_CHANNEL_VIDEO_QUALITY_MODE: rZ,
    MEDIA_ENGINE_SET_AEC_DUMP: rj,
    MEDIA_ENGINE_SET_OPENH264_ENABLED: rY,
    MEDIA_ENGINE_RESET_SETTINGS: rW,
    CHANNEL_DELETE: rz,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rq,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rX,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rQ,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rJ,
    USER_SETTINGS_PROTO_UPDATE: nU,
    CLIPS_INIT: rG,
    CLIPS_SETTINGS_UPDATE: rF,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: r0,
    VOICE_FILTER_REQUEST_SWITCH: rN,
    VOICE_FILTER_LOOPBACK_TOGGLE: rv,
    VOICE_FILTER_APPLIED: rR,
    VOICE_FILTER_DOWNLOAD_FAILED: rC,
    VOICE_FILTER_APPLY_FAILED: rC,
})),
    (o = new q.A(e7, r));
let r6 = r;
