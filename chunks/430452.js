"use strict";
let r, i, s, a, o, l, u, c, d, _, f;
n.d(t, { Ay: () => r4 }), n(323874), n(14289), n(35956), n(321073), n(790599);
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
    H = n(582220),
    j = n(544746),
    Y = n(448215),
    W = n(934341),
    K = n(374480),
    $ = n(658046),
    z = n(621963),
    q = n(227493),
    Z = n(264866),
    X = n(927170),
    Q = n(342092),
    J = n(233232),
    ee = n(140175);
n(491642);
var et = n(801644),
    en = n(223572),
    er = n(147490),
    ei = n(993628),
    es = n(886124),
    ea = n(165479),
    eo = n(896014),
    el = n(765396),
    eu = n(75076),
    ec = n(674966),
    ed = n(559633),
    e_ = n(3527),
    ef = n(90361),
    ep = n(879172),
    eh = n(617617),
    em = n(499156),
    eE = n(954571),
    eg = n(353835),
    eA = n(927813),
    eI = n(723702),
    eT = n(728458),
    eS = n(837921),
    ey = n(350535),
    ev = n(961350),
    eN = n(131319),
    eC = n(347481),
    eR = n(734057),
    eO = n(383501),
    eb = n(851581),
    eD = n(287809),
    eL = n(117549),
    ew = n(652215),
    eM = n(502075),
    ex = n(765682),
    eP = n(355097),
    ek = n(509381),
    eU = n(731854),
    eG = n(985018);
let eF = new x.A("MediaEngineStore"),
    eV = "MediaEngineStore",
    eB = 4,
    eH = 1,
    ej = 1,
    eY = 1,
    eW = 0.5,
    eK = { left: 1, right: 1 },
    e$ = 500,
    ez = 5 * eA.A.Millis.SECOND,
    eq = -60,
    eZ = 100,
    eX = 2 * eA.A.Millis.SECOND,
    eQ = 30 * eA.A.Millis.SECOND,
    eJ = +eA.A.Millis.MINUTE,
    e0 = !0,
    e1 = "deep_noise_suppression",
    e2 = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2",
    e3 = "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f",
    e6 = 0,
    e4 = null,
    e5 = null;
