"use strict";
let r, i, s, a, o, l, u, c, d, _, f;
n.d(t, { Ay: () => io }), n(323874), n(14289), n(35956), n(321073), n(790599);
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
    R = n(124838),
    O = n(274372),
    D = n(915618),
    L = n(572164),
    w = n(626584),
    x = n(211597),
    M = n(487329),
    P = n(49463),
    k = n(784113),
    U = n(15285),
    G = n(540305),
    F = n(17300),
    V = n(544746),
    B = n(820344),
    H = n(593595),
    j = n(788601),
    Y = n(626078),
    W = n(509034),
    K = n(638188),
    z = n(269377),
    $ = n(934341),
    q = n(658046),
    Z = n(621963),
    X = n(525286),
    Q = n(780732),
    J = n(532055),
    ee = n(264866),
    et = n(927170),
    en = n(729410),
    er = n(233232),
    ei = n(140175);
n(491642);
var es = n(267378),
    ea = n(801644),
    eo = n(223572),
    el = n(276006),
    eu = n(670470),
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
    eb = n(723702),
    eR = n(728458),
    eO = n(837921),
    eD = n(350535),
    eL = n(961350),
    ew = n(131319),
    ex = n(347481),
    eM = n(734057),
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
let eK = new w.A("MediaEngineStore"),
    ez = "MediaEngineStore",
    e$ = 4,
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
    if (!(0, eb.isIOS)() || null == tn) return !1;
    let e = tn();
    if (null == e || !e.startsWith("ARM64_")) return !1;
    let t = e.substring(6);
    return ("T" === t[0] || "S" === t[0]) && parseInt(t.substring(1), 10) >= 8122;
}
let ti = null;
async function ts() {
    if (!(0, eb.isMac)() || N.A?.os.arch !== "arm64" || N.A?.processUtils?.getSystemInfo == null) {
        ti = !1;
        return;
    }
    let e = await N.A.processUtils.getSystemInfo(),
        t = (e.cpus?.[0]?.model ?? "").match(/Apple M(\d+)/);
    if (null == t) {
        ti = !0;
        return;
    }
    ti = parseInt(t[1], 10) >= 3;
}
function ta() {
    return !0 === ti;
}
function to() {
    return {
        mode: eF.TBI.VOICE_ACTIVITY,
        modeOptions: {
            threshold: e2,
            autoThreshold: eb.isPlatformEmbedded || __OVERLAY__,
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
    tu = (0, T.hB)((0, T.WI)());
eK.enableNativeLogger(!0);
let tc = {},
    td = new Set([eY.x.DEFAULT]),
    t_ = tu.supports(eY.O5.AUTO_ENABLE),
    tf = !1,
    tp = eY.x.STREAM,
    th = performance.now(),
    tm = null,
    tE = { [eY.dx]: nD("No Input Devices") },
    tg = { [eY.dx]: nD("No Output Devices") },
    tA = { [eY.dx]: nD("No Video Devices") },
    tI = new y.Ep(),
    tT = !1,
    tS = !1,
    ty = !1,
    tv = !1,
    tN = !1,
    tC = eY.qe,
    tb = eY.qe,
    tR = !1,
    tO = !1,
    tD = !1,
    tL = new y.Ep(),
    tw = !1,
    tx = !1,
    tM = !1,
    tP = !1,
    tk = new y.Ep(),
    tU = !1,
    tG = !1,
    tF = !1,
    tV = [],
    tB = !1,
    tH = null,
    tj = null,
    tY = null,
    tW = null,
    tK = null,
    tz = !1,
    t$ = !1,
    tq = !1,
    tZ = null,
    tX = null,
    tQ = !1;
eh.A.hasPermission(eB.iL.AUDIO, { showAuthorizationError: !1 }),
    eh.A.hasPermission(eB.iL.CAMERA, { showAuthorizationError: !1 });
let tJ = !1,
    t0 = new Set(),
    t1 = tJ,
    t2 = new Set(),
    t3 = {},
    t6 = null,
    t4 = null,
    t5 = !0,
    t7 = !1,
    t8 = new y.Ep(),
    t9 = !1,
    ne = !1,
    nt = !1,
    nn = !1;
function nr(e) {
    return (0, Z.p)({ location: e }).hdrCaptureMode;
}
async function ni() {
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
function ns() {
    return null != tX ? tX : "u" > typeof window ? (tX = ni().then((e) => ((tZ = e), e))) : Promise.resolve(!1);
}
function na() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eY.x.DEFAULT,
        t = tc[e];
    return null == t && ((t = to()), (tc[e] = t)), t;
}
function no() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eY.x.DEFAULT,
        t = na(e),
        n = tl[t.activeInputProfile ?? ej.m.CUSTOM],
        r = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}) };
    if (
        (null == r.vadDuringPreProcess && (r.vadDuringPreProcess = (0, eo.R)({ location: "getSettings" }).enabled),
        (null == r.vadKrispActivationThreshold && !0 === n.automaticGainControl) || !0 === t.automaticGainControl)
    ) {
        let e = (0, F.F)({ location: "getSettings" });
        null != e.vadKrispActivationThreshold && (r.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return { ...t, ...n, modeOptions: r };
}
function nl(e) {
    let t = no(e.context),
        n = t.mode;
    e.context === eY.x.DEFAULT && (0, ei.N)(!1, !1);
    let { showPTTSpeakingIndicator: r } = eT.A.getConfig({ location: "setInputMode" }),
        i = r && n === eF.TBI.PUSH_TO_TALK;
    e.setInputMode(n, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: !!i || t.modeOptions.autoThreshold,
        vadUseKrisp: (!!i || t.modeOptions.vadUseKrisp) && rL(),
        vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? eQ,
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        vadDuringPreProcess: t.modeOptions.vadDuringPreProcess ?? !1,
        pttReleaseDelay: Math.round(t.modeOptions.delay),
    });
}
function nu(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eY.Hz;
    return E().clamp(e, 0, t);
}
function nc(e) {
    let t = no(e.context),
        n = !t_ || t.mute || t.deaf;
    e.context === eY.x.DEFAULT
        ? (n = n || tT || tS || ty || !eh.A.didHavePermission(eB.iL.AUDIO))
        : e.context === eY.x.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eY.x.DEFAULT && b.A.updateNativeMute();
}
function nd(e) {
    e !== tp && (null != s && tu.setGoLiveSource(null, tp), (tp = e));
}
function n_() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tN,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
        n = s;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, eb.isWindows)() && C.c1(n.desktopSource.soundshareId),
            tu.setGoLiveSource(null, tp)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            tu.setGoLiveSource(null, tp),
        tN || e)
    ) {
        let t = no().videoDeviceId;
        tN && t === eY.dx && tb === eY.dx && tC !== eY.qe ? (t = tC) : (tb = t),
            (tC = (tN = e) ? nw(tA, t) : eY.qe),
            tu.setVideoInputDevice(tC);
    }
    if (((s = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = nr("MediaEngineStore go live"),
                i = no().videoHook,
                s = nI(),
                a = s ? (nT() ? eV.zl : eV.eg) : 0,
                o = (0, eb.isWindows)() && (0, el.b)("updateVideo").enabled,
                l = !1;
            (0, eb.isWindows)() &&
                a >= eV.zl &&
                (l =
                    !0 === t4
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
                            allowScreenCaptureKit: nS(),
                            videoHookStaleFrameTimeoutMs: e0,
                            graphicsCaptureStaleFrameTimeoutMs: e1,
                            hdrCaptureMode: n,
                            enableGlobalFramePoolLock: (0, q.H)({ location: "updateVideo" }).enabled,
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
function nf(e) {
    switch (e) {
        case eY.CO.CPU_OVERUSE:
            return M.B6.NoiseCancellerCpuOveruse;
        case eY.CO.FAILED:
            return M.B6.NoiseCancellerFailed;
        case eY.CO.VAD_CPU_OVERUSE:
            return M.B6.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function np() {
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
                v.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
            });
}
function nh(e) {
    let t = (0, F.F)({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function nm(e, t) {
    e.setAutomaticGainControl(nh(t));
}
function nE(e, t) {
    let n = (0, eE.A)(t, r.getSystemMicrophoneMode(), { location: "setNoiseCancellation" });
    n !== t && eK.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: i } = (0, F.F)({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(i);
    let { noiseCancellationAfterProcessing: s, vadAfterWebrtc: a } = (0, et.$)({ location: "setNoiseCancellation" });
    e.setNoiseCancellationAfterProcessing(s), e.setVADAfterWebrtc(a);
}
function ng(e) {
    let t = no(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(ex.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(ex.A.hasNoiseSuppression(n) || t.noiseSuppression),
        nm(e, ex.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        nE(e, t.noiseCancellation),
        e.setVoiceFilterId(tH),
        (0, eb.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function nA() {
    tI.start(e4, () => {
        eK.error("Device enumeration timed out"), ev.default.track(eF.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
    }),
        tu.on(T.bg.Connection, (e) => {
            nl(e), nc(e), ng(e);
            let t = no();
            e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
                e.setQoS(t.qos),
                (0, eb.isWindows)()
                    ? (e.setExperimentFlag(eY.fd.H265_HARDWARE_ONLY, !0),
                      ns().then((t) => {
                          e.setExperimentFlag(eY.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                      }))
                    : (0, eb.isMac)() && e.setExperimentFlag(eY.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                (0, eb.isWindows)() &&
                    (0, Q.r)({ location: "setupMediaEngine" }).enabled &&
                    (e.setExperimentFlag(eY.fd.USE_H264_MF_DECODER, !0),
                    (0, J.W)({ location: "setupMediaEngine" }).enabled &&
                        e.setExperimentFlag(eY.fd.H264_MF_ZERO_COPY, !0)),
                (0, eb.isLinux)() &&
                    (0, en.b)({ location: "setupMediaEngine" }).enabled &&
                    e.setExperimentFlag(eY.fd.USE_LIBOPENH264_DECODER, !0);
            let n = eP.A.getGuildId(),
                {
                    muteBeforeProcessing: i,
                    pttBeforeProcessing: a,
                    skipEncode: o,
                } = (null != n ? z.A : K.A).getCurrentConfig(
                    { location: "setupMediaEngine", guildId: n ?? void 0 },
                    { autoTrackExposure: !0 },
                );
            i && e.setExperimentFlag(eY.fd.MUTE_BEFORE_PROCESSING, !0),
                a && e.setExperimentFlag(eY.fd.PTT_BEFORE_PROCESSING, !0),
                o && e.setExperimentFlag(eY.fd.SKIP_ENCODE, !0),
                (0, er.J)({ location: "setupMediaEngine" }).enabled &&
                    e.setExperimentFlag(eY.fd.LOW_LATENCY_RATE_CONTROL, !0);
            let l = !1,
                u = !0;
            e.setExperimentFlag(eY.fd.RESET_DECODER_ON_ERRORS, !0),
                l && e.setExperimentFlag(eY.fd.SOFTWARE_FALLBACK_ON_ERRORS, !0),
                u && e.setExperimentFlag(eY.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
            let { swallowVolumeOnlySpeakingEvents: c } = R.A.getConfig({ location: "MediaEngineStore" });
            if ((c && e.setExperimentFlag(eY.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === eY.x.STREAM)) {
                let t = nM(tg);
                e.setSoundshareDiscardRearChannels(t);
                let { simulcastEnabled: n, lqStreamBitrate: r } = X.A.getConfig();
                e.configureGoLiveSimulcast(n, r);
            }
            if ((0, eb.isWindows)())
                e.setExperimentFlag(eY.fd.SIGNAL_AV1, !0), e.setExperimentFlag(eY.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            else if ((0, eb.isMac)()) {
                if ((e.setExperimentFlag(eY.fd.SIGNAL_AV1_DECODE, !0), ta())) {
                    let { enabled: t } = (0, B.t)("MediaEngineStore");
                    t && e.setExperimentFlag(eY.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                }
            } else if ((0, eb.isLinux)()) e.setExperimentFlag(eY.fd.SIGNAL_AV1_DECODE, !0);
            else if ((0, eb.isIOS)() && tr()) {
                let { enabled: t } = (0, V.$)("MediaEngineStore");
                t &&
                    (e.setExperimentFlag(eY.fd.SIGNAL_AV1_DECODE, !0),
                    e.setExperimentFlag(eY.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
            }
            if ((0, eb.isWeb)()) {
                let { enabled: t } = (0, $.O)("MediaEngineStore");
                e.setExperimentFlag(eY.fd.BROWSER_HEVC, t);
            }
            if (
                ((0, eb.isWindows)() &&
                    t6?.startsWith("AMD") &&
                    (0, e_.F)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eY.fd.WMF_GPU_ENCODE, !0),
                (0, eb.isWindows)() &&
                    t6?.startsWith("Intel") &&
                    (0, ef.J)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eY.fd.WMF_GPU_ENCODE, !0),
                (0, eb.isWindows)() &&
                    t6?.startsWith("Qualcomm") &&
                    (0, e_.F)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eY.fd.WMF_GPU_ENCODE, !0),
                tu.setHasFullbandPerformance((0, x.A)()),
                e.setRemoteAudioHistory(1e3),
                (0, D.A)(r))
            ) {
                let { enableViewerClipping: t } = eu.A.getCurrentConfig(
                    { location: "f627ab_15" },
                    { autoTrackExposure: !1 },
                );
                e.setViewerSideClip(t), e.setClipsKeyFrameInterval(eY.X1);
            }
            for (let n of ((t = no(e.context)), e.setPostponeDecodeLevel(e3), Object.keys(t.localMutes)))
                n !== eL.default.getId() && e.setLocalMute(n, t.localMutes[n]);
            for (let n of Object.keys(t.localVolumes))
                n !== eL.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
            for (let n of Object.keys(t.localPans)) {
                let r = t.localPans[n];
                e.setLocalPan(n, r.left, r.right);
            }
            for (let n of Object.keys(t.disabledLocalVideos)) e.setLocalVideoDisabled(n, t.disabledLocalVideos[n]);
            e.on(T.yq.Speaking, (t, n, r, i) => {
                v.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: i });
            }),
                e.context === eY.x.DEFAULT &&
                    ((tO = !1),
                    (tD = !1),
                    e.on(T.yq.SpeakingWhileMuted, () => {
                        (tO = !0),
                            (tD = !0),
                            r.emitChange(),
                            tL.stop(),
                            tL.start(e6, () => {
                                (tD = !1), r.emitChange();
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
                        ev.default.track(eF.HAw.VIDEOHOOK_INITIALIZED, {
                            backend: e,
                            format: t,
                            framebuffer_format: n,
                            sample_count: r,
                            success: i,
                            reinitialization: a,
                            ...(0, G.A)(s?.desktopSource),
                        });
                }),
                e.on(T.yq.NoiseCancellationError, (e) => {
                    eK.warn(`noisecancellererror event: ${e}`),
                        (0, M.QW)({ type: M.iy.NOISE_CANCELLER_ERROR, underlyingError: nf(e) }),
                        (tz = !0),
                        ev.default.track(eF.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        v.h.dispatch({ type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: !0 }),
                        v.h.dispatch({ type: "AUDIO_SET_NOISE_CANCELLATION", enabled: !1 }),
                        v.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e });
                }),
                e.on(T.yq.VoiceActivityDetectorError, (e) => {
                    eK.warn(`voiceactivitydetectorerror event: ${e}`),
                        (0, M.QW)({ type: M.iy.NOISE_CANCELLER_ERROR, underlyingError: nf(e) }),
                        ev.default.track(eF.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        v.h.dispatch({
                            type: "AUDIO_SET_MODE",
                            context: eY.x.DEFAULT,
                            mode: eF.TBI.VOICE_ACTIVITY,
                            options: { ...no(eY.x.DEFAULT).modeOptions, vadUseKrisp: !1 },
                        }),
                        v.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e });
                }),
                e.on(T.yq.SdpError, (e, t, n, r) => {
                    ev.default.track(eF.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: r });
                }),
                e.on(T.yq.VideoState, (t) => {
                    v.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                }),
                e.setBitRate(ew.A.bitrate),
                e.applyVideoQualityMode(eG.A.mode),
                (0, eb.isWindows)() &&
                    tu.supports(eY.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                    tu.setAsyncVideoInputDeviceInit((0, Y.v)("setupMediaEngine").enabled);
        }),
        tu.on(T.bg.DeviceChange, (e, t, n) => {
            tI.stop(),
                v.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
        }),
        tu.on(T.bg.VolumeChange, (e, t) => {
            v.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
        }),
        tu.on(T.bg.DesktopSourceEnd, (e, t) => {
            v.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
        }),
        tu.on(T.bg.AudioPermission, (e) => {
            (tQ = !0), v.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
        }),
        tu.on(T.bg.VideoPermission, (e) => {
            v.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
        }),
        tu.on(T.bg.WatchdogTimeout, async () => {
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
        tu.on(T.bg.VideoInputInitialized, (e) => {
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
        tu.on(T.bg.AudioInputInitialized, (e) => {
            ev.default.track(eF.HAw.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * eC.A.Millis.SECOND),
                rtc_connection_id: eP.A.getRTCConnectionId(),
            });
        }),
        tu.on(T.bg.ClipsRecordingRestartNeeded, () => {
            v.h.dispatch({ type: "CLIPS_RESTART" });
        }),
        tu.on(T.bg.ClipsInitFailure, (e, t) => {
            v.h.wait(() => {
                v.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t });
            });
        }),
        tu.on(T.bg.ClipsRecordingEnded, (e, t) => {
            a?.desktopSource?.id === e && (null != t && s?.desktopSource?.soundshareId !== t && C.c1(t), (a = null));
        }),
        tu.on(T.bg.NativeScreenSharePickerUpdate, (e, t) => {
            v.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
        }),
        tu.on(T.bg.NativeScreenSharePickerCancel, (e) => {
            v.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
        }),
        tu.on(T.bg.NativeScreenSharePickerError, (e) => {
            v.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
        }),
        tu.on(T.bg.AudioDeviceModuleError, (e, t, n) => {
            ev.default.track(eF.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
        }),
        tu.on(T.bg.VideoCodecError, (e) => {
            let t = "encode" === e.mode ? M.iy.VIDEO_ENCODE_ERROR : M.iy.VIDEO_DECODE_ERROR,
                n = { videoCodec: e.codecStandard, errorMessage: e.message };
            (0, M.QW)(
                t === M.iy.VIDEO_ENCODE_ERROR
                    ? { type: t, ...n, videoEncoder: e.implName }
                    : { type: t, ...n, videoDecoder: e.implName },
            );
        }),
        tu.on(T.bg.ConnectionStats, (e) => {
            v.h.dispatch({
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
        tu.on(T.bg.VoiceQueueMetrics, (e) => {
            let t = ia(e);
            null !== t && ev.default.track(eF.HAw.VOICE_QUEUE_METRICS, t);
        }),
        tu.setOnVideoContainerResized((e, t, n) => {
            v.h.wait(() =>
                v.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
            );
        }),
        ts(),
        rc(),
        r_(),
        tu.supports(eY.O5.ASYNC_CLIPS_SOURCE_DEINIT) &&
            tu.setAsyncClipsSourceDeinit((0, W.V)("setupMediaEngine").enabled),
        o.reset(),
        (0, ek.w)().then((e) => {
            null != e && ((t6 = e.gpu_brand), (t4 = e.has_intel_hybrid_igpu));
        }),
        tu.on(T.bg.SystemMicrophoneModeChange, (e) => {
            (f = e), tu.eachConnection(ng);
        });
}
function nI() {
    return (0, eb.isWindows)() && A().satisfies(N.A?.os.release, eV.yg);
}
function nT() {
    return (0, eb.isWindows)() && A().satisfies(N.A?.os.release, eV.fG);
}
function nS() {
    return (0, eb.isMac)() && tu.supports(eY.O5.SCREEN_CAPTURE_KIT) && A().satisfies(N.A?.os.release, eV.e);
}
function ny() {
    return (
        (0, eb.isWindows)() &&
        tu.supports(eY.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        tu.supports(eY.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nv() {
    return tu.supports(eY.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function nN() {
    let e = S.w.get("audio");
    null != e && (S.w.set(ez, { [eY.x.DEFAULT]: e }), S.w.remove("audio")),
        (tc = S.w.get(ez) ?? {}),
        E().each(tc, (e) => {
            E().defaultsDeep(e, to()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, eD.OH)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== e$ &&
                    ((e.vadUseKrispSettingVersion = e$), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                e.vadThrehsoldMigrated ||
                    ((e.vadThrehsoldMigrated = !0), e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = e2)),
                tu.supports(eY.O5.SIDECHAIN_COMPRESSION) &&
                    e.sidechainCompressionSettingVersion < eX &&
                    ((e.sidechainCompressionSettingVersion = eX), (e.sidechainCompression = !0)),
                (0, eb.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== eZ &&
                      ((e.ncUseKrispjsSettingVersion = eZ), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== eq &&
                      ((e.ncUseKrispSettingVersion = eq), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
        }),
        nR();
}
function nC(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eY.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = na(t);
    return Object.assign(r, e), !__OVERLAY__ && n && S.w.set(ez, tc), r;
}
function nb() {
    S.w.remove(ez), location.reload();
}
function nR() {
    let e = no();
    tu.setAudioInputDevice(e.inputDeviceId),
        tu.setAudioOutputDevice(e.outputDeviceId),
        n_(),
        tu.setInputVolume(e.inputVolume),
        tu.setOutputVolume(e.outputVolume),
        tu.setAecDump(e.aecDumpEnabled),
        tu.setSidechainCompression(e.sidechainCompression),
        tu.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        tu.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing);
}
function nO() {
    t_ || tu.enable().then(() => v.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nD(e) {
    return { id: eY.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
}
function nL(e, t) {
    if (0 === e.length) {
        let e = nD(t);
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
function nw(e, t) {
    let n = e[t] ?? e[eY.dx] ?? E()(e).values().first();
    return null != n ? n.id : t;
}
function nx(e) {
    let t = tE;
    if (((tE = nL(e, eW.intl.string(eW.t["/QIjDA"]))), !E().isEqual(tE, t))) {
        let e = no(),
            t = nw(tE, e.inputDeviceId);
        tu.setAudioInputDevice(t), tu.eachConnection(ng);
    }
}
function nM(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nP(e) {
    tu.eachConnection((t) => {
        t.context === eY.x.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function nk(e) {
    let t = tg;
    if (((tg = nL(e, eW.intl.string(eW.t.xlUg0v))), !E().isEqual(tg, t))) {
        let e = no(),
            n = nw(tg, e.outputDeviceId);
        tu.setAudioOutputDevice(n);
        let r = nM(t),
            i = nM(tg);
        r !== i && nP(i);
    }
}
function nU(e) {
    tx = e.length > 0;
    let t = tA;
    if (((tA = nL(e, eW.intl.string(eW.t.WKWARY))), tN && !E().isEqual(tA, t))) {
        let e = void 0 !== tA[tC],
            n = tC === eY.dx && t[eY.dx]?.disabled;
        n_(e || n);
    }
}
function nG() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = eI.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let r = n === eH.W.USER ? eY.x.DEFAULT : eY.x.STREAM,
            i = r === eY.x.STREAM ? eY.Cn : eY.Hz,
            s = t[n] ?? {},
            { localMutes: a, localVolumes: o } = no(r);
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
        nC({ localMutes: a, localVolumes: o }, r);
    }
}
function nF(e) {
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
function nV(e, t) {
    (0, eb.isWindows)() &&
        e > 1 &&
        C.GH(e, { soundshare_session: t }).then((t) => {
            null == t ||
                U.Ay.shouldContinueWithoutElevatedProcessForPID(e) ||
                v.h.wait(() => {
                    v.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: t });
                });
        });
}
function nB(e) {
    (i = e.sessionId), (tT = !1), (tv = !1);
    let t = no();
    if (
        (ny() && (nv() ? rj(eY.rB.AUTOMATIC) : t.automaticAudioSubsystem && rY()),
        tu.supports(eY.O5.OFFLOAD_ADM_CONTROLS))
    ) {
        let e = !1;
        (0, eb.isDesktop)()
            ? (e = (0, H.i)({ location: "handleConnectionOpen" }).enabled)
            : ((0, eb.isIOS)() || (0, eb.isAndroid)()) && (e = (0, j.Y)({ location: "handleConnectionOpen" }).enabled),
            tu.setOffloadAdmControls(e);
    }
    (0, eS.Lb)({ location: "MediaEngineStore", autoTrackExposure: !1 }) &&
        null !== t.mostRecentlyRequestedVoiceFilter &&
        (0, eb.isDesktop)() &&
        (ey.A.getLastInitAttemptMayHaveCrashed()
            ? (v.h.dispatch({ type: "AUDIO_SET_SELF_MUTE", mute: !0, context: eY.x.DEFAULT, playSoundEffect: !0 }),
              nC({ mostRecentlyRequestedVoiceFilter: null }))
            : n(342887).md()),
        nG();
}
function nH(e) {
    let { mediaEngineState: t } = e;
    (tc = t.settingsByContext),
        (tE = t.inputDevices),
        (tg = t.outputDevices),
        (t3 = t.appSupported),
        (tF = t.krispModuleLoaded),
        (c = t.krispVersion),
        (tp = t.goLiveContext);
}
function nj() {
    i = null;
}
function nY() {
    if ((0, eb.isWeb)()) {
        let e = es.f1.getCurrentConfig({ location: "MediaEngineStore handlePostConnectionOpen" });
        e.loadWasmModule && e.preload && r.startDavePreload();
    }
    return !1;
}
function nW(e) {
    switch (e.state) {
        case eF.S7L.CONNECTING:
            nO();
            break;
        case eF.S7L.RTC_CONNECTING:
            (tP = !1), (l = void 0), (u = void 0), (tM = !1), (t7 = !1), t8.stop(), tk.stop(), o.reset();
            break;
        case eF.S7L.RTC_CONNECTED:
            n_();
            break;
        case eF.S7L.DISCONNECTED:
            n0(), n1();
    }
}
function nK(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (tT = t.mute || t.suppress), (tv = t.deaf), tu.eachConnection(nc);
            let e = null != t.guildId && null != t.channelId && null != tK && tK !== t.channelId,
                n = !tU && null == t.channelId;
            return n_(!e && !n && tN), (tK = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== eL.default.getId() || null != eP.A.getChannelId() || n_(!1, null), e;
    }, !1);
}
function nz(e) {
    let { mute: t } = e;
    (tS = t), tu.eachConnection(nc);
}
function n$(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = no(t);
    if (t === eY.x.DEFAULT && (eh.A.requestPermission(eB.iL.AUDIO), ty)) return !1;
    (r = !i && !r) || (i = !1), n || (tR = !0), nC({ mute: r, deaf: i }, t), tu.eachConnection(nc);
}
function nq(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    nC({ mute: n }, t), r || (tR = !0), tu.eachConnection(nc);
}
function nZ(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== eH.oD.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    nG(!0);
}
function nX(e) {
    let { context: t } = e;
    nC({ deaf: !no(t).deaf }, t), tu.eachConnection(nc);
}
function nQ(e) {
    let { context: t, userId: n } = e;
    if (n === eL.default.getId()) return;
    let { localMutes: r } = no(t);
    r[n] ? delete r[n] : (r[n] = !0),
        nC({ localMutes: r }, t),
        tu.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nJ(e) {
    let { context: t, userId: n, videoToggleState: r, persist: i, isAutomatic: s } = e;
    h()(!(i && s), "These are not allowed to both be true.");
    let a = r === eF.bb8.DISABLED,
        { disabledLocalVideos: o } = no(t),
        l = o[n] ?? !1,
        u = t0.has(n),
        c = r === eF.bb8.AUTO_ENABLED || r === eF.bb8.MANUAL_ENABLED;
    eK.info(`disableVideo=${a} currentlyDisabled=${l} currentlyAutoDisabled=${u}, isVideoShown=${c}`),
        h()(!(u && !l), "If you are auto-disabled, then you are also disabled.");
    let d = a !== l,
        _ = t === eY.x.DEFAULT,
        f = s && d && _,
        p = i && d && _;
    eK.info(`changed=${d} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${f} isManualToggleByUser=${p}`);
    let { videoToggleStateMap: m } = no(t);
    if (
        (m[n] === eF.bb8.AUTO_PROBING &&
            r === eF.bb8.AUTO_ENABLED &&
            (0, ep.A)(n, a ? eY.Al.AUTO_DISABLE : eY.Al.AUTO_ENABLE, c),
        (m[n] = r),
        nC({ videoToggleStateMap: m }, t, i),
        r === eF.bb8.AUTO_PROBING
            ? eP.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
            : eP.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
        t1 ||
            (eK.info(`isAutoDisableAllowed=${t1} - disabling VideoHealthManager`),
            eP.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
        f)
    ) {
        if ((!a && !u) || (a && !t1)) return;
        (0, ep.A)(n, a ? eY.Al.AUTO_DISABLE : eY.Al.AUTO_ENABLE, c), a ? t0.add(n) : t0.delete(n);
    } else
        p &&
            (u && !a
                ? (eK.info("disallowing auto-disable for this session because of manual override by user"),
                  (t1 = !1),
                  eP.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                  (0, ep.A)(n, eY.Al.MANUAL_REENABLE, c))
                : (0, ep.A)(n, a ? eY.Al.MANUAL_DISABLE : eY.Al.MANUAL_ENABLE, c));
    _ && !a && t0.delete(n),
        a ? (o[n] = !0) : delete o[n],
        nC({ disabledLocalVideos: o }, t, i),
        tu.eachConnection((e) => e.setLocalVideoDisabled(n, o[n] ?? !1), t);
}
function n0() {
    if (0 === t0.size) return;
    let e = eY.x.DEFAULT,
        { disabledLocalVideos: t } = no(e);
    t0.forEach((n) => {
        h()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            tu.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        t0.clear(),
        nC({ disabledLocalVideos: t }, e, !1);
}
function n1() {
    let e = eY.x.DEFAULT,
        { videoToggleStateMap: t } = no(e);
    for (let [e, n] of Object.entries(t)) n === eF.bb8.AUTO_PROBING && delete t[e];
    nC({ videoToggleStateMap: t }, e, !1);
}
function n2(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === eL.default.getId()) return;
    let i = t === eY.x.STREAM ? eY.Cn : eY.Hz,
        { localVolumes: s } = no(t);
    r === i ? delete s[n] : (s[n] = r), nC({ localVolumes: s }, t), tu.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function n3(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: s } = no(t);
    (s[n] = { left: r, right: i }), nC({ localPans: s }, t), tu.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function n6(e) {
    let { context: t, mode: n, options: r } = e;
    nC({ mode: n, modeOptions: { ...r, updatedAt: Date.now() } }, t), tu.eachConnection(nl);
}
function n4(e) {
    let { volume: t } = e;
    nC({ inputVolume: nu(t) }), tu.setInputVolume(t);
}
function n5(e) {
    let { volume: t } = e;
    nC({ outputVolume: t }), tu.setOutputVolume(t);
}
function n7(e) {
    let { id: t } = e;
    (t = nw(tE, t)),
        (th = performance.now()),
        nC({ inputDeviceId: t }),
        tu.setAudioInputDevice(t),
        tu.eachConnection(ng),
        (l = void 0),
        (u = void 0),
        t8.stop(),
        (t7 = !1);
    let { resetSilenceWarningOnDeviceChange: n } = ea.A.getConfig({
        location: "MediaEngineStore.handleSetInputDevice",
    });
    n && ((tM = !1), o.reset());
}
function n8(e) {
    let { id: t } = e;
    nC({ outputDeviceId: (t = nw(tg, t)) }), tu.setAudioOutputDevice(t);
}
function n9(e) {
    let { id: t } = e;
    nC({ videoDeviceId: (t = nw(tA, t)) }), n_();
}
function re(e) {
    let { inputProfile: t } = e;
    nC({ activeInputProfile: t });
    let n = no();
    tu.eachConnection((e) => {
        nl(e), ng(e);
    }),
        tu.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        rd();
}
function rt(e) {
    return tf !== e.required && ((tf = e.required), e.required || tu.interact(), !0);
}
function rn(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    nx(t), nk(n), nU(r);
}
function rr(e) {
    let { inputVolume: t, outputVolume: n } = e;
    nC({ inputVolume: nu(t), outputVolume: n });
}
function ri(e) {
    let t = no(),
        n = tu.getAudioSubsystem(),
        i = tu.getAudioLayer(),
        s = nw(tE, t.inputDeviceId),
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
function rs(e) {
    let t = nC({ echoCancellation: e.enabled });
    tu.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), rd(), ri(e.location);
}
function ra(e) {
    rl(e.enabled);
}
function ro(e) {
    let t = nC({ sidechainCompressionStrength: e.strength });
    tu.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function rl(e) {
    let t = nC({ sidechainCompression: e });
    tu.setSidechainCompression(t.sidechainCompression);
}
function ru(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? t2.add(n) : t2.delete(n), rc(), rd();
}
function rc() {
    let e = !t2.has("voice_filter_preview") && !t2.has("mic_test");
    tu.setMaybePreprocessMute(e);
}
function rd() {
    let e = no(),
        t = t2.size > 0,
        n = e.inputDeviceId,
        r = ex.A.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        s = ex.A.hasNoiseSuppression(n) || e.noiseSuppression,
        a = nh(ex.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        o = e.noiseCancellation,
        l = null !== tH,
        u = t2.has("voice_filter") && 1 === t2.size;
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
async function r_() {
    if (!tu.supports(eY.O5.VAAPI)) return;
    let e = 4098;
    if (window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let t = await window.DiscordNative.processUtils.getSystemInfo();
    (t.electronGPUInfo?.gpuDevice ?? []).some((t) => t.vendorId === e) &&
        ((nt = !0), (ne = tu.supports(eY.O5.GAMESCOPE_CAPTURE)));
}
function rf(e) {
    let t = nC({ noiseSuppression: e.enabled });
    tu.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), rd(), ri(e.location);
}
function rp(e) {
    let t = nC({ automaticGainControl: e.enabled });
    tu.eachConnection((e) => nm(e, t.automaticGainControl)), rd(), ri(e.location);
}
function rh(e) {
    let t = nC({ noiseCancellation: e.enabled });
    tu.eachConnection((e) => nE(e, t.noiseCancellation)), rd(), ri(e.location);
}
function rm(e) {
    em.A.setKrispModelOverride(e.model), (_ = e.model), rd();
}
function rE(e) {
    (0, eb.isWeb)() || ((tB = e.enabled), tu.setNoiseCancellationEnableStats?.(e.enabled));
}
function rg(e) {
    nC({ silenceWarning: e.enabled });
}
function rA(e) {
    tu.setDebugLogging(e.enabled);
}
function rI(e) {
    let { level: t } = e;
    (d = t), em.A.setKrispSuppressionLevel(t);
}
function rT(e) {
    nC({ videoHook: e.enabled });
}
function rS(e) {
    nC({ experimentalSoundshare2: e.enabled });
}
function ry(e) {
    let { enabled: t } = e;
    nC({ useSystemScreensharePicker: t });
}
function rv(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = nC({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r });
    tu.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function rN(e) {
    let { enabled: t } = e;
    nC({ qos: t }), tu.eachConnection((e) => e.setQoS(t));
}
function rC() {
    nb();
}
function rb(e) {
    let { osVolume: t, osMuted: n } = e;
    (u = t), (l = n);
}
function rR(e) {
    let { inputDetected: t } = e;
    if (null == t) return !1;
    if (((tP = !0 !== tM && !t), t)) (tM = !0), (t7 = !1), t8.stop(), tk.stop();
    else if (no().mode === eF.TBI.VOICE_ACTIVITY && tM) {
        let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = ea.A.getConfig({
            location: "MediaEngineStore.handleInputDetected",
        });
        e &&
            t8.start(e5, () => {
                ev.default.track(eF.HAw.HARDWARE_MUTE_GUESSED, {
                    input_device_name: tE[nw(tE, no().inputDeviceId)]?.name,
                    rtc_connection_id: eP.A.getRTCConnectionId(),
                }),
                    (t7 = !0),
                    r.emitChange();
            }),
            null != t &&
                tk.start(t * eC.A.Millis.MINUTE, () => {
                    (tM = !1), o.reset();
                });
    }
}
function rO(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === ty) return !1;
    (ty = n), tu.eachConnection(nc);
}
function rD(e) {
    let { state: t, permissionType: n } = e,
        r = t === eB.hL.ACCEPTED;
    switch (n) {
        case eB.iL.AUDIO:
            (tQ = !0), tu.eachConnection(nc);
            break;
        case eB.iL.CAMERA:
            !r && tN && n_(!1);
            break;
        default:
            return !1;
    }
}
function rL() {
    return tF || !1;
}
async function rw() {
    try {
        await eO.Ay.ensureModule("discord_krisp");
        let e = eO.Ay.requireModule("discord_krisp");
        (tF = !0),
            (c = e.getSdkVersion?.()),
            (d = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (tV = e), r.emitChange();
            }),
            r.emitChange();
    } catch (t) {
        eK.warn(`Failed to load Krisp module: ${t.message}`), eR.A.captureException(t);
        let e = eY.CO.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eY.CO.INITIALIZED : n;
        }
        ev.default.track(eF.HAw.VOICE_PROCESSING, { noise_canceller_error: e }), nC({ noiseCancellation: !1 });
    } finally {
        tG = !1;
    }
}
function rx() {
    return (0, eb.isWindows)() || (0, eb.isLinux)() || (0, eb.isMac)();
}
function rM() {
    !rx() || __OVERLAY__ || tG || tF
        ? (0, eb.isWeb)() && tu.supports(eY.O5.NOISE_CANCELLATION)
            ? ((tF = !0), r.emitChange())
            : (0, eb.isWeb)() && nC({ noiseCancellation: !1 })
        : ((tG = !0), rw());
}
async function rP() {
    try {
        let e,
            t = "",
            n = !1,
            r = URL.parse(e9);
        if (null === r) return void eK.log("OpenH264 URL ", r, " is invalid");
        let i = r.pathname.split("/"),
            s = i[i.length - 1].replace(".bz2", "");
        try {
            let t = await eO.Ay.downloadOpenH264(e9, s, te, (e) => {
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
            let e = await eO.Ay.cleanupUnusedOpenH264Files([s]);
            eK.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        eK.error("OpenH264 download failed", e);
    }
}
function rk() {
    (0, eb.isLinux)() && rP();
}
function rU(e) {
    let { enabled: t } = e;
    ev.default.track(eF.HAw.VOICE_FILTER_PLAYBACK_TOGGLED, { active_voice_filter_id: tH ?? null, enabled: t }),
        nC({ voiceFilterPlaybackEnabled: t });
}
function rG(e) {
    let { newVoiceFilterId: t } = e;
    nC({ mostRecentlyRequestedVoiceFilter: t }), tu.eachConnection((e) => e.setVoiceFilterId(t));
}
function rF() {
    nC({ mostRecentlyRequestedVoiceFilter: null });
}
function rV(e) {
    let { voiceFilterId: t } = e;
    (tY = tH), (tW = tj), (tH = t), (tj = null === t ? null : Date.now());
}
function rB(e) {
    let t = e.bypassEnabled;
    nC({ bypassSystemInputProcessing: t }), tu.setAudioInputBypassSystemProcessing(t), ri(e.location);
}
function rH(e) {
    rj(e.subsystem);
}
function rj(e) {
    e === eY.rB.AUTOMATIC
        ? (nC({ automaticAudioSubsystem: !0 }), rY())
        : (nC({ automaticAudioSubsystem: !1 }), tu.setAudioSubsystem(e));
}
function rY() {
    tu.queueAudioSubsystem(eY.rB.EXPERIMENTAL);
}
function rW(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && n_(i, null), null != t || null == n)) {
        tU = !1;
        return;
    }
    if (tU) return;
    tU = !0;
    let s = no();
    (s.mute || s.deaf) && (nC({ deaf: !1, mute: !1 }), tu.eachConnection(nc));
}
function rK(e) {
    let { application: t } = e;
    td.add(t.id);
}
function rz(e) {
    let { application: t } = e;
    td.delete(t.id);
}
function r$(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (t_ = !1), tu.eachConnection(nc);
                break;
            case "video":
                n_(!1);
        }
}
function rq(e) {
    (t_ = e.enabled), e.unmute && nC({ mute: !1, deaf: !1 }), tu.eachConnection(nc);
}
function rZ(e) {
    let { enabled: t } = e;
    eh.A.requestPermission(eB.iL.CAMERA), n_(t);
}
function rX(e) {
    let { sourceId: t, applicationName: n, quality: i } = e;
    if (!(0, L.Ao)() || null == N.A) return !1;
    let s = null,
        o = null,
        l = eN.A.getPidFromDesktopSource(t);
    ({ soundshareId: s, soundshareSession: o } = nF(l));
    let u = { desktopSource: { id: t, sourcePid: l, soundshareId: s, soundshareSession: o }, quality: i };
    null != a &&
        (tu.setClipsSource(null),
        (0, eb.isWindows)() && null != a.desktopSource.soundshareId && C.c1(a.desktopSource.soundshareId)),
        null != s && nV(s, o),
        (a = u);
    let c = nr("MediaEngineStore clips"),
        d = no().videoHook;
    tu.setClipsSource({
        desktopDescription: {
            id: a.desktopSource.id,
            soundshareId: a.desktopSource.soundshareId,
            useVideoHook: d,
            useGraphicsCapture: nI(),
            useCaptureDeviceForEncode: !1,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: nS(),
            videoHookStaleFrameTimeoutMs: e0,
            graphicsCaptureStaleFrameTimeoutMs: e1,
            hdrCaptureMode: c,
        },
        quality: i,
        applicationName: n,
    });
}
function rQ(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((a = null), tu.setClipsSource(null));
}
function rJ(e) {
    let { settings: t } = e;
    if (t?.desktopSettings != null) {
        let e = null,
            n = null,
            { sourceId: r, sound: i } = t.desktopSettings,
            s = t.context ?? eY.x.DEFAULT,
            a = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
            o = !1 === i ? null : eN.A.getPidFromDesktopSource(r);
        eb.isPlatformEmbedded &&
            !0 === i &&
            (({ soundshareId: e, soundshareSession: n } = nF(o)), null != e && nV(e, n)),
            nd(s),
            n_(s === eY.x.STREAM && tN, {
                desktopSource: { id: r, sourcePid: o, soundshareId: e, soundshareSession: n },
                quality: { resolution: a.resolution, frameRate: a.frameRate },
            });
    } else if (t?.cameraSettings != null) {
        let e = t.context ?? eY.x.DEFAULT,
            { videoDeviceGuid: n, audioDeviceGuid: r } = t.cameraSettings,
            i = e === eY.x.STREAM && tN,
            s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
        n_(i, {
            cameraSource: { videoDeviceGuid: n, audioDeviceGuid: r },
            quality: { resolution: s.resolution, frameRate: s.frameRate },
        });
    } else n_(tN, null);
}
function r0(e) {
    let { section: t } = e;
    return t === eF.nc_.VOICE && nO(), !1;
}
function r1() {
    return tu.eachConnection(ng), !1;
}
function r2(e) {
    let { enabled: t } = e,
        n = nC({ aecDumpEnabled: t });
    tu.setAecDump(n.aecDumpEnabled);
}
function r3(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (tc = Object.values(eY.x).reduce((e, n) => {
        let r = n,
            i = to();
        return (e[r] = E().merge(i, t[r])), e;
    }, {})),
        S.w.set(ez, tc),
        nR();
}
function r6(e) {
    let { state: t } = e,
        n = k.A.isEnabled();
    if (t === eF.g6G.BACKGROUND && tN && !n) (tw = !0), n_(!1);
    else {
        if (t !== eF.g6G.ACTIVE || !tw) return !1;
        (tw = !1), n_(!0);
    }
    return !0;
}
function r4(e) {
    tu.eachConnection((t) => t.setBitRate(e.bitrate));
}
function r5() {
    if ((!tN && null == s) || null != eP.A.getRTCConnectionId()) return !1;
    n_(!1, null);
}
function r7() {
    return !!tz && ((tz = !1), !0);
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
    t5 = e.enabled;
}
function ii() {
    if ((0, eb.isDesktop)() && eb.isPlatformEmbedded && !nn) {
        nn = !0;
        let e = async () => {
            let t = await new Promise((e) => {
                eO.Ay.pollQueueMetrics((t) => {
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
class is extends I.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        nA(),
            nN(),
            rM(),
            rk(),
            n1(),
            ii(),
            (0, eb.isWindows)() && eb.isPlatformEmbedded && np(),
            (t3 = {
                [eY.O5.VIDEO]: tu.supports(eY.O5.VIDEO),
                [eY.O5.DESKTOP_CAPTURE]: tu.supports(eY.O5.DESKTOP_CAPTURE),
                [eY.O5.HYBRID_VIDEO]: tu.supports(eY.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eL.default, ew.A, ex.A, eM.A, O.A, P.A, eP.A, U.Ay, eg.A, eI.A, eU.default, eG.A, ey.A);
    }
    supports(e) {
        return tu.supports(e);
    }
    supportsInApp(e) {
        return t3[e] || tu.supports(e);
    }
    isSupported() {
        return tu.supported();
    }
    isNoiseSuppressionSupported() {
        return tu.supports(eY.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return rL();
    }
    isNoiseCancellationError() {
        return tz;
    }
    isAutomaticGainControlSupported() {
        return tu.supports(eY.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nv() && (tu.supports(eY.O5.LEGACY_AUDIO_SUBSYSTEM) || tu.supports(eY.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return tu.supports(eY.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === tu.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return rL();
    }
    isAecDumpSupported() {
        return tu.supports(eY.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return tu.supports(eY.O5.VIDEO) && tu.supports(eY.O5.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        return eM.A.getChannel(tK)?.type !== eF.rbe.GUILD_STAGE_VOICE && e7 && X.A.simulcastEnabled();
    }
    getAecDump() {
        return no().aecDumpEnabled;
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
        return tB;
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
            no(e).mute ||
            !eh.A.didHavePermission(eB.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eY.x.DEFAULT && ty)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tR;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tR = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eY.x.DEFAULT,
            t = t7 && "voice_isolation" !== this.getSystemMicrophoneMode() && no(e).mode === eF.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (ex.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return t5;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eY.x.DEFAULT;
        return !this.isSupported() || no(e).deaf;
    }
    isVideoEnabled() {
        return tN && tx;
    }
    isVideoAvailable() {
        return Object.values(tA).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
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
        return e !== eL.default.getId() && (no(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return tu.supports(eY.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eY.x.DEFAULT;
        return no(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eY.x.DEFAULT;
        return no(t).videoToggleStateMap[e] ?? eF.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eY.x.DEFAULT;
        return t === eY.x.DEFAULT && t0.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eY.x.DEFAULT;
        return e === eY.x.DEFAULT && t0.size > 0;
    }
    isMediaFilterSettingLoading() {
        return t$;
    }
    isNativeAudioPermissionReady() {
        return tQ;
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
            n = no(t).localPans[e];
        return null != n ? n : eJ;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eY.x.DEFAULT,
            n = t === eY.x.STREAM ? eY.Cn : eY.Hz,
            r = no(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return no().inputVolume;
    }
    getOutputVolume() {
        return no().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eY.x.DEFAULT;
        return no(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eY.x.DEFAULT;
        return no(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return tH;
    }
    getActiveVoiceFilterAppliedAt() {
        return tj;
    }
    getPreviousVoiceFilter() {
        return tY;
    }
    getPreviousVoiceFilterAppliedAt() {
        return tW;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return no().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return no().voiceFilterPlaybackEnabled;
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
        return nw(tE, no().inputDeviceId);
    }
    getOutputDeviceId() {
        return nw(tg, no().outputDeviceId);
    }
    getVideoDeviceId() {
        return nw(tA, no().videoDeviceId);
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
        let e = no();
        return ex.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return tu.supports(eY.O5.SIDECHAIN_COMPRESSION) && no().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return no().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return no().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tZ && tZ;
    }
    getLoopback() {
        return t2.size > 0;
    }
    getLoopbackReasons() {
        return t2;
    }
    getNoiseSuppression() {
        let e = no();
        return ex.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = no();
        return ex.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return no().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return no().noiseCancellation;
    }
    getHardwareEncoding() {
        return e7;
    }
    getEnableSilenceWarning() {
        return no().silenceWarning;
    }
    getDebugLogging() {
        return tu.getDebugLogging();
    }
    getQoS() {
        return no().qos;
    }
    getAttenuation() {
        return no().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return no().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return no().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return ny() && no().automaticAudioSubsystem ? eY.rB.AUTOMATIC : tu.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return tu.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return no().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === ej.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eY.x.DEFAULT;
        return no(e);
    }
    getState() {
        return {
            settingsByContext: tc,
            inputDevices: tE,
            outputDevices: tg,
            appSupported: t3,
            krispModuleLoaded: tF,
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
        return tP;
    }
    getInputDeviceOSMuted() {
        return l;
    }
    getInputDeviceOSVolume() {
        return u;
    }
    getPacketDelay() {
        return eb.isPlatformEmbedded || this.getMode() !== eF.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        tu.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return tf;
    }
    getVideoHook() {
        return no().videoHook;
    }
    supportsVideoHook() {
        return tu.supports(eY.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = no().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return tu.supports(eY.O5.EXPERIMENTAL_SOUNDSHARE) && A().satisfies(N.A?.os.release, eV.$x);
    }
    supportsHookSoundshare() {
        return (0, eb.isWindows)() && tu.supports(eY.O5.SOUNDSHARE) && A().satisfies(N.A?.os.release, eV.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = no().useSystemScreensharePicker,
            n = (0, eb.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return tu.supports(eY.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return nt;
    }
    getUseGamescopeCapture() {
        return ne;
    }
    getEverSpeakingWhileMuted() {
        return tO;
    }
    getSpeakingWhileMuted() {
        return tD;
    }
    getKrispModelOverride() {
        return _;
    }
    getKrispModels() {
        return tV;
    }
    getKrispVadActivationThreshold() {
        return no().modeOptions.vadKrispActivationThreshold ?? eQ;
    }
    hasActiveCallKitCall() {
        return t9;
    }
    setHasActiveCallKitCall(e) {
        t9 = e;
    }
    supportsScreenSoundshare() {
        return (0, eb.isMac)()
            ? tu.supports(eY.O5.SOUNDSHARE) && A().satisfies(N.A?.os.release, eV.P$) && nS()
            : (0, eb.isWindows)()
              ? tu.supports(eY.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, eb.isLinux)() && tu.supports(eY.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        return (0, eb.isWindows)()
            ? this.getInputDevices()[this.getInputDeviceId()]?.effects?.find((e) => e === e8)
            : (0, eb.isMac)() || (0, eb.isIOS)()
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
            (0, eb.isWeb)() &&
                (e.fetchDave = es.f1.getCurrentConfig({
                    location: "MediaEngineStore fetchAsyncResources",
                }).loadWasmModule),
            tu.fetchAsyncResources(e)
        );
    }
    startDavePreload() {
        if (!tq && ((tq = !0), (0, eb.isWeb)())) {
            let e = { fetchDave: !0 };
            tu.fetchAsyncResources(e).catch((e) => {
                eK.warn("DAVE preload failed:", e), eR.A.captureException(e);
            });
        }
    }
    getSupportedSecureFramesProtocolVersion() {
        if ((0, eb.isWeb)()) {
            let { useWasmModule: e } = es.f1.getCurrentConfig({
                location: "MediaEngineStore getSupportedSecureFramesProtocolVersion",
            });
            if (!e) return 0;
        }
        let e = tu.getSupportedSecureFramesProtocolVersion();
        114 === e && (e = 1);
        let t = es.ex.getCurrentConfig({ location: "MediaEngineStore" }),
            n = es.a.getConfig({ location: "MediaEngineStore" });
        return (t.canSupportDaveProtocol || (n.allowOptIn && eg.A.getPersistentCodesEnabled())) &&
            e >= t.protocolVersionFloor
            ? e
            : 0;
    }
    hasClipsSource() {
        return null != a;
    }
    getGpuBrand() {
        return t6;
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
(r = new is(v.h, {
    VOICE_CHANNEL_SELECT: rW,
    VOICE_STATE_UPDATES: nK,
    CONNECTION_OPEN: nB,
    CONNECTION_CLOSED: nj,
    POST_CONNECTION_OPEN: nY,
    RTC_CONNECTION_STATE: nW,
    AUDIO_SET_TEMPORARY_SELF_MUTE: nz,
    AUDIO_TOGGLE_SELF_MUTE: n$,
    AUDIO_SET_SELF_MUTE: nq,
    AUDIO_TOGGLE_SELF_DEAF: nX,
    AUDIO_TOGGLE_LOCAL_MUTE: nQ,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: nJ,
    AUDIO_SET_LOCAL_VOLUME: n2,
    AUDIO_SET_LOCAL_PAN: n3,
    AUDIO_SET_MODE: n6,
    AUDIO_SET_INPUT_VOLUME: n4,
    AUDIO_SET_OUTPUT_VOLUME: n5,
    AUDIO_SET_INPUT_DEVICE: n7,
    AUDIO_SET_OUTPUT_DEVICE: n8,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: re,
    AUDIO_SET_ECHO_CANCELLATION: rs,
    AUDIO_SET_SIDECHAIN_COMPRESSION: ra,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: ro,
    AUDIO_SET_LOOPBACK: ru,
    AUDIO_SET_NOISE_SUPPRESSION: rf,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: rp,
    AUDIO_SET_NOISE_CANCELLATION: rh,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: rm,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: rg,
    AUDIO_SET_DEBUG_LOGGING: rA,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: rI,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: rE,
    MEDIA_ENGINE_SET_VIDEO_HOOK: rT,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: rS,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: ry,
    AUDIO_SET_ATTENUATION: rv,
    AUDIO_SET_QOS: rN,
    MEDIA_ENGINE_DEVICES: rn,
    AUDIO_VOLUME_CHANGE: rr,
    AUDIO_RESET: rC,
    AUDIO_INPUT_DETECTED: rR,
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: rb,
    AUDIO_SET_SUBSYSTEM: rH,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rB,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rq,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rZ,
    MEDIA_ENGINE_PERMISSION: r$,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rJ,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: n9,
    MEDIA_ENGINE_INTERACTION_REQUIRED: rt,
    USER_SETTINGS_MODAL_INIT: r0,
    USER_SETTINGS_MODAL_SET_SECTION: r0,
    CERTIFIED_DEVICES_SET: r1,
    RPC_APP_CONNECTED: rK,
    RPC_APP_DISCONNECTED: rz,
    OVERLAY_INITIALIZE: nH,
    APP_STATE_UPDATE: r6,
    SET_CHANNEL_BITRATE: r4,
    SET_VAD_PERMISSION: rO,
    SET_NATIVE_PERMISSION: rD,
    SET_CHANNEL_VIDEO_QUALITY_MODE: r8,
    MEDIA_ENGINE_SET_AEC_DUMP: r2,
    MEDIA_ENGINE_RESET_SETTINGS: r3,
    CHANNEL_DELETE: r5,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: r7,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: r9,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: ie,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: it,
    USER_SETTINGS_PROTO_UPDATE: nZ,
    CLIPS_INIT: rX,
    CLIPS_SETTINGS_UPDATE: rQ,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: ir,
    VOICE_FILTER_REQUEST_SWITCH: rG,
    VOICE_FILTER_LOOPBACK_TOGGLE: rU,
    VOICE_FILTER_APPLIED: rV,
    VOICE_FILTER_DOWNLOAD_FAILED: rF,
    VOICE_FILTER_APPLY_FAILED: rF,
})),
    (o = new ee.A(tu, r));
let io = r;
