"use strict";
let r, i, a, s, o, l, u, c, d, _;
n.d(t, { A: () => r5 }), n(321073), n(790599);
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
    eg = n(996744),
    eE = n(28075),
    eA = n(954571),
    eI = n(353835),
    eT = n(927813),
    ey = n(723702),
    eS = n(728458),
    ev = n(837921),
    eC = n(350535),
    eb = n(961350),
    eN = n(131319),
    eR = n(347481),
    eO = n(734057),
    eD = n(383501),
    eL = n(851581),
    ew = n(287809),
    ex = n(117549),
    eP = n(652215),
    eM = n(502075),
    ek = n(765682),
    eU = n(355097),
    eG = n(509381),
    eV = n(731854),
    eF = n(985018);
let eB = new D.A("MediaEngineStore"),
    ej = "MediaEngineStore",
    eH = 4,
    eY = 1,
    eW = 1,
    eK = 1,
    ez = 0.5,
    e$ = { left: 1, right: 1 },
    eq = 500,
    eZ = 5 * eT.A.Millis.SECOND,
    eQ = -60,
    eX = 100,
    eJ = 2 * eT.A.Millis.SECOND,
    e0 = 30 * eT.A.Millis.SECOND,
    e1 = !0,
    e2 = "deep_noise_suppression",
    e3 = 0,
    e6 = null;
