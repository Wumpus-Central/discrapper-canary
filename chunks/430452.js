"use strict";
let r, i, a, s, o, l, u, c, d, _;
n.d(t, { A: () => r7 }), n(321073), n(790599);
var f = n(284009),
    p = n.n(f),
    h = n(735438),
    m = n.n(h),
    g = n(299855),
    E = n.n(g),
    A = n(311907),
    I = n(205693),
    T = n(506774),
    y = n(451988),
    S = n(73153),
    v = n(77729),
    C = n(719129),
    b = n(894539),
    N = n(274372),
    R = n(915618),
    O = n(572164),
    D = n(626584),
    L = n(211597),
    w = n(709710),
    x = n(49463),
    P = n(784113),
    M = n(15285),
    k = n(540305),
    U = n(17300),
    G = n(544746),
    V = n(820344),
    F = n(593595),
    B = n(788601),
    j = n(626078),
    H = n(509034),
    Y = n(638188),
    W = n(269377),
    K = n(934341),
    z = n(658046),
    $ = n(621963),
    q = n(525286),
    Z = n(780732),
    Q = n(495439),
    X = n(927170),
    J = n(233232),
    ee = n(140175),
    et = n(267378),
    en = n(223572),
    er = n(276006),
    ei = n(670470),
    ea = n(165479),
    es = n(896014),
    eo = n(765396),
    el = n(37770),
    eu = n(75076),
    ec = n(674966),
    ed = n(559633),
    e_ = n(3527),
    ef = n(714763),
    ep = n(879172),
    eh = n(555444),
    em = n(617617),
    eg = n(340913),
    eE = n(996744),
    eA = n(28075),
    eI = n(954571),
    eT = n(353835),
    ey = n(927813),
    eS = n(723702),
    ev = n(728458),
    eC = n(837921),
    eb = n(350535),
    eN = n(961350),
    eR = n(131319),
    eO = n(347481),
    eD = n(734057),
    eL = n(383501),
    ew = n(851581),
    ex = n(287809),
    eP = n(117549),
    eM = n(652215),
    ek = n(502075),
    eU = n(765682),
    eG = n(355097),
    eV = n(509381),
    eF = n(731854),
    eB = n(985018);
let ej = new D.A("MediaEngineStore"),
    eH = "MediaEngineStore",
    eY = 4,
    eW = 1,
    eK = 1,
    ez = 1,
    e$ = 0.5,
    eq = { left: 1, right: 1 },
    eZ = 500,
    eQ = 5 * ey.A.Millis.SECOND,
    eX = -60,
    eJ = 100,
    e0 = 2 * ey.A.Millis.SECOND,
    e1 = 30 * ey.A.Millis.SECOND,
    e2 = !0,
    e3 = "deep_noise_suppression",
    e6 = 0,
    e4 = null;
