"use strict";
let r, i, s, a, o, l, u, c, d, _, f;
n.d(t, { Ay: () => ii }), n(323874), n(14289), n(35956), n(321073), n(790599);
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
    Z = n(525286),
    X = n(780732),
    Q = n(264866),
    J = n(927170),
    ee = n(233232),
    et = n(140175);
n(491642);
var en = n(267378),
    er = n(801644),
    ei = n(223572),
    es = n(276006),
    ea = n(670470),
    eo = n(886124),
    el = n(165479),
    eu = n(896014),
    ec = n(765396),
    ed = n(75076),
    e_ = n(674966),
    ef = n(559633),
    ep = n(3527),
    eh = n(714763),
    em = n(879172),
    eE = n(617617),
    eg = n(340913),
    eA = n(996744),
    eI = n(28075),
    eT = n(954571),
    eS = n(353835),
    ey = n(927813),
    ev = n(723702),
    eN = n(728458),
    eC = n(837921),
    eb = n(350535),
    eR = n(961350),
    eO = n(131319),
    eD = n(347481),
    eL = n(734057),
    ew = n(383501),
    ex = n(851581),
    eM = n(287809),
    eP = n(117549),
    ek = n(652215),
    eU = n(502075),
    eG = n(765682),
    eF = n(355097),
    eV = n(509381),
    eB = n(731854),
    eH = n(985018);
let ej = new L.A("MediaEngineStore"),
    eY = "MediaEngineStore",
    eW = 4,
    eK = 1,
    ez = 1,
    e$ = 1,
    eq = 0.5,
    eZ = { left: 1, right: 1 },
    eX = 500,
    eQ = 5 * ey.A.Millis.SECOND,
    eJ = -60,
    e0 = 100,
    e1 = 2 * ey.A.Millis.SECOND,
    e2 = 30 * ey.A.Millis.SECOND,
    e3 = +ey.A.Millis.MINUTE,
    e6 = !0,
    e4 = "deep_noise_suppression",
    e5 = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2",
    e7 = "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f",
    e8 = 0,
    e9 = null;
