"use strict";
let r, i, s, a, o, l, u, c, d, _, f;
n.d(t, { Ay: () => io }), n(323874), n(14289), n(35956), n(321073), n(790599);
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
var ea = n(267378),
    eo = n(801644),
    el = n(223572),
    eu = n(276006),
    ec = n(886124),
    ed = n(165479),
    e_ = n(896014),
    ef = n(765396),
    ep = n(75076),
    eh = n(674966),
    em = n(559633),
    eE = n(3527),
    eg = n(714763),
    eA = n(879172),
    eI = n(617617),
    eT = n(340913),
    eS = n(996744),
    ey = n(28075),
    ev = n(954571),
    eN = n(353835),
    eC = n(927813),
    eR = n(723702),
    eO = n(728458),
    eb = n(837921),
    eD = n(350535),
    eL = n(961350),
    ew = n(131319),
    eM = n(347481),
    ex = n(734057),
    eP = n(383501),
    ek = n(851581),
    eU = n(287809),
    eG = n(117549),
    eF = n(652215),
    eV = n(502075),
    eB = n(765682),
    eH = n(355097),
    ej = n(509381),
    eY = n(731854),
    eW = n(985018);
let eK = new x.A("MediaEngineStore"),
    e$ = "MediaEngineStore",
    ez = 4,
    eq = 1,
    eZ = 1,
    eX = 1,
    eQ = 0.5,
    eJ = { left: 1, right: 1 },
    e0 = 500,
    e1 = 5 * eC.A.Millis.SECOND,
    e2 = -60,
    e3 = 100,
    e6 = 2 * eC.A.Millis.SECOND,
    e4 = 30 * eC.A.Millis.SECOND,
    e5 = +eC.A.Millis.MINUTE,
    e7 = !0,
    e8 = "deep_noise_suppression",
    e9 = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2",
    te = "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f",
    tt = 0,
    tn = null;