function e5() {
    if (!(0, eS.isIOS)() || null == e4) return !1;
    let e = e4();
    if (null == e || !e.startsWith("ARM64_")) return !1;
    let t = e.substring(6);
    return ("T" === t[0] || "S" === t[0]) && parseInt(t.substring(1), 10) >= 8122;
}
let e7 = null;
async function e8() {
    if (!(0, eS.isMac)() || v.A?.os.arch !== "arm64" || v.A?.processUtils?.getSystemInfo == null) {
        e7 = !1;
        return;
    }
    let e = await v.A.processUtils.getSystemInfo(),
        t = (e.cpus?.[0]?.model ?? "").match(/Apple M(\d+)/);
    if (null == t) {
        e7 = !0;
        return;
    }
    e7 = parseInt(t[1], 10) >= 3;
}
function e9() {
    return !0 === e7;
}
function te() {
    return {
        mode: eM.TBI.VOICE_ACTIVITY,
        modeOptions: {
            threshold: eX,
            autoThreshold: eS.isPlatformEmbedded || __OVERLAY__,
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
        inputVolume: eF.Hz,
        outputVolume: eF.Hz,
        inputDeviceId: eF.dx,
        outputDeviceId: eF.dx,
        videoDeviceId: eF.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: tn.supports(eF.O5.VIDEO_HOOK),
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
let tt = {
        [eV.my.CUSTOM]: {},
        [eV.my.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [eV.my.STUDIO]: {
            mode: eM.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    tn = (0, I.hB)((0, I.WI)());
ej.enableNativeLogger(!0);
let tr = {},
    ti = new Set([eF.x.DEFAULT]),
    ta = tn.supports(eF.O5.AUTO_ENABLE),
    ts = !1,
    to = eF.x.STREAM,
    tl = performance.now(),
    tu = null,
    tc = { [eF.dx]: nv("No Input Devices") },
    td = { [eF.dx]: nv("No Output Devices") },
    t_ = { [eF.dx]: nv("No Video Devices") },
    tf = new y.Ep(),
    tp = !1,
    th = !1,
    tm = !1,
    tg = !1,
    tE = !1,
    tA = eF.qe,
    tI = eF.qe,
    tT = !1,
    ty = !1,
    tS = !1,
    tv = new y.Ep(),
    tC = !1,
    tb = !1,
    tN = null,
    tR = !1,
    tO = !1,
    tD = !1,
    tL = !1,
    tw = !1,
    tx = [],
    tP = !1,
    tM = null,
    tk = null,
    tU = null,
    tG = null,
    tV = null,
    tF = !1,
    tB = !1,
    tj = !1,
    tH = null,
    tY = null,
    tW = !1,
    tK = !1;
ec.A.hasPermission(eU.iL.AUDIO, { showAuthorizationError: !1 }),
    ec.A.hasPermission(eU.iL.CAMERA, { showAuthorizationError: !1 });
let tz = !1,
    t$ = new Set(),
    tq = tz,
    tZ = new Set(),
    tQ = {},
    tX = null,
    tJ = null,
    t0 = !0,
    t1 = !1,
    t2 = !1,
    t3 = !1,
    t6 = !1;
function t4(e) {
    return (0, $.p)({ location: e }).hdrCaptureMode;
}
async function t5() {
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
function t7() {
    return null != tY ? tY : "u" > typeof window ? (tY = t5().then((e) => ((tH = e), e))) : Promise.resolve(!1);
}
function t8() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eF.x.DEFAULT,
        t = tr[e];
    return null == t && ((t = te()), (tr[e] = t)), t;
}
function t9() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eF.x.DEFAULT,
        t = t8(e),
        n = tt[t.activeInputProfile ?? eV.my.CUSTOM],
        r = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}) };
    if (
        (null == r.vadDuringPreProcess && (r.vadDuringPreProcess = (0, en.R)({ location: "getSettings" }).enabled),
        (null == r.vadKrispActivationThreshold && !0 === n.automaticGainControl) || !0 === t.automaticGainControl)
    ) {
        let e = (0, U.F)({ location: "getSettings" });
        null != e.vadKrispActivationThreshold && (r.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return { ...t, ...n, modeOptions: r };
}
function ne(e) {
    let t = t9(e.context),
        n = t.mode;
    e.context === eF.x.DEFAULT &&
        ((0, eh.H)({ location: "setInputMode", autoTrackExposure: !1 }).enableLatching &&
            n === eM.TBI.PUSH_TO_TALK &&
            t.modeOptions.pttLatchingEnabled &&
            (n = eM.TBI.VOICE_ACTIVITY),
        (0, ee.N)(!1, !1, !1));
    let { showPTTSpeakingIndicator: r } = eg.A.getConfig({ location: "setInputMode" }),
        i = r && n === eM.TBI.PUSH_TO_TALK;
    e.setInputMode(n, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: !!i || t.modeOptions.autoThreshold,
        vadUseKrisp: (!!i || t.modeOptions.vadUseKrisp) && rv(),
        vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? e$,
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        vadDuringPreProcess: t.modeOptions.vadDuringPreProcess ?? !1,
        pttReleaseDelay: Math.round(t.modeOptions.delay),
    });
}
function nt(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eF.Hz;
    return m().clamp(e, 0, t);
}
function nn(e) {
    let t = t9(e.context),
        n = !ta || t.mute || t.deaf;
    e.context === eF.x.DEFAULT
        ? (n = n || tp || th || tm || !ec.A.didHavePermission(eU.iL.AUDIO))
        : e.context === eF.x.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eF.x.DEFAULT && b.A.updateNativeMute();
}
function nr(e) {
    e !== to && (null != a && tn.setGoLiveSource(null, to), (to = e));
}
function ni() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tE,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        n = a;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, eS.isWindows)() && C.c1(n.desktopSource.soundshareId),
            tn.setGoLiveSource(null, to)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            tn.setGoLiveSource(null, to),
        tE || e)
    ) {
        let t = t9().videoDeviceId;
        tE && t === eF.dx && tI === eF.dx && tA !== eF.qe ? (t = tA) : (tI = t),
            (tA = (tE = e) ? nb(t_, t) : eF.qe),
            tn.setVideoInputDevice(tA);
    }
    if (((a = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = t4("MediaEngineStore go live"),
                i = t9().videoHook,
                a = n_(),
                s = a ? (nf() ? ek.zl : ek.eg) : 0,
                o = (0, eS.isWindows)() && (0, er.b)("updateVideo").enabled,
                l = !1;
            (0, eS.isWindows)() && tJ && (l = ea.q.getConfig({ location: "updateVideo" }).enabled),
                tn.setGoLiveSource(
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
                            allowScreenCaptureKit: np(),
                            videoHookStaleFrameTimeoutMs: eZ,
                            graphicsCaptureStaleFrameTimeoutMs: eQ,
                            hdrCaptureMode: n,
                            enableGlobalFramePoolLock: (0, z.H)({ location: "updateVideo" }).enabled,
                            useGraphicsCaptureDirtyRegions: l,
                        },
                        quality: e,
                    },
                    to,
                );
        }
        null != t.cameraSource &&
            tn.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: t.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: t.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                to,
            );
    }
}
function na(e) {
    switch (e) {
        case eF.CO.CPU_OVERUSE:
            return w.B6.NoiseCancellerCpuOveruse;
        case eF.CO.FAILED:
            return w.B6.NoiseCancellerFailed;
        case eF.CO.VAD_CPU_OVERUSE:
            return w.B6.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function ns() {
    null === tu &&
        tn
            .getCodecSurvey()
            .then((e) => {
                try {
                    let t = JSON.parse(e);
                    if (null == t || null == t.available_video_decoders) throw Error("decoder survey is not available");
                    tu = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                } catch (e) {
                    ej.error("Failed to parse codec survey", e), (tu = !1);
                }
            })
            .catch((e) => {
                ej.error("Failed to get codec survey", e), (tu = !1);
            })
            .finally(() => {
                S.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
            });
}
function no(e) {
    let t = (0, U.F)({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function nl(e, t) {
    e.setAutomaticGainControl(no(t));
}
function nu(e, t) {
    let n = (0, e_.A)(t, r.getSystemMicrophoneMode(), { location: "setNoiseCancellation" });
    n !== t && ej.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: i } = (0, U.F)({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(i);
    let { noiseCancellationAfterProcessing: a, vadAfterWebrtc: s } = (0, X.$)({ location: "setNoiseCancellation" });
    e.setNoiseCancellationAfterProcessing(a), e.setVADAfterWebrtc(s);
}
function nc(e) {
    let t = t9(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eO.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eO.A.hasNoiseSuppression(n) || t.noiseSuppression),
        nl(e, eO.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        nu(e, t.noiseCancellation),
        e.setVoiceFilterId(tM),
        (0, eS.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function nd() {
    tf.start(e1, () => {
        ej.error("Device enumeration timed out"), eI.default.track(eM.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
    }),
        tn.on(I.bg.Connection, (e) => {
            ne(e), nn(e), nc(e);
            let t = t9();
            e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
                e.setQoS(t.qos);
            let n = (0, Q.K)({ location: "setupMediaEngine" }).treatment;
            (tW = n === Q.c.NoSoftwareDecodeWithFallback),
                n === Q.c.NoSoftwareDecode || n === Q.c.NoSoftwareDecodeWithFallback
                    ? (e.setExperimentFlag(eF.fd.H265_HARDWARE_ONLY, !0),
                      (0, eS.isWindows)()
                          ? t7().then((t) => {
                                e.setExperimentFlag(eF.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                            })
                          : (0, eS.isMac)() && e.setExperimentFlag(eF.fd.H265_HARDWARE_DECODE_AVAILABLE, !0))
                    : n === Q.c.Disabled &&
                      (e.setExperimentFlag(eF.fd.H265_HARDWARE_ONLY, !0),
                      e.setExperimentFlag(eF.fd.H265_HARDWARE_DECODE_AVAILABLE, !1)),
                (0, eS.isWindows)() &&
                    (0, Z.r)({ location: "setupMediaEngine" }).enabled &&
                    e.setExperimentFlag(eF.fd.USE_H264_MF_DECODER, !0);
            let i = eL.A.getGuildId(),
                {
                    muteBeforeProcessing: s,
                    pttBeforeProcessing: o,
                    skipEncode: l,
                } = (null != i ? W.A : Y.A).getCurrentConfig(
                    { location: "setupMediaEngine", guildId: i ?? void 0 },
                    { autoTrackExposure: !0 },
                );
            s && e.setExperimentFlag(eF.fd.MUTE_BEFORE_PROCESSING, !0),
                o && e.setExperimentFlag(eF.fd.PTT_BEFORE_PROCESSING, !0),
                l && e.setExperimentFlag(eF.fd.SKIP_ENCODE, !0),
                (0, J.J)({ location: "setupMediaEngine" }).enabled &&
                    e.setExperimentFlag(eF.fd.LOW_LATENCY_RATE_CONTROL, !0);
            let u = !1,
                c = !0;
            if (
                (e.setExperimentFlag(eF.fd.RESET_DECODER_ON_ERRORS, !0),
                u && e.setExperimentFlag(eF.fd.SOFTWARE_FALLBACK_ON_ERRORS, !0),
                c && e.setExperimentFlag(eF.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0),
                e.context === eF.x.STREAM)
            ) {
                let t = nR(td);
                e.setSoundshareDiscardRearChannels(t);
                let { simulcastEnabled: n, lqStreamBitrate: r } = q.A.getConfig();
                e.configureGoLiveSimulcast(n, r);
            }
            if ((0, eS.isWindows)())
                e.setExperimentFlag(eF.fd.SIGNAL_AV1, !0), e.setExperimentFlag(eF.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            else if ((0, eS.isMac)()) {
                if ((e.setExperimentFlag(eF.fd.SIGNAL_AV1_DECODE, !0), e9())) {
                    let { enabled: t } = (0, V.t)("MediaEngineStore");
                    t && e.setExperimentFlag(eF.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                }
            } else if ((0, eS.isLinux)()) e.setExperimentFlag(eF.fd.SIGNAL_AV1_DECODE, !0);
            else if ((0, eS.isIOS)() && e5()) {
                let { enabled: t } = (0, G.$)("MediaEngineStore");
                t &&
                    (e.setExperimentFlag(eF.fd.SIGNAL_AV1_DECODE, !0),
                    e.setExperimentFlag(eF.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
            }
            if ((0, eS.isWeb)()) {
                let { enabled: t } = (0, K.O)("MediaEngineStore");
                e.setExperimentFlag(eF.fd.BROWSER_HEVC, t);
            }
            if (
                ((0, eS.isWindows)() &&
                    tX?.startsWith("AMD") &&
                    (0, es.F)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eF.fd.WMF_GPU_ENCODE, !0),
                (0, eS.isWindows)() &&
                    tX?.startsWith("Intel") &&
                    (0, eo.J)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eF.fd.WMF_GPU_ENCODE, !0),
                (0, eS.isWindows)() &&
                    tX?.startsWith("Qualcomm") &&
                    (0, es.F)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eF.fd.WMF_GPU_ENCODE, !0),
                tn.setHasFullbandPerformance((0, L.A)()),
                e.setRemoteAudioHistory(1e3),
                (0, R.A)(r))
            ) {
                let { enableViewerClipping: t } = ei.A.getCurrentConfig(
                    { location: "f627ab_15" },
                    { autoTrackExposure: !1 },
                );
                e.setViewerSideClip(t), e.setClipsKeyFrameInterval(eF.X1);
            }
            for (let n of ((t = t9(e.context)), e.setPostponeDecodeLevel(eJ), Object.keys(t.localMutes)))
                n !== eN.default.getId() && e.setLocalMute(n, t.localMutes[n]);
            for (let n of Object.keys(t.localVolumes))
                n !== eN.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
            for (let n of Object.keys(t.localPans)) {
                let r = t.localPans[n];
                e.setLocalPan(n, r.left, r.right);
            }
            for (let n of Object.keys(t.disabledLocalVideos)) e.setLocalVideoDisabled(n, t.disabledLocalVideos[n]);
            e.on(I.yq.Speaking, (t, n, r, i) => {
                S.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: i });
            }),
                e.context === eF.x.DEFAULT &&
                    ((ty = !1),
                    (tS = !1),
                    e.on(I.yq.SpeakingWhileMuted, () => {
                        (ty = !0),
                            (tS = !0),
                            r.emitChange(),
                            tv.stop(),
                            tv.start(e0, () => {
                                (tS = !1), r.emitChange();
                            });
                    })),
                e.on(I.yq.DesktopSourceEnd, (t, n) => {
                    S.h.dispatch({
                        type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                        settings: { context: e.context },
                        endReason: t,
                        errorCode: n,
                    });
                }),
                e.on(I.yq.InteractionRequired, (e) => {
                    S.h.dispatch({ type: "MEDIA_ENGINE_INTERACTION_REQUIRED", required: e });
                }),
                e.on(I.yq.VideoHookInitialize, (e, t, n, r, i, s) => {
                    a?.desktopSource != null &&
                        eI.default.track(eM.HAw.VIDEOHOOK_INITIALIZED, {
                            backend: e,
                            format: t,
                            framebuffer_format: n,
                            sample_count: r,
                            success: i,
                            reinitialization: s,
                            ...(0, k.A)(a?.desktopSource),
                        });
                }),
                e.on(I.yq.NoiseCancellationError, (e) => {
                    ej.warn(`noisecancellererror event: ${e}`),
                        (0, w.QW)({ type: w.iy.NOISE_CANCELLER_ERROR, underlyingError: na(e) }),
                        (tF = !0),
                        eI.default.track(eM.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        S.h.dispatch({ type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: !0 }),
                        S.h.dispatch({ type: "AUDIO_SET_NOISE_CANCELLATION", enabled: !1 }),
                        S.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e });
                }),
                e.on(I.yq.VoiceActivityDetectorError, (e) => {
                    ej.warn(`voiceactivitydetectorerror event: ${e}`),
                        (0, w.QW)({ type: w.iy.NOISE_CANCELLER_ERROR, underlyingError: na(e) }),
                        eI.default.track(eM.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        S.h.dispatch({
                            type: "AUDIO_SET_MODE",
                            context: eF.x.DEFAULT,
                            mode: eM.TBI.VOICE_ACTIVITY,
                            options: { ...t9(eF.x.DEFAULT).modeOptions, vadUseKrisp: !1 },
                        }),
                        S.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e });
                }),
                e.on(I.yq.SdpError, (e, t, n, r) => {
                    eI.default.track(eM.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: r });
                }),
                e.on(I.yq.VideoState, (t) => {
                    S.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                }),
                e.setBitRate(eR.A.bitrate),
                e.applyVideoQualityMode(eP.A.mode),
                (0, eS.isWindows)() &&
                    tn.supports(eF.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                    tn.setAsyncVideoInputDeviceInit((0, j.v)("setupMediaEngine").enabled);
        }),
        tn.on(I.bg.DeviceChange, (e, t, n) => {
            tf.stop(),
                S.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
        }),
        tn.on(I.bg.VolumeChange, (e, t) => {
            S.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
        }),
        tn.on(I.bg.DesktopSourceEnd, (e, t) => {
            S.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
        }),
        tn.on(I.bg.AudioPermission, (e) => {
            (tK = !0), S.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
        }),
        tn.on(I.bg.VideoPermission, (e) => {
            S.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
        }),
        tn.on(I.bg.WatchdogTimeout, async () => {
            let e;
            try {
                await eT.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
            } catch (t) {
                "number" == typeof t.status && (e = t.status);
            }
            ej.warn(`Watchdog timeout, report submission status: ${e ?? 200}`),
                eI.default.track(eM.HAw.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        tn.on(I.bg.VideoInputInitialized, (e) => {
            eI.default.track(eM.HAw.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired
                    ? null
                    : Math.round(e.timeToFirstFrame * ey.A.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: eL.A.getMediaSessionId(),
                rtc_connection_id: eL.A.getRTCConnectionId(),
            });
        }),
        tn.on(I.bg.AudioInputInitialized, (e) => {
            eI.default.track(eM.HAw.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * ey.A.Millis.SECOND),
                rtc_connection_id: eL.A.getRTCConnectionId(),
            });
        }),
        tn.on(I.bg.ClipsRecordingRestartNeeded, () => {
            S.h.dispatch({ type: "CLIPS_RESTART" });
        }),
        tn.on(I.bg.ClipsInitFailure, (e, t) => {
            S.h.wait(() => {
                S.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t });
            });
        }),
        tn.on(I.bg.ClipsRecordingEnded, (e, t) => {
            s?.desktopSource?.id === e && (null != t && a?.desktopSource?.soundshareId !== t && C.c1(t), (s = null));
        }),
        tn.on(I.bg.NativeScreenSharePickerUpdate, (e, t) => {
            S.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
        }),
        tn.on(I.bg.NativeScreenSharePickerCancel, (e) => {
            S.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
        }),
        tn.on(I.bg.NativeScreenSharePickerError, (e) => {
            S.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
        }),
        tn.on(I.bg.AudioDeviceModuleError, (e, t, n) => {
            eI.default.track(eM.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
        }),
        tn.on(I.bg.VideoCodecError, (e) => {
            let t = "encode" === e.mode ? w.iy.VIDEO_ENCODE_ERROR : w.iy.VIDEO_DECODE_ERROR,
                n = { videoCodec: e.codecStandard, errorMessage: e.message };
            (0, w.QW)(
                t === w.iy.VIDEO_ENCODE_ERROR
                    ? { type: t, ...n, videoEncoder: e.implName }
                    : { type: t, ...n, videoDecoder: e.implName },
            );
        }),
        tn.on(I.bg.ConnectionStats, (e) => {
            S.h.dispatch({
                type: "MEDIA_ENGINE_CONNECTION_STATS",
                connectionStats: e.map((e) => {
                    let { stats: t, connection: n } = e;
                    return {
                        stats: t,
                        mediaEngineConnectionId: n.mediaEngineConnectionId,
                        version: e6++,
                        context: n.context,
                    };
                }),
            });
        }),
        tn.on(I.bg.VoiceQueueMetrics, (e) => {
            let t = r5(e);
            null !== t && eI.default.track(eM.HAw.VOICE_QUEUE_METRICS, t);
        }),
        tn.setOnVideoContainerResized((e, t, n) => {
            S.h.wait(() =>
                S.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
            );
        }),
        e8(),
        ri(),
        rs(),
        tn.supports(eF.O5.ASYNC_CLIPS_SOURCE_DEINIT) &&
            tn.setAsyncClipsSourceDeinit((0, H.V)("setupMediaEngine").enabled),
        nE.reset(),
        (0, ew.w)().then((e) => {
            null != e && ((tX = e.gpu_brand), (tJ = e.has_intel_hybrid_igpu));
        }),
        tn.on(I.bg.SystemMicrophoneModeChange, (e) => {
            (_ = e), tn.eachConnection(nc);
        });
}
function n_() {
    return (0, eS.isWindows)() && E().satisfies(v.A?.os.release, ek.yg);
}
function nf() {
    return (0, eS.isWindows)() && E().satisfies(v.A?.os.release, ek.fG);
}
function np() {
    return (0, eS.isMac)() && tn.supports(eF.O5.SCREEN_CAPTURE_KIT) && E().satisfies(v.A?.os.release, ek.e);
}
function nh() {
    return (
        (0, eS.isWindows)() &&
        tn.supports(eF.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        tn.supports(eF.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nm() {
    return tn.supports(eF.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
async function ng() {
    let { windowsMuteAndZeroVolumeDetectionEnabled: e } = (0, el.F)({
        location: "MediaEngineStore.fetchInputDeviceOSConfig",
    });
    if ((0, eS.isWindows)() && E().satisfies(v.A?.os.release, ek.PH) && e)
        try {
            let e = nb(tc, t9().inputDeviceId),
                t = tc[e]?.guid;
            if (null != t && "" !== t) {
                await eC.Ay.ensureModule("discord_voice");
                let [e, n] = await Promise.all([tn.getDeviceOSVolume(t), tn.getDeviceOSMuted(t)]);
                (l = e), (o = n);
            }
        } catch (e) {
            ej.warn(`Failed to get device OS volume and/or mute state: ${e}`);
        }
}
let nE = new (class {
    stateChangeTimeout;
    noVoiceTimeout = 5e3;
    voiceTimeout = 1500;
    started = !1;
    start() {
        this.started || ((this.started = !0), tn.on(I.bg.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout &&
                (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            tn.removeListener(I.bg.Silence, this.handleSilence),
            S.h.dispatch({ type: "AUDIO_INPUT_DETECTED", inputDetected: null }));
    }
    update() {
        let e = t9();
        !tR && eL.A.getState() === eM.S7L.RTC_CONNECTED && e.mode === eM.TBI.VOICE_ACTIVITY && e.silenceWarning
            ? this.start()
            : this.stop();
    }
    reset() {
        this.stop(), this.update();
    }
    handleSilence = (e) => {
        let t = !e;
        null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout);
        let n = () => {
            S.h.dispatch({ type: "AUDIO_INPUT_DETECTED", inputDetected: t }), e && (tO = !0);
        };
        this.stateChangeTimeout = setTimeout(
            async () => {
                (this.stateChangeTimeout = null), e && this.started && (await ng()), this.started && n();
            },
            t ? this.voiceTimeout : this.noVoiceTimeout,
        );
    };
})();
function nA() {
    let e = T.w.get("audio");
    null != e && (T.w.set(eH, { [eF.x.DEFAULT]: e }), T.w.remove("audio")),
        (tr = T.w.get(eH) ?? {}),
        m().each(tr, (e) => {
            m().defaultsDeep(e, te()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, eb.OH)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== eY &&
                    ((e.vadUseKrispSettingVersion = eY), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                e.vadThrehsoldMigrated ||
                    ((e.vadThrehsoldMigrated = !0), e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = eX)),
                tn.supports(eF.O5.SIDECHAIN_COMPRESSION) &&
                    e.sidechainCompressionSettingVersion < ez &&
                    ((e.sidechainCompressionSettingVersion = ez), (e.sidechainCompression = !0)),
                (0, eS.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== eK &&
                      ((e.ncUseKrispjsSettingVersion = eK), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== eW &&
                      ((e.ncUseKrispSettingVersion = eW), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
        }),
        ny();
}
function nI(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eF.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = t8(t);
    return Object.assign(r, e), !__OVERLAY__ && n && T.w.set(eH, tr), r;
}
function nT() {
    T.w.remove(eH), location.reload();
}
function ny() {
    let e = t9();
    tn.setAudioInputDevice(e.inputDeviceId),
        tn.setAudioOutputDevice(e.outputDeviceId),
        ni(),
        tn.setInputVolume(e.inputVolume),
        tn.setOutputVolume(e.outputVolume),
        tn.setAecDump(e.aecDumpEnabled),
        tn.setSidechainCompression(e.sidechainCompression),
        tn.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        tn.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing);
}
function nS() {
    ta || tn.enable().then(() => S.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nv(e) {
    return { id: eF.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
}
function nC(e, t) {
    if (0 === e.length) {
        let e = nv(t);
        return { [e.id]: e };
    }
    return m()(e)
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
    let n = e[t] ?? e[eF.dx] ?? m()(e).values().first();
    return null != n ? n.id : t;
}
function nN(e) {
    let t = tc;
    if (((tc = nC(e, eB.intl.string(eB.t["/QIjDA"]))), !m().isEqual(tc, t))) {
        let e = t9(),
            t = nb(tc, e.inputDeviceId);
        tn.setAudioInputDevice(t), tn.eachConnection(nc);
    }
}
function nR(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nO(e) {
    tn.eachConnection((t) => {
        t.context === eF.x.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function nD(e) {
    let t = td;
    if (((td = nC(e, eB.intl.string(eB.t.xlUg0v))), !m().isEqual(td, t))) {
        let e = t9(),
            n = nb(td, e.outputDeviceId);
        tn.setAudioOutputDevice(n);
        let r = nR(t),
            i = nR(td);
        r !== i && nO(i);
    }
}
function nL(e) {
    tb = e.length > 0;
    let t = t_;
    if (((t_ = nC(e, eB.intl.string(eB.t.WKWARY))), tE && !m().isEqual(t_, t))) {
        let e = void 0 !== t_[tA],
            n = tA === eF.dx && t[eF.dx]?.disabled;
        ni(e || n);
    }
}
function nw() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = em.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let r = n === eG.W.USER ? eF.x.DEFAULT : eF.x.STREAM,
            i = r === eF.x.STREAM ? eF.Cn : eF.Hz,
            a = t[n] ?? {},
            { localMutes: s, localVolumes: o } = t9(r);
        for (let [e, t] of Object.entries(a))
            null == (0, ep.tM)(r, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== i ? (o[e] = t.volume) : delete o[e],
                tn.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, r));
        if (e)
            for (let e of new Set([...Object.keys(s), ...Object.keys(o)]))
                null == a[e] &&
                    (delete s[e],
                    delete o[e],
                    tn.eachConnection((t) => {
                        t.setLocalVolume(e, i), t.setLocalMute(e, !1);
                    }, r));
        nI({ localMutes: s, localVolumes: o }, r);
    }
}
function nx(e) {
    if (null == r)
        return (
            ej.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
            { soundshareId: null, soundshareSession: "" }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : eT.A.getAudioPid(e),
            n = "";
        return null != t && (n = eT.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n };
    }
}
function nP(e, t) {
    (0, eS.isWindows)() &&
        e > 1 &&
        C.GH(e, { soundshare_session: t }).then((t) => {
            null == t ||
                M.Ay.shouldContinueWithoutElevatedProcessForPID(e) ||
                S.h.wait(() => {
                    S.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: t });
                });
        });
}
function nM(e) {
    (i = e.sessionId), (tp = !1), (tg = !1);
    let t = t9();
    if (
        (nh() && (nm() ? rP(eF.rB.AUTOMATIC) : t.automaticAudioSubsystem && rM()),
        tn.supports(eF.O5.OFFLOAD_ADM_CONTROLS))
    ) {
        let e = !1;
        (0, eS.isDesktop)()
            ? (e = (0, F.i)({ location: "handleConnectionOpen" }).enabled)
            : ((0, eS.isIOS)() || (0, eS.isAndroid)()) && (e = (0, B.Y)({ location: "handleConnectionOpen" }).enabled),
            tn.setOffloadAdmControls(e);
    }
    (0, eE.Lb)({ location: "MediaEngineStore", autoTrackExposure: !1 }) &&
        null !== t.mostRecentlyRequestedVoiceFilter &&
        (0, eS.isDesktop)() &&
        (eA.A.getLastInitAttemptMayHaveCrashed()
            ? (S.h.dispatch({ type: "AUDIO_SET_SELF_MUTE", mute: !0, context: eF.x.DEFAULT, playSoundEffect: !0 }),
              nI({ mostRecentlyRequestedVoiceFilter: null }))
            : n(342887).md()),
        nw();
}
function nk(e) {
    let { mediaEngineState: t } = e;
    (tr = t.settingsByContext),
        (tc = t.inputDevices),
        (td = t.outputDevices),
        (tQ = t.appSupported),
        (tw = t.krispModuleLoaded),
        (u = t.krispVersion),
        (to = t.goLiveContext);
}
function nU() {
    i = null;
}
function nG() {
    if ((0, eS.isWeb)()) {
        let e = et.f1.getCurrentConfig({ location: "MediaEngineStore handlePostConnectionOpen" });
        e.loadWasmModule && e.preload && r.startDavePreload();
    }
    return !1;
}
function nV(e) {
    switch (e.state) {
        case eM.S7L.CONNECTING:
            nS();
            break;
        case eM.S7L.RTC_CONNECTING:
            (tR = !1), (tO = !1), (o = void 0), (l = void 0);
            break;
        case eM.S7L.RTC_CONNECTED:
            ni();
            break;
        case eM.S7L.DISCONNECTED:
            n$(), nq();
    }
    nE.update();
}
function nF(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (tp = t.mute || t.suppress), (tg = t.deaf), tn.eachConnection(nn);
            let e = null != t.guildId && null != t.channelId && null != tV && tV !== t.channelId,
                n = !tD && null == t.channelId;
            return ni(!e && !n && tE), (tV = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== eN.default.getId() || null != eL.A.getChannelId() || ni(!1, null), e;
    }, !1);
}
function nB(e) {
    let { mute: t } = e;
    (th = t), tn.eachConnection(nn);
}
function nj(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = t9(t);
    if (t === eF.x.DEFAULT && (ec.A.requestPermission(eU.iL.AUDIO), tm)) return !1;
    (r = !i && !r) || (i = !1), n || (tT = !0), nI({ mute: r, deaf: i }, t), tn.eachConnection(nn);
}
function nH(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    nI({ mute: n }, t), r || (tT = !0), tn.eachConnection(nn);
}
function nY(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== eG.oD.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    nw(!0);
}
function nW(e) {
    let { context: t } = e;
    nI({ deaf: !t9(t).deaf }, t), tn.eachConnection(nn);
}
function nK(e) {
    let { context: t, userId: n } = e;
    if (n === eN.default.getId()) return;
    let { localMutes: r } = t9(t);
    r[n] ? delete r[n] : (r[n] = !0),
        nI({ localMutes: r }, t),
        tn.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nz(e) {
    let { context: t, userId: n, videoToggleState: r, persist: i, isAutomatic: a } = e;
    p()(!(i && a), "These are not allowed to both be true.");
    let s = r === eM.bb8.DISABLED,
        { disabledLocalVideos: o } = t9(t),
        l = o[n] ?? !1,
        u = t$.has(n),
        c = r === eM.bb8.AUTO_ENABLED || r === eM.bb8.MANUAL_ENABLED;
    ej.info(`disableVideo=${s} currentlyDisabled=${l} currentlyAutoDisabled=${u}, isVideoShown=${c}`),
        p()(!(u && !l), "If you are auto-disabled, then you are also disabled.");
    let d = s !== l,
        _ = t === eF.x.DEFAULT,
        f = a && d && _,
        h = i && d && _;
    ej.info(`changed=${d} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${f} isManualToggleByUser=${h}`);
    let { videoToggleStateMap: m } = t9(t);
    if (
        (m[n] === eM.bb8.AUTO_PROBING &&
            r === eM.bb8.AUTO_ENABLED &&
            (0, eu.A)(n, s ? eF.Al.AUTO_DISABLE : eF.Al.AUTO_ENABLE, c),
        (m[n] = r),
        nI({ videoToggleStateMap: m }, t, i),
        r === eM.bb8.AUTO_PROBING
            ? eL.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
            : eL.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
        tq ||
            (ej.info(`isAutoDisableAllowed=${tq} - disabling VideoHealthManager`),
            eL.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
        f)
    ) {
        if ((!s && !u) || (s && !tq)) return;
        (0, eu.A)(n, s ? eF.Al.AUTO_DISABLE : eF.Al.AUTO_ENABLE, c), s ? t$.add(n) : t$.delete(n);
    } else
        h &&
            (u && !s
                ? (ej.info("disallowing auto-disable for this session because of manual override by user"),
                  (tq = !1),
                  eL.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                  (0, eu.A)(n, eF.Al.MANUAL_REENABLE, c))
                : (0, eu.A)(n, s ? eF.Al.MANUAL_DISABLE : eF.Al.MANUAL_ENABLE, c));
    _ && !s && t$.delete(n),
        s ? (o[n] = !0) : delete o[n],
        nI({ disabledLocalVideos: o }, t, i),
        tn.eachConnection((e) => e.setLocalVideoDisabled(n, o[n] ?? !1), t);
}
function n$() {
    if (0 === t$.size) return;
    let e = eF.x.DEFAULT,
        { disabledLocalVideos: t } = t9(e);
    t$.forEach((n) => {
        p()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            tn.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        t$.clear(),
        nI({ disabledLocalVideos: t }, e, !1);
}
function nq() {
    let e = eF.x.DEFAULT,
        { videoToggleStateMap: t } = t9(e);
    for (let [e, n] of Object.entries(t)) n === eM.bb8.AUTO_PROBING && delete t[e];
    nI({ videoToggleStateMap: t }, e, !1);
}
function nZ(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === eN.default.getId()) return;
    let i = t === eF.x.STREAM ? eF.Cn : eF.Hz,
        { localVolumes: a } = t9(t);
    r === i ? delete a[n] : (a[n] = r), nI({ localVolumes: a }, t), tn.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function nQ(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: a } = t9(t);
    (a[n] = { left: r, right: i }), nI({ localPans: a }, t), tn.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function nX(e) {
    let { context: t, mode: n, options: r } = e;
    nI({ mode: n, modeOptions: { ...r, updatedAt: Date.now() } }, t), tn.eachConnection(ne), nE.update();
}
function nJ(e) {
    let { volume: t } = e;
    nI({ inputVolume: nt(t) }), tn.setInputVolume(t);
}
function n0(e) {
    let { volume: t } = e;
    nI({ outputVolume: t }), tn.setOutputVolume(t);
}
function n1(e) {
    let { id: t } = e;
    (t = nb(tc, t)),
        (tl = performance.now()),
        nI({ inputDeviceId: t }),
        tn.setAudioInputDevice(t),
        tn.eachConnection(nc),
        (o = void 0),
        (l = void 0);
}
function n2(e) {
    let { id: t } = e;
    nI({ outputDeviceId: (t = nb(td, t)) }), tn.setAudioOutputDevice(t);
}
function n3(e) {
    let { id: t } = e;
    nI({ videoDeviceId: (t = nb(t_, t)) }), ni();
}
function n6(e) {
    let { inputProfile: t } = e;
    nI({ activeInputProfile: t });
    let n = t9();
    tn.eachConnection((e) => {
        ne(e), nc(e);
    }),
        tn.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        nE.update(),
        ra();
}
function n4(e) {
    return ts !== e.required && ((ts = e.required), e.required || tn.interact(), !0);
}
function n5(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    nN(t), nD(n), nL(r);
}
function n7(e) {
    let { inputVolume: t, outputVolume: n } = e;
    nI({ inputVolume: nt(t), outputVolume: n });
}
function n8(e) {
    let t = t9(),
        n = tn.getAudioSubsystem(),
        i = tn.getAudioLayer(),
        a = nb(tc, t.inputDeviceId),
        s = tc[a]?.name,
        o = (0, e_.A)(t.noiseCancellation, r.getSystemMicrophoneMode(), { location: "trackVoiceProcessing" });
    eI.default.track(eM.HAw.VOICE_PROCESSING, {
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
function n9(e) {
    let t = nI({ echoCancellation: e.enabled });
    tn.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), ra(), n8(e.location);
}
function re(e) {
    rn(e.enabled);
}
function rt(e) {
    let t = nI({ sidechainCompressionStrength: e.strength });
    tn.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function rn(e) {
    let t = nI({ sidechainCompression: e });
    tn.setSidechainCompression(t.sidechainCompression);
}
function rr(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tZ.add(n) : tZ.delete(n), ri(), ra();
}
function ri() {
    let e = !tZ.has("voice_filter_preview") && !tZ.has("mic_test");
    tn.setMaybePreprocessMute(e);
}
function ra() {
    let e = t9(),
        t = tZ.size > 0,
        n = e.inputDeviceId,
        r = eO.A.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        a = eO.A.hasNoiseSuppression(n) || e.noiseSuppression,
        s = no(eO.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        o = e.noiseCancellation,
        l = null !== tM,
        u = tZ.has("voice_filter") && 1 === tZ.size;
    tn.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: a,
        automaticGainControlConfig: s,
        noiseCancellation: o,
        voiceFilters: l,
        loopbackUseAudioMode: u,
    });
}
async function rs() {
    if (!tn.supports(eF.O5.VAAPI)) return;
    let e = 4098;
    if (window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let t = await window.DiscordNative.processUtils.getSystemInfo();
    (t.electronGPUInfo?.gpuDevice ?? []).some((t) => t.vendorId === e) &&
        ((t3 = !0), (t2 = tn.supports(eF.O5.GAMESCOPE_CAPTURE)));
}
function ro(e) {
    let t = nI({ noiseSuppression: e.enabled });
    tn.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), ra(), n8(e.location);
}
function rl(e) {
    let t = nI({ automaticGainControl: e.enabled });
    tn.eachConnection((e) => nl(e, t.automaticGainControl)), ra(), n8(e.location);
}
function ru(e) {
    let t = nI({ noiseCancellation: e.enabled });
    tn.eachConnection((e) => nu(e, t.noiseCancellation)), ra(), n8(e.location);
}
function rc(e) {
    ed.A.setKrispModelOverride(e.model), (d = e.model), ra();
}
function rd(e) {
    (0, eS.isWeb)() || ((tP = e.enabled), tn.setNoiseCancellationEnableStats?.(e.enabled));
}
function r_(e) {
    nI({ silenceWarning: e.enabled }), nE.update();
}
function rf(e) {
    tn.setDebugLogging(e.enabled);
}
function rp(e) {
    let { level: t } = e;
    (c = t), ed.A.setKrispSuppressionLevel(t);
}
function rh(e) {
    nI({ videoHook: e.enabled });
}
function rm(e) {
    nI({ experimentalSoundshare2: e.enabled });
}
function rg(e) {
    let { enabled: t } = e;
    nI({ useSystemScreensharePicker: t });
}
function rE(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = nI({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r });
    tn.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function rA(e) {
    let { enabled: t } = e;
    nI({ qos: t }), tn.eachConnection((e) => e.setQoS(t));
}
function rI() {
    nT();
}
function rT(e) {
    let { inputDetected: t } = e;
    (tN = t), !tR && tN && ((tR = !0), nE.update());
}
function ry(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === tm) return !1;
    (tm = n), tn.eachConnection(nn);
}
function rS(e) {
    let { state: t, permissionType: n } = e,
        r = t === eU.hL.ACCEPTED;
    switch (n) {
        case eU.iL.AUDIO:
            (tK = !0), tn.eachConnection(nn);
            break;
        case eU.iL.CAMERA:
            !r && tE && ni(!1);
            break;
        default:
            return !1;
    }
}
function rv() {
    return tw || !1;
}
async function rC() {
    try {
        await eC.Ay.ensureModule("discord_krisp");
        let e = eC.Ay.requireModule("discord_krisp");
        (tw = !0),
            (u = e.getSdkVersion?.()),
            (c = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (tx = e), r.emitChange();
            }),
            r.emitChange();
    } catch (t) {
        ej.warn(`Failed to load Krisp module: ${t.message}`), ev.A.captureException(t);
        let e = eF.CO.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eF.CO.INITIALIZED : n;
        }
        eI.default.track(eM.HAw.VOICE_PROCESSING, { noise_canceller_error: e }), nI({ noiseCancellation: !1 });
    } finally {
        tL = !1;
    }
}
function rb() {
    return (0, eS.isWindows)() || (0, eS.isLinux)() || (0, eS.isMac)();
}
function rN() {
    !rb() || __OVERLAY__ || tL || tw
        ? (0, eS.isWeb)() && tn.supports(eF.O5.NOISE_CANCELLATION)
            ? ((tw = !0), r.emitChange())
            : (0, eS.isWeb)() && nI({ noiseCancellation: !1 })
        : ((tL = !0), rC());
}
function rR(e) {
    let { enabled: t } = e;
    eI.default.track(eM.HAw.VOICE_FILTER_PLAYBACK_TOGGLED, { active_voice_filter_id: tM ?? null, enabled: t }),
        nI({ voiceFilterPlaybackEnabled: t });
}
function rO(e) {
    let { newVoiceFilterId: t } = e;
    nI({ mostRecentlyRequestedVoiceFilter: t }), tn.eachConnection((e) => e.setVoiceFilterId(t));
}
function rD() {
    nI({ mostRecentlyRequestedVoiceFilter: null });
}
function rL(e) {
    let { voiceFilterId: t } = e;
    (tU = tM), (tG = tk), (tM = t), (tk = null === t ? null : Date.now());
}
function rw(e) {
    let t = e.bypassEnabled;
    nI({ bypassSystemInputProcessing: t }), tn.setAudioInputBypassSystemProcessing(t), n8(e.location);
}
function rx(e) {
    rP(e.subsystem);
}
function rP(e) {
    e === eF.rB.AUTOMATIC
        ? (nI({ automaticAudioSubsystem: !0 }), rM())
        : (nI({ automaticAudioSubsystem: !1 }), tn.setAudioSubsystem(e));
}
function rM() {
    tn.queueAudioSubsystem(eF.rB.EXPERIMENTAL);
}
function rk(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && ni(i, null), null != t || null == n)) {
        tD = !1;
        return;
    }
    if (tD) return;
    tD = !0;
    let a = t9();
    (a.mute || a.deaf) && (nI({ deaf: !1, mute: !1 }), tn.eachConnection(nn));
}
function rU(e) {
    let { application: t } = e;
    ti.add(t.id);
}
function rG(e) {
    let { application: t } = e;
    ti.delete(t.id);
}
function rV(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (ta = !1), tn.eachConnection(nn);
                break;
            case "video":
                ni(!1);
        }
}
function rF(e) {
    (ta = e.enabled), e.unmute && nI({ mute: !1, deaf: !1 }), tn.eachConnection(nn);
}
function rB(e) {
    let { enabled: t } = e;
    ec.A.requestPermission(eU.iL.CAMERA), ni(t);
}
function rj(e) {
    let { sourceId: t, applicationName: n, quality: i } = e;
    if (!(0, O.Ao)() || null == v.A) return !1;
    let a = null,
        o = null,
        l = eT.A.getPidFromDesktopSource(t);
    ({ soundshareId: a, soundshareSession: o } = nx(l));
    let u = { desktopSource: { id: t, sourcePid: l, soundshareId: a, soundshareSession: o }, quality: i };
    null != s &&
        (tn.setClipsSource(null),
        (0, eS.isWindows)() && null != s.desktopSource.soundshareId && C.c1(s.desktopSource.soundshareId)),
        null != a && nP(a, o),
        (s = u);
    let c = t4("MediaEngineStore clips"),
        d = t9().videoHook;
    tn.setClipsSource({
        desktopDescription: {
            id: s.desktopSource.id,
            soundshareId: s.desktopSource.soundshareId,
            useVideoHook: d,
            useGraphicsCapture: n_(),
            useCaptureDeviceForEncode: !1,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: np(),
            videoHookStaleFrameTimeoutMs: eZ,
            graphicsCaptureStaleFrameTimeoutMs: eQ,
            hdrCaptureMode: c,
        },
        quality: i,
        applicationName: n,
    });
}
function rH(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((s = null), tn.setClipsSource(null));
}
function rY(e) {
    let { settings: t } = e;
    if (t?.desktopSettings != null) {
        let e = null,
            n = null,
            { sourceId: r, sound: i } = t.desktopSettings,
            a = t.context ?? eF.x.DEFAULT,
            s = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
            o = !1 === i ? null : eT.A.getPidFromDesktopSource(r);
        eS.isPlatformEmbedded &&
            !0 === i &&
            (({ soundshareId: e, soundshareSession: n } = nx(o)), null != e && nP(e, n)),
            nr(a),
            ni(a === eF.x.STREAM && tE, {
                desktopSource: { id: r, sourcePid: o, soundshareId: e, soundshareSession: n },
                quality: { resolution: s.resolution, frameRate: s.frameRate },
            });
    } else if (t?.cameraSettings != null) {
        let e = t.context ?? eF.x.DEFAULT,
            { videoDeviceGuid: n, audioDeviceGuid: r } = t.cameraSettings,
            i = e === eF.x.STREAM && tE,
            a = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
        ni(i, {
            cameraSource: { videoDeviceGuid: n, audioDeviceGuid: r },
            quality: { resolution: a.resolution, frameRate: a.frameRate },
        });
    } else ni(tE, null);
}
function rW(e) {
    let { section: t } = e;
    return t === eM.nc_.VOICE && nS(), !1;
}
function rK() {
    return tn.eachConnection(nc), !1;
}
function rz(e) {
    let { enabled: t } = e,
        n = nI({ aecDumpEnabled: t });
    tn.setAecDump(n.aecDumpEnabled);
}
function r$(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (tr = Object.values(eF.x).reduce((e, n) => {
        let r = n,
            i = te();
        return (e[r] = m().merge(i, t[r])), e;
    }, {})),
        T.w.set(eH, tr),
        ny();
}
function rq(e) {
    let { state: t } = e,
        n = P.A.isEnabled();
    if (t === eM.g6G.BACKGROUND && tE && !n) (tC = !0), ni(!1);
    else {
        if (t !== eM.g6G.ACTIVE || !tC) return !1;
        (tC = !1), ni(!0);
    }
    return !0;
}
function rZ(e) {
    tn.eachConnection((t) => t.setBitRate(e.bitrate));
}
function rQ() {
    if ((!tE && null == a) || null != eL.A.getRTCConnectionId()) return !1;
    ni(!1, null);
}
function rX() {
    return !!tF && ((tF = !1), !0);
}
function rJ(e) {
    tn.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function r0(e) {
    let { settings: t } = e;
    tn.applyMediaFilterSettings(t).finally(() => {
        (tB = !1), r.emitChange();
    });
}
function r1() {
    tB = !0;
}
function r2() {
    tB = !1;
}
function r3(e) {
    t0 = e.enabled;
}
function r6() {
    if ((0, eS.isDesktop)() && eS.isPlatformEmbedded && !t6) {
        t6 = !0;
        let e = async () => {
            let t = await new Promise((e) => {
                eC.Ay.pollQueueMetrics((t) => {
                    e(t);
                });
            });
            t.periodMs = eF.tl;
            let n = r5(t);
            null !== n && eI.default.track(eM.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, eF.tl);
        };
        setTimeout(e, eF.tl);
    }
}
class r4 extends A.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        nd(),
            nA(),
            rN(),
            nq(),
            r6(),
            (0, eS.isWindows)() && eS.isPlatformEmbedded && ns(),
            (tQ = {
                [eF.O5.VIDEO]: tn.supports(eF.O5.VIDEO),
                [eF.O5.DESKTOP_CAPTURE]: tn.supports(eF.O5.DESKTOP_CAPTURE),
                [eF.O5.HYBRID_VIDEO]: tn.supports(eF.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eN.default, eR.A, eO.A, eD.A, N.A, x.A, eL.A, M.Ay, ef.A, em.A, ex.default, eP.A, eA.A);
    }
    supports(e) {
        return tn.supports(e);
    }
    supportsInApp(e) {
        return tQ[e] || tn.supports(e);
    }
    isSupported() {
        return tn.supported();
    }
    isNoiseSuppressionSupported() {
        return tn.supports(eF.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return rv();
    }
    isNoiseCancellationError() {
        return tF;
    }
    isAutomaticGainControlSupported() {
        return tn.supports(eF.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nm() && (tn.supports(eF.O5.LEGACY_AUDIO_SUBSYSTEM) || tn.supports(eF.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return tn.supports(eF.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === tn.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return rv();
    }
    isAecDumpSupported() {
        return tn.supports(eF.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return tn.supports(eF.O5.VIDEO) && tn.supports(eF.O5.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        return eD.A.getChannel(tV)?.type !== eM.rbe.GUILD_STAGE_VOICE && e2 && q.A.simulcastEnabled();
    }
    isVideoDecoderFallbackEnabled() {
        return tW;
    }
    getAecDump() {
        return t9().aecDumpEnabled;
    }
    getMediaEngine() {
        return tn;
    }
    getVideoComponent() {
        return tn.Video;
    }
    getCameraComponent() {
        return tn.Camera;
    }
    getKrispSuppressionLevel() {
        return c ?? 100;
    }
    getKrispEnableStats() {
        return tP;
    }
    isEnabled() {
        return ta;
    }
    isMute() {
        return this.isSelfMute() || tp;
    }
    isDeaf() {
        return this.isSelfDeaf() || tg;
    }
    hasContext(e) {
        return null != tr[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eF.x.DEFAULT;
        return e === eF.x.DEFAULT && th;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eF.x.DEFAULT;
        return (
            !this.isEnabled() ||
            t9(e).mute ||
            !ec.A.didHavePermission(eU.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eF.x.DEFAULT && tm)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tT;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tT = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eF.x.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && eO.A.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return t0;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eF.x.DEFAULT;
        return !this.isSupported() || t9(e).deaf;
    }
    isVideoEnabled() {
        return tE && tb;
    }
    isVideoAvailable() {
        return Object.values(t_).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eF.x.STREAM;
        return to === e && null != a;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eF.x.STREAM;
        return to === e && null != a && a.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eF.x.DEFAULT;
        return e !== eN.default.getId() && (t9(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return tn.supports(eF.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eF.x.DEFAULT;
        return t9(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eF.x.DEFAULT;
        return t9(t).videoToggleStateMap[e] ?? eM.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eF.x.DEFAULT;
        return t === eF.x.DEFAULT && t$.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eF.x.DEFAULT;
        return e === eF.x.DEFAULT && t$.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tB;
    }
    isNativeAudioPermissionReady() {
        return tK;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return to;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return tl;
    }
    isH264MfDecodeAvailable() {
        return tu;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eF.x.DEFAULT,
            n = t9(t).localPans[e];
        return null != n ? n : eq;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eF.x.DEFAULT,
            n = t === eF.x.STREAM ? eF.Cn : eF.Hz,
            r = t9(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return t9().inputVolume;
    }
    getOutputVolume() {
        return t9().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eF.x.DEFAULT;
        return t9(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eF.x.DEFAULT;
        return t9(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return tM;
    }
    getActiveVoiceFilterAppliedAt() {
        return tk;
    }
    getPreviousVoiceFilter() {
        return tU;
    }
    getPreviousVoiceFilterAppliedAt() {
        return tG;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return t9().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return t9().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            m().each(tr, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === eM.TBI.PUSH_TO_TALK && ti.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nb(tc, t9().inputDeviceId);
    }
    getOutputDeviceId() {
        return nb(td, t9().outputDeviceId);
    }
    getVideoDeviceId() {
        return nb(t_, t9().videoDeviceId);
    }
    getInputDevices() {
        return tc;
    }
    getOutputDevices() {
        return td;
    }
    getVideoDevices() {
        return t_;
    }
    getEchoCancellation() {
        let e = t9();
        return eO.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return tn.supports(eF.O5.SIDECHAIN_COMPRESSION) && t9().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return t9().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return t9().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tH && tH;
    }
    getLoopback() {
        return tZ.size > 0;
    }
    getLoopbackReasons() {
        return tZ;
    }
    getNoiseSuppression() {
        let e = t9();
        return eO.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = t9();
        return eO.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return t9().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return t9().noiseCancellation;
    }
    getHardwareEncoding() {
        return e2;
    }
    getEnableSilenceWarning() {
        return t9().silenceWarning;
    }
    getDebugLogging() {
        return tn.getDebugLogging();
    }
    getQoS() {
        return t9().qos;
    }
    getAttenuation() {
        return t9().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return t9().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return t9().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return nh() && t9().automaticAudioSubsystem ? eF.rB.AUTOMATIC : tn.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return tn.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return t9().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eV.my.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eF.x.DEFAULT;
        return t9(e);
    }
    getState() {
        return {
            settingsByContext: tr,
            inputDevices: tc,
            outputDevices: td,
            appSupported: tQ,
            krispModuleLoaded: tw,
            krispVersion: u,
            krispSuppressionLevel: c,
            goLiveSource: a,
            goLiveContext: to,
        };
    }
    getInputDetected() {
        return tN;
    }
    getNoInputDetectedNotice() {
        return tO;
    }
    getInputDeviceOSMuted() {
        return o;
    }
    getInputDeviceOSVolume() {
        return l;
    }
    getPacketDelay() {
        return eS.isPlatformEmbedded || this.getMode() !== eM.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        tn.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return ts;
    }
    getVideoHook() {
        return t9().videoHook;
    }
    supportsVideoHook() {
        return tn.supports(eF.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = t9().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return tn.supports(eF.O5.EXPERIMENTAL_SOUNDSHARE) && E().satisfies(v.A?.os.release, ek.$x);
    }
    supportsHookSoundshare() {
        return (0, eS.isWindows)() && tn.supports(eF.O5.SOUNDSHARE) && E().satisfies(v.A?.os.release, ek.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = t9().useSystemScreensharePicker,
            n = (0, eS.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return tn.supports(eF.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return t3;
    }
    getUseGamescopeCapture() {
        return t2;
    }
    getEverSpeakingWhileMuted() {
        return ty;
    }
    getSpeakingWhileMuted() {
        return tS;
    }
    getKrispModelOverride() {
        return d;
    }
    getKrispModels() {
        return tx;
    }
    getKrispVadActivationThreshold() {
        return t9().modeOptions.vadKrispActivationThreshold ?? e$;
    }
    hasActiveCallKitCall() {
        return t1;
    }
    setHasActiveCallKitCall(e) {
        t1 = e;
    }
    supportsScreenSoundshare() {
        return (0, eS.isMac)()
            ? tn.supports(eF.O5.SOUNDSHARE) && E().satisfies(v.A?.os.release, ek.P$) && np()
            : (0, eS.isWindows)()
              ? tn.supports(eF.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, eS.isLinux)() && tn.supports(eF.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        return (0, eS.isWindows)()
            ? this.getInputDevices()[this.getInputDeviceId()]?.effects?.find((e) => e === e3)
            : (0, eS.isMac)() || (0, eS.isIOS)()
              ? _
              : void 0;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eF.x.DEFAULT,
            t = this.supports(eF.O5.VIDEO)
                ? [{ rid: "100", type: e === eF.x.DEFAULT ? eF.mI.VIDEO : eF.mI.SCREEN, quality: eF.Y4 }]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === eF.x.DEFAULT || this.goLiveSimulcastEnabled()) &&
                t.push({ rid: "50", type: e === eF.x.DEFAULT ? eF.mI.VIDEO : eF.mI.SCREEN, quality: eF.Cl }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: !1 };
        return (
            (0, eS.isWeb)() &&
                (e.fetchDave = et.f1.getCurrentConfig({
                    location: "MediaEngineStore fetchAsyncResources",
                }).loadWasmModule),
            tn.fetchAsyncResources(e)
        );
    }
    startDavePreload() {
        if (!tj && ((tj = !0), (0, eS.isWeb)())) {
            let e = { fetchDave: !0 };
            tn.fetchAsyncResources(e).catch((e) => {
                ej.warn("DAVE preload failed:", e), ev.A.captureException(e);
            });
        }
    }
    getSupportedSecureFramesProtocolVersion() {
        if ((0, eS.isWeb)()) {
            let { useWasmModule: e } = et.f1.getCurrentConfig({
                location: "MediaEngineStore getSupportedSecureFramesProtocolVersion",
            });
            if (!e) return 0;
        }
        let e = tn.getSupportedSecureFramesProtocolVersion();
        114 === e && (e = 1);
        let t = et.ex.getCurrentConfig({ location: "MediaEngineStore" }),
            n = et.a.getConfig({ location: "MediaEngineStore" });
        return (t.canSupportDaveProtocol || (n.allowOptIn && ef.A.getPersistentCodesEnabled())) &&
            e >= t.protocolVersionFloor
            ? e
            : 0;
    }
    hasClipsSource() {
        return null != s;
    }
    getGpuBrand() {
        return tX;
    }
}
function r5(e) {
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
let r7 = (r = new r4(S.h, {
    VOICE_CHANNEL_SELECT: rk,
    VOICE_STATE_UPDATES: nF,
    CONNECTION_OPEN: nM,
    CONNECTION_CLOSED: nU,
    POST_CONNECTION_OPEN: nG,
    RTC_CONNECTION_STATE: nV,
    AUDIO_SET_TEMPORARY_SELF_MUTE: nB,
    AUDIO_TOGGLE_SELF_MUTE: nj,
    AUDIO_SET_SELF_MUTE: nH,
    AUDIO_TOGGLE_SELF_DEAF: nW,
    AUDIO_TOGGLE_LOCAL_MUTE: nK,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: nz,
    AUDIO_SET_LOCAL_VOLUME: nZ,
    AUDIO_SET_LOCAL_PAN: nQ,
    AUDIO_SET_MODE: nX,
    AUDIO_SET_INPUT_VOLUME: nJ,
    AUDIO_SET_OUTPUT_VOLUME: n0,
    AUDIO_SET_INPUT_DEVICE: n1,
    AUDIO_SET_OUTPUT_DEVICE: n2,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: n6,
    AUDIO_SET_ECHO_CANCELLATION: n9,
    AUDIO_SET_SIDECHAIN_COMPRESSION: re,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: rt,
    AUDIO_SET_LOOPBACK: rr,
    AUDIO_SET_NOISE_SUPPRESSION: ro,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: rl,
    AUDIO_SET_NOISE_CANCELLATION: ru,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: rc,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: r_,
    AUDIO_SET_DEBUG_LOGGING: rf,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: rp,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: rd,
    MEDIA_ENGINE_SET_VIDEO_HOOK: rh,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: rm,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: rg,
    AUDIO_SET_ATTENUATION: rE,
    AUDIO_SET_QOS: rA,
    MEDIA_ENGINE_DEVICES: n5,
    AUDIO_VOLUME_CHANGE: n7,
    AUDIO_RESET: rI,
    AUDIO_INPUT_DETECTED: rT,
    AUDIO_SET_SUBSYSTEM: rx,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rw,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rF,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rB,
    MEDIA_ENGINE_PERMISSION: rV,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rY,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: n3,
    MEDIA_ENGINE_INTERACTION_REQUIRED: n4,
    USER_SETTINGS_MODAL_INIT: rW,
    USER_SETTINGS_MODAL_SET_SECTION: rW,
    CERTIFIED_DEVICES_SET: rK,
    RPC_APP_CONNECTED: rU,
    RPC_APP_DISCONNECTED: rG,
    OVERLAY_INITIALIZE: nk,
    APP_STATE_UPDATE: rq,
    SET_CHANNEL_BITRATE: rZ,
    SET_VAD_PERMISSION: ry,
    SET_NATIVE_PERMISSION: rS,
    SET_CHANNEL_VIDEO_QUALITY_MODE: rJ,
    MEDIA_ENGINE_SET_AEC_DUMP: rz,
    MEDIA_ENGINE_RESET_SETTINGS: r$,
    CHANNEL_DELETE: rQ,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rX,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: r0,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: r1,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: r2,
    USER_SETTINGS_PROTO_UPDATE: nY,
    CLIPS_INIT: rj,
    CLIPS_SETTINGS_UPDATE: rH,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: r3,
    VOICE_FILTER_REQUEST_SWITCH: rO,
    VOICE_FILTER_LOOPBACK_TOGGLE: rR,
    VOICE_FILTER_APPLIED: rL,
    VOICE_FILTER_DOWNLOAD_FAILED: rD,
    VOICE_FILTER_APPLY_FAILED: rD,
}));
