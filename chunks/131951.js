let r, i, a, o, s, l, c;
n.d(t, { Z: () => rU }), n(388685), n(953529), n(457542), n(539854), n(642613), n(49124), n(337869);
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
    T = n(887278),
    S = n(547727),
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
    V = n(302630),
    H = n(166884),
    Y = n(422797),
    W = n(64592),
    K = n(837968),
    z = n(529558),
    q = n(705946),
    X = n(412412),
    Q = n(441167),
    J = n(986855),
    $ = n(338336),
    ee = n(751571),
    et = n(311473),
    en = n(725380),
    er = n(383451),
    ei = n(581883),
    ea = n(875527),
    eo = n(420439),
    es = n(626135),
    el = n(12647),
    ec = n(70956),
    eu = n(358085),
    ed = n(747268),
    ef = n(960048),
    e_ = n(998502),
    ep = n(13140),
    eh = n(314897),
    em = n(967368),
    eg = n(463395),
    eE = n(592125),
    eb = n(19780),
    ey = n(704806),
    eO = n(594174),
    ev = n(631768),
    eI = n(981631),
    eT = n(70722),
    eS = n(761274),
    eA = n(526761),
    eC = n(345655),
    eN = n(65154),
    eR = n(388032);
function eP(e, t, n) {
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
function ew(e) {
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
                eP(e, t, n[t]);
            });
    }
    return e;
}
function eD(e, t) {
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
function ex(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eD(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eL = new N.Z("MediaEngineStore"),
    eM = "MediaEngineStore",
    ej = 4,
    ek = 1,
    eU = 1,
    eG = 1,
    eB = 1,
    eZ = 0.5,
    eF = {
        left: 1,
        right: 1,
    },
    eV = 500,
    eH = 5 * ec.Z.Millis.SECOND,
    eY = -60,
    eW = 100,
    eK = 2 * ec.Z.Millis.SECOND,
    ez = !0,
    eq = 0;
function eX() {
    return {
        mode: eI.pM4.VOICE_ACTIVITY,
        modeOptions: {
            threshold: eY,
            autoThreshold: eu.isPlatformEmbedded || __OVERLAY__,
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
        inputVolume: eN.Qx,
        outputVolume: eN.Qx,
        inputDeviceId: eN.w5,
        outputDeviceId: eN.w5,
        videoDeviceId: eN.w5,
        qos: !1,
        qosMigrated: !1,
        videoHook: eJ.supports(eN.AN.VIDEO_HOOK),
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
let eQ = {
        [eC._.CUSTOM]: {},
        [eC._.VOICE_ISOLATION]: {
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
        [eC._.STUDIO]: {
            mode: eI.pM4.VOICE_ACTIVITY,
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
    eJ = (0, b.Mt)((0, b.jj)());
eL.enableNativeLogger(!0);
let e$ = {},
    e0 = new Set([eN.Yn.DEFAULT]),
    e1 = eJ.supports(eN.AN.AUTO_ENABLE),
    e2 = !1,
    e3 = eN.Yn.STREAM,
    e4 = performance.now(),
    e8 = { [eN.w5]: ne("No Input Devices") },
    e5 = { [eN.w5]: ne("No Output Devices") },
    e6 = { [eN.w5]: ne("No Video Devices") },
    e7 = !1,
    e9 = !1,
    te = !1,
    tt = !1,
    tn = !1,
    tr = eN.Av,
    ti = eN.Av,
    ta = !1,
    to = !1,
    ts = !1,
    tl = new O.V7(),
    tc = !1,
    tu = !1,
    td = null,
    tf = !1,
    t_ = !1,
    tp = !1,
    th = !1,
    tm = !1,
    tg = [],
    tE = !1,
    tb = null,
    ty = null,
    tO = null,
    tv = null,
    tI = null,
    tT = !1,
    tS = !1,
    tA = !1,
    tC = !1;
ee.Z.hasPermission(eS.Eu.AUDIO, { showAuthorizationError: !1 }),
    ee.Z.hasPermission(eS.Eu.CAMERA, { showAuthorizationError: !1 });
let tN = !1,
    tR = new Set(),
    tP = tN,
    tw = new Set(),
    tD = {},
    tx = null,
    tL = !0,
    tM = !1,
    tj = !1,
    tk = !1;
function tU() {
    var e, t;
    return null != (t = null == (e = eO.default.getCurrentUser()) ? void 0 : e.isStaff()) && t
        ? "always"
        : ed.Z === g.R.CANARY
          ? "permittedDevicesOnly"
          : "never";
}
function tG() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eN.Yn.DEFAULT,
        t = e$[e];
    return null == t && ((t = eX()), (e$[e] = t)), t;
}
function tB() {
    var e, t, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eN.Yn.DEFAULT,
        i = tG(r),
        a = eQ[null != (e = i.activeInputProfile) ? e : eC._.CUSTOM],
        o = ew({}, null != (t = i.modeOptions) ? t : {}, null != (n = a.modeOptions) ? n : {});
    if (
        (null == o.vadDuringPreProcess && (o.vadDuringPreProcess = (0, q.C)({ location: "getSettings" }).enabled),
        (null == o.vadKrispActivationThreshold && !0 === a.automaticGainControl) || !0 === i.automaticGainControl)
    ) {
        let e = (0, M.U)({ location: "getSettings" });
        null != e.vadKrispActivationThreshold && (o.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return ex(ew({}, i, a), { modeOptions: o });
}
function tZ(e) {
    var t, n;
    let r = tB(e.context),
        i = r.mode;
    e.context === eN.Yn.DEFAULT &&
        ((0, er.f)({
            location: "setInputMode",
            autoTrackExposure: !1,
        }).enableLatching &&
            i === eI.pM4.PUSH_TO_TALK &&
            r.modeOptions.pttLatchingEnabled &&
            (i = eI.pM4.VOICE_ACTIVITY),
        (0, K.I)(!1, !1, !1)),
        e.setInputMode(i, {
            vadThreshold: r.modeOptions.threshold,
            vadAutoThreshold: r.modeOptions.autoThreshold,
            vadUseKrisp: r.modeOptions.vadUseKrisp && rt(),
            vadKrispActivationThreshold: null != (t = r.modeOptions.vadKrispActivationThreshold) ? t : eZ,
            vadLeading: r.modeOptions.vadLeading,
            vadTrailing: r.modeOptions.vadTrailing,
            vadDuringPreProcess: null != (n = r.modeOptions.vadDuringPreProcess) && n,
            pttReleaseDelay: Math.round(r.modeOptions.delay),
        });
}
function tF(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eN.Qx;
    return p().clamp(e, 0, t);
}
function tV(e) {
    let t = tB(e.context),
        n = !e1 || t.mute || t.deaf;
    e.context === eN.Yn.DEFAULT
        ? (n = n || e7 || e9 || te || !ee.Z.didHavePermission(eS.Eu.AUDIO))
        : e.context === eN.Yn.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eN.Yn.DEFAULT && S.Z.updateNativeMute();
}
function tH(e) {
    e !== e3 && (null != a && eJ.setGoLiveSource(null, e3), (e3 = e));
}
function tY() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tn,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        s = a;
    if (
        ((null == s ? void 0 : s.desktopSource) != null &&
            s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? void 0 : e.id) &&
            (null != s.desktopSource.soundshareId && (0, eu.isWindows)() && T.pn(s.desktopSource.soundshareId),
            eJ.setGoLiveSource(null, e3)),
        (null == s ? void 0 : s.cameraSource) != null &&
            (s.cameraSource.videoDeviceGuid !==
                (null == o || null == (t = o.cameraSource) ? void 0 : t.videoDeviceGuid) ||
                s.cameraSource.audioDeviceGuid !==
                    (null == o || null == (n = o.cameraSource) ? void 0 : n.audioDeviceGuid)) &&
            eJ.setGoLiveSource(null, e3),
        tn || i)
    ) {
        let e = tB().videoDeviceId;
        tn && e === eN.w5 && ti === eN.w5 && tr !== eN.Av ? (e = tr) : (ti = e),
            (tr = (tn = i) ? nn(e6, e) : eN.Av),
            eJ.setVideoInputDevice(tr);
    }
    if (((a = o), null != o)) {
        let e = {
            resolution: o.quality.resolution,
            frameRate: o.quality.frameRate,
        };
        if (null != o.desktopSource) {
            let t = tU(),
                n = tB().videoHook,
                i = t$(),
                a = i ? (t0() ? eT.zj : eT.ZM) : 0,
                s = (0, eu.isWindows)() && (0, X.t)("updateVideo").enabled;
            eJ.setGoLiveSource(
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
                        allowScreenCaptureKit: t1(),
                        videoHookStaleFrameTimeoutMs: eV,
                        graphicsCaptureStaleFrameTimeoutMs: eH,
                        hdrCaptureMode: t,
                    },
                    quality: e,
                },
                e3,
            );
        }
        null != o.cameraSource &&
            eJ.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: o.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                e3,
            );
    }
}
function tW(e) {
    switch (e) {
        case eN.H3.CPU_OVERUSE:
            return P.Nk.NoiseCancellerCpuOveruse;
        case eN.H3.FAILED:
            return P.Nk.NoiseCancellerFailed;
        case eN.H3.VAD_CPU_OVERUSE:
            return P.Nk.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function tK(e) {
    let t = (0, M.U)({
        location: "getAutomaticGainControlConfig",
        disable: !e,
    }).noiseCancellationConfig;
    return ew({ enabled: e }, t);
}
function tz(e, t) {
    e.setAutomaticGainControl(tK(t));
}
async function tq(e, t) {
    if ((0, eu.isIOS)() || (0, eu.isMac)()) {
        let e = await eJ.getSystemMicrophoneMode();
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
function tX(e) {
    let t = tB(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eg.Z.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eg.Z.hasNoiseSuppression(n) || t.noiseSuppression),
        tz(e, eg.Z.hasAutomaticGainControl(n) || t.automaticGainControl),
        tq(e, t.noiseCancellation),
        e.setVoiceFilterId(tb),
        (0, eu.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function tQ() {
    var e;
    return !(0, W.f)("MediaEngine").enabled && !(0, J.M)("MediaEngine").enabled && (null == (e = tB().openH264) || e);
}
function tJ() {
    eJ.on(b.aB.Connection, (e) => {
        tZ(e), tV(e), tX(e);
        let t = tB();
        e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
            e.setQoS(t.qos),
            e.setExperimentalEncoders(t.experimentalEncoders),
            e.setHardwareH264(ez),
            e.setSoftwareH264(tQ());
        let n = eb.Z.getGuildId(),
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
        i && e.setExperimentFlag(eN.V8.MUTE_BEFORE_PROCESSING, !0),
            o && e.setExperimentFlag(eN.V8.PTT_BEFORE_PROCESSING, !0),
            s && e.setExperimentFlag(eN.V8.SKIP_ENCODE, !0);
        let l = !1,
            c = !0;
        if (
            (e.setExperimentFlag(eN.V8.RESET_DECODER_ON_ERRORS, !0),
            l && e.setExperimentFlag(eN.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0),
            c && e.setExperimentFlag(eN.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0),
            e.context === eN.Yn.STREAM)
        ) {
            let t = ni(e5);
            e.setSoundshareDiscardRearChannels(t);
            let { simulcastEnabled: n, lqStreamBitrate: r } = H.Z.getConfig();
            e.configureGoLiveSimulcast(n, r);
        }
        if (
            ((0, eu.isWindows)()
                ? (null == tx ? void 0 : tx.startsWith("NVIDIA")) || (null == tx ? void 0 : tx.startsWith("AMD"))
                    ? e.setExperimentFlag(eN.V8.SIGNAL_AV1, !0)
                    : e.setExperimentFlag(eN.V8.SIGNAL_AV1_DECODE, !0)
                : ((0, eu.isMac)() || (0, eu.isLinux)()) && e.setExperimentFlag(eN.V8.SIGNAL_AV1_DECODE, !0),
            (0, eu.isWindows)() && e.setExperimentFlag(eN.V8.SIGNAL_AV1_HARDWARE_DECODE, !0),
            (0, eu.isWeb)())
        ) {
            let { enabled: t } = (0, F.A)("MediaEngineStore");
            e.setExperimentFlag(eN.V8.BROWSER_HEVC, t);
        }
        if ((eJ.setHasFullbandPerformance((0, R.Z)()), e.setRemoteAudioHistory(1000), (0, C.Z)(r))) {
            let t = A.Z.getSettings();
            e.setExperimentFlag(eN.V8.STREAMER_CLIP, t.clipsEnabled);
            let { enableViewerClipping: n } = Q.Z.getCurrentConfig(
                { location: "f627ab_15" },
                { autoTrackExposure: !1 },
            );
            e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eN.ux);
        }
        for (let n of ((t = tB(e.context)), e.setPostponeDecodeLevel(eW), Object.keys(t.localMutes)))
            n !== eh.default.getId() && e.setLocalMute(n, t.localMutes[n]);
        for (let n of Object.keys(t.localVolumes)) n !== eh.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
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
            e.context === eN.Yn.DEFAULT &&
                ((to = !1),
                (ts = !1),
                e.on(b.Sh.SpeakingWhileMuted, () => {
                    (to = !0),
                        (ts = !0),
                        r.emitChange(),
                        tl.stop(),
                        tl.start(eK, () => {
                            (ts = !1), r.emitChange();
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
                    es.default.track(
                        eI.rMx.VIDEOHOOK_INITIALIZED,
                        ew(
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
                eL.warn("noisecancellererror event: ".concat(e)),
                    (0, P.kr)({
                        type: P.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tW(e),
                    }),
                    (tT = !0),
                    es.default.track(eI.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
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
                eL.warn("voiceactivitydetectorerror event: ".concat(e)),
                    (0, P.kr)({
                        type: P.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tW(e),
                    }),
                    es.default.track(eI.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    v.Z.dispatch({
                        type: "AUDIO_SET_MODE",
                        context: eN.Yn.DEFAULT,
                        mode: eI.pM4.VOICE_ACTIVITY,
                        options: ex(ew({}, tB(eN.Yn.DEFAULT).modeOptions), { vadUseKrisp: !1 }),
                    }),
                    v.Z.dispatch({
                        type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
                        code: e,
                    });
            }),
            e.on(b.Sh.SdpError, (e, t, n, r) => {
                es.default.track(eI.rMx.SDP_ERROR, {
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
            e.setBitRate(em.Z.bitrate),
            e.applyVideoQualityMode(ev.Z.mode),
            eJ.supports(eN.AN.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                eJ.setAsyncVideoInputDeviceInit((0, G.p)("setupMediaEngine").enabled);
    }),
        eJ.on(b.aB.DeviceChange, (e, t, n) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_DEVICES",
                inputDevices: e,
                outputDevices: t,
                videoDevices: n,
            });
        }),
        eJ.on(b.aB.VolumeChange, (e, t) => {
            v.Z.dispatch({
                type: "AUDIO_VOLUME_CHANGE",
                inputVolume: e,
                outputVolume: t,
            });
        }),
        eJ.on(b.aB.DesktopSourceEnd, (e, t) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                settings: null,
                endReason: e,
                errorCode: t,
            });
        }),
        eJ.on(b.aB.AudioPermission, (e) => {
            (tC = !0),
                v.Z.dispatch({
                    type: "MEDIA_ENGINE_PERMISSION",
                    kind: "audio",
                    granted: e,
                });
        }),
        eJ.on(b.aB.VideoPermission, (e) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_PERMISSION",
                kind: "video",
                granted: e,
            });
        }),
        eJ.on(b.aB.WatchdogTimeout, async () => {
            let e;
            try {
                await el.Z.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
            } catch (t) {
                "number" == typeof t.status && (e = t.status);
            }
            eL.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)),
                es.default.track(eI.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        eJ.on(b.aB.VideoInputInitialized, (e) => {
            es.default.track(eI.rMx.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired
                    ? null
                    : Math.round(e.timeToFirstFrame * ec.Z.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: eb.Z.getMediaSessionId(),
                rtc_connection_id: eb.Z.getRTCConnectionId(),
            });
        }),
        eJ.on(b.aB.AudioInputInitialized, (e) => {
            es.default.track(eI.rMx.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * ec.Z.Millis.SECOND),
                rtc_connection_id: eb.Z.getRTCConnectionId(),
            });
        }),
        eJ.on(b.aB.ClipsRecordingRestartNeeded, () => {
            v.Z.dispatch({ type: "CLIPS_RESTART" });
        }),
        eJ.on(b.aB.ClipsInitFailure, (e, t) => {
            v.Z.wait(() => {
                v.Z.dispatch({
                    type: "CLIPS_INIT_FAILURE",
                    errMsg: e,
                    applicationName: t,
                });
            });
        }),
        eJ.on(b.aB.ClipsRecordingEnded, (e, t) => {
            var n, r;
            (null == o || null == (n = o.desktopSource) ? void 0 : n.id) === e &&
                (null != t && (null == a || null == (r = a.desktopSource) ? void 0 : r.soundshareId) !== t && T.pn(t),
                (o = null));
        }),
        eJ.on(b.aB.NativeScreenSharePickerUpdate, (e, t) => {
            v.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE",
                existing: e,
                content: t,
            });
        }),
        eJ.on(b.aB.NativeScreenSharePickerCancel, (e) => {
            v.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL",
                existing: e,
            });
        }),
        eJ.on(b.aB.NativeScreenSharePickerError, (e) => {
            v.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_ERROR",
                error: e,
            });
        }),
        eJ.on(b.aB.AudioDeviceModuleError, (e, t, n) => {
            es.default.track(eI.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                audio_device_module: e,
                code: t,
                device_name: n,
            });
        }),
        eJ.on(b.aB.VideoCodecError, (e) => {
            let t = "encode" === e.mode ? P.u.VIDEO_ENCODE_ERROR : P.u.VIDEO_DECODE_ERROR,
                n = {
                    videoCodec: e.codecStandard,
                    errorMessage: e.message,
                };
            (0, P.kr)(
                t === P.u.VIDEO_ENCODE_ERROR
                    ? ex(ew({ type: t }, n), { videoEncoder: e.implName })
                    : ex(ew({ type: t }, n), { videoDecoder: e.implName }),
            );
        }),
        eJ.on(b.aB.ConnectionStats, (e) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_CONNECTION_STATS",
                connectionStats: e.map((e) => {
                    let { stats: t, connection: n } = e;
                    return {
                        stats: t,
                        mediaEngineConnectionId: n.mediaEngineConnectionId,
                        version: eq++,
                        context: n.context,
                    };
                }),
            });
        }),
        eJ.on(b.aB.VoiceQueueMetrics, (e) => {
            let t = rk(e);
            null !== t && es.default.track(eI.rMx.VOICE_QUEUE_METRICS, t);
        }),
        eJ.setOnVideoContainerResized((e, t, n) => {
            v.Z.wait(() =>
                v.Z.dispatch({
                    type: "VIDEO_SIZE_UPDATE",
                    streamId: e,
                    width: t,
                    height: n,
                }),
            );
        }),
        nH(),
        nW(),
        t4.reset(),
        (0, ey.q)().then((e) => {
            null != e && (tx = e.gpu_brand);
        }),
        eJ.on(b.aB.SystemMicrophoneModeChange, (e) => {
            eJ.eachConnection(tX);
        });
}
function t$() {
    return (0, eu.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eT.c5);
}
function t0() {
    return (0, eu.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eT.sN);
}
function t1() {
    return (
        (0, eu.isMac)() &&
        eJ.supports(eN.AN.SCREEN_CAPTURE_KIT) &&
        m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eT.C7)
    );
}
function t2() {
    return (
        (0, eu.isWindows)() &&
        eJ.supports(eN.AN.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        eJ.supports(eN.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function t3() {
    return eJ.supports(eN.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
let t4 = new (class {
    start() {
        this.started || ((this.started = !0), eJ.on(b.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout &&
                (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            eJ.removeListener(b.aB.Silence, this.handleSilence),
            v.Z.dispatch({
                type: "AUDIO_INPUT_DETECTED",
                inputDetected: null,
            }));
    }
    update() {
        let e = tB();
        !tf && eb.Z.getState() === eI.hes.RTC_CONNECTED && e.mode === eI.pM4.VOICE_ACTIVITY && e.silenceWarning
            ? this.start()
            : this.stop();
    }
    reset() {
        this.stop(), this.update();
    }
    constructor() {
        eP(this, "stateChangeTimeout", void 0),
            eP(this, "noVoiceTimeout", 5000),
            eP(this, "voiceTimeout", 1500),
            eP(this, "started", !1),
            eP(this, "handleSilence", (e) => {
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
                                    e && (t_ = !0));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout,
                    ));
            });
    }
})();
function t8() {
    var e;
    let t = y.K.get("audio");
    null != t && (y.K.set(eM, { [eN.Yn.DEFAULT]: t }), y.K.remove("audio")),
        (e$ = null != (e = y.K.get(eM)) ? e : {}),
        p().each(e$, (e) => {
            if (
                (p().defaultsDeep(e, eX()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, ep.Kd)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== ej &&
                    ((e.vadUseKrispSettingVersion = ej), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                !e.vadThrehsoldMigrated)
            ) {
                var t;
                (e.vadThrehsoldMigrated = !0),
                    (null == (t = e.modeOptions) ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = eY);
            }
            eJ.supports(eN.AN.SIDECHAIN_COMPRESSION) &&
                e.sidechainCompressionSettingVersion < eB &&
                ((e.sidechainCompressionSettingVersion = eB), (e.sidechainCompression = !0)),
                (0, eu.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== eU &&
                      ((e.ncUseKrispjsSettingVersion = eU), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== ek &&
                      ((e.ncUseKrispSettingVersion = ek), (e.noiseSuppression = !1), (e.noiseCancellation = !0)),
                e.hardwareEnabledVersion !== eG && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = eG)),
                null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
        }),
        t7();
}
function t5(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eN.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = tG(t);
    return Object.assign(r, e), !__OVERLAY__ && n && y.K.set(eM, e$), r;
}
function t6() {
    y.K.remove(eM), location.reload();
}
function t7() {
    let e = tB();
    eJ.setAudioInputDevice(e.inputDeviceId),
        eJ.setAudioOutputDevice(e.outputDeviceId),
        tY(),
        eJ.setInputVolume(e.inputVolume),
        eJ.setOutputVolume(e.outputVolume),
        eJ.setH264Enabled(ez || tQ()),
        eJ.setAv1Enabled(ez),
        eJ.setH265Enabled(ez),
        eJ.setAecDump(e.aecDumpEnabled),
        eJ.setSidechainCompression(e.sidechainCompression),
        eJ.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        eJ.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing);
}
function t9() {
    e1 ||
        eJ.enable().then(() =>
            v.Z.dispatch({
                type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
                enabled: !0,
                unmute: !1,
            }),
        );
}
function ne(e) {
    return {
        id: eN.w5,
        index: 0,
        name: e,
        disabled: !0,
        hardwareId: void 0,
        containerId: void 0,
    };
}
function nt(e, t) {
    if (0 === e.length) {
        let e = ne(t);
        return { [e.id]: e };
    }
    return p()(e)
        .map((e) => ({
            id: e.id,
            index: e.index,
            name: e.name,
            disabled: !1,
            facing: e.facing,
            hardwareId: e.hardwareId,
            containerId: e.containerId,
        }))
        .keyBy("id")
        .value();
}
function nn(e, t) {
    var n, r;
    let i = null != (r = null != (n = e[t]) ? n : e[eN.w5]) ? r : p()(e).values().first();
    return null != i ? i.id : t;
}
function nr(e) {
    let t = e8;
    if (((e8 = nt(e, eR.intl.string(eR.t["/QIjDA"]))), !p().isEqual(e8, t))) {
        let e = tB(),
            t = nn(e8, e.inputDeviceId);
        eJ.setAudioInputDevice(t);
    }
}
function ni(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function na(e) {
    eJ.eachConnection((t) => {
        t.context === eN.Yn.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function no(e) {
    let t = e5;
    if (((e5 = nt(e, eR.intl.string(eR.t.xlUg0v))), !p().isEqual(e5, t))) {
        let e = tB(),
            n = nn(e5, e.outputDeviceId);
        eJ.setAudioOutputDevice(n);
        let r = ni(t),
            i = ni(e5);
        r !== i && na(i);
    }
}
function ns(e) {
    tu = e.length > 0;
    let t = e6;
    if (((e6 = nt(e, eR.intl.string(eR.t.WKWARY))), tn && !p().isEqual(e6, t))) {
        var n;
        let e = void 0 !== e6[tr],
            r = tr === eN.w5 && (null == (n = t[eN.w5]) ? void 0 : n.disabled);
        tY(e || r);
    }
}
function nl() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        r =
            null != (e = ei.Z.settings.audioContextSettings)
                ? e
                : {
                      user: {},
                      stream: {},
                  };
    for (let e of Object.keys(r)) {
        let i = e === eA.u0.USER ? eN.Yn.DEFAULT : eN.Yn.STREAM,
            a = i === eN.Yn.STREAM ? eN.Yh : eN.Qx,
            o = null != (t = r[e]) ? t : {},
            { localMutes: s, localVolumes: l } = tB(i);
        for (let [e, t] of Object.entries(o))
            null == (0, en.Ky)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== a ? (l[e] = t.volume) : delete l[e],
                eJ.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (n)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == o[e] &&
                    (delete s[e],
                    delete l[e],
                    eJ.eachConnection((t) => {
                        t.setLocalVolume(e, a), t.setLocalMute(e, !1);
                    }, i));
        t5(
            {
                localMutes: s,
                localVolumes: l,
            },
            i,
        );
    }
}
function nc(e) {
    if (null == r)
        return (
            eL.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
            {
                soundshareId: null,
                soundshareSession: "",
            }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : el.Z.getAudioPid(e),
            n = "";
        return (
            null != t && (n = el.Z.generateSessionFromPid(t)),
            {
                soundshareId: t,
                soundshareSession: n,
            }
        );
    }
}
function nu(e, t) {
    (0, eu.isWindows)() &&
        e > 1 &&
        T.YT(e, { soundshare_session: t }).then((t) => {
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
function nd(e) {
    (i = e.sessionId), (e7 = !1), (tt = !1);
    let t = tB();
    if (
        (t2() && (t3() ? rd(eN.iA.AUTOMATIC) : t.automaticAudioSubsystem && rf()),
        eJ.supports(eN.AN.OFFLOAD_ADM_CONTROLS))
    ) {
        let e = !1;
        (0, eu.isDesktop)()
            ? (e = (0, k.E)({ location: "handleConnectionOpen" }).enabled)
            : ((0, eu.isIOS)() || (0, eu.isAndroid)()) && (e = (0, U.W)({ location: "handleConnectionOpen" }).enabled),
            eJ.setOffloadAdmControls(e);
    }
    (0, ea.wt)({
        location: "MediaEngineStore",
        autoTrackExposure: !1,
    }) &&
        null !== t.mostRecentlyRequestedVoiceFilter &&
        (0, eu.isDesktop)() &&
        (eo.Z.getLastInitAttemptMayHaveCrashed()
            ? (v.Z.dispatch({
                  type: "AUDIO_SET_SELF_MUTE",
                  mute: !0,
                  context: eN.Yn.DEFAULT,
                  playSoundEffect: !0,
              }),
              t5({ mostRecentlyRequestedVoiceFilter: null }))
            : n(358820).r5()),
        nl();
}
function nf(e) {
    let { mediaEngineState: t } = e;
    (e$ = t.settingsByContext),
        (e8 = t.inputDevices),
        (e5 = t.outputDevices),
        (tD = t.appSupported),
        (tm = t.krispModuleLoaded),
        (s = t.krispVersion),
        (e3 = t.goLiveContext);
}
function n_() {
    i = null;
}
function np() {
    if ((0, eu.isWeb)()) {
        let e = z.N.getCurrentConfig({ location: "MediaEngineStore handlePostConnectionOpen" });
        e.loadWasmModule && e.preload && r.startDavePreload();
    }
    return !1;
}
function nh(e) {
    switch (e.state) {
        case eI.hes.CONNECTING:
            t9();
            break;
        case eI.hes.RTC_CONNECTING:
            (tf = !1), (t_ = !1);
            break;
        case eI.hes.RTC_CONNECTED:
            tY();
            break;
        case eI.hes.DISCONNECTED:
            nT(), nS();
    }
    t4.update();
}
function nm(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (e7 = t.mute || t.suppress), (tt = t.deaf), eJ.eachConnection(tV);
            let e = null != t.guildId && null != t.channelId && null != tI && tI !== t.channelId,
                n = !tp && null == t.channelId;
            return tY(!e && !n && tn), (tI = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== eh.default.getId() || null != eb.Z.getChannelId() || tY(!1, null), e;
    }, !1);
}
function ng(e) {
    let { mute: t } = e;
    (e9 = t), eJ.eachConnection(tV);
}
function nE(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = tB(t);
    if (t === eN.Yn.DEFAULT && (ee.Z.requestPermission(eS.Eu.AUDIO), te)) return !1;
    (r = !i && !r) || (i = !1),
        n || (ta = !0),
        t5(
            {
                mute: r,
                deaf: i,
            },
            t,
        ),
        eJ.eachConnection(tV);
}
function nb(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    t5({ mute: n }, t), r || (ta = !0), eJ.eachConnection(tV);
}
function ny(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== eA.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    nl(!0);
}
function nO(e) {
    let { context: t } = e;
    t5({ deaf: !tB(t).deaf }, t), eJ.eachConnection(tV);
}
function nv(e) {
    let { context: t, userId: n } = e;
    if (n === eh.default.getId()) return;
    let { localMutes: r } = tB(t);
    r[n] ? delete r[n] : (r[n] = !0),
        t5({ localMutes: r }, t),
        eJ.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nI(e) {
    var t, n, r, i, a, o, s;
    let { context: l, userId: c, videoToggleState: u, persist: d, isAutomatic: _ } = e;
    f()(!(d && _), "These are not allowed to both be true.");
    let p = u === eI.ZUi.DISABLED,
        { disabledLocalVideos: h } = tB(l),
        m = null != (t = h[c]) && t,
        g = tR.has(c),
        E = u === eI.ZUi.AUTO_ENABLED || u === eI.ZUi.MANUAL_ENABLED;
    eL.info(
        "disableVideo="
            .concat(p, " currentlyDisabled=")
            .concat(m, " currentlyAutoDisabled=")
            .concat(g, ", isVideoShown=")
            .concat(E),
    ),
        f()(!(g && !m), "If you are auto-disabled, then you are also disabled.");
    let b = p !== m,
        y = l === eN.Yn.DEFAULT,
        O = _ && b && y,
        v = d && b && y;
    eL.info(
        "changed="
            .concat(b, " isDefaultContext=")
            .concat(y, " isUpdateCausedByVideoHealthManager=")
            .concat(O, " isManualToggleByUser=")
            .concat(v),
    );
    let { videoToggleStateMap: I } = tB(l);
    if (
        (I[c] === eI.ZUi.AUTO_PROBING &&
            u === eI.ZUi.AUTO_ENABLED &&
            (0, $.Z)(c, p ? eN.fC.AUTO_DISABLE : eN.fC.AUTO_ENABLE, E),
        (I[c] = u),
        t5({ videoToggleStateMap: I }, l, d),
        u === eI.ZUi.AUTO_PROBING
            ? null == (n = eb.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, !0)
            : null == (r = eb.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, !1),
        tP ||
            (eL.info("isAutoDisableAllowed=".concat(tP, " - disabling VideoHealthManager")),
            null == (a = eb.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()),
        O)
    ) {
        if ((!p && !g) || (p && !tP)) return;
        (0, $.Z)(c, p ? eN.fC.AUTO_DISABLE : eN.fC.AUTO_ENABLE, E), p ? tR.add(c) : tR.delete(c);
    } else
        v &&
            (g && !p
                ? (eL.info("disallowing auto-disable for this session because of manual override by user"),
                  (tP = !1),
                  null == (s = eb.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(),
                  (0, $.Z)(c, eN.fC.MANUAL_REENABLE, E))
                : (0, $.Z)(c, p ? eN.fC.MANUAL_DISABLE : eN.fC.MANUAL_ENABLE, E));
    y && !p && tR.delete(c),
        p ? (h[c] = !0) : delete h[c],
        t5({ disabledLocalVideos: h }, l, d),
        eJ.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(c, null != (t = h[c]) && t);
        }, l);
}
function nT() {
    if (0 === tR.size) return;
    let e = eN.Yn.DEFAULT,
        { disabledLocalVideos: t } = tB(e);
    tR.forEach((n) => {
        f()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            eJ.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tR.clear(),
        t5({ disabledLocalVideos: t }, e, !1);
}
function nS() {
    let e = eN.Yn.DEFAULT,
        { videoToggleStateMap: t } = tB(e);
    for (let [e, n] of Object.entries(t)) n === eI.ZUi.AUTO_PROBING && delete t[e];
    t5({ videoToggleStateMap: t }, e, !1);
}
function nA(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === eh.default.getId()) return;
    let i = t === eN.Yn.STREAM ? eN.Yh : eN.Qx,
        { localVolumes: a } = tB(t);
    r === i ? delete a[n] : (a[n] = r), t5({ localVolumes: a }, t), eJ.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function nC(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: a } = tB(t);
    (a[n] = {
        left: r,
        right: i,
    }),
        t5({ localPans: a }, t),
        eJ.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function nN(e) {
    let { context: t, mode: n, options: r } = e;
    t5(
        {
            mode: n,
            modeOptions: r,
        },
        t,
    ),
        eJ.eachConnection(tZ),
        t4.update();
}
function nR(e) {
    let { volume: t } = e;
    t5({ inputVolume: tF(t) }), eJ.setInputVolume(t);
}
function nP(e) {
    let { volume: t } = e;
    t5({ outputVolume: t }), eJ.setOutputVolume(t);
}
function nw(e) {
    let { id: t } = e;
    (t = nn(e8, t)), (e4 = performance.now()), t5({ inputDeviceId: t }), eJ.setAudioInputDevice(t);
}
function nD(e) {
    let { id: t } = e;
    t5({ outputDeviceId: (t = nn(e5, t)) }), eJ.setAudioOutputDevice(t);
}
function nx(e) {
    let { id: t } = e;
    t5({ videoDeviceId: (t = nn(e6, t)) }), tY();
}
function nL(e) {
    let { inputProfile: t } = e;
    t5({ activeInputProfile: t });
    let n = tB();
    eJ.eachConnection((e) => {
        tZ(e),
            tz(e, n.automaticGainControl),
            e.setEchoCancellation(n.echoCancellation),
            e.setExperimentalEncoders(n.experimentalEncoders),
            tq(e, n.noiseCancellation),
            e.setNoiseSuppression(n.noiseSuppression);
    }),
        eJ.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        t4.update(),
        nY();
}
function nM(e) {
    return e2 !== e.required && ((e2 = e.required), e.required || eJ.interact(), !0);
}
function nj(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    nr(t), no(n), ns(r);
}
function nk(e) {
    let { inputVolume: t, outputVolume: n } = e;
    t5({
        inputVolume: tF(t),
        outputVolume: n,
    });
}
function nU(e) {
    var t;
    let n = tB(),
        r = eJ.getAudioSubsystem(),
        i = eJ.getAudioLayer(),
        a = nn(e8, n.inputDeviceId),
        o = null == (t = e8[a]) ? void 0 : t.name;
    es.default.track(eI.rMx.VOICE_PROCESSING, {
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
function nG(e) {
    let t = t5({ echoCancellation: e.enabled });
    eJ.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nY(), nU(e.location);
}
function nB(e) {
    nF(e.enabled);
}
function nZ(e) {
    let t = t5({ sidechainCompressionStrength: e.strength });
    eJ.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function nF(e) {
    let t = t5({ sidechainCompression: e });
    eJ.setSidechainCompression(t.sidechainCompression);
}
function nV(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tw.add(n) : tw.delete(n), nH(), nY();
}
function nH() {
    let e = !tw.has("voice_filter_preview") && !tw.has("mic_test");
    eJ.setMaybePreprocessMute(e);
}
function nY() {
    let e = tB(),
        t = tw.size > 0,
        n = e.inputDeviceId,
        r = eg.Z.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        a = eg.Z.hasNoiseSuppression(n) || e.noiseSuppression,
        o = tK(eg.Z.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation,
        l = null !== tb,
        c = tw.has("voice_filter") && 1 === tw.size;
    eJ.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: a,
        automaticGainControlConfig: o,
        noiseCancellation: s,
        voiceFilters: l,
        loopbackUseAudioMode: c,
    });
}
async function nW() {
    var e, t, n, r;
    if (!eJ.supports(eN.AN.VAAPI)) return;
    let i = 4098;
    if (
        (null == (t = window.DiscordNative) || null == (e = t.processUtils) ? void 0 : e.getSystemInfo) == null ||
        !(
            null !=
            (r =
                null == (n = (await window.DiscordNative.processUtils.getSystemInfo()).electronGPUInfo)
                    ? void 0
                    : n.gpuDevice)
                ? r
                : []
        ).some((e) => e.vendorId === i)
    )
        return;
    let { enabled: a } = await (0, V.m)("setGamescopeVaapiEnabled");
    (tk = a), a && eJ.supports(eN.AN.GAMESCOPE_CAPTURE) && (tj = !0);
}
function nK(e) {
    let t = t5({ noiseSuppression: e.enabled });
    eJ.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nY(), nU(e.location);
}
function nz(e) {
    let t = t5({ automaticGainControl: e.enabled });
    eJ.eachConnection((e) => tz(e, t.automaticGainControl)), nY(), nU(e.location);
}
function nq(e) {
    let t = t5({ noiseCancellation: e.enabled });
    eJ.eachConnection((e) => tq(e, t.noiseCancellation)), nY(), nU(e.location);
}
function nX(e) {
    et.Z.setKrispModelOverride(e.model), (c = e.model), nY();
}
function nQ(e) {
    var t;
    (0, eu.isWeb)() || ((tE = e.enabled), null == (t = eJ.setNoiseCancellationEnableStats) || t.call(eJ, e.enabled));
}
function nJ(e) {
    let t = t5({ experimentalEncoders: e.enabled });
    eJ.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
}
function n$(e) {
    t5({ silenceWarning: e.enabled }), t4.update();
}
function n0(e) {
    eJ.setDebugLogging(e.enabled);
}
function n1(e) {
    let { level: t } = e;
    (l = t), et.Z.setKrispSuppressionLevel(t);
}
function n2(e) {
    t5({ videoHook: e.enabled });
}
function n3(e) {
    t5({ experimentalSoundshare2: e.enabled });
}
function n4(e) {
    let { enabled: t } = e;
    t5({ useSystemScreensharePicker: t });
}
function n8(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = t5({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r,
        });
    eJ.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function n5(e) {
    let { enabled: t } = e;
    t5({ qos: t }), eJ.eachConnection((e) => e.setQoS(t));
}
function n6() {
    t6();
}
function n7(e) {
    let { inputDetected: t } = e;
    (td = t), !tf && td && ((tf = !0), t4.update());
}
function n9(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === te) return !1;
    (te = n), eJ.eachConnection(tV);
}
function re(e) {
    let { state: t, permissionType: n } = e,
        r = t === eS.PQ.ACCEPTED;
    switch (n) {
        case eS.Eu.AUDIO:
            (tC = !0), eJ.eachConnection(tV);
            break;
        case eS.Eu.CAMERA:
            !r && tn && tY(!1);
            break;
        default:
            return !1;
    }
}
function rt() {
    return tm || !1;
}
async function rn() {
    try {
        var e, t, n, i;
        await e_.ZP.ensureModule("discord_krisp");
        let a = e_.ZP.requireModule("discord_krisp");
        (tm = !0),
            (s = null == (e = a.getSdkVersion) ? void 0 : e.call(a)),
            (l = null != (i = null == (t = a.getSuppressionLevel) ? void 0 : t.call(a)) ? i : 100),
            null == (n = a.getNcModels) ||
                n.call(a).then((e) => {
                    (tg = e), r.emitChange();
                }),
            r.emitChange();
    } catch (t) {
        eL.warn("Failed to load Krisp module: ".concat(t.message)), ef.Z.captureException(t);
        let e = eN.H3.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eN.H3.INITIALIZED : n;
        }
        es.default.track(eI.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), t5({ noiseCancellation: !1 });
    } finally {
        th = !1;
    }
}
function rr() {
    return (0, eu.isWindows)() || (0, eu.isLinux)() || (0, eu.isMac)();
}
function ri() {
    !rr() || __OVERLAY__ || th || tm
        ? (0, eu.isWeb)() && eJ.supports(eN.AN.NOISE_CANCELLATION)
            ? ((tm = !0), r.emitChange())
            : (0, eu.isWeb)() && t5({ noiseCancellation: !1 })
        : ((th = !0), rn());
}
function ra(e) {
    let { enabled: t } = e;
    es.default.track(eI.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != tb ? tb : null,
        enabled: t,
    }),
        t5({ voiceFilterPlaybackEnabled: t });
}
function ro(e) {
    let { newVoiceFilterId: t } = e;
    t5({ mostRecentlyRequestedVoiceFilter: t }), eJ.eachConnection((e) => e.setVoiceFilterId(t));
}
function rs() {
    t5({ mostRecentlyRequestedVoiceFilter: null });
}
function rl(e) {
    let { voiceFilterId: t } = e;
    (tO = tb), (tv = ty), (tb = t), (ty = null === t ? null : Date.now());
}
function rc(e) {
    let t = e.bypassEnabled;
    t5({ bypassSystemInputProcessing: t }), eJ.setAudioInputBypassSystemProcessing(t), nU(e.location);
}
function ru(e) {
    rd(e.subsystem);
}
function rd(e) {
    e === eN.iA.AUTOMATIC
        ? (t5({ automaticAudioSubsystem: !0 }), rf())
        : (t5({ automaticAudioSubsystem: !1 }), eJ.setAudioSubsystem(e));
}
function rf() {
    eJ.queueAudioSubsystem(eN.iA.EXPERIMENTAL);
}
function r_(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && tY(i, null), null != t || null == n)) {
        tp = !1;
        return;
    }
    if (tp) return;
    tp = !0;
    let a = tB();
    (a.mute || a.deaf) &&
        (t5({
            deaf: !1,
            mute: !1,
        }),
        eJ.eachConnection(tV));
}
function rp(e) {
    let { application: t } = e;
    e0.add(t.id);
}
function rh(e) {
    let { application: t } = e;
    e0.delete(t.id);
}
function rm(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (e1 = !1), eJ.eachConnection(tV);
                break;
            case "video":
                tY(!1);
        }
}
function rg(e) {
    (e1 = e.enabled),
        e.unmute &&
            t5({
                mute: !1,
                deaf: !1,
            }),
        eJ.eachConnection(tV);
}
function rE(e) {
    let { enabled: t } = e;
    ee.Z.requestPermission(eS.Eu.CAMERA), tY(t);
}
function rb(e) {
    let { sourceId: t, applicationName: n, quality: i } = e,
        a = A.Z.isDecoupledGameClippingEnabled(),
        s = A.Z.getSettings().decoupledClipsEnabled;
    if (!a || !s || null == I.Z) return;
    let l = null,
        c = null,
        u = el.Z.getPidFromDesktopSource(t);
    ({ soundshareId: l, soundshareSession: c } = nc(u));
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
        (eJ.setClipsSource(null),
        (0, eu.isWindows)() && null != o.desktopSource.soundshareId && T.pn(o.desktopSource.soundshareId)),
        null != l && nu(l, c),
        (o = d);
    let f = tU(),
        _ = tB().videoHook;
    eJ.setClipsSource({
        desktopDescription: {
            id: o.desktopSource.id,
            soundshareId: o.desktopSource.soundshareId,
            useVideoHook: _,
            useGraphicsCapture: t$(),
            useCaptureDeviceForEncode: !1,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: t1(),
            videoHookStaleFrameTimeoutMs: eV,
            graphicsCaptureStaleFrameTimeoutMs: eH,
            hdrCaptureMode: f,
        },
        quality: i,
        applicationName: n,
    });
}
function ry(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((o = null), eJ.setClipsSource(null));
}
function rO(e) {
    var t, n, r, i;
    let { settings: a } = e;
    if ((null == a ? void 0 : a.desktopSettings) != null) {
        let e = null,
            r = null,
            { sourceId: i, sound: o } = a.desktopSettings,
            s = null != (t = a.context) ? t : eN.Yn.DEFAULT,
            l =
                null != (n = a.qualityOptions)
                    ? n
                    : {
                          resolution: 720,
                          frameRate: 30,
                      },
            c = !1 === o ? null : el.Z.getPidFromDesktopSource(i);
        eu.isPlatformEmbedded &&
            !0 === o &&
            (({ soundshareId: e, soundshareSession: r } = nc(c)), null != e && nu(e, r)),
            tH(s),
            tY(s === eN.Yn.STREAM && tn, {
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
        let e = null != (r = a.context) ? r : eN.Yn.DEFAULT,
            { videoDeviceGuid: t, audioDeviceGuid: n } = a.cameraSettings,
            o = e === eN.Yn.STREAM && tn,
            s =
                null != (i = a.qualityOptions)
                    ? i
                    : {
                          resolution: 720,
                          frameRate: 30,
                      };
        tY(o, {
            cameraSource: {
                videoDeviceGuid: t,
                audioDeviceGuid: n,
            },
            quality: {
                resolution: s.resolution,
                frameRate: s.frameRate,
            },
        });
    } else tY(tn, null);
}
function rv(e) {
    let { section: t } = e;
    return t === eI.oAB.VOICE && t9(), !1;
}
function rI() {
    return eJ.eachConnection(tX), !1;
}
function rT(e) {
    let { enabled: t } = e;
    t5({ openH264: t }), eJ.setH264Enabled(ez || tQ()), eJ.eachConnection((e) => e.setSoftwareH264(tQ()));
}
function rS(e) {
    let { enabled: t } = e,
        n = t5({ aecDumpEnabled: t });
    eJ.setAecDump(n.aecDumpEnabled);
}
function rA(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (e$ = Object.values(eN.Yn).reduce((e, n) => {
        let r = n,
            i = eX();
        return (e[r] = p().merge(i, t[r])), e;
    }, {})),
        y.K.set(eM, e$),
        t7();
}
function rC(e) {
    let { state: t } = e,
        n = D.Z.isEnabled();
    if (t === eI.$7l.BACKGROUND && tn && !n) (tc = !0), tY(!1);
    else {
        if (t !== eI.$7l.ACTIVE || !tc) return !1;
        (tc = !1), tY(!0);
    }
    return !0;
}
function rN(e) {
    eJ.eachConnection((t) => t.setBitRate(e.bitrate));
}
function rR() {
    if ((!tn && null == a) || null != eb.Z.getRTCConnectionId()) return !1;
    tY(!1, null);
}
function rP() {
    return !!tT && ((tT = !1), !0);
}
function rw(e) {
    eJ.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function rD(e) {
    let { settings: t } = e;
    eJ.applyMediaFilterSettings(t).finally(() => {
        (tS = !1), r.emitChange();
    });
}
function rx() {
    tS = !0;
}
function rL() {
    tS = !1;
}
function rM(e) {
    tL = e.enabled;
}
class rj extends (u = E.ZP.Store) {
    initialize() {
        tJ(),
            t8(),
            ri(),
            nS(),
            (tD = {
                [eN.AN.VIDEO]: eJ.supports(eN.AN.VIDEO),
                [eN.AN.DESKTOP_CAPTURE]: eJ.supports(eN.AN.DESKTOP_CAPTURE),
                [eN.AN.HYBRID_VIDEO]: eJ.supports(eN.AN.HYBRID_VIDEO),
            }),
            this.waitFor(eh.default, em.Z, eg.Z, eE.Z, A.Z, w.Z, eb.Z, x.ZP, ei.Z, eO.default, ev.Z, eo.Z);
    }
    supports(e) {
        return eJ.supports(e);
    }
    supportsInApp(e) {
        return tD[e] || eJ.supports(e);
    }
    isSupported() {
        return eJ.supported();
    }
    isExperimentalEncodersSupported() {
        return eJ.supports(eN.AN.EXPERIMENTAL_ENCODERS);
    }
    isNoiseSuppressionSupported() {
        return eJ.supports(eN.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return rt();
    }
    isNoiseCancellationError() {
        return tT;
    }
    isAutomaticGainControlSupported() {
        return eJ.supports(eN.AN.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !t3() && (eJ.supports(eN.AN.LEGACY_AUDIO_SUBSYSTEM) || eJ.supports(eN.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return eJ.supports(eN.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === eJ.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return rt();
    }
    isAecDumpSupported() {
        return eJ.supports(eN.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return eJ.supports(eN.AN.VIDEO) && eJ.supports(eN.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        return (
            (null == (e = eE.Z.getChannel(tI)) ? void 0 : e.type) !== eI.d4z.GUILD_STAGE_VOICE &&
            ez &&
            H.Z.simulcastEnabled()
        );
    }
    getAecDump() {
        return tB().aecDumpEnabled;
    }
    getMediaEngine() {
        return eJ;
    }
    getVideoComponent() {
        return eJ.Video;
    }
    getCameraComponent() {
        return eJ.Camera;
    }
    getKrispSuppressionLevel() {
        return null != l ? l : 100;
    }
    getKrispEnableStats() {
        return tE;
    }
    isEnabled() {
        return e1;
    }
    isMute() {
        return this.isSelfMute() || e7;
    }
    isDeaf() {
        return this.isSelfDeaf() || tt;
    }
    hasContext(e) {
        return null != e$[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eN.Yn.DEFAULT;
        return e === eN.Yn.DEFAULT && e9;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eN.Yn.DEFAULT;
        return (
            !this.isEnabled() ||
            tB(e).mute ||
            !ee.Z.didHavePermission(eS.Eu.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eN.Yn.DEFAULT && te)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return ta;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        ta = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eN.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && eg.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return tL;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eN.Yn.DEFAULT;
        return !this.isSupported() || tB(e).deaf;
    }
    isVideoEnabled() {
        return tn && tu;
    }
    isVideoAvailable() {
        return Object.values(e6).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eN.Yn.STREAM;
        return e3 === e && null != a;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eN.Yn.STREAM;
        return e3 === t && null != a && (null == (e = a.desktopSource) ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eN.Yn.DEFAULT;
        return e !== eh.default.getId() && (tB(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return eJ.supports(eN.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eN.Yn.DEFAULT;
        return null != (t = tB(n).disabledLocalVideos[e]) && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eN.Yn.DEFAULT;
        return null != (t = tB(n).videoToggleStateMap[e]) ? t : eI.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eN.Yn.DEFAULT;
        return t === eN.Yn.DEFAULT && tR.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eN.Yn.DEFAULT;
        return e === eN.Yn.DEFAULT && tR.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tS;
    }
    isNativeAudioPermissionReady() {
        return tC;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return e3;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return e4;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eN.Yn.DEFAULT,
            n = tB(t).localPans[e];
        return null != n ? n : eF;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eN.Yn.DEFAULT,
            n = t === eN.Yn.STREAM ? eN.Yh : eN.Qx,
            r = tB(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return tB().inputVolume;
    }
    getOutputVolume() {
        return tB().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eN.Yn.DEFAULT;
        return tB(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eN.Yn.DEFAULT;
        return tB(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return tb;
    }
    getActiveVoiceFilterAppliedAt() {
        return ty;
    }
    getPreviousVoiceFilter() {
        return tO;
    }
    getPreviousVoiceFilterAppliedAt() {
        return tv;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return tB().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return tB().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            p().each(e$, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === eI.pM4.PUSH_TO_TALK && e0.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nn(e8, tB().inputDeviceId);
    }
    getOutputDeviceId() {
        return nn(e5, tB().outputDeviceId);
    }
    getVideoDeviceId() {
        return nn(e6, tB().videoDeviceId);
    }
    getInputDevices() {
        return e8;
    }
    getOutputDevices() {
        return e5;
    }
    getVideoDevices() {
        return e6;
    }
    getEchoCancellation() {
        let e = tB();
        return eg.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return eJ.supports(eN.AN.SIDECHAIN_COMPRESSION) && tB().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return tB().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return tB().h265Enabled;
    }
    getLoopback() {
        return tw.size > 0;
    }
    getLoopbackReasons() {
        return tw;
    }
    getNoiseSuppression() {
        let e = tB();
        return eg.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tB();
        return eg.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return tB().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return tB().noiseCancellation;
    }
    getExperimentalEncoders() {
        return tB().experimentalEncoders;
    }
    getHardwareEncoding() {
        return ez;
    }
    getEnableSilenceWarning() {
        return tB().silenceWarning;
    }
    getDebugLogging() {
        return eJ.getDebugLogging();
    }
    getQoS() {
        return tB().qos;
    }
    getAttenuation() {
        return tB().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return tB().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return tB().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return t2() && tB().automaticAudioSubsystem ? eN.iA.AUTOMATIC : eJ.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return eJ.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return tB().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eC._.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eN.Yn.DEFAULT;
        return tB(e);
    }
    getState() {
        return {
            settingsByContext: e$,
            inputDevices: e8,
            outputDevices: e5,
            appSupported: tD,
            krispModuleLoaded: tm,
            krispVersion: s,
            krispSuppressionLevel: l,
            goLiveSource: a,
            goLiveContext: e3,
        };
    }
    getInputDetected() {
        return td;
    }
    getNoInputDetectedNotice() {
        return t_;
    }
    getPacketDelay() {
        return eu.isPlatformEmbedded || this.getMode() !== eI.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        eJ.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return e2;
    }
    getVideoHook() {
        return tB().videoHook;
    }
    supportsVideoHook() {
        return eJ.supports(eN.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tB().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return (
            eJ.supports(eN.AN.EXPERIMENTAL_SOUNDSHARE) &&
            m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eT.T6)
        );
    }
    supportsHookSoundshare() {
        return (
            (0, eu.isWindows)() &&
            eJ.supports(eN.AN.SOUNDSHARE) &&
            m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eT.sA)
        );
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = tB().useSystemScreensharePicker,
            n = (0, eu.isLinux)();
        return e && (null != t ? t : n);
    }
    supportsSystemScreensharePicker() {
        return eJ.supports(eN.AN.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return tk;
    }
    getUseGamescopeCapture() {
        return tj;
    }
    getOpenH264() {
        return tB().openH264;
    }
    getEverSpeakingWhileMuted() {
        return to;
    }
    getSpeakingWhileMuted() {
        return ts;
    }
    getKrispModelOverride() {
        return c;
    }
    getKrispModels() {
        return tg;
    }
    getKrispVadActivationThreshold() {
        var e;
        return null != (e = tB().modeOptions.vadKrispActivationThreshold) ? e : eZ;
    }
    hasActiveCallKitCall() {
        return tM;
    }
    setHasActiveCallKitCall(e) {
        tM = e;
    }
    supportsScreenSoundshare() {
        return (0, eu.isMac)()
            ? eJ.supports(eN.AN.SOUNDSHARE) &&
                  m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eT.yG) &&
                  t1()
            : (0, eu.isWindows)()
              ? eJ.supports(eN.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, eu.isLinux)() && eJ.supports(eN.AN.SCREEN_SOUNDSHARE);
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eN.Yn.DEFAULT,
            t = this.supports(eN.AN.VIDEO)
                ? [
                      {
                          rid: "100",
                          type: e === eN.Yn.DEFAULT ? eN.Tr.VIDEO : eN.Tr.SCREEN,
                          quality: eN.y7,
                      },
                  ]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === eN.Yn.DEFAULT || this.goLiveSimulcastEnabled()) &&
                t.push({
                    rid: "50",
                    type: e === eN.Yn.DEFAULT ? eN.Tr.VIDEO : eN.Tr.SCREEN,
                    quality: eN.LD,
                }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: !1 };
        return (
            (0, eu.isWeb)() &&
                (e.fetchDave = z.N.getCurrentConfig({
                    location: "MediaEngineStore fetchAsyncResources",
                }).loadWasmModule),
            eJ.fetchAsyncResources(e)
        );
    }
    startDavePreload() {
        if (!tA && ((tA = !0), (0, eu.isWeb)())) {
            let e = { fetchDave: !0 };
            eJ.fetchAsyncResources(e).catch((e) => {
                eL.warn("DAVE preload failed:", e), ef.Z.captureException(e);
            });
        }
    }
    getSupportedSecureFramesProtocolVersion() {
        if ((0, eu.isWeb)()) {
            let { useWasmModule: e } = z.N.getCurrentConfig({
                location: "MediaEngineStore getSupportedSecureFramesProtocolVersion",
            });
            if (!e) return 0;
        }
        let e = eJ.getSupportedSecureFramesProtocolVersion(),
            t = z.m.getCurrentConfig({ location: "MediaEngineStore" });
        return 114 === e && (e = 1), t.canSupportDaveProtocol && e >= t.protocolVersionFloor ? e : 0;
    }
    hasClipsSource() {
        return null != o;
    }
    getGpuBrand() {
        return tx;
    }
}
function rk(e) {
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
eP(rj, "displayName", "MediaEngineStore");
let rU = (r = new rj(v.Z, {
    VOICE_CHANNEL_SELECT: r_,
    VOICE_STATE_UPDATES: nm,
    CONNECTION_OPEN: nd,
    CONNECTION_CLOSED: n_,
    POST_CONNECTION_OPEN: np,
    RTC_CONNECTION_STATE: nh,
    AUDIO_SET_TEMPORARY_SELF_MUTE: ng,
    AUDIO_TOGGLE_SELF_MUTE: nE,
    AUDIO_SET_SELF_MUTE: nb,
    AUDIO_TOGGLE_SELF_DEAF: nO,
    AUDIO_TOGGLE_LOCAL_MUTE: nv,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: nI,
    AUDIO_SET_LOCAL_VOLUME: nA,
    AUDIO_SET_LOCAL_PAN: nC,
    AUDIO_SET_MODE: nN,
    AUDIO_SET_INPUT_VOLUME: nR,
    AUDIO_SET_OUTPUT_VOLUME: nP,
    AUDIO_SET_INPUT_DEVICE: nw,
    AUDIO_SET_OUTPUT_DEVICE: nD,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: nL,
    AUDIO_SET_ECHO_CANCELLATION: nG,
    AUDIO_SET_SIDECHAIN_COMPRESSION: nB,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nZ,
    AUDIO_SET_LOOPBACK: nV,
    AUDIO_SET_NOISE_SUPPRESSION: nK,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nz,
    AUDIO_SET_NOISE_CANCELLATION: nq,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: nX,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: n$,
    AUDIO_SET_DEBUG_LOGGING: n0,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: n1,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: nQ,
    MEDIA_ENGINE_SET_VIDEO_HOOK: n2,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: n3,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: n4,
    AUDIO_SET_ATTENUATION: n8,
    AUDIO_SET_QOS: n5,
    MEDIA_ENGINE_DEVICES: nj,
    AUDIO_VOLUME_CHANGE: nk,
    AUDIO_RESET: n6,
    AUDIO_INPUT_DETECTED: n7,
    AUDIO_SET_SUBSYSTEM: ru,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rc,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rg,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rE,
    MEDIA_ENGINE_PERMISSION: rm,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rO,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nx,
    MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nJ,
    MEDIA_ENGINE_INTERACTION_REQUIRED: nM,
    USER_SETTINGS_MODAL_INIT: rv,
    USER_SETTINGS_MODAL_SET_SECTION: rv,
    CERTIFIED_DEVICES_SET: rI,
    RPC_APP_CONNECTED: rp,
    RPC_APP_DISCONNECTED: rh,
    OVERLAY_INITIALIZE: nf,
    MEDIA_ENGINE_SET_OPEN_H264: rT,
    APP_STATE_UPDATE: rC,
    SET_CHANNEL_BITRATE: rN,
    SET_VAD_PERMISSION: n9,
    SET_NATIVE_PERMISSION: re,
    SET_CHANNEL_VIDEO_QUALITY_MODE: rw,
    MEDIA_ENGINE_SET_AEC_DUMP: rS,
    MEDIA_ENGINE_RESET_SETTINGS: rA,
    CHANNEL_DELETE: rR,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rP,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rD,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rx,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rL,
    USER_SETTINGS_PROTO_UPDATE: ny,
    CLIPS_INIT: rb,
    CLIPS_SETTINGS_UPDATE: ry,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rM,
    VOICE_FILTER_REQUEST_SWITCH: ro,
    VOICE_FILTER_LOOPBACK_TOGGLE: ra,
    VOICE_FILTER_APPLIED: rl,
    VOICE_FILTER_DOWNLOAD_FAILED: rs,
    VOICE_FILTER_APPLY_FAILED: rs,
}));
