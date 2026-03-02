"use strict";
let r, i, s, a, o, l, u, c, d, _, f;
n.d(t, { Ay: () => ia }), n(323874), n(14289), n(35956), n(321073), n(790599);
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
    M = n(211597),
    x = n(487329),
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
    eM = n(734057),
    ex = n(383501),
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
    tm = { [ej.dx]: nO("No Input Devices") },
    tE = { [ej.dx]: nO("No Output Devices") },
    tg = { [ej.dx]: nO("No Video Devices") },
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
    tb = new y.Ep(),
    tD = !1,
    tL = !1,
    tw = !1,
    tM = !1,
    tx = new y.Ep(),
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
    t$ = !1,
    tz = null,
    tq = null,
    tZ = !1;
ep.A.hasPermission(eV.iL.AUDIO, { showAuthorizationError: !1 }),
    ep.A.hasPermission(eV.iL.CAMERA, { showAuthorizationError: !1 });
let tX = !1,
    tQ = new Set(),
    tJ = tX,
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
    return (0, Z.p)({ location: e }).hdrCaptureMode;
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
        t = tu[e];
    return null == t && ((t = ta()), (tu[e] = t)), t;
}
function ns() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ej.x.DEFAULT,
        t = ni(e),
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
function na(e) {
    let t = ns(e.context),
        n = t.mode;
    e.context === ej.x.DEFAULT && (0, ei.N)(!1, !1);
    let { showPTTSpeakingIndicator: r } = eI.A.getConfig({ location: "setInputMode" }),
        i = r && n === eG.TBI.PUSH_TO_TALK;
    e.setInputMode(n, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: !!i || t.modeOptions.autoThreshold,
        vadUseKrisp: (!!i || t.modeOptions.vadUseKrisp) && rb(),
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
    let t = ns(e.context),
        n = !td || t.mute || t.deaf;
    e.context === ej.x.DEFAULT
        ? (n = n || tI || tT || tS || !ep.A.didHavePermission(eV.iL.AUDIO))
        : e.context === ej.x.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === ej.x.DEFAULT && R.A.updateNativeMute();
}
function nu(e) {
    e !== tf && (null != s && tl.setGoLiveSource(null, tf), (tf = e));
}
function nc() {
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
        let t = ns().videoDeviceId;
        tv && t === ej.dx && tC === ej.dx && tN !== ej.qe ? (t = tN) : (tC = t),
            (tN = (tv = e) ? nD(tg, t) : ej.qe),
            tl.setVideoInputDevice(tN);
    }
    if (((s = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = nt("MediaEngineStore go live"),
                i = ns().videoHook,
                s = ng(),
                a = s ? (nA() ? eF.zl : eF.eg) : 0,
                o = (0, eC.isWindows)() && (0, el.b)("updateVideo").enabled,
                l = !1;
            (0, eC.isWindows)() &&
                a >= eF.zl &&
                (l =
                    !0 === t3
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
                            allowScreenCaptureKit: nI(),
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
function nd(e) {
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
function n_() {
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
function nf(e) {
    let t = (0, F.F)({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function np(e, t) {
    e.setAutomaticGainControl(nf(t));
}
function nh(e, t) {
    let n = (0, em.A)(t, r.getSystemMicrophoneMode(), { location: "setNoiseCancellation" });
    n !== t && eW.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: i } = (0, F.F)({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(i);
    let { noiseCancellationAfterProcessing: s, vadAfterWebrtc: a } = (0, et.$)({ location: "setNoiseCancellation" });
    e.setNoiseCancellationAfterProcessing(s), e.setVADAfterWebrtc(a);
}
function nm(e) {
    let t = ns(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(ew.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(ew.A.hasNoiseSuppression(n) || t.noiseSuppression),
        np(e, ew.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        nh(e, t.noiseCancellation),
        e.setVoiceFilterId(tV),
        (0, eC.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function nE() {
    tA.start(e6, () => {
        eW.error("Device enumeration timed out"), ey.default.track(eG.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
    }),
        tl.on(T.bg.Connection, (e) => {
            na(e), nl(e), nm(e);
            let t = ns();
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
                    (e.setExperimentFlag(ej.fd.USE_H264_MF_DECODER, !0),
                    (0, J.W)({ location: "setupMediaEngine" }).enabled &&
                        e.setExperimentFlag(ej.fd.H264_MF_ZERO_COPY, !0)),
                (0, eC.isLinux)() &&
                    (0, en.b)({ location: "setupMediaEngine" }).enabled &&
                    t.openH264Enabled &&
                    e.setExperimentFlag(ej.fd.USE_LIBOPENH264_DECODER, !0);
            let n = ex.A.getGuildId(),
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
                let t = nw(tE);
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
                t2?.startsWith("AMD") &&
                (0, ed.F)("MediaEngineStore").enabled &&
                e.setExperimentFlag(ej.fd.WMF_GPU_ENCODE, !0),
            (0, eC.isWindows)() &&
                t2?.startsWith("Intel") &&
                (0, e_.J)("MediaEngineStore").enabled &&
                e.setExperimentFlag(ej.fd.WMF_GPU_ENCODE, !0),
            (0, eC.isWindows)() &&
                t2?.startsWith("Qualcomm") &&
                (0, ed.F)("MediaEngineStore").enabled &&
                e.setExperimentFlag(ej.fd.WMF_GPU_ENCODE, !0),
            tl.setHasFullbandPerformance((0, M.A)()),
            e.setRemoteAudioHistory(1e3),
            (0, D.A)(r) && e.setClipsKeyFrameInterval(ej.X1),
            (t = ns(e.context)),
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
                    e.on(T.yq.SpeakingWhileMuted, () => {
                        let e = !tO;
                        (tO = !0),
                            e && r.emitChange(),
                            tb.start(e3, () => {
                                (tO = !1), r.emitChange();
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
                        (0, x.QW)({ type: x.iy.NOISE_CANCELLER_ERROR, underlyingError: nd(e) }),
                        (tW = !0),
                        ey.default.track(eG.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        v.h.dispatch({ type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: !0 }),
                        v.h.dispatch({ type: "AUDIO_SET_NOISE_CANCELLATION", enabled: !1 }),
                        v.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e });
                }),
                e.on(T.yq.VoiceActivityDetectorError, (e) => {
                    eW.warn(`voiceactivitydetectorerror event: ${e}`),
                        (0, x.QW)({ type: x.iy.NOISE_CANCELLER_ERROR, underlyingError: nd(e) }),
                        ey.default.track(eG.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        v.h.dispatch({
                            type: "AUDIO_SET_MODE",
                            context: ej.x.DEFAULT,
                            mode: eG.TBI.VOICE_ACTIVITY,
                            options: { ...ns(ej.x.DEFAULT).modeOptions, vadUseKrisp: !1 },
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
            (tZ = !0), v.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
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
                media_session_id: ex.A.getMediaSessionId(),
                rtc_connection_id: ex.A.getRTCConnectionId(),
            });
        }),
        tl.on(T.bg.AudioInputInitialized, (e) => {
            ey.default.track(eG.HAw.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * eN.A.Millis.SECOND),
                rtc_connection_id: ex.A.getRTCConnectionId(),
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
            let t = "encode" === e.mode ? x.iy.VIDEO_ENCODE_ERROR : x.iy.VIDEO_DECODE_ERROR,
                n = { videoCodec: e.codecStandard, errorMessage: e.message };
            (0, x.QW)(
                t === x.iy.VIDEO_ENCODE_ERROR
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
            let t = is(e);
            null !== t && ey.default.track(eG.HAw.VOICE_QUEUE_METRICS, t);
        }),
        tl.setOnVideoContainerResized((e, t, n) => {
            v.h.wait(() =>
                v.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
            );
        }),
        ti(),
        rl(),
        rc(),
        tl.supports(ej.O5.ASYNC_CLIPS_SOURCE_DEINIT) &&
            tl.setAsyncClipsSourceDeinit((0, W.V)("setupMediaEngine").enabled),
        o.reset(),
        (0, eP.w)().then((e) => {
            null != e && ((t2 = e.gpu_brand), (t3 = e.has_intel_hybrid_igpu));
        }),
        tl.on(T.bg.SystemMicrophoneModeChange, (e) => {
            (f = e), tl.eachConnection(nm);
        });
}
function ng() {
    return (0, eC.isWindows)() && A().satisfies(N.A?.os.release, eF.yg);
}
function nA() {
    return (0, eC.isWindows)() && A().satisfies(N.A?.os.release, eF.fG);
}
function nI() {
    return (0, eC.isMac)() && tl.supports(ej.O5.SCREEN_CAPTURE_KIT) && A().satisfies(N.A?.os.release, eF.e);
}
function nT() {
    return (
        (0, eC.isWindows)() &&
        tl.supports(ej.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        tl.supports(ej.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nS() {
    return tl.supports(ej.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function ny() {
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
        nC();
}
function nv(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ej.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = ni(t);
    return Object.assign(r, e), !__OVERLAY__ && n && S.w.set(eK, tu), r;
}
function nN() {
    S.w.remove(eK), location.reload();
}
function nC() {
    let e = ns();
    tl.setAudioInputDevice(e.inputDeviceId),
        tl.setAudioOutputDevice(e.outputDeviceId),
        nc(),
        tl.setInputVolume(e.inputVolume),
        tl.setOutputVolume(e.outputVolume),
        tl.setAecDump(e.aecDumpEnabled),
        tl.setSidechainCompression(e.sidechainCompression),
        tl.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        tl.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing);
}
function nR() {
    td || tl.enable().then(() => v.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nO(e) {
    return { id: ej.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
}
function nb(e, t) {
    if (0 === e.length) {
        let e = nO(t);
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
    let t = tm;
    if (((tm = nb(e, eY.intl.string(eY.t["/QIjDA"]))), !E().isEqual(tm, t))) {
        let e = ns(),
            t = nD(tm, e.inputDeviceId);
        tl.setAudioInputDevice(t), tl.eachConnection(nm);
    }
}
function nw(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nM(e) {
    tl.eachConnection((t) => {
        t.context === ej.x.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function nx(e) {
    let t = tE;
    if (((tE = nb(e, eY.intl.string(eY.t.xlUg0v))), !E().isEqual(tE, t))) {
        let e = ns(),
            n = nD(tE, e.outputDeviceId);
        tl.setAudioOutputDevice(n);
        let r = nw(t),
            i = nw(tE);
        r !== i && nM(i);
    }
}
function nP(e) {
    tL = e.length > 0;
    let t = tg;
    if (((tg = nb(e, eY.intl.string(eY.t.WKWARY))), tv && !E().isEqual(tg, t))) {
        let e = void 0 !== tg[tN],
            n = tN === ej.dx && t[ej.dx]?.disabled;
        nc(e || n);
    }
}
function nk() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = eA.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let r = n === eB.W.USER ? ej.x.DEFAULT : ej.x.STREAM,
            i = r === ej.x.STREAM ? ej.Cn : ej.Hz,
            s = t[n] ?? {},
            { localMutes: a, localVolumes: o } = ns(r);
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
        nv({ localMutes: a, localVolumes: o }, r);
    }
}
function nU(e) {
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
function nG(e, t) {
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
function nF(e) {
    (i = e.sessionId), (tI = !1), (ty = !1);
    let t = ns();
    if (
        (nT() && (nS() ? rB(ej.rB.AUTOMATIC) : t.automaticAudioSubsystem && rH()),
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
              nv({ mostRecentlyRequestedVoiceFilter: null }))
            : n(342887).md()),
        nk();
}
function nV(e) {
    let { mediaEngineState: t } = e;
    (tu = t.settingsByContext),
        (tm = t.inputDevices),
        (tE = t.outputDevices),
        (t1 = t.appSupported),
        (tU = t.krispModuleLoaded),
        (c = t.krispVersion),
        (tf = t.goLiveContext);
}
function nB() {
    i = null;
}
function nH() {
    if ((0, eC.isWeb)()) {
        let e = es.f1.getCurrentConfig({ location: "MediaEngineStore handlePostConnectionOpen" });
        e.loadWasmModule && e.preload && r.startDavePreload();
    }
    return !1;
}
function nj(e) {
    switch (e.state) {
        case eG.S7L.CONNECTING:
            nR();
            break;
        case eG.S7L.RTC_CONNECTING:
            (tM = !1), (l = void 0), (u = void 0), (tw = !1), (t4 = !1), t5.stop(), tx.stop(), o.reset();
            break;
        case eG.S7L.RTC_CONNECTED:
            nc();
            break;
        case eG.S7L.DISCONNECTED:
            nQ(), nJ();
    }
}
function nY(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (tI = t.mute || t.suppress), (ty = t.deaf), tl.eachConnection(nl);
            let e = null != t.guildId && null != t.channelId && null != tY && tY !== t.channelId,
                n = !tP && null == t.channelId;
            return nc(!e && !n && tv), (tY = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== eD.default.getId() || null != ex.A.getChannelId() || nc(!1, null), e;
    }, !1);
}
function nW(e) {
    let { mute: t } = e;
    (tT = t), tl.eachConnection(nl);
}
function nK(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = ns(t);
    if (t === ej.x.DEFAULT && (ep.A.requestPermission(eV.iL.AUDIO), tS)) return !1;
    (r = !i && !r) || (i = !1), n || (tR = !0), nv({ mute: r, deaf: i }, t), tl.eachConnection(nl);
}
function n$(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    nv({ mute: n }, t), r || (tR = !0), tl.eachConnection(nl);
}
function nz(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== eB.oD.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    nk(!0);
}
function nq(e) {
    let { context: t } = e;
    nv({ deaf: !ns(t).deaf }, t), tl.eachConnection(nl);
}
function nZ(e) {
    let { context: t, userId: n } = e;
    if (n === eD.default.getId()) return;
    let { localMutes: r } = ns(t);
    r[n] ? delete r[n] : (r[n] = !0),
        nv({ localMutes: r }, t),
        tl.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nX(e) {
    let { context: t, userId: n, videoToggleState: r, persist: i, isAutomatic: s } = e;
    h()(!(i && s), "These are not allowed to both be true.");
    let a = r === eG.bb8.DISABLED,
        { disabledLocalVideos: o } = ns(t),
        l = o[n] ?? !1,
        u = tQ.has(n),
        c = r === eG.bb8.AUTO_ENABLED || r === eG.bb8.MANUAL_ENABLED;
    eW.info(`disableVideo=${a} currentlyDisabled=${l} currentlyAutoDisabled=${u}, isVideoShown=${c}`),
        h()(!(u && !l), "If you are auto-disabled, then you are also disabled.");
    let d = a !== l,
        _ = t === ej.x.DEFAULT,
        f = s && d && _,
        p = i && d && _;
    eW.info(`changed=${d} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${f} isManualToggleByUser=${p}`);
    let { videoToggleStateMap: m } = ns(t);
    if (
        (m[n] === eG.bb8.AUTO_PROBING &&
            r === eG.bb8.AUTO_ENABLED &&
            (0, ef.A)(n, a ? ej.Al.AUTO_DISABLE : ej.Al.AUTO_ENABLE, c),
        (m[n] = r),
        nv({ videoToggleStateMap: m }, t, i),
        r === eG.bb8.AUTO_PROBING
            ? ex.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
            : ex.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
        tJ ||
            (eW.info(`isAutoDisableAllowed=${tJ} - disabling VideoHealthManager`),
            ex.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
        f)
    ) {
        if ((!a && !u) || (a && !tJ)) return;
        (0, ef.A)(n, a ? ej.Al.AUTO_DISABLE : ej.Al.AUTO_ENABLE, c), a ? tQ.add(n) : tQ.delete(n);
    } else
        p &&
            (u && !a
                ? (eW.info("disallowing auto-disable for this session because of manual override by user"),
                  (tJ = !1),
                  ex.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                  (0, ef.A)(n, ej.Al.MANUAL_REENABLE, c))
                : (0, ef.A)(n, a ? ej.Al.MANUAL_DISABLE : ej.Al.MANUAL_ENABLE, c));
    _ && !a && tQ.delete(n),
        a ? (o[n] = !0) : delete o[n],
        nv({ disabledLocalVideos: o }, t, i),
        tl.eachConnection((e) => e.setLocalVideoDisabled(n, o[n] ?? !1), t);
}
function nQ() {
    if (0 === tQ.size) return;
    let e = ej.x.DEFAULT,
        { disabledLocalVideos: t } = ns(e);
    tQ.forEach((n) => {
        h()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            tl.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tQ.clear(),
        nv({ disabledLocalVideos: t }, e, !1);
}
function nJ() {
    let e = ej.x.DEFAULT,
        { videoToggleStateMap: t } = ns(e);
    for (let [e, n] of Object.entries(t)) n === eG.bb8.AUTO_PROBING && delete t[e];
    nv({ videoToggleStateMap: t }, e, !1);
}
function n0(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === eD.default.getId()) return;
    let i = t === ej.x.STREAM ? ej.Cn : ej.Hz,
        { localVolumes: s } = ns(t);
    r === i ? delete s[n] : (s[n] = r), nv({ localVolumes: s }, t), tl.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function n1(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: s } = ns(t);
    (s[n] = { left: r, right: i }), nv({ localPans: s }, t), tl.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function n2(e) {
    let { context: t, mode: n, options: r } = e;
    nv({ mode: n, modeOptions: { ...r, updatedAt: Date.now() } }, t), tl.eachConnection(na);
}
function n3(e) {
    let { volume: t } = e;
    nv({ inputVolume: no(t) }), tl.setInputVolume(t);
}
function n6(e) {
    let { volume: t } = e;
    nv({ outputVolume: t }), tl.setOutputVolume(t);
}
function n4(e) {
    let { id: t } = e;
    (t = nD(tm, t)),
        (tp = performance.now()),
        nv({ inputDeviceId: t }),
        tl.setAudioInputDevice(t),
        tl.eachConnection(nm),
        (l = void 0),
        (u = void 0),
        t5.stop(),
        (t4 = !1);
    let { resetSilenceWarningOnDeviceChange: n } = ea.A.getConfig({
        location: "MediaEngineStore.handleSetInputDevice",
    });
    n && ((tw = !1), o.reset());
}
function n5(e) {
    let { id: t } = e;
    nv({ outputDeviceId: (t = nD(tE, t)) }), tl.setAudioOutputDevice(t);
}
function n7(e) {
    let { id: t } = e;
    nv({ videoDeviceId: (t = nD(tg, t)) }), nc();
}
function n8(e) {
    let { inputProfile: t } = e;
    nv({ activeInputProfile: t });
    let n = ns();
    tl.eachConnection((e) => {
        na(e), nm(e);
    }),
        tl.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        ru();
}
function n9(e) {
    return t_ !== e.required && ((t_ = e.required), e.required || tl.interact(), !0);
}
function re(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    nL(t), nx(n), nP(r);
}
function rt(e) {
    let { inputVolume: t, outputVolume: n } = e;
    nv({ inputVolume: no(t), outputVolume: n });
}
function rn(e) {
    let t = ns(),
        n = tl.getAudioSubsystem(),
        i = tl.getAudioLayer(),
        s = nD(tm, t.inputDeviceId),
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
function rr(e) {
    let t = nv({ echoCancellation: e.enabled });
    tl.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), ru(), rn(e.location);
}
function ri(e) {
    ra(e.enabled);
}
function rs(e) {
    let t = nv({ sidechainCompressionStrength: e.strength });
    tl.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function ra(e) {
    let t = nv({ sidechainCompression: e });
    tl.setSidechainCompression(t.sidechainCompression);
}
function ro(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? t0.add(n) : t0.delete(n), rl(), ru();
}
function rl() {
    let e = !t0.has("voice_filter_preview") && !t0.has("mic_test");
    tl.setMaybePreprocessMute(e);
}
function ru() {
    let e = ns(),
        t = t0.size > 0,
        n = e.inputDeviceId,
        r = ew.A.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        s = ew.A.hasNoiseSuppression(n) || e.noiseSuppression,
        a = nf(ew.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        o = e.noiseCancellation,
        l = null !== tV,
        u = t0.has("voice_filter") && 1 === t0.size;
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
async function rc() {
    if (!tl.supports(ej.O5.VAAPI)) return;
    let e = 4098;
    if (window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let t = await window.DiscordNative.processUtils.getSystemInfo();
    (t.electronGPUInfo?.gpuDevice ?? []).some((t) => t.vendorId === e) &&
        ((t9 = !0), (t8 = tl.supports(ej.O5.GAMESCOPE_CAPTURE)));
}
function rd(e) {
    let t = nv({ noiseSuppression: e.enabled });
    tl.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), ru(), rn(e.location);
}
function r_(e) {
    let t = nv({ automaticGainControl: e.enabled });
    tl.eachConnection((e) => np(e, t.automaticGainControl)), ru(), rn(e.location);
}
function rf(e) {
    let t = nv({ noiseCancellation: e.enabled });
    tl.eachConnection((e) => nh(e, t.noiseCancellation)), ru(), rn(e.location);
}
function rp(e) {
    eh.A.setKrispModelOverride(e.model), (_ = e.model), ru();
}
function rh(e) {
    (0, eC.isWeb)() || ((tF = e.enabled), tl.setNoiseCancellationEnableStats?.(e.enabled));
}
function rm(e) {
    nv({ silenceWarning: e.enabled });
}
function rE(e) {
    tl.setDebugLogging(e.enabled);
}
function rg(e) {
    let { level: t } = e;
    (d = t), eh.A.setKrispSuppressionLevel(t);
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
    tl.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function ry(e) {
    let { enabled: t } = e;
    nv({ qos: t }), tl.eachConnection((e) => e.setQoS(t));
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
    if (((tM = !0 !== tw && !t), t)) (tw = !0), (t4 = !1), t5.stop(), tx.stop();
    else if (ns().mode === eG.TBI.VOICE_ACTIVITY && tw) {
        let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = ea.A.getConfig({
            location: "MediaEngineStore.handleInputDetected",
        });
        e &&
            t5.start(e4, () => {
                ey.default.track(eG.HAw.HARDWARE_MUTE_GUESSED, {
                    input_device_name: tm[nD(tm, ns().inputDeviceId)]?.name,
                    rtc_connection_id: ex.A.getRTCConnectionId(),
                }),
                    (t4 = !0),
                    r.emitChange();
            }),
            null != t &&
                tx.start(t * eN.A.Millis.MINUTE, () => {
                    (tw = !1), o.reset();
                });
    }
}
function rR(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === tS) return !1;
    (tS = n), tl.eachConnection(nl);
}
function rO(e) {
    let { state: t, permissionType: n } = e,
        r = t === eV.hL.ACCEPTED;
    switch (n) {
        case eV.iL.AUDIO:
            (tZ = !0), tl.eachConnection(nl);
            break;
        case eV.iL.CAMERA:
            !r && tv && nc(!1);
            break;
        default:
            return !1;
    }
}
function rb() {
    return tU || !1;
}
async function rD() {
    try {
        await eO.Ay.ensureModule("discord_krisp");
        let e = eO.Ay.requireModule("discord_krisp");
        (tU = !0),
            (c = e.getSdkVersion?.()),
            (d = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (tG = e), r.emitChange();
            }),
            r.emitChange();
    } catch (t) {
        eW.warn(`Failed to load Krisp module: ${t.message}`), eR.A.captureException(t);
        let e = ej.CO.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? ej.CO.INITIALIZED : n;
        }
        ey.default.track(eG.HAw.VOICE_PROCESSING, { noise_canceller_error: e }), nv({ noiseCancellation: !1 });
    } finally {
        tk = !1;
    }
}
function rL() {
    return (0, eC.isWindows)() || (0, eC.isLinux)() || (0, eC.isMac)();
}
function rw() {
    !rL() || __OVERLAY__ || tk || tU
        ? (0, eC.isWeb)() && tl.supports(ej.O5.NOISE_CANCELLATION)
            ? ((tU = !0), r.emitChange())
            : (0, eC.isWeb)() && nv({ noiseCancellation: !1 })
        : ((tk = !0), rD());
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
function rx() {
    (0, eC.isLinux)() && rM();
}
function rP(e) {
    let { enabled: t } = e;
    ey.default.track(eG.HAw.VOICE_FILTER_PLAYBACK_TOGGLED, { active_voice_filter_id: tV ?? null, enabled: t }),
        nv({ voiceFilterPlaybackEnabled: t });
}
function rk(e) {
    let { newVoiceFilterId: t } = e;
    nv({ mostRecentlyRequestedVoiceFilter: t }), tl.eachConnection((e) => e.setVoiceFilterId(t));
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
    nv({ bypassSystemInputProcessing: t }), tl.setAudioInputBypassSystemProcessing(t), rn(e.location);
}
function rV(e) {
    rB(e.subsystem);
}
function rB(e) {
    e === ej.rB.AUTOMATIC
        ? (nv({ automaticAudioSubsystem: !0 }), rH())
        : (nv({ automaticAudioSubsystem: !1 }), tl.setAudioSubsystem(e));
}
function rH() {
    tl.queueAudioSubsystem(ej.rB.EXPERIMENTAL);
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
    (s.mute || s.deaf) && (nv({ deaf: !1, mute: !1 }), tl.eachConnection(nl));
}
function rY(e) {
    let { application: t } = e;
    tc.add(t.id);
}
function rW(e) {
    let { application: t } = e;
    tc.delete(t.id);
}
function rK(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (td = !1), tl.eachConnection(nl);
                break;
            case "video":
                nc(!1);
        }
}
function r$(e) {
    (td = e.enabled), e.unmute && nv({ mute: !1, deaf: !1 }), tl.eachConnection(nl);
}
function rz(e) {
    let { enabled: t } = e;
    ep.A.requestPermission(eV.iL.CAMERA), nc(t);
}
function rq(e) {
    let { sourceId: t, applicationName: n, quality: i } = e;
    if (!(0, L.Ao)() || null == N.A) return !1;
    let s = null,
        o = null,
        l = ev.A.getPidFromDesktopSource(t);
    ({ soundshareId: s, soundshareSession: o } = nU(l));
    let u = { desktopSource: { id: t, sourcePid: l, soundshareId: s, soundshareSession: o }, quality: i };
    null != a &&
        (tl.setClipsSource(null),
        (0, eC.isWindows)() && null != a.desktopSource.soundshareId && C.c1(a.desktopSource.soundshareId)),
        null != s && nG(s, o),
        (a = u);
    let c = nt("MediaEngineStore clips"),
        d = ns().videoHook;
    tl.setClipsSource({
        desktopDescription: {
            id: a.desktopSource.id,
            soundshareId: a.desktopSource.soundshareId,
            useVideoHook: d,
            useGraphicsCapture: ng(),
            useCaptureDeviceForEncode: !1,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: nI(),
            videoHookStaleFrameTimeoutMs: eJ,
            graphicsCaptureStaleFrameTimeoutMs: e0,
            hdrCaptureMode: c,
        },
        quality: i,
        applicationName: n,
    });
}
function rZ(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((a = null), tl.setClipsSource(null));
}
function rX(e) {
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
            (({ soundshareId: e, soundshareSession: n } = nU(o)), null != e && nG(e, n)),
            nu(s),
            nc(s === ej.x.STREAM && tv, {
                desktopSource: { id: r, sourcePid: o, soundshareId: e, soundshareSession: n },
                quality: { resolution: a.resolution, frameRate: a.frameRate },
            });
    } else if (t?.cameraSettings != null) {
        let e = t.context ?? ej.x.DEFAULT,
            { videoDeviceGuid: n, audioDeviceGuid: r } = t.cameraSettings,
            i = e === ej.x.STREAM && tv,
            s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
        nc(i, {
            cameraSource: { videoDeviceGuid: n, audioDeviceGuid: r },
            quality: { resolution: s.resolution, frameRate: s.frameRate },
        });
    } else nc(tv, null);
}
function rQ(e) {
    let { section: t } = e;
    return t === eG.nc_.VOICE && nR(), !1;
}
function rJ() {
    return tl.eachConnection(nm), !1;
}
function r0(e) {
    let { enabled: t } = e,
        n = nv({ aecDumpEnabled: t });
    tl.setAecDump(n.aecDumpEnabled);
}
function r1(e) {
    let { enabled: t } = e;
    nv({ openH264Enabled: t }), eO.Ay?.setOpenH264Enabled?.(t);
}
function r2(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (tu = Object.values(ej.x).reduce((e, n) => {
        let r = n,
            i = ta();
        return (e[r] = E().merge(i, t[r])), e;
    }, {})),
        S.w.set(eK, tu),
        nC();
}
function r3(e) {
    let { state: t } = e,
        n = k.A.isEnabled();
    if (t === eG.g6G.BACKGROUND && tv && !n) (tD = !0), nc(!1);
    else {
        if (t !== eG.g6G.ACTIVE || !tD) return !1;
        (tD = !1), nc(!0);
    }
    return !0;
}
function r6(e) {
    tl.eachConnection((t) => t.setBitRate(e.bitrate));
}
function r4() {
    if ((!tv && null == s) || null != ex.A.getRTCConnectionId()) return !1;
    nc(!1, null);
}
function r5() {
    return !!tW && ((tW = !1), !0);
}
function r7(e) {
    tl.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function r8(e) {
    let { settings: t } = e;
    tl.applyMediaFilterSettings(t).finally(() => {
        (tK = !1), r.emitChange();
    });
}
function r9() {
    tK = !0;
}
function ie() {
    tK = !1;
}
function it(e) {
    t6 = e.enabled;
}
function ir() {
    if ((0, eC.isDesktop)() && eC.isPlatformEmbedded && !ne) {
        ne = !0;
        let e = async () => {
            let t = await new Promise((e) => {
                eO.Ay.pollQueueMetrics((t) => {
                    e(t);
                });
            });
            t.periodMs = ej.tl;
            let n = is(t);
            null !== n && ey.default.track(eG.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, ej.tl);
        };
        setTimeout(e, ej.tl);
    }
}
class ii extends I.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        nE(),
            ny(),
            rw(),
            rx(),
            nJ(),
            ir(),
            (0, eC.isWindows)() && eC.isPlatformEmbedded && n_(),
            (t1 = {
                [ej.O5.VIDEO]: tl.supports(ej.O5.VIDEO),
                [ej.O5.DESKTOP_CAPTURE]: tl.supports(ej.O5.DESKTOP_CAPTURE),
                [ej.O5.HYBRID_VIDEO]: tl.supports(ej.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eD.default, eL.A, ew.A, eM.A, b.A, P.A, ex.A, U.Ay, eE.A, eA.A, ek.default, eU.A, eS.A);
    }
    supports(e) {
        return tl.supports(e);
    }
    supportsInApp(e) {
        return t1[e] || tl.supports(e);
    }
    isSupported() {
        return tl.supported();
    }
    isNoiseSuppressionSupported() {
        return tl.supports(ej.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return rb();
    }
    isNoiseCancellationError() {
        return tW;
    }
    isAutomaticGainControlSupported() {
        return tl.supports(ej.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nS() && (tl.supports(ej.O5.LEGACY_AUDIO_SUBSYSTEM) || tl.supports(ej.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return tl.supports(ej.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === tl.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return rb();
    }
    isAecDumpSupported() {
        return tl.supports(ej.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return tl.supports(ej.O5.VIDEO) && tl.supports(ej.O5.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        return eM.A.getChannel(tY)?.type !== eG.rbe.GUILD_STAGE_VOICE && e5 && X.A.simulcastEnabled();
    }
    getAecDump() {
        return ns().aecDumpEnabled;
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
        return tF;
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
            ns(e).mute ||
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
            t = t4 && "voice_isolation" !== this.getSystemMicrophoneMode() && ns(e).mode === eG.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (ew.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return t6;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ej.x.DEFAULT;
        return !this.isSupported() || ns(e).deaf;
    }
    isVideoEnabled() {
        return tv && tL;
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
        return e !== eD.default.getId() && (ns(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return tl.supports(ej.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ej.x.DEFAULT;
        return ns(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ej.x.DEFAULT;
        return ns(t).videoToggleStateMap[e] ?? eG.bb8.NONE;
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
        return tZ;
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
            n = ns(t).localPans[e];
        return null != n ? n : eQ;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ej.x.DEFAULT,
            n = t === ej.x.STREAM ? ej.Cn : ej.Hz,
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
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ej.x.DEFAULT;
        return ns(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ej.x.DEFAULT;
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
        return nD(tm, ns().inputDeviceId);
    }
    getOutputDeviceId() {
        return nD(tE, ns().outputDeviceId);
    }
    getVideoDeviceId() {
        return nD(tg, ns().videoDeviceId);
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
        let e = ns();
        return ew.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return tl.supports(ej.O5.SIDECHAIN_COMPRESSION) && ns().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return ns().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return ns().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tz && tz;
    }
    getOpenH264Enabled() {
        return (0, eC.isLinux)() && ns().openH264Enabled;
    }
    getLoopback() {
        return t0.size > 0;
    }
    getLoopbackReasons() {
        return t0;
    }
    getNoiseSuppression() {
        let e = ns();
        return ew.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = ns();
        return ew.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return ns().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return ns().noiseCancellation;
    }
    getHardwareEncoding() {
        return e5;
    }
    getEnableSilenceWarning() {
        return ns().silenceWarning;
    }
    getDebugLogging() {
        return tl.getDebugLogging();
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
        return nT() && ns().automaticAudioSubsystem ? ej.rB.AUTOMATIC : tl.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return tl.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return ns().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eH.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ej.x.DEFAULT;
        return ns(e);
    }
    getState() {
        return {
            settingsByContext: tu,
            inputDevices: tm,
            outputDevices: tE,
            appSupported: t1,
            krispModuleLoaded: tU,
            krispVersion: c,
            krispSuppressionLevel: d,
            goLiveSource: s,
            goLiveContext: tf,
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
        return ns().videoHook;
    }
    supportsVideoHook() {
        return tl.supports(ej.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = ns().experimentalSoundshare2;
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
            t = ns().useSystemScreensharePicker,
            n = (0, eC.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return tl.supports(ej.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return t9;
    }
    getUseGamescopeCapture() {
        return t8;
    }
    getSpeakingWhileMuted() {
        return tO;
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
        return (0, eC.isMac)()
            ? tl.supports(ej.O5.SOUNDSHARE) && A().satisfies(N.A?.os.release, eF.P$) && nI()
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
        if (!t$ && ((t$ = !0), (0, eC.isWeb)())) {
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
        return t2;
    }
}
function is(e) {
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
(r = new ii(v.h, {
    VOICE_CHANNEL_SELECT: rj,
    VOICE_STATE_UPDATES: nY,
    CONNECTION_OPEN: nF,
    CONNECTION_CLOSED: nB,
    POST_CONNECTION_OPEN: nH,
    RTC_CONNECTION_STATE: nj,
    AUDIO_SET_TEMPORARY_SELF_MUTE: nW,
    AUDIO_TOGGLE_SELF_MUTE: nK,
    AUDIO_SET_SELF_MUTE: n$,
    AUDIO_TOGGLE_SELF_DEAF: nq,
    AUDIO_TOGGLE_LOCAL_MUTE: nZ,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: nX,
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
    MEDIA_ENGINE_SET_AUDIO_ENABLED: r$,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rz,
    MEDIA_ENGINE_PERMISSION: rK,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rX,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: n7,
    MEDIA_ENGINE_INTERACTION_REQUIRED: n9,
    USER_SETTINGS_MODAL_INIT: rQ,
    USER_SETTINGS_MODAL_SET_SECTION: rQ,
    CERTIFIED_DEVICES_SET: rJ,
    RPC_APP_CONNECTED: rY,
    RPC_APP_DISCONNECTED: rW,
    OVERLAY_INITIALIZE: nV,
    APP_STATE_UPDATE: r3,
    SET_CHANNEL_BITRATE: r6,
    SET_VAD_PERMISSION: rR,
    SET_NATIVE_PERMISSION: rO,
    SET_CHANNEL_VIDEO_QUALITY_MODE: r7,
    MEDIA_ENGINE_SET_AEC_DUMP: r0,
    MEDIA_ENGINE_SET_OPENH264_ENABLED: r1,
    MEDIA_ENGINE_RESET_SETTINGS: r2,
    CHANNEL_DELETE: r4,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: r5,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: r8,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: r9,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: ie,
    USER_SETTINGS_PROTO_UPDATE: nz,
    CLIPS_INIT: rq,
    CLIPS_SETTINGS_UPDATE: rZ,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: it,
    VOICE_FILTER_REQUEST_SWITCH: rk,
    VOICE_FILTER_LOOPBACK_TOGGLE: rP,
    VOICE_FILTER_APPLIED: rG,
    VOICE_FILTER_DOWNLOAD_FAILED: rU,
    VOICE_FILTER_APPLY_FAILED: rU,
})),
    (o = new ee.A(tl, r));
let ia = r;
