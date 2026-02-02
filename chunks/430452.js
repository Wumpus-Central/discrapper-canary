let r, i, a, o, s, l, c, u, d, f;
n.d(t, {
    A: () => r2,
}),
    n(896048),
    n(228524),
    n(492834),
    n(321073),
    n(638769),
    n(457529),
    n(790599);
var p,
    _ = n(284009),
    h = n.n(_),
    m = n(735438),
    g = n.n(m),
    E = n(299855),
    y = n.n(E),
    b = n(311907),
    O = n(205693),
    v = n(506774),
    A = n(451988),
    I = n(73153),
    S = n(77729),
    T = n(719129),
    C = n(894539),
    N = n(274372),
    w = n(915618),
    R = n(572164),
    P = n(626584),
    D = n(211597),
    L = n(709710),
    x = n(49463),
    M = n(784113),
    j = n(15285),
    k = n(540305),
    U = n(17300),
    G = n(544746),
    V = n(820344),
    F = n(593595),
    B = n(788601),
    H = n(626078),
    Y = n(509034),
    W = n(638188),
    K = n(269377),
    z = n(934341),
    q = n(658046),
    Z = n(621963),
    Q = n(525286),
    X = n(780732),
    J = n(495439),
    $ = n(927170),
    ee = n(233232),
    et = n(140175),
    en = n(267378),
    er = n(223572),
    ei = n(276006),
    ea = n(670470),
    eo = n(896014),
    es = n(765396),
    el = n(37770),
    ec = n(75076),
    eu = n(674966),
    ed = n(559633),
    ef = n(3527),
    ep = n(714763),
    e_ = n(879172),
    eh = n(555444),
    em = n(617617),
    eg = n(996744),
    eE = n(28075),
    ey = n(954571),
    eb = n(353835),
    eO = n(927813),
    ev = n(723702),
    eA = n(728458),
    eI = n(837921),
    eS = n(350535),
    eT = n(961350),
    eC = n(131319),
    eN = n(347481),
    ew = n(734057),
    eR = n(383501),
    eP = n(851581),
    eD = n(287809),
    eL = n(117549),
    ex = n(652215),
    eM = n(502075),
    ej = n(765682),
    ek = n(355097),
    eU = n(509381),
    eG = n(731854),
    eV = n(985018);

function eF(e, t, n) {
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

function eB(e) {
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
                eF(e, t, n[t]);
            });
    }
    return e;
}

