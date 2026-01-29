let r, i, a, o, s, l, c, u;
n.d(t, {
    A: () => rX,
}),
    n(896048),
    n(228524),
    n(492834),
    n(321073),
    n(638769),
    n(457529),
    n(790599);
var d,
    f = n(284009),
    p = n.n(f),
    _ = n(735438),
    h = n.n(_),
    m = n(299855),
    g = n.n(m),
    E = n(490138),
    y = n(311907),
    b = n(205693),
    O = n(506774),
    v = n(451988),
    A = n(73153),
    I = n(77729),
    S = n(719129),
    T = n(894539),
    C = n(274372),
    N = n(915618),
    w = n(572164),
    R = n(626584),
    P = n(211597),
    D = n(709710),
    L = n(49463),
    x = n(784113),
    M = n(15285),
    j = n(540305),
    k = n(17300),
    U = n(593595),
    G = n(788601),
    F = n(626078),
    V = n(509034),
    B = n(638188),
    H = n(269377),
    Y = n(934341),
    W = n(658046),
    K = n(525286),
    z = n(780732),
    q = n(495439),
    Z = n(927170),
    Q = n(233232),
    X = n(140175),
    J = n(267378),
    $ = n(223572),
    ee = n(276006),
    et = n(670470),
    en = n(896014),
    er = n(765396),
    ei = n(75076),
    ea = n(674966),
    eo = n(559633),
    es = n(3527),
    el = n(714763),
    ec = n(879172),
    eu = n(555444),
    ed = n(617617),
    ef = n(996744),
    ep = n(28075),
    e_ = n(954571),
    eh = n(353835),
    em = n(927813),
    eg = n(723702),
    eE = n(290805),
    ey = n(728458),
    eb = n(837921),
    eO = n(350535),
    ev = n(961350),
    eA = n(131319),
    eI = n(347481),
    eS = n(734057),
    eT = n(383501),
    eC = n(851581),
    eN = n(287809),
    ew = n(117549),
    eR = n(652215),
    eP = n(502075),
    eD = n(765682),
    eL = n(355097),
    ex = n(509381),
    eM = n(731854),
    ej = n(985018);

function ek(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function eU(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                ek(e, t, n[t]);
            });
    }
    return e;
}

