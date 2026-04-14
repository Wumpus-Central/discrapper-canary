"use strict";
let r, i, s, a, o, l, u, c, d, _, f;
n.d(t, { Ay: () => r1 }), n(323874), n(14289), n(35956), n(321073), n(790599);
var h = n(284009),
    p = n.n(h),
    m = n(735438),
    E = n.n(m),
    g = n(481613),
    A = n.n(g),
    I = n(299855),
    T = n.n(I),
    S = n(311907),
    y = n(205693),
    v = n(506774),
    C = n(451988),
    N = n(73153),
    R = n(77729),
    b = n(719129),
    O = n(894539),
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
    B = n(540305),
    V = n(17300),
    H = n(544746),
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
    eh = n(617617),
    ep = n(499156),
    em = n(954571),
    eE = n(353835),
    eg = n(927813),
    eA = n(723702),
    eI = n(728458),
    eT = n(837921),
    eS = n(350535),
    ey = n(961350),
    ev = n(131319),
    eC = n(347481),
    eN = n(734057),
    eR = n(383501),
    eb = n(851581),
    eO = n(287809),
    eD = n(117549),
    eL = n(652215),
    ew = n(502075),
    eM = n(765682),
    ex = n(355097),
    eP = n(509381),
    ek = n(731854),
    eU = n(985018);
