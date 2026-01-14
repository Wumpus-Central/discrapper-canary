let r, i, a, o, s, l, c, u;
n.d(t, { Z: () => rq }), n(388685), n(953529), n(457542), n(539854), n(642613), n(49124), n(337869);
var d,
    f = n(512722),
    p = n.n(f),
    _ = n(392711),
    m = n.n(_),
    h = n(209739),
    g = n.n(h),
    E = n(404097),
    b = n(442837),
    y = n(46973),
    O = n(433517),
    v = n(846519),
    S = n(570140),
    I = n(579806),
    T = n(887278),
    C = n(547727),
    A = n(435064),
    N = n(779618),
    P = n(341569),
    R = n(710845),
    w = n(535911),
    D = n(458725),
    x = n(353926),
    L = n(646047),
    j = n(594190),
    M = n(502286),
    k = n(883794),
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
    ea = n(64267),
    eo = n(615830),
    es = n(725380),
    el = n(383451),
    ec = n(581883),
    eu = n(875527),
    ed = n(420439),
    ef = n(626135),
    ep = n(12647),
    e_ = n(70956),
    em = n(358085),
    eh = n(747268),
    eg = n(960048),
    eE = n(998502),
    eb = n(13140),
    ey = n(314897),
    eO = n(967368),
    ev = n(463395),
    eS = n(592125),
    eI = n(19780),
    eT = n(704806),
    eC = n(594174),
    eA = n(631768),
    eN = n(981631),
    eP = n(70722),
    eR = n(761274),
    ew = n(526761),
    eD = n(345655),
    ex = n(65154),
    eL = n(388032);
