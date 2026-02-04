let r, i, a, o, s, l, c, u, d, f;
n.d(t, {
    A: () => r5,
}),
    n(896048),
    n(65821),
    n(492834),
    n(228524),
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
    F = n(820344),
    V = n(593595),
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
    eF = n(731854),
    eV = n(985018);

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
        inputVolume: eF.Hz,
        outputVolume: eF.Hz,
        inputDeviceId: eF.dx,
        outputDeviceId: eF.dx,
        videoDeviceId: eF.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: tt.supports(eF.O5.VIDEO_HOOK),
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
    tr = new Set([eF.x.DEFAULT]),
    ti = tt.supports(eF.O5.AUTO_ENABLE),
    ta = !1,
    to = eF.x.STREAM,
    ts = performance.now(),
    tl = null,
    tc = {
        [eF.dx]: nA("No Input Devices"),
    },
    tu = {
        [eF.dx]: nA("No Output Devices"),
    },
    td = {
        [eF.dx]: nA("No Video Devices"),
    },
    tf = new A.Ep(),
    tp = !1,
    t_ = !1,
    th = !1,
    tm = !1,
    tg = !1,
    tE = eF.qe,
    ty = eF.qe,
    tb = !1,
    tO = !1,
    tv = !1,
    tA = new A.Ep(),
    tI = !1,
    tS = !1,
    tT = null,
    tC = !1,
    tN = !1,
    tw = !1,
    tR = !1,
    tP = !1,
    tD = [],
    tL = !1,
    tx = null,
    tM = null,
    tj = null,
    tk = null,
    tU = null,
    tG = !1,
    tF = !1,
    tV = !1,
    tB = null,
    tH = null,
    tY = !1,
    tW = !1;
ed.A.hasPermission(ek.iL.AUDIO, {
    showAuthorizationError: !1,
}),
    ed.A.hasPermission(ek.iL.CAMERA, {
        showAuthorizationError: !1,
    });
let tK = !1,
    tz = new Set(),
    tq = tK,
    tZ = new Set(),
    tQ = {},
    tX = null,
    tJ = null,
    t$ = !0,
    t0 = !1,
    t1 = !1,
    t2 = !1,
    t3 = !1;

function t6(e) {
    return (0, Z.p)({
        location: e,
    }).hdrCaptureMode;
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
    } catch (e) {
        return !1;
    }
}

function t5() {
    return null != tH ? tH : "u" > typeof window ? (tH = t4().then((e) => ((tB = e), e))) : Promise.resolve(!1);
}

function t7() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eF.x.DEFAULT,
        t = tn[e];
    return null == t && ((t = e9()), (tn[e] = t)), t;
}

function t8() {
    var e, t, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eF.x.DEFAULT,
        i = t7(r),
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

function t9(e) {
    var t, n;
    let r = t8(e.context),
        i = r.mode;
    e.context === eF.x.DEFAULT &&
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
            vadUseKrisp: r.modeOptions.vadUseKrisp && rA(),
            vadKrispActivationThreshold: null != (t = r.modeOptions.vadKrispActivationThreshold) ? t : eJ,
            vadLeading: r.modeOptions.vadLeading,
            vadTrailing: r.modeOptions.vadTrailing,
            vadDuringPreProcess: null != (n = r.modeOptions.vadDuringPreProcess) && n,
            pttReleaseDelay: Math.round(r.modeOptions.delay),
        });
}

function ne(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eF.Hz;
    return g().clamp(e, 0, t);
}

function nt(e) {
    let t = t8(e.context),
        n = !ti || t.mute || t.deaf;
    e.context === eF.x.DEFAULT
        ? (n = n || tp || t_ || th || !ed.A.didHavePermission(ek.iL.AUDIO))
        : e.context === eF.x.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eF.x.DEFAULT && C.A.updateNativeMute();
}

function nn(e) {
    e !== to && (null != a && tt.setGoLiveSource(null, to), (to = e));
}

function nr() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tg,
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
        tg || i)
    ) {
        let e = t8().videoDeviceId;
        tg && e === eF.dx && ty === eF.dx && tE !== eF.qe ? (e = tE) : (ty = e),
            (tE = (tg = i) ? nS(td, e) : eF.qe),
            tt.setVideoInputDevice(tE);
    }
    if (((a = o), null != o)) {
        let e = {
            resolution: o.quality.resolution,
            frameRate: o.quality.frameRate,
        };
        if (null != o.desktopSource) {
            let t = t6("MediaEngineStore go live"),
                n = t8().videoHook,
                i = nd(),
                a = i ? (nf() ? ej.zl : ej.eg) : 0,
                s = (0, eA.isWindows)() && (0, ei.b)("updateVideo").enabled,
                l = !1;
            (0, eA.isWindows)() &&
                tJ &&
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
                            allowScreenCaptureKit: np(),
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

function ni(e) {
    switch (e) {
        case eF.CO.CPU_OVERUSE:
            return L.B6.NoiseCancellerCpuOveruse;
        case eF.CO.FAILED:
            return L.B6.NoiseCancellerFailed;
        case eF.CO.VAD_CPU_OVERUSE:
            return L.B6.NoiseCancellerVadCpuOveruse;
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
                    eK.error("Failed to parse codec survey", e), (tl = !1);
                }
            })
            .catch((e) => {
                eK.error("Failed to get codec survey", e), (tl = !1);
            })
            .finally(() => {
                I.h.dispatch({
                    type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED",
                });
            });
}

