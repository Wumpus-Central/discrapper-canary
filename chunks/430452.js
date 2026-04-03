"use strict";
let r, i, s, a, o, l, u, c, d, _, f;
n.d(t, { Ay: () => rQ }), n(323874), n(14289), n(35956), n(321073), n(790599);
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
    ef = n(954571),
    ep = n(353835),
    eh = n(927813),
    em = n(723702),
    eE = n(728458),
    eg = n(837921),
    eA = n(350535),
    eI = n(961350),
    eT = n(131319),
    eS = n(347481),
    ey = n(734057),
    ev = n(383501),
    eN = n(851581),
    eC = n(287809),
    eR = n(117549),
    eO = n(652215),
    eb = n(502075),
    eD = n(765682),
    eL = n(355097),
    ew = n(509381),
    eM = n(731854),
    ex = n(985018);
let eP = new x.A("MediaEngineStore"),
    ek = "MediaEngineStore",
    eU = 4,
    eG = 1,
    eF = 1,
    eV = 1,
    eB = 0.5,
    eH = { left: 1, right: 1 },
    ej = 500,
    eY = 5 * eh.A.Millis.SECOND,
    eW = -60,
    eK = 100,
    e$ = 2 * eh.A.Millis.SECOND,
    ez = 30 * eh.A.Millis.SECOND,
    eq = +eh.A.Millis.MINUTE,
    eZ = !0,
    eX = "deep_noise_suppression",
    eQ = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2",
    eJ = "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f",
    e0 = 0,
    e1 = null;
