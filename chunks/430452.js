"use strict";
let r, i, s, a, o, l, u, c, d, _, f;
n.d(t, { Ay: () => ir }), n(323874), n(14289), n(35956), n(321073), n(790599);
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
    et = n(140175),
    en = n(267378),
    er = n(801644),
    ei = n(223572),
    es = n(276006),
    ea = n(670470),
    eo = n(165479),
    el = n(896014),
    eu = n(765396),
    ec = n(75076),
    ed = n(674966),
    e_ = n(559633),
    ef = n(3527),
    ep = n(714763),
    eh = n(879172),
    em = n(617617),
    eE = n(340913),
    eg = n(996744),
    eA = n(28075),
    eI = n(954571),
    eT = n(353835),
    eS = n(927813),
    ey = n(723702),
    ev = n(728458),
    eN = n(837921),
    eC = n(350535),
    eb = n(961350),
    eR = n(131319),
    eO = n(347481),
    eD = n(734057),
    eL = n(383501),
    ew = n(851581),
    ex = n(287809),
    eM = n(117549),
    eP = n(652215),
    ek = n(502075),
    eU = n(765682),
    eG = n(355097),
    eF = n(509381),
    eV = n(731854),
    eB = n(985018);
let eH = new L.A("MediaEngineStore"),
    ej = "MediaEngineStore",
    eY = 4,
    eW = 1,
    eK = 1,
    ez = 1,
    e$ = 0.5,
    eq = { left: 1, right: 1 },
    eZ = 500,
    eX = 5 * eS.A.Millis.SECOND,
    eQ = -60,
    eJ = 100,
    e0 = 2 * eS.A.Millis.SECOND,
    e1 = 30 * eS.A.Millis.SECOND,
    e2 = +eS.A.Millis.MINUTE,
    e3 = !0,
    e6 = "deep_noise_suppression",
    e4 = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2",
    e5 = "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f",
    e7 = 0,
    e8 = null;
