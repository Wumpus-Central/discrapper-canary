"use strict";
let r, i, s, a, o, l, u, c, d, _, f;
n.d(t, { Ay: () => is }), n(323874), n(14289), n(35956), n(321073), n(790599);
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
    Y = n(593595),
    W = n(788601),
    K = n(626078),
    $ = n(638188),
    z = n(269377),
    q = n(934341),
    Z = n(658046),
    X = n(621963),
    Q = n(525286),
    J = n(780732),
    ee = n(532055),
    et = n(264866),
    en = n(927170),
    er = n(729410),
    ei = n(233232),
    es = n(140175);
n(491642);
var ea = n(801644),
    eo = n(223572),
    el = n(276006),
    eu = n(886124),
    ec = n(165479),
    ed = n(896014),
    e_ = n(765396),
    ef = n(75076),
    ep = n(674966),
    eh = n(559633),
    em = n(3527),
    eE = n(879172),
    eg = n(617617),
    eA = n(340913),
    eI = n(996744),
    eT = n(28075),
    eS = n(954571),
    ey = n(353835),
    ev = n(927813),
    eN = n(723702),
    eC = n(728458),
    eR = n(837921),
    eO = n(350535),
    eb = n(961350),
    eD = n(131319),
    eL = n(347481),
    ew = n(734057),
    eM = n(383501),
    ex = n(851581),
    eP = n(287809),
    ek = n(117549),
    eU = n(652215),
    eG = n(502075),
    eF = n(765682),
    eV = n(355097),
    eB = n(509381),
    eH = n(731854),
    ej = n(985018);
let eY = new x.A("MediaEngineStore"),
    eW = "MediaEngineStore",
    eK = 4,
    e$ = 1,
    ez = 1,
    eq = 1,
    eZ = 0.5,
    eX = { left: 1, right: 1 },
    eQ = 500,
    eJ = 5 * ev.A.Millis.SECOND,
    e0 = -60,
    e1 = 100,
    e2 = 2 * ev.A.Millis.SECOND,
    e3 = 30 * ev.A.Millis.SECOND,
    e6 = +ev.A.Millis.MINUTE,
    e4 = !0,
    e5 = "deep_noise_suppression",
    e7 = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2",
    e8 = "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f",
    e9 = 0,
    te = null;
