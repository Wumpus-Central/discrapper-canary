let r, i, a, o, s, l, c;
n.d(t, { Z: () => rH }), n(388685), n(953529), n(457542), n(539854), n(642613), n(49124), n(337869);
var u,
    d = n(512722),
    f = n.n(d),
    p = n(392711),
    _ = n.n(p),
    m = n(209739),
    h = n.n(m),
    g = n(404097),
    E = n(442837),
    b = n(46973),
    y = n(433517),
    O = n(846519),
    v = n(570140),
    S = n(579806),
    I = n(887278),
    T = n(547727),
    C = n(435064),
    A = n(779618),
    N = n(341569),
    P = n(710845),
    R = n(535911),
    w = n(458725),
    D = n(353926),
    x = n(646047),
    L = n(594190),
    j = n(502286),
    M = n(883794),
    k = n(314080),
    U = n(822253),
    G = n(177732),
    Z = n(960708),
    F = n(502450),
    B = n(294473),
    V = n(706629),
    H = n(159142),
    Y = n(27955),
    W = n(166884),
    K = n(126382),
    z = n(422797),
    q = n(805877),
    Q = n(837968),
    X = n(529558),
    J = n(705946),
    $ = n(412412),
    ee = n(441167),
    et = n(787602),
    en = n(338336),
    er = n(751571),
    ei = n(311473),
    ea = n(615830),
    eo = n(725380),
    es = n(383451),
    el = n(581883),
    ec = n(875527),
    eu = n(420439),
    ed = n(626135),
    ef = n(12647),
    ep = n(70956),
    e_ = n(358085),
    em = n(747268),
    eh = n(960048),
    eg = n(998502),
    eE = n(13140),
    eb = n(314897),
    ey = n(967368),
    eO = n(463395),
    ev = n(592125),
    eS = n(19780),
    eI = n(704806),
    eT = n(594174),
    eC = n(631768),
    eA = n(981631),
    eN = n(70722),
    eP = n(761274),
    eR = n(526761),
    ew = n(345655),
    eD = n(65154),
    ex = n(388032);
