"use strict";
let r, i, s, a, o, l, u, c, d, _, f;
n.d(t, { Ay: () => is }), n(323874), n(14289), n(35956), n(321073), n(790599);
var p = n(284009),
    h = n.n(p),
    m = n(735438),
    E = n.n(m),
    g = n(299855),
    A = n.n(g),
    I = n(311907),
    T = n(205693),
    S = n(506774),
    y = n(451988),
    v = n(73153),
    N = n(77729),
    C = n(719129),
    b = n(894539),
    R = n(274372),
    O = n(915618),
    D = n(572164),
    L = n(626584),
    w = n(211597),
    x = n(487329),
    M = n(49463),
    P = n(784113),
    k = n(15285),
    U = n(540305),
    G = n(17300),
    F = n(544746),
    V = n(820344),
    B = n(593595),
    H = n(788601),
    j = n(626078),
    Y = n(509034),
    W = n(638188),
    K = n(269377),
    z = n(934341),
    $ = n(658046),
    q = n(621963),
    X = n(525286),
    Z = n(780732),
    Q = n(264866),
    J = n(927170),
    ee = n(729410),
    et = n(233232),
    en = n(140175);
n(491642);
var er = n(267378),
    ei = n(801644),
    es = n(223572),
    ea = n(276006),
    eo = n(670470),
    el = n(886124),
    eu = n(165479),
    ec = n(896014),
    ed = n(765396),
    e_ = n(75076),
    ef = n(674966),
    ep = n(559633),
    eh = n(3527),
    em = n(714763),
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
    eb = n(837921),
    eR = n(350535),
    eO = n(961350),
    eD = n(131319),
    eL = n(347481),
    ew = n(734057),
    ex = n(383501),
    eM = n(851581),
    eP = n(287809),
    ek = n(117549),
    eU = n(652215),
    eG = n(502075),
    eF = n(765682),
    eV = n(355097),
    eB = n(509381),
    eH = n(731854),
    ej = n(985018);
