"use strict";
let r, i, a, s, o, l, u, c, d, _;
n.d(t, { A: () => r1 }), n(321073), n(790599);
var f = n(284009),
    p = n.n(f),
    h = n(735438),
    m = n.n(h),
    g = n(299855),
    E = n.n(g),
    A = n(311907),
    I = n(205693),
    T = n(506774),
    y = n(451988),
    S = n(73153),
    v = n(77729),
    C = n(719129),
    b = n(894539),
    N = n(274372),
    R = n(915618),
    O = n(572164),
    D = n(626584),
    L = n(211597),
    w = n(709710),
    x = n(49463),
    P = n(784113),
    M = n(15285),
    k = n(540305),
    U = n(17300),
    G = n(544746),
    V = n(820344),
    F = n(593595),
    B = n(788601),
    j = n(626078),
    H = n(509034),
    Y = n(638188),
    W = n(269377),
    K = n(934341),
    z = n(658046),
    $ = n(621963),
    q = n(525286),
    Z = n(780732),
    Q = n(495439),
    X = n(927170),
    J = n(233232),
    ee = n(140175),
    et = n(267378),
    en = n(223572),
    er = n(276006),
    ei = n(670470),
    ea = n(165479),
    es = n(896014),
    eo = n(765396),
    el = n(37770),
    eu = n(75076),
    ec = n(674966),
    ed = n(559633),
    e_ = n(3527),
    ef = n(714763),
    ep = n(879172),
    eh = n(555444),
    em = n(617617),
    eg = n(996744),
    eE = n(28075),
    eA = n(954571),
    eI = n(353835),
    eT = n(927813),
    ey = n(723702),
    eS = n(728458),
    ev = n(837921),
    eC = n(350535),
    eb = n(961350),
    eN = n(131319),
    eR = n(347481),
    eO = n(734057),
    eD = n(383501),
    eL = n(851581),
    ew = n(287809),
    ex = n(117549),
    eP = n(652215),
    eM = n(502075),
    ek = n(765682),
    eU = n(355097),
    eG = n(509381),
    eV = n(731854),
    eF = n(985018);
let eB = new D.A("MediaEngineStore"),
    ej = "MediaEngineStore",
    eH = 4,
    eY = 1,
    eW = 1,
    eK = 1,
    ez = 0.5,
    e$ = { left: 1, right: 1 },
    eq = 500,
    eZ = 5 * eT.A.Millis.SECOND,
    eQ = -60,
    eX = 100,
    eJ = 2 * eT.A.Millis.SECOND,
    e0 = 30 * eT.A.Millis.SECOND,
    e1 = !0,
    e2 = "deep_noise_suppression",
    e3 = 0;
