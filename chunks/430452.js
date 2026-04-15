"use strict";
let r, i, s, a, o, l, u, c, d, _, f;
n.d(t, { Ay: () => r2 }), n(323874), n(14289), n(35956), n(321073), n(790599);
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
    H = n(582220),
    j = n(448215),
    Y = n(934341),
    W = n(374480),
    K = n(658046),
    $ = n(621963),
    z = n(227493),
    q = n(264866),
    Z = n(927170),
    X = n(342092),
    Q = n(233232),
    J = n(140175);
n(491642);
var ee = n(801644),
    et = n(223572),
    en = n(147490),
    er = n(993628),
    ei = n(886124),
    es = n(165479),
    ea = n(896014),
    eo = n(765396),
    el = n(75076),
    eu = n(674966),
    ec = n(559633),
    ed = n(3527),
    e_ = n(90361),
    ef = n(879172),
    ep = n(617617),
    eh = n(499156),
    em = n(954571),
    eE = n(353835),
    eg = n(927813),
    eA = n(723702),
    eI = n(728458),
    eT = n(837921),
    eS = n(350535),
    ey = n(961350),
    ev = n(131319),
    eN = n(347481),
    eC = n(734057),
    eR = n(383501),
    eO = n(851581),
    eb = n(287809),
    eD = n(117549),
    eL = n(652215),
    ew = n(502075),
    eM = n(765682),
    eP = n(355097),
    ex = n(509381),
    ek = n(731854),
    eU = n(985018);
let eG = new P.A("MediaEngineStore"),
    eF = "MediaEngineStore",
    eV = 4,
    eB = 1,
    eH = 1,
    ej = 1,
    eY = 0.5,
    eW = { left: 1, right: 1 },
    eK = 500,
    e$ = 5 * eg.A.Millis.SECOND,
    ez = -60,
    eq = 100,
    eZ = 2 * eg.A.Millis.SECOND,
    eX = 30 * eg.A.Millis.SECOND,
    eQ = +eg.A.Millis.MINUTE,
    eJ = !0,
    e0 = "deep_noise_suppression",
    e1 = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2",
    e2 = "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f",
    e3 = 0,
    e6 = null;