function eH(e, t) {
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

function eY(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eH(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eW = new P.A("MediaEngineStore"),
    eK = "MediaEngineStore",
    ez = 4,
    eq = 1,
    eZ = 1,
    eQ = 1,
    eX = 0.5,
    eJ = {
        left: 1,
        right: 1,
    },
    e$ = 500,
    e0 = 5 * eO.A.Millis.SECOND,
    e1 = -60,
    e2 = 100,
    e3 = 2 * eO.A.Millis.SECOND,
    e6 = 30 * eO.A.Millis.SECOND,
    e4 = !0,
    e5 = "deep_noise_suppression",
    e7 = 0;

function e8() {
    return {
        mode: ex.TBI.VOICE_ACTIVITY,
        modeOptions: {
            threshold: e1,
            autoThreshold: ev.isPlatformEmbedded || __OVERLAY__,
            vadUseKrisp: !0,
            vadKrispActivationThreshold: eX,
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
        inputVolume: eG.Hz,
        outputVolume: eG.Hz,
        inputDeviceId: eG.dx,
        outputDeviceId: eG.dx,
        videoDeviceId: eG.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: te.supports(eG.O5.VIDEO_HOOK),
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
let e9 = {
        [eU.my.CUSTOM]: {},
        [eU.my.VOICE_ISOLATION]: {
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
        [eU.my.STUDIO]: {
            mode: ex.TBI.VOICE_ACTIVITY,
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
    te = (0, O.hB)((0, O.WI)());
eW.enableNativeLogger(!0);
let tt = {},
    tn = new Set([eG.x.DEFAULT]),
    tr = te.supports(eG.O5.AUTO_ENABLE),
    ti = !1,
    ta = eG.x.STREAM,
    to = performance.now(),
    ts = {
        [eG.dx]: ny("No Input Devices"),
    },
    tl = {
        [eG.dx]: ny("No Output Devices"),
    },
    tc = {
        [eG.dx]: ny("No Video Devices"),
    },
    tu = new A.Ep(),
    td = !1,
    tf = !1,
    tp = !1,
    t_ = !1,
    th = !1,
    tm = eG.qe,
    tg = eG.qe,
    tE = !1,
    ty = !1,
    tb = !1,
    tO = new A.Ep(),
    tv = !1,
    tA = !1,
    tI = null,
    tS = !1,
    tT = !1,
    tC = !1,
    tN = !1,
    tw = !1,
    tR = [],
    tP = !1,
    tD = null,
    tL = null,
    tx = null,
    tM = null,
    tj = null,
    tk = !1,
    tU = !1,
    tG = !1,
    tV = null,
    tF = null,
    tB = !1,
    tH = !1;
eu.A.hasPermission(ej.iL.AUDIO, {
    showAuthorizationError: !1,
}),
    eu.A.hasPermission(ej.iL.CAMERA, {
        showAuthorizationError: !1,
    });
let tY = !1,
    tW = new Set(),
    tK = tY,
    tz = new Set(),
    tq = {},
    tZ = null,
    tQ = !0,
    tX = !1,
    tJ = !1,
    t$ = !1,
    t0 = !1;

function t1(e) {
    return (0, Z.p)({
        location: e,
    }).hdrCaptureMode;
}
async function t2() {
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

function t3() {
    return null != tF ? tF : "u" > typeof window ? (tF = t2().then((e) => ((tV = e), e))) : Promise.resolve(!1);
}

function t6() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eG.x.DEFAULT,
        t = tt[e];
    return null == t && ((t = e8()), (tt[e] = t)), t;
}

function t4() {
    var e, t, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eG.x.DEFAULT,
        i = t6(r),
        a = e9[null != (e = i.activeInputProfile) ? e : eU.my.CUSTOM],
        o = eB({}, null != (t = i.modeOptions) ? t : {}, null != (n = a.modeOptions) ? n : {});
    if (
        (null == o.vadDuringPreProcess &&
            (o.vadDuringPreProcess = (0, er.R)({
                location: "getSettings",
            }).enabled),
        (null == o.vadKrispActivationThreshold && !0 === a.automaticGainControl) || !0 === i.automaticGainControl)
    ) {
        let e = (0, U.F)({
            location: "getSettings",
        });
        null != e.vadKrispActivationThreshold && (o.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return eY(eB({}, i, a), {
        modeOptions: o,
    });
}

function t5(e) {
    var t, n;
    let r = t4(e.context),
        i = r.mode;
    e.context === eG.x.DEFAULT &&
        ((0, eh.H)({
            location: "setInputMode",
            autoTrackExposure: !1,
        }).enableLatching &&
            i === ex.TBI.PUSH_TO_TALK &&
            r.modeOptions.pttLatchingEnabled &&
            (i = ex.TBI.VOICE_ACTIVITY),
        (0, et.N)(!1, !1, !1)),
        e.setInputMode(i, {
            vadThreshold: r.modeOptions.threshold,
            vadAutoThreshold: r.modeOptions.autoThreshold,
            vadUseKrisp: r.modeOptions.vadUseKrisp && ry(),
            vadKrispActivationThreshold: null != (t = r.modeOptions.vadKrispActivationThreshold) ? t : eX,
            vadLeading: r.modeOptions.vadLeading,
            vadTrailing: r.modeOptions.vadTrailing,
            vadDuringPreProcess: null != (n = r.modeOptions.vadDuringPreProcess) && n,
            pttReleaseDelay: Math.round(r.modeOptions.delay),
        });
}

function t7(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eG.Hz;
    return g().clamp(e, 0, t);
}

function t8(e) {
    let t = t4(e.context),
        n = !tr || t.mute || t.deaf;
    e.context === eG.x.DEFAULT
        ? (n = n || td || tf || tp || !eu.A.didHavePermission(ej.iL.AUDIO))
        : e.context === eG.x.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eG.x.DEFAULT && C.A.updateNativeMute();
}

function t9(e) {
    e !== ta && (null != a && te.setGoLiveSource(null, ta), (ta = e));
}

function ne() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : th,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        s = a;
    if (
        ((null == s ? void 0 : s.desktopSource) != null &&
            s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? void 0 : e.id) &&
            (null != s.desktopSource.soundshareId && (0, ev.isWindows)() && T.c1(s.desktopSource.soundshareId),
            te.setGoLiveSource(null, ta)),
        (null == s ? void 0 : s.cameraSource) != null &&
            (s.cameraSource.videoDeviceGuid !==
                (null == o || null == (t = o.cameraSource) ? void 0 : t.videoDeviceGuid) ||
                s.cameraSource.audioDeviceGuid !==
                    (null == o || null == (n = o.cameraSource) ? void 0 : n.audioDeviceGuid)) &&
            te.setGoLiveSource(null, ta),
        th || i)
    ) {
        let e = t4().videoDeviceId;
        th && e === eG.dx && tg === eG.dx && tm !== eG.qe ? (e = tm) : (tg = e),
            (tm = (th = i) ? nO(tc, e) : eG.qe),
            te.setVideoInputDevice(tm);
    }
    if (((a = o), null != o)) {
        let e = {
            resolution: o.quality.resolution,
            frameRate: o.quality.frameRate,
        };
        if (null != o.desktopSource) {
            let t = t1("MediaEngineStore go live"),
                n = t4().videoHook,
                i = ns(),
                a = i ? (nl() ? eM.zl : eM.eg) : 0,
                s = (0, ev.isWindows)() && (0, ei.b)("updateVideo").enabled;
            te.setGoLiveSource(
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
                        allowScreenCaptureKit: nc(),
                        videoHookStaleFrameTimeoutMs: e$,
                        graphicsCaptureStaleFrameTimeoutMs: e0,
                        hdrCaptureMode: t,
                        enableGlobalFramePoolLock: (0, q.H)({
                            location: "updateVideo",
                        }).enabled,
                    },
                    quality: e,
                },
                ta,
            );
        }
        null != o.cameraSource &&
            te.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: o.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                ta,
            );
    }
}

function nt(e) {
    switch (e) {
        case eG.CO.CPU_OVERUSE:
            return L.B6.NoiseCancellerCpuOveruse;
        case eG.CO.FAILED:
            return L.B6.NoiseCancellerFailed;
        case eG.CO.VAD_CPU_OVERUSE:
            return L.B6.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}

function nn(e) {
    let t = (0, U.F)({
        location: "getAutomaticGainControlConfig",
        disable: !e,
    }).noiseCancellationConfig;
    return eB(
        {
            enabled: e,
        },
        t,
    );
}

function nr(e, t) {
    e.setAutomaticGainControl(nn(t));
}

function ni(e, t) {
    let n = (0, ef.A)(t, r.getSystemMicrophoneMode(), {
        location: "setNoiseCancellation",
    });
    n !== t && eW.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: i } = (0, U.F)({
        location: "setNoiseCancellation",
        disable: !t,
    });
    e.setNoiseCancellationDuringProcessing(i);
    let { noiseCancellationAfterProcessing: a, vadAfterWebrtc: o } = (0, $.$)({
        location: "setNoiseCancellation",
    });
    e.setNoiseCancellationAfterProcessing(a), e.setVADAfterWebrtc(o);
}

function na(e) {
    let t = t4(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eN.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eN.A.hasNoiseSuppression(n) || t.noiseSuppression),
        nr(e, eN.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        ni(e, t.noiseCancellation),
        e.setVoiceFilterId(tD),
        (0, ev.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}

function no() {
    tu.start(e6, () => {
        eW.error("Device enumeration timed out"), ey.default.track(ex.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
    }),
        te.on(O.bg.Connection, (e) => {
            t5(e), t8(e), na(e);
            let t = t4();
            e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
                e.setQoS(t.qos);
            let n = (0, J.K)({
                location: "setupMediaEngine",
            }).treatment;
            (tB = n === J.c.NoSoftwareDecodeWithFallback),
                n === J.c.NoSoftwareDecode || n === J.c.NoSoftwareDecodeWithFallback
                    ? (e.setExperimentFlag(eG.fd.H265_HARDWARE_ONLY, !0),
                      (0, ev.isWindows)()
                          ? t3().then((t) => {
                                e.setExperimentFlag(eG.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                            })
                          : (0, ev.isMac)() && e.setExperimentFlag(eG.fd.H265_HARDWARE_DECODE_AVAILABLE, !0))
                    : n === J.c.Disabled &&
                      (e.setExperimentFlag(eG.fd.H265_HARDWARE_ONLY, !0),
                      e.setExperimentFlag(eG.fd.H265_HARDWARE_DECODE_AVAILABLE, !1)),
                (0, ev.isWindows)() &&
                    (0, X.r)({
                        location: "setupMediaEngine",
                    }).enabled &&
                    e.setExperimentFlag(eG.fd.USE_H264_MF_DECODER, !0);
            let i = eR.A.getGuildId(),
                {
                    muteBeforeProcessing: o,
                    pttBeforeProcessing: s,
                    skipEncode: l,
                } = (null != i ? K.A : W.A).getCurrentConfig(
                    {
                        location: "setupMediaEngine",
                        guildId: null != i ? i : void 0,
                    },
                    {
                        autoTrackExposure: !0,
                    },
                );
            o && e.setExperimentFlag(eG.fd.MUTE_BEFORE_PROCESSING, !0),
                s && e.setExperimentFlag(eG.fd.PTT_BEFORE_PROCESSING, !0),
                l && e.setExperimentFlag(eG.fd.SKIP_ENCODE, !0),
                (0, ee.J)({
                    location: "setupMediaEngine",
                }).enabled && e.setExperimentFlag(eG.fd.LOW_LATENCY_RATE_CONTROL, !0);
            let c = !1,
                u = !0;
            if (
                (e.setExperimentFlag(eG.fd.RESET_DECODER_ON_ERRORS, !0),
                c && e.setExperimentFlag(eG.fd.SOFTWARE_FALLBACK_ON_ERRORS, !0),
                u && e.setExperimentFlag(eG.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0),
                e.context === eG.x.STREAM)
            ) {
                let t = nA(tl);
                e.setSoundshareDiscardRearChannels(t);
                let { simulcastEnabled: n, lqStreamBitrate: r } = Q.A.getConfig();
                e.configureGoLiveSimulcast(n, r);
            }
            if ((0, ev.isWindows)())
                e.setExperimentFlag(eG.fd.SIGNAL_AV1, !0), e.setExperimentFlag(eG.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            else if ((0, ev.isMac)()) {
                e.setExperimentFlag(eG.fd.SIGNAL_AV1_DECODE, !0);
                let { enabled: t } = (0, V.t)("MediaEngineStore");
                t && e.setExperimentFlag(eG.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            } else if ((0, ev.isLinux)()) e.setExperimentFlag(eG.fd.SIGNAL_AV1_DECODE, !0);
            else if ((0, ev.isIOS)()) {
                let { enabled: t } = (0, G.$)("MediaEngineStore");
                t &&
                    (e.setExperimentFlag(eG.fd.SIGNAL_AV1_DECODE, !0),
                    e.setExperimentFlag(eG.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
            }
            if ((0, ev.isWeb)()) {
                let { enabled: t } = (0, z.O)("MediaEngineStore");
                e.setExperimentFlag(eG.fd.BROWSER_HEVC, t);
            }
            if (
                ((0, ev.isWindows)() &&
                    (null == tZ ? void 0 : tZ.startsWith("AMD")) &&
                    (0, eo.F)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eG.fd.WMF_GPU_ENCODE, !0),
                (0, ev.isWindows)() &&
                    (null == tZ ? void 0 : tZ.startsWith("Intel")) &&
                    (0, es.J)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eG.fd.WMF_GPU_ENCODE, !0),
                (0, ev.isWindows)() &&
                    (null == tZ ? void 0 : tZ.startsWith("Qualcomm")) &&
                    (0, eo.F)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eG.fd.WMF_GPU_ENCODE, !0),
                te.setHasFullbandPerformance((0, D.A)()),
                e.setRemoteAudioHistory(1e3),
                (0, w.A)(r))
            ) {
                let { enableViewerClipping: t } = ea.A.getCurrentConfig(
                    {
                        location: "f627ab_15",
                    },
                    {
                        autoTrackExposure: !1,
                    },
                );
                e.setViewerSideClip(t), e.setClipsKeyFrameInterval(eG.X1);
            }
            for (let n of ((t = t4(e.context)), e.setPostponeDecodeLevel(e2), Object.keys(t.localMutes)))
                n !== eT.default.getId() && e.setLocalMute(n, t.localMutes[n]);
            for (let n of Object.keys(t.localVolumes))
                n !== eT.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
            for (let n of Object.keys(t.localPans)) {
                let r = t.localPans[n];
                e.setLocalPan(n, r.left, r.right);
            }
            for (let n of Object.keys(t.disabledLocalVideos)) e.setLocalVideoDisabled(n, t.disabledLocalVideos[n]);
            e.on(O.yq.Speaking, (t, n, r, i) => {
                I.h.dispatch({
                    type: "SPEAKING",
                    context: e.context,
                    userId: t,
                    speakingFlags: n,
                    voiceDb: i,
                });
            }),
                e.context === eG.x.DEFAULT &&
                    ((ty = !1),
                    (tb = !1),
                    e.on(O.yq.SpeakingWhileMuted, () => {
                        (ty = !0),
                            (tb = !0),
                            r.emitChange(),
                            tO.stop(),
                            tO.start(e3, () => {
                                (tb = !1), r.emitChange();
                            });
                    })),
                e.on(O.yq.DesktopSourceEnd, (t, n) => {
                    I.h.dispatch({
                        type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                        settings: {
                            context: e.context,
                        },
                        endReason: t,
                        errorCode: n,
                    });
                }),
                e.on(O.yq.InteractionRequired, (e) => {
                    I.h.dispatch({
                        type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
                        required: e,
                    });
                }),
                e.on(O.yq.VideoHookInitialize, (e, t, n, r, i, o) => {
                    (null == a ? void 0 : a.desktopSource) != null &&
                        ey.default.track(
                            ex.HAw.VIDEOHOOK_INITIALIZED,
                            eB(
                                {
                                    backend: e,
                                    format: t,
                                    framebuffer_format: n,
                                    sample_count: r,
                                    success: i,
                                    reinitialization: o,
                                },
                                (0, k.A)(null == a ? void 0 : a.desktopSource),
                            ),
                        );
                }),
                e.on(O.yq.NoiseCancellationError, (e) => {
                    eW.warn("noisecancellererror event: ".concat(e)),
                        (0, L.QW)({
                            type: L.iy.NOISE_CANCELLER_ERROR,
                            underlyingError: nt(e),
                        }),
                        (tk = !0),
                        ey.default.track(ex.HAw.VOICE_PROCESSING, {
                            noise_canceller_error: e,
                        }),
                        I.h.dispatch({
                            type: "AUDIO_SET_NOISE_SUPPRESSION",
                            enabled: !0,
                        }),
                        I.h.dispatch({
                            type: "AUDIO_SET_NOISE_CANCELLATION",
                            enabled: !1,
                        }),
                        I.h.dispatch({
                            type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR",
                            code: e,
                        });
                }),
                e.on(O.yq.VoiceActivityDetectorError, (e) => {
                    eW.warn("voiceactivitydetectorerror event: ".concat(e)),
                        (0, L.QW)({
                            type: L.iy.NOISE_CANCELLER_ERROR,
                            underlyingError: nt(e),
                        }),
                        ey.default.track(ex.HAw.VOICE_PROCESSING, {
                            noise_canceller_error: e,
                        }),
                        I.h.dispatch({
                            type: "AUDIO_SET_MODE",
                            context: eG.x.DEFAULT,
                            mode: ex.TBI.VOICE_ACTIVITY,
                            options: eY(eB({}, t4(eG.x.DEFAULT).modeOptions), {
                                vadUseKrisp: !1,
                            }),
                        }),
                        I.h.dispatch({
                            type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
                            code: e,
                        });
                }),
                e.on(O.yq.SdpError, (e, t, n, r) => {
                    ey.default.track(ex.HAw.SDP_ERROR, {
                        operation: e,
                        error: t,
                        type: n,
                        sdp: r,
                    });
                }),
                e.on(O.yq.VideoState, (t) => {
                    I.h.dispatch({
                        type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED",
                        videoState: t,
                        context: e.context,
                    });
                }),
                e.setBitRate(eC.A.bitrate),
                e.applyVideoQualityMode(eL.A.mode),
                te.supports(eG.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                    te.setAsyncVideoInputDeviceInit((0, H.v)("setupMediaEngine").enabled);
        }),
        te.on(O.bg.DeviceChange, (e, t, n) => {
            tu.stop(),
                I.h.dispatch({
                    type: "MEDIA_ENGINE_DEVICES",
                    inputDevices: e,
                    outputDevices: t,
                    videoDevices: n,
                });
        }),
        te.on(O.bg.VolumeChange, (e, t) => {
            I.h.dispatch({
                type: "AUDIO_VOLUME_CHANGE",
                inputVolume: e,
                outputVolume: t,
            });
        }),
        te.on(O.bg.DesktopSourceEnd, (e, t) => {
            I.h.dispatch({
                type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                settings: null,
                endReason: e,
                errorCode: t,
            });
        }),
        te.on(O.bg.AudioPermission, (e) => {
            (tH = !0),
                I.h.dispatch({
                    type: "MEDIA_ENGINE_PERMISSION",
                    kind: "audio",
                    granted: e,
                });
        }),
        te.on(O.bg.VideoPermission, (e) => {
            I.h.dispatch({
                type: "MEDIA_ENGINE_PERMISSION",
                kind: "video",
                granted: e,
            });
        }),
        te.on(O.bg.WatchdogTimeout, async () => {
            let e;
            try {
                await eb.A.submitLiveCrashReport({
                    message: {
                        message: "Voice Watchdog Timeout",
                    },
                });
            } catch (t) {
                "number" == typeof t.status && (e = t.status);
            }
            eW.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)),
                ey.default.track(ex.HAw.VOICE_WATCHDOG_TIMEOUT, {
                    minidump_submission_error: e,
                });
        }),
        te.on(O.bg.VideoInputInitialized, (e) => {
            ey.default.track(ex.HAw.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired
                    ? null
                    : Math.round(e.timeToFirstFrame * eO.A.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: eR.A.getMediaSessionId(),
                rtc_connection_id: eR.A.getRTCConnectionId(),
            });
        }),
        te.on(O.bg.AudioInputInitialized, (e) => {
            ey.default.track(ex.HAw.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * eO.A.Millis.SECOND),
                rtc_connection_id: eR.A.getRTCConnectionId(),
            });
        }),
        te.on(O.bg.ClipsRecordingRestartNeeded, () => {
            I.h.dispatch({
                type: "CLIPS_RESTART",
            });
        }),
        te.on(O.bg.ClipsInitFailure, (e, t) => {
            I.h.wait(() => {
                I.h.dispatch({
                    type: "CLIPS_INIT_FAILURE",
                    errMsg: e,
                    applicationName: t,
                });
            });
        }),
        te.on(O.bg.ClipsRecordingEnded, (e, t) => {
            var n, r;
            (null == o || null == (n = o.desktopSource) ? void 0 : n.id) === e &&
                (null != t && (null == a || null == (r = a.desktopSource) ? void 0 : r.soundshareId) !== t && T.c1(t),
                (o = null));
        }),
        te.on(O.bg.NativeScreenSharePickerUpdate, (e, t) => {
            I.h.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE",
                existing: e,
                content: t,
            });
        }),
        te.on(O.bg.NativeScreenSharePickerCancel, (e) => {
            I.h.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL",
                existing: e,
            });
        }),
        te.on(O.bg.NativeScreenSharePickerError, (e) => {
            I.h.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_ERROR",
                error: e,
            });
        }),
        te.on(O.bg.AudioDeviceModuleError, (e, t, n) => {
            ey.default.track(ex.HAw.AUDIO_DEVICE_MODULE_ERROR, {
                audio_device_module: e,
                code: t,
                device_name: n,
            });
        }),
        te.on(O.bg.VideoCodecError, (e) => {
            let t = "encode" === e.mode ? L.iy.VIDEO_ENCODE_ERROR : L.iy.VIDEO_DECODE_ERROR,
                n = {
                    videoCodec: e.codecStandard,
                    errorMessage: e.message,
                };
            (0, L.QW)(
                t === L.iy.VIDEO_ENCODE_ERROR
                    ? eY(
                          eB(
                              {
                                  type: t,
                              },
                              n,
                          ),
                          {
                              videoEncoder: e.implName,
                          },
                      )
                    : eY(
                          eB(
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
        te.on(O.bg.ConnectionStats, (e) => {
            I.h.dispatch({
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
        te.on(O.bg.VoiceQueueMetrics, (e) => {
            let t = r1(e);
            null !== t && ey.default.track(ex.HAw.VOICE_QUEUE_METRICS, t);
        }),
        te.setOnVideoContainerResized((e, t, n) => {
            I.h.wait(() =>
                I.h.dispatch({
                    type: "VIDEO_SIZE_UPDATE",
                    streamId: e,
                    dimensions: {
                        width: t,
                        height: n,
                    },
                }),
            );
        }),
        n9(),
        rt(),
        te.supports(eG.O5.ASYNC_CLIPS_SOURCE_DEINIT) &&
            te.setAsyncClipsSourceDeinit((0, Y.V)("setupMediaEngine").enabled),
        np.reset(),
        (0, eP.w)().then((e) => {
            null != e && (tZ = e.gpu_brand);
        }),
        te.on(O.bg.SystemMicrophoneModeChange, (e) => {
            (f = e), te.eachConnection(na);
        });
}

function ns() {
    return (0, ev.isWindows)() && y().satisfies(null === S.A || void 0 === S.A ? void 0 : S.A.os.release, eM.yg);
}

function nl() {
    return (0, ev.isWindows)() && y().satisfies(null === S.A || void 0 === S.A ? void 0 : S.A.os.release, eM.fG);
}

function nc() {
    return (
        (0, ev.isMac)() &&
        te.supports(eG.O5.SCREEN_CAPTURE_KIT) &&
        y().satisfies(null === S.A || void 0 === S.A ? void 0 : S.A.os.release, eM.e)
    );
}

function nu() {
    return (
        (0, ev.isWindows)() &&
        te.supports(eG.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        te.supports(eG.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}

function nd() {
    return te.supports(eG.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
async function nf() {
    let { windowsMuteAndZeroVolumeDetectionEnabled: e } = (0, el.F)({
        location: "MediaEngineStore.fetchInputDeviceOSConfig",
    });
    if ((0, ev.isWindows)() && y().satisfies(null === S.A || void 0 === S.A ? void 0 : S.A.os.release, eM.PH) && e)
        try {
            var t;
            let e = nO(ts, t4().inputDeviceId),
                n = null == (t = ts[e]) ? void 0 : t.guid;
            if (null != n && "" !== n) {
                await eI.Ay.ensureModule("discord_voice");
                let [e, t] = await Promise.all([te.getDeviceOSVolume(n), te.getDeviceOSMuted(n)]);
                (l = e), (s = t);
            }
        } catch (e) {
            eW.warn("Failed to get device OS volume and/or mute state: ".concat(e));
        }
}
let np = new (class {
    start() {
        this.started || ((this.started = !0), te.on(O.bg.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout &&
                (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            te.removeListener(O.bg.Silence, this.handleSilence),
            I.h.dispatch({
                type: "AUDIO_INPUT_DETECTED",
                inputDetected: null,
            }));
    }
    update() {
        let e = t4();
        !tS && eR.A.getState() === ex.S7L.RTC_CONNECTED && e.mode === ex.TBI.VOICE_ACTIVITY && e.silenceWarning
            ? this.start()
            : this.stop();
    }
    reset() {
        this.stop(), this.update();
    }
    constructor() {
        eF(this, "stateChangeTimeout", void 0),
            eF(this, "noVoiceTimeout", 5e3),
            eF(this, "voiceTimeout", 1500),
            eF(this, "started", !1),
            eF(this, "handleSilence", (e) => {
                let t = !e;
                null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout);
                let n = () => {
                    I.h.dispatch({
                        type: "AUDIO_INPUT_DETECTED",
                        inputDetected: t,
                    }),
                        e && (tT = !0);
                };
                this.stateChangeTimeout = setTimeout(
                    async () => {
                        (this.stateChangeTimeout = null), e && this.started && (await nf()), this.started && n();
                    },
                    t ? this.voiceTimeout : this.noVoiceTimeout,
                );
            });
    }
})();

function n_() {
    var e;
    let t = v.w.get("audio");
    null != t &&
        (v.w.set(eK, {
            [eG.x.DEFAULT]: t,
        }),
        v.w.remove("audio")),
        (tt = null != (e = v.w.get(eK)) ? e : {}),
        g().each(tt, (e) => {
            if (
                (g().defaultsDeep(e, e8()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, eS.OH)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== ez &&
                    ((e.vadUseKrispSettingVersion = ez), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                !e.vadThrehsoldMigrated)
            ) {
                var t;
                (e.vadThrehsoldMigrated = !0),
                    (null == (t = e.modeOptions) ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = e1);
            }
            te.supports(eG.O5.SIDECHAIN_COMPRESSION) &&
                e.sidechainCompressionSettingVersion < eQ &&
                ((e.sidechainCompressionSettingVersion = eQ), (e.sidechainCompression = !0)),
                (0, ev.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== eZ &&
                      ((e.ncUseKrispjsSettingVersion = eZ), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== eq &&
                      ((e.ncUseKrispSettingVersion = eq), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
        }),
        ng();
}

function nh(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eG.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = t6(t);
    return Object.assign(r, e), !__OVERLAY__ && n && v.w.set(eK, tt), r;
}

function nm() {
    v.w.remove(eK), location.reload();
}

function ng() {
    let e = t4();
    te.setAudioInputDevice(e.inputDeviceId),
        te.setAudioOutputDevice(e.outputDeviceId),
        ne(),
        te.setInputVolume(e.inputVolume),
        te.setOutputVolume(e.outputVolume),
        te.setAecDump(e.aecDumpEnabled),
        te.setSidechainCompression(e.sidechainCompression),
        te.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        te.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing);
}

function nE() {
    tr ||
        te.enable().then(() =>
            I.h.dispatch({
                type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
                enabled: !0,
                unmute: !1,
            }),
        );
}

function ny(e) {
    return {
        id: eG.dx,
        index: 0,
        name: e,
        disabled: !0,
        guid: void 0,
        hardwareId: void 0,
        containerId: void 0,
    };
}

function nb(e, t) {
    if (0 === e.length) {
        let e = ny(t);
        return {
            [e.id]: e,
        };
    }
    return g()(e)
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

function nO(e, t) {
    var n, r;
    let i = null != (n = null != (r = e[t]) ? r : e[eG.dx]) ? n : g()(e).values().first();
    return null != i ? i.id : t;
}

function nv(e) {
    let t = ts;
    if (((ts = nb(e, eV.intl.string(eV.t["/QIjDA"]))), !g().isEqual(ts, t))) {
        let e = t4(),
            t = nO(ts, e.inputDeviceId);
        te.setAudioInputDevice(t), te.eachConnection(na);
    }
}

function nA(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}

function nI(e) {
    te.eachConnection((t) => {
        t.context === eG.x.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}

function nS(e) {
    let t = tl;
    if (((tl = nb(e, eV.intl.string(eV.t.xlUg0v))), !g().isEqual(tl, t))) {
        let e = t4(),
            n = nO(tl, e.outputDeviceId);
        te.setAudioOutputDevice(n);
        let r = nA(t),
            i = nA(tl);
        r !== i && nI(i);
    }
}

function nT(e) {
    tA = e.length > 0;
    let t = tc;
    if (((tc = nb(e, eV.intl.string(eV.t.WKWARY))), th && !g().isEqual(tc, t))) {
        var n;
        let e = void 0 !== tc[tm],
            r = tm === eG.dx && (null == (n = t[eG.dx]) ? void 0 : n.disabled);
        ne(e || r);
    }
}

function nC() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        r =
            null != (e = em.A.settings.audioContextSettings)
                ? e
                : {
                      user: {},
                      stream: {},
                  };
    for (let e of Object.keys(r)) {
        let i = e === ek.W.USER ? eG.x.DEFAULT : eG.x.STREAM,
            a = i === eG.x.STREAM ? eG.Cn : eG.Hz,
            o = null != (t = r[e]) ? t : {},
            { localMutes: s, localVolumes: l } = t4(i);
        for (let [e, t] of Object.entries(o))
            null == (0, e_.tM)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== a ? (l[e] = t.volume) : delete l[e],
                te.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (n)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == o[e] &&
                    (delete s[e],
                    delete l[e],
                    te.eachConnection((t) => {
                        t.setLocalVolume(e, a), t.setLocalMute(e, !1);
                    }, i));
        nh(
            {
                localMutes: s,
                localVolumes: l,
            },
            i,
        );
    }
}

function nN(e) {
    if (null == r)
        return (
            eW.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
            {
                soundshareId: null,
                soundshareSession: "",
            }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : eb.A.getAudioPid(e),
            n = "";
        return (
            null != t && (n = eb.A.generateSessionFromPid(t)),
            {
                soundshareId: t,
                soundshareSession: n,
            }
        );
    }
}

function nw(e, t) {
    (0, ev.isWindows)() &&
        e > 1 &&
        T.GH(e, {
            soundshare_session: t,
        }).then((t) => {
            null == t ||
                j.Ay.shouldContinueWithoutElevatedProcessForPID(e) ||
                I.h.wait(() => {
                    I.h.dispatch({
                        type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                        errorMessage: t,
                    });
                });
        });
}

function nR(e) {
    (i = e.sessionId), (td = !1), (t_ = !1);
    let t = t4();
    if (
        (nu() && (nd() ? rw(eG.rB.AUTOMATIC) : t.automaticAudioSubsystem && rR()),
        te.supports(eG.O5.OFFLOAD_ADM_CONTROLS))
    ) {
        let e = !1;
        (0, ev.isDesktop)()
            ? (e = (0, F.i)({
                  location: "handleConnectionOpen",
              }).enabled)
            : ((0, ev.isIOS)() || (0, ev.isAndroid)()) &&
              (e = (0, B.Y)({
                  location: "handleConnectionOpen",
              }).enabled),
            te.setOffloadAdmControls(e);
    }
    (0, eg.Lb)({
        location: "MediaEngineStore",
        autoTrackExposure: !1,
    }) &&
        null !== t.mostRecentlyRequestedVoiceFilter &&
        (0, ev.isDesktop)() &&
        (eE.A.getLastInitAttemptMayHaveCrashed()
            ? (I.h.dispatch({
                  type: "AUDIO_SET_SELF_MUTE",
                  mute: !0,
                  context: eG.x.DEFAULT,
                  playSoundEffect: !0,
              }),
              nh({
                  mostRecentlyRequestedVoiceFilter: null,
              }))
            : n(342887).md()),
        nC();
}

function nP(e) {
    let { mediaEngineState: t } = e;
    (tt = t.settingsByContext),
        (ts = t.inputDevices),
        (tl = t.outputDevices),
        (tq = t.appSupported),
        (tw = t.krispModuleLoaded),
        (c = t.krispVersion),
        (ta = t.goLiveContext);
}

function nD() {
    i = null;
}

function nL() {
    if ((0, ev.isWeb)()) {
        let e = en.f1.getCurrentConfig({
            location: "MediaEngineStore handlePostConnectionOpen",
        });
        e.loadWasmModule && e.preload && r.startDavePreload();
    }
    return !1;
}

function nx(e) {
    switch (e.state) {
        case ex.S7L.CONNECTING:
            nE();
            break;
        case ex.S7L.RTC_CONNECTING:
            (tS = !1), (tT = !1), (s = void 0), (l = void 0);
            break;
        case ex.S7L.RTC_CONNECTED:
            ne();
            break;
        case ex.S7L.DISCONNECTED:
            nH(), nY();
    }
    np.update();
}

function nM(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (td = t.mute || t.suppress), (t_ = t.deaf), te.eachConnection(t8);
            let e = null != t.guildId && null != t.channelId && null != tj && tj !== t.channelId,
                n = !tC && null == t.channelId;
            return ne(!e && !n && th), (tj = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== eT.default.getId() || null != eR.A.getChannelId() || ne(!1, null), e;
    }, !1);
}

function nj(e) {
    let { mute: t } = e;
    (tf = t), te.eachConnection(t8);
}

function nk(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = t4(t);
    if (t === eG.x.DEFAULT && (eu.A.requestPermission(ej.iL.AUDIO), tp)) return !1;
    (r = !i && !r) || (i = !1),
        n || (tE = !0),
        nh(
            {
                mute: r,
                deaf: i,
            },
            t,
        ),
        te.eachConnection(t8);
}

function nU(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    nh(
        {
            mute: n,
        },
        t,
    ),
        r || (tE = !0),
        te.eachConnection(t8);
}

function nG(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== ek.oD.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    nC(!0);
}

function nV(e) {
    let { context: t } = e;
    nh(
        {
            deaf: !t4(t).deaf,
        },
        t,
    ),
        te.eachConnection(t8);
}

function nF(e) {
    let { context: t, userId: n } = e;
    if (n === eT.default.getId()) return;
    let { localMutes: r } = t4(t);
    r[n] ? delete r[n] : (r[n] = !0),
        nh(
            {
                localMutes: r,
            },
            t,
        ),
        te.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}

function nB(e) {
    var t, n, r, i, a, o, s;
    let { context: l, userId: c, videoToggleState: u, persist: d, isAutomatic: f } = e;
    h()(!(d && f), "These are not allowed to both be true.");
    let p = u === ex.bb8.DISABLED,
        { disabledLocalVideos: _ } = t4(l),
        m = null != (t = _[c]) && t,
        g = tW.has(c),
        E = u === ex.bb8.AUTO_ENABLED || u === ex.bb8.MANUAL_ENABLED;
    eW.info(
        "disableVideo="
            .concat(p, " currentlyDisabled=")
            .concat(m, " currentlyAutoDisabled=")
            .concat(g, ", isVideoShown=")
            .concat(E),
    ),
        h()(!(g && !m), "If you are auto-disabled, then you are also disabled.");
    let y = p !== m,
        b = l === eG.x.DEFAULT,
        O = f && y && b,
        v = d && y && b;
    eW.info(
        "changed="
            .concat(y, " isDefaultContext=")
            .concat(b, " isUpdateCausedByVideoHealthManager=")
            .concat(O, " isManualToggleByUser=")
            .concat(v),
    );
    let { videoToggleStateMap: A } = t4(l);
    if (
        (A[c] === ex.bb8.AUTO_PROBING &&
            u === ex.bb8.AUTO_ENABLED &&
            (0, ec.A)(c, p ? eG.Al.AUTO_DISABLE : eG.Al.AUTO_ENABLE, E),
        (A[c] = u),
        nh(
            {
                videoToggleStateMap: A,
            },
            l,
            d,
        ),
        u === ex.bb8.AUTO_PROBING
            ? null == (n = eR.A.getRTCConnection()) || n.pauseStatsCollectionForUser(c, !0)
            : null == (r = eR.A.getRTCConnection()) || r.pauseStatsCollectionForUser(c, !1),
        tK ||
            (eW.info("isAutoDisableAllowed=".concat(tK, " - disabling VideoHealthManager")),
            null == (a = eR.A.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()),
        O)
    ) {
        if ((!p && !g) || (p && !tK)) return;
        (0, ec.A)(c, p ? eG.Al.AUTO_DISABLE : eG.Al.AUTO_ENABLE, E), p ? tW.add(c) : tW.delete(c);
    } else
        v &&
            (g && !p
                ? (eW.info("disallowing auto-disable for this session because of manual override by user"),
                  (tK = !1),
                  null == (s = eR.A.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(),
                  (0, ec.A)(c, eG.Al.MANUAL_REENABLE, E))
                : (0, ec.A)(c, p ? eG.Al.MANUAL_DISABLE : eG.Al.MANUAL_ENABLE, E));
    b && !p && tW.delete(c),
        p ? (_[c] = !0) : delete _[c],
        nh(
            {
                disabledLocalVideos: _,
            },
            l,
            d,
        ),
        te.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(c, null != (t = _[c]) && t);
        }, l);
}

function nH() {
    if (0 === tW.size) return;
    let e = eG.x.DEFAULT,
        { disabledLocalVideos: t } = t4(e);
    tW.forEach((n) => {
        h()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            te.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tW.clear(),
        nh(
            {
                disabledLocalVideos: t,
            },
            e,
            !1,
        );
}

function nY() {
    let e = eG.x.DEFAULT,
        { videoToggleStateMap: t } = t4(e);
    for (let [e, n] of Object.entries(t)) n === ex.bb8.AUTO_PROBING && delete t[e];
    nh(
        {
            videoToggleStateMap: t,
        },
        e,
        !1,
    );
}

function nW(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === eT.default.getId()) return;
    let i = t === eG.x.STREAM ? eG.Cn : eG.Hz,
        { localVolumes: a } = t4(t);
    r === i ? delete a[n] : (a[n] = r),
        nh(
            {
                localVolumes: a,
            },
            t,
        ),
        te.eachConnection((e) => e.setLocalVolume(n, r), t);
}

function nK(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: a } = t4(t);
    (a[n] = {
        left: r,
        right: i,
    }),
        nh(
            {
                localPans: a,
            },
            t,
        ),
        te.eachConnection((e) => e.setLocalPan(n, r, i), t);
}

function nz(e) {
    let { context: t, mode: n, options: r } = e;
    nh(
        {
            mode: n,
            modeOptions: r,
        },
        t,
    ),
        te.eachConnection(t5),
        np.update();
}

function nq(e) {
    let { volume: t } = e;
    nh({
        inputVolume: t7(t),
    }),
        te.setInputVolume(t);
}

function nZ(e) {
    let { volume: t } = e;
    nh({
        outputVolume: t,
    }),
        te.setOutputVolume(t);
}

function nQ(e) {
    let { id: t } = e;
    (t = nO(ts, t)),
        (to = performance.now()),
        nh({
            inputDeviceId: t,
        }),
        te.setAudioInputDevice(t),
        te.eachConnection(na),
        (s = void 0),
        (l = void 0);
}

function nX(e) {
    let { id: t } = e;
    nh({
        outputDeviceId: (t = nO(tl, t)),
    }),
        te.setAudioOutputDevice(t);
}

function nJ(e) {
    let { id: t } = e;
    nh({
        videoDeviceId: (t = nO(tc, t)),
    }),
        ne();
}

function n$(e) {
    let { inputProfile: t } = e;
    nh({
        activeInputProfile: t,
    });
    let n = t4();
    te.eachConnection((e) => {
        t5(e), na(e);
    }),
        te.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        np.update(),
        re();
}

function n0(e) {
    return ti !== e.required && ((ti = e.required), e.required || te.interact(), !0);
}

function n1(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    nv(t), nS(n), nT(r);
}

function n2(e) {
    let { inputVolume: t, outputVolume: n } = e;
    nh({
        inputVolume: t7(t),
        outputVolume: n,
    });
}

function n3(e) {
    var t;
    let n = t4(),
        i = te.getAudioSubsystem(),
        a = te.getAudioLayer(),
        o = nO(ts, n.inputDeviceId),
        s = null == (t = ts[o]) ? void 0 : t.name,
        l = (0, ef.A)(n.noiseCancellation, r.getSystemMicrophoneMode(), {
            location: "trackVoiceProcessing",
        });
    ey.default.track(ex.HAw.VOICE_PROCESSING, {
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

function n6(e) {
    let t = nh({
        echoCancellation: e.enabled,
    });
    te.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), re(), n3(e.location);
}

function n4(e) {
    n7(e.enabled);
}

function n5(e) {
    let t = nh({
        sidechainCompressionStrength: e.strength,
    });
    te.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}

function n7(e) {
    let t = nh({
        sidechainCompression: e,
    });
    te.setSidechainCompression(t.sidechainCompression);
}

function n8(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tz.add(n) : tz.delete(n), n9(), re();
}

function n9() {
    let e = !tz.has("voice_filter_preview") && !tz.has("mic_test");
    te.setMaybePreprocessMute(e);
}

function re() {
    let e = t4(),
        t = tz.size > 0,
        n = e.inputDeviceId,
        r = eN.A.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        a = eN.A.hasNoiseSuppression(n) || e.noiseSuppression,
        o = nn(eN.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation,
        l = null !== tD,
        c = tz.has("voice_filter") && 1 === tz.size;
    te.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: a,
        automaticGainControlConfig: o,
        noiseCancellation: s,
        voiceFilters: l,
        loopbackUseAudioMode: c,
    });
}
async function rt() {
    var e, t, n, r;
    if (!te.supports(eG.O5.VAAPI)) return;
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
            ((t$ = !0), (tJ = te.supports(eG.O5.GAMESCOPE_CAPTURE))));
}

function rn(e) {
    let t = nh({
        noiseSuppression: e.enabled,
    });
    te.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), re(), n3(e.location);
}

function rr(e) {
    let t = nh({
        automaticGainControl: e.enabled,
    });
    te.eachConnection((e) => nr(e, t.automaticGainControl)), re(), n3(e.location);
}

function ri(e) {
    let t = nh({
        noiseCancellation: e.enabled,
    });
    te.eachConnection((e) => ni(e, t.noiseCancellation)), re(), n3(e.location);
}

function ra(e) {
    ed.A.setKrispModelOverride(e.model), (d = e.model), re();
}

function ro(e) {
    var t;
    (0, ev.isWeb)() || ((tP = e.enabled), null == (t = te.setNoiseCancellationEnableStats) || t.call(te, e.enabled));
}

function rs(e) {
    nh({
        silenceWarning: e.enabled,
    }),
        np.update();
}

function rl(e) {
    te.setDebugLogging(e.enabled);
}

function rc(e) {
    let { level: t } = e;
    (u = t), ed.A.setKrispSuppressionLevel(t);
}

function ru(e) {
    nh({
        videoHook: e.enabled,
    });
}

function rd(e) {
    nh({
        experimentalSoundshare2: e.enabled,
    });
}

function rf(e) {
    let { enabled: t } = e;
    nh({
        useSystemScreensharePicker: t,
    });
}

function rp(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = nh({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r,
        });
    te.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}

function r_(e) {
    let { enabled: t } = e;
    nh({
        qos: t,
    }),
        te.eachConnection((e) => e.setQoS(t));
}

function rh() {
    nm();
}

function rm(e) {
    let { inputDetected: t } = e;
    (tI = t), !tS && tI && ((tS = !0), np.update());
}

function rg(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === tp) return !1;
    (tp = n), te.eachConnection(t8);
}

function rE(e) {
    let { state: t, permissionType: n } = e,
        r = t === ej.hL.ACCEPTED;
    switch (n) {
        case ej.iL.AUDIO:
            (tH = !0), te.eachConnection(t8);
            break;
        case ej.iL.CAMERA:
            !r && th && ne(!1);
            break;
        default:
            return !1;
    }
}

function ry() {
    return tw || !1;
}
async function rb() {
    try {
        var e, t, n, i;
        await eI.Ay.ensureModule("discord_krisp");
        let a = eI.Ay.requireModule("discord_krisp");
        (tw = !0),
            (c = null == (t = a.getSdkVersion) ? void 0 : t.call(a)),
            (u = null != (e = null == (n = a.getSuppressionLevel) ? void 0 : n.call(a)) ? e : 100),
            null == (i = a.getNcModels) ||
                i.call(a).then((e) => {
                    (tR = e), r.emitChange();
                }),
            r.emitChange();
    } catch (t) {
        eW.warn("Failed to load Krisp module: ".concat(t.message)), eA.A.captureException(t);
        let e = eG.CO.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eG.CO.INITIALIZED : n;
        }
        ey.default.track(ex.HAw.VOICE_PROCESSING, {
            noise_canceller_error: e,
        }),
            nh({
                noiseCancellation: !1,
            });
    } finally {
        tN = !1;
    }
}

function rO() {
    return (0, ev.isWindows)() || (0, ev.isLinux)() || (0, ev.isMac)();
}

function rv() {
    !rO() || __OVERLAY__ || tN || tw
        ? (0, ev.isWeb)() && te.supports(eG.O5.NOISE_CANCELLATION)
            ? ((tw = !0), r.emitChange())
            : (0, ev.isWeb)() &&
              nh({
                  noiseCancellation: !1,
              })
        : ((tN = !0), rb());
}

function rA(e) {
    let { enabled: t } = e;
    ey.default.track(ex.HAw.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != tD ? tD : null,
        enabled: t,
    }),
        nh({
            voiceFilterPlaybackEnabled: t,
        });
}

function rI(e) {
    let { newVoiceFilterId: t } = e;
    nh({
        mostRecentlyRequestedVoiceFilter: t,
    }),
        te.eachConnection((e) => e.setVoiceFilterId(t));
}

function rS() {
    nh({
        mostRecentlyRequestedVoiceFilter: null,
    });
}

function rT(e) {
    let { voiceFilterId: t } = e;
    (tx = tD), (tM = tL), (tD = t), (tL = null === t ? null : Date.now());
}

function rC(e) {
    let t = e.bypassEnabled;
    nh({
        bypassSystemInputProcessing: t,
    }),
        te.setAudioInputBypassSystemProcessing(t),
        n3(e.location);
}

function rN(e) {
    rw(e.subsystem);
}

function rw(e) {
    e === eG.rB.AUTOMATIC
        ? (nh({
              automaticAudioSubsystem: !0,
          }),
          rR())
        : (nh({
              automaticAudioSubsystem: !1,
          }),
          te.setAudioSubsystem(e));
}

function rR() {
    te.queueAudioSubsystem(eG.rB.EXPERIMENTAL);
}

function rP(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && ne(i, null), null != t || null == n)) {
        tC = !1;
        return;
    }
    if (tC) return;
    tC = !0;
    let a = t4();
    (a.mute || a.deaf) &&
        (nh({
            deaf: !1,
            mute: !1,
        }),
        te.eachConnection(t8));
}

function rD(e) {
    let { application: t } = e;
    tn.add(t.id);
}

function rL(e) {
    let { application: t } = e;
    tn.delete(t.id);
}

function rx(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (tr = !1), te.eachConnection(t8);
                break;
            case "video":
                ne(!1);
        }
}

function rM(e) {
    (tr = e.enabled),
        e.unmute &&
            nh({
                mute: !1,
                deaf: !1,
            }),
        te.eachConnection(t8);
}

function rj(e) {
    let { enabled: t } = e;
    eu.A.requestPermission(ej.iL.CAMERA), ne(t);
}

function rk(e) {
    let { sourceId: t, applicationName: n, quality: i } = e;
    if (!(0, R.Ao)() || null == S.A) return !1;
    let a = null,
        s = null,
        l = eb.A.getPidFromDesktopSource(t);
    ({ soundshareId: a, soundshareSession: s } = nN(l));
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
        (te.setClipsSource(null),
        (0, ev.isWindows)() && null != o.desktopSource.soundshareId && T.c1(o.desktopSource.soundshareId)),
        null != a && nw(a, s),
        (o = c);
    let u = t1("MediaEngineStore clips"),
        d = t4().videoHook;
    te.setClipsSource({
        desktopDescription: {
            id: o.desktopSource.id,
            soundshareId: o.desktopSource.soundshareId,
            useVideoHook: d,
            useGraphicsCapture: ns(),
            useCaptureDeviceForEncode: !1,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: nc(),
            videoHookStaleFrameTimeoutMs: e$,
            graphicsCaptureStaleFrameTimeoutMs: e0,
            hdrCaptureMode: u,
        },
        quality: i,
        applicationName: n,
    });
}

function rU(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((o = null), te.setClipsSource(null));
}

function rG(e) {
    var t, n, r, i;
    let { settings: a } = e;
    if ((null == a ? void 0 : a.desktopSettings) != null) {
        let e = null,
            r = null,
            { sourceId: i, sound: o } = a.desktopSettings,
            s = null != (t = a.context) ? t : eG.x.DEFAULT,
            l =
                null != (n = a.qualityOptions)
                    ? n
                    : {
                          resolution: 720,
                          frameRate: 30,
                      },
            c = !1 === o ? null : eb.A.getPidFromDesktopSource(i);
        ev.isPlatformEmbedded &&
            !0 === o &&
            (({ soundshareId: e, soundshareSession: r } = nN(c)), null != e && nw(e, r)),
            t9(s),
            ne(s === eG.x.STREAM && th, {
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
        let e = null != (r = a.context) ? r : eG.x.DEFAULT,
            { videoDeviceGuid: t, audioDeviceGuid: n } = a.cameraSettings,
            o = e === eG.x.STREAM && th,
            s =
                null != (i = a.qualityOptions)
                    ? i
                    : {
                          resolution: 720,
                          frameRate: 30,
                      };
        ne(o, {
            cameraSource: {
                videoDeviceGuid: t,
                audioDeviceGuid: n,
            },
            quality: {
                resolution: s.resolution,
                frameRate: s.frameRate,
            },
        });
    } else ne(th, null);
}

function rV(e) {
    let { section: t } = e;
    return t === ex.nc_.VOICE && nE(), !1;
}

function rF() {
    return te.eachConnection(na), !1;
}

function rB(e) {
    let { enabled: t } = e,
        n = nh({
            aecDumpEnabled: t,
        });
    te.setAecDump(n.aecDumpEnabled);
}

function rH(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (tt = Object.values(eG.x).reduce((e, n) => {
        let r = n,
            i = e8();
        return (e[r] = g().merge(i, t[r])), e;
    }, {})),
        v.w.set(eK, tt),
        ng();
}

function rY(e) {
    let { state: t } = e,
        n = M.A.isEnabled();
    if (t === ex.g6G.BACKGROUND && th && !n) (tv = !0), ne(!1);
    else {
        if (t !== ex.g6G.ACTIVE || !tv) return !1;
        (tv = !1), ne(!0);
    }
    return !0;
}

function rW(e) {
    te.eachConnection((t) => t.setBitRate(e.bitrate));
}

function rK() {
    if ((!th && null == a) || null != eR.A.getRTCConnectionId()) return !1;
    ne(!1, null);
}

function rz() {
    return !!tk && ((tk = !1), !0);
}

function rq(e) {
    te.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}

function rZ(e) {
    let { settings: t } = e;
    te.applyMediaFilterSettings(t).finally(() => {
        (tU = !1), r.emitChange();
    });
}

function rQ() {
    tU = !0;
}

function rX() {
    tU = !1;
}

function rJ(e) {
    tQ = e.enabled;
}

function r$() {
    if ((0, ev.isDesktop)() && ev.isPlatformEmbedded && !t0) {
        t0 = !0;
        let e = async () => {
            let t = await new Promise((e) => {
                eI.Ay.pollQueueMetrics((t) => {
                    e(t);
                });
            });
            t.periodMs = eG.tl;
            let n = r1(t);
            null !== n && ey.default.track(ex.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, eG.tl);
        };
        setTimeout(e, eG.tl);
    }
}
class r0 extends (p = b.Ay.Store) {
    initialize() {
        no(),
            n_(),
            rv(),
            nY(),
            r$(),
            (tq = {
                [eG.O5.VIDEO]: te.supports(eG.O5.VIDEO),
                [eG.O5.DESKTOP_CAPTURE]: te.supports(eG.O5.DESKTOP_CAPTURE),
                [eG.O5.HYBRID_VIDEO]: te.supports(eG.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eT.default, eC.A, eN.A, ew.A, N.A, x.A, eR.A, j.Ay, ep.A, em.A, eD.default, eL.A, eE.A);
    }
    supports(e) {
        return te.supports(e);
    }
    supportsInApp(e) {
        return tq[e] || te.supports(e);
    }
    isSupported() {
        return te.supported();
    }
    isNoiseSuppressionSupported() {
        return te.supports(eG.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return ry();
    }
    isNoiseCancellationError() {
        return tk;
    }
    isAutomaticGainControlSupported() {
        return te.supports(eG.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nd() && (te.supports(eG.O5.LEGACY_AUDIO_SUBSYSTEM) || te.supports(eG.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return te.supports(eG.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === te.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return ry();
    }
    isAecDumpSupported() {
        return te.supports(eG.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return te.supports(eG.O5.VIDEO) && te.supports(eG.O5.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        return (
            (null == (e = ew.A.getChannel(tj)) ? void 0 : e.type) !== ex.rbe.GUILD_STAGE_VOICE &&
            e4 &&
            Q.A.simulcastEnabled()
        );
    }
    isVideoDecoderFallbackEnabled() {
        return tB;
    }
    getAecDump() {
        return t4().aecDumpEnabled;
    }
    getMediaEngine() {
        return te;
    }
    getVideoComponent() {
        return te.Video;
    }
    getCameraComponent() {
        return te.Camera;
    }
    getKrispSuppressionLevel() {
        return null != u ? u : 100;
    }
    getKrispEnableStats() {
        return tP;
    }
    isEnabled() {
        return tr;
    }
    isMute() {
        return this.isSelfMute() || td;
    }
    isDeaf() {
        return this.isSelfDeaf() || t_;
    }
    hasContext(e) {
        return null != tt[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eG.x.DEFAULT;
        return e === eG.x.DEFAULT && tf;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eG.x.DEFAULT;
        return (
            !this.isEnabled() ||
            t4(e).mute ||
            !eu.A.didHavePermission(ej.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eG.x.DEFAULT && tp)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tE;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tE = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eG.x.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && eN.A.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return tQ;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eG.x.DEFAULT;
        return !this.isSupported() || t4(e).deaf;
    }
    isVideoEnabled() {
        return th && tA;
    }
    isVideoAvailable() {
        return Object.values(tc).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eG.x.STREAM;
        return ta === e && null != a;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eG.x.STREAM;
        return ta === t && null != a && (null == (e = a.desktopSource) ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eG.x.DEFAULT;
        return e !== eT.default.getId() && (t4(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return te.supports(eG.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eG.x.DEFAULT;
        return null != (t = t4(n).disabledLocalVideos[e]) && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eG.x.DEFAULT;
        return null != (t = t4(n).videoToggleStateMap[e]) ? t : ex.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eG.x.DEFAULT;
        return t === eG.x.DEFAULT && tW.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eG.x.DEFAULT;
        return e === eG.x.DEFAULT && tW.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tU;
    }
    isNativeAudioPermissionReady() {
        return tH;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return ta;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return to;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eG.x.DEFAULT,
            n = t4(t).localPans[e];
        return null != n ? n : eJ;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eG.x.DEFAULT,
            n = t === eG.x.STREAM ? eG.Cn : eG.Hz,
            r = t4(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return t4().inputVolume;
    }
    getOutputVolume() {
        return t4().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eG.x.DEFAULT;
        return t4(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eG.x.DEFAULT;
        return t4(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return tD;
    }
    getActiveVoiceFilterAppliedAt() {
        return tL;
    }
    getPreviousVoiceFilter() {
        return tx;
    }
    getPreviousVoiceFilterAppliedAt() {
        return tM;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return t4().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return t4().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            g().each(tt, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === ex.TBI.PUSH_TO_TALK && tn.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nO(ts, t4().inputDeviceId);
    }
    getOutputDeviceId() {
        return nO(tl, t4().outputDeviceId);
    }
    getVideoDeviceId() {
        return nO(tc, t4().videoDeviceId);
    }
    getInputDevices() {
        return ts;
    }
    getOutputDevices() {
        return tl;
    }
    getVideoDevices() {
        return tc;
    }
    getEchoCancellation() {
        let e = t4();
        return eN.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return te.supports(eG.O5.SIDECHAIN_COMPRESSION) && t4().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return t4().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return t4().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tV && tV;
    }
    getLoopback() {
        return tz.size > 0;
    }
    getLoopbackReasons() {
        return tz;
    }
    getNoiseSuppression() {
        let e = t4();
        return eN.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = t4();
        return eN.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return t4().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return t4().noiseCancellation;
    }
    getHardwareEncoding() {
        return e4;
    }
    getEnableSilenceWarning() {
        return t4().silenceWarning;
    }
    getDebugLogging() {
        return te.getDebugLogging();
    }
    getQoS() {
        return t4().qos;
    }
    getAttenuation() {
        return t4().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return t4().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return t4().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return nu() && t4().automaticAudioSubsystem ? eG.rB.AUTOMATIC : te.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return te.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return t4().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eU.my.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eG.x.DEFAULT;
        return t4(e);
    }
    getState() {
        return {
            settingsByContext: tt,
            inputDevices: ts,
            outputDevices: tl,
            appSupported: tq,
            krispModuleLoaded: tw,
            krispVersion: c,
            krispSuppressionLevel: u,
            goLiveSource: a,
            goLiveContext: ta,
        };
    }
    getInputDetected() {
        return tI;
    }
    getNoInputDetectedNotice() {
        return tT;
    }
    getInputDeviceOSMuted() {
        return s;
    }
    getInputDeviceOSVolume() {
        return l;
    }
    getPacketDelay() {
        return ev.isPlatformEmbedded || this.getMode() !== ex.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        te.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return ti;
    }
    getVideoHook() {
        return t4().videoHook;
    }
    supportsVideoHook() {
        return te.supports(eG.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = t4().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return (
            te.supports(eG.O5.EXPERIMENTAL_SOUNDSHARE) &&
            y().satisfies(null === S.A || void 0 === S.A ? void 0 : S.A.os.release, eM.$x)
        );
    }
    supportsHookSoundshare() {
        return (
            (0, ev.isWindows)() &&
            te.supports(eG.O5.SOUNDSHARE) &&
            y().satisfies(null === S.A || void 0 === S.A ? void 0 : S.A.os.release, eM.ws)
        );
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = t4().useSystemScreensharePicker,
            n = (0, ev.isLinux)();
        return e && (null != t ? t : n);
    }
    supportsSystemScreensharePicker() {
        return te.supports(eG.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return t$;
    }
    getUseGamescopeCapture() {
        return tJ;
    }
    getEverSpeakingWhileMuted() {
        return ty;
    }
    getSpeakingWhileMuted() {
        return tb;
    }
    getKrispModelOverride() {
        return d;
    }
    getKrispModels() {
        return tR;
    }
    getKrispVadActivationThreshold() {
        var e;
        return null != (e = t4().modeOptions.vadKrispActivationThreshold) ? e : eX;
    }
    hasActiveCallKitCall() {
        return tX;
    }
    setHasActiveCallKitCall(e) {
        tX = e;
    }
    supportsScreenSoundshare() {
        return (0, ev.isMac)()
            ? te.supports(eG.O5.SOUNDSHARE) &&
                  y().satisfies(null === S.A || void 0 === S.A ? void 0 : S.A.os.release, eM.P$) &&
                  nc()
            : (0, ev.isWindows)()
              ? te.supports(eG.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, ev.isLinux)() && te.supports(eG.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, ev.isWindows)()) {
            var e, t;
            return null == (t = this.getInputDevices()[this.getInputDeviceId()]) || null == (e = t.effects)
                ? void 0
                : e.find((e) => e === e5);
        }
        if ((0, ev.isMac)() || (0, ev.isIOS)()) return f;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eG.x.DEFAULT,
            t = this.supports(eG.O5.VIDEO)
                ? [
                      {
                          rid: "100",
                          type: e === eG.x.DEFAULT ? eG.mI.VIDEO : eG.mI.SCREEN,
                          quality: eG.Y4,
                      },
                  ]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === eG.x.DEFAULT || this.goLiveSimulcastEnabled()) &&
                t.push({
                    rid: "50",
                    type: e === eG.x.DEFAULT ? eG.mI.VIDEO : eG.mI.SCREEN,
                    quality: eG.Cl,
                }),
            t
        );
    }
    fetchAsyncResources() {
        let e = {
            fetchDave: !1,
        };
        return (
            (0, ev.isWeb)() &&
                (e.fetchDave = en.f1.getCurrentConfig({
                    location: "MediaEngineStore fetchAsyncResources",
                }).loadWasmModule),
            te.fetchAsyncResources(e)
        );
    }
    startDavePreload() {
        if (!tG && ((tG = !0), (0, ev.isWeb)())) {
            let e = {
                fetchDave: !0,
            };
            te.fetchAsyncResources(e).catch((e) => {
                eW.warn("DAVE preload failed:", e), eA.A.captureException(e);
            });
        }
    }
    getSupportedSecureFramesProtocolVersion() {
        if ((0, ev.isWeb)()) {
            let { useWasmModule: e } = en.f1.getCurrentConfig({
                location: "MediaEngineStore getSupportedSecureFramesProtocolVersion",
            });
            if (!e) return 0;
        }
        let e = te.getSupportedSecureFramesProtocolVersion();
        114 === e && (e = 1);
        let t = en.ex.getCurrentConfig({
                location: "MediaEngineStore",
            }),
            n = en.a.getConfig({
                location: "MediaEngineStore",
            });
        return (t.canSupportDaveProtocol || (n.allowOptIn && ep.A.getPersistentCodesEnabled())) &&
            e >= t.protocolVersionFloor
            ? e
            : 0;
    }
    hasClipsSource() {
        return null != o;
    }
    getGpuBrand() {
        return tZ;
    }
}

function r1(e) {
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
eF(r0, "displayName", "MediaEngineStore");
let r2 = (r = new r0(I.h, {
    VOICE_CHANNEL_SELECT: rP,
    VOICE_STATE_UPDATES: nM,
    CONNECTION_OPEN: nR,
    CONNECTION_CLOSED: nD,
    POST_CONNECTION_OPEN: nL,
    RTC_CONNECTION_STATE: nx,
    AUDIO_SET_TEMPORARY_SELF_MUTE: nj,
    AUDIO_TOGGLE_SELF_MUTE: nk,
    AUDIO_SET_SELF_MUTE: nU,
    AUDIO_TOGGLE_SELF_DEAF: nV,
    AUDIO_TOGGLE_LOCAL_MUTE: nF,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: nB,
    AUDIO_SET_LOCAL_VOLUME: nW,
    AUDIO_SET_LOCAL_PAN: nK,
    AUDIO_SET_MODE: nz,
    AUDIO_SET_INPUT_VOLUME: nq,
    AUDIO_SET_OUTPUT_VOLUME: nZ,
    AUDIO_SET_INPUT_DEVICE: nQ,
    AUDIO_SET_OUTPUT_DEVICE: nX,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: n$,
    AUDIO_SET_ECHO_CANCELLATION: n6,
    AUDIO_SET_SIDECHAIN_COMPRESSION: n4,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: n5,
    AUDIO_SET_LOOPBACK: n8,
    AUDIO_SET_NOISE_SUPPRESSION: rn,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: rr,
    AUDIO_SET_NOISE_CANCELLATION: ri,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: ra,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: rs,
    AUDIO_SET_DEBUG_LOGGING: rl,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: rc,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: ro,
    MEDIA_ENGINE_SET_VIDEO_HOOK: ru,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: rd,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: rf,
    AUDIO_SET_ATTENUATION: rp,
    AUDIO_SET_QOS: r_,
    MEDIA_ENGINE_DEVICES: n1,
    AUDIO_VOLUME_CHANGE: n2,
    AUDIO_RESET: rh,
    AUDIO_INPUT_DETECTED: rm,
    AUDIO_SET_SUBSYSTEM: rN,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rC,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rM,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rj,
    MEDIA_ENGINE_PERMISSION: rx,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rG,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nJ,
    MEDIA_ENGINE_INTERACTION_REQUIRED: n0,
    USER_SETTINGS_MODAL_INIT: rV,
    USER_SETTINGS_MODAL_SET_SECTION: rV,
    CERTIFIED_DEVICES_SET: rF,
    RPC_APP_CONNECTED: rD,
    RPC_APP_DISCONNECTED: rL,
    OVERLAY_INITIALIZE: nP,
    APP_STATE_UPDATE: rY,
    SET_CHANNEL_BITRATE: rW,
    SET_VAD_PERMISSION: rg,
    SET_NATIVE_PERMISSION: rE,
    SET_CHANNEL_VIDEO_QUALITY_MODE: rq,
    MEDIA_ENGINE_SET_AEC_DUMP: rB,
    MEDIA_ENGINE_RESET_SETTINGS: rH,
    CHANNEL_DELETE: rK,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rz,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rZ,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rQ,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rX,
    USER_SETTINGS_PROTO_UPDATE: nG,
    CLIPS_INIT: rk,
    CLIPS_SETTINGS_UPDATE: rU,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rJ,
    VOICE_FILTER_REQUEST_SWITCH: rI,
    VOICE_FILTER_LOOPBACK_TOGGLE: rA,
    VOICE_FILTER_APPLIED: rT,
    VOICE_FILTER_DOWNLOAD_FAILED: rS,
    VOICE_FILTER_APPLY_FAILED: rS,
}));