function e6() {
    return {
        mode: eP.TBI.VOICE_ACTIVITY,
        modeOptions: {
            threshold: eQ,
            autoThreshold: ey.isPlatformEmbedded || __OVERLAY__,
            vadUseKrisp: !0,
            vadKrispActivationThreshold: ez,
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
        inputVolume: eV.Hz,
        outputVolume: eV.Hz,
        inputDeviceId: eV.dx,
        outputDeviceId: eV.dx,
        videoDeviceId: eV.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: e5.supports(eV.O5.VIDEO_HOOK),
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
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
let e4 = {
        [eG.my.CUSTOM]: {},
        [eG.my.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [eG.my.STUDIO]: {
            mode: eP.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    e5 = (0, I.hB)((0, I.WI)());
eB.enableNativeLogger(!0);
let e7 = {},
    e8 = new Set([eV.x.DEFAULT]),
    e9 = e5.supports(eV.O5.AUTO_ENABLE),
    te = !1,
    tt = eV.x.STREAM,
    tn = performance.now(),
    tr = null,
    ti = { [eV.dx]: nE("No Input Devices") },
    ta = { [eV.dx]: nE("No Output Devices") },
    ts = { [eV.dx]: nE("No Video Devices") },
    to = new y.Ep(),
    tl = !1,
    tu = !1,
    tc = !1,
    td = !1,
    t_ = !1,
    tf = eV.qe,
    tp = eV.qe,
    th = !1,
    tm = !1,
    tg = !1,
    tE = new y.Ep(),
    tA = !1,
    tI = !1,
    tT = null,
    ty = !1,
    tS = !1,
    tv = !1,
    tC = !1,
    tb = !1,
    tN = [],
    tR = !1,
    tO = null,
    tD = null,
    tL = null,
    tw = null,
    tx = null,
    tP = !1,
    tM = !1,
    tk = !1,
    tU = null,
    tG = null,
    tV = !1,
    tF = !1;
ec.A.hasPermission(ek.iL.AUDIO, { showAuthorizationError: !1 }),
    ec.A.hasPermission(ek.iL.CAMERA, { showAuthorizationError: !1 });
let tB = !1,
    tj = new Set(),
    tH = tB,
    tY = new Set(),
    tW = {},
    tK = null,
    tz = null,
    t$ = !0,
    tq = !1,
    tZ = !1,
    tQ = !1,
    tX = !1;
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
    return null != tG ? tG : "u" > typeof window ? (tG = t0().then((e) => ((tU = e), e))) : Promise.resolve(!1);
}
function t2() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT,
        t = e7[e];
    return null == t && ((t = e6()), (e7[e] = t)), t;
}
function t3() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT,
        t = t2(e),
        n = e4[t.activeInputProfile ?? eG.my.CUSTOM],
        r = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}) };
    if (
        (null == r.vadDuringPreProcess && (r.vadDuringPreProcess = (0, en.R)({ location: "getSettings" }).enabled),
        (null == r.vadKrispActivationThreshold && !0 === n.automaticGainControl) || !0 === t.automaticGainControl)
    ) {
        let e = (0, U.F)({ location: "getSettings" });
        null != e.vadKrispActivationThreshold && (r.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return { ...t, ...n, modeOptions: r };
}
function t6(e) {
    let t = t3(e.context),
        n = t.mode;
    e.context === eV.x.DEFAULT &&
        ((0, eh.H)({ location: "setInputMode", autoTrackExposure: !1 }).enableLatching &&
            n === eP.TBI.PUSH_TO_TALK &&
            t.modeOptions.pttLatchingEnabled &&
            (n = eP.TBI.VOICE_ACTIVITY),
        (0, ee.N)(!1, !1, !1)),
        e.setInputMode(n, {
            vadThreshold: t.modeOptions.threshold,
            vadAutoThreshold: t.modeOptions.autoThreshold,
            vadUseKrisp: t.modeOptions.vadUseKrisp && rE(),
            vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? ez,
            vadLeading: t.modeOptions.vadLeading,
            vadTrailing: t.modeOptions.vadTrailing,
            vadDuringPreProcess: t.modeOptions.vadDuringPreProcess ?? !1,
            pttReleaseDelay: Math.round(t.modeOptions.delay),
        });
}
function t4(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eV.Hz;
    return m().clamp(e, 0, t);
}
function t5(e) {
    let t = t3(e.context),
        n = !e9 || t.mute || t.deaf;
    e.context === eV.x.DEFAULT
        ? (n = n || tl || tu || tc || !ec.A.didHavePermission(ek.iL.AUDIO))
        : e.context === eV.x.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eV.x.DEFAULT && b.A.updateNativeMute();
}
function t7(e) {
    e !== tt && (null != a && e5.setGoLiveSource(null, tt), (tt = e));
}
function t8() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t_,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        n = a;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, ey.isWindows)() && C.c1(n.desktopSource.soundshareId),
            e5.setGoLiveSource(null, tt)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            e5.setGoLiveSource(null, tt),
        t_ || e)
    ) {
        let t = t3().videoDeviceId;
        t_ && t === eV.dx && tp === eV.dx && tf !== eV.qe ? (t = tf) : (tp = t),
            (tf = (t_ = e) ? nI(ts, t) : eV.qe),
            e5.setVideoInputDevice(tf);
    }
    if (((a = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = tJ("MediaEngineStore go live"),
                i = t3().videoHook,
                a = ns(),
                s = a ? (no() ? eM.zl : eM.eg) : 0,
                o = (0, ey.isWindows)() && (0, er.b)("updateVideo").enabled,
                l = !1;
            (0, ey.isWindows)() && tz && (l = ea.q.getConfig({ location: "updateVideo" }).enabled),
                e5.setGoLiveSource(
                    {
                        desktopDescription: {
                            id: t.desktopSource.id,
                            soundshareId: t.desktopSource.soundshareId,
                            useVideoHook: i,
                            useGraphicsCapture: a,
                            useGraphicsCaptureApiLevel: s,
                            useCaptureDeviceForEncode: o,
                            useLoopback: r.getExperimentalSoundshare(),
                            useQuartzCapturer: !0,
                            allowScreenCaptureKit: nl(),
                            videoHookStaleFrameTimeoutMs: eq,
                            graphicsCaptureStaleFrameTimeoutMs: eZ,
                            hdrCaptureMode: n,
                            enableGlobalFramePoolLock: (0, z.H)({ location: "updateVideo" }).enabled,
                            useGraphicsCaptureDirtyRegions: l,
                        },
                        quality: e,
                    },
                    tt,
                );
        }
        null != t.cameraSource &&
            e5.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: t.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: t.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                tt,
            );
    }
}
function t9(e) {
    switch (e) {
        case eV.CO.CPU_OVERUSE:
            return w.B6.NoiseCancellerCpuOveruse;
        case eV.CO.FAILED:
            return w.B6.NoiseCancellerFailed;
        case eV.CO.VAD_CPU_OVERUSE:
            return w.B6.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function ne() {
    null === tr &&
        e5
            .getCodecSurvey()
            .then((e) => {
                try {
                    let t = JSON.parse(e);
                    if (null == t || null == t.available_video_decoders) throw Error("decoder survey is not available");
                    tr = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                } catch (e) {
                    eB.error("Failed to parse codec survey", e), (tr = !1);
                }
            })
            .catch((e) => {
                eB.error("Failed to get codec survey", e), (tr = !1);
            })
            .finally(() => {
                S.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
            });
}
function nt(e) {
    let t = (0, U.F)({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function nn(e, t) {
    e.setAutomaticGainControl(nt(t));
}
function nr(e, t) {
    let n = (0, e_.A)(t, r.getSystemMicrophoneMode(), { location: "setNoiseCancellation" });
    n !== t && eB.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: i } = (0, U.F)({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(i);
    let { noiseCancellationAfterProcessing: a, vadAfterWebrtc: s } = (0, X.$)({ location: "setNoiseCancellation" });
    e.setNoiseCancellationAfterProcessing(a), e.setVADAfterWebrtc(s);
}
function ni(e) {
    let t = t3(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eR.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eR.A.hasNoiseSuppression(n) || t.noiseSuppression),
        nn(e, eR.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        nr(e, t.noiseCancellation),
        e.setVoiceFilterId(tO),
        (0, ey.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function na() {
    to.start(e0, () => {
        eB.error("Device enumeration timed out"), eA.default.track(eP.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
    }),
        e5.on(I.bg.Connection, (e) => {
            t6(e), t5(e), ni(e);
            let t = t3();
            e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
                e.setQoS(t.qos);
            let n = (0, Q.K)({ location: "setupMediaEngine" }).treatment;
            (tV = n === Q.c.NoSoftwareDecodeWithFallback),
                n === Q.c.NoSoftwareDecode || n === Q.c.NoSoftwareDecodeWithFallback
                    ? (e.setExperimentFlag(eV.fd.H265_HARDWARE_ONLY, !0),
                      (0, ey.isWindows)()
                          ? t1().then((t) => {
                                e.setExperimentFlag(eV.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                            })
                          : (0, ey.isMac)() && e.setExperimentFlag(eV.fd.H265_HARDWARE_DECODE_AVAILABLE, !0))
                    : n === Q.c.Disabled &&
                      (e.setExperimentFlag(eV.fd.H265_HARDWARE_ONLY, !0),
                      e.setExperimentFlag(eV.fd.H265_HARDWARE_DECODE_AVAILABLE, !1)),
                (0, ey.isWindows)() &&
                    (0, Z.r)({ location: "setupMediaEngine" }).enabled &&
                    e.setExperimentFlag(eV.fd.USE_H264_MF_DECODER, !0);
            let i = eD.A.getGuildId(),
                {
                    muteBeforeProcessing: s,
                    pttBeforeProcessing: o,
                    skipEncode: l,
                } = (null != i ? W.A : Y.A).getCurrentConfig(
                    { location: "setupMediaEngine", guildId: i ?? void 0 },
                    { autoTrackExposure: !0 },
                );
            s && e.setExperimentFlag(eV.fd.MUTE_BEFORE_PROCESSING, !0),
                o && e.setExperimentFlag(eV.fd.PTT_BEFORE_PROCESSING, !0),
                l && e.setExperimentFlag(eV.fd.SKIP_ENCODE, !0),
                (0, J.J)({ location: "setupMediaEngine" }).enabled &&
                    e.setExperimentFlag(eV.fd.LOW_LATENCY_RATE_CONTROL, !0);
            let u = !1,
                c = !0;
            if (
                (e.setExperimentFlag(eV.fd.RESET_DECODER_ON_ERRORS, !0),
                u && e.setExperimentFlag(eV.fd.SOFTWARE_FALLBACK_ON_ERRORS, !0),
                c && e.setExperimentFlag(eV.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0),
                e.context === eV.x.STREAM)
            ) {
                let t = ny(ta);
                e.setSoundshareDiscardRearChannels(t);
                let { simulcastEnabled: n, lqStreamBitrate: r } = q.A.getConfig();
                e.configureGoLiveSimulcast(n, r);
            }
            if ((0, ey.isWindows)())
                e.setExperimentFlag(eV.fd.SIGNAL_AV1, !0), e.setExperimentFlag(eV.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            else if ((0, ey.isMac)()) {
                e.setExperimentFlag(eV.fd.SIGNAL_AV1_DECODE, !0);
                let { enabled: t } = (0, V.t)("MediaEngineStore");
                t && e.setExperimentFlag(eV.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            } else if ((0, ey.isLinux)()) e.setExperimentFlag(eV.fd.SIGNAL_AV1_DECODE, !0);
            else if ((0, ey.isIOS)()) {
                let { enabled: t } = (0, G.$)("MediaEngineStore");
                t &&
                    (e.setExperimentFlag(eV.fd.SIGNAL_AV1_DECODE, !0),
                    e.setExperimentFlag(eV.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
            }
            if ((0, ey.isWeb)()) {
                let { enabled: t } = (0, K.O)("MediaEngineStore");
                e.setExperimentFlag(eV.fd.BROWSER_HEVC, t);
            }
            if (
                ((0, ey.isWindows)() &&
                    tK?.startsWith("AMD") &&
                    (0, es.F)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eV.fd.WMF_GPU_ENCODE, !0),
                (0, ey.isWindows)() &&
                    tK?.startsWith("Intel") &&
                    (0, eo.J)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eV.fd.WMF_GPU_ENCODE, !0),
                (0, ey.isWindows)() &&
                    tK?.startsWith("Qualcomm") &&
                    (0, es.F)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eV.fd.WMF_GPU_ENCODE, !0),
                e5.setHasFullbandPerformance((0, L.A)()),
                e.setRemoteAudioHistory(1e3),
                (0, R.A)(r))
            ) {
                let { enableViewerClipping: t } = ei.A.getCurrentConfig(
                    { location: "f627ab_15" },
                    { autoTrackExposure: !1 },
                );
                e.setViewerSideClip(t), e.setClipsKeyFrameInterval(eV.X1);
            }
            for (let n of ((t = t3(e.context)), e.setPostponeDecodeLevel(eX), Object.keys(t.localMutes)))
                n !== eb.default.getId() && e.setLocalMute(n, t.localMutes[n]);
            for (let n of Object.keys(t.localVolumes))
                n !== eb.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
            for (let n of Object.keys(t.localPans)) {
                let r = t.localPans[n];
                e.setLocalPan(n, r.left, r.right);
            }
            for (let n of Object.keys(t.disabledLocalVideos)) e.setLocalVideoDisabled(n, t.disabledLocalVideos[n]);
            e.on(I.yq.Speaking, (t, n, r, i) => {
                S.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: i });
            }),
                e.context === eV.x.DEFAULT &&
                    ((tm = !1),
                    (tg = !1),
                    e.on(I.yq.SpeakingWhileMuted, () => {
                        (tm = !0),
                            (tg = !0),
                            r.emitChange(),
                            tE.stop(),
                            tE.start(eJ, () => {
                                (tg = !1), r.emitChange();
                            });
                    })),
                e.on(I.yq.DesktopSourceEnd, (t, n) => {
                    S.h.dispatch({
                        type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                        settings: { context: e.context },
                        endReason: t,
                        errorCode: n,
                    });
                }),
                e.on(I.yq.InteractionRequired, (e) => {
                    S.h.dispatch({ type: "MEDIA_ENGINE_INTERACTION_REQUIRED", required: e });
                }),
                e.on(I.yq.VideoHookInitialize, (e, t, n, r, i, s) => {
                    a?.desktopSource != null &&
                        eA.default.track(eP.HAw.VIDEOHOOK_INITIALIZED, {
                            backend: e,
                            format: t,
                            framebuffer_format: n,
                            sample_count: r,
                            success: i,
                            reinitialization: s,
                            ...(0, k.A)(a?.desktopSource),
                        });
                }),
                e.on(I.yq.NoiseCancellationError, (e) => {
                    eB.warn(`noisecancellererror event: ${e}`),
                        (0, w.QW)({ type: w.iy.NOISE_CANCELLER_ERROR, underlyingError: t9(e) }),
                        (tP = !0),
                        eA.default.track(eP.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        S.h.dispatch({ type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: !0 }),
                        S.h.dispatch({ type: "AUDIO_SET_NOISE_CANCELLATION", enabled: !1 }),
                        S.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e });
                }),
                e.on(I.yq.VoiceActivityDetectorError, (e) => {
                    eB.warn(`voiceactivitydetectorerror event: ${e}`),
                        (0, w.QW)({ type: w.iy.NOISE_CANCELLER_ERROR, underlyingError: t9(e) }),
                        eA.default.track(eP.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        S.h.dispatch({
                            type: "AUDIO_SET_MODE",
                            context: eV.x.DEFAULT,
                            mode: eP.TBI.VOICE_ACTIVITY,
                            options: { ...t3(eV.x.DEFAULT).modeOptions, vadUseKrisp: !1 },
                        }),
                        S.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e });
                }),
                e.on(I.yq.SdpError, (e, t, n, r) => {
                    eA.default.track(eP.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: r });
                }),
                e.on(I.yq.VideoState, (t) => {
                    S.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                }),
                e.setBitRate(eN.A.bitrate),
                e.applyVideoQualityMode(ex.A.mode),
                (0, ey.isWindows)() &&
                    e5.supports(eV.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                    e5.setAsyncVideoInputDeviceInit((0, j.v)("setupMediaEngine").enabled);
        }),
        e5.on(I.bg.DeviceChange, (e, t, n) => {
            to.stop(),
                S.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
        }),
        e5.on(I.bg.VolumeChange, (e, t) => {
            S.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
        }),
        e5.on(I.bg.DesktopSourceEnd, (e, t) => {
            S.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
        }),
        e5.on(I.bg.AudioPermission, (e) => {
            (tF = !0), S.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
        }),
        e5.on(I.bg.VideoPermission, (e) => {
            S.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
        }),
        e5.on(I.bg.WatchdogTimeout, async () => {
            let e;
            try {
                await eI.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
            } catch (t) {
                "number" == typeof t.status && (e = t.status);
            }
            eB.warn(`Watchdog timeout, report submission status: ${e ?? 200}`),
                eA.default.track(eP.HAw.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        e5.on(I.bg.VideoInputInitialized, (e) => {
            eA.default.track(eP.HAw.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired
                    ? null
                    : Math.round(e.timeToFirstFrame * eT.A.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: eD.A.getMediaSessionId(),
                rtc_connection_id: eD.A.getRTCConnectionId(),
            });
        }),
        e5.on(I.bg.AudioInputInitialized, (e) => {
            eA.default.track(eP.HAw.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * eT.A.Millis.SECOND),
                rtc_connection_id: eD.A.getRTCConnectionId(),
            });
        }),
        e5.on(I.bg.ClipsRecordingRestartNeeded, () => {
            S.h.dispatch({ type: "CLIPS_RESTART" });
        }),
        e5.on(I.bg.ClipsInitFailure, (e, t) => {
            S.h.wait(() => {
                S.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t });
            });
        }),
        e5.on(I.bg.ClipsRecordingEnded, (e, t) => {
            s?.desktopSource?.id === e && (null != t && a?.desktopSource?.soundshareId !== t && C.c1(t), (s = null));
        }),
        e5.on(I.bg.NativeScreenSharePickerUpdate, (e, t) => {
            S.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
        }),
        e5.on(I.bg.NativeScreenSharePickerCancel, (e) => {
            S.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
        }),
        e5.on(I.bg.NativeScreenSharePickerError, (e) => {
            S.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
        }),
        e5.on(I.bg.AudioDeviceModuleError, (e, t, n) => {
            eA.default.track(eP.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
        }),
        e5.on(I.bg.VideoCodecError, (e) => {
            let t = "encode" === e.mode ? w.iy.VIDEO_ENCODE_ERROR : w.iy.VIDEO_DECODE_ERROR,
                n = { videoCodec: e.codecStandard, errorMessage: e.message };
            (0, w.QW)(
                t === w.iy.VIDEO_ENCODE_ERROR
                    ? { type: t, ...n, videoEncoder: e.implName }
                    : { type: t, ...n, videoDecoder: e.implName },
            );
        }),
        e5.on(I.bg.ConnectionStats, (e) => {
            S.h.dispatch({
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
        e5.on(I.bg.VoiceQueueMetrics, (e) => {
            let t = r0(e);
            null !== t && eA.default.track(eP.HAw.VOICE_QUEUE_METRICS, t);
        }),
        e5.setOnVideoContainerResized((e, t, n) => {
            S.h.wait(() =>
                S.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
            );
        }),
        n8(),
        re(),
        e5.supports(eV.O5.ASYNC_CLIPS_SOURCE_DEINIT) &&
            e5.setAsyncClipsSourceDeinit((0, H.V)("setupMediaEngine").enabled),
        n_.reset(),
        (0, eL.w)().then((e) => {
            null != e && ((tK = e.gpu_brand), (tz = e.has_intel_hybrid_igpu));
        }),
        e5.on(I.bg.SystemMicrophoneModeChange, (e) => {
            (_ = e), e5.eachConnection(ni);
        });
}
function ns() {
    return (0, ey.isWindows)() && E().satisfies(v.A?.os.release, eM.yg);
}
function no() {
    return (0, ey.isWindows)() && E().satisfies(v.A?.os.release, eM.fG);
}
function nl() {
    return (0, ey.isMac)() && e5.supports(eV.O5.SCREEN_CAPTURE_KIT) && E().satisfies(v.A?.os.release, eM.e);
}
function nu() {
    return (
        (0, ey.isWindows)() &&
        e5.supports(eV.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        e5.supports(eV.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nc() {
    return e5.supports(eV.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
async function nd() {
    let { windowsMuteAndZeroVolumeDetectionEnabled: e } = (0, el.F)({
        location: "MediaEngineStore.fetchInputDeviceOSConfig",
    });
    if ((0, ey.isWindows)() && E().satisfies(v.A?.os.release, eM.PH) && e)
        try {
            let e = nI(ti, t3().inputDeviceId),
                t = ti[e]?.guid;
            if (null != t && "" !== t) {
                await ev.Ay.ensureModule("discord_voice");
                let [e, n] = await Promise.all([e5.getDeviceOSVolume(t), e5.getDeviceOSMuted(t)]);
                (l = e), (o = n);
            }
        } catch (e) {
            eB.warn(`Failed to get device OS volume and/or mute state: ${e}`);
        }
}
let n_ = new (class {
    stateChangeTimeout;
    noVoiceTimeout = 5e3;
    voiceTimeout = 1500;
    started = !1;
    start() {
        this.started || ((this.started = !0), e5.on(I.bg.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout &&
                (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            e5.removeListener(I.bg.Silence, this.handleSilence),
            S.h.dispatch({ type: "AUDIO_INPUT_DETECTED", inputDetected: null }));
    }
    update() {
        let e = t3();
        !ty && eD.A.getState() === eP.S7L.RTC_CONNECTED && e.mode === eP.TBI.VOICE_ACTIVITY && e.silenceWarning
            ? this.start()
            : this.stop();
    }
    reset() {
        this.stop(), this.update();
    }
    handleSilence = (e) => {
        let t = !e;
        null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout);
        let n = () => {
            S.h.dispatch({ type: "AUDIO_INPUT_DETECTED", inputDetected: t }), e && (tS = !0);
        };
        this.stateChangeTimeout = setTimeout(
            async () => {
                (this.stateChangeTimeout = null), e && this.started && (await nd()), this.started && n();
            },
            t ? this.voiceTimeout : this.noVoiceTimeout,
        );
    };
})();
function nf() {
    let e = T.w.get("audio");
    null != e && (T.w.set(ej, { [eV.x.DEFAULT]: e }), T.w.remove("audio")),
        (e7 = T.w.get(ej) ?? {}),
        m().each(e7, (e) => {
            m().defaultsDeep(e, e6()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, eC.OH)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== eH &&
                    ((e.vadUseKrispSettingVersion = eH), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                e.vadThrehsoldMigrated ||
                    ((e.vadThrehsoldMigrated = !0), e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = eQ)),
                e5.supports(eV.O5.SIDECHAIN_COMPRESSION) &&
                    e.sidechainCompressionSettingVersion < eK &&
                    ((e.sidechainCompressionSettingVersion = eK), (e.sidechainCompression = !0)),
                (0, ey.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== eW &&
                      ((e.ncUseKrispjsSettingVersion = eW), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== eY &&
                      ((e.ncUseKrispSettingVersion = eY), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
        }),
        nm();
}
function np(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eV.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = t2(t);
    return Object.assign(r, e), !__OVERLAY__ && n && T.w.set(ej, e7), r;
}
function nh() {
    T.w.remove(ej), location.reload();
}
function nm() {
    let e = t3();
    e5.setAudioInputDevice(e.inputDeviceId),
        e5.setAudioOutputDevice(e.outputDeviceId),
        t8(),
        e5.setInputVolume(e.inputVolume),
        e5.setOutputVolume(e.outputVolume),
        e5.setAecDump(e.aecDumpEnabled),
        e5.setSidechainCompression(e.sidechainCompression),
        e5.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        e5.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing);
}
function ng() {
    e9 || e5.enable().then(() => S.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nE(e) {
    return { id: eV.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
}
function nA(e, t) {
    if (0 === e.length) {
        let e = nE(t);
        return { [e.id]: e };
    }
    return m()(e)
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
    let n = e[t] ?? e[eV.dx] ?? m()(e).values().first();
    return null != n ? n.id : t;
}
function nT(e) {
    let t = ti;
    if (((ti = nA(e, eF.intl.string(eF.t["/QIjDA"]))), !m().isEqual(ti, t))) {
        let e = t3(),
            t = nI(ti, e.inputDeviceId);
        e5.setAudioInputDevice(t), e5.eachConnection(ni);
    }
}
function ny(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nS(e) {
    e5.eachConnection((t) => {
        t.context === eV.x.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function nv(e) {
    let t = ta;
    if (((ta = nA(e, eF.intl.string(eF.t.xlUg0v))), !m().isEqual(ta, t))) {
        let e = t3(),
            n = nI(ta, e.outputDeviceId);
        e5.setAudioOutputDevice(n);
        let r = ny(t),
            i = ny(ta);
        r !== i && nS(i);
    }
}
function nC(e) {
    tI = e.length > 0;
    let t = ts;
    if (((ts = nA(e, eF.intl.string(eF.t.WKWARY))), t_ && !m().isEqual(ts, t))) {
        let e = void 0 !== ts[tf],
            n = tf === eV.dx && t[eV.dx]?.disabled;
        t8(e || n);
    }
}
function nb() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = em.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let r = n === eU.W.USER ? eV.x.DEFAULT : eV.x.STREAM,
            i = r === eV.x.STREAM ? eV.Cn : eV.Hz,
            a = t[n] ?? {},
            { localMutes: s, localVolumes: o } = t3(r);
        for (let [e, t] of Object.entries(a))
            null == (0, ep.tM)(r, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== i ? (o[e] = t.volume) : delete o[e],
                e5.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, r));
        if (e)
            for (let e of new Set([...Object.keys(s), ...Object.keys(o)]))
                null == a[e] &&
                    (delete s[e],
                    delete o[e],
                    e5.eachConnection((t) => {
                        t.setLocalVolume(e, i), t.setLocalMute(e, !1);
                    }, r));
        np({ localMutes: s, localVolumes: o }, r);
    }
}
function nN(e) {
    if (null == r)
        return (
            eB.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
            { soundshareId: null, soundshareSession: "" }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : eI.A.getAudioPid(e),
            n = "";
        return null != t && (n = eI.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n };
    }
}
function nR(e, t) {
    (0, ey.isWindows)() &&
        e > 1 &&
        C.GH(e, { soundshare_session: t }).then((t) => {
            null == t ||
                M.Ay.shouldContinueWithoutElevatedProcessForPID(e) ||
                S.h.wait(() => {
                    S.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: t });
                });
        });
}
function nO(e) {
    (i = e.sessionId), (tl = !1), (td = !1);
    let t = t3();
    if (
        (nu() && (nc() ? rR(eV.rB.AUTOMATIC) : t.automaticAudioSubsystem && rO()),
        e5.supports(eV.O5.OFFLOAD_ADM_CONTROLS))
    ) {
        let e = !1;
        (0, ey.isDesktop)()
            ? (e = (0, F.i)({ location: "handleConnectionOpen" }).enabled)
            : ((0, ey.isIOS)() || (0, ey.isAndroid)()) && (e = (0, B.Y)({ location: "handleConnectionOpen" }).enabled),
            e5.setOffloadAdmControls(e);
    }
    (0, eg.Lb)({ location: "MediaEngineStore", autoTrackExposure: !1 }) &&
        null !== t.mostRecentlyRequestedVoiceFilter &&
        (0, ey.isDesktop)() &&
        (eE.A.getLastInitAttemptMayHaveCrashed()
            ? (S.h.dispatch({ type: "AUDIO_SET_SELF_MUTE", mute: !0, context: eV.x.DEFAULT, playSoundEffect: !0 }),
              np({ mostRecentlyRequestedVoiceFilter: null }))
            : n(342887).md()),
        nb();
}
function nD(e) {
    let { mediaEngineState: t } = e;
    (e7 = t.settingsByContext),
        (ti = t.inputDevices),
        (ta = t.outputDevices),
        (tW = t.appSupported),
        (tb = t.krispModuleLoaded),
        (u = t.krispVersion),
        (tt = t.goLiveContext);
}
function nL() {
    i = null;
}
function nw() {
    if ((0, ey.isWeb)()) {
        let e = et.f1.getCurrentConfig({ location: "MediaEngineStore handlePostConnectionOpen" });
        e.loadWasmModule && e.preload && r.startDavePreload();
    }
    return !1;
}
function nx(e) {
    switch (e.state) {
        case eP.S7L.CONNECTING:
            ng();
            break;
        case eP.S7L.RTC_CONNECTING:
            (ty = !1), (tS = !1), (o = void 0), (l = void 0);
            break;
        case eP.S7L.RTC_CONNECTED:
            t8();
            break;
        case eP.S7L.DISCONNECTED:
            nj(), nH();
    }
    n_.update();
}
function nP(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (tl = t.mute || t.suppress), (td = t.deaf), e5.eachConnection(t5);
            let e = null != t.guildId && null != t.channelId && null != tx && tx !== t.channelId,
                n = !tv && null == t.channelId;
            return t8(!e && !n && t_), (tx = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== eb.default.getId() || null != eD.A.getChannelId() || t8(!1, null), e;
    }, !1);
}
function nM(e) {
    let { mute: t } = e;
    (tu = t), e5.eachConnection(t5);
}
function nk(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = t3(t);
    if (t === eV.x.DEFAULT && (ec.A.requestPermission(ek.iL.AUDIO), tc)) return !1;
    (r = !i && !r) || (i = !1), n || (th = !0), np({ mute: r, deaf: i }, t), e5.eachConnection(t5);
}
function nU(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    np({ mute: n }, t), r || (th = !0), e5.eachConnection(t5);
}
function nG(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== eU.oD.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    nb(!0);
}
function nV(e) {
    let { context: t } = e;
    np({ deaf: !t3(t).deaf }, t), e5.eachConnection(t5);
}
function nF(e) {
    let { context: t, userId: n } = e;
    if (n === eb.default.getId()) return;
    let { localMutes: r } = t3(t);
    r[n] ? delete r[n] : (r[n] = !0),
        np({ localMutes: r }, t),
        e5.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nB(e) {
    let { context: t, userId: n, videoToggleState: r, persist: i, isAutomatic: a } = e;
    p()(!(i && a), "These are not allowed to both be true.");
    let s = r === eP.bb8.DISABLED,
        { disabledLocalVideos: o } = t3(t),
        l = o[n] ?? !1,
        u = tj.has(n),
        c = r === eP.bb8.AUTO_ENABLED || r === eP.bb8.MANUAL_ENABLED;
    eB.info(`disableVideo=${s} currentlyDisabled=${l} currentlyAutoDisabled=${u}, isVideoShown=${c}`),
        p()(!(u && !l), "If you are auto-disabled, then you are also disabled.");
    let d = s !== l,
        _ = t === eV.x.DEFAULT,
        f = a && d && _,
        h = i && d && _;
    eB.info(`changed=${d} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${f} isManualToggleByUser=${h}`);
    let { videoToggleStateMap: m } = t3(t);
    if (
        (m[n] === eP.bb8.AUTO_PROBING &&
            r === eP.bb8.AUTO_ENABLED &&
            (0, eu.A)(n, s ? eV.Al.AUTO_DISABLE : eV.Al.AUTO_ENABLE, c),
        (m[n] = r),
        np({ videoToggleStateMap: m }, t, i),
        r === eP.bb8.AUTO_PROBING
            ? eD.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
            : eD.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
        tH ||
            (eB.info(`isAutoDisableAllowed=${tH} - disabling VideoHealthManager`),
            eD.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
        f)
    ) {
        if ((!s && !u) || (s && !tH)) return;
        (0, eu.A)(n, s ? eV.Al.AUTO_DISABLE : eV.Al.AUTO_ENABLE, c), s ? tj.add(n) : tj.delete(n);
    } else
        h &&
            (u && !s
                ? (eB.info("disallowing auto-disable for this session because of manual override by user"),
                  (tH = !1),
                  eD.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                  (0, eu.A)(n, eV.Al.MANUAL_REENABLE, c))
                : (0, eu.A)(n, s ? eV.Al.MANUAL_DISABLE : eV.Al.MANUAL_ENABLE, c));
    _ && !s && tj.delete(n),
        s ? (o[n] = !0) : delete o[n],
        np({ disabledLocalVideos: o }, t, i),
        e5.eachConnection((e) => e.setLocalVideoDisabled(n, o[n] ?? !1), t);
}
function nj() {
    if (0 === tj.size) return;
    let e = eV.x.DEFAULT,
        { disabledLocalVideos: t } = t3(e);
    tj.forEach((n) => {
        p()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            e5.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tj.clear(),
        np({ disabledLocalVideos: t }, e, !1);
}
function nH() {
    let e = eV.x.DEFAULT,
        { videoToggleStateMap: t } = t3(e);
    for (let [e, n] of Object.entries(t)) n === eP.bb8.AUTO_PROBING && delete t[e];
    np({ videoToggleStateMap: t }, e, !1);
}
function nY(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === eb.default.getId()) return;
    let i = t === eV.x.STREAM ? eV.Cn : eV.Hz,
        { localVolumes: a } = t3(t);
    r === i ? delete a[n] : (a[n] = r), np({ localVolumes: a }, t), e5.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function nW(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: a } = t3(t);
    (a[n] = { left: r, right: i }), np({ localPans: a }, t), e5.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function nK(e) {
    let { context: t, mode: n, options: r } = e;
    np({ mode: n, modeOptions: r }, t), e5.eachConnection(t6), n_.update();
}
function nz(e) {
    let { volume: t } = e;
    np({ inputVolume: t4(t) }), e5.setInputVolume(t);
}
function n$(e) {
    let { volume: t } = e;
    np({ outputVolume: t }), e5.setOutputVolume(t);
}
function nq(e) {
    let { id: t } = e;
    (t = nI(ti, t)),
        (tn = performance.now()),
        np({ inputDeviceId: t }),
        e5.setAudioInputDevice(t),
        e5.eachConnection(ni),
        (o = void 0),
        (l = void 0);
}
function nZ(e) {
    let { id: t } = e;
    np({ outputDeviceId: (t = nI(ta, t)) }), e5.setAudioOutputDevice(t);
}
function nQ(e) {
    let { id: t } = e;
    np({ videoDeviceId: (t = nI(ts, t)) }), t8();
}
function nX(e) {
    let { inputProfile: t } = e;
    np({ activeInputProfile: t });
    let n = t3();
    e5.eachConnection((e) => {
        t6(e), ni(e);
    }),
        e5.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        n_.update(),
        n9();
}
function nJ(e) {
    return te !== e.required && ((te = e.required), e.required || e5.interact(), !0);
}
function n0(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    nT(t), nv(n), nC(r);
}
function n1(e) {
    let { inputVolume: t, outputVolume: n } = e;
    np({ inputVolume: t4(t), outputVolume: n });
}
function n2(e) {
    let t = t3(),
        n = e5.getAudioSubsystem(),
        i = e5.getAudioLayer(),
        a = nI(ti, t.inputDeviceId),
        s = ti[a]?.name,
        o = (0, e_.A)(t.noiseCancellation, r.getSystemMicrophoneMode(), { location: "trackVoiceProcessing" });
    eA.default.track(eP.HAw.VOICE_PROCESSING, {
        echo_cancellation: t.echoCancellation,
        noise_cancellation: t.noiseCancellation,
        noise_suppression: t.noiseSuppression,
        automatic_gain_control: t.automaticGainControl,
        location: e,
        bypass_system_input_processing: t.bypassSystemInputProcessing,
        audio_subsystem: n,
        audio_layer: i,
        input_device: s,
        effective_noise_cancellation: o,
    });
}
function n3(e) {
    let t = np({ echoCancellation: e.enabled });
    e5.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), n9(), n2(e.location);
}
function n6(e) {
    n5(e.enabled);
}
function n4(e) {
    let t = np({ sidechainCompressionStrength: e.strength });
    e5.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function n5(e) {
    let t = np({ sidechainCompression: e });
    e5.setSidechainCompression(t.sidechainCompression);
}
function n7(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tY.add(n) : tY.delete(n), n8(), n9();
}
function n8() {
    let e = !tY.has("voice_filter_preview") && !tY.has("mic_test");
    e5.setMaybePreprocessMute(e);
}
function n9() {
    let e = t3(),
        t = tY.size > 0,
        n = e.inputDeviceId,
        r = eR.A.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        a = eR.A.hasNoiseSuppression(n) || e.noiseSuppression,
        s = nt(eR.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        o = e.noiseCancellation,
        l = null !== tO,
        u = tY.has("voice_filter") && 1 === tY.size;
    e5.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: a,
        automaticGainControlConfig: s,
        noiseCancellation: o,
        voiceFilters: l,
        loopbackUseAudioMode: u,
    });
}
async function re() {
    if (!e5.supports(eV.O5.VAAPI)) return;
    let e = 4098;
    if (window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let t = await window.DiscordNative.processUtils.getSystemInfo();
    (t.electronGPUInfo?.gpuDevice ?? []).some((t) => t.vendorId === e) &&
        ((tQ = !0), (tZ = e5.supports(eV.O5.GAMESCOPE_CAPTURE)));
}
function rt(e) {
    let t = np({ noiseSuppression: e.enabled });
    e5.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), n9(), n2(e.location);
}
function rn(e) {
    let t = np({ automaticGainControl: e.enabled });
    e5.eachConnection((e) => nn(e, t.automaticGainControl)), n9(), n2(e.location);
}
function rr(e) {
    let t = np({ noiseCancellation: e.enabled });
    e5.eachConnection((e) => nr(e, t.noiseCancellation)), n9(), n2(e.location);
}
function ri(e) {
    ed.A.setKrispModelOverride(e.model), (d = e.model), n9();
}
function ra(e) {
    (0, ey.isWeb)() || ((tR = e.enabled), e5.setNoiseCancellationEnableStats?.(e.enabled));
}
function rs(e) {
    np({ silenceWarning: e.enabled }), n_.update();
}
function ro(e) {
    e5.setDebugLogging(e.enabled);
}
function rl(e) {
    let { level: t } = e;
    (c = t), ed.A.setKrispSuppressionLevel(t);
}
function ru(e) {
    np({ videoHook: e.enabled });
}
function rc(e) {
    np({ experimentalSoundshare2: e.enabled });
}
function rd(e) {
    let { enabled: t } = e;
    np({ useSystemScreensharePicker: t });
}
function r_(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = np({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r });
    e5.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function rf(e) {
    let { enabled: t } = e;
    np({ qos: t }), e5.eachConnection((e) => e.setQoS(t));
}
function rp() {
    nh();
}
function rh(e) {
    let { inputDetected: t } = e;
    (tT = t), !ty && tT && ((ty = !0), n_.update());
}
function rm(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === tc) return !1;
    (tc = n), e5.eachConnection(t5);
}
function rg(e) {
    let { state: t, permissionType: n } = e,
        r = t === ek.hL.ACCEPTED;
    switch (n) {
        case ek.iL.AUDIO:
            (tF = !0), e5.eachConnection(t5);
            break;
        case ek.iL.CAMERA:
            !r && t_ && t8(!1);
            break;
        default:
            return !1;
    }
}
function rE() {
    return tb || !1;
}
async function rA() {
    try {
        await ev.Ay.ensureModule("discord_krisp");
        let e = ev.Ay.requireModule("discord_krisp");
        (tb = !0),
            (u = e.getSdkVersion?.()),
            (c = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (tN = e), r.emitChange();
            }),
            r.emitChange();
    } catch (t) {
        eB.warn(`Failed to load Krisp module: ${t.message}`), eS.A.captureException(t);
        let e = eV.CO.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eV.CO.INITIALIZED : n;
        }
        eA.default.track(eP.HAw.VOICE_PROCESSING, { noise_canceller_error: e }), np({ noiseCancellation: !1 });
    } finally {
        tC = !1;
    }
}
function rI() {
    return (0, ey.isWindows)() || (0, ey.isLinux)() || (0, ey.isMac)();
}
function rT() {
    !rI() || __OVERLAY__ || tC || tb
        ? (0, ey.isWeb)() && e5.supports(eV.O5.NOISE_CANCELLATION)
            ? ((tb = !0), r.emitChange())
            : (0, ey.isWeb)() && np({ noiseCancellation: !1 })
        : ((tC = !0), rA());
}
function ry(e) {
    let { enabled: t } = e;
    eA.default.track(eP.HAw.VOICE_FILTER_PLAYBACK_TOGGLED, { active_voice_filter_id: tO ?? null, enabled: t }),
        np({ voiceFilterPlaybackEnabled: t });
}
function rS(e) {
    let { newVoiceFilterId: t } = e;
    np({ mostRecentlyRequestedVoiceFilter: t }), e5.eachConnection((e) => e.setVoiceFilterId(t));
}
function rv() {
    np({ mostRecentlyRequestedVoiceFilter: null });
}
function rC(e) {
    let { voiceFilterId: t } = e;
    (tL = tO), (tw = tD), (tO = t), (tD = null === t ? null : Date.now());
}
function rb(e) {
    let t = e.bypassEnabled;
    np({ bypassSystemInputProcessing: t }), e5.setAudioInputBypassSystemProcessing(t), n2(e.location);
}
function rN(e) {
    rR(e.subsystem);
}
function rR(e) {
    e === eV.rB.AUTOMATIC
        ? (np({ automaticAudioSubsystem: !0 }), rO())
        : (np({ automaticAudioSubsystem: !1 }), e5.setAudioSubsystem(e));
}
function rO() {
    e5.queueAudioSubsystem(eV.rB.EXPERIMENTAL);
}
function rD(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && t8(i, null), null != t || null == n)) {
        tv = !1;
        return;
    }
    if (tv) return;
    tv = !0;
    let a = t3();
    (a.mute || a.deaf) && (np({ deaf: !1, mute: !1 }), e5.eachConnection(t5));
}
function rL(e) {
    let { application: t } = e;
    e8.add(t.id);
}
function rw(e) {
    let { application: t } = e;
    e8.delete(t.id);
}
function rx(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (e9 = !1), e5.eachConnection(t5);
                break;
            case "video":
                t8(!1);
        }
}
function rP(e) {
    (e9 = e.enabled), e.unmute && np({ mute: !1, deaf: !1 }), e5.eachConnection(t5);
}
function rM(e) {
    let { enabled: t } = e;
    ec.A.requestPermission(ek.iL.CAMERA), t8(t);
}
function rk(e) {
    let { sourceId: t, applicationName: n, quality: i } = e;
    if (!(0, O.Ao)() || null == v.A) return !1;
    let a = null,
        o = null,
        l = eI.A.getPidFromDesktopSource(t);
    ({ soundshareId: a, soundshareSession: o } = nN(l));
    let u = { desktopSource: { id: t, sourcePid: l, soundshareId: a, soundshareSession: o }, quality: i };
    null != s &&
        (e5.setClipsSource(null),
        (0, ey.isWindows)() && null != s.desktopSource.soundshareId && C.c1(s.desktopSource.soundshareId)),
        null != a && nR(a, o),
        (s = u);
    let c = tJ("MediaEngineStore clips"),
        d = t3().videoHook;
    e5.setClipsSource({
        desktopDescription: {
            id: s.desktopSource.id,
            soundshareId: s.desktopSource.soundshareId,
            useVideoHook: d,
            useGraphicsCapture: ns(),
            useCaptureDeviceForEncode: !1,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: nl(),
            videoHookStaleFrameTimeoutMs: eq,
            graphicsCaptureStaleFrameTimeoutMs: eZ,
            hdrCaptureMode: c,
        },
        quality: i,
        applicationName: n,
    });
}
function rU(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((s = null), e5.setClipsSource(null));
}
function rG(e) {
    let { settings: t } = e;
    if (t?.desktopSettings != null) {
        let e = null,
            n = null,
            { sourceId: r, sound: i } = t.desktopSettings,
            a = t.context ?? eV.x.DEFAULT,
            s = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
            o = !1 === i ? null : eI.A.getPidFromDesktopSource(r);
        ey.isPlatformEmbedded &&
            !0 === i &&
            (({ soundshareId: e, soundshareSession: n } = nN(o)), null != e && nR(e, n)),
            t7(a),
            t8(a === eV.x.STREAM && t_, {
                desktopSource: { id: r, sourcePid: o, soundshareId: e, soundshareSession: n },
                quality: { resolution: s.resolution, frameRate: s.frameRate },
            });
    } else if (t?.cameraSettings != null) {
        let e = t.context ?? eV.x.DEFAULT,
            { videoDeviceGuid: n, audioDeviceGuid: r } = t.cameraSettings,
            i = e === eV.x.STREAM && t_,
            a = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
        t8(i, {
            cameraSource: { videoDeviceGuid: n, audioDeviceGuid: r },
            quality: { resolution: a.resolution, frameRate: a.frameRate },
        });
    } else t8(t_, null);
}
function rV(e) {
    let { section: t } = e;
    return t === eP.nc_.VOICE && ng(), !1;
}
function rF() {
    return e5.eachConnection(ni), !1;
}
function rB(e) {
    let { enabled: t } = e,
        n = np({ aecDumpEnabled: t });
    e5.setAecDump(n.aecDumpEnabled);
}
function rj(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (e7 = Object.values(eV.x).reduce((e, n) => {
        let r = n,
            i = e6();
        return (e[r] = m().merge(i, t[r])), e;
    }, {})),
        T.w.set(ej, e7),
        nm();
}
function rH(e) {
    let { state: t } = e,
        n = P.A.isEnabled();
    if (t === eP.g6G.BACKGROUND && t_ && !n) (tA = !0), t8(!1);
    else {
        if (t !== eP.g6G.ACTIVE || !tA) return !1;
        (tA = !1), t8(!0);
    }
    return !0;
}
function rY(e) {
    e5.eachConnection((t) => t.setBitRate(e.bitrate));
}
function rW() {
    if ((!t_ && null == a) || null != eD.A.getRTCConnectionId()) return !1;
    t8(!1, null);
}
function rK() {
    return !!tP && ((tP = !1), !0);
}
function rz(e) {
    e5.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function r$(e) {
    let { settings: t } = e;
    e5.applyMediaFilterSettings(t).finally(() => {
        (tM = !1), r.emitChange();
    });
}
function rq() {
    tM = !0;
}
function rZ() {
    tM = !1;
}
function rQ(e) {
    t$ = e.enabled;
}
function rX() {
    if ((0, ey.isDesktop)() && ey.isPlatformEmbedded && !tX) {
        tX = !0;
        let e = async () => {
            let t = await new Promise((e) => {
                ev.Ay.pollQueueMetrics((t) => {
                    e(t);
                });
            });
            t.periodMs = eV.tl;
            let n = r0(t);
            null !== n && eA.default.track(eP.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, eV.tl);
        };
        setTimeout(e, eV.tl);
    }
}
class rJ extends A.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        na(),
            nf(),
            rT(),
            nH(),
            rX(),
            (0, ey.isWindows)() && ey.isPlatformEmbedded && ne(),
            (tW = {
                [eV.O5.VIDEO]: e5.supports(eV.O5.VIDEO),
                [eV.O5.DESKTOP_CAPTURE]: e5.supports(eV.O5.DESKTOP_CAPTURE),
                [eV.O5.HYBRID_VIDEO]: e5.supports(eV.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eb.default, eN.A, eR.A, eO.A, N.A, x.A, eD.A, M.Ay, ef.A, em.A, ew.default, ex.A, eE.A);
    }
    supports(e) {
        return e5.supports(e);
    }
    supportsInApp(e) {
        return tW[e] || e5.supports(e);
    }
    isSupported() {
        return e5.supported();
    }
    isNoiseSuppressionSupported() {
        return e5.supports(eV.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return rE();
    }
    isNoiseCancellationError() {
        return tP;
    }
    isAutomaticGainControlSupported() {
        return e5.supports(eV.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nc() && (e5.supports(eV.O5.LEGACY_AUDIO_SUBSYSTEM) || e5.supports(eV.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return e5.supports(eV.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === e5.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return rE();
    }
    isAecDumpSupported() {
        return e5.supports(eV.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return e5.supports(eV.O5.VIDEO) && e5.supports(eV.O5.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        return eO.A.getChannel(tx)?.type !== eP.rbe.GUILD_STAGE_VOICE && e1 && q.A.simulcastEnabled();
    }
    isVideoDecoderFallbackEnabled() {
        return tV;
    }
    getAecDump() {
        return t3().aecDumpEnabled;
    }
    getMediaEngine() {
        return e5;
    }
    getVideoComponent() {
        return e5.Video;
    }
    getCameraComponent() {
        return e5.Camera;
    }
    getKrispSuppressionLevel() {
        return c ?? 100;
    }
    getKrispEnableStats() {
        return tR;
    }
    isEnabled() {
        return e9;
    }
    isMute() {
        return this.isSelfMute() || tl;
    }
    isDeaf() {
        return this.isSelfDeaf() || td;
    }
    hasContext(e) {
        return null != e7[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT;
        return e === eV.x.DEFAULT && tu;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT;
        return (
            !this.isEnabled() ||
            t3(e).mute ||
            !ec.A.didHavePermission(ek.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eV.x.DEFAULT && tc)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return th;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        th = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && eR.A.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return t$;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT;
        return !this.isSupported() || t3(e).deaf;
    }
    isVideoEnabled() {
        return t_ && tI;
    }
    isVideoAvailable() {
        return Object.values(ts).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.STREAM;
        return tt === e && null != a;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.STREAM;
        return tt === e && null != a && a.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eV.x.DEFAULT;
        return e !== eb.default.getId() && (t3(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return e5.supports(eV.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eV.x.DEFAULT;
        return t3(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eV.x.DEFAULT;
        return t3(t).videoToggleStateMap[e] ?? eP.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eV.x.DEFAULT;
        return t === eV.x.DEFAULT && tj.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT;
        return e === eV.x.DEFAULT && tj.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tM;
    }
    isNativeAudioPermissionReady() {
        return tF;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return tt;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return tn;
    }
    isH264MfDecodeAvailable() {
        return tr;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eV.x.DEFAULT,
            n = t3(t).localPans[e];
        return null != n ? n : e$;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eV.x.DEFAULT,
            n = t === eV.x.STREAM ? eV.Cn : eV.Hz,
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
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT;
        return t3(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT;
        return t3(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return tO;
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
        return t3().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return t3().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            m().each(e7, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === eP.TBI.PUSH_TO_TALK && e8.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nI(ti, t3().inputDeviceId);
    }
    getOutputDeviceId() {
        return nI(ta, t3().outputDeviceId);
    }
    getVideoDeviceId() {
        return nI(ts, t3().videoDeviceId);
    }
    getInputDevices() {
        return ti;
    }
    getOutputDevices() {
        return ta;
    }
    getVideoDevices() {
        return ts;
    }
    getEchoCancellation() {
        let e = t3();
        return eR.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return e5.supports(eV.O5.SIDECHAIN_COMPRESSION) && t3().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return t3().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return t3().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tU && tU;
    }
    getLoopback() {
        return tY.size > 0;
    }
    getLoopbackReasons() {
        return tY;
    }
    getNoiseSuppression() {
        let e = t3();
        return eR.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = t3();
        return eR.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return t3().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return t3().noiseCancellation;
    }
    getHardwareEncoding() {
        return e1;
    }
    getEnableSilenceWarning() {
        return t3().silenceWarning;
    }
    getDebugLogging() {
        return e5.getDebugLogging();
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
        return nu() && t3().automaticAudioSubsystem ? eV.rB.AUTOMATIC : e5.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return e5.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return t3().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eG.my.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT;
        return t3(e);
    }
    getState() {
        return {
            settingsByContext: e7,
            inputDevices: ti,
            outputDevices: ta,
            appSupported: tW,
            krispModuleLoaded: tb,
            krispVersion: u,
            krispSuppressionLevel: c,
            goLiveSource: a,
            goLiveContext: tt,
        };
    }
    getInputDetected() {
        return tT;
    }
    getNoInputDetectedNotice() {
        return tS;
    }
    getInputDeviceOSMuted() {
        return o;
    }
    getInputDeviceOSVolume() {
        return l;
    }
    getPacketDelay() {
        return ey.isPlatformEmbedded || this.getMode() !== eP.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        e5.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return te;
    }
    getVideoHook() {
        return t3().videoHook;
    }
    supportsVideoHook() {
        return e5.supports(eV.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = t3().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return e5.supports(eV.O5.EXPERIMENTAL_SOUNDSHARE) && E().satisfies(v.A?.os.release, eM.$x);
    }
    supportsHookSoundshare() {
        return (0, ey.isWindows)() && e5.supports(eV.O5.SOUNDSHARE) && E().satisfies(v.A?.os.release, eM.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = t3().useSystemScreensharePicker,
            n = (0, ey.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return e5.supports(eV.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return tQ;
    }
    getUseGamescopeCapture() {
        return tZ;
    }
    getEverSpeakingWhileMuted() {
        return tm;
    }
    getSpeakingWhileMuted() {
        return tg;
    }
    getKrispModelOverride() {
        return d;
    }
    getKrispModels() {
        return tN;
    }
    getKrispVadActivationThreshold() {
        return t3().modeOptions.vadKrispActivationThreshold ?? ez;
    }
    hasActiveCallKitCall() {
        return tq;
    }
    setHasActiveCallKitCall(e) {
        tq = e;
    }
    supportsScreenSoundshare() {
        return (0, ey.isMac)()
            ? e5.supports(eV.O5.SOUNDSHARE) && E().satisfies(v.A?.os.release, eM.P$) && nl()
            : (0, ey.isWindows)()
              ? e5.supports(eV.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, ey.isLinux)() && e5.supports(eV.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        return (0, ey.isWindows)()
            ? this.getInputDevices()[this.getInputDeviceId()]?.effects?.find((e) => e === e2)
            : (0, ey.isMac)() || (0, ey.isIOS)()
              ? _
              : void 0;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT,
            t = this.supports(eV.O5.VIDEO)
                ? [{ rid: "100", type: e === eV.x.DEFAULT ? eV.mI.VIDEO : eV.mI.SCREEN, quality: eV.Y4 }]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === eV.x.DEFAULT || this.goLiveSimulcastEnabled()) &&
                t.push({ rid: "50", type: e === eV.x.DEFAULT ? eV.mI.VIDEO : eV.mI.SCREEN, quality: eV.Cl }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: !1 };
        return (
            (0, ey.isWeb)() &&
                (e.fetchDave = et.f1.getCurrentConfig({
                    location: "MediaEngineStore fetchAsyncResources",
                }).loadWasmModule),
            e5.fetchAsyncResources(e)
        );
    }
    startDavePreload() {
        if (!tk && ((tk = !0), (0, ey.isWeb)())) {
            let e = { fetchDave: !0 };
            e5.fetchAsyncResources(e).catch((e) => {
                eB.warn("DAVE preload failed:", e), eS.A.captureException(e);
            });
        }
    }
    getSupportedSecureFramesProtocolVersion() {
        if ((0, ey.isWeb)()) {
            let { useWasmModule: e } = et.f1.getCurrentConfig({
                location: "MediaEngineStore getSupportedSecureFramesProtocolVersion",
            });
            if (!e) return 0;
        }
        let e = e5.getSupportedSecureFramesProtocolVersion();
        114 === e && (e = 1);
        let t = et.ex.getCurrentConfig({ location: "MediaEngineStore" }),
            n = et.a.getConfig({ location: "MediaEngineStore" });
        return (t.canSupportDaveProtocol || (n.allowOptIn && ef.A.getPersistentCodesEnabled())) &&
            e >= t.protocolVersionFloor
            ? e
            : 0;
    }
    hasClipsSource() {
        return null != s;
    }
    getGpuBrand() {
        return tK;
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
let r1 = (r = new rJ(S.h, {
    VOICE_CHANNEL_SELECT: rD,
    VOICE_STATE_UPDATES: nP,
    CONNECTION_OPEN: nO,
    CONNECTION_CLOSED: nL,
    POST_CONNECTION_OPEN: nw,
    RTC_CONNECTION_STATE: nx,
    AUDIO_SET_TEMPORARY_SELF_MUTE: nM,
    AUDIO_TOGGLE_SELF_MUTE: nk,
    AUDIO_SET_SELF_MUTE: nU,
    AUDIO_TOGGLE_SELF_DEAF: nV,
    AUDIO_TOGGLE_LOCAL_MUTE: nF,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: nB,
    AUDIO_SET_LOCAL_VOLUME: nY,
    AUDIO_SET_LOCAL_PAN: nW,
    AUDIO_SET_MODE: nK,
    AUDIO_SET_INPUT_VOLUME: nz,
    AUDIO_SET_OUTPUT_VOLUME: n$,
    AUDIO_SET_INPUT_DEVICE: nq,
    AUDIO_SET_OUTPUT_DEVICE: nZ,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: nX,
    AUDIO_SET_ECHO_CANCELLATION: n3,
    AUDIO_SET_SIDECHAIN_COMPRESSION: n6,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: n4,
    AUDIO_SET_LOOPBACK: n7,
    AUDIO_SET_NOISE_SUPPRESSION: rt,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: rn,
    AUDIO_SET_NOISE_CANCELLATION: rr,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: ri,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: rs,
    AUDIO_SET_DEBUG_LOGGING: ro,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: rl,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: ra,
    MEDIA_ENGINE_SET_VIDEO_HOOK: ru,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: rc,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: rd,
    AUDIO_SET_ATTENUATION: r_,
    AUDIO_SET_QOS: rf,
    MEDIA_ENGINE_DEVICES: n0,
    AUDIO_VOLUME_CHANGE: n1,
    AUDIO_RESET: rp,
    AUDIO_INPUT_DETECTED: rh,
    AUDIO_SET_SUBSYSTEM: rN,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rb,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rP,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rM,
    MEDIA_ENGINE_PERMISSION: rx,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rG,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nQ,
    MEDIA_ENGINE_INTERACTION_REQUIRED: nJ,
    USER_SETTINGS_MODAL_INIT: rV,
    USER_SETTINGS_MODAL_SET_SECTION: rV,
    CERTIFIED_DEVICES_SET: rF,
    RPC_APP_CONNECTED: rL,
    RPC_APP_DISCONNECTED: rw,
    OVERLAY_INITIALIZE: nD,
    APP_STATE_UPDATE: rH,
    SET_CHANNEL_BITRATE: rY,
    SET_VAD_PERMISSION: rm,
    SET_NATIVE_PERMISSION: rg,
    SET_CHANNEL_VIDEO_QUALITY_MODE: rz,
    MEDIA_ENGINE_SET_AEC_DUMP: rB,
    MEDIA_ENGINE_RESET_SETTINGS: rj,
    CHANNEL_DELETE: rW,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rK,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: r$,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rq,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rZ,
    USER_SETTINGS_PROTO_UPDATE: nG,
    CLIPS_INIT: rk,
    CLIPS_SETTINGS_UPDATE: rU,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rQ,
    VOICE_FILTER_REQUEST_SWITCH: rS,
    VOICE_FILTER_LOOPBACK_TOGGLE: ry,
    VOICE_FILTER_APPLIED: rC,
    VOICE_FILTER_DOWNLOAD_FAILED: rv,
    VOICE_FILTER_APPLY_FAILED: rv,
}));