function ej(e, t, n) {
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
function eM(e) {
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
                ej(e, t, n[t]);
            });
    }
    return e;
}
function ek(e, t) {
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
function eU(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ek(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eG = new R.Z("MediaEngineStore"),
    eZ = "MediaEngineStore",
    eF = 4,
    eB = 1,
    eV = 1,
    eH = 1,
    eY = 0.5,
    eW = {
        left: 1,
        right: 1,
    },
    eK = 500,
    ez = 5 * e_.Z.Millis.SECOND,
    eq = -60,
    eQ = 100,
    eX = 2 * e_.Z.Millis.SECOND,
    eJ = 30 * e_.Z.Millis.SECOND,
    e$ = !0,
    e0 = "deep_noise_suppression",
    e1 = 0;
function e3() {
    return {
        mode: eN.pM4.VOICE_ACTIVITY,
        modeOptions: {
            threshold: eq,
            autoThreshold: em.isPlatformEmbedded || __OVERLAY__,
            vadUseKrisp: !0,
            vadKrispActivationThreshold: eY,
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
        inputVolume: ex.Qx,
        outputVolume: ex.Qx,
        inputDeviceId: ex.w5,
        outputDeviceId: ex.w5,
        videoDeviceId: ex.w5,
        qos: !1,
        qosMigrated: !1,
        videoHook: e4.supports(ex.AN.VIDEO_HOOK),
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
let e2 = {
        [eD._.CUSTOM]: {},
        [eD._.VOICE_ISOLATION]: {
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
        [eD._.STUDIO]: {
            mode: eN.pM4.VOICE_ACTIVITY,
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
    e4 = (0, y.Mt)((0, y.jj)());
eG.enableNativeLogger(!0);
let e5 = {},
    e8 = new Set([ex.Yn.DEFAULT]),
    e6 = e4.supports(ex.AN.AUTO_ENABLE),
    e7 = !1,
    e9 = ex.Yn.STREAM,
    te = performance.now(),
    tt = { [ex.w5]: nf("No Input Devices") },
    tn = { [ex.w5]: nf("No Output Devices") },
    tr = { [ex.w5]: nf("No Video Devices") },
    ti = new v.V7(),
    ta = !1,
    to = !1,
    ts = !1,
    tl = !1,
    tc = !1,
    tu = ex.Av,
    td = ex.Av,
    tf = !1,
    tp = !1,
    t_ = !1,
    tm = new v.V7(),
    th = !1,
    tg = !1,
    tE = null,
    tb = !1,
    ty = !1,
    tO = !1,
    tv = !1,
    tS = !1,
    tI = [],
    tT = !1,
    tC = null,
    tA = null,
    tN = null,
    tP = null,
    tR = null,
    tw = !1,
    tD = !1,
    tx = !1,
    tL = null,
    tj = null,
    tM = !1,
    tk = !1;
er.Z.hasPermission(eR.Eu.AUDIO, { showAuthorizationError: !1 }),
    er.Z.hasPermission(eR.Eu.CAMERA, { showAuthorizationError: !1 });
let tU = !1,
    tG = new Set(),
    tZ = tU,
    tF = new Set(),
    tB = {},
    tV = null,
    tH = !0,
    tY = !1,
    tW = !1,
    tK = !1,
    tz = !1;
function tq() {
    var e, t;
    return null != (t = null == (e = eC.default.getCurrentUser()) ? void 0 : e.isStaff()) && t
        ? "always"
        : eh.Z === E.R.CANARY
          ? "permittedDevicesOnly"
          : "never";
}
async function tQ() {
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
function tX() {
    return null != tj
        ? tj
        : "undefined" != typeof window
          ? (tj = tQ().then((e) => ((tL = e), e)))
          : Promise.resolve(!1);
}
function tJ() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.Yn.DEFAULT,
        t = e5[e];
    return null == t && ((t = e3()), (e5[e] = t)), t;
}
function t$() {
    var e, t, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.Yn.DEFAULT,
        i = tJ(r),
        a = e2[null != (e = i.activeInputProfile) ? e : eD._.CUSTOM],
        o = eM({}, null != (t = i.modeOptions) ? t : {}, null != (n = a.modeOptions) ? n : {});
    if (
        (null == o.vadDuringPreProcess && (o.vadDuringPreProcess = (0, J.C)({ location: "getSettings" }).enabled),
        (null == o.vadKrispActivationThreshold && !0 === a.automaticGainControl) || !0 === i.automaticGainControl)
    ) {
        let e = (0, k.U)({ location: "getSettings" });
        null != e.vadKrispActivationThreshold && (o.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return eU(eM({}, i, a), { modeOptions: o });
}
function t0(e) {
    var t, n;
    let r = t$(e.context),
        i = r.mode;
    e.context === ex.Yn.DEFAULT &&
        ((0, el.f)({
            location: "setInputMode",
            autoTrackExposure: !1,
        }).enableLatching &&
            i === eN.pM4.PUSH_TO_TALK &&
            r.modeOptions.pttLatchingEnabled &&
            (i = eN.pM4.VOICE_ACTIVITY),
        (0, Q.I)(!1, !1, !1)),
        e.setInputMode(i, {
            vadThreshold: r.modeOptions.threshold,
            vadAutoThreshold: r.modeOptions.autoThreshold,
            vadUseKrisp: r.modeOptions.vadUseKrisp && rf(),
            vadKrispActivationThreshold: null != (t = r.modeOptions.vadKrispActivationThreshold) ? t : eY,
            vadLeading: r.modeOptions.vadLeading,
            vadTrailing: r.modeOptions.vadTrailing,
            vadDuringPreProcess: null != (n = r.modeOptions.vadDuringPreProcess) && n,
            pttReleaseDelay: Math.round(r.modeOptions.delay),
        });
}
function t1(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ex.Qx;
    return m().clamp(e, 0, t);
}
function t3(e) {
    let t = t$(e.context),
        n = !e6 || t.mute || t.deaf;
    e.context === ex.Yn.DEFAULT
        ? (n = n || ta || to || ts || !er.Z.didHavePermission(eR.Eu.AUDIO))
        : e.context === ex.Yn.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === ex.Yn.DEFAULT && C.Z.updateNativeMute();
}
function t2(e) {
    e !== e9 && (null != a && e4.setGoLiveSource(null, e9), (e9 = e));
}
function t4() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tc,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        s = a;
    if (
        ((null == s ? void 0 : s.desktopSource) != null &&
            s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? void 0 : e.id) &&
            (null != s.desktopSource.soundshareId && (0, em.isWindows)() && T.pn(s.desktopSource.soundshareId),
            e4.setGoLiveSource(null, e9)),
        (null == s ? void 0 : s.cameraSource) != null &&
            (s.cameraSource.videoDeviceGuid !==
                (null == o || null == (t = o.cameraSource) ? void 0 : t.videoDeviceGuid) ||
                s.cameraSource.audioDeviceGuid !==
                    (null == o || null == (n = o.cameraSource) ? void 0 : n.audioDeviceGuid)) &&
            e4.setGoLiveSource(null, e9),
        tc || i)
    ) {
        let e = t$().videoDeviceId;
        tc && e === ex.w5 && td === ex.w5 && tu !== ex.Av ? (e = tu) : (td = e),
            (tu = (tc = i) ? n_(tr, e) : ex.Av),
            e4.setVideoInputDevice(tu);
    }
    if (((a = o), null != o)) {
        let e = {
            resolution: o.quality.resolution,
            frameRate: o.quality.frameRate,
        };
        if (null != o.desktopSource) {
            let t = tq(),
                n = t$().videoHook,
                i = nt(),
                a = i ? (nn() ? eP.zj : eP.ZM) : 0,
                s = (0, em.isWindows)() && (0, $.t)("updateVideo").enabled;
            e4.setGoLiveSource(
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
                        allowScreenCaptureKit: nr(),
                        videoHookStaleFrameTimeoutMs: eK,
                        graphicsCaptureStaleFrameTimeoutMs: ez,
                        hdrCaptureMode: t,
                        enableGlobalFramePoolLock: (0, Y.T)({ location: "updateVideo" }).enabled,
                    },
                    quality: e,
                },
                e9,
            );
        }
        null != o.cameraSource &&
            e4.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: o.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                e9,
            );
    }
}
function t5(e) {
    switch (e) {
        case ex.H3.CPU_OVERUSE:
            return D.Nk.NoiseCancellerCpuOveruse;
        case ex.H3.FAILED:
            return D.Nk.NoiseCancellerFailed;
        case ex.H3.VAD_CPU_OVERUSE:
            return D.Nk.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function t8(e) {
    let t = (0, k.U)({
        location: "getAutomaticGainControlConfig",
        disable: !e,
    }).noiseCancellationConfig;
    return eM({ enabled: e }, t);
}
function t6(e, t) {
    e.setAutomaticGainControl(t8(t));
}
function t7(e, t) {
    let n = (0, ea.Z)(t, r.getSystemMicrophoneMode(), { location: "setNoiseCancellation" });
    n !== t && eG.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: i } = (0, k.U)({
        location: "setNoiseCancellation",
        disable: !t,
    });
    e.setNoiseCancellationDuringProcessing(i);
    let { noiseCancellationAfterProcessing: a, vadAfterWebrtc: o } = (0, z.$)({ location: "setNoiseCancellation" });
    e.setNoiseCancellationAfterProcessing(a), e.setVADAfterWebrtc(o);
}
function t9(e) {
    let t = t$(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(ev.Z.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(ev.Z.hasNoiseSuppression(n) || t.noiseSuppression),
        t6(e, ev.Z.hasAutomaticGainControl(n) || t.automaticGainControl),
        t7(e, t.noiseCancellation),
        e.setVoiceFilterId(tC),
        (0, em.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function ne() {
    ti.start(eJ, () => {
        eG.error("Device enumeration timed out"), ef.default.track(eN.rMx.DEVICE_ENUMERATION_TIMEOUT, {});
    }),
        e4.on(y.aB.Connection, (e) => {
            t0(e), t3(e), t9(e);
            let t = t$();
            e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
                e.setQoS(t.qos);
            let n = (0, K.D)({ location: "setupMediaEngine" }).treatment;
            (tM = n === K.$.NoSoftwareDecodeWithFallback),
                n === K.$.NoSoftwareDecode || n === K.$.NoSoftwareDecodeWithFallback
                    ? (e.setExperimentFlag(ex.V8.H265_HARDWARE_ONLY, !0),
                      (0, em.isWindows)()
                          ? tX().then((t) => {
                                e.setExperimentFlag(ex.V8.H265_HARDWARE_DECODE_AVAILABLE, t);
                            })
                          : (0, em.isMac)() && e.setExperimentFlag(ex.V8.H265_HARDWARE_DECODE_AVAILABLE, !0))
                    : n === K.$.Disabled &&
                      (e.setExperimentFlag(ex.V8.H265_HARDWARE_ONLY, !0),
                      e.setExperimentFlag(ex.V8.H265_HARDWARE_DECODE_AVAILABLE, !1));
            let i = eI.Z.getGuildId(),
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
            o && e.setExperimentFlag(ex.V8.MUTE_BEFORE_PROCESSING, !0),
                s && e.setExperimentFlag(ex.V8.PTT_BEFORE_PROCESSING, !0),
                l && e.setExperimentFlag(ex.V8.SKIP_ENCODE, !0),
                (0, q.J)({ location: "setupMediaEngine" }).enabled &&
                    e.setExperimentFlag(ex.V8.LOW_LATENCY_RATE_CONTROL, !0);
            let c = !1,
                u = !0;
            if (
                (e.setExperimentFlag(ex.V8.RESET_DECODER_ON_ERRORS, !0),
                c && e.setExperimentFlag(ex.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0),
                u && e.setExperimentFlag(ex.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0),
                e.context === ex.Yn.STREAM)
            ) {
                let t = nh(tn);
                e.setSoundshareDiscardRearChannels(t);
                let { simulcastEnabled: n, lqStreamBitrate: r } = W.Z.getConfig();
                e.configureGoLiveSimulcast(n, r);
            }
            if (
                ((0, em.isWindows)()
                    ? e.setExperimentFlag(ex.V8.SIGNAL_AV1, !0)
                    : ((0, em.isMac)() || (0, em.isLinux)()) && e.setExperimentFlag(ex.V8.SIGNAL_AV1_DECODE, !0),
                (0, em.isWindows)() && e.setExperimentFlag(ex.V8.SIGNAL_AV1_HARDWARE_DECODE, !0),
                (0, em.isWeb)())
            ) {
                let { enabled: t } = (0, H.A)("MediaEngineStore");
                e.setExperimentFlag(ex.V8.BROWSER_HEVC, t);
            }
            if (
                ((0, em.isWindows)() &&
                    (null == tV ? void 0 : tV.startsWith("AMD")) &&
                    (0, et.C)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(ex.V8.WMF_GPU_ENCODE, !0),
                (0, em.isWindows)() &&
                    (null == tV ? void 0 : tV.startsWith("Qualcomm")) &&
                    (0, et.C)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(ex.V8.WMF_GPU_ENCODE, !0),
                e4.setHasFullbandPerformance((0, w.Z)()),
                e.setRemoteAudioHistory(1000),
                (0, N.Z)(r))
            ) {
                let { enableViewerClipping: t } = ee.Z.getCurrentConfig(
                    { location: "f627ab_15" },
                    { autoTrackExposure: !1 },
                );
                e.setViewerSideClip(t), e.setClipsKeyFrameInterval(ex.ux);
            }
            for (let n of ((t = t$(e.context)), e.setPostponeDecodeLevel(eQ), Object.keys(t.localMutes)))
                n !== ey.default.getId() && e.setLocalMute(n, t.localMutes[n]);
            for (let n of Object.keys(t.localVolumes))
                n !== ey.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
            for (let n of Object.keys(t.localPans)) {
                let r = t.localPans[n];
                e.setLocalPan(n, r.left, r.right);
            }
            for (let n of Object.keys(t.disabledLocalVideos)) e.setLocalVideoDisabled(n, t.disabledLocalVideos[n]);
            e.on(y.Sh.Speaking, (t, n, r, i) => {
                S.Z.dispatch({
                    type: "SPEAKING",
                    context: e.context,
                    userId: t,
                    speakingFlags: n,
                    voiceDb: i,
                });
            }),
                e.context === ex.Yn.DEFAULT &&
                    ((tp = !1),
                    (t_ = !1),
                    e.on(y.Sh.SpeakingWhileMuted, () => {
                        (tp = !0),
                            (t_ = !0),
                            r.emitChange(),
                            tm.stop(),
                            tm.start(eX, () => {
                                (t_ = !1), r.emitChange();
                            });
                    })),
                e.on(y.Sh.DesktopSourceEnd, (t, n) => {
                    S.Z.dispatch({
                        type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                        settings: { context: e.context },
                        endReason: t,
                        errorCode: n,
                    });
                }),
                e.on(y.Sh.InteractionRequired, (e) => {
                    S.Z.dispatch({
                        type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
                        required: e,
                    });
                }),
                e.on(y.Sh.VideoHookInitialize, (e, t, n, r, i, o) => {
                    (null == a ? void 0 : a.desktopSource) != null &&
                        ef.default.track(
                            eN.rMx.VIDEOHOOK_INITIALIZED,
                            eM(
                                {
                                    backend: e,
                                    format: t,
                                    framebuffer_format: n,
                                    sample_count: r,
                                    success: i,
                                    reinitialization: o,
                                },
                                (0, M.Z)(null == a ? void 0 : a.desktopSource),
                            ),
                        );
                }),
                e.on(y.Sh.NoiseCancellationError, (e) => {
                    eG.warn("noisecancellererror event: ".concat(e)),
                        (0, D.kr)({
                            type: D.u.NOISE_CANCELLER_ERROR,
                            underlyingError: t5(e),
                        }),
                        (tw = !0),
                        ef.default.track(eN.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                        S.Z.dispatch({
                            type: "AUDIO_SET_NOISE_SUPPRESSION",
                            enabled: !0,
                        }),
                        S.Z.dispatch({
                            type: "AUDIO_SET_NOISE_CANCELLATION",
                            enabled: !1,
                        }),
                        S.Z.dispatch({
                            type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR",
                            code: e,
                        });
                }),
                e.on(y.Sh.VoiceActivityDetectorError, (e) => {
                    eG.warn("voiceactivitydetectorerror event: ".concat(e)),
                        (0, D.kr)({
                            type: D.u.NOISE_CANCELLER_ERROR,
                            underlyingError: t5(e),
                        }),
                        ef.default.track(eN.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                        S.Z.dispatch({
                            type: "AUDIO_SET_MODE",
                            context: ex.Yn.DEFAULT,
                            mode: eN.pM4.VOICE_ACTIVITY,
                            options: eU(eM({}, t$(ex.Yn.DEFAULT).modeOptions), { vadUseKrisp: !1 }),
                        }),
                        S.Z.dispatch({
                            type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
                            code: e,
                        });
                }),
                e.on(y.Sh.SdpError, (e, t, n, r) => {
                    ef.default.track(eN.rMx.SDP_ERROR, {
                        operation: e,
                        error: t,
                        type: n,
                        sdp: r,
                    });
                }),
                e.on(y.Sh.VideoState, (t) => {
                    S.Z.dispatch({
                        type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED",
                        videoState: t,
                        context: e.context,
                    });
                }),
                e.setBitRate(eO.Z.bitrate),
                e.applyVideoQualityMode(eA.Z.mode),
                e4.supports(ex.AN.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                    e4.setAsyncVideoInputDeviceInit((0, Z.p)("setupMediaEngine").enabled);
        }),
        e4.on(y.aB.DeviceChange, (e, t, n) => {
            ti.stop(),
                S.Z.dispatch({
                    type: "MEDIA_ENGINE_DEVICES",
                    inputDevices: e,
                    outputDevices: t,
                    videoDevices: n,
                });
        }),
        e4.on(y.aB.VolumeChange, (e, t) => {
            S.Z.dispatch({
                type: "AUDIO_VOLUME_CHANGE",
                inputVolume: e,
                outputVolume: t,
            });
        }),
        e4.on(y.aB.DesktopSourceEnd, (e, t) => {
            S.Z.dispatch({
                type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                settings: null,
                endReason: e,
                errorCode: t,
            });
        }),
        e4.on(y.aB.AudioPermission, (e) => {
            (tk = !0),
                S.Z.dispatch({
                    type: "MEDIA_ENGINE_PERMISSION",
                    kind: "audio",
                    granted: e,
                });
        }),
        e4.on(y.aB.VideoPermission, (e) => {
            S.Z.dispatch({
                type: "MEDIA_ENGINE_PERMISSION",
                kind: "video",
                granted: e,
            });
        }),
        e4.on(y.aB.WatchdogTimeout, async () => {
            let e;
            try {
                await ep.Z.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
            } catch (t) {
                "number" == typeof t.status && (e = t.status);
            }
            eG.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)),
                ef.default.track(eN.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        e4.on(y.aB.VideoInputInitialized, (e) => {
            ef.default.track(eN.rMx.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired
                    ? null
                    : Math.round(e.timeToFirstFrame * e_.Z.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: eI.Z.getMediaSessionId(),
                rtc_connection_id: eI.Z.getRTCConnectionId(),
            });
        }),
        e4.on(y.aB.AudioInputInitialized, (e) => {
            ef.default.track(eN.rMx.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * e_.Z.Millis.SECOND),
                rtc_connection_id: eI.Z.getRTCConnectionId(),
            });
        }),
        e4.on(y.aB.ClipsRecordingRestartNeeded, () => {
            S.Z.dispatch({ type: "CLIPS_RESTART" });
        }),
        e4.on(y.aB.ClipsInitFailure, (e, t) => {
            S.Z.wait(() => {
                S.Z.dispatch({
                    type: "CLIPS_INIT_FAILURE",
                    errMsg: e,
                    applicationName: t,
                });
            });
        }),
        e4.on(y.aB.ClipsRecordingEnded, (e, t) => {
            var n, r;
            (null == o || null == (n = o.desktopSource) ? void 0 : n.id) === e &&
                (null != t && (null == a || null == (r = a.desktopSource) ? void 0 : r.soundshareId) !== t && T.pn(t),
                (o = null));
        }),
        e4.on(y.aB.NativeScreenSharePickerUpdate, (e, t) => {
            S.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE",
                existing: e,
                content: t,
            });
        }),
        e4.on(y.aB.NativeScreenSharePickerCancel, (e) => {
            S.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL",
                existing: e,
            });
        }),
        e4.on(y.aB.NativeScreenSharePickerError, (e) => {
            S.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_ERROR",
                error: e,
            });
        }),
        e4.on(y.aB.AudioDeviceModuleError, (e, t, n) => {
            ef.default.track(eN.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                audio_device_module: e,
                code: t,
                device_name: n,
            });
        }),
        e4.on(y.aB.VideoCodecError, (e) => {
            let t = "encode" === e.mode ? D.u.VIDEO_ENCODE_ERROR : D.u.VIDEO_DECODE_ERROR,
                n = {
                    videoCodec: e.codecStandard,
                    errorMessage: e.message,
                };
            (0, D.kr)(
                t === D.u.VIDEO_ENCODE_ERROR
                    ? eU(eM({ type: t }, n), { videoEncoder: e.implName })
                    : eU(eM({ type: t }, n), { videoDecoder: e.implName }),
            );
        }),
        e4.on(y.aB.ConnectionStats, (e) => {
            S.Z.dispatch({
                type: "MEDIA_ENGINE_CONNECTION_STATS",
                connectionStats: e.map((e) => {
                    let { stats: t, connection: n } = e;
                    return {
                        stats: t,
                        mediaEngineConnectionId: n.mediaEngineConnectionId,
                        version: e1++,
                        context: n.context,
                    };
                }),
            });
        }),
        e4.on(y.aB.VoiceQueueMetrics, (e) => {
            let t = rz(e);
            null !== t && ef.default.track(eN.rMx.VOICE_QUEUE_METRICS, t);
        }),
        e4.setOnVideoContainerResized((e, t, n) => {
            S.Z.wait(() =>
                S.Z.dispatch({
                    type: "VIDEO_SIZE_UPDATE",
                    streamId: e,
                    dimensions: {
                        width: t,
                        height: n,
                    },
                }),
            );
        }),
        n3(),
        n4(),
        e4.supports(ex.AN.ASYNC_CLIPS_SOURCE_DEINIT) &&
            e4.setAsyncClipsSourceDeinit((0, F.C)("setupMediaEngine").enabled),
        no.reset(),
        (0, eT.q)().then((e) => {
            null != e && (tV = e.gpu_brand);
        }),
        e4.on(y.aB.SystemMicrophoneModeChange, (e) => {
            (u = e), e4.eachConnection(t9);
        });
}
function nt() {
    return (0, em.isWindows)() && g().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eP.c5);
}
function nn() {
    return (0, em.isWindows)() && g().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eP.sN);
}
function nr() {
    return (
        (0, em.isMac)() &&
        e4.supports(ex.AN.SCREEN_CAPTURE_KIT) &&
        g().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eP.C7)
    );
}
function ni() {
    return (
        (0, em.isWindows)() &&
        e4.supports(ex.AN.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        e4.supports(ex.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function na() {
    return e4.supports(ex.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
let no = new (class {
    start() {
        this.started || ((this.started = !0), e4.on(y.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout &&
                (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            e4.removeListener(y.aB.Silence, this.handleSilence),
            S.Z.dispatch({
                type: "AUDIO_INPUT_DETECTED",
                inputDetected: null,
            }));
    }
    update() {
        let e = t$();
        !tb && eI.Z.getState() === eN.hes.RTC_CONNECTED && e.mode === eN.pM4.VOICE_ACTIVITY && e.silenceWarning
            ? this.start()
            : this.stop();
    }
    reset() {
        this.stop(), this.update();
    }
    constructor() {
        ej(this, "stateChangeTimeout", void 0),
            ej(this, "noVoiceTimeout", 5000),
            ej(this, "voiceTimeout", 1500),
            ej(this, "started", !1),
            ej(this, "handleSilence", (e) => {
                let t = !e;
                null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout),
                    (this.stateChangeTimeout = setTimeout(
                        () => {
                            (this.stateChangeTimeout = null),
                                this.started &&
                                    (S.Z.dispatch({
                                        type: "AUDIO_INPUT_DETECTED",
                                        inputDetected: t,
                                    }),
                                    e && (ty = !0));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout,
                    ));
            });
    }
})();
function ns() {
    var e;
    let t = O.K.get("audio");
    null != t && (O.K.set(eZ, { [ex.Yn.DEFAULT]: t }), O.K.remove("audio")),
        (e5 = null != (e = O.K.get(eZ)) ? e : {}),
        m().each(e5, (e) => {
            if (
                (m().defaultsDeep(e, e3()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, eb.Kd)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== eF &&
                    ((e.vadUseKrispSettingVersion = eF), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                !e.vadThrehsoldMigrated)
            ) {
                var t;
                (e.vadThrehsoldMigrated = !0),
                    (null == (t = e.modeOptions) ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = eq);
            }
            e4.supports(ex.AN.SIDECHAIN_COMPRESSION) &&
                e.sidechainCompressionSettingVersion < eH &&
                ((e.sidechainCompressionSettingVersion = eH), (e.sidechainCompression = !0)),
                (0, em.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== eV &&
                      ((e.ncUseKrispjsSettingVersion = eV), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== eB &&
                      ((e.ncUseKrispSettingVersion = eB), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
        }),
        nu();
}
function nl(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ex.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = tJ(t);
    return Object.assign(r, e), !__OVERLAY__ && n && O.K.set(eZ, e5), r;
}
function nc() {
    O.K.remove(eZ), location.reload();
}
function nu() {
    let e = t$();
    e4.setAudioInputDevice(e.inputDeviceId),
        e4.setAudioOutputDevice(e.outputDeviceId),
        t4(),
        e4.setInputVolume(e.inputVolume),
        e4.setOutputVolume(e.outputVolume),
        e4.setAecDump(e.aecDumpEnabled),
        e4.setSidechainCompression(e.sidechainCompression),
        e4.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        e4.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing);
}
function nd() {
    e6 ||
        e4.enable().then(() =>
            S.Z.dispatch({
                type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
                enabled: !0,
                unmute: !1,
            }),
        );
}
function nf(e) {
    return {
        id: ex.w5,
        index: 0,
        name: e,
        disabled: !0,
        guid: void 0,
        hardwareId: void 0,
        containerId: void 0,
    };
}
function np(e, t) {
    if (0 === e.length) {
        let e = nf(t);
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
function n_(e, t) {
    var n, r;
    let i = null != (r = null != (n = e[t]) ? n : e[ex.w5]) ? r : m()(e).values().first();
    return null != i ? i.id : t;
}
function nm(e) {
    let t = tt;
    if (((tt = np(e, eL.intl.string(eL.t["/QIjDA"]))), !m().isEqual(tt, t))) {
        let e = t$(),
            t = n_(tt, e.inputDeviceId);
        e4.setAudioInputDevice(t), e4.eachConnection(t9);
    }
}
function nh(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function ng(e) {
    e4.eachConnection((t) => {
        t.context === ex.Yn.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function nE(e) {
    let t = tn;
    if (((tn = np(e, eL.intl.string(eL.t.xlUg0v))), !m().isEqual(tn, t))) {
        let e = t$(),
            n = n_(tn, e.outputDeviceId);
        e4.setAudioOutputDevice(n);
        let r = nh(t),
            i = nh(tn);
        r !== i && ng(i);
    }
}
function nb(e) {
    tg = e.length > 0;
    let t = tr;
    if (((tr = np(e, eL.intl.string(eL.t.WKWARY))), tc && !m().isEqual(tr, t))) {
        var n;
        let e = void 0 !== tr[tu],
            r = tu === ex.w5 && (null == (n = t[ex.w5]) ? void 0 : n.disabled);
        t4(e || r);
    }
}
function ny() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        r =
            null != (e = ec.Z.settings.audioContextSettings)
                ? e
                : {
                      user: {},
                      stream: {},
                  };
    for (let e of Object.keys(r)) {
        let i = e === ew.u0.USER ? ex.Yn.DEFAULT : ex.Yn.STREAM,
            a = i === ex.Yn.STREAM ? ex.Yh : ex.Qx,
            o = null != (t = r[e]) ? t : {},
            { localMutes: s, localVolumes: l } = t$(i);
        for (let [e, t] of Object.entries(o))
            null == (0, es.Ky)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== a ? (l[e] = t.volume) : delete l[e],
                e4.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (n)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == o[e] &&
                    (delete s[e],
                    delete l[e],
                    e4.eachConnection((t) => {
                        t.setLocalVolume(e, a), t.setLocalMute(e, !1);
                    }, i));
        nl(
            {
                localMutes: s,
                localVolumes: l,
            },
            i,
        );
    }
}
function nO(e) {
    if (null == r)
        return (
            eG.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
            {
                soundshareId: null,
                soundshareSession: "",
            }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : ep.Z.getAudioPid(e),
            n = "";
        return (
            null != t && (n = ep.Z.generateSessionFromPid(t)),
            {
                soundshareId: t,
                soundshareSession: n,
            }
        );
    }
}
function nv(e, t) {
    (0, em.isWindows)() &&
        e > 1 &&
        T.YT(e, { soundshare_session: t }).then((t) => {
            null == t ||
                j.ZP.shouldContinueWithoutElevatedProcessForPID(e) ||
                S.Z.wait(() => {
                    S.Z.dispatch({
                        type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                        errorMessage: t,
                    });
                });
        });
}
function nS(e) {
    (i = e.sessionId), (ta = !1), (tl = !1);
    let t = t$();
    if (
        (ni() && (na() ? rv(ex.iA.AUTOMATIC) : t.automaticAudioSubsystem && rS()),
        e4.supports(ex.AN.OFFLOAD_ADM_CONTROLS))
    ) {
        let e = !1;
        (0, em.isDesktop)()
            ? (e = (0, U.E)({ location: "handleConnectionOpen" }).enabled)
            : ((0, em.isIOS)() || (0, em.isAndroid)()) && (e = (0, G.W)({ location: "handleConnectionOpen" }).enabled),
            e4.setOffloadAdmControls(e);
    }
    (0, eu.wt)({
        location: "MediaEngineStore",
        autoTrackExposure: !1,
    }) &&
        null !== t.mostRecentlyRequestedVoiceFilter &&
        (0, em.isDesktop)() &&
        (ed.Z.getLastInitAttemptMayHaveCrashed()
            ? (S.Z.dispatch({
                  type: "AUDIO_SET_SELF_MUTE",
                  mute: !0,
                  context: ex.Yn.DEFAULT,
                  playSoundEffect: !0,
              }),
              nl({ mostRecentlyRequestedVoiceFilter: null }))
            : n(358820).r5()),
        ny();
}
function nI(e) {
    let { mediaEngineState: t } = e;
    (e5 = t.settingsByContext),
        (tt = t.inputDevices),
        (tn = t.outputDevices),
        (tB = t.appSupported),
        (tS = t.krispModuleLoaded),
        (s = t.krispVersion),
        (e9 = t.goLiveContext);
}
function nT() {
    i = null;
}
function nC() {
    if ((0, em.isWeb)()) {
        let e = X.NJ.getCurrentConfig({ location: "MediaEngineStore handlePostConnectionOpen" });
        e.loadWasmModule && e.preload && r.startDavePreload();
    }
    return !1;
}
function nA(e) {
    switch (e.state) {
        case eN.hes.CONNECTING:
            nd();
            break;
        case eN.hes.RTC_CONNECTING:
            (tb = !1), (ty = !1);
            break;
        case eN.hes.RTC_CONNECTED:
            t4();
            break;
        case eN.hes.DISCONNECTED:
            nM(), nk();
    }
    no.update();
}
function nN(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (ta = t.mute || t.suppress), (tl = t.deaf), e4.eachConnection(t3);
            let e = null != t.guildId && null != t.channelId && null != tR && tR !== t.channelId,
                n = !tO && null == t.channelId;
            return t4(!e && !n && tc), (tR = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== ey.default.getId() || null != eI.Z.getChannelId() || t4(!1, null), e;
    }, !1);
}
function nP(e) {
    let { mute: t } = e;
    (to = t), e4.eachConnection(t3);
}
function nR(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = t$(t);
    if (t === ex.Yn.DEFAULT && (er.Z.requestPermission(eR.Eu.AUDIO), ts)) return !1;
    (r = !i && !r) || (i = !1),
        n || (tf = !0),
        nl(
            {
                mute: r,
                deaf: i,
            },
            t,
        ),
        e4.eachConnection(t3);
}
function nw(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    nl({ mute: n }, t), r || (tf = !0), e4.eachConnection(t3);
}
function nD(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== ew.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    ny(!0);
}
function nx(e) {
    let { context: t } = e;
    nl({ deaf: !t$(t).deaf }, t), e4.eachConnection(t3);
}
function nL(e) {
    let { context: t, userId: n } = e;
    if (n === ey.default.getId()) return;
    let { localMutes: r } = t$(t);
    r[n] ? delete r[n] : (r[n] = !0),
        nl({ localMutes: r }, t),
        e4.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nj(e) {
    var t, n, r, i, a, o, s;
    let { context: l, userId: c, videoToggleState: u, persist: d, isAutomatic: f } = e;
    p()(!(d && f), "These are not allowed to both be true.");
    let _ = u === eN.ZUi.DISABLED,
        { disabledLocalVideos: m } = t$(l),
        h = null != (t = m[c]) && t,
        g = tG.has(c),
        E = u === eN.ZUi.AUTO_ENABLED || u === eN.ZUi.MANUAL_ENABLED;
    eG.info(
        "disableVideo="
            .concat(_, " currentlyDisabled=")
            .concat(h, " currentlyAutoDisabled=")
            .concat(g, ", isVideoShown=")
            .concat(E),
    ),
        p()(!(g && !h), "If you are auto-disabled, then you are also disabled.");
    let b = _ !== h,
        y = l === ex.Yn.DEFAULT,
        O = f && b && y,
        v = d && b && y;
    eG.info(
        "changed="
            .concat(b, " isDefaultContext=")
            .concat(y, " isUpdateCausedByVideoHealthManager=")
            .concat(O, " isManualToggleByUser=")
            .concat(v),
    );
    let { videoToggleStateMap: S } = t$(l);
    if (
        (S[c] === eN.ZUi.AUTO_PROBING &&
            u === eN.ZUi.AUTO_ENABLED &&
            (0, en.Z)(c, _ ? ex.fC.AUTO_DISABLE : ex.fC.AUTO_ENABLE, E),
        (S[c] = u),
        nl({ videoToggleStateMap: S }, l, d),
        u === eN.ZUi.AUTO_PROBING
            ? null == (n = eI.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, !0)
            : null == (r = eI.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, !1),
        tZ ||
            (eG.info("isAutoDisableAllowed=".concat(tZ, " - disabling VideoHealthManager")),
            null == (a = eI.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()),
        O)
    ) {
        if ((!_ && !g) || (_ && !tZ)) return;
        (0, en.Z)(c, _ ? ex.fC.AUTO_DISABLE : ex.fC.AUTO_ENABLE, E), _ ? tG.add(c) : tG.delete(c);
    } else
        v &&
            (g && !_
                ? (eG.info("disallowing auto-disable for this session because of manual override by user"),
                  (tZ = !1),
                  null == (s = eI.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(),
                  (0, en.Z)(c, ex.fC.MANUAL_REENABLE, E))
                : (0, en.Z)(c, _ ? ex.fC.MANUAL_DISABLE : ex.fC.MANUAL_ENABLE, E));
    y && !_ && tG.delete(c),
        _ ? (m[c] = !0) : delete m[c],
        nl({ disabledLocalVideos: m }, l, d),
        e4.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(c, null != (t = m[c]) && t);
        }, l);
}
function nM() {
    if (0 === tG.size) return;
    let e = ex.Yn.DEFAULT,
        { disabledLocalVideos: t } = t$(e);
    tG.forEach((n) => {
        p()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            e4.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tG.clear(),
        nl({ disabledLocalVideos: t }, e, !1);
}
function nk() {
    let e = ex.Yn.DEFAULT,
        { videoToggleStateMap: t } = t$(e);
    for (let [e, n] of Object.entries(t)) n === eN.ZUi.AUTO_PROBING && delete t[e];
    nl({ videoToggleStateMap: t }, e, !1);
}
function nU(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === ey.default.getId()) return;
    let i = t === ex.Yn.STREAM ? ex.Yh : ex.Qx,
        { localVolumes: a } = t$(t);
    r === i ? delete a[n] : (a[n] = r), nl({ localVolumes: a }, t), e4.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function nG(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: a } = t$(t);
    (a[n] = {
        left: r,
        right: i,
    }),
        nl({ localPans: a }, t),
        e4.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function nZ(e) {
    let { context: t, mode: n, options: r } = e;
    nl(
        {
            mode: n,
            modeOptions: r,
        },
        t,
    ),
        e4.eachConnection(t0),
        no.update();
}
function nF(e) {
    let { volume: t } = e;
    nl({ inputVolume: t1(t) }), e4.setInputVolume(t);
}
function nB(e) {
    let { volume: t } = e;
    nl({ outputVolume: t }), e4.setOutputVolume(t);
}
function nV(e) {
    let { id: t } = e;
    (t = n_(tt, t)),
        (te = performance.now()),
        nl({ inputDeviceId: t }),
        e4.setAudioInputDevice(t),
        e4.eachConnection(t9);
}
function nH(e) {
    let { id: t } = e;
    nl({ outputDeviceId: (t = n_(tn, t)) }), e4.setAudioOutputDevice(t);
}
function nY(e) {
    let { id: t } = e;
    nl({ videoDeviceId: (t = n_(tr, t)) }), t4();
}
function nW(e) {
    let { inputProfile: t } = e;
    nl({ activeInputProfile: t });
    let n = t$();
    e4.eachConnection((e) => {
        t0(e), t9(e);
    }),
        e4.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        no.update(),
        n2();
}
function nK(e) {
    return e7 !== e.required && ((e7 = e.required), e.required || e4.interact(), !0);
}
function nz(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    nm(t), nE(n), nb(r);
}
function nq(e) {
    let { inputVolume: t, outputVolume: n } = e;
    nl({
        inputVolume: t1(t),
        outputVolume: n,
    });
}
function nQ(e) {
    var t;
    let n = t$(),
        i = e4.getAudioSubsystem(),
        a = e4.getAudioLayer(),
        o = n_(tt, n.inputDeviceId),
        s = null == (t = tt[o]) ? void 0 : t.name,
        l = (0, ea.Z)(n.noiseCancellation, r.getSystemMicrophoneMode(), { location: "trackVoiceProcessing" });
    ef.default.track(eN.rMx.VOICE_PROCESSING, {
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
function nX(e) {
    let t = nl({ echoCancellation: e.enabled });
    e4.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), n2(), nQ(e.location);
}
function nJ(e) {
    n0(e.enabled);
}
function n$(e) {
    let t = nl({ sidechainCompressionStrength: e.strength });
    e4.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function n0(e) {
    let t = nl({ sidechainCompression: e });
    e4.setSidechainCompression(t.sidechainCompression);
}
function n1(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tF.add(n) : tF.delete(n), n3(), n2();
}
function n3() {
    let e = !tF.has("voice_filter_preview") && !tF.has("mic_test");
    e4.setMaybePreprocessMute(e);
}
function n2() {
    let e = t$(),
        t = tF.size > 0,
        n = e.inputDeviceId,
        r = ev.Z.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        a = ev.Z.hasNoiseSuppression(n) || e.noiseSuppression,
        o = t8(ev.Z.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation,
        l = null !== tC,
        c = tF.has("voice_filter") && 1 === tF.size;
    e4.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: a,
        automaticGainControlConfig: o,
        noiseCancellation: s,
        voiceFilters: l,
        loopbackUseAudioMode: c,
    });
}
async function n4() {
    var e, t, n, r;
    if (!e4.supports(ex.AN.VAAPI)) return;
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
        ((tK = !0), (tW = e4.supports(ex.AN.GAMESCOPE_CAPTURE)));
}
function n5(e) {
    let t = nl({ noiseSuppression: e.enabled });
    e4.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), n2(), nQ(e.location);
}
function n8(e) {
    let t = nl({ automaticGainControl: e.enabled });
    e4.eachConnection((e) => t6(e, t.automaticGainControl)), n2(), nQ(e.location);
}
function n6(e) {
    let t = nl({ noiseCancellation: e.enabled });
    e4.eachConnection((e) => t7(e, t.noiseCancellation)), n2(), nQ(e.location);
}
function n7(e) {
    ei.Z.setKrispModelOverride(e.model), (c = e.model), n2();
}
function n9(e) {
    var t;
    (0, em.isWeb)() || ((tT = e.enabled), null == (t = e4.setNoiseCancellationEnableStats) || t.call(e4, e.enabled));
}
function re(e) {
    nl({ silenceWarning: e.enabled }), no.update();
}
function rt(e) {
    e4.setDebugLogging(e.enabled);
}
function rn(e) {
    let { level: t } = e;
    (l = t), ei.Z.setKrispSuppressionLevel(t);
}
function rr(e) {
    nl({ videoHook: e.enabled });
}
function ri(e) {
    nl({ experimentalSoundshare2: e.enabled });
}
function ra(e) {
    let { enabled: t } = e;
    nl({ useSystemScreensharePicker: t });
}
function ro(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = nl({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r,
        });
    e4.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function rs(e) {
    let { enabled: t } = e;
    nl({ qos: t }), e4.eachConnection((e) => e.setQoS(t));
}
function rl() {
    nc();
}
function rc(e) {
    let { inputDetected: t } = e;
    (tE = t), !tb && tE && ((tb = !0), no.update());
}
function ru(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === ts) return !1;
    (ts = n), e4.eachConnection(t3);
}
function rd(e) {
    let { state: t, permissionType: n } = e,
        r = t === eR.PQ.ACCEPTED;
    switch (n) {
        case eR.Eu.AUDIO:
            (tk = !0), e4.eachConnection(t3);
            break;
        case eR.Eu.CAMERA:
            !r && tc && t4(!1);
            break;
        default:
            return !1;
    }
}
function rf() {
    return tS || !1;
}
async function rp() {
    try {
        var e, t, n, i;
        await eE.ZP.ensureModule("discord_krisp");
        let a = eE.ZP.requireModule("discord_krisp");
        (tS = !0),
            (s = null == (e = a.getSdkVersion) ? void 0 : e.call(a)),
            (l = null != (i = null == (t = a.getSuppressionLevel) ? void 0 : t.call(a)) ? i : 100),
            null == (n = a.getNcModels) ||
                n.call(a).then((e) => {
                    (tI = e), r.emitChange();
                }),
            r.emitChange();
    } catch (t) {
        eG.warn("Failed to load Krisp module: ".concat(t.message)), eg.Z.captureException(t);
        let e = ex.H3.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? ex.H3.INITIALIZED : n;
        }
        ef.default.track(eN.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), nl({ noiseCancellation: !1 });
    } finally {
        tv = !1;
    }
}
function r_() {
    return (0, em.isWindows)() || (0, em.isLinux)() || (0, em.isMac)();
}
function rm() {
    !r_() || __OVERLAY__ || tv || tS
        ? (0, em.isWeb)() && e4.supports(ex.AN.NOISE_CANCELLATION)
            ? ((tS = !0), r.emitChange())
            : (0, em.isWeb)() && nl({ noiseCancellation: !1 })
        : ((tv = !0), rp());
}
function rh(e) {
    let { enabled: t } = e;
    ef.default.track(eN.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != tC ? tC : null,
        enabled: t,
    }),
        nl({ voiceFilterPlaybackEnabled: t });
}
function rg(e) {
    let { newVoiceFilterId: t } = e;
    nl({ mostRecentlyRequestedVoiceFilter: t }), e4.eachConnection((e) => e.setVoiceFilterId(t));
}
function rE() {
    nl({ mostRecentlyRequestedVoiceFilter: null });
}
function rb(e) {
    let { voiceFilterId: t } = e;
    (tN = tC), (tP = tA), (tC = t), (tA = null === t ? null : Date.now());
}
function ry(e) {
    let t = e.bypassEnabled;
    nl({ bypassSystemInputProcessing: t }), e4.setAudioInputBypassSystemProcessing(t), nQ(e.location);
}
function rO(e) {
    rv(e.subsystem);
}
function rv(e) {
    e === ex.iA.AUTOMATIC
        ? (nl({ automaticAudioSubsystem: !0 }), rS())
        : (nl({ automaticAudioSubsystem: !1 }), e4.setAudioSubsystem(e));
}
function rS() {
    e4.queueAudioSubsystem(ex.iA.EXPERIMENTAL);
}
function rI(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && t4(i, null), null != t || null == n)) {
        tO = !1;
        return;
    }
    if (tO) return;
    tO = !0;
    let a = t$();
    (a.mute || a.deaf) &&
        (nl({
            deaf: !1,
            mute: !1,
        }),
        e4.eachConnection(t3));
}
function rT(e) {
    let { application: t } = e;
    e8.add(t.id);
}
function rC(e) {
    let { application: t } = e;
    e8.delete(t.id);
}
function rA(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (e6 = !1), e4.eachConnection(t3);
                break;
            case "video":
                t4(!1);
        }
}
function rN(e) {
    (e6 = e.enabled),
        e.unmute &&
            nl({
                mute: !1,
                deaf: !1,
            }),
        e4.eachConnection(t3);
}
function rP(e) {
    let { enabled: t } = e;
    er.Z.requestPermission(eR.Eu.CAMERA), t4(t);
}
function rR(e) {
    let { sourceId: t, applicationName: n, quality: i } = e;
    if (!(0, P.CY)() || null == I.Z) return !1;
    let a = null,
        s = null,
        l = ep.Z.getPidFromDesktopSource(t);
    ({ soundshareId: a, soundshareSession: s } = nO(l));
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
        (e4.setClipsSource(null),
        (0, em.isWindows)() && null != o.desktopSource.soundshareId && T.pn(o.desktopSource.soundshareId)),
        null != a && nv(a, s),
        (o = c);
    let u = tq(),
        d = t$().videoHook;
    e4.setClipsSource({
        desktopDescription: {
            id: o.desktopSource.id,
            soundshareId: o.desktopSource.soundshareId,
            useVideoHook: d,
            useGraphicsCapture: nt(),
            useCaptureDeviceForEncode: !1,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: nr(),
            videoHookStaleFrameTimeoutMs: eK,
            graphicsCaptureStaleFrameTimeoutMs: ez,
            hdrCaptureMode: u,
        },
        quality: i,
        applicationName: n,
    });
}
function rw(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((o = null), e4.setClipsSource(null));
}
function rD(e) {
    var t, n, r, i;
    let { settings: a } = e;
    if ((null == a ? void 0 : a.desktopSettings) != null) {
        let e = null,
            r = null,
            { sourceId: i, sound: o } = a.desktopSettings,
            s = null != (t = a.context) ? t : ex.Yn.DEFAULT,
            l =
                null != (n = a.qualityOptions)
                    ? n
                    : {
                          resolution: 720,
                          frameRate: 30,
                      },
            c = !1 === o ? null : ep.Z.getPidFromDesktopSource(i);
        em.isPlatformEmbedded &&
            !0 === o &&
            (({ soundshareId: e, soundshareSession: r } = nO(c)), null != e && nv(e, r)),
            t2(s),
            t4(s === ex.Yn.STREAM && tc, {
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
        let e = null != (r = a.context) ? r : ex.Yn.DEFAULT,
            { videoDeviceGuid: t, audioDeviceGuid: n } = a.cameraSettings,
            o = e === ex.Yn.STREAM && tc,
            s =
                null != (i = a.qualityOptions)
                    ? i
                    : {
                          resolution: 720,
                          frameRate: 30,
                      };
        t4(o, {
            cameraSource: {
                videoDeviceGuid: t,
                audioDeviceGuid: n,
            },
            quality: {
                resolution: s.resolution,
                frameRate: s.frameRate,
            },
        });
    } else t4(tc, null);
}
function rx(e) {
    let { section: t } = e;
    return t === eN.oAB.VOICE && nd(), !1;
}
function rL() {
    return e4.eachConnection(t9), !1;
}
function rj(e) {
    let { enabled: t } = e,
        n = nl({ aecDumpEnabled: t });
    e4.setAecDump(n.aecDumpEnabled);
}
function rM(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (e5 = Object.values(ex.Yn).reduce((e, n) => {
        let r = n,
            i = e3();
        return (e[r] = m().merge(i, t[r])), e;
    }, {})),
        O.K.set(eZ, e5),
        nu();
}
function rk(e) {
    let { state: t } = e,
        n = L.Z.isEnabled();
    if (t === eN.$7l.BACKGROUND && tc && !n) (th = !0), t4(!1);
    else {
        if (t !== eN.$7l.ACTIVE || !th) return !1;
        (th = !1), t4(!0);
    }
    return !0;
}
function rU(e) {
    e4.eachConnection((t) => t.setBitRate(e.bitrate));
}
function rG() {
    if ((!tc && null == a) || null != eI.Z.getRTCConnectionId()) return !1;
    t4(!1, null);
}
function rZ() {
    return !!tw && ((tw = !1), !0);
}
function rF(e) {
    e4.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function rB(e) {
    let { settings: t } = e;
    e4.applyMediaFilterSettings(t).finally(() => {
        (tD = !1), r.emitChange();
    });
}
function rV() {
    tD = !0;
}
function rH() {
    tD = !1;
}
function rY(e) {
    tH = e.enabled;
}
function rW() {
    if ((0, em.isDesktop)() && em.isPlatformEmbedded && !tz) {
        tz = !0;
        let e = async () => {
            let t = await new Promise((e) => {
                eE.ZP.pollQueueMetrics((t) => {
                    e(t);
                });
            });
            t.periodMs = ex.rp;
            let n = rz(t);
            null !== n && ef.default.track(eN.rMx.VOICE_QUEUE_METRICS, n), setTimeout(e, ex.rp);
        };
        setTimeout(e, ex.rp);
    }
}
class rK extends (d = b.ZP.Store) {
    initialize() {
        ne(),
            ns(),
            rm(),
            nk(),
            rW(),
            (tB = {
                [ex.AN.VIDEO]: e4.supports(ex.AN.VIDEO),
                [ex.AN.DESKTOP_CAPTURE]: e4.supports(ex.AN.DESKTOP_CAPTURE),
                [ex.AN.HYBRID_VIDEO]: e4.supports(ex.AN.HYBRID_VIDEO),
            }),
            this.waitFor(ey.default, eO.Z, ev.Z, eS.Z, A.Z, x.Z, eI.Z, j.ZP, eo.Z, ec.Z, eC.default, eA.Z, ed.Z);
    }
    supports(e) {
        return e4.supports(e);
    }
    supportsInApp(e) {
        return tB[e] || e4.supports(e);
    }
    isSupported() {
        return e4.supported();
    }
    isNoiseSuppressionSupported() {
        return e4.supports(ex.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return rf();
    }
    isNoiseCancellationError() {
        return tw;
    }
    isAutomaticGainControlSupported() {
        return e4.supports(ex.AN.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !na() && (e4.supports(ex.AN.LEGACY_AUDIO_SUBSYSTEM) || e4.supports(ex.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return e4.supports(ex.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === e4.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return rf();
    }
    isAecDumpSupported() {
        return e4.supports(ex.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return e4.supports(ex.AN.VIDEO) && e4.supports(ex.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        return (
            (null == (e = eS.Z.getChannel(tR)) ? void 0 : e.type) !== eN.d4z.GUILD_STAGE_VOICE &&
            e$ &&
            W.Z.simulcastEnabled()
        );
    }
    isVideoDecoderFallbackEnabled() {
        return tM;
    }
    getAecDump() {
        return t$().aecDumpEnabled;
    }
    getMediaEngine() {
        return e4;
    }
    getVideoComponent() {
        return e4.Video;
    }
    getCameraComponent() {
        return e4.Camera;
    }
    getKrispSuppressionLevel() {
        return null != l ? l : 100;
    }
    getKrispEnableStats() {
        return tT;
    }
    isEnabled() {
        return e6;
    }
    isMute() {
        return this.isSelfMute() || ta;
    }
    isDeaf() {
        return this.isSelfDeaf() || tl;
    }
    hasContext(e) {
        return null != e5[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.Yn.DEFAULT;
        return e === ex.Yn.DEFAULT && to;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.Yn.DEFAULT;
        return (
            !this.isEnabled() ||
            t$(e).mute ||
            !er.Z.didHavePermission(eR.Eu.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === ex.Yn.DEFAULT && ts)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tf;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tf = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && ev.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return tH;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.Yn.DEFAULT;
        return !this.isSupported() || t$(e).deaf;
    }
    isVideoEnabled() {
        return tc && tg;
    }
    isVideoAvailable() {
        return Object.values(tr).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.Yn.STREAM;
        return e9 === e && null != a;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.Yn.STREAM;
        return e9 === t && null != a && (null == (e = a.desktopSource) ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ex.Yn.DEFAULT;
        return e !== ey.default.getId() && (t$(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return e4.supports(ex.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ex.Yn.DEFAULT;
        return null != (t = t$(n).disabledLocalVideos[e]) && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ex.Yn.DEFAULT;
        return null != (t = t$(n).videoToggleStateMap[e]) ? t : eN.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ex.Yn.DEFAULT;
        return t === ex.Yn.DEFAULT && tG.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.Yn.DEFAULT;
        return e === ex.Yn.DEFAULT && tG.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tD;
    }
    isNativeAudioPermissionReady() {
        return tk;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return e9;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return te;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ex.Yn.DEFAULT,
            n = t$(t).localPans[e];
        return null != n ? n : eW;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ex.Yn.DEFAULT,
            n = t === ex.Yn.STREAM ? ex.Yh : ex.Qx,
            r = t$(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return t$().inputVolume;
    }
    getOutputVolume() {
        return t$().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.Yn.DEFAULT;
        return t$(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.Yn.DEFAULT;
        return t$(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return tC;
    }
    getActiveVoiceFilterAppliedAt() {
        return tA;
    }
    getPreviousVoiceFilter() {
        return tN;
    }
    getPreviousVoiceFilterAppliedAt() {
        return tP;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return t$().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return t$().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            m().each(e5, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === eN.pM4.PUSH_TO_TALK && e8.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return n_(tt, t$().inputDeviceId);
    }
    getOutputDeviceId() {
        return n_(tn, t$().outputDeviceId);
    }
    getVideoDeviceId() {
        return n_(tr, t$().videoDeviceId);
    }
    getInputDevices() {
        return tt;
    }
    getOutputDevices() {
        return tn;
    }
    getVideoDevices() {
        return tr;
    }
    getEchoCancellation() {
        let e = t$();
        return ev.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return e4.supports(ex.AN.SIDECHAIN_COMPRESSION) && t$().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return t$().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return t$().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tL && tL;
    }
    getLoopback() {
        return tF.size > 0;
    }
    getLoopbackReasons() {
        return tF;
    }
    getNoiseSuppression() {
        let e = t$();
        return ev.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = t$();
        return ev.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return t$().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return t$().noiseCancellation;
    }
    getHardwareEncoding() {
        return e$;
    }
    getEnableSilenceWarning() {
        return t$().silenceWarning;
    }
    getDebugLogging() {
        return e4.getDebugLogging();
    }
    getQoS() {
        return t$().qos;
    }
    getAttenuation() {
        return t$().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return t$().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return t$().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return ni() && t$().automaticAudioSubsystem ? ex.iA.AUTOMATIC : e4.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return e4.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return t$().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eD._.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.Yn.DEFAULT;
        return t$(e);
    }
    getState() {
        return {
            settingsByContext: e5,
            inputDevices: tt,
            outputDevices: tn,
            appSupported: tB,
            krispModuleLoaded: tS,
            krispVersion: s,
            krispSuppressionLevel: l,
            goLiveSource: a,
            goLiveContext: e9,
        };
    }
    getInputDetected() {
        return tE;
    }
    getNoInputDetectedNotice() {
        return ty;
    }
    getPacketDelay() {
        return em.isPlatformEmbedded || this.getMode() !== eN.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        e4.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return e7;
    }
    getVideoHook() {
        return t$().videoHook;
    }
    supportsVideoHook() {
        return e4.supports(ex.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = t$().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return (
            e4.supports(ex.AN.EXPERIMENTAL_SOUNDSHARE) &&
            g().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eP.T6)
        );
    }
    supportsHookSoundshare() {
        return (
            (0, em.isWindows)() &&
            e4.supports(ex.AN.SOUNDSHARE) &&
            g().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eP.sA)
        );
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = t$().useSystemScreensharePicker,
            n = (0, em.isLinux)();
        return e && (null != t ? t : n);
    }
    supportsSystemScreensharePicker() {
        return e4.supports(ex.AN.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return tK;
    }
    getUseGamescopeCapture() {
        return tW;
    }
    getEverSpeakingWhileMuted() {
        return tp;
    }
    getSpeakingWhileMuted() {
        return t_;
    }
    getKrispModelOverride() {
        return c;
    }
    getKrispModels() {
        return tI;
    }
    getKrispVadActivationThreshold() {
        var e;
        return null != (e = t$().modeOptions.vadKrispActivationThreshold) ? e : eY;
    }
    hasActiveCallKitCall() {
        return tY;
    }
    setHasActiveCallKitCall(e) {
        tY = e;
    }
    supportsScreenSoundshare() {
        return (0, em.isMac)()
            ? e4.supports(ex.AN.SOUNDSHARE) &&
                  g().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eP.yG) &&
                  nr()
            : (0, em.isWindows)()
              ? e4.supports(ex.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, em.isLinux)() && e4.supports(ex.AN.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, em.isWindows)()) {
            var e, t;
            return null == (t = this.getInputDevices()[this.getInputDeviceId()]) || null == (e = t.effects)
                ? void 0
                : e.find((e) => e === e0);
        }
        if ((0, em.isMac)() || (0, em.isIOS)()) return u;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ex.Yn.DEFAULT,
            t = this.supports(ex.AN.VIDEO)
                ? [
                      {
                          rid: "100",
                          type: e === ex.Yn.DEFAULT ? ex.Tr.VIDEO : ex.Tr.SCREEN,
                          quality: ex.y7,
                      },
                  ]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === ex.Yn.DEFAULT || this.goLiveSimulcastEnabled()) &&
                t.push({
                    rid: "50",
                    type: e === ex.Yn.DEFAULT ? ex.Tr.VIDEO : ex.Tr.SCREEN,
                    quality: ex.LD,
                }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: !1 };
        return (
            (0, em.isWeb)() &&
                (e.fetchDave = X.NJ.getCurrentConfig({
                    location: "MediaEngineStore fetchAsyncResources",
                }).loadWasmModule),
            e4.fetchAsyncResources(e)
        );
    }
    startDavePreload() {
        if (!tx && ((tx = !0), (0, em.isWeb)())) {
            let e = { fetchDave: !0 };
            e4.fetchAsyncResources(e).catch((e) => {
                eG.warn("DAVE preload failed:", e), eg.Z.captureException(e);
            });
        }
    }
    getSupportedSecureFramesProtocolVersion() {
        if ((0, em.isWeb)()) {
            let { useWasmModule: e } = X.NJ.getCurrentConfig({
                location: "MediaEngineStore getSupportedSecureFramesProtocolVersion",
            });
            if (!e) return 0;
        }
        let e = e4.getSupportedSecureFramesProtocolVersion();
        114 === e && (e = 1);
        let t = X.m8.getCurrentConfig({ location: "MediaEngineStore" }),
            n = X.Th.getConfig({ location: "MediaEngineStore" });
        return (t.canSupportDaveProtocol || (n.allowOptIn && eo.Z.getPersistentCodesEnabled())) &&
            e >= t.protocolVersionFloor
            ? e
            : 0;
    }
    hasClipsSource() {
        return null != o;
    }
    getGpuBrand() {
        return tV;
    }
}
function rz(e) {
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
ej(rK, "displayName", "MediaEngineStore");
let rq = (r = new rK(S.Z, {
    VOICE_CHANNEL_SELECT: rI,
    VOICE_STATE_UPDATES: nN,
    CONNECTION_OPEN: nS,
    CONNECTION_CLOSED: nT,
    POST_CONNECTION_OPEN: nC,
    RTC_CONNECTION_STATE: nA,
    AUDIO_SET_TEMPORARY_SELF_MUTE: nP,
    AUDIO_TOGGLE_SELF_MUTE: nR,
    AUDIO_SET_SELF_MUTE: nw,
    AUDIO_TOGGLE_SELF_DEAF: nx,
    AUDIO_TOGGLE_LOCAL_MUTE: nL,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: nj,
    AUDIO_SET_LOCAL_VOLUME: nU,
    AUDIO_SET_LOCAL_PAN: nG,
    AUDIO_SET_MODE: nZ,
    AUDIO_SET_INPUT_VOLUME: nF,
    AUDIO_SET_OUTPUT_VOLUME: nB,
    AUDIO_SET_INPUT_DEVICE: nV,
    AUDIO_SET_OUTPUT_DEVICE: nH,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: nW,
    AUDIO_SET_ECHO_CANCELLATION: nX,
    AUDIO_SET_SIDECHAIN_COMPRESSION: nJ,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: n$,
    AUDIO_SET_LOOPBACK: n1,
    AUDIO_SET_NOISE_SUPPRESSION: n5,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: n8,
    AUDIO_SET_NOISE_CANCELLATION: n6,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: n7,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: re,
    AUDIO_SET_DEBUG_LOGGING: rt,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: rn,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: n9,
    MEDIA_ENGINE_SET_VIDEO_HOOK: rr,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: ri,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: ra,
    AUDIO_SET_ATTENUATION: ro,
    AUDIO_SET_QOS: rs,
    MEDIA_ENGINE_DEVICES: nz,
    AUDIO_VOLUME_CHANGE: nq,
    AUDIO_RESET: rl,
    AUDIO_INPUT_DETECTED: rc,
    AUDIO_SET_SUBSYSTEM: rO,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: ry,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rN,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rP,
    MEDIA_ENGINE_PERMISSION: rA,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rD,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nY,
    MEDIA_ENGINE_INTERACTION_REQUIRED: nK,
    USER_SETTINGS_MODAL_INIT: rx,
    USER_SETTINGS_MODAL_SET_SECTION: rx,
    CERTIFIED_DEVICES_SET: rL,
    RPC_APP_CONNECTED: rT,
    RPC_APP_DISCONNECTED: rC,
    OVERLAY_INITIALIZE: nI,
    APP_STATE_UPDATE: rk,
    SET_CHANNEL_BITRATE: rU,
    SET_VAD_PERMISSION: ru,
    SET_NATIVE_PERMISSION: rd,
    SET_CHANNEL_VIDEO_QUALITY_MODE: rF,
    MEDIA_ENGINE_SET_AEC_DUMP: rj,
    MEDIA_ENGINE_RESET_SETTINGS: rM,
    CHANNEL_DELETE: rG,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rZ,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rB,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rV,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rH,
    USER_SETTINGS_PROTO_UPDATE: nD,
    CLIPS_INIT: rR,
    CLIPS_SETTINGS_UPDATE: rw,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rY,
    VOICE_FILTER_REQUEST_SWITCH: rg,
    VOICE_FILTER_LOOPBACK_TOGGLE: rh,
    VOICE_FILTER_APPLIED: rb,
    VOICE_FILTER_DOWNLOAD_FAILED: rE,
    VOICE_FILTER_APPLY_FAILED: rE,
}));