function te() {
    if (!(0, ev.isIOS)() || null == e9) return !1;
    let e = e9();
    if (null == e || !e.startsWith("ARM64_")) return !1;
    let t = e.substring(6);
    return ("T" === t[0] || "S" === t[0]) && parseInt(t.substring(1), 10) >= 8122;
}
let tt = null;
async function tn() {
    if (!(0, ev.isMac)() || N.A?.os.arch !== "arm64" || N.A?.processUtils?.getSystemInfo == null) {
        tt = !1;
        return;
    }
    let e = await N.A.processUtils.getSystemInfo(),
        t = (e.cpus?.[0]?.model ?? "").match(/Apple M(\d+)/);
    if (null == t) {
        tt = !0;
        return;
    }
    tt = parseInt(t[1], 10) >= 3;
}
function tr() {
    return !0 === tt;
}
function ti() {
    return {
        mode: ek.TBI.VOICE_ACTIVITY,
        modeOptions: {
            threshold: eJ,
            autoThreshold: ev.isPlatformEmbedded || __OVERLAY__,
            vadUseKrisp: !0,
            vadKrispActivationThreshold: eq,
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
        inputVolume: eB.Hz,
        outputVolume: eB.Hz,
        inputDeviceId: eB.dx,
        outputDeviceId: eB.dx,
        videoDeviceId: eB.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: ta.supports(eB.O5.VIDEO_HOOK),
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
        [eV.m.CUSTOM]: {},
        [eV.m.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [eV.m.STUDIO]: {
            mode: ek.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    ta = (0, T.hB)((0, T.WI)());
ej.enableNativeLogger(!0);
let to = {},
    tl = new Set([eB.x.DEFAULT]),
    tu = ta.supports(eB.O5.AUTO_ENABLE),
    tc = !1,
    td = eB.x.STREAM,
    t_ = performance.now(),
    tf = null,
    tp = { [eB.dx]: nb("No Input Devices") },
    th = { [eB.dx]: nb("No Output Devices") },
    tm = { [eB.dx]: nb("No Video Devices") },
    tE = new y.Ep(),
    tg = !1,
    tA = !1,
    tI = !1,
    tT = !1,
    tS = !1,
    ty = eB.qe,
    tv = eB.qe,
    tN = !1,
    tC = !1,
    tb = !1,
    tR = new y.Ep(),
    tO = !1,
    tD = !1,
    tL = !1,
    tw = !1,
    tx = new y.Ep(),
    tM = !1,
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
    tz = null,
    t$ = null,
    tq = !1;
e_.A.hasPermission(eG.iL.AUDIO, { showAuthorizationError: !1 }),
    e_.A.hasPermission(eG.iL.CAMERA, { showAuthorizationError: !1 });
let tZ = !1,
    tX = new Set(),
    tQ = tZ,
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
    return null != t$ ? t$ : "u" > typeof window ? (t$ = nt().then((e) => ((tz = e), e))) : Promise.resolve(!1);
}
function nr() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eB.x.DEFAULT,
        t = to[e];
    return null == t && ((t = ti()), (to[e] = t)), t;
}
function ni() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eB.x.DEFAULT,
        t = nr(e),
        n = ts[t.activeInputProfile ?? eV.m.CUSTOM],
        r = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}) };
    if (
        (null == r.vadDuringPreProcess && (r.vadDuringPreProcess = (0, ei.R)({ location: "getSettings" }).enabled),
        (null == r.vadKrispActivationThreshold && !0 === n.automaticGainControl) || !0 === t.automaticGainControl)
    ) {
        let e = (0, G.F)({ location: "getSettings" });
        null != e.vadKrispActivationThreshold && (r.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return { ...t, ...n, modeOptions: r };
}
function ns(e) {
    let t = ni(e.context),
        n = t.mode;
    e.context === eB.x.DEFAULT && (0, et.N)(!1, !1);
    let { showPTTSpeakingIndicator: r } = eg.A.getConfig({ location: "setInputMode" }),
        i = r && n === ek.TBI.PUSH_TO_TALK;
    e.setInputMode(n, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: !!i || t.modeOptions.autoThreshold,
        vadUseKrisp: (!!i || t.modeOptions.vadUseKrisp) && rR(),
        vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? eq,
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        vadDuringPreProcess: t.modeOptions.vadDuringPreProcess ?? !1,
        pttReleaseDelay: Math.round(t.modeOptions.delay),
    });
}
function na(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eB.Hz;
    return E().clamp(e, 0, t);
}
function no(e) {
    let t = ni(e.context),
        n = !tu || t.mute || t.deaf;
    e.context === eB.x.DEFAULT
        ? (n = n || tg || tA || tI || !e_.A.didHavePermission(eG.iL.AUDIO))
        : e.context === eB.x.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eB.x.DEFAULT && b.A.updateNativeMute();
}
function nl(e) {
    e !== td && (null != s && ta.setGoLiveSource(null, td), (td = e));
}
function nu() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tS,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
        n = s;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, ev.isWindows)() && C.c1(n.desktopSource.soundshareId),
            ta.setGoLiveSource(null, td)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            ta.setGoLiveSource(null, td),
        tS || e)
    ) {
        let t = ni().videoDeviceId;
        tS && t === eB.dx && tv === eB.dx && ty !== eB.qe ? (t = ty) : (tv = t),
            (ty = (tS = e) ? nO(tm, t) : eB.qe),
            ta.setVideoInputDevice(ty);
    }
    if (((s = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = ne("MediaEngineStore go live"),
                i = ni().videoHook,
                s = nE(),
                a = s ? (ng() ? eU.zl : eU.eg) : 0,
                o = (0, ev.isWindows)() && (0, es.b)("updateVideo").enabled,
                l = !1;
            (0, ev.isWindows)() &&
                a >= eU.zl &&
                (l =
                    !0 === t2
                        ? el.q.getConfig({ location: "updateVideo" }).enabled
                        : eo.d.getConfig({ location: "updateVideo" }).enabled),
                ta.setGoLiveSource(
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
                            videoHookStaleFrameTimeoutMs: eX,
                            graphicsCaptureStaleFrameTimeoutMs: eQ,
                            hdrCaptureMode: n,
                            enableGlobalFramePoolLock: (0, $.H)({ location: "updateVideo" }).enabled,
                            useGraphicsCaptureDirtyRegions: l,
                        },
                        quality: e,
                    },
                    td,
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
                td,
            );
    }
}
function nc(e) {
    switch (e) {
        case eB.CO.CPU_OVERUSE:
            return x.B6.NoiseCancellerCpuOveruse;
        case eB.CO.FAILED:
            return x.B6.NoiseCancellerFailed;
        case eB.CO.VAD_CPU_OVERUSE:
            return x.B6.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function nd() {
    null === tf &&
        ta
            .getCodecSurvey()
            .then((e) => {
                try {
                    let t = JSON.parse(e);
                    if (null == t || null == t.available_video_decoders) throw Error("decoder survey is not available");
                    tf = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                } catch (e) {
                    ej.error("Failed to parse codec survey", e), (tf = !1);
                }
            })
            .catch((e) => {
                ej.error("Failed to get codec survey", e), (tf = !1);
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
    n !== t && ej.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: i } = (0, G.F)({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(i);
    let { noiseCancellationAfterProcessing: s, vadAfterWebrtc: a } = (0, J.$)({ location: "setNoiseCancellation" });
    e.setNoiseCancellationAfterProcessing(s), e.setVADAfterWebrtc(a);
}
function nh(e) {
    let t = ni(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eD.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eD.A.hasNoiseSuppression(n) || t.noiseSuppression),
        nf(e, eD.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        np(e, t.noiseCancellation),
        e.setVoiceFilterId(tF),
        (0, ev.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function nm() {
    tE.start(e2, () => {
        ej.error("Device enumeration timed out"), eT.default.track(ek.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
    }),
        ta.on(T.bg.Connection, (e) => {
            ns(e), no(e), nh(e);
            let t = ni();
            e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
                e.setQoS(t.qos),
                (0, ev.isWindows)()
                    ? (e.setExperimentFlag(eB.fd.H265_HARDWARE_ONLY, !0),
                      nn().then((t) => {
                          e.setExperimentFlag(eB.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                      }))
                    : (0, ev.isMac)() && e.setExperimentFlag(eB.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                (0, ev.isWindows)() &&
                    (0, X.r)({ location: "setupMediaEngine" }).enabled &&
                    e.setExperimentFlag(eB.fd.USE_H264_MF_DECODER, !0);
            let n = ew.A.getGuildId(),
                {
                    muteBeforeProcessing: i,
                    pttBeforeProcessing: a,
                    skipEncode: o,
                } = (null != n ? K.A : W.A).getCurrentConfig(
                    { location: "setupMediaEngine", guildId: n ?? void 0 },
                    { autoTrackExposure: !0 },
                );
            i && e.setExperimentFlag(eB.fd.MUTE_BEFORE_PROCESSING, !0),
                a && e.setExperimentFlag(eB.fd.PTT_BEFORE_PROCESSING, !0),
                o && e.setExperimentFlag(eB.fd.SKIP_ENCODE, !0),
                (0, ee.J)({ location: "setupMediaEngine" }).enabled &&
                    e.setExperimentFlag(eB.fd.LOW_LATENCY_RATE_CONTROL, !0);
            let l = !1,
                u = !0;
            if (
                (e.setExperimentFlag(eB.fd.RESET_DECODER_ON_ERRORS, !0),
                l && e.setExperimentFlag(eB.fd.SOFTWARE_FALLBACK_ON_ERRORS, !0),
                u && e.setExperimentFlag(eB.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0),
                e.context === eB.x.STREAM)
            ) {
                let t = nL(th);
                e.setSoundshareDiscardRearChannels(t);
                let { simulcastEnabled: n, lqStreamBitrate: r } = Z.A.getConfig();
                e.configureGoLiveSimulcast(n, r);
            }
            if ((0, ev.isWindows)())
                e.setExperimentFlag(eB.fd.SIGNAL_AV1, !0), e.setExperimentFlag(eB.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            else if ((0, ev.isMac)()) {
                if ((e.setExperimentFlag(eB.fd.SIGNAL_AV1_DECODE, !0), tr())) {
                    let { enabled: t } = (0, V.t)("MediaEngineStore");
                    t && e.setExperimentFlag(eB.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                }
            } else if ((0, ev.isLinux)()) e.setExperimentFlag(eB.fd.SIGNAL_AV1_DECODE, !0);
            else if ((0, ev.isIOS)() && te()) {
                let { enabled: t } = (0, F.$)("MediaEngineStore");
                t &&
                    (e.setExperimentFlag(eB.fd.SIGNAL_AV1_DECODE, !0),
                    e.setExperimentFlag(eB.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
            }
            if ((0, ev.isWeb)()) {
                let { enabled: t } = (0, z.O)("MediaEngineStore");
                e.setExperimentFlag(eB.fd.BROWSER_HEVC, t);
            }
            if (
                ((0, ev.isWindows)() &&
                    t1?.startsWith("AMD") &&
                    (0, eu.F)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eB.fd.WMF_GPU_ENCODE, !0),
                (0, ev.isWindows)() &&
                    t1?.startsWith("Intel") &&
                    (0, ec.J)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eB.fd.WMF_GPU_ENCODE, !0),
                (0, ev.isWindows)() &&
                    t1?.startsWith("Qualcomm") &&
                    (0, eu.F)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eB.fd.WMF_GPU_ENCODE, !0),
                ta.setHasFullbandPerformance((0, w.A)()),
                e.setRemoteAudioHistory(1e3),
                (0, O.A)(r))
            ) {
                let { enableViewerClipping: t } = ea.A.getCurrentConfig(
                    { location: "f627ab_15" },
                    { autoTrackExposure: !1 },
                );
                e.setViewerSideClip(t), e.setClipsKeyFrameInterval(eB.X1);
            }
            for (let n of ((t = ni(e.context)), e.setPostponeDecodeLevel(e0), Object.keys(t.localMutes)))
                n !== eR.default.getId() && e.setLocalMute(n, t.localMutes[n]);
            for (let n of Object.keys(t.localVolumes))
                n !== eR.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
            for (let n of Object.keys(t.localPans)) {
                let r = t.localPans[n];
                e.setLocalPan(n, r.left, r.right);
            }
            for (let n of Object.keys(t.disabledLocalVideos)) e.setLocalVideoDisabled(n, t.disabledLocalVideos[n]);
            e.on(T.yq.Speaking, (t, n, r, i) => {
                v.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: i });
            }),
                e.context === eB.x.DEFAULT &&
                    ((tC = !1),
                    (tb = !1),
                    e.on(T.yq.SpeakingWhileMuted, () => {
                        (tC = !0),
                            (tb = !0),
                            r.emitChange(),
                            tR.stop(),
                            tR.start(e1, () => {
                                (tb = !1), r.emitChange();
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
                        eT.default.track(ek.HAw.VIDEOHOOK_INITIALIZED, {
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
                    ej.warn(`noisecancellererror event: ${e}`),
                        (0, x.QW)({ type: x.iy.NOISE_CANCELLER_ERROR, underlyingError: nc(e) }),
                        (tY = !0),
                        eT.default.track(ek.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        v.h.dispatch({ type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: !0 }),
                        v.h.dispatch({ type: "AUDIO_SET_NOISE_CANCELLATION", enabled: !1 }),
                        v.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e });
                }),
                e.on(T.yq.VoiceActivityDetectorError, (e) => {
                    ej.warn(`voiceactivitydetectorerror event: ${e}`),
                        (0, x.QW)({ type: x.iy.NOISE_CANCELLER_ERROR, underlyingError: nc(e) }),
                        eT.default.track(ek.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        v.h.dispatch({
                            type: "AUDIO_SET_MODE",
                            context: eB.x.DEFAULT,
                            mode: ek.TBI.VOICE_ACTIVITY,
                            options: { ...ni(eB.x.DEFAULT).modeOptions, vadUseKrisp: !1 },
                        }),
                        v.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e });
                }),
                e.on(T.yq.SdpError, (e, t, n, r) => {
                    eT.default.track(ek.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: r });
                }),
                e.on(T.yq.VideoState, (t) => {
                    v.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                }),
                e.setBitRate(eO.A.bitrate),
                e.applyVideoQualityMode(eP.A.mode),
                (0, ev.isWindows)() &&
                    ta.supports(eB.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                    ta.setAsyncVideoInputDeviceInit((0, j.v)("setupMediaEngine").enabled);
        }),
        ta.on(T.bg.DeviceChange, (e, t, n) => {
            tE.stop(),
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
            if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                try {
                    await eS.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                } catch (t) {
                    "number" == typeof t.status && (e = t.status);
                }
            ej.warn(`Watchdog timeout, report submission status: ${e ?? 200}`),
                eT.default.track(ek.HAw.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        ta.on(T.bg.VideoInputInitialized, (e) => {
            eT.default.track(ek.HAw.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired
                    ? null
                    : Math.round(e.timeToFirstFrame * ey.A.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: ew.A.getMediaSessionId(),
                rtc_connection_id: ew.A.getRTCConnectionId(),
            });
        }),
        ta.on(T.bg.AudioInputInitialized, (e) => {
            eT.default.track(ek.HAw.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * ey.A.Millis.SECOND),
                rtc_connection_id: ew.A.getRTCConnectionId(),
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
            a?.desktopSource?.id === e && (null != t && s?.desktopSource?.soundshareId !== t && C.c1(t), (a = null));
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
            eT.default.track(ek.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
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
                        version: e8++,
                        context: n.context,
                    };
                }),
            });
        }),
        ta.on(T.bg.VoiceQueueMetrics, (e) => {
            let t = ir(e);
            null !== t && eT.default.track(ek.HAw.VOICE_QUEUE_METRICS, t);
        }),
        ta.setOnVideoContainerResized((e, t, n) => {
            v.h.wait(() =>
                v.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
            );
        }),
        tn(),
        ro(),
        ru(),
        ta.supports(eB.O5.ASYNC_CLIPS_SOURCE_DEINIT) &&
            ta.setAsyncClipsSourceDeinit((0, Y.V)("setupMediaEngine").enabled),
        o.reset(),
        (0, ex.w)().then((e) => {
            null != e && ((t1 = e.gpu_brand), (t2 = e.has_intel_hybrid_igpu));
        }),
        ta.on(T.bg.SystemMicrophoneModeChange, (e) => {
            (f = e), ta.eachConnection(nh);
        });
}
function nE() {
    return (0, ev.isWindows)() && A().satisfies(N.A?.os.release, eU.yg);
}
function ng() {
    return (0, ev.isWindows)() && A().satisfies(N.A?.os.release, eU.fG);
}
function nA() {
    return (0, ev.isMac)() && ta.supports(eB.O5.SCREEN_CAPTURE_KIT) && A().satisfies(N.A?.os.release, eU.e);
}
function nI() {
    return (
        (0, ev.isWindows)() &&
        ta.supports(eB.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        ta.supports(eB.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nT() {
    return ta.supports(eB.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function nS() {
    let e = S.w.get("audio");
    null != e && (S.w.set(eY, { [eB.x.DEFAULT]: e }), S.w.remove("audio")),
        (to = S.w.get(eY) ?? {}),
        E().each(to, (e) => {
            E().defaultsDeep(e, ti()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, eb.OH)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== eW &&
                    ((e.vadUseKrispSettingVersion = eW), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                e.vadThrehsoldMigrated ||
                    ((e.vadThrehsoldMigrated = !0), e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = eJ)),
                ta.supports(eB.O5.SIDECHAIN_COMPRESSION) &&
                    e.sidechainCompressionSettingVersion < e$ &&
                    ((e.sidechainCompressionSettingVersion = e$), (e.sidechainCompression = !0)),
                (0, ev.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== ez &&
                      ((e.ncUseKrispjsSettingVersion = ez), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== eK &&
                      ((e.ncUseKrispSettingVersion = eK), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
        }),
        nN();
}
function ny(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eB.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = nr(t);
    return Object.assign(r, e), !__OVERLAY__ && n && S.w.set(eY, to), r;
}
function nv() {
    S.w.remove(eY), location.reload();
}
function nN() {
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
function nC() {
    tu || ta.enable().then(() => v.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nb(e) {
    return { id: eB.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
}
function nR(e, t) {
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
function nO(e, t) {
    let n = e[t] ?? e[eB.dx] ?? E()(e).values().first();
    return null != n ? n.id : t;
}
function nD(e) {
    let t = tp;
    if (((tp = nR(e, eH.intl.string(eH.t["/QIjDA"]))), !E().isEqual(tp, t))) {
        let e = ni(),
            t = nO(tp, e.inputDeviceId);
        ta.setAudioInputDevice(t), ta.eachConnection(nh);
    }
}
function nL(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nw(e) {
    ta.eachConnection((t) => {
        t.context === eB.x.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function nx(e) {
    let t = th;
    if (((th = nR(e, eH.intl.string(eH.t.xlUg0v))), !E().isEqual(th, t))) {
        let e = ni(),
            n = nO(th, e.outputDeviceId);
        ta.setAudioOutputDevice(n);
        let r = nL(t),
            i = nL(th);
        r !== i && nw(i);
    }
}
function nM(e) {
    tD = e.length > 0;
    let t = tm;
    if (((tm = nR(e, eH.intl.string(eH.t.WKWARY))), tS && !E().isEqual(tm, t))) {
        let e = void 0 !== tm[ty],
            n = ty === eB.dx && t[eB.dx]?.disabled;
        nu(e || n);
    }
}
function nP() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = eE.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let r = n === eF.W.USER ? eB.x.DEFAULT : eB.x.STREAM,
            i = r === eB.x.STREAM ? eB.Cn : eB.Hz,
            s = t[n] ?? {},
            { localMutes: a, localVolumes: o } = ni(r);
        for (let [e, t] of Object.entries(s))
            null == (0, em.tM)(r, e) &&
                (t.muted ? (a[e] = !0) : delete a[e],
                t.volume !== i ? (o[e] = t.volume) : delete o[e],
                ta.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, r));
        if (e)
            for (let e of new Set([...Object.keys(a), ...Object.keys(o)]))
                null == s[e] &&
                    (delete a[e],
                    delete o[e],
                    ta.eachConnection((t) => {
                        t.setLocalVolume(e, i), t.setLocalMute(e, !1);
                    }, r));
        ny({ localMutes: a, localVolumes: o }, r);
    }
}
function nk(e) {
    if (null == r)
        return (
            ej.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
            { soundshareId: null, soundshareSession: "" }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : eS.A.getAudioPid(e),
            n = "";
        return null != t && (n = eS.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n };
    }
}
function nU(e, t) {
    (0, ev.isWindows)() &&
        e > 1 &&
        C.GH(e, { soundshare_session: t }).then((t) => {
            null == t ||
                k.Ay.shouldContinueWithoutElevatedProcessForPID(e) ||
                v.h.wait(() => {
                    v.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: t });
                });
        });
}
function nG(e) {
    (i = e.sessionId), (tg = !1), (tT = !1);
    let t = ni();
    if (
        (nI() && (nT() ? rV(eB.rB.AUTOMATIC) : t.automaticAudioSubsystem && rB()),
        ta.supports(eB.O5.OFFLOAD_ADM_CONTROLS))
    ) {
        let e = !1;
        (0, ev.isDesktop)()
            ? (e = (0, B.i)({ location: "handleConnectionOpen" }).enabled)
            : ((0, ev.isIOS)() || (0, ev.isAndroid)()) && (e = (0, H.Y)({ location: "handleConnectionOpen" }).enabled),
            ta.setOffloadAdmControls(e);
    }
    (0, eA.Lb)({ location: "MediaEngineStore", autoTrackExposure: !1 }) &&
        null !== t.mostRecentlyRequestedVoiceFilter &&
        (0, ev.isDesktop)() &&
        (eI.A.getLastInitAttemptMayHaveCrashed()
            ? (v.h.dispatch({ type: "AUDIO_SET_SELF_MUTE", mute: !0, context: eB.x.DEFAULT, playSoundEffect: !0 }),
              ny({ mostRecentlyRequestedVoiceFilter: null }))
            : n(342887).md()),
        nP();
}
function nF(e) {
    let { mediaEngineState: t } = e;
    (to = t.settingsByContext),
        (tp = t.inputDevices),
        (th = t.outputDevices),
        (t0 = t.appSupported),
        (tk = t.krispModuleLoaded),
        (c = t.krispVersion),
        (td = t.goLiveContext);
}
function nV() {
    i = null;
}
function nB() {
    if ((0, ev.isWeb)()) {
        let e = en.f1.getCurrentConfig({ location: "MediaEngineStore handlePostConnectionOpen" });
        e.loadWasmModule && e.preload && r.startDavePreload();
    }
    return !1;
}
function nH(e) {
    switch (e.state) {
        case ek.S7L.CONNECTING:
            nC();
            break;
        case ek.S7L.RTC_CONNECTING:
            (tw = !1), (l = void 0), (u = void 0), (tL = !1), (t6 = !1), t4.stop(), tx.stop(), o.reset();
            break;
        case ek.S7L.RTC_CONNECTED:
            nu();
            break;
        case ek.S7L.DISCONNECTED:
            nX(), nQ();
    }
}
function nj(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (tg = t.mute || t.suppress), (tT = t.deaf), ta.eachConnection(no);
            let e = null != t.guildId && null != t.channelId && null != tj && tj !== t.channelId,
                n = !tM && null == t.channelId;
            return nu(!e && !n && tS), (tj = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== eR.default.getId() || null != ew.A.getChannelId() || nu(!1, null), e;
    }, !1);
}
function nY(e) {
    let { mute: t } = e;
    (tA = t), ta.eachConnection(no);
}
function nW(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = ni(t);
    if (t === eB.x.DEFAULT && (e_.A.requestPermission(eG.iL.AUDIO), tI)) return !1;
    (r = !i && !r) || (i = !1), n || (tN = !0), ny({ mute: r, deaf: i }, t), ta.eachConnection(no);
}
function nK(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    ny({ mute: n }, t), r || (tN = !0), ta.eachConnection(no);
}
function nz(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== eF.oD.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    nP(!0);
}
function n$(e) {
    let { context: t } = e;
    ny({ deaf: !ni(t).deaf }, t), ta.eachConnection(no);
}
function nq(e) {
    let { context: t, userId: n } = e;
    if (n === eR.default.getId()) return;
    let { localMutes: r } = ni(t);
    r[n] ? delete r[n] : (r[n] = !0),
        ny({ localMutes: r }, t),
        ta.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nZ(e) {
    let { context: t, userId: n, videoToggleState: r, persist: i, isAutomatic: s } = e;
    h()(!(i && s), "These are not allowed to both be true.");
    let a = r === ek.bb8.DISABLED,
        { disabledLocalVideos: o } = ni(t),
        l = o[n] ?? !1,
        u = tX.has(n),
        c = r === ek.bb8.AUTO_ENABLED || r === ek.bb8.MANUAL_ENABLED;
    ej.info(`disableVideo=${a} currentlyDisabled=${l} currentlyAutoDisabled=${u}, isVideoShown=${c}`),
        h()(!(u && !l), "If you are auto-disabled, then you are also disabled.");
    let d = a !== l,
        _ = t === eB.x.DEFAULT,
        f = s && d && _,
        p = i && d && _;
    ej.info(`changed=${d} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${f} isManualToggleByUser=${p}`);
    let { videoToggleStateMap: m } = ni(t);
    if (
        (m[n] === ek.bb8.AUTO_PROBING &&
            r === ek.bb8.AUTO_ENABLED &&
            (0, ed.A)(n, a ? eB.Al.AUTO_DISABLE : eB.Al.AUTO_ENABLE, c),
        (m[n] = r),
        ny({ videoToggleStateMap: m }, t, i),
        r === ek.bb8.AUTO_PROBING
            ? ew.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
            : ew.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
        tQ ||
            (ej.info(`isAutoDisableAllowed=${tQ} - disabling VideoHealthManager`),
            ew.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
        f)
    ) {
        if ((!a && !u) || (a && !tQ)) return;
        (0, ed.A)(n, a ? eB.Al.AUTO_DISABLE : eB.Al.AUTO_ENABLE, c), a ? tX.add(n) : tX.delete(n);
    } else
        p &&
            (u && !a
                ? (ej.info("disallowing auto-disable for this session because of manual override by user"),
                  (tQ = !1),
                  ew.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                  (0, ed.A)(n, eB.Al.MANUAL_REENABLE, c))
                : (0, ed.A)(n, a ? eB.Al.MANUAL_DISABLE : eB.Al.MANUAL_ENABLE, c));
    _ && !a && tX.delete(n),
        a ? (o[n] = !0) : delete o[n],
        ny({ disabledLocalVideos: o }, t, i),
        ta.eachConnection((e) => e.setLocalVideoDisabled(n, o[n] ?? !1), t);
}
function nX() {
    if (0 === tX.size) return;
    let e = eB.x.DEFAULT,
        { disabledLocalVideos: t } = ni(e);
    tX.forEach((n) => {
        h()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            ta.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tX.clear(),
        ny({ disabledLocalVideos: t }, e, !1);
}
function nQ() {
    let e = eB.x.DEFAULT,
        { videoToggleStateMap: t } = ni(e);
    for (let [e, n] of Object.entries(t)) n === ek.bb8.AUTO_PROBING && delete t[e];
    ny({ videoToggleStateMap: t }, e, !1);
}
function nJ(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === eR.default.getId()) return;
    let i = t === eB.x.STREAM ? eB.Cn : eB.Hz,
        { localVolumes: s } = ni(t);
    r === i ? delete s[n] : (s[n] = r), ny({ localVolumes: s }, t), ta.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function n0(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: s } = ni(t);
    (s[n] = { left: r, right: i }), ny({ localPans: s }, t), ta.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function n1(e) {
    let { context: t, mode: n, options: r } = e;
    ny({ mode: n, modeOptions: { ...r, updatedAt: Date.now() } }, t), ta.eachConnection(ns);
}
function n2(e) {
    let { volume: t } = e;
    ny({ inputVolume: na(t) }), ta.setInputVolume(t);
}
function n3(e) {
    let { volume: t } = e;
    ny({ outputVolume: t }), ta.setOutputVolume(t);
}
function n6(e) {
    let { id: t } = e;
    (t = nO(tp, t)),
        (t_ = performance.now()),
        ny({ inputDeviceId: t }),
        ta.setAudioInputDevice(t),
        ta.eachConnection(nh),
        (l = void 0),
        (u = void 0),
        t4.stop(),
        (t6 = !1);
    let { resetSilenceWarningOnDeviceChange: n } = er.A.getConfig({
        location: "MediaEngineStore.handleSetInputDevice",
    });
    n && ((tL = !1), o.reset());
}
function n4(e) {
    let { id: t } = e;
    ny({ outputDeviceId: (t = nO(th, t)) }), ta.setAudioOutputDevice(t);
}
function n5(e) {
    let { id: t } = e;
    ny({ videoDeviceId: (t = nO(tm, t)) }), nu();
}
function n7(e) {
    let { inputProfile: t } = e;
    ny({ activeInputProfile: t });
    let n = ni();
    ta.eachConnection((e) => {
        ns(e), nh(e);
    }),
        ta.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        rl();
}
function n8(e) {
    return tc !== e.required && ((tc = e.required), e.required || ta.interact(), !0);
}
function n9(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    nD(t), nx(n), nM(r);
}
function re(e) {
    let { inputVolume: t, outputVolume: n } = e;
    ny({ inputVolume: na(t), outputVolume: n });
}
function rt(e) {
    let t = ni(),
        n = ta.getAudioSubsystem(),
        i = ta.getAudioLayer(),
        s = nO(tp, t.inputDeviceId),
        a = tp[s]?.name,
        o = (0, ep.A)(t.noiseCancellation, r.getSystemMicrophoneMode(), { location: "trackVoiceProcessing" });
    eT.default.track(ek.HAw.VOICE_PROCESSING, {
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
    ta.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), rl(), rt(e.location);
}
function rr(e) {
    rs(e.enabled);
}
function ri(e) {
    let t = ny({ sidechainCompressionStrength: e.strength });
    ta.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function rs(e) {
    let t = ny({ sidechainCompression: e });
    ta.setSidechainCompression(t.sidechainCompression);
}
function ra(e) {
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
        r = eD.A.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        s = eD.A.hasNoiseSuppression(n) || e.noiseSuppression,
        a = n_(eD.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        o = e.noiseCancellation,
        l = null !== tF,
        u = tJ.has("voice_filter") && 1 === tJ.size;
    ta.setLoopback(t, {
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
    if (!ta.supports(eB.O5.VAAPI)) return;
    let e = 4098;
    if (window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let t = await window.DiscordNative.processUtils.getSystemInfo();
    (t.electronGPUInfo?.gpuDevice ?? []).some((t) => t.vendorId === e) &&
        ((t8 = !0), (t7 = ta.supports(eB.O5.GAMESCOPE_CAPTURE)));
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
    (0, ev.isWeb)() || ((tG = e.enabled), ta.setNoiseCancellationEnableStats?.(e.enabled));
}
function rh(e) {
    ny({ silenceWarning: e.enabled });
}
function rm(e) {
    ta.setDebugLogging(e.enabled);
}
function rE(e) {
    let { level: t } = e;
    (d = t), ef.A.setKrispSuppressionLevel(t);
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
function rN(e) {
    let { inputDetected: t } = e;
    if (null == t) return !1;
    if (((tw = !0 !== tL && !t), t)) (tL = !0), (t6 = !1), t4.stop(), tx.stop();
    else if (ni().mode === ek.TBI.VOICE_ACTIVITY && tL) {
        let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = er.A.getConfig({
            location: "MediaEngineStore.handleInputDetected",
        });
        e &&
            t4.start(e3, () => {
                eT.default.track(ek.HAw.HARDWARE_MUTE_GUESSED, {
                    input_device_name: tp[nO(tp, ni().inputDeviceId)]?.name,
                    rtc_connection_id: ew.A.getRTCConnectionId(),
                }),
                    (t6 = !0),
                    r.emitChange();
            }),
            null != t &&
                tx.start(t * ey.A.Millis.MINUTE, () => {
                    (tL = !1), o.reset();
                });
    }
}
function rC(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === tI) return !1;
    (tI = n), ta.eachConnection(no);
}
function rb(e) {
    let { state: t, permissionType: n } = e,
        r = t === eG.hL.ACCEPTED;
    switch (n) {
        case eG.iL.AUDIO:
            (tq = !0), ta.eachConnection(no);
            break;
        case eG.iL.CAMERA:
            !r && tS && nu(!1);
            break;
        default:
            return !1;
    }
}
function rR() {
    return tk || !1;
}
async function rO() {
    try {
        await eC.Ay.ensureModule("discord_krisp");
        let e = eC.Ay.requireModule("discord_krisp");
        (tk = !0),
            (c = e.getSdkVersion?.()),
            (d = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (tU = e), r.emitChange();
            }),
            r.emitChange();
    } catch (t) {
        ej.warn(`Failed to load Krisp module: ${t.message}`), eN.A.captureException(t);
        let e = eB.CO.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eB.CO.INITIALIZED : n;
        }
        eT.default.track(ek.HAw.VOICE_PROCESSING, { noise_canceller_error: e }), ny({ noiseCancellation: !1 });
    } finally {
        tP = !1;
    }
}
function rD() {
    return (0, ev.isWindows)() || (0, ev.isLinux)() || (0, ev.isMac)();
}
function rL() {
    !rD() || __OVERLAY__ || tP || tk
        ? (0, ev.isWeb)() && ta.supports(eB.O5.NOISE_CANCELLATION)
            ? ((tk = !0), r.emitChange())
            : (0, ev.isWeb)() && ny({ noiseCancellation: !1 })
        : ((tP = !0), rO());
}
async function rw() {
    try {
        let e,
            t = "",
            n = !1,
            r = URL.parse(e5);
        if (null === r) return void ej.log("OpenH264 URL ", r, " is invalid");
        let i = r.pathname.split("/"),
            s = i[i.length - 1].replace(".bz2", "");
        try {
            let t = await eC.Ay.downloadOpenH264(e5, s, e7, (e) => {
                ej.log("OpenH264 download status", e);
            });
            ej.log("OpenH264 is ready", t), (n = t.fetchedFromNetwork), (e = !0);
        } catch (n) {
            ej.error("OpenH264 download failed", n), (t = n.message), (e = !1);
        }
        if (
            (eT.default.track(ek.HAw.VIDEO_OPENH264_DOWNLOADED, {
                success: e,
                fetched_from_network: n,
                error_message: t,
            }),
            e)
        ) {
            let e = await eC.Ay.cleanupUnusedOpenH264Files([s]);
            ej.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        ej.error("OpenH264 download failed", e);
    }
}
function rx() {
    (0, ev.isLinux)() && rw();
}
function rM(e) {
    let { enabled: t } = e;
    eT.default.track(ek.HAw.VOICE_FILTER_PLAYBACK_TOGGLED, { active_voice_filter_id: tF ?? null, enabled: t }),
        ny({ voiceFilterPlaybackEnabled: t });
}
function rP(e) {
    let { newVoiceFilterId: t } = e;
    ny({ mostRecentlyRequestedVoiceFilter: t }), ta.eachConnection((e) => e.setVoiceFilterId(t));
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
    ny({ bypassSystemInputProcessing: t }), ta.setAudioInputBypassSystemProcessing(t), rt(e.location);
}
function rF(e) {
    rV(e.subsystem);
}
function rV(e) {
    e === eB.rB.AUTOMATIC
        ? (ny({ automaticAudioSubsystem: !0 }), rB())
        : (ny({ automaticAudioSubsystem: !1 }), ta.setAudioSubsystem(e));
}
function rB() {
    ta.queueAudioSubsystem(eB.rB.EXPERIMENTAL);
}
function rH(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && nu(i, null), null != t || null == n)) {
        tM = !1;
        return;
    }
    if (tM) return;
    tM = !0;
    let s = ni();
    (s.mute || s.deaf) && (ny({ deaf: !1, mute: !1 }), ta.eachConnection(no));
}
function rj(e) {
    let { application: t } = e;
    tl.add(t.id);
}
function rY(e) {
    let { application: t } = e;
    tl.delete(t.id);
}
function rW(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (tu = !1), ta.eachConnection(no);
                break;
            case "video":
                nu(!1);
        }
}
function rK(e) {
    (tu = e.enabled), e.unmute && ny({ mute: !1, deaf: !1 }), ta.eachConnection(no);
}
function rz(e) {
    let { enabled: t } = e;
    e_.A.requestPermission(eG.iL.CAMERA), nu(t);
}
function r$(e) {
    let { sourceId: t, applicationName: n, quality: i } = e;
    if (!(0, D.Ao)() || null == N.A) return !1;
    let s = null,
        o = null,
        l = eS.A.getPidFromDesktopSource(t);
    ({ soundshareId: s, soundshareSession: o } = nk(l));
    let u = { desktopSource: { id: t, sourcePid: l, soundshareId: s, soundshareSession: o }, quality: i };
    null != a &&
        (ta.setClipsSource(null),
        (0, ev.isWindows)() && null != a.desktopSource.soundshareId && C.c1(a.desktopSource.soundshareId)),
        null != s && nU(s, o),
        (a = u);
    let c = ne("MediaEngineStore clips"),
        d = ni().videoHook;
    ta.setClipsSource({
        desktopDescription: {
            id: a.desktopSource.id,
            soundshareId: a.desktopSource.soundshareId,
            useVideoHook: d,
            useGraphicsCapture: nE(),
            useCaptureDeviceForEncode: !1,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: nA(),
            videoHookStaleFrameTimeoutMs: eX,
            graphicsCaptureStaleFrameTimeoutMs: eQ,
            hdrCaptureMode: c,
        },
        quality: i,
        applicationName: n,
    });
}
function rq(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((a = null), ta.setClipsSource(null));
}
function rZ(e) {
    let { settings: t } = e;
    if (t?.desktopSettings != null) {
        let e = null,
            n = null,
            { sourceId: r, sound: i } = t.desktopSettings,
            s = t.context ?? eB.x.DEFAULT,
            a = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
            o = !1 === i ? null : eS.A.getPidFromDesktopSource(r);
        ev.isPlatformEmbedded &&
            !0 === i &&
            (({ soundshareId: e, soundshareSession: n } = nk(o)), null != e && nU(e, n)),
            nl(s),
            nu(s === eB.x.STREAM && tS, {
                desktopSource: { id: r, sourcePid: o, soundshareId: e, soundshareSession: n },
                quality: { resolution: a.resolution, frameRate: a.frameRate },
            });
    } else if (t?.cameraSettings != null) {
        let e = t.context ?? eB.x.DEFAULT,
            { videoDeviceGuid: n, audioDeviceGuid: r } = t.cameraSettings,
            i = e === eB.x.STREAM && tS,
            s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
        nu(i, {
            cameraSource: { videoDeviceGuid: n, audioDeviceGuid: r },
            quality: { resolution: s.resolution, frameRate: s.frameRate },
        });
    } else nu(tS, null);
}
function rX(e) {
    let { section: t } = e;
    return t === ek.nc_.VOICE && nC(), !1;
}
function rQ() {
    return ta.eachConnection(nh), !1;
}
function rJ(e) {
    let { enabled: t } = e,
        n = ny({ aecDumpEnabled: t });
    ta.setAecDump(n.aecDumpEnabled);
}
function r0(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (to = Object.values(eB.x).reduce((e, n) => {
        let r = n,
            i = ti();
        return (e[r] = E().merge(i, t[r])), e;
    }, {})),
        S.w.set(eY, to),
        nN();
}
function r1(e) {
    let { state: t } = e,
        n = P.A.isEnabled();
    if (t === ek.g6G.BACKGROUND && tS && !n) (tO = !0), nu(!1);
    else {
        if (t !== ek.g6G.ACTIVE || !tO) return !1;
        (tO = !1), nu(!0);
    }
    return !0;
}
function r2(e) {
    ta.eachConnection((t) => t.setBitRate(e.bitrate));
}
function r3() {
    if ((!tS && null == s) || null != ew.A.getRTCConnectionId()) return !1;
    nu(!1, null);
}
function r6() {
    return !!tY && ((tY = !1), !0);
}
function r4(e) {
    ta.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function r5(e) {
    let { settings: t } = e;
    ta.applyMediaFilterSettings(t).finally(() => {
        (tW = !1), r.emitChange();
    });
}
function r7() {
    tW = !0;
}
function r8() {
    tW = !1;
}
function r9(e) {
    t3 = e.enabled;
}
function ie() {
    if ((0, ev.isDesktop)() && ev.isPlatformEmbedded && !t9) {
        t9 = !0;
        let e = async () => {
            let t = await new Promise((e) => {
                eC.Ay.pollQueueMetrics((t) => {
                    e(t);
                });
            });
            t.periodMs = eB.tl;
            let n = ir(t);
            null !== n && eT.default.track(ek.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, eB.tl);
        };
        setTimeout(e, eB.tl);
    }
}
class it extends I.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        nm(),
            nS(),
            rL(),
            rx(),
            nQ(),
            ie(),
            (0, ev.isWindows)() && ev.isPlatformEmbedded && nd(),
            (t0 = {
                [eB.O5.VIDEO]: ta.supports(eB.O5.VIDEO),
                [eB.O5.DESKTOP_CAPTURE]: ta.supports(eB.O5.DESKTOP_CAPTURE),
                [eB.O5.HYBRID_VIDEO]: ta.supports(eB.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eR.default, eO.A, eD.A, eL.A, R.A, M.A, ew.A, k.Ay, eh.A, eE.A, eM.default, eP.A, eI.A);
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
        return ta.supports(eB.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return rR();
    }
    isNoiseCancellationError() {
        return tY;
    }
    isAutomaticGainControlSupported() {
        return ta.supports(eB.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nT() && (ta.supports(eB.O5.LEGACY_AUDIO_SUBSYSTEM) || ta.supports(eB.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return ta.supports(eB.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === ta.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return rR();
    }
    isAecDumpSupported() {
        return ta.supports(eB.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return ta.supports(eB.O5.VIDEO) && ta.supports(eB.O5.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        return eL.A.getChannel(tj)?.type !== ek.rbe.GUILD_STAGE_VOICE && e6 && Z.A.simulcastEnabled();
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
        return tG;
    }
    isEnabled() {
        return tu;
    }
    isMute() {
        return this.isSelfMute() || tg;
    }
    isDeaf() {
        return this.isSelfDeaf() || tT;
    }
    hasContext(e) {
        return null != to[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eB.x.DEFAULT;
        return e === eB.x.DEFAULT && tA;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eB.x.DEFAULT;
        return (
            !this.isEnabled() ||
            ni(e).mute ||
            !e_.A.didHavePermission(eG.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eB.x.DEFAULT && tI)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tN;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tN = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eB.x.DEFAULT,
            t = t6 && "voice_isolation" !== this.getSystemMicrophoneMode() && ni(e).mode === ek.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (eD.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return t3;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eB.x.DEFAULT;
        return !this.isSupported() || ni(e).deaf;
    }
    isVideoEnabled() {
        return tS && tD;
    }
    isVideoAvailable() {
        return Object.values(tm).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eB.x.STREAM;
        return td === e && null != s;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eB.x.STREAM;
        return td === e && null != s && s.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eB.x.DEFAULT;
        return e !== eR.default.getId() && (ni(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return ta.supports(eB.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eB.x.DEFAULT;
        return ni(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eB.x.DEFAULT;
        return ni(t).videoToggleStateMap[e] ?? ek.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eB.x.DEFAULT;
        return t === eB.x.DEFAULT && tX.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eB.x.DEFAULT;
        return e === eB.x.DEFAULT && tX.size > 0;
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
        return td;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return t_;
    }
    isH264MfDecodeAvailable() {
        return tf;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eB.x.DEFAULT,
            n = ni(t).localPans[e];
        return null != n ? n : eZ;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eB.x.DEFAULT,
            n = t === eB.x.STREAM ? eB.Cn : eB.Hz,
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
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eB.x.DEFAULT;
        return ni(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eB.x.DEFAULT;
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
            E().each(to, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === ek.TBI.PUSH_TO_TALK && tl.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nO(tp, ni().inputDeviceId);
    }
    getOutputDeviceId() {
        return nO(th, ni().outputDeviceId);
    }
    getVideoDeviceId() {
        return nO(tm, ni().videoDeviceId);
    }
    getInputDevices() {
        return tp;
    }
    getOutputDevices() {
        return th;
    }
    getVideoDevices() {
        return tm;
    }
    getEchoCancellation() {
        let e = ni();
        return eD.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return ta.supports(eB.O5.SIDECHAIN_COMPRESSION) && ni().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return ni().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return ni().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tz && tz;
    }
    getLoopback() {
        return tJ.size > 0;
    }
    getLoopbackReasons() {
        return tJ;
    }
    getNoiseSuppression() {
        let e = ni();
        return eD.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = ni();
        return eD.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return ni().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return ni().noiseCancellation;
    }
    getHardwareEncoding() {
        return e6;
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
        return nI() && ni().automaticAudioSubsystem ? eB.rB.AUTOMATIC : ta.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return ta.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return ni().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eV.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eB.x.DEFAULT;
        return ni(e);
    }
    getState() {
        return {
            settingsByContext: to,
            inputDevices: tp,
            outputDevices: th,
            appSupported: t0,
            krispModuleLoaded: tk,
            krispVersion: c,
            krispSuppressionLevel: d,
            goLiveSource: s,
            goLiveContext: td,
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
        return ev.isPlatformEmbedded || this.getMode() !== ek.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        ta.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return tc;
    }
    getVideoHook() {
        return ni().videoHook;
    }
    supportsVideoHook() {
        return ta.supports(eB.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = ni().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return ta.supports(eB.O5.EXPERIMENTAL_SOUNDSHARE) && A().satisfies(N.A?.os.release, eU.$x);
    }
    supportsHookSoundshare() {
        return (0, ev.isWindows)() && ta.supports(eB.O5.SOUNDSHARE) && A().satisfies(N.A?.os.release, eU.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = ni().useSystemScreensharePicker,
            n = (0, ev.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return ta.supports(eB.O5.NATIVE_SCREENSHARE_PICKER);
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
        return tb;
    }
    getKrispModelOverride() {
        return _;
    }
    getKrispModels() {
        return tU;
    }
    getKrispVadActivationThreshold() {
        return ni().modeOptions.vadKrispActivationThreshold ?? eq;
    }
    hasActiveCallKitCall() {
        return t5;
    }
    setHasActiveCallKitCall(e) {
        t5 = e;
    }
    supportsScreenSoundshare() {
        return (0, ev.isMac)()
            ? ta.supports(eB.O5.SOUNDSHARE) && A().satisfies(N.A?.os.release, eU.P$) && nA()
            : (0, ev.isWindows)()
              ? ta.supports(eB.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, ev.isLinux)() && ta.supports(eB.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        return (0, ev.isWindows)()
            ? this.getInputDevices()[this.getInputDeviceId()]?.effects?.find((e) => e === e4)
            : (0, ev.isMac)() || (0, ev.isIOS)()
              ? f
              : void 0;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eB.x.DEFAULT,
            t = this.supports(eB.O5.VIDEO)
                ? [{ rid: "100", type: e === eB.x.DEFAULT ? eB.mI.VIDEO : eB.mI.SCREEN, quality: eB.Y4 }]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === eB.x.DEFAULT || this.goLiveSimulcastEnabled()) &&
                t.push({ rid: "50", type: e === eB.x.DEFAULT ? eB.mI.VIDEO : eB.mI.SCREEN, quality: eB.Cl }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: !1 };
        return (
            (0, ev.isWeb)() &&
                (e.fetchDave = en.f1.getCurrentConfig({
                    location: "MediaEngineStore fetchAsyncResources",
                }).loadWasmModule),
            ta.fetchAsyncResources(e)
        );
    }
    startDavePreload() {
        if (!tK && ((tK = !0), (0, ev.isWeb)())) {
            let e = { fetchDave: !0 };
            ta.fetchAsyncResources(e).catch((e) => {
                ej.warn("DAVE preload failed:", e), eN.A.captureException(e);
            });
        }
    }
    getSupportedSecureFramesProtocolVersion() {
        if ((0, ev.isWeb)()) {
            let { useWasmModule: e } = en.f1.getCurrentConfig({
                location: "MediaEngineStore getSupportedSecureFramesProtocolVersion",
            });
            if (!e) return 0;
        }
        let e = ta.getSupportedSecureFramesProtocolVersion();
        114 === e && (e = 1);
        let t = en.ex.getCurrentConfig({ location: "MediaEngineStore" }),
            n = en.a.getConfig({ location: "MediaEngineStore" });
        return (t.canSupportDaveProtocol || (n.allowOptIn && eh.A.getPersistentCodesEnabled())) &&
            e >= t.protocolVersionFloor
            ? e
            : 0;
    }
    hasClipsSource() {
        return null != a;
    }
    getGpuBrand() {
        return t1;
    }
}
function ir(e) {
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
(r = new it(v.h, {
    VOICE_CHANNEL_SELECT: rH,
    VOICE_STATE_UPDATES: nj,
    CONNECTION_OPEN: nG,
    CONNECTION_CLOSED: nV,
    POST_CONNECTION_OPEN: nB,
    RTC_CONNECTION_STATE: nH,
    AUDIO_SET_TEMPORARY_SELF_MUTE: nY,
    AUDIO_TOGGLE_SELF_MUTE: nW,
    AUDIO_SET_SELF_MUTE: nK,
    AUDIO_TOGGLE_SELF_DEAF: n$,
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
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rz,
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
    APP_STATE_UPDATE: r1,
    SET_CHANNEL_BITRATE: r2,
    SET_VAD_PERMISSION: rC,
    SET_NATIVE_PERMISSION: rb,
    SET_CHANNEL_VIDEO_QUALITY_MODE: r4,
    MEDIA_ENGINE_SET_AEC_DUMP: rJ,
    MEDIA_ENGINE_RESET_SETTINGS: r0,
    CHANNEL_DELETE: r3,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: r6,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: r5,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: r7,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: r8,
    USER_SETTINGS_PROTO_UPDATE: nz,
    CLIPS_INIT: r$,
    CLIPS_SETTINGS_UPDATE: rq,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: r9,
    VOICE_FILTER_REQUEST_SWITCH: rP,
    VOICE_FILTER_LOOPBACK_TOGGLE: rM,
    VOICE_FILTER_APPLIED: rU,
    VOICE_FILTER_DOWNLOAD_FAILED: rk,
    VOICE_FILTER_APPLY_FAILED: rk,
})),
    (o = new Q.A(ta, r));
let ii = r;
