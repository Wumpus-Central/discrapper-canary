"use strict";
let r, i, a, s, o, l, u, c, d, _, f;
n.d(t, { Ay: () => io }), n(323874), n(14289), n(35956), n(321073), n(790599);
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
    e8 = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2",
    e9 = "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f",
    te = 0,
    tt = null;
function tn() {
    if (!(0, eb.isIOS)() || null == tt) return !1;
    let e = tt();
    if (null == e || !e.startsWith("ARM64_")) return !1;
    let t = e.substring(6);
    return ("T" === t[0] || "S" === t[0]) && parseInt(t.substring(1), 10) >= 8122;
}
let tr = null;
async function ti() {
    if (!(0, eb.isMac)() || b.A?.os.arch !== "arm64" || b.A?.processUtils?.getSystemInfo == null) {
        tr = !1;
        return;
    }
    let e = await b.A.processUtils.getSystemInfo(),
        t = (e.cpus?.[0]?.model ?? "").match(/Apple M(\d+)/);
    if (null == t) {
        tr = !0;
        return;
    }
    tr = parseInt(t[1], 10) >= 3;
}
function ta() {
    return !0 === tr;
}
function ts() {
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
        videoHook: tl.supports(eH.O5.VIDEO_HOOK),
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
let to = {
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
    tl = (0, y.hB)((0, y.WI)());
eW.enableNativeLogger(!0);
let tu = {},
    tc = new Set([eH.x.DEFAULT]),
    td = tl.supports(eH.O5.AUTO_ENABLE),
    t_ = !1,
    tf = eH.x.STREAM,
    th = performance.now(),
    tp = null,
    tm = { [eH.dx]: nD("No Input Devices") },
    tg = { [eH.dx]: nD("No Output Devices") },
    tE = { [eH.dx]: nD("No Video Devices") },
    tA = new v.Ep(),
    tI = !1,
    tT = !1,
    ty = !1,
    tS = !1,
    tv = !1,
    tC = eH.qe,
    tb = eH.qe,
    tN = !1,
    tR = !1,
    tO = !1,
    tD = new v.Ep(),
    tL = !1,
    tw = !1,
    tx = !1,
    tP = !1,
    tM = new v.Ep(),
    tk = !1,
    tU = !1,
    tG = !1,
    tF = [],
    tV = !1,
    tB = null,
    tj = null,
    tH = null,
    tY = null,
    tW = null,
    tK = !1,
    t$ = !1,
    tz = !1,
    tq = null,
    tX = null,
    tZ = !1,
    tQ = !1;
ef.A.hasPermission(eV.iL.AUDIO, { showAuthorizationError: !1 }),
    ef.A.hasPermission(eV.iL.CAMERA, { showAuthorizationError: !1 });
let tJ = !1,
    t0 = new Set(),
    t1 = tJ,
    t2 = new Set(),
    t3 = {},
    t6 = null,
    t4 = null,
    t5 = !0,
    t7 = !1,
    t8 = new v.Ep(),
    t9 = !1,
    ne = !1,
    nt = !1,
    nn = !1;
function nr(e) {
    return (0, X.p)({ location: e }).hdrCaptureMode;
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
function na() {
    return null != tX ? tX : "u" > typeof window ? (tX = ni().then((e) => ((tq = e), e))) : Promise.resolve(!1);
}
function ns() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eH.x.DEFAULT,
        t = tu[e];
    return null == t && ((t = ts()), (tu[e] = t)), t;
}
function no() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eH.x.DEFAULT,
        t = ns(e),
        n = to[t.activeInputProfile ?? ej.my.CUSTOM],
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
function nl(e) {
    let t = no(e.context),
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
        vadUseKrisp: (!!i || t.modeOptions.vadUseKrisp) && rL(),
        vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? eZ,
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        vadDuringPreProcess: t.modeOptions.vadDuringPreProcess ?? !1,
        pttReleaseDelay: Math.round(t.modeOptions.delay),
    });
}
function nu(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eH.Hz;
    return E().clamp(e, 0, t);
}
function nc(e) {
    let t = no(e.context),
        n = !td || t.mute || t.deaf;
    e.context === eH.x.DEFAULT
        ? (n = n || tI || tT || ty || !ef.A.didHavePermission(eV.iL.AUDIO))
        : e.context === eH.x.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eH.x.DEFAULT && R.A.updateNativeMute();
}
function nd(e) {
    e !== tf && (null != a && tl.setGoLiveSource(null, tf), (tf = e));
}
function n_() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tv,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        n = a;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, eb.isWindows)() && N.c1(n.desktopSource.soundshareId),
            tl.setGoLiveSource(null, tf)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            tl.setGoLiveSource(null, tf),
        tv || e)
    ) {
        let t = no().videoDeviceId;
        tv && t === eH.dx && tb === eH.dx && tC !== eH.qe ? (t = tC) : (tb = t),
            (tC = (tv = e) ? nw(tE, t) : eH.qe),
            tl.setVideoInputDevice(tC);
    }
    if (((a = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = nr("MediaEngineStore go live"),
                i = no().videoHook,
                a = nI(),
                s = a ? (nT() ? eF.zl : eF.eg) : 0,
                o = (0, eb.isWindows)() && (0, eo.b)("updateVideo").enabled,
                l = !1;
            (0, eb.isWindows)() && t4 && (l = eu.q.getConfig({ location: "updateVideo" }).enabled),
                tl.setGoLiveSource(
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
                            allowScreenCaptureKit: ny(),
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
function nf(e) {
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
function nh() {
    null === tp &&
        tl
            .getCodecSurvey()
            .then((e) => {
                try {
                    let t = JSON.parse(e);
                    if (null == t || null == t.available_video_decoders) throw Error("decoder survey is not available");
                    tp = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                } catch (e) {
                    eW.error("Failed to parse codec survey", e), (tp = !1);
                }
            })
            .catch((e) => {
                eW.error("Failed to get codec survey", e), (tp = !1);
            })
            .finally(() => {
                C.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
            });
}
function np(e) {
    let t = (0, F.F)({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function nm(e, t) {
    e.setAutomaticGainControl(np(t));
}
function ng(e, t) {
    let n = (0, ep.A)(t, r.getSystemMicrophoneMode(), { location: "setNoiseCancellation" });
    n !== t && eW.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: i } = (0, F.F)({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(i);
    let { noiseCancellationAfterProcessing: a, vadAfterWebrtc: s } = (0, et.$)({ location: "setNoiseCancellation" });
    e.setNoiseCancellationAfterProcessing(a), e.setVADAfterWebrtc(s);
}
function nE(e) {
    let t = no(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(ew.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(ew.A.hasNoiseSuppression(n) || t.noiseSuppression),
        nm(e, ew.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        ng(e, t.noiseCancellation),
        e.setVoiceFilterId(tB),
        (0, eb.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function nA() {
    tA.start(e6, () => {
        eW.error("Device enumeration timed out"), eS.default.track(eG.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
    }),
        tl.on(y.bg.Connection, (e) => {
            nl(e), nc(e), nE(e);
            let t = no();
            e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
                e.setQoS(t.qos);
            let n = (0, J.K)({ location: "setupMediaEngine" }).treatment;
            (tZ = n === J.c.NoSoftwareDecodeWithFallback),
                n === J.c.NoSoftwareDecode || n === J.c.NoSoftwareDecodeWithFallback
                    ? (e.setExperimentFlag(eH.fd.H265_HARDWARE_ONLY, !0),
                      (0, eb.isWindows)()
                          ? na().then((t) => {
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
                let t = nP(tg);
                e.setSoundshareDiscardRearChannels(t);
                let { simulcastEnabled: n, lqStreamBitrate: r } = Z.A.getConfig();
                e.configureGoLiveSimulcast(n, r);
            }
            if ((0, eb.isWindows)())
                e.setExperimentFlag(eH.fd.SIGNAL_AV1, !0), e.setExperimentFlag(eH.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            else if ((0, eb.isMac)()) {
                if ((e.setExperimentFlag(eH.fd.SIGNAL_AV1_DECODE, !0), ta())) {
                    let { enabled: t } = (0, B.t)("MediaEngineStore");
                    t && e.setExperimentFlag(eH.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                }
            } else if ((0, eb.isLinux)()) e.setExperimentFlag(eH.fd.SIGNAL_AV1_DECODE, !0);
            else if ((0, eb.isIOS)() && tn()) {
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
                    t6?.startsWith("AMD") &&
                    (0, ec.F)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eH.fd.WMF_GPU_ENCODE, !0),
                (0, eb.isWindows)() &&
                    t6?.startsWith("Intel") &&
                    (0, ed.J)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eH.fd.WMF_GPU_ENCODE, !0),
                (0, eb.isWindows)() &&
                    t6?.startsWith("Qualcomm") &&
                    (0, ec.F)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eH.fd.WMF_GPU_ENCODE, !0),
                tl.setHasFullbandPerformance((0, x.A)()),
                e.setRemoteAudioHistory(1e3),
                (0, D.A)(r))
            ) {
                let { enableViewerClipping: t } = el.A.getCurrentConfig(
                    { location: "f627ab_15" },
                    { autoTrackExposure: !1 },
                );
                e.setViewerSideClip(t), e.setClipsKeyFrameInterval(eH.X1);
            }
            for (let n of ((t = no(e.context)), e.setPostponeDecodeLevel(e2), Object.keys(t.localMutes)))
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
                    ((tR = !1),
                    (tO = !1),
                    e.on(y.yq.SpeakingWhileMuted, () => {
                        (tR = !0),
                            (tO = !0),
                            r.emitChange(),
                            tD.stop(),
                            tD.start(e3, () => {
                                (tO = !1), r.emitChange();
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
                        (0, P.QW)({ type: P.iy.NOISE_CANCELLER_ERROR, underlyingError: nf(e) }),
                        (tK = !0),
                        eS.default.track(eG.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        C.h.dispatch({ type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: !0 }),
                        C.h.dispatch({ type: "AUDIO_SET_NOISE_CANCELLATION", enabled: !1 }),
                        C.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e });
                }),
                e.on(y.yq.VoiceActivityDetectorError, (e) => {
                    eW.warn(`voiceactivitydetectorerror event: ${e}`),
                        (0, P.QW)({ type: P.iy.NOISE_CANCELLER_ERROR, underlyingError: nf(e) }),
                        eS.default.track(eG.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        C.h.dispatch({
                            type: "AUDIO_SET_MODE",
                            context: eH.x.DEFAULT,
                            mode: eG.TBI.VOICE_ACTIVITY,
                            options: { ...no(eH.x.DEFAULT).modeOptions, vadUseKrisp: !1 },
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
                    tl.supports(eH.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                    tl.setAsyncVideoInputDeviceInit((0, Y.v)("setupMediaEngine").enabled);
        }),
        tl.on(y.bg.DeviceChange, (e, t, n) => {
            tA.stop(),
                C.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
        }),
        tl.on(y.bg.VolumeChange, (e, t) => {
            C.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
        }),
        tl.on(y.bg.DesktopSourceEnd, (e, t) => {
            C.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
        }),
        tl.on(y.bg.AudioPermission, (e) => {
            (tQ = !0), C.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
        }),
        tl.on(y.bg.VideoPermission, (e) => {
            C.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
        }),
        tl.on(y.bg.WatchdogTimeout, async () => {
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
        tl.on(y.bg.VideoInputInitialized, (e) => {
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
        tl.on(y.bg.AudioInputInitialized, (e) => {
            eS.default.track(eG.HAw.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * eC.A.Millis.SECOND),
                rtc_connection_id: eP.A.getRTCConnectionId(),
            });
        }),
        tl.on(y.bg.ClipsRecordingRestartNeeded, () => {
            C.h.dispatch({ type: "CLIPS_RESTART" });
        }),
        tl.on(y.bg.ClipsInitFailure, (e, t) => {
            C.h.wait(() => {
                C.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t });
            });
        }),
        tl.on(y.bg.ClipsRecordingEnded, (e, t) => {
            s?.desktopSource?.id === e && (null != t && a?.desktopSource?.soundshareId !== t && N.c1(t), (s = null));
        }),
        tl.on(y.bg.NativeScreenSharePickerUpdate, (e, t) => {
            C.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
        }),
        tl.on(y.bg.NativeScreenSharePickerCancel, (e) => {
            C.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
        }),
        tl.on(y.bg.NativeScreenSharePickerError, (e) => {
            C.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
        }),
        tl.on(y.bg.AudioDeviceModuleError, (e, t, n) => {
            eS.default.track(eG.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
        }),
        tl.on(y.bg.VideoCodecError, (e) => {
            let t = "encode" === e.mode ? P.iy.VIDEO_ENCODE_ERROR : P.iy.VIDEO_DECODE_ERROR,
                n = { videoCodec: e.codecStandard, errorMessage: e.message };
            (0, P.QW)(
                t === P.iy.VIDEO_ENCODE_ERROR
                    ? { type: t, ...n, videoEncoder: e.implName }
                    : { type: t, ...n, videoDecoder: e.implName },
            );
        }),
        tl.on(y.bg.ConnectionStats, (e) => {
            C.h.dispatch({
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
        tl.on(y.bg.VoiceQueueMetrics, (e) => {
            let t = is(e);
            null !== t && eS.default.track(eG.HAw.VOICE_QUEUE_METRICS, t);
        }),
        tl.setOnVideoContainerResized((e, t, n) => {
            C.h.wait(() =>
                C.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
            );
        }),
        ti(),
        rc(),
        r_(),
        tl.supports(eH.O5.ASYNC_CLIPS_SOURCE_DEINIT) &&
            tl.setAsyncClipsSourceDeinit((0, W.V)("setupMediaEngine").enabled),
        o.reset(),
        (0, eM.w)().then((e) => {
            null != e && ((t6 = e.gpu_brand), (t4 = e.has_intel_hybrid_igpu));
        }),
        tl.on(y.bg.SystemMicrophoneModeChange, (e) => {
            (f = e), tl.eachConnection(nE);
        });
}
function nI() {
    return (0, eb.isWindows)() && I().satisfies(b.A?.os.release, eF.yg);
}
function nT() {
    return (0, eb.isWindows)() && I().satisfies(b.A?.os.release, eF.fG);
}
function ny() {
    return (0, eb.isMac)() && tl.supports(eH.O5.SCREEN_CAPTURE_KIT) && I().satisfies(b.A?.os.release, eF.e);
}
function nS() {
    return (
        (0, eb.isWindows)() &&
        tl.supports(eH.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        tl.supports(eH.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nv() {
    return tl.supports(eH.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function nC() {
    let e = S.w.get("audio");
    null != e && (S.w.set(eK, { [eH.x.DEFAULT]: e }), S.w.remove("audio")),
        (tu = S.w.get(eK) ?? {}),
        E().each(tu, (e) => {
            E().defaultsDeep(e, ts()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, eO.OH)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== e$ &&
                    ((e.vadUseKrispSettingVersion = e$), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                e.vadThrehsoldMigrated ||
                    ((e.vadThrehsoldMigrated = !0), e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = e1)),
                tl.supports(eH.O5.SIDECHAIN_COMPRESSION) &&
                    e.sidechainCompressionSettingVersion < eX &&
                    ((e.sidechainCompressionSettingVersion = eX), (e.sidechainCompression = !0)),
                (0, eb.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== eq &&
                      ((e.ncUseKrispjsSettingVersion = eq), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== ez &&
                      ((e.ncUseKrispSettingVersion = ez), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
        }),
        nR();
}
function nb(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eH.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = ns(t);
    return Object.assign(r, e), !__OVERLAY__ && n && S.w.set(eK, tu), r;
}
function nN() {
    S.w.remove(eK), location.reload();
}
function nR() {
    let e = no();
    tl.setAudioInputDevice(e.inputDeviceId),
        tl.setAudioOutputDevice(e.outputDeviceId),
        n_(),
        tl.setInputVolume(e.inputVolume),
        tl.setOutputVolume(e.outputVolume),
        tl.setAecDump(e.aecDumpEnabled),
        tl.setSidechainCompression(e.sidechainCompression),
        tl.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        tl.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing);
}
function nO() {
    td || tl.enable().then(() => C.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nD(e) {
    return { id: eH.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
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
    let n = e[t] ?? e[eH.dx] ?? E()(e).values().first();
    return null != n ? n.id : t;
}
function nx(e) {
    let t = tm;
    if (((tm = nL(e, eY.intl.string(eY.t["/QIjDA"]))), !E().isEqual(tm, t))) {
        let e = no(),
            t = nw(tm, e.inputDeviceId);
        tl.setAudioInputDevice(t), tl.eachConnection(nE);
    }
}
function nP(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nM(e) {
    tl.eachConnection((t) => {
        t.context === eH.x.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function nk(e) {
    let t = tg;
    if (((tg = nL(e, eY.intl.string(eY.t.xlUg0v))), !E().isEqual(tg, t))) {
        let e = no(),
            n = nw(tg, e.outputDeviceId);
        tl.setAudioOutputDevice(n);
        let r = nP(t),
            i = nP(tg);
        r !== i && nM(i);
    }
}
function nU(e) {
    tw = e.length > 0;
    let t = tE;
    if (((tE = nL(e, eY.intl.string(eY.t.WKWARY))), tv && !E().isEqual(tE, t))) {
        let e = void 0 !== tE[tC],
            n = tC === eH.dx && t[eH.dx]?.disabled;
        n_(e || n);
    }
}
function nG() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = eA.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let r = n === eB.W.USER ? eH.x.DEFAULT : eH.x.STREAM,
            i = r === eH.x.STREAM ? eH.Cn : eH.Hz,
            a = t[n] ?? {},
            { localMutes: s, localVolumes: o } = no(r);
        for (let [e, t] of Object.entries(a))
            null == (0, eg.tM)(r, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== i ? (o[e] = t.volume) : delete o[e],
                tl.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, r));
        if (e)
            for (let e of new Set([...Object.keys(s), ...Object.keys(o)]))
                null == a[e] &&
                    (delete s[e],
                    delete o[e],
                    tl.eachConnection((t) => {
                        t.setLocalVolume(e, i), t.setLocalMute(e, !1);
                    }, r));
        nb({ localMutes: s, localVolumes: o }, r);
    }
}
function nF(e) {
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
function nV(e, t) {
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
function nB(e) {
    (i = e.sessionId), (tI = !1), (tS = !1);
    let t = no();
    if (
        (nS() && (nv() ? rH(eH.rB.AUTOMATIC) : t.automaticAudioSubsystem && rY()),
        tl.supports(eH.O5.OFFLOAD_ADM_CONTROLS))
    ) {
        let e = !1;
        (0, eb.isDesktop)()
            ? (e = (0, j.i)({ location: "handleConnectionOpen" }).enabled)
            : ((0, eb.isIOS)() || (0, eb.isAndroid)()) && (e = (0, H.Y)({ location: "handleConnectionOpen" }).enabled),
            tl.setOffloadAdmControls(e);
    }
    (0, eT.Lb)({ location: "MediaEngineStore", autoTrackExposure: !1 }) &&
        null !== t.mostRecentlyRequestedVoiceFilter &&
        (0, eb.isDesktop)() &&
        (ey.A.getLastInitAttemptMayHaveCrashed()
            ? (C.h.dispatch({ type: "AUDIO_SET_SELF_MUTE", mute: !0, context: eH.x.DEFAULT, playSoundEffect: !0 }),
              nb({ mostRecentlyRequestedVoiceFilter: null }))
            : n(342887).md()),
        nG();
}
function nj(e) {
    let { mediaEngineState: t } = e;
    (tu = t.settingsByContext),
        (tm = t.inputDevices),
        (tg = t.outputDevices),
        (t3 = t.appSupported),
        (tG = t.krispModuleLoaded),
        (c = t.krispVersion),
        (tf = t.goLiveContext);
}
function nH() {
    i = null;
}
function nY() {
    if ((0, eb.isWeb)()) {
        let e = ei.f1.getCurrentConfig({ location: "MediaEngineStore handlePostConnectionOpen" });
        e.loadWasmModule && e.preload && r.startDavePreload();
    }
    return !1;
}
function nW(e) {
    switch (e.state) {
        case eG.S7L.CONNECTING:
            nO();
            break;
        case eG.S7L.RTC_CONNECTING:
            (tP = !1), (l = void 0), (u = void 0), (tx = !1), (t7 = !1), t8.stop(), tM.stop(), o.reset();
            break;
        case eG.S7L.RTC_CONNECTED:
            n_();
            break;
        case eG.S7L.DISCONNECTED:
            n0(), n1();
    }
}
function nK(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (tI = t.mute || t.suppress), (tS = t.deaf), tl.eachConnection(nc);
            let e = null != t.guildId && null != t.channelId && null != tW && tW !== t.channelId,
                n = !tk && null == t.channelId;
            return n_(!e && !n && tv), (tW = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== eD.default.getId() || null != eP.A.getChannelId() || n_(!1, null), e;
    }, !1);
}
function n$(e) {
    let { mute: t } = e;
    (tT = t), tl.eachConnection(nc);
}
function nz(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = no(t);
    if (t === eH.x.DEFAULT && (ef.A.requestPermission(eV.iL.AUDIO), ty)) return !1;
    (r = !i && !r) || (i = !1), n || (tN = !0), nb({ mute: r, deaf: i }, t), tl.eachConnection(nc);
}
function nq(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    nb({ mute: n }, t), r || (tN = !0), tl.eachConnection(nc);
}
function nX(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== eB.oD.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    nG(!0);
}
function nZ(e) {
    let { context: t } = e;
    nb({ deaf: !no(t).deaf }, t), tl.eachConnection(nc);
}
function nQ(e) {
    let { context: t, userId: n } = e;
    if (n === eD.default.getId()) return;
    let { localMutes: r } = no(t);
    r[n] ? delete r[n] : (r[n] = !0),
        nb({ localMutes: r }, t),
        tl.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nJ(e) {
    let { context: t, userId: n, videoToggleState: r, persist: i, isAutomatic: a } = e;
    p()(!(i && a), "These are not allowed to both be true.");
    let s = r === eG.bb8.DISABLED,
        { disabledLocalVideos: o } = no(t),
        l = o[n] ?? !1,
        u = t0.has(n),
        c = r === eG.bb8.AUTO_ENABLED || r === eG.bb8.MANUAL_ENABLED;
    eW.info(`disableVideo=${s} currentlyDisabled=${l} currentlyAutoDisabled=${u}, isVideoShown=${c}`),
        p()(!(u && !l), "If you are auto-disabled, then you are also disabled.");
    let d = s !== l,
        _ = t === eH.x.DEFAULT,
        f = a && d && _,
        h = i && d && _;
    eW.info(`changed=${d} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${f} isManualToggleByUser=${h}`);
    let { videoToggleStateMap: g } = no(t);
    if (
        (g[n] === eG.bb8.AUTO_PROBING &&
            r === eG.bb8.AUTO_ENABLED &&
            (0, e_.A)(n, s ? eH.Al.AUTO_DISABLE : eH.Al.AUTO_ENABLE, c),
        (g[n] = r),
        nb({ videoToggleStateMap: g }, t, i),
        r === eG.bb8.AUTO_PROBING
            ? eP.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
            : eP.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
        t1 ||
            (eW.info(`isAutoDisableAllowed=${t1} - disabling VideoHealthManager`),
            eP.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
        f)
    ) {
        if ((!s && !u) || (s && !t1)) return;
        (0, e_.A)(n, s ? eH.Al.AUTO_DISABLE : eH.Al.AUTO_ENABLE, c), s ? t0.add(n) : t0.delete(n);
    } else
        h &&
            (u && !s
                ? (eW.info("disallowing auto-disable for this session because of manual override by user"),
                  (t1 = !1),
                  eP.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                  (0, e_.A)(n, eH.Al.MANUAL_REENABLE, c))
                : (0, e_.A)(n, s ? eH.Al.MANUAL_DISABLE : eH.Al.MANUAL_ENABLE, c));
    _ && !s && t0.delete(n),
        s ? (o[n] = !0) : delete o[n],
        nb({ disabledLocalVideos: o }, t, i),
        tl.eachConnection((e) => e.setLocalVideoDisabled(n, o[n] ?? !1), t);
}
function n0() {
    if (0 === t0.size) return;
    let e = eH.x.DEFAULT,
        { disabledLocalVideos: t } = no(e);
    t0.forEach((n) => {
        p()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            tl.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        t0.clear(),
        nb({ disabledLocalVideos: t }, e, !1);
}
function n1() {
    let e = eH.x.DEFAULT,
        { videoToggleStateMap: t } = no(e);
    for (let [e, n] of Object.entries(t)) n === eG.bb8.AUTO_PROBING && delete t[e];
    nb({ videoToggleStateMap: t }, e, !1);
}
function n2(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === eD.default.getId()) return;
    let i = t === eH.x.STREAM ? eH.Cn : eH.Hz,
        { localVolumes: a } = no(t);
    r === i ? delete a[n] : (a[n] = r), nb({ localVolumes: a }, t), tl.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function n3(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: a } = no(t);
    (a[n] = { left: r, right: i }), nb({ localPans: a }, t), tl.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function n6(e) {
    let { context: t, mode: n, options: r } = e;
    nb({ mode: n, modeOptions: { ...r, updatedAt: Date.now() } }, t), tl.eachConnection(nl);
}
function n4(e) {
    let { volume: t } = e;
    nb({ inputVolume: nu(t) }), tl.setInputVolume(t);
}
function n5(e) {
    let { volume: t } = e;
    nb({ outputVolume: t }), tl.setOutputVolume(t);
}
function n7(e) {
    let { id: t } = e;
    (t = nw(tm, t)),
        (th = performance.now()),
        nb({ inputDeviceId: t }),
        tl.setAudioInputDevice(t),
        tl.eachConnection(nE),
        (l = void 0),
        (u = void 0),
        t8.stop(),
        (t7 = !1);
    let { resetSilenceWarningOnDeviceChange: n } = ea.A.getConfig({
        location: "MediaEngineStore.handleSetInputDevice",
    });
    n && ((tx = !1), o.reset());
}
function n8(e) {
    let { id: t } = e;
    nb({ outputDeviceId: (t = nw(tg, t)) }), tl.setAudioOutputDevice(t);
}
function n9(e) {
    let { id: t } = e;
    nb({ videoDeviceId: (t = nw(tE, t)) }), n_();
}
function re(e) {
    let { inputProfile: t } = e;
    nb({ activeInputProfile: t });
    let n = no();
    tl.eachConnection((e) => {
        nl(e), nE(e);
    }),
        tl.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        rd();
}
function rt(e) {
    return t_ !== e.required && ((t_ = e.required), e.required || tl.interact(), !0);
}
function rn(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    nx(t), nk(n), nU(r);
}
function rr(e) {
    let { inputVolume: t, outputVolume: n } = e;
    nb({ inputVolume: nu(t), outputVolume: n });
}
function ri(e) {
    let t = no(),
        n = tl.getAudioSubsystem(),
        i = tl.getAudioLayer(),
        a = nw(tm, t.inputDeviceId),
        s = tm[a]?.name,
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
function ra(e) {
    let t = nb({ echoCancellation: e.enabled });
    tl.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), rd(), ri(e.location);
}
function rs(e) {
    rl(e.enabled);
}
function ro(e) {
    let t = nb({ sidechainCompressionStrength: e.strength });
    tl.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function rl(e) {
    let t = nb({ sidechainCompression: e });
    tl.setSidechainCompression(t.sidechainCompression);
}
function ru(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? t2.add(n) : t2.delete(n), rc(), rd();
}
function rc() {
    let e = !t2.has("voice_filter_preview") && !t2.has("mic_test");
    tl.setMaybePreprocessMute(e);
}
function rd() {
    let e = no(),
        t = t2.size > 0,
        n = e.inputDeviceId,
        r = ew.A.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        a = ew.A.hasNoiseSuppression(n) || e.noiseSuppression,
        s = np(ew.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        o = e.noiseCancellation,
        l = null !== tB,
        u = t2.has("voice_filter") && 1 === t2.size;
    tl.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: a,
        automaticGainControlConfig: s,
        noiseCancellation: o,
        voiceFilters: l,
        loopbackUseAudioMode: u,
    });
}
async function r_() {
    if (!tl.supports(eH.O5.VAAPI)) return;
    let e = 4098;
    if (window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let t = await window.DiscordNative.processUtils.getSystemInfo();
    (t.electronGPUInfo?.gpuDevice ?? []).some((t) => t.vendorId === e) &&
        ((nt = !0), (ne = tl.supports(eH.O5.GAMESCOPE_CAPTURE)));
}
function rf(e) {
    let t = nb({ noiseSuppression: e.enabled });
    tl.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), rd(), ri(e.location);
}
function rh(e) {
    let t = nb({ automaticGainControl: e.enabled });
    tl.eachConnection((e) => nm(e, t.automaticGainControl)), rd(), ri(e.location);
}
function rp(e) {
    let t = nb({ noiseCancellation: e.enabled });
    tl.eachConnection((e) => ng(e, t.noiseCancellation)), rd(), ri(e.location);
}
function rm(e) {
    eh.A.setKrispModelOverride(e.model), (_ = e.model), rd();
}
function rg(e) {
    (0, eb.isWeb)() || ((tV = e.enabled), tl.setNoiseCancellationEnableStats?.(e.enabled));
}
function rE(e) {
    nb({ silenceWarning: e.enabled });
}
function rA(e) {
    tl.setDebugLogging(e.enabled);
}
function rI(e) {
    let { level: t } = e;
    (d = t), eh.A.setKrispSuppressionLevel(t);
}
function rT(e) {
    nb({ videoHook: e.enabled });
}
function ry(e) {
    nb({ experimentalSoundshare2: e.enabled });
}
function rS(e) {
    let { enabled: t } = e;
    nb({ useSystemScreensharePicker: t });
}
function rv(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = nb({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r });
    tl.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function rC(e) {
    let { enabled: t } = e;
    nb({ qos: t }), tl.eachConnection((e) => e.setQoS(t));
}
function rb() {
    nN();
}
function rN(e) {
    let { osVolume: t, osMuted: n } = e;
    (u = t), (l = n);
}
function rR(e) {
    let { inputDetected: t } = e;
    if (null == t) return !1;
    if (((tP = !0 !== tx && !t), t)) (tx = !0), (t7 = !1), t8.stop(), tM.stop();
    else if (no().mode === eG.TBI.VOICE_ACTIVITY && tx) {
        let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = ea.A.getConfig({
            location: "MediaEngineStore.handleInputDetected",
        });
        e &&
            t8.start(e4, () => {
                eS.default.track(eG.HAw.HARDWARE_MUTE_GUESSED, {
                    input_device_name: tm[nw(tm, no().inputDeviceId)]?.name,
                    rtc_connection_id: eP.A.getRTCConnectionId(),
                }),
                    (t7 = !0),
                    r.emitChange();
            }),
            null != t &&
                tM.start(t * eC.A.Millis.MINUTE, () => {
                    (tx = !1), o.reset();
                });
    }
}
function rO(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === ty) return !1;
    (ty = n), tl.eachConnection(nc);
}
function rD(e) {
    let { state: t, permissionType: n } = e,
        r = t === eV.hL.ACCEPTED;
    switch (n) {
        case eV.iL.AUDIO:
            (tQ = !0), tl.eachConnection(nc);
            break;
        case eV.iL.CAMERA:
            !r && tv && n_(!1);
            break;
        default:
            return !1;
    }
}
function rL() {
    return tG || !1;
}
async function rw() {
    try {
        await eR.Ay.ensureModule("discord_krisp");
        let e = eR.Ay.requireModule("discord_krisp");
        (tG = !0),
            (c = e.getSdkVersion?.()),
            (d = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (tF = e), r.emitChange();
            }),
            r.emitChange();
    } catch (t) {
        eW.warn(`Failed to load Krisp module: ${t.message}`), eN.A.captureException(t);
        let e = eH.CO.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eH.CO.INITIALIZED : n;
        }
        eS.default.track(eG.HAw.VOICE_PROCESSING, { noise_canceller_error: e }), nb({ noiseCancellation: !1 });
    } finally {
        tU = !1;
    }
}
function rx() {
    return (0, eb.isWindows)() || (0, eb.isLinux)() || (0, eb.isMac)();
}
function rP() {
    !rx() || __OVERLAY__ || tU || tG
        ? (0, eb.isWeb)() && tl.supports(eH.O5.NOISE_CANCELLATION)
            ? ((tG = !0), r.emitChange())
            : (0, eb.isWeb)() && nb({ noiseCancellation: !1 })
        : ((tU = !0), rw());
}
async function rM() {
    try {
        let e,
            t = "",
            n = !1,
            r = URL.parse(e8);
        if (null === r) return void eW.log("OpenH264 URL ", r, " is invalid");
        let i = r.pathname.split("/"),
            a = i[i.length - 1].replace(".bz2", "");
        try {
            let t = await eR.Ay.downloadOpenH264(e8, a, e9, (e) => {
                eW.log("OpenH264 download status", e);
            });
            eW.log("OpenH264 is ready", t), (n = t.fetchedFromNetwork), (e = !0);
        } catch (n) {
            eW.error("OpenH264 download failed", n), (t = n.message), (e = !1);
        }
        if (
            (eS.default.track(eG.HAw.VIDEO_OPENH264_DOWNLOADED, {
                success: e,
                fetched_from_network: n,
                error_message: t,
            }),
            e)
        ) {
            let e = await eR.Ay.cleanupUnusedOpenH264Files([a]);
            eW.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        eW.error("OpenH264 download failed", e);
    }
}
function rk() {
    (0, eb.isLinux)() && rM();
}
function rU(e) {
    let { enabled: t } = e;
    eS.default.track(eG.HAw.VOICE_FILTER_PLAYBACK_TOGGLED, { active_voice_filter_id: tB ?? null, enabled: t }),
        nb({ voiceFilterPlaybackEnabled: t });
}
function rG(e) {
    let { newVoiceFilterId: t } = e;
    nb({ mostRecentlyRequestedVoiceFilter: t }), tl.eachConnection((e) => e.setVoiceFilterId(t));
}
function rF() {
    nb({ mostRecentlyRequestedVoiceFilter: null });
}
function rV(e) {
    let { voiceFilterId: t } = e;
    (tH = tB), (tY = tj), (tB = t), (tj = null === t ? null : Date.now());
}
function rB(e) {
    let t = e.bypassEnabled;
    nb({ bypassSystemInputProcessing: t }), tl.setAudioInputBypassSystemProcessing(t), ri(e.location);
}
function rj(e) {
    rH(e.subsystem);
}
function rH(e) {
    e === eH.rB.AUTOMATIC
        ? (nb({ automaticAudioSubsystem: !0 }), rY())
        : (nb({ automaticAudioSubsystem: !1 }), tl.setAudioSubsystem(e));
}
function rY() {
    tl.queueAudioSubsystem(eH.rB.EXPERIMENTAL);
}
function rW(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && n_(i, null), null != t || null == n)) {
        tk = !1;
        return;
    }
    if (tk) return;
    tk = !0;
    let a = no();
    (a.mute || a.deaf) && (nb({ deaf: !1, mute: !1 }), tl.eachConnection(nc));
}
function rK(e) {
    let { application: t } = e;
    tc.add(t.id);
}
function r$(e) {
    let { application: t } = e;
    tc.delete(t.id);
}
function rz(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (td = !1), tl.eachConnection(nc);
                break;
            case "video":
                n_(!1);
        }
}
function rq(e) {
    (td = e.enabled), e.unmute && nb({ mute: !1, deaf: !1 }), tl.eachConnection(nc);
}
function rX(e) {
    let { enabled: t } = e;
    ef.A.requestPermission(eV.iL.CAMERA), n_(t);
}
function rZ(e) {
    let { sourceId: t, applicationName: n, quality: i } = e;
    if (!(0, L.Ao)() || null == b.A) return !1;
    let a = null,
        o = null,
        l = ev.A.getPidFromDesktopSource(t);
    ({ soundshareId: a, soundshareSession: o } = nF(l));
    let u = { desktopSource: { id: t, sourcePid: l, soundshareId: a, soundshareSession: o }, quality: i };
    null != s &&
        (tl.setClipsSource(null),
        (0, eb.isWindows)() && null != s.desktopSource.soundshareId && N.c1(s.desktopSource.soundshareId)),
        null != a && nV(a, o),
        (s = u);
    let c = nr("MediaEngineStore clips"),
        d = no().videoHook;
    tl.setClipsSource({
        desktopDescription: {
            id: s.desktopSource.id,
            soundshareId: s.desktopSource.soundshareId,
            useVideoHook: d,
            useGraphicsCapture: nI(),
            useCaptureDeviceForEncode: !1,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: ny(),
            videoHookStaleFrameTimeoutMs: eJ,
            graphicsCaptureStaleFrameTimeoutMs: e0,
            hdrCaptureMode: c,
        },
        quality: i,
        applicationName: n,
    });
}
function rQ(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((s = null), tl.setClipsSource(null));
}
function rJ(e) {
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
            (({ soundshareId: e, soundshareSession: n } = nF(o)), null != e && nV(e, n)),
            nd(a),
            n_(a === eH.x.STREAM && tv, {
                desktopSource: { id: r, sourcePid: o, soundshareId: e, soundshareSession: n },
                quality: { resolution: s.resolution, frameRate: s.frameRate },
            });
    } else if (t?.cameraSettings != null) {
        let e = t.context ?? eH.x.DEFAULT,
            { videoDeviceGuid: n, audioDeviceGuid: r } = t.cameraSettings,
            i = e === eH.x.STREAM && tv,
            a = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
        n_(i, {
            cameraSource: { videoDeviceGuid: n, audioDeviceGuid: r },
            quality: { resolution: a.resolution, frameRate: a.frameRate },
        });
    } else n_(tv, null);
}
function r0(e) {
    let { section: t } = e;
    return t === eG.nc_.VOICE && nO(), !1;
}
function r1() {
    return tl.eachConnection(nE), !1;
}
function r2(e) {
    let { enabled: t } = e,
        n = nb({ aecDumpEnabled: t });
    tl.setAecDump(n.aecDumpEnabled);
}
function r3(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (tu = Object.values(eH.x).reduce((e, n) => {
        let r = n,
            i = ts();
        return (e[r] = E().merge(i, t[r])), e;
    }, {})),
        S.w.set(eK, tu),
        nR();
}
function r6(e) {
    let { state: t } = e,
        n = k.A.isEnabled();
    if (t === eG.g6G.BACKGROUND && tv && !n) (tL = !0), n_(!1);
    else {
        if (t !== eG.g6G.ACTIVE || !tL) return !1;
        (tL = !1), n_(!0);
    }
    return !0;
}
function r4(e) {
    tl.eachConnection((t) => t.setBitRate(e.bitrate));
}
function r5() {
    if ((!tv && null == a) || null != eP.A.getRTCConnectionId()) return !1;
    n_(!1, null);
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
    t5 = e.enabled;
}
function ii() {
    if ((0, eb.isDesktop)() && eb.isPlatformEmbedded && !nn) {
        nn = !0;
        let e = async () => {
            let t = await new Promise((e) => {
                eR.Ay.pollQueueMetrics((t) => {
                    e(t);
                });
            });
            t.periodMs = eH.tl;
            let n = is(t);
            null !== n && eS.default.track(eG.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, eH.tl);
        };
        setTimeout(e, eH.tl);
    }
}
class ia extends T.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        nA(),
            nC(),
            rP(),
            rk(),
            n1(),
            ii(),
            (0, eb.isWindows)() && eb.isPlatformEmbedded && nh(),
            (t3 = {
                [eH.O5.VIDEO]: tl.supports(eH.O5.VIDEO),
                [eH.O5.DESKTOP_CAPTURE]: tl.supports(eH.O5.DESKTOP_CAPTURE),
                [eH.O5.HYBRID_VIDEO]: tl.supports(eH.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eD.default, eL.A, ew.A, ex.A, O.A, M.A, eP.A, U.Ay, em.A, eA.A, ek.default, eU.A, ey.A);
    }
    supports(e) {
        return tl.supports(e);
    }
    supportsInApp(e) {
        return t3[e] || tl.supports(e);
    }
    isSupported() {
        return tl.supported();
    }
    isNoiseSuppressionSupported() {
        return tl.supports(eH.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return rL();
    }
    isNoiseCancellationError() {
        return tK;
    }
    isAutomaticGainControlSupported() {
        return tl.supports(eH.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nv() && (tl.supports(eH.O5.LEGACY_AUDIO_SUBSYSTEM) || tl.supports(eH.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return tl.supports(eH.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === tl.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return rL();
    }
    isAecDumpSupported() {
        return tl.supports(eH.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return tl.supports(eH.O5.VIDEO) && tl.supports(eH.O5.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        return ex.A.getChannel(tW)?.type !== eG.rbe.GUILD_STAGE_VOICE && e5 && Z.A.simulcastEnabled();
    }
    isVideoDecoderFallbackEnabled() {
        return tZ;
    }
    getAecDump() {
        return no().aecDumpEnabled;
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
        return this.isSelfDeaf() || tS;
    }
    hasContext(e) {
        return null != tu[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eH.x.DEFAULT;
        return e === eH.x.DEFAULT && tT;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eH.x.DEFAULT;
        return (
            !this.isEnabled() ||
            no(e).mute ||
            !ef.A.didHavePermission(eV.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eH.x.DEFAULT && ty)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tN;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tN = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eH.x.DEFAULT,
            t = t7 && "voice_isolation" !== this.getSystemMicrophoneMode() && no(e).mode === eG.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (ew.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return t5;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eH.x.DEFAULT;
        return !this.isSupported() || no(e).deaf;
    }
    isVideoEnabled() {
        return tv && tw;
    }
    isVideoAvailable() {
        return Object.values(tE).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eH.x.STREAM;
        return tf === e && null != a;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eH.x.STREAM;
        return tf === e && null != a && a.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eH.x.DEFAULT;
        return e !== eD.default.getId() && (no(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return tl.supports(eH.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eH.x.DEFAULT;
        return no(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eH.x.DEFAULT;
        return no(t).videoToggleStateMap[e] ?? eG.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eH.x.DEFAULT;
        return t === eH.x.DEFAULT && t0.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eH.x.DEFAULT;
        return e === eH.x.DEFAULT && t0.size > 0;
    }
    isMediaFilterSettingLoading() {
        return t$;
    }
    isNativeAudioPermissionReady() {
        return tQ;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return tf;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return th;
    }
    isH264MfDecodeAvailable() {
        return tp;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eH.x.DEFAULT,
            n = no(t).localPans[e];
        return null != n ? n : eQ;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eH.x.DEFAULT,
            n = t === eH.x.STREAM ? eH.Cn : eH.Hz,
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
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eH.x.DEFAULT;
        return no(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eH.x.DEFAULT;
        return no(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return tB;
    }
    getActiveVoiceFilterAppliedAt() {
        return tj;
    }
    getPreviousVoiceFilter() {
        return tH;
    }
    getPreviousVoiceFilterAppliedAt() {
        return tY;
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
        return nw(tm, no().inputDeviceId);
    }
    getOutputDeviceId() {
        return nw(tg, no().outputDeviceId);
    }
    getVideoDeviceId() {
        return nw(tE, no().videoDeviceId);
    }
    getInputDevices() {
        return tm;
    }
    getOutputDevices() {
        return tg;
    }
    getVideoDevices() {
        return tE;
    }
    getEchoCancellation() {
        let e = no();
        return ew.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return tl.supports(eH.O5.SIDECHAIN_COMPRESSION) && no().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return no().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return no().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tq && tq;
    }
    getLoopback() {
        return t2.size > 0;
    }
    getLoopbackReasons() {
        return t2;
    }
    getNoiseSuppression() {
        let e = no();
        return ew.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = no();
        return ew.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return no().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return no().noiseCancellation;
    }
    getHardwareEncoding() {
        return e5;
    }
    getEnableSilenceWarning() {
        return no().silenceWarning;
    }
    getDebugLogging() {
        return tl.getDebugLogging();
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
        return nS() && no().automaticAudioSubsystem ? eH.rB.AUTOMATIC : tl.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return tl.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return no().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === ej.my.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eH.x.DEFAULT;
        return no(e);
    }
    getState() {
        return {
            settingsByContext: tu,
            inputDevices: tm,
            outputDevices: tg,
            appSupported: t3,
            krispModuleLoaded: tG,
            krispVersion: c,
            krispSuppressionLevel: d,
            goLiveSource: a,
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
        return tP;
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
        tl.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return t_;
    }
    getVideoHook() {
        return no().videoHook;
    }
    supportsVideoHook() {
        return tl.supports(eH.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = no().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return tl.supports(eH.O5.EXPERIMENTAL_SOUNDSHARE) && I().satisfies(b.A?.os.release, eF.$x);
    }
    supportsHookSoundshare() {
        return (0, eb.isWindows)() && tl.supports(eH.O5.SOUNDSHARE) && I().satisfies(b.A?.os.release, eF.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = no().useSystemScreensharePicker,
            n = (0, eb.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return tl.supports(eH.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return nt;
    }
    getUseGamescopeCapture() {
        return ne;
    }
    getEverSpeakingWhileMuted() {
        return tR;
    }
    getSpeakingWhileMuted() {
        return tO;
    }
    getKrispModelOverride() {
        return _;
    }
    getKrispModels() {
        return tF;
    }
    getKrispVadActivationThreshold() {
        return no().modeOptions.vadKrispActivationThreshold ?? eZ;
    }
    hasActiveCallKitCall() {
        return t9;
    }
    setHasActiveCallKitCall(e) {
        t9 = e;
    }
    supportsScreenSoundshare() {
        return (0, eb.isMac)()
            ? tl.supports(eH.O5.SOUNDSHARE) && I().satisfies(b.A?.os.release, eF.P$) && ny()
            : (0, eb.isWindows)()
              ? tl.supports(eH.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, eb.isLinux)() && tl.supports(eH.O5.SCREEN_SOUNDSHARE);
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
            tl.fetchAsyncResources(e)
        );
    }
    startDavePreload() {
        if (!tz && ((tz = !0), (0, eb.isWeb)())) {
            let e = { fetchDave: !0 };
            tl.fetchAsyncResources(e).catch((e) => {
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
        let e = tl.getSupportedSecureFramesProtocolVersion();
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
        return t6;
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
(r = new ia(C.h, {
    VOICE_CHANNEL_SELECT: rW,
    VOICE_STATE_UPDATES: nK,
    CONNECTION_OPEN: nB,
    CONNECTION_CLOSED: nH,
    POST_CONNECTION_OPEN: nY,
    RTC_CONNECTION_STATE: nW,
    AUDIO_SET_TEMPORARY_SELF_MUTE: n$,
    AUDIO_TOGGLE_SELF_MUTE: nz,
    AUDIO_SET_SELF_MUTE: nq,
    AUDIO_TOGGLE_SELF_DEAF: nZ,
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
    AUDIO_SET_ECHO_CANCELLATION: ra,
    AUDIO_SET_SIDECHAIN_COMPRESSION: rs,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: ro,
    AUDIO_SET_LOOPBACK: ru,
    AUDIO_SET_NOISE_SUPPRESSION: rf,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: rh,
    AUDIO_SET_NOISE_CANCELLATION: rp,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: rm,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: rE,
    AUDIO_SET_DEBUG_LOGGING: rA,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: rI,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: rg,
    MEDIA_ENGINE_SET_VIDEO_HOOK: rT,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: ry,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: rS,
    AUDIO_SET_ATTENUATION: rv,
    AUDIO_SET_QOS: rC,
    MEDIA_ENGINE_DEVICES: rn,
    AUDIO_VOLUME_CHANGE: rr,
    AUDIO_RESET: rb,
    AUDIO_INPUT_DETECTED: rR,
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: rN,
    AUDIO_SET_SUBSYSTEM: rj,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rB,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rq,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rX,
    MEDIA_ENGINE_PERMISSION: rz,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rJ,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: n9,
    MEDIA_ENGINE_INTERACTION_REQUIRED: rt,
    USER_SETTINGS_MODAL_INIT: r0,
    USER_SETTINGS_MODAL_SET_SECTION: r0,
    CERTIFIED_DEVICES_SET: r1,
    RPC_APP_CONNECTED: rK,
    RPC_APP_DISCONNECTED: r$,
    OVERLAY_INITIALIZE: nj,
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
    USER_SETTINGS_PROTO_UPDATE: nX,
    CLIPS_INIT: rZ,
    CLIPS_SETTINGS_UPDATE: rQ,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: ir,
    VOICE_FILTER_REQUEST_SWITCH: rG,
    VOICE_FILTER_LOOPBACK_TOGGLE: rU,
    VOICE_FILTER_APPLIED: rV,
    VOICE_FILTER_DOWNLOAD_FAILED: rF,
    VOICE_FILTER_APPLY_FAILED: rF,
})),
    (o = new ee.A(tl, r));
let io = r;
