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
    R = n(894539),
    O = n(124838),
    b = n(274372),
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
    $ = n(269377),
    z = n(934341),
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
    eu = n(886124),
    ec = n(165479),
    ed = n(896014),
    e_ = n(765396),
    ef = n(75076),
    ep = n(674966),
    eh = n(559633),
    em = n(3527),
    eE = n(714763),
    eg = n(879172),
    eA = n(617617),
    eI = n(340913),
    eT = n(996744),
    eS = n(28075),
    ey = n(954571),
    ev = n(353835),
    eN = n(927813),
    eC = n(723702),
    eR = n(728458),
    eO = n(837921),
    eb = n(350535),
    eD = n(961350),
    eL = n(131319),
    ew = n(347481),
    ex = n(734057),
    eM = n(383501),
    eP = n(851581),
    ek = n(287809),
    eU = n(117549),
    eG = n(652215),
    eF = n(502075),
    eV = n(765682),
    eB = n(355097),
    eH = n(509381),
    ej = n(731854),
    eY = n(985018);
let eW = new w.A("MediaEngineStore"),
    eK = "MediaEngineStore",
    e$ = 4,
    ez = 1,
    eq = 1,
    eZ = 1,
    eX = 0.5,
    eQ = { left: 1, right: 1 },
    eJ = 500,
    e0 = 5 * eN.A.Millis.SECOND,
    e1 = -60,
    e2 = 100,
    e3 = 2 * eN.A.Millis.SECOND,
    e6 = 30 * eN.A.Millis.SECOND,
    e4 = +eN.A.Millis.MINUTE,
    e5 = !0,
    e7 = "deep_noise_suppression",
    e8 = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2",
    e9 = "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f",
    te = 0,
    tt = null;
