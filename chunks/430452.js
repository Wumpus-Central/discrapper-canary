"use strict";
let r, i, s, a, o, l, u, c, d, _, f;
n.d(t, { Ay: () => r3 }), n(323874), n(14289), n(35956), n(321073), n(790599);
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
    er = n(710496),
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
    eP = n(765682),
    ex = n(355097),
    ek = n(509381),
    eU = n(731854),
    eG = n(985018);
let eF = new P.A("MediaEngineStore"),
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
    e4 = null;
function e5() {
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
        videoHook: e8.supports(eU.O5.VIDEO_HOOK),
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
    e8 = (0, y.hB)((0, y.WI)());
eF.enableNativeLogger(!0);
let e9 = {},
    te = new Set([eU.x.DEFAULT]),
    tt = e8.supports(eU.O5.AUTO_ENABLE),
    tn = !1,
    tr = eU.x.STREAM,
    ti = performance.now(),
    ts = null,
    ta = null,
    to = { [eU.dx]: nE("No Input Devices") },
    tl = { [eU.dx]: nE("No Output Devices") },
    tu = { [eU.dx]: nE("No Video Devices") },
    tc = new N.Ep(),
    td = !1,
    t_ = !1,
    tf = !1,
    tp = !1,
    th = !1,
    tm = eU.qe,
    tE = eU.qe,
    tg = !1,
    tA = !1,
    tI = new N.Ep(),
    tT = !1,
    tS = !1,
    ty = !1,
    tv = !1,
    tN = new N.Ep(),
    tC = !1,
    tR = !1,
    tO = !1,
    tb = [],
    tD = !1,
    tL = null,
    tw = !1,
    tM = !1,
    tP = !1,
    tx = {},
    tk = null,
    tU = null,
    tG = !1;
ec.A.hasPermission(eP.iL.AUDIO, { showAuthorizationError: !1 }),
    ec.A.hasPermission(eP.iL.CAMERA, { showAuthorizationError: !1 });
let tF = !1,
    tV = new Set(),
    tB = tF,
    tH = new Set(),
    tj = {},
    tY = null,
    tW = null,
    tK = !0,
    t$ = !1,
    tz = new N.Ep(),
    tq = !1,
    tZ = !1,
    tX = !1,
    tQ = !1;
function tJ(e) {
    return (0, $.p)({ location: e }).hdrCaptureMode;
}
async function t0() {
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
function t1() {
    return null != tU ? tU : "u" > typeof window ? (tU = t0().then((e) => ((tk = e), e))) : Promise.resolve(!1);
}
function t2() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.DEFAULT,
        t = e9[e];
    return null == t && ((t = e5()), (e9[e] = t)), t;
}
function t3() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.DEFAULT,
        t = t2(e),
        n = e7[t.activeInputProfile ?? ek.m.CUSTOM],
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
function t6(e) {
    let t = t3(e.context),
        n = t.mode;
    e.context === eU.x.DEFAULT && (0, J.N)(!1, !1);
    let { showPTTSpeakingIndicator: r } = em.A.getConfig({ location: "setInputMode" }),
        i = r && n === ew.TBI.PUSH_TO_TALK;
    e.setInputMode(n, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: !!i || t.modeOptions.autoThreshold,
        vadUseKrisp: (!!i || t.modeOptions.vadUseKrisp) && rI(),
        vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? eW,
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        vadDuringPreProcess: t.modeOptions.vadDuringPreProcess ?? !1,
        pttReleaseDelay: Math.round(t.modeOptions.delay),
    });
}
function t4(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eU.Hz;
    return E().clamp(e, 0, t);
}
function t5(e) {
    let t = t3(e.context),
        n = !tt || t.mute || t.deaf;
    e.context === eU.x.DEFAULT
        ? (n = n || td || t_ || tf || !ec.A.didHavePermission(eP.iL.AUDIO))
        : e.context === eU.x.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eU.x.DEFAULT && b.A.updateNativeMute();
}
function t7(e) {
    e !== tr && (null != s && e8.setGoLiveSource(null, tr), (tr = e));
}
function t8() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : th,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
        n = s;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, eI.isWindows)()
                ? O.c1(n.desktopSource.soundshareId)
                : null != n.desktopSource.sourcePid && t3().videoHook && O.c1(n.desktopSource.sourcePid),
            e8.setGoLiveSource(null, tr)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            e8.setGoLiveSource(null, tr),
        th || e)
    ) {
        let t = t3().videoDeviceId;
        th && t === eU.dx && tE === eU.dx && tm !== eU.qe ? (t = tm) : (tE = t),
            (tm = (th = e) ? nA(tu, t) : eU.qe),
            e8.setVideoInputDevice(tm);
    }
    if (((s = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = tJ("MediaEngineStore go live"),
                i = t3().videoHook,
                s = no(),
                a = s ? (nl() ? eM.zl : eM.eg) : 0,
                o = !1;
            (0, eI.isWindows)() &&
                a >= eM.zl &&
                (o =
                    !0 === tW
                        ? ea.q.getConfig({ location: "updateVideo" }).enabled
                        : es.d.getConfig({ location: "updateVideo" }).enabled);
            let l = !i || !W.f.getConfig({ location: "updateVideo" }).enabled,
                u = i && er.H.getConfig({ location: "updateVideo" }).enabled;
            e8.setGoLiveSource(
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
                        allowScreenCaptureKit: nu(),
                        videoHookStaleFrameTimeoutMs: e$,
                        graphicsCaptureStaleFrameTimeoutMs: ez,
                        hdrCaptureMode: n,
                        enableGlobalFramePoolLock: (0, K.H)({ location: "updateVideo" }).enabled,
                        useGraphicsCaptureDirtyRegions: o,
                        videoHookAllowDx12: u,
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
function t9(e) {
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
function ne() {
    null === ts &&
        e8
            .getCodecSurvey()
            .then((e) => {
                try {
                    let t = JSON.parse(e);
                    if (null == t || null == t.available_video_decoders) throw Error("decoder survey is not available");
                    ts = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                } catch (e) {
                    eF.error("Failed to parse codec survey", e), (ts = !1);
                }
            })
            .catch((e) => {
                eF.error("Failed to get codec survey", e), (ts = !1);
            })
            .finally(() => {
                C.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
            });
}
function nt() {
    null === ta &&
        e8
            .getCodecSurvey()
            .then((e) => {
                try {
                    let t = JSON.parse(e);
                    if (null == t || null == t.available_video_decoders) throw Error("decoder survey is not available");
                    (ta = t.available_video_decoders.some((e) => e.startsWith("video/av01") && e.endsWith("(HW)"))),
                        eF.info("AV1 decode detection complete. presence = ", ta);
                } catch (e) {
                    eF.error("Failed to parse codec survey", e), (ta = !1);
                }
            })
            .catch((e) => {
                eF.error("Failed to get codec survey", e), (ta = !1);
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
    let n = (0, e_.A)(t, r.getSystemMicrophoneMode());
    n !== t && eF.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: i } = (0, B.F)({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(i);
    let { noiseCancellationAfterProcessing: s, vadAfterWebrtc: a } = (0, Z.$)({ location: "setNoiseCancellation" });
    e.setNoiseCancellationAfterProcessing(s), e.setVADAfterWebrtc(a);
}
function ns(e) {
    let t = t3(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eC.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eC.A.hasNoiseSuppression(n) || t.noiseSuppression),
        nr(e, eC.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        ni(e, t.noiseCancellation),
        (0, eI.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function na() {
    tc.start(eQ, () => {
        eF.error("Device enumeration timed out"), eE.default.track(ew.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
    }),
        e8.on(y.bg.Connection, (e) => {
            t6(e), t5(e), ns(e);
            let t = t3();
            e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
                e.setQoS(t.qos),
                (0, eI.isWindows)()
                    ? (e.setExperimentFlag(eU.fd.H265_HARDWARE_ONLY, !0),
                      t1().then((t) => {
                          e.setExperimentFlag(eU.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                      }))
                    : (0, eI.isMac)() && e.setExperimentFlag(eU.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                (0, eI.isLinux)() && t.openH264Enabled && e.setExperimentFlag(eU.fd.USE_LIBOPENH264_DECODER, !0),
                (0, Q.J)({ location: "setupMediaEngine" }).enabled &&
                    e.setExperimentFlag(eU.fd.LOW_LATENCY_RATE_CONTROL, !0);
            let n = !1,
                i = !0;
            e.setExperimentFlag(eU.fd.RESET_DECODER_ON_ERRORS, !0),
                n && e.setExperimentFlag(eU.fd.SOFTWARE_FALLBACK_ON_ERRORS, !0),
                i && e.setExperimentFlag(eU.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
            let { swallowVolumeOnlySpeakingEvents: a } = D.A.getConfig({ location: "MediaEngineStore" });
            if ((a && e.setExperimentFlag(eU.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === eU.x.STREAM)) {
                let t = ny(tl);
                e.setSoundshareDiscardRearChannels(t);
            }
            if ((0, eI.isWindows)())
                e.setExperimentFlag(eU.fd.SIGNAL_AV1, !0), e.setExperimentFlag(eU.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            else if ((0, eI.isMac)())
                e.setExperimentFlag(eU.fd.SIGNAL_AV1_DECODE, !0),
                    e.setExperimentFlag(eU.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            else if ((0, eI.isLinux)()) e.setExperimentFlag(eU.fd.SIGNAL_AV1_DECODE, !0);
            else if ((0, eI.isIOS)())
                e.setExperimentFlag(eU.fd.SIGNAL_AV1_DECODE, !0),
                    e.setExperimentFlag(eU.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            else if ((0, eI.isAndroid)() && !0 === ta) {
                let { enabled: t } = (0, H.T)("MediaEngineStore");
                t &&
                    (e.setExperimentFlag(eU.fd.SIGNAL_AV1_DECODE, !0),
                    e.setExperimentFlag(eU.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
            }
            if ((0, eI.isWeb)()) {
                let { enabled: t } = Y.A.getConfig({ location: "MediaEngineStore" });
                e.setExperimentFlag(eU.fd.BROWSER_HEVC, t);
            }
            for (let n of ((0, eI.isWindows)() &&
                tY?.startsWith("AMD") &&
                (0, eo.F)("MediaEngineStore").enabled &&
                e.setExperimentFlag(eU.fd.WMF_GPU_ENCODE, !0),
            (0, eI.isWindows)() &&
                tY?.startsWith("Intel") &&
                (0, el.J)("MediaEngineStore").enabled &&
                e.setExperimentFlag(eU.fd.WMF_GPU_ENCODE, !0),
            (0, eI.isWindows)() &&
                tY?.startsWith("Qualcomm") &&
                (0, eo.F)("MediaEngineStore").enabled &&
                e.setExperimentFlag(eU.fd.WMF_GPU_ENCODE, !0),
            e8.setHasFullbandPerformance((0, x.A)()),
            e.setRemoteAudioHistory(1e3),
            (0, w.A)(r) && e.setClipsKeyFrameInterval(eU.X1),
            (t = t3(e.context)),
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
                    ((tA = !1),
                    e.on(y.yq.SpeakingWhileMuted, () => {
                        let e = !tA;
                        (tA = !0),
                            e && r.emitChange(),
                            tI.start(eX, () => {
                                (tA = !1), r.emitChange();
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
                        (0, k.QW)({ type: k.iy.NOISE_CANCELLER_ERROR, underlyingError: t9(e) }),
                        (tw = !0),
                        eE.default.track(ew.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        C.h.dispatch({ type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: !0 }),
                        C.h.dispatch({ type: "AUDIO_SET_NOISE_CANCELLATION", enabled: !1 }),
                        C.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e });
                }),
                e.on(y.yq.VoiceActivityDetectorError, (e) => {
                    eF.warn(`voiceactivitydetectorerror event: ${e}`),
                        (0, k.QW)({ type: k.iy.NOISE_CANCELLER_ERROR, underlyingError: t9(e) }),
                        eE.default.track(ew.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        C.h.dispatch({
                            type: "AUDIO_SET_MODE",
                            context: eU.x.DEFAULT,
                            mode: ew.TBI.VOICE_ACTIVITY,
                            options: { ...t3(eU.x.DEFAULT).modeOptions, vadUseKrisp: !1 },
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
                    e8.supports(eU.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                    e8.setAsyncVideoInputDeviceInit(!0);
        }),
        e8.on(y.bg.DeviceChange, (e, t, n) => {
            tc.stop(),
                C.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
        }),
        e8.on(y.bg.VolumeChange, (e, t) => {
            C.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
        }),
        e8.on(y.bg.DesktopSourceEnd, (e, t) => {
            C.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
        }),
        e8.on(y.bg.AudioPermission, (e) => {
            (tG = !0), C.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
        }),
        e8.on(y.bg.VideoPermission, (e) => {
            C.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
        }),
        e8.on(y.bg.WatchdogTimeout, async () => {
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
        e8.on(y.bg.VideoInputInitialized, (e) => {
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
        e8.on(y.bg.AudioInputInitialized, (e) => {
            eE.default.track(ew.HAw.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * eA.A.Millis.SECOND),
                rtc_connection_id: eO.A.getRTCConnectionId(),
            });
        }),
        e8.on(y.bg.ClipsRecordingRestartNeeded, () => {
            C.h.dispatch({ type: "CLIPS_RESTART" });
        }),
        e8.on(y.bg.ClipsInitFailure, (e, t) => {
            C.h.wait(() => {
                C.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t });
            });
        }),
        e8.on(y.bg.ClipsRecordingEnded, (e, t) => {
            a?.desktopSource?.id === e && (null != t && s?.desktopSource?.soundshareId !== t && O.c1(t), (a = null));
        }),
        e8.on(y.bg.NativeScreenSharePickerUpdate, (e, t) => {
            C.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
        }),
        e8.on(y.bg.NativeScreenSharePickerCancel, (e) => {
            C.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
        }),
        e8.on(y.bg.NativeScreenSharePickerError, (e) => {
            C.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
        }),
        e8.on(y.bg.AudioDeviceModuleError, (e, t, n) => {
            eE.default.track(ew.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
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
        e8.on(y.bg.VoiceQueueMetrics, (e) => {
            let t = r2(e);
            null !== t && eE.default.track(ew.HAw.VOICE_QUEUE_METRICS, t);
        }),
        e8.setOnVideoContainerResized((e, t, n) => {
            C.h.wait(() =>
                C.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
            );
        }),
        rt(),
        o.reset(),
        (0, eb.w)().then((e) => {
            null != e && ((tY = e.gpu_brand), (tW = e.has_intel_hybrid_igpu));
        }),
        e8.on(y.bg.SystemMicrophoneModeChange, (e) => {
            (f = e), e8.eachConnection(ns), r.emitChange();
        });
}
function no() {
    return (0, eI.isWindows)() && T().satisfies(R.A?.os.release, eM.yg);
}
function nl() {
    return (0, eI.isWindows)() && T().satisfies(R.A?.os.release, eM.fG);
}
function nu() {
    return (0, eI.isMac)() && e8.supports(eU.O5.SCREEN_CAPTURE_KIT) && T().satisfies(R.A?.os.release, eM.e);
}
function nc() {
    return (
        (0, eI.isWindows)() &&
        e8.supports(eU.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        e8.supports(eU.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nd() {
    return e8.supports(eU.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function n_() {
    let e = v.w.get("audio");
    null != e && (v.w.set(eV, { [eU.x.DEFAULT]: e }), v.w.remove("audio")),
        (e9 = v.w.get(eV) ?? {}),
        E().each(e9, (e) => {
            E().defaultsDeep(e, e5()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, ey.OH)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== eB &&
                    ((e.vadUseKrispSettingVersion = eB), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                e.vadThrehsoldMigrated ||
                    ((e.vadThrehsoldMigrated = !0), e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = eq)),
                e8.supports(eU.O5.SIDECHAIN_COMPRESSION) &&
                    e.sidechainCompressionSettingVersion < eY &&
                    ((e.sidechainCompressionSettingVersion = eY), (e.sidechainCompression = !0)),
                (0, eI.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== ej &&
                      ((e.ncUseKrispjsSettingVersion = ej), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== eH &&
                      ((e.ncUseKrispSettingVersion = eH), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
        }),
        nh();
}
function nf(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eU.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = t2(t);
    return Object.assign(r, e), !__OVERLAY__ && n && v.w.set(eV, e9), r;
}
function np() {
    v.w.remove(eV), location.reload();
}
function nh() {
    let e = t3();
    nT(e.inputDeviceId),
        e8.setAudioOutputDevice(e.outputDeviceId),
        t8(),
        e8.setInputVolume(e.inputVolume),
        e8.setOutputVolume(e.outputVolume),
        e8.setAecDump(e.aecDumpEnabled),
        e8.setSidechainCompression(e.sidechainCompression),
        e8.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        e8.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        (0, eI.isLinux)() && eS.Ay?.setOpenH264Enabled?.(e.openH264Enabled);
}
function nm() {
    tt || e8.enable().then(() => C.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nE(e) {
    return { id: eU.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
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
    let n = e[t] ?? e[eU.dx] ?? E()(e).values().first();
    return null != n ? n.id : t;
}
function nI(e) {
    if (!(0, eI.isWindows)() || !j.A.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects)
        return;
    let t = to[e];
    t?.guid != null && (0, ef.A)(t.guid, e, e8);
}
function nT(e) {
    e8.setAudioInputDevice(e), nI(e);
}
function nS(e) {
    let t = to;
    if (((to = ng(e, eG.intl.string(eG.t["/QIjDA"]))), !E().isEqual(to, t))) {
        let e = t3();
        nT(nA(to, e.inputDeviceId)), e8.eachConnection(ns);
    }
}
function ny(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nv(e) {
    e8.eachConnection((t) => {
        t.context === eU.x.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function nN(e) {
    let t = tl;
    if (((tl = ng(e, eG.intl.string(eG.t.xlUg0v))), !E().isEqual(tl, t))) {
        let e = t3(),
            n = nA(tl, e.outputDeviceId);
        e8.setAudioOutputDevice(n);
        let r = ny(t),
            i = ny(tl);
        r !== i && nv(i);
    }
}
function nC(e) {
    tS = e.length > 0;
    let t = tu;
    if (((tu = ng(e, eG.intl.string(eG.t.WKWARY))), th && !E().isEqual(tu, t))) {
        let e = void 0 !== tu[tm],
            n = tm === eU.dx && t[eU.dx]?.disabled,
            r = "Firefox" === A().name && "" === tm && t[tm]?.name === "Default" && !t[tm]?.disabled;
        t8(e || n || r);
    }
}
function nR() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = eh.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let r = n === ex.W.USER ? eU.x.DEFAULT : eU.x.STREAM,
            i = r === eU.x.STREAM ? eU.Cn : eU.Hz,
            s = t[n] ?? {},
            { localMutes: a, localVolumes: o } = t3(r);
        for (let [e, t] of Object.entries(s))
            null == (0, ep.tM)(r, e) &&
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
        nf({ localMutes: a, localVolumes: o }, r);
    }
}
function nO(e) {
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
function nb(e, t) {
    if (t) {
        let { soundshareId: t, soundshareSession: n } = nO(e);
        if (null != t) return nD(t, n), { soundshareId: t, soundshareSession: n };
    }
    return null != e && t3().videoHook && O.GH(e), { soundshareId: null, soundshareSession: null };
}
function nD(e, t) {
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
function nL(e) {
    (i = e.sessionId), (td = !1), (tp = !1);
    let t = t3();
    nc() && (nd() ? rb(eU.rB.AUTOMATIC) : t.automaticAudioSubsystem && rD()),
        e8.supports(eU.O5.OFFLOAD_ADM_CONTROLS) && e8.setOffloadAdmControls(!0),
        (0, eI.isIOS)() &&
            (0, z.Y)("handleConnectionOpen").enabled &&
            e8.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
        nI(t.inputDeviceId),
        nR();
}
function nw(e) {
    let { mediaEngineState: t } = e;
    (e9 = t.settingsByContext),
        (to = t.inputDevices),
        (tl = t.outputDevices),
        (tj = t.appSupported),
        (tO = t.krispModuleLoaded),
        (c = t.krispVersion),
        (tr = t.goLiveContext);
}
function nM() {
    i = null;
}
function nP() {
    return (0, eI.isWeb)() && r.startDavePreload(), !1;
}
function nx(e) {
    switch (e.state) {
        case ew.S7L.CONNECTING:
            nm();
            break;
        case ew.S7L.RTC_CONNECTING:
            (tv = !1), (l = void 0), (u = void 0), (ty = !1), (t$ = !1), tz.stop(), tN.stop(), o.reset();
            break;
        case ew.S7L.RTC_CONNECTED:
            t8();
            break;
        case ew.S7L.DISCONNECTED:
            nY(), nW();
    }
}
function nk(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (td = t.mute || t.suppress), (tp = t.deaf), e8.eachConnection(t5);
            let e = null != t.guildId && null != t.channelId && null != tL && tL !== t.channelId,
                n = !tC && null == t.channelId;
            return t8(!e && !n && th), (tL = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== ev.default.getId() || null != eO.A.getChannelId() || t8(!1, null), e;
    }, !1);
}
function nU(e) {
    let { mute: t } = e;
    (t_ = t), e8.eachConnection(t5);
}
function nG(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = t3(t);
    if (t === eU.x.DEFAULT && (ec.A.requestPermission(eP.iL.AUDIO), tf)) return !1;
    (r = !i && !r) || (i = !1), n || (tg = !0), nf({ mute: r, deaf: i }, t), e8.eachConnection(t5);
}
function nF(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    nf({ mute: n }, t), r || (tg = !0), e8.eachConnection(t5);
}
function nV(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== ex.oD.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    nR(!0);
}
function nB(e) {
    let { context: t } = e;
    nf({ deaf: !t3(t).deaf }, t), e8.eachConnection(t5);
}
function nH(e) {
    let { context: t, userId: n } = e;
    if (n === ev.default.getId()) return;
    let { localMutes: r } = t3(t);
    r[n] ? delete r[n] : (r[n] = !0),
        nf({ localMutes: r }, t),
        e8.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nj(e) {
    let { context: t, userId: n, videoToggleState: r, persist: i, isAutomatic: s } = e;
    h()(!(i && s), "These are not allowed to both be true.");
    let a = r === ew.bb8.DISABLED,
        { disabledLocalVideos: o } = t3(t),
        l = o[n] ?? !1,
        u = tV.has(n),
        c = r === ew.bb8.AUTO_ENABLED || r === ew.bb8.MANUAL_ENABLED;
    eF.info(`disableVideo=${a} currentlyDisabled=${l} currentlyAutoDisabled=${u}, isVideoShown=${c}`),
        h()(!(u && !l), "If you are auto-disabled, then you are also disabled.");
    let d = a !== l,
        _ = t === eU.x.DEFAULT,
        f = s && d && _,
        p = i && d && _;
    eF.info(`changed=${d} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${f} isManualToggleByUser=${p}`);
    let { videoToggleStateMap: m } = t3(t);
    if (
        (m[n] === ew.bb8.AUTO_PROBING &&
            r === ew.bb8.AUTO_ENABLED &&
            (0, eu.A)(n, a ? eU.Al.AUTO_DISABLE : eU.Al.AUTO_ENABLE, c),
        (m[n] = r),
        nf({ videoToggleStateMap: m }, t, i),
        r === ew.bb8.AUTO_PROBING
            ? eO.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
            : eO.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
        tB ||
            (eF.info(`isAutoDisableAllowed=${tB} - disabling VideoHealthManager`),
            eO.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
        f)
    ) {
        if ((!a && !u) || (a && !tB)) return;
        (0, eu.A)(n, a ? eU.Al.AUTO_DISABLE : eU.Al.AUTO_ENABLE, c), a ? tV.add(n) : tV.delete(n);
    } else
        p &&
            (u && !a
                ? (eF.info("disallowing auto-disable for this session because of manual override by user"),
                  (tB = !1),
                  eO.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                  (0, eu.A)(n, eU.Al.MANUAL_REENABLE, c))
                : (0, eu.A)(n, a ? eU.Al.MANUAL_DISABLE : eU.Al.MANUAL_ENABLE, c));
    _ && !a && tV.delete(n),
        a ? (o[n] = !0) : delete o[n],
        nf({ disabledLocalVideos: o }, t, i),
        e8.eachConnection((e) => e.setLocalVideoDisabled(n, o[n] ?? !1), t);
}
function nY() {
    if (0 === tV.size) return;
    let e = eU.x.DEFAULT,
        { disabledLocalVideos: t } = t3(e);
    tV.forEach((n) => {
        h()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            e8.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tV.clear(),
        nf({ disabledLocalVideos: t }, e, !1);
}
function nW() {
    let e = eU.x.DEFAULT,
        { videoToggleStateMap: t } = t3(e);
    for (let [e, n] of Object.entries(t)) n === ew.bb8.AUTO_PROBING && delete t[e];
    nf({ videoToggleStateMap: t }, e, !1);
}
function nK(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === ev.default.getId()) return;
    let i = t === eU.x.STREAM ? eU.Cn : eU.Hz,
        { localVolumes: s } = t3(t);
    r === i ? delete s[n] : (s[n] = r), nf({ localVolumes: s }, t), e8.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function n$(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: s } = t3(t);
    (s[n] = { left: r, right: i }), nf({ localPans: s }, t), e8.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function nz(e) {
    let { context: t, mode: n, options: r } = e;
    nf({ mode: n, modeOptions: { ...r, updatedAt: Date.now() } }, t), e8.eachConnection(t6);
}
function nq(e) {
    let { volume: t } = e;
    nf({ inputVolume: t4(t) }), e8.setInputVolume(t);
}
function nZ(e) {
    let { volume: t } = e;
    nf({ outputVolume: t }), e8.setOutputVolume(t);
}
function nX(e) {
    let { id: t } = e;
    (t = nA(to, t)),
        (ti = performance.now()),
        nf({ inputDeviceId: t }),
        nT(t),
        e8.eachConnection(ns),
        (l = void 0),
        (u = void 0),
        tz.stop(),
        (t$ = !1);
    let { resetSilenceWarningOnDeviceChange: n } = ee.A.getConfig({
        location: "MediaEngineStore.handleSetInputDevice",
    });
    n && ((ty = !1), o.reset());
}
function nQ(e) {
    let { id: t } = e;
    nf({ outputDeviceId: (t = nA(tl, t)) }), e8.setAudioOutputDevice(t);
}
function nJ(e) {
    let { id: t } = e;
    nf({ videoDeviceId: (t = nA(tu, t)) }), t8();
}
function n0(e) {
    let { inputProfile: t } = e;
    nf({ activeInputProfile: t });
    let n = t3();
    e8.eachConnection((e) => {
        t6(e), ns(e);
    }),
        e8.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        re();
}
function n1(e) {
    return tn !== e.required && ((tn = e.required), e.required || e8.interact(), !0);
}
function n2(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    nS(t), nN(n), nC(r);
}
function n3(e) {
    let { inputVolume: t, outputVolume: n } = e;
    nf({ inputVolume: t4(t), outputVolume: n });
}
function n6(e) {
    let t = t3(),
        n = e8.getAudioSubsystem(),
        i = e8.getAudioLayer(),
        s = nA(to, t.inputDeviceId),
        a = to[s]?.name,
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
function n4(e) {
    let t = nf({ echoCancellation: e.enabled });
    e8.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), re(), n6(e.location);
}
function n5(e) {
    n8(e.enabled);
}
function n7(e) {
    let t = nf({ sidechainCompressionStrength: e.strength });
    e8.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function n8(e) {
    let t = nf({ sidechainCompression: e });
    e8.setSidechainCompression(t.sidechainCompression);
}
function n9(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tH.add(n) : tH.delete(n), re();
}
function re() {
    let e = t3(),
        t = tH.size > 0,
        n = e.inputDeviceId,
        r = eC.A.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        s = eC.A.hasNoiseSuppression(n) || e.noiseSuppression,
        a = nn(eC.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        o = e.noiseCancellation;
    e8.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: s,
        automaticGainControlConfig: a,
        noiseCancellation: o,
    });
}
async function rt() {
    if (!e8.supports(eU.O5.VAAPI)) return;
    let e = 4098;
    if (window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let t = await window.DiscordNative.processUtils.getSystemInfo();
    (t.electronGPUInfo?.gpuDevice ?? []).some((t) => t.vendorId === e) &&
        ((tX = !0), (tZ = e8.supports(eU.O5.GAMESCOPE_CAPTURE)));
}
function rn(e) {
    let t = nf({ noiseSuppression: e.enabled });
    e8.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), re(), n6(e.location);
}
function rr(e) {
    let t = nf({ automaticGainControl: e.enabled });
    e8.eachConnection((e) => nr(e, t.automaticGainControl)), re(), n6(e.location);
}
function ri(e) {
    let t = nf({ noiseCancellation: e.enabled });
    e8.eachConnection((e) => ni(e, t.noiseCancellation)), re(), n6(e.location);
}
function rs(e) {
    ed.A.setKrispModelOverride(e.model), (_ = e.model), re();
}
function ra(e) {
    (0, eI.isWeb)() || ((tD = e.enabled), e8.setNoiseCancellationEnableStats?.(e.enabled));
}
function ro(e) {
    nf({ silenceWarning: e.enabled });
}
function rl(e) {
    e8.setDebugLogging(e.enabled);
}
function ru(e) {
    let { level: t } = e;
    (d = t), ed.A.setKrispSuppressionLevel(t);
}
function rc(e) {
    nf({ videoHook: e.enabled });
}
function rd(e) {
    nf({ experimentalSoundshare2: e.enabled });
}
function r_(e) {
    let { enabled: t } = e;
    nf({ useSystemScreensharePicker: t });
}
function rf(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = nf({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r });
    e8.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function rp(e) {
    let { enabled: t } = e;
    nf({ qos: t }), e8.eachConnection((e) => e.setQoS(t));
}
function rh() {
    np();
}
function rm(e) {
    let { osVolume: t, osMuted: n } = e;
    (u = t), (l = n);
}
function rE(e) {
    let { inputDetected: t } = e;
    if (null == t) return !1;
    if (((tv = !0 !== ty && !t), t)) (ty = !0), (t$ = !1), tz.stop(), tN.stop();
    else if (t3().mode === ew.TBI.VOICE_ACTIVITY && ty) {
        let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = ee.A.getConfig({
            location: "MediaEngineStore.handleInputDetected",
        });
        e &&
            tz.start(eJ, () => {
                eE.default.track(ew.HAw.HARDWARE_MUTE_GUESSED, {
                    input_device_name: to[nA(to, t3().inputDeviceId)]?.name,
                    rtc_connection_id: eO.A.getRTCConnectionId(),
                }),
                    (t$ = !0),
                    r.emitChange();
            }),
            null != t &&
                tN.start(t * eA.A.Millis.MINUTE, () => {
                    (ty = !1), o.reset();
                });
    }
}
function rg(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === tf) return !1;
    (tf = n), e8.eachConnection(t5);
}
function rA(e) {
    let { state: t, permissionType: n } = e,
        r = t === eP.hL.ACCEPTED;
    switch (n) {
        case eP.iL.AUDIO:
            (tG = !0), e8.eachConnection(t5);
            break;
        case eP.iL.CAMERA:
            !r && th && t8(!1);
            break;
        default:
            return !1;
    }
}
function rI() {
    return tO || !1;
}
async function rT() {
    try {
        await eS.Ay.ensureModule("discord_krisp");
        let e = eS.Ay.requireModule("discord_krisp");
        (tO = !0),
            (c = e.getSdkVersion?.()),
            (d = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (tb = e), r.emitChange();
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
        eE.default.track(ew.HAw.VOICE_PROCESSING, { noise_canceller_error: e }), nf({ noiseCancellation: !1 });
    } finally {
        tR = !1;
    }
}
function rS() {
    return (0, eI.isWindows)() || (0, eI.isLinux)() || (0, eI.isMac)();
}
function ry() {
    !rS() || __OVERLAY__ || tR || tO
        ? (0, eI.isWeb)() && e8.supports(eU.O5.NOISE_CANCELLATION)
            ? ((tO = !0), r.emitChange())
            : (0, eI.isWeb)() && nf({ noiseCancellation: !1 })
        : ((tR = !0), rT());
}
async function rv() {
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
function rN() {
    (0, eI.isLinux)() && rv();
}
function rC(e) {
    let { deviceId: t, active: n, available: r } = e;
    tx[t] = { active: n, available: r };
}
function rR(e) {
    let t = e.bypassEnabled;
    nf({ bypassSystemInputProcessing: t }), e8.setAudioInputBypassSystemProcessing(t), n6(e.location);
}
function rO(e) {
    rb(e.subsystem);
}
function rb(e) {
    e === eU.rB.AUTOMATIC
        ? (nf({ automaticAudioSubsystem: !0 }), rD())
        : (nf({ automaticAudioSubsystem: !1 }), e8.setAudioSubsystem(e));
}
function rD() {
    e8.queueAudioSubsystem(eU.rB.EXPERIMENTAL);
}
function rL(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && t8(i, null), null != t || null == n)) {
        tC = !1;
        return;
    }
    if (tC) return;
    tC = !0;
    let s = t3();
    (s.mute || s.deaf) && (nf({ deaf: !1, mute: !1 }), e8.eachConnection(t5));
}
function rw(e) {
    let { application: t } = e;
    te.add(t.id);
}
function rM(e) {
    let { application: t } = e;
    te.delete(t.id);
}
function rP(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (tt = !1), e8.eachConnection(t5);
                break;
            case "video":
                t8(!1);
        }
}
function rx(e) {
    (tt = e.enabled), e.unmute && nf({ mute: !1, deaf: !1 }), e8.eachConnection(t5);
}
function rk(e) {
    let { enabled: t } = e;
    ec.A.requestPermission(eP.iL.CAMERA), t8(t);
}
function rU(e) {
    let { sourceId: t, applicationName: n, quality: i } = e;
    if (!(0, M.Ao)() || null == R.A) return !1;
    null != a &&
        (e8.setClipsSource(null),
        (0, eI.isWindows)() &&
            (null != a.desktopSource.soundshareId
                ? O.c1(a.desktopSource.soundshareId)
                : null != a.desktopSource.sourcePid && t3().videoHook && O.c1(a.desktopSource.sourcePid)));
    let s = eg.A.getPidFromDesktopSource(t),
        { soundshareId: o, soundshareSession: l } = nb(s, !0);
    a = { desktopSource: { id: t, sourcePid: s, soundshareId: o, soundshareSession: l }, quality: i };
    let u = tJ("MediaEngineStore clips"),
        c = t3().videoHook,
        d = !c || !W.f.getConfig({ location: "handleClipsInit" }).enabled,
        _ = c && er.H.getConfig({ location: "handleClipsInit" }).enabled;
    e8.setClipsSource({
        desktopDescription: {
            id: a.desktopSource.id,
            soundshareId: a.desktopSource.soundshareId,
            useVideoHook: c,
            useHookFramePacer: d,
            useGraphicsCapture: no(),
            useCaptureDeviceForEncode: !1,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: nu(),
            videoHookStaleFrameTimeoutMs: e$,
            graphicsCaptureStaleFrameTimeoutMs: ez,
            hdrCaptureMode: u,
            videoHookAllowDx12: _,
        },
        quality: i,
        applicationName: n,
        videoEncoderExperiments: r.getVideoEncoderExperiments(eU.x.STREAM, "streamer"),
    });
}
function rG(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((a = null), e8.setClipsSource(null));
}
function rF(e) {
    let { settings: t } = e;
    if (t?.desktopSettings != null) {
        let e = null,
            n = null,
            { sourceId: r, sound: i } = t.desktopSettings,
            s = t.context ?? eU.x.DEFAULT,
            a = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
            o = eg.A.getPidFromDesktopSource(r);
        eI.isPlatformEmbedded && ({ soundshareId: e, soundshareSession: n } = nb(o, i)),
            t7(s),
            t8(s === eU.x.STREAM && th, {
                desktopSource: { id: r, sourcePid: o, soundshareId: e, soundshareSession: n },
                quality: { resolution: a.resolution, frameRate: a.frameRate },
            });
    } else if (t?.cameraSettings != null) {
        let e = t.context ?? eU.x.DEFAULT,
            { videoDeviceGuid: n, audioDeviceGuid: r } = t.cameraSettings,
            i = e === eU.x.STREAM && th,
            s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
        t8(i, {
            cameraSource: { videoDeviceGuid: n, audioDeviceGuid: r },
            quality: { resolution: s.resolution, frameRate: s.frameRate },
        });
    } else t8(th, null);
}
function rV(e) {
    let { section: t } = e;
    return t === ew.nc_.VOICE && nm(), !1;
}
function rB() {
    return e8.eachConnection(ns), !1;
}
function rH(e) {
    let { enabled: t } = e,
        n = nf({ aecDumpEnabled: t });
    e8.setAecDump(n.aecDumpEnabled);
}
function rj(e) {
    let { enabled: t } = e;
    nf({ openH264Enabled: t }), eS.Ay?.setOpenH264Enabled?.(t);
}
function rY(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (e9 = Object.values(eU.x).reduce((e, n) => {
        let r = n,
            i = e5();
        return (e[r] = E().merge(i, t[r])), e;
    }, {})),
        v.w.set(eV, e9),
        nh();
}
function rW(e) {
    let { state: t } = e,
        n = G.A.isEnabled();
    if (t === ew.g6G.BACKGROUND && th && !n) (tT = !0), t8(!1);
    else {
        if (t !== ew.g6G.ACTIVE || !tT) return !1;
        (tT = !1), t8(!0);
    }
    return !0;
}
function rK(e) {
    e8.eachConnection((t) => t.setBitRate(e.bitrate));
}
function r$() {
    if ((!th && null == s) || null != eO.A.getRTCConnectionId()) return !1;
    t8(!1, null);
}
function rz() {
    return !!tw && ((tw = !1), !0);
}
function rq(e) {
    e8.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function rZ(e) {
    let { settings: t } = e;
    e8.applyMediaFilterSettings(t).finally(() => {
        (tM = !1), r.emitChange();
    });
}
function rX() {
    tM = !0;
}
function rQ() {
    tM = !1;
}
function rJ(e) {
    tK = e.enabled;
}
function r0() {
    if ((0, eI.isDesktop)() && eI.isPlatformEmbedded && !tQ) {
        tQ = !0;
        let e = async () => {
            let t = await new Promise((e) => {
                eS.Ay.pollQueueMetrics((t) => {
                    e(t);
                });
            });
            t.periodMs = eU.tl;
            let n = r2(t);
            null !== n && eE.default.track(ew.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, eU.tl);
        };
        setTimeout(e, eU.tl);
    }
}
class r1 extends S.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        na(),
            n_(),
            ry(),
            rN(),
            nW(),
            r0(),
            (0, eI.isWindows)() && eI.isPlatformEmbedded && ne(),
            (0, eI.isAndroid)() && null != e4 && parseInt(e4(), 10) >= 30 && nt(),
            (tj = {
                [eU.O5.VIDEO]: e8.supports(eU.O5.VIDEO),
                [eU.O5.DESKTOP_CAPTURE]: e8.supports(eU.O5.DESKTOP_CAPTURE),
                [eU.O5.HYBRID_VIDEO]: e8.supports(eU.O5.HYBRID_VIDEO),
            }),
            this.waitFor(ev.default, eN.A, eC.A, eR.A, L.A, U.A, eO.A, F.Ay, eh.A, eD.default, eL.A);
    }
    supports(e) {
        return e8.supports(e);
    }
    supportsInApp(e) {
        return tj[e] || e8.supports(e);
    }
    isSupported() {
        return e8.supported();
    }
    isNoiseSuppressionSupported() {
        return e8.supports(eU.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return rI();
    }
    isNoiseCancellationError() {
        return tw;
    }
    isAutomaticGainControlSupported() {
        return e8.supports(eU.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nd() && (e8.supports(eU.O5.LEGACY_AUDIO_SUBSYSTEM) || e8.supports(eU.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return e8.supports(eU.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === e8.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return rI();
    }
    isAecDumpSupported() {
        return e8.supports(eU.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return e8.supports(eU.O5.VIDEO) && e8.supports(eU.O5.SIMULCAST);
    }
    getAecDump() {
        return t3().aecDumpEnabled;
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
        return tD;
    }
    isEnabled() {
        return tt;
    }
    isMute() {
        return this.isSelfMute() || td;
    }
    isDeaf() {
        return this.isSelfDeaf() || tp;
    }
    hasContext(e) {
        return null != e9[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.DEFAULT;
        return e === eU.x.DEFAULT && t_;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.DEFAULT;
        return (
            !this.isEnabled() ||
            t3(e).mute ||
            !ec.A.didHavePermission(eP.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eU.x.DEFAULT && tf)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tg;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tg = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.DEFAULT,
            t = t$ && "voice_isolation" !== this.getSystemMicrophoneMode() && t3(e).mode === ew.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (eC.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return tK;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.DEFAULT;
        return !this.isSupported() || t3(e).deaf;
    }
    isVideoEnabled() {
        return th && tS;
    }
    isVideoAvailable() {
        return Object.values(tu).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return tS;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.STREAM;
        return tr === e && null != s;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.STREAM;
        return tr === e && null != s && s.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eU.x.DEFAULT;
        return e !== ev.default.getId() && (t3(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return e8.supports(eU.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eU.x.DEFAULT;
        return t3(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eU.x.DEFAULT;
        return t3(t).videoToggleStateMap[e] ?? ew.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eU.x.DEFAULT;
        return t === eU.x.DEFAULT && tV.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.DEFAULT;
        return e === eU.x.DEFAULT && tV.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tM;
    }
    isNativeAudioPermissionReady() {
        return tG;
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
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eU.x.DEFAULT,
            n = t3(t).localPans[e];
        return null != n ? n : eK;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eU.x.DEFAULT,
            n = t === eU.x.STREAM ? eU.Cn : eU.Hz,
            r = t3(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return t3().inputVolume;
    }
    getOutputVolume() {
        return t3().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.DEFAULT;
        return t3(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.DEFAULT;
        return t3(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            E().each(e9, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === ew.TBI.PUSH_TO_TALK && te.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nA(to, t3().inputDeviceId);
    }
    getOutputDeviceId() {
        return nA(tl, t3().outputDeviceId);
    }
    getVideoDeviceId() {
        return nA(tu, t3().videoDeviceId);
    }
    getInputDevices() {
        return to;
    }
    getOutputDevices() {
        return tl;
    }
    getVideoDevices() {
        return tu;
    }
    getEchoCancellation() {
        let e = t3();
        return eC.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return e8.supports(eU.O5.SIDECHAIN_COMPRESSION) && t3().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return t3().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return t3().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tk && tk;
    }
    getOpenH264Enabled() {
        return (0, eI.isLinux)() && t3().openH264Enabled;
    }
    getLoopback() {
        return tH.size > 0;
    }
    getLoopbackReasons() {
        return tH;
    }
    getNoiseSuppression() {
        let e = t3();
        return eC.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = t3();
        return eC.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return t3().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return t3().noiseCancellation;
    }
    getHardwareEncoding() {
        return e0;
    }
    getEnableSilenceWarning() {
        return t3().silenceWarning;
    }
    getDebugLogging() {
        return e8.getDebugLogging();
    }
    getQoS() {
        return t3().qos;
    }
    getAttenuation() {
        return t3().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return t3().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return t3().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return nc() && t3().automaticAudioSubsystem ? eU.rB.AUTOMATIC : e8.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return e8.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return t3().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === ek.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.DEFAULT;
        return t3(e);
    }
    getState() {
        return {
            settingsByContext: e9,
            inputDevices: to,
            outputDevices: tl,
            appSupported: tj,
            krispModuleLoaded: tO,
            krispVersion: c,
            krispSuppressionLevel: d,
            goLiveSource: s,
            goLiveContext: tr,
        };
    }
    getInputDetectedThisConnection() {
        return ty;
    }
    getInputDetected() {
        return o.inputDetected;
    }
    getLastInputDetectedUpdateTime() {
        return o.lastUpdateTime;
    }
    getNoInputDetectedNotice() {
        return tv;
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
        e8.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return tn;
    }
    getVideoHook() {
        return t3().videoHook;
    }
    supportsVideoHook() {
        return e8.supports(eU.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = t3().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return e8.supports(eU.O5.EXPERIMENTAL_SOUNDSHARE) && T().satisfies(R.A?.os.release, eM.$x);
    }
    supportsHookSoundshare() {
        return (0, eI.isWindows)() && e8.supports(eU.O5.SOUNDSHARE) && T().satisfies(R.A?.os.release, eM.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = t3().useSystemScreensharePicker,
            n = (0, eI.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return e8.supports(eU.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return tX;
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
            let { overrideDeviceReuse: e } = en.g.getConfig({ location: "handleReady" });
            e && n.push("videoCaptureDeviceOverrideReuse");
        }
        return (0, X.n)({ location: "handleReady" }).enabled && n.push("linux-vulkan"), n.join(",");
    }
    getUseGamescopeCapture() {
        return tZ;
    }
    getSpeakingWhileMuted() {
        return tA;
    }
    getKrispModelOverride() {
        return _;
    }
    getKrispModels() {
        return tb;
    }
    getKrispVadActivationThreshold() {
        return t3().modeOptions.vadKrispActivationThreshold ?? eW;
    }
    hasActiveCallKitCall() {
        return tq;
    }
    setHasActiveCallKitCall(e) {
        tq = e;
    }
    supportsScreenSoundshare() {
        return (0, eI.isMac)()
            ? e8.supports(eU.O5.SOUNDSHARE) && T().satisfies(R.A?.os.release, eM.P$) && nu()
            : (0, eI.isWindows)()
              ? e8.supports(eU.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, eI.isLinux)() && e8.supports(eU.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, eI.isWindows)()) {
            if (this.getBypassSystemInputProcessing()) return;
            return tx[this.getInputDeviceId()]?.active?.find((e) => e === e1);
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
        return e8.fetchAsyncResources(e);
    }
    startDavePreload() {
        if (!tP && ((tP = !0), (0, eI.isWeb)())) {
            let e = { fetchDave: !0 };
            e8.fetchAsyncResources(e).catch((e) => {
                eF.warn("DAVE preload failed:", e), eT.A.captureException(e);
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
        return tY;
    }
}
function r2(e) {
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
(r = new r1(C.h, {
    VOICE_CHANNEL_SELECT: rL,
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
    AUDIO_SET_NOISE_SUPPRESSION: rn,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: rr,
    AUDIO_SET_NOISE_CANCELLATION: ri,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: rs,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: ro,
    AUDIO_SET_DEBUG_LOGGING: rl,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: ru,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: ra,
    MEDIA_ENGINE_SET_VIDEO_HOOK: rc,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: rd,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: r_,
    AUDIO_SET_ATTENUATION: rf,
    AUDIO_SET_QOS: rp,
    MEDIA_ENGINE_DEVICES: n2,
    AUDIO_VOLUME_CHANGE: n3,
    AUDIO_RESET: rh,
    AUDIO_INPUT_DETECTED: rE,
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: rm,
    AUDIO_SET_SUBSYSTEM: rO,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rR,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rx,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rk,
    MEDIA_ENGINE_PERMISSION: rP,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rF,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nJ,
    MEDIA_ENGINE_INTERACTION_REQUIRED: n1,
    USER_SETTINGS_MODAL_INIT: rV,
    USER_SETTINGS_MODAL_SET_SECTION: rV,
    CERTIFIED_DEVICES_SET: rB,
    RPC_APP_CONNECTED: rw,
    RPC_APP_DISCONNECTED: rM,
    OVERLAY_INITIALIZE: nw,
    APP_STATE_UPDATE: rW,
    SET_CHANNEL_BITRATE: rK,
    SET_VAD_PERMISSION: rg,
    SET_NATIVE_PERMISSION: rA,
    SET_CHANNEL_VIDEO_QUALITY_MODE: rq,
    MEDIA_ENGINE_SET_AEC_DUMP: rH,
    MEDIA_ENGINE_SET_OPENH264_ENABLED: rj,
    MEDIA_ENGINE_RESET_SETTINGS: rY,
    CHANNEL_DELETE: r$,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rz,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rZ,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rX,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rQ,
    USER_SETTINGS_PROTO_UPDATE: nV,
    CLIPS_INIT: rU,
    CLIPS_SETTINGS_UPDATE: rG,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rJ,
    MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: rC,
})),
    (o = new q.A(e8, r));
let r3 = r;