let eG = new x.A("MediaEngineStore"),
    eF = "MediaEngineStore",
    eB = 4,
    eV = 1,
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
    if (!(0, eA.isIOS)() || null == e6) return !1;
    let e = e6();
    if (null == e || !e.startsWith("ARM64_")) return !1;
    let t = e.substring(6);
    return ("T" === t[0] || "S" === t[0]) && parseInt(t.substring(1), 10) >= 8122;
}
function e5() {
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
        videoHook: e8.supports(ek.O5.VIDEO_HOOK),
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
let e7 = {
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
            mode: eL.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    e8 = (0, y.hB)((0, y.WI)());
eG.enableNativeLogger(!0);
let e9 = {},
    te = new Set([ek.x.DEFAULT]),
    tt = e8.supports(ek.O5.AUTO_ENABLE),
    tn = !1,
    tr = ek.x.STREAM,
    ti = performance.now(),
    ts = null,
    ta = { [ek.dx]: np("No Input Devices") },
    to = { [ek.dx]: np("No Output Devices") },
    tl = { [ek.dx]: np("No Video Devices") },
    tu = new C.Ep(),
    tc = !1,
    td = !1,
    t_ = !1,
    tf = !1,
    th = !1,
    tp = ek.qe,
    tm = ek.qe,
    tE = !1,
    tg = !1,
    tA = new C.Ep(),
    tI = !1,
    tT = !1,
    tS = !1,
    ty = !1,
    tv = new C.Ep(),
    tC = !1,
    tN = !1,
    tR = !1,
    tb = [],
    tO = !1,
    tD = null,
    tL = !1,
    tw = !1,
    tM = !1,
    tx = {},
    tP = null,
    tk = null,
    tU = !1;
eu.A.hasPermission(eM.iL.AUDIO, { showAuthorizationError: !1 }),
    eu.A.hasPermission(eM.iL.CAMERA, { showAuthorizationError: !1 });
let tG = !1,
    tF = new Set(),
    tB = tG,
    tV = new Set(),
    tH = {},
    tj = null,
    tY = null,
    tW = !0,
    tK = !1,
    t$ = new C.Ep(),
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
    return null != tk ? tk : "u" > typeof window ? (tk = tJ().then((e) => ((tP = e), e))) : Promise.resolve(!1);
}
function t1() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.x.DEFAULT,
        t = e9[e];
    return null == t && ((t = e5()), (e9[e] = t)), t;
}
function t2() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.x.DEFAULT,
        t = t1(e),
        n = e7[t.activeInputProfile ?? eP.m.CUSTOM],
        r = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}) };
    if (
        (null == r.vadDuringPreProcess && (r.vadDuringPreProcess = (0, et.R)({ location: "getSettings" }).enabled),
        (null == r.vadKrispActivationThreshold && !0 === n.automaticGainControl) || !0 === t.automaticGainControl)
    ) {
        let e = (0, V.F)({ location: "getSettings" });
        null != e.vadKrispActivationThreshold && (r.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return { ...t, ...n, modeOptions: r };
}
function t3(e) {
    let t = t2(e.context),
        n = t.mode;
    e.context === ek.x.DEFAULT && (0, J.N)(!1, !1);
    let { showPTTSpeakingIndicator: r } = ep.A.getConfig({ location: "setInputMode" }),
        i = r && n === eL.TBI.PUSH_TO_TALK;
    e.setInputMode(n, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: !!i || t.modeOptions.autoThreshold,
        vadUseKrisp: (!!i || t.modeOptions.vadUseKrisp) && rg(),
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
        n = !tt || t.mute || t.deaf;
    e.context === ek.x.DEFAULT
        ? (n = n || tc || td || t_ || !eu.A.didHavePermission(eM.iL.AUDIO))
        : e.context === ek.x.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === ek.x.DEFAULT && O.A.updateNativeMute();
}
function t5(e) {
    e !== tr && (null != s && e8.setGoLiveSource(null, tr), (tr = e));
}
function t7() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : th,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
        n = s;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, eA.isWindows)()
                ? b.c1(n.desktopSource.soundshareId)
                : null != n.desktopSource.sourcePid && t2().videoHook && b.c1(n.desktopSource.sourcePid),
            e8.setGoLiveSource(null, tr)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            e8.setGoLiveSource(null, tr),
        th || e)
    ) {
        let t = t2().videoDeviceId;
        th && t === ek.dx && tm === ek.dx && tp !== ek.qe ? (t = tp) : (tm = t),
            (tp = (th = e) ? nE(tl, t) : ek.qe),
            e8.setVideoInputDevice(tp);
    }
    if (((s = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = tQ("MediaEngineStore go live"),
                i = t2().videoHook,
                s = ns(),
                a = s ? (na() ? ew.zl : ew.eg) : 0,
                o = !1;
            (0, eA.isWindows)() &&
                a >= ew.zl &&
                (o =
                    !0 === tY
                        ? es.q.getConfig({ location: "updateVideo" }).enabled
                        : ei.d.getConfig({ location: "updateVideo" }).enabled);
            let l = !i || !W.f.getConfig({ location: "updateVideo" }).enabled;
            e8.setGoLiveSource(
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
                        allowScreenCaptureKit: no(),
                        videoHookStaleFrameTimeoutMs: eK,
                        graphicsCaptureStaleFrameTimeoutMs: e$,
                        hdrCaptureMode: n,
                        enableGlobalFramePoolLock: (0, K.H)({ location: "updateVideo" }).enabled,
                        useGraphicsCaptureDirtyRegions: o,
                    },
                    quality: e,
                },
                tr,
            );
        }
        null != t.cameraSource &&
            e8.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: t.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: t.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                tr,
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
    null === ts &&
        e8
            .getCodecSurvey()
            .then((e) => {
                try {
                    let t = JSON.parse(e);
                    if (null == t || null == t.available_video_decoders) throw Error("decoder survey is not available");
                    ts = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                } catch (e) {
                    eG.error("Failed to parse codec survey", e), (ts = !1);
                }
            })
            .catch((e) => {
                eG.error("Failed to get codec survey", e), (ts = !1);
            })
            .finally(() => {
                N.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
            });
}
function ne(e) {
    let t = (0, V.F)({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function nt(e, t) {
    e.setAutomaticGainControl(ne(t));
}
function nn(e, t) {
    let n = (0, ed.A)(t, r.getSystemMicrophoneMode());
    n !== t && eG.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: i } = (0, V.F)({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(i);
    let { noiseCancellationAfterProcessing: s, vadAfterWebrtc: a } = (0, Z.$)({ location: "setNoiseCancellation" });
    e.setNoiseCancellationAfterProcessing(s), e.setVADAfterWebrtc(a);
}
function nr(e) {
    let t = t2(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eC.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eC.A.hasNoiseSuppression(n) || t.noiseSuppression),
        nt(e, eC.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        nn(e, t.noiseCancellation),
        (0, eA.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function ni() {
    tu.start(eX, () => {
        eG.error("Device enumeration timed out"), em.default.track(eL.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
    }),
        e8.on(y.bg.Connection, (e) => {
            t3(e), t4(e), nr(e);
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
                let t = nT(to);
                e.setSoundshareDiscardRearChannels(t);
            }
            if ((0, eA.isWindows)())
                e.setExperimentFlag(ek.fd.SIGNAL_AV1, !0), e.setExperimentFlag(ek.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            else if ((0, eA.isMac)())
                e.setExperimentFlag(ek.fd.SIGNAL_AV1_DECODE, !0),
                    e.setExperimentFlag(ek.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            else if ((0, eA.isLinux)()) e.setExperimentFlag(ek.fd.SIGNAL_AV1_DECODE, !0);
            else if ((0, eA.isIOS)() && e4()) {
                let { enabled: t } = (0, H.$)("MediaEngineStore");
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
            e8.setHasFullbandPerformance((0, P.A)()),
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
                N.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: i });
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
                    N.h.dispatch({
                        type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                        settings: { context: e.context },
                        endReason: t,
                        errorCode: n,
                    });
                }),
                e.on(y.yq.InteractionRequired, (e) => {
                    N.h.dispatch({ type: "MEDIA_ENGINE_INTERACTION_REQUIRED", required: e });
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
                            ...(0, B.A)(s?.desktopSource),
                        });
                }),
                e.on(y.yq.NoiseCancellationError, (e) => {
                    eG.warn(`noisecancellererror event: ${e}`),
                        (0, k.QW)({ type: k.iy.NOISE_CANCELLER_ERROR, underlyingError: t8(e) }),
                        (tL = !0),
                        em.default.track(eL.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        N.h.dispatch({ type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: !0 }),
                        N.h.dispatch({ type: "AUDIO_SET_NOISE_CANCELLATION", enabled: !1 }),
                        N.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e });
                }),
                e.on(y.yq.VoiceActivityDetectorError, (e) => {
                    eG.warn(`voiceactivitydetectorerror event: ${e}`),
                        (0, k.QW)({ type: k.iy.NOISE_CANCELLER_ERROR, underlyingError: t8(e) }),
                        em.default.track(eL.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        N.h.dispatch({
                            type: "AUDIO_SET_MODE",
                            context: ek.x.DEFAULT,
                            mode: eL.TBI.VOICE_ACTIVITY,
                            options: { ...t2(ek.x.DEFAULT).modeOptions, vadUseKrisp: !1 },
                        }),
                        N.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e });
                }),
                e.on(y.yq.SdpError, (e, t, n, r) => {
                    em.default.track(eL.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: r });
                }),
                e.on(y.yq.VideoState, (t) => {
                    N.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                }),
                e.setBitRate(ev.A.bitrate),
                e.applyVideoQualityMode(eD.A.mode),
                (0, eA.isWindows)() &&
                    e8.supports(ek.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                    e8.setAsyncVideoInputDeviceInit(!0);
        }),
        e8.on(y.bg.DeviceChange, (e, t, n) => {
            tu.stop(),
                N.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
        }),
        e8.on(y.bg.VolumeChange, (e, t) => {
            N.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
        }),
        e8.on(y.bg.DesktopSourceEnd, (e, t) => {
            N.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
        }),
        e8.on(y.bg.AudioPermission, (e) => {
            (tU = !0), N.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
        }),
        e8.on(y.bg.VideoPermission, (e) => {
            N.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
        }),
        e8.on(y.bg.WatchdogTimeout, async () => {
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
        e8.on(y.bg.VideoInputInitialized, (e) => {
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
        e8.on(y.bg.AudioInputInitialized, (e) => {
            em.default.track(eL.HAw.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * eg.A.Millis.SECOND),
                rtc_connection_id: eR.A.getRTCConnectionId(),
            });
        }),
        e8.on(y.bg.ClipsRecordingRestartNeeded, () => {
            N.h.dispatch({ type: "CLIPS_RESTART" });
        }),
        e8.on(y.bg.ClipsInitFailure, (e, t) => {
            N.h.wait(() => {
                N.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t });
            });
        }),
        e8.on(y.bg.ClipsRecordingEnded, (e, t) => {
            a?.desktopSource?.id === e && (null != t && s?.desktopSource?.soundshareId !== t && b.c1(t), (a = null));
        }),
        e8.on(y.bg.NativeScreenSharePickerUpdate, (e, t) => {
            N.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
        }),
        e8.on(y.bg.NativeScreenSharePickerCancel, (e) => {
            N.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
        }),
        e8.on(y.bg.NativeScreenSharePickerError, (e) => {
            N.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
        }),
        e8.on(y.bg.AudioDeviceModuleError, (e, t, n) => {
            em.default.track(eL.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
        }),
        e8.on(y.bg.VideoCodecError, (e) => {
            let t = "encode" === e.mode ? k.iy.VIDEO_ENCODE_ERROR : k.iy.VIDEO_DECODE_ERROR,
                n = { videoCodec: e.codecStandard, errorMessage: e.message };
            (0, k.QW)(
                t === k.iy.VIDEO_ENCODE_ERROR
                    ? { type: t, ...n, videoEncoder: e.implName }
                    : { type: t, ...n, videoDecoder: e.implName },
            );
        }),
        e8.on(y.bg.ConnectionStats, (e) => {
            N.h.dispatch({
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
        e8.on(y.bg.VoiceQueueMetrics, (e) => {
            let t = r0(e);
            null !== t && em.default.track(eL.HAw.VOICE_QUEUE_METRICS, t);
        }),
        e8.setOnVideoContainerResized((e, t, n) => {
            N.h.wait(() =>
                N.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
            );
        }),
        n9(),
        o.reset(),
        (0, eb.w)().then((e) => {
            null != e && ((tj = e.gpu_brand), (tY = e.has_intel_hybrid_igpu));
        }),
        e8.on(y.bg.SystemMicrophoneModeChange, (e) => {
            (f = e), e8.eachConnection(nr), r.emitChange();
        });
}
function ns() {
    return (0, eA.isWindows)() && T().satisfies(R.A?.os.release, ew.yg);
}
function na() {
    return (0, eA.isWindows)() && T().satisfies(R.A?.os.release, ew.fG);
}
function no() {
    return (0, eA.isMac)() && e8.supports(ek.O5.SCREEN_CAPTURE_KIT) && T().satisfies(R.A?.os.release, ew.e);
}
function nl() {
    return (
        (0, eA.isWindows)() &&
        e8.supports(ek.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        e8.supports(ek.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nu() {
    return e8.supports(ek.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function nc() {
    let e = v.w.get("audio");
    null != e && (v.w.set(eF, { [ek.x.DEFAULT]: e }), v.w.remove("audio")),
        (e9 = v.w.get(eF) ?? {}),
        E().each(e9, (e) => {
            E().defaultsDeep(e, e5()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, eS.OH)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== eB &&
                    ((e.vadUseKrispSettingVersion = eB), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                e.vadThrehsoldMigrated ||
                    ((e.vadThrehsoldMigrated = !0), e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = ez)),
                e8.supports(ek.O5.SIDECHAIN_COMPRESSION) &&
                    e.sidechainCompressionSettingVersion < ej &&
                    ((e.sidechainCompressionSettingVersion = ej), (e.sidechainCompression = !0)),
                (0, eA.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== eH &&
                      ((e.ncUseKrispjsSettingVersion = eH), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== eV &&
                      ((e.ncUseKrispSettingVersion = eV), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
        }),
        nf();
}
function nd(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ek.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = t1(t);
    return Object.assign(r, e), !__OVERLAY__ && n && v.w.set(eF, e9), r;
}
function n_() {
    v.w.remove(eF), location.reload();
}
function nf() {
    let e = t2();
    nA(e.inputDeviceId),
        e8.setAudioOutputDevice(e.outputDeviceId),
        t7(),
        e8.setInputVolume(e.inputVolume),
        e8.setOutputVolume(e.outputVolume),
        e8.setAecDump(e.aecDumpEnabled),
        e8.setSidechainCompression(e.sidechainCompression),
        e8.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        e8.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        (0, eA.isLinux)() && eT.Ay?.setOpenH264Enabled?.(e.openH264Enabled);
}
function nh() {
    tt || e8.enable().then(() => N.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function np(e) {
    return { id: ek.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
}
function nm(e, t) {
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
function nE(e, t) {
    let n = e[t] ?? e[ek.dx] ?? E()(e).values().first();
    return null != n ? n.id : t;
}
function ng(e) {
    if (!(0, eA.isWindows)() || !j.A.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects)
        return;
    let t = ta[e];
    t?.guid != null && (0, e_.A)(t.guid, e, e8);
}
function nA(e) {
    e8.setAudioInputDevice(e), ng(e);
}
function nI(e) {
    let t = ta;
    if (((ta = nm(e, eU.intl.string(eU.t["/QIjDA"]))), !E().isEqual(ta, t))) {
        let e = t2();
        nA(nE(ta, e.inputDeviceId)), e8.eachConnection(nr);
    }
}
function nT(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nS(e) {
    e8.eachConnection((t) => {
        t.context === ek.x.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function ny(e) {
    let t = to;
    if (((to = nm(e, eU.intl.string(eU.t.xlUg0v))), !E().isEqual(to, t))) {
        let e = t2(),
            n = nE(to, e.outputDeviceId);
        e8.setAudioOutputDevice(n);
        let r = nT(t),
            i = nT(to);
        r !== i && nS(i);
    }
}
function nv(e) {
    tT = e.length > 0;
    let t = tl;
    if (((tl = nm(e, eU.intl.string(eU.t.WKWARY))), th && !E().isEqual(tl, t))) {
        let e = void 0 !== tl[tp],
            n = tp === ek.dx && t[ek.dx]?.disabled,
            r = "Firefox" === A().name && "" === tp && t[tp]?.name === "Default" && !t[tp]?.disabled;
        t7(e || n || r);
    }
}
function nC() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = eh.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let r = n === ex.W.USER ? ek.x.DEFAULT : ek.x.STREAM,
            i = r === ek.x.STREAM ? ek.Cn : ek.Hz,
            s = t[n] ?? {},
            { localMutes: a, localVolumes: o } = t2(r);
        for (let [e, t] of Object.entries(s))
            null == (0, ef.tM)(r, e) &&
                (t.muted ? (a[e] = !0) : delete a[e],
                t.volume !== i ? (o[e] = t.volume) : delete o[e],
                e8.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, r));
        if (e)
            for (let e of new Set([...Object.keys(a), ...Object.keys(o)]))
                null == s[e] &&
                    (delete a[e],
                    delete o[e],
                    e8.eachConnection((t) => {
                        t.setLocalVolume(e, i), t.setLocalMute(e, !1);
                    }, r));
        nd({ localMutes: a, localVolumes: o }, r);
    }
}
function nN(e) {
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
function nR(e, t) {
    if (t) {
        let { soundshareId: t, soundshareSession: n } = nN(e);
        if (null != t) return nb(t, n), { soundshareId: t, soundshareSession: n };
    }
    return null != e && t2().videoHook && b.GH(e), { soundshareId: null, soundshareSession: null };
}
function nb(e, t) {
    (0, eA.isWindows)() &&
        e > 1 &&
        b.GH(e, { soundshare_session: t }).then((t) => {
            null == t ||
                F.Ay.shouldContinueWithoutElevatedProcessForPID(e) ||
                N.h.wait(() => {
                    N.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: t });
                });
        });
}
function nO(e) {
    (i = e.sessionId), (tc = !1), (tf = !1);
    let t = t2();
    nl() && (nu() ? rR(ek.rB.AUTOMATIC) : t.automaticAudioSubsystem && rb()),
        e8.supports(ek.O5.OFFLOAD_ADM_CONTROLS) && e8.setOffloadAdmControls(!0),
        (0, eA.isIOS)() &&
            (0, z.Y)("handleConnectionOpen").enabled &&
            e8.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
        ng(t.inputDeviceId),
        nC();
}
function nD(e) {
    let { mediaEngineState: t } = e;
    (e9 = t.settingsByContext),
        (ta = t.inputDevices),
        (to = t.outputDevices),
        (tH = t.appSupported),
        (tR = t.krispModuleLoaded),
        (c = t.krispVersion),
        (tr = t.goLiveContext);
}
function nL() {
    i = null;
}
function nw() {
    return (0, eA.isWeb)() && r.startDavePreload(), !1;
}
function nM(e) {
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
            nH(), nj();
    }
}
function nx(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (tc = t.mute || t.suppress), (tf = t.deaf), e8.eachConnection(t4);
            let e = null != t.guildId && null != t.channelId && null != tD && tD !== t.channelId,
                n = !tC && null == t.channelId;
            return t7(!e && !n && th), (tD = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== ey.default.getId() || null != eR.A.getChannelId() || t7(!1, null), e;
    }, !1);
}
function nP(e) {
    let { mute: t } = e;
    (td = t), e8.eachConnection(t4);
}
function nk(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = t2(t);
    if (t === ek.x.DEFAULT && (eu.A.requestPermission(eM.iL.AUDIO), t_)) return !1;
    (r = !i && !r) || (i = !1), n || (tE = !0), nd({ mute: r, deaf: i }, t), e8.eachConnection(t4);
}
function nU(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    nd({ mute: n }, t), r || (tE = !0), e8.eachConnection(t4);
}
function nG(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== ex.oD.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    nC(!0);
}
function nF(e) {
    let { context: t } = e;
    nd({ deaf: !t2(t).deaf }, t), e8.eachConnection(t4);
}
function nB(e) {
    let { context: t, userId: n } = e;
    if (n === ey.default.getId()) return;
    let { localMutes: r } = t2(t);
    r[n] ? delete r[n] : (r[n] = !0),
        nd({ localMutes: r }, t),
        e8.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nV(e) {
    let { context: t, userId: n, videoToggleState: r, persist: i, isAutomatic: s } = e;
    p()(!(i && s), "These are not allowed to both be true.");
    let a = r === eL.bb8.DISABLED,
        { disabledLocalVideos: o } = t2(t),
        l = o[n] ?? !1,
        u = tF.has(n),
        c = r === eL.bb8.AUTO_ENABLED || r === eL.bb8.MANUAL_ENABLED;
    eG.info(`disableVideo=${a} currentlyDisabled=${l} currentlyAutoDisabled=${u}, isVideoShown=${c}`),
        p()(!(u && !l), "If you are auto-disabled, then you are also disabled.");
    let d = a !== l,
        _ = t === ek.x.DEFAULT,
        f = s && d && _,
        h = i && d && _;
    eG.info(`changed=${d} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${f} isManualToggleByUser=${h}`);
    let { videoToggleStateMap: m } = t2(t);
    if (
        (m[n] === eL.bb8.AUTO_PROBING &&
            r === eL.bb8.AUTO_ENABLED &&
            (0, el.A)(n, a ? ek.Al.AUTO_DISABLE : ek.Al.AUTO_ENABLE, c),
        (m[n] = r),
        nd({ videoToggleStateMap: m }, t, i),
        r === eL.bb8.AUTO_PROBING
            ? eR.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
            : eR.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
        tB ||
            (eG.info(`isAutoDisableAllowed=${tB} - disabling VideoHealthManager`),
            eR.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
        f)
    ) {
        if ((!a && !u) || (a && !tB)) return;
        (0, el.A)(n, a ? ek.Al.AUTO_DISABLE : ek.Al.AUTO_ENABLE, c), a ? tF.add(n) : tF.delete(n);
    } else
        h &&
            (u && !a
                ? (eG.info("disallowing auto-disable for this session because of manual override by user"),
                  (tB = !1),
                  eR.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                  (0, el.A)(n, ek.Al.MANUAL_REENABLE, c))
                : (0, el.A)(n, a ? ek.Al.MANUAL_DISABLE : ek.Al.MANUAL_ENABLE, c));
    _ && !a && tF.delete(n),
        a ? (o[n] = !0) : delete o[n],
        nd({ disabledLocalVideos: o }, t, i),
        e8.eachConnection((e) => e.setLocalVideoDisabled(n, o[n] ?? !1), t);
}
function nH() {
    if (0 === tF.size) return;
    let e = ek.x.DEFAULT,
        { disabledLocalVideos: t } = t2(e);
    tF.forEach((n) => {
        p()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            e8.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tF.clear(),
        nd({ disabledLocalVideos: t }, e, !1);
}
function nj() {
    let e = ek.x.DEFAULT,
        { videoToggleStateMap: t } = t2(e);
    for (let [e, n] of Object.entries(t)) n === eL.bb8.AUTO_PROBING && delete t[e];
    nd({ videoToggleStateMap: t }, e, !1);
}
function nY(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === ey.default.getId()) return;
    let i = t === ek.x.STREAM ? ek.Cn : ek.Hz,
        { localVolumes: s } = t2(t);
    r === i ? delete s[n] : (s[n] = r), nd({ localVolumes: s }, t), e8.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function nW(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: s } = t2(t);
    (s[n] = { left: r, right: i }), nd({ localPans: s }, t), e8.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function nK(e) {
    let { context: t, mode: n, options: r } = e;
    nd({ mode: n, modeOptions: { ...r, updatedAt: Date.now() } }, t), e8.eachConnection(t3);
}
function n$(e) {
    let { volume: t } = e;
    nd({ inputVolume: t6(t) }), e8.setInputVolume(t);
}
function nz(e) {
    let { volume: t } = e;
    nd({ outputVolume: t }), e8.setOutputVolume(t);
}
function nq(e) {
    let { id: t } = e;
    (t = nE(ta, t)),
        (ti = performance.now()),
        nd({ inputDeviceId: t }),
        nA(t),
        e8.eachConnection(nr),
        (l = void 0),
        (u = void 0),
        t$.stop(),
        (tK = !1);
    let { resetSilenceWarningOnDeviceChange: n } = ee.A.getConfig({
        location: "MediaEngineStore.handleSetInputDevice",
    });
    n && ((tS = !1), o.reset());
}
function nZ(e) {
    let { id: t } = e;
    nd({ outputDeviceId: (t = nE(to, t)) }), e8.setAudioOutputDevice(t);
}
function nX(e) {
    let { id: t } = e;
    nd({ videoDeviceId: (t = nE(tl, t)) }), t7();
}
function nQ(e) {
    let { inputProfile: t } = e;
    nd({ activeInputProfile: t });
    let n = t2();
    e8.eachConnection((e) => {
        t3(e), nr(e);
    }),
        e8.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        n8();
}
function nJ(e) {
    return tn !== e.required && ((tn = e.required), e.required || e8.interact(), !0);
}
function n0(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    nI(t), ny(n), nv(r);
}
function n1(e) {
    let { inputVolume: t, outputVolume: n } = e;
    nd({ inputVolume: t6(t), outputVolume: n });
}
function n2(e) {
    let t = t2(),
        n = e8.getAudioSubsystem(),
        i = e8.getAudioLayer(),
        s = nE(ta, t.inputDeviceId),
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
function n3(e) {
    let t = nd({ echoCancellation: e.enabled });
    e8.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), n8(), n2(e.location);
}
function n6(e) {
    n5(e.enabled);
}
function n4(e) {
    let t = nd({ sidechainCompressionStrength: e.strength });
    e8.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function n5(e) {
    let t = nd({ sidechainCompression: e });
    e8.setSidechainCompression(t.sidechainCompression);
}
function n7(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tV.add(n) : tV.delete(n), n8();
}
function n8() {
    let e = t2(),
        t = tV.size > 0,
        n = e.inputDeviceId,
        r = eC.A.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        s = eC.A.hasNoiseSuppression(n) || e.noiseSuppression,
        a = ne(eC.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        o = e.noiseCancellation;
    e8.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: s,
        automaticGainControlConfig: a,
        noiseCancellation: o,
    });
}
async function n9() {
    if (!e8.supports(ek.O5.VAAPI)) return;
    let e = 4098;
    if (window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let t = await window.DiscordNative.processUtils.getSystemInfo();
    (t.electronGPUInfo?.gpuDevice ?? []).some((t) => t.vendorId === e) &&
        ((tZ = !0), (tq = e8.supports(ek.O5.GAMESCOPE_CAPTURE)));
}
function re(e) {
    let t = nd({ noiseSuppression: e.enabled });
    e8.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), n8(), n2(e.location);
}
function rt(e) {
    let t = nd({ automaticGainControl: e.enabled });
    e8.eachConnection((e) => nt(e, t.automaticGainControl)), n8(), n2(e.location);
}
function rn(e) {
    let t = nd({ noiseCancellation: e.enabled });
    e8.eachConnection((e) => nn(e, t.noiseCancellation)), n8(), n2(e.location);
}
function rr(e) {
    ec.A.setKrispModelOverride(e.model), (_ = e.model), n8();
}
function ri(e) {
    (0, eA.isWeb)() || ((tO = e.enabled), e8.setNoiseCancellationEnableStats?.(e.enabled));
}
function rs(e) {
    nd({ silenceWarning: e.enabled });
}
function ra(e) {
    e8.setDebugLogging(e.enabled);
}
function ro(e) {
    let { level: t } = e;
    (d = t), ec.A.setKrispSuppressionLevel(t);
}
function rl(e) {
    nd({ videoHook: e.enabled });
}
function ru(e) {
    nd({ experimentalSoundshare2: e.enabled });
}
function rc(e) {
    let { enabled: t } = e;
    nd({ useSystemScreensharePicker: t });
}
function rd(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = nd({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r });
    e8.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function r_(e) {
    let { enabled: t } = e;
    nd({ qos: t }), e8.eachConnection((e) => e.setQoS(t));
}
function rf() {
    n_();
}
function rh(e) {
    let { osVolume: t, osMuted: n } = e;
    (u = t), (l = n);
}
function rp(e) {
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
                    input_device_name: ta[nE(ta, t2().inputDeviceId)]?.name,
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
function rm(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === t_) return !1;
    (t_ = n), e8.eachConnection(t4);
}
function rE(e) {
    let { state: t, permissionType: n } = e,
        r = t === eM.hL.ACCEPTED;
    switch (n) {
        case eM.iL.AUDIO:
            (tU = !0), e8.eachConnection(t4);
            break;
        case eM.iL.CAMERA:
            !r && th && t7(!1);
            break;
        default:
            return !1;
    }
}
function rg() {
    return tR || !1;
}
async function rA() {
    try {
        await eT.Ay.ensureModule("discord_krisp");
        let e = eT.Ay.requireModule("discord_krisp");
        (tR = !0),
            (c = e.getSdkVersion?.()),
            (d = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (tb = e), r.emitChange();
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
        em.default.track(eL.HAw.VOICE_PROCESSING, { noise_canceller_error: e }), nd({ noiseCancellation: !1 });
    } finally {
        tN = !1;
    }
}
function rI() {
    return (0, eA.isWindows)() || (0, eA.isLinux)() || (0, eA.isMac)();
}
function rT() {
    !rI() || __OVERLAY__ || tN || tR
        ? (0, eA.isWeb)() && e8.supports(ek.O5.NOISE_CANCELLATION)
            ? ((tR = !0), r.emitChange())
            : (0, eA.isWeb)() && nd({ noiseCancellation: !1 })
        : ((tN = !0), rA());
}
async function rS() {
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
function ry() {
    (0, eA.isLinux)() && rS();
}
function rv(e) {
    let { deviceId: t, active: n, available: r } = e;
    tx[t] = { active: n, available: r };
}
function rC(e) {
    let t = e.bypassEnabled;
    nd({ bypassSystemInputProcessing: t }), e8.setAudioInputBypassSystemProcessing(t), n2(e.location);
}
function rN(e) {
    rR(e.subsystem);
}
function rR(e) {
    e === ek.rB.AUTOMATIC
        ? (nd({ automaticAudioSubsystem: !0 }), rb())
        : (nd({ automaticAudioSubsystem: !1 }), e8.setAudioSubsystem(e));
}
function rb() {
    e8.queueAudioSubsystem(ek.rB.EXPERIMENTAL);
}
function rO(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && t7(i, null), null != t || null == n)) {
        tC = !1;
        return;
    }
    if (tC) return;
    tC = !0;
    let s = t2();
    (s.mute || s.deaf) && (nd({ deaf: !1, mute: !1 }), e8.eachConnection(t4));
}
function rD(e) {
    let { application: t } = e;
    te.add(t.id);
}
function rL(e) {
    let { application: t } = e;
    te.delete(t.id);
}
function rw(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (tt = !1), e8.eachConnection(t4);
                break;
            case "video":
                t7(!1);
        }
}
function rM(e) {
    (tt = e.enabled), e.unmute && nd({ mute: !1, deaf: !1 }), e8.eachConnection(t4);
}
function rx(e) {
    let { enabled: t } = e;
    eu.A.requestPermission(eM.iL.CAMERA), t7(t);
}
function rP(e) {
    let { sourceId: t, applicationName: n, quality: i } = e;
    if (!(0, M.Ao)() || null == R.A) return !1;
    null != a &&
        (e8.setClipsSource(null),
        (0, eA.isWindows)() &&
            (null != a.desktopSource.soundshareId
                ? b.c1(a.desktopSource.soundshareId)
                : null != a.desktopSource.sourcePid && t2().videoHook && b.c1(a.desktopSource.sourcePid)));
    let s = eE.A.getPidFromDesktopSource(t),
        { soundshareId: o, soundshareSession: l } = nR(s, !0);
    a = { desktopSource: { id: t, sourcePid: s, soundshareId: o, soundshareSession: l }, quality: i };
    let u = tQ("MediaEngineStore clips"),
        c = t2().videoHook,
        d = !c || !W.f.getConfig({ location: "handleClipsInit" }).enabled;
    e8.setClipsSource({
        desktopDescription: {
            id: a.desktopSource.id,
            soundshareId: a.desktopSource.soundshareId,
            useVideoHook: c,
            useHookFramePacer: d,
            useGraphicsCapture: ns(),
            useCaptureDeviceForEncode: !1,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: no(),
            videoHookStaleFrameTimeoutMs: eK,
            graphicsCaptureStaleFrameTimeoutMs: e$,
            hdrCaptureMode: u,
        },
        quality: i,
        applicationName: n,
        videoEncoderExperiments: r.getVideoEncoderExperiments(ek.x.STREAM, "streamer"),
    });
}
function rk(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((a = null), e8.setClipsSource(null));
}
function rU(e) {
    let { settings: t } = e;
    if (t?.desktopSettings != null) {
        let e = null,
            n = null,
            { sourceId: r, sound: i } = t.desktopSettings,
            s = t.context ?? ek.x.DEFAULT,
            a = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
            o = eE.A.getPidFromDesktopSource(r);
        eA.isPlatformEmbedded && ({ soundshareId: e, soundshareSession: n } = nR(o, i)),
            t5(s),
            t7(s === ek.x.STREAM && th, {
                desktopSource: { id: r, sourcePid: o, soundshareId: e, soundshareSession: n },
                quality: { resolution: a.resolution, frameRate: a.frameRate },
            });
    } else if (t?.cameraSettings != null) {
        let e = t.context ?? ek.x.DEFAULT,
            { videoDeviceGuid: n, audioDeviceGuid: r } = t.cameraSettings,
            i = e === ek.x.STREAM && th,
            s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
        t7(i, {
            cameraSource: { videoDeviceGuid: n, audioDeviceGuid: r },
            quality: { resolution: s.resolution, frameRate: s.frameRate },
        });
    } else t7(th, null);
}
function rG(e) {
    let { section: t } = e;
    return t === eL.nc_.VOICE && nh(), !1;
}
function rF() {
    return e8.eachConnection(nr), !1;
}
function rB(e) {
    let { enabled: t } = e,
        n = nd({ aecDumpEnabled: t });
    e8.setAecDump(n.aecDumpEnabled);
}
function rV(e) {
    let { enabled: t } = e;
    nd({ openH264Enabled: t }), eT.Ay?.setOpenH264Enabled?.(t);
}
function rH(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (e9 = Object.values(ek.x).reduce((e, n) => {
        let r = n,
            i = e5();
        return (e[r] = E().merge(i, t[r])), e;
    }, {})),
        v.w.set(eF, e9),
        nf();
}
function rj(e) {
    let { state: t } = e,
        n = G.A.isEnabled();
    if (t === eL.g6G.BACKGROUND && th && !n) (tI = !0), t7(!1);
    else {
        if (t !== eL.g6G.ACTIVE || !tI) return !1;
        (tI = !1), t7(!0);
    }
    return !0;
}
function rY(e) {
    e8.eachConnection((t) => t.setBitRate(e.bitrate));
}
function rW() {
    if ((!th && null == s) || null != eR.A.getRTCConnectionId()) return !1;
    t7(!1, null);
}
function rK() {
    return !!tL && ((tL = !1), !0);
}
function r$(e) {
    e8.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function rz(e) {
    let { settings: t } = e;
    e8.applyMediaFilterSettings(t).finally(() => {
        (tw = !1), r.emitChange();
    });
}
function rq() {
    tw = !0;
}
function rZ() {
    tw = !1;
}
function rX(e) {
    tW = e.enabled;
}
function rQ() {
    if ((0, eA.isDesktop)() && eA.isPlatformEmbedded && !tX) {
        tX = !0;
        let e = async () => {
            let t = await new Promise((e) => {
                eT.Ay.pollQueueMetrics((t) => {
                    e(t);
                });
            });
            t.periodMs = ek.tl;
            let n = r0(t);
            null !== n && em.default.track(eL.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, ek.tl);
        };
        setTimeout(e, ek.tl);
    }
}
class rJ extends S.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        ni(),
            nc(),
            rT(),
            ry(),
            nj(),
            rQ(),
            (0, eA.isWindows)() && eA.isPlatformEmbedded && t9(),
            (tH = {
                [ek.O5.VIDEO]: e8.supports(ek.O5.VIDEO),
                [ek.O5.DESKTOP_CAPTURE]: e8.supports(ek.O5.DESKTOP_CAPTURE),
                [ek.O5.HYBRID_VIDEO]: e8.supports(ek.O5.HYBRID_VIDEO),
            }),
            this.waitFor(ey.default, ev.A, eC.A, eN.A, L.A, U.A, eR.A, F.Ay, eh.A, eO.default, eD.A);
    }
    supports(e) {
        return e8.supports(e);
    }
    supportsInApp(e) {
        return tH[e] || e8.supports(e);
    }
    isSupported() {
        return e8.supported();
    }
    isNoiseSuppressionSupported() {
        return e8.supports(ek.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return rg();
    }
    isNoiseCancellationError() {
        return tL;
    }
    isAutomaticGainControlSupported() {
        return e8.supports(ek.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nu() && (e8.supports(ek.O5.LEGACY_AUDIO_SUBSYSTEM) || e8.supports(ek.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return e8.supports(ek.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === e8.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return rg();
    }
    isAecDumpSupported() {
        return e8.supports(ek.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return e8.supports(ek.O5.VIDEO) && e8.supports(ek.O5.SIMULCAST);
    }
    getAecDump() {
        return t2().aecDumpEnabled;
    }
    getMediaEngine() {
        return e8;
    }
    getVideoComponent() {
        return e8.Video;
    }
    getCameraComponent() {
        return e8.Camera;
    }
    getKrispSuppressionLevel() {
        return d ?? 100;
    }
    getKrispEnableStats() {
        return tO;
    }
    isEnabled() {
        return tt;
    }
    isMute() {
        return this.isSelfMute() || tc;
    }
    isDeaf() {
        return this.isSelfDeaf() || tf;
    }
    hasContext(e) {
        return null != e9[e];
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
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (eC.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return tW;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.x.DEFAULT;
        return !this.isSupported() || t2(e).deaf;
    }
    isVideoEnabled() {
        return th && tT;
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
        return tr === e && null != s;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.x.STREAM;
        return tr === e && null != s && s.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ek.x.DEFAULT;
        return e !== ey.default.getId() && (t2(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return e8.supports(ek.O5.DISABLE_VIDEO);
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
        return tr;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return ti;
    }
    isH264MfDecodeAvailable() {
        return ts;
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
            E().each(e9, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === eL.TBI.PUSH_TO_TALK && te.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nE(ta, t2().inputDeviceId);
    }
    getOutputDeviceId() {
        return nE(to, t2().outputDeviceId);
    }
    getVideoDeviceId() {
        return nE(tl, t2().videoDeviceId);
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
        return eC.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return e8.supports(ek.O5.SIDECHAIN_COMPRESSION) && t2().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return t2().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return t2().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tP && tP;
    }
    getOpenH264Enabled() {
        return (0, eA.isLinux)() && t2().openH264Enabled;
    }
    getLoopback() {
        return tV.size > 0;
    }
    getLoopbackReasons() {
        return tV;
    }
    getNoiseSuppression() {
        let e = t2();
        return eC.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = t2();
        return eC.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
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
        return e8.getDebugLogging();
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
        return nl() && t2().automaticAudioSubsystem ? ek.rB.AUTOMATIC : e8.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return e8.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return t2().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eP.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.x.DEFAULT;
        return t2(e);
    }
    getState() {
        return {
            settingsByContext: e9,
            inputDevices: ta,
            outputDevices: to,
            appSupported: tH,
            krispModuleLoaded: tR,
            krispVersion: c,
            krispSuppressionLevel: d,
            goLiveSource: s,
            goLiveContext: tr,
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
        e8.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return tn;
    }
    getVideoHook() {
        return t2().videoHook;
    }
    supportsVideoHook() {
        return e8.supports(ek.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = t2().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return e8.supports(ek.O5.EXPERIMENTAL_SOUNDSHARE) && T().satisfies(R.A?.os.release, ew.$x);
    }
    supportsHookSoundshare() {
        return (0, eA.isWindows)() && e8.supports(ek.O5.SOUNDSHARE) && T().satisfies(R.A?.os.release, ew.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = t2().useSystemScreensharePicker,
            n = (0, eA.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return e8.supports(ek.O5.NATIVE_SCREENSHARE_PICKER);
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
        return tb;
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
            ? e8.supports(ek.O5.SOUNDSHARE) && T().satisfies(R.A?.os.release, ew.P$) && no()
            : (0, eA.isWindows)()
              ? e8.supports(ek.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, eA.isLinux)() && e8.supports(ek.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, eA.isWindows)()) {
            if (this.getBypassSystemInputProcessing()) return;
            return tx[this.getInputDeviceId()]?.active?.find((e) => e === e0);
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
        return e8.fetchAsyncResources(e);
    }
    startDavePreload() {
        if (!tM && ((tM = !0), (0, eA.isWeb)())) {
            let e = { fetchDave: !0 };
            e8.fetchAsyncResources(e).catch((e) => {
                eG.warn("DAVE preload failed:", e), eI.A.captureException(e);
            });
        }
    }
    getSupportedSecureFramesProtocolVersion() {
        return e8.getSupportedSecureFramesProtocolVersion();
    }
    hasClipsSource() {
        return null != a;
    }
    getGpuBrand() {
        return tj;
    }
}
function r0(e) {
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
(r = new rJ(N.h, {
    VOICE_CHANNEL_SELECT: rO,
    VOICE_STATE_UPDATES: nx,
    CONNECTION_OPEN: nO,
    CONNECTION_CLOSED: nL,
    POST_CONNECTION_OPEN: nw,
    RTC_CONNECTION_STATE: nM,
    AUDIO_SET_TEMPORARY_SELF_MUTE: nP,
    AUDIO_TOGGLE_SELF_MUTE: nk,
    AUDIO_SET_SELF_MUTE: nU,
    AUDIO_TOGGLE_SELF_DEAF: nF,
    AUDIO_TOGGLE_LOCAL_MUTE: nB,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: nV,
    AUDIO_SET_LOCAL_VOLUME: nY,
    AUDIO_SET_LOCAL_PAN: nW,
    AUDIO_SET_MODE: nK,
    AUDIO_SET_INPUT_VOLUME: n$,
    AUDIO_SET_OUTPUT_VOLUME: nz,
    AUDIO_SET_INPUT_DEVICE: nq,
    AUDIO_SET_OUTPUT_DEVICE: nZ,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: nQ,
    AUDIO_SET_ECHO_CANCELLATION: n3,
    AUDIO_SET_SIDECHAIN_COMPRESSION: n6,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: n4,
    AUDIO_SET_LOOPBACK: n7,
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
    MEDIA_ENGINE_DEVICES: n0,
    AUDIO_VOLUME_CHANGE: n1,
    AUDIO_RESET: rf,
    AUDIO_INPUT_DETECTED: rp,
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: rh,
    AUDIO_SET_SUBSYSTEM: rN,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rC,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rM,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rx,
    MEDIA_ENGINE_PERMISSION: rw,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rU,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nX,
    MEDIA_ENGINE_INTERACTION_REQUIRED: nJ,
    USER_SETTINGS_MODAL_INIT: rG,
    USER_SETTINGS_MODAL_SET_SECTION: rG,
    CERTIFIED_DEVICES_SET: rF,
    RPC_APP_CONNECTED: rD,
    RPC_APP_DISCONNECTED: rL,
    OVERLAY_INITIALIZE: nD,
    APP_STATE_UPDATE: rj,
    SET_CHANNEL_BITRATE: rY,
    SET_VAD_PERMISSION: rm,
    SET_NATIVE_PERMISSION: rE,
    SET_CHANNEL_VIDEO_QUALITY_MODE: r$,
    MEDIA_ENGINE_SET_AEC_DUMP: rB,
    MEDIA_ENGINE_SET_OPENH264_ENABLED: rV,
    MEDIA_ENGINE_RESET_SETTINGS: rH,
    CHANNEL_DELETE: rW,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rK,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rz,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rq,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rZ,
    USER_SETTINGS_PROTO_UPDATE: nG,
    CLIPS_INIT: rP,
    CLIPS_SETTINGS_UPDATE: rk,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rX,
    MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: rv,
})),
    (o = new q.A(e8, r));
let r1 = r;
