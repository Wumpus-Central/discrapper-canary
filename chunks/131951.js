let r, i, a, o, s, l, c;
n.d(t, { Z: () => rZ }), n(388685), n(953529), n(457542), n(539854), n(642613), n(49124), n(337869);
var u,
    d = n(512722),
    f = n.n(d),
    _ = n(392711),
    p = n.n(_),
    h = n(209739),
    m = n.n(h),
    g = n(404097),
    E = n(442837),
    b = n(46973),
    y = n(433517),
    O = n(846519),
    v = n(570140),
    I = n(579806),
    S = n(887278),
    T = n(547727),
    A = n(435064),
    C = n(779618),
    N = n(710845),
    R = n(535911),
    P = n(458725),
    w = n(353926),
    D = n(646047),
    x = n(594190),
    L = n(502286),
    M = n(883794),
    j = n(314080),
    k = n(822253),
    U = n(177732),
    G = n(960708),
    B = n(294473),
    Z = n(706629),
    F = n(159142),
    V = n(27955),
    H = n(166884),
    Y = n(422797),
    W = n(64592),
    K = n(805877),
    z = n(837968),
    q = n(35662),
    X = n(529558),
    Q = n(705946),
    J = n(412412),
    $ = n(441167),
    ee = n(986855),
    et = n(338336),
    en = n(751571),
    er = n(311473),
    ei = n(615830),
    ea = n(725380),
    eo = n(383451),
    es = n(581883),
    el = n(875527),
    ec = n(420439),
    eu = n(626135),
    ed = n(12647),
    ef = n(70956),
    e_ = n(358085),
    ep = n(747268),
    eh = n(960048),
    em = n(998502),
    eg = n(13140),
    eE = n(314897),
    eb = n(967368),
    ey = n(463395),
    eO = n(592125),
    ev = n(19780),
    eI = n(704806),
    eS = n(594174),
    eT = n(631768),
    eA = n(981631),
    eC = n(70722),
    eN = n(761274),
    eR = n(526761),
    eP = n(345655),
    ew = n(65154),
    eD = n(388032);