function eL(e, t, n) {
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
function ej(e) {
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
                eL(e, t, n[t]);
            });
    }
    return e;
}
function eM(e, t) {
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
function ek(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eM(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eU = new P.Z("MediaEngineStore"),
    eG = "MediaEngineStore",
    eZ = 4,
    eF = 1,
    eB = 1,
    eV = 1,
    eH = 0.5,
    eY = {
        left: 1,
        right: 1,
    },
    eW = 500,
    eK = 5 * ep.Z.Millis.SECOND,
    ez = -60,
    eq = 100,
    eQ = 2 * ep.Z.Millis.SECOND,
    eX = !0,
    eJ = 0;
function e$() {
    return {
        mode: eA.pM4.VOICE_ACTIVITY,
        modeOptions: {
            threshold: ez,
            autoThreshold: e_.isPlatformEmbedded || __OVERLAY__,
            vadUseKrisp: !0,
            vadKrispActivationThreshold: eH,
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
        inputVolume: eD.Qx,
        outputVolume: eD.Qx,
        inputDeviceId: eD.w5,
        outputDeviceId: eD.w5,
        videoDeviceId: eD.w5,
        qos: !1,
        qosMigrated: !1,
        videoHook: e1.supports(eD.AN.VIDEO_HOOK),
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
let e0 = {
        [ew._.CUSTOM]: {},
        [ew._.VOICE_ISOLATION]: {
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
        [ew._.STUDIO]: {
            mode: eA.pM4.VOICE_ACTIVITY,
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
    e1 = (0, b.Mt)((0, b.jj)());
eU.enableNativeLogger(!0);
let e3 = {},
    e2 = new Set([eD.Yn.DEFAULT]),
    e4 = e1.supports(eD.AN.AUTO_ENABLE),
    e5 = !1,
    e8 = eD.Yn.STREAM,
    e6 = performance.now(),
    e7 = { [eD.w5]: ns("No Input Devices") },
    e9 = { [eD.w5]: ns("No Output Devices") },
    te = { [eD.w5]: ns("No Video Devices") },
    tt = !1,
    tn = !1,
    tr = !1,
    ti = !1,
    ta = !1,
    to = eD.Av,
    ts = eD.Av,
    tl = !1,
    tc = !1,
    tu = !1,
    td = new O.V7(),
    tf = !1,
    tp = !1,
    t_ = null,
    tm = !1,
    th = !1,
    tg = !1,
    tE = !1,
    tb = !1,
    ty = [],
    tO = !1,
    tv = null,
    tS = null,
    tI = null,
    tT = null,
    tC = null,
    tA = !1,
    tN = !1,
    tP = !1,
    tR = null,
    tw = null,
    tD = !1;
er.Z.hasPermission(eP.Eu.AUDIO, { showAuthorizationError: !1 }),
    er.Z.hasPermission(eP.Eu.CAMERA, { showAuthorizationError: !1 });
let tx = !1,
    tL = new Set(),
    tj = tx,
    tM = new Set(),
    tk = {},
    tU = null,
    tG = !0,
    tZ = !1,
    tF = !1,
    tB = !1,
    tV = !1;
function tH() {
    var e, t;
    return null != (t = null == (e = eT.default.getCurrentUser()) ? void 0 : e.isStaff()) && t
        ? "always"
        : em.Z === g.R.CANARY
          ? "permittedDevicesOnly"
          : "never";
}
async function tY() {
    if (
        "undefined" == typeof window ||
        "undefined" == typeof navigator ||
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
                bitrate: 2000000,
                framerate: 30,
            },
        });
        return e.supported && e.powerEfficient;
    } catch (e) {
        return !1;
    }
}
function tW() {
    return null != tw
        ? tw
        : "undefined" != typeof window
          ? (tw = tY().then((e) => ((tR = e), e)))
          : Promise.resolve(!1);
}
function tK() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eD.Yn.DEFAULT,
        t = e3[e];
    return null == t && ((t = e$()), (e3[e] = t)), t;
}
function tz() {
    var e, t, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eD.Yn.DEFAULT,
        i = tK(r),
        a = e0[null != (e = i.activeInputProfile) ? e : ew._.CUSTOM],
        o = ej({}, null != (t = i.modeOptions) ? t : {}, null != (n = a.modeOptions) ? n : {});
    if (
        (null == o.vadDuringPreProcess && (o.vadDuringPreProcess = (0, J.C)({ location: "getSettings" }).enabled),
        (null == o.vadKrispActivationThreshold && !0 === a.automaticGainControl) || !0 === i.automaticGainControl)
    ) {
        let e = (0, M.U)({ location: "getSettings" });
        null != e.vadKrispActivationThreshold && (o.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return ek(ej({}, i, a), { modeOptions: o });
}
function tq(e) {
    var t, n;
    let r = tz(e.context),
        i = r.mode;
    e.context === eD.Yn.DEFAULT &&
        ((0, es.f)({
            location: "setInputMode",
            autoTrackExposure: !1,
        }).enableLatching &&
            i === eA.pM4.PUSH_TO_TALK &&
            r.modeOptions.pttLatchingEnabled &&
            (i = eA.pM4.VOICE_ACTIVITY),
        (0, Q.I)(!1, !1, !1)),
        e.setInputMode(i, {
            vadThreshold: r.modeOptions.threshold,
            vadAutoThreshold: r.modeOptions.autoThreshold,
            vadUseKrisp: r.modeOptions.vadUseKrisp && rs(),
            vadKrispActivationThreshold: null != (t = r.modeOptions.vadKrispActivationThreshold) ? t : eH,
            vadLeading: r.modeOptions.vadLeading,
            vadTrailing: r.modeOptions.vadTrailing,
            vadDuringPreProcess: null != (n = r.modeOptions.vadDuringPreProcess) && n,
            pttReleaseDelay: Math.round(r.modeOptions.delay),
        });
}
function tQ(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eD.Qx;
    return _().clamp(e, 0, t);
}
function tX(e) {
    let t = tz(e.context),
        n = !e4 || t.mute || t.deaf;
    e.context === eD.Yn.DEFAULT
        ? (n = n || tt || tn || tr || !er.Z.didHavePermission(eP.Eu.AUDIO))
        : e.context === eD.Yn.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eD.Yn.DEFAULT && T.Z.updateNativeMute();
}
function tJ(e) {
    e !== e8 && (null != a && e1.setGoLiveSource(null, e8), (e8 = e));
}
function t$() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ta,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        s = a;
    if (
        ((null == s ? void 0 : s.desktopSource) != null &&
            s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? void 0 : e.id) &&
            (null != s.desktopSource.soundshareId && (0, e_.isWindows)() && I.pn(s.desktopSource.soundshareId),
            e1.setGoLiveSource(null, e8)),
        (null == s ? void 0 : s.cameraSource) != null &&
            (s.cameraSource.videoDeviceGuid !==
                (null == o || null == (t = o.cameraSource) ? void 0 : t.videoDeviceGuid) ||
                s.cameraSource.audioDeviceGuid !==
                    (null == o || null == (n = o.cameraSource) ? void 0 : n.audioDeviceGuid)) &&
            e1.setGoLiveSource(null, e8),
        ta || i)
    ) {
        let e = tz().videoDeviceId;
        ta && e === eD.w5 && ts === eD.w5 && to !== eD.Av ? (e = to) : (ts = e),
            (to = (ta = i) ? nc(te, e) : eD.Av),
            e1.setVideoInputDevice(to);
    }
    if (((a = o), null != o)) {
        let e = {
            resolution: o.quality.resolution,
            frameRate: o.quality.frameRate,
        };
        if (null != o.desktopSource) {
            let t = tH(),
                n = tz().videoHook,
                i = t8(),
                a = i ? (t6() ? eN.zj : eN.ZM) : 0,
                s = (0, e_.isWindows)() && (0, $.t)("updateVideo").enabled;
            e1.setGoLiveSource(
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
                        allowScreenCaptureKit: t7(),
                        videoHookStaleFrameTimeoutMs: eW,
                        graphicsCaptureStaleFrameTimeoutMs: eK,
                        hdrCaptureMode: t,
                        enableGlobalFramePoolLock: (0, Y.T)({ location: "updateVideo" }).enabled,
                    },
                    quality: e,
                },
                e8,
            );
        }
        null != o.cameraSource &&
            e1.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: o.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                e8,
            );
    }
}
function t0(e) {
    switch (e) {
        case eD.H3.CPU_OVERUSE:
            return w.Nk.NoiseCancellerCpuOveruse;
        case eD.H3.FAILED:
            return w.Nk.NoiseCancellerFailed;
        case eD.H3.VAD_CPU_OVERUSE:
            return w.Nk.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function t1(e) {
    let t = (0, M.U)({
        location: "getAutomaticGainControlConfig",
        disable: !e,
    }).noiseCancellationConfig;
    return ej({ enabled: e }, t);
}
function t3(e, t) {
    e.setAutomaticGainControl(t1(t));
}
async function t2(e, t) {
    if ((0, e_.isIOS)() || (0, e_.isMac)()) {
        let e = await e1.getSystemMicrophoneMode();
        "" !== e &&
            "standard" !== e &&
            k.Z.getConfig({ location: "setNoiseCancellation" }).disabledModes.includes(e) &&
            (t = !1);
    }
    e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: n } = (0, M.U)({
        location: "setNoiseCancellation",
        disable: !t,
    });
    e.setNoiseCancellationDuringProcessing(n);
    let { noiseCancellationAfterProcessing: r, vadAfterWebrtc: i } = (0, z.$)({ location: "setNoiseCancellation" });
    e.setNoiseCancellationAfterProcessing(r), e.setVADAfterWebrtc(i);
}
function t4(e) {
    let t = tz(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eO.Z.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eO.Z.hasNoiseSuppression(n) || t.noiseSuppression),
        t3(e, eO.Z.hasAutomaticGainControl(n) || t.automaticGainControl),
        t2(e, t.noiseCancellation),
        e.setVoiceFilterId(tv),
        (0, e_.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function t5() {
    e1.on(b.aB.Connection, (e) => {
        tq(e), tX(e), t4(e);
        let t = tz();
        e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers), e.setQoS(t.qos);
        let n = (0, K.D)({ location: "setupMediaEngine" }).treatment;
        n === K.$.NoSoftwareDecode
            ? (e.setExperimentFlag(eD.V8.H265_HARDWARE_ONLY, !0),
              (0, e_.isWindows)()
                  ? tW().then((t) => {
                        e.setExperimentFlag(eD.V8.H265_HARDWARE_DECODE_AVAILABLE, t);
                    })
                  : (0, e_.isMac)() && e.setExperimentFlag(eD.V8.H265_HARDWARE_DECODE_AVAILABLE, !0))
            : n === K.$.Disabled &&
              (e.setExperimentFlag(eD.V8.H265_HARDWARE_ONLY, !0),
              e.setExperimentFlag(eD.V8.H265_HARDWARE_DECODE_AVAILABLE, !1));
        let i = eS.Z.getGuildId(),
            {
                muteBeforeProcessing: o,
                pttBeforeProcessing: s,
                skipEncode: l,
            } = (null != i ? V.Z : B.Z).getCurrentConfig(
                {
                    location: "setupMediaEngine",
                    guildId: null != i ? i : void 0,
                },
                { autoTrackExposure: !0 },
            );
        o && e.setExperimentFlag(eD.V8.MUTE_BEFORE_PROCESSING, !0),
            s && e.setExperimentFlag(eD.V8.PTT_BEFORE_PROCESSING, !0),
            l && e.setExperimentFlag(eD.V8.SKIP_ENCODE, !0),
            (0, q.J)({ location: "setupMediaEngine" }).enabled &&
                e.setExperimentFlag(eD.V8.LOW_LATENCY_RATE_CONTROL, !0);
        let c = !1,
            u = !0;
        if (
            (e.setExperimentFlag(eD.V8.RESET_DECODER_ON_ERRORS, !0),
            c && e.setExperimentFlag(eD.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0),
            u && e.setExperimentFlag(eD.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0),
            e.context === eD.Yn.STREAM)
        ) {
            let t = nd(e9);
            e.setSoundshareDiscardRearChannels(t);
            let { simulcastEnabled: n, lqStreamBitrate: r } = W.Z.getConfig();
            e.configureGoLiveSimulcast(n, r);
        }
        if (
            ((0, e_.isWindows)()
                ? (null == tU ? void 0 : tU.startsWith("NVIDIA")) || (null == tU ? void 0 : tU.startsWith("AMD"))
                    ? e.setExperimentFlag(eD.V8.SIGNAL_AV1, !0)
                    : e.setExperimentFlag(eD.V8.SIGNAL_AV1_DECODE, !0)
                : ((0, e_.isMac)() || (0, e_.isLinux)()) && e.setExperimentFlag(eD.V8.SIGNAL_AV1_DECODE, !0),
            (0, e_.isWindows)() && e.setExperimentFlag(eD.V8.SIGNAL_AV1_HARDWARE_DECODE, !0),
            (0, e_.isWeb)())
        ) {
            let { enabled: t } = (0, H.A)("MediaEngineStore");
            e.setExperimentFlag(eD.V8.BROWSER_HEVC, t);
        }
        if (
            ((0, e_.isWindows)() &&
                (0, et.C)("MediaEngineStore").enabled &&
                e.setExperimentFlag(eD.V8.WMF_GPU_ENCODE, !0),
            e1.setHasFullbandPerformance((0, R.Z)()),
            e.setRemoteAudioHistory(1000),
            (0, A.Z)(r))
        ) {
            let { enableViewerClipping: t } = ee.Z.getCurrentConfig(
                { location: "f627ab_15" },
                { autoTrackExposure: !1 },
            );
            e.setViewerSideClip(t), e.setClipsKeyFrameInterval(eD.ux);
        }
        for (let n of ((t = tz(e.context)), e.setPostponeDecodeLevel(eq), Object.keys(t.localMutes)))
            n !== eb.default.getId() && e.setLocalMute(n, t.localMutes[n]);
        for (let n of Object.keys(t.localVolumes)) n !== eb.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
        for (let n of Object.keys(t.localPans)) {
            let r = t.localPans[n];
            e.setLocalPan(n, r.left, r.right);
        }
        for (let n of Object.keys(t.disabledLocalVideos)) e.setLocalVideoDisabled(n, t.disabledLocalVideos[n]);
        e.on(b.Sh.Speaking, (t, n, r, i) => {
            v.Z.dispatch({
                type: "SPEAKING",
                context: e.context,
                userId: t,
                speakingFlags: n,
                voiceDb: i,
            });
        }),
            e.context === eD.Yn.DEFAULT &&
                ((tc = !1),
                (tu = !1),
                e.on(b.Sh.SpeakingWhileMuted, () => {
                    (tc = !0),
                        (tu = !0),
                        r.emitChange(),
                        td.stop(),
                        td.start(eQ, () => {
                            (tu = !1), r.emitChange();
                        });
                })),
            e.on(b.Sh.DesktopSourceEnd, (t, n) => {
                v.Z.dispatch({
                    type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                    settings: { context: e.context },
                    endReason: t,
                    errorCode: n,
                });
            }),
            e.on(b.Sh.InteractionRequired, (e) => {
                v.Z.dispatch({
                    type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
                    required: e,
                });
            }),
            e.on(b.Sh.VideoHookInitialize, (e, t, n, r, i, o) => {
                (null == a ? void 0 : a.desktopSource) != null &&
                    ed.default.track(
                        eA.rMx.VIDEOHOOK_INITIALIZED,
                        ej(
                            {
                                backend: e,
                                format: t,
                                framebuffer_format: n,
                                sample_count: r,
                                success: i,
                                reinitialization: o,
                            },
                            (0, j.Z)(null == a ? void 0 : a.desktopSource),
                        ),
                    );
            }),
            e.on(b.Sh.NoiseCancellationError, (e) => {
                eU.warn("noisecancellererror event: ".concat(e)),
                    (0, w.kr)({
                        type: w.u.NOISE_CANCELLER_ERROR,
                        underlyingError: t0(e),
                    }),
                    (tA = !0),
                    ed.default.track(eA.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    v.Z.dispatch({
                        type: "AUDIO_SET_NOISE_SUPPRESSION",
                        enabled: !0,
                    }),
                    v.Z.dispatch({
                        type: "AUDIO_SET_NOISE_CANCELLATION",
                        enabled: !1,
                    }),
                    v.Z.dispatch({
                        type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR",
                        code: e,
                    });
            }),
            e.on(b.Sh.VoiceActivityDetectorError, (e) => {
                eU.warn("voiceactivitydetectorerror event: ".concat(e)),
                    (0, w.kr)({
                        type: w.u.NOISE_CANCELLER_ERROR,
                        underlyingError: t0(e),
                    }),
                    ed.default.track(eA.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    v.Z.dispatch({
                        type: "AUDIO_SET_MODE",
                        context: eD.Yn.DEFAULT,
                        mode: eA.pM4.VOICE_ACTIVITY,
                        options: ek(ej({}, tz(eD.Yn.DEFAULT).modeOptions), { vadUseKrisp: !1 }),
                    }),
                    v.Z.dispatch({
                        type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
                        code: e,
                    });
            }),
            e.on(b.Sh.SdpError, (e, t, n, r) => {
                ed.default.track(eA.rMx.SDP_ERROR, {
                    operation: e,
                    error: t,
                    type: n,
                    sdp: r,
                });
            }),
            e.on(b.Sh.VideoState, (t) => {
                v.Z.dispatch({
                    type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED",
                    videoState: t,
                    context: e.context,
                });
            }),
            e.setBitRate(ey.Z.bitrate),
            e.applyVideoQualityMode(eC.Z.mode),
            e1.supports(eD.AN.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                e1.setAsyncVideoInputDeviceInit((0, Z.p)("setupMediaEngine").enabled);
    }),
        e1.on(b.aB.DeviceChange, (e, t, n) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_DEVICES",
                inputDevices: e,
                outputDevices: t,
                videoDevices: n,
            });
        }),
        e1.on(b.aB.VolumeChange, (e, t) => {
            v.Z.dispatch({
                type: "AUDIO_VOLUME_CHANGE",
                inputVolume: e,
                outputVolume: t,
            });
        }),
        e1.on(b.aB.DesktopSourceEnd, (e, t) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                settings: null,
                endReason: e,
                errorCode: t,
            });
        }),
        e1.on(b.aB.AudioPermission, (e) => {
            (tD = !0),
                v.Z.dispatch({
                    type: "MEDIA_ENGINE_PERMISSION",
                    kind: "audio",
                    granted: e,
                });
        }),
        e1.on(b.aB.VideoPermission, (e) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_PERMISSION",
                kind: "video",
                granted: e,
            });
        }),
        e1.on(b.aB.WatchdogTimeout, async () => {
            let e;
            try {
                await ef.Z.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
            } catch (t) {
                "number" == typeof t.status && (e = t.status);
            }
            eU.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)),
                ed.default.track(eA.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        e1.on(b.aB.VideoInputInitialized, (e) => {
            ed.default.track(eA.rMx.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired
                    ? null
                    : Math.round(e.timeToFirstFrame * ep.Z.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: eS.Z.getMediaSessionId(),
                rtc_connection_id: eS.Z.getRTCConnectionId(),
            });
        }),
        e1.on(b.aB.AudioInputInitialized, (e) => {
            ed.default.track(eA.rMx.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * ep.Z.Millis.SECOND),
                rtc_connection_id: eS.Z.getRTCConnectionId(),
            });
        }),
        e1.on(b.aB.ClipsRecordingRestartNeeded, () => {
            v.Z.dispatch({ type: "CLIPS_RESTART" });
        }),
        e1.on(b.aB.ClipsInitFailure, (e, t) => {
            v.Z.wait(() => {
                v.Z.dispatch({
                    type: "CLIPS_INIT_FAILURE",
                    errMsg: e,
                    applicationName: t,
                });
            });
        }),
        e1.on(b.aB.ClipsRecordingEnded, (e, t) => {
            var n, r;
            (null == o || null == (n = o.desktopSource) ? void 0 : n.id) === e &&
                (null != t && (null == a || null == (r = a.desktopSource) ? void 0 : r.soundshareId) !== t && I.pn(t),
                (o = null));
        }),
        e1.on(b.aB.NativeScreenSharePickerUpdate, (e, t) => {
            v.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE",
                existing: e,
                content: t,
            });
        }),
        e1.on(b.aB.NativeScreenSharePickerCancel, (e) => {
            v.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL",
                existing: e,
            });
        }),
        e1.on(b.aB.NativeScreenSharePickerError, (e) => {
            v.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_ERROR",
                error: e,
            });
        }),
        e1.on(b.aB.AudioDeviceModuleError, (e, t, n) => {
            ed.default.track(eA.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                audio_device_module: e,
                code: t,
                device_name: n,
            });
        }),
        e1.on(b.aB.VideoCodecError, (e) => {
            let t = "encode" === e.mode ? w.u.VIDEO_ENCODE_ERROR : w.u.VIDEO_DECODE_ERROR,
                n = {
                    videoCodec: e.codecStandard,
                    errorMessage: e.message,
                };
            (0, w.kr)(
                t === w.u.VIDEO_ENCODE_ERROR
                    ? ek(ej({ type: t }, n), { videoEncoder: e.implName })
                    : ek(ej({ type: t }, n), { videoDecoder: e.implName }),
            );
        }),
        e1.on(b.aB.ConnectionStats, (e) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_CONNECTION_STATS",
                connectionStats: e.map((e) => {
                    let { stats: t, connection: n } = e;
                    return {
                        stats: t,
                        mediaEngineConnectionId: n.mediaEngineConnectionId,
                        version: eJ++,
                        context: n.context,
                    };
                }),
            });
        }),
        e1.on(b.aB.VoiceQueueMetrics, (e) => {
            let t = rV(e);
            null !== t && ed.default.track(eA.rMx.VOICE_QUEUE_METRICS, t);
        }),
        e1.setOnVideoContainerResized((e, t, n) => {
            v.Z.wait(() =>
                v.Z.dispatch({
                    type: "VIDEO_SIZE_UPDATE",
                    streamId: e,
                    width: t,
                    height: n,
                }),
            );
        }),
        nX(),
        n$(),
        e1.supports(eD.AN.ASYNC_CLIPS_SOURCE_DEINIT) &&
            e1.setAsyncClipsSourceDeinit((0, F.C)("setupMediaEngine").enabled),
        nt.reset(),
        (0, eI.q)().then((e) => {
            null != e && (tU = e.gpu_brand);
        }),
        e1.on(b.aB.SystemMicrophoneModeChange, (e) => {
            e1.eachConnection(t4);
        });
}
function t8() {
    return (0, e_.isWindows)() && h().satisfies(null === S.Z || void 0 === S.Z ? void 0 : S.Z.os.release, eN.c5);
}
function t6() {
    return (0, e_.isWindows)() && h().satisfies(null === S.Z || void 0 === S.Z ? void 0 : S.Z.os.release, eN.sN);
}
function t7() {
    return (
        (0, e_.isMac)() &&
        e1.supports(eD.AN.SCREEN_CAPTURE_KIT) &&
        h().satisfies(null === S.Z || void 0 === S.Z ? void 0 : S.Z.os.release, eN.C7)
    );
}
function t9() {
    return (
        (0, e_.isWindows)() &&
        e1.supports(eD.AN.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        e1.supports(eD.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function ne() {
    return e1.supports(eD.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
let nt = new (class {
    start() {
        this.started || ((this.started = !0), e1.on(b.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout &&
                (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            e1.removeListener(b.aB.Silence, this.handleSilence),
            v.Z.dispatch({
                type: "AUDIO_INPUT_DETECTED",
                inputDetected: null,
            }));
    }
    update() {
        let e = tz();
        !tm && eS.Z.getState() === eA.hes.RTC_CONNECTED && e.mode === eA.pM4.VOICE_ACTIVITY && e.silenceWarning
            ? this.start()
            : this.stop();
    }
    reset() {
        this.stop(), this.update();
    }
    constructor() {
        eL(this, "stateChangeTimeout", void 0),
            eL(this, "noVoiceTimeout", 5000),
            eL(this, "voiceTimeout", 1500),
            eL(this, "started", !1),
            eL(this, "handleSilence", (e) => {
                let t = !e;
                null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout),
                    (this.stateChangeTimeout = setTimeout(
                        () => {
                            (this.stateChangeTimeout = null),
                                this.started &&
                                    (v.Z.dispatch({
                                        type: "AUDIO_INPUT_DETECTED",
                                        inputDetected: t,
                                    }),
                                    e && (th = !0));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout,
                    ));
            });
    }
})();
function nn() {
    var e;
    let t = y.K.get("audio");
    null != t && (y.K.set(eG, { [eD.Yn.DEFAULT]: t }), y.K.remove("audio")),
        (e3 = null != (e = y.K.get(eG)) ? e : {}),
        _().each(e3, (e) => {
            if (
                (_().defaultsDeep(e, e$()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, eE.Kd)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== eZ &&
                    ((e.vadUseKrispSettingVersion = eZ), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                !e.vadThrehsoldMigrated)
            ) {
                var t;
                (e.vadThrehsoldMigrated = !0),
                    (null == (t = e.modeOptions) ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = ez);
            }
            e1.supports(eD.AN.SIDECHAIN_COMPRESSION) &&
                e.sidechainCompressionSettingVersion < eV &&
                ((e.sidechainCompressionSettingVersion = eV), (e.sidechainCompression = !0)),
                (0, e_.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== eB &&
                      ((e.ncUseKrispjsSettingVersion = eB), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== eF &&
                      ((e.ncUseKrispSettingVersion = eF), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
        }),
        na();
}
function nr(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eD.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = tK(t);
    return Object.assign(r, e), !__OVERLAY__ && n && y.K.set(eG, e3), r;
}
function ni() {
    y.K.remove(eG), location.reload();
}
function na() {
    let e = tz();
    e1.setAudioInputDevice(e.inputDeviceId),
        e1.setAudioOutputDevice(e.outputDeviceId),
        t$(),
        e1.setInputVolume(e.inputVolume),
        e1.setOutputVolume(e.outputVolume),
        e1.setH264Enabled(eX),
        e1.setAv1Enabled(eX),
        e1.setH265Enabled(eX),
        e1.setAecDump(e.aecDumpEnabled),
        e1.setSidechainCompression(e.sidechainCompression),
        e1.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        e1.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing);
}
function no() {
    e4 ||
        e1.enable().then(() =>
            v.Z.dispatch({
                type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
                enabled: !0,
                unmute: !1,
            }),
        );
}
function ns(e) {
    return {
        id: eD.w5,
        index: 0,
        name: e,
        disabled: !0,
        guid: void 0,
        hardwareId: void 0,
        containerId: void 0,
    };
}
function nl(e, t) {
    if (0 === e.length) {
        let e = ns(t);
        return { [e.id]: e };
    }
    return _()(e)
        .map((e) => ({
            id: e.id,
            index: e.index,
            name: e.name,
            disabled: !1,
            facing: e.facing,
            guid: e.originalId,
            hardwareId: e.hardwareId,
            containerId: e.containerId,
        }))
        .keyBy("id")
        .value();
}
function nc(e, t) {
    var n, r;
    let i = null != (r = null != (n = e[t]) ? n : e[eD.w5]) ? r : _()(e).values().first();
    return null != i ? i.id : t;
}
function nu(e) {
    let t = e7;
    if (((e7 = nl(e, ex.intl.string(ex.t["/QIjDA"]))), !_().isEqual(e7, t))) {
        let e = tz(),
            t = nc(e7, e.inputDeviceId);
        e1.setAudioInputDevice(t);
    }
}
function nd(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nf(e) {
    e1.eachConnection((t) => {
        t.context === eD.Yn.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function np(e) {
    let t = e9;
    if (((e9 = nl(e, ex.intl.string(ex.t.xlUg0v))), !_().isEqual(e9, t))) {
        let e = tz(),
            n = nc(e9, e.outputDeviceId);
        e1.setAudioOutputDevice(n);
        let r = nd(t),
            i = nd(e9);
        r !== i && nf(i);
    }
}
function n_(e) {
    tp = e.length > 0;
    let t = te;
    if (((te = nl(e, ex.intl.string(ex.t.WKWARY))), ta && !_().isEqual(te, t))) {
        var n;
        let e = void 0 !== te[to],
            r = to === eD.w5 && (null == (n = t[eD.w5]) ? void 0 : n.disabled);
        t$(e || r);
    }
}
function nm() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        r =
            null != (e = el.Z.settings.audioContextSettings)
                ? e
                : {
                      user: {},
                      stream: {},
                  };
    for (let e of Object.keys(r)) {
        let i = e === eR.u0.USER ? eD.Yn.DEFAULT : eD.Yn.STREAM,
            a = i === eD.Yn.STREAM ? eD.Yh : eD.Qx,
            o = null != (t = r[e]) ? t : {},
            { localMutes: s, localVolumes: l } = tz(i);
        for (let [e, t] of Object.entries(o))
            null == (0, eo.Ky)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== a ? (l[e] = t.volume) : delete l[e],
                e1.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (n)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == o[e] &&
                    (delete s[e],
                    delete l[e],
                    e1.eachConnection((t) => {
                        t.setLocalVolume(e, a), t.setLocalMute(e, !1);
                    }, i));
        nr(
            {
                localMutes: s,
                localVolumes: l,
            },
            i,
        );
    }
}
function nh(e) {
    if (null == r)
        return (
            eU.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
            {
                soundshareId: null,
                soundshareSession: "",
            }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : ef.Z.getAudioPid(e),
            n = "";
        return (
            null != t && (n = ef.Z.generateSessionFromPid(t)),
            {
                soundshareId: t,
                soundshareSession: n,
            }
        );
    }
}
function ng(e, t) {
    (0, e_.isWindows)() &&
        e > 1 &&
        I.YT(e, { soundshare_session: t }).then((t) => {
            null == t ||
                L.ZP.shouldContinueWithoutElevatedProcessForPID(e) ||
                v.Z.wait(() => {
                    v.Z.dispatch({
                        type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                        errorMessage: t,
                    });
                });
        });
}
function nE(e) {
    (i = e.sessionId), (tt = !1), (ti = !1);
    let t = tz();
    if (
        (t9() && (ne() ? rg(eD.iA.AUTOMATIC) : t.automaticAudioSubsystem && rE()),
        e1.supports(eD.AN.OFFLOAD_ADM_CONTROLS))
    ) {
        let e = !1;
        (0, e_.isDesktop)()
            ? (e = (0, U.E)({ location: "handleConnectionOpen" }).enabled)
            : ((0, e_.isIOS)() || (0, e_.isAndroid)()) && (e = (0, G.W)({ location: "handleConnectionOpen" }).enabled),
            e1.setOffloadAdmControls(e);
    }
    (0, ec.wt)({
        location: "MediaEngineStore",
        autoTrackExposure: !1,
    }) &&
        null !== t.mostRecentlyRequestedVoiceFilter &&
        (0, e_.isDesktop)() &&
        (eu.Z.getLastInitAttemptMayHaveCrashed()
            ? (v.Z.dispatch({
                  type: "AUDIO_SET_SELF_MUTE",
                  mute: !0,
                  context: eD.Yn.DEFAULT,
                  playSoundEffect: !0,
              }),
              nr({ mostRecentlyRequestedVoiceFilter: null }))
            : n(358820).r5()),
        nm();
}
function nb(e) {
    let { mediaEngineState: t } = e;
    (e3 = t.settingsByContext),
        (e7 = t.inputDevices),
        (e9 = t.outputDevices),
        (tk = t.appSupported),
        (tb = t.krispModuleLoaded),
        (s = t.krispVersion),
        (e8 = t.goLiveContext);
}
function ny() {
    i = null;
}
function nO() {
    if ((0, e_.isWeb)()) {
        let e = X.NJ.getCurrentConfig({ location: "MediaEngineStore handlePostConnectionOpen" });
        e.loadWasmModule && e.preload && r.startDavePreload();
    }
    return !1;
}
function nv(e) {
    switch (e.state) {
        case eA.hes.CONNECTING:
            no();
            break;
        case eA.hes.RTC_CONNECTING:
            (tm = !1), (th = !1);
            break;
        case eA.hes.RTC_CONNECTED:
            t$();
            break;
        case eA.hes.DISCONNECTED:
            nw(), nD();
    }
    nt.update();
}
function nS(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (tt = t.mute || t.suppress), (ti = t.deaf), e1.eachConnection(tX);
            let e = null != t.guildId && null != t.channelId && null != tC && tC !== t.channelId,
                n = !tg && null == t.channelId;
            return t$(!e && !n && ta), (tC = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== eb.default.getId() || null != eS.Z.getChannelId() || t$(!1, null), e;
    }, !1);
}
function nI(e) {
    let { mute: t } = e;
    (tn = t), e1.eachConnection(tX);
}
function nT(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = tz(t);
    if (t === eD.Yn.DEFAULT && (er.Z.requestPermission(eP.Eu.AUDIO), tr)) return !1;
    (r = !i && !r) || (i = !1),
        n || (tl = !0),
        nr(
            {
                mute: r,
                deaf: i,
            },
            t,
        ),
        e1.eachConnection(tX);
}
function nC(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    nr({ mute: n }, t), r || (tl = !0), e1.eachConnection(tX);
}
function nA(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== eR.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    nm(!0);
}
function nN(e) {
    let { context: t } = e;
    nr({ deaf: !tz(t).deaf }, t), e1.eachConnection(tX);
}
function nP(e) {
    let { context: t, userId: n } = e;
    if (n === eb.default.getId()) return;
    let { localMutes: r } = tz(t);
    r[n] ? delete r[n] : (r[n] = !0),
        nr({ localMutes: r }, t),
        e1.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nR(e) {
    var t, n, r, i, a, o, s;
    let { context: l, userId: c, videoToggleState: u, persist: d, isAutomatic: p } = e;
    f()(!(d && p), "These are not allowed to both be true.");
    let _ = u === eA.ZUi.DISABLED,
        { disabledLocalVideos: m } = tz(l),
        h = null != (t = m[c]) && t,
        g = tL.has(c),
        E = u === eA.ZUi.AUTO_ENABLED || u === eA.ZUi.MANUAL_ENABLED;
    eU.info(
        "disableVideo="
            .concat(_, " currentlyDisabled=")
            .concat(h, " currentlyAutoDisabled=")
            .concat(g, ", isVideoShown=")
            .concat(E),
    ),
        f()(!(g && !h), "If you are auto-disabled, then you are also disabled.");
    let b = _ !== h,
        y = l === eD.Yn.DEFAULT,
        O = p && b && y,
        v = d && b && y;
    eU.info(
        "changed="
            .concat(b, " isDefaultContext=")
            .concat(y, " isUpdateCausedByVideoHealthManager=")
            .concat(O, " isManualToggleByUser=")
            .concat(v),
    );
    let { videoToggleStateMap: S } = tz(l);
    if (
        (S[c] === eA.ZUi.AUTO_PROBING &&
            u === eA.ZUi.AUTO_ENABLED &&
            (0, en.Z)(c, _ ? eD.fC.AUTO_DISABLE : eD.fC.AUTO_ENABLE, E),
        (S[c] = u),
        nr({ videoToggleStateMap: S }, l, d),
        u === eA.ZUi.AUTO_PROBING
            ? null == (n = eS.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, !0)
            : null == (r = eS.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, !1),
        tj ||
            (eU.info("isAutoDisableAllowed=".concat(tj, " - disabling VideoHealthManager")),
            null == (a = eS.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()),
        O)
    ) {
        if ((!_ && !g) || (_ && !tj)) return;
        (0, en.Z)(c, _ ? eD.fC.AUTO_DISABLE : eD.fC.AUTO_ENABLE, E), _ ? tL.add(c) : tL.delete(c);
    } else
        v &&
            (g && !_
                ? (eU.info("disallowing auto-disable for this session because of manual override by user"),
                  (tj = !1),
                  null == (s = eS.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(),
                  (0, en.Z)(c, eD.fC.MANUAL_REENABLE, E))
                : (0, en.Z)(c, _ ? eD.fC.MANUAL_DISABLE : eD.fC.MANUAL_ENABLE, E));
    y && !_ && tL.delete(c),
        _ ? (m[c] = !0) : delete m[c],
        nr({ disabledLocalVideos: m }, l, d),
        e1.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(c, null != (t = m[c]) && t);
        }, l);
}
function nw() {
    if (0 === tL.size) return;
    let e = eD.Yn.DEFAULT,
        { disabledLocalVideos: t } = tz(e);
    tL.forEach((n) => {
        f()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            e1.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tL.clear(),
        nr({ disabledLocalVideos: t }, e, !1);
}
function nD() {
    let e = eD.Yn.DEFAULT,
        { videoToggleStateMap: t } = tz(e);
    for (let [e, n] of Object.entries(t)) n === eA.ZUi.AUTO_PROBING && delete t[e];
    nr({ videoToggleStateMap: t }, e, !1);
}
function nx(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === eb.default.getId()) return;
    let i = t === eD.Yn.STREAM ? eD.Yh : eD.Qx,
        { localVolumes: a } = tz(t);
    r === i ? delete a[n] : (a[n] = r), nr({ localVolumes: a }, t), e1.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function nL(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: a } = tz(t);
    (a[n] = {
        left: r,
        right: i,
    }),
        nr({ localPans: a }, t),
        e1.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function nj(e) {
    let { context: t, mode: n, options: r } = e;
    nr(
        {
            mode: n,
            modeOptions: r,
        },
        t,
    ),
        e1.eachConnection(tq),
        nt.update();
}
function nM(e) {
    let { volume: t } = e;
    nr({ inputVolume: tQ(t) }), e1.setInputVolume(t);
}
function nk(e) {
    let { volume: t } = e;
    nr({ outputVolume: t }), e1.setOutputVolume(t);
}
function nU(e) {
    let { id: t } = e;
    (t = nc(e7, t)), (e6 = performance.now()), nr({ inputDeviceId: t }), e1.setAudioInputDevice(t);
}
function nG(e) {
    let { id: t } = e;
    nr({ outputDeviceId: (t = nc(e9, t)) }), e1.setAudioOutputDevice(t);
}
function nZ(e) {
    let { id: t } = e;
    nr({ videoDeviceId: (t = nc(te, t)) }), t$();
}
function nF(e) {
    let { inputProfile: t } = e;
    nr({ activeInputProfile: t });
    let n = tz();
    e1.eachConnection((e) => {
        tq(e),
            t3(e, n.automaticGainControl),
            e.setEchoCancellation(n.echoCancellation),
            t2(e, n.noiseCancellation),
            e.setNoiseSuppression(n.noiseSuppression);
    }),
        e1.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        nt.update(),
        nJ();
}
function nB(e) {
    return e5 !== e.required && ((e5 = e.required), e.required || e1.interact(), !0);
}
function nV(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    nu(t), np(n), n_(r);
}
function nH(e) {
    let { inputVolume: t, outputVolume: n } = e;
    nr({
        inputVolume: tQ(t),
        outputVolume: n,
    });
}
function nY(e) {
    var t;
    let n = tz(),
        r = e1.getAudioSubsystem(),
        i = e1.getAudioLayer(),
        a = nc(e7, n.inputDeviceId),
        o = null == (t = e7[a]) ? void 0 : t.name;
    ed.default.track(eA.rMx.VOICE_PROCESSING, {
        echo_cancellation: n.echoCancellation,
        noise_cancellation: n.noiseCancellation,
        noise_suppression: n.noiseSuppression,
        automatic_gain_control: n.automaticGainControl,
        location: e,
        bypass_system_input_processing: n.bypassSystemInputProcessing,
        audio_subsystem: r,
        audio_layer: i,
        input_device: o,
    });
}
function nW(e) {
    let t = nr({ echoCancellation: e.enabled });
    e1.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nJ(), nY(e.location);
}
function nK(e) {
    nq(e.enabled);
}
function nz(e) {
    let t = nr({ sidechainCompressionStrength: e.strength });
    e1.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function nq(e) {
    let t = nr({ sidechainCompression: e });
    e1.setSidechainCompression(t.sidechainCompression);
}
function nQ(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tM.add(n) : tM.delete(n), nX(), nJ();
}
function nX() {
    let e = !tM.has("voice_filter_preview") && !tM.has("mic_test");
    e1.setMaybePreprocessMute(e);
}
function nJ() {
    let e = tz(),
        t = tM.size > 0,
        n = e.inputDeviceId,
        r = eO.Z.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        a = eO.Z.hasNoiseSuppression(n) || e.noiseSuppression,
        o = t1(eO.Z.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation,
        l = null !== tv,
        c = tM.has("voice_filter") && 1 === tM.size;
    e1.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: a,
        automaticGainControlConfig: o,
        noiseCancellation: s,
        voiceFilters: l,
        loopbackUseAudioMode: c,
    });
}
async function n$() {
    var e, t, n, r;
    if (!e1.supports(eD.AN.VAAPI)) return;
    let i = 4098;
    (null == (t = window.DiscordNative) || null == (e = t.processUtils) ? void 0 : e.getSystemInfo) != null &&
        (null !=
        (r =
            null == (n = (await window.DiscordNative.processUtils.getSystemInfo()).electronGPUInfo)
                ? void 0
                : n.gpuDevice)
            ? r
            : []
        ).some((e) => e.vendorId === i) &&
        ((tB = !0), (tF = e1.supports(eD.AN.GAMESCOPE_CAPTURE)));
}
function n0(e) {
    let t = nr({ noiseSuppression: e.enabled });
    e1.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nJ(), nY(e.location);
}
function n1(e) {
    let t = nr({ automaticGainControl: e.enabled });
    e1.eachConnection((e) => t3(e, t.automaticGainControl)), nJ(), nY(e.location);
}
function n3(e) {
    let t = nr({ noiseCancellation: e.enabled });
    e1.eachConnection((e) => t2(e, t.noiseCancellation)), nJ(), nY(e.location);
}
function n2(e) {
    ei.Z.setKrispModelOverride(e.model), (c = e.model), nJ();
}
function n4(e) {
    var t;
    (0, e_.isWeb)() || ((tO = e.enabled), null == (t = e1.setNoiseCancellationEnableStats) || t.call(e1, e.enabled));
}
function n5(e) {
    nr({ silenceWarning: e.enabled }), nt.update();
}
function n8(e) {
    e1.setDebugLogging(e.enabled);
}
function n6(e) {
    let { level: t } = e;
    (l = t), ei.Z.setKrispSuppressionLevel(t);
}
function n7(e) {
    nr({ videoHook: e.enabled });
}
function n9(e) {
    nr({ experimentalSoundshare2: e.enabled });
}
function re(e) {
    let { enabled: t } = e;
    nr({ useSystemScreensharePicker: t });
}
function rt(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = nr({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r,
        });
    e1.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function rn(e) {
    let { enabled: t } = e;
    nr({ qos: t }), e1.eachConnection((e) => e.setQoS(t));
}
function rr() {
    ni();
}
function ri(e) {
    let { inputDetected: t } = e;
    (t_ = t), !tm && t_ && ((tm = !0), nt.update());
}
function ra(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === tr) return !1;
    (tr = n), e1.eachConnection(tX);
}
function ro(e) {
    let { state: t, permissionType: n } = e,
        r = t === eP.PQ.ACCEPTED;
    switch (n) {
        case eP.Eu.AUDIO:
            (tD = !0), e1.eachConnection(tX);
            break;
        case eP.Eu.CAMERA:
            !r && ta && t$(!1);
            break;
        default:
            return !1;
    }
}
function rs() {
    return tb || !1;
}
async function rl() {
    try {
        var e, t, n, i;
        await eg.ZP.ensureModule("discord_krisp");
        let a = eg.ZP.requireModule("discord_krisp");
        (tb = !0),
            (s = null == (e = a.getSdkVersion) ? void 0 : e.call(a)),
            (l = null != (i = null == (t = a.getSuppressionLevel) ? void 0 : t.call(a)) ? i : 100),
            null == (n = a.getNcModels) ||
                n.call(a).then((e) => {
                    (ty = e), r.emitChange();
                }),
            r.emitChange();
    } catch (t) {
        eU.warn("Failed to load Krisp module: ".concat(t.message)), eh.Z.captureException(t);
        let e = eD.H3.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eD.H3.INITIALIZED : n;
        }
        ed.default.track(eA.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), nr({ noiseCancellation: !1 });
    } finally {
        tE = !1;
    }
}
function rc() {
    return (0, e_.isWindows)() || (0, e_.isLinux)() || (0, e_.isMac)();
}
function ru() {
    !rc() || __OVERLAY__ || tE || tb
        ? (0, e_.isWeb)() && e1.supports(eD.AN.NOISE_CANCELLATION)
            ? ((tb = !0), r.emitChange())
            : (0, e_.isWeb)() && nr({ noiseCancellation: !1 })
        : ((tE = !0), rl());
}
function rd(e) {
    let { enabled: t } = e;
    ed.default.track(eA.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != tv ? tv : null,
        enabled: t,
    }),
        nr({ voiceFilterPlaybackEnabled: t });
}
function rf(e) {
    let { newVoiceFilterId: t } = e;
    nr({ mostRecentlyRequestedVoiceFilter: t }), e1.eachConnection((e) => e.setVoiceFilterId(t));
}
function rp() {
    nr({ mostRecentlyRequestedVoiceFilter: null });
}
function r_(e) {
    let { voiceFilterId: t } = e;
    (tI = tv), (tT = tS), (tv = t), (tS = null === t ? null : Date.now());
}
function rm(e) {
    let t = e.bypassEnabled;
    nr({ bypassSystemInputProcessing: t }), e1.setAudioInputBypassSystemProcessing(t), nY(e.location);
}
function rh(e) {
    rg(e.subsystem);
}
function rg(e) {
    e === eD.iA.AUTOMATIC
        ? (nr({ automaticAudioSubsystem: !0 }), rE())
        : (nr({ automaticAudioSubsystem: !1 }), e1.setAudioSubsystem(e));
}
function rE() {
    e1.queueAudioSubsystem(eD.iA.EXPERIMENTAL);
}
function rb(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && t$(i, null), null != t || null == n)) {
        tg = !1;
        return;
    }
    if (tg) return;
    tg = !0;
    let a = tz();
    (a.mute || a.deaf) &&
        (nr({
            deaf: !1,
            mute: !1,
        }),
        e1.eachConnection(tX));
}
function ry(e) {
    let { application: t } = e;
    e2.add(t.id);
}
function rO(e) {
    let { application: t } = e;
    e2.delete(t.id);
}
function rv(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (e4 = !1), e1.eachConnection(tX);
                break;
            case "video":
                t$(!1);
        }
}
function rS(e) {
    (e4 = e.enabled),
        e.unmute &&
            nr({
                mute: !1,
                deaf: !1,
            }),
        e1.eachConnection(tX);
}
function rI(e) {
    let { enabled: t } = e;
    er.Z.requestPermission(eP.Eu.CAMERA), t$(t);
}
function rT(e) {
    let { sourceId: t, applicationName: n, quality: i } = e;
    if (!(0, N.CY)() || null == S.Z) return !1;
    let a = null,
        s = null,
        l = ef.Z.getPidFromDesktopSource(t);
    ({ soundshareId: a, soundshareSession: s } = nh(l));
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
        (e1.setClipsSource(null),
        (0, e_.isWindows)() && null != o.desktopSource.soundshareId && I.pn(o.desktopSource.soundshareId)),
        null != a && ng(a, s),
        (o = c);
    let u = tH(),
        d = tz().videoHook;
    e1.setClipsSource({
        desktopDescription: {
            id: o.desktopSource.id,
            soundshareId: o.desktopSource.soundshareId,
            useVideoHook: d,
            useGraphicsCapture: t8(),
            useCaptureDeviceForEncode: !1,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: t7(),
            videoHookStaleFrameTimeoutMs: eW,
            graphicsCaptureStaleFrameTimeoutMs: eK,
            hdrCaptureMode: u,
        },
        quality: i,
        applicationName: n,
    });
}
function rC(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((o = null), e1.setClipsSource(null));
}
function rA(e) {
    var t, n, r, i;
    let { settings: a } = e;
    if ((null == a ? void 0 : a.desktopSettings) != null) {
        let e = null,
            r = null,
            { sourceId: i, sound: o } = a.desktopSettings,
            s = null != (t = a.context) ? t : eD.Yn.DEFAULT,
            l =
                null != (n = a.qualityOptions)
                    ? n
                    : {
                          resolution: 720,
                          frameRate: 30,
                      },
            c = !1 === o ? null : ef.Z.getPidFromDesktopSource(i);
        e_.isPlatformEmbedded &&
            !0 === o &&
            (({ soundshareId: e, soundshareSession: r } = nh(c)), null != e && ng(e, r)),
            tJ(s),
            t$(s === eD.Yn.STREAM && ta, {
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
        let e = null != (r = a.context) ? r : eD.Yn.DEFAULT,
            { videoDeviceGuid: t, audioDeviceGuid: n } = a.cameraSettings,
            o = e === eD.Yn.STREAM && ta,
            s =
                null != (i = a.qualityOptions)
                    ? i
                    : {
                          resolution: 720,
                          frameRate: 30,
                      };
        t$(o, {
            cameraSource: {
                videoDeviceGuid: t,
                audioDeviceGuid: n,
            },
            quality: {
                resolution: s.resolution,
                frameRate: s.frameRate,
            },
        });
    } else t$(ta, null);
}
function rN(e) {
    let { section: t } = e;
    return t === eA.oAB.VOICE && no(), !1;
}
function rP() {
    return e1.eachConnection(t4), !1;
}
function rR(e) {
    let { enabled: t } = e,
        n = nr({ aecDumpEnabled: t });
    e1.setAecDump(n.aecDumpEnabled);
}
function rw(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (e3 = Object.values(eD.Yn).reduce((e, n) => {
        let r = n,
            i = e$();
        return (e[r] = _().merge(i, t[r])), e;
    }, {})),
        y.K.set(eG, e3),
        na();
}
function rD(e) {
    let { state: t } = e,
        n = x.Z.isEnabled();
    if (t === eA.$7l.BACKGROUND && ta && !n) (tf = !0), t$(!1);
    else {
        if (t !== eA.$7l.ACTIVE || !tf) return !1;
        (tf = !1), t$(!0);
    }
    return !0;
}
function rx(e) {
    e1.eachConnection((t) => t.setBitRate(e.bitrate));
}
function rL() {
    if ((!ta && null == a) || null != eS.Z.getRTCConnectionId()) return !1;
    t$(!1, null);
}
function rj() {
    return !!tA && ((tA = !1), !0);
}
function rM(e) {
    e1.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function rk(e) {
    let { settings: t } = e;
    e1.applyMediaFilterSettings(t).finally(() => {
        (tN = !1), r.emitChange();
    });
}
function rU() {
    tN = !0;
}
function rG() {
    tN = !1;
}
function rZ(e) {
    tG = e.enabled;
}
function rF() {
    if ((0, e_.isDesktop)() && e_.isPlatformEmbedded && !tV) {
        tV = !0;
        let e = async () => {
            let t = await new Promise((e) => {
                eg.ZP.pollQueueMetrics((t) => {
                    e(t);
                });
            });
            t.periodMs = eD.rp;
            let n = rV(t);
            null !== n && ed.default.track(eA.rMx.VOICE_QUEUE_METRICS, n), setTimeout(e, eD.rp);
        };
        setTimeout(e, eD.rp);
    }
}
class rB extends (u = E.ZP.Store) {
    initialize() {
        t5(),
            nn(),
            ru(),
            nD(),
            rF(),
            (tk = {
                [eD.AN.VIDEO]: e1.supports(eD.AN.VIDEO),
                [eD.AN.DESKTOP_CAPTURE]: e1.supports(eD.AN.DESKTOP_CAPTURE),
                [eD.AN.HYBRID_VIDEO]: e1.supports(eD.AN.HYBRID_VIDEO),
            }),
            this.waitFor(eb.default, ey.Z, eO.Z, ev.Z, C.Z, D.Z, eS.Z, L.ZP, ea.Z, el.Z, eT.default, eC.Z, eu.Z);
    }
    supports(e) {
        return e1.supports(e);
    }
    supportsInApp(e) {
        return tk[e] || e1.supports(e);
    }
    isSupported() {
        return e1.supported();
    }
    isNoiseSuppressionSupported() {
        return e1.supports(eD.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return rs();
    }
    isNoiseCancellationError() {
        return tA;
    }
    isAutomaticGainControlSupported() {
        return e1.supports(eD.AN.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !ne() && (e1.supports(eD.AN.LEGACY_AUDIO_SUBSYSTEM) || e1.supports(eD.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return e1.supports(eD.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === e1.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return rs();
    }
    isAecDumpSupported() {
        return e1.supports(eD.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return e1.supports(eD.AN.VIDEO) && e1.supports(eD.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        return (
            (null == (e = ev.Z.getChannel(tC)) ? void 0 : e.type) !== eA.d4z.GUILD_STAGE_VOICE &&
            eX &&
            W.Z.simulcastEnabled()
        );
    }
    getAecDump() {
        return tz().aecDumpEnabled;
    }
    getMediaEngine() {
        return e1;
    }
    getVideoComponent() {
        return e1.Video;
    }
    getCameraComponent() {
        return e1.Camera;
    }
    getKrispSuppressionLevel() {
        return null != l ? l : 100;
    }
    getKrispEnableStats() {
        return tO;
    }
    isEnabled() {
        return e4;
    }
    isMute() {
        return this.isSelfMute() || tt;
    }
    isDeaf() {
        return this.isSelfDeaf() || ti;
    }
    hasContext(e) {
        return null != e3[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eD.Yn.DEFAULT;
        return e === eD.Yn.DEFAULT && tn;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eD.Yn.DEFAULT;
        return (
            !this.isEnabled() ||
            tz(e).mute ||
            !er.Z.didHavePermission(eP.Eu.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eD.Yn.DEFAULT && tr)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tl;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tl = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eD.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && eO.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return tG;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eD.Yn.DEFAULT;
        return !this.isSupported() || tz(e).deaf;
    }
    isVideoEnabled() {
        return ta && tp;
    }
    isVideoAvailable() {
        return Object.values(te).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eD.Yn.STREAM;
        return e8 === e && null != a;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eD.Yn.STREAM;
        return e8 === t && null != a && (null == (e = a.desktopSource) ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eD.Yn.DEFAULT;
        return e !== eb.default.getId() && (tz(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return e1.supports(eD.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eD.Yn.DEFAULT;
        return null != (t = tz(n).disabledLocalVideos[e]) && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eD.Yn.DEFAULT;
        return null != (t = tz(n).videoToggleStateMap[e]) ? t : eA.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eD.Yn.DEFAULT;
        return t === eD.Yn.DEFAULT && tL.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eD.Yn.DEFAULT;
        return e === eD.Yn.DEFAULT && tL.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tN;
    }
    isNativeAudioPermissionReady() {
        return tD;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return e8;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return e6;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eD.Yn.DEFAULT,
            n = tz(t).localPans[e];
        return null != n ? n : eY;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eD.Yn.DEFAULT,
            n = t === eD.Yn.STREAM ? eD.Yh : eD.Qx,
            r = tz(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return tz().inputVolume;
    }
    getOutputVolume() {
        return tz().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eD.Yn.DEFAULT;
        return tz(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eD.Yn.DEFAULT;
        return tz(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return tv;
    }
    getActiveVoiceFilterAppliedAt() {
        return tS;
    }
    getPreviousVoiceFilter() {
        return tI;
    }
    getPreviousVoiceFilterAppliedAt() {
        return tT;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return tz().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return tz().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            _().each(e3, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === eA.pM4.PUSH_TO_TALK && e2.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nc(e7, tz().inputDeviceId);
    }
    getOutputDeviceId() {
        return nc(e9, tz().outputDeviceId);
    }
    getVideoDeviceId() {
        return nc(te, tz().videoDeviceId);
    }
    getInputDevices() {
        return e7;
    }
    getOutputDevices() {
        return e9;
    }
    getVideoDevices() {
        return te;
    }
    getEchoCancellation() {
        let e = tz();
        return eO.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return e1.supports(eD.AN.SIDECHAIN_COMPRESSION) && tz().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return tz().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return tz().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tR && tR;
    }
    getLoopback() {
        return tM.size > 0;
    }
    getLoopbackReasons() {
        return tM;
    }
    getNoiseSuppression() {
        let e = tz();
        return eO.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tz();
        return eO.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return tz().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return tz().noiseCancellation;
    }
    getHardwareEncoding() {
        return eX;
    }
    getEnableSilenceWarning() {
        return tz().silenceWarning;
    }
    getDebugLogging() {
        return e1.getDebugLogging();
    }
    getQoS() {
        return tz().qos;
    }
    getAttenuation() {
        return tz().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return tz().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return tz().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return t9() && tz().automaticAudioSubsystem ? eD.iA.AUTOMATIC : e1.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return e1.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return tz().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === ew._.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eD.Yn.DEFAULT;
        return tz(e);
    }
    getState() {
        return {
            settingsByContext: e3,
            inputDevices: e7,
            outputDevices: e9,
            appSupported: tk,
            krispModuleLoaded: tb,
            krispVersion: s,
            krispSuppressionLevel: l,
            goLiveSource: a,
            goLiveContext: e8,
        };
    }
    getInputDetected() {
        return t_;
    }
    getNoInputDetectedNotice() {
        return th;
    }
    getPacketDelay() {
        return e_.isPlatformEmbedded || this.getMode() !== eA.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        e1.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return e5;
    }
    getVideoHook() {
        return tz().videoHook;
    }
    supportsVideoHook() {
        return e1.supports(eD.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tz().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return (
            e1.supports(eD.AN.EXPERIMENTAL_SOUNDSHARE) &&
            h().satisfies(null === S.Z || void 0 === S.Z ? void 0 : S.Z.os.release, eN.T6)
        );
    }
    supportsHookSoundshare() {
        return (
            (0, e_.isWindows)() &&
            e1.supports(eD.AN.SOUNDSHARE) &&
            h().satisfies(null === S.Z || void 0 === S.Z ? void 0 : S.Z.os.release, eN.sA)
        );
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = tz().useSystemScreensharePicker,
            n = (0, e_.isLinux)();
        return e && (null != t ? t : n);
    }
    supportsSystemScreensharePicker() {
        return e1.supports(eD.AN.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return tB;
    }
    getUseGamescopeCapture() {
        return tF;
    }
    getEverSpeakingWhileMuted() {
        return tc;
    }
    getSpeakingWhileMuted() {
        return tu;
    }
    getKrispModelOverride() {
        return c;
    }
    getKrispModels() {
        return ty;
    }
    getKrispVadActivationThreshold() {
        var e;
        return null != (e = tz().modeOptions.vadKrispActivationThreshold) ? e : eH;
    }
    hasActiveCallKitCall() {
        return tZ;
    }
    setHasActiveCallKitCall(e) {
        tZ = e;
    }
    supportsScreenSoundshare() {
        return (0, e_.isMac)()
            ? e1.supports(eD.AN.SOUNDSHARE) &&
                  h().satisfies(null === S.Z || void 0 === S.Z ? void 0 : S.Z.os.release, eN.yG) &&
                  t7()
            : (0, e_.isWindows)()
              ? e1.supports(eD.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, e_.isLinux)() && e1.supports(eD.AN.SCREEN_SOUNDSHARE);
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eD.Yn.DEFAULT,
            t = this.supports(eD.AN.VIDEO)
                ? [
                      {
                          rid: "100",
                          type: e === eD.Yn.DEFAULT ? eD.Tr.VIDEO : eD.Tr.SCREEN,
                          quality: eD.y7,
                      },
                  ]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === eD.Yn.DEFAULT || this.goLiveSimulcastEnabled()) &&
                t.push({
                    rid: "50",
                    type: e === eD.Yn.DEFAULT ? eD.Tr.VIDEO : eD.Tr.SCREEN,
                    quality: eD.LD,
                }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: !1 };
        return (
            (0, e_.isWeb)() &&
                (e.fetchDave = X.NJ.getCurrentConfig({
                    location: "MediaEngineStore fetchAsyncResources",
                }).loadWasmModule),
            e1.fetchAsyncResources(e)
        );
    }
    startDavePreload() {
        if (!tP && ((tP = !0), (0, e_.isWeb)())) {
            let e = { fetchDave: !0 };
            e1.fetchAsyncResources(e).catch((e) => {
                eU.warn("DAVE preload failed:", e), eh.Z.captureException(e);
            });
        }
    }
    getSupportedSecureFramesProtocolVersion() {
        if ((0, e_.isWeb)()) {
            let { useWasmModule: e } = X.NJ.getCurrentConfig({
                location: "MediaEngineStore getSupportedSecureFramesProtocolVersion",
            });
            if (!e) return 0;
        }
        let e = e1.getSupportedSecureFramesProtocolVersion();
        114 === e && (e = 1);
        let t = X.m8.getCurrentConfig({ location: "MediaEngineStore" }),
            n = X.Th.getConfig({ location: "MediaEngineStore" });
        return (t.canSupportDaveProtocol || (n.allowOptIn && ea.Z.getPersistentCodesEnabled())) &&
            e >= t.protocolVersionFloor
            ? e
            : 0;
    }
    hasClipsSource() {
        return null != o;
    }
    getGpuBrand() {
        return tU;
    }
}
function rV(e) {
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
eL(rB, "displayName", "MediaEngineStore");
let rH = (r = new rB(v.Z, {
    VOICE_CHANNEL_SELECT: rb,
    VOICE_STATE_UPDATES: nS,
    CONNECTION_OPEN: nE,
    CONNECTION_CLOSED: ny,
    POST_CONNECTION_OPEN: nO,
    RTC_CONNECTION_STATE: nv,
    AUDIO_SET_TEMPORARY_SELF_MUTE: nI,
    AUDIO_TOGGLE_SELF_MUTE: nT,
    AUDIO_SET_SELF_MUTE: nC,
    AUDIO_TOGGLE_SELF_DEAF: nN,
    AUDIO_TOGGLE_LOCAL_MUTE: nP,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: nR,
    AUDIO_SET_LOCAL_VOLUME: nx,
    AUDIO_SET_LOCAL_PAN: nL,
    AUDIO_SET_MODE: nj,
    AUDIO_SET_INPUT_VOLUME: nM,
    AUDIO_SET_OUTPUT_VOLUME: nk,
    AUDIO_SET_INPUT_DEVICE: nU,
    AUDIO_SET_OUTPUT_DEVICE: nG,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: nF,
    AUDIO_SET_ECHO_CANCELLATION: nW,
    AUDIO_SET_SIDECHAIN_COMPRESSION: nK,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nz,
    AUDIO_SET_LOOPBACK: nQ,
    AUDIO_SET_NOISE_SUPPRESSION: n0,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: n1,
    AUDIO_SET_NOISE_CANCELLATION: n3,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: n2,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: n5,
    AUDIO_SET_DEBUG_LOGGING: n8,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: n6,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: n4,
    MEDIA_ENGINE_SET_VIDEO_HOOK: n7,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: n9,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: re,
    AUDIO_SET_ATTENUATION: rt,
    AUDIO_SET_QOS: rn,
    MEDIA_ENGINE_DEVICES: nV,
    AUDIO_VOLUME_CHANGE: nH,
    AUDIO_RESET: rr,
    AUDIO_INPUT_DETECTED: ri,
    AUDIO_SET_SUBSYSTEM: rh,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rm,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rS,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rI,
    MEDIA_ENGINE_PERMISSION: rv,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rA,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nZ,
    MEDIA_ENGINE_INTERACTION_REQUIRED: nB,
    USER_SETTINGS_MODAL_INIT: rN,
    USER_SETTINGS_MODAL_SET_SECTION: rN,
    CERTIFIED_DEVICES_SET: rP,
    RPC_APP_CONNECTED: ry,
    RPC_APP_DISCONNECTED: rO,
    OVERLAY_INITIALIZE: nb,
    APP_STATE_UPDATE: rD,
    SET_CHANNEL_BITRATE: rx,
    SET_VAD_PERMISSION: ra,
    SET_NATIVE_PERMISSION: ro,
    SET_CHANNEL_VIDEO_QUALITY_MODE: rM,
    MEDIA_ENGINE_SET_AEC_DUMP: rR,
    MEDIA_ENGINE_RESET_SETTINGS: rw,
    CHANNEL_DELETE: rL,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rj,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rk,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rU,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rG,
    USER_SETTINGS_PROTO_UPDATE: nA,
    CLIPS_INIT: rT,
    CLIPS_SETTINGS_UPDATE: rC,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rZ,
    VOICE_FILTER_REQUEST_SWITCH: rf,
    VOICE_FILTER_LOOPBACK_TOGGLE: rd,
    VOICE_FILTER_APPLIED: r_,
    VOICE_FILTER_DOWNLOAD_FAILED: rp,
    VOICE_FILTER_APPLY_FAILED: rp,
}));
