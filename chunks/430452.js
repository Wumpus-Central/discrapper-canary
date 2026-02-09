"use strict";
let r, i, a, s, o, l, u, c, d, _, f;
n.d(t, { A: () => it }), n(321073), n(790599);
var p = n(284009),
    h = n.n(p),
    m = n(735438),
    g = n.n(m),
    E = n(299855),
    A = n.n(E),
    I = n(311907),
    T = n(205693),
    S = n(506774),
    y = n(451988),
    v = n(73153),
    C = n(77729),
    N = n(719129),
    b = n(894539),
    R = n(274372),
    O = n(915618),
    D = n(572164),
    L = n(626584),
    w = n(211597),
    x = n(709710),
    M = n(49463),
    P = n(784113),
    k = n(15285),
    U = n(540305),
    G = n(17300),
    F = n(544746),
    V = n(820344),
    B = n(593595),
    j = n(788601),
    H = n(626078),
    Y = n(509034),
    W = n(638188),
    K = n(269377),
    z = n(934341),
    $ = n(658046),
    q = n(621963),
    X = n(525286),
    Z = n(780732),
    Q = n(495439),
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
    ep = n(3527),
    eh = n(714763),
    em = n(879172),
    eg = n(555444),
    eE = n(617617),
    eA = n(340913),
    eI = n(996744),
    eT = n(28075),
    eS = n(954571),
    ey = n(353835),
    ev = n(927813),
    eC = n(723702),
    eN = n(728458),
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
    ej = n(731854),
    eH = n(985018);
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
    e7 = 0,
    e8 = null;
