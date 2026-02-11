"use strict";
let r, i, a, s, o, l, u, c, d, _, f;
n.d(t, { A: () => ir }), n(321073), n(790599);
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
    J = n(495439),
    ee = n(264866),
    et = n(927170),
    en = n(233232),
    er = n(140175),
    ei = n(267378),
    ea = n(801644),
    es = n(223572),
    eo = n(276006),
    el = n(670470),
    eu = n(165479),
    ec = n(896014),
    ed = n(765396),
    e_ = n(75076),
    ef = n(674966),
    eh = n(559633),
    ep = n(3527),
    em = n(714763),
    eg = n(879172),
    eE = n(555444),
    eA = n(617617),
    eI = n(340913),
    eT = n(996744),
    ey = n(28075),
    eS = n(954571),
    ev = n(353835),
    eC = n(927813),
    eb = n(723702),
    eN = n(728458),
    eR = n(837921),
    eO = n(350535),
    eD = n(961350),
    eL = n(131319),
    ew = n(347481),
    ex = n(734057),
    eP = n(383501),
    eM = n(851581),
    ek = n(287809),
    eU = n(117549),
    eG = n(652215),
    eF = n(502075),
    eV = n(765682),
    eB = n(355097),
    ej = n(509381),
    eH = n(731854),
    eY = n(985018);
let eW = new w.A("MediaEngineStore"),
    eK = "MediaEngineStore",
    e$ = 4,
    ez = 1,
    eq = 1,
    eX = 1,
    eZ = 0.5,
    eQ = { left: 1, right: 1 },
    eJ = 500,
    e0 = 5 * eC.A.Millis.SECOND,
    e1 = -60,
    e2 = 100,
    e3 = 2 * eC.A.Millis.SECOND,
    e6 = 30 * eC.A.Millis.SECOND,
    e4 = +eC.A.Millis.MINUTE,
    e5 = !0,
    e7 = "deep_noise_suppression",
    e8 = 0,
    e9 = null;