function e7() {
    if (!(0, eI.isIOS)() || null == e4) return !1;
    let e = e4();
    if (null == e || !e.startsWith("ARM64_")) return !1;
    let t = e.substring(6);
    return ("T" === t[0] || "S" === t[0]) && parseInt(t.substring(1), 10) >= 8122;
}
function e8() {
    return {
        mode: ew.TBI.VOICE_ACTIVITY,
        modeOptions: {
            threshold: eq,
            autoThreshold: eI.isPlatformEmbedded || __OVERLAY__,
            vadUseKrisp: !0,
            vadKrispActivationThreshold: eW,
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
        inputVolume: eU.Hz,
        outputVolume: eU.Hz,
        inputDeviceId: eU.dx,
        outputDeviceId: eU.dx,
        videoDeviceId: eU.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: te.supports(eU.O5.VIDEO_HOOK),
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
let e9 = {
        [ek.m.CUSTOM]: {},
        [ek.m.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [ek.m.STUDIO]: {
            mode: ew.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    te = (0, y.hB)((0, y.WI)());
eF.enableNativeLogger(!0);
let tt = {},
    tn = new Set([eU.x.DEFAULT]),
    tr = te.supports(eU.O5.AUTO_ENABLE),
    ti = !1,
    ts = eU.x.STREAM,
    ta = performance.now(),
    to = null,
    tl = null,
    tu = { [eU.dx]: nA("No Input Devices") },
    tc = { [eU.dx]: nA("No Output Devices") },
    td = { [eU.dx]: nA("No Video Devices") },
    t_ = new N.Ep(),
    tf = !1,
    tp = !1,
    th = !1,
    tm = !1,
    tE = !1,
    tg = eU.qe,
    tA = eU.qe,
    tI = !1,
    tT = !1,
    tS = new N.Ep(),
    ty = !1,
    tv = !1,
    tN = !1,
    tC = !1,
    tR = new N.Ep(),
    tO = !1,
    tb = !1,
    tD = !1,
    tL = [],
    tw = !1,
    tM = null,
    tx = !1,
    tP = !1,
    tk = !1,
    tU = {},
    tG = null,
    tF = null,
    tV = !1;
ec.A.hasPermission(ex.iL.AUDIO, { showAuthorizationError: !1 }),
    ec.A.hasPermission(ex.iL.CAMERA, { showAuthorizationError: !1 });
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
    return (0, z.p)({ location: e }).hdrCaptureMode;
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
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.DEFAULT,
        t = tt[e];
    return null == t && ((t = e8()), (tt[e] = t)), t;
}
function t4() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.DEFAULT,
        t = t6(e),
        n = e9[t.activeInputProfile ?? ek.m.CUSTOM],
        r = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}) };
    if (
        (null == r.vadDuringPreProcess && (r.vadDuringPreProcess = (0, en.R)({ location: "getSettings" }).enabled),
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
    e.context === eU.x.DEFAULT && (0, ee.N)(!1, !1);
    let { showPTTSpeakingIndicator: r } = em.A.getConfig({ location: "setInputMode" }),
        i = r && n === ew.TBI.PUSH_TO_TALK;
    e.setInputMode(n, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: !!i || t.modeOptions.autoThreshold,
        vadUseKrisp: (!!i || t.modeOptions.vadUseKrisp) && rS(),
        vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? eW,
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        vadDuringPreProcess: t.modeOptions.vadDuringPreProcess ?? !1,
        pttReleaseDelay: Math.round(t.modeOptions.delay),
    });
}
function t7(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eU.Hz;
    return E().clamp(e, 0, t);
}
function t8(e) {
    let t = t4(e.context),
        n = !tr || t.mute || t.deaf;
    e.context === eU.x.DEFAULT
        ? (n = n || tf || tp || th || !ec.A.didHavePermission(ex.iL.AUDIO))
        : e.context === eU.x.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eU.x.DEFAULT && b.A.updateNativeMute();
}
function t9(e) {
    e !== ts && (null != s && te.setGoLiveSource(null, ts), (ts = e));
}
function ne() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tE,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
        n = s;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, eI.isWindows)()
                ? O.c1(n.desktopSource.soundshareId)
                : null != n.desktopSource.sourcePid && t4().videoHook && O.c1(n.desktopSource.sourcePid),
            te.setGoLiveSource(null, ts)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            te.setGoLiveSource(null, ts),
        tE || e)
    ) {
        let t = t4().videoDeviceId;
        tE && t === eU.dx && tA === eU.dx && tg !== eU.qe ? (t = tg) : (tA = t),
            (tg = (tE = e) ? nT(td, t) : eU.qe),
            te.setVideoInputDevice(tg);
    }
    if (((s = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = t1("MediaEngineStore go live"),
                i = t4().videoHook,
                s = nu(),
                a = s ? (nc() ? eM.zl : eM.eg) : 0,
                o = !1;
            (0, eI.isWindows)() &&
                a >= eM.zl &&
                (o =
                    !0 === t$
                        ? ea.q.getConfig({ location: "updateVideo" }).enabled
                        : es.d.getConfig({ location: "updateVideo" }).enabled);
            let l = !i || !K.f.getConfig({ location: "updateVideo" }).enabled;
            te.setGoLiveSource(
                {
                    desktopDescription: {
                        id: t.desktopSource.id,
                        soundshareId: t.desktopSource.soundshareId,
                        useVideoHook: i,
                        useHookFramePacer: l,
                        useGraphicsCapture: s,
                        useGraphicsCaptureApiLevel: a,
                        useCaptureDeviceForEncode: (0, eI.isWindows)(),
                        useLoopback: r.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: nd(),
                        videoHookStaleFrameTimeoutMs: e$,
                        graphicsCaptureStaleFrameTimeoutMs: ez,
                        hdrCaptureMode: n,
                        enableGlobalFramePoolLock: (0, $.H)({ location: "updateVideo" }).enabled,
                        useGraphicsCaptureDirtyRegions: o,
                    },
                    quality: e,
                },
                ts,
            );
        }
        null != t.cameraSource &&
            te.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: t.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: t.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                ts,
            );
    }
}
function nt(e) {
    switch (e) {
        case eU.CO.CPU_OVERUSE:
            return k.B6.NoiseCancellerCpuOveruse;
        case eU.CO.FAILED:
            return k.B6.NoiseCancellerFailed;
        case eU.CO.VAD_CPU_OVERUSE:
            return k.B6.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function nn() {
    null === to &&
        te
            .getCodecSurvey()
            .then((e) => {
                try {
                    let t = JSON.parse(e);
                    if (null == t || null == t.available_video_decoders) throw Error("decoder survey is not available");
                    to = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                } catch (e) {
                    eF.error("Failed to parse codec survey", e), (to = !1);
                }
            })
            .catch((e) => {
                eF.error("Failed to get codec survey", e), (to = !1);
            })
            .finally(() => {
                C.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
            });
}
function nr() {
    null === tl &&
        te
            .getCodecSurvey()
            .then((e) => {
                try {
                    let t = JSON.parse(e);
                    if (null == t || null == t.available_video_decoders) throw Error("decoder survey is not available");
                    (tl = t.available_video_decoders.some((e) => e.startsWith("video/av01") && e.endsWith("(HW)"))),
                        eF.info("AV1 decode detection complete. presence = ", tl);
                } catch (e) {
                    eF.error("Failed to parse codec survey", e), (tl = !1);
                }
            })
            .catch((e) => {
                eF.error("Failed to get codec survey", e), (tl = !1);
            });
}
function ni(e) {
    let t = (0, B.F)({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function ns(e, t) {
    e.setAutomaticGainControl(ni(t));
}
function na(e, t) {
    let n = (0, e_.A)(t, r.getSystemMicrophoneMode());
    n !== t && eF.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: i } = (0, B.F)({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(i);
    let { noiseCancellationAfterProcessing: s, vadAfterWebrtc: a } = (0, X.$)({ location: "setNoiseCancellation" });
    e.setNoiseCancellationAfterProcessing(s), e.setVADAfterWebrtc(a);
}
function no(e) {
    let t = t4(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eC.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eC.A.hasNoiseSuppression(n) || t.noiseSuppression),
        ns(e, eC.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        na(e, t.noiseCancellation),
        (0, eI.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function nl() {
    t_.start(eQ, () => {
        eF.error("Device enumeration timed out"), eE.default.track(ew.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
    }),
        te.on(y.bg.Connection, (e) => {
            t5(e), t8(e), no(e);
            let t = t4();
            e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
                e.setQoS(t.qos),
                (0, eI.isWindows)()
                    ? (e.setExperimentFlag(eU.fd.H265_HARDWARE_ONLY, !0),
                      t3().then((t) => {
                          e.setExperimentFlag(eU.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                      }))
                    : (0, eI.isMac)() && e.setExperimentFlag(eU.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                (0, eI.isLinux)() && t.openH264Enabled && e.setExperimentFlag(eU.fd.USE_LIBOPENH264_DECODER, !0),
                (0, J.J)({ location: "setupMediaEngine" }).enabled &&
                    e.setExperimentFlag(eU.fd.LOW_LATENCY_RATE_CONTROL, !0);
            let n = !1,
                i = !0;
            e.setExperimentFlag(eU.fd.RESET_DECODER_ON_ERRORS, !0),
                n && e.setExperimentFlag(eU.fd.SOFTWARE_FALLBACK_ON_ERRORS, !0),
                i && e.setExperimentFlag(eU.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
            let { swallowVolumeOnlySpeakingEvents: a } = D.A.getConfig({ location: "MediaEngineStore" });
            if ((a && e.setExperimentFlag(eU.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === eU.x.STREAM)) {
                let t = nN(tc);
                e.setSoundshareDiscardRearChannels(t);
            }
            if ((0, eI.isWindows)())
                e.setExperimentFlag(eU.fd.SIGNAL_AV1, !0), e.setExperimentFlag(eU.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            else if ((0, eI.isMac)())
                e.setExperimentFlag(eU.fd.SIGNAL_AV1_DECODE, !0),
                    e.setExperimentFlag(eU.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            else if ((0, eI.isLinux)()) e.setExperimentFlag(eU.fd.SIGNAL_AV1_DECODE, !0);
            else if ((0, eI.isIOS)()) {
                if (e7()) {
                    let { enabled: t } = (0, j.$)("MediaEngineStore");
                    t &&
                        (e.setExperimentFlag(eU.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eU.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
                }
            } else if ((0, eI.isAndroid)() && !0 === tl) {
                let { enabled: t } = (0, H.T)("MediaEngineStore");
                t &&
                    (e.setExperimentFlag(eU.fd.SIGNAL_AV1_DECODE, !0),
                    e.setExperimentFlag(eU.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
            }
            if ((0, eI.isWeb)()) {
                let { enabled: t } = W.A.getConfig({ location: "MediaEngineStore" });
                e.setExperimentFlag(eU.fd.BROWSER_HEVC, t);
            }
            for (let n of ((0, eI.isWindows)() &&
                tK?.startsWith("AMD") &&
                (0, eo.F)("MediaEngineStore").enabled &&
                e.setExperimentFlag(eU.fd.WMF_GPU_ENCODE, !0),
            (0, eI.isWindows)() &&
                tK?.startsWith("Intel") &&
                (0, el.J)("MediaEngineStore").enabled &&
                e.setExperimentFlag(eU.fd.WMF_GPU_ENCODE, !0),
            (0, eI.isWindows)() &&
                tK?.startsWith("Qualcomm") &&
                (0, eo.F)("MediaEngineStore").enabled &&
                e.setExperimentFlag(eU.fd.WMF_GPU_ENCODE, !0),
            te.setHasFullbandPerformance((0, P.A)()),
            e.setRemoteAudioHistory(1e3),
            (0, w.A)(r) && e.setClipsKeyFrameInterval(eU.X1),
            (t = t4(e.context)),
            e.setPostponeDecodeLevel(eZ),
            Object.keys(t.localMutes)))
                n !== ev.default.getId() && e.setLocalMute(n, t.localMutes[n]);
            for (let n of Object.keys(t.localVolumes))
                n !== ev.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
            for (let n of Object.keys(t.localPans)) {
                let r = t.localPans[n];
                e.setLocalPan(n, r.left, r.right);
            }
            for (let n of Object.keys(t.disabledLocalVideos)) e.setLocalVideoDisabled(n, t.disabledLocalVideos[n]);
            e.on(y.yq.Speaking, (t, n, r, i) => {
                C.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: i });
            }),
                e.context === eU.x.DEFAULT &&
                    ((tT = !1),
                    e.on(y.yq.SpeakingWhileMuted, () => {
                        let e = !tT;
                        (tT = !0),
                            e && r.emitChange(),
                            tS.start(eX, () => {
                                (tT = !1), r.emitChange();
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
                        eE.default.track(ew.HAw.VIDEOHOOK_INITIALIZED, {
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
                    eF.warn(`noisecancellererror event: ${e}`),
                        (0, k.QW)({ type: k.iy.NOISE_CANCELLER_ERROR, underlyingError: nt(e) }),
                        (tx = !0),
                        eE.default.track(ew.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        C.h.dispatch({ type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: !0 }),
                        C.h.dispatch({ type: "AUDIO_SET_NOISE_CANCELLATION", enabled: !1 }),
                        C.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e });
                }),
                e.on(y.yq.VoiceActivityDetectorError, (e) => {
                    eF.warn(`voiceactivitydetectorerror event: ${e}`),
                        (0, k.QW)({ type: k.iy.NOISE_CANCELLER_ERROR, underlyingError: nt(e) }),
                        eE.default.track(ew.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        C.h.dispatch({
                            type: "AUDIO_SET_MODE",
                            context: eU.x.DEFAULT,
                            mode: ew.TBI.VOICE_ACTIVITY,
                            options: { ...t4(eU.x.DEFAULT).modeOptions, vadUseKrisp: !1 },
                        }),
                        C.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e });
                }),
                e.on(y.yq.SdpError, (e, t, n, r) => {
                    eE.default.track(ew.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: r });
                }),
                e.on(y.yq.VideoState, (t) => {
                    C.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                }),
                e.setBitRate(eN.A.bitrate),
                e.applyVideoQualityMode(eL.A.mode),
                (0, eI.isWindows)() &&
                    te.supports(eU.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                    te.setAsyncVideoInputDeviceInit(!0);
        }),
        te.on(y.bg.DeviceChange, (e, t, n) => {
            t_.stop(),
                C.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
        }),
        te.on(y.bg.VolumeChange, (e, t) => {
            C.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
        }),
        te.on(y.bg.DesktopSourceEnd, (e, t) => {
            C.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
        }),
        te.on(y.bg.AudioPermission, (e) => {
            (tV = !0), C.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
        }),
        te.on(y.bg.VideoPermission, (e) => {
            C.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
        }),
        te.on(y.bg.WatchdogTimeout, async () => {
            let e;
            if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                try {
                    await eg.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                } catch (t) {
                    "number" == typeof t.status && (e = t.status);
                }
            eF.warn(`Watchdog timeout, report submission status: ${e ?? 200}`);
            let t = ei.A.getConfig({ location: "watchdog_timeout" }).enabled && null != R.A.processUtils.setCrashReason;
            try {
                await eE.default.track(
                    ew.HAw.VOICE_WATCHDOG_TIMEOUT,
                    { minidump_submission_error: e, will_restart: t },
                    { flush: !0 },
                );
            } catch (e) {
                eF.error("Failed to flush voice watchdog timeout analytics event", e);
            }
            t &&
                (eF.info("Relaunching app due to voice watchdog timeout"),
                await R.A.processUtils.setCrashReason("voice-watchdog-timeout"),
                v.w.set("discord_watchdog_restart_timestamp", Date.now().toString()),
                R.A.app.relaunch());
        }),
        te.on(y.bg.VideoInputInitialized, (e) => {
            eE.default.track(ew.HAw.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired
                    ? null
                    : Math.round(e.timeToFirstFrame * eA.A.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: eO.A.getMediaSessionId(),
                rtc_connection_id: eO.A.getRTCConnectionId(),
            });
        }),
        te.on(y.bg.AudioInputInitialized, (e) => {
            eE.default.track(ew.HAw.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * eA.A.Millis.SECOND),
                rtc_connection_id: eO.A.getRTCConnectionId(),
            });
        }),
        te.on(y.bg.ClipsRecordingRestartNeeded, () => {
            C.h.dispatch({ type: "CLIPS_RESTART" });
        }),
        te.on(y.bg.ClipsInitFailure, (e, t) => {
            C.h.wait(() => {
                C.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t });
            });
        }),
        te.on(y.bg.ClipsRecordingEnded, (e, t) => {
            a?.desktopSource?.id === e && (null != t && s?.desktopSource?.soundshareId !== t && O.c1(t), (a = null));
        }),
        te.on(y.bg.NativeScreenSharePickerUpdate, (e, t) => {
            C.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
        }),
        te.on(y.bg.NativeScreenSharePickerCancel, (e) => {
            C.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
        }),
        te.on(y.bg.NativeScreenSharePickerError, (e) => {
            C.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
        }),
        te.on(y.bg.AudioDeviceModuleError, (e, t, n) => {
            eE.default.track(ew.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
        }),
        te.on(y.bg.VideoCodecError, (e) => {
            let t = "encode" === e.mode ? k.iy.VIDEO_ENCODE_ERROR : k.iy.VIDEO_DECODE_ERROR,
                n = { videoCodec: e.codecStandard, errorMessage: e.message };
            (0, k.QW)(
                t === k.iy.VIDEO_ENCODE_ERROR
                    ? { type: t, ...n, videoEncoder: e.implName }
                    : { type: t, ...n, videoDecoder: e.implName },
            );
        }),
        te.on(y.bg.ConnectionStats, (e) => {
            C.h.dispatch({
                type: "MEDIA_ENGINE_CONNECTION_STATS",
                connectionStats: e.map((e) => {
                    let { stats: t, connection: n } = e;
                    return {
                        stats: t,
                        mediaEngineConnectionId: n.mediaEngineConnectionId,
                        version: e6++,
                        context: n.context,
                    };
                }),
            });
        }),
        te.on(y.bg.VoiceQueueMetrics, (e) => {
            let t = r6(e);
            null !== t && eE.default.track(ew.HAw.VOICE_QUEUE_METRICS, t);
        }),
        te.setOnVideoContainerResized((e, t, n) => {
            C.h.wait(() =>
                C.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
            );
        }),
        rr(),
        o.reset(),
        (0, eb.w)().then((e) => {
            null != e && ((tK = e.gpu_brand), (t$ = e.has_intel_hybrid_igpu));
        }),
        te.on(y.bg.SystemMicrophoneModeChange, (e) => {
            (f = e), te.eachConnection(no), r.emitChange();
        });
}
function nu() {
    return (0, eI.isWindows)() && T().satisfies(R.A?.os.release, eM.yg);
}
function nc() {
    return (0, eI.isWindows)() && T().satisfies(R.A?.os.release, eM.fG);
}
function nd() {
    return (0, eI.isMac)() && te.supports(eU.O5.SCREEN_CAPTURE_KIT) && T().satisfies(R.A?.os.release, eM.e);
}
function n_() {
    return (
        (0, eI.isWindows)() &&
        te.supports(eU.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        te.supports(eU.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nf() {
    return te.supports(eU.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function np() {
    let e = v.w.get("audio");
    null != e && (v.w.set(eV, { [eU.x.DEFAULT]: e }), v.w.remove("audio")),
        (tt = v.w.get(eV) ?? {}),
        E().each(tt, (e) => {
            E().defaultsDeep(e, e8()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, ey.OH)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== eB &&
                    ((e.vadUseKrispSettingVersion = eB), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                e.vadThrehsoldMigrated ||
                    ((e.vadThrehsoldMigrated = !0), e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = eq)),
                te.supports(eU.O5.SIDECHAIN_COMPRESSION) &&
                    e.sidechainCompressionSettingVersion < eY &&
                    ((e.sidechainCompressionSettingVersion = eY), (e.sidechainCompression = !0)),
                (0, eI.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== ej &&
                      ((e.ncUseKrispjsSettingVersion = ej), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== eH &&
                      ((e.ncUseKrispSettingVersion = eH), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
        }),
        nE();
}
function nh(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eU.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = t6(t);
    return Object.assign(r, e), !__OVERLAY__ && n && v.w.set(eV, tt), r;
}
function nm() {
    v.w.remove(eV), location.reload();
}
function nE() {
    let e = t4();
    ny(e.inputDeviceId),
        te.setAudioOutputDevice(e.outputDeviceId),
        ne(),
        te.setInputVolume(e.inputVolume),
        te.setOutputVolume(e.outputVolume),
        te.setAecDump(e.aecDumpEnabled),
        te.setSidechainCompression(e.sidechainCompression),
        te.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        te.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        (0, eI.isLinux)() && eS.Ay?.setOpenH264Enabled?.(e.openH264Enabled);
}
function ng() {
    tr || te.enable().then(() => C.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nA(e) {
    return { id: eU.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
}
function nI(e, t) {
    if (0 === e.length) {
        let e = nA(t);
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
function nT(e, t) {
    let n = e[t] ?? e[eU.dx] ?? E()(e).values().first();
    return null != n ? n.id : t;
}
function nS(e) {
    if (!(0, eI.isWindows)() || !Y.A.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects)
        return;
    let t = tu[e];
    t?.guid != null && (0, ef.A)(t.guid, e, te);
}
function ny(e) {
    te.setAudioInputDevice(e), nS(e);
}
function nv(e) {
    let t = tu;
    if (((tu = nI(e, eG.intl.string(eG.t["/QIjDA"]))), !E().isEqual(tu, t))) {
        let e = t4();
        ny(nT(tu, e.inputDeviceId)), te.eachConnection(no);
    }
}
function nN(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nC(e) {
    te.eachConnection((t) => {
        t.context === eU.x.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function nR(e) {
    let t = tc;
    if (((tc = nI(e, eG.intl.string(eG.t.xlUg0v))), !E().isEqual(tc, t))) {
        let e = t4(),
            n = nT(tc, e.outputDeviceId);
        te.setAudioOutputDevice(n);
        let r = nN(t),
            i = nN(tc);
        r !== i && nC(i);
    }
}
function nO(e) {
    tv = e.length > 0;
    let t = td;
    if (((td = nI(e, eG.intl.string(eG.t.WKWARY))), tE && !E().isEqual(td, t))) {
        let e = void 0 !== td[tg],
            n = tg === eU.dx && t[eU.dx]?.disabled,
            r = "Firefox" === A().name && "" === tg && t[tg]?.name === "Default" && !t[tg]?.disabled;
        ne(e || n || r);
    }
}
function nb() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = eh.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let r = n === eP.W.USER ? eU.x.DEFAULT : eU.x.STREAM,
            i = r === eU.x.STREAM ? eU.Cn : eU.Hz,
            s = t[n] ?? {},
            { localMutes: a, localVolumes: o } = t4(r);
        for (let [e, t] of Object.entries(s))
            null == (0, ep.tM)(r, e) &&
                (t.muted ? (a[e] = !0) : delete a[e],
                t.volume !== i ? (o[e] = t.volume) : delete o[e],
                te.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, r));
        if (e)
            for (let e of new Set([...Object.keys(a), ...Object.keys(o)]))
                null == s[e] &&
                    (delete a[e],
                    delete o[e],
                    te.eachConnection((t) => {
                        t.setLocalVolume(e, i), t.setLocalMute(e, !1);
                    }, r));
        nh({ localMutes: a, localVolumes: o }, r);
    }
}
function nD(e) {
    if (null == r)
        return (
            eF.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
            { soundshareId: null, soundshareSession: "" }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : eg.A.getAudioPid(e),
            n = "";
        return null != t && (n = eg.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n };
    }
}
function nL(e, t) {
    if (t) {
        let { soundshareId: t, soundshareSession: n } = nD(e);
        if (null != t) return nw(t, n), { soundshareId: t, soundshareSession: n };
    }
    return null != e && t4().videoHook && O.GH(e), { soundshareId: null, soundshareSession: null };
}
function nw(e, t) {
    (0, eI.isWindows)() &&
        e > 1 &&
        O.GH(e, { soundshare_session: t }).then((t) => {
            null == t ||
                F.Ay.shouldContinueWithoutElevatedProcessForPID(e) ||
                C.h.wait(() => {
                    C.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: t });
                });
        });
}
function nM(e) {
    (i = e.sessionId), (tf = !1), (tm = !1);
    let t = t4();
    n_() && (nf() ? rL(eU.rB.AUTOMATIC) : t.automaticAudioSubsystem && rw()),
        te.supports(eU.O5.OFFLOAD_ADM_CONTROLS) && te.setOffloadAdmControls(!0),
        (0, eI.isIOS)() &&
            (0, q.Y)("handleConnectionOpen").enabled &&
            te.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
        nS(t.inputDeviceId),
        nb();
}
function nx(e) {
    let { mediaEngineState: t } = e;
    (tt = t.settingsByContext),
        (tu = t.inputDevices),
        (tc = t.outputDevices),
        (tW = t.appSupported),
        (tD = t.krispModuleLoaded),
        (c = t.krispVersion),
        (ts = t.goLiveContext);
}
function nP() {
    i = null;
}
function nk() {
    return (0, eI.isWeb)() && r.startDavePreload(), !1;
}
function nU(e) {
    switch (e.state) {
        case ew.S7L.CONNECTING:
            ng();
            break;
        case ew.S7L.RTC_CONNECTING:
            (tC = !1), (l = void 0), (u = void 0), (tN = !1), (tq = !1), tZ.stop(), tR.stop(), o.reset();
            break;
        case ew.S7L.RTC_CONNECTED:
            ne();
            break;
        case ew.S7L.DISCONNECTED:
            nK(), n$();
    }
}
function nG(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (tf = t.mute || t.suppress), (tm = t.deaf), te.eachConnection(t8);
            let e = null != t.guildId && null != t.channelId && null != tM && tM !== t.channelId,
                n = !tO && null == t.channelId;
            return ne(!e && !n && tE), (tM = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== ev.default.getId() || null != eO.A.getChannelId() || ne(!1, null), e;
    }, !1);
}
function nF(e) {
    let { mute: t } = e;
    (tp = t), te.eachConnection(t8);
}
function nV(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = t4(t);
    if (t === eU.x.DEFAULT && (ec.A.requestPermission(ex.iL.AUDIO), th)) return !1;
    (r = !i && !r) || (i = !1), n || (tI = !0), nh({ mute: r, deaf: i }, t), te.eachConnection(t8);
}
function nB(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    nh({ mute: n }, t), r || (tI = !0), te.eachConnection(t8);
}
function nH(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== eP.oD.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    nb(!0);
}
function nj(e) {
    let { context: t } = e;
    nh({ deaf: !t4(t).deaf }, t), te.eachConnection(t8);
}
function nY(e) {
    let { context: t, userId: n } = e;
    if (n === ev.default.getId()) return;
    let { localMutes: r } = t4(t);
    r[n] ? delete r[n] : (r[n] = !0),
        nh({ localMutes: r }, t),
        te.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nW(e) {
    let { context: t, userId: n, videoToggleState: r, persist: i, isAutomatic: s } = e;
    h()(!(i && s), "These are not allowed to both be true.");
    let a = r === ew.bb8.DISABLED,
        { disabledLocalVideos: o } = t4(t),
        l = o[n] ?? !1,
        u = tH.has(n),
        c = r === ew.bb8.AUTO_ENABLED || r === ew.bb8.MANUAL_ENABLED;
    eF.info(`disableVideo=${a} currentlyDisabled=${l} currentlyAutoDisabled=${u}, isVideoShown=${c}`),
        h()(!(u && !l), "If you are auto-disabled, then you are also disabled.");
    let d = a !== l,
        _ = t === eU.x.DEFAULT,
        f = s && d && _,
        p = i && d && _;
    eF.info(`changed=${d} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${f} isManualToggleByUser=${p}`);
    let { videoToggleStateMap: m } = t4(t);
    if (
        (m[n] === ew.bb8.AUTO_PROBING &&
            r === ew.bb8.AUTO_ENABLED &&
            (0, eu.A)(n, a ? eU.Al.AUTO_DISABLE : eU.Al.AUTO_ENABLE, c),
        (m[n] = r),
        nh({ videoToggleStateMap: m }, t, i),
        r === ew.bb8.AUTO_PROBING
            ? eO.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
            : eO.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
        tj ||
            (eF.info(`isAutoDisableAllowed=${tj} - disabling VideoHealthManager`),
            eO.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
        f)
    ) {
        if ((!a && !u) || (a && !tj)) return;
        (0, eu.A)(n, a ? eU.Al.AUTO_DISABLE : eU.Al.AUTO_ENABLE, c), a ? tH.add(n) : tH.delete(n);
    } else
        p &&
            (u && !a
                ? (eF.info("disallowing auto-disable for this session because of manual override by user"),
                  (tj = !1),
                  eO.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                  (0, eu.A)(n, eU.Al.MANUAL_REENABLE, c))
                : (0, eu.A)(n, a ? eU.Al.MANUAL_DISABLE : eU.Al.MANUAL_ENABLE, c));
    _ && !a && tH.delete(n),
        a ? (o[n] = !0) : delete o[n],
        nh({ disabledLocalVideos: o }, t, i),
        te.eachConnection((e) => e.setLocalVideoDisabled(n, o[n] ?? !1), t);
}
function nK() {
    if (0 === tH.size) return;
    let e = eU.x.DEFAULT,
        { disabledLocalVideos: t } = t4(e);
    tH.forEach((n) => {
        h()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            te.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tH.clear(),
        nh({ disabledLocalVideos: t }, e, !1);
}
function n$() {
    let e = eU.x.DEFAULT,
        { videoToggleStateMap: t } = t4(e);
    for (let [e, n] of Object.entries(t)) n === ew.bb8.AUTO_PROBING && delete t[e];
    nh({ videoToggleStateMap: t }, e, !1);
}
function nz(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === ev.default.getId()) return;
    let i = t === eU.x.STREAM ? eU.Cn : eU.Hz,
        { localVolumes: s } = t4(t);
    r === i ? delete s[n] : (s[n] = r), nh({ localVolumes: s }, t), te.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function nq(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: s } = t4(t);
    (s[n] = { left: r, right: i }), nh({ localPans: s }, t), te.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function nZ(e) {
    let { context: t, mode: n, options: r } = e;
    nh({ mode: n, modeOptions: { ...r, updatedAt: Date.now() } }, t), te.eachConnection(t5);
}
function nX(e) {
    let { volume: t } = e;
    nh({ inputVolume: t7(t) }), te.setInputVolume(t);
}
function nQ(e) {
    let { volume: t } = e;
    nh({ outputVolume: t }), te.setOutputVolume(t);
}
function nJ(e) {
    let { id: t } = e;
    (t = nT(tu, t)),
        (ta = performance.now()),
        nh({ inputDeviceId: t }),
        ny(t),
        te.eachConnection(no),
        (l = void 0),
        (u = void 0),
        tZ.stop(),
        (tq = !1);
    let { resetSilenceWarningOnDeviceChange: n } = et.A.getConfig({
        location: "MediaEngineStore.handleSetInputDevice",
    });
    n && ((tN = !1), o.reset());
}
function n0(e) {
    let { id: t } = e;
    nh({ outputDeviceId: (t = nT(tc, t)) }), te.setAudioOutputDevice(t);
}
function n1(e) {
    let { id: t } = e;
    nh({ videoDeviceId: (t = nT(td, t)) }), ne();
}
function n2(e) {
    let { inputProfile: t } = e;
    nh({ activeInputProfile: t });
    let n = t4();
    te.eachConnection((e) => {
        t5(e), no(e);
    }),
        te.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        rn();
}
function n3(e) {
    return ti !== e.required && ((ti = e.required), e.required || te.interact(), !0);
}
function n6(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    nv(t), nR(n), nO(r);
}
function n4(e) {
    let { inputVolume: t, outputVolume: n } = e;
    nh({ inputVolume: t7(t), outputVolume: n });
}
function n5(e) {
    let t = t4(),
        n = te.getAudioSubsystem(),
        i = te.getAudioLayer(),
        s = nT(tu, t.inputDeviceId),
        a = tu[s]?.name,
        o = (0, e_.A)(t.noiseCancellation, r.getSystemMicrophoneMode());
    eE.default.track(ew.HAw.VOICE_PROCESSING, {
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
function n7(e) {
    let t = nh({ echoCancellation: e.enabled });
    te.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), rn(), n5(e.location);
}
function n8(e) {
    re(e.enabled);
}
function n9(e) {
    let t = nh({ sidechainCompressionStrength: e.strength });
    te.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function re(e) {
    let t = nh({ sidechainCompression: e });
    te.setSidechainCompression(t.sidechainCompression);
}
function rt(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tY.add(n) : tY.delete(n), rn();
}
function rn() {
    let e = t4(),
        t = tY.size > 0,
        n = e.inputDeviceId,
        r = eC.A.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        s = eC.A.hasNoiseSuppression(n) || e.noiseSuppression,
        a = ni(eC.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        o = e.noiseCancellation;
    te.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: s,
        automaticGainControlConfig: a,
        noiseCancellation: o,
    });
}
async function rr() {
    if (!te.supports(eU.O5.VAAPI)) return;
    let e = 4098;
    if (window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let t = await window.DiscordNative.processUtils.getSystemInfo();
    (t.electronGPUInfo?.gpuDevice ?? []).some((t) => t.vendorId === e) &&
        ((tJ = !0), (tQ = te.supports(eU.O5.GAMESCOPE_CAPTURE)));
}
function ri(e) {
    let t = nh({ noiseSuppression: e.enabled });
    te.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), rn(), n5(e.location);
}
function rs(e) {
    let t = nh({ automaticGainControl: e.enabled });
    te.eachConnection((e) => ns(e, t.automaticGainControl)), rn(), n5(e.location);
}
function ra(e) {
    let t = nh({ noiseCancellation: e.enabled });
    te.eachConnection((e) => na(e, t.noiseCancellation)), rn(), n5(e.location);
}
function ro(e) {
    ed.A.setKrispModelOverride(e.model), (_ = e.model), rn();
}
function rl(e) {
    (0, eI.isWeb)() || ((tw = e.enabled), te.setNoiseCancellationEnableStats?.(e.enabled));
}
function ru(e) {
    nh({ silenceWarning: e.enabled });
}
function rc(e) {
    te.setDebugLogging(e.enabled);
}
function rd(e) {
    let { level: t } = e;
    (d = t), ed.A.setKrispSuppressionLevel(t);
}
function r_(e) {
    nh({ videoHook: e.enabled });
}
function rf(e) {
    nh({ experimentalSoundshare2: e.enabled });
}
function rp(e) {
    let { enabled: t } = e;
    nh({ useSystemScreensharePicker: t });
}
function rh(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = nh({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r });
    te.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function rm(e) {
    let { enabled: t } = e;
    nh({ qos: t }), te.eachConnection((e) => e.setQoS(t));
}
function rE() {
    nm();
}
function rg(e) {
    let { osVolume: t, osMuted: n } = e;
    (u = t), (l = n);
}
function rA(e) {
    let { inputDetected: t } = e;
    if (null == t) return !1;
    if (((tC = !0 !== tN && !t), t)) (tN = !0), (tq = !1), tZ.stop(), tR.stop();
    else if (t4().mode === ew.TBI.VOICE_ACTIVITY && tN) {
        let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = et.A.getConfig({
            location: "MediaEngineStore.handleInputDetected",
        });
        e &&
            tZ.start(eJ, () => {
                eE.default.track(ew.HAw.HARDWARE_MUTE_GUESSED, {
                    input_device_name: tu[nT(tu, t4().inputDeviceId)]?.name,
                    rtc_connection_id: eO.A.getRTCConnectionId(),
                }),
                    (tq = !0),
                    r.emitChange();
            }),
            null != t &&
                tR.start(t * eA.A.Millis.MINUTE, () => {
                    (tN = !1), o.reset();
                });
    }
}
function rI(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === th) return !1;
    (th = n), te.eachConnection(t8);
}
function rT(e) {
    let { state: t, permissionType: n } = e,
        r = t === ex.hL.ACCEPTED;
    switch (n) {
        case ex.iL.AUDIO:
            (tV = !0), te.eachConnection(t8);
            break;
        case ex.iL.CAMERA:
            !r && tE && ne(!1);
            break;
        default:
            return !1;
    }
}
function rS() {
    return tD || !1;
}
async function ry() {
    try {
        await eS.Ay.ensureModule("discord_krisp");
        let e = eS.Ay.requireModule("discord_krisp");
        (tD = !0),
            (c = e.getSdkVersion?.()),
            (d = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (tL = e), r.emitChange();
            }),
            r.emitChange(),
            await eS.Ay.ensureModule("discord_voice");
        let t = eS.Ay.requireModule("discord_voice");
        t.setupKrispPath?.();
    } catch (t) {
        eF.warn(`Failed to load Krisp module: ${t.message}`), eT.A.captureException(t);
        let e = eU.CO.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eU.CO.INITIALIZED : n;
        }
        eE.default.track(ew.HAw.VOICE_PROCESSING, { noise_canceller_error: e }), nh({ noiseCancellation: !1 });
    } finally {
        tb = !1;
    }
}
function rv() {
    return (0, eI.isWindows)() || (0, eI.isLinux)() || (0, eI.isMac)();
}
function rN() {
    !rv() || __OVERLAY__ || tb || tD
        ? (0, eI.isWeb)() && te.supports(eU.O5.NOISE_CANCELLATION)
            ? ((tD = !0), r.emitChange())
            : (0, eI.isWeb)() && nh({ noiseCancellation: !1 })
        : ((tb = !0), ry());
}
async function rC() {
    try {
        let e,
            t = "",
            n = !1,
            r = URL.parse(e2);
        if (null === r) return void eF.log("OpenH264 URL ", r, " is invalid");
        let i = r.pathname.split("/"),
            s = i[i.length - 1].replace(".bz2", "");
        try {
            let t = await eS.Ay.downloadOpenH264(e2, s, e3, (e) => {
                eF.log("OpenH264 download status", e);
            });
            eF.log("OpenH264 is ready", t), (n = t.fetchedFromNetwork), (e = !0);
        } catch (n) {
            eF.error("OpenH264 download failed", n), (t = n.message), (e = !1);
        }
        if (
            (eE.default.track(ew.HAw.VIDEO_OPENH264_DOWNLOADED, {
                success: e,
                fetched_from_network: n,
                error_message: t,
            }),
            e)
        ) {
            let e = await eS.Ay.cleanupUnusedOpenH264Files([s]);
            eF.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        eF.error("OpenH264 download failed", e);
    }
}
function rR() {
    (0, eI.isLinux)() && rC();
}
function rO(e) {
    let { deviceId: t, active: n, available: r } = e;
    tU[t] = { active: n, available: r };
}
function rb(e) {
    let t = e.bypassEnabled;
    nh({ bypassSystemInputProcessing: t }), te.setAudioInputBypassSystemProcessing(t), n5(e.location);
}
function rD(e) {
    rL(e.subsystem);
}
function rL(e) {
    e === eU.rB.AUTOMATIC
        ? (nh({ automaticAudioSubsystem: !0 }), rw())
        : (nh({ automaticAudioSubsystem: !1 }), te.setAudioSubsystem(e));
}
function rw() {
    te.queueAudioSubsystem(eU.rB.EXPERIMENTAL);
}
function rM(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && ne(i, null), null != t || null == n)) {
        tO = !1;
        return;
    }
    if (tO) return;
    tO = !0;
    let s = t4();
    (s.mute || s.deaf) && (nh({ deaf: !1, mute: !1 }), te.eachConnection(t8));
}
function rx(e) {
    let { application: t } = e;
    tn.add(t.id);
}
function rP(e) {
    let { application: t } = e;
    tn.delete(t.id);
}
function rk(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (tr = !1), te.eachConnection(t8);
                break;
            case "video":
                ne(!1);
        }
}
function rU(e) {
    (tr = e.enabled), e.unmute && nh({ mute: !1, deaf: !1 }), te.eachConnection(t8);
}
function rG(e) {
    let { enabled: t } = e;
    ec.A.requestPermission(ex.iL.CAMERA), ne(t);
}
function rF(e) {
    let { sourceId: t, applicationName: n, quality: i } = e;
    if (!(0, M.Ao)() || null == R.A) return !1;
    null != a &&
        (te.setClipsSource(null),
        (0, eI.isWindows)() &&
            (null != a.desktopSource.soundshareId
                ? O.c1(a.desktopSource.soundshareId)
                : null != a.desktopSource.sourcePid && t4().videoHook && O.c1(a.desktopSource.sourcePid)));
    let s = eg.A.getPidFromDesktopSource(t),
        { soundshareId: o, soundshareSession: l } = nL(s, !0);
    a = { desktopSource: { id: t, sourcePid: s, soundshareId: o, soundshareSession: l }, quality: i };
    let u = t1("MediaEngineStore clips"),
        c = t4().videoHook,
        d = !c || !K.f.getConfig({ location: "handleClipsInit" }).enabled;
    te.setClipsSource({
        desktopDescription: {
            id: a.desktopSource.id,
            soundshareId: a.desktopSource.soundshareId,
            useVideoHook: c,
            useHookFramePacer: d,
            useGraphicsCapture: nu(),
            useCaptureDeviceForEncode: !1,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: nd(),
            videoHookStaleFrameTimeoutMs: e$,
            graphicsCaptureStaleFrameTimeoutMs: ez,
            hdrCaptureMode: u,
        },
        quality: i,
        applicationName: n,
        videoEncoderExperiments: r.getVideoEncoderExperiments(eU.x.STREAM, "streamer"),
    });
}
function rV(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((a = null), te.setClipsSource(null));
}
function rB(e) {
    let { settings: t } = e;
    if (t?.desktopSettings != null) {
        let e = null,
            n = null,
            { sourceId: r, sound: i } = t.desktopSettings,
            s = t.context ?? eU.x.DEFAULT,
            a = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
            o = eg.A.getPidFromDesktopSource(r);
        eI.isPlatformEmbedded && ({ soundshareId: e, soundshareSession: n } = nL(o, i)),
            t9(s),
            ne(s === eU.x.STREAM && tE, {
                desktopSource: { id: r, sourcePid: o, soundshareId: e, soundshareSession: n },
                quality: { resolution: a.resolution, frameRate: a.frameRate },
            });
    } else if (t?.cameraSettings != null) {
        let e = t.context ?? eU.x.DEFAULT,
            { videoDeviceGuid: n, audioDeviceGuid: r } = t.cameraSettings,
            i = e === eU.x.STREAM && tE,
            s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
        ne(i, {
            cameraSource: { videoDeviceGuid: n, audioDeviceGuid: r },
            quality: { resolution: s.resolution, frameRate: s.frameRate },
        });
    } else ne(tE, null);
}
function rH(e) {
    let { section: t } = e;
    return t === ew.nc_.VOICE && ng(), !1;
}
function rj() {
    return te.eachConnection(no), !1;
}
function rY(e) {
    let { enabled: t } = e,
        n = nh({ aecDumpEnabled: t });
    te.setAecDump(n.aecDumpEnabled);
}
function rW(e) {
    let { enabled: t } = e;
    nh({ openH264Enabled: t }), eS.Ay?.setOpenH264Enabled?.(t);
}
function rK(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (tt = Object.values(eU.x).reduce((e, n) => {
        let r = n,
            i = e8();
        return (e[r] = E().merge(i, t[r])), e;
    }, {})),
        v.w.set(eV, tt),
        nE();
}
function r$(e) {
    let { state: t } = e,
        n = G.A.isEnabled();
    if (t === ew.g6G.BACKGROUND && tE && !n) (ty = !0), ne(!1);
    else {
        if (t !== ew.g6G.ACTIVE || !ty) return !1;
        (ty = !1), ne(!0);
    }
    return !0;
}
function rz(e) {
    te.eachConnection((t) => t.setBitRate(e.bitrate));
}
function rq() {
    if ((!tE && null == s) || null != eO.A.getRTCConnectionId()) return !1;
    ne(!1, null);
}
function rZ() {
    return !!tx && ((tx = !1), !0);
}
function rX(e) {
    te.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function rQ(e) {
    let { settings: t } = e;
    te.applyMediaFilterSettings(t).finally(() => {
        (tP = !1), r.emitChange();
    });
}
function rJ() {
    tP = !0;
}
function r0() {
    tP = !1;
}
function r1(e) {
    tz = e.enabled;
}
function r2() {
    if ((0, eI.isDesktop)() && eI.isPlatformEmbedded && !t0) {
        t0 = !0;
        let e = async () => {
            let t = await new Promise((e) => {
                eS.Ay.pollQueueMetrics((t) => {
                    e(t);
                });
            });
            t.periodMs = eU.tl;
            let n = r6(t);
            null !== n && eE.default.track(ew.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, eU.tl);
        };
        setTimeout(e, eU.tl);
    }
}
class r3 extends S.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        nl(),
            np(),
            rN(),
            rR(),
            n$(),
            r2(),
            (0, eI.isWindows)() && eI.isPlatformEmbedded && nn(),
            (0, eI.isAndroid)() && null != e5 && parseInt(e5(), 10) >= 30 && nr(),
            (tW = {
                [eU.O5.VIDEO]: te.supports(eU.O5.VIDEO),
                [eU.O5.DESKTOP_CAPTURE]: te.supports(eU.O5.DESKTOP_CAPTURE),
                [eU.O5.HYBRID_VIDEO]: te.supports(eU.O5.HYBRID_VIDEO),
            }),
            this.waitFor(ev.default, eN.A, eC.A, eR.A, L.A, U.A, eO.A, F.Ay, eh.A, eD.default, eL.A);
    }
    supports(e) {
        return te.supports(e);
    }
    supportsInApp(e) {
        return tW[e] || te.supports(e);
    }
    isSupported() {
        return te.supported();
    }
    isNoiseSuppressionSupported() {
        return te.supports(eU.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return rS();
    }
    isNoiseCancellationError() {
        return tx;
    }
    isAutomaticGainControlSupported() {
        return te.supports(eU.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nf() && (te.supports(eU.O5.LEGACY_AUDIO_SUBSYSTEM) || te.supports(eU.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return te.supports(eU.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === te.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return rS();
    }
    isAecDumpSupported() {
        return te.supports(eU.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return te.supports(eU.O5.VIDEO) && te.supports(eU.O5.SIMULCAST);
    }
    getAecDump() {
        return t4().aecDumpEnabled;
    }
    getMediaEngine() {
        return te;
    }
    getVideoComponent() {
        return te.Video;
    }
    getCameraComponent() {
        return te.Camera;
    }
    getKrispSuppressionLevel() {
        return d ?? 100;
    }
    getKrispEnableStats() {
        return tw;
    }
    isEnabled() {
        return tr;
    }
    isMute() {
        return this.isSelfMute() || tf;
    }
    isDeaf() {
        return this.isSelfDeaf() || tm;
    }
    hasContext(e) {
        return null != tt[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.DEFAULT;
        return e === eU.x.DEFAULT && tp;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.DEFAULT;
        return (
            !this.isEnabled() ||
            t4(e).mute ||
            !ec.A.didHavePermission(ex.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eU.x.DEFAULT && th)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tI;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tI = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.DEFAULT,
            t = tq && "voice_isolation" !== this.getSystemMicrophoneMode() && t4(e).mode === ew.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (eC.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return tz;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.DEFAULT;
        return !this.isSupported() || t4(e).deaf;
    }
    isVideoEnabled() {
        return tE && tv;
    }
    isVideoAvailable() {
        return Object.values(td).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return tv;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.STREAM;
        return ts === e && null != s;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.STREAM;
        return ts === e && null != s && s.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eU.x.DEFAULT;
        return e !== ev.default.getId() && (t4(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return te.supports(eU.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eU.x.DEFAULT;
        return t4(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eU.x.DEFAULT;
        return t4(t).videoToggleStateMap[e] ?? ew.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eU.x.DEFAULT;
        return t === eU.x.DEFAULT && tH.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.DEFAULT;
        return e === eU.x.DEFAULT && tH.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tP;
    }
    isNativeAudioPermissionReady() {
        return tV;
    }
    getGoLiveSource() {
        return s;
    }
    getGoLiveContext() {
        return ts;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return ta;
    }
    isH264MfDecodeAvailable() {
        return to;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eU.x.DEFAULT,
            n = t4(t).localPans[e];
        return null != n ? n : eK;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eU.x.DEFAULT,
            n = t === eU.x.STREAM ? eU.Cn : eU.Hz,
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
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.DEFAULT;
        return t4(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.DEFAULT;
        return t4(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            E().each(tt, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === ew.TBI.PUSH_TO_TALK && tn.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nT(tu, t4().inputDeviceId);
    }
    getOutputDeviceId() {
        return nT(tc, t4().outputDeviceId);
    }
    getVideoDeviceId() {
        return nT(td, t4().videoDeviceId);
    }
    getInputDevices() {
        return tu;
    }
    getOutputDevices() {
        return tc;
    }
    getVideoDevices() {
        return td;
    }
    getEchoCancellation() {
        let e = t4();
        return eC.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return te.supports(eU.O5.SIDECHAIN_COMPRESSION) && t4().sidechainCompression;
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
        return (0, eI.isLinux)() && t4().openH264Enabled;
    }
    getLoopback() {
        return tY.size > 0;
    }
    getLoopbackReasons() {
        return tY;
    }
    getNoiseSuppression() {
        let e = t4();
        return eC.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = t4();
        return eC.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return t4().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return t4().noiseCancellation;
    }
    getHardwareEncoding() {
        return e0;
    }
    getEnableSilenceWarning() {
        return t4().silenceWarning;
    }
    getDebugLogging() {
        return te.getDebugLogging();
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
        return n_() && t4().automaticAudioSubsystem ? eU.rB.AUTOMATIC : te.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return te.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return t4().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === ek.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.DEFAULT;
        return t4(e);
    }
    getState() {
        return {
            settingsByContext: tt,
            inputDevices: tu,
            outputDevices: tc,
            appSupported: tW,
            krispModuleLoaded: tD,
            krispVersion: c,
            krispSuppressionLevel: d,
            goLiveSource: s,
            goLiveContext: ts,
        };
    }
    getInputDetectedThisConnection() {
        return tN;
    }
    getInputDetected() {
        return o.inputDetected;
    }
    getLastInputDetectedUpdateTime() {
        return o.lastUpdateTime;
    }
    getNoInputDetectedNotice() {
        return tC;
    }
    getInputDeviceOSMuted() {
        return l;
    }
    getInputDeviceOSVolume() {
        return u;
    }
    getPacketDelay() {
        return eI.isPlatformEmbedded || this.getMode() !== ew.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        te.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return ti;
    }
    getVideoHook() {
        return t4().videoHook;
    }
    supportsVideoHook() {
        return te.supports(eU.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = t4().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return te.supports(eU.O5.EXPERIMENTAL_SOUNDSHARE) && T().satisfies(R.A?.os.release, eM.$x);
    }
    supportsHookSoundshare() {
        return (0, eI.isWindows)() && te.supports(eU.O5.SOUNDSHARE) && T().satisfies(R.A?.os.release, eM.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = t4().useSystemScreensharePicker,
            n = (0, eI.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return te.supports(eU.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return tJ;
    }
    getVideoEncoderExperiments(e, t) {
        let n = ["unk"];
        if (
            (n.push("nvNewPresets"),
            e === eU.x.STREAM ? n.push("nvRelaxRc=250") : n.push("nvRelaxRc=75"),
            this.getUseVaapiEncoder() && n.push("vaapi"),
            e === eU.x.STREAM && "streamer" === t && (0, eI.isWindows)())
        ) {
            n.push("useCaptureDeviceForEncode");
            let { overrideDeviceReuse: e } = er.g.getConfig({ location: "handleReady" });
            e && n.push("videoCaptureDeviceOverrideReuse");
        }
        return (0, Q.n)({ location: "handleReady" }).enabled && n.push("linux-vulkan"), n.join(",");
    }
    getUseGamescopeCapture() {
        return tQ;
    }
    getSpeakingWhileMuted() {
        return tT;
    }
    getKrispModelOverride() {
        return _;
    }
    getKrispModels() {
        return tL;
    }
    getKrispVadActivationThreshold() {
        return t4().modeOptions.vadKrispActivationThreshold ?? eW;
    }
    hasActiveCallKitCall() {
        return tX;
    }
    setHasActiveCallKitCall(e) {
        tX = e;
    }
    supportsScreenSoundshare() {
        return (0, eI.isMac)()
            ? te.supports(eU.O5.SOUNDSHARE) && T().satisfies(R.A?.os.release, eM.P$) && nd()
            : (0, eI.isWindows)()
              ? te.supports(eU.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, eI.isLinux)() && te.supports(eU.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, eI.isWindows)()) {
            if (this.getBypassSystemInputProcessing()) return;
            return tU[this.getInputDeviceId()]?.active?.find((e) => e === e1);
        }
        if ((0, eI.isMac)() || (0, eI.isIOS)()) return f;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.DEFAULT,
            t = this.supports(eU.O5.VIDEO)
                ? [{ rid: "100", type: e === eU.x.DEFAULT ? eU.mI.VIDEO : eU.mI.SCREEN, quality: eU.Y4 }]
                : [];
        return (
            this.isSimulcastSupported() &&
                e === eU.x.DEFAULT &&
                t.push({ rid: "50", type: eU.mI.VIDEO, quality: eU.Cl }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: (0, eI.isWeb)() };
        return te.fetchAsyncResources(e);
    }
    startDavePreload() {
        if (!tk && ((tk = !0), (0, eI.isWeb)())) {
            let e = { fetchDave: !0 };
            te.fetchAsyncResources(e).catch((e) => {
                eF.warn("DAVE preload failed:", e), eT.A.captureException(e);
            });
        }
    }
    getSupportedSecureFramesProtocolVersion() {
        return te.getSupportedSecureFramesProtocolVersion();
    }
    hasClipsSource() {
        return null != a;
    }
    getGpuBrand() {
        return tK;
    }
}
function r6(e) {
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
(r = new r3(C.h, {
    VOICE_CHANNEL_SELECT: rM,
    VOICE_STATE_UPDATES: nG,
    CONNECTION_OPEN: nM,
    CONNECTION_CLOSED: nP,
    POST_CONNECTION_OPEN: nk,
    RTC_CONNECTION_STATE: nU,
    AUDIO_SET_TEMPORARY_SELF_MUTE: nF,
    AUDIO_TOGGLE_SELF_MUTE: nV,
    AUDIO_SET_SELF_MUTE: nB,
    AUDIO_TOGGLE_SELF_DEAF: nj,
    AUDIO_TOGGLE_LOCAL_MUTE: nY,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: nW,
    AUDIO_SET_LOCAL_VOLUME: nz,
    AUDIO_SET_LOCAL_PAN: nq,
    AUDIO_SET_MODE: nZ,
    AUDIO_SET_INPUT_VOLUME: nX,
    AUDIO_SET_OUTPUT_VOLUME: nQ,
    AUDIO_SET_INPUT_DEVICE: nJ,
    AUDIO_SET_OUTPUT_DEVICE: n0,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: n2,
    AUDIO_SET_ECHO_CANCELLATION: n7,
    AUDIO_SET_SIDECHAIN_COMPRESSION: n8,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: n9,
    AUDIO_SET_LOOPBACK: rt,
    AUDIO_SET_NOISE_SUPPRESSION: ri,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: rs,
    AUDIO_SET_NOISE_CANCELLATION: ra,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: ro,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: ru,
    AUDIO_SET_DEBUG_LOGGING: rc,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: rd,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: rl,
    MEDIA_ENGINE_SET_VIDEO_HOOK: r_,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: rf,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: rp,
    AUDIO_SET_ATTENUATION: rh,
    AUDIO_SET_QOS: rm,
    MEDIA_ENGINE_DEVICES: n6,
    AUDIO_VOLUME_CHANGE: n4,
    AUDIO_RESET: rE,
    AUDIO_INPUT_DETECTED: rA,
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: rg,
    AUDIO_SET_SUBSYSTEM: rD,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rb,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rU,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rG,
    MEDIA_ENGINE_PERMISSION: rk,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rB,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: n1,
    MEDIA_ENGINE_INTERACTION_REQUIRED: n3,
    USER_SETTINGS_MODAL_INIT: rH,
    USER_SETTINGS_MODAL_SET_SECTION: rH,
    CERTIFIED_DEVICES_SET: rj,
    RPC_APP_CONNECTED: rx,
    RPC_APP_DISCONNECTED: rP,
    OVERLAY_INITIALIZE: nx,
    APP_STATE_UPDATE: r$,
    SET_CHANNEL_BITRATE: rz,
    SET_VAD_PERMISSION: rI,
    SET_NATIVE_PERMISSION: rT,
    SET_CHANNEL_VIDEO_QUALITY_MODE: rX,
    MEDIA_ENGINE_SET_AEC_DUMP: rY,
    MEDIA_ENGINE_SET_OPENH264_ENABLED: rW,
    MEDIA_ENGINE_RESET_SETTINGS: rK,
    CHANNEL_DELETE: rq,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rZ,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rQ,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rJ,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: r0,
    USER_SETTINGS_PROTO_UPDATE: nH,
    CLIPS_INIT: rF,
    CLIPS_SETTINGS_UPDATE: rV,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: r1,
    MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: rO,
})),
    (o = new Z.A(te, r));
let r4 = r;