function e9() {
    if (!(0, eC.isIOS)() || null == e8) return !1;
    let e = e8();
    if (null == e || !e.startsWith("ARM64_")) return !1;
    let t = e.substring(6);
    return ("T" === t[0] || "S" === t[0]) && parseInt(t.substring(1), 10) >= 8122;
}
let te = null;
async function tt() {
    if (!(0, eC.isMac)() || C.A?.os.arch !== "arm64" || C.A?.processUtils?.getSystemInfo == null) {
        te = !1;
        return;
    }
    let e = await C.A.processUtils.getSystemInfo(),
        t = (e.cpus?.[0]?.model ?? "").match(/Apple M(\d+)/);
    if (null == t) {
        te = !0;
        return;
    }
    te = parseInt(t[1], 10) >= 3;
}
function tn() {
    return !0 === te;
}
function tr() {
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
        videoHook: ta.supports(ej.O5.VIDEO_HOOK),
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
let ti = {
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
    ta = (0, T.hB)((0, T.WI)());
eY.enableNativeLogger(!0);
let ts = {},
    to = new Set([ej.x.DEFAULT]),
    tl = ta.supports(ej.O5.AUTO_ENABLE),
    tu = !1,
    tc = ej.x.STREAM,
    td = performance.now(),
    t_ = null,
    tf = { [ej.dx]: nb("No Input Devices") },
    tp = { [ej.dx]: nb("No Output Devices") },
    th = { [ej.dx]: nb("No Video Devices") },
    tm = new y.Ep(),
    tg = !1,
    tE = !1,
    tA = !1,
    tI = !1,
    tT = !1,
    tS = ej.qe,
    ty = ej.qe,
    tv = !1,
    tC = !1,
    tN = !1,
    tb = new y.Ep(),
    tR = !1,
    tO = !1,
    tD = !1,
    tL = !1,
    tw = new y.Ep(),
    tx = !1,
    tM = !1,
    tP = !1,
    tk = [],
    tU = !1,
    tG = null,
    tF = null,
    tV = null,
    tB = null,
    tj = null,
    tH = !1,
    tY = !1,
    tW = !1,
    tK = null,
    tz = null,
    t$ = !1,
    tq = !1;
e_.A.hasPermission(eF.iL.AUDIO, { showAuthorizationError: !1 }),
    e_.A.hasPermission(eF.iL.CAMERA, { showAuthorizationError: !1 });
let tX = !1,
    tZ = new Set(),
    tQ = tX,
    tJ = new Set(),
    t0 = {},
    t1 = null,
    t2 = null,
    t3 = !0,
    t6 = !1,
    t4 = new y.Ep(),
    t5 = !1,
    t7 = !1,
    t8 = !1,
    t9 = !1;
function ne(e) {
    return (0, q.p)({ location: e }).hdrCaptureMode;
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
    return null != tz ? tz : "u" > typeof window ? (tz = nt().then((e) => ((tK = e), e))) : Promise.resolve(!1);
}
function nr() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ej.x.DEFAULT,
        t = ts[e];
    return null == t && ((t = tr()), (ts[e] = t)), t;
}
function ni() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ej.x.DEFAULT,
        t = nr(e),
        n = ti[t.activeInputProfile ?? eB.my.CUSTOM],
        r = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}) };
    if (
        (null == r.vadDuringPreProcess && (r.vadDuringPreProcess = (0, ea.R)({ location: "getSettings" }).enabled),
        (null == r.vadKrispActivationThreshold && !0 === n.automaticGainControl) || !0 === t.automaticGainControl)
    ) {
        let e = (0, G.F)({ location: "getSettings" });
        null != e.vadKrispActivationThreshold && (r.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return { ...t, ...n, modeOptions: r };
}
function na(e) {
    let t = ni(e.context),
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
        vadUseKrisp: (!!i || t.modeOptions.vadUseKrisp) && rR(),
        vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? eX,
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        vadDuringPreProcess: t.modeOptions.vadDuringPreProcess ?? !1,
        pttReleaseDelay: Math.round(t.modeOptions.delay),
    });
}
function ns(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ej.Hz;
    return g().clamp(e, 0, t);
}
function no(e) {
    let t = ni(e.context),
        n = !tl || t.mute || t.deaf;
    e.context === ej.x.DEFAULT
        ? (n = n || tg || tE || tA || !e_.A.didHavePermission(eF.iL.AUDIO))
        : e.context === ej.x.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === ej.x.DEFAULT && b.A.updateNativeMute();
}
function nl(e) {
    e !== tc && (null != a && ta.setGoLiveSource(null, tc), (tc = e));
}
function nu() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tT,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        n = a;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, eC.isWindows)() && N.c1(n.desktopSource.soundshareId),
            ta.setGoLiveSource(null, tc)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            ta.setGoLiveSource(null, tc),
        tT || e)
    ) {
        let t = ni().videoDeviceId;
        tT && t === ej.dx && ty === ej.dx && tS !== ej.qe ? (t = tS) : (ty = t),
            (tS = (tT = e) ? nO(th, t) : ej.qe),
            ta.setVideoInputDevice(tS);
    }
    if (((a = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = ne("MediaEngineStore go live"),
                i = ni().videoHook,
                a = ng(),
                s = a ? (nE() ? eG.zl : eG.eg) : 0,
                o = (0, eC.isWindows)() && (0, es.b)("updateVideo").enabled,
                l = !1;
            (0, eC.isWindows)() && t2 && (l = el.q.getConfig({ location: "updateVideo" }).enabled),
                ta.setGoLiveSource(
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
                            allowScreenCaptureKit: nA(),
                            videoHookStaleFrameTimeoutMs: eQ,
                            graphicsCaptureStaleFrameTimeoutMs: eJ,
                            hdrCaptureMode: n,
                            enableGlobalFramePoolLock: (0, $.H)({ location: "updateVideo" }).enabled,
                            useGraphicsCaptureDirtyRegions: l,
                        },
                        quality: e,
                    },
                    tc,
                );
        }
        null != t.cameraSource &&
            ta.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: t.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: t.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                tc,
            );
    }
}
function nc(e) {
    switch (e) {
        case ej.CO.CPU_OVERUSE:
            return x.B6.NoiseCancellerCpuOveruse;
        case ej.CO.FAILED:
            return x.B6.NoiseCancellerFailed;
        case ej.CO.VAD_CPU_OVERUSE:
            return x.B6.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function nd() {
    null === t_ &&
        ta
            .getCodecSurvey()
            .then((e) => {
                try {
                    let t = JSON.parse(e);
                    if (null == t || null == t.available_video_decoders) throw Error("decoder survey is not available");
                    t_ = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                } catch (e) {
                    eY.error("Failed to parse codec survey", e), (t_ = !1);
                }
            })
            .catch((e) => {
                eY.error("Failed to get codec survey", e), (t_ = !1);
            })
            .finally(() => {
                v.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
            });
}
function n_(e) {
    let t = (0, G.F)({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function nf(e, t) {
    e.setAutomaticGainControl(n_(t));
}
function np(e, t) {
    let n = (0, ep.A)(t, r.getSystemMicrophoneMode(), { location: "setNoiseCancellation" });
    n !== t && eY.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: i } = (0, G.F)({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(i);
    let { noiseCancellationAfterProcessing: a, vadAfterWebrtc: s } = (0, ee.$)({ location: "setNoiseCancellation" });
    e.setNoiseCancellationAfterProcessing(a), e.setVADAfterWebrtc(s);
}
function nh(e) {
    let t = ni(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eL.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eL.A.hasNoiseSuppression(n) || t.noiseSuppression),
        nf(e, eL.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        np(e, t.noiseCancellation),
        e.setVoiceFilterId(tG),
        (0, eC.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function nm() {
    tm.start(e3, () => {
        eY.error("Device enumeration timed out"), eS.default.track(eU.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
    }),
        ta.on(T.bg.Connection, (e) => {
            na(e), no(e), nh(e);
            let t = ni();
            e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
                e.setQoS(t.qos);
            let n = (0, Q.K)({ location: "setupMediaEngine" }).treatment;
            (t$ = n === Q.c.NoSoftwareDecodeWithFallback),
                n === Q.c.NoSoftwareDecode || n === Q.c.NoSoftwareDecodeWithFallback
                    ? (e.setExperimentFlag(ej.fd.H265_HARDWARE_ONLY, !0),
                      (0, eC.isWindows)()
                          ? nn().then((t) => {
                                e.setExperimentFlag(ej.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                            })
                          : (0, eC.isMac)() && e.setExperimentFlag(ej.fd.H265_HARDWARE_DECODE_AVAILABLE, !0))
                    : n === Q.c.Disabled &&
                      (e.setExperimentFlag(ej.fd.H265_HARDWARE_ONLY, !0),
                      e.setExperimentFlag(ej.fd.H265_HARDWARE_DECODE_AVAILABLE, !1)),
                (0, eC.isWindows)() &&
                    (0, Z.r)({ location: "setupMediaEngine" }).enabled &&
                    e.setExperimentFlag(ej.fd.USE_H264_MF_DECODER, !0);
            let i = ex.A.getGuildId(),
                {
                    muteBeforeProcessing: s,
                    pttBeforeProcessing: o,
                    skipEncode: l,
                } = (null != i ? K.A : W.A).getCurrentConfig(
                    { location: "setupMediaEngine", guildId: i ?? void 0 },
                    { autoTrackExposure: !0 },
                );
            s && e.setExperimentFlag(ej.fd.MUTE_BEFORE_PROCESSING, !0),
                o && e.setExperimentFlag(ej.fd.PTT_BEFORE_PROCESSING, !0),
                l && e.setExperimentFlag(ej.fd.SKIP_ENCODE, !0),
                (0, et.J)({ location: "setupMediaEngine" }).enabled &&
                    e.setExperimentFlag(ej.fd.LOW_LATENCY_RATE_CONTROL, !0);
            let u = !1,
                c = !0;
            if (
                (e.setExperimentFlag(ej.fd.RESET_DECODER_ON_ERRORS, !0),
                u && e.setExperimentFlag(ej.fd.SOFTWARE_FALLBACK_ON_ERRORS, !0),
                c && e.setExperimentFlag(ej.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0),
                e.context === ej.x.STREAM)
            ) {
                let t = nL(tp);
                e.setSoundshareDiscardRearChannels(t);
                let { simulcastEnabled: n, lqStreamBitrate: r } = X.A.getConfig();
                e.configureGoLiveSimulcast(n, r);
            }
            if ((0, eC.isWindows)())
                e.setExperimentFlag(ej.fd.SIGNAL_AV1, !0), e.setExperimentFlag(ej.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            else if ((0, eC.isMac)()) {
                if ((e.setExperimentFlag(ej.fd.SIGNAL_AV1_DECODE, !0), tn())) {
                    let { enabled: t } = (0, V.t)("MediaEngineStore");
                    t && e.setExperimentFlag(ej.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                }
            } else if ((0, eC.isLinux)()) e.setExperimentFlag(ej.fd.SIGNAL_AV1_DECODE, !0);
            else if ((0, eC.isIOS)() && e9()) {
                let { enabled: t } = (0, F.$)("MediaEngineStore");
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
                    t1?.startsWith("AMD") &&
                    (0, eu.F)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(ej.fd.WMF_GPU_ENCODE, !0),
                (0, eC.isWindows)() &&
                    t1?.startsWith("Intel") &&
                    (0, ec.J)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(ej.fd.WMF_GPU_ENCODE, !0),
                (0, eC.isWindows)() &&
                    t1?.startsWith("Qualcomm") &&
                    (0, eu.F)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(ej.fd.WMF_GPU_ENCODE, !0),
                ta.setHasFullbandPerformance((0, w.A)()),
                e.setRemoteAudioHistory(1e3),
                (0, O.A)(r))
            ) {
                let { enableViewerClipping: t } = eo.A.getCurrentConfig(
                    { location: "f627ab_15" },
                    { autoTrackExposure: !1 },
                );
                e.setViewerSideClip(t), e.setClipsKeyFrameInterval(ej.X1);
            }
            for (let n of ((t = ni(e.context)), e.setPostponeDecodeLevel(e1), Object.keys(t.localMutes)))
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
                e.context === ej.x.DEFAULT &&
                    ((tC = !1),
                    (tN = !1),
                    e.on(T.yq.SpeakingWhileMuted, () => {
                        (tC = !0),
                            (tN = !0),
                            r.emitChange(),
                            tb.stop(),
                            tb.start(e2, () => {
                                (tN = !1), r.emitChange();
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
                e.on(T.yq.VideoHookInitialize, (e, t, n, r, i, s) => {
                    a?.desktopSource != null &&
                        eS.default.track(eU.HAw.VIDEOHOOK_INITIALIZED, {
                            backend: e,
                            format: t,
                            framebuffer_format: n,
                            sample_count: r,
                            success: i,
                            reinitialization: s,
                            ...(0, U.A)(a?.desktopSource),
                        });
                }),
                e.on(T.yq.NoiseCancellationError, (e) => {
                    eY.warn(`noisecancellererror event: ${e}`),
                        (0, x.QW)({ type: x.iy.NOISE_CANCELLER_ERROR, underlyingError: nc(e) }),
                        (tH = !0),
                        eS.default.track(eU.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        v.h.dispatch({ type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: !0 }),
                        v.h.dispatch({ type: "AUDIO_SET_NOISE_CANCELLATION", enabled: !1 }),
                        v.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e });
                }),
                e.on(T.yq.VoiceActivityDetectorError, (e) => {
                    eY.warn(`voiceactivitydetectorerror event: ${e}`),
                        (0, x.QW)({ type: x.iy.NOISE_CANCELLER_ERROR, underlyingError: nc(e) }),
                        eS.default.track(eU.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        v.h.dispatch({
                            type: "AUDIO_SET_MODE",
                            context: ej.x.DEFAULT,
                            mode: eU.TBI.VOICE_ACTIVITY,
                            options: { ...ni(ej.x.DEFAULT).modeOptions, vadUseKrisp: !1 },
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
                (0, eC.isWindows)() &&
                    ta.supports(ej.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                    ta.setAsyncVideoInputDeviceInit((0, H.v)("setupMediaEngine").enabled);
        }),
        ta.on(T.bg.DeviceChange, (e, t, n) => {
            tm.stop(),
                v.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
        }),
        ta.on(T.bg.VolumeChange, (e, t) => {
            v.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
        }),
        ta.on(T.bg.DesktopSourceEnd, (e, t) => {
            v.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
        }),
        ta.on(T.bg.AudioPermission, (e) => {
            (tq = !0), v.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
        }),
        ta.on(T.bg.VideoPermission, (e) => {
            v.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
        }),
        ta.on(T.bg.WatchdogTimeout, async () => {
            let e;
            try {
                await ey.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
            } catch (t) {
                "number" == typeof t.status && (e = t.status);
            }
            eY.warn(`Watchdog timeout, report submission status: ${e ?? 200}`),
                eS.default.track(eU.HAw.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        ta.on(T.bg.VideoInputInitialized, (e) => {
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
        ta.on(T.bg.AudioInputInitialized, (e) => {
            eS.default.track(eU.HAw.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * ev.A.Millis.SECOND),
                rtc_connection_id: ex.A.getRTCConnectionId(),
            });
        }),
        ta.on(T.bg.ClipsRecordingRestartNeeded, () => {
            v.h.dispatch({ type: "CLIPS_RESTART" });
        }),
        ta.on(T.bg.ClipsInitFailure, (e, t) => {
            v.h.wait(() => {
                v.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t });
            });
        }),
        ta.on(T.bg.ClipsRecordingEnded, (e, t) => {
            s?.desktopSource?.id === e && (null != t && a?.desktopSource?.soundshareId !== t && N.c1(t), (s = null));
        }),
        ta.on(T.bg.NativeScreenSharePickerUpdate, (e, t) => {
            v.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
        }),
        ta.on(T.bg.NativeScreenSharePickerCancel, (e) => {
            v.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
        }),
        ta.on(T.bg.NativeScreenSharePickerError, (e) => {
            v.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
        }),
        ta.on(T.bg.AudioDeviceModuleError, (e, t, n) => {
            eS.default.track(eU.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
        }),
        ta.on(T.bg.VideoCodecError, (e) => {
            let t = "encode" === e.mode ? x.iy.VIDEO_ENCODE_ERROR : x.iy.VIDEO_DECODE_ERROR,
                n = { videoCodec: e.codecStandard, errorMessage: e.message };
            (0, x.QW)(
                t === x.iy.VIDEO_ENCODE_ERROR
                    ? { type: t, ...n, videoEncoder: e.implName }
                    : { type: t, ...n, videoDecoder: e.implName },
            );
        }),
        ta.on(T.bg.ConnectionStats, (e) => {
            v.h.dispatch({
                type: "MEDIA_ENGINE_CONNECTION_STATS",
                connectionStats: e.map((e) => {
                    let { stats: t, connection: n } = e;
                    return {
                        stats: t,
                        mediaEngineConnectionId: n.mediaEngineConnectionId,
                        version: e7++,
                        context: n.context,
                    };
                }),
            });
        }),
        ta.on(T.bg.VoiceQueueMetrics, (e) => {
            let t = ie(e);
            null !== t && eS.default.track(eU.HAw.VOICE_QUEUE_METRICS, t);
        }),
        ta.setOnVideoContainerResized((e, t, n) => {
            v.h.wait(() =>
                v.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
            );
        }),
        tt(),
        ro(),
        ru(),
        ta.supports(ej.O5.ASYNC_CLIPS_SOURCE_DEINIT) &&
            ta.setAsyncClipsSourceDeinit((0, Y.V)("setupMediaEngine").enabled),
        o.reset(),
        (0, eM.w)().then((e) => {
            null != e && ((t1 = e.gpu_brand), (t2 = e.has_intel_hybrid_igpu));
        }),
        ta.on(T.bg.SystemMicrophoneModeChange, (e) => {
            (f = e), ta.eachConnection(nh);
        });
}
function ng() {
    return (0, eC.isWindows)() && A().satisfies(C.A?.os.release, eG.yg);
}
function nE() {
    return (0, eC.isWindows)() && A().satisfies(C.A?.os.release, eG.fG);
}
function nA() {
    return (0, eC.isMac)() && ta.supports(ej.O5.SCREEN_CAPTURE_KIT) && A().satisfies(C.A?.os.release, eG.e);
}
function nI() {
    return (
        (0, eC.isWindows)() &&
        ta.supports(ej.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        ta.supports(ej.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nT() {
    return ta.supports(ej.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function nS() {
    let e = S.w.get("audio");
    null != e && (S.w.set(eW, { [ej.x.DEFAULT]: e }), S.w.remove("audio")),
        (ts = S.w.get(eW) ?? {}),
        g().each(ts, (e) => {
            g().defaultsDeep(e, tr()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, eR.OH)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== eK &&
                    ((e.vadUseKrispSettingVersion = eK), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                e.vadThrehsoldMigrated ||
                    ((e.vadThrehsoldMigrated = !0), e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = e0)),
                ta.supports(ej.O5.SIDECHAIN_COMPRESSION) &&
                    e.sidechainCompressionSettingVersion < eq &&
                    ((e.sidechainCompressionSettingVersion = eq), (e.sidechainCompression = !0)),
                (0, eC.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== e$ &&
                      ((e.ncUseKrispjsSettingVersion = e$), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== ez &&
                      ((e.ncUseKrispSettingVersion = ez), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
        }),
        nC();
}
function ny(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ej.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = nr(t);
    return Object.assign(r, e), !__OVERLAY__ && n && S.w.set(eW, ts), r;
}
function nv() {
    S.w.remove(eW), location.reload();
}
function nC() {
    let e = ni();
    ta.setAudioInputDevice(e.inputDeviceId),
        ta.setAudioOutputDevice(e.outputDeviceId),
        nu(),
        ta.setInputVolume(e.inputVolume),
        ta.setOutputVolume(e.outputVolume),
        ta.setAecDump(e.aecDumpEnabled),
        ta.setSidechainCompression(e.sidechainCompression),
        ta.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        ta.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing);
}
function nN() {
    tl || ta.enable().then(() => v.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nb(e) {
    return { id: ej.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
}
function nR(e, t) {
    if (0 === e.length) {
        let e = nb(t);
        return { [e.id]: e };
    }
    return g()(e)
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
function nO(e, t) {
    let n = e[t] ?? e[ej.dx] ?? g()(e).values().first();
    return null != n ? n.id : t;
}
function nD(e) {
    let t = tf;
    if (((tf = nR(e, eH.intl.string(eH.t["/QIjDA"]))), !g().isEqual(tf, t))) {
        let e = ni(),
            t = nO(tf, e.inputDeviceId);
        ta.setAudioInputDevice(t), ta.eachConnection(nh);
    }
}
function nL(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nw(e) {
    ta.eachConnection((t) => {
        t.context === ej.x.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function nx(e) {
    let t = tp;
    if (((tp = nR(e, eH.intl.string(eH.t.xlUg0v))), !g().isEqual(tp, t))) {
        let e = ni(),
            n = nO(tp, e.outputDeviceId);
        ta.setAudioOutputDevice(n);
        let r = nL(t),
            i = nL(tp);
        r !== i && nw(i);
    }
}
function nM(e) {
    tO = e.length > 0;
    let t = th;
    if (((th = nR(e, eH.intl.string(eH.t.WKWARY))), tT && !g().isEqual(th, t))) {
        let e = void 0 !== th[tS],
            n = tS === ej.dx && t[ej.dx]?.disabled;
        nu(e || n);
    }
}
function nP() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = eE.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let r = n === eV.W.USER ? ej.x.DEFAULT : ej.x.STREAM,
            i = r === ej.x.STREAM ? ej.Cn : ej.Hz,
            a = t[n] ?? {},
            { localMutes: s, localVolumes: o } = ni(r);
        for (let [e, t] of Object.entries(a))
            null == (0, em.tM)(r, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== i ? (o[e] = t.volume) : delete o[e],
                ta.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, r));
        if (e)
            for (let e of new Set([...Object.keys(s), ...Object.keys(o)]))
                null == a[e] &&
                    (delete s[e],
                    delete o[e],
                    ta.eachConnection((t) => {
                        t.setLocalVolume(e, i), t.setLocalMute(e, !1);
                    }, r));
        ny({ localMutes: s, localVolumes: o }, r);
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
    (0, eC.isWindows)() &&
        e > 1 &&
        N.GH(e, { soundshare_session: t }).then((t) => {
            null == t ||
                k.Ay.shouldContinueWithoutElevatedProcessForPID(e) ||
                v.h.wait(() => {
                    v.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: t });
                });
        });
}
function nG(e) {
    (i = e.sessionId), (tg = !1), (tI = !1);
    let t = ni();
    if (
        (nI() && (nT() ? rG(ej.rB.AUTOMATIC) : t.automaticAudioSubsystem && rF()),
        ta.supports(ej.O5.OFFLOAD_ADM_CONTROLS))
    ) {
        let e = !1;
        (0, eC.isDesktop)()
            ? (e = (0, B.i)({ location: "handleConnectionOpen" }).enabled)
            : ((0, eC.isIOS)() || (0, eC.isAndroid)()) && (e = (0, j.Y)({ location: "handleConnectionOpen" }).enabled),
            ta.setOffloadAdmControls(e);
    }
    (0, eI.Lb)({ location: "MediaEngineStore", autoTrackExposure: !1 }) &&
        null !== t.mostRecentlyRequestedVoiceFilter &&
        (0, eC.isDesktop)() &&
        (eT.A.getLastInitAttemptMayHaveCrashed()
            ? (v.h.dispatch({ type: "AUDIO_SET_SELF_MUTE", mute: !0, context: ej.x.DEFAULT, playSoundEffect: !0 }),
              ny({ mostRecentlyRequestedVoiceFilter: null }))
            : n(342887).md()),
        nP();
}
function nF(e) {
    let { mediaEngineState: t } = e;
    (ts = t.settingsByContext),
        (tf = t.inputDevices),
        (tp = t.outputDevices),
        (t0 = t.appSupported),
        (tP = t.krispModuleLoaded),
        (c = t.krispVersion),
        (tc = t.goLiveContext);
}
function nV() {
    i = null;
}
function nB() {
    if ((0, eC.isWeb)()) {
        let e = er.f1.getCurrentConfig({ location: "MediaEngineStore handlePostConnectionOpen" });
        e.loadWasmModule && e.preload && r.startDavePreload();
    }
    return !1;
}
function nj(e) {
    switch (e.state) {
        case eU.S7L.CONNECTING:
            nN();
            break;
        case eU.S7L.RTC_CONNECTING:
            (tL = !1), (l = void 0), (u = void 0), (tD = !1), (t6 = !1), t4.stop(), tw.stop(), o.reset();
            break;
        case eU.S7L.RTC_CONNECTED:
            nu();
            break;
        case eU.S7L.DISCONNECTED:
            nZ(), nQ();
    }
}
function nH(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (tg = t.mute || t.suppress), (tI = t.deaf), ta.eachConnection(no);
            let e = null != t.guildId && null != t.channelId && null != tj && tj !== t.channelId,
                n = !tx && null == t.channelId;
            return nu(!e && !n && tT), (tj = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== eO.default.getId() || null != ex.A.getChannelId() || nu(!1, null), e;
    }, !1);
}
function nY(e) {
    let { mute: t } = e;
    (tE = t), ta.eachConnection(no);
}
function nW(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = ni(t);
    if (t === ej.x.DEFAULT && (e_.A.requestPermission(eF.iL.AUDIO), tA)) return !1;
    (r = !i && !r) || (i = !1), n || (tv = !0), ny({ mute: r, deaf: i }, t), ta.eachConnection(no);
}
function nK(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    ny({ mute: n }, t), r || (tv = !0), ta.eachConnection(no);
}
function nz(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== eV.oD.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    nP(!0);
}
function n$(e) {
    let { context: t } = e;
    ny({ deaf: !ni(t).deaf }, t), ta.eachConnection(no);
}
function nq(e) {
    let { context: t, userId: n } = e;
    if (n === eO.default.getId()) return;
    let { localMutes: r } = ni(t);
    r[n] ? delete r[n] : (r[n] = !0),
        ny({ localMutes: r }, t),
        ta.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nX(e) {
    let { context: t, userId: n, videoToggleState: r, persist: i, isAutomatic: a } = e;
    h()(!(i && a), "These are not allowed to both be true.");
    let s = r === eU.bb8.DISABLED,
        { disabledLocalVideos: o } = ni(t),
        l = o[n] ?? !1,
        u = tZ.has(n),
        c = r === eU.bb8.AUTO_ENABLED || r === eU.bb8.MANUAL_ENABLED;
    eY.info(`disableVideo=${s} currentlyDisabled=${l} currentlyAutoDisabled=${u}, isVideoShown=${c}`),
        h()(!(u && !l), "If you are auto-disabled, then you are also disabled.");
    let d = s !== l,
        _ = t === ej.x.DEFAULT,
        f = a && d && _,
        p = i && d && _;
    eY.info(`changed=${d} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${f} isManualToggleByUser=${p}`);
    let { videoToggleStateMap: m } = ni(t);
    if (
        (m[n] === eU.bb8.AUTO_PROBING &&
            r === eU.bb8.AUTO_ENABLED &&
            (0, ed.A)(n, s ? ej.Al.AUTO_DISABLE : ej.Al.AUTO_ENABLE, c),
        (m[n] = r),
        ny({ videoToggleStateMap: m }, t, i),
        r === eU.bb8.AUTO_PROBING
            ? ex.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
            : ex.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
        tQ ||
            (eY.info(`isAutoDisableAllowed=${tQ} - disabling VideoHealthManager`),
            ex.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
        f)
    ) {
        if ((!s && !u) || (s && !tQ)) return;
        (0, ed.A)(n, s ? ej.Al.AUTO_DISABLE : ej.Al.AUTO_ENABLE, c), s ? tZ.add(n) : tZ.delete(n);
    } else
        p &&
            (u && !s
                ? (eY.info("disallowing auto-disable for this session because of manual override by user"),
                  (tQ = !1),
                  ex.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                  (0, ed.A)(n, ej.Al.MANUAL_REENABLE, c))
                : (0, ed.A)(n, s ? ej.Al.MANUAL_DISABLE : ej.Al.MANUAL_ENABLE, c));
    _ && !s && tZ.delete(n),
        s ? (o[n] = !0) : delete o[n],
        ny({ disabledLocalVideos: o }, t, i),
        ta.eachConnection((e) => e.setLocalVideoDisabled(n, o[n] ?? !1), t);
}
function nZ() {
    if (0 === tZ.size) return;
    let e = ej.x.DEFAULT,
        { disabledLocalVideos: t } = ni(e);
    tZ.forEach((n) => {
        h()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            ta.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tZ.clear(),
        ny({ disabledLocalVideos: t }, e, !1);
}
function nQ() {
    let e = ej.x.DEFAULT,
        { videoToggleStateMap: t } = ni(e);
    for (let [e, n] of Object.entries(t)) n === eU.bb8.AUTO_PROBING && delete t[e];
    ny({ videoToggleStateMap: t }, e, !1);
}
function nJ(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === eO.default.getId()) return;
    let i = t === ej.x.STREAM ? ej.Cn : ej.Hz,
        { localVolumes: a } = ni(t);
    r === i ? delete a[n] : (a[n] = r), ny({ localVolumes: a }, t), ta.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function n0(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: a } = ni(t);
    (a[n] = { left: r, right: i }), ny({ localPans: a }, t), ta.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function n1(e) {
    let { context: t, mode: n, options: r } = e;
    ny({ mode: n, modeOptions: { ...r, updatedAt: Date.now() } }, t), ta.eachConnection(na);
}
function n2(e) {
    let { volume: t } = e;
    ny({ inputVolume: ns(t) }), ta.setInputVolume(t);
}
function n3(e) {
    let { volume: t } = e;
    ny({ outputVolume: t }), ta.setOutputVolume(t);
}
function n6(e) {
    let { id: t } = e;
    (t = nO(tf, t)),
        (td = performance.now()),
        ny({ inputDeviceId: t }),
        ta.setAudioInputDevice(t),
        ta.eachConnection(nh),
        (l = void 0),
        (u = void 0),
        t4.stop(),
        (t6 = !1);
    let { resetSilenceWarningOnDeviceChange: n } = ei.A.getConfig({
        location: "MediaEngineStore.handleSetInputDevice",
    });
    n && ((tD = !1), o.reset());
}
function n4(e) {
    let { id: t } = e;
    ny({ outputDeviceId: (t = nO(tp, t)) }), ta.setAudioOutputDevice(t);
}
function n5(e) {
    let { id: t } = e;
    ny({ videoDeviceId: (t = nO(th, t)) }), nu();
}
function n7(e) {
    let { inputProfile: t } = e;
    ny({ activeInputProfile: t });
    let n = ni();
    ta.eachConnection((e) => {
        na(e), nh(e);
    }),
        ta.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        rl();
}
function n8(e) {
    return tu !== e.required && ((tu = e.required), e.required || ta.interact(), !0);
}
function n9(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    nD(t), nx(n), nM(r);
}
function re(e) {
    let { inputVolume: t, outputVolume: n } = e;
    ny({ inputVolume: ns(t), outputVolume: n });
}
function rt(e) {
    let t = ni(),
        n = ta.getAudioSubsystem(),
        i = ta.getAudioLayer(),
        a = nO(tf, t.inputDeviceId),
        s = tf[a]?.name,
        o = (0, ep.A)(t.noiseCancellation, r.getSystemMicrophoneMode(), { location: "trackVoiceProcessing" });
    eS.default.track(eU.HAw.VOICE_PROCESSING, {
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
function rn(e) {
    let t = ny({ echoCancellation: e.enabled });
    ta.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), rl(), rt(e.location);
}
function rr(e) {
    ra(e.enabled);
}
function ri(e) {
    let t = ny({ sidechainCompressionStrength: e.strength });
    ta.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function ra(e) {
    let t = ny({ sidechainCompression: e });
    ta.setSidechainCompression(t.sidechainCompression);
}
function rs(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tJ.add(n) : tJ.delete(n), ro(), rl();
}
function ro() {
    let e = !tJ.has("voice_filter_preview") && !tJ.has("mic_test");
    ta.setMaybePreprocessMute(e);
}
function rl() {
    let e = ni(),
        t = tJ.size > 0,
        n = e.inputDeviceId,
        r = eL.A.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        a = eL.A.hasNoiseSuppression(n) || e.noiseSuppression,
        s = n_(eL.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        o = e.noiseCancellation,
        l = null !== tG,
        u = tJ.has("voice_filter") && 1 === tJ.size;
    ta.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: a,
        automaticGainControlConfig: s,
        noiseCancellation: o,
        voiceFilters: l,
        loopbackUseAudioMode: u,
    });
}
async function ru() {
    if (!ta.supports(ej.O5.VAAPI)) return;
    let e = 4098;
    if (window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let t = await window.DiscordNative.processUtils.getSystemInfo();
    (t.electronGPUInfo?.gpuDevice ?? []).some((t) => t.vendorId === e) &&
        ((t8 = !0), (t7 = ta.supports(ej.O5.GAMESCOPE_CAPTURE)));
}
function rc(e) {
    let t = ny({ noiseSuppression: e.enabled });
    ta.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), rl(), rt(e.location);
}
function rd(e) {
    let t = ny({ automaticGainControl: e.enabled });
    ta.eachConnection((e) => nf(e, t.automaticGainControl)), rl(), rt(e.location);
}
function r_(e) {
    let t = ny({ noiseCancellation: e.enabled });
    ta.eachConnection((e) => np(e, t.noiseCancellation)), rl(), rt(e.location);
}
function rf(e) {
    ef.A.setKrispModelOverride(e.model), (_ = e.model), rl();
}
function rp(e) {
    (0, eC.isWeb)() || ((tU = e.enabled), ta.setNoiseCancellationEnableStats?.(e.enabled));
}
function rh(e) {
    ny({ silenceWarning: e.enabled });
}
function rm(e) {
    ta.setDebugLogging(e.enabled);
}
function rg(e) {
    let { level: t } = e;
    (d = t), ef.A.setKrispSuppressionLevel(t);
}
function rE(e) {
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
    ta.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function rS(e) {
    let { enabled: t } = e;
    ny({ qos: t }), ta.eachConnection((e) => e.setQoS(t));
}
function ry() {
    nv();
}
function rv(e) {
    let { osVolume: t, osMuted: n } = e;
    (u = t), (l = n);
}
function rC(e) {
    let { inputDetected: t } = e;
    if (null == t) return !1;
    if (((tL = !0 !== tD && !t), t)) (tD = !0), (t6 = !1), t4.stop(), tw.stop();
    else if (ni().mode === eU.TBI.VOICE_ACTIVITY && tD) {
        let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = ei.A.getConfig({
            location: "MediaEngineStore.handleInputDetected",
        });
        e &&
            t4.start(e6, () => {
                eS.default.track(eU.HAw.HARDWARE_MUTE_GUESSED, {
                    input_device_name: tf[nO(tf, ni().inputDeviceId)]?.name,
                    rtc_connection_id: ex.A.getRTCConnectionId(),
                }),
                    (t6 = !0),
                    r.emitChange();
            }),
            null != t &&
                tw.start(t * ev.A.Millis.MINUTE, () => {
                    (tD = !1), o.reset();
                });
    }
}
function rN(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === tA) return !1;
    (tA = n), ta.eachConnection(no);
}
function rb(e) {
    let { state: t, permissionType: n } = e,
        r = t === eF.hL.ACCEPTED;
    switch (n) {
        case eF.iL.AUDIO:
            (tq = !0), ta.eachConnection(no);
            break;
        case eF.iL.CAMERA:
            !r && tT && nu(!1);
            break;
        default:
            return !1;
    }
}
function rR() {
    return tP || !1;
}
async function rO() {
    try {
        await eb.Ay.ensureModule("discord_krisp");
        let e = eb.Ay.requireModule("discord_krisp");
        (tP = !0),
            (c = e.getSdkVersion?.()),
            (d = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (tk = e), r.emitChange();
            }),
            r.emitChange();
    } catch (t) {
        eY.warn(`Failed to load Krisp module: ${t.message}`), eN.A.captureException(t);
        let e = ej.CO.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? ej.CO.INITIALIZED : n;
        }
        eS.default.track(eU.HAw.VOICE_PROCESSING, { noise_canceller_error: e }), ny({ noiseCancellation: !1 });
    } finally {
        tM = !1;
    }
}
function rD() {
    return (0, eC.isWindows)() || (0, eC.isLinux)() || (0, eC.isMac)();
}
function rL() {
    !rD() || __OVERLAY__ || tM || tP
        ? (0, eC.isWeb)() && ta.supports(ej.O5.NOISE_CANCELLATION)
            ? ((tP = !0), r.emitChange())
            : (0, eC.isWeb)() && ny({ noiseCancellation: !1 })
        : ((tM = !0), rO());
}
function rw(e) {
    let { enabled: t } = e;
    eS.default.track(eU.HAw.VOICE_FILTER_PLAYBACK_TOGGLED, { active_voice_filter_id: tG ?? null, enabled: t }),
        ny({ voiceFilterPlaybackEnabled: t });
}
function rx(e) {
    let { newVoiceFilterId: t } = e;
    ny({ mostRecentlyRequestedVoiceFilter: t }), ta.eachConnection((e) => e.setVoiceFilterId(t));
}
function rM() {
    ny({ mostRecentlyRequestedVoiceFilter: null });
}
function rP(e) {
    let { voiceFilterId: t } = e;
    (tV = tG), (tB = tF), (tG = t), (tF = null === t ? null : Date.now());
}
function rk(e) {
    let t = e.bypassEnabled;
    ny({ bypassSystemInputProcessing: t }), ta.setAudioInputBypassSystemProcessing(t), rt(e.location);
}
function rU(e) {
    rG(e.subsystem);
}
function rG(e) {
    e === ej.rB.AUTOMATIC
        ? (ny({ automaticAudioSubsystem: !0 }), rF())
        : (ny({ automaticAudioSubsystem: !1 }), ta.setAudioSubsystem(e));
}
function rF() {
    ta.queueAudioSubsystem(ej.rB.EXPERIMENTAL);
}
function rV(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && nu(i, null), null != t || null == n)) {
        tx = !1;
        return;
    }
    if (tx) return;
    tx = !0;
    let a = ni();
    (a.mute || a.deaf) && (ny({ deaf: !1, mute: !1 }), ta.eachConnection(no));
}
function rB(e) {
    let { application: t } = e;
    to.add(t.id);
}
function rj(e) {
    let { application: t } = e;
    to.delete(t.id);
}
function rH(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (tl = !1), ta.eachConnection(no);
                break;
            case "video":
                nu(!1);
        }
}
function rY(e) {
    (tl = e.enabled), e.unmute && ny({ mute: !1, deaf: !1 }), ta.eachConnection(no);
}
function rW(e) {
    let { enabled: t } = e;
    e_.A.requestPermission(eF.iL.CAMERA), nu(t);
}
function rK(e) {
    let { sourceId: t, applicationName: n, quality: i } = e;
    if (!(0, D.Ao)() || null == C.A) return !1;
    let a = null,
        o = null,
        l = ey.A.getPidFromDesktopSource(t);
    ({ soundshareId: a, soundshareSession: o } = nk(l));
    let u = { desktopSource: { id: t, sourcePid: l, soundshareId: a, soundshareSession: o }, quality: i };
    null != s &&
        (ta.setClipsSource(null),
        (0, eC.isWindows)() && null != s.desktopSource.soundshareId && N.c1(s.desktopSource.soundshareId)),
        null != a && nU(a, o),
        (s = u);
    let c = ne("MediaEngineStore clips"),
        d = ni().videoHook;
    ta.setClipsSource({
        desktopDescription: {
            id: s.desktopSource.id,
            soundshareId: s.desktopSource.soundshareId,
            useVideoHook: d,
            useGraphicsCapture: ng(),
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
function rz(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((s = null), ta.setClipsSource(null));
}
function r$(e) {
    let { settings: t } = e;
    if (t?.desktopSettings != null) {
        let e = null,
            n = null,
            { sourceId: r, sound: i } = t.desktopSettings,
            a = t.context ?? ej.x.DEFAULT,
            s = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
            o = !1 === i ? null : ey.A.getPidFromDesktopSource(r);
        eC.isPlatformEmbedded &&
            !0 === i &&
            (({ soundshareId: e, soundshareSession: n } = nk(o)), null != e && nU(e, n)),
            nl(a),
            nu(a === ej.x.STREAM && tT, {
                desktopSource: { id: r, sourcePid: o, soundshareId: e, soundshareSession: n },
                quality: { resolution: s.resolution, frameRate: s.frameRate },
            });
    } else if (t?.cameraSettings != null) {
        let e = t.context ?? ej.x.DEFAULT,
            { videoDeviceGuid: n, audioDeviceGuid: r } = t.cameraSettings,
            i = e === ej.x.STREAM && tT,
            a = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
        nu(i, {
            cameraSource: { videoDeviceGuid: n, audioDeviceGuid: r },
            quality: { resolution: a.resolution, frameRate: a.frameRate },
        });
    } else nu(tT, null);
}
function rq(e) {
    let { section: t } = e;
    return t === eU.nc_.VOICE && nN(), !1;
}
function rX() {
    return ta.eachConnection(nh), !1;
}
function rZ(e) {
    let { enabled: t } = e,
        n = ny({ aecDumpEnabled: t });
    ta.setAecDump(n.aecDumpEnabled);
}
function rQ(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (ts = Object.values(ej.x).reduce((e, n) => {
        let r = n,
            i = tr();
        return (e[r] = g().merge(i, t[r])), e;
    }, {})),
        S.w.set(eW, ts),
        nC();
}
function rJ(e) {
    let { state: t } = e,
        n = P.A.isEnabled();
    if (t === eU.g6G.BACKGROUND && tT && !n) (tR = !0), nu(!1);
    else {
        if (t !== eU.g6G.ACTIVE || !tR) return !1;
        (tR = !1), nu(!0);
    }
    return !0;
}
function r0(e) {
    ta.eachConnection((t) => t.setBitRate(e.bitrate));
}
function r1() {
    if ((!tT && null == a) || null != ex.A.getRTCConnectionId()) return !1;
    nu(!1, null);
}
function r2() {
    return !!tH && ((tH = !1), !0);
}
function r3(e) {
    ta.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function r6(e) {
    let { settings: t } = e;
    ta.applyMediaFilterSettings(t).finally(() => {
        (tY = !1), r.emitChange();
    });
}
function r4() {
    tY = !0;
}
function r5() {
    tY = !1;
}
function r7(e) {
    t3 = e.enabled;
}
function r8() {
    if ((0, eC.isDesktop)() && eC.isPlatformEmbedded && !t9) {
        t9 = !0;
        let e = async () => {
            let t = await new Promise((e) => {
                eb.Ay.pollQueueMetrics((t) => {
                    e(t);
                });
            });
            t.periodMs = ej.tl;
            let n = ie(t);
            null !== n && eS.default.track(eU.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, ej.tl);
        };
        setTimeout(e, ej.tl);
    }
}
class r9 extends I.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        nm(),
            nS(),
            rL(),
            nQ(),
            r8(),
            (0, eC.isWindows)() && eC.isPlatformEmbedded && nd(),
            (t0 = {
                [ej.O5.VIDEO]: ta.supports(ej.O5.VIDEO),
                [ej.O5.DESKTOP_CAPTURE]: ta.supports(ej.O5.DESKTOP_CAPTURE),
                [ej.O5.HYBRID_VIDEO]: ta.supports(ej.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eO.default, eD.A, eL.A, ew.A, R.A, M.A, ex.A, k.Ay, eh.A, eE.A, eP.default, ek.A, eT.A);
    }
    supports(e) {
        return ta.supports(e);
    }
    supportsInApp(e) {
        return t0[e] || ta.supports(e);
    }
    isSupported() {
        return ta.supported();
    }
    isNoiseSuppressionSupported() {
        return ta.supports(ej.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return rR();
    }
    isNoiseCancellationError() {
        return tH;
    }
    isAutomaticGainControlSupported() {
        return ta.supports(ej.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nT() && (ta.supports(ej.O5.LEGACY_AUDIO_SUBSYSTEM) || ta.supports(ej.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return ta.supports(ej.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === ta.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return rR();
    }
    isAecDumpSupported() {
        return ta.supports(ej.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return ta.supports(ej.O5.VIDEO) && ta.supports(ej.O5.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        return ew.A.getChannel(tj)?.type !== eU.rbe.GUILD_STAGE_VOICE && e4 && X.A.simulcastEnabled();
    }
    isVideoDecoderFallbackEnabled() {
        return t$;
    }
    getAecDump() {
        return ni().aecDumpEnabled;
    }
    getMediaEngine() {
        return ta;
    }
    getVideoComponent() {
        return ta.Video;
    }
    getCameraComponent() {
        return ta.Camera;
    }
    getKrispSuppressionLevel() {
        return d ?? 100;
    }
    getKrispEnableStats() {
        return tU;
    }
    isEnabled() {
        return tl;
    }
    isMute() {
        return this.isSelfMute() || tg;
    }
    isDeaf() {
        return this.isSelfDeaf() || tI;
    }
    hasContext(e) {
        return null != ts[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ej.x.DEFAULT;
        return e === ej.x.DEFAULT && tE;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ej.x.DEFAULT;
        return (
            !this.isEnabled() ||
            ni(e).mute ||
            !e_.A.didHavePermission(eF.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === ej.x.DEFAULT && tA)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tv;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tv = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ej.x.DEFAULT,
            t = t6 && "voice_isolation" !== this.getSystemMicrophoneMode();
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (eL.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return t3;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ej.x.DEFAULT;
        return !this.isSupported() || ni(e).deaf;
    }
    isVideoEnabled() {
        return tT && tO;
    }
    isVideoAvailable() {
        return Object.values(th).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ej.x.STREAM;
        return tc === e && null != a;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ej.x.STREAM;
        return tc === e && null != a && a.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ej.x.DEFAULT;
        return e !== eO.default.getId() && (ni(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return ta.supports(ej.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ej.x.DEFAULT;
        return ni(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ej.x.DEFAULT;
        return ni(t).videoToggleStateMap[e] ?? eU.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ej.x.DEFAULT;
        return t === ej.x.DEFAULT && tZ.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ej.x.DEFAULT;
        return e === ej.x.DEFAULT && tZ.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tY;
    }
    isNativeAudioPermissionReady() {
        return tq;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return tc;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return td;
    }
    isH264MfDecodeAvailable() {
        return t_;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ej.x.DEFAULT,
            n = ni(t).localPans[e];
        return null != n ? n : eZ;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ej.x.DEFAULT,
            n = t === ej.x.STREAM ? ej.Cn : ej.Hz,
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
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ej.x.DEFAULT;
        return ni(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ej.x.DEFAULT;
        return ni(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return tG;
    }
    getActiveVoiceFilterAppliedAt() {
        return tF;
    }
    getPreviousVoiceFilter() {
        return tV;
    }
    getPreviousVoiceFilterAppliedAt() {
        return tB;
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
            g().each(ts, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === eU.TBI.PUSH_TO_TALK && to.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nO(tf, ni().inputDeviceId);
    }
    getOutputDeviceId() {
        return nO(tp, ni().outputDeviceId);
    }
    getVideoDeviceId() {
        return nO(th, ni().videoDeviceId);
    }
    getInputDevices() {
        return tf;
    }
    getOutputDevices() {
        return tp;
    }
    getVideoDevices() {
        return th;
    }
    getEchoCancellation() {
        let e = ni();
        return eL.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return ta.supports(ej.O5.SIDECHAIN_COMPRESSION) && ni().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return ni().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return ni().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tK && tK;
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
        return ta.getDebugLogging();
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
        return nI() && ni().automaticAudioSubsystem ? ej.rB.AUTOMATIC : ta.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return ta.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return ni().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eB.my.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ej.x.DEFAULT;
        return ni(e);
    }
    getState() {
        return {
            settingsByContext: ts,
            inputDevices: tf,
            outputDevices: tp,
            appSupported: t0,
            krispModuleLoaded: tP,
            krispVersion: c,
            krispSuppressionLevel: d,
            goLiveSource: a,
            goLiveContext: tc,
        };
    }
    getInputDetectedThisConnection() {
        return tD;
    }
    getInputDetected() {
        return o.inputDetected;
    }
    getLastInputDetectedUpdateTime() {
        return o.lastUpdateTime;
    }
    getNoInputDetectedNotice() {
        return tL;
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
        ta.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return tu;
    }
    getVideoHook() {
        return ni().videoHook;
    }
    supportsVideoHook() {
        return ta.supports(ej.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = ni().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return ta.supports(ej.O5.EXPERIMENTAL_SOUNDSHARE) && A().satisfies(C.A?.os.release, eG.$x);
    }
    supportsHookSoundshare() {
        return (0, eC.isWindows)() && ta.supports(ej.O5.SOUNDSHARE) && A().satisfies(C.A?.os.release, eG.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = ni().useSystemScreensharePicker,
            n = (0, eC.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return ta.supports(ej.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return t8;
    }
    getUseGamescopeCapture() {
        return t7;
    }
    getEverSpeakingWhileMuted() {
        return tC;
    }
    getSpeakingWhileMuted() {
        return tN;
    }
    getKrispModelOverride() {
        return _;
    }
    getKrispModels() {
        return tk;
    }
    getKrispVadActivationThreshold() {
        return ni().modeOptions.vadKrispActivationThreshold ?? eX;
    }
    hasActiveCallKitCall() {
        return t5;
    }
    setHasActiveCallKitCall(e) {
        t5 = e;
    }
    supportsScreenSoundshare() {
        return (0, eC.isMac)()
            ? ta.supports(ej.O5.SOUNDSHARE) && A().satisfies(C.A?.os.release, eG.P$) && nA()
            : (0, eC.isWindows)()
              ? ta.supports(ej.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, eC.isLinux)() && ta.supports(ej.O5.SCREEN_SOUNDSHARE);
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
            ta.fetchAsyncResources(e)
        );
    }
    startDavePreload() {
        if (!tW && ((tW = !0), (0, eC.isWeb)())) {
            let e = { fetchDave: !0 };
            ta.fetchAsyncResources(e).catch((e) => {
                eY.warn("DAVE preload failed:", e), eN.A.captureException(e);
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
        let e = ta.getSupportedSecureFramesProtocolVersion();
        114 === e && (e = 1);
        let t = er.ex.getCurrentConfig({ location: "MediaEngineStore" }),
            n = er.a.getConfig({ location: "MediaEngineStore" });
        return (t.canSupportDaveProtocol || (n.allowOptIn && eh.A.getPersistentCodesEnabled())) &&
            e >= t.protocolVersionFloor
            ? e
            : 0;
    }
    hasClipsSource() {
        return null != s;
    }
    getGpuBrand() {
        return t1;
    }
}
function ie(e) {
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
(r = new r9(v.h, {
    VOICE_CHANNEL_SELECT: rV,
    VOICE_STATE_UPDATES: nH,
    CONNECTION_OPEN: nG,
    CONNECTION_CLOSED: nV,
    POST_CONNECTION_OPEN: nB,
    RTC_CONNECTION_STATE: nj,
    AUDIO_SET_TEMPORARY_SELF_MUTE: nY,
    AUDIO_TOGGLE_SELF_MUTE: nW,
    AUDIO_SET_SELF_MUTE: nK,
    AUDIO_TOGGLE_SELF_DEAF: n$,
    AUDIO_TOGGLE_LOCAL_MUTE: nq,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: nX,
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
    AUDIO_SET_LOOPBACK: rs,
    AUDIO_SET_NOISE_SUPPRESSION: rc,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: rd,
    AUDIO_SET_NOISE_CANCELLATION: r_,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: rf,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: rh,
    AUDIO_SET_DEBUG_LOGGING: rm,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: rg,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: rp,
    MEDIA_ENGINE_SET_VIDEO_HOOK: rE,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: rA,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: rI,
    AUDIO_SET_ATTENUATION: rT,
    AUDIO_SET_QOS: rS,
    MEDIA_ENGINE_DEVICES: n9,
    AUDIO_VOLUME_CHANGE: re,
    AUDIO_RESET: ry,
    AUDIO_INPUT_DETECTED: rC,
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: rv,
    AUDIO_SET_SUBSYSTEM: rU,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rk,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rY,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rW,
    MEDIA_ENGINE_PERMISSION: rH,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: r$,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: n5,
    MEDIA_ENGINE_INTERACTION_REQUIRED: n8,
    USER_SETTINGS_MODAL_INIT: rq,
    USER_SETTINGS_MODAL_SET_SECTION: rq,
    CERTIFIED_DEVICES_SET: rX,
    RPC_APP_CONNECTED: rB,
    RPC_APP_DISCONNECTED: rj,
    OVERLAY_INITIALIZE: nF,
    APP_STATE_UPDATE: rJ,
    SET_CHANNEL_BITRATE: r0,
    SET_VAD_PERMISSION: rN,
    SET_NATIVE_PERMISSION: rb,
    SET_CHANNEL_VIDEO_QUALITY_MODE: r3,
    MEDIA_ENGINE_SET_AEC_DUMP: rZ,
    MEDIA_ENGINE_RESET_SETTINGS: rQ,
    CHANNEL_DELETE: r1,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: r2,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: r6,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: r4,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: r5,
    USER_SETTINGS_PROTO_UPDATE: nz,
    CLIPS_INIT: rK,
    CLIPS_SETTINGS_UPDATE: rz,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: r7,
    VOICE_FILTER_REQUEST_SWITCH: rx,
    VOICE_FILTER_LOOPBACK_TOGGLE: rw,
    VOICE_FILTER_APPLIED: rP,
    VOICE_FILTER_DOWNLOAD_FAILED: rM,
    VOICE_FILTER_APPLY_FAILED: rM,
})),
    (o = new J.A(ta, r));
let it = r;
