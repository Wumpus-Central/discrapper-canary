"use strict";
let r, i, s, a, o, l, u, c, d, _, f;
n.d(t, { Ay: () => r9 }), n(323874), n(14289), n(35956), n(321073), n(790599);
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
    j = n(820344),
    Y = n(638188),
    W = n(269377),
    K = n(934341),
    $ = n(658046),
    z = n(621963),
    q = n(532055),
    Z = n(227493),
    X = n(264866),
    Q = n(927170),
    J = n(233232),
    ee = n(140175);
n(491642);
var et = n(801644),
    en = n(223572),
    er = n(993628),
    ei = n(886124),
    es = n(165479),
    ea = n(896014),
    eo = n(765396),
    el = n(75076),
    eu = n(674966),
    ec = n(559633),
    ed = n(3527),
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
let e7 = null;
async function e8() {
    if (!(0, eI.isMac)() || R.A?.os.arch !== "arm64" || R.A?.processUtils?.getSystemInfo == null) {
        e7 = !1;
        return;
    }
    let e = await R.A.processUtils.getSystemInfo(),
        t = e.cpus?.[0]?.model ?? "";
    eF.info("Detected Mac CPU", t);
    let n = t.match(/Apple M(\d+)/);
    if (null == n) {
        e7 = !0;
        return;
    }
    e7 = parseInt(n[1], 10) >= 3;
}
function e9() {
    return !0 === e7;
}
function te() {
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
        videoHook: tn.supports(eU.O5.VIDEO_HOOK),
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
let tt = {
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
    tn = (0, y.hB)((0, y.WI)());
eF.enableNativeLogger(!0);
let tr = {},
    ti = new Set([eU.x.DEFAULT]),
    ts = tn.supports(eU.O5.AUTO_ENABLE),
    ta = !1,
    to = eU.x.STREAM,
    tl = performance.now(),
    tu = null,
    tc = { [eU.dx]: nS("No Input Devices") },
    td = { [eU.dx]: nS("No Output Devices") },
    t_ = { [eU.dx]: nS("No Video Devices") },
    tf = new N.Ep(),
    tp = !1,
    th = !1,
    tm = !1,
    tE = !1,
    tg = !1,
    tA = eU.qe,
    tI = eU.qe,
    tT = !1,
    tS = !1,
    ty = new N.Ep(),
    tv = !1,
    tN = !1,
    tC = !1,
    tR = !1,
    tO = new N.Ep(),
    tb = !1,
    tD = !1,
    tL = !1,
    tw = [],
    tM = !1,
    tx = null,
    tP = null,
    tk = null,
    tU = null,
    tG = null,
    tF = !1,
    tV = !1,
    tB = !1,
    tH = null,
    tj = null,
    tY = !1;
eu.A.hasPermission(ex.iL.AUDIO, { showAuthorizationError: !1 }),
    eu.A.hasPermission(ex.iL.CAMERA, { showAuthorizationError: !1 });
let tW = !1,
    tK = new Set(),
    t$ = tW,
    tz = new Set(),
    tq = {},
    tZ = null,
    tX = null,
    tQ = !0,
    tJ = !1,
    t0 = new N.Ep(),
    t1 = !1,
    t2 = !1,
    t3 = !1,
    t6 = !1;
function t4(e) {
    return (0, z.p)({ location: e }).hdrCaptureMode;
}
async function t5() {
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
function t7() {
    return null != tj ? tj : "u" > typeof window ? (tj = t5().then((e) => ((tH = e), e))) : Promise.resolve(!1);
}
function t8() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.DEFAULT,
        t = tr[e];
    return null == t && ((t = te()), (tr[e] = t)), t;
}
function t9() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.DEFAULT,
        t = t8(e),
        n = tt[t.activeInputProfile ?? ek.m.CUSTOM],
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
function ne(e) {
    let t = t9(e.context),
        n = t.mode;
    e.context === eU.x.DEFAULT && (0, ee.N)(!1, !1);
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
function nt(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eU.Hz;
    return E().clamp(e, 0, t);
}
function nn(e) {
    let t = t9(e.context),
        n = !ts || t.mute || t.deaf;
    e.context === eU.x.DEFAULT
        ? (n = n || tp || th || tm || !eu.A.didHavePermission(ex.iL.AUDIO))
        : e.context === eU.x.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eU.x.DEFAULT && b.A.updateNativeMute();
}
function nr(e) {
    e !== to && (null != s && tn.setGoLiveSource(null, to), (to = e));
}
function ni() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tg,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
        n = s;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, eI.isWindows)() && O.c1(n.desktopSource.soundshareId),
            tn.setGoLiveSource(null, to)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            tn.setGoLiveSource(null, to),
        tg || e)
    ) {
        let t = t9().videoDeviceId;
        tg && t === eU.dx && tI === eU.dx && tA !== eU.qe ? (t = tA) : (tI = t),
            (tA = (tg = e) ? nv(t_, t) : eU.qe),
            tn.setVideoInputDevice(tA);
    }
    if (((s = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = t4("MediaEngineStore go live"),
                i = t9().videoHook,
                s = n_(),
                a = s ? (nf() ? eM.zl : eM.eg) : 0,
                o = !1;
            (0, eI.isWindows)() &&
                a >= eM.zl &&
                (o =
                    !0 === tX
                        ? es.q.getConfig({ location: "updateVideo" }).enabled
                        : ei.d.getConfig({ location: "updateVideo" }).enabled),
                tn.setGoLiveSource(
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
                            allowScreenCaptureKit: np(),
                            videoHookStaleFrameTimeoutMs: e$,
                            graphicsCaptureStaleFrameTimeoutMs: ez,
                            hdrCaptureMode: n,
                            enableGlobalFramePoolLock: (0, $.H)({ location: "updateVideo" }).enabled,
                            useGraphicsCaptureDirtyRegions: o,
                        },
                        quality: e,
                    },
                    to,
                );
        }
        null != t.cameraSource &&
            tn.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: t.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: t.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                to,
            );
    }
}
function ns(e) {
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
function na() {
    null === tu &&
        tn
            .getCodecSurvey()
            .then((e) => {
                try {
                    let t = JSON.parse(e);
                    if (null == t || null == t.available_video_decoders) throw Error("decoder survey is not available");
                    tu = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                } catch (e) {
                    eF.error("Failed to parse codec survey", e), (tu = !1);
                }
            })
            .catch((e) => {
                eF.error("Failed to get codec survey", e), (tu = !1);
            })
            .finally(() => {
                C.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
            });
}
function no(e) {
    let t = (0, B.F)({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function nl(e, t) {
    e.setAutomaticGainControl(no(t));
}
function nu(e, t) {
    let n = (0, ed.A)(t, r.getSystemMicrophoneMode());
    n !== t && eF.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: i } = (0, B.F)({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(i);
    let { noiseCancellationAfterProcessing: s, vadAfterWebrtc: a } = (0, Q.$)({ location: "setNoiseCancellation" });
    e.setNoiseCancellationAfterProcessing(s), e.setVADAfterWebrtc(a);
}
function nc(e) {
    let t = t9(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eC.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eC.A.hasNoiseSuppression(n) || t.noiseSuppression),
        nl(e, eC.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        nu(e, t.noiseCancellation),
        e.setVoiceFilterId(tx),
        (0, eI.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function nd() {
    tf.start(eQ, () => {
        eF.error("Device enumeration timed out"), eE.default.track(ew.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
    }),
        tn.on(y.bg.Connection, (e) => {
            ne(e), nn(e), nc(e);
            let t = t9();
            e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
                e.setQoS(t.qos),
                (0, eI.isWindows)()
                    ? (e.setExperimentFlag(eU.fd.H265_HARDWARE_ONLY, !0),
                      t7().then((t) => {
                          e.setExperimentFlag(eU.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                      }),
                      (0, q.W)({ location: "setupMediaEngine" }).enabled &&
                          e.setExperimentFlag(eU.fd.H264_MF_ZERO_COPY, !0))
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
                (0, J.J)({ location: "setupMediaEngine" }).enabled &&
                    e.setExperimentFlag(eU.fd.LOW_LATENCY_RATE_CONTROL, !0);
            let l = !1,
                u = !0;
            e.setExperimentFlag(eU.fd.RESET_DECODER_ON_ERRORS, !0),
                l && e.setExperimentFlag(eU.fd.SOFTWARE_FALLBACK_ON_ERRORS, !0),
                u && e.setExperimentFlag(eU.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
            let { swallowVolumeOnlySpeakingEvents: c } = D.A.getConfig({ location: "MediaEngineStore" });
            if ((c && e.setExperimentFlag(eU.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === eU.x.STREAM)) {
                let t = nC(td);
                e.setSoundshareDiscardRearChannels(t);
            }
            if ((0, eI.isWindows)())
                e.setExperimentFlag(eU.fd.SIGNAL_AV1, !0), e.setExperimentFlag(eU.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            else if ((0, eI.isMac)())
                if ((e.setExperimentFlag(eU.fd.SIGNAL_AV1_DECODE, !0), e9())) {
                    let { enabled: t } = (0, j.t)("MediaEngineStore");
                    t
                        ? (eF.info("This Mac supports AV1 Hardware. AV1 Hardware enabled."),
                          e.setExperimentFlag(eU.fd.SIGNAL_AV1_HARDWARE_DECODE, !0))
                        : eF.info("This Mac supports AV1 Hardware. AV1 Hardware not yet enabled.");
                } else eF.info("This Mac does not support AV1 Hardware.");
            else if ((0, eI.isLinux)()) e.setExperimentFlag(eU.fd.SIGNAL_AV1_DECODE, !0);
            else if ((0, eI.isIOS)() && e5()) {
                let { enabled: t } = (0, H.$)("MediaEngineStore");
                t &&
                    (e.setExperimentFlag(eU.fd.SIGNAL_AV1_DECODE, !0),
                    e.setExperimentFlag(eU.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
            }
            if ((0, eI.isWeb)()) {
                let { enabled: t } = (0, K.O)("MediaEngineStore");
                e.setExperimentFlag(eU.fd.BROWSER_HEVC, t);
            }
            for (let n of ((0, eI.isWindows)() &&
                tZ?.startsWith("AMD") &&
                (0, ea.F)("MediaEngineStore").enabled &&
                e.setExperimentFlag(eU.fd.WMF_GPU_ENCODE, !0),
            (0, eI.isWindows)() &&
                tZ?.startsWith("Intel") &&
                (0, eo.J)("MediaEngineStore").enabled &&
                e.setExperimentFlag(eU.fd.WMF_GPU_ENCODE, !0),
            (0, eI.isWindows)() &&
                tZ?.startsWith("Qualcomm") &&
                (0, ea.F)("MediaEngineStore").enabled &&
                e.setExperimentFlag(eU.fd.WMF_GPU_ENCODE, !0),
            tn.setHasFullbandPerformance((0, P.A)()),
            e.setRemoteAudioHistory(1e3),
            (0, w.A)(r) && e.setClipsKeyFrameInterval(eU.X1),
            (t = t9(e.context)),
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
                    ((tS = !1),
                    e.on(y.yq.SpeakingWhileMuted, () => {
                        let e = !tS;
                        (tS = !0),
                            e && r.emitChange(),
                            ty.start(eX, () => {
                                (tS = !1), r.emitChange();
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
                        (0, k.QW)({ type: k.iy.NOISE_CANCELLER_ERROR, underlyingError: ns(e) }),
                        (tF = !0),
                        eE.default.track(ew.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        C.h.dispatch({ type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: !0 }),
                        C.h.dispatch({ type: "AUDIO_SET_NOISE_CANCELLATION", enabled: !1 }),
                        C.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e });
                }),
                e.on(y.yq.VoiceActivityDetectorError, (e) => {
                    eF.warn(`voiceactivitydetectorerror event: ${e}`),
                        (0, k.QW)({ type: k.iy.NOISE_CANCELLER_ERROR, underlyingError: ns(e) }),
                        eE.default.track(ew.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        C.h.dispatch({
                            type: "AUDIO_SET_MODE",
                            context: eU.x.DEFAULT,
                            mode: ew.TBI.VOICE_ACTIVITY,
                            options: { ...t9(eU.x.DEFAULT).modeOptions, vadUseKrisp: !1 },
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
                    tn.supports(eU.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                    tn.setAsyncVideoInputDeviceInit(!0);
        }),
        tn.on(y.bg.DeviceChange, (e, t, n) => {
            tf.stop(),
                C.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
        }),
        tn.on(y.bg.VolumeChange, (e, t) => {
            C.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
        }),
        tn.on(y.bg.DesktopSourceEnd, (e, t) => {
            C.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
        }),
        tn.on(y.bg.AudioPermission, (e) => {
            (tY = !0), C.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
        }),
        tn.on(y.bg.VideoPermission, (e) => {
            C.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
        }),
        tn.on(y.bg.WatchdogTimeout, async () => {
            let e;
            if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                try {
                    await eg.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                } catch (t) {
                    "number" == typeof t.status && (e = t.status);
                }
            eF.warn(`Watchdog timeout, report submission status: ${e ?? 200}`);
            let t = er.A.getConfig({ location: "watchdog_timeout" }).enabled && null != R.A.processUtils.setCrashReason;
            eE.default.track(
                ew.HAw.VOICE_WATCHDOG_TIMEOUT,
                { minidump_submission_error: e, will_restart: t },
                { flush: !0 },
            ),
                t &&
                    (eF.info("Relaunching app due to voice watchdog timeout"),
                    await R.A.processUtils.setCrashReason("voice-watchdog-timeout"),
                    v.w.set("discord_watchdog_restart_timestamp", Date.now().toString()),
                    R.A.app.relaunch());
        }),
        tn.on(y.bg.VideoInputInitialized, (e) => {
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
        tn.on(y.bg.AudioInputInitialized, (e) => {
            eE.default.track(ew.HAw.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * eA.A.Millis.SECOND),
                rtc_connection_id: eO.A.getRTCConnectionId(),
            });
        }),
        tn.on(y.bg.ClipsRecordingRestartNeeded, () => {
            C.h.dispatch({ type: "CLIPS_RESTART" });
        }),
        tn.on(y.bg.ClipsInitFailure, (e, t) => {
            C.h.wait(() => {
                C.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t });
            });
        }),
        tn.on(y.bg.ClipsRecordingEnded, (e, t) => {
            a?.desktopSource?.id === e && (null != t && s?.desktopSource?.soundshareId !== t && O.c1(t), (a = null));
        }),
        tn.on(y.bg.NativeScreenSharePickerUpdate, (e, t) => {
            C.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
        }),
        tn.on(y.bg.NativeScreenSharePickerCancel, (e) => {
            C.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
        }),
        tn.on(y.bg.NativeScreenSharePickerError, (e) => {
            C.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
        }),
        tn.on(y.bg.AudioDeviceModuleError, (e, t, n) => {
            eE.default.track(ew.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
        }),
        tn.on(y.bg.VideoCodecError, (e) => {
            let t = "encode" === e.mode ? k.iy.VIDEO_ENCODE_ERROR : k.iy.VIDEO_DECODE_ERROR,
                n = { videoCodec: e.codecStandard, errorMessage: e.message };
            (0, k.QW)(
                t === k.iy.VIDEO_ENCODE_ERROR
                    ? { type: t, ...n, videoEncoder: e.implName }
                    : { type: t, ...n, videoDecoder: e.implName },
            );
        }),
        tn.on(y.bg.ConnectionStats, (e) => {
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
        tn.on(y.bg.VoiceQueueMetrics, (e) => {
            let t = r8(e);
            null !== t && eE.default.track(ew.HAw.VOICE_QUEUE_METRICS, t);
        }),
        tn.setOnVideoContainerResized((e, t, n) => {
            C.h.wait(() =>
                C.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
            );
        }),
        e8(),
        rn(),
        ri(),
        o.reset(),
        (0, eb.w)().then((e) => {
            null != e && ((tZ = e.gpu_brand), (tX = e.has_intel_hybrid_igpu));
        }),
        tn.on(y.bg.SystemMicrophoneModeChange, (e) => {
            (f = e), tn.eachConnection(nc), r.emitChange();
        });
}
function n_() {
    return (0, eI.isWindows)() && T().satisfies(R.A?.os.release, eM.yg);
}
function nf() {
    return (0, eI.isWindows)() && T().satisfies(R.A?.os.release, eM.fG);
}
function np() {
    return (0, eI.isMac)() && tn.supports(eU.O5.SCREEN_CAPTURE_KIT) && T().satisfies(R.A?.os.release, eM.e);
}
function nh() {
    return (
        (0, eI.isWindows)() &&
        tn.supports(eU.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        tn.supports(eU.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nm() {
    return tn.supports(eU.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function nE() {
    let e = v.w.get("audio");
    null != e && (v.w.set(eV, { [eU.x.DEFAULT]: e }), v.w.remove("audio")),
        (tr = v.w.get(eV) ?? {}),
        E().each(tr, (e) => {
            E().defaultsDeep(e, te()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, ey.OH)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== eB &&
                    ((e.vadUseKrispSettingVersion = eB), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                e.vadThrehsoldMigrated ||
                    ((e.vadThrehsoldMigrated = !0), e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = eq)),
                tn.supports(eU.O5.SIDECHAIN_COMPRESSION) &&
                    e.sidechainCompressionSettingVersion < eY &&
                    ((e.sidechainCompressionSettingVersion = eY), (e.sidechainCompression = !0)),
                (0, eI.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== ej &&
                      ((e.ncUseKrispjsSettingVersion = ej), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== eH &&
                      ((e.ncUseKrispSettingVersion = eH), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
        }),
        nI();
}
function ng(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eU.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = t8(t);
    return Object.assign(r, e), !__OVERLAY__ && n && v.w.set(eV, tr), r;
}
function nA() {
    v.w.remove(eV), location.reload();
}
function nI() {
    let e = t9();
    tn.setAudioInputDevice(e.inputDeviceId),
        tn.setAudioOutputDevice(e.outputDeviceId),
        ni(),
        tn.setInputVolume(e.inputVolume),
        tn.setOutputVolume(e.outputVolume),
        tn.setAecDump(e.aecDumpEnabled),
        tn.setSidechainCompression(e.sidechainCompression),
        tn.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        tn.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        eS.Ay?.setOpenH264Enabled?.(e.openH264Enabled);
}
function nT() {
    ts || tn.enable().then(() => C.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nS(e) {
    return { id: eU.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
}
function ny(e, t) {
    if (0 === e.length) {
        let e = nS(t);
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
function nv(e, t) {
    let n = e[t] ?? e[eU.dx] ?? E()(e).values().first();
    return null != n ? n.id : t;
}
function nN(e) {
    let t = tc;
    if (((tc = ny(e, eG.intl.string(eG.t["/QIjDA"]))), !E().isEqual(tc, t))) {
        let e = t9(),
            t = nv(tc, e.inputDeviceId);
        tn.setAudioInputDevice(t), tn.eachConnection(nc);
    }
}
function nC(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nR(e) {
    tn.eachConnection((t) => {
        t.context === eU.x.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function nO(e) {
    let t = td;
    if (((td = ny(e, eG.intl.string(eG.t.xlUg0v))), !E().isEqual(td, t))) {
        let e = t9(),
            n = nv(td, e.outputDeviceId);
        tn.setAudioOutputDevice(n);
        let r = nC(t),
            i = nC(td);
        r !== i && nR(i);
    }
}
function nb(e) {
    tN = e.length > 0;
    let t = t_;
    if (((t_ = ny(e, eG.intl.string(eG.t.WKWARY))), tg && !E().isEqual(t_, t))) {
        let e = void 0 !== t_[tA],
            n = tA === eU.dx && t[eU.dx]?.disabled,
            r = "Firefox" === A().name && "" === tA && t[tA]?.name === "Default" && !t[tA]?.disabled;
        ni(e || n || r);
    }
}
function nD() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = ef.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let r = n === eP.W.USER ? eU.x.DEFAULT : eU.x.STREAM,
            i = r === eU.x.STREAM ? eU.Cn : eU.Hz,
            s = t[n] ?? {},
            { localMutes: a, localVolumes: o } = t9(r);
        for (let [e, t] of Object.entries(s))
            null == (0, e_.tM)(r, e) &&
                (t.muted ? (a[e] = !0) : delete a[e],
                t.volume !== i ? (o[e] = t.volume) : delete o[e],
                tn.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, r));
        if (e)
            for (let e of new Set([...Object.keys(a), ...Object.keys(o)]))
                null == s[e] &&
                    (delete a[e],
                    delete o[e],
                    tn.eachConnection((t) => {
                        t.setLocalVolume(e, i), t.setLocalMute(e, !1);
                    }, r));
        ng({ localMutes: a, localVolumes: o }, r);
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
    (i = e.sessionId), (tp = !1), (tE = !1);
    let t = t9();
    nh() && (nm() ? rP(eU.rB.AUTOMATIC) : t.automaticAudioSubsystem && rk()),
        tn.supports(eU.O5.OFFLOAD_ADM_CONTROLS) && tn.setOffloadAdmControls(!0),
        (0, eI.isIOS)() &&
            (0, Z.Y)("handleConnectionOpen").enabled &&
            tn.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
        (0, eh.Lb)({ location: "MediaEngineStore", autoTrackExposure: !1 }) &&
            null !== t.mostRecentlyRequestedVoiceFilter &&
            (0, eI.isDesktop)() &&
            (em.A.getLastInitAttemptMayHaveCrashed()
                ? (C.h.dispatch({ type: "AUDIO_SET_SELF_MUTE", mute: !0, context: eU.x.DEFAULT, playSoundEffect: !0 }),
                  ng({ mostRecentlyRequestedVoiceFilter: null }))
                : n(342887).md()),
        nD();
}
function nx(e) {
    let { mediaEngineState: t } = e;
    (tr = t.settingsByContext),
        (tc = t.inputDevices),
        (td = t.outputDevices),
        (tq = t.appSupported),
        (tL = t.krispModuleLoaded),
        (c = t.krispVersion),
        (to = t.goLiveContext);
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
            nT();
            break;
        case ew.S7L.RTC_CONNECTING:
            (tR = !1), (l = void 0), (u = void 0), (tC = !1), (tJ = !1), t0.stop(), tO.stop(), o.reset();
            break;
        case ew.S7L.RTC_CONNECTED:
            ni();
            break;
        case ew.S7L.DISCONNECTED:
            nK(), n$();
    }
}
function nG(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (tp = t.mute || t.suppress), (tE = t.deaf), tn.eachConnection(nn);
            let e = null != t.guildId && null != t.channelId && null != tG && tG !== t.channelId,
                n = !tb && null == t.channelId;
            return ni(!e && !n && tg), (tG = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== ev.default.getId() || null != eO.A.getChannelId() || ni(!1, null), e;
    }, !1);
}
function nF(e) {
    let { mute: t } = e;
    (th = t), tn.eachConnection(nn);
}
function nV(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = t9(t);
    if (t === eU.x.DEFAULT && (eu.A.requestPermission(ex.iL.AUDIO), tm)) return !1;
    (r = !i && !r) || (i = !1), n || (tT = !0), ng({ mute: r, deaf: i }, t), tn.eachConnection(nn);
}
function nB(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    ng({ mute: n }, t), r || (tT = !0), tn.eachConnection(nn);
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
    ng({ deaf: !t9(t).deaf }, t), tn.eachConnection(nn);
}
function nY(e) {
    let { context: t, userId: n } = e;
    if (n === ev.default.getId()) return;
    let { localMutes: r } = t9(t);
    r[n] ? delete r[n] : (r[n] = !0),
        ng({ localMutes: r }, t),
        tn.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nW(e) {
    let { context: t, userId: n, videoToggleState: r, persist: i, isAutomatic: s } = e;
    h()(!(i && s), "These are not allowed to both be true.");
    let a = r === ew.bb8.DISABLED,
        { disabledLocalVideos: o } = t9(t),
        l = o[n] ?? !1,
        u = tK.has(n),
        c = r === ew.bb8.AUTO_ENABLED || r === ew.bb8.MANUAL_ENABLED;
    eF.info(`disableVideo=${a} currentlyDisabled=${l} currentlyAutoDisabled=${u}, isVideoShown=${c}`),
        h()(!(u && !l), "If you are auto-disabled, then you are also disabled.");
    let d = a !== l,
        _ = t === eU.x.DEFAULT,
        f = s && d && _,
        p = i && d && _;
    eF.info(`changed=${d} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${f} isManualToggleByUser=${p}`);
    let { videoToggleStateMap: m } = t9(t);
    if (
        (m[n] === ew.bb8.AUTO_PROBING &&
            r === ew.bb8.AUTO_ENABLED &&
            (0, el.A)(n, a ? eU.Al.AUTO_DISABLE : eU.Al.AUTO_ENABLE, c),
        (m[n] = r),
        ng({ videoToggleStateMap: m }, t, i),
        r === ew.bb8.AUTO_PROBING
            ? eO.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
            : eO.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
        t$ ||
            (eF.info(`isAutoDisableAllowed=${t$} - disabling VideoHealthManager`),
            eO.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
        f)
    ) {
        if ((!a && !u) || (a && !t$)) return;
        (0, el.A)(n, a ? eU.Al.AUTO_DISABLE : eU.Al.AUTO_ENABLE, c), a ? tK.add(n) : tK.delete(n);
    } else
        p &&
            (u && !a
                ? (eF.info("disallowing auto-disable for this session because of manual override by user"),
                  (t$ = !1),
                  eO.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                  (0, el.A)(n, eU.Al.MANUAL_REENABLE, c))
                : (0, el.A)(n, a ? eU.Al.MANUAL_DISABLE : eU.Al.MANUAL_ENABLE, c));
    _ && !a && tK.delete(n),
        a ? (o[n] = !0) : delete o[n],
        ng({ disabledLocalVideos: o }, t, i),
        tn.eachConnection((e) => e.setLocalVideoDisabled(n, o[n] ?? !1), t);
}
function nK() {
    if (0 === tK.size) return;
    let e = eU.x.DEFAULT,
        { disabledLocalVideos: t } = t9(e);
    tK.forEach((n) => {
        h()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            tn.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tK.clear(),
        ng({ disabledLocalVideos: t }, e, !1);
}
function n$() {
    let e = eU.x.DEFAULT,
        { videoToggleStateMap: t } = t9(e);
    for (let [e, n] of Object.entries(t)) n === ew.bb8.AUTO_PROBING && delete t[e];
    ng({ videoToggleStateMap: t }, e, !1);
}
function nz(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === ev.default.getId()) return;
    let i = t === eU.x.STREAM ? eU.Cn : eU.Hz,
        { localVolumes: s } = t9(t);
    r === i ? delete s[n] : (s[n] = r), ng({ localVolumes: s }, t), tn.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function nq(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: s } = t9(t);
    (s[n] = { left: r, right: i }), ng({ localPans: s }, t), tn.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function nZ(e) {
    let { context: t, mode: n, options: r } = e;
    ng({ mode: n, modeOptions: { ...r, updatedAt: Date.now() } }, t), tn.eachConnection(ne);
}
function nX(e) {
    let { volume: t } = e;
    ng({ inputVolume: nt(t) }), tn.setInputVolume(t);
}
function nQ(e) {
    let { volume: t } = e;
    ng({ outputVolume: t }), tn.setOutputVolume(t);
}
function nJ(e) {
    let { id: t } = e;
    (t = nv(tc, t)),
        (tl = performance.now()),
        ng({ inputDeviceId: t }),
        tn.setAudioInputDevice(t),
        tn.eachConnection(nc),
        (l = void 0),
        (u = void 0),
        t0.stop(),
        (tJ = !1);
    let { resetSilenceWarningOnDeviceChange: n } = et.A.getConfig({
        location: "MediaEngineStore.handleSetInputDevice",
    });
    n && ((tC = !1), o.reset());
}
function n0(e) {
    let { id: t } = e;
    ng({ outputDeviceId: (t = nv(td, t)) }), tn.setAudioOutputDevice(t);
}
function n1(e) {
    let { id: t } = e;
    ng({ videoDeviceId: (t = nv(t_, t)) }), ni();
}
function n2(e) {
    let { inputProfile: t } = e;
    ng({ activeInputProfile: t });
    let n = t9();
    tn.eachConnection((e) => {
        ne(e), nc(e);
    }),
        tn.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        rr();
}
function n3(e) {
    return ta !== e.required && ((ta = e.required), e.required || tn.interact(), !0);
}
function n6(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    nN(t), nO(n), nb(r);
}
function n4(e) {
    let { inputVolume: t, outputVolume: n } = e;
    ng({ inputVolume: nt(t), outputVolume: n });
}
function n5(e) {
    let t = t9(),
        n = tn.getAudioSubsystem(),
        i = tn.getAudioLayer(),
        s = nv(tc, t.inputDeviceId),
        a = tc[s]?.name,
        o = (0, ed.A)(t.noiseCancellation, r.getSystemMicrophoneMode());
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
    let t = ng({ echoCancellation: e.enabled });
    tn.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), rr(), n5(e.location);
}
function n8(e) {
    re(e.enabled);
}
function n9(e) {
    let t = ng({ sidechainCompressionStrength: e.strength });
    tn.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function re(e) {
    let t = ng({ sidechainCompression: e });
    tn.setSidechainCompression(t.sidechainCompression);
}
function rt(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tz.add(n) : tz.delete(n), rn(), rr();
}
function rn() {
    let e = !tz.has("voice_filter_preview") && !tz.has("mic_test");
    tn.setMaybePreprocessMute(e);
}
function rr() {
    let e = t9(),
        t = tz.size > 0,
        n = e.inputDeviceId,
        r = eC.A.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        s = eC.A.hasNoiseSuppression(n) || e.noiseSuppression,
        a = no(eC.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        o = e.noiseCancellation,
        l = null !== tx,
        u = tz.has("voice_filter") && 1 === tz.size;
    tn.setLoopback(t, {
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
    if (!tn.supports(eU.O5.VAAPI)) return;
    let e = 4098;
    if (window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let t = await window.DiscordNative.processUtils.getSystemInfo();
    (t.electronGPUInfo?.gpuDevice ?? []).some((t) => t.vendorId === e) &&
        ((t3 = !0), (t2 = tn.supports(eU.O5.GAMESCOPE_CAPTURE)));
}
function rs(e) {
    let t = ng({ noiseSuppression: e.enabled });
    tn.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), rr(), n5(e.location);
}
function ra(e) {
    let t = ng({ automaticGainControl: e.enabled });
    tn.eachConnection((e) => nl(e, t.automaticGainControl)), rr(), n5(e.location);
}
function ro(e) {
    let t = ng({ noiseCancellation: e.enabled });
    tn.eachConnection((e) => nu(e, t.noiseCancellation)), rr(), n5(e.location);
}
function rl(e) {
    ec.A.setKrispModelOverride(e.model), (_ = e.model), rr();
}
function ru(e) {
    (0, eI.isWeb)() || ((tM = e.enabled), tn.setNoiseCancellationEnableStats?.(e.enabled));
}
function rc(e) {
    ng({ silenceWarning: e.enabled });
}
function rd(e) {
    tn.setDebugLogging(e.enabled);
}
function r_(e) {
    let { level: t } = e;
    (d = t), ec.A.setKrispSuppressionLevel(t);
}
function rf(e) {
    ng({ videoHook: e.enabled });
}
function rp(e) {
    ng({ experimentalSoundshare2: e.enabled });
}
function rh(e) {
    let { enabled: t } = e;
    ng({ useSystemScreensharePicker: t });
}
function rm(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = ng({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r });
    tn.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function rE(e) {
    let { enabled: t } = e;
    ng({ qos: t }), tn.eachConnection((e) => e.setQoS(t));
}
function rg() {
    nA();
}
function rA(e) {
    let { osVolume: t, osMuted: n } = e;
    (u = t), (l = n);
}
function rI(e) {
    let { inputDetected: t } = e;
    if (null == t) return !1;
    if (((tR = !0 !== tC && !t), t)) (tC = !0), (tJ = !1), t0.stop(), tO.stop();
    else if (t9().mode === ew.TBI.VOICE_ACTIVITY && tC) {
        let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = et.A.getConfig({
            location: "MediaEngineStore.handleInputDetected",
        });
        e &&
            t0.start(eJ, () => {
                eE.default.track(ew.HAw.HARDWARE_MUTE_GUESSED, {
                    input_device_name: tc[nv(tc, t9().inputDeviceId)]?.name,
                    rtc_connection_id: eO.A.getRTCConnectionId(),
                }),
                    (tJ = !0),
                    r.emitChange();
            }),
            null != t &&
                tO.start(t * eA.A.Millis.MINUTE, () => {
                    (tC = !1), o.reset();
                });
    }
}
function rT(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === tm) return !1;
    (tm = n), tn.eachConnection(nn);
}
function rS(e) {
    let { state: t, permissionType: n } = e,
        r = t === ex.hL.ACCEPTED;
    switch (n) {
        case ex.iL.AUDIO:
            (tY = !0), tn.eachConnection(nn);
            break;
        case ex.iL.CAMERA:
            !r && tg && ni(!1);
            break;
        default:
            return !1;
    }
}
function ry() {
    return tL || !1;
}
async function rv() {
    try {
        await eS.Ay.ensureModule("discord_krisp");
        let e = eS.Ay.requireModule("discord_krisp");
        (tL = !0),
            (c = e.getSdkVersion?.()),
            (d = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (tw = e), r.emitChange();
            }),
            r.emitChange();
    } catch (t) {
        eF.warn(`Failed to load Krisp module: ${t.message}`), eT.A.captureException(t);
        let e = eU.CO.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eU.CO.INITIALIZED : n;
        }
        eE.default.track(ew.HAw.VOICE_PROCESSING, { noise_canceller_error: e }), ng({ noiseCancellation: !1 });
    } finally {
        tD = !1;
    }
}
function rN() {
    return (0, eI.isWindows)() || (0, eI.isLinux)() || (0, eI.isMac)();
}
function rC() {
    !rN() || __OVERLAY__ || tD || tL
        ? (0, eI.isWeb)() && tn.supports(eU.O5.NOISE_CANCELLATION)
            ? ((tL = !0), r.emitChange())
            : (0, eI.isWeb)() && ng({ noiseCancellation: !1 })
        : ((tD = !0), rv());
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
    eE.default.track(ew.HAw.VOICE_FILTER_PLAYBACK_TOGGLED, { active_voice_filter_id: tx ?? null, enabled: t }),
        ng({ voiceFilterPlaybackEnabled: t });
}
function rD(e) {
    let { newVoiceFilterId: t } = e;
    ng({ mostRecentlyRequestedVoiceFilter: t }), tn.eachConnection((e) => e.setVoiceFilterId(t));
}
function rL() {
    ng({ mostRecentlyRequestedVoiceFilter: null });
}
function rw(e) {
    let { voiceFilterId: t } = e;
    (tk = tx), (tU = tP), (tx = t), (tP = null === t ? null : Date.now());
}
function rM(e) {
    let t = e.bypassEnabled;
    ng({ bypassSystemInputProcessing: t }), tn.setAudioInputBypassSystemProcessing(t), n5(e.location);
}
function rx(e) {
    rP(e.subsystem);
}
function rP(e) {
    e === eU.rB.AUTOMATIC
        ? (ng({ automaticAudioSubsystem: !0 }), rk())
        : (ng({ automaticAudioSubsystem: !1 }), tn.setAudioSubsystem(e));
}
function rk() {
    tn.queueAudioSubsystem(eU.rB.EXPERIMENTAL);
}
function rU(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && ni(i, null), null != t || null == n)) {
        tb = !1;
        return;
    }
    if (tb) return;
    tb = !0;
    let s = t9();
    (s.mute || s.deaf) && (ng({ deaf: !1, mute: !1 }), tn.eachConnection(nn));
}
function rG(e) {
    let { application: t } = e;
    ti.add(t.id);
}
function rF(e) {
    let { application: t } = e;
    ti.delete(t.id);
}
function rV(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (ts = !1), tn.eachConnection(nn);
                break;
            case "video":
                ni(!1);
        }
}
function rB(e) {
    (ts = e.enabled), e.unmute && ng({ mute: !1, deaf: !1 }), tn.eachConnection(nn);
}
function rH(e) {
    let { enabled: t } = e;
    eu.A.requestPermission(ex.iL.CAMERA), ni(t);
}
function rj(e) {
    let { sourceId: t, applicationName: n, quality: i } = e;
    if (!(0, M.Ao)() || null == R.A) return !1;
    let s = null,
        o = null,
        l = eg.A.getPidFromDesktopSource(t);
    ({ soundshareId: s, soundshareSession: o } = nL(l));
    let u = { desktopSource: { id: t, sourcePid: l, soundshareId: s, soundshareSession: o }, quality: i };
    null != a &&
        (tn.setClipsSource(null),
        (0, eI.isWindows)() && null != a.desktopSource.soundshareId && O.c1(a.desktopSource.soundshareId)),
        null != s && nw(s, o),
        (a = u);
    let c = t4("MediaEngineStore clips"),
        d = t9().videoHook;
    tn.setClipsSource({
        desktopDescription: {
            id: a.desktopSource.id,
            soundshareId: a.desktopSource.soundshareId,
            useVideoHook: d,
            useGraphicsCapture: n_(),
            useCaptureDeviceForEncode: !1,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: np(),
            videoHookStaleFrameTimeoutMs: e$,
            graphicsCaptureStaleFrameTimeoutMs: ez,
            hdrCaptureMode: c,
        },
        quality: i,
        applicationName: n,
    });
}
function rY(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((a = null), tn.setClipsSource(null));
}
function rW(e) {
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
            nr(s),
            ni(s === eU.x.STREAM && tg, {
                desktopSource: { id: r, sourcePid: o, soundshareId: e, soundshareSession: n },
                quality: { resolution: a.resolution, frameRate: a.frameRate },
            });
    } else if (t?.cameraSettings != null) {
        let e = t.context ?? eU.x.DEFAULT,
            { videoDeviceGuid: n, audioDeviceGuid: r } = t.cameraSettings,
            i = e === eU.x.STREAM && tg,
            s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
        ni(i, {
            cameraSource: { videoDeviceGuid: n, audioDeviceGuid: r },
            quality: { resolution: s.resolution, frameRate: s.frameRate },
        });
    } else ni(tg, null);
}
function rK(e) {
    let { section: t } = e;
    return t === ew.nc_.VOICE && nT(), !1;
}
function r$() {
    return tn.eachConnection(nc), !1;
}
function rz(e) {
    let { enabled: t } = e,
        n = ng({ aecDumpEnabled: t });
    tn.setAecDump(n.aecDumpEnabled);
}
function rq(e) {
    let { enabled: t } = e;
    ng({ openH264Enabled: t }), eS.Ay?.setOpenH264Enabled?.(t);
}
function rZ(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (tr = Object.values(eU.x).reduce((e, n) => {
        let r = n,
            i = te();
        return (e[r] = E().merge(i, t[r])), e;
    }, {})),
        v.w.set(eV, tr),
        nI();
}
function rX(e) {
    let { state: t } = e,
        n = G.A.isEnabled();
    if (t === ew.g6G.BACKGROUND && tg && !n) (tv = !0), ni(!1);
    else {
        if (t !== ew.g6G.ACTIVE || !tv) return !1;
        (tv = !1), ni(!0);
    }
    return !0;
}
function rQ(e) {
    tn.eachConnection((t) => t.setBitRate(e.bitrate));
}
function rJ() {
    if ((!tg && null == s) || null != eO.A.getRTCConnectionId()) return !1;
    ni(!1, null);
}
function r0() {
    return !!tF && ((tF = !1), !0);
}
function r1(e) {
    tn.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function r2(e) {
    let { settings: t } = e;
    tn.applyMediaFilterSettings(t).finally(() => {
        (tV = !1), r.emitChange();
    });
}
function r3() {
    tV = !0;
}
function r6() {
    tV = !1;
}
function r4(e) {
    tQ = e.enabled;
}
function r5() {
    if ((0, eI.isDesktop)() && eI.isPlatformEmbedded && !t6) {
        t6 = !0;
        let e = async () => {
            let t = await new Promise((e) => {
                eS.Ay.pollQueueMetrics((t) => {
                    e(t);
                });
            });
            t.periodMs = eU.tl;
            let n = r8(t);
            null !== n && eE.default.track(ew.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, eU.tl);
        };
        setTimeout(e, eU.tl);
    }
}
class r7 extends S.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        nd(),
            nE(),
            rC(),
            rO(),
            n$(),
            r5(),
            (0, eI.isWindows)() && eI.isPlatformEmbedded && na(),
            (tq = {
                [eU.O5.VIDEO]: tn.supports(eU.O5.VIDEO),
                [eU.O5.DESKTOP_CAPTURE]: tn.supports(eU.O5.DESKTOP_CAPTURE),
                [eU.O5.HYBRID_VIDEO]: tn.supports(eU.O5.HYBRID_VIDEO),
            }),
            this.waitFor(ev.default, eN.A, eC.A, eR.A, L.A, U.A, eO.A, F.Ay, ef.A, eD.default, eL.A, em.A);
    }
    supports(e) {
        return tn.supports(e);
    }
    supportsInApp(e) {
        return tq[e] || tn.supports(e);
    }
    isSupported() {
        return tn.supported();
    }
    isNoiseSuppressionSupported() {
        return tn.supports(eU.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return ry();
    }
    isNoiseCancellationError() {
        return tF;
    }
    isAutomaticGainControlSupported() {
        return tn.supports(eU.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nm() && (tn.supports(eU.O5.LEGACY_AUDIO_SUBSYSTEM) || tn.supports(eU.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return tn.supports(eU.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === tn.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return ry();
    }
    isAecDumpSupported() {
        return tn.supports(eU.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return tn.supports(eU.O5.VIDEO) && tn.supports(eU.O5.SIMULCAST);
    }
    getAecDump() {
        return t9().aecDumpEnabled;
    }
    getMediaEngine() {
        return tn;
    }
    getVideoComponent() {
        return tn.Video;
    }
    getCameraComponent() {
        return tn.Camera;
    }
    getKrispSuppressionLevel() {
        return d ?? 100;
    }
    getKrispEnableStats() {
        return tM;
    }
    isEnabled() {
        return ts;
    }
    isMute() {
        return this.isSelfMute() || tp;
    }
    isDeaf() {
        return this.isSelfDeaf() || tE;
    }
    hasContext(e) {
        return null != tr[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.DEFAULT;
        return e === eU.x.DEFAULT && th;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.DEFAULT;
        return (
            !this.isEnabled() ||
            t9(e).mute ||
            !eu.A.didHavePermission(ex.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eU.x.DEFAULT && tm)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tT;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tT = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.DEFAULT,
            t = tJ && "voice_isolation" !== this.getSystemMicrophoneMode() && t9(e).mode === ew.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (eC.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return tQ;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.DEFAULT;
        return !this.isSupported() || t9(e).deaf;
    }
    isVideoEnabled() {
        return tg && tN;
    }
    isVideoAvailable() {
        return Object.values(t_).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return tN;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.STREAM;
        return to === e && null != s;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.STREAM;
        return to === e && null != s && s.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eU.x.DEFAULT;
        return e !== ev.default.getId() && (t9(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return tn.supports(eU.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eU.x.DEFAULT;
        return t9(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eU.x.DEFAULT;
        return t9(t).videoToggleStateMap[e] ?? ew.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eU.x.DEFAULT;
        return t === eU.x.DEFAULT && tK.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.DEFAULT;
        return e === eU.x.DEFAULT && tK.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tV;
    }
    isNativeAudioPermissionReady() {
        return tY;
    }
    getGoLiveSource() {
        return s;
    }
    getGoLiveContext() {
        return to;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return tl;
    }
    isH264MfDecodeAvailable() {
        return tu;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eU.x.DEFAULT,
            n = t9(t).localPans[e];
        return null != n ? n : eK;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eU.x.DEFAULT,
            n = t === eU.x.STREAM ? eU.Cn : eU.Hz,
            r = t9(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return t9().inputVolume;
    }
    getOutputVolume() {
        return t9().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.DEFAULT;
        return t9(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.DEFAULT;
        return t9(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return tx;
    }
    getActiveVoiceFilterAppliedAt() {
        return tP;
    }
    getPreviousVoiceFilter() {
        return tk;
    }
    getPreviousVoiceFilterAppliedAt() {
        return tU;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return t9().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return t9().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            E().each(tr, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === ew.TBI.PUSH_TO_TALK && ti.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nv(tc, t9().inputDeviceId);
    }
    getOutputDeviceId() {
        return nv(td, t9().outputDeviceId);
    }
    getVideoDeviceId() {
        return nv(t_, t9().videoDeviceId);
    }
    getInputDevices() {
        return tc;
    }
    getOutputDevices() {
        return td;
    }
    getVideoDevices() {
        return t_;
    }
    getEchoCancellation() {
        let e = t9();
        return eC.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return tn.supports(eU.O5.SIDECHAIN_COMPRESSION) && t9().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return t9().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return t9().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tH && tH;
    }
    getOpenH264Enabled() {
        return (0, eI.isLinux)() && t9().openH264Enabled;
    }
    getLoopback() {
        return tz.size > 0;
    }
    getLoopbackReasons() {
        return tz;
    }
    getNoiseSuppression() {
        let e = t9();
        return eC.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = t9();
        return eC.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return t9().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return t9().noiseCancellation;
    }
    getHardwareEncoding() {
        return e0;
    }
    getEnableSilenceWarning() {
        return t9().silenceWarning;
    }
    getDebugLogging() {
        return tn.getDebugLogging();
    }
    getQoS() {
        return t9().qos;
    }
    getAttenuation() {
        return t9().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return t9().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return t9().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return nh() && t9().automaticAudioSubsystem ? eU.rB.AUTOMATIC : tn.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return tn.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return t9().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === ek.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.x.DEFAULT;
        return t9(e);
    }
    getState() {
        return {
            settingsByContext: tr,
            inputDevices: tc,
            outputDevices: td,
            appSupported: tq,
            krispModuleLoaded: tL,
            krispVersion: c,
            krispSuppressionLevel: d,
            goLiveSource: s,
            goLiveContext: to,
        };
    }
    getInputDetectedThisConnection() {
        return tC;
    }
    getInputDetected() {
        return o.inputDetected;
    }
    getLastInputDetectedUpdateTime() {
        return o.lastUpdateTime;
    }
    getNoInputDetectedNotice() {
        return tR;
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
        tn.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return ta;
    }
    getVideoHook() {
        return t9().videoHook;
    }
    supportsVideoHook() {
        return tn.supports(eU.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = t9().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return tn.supports(eU.O5.EXPERIMENTAL_SOUNDSHARE) && T().satisfies(R.A?.os.release, eM.$x);
    }
    supportsHookSoundshare() {
        return (0, eI.isWindows)() && tn.supports(eU.O5.SOUNDSHARE) && T().satisfies(R.A?.os.release, eM.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = t9().useSystemScreensharePicker,
            n = (0, eI.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return tn.supports(eU.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return t3;
    }
    getUseGamescopeCapture() {
        return t2;
    }
    getSpeakingWhileMuted() {
        return tS;
    }
    getKrispModelOverride() {
        return _;
    }
    getKrispModels() {
        return tw;
    }
    getKrispVadActivationThreshold() {
        return t9().modeOptions.vadKrispActivationThreshold ?? eW;
    }
    hasActiveCallKitCall() {
        return t1;
    }
    setHasActiveCallKitCall(e) {
        t1 = e;
    }
    supportsScreenSoundshare() {
        return (0, eI.isMac)()
            ? tn.supports(eU.O5.SOUNDSHARE) && T().satisfies(R.A?.os.release, eM.P$) && np()
            : (0, eI.isWindows)()
              ? tn.supports(eU.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, eI.isLinux)() && tn.supports(eU.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        return (0, eI.isWindows)()
            ? this.getInputDevices()[this.getInputDeviceId()]?.effects?.find((e) => e === e1)
            : (0, eI.isMac)() || (0, eI.isIOS)()
              ? f
              : void 0;
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
        return tn.fetchAsyncResources(e);
    }
    startDavePreload() {
        if (!tB && ((tB = !0), (0, eI.isWeb)())) {
            let e = { fetchDave: !0 };
            tn.fetchAsyncResources(e).catch((e) => {
                eF.warn("DAVE preload failed:", e), eT.A.captureException(e);
            });
        }
    }
    getSupportedSecureFramesProtocolVersion() {
        return tn.getSupportedSecureFramesProtocolVersion();
    }
    hasClipsSource() {
        return null != a;
    }
    getGpuBrand() {
        return tZ;
    }
}
function r8(e) {
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
(r = new r7(C.h, {
    VOICE_CHANNEL_SELECT: rU,
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
    AUDIO_SET_SUBSYSTEM: rx,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rM,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rB,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rH,
    MEDIA_ENGINE_PERMISSION: rV,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rW,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: n1,
    MEDIA_ENGINE_INTERACTION_REQUIRED: n3,
    USER_SETTINGS_MODAL_INIT: rK,
    USER_SETTINGS_MODAL_SET_SECTION: rK,
    CERTIFIED_DEVICES_SET: r$,
    RPC_APP_CONNECTED: rG,
    RPC_APP_DISCONNECTED: rF,
    OVERLAY_INITIALIZE: nx,
    APP_STATE_UPDATE: rX,
    SET_CHANNEL_BITRATE: rQ,
    SET_VAD_PERMISSION: rT,
    SET_NATIVE_PERMISSION: rS,
    SET_CHANNEL_VIDEO_QUALITY_MODE: r1,
    MEDIA_ENGINE_SET_AEC_DUMP: rz,
    MEDIA_ENGINE_SET_OPENH264_ENABLED: rq,
    MEDIA_ENGINE_RESET_SETTINGS: rZ,
    CHANNEL_DELETE: rJ,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: r0,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: r2,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: r3,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: r6,
    USER_SETTINGS_PROTO_UPDATE: nH,
    CLIPS_INIT: rj,
    CLIPS_SETTINGS_UPDATE: rY,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: r4,
    VOICE_FILTER_REQUEST_SWITCH: rD,
    VOICE_FILTER_LOOPBACK_TOGGLE: rb,
    VOICE_FILTER_APPLIED: rw,
    VOICE_FILTER_DOWNLOAD_FAILED: rL,
    VOICE_FILTER_APPLY_FAILED: rL,
})),
    (o = new X.A(tn, r));
let r9 = r;