function tr() {
    if (!(0, eR.isIOS)() || null == tn) return !1;
    let e = tn();
    if (null == e || !e.startsWith("ARM64_")) return !1;
    let t = e.substring(6);
    return ("T" === t[0] || "S" === t[0]) && parseInt(t.substring(1), 10) >= 8122;
}
let ti = null;
async function ts() {
    if (!(0, eR.isMac)() || R.A?.os.arch !== "arm64" || R.A?.processUtils?.getSystemInfo == null) {
        ti = !1;
        return;
    }
    let e = await R.A.processUtils.getSystemInfo(),
        t = e.cpus?.[0]?.model ?? "";
    eK.info("Detected Mac CPU", t);
    let n = t.match(/Apple M(\d+)/);
    if (null == n) {
        ti = !0;
        return;
    }
    ti = parseInt(n[1], 10) >= 3;
}
function ta() {
    return !0 === ti;
}
function to() {
    return {
        mode: eF.TBI.VOICE_ACTIVITY,
        modeOptions: {
            threshold: e2,
            autoThreshold: eR.isPlatformEmbedded || __OVERLAY__,
            vadUseKrisp: !0,
            vadKrispActivationThreshold: eQ,
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
        inputVolume: eY.Hz,
        outputVolume: eY.Hz,
        inputDeviceId: eY.dx,
        outputDeviceId: eY.dx,
        videoDeviceId: eY.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: tu.supports(eY.O5.VIDEO_HOOK),
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
let tl = {
        [ej.m.CUSTOM]: {},
        [ej.m.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [ej.m.STUDIO]: {
            mode: eF.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    tu = (0, y.hB)((0, y.WI)());
eK.enableNativeLogger(!0);
let tc = {},
    td = new Set([eY.x.DEFAULT]),
    t_ = tu.supports(eY.O5.AUTO_ENABLE),
    tf = !1,
    tp = eY.x.STREAM,
    th = performance.now(),
    tm = null,
    tE = { [eY.dx]: nb("No Input Devices") },
    tg = { [eY.dx]: nb("No Output Devices") },
    tA = { [eY.dx]: nb("No Video Devices") },
    tI = new N.Ep(),
    tT = !1,
    tS = !1,
    ty = !1,
    tv = !1,
    tN = !1,
    tC = eY.qe,
    tR = eY.qe,
    tO = !1,
    tb = !1,
    tD = new N.Ep(),
    tL = !1,
    tw = !1,
    tM = !1,
    tx = !1,
    tP = new N.Ep(),
    tk = !1,
    tU = !1,
    tG = !1,
    tF = [],
    tV = !1,
    tB = null,
    tH = null,
    tj = null,
    tY = null,
    tW = null,
    tK = !1,
    t$ = !1,
    tz = !1,
    tq = null,
    tZ = null,
    tX = !1;
eh.A.hasPermission(eB.iL.AUDIO, { showAuthorizationError: !1 }),
    eh.A.hasPermission(eB.iL.CAMERA, { showAuthorizationError: !1 });
let tQ = !1,
    tJ = new Set(),
    t0 = tQ,
    t1 = new Set(),
    t2 = {},
    t3 = null,
    t6 = null,
    t4 = !0,
    t5 = !1,
    t7 = new N.Ep(),
    t8 = !1,
    t9 = !1,
    ne = !1,
    nt = !1;
function nn(e) {
    return (0, X.p)({ location: e }).hdrCaptureMode;
}
async function nr() {
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
function ni() {
    return null != tZ ? tZ : "u" > typeof window ? (tZ = nr().then((e) => ((tq = e), e))) : Promise.resolve(!1);
}
function ns() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eY.x.DEFAULT,
        t = tc[e];
    return null == t && ((t = to()), (tc[e] = t)), t;
}
function na() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eY.x.DEFAULT,
        t = ns(e),
        n = tl[t.activeInputProfile ?? ej.m.CUSTOM],
        r = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}) };
    if (
        (null == r.vadDuringPreProcess && (r.vadDuringPreProcess = (0, el.R)({ location: "getSettings" }).enabled),
        (null == r.vadKrispActivationThreshold && !0 === n.automaticGainControl) || !0 === t.automaticGainControl)
    ) {
        let e = (0, B.F)({ location: "getSettings" });
        null != e.vadKrispActivationThreshold && (r.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return { ...t, ...n, modeOptions: r };
}
function no(e) {
    let t = na(e.context),
        n = t.mode;
    e.context === eY.x.DEFAULT && (0, es.N)(!1, !1);
    let { showPTTSpeakingIndicator: r } = eT.A.getConfig({ location: "setInputMode" }),
        i = r && n === eF.TBI.PUSH_TO_TALK;
    e.setInputMode(n, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: !!i || t.modeOptions.autoThreshold,
        vadUseKrisp: (!!i || t.modeOptions.vadUseKrisp) && rD(),
        vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? eQ,
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        vadDuringPreProcess: t.modeOptions.vadDuringPreProcess ?? !1,
        pttReleaseDelay: Math.round(t.modeOptions.delay),
    });
}
function nl(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eY.Hz;
    return E().clamp(e, 0, t);
}
function nu(e) {
    let t = na(e.context),
        n = !t_ || t.mute || t.deaf;
    e.context === eY.x.DEFAULT
        ? (n = n || tT || tS || ty || !eh.A.didHavePermission(eB.iL.AUDIO))
        : e.context === eY.x.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eY.x.DEFAULT && b.A.updateNativeMute();
}
function nc(e) {
    e !== tp && (null != s && tu.setGoLiveSource(null, tp), (tp = e));
}
function nd() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tN,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
        n = s;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, eR.isWindows)() && O.c1(n.desktopSource.soundshareId),
            tu.setGoLiveSource(null, tp)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            tu.setGoLiveSource(null, tp),
        tN || e)
    ) {
        let t = na().videoDeviceId;
        tN && t === eY.dx && tR === eY.dx && tC !== eY.qe ? (t = tC) : (tR = t),
            (tC = (tN = e) ? nL(tA, t) : eY.qe),
            tu.setVideoInputDevice(tC);
    }
    if (((s = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = nn("MediaEngineStore go live"),
                i = na().videoHook,
                s = nA(),
                a = s ? (nI() ? eV.zl : eV.eg) : 0,
                o = (0, eR.isWindows)() && (0, eu.b)("updateVideo").enabled,
                l = !1;
            (0, eR.isWindows)() &&
                a >= eV.zl &&
                (l =
                    !0 === t6
                        ? ed.q.getConfig({ location: "updateVideo" }).enabled
                        : ec.d.getConfig({ location: "updateVideo" }).enabled),
                tu.setGoLiveSource(
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
                            allowScreenCaptureKit: nT(),
                            videoHookStaleFrameTimeoutMs: e0,
                            graphicsCaptureStaleFrameTimeoutMs: e1,
                            hdrCaptureMode: n,
                            enableGlobalFramePoolLock: (0, Z.H)({ location: "updateVideo" }).enabled,
                            useGraphicsCaptureDirtyRegions: l,
                        },
                        quality: e,
                    },
                    tp,
                );
        }
        null != t.cameraSource &&
            tu.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: t.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: t.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                tp,
            );
    }
}
function n_(e) {
    switch (e) {
        case eY.CO.CPU_OVERUSE:
            return k.B6.NoiseCancellerCpuOveruse;
        case eY.CO.FAILED:
            return k.B6.NoiseCancellerFailed;
        case eY.CO.VAD_CPU_OVERUSE:
            return k.B6.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function nf() {
    null === tm &&
        tu
            .getCodecSurvey()
            .then((e) => {
                try {
                    let t = JSON.parse(e);
                    if (null == t || null == t.available_video_decoders) throw Error("decoder survey is not available");
                    tm = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                } catch (e) {
                    eK.error("Failed to parse codec survey", e), (tm = !1);
                }
            })
            .catch((e) => {
                eK.error("Failed to get codec survey", e), (tm = !1);
            })
            .finally(() => {
                C.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
            });
}
function np(e) {
    let t = (0, B.F)({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function nh(e, t) {
    e.setAutomaticGainControl(np(t));
}
function nm(e, t) {
    let n = (0, eE.A)(t, r.getSystemMicrophoneMode(), { location: "setNoiseCancellation" });
    n !== t && eK.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: i } = (0, B.F)({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(i);
    let { noiseCancellationAfterProcessing: s, vadAfterWebrtc: a } = (0, en.$)({ location: "setNoiseCancellation" });
    e.setNoiseCancellationAfterProcessing(s), e.setVADAfterWebrtc(a);
}
function nE(e) {
    let t = na(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eM.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eM.A.hasNoiseSuppression(n) || t.noiseSuppression),
        nh(e, eM.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        nm(e, t.noiseCancellation),
        e.setVoiceFilterId(tB),
        (0, eR.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function ng() {
    tI.start(e4, () => {
        eK.error("Device enumeration timed out"), ev.default.track(eF.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
    }),
        tu.on(y.bg.Connection, (e) => {
            no(e), nu(e), nE(e);
            let t = na();
            e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
                e.setQoS(t.qos),
                (0, eR.isWindows)()
                    ? (e.setExperimentFlag(eY.fd.H265_HARDWARE_ONLY, !0),
                      ni().then((t) => {
                          e.setExperimentFlag(eY.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                      }))
                    : (0, eR.isMac)() && e.setExperimentFlag(eY.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                (0, eR.isWindows)() &&
                    (0, J.r)({ location: "setupMediaEngine" }).enabled &&
                    (e.setExperimentFlag(eY.fd.USE_H264_MF_DECODER, !0),
                    (0, ee.W)({ location: "setupMediaEngine" }).enabled &&
                        e.setExperimentFlag(eY.fd.H264_MF_ZERO_COPY, !0)),
                (0, eR.isLinux)() &&
                    (0, er.b)({ location: "setupMediaEngine" }).enabled &&
                    t.openH264Enabled &&
                    e.setExperimentFlag(eY.fd.USE_LIBOPENH264_DECODER, !0);
            let n = eP.A.getGuildId(),
                {
                    muteBeforeProcessing: i,
                    pttBeforeProcessing: a,
                    skipEncode: o,
                } = (null != n ? z.A : $.A).getCurrentConfig(
                    { location: "setupMediaEngine", guildId: n ?? void 0 },
                    { autoTrackExposure: !0 },
                );
            i && e.setExperimentFlag(eY.fd.MUTE_BEFORE_PROCESSING, !0),
                a && e.setExperimentFlag(eY.fd.PTT_BEFORE_PROCESSING, !0),
                o && e.setExperimentFlag(eY.fd.SKIP_ENCODE, !0),
                (0, ei.J)({ location: "setupMediaEngine" }).enabled &&
                    e.setExperimentFlag(eY.fd.LOW_LATENCY_RATE_CONTROL, !0);
            let l = !1,
                u = !0;
            e.setExperimentFlag(eY.fd.RESET_DECODER_ON_ERRORS, !0),
                l && e.setExperimentFlag(eY.fd.SOFTWARE_FALLBACK_ON_ERRORS, !0),
                u && e.setExperimentFlag(eY.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
            let { swallowVolumeOnlySpeakingEvents: c } = D.A.getConfig({ location: "MediaEngineStore" });
            if ((c && e.setExperimentFlag(eY.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === eY.x.STREAM)) {
                let t = nM(tg);
                e.setSoundshareDiscardRearChannels(t);
                let { simulcastEnabled: n, lqStreamBitrate: r } = Q.A.getConfig();
                e.configureGoLiveSimulcast(n, r);
            }
            if ((0, eR.isWindows)())
                e.setExperimentFlag(eY.fd.SIGNAL_AV1, !0), e.setExperimentFlag(eY.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            else if ((0, eR.isMac)())
                if ((e.setExperimentFlag(eY.fd.SIGNAL_AV1_DECODE, !0), ta())) {
                    let { enabled: t } = (0, j.t)("MediaEngineStore");
                    t
                        ? (eK.info("This Mac supports AV1 Hardware. AV1 Hardware enabled."),
                          e.setExperimentFlag(eY.fd.SIGNAL_AV1_HARDWARE_DECODE, !0))
                        : eK.info("This Mac supports AV1 Hardware. AV1 Hardware not yet enabled.");
                } else eK.info("This Mac does not support AV1 Hardware.");
            else if ((0, eR.isLinux)()) e.setExperimentFlag(eY.fd.SIGNAL_AV1_DECODE, !0);
            else if ((0, eR.isIOS)() && tr()) {
                let { enabled: t } = (0, H.$)("MediaEngineStore");
                t &&
                    (e.setExperimentFlag(eY.fd.SIGNAL_AV1_DECODE, !0),
                    e.setExperimentFlag(eY.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
            }
            if ((0, eR.isWeb)()) {
                let { enabled: t } = (0, q.O)("MediaEngineStore");
                e.setExperimentFlag(eY.fd.BROWSER_HEVC, t);
            }
            for (let n of ((0, eR.isWindows)() &&
                t3?.startsWith("AMD") &&
                (0, e_.F)("MediaEngineStore").enabled &&
                e.setExperimentFlag(eY.fd.WMF_GPU_ENCODE, !0),
            (0, eR.isWindows)() &&
                t3?.startsWith("Intel") &&
                (0, ef.J)("MediaEngineStore").enabled &&
                e.setExperimentFlag(eY.fd.WMF_GPU_ENCODE, !0),
            (0, eR.isWindows)() &&
                t3?.startsWith("Qualcomm") &&
                (0, e_.F)("MediaEngineStore").enabled &&
                e.setExperimentFlag(eY.fd.WMF_GPU_ENCODE, !0),
            tu.setHasFullbandPerformance((0, P.A)()),
            e.setRemoteAudioHistory(1e3),
            (0, w.A)(r) && e.setClipsKeyFrameInterval(eY.X1),
            (t = na(e.context)),
            e.setPostponeDecodeLevel(e3),
            Object.keys(t.localMutes)))
                n !== eL.default.getId() && e.setLocalMute(n, t.localMutes[n]);
            for (let n of Object.keys(t.localVolumes))
                n !== eL.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
            for (let n of Object.keys(t.localPans)) {
                let r = t.localPans[n];
                e.setLocalPan(n, r.left, r.right);
            }
            for (let n of Object.keys(t.disabledLocalVideos)) e.setLocalVideoDisabled(n, t.disabledLocalVideos[n]);
            e.on(y.yq.Speaking, (t, n, r, i) => {
                C.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: i });
            }),
                e.context === eY.x.DEFAULT &&
                    ((tb = !1),
                    e.on(y.yq.SpeakingWhileMuted, () => {
                        let e = !tb;
                        (tb = !0),
                            e && r.emitChange(),
                            tD.start(e6, () => {
                                (tb = !1), r.emitChange();
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
                        ev.default.track(eF.HAw.VIDEOHOOK_INITIALIZED, {
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
                    eK.warn(`noisecancellererror event: ${e}`),
                        (0, k.QW)({ type: k.iy.NOISE_CANCELLER_ERROR, underlyingError: n_(e) }),
                        (tK = !0),
                        ev.default.track(eF.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        C.h.dispatch({ type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: !0 }),
                        C.h.dispatch({ type: "AUDIO_SET_NOISE_CANCELLATION", enabled: !1 }),
                        C.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e });
                }),
                e.on(y.yq.VoiceActivityDetectorError, (e) => {
                    eK.warn(`voiceactivitydetectorerror event: ${e}`),
                        (0, k.QW)({ type: k.iy.NOISE_CANCELLER_ERROR, underlyingError: n_(e) }),
                        ev.default.track(eF.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        C.h.dispatch({
                            type: "AUDIO_SET_MODE",
                            context: eY.x.DEFAULT,
                            mode: eF.TBI.VOICE_ACTIVITY,
                            options: { ...na(eY.x.DEFAULT).modeOptions, vadUseKrisp: !1 },
                        }),
                        C.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e });
                }),
                e.on(y.yq.SdpError, (e, t, n, r) => {
                    ev.default.track(eF.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: r });
                }),
                e.on(y.yq.VideoState, (t) => {
                    C.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                }),
                e.setBitRate(ew.A.bitrate),
                e.applyVideoQualityMode(eG.A.mode),
                (0, eR.isWindows)() &&
                    tu.supports(eY.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                    tu.setAsyncVideoInputDeviceInit((0, K.v)("setupMediaEngine").enabled);
        }),
        tu.on(y.bg.DeviceChange, (e, t, n) => {
            tI.stop(),
                C.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
        }),
        tu.on(y.bg.VolumeChange, (e, t) => {
            C.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
        }),
        tu.on(y.bg.DesktopSourceEnd, (e, t) => {
            C.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
        }),
        tu.on(y.bg.AudioPermission, (e) => {
            (tX = !0), C.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
        }),
        tu.on(y.bg.VideoPermission, (e) => {
            C.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
        }),
        tu.on(y.bg.WatchdogTimeout, async () => {
            let e;
            if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                try {
                    await eN.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                } catch (t) {
                    "number" == typeof t.status && (e = t.status);
                }
            eK.warn(`Watchdog timeout, report submission status: ${e ?? 200}`),
                ev.default.track(eF.HAw.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        tu.on(y.bg.VideoInputInitialized, (e) => {
            ev.default.track(eF.HAw.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired
                    ? null
                    : Math.round(e.timeToFirstFrame * eC.A.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: eP.A.getMediaSessionId(),
                rtc_connection_id: eP.A.getRTCConnectionId(),
            });
        }),
        tu.on(y.bg.AudioInputInitialized, (e) => {
            ev.default.track(eF.HAw.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * eC.A.Millis.SECOND),
                rtc_connection_id: eP.A.getRTCConnectionId(),
            });
        }),
        tu.on(y.bg.ClipsRecordingRestartNeeded, () => {
            C.h.dispatch({ type: "CLIPS_RESTART" });
        }),
        tu.on(y.bg.ClipsInitFailure, (e, t) => {
            C.h.wait(() => {
                C.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t });
            });
        }),
        tu.on(y.bg.ClipsRecordingEnded, (e, t) => {
            a?.desktopSource?.id === e && (null != t && s?.desktopSource?.soundshareId !== t && O.c1(t), (a = null));
        }),
        tu.on(y.bg.NativeScreenSharePickerUpdate, (e, t) => {
            C.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
        }),
        tu.on(y.bg.NativeScreenSharePickerCancel, (e) => {
            C.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
        }),
        tu.on(y.bg.NativeScreenSharePickerError, (e) => {
            C.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
        }),
        tu.on(y.bg.AudioDeviceModuleError, (e, t, n) => {
            ev.default.track(eF.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
        }),
        tu.on(y.bg.VideoCodecError, (e) => {
            let t = "encode" === e.mode ? k.iy.VIDEO_ENCODE_ERROR : k.iy.VIDEO_DECODE_ERROR,
                n = { videoCodec: e.codecStandard, errorMessage: e.message };
            (0, k.QW)(
                t === k.iy.VIDEO_ENCODE_ERROR
                    ? { type: t, ...n, videoEncoder: e.implName }
                    : { type: t, ...n, videoDecoder: e.implName },
            );
        }),
        tu.on(y.bg.ConnectionStats, (e) => {
            C.h.dispatch({
                type: "MEDIA_ENGINE_CONNECTION_STATS",
                connectionStats: e.map((e) => {
                    let { stats: t, connection: n } = e;
                    return {
                        stats: t,
                        mediaEngineConnectionId: n.mediaEngineConnectionId,
                        version: tt++,
                        context: n.context,
                    };
                }),
            });
        }),
        tu.on(y.bg.VoiceQueueMetrics, (e) => {
            let t = ia(e);
            null !== t && ev.default.track(eF.HAw.VOICE_QUEUE_METRICS, t);
        }),
        tu.setOnVideoContainerResized((e, t, n) => {
            C.h.wait(() =>
                C.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
            );
        }),
        ts(),
        ru(),
        rd(),
        o.reset(),
        (0, ek.w)().then((e) => {
            null != e && ((t3 = e.gpu_brand), (t6 = e.has_intel_hybrid_igpu));
        }),
        tu.on(y.bg.SystemMicrophoneModeChange, (e) => {
            (f = e), tu.eachConnection(nE), r.emitChange();
        });
}
function nA() {
    return (0, eR.isWindows)() && T().satisfies(R.A?.os.release, eV.yg);
}
function nI() {
    return (0, eR.isWindows)() && T().satisfies(R.A?.os.release, eV.fG);
}
function nT() {
    return (0, eR.isMac)() && tu.supports(eY.O5.SCREEN_CAPTURE_KIT) && T().satisfies(R.A?.os.release, eV.e);
}
function nS() {
    return (
        (0, eR.isWindows)() &&
        tu.supports(eY.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        tu.supports(eY.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function ny() {
    return tu.supports(eY.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function nv() {
    let e = v.w.get("audio");
    null != e && (v.w.set(e$, { [eY.x.DEFAULT]: e }), v.w.remove("audio")),
        (tc = v.w.get(e$) ?? {}),
        E().each(tc, (e) => {
            E().defaultsDeep(e, to()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, eD.OH)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== ez &&
                    ((e.vadUseKrispSettingVersion = ez), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                e.vadThrehsoldMigrated ||
                    ((e.vadThrehsoldMigrated = !0), e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = e2)),
                tu.supports(eY.O5.SIDECHAIN_COMPRESSION) &&
                    e.sidechainCompressionSettingVersion < eX &&
                    ((e.sidechainCompressionSettingVersion = eX), (e.sidechainCompression = !0)),
                (0, eR.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== eZ &&
                      ((e.ncUseKrispjsSettingVersion = eZ), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== eq &&
                      ((e.ncUseKrispSettingVersion = eq), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
        }),
        nR();
}
function nN(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eY.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = ns(t);
    return Object.assign(r, e), !__OVERLAY__ && n && v.w.set(e$, tc), r;
}
function nC() {
    v.w.remove(e$), location.reload();
}
function nR() {
    let e = na();
    tu.setAudioInputDevice(e.inputDeviceId),
        tu.setAudioOutputDevice(e.outputDeviceId),
        nd(),
        tu.setInputVolume(e.inputVolume),
        tu.setOutputVolume(e.outputVolume),
        tu.setAecDump(e.aecDumpEnabled),
        tu.setSidechainCompression(e.sidechainCompression),
        tu.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        tu.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        eb.Ay?.setOpenH264Enabled?.(e.openH264Enabled);
}
function nO() {
    t_ || tu.enable().then(() => C.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nb(e) {
    return { id: eY.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
}
function nD(e, t) {
    if (0 === e.length) {
        let e = nb(t);
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
function nL(e, t) {
    let n = e[t] ?? e[eY.dx] ?? E()(e).values().first();
    return null != n ? n.id : t;
}
function nw(e) {
    let t = tE;
    if (((tE = nD(e, eW.intl.string(eW.t["/QIjDA"]))), !E().isEqual(tE, t))) {
        let e = na(),
            t = nL(tE, e.inputDeviceId);
        tu.setAudioInputDevice(t), tu.eachConnection(nE);
    }
}
function nM(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nx(e) {
    tu.eachConnection((t) => {
        t.context === eY.x.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function nP(e) {
    let t = tg;
    if (((tg = nD(e, eW.intl.string(eW.t.xlUg0v))), !E().isEqual(tg, t))) {
        let e = na(),
            n = nL(tg, e.outputDeviceId);
        tu.setAudioOutputDevice(n);
        let r = nM(t),
            i = nM(tg);
        r !== i && nx(i);
    }
}
function nk(e) {
    tw = e.length > 0;
    let t = tA;
    if (((tA = nD(e, eW.intl.string(eW.t.WKWARY))), tN && !E().isEqual(tA, t))) {
        let e = void 0 !== tA[tC],
            n = tC === eY.dx && t[eY.dx]?.disabled,
            r = "Firefox" === A().name && "" === tC && t[tC]?.name === "Default" && !t[tC]?.disabled;
        nd(e || n || r);
    }
}
function nU() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = eI.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let r = n === eH.W.USER ? eY.x.DEFAULT : eY.x.STREAM,
            i = r === eY.x.STREAM ? eY.Cn : eY.Hz,
            s = t[n] ?? {},
            { localMutes: a, localVolumes: o } = na(r);
        for (let [e, t] of Object.entries(s))
            null == (0, eA.tM)(r, e) &&
                (t.muted ? (a[e] = !0) : delete a[e],
                t.volume !== i ? (o[e] = t.volume) : delete o[e],
                tu.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, r));
        if (e)
            for (let e of new Set([...Object.keys(a), ...Object.keys(o)]))
                null == s[e] &&
                    (delete a[e],
                    delete o[e],
                    tu.eachConnection((t) => {
                        t.setLocalVolume(e, i), t.setLocalMute(e, !1);
                    }, r));
        nN({ localMutes: a, localVolumes: o }, r);
    }
}
function nG(e) {
    if (null == r)
        return (
            eK.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
            { soundshareId: null, soundshareSession: "" }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : eN.A.getAudioPid(e),
            n = "";
        return null != t && (n = eN.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n };
    }
}
function nF(e, t) {
    (0, eR.isWindows)() &&
        e > 1 &&
        O.GH(e, { soundshare_session: t }).then((t) => {
            null == t ||
                F.Ay.shouldContinueWithoutElevatedProcessForPID(e) ||
                C.h.wait(() => {
                    C.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: t });
                });
        });
}
function nV(e) {
    (i = e.sessionId), (tT = !1), (tv = !1);
    let t = na();
    if (
        (nS() && (ny() ? rH(eY.rB.AUTOMATIC) : t.automaticAudioSubsystem && rj()),
        tu.supports(eY.O5.OFFLOAD_ADM_CONTROLS))
    ) {
        let e = !1;
        (0, eR.isDesktop)()
            ? (e = (0, Y.i)({ location: "handleConnectionOpen" }).enabled)
            : ((0, eR.isIOS)() || (0, eR.isAndroid)()) && (e = (0, W.Y)({ location: "handleConnectionOpen" }).enabled),
            tu.setOffloadAdmControls(e);
    }
    (0, eS.Lb)({ location: "MediaEngineStore", autoTrackExposure: !1 }) &&
        null !== t.mostRecentlyRequestedVoiceFilter &&
        (0, eR.isDesktop)() &&
        (ey.A.getLastInitAttemptMayHaveCrashed()
            ? (C.h.dispatch({ type: "AUDIO_SET_SELF_MUTE", mute: !0, context: eY.x.DEFAULT, playSoundEffect: !0 }),
              nN({ mostRecentlyRequestedVoiceFilter: null }))
            : n(342887).md()),
        nU();
}
function nB(e) {
    let { mediaEngineState: t } = e;
    (tc = t.settingsByContext),
        (tE = t.inputDevices),
        (tg = t.outputDevices),
        (t2 = t.appSupported),
        (tG = t.krispModuleLoaded),
        (c = t.krispVersion),
        (tp = t.goLiveContext);
}
function nH() {
    i = null;
}
function nj() {
    if ((0, eR.isWeb)()) {
        let e = ea.f1.getCurrentConfig({ location: "MediaEngineStore handlePostConnectionOpen" });
        e.loadWasmModule && e.preload && r.startDavePreload();
    }
    return !1;
}
function nY(e) {
    switch (e.state) {
        case eF.S7L.CONNECTING:
            nO();
            break;
        case eF.S7L.RTC_CONNECTING:
            (tx = !1), (l = void 0), (u = void 0), (tM = !1), (t5 = !1), t7.stop(), tP.stop(), o.reset();
            break;
        case eF.S7L.RTC_CONNECTED:
            nd();
            break;
        case eF.S7L.DISCONNECTED:
            nJ(), n0();
    }
}
function nW(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (tT = t.mute || t.suppress), (tv = t.deaf), tu.eachConnection(nu);
            let e = null != t.guildId && null != t.channelId && null != tW && tW !== t.channelId,
                n = !tk && null == t.channelId;
            return nd(!e && !n && tN), (tW = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== eL.default.getId() || null != eP.A.getChannelId() || nd(!1, null), e;
    }, !1);
}
function nK(e) {
    let { mute: t } = e;
    (tS = t), tu.eachConnection(nu);
}
function n$(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = na(t);
    if (t === eY.x.DEFAULT && (eh.A.requestPermission(eB.iL.AUDIO), ty)) return !1;
    (r = !i && !r) || (i = !1), n || (tO = !0), nN({ mute: r, deaf: i }, t), tu.eachConnection(nu);
}
function nz(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    nN({ mute: n }, t), r || (tO = !0), tu.eachConnection(nu);
}
function nq(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== eH.oD.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    nU(!0);
}
function nZ(e) {
    let { context: t } = e;
    nN({ deaf: !na(t).deaf }, t), tu.eachConnection(nu);
}
function nX(e) {
    let { context: t, userId: n } = e;
    if (n === eL.default.getId()) return;
    let { localMutes: r } = na(t);
    r[n] ? delete r[n] : (r[n] = !0),
        nN({ localMutes: r }, t),
        tu.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nQ(e) {
    let { context: t, userId: n, videoToggleState: r, persist: i, isAutomatic: s } = e;
    h()(!(i && s), "These are not allowed to both be true.");
    let a = r === eF.bb8.DISABLED,
        { disabledLocalVideos: o } = na(t),
        l = o[n] ?? !1,
        u = tJ.has(n),
        c = r === eF.bb8.AUTO_ENABLED || r === eF.bb8.MANUAL_ENABLED;
    eK.info(`disableVideo=${a} currentlyDisabled=${l} currentlyAutoDisabled=${u}, isVideoShown=${c}`),
        h()(!(u && !l), "If you are auto-disabled, then you are also disabled.");
    let d = a !== l,
        _ = t === eY.x.DEFAULT,
        f = s && d && _,
        p = i && d && _;
    eK.info(`changed=${d} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${f} isManualToggleByUser=${p}`);
    let { videoToggleStateMap: m } = na(t);
    if (
        (m[n] === eF.bb8.AUTO_PROBING &&
            r === eF.bb8.AUTO_ENABLED &&
            (0, ep.A)(n, a ? eY.Al.AUTO_DISABLE : eY.Al.AUTO_ENABLE, c),
        (m[n] = r),
        nN({ videoToggleStateMap: m }, t, i),
        r === eF.bb8.AUTO_PROBING
            ? eP.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
            : eP.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
        t0 ||
            (eK.info(`isAutoDisableAllowed=${t0} - disabling VideoHealthManager`),
            eP.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
        f)
    ) {
        if ((!a && !u) || (a && !t0)) return;
        (0, ep.A)(n, a ? eY.Al.AUTO_DISABLE : eY.Al.AUTO_ENABLE, c), a ? tJ.add(n) : tJ.delete(n);
    } else
        p &&
            (u && !a
                ? (eK.info("disallowing auto-disable for this session because of manual override by user"),
                  (t0 = !1),
                  eP.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                  (0, ep.A)(n, eY.Al.MANUAL_REENABLE, c))
                : (0, ep.A)(n, a ? eY.Al.MANUAL_DISABLE : eY.Al.MANUAL_ENABLE, c));
    _ && !a && tJ.delete(n),
        a ? (o[n] = !0) : delete o[n],
        nN({ disabledLocalVideos: o }, t, i),
        tu.eachConnection((e) => e.setLocalVideoDisabled(n, o[n] ?? !1), t);
}
function nJ() {
    if (0 === tJ.size) return;
    let e = eY.x.DEFAULT,
        { disabledLocalVideos: t } = na(e);
    tJ.forEach((n) => {
        h()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            tu.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tJ.clear(),
        nN({ disabledLocalVideos: t }, e, !1);
}
function n0() {
    let e = eY.x.DEFAULT,
        { videoToggleStateMap: t } = na(e);
    for (let [e, n] of Object.entries(t)) n === eF.bb8.AUTO_PROBING && delete t[e];
    nN({ videoToggleStateMap: t }, e, !1);
}
function n1(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === eL.default.getId()) return;
    let i = t === eY.x.STREAM ? eY.Cn : eY.Hz,
        { localVolumes: s } = na(t);
    r === i ? delete s[n] : (s[n] = r), nN({ localVolumes: s }, t), tu.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function n2(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: s } = na(t);
    (s[n] = { left: r, right: i }), nN({ localPans: s }, t), tu.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function n3(e) {
    let { context: t, mode: n, options: r } = e;
    nN({ mode: n, modeOptions: { ...r, updatedAt: Date.now() } }, t), tu.eachConnection(no);
}
function n6(e) {
    let { volume: t } = e;
    nN({ inputVolume: nl(t) }), tu.setInputVolume(t);
}
function n4(e) {
    let { volume: t } = e;
    nN({ outputVolume: t }), tu.setOutputVolume(t);
}
function n5(e) {
    let { id: t } = e;
    (t = nL(tE, t)),
        (th = performance.now()),
        nN({ inputDeviceId: t }),
        tu.setAudioInputDevice(t),
        tu.eachConnection(nE),
        (l = void 0),
        (u = void 0),
        t7.stop(),
        (t5 = !1);
    let { resetSilenceWarningOnDeviceChange: n } = eo.A.getConfig({
        location: "MediaEngineStore.handleSetInputDevice",
    });
    n && ((tM = !1), o.reset());
}
function n7(e) {
    let { id: t } = e;
    nN({ outputDeviceId: (t = nL(tg, t)) }), tu.setAudioOutputDevice(t);
}
function n8(e) {
    let { id: t } = e;
    nN({ videoDeviceId: (t = nL(tA, t)) }), nd();
}
function n9(e) {
    let { inputProfile: t } = e;
    nN({ activeInputProfile: t });
    let n = na();
    tu.eachConnection((e) => {
        no(e), nE(e);
    }),
        tu.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        rc();
}
function re(e) {
    return tf !== e.required && ((tf = e.required), e.required || tu.interact(), !0);
}
function rt(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    nw(t), nP(n), nk(r);
}
function rn(e) {
    let { inputVolume: t, outputVolume: n } = e;
    nN({ inputVolume: nl(t), outputVolume: n });
}
function rr(e) {
    let t = na(),
        n = tu.getAudioSubsystem(),
        i = tu.getAudioLayer(),
        s = nL(tE, t.inputDeviceId),
        a = tE[s]?.name,
        o = (0, eE.A)(t.noiseCancellation, r.getSystemMicrophoneMode(), { location: "trackVoiceProcessing" });
    ev.default.track(eF.HAw.VOICE_PROCESSING, {
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
function ri(e) {
    let t = nN({ echoCancellation: e.enabled });
    tu.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), rc(), rr(e.location);
}
function rs(e) {
    ro(e.enabled);
}
function ra(e) {
    let t = nN({ sidechainCompressionStrength: e.strength });
    tu.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function ro(e) {
    let t = nN({ sidechainCompression: e });
    tu.setSidechainCompression(t.sidechainCompression);
}
function rl(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? t1.add(n) : t1.delete(n), ru(), rc();
}
function ru() {
    let e = !t1.has("voice_filter_preview") && !t1.has("mic_test");
    tu.setMaybePreprocessMute(e);
}
function rc() {
    let e = na(),
        t = t1.size > 0,
        n = e.inputDeviceId,
        r = eM.A.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        s = eM.A.hasNoiseSuppression(n) || e.noiseSuppression,
        a = np(eM.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        o = e.noiseCancellation,
        l = null !== tB,
        u = t1.has("voice_filter") && 1 === t1.size;
    tu.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: s,
        automaticGainControlConfig: a,
        noiseCancellation: o,
        voiceFilters: l,
        loopbackUseAudioMode: u,
    });
}
async function rd() {
    if (!tu.supports(eY.O5.VAAPI)) return;
    let e = 4098;
    if (window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let t = await window.DiscordNative.processUtils.getSystemInfo();
    (t.electronGPUInfo?.gpuDevice ?? []).some((t) => t.vendorId === e) &&
        ((ne = !0), (t9 = tu.supports(eY.O5.GAMESCOPE_CAPTURE)));
}
function r_(e) {
    let t = nN({ noiseSuppression: e.enabled });
    tu.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), rc(), rr(e.location);
}
function rf(e) {
    let t = nN({ automaticGainControl: e.enabled });
    tu.eachConnection((e) => nh(e, t.automaticGainControl)), rc(), rr(e.location);
}
function rp(e) {
    let t = nN({ noiseCancellation: e.enabled });
    tu.eachConnection((e) => nm(e, t.noiseCancellation)), rc(), rr(e.location);
}
function rh(e) {
    em.A.setKrispModelOverride(e.model), (_ = e.model), rc();
}
function rm(e) {
    (0, eR.isWeb)() || ((tV = e.enabled), tu.setNoiseCancellationEnableStats?.(e.enabled));
}
function rE(e) {
    nN({ silenceWarning: e.enabled });
}
function rg(e) {
    tu.setDebugLogging(e.enabled);
}
function rA(e) {
    let { level: t } = e;
    (d = t), em.A.setKrispSuppressionLevel(t);
}
function rI(e) {
    nN({ videoHook: e.enabled });
}
function rT(e) {
    nN({ experimentalSoundshare2: e.enabled });
}
function rS(e) {
    let { enabled: t } = e;
    nN({ useSystemScreensharePicker: t });
}
function ry(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = nN({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r });
    tu.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function rv(e) {
    let { enabled: t } = e;
    nN({ qos: t }), tu.eachConnection((e) => e.setQoS(t));
}
function rN() {
    nC();
}
function rC(e) {
    let { osVolume: t, osMuted: n } = e;
    (u = t), (l = n);
}
function rR(e) {
    let { inputDetected: t } = e;
    if (null == t) return !1;
    if (((tx = !0 !== tM && !t), t)) (tM = !0), (t5 = !1), t7.stop(), tP.stop();
    else if (na().mode === eF.TBI.VOICE_ACTIVITY && tM) {
        let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = eo.A.getConfig({
            location: "MediaEngineStore.handleInputDetected",
        });
        e &&
            t7.start(e5, () => {
                ev.default.track(eF.HAw.HARDWARE_MUTE_GUESSED, {
                    input_device_name: tE[nL(tE, na().inputDeviceId)]?.name,
                    rtc_connection_id: eP.A.getRTCConnectionId(),
                }),
                    (t5 = !0),
                    r.emitChange();
            }),
            null != t &&
                tP.start(t * eC.A.Millis.MINUTE, () => {
                    (tM = !1), o.reset();
                });
    }
}
function rO(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === ty) return !1;
    (ty = n), tu.eachConnection(nu);
}
function rb(e) {
    let { state: t, permissionType: n } = e,
        r = t === eB.hL.ACCEPTED;
    switch (n) {
        case eB.iL.AUDIO:
            (tX = !0), tu.eachConnection(nu);
            break;
        case eB.iL.CAMERA:
            !r && tN && nd(!1);
            break;
        default:
            return !1;
    }
}
function rD() {
    return tG || !1;
}
async function rL() {
    try {
        await eb.Ay.ensureModule("discord_krisp");
        let e = eb.Ay.requireModule("discord_krisp");
        (tG = !0),
            (c = e.getSdkVersion?.()),
            (d = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (tF = e), r.emitChange();
            }),
            r.emitChange();
    } catch (t) {
        eK.warn(`Failed to load Krisp module: ${t.message}`), eO.A.captureException(t);
        let e = eY.CO.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eY.CO.INITIALIZED : n;
        }
        ev.default.track(eF.HAw.VOICE_PROCESSING, { noise_canceller_error: e }), nN({ noiseCancellation: !1 });
    } finally {
        tU = !1;
    }
}
function rw() {
    return (0, eR.isWindows)() || (0, eR.isLinux)() || (0, eR.isMac)();
}
function rM() {
    !rw() || __OVERLAY__ || tU || tG
        ? (0, eR.isWeb)() && tu.supports(eY.O5.NOISE_CANCELLATION)
            ? ((tG = !0), r.emitChange())
            : (0, eR.isWeb)() && nN({ noiseCancellation: !1 })
        : ((tU = !0), rL());
}
async function rx() {
    try {
        let e,
            t = "",
            n = !1,
            r = URL.parse(e9);
        if (null === r) return void eK.log("OpenH264 URL ", r, " is invalid");
        let i = r.pathname.split("/"),
            s = i[i.length - 1].replace(".bz2", "");
        try {
            let t = await eb.Ay.downloadOpenH264(e9, s, te, (e) => {
                eK.log("OpenH264 download status", e);
            });
            eK.log("OpenH264 is ready", t), (n = t.fetchedFromNetwork), (e = !0);
        } catch (n) {
            eK.error("OpenH264 download failed", n), (t = n.message), (e = !1);
        }
        if (
            (ev.default.track(eF.HAw.VIDEO_OPENH264_DOWNLOADED, {
                success: e,
                fetched_from_network: n,
                error_message: t,
            }),
            e)
        ) {
            let e = await eb.Ay.cleanupUnusedOpenH264Files([s]);
            eK.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        eK.error("OpenH264 download failed", e);
    }
}
function rP() {
    (0, eR.isLinux)() && rx();
}
function rk(e) {
    let { enabled: t } = e;
    ev.default.track(eF.HAw.VOICE_FILTER_PLAYBACK_TOGGLED, { active_voice_filter_id: tB ?? null, enabled: t }),
        nN({ voiceFilterPlaybackEnabled: t });
}
function rU(e) {
    let { newVoiceFilterId: t } = e;
    nN({ mostRecentlyRequestedVoiceFilter: t }), tu.eachConnection((e) => e.setVoiceFilterId(t));
}
function rG() {
    nN({ mostRecentlyRequestedVoiceFilter: null });
}
function rF(e) {
    let { voiceFilterId: t } = e;
    (tj = tB), (tY = tH), (tB = t), (tH = null === t ? null : Date.now());
}
function rV(e) {
    let t = e.bypassEnabled;
    nN({ bypassSystemInputProcessing: t }), tu.setAudioInputBypassSystemProcessing(t), rr(e.location);
}
function rB(e) {
    rH(e.subsystem);
}
function rH(e) {
    e === eY.rB.AUTOMATIC
        ? (nN({ automaticAudioSubsystem: !0 }), rj())
        : (nN({ automaticAudioSubsystem: !1 }), tu.setAudioSubsystem(e));
}
function rj() {
    tu.queueAudioSubsystem(eY.rB.EXPERIMENTAL);
}
function rY(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && nd(i, null), null != t || null == n)) {
        tk = !1;
        return;
    }
    if (tk) return;
    tk = !0;
    let s = na();
    (s.mute || s.deaf) && (nN({ deaf: !1, mute: !1 }), tu.eachConnection(nu));
}
function rW(e) {
    let { application: t } = e;
    td.add(t.id);
}
function rK(e) {
    let { application: t } = e;
    td.delete(t.id);
}
function r$(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (t_ = !1), tu.eachConnection(nu);
                break;
            case "video":
                nd(!1);
        }
}
function rz(e) {
    (t_ = e.enabled), e.unmute && nN({ mute: !1, deaf: !1 }), tu.eachConnection(nu);
}
function rq(e) {
    let { enabled: t } = e;
    eh.A.requestPermission(eB.iL.CAMERA), nd(t);
}
function rZ(e) {
    let { sourceId: t, applicationName: n, quality: i } = e;
    if (!(0, M.Ao)() || null == R.A) return !1;
    let s = null,
        o = null,
        l = eN.A.getPidFromDesktopSource(t);
    ({ soundshareId: s, soundshareSession: o } = nG(l));
    let u = { desktopSource: { id: t, sourcePid: l, soundshareId: s, soundshareSession: o }, quality: i };
    null != a &&
        (tu.setClipsSource(null),
        (0, eR.isWindows)() && null != a.desktopSource.soundshareId && O.c1(a.desktopSource.soundshareId)),
        null != s && nF(s, o),
        (a = u);
    let c = nn("MediaEngineStore clips"),
        d = na().videoHook;
    tu.setClipsSource({
        desktopDescription: {
            id: a.desktopSource.id,
            soundshareId: a.desktopSource.soundshareId,
            useVideoHook: d,
            useGraphicsCapture: nA(),
            useCaptureDeviceForEncode: !1,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: nT(),
            videoHookStaleFrameTimeoutMs: e0,
            graphicsCaptureStaleFrameTimeoutMs: e1,
            hdrCaptureMode: c,
        },
        quality: i,
        applicationName: n,
    });
}
function rX(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((a = null), tu.setClipsSource(null));
}
function rQ(e) {
    let { settings: t } = e;
    if (t?.desktopSettings != null) {
        let e = null,
            n = null,
            { sourceId: r, sound: i } = t.desktopSettings,
            s = t.context ?? eY.x.DEFAULT,
            a = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
            o = !1 === i ? null : eN.A.getPidFromDesktopSource(r);
        eR.isPlatformEmbedded &&
            !0 === i &&
            (({ soundshareId: e, soundshareSession: n } = nG(o)), null != e && nF(e, n)),
            nc(s),
            nd(s === eY.x.STREAM && tN, {
                desktopSource: { id: r, sourcePid: o, soundshareId: e, soundshareSession: n },
                quality: { resolution: a.resolution, frameRate: a.frameRate },
            });
    } else if (t?.cameraSettings != null) {
        let e = t.context ?? eY.x.DEFAULT,
            { videoDeviceGuid: n, audioDeviceGuid: r } = t.cameraSettings,
            i = e === eY.x.STREAM && tN,
            s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
        nd(i, {
            cameraSource: { videoDeviceGuid: n, audioDeviceGuid: r },
            quality: { resolution: s.resolution, frameRate: s.frameRate },
        });
    } else nd(tN, null);
}
function rJ(e) {
    let { section: t } = e;
    return t === eF.nc_.VOICE && nO(), !1;
}
function r0() {
    return tu.eachConnection(nE), !1;
}
function r1(e) {
    let { enabled: t } = e,
        n = nN({ aecDumpEnabled: t });
    tu.setAecDump(n.aecDumpEnabled);
}
function r2(e) {
    let { enabled: t } = e;
    nN({ openH264Enabled: t }), eb.Ay?.setOpenH264Enabled?.(t);
}
function r3(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (tc = Object.values(eY.x).reduce((e, n) => {
        let r = n,
            i = to();
        return (e[r] = E().merge(i, t[r])), e;
    }, {})),
        v.w.set(e$, tc),
        nR();
}
function r6(e) {
    let { state: t } = e,
        n = G.A.isEnabled();
    if (t === eF.g6G.BACKGROUND && tN && !n) (tL = !0), nd(!1);
    else {
        if (t !== eF.g6G.ACTIVE || !tL) return !1;
        (tL = !1), nd(!0);
    }
    return !0;
}
function r4(e) {
    tu.eachConnection((t) => t.setBitRate(e.bitrate));
}
function r5() {
    if ((!tN && null == s) || null != eP.A.getRTCConnectionId()) return !1;
    nd(!1, null);
}
function r7() {
    return !!tK && ((tK = !1), !0);
}
function r8(e) {
    tu.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function r9(e) {
    let { settings: t } = e;
    tu.applyMediaFilterSettings(t).finally(() => {
        (t$ = !1), r.emitChange();
    });
}
function ie() {
    t$ = !0;
}
function it() {
    t$ = !1;
}
function ir(e) {
    t4 = e.enabled;
}
function ii() {
    if ((0, eR.isDesktop)() && eR.isPlatformEmbedded && !nt) {
        nt = !0;
        let e = async () => {
            let t = await new Promise((e) => {
                eb.Ay.pollQueueMetrics((t) => {
                    e(t);
                });
            });
            t.periodMs = eY.tl;
            let n = ia(t);
            null !== n && ev.default.track(eF.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, eY.tl);
        };
        setTimeout(e, eY.tl);
    }
}
class is extends S.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        ng(),
            nv(),
            rM(),
            rP(),
            n0(),
            ii(),
            (0, eR.isWindows)() && eR.isPlatformEmbedded && nf(),
            (t2 = {
                [eY.O5.VIDEO]: tu.supports(eY.O5.VIDEO),
                [eY.O5.DESKTOP_CAPTURE]: tu.supports(eY.O5.DESKTOP_CAPTURE),
                [eY.O5.HYBRID_VIDEO]: tu.supports(eY.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eL.default, ew.A, eM.A, ex.A, L.A, U.A, eP.A, F.Ay, eg.A, eI.A, eU.default, eG.A, ey.A);
    }
    supports(e) {
        return tu.supports(e);
    }
    supportsInApp(e) {
        return t2[e] || tu.supports(e);
    }
    isSupported() {
        return tu.supported();
    }
    isNoiseSuppressionSupported() {
        return tu.supports(eY.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return rD();
    }
    isNoiseCancellationError() {
        return tK;
    }
    isAutomaticGainControlSupported() {
        return tu.supports(eY.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !ny() && (tu.supports(eY.O5.LEGACY_AUDIO_SUBSYSTEM) || tu.supports(eY.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return tu.supports(eY.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === tu.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return rD();
    }
    isAecDumpSupported() {
        return tu.supports(eY.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return tu.supports(eY.O5.VIDEO) && tu.supports(eY.O5.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        return ex.A.getChannel(tW)?.type !== eF.rbe.GUILD_STAGE_VOICE && e7 && Q.A.simulcastEnabled();
    }
    getAecDump() {
        return na().aecDumpEnabled;
    }
    getMediaEngine() {
        return tu;
    }
    getVideoComponent() {
        return tu.Video;
    }
    getCameraComponent() {
        return tu.Camera;
    }
    getKrispSuppressionLevel() {
        return d ?? 100;
    }
    getKrispEnableStats() {
        return tV;
    }
    isEnabled() {
        return t_;
    }
    isMute() {
        return this.isSelfMute() || tT;
    }
    isDeaf() {
        return this.isSelfDeaf() || tv;
    }
    hasContext(e) {
        return null != tc[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eY.x.DEFAULT;
        return e === eY.x.DEFAULT && tS;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eY.x.DEFAULT;
        return (
            !this.isEnabled() ||
            na(e).mute ||
            !eh.A.didHavePermission(eB.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eY.x.DEFAULT && ty)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tO;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tO = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eY.x.DEFAULT,
            t = t5 && "voice_isolation" !== this.getSystemMicrophoneMode() && na(e).mode === eF.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (eM.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return t4;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eY.x.DEFAULT;
        return !this.isSupported() || na(e).deaf;
    }
    isVideoEnabled() {
        return tN && tw;
    }
    isVideoAvailable() {
        return Object.values(tA).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return tw;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eY.x.STREAM;
        return tp === e && null != s;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eY.x.STREAM;
        return tp === e && null != s && s.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eY.x.DEFAULT;
        return e !== eL.default.getId() && (na(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return tu.supports(eY.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eY.x.DEFAULT;
        return na(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eY.x.DEFAULT;
        return na(t).videoToggleStateMap[e] ?? eF.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eY.x.DEFAULT;
        return t === eY.x.DEFAULT && tJ.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eY.x.DEFAULT;
        return e === eY.x.DEFAULT && tJ.size > 0;
    }
    isMediaFilterSettingLoading() {
        return t$;
    }
    isNativeAudioPermissionReady() {
        return tX;
    }
    getGoLiveSource() {
        return s;
    }
    getGoLiveContext() {
        return tp;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return th;
    }
    isH264MfDecodeAvailable() {
        return tm;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eY.x.DEFAULT,
            n = na(t).localPans[e];
        return null != n ? n : eJ;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eY.x.DEFAULT,
            n = t === eY.x.STREAM ? eY.Cn : eY.Hz,
            r = na(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return na().inputVolume;
    }
    getOutputVolume() {
        return na().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eY.x.DEFAULT;
        return na(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eY.x.DEFAULT;
        return na(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return tB;
    }
    getActiveVoiceFilterAppliedAt() {
        return tH;
    }
    getPreviousVoiceFilter() {
        return tj;
    }
    getPreviousVoiceFilterAppliedAt() {
        return tY;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return na().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return na().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            E().each(tc, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === eF.TBI.PUSH_TO_TALK && td.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nL(tE, na().inputDeviceId);
    }
    getOutputDeviceId() {
        return nL(tg, na().outputDeviceId);
    }
    getVideoDeviceId() {
        return nL(tA, na().videoDeviceId);
    }
    getInputDevices() {
        return tE;
    }
    getOutputDevices() {
        return tg;
    }
    getVideoDevices() {
        return tA;
    }
    getEchoCancellation() {
        let e = na();
        return eM.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return tu.supports(eY.O5.SIDECHAIN_COMPRESSION) && na().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return na().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return na().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tq && tq;
    }
    getOpenH264Enabled() {
        return (0, eR.isLinux)() && na().openH264Enabled;
    }
    getLoopback() {
        return t1.size > 0;
    }
    getLoopbackReasons() {
        return t1;
    }
    getNoiseSuppression() {
        let e = na();
        return eM.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = na();
        return eM.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return na().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return na().noiseCancellation;
    }
    getHardwareEncoding() {
        return e7;
    }
    getEnableSilenceWarning() {
        return na().silenceWarning;
    }
    getDebugLogging() {
        return tu.getDebugLogging();
    }
    getQoS() {
        return na().qos;
    }
    getAttenuation() {
        return na().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return na().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return na().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return nS() && na().automaticAudioSubsystem ? eY.rB.AUTOMATIC : tu.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return tu.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return na().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === ej.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eY.x.DEFAULT;
        return na(e);
    }
    getState() {
        return {
            settingsByContext: tc,
            inputDevices: tE,
            outputDevices: tg,
            appSupported: t2,
            krispModuleLoaded: tG,
            krispVersion: c,
            krispSuppressionLevel: d,
            goLiveSource: s,
            goLiveContext: tp,
        };
    }
    getInputDetectedThisConnection() {
        return tM;
    }
    getInputDetected() {
        return o.inputDetected;
    }
    getLastInputDetectedUpdateTime() {
        return o.lastUpdateTime;
    }
    getNoInputDetectedNotice() {
        return tx;
    }
    getInputDeviceOSMuted() {
        return l;
    }
    getInputDeviceOSVolume() {
        return u;
    }
    getPacketDelay() {
        return eR.isPlatformEmbedded || this.getMode() !== eF.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        tu.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return tf;
    }
    getVideoHook() {
        return na().videoHook;
    }
    supportsVideoHook() {
        return tu.supports(eY.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = na().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return tu.supports(eY.O5.EXPERIMENTAL_SOUNDSHARE) && T().satisfies(R.A?.os.release, eV.$x);
    }
    supportsHookSoundshare() {
        return (0, eR.isWindows)() && tu.supports(eY.O5.SOUNDSHARE) && T().satisfies(R.A?.os.release, eV.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = na().useSystemScreensharePicker,
            n = (0, eR.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return tu.supports(eY.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return ne;
    }
    getUseGamescopeCapture() {
        return t9;
    }
    getSpeakingWhileMuted() {
        return tb;
    }
    getKrispModelOverride() {
        return _;
    }
    getKrispModels() {
        return tF;
    }
    getKrispVadActivationThreshold() {
        return na().modeOptions.vadKrispActivationThreshold ?? eQ;
    }
    hasActiveCallKitCall() {
        return t8;
    }
    setHasActiveCallKitCall(e) {
        t8 = e;
    }
    supportsScreenSoundshare() {
        return (0, eR.isMac)()
            ? tu.supports(eY.O5.SOUNDSHARE) && T().satisfies(R.A?.os.release, eV.P$) && nT()
            : (0, eR.isWindows)()
              ? tu.supports(eY.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, eR.isLinux)() && tu.supports(eY.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        return (0, eR.isWindows)()
            ? this.getInputDevices()[this.getInputDeviceId()]?.effects?.find((e) => e === e8)
            : (0, eR.isMac)() || (0, eR.isIOS)()
              ? f
              : void 0;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eY.x.DEFAULT,
            t = this.supports(eY.O5.VIDEO)
                ? [{ rid: "100", type: e === eY.x.DEFAULT ? eY.mI.VIDEO : eY.mI.SCREEN, quality: eY.Y4 }]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === eY.x.DEFAULT || this.goLiveSimulcastEnabled()) &&
                t.push({ rid: "50", type: e === eY.x.DEFAULT ? eY.mI.VIDEO : eY.mI.SCREEN, quality: eY.Cl }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: !1 };
        return (
            (0, eR.isWeb)() &&
                (e.fetchDave = ea.f1.getCurrentConfig({
                    location: "MediaEngineStore fetchAsyncResources",
                }).loadWasmModule),
            tu.fetchAsyncResources(e)
        );
    }
    startDavePreload() {
        if (!tz && ((tz = !0), (0, eR.isWeb)())) {
            let e = { fetchDave: !0 };
            tu.fetchAsyncResources(e).catch((e) => {
                eK.warn("DAVE preload failed:", e), eO.A.captureException(e);
            });
        }
    }
    getSupportedSecureFramesProtocolVersion() {
        if ((0, eR.isWeb)()) {
            let { useWasmModule: e } = ea.f1.getCurrentConfig({
                location: "MediaEngineStore getSupportedSecureFramesProtocolVersion",
            });
            if (!e) return 0;
        }
        let e = tu.getSupportedSecureFramesProtocolVersion();
        114 === e && (e = 1);
        let t = ea.ex.getCurrentConfig({ location: "MediaEngineStore" }),
            n = ea.a.getConfig({ location: "MediaEngineStore" });
        return (t.canSupportDaveProtocol || (n.allowOptIn && eg.A.getPersistentCodesEnabled())) &&
            e >= t.protocolVersionFloor
            ? e
            : 0;
    }
    hasClipsSource() {
        return null != a;
    }
    getGpuBrand() {
        return t3;
    }
}
function ia(e) {
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
(r = new is(C.h, {
    VOICE_CHANNEL_SELECT: rY,
    VOICE_STATE_UPDATES: nW,
    CONNECTION_OPEN: nV,
    CONNECTION_CLOSED: nH,
    POST_CONNECTION_OPEN: nj,
    RTC_CONNECTION_STATE: nY,
    AUDIO_SET_TEMPORARY_SELF_MUTE: nK,
    AUDIO_TOGGLE_SELF_MUTE: n$,
    AUDIO_SET_SELF_MUTE: nz,
    AUDIO_TOGGLE_SELF_DEAF: nZ,
    AUDIO_TOGGLE_LOCAL_MUTE: nX,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: nQ,
    AUDIO_SET_LOCAL_VOLUME: n1,
    AUDIO_SET_LOCAL_PAN: n2,
    AUDIO_SET_MODE: n3,
    AUDIO_SET_INPUT_VOLUME: n6,
    AUDIO_SET_OUTPUT_VOLUME: n4,
    AUDIO_SET_INPUT_DEVICE: n5,
    AUDIO_SET_OUTPUT_DEVICE: n7,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: n9,
    AUDIO_SET_ECHO_CANCELLATION: ri,
    AUDIO_SET_SIDECHAIN_COMPRESSION: rs,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: ra,
    AUDIO_SET_LOOPBACK: rl,
    AUDIO_SET_NOISE_SUPPRESSION: r_,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: rf,
    AUDIO_SET_NOISE_CANCELLATION: rp,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: rh,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: rE,
    AUDIO_SET_DEBUG_LOGGING: rg,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: rA,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: rm,
    MEDIA_ENGINE_SET_VIDEO_HOOK: rI,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: rT,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: rS,
    AUDIO_SET_ATTENUATION: ry,
    AUDIO_SET_QOS: rv,
    MEDIA_ENGINE_DEVICES: rt,
    AUDIO_VOLUME_CHANGE: rn,
    AUDIO_RESET: rN,
    AUDIO_INPUT_DETECTED: rR,
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: rC,
    AUDIO_SET_SUBSYSTEM: rB,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rV,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rz,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rq,
    MEDIA_ENGINE_PERMISSION: r$,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rQ,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: n8,
    MEDIA_ENGINE_INTERACTION_REQUIRED: re,
    USER_SETTINGS_MODAL_INIT: rJ,
    USER_SETTINGS_MODAL_SET_SECTION: rJ,
    CERTIFIED_DEVICES_SET: r0,
    RPC_APP_CONNECTED: rW,
    RPC_APP_DISCONNECTED: rK,
    OVERLAY_INITIALIZE: nB,
    APP_STATE_UPDATE: r6,
    SET_CHANNEL_BITRATE: r4,
    SET_VAD_PERMISSION: rO,
    SET_NATIVE_PERMISSION: rb,
    SET_CHANNEL_VIDEO_QUALITY_MODE: r8,
    MEDIA_ENGINE_SET_AEC_DUMP: r1,
    MEDIA_ENGINE_SET_OPENH264_ENABLED: r2,
    MEDIA_ENGINE_RESET_SETTINGS: r3,
    CHANNEL_DELETE: r5,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: r7,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: r9,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: ie,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: it,
    USER_SETTINGS_PROTO_UPDATE: nq,
    CLIPS_INIT: rZ,
    CLIPS_SETTINGS_UPDATE: rX,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: ir,
    VOICE_FILTER_REQUEST_SWITCH: rU,
    VOICE_FILTER_LOOPBACK_TOGGLE: rk,
    VOICE_FILTER_APPLIED: rF,
    VOICE_FILTER_DOWNLOAD_FAILED: rG,
    VOICE_FILTER_APPLY_FAILED: rG,
})),
    (o = new et.A(tu, r));
let io = r;
