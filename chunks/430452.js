let r, i, a, o, s, l, c, u;
n.d(t, {
    A: () => r$,
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
    U = n(544746),
    G = n(820344),
    F = n(593595),
    V = n(788601),
    B = n(626078),
    H = n(509034),
    Y = n(638188),
    W = n(269377),
    K = n(934341),
    z = n(658046),
    q = n(525286),
    Z = n(780732),
    Q = n(495439),
    X = n(927170),
    J = n(233232),
    $ = n(140175),
    ee = n(267378),
    et = n(223572),
    en = n(276006),
    er = n(670470),
    ei = n(896014),
    ea = n(765396),
    eo = n(75076),
    es = n(674966),
    el = n(559633),
    ec = n(3527),
    eu = n(714763),
    ed = n(879172),
    ef = n(555444),
    ep = n(617617),
    e_ = n(996744),
    eh = n(28075),
    em = n(954571),
    eg = n(353835),
    eE = n(927813),
    ey = n(723702),
    eb = n(290805),
    eO = n(728458),
    ev = n(837921),
    eA = n(350535),
    eI = n(961350),
    eS = n(131319),
    eT = n(347481),
    eC = n(734057),
    eN = n(383501),
    ew = n(851581),
    eR = n(287809),
    eP = n(117549),
    eD = n(652215),
    eL = n(502075),
    ex = n(765682),
    eM = n(355097),
    ej = n(509381),
    ek = n(731854),
    eU = n(985018);

function eG(e, t, n) {
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

function eF(e) {
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
                eG(e, t, n[t]);
            });
    }
    return e;
}