function tn() {
    if (!(0, eC.isIOS)() || null == tt) return !1;
    let e = tt();
    if (null == e || !e.startsWith("ARM64_")) return !1;
    let t = e.substring(6);
    return ("T" === t[0] || "S" === t[0]) && parseInt(t.substring(1), 10) >= 8122;
}
let tr = null;
async function ti() {
    if (!(0, eC.isMac)() || N.A?.os.arch !== "arm64" || N.A?.processUtils?.getSystemInfo == null) {
        tr = !1;
        return;
    }
    let e = await N.A.processUtils.getSystemInfo(),
        t = (e.cpus?.[0]?.model ?? "").match(/Apple M(\d+)/);
    if (null == t) {
        tr = !0;
        return;
    }
    tr = parseInt(t[1], 10) >= 3;
}
function ts() {
    return !0 === tr;
}
function ta() {
    return {
        mode: eG.TBI.VOICE_ACTIVITY,
        modeOptions: {
            threshold: e1,
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
        videoHook: tl.supports(ej.O5.VIDEO_HOOK),
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
let to = {
        [eH.m.CUSTOM]: {},
        [eH.m.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [eH.m.STUDIO]: {
            mode: eG.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    tl = (0, T.hB)((0, T.WI)());
eW.enableNativeLogger(!0);
let tu = {},
    tc = new Set([ej.x.DEFAULT]),
    td = tl.supports(ej.O5.AUTO_ENABLE),
    t_ = !1,
    tf = ej.x.STREAM,
    tp = performance.now(),
    th = null,
    tm = { [ej.dx]: nb("No Input Devices") },
    tE = { [ej.dx]: nb("No Output Devices") },
    tg = { [ej.dx]: nb("No Video Devices") },
    tA = new y.Ep(),
    tI = !1,
    tT = !1,
    tS = !1,
    ty = !1,
    tv = !1,
    tN = ej.qe,
    tC = ej.qe,
    tR = !1,
    tO = !1,
    tb = !1,
    tD = new y.Ep(),
    tL = !1,
    tw = !1,
    tx = !1,
    tM = !1,
    tP = new y.Ep(),
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
ep.A.hasPermission(eV.iL.AUDIO, { showAuthorizationError: !1 }),
    ep.A.hasPermission(eV.iL.CAMERA, { showAuthorizationError: !1 });
let tQ = !1,
    tJ = new Set(),
    t0 = tQ,
    t1 = new Set(),
    t2 = {},
    t3 = null,
    t6 = null,
    t4 = !0,
    t5 = !1,
    t7 = new y.Ep(),
    t8 = !1,
    t9 = !1,
    ne = !1,
    nt = !1;
function nn(e) {
    return (0, Z.p)({ location: e }).hdrCaptureMode;
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
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ej.x.DEFAULT,
        t = tu[e];
    return null == t && ((t = ta()), (tu[e] = t)), t;
}
function na() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ej.x.DEFAULT,
        t = ns(e),
        n = to[t.activeInputProfile ?? eH.m.CUSTOM],
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
function no(e) {
    let t = na(e.context),
        n = t.mode;
    e.context === ej.x.DEFAULT && (0, ei.N)(!1, !1);
    let { showPTTSpeakingIndicator: r } = eI.A.getConfig({ location: "setInputMode" }),
        i = r && n === eG.TBI.PUSH_TO_TALK;
    e.setInputMode(n, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: !!i || t.modeOptions.autoThreshold,
        vadUseKrisp: (!!i || t.modeOptions.vadUseKrisp) && rD(),
        vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? eX,
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        vadDuringPreProcess: t.modeOptions.vadDuringPreProcess ?? !1,
        pttReleaseDelay: Math.round(t.modeOptions.delay),
    });
}
function nl(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ej.Hz;
    return E().clamp(e, 0, t);
}
function nu(e) {
    let t = na(e.context),
        n = !td || t.mute || t.deaf;
    e.context === ej.x.DEFAULT
        ? (n = n || tI || tT || tS || !ep.A.didHavePermission(eV.iL.AUDIO))
        : e.context === ej.x.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === ej.x.DEFAULT && R.A.updateNativeMute();
}
function nc(e) {
    e !== tf && (null != s && tl.setGoLiveSource(null, tf), (tf = e));
}
function nd() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tv,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
        n = s;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, eC.isWindows)() && C.c1(n.desktopSource.soundshareId),
            tl.setGoLiveSource(null, tf)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            tl.setGoLiveSource(null, tf),
        tv || e)
    ) {
        let t = na().videoDeviceId;
        tv && t === ej.dx && tC === ej.dx && tN !== ej.qe ? (t = tN) : (tC = t),
            (tN = (tv = e) ? nL(tg, t) : ej.qe),
            tl.setVideoInputDevice(tN);
    }
    if (((s = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = nn("MediaEngineStore go live"),
                i = na().videoHook,
                s = nA(),
                a = s ? (nI() ? eF.zl : eF.eg) : 0,
                o = (0, eC.isWindows)() && (0, el.b)("updateVideo").enabled,
                l = !1;
            (0, eC.isWindows)() &&
                a >= eF.zl &&
                (l =
                    !0 === t6
                        ? ec.q.getConfig({ location: "updateVideo" }).enabled
                        : eu.d.getConfig({ location: "updateVideo" }).enabled),
                tl.setGoLiveSource(
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
                            videoHookStaleFrameTimeoutMs: eJ,
                            graphicsCaptureStaleFrameTimeoutMs: e0,
                            hdrCaptureMode: n,
                            enableGlobalFramePoolLock: (0, q.H)({ location: "updateVideo" }).enabled,
                            useGraphicsCaptureDirtyRegions: l,
                        },
                        quality: e,
                    },
                    tf,
                );
        }
        null != t.cameraSource &&
            tl.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: t.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: t.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                tf,
            );
    }
}
function n_(e) {
    switch (e) {
        case ej.CO.CPU_OVERUSE:
            return M.B6.NoiseCancellerCpuOveruse;
        case ej.CO.FAILED:
            return M.B6.NoiseCancellerFailed;
        case ej.CO.VAD_CPU_OVERUSE:
            return M.B6.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function nf() {
    null === th &&
        tl
            .getCodecSurvey()
            .then((e) => {
                try {
                    let t = JSON.parse(e);
                    if (null == t || null == t.available_video_decoders) throw Error("decoder survey is not available");
                    th = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                } catch (e) {
                    eW.error("Failed to parse codec survey", e), (th = !1);
                }
            })
            .catch((e) => {
                eW.error("Failed to get codec survey", e), (th = !1);
            })
            .finally(() => {
                v.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
            });
}
function np(e) {
    let t = (0, F.F)({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function nh(e, t) {
    e.setAutomaticGainControl(np(t));
}
function nm(e, t) {
    let n = (0, em.A)(t, r.getSystemMicrophoneMode(), { location: "setNoiseCancellation" });
    n !== t && eW.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: i } = (0, F.F)({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(i);
    let { noiseCancellationAfterProcessing: s, vadAfterWebrtc: a } = (0, et.$)({ location: "setNoiseCancellation" });
    e.setNoiseCancellationAfterProcessing(s), e.setVADAfterWebrtc(a);
}
function nE(e) {
    let t = na(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(ew.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(ew.A.hasNoiseSuppression(n) || t.noiseSuppression),
        nh(e, ew.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        nm(e, t.noiseCancellation),
        e.setVoiceFilterId(tB),
        (0, eC.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function ng() {
    tA.start(e6, () => {
        eW.error("Device enumeration timed out"), ey.default.track(eG.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
    }),
        tl.on(T.bg.Connection, (e) => {
            no(e), nu(e), nE(e);
            let t = na();
            e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
                e.setQoS(t.qos),
                (0, eC.isWindows)()
                    ? (e.setExperimentFlag(ej.fd.H265_HARDWARE_ONLY, !0),
                      ni().then((t) => {
                          e.setExperimentFlag(ej.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                      }))
                    : (0, eC.isMac)() && e.setExperimentFlag(ej.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                (0, eC.isWindows)() &&
                    (0, Q.r)({ location: "setupMediaEngine" }).enabled &&
                    (e.setExperimentFlag(ej.fd.USE_H264_MF_DECODER, !0),
                    (0, J.W)({ location: "setupMediaEngine" }).enabled &&
                        e.setExperimentFlag(ej.fd.H264_MF_ZERO_COPY, !0)),
                (0, eC.isLinux)() &&
                    (0, en.b)({ location: "setupMediaEngine" }).enabled &&
                    t.openH264Enabled &&
                    e.setExperimentFlag(ej.fd.USE_LIBOPENH264_DECODER, !0);
            let n = eM.A.getGuildId(),
                {
                    muteBeforeProcessing: i,
                    pttBeforeProcessing: a,
                    skipEncode: o,
                } = (null != n ? $.A : K.A).getCurrentConfig(
                    { location: "setupMediaEngine", guildId: n ?? void 0 },
                    { autoTrackExposure: !0 },
                );
            i && e.setExperimentFlag(ej.fd.MUTE_BEFORE_PROCESSING, !0),
                a && e.setExperimentFlag(ej.fd.PTT_BEFORE_PROCESSING, !0),
                o && e.setExperimentFlag(ej.fd.SKIP_ENCODE, !0),
                (0, er.J)({ location: "setupMediaEngine" }).enabled &&
                    e.setExperimentFlag(ej.fd.LOW_LATENCY_RATE_CONTROL, !0);
            let l = !1,
                u = !0;
            e.setExperimentFlag(ej.fd.RESET_DECODER_ON_ERRORS, !0),
                l && e.setExperimentFlag(ej.fd.SOFTWARE_FALLBACK_ON_ERRORS, !0),
                u && e.setExperimentFlag(ej.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
            let { swallowVolumeOnlySpeakingEvents: c } = O.A.getConfig({ location: "MediaEngineStore" });
            if ((c && e.setExperimentFlag(ej.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === ej.x.STREAM)) {
                let t = nx(tE);
                e.setSoundshareDiscardRearChannels(t);
                let { simulcastEnabled: n, lqStreamBitrate: r } = X.A.getConfig();
                e.configureGoLiveSimulcast(n, r);
            }
            if ((0, eC.isWindows)())
                e.setExperimentFlag(ej.fd.SIGNAL_AV1, !0), e.setExperimentFlag(ej.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            else if ((0, eC.isMac)()) {
                if ((e.setExperimentFlag(ej.fd.SIGNAL_AV1_DECODE, !0), ts())) {
                    let { enabled: t } = (0, B.t)("MediaEngineStore");
                    t && e.setExperimentFlag(ej.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                }
            } else if ((0, eC.isLinux)()) e.setExperimentFlag(ej.fd.SIGNAL_AV1_DECODE, !0);
            else if ((0, eC.isIOS)() && tn()) {
                let { enabled: t } = (0, V.$)("MediaEngineStore");
                t &&
                    (e.setExperimentFlag(ej.fd.SIGNAL_AV1_DECODE, !0),
                    e.setExperimentFlag(ej.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
            }
            if ((0, eC.isWeb)()) {
                let { enabled: t } = (0, z.O)("MediaEngineStore");
                e.setExperimentFlag(ej.fd.BROWSER_HEVC, t);
            }
            for (let n of ((0, eC.isWindows)() &&
                t3?.startsWith("AMD") &&
                (0, ed.F)("MediaEngineStore").enabled &&
                e.setExperimentFlag(ej.fd.WMF_GPU_ENCODE, !0),
            (0, eC.isWindows)() &&
                t3?.startsWith("Intel") &&
                (0, e_.J)("MediaEngineStore").enabled &&
                e.setExperimentFlag(ej.fd.WMF_GPU_ENCODE, !0),
            (0, eC.isWindows)() &&
                t3?.startsWith("Qualcomm") &&
                (0, ed.F)("MediaEngineStore").enabled &&
                e.setExperimentFlag(ej.fd.WMF_GPU_ENCODE, !0),
            tl.setHasFullbandPerformance((0, x.A)()),
            e.setRemoteAudioHistory(1e3),
            (0, D.A)(r) && e.setClipsKeyFrameInterval(ej.X1),
            (t = na(e.context)),
            e.setPostponeDecodeLevel(e2),
            Object.keys(t.localMutes)))
                n !== eD.default.getId() && e.setLocalMute(n, t.localMutes[n]);
            for (let n of Object.keys(t.localVolumes))
                n !== eD.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
            for (let n of Object.keys(t.localPans)) {
                let r = t.localPans[n];
                e.setLocalPan(n, r.left, r.right);
            }
            for (let n of Object.keys(t.disabledLocalVideos)) e.setLocalVideoDisabled(n, t.disabledLocalVideos[n]);
            e.on(T.yq.Speaking, (t, n, r, i) => {
                v.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: i });
            }),
                e.context === ej.x.DEFAULT &&
                    ((tO = !1),
                    (tb = !1),
                    e.on(T.yq.SpeakingWhileMuted, () => {
                        (tO = !0),
                            (tb = !0),
                            r.emitChange(),
                            tD.stop(),
                            tD.start(e3, () => {
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
                        ey.default.track(eG.HAw.VIDEOHOOK_INITIALIZED, {
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
                    eW.warn(`noisecancellererror event: ${e}`),
                        (0, M.QW)({ type: M.iy.NOISE_CANCELLER_ERROR, underlyingError: n_(e) }),
                        (tK = !0),
                        ey.default.track(eG.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        v.h.dispatch({ type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: !0 }),
                        v.h.dispatch({ type: "AUDIO_SET_NOISE_CANCELLATION", enabled: !1 }),
                        v.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e });
                }),
                e.on(T.yq.VoiceActivityDetectorError, (e) => {
                    eW.warn(`voiceactivitydetectorerror event: ${e}`),
                        (0, M.QW)({ type: M.iy.NOISE_CANCELLER_ERROR, underlyingError: n_(e) }),
                        ey.default.track(eG.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        v.h.dispatch({
                            type: "AUDIO_SET_MODE",
                            context: ej.x.DEFAULT,
                            mode: eG.TBI.VOICE_ACTIVITY,
                            options: { ...na(ej.x.DEFAULT).modeOptions, vadUseKrisp: !1 },
                        }),
                        v.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e });
                }),
                e.on(T.yq.SdpError, (e, t, n, r) => {
                    ey.default.track(eG.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: r });
                }),
                e.on(T.yq.VideoState, (t) => {
                    v.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                }),
                e.setBitRate(eL.A.bitrate),
                e.applyVideoQualityMode(eU.A.mode),
                (0, eC.isWindows)() &&
                    tl.supports(ej.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                    tl.setAsyncVideoInputDeviceInit((0, Y.v)("setupMediaEngine").enabled);
        }),
        tl.on(T.bg.DeviceChange, (e, t, n) => {
            tA.stop(),
                v.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
        }),
        tl.on(T.bg.VolumeChange, (e, t) => {
            v.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
        }),
        tl.on(T.bg.DesktopSourceEnd, (e, t) => {
            v.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
        }),
        tl.on(T.bg.AudioPermission, (e) => {
            (tX = !0), v.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
        }),
        tl.on(T.bg.VideoPermission, (e) => {
            v.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
        }),
        tl.on(T.bg.WatchdogTimeout, async () => {
            let e;
            if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                try {
                    await ev.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                } catch (t) {
                    "number" == typeof t.status && (e = t.status);
                }
            eW.warn(`Watchdog timeout, report submission status: ${e ?? 200}`),
                ey.default.track(eG.HAw.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        tl.on(T.bg.VideoInputInitialized, (e) => {
            ey.default.track(eG.HAw.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired
                    ? null
                    : Math.round(e.timeToFirstFrame * eN.A.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: eM.A.getMediaSessionId(),
                rtc_connection_id: eM.A.getRTCConnectionId(),
            });
        }),
        tl.on(T.bg.AudioInputInitialized, (e) => {
            ey.default.track(eG.HAw.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * eN.A.Millis.SECOND),
                rtc_connection_id: eM.A.getRTCConnectionId(),
            });
        }),
        tl.on(T.bg.ClipsRecordingRestartNeeded, () => {
            v.h.dispatch({ type: "CLIPS_RESTART" });
        }),
        tl.on(T.bg.ClipsInitFailure, (e, t) => {
            v.h.wait(() => {
                v.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t });
            });
        }),
        tl.on(T.bg.ClipsRecordingEnded, (e, t) => {
            a?.desktopSource?.id === e && (null != t && s?.desktopSource?.soundshareId !== t && C.c1(t), (a = null));
        }),
        tl.on(T.bg.NativeScreenSharePickerUpdate, (e, t) => {
            v.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
        }),
        tl.on(T.bg.NativeScreenSharePickerCancel, (e) => {
            v.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
        }),
        tl.on(T.bg.NativeScreenSharePickerError, (e) => {
            v.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
        }),
        tl.on(T.bg.AudioDeviceModuleError, (e, t, n) => {
            ey.default.track(eG.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
        }),
        tl.on(T.bg.VideoCodecError, (e) => {
            let t = "encode" === e.mode ? M.iy.VIDEO_ENCODE_ERROR : M.iy.VIDEO_DECODE_ERROR,
                n = { videoCodec: e.codecStandard, errorMessage: e.message };
            (0, M.QW)(
                t === M.iy.VIDEO_ENCODE_ERROR
                    ? { type: t, ...n, videoEncoder: e.implName }
                    : { type: t, ...n, videoDecoder: e.implName },
            );
        }),
        tl.on(T.bg.ConnectionStats, (e) => {
            v.h.dispatch({
                type: "MEDIA_ENGINE_CONNECTION_STATS",
                connectionStats: e.map((e) => {
                    let { stats: t, connection: n } = e;
                    return {
                        stats: t,
                        mediaEngineConnectionId: n.mediaEngineConnectionId,
                        version: te++,
                        context: n.context,
                    };
                }),
            });
        }),
        tl.on(T.bg.VoiceQueueMetrics, (e) => {
            let t = ia(e);
            null !== t && ey.default.track(eG.HAw.VOICE_QUEUE_METRICS, t);
        }),
        tl.setOnVideoContainerResized((e, t, n) => {
            v.h.wait(() =>
                v.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
            );
        }),
        ti(),
        ru(),
        rd(),
        tl.supports(ej.O5.ASYNC_CLIPS_SOURCE_DEINIT) &&
            tl.setAsyncClipsSourceDeinit((0, W.V)("setupMediaEngine").enabled),
        o.reset(),
        (0, eP.w)().then((e) => {
            null != e && ((t3 = e.gpu_brand), (t6 = e.has_intel_hybrid_igpu));
        }),
        tl.on(T.bg.SystemMicrophoneModeChange, (e) => {
            (f = e), tl.eachConnection(nE);
        });
}
function nA() {
    return (0, eC.isWindows)() && A().satisfies(N.A?.os.release, eF.yg);
}
function nI() {
    return (0, eC.isWindows)() && A().satisfies(N.A?.os.release, eF.fG);
}
function nT() {
    return (0, eC.isMac)() && tl.supports(ej.O5.SCREEN_CAPTURE_KIT) && A().satisfies(N.A?.os.release, eF.e);
}
function nS() {
    return (
        (0, eC.isWindows)() &&
        tl.supports(ej.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        tl.supports(ej.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function ny() {
    return tl.supports(ej.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function nv() {
    let e = S.w.get("audio");
    null != e && (S.w.set(eK, { [ej.x.DEFAULT]: e }), S.w.remove("audio")),
        (tu = S.w.get(eK) ?? {}),
        E().each(tu, (e) => {
            E().defaultsDeep(e, ta()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, eb.OH)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== e$ &&
                    ((e.vadUseKrispSettingVersion = e$), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                e.vadThrehsoldMigrated ||
                    ((e.vadThrehsoldMigrated = !0), e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = e1)),
                tl.supports(ej.O5.SIDECHAIN_COMPRESSION) &&
                    e.sidechainCompressionSettingVersion < eZ &&
                    ((e.sidechainCompressionSettingVersion = eZ), (e.sidechainCompression = !0)),
                (0, eC.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== eq &&
                      ((e.ncUseKrispjsSettingVersion = eq), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== ez &&
                      ((e.ncUseKrispSettingVersion = ez), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
        }),
        nR();
}
function nN(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ej.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = ns(t);
    return Object.assign(r, e), !__OVERLAY__ && n && S.w.set(eK, tu), r;
}
function nC() {
    S.w.remove(eK), location.reload();
}
function nR() {
    let e = na();
    tl.setAudioInputDevice(e.inputDeviceId),
        tl.setAudioOutputDevice(e.outputDeviceId),
        nd(),
        tl.setInputVolume(e.inputVolume),
        tl.setOutputVolume(e.outputVolume),
        tl.setAecDump(e.aecDumpEnabled),
        tl.setSidechainCompression(e.sidechainCompression),
        tl.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        tl.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing);
}
function nO() {
    td || tl.enable().then(() => v.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nb(e) {
    return { id: ej.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
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
    let n = e[t] ?? e[ej.dx] ?? E()(e).values().first();
    return null != n ? n.id : t;
}
function nw(e) {
    let t = tm;
    if (((tm = nD(e, eY.intl.string(eY.t["/QIjDA"]))), !E().isEqual(tm, t))) {
        let e = na(),
            t = nL(tm, e.inputDeviceId);
        tl.setAudioInputDevice(t), tl.eachConnection(nE);
    }
}
function nx(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nM(e) {
    tl.eachConnection((t) => {
        t.context === ej.x.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function nP(e) {
    let t = tE;
    if (((tE = nD(e, eY.intl.string(eY.t.xlUg0v))), !E().isEqual(tE, t))) {
        let e = na(),
            n = nL(tE, e.outputDeviceId);
        tl.setAudioOutputDevice(n);
        let r = nx(t),
            i = nx(tE);
        r !== i && nM(i);
    }
}
function nk(e) {
    tw = e.length > 0;
    let t = tg;
    if (((tg = nD(e, eY.intl.string(eY.t.WKWARY))), tv && !E().isEqual(tg, t))) {
        let e = void 0 !== tg[tN],
            n = tN === ej.dx && t[ej.dx]?.disabled;
        nd(e || n);
    }
}
function nU() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = eA.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let r = n === eB.W.USER ? ej.x.DEFAULT : ej.x.STREAM,
            i = r === ej.x.STREAM ? ej.Cn : ej.Hz,
            s = t[n] ?? {},
            { localMutes: a, localVolumes: o } = na(r);
        for (let [e, t] of Object.entries(s))
            null == (0, eg.tM)(r, e) &&
                (t.muted ? (a[e] = !0) : delete a[e],
                t.volume !== i ? (o[e] = t.volume) : delete o[e],
                tl.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, r));
        if (e)
            for (let e of new Set([...Object.keys(a), ...Object.keys(o)]))
                null == s[e] &&
                    (delete a[e],
                    delete o[e],
                    tl.eachConnection((t) => {
                        t.setLocalVolume(e, i), t.setLocalMute(e, !1);
                    }, r));
        nN({ localMutes: a, localVolumes: o }, r);
    }
}
function nG(e) {
    if (null == r)
        return (
            eW.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
            { soundshareId: null, soundshareSession: "" }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : ev.A.getAudioPid(e),
            n = "";
        return null != t && (n = ev.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n };
    }
}
function nF(e, t) {
    (0, eC.isWindows)() &&
        e > 1 &&
        C.GH(e, { soundshare_session: t }).then((t) => {
            null == t ||
                U.Ay.shouldContinueWithoutElevatedProcessForPID(e) ||
                v.h.wait(() => {
                    v.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: t });
                });
        });
}
function nV(e) {
    (i = e.sessionId), (tI = !1), (ty = !1);
    let t = na();
    if (
        (nS() && (ny() ? rH(ej.rB.AUTOMATIC) : t.automaticAudioSubsystem && rj()),
        tl.supports(ej.O5.OFFLOAD_ADM_CONTROLS))
    ) {
        let e = !1;
        (0, eC.isDesktop)()
            ? (e = (0, H.i)({ location: "handleConnectionOpen" }).enabled)
            : ((0, eC.isIOS)() || (0, eC.isAndroid)()) && (e = (0, j.Y)({ location: "handleConnectionOpen" }).enabled),
            tl.setOffloadAdmControls(e);
    }
    (0, eT.Lb)({ location: "MediaEngineStore", autoTrackExposure: !1 }) &&
        null !== t.mostRecentlyRequestedVoiceFilter &&
        (0, eC.isDesktop)() &&
        (eS.A.getLastInitAttemptMayHaveCrashed()
            ? (v.h.dispatch({ type: "AUDIO_SET_SELF_MUTE", mute: !0, context: ej.x.DEFAULT, playSoundEffect: !0 }),
              nN({ mostRecentlyRequestedVoiceFilter: null }))
            : n(342887).md()),
        nU();
}
function nB(e) {
    let { mediaEngineState: t } = e;
    (tu = t.settingsByContext),
        (tm = t.inputDevices),
        (tE = t.outputDevices),
        (t2 = t.appSupported),
        (tG = t.krispModuleLoaded),
        (c = t.krispVersion),
        (tf = t.goLiveContext);
}
function nH() {
    i = null;
}
function nj() {
    if ((0, eC.isWeb)()) {
        let e = es.f1.getCurrentConfig({ location: "MediaEngineStore handlePostConnectionOpen" });
        e.loadWasmModule && e.preload && r.startDavePreload();
    }
    return !1;
}
function nY(e) {
    switch (e.state) {
        case eG.S7L.CONNECTING:
            nO();
            break;
        case eG.S7L.RTC_CONNECTING:
            (tM = !1), (l = void 0), (u = void 0), (tx = !1), (t5 = !1), t7.stop(), tP.stop(), o.reset();
            break;
        case eG.S7L.RTC_CONNECTED:
            nd();
            break;
        case eG.S7L.DISCONNECTED:
            nJ(), n0();
    }
}
function nW(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (tI = t.mute || t.suppress), (ty = t.deaf), tl.eachConnection(nu);
            let e = null != t.guildId && null != t.channelId && null != tW && tW !== t.channelId,
                n = !tk && null == t.channelId;
            return nd(!e && !n && tv), (tW = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== eD.default.getId() || null != eM.A.getChannelId() || nd(!1, null), e;
    }, !1);
}
function nK(e) {
    let { mute: t } = e;
    (tT = t), tl.eachConnection(nu);
}
function n$(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = na(t);
    if (t === ej.x.DEFAULT && (ep.A.requestPermission(eV.iL.AUDIO), tS)) return !1;
    (r = !i && !r) || (i = !1), n || (tR = !0), nN({ mute: r, deaf: i }, t), tl.eachConnection(nu);
}
function nz(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    nN({ mute: n }, t), r || (tR = !0), tl.eachConnection(nu);
}
function nq(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== eB.oD.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    nU(!0);
}
function nZ(e) {
    let { context: t } = e;
    nN({ deaf: !na(t).deaf }, t), tl.eachConnection(nu);
}
function nX(e) {
    let { context: t, userId: n } = e;
    if (n === eD.default.getId()) return;
    let { localMutes: r } = na(t);
    r[n] ? delete r[n] : (r[n] = !0),
        nN({ localMutes: r }, t),
        tl.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nQ(e) {
    let { context: t, userId: n, videoToggleState: r, persist: i, isAutomatic: s } = e;
    h()(!(i && s), "These are not allowed to both be true.");
    let a = r === eG.bb8.DISABLED,
        { disabledLocalVideos: o } = na(t),
        l = o[n] ?? !1,
        u = tJ.has(n),
        c = r === eG.bb8.AUTO_ENABLED || r === eG.bb8.MANUAL_ENABLED;
    eW.info(`disableVideo=${a} currentlyDisabled=${l} currentlyAutoDisabled=${u}, isVideoShown=${c}`),
        h()(!(u && !l), "If you are auto-disabled, then you are also disabled.");
    let d = a !== l,
        _ = t === ej.x.DEFAULT,
        f = s && d && _,
        p = i && d && _;
    eW.info(`changed=${d} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${f} isManualToggleByUser=${p}`);
    let { videoToggleStateMap: m } = na(t);
    if (
        (m[n] === eG.bb8.AUTO_PROBING &&
            r === eG.bb8.AUTO_ENABLED &&
            (0, ef.A)(n, a ? ej.Al.AUTO_DISABLE : ej.Al.AUTO_ENABLE, c),
        (m[n] = r),
        nN({ videoToggleStateMap: m }, t, i),
        r === eG.bb8.AUTO_PROBING
            ? eM.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
            : eM.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
        t0 ||
            (eW.info(`isAutoDisableAllowed=${t0} - disabling VideoHealthManager`),
            eM.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
        f)
    ) {
        if ((!a && !u) || (a && !t0)) return;
        (0, ef.A)(n, a ? ej.Al.AUTO_DISABLE : ej.Al.AUTO_ENABLE, c), a ? tJ.add(n) : tJ.delete(n);
    } else
        p &&
            (u && !a
                ? (eW.info("disallowing auto-disable for this session because of manual override by user"),
                  (t0 = !1),
                  eM.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                  (0, ef.A)(n, ej.Al.MANUAL_REENABLE, c))
                : (0, ef.A)(n, a ? ej.Al.MANUAL_DISABLE : ej.Al.MANUAL_ENABLE, c));
    _ && !a && tJ.delete(n),
        a ? (o[n] = !0) : delete o[n],
        nN({ disabledLocalVideos: o }, t, i),
        tl.eachConnection((e) => e.setLocalVideoDisabled(n, o[n] ?? !1), t);
}
function nJ() {
    if (0 === tJ.size) return;
    let e = ej.x.DEFAULT,
        { disabledLocalVideos: t } = na(e);
    tJ.forEach((n) => {
        h()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            tl.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tJ.clear(),
        nN({ disabledLocalVideos: t }, e, !1);
}
function n0() {
    let e = ej.x.DEFAULT,
        { videoToggleStateMap: t } = na(e);
    for (let [e, n] of Object.entries(t)) n === eG.bb8.AUTO_PROBING && delete t[e];
    nN({ videoToggleStateMap: t }, e, !1);
}
function n1(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === eD.default.getId()) return;
    let i = t === ej.x.STREAM ? ej.Cn : ej.Hz,
        { localVolumes: s } = na(t);
    r === i ? delete s[n] : (s[n] = r), nN({ localVolumes: s }, t), tl.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function n2(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: s } = na(t);
    (s[n] = { left: r, right: i }), nN({ localPans: s }, t), tl.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function n3(e) {
    let { context: t, mode: n, options: r } = e;
    nN({ mode: n, modeOptions: { ...r, updatedAt: Date.now() } }, t), tl.eachConnection(no);
}
function n6(e) {
    let { volume: t } = e;
    nN({ inputVolume: nl(t) }), tl.setInputVolume(t);
}
function n4(e) {
    let { volume: t } = e;
    nN({ outputVolume: t }), tl.setOutputVolume(t);
}
function n5(e) {
    let { id: t } = e;
    (t = nL(tm, t)),
        (tp = performance.now()),
        nN({ inputDeviceId: t }),
        tl.setAudioInputDevice(t),
        tl.eachConnection(nE),
        (l = void 0),
        (u = void 0),
        t7.stop(),
        (t5 = !1);
    let { resetSilenceWarningOnDeviceChange: n } = ea.A.getConfig({
        location: "MediaEngineStore.handleSetInputDevice",
    });
    n && ((tx = !1), o.reset());
}
function n7(e) {
    let { id: t } = e;
    nN({ outputDeviceId: (t = nL(tE, t)) }), tl.setAudioOutputDevice(t);
}
function n8(e) {
    let { id: t } = e;
    nN({ videoDeviceId: (t = nL(tg, t)) }), nd();
}
function n9(e) {
    let { inputProfile: t } = e;
    nN({ activeInputProfile: t });
    let n = na();
    tl.eachConnection((e) => {
        no(e), nE(e);
    }),
        tl.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        rc();
}
function re(e) {
    return t_ !== e.required && ((t_ = e.required), e.required || tl.interact(), !0);
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
        n = tl.getAudioSubsystem(),
        i = tl.getAudioLayer(),
        s = nL(tm, t.inputDeviceId),
        a = tm[s]?.name,
        o = (0, em.A)(t.noiseCancellation, r.getSystemMicrophoneMode(), { location: "trackVoiceProcessing" });
    ey.default.track(eG.HAw.VOICE_PROCESSING, {
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
    tl.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), rc(), rr(e.location);
}
function rs(e) {
    ro(e.enabled);
}
function ra(e) {
    let t = nN({ sidechainCompressionStrength: e.strength });
    tl.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function ro(e) {
    let t = nN({ sidechainCompression: e });
    tl.setSidechainCompression(t.sidechainCompression);
}
function rl(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? t1.add(n) : t1.delete(n), ru(), rc();
}
function ru() {
    let e = !t1.has("voice_filter_preview") && !t1.has("mic_test");
    tl.setMaybePreprocessMute(e);
}
function rc() {
    let e = na(),
        t = t1.size > 0,
        n = e.inputDeviceId,
        r = ew.A.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        s = ew.A.hasNoiseSuppression(n) || e.noiseSuppression,
        a = np(ew.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        o = e.noiseCancellation,
        l = null !== tB,
        u = t1.has("voice_filter") && 1 === t1.size;
    tl.setLoopback(t, {
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
    if (!tl.supports(ej.O5.VAAPI)) return;
    let e = 4098;
    if (window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let t = await window.DiscordNative.processUtils.getSystemInfo();
    (t.electronGPUInfo?.gpuDevice ?? []).some((t) => t.vendorId === e) &&
        ((ne = !0), (t9 = tl.supports(ej.O5.GAMESCOPE_CAPTURE)));
}
function r_(e) {
    let t = nN({ noiseSuppression: e.enabled });
    tl.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), rc(), rr(e.location);
}
function rf(e) {
    let t = nN({ automaticGainControl: e.enabled });
    tl.eachConnection((e) => nh(e, t.automaticGainControl)), rc(), rr(e.location);
}
function rp(e) {
    let t = nN({ noiseCancellation: e.enabled });
    tl.eachConnection((e) => nm(e, t.noiseCancellation)), rc(), rr(e.location);
}
function rh(e) {
    eh.A.setKrispModelOverride(e.model), (_ = e.model), rc();
}
function rm(e) {
    (0, eC.isWeb)() || ((tV = e.enabled), tl.setNoiseCancellationEnableStats?.(e.enabled));
}
function rE(e) {
    nN({ silenceWarning: e.enabled });
}
function rg(e) {
    tl.setDebugLogging(e.enabled);
}
function rA(e) {
    let { level: t } = e;
    (d = t), eh.A.setKrispSuppressionLevel(t);
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
    tl.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function rv(e) {
    let { enabled: t } = e;
    nN({ qos: t }), tl.eachConnection((e) => e.setQoS(t));
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
    if (((tM = !0 !== tx && !t), t)) (tx = !0), (t5 = !1), t7.stop(), tP.stop();
    else if (na().mode === eG.TBI.VOICE_ACTIVITY && tx) {
        let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = ea.A.getConfig({
            location: "MediaEngineStore.handleInputDetected",
        });
        e &&
            t7.start(e4, () => {
                ey.default.track(eG.HAw.HARDWARE_MUTE_GUESSED, {
                    input_device_name: tm[nL(tm, na().inputDeviceId)]?.name,
                    rtc_connection_id: eM.A.getRTCConnectionId(),
                }),
                    (t5 = !0),
                    r.emitChange();
            }),
            null != t &&
                tP.start(t * eN.A.Millis.MINUTE, () => {
                    (tx = !1), o.reset();
                });
    }
}
function rO(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === tS) return !1;
    (tS = n), tl.eachConnection(nu);
}
function rb(e) {
    let { state: t, permissionType: n } = e,
        r = t === eV.hL.ACCEPTED;
    switch (n) {
        case eV.iL.AUDIO:
            (tX = !0), tl.eachConnection(nu);
            break;
        case eV.iL.CAMERA:
            !r && tv && nd(!1);
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
        await eO.Ay.ensureModule("discord_krisp");
        let e = eO.Ay.requireModule("discord_krisp");
        (tG = !0),
            (c = e.getSdkVersion?.()),
            (d = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (tF = e), r.emitChange();
            }),
            r.emitChange();
    } catch (t) {
        eW.warn(`Failed to load Krisp module: ${t.message}`), eR.A.captureException(t);
        let e = ej.CO.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? ej.CO.INITIALIZED : n;
        }
        ey.default.track(eG.HAw.VOICE_PROCESSING, { noise_canceller_error: e }), nN({ noiseCancellation: !1 });
    } finally {
        tU = !1;
    }
}
function rw() {
    return (0, eC.isWindows)() || (0, eC.isLinux)() || (0, eC.isMac)();
}
function rx() {
    !rw() || __OVERLAY__ || tU || tG
        ? (0, eC.isWeb)() && tl.supports(ej.O5.NOISE_CANCELLATION)
            ? ((tG = !0), r.emitChange())
            : (0, eC.isWeb)() && nN({ noiseCancellation: !1 })
        : ((tU = !0), rL());
}
async function rM() {
    try {
        let e,
            t = "",
            n = !1,
            r = URL.parse(e8);
        if (null === r) return void eW.log("OpenH264 URL ", r, " is invalid");
        let i = r.pathname.split("/"),
            s = i[i.length - 1].replace(".bz2", "");
        try {
            let t = await eO.Ay.downloadOpenH264(e8, s, e9, (e) => {
                eW.log("OpenH264 download status", e);
            });
            eW.log("OpenH264 is ready", t), (n = t.fetchedFromNetwork), (e = !0);
        } catch (n) {
            eW.error("OpenH264 download failed", n), (t = n.message), (e = !1);
        }
        if (
            (ey.default.track(eG.HAw.VIDEO_OPENH264_DOWNLOADED, {
                success: e,
                fetched_from_network: n,
                error_message: t,
            }),
            e)
        ) {
            let e = await eO.Ay.cleanupUnusedOpenH264Files([s]);
            eW.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        eW.error("OpenH264 download failed", e);
    }
}
function rP() {
    (0, eC.isLinux)() && rM();
}
function rk(e) {
    let { enabled: t } = e;
    ey.default.track(eG.HAw.VOICE_FILTER_PLAYBACK_TOGGLED, { active_voice_filter_id: tB ?? null, enabled: t }),
        nN({ voiceFilterPlaybackEnabled: t });
}
function rU(e) {
    let { newVoiceFilterId: t } = e;
    nN({ mostRecentlyRequestedVoiceFilter: t }), tl.eachConnection((e) => e.setVoiceFilterId(t));
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
    nN({ bypassSystemInputProcessing: t }), tl.setAudioInputBypassSystemProcessing(t), rr(e.location);
}
function rB(e) {
    rH(e.subsystem);
}
function rH(e) {
    e === ej.rB.AUTOMATIC
        ? (nN({ automaticAudioSubsystem: !0 }), rj())
        : (nN({ automaticAudioSubsystem: !1 }), tl.setAudioSubsystem(e));
}
function rj() {
    tl.queueAudioSubsystem(ej.rB.EXPERIMENTAL);
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
    (s.mute || s.deaf) && (nN({ deaf: !1, mute: !1 }), tl.eachConnection(nu));
}
function rW(e) {
    let { application: t } = e;
    tc.add(t.id);
}
function rK(e) {
    let { application: t } = e;
    tc.delete(t.id);
}
function r$(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (td = !1), tl.eachConnection(nu);
                break;
            case "video":
                nd(!1);
        }
}
function rz(e) {
    (td = e.enabled), e.unmute && nN({ mute: !1, deaf: !1 }), tl.eachConnection(nu);
}
function rq(e) {
    let { enabled: t } = e;
    ep.A.requestPermission(eV.iL.CAMERA), nd(t);
}
function rZ(e) {
    let { sourceId: t, applicationName: n, quality: i } = e;
    if (!(0, L.Ao)() || null == N.A) return !1;
    let s = null,
        o = null,
        l = ev.A.getPidFromDesktopSource(t);
    ({ soundshareId: s, soundshareSession: o } = nG(l));
    let u = { desktopSource: { id: t, sourcePid: l, soundshareId: s, soundshareSession: o }, quality: i };
    null != a &&
        (tl.setClipsSource(null),
        (0, eC.isWindows)() && null != a.desktopSource.soundshareId && C.c1(a.desktopSource.soundshareId)),
        null != s && nF(s, o),
        (a = u);
    let c = nn("MediaEngineStore clips"),
        d = na().videoHook;
    tl.setClipsSource({
        desktopDescription: {
            id: a.desktopSource.id,
            soundshareId: a.desktopSource.soundshareId,
            useVideoHook: d,
            useGraphicsCapture: nA(),
            useCaptureDeviceForEncode: !1,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: nT(),
            videoHookStaleFrameTimeoutMs: eJ,
            graphicsCaptureStaleFrameTimeoutMs: e0,
            hdrCaptureMode: c,
        },
        quality: i,
        applicationName: n,
    });
}
function rX(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((a = null), tl.setClipsSource(null));
}
function rQ(e) {
    let { settings: t } = e;
    if (t?.desktopSettings != null) {
        let e = null,
            n = null,
            { sourceId: r, sound: i } = t.desktopSettings,
            s = t.context ?? ej.x.DEFAULT,
            a = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
            o = !1 === i ? null : ev.A.getPidFromDesktopSource(r);
        eC.isPlatformEmbedded &&
            !0 === i &&
            (({ soundshareId: e, soundshareSession: n } = nG(o)), null != e && nF(e, n)),
            nc(s),
            nd(s === ej.x.STREAM && tv, {
                desktopSource: { id: r, sourcePid: o, soundshareId: e, soundshareSession: n },
                quality: { resolution: a.resolution, frameRate: a.frameRate },
            });
    } else if (t?.cameraSettings != null) {
        let e = t.context ?? ej.x.DEFAULT,
            { videoDeviceGuid: n, audioDeviceGuid: r } = t.cameraSettings,
            i = e === ej.x.STREAM && tv,
            s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
        nd(i, {
            cameraSource: { videoDeviceGuid: n, audioDeviceGuid: r },
            quality: { resolution: s.resolution, frameRate: s.frameRate },
        });
    } else nd(tv, null);
}
function rJ(e) {
    let { section: t } = e;
    return t === eG.nc_.VOICE && nO(), !1;
}
function r0() {
    return tl.eachConnection(nE), !1;
}
function r1(e) {
    let { enabled: t } = e,
        n = nN({ aecDumpEnabled: t });
    tl.setAecDump(n.aecDumpEnabled);
}
function r2(e) {
    let { enabled: t } = e;
    nN({ openH264Enabled: t }), eO.Ay?.setOpenH264Enabled?.(t);
}
function r3(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (tu = Object.values(ej.x).reduce((e, n) => {
        let r = n,
            i = ta();
        return (e[r] = E().merge(i, t[r])), e;
    }, {})),
        S.w.set(eK, tu),
        nR();
}
function r6(e) {
    let { state: t } = e,
        n = k.A.isEnabled();
    if (t === eG.g6G.BACKGROUND && tv && !n) (tL = !0), nd(!1);
    else {
        if (t !== eG.g6G.ACTIVE || !tL) return !1;
        (tL = !1), nd(!0);
    }
    return !0;
}
function r4(e) {
    tl.eachConnection((t) => t.setBitRate(e.bitrate));
}
function r5() {
    if ((!tv && null == s) || null != eM.A.getRTCConnectionId()) return !1;
    nd(!1, null);
}
function r7() {
    return !!tK && ((tK = !1), !0);
}
function r8(e) {
    tl.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function r9(e) {
    let { settings: t } = e;
    tl.applyMediaFilterSettings(t).finally(() => {
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
    if ((0, eC.isDesktop)() && eC.isPlatformEmbedded && !nt) {
        nt = !0;
        let e = async () => {
            let t = await new Promise((e) => {
                eO.Ay.pollQueueMetrics((t) => {
                    e(t);
                });
            });
            t.periodMs = ej.tl;
            let n = ia(t);
            null !== n && ey.default.track(eG.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, ej.tl);
        };
        setTimeout(e, ej.tl);
    }
}
class is extends I.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        ng(),
            nv(),
            rx(),
            rP(),
            n0(),
            ii(),
            (0, eC.isWindows)() && eC.isPlatformEmbedded && nf(),
            (t2 = {
                [ej.O5.VIDEO]: tl.supports(ej.O5.VIDEO),
                [ej.O5.DESKTOP_CAPTURE]: tl.supports(ej.O5.DESKTOP_CAPTURE),
                [ej.O5.HYBRID_VIDEO]: tl.supports(ej.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eD.default, eL.A, ew.A, ex.A, b.A, P.A, eM.A, U.Ay, eE.A, eA.A, ek.default, eU.A, eS.A);
    }
    supports(e) {
        return tl.supports(e);
    }
    supportsInApp(e) {
        return t2[e] || tl.supports(e);
    }
    isSupported() {
        return tl.supported();
    }
    isNoiseSuppressionSupported() {
        return tl.supports(ej.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return rD();
    }
    isNoiseCancellationError() {
        return tK;
    }
    isAutomaticGainControlSupported() {
        return tl.supports(ej.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !ny() && (tl.supports(ej.O5.LEGACY_AUDIO_SUBSYSTEM) || tl.supports(ej.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return tl.supports(ej.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === tl.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return rD();
    }
    isAecDumpSupported() {
        return tl.supports(ej.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return tl.supports(ej.O5.VIDEO) && tl.supports(ej.O5.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        return ex.A.getChannel(tW)?.type !== eG.rbe.GUILD_STAGE_VOICE && e5 && X.A.simulcastEnabled();
    }
    getAecDump() {
        return na().aecDumpEnabled;
    }
    getMediaEngine() {
        return tl;
    }
    getVideoComponent() {
        return tl.Video;
    }
    getCameraComponent() {
        return tl.Camera;
    }
    getKrispSuppressionLevel() {
        return d ?? 100;
    }
    getKrispEnableStats() {
        return tV;
    }
    isEnabled() {
        return td;
    }
    isMute() {
        return this.isSelfMute() || tI;
    }
    isDeaf() {
        return this.isSelfDeaf() || ty;
    }
    hasContext(e) {
        return null != tu[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ej.x.DEFAULT;
        return e === ej.x.DEFAULT && tT;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ej.x.DEFAULT;
        return (
            !this.isEnabled() ||
            na(e).mute ||
            !ep.A.didHavePermission(eV.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === ej.x.DEFAULT && tS)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tR;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tR = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ej.x.DEFAULT,
            t = t5 && "voice_isolation" !== this.getSystemMicrophoneMode() && na(e).mode === eG.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (ew.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return t4;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ej.x.DEFAULT;
        return !this.isSupported() || na(e).deaf;
    }
    isVideoEnabled() {
        return tv && tw;
    }
    isVideoAvailable() {
        return Object.values(tg).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ej.x.STREAM;
        return tf === e && null != s;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ej.x.STREAM;
        return tf === e && null != s && s.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ej.x.DEFAULT;
        return e !== eD.default.getId() && (na(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return tl.supports(ej.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ej.x.DEFAULT;
        return na(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ej.x.DEFAULT;
        return na(t).videoToggleStateMap[e] ?? eG.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ej.x.DEFAULT;
        return t === ej.x.DEFAULT && tJ.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ej.x.DEFAULT;
        return e === ej.x.DEFAULT && tJ.size > 0;
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
        return tf;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return tp;
    }
    isH264MfDecodeAvailable() {
        return th;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ej.x.DEFAULT,
            n = na(t).localPans[e];
        return null != n ? n : eQ;
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
            E().each(tu, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === eG.TBI.PUSH_TO_TALK && tc.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nL(tm, na().inputDeviceId);
    }
    getOutputDeviceId() {
        return nL(tE, na().outputDeviceId);
    }
    getVideoDeviceId() {
        return nL(tg, na().videoDeviceId);
    }
    getInputDevices() {
        return tm;
    }
    getOutputDevices() {
        return tE;
    }
    getVideoDevices() {
        return tg;
    }
    getEchoCancellation() {
        let e = na();
        return ew.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return tl.supports(ej.O5.SIDECHAIN_COMPRESSION) && na().sidechainCompression;
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
        return (0, eC.isLinux)() && na().openH264Enabled;
    }
    getLoopback() {
        return t1.size > 0;
    }
    getLoopbackReasons() {
        return t1;
    }
    getNoiseSuppression() {
        let e = na();
        return ew.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = na();
        return ew.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return na().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return na().noiseCancellation;
    }
    getHardwareEncoding() {
        return e5;
    }
    getEnableSilenceWarning() {
        return na().silenceWarning;
    }
    getDebugLogging() {
        return tl.getDebugLogging();
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
        return nS() && na().automaticAudioSubsystem ? ej.rB.AUTOMATIC : tl.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return tl.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return na().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eH.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ej.x.DEFAULT;
        return na(e);
    }
    getState() {
        return {
            settingsByContext: tu,
            inputDevices: tm,
            outputDevices: tE,
            appSupported: t2,
            krispModuleLoaded: tG,
            krispVersion: c,
            krispSuppressionLevel: d,
            goLiveSource: s,
            goLiveContext: tf,
        };
    }
    getInputDetectedThisConnection() {
        return tx;
    }
    getInputDetected() {
        return o.inputDetected;
    }
    getLastInputDetectedUpdateTime() {
        return o.lastUpdateTime;
    }
    getNoInputDetectedNotice() {
        return tM;
    }
    getInputDeviceOSMuted() {
        return l;
    }
    getInputDeviceOSVolume() {
        return u;
    }
    getPacketDelay() {
        return eC.isPlatformEmbedded || this.getMode() !== eG.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        tl.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return t_;
    }
    getVideoHook() {
        return na().videoHook;
    }
    supportsVideoHook() {
        return tl.supports(ej.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = na().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return tl.supports(ej.O5.EXPERIMENTAL_SOUNDSHARE) && A().satisfies(N.A?.os.release, eF.$x);
    }
    supportsHookSoundshare() {
        return (0, eC.isWindows)() && tl.supports(ej.O5.SOUNDSHARE) && A().satisfies(N.A?.os.release, eF.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = na().useSystemScreensharePicker,
            n = (0, eC.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return tl.supports(ej.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return ne;
    }
    getUseGamescopeCapture() {
        return t9;
    }
    getEverSpeakingWhileMuted() {
        return tO;
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
        return na().modeOptions.vadKrispActivationThreshold ?? eX;
    }
    hasActiveCallKitCall() {
        return t8;
    }
    setHasActiveCallKitCall(e) {
        t8 = e;
    }
    supportsScreenSoundshare() {
        return (0, eC.isMac)()
            ? tl.supports(ej.O5.SOUNDSHARE) && A().satisfies(N.A?.os.release, eF.P$) && nT()
            : (0, eC.isWindows)()
              ? tl.supports(ej.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, eC.isLinux)() && tl.supports(ej.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        return (0, eC.isWindows)()
            ? this.getInputDevices()[this.getInputDeviceId()]?.effects?.find((e) => e === e7)
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
                (e.fetchDave = es.f1.getCurrentConfig({
                    location: "MediaEngineStore fetchAsyncResources",
                }).loadWasmModule),
            tl.fetchAsyncResources(e)
        );
    }
    startDavePreload() {
        if (!tz && ((tz = !0), (0, eC.isWeb)())) {
            let e = { fetchDave: !0 };
            tl.fetchAsyncResources(e).catch((e) => {
                eW.warn("DAVE preload failed:", e), eR.A.captureException(e);
            });
        }
    }
    getSupportedSecureFramesProtocolVersion() {
        if ((0, eC.isWeb)()) {
            let { useWasmModule: e } = es.f1.getCurrentConfig({
                location: "MediaEngineStore getSupportedSecureFramesProtocolVersion",
            });
            if (!e) return 0;
        }
        let e = tl.getSupportedSecureFramesProtocolVersion();
        114 === e && (e = 1);
        let t = es.ex.getCurrentConfig({ location: "MediaEngineStore" }),
            n = es.a.getConfig({ location: "MediaEngineStore" });
        return (t.canSupportDaveProtocol || (n.allowOptIn && eE.A.getPersistentCodesEnabled())) &&
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
(r = new is(v.h, {
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
    (o = new ee.A(tl, r));
let io = r;