function tt() {
    if (!(0, eN.isIOS)() || null == te) return !1;
    let e = te();
    if (null == e || !e.startsWith("ARM64_")) return !1;
    let t = e.substring(6);
    return ("T" === t[0] || "S" === t[0]) && parseInt(t.substring(1), 10) >= 8122;
}
let tn = null;
async function tr() {
    if (!(0, eN.isMac)() || R.A?.os.arch !== "arm64" || R.A?.processUtils?.getSystemInfo == null) {
        tn = !1;
        return;
    }
    let e = await R.A.processUtils.getSystemInfo(),
        t = e.cpus?.[0]?.model ?? "";
    eY.info("Detected Mac CPU", t);
    let n = t.match(/Apple M(\d+)/);
    if (null == n) {
        tn = !0;
        return;
    }
    tn = parseInt(n[1], 10) >= 3;
}
function ti() {
    return !0 === tn;
}
function ts() {
    return {
        mode: eU.TBI.VOICE_ACTIVITY,
        modeOptions: {
            threshold: e0,
            autoThreshold: eN.isPlatformEmbedded || __OVERLAY__,
            vadUseKrisp: !0,
            vadKrispActivationThreshold: eZ,
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
        inputVolume: eH.Hz,
        outputVolume: eH.Hz,
        inputDeviceId: eH.dx,
        outputDeviceId: eH.dx,
        videoDeviceId: eH.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: to.supports(eH.O5.VIDEO_HOOK),
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
let ta = {
        [eB.m.CUSTOM]: {},
        [eB.m.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [eB.m.STUDIO]: {
            mode: eU.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    to = (0, y.hB)((0, y.WI)());
eY.enableNativeLogger(!0);
let tl = {},
    tu = new Set([eH.x.DEFAULT]),
    tc = to.supports(eH.O5.AUTO_ENABLE),
    td = !1,
    t_ = eH.x.STREAM,
    tf = performance.now(),
    tp = null,
    th = { [eH.dx]: nR("No Input Devices") },
    tm = { [eH.dx]: nR("No Output Devices") },
    tE = { [eH.dx]: nR("No Video Devices") },
    tg = new N.Ep(),
    tA = !1,
    tI = !1,
    tT = !1,
    tS = !1,
    ty = !1,
    tv = eH.qe,
    tN = eH.qe,
    tC = !1,
    tR = !1,
    tO = new N.Ep(),
    tb = !1,
    tD = !1,
    tL = !1,
    tw = !1,
    tM = new N.Ep(),
    tx = !1,
    tP = !1,
    tk = !1,
    tU = [],
    tG = !1,
    tF = null,
    tV = null,
    tB = null,
    tH = null,
    tj = null,
    tY = !1,
    tW = !1,
    tK = !1,
    t$ = null,
    tz = null,
    tq = !1;
ep.A.hasPermission(eF.iL.AUDIO, { showAuthorizationError: !1 }),
    ep.A.hasPermission(eF.iL.CAMERA, { showAuthorizationError: !1 });
let tZ = !1,
    tX = new Set(),
    tQ = tZ,
    tJ = new Set(),
    t0 = {},
    t1 = null,
    t2 = null,
    t3 = !0,
    t6 = !1,
    t4 = new N.Ep(),
    t5 = !1,
    t7 = !1,
    t8 = !1,
    t9 = !1;
function ne(e) {
    return (0, X.p)({ location: e }).hdrCaptureMode;
}
async function nt() {
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
function nn() {
    return null != tz ? tz : "u" > typeof window ? (tz = nt().then((e) => ((t$ = e), e))) : Promise.resolve(!1);
}
function nr() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eH.x.DEFAULT,
        t = tl[e];
    return null == t && ((t = ts()), (tl[e] = t)), t;
}
function ni() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eH.x.DEFAULT,
        t = nr(e),
        n = ta[t.activeInputProfile ?? eB.m.CUSTOM],
        r = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}) };
    if (
        (null == r.vadDuringPreProcess && (r.vadDuringPreProcess = (0, eo.R)({ location: "getSettings" }).enabled),
        (null == r.vadKrispActivationThreshold && !0 === n.automaticGainControl) || !0 === t.automaticGainControl)
    ) {
        let e = (0, B.F)({ location: "getSettings" });
        null != e.vadKrispActivationThreshold && (r.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return { ...t, ...n, modeOptions: r };
}
function ns(e) {
    let t = ni(e.context),
        n = t.mode;
    e.context === eH.x.DEFAULT && (0, es.N)(!1, !1);
    let { showPTTSpeakingIndicator: r } = eA.A.getConfig({ location: "setInputMode" }),
        i = r && n === eU.TBI.PUSH_TO_TALK;
    e.setInputMode(n, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: !!i || t.modeOptions.autoThreshold,
        vadUseKrisp: (!!i || t.modeOptions.vadUseKrisp) && rO(),
        vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? eZ,
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        vadDuringPreProcess: t.modeOptions.vadDuringPreProcess ?? !1,
        pttReleaseDelay: Math.round(t.modeOptions.delay),
    });
}
function na(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eH.Hz;
    return E().clamp(e, 0, t);
}
function no(e) {
    let t = ni(e.context),
        n = !tc || t.mute || t.deaf;
    e.context === eH.x.DEFAULT
        ? (n = n || tA || tI || tT || !ep.A.didHavePermission(eF.iL.AUDIO))
        : e.context === eH.x.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eH.x.DEFAULT && b.A.updateNativeMute();
}
function nl(e) {
    e !== t_ && (null != s && to.setGoLiveSource(null, t_), (t_ = e));
}
function nu() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ty,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
        n = s;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, eN.isWindows)() && O.c1(n.desktopSource.soundshareId),
            to.setGoLiveSource(null, t_)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            to.setGoLiveSource(null, t_),
        ty || e)
    ) {
        let t = ni().videoDeviceId;
        ty && t === eH.dx && tN === eH.dx && tv !== eH.qe ? (t = tv) : (tN = t),
            (tv = (ty = e) ? nb(tE, t) : eH.qe),
            to.setVideoInputDevice(tv);
    }
    if (((s = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = ne("MediaEngineStore go live"),
                i = ni().videoHook,
                s = nE(),
                a = s ? (ng() ? eG.zl : eG.eg) : 0,
                o = (0, eN.isWindows)() && (0, el.b)("updateVideo").enabled,
                l = !1;
            (0, eN.isWindows)() &&
                a >= eG.zl &&
                (l =
                    !0 === t2
                        ? ec.q.getConfig({ location: "updateVideo" }).enabled
                        : eu.d.getConfig({ location: "updateVideo" }).enabled),
                to.setGoLiveSource(
                    {
                        desktopDescription: {
                            id: t.desktopSource.id,
                            soundshareId: t.desktopSource.soundshareId,
                            useVideoHook: i,
                            useGraphicsCapture: s,
                            useGraphicsCaptureApiLevel: a,
                            useCaptureDeviceForEncode: o,
                            useLoopback: r.getExperimentalSoundshare(),
                            useQuartzCapturer: !0,
                            allowScreenCaptureKit: nA(),
                            videoHookStaleFrameTimeoutMs: eQ,
                            graphicsCaptureStaleFrameTimeoutMs: eJ,
                            hdrCaptureMode: n,
                            enableGlobalFramePoolLock: (0, Z.H)({ location: "updateVideo" }).enabled,
                            useGraphicsCaptureDirtyRegions: l,
                        },
                        quality: e,
                    },
                    t_,
                );
        }
        null != t.cameraSource &&
            to.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: t.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: t.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                t_,
            );
    }
}
function nc(e) {
    switch (e) {
        case eH.CO.CPU_OVERUSE:
            return k.B6.NoiseCancellerCpuOveruse;
        case eH.CO.FAILED:
            return k.B6.NoiseCancellerFailed;
        case eH.CO.VAD_CPU_OVERUSE:
            return k.B6.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function nd() {
    null === tp &&
        to
            .getCodecSurvey()
            .then((e) => {
                try {
                    let t = JSON.parse(e);
                    if (null == t || null == t.available_video_decoders) throw Error("decoder survey is not available");
                    tp = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                } catch (e) {
                    eY.error("Failed to parse codec survey", e), (tp = !1);
                }
            })
            .catch((e) => {
                eY.error("Failed to get codec survey", e), (tp = !1);
            })
            .finally(() => {
                C.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
            });
}
function n_(e) {
    let t = (0, B.F)({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function nf(e, t) {
    e.setAutomaticGainControl(n_(t));
}
function np(e, t) {
    let n = (0, em.A)(t, r.getSystemMicrophoneMode());
    n !== t && eY.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: i } = (0, B.F)({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(i);
    let { noiseCancellationAfterProcessing: s, vadAfterWebrtc: a } = (0, en.$)({ location: "setNoiseCancellation" });
    e.setNoiseCancellationAfterProcessing(s), e.setVADAfterWebrtc(a);
}
function nh(e) {
    let t = ni(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eL.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eL.A.hasNoiseSuppression(n) || t.noiseSuppression),
        nf(e, eL.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        np(e, t.noiseCancellation),
        e.setVoiceFilterId(tF),
        (0, eN.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function nm() {
    tg.start(e3, () => {
        eY.error("Device enumeration timed out"), eS.default.track(eU.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
    }),
        to.on(y.bg.Connection, (e) => {
            ns(e), no(e), nh(e);
            let t = ni();
            e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
                e.setQoS(t.qos),
                (0, eN.isWindows)()
                    ? (e.setExperimentFlag(eH.fd.H265_HARDWARE_ONLY, !0),
                      nn().then((t) => {
                          e.setExperimentFlag(eH.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                      }))
                    : (0, eN.isMac)() && e.setExperimentFlag(eH.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                (0, eN.isWindows)() &&
                    (0, J.r)({ location: "setupMediaEngine" }).enabled &&
                    (e.setExperimentFlag(eH.fd.USE_H264_MF_DECODER, !0),
                    (0, ee.W)({ location: "setupMediaEngine" }).enabled &&
                        e.setExperimentFlag(eH.fd.H264_MF_ZERO_COPY, !0)),
                (0, eN.isLinux)() &&
                    (0, er.b)({ location: "setupMediaEngine" }).enabled &&
                    t.openH264Enabled &&
                    e.setExperimentFlag(eH.fd.USE_LIBOPENH264_DECODER, !0);
            let n = eM.A.getGuildId(),
                {
                    muteBeforeProcessing: i,
                    pttBeforeProcessing: a,
                    skipEncode: o,
                } = (null != n ? z.A : $.A).getCurrentConfig(
                    { location: "setupMediaEngine", guildId: n ?? void 0 },
                    { autoTrackExposure: !0 },
                );
            i && e.setExperimentFlag(eH.fd.MUTE_BEFORE_PROCESSING, !0),
                a && e.setExperimentFlag(eH.fd.PTT_BEFORE_PROCESSING, !0),
                o && e.setExperimentFlag(eH.fd.SKIP_ENCODE, !0),
                (0, ei.J)({ location: "setupMediaEngine" }).enabled &&
                    e.setExperimentFlag(eH.fd.LOW_LATENCY_RATE_CONTROL, !0);
            let l = !1,
                u = !0;
            e.setExperimentFlag(eH.fd.RESET_DECODER_ON_ERRORS, !0),
                l && e.setExperimentFlag(eH.fd.SOFTWARE_FALLBACK_ON_ERRORS, !0),
                u && e.setExperimentFlag(eH.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
            let { swallowVolumeOnlySpeakingEvents: c } = D.A.getConfig({ location: "MediaEngineStore" });
            if ((c && e.setExperimentFlag(eH.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === eH.x.STREAM)) {
                let t = nL(tm);
                e.setSoundshareDiscardRearChannels(t);
                let { simulcastEnabled: n, lqStreamBitrate: r } = Q.A.getConfig();
                e.configureGoLiveSimulcast(n, r);
            }
            if ((0, eN.isWindows)())
                e.setExperimentFlag(eH.fd.SIGNAL_AV1, !0), e.setExperimentFlag(eH.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            else if ((0, eN.isMac)())
                if ((e.setExperimentFlag(eH.fd.SIGNAL_AV1_DECODE, !0), ti())) {
                    let { enabled: t } = (0, j.t)("MediaEngineStore");
                    t
                        ? (eY.info("This Mac supports AV1 Hardware. AV1 Hardware enabled."),
                          e.setExperimentFlag(eH.fd.SIGNAL_AV1_HARDWARE_DECODE, !0))
                        : eY.info("This Mac supports AV1 Hardware. AV1 Hardware not yet enabled.");
                } else eY.info("This Mac does not support AV1 Hardware.");
            else if ((0, eN.isLinux)()) e.setExperimentFlag(eH.fd.SIGNAL_AV1_DECODE, !0);
            else if ((0, eN.isIOS)() && tt()) {
                let { enabled: t } = (0, H.$)("MediaEngineStore");
                t &&
                    (e.setExperimentFlag(eH.fd.SIGNAL_AV1_DECODE, !0),
                    e.setExperimentFlag(eH.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
            }
            if ((0, eN.isWeb)()) {
                let { enabled: t } = (0, q.O)("MediaEngineStore");
                e.setExperimentFlag(eH.fd.BROWSER_HEVC, t);
            }
            for (let n of ((0, eN.isWindows)() &&
                t1?.startsWith("AMD") &&
                (0, ed.F)("MediaEngineStore").enabled &&
                e.setExperimentFlag(eH.fd.WMF_GPU_ENCODE, !0),
            (0, eN.isWindows)() &&
                t1?.startsWith("Intel") &&
                (0, e_.J)("MediaEngineStore").enabled &&
                e.setExperimentFlag(eH.fd.WMF_GPU_ENCODE, !0),
            (0, eN.isWindows)() &&
                t1?.startsWith("Qualcomm") &&
                (0, ed.F)("MediaEngineStore").enabled &&
                e.setExperimentFlag(eH.fd.WMF_GPU_ENCODE, !0),
            to.setHasFullbandPerformance((0, P.A)()),
            e.setRemoteAudioHistory(1e3),
            (0, w.A)(r) && e.setClipsKeyFrameInterval(eH.X1),
            (t = ni(e.context)),
            e.setPostponeDecodeLevel(e1),
            Object.keys(t.localMutes)))
                n !== eb.default.getId() && e.setLocalMute(n, t.localMutes[n]);
            for (let n of Object.keys(t.localVolumes))
                n !== eb.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
            for (let n of Object.keys(t.localPans)) {
                let r = t.localPans[n];
                e.setLocalPan(n, r.left, r.right);
            }
            for (let n of Object.keys(t.disabledLocalVideos)) e.setLocalVideoDisabled(n, t.disabledLocalVideos[n]);
            e.on(y.yq.Speaking, (t, n, r, i) => {
                C.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: i });
            }),
                e.context === eH.x.DEFAULT &&
                    ((tR = !1),
                    e.on(y.yq.SpeakingWhileMuted, () => {
                        let e = !tR;
                        (tR = !0),
                            e && r.emitChange(),
                            tO.start(e2, () => {
                                (tR = !1), r.emitChange();
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
                        eS.default.track(eU.HAw.VIDEOHOOK_INITIALIZED, {
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
                    eY.warn(`noisecancellererror event: ${e}`),
                        (0, k.QW)({ type: k.iy.NOISE_CANCELLER_ERROR, underlyingError: nc(e) }),
                        (tY = !0),
                        eS.default.track(eU.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        C.h.dispatch({ type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: !0 }),
                        C.h.dispatch({ type: "AUDIO_SET_NOISE_CANCELLATION", enabled: !1 }),
                        C.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e });
                }),
                e.on(y.yq.VoiceActivityDetectorError, (e) => {
                    eY.warn(`voiceactivitydetectorerror event: ${e}`),
                        (0, k.QW)({ type: k.iy.NOISE_CANCELLER_ERROR, underlyingError: nc(e) }),
                        eS.default.track(eU.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        C.h.dispatch({
                            type: "AUDIO_SET_MODE",
                            context: eH.x.DEFAULT,
                            mode: eU.TBI.VOICE_ACTIVITY,
                            options: { ...ni(eH.x.DEFAULT).modeOptions, vadUseKrisp: !1 },
                        }),
                        C.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e });
                }),
                e.on(y.yq.SdpError, (e, t, n, r) => {
                    eS.default.track(eU.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: r });
                }),
                e.on(y.yq.VideoState, (t) => {
                    C.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                }),
                e.setBitRate(eD.A.bitrate),
                e.applyVideoQualityMode(ek.A.mode),
                (0, eN.isWindows)() &&
                    to.supports(eH.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                    to.setAsyncVideoInputDeviceInit((0, K.v)("setupMediaEngine").enabled);
        }),
        to.on(y.bg.DeviceChange, (e, t, n) => {
            tg.stop(),
                C.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
        }),
        to.on(y.bg.VolumeChange, (e, t) => {
            C.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
        }),
        to.on(y.bg.DesktopSourceEnd, (e, t) => {
            C.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
        }),
        to.on(y.bg.AudioPermission, (e) => {
            (tq = !0), C.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
        }),
        to.on(y.bg.VideoPermission, (e) => {
            C.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
        }),
        to.on(y.bg.WatchdogTimeout, async () => {
            let e;
            if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                try {
                    await ey.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                } catch (t) {
                    "number" == typeof t.status && (e = t.status);
                }
            eY.warn(`Watchdog timeout, report submission status: ${e ?? 200}`),
                eS.default.track(eU.HAw.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        to.on(y.bg.VideoInputInitialized, (e) => {
            eS.default.track(eU.HAw.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired
                    ? null
                    : Math.round(e.timeToFirstFrame * ev.A.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: eM.A.getMediaSessionId(),
                rtc_connection_id: eM.A.getRTCConnectionId(),
            });
        }),
        to.on(y.bg.AudioInputInitialized, (e) => {
            eS.default.track(eU.HAw.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * ev.A.Millis.SECOND),
                rtc_connection_id: eM.A.getRTCConnectionId(),
            });
        }),
        to.on(y.bg.ClipsRecordingRestartNeeded, () => {
            C.h.dispatch({ type: "CLIPS_RESTART" });
        }),
        to.on(y.bg.ClipsInitFailure, (e, t) => {
            C.h.wait(() => {
                C.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t });
            });
        }),
        to.on(y.bg.ClipsRecordingEnded, (e, t) => {
            a?.desktopSource?.id === e && (null != t && s?.desktopSource?.soundshareId !== t && O.c1(t), (a = null));
        }),
        to.on(y.bg.NativeScreenSharePickerUpdate, (e, t) => {
            C.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
        }),
        to.on(y.bg.NativeScreenSharePickerCancel, (e) => {
            C.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
        }),
        to.on(y.bg.NativeScreenSharePickerError, (e) => {
            C.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
        }),
        to.on(y.bg.AudioDeviceModuleError, (e, t, n) => {
            eS.default.track(eU.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
        }),
        to.on(y.bg.VideoCodecError, (e) => {
            let t = "encode" === e.mode ? k.iy.VIDEO_ENCODE_ERROR : k.iy.VIDEO_DECODE_ERROR,
                n = { videoCodec: e.codecStandard, errorMessage: e.message };
            (0, k.QW)(
                t === k.iy.VIDEO_ENCODE_ERROR
                    ? { type: t, ...n, videoEncoder: e.implName }
                    : { type: t, ...n, videoDecoder: e.implName },
            );
        }),
        to.on(y.bg.ConnectionStats, (e) => {
            C.h.dispatch({
                type: "MEDIA_ENGINE_CONNECTION_STATS",
                connectionStats: e.map((e) => {
                    let { stats: t, connection: n } = e;
                    return {
                        stats: t,
                        mediaEngineConnectionId: n.mediaEngineConnectionId,
                        version: e9++,
                        context: n.context,
                    };
                }),
            });
        }),
        to.on(y.bg.VoiceQueueMetrics, (e) => {
            let t = ii(e);
            null !== t && eS.default.track(eU.HAw.VOICE_QUEUE_METRICS, t);
        }),
        to.setOnVideoContainerResized((e, t, n) => {
            C.h.wait(() =>
                C.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
            );
        }),
        tr(),
        ro(),
        ru(),
        o.reset(),
        (0, ex.w)().then((e) => {
            null != e && ((t1 = e.gpu_brand), (t2 = e.has_intel_hybrid_igpu));
        }),
        to.on(y.bg.SystemMicrophoneModeChange, (e) => {
            (f = e), to.eachConnection(nh), r.emitChange();
        });
}
function nE() {
    return (0, eN.isWindows)() && T().satisfies(R.A?.os.release, eG.yg);
}
function ng() {
    return (0, eN.isWindows)() && T().satisfies(R.A?.os.release, eG.fG);
}
function nA() {
    return (0, eN.isMac)() && to.supports(eH.O5.SCREEN_CAPTURE_KIT) && T().satisfies(R.A?.os.release, eG.e);
}
function nI() {
    return (
        (0, eN.isWindows)() &&
        to.supports(eH.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        to.supports(eH.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nT() {
    return to.supports(eH.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function nS() {
    let e = v.w.get("audio");
    null != e && (v.w.set(eW, { [eH.x.DEFAULT]: e }), v.w.remove("audio")),
        (tl = v.w.get(eW) ?? {}),
        E().each(tl, (e) => {
            E().defaultsDeep(e, ts()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, eO.OH)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== eK &&
                    ((e.vadUseKrispSettingVersion = eK), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                e.vadThrehsoldMigrated ||
                    ((e.vadThrehsoldMigrated = !0), e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = e0)),
                to.supports(eH.O5.SIDECHAIN_COMPRESSION) &&
                    e.sidechainCompressionSettingVersion < eq &&
                    ((e.sidechainCompressionSettingVersion = eq), (e.sidechainCompression = !0)),
                (0, eN.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== ez &&
                      ((e.ncUseKrispjsSettingVersion = ez), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== e$ &&
                      ((e.ncUseKrispSettingVersion = e$), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
        }),
        nN();
}
function ny(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eH.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = nr(t);
    return Object.assign(r, e), !__OVERLAY__ && n && v.w.set(eW, tl), r;
}
function nv() {
    v.w.remove(eW), location.reload();
}
function nN() {
    let e = ni();
    to.setAudioInputDevice(e.inputDeviceId),
        to.setAudioOutputDevice(e.outputDeviceId),
        nu(),
        to.setInputVolume(e.inputVolume),
        to.setOutputVolume(e.outputVolume),
        to.setAecDump(e.aecDumpEnabled),
        to.setSidechainCompression(e.sidechainCompression),
        to.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        to.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        eR.Ay?.setOpenH264Enabled?.(e.openH264Enabled);
}
function nC() {
    tc || to.enable().then(() => C.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nR(e) {
    return { id: eH.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
}
function nO(e, t) {
    if (0 === e.length) {
        let e = nR(t);
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
function nb(e, t) {
    let n = e[t] ?? e[eH.dx] ?? E()(e).values().first();
    return null != n ? n.id : t;
}
function nD(e) {
    let t = th;
    if (((th = nO(e, ej.intl.string(ej.t["/QIjDA"]))), !E().isEqual(th, t))) {
        let e = ni(),
            t = nb(th, e.inputDeviceId);
        to.setAudioInputDevice(t), to.eachConnection(nh);
    }
}
function nL(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nw(e) {
    to.eachConnection((t) => {
        t.context === eH.x.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function nM(e) {
    let t = tm;
    if (((tm = nO(e, ej.intl.string(ej.t.xlUg0v))), !E().isEqual(tm, t))) {
        let e = ni(),
            n = nb(tm, e.outputDeviceId);
        to.setAudioOutputDevice(n);
        let r = nL(t),
            i = nL(tm);
        r !== i && nw(i);
    }
}
function nx(e) {
    tD = e.length > 0;
    let t = tE;
    if (((tE = nO(e, ej.intl.string(ej.t.WKWARY))), ty && !E().isEqual(tE, t))) {
        let e = void 0 !== tE[tv],
            n = tv === eH.dx && t[eH.dx]?.disabled,
            r = "Firefox" === A().name && "" === tv && t[tv]?.name === "Default" && !t[tv]?.disabled;
        nu(e || n || r);
    }
}
function nP() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = eg.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let r = n === eV.W.USER ? eH.x.DEFAULT : eH.x.STREAM,
            i = r === eH.x.STREAM ? eH.Cn : eH.Hz,
            s = t[n] ?? {},
            { localMutes: a, localVolumes: o } = ni(r);
        for (let [e, t] of Object.entries(s))
            null == (0, eE.tM)(r, e) &&
                (t.muted ? (a[e] = !0) : delete a[e],
                t.volume !== i ? (o[e] = t.volume) : delete o[e],
                to.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, r));
        if (e)
            for (let e of new Set([...Object.keys(a), ...Object.keys(o)]))
                null == s[e] &&
                    (delete a[e],
                    delete o[e],
                    to.eachConnection((t) => {
                        t.setLocalVolume(e, i), t.setLocalMute(e, !1);
                    }, r));
        ny({ localMutes: a, localVolumes: o }, r);
    }
}
function nk(e) {
    if (null == r)
        return (
            eY.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
            { soundshareId: null, soundshareSession: "" }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : ey.A.getAudioPid(e),
            n = "";
        return null != t && (n = ey.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n };
    }
}
function nU(e, t) {
    (0, eN.isWindows)() &&
        e > 1 &&
        O.GH(e, { soundshare_session: t }).then((t) => {
            null == t ||
                F.Ay.shouldContinueWithoutElevatedProcessForPID(e) ||
                C.h.wait(() => {
                    C.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: t });
                });
        });
}
function nG(e) {
    (i = e.sessionId), (tA = !1), (tS = !1);
    let t = ni();
    if (
        (nI() && (nT() ? rV(eH.rB.AUTOMATIC) : t.automaticAudioSubsystem && rB()),
        to.supports(eH.O5.OFFLOAD_ADM_CONTROLS))
    ) {
        let e = !1;
        (0, eN.isDesktop)()
            ? (e = (0, Y.i)({ location: "handleConnectionOpen" }).enabled)
            : ((0, eN.isIOS)() || (0, eN.isAndroid)()) && (e = (0, W.Y)({ location: "handleConnectionOpen" }).enabled),
            to.setOffloadAdmControls(e);
    }
    (0, eI.Lb)({ location: "MediaEngineStore", autoTrackExposure: !1 }) &&
        null !== t.mostRecentlyRequestedVoiceFilter &&
        (0, eN.isDesktop)() &&
        (eT.A.getLastInitAttemptMayHaveCrashed()
            ? (C.h.dispatch({ type: "AUDIO_SET_SELF_MUTE", mute: !0, context: eH.x.DEFAULT, playSoundEffect: !0 }),
              ny({ mostRecentlyRequestedVoiceFilter: null }))
            : n(342887).md()),
        nP();
}
function nF(e) {
    let { mediaEngineState: t } = e;
    (tl = t.settingsByContext),
        (th = t.inputDevices),
        (tm = t.outputDevices),
        (t0 = t.appSupported),
        (tk = t.krispModuleLoaded),
        (c = t.krispVersion),
        (t_ = t.goLiveContext);
}
function nV() {
    i = null;
}
function nB() {
    return (0, eN.isWeb)() && r.startDavePreload(), !1;
}
function nH(e) {
    switch (e.state) {
        case eU.S7L.CONNECTING:
            nC();
            break;
        case eU.S7L.RTC_CONNECTING:
            (tw = !1), (l = void 0), (u = void 0), (tL = !1), (t6 = !1), t4.stop(), tM.stop(), o.reset();
            break;
        case eU.S7L.RTC_CONNECTED:
            nu();
            break;
        case eU.S7L.DISCONNECTED:
            nX(), nQ();
    }
}
function nj(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (tA = t.mute || t.suppress), (tS = t.deaf), to.eachConnection(no);
            let e = null != t.guildId && null != t.channelId && null != tj && tj !== t.channelId,
                n = !tx && null == t.channelId;
            return nu(!e && !n && ty), (tj = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== eb.default.getId() || null != eM.A.getChannelId() || nu(!1, null), e;
    }, !1);
}
function nY(e) {
    let { mute: t } = e;
    (tI = t), to.eachConnection(no);
}
function nW(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = ni(t);
    if (t === eH.x.DEFAULT && (ep.A.requestPermission(eF.iL.AUDIO), tT)) return !1;
    (r = !i && !r) || (i = !1), n || (tC = !0), ny({ mute: r, deaf: i }, t), to.eachConnection(no);
}
function nK(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    ny({ mute: n }, t), r || (tC = !0), to.eachConnection(no);
}
function n$(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== eV.oD.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    nP(!0);
}
function nz(e) {
    let { context: t } = e;
    ny({ deaf: !ni(t).deaf }, t), to.eachConnection(no);
}
function nq(e) {
    let { context: t, userId: n } = e;
    if (n === eb.default.getId()) return;
    let { localMutes: r } = ni(t);
    r[n] ? delete r[n] : (r[n] = !0),
        ny({ localMutes: r }, t),
        to.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nZ(e) {
    let { context: t, userId: n, videoToggleState: r, persist: i, isAutomatic: s } = e;
    h()(!(i && s), "These are not allowed to both be true.");
    let a = r === eU.bb8.DISABLED,
        { disabledLocalVideos: o } = ni(t),
        l = o[n] ?? !1,
        u = tX.has(n),
        c = r === eU.bb8.AUTO_ENABLED || r === eU.bb8.MANUAL_ENABLED;
    eY.info(`disableVideo=${a} currentlyDisabled=${l} currentlyAutoDisabled=${u}, isVideoShown=${c}`),
        h()(!(u && !l), "If you are auto-disabled, then you are also disabled.");
    let d = a !== l,
        _ = t === eH.x.DEFAULT,
        f = s && d && _,
        p = i && d && _;
    eY.info(`changed=${d} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${f} isManualToggleByUser=${p}`);
    let { videoToggleStateMap: m } = ni(t);
    if (
        (m[n] === eU.bb8.AUTO_PROBING &&
            r === eU.bb8.AUTO_ENABLED &&
            (0, ef.A)(n, a ? eH.Al.AUTO_DISABLE : eH.Al.AUTO_ENABLE, c),
        (m[n] = r),
        ny({ videoToggleStateMap: m }, t, i),
        r === eU.bb8.AUTO_PROBING
            ? eM.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
            : eM.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
        tQ ||
            (eY.info(`isAutoDisableAllowed=${tQ} - disabling VideoHealthManager`),
            eM.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
        f)
    ) {
        if ((!a && !u) || (a && !tQ)) return;
        (0, ef.A)(n, a ? eH.Al.AUTO_DISABLE : eH.Al.AUTO_ENABLE, c), a ? tX.add(n) : tX.delete(n);
    } else
        p &&
            (u && !a
                ? (eY.info("disallowing auto-disable for this session because of manual override by user"),
                  (tQ = !1),
                  eM.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                  (0, ef.A)(n, eH.Al.MANUAL_REENABLE, c))
                : (0, ef.A)(n, a ? eH.Al.MANUAL_DISABLE : eH.Al.MANUAL_ENABLE, c));
    _ && !a && tX.delete(n),
        a ? (o[n] = !0) : delete o[n],
        ny({ disabledLocalVideos: o }, t, i),
        to.eachConnection((e) => e.setLocalVideoDisabled(n, o[n] ?? !1), t);
}
function nX() {
    if (0 === tX.size) return;
    let e = eH.x.DEFAULT,
        { disabledLocalVideos: t } = ni(e);
    tX.forEach((n) => {
        h()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            to.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tX.clear(),
        ny({ disabledLocalVideos: t }, e, !1);
}
function nQ() {
    let e = eH.x.DEFAULT,
        { videoToggleStateMap: t } = ni(e);
    for (let [e, n] of Object.entries(t)) n === eU.bb8.AUTO_PROBING && delete t[e];
    ny({ videoToggleStateMap: t }, e, !1);
}
function nJ(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === eb.default.getId()) return;
    let i = t === eH.x.STREAM ? eH.Cn : eH.Hz,
        { localVolumes: s } = ni(t);
    r === i ? delete s[n] : (s[n] = r), ny({ localVolumes: s }, t), to.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function n0(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: s } = ni(t);
    (s[n] = { left: r, right: i }), ny({ localPans: s }, t), to.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function n1(e) {
    let { context: t, mode: n, options: r } = e;
    ny({ mode: n, modeOptions: { ...r, updatedAt: Date.now() } }, t), to.eachConnection(ns);
}
function n2(e) {
    let { volume: t } = e;
    ny({ inputVolume: na(t) }), to.setInputVolume(t);
}
function n3(e) {
    let { volume: t } = e;
    ny({ outputVolume: t }), to.setOutputVolume(t);
}
function n6(e) {
    let { id: t } = e;
    (t = nb(th, t)),
        (tf = performance.now()),
        ny({ inputDeviceId: t }),
        to.setAudioInputDevice(t),
        to.eachConnection(nh),
        (l = void 0),
        (u = void 0),
        t4.stop(),
        (t6 = !1);
    let { resetSilenceWarningOnDeviceChange: n } = ea.A.getConfig({
        location: "MediaEngineStore.handleSetInputDevice",
    });
    n && ((tL = !1), o.reset());
}
function n4(e) {
    let { id: t } = e;
    ny({ outputDeviceId: (t = nb(tm, t)) }), to.setAudioOutputDevice(t);
}
function n5(e) {
    let { id: t } = e;
    ny({ videoDeviceId: (t = nb(tE, t)) }), nu();
}
function n7(e) {
    let { inputProfile: t } = e;
    ny({ activeInputProfile: t });
    let n = ni();
    to.eachConnection((e) => {
        ns(e), nh(e);
    }),
        to.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        rl();
}
function n8(e) {
    return td !== e.required && ((td = e.required), e.required || to.interact(), !0);
}
function n9(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    nD(t), nM(n), nx(r);
}
function re(e) {
    let { inputVolume: t, outputVolume: n } = e;
    ny({ inputVolume: na(t), outputVolume: n });
}
function rt(e) {
    let t = ni(),
        n = to.getAudioSubsystem(),
        i = to.getAudioLayer(),
        s = nb(th, t.inputDeviceId),
        a = th[s]?.name,
        o = (0, em.A)(t.noiseCancellation, r.getSystemMicrophoneMode());
    eS.default.track(eU.HAw.VOICE_PROCESSING, {
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
function rn(e) {
    let t = ny({ echoCancellation: e.enabled });
    to.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), rl(), rt(e.location);
}
function rr(e) {
    rs(e.enabled);
}
function ri(e) {
    let t = ny({ sidechainCompressionStrength: e.strength });
    to.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function rs(e) {
    let t = ny({ sidechainCompression: e });
    to.setSidechainCompression(t.sidechainCompression);
}
function ra(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tJ.add(n) : tJ.delete(n), ro(), rl();
}
function ro() {
    let e = !tJ.has("voice_filter_preview") && !tJ.has("mic_test");
    to.setMaybePreprocessMute(e);
}
function rl() {
    let e = ni(),
        t = tJ.size > 0,
        n = e.inputDeviceId,
        r = eL.A.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        s = eL.A.hasNoiseSuppression(n) || e.noiseSuppression,
        a = n_(eL.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        o = e.noiseCancellation,
        l = null !== tF,
        u = tJ.has("voice_filter") && 1 === tJ.size;
    to.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: s,
        automaticGainControlConfig: a,
        noiseCancellation: o,
        voiceFilters: l,
        loopbackUseAudioMode: u,
    });
}
async function ru() {
    if (!to.supports(eH.O5.VAAPI)) return;
    let e = 4098;
    if (window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let t = await window.DiscordNative.processUtils.getSystemInfo();
    (t.electronGPUInfo?.gpuDevice ?? []).some((t) => t.vendorId === e) &&
        ((t8 = !0), (t7 = to.supports(eH.O5.GAMESCOPE_CAPTURE)));
}
function rc(e) {
    let t = ny({ noiseSuppression: e.enabled });
    to.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), rl(), rt(e.location);
}
function rd(e) {
    let t = ny({ automaticGainControl: e.enabled });
    to.eachConnection((e) => nf(e, t.automaticGainControl)), rl(), rt(e.location);
}
function r_(e) {
    let t = ny({ noiseCancellation: e.enabled });
    to.eachConnection((e) => np(e, t.noiseCancellation)), rl(), rt(e.location);
}
function rf(e) {
    eh.A.setKrispModelOverride(e.model), (_ = e.model), rl();
}
function rp(e) {
    (0, eN.isWeb)() || ((tG = e.enabled), to.setNoiseCancellationEnableStats?.(e.enabled));
}
function rh(e) {
    ny({ silenceWarning: e.enabled });
}
function rm(e) {
    to.setDebugLogging(e.enabled);
}
function rE(e) {
    let { level: t } = e;
    (d = t), eh.A.setKrispSuppressionLevel(t);
}
function rg(e) {
    ny({ videoHook: e.enabled });
}
function rA(e) {
    ny({ experimentalSoundshare2: e.enabled });
}
function rI(e) {
    let { enabled: t } = e;
    ny({ useSystemScreensharePicker: t });
}
function rT(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = ny({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r });
    to.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function rS(e) {
    let { enabled: t } = e;
    ny({ qos: t }), to.eachConnection((e) => e.setQoS(t));
}
function ry() {
    nv();
}
function rv(e) {
    let { osVolume: t, osMuted: n } = e;
    (u = t), (l = n);
}
function rN(e) {
    let { inputDetected: t } = e;
    if (null == t) return !1;
    if (((tw = !0 !== tL && !t), t)) (tL = !0), (t6 = !1), t4.stop(), tM.stop();
    else if (ni().mode === eU.TBI.VOICE_ACTIVITY && tL) {
        let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = ea.A.getConfig({
            location: "MediaEngineStore.handleInputDetected",
        });
        e &&
            t4.start(e6, () => {
                eS.default.track(eU.HAw.HARDWARE_MUTE_GUESSED, {
                    input_device_name: th[nb(th, ni().inputDeviceId)]?.name,
                    rtc_connection_id: eM.A.getRTCConnectionId(),
                }),
                    (t6 = !0),
                    r.emitChange();
            }),
            null != t &&
                tM.start(t * ev.A.Millis.MINUTE, () => {
                    (tL = !1), o.reset();
                });
    }
}
function rC(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === tT) return !1;
    (tT = n), to.eachConnection(no);
}
function rR(e) {
    let { state: t, permissionType: n } = e,
        r = t === eF.hL.ACCEPTED;
    switch (n) {
        case eF.iL.AUDIO:
            (tq = !0), to.eachConnection(no);
            break;
        case eF.iL.CAMERA:
            !r && ty && nu(!1);
            break;
        default:
            return !1;
    }
}
function rO() {
    return tk || !1;
}
async function rb() {
    try {
        await eR.Ay.ensureModule("discord_krisp");
        let e = eR.Ay.requireModule("discord_krisp");
        (tk = !0),
            (c = e.getSdkVersion?.()),
            (d = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (tU = e), r.emitChange();
            }),
            r.emitChange();
    } catch (t) {
        eY.warn(`Failed to load Krisp module: ${t.message}`), eC.A.captureException(t);
        let e = eH.CO.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eH.CO.INITIALIZED : n;
        }
        eS.default.track(eU.HAw.VOICE_PROCESSING, { noise_canceller_error: e }), ny({ noiseCancellation: !1 });
    } finally {
        tP = !1;
    }
}
function rD() {
    return (0, eN.isWindows)() || (0, eN.isLinux)() || (0, eN.isMac)();
}
function rL() {
    !rD() || __OVERLAY__ || tP || tk
        ? (0, eN.isWeb)() && to.supports(eH.O5.NOISE_CANCELLATION)
            ? ((tk = !0), r.emitChange())
            : (0, eN.isWeb)() && ny({ noiseCancellation: !1 })
        : ((tP = !0), rb());
}
async function rw() {
    try {
        let e,
            t = "",
            n = !1,
            r = URL.parse(e7);
        if (null === r) return void eY.log("OpenH264 URL ", r, " is invalid");
        let i = r.pathname.split("/"),
            s = i[i.length - 1].replace(".bz2", "");
        try {
            let t = await eR.Ay.downloadOpenH264(e7, s, e8, (e) => {
                eY.log("OpenH264 download status", e);
            });
            eY.log("OpenH264 is ready", t), (n = t.fetchedFromNetwork), (e = !0);
        } catch (n) {
            eY.error("OpenH264 download failed", n), (t = n.message), (e = !1);
        }
        if (
            (eS.default.track(eU.HAw.VIDEO_OPENH264_DOWNLOADED, {
                success: e,
                fetched_from_network: n,
                error_message: t,
            }),
            e)
        ) {
            let e = await eR.Ay.cleanupUnusedOpenH264Files([s]);
            eY.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        eY.error("OpenH264 download failed", e);
    }
}
function rM() {
    (0, eN.isLinux)() && rw();
}
function rx(e) {
    let { enabled: t } = e;
    eS.default.track(eU.HAw.VOICE_FILTER_PLAYBACK_TOGGLED, { active_voice_filter_id: tF ?? null, enabled: t }),
        ny({ voiceFilterPlaybackEnabled: t });
}
function rP(e) {
    let { newVoiceFilterId: t } = e;
    ny({ mostRecentlyRequestedVoiceFilter: t }), to.eachConnection((e) => e.setVoiceFilterId(t));
}
function rk() {
    ny({ mostRecentlyRequestedVoiceFilter: null });
}
function rU(e) {
    let { voiceFilterId: t } = e;
    (tB = tF), (tH = tV), (tF = t), (tV = null === t ? null : Date.now());
}
function rG(e) {
    let t = e.bypassEnabled;
    ny({ bypassSystemInputProcessing: t }), to.setAudioInputBypassSystemProcessing(t), rt(e.location);
}
function rF(e) {
    rV(e.subsystem);
}
function rV(e) {
    e === eH.rB.AUTOMATIC
        ? (ny({ automaticAudioSubsystem: !0 }), rB())
        : (ny({ automaticAudioSubsystem: !1 }), to.setAudioSubsystem(e));
}
function rB() {
    to.queueAudioSubsystem(eH.rB.EXPERIMENTAL);
}
function rH(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && nu(i, null), null != t || null == n)) {
        tx = !1;
        return;
    }
    if (tx) return;
    tx = !0;
    let s = ni();
    (s.mute || s.deaf) && (ny({ deaf: !1, mute: !1 }), to.eachConnection(no));
}
function rj(e) {
    let { application: t } = e;
    tu.add(t.id);
}
function rY(e) {
    let { application: t } = e;
    tu.delete(t.id);
}
function rW(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (tc = !1), to.eachConnection(no);
                break;
            case "video":
                nu(!1);
        }
}
function rK(e) {
    (tc = e.enabled), e.unmute && ny({ mute: !1, deaf: !1 }), to.eachConnection(no);
}
function r$(e) {
    let { enabled: t } = e;
    ep.A.requestPermission(eF.iL.CAMERA), nu(t);
}
function rz(e) {
    let { sourceId: t, applicationName: n, quality: i } = e;
    if (!(0, M.Ao)() || null == R.A) return !1;
    let s = null,
        o = null,
        l = ey.A.getPidFromDesktopSource(t);
    ({ soundshareId: s, soundshareSession: o } = nk(l));
    let u = { desktopSource: { id: t, sourcePid: l, soundshareId: s, soundshareSession: o }, quality: i };
    null != a &&
        (to.setClipsSource(null),
        (0, eN.isWindows)() && null != a.desktopSource.soundshareId && O.c1(a.desktopSource.soundshareId)),
        null != s && nU(s, o),
        (a = u);
    let c = ne("MediaEngineStore clips"),
        d = ni().videoHook;
    to.setClipsSource({
        desktopDescription: {
            id: a.desktopSource.id,
            soundshareId: a.desktopSource.soundshareId,
            useVideoHook: d,
            useGraphicsCapture: nE(),
            useCaptureDeviceForEncode: !1,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: nA(),
            videoHookStaleFrameTimeoutMs: eQ,
            graphicsCaptureStaleFrameTimeoutMs: eJ,
            hdrCaptureMode: c,
        },
        quality: i,
        applicationName: n,
    });
}
function rq(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((a = null), to.setClipsSource(null));
}
function rZ(e) {
    let { settings: t } = e;
    if (t?.desktopSettings != null) {
        let e = null,
            n = null,
            { sourceId: r, sound: i } = t.desktopSettings,
            s = t.context ?? eH.x.DEFAULT,
            a = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
            o = !1 === i ? null : ey.A.getPidFromDesktopSource(r);
        eN.isPlatformEmbedded &&
            !0 === i &&
            (({ soundshareId: e, soundshareSession: n } = nk(o)), null != e && nU(e, n)),
            nl(s),
            nu(s === eH.x.STREAM && ty, {
                desktopSource: { id: r, sourcePid: o, soundshareId: e, soundshareSession: n },
                quality: { resolution: a.resolution, frameRate: a.frameRate },
            });
    } else if (t?.cameraSettings != null) {
        let e = t.context ?? eH.x.DEFAULT,
            { videoDeviceGuid: n, audioDeviceGuid: r } = t.cameraSettings,
            i = e === eH.x.STREAM && ty,
            s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
        nu(i, {
            cameraSource: { videoDeviceGuid: n, audioDeviceGuid: r },
            quality: { resolution: s.resolution, frameRate: s.frameRate },
        });
    } else nu(ty, null);
}
function rX(e) {
    let { section: t } = e;
    return t === eU.nc_.VOICE && nC(), !1;
}
function rQ() {
    return to.eachConnection(nh), !1;
}
function rJ(e) {
    let { enabled: t } = e,
        n = ny({ aecDumpEnabled: t });
    to.setAecDump(n.aecDumpEnabled);
}
function r0(e) {
    let { enabled: t } = e;
    ny({ openH264Enabled: t }), eR.Ay?.setOpenH264Enabled?.(t);
}
function r1(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (tl = Object.values(eH.x).reduce((e, n) => {
        let r = n,
            i = ts();
        return (e[r] = E().merge(i, t[r])), e;
    }, {})),
        v.w.set(eW, tl),
        nN();
}
function r2(e) {
    let { state: t } = e,
        n = G.A.isEnabled();
    if (t === eU.g6G.BACKGROUND && ty && !n) (tb = !0), nu(!1);
    else {
        if (t !== eU.g6G.ACTIVE || !tb) return !1;
        (tb = !1), nu(!0);
    }
    return !0;
}
function r3(e) {
    to.eachConnection((t) => t.setBitRate(e.bitrate));
}
function r6() {
    if ((!ty && null == s) || null != eM.A.getRTCConnectionId()) return !1;
    nu(!1, null);
}
function r4() {
    return !!tY && ((tY = !1), !0);
}
function r5(e) {
    to.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function r7(e) {
    let { settings: t } = e;
    to.applyMediaFilterSettings(t).finally(() => {
        (tW = !1), r.emitChange();
    });
}
function r8() {
    tW = !0;
}
function r9() {
    tW = !1;
}
function ie(e) {
    t3 = e.enabled;
}
function it() {
    if ((0, eN.isDesktop)() && eN.isPlatformEmbedded && !t9) {
        t9 = !0;
        let e = async () => {
            let t = await new Promise((e) => {
                eR.Ay.pollQueueMetrics((t) => {
                    e(t);
                });
            });
            t.periodMs = eH.tl;
            let n = ii(t);
            null !== n && eS.default.track(eU.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, eH.tl);
        };
        setTimeout(e, eH.tl);
    }
}
class ir extends S.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        nm(),
            nS(),
            rL(),
            rM(),
            nQ(),
            it(),
            (0, eN.isWindows)() && eN.isPlatformEmbedded && nd(),
            (t0 = {
                [eH.O5.VIDEO]: to.supports(eH.O5.VIDEO),
                [eH.O5.DESKTOP_CAPTURE]: to.supports(eH.O5.DESKTOP_CAPTURE),
                [eH.O5.HYBRID_VIDEO]: to.supports(eH.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eb.default, eD.A, eL.A, ew.A, L.A, U.A, eM.A, F.Ay, eg.A, eP.default, ek.A, eT.A);
    }
    supports(e) {
        return to.supports(e);
    }
    supportsInApp(e) {
        return t0[e] || to.supports(e);
    }
    isSupported() {
        return to.supported();
    }
    isNoiseSuppressionSupported() {
        return to.supports(eH.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return rO();
    }
    isNoiseCancellationError() {
        return tY;
    }
    isAutomaticGainControlSupported() {
        return to.supports(eH.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nT() && (to.supports(eH.O5.LEGACY_AUDIO_SUBSYSTEM) || to.supports(eH.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return to.supports(eH.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === to.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return rO();
    }
    isAecDumpSupported() {
        return to.supports(eH.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return to.supports(eH.O5.VIDEO) && to.supports(eH.O5.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        return ew.A.getChannel(tj)?.type !== eU.rbe.GUILD_STAGE_VOICE && e4 && Q.A.simulcastEnabled();
    }
    getAecDump() {
        return ni().aecDumpEnabled;
    }
    getMediaEngine() {
        return to;
    }
    getVideoComponent() {
        return to.Video;
    }
    getCameraComponent() {
        return to.Camera;
    }
    getKrispSuppressionLevel() {
        return d ?? 100;
    }
    getKrispEnableStats() {
        return tG;
    }
    isEnabled() {
        return tc;
    }
    isMute() {
        return this.isSelfMute() || tA;
    }
    isDeaf() {
        return this.isSelfDeaf() || tS;
    }
    hasContext(e) {
        return null != tl[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eH.x.DEFAULT;
        return e === eH.x.DEFAULT && tI;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eH.x.DEFAULT;
        return (
            !this.isEnabled() ||
            ni(e).mute ||
            !ep.A.didHavePermission(eF.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eH.x.DEFAULT && tT)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tC;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tC = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eH.x.DEFAULT,
            t = t6 && "voice_isolation" !== this.getSystemMicrophoneMode() && ni(e).mode === eU.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (eL.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return t3;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eH.x.DEFAULT;
        return !this.isSupported() || ni(e).deaf;
    }
    isVideoEnabled() {
        return ty && tD;
    }
    isVideoAvailable() {
        return Object.values(tE).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return tD;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eH.x.STREAM;
        return t_ === e && null != s;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eH.x.STREAM;
        return t_ === e && null != s && s.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eH.x.DEFAULT;
        return e !== eb.default.getId() && (ni(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return to.supports(eH.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eH.x.DEFAULT;
        return ni(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eH.x.DEFAULT;
        return ni(t).videoToggleStateMap[e] ?? eU.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eH.x.DEFAULT;
        return t === eH.x.DEFAULT && tX.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eH.x.DEFAULT;
        return e === eH.x.DEFAULT && tX.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tW;
    }
    isNativeAudioPermissionReady() {
        return tq;
    }
    getGoLiveSource() {
        return s;
    }
    getGoLiveContext() {
        return t_;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return tf;
    }
    isH264MfDecodeAvailable() {
        return tp;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eH.x.DEFAULT,
            n = ni(t).localPans[e];
        return null != n ? n : eX;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eH.x.DEFAULT,
            n = t === eH.x.STREAM ? eH.Cn : eH.Hz,
            r = ni(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return ni().inputVolume;
    }
    getOutputVolume() {
        return ni().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eH.x.DEFAULT;
        return ni(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eH.x.DEFAULT;
        return ni(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return tF;
    }
    getActiveVoiceFilterAppliedAt() {
        return tV;
    }
    getPreviousVoiceFilter() {
        return tB;
    }
    getPreviousVoiceFilterAppliedAt() {
        return tH;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return ni().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return ni().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            E().each(tl, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === eU.TBI.PUSH_TO_TALK && tu.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nb(th, ni().inputDeviceId);
    }
    getOutputDeviceId() {
        return nb(tm, ni().outputDeviceId);
    }
    getVideoDeviceId() {
        return nb(tE, ni().videoDeviceId);
    }
    getInputDevices() {
        return th;
    }
    getOutputDevices() {
        return tm;
    }
    getVideoDevices() {
        return tE;
    }
    getEchoCancellation() {
        let e = ni();
        return eL.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return to.supports(eH.O5.SIDECHAIN_COMPRESSION) && ni().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return ni().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return ni().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== t$ && t$;
    }
    getOpenH264Enabled() {
        return (0, eN.isLinux)() && ni().openH264Enabled;
    }
    getLoopback() {
        return tJ.size > 0;
    }
    getLoopbackReasons() {
        return tJ;
    }
    getNoiseSuppression() {
        let e = ni();
        return eL.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = ni();
        return eL.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return ni().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return ni().noiseCancellation;
    }
    getHardwareEncoding() {
        return e4;
    }
    getEnableSilenceWarning() {
        return ni().silenceWarning;
    }
    getDebugLogging() {
        return to.getDebugLogging();
    }
    getQoS() {
        return ni().qos;
    }
    getAttenuation() {
        return ni().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return ni().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return ni().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return nI() && ni().automaticAudioSubsystem ? eH.rB.AUTOMATIC : to.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return to.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return ni().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eB.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eH.x.DEFAULT;
        return ni(e);
    }
    getState() {
        return {
            settingsByContext: tl,
            inputDevices: th,
            outputDevices: tm,
            appSupported: t0,
            krispModuleLoaded: tk,
            krispVersion: c,
            krispSuppressionLevel: d,
            goLiveSource: s,
            goLiveContext: t_,
        };
    }
    getInputDetectedThisConnection() {
        return tL;
    }
    getInputDetected() {
        return o.inputDetected;
    }
    getLastInputDetectedUpdateTime() {
        return o.lastUpdateTime;
    }
    getNoInputDetectedNotice() {
        return tw;
    }
    getInputDeviceOSMuted() {
        return l;
    }
    getInputDeviceOSVolume() {
        return u;
    }
    getPacketDelay() {
        return eN.isPlatformEmbedded || this.getMode() !== eU.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        to.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return td;
    }
    getVideoHook() {
        return ni().videoHook;
    }
    supportsVideoHook() {
        return to.supports(eH.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = ni().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return to.supports(eH.O5.EXPERIMENTAL_SOUNDSHARE) && T().satisfies(R.A?.os.release, eG.$x);
    }
    supportsHookSoundshare() {
        return (0, eN.isWindows)() && to.supports(eH.O5.SOUNDSHARE) && T().satisfies(R.A?.os.release, eG.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = ni().useSystemScreensharePicker,
            n = (0, eN.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return to.supports(eH.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return t8;
    }
    getUseGamescopeCapture() {
        return t7;
    }
    getSpeakingWhileMuted() {
        return tR;
    }
    getKrispModelOverride() {
        return _;
    }
    getKrispModels() {
        return tU;
    }
    getKrispVadActivationThreshold() {
        return ni().modeOptions.vadKrispActivationThreshold ?? eZ;
    }
    hasActiveCallKitCall() {
        return t5;
    }
    setHasActiveCallKitCall(e) {
        t5 = e;
    }
    supportsScreenSoundshare() {
        return (0, eN.isMac)()
            ? to.supports(eH.O5.SOUNDSHARE) && T().satisfies(R.A?.os.release, eG.P$) && nA()
            : (0, eN.isWindows)()
              ? to.supports(eH.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, eN.isLinux)() && to.supports(eH.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        return (0, eN.isWindows)()
            ? this.getInputDevices()[this.getInputDeviceId()]?.effects?.find((e) => e === e5)
            : (0, eN.isMac)() || (0, eN.isIOS)()
              ? f
              : void 0;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eH.x.DEFAULT,
            t = this.supports(eH.O5.VIDEO)
                ? [{ rid: "100", type: e === eH.x.DEFAULT ? eH.mI.VIDEO : eH.mI.SCREEN, quality: eH.Y4 }]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === eH.x.DEFAULT || this.goLiveSimulcastEnabled()) &&
                t.push({ rid: "50", type: e === eH.x.DEFAULT ? eH.mI.VIDEO : eH.mI.SCREEN, quality: eH.Cl }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: (0, eN.isWeb)() };
        return to.fetchAsyncResources(e);
    }
    startDavePreload() {
        if (!tK && ((tK = !0), (0, eN.isWeb)())) {
            let e = { fetchDave: !0 };
            to.fetchAsyncResources(e).catch((e) => {
                eY.warn("DAVE preload failed:", e), eC.A.captureException(e);
            });
        }
    }
    getSupportedSecureFramesProtocolVersion() {
        return to.getSupportedSecureFramesProtocolVersion();
    }
    hasClipsSource() {
        return null != a;
    }
    getGpuBrand() {
        return t1;
    }
}
function ii(e) {
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
(r = new ir(C.h, {
    VOICE_CHANNEL_SELECT: rH,
    VOICE_STATE_UPDATES: nj,
    CONNECTION_OPEN: nG,
    CONNECTION_CLOSED: nV,
    POST_CONNECTION_OPEN: nB,
    RTC_CONNECTION_STATE: nH,
    AUDIO_SET_TEMPORARY_SELF_MUTE: nY,
    AUDIO_TOGGLE_SELF_MUTE: nW,
    AUDIO_SET_SELF_MUTE: nK,
    AUDIO_TOGGLE_SELF_DEAF: nz,
    AUDIO_TOGGLE_LOCAL_MUTE: nq,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: nZ,
    AUDIO_SET_LOCAL_VOLUME: nJ,
    AUDIO_SET_LOCAL_PAN: n0,
    AUDIO_SET_MODE: n1,
    AUDIO_SET_INPUT_VOLUME: n2,
    AUDIO_SET_OUTPUT_VOLUME: n3,
    AUDIO_SET_INPUT_DEVICE: n6,
    AUDIO_SET_OUTPUT_DEVICE: n4,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: n7,
    AUDIO_SET_ECHO_CANCELLATION: rn,
    AUDIO_SET_SIDECHAIN_COMPRESSION: rr,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: ri,
    AUDIO_SET_LOOPBACK: ra,
    AUDIO_SET_NOISE_SUPPRESSION: rc,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: rd,
    AUDIO_SET_NOISE_CANCELLATION: r_,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: rf,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: rh,
    AUDIO_SET_DEBUG_LOGGING: rm,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: rE,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: rp,
    MEDIA_ENGINE_SET_VIDEO_HOOK: rg,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: rA,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: rI,
    AUDIO_SET_ATTENUATION: rT,
    AUDIO_SET_QOS: rS,
    MEDIA_ENGINE_DEVICES: n9,
    AUDIO_VOLUME_CHANGE: re,
    AUDIO_RESET: ry,
    AUDIO_INPUT_DETECTED: rN,
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: rv,
    AUDIO_SET_SUBSYSTEM: rF,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rG,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rK,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: r$,
    MEDIA_ENGINE_PERMISSION: rW,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rZ,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: n5,
    MEDIA_ENGINE_INTERACTION_REQUIRED: n8,
    USER_SETTINGS_MODAL_INIT: rX,
    USER_SETTINGS_MODAL_SET_SECTION: rX,
    CERTIFIED_DEVICES_SET: rQ,
    RPC_APP_CONNECTED: rj,
    RPC_APP_DISCONNECTED: rY,
    OVERLAY_INITIALIZE: nF,
    APP_STATE_UPDATE: r2,
    SET_CHANNEL_BITRATE: r3,
    SET_VAD_PERMISSION: rC,
    SET_NATIVE_PERMISSION: rR,
    SET_CHANNEL_VIDEO_QUALITY_MODE: r5,
    MEDIA_ENGINE_SET_AEC_DUMP: rJ,
    MEDIA_ENGINE_SET_OPENH264_ENABLED: r0,
    MEDIA_ENGINE_RESET_SETTINGS: r1,
    CHANNEL_DELETE: r6,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: r4,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: r7,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: r8,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: r9,
    USER_SETTINGS_PROTO_UPDATE: n$,
    CLIPS_INIT: rz,
    CLIPS_SETTINGS_UPDATE: rq,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: ie,
    VOICE_FILTER_REQUEST_SWITCH: rP,
    VOICE_FILTER_LOOPBACK_TOGGLE: rx,
    VOICE_FILTER_APPLIED: rU,
    VOICE_FILTER_DOWNLOAD_FAILED: rk,
    VOICE_FILTER_APPLY_FAILED: rk,
})),
    (o = new et.A(to, r));
let is = r;