function eV(e, t) {
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

function eB(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eV(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eH = new R.A("MediaEngineStore"),
    eY = "MediaEngineStore",
    eW = 4,
    eK = 1,
    ez = 1,
    eq = 1,
    eZ = 0.5,
    eQ = {
        left: 1,
        right: 1,
    },
    eX = 500,
    eJ = 5 * eE.A.Millis.SECOND,
    e$ = -60,
    e0 = 100,
    e1 = 2 * eE.A.Millis.SECOND,
    e2 = 30 * eE.A.Millis.SECOND,
    e3 = !0,
    e6 = "deep_noise_suppression",
    e4 = 0;

function e5() {
    return {
        mode: eD.TBI.VOICE_ACTIVITY,
        modeOptions: {
            threshold: e$,
            autoThreshold: ey.isPlatformEmbedded || __OVERLAY__,
            vadUseKrisp: !0,
            vadKrispActivationThreshold: eZ,
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
        inputVolume: ek.Hz,
        outputVolume: ek.Hz,
        inputDeviceId: ek.dx,
        outputDeviceId: ek.dx,
        videoDeviceId: ek.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: e8.supports(ek.O5.VIDEO_HOOK),
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
let e7 = {
        [ej.my.CUSTOM]: {},
        [ej.my.VOICE_ISOLATION]: {
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
        [ej.my.STUDIO]: {
            mode: eD.TBI.VOICE_ACTIVITY,
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
    e8 = (0, b.hB)((0, b.WI)());
eH.enableNativeLogger(!0);
let e9 = {},
    te = new Set([ek.x.DEFAULT]),
    tt = e8.supports(ek.O5.AUTO_ENABLE),
    tn = !1,
    tr = ek.x.STREAM,
    ti = performance.now(),
    ta = {
        [ek.dx]: nm("No Input Devices"),
    },
    to = {
        [ek.dx]: nm("No Output Devices"),
    },
    ts = {
        [ek.dx]: nm("No Video Devices"),
    },
    tl = new v.Ep(),
    tc = !1,
    tu = !1,
    td = !1,
    tf = !1,
    tp = !1,
    t_ = ek.qe,
    th = ek.qe,
    tm = !1,
    tg = !1,
    tE = !1,
    ty = new v.Ep(),
    tb = !1,
    tO = !1,
    tv = null,
    tA = !1,
    tI = !1,
    tS = !1,
    tT = !1,
    tC = !1,
    tN = [],
    tw = !1,
    tR = null,
    tP = null,
    tD = null,
    tL = null,
    tx = null,
    tM = !1,
    tj = !1,
    tk = !1,
    tU = null,
    tG = null,
    tF = !1,
    tV = !1;
es.A.hasPermission(ex.iL.AUDIO, {
    showAuthorizationError: !1,
}),
    es.A.hasPermission(ex.iL.CAMERA, {
        showAuthorizationError: !1,
    });
let tB = !1,
    tH = new Set(),
    tY = tB,
    tW = new Set(),
    tK = {},
    tz = null,
    tq = !0,
    tZ = !1,
    tQ = !1,
    tX = !1,
    tJ = !1;

function t$() {
    var e, t;
    return null != (e = null == (t = eR.default.getCurrentUser()) ? void 0 : t.isStaff()) && e
        ? "always"
        : eb.y === E.O.CANARY
          ? "permittedDevicesOnly"
          : "never";
}
async function t0() {
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

function t1() {
    return null != tG ? tG : "u" > typeof window ? (tG = t0().then((e) => ((tU = e), e))) : Promise.resolve(!1);
}

function t2() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.x.DEFAULT,
        t = e9[e];
    return null == t && ((t = e5()), (e9[e] = t)), t;
}

function t3() {
    var e, t, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.x.DEFAULT,
        i = t2(r),
        a = e7[null != (e = i.activeInputProfile) ? e : ej.my.CUSTOM],
        o = eF({}, null != (t = i.modeOptions) ? t : {}, null != (n = a.modeOptions) ? n : {});
    if (
        (null == o.vadDuringPreProcess &&
            (o.vadDuringPreProcess = (0, et.R)({
                location: "getSettings",
            }).enabled),
        (null == o.vadKrispActivationThreshold && !0 === a.automaticGainControl) || !0 === i.automaticGainControl)
    ) {
        let e = (0, k.F)({
            location: "getSettings",
        });
        null != e.vadKrispActivationThreshold && (o.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return eB(eF({}, i, a), {
        modeOptions: o,
    });
}

function t6(e) {
    var t, n;
    let r = t3(e.context),
        i = r.mode;
    e.context === ek.x.DEFAULT &&
        ((0, ef.H)({
            location: "setInputMode",
            autoTrackExposure: !1,
        }).enableLatching &&
            i === eD.TBI.PUSH_TO_TALK &&
            r.modeOptions.pttLatchingEnabled &&
            (i = eD.TBI.VOICE_ACTIVITY),
        (0, $.N)(!1, !1, !1)),
        e.setInputMode(i, {
            vadThreshold: r.modeOptions.threshold,
            vadAutoThreshold: r.modeOptions.autoThreshold,
            vadUseKrisp: r.modeOptions.vadUseKrisp && rm(),
            vadKrispActivationThreshold: null != (t = r.modeOptions.vadKrispActivationThreshold) ? t : eZ,
            vadLeading: r.modeOptions.vadLeading,
            vadTrailing: r.modeOptions.vadTrailing,
            vadDuringPreProcess: null != (n = r.modeOptions.vadDuringPreProcess) && n,
            pttReleaseDelay: Math.round(r.modeOptions.delay),
        });
}

function t4(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ek.Hz;
    return h().clamp(e, 0, t);
}

function t5(e) {
    let t = t3(e.context),
        n = !tt || t.mute || t.deaf;
    e.context === ek.x.DEFAULT
        ? (n = n || tc || tu || td || !es.A.didHavePermission(ex.iL.AUDIO))
        : e.context === ek.x.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === ek.x.DEFAULT && T.A.updateNativeMute();
}

function t7(e) {
    e !== tr && (null != a && e8.setGoLiveSource(null, tr), (tr = e));
}

function t8() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tp,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        s = a;
    if (
        ((null == s ? void 0 : s.desktopSource) != null &&
            s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? void 0 : e.id) &&
            (null != s.desktopSource.soundshareId && (0, ey.isWindows)() && S.c1(s.desktopSource.soundshareId),
            e8.setGoLiveSource(null, tr)),
        (null == s ? void 0 : s.cameraSource) != null &&
            (s.cameraSource.videoDeviceGuid !==
                (null == o || null == (t = o.cameraSource) ? void 0 : t.videoDeviceGuid) ||
                s.cameraSource.audioDeviceGuid !==
                    (null == o || null == (n = o.cameraSource) ? void 0 : n.audioDeviceGuid)) &&
            e8.setGoLiveSource(null, tr),
        tp || i)
    ) {
        let e = t3().videoDeviceId;
        tp && e === ek.dx && th === ek.dx && t_ !== ek.qe ? (e = t_) : (th = e),
            (t_ = (tp = i) ? nE(ts, e) : ek.qe),
            e8.setVideoInputDevice(t_);
    }
    if (((a = o), null != o)) {
        let e = {
            resolution: o.quality.resolution,
            frameRate: o.quality.frameRate,
        };
        if (null != o.desktopSource) {
            let t = t$(),
                n = t3().videoHook,
                i = na(),
                a = i ? (no() ? eL.zl : eL.eg) : 0,
                s = (0, ey.isWindows)() && (0, en.b)("updateVideo").enabled;
            e8.setGoLiveSource(
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
                        allowScreenCaptureKit: ns(),
                        videoHookStaleFrameTimeoutMs: eX,
                        graphicsCaptureStaleFrameTimeoutMs: eJ,
                        hdrCaptureMode: t,
                        enableGlobalFramePoolLock: (0, z.H)({
                            location: "updateVideo",
                        }).enabled,
                    },
                    quality: e,
                },
                tr,
            );
        }
        null != o.cameraSource &&
            e8.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: o.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                tr,
            );
    }
}

function t9(e) {
    switch (e) {
        case ek.CO.CPU_OVERUSE:
            return D.B6.NoiseCancellerCpuOveruse;
        case ek.CO.FAILED:
            return D.B6.NoiseCancellerFailed;
        case ek.CO.VAD_CPU_OVERUSE:
            return D.B6.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}

function ne(e) {
    let t = (0, k.F)({
        location: "getAutomaticGainControlConfig",
        disable: !e,
    }).noiseCancellationConfig;
    return eF(
        {
            enabled: e,
        },
        t,
    );
}

function nt(e, t) {
    e.setAutomaticGainControl(ne(t));
}

function nn(e, t) {
    let n = (0, ec.A)(t, r.getSystemMicrophoneMode(), {
        location: "setNoiseCancellation",
    });
    n !== t && eH.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: i } = (0, k.F)({
        location: "setNoiseCancellation",
        disable: !t,
    });
    e.setNoiseCancellationDuringProcessing(i);
    let { noiseCancellationAfterProcessing: a, vadAfterWebrtc: o } = (0, X.$)({
        location: "setNoiseCancellation",
    });
    e.setNoiseCancellationAfterProcessing(a), e.setVADAfterWebrtc(o);
}

function nr(e) {
    let t = t3(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eT.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eT.A.hasNoiseSuppression(n) || t.noiseSuppression),
        nt(e, eT.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        nn(e, t.noiseCancellation),
        e.setVoiceFilterId(tR),
        (0, ey.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}

function ni() {
    tl.start(e2, () => {
        eH.error("Device enumeration timed out"), em.default.track(eD.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
    }),
        e8.on(b.bg.Connection, (e) => {
            t6(e), t5(e), nr(e);
            let t = t3();
            e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
                e.setQoS(t.qos);
            let n = (0, Q.K)({
                location: "setupMediaEngine",
            }).treatment;
            (tF = n === Q.c.NoSoftwareDecodeWithFallback),
                n === Q.c.NoSoftwareDecode || n === Q.c.NoSoftwareDecodeWithFallback
                    ? (e.setExperimentFlag(ek.fd.H265_HARDWARE_ONLY, !0),
                      (0, ey.isWindows)()
                          ? t1().then((t) => {
                                e.setExperimentFlag(ek.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                            })
                          : (0, ey.isMac)() && e.setExperimentFlag(ek.fd.H265_HARDWARE_DECODE_AVAILABLE, !0))
                    : n === Q.c.Disabled &&
                      (e.setExperimentFlag(ek.fd.H265_HARDWARE_ONLY, !0),
                      e.setExperimentFlag(ek.fd.H265_HARDWARE_DECODE_AVAILABLE, !1)),
                (0, ey.isWindows)() &&
                    (0, Z.r)({
                        location: "setupMediaEngine",
                    }).enabled &&
                    e.setExperimentFlag(ek.fd.USE_H264_MF_DECODER, !0);
            let i = eN.A.getGuildId(),
                {
                    muteBeforeProcessing: o,
                    pttBeforeProcessing: s,
                    skipEncode: l,
                } = (null != i ? W.A : Y.A).getCurrentConfig(
                    {
                        location: "setupMediaEngine",
                        guildId: null != i ? i : void 0,
                    },
                    {
                        autoTrackExposure: !0,
                    },
                );
            o && e.setExperimentFlag(ek.fd.MUTE_BEFORE_PROCESSING, !0),
                s && e.setExperimentFlag(ek.fd.PTT_BEFORE_PROCESSING, !0),
                l && e.setExperimentFlag(ek.fd.SKIP_ENCODE, !0),
                (0, J.J)({
                    location: "setupMediaEngine",
                }).enabled && e.setExperimentFlag(ek.fd.LOW_LATENCY_RATE_CONTROL, !0);
            let c = !1,
                u = !0;
            if (
                (e.setExperimentFlag(ek.fd.RESET_DECODER_ON_ERRORS, !0),
                c && e.setExperimentFlag(ek.fd.SOFTWARE_FALLBACK_ON_ERRORS, !0),
                u && e.setExperimentFlag(ek.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0),
                e.context === ek.x.STREAM)
            ) {
                let t = nb(to);
                e.setSoundshareDiscardRearChannels(t);
                let { simulcastEnabled: n, lqStreamBitrate: r } = q.A.getConfig();
                e.configureGoLiveSimulcast(n, r);
            }
            if ((0, ey.isWindows)())
                e.setExperimentFlag(ek.fd.SIGNAL_AV1, !0), e.setExperimentFlag(ek.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            else if ((0, ey.isMac)()) {
                e.setExperimentFlag(ek.fd.SIGNAL_AV1_DECODE, !0);
                let { enabled: t } = (0, G.t)("MediaEngineStore");
                t && e.setExperimentFlag(ek.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            } else if ((0, ey.isLinux)()) e.setExperimentFlag(ek.fd.SIGNAL_AV1_DECODE, !0);
            else if ((0, ey.isIOS)()) {
                let { enabled: t } = (0, U.$)("MediaEngineStore");
                t &&
                    (e.setExperimentFlag(ek.fd.SIGNAL_AV1_DECODE, !0),
                    e.setExperimentFlag(ek.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
            }
            if ((0, ey.isWeb)()) {
                let { enabled: t } = (0, K.O)("MediaEngineStore");
                e.setExperimentFlag(ek.fd.BROWSER_HEVC, t);
            }
            if (
                ((0, ey.isWindows)() &&
                    (null == tz ? void 0 : tz.startsWith("AMD")) &&
                    (0, ei.F)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(ek.fd.WMF_GPU_ENCODE, !0),
                (0, ey.isWindows)() &&
                    (null == tz ? void 0 : tz.startsWith("Intel")) &&
                    (0, ea.J)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(ek.fd.WMF_GPU_ENCODE, !0),
                (0, ey.isWindows)() &&
                    (null == tz ? void 0 : tz.startsWith("Qualcomm")) &&
                    (0, ei.F)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(ek.fd.WMF_GPU_ENCODE, !0),
                e8.setHasFullbandPerformance((0, P.A)()),
                e.setRemoteAudioHistory(1e3),
                (0, N.A)(r))
            ) {
                let { enableViewerClipping: t } = er.A.getCurrentConfig(
                    {
                        location: "f627ab_15",
                    },
                    {
                        autoTrackExposure: !1,
                    },
                );
                e.setViewerSideClip(t), e.setClipsKeyFrameInterval(ek.X1);
            }
            for (let n of ((t = t3(e.context)), e.setPostponeDecodeLevel(e0), Object.keys(t.localMutes)))
                n !== eI.default.getId() && e.setLocalMute(n, t.localMutes[n]);
            for (let n of Object.keys(t.localVolumes))
                n !== eI.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
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
                e.context === ek.x.DEFAULT &&
                    ((tg = !1),
                    (tE = !1),
                    e.on(b.yq.SpeakingWhileMuted, () => {
                        (tg = !0),
                            (tE = !0),
                            r.emitChange(),
                            ty.stop(),
                            ty.start(e1, () => {
                                (tE = !1), r.emitChange();
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
                        em.default.track(
                            eD.HAw.VIDEOHOOK_INITIALIZED,
                            eF(
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
                    eH.warn("noisecancellererror event: ".concat(e)),
                        (0, D.QW)({
                            type: D.iy.NOISE_CANCELLER_ERROR,
                            underlyingError: t9(e),
                        }),
                        (tM = !0),
                        em.default.track(eD.HAw.VOICE_PROCESSING, {
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
                    eH.warn("voiceactivitydetectorerror event: ".concat(e)),
                        (0, D.QW)({
                            type: D.iy.NOISE_CANCELLER_ERROR,
                            underlyingError: t9(e),
                        }),
                        em.default.track(eD.HAw.VOICE_PROCESSING, {
                            noise_canceller_error: e,
                        }),
                        A.h.dispatch({
                            type: "AUDIO_SET_MODE",
                            context: ek.x.DEFAULT,
                            mode: eD.TBI.VOICE_ACTIVITY,
                            options: eB(eF({}, t3(ek.x.DEFAULT).modeOptions), {
                                vadUseKrisp: !1,
                            }),
                        }),
                        A.h.dispatch({
                            type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
                            code: e,
                        });
                }),
                e.on(b.yq.SdpError, (e, t, n, r) => {
                    em.default.track(eD.HAw.SDP_ERROR, {
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
                e.setBitRate(eS.A.bitrate),
                e.applyVideoQualityMode(eP.A.mode),
                e8.supports(ek.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                    e8.setAsyncVideoInputDeviceInit((0, B.v)("setupMediaEngine").enabled);
        }),
        e8.on(b.bg.DeviceChange, (e, t, n) => {
            tl.stop(),
                A.h.dispatch({
                    type: "MEDIA_ENGINE_DEVICES",
                    inputDevices: e,
                    outputDevices: t,
                    videoDevices: n,
                });
        }),
        e8.on(b.bg.VolumeChange, (e, t) => {
            A.h.dispatch({
                type: "AUDIO_VOLUME_CHANGE",
                inputVolume: e,
                outputVolume: t,
            });
        }),
        e8.on(b.bg.DesktopSourceEnd, (e, t) => {
            A.h.dispatch({
                type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                settings: null,
                endReason: e,
                errorCode: t,
            });
        }),
        e8.on(b.bg.AudioPermission, (e) => {
            (tV = !0),
                A.h.dispatch({
                    type: "MEDIA_ENGINE_PERMISSION",
                    kind: "audio",
                    granted: e,
                });
        }),
        e8.on(b.bg.VideoPermission, (e) => {
            A.h.dispatch({
                type: "MEDIA_ENGINE_PERMISSION",
                kind: "video",
                granted: e,
            });
        }),
        e8.on(b.bg.WatchdogTimeout, async () => {
            let e;
            try {
                await eg.A.submitLiveCrashReport({
                    message: {
                        message: "Voice Watchdog Timeout",
                    },
                });
            } catch (t) {
                "number" == typeof t.status && (e = t.status);
            }
            eH.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)),
                em.default.track(eD.HAw.VOICE_WATCHDOG_TIMEOUT, {
                    minidump_submission_error: e,
                });
        }),
        e8.on(b.bg.VideoInputInitialized, (e) => {
            em.default.track(eD.HAw.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired
                    ? null
                    : Math.round(e.timeToFirstFrame * eE.A.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: eN.A.getMediaSessionId(),
                rtc_connection_id: eN.A.getRTCConnectionId(),
            });
        }),
        e8.on(b.bg.AudioInputInitialized, (e) => {
            em.default.track(eD.HAw.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * eE.A.Millis.SECOND),
                rtc_connection_id: eN.A.getRTCConnectionId(),
            });
        }),
        e8.on(b.bg.ClipsRecordingRestartNeeded, () => {
            A.h.dispatch({
                type: "CLIPS_RESTART",
            });
        }),
        e8.on(b.bg.ClipsInitFailure, (e, t) => {
            A.h.wait(() => {
                A.h.dispatch({
                    type: "CLIPS_INIT_FAILURE",
                    errMsg: e,
                    applicationName: t,
                });
            });
        }),
        e8.on(b.bg.ClipsRecordingEnded, (e, t) => {
            var n, r;
            (null == o || null == (n = o.desktopSource) ? void 0 : n.id) === e &&
                (null != t && (null == a || null == (r = a.desktopSource) ? void 0 : r.soundshareId) !== t && S.c1(t),
                (o = null));
        }),
        e8.on(b.bg.NativeScreenSharePickerUpdate, (e, t) => {
            A.h.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE",
                existing: e,
                content: t,
            });
        }),
        e8.on(b.bg.NativeScreenSharePickerCancel, (e) => {
            A.h.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL",
                existing: e,
            });
        }),
        e8.on(b.bg.NativeScreenSharePickerError, (e) => {
            A.h.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_ERROR",
                error: e,
            });
        }),
        e8.on(b.bg.AudioDeviceModuleError, (e, t, n) => {
            em.default.track(eD.HAw.AUDIO_DEVICE_MODULE_ERROR, {
                audio_device_module: e,
                code: t,
                device_name: n,
            });
        }),
        e8.on(b.bg.VideoCodecError, (e) => {
            let t = "encode" === e.mode ? D.iy.VIDEO_ENCODE_ERROR : D.iy.VIDEO_DECODE_ERROR,
                n = {
                    videoCodec: e.codecStandard,
                    errorMessage: e.message,
                };
            (0, D.QW)(
                t === D.iy.VIDEO_ENCODE_ERROR
                    ? eB(
                          eF(
                              {
                                  type: t,
                              },
                              n,
                          ),
                          {
                              videoEncoder: e.implName,
                          },
                      )
                    : eB(
                          eF(
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
        e8.on(b.bg.ConnectionStats, (e) => {
            A.h.dispatch({
                type: "MEDIA_ENGINE_CONNECTION_STATS",
                connectionStats: e.map((e) => {
                    let { stats: t, connection: n } = e;
                    return {
                        stats: t,
                        mediaEngineConnectionId: n.mediaEngineConnectionId,
                        version: e4++,
                        context: n.context,
                    };
                }),
            });
        }),
        e8.on(b.bg.VoiceQueueMetrics, (e) => {
            let t = rJ(e);
            null !== t && em.default.track(eD.HAw.VOICE_QUEUE_METRICS, t);
        }),
        e8.setOnVideoContainerResized((e, t, n) => {
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
        n5(),
        n8(),
        e8.supports(ek.O5.ASYNC_CLIPS_SOURCE_DEINIT) &&
            e8.setAsyncClipsSourceDeinit((0, H.V)("setupMediaEngine").enabled),
        nu.reset(),
        (0, ew.w)().then((e) => {
            null != e && (tz = e.gpu_brand);
        }),
        e8.on(b.bg.SystemMicrophoneModeChange, (e) => {
            (u = e), e8.eachConnection(nr);
        });
}

function na() {
    return (0, ey.isWindows)() && g().satisfies(null === I.A || void 0 === I.A ? void 0 : I.A.os.release, eL.yg);
}

function no() {
    return (0, ey.isWindows)() && g().satisfies(null === I.A || void 0 === I.A ? void 0 : I.A.os.release, eL.fG);
}

function ns() {
    return (
        (0, ey.isMac)() &&
        e8.supports(ek.O5.SCREEN_CAPTURE_KIT) &&
        g().satisfies(null === I.A || void 0 === I.A ? void 0 : I.A.os.release, eL.e)
    );
}

function nl() {
    return (
        (0, ey.isWindows)() &&
        e8.supports(ek.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        e8.supports(ek.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}

function nc() {
    return e8.supports(ek.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
let nu = new (class {
    start() {
        this.started || ((this.started = !0), e8.on(b.bg.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout &&
                (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            e8.removeListener(b.bg.Silence, this.handleSilence),
            A.h.dispatch({
                type: "AUDIO_INPUT_DETECTED",
                inputDetected: null,
            }));
    }
    update() {
        let e = t3();
        !tA && eN.A.getState() === eD.S7L.RTC_CONNECTED && e.mode === eD.TBI.VOICE_ACTIVITY && e.silenceWarning
            ? this.start()
            : this.stop();
    }
    reset() {
        this.stop(), this.update();
    }
    constructor() {
        eG(this, "stateChangeTimeout", void 0),
            eG(this, "noVoiceTimeout", 5e3),
            eG(this, "voiceTimeout", 1500),
            eG(this, "started", !1),
            eG(this, "handleSilence", (e) => {
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
                                    e && (tI = !0));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout,
                    ));
            });
    }
})();

function nd() {
    var e;
    let t = O.w.get("audio");
    null != t &&
        (O.w.set(eY, {
            [ek.x.DEFAULT]: t,
        }),
        O.w.remove("audio")),
        (e9 = null != (e = O.w.get(eY)) ? e : {}),
        h().each(e9, (e) => {
            if (
                (h().defaultsDeep(e, e5()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, eA.OH)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== eW &&
                    ((e.vadUseKrispSettingVersion = eW), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                !e.vadThrehsoldMigrated)
            ) {
                var t;
                (e.vadThrehsoldMigrated = !0),
                    (null == (t = e.modeOptions) ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = e$);
            }
            e8.supports(ek.O5.SIDECHAIN_COMPRESSION) &&
                e.sidechainCompressionSettingVersion < eq &&
                ((e.sidechainCompressionSettingVersion = eq), (e.sidechainCompression = !0)),
                (0, ey.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== ez &&
                      ((e.ncUseKrispjsSettingVersion = ez), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== eK &&
                      ((e.ncUseKrispSettingVersion = eK), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
        }),
        n_();
}

function nf(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ek.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = t2(t);
    return Object.assign(r, e), !__OVERLAY__ && n && O.w.set(eY, e9), r;
}

function np() {
    O.w.remove(eY), location.reload();
}

function n_() {
    let e = t3();
    e8.setAudioInputDevice(e.inputDeviceId),
        e8.setAudioOutputDevice(e.outputDeviceId),
        t8(),
        e8.setInputVolume(e.inputVolume),
        e8.setOutputVolume(e.outputVolume),
        e8.setAecDump(e.aecDumpEnabled),
        e8.setSidechainCompression(e.sidechainCompression),
        e8.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        e8.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing);
}

function nh() {
    tt ||
        e8.enable().then(() =>
            A.h.dispatch({
                type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
                enabled: !0,
                unmute: !1,
            }),
        );
}

function nm(e) {
    return {
        id: ek.dx,
        index: 0,
        name: e,
        disabled: !0,
        guid: void 0,
        hardwareId: void 0,
        containerId: void 0,
    };
}

function ng(e, t) {
    if (0 === e.length) {
        let e = nm(t);
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

function nE(e, t) {
    var n, r;
    let i = null != (n = null != (r = e[t]) ? r : e[ek.dx]) ? n : h()(e).values().first();
    return null != i ? i.id : t;
}

function ny(e) {
    let t = ta;
    if (((ta = ng(e, eU.intl.string(eU.t["/QIjDA"]))), !h().isEqual(ta, t))) {
        let e = t3(),
            t = nE(ta, e.inputDeviceId);
        e8.setAudioInputDevice(t), e8.eachConnection(nr);
    }
}

function nb(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}

function nO(e) {
    e8.eachConnection((t) => {
        t.context === ek.x.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}

function nv(e) {
    let t = to;
    if (((to = ng(e, eU.intl.string(eU.t.xlUg0v))), !h().isEqual(to, t))) {
        let e = t3(),
            n = nE(to, e.outputDeviceId);
        e8.setAudioOutputDevice(n);
        let r = nb(t),
            i = nb(to);
        r !== i && nO(i);
    }
}

function nA(e) {
    tO = e.length > 0;
    let t = ts;
    if (((ts = ng(e, eU.intl.string(eU.t.WKWARY))), tp && !h().isEqual(ts, t))) {
        var n;
        let e = void 0 !== ts[t_],
            r = t_ === ek.dx && (null == (n = t[ek.dx]) ? void 0 : n.disabled);
        t8(e || r);
    }
}

function nI() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        r =
            null != (e = ep.A.settings.audioContextSettings)
                ? e
                : {
                      user: {},
                      stream: {},
                  };
    for (let e of Object.keys(r)) {
        let i = e === eM.W.USER ? ek.x.DEFAULT : ek.x.STREAM,
            a = i === ek.x.STREAM ? ek.Cn : ek.Hz,
            o = null != (t = r[e]) ? t : {},
            { localMutes: s, localVolumes: l } = t3(i);
        for (let [e, t] of Object.entries(o))
            null == (0, ed.tM)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== a ? (l[e] = t.volume) : delete l[e],
                e8.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (n)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == o[e] &&
                    (delete s[e],
                    delete l[e],
                    e8.eachConnection((t) => {
                        t.setLocalVolume(e, a), t.setLocalMute(e, !1);
                    }, i));
        nf(
            {
                localMutes: s,
                localVolumes: l,
            },
            i,
        );
    }
}

function nS(e) {
    if (null == r)
        return (
            eH.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
            {
                soundshareId: null,
                soundshareSession: "",
            }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : eg.A.getAudioPid(e),
            n = "";
        return (
            null != t && (n = eg.A.generateSessionFromPid(t)),
            {
                soundshareId: t,
                soundshareSession: n,
            }
        );
    }
}

function nT(e, t) {
    (0, ey.isWindows)() &&
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

function nC(e) {
    (i = e.sessionId), (tc = !1), (tf = !1);
    let t = t3();
    if (
        (nl() && (nc() ? rT(ek.rB.AUTOMATIC) : t.automaticAudioSubsystem && rC()),
        e8.supports(ek.O5.OFFLOAD_ADM_CONTROLS))
    ) {
        let e = !1;
        (0, ey.isDesktop)()
            ? (e = (0, F.i)({
                  location: "handleConnectionOpen",
              }).enabled)
            : ((0, ey.isIOS)() || (0, ey.isAndroid)()) &&
              (e = (0, V.Y)({
                  location: "handleConnectionOpen",
              }).enabled),
            e8.setOffloadAdmControls(e);
    }
    (0, e_.Lb)({
        location: "MediaEngineStore",
        autoTrackExposure: !1,
    }) &&
        null !== t.mostRecentlyRequestedVoiceFilter &&
        (0, ey.isDesktop)() &&
        (eh.A.getLastInitAttemptMayHaveCrashed()
            ? (A.h.dispatch({
                  type: "AUDIO_SET_SELF_MUTE",
                  mute: !0,
                  context: ek.x.DEFAULT,
                  playSoundEffect: !0,
              }),
              nf({
                  mostRecentlyRequestedVoiceFilter: null,
              }))
            : n(342887).md()),
        nI();
}

function nN(e) {
    let { mediaEngineState: t } = e;
    (e9 = t.settingsByContext),
        (ta = t.inputDevices),
        (to = t.outputDevices),
        (tK = t.appSupported),
        (tC = t.krispModuleLoaded),
        (s = t.krispVersion),
        (tr = t.goLiveContext);
}

function nw() {
    i = null;
}

function nR() {
    if ((0, ey.isWeb)()) {
        let e = ee.f1.getCurrentConfig({
            location: "MediaEngineStore handlePostConnectionOpen",
        });
        e.loadWasmModule && e.preload && r.startDavePreload();
    }
    return !1;
}

function nP(e) {
    switch (e.state) {
        case eD.S7L.CONNECTING:
            nh();
            break;
        case eD.S7L.RTC_CONNECTING:
            (tA = !1), (tI = !1);
            break;
        case eD.S7L.RTC_CONNECTED:
            t8();
            break;
        case eD.S7L.DISCONNECTED:
            nF(), nV();
    }
    nu.update();
}

function nD(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (tc = t.mute || t.suppress), (tf = t.deaf), e8.eachConnection(t5);
            let e = null != t.guildId && null != t.channelId && null != tx && tx !== t.channelId,
                n = !tS && null == t.channelId;
            return t8(!e && !n && tp), (tx = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== eI.default.getId() || null != eN.A.getChannelId() || t8(!1, null), e;
    }, !1);
}

function nL(e) {
    let { mute: t } = e;
    (tu = t), e8.eachConnection(t5);
}

function nx(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = t3(t);
    if (t === ek.x.DEFAULT && (es.A.requestPermission(ex.iL.AUDIO), td)) return !1;
    (r = !i && !r) || (i = !1),
        n || (tm = !0),
        nf(
            {
                mute: r,
                deaf: i,
            },
            t,
        ),
        e8.eachConnection(t5);
}

function nM(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    nf(
        {
            mute: n,
        },
        t,
    ),
        r || (tm = !0),
        e8.eachConnection(t5);
}

function nj(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== eM.oD.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    nI(!0);
}

function nk(e) {
    let { context: t } = e;
    nf(
        {
            deaf: !t3(t).deaf,
        },
        t,
    ),
        e8.eachConnection(t5);
}

function nU(e) {
    let { context: t, userId: n } = e;
    if (n === eI.default.getId()) return;
    let { localMutes: r } = t3(t);
    r[n] ? delete r[n] : (r[n] = !0),
        nf(
            {
                localMutes: r,
            },
            t,
        ),
        e8.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}

function nG(e) {
    var t, n, r, i, a, o, s;
    let { context: l, userId: c, videoToggleState: u, persist: d, isAutomatic: f } = e;
    p()(!(d && f), "These are not allowed to both be true.");
    let _ = u === eD.bb8.DISABLED,
        { disabledLocalVideos: h } = t3(l),
        m = null != (t = h[c]) && t,
        g = tH.has(c),
        E = u === eD.bb8.AUTO_ENABLED || u === eD.bb8.MANUAL_ENABLED;
    eH.info(
        "disableVideo="
            .concat(_, " currentlyDisabled=")
            .concat(m, " currentlyAutoDisabled=")
            .concat(g, ", isVideoShown=")
            .concat(E),
    ),
        p()(!(g && !m), "If you are auto-disabled, then you are also disabled.");
    let y = _ !== m,
        b = l === ek.x.DEFAULT,
        O = f && y && b,
        v = d && y && b;
    eH.info(
        "changed="
            .concat(y, " isDefaultContext=")
            .concat(b, " isUpdateCausedByVideoHealthManager=")
            .concat(O, " isManualToggleByUser=")
            .concat(v),
    );
    let { videoToggleStateMap: A } = t3(l);
    if (
        (A[c] === eD.bb8.AUTO_PROBING &&
            u === eD.bb8.AUTO_ENABLED &&
            (0, eo.A)(c, _ ? ek.Al.AUTO_DISABLE : ek.Al.AUTO_ENABLE, E),
        (A[c] = u),
        nf(
            {
                videoToggleStateMap: A,
            },
            l,
            d,
        ),
        u === eD.bb8.AUTO_PROBING
            ? null == (n = eN.A.getRTCConnection()) || n.pauseStatsCollectionForUser(c, !0)
            : null == (r = eN.A.getRTCConnection()) || r.pauseStatsCollectionForUser(c, !1),
        tY ||
            (eH.info("isAutoDisableAllowed=".concat(tY, " - disabling VideoHealthManager")),
            null == (a = eN.A.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()),
        O)
    ) {
        if ((!_ && !g) || (_ && !tY)) return;
        (0, eo.A)(c, _ ? ek.Al.AUTO_DISABLE : ek.Al.AUTO_ENABLE, E), _ ? tH.add(c) : tH.delete(c);
    } else
        v &&
            (g && !_
                ? (eH.info("disallowing auto-disable for this session because of manual override by user"),
                  (tY = !1),
                  null == (s = eN.A.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(),
                  (0, eo.A)(c, ek.Al.MANUAL_REENABLE, E))
                : (0, eo.A)(c, _ ? ek.Al.MANUAL_DISABLE : ek.Al.MANUAL_ENABLE, E));
    b && !_ && tH.delete(c),
        _ ? (h[c] = !0) : delete h[c],
        nf(
            {
                disabledLocalVideos: h,
            },
            l,
            d,
        ),
        e8.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(c, null != (t = h[c]) && t);
        }, l);
}

function nF() {
    if (0 === tH.size) return;
    let e = ek.x.DEFAULT,
        { disabledLocalVideos: t } = t3(e);
    tH.forEach((n) => {
        p()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            e8.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tH.clear(),
        nf(
            {
                disabledLocalVideos: t,
            },
            e,
            !1,
        );
}

function nV() {
    let e = ek.x.DEFAULT,
        { videoToggleStateMap: t } = t3(e);
    for (let [e, n] of Object.entries(t)) n === eD.bb8.AUTO_PROBING && delete t[e];
    nf(
        {
            videoToggleStateMap: t,
        },
        e,
        !1,
    );
}

function nB(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === eI.default.getId()) return;
    let i = t === ek.x.STREAM ? ek.Cn : ek.Hz,
        { localVolumes: a } = t3(t);
    r === i ? delete a[n] : (a[n] = r),
        nf(
            {
                localVolumes: a,
            },
            t,
        ),
        e8.eachConnection((e) => e.setLocalVolume(n, r), t);
}

function nH(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: a } = t3(t);
    (a[n] = {
        left: r,
        right: i,
    }),
        nf(
            {
                localPans: a,
            },
            t,
        ),
        e8.eachConnection((e) => e.setLocalPan(n, r, i), t);
}

function nY(e) {
    let { context: t, mode: n, options: r } = e;
    nf(
        {
            mode: n,
            modeOptions: r,
        },
        t,
    ),
        e8.eachConnection(t6),
        nu.update();
}

function nW(e) {
    let { volume: t } = e;
    nf({
        inputVolume: t4(t),
    }),
        e8.setInputVolume(t);
}

function nK(e) {
    let { volume: t } = e;
    nf({
        outputVolume: t,
    }),
        e8.setOutputVolume(t);
}

function nz(e) {
    let { id: t } = e;
    (t = nE(ta, t)),
        (ti = performance.now()),
        nf({
            inputDeviceId: t,
        }),
        e8.setAudioInputDevice(t),
        e8.eachConnection(nr);
}

function nq(e) {
    let { id: t } = e;
    nf({
        outputDeviceId: (t = nE(to, t)),
    }),
        e8.setAudioOutputDevice(t);
}

function nZ(e) {
    let { id: t } = e;
    nf({
        videoDeviceId: (t = nE(ts, t)),
    }),
        t8();
}

function nQ(e) {
    let { inputProfile: t } = e;
    nf({
        activeInputProfile: t,
    });
    let n = t3();
    e8.eachConnection((e) => {
        t6(e), nr(e);
    }),
        e8.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        nu.update(),
        n7();
}

function nX(e) {
    return tn !== e.required && ((tn = e.required), e.required || e8.interact(), !0);
}

function nJ(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    ny(t), nv(n), nA(r);
}

function n$(e) {
    let { inputVolume: t, outputVolume: n } = e;
    nf({
        inputVolume: t4(t),
        outputVolume: n,
    });
}

function n0(e) {
    var t;
    let n = t3(),
        i = e8.getAudioSubsystem(),
        a = e8.getAudioLayer(),
        o = nE(ta, n.inputDeviceId),
        s = null == (t = ta[o]) ? void 0 : t.name,
        l = (0, ec.A)(n.noiseCancellation, r.getSystemMicrophoneMode(), {
            location: "trackVoiceProcessing",
        });
    em.default.track(eD.HAw.VOICE_PROCESSING, {
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

function n1(e) {
    let t = nf({
        echoCancellation: e.enabled,
    });
    e8.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), n7(), n0(e.location);
}

function n2(e) {
    n6(e.enabled);
}

function n3(e) {
    let t = nf({
        sidechainCompressionStrength: e.strength,
    });
    e8.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}

function n6(e) {
    let t = nf({
        sidechainCompression: e,
    });
    e8.setSidechainCompression(t.sidechainCompression);
}

function n4(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tW.add(n) : tW.delete(n), n5(), n7();
}

function n5() {
    let e = !tW.has("voice_filter_preview") && !tW.has("mic_test");
    e8.setMaybePreprocessMute(e);
}

function n7() {
    let e = t3(),
        t = tW.size > 0,
        n = e.inputDeviceId,
        r = eT.A.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        a = eT.A.hasNoiseSuppression(n) || e.noiseSuppression,
        o = ne(eT.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation,
        l = null !== tR,
        c = tW.has("voice_filter") && 1 === tW.size;
    e8.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: a,
        automaticGainControlConfig: o,
        noiseCancellation: s,
        voiceFilters: l,
        loopbackUseAudioMode: c,
    });
}
async function n8() {
    var e, t, n, r;
    if (!e8.supports(ek.O5.VAAPI)) return;
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
            ((tX = !0), (tQ = e8.supports(ek.O5.GAMESCOPE_CAPTURE))));
}

function n9(e) {
    let t = nf({
        noiseSuppression: e.enabled,
    });
    e8.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), n7(), n0(e.location);
}

function re(e) {
    let t = nf({
        automaticGainControl: e.enabled,
    });
    e8.eachConnection((e) => nt(e, t.automaticGainControl)), n7(), n0(e.location);
}

function rt(e) {
    let t = nf({
        noiseCancellation: e.enabled,
    });
    e8.eachConnection((e) => nn(e, t.noiseCancellation)), n7(), n0(e.location);
}

function rn(e) {
    el.A.setKrispModelOverride(e.model), (c = e.model), n7();
}

function rr(e) {
    var t;
    (0, ey.isWeb)() || ((tw = e.enabled), null == (t = e8.setNoiseCancellationEnableStats) || t.call(e8, e.enabled));
}

function ri(e) {
    nf({
        silenceWarning: e.enabled,
    }),
        nu.update();
}

function ra(e) {
    e8.setDebugLogging(e.enabled);
}

function ro(e) {
    let { level: t } = e;
    (l = t), el.A.setKrispSuppressionLevel(t);
}

function rs(e) {
    nf({
        videoHook: e.enabled,
    });
}

function rl(e) {
    nf({
        experimentalSoundshare2: e.enabled,
    });
}

function rc(e) {
    let { enabled: t } = e;
    nf({
        useSystemScreensharePicker: t,
    });
}

function ru(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = nf({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r,
        });
    e8.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}

function rd(e) {
    let { enabled: t } = e;
    nf({
        qos: t,
    }),
        e8.eachConnection((e) => e.setQoS(t));
}

function rf() {
    np();
}

function rp(e) {
    let { inputDetected: t } = e;
    (tv = t), !tA && tv && ((tA = !0), nu.update());
}

function r_(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === td) return !1;
    (td = n), e8.eachConnection(t5);
}

function rh(e) {
    let { state: t, permissionType: n } = e,
        r = t === ex.hL.ACCEPTED;
    switch (n) {
        case ex.iL.AUDIO:
            (tV = !0), e8.eachConnection(t5);
            break;
        case ex.iL.CAMERA:
            !r && tp && t8(!1);
            break;
        default:
            return !1;
    }
}

function rm() {
    return tC || !1;
}
async function rg() {
    try {
        var e, t, n, i;
        await ev.Ay.ensureModule("discord_krisp");
        let a = ev.Ay.requireModule("discord_krisp");
        (tC = !0),
            (s = null == (t = a.getSdkVersion) ? void 0 : t.call(a)),
            (l = null != (e = null == (n = a.getSuppressionLevel) ? void 0 : n.call(a)) ? e : 100),
            null == (i = a.getNcModels) ||
                i.call(a).then((e) => {
                    (tN = e), r.emitChange();
                }),
            r.emitChange();
    } catch (t) {
        eH.warn("Failed to load Krisp module: ".concat(t.message)), eO.A.captureException(t);
        let e = ek.CO.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? ek.CO.INITIALIZED : n;
        }
        em.default.track(eD.HAw.VOICE_PROCESSING, {
            noise_canceller_error: e,
        }),
            nf({
                noiseCancellation: !1,
            });
    } finally {
        tT = !1;
    }
}

function rE() {
    return (0, ey.isWindows)() || (0, ey.isLinux)() || (0, ey.isMac)();
}

function ry() {
    !rE() || __OVERLAY__ || tT || tC
        ? (0, ey.isWeb)() && e8.supports(ek.O5.NOISE_CANCELLATION)
            ? ((tC = !0), r.emitChange())
            : (0, ey.isWeb)() &&
              nf({
                  noiseCancellation: !1,
              })
        : ((tT = !0), rg());
}

function rb(e) {
    let { enabled: t } = e;
    em.default.track(eD.HAw.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != tR ? tR : null,
        enabled: t,
    }),
        nf({
            voiceFilterPlaybackEnabled: t,
        });
}

function rO(e) {
    let { newVoiceFilterId: t } = e;
    nf({
        mostRecentlyRequestedVoiceFilter: t,
    }),
        e8.eachConnection((e) => e.setVoiceFilterId(t));
}

function rv() {
    nf({
        mostRecentlyRequestedVoiceFilter: null,
    });
}

function rA(e) {
    let { voiceFilterId: t } = e;
    (tD = tR), (tL = tP), (tR = t), (tP = null === t ? null : Date.now());
}

function rI(e) {
    let t = e.bypassEnabled;
    nf({
        bypassSystemInputProcessing: t,
    }),
        e8.setAudioInputBypassSystemProcessing(t),
        n0(e.location);
}

function rS(e) {
    rT(e.subsystem);
}

function rT(e) {
    e === ek.rB.AUTOMATIC
        ? (nf({
              automaticAudioSubsystem: !0,
          }),
          rC())
        : (nf({
              automaticAudioSubsystem: !1,
          }),
          e8.setAudioSubsystem(e));
}

function rC() {
    e8.queueAudioSubsystem(ek.rB.EXPERIMENTAL);
}

function rN(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && t8(i, null), null != t || null == n)) {
        tS = !1;
        return;
    }
    if (tS) return;
    tS = !0;
    let a = t3();
    (a.mute || a.deaf) &&
        (nf({
            deaf: !1,
            mute: !1,
        }),
        e8.eachConnection(t5));
}

function rw(e) {
    let { application: t } = e;
    te.add(t.id);
}

function rR(e) {
    let { application: t } = e;
    te.delete(t.id);
}

function rP(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (tt = !1), e8.eachConnection(t5);
                break;
            case "video":
                t8(!1);
        }
}

function rD(e) {
    (tt = e.enabled),
        e.unmute &&
            nf({
                mute: !1,
                deaf: !1,
            }),
        e8.eachConnection(t5);
}

function rL(e) {
    let { enabled: t } = e;
    es.A.requestPermission(ex.iL.CAMERA), t8(t);
}

function rx(e) {
    let { sourceId: t, applicationName: n, quality: i } = e;
    if (!(0, w.Ao)() || null == I.A) return !1;
    let a = null,
        s = null,
        l = eg.A.getPidFromDesktopSource(t);
    ({ soundshareId: a, soundshareSession: s } = nS(l));
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
        (e8.setClipsSource(null),
        (0, ey.isWindows)() && null != o.desktopSource.soundshareId && S.c1(o.desktopSource.soundshareId)),
        null != a && nT(a, s),
        (o = c);
    let u = t$(),
        d = t3().videoHook;
    e8.setClipsSource({
        desktopDescription: {
            id: o.desktopSource.id,
            soundshareId: o.desktopSource.soundshareId,
            useVideoHook: d,
            useGraphicsCapture: na(),
            useCaptureDeviceForEncode: !1,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: ns(),
            videoHookStaleFrameTimeoutMs: eX,
            graphicsCaptureStaleFrameTimeoutMs: eJ,
            hdrCaptureMode: u,
        },
        quality: i,
        applicationName: n,
    });
}

function rM(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((o = null), e8.setClipsSource(null));
}

function rj(e) {
    var t, n, r, i;
    let { settings: a } = e;
    if ((null == a ? void 0 : a.desktopSettings) != null) {
        let e = null,
            r = null,
            { sourceId: i, sound: o } = a.desktopSettings,
            s = null != (t = a.context) ? t : ek.x.DEFAULT,
            l =
                null != (n = a.qualityOptions)
                    ? n
                    : {
                          resolution: 720,
                          frameRate: 30,
                      },
            c = !1 === o ? null : eg.A.getPidFromDesktopSource(i);
        ey.isPlatformEmbedded &&
            !0 === o &&
            (({ soundshareId: e, soundshareSession: r } = nS(c)), null != e && nT(e, r)),
            t7(s),
            t8(s === ek.x.STREAM && tp, {
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
        let e = null != (r = a.context) ? r : ek.x.DEFAULT,
            { videoDeviceGuid: t, audioDeviceGuid: n } = a.cameraSettings,
            o = e === ek.x.STREAM && tp,
            s =
                null != (i = a.qualityOptions)
                    ? i
                    : {
                          resolution: 720,
                          frameRate: 30,
                      };
        t8(o, {
            cameraSource: {
                videoDeviceGuid: t,
                audioDeviceGuid: n,
            },
            quality: {
                resolution: s.resolution,
                frameRate: s.frameRate,
            },
        });
    } else t8(tp, null);
}

function rk(e) {
    let { section: t } = e;
    return t === eD.nc_.VOICE && nh(), !1;
}

function rU() {
    return e8.eachConnection(nr), !1;
}

function rG(e) {
    let { enabled: t } = e,
        n = nf({
            aecDumpEnabled: t,
        });
    e8.setAecDump(n.aecDumpEnabled);
}

function rF(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (e9 = Object.values(ek.x).reduce((e, n) => {
        let r = n,
            i = e5();
        return (e[r] = h().merge(i, t[r])), e;
    }, {})),
        O.w.set(eY, e9),
        n_();
}

function rV(e) {
    let { state: t } = e,
        n = x.A.isEnabled();
    if (t === eD.g6G.BACKGROUND && tp && !n) (tb = !0), t8(!1);
    else {
        if (t !== eD.g6G.ACTIVE || !tb) return !1;
        (tb = !1), t8(!0);
    }
    return !0;
}

function rB(e) {
    e8.eachConnection((t) => t.setBitRate(e.bitrate));
}

function rH() {
    if ((!tp && null == a) || null != eN.A.getRTCConnectionId()) return !1;
    t8(!1, null);
}

function rY() {
    return !!tM && ((tM = !1), !0);
}

function rW(e) {
    e8.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}

function rK(e) {
    let { settings: t } = e;
    e8.applyMediaFilterSettings(t).finally(() => {
        (tj = !1), r.emitChange();
    });
}

function rz() {
    tj = !0;
}

function rq() {
    tj = !1;
}

function rZ(e) {
    tq = e.enabled;
}

function rQ() {
    if ((0, ey.isDesktop)() && ey.isPlatformEmbedded && !tJ) {
        tJ = !0;
        let e = async () => {
            let t = await new Promise((e) => {
                ev.Ay.pollQueueMetrics((t) => {
                    e(t);
                });
            });
            t.periodMs = ek.tl;
            let n = rJ(t);
            null !== n && em.default.track(eD.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, ek.tl);
        };
        setTimeout(e, ek.tl);
    }
}
class rX extends (d = y.Ay.Store) {
    initialize() {
        ni(),
            nd(),
            ry(),
            nV(),
            rQ(),
            (tK = {
                [ek.O5.VIDEO]: e8.supports(ek.O5.VIDEO),
                [ek.O5.DESKTOP_CAPTURE]: e8.supports(ek.O5.DESKTOP_CAPTURE),
                [ek.O5.HYBRID_VIDEO]: e8.supports(ek.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eI.default, eS.A, eT.A, eC.A, C.A, L.A, eN.A, M.Ay, eu.A, ep.A, eR.default, eP.A, eh.A);
    }
    supports(e) {
        return e8.supports(e);
    }
    supportsInApp(e) {
        return tK[e] || e8.supports(e);
    }
    isSupported() {
        return e8.supported();
    }
    isNoiseSuppressionSupported() {
        return e8.supports(ek.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return rm();
    }
    isNoiseCancellationError() {
        return tM;
    }
    isAutomaticGainControlSupported() {
        return e8.supports(ek.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nc() && (e8.supports(ek.O5.LEGACY_AUDIO_SUBSYSTEM) || e8.supports(ek.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return e8.supports(ek.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === e8.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return rm();
    }
    isAecDumpSupported() {
        return e8.supports(ek.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return e8.supports(ek.O5.VIDEO) && e8.supports(ek.O5.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        return (
            (null == (e = eC.A.getChannel(tx)) ? void 0 : e.type) !== eD.rbe.GUILD_STAGE_VOICE &&
            e3 &&
            q.A.simulcastEnabled()
        );
    }
    isVideoDecoderFallbackEnabled() {
        return tF;
    }
    getAecDump() {
        return t3().aecDumpEnabled;
    }
    getMediaEngine() {
        return e8;
    }
    getVideoComponent() {
        return e8.Video;
    }
    getCameraComponent() {
        return e8.Camera;
    }
    getKrispSuppressionLevel() {
        return null != l ? l : 100;
    }
    getKrispEnableStats() {
        return tw;
    }
    isEnabled() {
        return tt;
    }
    isMute() {
        return this.isSelfMute() || tc;
    }
    isDeaf() {
        return this.isSelfDeaf() || tf;
    }
    hasContext(e) {
        return null != e9[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.x.DEFAULT;
        return e === ek.x.DEFAULT && tu;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.x.DEFAULT;
        return (
            !this.isEnabled() ||
            t3(e).mute ||
            !es.A.didHavePermission(ex.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === ek.x.DEFAULT && td)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tm;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tm = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.x.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && eT.A.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return tq;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.x.DEFAULT;
        return !this.isSupported() || t3(e).deaf;
    }
    isVideoEnabled() {
        return tp && tO;
    }
    isVideoAvailable() {
        return Object.values(ts).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.x.STREAM;
        return tr === e && null != a;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.x.STREAM;
        return tr === t && null != a && (null == (e = a.desktopSource) ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ek.x.DEFAULT;
        return e !== eI.default.getId() && (t3(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return e8.supports(ek.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ek.x.DEFAULT;
        return null != (t = t3(n).disabledLocalVideos[e]) && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ek.x.DEFAULT;
        return null != (t = t3(n).videoToggleStateMap[e]) ? t : eD.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ek.x.DEFAULT;
        return t === ek.x.DEFAULT && tH.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.x.DEFAULT;
        return e === ek.x.DEFAULT && tH.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tj;
    }
    isNativeAudioPermissionReady() {
        return tV;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return tr;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return ti;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ek.x.DEFAULT,
            n = t3(t).localPans[e];
        return null != n ? n : eQ;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ek.x.DEFAULT,
            n = t === ek.x.STREAM ? ek.Cn : ek.Hz,
            r = t3(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return t3().inputVolume;
    }
    getOutputVolume() {
        return t3().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.x.DEFAULT;
        return t3(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.x.DEFAULT;
        return t3(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return tR;
    }
    getActiveVoiceFilterAppliedAt() {
        return tP;
    }
    getPreviousVoiceFilter() {
        return tD;
    }
    getPreviousVoiceFilterAppliedAt() {
        return tL;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return t3().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return t3().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            h().each(e9, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === eD.TBI.PUSH_TO_TALK && te.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nE(ta, t3().inputDeviceId);
    }
    getOutputDeviceId() {
        return nE(to, t3().outputDeviceId);
    }
    getVideoDeviceId() {
        return nE(ts, t3().videoDeviceId);
    }
    getInputDevices() {
        return ta;
    }
    getOutputDevices() {
        return to;
    }
    getVideoDevices() {
        return ts;
    }
    getEchoCancellation() {
        let e = t3();
        return eT.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return e8.supports(ek.O5.SIDECHAIN_COMPRESSION) && t3().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return t3().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return t3().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tU && tU;
    }
    getLoopback() {
        return tW.size > 0;
    }
    getLoopbackReasons() {
        return tW;
    }
    getNoiseSuppression() {
        let e = t3();
        return eT.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = t3();
        return eT.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return t3().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return t3().noiseCancellation;
    }
    getHardwareEncoding() {
        return e3;
    }
    getEnableSilenceWarning() {
        return t3().silenceWarning;
    }
    getDebugLogging() {
        return e8.getDebugLogging();
    }
    getQoS() {
        return t3().qos;
    }
    getAttenuation() {
        return t3().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return t3().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return t3().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return nl() && t3().automaticAudioSubsystem ? ek.rB.AUTOMATIC : e8.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return e8.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return t3().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === ej.my.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.x.DEFAULT;
        return t3(e);
    }
    getState() {
        return {
            settingsByContext: e9,
            inputDevices: ta,
            outputDevices: to,
            appSupported: tK,
            krispModuleLoaded: tC,
            krispVersion: s,
            krispSuppressionLevel: l,
            goLiveSource: a,
            goLiveContext: tr,
        };
    }
    getInputDetected() {
        return tv;
    }
    getNoInputDetectedNotice() {
        return tI;
    }
    getPacketDelay() {
        return ey.isPlatformEmbedded || this.getMode() !== eD.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        e8.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return tn;
    }
    getVideoHook() {
        return t3().videoHook;
    }
    supportsVideoHook() {
        return e8.supports(ek.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = t3().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return (
            e8.supports(ek.O5.EXPERIMENTAL_SOUNDSHARE) &&
            g().satisfies(null === I.A || void 0 === I.A ? void 0 : I.A.os.release, eL.$x)
        );
    }
    supportsHookSoundshare() {
        return (
            (0, ey.isWindows)() &&
            e8.supports(ek.O5.SOUNDSHARE) &&
            g().satisfies(null === I.A || void 0 === I.A ? void 0 : I.A.os.release, eL.ws)
        );
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = t3().useSystemScreensharePicker,
            n = (0, ey.isLinux)();
        return e && (null != t ? t : n);
    }
    supportsSystemScreensharePicker() {
        return e8.supports(ek.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return tX;
    }
    getUseGamescopeCapture() {
        return tQ;
    }
    getEverSpeakingWhileMuted() {
        return tg;
    }
    getSpeakingWhileMuted() {
        return tE;
    }
    getKrispModelOverride() {
        return c;
    }
    getKrispModels() {
        return tN;
    }
    getKrispVadActivationThreshold() {
        var e;
        return null != (e = t3().modeOptions.vadKrispActivationThreshold) ? e : eZ;
    }
    hasActiveCallKitCall() {
        return tZ;
    }
    setHasActiveCallKitCall(e) {
        tZ = e;
    }
    supportsScreenSoundshare() {
        return (0, ey.isMac)()
            ? e8.supports(ek.O5.SOUNDSHARE) &&
                  g().satisfies(null === I.A || void 0 === I.A ? void 0 : I.A.os.release, eL.P$) &&
                  ns()
            : (0, ey.isWindows)()
              ? e8.supports(ek.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, ey.isLinux)() && e8.supports(ek.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, ey.isWindows)()) {
            var e, t;
            return null == (t = this.getInputDevices()[this.getInputDeviceId()]) || null == (e = t.effects)
                ? void 0
                : e.find((e) => e === e6);
        }
        if ((0, ey.isMac)() || (0, ey.isIOS)()) return u;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.x.DEFAULT,
            t = this.supports(ek.O5.VIDEO)
                ? [
                      {
                          rid: "100",
                          type: e === ek.x.DEFAULT ? ek.mI.VIDEO : ek.mI.SCREEN,
                          quality: ek.Y4,
                      },
                  ]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === ek.x.DEFAULT || this.goLiveSimulcastEnabled()) &&
                t.push({
                    rid: "50",
                    type: e === ek.x.DEFAULT ? ek.mI.VIDEO : ek.mI.SCREEN,
                    quality: ek.Cl,
                }),
            t
        );
    }
    fetchAsyncResources() {
        let e = {
            fetchDave: !1,
        };
        return (
            (0, ey.isWeb)() &&
                (e.fetchDave = ee.f1.getCurrentConfig({
                    location: "MediaEngineStore fetchAsyncResources",
                }).loadWasmModule),
            e8.fetchAsyncResources(e)
        );
    }
    startDavePreload() {
        if (!tk && ((tk = !0), (0, ey.isWeb)())) {
            let e = {
                fetchDave: !0,
            };
            e8.fetchAsyncResources(e).catch((e) => {
                eH.warn("DAVE preload failed:", e), eO.A.captureException(e);
            });
        }
    }
    getSupportedSecureFramesProtocolVersion() {
        if ((0, ey.isWeb)()) {
            let { useWasmModule: e } = ee.f1.getCurrentConfig({
                location: "MediaEngineStore getSupportedSecureFramesProtocolVersion",
            });
            if (!e) return 0;
        }
        let e = e8.getSupportedSecureFramesProtocolVersion();
        114 === e && (e = 1);
        let t = ee.ex.getCurrentConfig({
                location: "MediaEngineStore",
            }),
            n = ee.a.getConfig({
                location: "MediaEngineStore",
            });
        return (t.canSupportDaveProtocol || (n.allowOptIn && eu.A.getPersistentCodesEnabled())) &&
            e >= t.protocolVersionFloor
            ? e
            : 0;
    }
    hasClipsSource() {
        return null != o;
    }
    getGpuBrand() {
        return tz;
    }
}

function rJ(e) {
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
eG(rX, "displayName", "MediaEngineStore");
let r$ = (r = new rX(A.h, {
    VOICE_CHANNEL_SELECT: rN,
    VOICE_STATE_UPDATES: nD,
    CONNECTION_OPEN: nC,
    CONNECTION_CLOSED: nw,
    POST_CONNECTION_OPEN: nR,
    RTC_CONNECTION_STATE: nP,
    AUDIO_SET_TEMPORARY_SELF_MUTE: nL,
    AUDIO_TOGGLE_SELF_MUTE: nx,
    AUDIO_SET_SELF_MUTE: nM,
    AUDIO_TOGGLE_SELF_DEAF: nk,
    AUDIO_TOGGLE_LOCAL_MUTE: nU,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: nG,
    AUDIO_SET_LOCAL_VOLUME: nB,
    AUDIO_SET_LOCAL_PAN: nH,
    AUDIO_SET_MODE: nY,
    AUDIO_SET_INPUT_VOLUME: nW,
    AUDIO_SET_OUTPUT_VOLUME: nK,
    AUDIO_SET_INPUT_DEVICE: nz,
    AUDIO_SET_OUTPUT_DEVICE: nq,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: nQ,
    AUDIO_SET_ECHO_CANCELLATION: n1,
    AUDIO_SET_SIDECHAIN_COMPRESSION: n2,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: n3,
    AUDIO_SET_LOOPBACK: n4,
    AUDIO_SET_NOISE_SUPPRESSION: n9,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: re,
    AUDIO_SET_NOISE_CANCELLATION: rt,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: rn,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: ri,
    AUDIO_SET_DEBUG_LOGGING: ra,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: ro,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: rr,
    MEDIA_ENGINE_SET_VIDEO_HOOK: rs,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: rl,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: rc,
    AUDIO_SET_ATTENUATION: ru,
    AUDIO_SET_QOS: rd,
    MEDIA_ENGINE_DEVICES: nJ,
    AUDIO_VOLUME_CHANGE: n$,
    AUDIO_RESET: rf,
    AUDIO_INPUT_DETECTED: rp,
    AUDIO_SET_SUBSYSTEM: rS,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rI,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rD,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rL,
    MEDIA_ENGINE_PERMISSION: rP,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rj,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nZ,
    MEDIA_ENGINE_INTERACTION_REQUIRED: nX,
    USER_SETTINGS_MODAL_INIT: rk,
    USER_SETTINGS_MODAL_SET_SECTION: rk,
    CERTIFIED_DEVICES_SET: rU,
    RPC_APP_CONNECTED: rw,
    RPC_APP_DISCONNECTED: rR,
    OVERLAY_INITIALIZE: nN,
    APP_STATE_UPDATE: rV,
    SET_CHANNEL_BITRATE: rB,
    SET_VAD_PERMISSION: r_,
    SET_NATIVE_PERMISSION: rh,
    SET_CHANNEL_VIDEO_QUALITY_MODE: rW,
    MEDIA_ENGINE_SET_AEC_DUMP: rG,
    MEDIA_ENGINE_RESET_SETTINGS: rF,
    CHANNEL_DELETE: rH,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rY,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rK,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rz,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rq,
    USER_SETTINGS_PROTO_UPDATE: nj,
    CLIPS_INIT: rx,
    CLIPS_SETTINGS_UPDATE: rM,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rZ,
    VOICE_FILTER_REQUEST_SWITCH: rO,
    VOICE_FILTER_LOOPBACK_TOGGLE: rb,
    VOICE_FILTER_APPLIED: rA,
    VOICE_FILTER_DOWNLOAD_FAILED: rv,
    VOICE_FILTER_APPLY_FAILED: rv,
}));