function no(e) {
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

function ns(e, t) {
    e.setAutomaticGainControl(no(t));
}

function nl(e, t) {
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

function nc(e) {
    let t = t8(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(ew.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(ew.A.hasNoiseSuppression(n) || t.noiseSuppression),
        ns(e, ew.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        nl(e, t.noiseCancellation),
        e.setVoiceFilterId(tx),
        (0, eA.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}

function nu() {
    tf.start(e4, () => {
        eK.error("Device enumeration timed out"), eb.default.track(eM.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
    }),
        tt.on(O.bg.Connection, (e) => {
            t9(e), nt(e), nc(e);
            let t = t8();
            e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
                e.setQoS(t.qos);
            let n = (0, J.K)({
                location: "setupMediaEngine",
            }).treatment;
            (tY = n === J.c.NoSoftwareDecodeWithFallback),
                n === J.c.NoSoftwareDecode || n === J.c.NoSoftwareDecodeWithFallback
                    ? (e.setExperimentFlag(eF.fd.H265_HARDWARE_ONLY, !0),
                      (0, eA.isWindows)()
                          ? t5().then((t) => {
                                e.setExperimentFlag(eF.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                            })
                          : (0, eA.isMac)() && e.setExperimentFlag(eF.fd.H265_HARDWARE_DECODE_AVAILABLE, !0))
                    : n === J.c.Disabled &&
                      (e.setExperimentFlag(eF.fd.H265_HARDWARE_ONLY, !0),
                      e.setExperimentFlag(eF.fd.H265_HARDWARE_DECODE_AVAILABLE, !1)),
                (0, eA.isWindows)() &&
                    (0, X.r)({
                        location: "setupMediaEngine",
                    }).enabled &&
                    e.setExperimentFlag(eF.fd.USE_H264_MF_DECODER, !0);
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
            o && e.setExperimentFlag(eF.fd.MUTE_BEFORE_PROCESSING, !0),
                s && e.setExperimentFlag(eF.fd.PTT_BEFORE_PROCESSING, !0),
                l && e.setExperimentFlag(eF.fd.SKIP_ENCODE, !0),
                (0, ee.J)({
                    location: "setupMediaEngine",
                }).enabled && e.setExperimentFlag(eF.fd.LOW_LATENCY_RATE_CONTROL, !0);
            let c = !1,
                u = !0;
            if (
                (e.setExperimentFlag(eF.fd.RESET_DECODER_ON_ERRORS, !0),
                c && e.setExperimentFlag(eF.fd.SOFTWARE_FALLBACK_ON_ERRORS, !0),
                u && e.setExperimentFlag(eF.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0),
                e.context === eF.x.STREAM)
            ) {
                let t = nC(tu);
                e.setSoundshareDiscardRearChannels(t);
                let { simulcastEnabled: n, lqStreamBitrate: r } = Q.A.getConfig();
                e.configureGoLiveSimulcast(n, r);
            }
            if ((0, eA.isWindows)())
                e.setExperimentFlag(eF.fd.SIGNAL_AV1, !0), e.setExperimentFlag(eF.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            else if ((0, eA.isMac)()) {
                e.setExperimentFlag(eF.fd.SIGNAL_AV1_DECODE, !0);
                let { enabled: t } = (0, F.t)("MediaEngineStore");
                t && e.setExperimentFlag(eF.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            } else if ((0, eA.isLinux)()) e.setExperimentFlag(eF.fd.SIGNAL_AV1_DECODE, !0);
            else if ((0, eA.isIOS)()) {
                let { enabled: t } = (0, G.$)("MediaEngineStore");
                t &&
                    (e.setExperimentFlag(eF.fd.SIGNAL_AV1_DECODE, !0),
                    e.setExperimentFlag(eF.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
            }
            if ((0, eA.isWeb)()) {
                let { enabled: t } = (0, z.O)("MediaEngineStore");
                e.setExperimentFlag(eF.fd.BROWSER_HEVC, t);
            }
            if (
                ((0, eA.isWindows)() &&
                    (null == tX ? void 0 : tX.startsWith("AMD")) &&
                    (0, es.F)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eF.fd.WMF_GPU_ENCODE, !0),
                (0, eA.isWindows)() &&
                    (null == tX ? void 0 : tX.startsWith("Intel")) &&
                    (0, el.J)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eF.fd.WMF_GPU_ENCODE, !0),
                (0, eA.isWindows)() &&
                    (null == tX ? void 0 : tX.startsWith("Qualcomm")) &&
                    (0, es.F)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eF.fd.WMF_GPU_ENCODE, !0),
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
                e.setViewerSideClip(t), e.setClipsKeyFrameInterval(eF.X1);
            }
            for (let n of ((t = t8(e.context)), e.setPostponeDecodeLevel(e3), Object.keys(t.localMutes)))
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
                e.context === eF.x.DEFAULT &&
                    ((tO = !1),
                    (tv = !1),
                    e.on(O.yq.SpeakingWhileMuted, () => {
                        (tO = !0),
                            (tv = !0),
                            r.emitChange(),
                            tA.stop(),
                            tA.start(e6, () => {
                                (tv = !1), r.emitChange();
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
                            underlyingError: ni(e),
                        }),
                        (tG = !0),
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
                            underlyingError: ni(e),
                        }),
                        eb.default.track(eM.HAw.VOICE_PROCESSING, {
                            noise_canceller_error: e,
                        }),
                        I.h.dispatch({
                            type: "AUDIO_SET_MODE",
                            context: eF.x.DEFAULT,
                            mode: eM.TBI.VOICE_ACTIVITY,
                            options: eW(eH({}, t8(eF.x.DEFAULT).modeOptions), {
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
                tt.supports(eF.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                    tt.setAsyncVideoInputDeviceInit((0, H.v)("setupMediaEngine").enabled);
        }),
        tt.on(O.bg.DeviceChange, (e, t, n) => {
            tf.stop(),
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
            (tW = !0),
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
            let t = r4(e);
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
        rr(),
        ra(),
        tt.supports(eF.O5.ASYNC_CLIPS_SOURCE_DEINIT) &&
            tt.setAsyncClipsSourceDeinit((0, Y.V)("setupMediaEngine").enabled),
        ng.reset(),
        (0, eD.w)().then((e) => {
            null != e && ((tX = e.gpu_brand), (tJ = e.has_intel_hybrid_igpu));
        }),
        tt.on(O.bg.SystemMicrophoneModeChange, (e) => {
            (f = e), tt.eachConnection(nc);
        });
}

function nd() {
    return (0, eA.isWindows)() && y().satisfies(null === S.A || void 0 === S.A ? void 0 : S.A.os.release, ej.yg);
}

function nf() {
    return (0, eA.isWindows)() && y().satisfies(null === S.A || void 0 === S.A ? void 0 : S.A.os.release, ej.fG);
}

function np() {
    return (
        (0, eA.isMac)() &&
        tt.supports(eF.O5.SCREEN_CAPTURE_KIT) &&
        y().satisfies(null === S.A || void 0 === S.A ? void 0 : S.A.os.release, ej.e)
    );
}

function n_() {
    return (
        (0, eA.isWindows)() &&
        tt.supports(eF.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        tt.supports(eF.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}

function nh() {
    return tt.supports(eF.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
async function nm() {
    let { windowsMuteAndZeroVolumeDetectionEnabled: e } = (0, ec.F)({
        location: "MediaEngineStore.fetchInputDeviceOSConfig",
    });
    if ((0, eA.isWindows)() && y().satisfies(null === S.A || void 0 === S.A ? void 0 : S.A.os.release, ej.PH) && e)
        try {
            var t;
            let e = nS(tc, t8().inputDeviceId),
                n = null == (t = tc[e]) ? void 0 : t.guid;
            if (null != n && "" !== n) {
                await eS.Ay.ensureModule("discord_voice");
                let [e, t] = await Promise.all([tt.getDeviceOSVolume(n), tt.getDeviceOSMuted(n)]);
                (l = e), (s = t);
            }
        } catch (e) {
            eK.warn("Failed to get device OS volume and/or mute state: ".concat(e));
        }
}
let ng = new (class {
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
        let e = t8();
        !tC && eP.A.getState() === eM.S7L.RTC_CONNECTED && e.mode === eM.TBI.VOICE_ACTIVITY && e.silenceWarning
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
                        e && (tN = !0);
                };
                this.stateChangeTimeout = setTimeout(
                    async () => {
                        (this.stateChangeTimeout = null), e && this.started && (await nm()), this.started && n();
                    },
                    t ? this.voiceTimeout : this.noVoiceTimeout,
                );
            });
    }
})();

function nE() {
    var e;
    let t = v.w.get("audio");
    null != t &&
        (v.w.set(ez, {
            [eF.x.DEFAULT]: t,
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
            tt.supports(eF.O5.SIDECHAIN_COMPRESSION) &&
                e.sidechainCompressionSettingVersion < eX &&
                ((e.sidechainCompressionSettingVersion = eX), (e.sidechainCompression = !0)),
                (0, eA.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== eQ &&
                      ((e.ncUseKrispjsSettingVersion = eQ), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== eZ &&
                      ((e.ncUseKrispSettingVersion = eZ), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
        }),
        nO();
}

function ny(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eF.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = t7(t);
    return Object.assign(r, e), !__OVERLAY__ && n && v.w.set(ez, tn), r;
}

function nb() {
    v.w.remove(ez), location.reload();
}

function nO() {
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

function nv() {
    ti ||
        tt.enable().then(() =>
            I.h.dispatch({
                type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
                enabled: !0,
                unmute: !1,
            }),
        );
}

function nA(e) {
    return {
        id: eF.dx,
        index: 0,
        name: e,
        disabled: !0,
        guid: void 0,
        hardwareId: void 0,
        containerId: void 0,
    };
}

function nI(e, t) {
    if (0 === e.length) {
        let e = nA(t);
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

function nS(e, t) {
    var n, r;
    let i = null != (n = null != (r = e[t]) ? r : e[eF.dx]) ? n : g()(e).values().first();
    return null != i ? i.id : t;
}

function nT(e) {
    let t = tc;
    if (((tc = nI(e, eV.intl.string(eV.t["/QIjDA"]))), !g().isEqual(tc, t))) {
        let e = t8(),
            t = nS(tc, e.inputDeviceId);
        tt.setAudioInputDevice(t), tt.eachConnection(nc);
    }
}

function nC(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}

function nN(e) {
    tt.eachConnection((t) => {
        t.context === eF.x.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}

function nw(e) {
    let t = tu;
    if (((tu = nI(e, eV.intl.string(eV.t.xlUg0v))), !g().isEqual(tu, t))) {
        let e = t8(),
            n = nS(tu, e.outputDeviceId);
        tt.setAudioOutputDevice(n);
        let r = nC(t),
            i = nC(tu);
        r !== i && nN(i);
    }
}

function nR(e) {
    tS = e.length > 0;
    let t = td;
    if (((td = nI(e, eV.intl.string(eV.t.WKWARY))), tg && !g().isEqual(td, t))) {
        var n;
        let e = void 0 !== td[tE],
            r = tE === eF.dx && (null == (n = t[eF.dx]) ? void 0 : n.disabled);
        nr(e || r);
    }
}

function nP() {
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
        let i = e === eU.W.USER ? eF.x.DEFAULT : eF.x.STREAM,
            a = i === eF.x.STREAM ? eF.Cn : eF.Hz,
            o = null != (t = r[e]) ? t : {},
            { localMutes: s, localVolumes: l } = t8(i);
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
        ny(
            {
                localMutes: s,
                localVolumes: l,
            },
            i,
        );
    }
}

function nD(e) {
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

function nL(e, t) {
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

function nx(e) {
    (i = e.sessionId), (tp = !1), (tm = !1);
    let t = t8();
    if (
        (n_() && (nh() ? rL(eF.rB.AUTOMATIC) : t.automaticAudioSubsystem && rx()),
        tt.supports(eF.O5.OFFLOAD_ADM_CONTROLS))
    ) {
        let e = !1;
        (0, eA.isDesktop)()
            ? (e = (0, V.i)({
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
                  context: eF.x.DEFAULT,
                  playSoundEffect: !0,
              }),
              ny({
                  mostRecentlyRequestedVoiceFilter: null,
              }))
            : n(342887).md()),
        nP();
}

function nM(e) {
    let { mediaEngineState: t } = e;
    (tn = t.settingsByContext),
        (tc = t.inputDevices),
        (tu = t.outputDevices),
        (tQ = t.appSupported),
        (tP = t.krispModuleLoaded),
        (c = t.krispVersion),
        (to = t.goLiveContext);
}

function nj() {
    i = null;
}

function nk() {
    if ((0, eA.isWeb)()) {
        let e = en.f1.getCurrentConfig({
            location: "MediaEngineStore handlePostConnectionOpen",
        });
        e.loadWasmModule && e.preload && r.startDavePreload();
    }
    return !1;
}

function nU(e) {
    switch (e.state) {
        case eM.S7L.CONNECTING:
            nv();
            break;
        case eM.S7L.RTC_CONNECTING:
            (tC = !1), (tN = !1), (s = void 0), (l = void 0);
            break;
        case eM.S7L.RTC_CONNECTED:
            nr();
            break;
        case eM.S7L.DISCONNECTED:
            nz(), nq();
    }
    ng.update();
}

function nG(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (tp = t.mute || t.suppress), (tm = t.deaf), tt.eachConnection(nt);
            let e = null != t.guildId && null != t.channelId && null != tU && tU !== t.channelId,
                n = !tw && null == t.channelId;
            return nr(!e && !n && tg), (tU = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== eC.default.getId() || null != eP.A.getChannelId() || nr(!1, null), e;
    }, !1);
}

function nF(e) {
    let { mute: t } = e;
    (t_ = t), tt.eachConnection(nt);
}

function nV(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = t8(t);
    if (t === eF.x.DEFAULT && (ed.A.requestPermission(ek.iL.AUDIO), th)) return !1;
    (r = !i && !r) || (i = !1),
        n || (tb = !0),
        ny(
            {
                mute: r,
                deaf: i,
            },
            t,
        ),
        tt.eachConnection(nt);
}

function nB(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    ny(
        {
            mute: n,
        },
        t,
    ),
        r || (tb = !0),
        tt.eachConnection(nt);
}

function nH(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== eU.oD.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    nP(!0);
}

function nY(e) {
    let { context: t } = e;
    ny(
        {
            deaf: !t8(t).deaf,
        },
        t,
    ),
        tt.eachConnection(nt);
}

function nW(e) {
    let { context: t, userId: n } = e;
    if (n === eC.default.getId()) return;
    let { localMutes: r } = t8(t);
    r[n] ? delete r[n] : (r[n] = !0),
        ny(
            {
                localMutes: r,
            },
            t,
        ),
        tt.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}

function nK(e) {
    var t, n, r, i, a, o, s;
    let { context: l, userId: c, videoToggleState: u, persist: d, isAutomatic: f } = e;
    h()(!(d && f), "These are not allowed to both be true.");
    let p = u === eM.bb8.DISABLED,
        { disabledLocalVideos: _ } = t8(l),
        m = null != (t = _[c]) && t,
        g = tz.has(c),
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
        b = l === eF.x.DEFAULT,
        O = f && y && b,
        v = d && y && b;
    eK.info(
        "changed="
            .concat(y, " isDefaultContext=")
            .concat(b, " isUpdateCausedByVideoHealthManager=")
            .concat(O, " isManualToggleByUser=")
            .concat(v),
    );
    let { videoToggleStateMap: A } = t8(l);
    if (
        (A[c] === eM.bb8.AUTO_PROBING &&
            u === eM.bb8.AUTO_ENABLED &&
            (0, eu.A)(c, p ? eF.Al.AUTO_DISABLE : eF.Al.AUTO_ENABLE, E),
        (A[c] = u),
        ny(
            {
                videoToggleStateMap: A,
            },
            l,
            d,
        ),
        u === eM.bb8.AUTO_PROBING
            ? null == (n = eP.A.getRTCConnection()) || n.pauseStatsCollectionForUser(c, !0)
            : null == (r = eP.A.getRTCConnection()) || r.pauseStatsCollectionForUser(c, !1),
        tq ||
            (eK.info("isAutoDisableAllowed=".concat(tq, " - disabling VideoHealthManager")),
            null == (a = eP.A.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()),
        O)
    ) {
        if ((!p && !g) || (p && !tq)) return;
        (0, eu.A)(c, p ? eF.Al.AUTO_DISABLE : eF.Al.AUTO_ENABLE, E), p ? tz.add(c) : tz.delete(c);
    } else
        v &&
            (g && !p
                ? (eK.info("disallowing auto-disable for this session because of manual override by user"),
                  (tq = !1),
                  null == (s = eP.A.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(),
                  (0, eu.A)(c, eF.Al.MANUAL_REENABLE, E))
                : (0, eu.A)(c, p ? eF.Al.MANUAL_DISABLE : eF.Al.MANUAL_ENABLE, E));
    b && !p && tz.delete(c),
        p ? (_[c] = !0) : delete _[c],
        ny(
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

function nz() {
    if (0 === tz.size) return;
    let e = eF.x.DEFAULT,
        { disabledLocalVideos: t } = t8(e);
    tz.forEach((n) => {
        h()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            tt.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tz.clear(),
        ny(
            {
                disabledLocalVideos: t,
            },
            e,
            !1,
        );
}

function nq() {
    let e = eF.x.DEFAULT,
        { videoToggleStateMap: t } = t8(e);
    for (let [e, n] of Object.entries(t)) n === eM.bb8.AUTO_PROBING && delete t[e];
    ny(
        {
            videoToggleStateMap: t,
        },
        e,
        !1,
    );
}

function nZ(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === eC.default.getId()) return;
    let i = t === eF.x.STREAM ? eF.Cn : eF.Hz,
        { localVolumes: a } = t8(t);
    r === i ? delete a[n] : (a[n] = r),
        ny(
            {
                localVolumes: a,
            },
            t,
        ),
        tt.eachConnection((e) => e.setLocalVolume(n, r), t);
}

function nQ(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: a } = t8(t);
    (a[n] = {
        left: r,
        right: i,
    }),
        ny(
            {
                localPans: a,
            },
            t,
        ),
        tt.eachConnection((e) => e.setLocalPan(n, r, i), t);
}

function nX(e) {
    let { context: t, mode: n, options: r } = e;
    ny(
        {
            mode: n,
            modeOptions: r,
        },
        t,
    ),
        tt.eachConnection(t9),
        ng.update();
}

function nJ(e) {
    let { volume: t } = e;
    ny({
        inputVolume: ne(t),
    }),
        tt.setInputVolume(t);
}

function n$(e) {
    let { volume: t } = e;
    ny({
        outputVolume: t,
    }),
        tt.setOutputVolume(t);
}

function n0(e) {
    let { id: t } = e;
    (t = nS(tc, t)),
        (ts = performance.now()),
        ny({
            inputDeviceId: t,
        }),
        tt.setAudioInputDevice(t),
        tt.eachConnection(nc),
        (s = void 0),
        (l = void 0);
}

function n1(e) {
    let { id: t } = e;
    ny({
        outputDeviceId: (t = nS(tu, t)),
    }),
        tt.setAudioOutputDevice(t);
}

function n2(e) {
    let { id: t } = e;
    ny({
        videoDeviceId: (t = nS(td, t)),
    }),
        nr();
}

function n3(e) {
    let { inputProfile: t } = e;
    ny({
        activeInputProfile: t,
    });
    let n = t8();
    tt.eachConnection((e) => {
        t9(e), nc(e);
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
    nT(t), nw(n), nR(r);
}

function n5(e) {
    let { inputVolume: t, outputVolume: n } = e;
    ny({
        inputVolume: ne(t),
        outputVolume: n,
    });
}

function n7(e) {
    var t;
    let n = t8(),
        i = tt.getAudioSubsystem(),
        a = tt.getAudioLayer(),
        o = nS(tc, n.inputDeviceId),
        s = null == (t = tc[o]) ? void 0 : t.name,
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

function n8(e) {
    let t = ny({
        echoCancellation: e.enabled,
    });
    tt.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), ri(), n7(e.location);
}

function n9(e) {
    rt(e.enabled);
}

function re(e) {
    let t = ny({
        sidechainCompressionStrength: e.strength,
    });
    tt.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}

function rt(e) {
    let t = ny({
        sidechainCompression: e,
    });
    tt.setSidechainCompression(t.sidechainCompression);
}

function rn(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tZ.add(n) : tZ.delete(n), rr(), ri();
}

function rr() {
    let e = !tZ.has("voice_filter_preview") && !tZ.has("mic_test");
    tt.setMaybePreprocessMute(e);
}

function ri() {
    let e = t8(),
        t = tZ.size > 0,
        n = e.inputDeviceId,
        r = ew.A.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        a = ew.A.hasNoiseSuppression(n) || e.noiseSuppression,
        o = no(ew.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation,
        l = null !== tx,
        c = tZ.has("voice_filter") && 1 === tZ.size;
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
async function ra() {
    var e, t, n, r;
    if (!tt.supports(eF.O5.VAAPI)) return;
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
            ((t2 = !0), (t1 = tt.supports(eF.O5.GAMESCOPE_CAPTURE))));
}

function ro(e) {
    let t = ny({
        noiseSuppression: e.enabled,
    });
    tt.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), ri(), n7(e.location);
}

function rs(e) {
    let t = ny({
        automaticGainControl: e.enabled,
    });
    tt.eachConnection((e) => ns(e, t.automaticGainControl)), ri(), n7(e.location);
}

function rl(e) {
    let t = ny({
        noiseCancellation: e.enabled,
    });
    tt.eachConnection((e) => nl(e, t.noiseCancellation)), ri(), n7(e.location);
}

function rc(e) {
    ef.A.setKrispModelOverride(e.model), (d = e.model), ri();
}

function ru(e) {
    var t;
    (0, eA.isWeb)() || ((tL = e.enabled), null == (t = tt.setNoiseCancellationEnableStats) || t.call(tt, e.enabled));
}

function rd(e) {
    ny({
        silenceWarning: e.enabled,
    }),
        ng.update();
}

function rf(e) {
    tt.setDebugLogging(e.enabled);
}

function rp(e) {
    let { level: t } = e;
    (u = t), ef.A.setKrispSuppressionLevel(t);
}

function r_(e) {
    ny({
        videoHook: e.enabled,
    });
}

function rh(e) {
    ny({
        experimentalSoundshare2: e.enabled,
    });
}

function rm(e) {
    let { enabled: t } = e;
    ny({
        useSystemScreensharePicker: t,
    });
}

function rg(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = ny({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r,
        });
    tt.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}

function rE(e) {
    let { enabled: t } = e;
    ny({
        qos: t,
    }),
        tt.eachConnection((e) => e.setQoS(t));
}

function ry() {
    nb();
}

function rb(e) {
    let { inputDetected: t } = e;
    (tT = t), !tC && tT && ((tC = !0), ng.update());
}

function rO(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === th) return !1;
    (th = n), tt.eachConnection(nt);
}

function rv(e) {
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

function rA() {
    return tP || !1;
}
async function rI() {
    try {
        var e, t, n, i;
        await eS.Ay.ensureModule("discord_krisp");
        let a = eS.Ay.requireModule("discord_krisp");
        (tP = !0),
            (c = null == (t = a.getSdkVersion) ? void 0 : t.call(a)),
            (u = null != (e = null == (n = a.getSuppressionLevel) ? void 0 : n.call(a)) ? e : 100),
            null == (i = a.getNcModels) ||
                i.call(a).then((e) => {
                    (tD = e), r.emitChange();
                }),
            r.emitChange();
    } catch (t) {
        eK.warn("Failed to load Krisp module: ".concat(t.message)), eI.A.captureException(t);
        let e = eF.CO.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eF.CO.INITIALIZED : n;
        }
        eb.default.track(eM.HAw.VOICE_PROCESSING, {
            noise_canceller_error: e,
        }),
            ny({
                noiseCancellation: !1,
            });
    } finally {
        tR = !1;
    }
}

function rS() {
    return (0, eA.isWindows)() || (0, eA.isLinux)() || (0, eA.isMac)();
}

function rT() {
    !rS() || __OVERLAY__ || tR || tP
        ? (0, eA.isWeb)() && tt.supports(eF.O5.NOISE_CANCELLATION)
            ? ((tP = !0), r.emitChange())
            : (0, eA.isWeb)() &&
              ny({
                  noiseCancellation: !1,
              })
        : ((tR = !0), rI());
}

function rC(e) {
    let { enabled: t } = e;
    eb.default.track(eM.HAw.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != tx ? tx : null,
        enabled: t,
    }),
        ny({
            voiceFilterPlaybackEnabled: t,
        });
}

function rN(e) {
    let { newVoiceFilterId: t } = e;
    ny({
        mostRecentlyRequestedVoiceFilter: t,
    }),
        tt.eachConnection((e) => e.setVoiceFilterId(t));
}

function rw() {
    ny({
        mostRecentlyRequestedVoiceFilter: null,
    });
}

function rR(e) {
    let { voiceFilterId: t } = e;
    (tj = tx), (tk = tM), (tx = t), (tM = null === t ? null : Date.now());
}

function rP(e) {
    let t = e.bypassEnabled;
    ny({
        bypassSystemInputProcessing: t,
    }),
        tt.setAudioInputBypassSystemProcessing(t),
        n7(e.location);
}

function rD(e) {
    rL(e.subsystem);
}

function rL(e) {
    e === eF.rB.AUTOMATIC
        ? (ny({
              automaticAudioSubsystem: !0,
          }),
          rx())
        : (ny({
              automaticAudioSubsystem: !1,
          }),
          tt.setAudioSubsystem(e));
}

function rx() {
    tt.queueAudioSubsystem(eF.rB.EXPERIMENTAL);
}

function rM(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && nr(i, null), null != t || null == n)) {
        tw = !1;
        return;
    }
    if (tw) return;
    tw = !0;
    let a = t8();
    (a.mute || a.deaf) &&
        (ny({
            deaf: !1,
            mute: !1,
        }),
        tt.eachConnection(nt));
}

function rj(e) {
    let { application: t } = e;
    tr.add(t.id);
}

function rk(e) {
    let { application: t } = e;
    tr.delete(t.id);
}

function rU(e) {
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

function rG(e) {
    (ti = e.enabled),
        e.unmute &&
            ny({
                mute: !1,
                deaf: !1,
            }),
        tt.eachConnection(nt);
}

function rF(e) {
    let { enabled: t } = e;
    ed.A.requestPermission(ek.iL.CAMERA), nr(t);
}

function rV(e) {
    let { sourceId: t, applicationName: n, quality: i } = e;
    if (!(0, R.Ao)() || null == S.A) return !1;
    let a = null,
        s = null,
        l = eO.A.getPidFromDesktopSource(t);
    ({ soundshareId: a, soundshareSession: s } = nD(l));
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
        null != a && nL(a, s),
        (o = c);
    let u = t6("MediaEngineStore clips"),
        d = t8().videoHook;
    tt.setClipsSource({
        desktopDescription: {
            id: o.desktopSource.id,
            soundshareId: o.desktopSource.soundshareId,
            useVideoHook: d,
            useGraphicsCapture: nd(),
            useCaptureDeviceForEncode: !1,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: np(),
            videoHookStaleFrameTimeoutMs: e0,
            graphicsCaptureStaleFrameTimeoutMs: e1,
            hdrCaptureMode: u,
        },
        quality: i,
        applicationName: n,
    });
}

function rB(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((o = null), tt.setClipsSource(null));
}

function rH(e) {
    var t, n, r, i;
    let { settings: a } = e;
    if ((null == a ? void 0 : a.desktopSettings) != null) {
        let e = null,
            r = null,
            { sourceId: i, sound: o } = a.desktopSettings,
            s = null != (t = a.context) ? t : eF.x.DEFAULT,
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
            (({ soundshareId: e, soundshareSession: r } = nD(c)), null != e && nL(e, r)),
            nn(s),
            nr(s === eF.x.STREAM && tg, {
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
        let e = null != (r = a.context) ? r : eF.x.DEFAULT,
            { videoDeviceGuid: t, audioDeviceGuid: n } = a.cameraSettings,
            o = e === eF.x.STREAM && tg,
            s =
                null != (i = a.qualityOptions)
                    ? i
                    : {
                          resolution: 720,
                          frameRate: 30,
                      };
        nr(o, {
            cameraSource: {
                videoDeviceGuid: t,
                audioDeviceGuid: n,
            },
            quality: {
                resolution: s.resolution,
                frameRate: s.frameRate,
            },
        });
    } else nr(tg, null);
}

function rY(e) {
    let { section: t } = e;
    return t === eM.nc_.VOICE && nv(), !1;
}

function rW() {
    return tt.eachConnection(nc), !1;
}

function rK(e) {
    let { enabled: t } = e,
        n = ny({
            aecDumpEnabled: t,
        });
    tt.setAecDump(n.aecDumpEnabled);
}

function rz(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (tn = Object.values(eF.x).reduce((e, n) => {
        let r = n,
            i = e9();
        return (e[r] = g().merge(i, t[r])), e;
    }, {})),
        v.w.set(ez, tn),
        nO();
}

function rq(e) {
    let { state: t } = e,
        n = M.A.isEnabled();
    if (t === eM.g6G.BACKGROUND && tg && !n) (tI = !0), nr(!1);
    else {
        if (t !== eM.g6G.ACTIVE || !tI) return !1;
        (tI = !1), nr(!0);
    }
    return !0;
}

function rZ(e) {
    tt.eachConnection((t) => t.setBitRate(e.bitrate));
}

function rQ() {
    if ((!tg && null == a) || null != eP.A.getRTCConnectionId()) return !1;
    nr(!1, null);
}

function rX() {
    return !!tG && ((tG = !1), !0);
}

function rJ(e) {
    tt.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}

function r$(e) {
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
    t$ = e.enabled;
}

function r3() {
    if ((0, eA.isDesktop)() && eA.isPlatformEmbedded && !t3) {
        t3 = !0;
        let e = async () => {
            let t = await new Promise((e) => {
                eS.Ay.pollQueueMetrics((t) => {
                    e(t);
                });
            });
            t.periodMs = eF.tl;
            let n = r4(t);
            null !== n && eb.default.track(eM.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, eF.tl);
        };
        setTimeout(e, eF.tl);
    }
}
class r6 extends (p = b.Ay.Store) {
    initialize() {
        nu(),
            nE(),
            rT(),
            nq(),
            r3(),
            (0, eA.isWindows)() && eA.isPlatformEmbedded && na(),
            (tQ = {
                [eF.O5.VIDEO]: tt.supports(eF.O5.VIDEO),
                [eF.O5.DESKTOP_CAPTURE]: tt.supports(eF.O5.DESKTOP_CAPTURE),
                [eF.O5.HYBRID_VIDEO]: tt.supports(eF.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eC.default, eN.A, ew.A, eR.A, N.A, x.A, eP.A, j.Ay, e_.A, eg.A, eL.default, ex.A, ey.A);
    }
    supports(e) {
        return tt.supports(e);
    }
    supportsInApp(e) {
        return tQ[e] || tt.supports(e);
    }
    isSupported() {
        return tt.supported();
    }
    isNoiseSuppressionSupported() {
        return tt.supports(eF.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return rA();
    }
    isNoiseCancellationError() {
        return tG;
    }
    isAutomaticGainControlSupported() {
        return tt.supports(eF.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nh() && (tt.supports(eF.O5.LEGACY_AUDIO_SUBSYSTEM) || tt.supports(eF.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return tt.supports(eF.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === tt.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return rA();
    }
    isAecDumpSupported() {
        return tt.supports(eF.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return tt.supports(eF.O5.VIDEO) && tt.supports(eF.O5.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        return (
            (null == (e = eR.A.getChannel(tU)) ? void 0 : e.type) !== eM.rbe.GUILD_STAGE_VOICE &&
            e5 &&
            Q.A.simulcastEnabled()
        );
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
        return null != u ? u : 100;
    }
    getKrispEnableStats() {
        return tL;
    }
    isEnabled() {
        return ti;
    }
    isMute() {
        return this.isSelfMute() || tp;
    }
    isDeaf() {
        return this.isSelfDeaf() || tm;
    }
    hasContext(e) {
        return null != tn[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eF.x.DEFAULT;
        return e === eF.x.DEFAULT && t_;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eF.x.DEFAULT;
        return (
            !this.isEnabled() ||
            t8(e).mute ||
            !ed.A.didHavePermission(ek.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eF.x.DEFAULT && th)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tb;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tb = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eF.x.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && ew.A.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return t$;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eF.x.DEFAULT;
        return !this.isSupported() || t8(e).deaf;
    }
    isVideoEnabled() {
        return tg && tS;
    }
    isVideoAvailable() {
        return Object.values(td).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eF.x.STREAM;
        return to === e && null != a;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eF.x.STREAM;
        return to === t && null != a && (null == (e = a.desktopSource) ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eF.x.DEFAULT;
        return e !== eC.default.getId() && (t8(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return tt.supports(eF.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eF.x.DEFAULT;
        return null != (t = t8(n).disabledLocalVideos[e]) && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eF.x.DEFAULT;
        return null != (t = t8(n).videoToggleStateMap[e]) ? t : eM.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eF.x.DEFAULT;
        return t === eF.x.DEFAULT && tz.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eF.x.DEFAULT;
        return e === eF.x.DEFAULT && tz.size > 0;
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
        return to;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return ts;
    }
    isH264MfDecodeAvailable() {
        return tl;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eF.x.DEFAULT,
            n = t8(t).localPans[e];
        return null != n ? n : e$;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eF.x.DEFAULT,
            n = t === eF.x.STREAM ? eF.Cn : eF.Hz,
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
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eF.x.DEFAULT;
        return t8(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eF.x.DEFAULT;
        return t8(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return tx;
    }
    getActiveVoiceFilterAppliedAt() {
        return tM;
    }
    getPreviousVoiceFilter() {
        return tj;
    }
    getPreviousVoiceFilterAppliedAt() {
        return tk;
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
        return nS(tc, t8().inputDeviceId);
    }
    getOutputDeviceId() {
        return nS(tu, t8().outputDeviceId);
    }
    getVideoDeviceId() {
        return nS(td, t8().videoDeviceId);
    }
    getInputDevices() {
        return tc;
    }
    getOutputDevices() {
        return tu;
    }
    getVideoDevices() {
        return td;
    }
    getEchoCancellation() {
        let e = t8();
        return ew.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return tt.supports(eF.O5.SIDECHAIN_COMPRESSION) && t8().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return t8().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return t8().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tB && tB;
    }
    getLoopback() {
        return tZ.size > 0;
    }
    getLoopbackReasons() {
        return tZ;
    }
    getNoiseSuppression() {
        let e = t8();
        return ew.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = t8();
        return ew.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return t8().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return t8().noiseCancellation;
    }
    getHardwareEncoding() {
        return e5;
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
        return n_() && t8().automaticAudioSubsystem ? eF.rB.AUTOMATIC : tt.getAudioSubsystem();
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
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eF.x.DEFAULT;
        return t8(e);
    }
    getState() {
        return {
            settingsByContext: tn,
            inputDevices: tc,
            outputDevices: tu,
            appSupported: tQ,
            krispModuleLoaded: tP,
            krispVersion: c,
            krispSuppressionLevel: u,
            goLiveSource: a,
            goLiveContext: to,
        };
    }
    getInputDetected() {
        return tT;
    }
    getNoInputDetectedNotice() {
        return tN;
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
        return t8().videoHook;
    }
    supportsVideoHook() {
        return tt.supports(eF.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = t8().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return (
            tt.supports(eF.O5.EXPERIMENTAL_SOUNDSHARE) &&
            y().satisfies(null === S.A || void 0 === S.A ? void 0 : S.A.os.release, ej.$x)
        );
    }
    supportsHookSoundshare() {
        return (
            (0, eA.isWindows)() &&
            tt.supports(eF.O5.SOUNDSHARE) &&
            y().satisfies(null === S.A || void 0 === S.A ? void 0 : S.A.os.release, ej.ws)
        );
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = t8().useSystemScreensharePicker,
            n = (0, eA.isLinux)();
        return e && (null != t ? t : n);
    }
    supportsSystemScreensharePicker() {
        return tt.supports(eF.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return t2;
    }
    getUseGamescopeCapture() {
        return t1;
    }
    getEverSpeakingWhileMuted() {
        return tO;
    }
    getSpeakingWhileMuted() {
        return tv;
    }
    getKrispModelOverride() {
        return d;
    }
    getKrispModels() {
        return tD;
    }
    getKrispVadActivationThreshold() {
        var e;
        return null != (e = t8().modeOptions.vadKrispActivationThreshold) ? e : eJ;
    }
    hasActiveCallKitCall() {
        return t0;
    }
    setHasActiveCallKitCall(e) {
        t0 = e;
    }
    supportsScreenSoundshare() {
        return (0, eA.isMac)()
            ? tt.supports(eF.O5.SOUNDSHARE) &&
                  y().satisfies(null === S.A || void 0 === S.A ? void 0 : S.A.os.release, ej.P$) &&
                  np()
            : (0, eA.isWindows)()
              ? tt.supports(eF.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, eA.isLinux)() && tt.supports(eF.O5.SCREEN_SOUNDSHARE);
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
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eF.x.DEFAULT,
            t = this.supports(eF.O5.VIDEO)
                ? [
                      {
                          rid: "100",
                          type: e === eF.x.DEFAULT ? eF.mI.VIDEO : eF.mI.SCREEN,
                          quality: eF.Y4,
                      },
                  ]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === eF.x.DEFAULT || this.goLiveSimulcastEnabled()) &&
                t.push({
                    rid: "50",
                    type: e === eF.x.DEFAULT ? eF.mI.VIDEO : eF.mI.SCREEN,
                    quality: eF.Cl,
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
        return tX;
    }
}

function r4(e) {
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
eB(r6, "displayName", "MediaEngineStore");
let r5 = (r = new r6(I.h, {
    VOICE_CHANNEL_SELECT: rM,
    VOICE_STATE_UPDATES: nG,
    CONNECTION_OPEN: nx,
    CONNECTION_CLOSED: nj,
    POST_CONNECTION_OPEN: nk,
    RTC_CONNECTION_STATE: nU,
    AUDIO_SET_TEMPORARY_SELF_MUTE: nF,
    AUDIO_TOGGLE_SELF_MUTE: nV,
    AUDIO_SET_SELF_MUTE: nB,
    AUDIO_TOGGLE_SELF_DEAF: nY,
    AUDIO_TOGGLE_LOCAL_MUTE: nW,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: nK,
    AUDIO_SET_LOCAL_VOLUME: nZ,
    AUDIO_SET_LOCAL_PAN: nQ,
    AUDIO_SET_MODE: nX,
    AUDIO_SET_INPUT_VOLUME: nJ,
    AUDIO_SET_OUTPUT_VOLUME: n$,
    AUDIO_SET_INPUT_DEVICE: n0,
    AUDIO_SET_OUTPUT_DEVICE: n1,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: n3,
    AUDIO_SET_ECHO_CANCELLATION: n8,
    AUDIO_SET_SIDECHAIN_COMPRESSION: n9,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: re,
    AUDIO_SET_LOOPBACK: rn,
    AUDIO_SET_NOISE_SUPPRESSION: ro,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: rs,
    AUDIO_SET_NOISE_CANCELLATION: rl,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: rc,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: rd,
    AUDIO_SET_DEBUG_LOGGING: rf,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: rp,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: ru,
    MEDIA_ENGINE_SET_VIDEO_HOOK: r_,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: rh,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: rm,
    AUDIO_SET_ATTENUATION: rg,
    AUDIO_SET_QOS: rE,
    MEDIA_ENGINE_DEVICES: n4,
    AUDIO_VOLUME_CHANGE: n5,
    AUDIO_RESET: ry,
    AUDIO_INPUT_DETECTED: rb,
    AUDIO_SET_SUBSYSTEM: rD,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rP,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rG,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rF,
    MEDIA_ENGINE_PERMISSION: rU,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rH,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: n2,
    MEDIA_ENGINE_INTERACTION_REQUIRED: n6,
    USER_SETTINGS_MODAL_INIT: rY,
    USER_SETTINGS_MODAL_SET_SECTION: rY,
    CERTIFIED_DEVICES_SET: rW,
    RPC_APP_CONNECTED: rj,
    RPC_APP_DISCONNECTED: rk,
    OVERLAY_INITIALIZE: nM,
    APP_STATE_UPDATE: rq,
    SET_CHANNEL_BITRATE: rZ,
    SET_VAD_PERMISSION: rO,
    SET_NATIVE_PERMISSION: rv,
    SET_CHANNEL_VIDEO_QUALITY_MODE: rJ,
    MEDIA_ENGINE_SET_AEC_DUMP: rK,
    MEDIA_ENGINE_RESET_SETTINGS: rz,
    CHANNEL_DELETE: rQ,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rX,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: r$,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: r0,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: r1,
    USER_SETTINGS_PROTO_UPDATE: nH,
    CLIPS_INIT: rV,
    CLIPS_SETTINGS_UPDATE: rB,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: r2,
    VOICE_FILTER_REQUEST_SWITCH: rN,
    VOICE_FILTER_LOOPBACK_TOGGLE: rC,
    VOICE_FILTER_APPLIED: rR,
    VOICE_FILTER_DOWNLOAD_FAILED: rw,
    VOICE_FILTER_APPLY_FAILED: rw,
}));