let eY = new L.A("MediaEngineStore"),
    eW = "MediaEngineStore",
    eK = 4,
    ez = 1,
    e$ = 1,
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
    if (!(0, eN.isIOS)() || null == te) return !1;
    let e = te();
    if (null == e || !e.startsWith("ARM64_")) return !1;
    let t = e.substring(6);
    return ("T" === t[0] || "S" === t[0]) && parseInt(t.substring(1), 10) >= 8122;
}
let tn = null;
async function tr() {
    if (!(0, eN.isMac)() || N.A?.os.arch !== "arm64" || N.A?.processUtils?.getSystemInfo == null) {
        tn = !1;
        return;
    }
    let e = await N.A.processUtils.getSystemInfo(),
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
function ts() {
    return {
        mode: eU.TBI.VOICE_ACTIVITY,
        modeOptions: {
            threshold: e0,
            autoThreshold: eN.isPlatformEmbedded || __OVERLAY__,
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
    to = (0, T.hB)((0, T.WI)());
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
    tg = new y.Ep(),
    tA = !1,
    tI = !1,
    tT = !1,
    tS = !1,
    ty = !1,
    tv = eH.qe,
    tN = eH.qe,
    tC = !1,
    tb = !1,
    tR = !1,
    tO = new y.Ep(),
    tD = !1,
    tL = !1,
    tw = !1,
    tx = !1,
    tM = new y.Ep(),
    tP = !1,
    tk = !1,
    tU = !1,
    tG = [],
    tF = !1,
    tV = null,
    tB = null,
    tH = null,
    tj = null,
    tY = null,
    tW = !1,
    tK = !1,
    tz = !1,
    t$ = null,
    tq = null,
    tX = !1;
ef.A.hasPermission(eF.iL.AUDIO, { showAuthorizationError: !1 }),
    ef.A.hasPermission(eF.iL.CAMERA, { showAuthorizationError: !1 });
let tZ = !1,
    tQ = new Set(),
    tJ = tZ,
    t0 = new Set(),
    t1 = {},
    t2 = null,
    t3 = null,
    t6 = !0,
    t4 = !1,
    t5 = new y.Ep(),
    t7 = !1,
    t8 = !1,
    t9 = !1,
    ne = !1;
function nt(e) {
    return (0, q.p)({ location: e }).hdrCaptureMode;
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
    return null != tq ? tq : "u" > typeof window ? (tq = nn().then((e) => ((t$ = e), e))) : Promise.resolve(!1);
}
function ni() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eH.x.DEFAULT,
        t = tl[e];
    return null == t && ((t = ts()), (tl[e] = t)), t;
}
function ns() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eH.x.DEFAULT,
        t = ni(e),
        n = ta[t.activeInputProfile ?? eB.m.CUSTOM],
        r = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}) };
    if (
        (null == r.vadDuringPreProcess && (r.vadDuringPreProcess = (0, es.R)({ location: "getSettings" }).enabled),
        (null == r.vadKrispActivationThreshold && !0 === n.automaticGainControl) || !0 === t.automaticGainControl)
    ) {
        let e = (0, G.F)({ location: "getSettings" });
        null != e.vadKrispActivationThreshold && (r.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return { ...t, ...n, modeOptions: r };
}
function na(e) {
    let t = ns(e.context),
        n = t.mode;
    e.context === eH.x.DEFAULT && (0, en.N)(!1, !1);
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
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eH.Hz;
    return E().clamp(e, 0, t);
}
function nl(e) {
    let t = ns(e.context),
        n = !tc || t.mute || t.deaf;
    e.context === eH.x.DEFAULT
        ? (n = n || tA || tI || tT || !ef.A.didHavePermission(eF.iL.AUDIO))
        : e.context === eH.x.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eH.x.DEFAULT && b.A.updateNativeMute();
}
function nu(e) {
    e !== t_ && (null != s && to.setGoLiveSource(null, t_), (t_ = e));
}
function nc() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ty,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
        n = s;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, eN.isWindows)() && C.c1(n.desktopSource.soundshareId),
            to.setGoLiveSource(null, t_)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            to.setGoLiveSource(null, t_),
        ty || e)
    ) {
        let t = ns().videoDeviceId;
        ty && t === eH.dx && tN === eH.dx && tv !== eH.qe ? (t = tv) : (tN = t),
            (tv = (ty = e) ? nD(tE, t) : eH.qe),
            to.setVideoInputDevice(tv);
    }
    if (((s = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = nt("MediaEngineStore go live"),
                i = ns().videoHook,
                s = ng(),
                a = s ? (nA() ? eG.zl : eG.eg) : 0,
                o = (0, eN.isWindows)() && (0, ea.b)("updateVideo").enabled,
                l = !1;
            (0, eN.isWindows)() &&
                a >= eG.zl &&
                (l =
                    !0 === t3
                        ? eu.q.getConfig({ location: "updateVideo" }).enabled
                        : el.d.getConfig({ location: "updateVideo" }).enabled),
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
                            allowScreenCaptureKit: nI(),
                            videoHookStaleFrameTimeoutMs: eQ,
                            graphicsCaptureStaleFrameTimeoutMs: eJ,
                            hdrCaptureMode: n,
                            enableGlobalFramePoolLock: (0, $.H)({ location: "updateVideo" }).enabled,
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
        case eH.CO.CPU_OVERUSE:
            return x.B6.NoiseCancellerCpuOveruse;
        case eH.CO.FAILED:
            return x.B6.NoiseCancellerFailed;
        case eH.CO.VAD_CPU_OVERUSE:
            return x.B6.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function n_() {
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
                v.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
            });
}
function nf(e) {
    let t = (0, G.F)({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function np(e, t) {
    e.setAutomaticGainControl(nf(t));
}
function nh(e, t) {
    let n = (0, eh.A)(t, r.getSystemMicrophoneMode(), { location: "setNoiseCancellation" });
    n !== t && eY.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: i } = (0, G.F)({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(i);
    let { noiseCancellationAfterProcessing: s, vadAfterWebrtc: a } = (0, J.$)({ location: "setNoiseCancellation" });
    e.setNoiseCancellationAfterProcessing(s), e.setVADAfterWebrtc(a);
}
function nm(e) {
    let t = ns(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eL.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eL.A.hasNoiseSuppression(n) || t.noiseSuppression),
        np(e, eL.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        nh(e, t.noiseCancellation),
        e.setVoiceFilterId(tV),
        (0, eN.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function nE() {
    tg.start(e3, () => {
        eY.error("Device enumeration timed out"), eS.default.track(eU.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
    }),
        to.on(T.bg.Connection, (e) => {
            na(e), nl(e), nm(e);
            let t = ns();
            e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
                e.setQoS(t.qos),
                (0, eN.isWindows)()
                    ? (e.setExperimentFlag(eH.fd.H265_HARDWARE_ONLY, !0),
                      nr().then((t) => {
                          e.setExperimentFlag(eH.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                      }))
                    : (0, eN.isMac)() && e.setExperimentFlag(eH.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                (0, eN.isWindows)() &&
                    (0, Z.r)({ location: "setupMediaEngine" }).enabled &&
                    e.setExperimentFlag(eH.fd.USE_H264_MF_DECODER, !0),
                (0, eN.isLinux)() &&
                    (0, ee.b)({ location: "setupMediaEngine" }).enabled &&
                    e.setExperimentFlag(eH.fd.USE_LIBOPENH264_DECODER, !0);
            let n = ex.A.getGuildId(),
                {
                    muteBeforeProcessing: i,
                    pttBeforeProcessing: a,
                    skipEncode: o,
                } = (null != n ? K.A : W.A).getCurrentConfig(
                    { location: "setupMediaEngine", guildId: n ?? void 0 },
                    { autoTrackExposure: !0 },
                );
            i && e.setExperimentFlag(eH.fd.MUTE_BEFORE_PROCESSING, !0),
                a && e.setExperimentFlag(eH.fd.PTT_BEFORE_PROCESSING, !0),
                o && e.setExperimentFlag(eH.fd.SKIP_ENCODE, !0),
                (0, et.J)({ location: "setupMediaEngine" }).enabled &&
                    e.setExperimentFlag(eH.fd.LOW_LATENCY_RATE_CONTROL, !0);
            let l = !1,
                u = !0;
            if (
                (e.setExperimentFlag(eH.fd.RESET_DECODER_ON_ERRORS, !0),
                l && e.setExperimentFlag(eH.fd.SOFTWARE_FALLBACK_ON_ERRORS, !0),
                u && e.setExperimentFlag(eH.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0),
                e.context === eH.x.STREAM)
            ) {
                let t = nw(tm);
                e.setSoundshareDiscardRearChannels(t);
                let { simulcastEnabled: n, lqStreamBitrate: r } = X.A.getConfig();
                e.configureGoLiveSimulcast(n, r);
            }
            if ((0, eN.isWindows)())
                e.setExperimentFlag(eH.fd.SIGNAL_AV1, !0), e.setExperimentFlag(eH.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            else if ((0, eN.isMac)()) {
                if ((e.setExperimentFlag(eH.fd.SIGNAL_AV1_DECODE, !0), ti())) {
                    let { enabled: t } = (0, V.t)("MediaEngineStore");
                    t && e.setExperimentFlag(eH.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                }
            } else if ((0, eN.isLinux)()) e.setExperimentFlag(eH.fd.SIGNAL_AV1_DECODE, !0);
            else if ((0, eN.isIOS)() && tt()) {
                let { enabled: t } = (0, F.$)("MediaEngineStore");
                t &&
                    (e.setExperimentFlag(eH.fd.SIGNAL_AV1_DECODE, !0),
                    e.setExperimentFlag(eH.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
            }
            if ((0, eN.isWeb)()) {
                let { enabled: t } = (0, z.O)("MediaEngineStore");
                e.setExperimentFlag(eH.fd.BROWSER_HEVC, t);
            }
            if (
                ((0, eN.isWindows)() &&
                    t2?.startsWith("AMD") &&
                    (0, ec.F)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eH.fd.WMF_GPU_ENCODE, !0),
                (0, eN.isWindows)() &&
                    t2?.startsWith("Intel") &&
                    (0, ed.J)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eH.fd.WMF_GPU_ENCODE, !0),
                (0, eN.isWindows)() &&
                    t2?.startsWith("Qualcomm") &&
                    (0, ec.F)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eH.fd.WMF_GPU_ENCODE, !0),
                to.setHasFullbandPerformance((0, w.A)()),
                e.setRemoteAudioHistory(1e3),
                (0, O.A)(r))
            ) {
                let { enableViewerClipping: t } = eo.A.getCurrentConfig(
                    { location: "f627ab_15" },
                    { autoTrackExposure: !1 },
                );
                e.setViewerSideClip(t), e.setClipsKeyFrameInterval(eH.X1);
            }
            for (let n of ((t = ns(e.context)), e.setPostponeDecodeLevel(e1), Object.keys(t.localMutes)))
                n !== eO.default.getId() && e.setLocalMute(n, t.localMutes[n]);
            for (let n of Object.keys(t.localVolumes))
                n !== eO.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
            for (let n of Object.keys(t.localPans)) {
                let r = t.localPans[n];
                e.setLocalPan(n, r.left, r.right);
            }
            for (let n of Object.keys(t.disabledLocalVideos)) e.setLocalVideoDisabled(n, t.disabledLocalVideos[n]);
            e.on(T.yq.Speaking, (t, n, r, i) => {
                v.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: i });
            }),
                e.context === eH.x.DEFAULT &&
                    ((tb = !1),
                    (tR = !1),
                    e.on(T.yq.SpeakingWhileMuted, () => {
                        (tb = !0),
                            (tR = !0),
                            r.emitChange(),
                            tO.stop(),
                            tO.start(e2, () => {
                                (tR = !1), r.emitChange();
                            });
                    })),
                e.on(T.yq.DesktopSourceEnd, (t, n) => {
                    v.h.dispatch({
                        type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                        settings: { context: e.context },
                        endReason: t,
                        errorCode: n,
                    });
                }),
                e.on(T.yq.InteractionRequired, (e) => {
                    v.h.dispatch({ type: "MEDIA_ENGINE_INTERACTION_REQUIRED", required: e });
                }),
                e.on(T.yq.VideoHookInitialize, (e, t, n, r, i, a) => {
                    s?.desktopSource != null &&
                        eS.default.track(eU.HAw.VIDEOHOOK_INITIALIZED, {
                            backend: e,
                            format: t,
                            framebuffer_format: n,
                            sample_count: r,
                            success: i,
                            reinitialization: a,
                            ...(0, U.A)(s?.desktopSource),
                        });
                }),
                e.on(T.yq.NoiseCancellationError, (e) => {
                    eY.warn(`noisecancellererror event: ${e}`),
                        (0, x.QW)({ type: x.iy.NOISE_CANCELLER_ERROR, underlyingError: nd(e) }),
                        (tW = !0),
                        eS.default.track(eU.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        v.h.dispatch({ type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: !0 }),
                        v.h.dispatch({ type: "AUDIO_SET_NOISE_CANCELLATION", enabled: !1 }),
                        v.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e });
                }),
                e.on(T.yq.VoiceActivityDetectorError, (e) => {
                    eY.warn(`voiceactivitydetectorerror event: ${e}`),
                        (0, x.QW)({ type: x.iy.NOISE_CANCELLER_ERROR, underlyingError: nd(e) }),
                        eS.default.track(eU.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        v.h.dispatch({
                            type: "AUDIO_SET_MODE",
                            context: eH.x.DEFAULT,
                            mode: eU.TBI.VOICE_ACTIVITY,
                            options: { ...ns(eH.x.DEFAULT).modeOptions, vadUseKrisp: !1 },
                        }),
                        v.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e });
                }),
                e.on(T.yq.SdpError, (e, t, n, r) => {
                    eS.default.track(eU.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: r });
                }),
                e.on(T.yq.VideoState, (t) => {
                    v.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                }),
                e.setBitRate(eD.A.bitrate),
                e.applyVideoQualityMode(ek.A.mode),
                (0, eN.isWindows)() &&
                    to.supports(eH.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                    to.setAsyncVideoInputDeviceInit((0, j.v)("setupMediaEngine").enabled);
        }),
        to.on(T.bg.DeviceChange, (e, t, n) => {
            tg.stop(),
                v.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
        }),
        to.on(T.bg.VolumeChange, (e, t) => {
            v.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
        }),
        to.on(T.bg.DesktopSourceEnd, (e, t) => {
            v.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
        }),
        to.on(T.bg.AudioPermission, (e) => {
            (tX = !0), v.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
        }),
        to.on(T.bg.VideoPermission, (e) => {
            v.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
        }),
        to.on(T.bg.WatchdogTimeout, async () => {
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
        to.on(T.bg.VideoInputInitialized, (e) => {
            eS.default.track(eU.HAw.VIDEO_INPUT_INITIALIZED, {
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
        to.on(T.bg.AudioInputInitialized, (e) => {
            eS.default.track(eU.HAw.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * ev.A.Millis.SECOND),
                rtc_connection_id: ex.A.getRTCConnectionId(),
            });
        }),
        to.on(T.bg.ClipsRecordingRestartNeeded, () => {
            v.h.dispatch({ type: "CLIPS_RESTART" });
        }),
        to.on(T.bg.ClipsInitFailure, (e, t) => {
            v.h.wait(() => {
                v.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t });
            });
        }),
        to.on(T.bg.ClipsRecordingEnded, (e, t) => {
            a?.desktopSource?.id === e && (null != t && s?.desktopSource?.soundshareId !== t && C.c1(t), (a = null));
        }),
        to.on(T.bg.NativeScreenSharePickerUpdate, (e, t) => {
            v.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
        }),
        to.on(T.bg.NativeScreenSharePickerCancel, (e) => {
            v.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
        }),
        to.on(T.bg.NativeScreenSharePickerError, (e) => {
            v.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
        }),
        to.on(T.bg.AudioDeviceModuleError, (e, t, n) => {
            eS.default.track(eU.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
        }),
        to.on(T.bg.VideoCodecError, (e) => {
            let t = "encode" === e.mode ? x.iy.VIDEO_ENCODE_ERROR : x.iy.VIDEO_DECODE_ERROR,
                n = { videoCodec: e.codecStandard, errorMessage: e.message };
            (0, x.QW)(
                t === x.iy.VIDEO_ENCODE_ERROR
                    ? { type: t, ...n, videoEncoder: e.implName }
                    : { type: t, ...n, videoDecoder: e.implName },
            );
        }),
        to.on(T.bg.ConnectionStats, (e) => {
            v.h.dispatch({
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
        to.on(T.bg.VoiceQueueMetrics, (e) => {
            let t = ii(e);
            null !== t && eS.default.track(eU.HAw.VOICE_QUEUE_METRICS, t);
        }),
        to.setOnVideoContainerResized((e, t, n) => {
            v.h.wait(() =>
                v.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
            );
        }),
        tr(),
        rl(),
        rc(),
        to.supports(eH.O5.ASYNC_CLIPS_SOURCE_DEINIT) &&
            to.setAsyncClipsSourceDeinit((0, Y.V)("setupMediaEngine").enabled),
        o.reset(),
        (0, eM.w)().then((e) => {
            null != e && ((t2 = e.gpu_brand), (t3 = e.has_intel_hybrid_igpu));
        }),
        to.on(T.bg.SystemMicrophoneModeChange, (e) => {
            (f = e), to.eachConnection(nm);
        });
}
function ng() {
    return (0, eN.isWindows)() && A().satisfies(N.A?.os.release, eG.yg);
}
function nA() {
    return (0, eN.isWindows)() && A().satisfies(N.A?.os.release, eG.fG);
}
function nI() {
    return (0, eN.isMac)() && to.supports(eH.O5.SCREEN_CAPTURE_KIT) && A().satisfies(N.A?.os.release, eG.e);
}
function nT() {
    return (
        (0, eN.isWindows)() &&
        to.supports(eH.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        to.supports(eH.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nS() {
    return to.supports(eH.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function ny() {
    let e = S.w.get("audio");
    null != e && (S.w.set(eW, { [eH.x.DEFAULT]: e }), S.w.remove("audio")),
        (tl = S.w.get(eW) ?? {}),
        E().each(tl, (e) => {
            E().defaultsDeep(e, ts()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, eR.OH)(e.modeOptions.shortcut)),
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
                    ? e.ncUseKrispjsSettingVersion !== e$ &&
                      ((e.ncUseKrispjsSettingVersion = e$), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== ez &&
                      ((e.ncUseKrispSettingVersion = ez), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
        }),
        nC();
}
function nv(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eH.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = ni(t);
    return Object.assign(r, e), !__OVERLAY__ && n && S.w.set(eW, tl), r;
}
function nN() {
    S.w.remove(eW), location.reload();
}
function nC() {
    let e = ns();
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
function nb() {
    tc || to.enable().then(() => v.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
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
function nD(e, t) {
    let n = e[t] ?? e[eH.dx] ?? E()(e).values().first();
    return null != n ? n.id : t;
}
function nL(e) {
    let t = th;
    if (((th = nO(e, ej.intl.string(ej.t["/QIjDA"]))), !E().isEqual(th, t))) {
        let e = ns(),
            t = nD(th, e.inputDeviceId);
        to.setAudioInputDevice(t), to.eachConnection(nm);
    }
}
function nw(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nx(e) {
    to.eachConnection((t) => {
        t.context === eH.x.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function nM(e) {
    let t = tm;
    if (((tm = nO(e, ej.intl.string(ej.t.xlUg0v))), !E().isEqual(tm, t))) {
        let e = ns(),
            n = nD(tm, e.outputDeviceId);
        to.setAudioOutputDevice(n);
        let r = nw(t),
            i = nw(tm);
        r !== i && nx(i);
    }
}
function nP(e) {
    tL = e.length > 0;
    let t = tE;
    if (((tE = nO(e, ej.intl.string(ej.t.WKWARY))), ty && !E().isEqual(tE, t))) {
        let e = void 0 !== tE[tv],
            n = tv === eH.dx && t[eH.dx]?.disabled;
        nc(e || n);
    }
}
function nk() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = eg.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let r = n === eV.W.USER ? eH.x.DEFAULT : eH.x.STREAM,
            i = r === eH.x.STREAM ? eH.Cn : eH.Hz,
            s = t[n] ?? {},
            { localMutes: a, localVolumes: o } = ns(r);
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
        nv({ localMutes: a, localVolumes: o }, r);
    }
}
function nU(e) {
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
function nG(e, t) {
    (0, eN.isWindows)() &&
        e > 1 &&
        C.GH(e, { soundshare_session: t }).then((t) => {
            null == t ||
                k.Ay.shouldContinueWithoutElevatedProcessForPID(e) ||
                v.h.wait(() => {
                    v.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: t });
                });
        });
}
function nF(e) {
    (i = e.sessionId), (tA = !1), (tS = !1);
    let t = ns();
    if (
        (nT() && (nS() ? rB(eH.rB.AUTOMATIC) : t.automaticAudioSubsystem && rH()),
        to.supports(eH.O5.OFFLOAD_ADM_CONTROLS))
    ) {
        let e = !1;
        (0, eN.isDesktop)()
            ? (e = (0, B.i)({ location: "handleConnectionOpen" }).enabled)
            : ((0, eN.isIOS)() || (0, eN.isAndroid)()) && (e = (0, H.Y)({ location: "handleConnectionOpen" }).enabled),
            to.setOffloadAdmControls(e);
    }
    (0, eI.Lb)({ location: "MediaEngineStore", autoTrackExposure: !1 }) &&
        null !== t.mostRecentlyRequestedVoiceFilter &&
        (0, eN.isDesktop)() &&
        (eT.A.getLastInitAttemptMayHaveCrashed()
            ? (v.h.dispatch({ type: "AUDIO_SET_SELF_MUTE", mute: !0, context: eH.x.DEFAULT, playSoundEffect: !0 }),
              nv({ mostRecentlyRequestedVoiceFilter: null }))
            : n(342887).md()),
        nk();
}
function nV(e) {
    let { mediaEngineState: t } = e;
    (tl = t.settingsByContext),
        (th = t.inputDevices),
        (tm = t.outputDevices),
        (t1 = t.appSupported),
        (tU = t.krispModuleLoaded),
        (c = t.krispVersion),
        (t_ = t.goLiveContext);
}
function nB() {
    i = null;
}
function nH() {
    if ((0, eN.isWeb)()) {
        let e = er.f1.getCurrentConfig({ location: "MediaEngineStore handlePostConnectionOpen" });
        e.loadWasmModule && e.preload && r.startDavePreload();
    }
    return !1;
}
function nj(e) {
    switch (e.state) {
        case eU.S7L.CONNECTING:
            nb();
            break;
        case eU.S7L.RTC_CONNECTING:
            (tx = !1), (l = void 0), (u = void 0), (tw = !1), (t4 = !1), t5.stop(), tM.stop(), o.reset();
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
            (tA = t.mute || t.suppress), (tS = t.deaf), to.eachConnection(nl);
            let e = null != t.guildId && null != t.channelId && null != tY && tY !== t.channelId,
                n = !tP && null == t.channelId;
            return nc(!e && !n && ty), (tY = t.channelId), !0;
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
        { mute: r, deaf: i } = ns(t);
    if (t === eH.x.DEFAULT && (ef.A.requestPermission(eF.iL.AUDIO), tT)) return !1;
    (r = !i && !r) || (i = !1), n || (tC = !0), nv({ mute: r, deaf: i }, t), to.eachConnection(nl);
}
function nz(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    nv({ mute: n }, t), r || (tC = !0), to.eachConnection(nl);
}
function n$(e) {
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
    nv({ deaf: !ns(t).deaf }, t), to.eachConnection(nl);
}
function nX(e) {
    let { context: t, userId: n } = e;
    if (n === eO.default.getId()) return;
    let { localMutes: r } = ns(t);
    r[n] ? delete r[n] : (r[n] = !0),
        nv({ localMutes: r }, t),
        to.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nZ(e) {
    let { context: t, userId: n, videoToggleState: r, persist: i, isAutomatic: s } = e;
    h()(!(i && s), "These are not allowed to both be true.");
    let a = r === eU.bb8.DISABLED,
        { disabledLocalVideos: o } = ns(t),
        l = o[n] ?? !1,
        u = tQ.has(n),
        c = r === eU.bb8.AUTO_ENABLED || r === eU.bb8.MANUAL_ENABLED;
    eY.info(`disableVideo=${a} currentlyDisabled=${l} currentlyAutoDisabled=${u}, isVideoShown=${c}`),
        h()(!(u && !l), "If you are auto-disabled, then you are also disabled.");
    let d = a !== l,
        _ = t === eH.x.DEFAULT,
        f = s && d && _,
        p = i && d && _;
    eY.info(`changed=${d} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${f} isManualToggleByUser=${p}`);
    let { videoToggleStateMap: m } = ns(t);
    if (
        (m[n] === eU.bb8.AUTO_PROBING &&
            r === eU.bb8.AUTO_ENABLED &&
            (0, e_.A)(n, a ? eH.Al.AUTO_DISABLE : eH.Al.AUTO_ENABLE, c),
        (m[n] = r),
        nv({ videoToggleStateMap: m }, t, i),
        r === eU.bb8.AUTO_PROBING
            ? ex.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
            : ex.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
        tJ ||
            (eY.info(`isAutoDisableAllowed=${tJ} - disabling VideoHealthManager`),
            ex.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
        f)
    ) {
        if ((!a && !u) || (a && !tJ)) return;
        (0, e_.A)(n, a ? eH.Al.AUTO_DISABLE : eH.Al.AUTO_ENABLE, c), a ? tQ.add(n) : tQ.delete(n);
    } else
        p &&
            (u && !a
                ? (eY.info("disallowing auto-disable for this session because of manual override by user"),
                  (tJ = !1),
                  ex.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                  (0, e_.A)(n, eH.Al.MANUAL_REENABLE, c))
                : (0, e_.A)(n, a ? eH.Al.MANUAL_DISABLE : eH.Al.MANUAL_ENABLE, c));
    _ && !a && tQ.delete(n),
        a ? (o[n] = !0) : delete o[n],
        nv({ disabledLocalVideos: o }, t, i),
        to.eachConnection((e) => e.setLocalVideoDisabled(n, o[n] ?? !1), t);
}
function nQ() {
    if (0 === tQ.size) return;
    let e = eH.x.DEFAULT,
        { disabledLocalVideos: t } = ns(e);
    tQ.forEach((n) => {
        h()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            to.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tQ.clear(),
        nv({ disabledLocalVideos: t }, e, !1);
}
function nJ() {
    let e = eH.x.DEFAULT,
        { videoToggleStateMap: t } = ns(e);
    for (let [e, n] of Object.entries(t)) n === eU.bb8.AUTO_PROBING && delete t[e];
    nv({ videoToggleStateMap: t }, e, !1);
}
function n0(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === eO.default.getId()) return;
    let i = t === eH.x.STREAM ? eH.Cn : eH.Hz,
        { localVolumes: s } = ns(t);
    r === i ? delete s[n] : (s[n] = r), nv({ localVolumes: s }, t), to.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function n1(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: s } = ns(t);
    (s[n] = { left: r, right: i }), nv({ localPans: s }, t), to.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function n2(e) {
    let { context: t, mode: n, options: r } = e;
    nv({ mode: n, modeOptions: { ...r, updatedAt: Date.now() } }, t), to.eachConnection(na);
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
    (t = nD(th, t)),
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
    nv({ videoDeviceId: (t = nD(tE, t)) }), nc();
}
function n8(e) {
    let { inputProfile: t } = e;
    nv({ activeInputProfile: t });
    let n = ns();
    to.eachConnection((e) => {
        na(e), nm(e);
    }),
        to.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        ru();
}
function n9(e) {
    return td !== e.required && ((td = e.required), e.required || to.interact(), !0);
}
function re(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    nL(t), nM(n), nP(r);
}
function rt(e) {
    let { inputVolume: t, outputVolume: n } = e;
    nv({ inputVolume: no(t), outputVolume: n });
}
function rn(e) {
    let t = ns(),
        n = to.getAudioSubsystem(),
        i = to.getAudioLayer(),
        s = nD(th, t.inputDeviceId),
        a = th[s]?.name,
        o = (0, eh.A)(t.noiseCancellation, r.getSystemMicrophoneMode(), { location: "trackVoiceProcessing" });
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
function rr(e) {
    let t = nv({ echoCancellation: e.enabled });
    to.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), ru(), rn(e.location);
}
function ri(e) {
    ra(e.enabled);
}
function rs(e) {
    let t = nv({ sidechainCompressionStrength: e.strength });
    to.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function ra(e) {
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
    let e = ns(),
        t = t0.size > 0,
        n = e.inputDeviceId,
        r = eL.A.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        s = eL.A.hasNoiseSuppression(n) || e.noiseSuppression,
        a = nf(eL.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        o = e.noiseCancellation,
        l = null !== tV,
        u = t0.has("voice_filter") && 1 === t0.size;
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
async function rc() {
    if (!to.supports(eH.O5.VAAPI)) return;
    let e = 4098;
    if (window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let t = await window.DiscordNative.processUtils.getSystemInfo();
    (t.electronGPUInfo?.gpuDevice ?? []).some((t) => t.vendorId === e) &&
        ((t9 = !0), (t8 = to.supports(eH.O5.GAMESCOPE_CAPTURE)));
}
function rd(e) {
    let t = nv({ noiseSuppression: e.enabled });
    to.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), ru(), rn(e.location);
}
function r_(e) {
    let t = nv({ automaticGainControl: e.enabled });
    to.eachConnection((e) => np(e, t.automaticGainControl)), ru(), rn(e.location);
}
function rf(e) {
    let t = nv({ noiseCancellation: e.enabled });
    to.eachConnection((e) => nh(e, t.noiseCancellation)), ru(), rn(e.location);
}
function rp(e) {
    ep.A.setKrispModelOverride(e.model), (_ = e.model), ru();
}
function rh(e) {
    (0, eN.isWeb)() || ((tF = e.enabled), to.setNoiseCancellationEnableStats?.(e.enabled));
}
function rm(e) {
    nv({ silenceWarning: e.enabled });
}
function rE(e) {
    to.setDebugLogging(e.enabled);
}
function rg(e) {
    let { level: t } = e;
    (d = t), ep.A.setKrispSuppressionLevel(t);
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
function rS(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = nv({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r });
    to.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function ry(e) {
    let { enabled: t } = e;
    nv({ qos: t }), to.eachConnection((e) => e.setQoS(t));
}
function rv() {
    nN();
}
function rN(e) {
    let { osVolume: t, osMuted: n } = e;
    (u = t), (l = n);
}
function rC(e) {
    let { inputDetected: t } = e;
    if (null == t) return !1;
    if (((tx = !0 !== tw && !t), t)) (tw = !0), (t4 = !1), t5.stop(), tM.stop();
    else if (ns().mode === eU.TBI.VOICE_ACTIVITY && tw) {
        let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = ei.A.getConfig({
            location: "MediaEngineStore.handleInputDetected",
        });
        e &&
            t5.start(e6, () => {
                eS.default.track(eU.HAw.HARDWARE_MUTE_GUESSED, {
                    input_device_name: th[nD(th, ns().inputDeviceId)]?.name,
                    rtc_connection_id: ex.A.getRTCConnectionId(),
                }),
                    (t4 = !0),
                    r.emitChange();
            }),
            null != t &&
                tM.start(t * ev.A.Millis.MINUTE, () => {
                    (tw = !1), o.reset();
                });
    }
}
function rb(e) {
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
            !r && ty && nc(!1);
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
        await eb.Ay.ensureModule("discord_krisp");
        let e = eb.Ay.requireModule("discord_krisp");
        (tU = !0),
            (c = e.getSdkVersion?.()),
            (d = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (tG = e), r.emitChange();
            }),
            r.emitChange();
    } catch (t) {
        eY.warn(`Failed to load Krisp module: ${t.message}`), eC.A.captureException(t);
        let e = eH.CO.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eH.CO.INITIALIZED : n;
        }
        eS.default.track(eU.HAw.VOICE_PROCESSING, { noise_canceller_error: e }), nv({ noiseCancellation: !1 });
    } finally {
        tk = !1;
    }
}
function rL() {
    return (0, eN.isWindows)() || (0, eN.isLinux)() || (0, eN.isMac)();
}
function rw() {
    !rL() || __OVERLAY__ || tk || tU
        ? (0, eN.isWeb)() && to.supports(eH.O5.NOISE_CANCELLATION)
            ? ((tU = !0), r.emitChange())
            : (0, eN.isWeb)() && nv({ noiseCancellation: !1 })
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
            s = i[i.length - 1].replace(".bz2", "");
        try {
            let t = await eb.Ay.downloadOpenH264(e7, s, e8, (e) => {
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
            let e = await eb.Ay.cleanupUnusedOpenH264Files([s]);
            eY.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        eY.error("OpenH264 download failed", e);
    }
}
function rM() {
    (0, eN.isLinux)() && rx();
}
function rP(e) {
    let { enabled: t } = e;
    eS.default.track(eU.HAw.VOICE_FILTER_PLAYBACK_TOGGLED, { active_voice_filter_id: tV ?? null, enabled: t }),
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
    (tH = tV), (tj = tB), (tV = t), (tB = null === t ? null : Date.now());
}
function rF(e) {
    let t = e.bypassEnabled;
    nv({ bypassSystemInputProcessing: t }), to.setAudioInputBypassSystemProcessing(t), rn(e.location);
}
function rV(e) {
    rB(e.subsystem);
}
function rB(e) {
    e === eH.rB.AUTOMATIC
        ? (nv({ automaticAudioSubsystem: !0 }), rH())
        : (nv({ automaticAudioSubsystem: !1 }), to.setAudioSubsystem(e));
}
function rH() {
    to.queueAudioSubsystem(eH.rB.EXPERIMENTAL);
}
function rj(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && nc(i, null), null != t || null == n)) {
        tP = !1;
        return;
    }
    if (tP) return;
    tP = !0;
    let s = ns();
    (s.mute || s.deaf) && (nv({ deaf: !1, mute: !1 }), to.eachConnection(nl));
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
function rz(e) {
    (tc = e.enabled), e.unmute && nv({ mute: !1, deaf: !1 }), to.eachConnection(nl);
}
function r$(e) {
    let { enabled: t } = e;
    ef.A.requestPermission(eF.iL.CAMERA), nc(t);
}
function rq(e) {
    let { sourceId: t, applicationName: n, quality: i } = e;
    if (!(0, D.Ao)() || null == N.A) return !1;
    let s = null,
        o = null,
        l = ey.A.getPidFromDesktopSource(t);
    ({ soundshareId: s, soundshareSession: o } = nU(l));
    let u = { desktopSource: { id: t, sourcePid: l, soundshareId: s, soundshareSession: o }, quality: i };
    null != a &&
        (to.setClipsSource(null),
        (0, eN.isWindows)() && null != a.desktopSource.soundshareId && C.c1(a.desktopSource.soundshareId)),
        null != s && nG(s, o),
        (a = u);
    let c = nt("MediaEngineStore clips"),
        d = ns().videoHook;
    to.setClipsSource({
        desktopDescription: {
            id: a.desktopSource.id,
            soundshareId: a.desktopSource.soundshareId,
            useVideoHook: d,
            useGraphicsCapture: ng(),
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
            (({ soundshareId: e, soundshareSession: n } = nU(o)), null != e && nG(e, n)),
            nu(s),
            nc(s === eH.x.STREAM && ty, {
                desktopSource: { id: r, sourcePid: o, soundshareId: e, soundshareSession: n },
                quality: { resolution: a.resolution, frameRate: a.frameRate },
            });
    } else if (t?.cameraSettings != null) {
        let e = t.context ?? eH.x.DEFAULT,
            { videoDeviceGuid: n, audioDeviceGuid: r } = t.cameraSettings,
            i = e === eH.x.STREAM && ty,
            s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
        nc(i, {
            cameraSource: { videoDeviceGuid: n, audioDeviceGuid: r },
            quality: { resolution: s.resolution, frameRate: s.frameRate },
        });
    } else nc(ty, null);
}
function rQ(e) {
    let { section: t } = e;
    return t === eU.nc_.VOICE && nb(), !1;
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
    (tl = Object.values(eH.x).reduce((e, n) => {
        let r = n,
            i = ts();
        return (e[r] = E().merge(i, t[r])), e;
    }, {})),
        S.w.set(eW, tl),
        nC();
}
function r2(e) {
    let { state: t } = e,
        n = P.A.isEnabled();
    if (t === eU.g6G.BACKGROUND && ty && !n) (tD = !0), nc(!1);
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
    if ((!ty && null == s) || null != ex.A.getRTCConnectionId()) return !1;
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
    if ((0, eN.isDesktop)() && eN.isPlatformEmbedded && !ne) {
        ne = !0;
        let e = async () => {
            let t = await new Promise((e) => {
                eb.Ay.pollQueueMetrics((t) => {
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
class ir extends I.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        nE(),
            ny(),
            rw(),
            rM(),
            nJ(),
            it(),
            (0, eN.isWindows)() && eN.isPlatformEmbedded && n_(),
            (t1 = {
                [eH.O5.VIDEO]: to.supports(eH.O5.VIDEO),
                [eH.O5.DESKTOP_CAPTURE]: to.supports(eH.O5.DESKTOP_CAPTURE),
                [eH.O5.HYBRID_VIDEO]: to.supports(eH.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eO.default, eD.A, eL.A, ew.A, R.A, M.A, ex.A, k.Ay, em.A, eg.A, eP.default, ek.A, eT.A);
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
        return to.supports(eH.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return rO();
    }
    isNoiseCancellationError() {
        return tW;
    }
    isAutomaticGainControlSupported() {
        return to.supports(eH.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nS() && (to.supports(eH.O5.LEGACY_AUDIO_SUBSYSTEM) || to.supports(eH.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
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
        return ew.A.getChannel(tY)?.type !== eU.rbe.GUILD_STAGE_VOICE && e4 && X.A.simulcastEnabled();
    }
    getAecDump() {
        return ns().aecDumpEnabled;
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
            ns(e).mute ||
            !ef.A.didHavePermission(eF.iL.AUDIO) ||
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
            t = t4 && "voice_isolation" !== this.getSystemMicrophoneMode() && ns(e).mode === eU.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (eL.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return t6;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eH.x.DEFAULT;
        return !this.isSupported() || ns(e).deaf;
    }
    isVideoEnabled() {
        return ty && tL;
    }
    isVideoAvailable() {
        return Object.values(tE).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
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
        return e !== eO.default.getId() && (ns(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return to.supports(eH.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eH.x.DEFAULT;
        return ns(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eH.x.DEFAULT;
        return ns(t).videoToggleStateMap[e] ?? eU.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eH.x.DEFAULT;
        return t === eH.x.DEFAULT && tQ.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eH.x.DEFAULT;
        return e === eH.x.DEFAULT && tQ.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tK;
    }
    isNativeAudioPermissionReady() {
        return tX;
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
            n = ns(t).localPans[e];
        return null != n ? n : eZ;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eH.x.DEFAULT,
            n = t === eH.x.STREAM ? eH.Cn : eH.Hz,
            r = ns(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return ns().inputVolume;
    }
    getOutputVolume() {
        return ns().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eH.x.DEFAULT;
        return ns(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eH.x.DEFAULT;
        return ns(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return tV;
    }
    getActiveVoiceFilterAppliedAt() {
        return tB;
    }
    getPreviousVoiceFilter() {
        return tH;
    }
    getPreviousVoiceFilterAppliedAt() {
        return tj;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return ns().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return ns().voiceFilterPlaybackEnabled;
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
        return nD(th, ns().inputDeviceId);
    }
    getOutputDeviceId() {
        return nD(tm, ns().outputDeviceId);
    }
    getVideoDeviceId() {
        return nD(tE, ns().videoDeviceId);
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
        let e = ns();
        return eL.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return to.supports(eH.O5.SIDECHAIN_COMPRESSION) && ns().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return ns().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return ns().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== t$ && t$;
    }
    getLoopback() {
        return t0.size > 0;
    }
    getLoopbackReasons() {
        return t0;
    }
    getNoiseSuppression() {
        let e = ns();
        return eL.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = ns();
        return eL.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return ns().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return ns().noiseCancellation;
    }
    getHardwareEncoding() {
        return e4;
    }
    getEnableSilenceWarning() {
        return ns().silenceWarning;
    }
    getDebugLogging() {
        return to.getDebugLogging();
    }
    getQoS() {
        return ns().qos;
    }
    getAttenuation() {
        return ns().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return ns().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return ns().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return nT() && ns().automaticAudioSubsystem ? eH.rB.AUTOMATIC : to.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return to.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return ns().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eB.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eH.x.DEFAULT;
        return ns(e);
    }
    getState() {
        return {
            settingsByContext: tl,
            inputDevices: th,
            outputDevices: tm,
            appSupported: t1,
            krispModuleLoaded: tU,
            krispVersion: c,
            krispSuppressionLevel: d,
            goLiveSource: s,
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
        return eN.isPlatformEmbedded || this.getMode() !== eU.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        to.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return td;
    }
    getVideoHook() {
        return ns().videoHook;
    }
    supportsVideoHook() {
        return to.supports(eH.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = ns().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return to.supports(eH.O5.EXPERIMENTAL_SOUNDSHARE) && A().satisfies(N.A?.os.release, eG.$x);
    }
    supportsHookSoundshare() {
        return (0, eN.isWindows)() && to.supports(eH.O5.SOUNDSHARE) && A().satisfies(N.A?.os.release, eG.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = ns().useSystemScreensharePicker,
            n = (0, eN.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return to.supports(eH.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return t9;
    }
    getUseGamescopeCapture() {
        return t8;
    }
    getEverSpeakingWhileMuted() {
        return tb;
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
        return ns().modeOptions.vadKrispActivationThreshold ?? eX;
    }
    hasActiveCallKitCall() {
        return t7;
    }
    setHasActiveCallKitCall(e) {
        t7 = e;
    }
    supportsScreenSoundshare() {
        return (0, eN.isMac)()
            ? to.supports(eH.O5.SOUNDSHARE) && A().satisfies(N.A?.os.release, eG.P$) && nI()
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
        let e = { fetchDave: !1 };
        return (
            (0, eN.isWeb)() &&
                (e.fetchDave = er.f1.getCurrentConfig({
                    location: "MediaEngineStore fetchAsyncResources",
                }).loadWasmModule),
            to.fetchAsyncResources(e)
        );
    }
    startDavePreload() {
        if (!tz && ((tz = !0), (0, eN.isWeb)())) {
            let e = { fetchDave: !0 };
            to.fetchAsyncResources(e).catch((e) => {
                eY.warn("DAVE preload failed:", e), eC.A.captureException(e);
            });
        }
    }
    getSupportedSecureFramesProtocolVersion() {
        if ((0, eN.isWeb)()) {
            let { useWasmModule: e } = er.f1.getCurrentConfig({
                location: "MediaEngineStore getSupportedSecureFramesProtocolVersion",
            });
            if (!e) return 0;
        }
        let e = to.getSupportedSecureFramesProtocolVersion();
        114 === e && (e = 1);
        let t = er.ex.getCurrentConfig({ location: "MediaEngineStore" }),
            n = er.a.getConfig({ location: "MediaEngineStore" });
        return (t.canSupportDaveProtocol || (n.allowOptIn && em.A.getPersistentCodesEnabled())) &&
            e >= t.protocolVersionFloor
            ? e
            : 0;
    }
    hasClipsSource() {
        return null != a;
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
(r = new ir(v.h, {
    VOICE_CHANNEL_SELECT: rj,
    VOICE_STATE_UPDATES: nY,
    CONNECTION_OPEN: nF,
    CONNECTION_CLOSED: nB,
    POST_CONNECTION_OPEN: nH,
    RTC_CONNECTION_STATE: nj,
    AUDIO_SET_TEMPORARY_SELF_MUTE: nW,
    AUDIO_TOGGLE_SELF_MUTE: nK,
    AUDIO_SET_SELF_MUTE: nz,
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
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: rs,
    AUDIO_SET_LOOPBACK: ro,
    AUDIO_SET_NOISE_SUPPRESSION: rd,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: r_,
    AUDIO_SET_NOISE_CANCELLATION: rf,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: rp,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: rm,
    AUDIO_SET_DEBUG_LOGGING: rE,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: rg,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: rh,
    MEDIA_ENGINE_SET_VIDEO_HOOK: rA,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: rI,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: rT,
    AUDIO_SET_ATTENUATION: rS,
    AUDIO_SET_QOS: ry,
    MEDIA_ENGINE_DEVICES: re,
    AUDIO_VOLUME_CHANGE: rt,
    AUDIO_RESET: rv,
    AUDIO_INPUT_DETECTED: rC,
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: rN,
    AUDIO_SET_SUBSYSTEM: rV,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rF,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rz,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: r$,
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
    SET_VAD_PERMISSION: rb,
    SET_NATIVE_PERMISSION: rR,
    SET_CHANNEL_VIDEO_QUALITY_MODE: r5,
    MEDIA_ENGINE_SET_AEC_DUMP: r0,
    MEDIA_ENGINE_RESET_SETTINGS: r1,
    CHANNEL_DELETE: r6,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: r4,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: r7,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: r8,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: r9,
    USER_SETTINGS_PROTO_UPDATE: n$,
    CLIPS_INIT: rq,
    CLIPS_SETTINGS_UPDATE: rX,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: ie,
    VOICE_FILTER_REQUEST_SWITCH: rk,
    VOICE_FILTER_LOOPBACK_TOGGLE: rP,
    VOICE_FILTER_APPLIED: rG,
    VOICE_FILTER_DOWNLOAD_FAILED: rU,
    VOICE_FILTER_APPLY_FAILED: rU,
})),
    (o = new Q.A(to, r));
let is = r;