function e4() {
    return {
        mode: eL.TBI.VOICE_ACTIVITY,
        modeOptions: {
            threshold: ez,
            autoThreshold: eA.isPlatformEmbedded || __OVERLAY__,
            vadUseKrisp: !0,
            vadKrispActivationThreshold: eY,
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
        inputVolume: ek.Hz,
        outputVolume: ek.Hz,
        inputDeviceId: ek.dx,
        outputDeviceId: ek.dx,
        videoDeviceId: ek.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: e7.supports(ek.O5.VIDEO_HOOK),
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
            mode: eL.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    e7 = (0, y.hB)((0, y.WI)());
eG.enableNativeLogger(!0);
let e8 = {},
    e9 = new Set([ek.x.DEFAULT]),
    te = e7.supports(ek.O5.AUTO_ENABLE),
    tt = !1,
    tn = ek.x.STREAM,
    tr = performance.now(),
    ti = null,
    ts = null,
    ta = { [ek.dx]: nm("No Input Devices") },
    to = { [ek.dx]: nm("No Output Devices") },
    tl = { [ek.dx]: nm("No Video Devices") },
    tu = new N.Ep(),
    tc = !1,
    td = !1,
    t_ = !1,
    tf = !1,
    tp = !1,
    th = ek.qe,
    tm = ek.qe,
    tE = !1,
    tg = !1,
    tA = new N.Ep(),
    tI = !1,
    tT = !1,
    tS = !1,
    ty = !1,
    tv = new N.Ep(),
    tN = !1,
    tC = !1,
    tR = !1,
    tO = [],
    tb = !1,
    tD = null,
    tL = !1,
    tw = !1,
    tM = !1,
    tP = {},
    tx = null,
    tk = null,
    tU = !1;
eu.A.hasPermission(eM.iL.AUDIO, { showAuthorizationError: !1 }),
    eu.A.hasPermission(eM.iL.CAMERA, { showAuthorizationError: !1 });
let tG = !1,
    tF = new Set(),
    tV = tG,
    tB = new Set(),
    tH = {},
    tj = null,
    tY = null,
    tW = !0,
    tK = !1,
    t$ = new N.Ep(),
    tz = !1,
    tq = !1,
    tZ = !1,
    tX = !1;
function tQ(e) {
    return (0, $.p)({ location: e }).hdrCaptureMode;
}
async function tJ() {
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
function t0() {
    return null != tk ? tk : "u" > typeof window ? (tk = tJ().then((e) => ((tx = e), e))) : Promise.resolve(!1);
}
function t1() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.x.DEFAULT,
        t = e8[e];
    return null == t && ((t = e4()), (e8[e] = t)), t;
}
function t2() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.x.DEFAULT,
        t = t1(e),
        n = e5[t.activeInputProfile ?? ex.m.CUSTOM],
        r = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}) };
    if (
        (null == r.vadDuringPreProcess && (r.vadDuringPreProcess = (0, et.R)({ location: "getSettings" }).enabled),
        (null == r.vadKrispActivationThreshold && !0 === n.automaticGainControl) || !0 === t.automaticGainControl)
    ) {
        let e = (0, B.F)({ location: "getSettings" });
        null != e.vadKrispActivationThreshold && (r.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return { ...t, ...n, modeOptions: r };
}
function t3(e) {
    let t = t2(e.context),
        n = t.mode;
    e.context === ek.x.DEFAULT && (0, J.N)(!1, !1);
    let { showPTTSpeakingIndicator: r } = eh.A.getConfig({ location: "setInputMode" }),
        i = r && n === eL.TBI.PUSH_TO_TALK;
    e.setInputMode(n, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: !!i || t.modeOptions.autoThreshold,
        vadUseKrisp: (!!i || t.modeOptions.vadUseKrisp) && rA(),
        vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? eY,
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        vadDuringPreProcess: t.modeOptions.vadDuringPreProcess ?? !1,
        pttReleaseDelay: Math.round(t.modeOptions.delay),
    });
}
function t6(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ek.Hz;
    return E().clamp(e, 0, t);
}
function t4(e) {
    let t = t2(e.context),
        n = !te || t.mute || t.deaf;
    e.context === ek.x.DEFAULT
        ? (n = n || tc || td || t_ || !eu.A.didHavePermission(eM.iL.AUDIO))
        : e.context === ek.x.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === ek.x.DEFAULT && b.A.updateNativeMute();
}
function t5(e) {
    e !== tn && (null != s && e7.setGoLiveSource(null, tn), (tn = e));
}
function t7() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tp,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
        n = s;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, eA.isWindows)()
                ? O.c1(n.desktopSource.soundshareId)
                : null != n.desktopSource.sourcePid && t2().videoHook && O.c1(n.desktopSource.sourcePid),
            e7.setGoLiveSource(null, tn)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            e7.setGoLiveSource(null, tn),
        tp || e)
    ) {
        let t = t2().videoDeviceId;
        tp && t === ek.dx && tm === ek.dx && th !== ek.qe ? (t = th) : (tm = t),
            (th = (tp = e) ? ng(tl, t) : ek.qe),
            e7.setVideoInputDevice(th);
    }
    if (((s = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = tQ("MediaEngineStore go live"),
                i = t2().videoHook,
                s = na(),
                a = s ? (no() ? ew.zl : ew.eg) : 0,
                o = !1;
            (0, eA.isWindows)() &&
                a >= ew.zl &&
                (o =
                    !0 === tY
                        ? es.q.getConfig({ location: "updateVideo" }).enabled
                        : ei.d.getConfig({ location: "updateVideo" }).enabled);
            let l = !i || !W.f.getConfig({ location: "updateVideo" }).enabled;
            e7.setGoLiveSource(
                {
                    desktopDescription: {
                        id: t.desktopSource.id,
                        soundshareId: t.desktopSource.soundshareId,
                        useVideoHook: i,
                        useHookFramePacer: l,
                        useGraphicsCapture: s,
                        useGraphicsCaptureApiLevel: a,
                        useCaptureDeviceForEncode: (0, eA.isWindows)(),
                        useLoopback: r.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: nl(),
                        videoHookStaleFrameTimeoutMs: eK,
                        graphicsCaptureStaleFrameTimeoutMs: e$,
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
function t8(e) {
    switch (e) {
        case ek.CO.CPU_OVERUSE:
            return k.B6.NoiseCancellerCpuOveruse;
        case ek.CO.FAILED:
            return k.B6.NoiseCancellerFailed;
        case ek.CO.VAD_CPU_OVERUSE:
            return k.B6.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function t9() {
    null === ti &&
        e7
            .getCodecSurvey()
            .then((e) => {
                try {
                    let t = JSON.parse(e);
                    if (null == t || null == t.available_video_decoders) throw Error("decoder survey is not available");
                    ti = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                } catch (e) {
                    eG.error("Failed to parse codec survey", e), (ti = !1);
                }
            })
            .catch((e) => {
                eG.error("Failed to get codec survey", e), (ti = !1);
            })
            .finally(() => {
                C.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
            });
}
function ne() {
    null === ts &&
        e7
            .getCodecSurvey()
            .then((e) => {
                try {
                    let t = JSON.parse(e);
                    if (null == t || null == t.available_video_decoders) throw Error("decoder survey is not available");
                    (ts = t.available_video_decoders.some((e) => e.startsWith("video/av01") && e.endsWith("(HW)"))),
                        eG.info("AV1 decode detection complete. presence = ", ts);
                } catch (e) {
                    eG.error("Failed to parse codec survey", e), (ts = !1);
                }
            })
            .catch((e) => {
                eG.error("Failed to get codec survey", e), (ts = !1);
            });
}
function nt(e) {
    let t = (0, B.F)({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function nn(e, t) {
    e.setAutomaticGainControl(nt(t));
}
function nr(e, t) {
    let n = (0, ed.A)(t, r.getSystemMicrophoneMode());
    n !== t && eG.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: i } = (0, B.F)({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(i);
    let { noiseCancellationAfterProcessing: s, vadAfterWebrtc: a } = (0, Z.$)({ location: "setNoiseCancellation" });
    e.setNoiseCancellationAfterProcessing(s), e.setVADAfterWebrtc(a);
}
function ni(e) {
    let t = t2(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eN.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eN.A.hasNoiseSuppression(n) || t.noiseSuppression),
        nn(e, eN.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        nr(e, t.noiseCancellation),
        (0, eA.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function ns() {
    tu.start(eX, () => {
        eG.error("Device enumeration timed out"), em.default.track(eL.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
    }),
        e7.on(y.bg.Connection, (e) => {
            t3(e), t4(e), ni(e);
            let t = t2();
            e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
                e.setQoS(t.qos),
                (0, eA.isWindows)()
                    ? (e.setExperimentFlag(ek.fd.H265_HARDWARE_ONLY, !0),
                      t0().then((t) => {
                          e.setExperimentFlag(ek.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                      }))
                    : (0, eA.isMac)() && e.setExperimentFlag(ek.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                (0, eA.isLinux)() && t.openH264Enabled && e.setExperimentFlag(ek.fd.USE_LIBOPENH264_DECODER, !0),
                (0, Q.J)({ location: "setupMediaEngine" }).enabled &&
                    e.setExperimentFlag(ek.fd.LOW_LATENCY_RATE_CONTROL, !0);
            let n = !1,
                i = !0;
            e.setExperimentFlag(ek.fd.RESET_DECODER_ON_ERRORS, !0),
                n && e.setExperimentFlag(ek.fd.SOFTWARE_FALLBACK_ON_ERRORS, !0),
                i && e.setExperimentFlag(ek.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
            let { swallowVolumeOnlySpeakingEvents: a } = D.A.getConfig({ location: "MediaEngineStore" });
            if ((a && e.setExperimentFlag(ek.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === ek.x.STREAM)) {
                let t = nS(to);
                e.setSoundshareDiscardRearChannels(t);
            }
            if ((0, eA.isWindows)())
                e.setExperimentFlag(ek.fd.SIGNAL_AV1, !0), e.setExperimentFlag(ek.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            else if ((0, eA.isMac)())
                e.setExperimentFlag(ek.fd.SIGNAL_AV1_DECODE, !0),
                    e.setExperimentFlag(ek.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            else if ((0, eA.isLinux)()) e.setExperimentFlag(ek.fd.SIGNAL_AV1_DECODE, !0);
            else if ((0, eA.isIOS)())
                e.setExperimentFlag(ek.fd.SIGNAL_AV1_DECODE, !0),
                    e.setExperimentFlag(ek.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            else if ((0, eA.isAndroid)() && !0 === ts) {
                let { enabled: t } = (0, H.T)("MediaEngineStore");
                t &&
                    (e.setExperimentFlag(ek.fd.SIGNAL_AV1_DECODE, !0),
                    e.setExperimentFlag(ek.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
            }
            if ((0, eA.isWeb)()) {
                let { enabled: t } = Y.A.getConfig({ location: "MediaEngineStore" });
                e.setExperimentFlag(ek.fd.BROWSER_HEVC, t);
            }
            for (let n of ((0, eA.isWindows)() &&
                tj?.startsWith("AMD") &&
                (0, ea.F)("MediaEngineStore").enabled &&
                e.setExperimentFlag(ek.fd.WMF_GPU_ENCODE, !0),
            (0, eA.isWindows)() &&
                tj?.startsWith("Intel") &&
                (0, eo.J)("MediaEngineStore").enabled &&
                e.setExperimentFlag(ek.fd.WMF_GPU_ENCODE, !0),
            (0, eA.isWindows)() &&
                tj?.startsWith("Qualcomm") &&
                (0, ea.F)("MediaEngineStore").enabled &&
                e.setExperimentFlag(ek.fd.WMF_GPU_ENCODE, !0),
            e7.setHasFullbandPerformance((0, x.A)()),
            e.setRemoteAudioHistory(1e3),
            (0, w.A)(r) && e.setClipsKeyFrameInterval(ek.X1),
            (t = t2(e.context)),
            e.setPostponeDecodeLevel(eq),
            Object.keys(t.localMutes)))
                n !== ey.default.getId() && e.setLocalMute(n, t.localMutes[n]);
            for (let n of Object.keys(t.localVolumes))
                n !== ey.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
            for (let n of Object.keys(t.localPans)) {
                let r = t.localPans[n];
                e.setLocalPan(n, r.left, r.right);
            }
            for (let n of Object.keys(t.disabledLocalVideos)) e.setLocalVideoDisabled(n, t.disabledLocalVideos[n]);
            e.on(y.yq.Speaking, (t, n, r, i) => {
                C.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: i });
            }),
                e.context === ek.x.DEFAULT &&
                    ((tg = !1),
                    e.on(y.yq.SpeakingWhileMuted, () => {
                        let e = !tg;
                        (tg = !0),
                            e && r.emitChange(),
                            tA.start(eZ, () => {
                                (tg = !1), r.emitChange();
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
                        em.default.track(eL.HAw.VIDEOHOOK_INITIALIZED, {
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
                    eG.warn(`noisecancellererror event: ${e}`),
                        (0, k.QW)({ type: k.iy.NOISE_CANCELLER_ERROR, underlyingError: t8(e) }),
                        (tL = !0),
                        em.default.track(eL.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        C.h.dispatch({ type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: !0 }),
                        C.h.dispatch({ type: "AUDIO_SET_NOISE_CANCELLATION", enabled: !1 }),
                        C.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e });
                }),
                e.on(y.yq.VoiceActivityDetectorError, (e) => {
                    eG.warn(`voiceactivitydetectorerror event: ${e}`),
                        (0, k.QW)({ type: k.iy.NOISE_CANCELLER_ERROR, underlyingError: t8(e) }),
                        em.default.track(eL.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        C.h.dispatch({
                            type: "AUDIO_SET_MODE",
                            context: ek.x.DEFAULT,
                            mode: eL.TBI.VOICE_ACTIVITY,
                            options: { ...t2(ek.x.DEFAULT).modeOptions, vadUseKrisp: !1 },
                        }),
                        C.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e });
                }),
                e.on(y.yq.SdpError, (e, t, n, r) => {
                    em.default.track(eL.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: r });
                }),
                e.on(y.yq.VideoState, (t) => {
                    C.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                }),
                e.setBitRate(ev.A.bitrate),
                e.applyVideoQualityMode(eD.A.mode),
                (0, eA.isWindows)() &&
                    e7.supports(ek.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                    e7.setAsyncVideoInputDeviceInit(!0);
        }),
        e7.on(y.bg.DeviceChange, (e, t, n) => {
            tu.stop(),
                C.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
        }),
        e7.on(y.bg.VolumeChange, (e, t) => {
            C.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
        }),
        e7.on(y.bg.DesktopSourceEnd, (e, t) => {
            C.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
        }),
        e7.on(y.bg.AudioPermission, (e) => {
            (tU = !0), C.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
        }),
        e7.on(y.bg.VideoPermission, (e) => {
            C.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
        }),
        e7.on(y.bg.WatchdogTimeout, async () => {
            let e;
            if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                try {
                    await eE.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                } catch (t) {
                    "number" == typeof t.status && (e = t.status);
                }
            eG.warn(`Watchdog timeout, report submission status: ${e ?? 200}`);
            let t = er.A.getConfig({ location: "watchdog_timeout" }).enabled && null != R.A.processUtils.setCrashReason;
            try {
                await em.default.track(
                    eL.HAw.VOICE_WATCHDOG_TIMEOUT,
                    { minidump_submission_error: e, will_restart: t },
                    { flush: !0 },
                );
            } catch (e) {
                eG.error("Failed to flush voice watchdog timeout analytics event", e);
            }
            t &&
                (eG.info("Relaunching app due to voice watchdog timeout"),
                await R.A.processUtils.setCrashReason("voice-watchdog-timeout"),
                v.w.set("discord_watchdog_restart_timestamp", Date.now().toString()),
                R.A.app.relaunch());
        }),
        e7.on(y.bg.VideoInputInitialized, (e) => {
            em.default.track(eL.HAw.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired
                    ? null
                    : Math.round(e.timeToFirstFrame * eg.A.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: eR.A.getMediaSessionId(),
                rtc_connection_id: eR.A.getRTCConnectionId(),
            });
        }),
        e7.on(y.bg.AudioInputInitialized, (e) => {
            em.default.track(eL.HAw.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * eg.A.Millis.SECOND),
                rtc_connection_id: eR.A.getRTCConnectionId(),
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
            em.default.track(eL.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
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
                        version: e3++,
                        context: n.context,
                    };
                }),
            });
        }),
        e7.on(y.bg.VoiceQueueMetrics, (e) => {
            let t = r1(e);
            null !== t && em.default.track(eL.HAw.VOICE_QUEUE_METRICS, t);
        }),
        e7.setOnVideoContainerResized((e, t, n) => {
            C.h.wait(() =>
                C.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
            );
        }),
        re(),
        o.reset(),
        (0, eO.w)().then((e) => {
            null != e && ((tj = e.gpu_brand), (tY = e.has_intel_hybrid_igpu));
        }),
        e7.on(y.bg.SystemMicrophoneModeChange, (e) => {
            (f = e), e7.eachConnection(ni), r.emitChange();
        });
}
function na() {
    return (0, eA.isWindows)() && T().satisfies(R.A?.os.release, ew.yg);
}
function no() {
    return (0, eA.isWindows)() && T().satisfies(R.A?.os.release, ew.fG);
}
function nl() {
    return (0, eA.isMac)() && e7.supports(ek.O5.SCREEN_CAPTURE_KIT) && T().satisfies(R.A?.os.release, ew.e);
}
function nu() {
    return (
        (0, eA.isWindows)() &&
        e7.supports(ek.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        e7.supports(ek.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nc() {
    return e7.supports(ek.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function nd() {
    let e = v.w.get("audio");
    null != e && (v.w.set(eF, { [ek.x.DEFAULT]: e }), v.w.remove("audio")),
        (e8 = v.w.get(eF) ?? {}),
        E().each(e8, (e) => {
            E().defaultsDeep(e, e4()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, eS.OH)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== eV &&
                    ((e.vadUseKrispSettingVersion = eV), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                e.vadThrehsoldMigrated ||
                    ((e.vadThrehsoldMigrated = !0), e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = ez)),
                e7.supports(ek.O5.SIDECHAIN_COMPRESSION) &&
                    e.sidechainCompressionSettingVersion < ej &&
                    ((e.sidechainCompressionSettingVersion = ej), (e.sidechainCompression = !0)),
                (0, eA.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== eH &&
                      ((e.ncUseKrispjsSettingVersion = eH), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== eB &&
                      ((e.ncUseKrispSettingVersion = eB), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
        }),
        np();
}
function n_(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ek.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = t1(t);
    return Object.assign(r, e), !__OVERLAY__ && n && v.w.set(eF, e8), r;
}
function nf() {
    v.w.remove(eF), location.reload();
}
function np() {
    let e = t2();
    nI(e.inputDeviceId),
        e7.setAudioOutputDevice(e.outputDeviceId),
        t7(),
        e7.setInputVolume(e.inputVolume),
        e7.setOutputVolume(e.outputVolume),
        e7.setAecDump(e.aecDumpEnabled),
        e7.setSidechainCompression(e.sidechainCompression),
        e7.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        e7.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        (0, eA.isLinux)() && eT.Ay?.setOpenH264Enabled?.(e.openH264Enabled);
}
function nh() {
    te || e7.enable().then(() => C.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nm(e) {
    return { id: ek.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
}
function nE(e, t) {
    if (0 === e.length) {
        let e = nm(t);
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
function ng(e, t) {
    let n = e[t] ?? e[ek.dx] ?? E()(e).values().first();
    return null != n ? n.id : t;
}
function nA(e) {
    if (!(0, eA.isWindows)() || !j.A.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects)
        return;
    let t = ta[e];
    t?.guid != null && (0, e_.A)(t.guid, e, e7);
}
function nI(e) {
    e7.setAudioInputDevice(e), nA(e);
}
function nT(e) {
    let t = ta;
    if (((ta = nE(e, eU.intl.string(eU.t["/QIjDA"]))), !E().isEqual(ta, t))) {
        let e = t2();
        nI(ng(ta, e.inputDeviceId)), e7.eachConnection(ni);
    }
}
function nS(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function ny(e) {
    e7.eachConnection((t) => {
        t.context === ek.x.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function nv(e) {
    let t = to;
    if (((to = nE(e, eU.intl.string(eU.t.xlUg0v))), !E().isEqual(to, t))) {
        let e = t2(),
            n = ng(to, e.outputDeviceId);
        e7.setAudioOutputDevice(n);
        let r = nS(t),
            i = nS(to);
        r !== i && ny(i);
    }
}
function nN(e) {
    tT = e.length > 0;
    let t = tl;
    if (((tl = nE(e, eU.intl.string(eU.t.WKWARY))), tp && !E().isEqual(tl, t))) {
        let e = void 0 !== tl[th],
            n = th === ek.dx && t[ek.dx]?.disabled,
            r = "Firefox" === A().name && "" === th && t[th]?.name === "Default" && !t[th]?.disabled;
        t7(e || n || r);
    }
}
function nC() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = ep.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let r = n === eP.W.USER ? ek.x.DEFAULT : ek.x.STREAM,
            i = r === ek.x.STREAM ? ek.Cn : ek.Hz,
            s = t[n] ?? {},
            { localMutes: a, localVolumes: o } = t2(r);
        for (let [e, t] of Object.entries(s))
            null == (0, ef.tM)(r, e) &&
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
        n_({ localMutes: a, localVolumes: o }, r);
    }
}
function nR(e) {
    if (null == r)
        return (
            eG.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
            { soundshareId: null, soundshareSession: "" }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : eE.A.getAudioPid(e),
            n = "";
        return null != t && (n = eE.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n };
    }
}
function nO(e, t) {
    if (t) {
        let { soundshareId: t, soundshareSession: n } = nR(e);
        if (null != t) return nb(t, n), { soundshareId: t, soundshareSession: n };
    }
    return null != e && t2().videoHook && O.GH(e), { soundshareId: null, soundshareSession: null };
}
function nb(e, t) {
    (0, eA.isWindows)() &&
        e > 1 &&
        O.GH(e, { soundshare_session: t }).then((t) => {
            null == t ||
                F.Ay.shouldContinueWithoutElevatedProcessForPID(e) ||
                C.h.wait(() => {
                    C.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: t });
                });
        });
}
function nD(e) {
    (i = e.sessionId), (tc = !1), (tf = !1);
    let t = t2();
    nu() && (nc() ? rO(ek.rB.AUTOMATIC) : t.automaticAudioSubsystem && rb()),
        e7.supports(ek.O5.OFFLOAD_ADM_CONTROLS) && e7.setOffloadAdmControls(!0),
        (0, eA.isIOS)() &&
            (0, z.Y)("handleConnectionOpen").enabled &&
            e7.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
        nA(t.inputDeviceId),
        nC();
}
function nL(e) {
    let { mediaEngineState: t } = e;
    (e8 = t.settingsByContext),
        (ta = t.inputDevices),
        (to = t.outputDevices),
        (tH = t.appSupported),
        (tR = t.krispModuleLoaded),
        (c = t.krispVersion),
        (tn = t.goLiveContext);
}
function nw() {
    i = null;
}
function nM() {
    return (0, eA.isWeb)() && r.startDavePreload(), !1;
}
function nP(e) {
    switch (e.state) {
        case eL.S7L.CONNECTING:
            nh();
            break;
        case eL.S7L.RTC_CONNECTING:
            (ty = !1), (l = void 0), (u = void 0), (tS = !1), (tK = !1), t$.stop(), tv.stop(), o.reset();
            break;
        case eL.S7L.RTC_CONNECTED:
            t7();
            break;
        case eL.S7L.DISCONNECTED:
            nj(), nY();
    }
}
function nx(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (tc = t.mute || t.suppress), (tf = t.deaf), e7.eachConnection(t4);
            let e = null != t.guildId && null != t.channelId && null != tD && tD !== t.channelId,
                n = !tN && null == t.channelId;
            return t7(!e && !n && tp), (tD = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== ey.default.getId() || null != eR.A.getChannelId() || t7(!1, null), e;
    }, !1);
}
function nk(e) {
    let { mute: t } = e;
    (td = t), e7.eachConnection(t4);
}
function nU(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = t2(t);
    if (t === ek.x.DEFAULT && (eu.A.requestPermission(eM.iL.AUDIO), t_)) return !1;
    (r = !i && !r) || (i = !1), n || (tE = !0), n_({ mute: r, deaf: i }, t), e7.eachConnection(t4);
}
function nG(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    n_({ mute: n }, t), r || (tE = !0), e7.eachConnection(t4);
}
function nF(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== eP.oD.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    nC(!0);
}
function nV(e) {
    let { context: t } = e;
    n_({ deaf: !t2(t).deaf }, t), e7.eachConnection(t4);
}
function nB(e) {
    let { context: t, userId: n } = e;
    if (n === ey.default.getId()) return;
    let { localMutes: r } = t2(t);
    r[n] ? delete r[n] : (r[n] = !0),
        n_({ localMutes: r }, t),
        e7.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nH(e) {
    let { context: t, userId: n, videoToggleState: r, persist: i, isAutomatic: s } = e;
    h()(!(i && s), "These are not allowed to both be true.");
    let a = r === eL.bb8.DISABLED,
        { disabledLocalVideos: o } = t2(t),
        l = o[n] ?? !1,
        u = tF.has(n),
        c = r === eL.bb8.AUTO_ENABLED || r === eL.bb8.MANUAL_ENABLED;
    eG.info(`disableVideo=${a} currentlyDisabled=${l} currentlyAutoDisabled=${u}, isVideoShown=${c}`),
        h()(!(u && !l), "If you are auto-disabled, then you are also disabled.");
    let d = a !== l,
        _ = t === ek.x.DEFAULT,
        f = s && d && _,
        p = i && d && _;
    eG.info(`changed=${d} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${f} isManualToggleByUser=${p}`);
    let { videoToggleStateMap: m } = t2(t);
    if (
        (m[n] === eL.bb8.AUTO_PROBING &&
            r === eL.bb8.AUTO_ENABLED &&
            (0, el.A)(n, a ? ek.Al.AUTO_DISABLE : ek.Al.AUTO_ENABLE, c),
        (m[n] = r),
        n_({ videoToggleStateMap: m }, t, i),
        r === eL.bb8.AUTO_PROBING
            ? eR.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
            : eR.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
        tV ||
            (eG.info(`isAutoDisableAllowed=${tV} - disabling VideoHealthManager`),
            eR.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
        f)
    ) {
        if ((!a && !u) || (a && !tV)) return;
        (0, el.A)(n, a ? ek.Al.AUTO_DISABLE : ek.Al.AUTO_ENABLE, c), a ? tF.add(n) : tF.delete(n);
    } else
        p &&
            (u && !a
                ? (eG.info("disallowing auto-disable for this session because of manual override by user"),
                  (tV = !1),
                  eR.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                  (0, el.A)(n, ek.Al.MANUAL_REENABLE, c))
                : (0, el.A)(n, a ? ek.Al.MANUAL_DISABLE : ek.Al.MANUAL_ENABLE, c));
    _ && !a && tF.delete(n),
        a ? (o[n] = !0) : delete o[n],
        n_({ disabledLocalVideos: o }, t, i),
        e7.eachConnection((e) => e.setLocalVideoDisabled(n, o[n] ?? !1), t);
}
function nj() {
    if (0 === tF.size) return;
    let e = ek.x.DEFAULT,
        { disabledLocalVideos: t } = t2(e);
    tF.forEach((n) => {
        h()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            e7.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tF.clear(),
        n_({ disabledLocalVideos: t }, e, !1);
}
function nY() {
    let e = ek.x.DEFAULT,
        { videoToggleStateMap: t } = t2(e);
    for (let [e, n] of Object.entries(t)) n === eL.bb8.AUTO_PROBING && delete t[e];
    n_({ videoToggleStateMap: t }, e, !1);
}
function nW(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === ey.default.getId()) return;
    let i = t === ek.x.STREAM ? ek.Cn : ek.Hz,
        { localVolumes: s } = t2(t);
    r === i ? delete s[n] : (s[n] = r), n_({ localVolumes: s }, t), e7.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function nK(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: s } = t2(t);
    (s[n] = { left: r, right: i }), n_({ localPans: s }, t), e7.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function n$(e) {
    let { context: t, mode: n, options: r } = e;
    n_({ mode: n, modeOptions: { ...r, updatedAt: Date.now() } }, t), e7.eachConnection(t3);
}
function nz(e) {
    let { volume: t } = e;
    n_({ inputVolume: t6(t) }), e7.setInputVolume(t);
}
function nq(e) {
    let { volume: t } = e;
    n_({ outputVolume: t }), e7.setOutputVolume(t);
}
function nZ(e) {
    let { id: t } = e;
    (t = ng(ta, t)),
        (tr = performance.now()),
        n_({ inputDeviceId: t }),
        nI(t),
        e7.eachConnection(ni),
        (l = void 0),
        (u = void 0),
        t$.stop(),
        (tK = !1);
    let { resetSilenceWarningOnDeviceChange: n } = ee.A.getConfig({
        location: "MediaEngineStore.handleSetInputDevice",
    });
    n && ((tS = !1), o.reset());
}
function nX(e) {
    let { id: t } = e;
    n_({ outputDeviceId: (t = ng(to, t)) }), e7.setAudioOutputDevice(t);
}
function nQ(e) {
    let { id: t } = e;
    n_({ videoDeviceId: (t = ng(tl, t)) }), t7();
}
function nJ(e) {
    let { inputProfile: t } = e;
    n_({ activeInputProfile: t });
    let n = t2();
    e7.eachConnection((e) => {
        t3(e), ni(e);
    }),
        e7.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        n9();
}
function n0(e) {
    return tt !== e.required && ((tt = e.required), e.required || e7.interact(), !0);
}
function n1(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    nT(t), nv(n), nN(r);
}
function n2(e) {
    let { inputVolume: t, outputVolume: n } = e;
    n_({ inputVolume: t6(t), outputVolume: n });
}
function n3(e) {
    let t = t2(),
        n = e7.getAudioSubsystem(),
        i = e7.getAudioLayer(),
        s = ng(ta, t.inputDeviceId),
        a = ta[s]?.name,
        o = (0, ed.A)(t.noiseCancellation, r.getSystemMicrophoneMode());
    em.default.track(eL.HAw.VOICE_PROCESSING, {
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
function n6(e) {
    let t = n_({ echoCancellation: e.enabled });
    e7.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), n9(), n3(e.location);
}
function n4(e) {
    n7(e.enabled);
}
function n5(e) {
    let t = n_({ sidechainCompressionStrength: e.strength });
    e7.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function n7(e) {
    let t = n_({ sidechainCompression: e });
    e7.setSidechainCompression(t.sidechainCompression);
}
function n8(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tB.add(n) : tB.delete(n), n9();
}
function n9() {
    let e = t2(),
        t = tB.size > 0,
        n = e.inputDeviceId,
        r = eN.A.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        s = eN.A.hasNoiseSuppression(n) || e.noiseSuppression,
        a = nt(eN.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        o = e.noiseCancellation;
    e7.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: s,
        automaticGainControlConfig: a,
        noiseCancellation: o,
    });
}
async function re() {
    if (!e7.supports(ek.O5.VAAPI)) return;
    let e = 4098;
    if (window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let t = await window.DiscordNative.processUtils.getSystemInfo();
    (t.electronGPUInfo?.gpuDevice ?? []).some((t) => t.vendorId === e) &&
        ((tZ = !0), (tq = e7.supports(ek.O5.GAMESCOPE_CAPTURE)));
}
function rt(e) {
    let t = n_({ noiseSuppression: e.enabled });
    e7.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), n9(), n3(e.location);
}
function rn(e) {
    let t = n_({ automaticGainControl: e.enabled });
    e7.eachConnection((e) => nn(e, t.automaticGainControl)), n9(), n3(e.location);
}
function rr(e) {
    let t = n_({ noiseCancellation: e.enabled });
    e7.eachConnection((e) => nr(e, t.noiseCancellation)), n9(), n3(e.location);
}
function ri(e) {
    ec.A.setKrispModelOverride(e.model), (_ = e.model), n9();
}
function rs(e) {
    (0, eA.isWeb)() || ((tb = e.enabled), e7.setNoiseCancellationEnableStats?.(e.enabled));
}
function ra(e) {
    n_({ silenceWarning: e.enabled });
}
function ro(e) {
    e7.setDebugLogging(e.enabled);
}
function rl(e) {
    let { level: t } = e;
    (d = t), ec.A.setKrispSuppressionLevel(t);
}
function ru(e) {
    n_({ videoHook: e.enabled });
}
function rc(e) {
    n_({ experimentalSoundshare2: e.enabled });
}
function rd(e) {
    let { enabled: t } = e;
    n_({ useSystemScreensharePicker: t });
}
function r_(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = n_({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r });
    e7.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function rf(e) {
    let { enabled: t } = e;
    n_({ qos: t }), e7.eachConnection((e) => e.setQoS(t));
}
function rp() {
    nf();
}
function rh(e) {
    let { osVolume: t, osMuted: n } = e;
    (u = t), (l = n);
}
function rm(e) {
    let { inputDetected: t } = e;
    if (null == t) return !1;
    if (((ty = !0 !== tS && !t), t)) (tS = !0), (tK = !1), t$.stop(), tv.stop();
    else if (t2().mode === eL.TBI.VOICE_ACTIVITY && tS) {
        let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = ee.A.getConfig({
            location: "MediaEngineStore.handleInputDetected",
        });
        e &&
            t$.start(eQ, () => {
                em.default.track(eL.HAw.HARDWARE_MUTE_GUESSED, {
                    input_device_name: ta[ng(ta, t2().inputDeviceId)]?.name,
                    rtc_connection_id: eR.A.getRTCConnectionId(),
                }),
                    (tK = !0),
                    r.emitChange();
            }),
            null != t &&
                tv.start(t * eg.A.Millis.MINUTE, () => {
                    (tS = !1), o.reset();
                });
    }
}
function rE(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === t_) return !1;
    (t_ = n), e7.eachConnection(t4);
}
function rg(e) {
    let { state: t, permissionType: n } = e,
        r = t === eM.hL.ACCEPTED;
    switch (n) {
        case eM.iL.AUDIO:
            (tU = !0), e7.eachConnection(t4);
            break;
        case eM.iL.CAMERA:
            !r && tp && t7(!1);
            break;
        default:
            return !1;
    }
}
function rA() {
    return tR || !1;
}
async function rI() {
    try {
        await eT.Ay.ensureModule("discord_krisp");
        let e = eT.Ay.requireModule("discord_krisp");
        (tR = !0),
            (c = e.getSdkVersion?.()),
            (d = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (tO = e), r.emitChange();
            }),
            r.emitChange(),
            await eT.Ay.ensureModule("discord_voice");
        let t = eT.Ay.requireModule("discord_voice");
        t.setupKrispPath?.();
    } catch (t) {
        eG.warn(`Failed to load Krisp module: ${t.message}`), eI.A.captureException(t);
        let e = ek.CO.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? ek.CO.INITIALIZED : n;
        }
        em.default.track(eL.HAw.VOICE_PROCESSING, { noise_canceller_error: e }), n_({ noiseCancellation: !1 });
    } finally {
        tC = !1;
    }
}
function rT() {
    return (0, eA.isWindows)() || (0, eA.isLinux)() || (0, eA.isMac)();
}
function rS() {
    !rT() || __OVERLAY__ || tC || tR
        ? (0, eA.isWeb)() && e7.supports(ek.O5.NOISE_CANCELLATION)
            ? ((tR = !0), r.emitChange())
            : (0, eA.isWeb)() && n_({ noiseCancellation: !1 })
        : ((tC = !0), rI());
}
async function ry() {
    try {
        let e,
            t = "",
            n = !1,
            r = URL.parse(e1);
        if (null === r) return void eG.log("OpenH264 URL ", r, " is invalid");
        let i = r.pathname.split("/"),
            s = i[i.length - 1].replace(".bz2", "");
        try {
            let t = await eT.Ay.downloadOpenH264(e1, s, e2, (e) => {
                eG.log("OpenH264 download status", e);
            });
            eG.log("OpenH264 is ready", t), (n = t.fetchedFromNetwork), (e = !0);
        } catch (n) {
            eG.error("OpenH264 download failed", n), (t = n.message), (e = !1);
        }
        if (
            (em.default.track(eL.HAw.VIDEO_OPENH264_DOWNLOADED, {
                success: e,
                fetched_from_network: n,
                error_message: t,
            }),
            e)
        ) {
            let e = await eT.Ay.cleanupUnusedOpenH264Files([s]);
            eG.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        eG.error("OpenH264 download failed", e);
    }
}
function rv() {
    (0, eA.isLinux)() && ry();
}
function rN(e) {
    let { deviceId: t, active: n, available: r } = e;
    tP[t] = { active: n, available: r };
}
function rC(e) {
    let t = e.bypassEnabled;
    n_({ bypassSystemInputProcessing: t }), e7.setAudioInputBypassSystemProcessing(t), n3(e.location);
}
function rR(e) {
    rO(e.subsystem);
}
function rO(e) {
    e === ek.rB.AUTOMATIC
        ? (n_({ automaticAudioSubsystem: !0 }), rb())
        : (n_({ automaticAudioSubsystem: !1 }), e7.setAudioSubsystem(e));
}
function rb() {
    e7.queueAudioSubsystem(ek.rB.EXPERIMENTAL);
}
function rD(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && t7(i, null), null != t || null == n)) {
        tN = !1;
        return;
    }
    if (tN) return;
    tN = !0;
    let s = t2();
    (s.mute || s.deaf) && (n_({ deaf: !1, mute: !1 }), e7.eachConnection(t4));
}
function rL(e) {
    let { application: t } = e;
    e9.add(t.id);
}
function rw(e) {
    let { application: t } = e;
    e9.delete(t.id);
}
function rM(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (te = !1), e7.eachConnection(t4);
                break;
            case "video":
                t7(!1);
        }
}
function rP(e) {
    (te = e.enabled), e.unmute && n_({ mute: !1, deaf: !1 }), e7.eachConnection(t4);
}
function rx(e) {
    let { enabled: t } = e;
    eu.A.requestPermission(eM.iL.CAMERA), t7(t);
}
function rk(e) {
    let { sourceId: t, applicationName: n, quality: i } = e;
    if (!(0, M.Ao)() || null == R.A) return !1;
    null != a &&
        (e7.setClipsSource(null),
        (0, eA.isWindows)() &&
            (null != a.desktopSource.soundshareId
                ? O.c1(a.desktopSource.soundshareId)
                : null != a.desktopSource.sourcePid && t2().videoHook && O.c1(a.desktopSource.sourcePid)));
    let s = eE.A.getPidFromDesktopSource(t),
        { soundshareId: o, soundshareSession: l } = nO(s, !0);
    a = { desktopSource: { id: t, sourcePid: s, soundshareId: o, soundshareSession: l }, quality: i };
    let u = tQ("MediaEngineStore clips"),
        c = t2().videoHook,
        d = !c || !W.f.getConfig({ location: "handleClipsInit" }).enabled;
    e7.setClipsSource({
        desktopDescription: {
            id: a.desktopSource.id,
            soundshareId: a.desktopSource.soundshareId,
            useVideoHook: c,
            useHookFramePacer: d,
            useGraphicsCapture: na(),
            useCaptureDeviceForEncode: !1,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: nl(),
            videoHookStaleFrameTimeoutMs: eK,
            graphicsCaptureStaleFrameTimeoutMs: e$,
            hdrCaptureMode: u,
        },
        quality: i,
        applicationName: n,
        videoEncoderExperiments: r.getVideoEncoderExperiments(ek.x.STREAM, "streamer"),
    });
}
function rU(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((a = null), e7.setClipsSource(null));
}
function rG(e) {
    let { settings: t } = e;
    if (t?.desktopSettings != null) {
        let e = null,
            n = null,
            { sourceId: r, sound: i } = t.desktopSettings,
            s = t.context ?? ek.x.DEFAULT,
            a = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
            o = eE.A.getPidFromDesktopSource(r);
        eA.isPlatformEmbedded && ({ soundshareId: e, soundshareSession: n } = nO(o, i)),
            t5(s),
            t7(s === ek.x.STREAM && tp, {
                desktopSource: { id: r, sourcePid: o, soundshareId: e, soundshareSession: n },
                quality: { resolution: a.resolution, frameRate: a.frameRate },
            });
    } else if (t?.cameraSettings != null) {
        let e = t.context ?? ek.x.DEFAULT,
            { videoDeviceGuid: n, audioDeviceGuid: r } = t.cameraSettings,
            i = e === ek.x.STREAM && tp,
            s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
        t7(i, {
            cameraSource: { videoDeviceGuid: n, audioDeviceGuid: r },
            quality: { resolution: s.resolution, frameRate: s.frameRate },
        });
    } else t7(tp, null);
}
function rF(e) {
    let { section: t } = e;
    return t === eL.nc_.VOICE && nh(), !1;
}
function rV() {
    return e7.eachConnection(ni), !1;
}
function rB(e) {
    let { enabled: t } = e,
        n = n_({ aecDumpEnabled: t });
    e7.setAecDump(n.aecDumpEnabled);
}
function rH(e) {
    let { enabled: t } = e;
    n_({ openH264Enabled: t }), eT.Ay?.setOpenH264Enabled?.(t);
}
function rj(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (e8 = Object.values(ek.x).reduce((e, n) => {
        let r = n,
            i = e4();
        return (e[r] = E().merge(i, t[r])), e;
    }, {})),
        v.w.set(eF, e8),
        np();
}
function rY(e) {
    let { state: t } = e,
        n = G.A.isEnabled();
    if (t === eL.g6G.BACKGROUND && tp && !n) (tI = !0), t7(!1);
    else {
        if (t !== eL.g6G.ACTIVE || !tI) return !1;
        (tI = !1), t7(!0);
    }
    return !0;
}
function rW(e) {
    e7.eachConnection((t) => t.setBitRate(e.bitrate));
}
function rK() {
    if ((!tp && null == s) || null != eR.A.getRTCConnectionId()) return !1;
    t7(!1, null);
}
function r$() {
    return !!tL && ((tL = !1), !0);
}
function rz(e) {
    e7.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function rq(e) {
    let { settings: t } = e;
    e7.applyMediaFilterSettings(t).finally(() => {
        (tw = !1), r.emitChange();
    });
}
function rZ() {
    tw = !0;
}
function rX() {
    tw = !1;
}
function rQ(e) {
    tW = e.enabled;
}
function rJ() {
    if ((0, eA.isDesktop)() && eA.isPlatformEmbedded && !tX) {
        tX = !0;
        let e = async () => {
            let t = await new Promise((e) => {
                eT.Ay.pollQueueMetrics((t) => {
                    e(t);
                });
            });
            t.periodMs = ek.tl;
            let n = r1(t);
            null !== n && em.default.track(eL.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, ek.tl);
        };
        setTimeout(e, ek.tl);
    }
}
class r0 extends S.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        ns(),
            nd(),
            rS(),
            rv(),
            nY(),
            rJ(),
            (0, eA.isWindows)() && eA.isPlatformEmbedded && t9(),
            (0, eA.isAndroid)() && null != e6 && parseInt(e6(), 10) >= 30 && ne(),
            (tH = {
                [ek.O5.VIDEO]: e7.supports(ek.O5.VIDEO),
                [ek.O5.DESKTOP_CAPTURE]: e7.supports(ek.O5.DESKTOP_CAPTURE),
                [ek.O5.HYBRID_VIDEO]: e7.supports(ek.O5.HYBRID_VIDEO),
            }),
            this.waitFor(ey.default, ev.A, eN.A, eC.A, L.A, U.A, eR.A, F.Ay, ep.A, eb.default, eD.A);
    }
    supports(e) {
        return e7.supports(e);
    }
    supportsInApp(e) {
        return tH[e] || e7.supports(e);
    }
    isSupported() {
        return e7.supported();
    }
    isNoiseSuppressionSupported() {
        return e7.supports(ek.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return rA();
    }
    isNoiseCancellationError() {
        return tL;
    }
    isAutomaticGainControlSupported() {
        return e7.supports(ek.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nc() && (e7.supports(ek.O5.LEGACY_AUDIO_SUBSYSTEM) || e7.supports(ek.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return e7.supports(ek.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === e7.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return rA();
    }
    isAecDumpSupported() {
        return e7.supports(ek.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return e7.supports(ek.O5.VIDEO) && e7.supports(ek.O5.SIMULCAST);
    }
    getAecDump() {
        return t2().aecDumpEnabled;
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
        return tb;
    }
    isEnabled() {
        return te;
    }
    isMute() {
        return this.isSelfMute() || tc;
    }
    isDeaf() {
        return this.isSelfDeaf() || tf;
    }
    hasContext(e) {
        return null != e8[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.x.DEFAULT;
        return e === ek.x.DEFAULT && td;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.x.DEFAULT;
        return (
            !this.isEnabled() ||
            t2(e).mute ||
            !eu.A.didHavePermission(eM.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === ek.x.DEFAULT && t_)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tE;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tE = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.x.DEFAULT,
            t = tK && "voice_isolation" !== this.getSystemMicrophoneMode() && t2(e).mode === eL.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (eN.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return tW;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.x.DEFAULT;
        return !this.isSupported() || t2(e).deaf;
    }
    isVideoEnabled() {
        return tp && tT;
    }
    isVideoAvailable() {
        return Object.values(tl).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return tT;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.x.STREAM;
        return tn === e && null != s;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.x.STREAM;
        return tn === e && null != s && s.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ek.x.DEFAULT;
        return e !== ey.default.getId() && (t2(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return e7.supports(ek.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ek.x.DEFAULT;
        return t2(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ek.x.DEFAULT;
        return t2(t).videoToggleStateMap[e] ?? eL.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ek.x.DEFAULT;
        return t === ek.x.DEFAULT && tF.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.x.DEFAULT;
        return e === ek.x.DEFAULT && tF.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tw;
    }
    isNativeAudioPermissionReady() {
        return tU;
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
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ek.x.DEFAULT,
            n = t2(t).localPans[e];
        return null != n ? n : eW;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ek.x.DEFAULT,
            n = t === ek.x.STREAM ? ek.Cn : ek.Hz,
            r = t2(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return t2().inputVolume;
    }
    getOutputVolume() {
        return t2().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.x.DEFAULT;
        return t2(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.x.DEFAULT;
        return t2(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            E().each(e8, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === eL.TBI.PUSH_TO_TALK && e9.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return ng(ta, t2().inputDeviceId);
    }
    getOutputDeviceId() {
        return ng(to, t2().outputDeviceId);
    }
    getVideoDeviceId() {
        return ng(tl, t2().videoDeviceId);
    }
    getInputDevices() {
        return ta;
    }
    getOutputDevices() {
        return to;
    }
    getVideoDevices() {
        return tl;
    }
    getEchoCancellation() {
        let e = t2();
        return eN.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return e7.supports(ek.O5.SIDECHAIN_COMPRESSION) && t2().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return t2().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return t2().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tx && tx;
    }
    getOpenH264Enabled() {
        return (0, eA.isLinux)() && t2().openH264Enabled;
    }
    getLoopback() {
        return tB.size > 0;
    }
    getLoopbackReasons() {
        return tB;
    }
    getNoiseSuppression() {
        let e = t2();
        return eN.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = t2();
        return eN.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return t2().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return t2().noiseCancellation;
    }
    getHardwareEncoding() {
        return eJ;
    }
    getEnableSilenceWarning() {
        return t2().silenceWarning;
    }
    getDebugLogging() {
        return e7.getDebugLogging();
    }
    getQoS() {
        return t2().qos;
    }
    getAttenuation() {
        return t2().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return t2().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return t2().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return nu() && t2().automaticAudioSubsystem ? ek.rB.AUTOMATIC : e7.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return e7.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return t2().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === ex.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.x.DEFAULT;
        return t2(e);
    }
    getState() {
        return {
            settingsByContext: e8,
            inputDevices: ta,
            outputDevices: to,
            appSupported: tH,
            krispModuleLoaded: tR,
            krispVersion: c,
            krispSuppressionLevel: d,
            goLiveSource: s,
            goLiveContext: tn,
        };
    }
    getInputDetectedThisConnection() {
        return tS;
    }
    getInputDetected() {
        return o.inputDetected;
    }
    getLastInputDetectedUpdateTime() {
        return o.lastUpdateTime;
    }
    getNoInputDetectedNotice() {
        return ty;
    }
    getInputDeviceOSMuted() {
        return l;
    }
    getInputDeviceOSVolume() {
        return u;
    }
    getPacketDelay() {
        return eA.isPlatformEmbedded || this.getMode() !== eL.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        e7.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return tt;
    }
    getVideoHook() {
        return t2().videoHook;
    }
    supportsVideoHook() {
        return e7.supports(ek.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = t2().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return e7.supports(ek.O5.EXPERIMENTAL_SOUNDSHARE) && T().satisfies(R.A?.os.release, ew.$x);
    }
    supportsHookSoundshare() {
        return (0, eA.isWindows)() && e7.supports(ek.O5.SOUNDSHARE) && T().satisfies(R.A?.os.release, ew.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = t2().useSystemScreensharePicker,
            n = (0, eA.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return e7.supports(ek.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return tZ;
    }
    getVideoEncoderExperiments(e, t) {
        let n = ["unk"];
        if (
            (n.push("nvNewPresets"),
            e === ek.x.STREAM ? n.push("nvRelaxRc=250") : n.push("nvRelaxRc=75"),
            this.getUseVaapiEncoder() && n.push("vaapi"),
            e === ek.x.STREAM && "streamer" === t && (0, eA.isWindows)())
        ) {
            n.push("useCaptureDeviceForEncode");
            let { overrideDeviceReuse: e } = en.g.getConfig({ location: "handleReady" });
            e && n.push("videoCaptureDeviceOverrideReuse");
        }
        return (0, X.n)({ location: "handleReady" }).enabled && n.push("linux-vulkan"), n.join(",");
    }
    getUseGamescopeCapture() {
        return tq;
    }
    getSpeakingWhileMuted() {
        return tg;
    }
    getKrispModelOverride() {
        return _;
    }
    getKrispModels() {
        return tO;
    }
    getKrispVadActivationThreshold() {
        return t2().modeOptions.vadKrispActivationThreshold ?? eY;
    }
    hasActiveCallKitCall() {
        return tz;
    }
    setHasActiveCallKitCall(e) {
        tz = e;
    }
    supportsScreenSoundshare() {
        return (0, eA.isMac)()
            ? e7.supports(ek.O5.SOUNDSHARE) && T().satisfies(R.A?.os.release, ew.P$) && nl()
            : (0, eA.isWindows)()
              ? e7.supports(ek.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, eA.isLinux)() && e7.supports(ek.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, eA.isWindows)()) {
            if (this.getBypassSystemInputProcessing()) return;
            return tP[this.getInputDeviceId()]?.active?.find((e) => e === e0);
        }
        if ((0, eA.isMac)() || (0, eA.isIOS)()) return f;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.x.DEFAULT,
            t = this.supports(ek.O5.VIDEO)
                ? [{ rid: "100", type: e === ek.x.DEFAULT ? ek.mI.VIDEO : ek.mI.SCREEN, quality: ek.Y4 }]
                : [];
        return (
            this.isSimulcastSupported() &&
                e === ek.x.DEFAULT &&
                t.push({ rid: "50", type: ek.mI.VIDEO, quality: ek.Cl }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: (0, eA.isWeb)() };
        return e7.fetchAsyncResources(e);
    }
    startDavePreload() {
        if (!tM && ((tM = !0), (0, eA.isWeb)())) {
            let e = { fetchDave: !0 };
            e7.fetchAsyncResources(e).catch((e) => {
                eG.warn("DAVE preload failed:", e), eI.A.captureException(e);
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
        return tj;
    }
}
function r1(e) {
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
(r = new r0(C.h, {
    VOICE_CHANNEL_SELECT: rD,
    VOICE_STATE_UPDATES: nx,
    CONNECTION_OPEN: nD,
    CONNECTION_CLOSED: nw,
    POST_CONNECTION_OPEN: nM,
    RTC_CONNECTION_STATE: nP,
    AUDIO_SET_TEMPORARY_SELF_MUTE: nk,
    AUDIO_TOGGLE_SELF_MUTE: nU,
    AUDIO_SET_SELF_MUTE: nG,
    AUDIO_TOGGLE_SELF_DEAF: nV,
    AUDIO_TOGGLE_LOCAL_MUTE: nB,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: nH,
    AUDIO_SET_LOCAL_VOLUME: nW,
    AUDIO_SET_LOCAL_PAN: nK,
    AUDIO_SET_MODE: n$,
    AUDIO_SET_INPUT_VOLUME: nz,
    AUDIO_SET_OUTPUT_VOLUME: nq,
    AUDIO_SET_INPUT_DEVICE: nZ,
    AUDIO_SET_OUTPUT_DEVICE: nX,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: nJ,
    AUDIO_SET_ECHO_CANCELLATION: n6,
    AUDIO_SET_SIDECHAIN_COMPRESSION: n4,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: n5,
    AUDIO_SET_LOOPBACK: n8,
    AUDIO_SET_NOISE_SUPPRESSION: rt,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: rn,
    AUDIO_SET_NOISE_CANCELLATION: rr,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: ri,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: ra,
    AUDIO_SET_DEBUG_LOGGING: ro,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: rl,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: rs,
    MEDIA_ENGINE_SET_VIDEO_HOOK: ru,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: rc,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: rd,
    AUDIO_SET_ATTENUATION: r_,
    AUDIO_SET_QOS: rf,
    MEDIA_ENGINE_DEVICES: n1,
    AUDIO_VOLUME_CHANGE: n2,
    AUDIO_RESET: rp,
    AUDIO_INPUT_DETECTED: rm,
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: rh,
    AUDIO_SET_SUBSYSTEM: rR,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rC,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rP,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rx,
    MEDIA_ENGINE_PERMISSION: rM,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rG,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nQ,
    MEDIA_ENGINE_INTERACTION_REQUIRED: n0,
    USER_SETTINGS_MODAL_INIT: rF,
    USER_SETTINGS_MODAL_SET_SECTION: rF,
    CERTIFIED_DEVICES_SET: rV,
    RPC_APP_CONNECTED: rL,
    RPC_APP_DISCONNECTED: rw,
    OVERLAY_INITIALIZE: nL,
    APP_STATE_UPDATE: rY,
    SET_CHANNEL_BITRATE: rW,
    SET_VAD_PERMISSION: rE,
    SET_NATIVE_PERMISSION: rg,
    SET_CHANNEL_VIDEO_QUALITY_MODE: rz,
    MEDIA_ENGINE_SET_AEC_DUMP: rB,
    MEDIA_ENGINE_SET_OPENH264_ENABLED: rH,
    MEDIA_ENGINE_RESET_SETTINGS: rj,
    CHANNEL_DELETE: rK,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: r$,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rq,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rZ,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rX,
    USER_SETTINGS_PROTO_UPDATE: nF,
    CLIPS_INIT: rk,
    CLIPS_SETTINGS_UPDATE: rU,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rQ,
    MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: rN,
})),
    (o = new q.A(e7, r));
let r2 = r;