function e9() {
    if (!(0, ey.isIOS)() || null == e8) return !1;
    let e = e8();
    if (null == e || !e.startsWith("ARM64_")) return !1;
    let t = e.substring(6);
    return ("T" === t[0] || "S" === t[0]) && parseInt(t.substring(1), 10) >= 8122;
}
let te = null;
async function tt() {
    if (!(0, ey.isMac)() || N.A?.os.arch !== "arm64" || N.A?.processUtils?.getSystemInfo == null) {
        te = !1;
        return;
    }
    let e = await N.A.processUtils.getSystemInfo(),
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
        mode: eP.TBI.VOICE_ACTIVITY,
        modeOptions: {
            threshold: eQ,
            autoThreshold: ey.isPlatformEmbedded || __OVERLAY__,
            vadUseKrisp: !0,
            vadKrispActivationThreshold: e$,
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
        inputVolume: eV.Hz,
        outputVolume: eV.Hz,
        inputDeviceId: eV.dx,
        outputDeviceId: eV.dx,
        videoDeviceId: eV.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: ts.supports(eV.O5.VIDEO_HOOK),
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
        [eF.m.CUSTOM]: {},
        [eF.m.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [eF.m.STUDIO]: {
            mode: eP.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    ts = (0, T.hB)((0, T.WI)());
eH.enableNativeLogger(!0);
let ta = {},
    to = new Set([eV.x.DEFAULT]),
    tl = ts.supports(eV.O5.AUTO_ENABLE),
    tu = !1,
    tc = eV.x.STREAM,
    td = performance.now(),
    t_ = null,
    tf = { [eV.dx]: nC("No Input Devices") },
    tp = { [eV.dx]: nC("No Output Devices") },
    th = { [eV.dx]: nC("No Video Devices") },
    tm = new y.Ep(),
    tE = !1,
    tg = !1,
    tA = !1,
    tI = !1,
    tT = !1,
    tS = eV.qe,
    ty = eV.qe,
    tv = !1,
    tN = !1,
    tC = !1,
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
    tH = null,
    tj = !1,
    tY = !1,
    tW = !1,
    tK = null,
    tz = null,
    t$ = !1;
ed.A.hasPermission(eU.iL.AUDIO, { showAuthorizationError: !1 }),
    ed.A.hasPermission(eU.iL.CAMERA, { showAuthorizationError: !1 });
let tq = !1,
    tZ = new Set(),
    tX = tq,
    tQ = new Set(),
    tJ = {},
    t0 = null,
    t1 = null,
    t2 = !0,
    t3 = !1,
    t6 = new y.Ep(),
    t4 = !1,
    t5 = !1,
    t7 = !1,
    t8 = !1;
function t9(e) {
    return (0, q.p)({ location: e }).hdrCaptureMode;
}
async function ne() {
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
function nt() {
    return null != tz ? tz : "u" > typeof window ? (tz = ne().then((e) => ((tK = e), e))) : Promise.resolve(!1);
}
function nn() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT,
        t = ta[e];
    return null == t && ((t = tr()), (ta[e] = t)), t;
}
function nr() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT,
        t = nn(e),
        n = ti[t.activeInputProfile ?? eF.m.CUSTOM],
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
function ni(e) {
    let t = nr(e.context),
        n = t.mode;
    e.context === eV.x.DEFAULT && (0, et.N)(!1, !1);
    let { showPTTSpeakingIndicator: r } = eE.A.getConfig({ location: "setInputMode" }),
        i = r && n === eP.TBI.PUSH_TO_TALK;
    e.setInputMode(n, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: !!i || t.modeOptions.autoThreshold,
        vadUseKrisp: (!!i || t.modeOptions.vadUseKrisp) && rb(),
        vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? e$,
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        vadDuringPreProcess: t.modeOptions.vadDuringPreProcess ?? !1,
        pttReleaseDelay: Math.round(t.modeOptions.delay),
    });
}
function ns(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eV.Hz;
    return E().clamp(e, 0, t);
}
function na(e) {
    let t = nr(e.context),
        n = !tl || t.mute || t.deaf;
    e.context === eV.x.DEFAULT
        ? (n = n || tE || tg || tA || !ed.A.didHavePermission(eU.iL.AUDIO))
        : e.context === eV.x.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eV.x.DEFAULT && b.A.updateNativeMute();
}
function no(e) {
    e !== tc && (null != s && ts.setGoLiveSource(null, tc), (tc = e));
}
function nl() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tT,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
        n = s;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, ey.isWindows)() && C.c1(n.desktopSource.soundshareId),
            ts.setGoLiveSource(null, tc)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            ts.setGoLiveSource(null, tc),
        tT || e)
    ) {
        let t = nr().videoDeviceId;
        tT && t === eV.dx && ty === eV.dx && tS !== eV.qe ? (t = tS) : (ty = t),
            (tS = (tT = e) ? nR(th, t) : eV.qe),
            ts.setVideoInputDevice(tS);
    }
    if (((s = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = t9("MediaEngineStore go live"),
                i = nr().videoHook,
                s = nm(),
                a = s ? (nE() ? ek.zl : ek.eg) : 0,
                o = (0, ey.isWindows)() && (0, es.b)("updateVideo").enabled,
                l = !1;
            (0, ey.isWindows)() && t1 && (l = eo.q.getConfig({ location: "updateVideo" }).enabled),
                ts.setGoLiveSource(
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
                            allowScreenCaptureKit: ng(),
                            videoHookStaleFrameTimeoutMs: eZ,
                            graphicsCaptureStaleFrameTimeoutMs: eX,
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
            ts.setGoLiveSource(
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
function nu(e) {
    switch (e) {
        case eV.CO.CPU_OVERUSE:
            return x.B6.NoiseCancellerCpuOveruse;
        case eV.CO.FAILED:
            return x.B6.NoiseCancellerFailed;
        case eV.CO.VAD_CPU_OVERUSE:
            return x.B6.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function nc() {
    null === t_ &&
        ts
            .getCodecSurvey()
            .then((e) => {
                try {
                    let t = JSON.parse(e);
                    if (null == t || null == t.available_video_decoders) throw Error("decoder survey is not available");
                    t_ = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                } catch (e) {
                    eH.error("Failed to parse codec survey", e), (t_ = !1);
                }
            })
            .catch((e) => {
                eH.error("Failed to get codec survey", e), (t_ = !1);
            })
            .finally(() => {
                v.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
            });
}
function nd(e) {
    let t = (0, G.F)({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function n_(e, t) {
    e.setAutomaticGainControl(nd(t));
}
function nf(e, t) {
    let n = (0, ef.A)(t, r.getSystemMicrophoneMode(), { location: "setNoiseCancellation" });
    n !== t && eH.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: i } = (0, G.F)({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(i);
    let { noiseCancellationAfterProcessing: s, vadAfterWebrtc: a } = (0, J.$)({ location: "setNoiseCancellation" });
    e.setNoiseCancellationAfterProcessing(s), e.setVADAfterWebrtc(a);
}
function np(e) {
    let t = nr(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eO.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eO.A.hasNoiseSuppression(n) || t.noiseSuppression),
        n_(e, eO.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        nf(e, t.noiseCancellation),
        e.setVoiceFilterId(tG),
        (0, ey.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function nh() {
    tm.start(e1, () => {
        eH.error("Device enumeration timed out"), eI.default.track(eP.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
    }),
        ts.on(T.bg.Connection, (e) => {
            ni(e), na(e), np(e);
            let t = nr();
            e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
                e.setQoS(t.qos),
                (0, ey.isWindows)()
                    ? (e.setExperimentFlag(eV.fd.H265_HARDWARE_ONLY, !0),
                      nt().then((t) => {
                          e.setExperimentFlag(eV.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                      }))
                    : (0, ey.isMac)() && e.setExperimentFlag(eV.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                (0, ey.isWindows)() &&
                    (0, X.r)({ location: "setupMediaEngine" }).enabled &&
                    e.setExperimentFlag(eV.fd.USE_H264_MF_DECODER, !0);
            let n = eL.A.getGuildId(),
                {
                    muteBeforeProcessing: i,
                    pttBeforeProcessing: a,
                    skipEncode: o,
                } = (null != n ? K.A : W.A).getCurrentConfig(
                    { location: "setupMediaEngine", guildId: n ?? void 0 },
                    { autoTrackExposure: !0 },
                );
            i && e.setExperimentFlag(eV.fd.MUTE_BEFORE_PROCESSING, !0),
                a && e.setExperimentFlag(eV.fd.PTT_BEFORE_PROCESSING, !0),
                o && e.setExperimentFlag(eV.fd.SKIP_ENCODE, !0),
                (0, ee.J)({ location: "setupMediaEngine" }).enabled &&
                    e.setExperimentFlag(eV.fd.LOW_LATENCY_RATE_CONTROL, !0);
            let l = !1,
                u = !0;
            if (
                (e.setExperimentFlag(eV.fd.RESET_DECODER_ON_ERRORS, !0),
                l && e.setExperimentFlag(eV.fd.SOFTWARE_FALLBACK_ON_ERRORS, !0),
                u && e.setExperimentFlag(eV.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0),
                e.context === eV.x.STREAM)
            ) {
                let t = nD(tp);
                e.setSoundshareDiscardRearChannels(t);
                let { simulcastEnabled: n, lqStreamBitrate: r } = Z.A.getConfig();
                e.configureGoLiveSimulcast(n, r);
            }
            if ((0, ey.isWindows)())
                e.setExperimentFlag(eV.fd.SIGNAL_AV1, !0), e.setExperimentFlag(eV.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            else if ((0, ey.isMac)()) {
                if ((e.setExperimentFlag(eV.fd.SIGNAL_AV1_DECODE, !0), tn())) {
                    let { enabled: t } = (0, V.t)("MediaEngineStore");
                    t && e.setExperimentFlag(eV.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                }
            } else if ((0, ey.isLinux)()) e.setExperimentFlag(eV.fd.SIGNAL_AV1_DECODE, !0);
            else if ((0, ey.isIOS)() && e9()) {
                let { enabled: t } = (0, F.$)("MediaEngineStore");
                t &&
                    (e.setExperimentFlag(eV.fd.SIGNAL_AV1_DECODE, !0),
                    e.setExperimentFlag(eV.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
            }
            if ((0, ey.isWeb)()) {
                let { enabled: t } = (0, z.O)("MediaEngineStore");
                e.setExperimentFlag(eV.fd.BROWSER_HEVC, t);
            }
            if (
                ((0, ey.isWindows)() &&
                    t0?.startsWith("AMD") &&
                    (0, el.F)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eV.fd.WMF_GPU_ENCODE, !0),
                (0, ey.isWindows)() &&
                    t0?.startsWith("Intel") &&
                    (0, eu.J)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eV.fd.WMF_GPU_ENCODE, !0),
                (0, ey.isWindows)() &&
                    t0?.startsWith("Qualcomm") &&
                    (0, el.F)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eV.fd.WMF_GPU_ENCODE, !0),
                ts.setHasFullbandPerformance((0, w.A)()),
                e.setRemoteAudioHistory(1e3),
                (0, O.A)(r))
            ) {
                let { enableViewerClipping: t } = ea.A.getCurrentConfig(
                    { location: "f627ab_15" },
                    { autoTrackExposure: !1 },
                );
                e.setViewerSideClip(t), e.setClipsKeyFrameInterval(eV.X1);
            }
            for (let n of ((t = nr(e.context)), e.setPostponeDecodeLevel(eJ), Object.keys(t.localMutes)))
                n !== eb.default.getId() && e.setLocalMute(n, t.localMutes[n]);
            for (let n of Object.keys(t.localVolumes))
                n !== eb.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
            for (let n of Object.keys(t.localPans)) {
                let r = t.localPans[n];
                e.setLocalPan(n, r.left, r.right);
            }
            for (let n of Object.keys(t.disabledLocalVideos)) e.setLocalVideoDisabled(n, t.disabledLocalVideos[n]);
            e.on(T.yq.Speaking, (t, n, r, i) => {
                v.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: i });
            }),
                e.context === eV.x.DEFAULT &&
                    ((tN = !1),
                    (tC = !1),
                    e.on(T.yq.SpeakingWhileMuted, () => {
                        (tN = !0),
                            (tC = !0),
                            r.emitChange(),
                            tb.stop(),
                            tb.start(e0, () => {
                                (tC = !1), r.emitChange();
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
                        eI.default.track(eP.HAw.VIDEOHOOK_INITIALIZED, {
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
                    eH.warn(`noisecancellererror event: ${e}`),
                        (0, x.QW)({ type: x.iy.NOISE_CANCELLER_ERROR, underlyingError: nu(e) }),
                        (tj = !0),
                        eI.default.track(eP.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        v.h.dispatch({ type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: !0 }),
                        v.h.dispatch({ type: "AUDIO_SET_NOISE_CANCELLATION", enabled: !1 }),
                        v.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e });
                }),
                e.on(T.yq.VoiceActivityDetectorError, (e) => {
                    eH.warn(`voiceactivitydetectorerror event: ${e}`),
                        (0, x.QW)({ type: x.iy.NOISE_CANCELLER_ERROR, underlyingError: nu(e) }),
                        eI.default.track(eP.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        v.h.dispatch({
                            type: "AUDIO_SET_MODE",
                            context: eV.x.DEFAULT,
                            mode: eP.TBI.VOICE_ACTIVITY,
                            options: { ...nr(eV.x.DEFAULT).modeOptions, vadUseKrisp: !1 },
                        }),
                        v.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e });
                }),
                e.on(T.yq.SdpError, (e, t, n, r) => {
                    eI.default.track(eP.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: r });
                }),
                e.on(T.yq.VideoState, (t) => {
                    v.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                }),
                e.setBitRate(eR.A.bitrate),
                e.applyVideoQualityMode(eM.A.mode),
                (0, ey.isWindows)() &&
                    ts.supports(eV.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                    ts.setAsyncVideoInputDeviceInit((0, j.v)("setupMediaEngine").enabled);
        }),
        ts.on(T.bg.DeviceChange, (e, t, n) => {
            tm.stop(),
                v.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
        }),
        ts.on(T.bg.VolumeChange, (e, t) => {
            v.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
        }),
        ts.on(T.bg.DesktopSourceEnd, (e, t) => {
            v.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
        }),
        ts.on(T.bg.AudioPermission, (e) => {
            (t$ = !0), v.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
        }),
        ts.on(T.bg.VideoPermission, (e) => {
            v.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
        }),
        ts.on(T.bg.WatchdogTimeout, async () => {
            let e;
            if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                try {
                    await eT.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                } catch (t) {
                    "number" == typeof t.status && (e = t.status);
                }
            eH.warn(`Watchdog timeout, report submission status: ${e ?? 200}`),
                eI.default.track(eP.HAw.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        ts.on(T.bg.VideoInputInitialized, (e) => {
            eI.default.track(eP.HAw.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired
                    ? null
                    : Math.round(e.timeToFirstFrame * eS.A.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: eL.A.getMediaSessionId(),
                rtc_connection_id: eL.A.getRTCConnectionId(),
            });
        }),
        ts.on(T.bg.AudioInputInitialized, (e) => {
            eI.default.track(eP.HAw.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * eS.A.Millis.SECOND),
                rtc_connection_id: eL.A.getRTCConnectionId(),
            });
        }),
        ts.on(T.bg.ClipsRecordingRestartNeeded, () => {
            v.h.dispatch({ type: "CLIPS_RESTART" });
        }),
        ts.on(T.bg.ClipsInitFailure, (e, t) => {
            v.h.wait(() => {
                v.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t });
            });
        }),
        ts.on(T.bg.ClipsRecordingEnded, (e, t) => {
            a?.desktopSource?.id === e && (null != t && s?.desktopSource?.soundshareId !== t && C.c1(t), (a = null));
        }),
        ts.on(T.bg.NativeScreenSharePickerUpdate, (e, t) => {
            v.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
        }),
        ts.on(T.bg.NativeScreenSharePickerCancel, (e) => {
            v.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
        }),
        ts.on(T.bg.NativeScreenSharePickerError, (e) => {
            v.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
        }),
        ts.on(T.bg.AudioDeviceModuleError, (e, t, n) => {
            eI.default.track(eP.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
        }),
        ts.on(T.bg.VideoCodecError, (e) => {
            let t = "encode" === e.mode ? x.iy.VIDEO_ENCODE_ERROR : x.iy.VIDEO_DECODE_ERROR,
                n = { videoCodec: e.codecStandard, errorMessage: e.message };
            (0, x.QW)(
                t === x.iy.VIDEO_ENCODE_ERROR
                    ? { type: t, ...n, videoEncoder: e.implName }
                    : { type: t, ...n, videoDecoder: e.implName },
            );
        }),
        ts.on(T.bg.ConnectionStats, (e) => {
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
        ts.on(T.bg.VoiceQueueMetrics, (e) => {
            let t = it(e);
            null !== t && eI.default.track(eP.HAw.VOICE_QUEUE_METRICS, t);
        }),
        ts.setOnVideoContainerResized((e, t, n) => {
            v.h.wait(() =>
                v.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
            );
        }),
        tt(),
        ra(),
        rl(),
        ts.supports(eV.O5.ASYNC_CLIPS_SOURCE_DEINIT) &&
            ts.setAsyncClipsSourceDeinit((0, Y.V)("setupMediaEngine").enabled),
        o.reset(),
        (0, ew.w)().then((e) => {
            null != e && ((t0 = e.gpu_brand), (t1 = e.has_intel_hybrid_igpu));
        }),
        ts.on(T.bg.SystemMicrophoneModeChange, (e) => {
            (f = e), ts.eachConnection(np);
        });
}
function nm() {
    return (0, ey.isWindows)() && A().satisfies(N.A?.os.release, ek.yg);
}
function nE() {
    return (0, ey.isWindows)() && A().satisfies(N.A?.os.release, ek.fG);
}
function ng() {
    return (0, ey.isMac)() && ts.supports(eV.O5.SCREEN_CAPTURE_KIT) && A().satisfies(N.A?.os.release, ek.e);
}
function nA() {
    return (
        (0, ey.isWindows)() &&
        ts.supports(eV.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        ts.supports(eV.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nI() {
    return ts.supports(eV.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function nT() {
    let e = S.w.get("audio");
    null != e && (S.w.set(ej, { [eV.x.DEFAULT]: e }), S.w.remove("audio")),
        (ta = S.w.get(ej) ?? {}),
        E().each(ta, (e) => {
            E().defaultsDeep(e, tr()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, eC.OH)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== eY &&
                    ((e.vadUseKrispSettingVersion = eY), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                e.vadThrehsoldMigrated ||
                    ((e.vadThrehsoldMigrated = !0), e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = eQ)),
                ts.supports(eV.O5.SIDECHAIN_COMPRESSION) &&
                    e.sidechainCompressionSettingVersion < ez &&
                    ((e.sidechainCompressionSettingVersion = ez), (e.sidechainCompression = !0)),
                (0, ey.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== eK &&
                      ((e.ncUseKrispjsSettingVersion = eK), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== eW &&
                      ((e.ncUseKrispSettingVersion = eW), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
        }),
        nv();
}
function nS(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eV.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = nn(t);
    return Object.assign(r, e), !__OVERLAY__ && n && S.w.set(ej, ta), r;
}
function ny() {
    S.w.remove(ej), location.reload();
}
function nv() {
    let e = nr();
    ts.setAudioInputDevice(e.inputDeviceId),
        ts.setAudioOutputDevice(e.outputDeviceId),
        nl(),
        ts.setInputVolume(e.inputVolume),
        ts.setOutputVolume(e.outputVolume),
        ts.setAecDump(e.aecDumpEnabled),
        ts.setSidechainCompression(e.sidechainCompression),
        ts.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        ts.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing);
}
function nN() {
    tl || ts.enable().then(() => v.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nC(e) {
    return { id: eV.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
}
function nb(e, t) {
    if (0 === e.length) {
        let e = nC(t);
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
function nR(e, t) {
    let n = e[t] ?? e[eV.dx] ?? E()(e).values().first();
    return null != n ? n.id : t;
}
function nO(e) {
    let t = tf;
    if (((tf = nb(e, eB.intl.string(eB.t["/QIjDA"]))), !E().isEqual(tf, t))) {
        let e = nr(),
            t = nR(tf, e.inputDeviceId);
        ts.setAudioInputDevice(t), ts.eachConnection(np);
    }
}
function nD(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nL(e) {
    ts.eachConnection((t) => {
        t.context === eV.x.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function nw(e) {
    let t = tp;
    if (((tp = nb(e, eB.intl.string(eB.t.xlUg0v))), !E().isEqual(tp, t))) {
        let e = nr(),
            n = nR(tp, e.outputDeviceId);
        ts.setAudioOutputDevice(n);
        let r = nD(t),
            i = nD(tp);
        r !== i && nL(i);
    }
}
function nx(e) {
    tO = e.length > 0;
    let t = th;
    if (((th = nb(e, eB.intl.string(eB.t.WKWARY))), tT && !E().isEqual(th, t))) {
        let e = void 0 !== th[tS],
            n = tS === eV.dx && t[eV.dx]?.disabled;
        nl(e || n);
    }
}
function nM() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = em.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let r = n === eG.W.USER ? eV.x.DEFAULT : eV.x.STREAM,
            i = r === eV.x.STREAM ? eV.Cn : eV.Hz,
            s = t[n] ?? {},
            { localMutes: a, localVolumes: o } = nr(r);
        for (let [e, t] of Object.entries(s))
            null == (0, eh.tM)(r, e) &&
                (t.muted ? (a[e] = !0) : delete a[e],
                t.volume !== i ? (o[e] = t.volume) : delete o[e],
                ts.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, r));
        if (e)
            for (let e of new Set([...Object.keys(a), ...Object.keys(o)]))
                null == s[e] &&
                    (delete a[e],
                    delete o[e],
                    ts.eachConnection((t) => {
                        t.setLocalVolume(e, i), t.setLocalMute(e, !1);
                    }, r));
        nS({ localMutes: a, localVolumes: o }, r);
    }
}
function nP(e) {
    if (null == r)
        return (
            eH.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
            { soundshareId: null, soundshareSession: "" }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : eT.A.getAudioPid(e),
            n = "";
        return null != t && (n = eT.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n };
    }
}
function nk(e, t) {
    (0, ey.isWindows)() &&
        e > 1 &&
        C.GH(e, { soundshare_session: t }).then((t) => {
            null == t ||
                k.Ay.shouldContinueWithoutElevatedProcessForPID(e) ||
                v.h.wait(() => {
                    v.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: t });
                });
        });
}
function nU(e) {
    (i = e.sessionId), (tE = !1), (tI = !1);
    let t = nr();
    if (
        (nA() && (nI() ? rF(eV.rB.AUTOMATIC) : t.automaticAudioSubsystem && rV()),
        ts.supports(eV.O5.OFFLOAD_ADM_CONTROLS))
    ) {
        let e = !1;
        (0, ey.isDesktop)()
            ? (e = (0, B.i)({ location: "handleConnectionOpen" }).enabled)
            : ((0, ey.isIOS)() || (0, ey.isAndroid)()) && (e = (0, H.Y)({ location: "handleConnectionOpen" }).enabled),
            ts.setOffloadAdmControls(e);
    }
    (0, eg.Lb)({ location: "MediaEngineStore", autoTrackExposure: !1 }) &&
        null !== t.mostRecentlyRequestedVoiceFilter &&
        (0, ey.isDesktop)() &&
        (eA.A.getLastInitAttemptMayHaveCrashed()
            ? (v.h.dispatch({ type: "AUDIO_SET_SELF_MUTE", mute: !0, context: eV.x.DEFAULT, playSoundEffect: !0 }),
              nS({ mostRecentlyRequestedVoiceFilter: null }))
            : n(342887).md()),
        nM();
}
function nG(e) {
    let { mediaEngineState: t } = e;
    (ta = t.settingsByContext),
        (tf = t.inputDevices),
        (tp = t.outputDevices),
        (tJ = t.appSupported),
        (tP = t.krispModuleLoaded),
        (c = t.krispVersion),
        (tc = t.goLiveContext);
}
function nF() {
    i = null;
}
function nV() {
    if ((0, ey.isWeb)()) {
        let e = en.f1.getCurrentConfig({ location: "MediaEngineStore handlePostConnectionOpen" });
        e.loadWasmModule && e.preload && r.startDavePreload();
    }
    return !1;
}
function nB(e) {
    switch (e.state) {
        case eP.S7L.CONNECTING:
            nN();
            break;
        case eP.S7L.RTC_CONNECTING:
            (tL = !1), (l = void 0), (u = void 0), (tD = !1), (t3 = !1), t6.stop(), tw.stop(), o.reset();
            break;
        case eP.S7L.RTC_CONNECTED:
            nl();
            break;
        case eP.S7L.DISCONNECTED:
            nZ(), nX();
    }
}
function nH(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (tE = t.mute || t.suppress), (tI = t.deaf), ts.eachConnection(na);
            let e = null != t.guildId && null != t.channelId && null != tH && tH !== t.channelId,
                n = !tx && null == t.channelId;
            return nl(!e && !n && tT), (tH = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== eb.default.getId() || null != eL.A.getChannelId() || nl(!1, null), e;
    }, !1);
}
function nj(e) {
    let { mute: t } = e;
    (tg = t), ts.eachConnection(na);
}
function nY(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = nr(t);
    if (t === eV.x.DEFAULT && (ed.A.requestPermission(eU.iL.AUDIO), tA)) return !1;
    (r = !i && !r) || (i = !1), n || (tv = !0), nS({ mute: r, deaf: i }, t), ts.eachConnection(na);
}
function nW(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    nS({ mute: n }, t), r || (tv = !0), ts.eachConnection(na);
}
function nK(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== eG.oD.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    nM(!0);
}
function nz(e) {
    let { context: t } = e;
    nS({ deaf: !nr(t).deaf }, t), ts.eachConnection(na);
}
function n$(e) {
    let { context: t, userId: n } = e;
    if (n === eb.default.getId()) return;
    let { localMutes: r } = nr(t);
    r[n] ? delete r[n] : (r[n] = !0),
        nS({ localMutes: r }, t),
        ts.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nq(e) {
    let { context: t, userId: n, videoToggleState: r, persist: i, isAutomatic: s } = e;
    h()(!(i && s), "These are not allowed to both be true.");
    let a = r === eP.bb8.DISABLED,
        { disabledLocalVideos: o } = nr(t),
        l = o[n] ?? !1,
        u = tZ.has(n),
        c = r === eP.bb8.AUTO_ENABLED || r === eP.bb8.MANUAL_ENABLED;
    eH.info(`disableVideo=${a} currentlyDisabled=${l} currentlyAutoDisabled=${u}, isVideoShown=${c}`),
        h()(!(u && !l), "If you are auto-disabled, then you are also disabled.");
    let d = a !== l,
        _ = t === eV.x.DEFAULT,
        f = s && d && _,
        p = i && d && _;
    eH.info(`changed=${d} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${f} isManualToggleByUser=${p}`);
    let { videoToggleStateMap: m } = nr(t);
    if (
        (m[n] === eP.bb8.AUTO_PROBING &&
            r === eP.bb8.AUTO_ENABLED &&
            (0, ec.A)(n, a ? eV.Al.AUTO_DISABLE : eV.Al.AUTO_ENABLE, c),
        (m[n] = r),
        nS({ videoToggleStateMap: m }, t, i),
        r === eP.bb8.AUTO_PROBING
            ? eL.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
            : eL.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
        tX ||
            (eH.info(`isAutoDisableAllowed=${tX} - disabling VideoHealthManager`),
            eL.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
        f)
    ) {
        if ((!a && !u) || (a && !tX)) return;
        (0, ec.A)(n, a ? eV.Al.AUTO_DISABLE : eV.Al.AUTO_ENABLE, c), a ? tZ.add(n) : tZ.delete(n);
    } else
        p &&
            (u && !a
                ? (eH.info("disallowing auto-disable for this session because of manual override by user"),
                  (tX = !1),
                  eL.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                  (0, ec.A)(n, eV.Al.MANUAL_REENABLE, c))
                : (0, ec.A)(n, a ? eV.Al.MANUAL_DISABLE : eV.Al.MANUAL_ENABLE, c));
    _ && !a && tZ.delete(n),
        a ? (o[n] = !0) : delete o[n],
        nS({ disabledLocalVideos: o }, t, i),
        ts.eachConnection((e) => e.setLocalVideoDisabled(n, o[n] ?? !1), t);
}
function nZ() {
    if (0 === tZ.size) return;
    let e = eV.x.DEFAULT,
        { disabledLocalVideos: t } = nr(e);
    tZ.forEach((n) => {
        h()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            ts.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tZ.clear(),
        nS({ disabledLocalVideos: t }, e, !1);
}
function nX() {
    let e = eV.x.DEFAULT,
        { videoToggleStateMap: t } = nr(e);
    for (let [e, n] of Object.entries(t)) n === eP.bb8.AUTO_PROBING && delete t[e];
    nS({ videoToggleStateMap: t }, e, !1);
}
function nQ(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === eb.default.getId()) return;
    let i = t === eV.x.STREAM ? eV.Cn : eV.Hz,
        { localVolumes: s } = nr(t);
    r === i ? delete s[n] : (s[n] = r), nS({ localVolumes: s }, t), ts.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function nJ(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: s } = nr(t);
    (s[n] = { left: r, right: i }), nS({ localPans: s }, t), ts.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function n0(e) {
    let { context: t, mode: n, options: r } = e;
    nS({ mode: n, modeOptions: { ...r, updatedAt: Date.now() } }, t), ts.eachConnection(ni);
}
function n1(e) {
    let { volume: t } = e;
    nS({ inputVolume: ns(t) }), ts.setInputVolume(t);
}
function n2(e) {
    let { volume: t } = e;
    nS({ outputVolume: t }), ts.setOutputVolume(t);
}
function n3(e) {
    let { id: t } = e;
    (t = nR(tf, t)),
        (td = performance.now()),
        nS({ inputDeviceId: t }),
        ts.setAudioInputDevice(t),
        ts.eachConnection(np),
        (l = void 0),
        (u = void 0),
        t6.stop(),
        (t3 = !1);
    let { resetSilenceWarningOnDeviceChange: n } = er.A.getConfig({
        location: "MediaEngineStore.handleSetInputDevice",
    });
    n && ((tD = !1), o.reset());
}
function n6(e) {
    let { id: t } = e;
    nS({ outputDeviceId: (t = nR(tp, t)) }), ts.setAudioOutputDevice(t);
}
function n4(e) {
    let { id: t } = e;
    nS({ videoDeviceId: (t = nR(th, t)) }), nl();
}
function n5(e) {
    let { inputProfile: t } = e;
    nS({ activeInputProfile: t });
    let n = nr();
    ts.eachConnection((e) => {
        ni(e), np(e);
    }),
        ts.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        ro();
}
function n7(e) {
    return tu !== e.required && ((tu = e.required), e.required || ts.interact(), !0);
}
function n8(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    nO(t), nw(n), nx(r);
}
function n9(e) {
    let { inputVolume: t, outputVolume: n } = e;
    nS({ inputVolume: ns(t), outputVolume: n });
}
function re(e) {
    let t = nr(),
        n = ts.getAudioSubsystem(),
        i = ts.getAudioLayer(),
        s = nR(tf, t.inputDeviceId),
        a = tf[s]?.name,
        o = (0, ef.A)(t.noiseCancellation, r.getSystemMicrophoneMode(), { location: "trackVoiceProcessing" });
    eI.default.track(eP.HAw.VOICE_PROCESSING, {
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
function rt(e) {
    let t = nS({ echoCancellation: e.enabled });
    ts.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), ro(), re(e.location);
}
function rn(e) {
    ri(e.enabled);
}
function rr(e) {
    let t = nS({ sidechainCompressionStrength: e.strength });
    ts.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function ri(e) {
    let t = nS({ sidechainCompression: e });
    ts.setSidechainCompression(t.sidechainCompression);
}
function rs(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tQ.add(n) : tQ.delete(n), ra(), ro();
}
function ra() {
    let e = !tQ.has("voice_filter_preview") && !tQ.has("mic_test");
    ts.setMaybePreprocessMute(e);
}
function ro() {
    let e = nr(),
        t = tQ.size > 0,
        n = e.inputDeviceId,
        r = eO.A.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        s = eO.A.hasNoiseSuppression(n) || e.noiseSuppression,
        a = nd(eO.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        o = e.noiseCancellation,
        l = null !== tG,
        u = tQ.has("voice_filter") && 1 === tQ.size;
    ts.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: s,
        automaticGainControlConfig: a,
        noiseCancellation: o,
        voiceFilters: l,
        loopbackUseAudioMode: u,
    });
}
async function rl() {
    if (!ts.supports(eV.O5.VAAPI)) return;
    let e = 4098;
    if (window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let t = await window.DiscordNative.processUtils.getSystemInfo();
    (t.electronGPUInfo?.gpuDevice ?? []).some((t) => t.vendorId === e) &&
        ((t7 = !0), (t5 = ts.supports(eV.O5.GAMESCOPE_CAPTURE)));
}
function ru(e) {
    let t = nS({ noiseSuppression: e.enabled });
    ts.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), ro(), re(e.location);
}
function rc(e) {
    let t = nS({ automaticGainControl: e.enabled });
    ts.eachConnection((e) => n_(e, t.automaticGainControl)), ro(), re(e.location);
}
function rd(e) {
    let t = nS({ noiseCancellation: e.enabled });
    ts.eachConnection((e) => nf(e, t.noiseCancellation)), ro(), re(e.location);
}
function r_(e) {
    e_.A.setKrispModelOverride(e.model), (_ = e.model), ro();
}
function rf(e) {
    (0, ey.isWeb)() || ((tU = e.enabled), ts.setNoiseCancellationEnableStats?.(e.enabled));
}
function rp(e) {
    nS({ silenceWarning: e.enabled });
}
function rh(e) {
    ts.setDebugLogging(e.enabled);
}
function rm(e) {
    let { level: t } = e;
    (d = t), e_.A.setKrispSuppressionLevel(t);
}
function rE(e) {
    nS({ videoHook: e.enabled });
}
function rg(e) {
    nS({ experimentalSoundshare2: e.enabled });
}
function rA(e) {
    let { enabled: t } = e;
    nS({ useSystemScreensharePicker: t });
}
function rI(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = nS({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r });
    ts.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function rT(e) {
    let { enabled: t } = e;
    nS({ qos: t }), ts.eachConnection((e) => e.setQoS(t));
}
function rS() {
    ny();
}
function ry(e) {
    let { osVolume: t, osMuted: n } = e;
    (u = t), (l = n);
}
function rv(e) {
    let { inputDetected: t } = e;
    if (null == t) return !1;
    if (((tL = !0 !== tD && !t), t)) (tD = !0), (t3 = !1), t6.stop(), tw.stop();
    else if (nr().mode === eP.TBI.VOICE_ACTIVITY && tD) {
        let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = er.A.getConfig({
            location: "MediaEngineStore.handleInputDetected",
        });
        e &&
            t6.start(e2, () => {
                eI.default.track(eP.HAw.HARDWARE_MUTE_GUESSED, {
                    input_device_name: tf[nR(tf, nr().inputDeviceId)]?.name,
                    rtc_connection_id: eL.A.getRTCConnectionId(),
                }),
                    (t3 = !0),
                    r.emitChange();
            }),
            null != t &&
                tw.start(t * eS.A.Millis.MINUTE, () => {
                    (tD = !1), o.reset();
                });
    }
}
function rN(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === tA) return !1;
    (tA = n), ts.eachConnection(na);
}
function rC(e) {
    let { state: t, permissionType: n } = e,
        r = t === eU.hL.ACCEPTED;
    switch (n) {
        case eU.iL.AUDIO:
            (t$ = !0), ts.eachConnection(na);
            break;
        case eU.iL.CAMERA:
            !r && tT && nl(!1);
            break;
        default:
            return !1;
    }
}
function rb() {
    return tP || !1;
}
async function rR() {
    try {
        await eN.Ay.ensureModule("discord_krisp");
        let e = eN.Ay.requireModule("discord_krisp");
        (tP = !0),
            (c = e.getSdkVersion?.()),
            (d = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (tk = e), r.emitChange();
            }),
            r.emitChange();
    } catch (t) {
        eH.warn(`Failed to load Krisp module: ${t.message}`), ev.A.captureException(t);
        let e = eV.CO.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eV.CO.INITIALIZED : n;
        }
        eI.default.track(eP.HAw.VOICE_PROCESSING, { noise_canceller_error: e }), nS({ noiseCancellation: !1 });
    } finally {
        tM = !1;
    }
}
function rO() {
    return (0, ey.isWindows)() || (0, ey.isLinux)() || (0, ey.isMac)();
}
function rD() {
    !rO() || __OVERLAY__ || tM || tP
        ? (0, ey.isWeb)() && ts.supports(eV.O5.NOISE_CANCELLATION)
            ? ((tP = !0), r.emitChange())
            : (0, ey.isWeb)() && nS({ noiseCancellation: !1 })
        : ((tM = !0), rR());
}
async function rL() {
    try {
        let e,
            t = "",
            n = !1,
            r = URL.parse(e4);
        if (null === r) return void eH.log("OpenH264 URL ", r, " is invalid");
        let i = r.pathname.split("/"),
            s = i[i.length - 1].replace(".bz2", "");
        try {
            let t = await eN.Ay.downloadOpenH264(e4, s, e5, (e) => {
                eH.log("OpenH264 download status", e);
            });
            eH.log("OpenH264 is ready", t), (n = t.fetchedFromNetwork), (e = !0);
        } catch (n) {
            eH.error("OpenH264 download failed", n), (t = n.message), (e = !1);
        }
        if (
            (eI.default.track(eP.HAw.VIDEO_OPENH264_DOWNLOADED, {
                success: e,
                fetched_from_network: n,
                error_message: t,
            }),
            e)
        ) {
            let e = await eN.Ay.cleanupUnusedOpenH264Files([s]);
            eH.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        eH.error("OpenH264 download failed", e);
    }
}
function rw() {
    (0, ey.isLinux)() && rL();
}
function rx(e) {
    let { enabled: t } = e;
    eI.default.track(eP.HAw.VOICE_FILTER_PLAYBACK_TOGGLED, { active_voice_filter_id: tG ?? null, enabled: t }),
        nS({ voiceFilterPlaybackEnabled: t });
}
function rM(e) {
    let { newVoiceFilterId: t } = e;
    nS({ mostRecentlyRequestedVoiceFilter: t }), ts.eachConnection((e) => e.setVoiceFilterId(t));
}
function rP() {
    nS({ mostRecentlyRequestedVoiceFilter: null });
}
function rk(e) {
    let { voiceFilterId: t } = e;
    (tV = tG), (tB = tF), (tG = t), (tF = null === t ? null : Date.now());
}
function rU(e) {
    let t = e.bypassEnabled;
    nS({ bypassSystemInputProcessing: t }), ts.setAudioInputBypassSystemProcessing(t), re(e.location);
}
function rG(e) {
    rF(e.subsystem);
}
function rF(e) {
    e === eV.rB.AUTOMATIC
        ? (nS({ automaticAudioSubsystem: !0 }), rV())
        : (nS({ automaticAudioSubsystem: !1 }), ts.setAudioSubsystem(e));
}
function rV() {
    ts.queueAudioSubsystem(eV.rB.EXPERIMENTAL);
}
function rB(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && nl(i, null), null != t || null == n)) {
        tx = !1;
        return;
    }
    if (tx) return;
    tx = !0;
    let s = nr();
    (s.mute || s.deaf) && (nS({ deaf: !1, mute: !1 }), ts.eachConnection(na));
}
function rH(e) {
    let { application: t } = e;
    to.add(t.id);
}
function rj(e) {
    let { application: t } = e;
    to.delete(t.id);
}
function rY(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (tl = !1), ts.eachConnection(na);
                break;
            case "video":
                nl(!1);
        }
}
function rW(e) {
    (tl = e.enabled), e.unmute && nS({ mute: !1, deaf: !1 }), ts.eachConnection(na);
}
function rK(e) {
    let { enabled: t } = e;
    ed.A.requestPermission(eU.iL.CAMERA), nl(t);
}
function rz(e) {
    let { sourceId: t, applicationName: n, quality: i } = e;
    if (!(0, D.Ao)() || null == N.A) return !1;
    let s = null,
        o = null,
        l = eT.A.getPidFromDesktopSource(t);
    ({ soundshareId: s, soundshareSession: o } = nP(l));
    let u = { desktopSource: { id: t, sourcePid: l, soundshareId: s, soundshareSession: o }, quality: i };
    null != a &&
        (ts.setClipsSource(null),
        (0, ey.isWindows)() && null != a.desktopSource.soundshareId && C.c1(a.desktopSource.soundshareId)),
        null != s && nk(s, o),
        (a = u);
    let c = t9("MediaEngineStore clips"),
        d = nr().videoHook;
    ts.setClipsSource({
        desktopDescription: {
            id: a.desktopSource.id,
            soundshareId: a.desktopSource.soundshareId,
            useVideoHook: d,
            useGraphicsCapture: nm(),
            useCaptureDeviceForEncode: !1,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: ng(),
            videoHookStaleFrameTimeoutMs: eZ,
            graphicsCaptureStaleFrameTimeoutMs: eX,
            hdrCaptureMode: c,
        },
        quality: i,
        applicationName: n,
    });
}
function r$(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((a = null), ts.setClipsSource(null));
}
function rq(e) {
    let { settings: t } = e;
    if (t?.desktopSettings != null) {
        let e = null,
            n = null,
            { sourceId: r, sound: i } = t.desktopSettings,
            s = t.context ?? eV.x.DEFAULT,
            a = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
            o = !1 === i ? null : eT.A.getPidFromDesktopSource(r);
        ey.isPlatformEmbedded &&
            !0 === i &&
            (({ soundshareId: e, soundshareSession: n } = nP(o)), null != e && nk(e, n)),
            no(s),
            nl(s === eV.x.STREAM && tT, {
                desktopSource: { id: r, sourcePid: o, soundshareId: e, soundshareSession: n },
                quality: { resolution: a.resolution, frameRate: a.frameRate },
            });
    } else if (t?.cameraSettings != null) {
        let e = t.context ?? eV.x.DEFAULT,
            { videoDeviceGuid: n, audioDeviceGuid: r } = t.cameraSettings,
            i = e === eV.x.STREAM && tT,
            s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
        nl(i, {
            cameraSource: { videoDeviceGuid: n, audioDeviceGuid: r },
            quality: { resolution: s.resolution, frameRate: s.frameRate },
        });
    } else nl(tT, null);
}
function rZ(e) {
    let { section: t } = e;
    return t === eP.nc_.VOICE && nN(), !1;
}
function rX() {
    return ts.eachConnection(np), !1;
}
function rQ(e) {
    let { enabled: t } = e,
        n = nS({ aecDumpEnabled: t });
    ts.setAecDump(n.aecDumpEnabled);
}
function rJ(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (ta = Object.values(eV.x).reduce((e, n) => {
        let r = n,
            i = tr();
        return (e[r] = E().merge(i, t[r])), e;
    }, {})),
        S.w.set(ej, ta),
        nv();
}
function r0(e) {
    let { state: t } = e,
        n = P.A.isEnabled();
    if (t === eP.g6G.BACKGROUND && tT && !n) (tR = !0), nl(!1);
    else {
        if (t !== eP.g6G.ACTIVE || !tR) return !1;
        (tR = !1), nl(!0);
    }
    return !0;
}
function r1(e) {
    ts.eachConnection((t) => t.setBitRate(e.bitrate));
}
function r2() {
    if ((!tT && null == s) || null != eL.A.getRTCConnectionId()) return !1;
    nl(!1, null);
}
function r3() {
    return !!tj && ((tj = !1), !0);
}
function r6(e) {
    ts.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function r4(e) {
    let { settings: t } = e;
    ts.applyMediaFilterSettings(t).finally(() => {
        (tY = !1), r.emitChange();
    });
}
function r5() {
    tY = !0;
}
function r7() {
    tY = !1;
}
function r8(e) {
    t2 = e.enabled;
}
function r9() {
    if ((0, ey.isDesktop)() && ey.isPlatformEmbedded && !t8) {
        t8 = !0;
        let e = async () => {
            let t = await new Promise((e) => {
                eN.Ay.pollQueueMetrics((t) => {
                    e(t);
                });
            });
            t.periodMs = eV.tl;
            let n = it(t);
            null !== n && eI.default.track(eP.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, eV.tl);
        };
        setTimeout(e, eV.tl);
    }
}
class ie extends I.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        nh(),
            nT(),
            rD(),
            rw(),
            nX(),
            r9(),
            (0, ey.isWindows)() && ey.isPlatformEmbedded && nc(),
            (tJ = {
                [eV.O5.VIDEO]: ts.supports(eV.O5.VIDEO),
                [eV.O5.DESKTOP_CAPTURE]: ts.supports(eV.O5.DESKTOP_CAPTURE),
                [eV.O5.HYBRID_VIDEO]: ts.supports(eV.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eb.default, eR.A, eO.A, eD.A, R.A, M.A, eL.A, k.Ay, ep.A, em.A, ex.default, eM.A, eA.A);
    }
    supports(e) {
        return ts.supports(e);
    }
    supportsInApp(e) {
        return tJ[e] || ts.supports(e);
    }
    isSupported() {
        return ts.supported();
    }
    isNoiseSuppressionSupported() {
        return ts.supports(eV.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return rb();
    }
    isNoiseCancellationError() {
        return tj;
    }
    isAutomaticGainControlSupported() {
        return ts.supports(eV.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nI() && (ts.supports(eV.O5.LEGACY_AUDIO_SUBSYSTEM) || ts.supports(eV.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return ts.supports(eV.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === ts.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return rb();
    }
    isAecDumpSupported() {
        return ts.supports(eV.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return ts.supports(eV.O5.VIDEO) && ts.supports(eV.O5.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        return eD.A.getChannel(tH)?.type !== eP.rbe.GUILD_STAGE_VOICE && e3 && Z.A.simulcastEnabled();
    }
    getAecDump() {
        return nr().aecDumpEnabled;
    }
    getMediaEngine() {
        return ts;
    }
    getVideoComponent() {
        return ts.Video;
    }
    getCameraComponent() {
        return ts.Camera;
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
        return this.isSelfMute() || tE;
    }
    isDeaf() {
        return this.isSelfDeaf() || tI;
    }
    hasContext(e) {
        return null != ta[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT;
        return e === eV.x.DEFAULT && tg;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT;
        return (
            !this.isEnabled() ||
            nr(e).mute ||
            !ed.A.didHavePermission(eU.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eV.x.DEFAULT && tA)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tv;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tv = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT,
            t = t3 && "voice_isolation" !== this.getSystemMicrophoneMode() && nr(e).mode === eP.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (eO.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return t2;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT;
        return !this.isSupported() || nr(e).deaf;
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
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.STREAM;
        return tc === e && null != s;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.STREAM;
        return tc === e && null != s && s.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eV.x.DEFAULT;
        return e !== eb.default.getId() && (nr(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return ts.supports(eV.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eV.x.DEFAULT;
        return nr(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eV.x.DEFAULT;
        return nr(t).videoToggleStateMap[e] ?? eP.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eV.x.DEFAULT;
        return t === eV.x.DEFAULT && tZ.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT;
        return e === eV.x.DEFAULT && tZ.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tY;
    }
    isNativeAudioPermissionReady() {
        return t$;
    }
    getGoLiveSource() {
        return s;
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
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eV.x.DEFAULT,
            n = nr(t).localPans[e];
        return null != n ? n : eq;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eV.x.DEFAULT,
            n = t === eV.x.STREAM ? eV.Cn : eV.Hz,
            r = nr(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return nr().inputVolume;
    }
    getOutputVolume() {
        return nr().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT;
        return nr(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT;
        return nr(e).modeOptions;
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
        return nr().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return nr().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            E().each(ta, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === eP.TBI.PUSH_TO_TALK && to.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nR(tf, nr().inputDeviceId);
    }
    getOutputDeviceId() {
        return nR(tp, nr().outputDeviceId);
    }
    getVideoDeviceId() {
        return nR(th, nr().videoDeviceId);
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
        let e = nr();
        return eO.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return ts.supports(eV.O5.SIDECHAIN_COMPRESSION) && nr().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return nr().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return nr().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tK && tK;
    }
    getLoopback() {
        return tQ.size > 0;
    }
    getLoopbackReasons() {
        return tQ;
    }
    getNoiseSuppression() {
        let e = nr();
        return eO.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = nr();
        return eO.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return nr().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return nr().noiseCancellation;
    }
    getHardwareEncoding() {
        return e3;
    }
    getEnableSilenceWarning() {
        return nr().silenceWarning;
    }
    getDebugLogging() {
        return ts.getDebugLogging();
    }
    getQoS() {
        return nr().qos;
    }
    getAttenuation() {
        return nr().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return nr().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return nr().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return nA() && nr().automaticAudioSubsystem ? eV.rB.AUTOMATIC : ts.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return ts.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return nr().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eF.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT;
        return nr(e);
    }
    getState() {
        return {
            settingsByContext: ta,
            inputDevices: tf,
            outputDevices: tp,
            appSupported: tJ,
            krispModuleLoaded: tP,
            krispVersion: c,
            krispSuppressionLevel: d,
            goLiveSource: s,
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
        return ey.isPlatformEmbedded || this.getMode() !== eP.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        ts.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return tu;
    }
    getVideoHook() {
        return nr().videoHook;
    }
    supportsVideoHook() {
        return ts.supports(eV.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = nr().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return ts.supports(eV.O5.EXPERIMENTAL_SOUNDSHARE) && A().satisfies(N.A?.os.release, ek.$x);
    }
    supportsHookSoundshare() {
        return (0, ey.isWindows)() && ts.supports(eV.O5.SOUNDSHARE) && A().satisfies(N.A?.os.release, ek.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = nr().useSystemScreensharePicker,
            n = (0, ey.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return ts.supports(eV.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return t7;
    }
    getUseGamescopeCapture() {
        return t5;
    }
    getEverSpeakingWhileMuted() {
        return tN;
    }
    getSpeakingWhileMuted() {
        return tC;
    }
    getKrispModelOverride() {
        return _;
    }
    getKrispModels() {
        return tk;
    }
    getKrispVadActivationThreshold() {
        return nr().modeOptions.vadKrispActivationThreshold ?? e$;
    }
    hasActiveCallKitCall() {
        return t4;
    }
    setHasActiveCallKitCall(e) {
        t4 = e;
    }
    supportsScreenSoundshare() {
        return (0, ey.isMac)()
            ? ts.supports(eV.O5.SOUNDSHARE) && A().satisfies(N.A?.os.release, ek.P$) && ng()
            : (0, ey.isWindows)()
              ? ts.supports(eV.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, ey.isLinux)() && ts.supports(eV.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        return (0, ey.isWindows)()
            ? this.getInputDevices()[this.getInputDeviceId()]?.effects?.find((e) => e === e6)
            : (0, ey.isMac)() || (0, ey.isIOS)()
              ? f
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
                (e.fetchDave = en.f1.getCurrentConfig({
                    location: "MediaEngineStore fetchAsyncResources",
                }).loadWasmModule),
            ts.fetchAsyncResources(e)
        );
    }
    startDavePreload() {
        if (!tW && ((tW = !0), (0, ey.isWeb)())) {
            let e = { fetchDave: !0 };
            ts.fetchAsyncResources(e).catch((e) => {
                eH.warn("DAVE preload failed:", e), ev.A.captureException(e);
            });
        }
    }
    getSupportedSecureFramesProtocolVersion() {
        if ((0, ey.isWeb)()) {
            let { useWasmModule: e } = en.f1.getCurrentConfig({
                location: "MediaEngineStore getSupportedSecureFramesProtocolVersion",
            });
            if (!e) return 0;
        }
        let e = ts.getSupportedSecureFramesProtocolVersion();
        114 === e && (e = 1);
        let t = en.ex.getCurrentConfig({ location: "MediaEngineStore" }),
            n = en.a.getConfig({ location: "MediaEngineStore" });
        return (t.canSupportDaveProtocol || (n.allowOptIn && ep.A.getPersistentCodesEnabled())) &&
            e >= t.protocolVersionFloor
            ? e
            : 0;
    }
    hasClipsSource() {
        return null != a;
    }
    getGpuBrand() {
        return t0;
    }
}
function it(e) {
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
(r = new ie(v.h, {
    VOICE_CHANNEL_SELECT: rB,
    VOICE_STATE_UPDATES: nH,
    CONNECTION_OPEN: nU,
    CONNECTION_CLOSED: nF,
    POST_CONNECTION_OPEN: nV,
    RTC_CONNECTION_STATE: nB,
    AUDIO_SET_TEMPORARY_SELF_MUTE: nj,
    AUDIO_TOGGLE_SELF_MUTE: nY,
    AUDIO_SET_SELF_MUTE: nW,
    AUDIO_TOGGLE_SELF_DEAF: nz,
    AUDIO_TOGGLE_LOCAL_MUTE: n$,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: nq,
    AUDIO_SET_LOCAL_VOLUME: nQ,
    AUDIO_SET_LOCAL_PAN: nJ,
    AUDIO_SET_MODE: n0,
    AUDIO_SET_INPUT_VOLUME: n1,
    AUDIO_SET_OUTPUT_VOLUME: n2,
    AUDIO_SET_INPUT_DEVICE: n3,
    AUDIO_SET_OUTPUT_DEVICE: n6,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: n5,
    AUDIO_SET_ECHO_CANCELLATION: rt,
    AUDIO_SET_SIDECHAIN_COMPRESSION: rn,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: rr,
    AUDIO_SET_LOOPBACK: rs,
    AUDIO_SET_NOISE_SUPPRESSION: ru,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: rc,
    AUDIO_SET_NOISE_CANCELLATION: rd,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: r_,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: rp,
    AUDIO_SET_DEBUG_LOGGING: rh,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: rm,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: rf,
    MEDIA_ENGINE_SET_VIDEO_HOOK: rE,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: rg,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: rA,
    AUDIO_SET_ATTENUATION: rI,
    AUDIO_SET_QOS: rT,
    MEDIA_ENGINE_DEVICES: n8,
    AUDIO_VOLUME_CHANGE: n9,
    AUDIO_RESET: rS,
    AUDIO_INPUT_DETECTED: rv,
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: ry,
    AUDIO_SET_SUBSYSTEM: rG,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rU,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rW,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rK,
    MEDIA_ENGINE_PERMISSION: rY,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rq,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: n4,
    MEDIA_ENGINE_INTERACTION_REQUIRED: n7,
    USER_SETTINGS_MODAL_INIT: rZ,
    USER_SETTINGS_MODAL_SET_SECTION: rZ,
    CERTIFIED_DEVICES_SET: rX,
    RPC_APP_CONNECTED: rH,
    RPC_APP_DISCONNECTED: rj,
    OVERLAY_INITIALIZE: nG,
    APP_STATE_UPDATE: r0,
    SET_CHANNEL_BITRATE: r1,
    SET_VAD_PERMISSION: rN,
    SET_NATIVE_PERMISSION: rC,
    SET_CHANNEL_VIDEO_QUALITY_MODE: r6,
    MEDIA_ENGINE_SET_AEC_DUMP: rQ,
    MEDIA_ENGINE_RESET_SETTINGS: rJ,
    CHANNEL_DELETE: r2,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: r3,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: r4,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: r5,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: r7,
    USER_SETTINGS_PROTO_UPDATE: nK,
    CLIPS_INIT: rz,
    CLIPS_SETTINGS_UPDATE: r$,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: r8,
    VOICE_FILTER_REQUEST_SWITCH: rM,
    VOICE_FILTER_LOOPBACK_TOGGLE: rx,
    VOICE_FILTER_APPLIED: rk,
    VOICE_FILTER_DOWNLOAD_FAILED: rP,
    VOICE_FILTER_APPLY_FAILED: rP,
})),
    (o = new Q.A(ts, r));
let ir = r;