function e2() {
    if (!(0, em.isIOS)() || null == e1) return !1;
    let e = e1();
    if (null == e || !e.startsWith("ARM64_")) return !1;
    let t = e.substring(6);
    return ("T" === t[0] || "S" === t[0]) && parseInt(t.substring(1), 10) >= 8122;
}
function e3() {
    return {
        mode: eO.TBI.VOICE_ACTIVITY,
        modeOptions: {
            threshold: eW,
            autoThreshold: em.isPlatformEmbedded || __OVERLAY__,
            vadUseKrisp: !0,
            vadKrispActivationThreshold: eB,
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
        inputVolume: eM.Hz,
        outputVolume: eM.Hz,
        inputDeviceId: eM.dx,
        outputDeviceId: eM.dx,
        videoDeviceId: eM.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: e4.supports(eM.O5.VIDEO_HOOK),
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
let e6 = {
        [ew.m.CUSTOM]: {},
        [ew.m.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [ew.m.STUDIO]: {
            mode: eO.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    e4 = (0, y.hB)((0, y.WI)());
eP.enableNativeLogger(!0);
let e5 = {},
    e7 = new Set([eM.x.DEFAULT]),
    e8 = e4.supports(eM.O5.AUTO_ENABLE),
    e9 = !1,
    te = eM.x.STREAM,
    tt = performance.now(),
    tn = null,
    tr = { [eM.dx]: n_("No Input Devices") },
    ti = { [eM.dx]: n_("No Output Devices") },
    ts = { [eM.dx]: n_("No Video Devices") },
    ta = new N.Ep(),
    to = !1,
    tl = !1,
    tu = !1,
    tc = !1,
    td = !1,
    t_ = eM.qe,
    tf = eM.qe,
    tp = !1,
    th = !1,
    tm = new N.Ep(),
    tE = !1,
    tg = !1,
    tA = !1,
    tI = !1,
    tT = new N.Ep(),
    tS = !1,
    ty = !1,
    tv = !1,
    tN = [],
    tC = !1,
    tR = null,
    tO = !1,
    tb = !1,
    tD = !1,
    tL = {},
    tw = null,
    tM = null,
    tx = !1;
ea.A.hasPermission(eD.iL.AUDIO, { showAuthorizationError: !1 }),
    ea.A.hasPermission(eD.iL.CAMERA, { showAuthorizationError: !1 });
let tP = !1,
    tk = new Set(),
    tU = tP,
    tG = new Set(),
    tF = {},
    tV = null,
    tB = null,
    tH = !0,
    tj = !1,
    tY = new N.Ep(),
    tW = !1,
    tK = !1,
    t$ = !1,
    tz = !1;
function tq(e) {
    return (0, K.p)({ location: e }).hdrCaptureMode;
}
async function tZ() {
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
function tX() {
    return null != tM ? tM : "u" > typeof window ? (tM = tZ().then((e) => ((tw = e), e))) : Promise.resolve(!1);
}
function tQ() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eM.x.DEFAULT,
        t = e5[e];
    return null == t && ((t = e3()), (e5[e] = t)), t;
}
function tJ() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eM.x.DEFAULT,
        t = tQ(e),
        n = e6[t.activeInputProfile ?? ew.m.CUSTOM],
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
function t0(e) {
    let t = tJ(e.context),
        n = t.mode;
    e.context === eM.x.DEFAULT && (0, X.N)(!1, !1);
    let { showPTTSpeakingIndicator: r } = e_.A.getConfig({ location: "setInputMode" }),
        i = r && n === eO.TBI.PUSH_TO_TALK;
    e.setInputMode(n, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: !!i || t.modeOptions.autoThreshold,
        vadUseKrisp: (!!i || t.modeOptions.vadUseKrisp) && rh(),
        vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? eB,
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        vadDuringPreProcess: t.modeOptions.vadDuringPreProcess ?? !1,
        pttReleaseDelay: Math.round(t.modeOptions.delay),
    });
}
function t1(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eM.Hz;
    return E().clamp(e, 0, t);
}
function t2(e) {
    let t = tJ(e.context),
        n = !e8 || t.mute || t.deaf;
    e.context === eM.x.DEFAULT
        ? (n = n || to || tl || tu || !ea.A.didHavePermission(eD.iL.AUDIO))
        : e.context === eM.x.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eM.x.DEFAULT && b.A.updateNativeMute();
}
function t3(e) {
    e !== te && (null != s && e4.setGoLiveSource(null, te), (te = e));
}
function t6() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : td,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
        n = s;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, em.isWindows)()
                ? O.c1(n.desktopSource.soundshareId)
                : null != n.desktopSource.sourcePid && tJ().videoHook && O.c1(n.desktopSource.sourcePid),
            e4.setGoLiveSource(null, te)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            e4.setGoLiveSource(null, te),
        td || e)
    ) {
        let t = tJ().videoDeviceId;
        td && t === eM.dx && tf === eM.dx && t_ !== eM.qe ? (t = t_) : (tf = t),
            (t_ = (td = e) ? np(ts, t) : eM.qe),
            e4.setVideoInputDevice(t_);
    }
    if (((s = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = tq("MediaEngineStore go live"),
                i = tJ().videoHook,
                s = nn(),
                a = s ? (nr() ? eb.zl : eb.eg) : 0,
                o = !1;
            (0, em.isWindows)() &&
                a >= eb.zl &&
                (o =
                    !0 === tB
                        ? en.q.getConfig({ location: "updateVideo" }).enabled
                        : et.d.getConfig({ location: "updateVideo" }).enabled),
                e4.setGoLiveSource(
                    {
                        desktopDescription: {
                            id: t.desktopSource.id,
                            soundshareId: t.desktopSource.soundshareId,
                            useVideoHook: i,
                            useGraphicsCapture: s,
                            useGraphicsCaptureApiLevel: a,
                            useCaptureDeviceForEncode: (0, em.isWindows)(),
                            useLoopback: r.getExperimentalSoundshare(),
                            useQuartzCapturer: !0,
                            allowScreenCaptureKit: ni(),
                            videoHookStaleFrameTimeoutMs: ej,
                            graphicsCaptureStaleFrameTimeoutMs: eY,
                            hdrCaptureMode: n,
                            enableGlobalFramePoolLock: (0, W.H)({ location: "updateVideo" }).enabled,
                            useGraphicsCaptureDirtyRegions: o,
                        },
                        quality: e,
                    },
                    te,
                );
        }
        null != t.cameraSource &&
            e4.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: t.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: t.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                te,
            );
    }
}
function t4(e) {
    switch (e) {
        case eM.CO.CPU_OVERUSE:
            return k.B6.NoiseCancellerCpuOveruse;
        case eM.CO.FAILED:
            return k.B6.NoiseCancellerFailed;
        case eM.CO.VAD_CPU_OVERUSE:
            return k.B6.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function t5() {
    null === tn &&
        e4
            .getCodecSurvey()
            .then((e) => {
                try {
                    let t = JSON.parse(e);
                    if (null == t || null == t.available_video_decoders) throw Error("decoder survey is not available");
                    tn = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                } catch (e) {
                    eP.error("Failed to parse codec survey", e), (tn = !1);
                }
            })
            .catch((e) => {
                eP.error("Failed to get codec survey", e), (tn = !1);
            })
            .finally(() => {
                C.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
            });
}
function t7(e) {
    let t = (0, B.F)({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function t8(e, t) {
    e.setAutomaticGainControl(t7(t));
}
function t9(e, t) {
    let n = (0, el.A)(t, r.getSystemMicrophoneMode());
    n !== t && eP.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: i } = (0, B.F)({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(i);
    let { noiseCancellationAfterProcessing: s, vadAfterWebrtc: a } = (0, q.$)({ location: "setNoiseCancellation" });
    e.setNoiseCancellationAfterProcessing(s), e.setVADAfterWebrtc(a);
}
function ne(e) {
    let t = tJ(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eS.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eS.A.hasNoiseSuppression(n) || t.noiseSuppression),
        t8(e, eS.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        t9(e, t.noiseCancellation),
        (0, em.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function nt() {
    ta.start(ez, () => {
        eP.error("Device enumeration timed out"), ef.default.track(eO.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
    }),
        e4.on(y.bg.Connection, (e) => {
            t0(e), t2(e), ne(e);
            let t = tJ();
            e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
                e.setQoS(t.qos),
                (0, em.isWindows)()
                    ? (e.setExperimentFlag(eM.fd.H265_HARDWARE_ONLY, !0),
                      tX().then((t) => {
                          e.setExperimentFlag(eM.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                      }))
                    : (0, em.isMac)() && e.setExperimentFlag(eM.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                (0, em.isLinux)() && t.openH264Enabled && e.setExperimentFlag(eM.fd.USE_LIBOPENH264_DECODER, !0),
                (0, Z.J)({ location: "setupMediaEngine" }).enabled &&
                    e.setExperimentFlag(eM.fd.LOW_LATENCY_RATE_CONTROL, !0);
            let n = !1,
                i = !0;
            e.setExperimentFlag(eM.fd.RESET_DECODER_ON_ERRORS, !0),
                n && e.setExperimentFlag(eM.fd.SOFTWARE_FALLBACK_ON_ERRORS, !0),
                i && e.setExperimentFlag(eM.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
            let { swallowVolumeOnlySpeakingEvents: a } = D.A.getConfig({ location: "MediaEngineStore" });
            if ((a && e.setExperimentFlag(eM.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === eM.x.STREAM)) {
                let t = ng(ti);
                e.setSoundshareDiscardRearChannels(t);
            }
            if ((0, em.isWindows)())
                e.setExperimentFlag(eM.fd.SIGNAL_AV1, !0), e.setExperimentFlag(eM.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            else if ((0, em.isMac)())
                e.setExperimentFlag(eM.fd.SIGNAL_AV1_DECODE, !0),
                    e.setExperimentFlag(eM.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            else if ((0, em.isLinux)()) e.setExperimentFlag(eM.fd.SIGNAL_AV1_DECODE, !0);
            else if ((0, em.isIOS)() && e2()) {
                let { enabled: t } = (0, H.$)("MediaEngineStore");
                t &&
                    (e.setExperimentFlag(eM.fd.SIGNAL_AV1_DECODE, !0),
                    e.setExperimentFlag(eM.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
            }
            if ((0, em.isWeb)()) {
                let { enabled: t } = Y.A.getConfig({ location: "MediaEngineStore" });
                e.setExperimentFlag(eM.fd.BROWSER_HEVC, t);
            }
            for (let n of ((0, em.isWindows)() &&
                tV?.startsWith("AMD") &&
                (0, er.F)("MediaEngineStore").enabled &&
                e.setExperimentFlag(eM.fd.WMF_GPU_ENCODE, !0),
            (0, em.isWindows)() &&
                tV?.startsWith("Intel") &&
                (0, ei.J)("MediaEngineStore").enabled &&
                e.setExperimentFlag(eM.fd.WMF_GPU_ENCODE, !0),
            (0, em.isWindows)() &&
                tV?.startsWith("Qualcomm") &&
                (0, er.F)("MediaEngineStore").enabled &&
                e.setExperimentFlag(eM.fd.WMF_GPU_ENCODE, !0),
            e4.setHasFullbandPerformance((0, P.A)()),
            e.setRemoteAudioHistory(1e3),
            (0, w.A)(r) && e.setClipsKeyFrameInterval(eM.X1),
            (t = tJ(e.context)),
            e.setPostponeDecodeLevel(eK),
            Object.keys(t.localMutes)))
                n !== eI.default.getId() && e.setLocalMute(n, t.localMutes[n]);
            for (let n of Object.keys(t.localVolumes))
                n !== eI.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
            for (let n of Object.keys(t.localPans)) {
                let r = t.localPans[n];
                e.setLocalPan(n, r.left, r.right);
            }
            for (let n of Object.keys(t.disabledLocalVideos)) e.setLocalVideoDisabled(n, t.disabledLocalVideos[n]);
            e.on(y.yq.Speaking, (t, n, r, i) => {
                C.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: i });
            }),
                e.context === eM.x.DEFAULT &&
                    ((th = !1),
                    e.on(y.yq.SpeakingWhileMuted, () => {
                        let e = !th;
                        (th = !0),
                            e && r.emitChange(),
                            tm.start(e$, () => {
                                (th = !1), r.emitChange();
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
                        ef.default.track(eO.HAw.VIDEOHOOK_INITIALIZED, {
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
                    eP.warn(`noisecancellererror event: ${e}`),
                        (0, k.QW)({ type: k.iy.NOISE_CANCELLER_ERROR, underlyingError: t4(e) }),
                        (tO = !0),
                        ef.default.track(eO.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        C.h.dispatch({ type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: !0 }),
                        C.h.dispatch({ type: "AUDIO_SET_NOISE_CANCELLATION", enabled: !1 }),
                        C.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e });
                }),
                e.on(y.yq.VoiceActivityDetectorError, (e) => {
                    eP.warn(`voiceactivitydetectorerror event: ${e}`),
                        (0, k.QW)({ type: k.iy.NOISE_CANCELLER_ERROR, underlyingError: t4(e) }),
                        ef.default.track(eO.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        C.h.dispatch({
                            type: "AUDIO_SET_MODE",
                            context: eM.x.DEFAULT,
                            mode: eO.TBI.VOICE_ACTIVITY,
                            options: { ...tJ(eM.x.DEFAULT).modeOptions, vadUseKrisp: !1 },
                        }),
                        C.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e });
                }),
                e.on(y.yq.SdpError, (e, t, n, r) => {
                    ef.default.track(eO.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: r });
                }),
                e.on(y.yq.VideoState, (t) => {
                    C.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                }),
                e.setBitRate(eT.A.bitrate),
                e.applyVideoQualityMode(eR.A.mode),
                (0, em.isWindows)() &&
                    e4.supports(eM.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                    e4.setAsyncVideoInputDeviceInit(!0);
        }),
        e4.on(y.bg.DeviceChange, (e, t, n) => {
            ta.stop(),
                C.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
        }),
        e4.on(y.bg.VolumeChange, (e, t) => {
            C.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
        }),
        e4.on(y.bg.DesktopSourceEnd, (e, t) => {
            C.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
        }),
        e4.on(y.bg.AudioPermission, (e) => {
            (tx = !0), C.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
        }),
        e4.on(y.bg.VideoPermission, (e) => {
            C.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
        }),
        e4.on(y.bg.WatchdogTimeout, async () => {
            let e;
            if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                try {
                    await ep.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                } catch (t) {
                    "number" == typeof t.status && (e = t.status);
                }
            eP.warn(`Watchdog timeout, report submission status: ${e ?? 200}`);
            let t = ee.A.getConfig({ location: "watchdog_timeout" }).enabled && null != R.A.processUtils.setCrashReason;
            try {
                await ef.default.track(
                    eO.HAw.VOICE_WATCHDOG_TIMEOUT,
                    { minidump_submission_error: e, will_restart: t },
                    { flush: !0 },
                );
            } catch (e) {
                eP.error("Failed to flush voice watchdog timeout analytics event", e);
            }
            t &&
                (eP.info("Relaunching app due to voice watchdog timeout"),
                await R.A.processUtils.setCrashReason("voice-watchdog-timeout"),
                v.w.set("discord_watchdog_restart_timestamp", Date.now().toString()),
                R.A.app.relaunch());
        }),
        e4.on(y.bg.VideoInputInitialized, (e) => {
            ef.default.track(eO.HAw.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired
                    ? null
                    : Math.round(e.timeToFirstFrame * eh.A.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: ev.A.getMediaSessionId(),
                rtc_connection_id: ev.A.getRTCConnectionId(),
            });
        }),
        e4.on(y.bg.AudioInputInitialized, (e) => {
            ef.default.track(eO.HAw.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * eh.A.Millis.SECOND),
                rtc_connection_id: ev.A.getRTCConnectionId(),
            });
        }),
        e4.on(y.bg.ClipsRecordingRestartNeeded, () => {
            C.h.dispatch({ type: "CLIPS_RESTART" });
        }),
        e4.on(y.bg.ClipsInitFailure, (e, t) => {
            C.h.wait(() => {
                C.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t });
            });
        }),
        e4.on(y.bg.ClipsRecordingEnded, (e, t) => {
            a?.desktopSource?.id === e && (null != t && s?.desktopSource?.soundshareId !== t && O.c1(t), (a = null));
        }),
        e4.on(y.bg.NativeScreenSharePickerUpdate, (e, t) => {
            C.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
        }),
        e4.on(y.bg.NativeScreenSharePickerCancel, (e) => {
            C.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
        }),
        e4.on(y.bg.NativeScreenSharePickerError, (e) => {
            C.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
        }),
        e4.on(y.bg.AudioDeviceModuleError, (e, t, n) => {
            ef.default.track(eO.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
        }),
        e4.on(y.bg.VideoCodecError, (e) => {
            let t = "encode" === e.mode ? k.iy.VIDEO_ENCODE_ERROR : k.iy.VIDEO_DECODE_ERROR,
                n = { videoCodec: e.codecStandard, errorMessage: e.message };
            (0, k.QW)(
                t === k.iy.VIDEO_ENCODE_ERROR
                    ? { type: t, ...n, videoEncoder: e.implName }
                    : { type: t, ...n, videoDecoder: e.implName },
            );
        }),
        e4.on(y.bg.ConnectionStats, (e) => {
            C.h.dispatch({
                type: "MEDIA_ENGINE_CONNECTION_STATS",
                connectionStats: e.map((e) => {
                    let { stats: t, connection: n } = e;
                    return {
                        stats: t,
                        mediaEngineConnectionId: n.mediaEngineConnectionId,
                        version: e0++,
                        context: n.context,
                    };
                }),
            });
        }),
        e4.on(y.bg.VoiceQueueMetrics, (e) => {
            let t = rX(e);
            null !== t && ef.default.track(eO.HAw.VOICE_QUEUE_METRICS, t);
        }),
        e4.setOnVideoContainerResized((e, t, n) => {
            C.h.wait(() =>
                C.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
            );
        }),
        n5(),
        o.reset(),
        (0, eN.w)().then((e) => {
            null != e && ((tV = e.gpu_brand), (tB = e.has_intel_hybrid_igpu));
        }),
        e4.on(y.bg.SystemMicrophoneModeChange, (e) => {
            (f = e), e4.eachConnection(ne), r.emitChange();
        });
}
function nn() {
    return (0, em.isWindows)() && T().satisfies(R.A?.os.release, eb.yg);
}
function nr() {
    return (0, em.isWindows)() && T().satisfies(R.A?.os.release, eb.fG);
}
function ni() {
    return (0, em.isMac)() && e4.supports(eM.O5.SCREEN_CAPTURE_KIT) && T().satisfies(R.A?.os.release, eb.e);
}
function ns() {
    return (
        (0, em.isWindows)() &&
        e4.supports(eM.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        e4.supports(eM.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function na() {
    return e4.supports(eM.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function no() {
    let e = v.w.get("audio");
    null != e && (v.w.set(ek, { [eM.x.DEFAULT]: e }), v.w.remove("audio")),
        (e5 = v.w.get(ek) ?? {}),
        E().each(e5, (e) => {
            E().defaultsDeep(e, e3()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, eA.OH)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== eU &&
                    ((e.vadUseKrispSettingVersion = eU), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                e.vadThrehsoldMigrated ||
                    ((e.vadThrehsoldMigrated = !0), e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = eW)),
                e4.supports(eM.O5.SIDECHAIN_COMPRESSION) &&
                    e.sidechainCompressionSettingVersion < eV &&
                    ((e.sidechainCompressionSettingVersion = eV), (e.sidechainCompression = !0)),
                (0, em.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== eF &&
                      ((e.ncUseKrispjsSettingVersion = eF), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== eG &&
                      ((e.ncUseKrispSettingVersion = eG), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
        }),
        nc();
}
function nl(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eM.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = tQ(t);
    return Object.assign(r, e), !__OVERLAY__ && n && v.w.set(ek, e5), r;
}
function nu() {
    v.w.remove(ek), location.reload();
}
function nc() {
    let e = tJ();
    nm(e.inputDeviceId),
        e4.setAudioOutputDevice(e.outputDeviceId),
        t6(),
        e4.setInputVolume(e.inputVolume),
        e4.setOutputVolume(e.outputVolume),
        e4.setAecDump(e.aecDumpEnabled),
        e4.setSidechainCompression(e.sidechainCompression),
        e4.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        e4.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        (0, em.isLinux)() && eg.Ay?.setOpenH264Enabled?.(e.openH264Enabled);
}
function nd() {
    e8 || e4.enable().then(() => C.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function n_(e) {
    return { id: eM.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
}
function nf(e, t) {
    if (0 === e.length) {
        let e = n_(t);
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
function np(e, t) {
    let n = e[t] ?? e[eM.dx] ?? E()(e).values().first();
    return null != n ? n.id : t;
}
function nh(e) {
    if (!(0, em.isWindows)() || !j.A.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects)
        return;
    let t = tr[e];
    t?.guid != null && (0, eu.A)(t.guid, e, e4);
}
function nm(e) {
    e4.setAudioInputDevice(e), nh(e);
}
function nE(e) {
    let t = tr;
    if (((tr = nf(e, ex.intl.string(ex.t["/QIjDA"]))), !E().isEqual(tr, t))) {
        let e = tJ();
        nm(np(tr, e.inputDeviceId)), e4.eachConnection(ne);
    }
}
function ng(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nA(e) {
    e4.eachConnection((t) => {
        t.context === eM.x.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function nI(e) {
    let t = ti;
    if (((ti = nf(e, ex.intl.string(ex.t.xlUg0v))), !E().isEqual(ti, t))) {
        let e = tJ(),
            n = np(ti, e.outputDeviceId);
        e4.setAudioOutputDevice(n);
        let r = ng(t),
            i = ng(ti);
        r !== i && nA(i);
    }
}
function nT(e) {
    tg = e.length > 0;
    let t = ts;
    if (((ts = nf(e, ex.intl.string(ex.t.WKWARY))), td && !E().isEqual(ts, t))) {
        let e = void 0 !== ts[t_],
            n = t_ === eM.dx && t[eM.dx]?.disabled,
            r = "Firefox" === A().name && "" === t_ && t[t_]?.name === "Default" && !t[t_]?.disabled;
        t6(e || n || r);
    }
}
function nS() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = ed.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let r = n === eL.W.USER ? eM.x.DEFAULT : eM.x.STREAM,
            i = r === eM.x.STREAM ? eM.Cn : eM.Hz,
            s = t[n] ?? {},
            { localMutes: a, localVolumes: o } = tJ(r);
        for (let [e, t] of Object.entries(s))
            null == (0, ec.tM)(r, e) &&
                (t.muted ? (a[e] = !0) : delete a[e],
                t.volume !== i ? (o[e] = t.volume) : delete o[e],
                e4.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, r));
        if (e)
            for (let e of new Set([...Object.keys(a), ...Object.keys(o)]))
                null == s[e] &&
                    (delete a[e],
                    delete o[e],
                    e4.eachConnection((t) => {
                        t.setLocalVolume(e, i), t.setLocalMute(e, !1);
                    }, r));
        nl({ localMutes: a, localVolumes: o }, r);
    }
}
function ny(e) {
    if (null == r)
        return (
            eP.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
            { soundshareId: null, soundshareSession: "" }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : ep.A.getAudioPid(e),
            n = "";
        return null != t && (n = ep.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n };
    }
}
function nv(e, t) {
    if (t) {
        let { soundshareId: t, soundshareSession: n } = ny(e);
        if (null != t) return nN(t, n), { soundshareId: t, soundshareSession: n };
    }
    return null != e && tJ().videoHook && O.GH(e), { soundshareId: null, soundshareSession: null };
}
function nN(e, t) {
    (0, em.isWindows)() &&
        e > 1 &&
        O.GH(e, { soundshare_session: t }).then((t) => {
            null == t ||
                F.Ay.shouldContinueWithoutElevatedProcessForPID(e) ||
                C.h.wait(() => {
                    C.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: t });
                });
        });
}
function nC(e) {
    (i = e.sessionId), (to = !1), (tc = !1);
    let t = tJ();
    ns() && (na() ? rv(eM.rB.AUTOMATIC) : t.automaticAudioSubsystem && rN()),
        e4.supports(eM.O5.OFFLOAD_ADM_CONTROLS) && e4.setOffloadAdmControls(!0),
        (0, em.isIOS)() &&
            (0, $.Y)("handleConnectionOpen").enabled &&
            e4.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
        nh(t.inputDeviceId),
        nS();
}
function nR(e) {
    let { mediaEngineState: t } = e;
    (e5 = t.settingsByContext),
        (tr = t.inputDevices),
        (ti = t.outputDevices),
        (tF = t.appSupported),
        (tv = t.krispModuleLoaded),
        (c = t.krispVersion),
        (te = t.goLiveContext);
}
function nO() {
    i = null;
}
function nb() {
    return (0, em.isWeb)() && r.startDavePreload(), !1;
}
function nD(e) {
    switch (e.state) {
        case eO.S7L.CONNECTING:
            nd();
            break;
        case eO.S7L.RTC_CONNECTING:
            (tI = !1), (l = void 0), (u = void 0), (tA = !1), (tj = !1), tY.stop(), tT.stop(), o.reset();
            break;
        case eO.S7L.RTC_CONNECTED:
            t6();
            break;
        case eO.S7L.DISCONNECTED:
            nF(), nV();
    }
}
function nL(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (to = t.mute || t.suppress), (tc = t.deaf), e4.eachConnection(t2);
            let e = null != t.guildId && null != t.channelId && null != tR && tR !== t.channelId,
                n = !tS && null == t.channelId;
            return t6(!e && !n && td), (tR = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== eI.default.getId() || null != ev.A.getChannelId() || t6(!1, null), e;
    }, !1);
}
function nw(e) {
    let { mute: t } = e;
    (tl = t), e4.eachConnection(t2);
}
function nM(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = tJ(t);
    if (t === eM.x.DEFAULT && (ea.A.requestPermission(eD.iL.AUDIO), tu)) return !1;
    (r = !i && !r) || (i = !1), n || (tp = !0), nl({ mute: r, deaf: i }, t), e4.eachConnection(t2);
}
function nx(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    nl({ mute: n }, t), r || (tp = !0), e4.eachConnection(t2);
}
function nP(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== eL.oD.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    nS(!0);
}
function nk(e) {
    let { context: t } = e;
    nl({ deaf: !tJ(t).deaf }, t), e4.eachConnection(t2);
}
function nU(e) {
    let { context: t, userId: n } = e;
    if (n === eI.default.getId()) return;
    let { localMutes: r } = tJ(t);
    r[n] ? delete r[n] : (r[n] = !0),
        nl({ localMutes: r }, t),
        e4.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nG(e) {
    let { context: t, userId: n, videoToggleState: r, persist: i, isAutomatic: s } = e;
    h()(!(i && s), "These are not allowed to both be true.");
    let a = r === eO.bb8.DISABLED,
        { disabledLocalVideos: o } = tJ(t),
        l = o[n] ?? !1,
        u = tk.has(n),
        c = r === eO.bb8.AUTO_ENABLED || r === eO.bb8.MANUAL_ENABLED;
    eP.info(`disableVideo=${a} currentlyDisabled=${l} currentlyAutoDisabled=${u}, isVideoShown=${c}`),
        h()(!(u && !l), "If you are auto-disabled, then you are also disabled.");
    let d = a !== l,
        _ = t === eM.x.DEFAULT,
        f = s && d && _,
        p = i && d && _;
    eP.info(`changed=${d} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${f} isManualToggleByUser=${p}`);
    let { videoToggleStateMap: m } = tJ(t);
    if (
        (m[n] === eO.bb8.AUTO_PROBING &&
            r === eO.bb8.AUTO_ENABLED &&
            (0, es.A)(n, a ? eM.Al.AUTO_DISABLE : eM.Al.AUTO_ENABLE, c),
        (m[n] = r),
        nl({ videoToggleStateMap: m }, t, i),
        r === eO.bb8.AUTO_PROBING
            ? ev.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
            : ev.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
        tU ||
            (eP.info(`isAutoDisableAllowed=${tU} - disabling VideoHealthManager`),
            ev.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
        f)
    ) {
        if ((!a && !u) || (a && !tU)) return;
        (0, es.A)(n, a ? eM.Al.AUTO_DISABLE : eM.Al.AUTO_ENABLE, c), a ? tk.add(n) : tk.delete(n);
    } else
        p &&
            (u && !a
                ? (eP.info("disallowing auto-disable for this session because of manual override by user"),
                  (tU = !1),
                  ev.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                  (0, es.A)(n, eM.Al.MANUAL_REENABLE, c))
                : (0, es.A)(n, a ? eM.Al.MANUAL_DISABLE : eM.Al.MANUAL_ENABLE, c));
    _ && !a && tk.delete(n),
        a ? (o[n] = !0) : delete o[n],
        nl({ disabledLocalVideos: o }, t, i),
        e4.eachConnection((e) => e.setLocalVideoDisabled(n, o[n] ?? !1), t);
}
function nF() {
    if (0 === tk.size) return;
    let e = eM.x.DEFAULT,
        { disabledLocalVideos: t } = tJ(e);
    tk.forEach((n) => {
        h()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            e4.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tk.clear(),
        nl({ disabledLocalVideos: t }, e, !1);
}
function nV() {
    let e = eM.x.DEFAULT,
        { videoToggleStateMap: t } = tJ(e);
    for (let [e, n] of Object.entries(t)) n === eO.bb8.AUTO_PROBING && delete t[e];
    nl({ videoToggleStateMap: t }, e, !1);
}
function nB(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === eI.default.getId()) return;
    let i = t === eM.x.STREAM ? eM.Cn : eM.Hz,
        { localVolumes: s } = tJ(t);
    r === i ? delete s[n] : (s[n] = r), nl({ localVolumes: s }, t), e4.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function nH(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: s } = tJ(t);
    (s[n] = { left: r, right: i }), nl({ localPans: s }, t), e4.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function nj(e) {
    let { context: t, mode: n, options: r } = e;
    nl({ mode: n, modeOptions: { ...r, updatedAt: Date.now() } }, t), e4.eachConnection(t0);
}
function nY(e) {
    let { volume: t } = e;
    nl({ inputVolume: t1(t) }), e4.setInputVolume(t);
}
function nW(e) {
    let { volume: t } = e;
    nl({ outputVolume: t }), e4.setOutputVolume(t);
}
function nK(e) {
    let { id: t } = e;
    (t = np(tr, t)),
        (tt = performance.now()),
        nl({ inputDeviceId: t }),
        nm(t),
        e4.eachConnection(ne),
        (l = void 0),
        (u = void 0),
        tY.stop(),
        (tj = !1);
    let { resetSilenceWarningOnDeviceChange: n } = Q.A.getConfig({ location: "MediaEngineStore.handleSetInputDevice" });
    n && ((tA = !1), o.reset());
}
function n$(e) {
    let { id: t } = e;
    nl({ outputDeviceId: (t = np(ti, t)) }), e4.setAudioOutputDevice(t);
}
function nz(e) {
    let { id: t } = e;
    nl({ videoDeviceId: (t = np(ts, t)) }), t6();
}
function nq(e) {
    let { inputProfile: t } = e;
    nl({ activeInputProfile: t });
    let n = tJ();
    e4.eachConnection((e) => {
        t0(e), ne(e);
    }),
        e4.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        n4();
}
function nZ(e) {
    return e9 !== e.required && ((e9 = e.required), e.required || e4.interact(), !0);
}
function nX(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    nE(t), nI(n), nT(r);
}
function nQ(e) {
    let { inputVolume: t, outputVolume: n } = e;
    nl({ inputVolume: t1(t), outputVolume: n });
}
function nJ(e) {
    let t = tJ(),
        n = e4.getAudioSubsystem(),
        i = e4.getAudioLayer(),
        s = np(tr, t.inputDeviceId),
        a = tr[s]?.name,
        o = (0, el.A)(t.noiseCancellation, r.getSystemMicrophoneMode());
    ef.default.track(eO.HAw.VOICE_PROCESSING, {
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
function n0(e) {
    let t = nl({ echoCancellation: e.enabled });
    e4.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), n4(), nJ(e.location);
}
function n1(e) {
    n3(e.enabled);
}
function n2(e) {
    let t = nl({ sidechainCompressionStrength: e.strength });
    e4.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function n3(e) {
    let t = nl({ sidechainCompression: e });
    e4.setSidechainCompression(t.sidechainCompression);
}
function n6(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tG.add(n) : tG.delete(n), n4();
}
function n4() {
    let e = tJ(),
        t = tG.size > 0,
        n = e.inputDeviceId,
        r = eS.A.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        s = eS.A.hasNoiseSuppression(n) || e.noiseSuppression,
        a = t7(eS.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        o = e.noiseCancellation;
    e4.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: s,
        automaticGainControlConfig: a,
        noiseCancellation: o,
    });
}
async function n5() {
    if (!e4.supports(eM.O5.VAAPI)) return;
    let e = 4098;
    if (window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let t = await window.DiscordNative.processUtils.getSystemInfo();
    (t.electronGPUInfo?.gpuDevice ?? []).some((t) => t.vendorId === e) &&
        ((t$ = !0), (tK = e4.supports(eM.O5.GAMESCOPE_CAPTURE)));
}
function n7(e) {
    let t = nl({ noiseSuppression: e.enabled });
    e4.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), n4(), nJ(e.location);
}
function n8(e) {
    let t = nl({ automaticGainControl: e.enabled });
    e4.eachConnection((e) => t8(e, t.automaticGainControl)), n4(), nJ(e.location);
}
function n9(e) {
    let t = nl({ noiseCancellation: e.enabled });
    e4.eachConnection((e) => t9(e, t.noiseCancellation)), n4(), nJ(e.location);
}
function re(e) {
    eo.A.setKrispModelOverride(e.model), (_ = e.model), n4();
}
function rt(e) {
    (0, em.isWeb)() || ((tC = e.enabled), e4.setNoiseCancellationEnableStats?.(e.enabled));
}
function rn(e) {
    nl({ silenceWarning: e.enabled });
}
function rr(e) {
    e4.setDebugLogging(e.enabled);
}
function ri(e) {
    let { level: t } = e;
    (d = t), eo.A.setKrispSuppressionLevel(t);
}
function rs(e) {
    nl({ videoHook: e.enabled });
}
function ra(e) {
    nl({ experimentalSoundshare2: e.enabled });
}
function ro(e) {
    let { enabled: t } = e;
    nl({ useSystemScreensharePicker: t });
}
function rl(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = nl({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r });
    e4.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function ru(e) {
    let { enabled: t } = e;
    nl({ qos: t }), e4.eachConnection((e) => e.setQoS(t));
}
function rc() {
    nu();
}
function rd(e) {
    let { osVolume: t, osMuted: n } = e;
    (u = t), (l = n);
}
function r_(e) {
    let { inputDetected: t } = e;
    if (null == t) return !1;
    if (((tI = !0 !== tA && !t), t)) (tA = !0), (tj = !1), tY.stop(), tT.stop();
    else if (tJ().mode === eO.TBI.VOICE_ACTIVITY && tA) {
        let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = Q.A.getConfig({
            location: "MediaEngineStore.handleInputDetected",
        });
        e &&
            tY.start(eq, () => {
                ef.default.track(eO.HAw.HARDWARE_MUTE_GUESSED, {
                    input_device_name: tr[np(tr, tJ().inputDeviceId)]?.name,
                    rtc_connection_id: ev.A.getRTCConnectionId(),
                }),
                    (tj = !0),
                    r.emitChange();
            }),
            null != t &&
                tT.start(t * eh.A.Millis.MINUTE, () => {
                    (tA = !1), o.reset();
                });
    }
}
function rf(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === tu) return !1;
    (tu = n), e4.eachConnection(t2);
}
function rp(e) {
    let { state: t, permissionType: n } = e,
        r = t === eD.hL.ACCEPTED;
    switch (n) {
        case eD.iL.AUDIO:
            (tx = !0), e4.eachConnection(t2);
            break;
        case eD.iL.CAMERA:
            !r && td && t6(!1);
            break;
        default:
            return !1;
    }
}
function rh() {
    return tv || !1;
}
async function rm() {
    try {
        await eg.Ay.ensureModule("discord_krisp");
        let e = eg.Ay.requireModule("discord_krisp");
        (tv = !0),
            (c = e.getSdkVersion?.()),
            (d = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (tN = e), r.emitChange();
            }),
            r.emitChange();
    } catch (t) {
        eP.warn(`Failed to load Krisp module: ${t.message}`), eE.A.captureException(t);
        let e = eM.CO.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eM.CO.INITIALIZED : n;
        }
        ef.default.track(eO.HAw.VOICE_PROCESSING, { noise_canceller_error: e }), nl({ noiseCancellation: !1 });
    } finally {
        ty = !1;
    }
}
function rE() {
    return (0, em.isWindows)() || (0, em.isLinux)() || (0, em.isMac)();
}
function rg() {
    !rE() || __OVERLAY__ || ty || tv
        ? (0, em.isWeb)() && e4.supports(eM.O5.NOISE_CANCELLATION)
            ? ((tv = !0), r.emitChange())
            : (0, em.isWeb)() && nl({ noiseCancellation: !1 })
        : ((ty = !0), rm());
}
async function rA() {
    try {
        let e,
            t = "",
            n = !1,
            r = URL.parse(eQ);
        if (null === r) return void eP.log("OpenH264 URL ", r, " is invalid");
        let i = r.pathname.split("/"),
            s = i[i.length - 1].replace(".bz2", "");
        try {
            let t = await eg.Ay.downloadOpenH264(eQ, s, eJ, (e) => {
                eP.log("OpenH264 download status", e);
            });
            eP.log("OpenH264 is ready", t), (n = t.fetchedFromNetwork), (e = !0);
        } catch (n) {
            eP.error("OpenH264 download failed", n), (t = n.message), (e = !1);
        }
        if (
            (ef.default.track(eO.HAw.VIDEO_OPENH264_DOWNLOADED, {
                success: e,
                fetched_from_network: n,
                error_message: t,
            }),
            e)
        ) {
            let e = await eg.Ay.cleanupUnusedOpenH264Files([s]);
            eP.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        eP.error("OpenH264 download failed", e);
    }
}
function rI() {
    (0, em.isLinux)() && rA();
}
function rT(e) {
    let { deviceId: t, active: n, available: r } = e;
    tL[t] = { active: n, available: r };
}
function rS(e) {
    let t = e.bypassEnabled;
    nl({ bypassSystemInputProcessing: t }), e4.setAudioInputBypassSystemProcessing(t), nJ(e.location);
}
function ry(e) {
    rv(e.subsystem);
}
function rv(e) {
    e === eM.rB.AUTOMATIC
        ? (nl({ automaticAudioSubsystem: !0 }), rN())
        : (nl({ automaticAudioSubsystem: !1 }), e4.setAudioSubsystem(e));
}
function rN() {
    e4.queueAudioSubsystem(eM.rB.EXPERIMENTAL);
}
function rC(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && t6(i, null), null != t || null == n)) {
        tS = !1;
        return;
    }
    if (tS) return;
    tS = !0;
    let s = tJ();
    (s.mute || s.deaf) && (nl({ deaf: !1, mute: !1 }), e4.eachConnection(t2));
}
function rR(e) {
    let { application: t } = e;
    e7.add(t.id);
}
function rO(e) {
    let { application: t } = e;
    e7.delete(t.id);
}
function rb(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (e8 = !1), e4.eachConnection(t2);
                break;
            case "video":
                t6(!1);
        }
}
function rD(e) {
    (e8 = e.enabled), e.unmute && nl({ mute: !1, deaf: !1 }), e4.eachConnection(t2);
}
function rL(e) {
    let { enabled: t } = e;
    ea.A.requestPermission(eD.iL.CAMERA), t6(t);
}
function rw(e) {
    let { sourceId: t, applicationName: n, quality: i } = e;
    if (!(0, M.Ao)() || null == R.A) return !1;
    null != a &&
        (e4.setClipsSource(null),
        (0, em.isWindows)() &&
            (null != a.desktopSource.soundshareId
                ? O.c1(a.desktopSource.soundshareId)
                : null != a.desktopSource.sourcePid && tJ().videoHook && O.c1(a.desktopSource.sourcePid)));
    let s = ep.A.getPidFromDesktopSource(t),
        { soundshareId: o, soundshareSession: l } = nv(s, !0);
    a = { desktopSource: { id: t, sourcePid: s, soundshareId: o, soundshareSession: l }, quality: i };
    let u = tq("MediaEngineStore clips"),
        c = tJ().videoHook;
    e4.setClipsSource({
        desktopDescription: {
            id: a.desktopSource.id,
            soundshareId: a.desktopSource.soundshareId,
            useVideoHook: c,
            useGraphicsCapture: nn(),
            useCaptureDeviceForEncode: !1,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: ni(),
            videoHookStaleFrameTimeoutMs: ej,
            graphicsCaptureStaleFrameTimeoutMs: eY,
            hdrCaptureMode: u,
        },
        quality: i,
        applicationName: n,
    });
}
function rM(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((a = null), e4.setClipsSource(null));
}
function rx(e) {
    let { settings: t } = e;
    if (t?.desktopSettings != null) {
        let e = null,
            n = null,
            { sourceId: r, sound: i } = t.desktopSettings,
            s = t.context ?? eM.x.DEFAULT,
            a = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
            o = ep.A.getPidFromDesktopSource(r);
        em.isPlatformEmbedded && ({ soundshareId: e, soundshareSession: n } = nv(o, i)),
            t3(s),
            t6(s === eM.x.STREAM && td, {
                desktopSource: { id: r, sourcePid: o, soundshareId: e, soundshareSession: n },
                quality: { resolution: a.resolution, frameRate: a.frameRate },
            });
    } else if (t?.cameraSettings != null) {
        let e = t.context ?? eM.x.DEFAULT,
            { videoDeviceGuid: n, audioDeviceGuid: r } = t.cameraSettings,
            i = e === eM.x.STREAM && td,
            s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
        t6(i, {
            cameraSource: { videoDeviceGuid: n, audioDeviceGuid: r },
            quality: { resolution: s.resolution, frameRate: s.frameRate },
        });
    } else t6(td, null);
}
function rP(e) {
    let { section: t } = e;
    return t === eO.nc_.VOICE && nd(), !1;
}
function rk() {
    return e4.eachConnection(ne), !1;
}
function rU(e) {
    let { enabled: t } = e,
        n = nl({ aecDumpEnabled: t });
    e4.setAecDump(n.aecDumpEnabled);
}
function rG(e) {
    let { enabled: t } = e;
    nl({ openH264Enabled: t }), eg.Ay?.setOpenH264Enabled?.(t);
}
function rF(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (e5 = Object.values(eM.x).reduce((e, n) => {
        let r = n,
            i = e3();
        return (e[r] = E().merge(i, t[r])), e;
    }, {})),
        v.w.set(ek, e5),
        nc();
}
function rV(e) {
    let { state: t } = e,
        n = G.A.isEnabled();
    if (t === eO.g6G.BACKGROUND && td && !n) (tE = !0), t6(!1);
    else {
        if (t !== eO.g6G.ACTIVE || !tE) return !1;
        (tE = !1), t6(!0);
    }
    return !0;
}
function rB(e) {
    e4.eachConnection((t) => t.setBitRate(e.bitrate));
}
function rH() {
    if ((!td && null == s) || null != ev.A.getRTCConnectionId()) return !1;
    t6(!1, null);
}
function rj() {
    return !!tO && ((tO = !1), !0);
}
function rY(e) {
    e4.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function rW(e) {
    let { settings: t } = e;
    e4.applyMediaFilterSettings(t).finally(() => {
        (tb = !1), r.emitChange();
    });
}
function rK() {
    tb = !0;
}
function r$() {
    tb = !1;
}
function rz(e) {
    tH = e.enabled;
}
function rq() {
    if ((0, em.isDesktop)() && em.isPlatformEmbedded && !tz) {
        tz = !0;
        let e = async () => {
            let t = await new Promise((e) => {
                eg.Ay.pollQueueMetrics((t) => {
                    e(t);
                });
            });
            t.periodMs = eM.tl;
            let n = rX(t);
            null !== n && ef.default.track(eO.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, eM.tl);
        };
        setTimeout(e, eM.tl);
    }
}
class rZ extends S.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        nt(),
            no(),
            rg(),
            rI(),
            nV(),
            rq(),
            (0, em.isWindows)() && em.isPlatformEmbedded && t5(),
            (tF = {
                [eM.O5.VIDEO]: e4.supports(eM.O5.VIDEO),
                [eM.O5.DESKTOP_CAPTURE]: e4.supports(eM.O5.DESKTOP_CAPTURE),
                [eM.O5.HYBRID_VIDEO]: e4.supports(eM.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eI.default, eT.A, eS.A, ey.A, L.A, U.A, ev.A, F.Ay, ed.A, eC.default, eR.A);
    }
    supports(e) {
        return e4.supports(e);
    }
    supportsInApp(e) {
        return tF[e] || e4.supports(e);
    }
    isSupported() {
        return e4.supported();
    }
    isNoiseSuppressionSupported() {
        return e4.supports(eM.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return rh();
    }
    isNoiseCancellationError() {
        return tO;
    }
    isAutomaticGainControlSupported() {
        return e4.supports(eM.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !na() && (e4.supports(eM.O5.LEGACY_AUDIO_SUBSYSTEM) || e4.supports(eM.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return e4.supports(eM.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === e4.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return rh();
    }
    isAecDumpSupported() {
        return e4.supports(eM.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return e4.supports(eM.O5.VIDEO) && e4.supports(eM.O5.SIMULCAST);
    }
    getAecDump() {
        return tJ().aecDumpEnabled;
    }
    getMediaEngine() {
        return e4;
    }
    getVideoComponent() {
        return e4.Video;
    }
    getCameraComponent() {
        return e4.Camera;
    }
    getKrispSuppressionLevel() {
        return d ?? 100;
    }
    getKrispEnableStats() {
        return tC;
    }
    isEnabled() {
        return e8;
    }
    isMute() {
        return this.isSelfMute() || to;
    }
    isDeaf() {
        return this.isSelfDeaf() || tc;
    }
    hasContext(e) {
        return null != e5[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eM.x.DEFAULT;
        return e === eM.x.DEFAULT && tl;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eM.x.DEFAULT;
        return (
            !this.isEnabled() ||
            tJ(e).mute ||
            !ea.A.didHavePermission(eD.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eM.x.DEFAULT && tu)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tp;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tp = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eM.x.DEFAULT,
            t = tj && "voice_isolation" !== this.getSystemMicrophoneMode() && tJ(e).mode === eO.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (eS.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return tH;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eM.x.DEFAULT;
        return !this.isSupported() || tJ(e).deaf;
    }
    isVideoEnabled() {
        return td && tg;
    }
    isVideoAvailable() {
        return Object.values(ts).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return tg;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eM.x.STREAM;
        return te === e && null != s;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eM.x.STREAM;
        return te === e && null != s && s.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eM.x.DEFAULT;
        return e !== eI.default.getId() && (tJ(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return e4.supports(eM.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eM.x.DEFAULT;
        return tJ(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eM.x.DEFAULT;
        return tJ(t).videoToggleStateMap[e] ?? eO.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eM.x.DEFAULT;
        return t === eM.x.DEFAULT && tk.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eM.x.DEFAULT;
        return e === eM.x.DEFAULT && tk.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tb;
    }
    isNativeAudioPermissionReady() {
        return tx;
    }
    getGoLiveSource() {
        return s;
    }
    getGoLiveContext() {
        return te;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return tt;
    }
    isH264MfDecodeAvailable() {
        return tn;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eM.x.DEFAULT,
            n = tJ(t).localPans[e];
        return null != n ? n : eH;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eM.x.DEFAULT,
            n = t === eM.x.STREAM ? eM.Cn : eM.Hz,
            r = tJ(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return tJ().inputVolume;
    }
    getOutputVolume() {
        return tJ().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eM.x.DEFAULT;
        return tJ(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eM.x.DEFAULT;
        return tJ(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            E().each(e5, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === eO.TBI.PUSH_TO_TALK && e7.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return np(tr, tJ().inputDeviceId);
    }
    getOutputDeviceId() {
        return np(ti, tJ().outputDeviceId);
    }
    getVideoDeviceId() {
        return np(ts, tJ().videoDeviceId);
    }
    getInputDevices() {
        return tr;
    }
    getOutputDevices() {
        return ti;
    }
    getVideoDevices() {
        return ts;
    }
    getEchoCancellation() {
        let e = tJ();
        return eS.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return e4.supports(eM.O5.SIDECHAIN_COMPRESSION) && tJ().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return tJ().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return tJ().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tw && tw;
    }
    getOpenH264Enabled() {
        return (0, em.isLinux)() && tJ().openH264Enabled;
    }
    getLoopback() {
        return tG.size > 0;
    }
    getLoopbackReasons() {
        return tG;
    }
    getNoiseSuppression() {
        let e = tJ();
        return eS.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tJ();
        return eS.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return tJ().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return tJ().noiseCancellation;
    }
    getHardwareEncoding() {
        return eZ;
    }
    getEnableSilenceWarning() {
        return tJ().silenceWarning;
    }
    getDebugLogging() {
        return e4.getDebugLogging();
    }
    getQoS() {
        return tJ().qos;
    }
    getAttenuation() {
        return tJ().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return tJ().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return tJ().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return ns() && tJ().automaticAudioSubsystem ? eM.rB.AUTOMATIC : e4.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return e4.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return tJ().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === ew.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eM.x.DEFAULT;
        return tJ(e);
    }
    getState() {
        return {
            settingsByContext: e5,
            inputDevices: tr,
            outputDevices: ti,
            appSupported: tF,
            krispModuleLoaded: tv,
            krispVersion: c,
            krispSuppressionLevel: d,
            goLiveSource: s,
            goLiveContext: te,
        };
    }
    getInputDetectedThisConnection() {
        return tA;
    }
    getInputDetected() {
        return o.inputDetected;
    }
    getLastInputDetectedUpdateTime() {
        return o.lastUpdateTime;
    }
    getNoInputDetectedNotice() {
        return tI;
    }
    getInputDeviceOSMuted() {
        return l;
    }
    getInputDeviceOSVolume() {
        return u;
    }
    getPacketDelay() {
        return em.isPlatformEmbedded || this.getMode() !== eO.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        e4.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return e9;
    }
    getVideoHook() {
        return tJ().videoHook;
    }
    supportsVideoHook() {
        return e4.supports(eM.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tJ().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return e4.supports(eM.O5.EXPERIMENTAL_SOUNDSHARE) && T().satisfies(R.A?.os.release, eb.$x);
    }
    supportsHookSoundshare() {
        return (0, em.isWindows)() && e4.supports(eM.O5.SOUNDSHARE) && T().satisfies(R.A?.os.release, eb.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = tJ().useSystemScreensharePicker,
            n = (0, em.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return e4.supports(eM.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return t$;
    }
    getUseGamescopeCapture() {
        return tK;
    }
    getSpeakingWhileMuted() {
        return th;
    }
    getKrispModelOverride() {
        return _;
    }
    getKrispModels() {
        return tN;
    }
    getKrispVadActivationThreshold() {
        return tJ().modeOptions.vadKrispActivationThreshold ?? eB;
    }
    hasActiveCallKitCall() {
        return tW;
    }
    setHasActiveCallKitCall(e) {
        tW = e;
    }
    supportsScreenSoundshare() {
        return (0, em.isMac)()
            ? e4.supports(eM.O5.SOUNDSHARE) && T().satisfies(R.A?.os.release, eb.P$) && ni()
            : (0, em.isWindows)()
              ? e4.supports(eM.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, em.isLinux)() && e4.supports(eM.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, em.isWindows)()) {
            if (this.getBypassSystemInputProcessing()) return;
            return tL[this.getInputDeviceId()]?.active?.find((e) => e === eX);
        }
        if ((0, em.isMac)() || (0, em.isIOS)()) return f;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eM.x.DEFAULT,
            t = this.supports(eM.O5.VIDEO)
                ? [{ rid: "100", type: e === eM.x.DEFAULT ? eM.mI.VIDEO : eM.mI.SCREEN, quality: eM.Y4 }]
                : [];
        return (
            this.isSimulcastSupported() &&
                e === eM.x.DEFAULT &&
                t.push({ rid: "50", type: eM.mI.VIDEO, quality: eM.Cl }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: (0, em.isWeb)() };
        return e4.fetchAsyncResources(e);
    }
    startDavePreload() {
        if (!tD && ((tD = !0), (0, em.isWeb)())) {
            let e = { fetchDave: !0 };
            e4.fetchAsyncResources(e).catch((e) => {
                eP.warn("DAVE preload failed:", e), eE.A.captureException(e);
            });
        }
    }
    getSupportedSecureFramesProtocolVersion() {
        return e4.getSupportedSecureFramesProtocolVersion();
    }
    hasClipsSource() {
        return null != a;
    }
    getGpuBrand() {
        return tV;
    }
}
function rX(e) {
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
(r = new rZ(C.h, {
    VOICE_CHANNEL_SELECT: rC,
    VOICE_STATE_UPDATES: nL,
    CONNECTION_OPEN: nC,
    CONNECTION_CLOSED: nO,
    POST_CONNECTION_OPEN: nb,
    RTC_CONNECTION_STATE: nD,
    AUDIO_SET_TEMPORARY_SELF_MUTE: nw,
    AUDIO_TOGGLE_SELF_MUTE: nM,
    AUDIO_SET_SELF_MUTE: nx,
    AUDIO_TOGGLE_SELF_DEAF: nk,
    AUDIO_TOGGLE_LOCAL_MUTE: nU,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: nG,
    AUDIO_SET_LOCAL_VOLUME: nB,
    AUDIO_SET_LOCAL_PAN: nH,
    AUDIO_SET_MODE: nj,
    AUDIO_SET_INPUT_VOLUME: nY,
    AUDIO_SET_OUTPUT_VOLUME: nW,
    AUDIO_SET_INPUT_DEVICE: nK,
    AUDIO_SET_OUTPUT_DEVICE: n$,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: nq,
    AUDIO_SET_ECHO_CANCELLATION: n0,
    AUDIO_SET_SIDECHAIN_COMPRESSION: n1,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: n2,
    AUDIO_SET_LOOPBACK: n6,
    AUDIO_SET_NOISE_SUPPRESSION: n7,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: n8,
    AUDIO_SET_NOISE_CANCELLATION: n9,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: re,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: rn,
    AUDIO_SET_DEBUG_LOGGING: rr,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: ri,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: rt,
    MEDIA_ENGINE_SET_VIDEO_HOOK: rs,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: ra,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: ro,
    AUDIO_SET_ATTENUATION: rl,
    AUDIO_SET_QOS: ru,
    MEDIA_ENGINE_DEVICES: nX,
    AUDIO_VOLUME_CHANGE: nQ,
    AUDIO_RESET: rc,
    AUDIO_INPUT_DETECTED: r_,
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: rd,
    AUDIO_SET_SUBSYSTEM: ry,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rS,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rD,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rL,
    MEDIA_ENGINE_PERMISSION: rb,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rx,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nz,
    MEDIA_ENGINE_INTERACTION_REQUIRED: nZ,
    USER_SETTINGS_MODAL_INIT: rP,
    USER_SETTINGS_MODAL_SET_SECTION: rP,
    CERTIFIED_DEVICES_SET: rk,
    RPC_APP_CONNECTED: rR,
    RPC_APP_DISCONNECTED: rO,
    OVERLAY_INITIALIZE: nR,
    APP_STATE_UPDATE: rV,
    SET_CHANNEL_BITRATE: rB,
    SET_VAD_PERMISSION: rf,
    SET_NATIVE_PERMISSION: rp,
    SET_CHANNEL_VIDEO_QUALITY_MODE: rY,
    MEDIA_ENGINE_SET_AEC_DUMP: rU,
    MEDIA_ENGINE_SET_OPENH264_ENABLED: rG,
    MEDIA_ENGINE_RESET_SETTINGS: rF,
    CHANNEL_DELETE: rH,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rj,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rW,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rK,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: r$,
    USER_SETTINGS_PROTO_UPDATE: nP,
    CLIPS_INIT: rw,
    CLIPS_SETTINGS_UPDATE: rM,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rz,
    MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: rT,
})),
    (o = new z.A(e4, r));
let rQ = r;
