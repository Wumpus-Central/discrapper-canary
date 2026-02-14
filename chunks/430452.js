"use strict";
let r, i, a, s, o, l, u, c, d, _, f;
n.d(t, { Ay: () => ia }), n(323874), n(14289), n(35956), n(321073), n(790599);
var h = n(284009),
    p = n.n(h),
    g = n(735438),
    E = n.n(g),
    A = n(299855),
    I = n.n(A),
    T = n(311907),
    y = n(205693),
    S = n(506774),
    v = n(451988),
    C = n(73153),
    b = n(77729),
    N = n(719129),
    R = n(894539),
    O = n(274372),
    D = n(915618),
    L = n(572164),
    w = n(626584),
    x = n(211597),
    P = n(709710),
    M = n(49463),
    k = n(784113),
    U = n(15285),
    G = n(540305),
    F = n(17300),
    V = n(544746),
    B = n(820344),
    j = n(593595),
    H = n(788601),
    Y = n(626078),
    W = n(509034),
    K = n(638188),
    $ = n(269377),
    z = n(934341),
    q = n(658046),
    X = n(621963),
    Z = n(525286),
    Q = n(780732),
    J = n(264866),
    ee = n(927170),
    et = n(233232),
    en = n(140175),
    er = n(267378),
    ei = n(801644),
    ea = n(223572),
    es = n(276006),
    eo = n(670470),
    el = n(165479),
    eu = n(896014),
    ec = n(765396),
    ed = n(75076),
    e_ = n(674966),
    ef = n(559633),
    eh = n(3527),
    ep = n(714763),
    em = n(879172),
    eg = n(555444),
    eE = n(617617),
    eA = n(340913),
    eI = n(996744),
    eT = n(28075),
    ey = n(954571),
    eS = n(353835),
    ev = n(927813),
    eC = n(723702),
    eb = n(728458),
    eN = n(837921),
    eR = n(350535),
    eO = n(961350),
    eD = n(131319),
    eL = n(347481),
    ew = n(734057),
    ex = n(383501),
    eP = n(851581),
    eM = n(287809),
    ek = n(117549),
    eU = n(652215),
    eG = n(502075),
    eF = n(765682),
    eV = n(355097),
    eB = n(509381),
    ej = n(731854),
    eH = n(985018);