function ex(e, t, n) {
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
function eL(e) {
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
                ex(e, t, n[t]);
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
function ej(e, t) {
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
let ek = new N.Z("MediaEngineStore"),
    eU = "MediaEngineStore",
    eG = 4,
    eB = 1,
    eZ = 1,
    eF = 1,
    eV = 1,
    eH = 0.5,
    eY = {
        left: 1,
        right: 1,
    },
    eW = 500,
    eK = 5 * ef.Z.Millis.SECOND,
    ez = -60,
    eq = 100,
    eX = 2 * ef.Z.Millis.SECOND,
    eQ = !0,
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
        experimentalEncoders: !1,
        hardwareH264: !0,
        hardwareEnabledVersion: 0,
        hardwareEncoding: null,
        silenceWarning: !0,
        attenuation: 0,
        attenuateWhileSpeakingSelf: !1,
        attenuateWhileSpeakingOthers: !0,
        localMutes: {},
        disabledLocalVideos: {},
        videoToggleStateMap: {},
        localVolumes: {},
        localPans: {},
        inputVolume: ew.Qx,
        outputVolume: ew.Qx,
        inputDeviceId: ew.w5,
        outputDeviceId: ew.w5,
        videoDeviceId: ew.w5,
        qos: !1,
        qosMigrated: !1,
        videoHook: e1.supports(ew.AN.VIDEO_HOOK),
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        openH264: !0,
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
        [eP._.CUSTOM]: {},
        [eP._.VOICE_ISOLATION]: {
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
        [eP._.STUDIO]: {
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
ek.enableNativeLogger(!0);
let e2 = {},
    e3 = new Set([ew.Yn.DEFAULT]),
    e4 = e1.supports(ew.AN.AUTO_ENABLE),
    e8 = !1,
    e5 = ew.Yn.STREAM,
    e6 = performance.now(),
    e7 = { [ew.w5]: nr("No Input Devices") },
    e9 = { [ew.w5]: nr("No Output Devices") },
    te = { [ew.w5]: nr("No Video Devices") },
    tt = !1,
    tn = !1,
    tr = !1,
    ti = !1,
    ta = !1,
    to = ew.Av,
    ts = ew.Av,
    tl = !1,
    tc = !1,
    tu = !1,
    td = new O.V7(),
    tf = !1,
    t_ = !1,
    tp = null,
    th = !1,
    tm = !1,
    tg = !1,
    tE = !1,
    tb = !1,
    ty = [],
    tO = !1,
    tv = null,
    tI = null,
    tS = null,
    tT = null,
    tA = null,
    tC = !1,
    tN = !1,
    tR = !1,
    tP = !1;
en.Z.hasPermission(eN.Eu.AUDIO, { showAuthorizationError: !1 }),
    en.Z.hasPermission(eN.Eu.CAMERA, { showAuthorizationError: !1 });
let tw = !1,
    tD = new Set(),
    tx = tw,
    tL = new Set(),
    tM = {},
    tj = null,
    tk = !0,
    tU = !1,
    tG = !1,
    tB = !1;
function tZ() {
    var e, t;
    return null != (t = null == (e = eS.default.getCurrentUser()) ? void 0 : e.isStaff()) && t
        ? "always"
        : ep.Z === g.R.CANARY
          ? "permittedDevicesOnly"
          : "never";
}
function tF() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ew.Yn.DEFAULT,
        t = e2[e];
    return null == t && ((t = e$()), (e2[e] = t)), t;
}
function tV() {
    var e, t, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ew.Yn.DEFAULT,
        i = tF(r),
        a = e0[null != (e = i.activeInputProfile) ? e : eP._.CUSTOM],
        o = eL({}, null != (t = i.modeOptions) ? t : {}, null != (n = a.modeOptions) ? n : {});
    if (
        (null == o.vadDuringPreProcess && (o.vadDuringPreProcess = (0, Q.C)({ location: "getSettings" }).enabled),
        (null == o.vadKrispActivationThreshold && !0 === a.automaticGainControl) || !0 === i.automaticGainControl)
    ) {
        let e = (0, M.U)({ location: "getSettings" });
        null != e.vadKrispActivationThreshold && (o.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return ej(eL({}, i, a), { modeOptions: o });
}
function tH(e) {
    var t, n;
    let r = tV(e.context),
        i = r.mode;
    e.context === ew.Yn.DEFAULT &&
        ((0, eo.f)({
            location: "setInputMode",
            autoTrackExposure: !1,
        }).enableLatching &&
            i === eA.pM4.PUSH_TO_TALK &&
            r.modeOptions.pttLatchingEnabled &&
            (i = eA.pM4.VOICE_ACTIVITY),
        (0, z.I)(!1, !1, !1)),
        e.setInputMode(i, {
            vadThreshold: r.modeOptions.threshold,
            vadAutoThreshold: r.modeOptions.autoThreshold,
            vadUseKrisp: r.modeOptions.vadUseKrisp && ri(),
            vadKrispActivationThreshold: null != (t = r.modeOptions.vadKrispActivationThreshold) ? t : eH,
            vadLeading: r.modeOptions.vadLeading,
            vadTrailing: r.modeOptions.vadTrailing,
            vadDuringPreProcess: null != (n = r.modeOptions.vadDuringPreProcess) && n,
            pttReleaseDelay: Math.round(r.modeOptions.delay),
        });
}
function tY(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ew.Qx;
    return p().clamp(e, 0, t);
}
function tW(e) {
    let t = tV(e.context),
        n = !e4 || t.mute || t.deaf;
    e.context === ew.Yn.DEFAULT
        ? (n = n || tt || tn || tr || !en.Z.didHavePermission(eN.Eu.AUDIO))
        : e.context === ew.Yn.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === ew.Yn.DEFAULT && T.Z.updateNativeMute();
}
function tK(e) {
    e !== e5 && (null != a && e1.setGoLiveSource(null, e5), (e5 = e));
}
function tz() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ta,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        s = a;
    if (
        ((null == s ? void 0 : s.desktopSource) != null &&
            s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? void 0 : e.id) &&
            (null != s.desktopSource.soundshareId && (0, e_.isWindows)() && S.pn(s.desktopSource.soundshareId),
            e1.setGoLiveSource(null, e5)),
        (null == s ? void 0 : s.cameraSource) != null &&
            (s.cameraSource.videoDeviceGuid !==
                (null == o || null == (t = o.cameraSource) ? void 0 : t.videoDeviceGuid) ||
                s.cameraSource.audioDeviceGuid !==
                    (null == o || null == (n = o.cameraSource) ? void 0 : n.audioDeviceGuid)) &&
            e1.setGoLiveSource(null, e5),
        ta || i)
    ) {
        let e = tV().videoDeviceId;
        ta && e === ew.w5 && ts === ew.w5 && to !== ew.Av ? (e = to) : (ts = e),
            (to = (ta = i) ? na(te, e) : ew.Av),
            e1.setVideoInputDevice(to);
    }
    if (((a = o), null != o)) {
        let e = {
            resolution: o.quality.resolution,
            frameRate: o.quality.frameRate,
        };
        if (null != o.desktopSource) {
            let t = tZ(),
                n = tV().videoHook,
                i = t2(),
                a = i ? (t3() ? eC.zj : eC.ZM) : 0,
                s = (0, e_.isWindows)() && (0, J.t)("updateVideo").enabled;
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
                        allowScreenCaptureKit: t4(),
                        videoHookStaleFrameTimeoutMs: eW,
                        graphicsCaptureStaleFrameTimeoutMs: eK,
                        hdrCaptureMode: t,
                        enableGlobalFramePoolLock: (0, V.T)({ location: "updateVideo" }).enabled,
                    },
                    quality: e,
                },
                e5,
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
                e5,
            );
    }
}
function tq(e) {
    switch (e) {
        case ew.H3.CPU_OVERUSE:
            return P.Nk.NoiseCancellerCpuOveruse;
        case ew.H3.FAILED:
            return P.Nk.NoiseCancellerFailed;
        case ew.H3.VAD_CPU_OVERUSE:
            return P.Nk.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function tX(e) {
    let t = (0, M.U)({
        location: "getAutomaticGainControlConfig",
        disable: !e,
    }).noiseCancellationConfig;
    return eL({ enabled: e }, t);
}
function tQ(e, t) {
    e.setAutomaticGainControl(tX(t));
}
async function tJ(e, t) {
    if ((0, e_.isIOS)() || (0, e_.isMac)()) {
        let e = await e1.getSystemMicrophoneMode();
        "" !== e &&
            "standard" !== e &&
            j.Z.getConfig({ location: "setNoiseCancellation" }).disabledModes.includes(e) &&
            (t = !1);
    }
    e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: n } = (0, M.U)({
        location: "setNoiseCancellation",
        disable: !t,
    });
    e.setNoiseCancellationDuringProcessing(n);
    let { noiseCancellationAfterProcessing: r, vadAfterWebrtc: i } = (0, Y.$)({ location: "setNoiseCancellation" });
    e.setNoiseCancellationAfterProcessing(r), e.setVADAfterWebrtc(i);
}
function t$(e) {
    let t = tV(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(ey.Z.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(ey.Z.hasNoiseSuppression(n) || t.noiseSuppression),
        tQ(e, ey.Z.hasAutomaticGainControl(n) || t.automaticGainControl),
        tJ(e, t.noiseCancellation),
        e.setVoiceFilterId(tv),
        (0, e_.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function t0() {
    var e;
    return (
        !(0, W.f)("MediaEngine").enabled &&
        !(0, ee.M)("MediaEngine").enabled &&
        !(0, q.c)("MediaEngine").enabled &&
        (null == (e = tV().openH264) || e)
    );
}
function t1() {
    e1.on(b.aB.Connection, (e) => {
        tH(e), tW(e), t$(e);
        let t = tV();
        e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
            e.setQoS(t.qos),
            e.setExperimentalEncoders(t.experimentalEncoders),
            e.setHardwareH264(eQ),
            e.setSoftwareH264(t0());
        let n = ev.Z.getGuildId(),
            {
                muteBeforeProcessing: i,
                pttBeforeProcessing: o,
                skipEncode: s,
            } = (null != n ? Z.Z : B.Z).getCurrentConfig(
                {
                    location: "setupMediaEngine",
                    guildId: null != n ? n : void 0,
                },
                { autoTrackExposure: !0 },
            );
        i && e.setExperimentFlag(ew.V8.MUTE_BEFORE_PROCESSING, !0),
            o && e.setExperimentFlag(ew.V8.PTT_BEFORE_PROCESSING, !0),
            s && e.setExperimentFlag(ew.V8.SKIP_ENCODE, !0),
            (0, K.J)({ location: "setupMediaEngine" }).enabled &&
                e.setExperimentFlag(ew.V8.LOW_LATENCY_RATE_CONTROL, !0);
        let l = !1,
            c = !0;
        if (
            (e.setExperimentFlag(ew.V8.RESET_DECODER_ON_ERRORS, !0),
            l && e.setExperimentFlag(ew.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0),
            c && e.setExperimentFlag(ew.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0),
            e.context === ew.Yn.STREAM)
        ) {
            let t = ns(e9);
            e.setSoundshareDiscardRearChannels(t);
            let { simulcastEnabled: n, lqStreamBitrate: r } = H.Z.getConfig();
            e.configureGoLiveSimulcast(n, r);
        }
        if (
            ((0, e_.isWindows)()
                ? (null == tj ? void 0 : tj.startsWith("NVIDIA")) || (null == tj ? void 0 : tj.startsWith("AMD"))
                    ? e.setExperimentFlag(ew.V8.SIGNAL_AV1, !0)
                    : e.setExperimentFlag(ew.V8.SIGNAL_AV1_DECODE, !0)
                : ((0, e_.isMac)() || (0, e_.isLinux)()) && e.setExperimentFlag(ew.V8.SIGNAL_AV1_DECODE, !0),
            (0, e_.isWindows)() && e.setExperimentFlag(ew.V8.SIGNAL_AV1_HARDWARE_DECODE, !0),
            (0, e_.isWeb)())
        ) {
            let { enabled: t } = (0, F.A)("MediaEngineStore");
            e.setExperimentFlag(ew.V8.BROWSER_HEVC, t);
        }
        if ((e1.setHasFullbandPerformance((0, R.Z)()), e.setRemoteAudioHistory(1000), (0, C.Z)(r))) {
            let t = A.Z.getSettings();
            e.setExperimentFlag(ew.V8.STREAMER_CLIP, t.clipsEnabled);
            let { enableViewerClipping: n } = $.Z.getCurrentConfig(
                { location: "f627ab_15" },
                { autoTrackExposure: !1 },
            );
            e.setViewerSideClip(n), e.setClipsKeyFrameInterval(ew.ux);
        }
        for (let n of ((t = tV(e.context)), e.setPostponeDecodeLevel(eq), Object.keys(t.localMutes)))
            n !== eE.default.getId() && e.setLocalMute(n, t.localMutes[n]);
        for (let n of Object.keys(t.localVolumes)) n !== eE.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
        for (let n of Object.keys(t.localPans)) {
            let r = t.localPans[n];
            e.setLocalPan(n, r.left, r.right);
        }
        for (let n of Object.keys(t.disabledLocalVideos)) e.setLocalVideoDisabled(n, t.disabledLocalVideos[n]);
        e.on(b.Sh.Speaking, (t, n) => {
            v.Z.dispatch({
                type: "SPEAKING",
                context: e.context,
                userId: t,
                speakingFlags: n,
            });
        }),
            e.context === ew.Yn.DEFAULT &&
                ((tc = !1),
                (tu = !1),
                e.on(b.Sh.SpeakingWhileMuted, () => {
                    (tc = !0),
                        (tu = !0),
                        r.emitChange(),
                        td.stop(),
                        td.start(eX, () => {
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
                    eu.default.track(
                        eA.rMx.VIDEOHOOK_INITIALIZED,
                        eL(
                            {
                                backend: e,
                                format: t,
                                framebuffer_format: n,
                                sample_count: r,
                                success: i,
                                reinitialization: o,
                            },
                            (0, L.Z)(null == a ? void 0 : a.desktopSource),
                        ),
                    );
            }),
            e.on(b.Sh.NoiseCancellationError, (e) => {
                ek.warn("noisecancellererror event: ".concat(e)),
                    (0, P.kr)({
                        type: P.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tq(e),
                    }),
                    (tC = !0),
                    eu.default.track(eA.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
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
                ek.warn("voiceactivitydetectorerror event: ".concat(e)),
                    (0, P.kr)({
                        type: P.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tq(e),
                    }),
                    eu.default.track(eA.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    v.Z.dispatch({
                        type: "AUDIO_SET_MODE",
                        context: ew.Yn.DEFAULT,
                        mode: eA.pM4.VOICE_ACTIVITY,
                        options: ej(eL({}, tV(ew.Yn.DEFAULT).modeOptions), { vadUseKrisp: !1 }),
                    }),
                    v.Z.dispatch({
                        type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
                        code: e,
                    });
            }),
            e.on(b.Sh.SdpError, (e, t, n, r) => {
                eu.default.track(eA.rMx.SDP_ERROR, {
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
            e.setBitRate(eb.Z.bitrate),
            e.applyVideoQualityMode(eT.Z.mode),
            e1.supports(ew.AN.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                e1.setAsyncVideoInputDeviceInit((0, G.p)("setupMediaEngine").enabled);
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
            (tP = !0),
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
                await ed.Z.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
            } catch (t) {
                "number" == typeof t.status && (e = t.status);
            }
            ek.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)),
                eu.default.track(eA.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        e1.on(b.aB.VideoInputInitialized, (e) => {
            eu.default.track(eA.rMx.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired
                    ? null
                    : Math.round(e.timeToFirstFrame * ef.Z.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: ev.Z.getMediaSessionId(),
                rtc_connection_id: ev.Z.getRTCConnectionId(),
            });
        }),
        e1.on(b.aB.AudioInputInitialized, (e) => {
            eu.default.track(eA.rMx.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * ef.Z.Millis.SECOND),
                rtc_connection_id: ev.Z.getRTCConnectionId(),
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
                (null != t && (null == a || null == (r = a.desktopSource) ? void 0 : r.soundshareId) !== t && S.pn(t),
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
            eu.default.track(eA.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                audio_device_module: e,
                code: t,
                device_name: n,
            });
        }),
        e1.on(b.aB.VideoCodecError, (e) => {
            let t = "encode" === e.mode ? P.u.VIDEO_ENCODE_ERROR : P.u.VIDEO_DECODE_ERROR,
                n = {
                    videoCodec: e.codecStandard,
                    errorMessage: e.message,
                };
            (0, P.kr)(
                t === P.u.VIDEO_ENCODE_ERROR
                    ? ej(eL({ type: t }, n), { videoEncoder: e.implName })
                    : ej(eL({ type: t }, n), { videoDecoder: e.implName }),
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
            let t = rB(e);
            null !== t && eu.default.track(eA.rMx.VOICE_QUEUE_METRICS, t);
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
        nK(),
        nq(),
        t6.reset(),
        (0, eI.q)().then((e) => {
            null != e && (tj = e.gpu_brand);
        }),
        e1.on(b.aB.SystemMicrophoneModeChange, (e) => {
            e1.eachConnection(t$);
        });
}
function t2() {
    return (0, e_.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eC.c5);
}
function t3() {
    return (0, e_.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eC.sN);
}
function t4() {
    return (
        (0, e_.isMac)() &&
        e1.supports(ew.AN.SCREEN_CAPTURE_KIT) &&
        m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eC.C7)
    );
}
function t8() {
    return (
        (0, e_.isWindows)() &&
        e1.supports(ew.AN.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        e1.supports(ew.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function t5() {
    return e1.supports(ew.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
let t6 = new (class {
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
        let e = tV();
        !th && ev.Z.getState() === eA.hes.RTC_CONNECTED && e.mode === eA.pM4.VOICE_ACTIVITY && e.silenceWarning
            ? this.start()
            : this.stop();
    }
    reset() {
        this.stop(), this.update();
    }
    constructor() {
        ex(this, "stateChangeTimeout", void 0),
            ex(this, "noVoiceTimeout", 5000),
            ex(this, "voiceTimeout", 1500),
            ex(this, "started", !1),
            ex(this, "handleSilence", (e) => {
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
                                    e && (tm = !0));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout,
                    ));
            });
    }
})();
function t7() {
    var e;
    let t = y.K.get("audio");
    null != t && (y.K.set(eU, { [ew.Yn.DEFAULT]: t }), y.K.remove("audio")),
        (e2 = null != (e = y.K.get(eU)) ? e : {}),
        p().each(e2, (e) => {
            if (
                (p().defaultsDeep(e, e$()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, eg.Kd)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== eG &&
                    ((e.vadUseKrispSettingVersion = eG), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                !e.vadThrehsoldMigrated)
            ) {
                var t;
                (e.vadThrehsoldMigrated = !0),
                    (null == (t = e.modeOptions) ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = ez);
            }
            e1.supports(ew.AN.SIDECHAIN_COMPRESSION) &&
                e.sidechainCompressionSettingVersion < eV &&
                ((e.sidechainCompressionSettingVersion = eV), (e.sidechainCompression = !0)),
                (0, e_.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== eZ &&
                      ((e.ncUseKrispjsSettingVersion = eZ), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== eB &&
                      ((e.ncUseKrispSettingVersion = eB), (e.noiseSuppression = !1), (e.noiseCancellation = !0)),
                e.hardwareEnabledVersion !== eF && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = eF)),
                null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
        }),
        nt();
}
function t9(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ew.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = tF(t);
    return Object.assign(r, e), !__OVERLAY__ && n && y.K.set(eU, e2), r;
}
function ne() {
    y.K.remove(eU), location.reload();
}
function nt() {
    let e = tV();
    e1.setAudioInputDevice(e.inputDeviceId),
        e1.setAudioOutputDevice(e.outputDeviceId),
        tz(),
        e1.setInputVolume(e.inputVolume),
        e1.setOutputVolume(e.outputVolume),
        e1.setH264Enabled(eQ || t0()),
        e1.setAv1Enabled(eQ),
        e1.setH265Enabled(eQ),
        e1.setAecDump(e.aecDumpEnabled),
        e1.setSidechainCompression(e.sidechainCompression),
        e1.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        e1.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing);
}
function nn() {
    e4 ||
        e1.enable().then(() =>
            v.Z.dispatch({
                type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
                enabled: !0,
                unmute: !1,
            }),
        );
}
function nr(e) {
    return {
        id: ew.w5,
        index: 0,
        name: e,
        disabled: !0,
        guid: void 0,
        hardwareId: void 0,
        containerId: void 0,
    };
}
function ni(e, t) {
    if (0 === e.length) {
        let e = nr(t);
        return { [e.id]: e };
    }
    return p()(e)
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
function na(e, t) {
    var n, r;
    let i = null != (r = null != (n = e[t]) ? n : e[ew.w5]) ? r : p()(e).values().first();
    return null != i ? i.id : t;
}
function no(e) {
    let t = e7;
    if (((e7 = ni(e, eD.intl.string(eD.t["/QIjDA"]))), !p().isEqual(e7, t))) {
        let e = tV(),
            t = na(e7, e.inputDeviceId);
        e1.setAudioInputDevice(t);
    }
}
function ns(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nl(e) {
    e1.eachConnection((t) => {
        t.context === ew.Yn.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function nc(e) {
    let t = e9;
    if (((e9 = ni(e, eD.intl.string(eD.t.xlUg0v))), !p().isEqual(e9, t))) {
        let e = tV(),
            n = na(e9, e.outputDeviceId);
        e1.setAudioOutputDevice(n);
        let r = ns(t),
            i = ns(e9);
        r !== i && nl(i);
    }
}
function nu(e) {
    t_ = e.length > 0;
    let t = te;
    if (((te = ni(e, eD.intl.string(eD.t.WKWARY))), ta && !p().isEqual(te, t))) {
        var n;
        let e = void 0 !== te[to],
            r = to === ew.w5 && (null == (n = t[ew.w5]) ? void 0 : n.disabled);
        tz(e || r);
    }
}
function nd() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        r =
            null != (e = es.Z.settings.audioContextSettings)
                ? e
                : {
                      user: {},
                      stream: {},
                  };
    for (let e of Object.keys(r)) {
        let i = e === eR.u0.USER ? ew.Yn.DEFAULT : ew.Yn.STREAM,
            a = i === ew.Yn.STREAM ? ew.Yh : ew.Qx,
            o = null != (t = r[e]) ? t : {},
            { localMutes: s, localVolumes: l } = tV(i);
        for (let [e, t] of Object.entries(o))
            null == (0, ea.Ky)(i, e) &&
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
        t9(
            {
                localMutes: s,
                localVolumes: l,
            },
            i,
        );
    }
}
function nf(e) {
    if (null == r)
        return (
            ek.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
            {
                soundshareId: null,
                soundshareSession: "",
            }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : ed.Z.getAudioPid(e),
            n = "";
        return (
            null != t && (n = ed.Z.generateSessionFromPid(t)),
            {
                soundshareId: t,
                soundshareSession: n,
            }
        );
    }
}
function n_(e, t) {
    (0, e_.isWindows)() &&
        e > 1 &&
        S.YT(e, { soundshare_session: t }).then((t) => {
            null == t ||
                x.ZP.shouldContinueWithoutElevatedProcessForPID(e) ||
                v.Z.wait(() => {
                    v.Z.dispatch({
                        type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                        errorMessage: t,
                    });
                });
        });
}
function np(e) {
    (i = e.sessionId), (tt = !1), (ti = !1);
    let t = tV();
    if (
        (t8() && (t5() ? rp(ew.iA.AUTOMATIC) : t.automaticAudioSubsystem && rh()),
        e1.supports(ew.AN.OFFLOAD_ADM_CONTROLS))
    ) {
        let e = !1;
        (0, e_.isDesktop)()
            ? (e = (0, k.E)({ location: "handleConnectionOpen" }).enabled)
            : ((0, e_.isIOS)() || (0, e_.isAndroid)()) && (e = (0, U.W)({ location: "handleConnectionOpen" }).enabled),
            e1.setOffloadAdmControls(e);
    }
    (0, el.wt)({
        location: "MediaEngineStore",
        autoTrackExposure: !1,
    }) &&
        null !== t.mostRecentlyRequestedVoiceFilter &&
        (0, e_.isDesktop)() &&
        (ec.Z.getLastInitAttemptMayHaveCrashed()
            ? (v.Z.dispatch({
                  type: "AUDIO_SET_SELF_MUTE",
                  mute: !0,
                  context: ew.Yn.DEFAULT,
                  playSoundEffect: !0,
              }),
              t9({ mostRecentlyRequestedVoiceFilter: null }))
            : n(358820).r5()),
        nd();
}
function nh(e) {
    let { mediaEngineState: t } = e;
    (e2 = t.settingsByContext),
        (e7 = t.inputDevices),
        (e9 = t.outputDevices),
        (tM = t.appSupported),
        (tb = t.krispModuleLoaded),
        (s = t.krispVersion),
        (e5 = t.goLiveContext);
}
function nm() {
    i = null;
}
function ng() {
    if ((0, e_.isWeb)()) {
        let e = X.NJ.getCurrentConfig({ location: "MediaEngineStore handlePostConnectionOpen" });
        e.loadWasmModule && e.preload && r.startDavePreload();
    }
    return !1;
}
function nE(e) {
    switch (e.state) {
        case eA.hes.CONNECTING:
            nn();
            break;
        case eA.hes.RTC_CONNECTING:
            (th = !1), (tm = !1);
            break;
        case eA.hes.RTC_CONNECTED:
            tz();
            break;
        case eA.hes.DISCONNECTED:
            nC(), nN();
    }
    t6.update();
}
function nb(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (tt = t.mute || t.suppress), (ti = t.deaf), e1.eachConnection(tW);
            let e = null != t.guildId && null != t.channelId && null != tA && tA !== t.channelId,
                n = !tg && null == t.channelId;
            return tz(!e && !n && ta), (tA = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== eE.default.getId() || null != ev.Z.getChannelId() || tz(!1, null), e;
    }, !1);
}
function ny(e) {
    let { mute: t } = e;
    (tn = t), e1.eachConnection(tW);
}
function nO(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = tV(t);
    if (t === ew.Yn.DEFAULT && (en.Z.requestPermission(eN.Eu.AUDIO), tr)) return !1;
    (r = !i && !r) || (i = !1),
        n || (tl = !0),
        t9(
            {
                mute: r,
                deaf: i,
            },
            t,
        ),
        e1.eachConnection(tW);
}
function nv(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    t9({ mute: n }, t), r || (tl = !0), e1.eachConnection(tW);
}
function nI(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== eR.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    nd(!0);
}
function nS(e) {
    let { context: t } = e;
    t9({ deaf: !tV(t).deaf }, t), e1.eachConnection(tW);
}
function nT(e) {
    let { context: t, userId: n } = e;
    if (n === eE.default.getId()) return;
    let { localMutes: r } = tV(t);
    r[n] ? delete r[n] : (r[n] = !0),
        t9({ localMutes: r }, t),
        e1.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nA(e) {
    var t, n, r, i, a, o, s;
    let { context: l, userId: c, videoToggleState: u, persist: d, isAutomatic: _ } = e;
    f()(!(d && _), "These are not allowed to both be true.");
    let p = u === eA.ZUi.DISABLED,
        { disabledLocalVideos: h } = tV(l),
        m = null != (t = h[c]) && t,
        g = tD.has(c),
        E = u === eA.ZUi.AUTO_ENABLED || u === eA.ZUi.MANUAL_ENABLED;
    ek.info(
        "disableVideo="
            .concat(p, " currentlyDisabled=")
            .concat(m, " currentlyAutoDisabled=")
            .concat(g, ", isVideoShown=")
            .concat(E),
    ),
        f()(!(g && !m), "If you are auto-disabled, then you are also disabled.");
    let b = p !== m,
        y = l === ew.Yn.DEFAULT,
        O = _ && b && y,
        v = d && b && y;
    ek.info(
        "changed="
            .concat(b, " isDefaultContext=")
            .concat(y, " isUpdateCausedByVideoHealthManager=")
            .concat(O, " isManualToggleByUser=")
            .concat(v),
    );
    let { videoToggleStateMap: I } = tV(l);
    if (
        (I[c] === eA.ZUi.AUTO_PROBING &&
            u === eA.ZUi.AUTO_ENABLED &&
            (0, et.Z)(c, p ? ew.fC.AUTO_DISABLE : ew.fC.AUTO_ENABLE, E),
        (I[c] = u),
        t9({ videoToggleStateMap: I }, l, d),
        u === eA.ZUi.AUTO_PROBING
            ? null == (n = ev.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, !0)
            : null == (r = ev.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, !1),
        tx ||
            (ek.info("isAutoDisableAllowed=".concat(tx, " - disabling VideoHealthManager")),
            null == (a = ev.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()),
        O)
    ) {
        if ((!p && !g) || (p && !tx)) return;
        (0, et.Z)(c, p ? ew.fC.AUTO_DISABLE : ew.fC.AUTO_ENABLE, E), p ? tD.add(c) : tD.delete(c);
    } else
        v &&
            (g && !p
                ? (ek.info("disallowing auto-disable for this session because of manual override by user"),
                  (tx = !1),
                  null == (s = ev.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(),
                  (0, et.Z)(c, ew.fC.MANUAL_REENABLE, E))
                : (0, et.Z)(c, p ? ew.fC.MANUAL_DISABLE : ew.fC.MANUAL_ENABLE, E));
    y && !p && tD.delete(c),
        p ? (h[c] = !0) : delete h[c],
        t9({ disabledLocalVideos: h }, l, d),
        e1.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(c, null != (t = h[c]) && t);
        }, l);
}
function nC() {
    if (0 === tD.size) return;
    let e = ew.Yn.DEFAULT,
        { disabledLocalVideos: t } = tV(e);
    tD.forEach((n) => {
        f()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            e1.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tD.clear(),
        t9({ disabledLocalVideos: t }, e, !1);
}
function nN() {
    let e = ew.Yn.DEFAULT,
        { videoToggleStateMap: t } = tV(e);
    for (let [e, n] of Object.entries(t)) n === eA.ZUi.AUTO_PROBING && delete t[e];
    t9({ videoToggleStateMap: t }, e, !1);
}
function nR(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === eE.default.getId()) return;
    let i = t === ew.Yn.STREAM ? ew.Yh : ew.Qx,
        { localVolumes: a } = tV(t);
    r === i ? delete a[n] : (a[n] = r), t9({ localVolumes: a }, t), e1.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function nP(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: a } = tV(t);
    (a[n] = {
        left: r,
        right: i,
    }),
        t9({ localPans: a }, t),
        e1.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function nw(e) {
    let { context: t, mode: n, options: r } = e;
    t9(
        {
            mode: n,
            modeOptions: r,
        },
        t,
    ),
        e1.eachConnection(tH),
        t6.update();
}
function nD(e) {
    let { volume: t } = e;
    t9({ inputVolume: tY(t) }), e1.setInputVolume(t);
}
function nx(e) {
    let { volume: t } = e;
    t9({ outputVolume: t }), e1.setOutputVolume(t);
}
function nL(e) {
    let { id: t } = e;
    (t = na(e7, t)), (e6 = performance.now()), t9({ inputDeviceId: t }), e1.setAudioInputDevice(t);
}
function nM(e) {
    let { id: t } = e;
    t9({ outputDeviceId: (t = na(e9, t)) }), e1.setAudioOutputDevice(t);
}
function nj(e) {
    let { id: t } = e;
    t9({ videoDeviceId: (t = na(te, t)) }), tz();
}
function nk(e) {
    let { inputProfile: t } = e;
    t9({ activeInputProfile: t });
    let n = tV();
    e1.eachConnection((e) => {
        tH(e),
            tQ(e, n.automaticGainControl),
            e.setEchoCancellation(n.echoCancellation),
            e.setExperimentalEncoders(n.experimentalEncoders),
            tJ(e, n.noiseCancellation),
            e.setNoiseSuppression(n.noiseSuppression);
    }),
        e1.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        t6.update(),
        nz();
}
function nU(e) {
    return e8 !== e.required && ((e8 = e.required), e.required || e1.interact(), !0);
}
function nG(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    no(t), nc(n), nu(r);
}
function nB(e) {
    let { inputVolume: t, outputVolume: n } = e;
    t9({
        inputVolume: tY(t),
        outputVolume: n,
    });
}
function nZ(e) {
    var t;
    let n = tV(),
        r = e1.getAudioSubsystem(),
        i = e1.getAudioLayer(),
        a = na(e7, n.inputDeviceId),
        o = null == (t = e7[a]) ? void 0 : t.name;
    eu.default.track(eA.rMx.VOICE_PROCESSING, {
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
function nF(e) {
    let t = t9({ echoCancellation: e.enabled });
    e1.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nz(), nZ(e.location);
}
function nV(e) {
    nY(e.enabled);
}
function nH(e) {
    let t = t9({ sidechainCompressionStrength: e.strength });
    e1.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function nY(e) {
    let t = t9({ sidechainCompression: e });
    e1.setSidechainCompression(t.sidechainCompression);
}
function nW(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tL.add(n) : tL.delete(n), nK(), nz();
}
function nK() {
    let e = !tL.has("voice_filter_preview") && !tL.has("mic_test");
    e1.setMaybePreprocessMute(e);
}
function nz() {
    let e = tV(),
        t = tL.size > 0,
        n = e.inputDeviceId,
        r = ey.Z.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        a = ey.Z.hasNoiseSuppression(n) || e.noiseSuppression,
        o = tX(ey.Z.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation,
        l = null !== tv,
        c = tL.has("voice_filter") && 1 === tL.size;
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
async function nq() {
    var e, t, n, r;
    if (!e1.supports(ew.AN.VAAPI)) return;
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
        ((tB = !0), (tG = e1.supports(ew.AN.GAMESCOPE_CAPTURE)));
}
function nX(e) {
    let t = t9({ noiseSuppression: e.enabled });
    e1.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nz(), nZ(e.location);
}
function nQ(e) {
    let t = t9({ automaticGainControl: e.enabled });
    e1.eachConnection((e) => tQ(e, t.automaticGainControl)), nz(), nZ(e.location);
}
function nJ(e) {
    let t = t9({ noiseCancellation: e.enabled });
    e1.eachConnection((e) => tJ(e, t.noiseCancellation)), nz(), nZ(e.location);
}
function n$(e) {
    er.Z.setKrispModelOverride(e.model), (c = e.model), nz();
}
function n0(e) {
    var t;
    (0, e_.isWeb)() || ((tO = e.enabled), null == (t = e1.setNoiseCancellationEnableStats) || t.call(e1, e.enabled));
}
function n1(e) {
    let t = t9({ experimentalEncoders: e.enabled });
    e1.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
}
function n2(e) {
    t9({ silenceWarning: e.enabled }), t6.update();
}
function n3(e) {
    e1.setDebugLogging(e.enabled);
}
function n4(e) {
    let { level: t } = e;
    (l = t), er.Z.setKrispSuppressionLevel(t);
}
function n8(e) {
    t9({ videoHook: e.enabled });
}
function n5(e) {
    t9({ experimentalSoundshare2: e.enabled });
}
function n6(e) {
    let { enabled: t } = e;
    t9({ useSystemScreensharePicker: t });
}
function n7(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = t9({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r,
        });
    e1.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function n9(e) {
    let { enabled: t } = e;
    t9({ qos: t }), e1.eachConnection((e) => e.setQoS(t));
}
function re() {
    ne();
}
function rt(e) {
    let { inputDetected: t } = e;
    (tp = t), !th && tp && ((th = !0), t6.update());
}
function rn(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === tr) return !1;
    (tr = n), e1.eachConnection(tW);
}
function rr(e) {
    let { state: t, permissionType: n } = e,
        r = t === eN.PQ.ACCEPTED;
    switch (n) {
        case eN.Eu.AUDIO:
            (tP = !0), e1.eachConnection(tW);
            break;
        case eN.Eu.CAMERA:
            !r && ta && tz(!1);
            break;
        default:
            return !1;
    }
}
function ri() {
    return tb || !1;
}
async function ra() {
    try {
        var e, t, n, i;
        await em.ZP.ensureModule("discord_krisp");
        let a = em.ZP.requireModule("discord_krisp");
        (tb = !0),
            (s = null == (e = a.getSdkVersion) ? void 0 : e.call(a)),
            (l = null != (i = null == (t = a.getSuppressionLevel) ? void 0 : t.call(a)) ? i : 100),
            null == (n = a.getNcModels) ||
                n.call(a).then((e) => {
                    (ty = e), r.emitChange();
                }),
            r.emitChange();
    } catch (t) {
        ek.warn("Failed to load Krisp module: ".concat(t.message)), eh.Z.captureException(t);
        let e = ew.H3.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? ew.H3.INITIALIZED : n;
        }
        eu.default.track(eA.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), t9({ noiseCancellation: !1 });
    } finally {
        tE = !1;
    }
}
function ro() {
    return (0, e_.isWindows)() || (0, e_.isLinux)() || (0, e_.isMac)();
}
function rs() {
    !ro() || __OVERLAY__ || tE || tb
        ? (0, e_.isWeb)() && e1.supports(ew.AN.NOISE_CANCELLATION)
            ? ((tb = !0), r.emitChange())
            : (0, e_.isWeb)() && t9({ noiseCancellation: !1 })
        : ((tE = !0), ra());
}
function rl(e) {
    let { enabled: t } = e;
    eu.default.track(eA.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != tv ? tv : null,
        enabled: t,
    }),
        t9({ voiceFilterPlaybackEnabled: t });
}
function rc(e) {
    let { newVoiceFilterId: t } = e;
    t9({ mostRecentlyRequestedVoiceFilter: t }), e1.eachConnection((e) => e.setVoiceFilterId(t));
}
function ru() {
    t9({ mostRecentlyRequestedVoiceFilter: null });
}
function rd(e) {
    let { voiceFilterId: t } = e;
    (tS = tv), (tT = tI), (tv = t), (tI = null === t ? null : Date.now());
}
function rf(e) {
    let t = e.bypassEnabled;
    t9({ bypassSystemInputProcessing: t }), e1.setAudioInputBypassSystemProcessing(t), nZ(e.location);
}
function r_(e) {
    rp(e.subsystem);
}
function rp(e) {
    e === ew.iA.AUTOMATIC
        ? (t9({ automaticAudioSubsystem: !0 }), rh())
        : (t9({ automaticAudioSubsystem: !1 }), e1.setAudioSubsystem(e));
}
function rh() {
    e1.queueAudioSubsystem(ew.iA.EXPERIMENTAL);
}
function rm(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && tz(i, null), null != t || null == n)) {
        tg = !1;
        return;
    }
    if (tg) return;
    tg = !0;
    let a = tV();
    (a.mute || a.deaf) &&
        (t9({
            deaf: !1,
            mute: !1,
        }),
        e1.eachConnection(tW));
}
function rg(e) {
    let { application: t } = e;
    e3.add(t.id);
}
function rE(e) {
    let { application: t } = e;
    e3.delete(t.id);
}
function rb(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (e4 = !1), e1.eachConnection(tW);
                break;
            case "video":
                tz(!1);
        }
}
function ry(e) {
    (e4 = e.enabled),
        e.unmute &&
            t9({
                mute: !1,
                deaf: !1,
            }),
        e1.eachConnection(tW);
}
function rO(e) {
    let { enabled: t } = e;
    en.Z.requestPermission(eN.Eu.CAMERA), tz(t);
}
function rv(e) {
    let { sourceId: t, applicationName: n, quality: i } = e,
        a = A.Z.isDecoupledGameClippingEnabled(),
        s = A.Z.getSettings().decoupledClipsEnabled;
    if (!a || !s || null == I.Z) return;
    let l = null,
        c = null,
        u = ed.Z.getPidFromDesktopSource(t);
    ({ soundshareId: l, soundshareSession: c } = nf(u));
    let d = {
        desktopSource: {
            id: t,
            sourcePid: u,
            soundshareId: l,
            soundshareSession: c,
        },
        quality: i,
    };
    null != o &&
        (e1.setClipsSource(null),
        (0, e_.isWindows)() && null != o.desktopSource.soundshareId && S.pn(o.desktopSource.soundshareId)),
        null != l && n_(l, c),
        (o = d);
    let f = tZ(),
        _ = tV().videoHook;
    e1.setClipsSource({
        desktopDescription: {
            id: o.desktopSource.id,
            soundshareId: o.desktopSource.soundshareId,
            useVideoHook: _,
            useGraphicsCapture: t2(),
            useCaptureDeviceForEncode: !1,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: t4(),
            videoHookStaleFrameTimeoutMs: eW,
            graphicsCaptureStaleFrameTimeoutMs: eK,
            hdrCaptureMode: f,
        },
        quality: i,
        applicationName: n,
    });
}
function rI(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((o = null), e1.setClipsSource(null));
}
function rS(e) {
    var t, n, r, i;
    let { settings: a } = e;
    if ((null == a ? void 0 : a.desktopSettings) != null) {
        let e = null,
            r = null,
            { sourceId: i, sound: o } = a.desktopSettings,
            s = null != (t = a.context) ? t : ew.Yn.DEFAULT,
            l =
                null != (n = a.qualityOptions)
                    ? n
                    : {
                          resolution: 720,
                          frameRate: 30,
                      },
            c = !1 === o ? null : ed.Z.getPidFromDesktopSource(i);
        e_.isPlatformEmbedded &&
            !0 === o &&
            (({ soundshareId: e, soundshareSession: r } = nf(c)), null != e && n_(e, r)),
            tK(s),
            tz(s === ew.Yn.STREAM && ta, {
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
        let e = null != (r = a.context) ? r : ew.Yn.DEFAULT,
            { videoDeviceGuid: t, audioDeviceGuid: n } = a.cameraSettings,
            o = e === ew.Yn.STREAM && ta,
            s =
                null != (i = a.qualityOptions)
                    ? i
                    : {
                          resolution: 720,
                          frameRate: 30,
                      };
        tz(o, {
            cameraSource: {
                videoDeviceGuid: t,
                audioDeviceGuid: n,
            },
            quality: {
                resolution: s.resolution,
                frameRate: s.frameRate,
            },
        });
    } else tz(ta, null);
}
function rT(e) {
    let { section: t } = e;
    return t === eA.oAB.VOICE && nn(), !1;
}
function rA() {
    return e1.eachConnection(t$), !1;
}
function rC(e) {
    let { enabled: t } = e;
    t9({ openH264: t }), e1.setH264Enabled(eQ || t0()), e1.eachConnection((e) => e.setSoftwareH264(t0()));
}
function rN(e) {
    let { enabled: t } = e,
        n = t9({ aecDumpEnabled: t });
    e1.setAecDump(n.aecDumpEnabled);
}
function rR(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (e2 = Object.values(ew.Yn).reduce((e, n) => {
        let r = n,
            i = e$();
        return (e[r] = p().merge(i, t[r])), e;
    }, {})),
        y.K.set(eU, e2),
        nt();
}
function rP(e) {
    let { state: t } = e,
        n = D.Z.isEnabled();
    if (t === eA.$7l.BACKGROUND && ta && !n) (tf = !0), tz(!1);
    else {
        if (t !== eA.$7l.ACTIVE || !tf) return !1;
        (tf = !1), tz(!0);
    }
    return !0;
}
function rw(e) {
    e1.eachConnection((t) => t.setBitRate(e.bitrate));
}
function rD() {
    if ((!ta && null == a) || null != ev.Z.getRTCConnectionId()) return !1;
    tz(!1, null);
}
function rx() {
    return !!tC && ((tC = !1), !0);
}
function rL(e) {
    e1.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function rM(e) {
    let { settings: t } = e;
    e1.applyMediaFilterSettings(t).finally(() => {
        (tN = !1), r.emitChange();
    });
}
function rj() {
    tN = !0;
}
function rk() {
    tN = !1;
}
function rU(e) {
    tk = e.enabled;
}
class rG extends (u = E.ZP.Store) {
    initialize() {
        t1(),
            t7(),
            rs(),
            nN(),
            (tM = {
                [ew.AN.VIDEO]: e1.supports(ew.AN.VIDEO),
                [ew.AN.DESKTOP_CAPTURE]: e1.supports(ew.AN.DESKTOP_CAPTURE),
                [ew.AN.HYBRID_VIDEO]: e1.supports(ew.AN.HYBRID_VIDEO),
            }),
            this.waitFor(eE.default, eb.Z, ey.Z, eO.Z, A.Z, w.Z, ev.Z, x.ZP, ei.Z, es.Z, eS.default, eT.Z, ec.Z);
    }
    supports(e) {
        return e1.supports(e);
    }
    supportsInApp(e) {
        return tM[e] || e1.supports(e);
    }
    isSupported() {
        return e1.supported();
    }
    isExperimentalEncodersSupported() {
        return e1.supports(ew.AN.EXPERIMENTAL_ENCODERS);
    }
    isNoiseSuppressionSupported() {
        return e1.supports(ew.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return ri();
    }
    isNoiseCancellationError() {
        return tC;
    }
    isAutomaticGainControlSupported() {
        return e1.supports(ew.AN.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !t5() && (e1.supports(ew.AN.LEGACY_AUDIO_SUBSYSTEM) || e1.supports(ew.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return e1.supports(ew.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === e1.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return ri();
    }
    isAecDumpSupported() {
        return e1.supports(ew.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return e1.supports(ew.AN.VIDEO) && e1.supports(ew.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        return (
            (null == (e = eO.Z.getChannel(tA)) ? void 0 : e.type) !== eA.d4z.GUILD_STAGE_VOICE &&
            eQ &&
            H.Z.simulcastEnabled()
        );
    }
    getAecDump() {
        return tV().aecDumpEnabled;
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
        return null != e2[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ew.Yn.DEFAULT;
        return e === ew.Yn.DEFAULT && tn;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ew.Yn.DEFAULT;
        return (
            !this.isEnabled() ||
            tV(e).mute ||
            !en.Z.didHavePermission(eN.Eu.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === ew.Yn.DEFAULT && tr)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tl;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tl = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ew.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && ey.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return tk;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ew.Yn.DEFAULT;
        return !this.isSupported() || tV(e).deaf;
    }
    isVideoEnabled() {
        return ta && t_;
    }
    isVideoAvailable() {
        return Object.values(te).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ew.Yn.STREAM;
        return e5 === e && null != a;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ew.Yn.STREAM;
        return e5 === t && null != a && (null == (e = a.desktopSource) ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ew.Yn.DEFAULT;
        return e !== eE.default.getId() && (tV(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return e1.supports(ew.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ew.Yn.DEFAULT;
        return null != (t = tV(n).disabledLocalVideos[e]) && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ew.Yn.DEFAULT;
        return null != (t = tV(n).videoToggleStateMap[e]) ? t : eA.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ew.Yn.DEFAULT;
        return t === ew.Yn.DEFAULT && tD.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ew.Yn.DEFAULT;
        return e === ew.Yn.DEFAULT && tD.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tN;
    }
    isNativeAudioPermissionReady() {
        return tP;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return e5;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return e6;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ew.Yn.DEFAULT,
            n = tV(t).localPans[e];
        return null != n ? n : eY;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ew.Yn.DEFAULT,
            n = t === ew.Yn.STREAM ? ew.Yh : ew.Qx,
            r = tV(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return tV().inputVolume;
    }
    getOutputVolume() {
        return tV().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ew.Yn.DEFAULT;
        return tV(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ew.Yn.DEFAULT;
        return tV(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return tv;
    }
    getActiveVoiceFilterAppliedAt() {
        return tI;
    }
    getPreviousVoiceFilter() {
        return tS;
    }
    getPreviousVoiceFilterAppliedAt() {
        return tT;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return tV().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return tV().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            p().each(e2, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === eA.pM4.PUSH_TO_TALK && e3.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return na(e7, tV().inputDeviceId);
    }
    getOutputDeviceId() {
        return na(e9, tV().outputDeviceId);
    }
    getVideoDeviceId() {
        return na(te, tV().videoDeviceId);
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
        let e = tV();
        return ey.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return e1.supports(ew.AN.SIDECHAIN_COMPRESSION) && tV().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return tV().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return tV().h265Enabled;
    }
    getLoopback() {
        return tL.size > 0;
    }
    getLoopbackReasons() {
        return tL;
    }
    getNoiseSuppression() {
        let e = tV();
        return ey.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tV();
        return ey.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return tV().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return tV().noiseCancellation;
    }
    getExperimentalEncoders() {
        return tV().experimentalEncoders;
    }
    getHardwareEncoding() {
        return eQ;
    }
    getEnableSilenceWarning() {
        return tV().silenceWarning;
    }
    getDebugLogging() {
        return e1.getDebugLogging();
    }
    getQoS() {
        return tV().qos;
    }
    getAttenuation() {
        return tV().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return tV().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return tV().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return t8() && tV().automaticAudioSubsystem ? ew.iA.AUTOMATIC : e1.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return e1.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return tV().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eP._.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ew.Yn.DEFAULT;
        return tV(e);
    }
    getState() {
        return {
            settingsByContext: e2,
            inputDevices: e7,
            outputDevices: e9,
            appSupported: tM,
            krispModuleLoaded: tb,
            krispVersion: s,
            krispSuppressionLevel: l,
            goLiveSource: a,
            goLiveContext: e5,
        };
    }
    getInputDetected() {
        return tp;
    }
    getNoInputDetectedNotice() {
        return tm;
    }
    getPacketDelay() {
        return e_.isPlatformEmbedded || this.getMode() !== eA.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        e1.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return e8;
    }
    getVideoHook() {
        return tV().videoHook;
    }
    supportsVideoHook() {
        return e1.supports(ew.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tV().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return (
            e1.supports(ew.AN.EXPERIMENTAL_SOUNDSHARE) &&
            m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eC.T6)
        );
    }
    supportsHookSoundshare() {
        return (
            (0, e_.isWindows)() &&
            e1.supports(ew.AN.SOUNDSHARE) &&
            m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eC.sA)
        );
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = tV().useSystemScreensharePicker,
            n = (0, e_.isLinux)();
        return e && (null != t ? t : n);
    }
    supportsSystemScreensharePicker() {
        return e1.supports(ew.AN.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return tB;
    }
    getUseGamescopeCapture() {
        return tG;
    }
    getOpenH264() {
        return tV().openH264;
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
        return null != (e = tV().modeOptions.vadKrispActivationThreshold) ? e : eH;
    }
    hasActiveCallKitCall() {
        return tU;
    }
    setHasActiveCallKitCall(e) {
        tU = e;
    }
    supportsScreenSoundshare() {
        return (0, e_.isMac)()
            ? e1.supports(ew.AN.SOUNDSHARE) &&
                  m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eC.yG) &&
                  t4()
            : (0, e_.isWindows)()
              ? e1.supports(ew.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, e_.isLinux)() && e1.supports(ew.AN.SCREEN_SOUNDSHARE);
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ew.Yn.DEFAULT,
            t = this.supports(ew.AN.VIDEO)
                ? [
                      {
                          rid: "100",
                          type: e === ew.Yn.DEFAULT ? ew.Tr.VIDEO : ew.Tr.SCREEN,
                          quality: ew.y7,
                      },
                  ]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === ew.Yn.DEFAULT || this.goLiveSimulcastEnabled()) &&
                t.push({
                    rid: "50",
                    type: e === ew.Yn.DEFAULT ? ew.Tr.VIDEO : ew.Tr.SCREEN,
                    quality: ew.LD,
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
        if (!tR && ((tR = !0), (0, e_.isWeb)())) {
            let e = { fetchDave: !0 };
            e1.fetchAsyncResources(e).catch((e) => {
                ek.warn("DAVE preload failed:", e), eh.Z.captureException(e);
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
        return (t.canSupportDaveProtocol || (n.allowOptIn && ei.Z.getPersistentCodesEnabled())) &&
            e >= t.protocolVersionFloor
            ? e
            : 0;
    }
    hasClipsSource() {
        return null != o;
    }
    getGpuBrand() {
        return tj;
    }
}
function rB(e) {
    if (null == e.taskMetrics || 0 === e.taskMetrics.length || 1 === e.taskMetrics.length) return null;
    let t = {
        metrics_period_ms: e.periodMs,
        total_tasks: 0,
        total_exec_time_ns: 0,
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
ex(rG, "displayName", "MediaEngineStore");
let rZ = (r = new rG(v.Z, {
    VOICE_CHANNEL_SELECT: rm,
    VOICE_STATE_UPDATES: nb,
    CONNECTION_OPEN: np,
    CONNECTION_CLOSED: nm,
    POST_CONNECTION_OPEN: ng,
    RTC_CONNECTION_STATE: nE,
    AUDIO_SET_TEMPORARY_SELF_MUTE: ny,
    AUDIO_TOGGLE_SELF_MUTE: nO,
    AUDIO_SET_SELF_MUTE: nv,
    AUDIO_TOGGLE_SELF_DEAF: nS,
    AUDIO_TOGGLE_LOCAL_MUTE: nT,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: nA,
    AUDIO_SET_LOCAL_VOLUME: nR,
    AUDIO_SET_LOCAL_PAN: nP,
    AUDIO_SET_MODE: nw,
    AUDIO_SET_INPUT_VOLUME: nD,
    AUDIO_SET_OUTPUT_VOLUME: nx,
    AUDIO_SET_INPUT_DEVICE: nL,
    AUDIO_SET_OUTPUT_DEVICE: nM,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: nk,
    AUDIO_SET_ECHO_CANCELLATION: nF,
    AUDIO_SET_SIDECHAIN_COMPRESSION: nV,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nH,
    AUDIO_SET_LOOPBACK: nW,
    AUDIO_SET_NOISE_SUPPRESSION: nX,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nQ,
    AUDIO_SET_NOISE_CANCELLATION: nJ,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: n$,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: n2,
    AUDIO_SET_DEBUG_LOGGING: n3,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: n4,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: n0,
    MEDIA_ENGINE_SET_VIDEO_HOOK: n8,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: n5,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: n6,
    AUDIO_SET_ATTENUATION: n7,
    AUDIO_SET_QOS: n9,
    MEDIA_ENGINE_DEVICES: nG,
    AUDIO_VOLUME_CHANGE: nB,
    AUDIO_RESET: re,
    AUDIO_INPUT_DETECTED: rt,
    AUDIO_SET_SUBSYSTEM: r_,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rf,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: ry,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rO,
    MEDIA_ENGINE_PERMISSION: rb,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rS,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nj,
    MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: n1,
    MEDIA_ENGINE_INTERACTION_REQUIRED: nU,
    USER_SETTINGS_MODAL_INIT: rT,
    USER_SETTINGS_MODAL_SET_SECTION: rT,
    CERTIFIED_DEVICES_SET: rA,
    RPC_APP_CONNECTED: rg,
    RPC_APP_DISCONNECTED: rE,
    OVERLAY_INITIALIZE: nh,
    MEDIA_ENGINE_SET_OPEN_H264: rC,
    APP_STATE_UPDATE: rP,
    SET_CHANNEL_BITRATE: rw,
    SET_VAD_PERMISSION: rn,
    SET_NATIVE_PERMISSION: rr,
    SET_CHANNEL_VIDEO_QUALITY_MODE: rL,
    MEDIA_ENGINE_SET_AEC_DUMP: rN,
    MEDIA_ENGINE_RESET_SETTINGS: rR,
    CHANNEL_DELETE: rD,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rx,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rM,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rj,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rk,
    USER_SETTINGS_PROTO_UPDATE: nI,
    CLIPS_INIT: rv,
    CLIPS_SETTINGS_UPDATE: rI,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rU,
    VOICE_FILTER_REQUEST_SWITCH: rc,
    VOICE_FILTER_LOOPBACK_TOGGLE: rl,
    VOICE_FILTER_APPLIED: rd,
    VOICE_FILTER_DOWNLOAD_FAILED: ru,
    VOICE_FILTER_APPLY_FAILED: ru,
}));
