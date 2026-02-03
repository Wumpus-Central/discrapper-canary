let r, i, a, o, s, l, c, u, d, f;
n.d(t, {
    A: () => r6,
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
    eo = n(165479),
    es = n(896014),
    el = n(765396),
    ec = n(37770),
    eu = n(75076),
    ed = n(674966),
    ef = n(559633),
    ep = n(3527),
    e_ = n(714763),
    eh = n(879172),
    em = n(555444),
    eg = n(617617),
    eE = n(996744),
    ey = n(28075),
    eb = n(954571),
    eO = n(353835),
    ev = n(927813),
    eA = n(723702),
    eI = n(728458),
    eS = n(837921),
    eT = n(350535),
    eC = n(961350),
    eN = n(131319),
    ew = n(347481),
    eR = n(734057),
    eP = n(383501),
    eD = n(851581),
    eL = n(287809),
    ex = n(117549),
    eM = n(652215),
    ej = n(502075),
    ek = n(765682),
    eU = n(355097),
    eG = n(509381),
    eV = n(731854),
    eF = n(985018);

function eB(e, t, n) {
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

function eH(e) {
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
                eB(e, t, n[t]);
            });
    }
    return e;
}

function eY(e, t) {
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

function eW(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eY(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eK = new P.A("MediaEngineStore"),
    ez = "MediaEngineStore",
    eq = 4,
    eZ = 1,
    eQ = 1,
    eX = 1,
    eJ = 0.5,
    e$ = {
        left: 1,
        right: 1,
    },
    e0 = 500,
    e1 = 5 * ev.A.Millis.SECOND,
    e2 = -60,
    e3 = 100,
    e6 = 2 * ev.A.Millis.SECOND,
    e4 = 30 * ev.A.Millis.SECOND,
    e5 = !0,
    e7 = "deep_noise_suppression",
    e8 = 0;

function e9() {
    return {
        mode: eM.TBI.VOICE_ACTIVITY,
        modeOptions: {
            threshold: e2,
            autoThreshold: eA.isPlatformEmbedded || __OVERLAY__,
            vadUseKrisp: !0,
            vadKrispActivationThreshold: eJ,
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
        [eG.my.STUDIO]: {
            mode: eM.TBI.VOICE_ACTIVITY,
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
    tt = (0, O.hB)((0, O.WI)());
eK.enableNativeLogger(!0);
let tn = {},
    tr = new Set([eV.x.DEFAULT]),
    ti = tt.supports(eV.O5.AUTO_ENABLE),
    ta = !1,
    to = eV.x.STREAM,
    ts = performance.now(),
    tl = {
        [eV.dx]: nO("No Input Devices"),
    },
    tc = {
        [eV.dx]: nO("No Output Devices"),
    },
    tu = {
        [eV.dx]: nO("No Video Devices"),
    },
    td = new A.Ep(),
    tf = !1,
    tp = !1,
    t_ = !1,
    th = !1,
    tm = !1,
    tg = eV.qe,
    tE = eV.qe,
    ty = !1,
    tb = !1,
    tO = !1,
    tv = new A.Ep(),
    tA = !1,
    tI = !1,
    tS = null,
    tT = !1,
    tC = !1,
    tN = !1,
    tw = !1,
    tR = !1,
    tP = [],
    tD = !1,
    tL = null,
    tx = null,
    tM = null,
    tj = null,
    tk = null,
    tU = !1,
    tG = !1,
    tV = !1,
    tF = null,
    tB = null,
    tH = !1,
    tY = !1;
ed.A.hasPermission(ek.iL.AUDIO, {
    showAuthorizationError: !1,
}),
    ed.A.hasPermission(ek.iL.CAMERA, {
        showAuthorizationError: !1,
    });
let tW = !1,
    tK = new Set(),
    tz = tW,
    tq = new Set(),
    tZ = {},
    tQ = null,
    tX = null,
    tJ = !0,
    t$ = !1,
    t0 = !1,
    t1 = !1,
    t2 = !1;

function t3(e) {
    return (0, Z.p)({
        location: e,
    }).hdrCaptureMode;
}
async function t6() {
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

function t4() {
    return null != tB ? tB : "u" > typeof window ? (tB = t6().then((e) => ((tF = e), e))) : Promise.resolve(!1);
}

function t5() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT,
        t = tn[e];
    return null == t && ((t = e9()), (tn[e] = t)), t;
}

function t7() {
    var e, t, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT,
        i = t5(r),
        a = te[null != (e = i.activeInputProfile) ? e : eG.my.CUSTOM],
        o = eH({}, null != (t = i.modeOptions) ? t : {}, null != (n = a.modeOptions) ? n : {});
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
    return eW(eH({}, i, a), {
        modeOptions: o,
    });
}

function t8(e) {
    var t, n;
    let r = t7(e.context),
        i = r.mode;
    e.context === eV.x.DEFAULT &&
        ((0, em.H)({
            location: "setInputMode",
            autoTrackExposure: !1,
        }).enableLatching &&
            i === eM.TBI.PUSH_TO_TALK &&
            r.modeOptions.pttLatchingEnabled &&
            (i = eM.TBI.VOICE_ACTIVITY),
        (0, et.N)(!1, !1, !1)),
        e.setInputMode(i, {
            vadThreshold: r.modeOptions.threshold,
            vadAutoThreshold: r.modeOptions.autoThreshold,
            vadUseKrisp: r.modeOptions.vadUseKrisp && rO(),
            vadKrispActivationThreshold: null != (t = r.modeOptions.vadKrispActivationThreshold) ? t : eJ,
            vadLeading: r.modeOptions.vadLeading,
            vadTrailing: r.modeOptions.vadTrailing,
            vadDuringPreProcess: null != (n = r.modeOptions.vadDuringPreProcess) && n,
            pttReleaseDelay: Math.round(r.modeOptions.delay),
        });
}

function t9(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eV.Hz;
    return g().clamp(e, 0, t);
}

function ne(e) {
    let t = t7(e.context),
        n = !ti || t.mute || t.deaf;
    e.context === eV.x.DEFAULT
        ? (n = n || tf || tp || t_ || !ed.A.didHavePermission(ek.iL.AUDIO))
        : e.context === eV.x.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eV.x.DEFAULT && C.A.updateNativeMute();
}

function nt(e) {
    e !== to && (null != a && tt.setGoLiveSource(null, to), (to = e));
}

function nn() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tm,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        s = a;
    if (
        ((null == s ? void 0 : s.desktopSource) != null &&
            s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? void 0 : e.id) &&
            (null != s.desktopSource.soundshareId && (0, eA.isWindows)() && T.c1(s.desktopSource.soundshareId),
            tt.setGoLiveSource(null, to)),
        (null == s ? void 0 : s.cameraSource) != null &&
            (s.cameraSource.videoDeviceGuid !==
                (null == o || null == (t = o.cameraSource) ? void 0 : t.videoDeviceGuid) ||
                s.cameraSource.audioDeviceGuid !==
                    (null == o || null == (n = o.cameraSource) ? void 0 : n.audioDeviceGuid)) &&
            tt.setGoLiveSource(null, to),
        tm || i)
    ) {
        let e = t7().videoDeviceId;
        tm && e === eV.dx && tE === eV.dx && tg !== eV.qe ? (e = tg) : (tE = e),
            (tg = (tm = i) ? nA(tu, e) : eV.qe),
            tt.setVideoInputDevice(tg);
    }
    if (((a = o), null != o)) {
        let e = {
            resolution: o.quality.resolution,
            frameRate: o.quality.frameRate,
        };
        if (null != o.desktopSource) {
            let t = t3("MediaEngineStore go live"),
                n = t7().videoHook,
                i = nc(),
                a = i ? (nu() ? ej.zl : ej.eg) : 0,
                s = (0, eA.isWindows)() && (0, ei.b)("updateVideo").enabled,
                l = !1;
            (0, eA.isWindows)() &&
                tX &&
                (l = eo.q.getConfig({
                    location: "updateVideo",
                }).enabled),
                tt.setGoLiveSource(
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
                            allowScreenCaptureKit: nd(),
                            videoHookStaleFrameTimeoutMs: e0,
                            graphicsCaptureStaleFrameTimeoutMs: e1,
                            hdrCaptureMode: t,
                            enableGlobalFramePoolLock: (0, q.H)({
                                location: "updateVideo",
                            }).enabled,
                            useGraphicsCaptureDirtyRegions: l,
                        },
                        quality: e,
                    },
                    to,
                );
        }
        null != o.cameraSource &&
            tt.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: o.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                to,
            );
    }
}

function nr(e) {
    switch (e) {
        case eV.CO.CPU_OVERUSE:
            return L.B6.NoiseCancellerCpuOveruse;
        case eV.CO.FAILED:
            return L.B6.NoiseCancellerFailed;
        case eV.CO.VAD_CPU_OVERUSE:
            return L.B6.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}

function ni(e) {
    let t = (0, U.F)({
        location: "getAutomaticGainControlConfig",
        disable: !e,
    }).noiseCancellationConfig;
    return eH(
        {
            enabled: e,
        },
        t,
    );
}

function na(e, t) {
    e.setAutomaticGainControl(ni(t));
}

function no(e, t) {
    let n = (0, ep.A)(t, r.getSystemMicrophoneMode(), {
        location: "setNoiseCancellation",
    });
    n !== t && eK.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
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

function ns(e) {
    let t = t7(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(ew.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(ew.A.hasNoiseSuppression(n) || t.noiseSuppression),
        na(e, ew.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        no(e, t.noiseCancellation),
        e.setVoiceFilterId(tL),
        (0, eA.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}

function nl() {
    td.start(e4, () => {
        eK.error("Device enumeration timed out"), eb.default.track(eM.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
    }),
        tt.on(O.bg.Connection, (e) => {
            t8(e), ne(e), ns(e);
            let t = t7();
            e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
                e.setQoS(t.qos);
            let n = (0, J.K)({
                location: "setupMediaEngine",
            }).treatment;
            (tH = n === J.c.NoSoftwareDecodeWithFallback),
                n === J.c.NoSoftwareDecode || n === J.c.NoSoftwareDecodeWithFallback
                    ? (e.setExperimentFlag(eV.fd.H265_HARDWARE_ONLY, !0),
                      (0, eA.isWindows)()
                          ? t4().then((t) => {
                                e.setExperimentFlag(eV.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                            })
                          : (0, eA.isMac)() && e.setExperimentFlag(eV.fd.H265_HARDWARE_DECODE_AVAILABLE, !0))
                    : n === J.c.Disabled &&
                      (e.setExperimentFlag(eV.fd.H265_HARDWARE_ONLY, !0),
                      e.setExperimentFlag(eV.fd.H265_HARDWARE_DECODE_AVAILABLE, !1)),
                (0, eA.isWindows)() &&
                    (0, X.r)({
                        location: "setupMediaEngine",
                    }).enabled &&
                    e.setExperimentFlag(eV.fd.USE_H264_MF_DECODER, !0);
            let i = eP.A.getGuildId(),
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
            o && e.setExperimentFlag(eV.fd.MUTE_BEFORE_PROCESSING, !0),
                s && e.setExperimentFlag(eV.fd.PTT_BEFORE_PROCESSING, !0),
                l && e.setExperimentFlag(eV.fd.SKIP_ENCODE, !0),
                (0, ee.J)({
                    location: "setupMediaEngine",
                }).enabled && e.setExperimentFlag(eV.fd.LOW_LATENCY_RATE_CONTROL, !0);
            let c = !1,
                u = !0;
            if (
                (e.setExperimentFlag(eV.fd.RESET_DECODER_ON_ERRORS, !0),
                c && e.setExperimentFlag(eV.fd.SOFTWARE_FALLBACK_ON_ERRORS, !0),
                u && e.setExperimentFlag(eV.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0),
                e.context === eV.x.STREAM)
            ) {
                let t = nS(tc);
                e.setSoundshareDiscardRearChannels(t);
                let { simulcastEnabled: n, lqStreamBitrate: r } = Q.A.getConfig();
                e.configureGoLiveSimulcast(n, r);
            }
            if ((0, eA.isWindows)())
                e.setExperimentFlag(eV.fd.SIGNAL_AV1, !0), e.setExperimentFlag(eV.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            else if ((0, eA.isMac)()) {
                e.setExperimentFlag(eV.fd.SIGNAL_AV1_DECODE, !0);
                let { enabled: t } = (0, V.t)("MediaEngineStore");
                t && e.setExperimentFlag(eV.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            } else if ((0, eA.isLinux)()) e.setExperimentFlag(eV.fd.SIGNAL_AV1_DECODE, !0);
            else if ((0, eA.isIOS)()) {
                let { enabled: t } = (0, G.$)("MediaEngineStore");
                t &&
                    (e.setExperimentFlag(eV.fd.SIGNAL_AV1_DECODE, !0),
                    e.setExperimentFlag(eV.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
            }
            if ((0, eA.isWeb)()) {
                let { enabled: t } = (0, z.O)("MediaEngineStore");
                e.setExperimentFlag(eV.fd.BROWSER_HEVC, t);
            }
            if (
                ((0, eA.isWindows)() &&
                    (null == tQ ? void 0 : tQ.startsWith("AMD")) &&
                    (0, es.F)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eV.fd.WMF_GPU_ENCODE, !0),
                (0, eA.isWindows)() &&
                    (null == tQ ? void 0 : tQ.startsWith("Intel")) &&
                    (0, el.J)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eV.fd.WMF_GPU_ENCODE, !0),
                (0, eA.isWindows)() &&
                    (null == tQ ? void 0 : tQ.startsWith("Qualcomm")) &&
                    (0, es.F)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eV.fd.WMF_GPU_ENCODE, !0),
                tt.setHasFullbandPerformance((0, D.A)()),
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
                e.setViewerSideClip(t), e.setClipsKeyFrameInterval(eV.X1);
            }
            for (let n of ((t = t7(e.context)), e.setPostponeDecodeLevel(e3), Object.keys(t.localMutes)))
                n !== eC.default.getId() && e.setLocalMute(n, t.localMutes[n]);
            for (let n of Object.keys(t.localVolumes))
                n !== eC.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
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
                e.context === eV.x.DEFAULT &&
                    ((tb = !1),
                    (tO = !1),
                    e.on(O.yq.SpeakingWhileMuted, () => {
                        (tb = !0),
                            (tO = !0),
                            r.emitChange(),
                            tv.stop(),
                            tv.start(e6, () => {
                                (tO = !1), r.emitChange();
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
                        eb.default.track(
                            eM.HAw.VIDEOHOOK_INITIALIZED,
                            eH(
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
                    eK.warn("noisecancellererror event: ".concat(e)),
                        (0, L.QW)({
                            type: L.iy.NOISE_CANCELLER_ERROR,
                            underlyingError: nr(e),
                        }),
                        (tU = !0),
                        eb.default.track(eM.HAw.VOICE_PROCESSING, {
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
                    eK.warn("voiceactivitydetectorerror event: ".concat(e)),
                        (0, L.QW)({
                            type: L.iy.NOISE_CANCELLER_ERROR,
                            underlyingError: nr(e),
                        }),
                        eb.default.track(eM.HAw.VOICE_PROCESSING, {
                            noise_canceller_error: e,
                        }),
                        I.h.dispatch({
                            type: "AUDIO_SET_MODE",
                            context: eV.x.DEFAULT,
                            mode: eM.TBI.VOICE_ACTIVITY,
                            options: eW(eH({}, t7(eV.x.DEFAULT).modeOptions), {
                                vadUseKrisp: !1,
                            }),
                        }),
                        I.h.dispatch({
                            type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
                            code: e,
                        });
                }),
                e.on(O.yq.SdpError, (e, t, n, r) => {
                    eb.default.track(eM.HAw.SDP_ERROR, {
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
                e.setBitRate(eN.A.bitrate),
                e.applyVideoQualityMode(ex.A.mode),
                tt.supports(eV.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                    tt.setAsyncVideoInputDeviceInit((0, H.v)("setupMediaEngine").enabled);
        }),
        tt.on(O.bg.DeviceChange, (e, t, n) => {
            td.stop(),
                I.h.dispatch({
                    type: "MEDIA_ENGINE_DEVICES",
                    inputDevices: e,
                    outputDevices: t,
                    videoDevices: n,
                });
        }),
        tt.on(O.bg.VolumeChange, (e, t) => {
            I.h.dispatch({
                type: "AUDIO_VOLUME_CHANGE",
                inputVolume: e,
                outputVolume: t,
            });
        }),
        tt.on(O.bg.DesktopSourceEnd, (e, t) => {
            I.h.dispatch({
                type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                settings: null,
                endReason: e,
                errorCode: t,
            });
        }),
        tt.on(O.bg.AudioPermission, (e) => {
            (tY = !0),
                I.h.dispatch({
                    type: "MEDIA_ENGINE_PERMISSION",
                    kind: "audio",
                    granted: e,
                });
        }),
        tt.on(O.bg.VideoPermission, (e) => {
            I.h.dispatch({
                type: "MEDIA_ENGINE_PERMISSION",
                kind: "video",
                granted: e,
            });
        }),
        tt.on(O.bg.WatchdogTimeout, async () => {
            let e;
            try {
                await eO.A.submitLiveCrashReport({
                    message: {
                        message: "Voice Watchdog Timeout",
                    },
                });
            } catch (t) {
                "number" == typeof t.status && (e = t.status);
            }
            eK.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)),
                eb.default.track(eM.HAw.VOICE_WATCHDOG_TIMEOUT, {
                    minidump_submission_error: e,
                });
        }),
        tt.on(O.bg.VideoInputInitialized, (e) => {
            eb.default.track(eM.HAw.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired
                    ? null
                    : Math.round(e.timeToFirstFrame * ev.A.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: eP.A.getMediaSessionId(),
                rtc_connection_id: eP.A.getRTCConnectionId(),
            });
        }),
        tt.on(O.bg.AudioInputInitialized, (e) => {
            eb.default.track(eM.HAw.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * ev.A.Millis.SECOND),
                rtc_connection_id: eP.A.getRTCConnectionId(),
            });
        }),
        tt.on(O.bg.ClipsRecordingRestartNeeded, () => {
            I.h.dispatch({
                type: "CLIPS_RESTART",
            });
        }),
        tt.on(O.bg.ClipsInitFailure, (e, t) => {
            I.h.wait(() => {
                I.h.dispatch({
                    type: "CLIPS_INIT_FAILURE",
                    errMsg: e,
                    applicationName: t,
                });
            });
        }),
        tt.on(O.bg.ClipsRecordingEnded, (e, t) => {
            var n, r;
            (null == o || null == (n = o.desktopSource) ? void 0 : n.id) === e &&
                (null != t && (null == a || null == (r = a.desktopSource) ? void 0 : r.soundshareId) !== t && T.c1(t),
                (o = null));
        }),
        tt.on(O.bg.NativeScreenSharePickerUpdate, (e, t) => {
            I.h.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE",
                existing: e,
                content: t,
            });
        }),
        tt.on(O.bg.NativeScreenSharePickerCancel, (e) => {
            I.h.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL",
                existing: e,
            });
        }),
        tt.on(O.bg.NativeScreenSharePickerError, (e) => {
            I.h.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_ERROR",
                error: e,
            });
        }),
        tt.on(O.bg.AudioDeviceModuleError, (e, t, n) => {
            eb.default.track(eM.HAw.AUDIO_DEVICE_MODULE_ERROR, {
                audio_device_module: e,
                code: t,
                device_name: n,
            });
        }),
        tt.on(O.bg.VideoCodecError, (e) => {
            let t = "encode" === e.mode ? L.iy.VIDEO_ENCODE_ERROR : L.iy.VIDEO_DECODE_ERROR,
                n = {
                    videoCodec: e.codecStandard,
                    errorMessage: e.message,
                };
            (0, L.QW)(
                t === L.iy.VIDEO_ENCODE_ERROR
                    ? eW(
                          eH(
                              {
                                  type: t,
                              },
                              n,
                          ),
                          {
                              videoEncoder: e.implName,
                          },
                      )
                    : eW(
                          eH(
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
        tt.on(O.bg.ConnectionStats, (e) => {
            I.h.dispatch({
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
        tt.on(O.bg.VoiceQueueMetrics, (e) => {
            let t = r3(e);
            null !== t && eb.default.track(eM.HAw.VOICE_QUEUE_METRICS, t);
        }),
        tt.setOnVideoContainerResized((e, t, n) => {
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
        rt(),
        rr(),
        tt.supports(eV.O5.ASYNC_CLIPS_SOURCE_DEINIT) &&
            tt.setAsyncClipsSourceDeinit((0, Y.V)("setupMediaEngine").enabled),
        nh.reset(),
        (0, eD.w)().then((e) => {
            null != e && ((tQ = e.gpu_brand), (tX = e.has_intel_hybrid_igpu));
        }),
        tt.on(O.bg.SystemMicrophoneModeChange, (e) => {
            (f = e), tt.eachConnection(ns);
        });
}

function nc() {
    return (0, eA.isWindows)() && y().satisfies(null === S.A || void 0 === S.A ? void 0 : S.A.os.release, ej.yg);
}

function nu() {
    return (0, eA.isWindows)() && y().satisfies(null === S.A || void 0 === S.A ? void 0 : S.A.os.release, ej.fG);
}

function nd() {
    return (
        (0, eA.isMac)() &&
        tt.supports(eV.O5.SCREEN_CAPTURE_KIT) &&
        y().satisfies(null === S.A || void 0 === S.A ? void 0 : S.A.os.release, ej.e)
    );
}

function nf() {
    return (
        (0, eA.isWindows)() &&
        tt.supports(eV.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        tt.supports(eV.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}

function np() {
    return tt.supports(eV.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
async function n_() {
    let { windowsMuteAndZeroVolumeDetectionEnabled: e } = (0, ec.F)({
        location: "MediaEngineStore.fetchInputDeviceOSConfig",
    });
    if ((0, eA.isWindows)() && y().satisfies(null === S.A || void 0 === S.A ? void 0 : S.A.os.release, ej.PH) && e)
        try {
            var t;
            let e = nA(tl, t7().inputDeviceId),
                n = null == (t = tl[e]) ? void 0 : t.guid;
            if (null != n && "" !== n) {
                await eS.Ay.ensureModule("discord_voice");
                let [e, t] = await Promise.all([tt.getDeviceOSVolume(n), tt.getDeviceOSMuted(n)]);
                (l = e), (s = t);
            }
        } catch (e) {
            eK.warn("Failed to get device OS volume and/or mute state: ".concat(e));
        }
}
let nh = new (class {
    start() {
        this.started || ((this.started = !0), tt.on(O.bg.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout &&
                (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            tt.removeListener(O.bg.Silence, this.handleSilence),
            I.h.dispatch({
                type: "AUDIO_INPUT_DETECTED",
                inputDetected: null,
            }));
    }
    update() {
        let e = t7();
        !tT && eP.A.getState() === eM.S7L.RTC_CONNECTED && e.mode === eM.TBI.VOICE_ACTIVITY && e.silenceWarning
            ? this.start()
            : this.stop();
    }
    reset() {
        this.stop(), this.update();
    }
    constructor() {
        eB(this, "stateChangeTimeout", void 0),
            eB(this, "noVoiceTimeout", 5e3),
            eB(this, "voiceTimeout", 1500),
            eB(this, "started", !1),
            eB(this, "handleSilence", (e) => {
                let t = !e;
                null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout);
                let n = () => {
                    I.h.dispatch({
                        type: "AUDIO_INPUT_DETECTED",
                        inputDetected: t,
                    }),
                        e && (tC = !0);
                };
                this.stateChangeTimeout = setTimeout(
                    async () => {
                        (this.stateChangeTimeout = null), e && this.started && (await n_()), this.started && n();
                    },
                    t ? this.voiceTimeout : this.noVoiceTimeout,
                );
            });
    }
})();

function nm() {
    var e;
    let t = v.w.get("audio");
    null != t &&
        (v.w.set(ez, {
            [eV.x.DEFAULT]: t,
        }),
        v.w.remove("audio")),
        (tn = null != (e = v.w.get(ez)) ? e : {}),
        g().each(tn, (e) => {
            if (
                (g().defaultsDeep(e, e9()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, eT.OH)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== eq &&
                    ((e.vadUseKrispSettingVersion = eq), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                !e.vadThrehsoldMigrated)
            ) {
                var t;
                (e.vadThrehsoldMigrated = !0),
                    (null == (t = e.modeOptions) ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = e2);
            }
            tt.supports(eV.O5.SIDECHAIN_COMPRESSION) &&
                e.sidechainCompressionSettingVersion < eX &&
                ((e.sidechainCompressionSettingVersion = eX), (e.sidechainCompression = !0)),
                (0, eA.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== eQ &&
                      ((e.ncUseKrispjsSettingVersion = eQ), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== eZ &&
                      ((e.ncUseKrispSettingVersion = eZ), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
        }),
        ny();
}

function ng(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eV.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = t5(t);
    return Object.assign(r, e), !__OVERLAY__ && n && v.w.set(ez, tn), r;
}

function nE() {
    v.w.remove(ez), location.reload();
}

function ny() {
    let e = t7();
    tt.setAudioInputDevice(e.inputDeviceId),
        tt.setAudioOutputDevice(e.outputDeviceId),
        nn(),
        tt.setInputVolume(e.inputVolume),
        tt.setOutputVolume(e.outputVolume),
        tt.setAecDump(e.aecDumpEnabled),
        tt.setSidechainCompression(e.sidechainCompression),
        tt.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        tt.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing);
}

function nb() {
    ti ||
        tt.enable().then(() =>
            I.h.dispatch({
                type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
                enabled: !0,
                unmute: !1,
            }),
        );
}

function nO(e) {
    return {
        id: eV.dx,
        index: 0,
        name: e,
        disabled: !0,
        guid: void 0,
        hardwareId: void 0,
        containerId: void 0,
    };
}

function nv(e, t) {
    if (0 === e.length) {
        let e = nO(t);
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

function nA(e, t) {
    var n, r;
    let i = null != (n = null != (r = e[t]) ? r : e[eV.dx]) ? n : g()(e).values().first();
    return null != i ? i.id : t;
}

function nI(e) {
    let t = tl;
    if (((tl = nv(e, eF.intl.string(eF.t["/QIjDA"]))), !g().isEqual(tl, t))) {
        let e = t7(),
            t = nA(tl, e.inputDeviceId);
        tt.setAudioInputDevice(t), tt.eachConnection(ns);
    }
}

function nS(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}

function nT(e) {
    tt.eachConnection((t) => {
        t.context === eV.x.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}

function nC(e) {
    let t = tc;
    if (((tc = nv(e, eF.intl.string(eF.t.xlUg0v))), !g().isEqual(tc, t))) {
        let e = t7(),
            n = nA(tc, e.outputDeviceId);
        tt.setAudioOutputDevice(n);
        let r = nS(t),
            i = nS(tc);
        r !== i && nT(i);
    }
}

function nN(e) {
    tI = e.length > 0;
    let t = tu;
    if (((tu = nv(e, eF.intl.string(eF.t.WKWARY))), tm && !g().isEqual(tu, t))) {
        var n;
        let e = void 0 !== tu[tg],
            r = tg === eV.dx && (null == (n = t[eV.dx]) ? void 0 : n.disabled);
        nn(e || r);
    }
}

function nw() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        r =
            null != (e = eg.A.settings.audioContextSettings)
                ? e
                : {
                      user: {},
                      stream: {},
                  };
    for (let e of Object.keys(r)) {
        let i = e === eU.W.USER ? eV.x.DEFAULT : eV.x.STREAM,
            a = i === eV.x.STREAM ? eV.Cn : eV.Hz,
            o = null != (t = r[e]) ? t : {},
            { localMutes: s, localVolumes: l } = t7(i);
        for (let [e, t] of Object.entries(o))
            null == (0, eh.tM)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== a ? (l[e] = t.volume) : delete l[e],
                tt.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (n)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == o[e] &&
                    (delete s[e],
                    delete l[e],
                    tt.eachConnection((t) => {
                        t.setLocalVolume(e, a), t.setLocalMute(e, !1);
                    }, i));
        ng(
            {
                localMutes: s,
                localVolumes: l,
            },
            i,
        );
    }
}

function nR(e) {
    if (null == r)
        return (
            eK.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
            {
                soundshareId: null,
                soundshareSession: "",
            }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : eO.A.getAudioPid(e),
            n = "";
        return (
            null != t && (n = eO.A.generateSessionFromPid(t)),
            {
                soundshareId: t,
                soundshareSession: n,
            }
        );
    }
}

function nP(e, t) {
    (0, eA.isWindows)() &&
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

function nD(e) {
    (i = e.sessionId), (tf = !1), (th = !1);
    let t = t7();
    if (
        (nf() && (np() ? rP(eV.rB.AUTOMATIC) : t.automaticAudioSubsystem && rD()),
        tt.supports(eV.O5.OFFLOAD_ADM_CONTROLS))
    ) {
        let e = !1;
        (0, eA.isDesktop)()
            ? (e = (0, F.i)({
                  location: "handleConnectionOpen",
              }).enabled)
            : ((0, eA.isIOS)() || (0, eA.isAndroid)()) &&
              (e = (0, B.Y)({
                  location: "handleConnectionOpen",
              }).enabled),
            tt.setOffloadAdmControls(e);
    }
    (0, eE.Lb)({
        location: "MediaEngineStore",
        autoTrackExposure: !1,
    }) &&
        null !== t.mostRecentlyRequestedVoiceFilter &&
        (0, eA.isDesktop)() &&
        (ey.A.getLastInitAttemptMayHaveCrashed()
            ? (I.h.dispatch({
                  type: "AUDIO_SET_SELF_MUTE",
                  mute: !0,
                  context: eV.x.DEFAULT,
                  playSoundEffect: !0,
              }),
              ng({
                  mostRecentlyRequestedVoiceFilter: null,
              }))
            : n(342887).md()),
        nw();
}

function nL(e) {
    let { mediaEngineState: t } = e;
    (tn = t.settingsByContext),
        (tl = t.inputDevices),
        (tc = t.outputDevices),
        (tZ = t.appSupported),
        (tR = t.krispModuleLoaded),
        (c = t.krispVersion),
        (to = t.goLiveContext);
}

function nx() {
    i = null;
}

function nM() {
    if ((0, eA.isWeb)()) {
        let e = en.f1.getCurrentConfig({
            location: "MediaEngineStore handlePostConnectionOpen",
        });
        e.loadWasmModule && e.preload && r.startDavePreload();
    }
    return !1;
}

function nj(e) {
    switch (e.state) {
        case eM.S7L.CONNECTING:
            nb();
            break;
        case eM.S7L.RTC_CONNECTING:
            (tT = !1), (tC = !1), (s = void 0), (l = void 0);
            break;
        case eM.S7L.RTC_CONNECTED:
            nn();
            break;
        case eM.S7L.DISCONNECTED:
            nW(), nK();
    }
    nh.update();
}

function nk(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (tf = t.mute || t.suppress), (th = t.deaf), tt.eachConnection(ne);
            let e = null != t.guildId && null != t.channelId && null != tk && tk !== t.channelId,
                n = !tN && null == t.channelId;
            return nn(!e && !n && tm), (tk = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== eC.default.getId() || null != eP.A.getChannelId() || nn(!1, null), e;
    }, !1);
}

function nU(e) {
    let { mute: t } = e;
    (tp = t), tt.eachConnection(ne);
}

function nG(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = t7(t);
    if (t === eV.x.DEFAULT && (ed.A.requestPermission(ek.iL.AUDIO), t_)) return !1;
    (r = !i && !r) || (i = !1),
        n || (ty = !0),
        ng(
            {
                mute: r,
                deaf: i,
            },
            t,
        ),
        tt.eachConnection(ne);
}

function nV(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    ng(
        {
            mute: n,
        },
        t,
    ),
        r || (ty = !0),
        tt.eachConnection(ne);
}

function nF(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== eU.oD.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    nw(!0);
}

function nB(e) {
    let { context: t } = e;
    ng(
        {
            deaf: !t7(t).deaf,
        },
        t,
    ),
        tt.eachConnection(ne);
}

function nH(e) {
    let { context: t, userId: n } = e;
    if (n === eC.default.getId()) return;
    let { localMutes: r } = t7(t);
    r[n] ? delete r[n] : (r[n] = !0),
        ng(
            {
                localMutes: r,
            },
            t,
        ),
        tt.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}

function nY(e) {
    var t, n, r, i, a, o, s;
    let { context: l, userId: c, videoToggleState: u, persist: d, isAutomatic: f } = e;
    h()(!(d && f), "These are not allowed to both be true.");
    let p = u === eM.bb8.DISABLED,
        { disabledLocalVideos: _ } = t7(l),
        m = null != (t = _[c]) && t,
        g = tK.has(c),
        E = u === eM.bb8.AUTO_ENABLED || u === eM.bb8.MANUAL_ENABLED;
    eK.info(
        "disableVideo="
            .concat(p, " currentlyDisabled=")
            .concat(m, " currentlyAutoDisabled=")
            .concat(g, ", isVideoShown=")
            .concat(E),
    ),
        h()(!(g && !m), "If you are auto-disabled, then you are also disabled.");
    let y = p !== m,
        b = l === eV.x.DEFAULT,
        O = f && y && b,
        v = d && y && b;
    eK.info(
        "changed="
            .concat(y, " isDefaultContext=")
            .concat(b, " isUpdateCausedByVideoHealthManager=")
            .concat(O, " isManualToggleByUser=")
            .concat(v),
    );
    let { videoToggleStateMap: A } = t7(l);
    if (
        (A[c] === eM.bb8.AUTO_PROBING &&
            u === eM.bb8.AUTO_ENABLED &&
            (0, eu.A)(c, p ? eV.Al.AUTO_DISABLE : eV.Al.AUTO_ENABLE, E),
        (A[c] = u),
        ng(
            {
                videoToggleStateMap: A,
            },
            l,
            d,
        ),
        u === eM.bb8.AUTO_PROBING
            ? null == (n = eP.A.getRTCConnection()) || n.pauseStatsCollectionForUser(c, !0)
            : null == (r = eP.A.getRTCConnection()) || r.pauseStatsCollectionForUser(c, !1),
        tz ||
            (eK.info("isAutoDisableAllowed=".concat(tz, " - disabling VideoHealthManager")),
            null == (a = eP.A.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()),
        O)
    ) {
        if ((!p && !g) || (p && !tz)) return;
        (0, eu.A)(c, p ? eV.Al.AUTO_DISABLE : eV.Al.AUTO_ENABLE, E), p ? tK.add(c) : tK.delete(c);
    } else
        v &&
            (g && !p
                ? (eK.info("disallowing auto-disable for this session because of manual override by user"),
                  (tz = !1),
                  null == (s = eP.A.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(),
                  (0, eu.A)(c, eV.Al.MANUAL_REENABLE, E))
                : (0, eu.A)(c, p ? eV.Al.MANUAL_DISABLE : eV.Al.MANUAL_ENABLE, E));
    b && !p && tK.delete(c),
        p ? (_[c] = !0) : delete _[c],
        ng(
            {
                disabledLocalVideos: _,
            },
            l,
            d,
        ),
        tt.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(c, null != (t = _[c]) && t);
        }, l);
}

function nW() {
    if (0 === tK.size) return;
    let e = eV.x.DEFAULT,
        { disabledLocalVideos: t } = t7(e);
    tK.forEach((n) => {
        h()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            tt.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tK.clear(),
        ng(
            {
                disabledLocalVideos: t,
            },
            e,
            !1,
        );
}

function nK() {
    let e = eV.x.DEFAULT,
        { videoToggleStateMap: t } = t7(e);
    for (let [e, n] of Object.entries(t)) n === eM.bb8.AUTO_PROBING && delete t[e];
    ng(
        {
            videoToggleStateMap: t,
        },
        e,
        !1,
    );
}

function nz(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === eC.default.getId()) return;
    let i = t === eV.x.STREAM ? eV.Cn : eV.Hz,
        { localVolumes: a } = t7(t);
    r === i ? delete a[n] : (a[n] = r),
        ng(
            {
                localVolumes: a,
            },
            t,
        ),
        tt.eachConnection((e) => e.setLocalVolume(n, r), t);
}

function nq(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: a } = t7(t);
    (a[n] = {
        left: r,
        right: i,
    }),
        ng(
            {
                localPans: a,
            },
            t,
        ),
        tt.eachConnection((e) => e.setLocalPan(n, r, i), t);
}

function nZ(e) {
    let { context: t, mode: n, options: r } = e;
    ng(
        {
            mode: n,
            modeOptions: r,
        },
        t,
    ),
        tt.eachConnection(t8),
        nh.update();
}

function nQ(e) {
    let { volume: t } = e;
    ng({
        inputVolume: t9(t),
    }),
        tt.setInputVolume(t);
}

function nX(e) {
    let { volume: t } = e;
    ng({
        outputVolume: t,
    }),
        tt.setOutputVolume(t);
}

function nJ(e) {
    let { id: t } = e;
    (t = nA(tl, t)),
        (ts = performance.now()),
        ng({
            inputDeviceId: t,
        }),
        tt.setAudioInputDevice(t),
        tt.eachConnection(ns),
        (s = void 0),
        (l = void 0);
}

function n$(e) {
    let { id: t } = e;
    ng({
        outputDeviceId: (t = nA(tc, t)),
    }),
        tt.setAudioOutputDevice(t);
}

function n0(e) {
    let { id: t } = e;
    ng({
        videoDeviceId: (t = nA(tu, t)),
    }),
        nn();
}

function n1(e) {
    let { inputProfile: t } = e;
    ng({
        activeInputProfile: t,
    });
    let n = t7();
    tt.eachConnection((e) => {
        t8(e), ns(e);
    }),
        tt.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        nh.update(),
        rn();
}

function n2(e) {
    return ta !== e.required && ((ta = e.required), e.required || tt.interact(), !0);
}

function n3(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    nI(t), nC(n), nN(r);
}

function n6(e) {
    let { inputVolume: t, outputVolume: n } = e;
    ng({
        inputVolume: t9(t),
        outputVolume: n,
    });
}

function n4(e) {
    var t;
    let n = t7(),
        i = tt.getAudioSubsystem(),
        a = tt.getAudioLayer(),
        o = nA(tl, n.inputDeviceId),
        s = null == (t = tl[o]) ? void 0 : t.name,
        l = (0, ep.A)(n.noiseCancellation, r.getSystemMicrophoneMode(), {
            location: "trackVoiceProcessing",
        });
    eb.default.track(eM.HAw.VOICE_PROCESSING, {
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

function n5(e) {
    let t = ng({
        echoCancellation: e.enabled,
    });
    tt.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), rn(), n4(e.location);
}

function n7(e) {
    n9(e.enabled);
}

function n8(e) {
    let t = ng({
        sidechainCompressionStrength: e.strength,
    });
    tt.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}

function n9(e) {
    let t = ng({
        sidechainCompression: e,
    });
    tt.setSidechainCompression(t.sidechainCompression);
}

function re(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tq.add(n) : tq.delete(n), rt(), rn();
}

function rt() {
    let e = !tq.has("voice_filter_preview") && !tq.has("mic_test");
    tt.setMaybePreprocessMute(e);
}

function rn() {
    let e = t7(),
        t = tq.size > 0,
        n = e.inputDeviceId,
        r = ew.A.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        a = ew.A.hasNoiseSuppression(n) || e.noiseSuppression,
        o = ni(ew.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation,
        l = null !== tL,
        c = tq.has("voice_filter") && 1 === tq.size;
    tt.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: a,
        automaticGainControlConfig: o,
        noiseCancellation: s,
        voiceFilters: l,
        loopbackUseAudioMode: c,
    });
}
async function rr() {
    var e, t, n, r;
    if (!tt.supports(eV.O5.VAAPI)) return;
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
            ((t1 = !0), (t0 = tt.supports(eV.O5.GAMESCOPE_CAPTURE))));
}

function ri(e) {
    let t = ng({
        noiseSuppression: e.enabled,
    });
    tt.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), rn(), n4(e.location);
}

function ra(e) {
    let t = ng({
        automaticGainControl: e.enabled,
    });
    tt.eachConnection((e) => na(e, t.automaticGainControl)), rn(), n4(e.location);
}

function ro(e) {
    let t = ng({
        noiseCancellation: e.enabled,
    });
    tt.eachConnection((e) => no(e, t.noiseCancellation)), rn(), n4(e.location);
}

function rs(e) {
    ef.A.setKrispModelOverride(e.model), (d = e.model), rn();
}

function rl(e) {
    var t;
    (0, eA.isWeb)() || ((tD = e.enabled), null == (t = tt.setNoiseCancellationEnableStats) || t.call(tt, e.enabled));
}

function rc(e) {
    ng({
        silenceWarning: e.enabled,
    }),
        nh.update();
}

function ru(e) {
    tt.setDebugLogging(e.enabled);
}

function rd(e) {
    let { level: t } = e;
    (u = t), ef.A.setKrispSuppressionLevel(t);
}

function rf(e) {
    ng({
        videoHook: e.enabled,
    });
}

function rp(e) {
    ng({
        experimentalSoundshare2: e.enabled,
    });
}

function r_(e) {
    let { enabled: t } = e;
    ng({
        useSystemScreensharePicker: t,
    });
}

function rh(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = ng({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r,
        });
    tt.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}

function rm(e) {
    let { enabled: t } = e;
    ng({
        qos: t,
    }),
        tt.eachConnection((e) => e.setQoS(t));
}

function rg() {
    nE();
}

function rE(e) {
    let { inputDetected: t } = e;
    (tS = t), !tT && tS && ((tT = !0), nh.update());
}

function ry(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === t_) return !1;
    (t_ = n), tt.eachConnection(ne);
}

function rb(e) {
    let { state: t, permissionType: n } = e,
        r = t === ek.hL.ACCEPTED;
    switch (n) {
        case ek.iL.AUDIO:
            (tY = !0), tt.eachConnection(ne);
            break;
        case ek.iL.CAMERA:
            !r && tm && nn(!1);
            break;
        default:
            return !1;
    }
}

function rO() {
    return tR || !1;
}
async function rv() {
    try {
        var e, t, n, i;
        await eS.Ay.ensureModule("discord_krisp");
        let a = eS.Ay.requireModule("discord_krisp");
        (tR = !0),
            (c = null == (t = a.getSdkVersion) ? void 0 : t.call(a)),
            (u = null != (e = null == (n = a.getSuppressionLevel) ? void 0 : n.call(a)) ? e : 100),
            null == (i = a.getNcModels) ||
                i.call(a).then((e) => {
                    (tP = e), r.emitChange();
                }),
            r.emitChange();
    } catch (t) {
        eK.warn("Failed to load Krisp module: ".concat(t.message)), eI.A.captureException(t);
        let e = eV.CO.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eV.CO.INITIALIZED : n;
        }
        eb.default.track(eM.HAw.VOICE_PROCESSING, {
            noise_canceller_error: e,
        }),
            ng({
                noiseCancellation: !1,
            });
    } finally {
        tw = !1;
    }
}

function rA() {
    return (0, eA.isWindows)() || (0, eA.isLinux)() || (0, eA.isMac)();
}

function rI() {
    !rA() || __OVERLAY__ || tw || tR
        ? (0, eA.isWeb)() && tt.supports(eV.O5.NOISE_CANCELLATION)
            ? ((tR = !0), r.emitChange())
            : (0, eA.isWeb)() &&
              ng({
                  noiseCancellation: !1,
              })
        : ((tw = !0), rv());
}

function rS(e) {
    let { enabled: t } = e;
    eb.default.track(eM.HAw.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != tL ? tL : null,
        enabled: t,
    }),
        ng({
            voiceFilterPlaybackEnabled: t,
        });
}

function rT(e) {
    let { newVoiceFilterId: t } = e;
    ng({
        mostRecentlyRequestedVoiceFilter: t,
    }),
        tt.eachConnection((e) => e.setVoiceFilterId(t));
}

function rC() {
    ng({
        mostRecentlyRequestedVoiceFilter: null,
    });
}

function rN(e) {
    let { voiceFilterId: t } = e;
    (tM = tL), (tj = tx), (tL = t), (tx = null === t ? null : Date.now());
}

function rw(e) {
    let t = e.bypassEnabled;
    ng({
        bypassSystemInputProcessing: t,
    }),
        tt.setAudioInputBypassSystemProcessing(t),
        n4(e.location);
}

function rR(e) {
    rP(e.subsystem);
}

function rP(e) {
    e === eV.rB.AUTOMATIC
        ? (ng({
              automaticAudioSubsystem: !0,
          }),
          rD())
        : (ng({
              automaticAudioSubsystem: !1,
          }),
          tt.setAudioSubsystem(e));
}

function rD() {
    tt.queueAudioSubsystem(eV.rB.EXPERIMENTAL);
}

function rL(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && nn(i, null), null != t || null == n)) {
        tN = !1;
        return;
    }
    if (tN) return;
    tN = !0;
    let a = t7();
    (a.mute || a.deaf) &&
        (ng({
            deaf: !1,
            mute: !1,
        }),
        tt.eachConnection(ne));
}

function rx(e) {
    let { application: t } = e;
    tr.add(t.id);
}

function rM(e) {
    let { application: t } = e;
    tr.delete(t.id);
}

function rj(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (ti = !1), tt.eachConnection(ne);
                break;
            case "video":
                nn(!1);
        }
}

function rk(e) {
    (ti = e.enabled),
        e.unmute &&
            ng({
                mute: !1,
                deaf: !1,
            }),
        tt.eachConnection(ne);
}

function rU(e) {
    let { enabled: t } = e;
    ed.A.requestPermission(ek.iL.CAMERA), nn(t);
}

function rG(e) {
    let { sourceId: t, applicationName: n, quality: i } = e;
    if (!(0, R.Ao)() || null == S.A) return !1;
    let a = null,
        s = null,
        l = eO.A.getPidFromDesktopSource(t);
    ({ soundshareId: a, soundshareSession: s } = nR(l));
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
        (tt.setClipsSource(null),
        (0, eA.isWindows)() && null != o.desktopSource.soundshareId && T.c1(o.desktopSource.soundshareId)),
        null != a && nP(a, s),
        (o = c);
    let u = t3("MediaEngineStore clips"),
        d = t7().videoHook;
    tt.setClipsSource({
        desktopDescription: {
            id: o.desktopSource.id,
            soundshareId: o.desktopSource.soundshareId,
            useVideoHook: d,
            useGraphicsCapture: nc(),
            useCaptureDeviceForEncode: !1,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: nd(),
            videoHookStaleFrameTimeoutMs: e0,
            graphicsCaptureStaleFrameTimeoutMs: e1,
            hdrCaptureMode: u,
        },
        quality: i,
        applicationName: n,
    });
}

function rV(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((o = null), tt.setClipsSource(null));
}

function rF(e) {
    var t, n, r, i;
    let { settings: a } = e;
    if ((null == a ? void 0 : a.desktopSettings) != null) {
        let e = null,
            r = null,
            { sourceId: i, sound: o } = a.desktopSettings,
            s = null != (t = a.context) ? t : eV.x.DEFAULT,
            l =
                null != (n = a.qualityOptions)
                    ? n
                    : {
                          resolution: 720,
                          frameRate: 30,
                      },
            c = !1 === o ? null : eO.A.getPidFromDesktopSource(i);
        eA.isPlatformEmbedded &&
            !0 === o &&
            (({ soundshareId: e, soundshareSession: r } = nR(c)), null != e && nP(e, r)),
            nt(s),
            nn(s === eV.x.STREAM && tm, {
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
        let e = null != (r = a.context) ? r : eV.x.DEFAULT,
            { videoDeviceGuid: t, audioDeviceGuid: n } = a.cameraSettings,
            o = e === eV.x.STREAM && tm,
            s =
                null != (i = a.qualityOptions)
                    ? i
                    : {
                          resolution: 720,
                          frameRate: 30,
                      };
        nn(o, {
            cameraSource: {
                videoDeviceGuid: t,
                audioDeviceGuid: n,
            },
            quality: {
                resolution: s.resolution,
                frameRate: s.frameRate,
            },
        });
    } else nn(tm, null);
}

function rB(e) {
    let { section: t } = e;
    return t === eM.nc_.VOICE && nb(), !1;
}

function rH() {
    return tt.eachConnection(ns), !1;
}

function rY(e) {
    let { enabled: t } = e,
        n = ng({
            aecDumpEnabled: t,
        });
    tt.setAecDump(n.aecDumpEnabled);
}

function rW(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (tn = Object.values(eV.x).reduce((e, n) => {
        let r = n,
            i = e9();
        return (e[r] = g().merge(i, t[r])), e;
    }, {})),
        v.w.set(ez, tn),
        ny();
}

function rK(e) {
    let { state: t } = e,
        n = M.A.isEnabled();
    if (t === eM.g6G.BACKGROUND && tm && !n) (tA = !0), nn(!1);
    else {
        if (t !== eM.g6G.ACTIVE || !tA) return !1;
        (tA = !1), nn(!0);
    }
    return !0;
}

function rz(e) {
    tt.eachConnection((t) => t.setBitRate(e.bitrate));
}

function rq() {
    if ((!tm && null == a) || null != eP.A.getRTCConnectionId()) return !1;
    nn(!1, null);
}

function rZ() {
    return !!tU && ((tU = !1), !0);
}

function rQ(e) {
    tt.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}

function rX(e) {
    let { settings: t } = e;
    tt.applyMediaFilterSettings(t).finally(() => {
        (tG = !1), r.emitChange();
    });
}

function rJ() {
    tG = !0;
}

function r$() {
    tG = !1;
}

function r0(e) {
    tJ = e.enabled;
}

function r1() {
    if ((0, eA.isDesktop)() && eA.isPlatformEmbedded && !t2) {
        t2 = !0;
        let e = async () => {
            let t = await new Promise((e) => {
                eS.Ay.pollQueueMetrics((t) => {
                    e(t);
                });
            });
            t.periodMs = eV.tl;
            let n = r3(t);
            null !== n && eb.default.track(eM.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, eV.tl);
        };
        setTimeout(e, eV.tl);
    }
}
class r2 extends (p = b.Ay.Store) {
    initialize() {
        nl(),
            nm(),
            rI(),
            nK(),
            r1(),
            (tZ = {
                [eV.O5.VIDEO]: tt.supports(eV.O5.VIDEO),
                [eV.O5.DESKTOP_CAPTURE]: tt.supports(eV.O5.DESKTOP_CAPTURE),
                [eV.O5.HYBRID_VIDEO]: tt.supports(eV.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eC.default, eN.A, ew.A, eR.A, N.A, x.A, eP.A, j.Ay, e_.A, eg.A, eL.default, ex.A, ey.A);
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
        return rO();
    }
    isNoiseCancellationError() {
        return tU;
    }
    isAutomaticGainControlSupported() {
        return tt.supports(eV.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !np() && (tt.supports(eV.O5.LEGACY_AUDIO_SUBSYSTEM) || tt.supports(eV.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return tt.supports(eV.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === tt.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return rO();
    }
    isAecDumpSupported() {
        return tt.supports(eV.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return tt.supports(eV.O5.VIDEO) && tt.supports(eV.O5.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        return (
            (null == (e = eR.A.getChannel(tk)) ? void 0 : e.type) !== eM.rbe.GUILD_STAGE_VOICE &&
            e5 &&
            Q.A.simulcastEnabled()
        );
    }
    isVideoDecoderFallbackEnabled() {
        return tH;
    }
    getAecDump() {
        return t7().aecDumpEnabled;
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
        return null != u ? u : 100;
    }
    getKrispEnableStats() {
        return tD;
    }
    isEnabled() {
        return ti;
    }
    isMute() {
        return this.isSelfMute() || tf;
    }
    isDeaf() {
        return this.isSelfDeaf() || th;
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
            t7(e).mute ||
            !ed.A.didHavePermission(ek.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eV.x.DEFAULT && t_)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return ty;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        ty = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && ew.A.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return tJ;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT;
        return !this.isSupported() || t7(e).deaf;
    }
    isVideoEnabled() {
        return tm && tI;
    }
    isVideoAvailable() {
        return Object.values(tu).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.STREAM;
        return to === e && null != a;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.STREAM;
        return to === t && null != a && (null == (e = a.desktopSource) ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eV.x.DEFAULT;
        return e !== eC.default.getId() && (t7(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return tt.supports(eV.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eV.x.DEFAULT;
        return null != (t = t7(n).disabledLocalVideos[e]) && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eV.x.DEFAULT;
        return null != (t = t7(n).videoToggleStateMap[e]) ? t : eM.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eV.x.DEFAULT;
        return t === eV.x.DEFAULT && tK.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT;
        return e === eV.x.DEFAULT && tK.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tG;
    }
    isNativeAudioPermissionReady() {
        return tY;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return to;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return ts;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eV.x.DEFAULT,
            n = t7(t).localPans[e];
        return null != n ? n : e$;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eV.x.DEFAULT,
            n = t === eV.x.STREAM ? eV.Cn : eV.Hz,
            r = t7(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return t7().inputVolume;
    }
    getOutputVolume() {
        return t7().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT;
        return t7(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT;
        return t7(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return tL;
    }
    getActiveVoiceFilterAppliedAt() {
        return tx;
    }
    getPreviousVoiceFilter() {
        return tM;
    }
    getPreviousVoiceFilterAppliedAt() {
        return tj;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return t7().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return t7().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            g().each(tn, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === eM.TBI.PUSH_TO_TALK && tr.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nA(tl, t7().inputDeviceId);
    }
    getOutputDeviceId() {
        return nA(tc, t7().outputDeviceId);
    }
    getVideoDeviceId() {
        return nA(tu, t7().videoDeviceId);
    }
    getInputDevices() {
        return tl;
    }
    getOutputDevices() {
        return tc;
    }
    getVideoDevices() {
        return tu;
    }
    getEchoCancellation() {
        let e = t7();
        return ew.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return tt.supports(eV.O5.SIDECHAIN_COMPRESSION) && t7().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return t7().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return t7().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tF && tF;
    }
    getLoopback() {
        return tq.size > 0;
    }
    getLoopbackReasons() {
        return tq;
    }
    getNoiseSuppression() {
        let e = t7();
        return ew.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = t7();
        return ew.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return t7().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return t7().noiseCancellation;
    }
    getHardwareEncoding() {
        return e5;
    }
    getEnableSilenceWarning() {
        return t7().silenceWarning;
    }
    getDebugLogging() {
        return tt.getDebugLogging();
    }
    getQoS() {
        return t7().qos;
    }
    getAttenuation() {
        return t7().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return t7().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return t7().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return nf() && t7().automaticAudioSubsystem ? eV.rB.AUTOMATIC : tt.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return tt.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return t7().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eG.my.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT;
        return t7(e);
    }
    getState() {
        return {
            settingsByContext: tn,
            inputDevices: tl,
            outputDevices: tc,
            appSupported: tZ,
            krispModuleLoaded: tR,
            krispVersion: c,
            krispSuppressionLevel: u,
            goLiveSource: a,
            goLiveContext: to,
        };
    }
    getInputDetected() {
        return tS;
    }
    getNoInputDetectedNotice() {
        return tC;
    }
    getInputDeviceOSMuted() {
        return s;
    }
    getInputDeviceOSVolume() {
        return l;
    }
    getPacketDelay() {
        return eA.isPlatformEmbedded || this.getMode() !== eM.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        tt.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return ta;
    }
    getVideoHook() {
        return t7().videoHook;
    }
    supportsVideoHook() {
        return tt.supports(eV.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = t7().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return (
            tt.supports(eV.O5.EXPERIMENTAL_SOUNDSHARE) &&
            y().satisfies(null === S.A || void 0 === S.A ? void 0 : S.A.os.release, ej.$x)
        );
    }
    supportsHookSoundshare() {
        return (
            (0, eA.isWindows)() &&
            tt.supports(eV.O5.SOUNDSHARE) &&
            y().satisfies(null === S.A || void 0 === S.A ? void 0 : S.A.os.release, ej.ws)
        );
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = t7().useSystemScreensharePicker,
            n = (0, eA.isLinux)();
        return e && (null != t ? t : n);
    }
    supportsSystemScreensharePicker() {
        return tt.supports(eV.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return t1;
    }
    getUseGamescopeCapture() {
        return t0;
    }
    getEverSpeakingWhileMuted() {
        return tb;
    }
    getSpeakingWhileMuted() {
        return tO;
    }
    getKrispModelOverride() {
        return d;
    }
    getKrispModels() {
        return tP;
    }
    getKrispVadActivationThreshold() {
        var e;
        return null != (e = t7().modeOptions.vadKrispActivationThreshold) ? e : eJ;
    }
    hasActiveCallKitCall() {
        return t$;
    }
    setHasActiveCallKitCall(e) {
        t$ = e;
    }
    supportsScreenSoundshare() {
        return (0, eA.isMac)()
            ? tt.supports(eV.O5.SOUNDSHARE) &&
                  y().satisfies(null === S.A || void 0 === S.A ? void 0 : S.A.os.release, ej.P$) &&
                  nd()
            : (0, eA.isWindows)()
              ? tt.supports(eV.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, eA.isLinux)() && tt.supports(eV.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, eA.isWindows)()) {
            var e, t;
            return null == (t = this.getInputDevices()[this.getInputDeviceId()]) || null == (e = t.effects)
                ? void 0
                : e.find((e) => e === e7);
        }
        if ((0, eA.isMac)() || (0, eA.isIOS)()) return f;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT,
            t = this.supports(eV.O5.VIDEO)
                ? [
                      {
                          rid: "100",
                          type: e === eV.x.DEFAULT ? eV.mI.VIDEO : eV.mI.SCREEN,
                          quality: eV.Y4,
                      },
                  ]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === eV.x.DEFAULT || this.goLiveSimulcastEnabled()) &&
                t.push({
                    rid: "50",
                    type: e === eV.x.DEFAULT ? eV.mI.VIDEO : eV.mI.SCREEN,
                    quality: eV.Cl,
                }),
            t
        );
    }
    fetchAsyncResources() {
        let e = {
            fetchDave: !1,
        };
        return (
            (0, eA.isWeb)() &&
                (e.fetchDave = en.f1.getCurrentConfig({
                    location: "MediaEngineStore fetchAsyncResources",
                }).loadWasmModule),
            tt.fetchAsyncResources(e)
        );
    }
    startDavePreload() {
        if (!tV && ((tV = !0), (0, eA.isWeb)())) {
            let e = {
                fetchDave: !0,
            };
            tt.fetchAsyncResources(e).catch((e) => {
                eK.warn("DAVE preload failed:", e), eI.A.captureException(e);
            });
        }
    }
    getSupportedSecureFramesProtocolVersion() {
        if ((0, eA.isWeb)()) {
            let { useWasmModule: e } = en.f1.getCurrentConfig({
                location: "MediaEngineStore getSupportedSecureFramesProtocolVersion",
            });
            if (!e) return 0;
        }
        let e = tt.getSupportedSecureFramesProtocolVersion();
        114 === e && (e = 1);
        let t = en.ex.getCurrentConfig({
                location: "MediaEngineStore",
            }),
            n = en.a.getConfig({
                location: "MediaEngineStore",
            });
        return (t.canSupportDaveProtocol || (n.allowOptIn && e_.A.getPersistentCodesEnabled())) &&
            e >= t.protocolVersionFloor
            ? e
            : 0;
    }
    hasClipsSource() {
        return null != o;
    }
    getGpuBrand() {
        return tQ;
    }
}

function r3(e) {
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
eB(r2, "displayName", "MediaEngineStore");
let r6 = (r = new r2(I.h, {
    VOICE_CHANNEL_SELECT: rL,
    VOICE_STATE_UPDATES: nk,
    CONNECTION_OPEN: nD,
    CONNECTION_CLOSED: nx,
    POST_CONNECTION_OPEN: nM,
    RTC_CONNECTION_STATE: nj,
    AUDIO_SET_TEMPORARY_SELF_MUTE: nU,
    AUDIO_TOGGLE_SELF_MUTE: nG,
    AUDIO_SET_SELF_MUTE: nV,
    AUDIO_TOGGLE_SELF_DEAF: nB,
    AUDIO_TOGGLE_LOCAL_MUTE: nH,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: nY,
    AUDIO_SET_LOCAL_VOLUME: nz,
    AUDIO_SET_LOCAL_PAN: nq,
    AUDIO_SET_MODE: nZ,
    AUDIO_SET_INPUT_VOLUME: nQ,
    AUDIO_SET_OUTPUT_VOLUME: nX,
    AUDIO_SET_INPUT_DEVICE: nJ,
    AUDIO_SET_OUTPUT_DEVICE: n$,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: n1,
    AUDIO_SET_ECHO_CANCELLATION: n5,
    AUDIO_SET_SIDECHAIN_COMPRESSION: n7,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: n8,
    AUDIO_SET_LOOPBACK: re,
    AUDIO_SET_NOISE_SUPPRESSION: ri,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: ra,
    AUDIO_SET_NOISE_CANCELLATION: ro,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: rs,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: rc,
    AUDIO_SET_DEBUG_LOGGING: ru,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: rd,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: rl,
    MEDIA_ENGINE_SET_VIDEO_HOOK: rf,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: rp,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: r_,
    AUDIO_SET_ATTENUATION: rh,
    AUDIO_SET_QOS: rm,
    MEDIA_ENGINE_DEVICES: n3,
    AUDIO_VOLUME_CHANGE: n6,
    AUDIO_RESET: rg,
    AUDIO_INPUT_DETECTED: rE,
    AUDIO_SET_SUBSYSTEM: rR,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rw,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rk,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rU,
    MEDIA_ENGINE_PERMISSION: rj,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rF,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: n0,
    MEDIA_ENGINE_INTERACTION_REQUIRED: n2,
    USER_SETTINGS_MODAL_INIT: rB,
    USER_SETTINGS_MODAL_SET_SECTION: rB,
    CERTIFIED_DEVICES_SET: rH,
    RPC_APP_CONNECTED: rx,
    RPC_APP_DISCONNECTED: rM,
    OVERLAY_INITIALIZE: nL,
    APP_STATE_UPDATE: rK,
    SET_CHANNEL_BITRATE: rz,
    SET_VAD_PERMISSION: ry,
    SET_NATIVE_PERMISSION: rb,
    SET_CHANNEL_VIDEO_QUALITY_MODE: rQ,
    MEDIA_ENGINE_SET_AEC_DUMP: rY,
    MEDIA_ENGINE_RESET_SETTINGS: rW,
    CHANNEL_DELETE: rq,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rZ,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rX,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rJ,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: r$,
    USER_SETTINGS_PROTO_UPDATE: nF,
    CLIPS_INIT: rG,
    CLIPS_SETTINGS_UPDATE: rV,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: r0,
    VOICE_FILTER_REQUEST_SWITCH: rT,
    VOICE_FILTER_LOOPBACK_TOGGLE: rS,
    VOICE_FILTER_APPLIED: rN,
    VOICE_FILTER_DOWNLOAD_FAILED: rC,
    VOICE_FILTER_APPLY_FAILED: rC,
}));