let eY = new w.A("MediaEngineStore"),
    eW = "MediaEngineStore",
    eK = 4,
    e$ = 1,
    ez = 1,
    eq = 1,
    eX = 0.5,
    eZ = { left: 1, right: 1 },
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
    if (!(0, eC.isIOS)() || null == te) return !1;
    let e = te();
    if (null == e || !e.startsWith("ARM64_")) return !1;
    let t = e.substring(6);
    return ("T" === t[0] || "S" === t[0]) && parseInt(t.substring(1), 10) >= 8122;
}
let tn = null;
async function tr() {
    if (!(0, eC.isMac)() || b.A?.os.arch !== "arm64" || b.A?.processUtils?.getSystemInfo == null) {
        tn = !1;
        return;
    }
    let e = await b.A.processUtils.getSystemInfo(),
        t = (e.cpus?.[0]?.model ?? "").match(/Apple M(\d+)/);
    if (null == t) {
        tn = !0;
        return;
    }
    tn = parseInt(t[1], 10) >= 3;
}
function ti() {
    return !0 === tn;
}
function ta() {
    return {
        mode: eU.TBI.VOICE_ACTIVITY,
        modeOptions: {
            threshold: e0,
            autoThreshold: eC.isPlatformEmbedded || __OVERLAY__,
            vadUseKrisp: !0,
            vadKrispActivationThreshold: eX,
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
        inputVolume: ej.Hz,
        outputVolume: ej.Hz,
        inputDeviceId: ej.dx,
        outputDeviceId: ej.dx,
        videoDeviceId: ej.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: to.supports(ej.O5.VIDEO_HOOK),
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
let ts = {
        [eB.my.CUSTOM]: {},
        [eB.my.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [eB.my.STUDIO]: {
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
    tu = new Set([ej.x.DEFAULT]),
    tc = to.supports(ej.O5.AUTO_ENABLE),
    td = !1,
    t_ = ej.x.STREAM,
    tf = performance.now(),
    th = null,
    tp = { [ej.dx]: nR("No Input Devices") },
    tm = { [ej.dx]: nR("No Output Devices") },
    tg = { [ej.dx]: nR("No Video Devices") },
    tE = new v.Ep(),
    tA = !1,
    tI = !1,
    tT = !1,
    ty = !1,
    tS = !1,
    tv = ej.qe,
    tC = ej.qe,
    tb = !1,
    tN = !1,
    tR = !1,
    tO = new v.Ep(),
    tD = !1,
    tL = !1,
    tw = !1,
    tx = !1,
    tP = new v.Ep(),
    tM = !1,
    tk = !1,
    tU = !1,
    tG = [],
    tF = !1,
    tV = null,
    tB = null,
    tj = null,
    tH = null,
    tY = null,
    tW = !1,
    tK = !1,
    t$ = !1,
    tz = null,
    tq = null,
    tX = !1;
e_.A.hasPermission(eF.iL.AUDIO, { showAuthorizationError: !1 }),
    e_.A.hasPermission(eF.iL.CAMERA, { showAuthorizationError: !1 });
let tZ = !1,
    tQ = new Set(),
    tJ = tZ,
    t0 = new Set(),
    t1 = {},
    t2 = null,
    t3 = null,
    t6 = !0,
    t4 = !1,
    t5 = new v.Ep(),
    t7 = !1,
    t8 = !1,
    t9 = !1,
    ne = !1;
function nt(e) {
    return (0, X.p)({ location: e }).hdrCaptureMode;
}
async function nn() {
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
function nr() {
    return null != tq ? tq : "u" > typeof window ? (tq = nn().then((e) => ((tz = e), e))) : Promise.resolve(!1);
}
function ni() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ej.x.DEFAULT,
        t = tl[e];
    return null == t && ((t = ta()), (tl[e] = t)), t;
}
function na() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ej.x.DEFAULT,
        t = ni(e),
        n = ts[t.activeInputProfile ?? eB.my.CUSTOM],
        r = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}) };
    if (
        (null == r.vadDuringPreProcess && (r.vadDuringPreProcess = (0, ea.R)({ location: "getSettings" }).enabled),
        (null == r.vadKrispActivationThreshold && !0 === n.automaticGainControl) || !0 === t.automaticGainControl)
    ) {
        let e = (0, F.F)({ location: "getSettings" });
        null != e.vadKrispActivationThreshold && (r.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return { ...t, ...n, modeOptions: r };
}
function ns(e) {
    let t = na(e.context),
        n = t.mode;
    e.context === ej.x.DEFAULT &&
        ((0, eg.H)({ location: "setInputMode", autoTrackExposure: !1 }).enableLatching &&
            n === eU.TBI.PUSH_TO_TALK &&
            t.modeOptions.pttLatchingEnabled &&
            (n = eU.TBI.VOICE_ACTIVITY),
        (0, en.N)(!1, !1, !1));
    let { showPTTSpeakingIndicator: r } = eA.A.getConfig({ location: "setInputMode" }),
        i = r && n === eU.TBI.PUSH_TO_TALK;
    e.setInputMode(n, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: !!i || t.modeOptions.autoThreshold,
        vadUseKrisp: (!!i || t.modeOptions.vadUseKrisp) && rO(),
        vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? eX,
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        vadDuringPreProcess: t.modeOptions.vadDuringPreProcess ?? !1,
        pttReleaseDelay: Math.round(t.modeOptions.delay),
    });
}
function no(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ej.Hz;
    return E().clamp(e, 0, t);
}
function nl(e) {
    let t = na(e.context),
        n = !tc || t.mute || t.deaf;
    e.context === ej.x.DEFAULT
        ? (n = n || tA || tI || tT || !e_.A.didHavePermission(eF.iL.AUDIO))
        : e.context === ej.x.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === ej.x.DEFAULT && R.A.updateNativeMute();
}
function nu(e) {
    e !== t_ && (null != a && to.setGoLiveSource(null, t_), (t_ = e));
}
function nc() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tS,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        n = a;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, eC.isWindows)() && N.c1(n.desktopSource.soundshareId),
            to.setGoLiveSource(null, t_)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            to.setGoLiveSource(null, t_),
        tS || e)
    ) {
        let t = na().videoDeviceId;
        tS && t === ej.dx && tC === ej.dx && tv !== ej.qe ? (t = tv) : (tC = t),
            (tv = (tS = e) ? nD(tg, t) : ej.qe),
            to.setVideoInputDevice(tv);
    }
    if (((a = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = nt("MediaEngineStore go live"),
                i = na().videoHook,
                a = nE(),
                s = a ? (nA() ? eG.zl : eG.eg) : 0,
                o = (0, eC.isWindows)() && (0, es.b)("updateVideo").enabled,
                l = !1;
            (0, eC.isWindows)() && t3 && (l = el.q.getConfig({ location: "updateVideo" }).enabled),
                to.setGoLiveSource(
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
                            allowScreenCaptureKit: nI(),
                            videoHookStaleFrameTimeoutMs: eQ,
                            graphicsCaptureStaleFrameTimeoutMs: eJ,
                            hdrCaptureMode: n,
                            enableGlobalFramePoolLock: (0, q.H)({ location: "updateVideo" }).enabled,
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
function nd(e) {
    switch (e) {
        case ej.CO.CPU_OVERUSE:
            return P.B6.NoiseCancellerCpuOveruse;
        case ej.CO.FAILED:
            return P.B6.NoiseCancellerFailed;
        case ej.CO.VAD_CPU_OVERUSE:
            return P.B6.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function n_() {
    null === th &&
        to
            .getCodecSurvey()
            .then((e) => {
                try {
                    let t = JSON.parse(e);
                    if (null == t || null == t.available_video_decoders) throw Error("decoder survey is not available");
                    th = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                } catch (e) {
                    eY.error("Failed to parse codec survey", e), (th = !1);
                }
            })
            .catch((e) => {
                eY.error("Failed to get codec survey", e), (th = !1);
            })
            .finally(() => {
                C.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
            });
}
function nf(e) {
    let t = (0, F.F)({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function nh(e, t) {
    e.setAutomaticGainControl(nf(t));
}
function np(e, t) {
    let n = (0, eh.A)(t, r.getSystemMicrophoneMode(), { location: "setNoiseCancellation" });
    n !== t && eY.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: i } = (0, F.F)({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(i);
    let { noiseCancellationAfterProcessing: a, vadAfterWebrtc: s } = (0, ee.$)({ location: "setNoiseCancellation" });
    e.setNoiseCancellationAfterProcessing(a), e.setVADAfterWebrtc(s);
}
function nm(e) {
    let t = na(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eL.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eL.A.hasNoiseSuppression(n) || t.noiseSuppression),
        nh(e, eL.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        np(e, t.noiseCancellation),
        e.setVoiceFilterId(tV),
        (0, eC.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function ng() {
    tE.start(e3, () => {
        eY.error("Device enumeration timed out"), ey.default.track(eU.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
    }),
        to.on(y.bg.Connection, (e) => {
            ns(e), nl(e), nm(e);
            let t = na();
            e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
                e.setQoS(t.qos),
                (0, eC.isWindows)()
                    ? (e.setExperimentFlag(ej.fd.H265_HARDWARE_ONLY, !0),
                      nr().then((t) => {
                          e.setExperimentFlag(ej.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                      }))
                    : (0, eC.isMac)() && e.setExperimentFlag(ej.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                (0, eC.isWindows)() &&
                    (0, Q.r)({ location: "setupMediaEngine" }).enabled &&
                    e.setExperimentFlag(ej.fd.USE_H264_MF_DECODER, !0);
            let n = ex.A.getGuildId(),
                {
                    muteBeforeProcessing: i,
                    pttBeforeProcessing: s,
                    skipEncode: o,
                } = (null != n ? $.A : K.A).getCurrentConfig(
                    { location: "setupMediaEngine", guildId: n ?? void 0 },
                    { autoTrackExposure: !0 },
                );
            i && e.setExperimentFlag(ej.fd.MUTE_BEFORE_PROCESSING, !0),
                s && e.setExperimentFlag(ej.fd.PTT_BEFORE_PROCESSING, !0),
                o && e.setExperimentFlag(ej.fd.SKIP_ENCODE, !0),
                (0, et.J)({ location: "setupMediaEngine" }).enabled &&
                    e.setExperimentFlag(ej.fd.LOW_LATENCY_RATE_CONTROL, !0);
            let l = !1,
                u = !0;
            if (
                (e.setExperimentFlag(ej.fd.RESET_DECODER_ON_ERRORS, !0),
                l && e.setExperimentFlag(ej.fd.SOFTWARE_FALLBACK_ON_ERRORS, !0),
                u && e.setExperimentFlag(ej.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0),
                e.context === ej.x.STREAM)
            ) {
                let t = nw(tm);
                e.setSoundshareDiscardRearChannels(t);
                let { simulcastEnabled: n, lqStreamBitrate: r } = Z.A.getConfig();
                e.configureGoLiveSimulcast(n, r);
            }
            if ((0, eC.isWindows)())
                e.setExperimentFlag(ej.fd.SIGNAL_AV1, !0), e.setExperimentFlag(ej.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            else if ((0, eC.isMac)()) {
                if ((e.setExperimentFlag(ej.fd.SIGNAL_AV1_DECODE, !0), ti())) {
                    let { enabled: t } = (0, B.t)("MediaEngineStore");
                    t && e.setExperimentFlag(ej.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                }
            } else if ((0, eC.isLinux)()) e.setExperimentFlag(ej.fd.SIGNAL_AV1_DECODE, !0);
            else if ((0, eC.isIOS)() && tt()) {
                let { enabled: t } = (0, V.$)("MediaEngineStore");
                t &&
                    (e.setExperimentFlag(ej.fd.SIGNAL_AV1_DECODE, !0),
                    e.setExperimentFlag(ej.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
            }
            if ((0, eC.isWeb)()) {
                let { enabled: t } = (0, z.O)("MediaEngineStore");
                e.setExperimentFlag(ej.fd.BROWSER_HEVC, t);
            }
            if (
                ((0, eC.isWindows)() &&
                    t2?.startsWith("AMD") &&
                    (0, eu.F)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(ej.fd.WMF_GPU_ENCODE, !0),
                (0, eC.isWindows)() &&
                    t2?.startsWith("Intel") &&
                    (0, ec.J)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(ej.fd.WMF_GPU_ENCODE, !0),
                (0, eC.isWindows)() &&
                    t2?.startsWith("Qualcomm") &&
                    (0, eu.F)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(ej.fd.WMF_GPU_ENCODE, !0),
                to.setHasFullbandPerformance((0, x.A)()),
                e.setRemoteAudioHistory(1e3),
                (0, D.A)(r))
            ) {
                let { enableViewerClipping: t } = eo.A.getCurrentConfig(
                    { location: "f627ab_15" },
                    { autoTrackExposure: !1 },
                );
                e.setViewerSideClip(t), e.setClipsKeyFrameInterval(ej.X1);
            }
            for (let n of ((t = na(e.context)), e.setPostponeDecodeLevel(e1), Object.keys(t.localMutes)))
                n !== eO.default.getId() && e.setLocalMute(n, t.localMutes[n]);
            for (let n of Object.keys(t.localVolumes))
                n !== eO.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
            for (let n of Object.keys(t.localPans)) {
                let r = t.localPans[n];
                e.setLocalPan(n, r.left, r.right);
            }
            for (let n of Object.keys(t.disabledLocalVideos)) e.setLocalVideoDisabled(n, t.disabledLocalVideos[n]);
            e.on(y.yq.Speaking, (t, n, r, i) => {
                C.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: i });
            }),
                e.context === ej.x.DEFAULT &&
                    ((tN = !1),
                    (tR = !1),
                    e.on(y.yq.SpeakingWhileMuted, () => {
                        (tN = !0),
                            (tR = !0),
                            r.emitChange(),
                            tO.stop(),
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
                e.on(y.yq.VideoHookInitialize, (e, t, n, r, i, s) => {
                    a?.desktopSource != null &&
                        ey.default.track(eU.HAw.VIDEOHOOK_INITIALIZED, {
                            backend: e,
                            format: t,
                            framebuffer_format: n,
                            sample_count: r,
                            success: i,
                            reinitialization: s,
                            ...(0, G.A)(a?.desktopSource),
                        });
                }),
                e.on(y.yq.NoiseCancellationError, (e) => {
                    eY.warn(`noisecancellererror event: ${e}`),
                        (0, P.QW)({ type: P.iy.NOISE_CANCELLER_ERROR, underlyingError: nd(e) }),
                        (tW = !0),
                        ey.default.track(eU.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        C.h.dispatch({ type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: !0 }),
                        C.h.dispatch({ type: "AUDIO_SET_NOISE_CANCELLATION", enabled: !1 }),
                        C.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e });
                }),
                e.on(y.yq.VoiceActivityDetectorError, (e) => {
                    eY.warn(`voiceactivitydetectorerror event: ${e}`),
                        (0, P.QW)({ type: P.iy.NOISE_CANCELLER_ERROR, underlyingError: nd(e) }),
                        ey.default.track(eU.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        C.h.dispatch({
                            type: "AUDIO_SET_MODE",
                            context: ej.x.DEFAULT,
                            mode: eU.TBI.VOICE_ACTIVITY,
                            options: { ...na(ej.x.DEFAULT).modeOptions, vadUseKrisp: !1 },
                        }),
                        C.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e });
                }),
                e.on(y.yq.SdpError, (e, t, n, r) => {
                    ey.default.track(eU.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: r });
                }),
                e.on(y.yq.VideoState, (t) => {
                    C.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                }),
                e.setBitRate(eD.A.bitrate),
                e.applyVideoQualityMode(ek.A.mode),
                (0, eC.isWindows)() &&
                    to.supports(ej.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                    to.setAsyncVideoInputDeviceInit((0, Y.v)("setupMediaEngine").enabled);
        }),
        to.on(y.bg.DeviceChange, (e, t, n) => {
            tE.stop(),
                C.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
        }),
        to.on(y.bg.VolumeChange, (e, t) => {
            C.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
        }),
        to.on(y.bg.DesktopSourceEnd, (e, t) => {
            C.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
        }),
        to.on(y.bg.AudioPermission, (e) => {
            (tX = !0), C.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
        }),
        to.on(y.bg.VideoPermission, (e) => {
            C.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
        }),
        to.on(y.bg.WatchdogTimeout, async () => {
            let e;
            if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                try {
                    await eS.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                } catch (t) {
                    "number" == typeof t.status && (e = t.status);
                }
            eY.warn(`Watchdog timeout, report submission status: ${e ?? 200}`),
                ey.default.track(eU.HAw.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        to.on(y.bg.VideoInputInitialized, (e) => {
            ey.default.track(eU.HAw.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired
                    ? null
                    : Math.round(e.timeToFirstFrame * ev.A.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: ex.A.getMediaSessionId(),
                rtc_connection_id: ex.A.getRTCConnectionId(),
            });
        }),
        to.on(y.bg.AudioInputInitialized, (e) => {
            ey.default.track(eU.HAw.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * ev.A.Millis.SECOND),
                rtc_connection_id: ex.A.getRTCConnectionId(),
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
            s?.desktopSource?.id === e && (null != t && a?.desktopSource?.soundshareId !== t && N.c1(t), (s = null));
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
            ey.default.track(eU.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
        }),
        to.on(y.bg.VideoCodecError, (e) => {
            let t = "encode" === e.mode ? P.iy.VIDEO_ENCODE_ERROR : P.iy.VIDEO_DECODE_ERROR,
                n = { videoCodec: e.codecStandard, errorMessage: e.message };
            (0, P.QW)(
                t === P.iy.VIDEO_ENCODE_ERROR
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
            null !== t && ey.default.track(eU.HAw.VOICE_QUEUE_METRICS, t);
        }),
        to.setOnVideoContainerResized((e, t, n) => {
            C.h.wait(() =>
                C.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
            );
        }),
        tr(),
        rl(),
        rc(),
        to.supports(ej.O5.ASYNC_CLIPS_SOURCE_DEINIT) &&
            to.setAsyncClipsSourceDeinit((0, W.V)("setupMediaEngine").enabled),
        o.reset(),
        (0, eP.w)().then((e) => {
            null != e && ((t2 = e.gpu_brand), (t3 = e.has_intel_hybrid_igpu));
        }),
        to.on(y.bg.SystemMicrophoneModeChange, (e) => {
            (f = e), to.eachConnection(nm);
        });
}
function nE() {
    return (0, eC.isWindows)() && I().satisfies(b.A?.os.release, eG.yg);
}
function nA() {
    return (0, eC.isWindows)() && I().satisfies(b.A?.os.release, eG.fG);
}
function nI() {
    return (0, eC.isMac)() && to.supports(ej.O5.SCREEN_CAPTURE_KIT) && I().satisfies(b.A?.os.release, eG.e);
}
function nT() {
    return (
        (0, eC.isWindows)() &&
        to.supports(ej.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        to.supports(ej.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function ny() {
    return to.supports(ej.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function nS() {
    let e = S.w.get("audio");
    null != e && (S.w.set(eW, { [ej.x.DEFAULT]: e }), S.w.remove("audio")),
        (tl = S.w.get(eW) ?? {}),
        E().each(tl, (e) => {
            E().defaultsDeep(e, ta()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, eR.OH)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== eK &&
                    ((e.vadUseKrispSettingVersion = eK), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                e.vadThrehsoldMigrated ||
                    ((e.vadThrehsoldMigrated = !0), e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = e0)),
                to.supports(ej.O5.SIDECHAIN_COMPRESSION) &&
                    e.sidechainCompressionSettingVersion < eq &&
                    ((e.sidechainCompressionSettingVersion = eq), (e.sidechainCompression = !0)),
                (0, eC.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== ez &&
                      ((e.ncUseKrispjsSettingVersion = ez), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== e$ &&
                      ((e.ncUseKrispSettingVersion = e$), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
        }),
        nb();
}
function nv(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ej.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = ni(t);
    return Object.assign(r, e), !__OVERLAY__ && n && S.w.set(eW, tl), r;
}
function nC() {
    S.w.remove(eW), location.reload();
}
function nb() {
    let e = na();
    to.setAudioInputDevice(e.inputDeviceId),
        to.setAudioOutputDevice(e.outputDeviceId),
        nc(),
        to.setInputVolume(e.inputVolume),
        to.setOutputVolume(e.outputVolume),
        to.setAecDump(e.aecDumpEnabled),
        to.setSidechainCompression(e.sidechainCompression),
        to.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        to.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing);
}
function nN() {
    tc || to.enable().then(() => C.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nR(e) {
    return { id: ej.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
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
function nD(e, t) {
    let n = e[t] ?? e[ej.dx] ?? E()(e).values().first();
    return null != n ? n.id : t;
}
function nL(e) {
    let t = tp;
    if (((tp = nO(e, eH.intl.string(eH.t["/QIjDA"]))), !E().isEqual(tp, t))) {
        let e = na(),
            t = nD(tp, e.inputDeviceId);
        to.setAudioInputDevice(t), to.eachConnection(nm);
    }
}
function nw(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nx(e) {
    to.eachConnection((t) => {
        t.context === ej.x.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function nP(e) {
    let t = tm;
    if (((tm = nO(e, eH.intl.string(eH.t.xlUg0v))), !E().isEqual(tm, t))) {
        let e = na(),
            n = nD(tm, e.outputDeviceId);
        to.setAudioOutputDevice(n);
        let r = nw(t),
            i = nw(tm);
        r !== i && nx(i);
    }
}
function nM(e) {
    tL = e.length > 0;
    let t = tg;
    if (((tg = nO(e, eH.intl.string(eH.t.WKWARY))), tS && !E().isEqual(tg, t))) {
        let e = void 0 !== tg[tv],
            n = tv === ej.dx && t[ej.dx]?.disabled;
        nc(e || n);
    }
}
function nk() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = eE.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let r = n === eV.W.USER ? ej.x.DEFAULT : ej.x.STREAM,
            i = r === ej.x.STREAM ? ej.Cn : ej.Hz,
            a = t[n] ?? {},
            { localMutes: s, localVolumes: o } = na(r);
        for (let [e, t] of Object.entries(a))
            null == (0, em.tM)(r, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== i ? (o[e] = t.volume) : delete o[e],
                to.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, r));
        if (e)
            for (let e of new Set([...Object.keys(s), ...Object.keys(o)]))
                null == a[e] &&
                    (delete s[e],
                    delete o[e],
                    to.eachConnection((t) => {
                        t.setLocalVolume(e, i), t.setLocalMute(e, !1);
                    }, r));
        nv({ localMutes: s, localVolumes: o }, r);
    }
}
function nU(e) {
    if (null == r)
        return (
            eY.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
            { soundshareId: null, soundshareSession: "" }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : eS.A.getAudioPid(e),
            n = "";
        return null != t && (n = eS.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n };
    }
}
function nG(e, t) {
    (0, eC.isWindows)() &&
        e > 1 &&
        N.GH(e, { soundshare_session: t }).then((t) => {
            null == t ||
                U.Ay.shouldContinueWithoutElevatedProcessForPID(e) ||
                C.h.wait(() => {
                    C.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: t });
                });
        });
}
function nF(e) {
    (i = e.sessionId), (tA = !1), (ty = !1);
    let t = na();
    if (
        (nT() && (ny() ? rB(ej.rB.AUTOMATIC) : t.automaticAudioSubsystem && rj()),
        to.supports(ej.O5.OFFLOAD_ADM_CONTROLS))
    ) {
        let e = !1;
        (0, eC.isDesktop)()
            ? (e = (0, j.i)({ location: "handleConnectionOpen" }).enabled)
            : ((0, eC.isIOS)() || (0, eC.isAndroid)()) && (e = (0, H.Y)({ location: "handleConnectionOpen" }).enabled),
            to.setOffloadAdmControls(e);
    }
    (0, eI.Lb)({ location: "MediaEngineStore", autoTrackExposure: !1 }) &&
        null !== t.mostRecentlyRequestedVoiceFilter &&
        (0, eC.isDesktop)() &&
        (eT.A.getLastInitAttemptMayHaveCrashed()
            ? (C.h.dispatch({ type: "AUDIO_SET_SELF_MUTE", mute: !0, context: ej.x.DEFAULT, playSoundEffect: !0 }),
              nv({ mostRecentlyRequestedVoiceFilter: null }))
            : n(342887).md()),
        nk();
}
function nV(e) {
    let { mediaEngineState: t } = e;
    (tl = t.settingsByContext),
        (tp = t.inputDevices),
        (tm = t.outputDevices),
        (t1 = t.appSupported),
        (tU = t.krispModuleLoaded),
        (c = t.krispVersion),
        (t_ = t.goLiveContext);
}
function nB() {
    i = null;
}
function nj() {
    if ((0, eC.isWeb)()) {
        let e = er.f1.getCurrentConfig({ location: "MediaEngineStore handlePostConnectionOpen" });
        e.loadWasmModule && e.preload && r.startDavePreload();
    }
    return !1;
}
function nH(e) {
    switch (e.state) {
        case eU.S7L.CONNECTING:
            nN();
            break;
        case eU.S7L.RTC_CONNECTING:
            (tx = !1), (l = void 0), (u = void 0), (tw = !1), (t4 = !1), t5.stop(), tP.stop(), o.reset();
            break;
        case eU.S7L.RTC_CONNECTED:
            nc();
            break;
        case eU.S7L.DISCONNECTED:
            nQ(), nJ();
    }
}
function nY(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (tA = t.mute || t.suppress), (ty = t.deaf), to.eachConnection(nl);
            let e = null != t.guildId && null != t.channelId && null != tY && tY !== t.channelId,
                n = !tM && null == t.channelId;
            return nc(!e && !n && tS), (tY = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== eO.default.getId() || null != ex.A.getChannelId() || nc(!1, null), e;
    }, !1);
}
function nW(e) {
    let { mute: t } = e;
    (tI = t), to.eachConnection(nl);
}
function nK(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = na(t);
    if (t === ej.x.DEFAULT && (e_.A.requestPermission(eF.iL.AUDIO), tT)) return !1;
    (r = !i && !r) || (i = !1), n || (tb = !0), nv({ mute: r, deaf: i }, t), to.eachConnection(nl);
}
function n$(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    nv({ mute: n }, t), r || (tb = !0), to.eachConnection(nl);
}
function nz(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== eV.oD.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    nk(!0);
}
function nq(e) {
    let { context: t } = e;
    nv({ deaf: !na(t).deaf }, t), to.eachConnection(nl);
}
function nX(e) {
    let { context: t, userId: n } = e;
    if (n === eO.default.getId()) return;
    let { localMutes: r } = na(t);
    r[n] ? delete r[n] : (r[n] = !0),
        nv({ localMutes: r }, t),
        to.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nZ(e) {
    let { context: t, userId: n, videoToggleState: r, persist: i, isAutomatic: a } = e;
    p()(!(i && a), "These are not allowed to both be true.");
    let s = r === eU.bb8.DISABLED,
        { disabledLocalVideos: o } = na(t),
        l = o[n] ?? !1,
        u = tQ.has(n),
        c = r === eU.bb8.AUTO_ENABLED || r === eU.bb8.MANUAL_ENABLED;
    eY.info(`disableVideo=${s} currentlyDisabled=${l} currentlyAutoDisabled=${u}, isVideoShown=${c}`),
        p()(!(u && !l), "If you are auto-disabled, then you are also disabled.");
    let d = s !== l,
        _ = t === ej.x.DEFAULT,
        f = a && d && _,
        h = i && d && _;
    eY.info(`changed=${d} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${f} isManualToggleByUser=${h}`);
    let { videoToggleStateMap: g } = na(t);
    if (
        (g[n] === eU.bb8.AUTO_PROBING &&
            r === eU.bb8.AUTO_ENABLED &&
            (0, ed.A)(n, s ? ej.Al.AUTO_DISABLE : ej.Al.AUTO_ENABLE, c),
        (g[n] = r),
        nv({ videoToggleStateMap: g }, t, i),
        r === eU.bb8.AUTO_PROBING
            ? ex.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
            : ex.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
        tJ ||
            (eY.info(`isAutoDisableAllowed=${tJ} - disabling VideoHealthManager`),
            ex.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
        f)
    ) {
        if ((!s && !u) || (s && !tJ)) return;
        (0, ed.A)(n, s ? ej.Al.AUTO_DISABLE : ej.Al.AUTO_ENABLE, c), s ? tQ.add(n) : tQ.delete(n);
    } else
        h &&
            (u && !s
                ? (eY.info("disallowing auto-disable for this session because of manual override by user"),
                  (tJ = !1),
                  ex.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                  (0, ed.A)(n, ej.Al.MANUAL_REENABLE, c))
                : (0, ed.A)(n, s ? ej.Al.MANUAL_DISABLE : ej.Al.MANUAL_ENABLE, c));
    _ && !s && tQ.delete(n),
        s ? (o[n] = !0) : delete o[n],
        nv({ disabledLocalVideos: o }, t, i),
        to.eachConnection((e) => e.setLocalVideoDisabled(n, o[n] ?? !1), t);
}
function nQ() {
    if (0 === tQ.size) return;
    let e = ej.x.DEFAULT,
        { disabledLocalVideos: t } = na(e);
    tQ.forEach((n) => {
        p()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            to.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tQ.clear(),
        nv({ disabledLocalVideos: t }, e, !1);
}
function nJ() {
    let e = ej.x.DEFAULT,
        { videoToggleStateMap: t } = na(e);
    for (let [e, n] of Object.entries(t)) n === eU.bb8.AUTO_PROBING && delete t[e];
    nv({ videoToggleStateMap: t }, e, !1);
}
function n0(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === eO.default.getId()) return;
    let i = t === ej.x.STREAM ? ej.Cn : ej.Hz,
        { localVolumes: a } = na(t);
    r === i ? delete a[n] : (a[n] = r), nv({ localVolumes: a }, t), to.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function n1(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: a } = na(t);
    (a[n] = { left: r, right: i }), nv({ localPans: a }, t), to.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function n2(e) {
    let { context: t, mode: n, options: r } = e;
    nv({ mode: n, modeOptions: { ...r, updatedAt: Date.now() } }, t), to.eachConnection(ns);
}
function n3(e) {
    let { volume: t } = e;
    nv({ inputVolume: no(t) }), to.setInputVolume(t);
}
function n6(e) {
    let { volume: t } = e;
    nv({ outputVolume: t }), to.setOutputVolume(t);
}
function n4(e) {
    let { id: t } = e;
    (t = nD(tp, t)),
        (tf = performance.now()),
        nv({ inputDeviceId: t }),
        to.setAudioInputDevice(t),
        to.eachConnection(nm),
        (l = void 0),
        (u = void 0),
        t5.stop(),
        (t4 = !1);
    let { resetSilenceWarningOnDeviceChange: n } = ei.A.getConfig({
        location: "MediaEngineStore.handleSetInputDevice",
    });
    n && ((tw = !1), o.reset());
}
function n5(e) {
    let { id: t } = e;
    nv({ outputDeviceId: (t = nD(tm, t)) }), to.setAudioOutputDevice(t);
}
function n7(e) {
    let { id: t } = e;
    nv({ videoDeviceId: (t = nD(tg, t)) }), nc();
}
function n8(e) {
    let { inputProfile: t } = e;
    nv({ activeInputProfile: t });
    let n = na();
    to.eachConnection((e) => {
        ns(e), nm(e);
    }),
        to.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        ru();
}
function n9(e) {
    return td !== e.required && ((td = e.required), e.required || to.interact(), !0);
}
function re(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    nL(t), nP(n), nM(r);
}
function rt(e) {
    let { inputVolume: t, outputVolume: n } = e;
    nv({ inputVolume: no(t), outputVolume: n });
}
function rn(e) {
    let t = na(),
        n = to.getAudioSubsystem(),
        i = to.getAudioLayer(),
        a = nD(tp, t.inputDeviceId),
        s = tp[a]?.name,
        o = (0, eh.A)(t.noiseCancellation, r.getSystemMicrophoneMode(), { location: "trackVoiceProcessing" });
    ey.default.track(eU.HAw.VOICE_PROCESSING, {
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
function rr(e) {
    let t = nv({ echoCancellation: e.enabled });
    to.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), ru(), rn(e.location);
}
function ri(e) {
    rs(e.enabled);
}
function ra(e) {
    let t = nv({ sidechainCompressionStrength: e.strength });
    to.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function rs(e) {
    let t = nv({ sidechainCompression: e });
    to.setSidechainCompression(t.sidechainCompression);
}
function ro(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? t0.add(n) : t0.delete(n), rl(), ru();
}
function rl() {
    let e = !t0.has("voice_filter_preview") && !t0.has("mic_test");
    to.setMaybePreprocessMute(e);
}
function ru() {
    let e = na(),
        t = t0.size > 0,
        n = e.inputDeviceId,
        r = eL.A.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        a = eL.A.hasNoiseSuppression(n) || e.noiseSuppression,
        s = nf(eL.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        o = e.noiseCancellation,
        l = null !== tV,
        u = t0.has("voice_filter") && 1 === t0.size;
    to.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: a,
        automaticGainControlConfig: s,
        noiseCancellation: o,
        voiceFilters: l,
        loopbackUseAudioMode: u,
    });
}
async function rc() {
    if (!to.supports(ej.O5.VAAPI)) return;
    let e = 4098;
    if (window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let t = await window.DiscordNative.processUtils.getSystemInfo();
    (t.electronGPUInfo?.gpuDevice ?? []).some((t) => t.vendorId === e) &&
        ((t9 = !0), (t8 = to.supports(ej.O5.GAMESCOPE_CAPTURE)));
}
function rd(e) {
    let t = nv({ noiseSuppression: e.enabled });
    to.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), ru(), rn(e.location);
}
function r_(e) {
    let t = nv({ automaticGainControl: e.enabled });
    to.eachConnection((e) => nh(e, t.automaticGainControl)), ru(), rn(e.location);
}
function rf(e) {
    let t = nv({ noiseCancellation: e.enabled });
    to.eachConnection((e) => np(e, t.noiseCancellation)), ru(), rn(e.location);
}
function rh(e) {
    ef.A.setKrispModelOverride(e.model), (_ = e.model), ru();
}
function rp(e) {
    (0, eC.isWeb)() || ((tF = e.enabled), to.setNoiseCancellationEnableStats?.(e.enabled));
}
function rm(e) {
    nv({ silenceWarning: e.enabled });
}
function rg(e) {
    to.setDebugLogging(e.enabled);
}
function rE(e) {
    let { level: t } = e;
    (d = t), ef.A.setKrispSuppressionLevel(t);
}
function rA(e) {
    nv({ videoHook: e.enabled });
}
function rI(e) {
    nv({ experimentalSoundshare2: e.enabled });
}
function rT(e) {
    let { enabled: t } = e;
    nv({ useSystemScreensharePicker: t });
}
function ry(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = nv({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r });
    to.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function rS(e) {
    let { enabled: t } = e;
    nv({ qos: t }), to.eachConnection((e) => e.setQoS(t));
}
function rv() {
    nC();
}
function rC(e) {
    let { osVolume: t, osMuted: n } = e;
    (u = t), (l = n);
}
function rb(e) {
    let { inputDetected: t } = e;
    if (null == t) return !1;
    if (((tx = !0 !== tw && !t), t)) (tw = !0), (t4 = !1), t5.stop(), tP.stop();
    else if (na().mode === eU.TBI.VOICE_ACTIVITY && tw) {
        let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = ei.A.getConfig({
            location: "MediaEngineStore.handleInputDetected",
        });
        e &&
            t5.start(e6, () => {
                ey.default.track(eU.HAw.HARDWARE_MUTE_GUESSED, {
                    input_device_name: tp[nD(tp, na().inputDeviceId)]?.name,
                    rtc_connection_id: ex.A.getRTCConnectionId(),
                }),
                    (t4 = !0),
                    r.emitChange();
            }),
            null != t &&
                tP.start(t * ev.A.Millis.MINUTE, () => {
                    (tw = !1), o.reset();
                });
    }
}
function rN(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === tT) return !1;
    (tT = n), to.eachConnection(nl);
}
function rR(e) {
    let { state: t, permissionType: n } = e,
        r = t === eF.hL.ACCEPTED;
    switch (n) {
        case eF.iL.AUDIO:
            (tX = !0), to.eachConnection(nl);
            break;
        case eF.iL.CAMERA:
            !r && tS && nc(!1);
            break;
        default:
            return !1;
    }
}
function rO() {
    return tU || !1;
}
async function rD() {
    try {
        await eN.Ay.ensureModule("discord_krisp");
        let e = eN.Ay.requireModule("discord_krisp");
        (tU = !0),
            (c = e.getSdkVersion?.()),
            (d = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (tG = e), r.emitChange();
            }),
            r.emitChange();
    } catch (t) {
        eY.warn(`Failed to load Krisp module: ${t.message}`), eb.A.captureException(t);
        let e = ej.CO.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? ej.CO.INITIALIZED : n;
        }
        ey.default.track(eU.HAw.VOICE_PROCESSING, { noise_canceller_error: e }), nv({ noiseCancellation: !1 });
    } finally {
        tk = !1;
    }
}
function rL() {
    return (0, eC.isWindows)() || (0, eC.isLinux)() || (0, eC.isMac)();
}
function rw() {
    !rL() || __OVERLAY__ || tk || tU
        ? (0, eC.isWeb)() && to.supports(ej.O5.NOISE_CANCELLATION)
            ? ((tU = !0), r.emitChange())
            : (0, eC.isWeb)() && nv({ noiseCancellation: !1 })
        : ((tk = !0), rD());
}
async function rx() {
    try {
        let e,
            t = "",
            n = !1,
            r = URL.parse(e7);
        if (null === r) return void eY.log("OpenH264 URL ", r, " is invalid");
        let i = r.pathname.split("/"),
            a = i[i.length - 1].replace(".bz2", "");
        try {
            let t = await eN.Ay.downloadOpenH264(e7, a, e8, (e) => {
                eY.log("OpenH264 download status", e);
            });
            eY.log("OpenH264 is ready", t), (n = t.fetchedFromNetwork), (e = !0);
        } catch (n) {
            eY.error("OpenH264 download failed", n), (t = n.message), (e = !1);
        }
        if (
            (ey.default.track(eU.HAw.VIDEO_OPENH264_DOWNLOADED, {
                success: e,
                fetched_from_network: n,
                error_message: t,
            }),
            e)
        ) {
            let e = await eN.Ay.cleanupUnusedOpenH264Files([a]);
            eY.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        eY.error("OpenH264 download failed", e);
    }
}
function rP() {
    (0, eC.isLinux)() && rx();
}
function rM(e) {
    let { enabled: t } = e;
    ey.default.track(eU.HAw.VOICE_FILTER_PLAYBACK_TOGGLED, { active_voice_filter_id: tV ?? null, enabled: t }),
        nv({ voiceFilterPlaybackEnabled: t });
}
function rk(e) {
    let { newVoiceFilterId: t } = e;
    nv({ mostRecentlyRequestedVoiceFilter: t }), to.eachConnection((e) => e.setVoiceFilterId(t));
}
function rU() {
    nv({ mostRecentlyRequestedVoiceFilter: null });
}
function rG(e) {
    let { voiceFilterId: t } = e;
    (tj = tV), (tH = tB), (tV = t), (tB = null === t ? null : Date.now());
}
function rF(e) {
    let t = e.bypassEnabled;
    nv({ bypassSystemInputProcessing: t }), to.setAudioInputBypassSystemProcessing(t), rn(e.location);
}
function rV(e) {
    rB(e.subsystem);
}
function rB(e) {
    e === ej.rB.AUTOMATIC
        ? (nv({ automaticAudioSubsystem: !0 }), rj())
        : (nv({ automaticAudioSubsystem: !1 }), to.setAudioSubsystem(e));
}
function rj() {
    to.queueAudioSubsystem(ej.rB.EXPERIMENTAL);
}
function rH(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && nc(i, null), null != t || null == n)) {
        tM = !1;
        return;
    }
    if (tM) return;
    tM = !0;
    let a = na();
    (a.mute || a.deaf) && (nv({ deaf: !1, mute: !1 }), to.eachConnection(nl));
}
function rY(e) {
    let { application: t } = e;
    tu.add(t.id);
}
function rW(e) {
    let { application: t } = e;
    tu.delete(t.id);
}
function rK(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (tc = !1), to.eachConnection(nl);
                break;
            case "video":
                nc(!1);
        }
}
function r$(e) {
    (tc = e.enabled), e.unmute && nv({ mute: !1, deaf: !1 }), to.eachConnection(nl);
}
function rz(e) {
    let { enabled: t } = e;
    e_.A.requestPermission(eF.iL.CAMERA), nc(t);
}
function rq(e) {
    let { sourceId: t, applicationName: n, quality: i } = e;
    if (!(0, L.Ao)() || null == b.A) return !1;
    let a = null,
        o = null,
        l = eS.A.getPidFromDesktopSource(t);
    ({ soundshareId: a, soundshareSession: o } = nU(l));
    let u = { desktopSource: { id: t, sourcePid: l, soundshareId: a, soundshareSession: o }, quality: i };
    null != s &&
        (to.setClipsSource(null),
        (0, eC.isWindows)() && null != s.desktopSource.soundshareId && N.c1(s.desktopSource.soundshareId)),
        null != a && nG(a, o),
        (s = u);
    let c = nt("MediaEngineStore clips"),
        d = na().videoHook;
    to.setClipsSource({
        desktopDescription: {
            id: s.desktopSource.id,
            soundshareId: s.desktopSource.soundshareId,
            useVideoHook: d,
            useGraphicsCapture: nE(),
            useCaptureDeviceForEncode: !1,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: nI(),
            videoHookStaleFrameTimeoutMs: eQ,
            graphicsCaptureStaleFrameTimeoutMs: eJ,
            hdrCaptureMode: c,
        },
        quality: i,
        applicationName: n,
    });
}
function rX(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((s = null), to.setClipsSource(null));
}
function rZ(e) {
    let { settings: t } = e;
    if (t?.desktopSettings != null) {
        let e = null,
            n = null,
            { sourceId: r, sound: i } = t.desktopSettings,
            a = t.context ?? ej.x.DEFAULT,
            s = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
            o = !1 === i ? null : eS.A.getPidFromDesktopSource(r);
        eC.isPlatformEmbedded &&
            !0 === i &&
            (({ soundshareId: e, soundshareSession: n } = nU(o)), null != e && nG(e, n)),
            nu(a),
            nc(a === ej.x.STREAM && tS, {
                desktopSource: { id: r, sourcePid: o, soundshareId: e, soundshareSession: n },
                quality: { resolution: s.resolution, frameRate: s.frameRate },
            });
    } else if (t?.cameraSettings != null) {
        let e = t.context ?? ej.x.DEFAULT,
            { videoDeviceGuid: n, audioDeviceGuid: r } = t.cameraSettings,
            i = e === ej.x.STREAM && tS,
            a = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
        nc(i, {
            cameraSource: { videoDeviceGuid: n, audioDeviceGuid: r },
            quality: { resolution: a.resolution, frameRate: a.frameRate },
        });
    } else nc(tS, null);
}
function rQ(e) {
    let { section: t } = e;
    return t === eU.nc_.VOICE && nN(), !1;
}
function rJ() {
    return to.eachConnection(nm), !1;
}
function r0(e) {
    let { enabled: t } = e,
        n = nv({ aecDumpEnabled: t });
    to.setAecDump(n.aecDumpEnabled);
}
function r1(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (tl = Object.values(ej.x).reduce((e, n) => {
        let r = n,
            i = ta();
        return (e[r] = E().merge(i, t[r])), e;
    }, {})),
        S.w.set(eW, tl),
        nb();
}
function r2(e) {
    let { state: t } = e,
        n = k.A.isEnabled();
    if (t === eU.g6G.BACKGROUND && tS && !n) (tD = !0), nc(!1);
    else {
        if (t !== eU.g6G.ACTIVE || !tD) return !1;
        (tD = !1), nc(!0);
    }
    return !0;
}
function r3(e) {
    to.eachConnection((t) => t.setBitRate(e.bitrate));
}
function r6() {
    if ((!tS && null == a) || null != ex.A.getRTCConnectionId()) return !1;
    nc(!1, null);
}
function r4() {
    return !!tW && ((tW = !1), !0);
}
function r5(e) {
    to.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function r7(e) {
    let { settings: t } = e;
    to.applyMediaFilterSettings(t).finally(() => {
        (tK = !1), r.emitChange();
    });
}
function r8() {
    tK = !0;
}
function r9() {
    tK = !1;
}
function ie(e) {
    t6 = e.enabled;
}
function it() {
    if ((0, eC.isDesktop)() && eC.isPlatformEmbedded && !ne) {
        ne = !0;
        let e = async () => {
            let t = await new Promise((e) => {
                eN.Ay.pollQueueMetrics((t) => {
                    e(t);
                });
            });
            t.periodMs = ej.tl;
            let n = ii(t);
            null !== n && ey.default.track(eU.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, ej.tl);
        };
        setTimeout(e, ej.tl);
    }
}
class ir extends T.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        ng(),
            nS(),
            rw(),
            rP(),
            nJ(),
            it(),
            (0, eC.isWindows)() && eC.isPlatformEmbedded && n_(),
            (t1 = {
                [ej.O5.VIDEO]: to.supports(ej.O5.VIDEO),
                [ej.O5.DESKTOP_CAPTURE]: to.supports(ej.O5.DESKTOP_CAPTURE),
                [ej.O5.HYBRID_VIDEO]: to.supports(ej.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eO.default, eD.A, eL.A, ew.A, O.A, M.A, ex.A, U.Ay, ep.A, eE.A, eM.default, ek.A, eT.A);
    }
    supports(e) {
        return to.supports(e);
    }
    supportsInApp(e) {
        return t1[e] || to.supports(e);
    }
    isSupported() {
        return to.supported();
    }
    isNoiseSuppressionSupported() {
        return to.supports(ej.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return rO();
    }
    isNoiseCancellationError() {
        return tW;
    }
    isAutomaticGainControlSupported() {
        return to.supports(ej.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !ny() && (to.supports(ej.O5.LEGACY_AUDIO_SUBSYSTEM) || to.supports(ej.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return to.supports(ej.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === to.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return rO();
    }
    isAecDumpSupported() {
        return to.supports(ej.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return to.supports(ej.O5.VIDEO) && to.supports(ej.O5.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        return ew.A.getChannel(tY)?.type !== eU.rbe.GUILD_STAGE_VOICE && e4 && Z.A.simulcastEnabled();
    }
    getAecDump() {
        return na().aecDumpEnabled;
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
        return tF;
    }
    isEnabled() {
        return tc;
    }
    isMute() {
        return this.isSelfMute() || tA;
    }
    isDeaf() {
        return this.isSelfDeaf() || ty;
    }
    hasContext(e) {
        return null != tl[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ej.x.DEFAULT;
        return e === ej.x.DEFAULT && tI;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ej.x.DEFAULT;
        return (
            !this.isEnabled() ||
            na(e).mute ||
            !e_.A.didHavePermission(eF.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === ej.x.DEFAULT && tT)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tb;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tb = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ej.x.DEFAULT,
            t = t4 && "voice_isolation" !== this.getSystemMicrophoneMode() && na(e).mode === eU.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (eL.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return t6;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ej.x.DEFAULT;
        return !this.isSupported() || na(e).deaf;
    }
    isVideoEnabled() {
        return tS && tL;
    }
    isVideoAvailable() {
        return Object.values(tg).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ej.x.STREAM;
        return t_ === e && null != a;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ej.x.STREAM;
        return t_ === e && null != a && a.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ej.x.DEFAULT;
        return e !== eO.default.getId() && (na(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return to.supports(ej.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ej.x.DEFAULT;
        return na(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ej.x.DEFAULT;
        return na(t).videoToggleStateMap[e] ?? eU.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ej.x.DEFAULT;
        return t === ej.x.DEFAULT && tQ.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ej.x.DEFAULT;
        return e === ej.x.DEFAULT && tQ.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tK;
    }
    isNativeAudioPermissionReady() {
        return tX;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return t_;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return tf;
    }
    isH264MfDecodeAvailable() {
        return th;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ej.x.DEFAULT,
            n = na(t).localPans[e];
        return null != n ? n : eZ;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ej.x.DEFAULT,
            n = t === ej.x.STREAM ? ej.Cn : ej.Hz,
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
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ej.x.DEFAULT;
        return na(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ej.x.DEFAULT;
        return na(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return tV;
    }
    getActiveVoiceFilterAppliedAt() {
        return tB;
    }
    getPreviousVoiceFilter() {
        return tj;
    }
    getPreviousVoiceFilterAppliedAt() {
        return tH;
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
        return nD(tp, na().inputDeviceId);
    }
    getOutputDeviceId() {
        return nD(tm, na().outputDeviceId);
    }
    getVideoDeviceId() {
        return nD(tg, na().videoDeviceId);
    }
    getInputDevices() {
        return tp;
    }
    getOutputDevices() {
        return tm;
    }
    getVideoDevices() {
        return tg;
    }
    getEchoCancellation() {
        let e = na();
        return eL.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return to.supports(ej.O5.SIDECHAIN_COMPRESSION) && na().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return na().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return na().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tz && tz;
    }
    getLoopback() {
        return t0.size > 0;
    }
    getLoopbackReasons() {
        return t0;
    }
    getNoiseSuppression() {
        let e = na();
        return eL.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = na();
        return eL.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return na().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return na().noiseCancellation;
    }
    getHardwareEncoding() {
        return e4;
    }
    getEnableSilenceWarning() {
        return na().silenceWarning;
    }
    getDebugLogging() {
        return to.getDebugLogging();
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
        return nT() && na().automaticAudioSubsystem ? ej.rB.AUTOMATIC : to.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return to.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return na().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eB.my.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ej.x.DEFAULT;
        return na(e);
    }
    getState() {
        return {
            settingsByContext: tl,
            inputDevices: tp,
            outputDevices: tm,
            appSupported: t1,
            krispModuleLoaded: tU,
            krispVersion: c,
            krispSuppressionLevel: d,
            goLiveSource: a,
            goLiveContext: t_,
        };
    }
    getInputDetectedThisConnection() {
        return tw;
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
        return eC.isPlatformEmbedded || this.getMode() !== eU.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        to.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return td;
    }
    getVideoHook() {
        return na().videoHook;
    }
    supportsVideoHook() {
        return to.supports(ej.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = na().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return to.supports(ej.O5.EXPERIMENTAL_SOUNDSHARE) && I().satisfies(b.A?.os.release, eG.$x);
    }
    supportsHookSoundshare() {
        return (0, eC.isWindows)() && to.supports(ej.O5.SOUNDSHARE) && I().satisfies(b.A?.os.release, eG.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = na().useSystemScreensharePicker,
            n = (0, eC.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return to.supports(ej.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return t9;
    }
    getUseGamescopeCapture() {
        return t8;
    }
    getEverSpeakingWhileMuted() {
        return tN;
    }
    getSpeakingWhileMuted() {
        return tR;
    }
    getKrispModelOverride() {
        return _;
    }
    getKrispModels() {
        return tG;
    }
    getKrispVadActivationThreshold() {
        return na().modeOptions.vadKrispActivationThreshold ?? eX;
    }
    hasActiveCallKitCall() {
        return t7;
    }
    setHasActiveCallKitCall(e) {
        t7 = e;
    }
    supportsScreenSoundshare() {
        return (0, eC.isMac)()
            ? to.supports(ej.O5.SOUNDSHARE) && I().satisfies(b.A?.os.release, eG.P$) && nI()
            : (0, eC.isWindows)()
              ? to.supports(ej.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, eC.isLinux)() && to.supports(ej.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        return (0, eC.isWindows)()
            ? this.getInputDevices()[this.getInputDeviceId()]?.effects?.find((e) => e === e5)
            : (0, eC.isMac)() || (0, eC.isIOS)()
              ? f
              : void 0;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ej.x.DEFAULT,
            t = this.supports(ej.O5.VIDEO)
                ? [{ rid: "100", type: e === ej.x.DEFAULT ? ej.mI.VIDEO : ej.mI.SCREEN, quality: ej.Y4 }]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === ej.x.DEFAULT || this.goLiveSimulcastEnabled()) &&
                t.push({ rid: "50", type: e === ej.x.DEFAULT ? ej.mI.VIDEO : ej.mI.SCREEN, quality: ej.Cl }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: !1 };
        return (
            (0, eC.isWeb)() &&
                (e.fetchDave = er.f1.getCurrentConfig({
                    location: "MediaEngineStore fetchAsyncResources",
                }).loadWasmModule),
            to.fetchAsyncResources(e)
        );
    }
    startDavePreload() {
        if (!t$ && ((t$ = !0), (0, eC.isWeb)())) {
            let e = { fetchDave: !0 };
            to.fetchAsyncResources(e).catch((e) => {
                eY.warn("DAVE preload failed:", e), eb.A.captureException(e);
            });
        }
    }
    getSupportedSecureFramesProtocolVersion() {
        if ((0, eC.isWeb)()) {
            let { useWasmModule: e } = er.f1.getCurrentConfig({
                location: "MediaEngineStore getSupportedSecureFramesProtocolVersion",
            });
            if (!e) return 0;
        }
        let e = to.getSupportedSecureFramesProtocolVersion();
        114 === e && (e = 1);
        let t = er.ex.getCurrentConfig({ location: "MediaEngineStore" }),
            n = er.a.getConfig({ location: "MediaEngineStore" });
        return (t.canSupportDaveProtocol || (n.allowOptIn && ep.A.getPersistentCodesEnabled())) &&
            e >= t.protocolVersionFloor
            ? e
            : 0;
    }
    hasClipsSource() {
        return null != s;
    }
    getGpuBrand() {
        return t2;
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
    VOICE_STATE_UPDATES: nY,
    CONNECTION_OPEN: nF,
    CONNECTION_CLOSED: nB,
    POST_CONNECTION_OPEN: nj,
    RTC_CONNECTION_STATE: nH,
    AUDIO_SET_TEMPORARY_SELF_MUTE: nW,
    AUDIO_TOGGLE_SELF_MUTE: nK,
    AUDIO_SET_SELF_MUTE: n$,
    AUDIO_TOGGLE_SELF_DEAF: nq,
    AUDIO_TOGGLE_LOCAL_MUTE: nX,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: nZ,
    AUDIO_SET_LOCAL_VOLUME: n0,
    AUDIO_SET_LOCAL_PAN: n1,
    AUDIO_SET_MODE: n2,
    AUDIO_SET_INPUT_VOLUME: n3,
    AUDIO_SET_OUTPUT_VOLUME: n6,
    AUDIO_SET_INPUT_DEVICE: n4,
    AUDIO_SET_OUTPUT_DEVICE: n5,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: n8,
    AUDIO_SET_ECHO_CANCELLATION: rr,
    AUDIO_SET_SIDECHAIN_COMPRESSION: ri,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: ra,
    AUDIO_SET_LOOPBACK: ro,
    AUDIO_SET_NOISE_SUPPRESSION: rd,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: r_,
    AUDIO_SET_NOISE_CANCELLATION: rf,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: rh,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: rm,
    AUDIO_SET_DEBUG_LOGGING: rg,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: rE,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: rp,
    MEDIA_ENGINE_SET_VIDEO_HOOK: rA,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: rI,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: rT,
    AUDIO_SET_ATTENUATION: ry,
    AUDIO_SET_QOS: rS,
    MEDIA_ENGINE_DEVICES: re,
    AUDIO_VOLUME_CHANGE: rt,
    AUDIO_RESET: rv,
    AUDIO_INPUT_DETECTED: rb,
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: rC,
    AUDIO_SET_SUBSYSTEM: rV,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rF,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: r$,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rz,
    MEDIA_ENGINE_PERMISSION: rK,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rZ,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: n7,
    MEDIA_ENGINE_INTERACTION_REQUIRED: n9,
    USER_SETTINGS_MODAL_INIT: rQ,
    USER_SETTINGS_MODAL_SET_SECTION: rQ,
    CERTIFIED_DEVICES_SET: rJ,
    RPC_APP_CONNECTED: rY,
    RPC_APP_DISCONNECTED: rW,
    OVERLAY_INITIALIZE: nV,
    APP_STATE_UPDATE: r2,
    SET_CHANNEL_BITRATE: r3,
    SET_VAD_PERMISSION: rN,
    SET_NATIVE_PERMISSION: rR,
    SET_CHANNEL_VIDEO_QUALITY_MODE: r5,
    MEDIA_ENGINE_SET_AEC_DUMP: r0,
    MEDIA_ENGINE_RESET_SETTINGS: r1,
    CHANNEL_DELETE: r6,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: r4,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: r7,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: r8,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: r9,
    USER_SETTINGS_PROTO_UPDATE: nz,
    CLIPS_INIT: rq,
    CLIPS_SETTINGS_UPDATE: rX,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: ie,
    VOICE_FILTER_REQUEST_SWITCH: rk,
    VOICE_FILTER_LOOPBACK_TOGGLE: rM,
    VOICE_FILTER_APPLIED: rG,
    VOICE_FILTER_DOWNLOAD_FAILED: rU,
    VOICE_FILTER_APPLY_FAILED: rU,
})),
    (o = new J.A(to, r));
let ia = r;