function te() {
    if (!(0, eb.isIOS)() || null == e9) return !1;
    let e = e9();
    if (null == e || !e.startsWith("ARM64_")) return !1;
    let t = e.substring(6);
    return ("T" === t[0] || "S" === t[0]) && parseInt(t.substring(1), 10) >= 8122;
}
let tt = null;
async function tn() {
    if (!(0, eb.isMac)() || b.A?.os.arch !== "arm64" || b.A?.processUtils?.getSystemInfo == null) {
        tt = !1;
        return;
    }
    let e = await b.A.processUtils.getSystemInfo(),
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
        mode: eG.TBI.VOICE_ACTIVITY,
        modeOptions: {
            threshold: e1,
            autoThreshold: eb.isPlatformEmbedded || __OVERLAY__,
            vadUseKrisp: !0,
            vadKrispActivationThreshold: eZ,
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
        videoHook: ts.supports(eH.O5.VIDEO_HOOK),
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
        [ej.my.CUSTOM]: {},
        [ej.my.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [ej.my.STUDIO]: {
            mode: eG.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    ts = (0, y.hB)((0, y.WI)());
eW.enableNativeLogger(!0);
let to = {},
    tl = new Set([eH.x.DEFAULT]),
    tu = ts.supports(eH.O5.AUTO_ENABLE),
    tc = !1,
    td = eH.x.STREAM,
    t_ = performance.now(),
    tf = null,
    th = { [eH.dx]: nR("No Input Devices") },
    tp = { [eH.dx]: nR("No Output Devices") },
    tm = { [eH.dx]: nR("No Video Devices") },
    tg = new v.Ep(),
    tE = !1,
    tA = !1,
    tI = !1,
    tT = !1,
    ty = !1,
    tS = eH.qe,
    tv = eH.qe,
    tC = !1,
    tb = !1,
    tN = !1,
    tR = new v.Ep(),
    tO = !1,
    tD = !1,
    tL = !1,
    tw = !1,
    tx = new v.Ep(),
    tP = !1,
    tM = !1,
    tk = !1,
    tU = [],
    tG = !1,
    tF = null,
    tV = null,
    tB = null,
    tj = null,
    tH = null,
    tY = !1,
    tW = !1,
    tK = !1,
    t$ = null,
    tz = null,
    tq = !1,
    tX = !1;
ef.A.hasPermission(eV.iL.AUDIO, { showAuthorizationError: !1 }),
    ef.A.hasPermission(eV.iL.CAMERA, { showAuthorizationError: !1 });
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
    return null != tz ? tz : "u" > typeof window ? (tz = nn().then((e) => ((t$ = e), e))) : Promise.resolve(!1);
}
function ni() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eH.x.DEFAULT,
        t = to[e];
    return null == t && ((t = ti()), (to[e] = t)), t;
}
function na() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eH.x.DEFAULT,
        t = ni(e),
        n = ta[t.activeInputProfile ?? ej.my.CUSTOM],
        r = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}) };
    if (
        (null == r.vadDuringPreProcess && (r.vadDuringPreProcess = (0, es.R)({ location: "getSettings" }).enabled),
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
    e.context === eH.x.DEFAULT &&
        ((0, eE.H)({ location: "setInputMode", autoTrackExposure: !1 }).enableLatching &&
            n === eG.TBI.PUSH_TO_TALK &&
            t.modeOptions.pttLatchingEnabled &&
            (n = eG.TBI.VOICE_ACTIVITY),
        (0, er.N)(!1, !1, !1));
    let { showPTTSpeakingIndicator: r } = eI.A.getConfig({ location: "setInputMode" }),
        i = r && n === eG.TBI.PUSH_TO_TALK;
    e.setInputMode(n, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: !!i || t.modeOptions.autoThreshold,
        vadUseKrisp: (!!i || t.modeOptions.vadUseKrisp) && rO(),
        vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? eZ,
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
    let t = na(e.context),
        n = !tu || t.mute || t.deaf;
    e.context === eH.x.DEFAULT
        ? (n = n || tE || tA || tI || !ef.A.didHavePermission(eV.iL.AUDIO))
        : e.context === eH.x.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eH.x.DEFAULT && R.A.updateNativeMute();
}
function nu(e) {
    e !== td && (null != a && ts.setGoLiveSource(null, td), (td = e));
}
function nc() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ty,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        n = a;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, eb.isWindows)() && N.c1(n.desktopSource.soundshareId),
            ts.setGoLiveSource(null, td)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            ts.setGoLiveSource(null, td),
        ty || e)
    ) {
        let t = na().videoDeviceId;
        ty && t === eH.dx && tv === eH.dx && tS !== eH.qe ? (t = tS) : (tv = t),
            (tS = (ty = e) ? nD(tm, t) : eH.qe),
            ts.setVideoInputDevice(tS);
    }
    if (((a = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = nt("MediaEngineStore go live"),
                i = na().videoHook,
                a = nE(),
                s = a ? (nA() ? eF.zl : eF.eg) : 0,
                o = (0, eb.isWindows)() && (0, eo.b)("updateVideo").enabled,
                l = !1;
            (0, eb.isWindows)() && t3 && (l = eu.q.getConfig({ location: "updateVideo" }).enabled),
                ts.setGoLiveSource(
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
                            videoHookStaleFrameTimeoutMs: eJ,
                            graphicsCaptureStaleFrameTimeoutMs: e0,
                            hdrCaptureMode: n,
                            enableGlobalFramePoolLock: (0, q.H)({ location: "updateVideo" }).enabled,
                            useGraphicsCaptureDirtyRegions: l,
                        },
                        quality: e,
                    },
                    td,
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
                td,
            );
    }
}
function nd(e) {
    switch (e) {
        case eH.CO.CPU_OVERUSE:
            return P.B6.NoiseCancellerCpuOveruse;
        case eH.CO.FAILED:
            return P.B6.NoiseCancellerFailed;
        case eH.CO.VAD_CPU_OVERUSE:
            return P.B6.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function n_() {
    null === tf &&
        ts
            .getCodecSurvey()
            .then((e) => {
                try {
                    let t = JSON.parse(e);
                    if (null == t || null == t.available_video_decoders) throw Error("decoder survey is not available");
                    tf = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                } catch (e) {
                    eW.error("Failed to parse codec survey", e), (tf = !1);
                }
            })
            .catch((e) => {
                eW.error("Failed to get codec survey", e), (tf = !1);
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
    let n = (0, ep.A)(t, r.getSystemMicrophoneMode(), { location: "setNoiseCancellation" });
    n !== t && eW.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: i } = (0, F.F)({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(i);
    let { noiseCancellationAfterProcessing: a, vadAfterWebrtc: s } = (0, et.$)({ location: "setNoiseCancellation" });
    e.setNoiseCancellationAfterProcessing(a), e.setVADAfterWebrtc(s);
}
function nm(e) {
    let t = na(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(ew.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(ew.A.hasNoiseSuppression(n) || t.noiseSuppression),
        nh(e, ew.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        np(e, t.noiseCancellation),
        e.setVoiceFilterId(tF),
        (0, eb.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function ng() {
    tg.start(e6, () => {
        eW.error("Device enumeration timed out"), eS.default.track(eG.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
    }),
        ts.on(y.bg.Connection, (e) => {
            ns(e), nl(e), nm(e);
            let t = na();
            e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
                e.setQoS(t.qos);
            let n = (0, J.K)({ location: "setupMediaEngine" }).treatment;
            (tq = n === J.c.NoSoftwareDecodeWithFallback),
                n === J.c.NoSoftwareDecode || n === J.c.NoSoftwareDecodeWithFallback
                    ? (e.setExperimentFlag(eH.fd.H265_HARDWARE_ONLY, !0),
                      (0, eb.isWindows)()
                          ? nr().then((t) => {
                                e.setExperimentFlag(eH.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                            })
                          : (0, eb.isMac)() && e.setExperimentFlag(eH.fd.H265_HARDWARE_DECODE_AVAILABLE, !0))
                    : n === J.c.Disabled &&
                      (e.setExperimentFlag(eH.fd.H265_HARDWARE_ONLY, !0),
                      e.setExperimentFlag(eH.fd.H265_HARDWARE_DECODE_AVAILABLE, !1)),
                (0, eb.isWindows)() &&
                    (0, Q.r)({ location: "setupMediaEngine" }).enabled &&
                    e.setExperimentFlag(eH.fd.USE_H264_MF_DECODER, !0);
            let i = eP.A.getGuildId(),
                {
                    muteBeforeProcessing: s,
                    pttBeforeProcessing: o,
                    skipEncode: l,
                } = (null != i ? $.A : K.A).getCurrentConfig(
                    { location: "setupMediaEngine", guildId: i ?? void 0 },
                    { autoTrackExposure: !0 },
                );
            s && e.setExperimentFlag(eH.fd.MUTE_BEFORE_PROCESSING, !0),
                o && e.setExperimentFlag(eH.fd.PTT_BEFORE_PROCESSING, !0),
                l && e.setExperimentFlag(eH.fd.SKIP_ENCODE, !0),
                (0, en.J)({ location: "setupMediaEngine" }).enabled &&
                    e.setExperimentFlag(eH.fd.LOW_LATENCY_RATE_CONTROL, !0);
            let u = !1,
                c = !0;
            if (
                (e.setExperimentFlag(eH.fd.RESET_DECODER_ON_ERRORS, !0),
                u && e.setExperimentFlag(eH.fd.SOFTWARE_FALLBACK_ON_ERRORS, !0),
                c && e.setExperimentFlag(eH.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0),
                e.context === eH.x.STREAM)
            ) {
                let t = nw(tp);
                e.setSoundshareDiscardRearChannels(t);
                let { simulcastEnabled: n, lqStreamBitrate: r } = Z.A.getConfig();
                e.configureGoLiveSimulcast(n, r);
            }
            if ((0, eb.isWindows)())
                e.setExperimentFlag(eH.fd.SIGNAL_AV1, !0), e.setExperimentFlag(eH.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            else if ((0, eb.isMac)()) {
                if ((e.setExperimentFlag(eH.fd.SIGNAL_AV1_DECODE, !0), tr())) {
                    let { enabled: t } = (0, B.t)("MediaEngineStore");
                    t && e.setExperimentFlag(eH.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                }
            } else if ((0, eb.isLinux)()) e.setExperimentFlag(eH.fd.SIGNAL_AV1_DECODE, !0);
            else if ((0, eb.isIOS)() && te()) {
                let { enabled: t } = (0, V.$)("MediaEngineStore");
                t &&
                    (e.setExperimentFlag(eH.fd.SIGNAL_AV1_DECODE, !0),
                    e.setExperimentFlag(eH.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
            }
            if ((0, eb.isWeb)()) {
                let { enabled: t } = (0, z.O)("MediaEngineStore");
                e.setExperimentFlag(eH.fd.BROWSER_HEVC, t);
            }
            if (
                ((0, eb.isWindows)() &&
                    t2?.startsWith("AMD") &&
                    (0, ec.F)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eH.fd.WMF_GPU_ENCODE, !0),
                (0, eb.isWindows)() &&
                    t2?.startsWith("Intel") &&
                    (0, ed.J)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eH.fd.WMF_GPU_ENCODE, !0),
                (0, eb.isWindows)() &&
                    t2?.startsWith("Qualcomm") &&
                    (0, ec.F)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eH.fd.WMF_GPU_ENCODE, !0),
                ts.setHasFullbandPerformance((0, x.A)()),
                e.setRemoteAudioHistory(1e3),
                (0, D.A)(r))
            ) {
                let { enableViewerClipping: t } = el.A.getCurrentConfig(
                    { location: "f627ab_15" },
                    { autoTrackExposure: !1 },
                );
                e.setViewerSideClip(t), e.setClipsKeyFrameInterval(eH.X1);
            }
            for (let n of ((t = na(e.context)), e.setPostponeDecodeLevel(e2), Object.keys(t.localMutes)))
                n !== eD.default.getId() && e.setLocalMute(n, t.localMutes[n]);
            for (let n of Object.keys(t.localVolumes))
                n !== eD.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
            for (let n of Object.keys(t.localPans)) {
                let r = t.localPans[n];
                e.setLocalPan(n, r.left, r.right);
            }
            for (let n of Object.keys(t.disabledLocalVideos)) e.setLocalVideoDisabled(n, t.disabledLocalVideos[n]);
            e.on(y.yq.Speaking, (t, n, r, i) => {
                C.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: i });
            }),
                e.context === eH.x.DEFAULT &&
                    ((tb = !1),
                    (tN = !1),
                    e.on(y.yq.SpeakingWhileMuted, () => {
                        (tb = !0),
                            (tN = !0),
                            r.emitChange(),
                            tR.stop(),
                            tR.start(e3, () => {
                                (tN = !1), r.emitChange();
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
                        eS.default.track(eG.HAw.VIDEOHOOK_INITIALIZED, {
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
                    eW.warn(`noisecancellererror event: ${e}`),
                        (0, P.QW)({ type: P.iy.NOISE_CANCELLER_ERROR, underlyingError: nd(e) }),
                        (tY = !0),
                        eS.default.track(eG.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        C.h.dispatch({ type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: !0 }),
                        C.h.dispatch({ type: "AUDIO_SET_NOISE_CANCELLATION", enabled: !1 }),
                        C.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e });
                }),
                e.on(y.yq.VoiceActivityDetectorError, (e) => {
                    eW.warn(`voiceactivitydetectorerror event: ${e}`),
                        (0, P.QW)({ type: P.iy.NOISE_CANCELLER_ERROR, underlyingError: nd(e) }),
                        eS.default.track(eG.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        C.h.dispatch({
                            type: "AUDIO_SET_MODE",
                            context: eH.x.DEFAULT,
                            mode: eG.TBI.VOICE_ACTIVITY,
                            options: { ...na(eH.x.DEFAULT).modeOptions, vadUseKrisp: !1 },
                        }),
                        C.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e });
                }),
                e.on(y.yq.SdpError, (e, t, n, r) => {
                    eS.default.track(eG.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: r });
                }),
                e.on(y.yq.VideoState, (t) => {
                    C.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                }),
                e.setBitRate(eL.A.bitrate),
                e.applyVideoQualityMode(eU.A.mode),
                (0, eb.isWindows)() &&
                    ts.supports(eH.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                    ts.setAsyncVideoInputDeviceInit((0, Y.v)("setupMediaEngine").enabled);
        }),
        ts.on(y.bg.DeviceChange, (e, t, n) => {
            tg.stop(),
                C.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
        }),
        ts.on(y.bg.VolumeChange, (e, t) => {
            C.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
        }),
        ts.on(y.bg.DesktopSourceEnd, (e, t) => {
            C.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
        }),
        ts.on(y.bg.AudioPermission, (e) => {
            (tX = !0), C.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
        }),
        ts.on(y.bg.VideoPermission, (e) => {
            C.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
        }),
        ts.on(y.bg.WatchdogTimeout, async () => {
            let e;
            if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                try {
                    await ev.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                } catch (t) {
                    "number" == typeof t.status && (e = t.status);
                }
            eW.warn(`Watchdog timeout, report submission status: ${e ?? 200}`),
                eS.default.track(eG.HAw.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        ts.on(y.bg.VideoInputInitialized, (e) => {
            eS.default.track(eG.HAw.VIDEO_INPUT_INITIALIZED, {
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
        ts.on(y.bg.AudioInputInitialized, (e) => {
            eS.default.track(eG.HAw.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * eC.A.Millis.SECOND),
                rtc_connection_id: eP.A.getRTCConnectionId(),
            });
        }),
        ts.on(y.bg.ClipsRecordingRestartNeeded, () => {
            C.h.dispatch({ type: "CLIPS_RESTART" });
        }),
        ts.on(y.bg.ClipsInitFailure, (e, t) => {
            C.h.wait(() => {
                C.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t });
            });
        }),
        ts.on(y.bg.ClipsRecordingEnded, (e, t) => {
            s?.desktopSource?.id === e && (null != t && a?.desktopSource?.soundshareId !== t && N.c1(t), (s = null));
        }),
        ts.on(y.bg.NativeScreenSharePickerUpdate, (e, t) => {
            C.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
        }),
        ts.on(y.bg.NativeScreenSharePickerCancel, (e) => {
            C.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
        }),
        ts.on(y.bg.NativeScreenSharePickerError, (e) => {
            C.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
        }),
        ts.on(y.bg.AudioDeviceModuleError, (e, t, n) => {
            eS.default.track(eG.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
        }),
        ts.on(y.bg.VideoCodecError, (e) => {
            let t = "encode" === e.mode ? P.iy.VIDEO_ENCODE_ERROR : P.iy.VIDEO_DECODE_ERROR,
                n = { videoCodec: e.codecStandard, errorMessage: e.message };
            (0, P.QW)(
                t === P.iy.VIDEO_ENCODE_ERROR
                    ? { type: t, ...n, videoEncoder: e.implName }
                    : { type: t, ...n, videoDecoder: e.implName },
            );
        }),
        ts.on(y.bg.ConnectionStats, (e) => {
            C.h.dispatch({
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
        ts.on(y.bg.VoiceQueueMetrics, (e) => {
            let t = it(e);
            null !== t && eS.default.track(eG.HAw.VOICE_QUEUE_METRICS, t);
        }),
        ts.setOnVideoContainerResized((e, t, n) => {
            C.h.wait(() =>
                C.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
            );
        }),
        tn(),
        rl(),
        rc(),
        ts.supports(eH.O5.ASYNC_CLIPS_SOURCE_DEINIT) &&
            ts.setAsyncClipsSourceDeinit((0, W.V)("setupMediaEngine").enabled),
        o.reset(),
        (0, eM.w)().then((e) => {
            null != e && ((t2 = e.gpu_brand), (t3 = e.has_intel_hybrid_igpu));
        }),
        ts.on(y.bg.SystemMicrophoneModeChange, (e) => {
            (f = e), ts.eachConnection(nm);
        });
}
function nE() {
    return (0, eb.isWindows)() && I().satisfies(b.A?.os.release, eF.yg);
}
function nA() {
    return (0, eb.isWindows)() && I().satisfies(b.A?.os.release, eF.fG);
}
function nI() {
    return (0, eb.isMac)() && ts.supports(eH.O5.SCREEN_CAPTURE_KIT) && I().satisfies(b.A?.os.release, eF.e);
}
function nT() {
    return (
        (0, eb.isWindows)() &&
        ts.supports(eH.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        ts.supports(eH.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function ny() {
    return ts.supports(eH.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function nS() {
    let e = S.w.get("audio");
    null != e && (S.w.set(eK, { [eH.x.DEFAULT]: e }), S.w.remove("audio")),
        (to = S.w.get(eK) ?? {}),
        E().each(to, (e) => {
            E().defaultsDeep(e, ti()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, eO.OH)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== e$ &&
                    ((e.vadUseKrispSettingVersion = e$), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                e.vadThrehsoldMigrated ||
                    ((e.vadThrehsoldMigrated = !0), e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = e1)),
                ts.supports(eH.O5.SIDECHAIN_COMPRESSION) &&
                    e.sidechainCompressionSettingVersion < eX &&
                    ((e.sidechainCompressionSettingVersion = eX), (e.sidechainCompression = !0)),
                (0, eb.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== eq &&
                      ((e.ncUseKrispjsSettingVersion = eq), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== ez &&
                      ((e.ncUseKrispSettingVersion = ez), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
        }),
        nb();
}
function nv(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eH.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = ni(t);
    return Object.assign(r, e), !__OVERLAY__ && n && S.w.set(eK, to), r;
}
function nC() {
    S.w.remove(eK), location.reload();
}
function nb() {
    let e = na();
    ts.setAudioInputDevice(e.inputDeviceId),
        ts.setAudioOutputDevice(e.outputDeviceId),
        nc(),
        ts.setInputVolume(e.inputVolume),
        ts.setOutputVolume(e.outputVolume),
        ts.setAecDump(e.aecDumpEnabled),
        ts.setSidechainCompression(e.sidechainCompression),
        ts.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        ts.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing);
}
function nN() {
    tu || ts.enable().then(() => C.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
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
    if (((th = nO(e, eY.intl.string(eY.t["/QIjDA"]))), !E().isEqual(th, t))) {
        let e = na(),
            t = nD(th, e.inputDeviceId);
        ts.setAudioInputDevice(t), ts.eachConnection(nm);
    }
}
function nw(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nx(e) {
    ts.eachConnection((t) => {
        t.context === eH.x.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function nP(e) {
    let t = tp;
    if (((tp = nO(e, eY.intl.string(eY.t.xlUg0v))), !E().isEqual(tp, t))) {
        let e = na(),
            n = nD(tp, e.outputDeviceId);
        ts.setAudioOutputDevice(n);
        let r = nw(t),
            i = nw(tp);
        r !== i && nx(i);
    }
}
function nM(e) {
    tD = e.length > 0;
    let t = tm;
    if (((tm = nO(e, eY.intl.string(eY.t.WKWARY))), ty && !E().isEqual(tm, t))) {
        let e = void 0 !== tm[tS],
            n = tS === eH.dx && t[eH.dx]?.disabled;
        nc(e || n);
    }
}
function nk() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = eA.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let r = n === eB.W.USER ? eH.x.DEFAULT : eH.x.STREAM,
            i = r === eH.x.STREAM ? eH.Cn : eH.Hz,
            a = t[n] ?? {},
            { localMutes: s, localVolumes: o } = na(r);
        for (let [e, t] of Object.entries(a))
            null == (0, eg.tM)(r, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== i ? (o[e] = t.volume) : delete o[e],
                ts.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, r));
        if (e)
            for (let e of new Set([...Object.keys(s), ...Object.keys(o)]))
                null == a[e] &&
                    (delete s[e],
                    delete o[e],
                    ts.eachConnection((t) => {
                        t.setLocalVolume(e, i), t.setLocalMute(e, !1);
                    }, r));
        nv({ localMutes: s, localVolumes: o }, r);
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
    (0, eb.isWindows)() &&
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
    (i = e.sessionId), (tE = !1), (tT = !1);
    let t = na();
    if (
        (nT() && (ny() ? rF(eH.rB.AUTOMATIC) : t.automaticAudioSubsystem && rV()),
        ts.supports(eH.O5.OFFLOAD_ADM_CONTROLS))
    ) {
        let e = !1;
        (0, eb.isDesktop)()
            ? (e = (0, j.i)({ location: "handleConnectionOpen" }).enabled)
            : ((0, eb.isIOS)() || (0, eb.isAndroid)()) && (e = (0, H.Y)({ location: "handleConnectionOpen" }).enabled),
            ts.setOffloadAdmControls(e);
    }
    (0, eT.Lb)({ location: "MediaEngineStore", autoTrackExposure: !1 }) &&
        null !== t.mostRecentlyRequestedVoiceFilter &&
        (0, eb.isDesktop)() &&
        (ey.A.getLastInitAttemptMayHaveCrashed()
            ? (C.h.dispatch({ type: "AUDIO_SET_SELF_MUTE", mute: !0, context: eH.x.DEFAULT, playSoundEffect: !0 }),
              nv({ mostRecentlyRequestedVoiceFilter: null }))
            : n(342887).md()),
        nk();
}
function nV(e) {
    let { mediaEngineState: t } = e;
    (to = t.settingsByContext),
        (th = t.inputDevices),
        (tp = t.outputDevices),
        (t1 = t.appSupported),
        (tk = t.krispModuleLoaded),
        (c = t.krispVersion),
        (td = t.goLiveContext);
}
function nB() {
    i = null;
}
function nj() {
    if ((0, eb.isWeb)()) {
        let e = ei.f1.getCurrentConfig({ location: "MediaEngineStore handlePostConnectionOpen" });
        e.loadWasmModule && e.preload && r.startDavePreload();
    }
    return !1;
}
function nH(e) {
    switch (e.state) {
        case eG.S7L.CONNECTING:
            nN();
            break;
        case eG.S7L.RTC_CONNECTING:
            (tw = !1), (l = void 0), (u = void 0), (tL = !1), (t4 = !1), t5.stop(), tx.stop(), o.reset();
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
            (tE = t.mute || t.suppress), (tT = t.deaf), ts.eachConnection(nl);
            let e = null != t.guildId && null != t.channelId && null != tH && tH !== t.channelId,
                n = !tP && null == t.channelId;
            return nc(!e && !n && ty), (tH = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== eD.default.getId() || null != eP.A.getChannelId() || nc(!1, null), e;
    }, !1);
}
function nW(e) {
    let { mute: t } = e;
    (tA = t), ts.eachConnection(nl);
}
function nK(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = na(t);
    if (t === eH.x.DEFAULT && (ef.A.requestPermission(eV.iL.AUDIO), tI)) return !1;
    (r = !i && !r) || (i = !1), n || (tC = !0), nv({ mute: r, deaf: i }, t), ts.eachConnection(nl);
}
function n$(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    nv({ mute: n }, t), r || (tC = !0), ts.eachConnection(nl);
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
    nv({ deaf: !na(t).deaf }, t), ts.eachConnection(nl);
}
function nX(e) {
    let { context: t, userId: n } = e;
    if (n === eD.default.getId()) return;
    let { localMutes: r } = na(t);
    r[n] ? delete r[n] : (r[n] = !0),
        nv({ localMutes: r }, t),
        ts.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nZ(e) {
    let { context: t, userId: n, videoToggleState: r, persist: i, isAutomatic: a } = e;
    p()(!(i && a), "These are not allowed to both be true.");
    let s = r === eG.bb8.DISABLED,
        { disabledLocalVideos: o } = na(t),
        l = o[n] ?? !1,
        u = tQ.has(n),
        c = r === eG.bb8.AUTO_ENABLED || r === eG.bb8.MANUAL_ENABLED;
    eW.info(`disableVideo=${s} currentlyDisabled=${l} currentlyAutoDisabled=${u}, isVideoShown=${c}`),
        p()(!(u && !l), "If you are auto-disabled, then you are also disabled.");
    let d = s !== l,
        _ = t === eH.x.DEFAULT,
        f = a && d && _,
        h = i && d && _;
    eW.info(`changed=${d} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${f} isManualToggleByUser=${h}`);
    let { videoToggleStateMap: g } = na(t);
    if (
        (g[n] === eG.bb8.AUTO_PROBING &&
            r === eG.bb8.AUTO_ENABLED &&
            (0, e_.A)(n, s ? eH.Al.AUTO_DISABLE : eH.Al.AUTO_ENABLE, c),
        (g[n] = r),
        nv({ videoToggleStateMap: g }, t, i),
        r === eG.bb8.AUTO_PROBING
            ? eP.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
            : eP.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
        tJ ||
            (eW.info(`isAutoDisableAllowed=${tJ} - disabling VideoHealthManager`),
            eP.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
        f)
    ) {
        if ((!s && !u) || (s && !tJ)) return;
        (0, e_.A)(n, s ? eH.Al.AUTO_DISABLE : eH.Al.AUTO_ENABLE, c), s ? tQ.add(n) : tQ.delete(n);
    } else
        h &&
            (u && !s
                ? (eW.info("disallowing auto-disable for this session because of manual override by user"),
                  (tJ = !1),
                  eP.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                  (0, e_.A)(n, eH.Al.MANUAL_REENABLE, c))
                : (0, e_.A)(n, s ? eH.Al.MANUAL_DISABLE : eH.Al.MANUAL_ENABLE, c));
    _ && !s && tQ.delete(n),
        s ? (o[n] = !0) : delete o[n],
        nv({ disabledLocalVideos: o }, t, i),
        ts.eachConnection((e) => e.setLocalVideoDisabled(n, o[n] ?? !1), t);
}
function nQ() {
    if (0 === tQ.size) return;
    let e = eH.x.DEFAULT,
        { disabledLocalVideos: t } = na(e);
    tQ.forEach((n) => {
        p()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            ts.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tQ.clear(),
        nv({ disabledLocalVideos: t }, e, !1);
}
function nJ() {
    let e = eH.x.DEFAULT,
        { videoToggleStateMap: t } = na(e);
    for (let [e, n] of Object.entries(t)) n === eG.bb8.AUTO_PROBING && delete t[e];
    nv({ videoToggleStateMap: t }, e, !1);
}
function n0(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === eD.default.getId()) return;
    let i = t === eH.x.STREAM ? eH.Cn : eH.Hz,
        { localVolumes: a } = na(t);
    r === i ? delete a[n] : (a[n] = r), nv({ localVolumes: a }, t), ts.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function n1(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: a } = na(t);
    (a[n] = { left: r, right: i }), nv({ localPans: a }, t), ts.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function n2(e) {
    let { context: t, mode: n, options: r } = e;
    nv({ mode: n, modeOptions: { ...r, updatedAt: Date.now() } }, t), ts.eachConnection(ns);
}
function n3(e) {
    let { volume: t } = e;
    nv({ inputVolume: no(t) }), ts.setInputVolume(t);
}
function n6(e) {
    let { volume: t } = e;
    nv({ outputVolume: t }), ts.setOutputVolume(t);
}
function n4(e) {
    let { id: t } = e;
    (t = nD(th, t)),
        (t_ = performance.now()),
        nv({ inputDeviceId: t }),
        ts.setAudioInputDevice(t),
        ts.eachConnection(nm),
        (l = void 0),
        (u = void 0),
        t5.stop(),
        (t4 = !1);
    let { resetSilenceWarningOnDeviceChange: n } = ea.A.getConfig({
        location: "MediaEngineStore.handleSetInputDevice",
    });
    n && ((tL = !1), o.reset());
}
function n5(e) {
    let { id: t } = e;
    nv({ outputDeviceId: (t = nD(tp, t)) }), ts.setAudioOutputDevice(t);
}
function n7(e) {
    let { id: t } = e;
    nv({ videoDeviceId: (t = nD(tm, t)) }), nc();
}
function n8(e) {
    let { inputProfile: t } = e;
    nv({ activeInputProfile: t });
    let n = na();
    ts.eachConnection((e) => {
        ns(e), nm(e);
    }),
        ts.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        ru();
}
function n9(e) {
    return tc !== e.required && ((tc = e.required), e.required || ts.interact(), !0);
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
        n = ts.getAudioSubsystem(),
        i = ts.getAudioLayer(),
        a = nD(th, t.inputDeviceId),
        s = th[a]?.name,
        o = (0, ep.A)(t.noiseCancellation, r.getSystemMicrophoneMode(), { location: "trackVoiceProcessing" });
    eS.default.track(eG.HAw.VOICE_PROCESSING, {
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
    ts.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), ru(), rn(e.location);
}
function ri(e) {
    rs(e.enabled);
}
function ra(e) {
    let t = nv({ sidechainCompressionStrength: e.strength });
    ts.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function rs(e) {
    let t = nv({ sidechainCompression: e });
    ts.setSidechainCompression(t.sidechainCompression);
}
function ro(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? t0.add(n) : t0.delete(n), rl(), ru();
}
function rl() {
    let e = !t0.has("voice_filter_preview") && !t0.has("mic_test");
    ts.setMaybePreprocessMute(e);
}
function ru() {
    let e = na(),
        t = t0.size > 0,
        n = e.inputDeviceId,
        r = ew.A.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        a = ew.A.hasNoiseSuppression(n) || e.noiseSuppression,
        s = nf(ew.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        o = e.noiseCancellation,
        l = null !== tF,
        u = t0.has("voice_filter") && 1 === t0.size;
    ts.setLoopback(t, {
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
    if (!ts.supports(eH.O5.VAAPI)) return;
    let e = 4098;
    if (window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let t = await window.DiscordNative.processUtils.getSystemInfo();
    (t.electronGPUInfo?.gpuDevice ?? []).some((t) => t.vendorId === e) &&
        ((t9 = !0), (t8 = ts.supports(eH.O5.GAMESCOPE_CAPTURE)));
}
function rd(e) {
    let t = nv({ noiseSuppression: e.enabled });
    ts.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), ru(), rn(e.location);
}
function r_(e) {
    let t = nv({ automaticGainControl: e.enabled });
    ts.eachConnection((e) => nh(e, t.automaticGainControl)), ru(), rn(e.location);
}
function rf(e) {
    let t = nv({ noiseCancellation: e.enabled });
    ts.eachConnection((e) => np(e, t.noiseCancellation)), ru(), rn(e.location);
}
function rh(e) {
    eh.A.setKrispModelOverride(e.model), (_ = e.model), ru();
}
function rp(e) {
    (0, eb.isWeb)() || ((tG = e.enabled), ts.setNoiseCancellationEnableStats?.(e.enabled));
}
function rm(e) {
    nv({ silenceWarning: e.enabled });
}
function rg(e) {
    ts.setDebugLogging(e.enabled);
}
function rE(e) {
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
function ry(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = nv({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r });
    ts.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function rS(e) {
    let { enabled: t } = e;
    nv({ qos: t }), ts.eachConnection((e) => e.setQoS(t));
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
    if (((tw = !0 !== tL && !t), t)) (tL = !0), (t4 = !1), t5.stop(), tx.stop();
    else if (na().mode === eG.TBI.VOICE_ACTIVITY && tL) {
        let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = ea.A.getConfig({
            location: "MediaEngineStore.handleInputDetected",
        });
        e &&
            t5.start(e4, () => {
                eS.default.track(eG.HAw.HARDWARE_MUTE_GUESSED, {
                    input_device_name: th[nD(th, na().inputDeviceId)]?.name,
                    rtc_connection_id: eP.A.getRTCConnectionId(),
                }),
                    (t4 = !0),
                    r.emitChange();
            }),
            null != t &&
                tx.start(t * eC.A.Millis.MINUTE, () => {
                    (tL = !1), o.reset();
                });
    }
}
function rN(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === tI) return !1;
    (tI = n), ts.eachConnection(nl);
}
function rR(e) {
    let { state: t, permissionType: n } = e,
        r = t === eV.hL.ACCEPTED;
    switch (n) {
        case eV.iL.AUDIO:
            (tX = !0), ts.eachConnection(nl);
            break;
        case eV.iL.CAMERA:
            !r && ty && nc(!1);
            break;
        default:
            return !1;
    }
}
function rO() {
    return tk || !1;
}
async function rD() {
    try {
        await eR.Ay.ensureModule("discord_krisp");
        let e = eR.Ay.requireModule("discord_krisp");
        (tk = !0),
            (c = e.getSdkVersion?.()),
            (d = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (tU = e), r.emitChange();
            }),
            r.emitChange();
    } catch (t) {
        eW.warn(`Failed to load Krisp module: ${t.message}`), eN.A.captureException(t);
        let e = eH.CO.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eH.CO.INITIALIZED : n;
        }
        eS.default.track(eG.HAw.VOICE_PROCESSING, { noise_canceller_error: e }), nv({ noiseCancellation: !1 });
    } finally {
        tM = !1;
    }
}
function rL() {
    return (0, eb.isWindows)() || (0, eb.isLinux)() || (0, eb.isMac)();
}
function rw() {
    !rL() || __OVERLAY__ || tM || tk
        ? (0, eb.isWeb)() && ts.supports(eH.O5.NOISE_CANCELLATION)
            ? ((tk = !0), r.emitChange())
            : (0, eb.isWeb)() && nv({ noiseCancellation: !1 })
        : ((tM = !0), rD());
}
function rx(e) {
    let { enabled: t } = e;
    eS.default.track(eG.HAw.VOICE_FILTER_PLAYBACK_TOGGLED, { active_voice_filter_id: tF ?? null, enabled: t }),
        nv({ voiceFilterPlaybackEnabled: t });
}
function rP(e) {
    let { newVoiceFilterId: t } = e;
    nv({ mostRecentlyRequestedVoiceFilter: t }), ts.eachConnection((e) => e.setVoiceFilterId(t));
}
function rM() {
    nv({ mostRecentlyRequestedVoiceFilter: null });
}
function rk(e) {
    let { voiceFilterId: t } = e;
    (tB = tF), (tj = tV), (tF = t), (tV = null === t ? null : Date.now());
}
function rU(e) {
    let t = e.bypassEnabled;
    nv({ bypassSystemInputProcessing: t }), ts.setAudioInputBypassSystemProcessing(t), rn(e.location);
}
function rG(e) {
    rF(e.subsystem);
}
function rF(e) {
    e === eH.rB.AUTOMATIC
        ? (nv({ automaticAudioSubsystem: !0 }), rV())
        : (nv({ automaticAudioSubsystem: !1 }), ts.setAudioSubsystem(e));
}
function rV() {
    ts.queueAudioSubsystem(eH.rB.EXPERIMENTAL);
}
function rB(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && nc(i, null), null != t || null == n)) {
        tP = !1;
        return;
    }
    if (tP) return;
    tP = !0;
    let a = na();
    (a.mute || a.deaf) && (nv({ deaf: !1, mute: !1 }), ts.eachConnection(nl));
}
function rj(e) {
    let { application: t } = e;
    tl.add(t.id);
}
function rH(e) {
    let { application: t } = e;
    tl.delete(t.id);
}
function rY(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (tu = !1), ts.eachConnection(nl);
                break;
            case "video":
                nc(!1);
        }
}
function rW(e) {
    (tu = e.enabled), e.unmute && nv({ mute: !1, deaf: !1 }), ts.eachConnection(nl);
}
function rK(e) {
    let { enabled: t } = e;
    ef.A.requestPermission(eV.iL.CAMERA), nc(t);
}
function r$(e) {
    let { sourceId: t, applicationName: n, quality: i } = e;
    if (!(0, L.Ao)() || null == b.A) return !1;
    let a = null,
        o = null,
        l = ev.A.getPidFromDesktopSource(t);
    ({ soundshareId: a, soundshareSession: o } = nU(l));
    let u = { desktopSource: { id: t, sourcePid: l, soundshareId: a, soundshareSession: o }, quality: i };
    null != s &&
        (ts.setClipsSource(null),
        (0, eb.isWindows)() && null != s.desktopSource.soundshareId && N.c1(s.desktopSource.soundshareId)),
        null != a && nG(a, o),
        (s = u);
    let c = nt("MediaEngineStore clips"),
        d = na().videoHook;
    ts.setClipsSource({
        desktopDescription: {
            id: s.desktopSource.id,
            soundshareId: s.desktopSource.soundshareId,
            useVideoHook: d,
            useGraphicsCapture: nE(),
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
function rz(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((s = null), ts.setClipsSource(null));
}
function rq(e) {
    let { settings: t } = e;
    if (t?.desktopSettings != null) {
        let e = null,
            n = null,
            { sourceId: r, sound: i } = t.desktopSettings,
            a = t.context ?? eH.x.DEFAULT,
            s = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
            o = !1 === i ? null : ev.A.getPidFromDesktopSource(r);
        eb.isPlatformEmbedded &&
            !0 === i &&
            (({ soundshareId: e, soundshareSession: n } = nU(o)), null != e && nG(e, n)),
            nu(a),
            nc(a === eH.x.STREAM && ty, {
                desktopSource: { id: r, sourcePid: o, soundshareId: e, soundshareSession: n },
                quality: { resolution: s.resolution, frameRate: s.frameRate },
            });
    } else if (t?.cameraSettings != null) {
        let e = t.context ?? eH.x.DEFAULT,
            { videoDeviceGuid: n, audioDeviceGuid: r } = t.cameraSettings,
            i = e === eH.x.STREAM && ty,
            a = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
        nc(i, {
            cameraSource: { videoDeviceGuid: n, audioDeviceGuid: r },
            quality: { resolution: a.resolution, frameRate: a.frameRate },
        });
    } else nc(ty, null);
}
function rX(e) {
    let { section: t } = e;
    return t === eG.nc_.VOICE && nN(), !1;
}
function rZ() {
    return ts.eachConnection(nm), !1;
}
function rQ(e) {
    let { enabled: t } = e,
        n = nv({ aecDumpEnabled: t });
    ts.setAecDump(n.aecDumpEnabled);
}
function rJ(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (to = Object.values(eH.x).reduce((e, n) => {
        let r = n,
            i = ti();
        return (e[r] = E().merge(i, t[r])), e;
    }, {})),
        S.w.set(eK, to),
        nb();
}
function r0(e) {
    let { state: t } = e,
        n = k.A.isEnabled();
    if (t === eG.g6G.BACKGROUND && ty && !n) (tO = !0), nc(!1);
    else {
        if (t !== eG.g6G.ACTIVE || !tO) return !1;
        (tO = !1), nc(!0);
    }
    return !0;
}
function r1(e) {
    ts.eachConnection((t) => t.setBitRate(e.bitrate));
}
function r2() {
    if ((!ty && null == a) || null != eP.A.getRTCConnectionId()) return !1;
    nc(!1, null);
}
function r3() {
    return !!tY && ((tY = !1), !0);
}
function r6(e) {
    ts.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function r4(e) {
    let { settings: t } = e;
    ts.applyMediaFilterSettings(t).finally(() => {
        (tW = !1), r.emitChange();
    });
}
function r5() {
    tW = !0;
}
function r7() {
    tW = !1;
}
function r8(e) {
    t6 = e.enabled;
}
function r9() {
    if ((0, eb.isDesktop)() && eb.isPlatformEmbedded && !ne) {
        ne = !0;
        let e = async () => {
            let t = await new Promise((e) => {
                eR.Ay.pollQueueMetrics((t) => {
                    e(t);
                });
            });
            t.periodMs = eH.tl;
            let n = it(t);
            null !== n && eS.default.track(eG.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, eH.tl);
        };
        setTimeout(e, eH.tl);
    }
}
class ie extends T.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        ng(),
            nS(),
            rw(),
            nJ(),
            r9(),
            (0, eb.isWindows)() && eb.isPlatformEmbedded && n_(),
            (t1 = {
                [eH.O5.VIDEO]: ts.supports(eH.O5.VIDEO),
                [eH.O5.DESKTOP_CAPTURE]: ts.supports(eH.O5.DESKTOP_CAPTURE),
                [eH.O5.HYBRID_VIDEO]: ts.supports(eH.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eD.default, eL.A, ew.A, ex.A, O.A, M.A, eP.A, U.Ay, em.A, eA.A, ek.default, eU.A, ey.A);
    }
    supports(e) {
        return ts.supports(e);
    }
    supportsInApp(e) {
        return t1[e] || ts.supports(e);
    }
    isSupported() {
        return ts.supported();
    }
    isNoiseSuppressionSupported() {
        return ts.supports(eH.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return rO();
    }
    isNoiseCancellationError() {
        return tY;
    }
    isAutomaticGainControlSupported() {
        return ts.supports(eH.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !ny() && (ts.supports(eH.O5.LEGACY_AUDIO_SUBSYSTEM) || ts.supports(eH.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return ts.supports(eH.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === ts.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return rO();
    }
    isAecDumpSupported() {
        return ts.supports(eH.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return ts.supports(eH.O5.VIDEO) && ts.supports(eH.O5.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        return ex.A.getChannel(tH)?.type !== eG.rbe.GUILD_STAGE_VOICE && e5 && Z.A.simulcastEnabled();
    }
    isVideoDecoderFallbackEnabled() {
        return tq;
    }
    getAecDump() {
        return na().aecDumpEnabled;
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
        return tG;
    }
    isEnabled() {
        return tu;
    }
    isMute() {
        return this.isSelfMute() || tE;
    }
    isDeaf() {
        return this.isSelfDeaf() || tT;
    }
    hasContext(e) {
        return null != to[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eH.x.DEFAULT;
        return e === eH.x.DEFAULT && tA;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eH.x.DEFAULT;
        return (
            !this.isEnabled() ||
            na(e).mute ||
            !ef.A.didHavePermission(eV.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eH.x.DEFAULT && tI)
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
            t = t4 && "voice_isolation" !== this.getSystemMicrophoneMode() && na(e).mode === eG.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (ew.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return t6;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eH.x.DEFAULT;
        return !this.isSupported() || na(e).deaf;
    }
    isVideoEnabled() {
        return ty && tD;
    }
    isVideoAvailable() {
        return Object.values(tm).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eH.x.STREAM;
        return td === e && null != a;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eH.x.STREAM;
        return td === e && null != a && a.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eH.x.DEFAULT;
        return e !== eD.default.getId() && (na(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return ts.supports(eH.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eH.x.DEFAULT;
        return na(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eH.x.DEFAULT;
        return na(t).videoToggleStateMap[e] ?? eG.bb8.NONE;
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
        return tW;
    }
    isNativeAudioPermissionReady() {
        return tX;
    }
    getGoLiveSource() {
        return a;
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
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eH.x.DEFAULT,
            n = na(t).localPans[e];
        return null != n ? n : eQ;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eH.x.DEFAULT,
            n = t === eH.x.STREAM ? eH.Cn : eH.Hz,
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
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eH.x.DEFAULT;
        return na(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eH.x.DEFAULT;
        return na(e).modeOptions;
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
        return tj;
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
            E().each(to, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === eG.TBI.PUSH_TO_TALK && tl.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nD(th, na().inputDeviceId);
    }
    getOutputDeviceId() {
        return nD(tp, na().outputDeviceId);
    }
    getVideoDeviceId() {
        return nD(tm, na().videoDeviceId);
    }
    getInputDevices() {
        return th;
    }
    getOutputDevices() {
        return tp;
    }
    getVideoDevices() {
        return tm;
    }
    getEchoCancellation() {
        let e = na();
        return ew.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return ts.supports(eH.O5.SIDECHAIN_COMPRESSION) && na().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return na().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return na().h265Enabled;
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
        return ts.getDebugLogging();
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
        return nT() && na().automaticAudioSubsystem ? eH.rB.AUTOMATIC : ts.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return ts.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return na().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === ej.my.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eH.x.DEFAULT;
        return na(e);
    }
    getState() {
        return {
            settingsByContext: to,
            inputDevices: th,
            outputDevices: tp,
            appSupported: t1,
            krispModuleLoaded: tk,
            krispVersion: c,
            krispSuppressionLevel: d,
            goLiveSource: a,
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
        return eb.isPlatformEmbedded || this.getMode() !== eG.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        ts.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return tc;
    }
    getVideoHook() {
        return na().videoHook;
    }
    supportsVideoHook() {
        return ts.supports(eH.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = na().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return ts.supports(eH.O5.EXPERIMENTAL_SOUNDSHARE) && I().satisfies(b.A?.os.release, eF.$x);
    }
    supportsHookSoundshare() {
        return (0, eb.isWindows)() && ts.supports(eH.O5.SOUNDSHARE) && I().satisfies(b.A?.os.release, eF.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = na().useSystemScreensharePicker,
            n = (0, eb.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return ts.supports(eH.O5.NATIVE_SCREENSHARE_PICKER);
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
        return tN;
    }
    getKrispModelOverride() {
        return _;
    }
    getKrispModels() {
        return tU;
    }
    getKrispVadActivationThreshold() {
        return na().modeOptions.vadKrispActivationThreshold ?? eZ;
    }
    hasActiveCallKitCall() {
        return t7;
    }
    setHasActiveCallKitCall(e) {
        t7 = e;
    }
    supportsScreenSoundshare() {
        return (0, eb.isMac)()
            ? ts.supports(eH.O5.SOUNDSHARE) && I().satisfies(b.A?.os.release, eF.P$) && nI()
            : (0, eb.isWindows)()
              ? ts.supports(eH.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, eb.isLinux)() && ts.supports(eH.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        return (0, eb.isWindows)()
            ? this.getInputDevices()[this.getInputDeviceId()]?.effects?.find((e) => e === e7)
            : (0, eb.isMac)() || (0, eb.isIOS)()
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
            (0, eb.isWeb)() &&
                (e.fetchDave = ei.f1.getCurrentConfig({
                    location: "MediaEngineStore fetchAsyncResources",
                }).loadWasmModule),
            ts.fetchAsyncResources(e)
        );
    }
    startDavePreload() {
        if (!tK && ((tK = !0), (0, eb.isWeb)())) {
            let e = { fetchDave: !0 };
            ts.fetchAsyncResources(e).catch((e) => {
                eW.warn("DAVE preload failed:", e), eN.A.captureException(e);
            });
        }
    }
    getSupportedSecureFramesProtocolVersion() {
        if ((0, eb.isWeb)()) {
            let { useWasmModule: e } = ei.f1.getCurrentConfig({
                location: "MediaEngineStore getSupportedSecureFramesProtocolVersion",
            });
            if (!e) return 0;
        }
        let e = ts.getSupportedSecureFramesProtocolVersion();
        114 === e && (e = 1);
        let t = ei.ex.getCurrentConfig({ location: "MediaEngineStore" }),
            n = ei.a.getConfig({ location: "MediaEngineStore" });
        return (t.canSupportDaveProtocol || (n.allowOptIn && em.A.getPersistentCodesEnabled())) &&
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
(r = new ie(C.h, {
    VOICE_CHANNEL_SELECT: rB,
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
    AUDIO_SET_SUBSYSTEM: rG,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rU,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rW,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rK,
    MEDIA_ENGINE_PERMISSION: rY,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rq,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: n7,
    MEDIA_ENGINE_INTERACTION_REQUIRED: n9,
    USER_SETTINGS_MODAL_INIT: rX,
    USER_SETTINGS_MODAL_SET_SECTION: rX,
    CERTIFIED_DEVICES_SET: rZ,
    RPC_APP_CONNECTED: rj,
    RPC_APP_DISCONNECTED: rH,
    OVERLAY_INITIALIZE: nV,
    APP_STATE_UPDATE: r0,
    SET_CHANNEL_BITRATE: r1,
    SET_VAD_PERMISSION: rN,
    SET_NATIVE_PERMISSION: rR,
    SET_CHANNEL_VIDEO_QUALITY_MODE: r6,
    MEDIA_ENGINE_SET_AEC_DUMP: rQ,
    MEDIA_ENGINE_RESET_SETTINGS: rJ,
    CHANNEL_DELETE: r2,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: r3,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: r4,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: r5,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: r7,
    USER_SETTINGS_PROTO_UPDATE: nz,
    CLIPS_INIT: r$,
    CLIPS_SETTINGS_UPDATE: rz,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: r8,
    VOICE_FILTER_REQUEST_SWITCH: rP,
    VOICE_FILTER_LOOPBACK_TOGGLE: rx,
    VOICE_FILTER_APPLIED: rk,
    VOICE_FILTER_DOWNLOAD_FAILED: rM,
    VOICE_FILTER_APPLY_FAILED: rM,
})),
    (o = new ee.A(ts, r));
let ir = r;
