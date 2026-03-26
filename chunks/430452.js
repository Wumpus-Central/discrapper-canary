"use strict";
let r, i, s, a, o, l, u, c, d, _, f;
n.d(t, { Ay: () => ie }), n(323874), n(14289), n(35956), n(321073), n(790599);
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
    Y = n(638188),
    W = n(269377),
    K = n(934341),
    $ = n(658046),
    z = n(621963),
    q = n(227493),
    Z = n(264866),
    X = n(927170),
    Q = n(233232),
    J = n(140175);
n(491642);
var ee = n(801644),
    et = n(223572),
    en = n(993628),
    er = n(886124),
    ei = n(165479),
    es = n(896014),
    ea = n(765396),
    eo = n(75076),
    el = n(674966),
    eu = n(559633),
    ec = n(3527),
    ed = n(458798),
    e_ = n(879172),
    ef = n(617617),
    ep = n(340913),
    eh = n(996744),
    em = n(28075),
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
    e4 = null;
function e5() {
    if (!(0, eI.isIOS)() || null == e4) return !1;
    let e = e4();
    if (null == e || !e.startsWith("ARM64_")) return !1;
    let t = e.substring(6);
    return ("T" === t[0] || "S" === t[0]) && parseInt(t.substring(1), 10) >= 8122;
}
function e7() {
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
        inputVolume: eU.Hz,
        outputVolume: eU.Hz,
        inputDeviceId: eU.dx,
        outputDeviceId: eU.dx,
        videoDeviceId: eU.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: e9.supports(eU.O5.VIDEO_HOOK),
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
let e8 = {
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
    e9 = (0, y.hB)((0, y.WI)());
eF.enableNativeLogger(!0);
let te = {},
    tt = new Set([eU.x.DEFAULT]),
    tn = e9.supports(eU.O5.AUTO_ENABLE),
    tr = !1,
    ti = eU.x.STREAM,
    ts = performance.now(),
    ta = null,
    to = { [eU.dx]: nI("No Input Devices") },
    tl = { [eU.dx]: nI("No Output Devices") },
    tu = { [eU.dx]: nI("No Video Devices") },
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
    tw = null,
    tM = null,
    tx = null,
    tP = null,
    tk = !1,
    tU = !1,
    tG = !1,
    tF = {},
    tV = null,
    tB = null,
    tH = !1;
el.A.hasPermission(ex.iL.AUDIO, { showAuthorizationError: !1 }),
    el.A.hasPermission(ex.iL.CAMERA, { showAuthorizationError: !1 });
let tj = !1,
    tY = new Set(),
    tW = tj,
    tK = new Set(),
    t$ = {},
    tz = null,
    tq = null,
    tZ = !0,
    tX = !1,
    tQ = new N.Ep(),
    tJ = !1,
    t0 = !1,
    t1 = !1,
    t2 = !1;
function t3(e) {
    return (0, z.p)({ location: e }).hdrCaptureMode;
}
async function t6() {
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
function t4() {
    return null != tB ? tB : "u" > typeof window ? (tB = t6().then((e) => ((tV = e), e))) : Promise.resolve(!1);
}
function t5() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.DEFAULT,
        t = te[e];
    return null == t && ((t = e7()), (te[e] = t)), t;
}
function t7() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.DEFAULT,
        t = t5(e),
        n = e8[t.activeInputProfile ?? ek.m.CUSTOM],
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
function t8(e) {
    let t = t7(e.context),
        n = t.mode;
    e.context === eU.x.DEFAULT && (0, J.N)(!1, !1);
    let { showPTTSpeakingIndicator: r } = ep.A.getConfig({ location: "setInputMode" }),
        i = r && n === ew.TBI.PUSH_TO_TALK;
    e.setInputMode(n, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: !!i || t.modeOptions.autoThreshold,
        vadUseKrisp: (!!i || t.modeOptions.vadUseKrisp) && ry(),
        vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? eW,
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        vadDuringPreProcess: t.modeOptions.vadDuringPreProcess ?? !1,
        pttReleaseDelay: Math.round(t.modeOptions.delay),
    });
}
function t9(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eU.Hz;
    return E().clamp(e, 0, t);
}
function ne(e) {
    let t = t7(e.context),
        n = !tn || t.mute || t.deaf;
    e.context === eU.x.DEFAULT
        ? (n = n || td || t_ || tf || !el.A.didHavePermission(ex.iL.AUDIO))
        : e.context === eU.x.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eU.x.DEFAULT && b.A.updateNativeMute();
}
function nt(e) {
    e !== ti && (null != s && e9.setGoLiveSource(null, ti), (ti = e));
}
function nn() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : th,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
        n = s;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, eI.isWindows)() && O.c1(n.desktopSource.soundshareId),
            e9.setGoLiveSource(null, ti)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            e9.setGoLiveSource(null, ti),
        th || e)
    ) {
        let t = t7().videoDeviceId;
        th && t === eU.dx && tE === eU.dx && tm !== eU.qe ? (t = tm) : (tE = t),
            (tm = (th = e) ? nS(tu, t) : eU.qe),
            e9.setVideoInputDevice(tm);
    }
    if (((s = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = t3("MediaEngineStore go live"),
                i = t7().videoHook,
                s = nc(),
                a = s ? (nd() ? eM.zl : eM.eg) : 0,
                o = !1;
            (0, eI.isWindows)() &&
                a >= eM.zl &&
                (o =
                    !0 === tq
                        ? ei.q.getConfig({ location: "updateVideo" }).enabled
                        : er.d.getConfig({ location: "updateVideo" }).enabled),
                e9.setGoLiveSource(
                    {
                        desktopDescription: {
                            id: t.desktopSource.id,
                            soundshareId: t.desktopSource.soundshareId,
                            useVideoHook: i,
                            useGraphicsCapture: s,
                            useGraphicsCaptureApiLevel: a,
                            useCaptureDeviceForEncode: (0, eI.isWindows)(),
                            useLoopback: r.getExperimentalSoundshare(),
                            useQuartzCapturer: !0,
                            allowScreenCaptureKit: n_(),
                            videoHookStaleFrameTimeoutMs: e$,
                            graphicsCaptureStaleFrameTimeoutMs: ez,
                            hdrCaptureMode: n,
                            enableGlobalFramePoolLock: (0, $.H)({ location: "updateVideo" }).enabled,
                            useGraphicsCaptureDirtyRegions: o,
                        },
                        quality: e,
                    },
                    ti,
                );
        }
        null != t.cameraSource &&
            e9.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: t.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: t.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                ti,
            );
    }
}
function nr(e) {
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
function ni() {
    null === ta &&
        e9
            .getCodecSurvey()
            .then((e) => {
                try {
                    let t = JSON.parse(e);
                    if (null == t || null == t.available_video_decoders) throw Error("decoder survey is not available");
                    ta = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                } catch (e) {
                    eF.error("Failed to parse codec survey", e), (ta = !1);
                }
            })
            .catch((e) => {
                eF.error("Failed to get codec survey", e), (ta = !1);
            })
            .finally(() => {
                C.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
            });
}
function ns(e) {
    let t = (0, B.F)({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function na(e, t) {
    e.setAutomaticGainControl(ns(t));
}
function no(e, t) {
    let n = (0, ec.A)(t, r.getSystemMicrophoneMode());
    n !== t && eF.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: i } = (0, B.F)({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(i);
    let { noiseCancellationAfterProcessing: s, vadAfterWebrtc: a } = (0, X.$)({ location: "setNoiseCancellation" });
    e.setNoiseCancellationAfterProcessing(s), e.setVADAfterWebrtc(a);
}
function nl(e) {
    let t = t7(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eC.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eC.A.hasNoiseSuppression(n) || t.noiseSuppression),
        na(e, eC.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        no(e, t.noiseCancellation),
        e.setVoiceFilterId(tL),
        (0, eI.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function nu() {
    tc.start(eQ, () => {
        eF.error("Device enumeration timed out"), eE.default.track(ew.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
    }),
        e9.on(y.bg.Connection, (e) => {
            t8(e), ne(e), nl(e);
            let t = t7();
            e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
                e.setQoS(t.qos),
                (0, eI.isWindows)()
                    ? (e.setExperimentFlag(eU.fd.H265_HARDWARE_ONLY, !0),
                      t4().then((t) => {
                          e.setExperimentFlag(eU.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                      }))
                    : (0, eI.isMac)() && e.setExperimentFlag(eU.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                (0, eI.isLinux)() && t.openH264Enabled && e.setExperimentFlag(eU.fd.USE_LIBOPENH264_DECODER, !0);
            let n = eO.A.getGuildId(),
                {
                    muteBeforeProcessing: i,
                    pttBeforeProcessing: a,
                    skipEncode: o,
                } = (null != n ? W.A : Y.A).getCurrentConfig(
                    { location: "setupMediaEngine", guildId: n ?? void 0 },
                    { autoTrackExposure: !0 },
                );
            i && e.setExperimentFlag(eU.fd.MUTE_BEFORE_PROCESSING, !0),
                a && e.setExperimentFlag(eU.fd.PTT_BEFORE_PROCESSING, !0),
                o && e.setExperimentFlag(eU.fd.SKIP_ENCODE, !0),
                (0, Q.J)({ location: "setupMediaEngine" }).enabled &&
                    e.setExperimentFlag(eU.fd.LOW_LATENCY_RATE_CONTROL, !0);
            let l = !1,
                u = !0;
            e.setExperimentFlag(eU.fd.RESET_DECODER_ON_ERRORS, !0),
                l && e.setExperimentFlag(eU.fd.SOFTWARE_FALLBACK_ON_ERRORS, !0),
                u && e.setExperimentFlag(eU.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
            let { swallowVolumeOnlySpeakingEvents: c } = D.A.getConfig({ location: "MediaEngineStore" });
            if ((c && e.setExperimentFlag(eU.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === eU.x.STREAM)) {
                let t = nC(tl);
                e.setSoundshareDiscardRearChannels(t);
            }
            if ((0, eI.isWindows)())
                e.setExperimentFlag(eU.fd.SIGNAL_AV1, !0), e.setExperimentFlag(eU.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            else if ((0, eI.isMac)())
                e.setExperimentFlag(eU.fd.SIGNAL_AV1_DECODE, !0),
                    e.setExperimentFlag(eU.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            else if ((0, eI.isLinux)()) e.setExperimentFlag(eU.fd.SIGNAL_AV1_DECODE, !0);
            else if ((0, eI.isIOS)() && e5()) {
                let { enabled: t } = (0, H.$)("MediaEngineStore");
                t &&
                    (e.setExperimentFlag(eU.fd.SIGNAL_AV1_DECODE, !0),
                    e.setExperimentFlag(eU.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
            }
            if ((0, eI.isWeb)()) {
                let { enabled: t } = K.A.getConfig({ location: "MediaEngineStore" });
                e.setExperimentFlag(eU.fd.BROWSER_HEVC, t);
            }
            for (let n of ((0, eI.isWindows)() &&
                tz?.startsWith("AMD") &&
                (0, es.F)("MediaEngineStore").enabled &&
                e.setExperimentFlag(eU.fd.WMF_GPU_ENCODE, !0),
            (0, eI.isWindows)() &&
                tz?.startsWith("Intel") &&
                (0, ea.J)("MediaEngineStore").enabled &&
                e.setExperimentFlag(eU.fd.WMF_GPU_ENCODE, !0),
            (0, eI.isWindows)() &&
                tz?.startsWith("Qualcomm") &&
                (0, es.F)("MediaEngineStore").enabled &&
                e.setExperimentFlag(eU.fd.WMF_GPU_ENCODE, !0),
            e9.setHasFullbandPerformance((0, P.A)()),
            e.setRemoteAudioHistory(1e3),
            (0, w.A)(r) && e.setClipsKeyFrameInterval(eU.X1),
            (t = t7(e.context)),
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
                        (0, k.QW)({ type: k.iy.NOISE_CANCELLER_ERROR, underlyingError: nr(e) }),
                        (tk = !0),
                        eE.default.track(ew.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        C.h.dispatch({ type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: !0 }),
                        C.h.dispatch({ type: "AUDIO_SET_NOISE_CANCELLATION", enabled: !1 }),
                        C.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e });
                }),
                e.on(y.yq.VoiceActivityDetectorError, (e) => {
                    eF.warn(`voiceactivitydetectorerror event: ${e}`),
                        (0, k.QW)({ type: k.iy.NOISE_CANCELLER_ERROR, underlyingError: nr(e) }),
                        eE.default.track(ew.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        C.h.dispatch({
                            type: "AUDIO_SET_MODE",
                            context: eU.x.DEFAULT,
                            mode: ew.TBI.VOICE_ACTIVITY,
                            options: { ...t7(eU.x.DEFAULT).modeOptions, vadUseKrisp: !1 },
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
                    e9.supports(eU.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                    e9.setAsyncVideoInputDeviceInit(!0);
        }),
        e9.on(y.bg.DeviceChange, (e, t, n) => {
            tc.stop(),
                C.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
        }),
        e9.on(y.bg.VolumeChange, (e, t) => {
            C.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
        }),
        e9.on(y.bg.DesktopSourceEnd, (e, t) => {
            C.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
        }),
        e9.on(y.bg.AudioPermission, (e) => {
            (tH = !0), C.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
        }),
        e9.on(y.bg.VideoPermission, (e) => {
            C.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
        }),
        e9.on(y.bg.WatchdogTimeout, async () => {
            let e;
            if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                try {
                    await eg.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                } catch (t) {
                    "number" == typeof t.status && (e = t.status);
                }
            eF.warn(`Watchdog timeout, report submission status: ${e ?? 200}`);
            let t = en.A.getConfig({ location: "watchdog_timeout" }).enabled && null != R.A.processUtils.setCrashReason;
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
        e9.on(y.bg.VideoInputInitialized, (e) => {
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
        e9.on(y.bg.AudioInputInitialized, (e) => {
            eE.default.track(ew.HAw.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * eA.A.Millis.SECOND),
                rtc_connection_id: eO.A.getRTCConnectionId(),
            });
        }),
        e9.on(y.bg.ClipsRecordingRestartNeeded, () => {
            C.h.dispatch({ type: "CLIPS_RESTART" });
        }),
        e9.on(y.bg.ClipsInitFailure, (e, t) => {
            C.h.wait(() => {
                C.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t });
            });
        }),
        e9.on(y.bg.ClipsRecordingEnded, (e, t) => {
            a?.desktopSource?.id === e && (null != t && s?.desktopSource?.soundshareId !== t && O.c1(t), (a = null));
        }),
        e9.on(y.bg.NativeScreenSharePickerUpdate, (e, t) => {
            C.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
        }),
        e9.on(y.bg.NativeScreenSharePickerCancel, (e) => {
            C.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
        }),
        e9.on(y.bg.NativeScreenSharePickerError, (e) => {
            C.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
        }),
        e9.on(y.bg.AudioDeviceModuleError, (e, t, n) => {
            eE.default.track(ew.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
        }),
        e9.on(y.bg.VideoCodecError, (e) => {
            let t = "encode" === e.mode ? k.iy.VIDEO_ENCODE_ERROR : k.iy.VIDEO_DECODE_ERROR,
                n = { videoCodec: e.codecStandard, errorMessage: e.message };
            (0, k.QW)(
                t === k.iy.VIDEO_ENCODE_ERROR
                    ? { type: t, ...n, videoEncoder: e.implName }
                    : { type: t, ...n, videoDecoder: e.implName },
            );
        }),
        e9.on(y.bg.ConnectionStats, (e) => {
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
        e9.on(y.bg.VoiceQueueMetrics, (e) => {
            let t = r9(e);
            null !== t && eE.default.track(ew.HAw.VOICE_QUEUE_METRICS, t);
        }),
        e9.setOnVideoContainerResized((e, t, n) => {
            C.h.wait(() =>
                C.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
            );
        }),
        rn(),
        ri(),
        o.reset(),
        (0, eb.w)().then((e) => {
            null != e && ((tz = e.gpu_brand), (tq = e.has_intel_hybrid_igpu));
        }),
        e9.on(y.bg.SystemMicrophoneModeChange, (e) => {
            (f = e), e9.eachConnection(nl), r.emitChange();
        });
}
function nc() {
    return (0, eI.isWindows)() && T().satisfies(R.A?.os.release, eM.yg);
}
function nd() {
    return (0, eI.isWindows)() && T().satisfies(R.A?.os.release, eM.fG);
}
function n_() {
    return (0, eI.isMac)() && e9.supports(eU.O5.SCREEN_CAPTURE_KIT) && T().satisfies(R.A?.os.release, eM.e);
}
function nf() {
    return (
        (0, eI.isWindows)() &&
        e9.supports(eU.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        e9.supports(eU.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function np() {
    return e9.supports(eU.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function nh() {
    let e = v.w.get("audio");
    null != e && (v.w.set(eV, { [eU.x.DEFAULT]: e }), v.w.remove("audio")),
        (te = v.w.get(eV) ?? {}),
        E().each(te, (e) => {
            E().defaultsDeep(e, e7()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, ey.OH)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== eB &&
                    ((e.vadUseKrispSettingVersion = eB), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                e.vadThrehsoldMigrated ||
                    ((e.vadThrehsoldMigrated = !0), e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = eq)),
                e9.supports(eU.O5.SIDECHAIN_COMPRESSION) &&
                    e.sidechainCompressionSettingVersion < eY &&
                    ((e.sidechainCompressionSettingVersion = eY), (e.sidechainCompression = !0)),
                (0, eI.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== ej &&
                      ((e.ncUseKrispjsSettingVersion = ej), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== eH &&
                      ((e.ncUseKrispSettingVersion = eH), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
        }),
        ng();
}
function nm(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eU.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = t5(t);
    return Object.assign(r, e), !__OVERLAY__ && n && v.w.set(eV, te), r;
}
function nE() {
    v.w.remove(eV), location.reload();
}
function ng() {
    let e = t7();
    nv(e.inputDeviceId),
        e9.setAudioOutputDevice(e.outputDeviceId),
        nn(),
        e9.setInputVolume(e.inputVolume),
        e9.setOutputVolume(e.outputVolume),
        e9.setAecDump(e.aecDumpEnabled),
        e9.setSidechainCompression(e.sidechainCompression),
        e9.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        e9.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        eS.Ay?.setOpenH264Enabled?.(e.openH264Enabled);
}
function nA() {
    tn || e9.enable().then(() => C.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nI(e) {
    return { id: eU.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
}
function nT(e, t) {
    if (0 === e.length) {
        let e = nI(t);
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
function nS(e, t) {
    let n = e[t] ?? e[eU.dx] ?? E()(e).values().first();
    return null != n ? n.id : t;
}
function ny(e) {
    if (!(0, eI.isWindows)() || !j.A.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects)
        return;
    let t = to[e];
    t?.guid != null && (0, ed.A)(t.guid, e, e9);
}
function nv(e) {
    e9.setAudioInputDevice(e), ny(e);
}
function nN(e) {
    let t = to;
    if (((to = nT(e, eG.intl.string(eG.t["/QIjDA"]))), !E().isEqual(to, t))) {
        let e = t7();
        nv(nS(to, e.inputDeviceId)), e9.eachConnection(nl);
    }
}
function nC(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nR(e) {
    e9.eachConnection((t) => {
        t.context === eU.x.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function nO(e) {
    let t = tl;
    if (((tl = nT(e, eG.intl.string(eG.t.xlUg0v))), !E().isEqual(tl, t))) {
        let e = t7(),
            n = nS(tl, e.outputDeviceId);
        e9.setAudioOutputDevice(n);
        let r = nC(t),
            i = nC(tl);
        r !== i && nR(i);
    }
}
function nb(e) {
    tS = e.length > 0;
    let t = tu;
    if (((tu = nT(e, eG.intl.string(eG.t.WKWARY))), th && !E().isEqual(tu, t))) {
        let e = void 0 !== tu[tm],
            n = tm === eU.dx && t[eU.dx]?.disabled,
            r = "Firefox" === A().name && "" === tm && t[tm]?.name === "Default" && !t[tm]?.disabled;
        nn(e || n || r);
    }
}
function nD() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = ef.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let r = n === eP.W.USER ? eU.x.DEFAULT : eU.x.STREAM,
            i = r === eU.x.STREAM ? eU.Cn : eU.Hz,
            s = t[n] ?? {},
            { localMutes: a, localVolumes: o } = t7(r);
        for (let [e, t] of Object.entries(s))
            null == (0, e_.tM)(r, e) &&
                (t.muted ? (a[e] = !0) : delete a[e],
                t.volume !== i ? (o[e] = t.volume) : delete o[e],
                e9.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, r));
        if (e)
            for (let e of new Set([...Object.keys(a), ...Object.keys(o)]))
                null == s[e] &&
                    (delete a[e],
                    delete o[e],
                    e9.eachConnection((t) => {
                        t.setLocalVolume(e, i), t.setLocalMute(e, !1);
                    }, r));
        nm({ localMutes: a, localVolumes: o }, r);
    }
}
function nL(e) {
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
    (i = e.sessionId), (td = !1), (tp = !1);
    let t = t7();
    nf() && (np() ? rk(eU.rB.AUTOMATIC) : t.automaticAudioSubsystem && rU()),
        e9.supports(eU.O5.OFFLOAD_ADM_CONTROLS) && e9.setOffloadAdmControls(!0),
        (0, eI.isIOS)() &&
            (0, q.Y)("handleConnectionOpen").enabled &&
            e9.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
        (0, eh.Lb)({ location: "MediaEngineStore", autoTrackExposure: !1 }) &&
            null !== t.mostRecentlyRequestedVoiceFilter &&
            (0, eI.isDesktop)() &&
            (em.A.getLastInitAttemptMayHaveCrashed()
                ? (C.h.dispatch({ type: "AUDIO_SET_SELF_MUTE", mute: !0, context: eU.x.DEFAULT, playSoundEffect: !0 }),
                  nm({ mostRecentlyRequestedVoiceFilter: null }))
                : n(342887).md()),
        ny(t.inputDeviceId),
        nD();
}
function nx(e) {
    let { mediaEngineState: t } = e;
    (te = t.settingsByContext),
        (to = t.inputDevices),
        (tl = t.outputDevices),
        (t$ = t.appSupported),
        (tO = t.krispModuleLoaded),
        (c = t.krispVersion),
        (ti = t.goLiveContext);
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
            nA();
            break;
        case ew.S7L.RTC_CONNECTING:
            (tv = !1), (l = void 0), (u = void 0), (ty = !1), (tX = !1), tQ.stop(), tN.stop(), o.reset();
            break;
        case ew.S7L.RTC_CONNECTED:
            nn();
            break;
        case ew.S7L.DISCONNECTED:
            nK(), n$();
    }
}
function nG(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (td = t.mute || t.suppress), (tp = t.deaf), e9.eachConnection(ne);
            let e = null != t.guildId && null != t.channelId && null != tP && tP !== t.channelId,
                n = !tC && null == t.channelId;
            return nn(!e && !n && th), (tP = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== ev.default.getId() || null != eO.A.getChannelId() || nn(!1, null), e;
    }, !1);
}
function nF(e) {
    let { mute: t } = e;
    (t_ = t), e9.eachConnection(ne);
}
function nV(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = t7(t);
    if (t === eU.x.DEFAULT && (el.A.requestPermission(ex.iL.AUDIO), tf)) return !1;
    (r = !i && !r) || (i = !1), n || (tg = !0), nm({ mute: r, deaf: i }, t), e9.eachConnection(ne);
}
function nB(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    nm({ mute: n }, t), r || (tg = !0), e9.eachConnection(ne);
}
function nH(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== eP.oD.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    nD(!0);
}
function nj(e) {
    let { context: t } = e;
    nm({ deaf: !t7(t).deaf }, t), e9.eachConnection(ne);
}
function nY(e) {
    let { context: t, userId: n } = e;
    if (n === ev.default.getId()) return;
    let { localMutes: r } = t7(t);
    r[n] ? delete r[n] : (r[n] = !0),
        nm({ localMutes: r }, t),
        e9.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nW(e) {
    let { context: t, userId: n, videoToggleState: r, persist: i, isAutomatic: s } = e;
    h()(!(i && s), "These are not allowed to both be true.");
    let a = r === ew.bb8.DISABLED,
        { disabledLocalVideos: o } = t7(t),
        l = o[n] ?? !1,
        u = tY.has(n),
        c = r === ew.bb8.AUTO_ENABLED || r === ew.bb8.MANUAL_ENABLED;
    eF.info(`disableVideo=${a} currentlyDisabled=${l} currentlyAutoDisabled=${u}, isVideoShown=${c}`),
        h()(!(u && !l), "If you are auto-disabled, then you are also disabled.");
    let d = a !== l,
        _ = t === eU.x.DEFAULT,
        f = s && d && _,
        p = i && d && _;
    eF.info(`changed=${d} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${f} isManualToggleByUser=${p}`);
    let { videoToggleStateMap: m } = t7(t);
    if (
        (m[n] === ew.bb8.AUTO_PROBING &&
            r === ew.bb8.AUTO_ENABLED &&
            (0, eo.A)(n, a ? eU.Al.AUTO_DISABLE : eU.Al.AUTO_ENABLE, c),
        (m[n] = r),
        nm({ videoToggleStateMap: m }, t, i),
        r === ew.bb8.AUTO_PROBING
            ? eO.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
            : eO.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
        tW ||
            (eF.info(`isAutoDisableAllowed=${tW} - disabling VideoHealthManager`),
            eO.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
        f)
    ) {
        if ((!a && !u) || (a && !tW)) return;
        (0, eo.A)(n, a ? eU.Al.AUTO_DISABLE : eU.Al.AUTO_ENABLE, c), a ? tY.add(n) : tY.delete(n);
    } else
        p &&
            (u && !a
                ? (eF.info("disallowing auto-disable for this session because of manual override by user"),
                  (tW = !1),
                  eO.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                  (0, eo.A)(n, eU.Al.MANUAL_REENABLE, c))
                : (0, eo.A)(n, a ? eU.Al.MANUAL_DISABLE : eU.Al.MANUAL_ENABLE, c));
    _ && !a && tY.delete(n),
        a ? (o[n] = !0) : delete o[n],
        nm({ disabledLocalVideos: o }, t, i),
        e9.eachConnection((e) => e.setLocalVideoDisabled(n, o[n] ?? !1), t);
}
function nK() {
    if (0 === tY.size) return;
    let e = eU.x.DEFAULT,
        { disabledLocalVideos: t } = t7(e);
    tY.forEach((n) => {
        h()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            e9.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tY.clear(),
        nm({ disabledLocalVideos: t }, e, !1);
}
function n$() {
    let e = eU.x.DEFAULT,
        { videoToggleStateMap: t } = t7(e);
    for (let [e, n] of Object.entries(t)) n === ew.bb8.AUTO_PROBING && delete t[e];
    nm({ videoToggleStateMap: t }, e, !1);
}
function nz(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === ev.default.getId()) return;
    let i = t === eU.x.STREAM ? eU.Cn : eU.Hz,
        { localVolumes: s } = t7(t);
    r === i ? delete s[n] : (s[n] = r), nm({ localVolumes: s }, t), e9.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function nq(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: s } = t7(t);
    (s[n] = { left: r, right: i }), nm({ localPans: s }, t), e9.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function nZ(e) {
    let { context: t, mode: n, options: r } = e;
    nm({ mode: n, modeOptions: { ...r, updatedAt: Date.now() } }, t), e9.eachConnection(t8);
}
function nX(e) {
    let { volume: t } = e;
    nm({ inputVolume: t9(t) }), e9.setInputVolume(t);
}
function nQ(e) {
    let { volume: t } = e;
    nm({ outputVolume: t }), e9.setOutputVolume(t);
}
function nJ(e) {
    let { id: t } = e;
    (t = nS(to, t)),
        (ts = performance.now()),
        nm({ inputDeviceId: t }),
        nv(t),
        e9.eachConnection(nl),
        (l = void 0),
        (u = void 0),
        tQ.stop(),
        (tX = !1);
    let { resetSilenceWarningOnDeviceChange: n } = ee.A.getConfig({
        location: "MediaEngineStore.handleSetInputDevice",
    });
    n && ((ty = !1), o.reset());
}
function n0(e) {
    let { id: t } = e;
    nm({ outputDeviceId: (t = nS(tl, t)) }), e9.setAudioOutputDevice(t);
}
function n1(e) {
    let { id: t } = e;
    nm({ videoDeviceId: (t = nS(tu, t)) }), nn();
}
function n2(e) {
    let { inputProfile: t } = e;
    nm({ activeInputProfile: t });
    let n = t7();
    e9.eachConnection((e) => {
        t8(e), nl(e);
    }),
        e9.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        rr();
}
function n3(e) {
    return tr !== e.required && ((tr = e.required), e.required || e9.interact(), !0);
}
function n6(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    nN(t), nO(n), nb(r);
}
function n4(e) {
    let { inputVolume: t, outputVolume: n } = e;
    nm({ inputVolume: t9(t), outputVolume: n });
}
function n5(e) {
    let t = t7(),
        n = e9.getAudioSubsystem(),
        i = e9.getAudioLayer(),
        s = nS(to, t.inputDeviceId),
        a = to[s]?.name,
        o = (0, ec.A)(t.noiseCancellation, r.getSystemMicrophoneMode());
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
    let t = nm({ echoCancellation: e.enabled });
    e9.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), rr(), n5(e.location);
}
function n8(e) {
    re(e.enabled);
}
function n9(e) {
    let t = nm({ sidechainCompressionStrength: e.strength });
    e9.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function re(e) {
    let t = nm({ sidechainCompression: e });
    e9.setSidechainCompression(t.sidechainCompression);
}
function rt(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tK.add(n) : tK.delete(n), rn(), rr();
}
function rn() {
    let e = !tK.has("voice_filter_preview") && !tK.has("mic_test");
    e9.setMaybePreprocessMute(e);
}
function rr() {
    let e = t7(),
        t = tK.size > 0,
        n = e.inputDeviceId,
        r = eC.A.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        s = eC.A.hasNoiseSuppression(n) || e.noiseSuppression,
        a = ns(eC.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        o = e.noiseCancellation,
        l = null !== tL,
        u = tK.has("voice_filter") && 1 === tK.size;
    e9.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: s,
        automaticGainControlConfig: a,
        noiseCancellation: o,
        voiceFilters: l,
        loopbackUseAudioMode: u,
    });
}
async function ri() {
    if (!e9.supports(eU.O5.VAAPI)) return;
    let e = 4098;
    if (window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let t = await window.DiscordNative.processUtils.getSystemInfo();
    (t.electronGPUInfo?.gpuDevice ?? []).some((t) => t.vendorId === e) &&
        ((t1 = !0), (t0 = e9.supports(eU.O5.GAMESCOPE_CAPTURE)));
}
function rs(e) {
    let t = nm({ noiseSuppression: e.enabled });
    e9.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), rr(), n5(e.location);
}
function ra(e) {
    let t = nm({ automaticGainControl: e.enabled });
    e9.eachConnection((e) => na(e, t.automaticGainControl)), rr(), n5(e.location);
}
function ro(e) {
    let t = nm({ noiseCancellation: e.enabled });
    e9.eachConnection((e) => no(e, t.noiseCancellation)), rr(), n5(e.location);
}
function rl(e) {
    eu.A.setKrispModelOverride(e.model), (_ = e.model), rr();
}
function ru(e) {
    (0, eI.isWeb)() || ((tD = e.enabled), e9.setNoiseCancellationEnableStats?.(e.enabled));
}
function rc(e) {
    nm({ silenceWarning: e.enabled });
}
function rd(e) {
    e9.setDebugLogging(e.enabled);
}
function r_(e) {
    let { level: t } = e;
    (d = t), eu.A.setKrispSuppressionLevel(t);
}
function rf(e) {
    nm({ videoHook: e.enabled });
}
function rp(e) {
    nm({ experimentalSoundshare2: e.enabled });
}
function rh(e) {
    let { enabled: t } = e;
    nm({ useSystemScreensharePicker: t });
}
function rm(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = nm({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r });
    e9.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function rE(e) {
    let { enabled: t } = e;
    nm({ qos: t }), e9.eachConnection((e) => e.setQoS(t));
}
function rg() {
    nE();
}
function rA(e) {
    let { osVolume: t, osMuted: n } = e;
    (u = t), (l = n);
}
function rI(e) {
    let { inputDetected: t } = e;
    if (null == t) return !1;
    if (((tv = !0 !== ty && !t), t)) (ty = !0), (tX = !1), tQ.stop(), tN.stop();
    else if (t7().mode === ew.TBI.VOICE_ACTIVITY && ty) {
        let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = ee.A.getConfig({
            location: "MediaEngineStore.handleInputDetected",
        });
        e &&
            tQ.start(eJ, () => {
                eE.default.track(ew.HAw.HARDWARE_MUTE_GUESSED, {
                    input_device_name: to[nS(to, t7().inputDeviceId)]?.name,
                    rtc_connection_id: eO.A.getRTCConnectionId(),
                }),
                    (tX = !0),
                    r.emitChange();
            }),
            null != t &&
                tN.start(t * eA.A.Millis.MINUTE, () => {
                    (ty = !1), o.reset();
                });
    }
}
function rT(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === tf) return !1;
    (tf = n), e9.eachConnection(ne);
}
function rS(e) {
    let { state: t, permissionType: n } = e,
        r = t === ex.hL.ACCEPTED;
    switch (n) {
        case ex.iL.AUDIO:
            (tH = !0), e9.eachConnection(ne);
            break;
        case ex.iL.CAMERA:
            !r && th && nn(!1);
            break;
        default:
            return !1;
    }
}
function ry() {
    return tO || !1;
}
async function rv() {
    try {
        await eS.Ay.ensureModule("discord_krisp");
        let e = eS.Ay.requireModule("discord_krisp");
        (tO = !0),
            (c = e.getSdkVersion?.()),
            (d = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (tb = e), r.emitChange();
            }),
            r.emitChange();
    } catch (t) {
        eF.warn(`Failed to load Krisp module: ${t.message}`), eT.A.captureException(t);
        let e = eU.CO.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eU.CO.INITIALIZED : n;
        }
        eE.default.track(ew.HAw.VOICE_PROCESSING, { noise_canceller_error: e }), nm({ noiseCancellation: !1 });
    } finally {
        tR = !1;
    }
}
function rN() {
    return (0, eI.isWindows)() || (0, eI.isLinux)() || (0, eI.isMac)();
}
function rC() {
    !rN() || __OVERLAY__ || tR || tO
        ? (0, eI.isWeb)() && e9.supports(eU.O5.NOISE_CANCELLATION)
            ? ((tO = !0), r.emitChange())
            : (0, eI.isWeb)() && nm({ noiseCancellation: !1 })
        : ((tR = !0), rv());
}
async function rR() {
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
function rO() {
    (0, eI.isLinux)() && rR();
}
function rb(e) {
    let { enabled: t } = e;
    eE.default.track(ew.HAw.VOICE_FILTER_PLAYBACK_TOGGLED, { active_voice_filter_id: tL ?? null, enabled: t }),
        nm({ voiceFilterPlaybackEnabled: t });
}
function rD(e) {
    let { newVoiceFilterId: t } = e;
    nm({ mostRecentlyRequestedVoiceFilter: t }), e9.eachConnection((e) => e.setVoiceFilterId(t));
}
function rL() {
    nm({ mostRecentlyRequestedVoiceFilter: null });
}
function rw(e) {
    let { deviceId: t, active: n, available: r } = e;
    tF[t] = { active: n, available: r };
}
function rM(e) {
    let { voiceFilterId: t } = e;
    (tM = tL), (tx = tw), (tL = t), (tw = null === t ? null : Date.now());
}
function rx(e) {
    let t = e.bypassEnabled;
    nm({ bypassSystemInputProcessing: t }), e9.setAudioInputBypassSystemProcessing(t), n5(e.location);
}
function rP(e) {
    rk(e.subsystem);
}
function rk(e) {
    e === eU.rB.AUTOMATIC
        ? (nm({ automaticAudioSubsystem: !0 }), rU())
        : (nm({ automaticAudioSubsystem: !1 }), e9.setAudioSubsystem(e));
}
function rU() {
    e9.queueAudioSubsystem(eU.rB.EXPERIMENTAL);
}
function rG(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && nn(i, null), null != t || null == n)) {
        tC = !1;
        return;
    }
    if (tC) return;
    tC = !0;
    let s = t7();
    (s.mute || s.deaf) && (nm({ deaf: !1, mute: !1 }), e9.eachConnection(ne));
}
function rF(e) {
    let { application: t } = e;
    tt.add(t.id);
}
function rV(e) {
    let { application: t } = e;
    tt.delete(t.id);
}
function rB(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (tn = !1), e9.eachConnection(ne);
                break;
            case "video":
                nn(!1);
        }
}
function rH(e) {
    (tn = e.enabled), e.unmute && nm({ mute: !1, deaf: !1 }), e9.eachConnection(ne);
}
function rj(e) {
    let { enabled: t } = e;
    el.A.requestPermission(ex.iL.CAMERA), nn(t);
}
function rY(e) {
    let { sourceId: t, applicationName: n, quality: i } = e;
    if (!(0, M.Ao)() || null == R.A) return !1;
    let s = null,
        o = null,
        l = eg.A.getPidFromDesktopSource(t);
    ({ soundshareId: s, soundshareSession: o } = nL(l));
    let u = { desktopSource: { id: t, sourcePid: l, soundshareId: s, soundshareSession: o }, quality: i };
    null != a &&
        (e9.setClipsSource(null),
        (0, eI.isWindows)() && null != a.desktopSource.soundshareId && O.c1(a.desktopSource.soundshareId)),
        null != s && nw(s, o),
        (a = u);
    let c = t3("MediaEngineStore clips"),
        d = t7().videoHook;
    e9.setClipsSource({
        desktopDescription: {
            id: a.desktopSource.id,
            soundshareId: a.desktopSource.soundshareId,
            useVideoHook: d,
            useGraphicsCapture: nc(),
            useCaptureDeviceForEncode: !1,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: n_(),
            videoHookStaleFrameTimeoutMs: e$,
            graphicsCaptureStaleFrameTimeoutMs: ez,
            hdrCaptureMode: c,
        },
        quality: i,
        applicationName: n,
    });
}
function rW(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((a = null), e9.setClipsSource(null));
}
function rK(e) {
    let { settings: t } = e;
    if (t?.desktopSettings != null) {
        let e = null,
            n = null,
            { sourceId: r, sound: i } = t.desktopSettings,
            s = t.context ?? eU.x.DEFAULT,
            a = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
            o = !1 === i ? null : eg.A.getPidFromDesktopSource(r);
        eI.isPlatformEmbedded &&
            !0 === i &&
            (({ soundshareId: e, soundshareSession: n } = nL(o)), null != e && nw(e, n)),
            nt(s),
            nn(s === eU.x.STREAM && th, {
                desktopSource: { id: r, sourcePid: o, soundshareId: e, soundshareSession: n },
                quality: { resolution: a.resolution, frameRate: a.frameRate },
            });
    } else if (t?.cameraSettings != null) {
        let e = t.context ?? eU.x.DEFAULT,
            { videoDeviceGuid: n, audioDeviceGuid: r } = t.cameraSettings,
            i = e === eU.x.STREAM && th,
            s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
        nn(i, {
            cameraSource: { videoDeviceGuid: n, audioDeviceGuid: r },
            quality: { resolution: s.resolution, frameRate: s.frameRate },
        });
    } else nn(th, null);
}
function r$(e) {
    let { section: t } = e;
    return t === ew.nc_.VOICE && nA(), !1;
}
function rz() {
    return e9.eachConnection(nl), !1;
}
function rq(e) {
    let { enabled: t } = e,
        n = nm({ aecDumpEnabled: t });
    e9.setAecDump(n.aecDumpEnabled);
}
function rZ(e) {
    let { enabled: t } = e;
    nm({ openH264Enabled: t }), eS.Ay?.setOpenH264Enabled?.(t);
}
function rX(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (te = Object.values(eU.x).reduce((e, n) => {
        let r = n,
            i = e7();
        return (e[r] = E().merge(i, t[r])), e;
    }, {})),
        v.w.set(eV, te),
        ng();
}
function rQ(e) {
    let { state: t } = e,
        n = G.A.isEnabled();
    if (t === ew.g6G.BACKGROUND && th && !n) (tT = !0), nn(!1);
    else {
        if (t !== ew.g6G.ACTIVE || !tT) return !1;
        (tT = !1), nn(!0);
    }
    return !0;
}
function rJ(e) {
    e9.eachConnection((t) => t.setBitRate(e.bitrate));
}
function r0() {
    if ((!th && null == s) || null != eO.A.getRTCConnectionId()) return !1;
    nn(!1, null);
}
function r1() {
    return !!tk && ((tk = !1), !0);
}
function r2(e) {
    e9.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function r3(e) {
    let { settings: t } = e;
    e9.applyMediaFilterSettings(t).finally(() => {
        (tU = !1), r.emitChange();
    });
}
function r6() {
    tU = !0;
}
function r4() {
    tU = !1;
}
function r5(e) {
    tZ = e.enabled;
}
function r7() {
    if ((0, eI.isDesktop)() && eI.isPlatformEmbedded && !t2) {
        t2 = !0;
        let e = async () => {
            let t = await new Promise((e) => {
                eS.Ay.pollQueueMetrics((t) => {
                    e(t);
                });
            });
            t.periodMs = eU.tl;
            let n = r9(t);
            null !== n && eE.default.track(ew.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, eU.tl);
        };
        setTimeout(e, eU.tl);
    }
}
class r8 extends S.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        nu(),
            nh(),
            rC(),
            rO(),
            n$(),
            r7(),
            (0, eI.isWindows)() && eI.isPlatformEmbedded && ni(),
            (t$ = {
                [eU.O5.VIDEO]: e9.supports(eU.O5.VIDEO),
                [eU.O5.DESKTOP_CAPTURE]: e9.supports(eU.O5.DESKTOP_CAPTURE),
                [eU.O5.HYBRID_VIDEO]: e9.supports(eU.O5.HYBRID_VIDEO),
            }),
            this.waitFor(ev.default, eN.A, eC.A, eR.A, L.A, U.A, eO.A, F.Ay, ef.A, eD.default, eL.A, em.A);
    }
    supports(e) {
        return e9.supports(e);
    }
    supportsInApp(e) {
        return t$[e] || e9.supports(e);
    }
    isSupported() {
        return e9.supported();
    }
    isNoiseSuppressionSupported() {
        return e9.supports(eU.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return ry();
    }
    isNoiseCancellationError() {
        return tk;
    }
    isAutomaticGainControlSupported() {
        return e9.supports(eU.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !np() && (e9.supports(eU.O5.LEGACY_AUDIO_SUBSYSTEM) || e9.supports(eU.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return e9.supports(eU.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === e9.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return ry();
    }
    isAecDumpSupported() {
        return e9.supports(eU.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return e9.supports(eU.O5.VIDEO) && e9.supports(eU.O5.SIMULCAST);
    }
    getAecDump() {
        return t7().aecDumpEnabled;
    }
    getMediaEngine() {
        return e9;
    }
    getVideoComponent() {
        return e9.Video;
    }
    getCameraComponent() {
        return e9.Camera;
    }
    getKrispSuppressionLevel() {
        return d ?? 100;
    }
    getKrispEnableStats() {
        return tD;
    }
    isEnabled() {
        return tn;
    }
    isMute() {
        return this.isSelfMute() || td;
    }
    isDeaf() {
        return this.isSelfDeaf() || tp;
    }
    hasContext(e) {
        return null != te[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.DEFAULT;
        return e === eU.x.DEFAULT && t_;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.DEFAULT;
        return (
            !this.isEnabled() ||
            t7(e).mute ||
            !el.A.didHavePermission(ex.iL.AUDIO) ||
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
            t = tX && "voice_isolation" !== this.getSystemMicrophoneMode() && t7(e).mode === ew.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (eC.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return tZ;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.DEFAULT;
        return !this.isSupported() || t7(e).deaf;
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
        return ti === e && null != s;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.STREAM;
        return ti === e && null != s && s.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eU.x.DEFAULT;
        return e !== ev.default.getId() && (t7(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return e9.supports(eU.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eU.x.DEFAULT;
        return t7(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eU.x.DEFAULT;
        return t7(t).videoToggleStateMap[e] ?? ew.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eU.x.DEFAULT;
        return t === eU.x.DEFAULT && tY.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.DEFAULT;
        return e === eU.x.DEFAULT && tY.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tU;
    }
    isNativeAudioPermissionReady() {
        return tH;
    }
    getGoLiveSource() {
        return s;
    }
    getGoLiveContext() {
        return ti;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return ts;
    }
    isH264MfDecodeAvailable() {
        return ta;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eU.x.DEFAULT,
            n = t7(t).localPans[e];
        return null != n ? n : eK;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eU.x.DEFAULT,
            n = t === eU.x.STREAM ? eU.Cn : eU.Hz,
            r = t7(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return t7().inputVolume;
    }
    getOutputVolume() {
        return t7().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.DEFAULT;
        return t7(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.DEFAULT;
        return t7(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return tL;
    }
    getActiveVoiceFilterAppliedAt() {
        return tw;
    }
    getPreviousVoiceFilter() {
        return tM;
    }
    getPreviousVoiceFilterAppliedAt() {
        return tx;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return t7().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return t7().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            E().each(te, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === ew.TBI.PUSH_TO_TALK && tt.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nS(to, t7().inputDeviceId);
    }
    getOutputDeviceId() {
        return nS(tl, t7().outputDeviceId);
    }
    getVideoDeviceId() {
        return nS(tu, t7().videoDeviceId);
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
        let e = t7();
        return eC.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return e9.supports(eU.O5.SIDECHAIN_COMPRESSION) && t7().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return t7().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return t7().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tV && tV;
    }
    getOpenH264Enabled() {
        return (0, eI.isLinux)() && t7().openH264Enabled;
    }
    getLoopback() {
        return tK.size > 0;
    }
    getLoopbackReasons() {
        return tK;
    }
    getNoiseSuppression() {
        let e = t7();
        return eC.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = t7();
        return eC.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return t7().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return t7().noiseCancellation;
    }
    getHardwareEncoding() {
        return e0;
    }
    getEnableSilenceWarning() {
        return t7().silenceWarning;
    }
    getDebugLogging() {
        return e9.getDebugLogging();
    }
    getQoS() {
        return t7().qos;
    }
    getAttenuation() {
        return t7().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return t7().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return t7().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return nf() && t7().automaticAudioSubsystem ? eU.rB.AUTOMATIC : e9.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return e9.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return t7().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === ek.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.DEFAULT;
        return t7(e);
    }
    getState() {
        return {
            settingsByContext: te,
            inputDevices: to,
            outputDevices: tl,
            appSupported: t$,
            krispModuleLoaded: tO,
            krispVersion: c,
            krispSuppressionLevel: d,
            goLiveSource: s,
            goLiveContext: ti,
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
        e9.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return tr;
    }
    getVideoHook() {
        return t7().videoHook;
    }
    supportsVideoHook() {
        return e9.supports(eU.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = t7().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return e9.supports(eU.O5.EXPERIMENTAL_SOUNDSHARE) && T().satisfies(R.A?.os.release, eM.$x);
    }
    supportsHookSoundshare() {
        return (0, eI.isWindows)() && e9.supports(eU.O5.SOUNDSHARE) && T().satisfies(R.A?.os.release, eM.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = t7().useSystemScreensharePicker,
            n = (0, eI.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return e9.supports(eU.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return t1;
    }
    getUseGamescopeCapture() {
        return t0;
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
        return t7().modeOptions.vadKrispActivationThreshold ?? eW;
    }
    hasActiveCallKitCall() {
        return tJ;
    }
    setHasActiveCallKitCall(e) {
        tJ = e;
    }
    supportsScreenSoundshare() {
        return (0, eI.isMac)()
            ? e9.supports(eU.O5.SOUNDSHARE) && T().satisfies(R.A?.os.release, eM.P$) && n_()
            : (0, eI.isWindows)()
              ? e9.supports(eU.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, eI.isLinux)() && e9.supports(eU.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, eI.isWindows)()) {
            if (this.getBypassSystemInputProcessing()) return;
            return tF[this.getInputDeviceId()]?.active?.find((e) => e === e1);
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
        return e9.fetchAsyncResources(e);
    }
    startDavePreload() {
        if (!tG && ((tG = !0), (0, eI.isWeb)())) {
            let e = { fetchDave: !0 };
            e9.fetchAsyncResources(e).catch((e) => {
                eF.warn("DAVE preload failed:", e), eT.A.captureException(e);
            });
        }
    }
    getSupportedSecureFramesProtocolVersion() {
        return e9.getSupportedSecureFramesProtocolVersion();
    }
    hasClipsSource() {
        return null != a;
    }
    getGpuBrand() {
        return tz;
    }
}
function r9(e) {
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
(r = new r8(C.h, {
    VOICE_CHANNEL_SELECT: rG,
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
    AUDIO_SET_NOISE_SUPPRESSION: rs,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: ra,
    AUDIO_SET_NOISE_CANCELLATION: ro,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: rl,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: rc,
    AUDIO_SET_DEBUG_LOGGING: rd,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: r_,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: ru,
    MEDIA_ENGINE_SET_VIDEO_HOOK: rf,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: rp,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: rh,
    AUDIO_SET_ATTENUATION: rm,
    AUDIO_SET_QOS: rE,
    MEDIA_ENGINE_DEVICES: n6,
    AUDIO_VOLUME_CHANGE: n4,
    AUDIO_RESET: rg,
    AUDIO_INPUT_DETECTED: rI,
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: rA,
    AUDIO_SET_SUBSYSTEM: rP,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rx,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rH,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rj,
    MEDIA_ENGINE_PERMISSION: rB,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rK,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: n1,
    MEDIA_ENGINE_INTERACTION_REQUIRED: n3,
    USER_SETTINGS_MODAL_INIT: r$,
    USER_SETTINGS_MODAL_SET_SECTION: r$,
    CERTIFIED_DEVICES_SET: rz,
    RPC_APP_CONNECTED: rF,
    RPC_APP_DISCONNECTED: rV,
    OVERLAY_INITIALIZE: nx,
    APP_STATE_UPDATE: rQ,
    SET_CHANNEL_BITRATE: rJ,
    SET_VAD_PERMISSION: rT,
    SET_NATIVE_PERMISSION: rS,
    SET_CHANNEL_VIDEO_QUALITY_MODE: r2,
    MEDIA_ENGINE_SET_AEC_DUMP: rq,
    MEDIA_ENGINE_SET_OPENH264_ENABLED: rZ,
    MEDIA_ENGINE_RESET_SETTINGS: rX,
    CHANNEL_DELETE: r0,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: r1,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: r3,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: r6,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: r4,
    USER_SETTINGS_PROTO_UPDATE: nH,
    CLIPS_INIT: rY,
    CLIPS_SETTINGS_UPDATE: rW,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: r5,
    VOICE_FILTER_REQUEST_SWITCH: rD,
    VOICE_FILTER_LOOPBACK_TOGGLE: rb,
    VOICE_FILTER_APPLIED: rM,
    VOICE_FILTER_DOWNLOAD_FAILED: rL,
    VOICE_FILTER_APPLY_FAILED: rL,
    MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: rw,
})),
    (o = new Z.A(e9, r));
let ie = r;