function eG(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function eF(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eG(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eV = new R.A("MediaEngineStore"),
    eB = "MediaEngineStore",
    eH = 4,
    eY = 1,
    eW = 1,
    eK = 1,
    ez = 0.5,
    eq = {
        left: 1,
        right: 1,
    },
    eZ = 500,
    eQ = 5 * em.A.Millis.SECOND,
    eX = -60,
    eJ = 100,
    e$ = 2 * em.A.Millis.SECOND,
    e0 = 30 * em.A.Millis.SECOND,
    e1 = !0,
    e2 = "deep_noise_suppression",
    e3 = 0;

function e6() {
    return {
        mode: eR.TBI.VOICE_ACTIVITY,
        modeOptions: {
            threshold: eX,
            autoThreshold: eg.isPlatformEmbedded || __OVERLAY__,
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
        inputVolume: eM.Hz,
        outputVolume: eM.Hz,
        inputDeviceId: eM.dx,
        outputDeviceId: eM.dx,
        videoDeviceId: eM.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: e5.supports(eM.O5.VIDEO_HOOK),
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
let e4 = {
        [ex.my.CUSTOM]: {},
        [ex.my.VOICE_ISOLATION]: {
            modeOptions: {
                autoThreshold: !0,
                vadUseKrisp: !0,
            },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [ex.my.STUDIO]: {
            mode: eR.TBI.VOICE_ACTIVITY,
            modeOptions: {
                threshold: -84,
                autoThreshold: !1,
                vadUseKrisp: !1,
            },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    e5 = (0, b.hB)((0, b.WI)());
eV.enableNativeLogger(!0);
let e7 = {},
    e8 = new Set([eM.x.DEFAULT]),
    e9 = e5.supports(eM.O5.AUTO_ENABLE),
    te = !1,
    tt = eM.x.STREAM,
    tn = performance.now(),
    tr = {
        [eM.dx]: n_("No Input Devices"),
    },
    ti = {
        [eM.dx]: n_("No Output Devices"),
    },
    ta = {
        [eM.dx]: n_("No Video Devices"),
    },
    to = new v.Ep(),
    ts = !1,
    tl = !1,
    tc = !1,
    tu = !1,
    td = !1,
    tf = eM.qe,
    tp = eM.qe,
    t_ = !1,
    th = !1,
    tm = !1,
    tg = new v.Ep(),
    tE = !1,
    ty = !1,
    tb = null,
    tO = !1,
    tv = !1,
    tA = !1,
    tI = !1,
    tS = !1,
    tT = [],
    tC = !1,
    tN = null,
    tw = null,
    tR = null,
    tP = null,
    tD = null,
    tL = !1,
    tx = !1,
    tM = !1,
    tj = null,
    tk = null,
    tU = !1,
    tG = !1;
ea.A.hasPermission(eD.iL.AUDIO, {
    showAuthorizationError: !1,
}),
    ea.A.hasPermission(eD.iL.CAMERA, {
        showAuthorizationError: !1,
    });
let tF = !1,
    tV = new Set(),
    tB = tF,
    tH = new Set(),
    tY = {},
    tW = null,
    tK = !0,
    tz = !1,
    tq = !1,
    tZ = !1,
    tQ = !1;

function tX() {
    var e, t;
    return null != (e = null == (t = eN.default.getCurrentUser()) ? void 0 : t.isStaff()) && e
        ? "always"
        : eE.y === E.O.CANARY
          ? "permittedDevicesOnly"
          : "never";
}
async function tJ() {
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
    } catch (e) {
        return !1;
    }
}

function t$() {
    return null != tk ? tk : "u" > typeof window ? (tk = tJ().then((e) => ((tj = e), e))) : Promise.resolve(!1);
}

function t0() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eM.x.DEFAULT,
        t = e7[e];
    return null == t && ((t = e6()), (e7[e] = t)), t;
}

function t1() {
    var e, t, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eM.x.DEFAULT,
        i = t0(r),
        a = e4[null != (e = i.activeInputProfile) ? e : ex.my.CUSTOM],
        o = eU({}, null != (t = i.modeOptions) ? t : {}, null != (n = a.modeOptions) ? n : {});
    if (
        (null == o.vadDuringPreProcess &&
            (o.vadDuringPreProcess = (0, $.R)({
                location: "getSettings",
            }).enabled),
        (null == o.vadKrispActivationThreshold && !0 === a.automaticGainControl) || !0 === i.automaticGainControl)
    ) {
        let e = (0, k.F)({
            location: "getSettings",
        });
        null != e.vadKrispActivationThreshold && (o.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return eF(eU({}, i, a), {
        modeOptions: o,
    });
}

function t2(e) {
    var t, n;
    let r = t1(e.context),
        i = r.mode;
    e.context === eM.x.DEFAULT &&
        ((0, eu.H)({
            location: "setInputMode",
            autoTrackExposure: !1,
        }).enableLatching &&
            i === eR.TBI.PUSH_TO_TALK &&
            r.modeOptions.pttLatchingEnabled &&
            (i = eR.TBI.VOICE_ACTIVITY),
        (0, X.N)(!1, !1, !1)),
        e.setInputMode(i, {
            vadThreshold: r.modeOptions.threshold,
            vadAutoThreshold: r.modeOptions.autoThreshold,
            vadUseKrisp: r.modeOptions.vadUseKrisp && r_(),
            vadKrispActivationThreshold: null != (t = r.modeOptions.vadKrispActivationThreshold) ? t : ez,
            vadLeading: r.modeOptions.vadLeading,
            vadTrailing: r.modeOptions.vadTrailing,
            vadDuringPreProcess: null != (n = r.modeOptions.vadDuringPreProcess) && n,
            pttReleaseDelay: Math.round(r.modeOptions.delay),
        });
}

function t3(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eM.Hz;
    return h().clamp(e, 0, t);
}

function t6(e) {
    let t = t1(e.context),
        n = !e9 || t.mute || t.deaf;
    e.context === eM.x.DEFAULT
        ? (n = n || ts || tl || tc || !ea.A.didHavePermission(eD.iL.AUDIO))
        : e.context === eM.x.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eM.x.DEFAULT && T.A.updateNativeMute();
}

function t4(e) {
    e !== tt && (null != a && e5.setGoLiveSource(null, tt), (tt = e));
}

function t5() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : td,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        s = a;
    if (
        ((null == s ? void 0 : s.desktopSource) != null &&
            s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? void 0 : e.id) &&
            (null != s.desktopSource.soundshareId && (0, eg.isWindows)() && S.c1(s.desktopSource.soundshareId),
            e5.setGoLiveSource(null, tt)),
        (null == s ? void 0 : s.cameraSource) != null &&
            (s.cameraSource.videoDeviceGuid !==
                (null == o || null == (t = o.cameraSource) ? void 0 : t.videoDeviceGuid) ||
                s.cameraSource.audioDeviceGuid !==
                    (null == o || null == (n = o.cameraSource) ? void 0 : n.audioDeviceGuid)) &&
            e5.setGoLiveSource(null, tt),
        td || i)
    ) {
        let e = t1().videoDeviceId;
        td && e === eM.dx && tp === eM.dx && tf !== eM.qe ? (e = tf) : (tp = e),
            (tf = (td = i) ? nm(ta, e) : eM.qe),
            e5.setVideoInputDevice(tf);
    }
    if (((a = o), null != o)) {
        let e = {
            resolution: o.quality.resolution,
            frameRate: o.quality.frameRate,
        };
        if (null != o.desktopSource) {
            let t = tX(),
                n = t1().videoHook,
                i = nr(),
                a = i ? (ni() ? eP.zl : eP.eg) : 0,
                s = (0, eg.isWindows)() && (0, ee.b)("updateVideo").enabled;
            e5.setGoLiveSource(
                {
                    desktopDescription: {
                        id: o.desktopSource.id,
                        soundshareId: o.desktopSource.soundshareId,
                        useVideoHook: n,
                        useGraphicsCapture: i,
                        useGraphicsCaptureApiLevel: a,
                        useCaptureDeviceForEncode: s,
                        useLoopback: r.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: na(),
                        videoHookStaleFrameTimeoutMs: eZ,
                        graphicsCaptureStaleFrameTimeoutMs: eQ,
                        hdrCaptureMode: t,
                        enableGlobalFramePoolLock: (0, W.H)({
                            location: "updateVideo",
                        }).enabled,
                    },
                    quality: e,
                },
                tt,
            );
        }
        null != o.cameraSource &&
            e5.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: o.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                tt,
            );
    }
}

function t7(e) {
    switch (e) {
        case eM.CO.CPU_OVERUSE:
            return D.B6.NoiseCancellerCpuOveruse;
        case eM.CO.FAILED:
            return D.B6.NoiseCancellerFailed;
        case eM.CO.VAD_CPU_OVERUSE:
            return D.B6.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}

function t8(e) {
    let t = (0, k.F)({
        location: "getAutomaticGainControlConfig",
        disable: !e,
    }).noiseCancellationConfig;
    return eU(
        {
            enabled: e,
        },
        t,
    );
}

function t9(e, t) {
    e.setAutomaticGainControl(t8(t));
}

function ne(e, t) {
    let n = (0, es.A)(t, r.getSystemMicrophoneMode(), {
        location: "setNoiseCancellation",
    });
    n !== t && eV.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: i } = (0, k.F)({
        location: "setNoiseCancellation",
        disable: !t,
    });
    e.setNoiseCancellationDuringProcessing(i);
    let { noiseCancellationAfterProcessing: a, vadAfterWebrtc: o } = (0, Z.$)({
        location: "setNoiseCancellation",
    });
    e.setNoiseCancellationAfterProcessing(a), e.setVADAfterWebrtc(o);
}

function nt(e) {
    let t = t1(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eI.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eI.A.hasNoiseSuppression(n) || t.noiseSuppression),
        t9(e, eI.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        ne(e, t.noiseCancellation),
        e.setVoiceFilterId(tN),
        (0, eg.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}

function nn() {
    to.start(e0, () => {
        eV.error("Device enumeration timed out"), e_.default.track(eR.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
    }),
        e5.on(b.bg.Connection, (e) => {
            t2(e), t6(e), nt(e);
            let t = t1();
            e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
                e.setQoS(t.qos);
            let n = (0, q.K)({
                location: "setupMediaEngine",
            }).treatment;
            (tU = n === q.c.NoSoftwareDecodeWithFallback),
                n === q.c.NoSoftwareDecode || n === q.c.NoSoftwareDecodeWithFallback
                    ? (e.setExperimentFlag(eM.fd.H265_HARDWARE_ONLY, !0),
                      (0, eg.isWindows)()
                          ? t$().then((t) => {
                                e.setExperimentFlag(eM.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                            })
                          : (0, eg.isMac)() && e.setExperimentFlag(eM.fd.H265_HARDWARE_DECODE_AVAILABLE, !0))
                    : n === q.c.Disabled &&
                      (e.setExperimentFlag(eM.fd.H265_HARDWARE_ONLY, !0),
                      e.setExperimentFlag(eM.fd.H265_HARDWARE_DECODE_AVAILABLE, !1)),
                (0, eg.isWindows)() &&
                    (0, z.r)({
                        location: "setupMediaEngine",
                    }).enabled &&
                    e.setExperimentFlag(eM.fd.USE_H264_MF_DECODER, !0);
            let i = eT.A.getGuildId(),
                {
                    muteBeforeProcessing: o,
                    pttBeforeProcessing: s,
                    skipEncode: l,
                } = (null != i ? H.A : B.A).getCurrentConfig(
                    {
                        location: "setupMediaEngine",
                        guildId: null != i ? i : void 0,
                    },
                    {
                        autoTrackExposure: !0,
                    },
                );
            o && e.setExperimentFlag(eM.fd.MUTE_BEFORE_PROCESSING, !0),
                s && e.setExperimentFlag(eM.fd.PTT_BEFORE_PROCESSING, !0),
                l && e.setExperimentFlag(eM.fd.SKIP_ENCODE, !0),
                (0, Q.J)({
                    location: "setupMediaEngine",
                }).enabled && e.setExperimentFlag(eM.fd.LOW_LATENCY_RATE_CONTROL, !0);
            let c = !1,
                u = !0;
            if (
                (e.setExperimentFlag(eM.fd.RESET_DECODER_ON_ERRORS, !0),
                c && e.setExperimentFlag(eM.fd.SOFTWARE_FALLBACK_ON_ERRORS, !0),
                u && e.setExperimentFlag(eM.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0),
                e.context === eM.x.STREAM)
            ) {
                let t = nE(ti);
                e.setSoundshareDiscardRearChannels(t);
                let { simulcastEnabled: n, lqStreamBitrate: r } = K.A.getConfig();
                e.configureGoLiveSimulcast(n, r);
            }
            if (
                ((0, eg.isWindows)()
                    ? e.setExperimentFlag(eM.fd.SIGNAL_AV1, !0)
                    : ((0, eg.isMac)() || (0, eg.isLinux)()) && e.setExperimentFlag(eM.fd.SIGNAL_AV1_DECODE, !0),
                (0, eg.isWindows)() && e.setExperimentFlag(eM.fd.SIGNAL_AV1_HARDWARE_DECODE, !0),
                (0, eg.isWeb)())
            ) {
                let { enabled: t } = (0, Y.O)("MediaEngineStore");
                e.setExperimentFlag(eM.fd.BROWSER_HEVC, t);
            }
            if (
                ((0, eg.isWindows)() &&
                    (null == tW ? void 0 : tW.startsWith("AMD")) &&
                    (0, en.F)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eM.fd.WMF_GPU_ENCODE, !0),
                (0, eg.isWindows)() &&
                    (null == tW ? void 0 : tW.startsWith("Intel")) &&
                    (0, er.J)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eM.fd.WMF_GPU_ENCODE, !0),
                (0, eg.isWindows)() &&
                    (null == tW ? void 0 : tW.startsWith("Qualcomm")) &&
                    (0, en.F)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eM.fd.WMF_GPU_ENCODE, !0),
                e5.setHasFullbandPerformance((0, P.A)()),
                e.setRemoteAudioHistory(1e3),
                (0, N.A)(r))
            ) {
                let { enableViewerClipping: t } = et.A.getCurrentConfig(
                    {
                        location: "f627ab_15",
                    },
                    {
                        autoTrackExposure: !1,
                    },
                );
                e.setViewerSideClip(t), e.setClipsKeyFrameInterval(eM.X1);
            }
            for (let n of ((t = t1(e.context)), e.setPostponeDecodeLevel(eJ), Object.keys(t.localMutes)))
                n !== ev.default.getId() && e.setLocalMute(n, t.localMutes[n]);
            for (let n of Object.keys(t.localVolumes))
                n !== ev.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
            for (let n of Object.keys(t.localPans)) {
                let r = t.localPans[n];
                e.setLocalPan(n, r.left, r.right);
            }
            for (let n of Object.keys(t.disabledLocalVideos)) e.setLocalVideoDisabled(n, t.disabledLocalVideos[n]);
            e.on(b.yq.Speaking, (t, n, r, i) => {
                A.h.dispatch({
                    type: "SPEAKING",
                    context: e.context,
                    userId: t,
                    speakingFlags: n,
                    voiceDb: i,
                });
            }),
                e.context === eM.x.DEFAULT &&
                    ((th = !1),
                    (tm = !1),
                    e.on(b.yq.SpeakingWhileMuted, () => {
                        (th = !0),
                            (tm = !0),
                            r.emitChange(),
                            tg.stop(),
                            tg.start(e$, () => {
                                (tm = !1), r.emitChange();
                            });
                    })),
                e.on(b.yq.DesktopSourceEnd, (t, n) => {
                    A.h.dispatch({
                        type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                        settings: {
                            context: e.context,
                        },
                        endReason: t,
                        errorCode: n,
                    });
                }),
                e.on(b.yq.InteractionRequired, (e) => {
                    A.h.dispatch({
                        type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
                        required: e,
                    });
                }),
                e.on(b.yq.VideoHookInitialize, (e, t, n, r, i, o) => {
                    (null == a ? void 0 : a.desktopSource) != null &&
                        e_.default.track(
                            eR.HAw.VIDEOHOOK_INITIALIZED,
                            eU(
                                {
                                    backend: e,
                                    format: t,
                                    framebuffer_format: n,
                                    sample_count: r,
                                    success: i,
                                    reinitialization: o,
                                },
                                (0, j.A)(null == a ? void 0 : a.desktopSource),
                            ),
                        );
                }),
                e.on(b.yq.NoiseCancellationError, (e) => {
                    eV.warn("noisecancellererror event: ".concat(e)),
                        (0, D.QW)({
                            type: D.iy.NOISE_CANCELLER_ERROR,
                            underlyingError: t7(e),
                        }),
                        (tL = !0),
                        e_.default.track(eR.HAw.VOICE_PROCESSING, {
                            noise_canceller_error: e,
                        }),
                        A.h.dispatch({
                            type: "AUDIO_SET_NOISE_SUPPRESSION",
                            enabled: !0,
                        }),
                        A.h.dispatch({
                            type: "AUDIO_SET_NOISE_CANCELLATION",
                            enabled: !1,
                        }),
                        A.h.dispatch({
                            type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR",
                            code: e,
                        });
                }),
                e.on(b.yq.VoiceActivityDetectorError, (e) => {
                    eV.warn("voiceactivitydetectorerror event: ".concat(e)),
                        (0, D.QW)({
                            type: D.iy.NOISE_CANCELLER_ERROR,
                            underlyingError: t7(e),
                        }),
                        e_.default.track(eR.HAw.VOICE_PROCESSING, {
                            noise_canceller_error: e,
                        }),
                        A.h.dispatch({
                            type: "AUDIO_SET_MODE",
                            context: eM.x.DEFAULT,
                            mode: eR.TBI.VOICE_ACTIVITY,
                            options: eF(eU({}, t1(eM.x.DEFAULT).modeOptions), {
                                vadUseKrisp: !1,
                            }),
                        }),
                        A.h.dispatch({
                            type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
                            code: e,
                        });
                }),
                e.on(b.yq.SdpError, (e, t, n, r) => {
                    e_.default.track(eR.HAw.SDP_ERROR, {
                        operation: e,
                        error: t,
                        type: n,
                        sdp: r,
                    });
                }),
                e.on(b.yq.VideoState, (t) => {
                    A.h.dispatch({
                        type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED",
                        videoState: t,
                        context: e.context,
                    });
                }),
                e.setBitRate(eA.A.bitrate),
                e.applyVideoQualityMode(ew.A.mode),
                e5.supports(eM.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                    e5.setAsyncVideoInputDeviceInit((0, F.v)("setupMediaEngine").enabled);
        }),
        e5.on(b.bg.DeviceChange, (e, t, n) => {
            to.stop(),
                A.h.dispatch({
                    type: "MEDIA_ENGINE_DEVICES",
                    inputDevices: e,
                    outputDevices: t,
                    videoDevices: n,
                });
        }),
        e5.on(b.bg.VolumeChange, (e, t) => {
            A.h.dispatch({
                type: "AUDIO_VOLUME_CHANGE",
                inputVolume: e,
                outputVolume: t,
            });
        }),
        e5.on(b.bg.DesktopSourceEnd, (e, t) => {
            A.h.dispatch({
                type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                settings: null,
                endReason: e,
                errorCode: t,
            });
        }),
        e5.on(b.bg.AudioPermission, (e) => {
            (tG = !0),
                A.h.dispatch({
                    type: "MEDIA_ENGINE_PERMISSION",
                    kind: "audio",
                    granted: e,
                });
        }),
        e5.on(b.bg.VideoPermission, (e) => {
            A.h.dispatch({
                type: "MEDIA_ENGINE_PERMISSION",
                kind: "video",
                granted: e,
            });
        }),
        e5.on(b.bg.WatchdogTimeout, async () => {
            let e;
            try {
                await eh.A.submitLiveCrashReport({
                    message: {
                        message: "Voice Watchdog Timeout",
                    },
                });
            } catch (t) {
                "number" == typeof t.status && (e = t.status);
            }
            eV.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)),
                e_.default.track(eR.HAw.VOICE_WATCHDOG_TIMEOUT, {
                    minidump_submission_error: e,
                });
        }),
        e5.on(b.bg.VideoInputInitialized, (e) => {
            e_.default.track(eR.HAw.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired
                    ? null
                    : Math.round(e.timeToFirstFrame * em.A.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: eT.A.getMediaSessionId(),
                rtc_connection_id: eT.A.getRTCConnectionId(),
            });
        }),
        e5.on(b.bg.AudioInputInitialized, (e) => {
            e_.default.track(eR.HAw.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * em.A.Millis.SECOND),
                rtc_connection_id: eT.A.getRTCConnectionId(),
            });
        }),
        e5.on(b.bg.ClipsRecordingRestartNeeded, () => {
            A.h.dispatch({
                type: "CLIPS_RESTART",
            });
        }),
        e5.on(b.bg.ClipsInitFailure, (e, t) => {
            A.h.wait(() => {
                A.h.dispatch({
                    type: "CLIPS_INIT_FAILURE",
                    errMsg: e,
                    applicationName: t,
                });
            });
        }),
        e5.on(b.bg.ClipsRecordingEnded, (e, t) => {
            var n, r;
            (null == o || null == (n = o.desktopSource) ? void 0 : n.id) === e &&
                (null != t && (null == a || null == (r = a.desktopSource) ? void 0 : r.soundshareId) !== t && S.c1(t),
                (o = null));
        }),
        e5.on(b.bg.NativeScreenSharePickerUpdate, (e, t) => {
            A.h.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE",
                existing: e,
                content: t,
            });
        }),
        e5.on(b.bg.NativeScreenSharePickerCancel, (e) => {
            A.h.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL",
                existing: e,
            });
        }),
        e5.on(b.bg.NativeScreenSharePickerError, (e) => {
            A.h.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_ERROR",
                error: e,
            });
        }),
        e5.on(b.bg.AudioDeviceModuleError, (e, t, n) => {
            e_.default.track(eR.HAw.AUDIO_DEVICE_MODULE_ERROR, {
                audio_device_module: e,
                code: t,
                device_name: n,
            });
        }),
        e5.on(b.bg.VideoCodecError, (e) => {
            let t = "encode" === e.mode ? D.iy.VIDEO_ENCODE_ERROR : D.iy.VIDEO_DECODE_ERROR,
                n = {
                    videoCodec: e.codecStandard,
                    errorMessage: e.message,
                };
            (0, D.QW)(
                t === D.iy.VIDEO_ENCODE_ERROR
                    ? eF(
                          eU(
                              {
                                  type: t,
                              },
                              n,
                          ),
                          {
                              videoEncoder: e.implName,
                          },
                      )
                    : eF(
                          eU(
                              {
                                  type: t,
                              },
                              n,
                          ),
                          {
                              videoDecoder: e.implName,
                          },
                      ),
            );
        }),
        e5.on(b.bg.ConnectionStats, (e) => {
            A.h.dispatch({
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
        e5.on(b.bg.VoiceQueueMetrics, (e) => {
            let t = rQ(e);
            null !== t && e_.default.track(eR.HAw.VOICE_QUEUE_METRICS, t);
        }),
        e5.setOnVideoContainerResized((e, t, n) => {
            A.h.wait(() =>
                A.h.dispatch({
                    type: "VIDEO_SIZE_UPDATE",
                    streamId: e,
                    dimensions: {
                        width: t,
                        height: n,
                    },
                }),
            );
        }),
        n6(),
        n5(),
        e5.supports(eM.O5.ASYNC_CLIPS_SOURCE_DEINIT) &&
            e5.setAsyncClipsSourceDeinit((0, V.V)("setupMediaEngine").enabled),
        nl.reset(),
        (0, eC.w)().then((e) => {
            null != e && (tW = e.gpu_brand);
        }),
        e5.on(b.bg.SystemMicrophoneModeChange, (e) => {
            (u = e), e5.eachConnection(nt);
        });
}

function nr() {
    return (0, eg.isWindows)() && g().satisfies(null === I.A || void 0 === I.A ? void 0 : I.A.os.release, eP.yg);
}

function ni() {
    return (0, eg.isWindows)() && g().satisfies(null === I.A || void 0 === I.A ? void 0 : I.A.os.release, eP.fG);
}

function na() {
    return (
        (0, eg.isMac)() &&
        e5.supports(eM.O5.SCREEN_CAPTURE_KIT) &&
        g().satisfies(null === I.A || void 0 === I.A ? void 0 : I.A.os.release, eP.e)
    );
}

function no() {
    return (
        (0, eg.isWindows)() &&
        e5.supports(eM.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        e5.supports(eM.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}

function ns() {
    return e5.supports(eM.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
let nl = new (class {
    start() {
        this.started || ((this.started = !0), e5.on(b.bg.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout &&
                (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            e5.removeListener(b.bg.Silence, this.handleSilence),
            A.h.dispatch({
                type: "AUDIO_INPUT_DETECTED",
                inputDetected: null,
            }));
    }
    update() {
        let e = t1();
        !tO && eT.A.getState() === eR.S7L.RTC_CONNECTED && e.mode === eR.TBI.VOICE_ACTIVITY && e.silenceWarning
            ? this.start()
            : this.stop();
    }
    reset() {
        this.stop(), this.update();
    }
    constructor() {
        ek(this, "stateChangeTimeout", void 0),
            ek(this, "noVoiceTimeout", 5e3),
            ek(this, "voiceTimeout", 1500),
            ek(this, "started", !1),
            ek(this, "handleSilence", (e) => {
                let t = !e;
                null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout),
                    (this.stateChangeTimeout = setTimeout(
                        () => {
                            (this.stateChangeTimeout = null),
                                this.started &&
                                    (A.h.dispatch({
                                        type: "AUDIO_INPUT_DETECTED",
                                        inputDetected: t,
                                    }),
                                    e && (tv = !0));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout,
                    ));
            });
    }
})();

function nc() {
    var e;
    let t = O.w.get("audio");
    null != t &&
        (O.w.set(eB, {
            [eM.x.DEFAULT]: t,
        }),
        O.w.remove("audio")),
        (e7 = null != (e = O.w.get(eB)) ? e : {}),
        h().each(e7, (e) => {
            if (
                (h().defaultsDeep(e, e6()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, eO.OH)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== eH &&
                    ((e.vadUseKrispSettingVersion = eH), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                !e.vadThrehsoldMigrated)
            ) {
                var t;
                (e.vadThrehsoldMigrated = !0),
                    (null == (t = e.modeOptions) ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = eX);
            }
            e5.supports(eM.O5.SIDECHAIN_COMPRESSION) &&
                e.sidechainCompressionSettingVersion < eK &&
                ((e.sidechainCompressionSettingVersion = eK), (e.sidechainCompression = !0)),
                (0, eg.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== eW &&
                      ((e.ncUseKrispjsSettingVersion = eW), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== eY &&
                      ((e.ncUseKrispSettingVersion = eY), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
        }),
        nf();
}

function nu(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eM.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = t0(t);
    return Object.assign(r, e), !__OVERLAY__ && n && O.w.set(eB, e7), r;
}

function nd() {
    O.w.remove(eB), location.reload();
}

function nf() {
    let e = t1();
    e5.setAudioInputDevice(e.inputDeviceId),
        e5.setAudioOutputDevice(e.outputDeviceId),
        t5(),
        e5.setInputVolume(e.inputVolume),
        e5.setOutputVolume(e.outputVolume),
        e5.setAecDump(e.aecDumpEnabled),
        e5.setSidechainCompression(e.sidechainCompression),
        e5.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        e5.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing);
}

function np() {
    e9 ||
        e5.enable().then(() =>
            A.h.dispatch({
                type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
                enabled: !0,
                unmute: !1,
            }),
        );
}

function n_(e) {
    return {
        id: eM.dx,
        index: 0,
        name: e,
        disabled: !0,
        guid: void 0,
        hardwareId: void 0,
        containerId: void 0,
    };
}

function nh(e, t) {
    if (0 === e.length) {
        let e = n_(t);
        return {
            [e.id]: e,
        };
    }
    return h()(e)
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

function nm(e, t) {
    var n, r;
    let i = null != (n = null != (r = e[t]) ? r : e[eM.dx]) ? n : h()(e).values().first();
    return null != i ? i.id : t;
}

function ng(e) {
    let t = tr;
    if (((tr = nh(e, ej.intl.string(ej.t["/QIjDA"]))), !h().isEqual(tr, t))) {
        let e = t1(),
            t = nm(tr, e.inputDeviceId);
        e5.setAudioInputDevice(t), e5.eachConnection(nt);
    }
}

function nE(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}

function ny(e) {
    e5.eachConnection((t) => {
        t.context === eM.x.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}

function nb(e) {
    let t = ti;
    if (((ti = nh(e, ej.intl.string(ej.t.xlUg0v))), !h().isEqual(ti, t))) {
        let e = t1(),
            n = nm(ti, e.outputDeviceId);
        e5.setAudioOutputDevice(n);
        let r = nE(t),
            i = nE(ti);
        r !== i && ny(i);
    }
}

function nO(e) {
    ty = e.length > 0;
    let t = ta;
    if (((ta = nh(e, ej.intl.string(ej.t.WKWARY))), td && !h().isEqual(ta, t))) {
        var n;
        let e = void 0 !== ta[tf],
            r = tf === eM.dx && (null == (n = t[eM.dx]) ? void 0 : n.disabled);
        t5(e || r);
    }
}

function nv() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        r =
            null != (e = ed.A.settings.audioContextSettings)
                ? e
                : {
                      user: {},
                      stream: {},
                  };
    for (let e of Object.keys(r)) {
        let i = e === eL.W.USER ? eM.x.DEFAULT : eM.x.STREAM,
            a = i === eM.x.STREAM ? eM.Cn : eM.Hz,
            o = null != (t = r[e]) ? t : {},
            { localMutes: s, localVolumes: l } = t1(i);
        for (let [e, t] of Object.entries(o))
            null == (0, ec.tM)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== a ? (l[e] = t.volume) : delete l[e],
                e5.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (n)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == o[e] &&
                    (delete s[e],
                    delete l[e],
                    e5.eachConnection((t) => {
                        t.setLocalVolume(e, a), t.setLocalMute(e, !1);
                    }, i));
        nu(
            {
                localMutes: s,
                localVolumes: l,
            },
            i,
        );
    }
}

function nA(e) {
    if (null == r)
        return (
            eV.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
            {
                soundshareId: null,
                soundshareSession: "",
            }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : eh.A.getAudioPid(e),
            n = "";
        return (
            null != t && (n = eh.A.generateSessionFromPid(t)),
            {
                soundshareId: t,
                soundshareSession: n,
            }
        );
    }
}

function nI(e, t) {
    (0, eg.isWindows)() &&
        e > 1 &&
        S.GH(e, {
            soundshare_session: t,
        }).then((t) => {
            null == t ||
                M.Ay.shouldContinueWithoutElevatedProcessForPID(e) ||
                A.h.wait(() => {
                    A.h.dispatch({
                        type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                        errorMessage: t,
                    });
                });
        });
}

function nS(e) {
    (i = e.sessionId), (ts = !1), (tu = !1);
    let t = t1();
    if (
        (no() && (ns() ? rI(eM.rB.AUTOMATIC) : t.automaticAudioSubsystem && rS()),
        e5.supports(eM.O5.OFFLOAD_ADM_CONTROLS))
    ) {
        let e = !1;
        (0, eg.isDesktop)()
            ? (e = (0, U.i)({
                  location: "handleConnectionOpen",
              }).enabled)
            : ((0, eg.isIOS)() || (0, eg.isAndroid)()) &&
              (e = (0, G.Y)({
                  location: "handleConnectionOpen",
              }).enabled),
            e5.setOffloadAdmControls(e);
    }
    (0, ef.Lb)({
        location: "MediaEngineStore",
        autoTrackExposure: !1,
    }) &&
        null !== t.mostRecentlyRequestedVoiceFilter &&
        (0, eg.isDesktop)() &&
        (ep.A.getLastInitAttemptMayHaveCrashed()
            ? (A.h.dispatch({
                  type: "AUDIO_SET_SELF_MUTE",
                  mute: !0,
                  context: eM.x.DEFAULT,
                  playSoundEffect: !0,
              }),
              nu({
                  mostRecentlyRequestedVoiceFilter: null,
              }))
            : n(342887).md()),
        nv();
}

function nT(e) {
    let { mediaEngineState: t } = e;
    (e7 = t.settingsByContext),
        (tr = t.inputDevices),
        (ti = t.outputDevices),
        (tY = t.appSupported),
        (tS = t.krispModuleLoaded),
        (s = t.krispVersion),
        (tt = t.goLiveContext);
}

function nC() {
    i = null;
}

function nN() {
    if ((0, eg.isWeb)()) {
        let e = J.f1.getCurrentConfig({
            location: "MediaEngineStore handlePostConnectionOpen",
        });
        e.loadWasmModule && e.preload && r.startDavePreload();
    }
    return !1;
}

function nw(e) {
    switch (e.state) {
        case eR.S7L.CONNECTING:
            np();
            break;
        case eR.S7L.RTC_CONNECTING:
            (tO = !1), (tv = !1);
            break;
        case eR.S7L.RTC_CONNECTED:
            t5();
            break;
        case eR.S7L.DISCONNECTED:
            nU(), nG();
    }
    nl.update();
}

function nR(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (ts = t.mute || t.suppress), (tu = t.deaf), e5.eachConnection(t6);
            let e = null != t.guildId && null != t.channelId && null != tD && tD !== t.channelId,
                n = !tA && null == t.channelId;
            return t5(!e && !n && td), (tD = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== ev.default.getId() || null != eT.A.getChannelId() || t5(!1, null), e;
    }, !1);
}

function nP(e) {
    let { mute: t } = e;
    (tl = t), e5.eachConnection(t6);
}

function nD(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = t1(t);
    if (t === eM.x.DEFAULT && (ea.A.requestPermission(eD.iL.AUDIO), tc)) return !1;
    (r = !i && !r) || (i = !1),
        n || (t_ = !0),
        nu(
            {
                mute: r,
                deaf: i,
            },
            t,
        ),
        e5.eachConnection(t6);
}

function nL(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    nu(
        {
            mute: n,
        },
        t,
    ),
        r || (t_ = !0),
        e5.eachConnection(t6);
}

function nx(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== eL.oD.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    nv(!0);
}

function nM(e) {
    let { context: t } = e;
    nu(
        {
            deaf: !t1(t).deaf,
        },
        t,
    ),
        e5.eachConnection(t6);
}

function nj(e) {
    let { context: t, userId: n } = e;
    if (n === ev.default.getId()) return;
    let { localMutes: r } = t1(t);
    r[n] ? delete r[n] : (r[n] = !0),
        nu(
            {
                localMutes: r,
            },
            t,
        ),
        e5.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}

function nk(e) {
    var t, n, r, i, a, o, s;
    let { context: l, userId: c, videoToggleState: u, persist: d, isAutomatic: f } = e;
    p()(!(d && f), "These are not allowed to both be true.");
    let _ = u === eR.bb8.DISABLED,
        { disabledLocalVideos: h } = t1(l),
        m = null != (t = h[c]) && t,
        g = tV.has(c),
        E = u === eR.bb8.AUTO_ENABLED || u === eR.bb8.MANUAL_ENABLED;
    eV.info(
        "disableVideo="
            .concat(_, " currentlyDisabled=")
            .concat(m, " currentlyAutoDisabled=")
            .concat(g, ", isVideoShown=")
            .concat(E),
    ),
        p()(!(g && !m), "If you are auto-disabled, then you are also disabled.");
    let y = _ !== m,
        b = l === eM.x.DEFAULT,
        O = f && y && b,
        v = d && y && b;
    eV.info(
        "changed="
            .concat(y, " isDefaultContext=")
            .concat(b, " isUpdateCausedByVideoHealthManager=")
            .concat(O, " isManualToggleByUser=")
            .concat(v),
    );
    let { videoToggleStateMap: A } = t1(l);
    if (
        (A[c] === eR.bb8.AUTO_PROBING &&
            u === eR.bb8.AUTO_ENABLED &&
            (0, ei.A)(c, _ ? eM.Al.AUTO_DISABLE : eM.Al.AUTO_ENABLE, E),
        (A[c] = u),
        nu(
            {
                videoToggleStateMap: A,
            },
            l,
            d,
        ),
        u === eR.bb8.AUTO_PROBING
            ? null == (n = eT.A.getRTCConnection()) || n.pauseStatsCollectionForUser(c, !0)
            : null == (r = eT.A.getRTCConnection()) || r.pauseStatsCollectionForUser(c, !1),
        tB ||
            (eV.info("isAutoDisableAllowed=".concat(tB, " - disabling VideoHealthManager")),
            null == (a = eT.A.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()),
        O)
    ) {
        if ((!_ && !g) || (_ && !tB)) return;
        (0, ei.A)(c, _ ? eM.Al.AUTO_DISABLE : eM.Al.AUTO_ENABLE, E), _ ? tV.add(c) : tV.delete(c);
    } else
        v &&
            (g && !_
                ? (eV.info("disallowing auto-disable for this session because of manual override by user"),
                  (tB = !1),
                  null == (s = eT.A.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(),
                  (0, ei.A)(c, eM.Al.MANUAL_REENABLE, E))
                : (0, ei.A)(c, _ ? eM.Al.MANUAL_DISABLE : eM.Al.MANUAL_ENABLE, E));
    b && !_ && tV.delete(c),
        _ ? (h[c] = !0) : delete h[c],
        nu(
            {
                disabledLocalVideos: h,
            },
            l,
            d,
        ),
        e5.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(c, null != (t = h[c]) && t);
        }, l);
}

function nU() {
    if (0 === tV.size) return;
    let e = eM.x.DEFAULT,
        { disabledLocalVideos: t } = t1(e);
    tV.forEach((n) => {
        p()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            e5.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tV.clear(),
        nu(
            {
                disabledLocalVideos: t,
            },
            e,
            !1,
        );
}

function nG() {
    let e = eM.x.DEFAULT,
        { videoToggleStateMap: t } = t1(e);
    for (let [e, n] of Object.entries(t)) n === eR.bb8.AUTO_PROBING && delete t[e];
    nu(
        {
            videoToggleStateMap: t,
        },
        e,
        !1,
    );
}

function nF(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === ev.default.getId()) return;
    let i = t === eM.x.STREAM ? eM.Cn : eM.Hz,
        { localVolumes: a } = t1(t);
    r === i ? delete a[n] : (a[n] = r),
        nu(
            {
                localVolumes: a,
            },
            t,
        ),
        e5.eachConnection((e) => e.setLocalVolume(n, r), t);
}

function nV(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: a } = t1(t);
    (a[n] = {
        left: r,
        right: i,
    }),
        nu(
            {
                localPans: a,
            },
            t,
        ),
        e5.eachConnection((e) => e.setLocalPan(n, r, i), t);
}

function nB(e) {
    let { context: t, mode: n, options: r } = e;
    nu(
        {
            mode: n,
            modeOptions: r,
        },
        t,
    ),
        e5.eachConnection(t2),
        nl.update();
}

function nH(e) {
    let { volume: t } = e;
    nu({
        inputVolume: t3(t),
    }),
        e5.setInputVolume(t);
}

function nY(e) {
    let { volume: t } = e;
    nu({
        outputVolume: t,
    }),
        e5.setOutputVolume(t);
}

function nW(e) {
    let { id: t } = e;
    (t = nm(tr, t)),
        (tn = performance.now()),
        nu({
            inputDeviceId: t,
        }),
        e5.setAudioInputDevice(t),
        e5.eachConnection(nt);
}

function nK(e) {
    let { id: t } = e;
    nu({
        outputDeviceId: (t = nm(ti, t)),
    }),
        e5.setAudioOutputDevice(t);
}

function nz(e) {
    let { id: t } = e;
    nu({
        videoDeviceId: (t = nm(ta, t)),
    }),
        t5();
}

function nq(e) {
    let { inputProfile: t } = e;
    nu({
        activeInputProfile: t,
    });
    let n = t1();
    e5.eachConnection((e) => {
        t2(e), nt(e);
    }),
        e5.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        nl.update(),
        n4();
}

function nZ(e) {
    return te !== e.required && ((te = e.required), e.required || e5.interact(), !0);
}

function nQ(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    ng(t), nb(n), nO(r);
}

function nX(e) {
    let { inputVolume: t, outputVolume: n } = e;
    nu({
        inputVolume: t3(t),
        outputVolume: n,
    });
}

function nJ(e) {
    var t;
    let n = t1(),
        i = e5.getAudioSubsystem(),
        a = e5.getAudioLayer(),
        o = nm(tr, n.inputDeviceId),
        s = null == (t = tr[o]) ? void 0 : t.name,
        l = (0, es.A)(n.noiseCancellation, r.getSystemMicrophoneMode(), {
            location: "trackVoiceProcessing",
        });
    e_.default.track(eR.HAw.VOICE_PROCESSING, {
        echo_cancellation: n.echoCancellation,
        noise_cancellation: n.noiseCancellation,
        noise_suppression: n.noiseSuppression,
        automatic_gain_control: n.automaticGainControl,
        location: e,
        bypass_system_input_processing: n.bypassSystemInputProcessing,
        audio_subsystem: i,
        audio_layer: a,
        input_device: s,
        effective_noise_cancellation: l,
    });
}

function n$(e) {
    let t = nu({
        echoCancellation: e.enabled,
    });
    e5.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), n4(), nJ(e.location);
}

function n0(e) {
    n2(e.enabled);
}

function n1(e) {
    let t = nu({
        sidechainCompressionStrength: e.strength,
    });
    e5.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}

function n2(e) {
    let t = nu({
        sidechainCompression: e,
    });
    e5.setSidechainCompression(t.sidechainCompression);
}

function n3(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tH.add(n) : tH.delete(n), n6(), n4();
}

function n6() {
    let e = !tH.has("voice_filter_preview") && !tH.has("mic_test");
    e5.setMaybePreprocessMute(e);
}

function n4() {
    let e = t1(),
        t = tH.size > 0,
        n = e.inputDeviceId,
        r = eI.A.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        a = eI.A.hasNoiseSuppression(n) || e.noiseSuppression,
        o = t8(eI.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation,
        l = null !== tN,
        c = tH.has("voice_filter") && 1 === tH.size;
    e5.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: a,
        automaticGainControlConfig: o,
        noiseCancellation: s,
        voiceFilters: l,
        loopbackUseAudioMode: c,
    });
}
async function n5() {
    var e, t, n, r;
    if (!e5.supports(eM.O5.VAAPI)) return;
    let i = 4098;
    (null == (n = window.DiscordNative) || null == (t = n.processUtils) ? void 0 : t.getSystemInfo) == null ||
        ((null !=
        (e =
            null == (r = (await window.DiscordNative.processUtils.getSystemInfo()).electronGPUInfo)
                ? void 0
                : r.gpuDevice)
            ? e
            : []
        ).some((e) => e.vendorId === i) &&
            ((tZ = !0), (tq = e5.supports(eM.O5.GAMESCOPE_CAPTURE))));
}

function n7(e) {
    let t = nu({
        noiseSuppression: e.enabled,
    });
    e5.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), n4(), nJ(e.location);
}

function n8(e) {
    let t = nu({
        automaticGainControl: e.enabled,
    });
    e5.eachConnection((e) => t9(e, t.automaticGainControl)), n4(), nJ(e.location);
}

function n9(e) {
    let t = nu({
        noiseCancellation: e.enabled,
    });
    e5.eachConnection((e) => ne(e, t.noiseCancellation)), n4(), nJ(e.location);
}

function re(e) {
    eo.A.setKrispModelOverride(e.model), (c = e.model), n4();
}

function rt(e) {
    var t;
    (0, eg.isWeb)() || ((tC = e.enabled), null == (t = e5.setNoiseCancellationEnableStats) || t.call(e5, e.enabled));
}

function rn(e) {
    nu({
        silenceWarning: e.enabled,
    }),
        nl.update();
}

function rr(e) {
    e5.setDebugLogging(e.enabled);
}

function ri(e) {
    let { level: t } = e;
    (l = t), eo.A.setKrispSuppressionLevel(t);
}

function ra(e) {
    nu({
        videoHook: e.enabled,
    });
}

function ro(e) {
    nu({
        experimentalSoundshare2: e.enabled,
    });
}

function rs(e) {
    let { enabled: t } = e;
    nu({
        useSystemScreensharePicker: t,
    });
}

function rl(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = nu({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r,
        });
    e5.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}

function rc(e) {
    let { enabled: t } = e;
    nu({
        qos: t,
    }),
        e5.eachConnection((e) => e.setQoS(t));
}

function ru() {
    nd();
}

function rd(e) {
    let { inputDetected: t } = e;
    (tb = t), !tO && tb && ((tO = !0), nl.update());
}

function rf(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === tc) return !1;
    (tc = n), e5.eachConnection(t6);
}

function rp(e) {
    let { state: t, permissionType: n } = e,
        r = t === eD.hL.ACCEPTED;
    switch (n) {
        case eD.iL.AUDIO:
            (tG = !0), e5.eachConnection(t6);
            break;
        case eD.iL.CAMERA:
            !r && td && t5(!1);
            break;
        default:
            return !1;
    }
}

function r_() {
    return tS || !1;
}
async function rh() {
    try {
        var e, t, n, i;
        await eb.Ay.ensureModule("discord_krisp");
        let a = eb.Ay.requireModule("discord_krisp");
        (tS = !0),
            (s = null == (t = a.getSdkVersion) ? void 0 : t.call(a)),
            (l = null != (e = null == (n = a.getSuppressionLevel) ? void 0 : n.call(a)) ? e : 100),
            null == (i = a.getNcModels) ||
                i.call(a).then((e) => {
                    (tT = e), r.emitChange();
                }),
            r.emitChange();
    } catch (t) {
        eV.warn("Failed to load Krisp module: ".concat(t.message)), ey.A.captureException(t);
        let e = eM.CO.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eM.CO.INITIALIZED : n;
        }
        e_.default.track(eR.HAw.VOICE_PROCESSING, {
            noise_canceller_error: e,
        }),
            nu({
                noiseCancellation: !1,
            });
    } finally {
        tI = !1;
    }
}

function rm() {
    return (0, eg.isWindows)() || (0, eg.isLinux)() || (0, eg.isMac)();
}

function rg() {
    !rm() || __OVERLAY__ || tI || tS
        ? (0, eg.isWeb)() && e5.supports(eM.O5.NOISE_CANCELLATION)
            ? ((tS = !0), r.emitChange())
            : (0, eg.isWeb)() &&
              nu({
                  noiseCancellation: !1,
              })
        : ((tI = !0), rh());
}

function rE(e) {
    let { enabled: t } = e;
    e_.default.track(eR.HAw.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != tN ? tN : null,
        enabled: t,
    }),
        nu({
            voiceFilterPlaybackEnabled: t,
        });
}

function ry(e) {
    let { newVoiceFilterId: t } = e;
    nu({
        mostRecentlyRequestedVoiceFilter: t,
    }),
        e5.eachConnection((e) => e.setVoiceFilterId(t));
}

function rb() {
    nu({
        mostRecentlyRequestedVoiceFilter: null,
    });
}

function rO(e) {
    let { voiceFilterId: t } = e;
    (tR = tN), (tP = tw), (tN = t), (tw = null === t ? null : Date.now());
}

function rv(e) {
    let t = e.bypassEnabled;
    nu({
        bypassSystemInputProcessing: t,
    }),
        e5.setAudioInputBypassSystemProcessing(t),
        nJ(e.location);
}

function rA(e) {
    rI(e.subsystem);
}

function rI(e) {
    e === eM.rB.AUTOMATIC
        ? (nu({
              automaticAudioSubsystem: !0,
          }),
          rS())
        : (nu({
              automaticAudioSubsystem: !1,
          }),
          e5.setAudioSubsystem(e));
}

function rS() {
    e5.queueAudioSubsystem(eM.rB.EXPERIMENTAL);
}

function rT(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && t5(i, null), null != t || null == n)) {
        tA = !1;
        return;
    }
    if (tA) return;
    tA = !0;
    let a = t1();
    (a.mute || a.deaf) &&
        (nu({
            deaf: !1,
            mute: !1,
        }),
        e5.eachConnection(t6));
}

function rC(e) {
    let { application: t } = e;
    e8.add(t.id);
}

function rN(e) {
    let { application: t } = e;
    e8.delete(t.id);
}

function rw(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (e9 = !1), e5.eachConnection(t6);
                break;
            case "video":
                t5(!1);
        }
}

function rR(e) {
    (e9 = e.enabled),
        e.unmute &&
            nu({
                mute: !1,
                deaf: !1,
            }),
        e5.eachConnection(t6);
}

function rP(e) {
    let { enabled: t } = e;
    ea.A.requestPermission(eD.iL.CAMERA), t5(t);
}

function rD(e) {
    let { sourceId: t, applicationName: n, quality: i } = e;
    if (!(0, w.Ao)() || null == I.A) return !1;
    let a = null,
        s = null,
        l = eh.A.getPidFromDesktopSource(t);
    ({ soundshareId: a, soundshareSession: s } = nA(l));
    let c = {
        desktopSource: {
            id: t,
            sourcePid: l,
            soundshareId: a,
            soundshareSession: s,
        },
        quality: i,
    };
    null != o &&
        (e5.setClipsSource(null),
        (0, eg.isWindows)() && null != o.desktopSource.soundshareId && S.c1(o.desktopSource.soundshareId)),
        null != a && nI(a, s),
        (o = c);
    let u = tX(),
        d = t1().videoHook;
    e5.setClipsSource({
        desktopDescription: {
            id: o.desktopSource.id,
            soundshareId: o.desktopSource.soundshareId,
            useVideoHook: d,
            useGraphicsCapture: nr(),
            useCaptureDeviceForEncode: !1,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: na(),
            videoHookStaleFrameTimeoutMs: eZ,
            graphicsCaptureStaleFrameTimeoutMs: eQ,
            hdrCaptureMode: u,
        },
        quality: i,
        applicationName: n,
    });
}

function rL(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((o = null), e5.setClipsSource(null));
}

function rx(e) {
    var t, n, r, i;
    let { settings: a } = e;
    if ((null == a ? void 0 : a.desktopSettings) != null) {
        let e = null,
            r = null,
            { sourceId: i, sound: o } = a.desktopSettings,
            s = null != (t = a.context) ? t : eM.x.DEFAULT,
            l =
                null != (n = a.qualityOptions)
                    ? n
                    : {
                          resolution: 720,
                          frameRate: 30,
                      },
            c = !1 === o ? null : eh.A.getPidFromDesktopSource(i);
        eg.isPlatformEmbedded &&
            !0 === o &&
            (({ soundshareId: e, soundshareSession: r } = nA(c)), null != e && nI(e, r)),
            t4(s),
            t5(s === eM.x.STREAM && td, {
                desktopSource: {
                    id: i,
                    sourcePid: c,
                    soundshareId: e,
                    soundshareSession: r,
                },
                quality: {
                    resolution: l.resolution,
                    frameRate: l.frameRate,
                },
            });
    } else if ((null == a ? void 0 : a.cameraSettings) != null) {
        let e = null != (r = a.context) ? r : eM.x.DEFAULT,
            { videoDeviceGuid: t, audioDeviceGuid: n } = a.cameraSettings,
            o = e === eM.x.STREAM && td,
            s =
                null != (i = a.qualityOptions)
                    ? i
                    : {
                          resolution: 720,
                          frameRate: 30,
                      };
        t5(o, {
            cameraSource: {
                videoDeviceGuid: t,
                audioDeviceGuid: n,
            },
            quality: {
                resolution: s.resolution,
                frameRate: s.frameRate,
            },
        });
    } else t5(td, null);
}

function rM(e) {
    let { section: t } = e;
    return t === eR.nc_.VOICE && np(), !1;
}

function rj() {
    return e5.eachConnection(nt), !1;
}

function rk(e) {
    let { enabled: t } = e,
        n = nu({
            aecDumpEnabled: t,
        });
    e5.setAecDump(n.aecDumpEnabled);
}

function rU(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (e7 = Object.values(eM.x).reduce((e, n) => {
        let r = n,
            i = e6();
        return (e[r] = h().merge(i, t[r])), e;
    }, {})),
        O.w.set(eB, e7),
        nf();
}

function rG(e) {
    let { state: t } = e,
        n = x.A.isEnabled();
    if (t === eR.g6G.BACKGROUND && td && !n) (tE = !0), t5(!1);
    else {
        if (t !== eR.g6G.ACTIVE || !tE) return !1;
        (tE = !1), t5(!0);
    }
    return !0;
}

function rF(e) {
    e5.eachConnection((t) => t.setBitRate(e.bitrate));
}

function rV() {
    if ((!td && null == a) || null != eT.A.getRTCConnectionId()) return !1;
    t5(!1, null);
}

function rB() {
    return !!tL && ((tL = !1), !0);
}

function rH(e) {
    e5.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}

function rY(e) {
    let { settings: t } = e;
    e5.applyMediaFilterSettings(t).finally(() => {
        (tx = !1), r.emitChange();
    });
}

function rW() {
    tx = !0;
}

function rK() {
    tx = !1;
}

function rz(e) {
    tK = e.enabled;
}

function rq() {
    if ((0, eg.isDesktop)() && eg.isPlatformEmbedded && !tQ) {
        tQ = !0;
        let e = async () => {
            let t = await new Promise((e) => {
                eb.Ay.pollQueueMetrics((t) => {
                    e(t);
                });
            });
            t.periodMs = eM.tl;
            let n = rQ(t);
            null !== n && e_.default.track(eR.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, eM.tl);
        };
        setTimeout(e, eM.tl);
    }
}
class rZ extends (d = y.Ay.Store) {
    initialize() {
        nn(),
            nc(),
            rg(),
            nG(),
            rq(),
            (tY = {
                [eM.O5.VIDEO]: e5.supports(eM.O5.VIDEO),
                [eM.O5.DESKTOP_CAPTURE]: e5.supports(eM.O5.DESKTOP_CAPTURE),
                [eM.O5.HYBRID_VIDEO]: e5.supports(eM.O5.HYBRID_VIDEO),
            }),
            this.waitFor(ev.default, eA.A, eI.A, eS.A, C.A, L.A, eT.A, M.Ay, el.A, ed.A, eN.default, ew.A, ep.A);
    }
    supports(e) {
        return e5.supports(e);
    }
    supportsInApp(e) {
        return tY[e] || e5.supports(e);
    }
    isSupported() {
        return e5.supported();
    }
    isNoiseSuppressionSupported() {
        return e5.supports(eM.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return r_();
    }
    isNoiseCancellationError() {
        return tL;
    }
    isAutomaticGainControlSupported() {
        return e5.supports(eM.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !ns() && (e5.supports(eM.O5.LEGACY_AUDIO_SUBSYSTEM) || e5.supports(eM.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return e5.supports(eM.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === e5.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return r_();
    }
    isAecDumpSupported() {
        return e5.supports(eM.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return e5.supports(eM.O5.VIDEO) && e5.supports(eM.O5.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        return (
            (null == (e = eS.A.getChannel(tD)) ? void 0 : e.type) !== eR.rbe.GUILD_STAGE_VOICE &&
            e1 &&
            K.A.simulcastEnabled()
        );
    }
    isVideoDecoderFallbackEnabled() {
        return tU;
    }
    getAecDump() {
        return t1().aecDumpEnabled;
    }
    getMediaEngine() {
        return e5;
    }
    getVideoComponent() {
        return e5.Video;
    }
    getCameraComponent() {
        return e5.Camera;
    }
    getKrispSuppressionLevel() {
        return null != l ? l : 100;
    }
    getKrispEnableStats() {
        return tC;
    }
    isEnabled() {
        return e9;
    }
    isMute() {
        return this.isSelfMute() || ts;
    }
    isDeaf() {
        return this.isSelfDeaf() || tu;
    }
    hasContext(e) {
        return null != e7[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eM.x.DEFAULT;
        return e === eM.x.DEFAULT && tl;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eM.x.DEFAULT;
        return (
            !this.isEnabled() ||
            t1(e).mute ||
            !ea.A.didHavePermission(eD.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eM.x.DEFAULT && tc)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return t_;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        t_ = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eM.x.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && eI.A.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return tK;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eM.x.DEFAULT;
        return !this.isSupported() || t1(e).deaf;
    }
    isVideoEnabled() {
        return td && ty;
    }
    isVideoAvailable() {
        return Object.values(ta).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eM.x.STREAM;
        return tt === e && null != a;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eM.x.STREAM;
        return tt === t && null != a && (null == (e = a.desktopSource) ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eM.x.DEFAULT;
        return e !== ev.default.getId() && (t1(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return e5.supports(eM.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eM.x.DEFAULT;
        return null != (t = t1(n).disabledLocalVideos[e]) && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eM.x.DEFAULT;
        return null != (t = t1(n).videoToggleStateMap[e]) ? t : eR.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eM.x.DEFAULT;
        return t === eM.x.DEFAULT && tV.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eM.x.DEFAULT;
        return e === eM.x.DEFAULT && tV.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tx;
    }
    isNativeAudioPermissionReady() {
        return tG;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return tt;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return tn;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eM.x.DEFAULT,
            n = t1(t).localPans[e];
        return null != n ? n : eq;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eM.x.DEFAULT,
            n = t === eM.x.STREAM ? eM.Cn : eM.Hz,
            r = t1(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return t1().inputVolume;
    }
    getOutputVolume() {
        return t1().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eM.x.DEFAULT;
        return t1(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eM.x.DEFAULT;
        return t1(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return tN;
    }
    getActiveVoiceFilterAppliedAt() {
        return tw;
    }
    getPreviousVoiceFilter() {
        return tR;
    }
    getPreviousVoiceFilterAppliedAt() {
        return tP;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return t1().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return t1().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            h().each(e7, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === eR.TBI.PUSH_TO_TALK && e8.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nm(tr, t1().inputDeviceId);
    }
    getOutputDeviceId() {
        return nm(ti, t1().outputDeviceId);
    }
    getVideoDeviceId() {
        return nm(ta, t1().videoDeviceId);
    }
    getInputDevices() {
        return tr;
    }
    getOutputDevices() {
        return ti;
    }
    getVideoDevices() {
        return ta;
    }
    getEchoCancellation() {
        let e = t1();
        return eI.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return e5.supports(eM.O5.SIDECHAIN_COMPRESSION) && t1().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return t1().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return t1().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tj && tj;
    }
    getLoopback() {
        return tH.size > 0;
    }
    getLoopbackReasons() {
        return tH;
    }
    getNoiseSuppression() {
        let e = t1();
        return eI.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = t1();
        return eI.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return t1().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return t1().noiseCancellation;
    }
    getHardwareEncoding() {
        return e1;
    }
    getEnableSilenceWarning() {
        return t1().silenceWarning;
    }
    getDebugLogging() {
        return e5.getDebugLogging();
    }
    getQoS() {
        return t1().qos;
    }
    getAttenuation() {
        return t1().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return t1().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return t1().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return no() && t1().automaticAudioSubsystem ? eM.rB.AUTOMATIC : e5.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return e5.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return t1().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === ex.my.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eM.x.DEFAULT;
        return t1(e);
    }
    getState() {
        return {
            settingsByContext: e7,
            inputDevices: tr,
            outputDevices: ti,
            appSupported: tY,
            krispModuleLoaded: tS,
            krispVersion: s,
            krispSuppressionLevel: l,
            goLiveSource: a,
            goLiveContext: tt,
        };
    }
    getInputDetected() {
        return tb;
    }
    getNoInputDetectedNotice() {
        return tv;
    }
    getPacketDelay() {
        return eg.isPlatformEmbedded || this.getMode() !== eR.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        e5.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return te;
    }
    getVideoHook() {
        return t1().videoHook;
    }
    supportsVideoHook() {
        return e5.supports(eM.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = t1().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return (
            e5.supports(eM.O5.EXPERIMENTAL_SOUNDSHARE) &&
            g().satisfies(null === I.A || void 0 === I.A ? void 0 : I.A.os.release, eP.$x)
        );
    }
    supportsHookSoundshare() {
        return (
            (0, eg.isWindows)() &&
            e5.supports(eM.O5.SOUNDSHARE) &&
            g().satisfies(null === I.A || void 0 === I.A ? void 0 : I.A.os.release, eP.ws)
        );
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = t1().useSystemScreensharePicker,
            n = (0, eg.isLinux)();
        return e && (null != t ? t : n);
    }
    supportsSystemScreensharePicker() {
        return e5.supports(eM.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return tZ;
    }
    getUseGamescopeCapture() {
        return tq;
    }
    getEverSpeakingWhileMuted() {
        return th;
    }
    getSpeakingWhileMuted() {
        return tm;
    }
    getKrispModelOverride() {
        return c;
    }
    getKrispModels() {
        return tT;
    }
    getKrispVadActivationThreshold() {
        var e;
        return null != (e = t1().modeOptions.vadKrispActivationThreshold) ? e : ez;
    }
    hasActiveCallKitCall() {
        return tz;
    }
    setHasActiveCallKitCall(e) {
        tz = e;
    }
    supportsScreenSoundshare() {
        return (0, eg.isMac)()
            ? e5.supports(eM.O5.SOUNDSHARE) &&
                  g().satisfies(null === I.A || void 0 === I.A ? void 0 : I.A.os.release, eP.P$) &&
                  na()
            : (0, eg.isWindows)()
              ? e5.supports(eM.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, eg.isLinux)() && e5.supports(eM.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, eg.isWindows)()) {
            var e, t;
            return null == (t = this.getInputDevices()[this.getInputDeviceId()]) || null == (e = t.effects)
                ? void 0
                : e.find((e) => e === e2);
        }
        if ((0, eg.isMac)() || (0, eg.isIOS)()) return u;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eM.x.DEFAULT,
            t = this.supports(eM.O5.VIDEO)
                ? [
                      {
                          rid: "100",
                          type: e === eM.x.DEFAULT ? eM.mI.VIDEO : eM.mI.SCREEN,
                          quality: eM.Y4,
                      },
                  ]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === eM.x.DEFAULT || this.goLiveSimulcastEnabled()) &&
                t.push({
                    rid: "50",
                    type: e === eM.x.DEFAULT ? eM.mI.VIDEO : eM.mI.SCREEN,
                    quality: eM.Cl,
                }),
            t
        );
    }
    fetchAsyncResources() {
        let e = {
            fetchDave: !1,
        };
        return (
            (0, eg.isWeb)() &&
                (e.fetchDave = J.f1.getCurrentConfig({
                    location: "MediaEngineStore fetchAsyncResources",
                }).loadWasmModule),
            e5.fetchAsyncResources(e)
        );
    }
    startDavePreload() {
        if (!tM && ((tM = !0), (0, eg.isWeb)())) {
            let e = {
                fetchDave: !0,
            };
            e5.fetchAsyncResources(e).catch((e) => {
                eV.warn("DAVE preload failed:", e), ey.A.captureException(e);
            });
        }
    }
    getSupportedSecureFramesProtocolVersion() {
        if ((0, eg.isWeb)()) {
            let { useWasmModule: e } = J.f1.getCurrentConfig({
                location: "MediaEngineStore getSupportedSecureFramesProtocolVersion",
            });
            if (!e) return 0;
        }
        let e = e5.getSupportedSecureFramesProtocolVersion();
        114 === e && (e = 1);
        let t = J.ex.getCurrentConfig({
                location: "MediaEngineStore",
            }),
            n = J.a.getConfig({
                location: "MediaEngineStore",
            });
        return (t.canSupportDaveProtocol || (n.allowOptIn && el.A.getPersistentCodesEnabled())) &&
            e >= t.protocolVersionFloor
            ? e
            : 0;
    }
    hasClipsSource() {
        return null != o;
    }
    getGpuBrand() {
        return tW;
    }
}

function rQ(e) {
    if (null == e.taskMetrics || 0 === e.taskMetrics.length || 1 === e.taskMetrics.length) return null;
    let t = {
        metrics_period_ms: e.periodMs,
        total_tasks: 0,
        total_exec_time_ns: 0,
        queue_name: e.queueName,
    };
    (t.total_tasks = e.taskMetrics.reduce((e, t) => e + t.count, 0)),
        (t.total_exec_time_ns = e.taskMetrics.reduce((e, t) => e + t.totalExecTimeNs, 0));
    let n = [...e.taskMetrics].sort((e, t) => t.longestExecTimeNs - e.longestExecTimeNs),
        r = [...e.taskMetrics].sort((e, t) => t.longestQueueTimeNs - e.longestQueueTimeNs);
    for (let e = 0; e < 3; e++)
        if (e < n.length) {
            let r = n[e];
            (t["slow_task_".concat(e, "_name")] = r.name),
                (t["slow_task_".concat(e, "_longest_exec_time_ns")] = r.longestExecTimeNs);
        }
    for (let e = 0; e < 3; e++)
        if (e < r.length) {
            let n = r[e];
            (t["delayed_task_".concat(e, "_name")] = n.name),
                (t["delayed_task_".concat(e, "_longest_queue_time_ns")] = n.longestQueueTimeNs);
        }
    return (t.full_task_report = JSON.stringify(n)), t;
}
ek(rZ, "displayName", "MediaEngineStore");
let rX = (r = new rZ(A.h, {
    VOICE_CHANNEL_SELECT: rT,
    VOICE_STATE_UPDATES: nR,
    CONNECTION_OPEN: nS,
    CONNECTION_CLOSED: nC,
    POST_CONNECTION_OPEN: nN,
    RTC_CONNECTION_STATE: nw,
    AUDIO_SET_TEMPORARY_SELF_MUTE: nP,
    AUDIO_TOGGLE_SELF_MUTE: nD,
    AUDIO_SET_SELF_MUTE: nL,
    AUDIO_TOGGLE_SELF_DEAF: nM,
    AUDIO_TOGGLE_LOCAL_MUTE: nj,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: nk,
    AUDIO_SET_LOCAL_VOLUME: nF,
    AUDIO_SET_LOCAL_PAN: nV,
    AUDIO_SET_MODE: nB,
    AUDIO_SET_INPUT_VOLUME: nH,
    AUDIO_SET_OUTPUT_VOLUME: nY,
    AUDIO_SET_INPUT_DEVICE: nW,
    AUDIO_SET_OUTPUT_DEVICE: nK,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: nq,
    AUDIO_SET_ECHO_CANCELLATION: n$,
    AUDIO_SET_SIDECHAIN_COMPRESSION: n0,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: n1,
    AUDIO_SET_LOOPBACK: n3,
    AUDIO_SET_NOISE_SUPPRESSION: n7,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: n8,
    AUDIO_SET_NOISE_CANCELLATION: n9,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: re,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: rn,
    AUDIO_SET_DEBUG_LOGGING: rr,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: ri,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: rt,
    MEDIA_ENGINE_SET_VIDEO_HOOK: ra,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: ro,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: rs,
    AUDIO_SET_ATTENUATION: rl,
    AUDIO_SET_QOS: rc,
    MEDIA_ENGINE_DEVICES: nQ,
    AUDIO_VOLUME_CHANGE: nX,
    AUDIO_RESET: ru,
    AUDIO_INPUT_DETECTED: rd,
    AUDIO_SET_SUBSYSTEM: rA,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rv,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rR,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rP,
    MEDIA_ENGINE_PERMISSION: rw,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rx,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nz,
    MEDIA_ENGINE_INTERACTION_REQUIRED: nZ,
    USER_SETTINGS_MODAL_INIT: rM,
    USER_SETTINGS_MODAL_SET_SECTION: rM,
    CERTIFIED_DEVICES_SET: rj,
    RPC_APP_CONNECTED: rC,
    RPC_APP_DISCONNECTED: rN,
    OVERLAY_INITIALIZE: nT,
    APP_STATE_UPDATE: rG,
    SET_CHANNEL_BITRATE: rF,
    SET_VAD_PERMISSION: rf,
    SET_NATIVE_PERMISSION: rp,
    SET_CHANNEL_VIDEO_QUALITY_MODE: rH,
    MEDIA_ENGINE_SET_AEC_DUMP: rk,
    MEDIA_ENGINE_RESET_SETTINGS: rU,
    CHANNEL_DELETE: rV,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rB,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rY,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rW,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rK,
    USER_SETTINGS_PROTO_UPDATE: nx,
    CLIPS_INIT: rD,
    CLIPS_SETTINGS_UPDATE: rL,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rz,
    VOICE_FILTER_REQUEST_SWITCH: ry,
    VOICE_FILTER_LOOPBACK_TOGGLE: rE,
    VOICE_FILTER_APPLIED: rO,
    VOICE_FILTER_DOWNLOAD_FAILED: rb,
    VOICE_FILTER_APPLY_FAILED: rb,
}));