function e4() {
    if (!(0, ey.isIOS)() || null == e6) return !1;
    let e = e6();
    if (null == e || !e.startsWith("ARM64_")) return !1;
    let t = e.substring(6);
    return ("T" === t[0] || "S" === t[0]) && parseInt(t.substring(1), 10) >= 8122;
}
let e5 = null;
async function e7() {
    if (!(0, ey.isMac)() || v.A?.os.arch !== "arm64" || v.A?.processUtils?.getSystemInfo == null) {
        e5 = !1;
        return;
    }
    let e = await v.A.processUtils.getSystemInfo(),
        t = (e.cpus?.[0]?.model ?? "").match(/Apple M(\d+)/);
    if (null == t) {
        e5 = !0;
        return;
    }
    e5 = parseInt(t[1], 10) >= 3;
}
function e8() {
    return !0 === e5;
}
function e9() {
    return {
        mode: eP.TBI.VOICE_ACTIVITY,
        modeOptions: {
            threshold: eQ,
            autoThreshold: ey.isPlatformEmbedded || __OVERLAY__,
            vadUseKrisp: !0,
            vadKrispActivationThreshold: ez,
            vadLeading: 5,
            vadTrailing: 25,
            delay: 20,
            shortcut: [],
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
        videoHook: tt.supports(eV.O5.VIDEO_HOOK),
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
let te = {
        [eG.my.CUSTOM]: {},
        [eG.my.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [eG.my.STUDIO]: {
            mode: eP.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    tt = (0, I.hB)((0, I.WI)());
eB.enableNativeLogger(!0);
let tn = {},
    tr = new Set([eV.x.DEFAULT]),
    ti = tt.supports(eV.O5.AUTO_ENABLE),
    ta = !1,
    ts = eV.x.STREAM,
    to = performance.now(),
    tl = null,
    tu = { [eV.dx]: nS("No Input Devices") },
    tc = { [eV.dx]: nS("No Output Devices") },
    td = { [eV.dx]: nS("No Video Devices") },
    t_ = new y.Ep(),
    tf = !1,
    tp = !1,
    th = !1,
    tm = !1,
    tg = !1,
    tE = eV.qe,
    tA = eV.qe,
    tI = !1,
    tT = !1,
    ty = !1,
    tS = new y.Ep(),
    tv = !1,
    tC = !1,
    tb = null,
    tN = !1,
    tR = !1,
    tO = !1,
    tD = !1,
    tL = !1,
    tw = [],
    tx = !1,
    tP = null,
    tM = null,
    tk = null,
    tU = null,
    tG = null,
    tV = !1,
    tF = !1,
    tB = !1,
    tj = null,
    tH = null,
    tY = !1,
    tW = !1;
ec.A.hasPermission(ek.iL.AUDIO, { showAuthorizationError: !1 }),
    ec.A.hasPermission(ek.iL.CAMERA, { showAuthorizationError: !1 });
let tK = !1,
    tz = new Set(),
    t$ = tK,
    tq = new Set(),
    tZ = {},
    tQ = null,
    tX = null,
    tJ = !0,
    t0 = !1,
    t1 = !1,
    t2 = !1,
    t3 = !1;
function t6(e) {
    return (0, $.p)({ location: e }).hdrCaptureMode;
}
async function t4() {
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
function t5() {
    return null != tH ? tH : "u" > typeof window ? (tH = t4().then((e) => ((tj = e), e))) : Promise.resolve(!1);
}
function t7() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT,
        t = tn[e];
    return null == t && ((t = e9()), (tn[e] = t)), t;
}
function t8() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT,
        t = t7(e),
        n = te[t.activeInputProfile ?? eG.my.CUSTOM],
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
function t9(e) {
    let t = t8(e.context),
        n = t.mode;
    e.context === eV.x.DEFAULT &&
        ((0, eh.H)({ location: "setInputMode", autoTrackExposure: !1 }).enableLatching &&
            n === eP.TBI.PUSH_TO_TALK &&
            t.modeOptions.pttLatchingEnabled &&
            (n = eP.TBI.VOICE_ACTIVITY),
        (0, ee.N)(!1, !1, !1)),
        e.setInputMode(n, {
            vadThreshold: t.modeOptions.threshold,
            vadAutoThreshold: t.modeOptions.autoThreshold,
            vadUseKrisp: t.modeOptions.vadUseKrisp && rS(),
            vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? ez,
            vadLeading: t.modeOptions.vadLeading,
            vadTrailing: t.modeOptions.vadTrailing,
            vadDuringPreProcess: t.modeOptions.vadDuringPreProcess ?? !1,
            pttReleaseDelay: Math.round(t.modeOptions.delay),
        });
}
function ne(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eV.Hz;
    return m().clamp(e, 0, t);
}
function nt(e) {
    let t = t8(e.context),
        n = !ti || t.mute || t.deaf;
    e.context === eV.x.DEFAULT
        ? (n = n || tf || tp || th || !ec.A.didHavePermission(ek.iL.AUDIO))
        : e.context === eV.x.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eV.x.DEFAULT && b.A.updateNativeMute();
}
function nn(e) {
    e !== ts && (null != a && tt.setGoLiveSource(null, ts), (ts = e));
}
function nr() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tg,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        n = a;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, ey.isWindows)() && C.c1(n.desktopSource.soundshareId),
            tt.setGoLiveSource(null, ts)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            tt.setGoLiveSource(null, ts),
        tg || e)
    ) {
        let t = t8().videoDeviceId;
        tg && t === eV.dx && tA === eV.dx && tE !== eV.qe ? (t = tE) : (tA = t),
            (tE = (tg = e) ? nC(td, t) : eV.qe),
            tt.setVideoInputDevice(tE);
    }
    if (((a = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = t6("MediaEngineStore go live"),
                i = t8().videoHook,
                a = nd(),
                s = a ? (n_() ? eM.zl : eM.eg) : 0,
                o = (0, ey.isWindows)() && (0, er.b)("updateVideo").enabled,
                l = !1;
            (0, ey.isWindows)() && tX && (l = ea.q.getConfig({ location: "updateVideo" }).enabled),
                tt.setGoLiveSource(
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
                            allowScreenCaptureKit: nf(),
                            videoHookStaleFrameTimeoutMs: eq,
                            graphicsCaptureStaleFrameTimeoutMs: eZ,
                            hdrCaptureMode: n,
                            enableGlobalFramePoolLock: (0, z.H)({ location: "updateVideo" }).enabled,
                            useGraphicsCaptureDirtyRegions: l,
                        },
                        quality: e,
                    },
                    ts,
                );
        }
        null != t.cameraSource &&
            tt.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: t.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: t.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                ts,
            );
    }
}
function ni(e) {
    switch (e) {
        case eV.CO.CPU_OVERUSE:
            return w.B6.NoiseCancellerCpuOveruse;
        case eV.CO.FAILED:
            return w.B6.NoiseCancellerFailed;
        case eV.CO.VAD_CPU_OVERUSE:
            return w.B6.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function na() {
    null === tl &&
        tt
            .getCodecSurvey()
            .then((e) => {
                try {
                    let t = JSON.parse(e);
                    if (null == t || null == t.available_video_decoders) throw Error("decoder survey is not available");
                    tl = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                } catch (e) {
                    eB.error("Failed to parse codec survey", e), (tl = !1);
                }
            })
            .catch((e) => {
                eB.error("Failed to get codec survey", e), (tl = !1);
            })
            .finally(() => {
                S.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
            });
}
function ns(e) {
    let t = (0, U.F)({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function no(e, t) {
    e.setAutomaticGainControl(ns(t));
}
function nl(e, t) {
    let n = (0, e_.A)(t, r.getSystemMicrophoneMode(), { location: "setNoiseCancellation" });
    n !== t && eB.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: i } = (0, U.F)({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(i);
    let { noiseCancellationAfterProcessing: a, vadAfterWebrtc: s } = (0, X.$)({ location: "setNoiseCancellation" });
    e.setNoiseCancellationAfterProcessing(a), e.setVADAfterWebrtc(s);
}
function nu(e) {
    let t = t8(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eR.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eR.A.hasNoiseSuppression(n) || t.noiseSuppression),
        no(e, eR.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        nl(e, t.noiseCancellation),
        e.setVoiceFilterId(tP),
        (0, ey.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function nc() {
    t_.start(e0, () => {
        eB.error("Device enumeration timed out"), eA.default.track(eP.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
    }),
        tt.on(I.bg.Connection, (e) => {
            t9(e), nt(e), nu(e);
            let t = t8();
            e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
                e.setQoS(t.qos);
            let n = (0, Q.K)({ location: "setupMediaEngine" }).treatment;
            (tY = n === Q.c.NoSoftwareDecodeWithFallback),
                n === Q.c.NoSoftwareDecode || n === Q.c.NoSoftwareDecodeWithFallback
                    ? (e.setExperimentFlag(eV.fd.H265_HARDWARE_ONLY, !0),
                      (0, ey.isWindows)()
                          ? t5().then((t) => {
                                e.setExperimentFlag(eV.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                            })
                          : (0, ey.isMac)() && e.setExperimentFlag(eV.fd.H265_HARDWARE_DECODE_AVAILABLE, !0))
                    : n === Q.c.Disabled &&
                      (e.setExperimentFlag(eV.fd.H265_HARDWARE_ONLY, !0),
                      e.setExperimentFlag(eV.fd.H265_HARDWARE_DECODE_AVAILABLE, !1)),
                (0, ey.isWindows)() &&
                    (0, Z.r)({ location: "setupMediaEngine" }).enabled &&
                    e.setExperimentFlag(eV.fd.USE_H264_MF_DECODER, !0);
            let i = eD.A.getGuildId(),
                {
                    muteBeforeProcessing: s,
                    pttBeforeProcessing: o,
                    skipEncode: l,
                } = (null != i ? W.A : Y.A).getCurrentConfig(
                    { location: "setupMediaEngine", guildId: i ?? void 0 },
                    { autoTrackExposure: !0 },
                );
            s && e.setExperimentFlag(eV.fd.MUTE_BEFORE_PROCESSING, !0),
                o && e.setExperimentFlag(eV.fd.PTT_BEFORE_PROCESSING, !0),
                l && e.setExperimentFlag(eV.fd.SKIP_ENCODE, !0),
                (0, J.J)({ location: "setupMediaEngine" }).enabled &&
                    e.setExperimentFlag(eV.fd.LOW_LATENCY_RATE_CONTROL, !0);
            let u = !1,
                c = !0;
            if (
                (e.setExperimentFlag(eV.fd.RESET_DECODER_ON_ERRORS, !0),
                u && e.setExperimentFlag(eV.fd.SOFTWARE_FALLBACK_ON_ERRORS, !0),
                c && e.setExperimentFlag(eV.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0),
                e.context === eV.x.STREAM)
            ) {
                let t = nN(tc);
                e.setSoundshareDiscardRearChannels(t);
                let { simulcastEnabled: n, lqStreamBitrate: r } = q.A.getConfig();
                e.configureGoLiveSimulcast(n, r);
            }
            if ((0, ey.isWindows)())
                e.setExperimentFlag(eV.fd.SIGNAL_AV1, !0), e.setExperimentFlag(eV.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            else if ((0, ey.isMac)()) {
                if ((e.setExperimentFlag(eV.fd.SIGNAL_AV1_DECODE, !0), e8())) {
                    let { enabled: t } = (0, V.t)("MediaEngineStore");
                    t && e.setExperimentFlag(eV.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                }
            } else if ((0, ey.isLinux)()) e.setExperimentFlag(eV.fd.SIGNAL_AV1_DECODE, !0);
            else if ((0, ey.isIOS)() && e4()) {
                let { enabled: t } = (0, G.$)("MediaEngineStore");
                t &&
                    (e.setExperimentFlag(eV.fd.SIGNAL_AV1_DECODE, !0),
                    e.setExperimentFlag(eV.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
            }
            if ((0, ey.isWeb)()) {
                let { enabled: t } = (0, K.O)("MediaEngineStore");
                e.setExperimentFlag(eV.fd.BROWSER_HEVC, t);
            }
            if (
                ((0, ey.isWindows)() &&
                    tQ?.startsWith("AMD") &&
                    (0, es.F)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eV.fd.WMF_GPU_ENCODE, !0),
                (0, ey.isWindows)() &&
                    tQ?.startsWith("Intel") &&
                    (0, eo.J)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eV.fd.WMF_GPU_ENCODE, !0),
                (0, ey.isWindows)() &&
                    tQ?.startsWith("Qualcomm") &&
                    (0, es.F)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eV.fd.WMF_GPU_ENCODE, !0),
                tt.setHasFullbandPerformance((0, L.A)()),
                e.setRemoteAudioHistory(1e3),
                (0, R.A)(r))
            ) {
                let { enableViewerClipping: t } = ei.A.getCurrentConfig(
                    { location: "f627ab_15" },
                    { autoTrackExposure: !1 },
                );
                e.setViewerSideClip(t), e.setClipsKeyFrameInterval(eV.X1);
            }
            for (let n of ((t = t8(e.context)), e.setPostponeDecodeLevel(eX), Object.keys(t.localMutes)))
                n !== eb.default.getId() && e.setLocalMute(n, t.localMutes[n]);
            for (let n of Object.keys(t.localVolumes))
                n !== eb.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
            for (let n of Object.keys(t.localPans)) {
                let r = t.localPans[n];
                e.setLocalPan(n, r.left, r.right);
            }
            for (let n of Object.keys(t.disabledLocalVideos)) e.setLocalVideoDisabled(n, t.disabledLocalVideos[n]);
            e.on(I.yq.Speaking, (t, n, r, i) => {
                S.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: i });
            }),
                e.context === eV.x.DEFAULT &&
                    ((tT = !1),
                    (ty = !1),
                    e.on(I.yq.SpeakingWhileMuted, () => {
                        (tT = !0),
                            (ty = !0),
                            r.emitChange(),
                            tS.stop(),
                            tS.start(eJ, () => {
                                (ty = !1), r.emitChange();
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
                        eA.default.track(eP.HAw.VIDEOHOOK_INITIALIZED, {
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
                    eB.warn(`noisecancellererror event: ${e}`),
                        (0, w.QW)({ type: w.iy.NOISE_CANCELLER_ERROR, underlyingError: ni(e) }),
                        (tV = !0),
                        eA.default.track(eP.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        S.h.dispatch({ type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: !0 }),
                        S.h.dispatch({ type: "AUDIO_SET_NOISE_CANCELLATION", enabled: !1 }),
                        S.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e });
                }),
                e.on(I.yq.VoiceActivityDetectorError, (e) => {
                    eB.warn(`voiceactivitydetectorerror event: ${e}`),
                        (0, w.QW)({ type: w.iy.NOISE_CANCELLER_ERROR, underlyingError: ni(e) }),
                        eA.default.track(eP.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        S.h.dispatch({
                            type: "AUDIO_SET_MODE",
                            context: eV.x.DEFAULT,
                            mode: eP.TBI.VOICE_ACTIVITY,
                            options: { ...t8(eV.x.DEFAULT).modeOptions, vadUseKrisp: !1 },
                        }),
                        S.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e });
                }),
                e.on(I.yq.SdpError, (e, t, n, r) => {
                    eA.default.track(eP.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: r });
                }),
                e.on(I.yq.VideoState, (t) => {
                    S.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                }),
                e.setBitRate(eN.A.bitrate),
                e.applyVideoQualityMode(ex.A.mode),
                (0, ey.isWindows)() &&
                    tt.supports(eV.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                    tt.setAsyncVideoInputDeviceInit((0, j.v)("setupMediaEngine").enabled);
        }),
        tt.on(I.bg.DeviceChange, (e, t, n) => {
            t_.stop(),
                S.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
        }),
        tt.on(I.bg.VolumeChange, (e, t) => {
            S.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
        }),
        tt.on(I.bg.DesktopSourceEnd, (e, t) => {
            S.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
        }),
        tt.on(I.bg.AudioPermission, (e) => {
            (tW = !0), S.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
        }),
        tt.on(I.bg.VideoPermission, (e) => {
            S.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
        }),
        tt.on(I.bg.WatchdogTimeout, async () => {
            let e;
            try {
                await eI.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
            } catch (t) {
                "number" == typeof t.status && (e = t.status);
            }
            eB.warn(`Watchdog timeout, report submission status: ${e ?? 200}`),
                eA.default.track(eP.HAw.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        tt.on(I.bg.VideoInputInitialized, (e) => {
            eA.default.track(eP.HAw.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired
                    ? null
                    : Math.round(e.timeToFirstFrame * eT.A.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: eD.A.getMediaSessionId(),
                rtc_connection_id: eD.A.getRTCConnectionId(),
            });
        }),
        tt.on(I.bg.AudioInputInitialized, (e) => {
            eA.default.track(eP.HAw.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * eT.A.Millis.SECOND),
                rtc_connection_id: eD.A.getRTCConnectionId(),
            });
        }),
        tt.on(I.bg.ClipsRecordingRestartNeeded, () => {
            S.h.dispatch({ type: "CLIPS_RESTART" });
        }),
        tt.on(I.bg.ClipsInitFailure, (e, t) => {
            S.h.wait(() => {
                S.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t });
            });
        }),
        tt.on(I.bg.ClipsRecordingEnded, (e, t) => {
            s?.desktopSource?.id === e && (null != t && a?.desktopSource?.soundshareId !== t && C.c1(t), (s = null));
        }),
        tt.on(I.bg.NativeScreenSharePickerUpdate, (e, t) => {
            S.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
        }),
        tt.on(I.bg.NativeScreenSharePickerCancel, (e) => {
            S.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
        }),
        tt.on(I.bg.NativeScreenSharePickerError, (e) => {
            S.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
        }),
        tt.on(I.bg.AudioDeviceModuleError, (e, t, n) => {
            eA.default.track(eP.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
        }),
        tt.on(I.bg.VideoCodecError, (e) => {
            let t = "encode" === e.mode ? w.iy.VIDEO_ENCODE_ERROR : w.iy.VIDEO_DECODE_ERROR,
                n = { videoCodec: e.codecStandard, errorMessage: e.message };
            (0, w.QW)(
                t === w.iy.VIDEO_ENCODE_ERROR
                    ? { type: t, ...n, videoEncoder: e.implName }
                    : { type: t, ...n, videoDecoder: e.implName },
            );
        }),
        tt.on(I.bg.ConnectionStats, (e) => {
            S.h.dispatch({
                type: "MEDIA_ENGINE_CONNECTION_STATS",
                connectionStats: e.map((e) => {
                    let { stats: t, connection: n } = e;
                    return {
                        stats: t,
                        mediaEngineConnectionId: n.mediaEngineConnectionId,
                        version: e3++,
                        context: n.context,
                    };
                }),
            });
        }),
        tt.on(I.bg.VoiceQueueMetrics, (e) => {
            let t = r4(e);
            null !== t && eA.default.track(eP.HAw.VOICE_QUEUE_METRICS, t);
        }),
        tt.setOnVideoContainerResized((e, t, n) => {
            S.h.wait(() =>
                S.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
            );
        }),
        e7(),
        rr(),
        ra(),
        tt.supports(eV.O5.ASYNC_CLIPS_SOURCE_DEINIT) &&
            tt.setAsyncClipsSourceDeinit((0, H.V)("setupMediaEngine").enabled),
        ng.reset(),
        (0, eL.w)().then((e) => {
            null != e && ((tQ = e.gpu_brand), (tX = e.has_intel_hybrid_igpu));
        }),
        tt.on(I.bg.SystemMicrophoneModeChange, (e) => {
            (_ = e), tt.eachConnection(nu);
        });
}
function nd() {
    return (0, ey.isWindows)() && E().satisfies(v.A?.os.release, eM.yg);
}
function n_() {
    return (0, ey.isWindows)() && E().satisfies(v.A?.os.release, eM.fG);
}
function nf() {
    return (0, ey.isMac)() && tt.supports(eV.O5.SCREEN_CAPTURE_KIT) && E().satisfies(v.A?.os.release, eM.e);
}
function np() {
    return (
        (0, ey.isWindows)() &&
        tt.supports(eV.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        tt.supports(eV.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nh() {
    return tt.supports(eV.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
async function nm() {
    let { windowsMuteAndZeroVolumeDetectionEnabled: e } = (0, el.F)({
        location: "MediaEngineStore.fetchInputDeviceOSConfig",
    });
    if ((0, ey.isWindows)() && E().satisfies(v.A?.os.release, eM.PH) && e)
        try {
            let e = nC(tu, t8().inputDeviceId),
                t = tu[e]?.guid;
            if (null != t && "" !== t) {
                await ev.Ay.ensureModule("discord_voice");
                let [e, n] = await Promise.all([tt.getDeviceOSVolume(t), tt.getDeviceOSMuted(t)]);
                (l = e), (o = n);
            }
        } catch (e) {
            eB.warn(`Failed to get device OS volume and/or mute state: ${e}`);
        }
}
let ng = new (class {
    stateChangeTimeout;
    noVoiceTimeout = 5e3;
    voiceTimeout = 1500;
    started = !1;
    start() {
        this.started || ((this.started = !0), tt.on(I.bg.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout &&
                (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            tt.removeListener(I.bg.Silence, this.handleSilence),
            S.h.dispatch({ type: "AUDIO_INPUT_DETECTED", inputDetected: null }));
    }
    update() {
        let e = t8();
        !tN && eD.A.getState() === eP.S7L.RTC_CONNECTED && e.mode === eP.TBI.VOICE_ACTIVITY && e.silenceWarning
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
            S.h.dispatch({ type: "AUDIO_INPUT_DETECTED", inputDetected: t }), e && (tR = !0);
        };
        this.stateChangeTimeout = setTimeout(
            async () => {
                (this.stateChangeTimeout = null), e && this.started && (await nm()), this.started && n();
            },
            t ? this.voiceTimeout : this.noVoiceTimeout,
        );
    };
})();
function nE() {
    let e = T.w.get("audio");
    null != e && (T.w.set(ej, { [eV.x.DEFAULT]: e }), T.w.remove("audio")),
        (tn = T.w.get(ej) ?? {}),
        m().each(tn, (e) => {
            m().defaultsDeep(e, e9()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, eC.OH)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== eH &&
                    ((e.vadUseKrispSettingVersion = eH), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                e.vadThrehsoldMigrated ||
                    ((e.vadThrehsoldMigrated = !0), e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = eQ)),
                tt.supports(eV.O5.SIDECHAIN_COMPRESSION) &&
                    e.sidechainCompressionSettingVersion < eK &&
                    ((e.sidechainCompressionSettingVersion = eK), (e.sidechainCompression = !0)),
                (0, ey.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== eW &&
                      ((e.ncUseKrispjsSettingVersion = eW), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== eY &&
                      ((e.ncUseKrispSettingVersion = eY), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
        }),
        nT();
}
function nA(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eV.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = t7(t);
    return Object.assign(r, e), !__OVERLAY__ && n && T.w.set(ej, tn), r;
}
function nI() {
    T.w.remove(ej), location.reload();
}
function nT() {
    let e = t8();
    tt.setAudioInputDevice(e.inputDeviceId),
        tt.setAudioOutputDevice(e.outputDeviceId),
        nr(),
        tt.setInputVolume(e.inputVolume),
        tt.setOutputVolume(e.outputVolume),
        tt.setAecDump(e.aecDumpEnabled),
        tt.setSidechainCompression(e.sidechainCompression),
        tt.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        tt.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing);
}
function ny() {
    ti || tt.enable().then(() => S.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nS(e) {
    return { id: eV.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
}
function nv(e, t) {
    if (0 === e.length) {
        let e = nS(t);
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
function nC(e, t) {
    let n = e[t] ?? e[eV.dx] ?? m()(e).values().first();
    return null != n ? n.id : t;
}
function nb(e) {
    let t = tu;
    if (((tu = nv(e, eF.intl.string(eF.t["/QIjDA"]))), !m().isEqual(tu, t))) {
        let e = t8(),
            t = nC(tu, e.inputDeviceId);
        tt.setAudioInputDevice(t), tt.eachConnection(nu);
    }
}
function nN(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nR(e) {
    tt.eachConnection((t) => {
        t.context === eV.x.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function nO(e) {
    let t = tc;
    if (((tc = nv(e, eF.intl.string(eF.t.xlUg0v))), !m().isEqual(tc, t))) {
        let e = t8(),
            n = nC(tc, e.outputDeviceId);
        tt.setAudioOutputDevice(n);
        let r = nN(t),
            i = nN(tc);
        r !== i && nR(i);
    }
}
function nD(e) {
    tC = e.length > 0;
    let t = td;
    if (((td = nv(e, eF.intl.string(eF.t.WKWARY))), tg && !m().isEqual(td, t))) {
        let e = void 0 !== td[tE],
            n = tE === eV.dx && t[eV.dx]?.disabled;
        nr(e || n);
    }
}
function nL() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = em.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let r = n === eU.W.USER ? eV.x.DEFAULT : eV.x.STREAM,
            i = r === eV.x.STREAM ? eV.Cn : eV.Hz,
            a = t[n] ?? {},
            { localMutes: s, localVolumes: o } = t8(r);
        for (let [e, t] of Object.entries(a))
            null == (0, ep.tM)(r, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== i ? (o[e] = t.volume) : delete o[e],
                tt.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, r));
        if (e)
            for (let e of new Set([...Object.keys(s), ...Object.keys(o)]))
                null == a[e] &&
                    (delete s[e],
                    delete o[e],
                    tt.eachConnection((t) => {
                        t.setLocalVolume(e, i), t.setLocalMute(e, !1);
                    }, r));
        nA({ localMutes: s, localVolumes: o }, r);
    }
}
function nw(e) {
    if (null == r)
        return (
            eB.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
            { soundshareId: null, soundshareSession: "" }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : eI.A.getAudioPid(e),
            n = "";
        return null != t && (n = eI.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n };
    }
}
function nx(e, t) {
    (0, ey.isWindows)() &&
        e > 1 &&
        C.GH(e, { soundshare_session: t }).then((t) => {
            null == t ||
                M.Ay.shouldContinueWithoutElevatedProcessForPID(e) ||
                S.h.wait(() => {
                    S.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: t });
                });
        });
}
function nP(e) {
    (i = e.sessionId), (tf = !1), (tm = !1);
    let t = t8();
    if (
        (np() && (nh() ? rx(eV.rB.AUTOMATIC) : t.automaticAudioSubsystem && rP()),
        tt.supports(eV.O5.OFFLOAD_ADM_CONTROLS))
    ) {
        let e = !1;
        (0, ey.isDesktop)()
            ? (e = (0, F.i)({ location: "handleConnectionOpen" }).enabled)
            : ((0, ey.isIOS)() || (0, ey.isAndroid)()) && (e = (0, B.Y)({ location: "handleConnectionOpen" }).enabled),
            tt.setOffloadAdmControls(e);
    }
    (0, eg.Lb)({ location: "MediaEngineStore", autoTrackExposure: !1 }) &&
        null !== t.mostRecentlyRequestedVoiceFilter &&
        (0, ey.isDesktop)() &&
        (eE.A.getLastInitAttemptMayHaveCrashed()
            ? (S.h.dispatch({ type: "AUDIO_SET_SELF_MUTE", mute: !0, context: eV.x.DEFAULT, playSoundEffect: !0 }),
              nA({ mostRecentlyRequestedVoiceFilter: null }))
            : n(342887).md()),
        nL();
}
function nM(e) {
    let { mediaEngineState: t } = e;
    (tn = t.settingsByContext),
        (tu = t.inputDevices),
        (tc = t.outputDevices),
        (tZ = t.appSupported),
        (tL = t.krispModuleLoaded),
        (u = t.krispVersion),
        (ts = t.goLiveContext);
}
function nk() {
    i = null;
}
function nU() {
    if ((0, ey.isWeb)()) {
        let e = et.f1.getCurrentConfig({ location: "MediaEngineStore handlePostConnectionOpen" });
        e.loadWasmModule && e.preload && r.startDavePreload();
    }
    return !1;
}
function nG(e) {
    switch (e.state) {
        case eP.S7L.CONNECTING:
            ny();
            break;
        case eP.S7L.RTC_CONNECTING:
            (tN = !1), (tR = !1), (o = void 0), (l = void 0);
            break;
        case eP.S7L.RTC_CONNECTED:
            nr();
            break;
        case eP.S7L.DISCONNECTED:
            nz(), n$();
    }
    ng.update();
}
function nV(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (tf = t.mute || t.suppress), (tm = t.deaf), tt.eachConnection(nt);
            let e = null != t.guildId && null != t.channelId && null != tG && tG !== t.channelId,
                n = !tO && null == t.channelId;
            return nr(!e && !n && tg), (tG = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== eb.default.getId() || null != eD.A.getChannelId() || nr(!1, null), e;
    }, !1);
}
function nF(e) {
    let { mute: t } = e;
    (tp = t), tt.eachConnection(nt);
}
function nB(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = t8(t);
    if (t === eV.x.DEFAULT && (ec.A.requestPermission(ek.iL.AUDIO), th)) return !1;
    (r = !i && !r) || (i = !1), n || (tI = !0), nA({ mute: r, deaf: i }, t), tt.eachConnection(nt);
}
function nj(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    nA({ mute: n }, t), r || (tI = !0), tt.eachConnection(nt);
}
function nH(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== eU.oD.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    nL(!0);
}
function nY(e) {
    let { context: t } = e;
    nA({ deaf: !t8(t).deaf }, t), tt.eachConnection(nt);
}
function nW(e) {
    let { context: t, userId: n } = e;
    if (n === eb.default.getId()) return;
    let { localMutes: r } = t8(t);
    r[n] ? delete r[n] : (r[n] = !0),
        nA({ localMutes: r }, t),
        tt.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nK(e) {
    let { context: t, userId: n, videoToggleState: r, persist: i, isAutomatic: a } = e;
    p()(!(i && a), "These are not allowed to both be true.");
    let s = r === eP.bb8.DISABLED,
        { disabledLocalVideos: o } = t8(t),
        l = o[n] ?? !1,
        u = tz.has(n),
        c = r === eP.bb8.AUTO_ENABLED || r === eP.bb8.MANUAL_ENABLED;
    eB.info(`disableVideo=${s} currentlyDisabled=${l} currentlyAutoDisabled=${u}, isVideoShown=${c}`),
        p()(!(u && !l), "If you are auto-disabled, then you are also disabled.");
    let d = s !== l,
        _ = t === eV.x.DEFAULT,
        f = a && d && _,
        h = i && d && _;
    eB.info(`changed=${d} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${f} isManualToggleByUser=${h}`);
    let { videoToggleStateMap: m } = t8(t);
    if (
        (m[n] === eP.bb8.AUTO_PROBING &&
            r === eP.bb8.AUTO_ENABLED &&
            (0, eu.A)(n, s ? eV.Al.AUTO_DISABLE : eV.Al.AUTO_ENABLE, c),
        (m[n] = r),
        nA({ videoToggleStateMap: m }, t, i),
        r === eP.bb8.AUTO_PROBING
            ? eD.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
            : eD.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
        t$ ||
            (eB.info(`isAutoDisableAllowed=${t$} - disabling VideoHealthManager`),
            eD.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
        f)
    ) {
        if ((!s && !u) || (s && !t$)) return;
        (0, eu.A)(n, s ? eV.Al.AUTO_DISABLE : eV.Al.AUTO_ENABLE, c), s ? tz.add(n) : tz.delete(n);
    } else
        h &&
            (u && !s
                ? (eB.info("disallowing auto-disable for this session because of manual override by user"),
                  (t$ = !1),
                  eD.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                  (0, eu.A)(n, eV.Al.MANUAL_REENABLE, c))
                : (0, eu.A)(n, s ? eV.Al.MANUAL_DISABLE : eV.Al.MANUAL_ENABLE, c));
    _ && !s && tz.delete(n),
        s ? (o[n] = !0) : delete o[n],
        nA({ disabledLocalVideos: o }, t, i),
        tt.eachConnection((e) => e.setLocalVideoDisabled(n, o[n] ?? !1), t);
}
function nz() {
    if (0 === tz.size) return;
    let e = eV.x.DEFAULT,
        { disabledLocalVideos: t } = t8(e);
    tz.forEach((n) => {
        p()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            tt.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tz.clear(),
        nA({ disabledLocalVideos: t }, e, !1);
}
function n$() {
    let e = eV.x.DEFAULT,
        { videoToggleStateMap: t } = t8(e);
    for (let [e, n] of Object.entries(t)) n === eP.bb8.AUTO_PROBING && delete t[e];
    nA({ videoToggleStateMap: t }, e, !1);
}
function nq(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === eb.default.getId()) return;
    let i = t === eV.x.STREAM ? eV.Cn : eV.Hz,
        { localVolumes: a } = t8(t);
    r === i ? delete a[n] : (a[n] = r), nA({ localVolumes: a }, t), tt.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function nZ(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: a } = t8(t);
    (a[n] = { left: r, right: i }), nA({ localPans: a }, t), tt.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function nQ(e) {
    let { context: t, mode: n, options: r } = e;
    nA({ mode: n, modeOptions: r }, t), tt.eachConnection(t9), ng.update();
}
function nX(e) {
    let { volume: t } = e;
    nA({ inputVolume: ne(t) }), tt.setInputVolume(t);
}
function nJ(e) {
    let { volume: t } = e;
    nA({ outputVolume: t }), tt.setOutputVolume(t);
}
function n0(e) {
    let { id: t } = e;
    (t = nC(tu, t)),
        (to = performance.now()),
        nA({ inputDeviceId: t }),
        tt.setAudioInputDevice(t),
        tt.eachConnection(nu),
        (o = void 0),
        (l = void 0);
}
function n1(e) {
    let { id: t } = e;
    nA({ outputDeviceId: (t = nC(tc, t)) }), tt.setAudioOutputDevice(t);
}
function n2(e) {
    let { id: t } = e;
    nA({ videoDeviceId: (t = nC(td, t)) }), nr();
}
function n3(e) {
    let { inputProfile: t } = e;
    nA({ activeInputProfile: t });
    let n = t8();
    tt.eachConnection((e) => {
        t9(e), nu(e);
    }),
        tt.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        ng.update(),
        ri();
}
function n6(e) {
    return ta !== e.required && ((ta = e.required), e.required || tt.interact(), !0);
}
function n4(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    nb(t), nO(n), nD(r);
}
function n5(e) {
    let { inputVolume: t, outputVolume: n } = e;
    nA({ inputVolume: ne(t), outputVolume: n });
}
function n7(e) {
    let t = t8(),
        n = tt.getAudioSubsystem(),
        i = tt.getAudioLayer(),
        a = nC(tu, t.inputDeviceId),
        s = tu[a]?.name,
        o = (0, e_.A)(t.noiseCancellation, r.getSystemMicrophoneMode(), { location: "trackVoiceProcessing" });
    eA.default.track(eP.HAw.VOICE_PROCESSING, {
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
function n8(e) {
    let t = nA({ echoCancellation: e.enabled });
    tt.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), ri(), n7(e.location);
}
function n9(e) {
    rt(e.enabled);
}
function re(e) {
    let t = nA({ sidechainCompressionStrength: e.strength });
    tt.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function rt(e) {
    let t = nA({ sidechainCompression: e });
    tt.setSidechainCompression(t.sidechainCompression);
}
function rn(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tq.add(n) : tq.delete(n), rr(), ri();
}
function rr() {
    let e = !tq.has("voice_filter_preview") && !tq.has("mic_test");
    tt.setMaybePreprocessMute(e);
}
function ri() {
    let e = t8(),
        t = tq.size > 0,
        n = e.inputDeviceId,
        r = eR.A.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        a = eR.A.hasNoiseSuppression(n) || e.noiseSuppression,
        s = ns(eR.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        o = e.noiseCancellation,
        l = null !== tP,
        u = tq.has("voice_filter") && 1 === tq.size;
    tt.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: a,
        automaticGainControlConfig: s,
        noiseCancellation: o,
        voiceFilters: l,
        loopbackUseAudioMode: u,
    });
}
async function ra() {
    if (!tt.supports(eV.O5.VAAPI)) return;
    let e = 4098;
    if (window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let t = await window.DiscordNative.processUtils.getSystemInfo();
    (t.electronGPUInfo?.gpuDevice ?? []).some((t) => t.vendorId === e) &&
        ((t2 = !0), (t1 = tt.supports(eV.O5.GAMESCOPE_CAPTURE)));
}
function rs(e) {
    let t = nA({ noiseSuppression: e.enabled });
    tt.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), ri(), n7(e.location);
}
function ro(e) {
    let t = nA({ automaticGainControl: e.enabled });
    tt.eachConnection((e) => no(e, t.automaticGainControl)), ri(), n7(e.location);
}
function rl(e) {
    let t = nA({ noiseCancellation: e.enabled });
    tt.eachConnection((e) => nl(e, t.noiseCancellation)), ri(), n7(e.location);
}
function ru(e) {
    ed.A.setKrispModelOverride(e.model), (d = e.model), ri();
}
function rc(e) {
    (0, ey.isWeb)() || ((tx = e.enabled), tt.setNoiseCancellationEnableStats?.(e.enabled));
}
function rd(e) {
    nA({ silenceWarning: e.enabled }), ng.update();
}
function r_(e) {
    tt.setDebugLogging(e.enabled);
}
function rf(e) {
    let { level: t } = e;
    (c = t), ed.A.setKrispSuppressionLevel(t);
}
function rp(e) {
    nA({ videoHook: e.enabled });
}
function rh(e) {
    nA({ experimentalSoundshare2: e.enabled });
}
function rm(e) {
    let { enabled: t } = e;
    nA({ useSystemScreensharePicker: t });
}
function rg(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = nA({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r });
    tt.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function rE(e) {
    let { enabled: t } = e;
    nA({ qos: t }), tt.eachConnection((e) => e.setQoS(t));
}
function rA() {
    nI();
}
function rI(e) {
    let { inputDetected: t } = e;
    (tb = t), !tN && tb && ((tN = !0), ng.update());
}
function rT(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === th) return !1;
    (th = n), tt.eachConnection(nt);
}
function ry(e) {
    let { state: t, permissionType: n } = e,
        r = t === ek.hL.ACCEPTED;
    switch (n) {
        case ek.iL.AUDIO:
            (tW = !0), tt.eachConnection(nt);
            break;
        case ek.iL.CAMERA:
            !r && tg && nr(!1);
            break;
        default:
            return !1;
    }
}
function rS() {
    return tL || !1;
}
async function rv() {
    try {
        await ev.Ay.ensureModule("discord_krisp");
        let e = ev.Ay.requireModule("discord_krisp");
        (tL = !0),
            (u = e.getSdkVersion?.()),
            (c = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (tw = e), r.emitChange();
            }),
            r.emitChange();
    } catch (t) {
        eB.warn(`Failed to load Krisp module: ${t.message}`), eS.A.captureException(t);
        let e = eV.CO.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eV.CO.INITIALIZED : n;
        }
        eA.default.track(eP.HAw.VOICE_PROCESSING, { noise_canceller_error: e }), nA({ noiseCancellation: !1 });
    } finally {
        tD = !1;
    }
}
function rC() {
    return (0, ey.isWindows)() || (0, ey.isLinux)() || (0, ey.isMac)();
}
function rb() {
    !rC() || __OVERLAY__ || tD || tL
        ? (0, ey.isWeb)() && tt.supports(eV.O5.NOISE_CANCELLATION)
            ? ((tL = !0), r.emitChange())
            : (0, ey.isWeb)() && nA({ noiseCancellation: !1 })
        : ((tD = !0), rv());
}
function rN(e) {
    let { enabled: t } = e;
    eA.default.track(eP.HAw.VOICE_FILTER_PLAYBACK_TOGGLED, { active_voice_filter_id: tP ?? null, enabled: t }),
        nA({ voiceFilterPlaybackEnabled: t });
}
function rR(e) {
    let { newVoiceFilterId: t } = e;
    nA({ mostRecentlyRequestedVoiceFilter: t }), tt.eachConnection((e) => e.setVoiceFilterId(t));
}
function rO() {
    nA({ mostRecentlyRequestedVoiceFilter: null });
}
function rD(e) {
    let { voiceFilterId: t } = e;
    (tk = tP), (tU = tM), (tP = t), (tM = null === t ? null : Date.now());
}
function rL(e) {
    let t = e.bypassEnabled;
    nA({ bypassSystemInputProcessing: t }), tt.setAudioInputBypassSystemProcessing(t), n7(e.location);
}
function rw(e) {
    rx(e.subsystem);
}
function rx(e) {
    e === eV.rB.AUTOMATIC
        ? (nA({ automaticAudioSubsystem: !0 }), rP())
        : (nA({ automaticAudioSubsystem: !1 }), tt.setAudioSubsystem(e));
}
function rP() {
    tt.queueAudioSubsystem(eV.rB.EXPERIMENTAL);
}
function rM(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && nr(i, null), null != t || null == n)) {
        tO = !1;
        return;
    }
    if (tO) return;
    tO = !0;
    let a = t8();
    (a.mute || a.deaf) && (nA({ deaf: !1, mute: !1 }), tt.eachConnection(nt));
}
function rk(e) {
    let { application: t } = e;
    tr.add(t.id);
}
function rU(e) {
    let { application: t } = e;
    tr.delete(t.id);
}
function rG(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (ti = !1), tt.eachConnection(nt);
                break;
            case "video":
                nr(!1);
        }
}
function rV(e) {
    (ti = e.enabled), e.unmute && nA({ mute: !1, deaf: !1 }), tt.eachConnection(nt);
}
function rF(e) {
    let { enabled: t } = e;
    ec.A.requestPermission(ek.iL.CAMERA), nr(t);
}
function rB(e) {
    let { sourceId: t, applicationName: n, quality: i } = e;
    if (!(0, O.Ao)() || null == v.A) return !1;
    let a = null,
        o = null,
        l = eI.A.getPidFromDesktopSource(t);
    ({ soundshareId: a, soundshareSession: o } = nw(l));
    let u = { desktopSource: { id: t, sourcePid: l, soundshareId: a, soundshareSession: o }, quality: i };
    null != s &&
        (tt.setClipsSource(null),
        (0, ey.isWindows)() && null != s.desktopSource.soundshareId && C.c1(s.desktopSource.soundshareId)),
        null != a && nx(a, o),
        (s = u);
    let c = t6("MediaEngineStore clips"),
        d = t8().videoHook;
    tt.setClipsSource({
        desktopDescription: {
            id: s.desktopSource.id,
            soundshareId: s.desktopSource.soundshareId,
            useVideoHook: d,
            useGraphicsCapture: nd(),
            useCaptureDeviceForEncode: !1,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: nf(),
            videoHookStaleFrameTimeoutMs: eq,
            graphicsCaptureStaleFrameTimeoutMs: eZ,
            hdrCaptureMode: c,
        },
        quality: i,
        applicationName: n,
    });
}
function rj(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((s = null), tt.setClipsSource(null));
}
function rH(e) {
    let { settings: t } = e;
    if (t?.desktopSettings != null) {
        let e = null,
            n = null,
            { sourceId: r, sound: i } = t.desktopSettings,
            a = t.context ?? eV.x.DEFAULT,
            s = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
            o = !1 === i ? null : eI.A.getPidFromDesktopSource(r);
        ey.isPlatformEmbedded &&
            !0 === i &&
            (({ soundshareId: e, soundshareSession: n } = nw(o)), null != e && nx(e, n)),
            nn(a),
            nr(a === eV.x.STREAM && tg, {
                desktopSource: { id: r, sourcePid: o, soundshareId: e, soundshareSession: n },
                quality: { resolution: s.resolution, frameRate: s.frameRate },
            });
    } else if (t?.cameraSettings != null) {
        let e = t.context ?? eV.x.DEFAULT,
            { videoDeviceGuid: n, audioDeviceGuid: r } = t.cameraSettings,
            i = e === eV.x.STREAM && tg,
            a = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
        nr(i, {
            cameraSource: { videoDeviceGuid: n, audioDeviceGuid: r },
            quality: { resolution: a.resolution, frameRate: a.frameRate },
        });
    } else nr(tg, null);
}
function rY(e) {
    let { section: t } = e;
    return t === eP.nc_.VOICE && ny(), !1;
}
function rW() {
    return tt.eachConnection(nu), !1;
}
function rK(e) {
    let { enabled: t } = e,
        n = nA({ aecDumpEnabled: t });
    tt.setAecDump(n.aecDumpEnabled);
}
function rz(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (tn = Object.values(eV.x).reduce((e, n) => {
        let r = n,
            i = e9();
        return (e[r] = m().merge(i, t[r])), e;
    }, {})),
        T.w.set(ej, tn),
        nT();
}
function r$(e) {
    let { state: t } = e,
        n = P.A.isEnabled();
    if (t === eP.g6G.BACKGROUND && tg && !n) (tv = !0), nr(!1);
    else {
        if (t !== eP.g6G.ACTIVE || !tv) return !1;
        (tv = !1), nr(!0);
    }
    return !0;
}
function rq(e) {
    tt.eachConnection((t) => t.setBitRate(e.bitrate));
}
function rZ() {
    if ((!tg && null == a) || null != eD.A.getRTCConnectionId()) return !1;
    nr(!1, null);
}
function rQ() {
    return !!tV && ((tV = !1), !0);
}
function rX(e) {
    tt.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function rJ(e) {
    let { settings: t } = e;
    tt.applyMediaFilterSettings(t).finally(() => {
        (tF = !1), r.emitChange();
    });
}
function r0() {
    tF = !0;
}
function r1() {
    tF = !1;
}
function r2(e) {
    tJ = e.enabled;
}
function r3() {
    if ((0, ey.isDesktop)() && ey.isPlatformEmbedded && !t3) {
        t3 = !0;
        let e = async () => {
            let t = await new Promise((e) => {
                ev.Ay.pollQueueMetrics((t) => {
                    e(t);
                });
            });
            t.periodMs = eV.tl;
            let n = r4(t);
            null !== n && eA.default.track(eP.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, eV.tl);
        };
        setTimeout(e, eV.tl);
    }
}
class r6 extends A.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        nc(),
            nE(),
            rb(),
            n$(),
            r3(),
            (0, ey.isWindows)() && ey.isPlatformEmbedded && na(),
            (tZ = {
                [eV.O5.VIDEO]: tt.supports(eV.O5.VIDEO),
                [eV.O5.DESKTOP_CAPTURE]: tt.supports(eV.O5.DESKTOP_CAPTURE),
                [eV.O5.HYBRID_VIDEO]: tt.supports(eV.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eb.default, eN.A, eR.A, eO.A, N.A, x.A, eD.A, M.Ay, ef.A, em.A, ew.default, ex.A, eE.A);
    }
    supports(e) {
        return tt.supports(e);
    }
    supportsInApp(e) {
        return tZ[e] || tt.supports(e);
    }
    isSupported() {
        return tt.supported();
    }
    isNoiseSuppressionSupported() {
        return tt.supports(eV.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return rS();
    }
    isNoiseCancellationError() {
        return tV;
    }
    isAutomaticGainControlSupported() {
        return tt.supports(eV.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nh() && (tt.supports(eV.O5.LEGACY_AUDIO_SUBSYSTEM) || tt.supports(eV.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return tt.supports(eV.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === tt.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return rS();
    }
    isAecDumpSupported() {
        return tt.supports(eV.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return tt.supports(eV.O5.VIDEO) && tt.supports(eV.O5.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        return eO.A.getChannel(tG)?.type !== eP.rbe.GUILD_STAGE_VOICE && e1 && q.A.simulcastEnabled();
    }
    isVideoDecoderFallbackEnabled() {
        return tY;
    }
    getAecDump() {
        return t8().aecDumpEnabled;
    }
    getMediaEngine() {
        return tt;
    }
    getVideoComponent() {
        return tt.Video;
    }
    getCameraComponent() {
        return tt.Camera;
    }
    getKrispSuppressionLevel() {
        return c ?? 100;
    }
    getKrispEnableStats() {
        return tx;
    }
    isEnabled() {
        return ti;
    }
    isMute() {
        return this.isSelfMute() || tf;
    }
    isDeaf() {
        return this.isSelfDeaf() || tm;
    }
    hasContext(e) {
        return null != tn[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT;
        return e === eV.x.DEFAULT && tp;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT;
        return (
            !this.isEnabled() ||
            t8(e).mute ||
            !ec.A.didHavePermission(ek.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eV.x.DEFAULT && th)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tI;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tI = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && eR.A.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return tJ;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT;
        return !this.isSupported() || t8(e).deaf;
    }
    isVideoEnabled() {
        return tg && tC;
    }
    isVideoAvailable() {
        return Object.values(td).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.STREAM;
        return ts === e && null != a;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.STREAM;
        return ts === e && null != a && a.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eV.x.DEFAULT;
        return e !== eb.default.getId() && (t8(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return tt.supports(eV.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eV.x.DEFAULT;
        return t8(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eV.x.DEFAULT;
        return t8(t).videoToggleStateMap[e] ?? eP.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eV.x.DEFAULT;
        return t === eV.x.DEFAULT && tz.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT;
        return e === eV.x.DEFAULT && tz.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tF;
    }
    isNativeAudioPermissionReady() {
        return tW;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return ts;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return to;
    }
    isH264MfDecodeAvailable() {
        return tl;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eV.x.DEFAULT,
            n = t8(t).localPans[e];
        return null != n ? n : e$;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eV.x.DEFAULT,
            n = t === eV.x.STREAM ? eV.Cn : eV.Hz,
            r = t8(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return t8().inputVolume;
    }
    getOutputVolume() {
        return t8().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT;
        return t8(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT;
        return t8(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return tP;
    }
    getActiveVoiceFilterAppliedAt() {
        return tM;
    }
    getPreviousVoiceFilter() {
        return tk;
    }
    getPreviousVoiceFilterAppliedAt() {
        return tU;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return t8().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return t8().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            m().each(tn, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === eP.TBI.PUSH_TO_TALK && tr.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nC(tu, t8().inputDeviceId);
    }
    getOutputDeviceId() {
        return nC(tc, t8().outputDeviceId);
    }
    getVideoDeviceId() {
        return nC(td, t8().videoDeviceId);
    }
    getInputDevices() {
        return tu;
    }
    getOutputDevices() {
        return tc;
    }
    getVideoDevices() {
        return td;
    }
    getEchoCancellation() {
        let e = t8();
        return eR.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return tt.supports(eV.O5.SIDECHAIN_COMPRESSION) && t8().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return t8().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return t8().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tj && tj;
    }
    getLoopback() {
        return tq.size > 0;
    }
    getLoopbackReasons() {
        return tq;
    }
    getNoiseSuppression() {
        let e = t8();
        return eR.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = t8();
        return eR.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return t8().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return t8().noiseCancellation;
    }
    getHardwareEncoding() {
        return e1;
    }
    getEnableSilenceWarning() {
        return t8().silenceWarning;
    }
    getDebugLogging() {
        return tt.getDebugLogging();
    }
    getQoS() {
        return t8().qos;
    }
    getAttenuation() {
        return t8().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return t8().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return t8().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return np() && t8().automaticAudioSubsystem ? eV.rB.AUTOMATIC : tt.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return tt.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return t8().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eG.my.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT;
        return t8(e);
    }
    getState() {
        return {
            settingsByContext: tn,
            inputDevices: tu,
            outputDevices: tc,
            appSupported: tZ,
            krispModuleLoaded: tL,
            krispVersion: u,
            krispSuppressionLevel: c,
            goLiveSource: a,
            goLiveContext: ts,
        };
    }
    getInputDetected() {
        return tb;
    }
    getNoInputDetectedNotice() {
        return tR;
    }
    getInputDeviceOSMuted() {
        return o;
    }
    getInputDeviceOSVolume() {
        return l;
    }
    getPacketDelay() {
        return ey.isPlatformEmbedded || this.getMode() !== eP.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        tt.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return ta;
    }
    getVideoHook() {
        return t8().videoHook;
    }
    supportsVideoHook() {
        return tt.supports(eV.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = t8().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return tt.supports(eV.O5.EXPERIMENTAL_SOUNDSHARE) && E().satisfies(v.A?.os.release, eM.$x);
    }
    supportsHookSoundshare() {
        return (0, ey.isWindows)() && tt.supports(eV.O5.SOUNDSHARE) && E().satisfies(v.A?.os.release, eM.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = t8().useSystemScreensharePicker,
            n = (0, ey.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return tt.supports(eV.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return t2;
    }
    getUseGamescopeCapture() {
        return t1;
    }
    getEverSpeakingWhileMuted() {
        return tT;
    }
    getSpeakingWhileMuted() {
        return ty;
    }
    getKrispModelOverride() {
        return d;
    }
    getKrispModels() {
        return tw;
    }
    getKrispVadActivationThreshold() {
        return t8().modeOptions.vadKrispActivationThreshold ?? ez;
    }
    hasActiveCallKitCall() {
        return t0;
    }
    setHasActiveCallKitCall(e) {
        t0 = e;
    }
    supportsScreenSoundshare() {
        return (0, ey.isMac)()
            ? tt.supports(eV.O5.SOUNDSHARE) && E().satisfies(v.A?.os.release, eM.P$) && nf()
            : (0, ey.isWindows)()
              ? tt.supports(eV.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, ey.isLinux)() && tt.supports(eV.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        return (0, ey.isWindows)()
            ? this.getInputDevices()[this.getInputDeviceId()]?.effects?.find((e) => e === e2)
            : (0, ey.isMac)() || (0, ey.isIOS)()
              ? _
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
                (e.fetchDave = et.f1.getCurrentConfig({
                    location: "MediaEngineStore fetchAsyncResources",
                }).loadWasmModule),
            tt.fetchAsyncResources(e)
        );
    }
    startDavePreload() {
        if (!tB && ((tB = !0), (0, ey.isWeb)())) {
            let e = { fetchDave: !0 };
            tt.fetchAsyncResources(e).catch((e) => {
                eB.warn("DAVE preload failed:", e), eS.A.captureException(e);
            });
        }
    }
    getSupportedSecureFramesProtocolVersion() {
        if ((0, ey.isWeb)()) {
            let { useWasmModule: e } = et.f1.getCurrentConfig({
                location: "MediaEngineStore getSupportedSecureFramesProtocolVersion",
            });
            if (!e) return 0;
        }
        let e = tt.getSupportedSecureFramesProtocolVersion();
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
        return tQ;
    }
}
function r4(e) {
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
let r5 = (r = new r6(S.h, {
    VOICE_CHANNEL_SELECT: rM,
    VOICE_STATE_UPDATES: nV,
    CONNECTION_OPEN: nP,
    CONNECTION_CLOSED: nk,
    POST_CONNECTION_OPEN: nU,
    RTC_CONNECTION_STATE: nG,
    AUDIO_SET_TEMPORARY_SELF_MUTE: nF,
    AUDIO_TOGGLE_SELF_MUTE: nB,
    AUDIO_SET_SELF_MUTE: nj,
    AUDIO_TOGGLE_SELF_DEAF: nY,
    AUDIO_TOGGLE_LOCAL_MUTE: nW,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: nK,
    AUDIO_SET_LOCAL_VOLUME: nq,
    AUDIO_SET_LOCAL_PAN: nZ,
    AUDIO_SET_MODE: nQ,
    AUDIO_SET_INPUT_VOLUME: nX,
    AUDIO_SET_OUTPUT_VOLUME: nJ,
    AUDIO_SET_INPUT_DEVICE: n0,
    AUDIO_SET_OUTPUT_DEVICE: n1,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: n3,
    AUDIO_SET_ECHO_CANCELLATION: n8,
    AUDIO_SET_SIDECHAIN_COMPRESSION: n9,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: re,
    AUDIO_SET_LOOPBACK: rn,
    AUDIO_SET_NOISE_SUPPRESSION: rs,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: ro,
    AUDIO_SET_NOISE_CANCELLATION: rl,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: ru,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: rd,
    AUDIO_SET_DEBUG_LOGGING: r_,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: rf,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: rc,
    MEDIA_ENGINE_SET_VIDEO_HOOK: rp,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: rh,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: rm,
    AUDIO_SET_ATTENUATION: rg,
    AUDIO_SET_QOS: rE,
    MEDIA_ENGINE_DEVICES: n4,
    AUDIO_VOLUME_CHANGE: n5,
    AUDIO_RESET: rA,
    AUDIO_INPUT_DETECTED: rI,
    AUDIO_SET_SUBSYSTEM: rw,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rL,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rV,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rF,
    MEDIA_ENGINE_PERMISSION: rG,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rH,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: n2,
    MEDIA_ENGINE_INTERACTION_REQUIRED: n6,
    USER_SETTINGS_MODAL_INIT: rY,
    USER_SETTINGS_MODAL_SET_SECTION: rY,
    CERTIFIED_DEVICES_SET: rW,
    RPC_APP_CONNECTED: rk,
    RPC_APP_DISCONNECTED: rU,
    OVERLAY_INITIALIZE: nM,
    APP_STATE_UPDATE: r$,
    SET_CHANNEL_BITRATE: rq,
    SET_VAD_PERMISSION: rT,
    SET_NATIVE_PERMISSION: ry,
    SET_CHANNEL_VIDEO_QUALITY_MODE: rX,
    MEDIA_ENGINE_SET_AEC_DUMP: rK,
    MEDIA_ENGINE_RESET_SETTINGS: rz,
    CHANNEL_DELETE: rZ,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rQ,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rJ,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: r0,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: r1,
    USER_SETTINGS_PROTO_UPDATE: nH,
    CLIPS_INIT: rB,
    CLIPS_SETTINGS_UPDATE: rj,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: r2,
    VOICE_FILTER_REQUEST_SWITCH: rR,
    VOICE_FILTER_LOOPBACK_TOGGLE: rN,
    VOICE_FILTER_APPLIED: rD,
    VOICE_FILTER_DOWNLOAD_FAILED: rO,
    VOICE_FILTER_APPLY_FAILED: rO,
}));
