let r, i, a, o, s, l, c;
n.d(t, { Z: () => rB }), n(388685), n(953529), n(457542), n(539854), n(642613), n(49124), n(337869);
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
    ei = n(725380),
    ea = n(383451),
    eo = n(581883),
    es = n(875527),
    el = n(420439),
    ec = n(626135),
    eu = n(12647),
    ed = n(70956),
    ef = n(358085),
    e_ = n(747268),
    ep = n(960048),
    eh = n(998502),
    em = n(13140),
    eg = n(314897),
    eE = n(967368),
    eb = n(463395),
    ey = n(592125),
    eO = n(19780),
    ev = n(704806),
    eI = n(594174),
    eT = n(631768),
    eS = n(981631),
    eA = n(70722),
    eC = n(761274),
    eN = n(526761),
    eR = n(345655),
    eP = n(65154),
    ew = n(388032);
function eD(e, t, n) {
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
function ex(e) {
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
                eD(e, t, n[t]);
            });
    }
    return e;
}
function eL(e, t) {
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
function eM(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eL(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ej = new N.Z("MediaEngineStore"),
    ek = "MediaEngineStore",
    eU = 4,
    eG = 1,
    eB = 1,
    eZ = 1,
    eF = 1,
    eV = 0.5,
    eH = {
        left: 1,
        right: 1,
    },
    eY = 500,
    eW = 5 * ed.Z.Millis.SECOND,
    eK = -60,
    ez = 100,
    eq = 2 * ed.Z.Millis.SECOND,
    eX = !0,
    eQ = 0;
function eJ() {
    return {
        mode: eS.pM4.VOICE_ACTIVITY,
        modeOptions: {
            threshold: eK,
            autoThreshold: ef.isPlatformEmbedded || __OVERLAY__,
            vadUseKrisp: !0,
            vadKrispActivationThreshold: eV,
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
        inputVolume: eP.Qx,
        outputVolume: eP.Qx,
        inputDeviceId: eP.w5,
        outputDeviceId: eP.w5,
        videoDeviceId: eP.w5,
        qos: !1,
        qosMigrated: !1,
        videoHook: e0.supports(eP.AN.VIDEO_HOOK),
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
let e$ = {
        [eR._.CUSTOM]: {},
        [eR._.VOICE_ISOLATION]: {
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
        [eR._.STUDIO]: {
            mode: eS.pM4.VOICE_ACTIVITY,
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
    e0 = (0, b.Mt)((0, b.jj)());
ej.enableNativeLogger(!0);
let e1 = {},
    e2 = new Set([eP.Yn.DEFAULT]),
    e3 = e0.supports(eP.AN.AUTO_ENABLE),
    e4 = !1,
    e8 = eP.Yn.STREAM,
    e5 = performance.now(),
    e6 = { [eP.w5]: nn("No Input Devices") },
    e7 = { [eP.w5]: nn("No Output Devices") },
    e9 = { [eP.w5]: nn("No Video Devices") },
    te = !1,
    tt = !1,
    tn = !1,
    tr = !1,
    ti = !1,
    ta = eP.Av,
    to = eP.Av,
    ts = !1,
    tl = !1,
    tc = !1,
    tu = new O.V7(),
    td = !1,
    tf = !1,
    t_ = null,
    tp = !1,
    th = !1,
    tm = !1,
    tg = !1,
    tE = !1,
    tb = [],
    ty = !1,
    tO = null,
    tv = null,
    tI = null,
    tT = null,
    tS = null,
    tA = !1,
    tC = !1,
    tN = !1,
    tR = !1;
en.Z.hasPermission(eC.Eu.AUDIO, { showAuthorizationError: !1 }),
    en.Z.hasPermission(eC.Eu.CAMERA, { showAuthorizationError: !1 });
let tP = !1,
    tw = new Set(),
    tD = tP,
    tx = new Set(),
    tL = {},
    tM = null,
    tj = !0,
    tk = !1,
    tU = !1,
    tG = !1;
function tB() {
    var e, t;
    return null != (t = null == (e = eI.default.getCurrentUser()) ? void 0 : e.isStaff()) && t
        ? "always"
        : e_.Z === g.R.CANARY
          ? "permittedDevicesOnly"
          : "never";
}
function tZ() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.Yn.DEFAULT,
        t = e1[e];
    return null == t && ((t = eJ()), (e1[e] = t)), t;
}
function tF() {
    var e, t, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.Yn.DEFAULT,
        i = tZ(r),
        a = e$[null != (e = i.activeInputProfile) ? e : eR._.CUSTOM],
        o = ex({}, null != (t = i.modeOptions) ? t : {}, null != (n = a.modeOptions) ? n : {});
    if (
        (null == o.vadDuringPreProcess && (o.vadDuringPreProcess = (0, Q.C)({ location: "getSettings" }).enabled),
        (null == o.vadKrispActivationThreshold && !0 === a.automaticGainControl) || !0 === i.automaticGainControl)
    ) {
        let e = (0, M.U)({ location: "getSettings" });
        null != e.vadKrispActivationThreshold && (o.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return eM(ex({}, i, a), { modeOptions: o });
}
function tV(e) {
    var t, n;
    let r = tF(e.context),
        i = r.mode;
    e.context === eP.Yn.DEFAULT &&
        ((0, ea.f)({
            location: "setInputMode",
            autoTrackExposure: !1,
        }).enableLatching &&
            i === eS.pM4.PUSH_TO_TALK &&
            r.modeOptions.pttLatchingEnabled &&
            (i = eS.pM4.VOICE_ACTIVITY),
        (0, z.I)(!1, !1, !1)),
        e.setInputMode(i, {
            vadThreshold: r.modeOptions.threshold,
            vadAutoThreshold: r.modeOptions.autoThreshold,
            vadUseKrisp: r.modeOptions.vadUseKrisp && rr(),
            vadKrispActivationThreshold: null != (t = r.modeOptions.vadKrispActivationThreshold) ? t : eV,
            vadLeading: r.modeOptions.vadLeading,
            vadTrailing: r.modeOptions.vadTrailing,
            vadDuringPreProcess: null != (n = r.modeOptions.vadDuringPreProcess) && n,
            pttReleaseDelay: Math.round(r.modeOptions.delay),
        });
}
function tH(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eP.Qx;
    return p().clamp(e, 0, t);
}
function tY(e) {
    let t = tF(e.context),
        n = !e3 || t.mute || t.deaf;
    e.context === eP.Yn.DEFAULT
        ? (n = n || te || tt || tn || !en.Z.didHavePermission(eC.Eu.AUDIO))
        : e.context === eP.Yn.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eP.Yn.DEFAULT && S.Z.updateNativeMute();
}
function tW(e) {
    e !== e8 && (null != a && e0.setGoLiveSource(null, e8), (e8 = e));
}
function tK() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ti,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        s = a;
    if (
        ((null == s ? void 0 : s.desktopSource) != null &&
            s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? void 0 : e.id) &&
            (null != s.desktopSource.soundshareId && (0, ef.isWindows)() && T.pn(s.desktopSource.soundshareId),
            e0.setGoLiveSource(null, e8)),
        (null == s ? void 0 : s.cameraSource) != null &&
            (s.cameraSource.videoDeviceGuid !==
                (null == o || null == (t = o.cameraSource) ? void 0 : t.videoDeviceGuid) ||
                s.cameraSource.audioDeviceGuid !==
                    (null == o || null == (n = o.cameraSource) ? void 0 : n.audioDeviceGuid)) &&
            e0.setGoLiveSource(null, e8),
        ti || i)
    ) {
        let e = tF().videoDeviceId;
        ti && e === eP.w5 && to === eP.w5 && ta !== eP.Av ? (e = ta) : (to = e),
            (ta = (ti = i) ? ni(e9, e) : eP.Av),
            e0.setVideoInputDevice(ta);
    }
    if (((a = o), null != o)) {
        let e = {
            resolution: o.quality.resolution,
            frameRate: o.quality.frameRate,
        };
        if (null != o.desktopSource) {
            let t = tB(),
                n = tF().videoHook,
                i = t1(),
                a = i ? (t2() ? eA.zj : eA.ZM) : 0,
                s = (0, ef.isWindows)() && (0, J.t)("updateVideo").enabled;
            e0.setGoLiveSource(
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
                        allowScreenCaptureKit: t3(),
                        videoHookStaleFrameTimeoutMs: eY,
                        graphicsCaptureStaleFrameTimeoutMs: eW,
                        hdrCaptureMode: t,
                        enableGlobalFramePoolLock: (0, V.T)({ location: "updateVideo" }).enabled,
                    },
                    quality: e,
                },
                e8,
            );
        }
        null != o.cameraSource &&
            e0.setGoLiveSource(
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
function tz(e) {
    switch (e) {
        case eP.H3.CPU_OVERUSE:
            return P.Nk.NoiseCancellerCpuOveruse;
        case eP.H3.FAILED:
            return P.Nk.NoiseCancellerFailed;
        case eP.H3.VAD_CPU_OVERUSE:
            return P.Nk.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function tq(e) {
    let t = (0, M.U)({
        location: "getAutomaticGainControlConfig",
        disable: !e,
    }).noiseCancellationConfig;
    return ex({ enabled: e }, t);
}
function tX(e, t) {
    e.setAutomaticGainControl(tq(t));
}
async function tQ(e, t) {
    if ((0, ef.isIOS)() || (0, ef.isMac)()) {
        let e = await e0.getSystemMicrophoneMode();
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
function tJ(e) {
    let t = tF(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eb.Z.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eb.Z.hasNoiseSuppression(n) || t.noiseSuppression),
        tX(e, eb.Z.hasAutomaticGainControl(n) || t.automaticGainControl),
        tQ(e, t.noiseCancellation),
        e.setVoiceFilterId(tO),
        (0, ef.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function t$() {
    var e;
    return (
        !(0, W.f)("MediaEngine").enabled &&
        !(0, ee.M)("MediaEngine").enabled &&
        !(0, q.c)("MediaEngine").enabled &&
        (null == (e = tF().openH264) || e)
    );
}
function t0() {
    e0.on(b.aB.Connection, (e) => {
        tV(e), tY(e), tJ(e);
        let t = tF();
        e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
            e.setQoS(t.qos),
            e.setExperimentalEncoders(t.experimentalEncoders),
            e.setHardwareH264(eX),
            e.setSoftwareH264(t$());
        let n = eO.Z.getGuildId(),
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
        i && e.setExperimentFlag(eP.V8.MUTE_BEFORE_PROCESSING, !0),
            o && e.setExperimentFlag(eP.V8.PTT_BEFORE_PROCESSING, !0),
            s && e.setExperimentFlag(eP.V8.SKIP_ENCODE, !0),
            (0, K.J)({ location: "setupMediaEngine" }).enabled &&
                e.setExperimentFlag(eP.V8.LOW_LATENCY_RATE_CONTROL, !0);
        let l = !1,
            c = !0;
        if (
            (e.setExperimentFlag(eP.V8.RESET_DECODER_ON_ERRORS, !0),
            l && e.setExperimentFlag(eP.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0),
            c && e.setExperimentFlag(eP.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0),
            e.context === eP.Yn.STREAM)
        ) {
            let t = no(e7);
            e.setSoundshareDiscardRearChannels(t);
            let { simulcastEnabled: n, lqStreamBitrate: r } = H.Z.getConfig();
            e.configureGoLiveSimulcast(n, r);
        }
        if (
            ((0, ef.isWindows)()
                ? (null == tM ? void 0 : tM.startsWith("NVIDIA")) || (null == tM ? void 0 : tM.startsWith("AMD"))
                    ? e.setExperimentFlag(eP.V8.SIGNAL_AV1, !0)
                    : e.setExperimentFlag(eP.V8.SIGNAL_AV1_DECODE, !0)
                : ((0, ef.isMac)() || (0, ef.isLinux)()) && e.setExperimentFlag(eP.V8.SIGNAL_AV1_DECODE, !0),
            (0, ef.isWindows)() && e.setExperimentFlag(eP.V8.SIGNAL_AV1_HARDWARE_DECODE, !0),
            (0, ef.isWeb)())
        ) {
            let { enabled: t } = (0, F.A)("MediaEngineStore");
            e.setExperimentFlag(eP.V8.BROWSER_HEVC, t);
        }
        if ((e0.setHasFullbandPerformance((0, R.Z)()), e.setRemoteAudioHistory(1000), (0, C.Z)(r))) {
            let t = A.Z.getSettings();
            e.setExperimentFlag(eP.V8.STREAMER_CLIP, t.clipsEnabled);
            let { enableViewerClipping: n } = $.Z.getCurrentConfig(
                { location: "f627ab_15" },
                { autoTrackExposure: !1 },
            );
            e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eP.ux);
        }
        for (let n of ((t = tF(e.context)), e.setPostponeDecodeLevel(ez), Object.keys(t.localMutes)))
            n !== eg.default.getId() && e.setLocalMute(n, t.localMutes[n]);
        for (let n of Object.keys(t.localVolumes)) n !== eg.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
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
            e.context === eP.Yn.DEFAULT &&
                ((tl = !1),
                (tc = !1),
                e.on(b.Sh.SpeakingWhileMuted, () => {
                    (tl = !0),
                        (tc = !0),
                        r.emitChange(),
                        tu.stop(),
                        tu.start(eq, () => {
                            (tc = !1), r.emitChange();
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
                    ec.default.track(
                        eS.rMx.VIDEOHOOK_INITIALIZED,
                        ex(
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
                ej.warn("noisecancellererror event: ".concat(e)),
                    (0, P.kr)({
                        type: P.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tz(e),
                    }),
                    (tA = !0),
                    ec.default.track(eS.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
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
                ej.warn("voiceactivitydetectorerror event: ".concat(e)),
                    (0, P.kr)({
                        type: P.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tz(e),
                    }),
                    ec.default.track(eS.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    v.Z.dispatch({
                        type: "AUDIO_SET_MODE",
                        context: eP.Yn.DEFAULT,
                        mode: eS.pM4.VOICE_ACTIVITY,
                        options: eM(ex({}, tF(eP.Yn.DEFAULT).modeOptions), { vadUseKrisp: !1 }),
                    }),
                    v.Z.dispatch({
                        type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
                        code: e,
                    });
            }),
            e.on(b.Sh.SdpError, (e, t, n, r) => {
                ec.default.track(eS.rMx.SDP_ERROR, {
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
            e.setBitRate(eE.Z.bitrate),
            e.applyVideoQualityMode(eT.Z.mode),
            e0.supports(eP.AN.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                e0.setAsyncVideoInputDeviceInit((0, G.p)("setupMediaEngine").enabled);
    }),
        e0.on(b.aB.DeviceChange, (e, t, n) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_DEVICES",
                inputDevices: e,
                outputDevices: t,
                videoDevices: n,
            });
        }),
        e0.on(b.aB.VolumeChange, (e, t) => {
            v.Z.dispatch({
                type: "AUDIO_VOLUME_CHANGE",
                inputVolume: e,
                outputVolume: t,
            });
        }),
        e0.on(b.aB.DesktopSourceEnd, (e, t) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                settings: null,
                endReason: e,
                errorCode: t,
            });
        }),
        e0.on(b.aB.AudioPermission, (e) => {
            (tR = !0),
                v.Z.dispatch({
                    type: "MEDIA_ENGINE_PERMISSION",
                    kind: "audio",
                    granted: e,
                });
        }),
        e0.on(b.aB.VideoPermission, (e) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_PERMISSION",
                kind: "video",
                granted: e,
            });
        }),
        e0.on(b.aB.WatchdogTimeout, async () => {
            let e;
            try {
                await eu.Z.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
            } catch (t) {
                "number" == typeof t.status && (e = t.status);
            }
            ej.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)),
                ec.default.track(eS.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        e0.on(b.aB.VideoInputInitialized, (e) => {
            ec.default.track(eS.rMx.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired
                    ? null
                    : Math.round(e.timeToFirstFrame * ed.Z.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: eO.Z.getMediaSessionId(),
                rtc_connection_id: eO.Z.getRTCConnectionId(),
            });
        }),
        e0.on(b.aB.AudioInputInitialized, (e) => {
            ec.default.track(eS.rMx.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * ed.Z.Millis.SECOND),
                rtc_connection_id: eO.Z.getRTCConnectionId(),
            });
        }),
        e0.on(b.aB.ClipsRecordingRestartNeeded, () => {
            v.Z.dispatch({ type: "CLIPS_RESTART" });
        }),
        e0.on(b.aB.ClipsInitFailure, (e, t) => {
            v.Z.wait(() => {
                v.Z.dispatch({
                    type: "CLIPS_INIT_FAILURE",
                    errMsg: e,
                    applicationName: t,
                });
            });
        }),
        e0.on(b.aB.ClipsRecordingEnded, (e, t) => {
            var n, r;
            (null == o || null == (n = o.desktopSource) ? void 0 : n.id) === e &&
                (null != t && (null == a || null == (r = a.desktopSource) ? void 0 : r.soundshareId) !== t && T.pn(t),
                (o = null));
        }),
        e0.on(b.aB.NativeScreenSharePickerUpdate, (e, t) => {
            v.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE",
                existing: e,
                content: t,
            });
        }),
        e0.on(b.aB.NativeScreenSharePickerCancel, (e) => {
            v.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL",
                existing: e,
            });
        }),
        e0.on(b.aB.NativeScreenSharePickerError, (e) => {
            v.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_ERROR",
                error: e,
            });
        }),
        e0.on(b.aB.AudioDeviceModuleError, (e, t, n) => {
            ec.default.track(eS.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                audio_device_module: e,
                code: t,
                device_name: n,
            });
        }),
        e0.on(b.aB.VideoCodecError, (e) => {
            let t = "encode" === e.mode ? P.u.VIDEO_ENCODE_ERROR : P.u.VIDEO_DECODE_ERROR,
                n = {
                    videoCodec: e.codecStandard,
                    errorMessage: e.message,
                };
            (0, P.kr)(
                t === P.u.VIDEO_ENCODE_ERROR
                    ? eM(ex({ type: t }, n), { videoEncoder: e.implName })
                    : eM(ex({ type: t }, n), { videoDecoder: e.implName }),
            );
        }),
        e0.on(b.aB.ConnectionStats, (e) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_CONNECTION_STATS",
                connectionStats: e.map((e) => {
                    let { stats: t, connection: n } = e;
                    return {
                        stats: t,
                        mediaEngineConnectionId: n.mediaEngineConnectionId,
                        version: eQ++,
                        context: n.context,
                    };
                }),
            });
        }),
        e0.on(b.aB.VoiceQueueMetrics, (e) => {
            let t = rG(e);
            null !== t && ec.default.track(eS.rMx.VOICE_QUEUE_METRICS, t);
        }),
        e0.setOnVideoContainerResized((e, t, n) => {
            v.Z.wait(() =>
                v.Z.dispatch({
                    type: "VIDEO_SIZE_UPDATE",
                    streamId: e,
                    width: t,
                    height: n,
                }),
            );
        }),
        nW(),
        nz(),
        t5.reset(),
        (0, ev.q)().then((e) => {
            null != e && (tM = e.gpu_brand);
        }),
        e0.on(b.aB.SystemMicrophoneModeChange, (e) => {
            e0.eachConnection(tJ);
        });
}
function t1() {
    return (0, ef.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eA.c5);
}
function t2() {
    return (0, ef.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eA.sN);
}
function t3() {
    return (
        (0, ef.isMac)() &&
        e0.supports(eP.AN.SCREEN_CAPTURE_KIT) &&
        m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eA.C7)
    );
}
function t4() {
    return (
        (0, ef.isWindows)() &&
        e0.supports(eP.AN.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        e0.supports(eP.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function t8() {
    return e0.supports(eP.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
let t5 = new (class {
    start() {
        this.started || ((this.started = !0), e0.on(b.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout &&
                (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            e0.removeListener(b.aB.Silence, this.handleSilence),
            v.Z.dispatch({
                type: "AUDIO_INPUT_DETECTED",
                inputDetected: null,
            }));
    }
    update() {
        let e = tF();
        !tp && eO.Z.getState() === eS.hes.RTC_CONNECTED && e.mode === eS.pM4.VOICE_ACTIVITY && e.silenceWarning
            ? this.start()
            : this.stop();
    }
    reset() {
        this.stop(), this.update();
    }
    constructor() {
        eD(this, "stateChangeTimeout", void 0),
            eD(this, "noVoiceTimeout", 5000),
            eD(this, "voiceTimeout", 1500),
            eD(this, "started", !1),
            eD(this, "handleSilence", (e) => {
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
function t6() {
    var e;
    let t = y.K.get("audio");
    null != t && (y.K.set(ek, { [eP.Yn.DEFAULT]: t }), y.K.remove("audio")),
        (e1 = null != (e = y.K.get(ek)) ? e : {}),
        p().each(e1, (e) => {
            if (
                (p().defaultsDeep(e, eJ()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, em.Kd)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== eU &&
                    ((e.vadUseKrispSettingVersion = eU), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                !e.vadThrehsoldMigrated)
            ) {
                var t;
                (e.vadThrehsoldMigrated = !0),
                    (null == (t = e.modeOptions) ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = eK);
            }
            e0.supports(eP.AN.SIDECHAIN_COMPRESSION) &&
                e.sidechainCompressionSettingVersion < eF &&
                ((e.sidechainCompressionSettingVersion = eF), (e.sidechainCompression = !0)),
                (0, ef.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== eB &&
                      ((e.ncUseKrispjsSettingVersion = eB), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== eG &&
                      ((e.ncUseKrispSettingVersion = eG), (e.noiseSuppression = !1), (e.noiseCancellation = !0)),
                e.hardwareEnabledVersion !== eZ && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = eZ)),
                null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
        }),
        ne();
}
function t7(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eP.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = tZ(t);
    return Object.assign(r, e), !__OVERLAY__ && n && y.K.set(ek, e1), r;
}
function t9() {
    y.K.remove(ek), location.reload();
}
function ne() {
    let e = tF();
    e0.setAudioInputDevice(e.inputDeviceId),
        e0.setAudioOutputDevice(e.outputDeviceId),
        tK(),
        e0.setInputVolume(e.inputVolume),
        e0.setOutputVolume(e.outputVolume),
        e0.setH264Enabled(eX || t$()),
        e0.setAv1Enabled(eX),
        e0.setH265Enabled(eX),
        e0.setAecDump(e.aecDumpEnabled),
        e0.setSidechainCompression(e.sidechainCompression),
        e0.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        e0.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing);
}
function nt() {
    e3 ||
        e0.enable().then(() =>
            v.Z.dispatch({
                type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
                enabled: !0,
                unmute: !1,
            }),
        );
}
function nn(e) {
    return {
        id: eP.w5,
        index: 0,
        name: e,
        disabled: !0,
        hardwareId: void 0,
        containerId: void 0,
    };
}
function nr(e, t) {
    if (0 === e.length) {
        let e = nn(t);
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
function ni(e, t) {
    var n, r;
    let i = null != (r = null != (n = e[t]) ? n : e[eP.w5]) ? r : p()(e).values().first();
    return null != i ? i.id : t;
}
function na(e) {
    let t = e6;
    if (((e6 = nr(e, ew.intl.string(ew.t["/QIjDA"]))), !p().isEqual(e6, t))) {
        let e = tF(),
            t = ni(e6, e.inputDeviceId);
        e0.setAudioInputDevice(t);
    }
}
function no(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function ns(e) {
    e0.eachConnection((t) => {
        t.context === eP.Yn.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function nl(e) {
    let t = e7;
    if (((e7 = nr(e, ew.intl.string(ew.t.xlUg0v))), !p().isEqual(e7, t))) {
        let e = tF(),
            n = ni(e7, e.outputDeviceId);
        e0.setAudioOutputDevice(n);
        let r = no(t),
            i = no(e7);
        r !== i && ns(i);
    }
}
function nc(e) {
    tf = e.length > 0;
    let t = e9;
    if (((e9 = nr(e, ew.intl.string(ew.t.WKWARY))), ti && !p().isEqual(e9, t))) {
        var n;
        let e = void 0 !== e9[ta],
            r = ta === eP.w5 && (null == (n = t[eP.w5]) ? void 0 : n.disabled);
        tK(e || r);
    }
}
function nu() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        r =
            null != (e = eo.Z.settings.audioContextSettings)
                ? e
                : {
                      user: {},
                      stream: {},
                  };
    for (let e of Object.keys(r)) {
        let i = e === eN.u0.USER ? eP.Yn.DEFAULT : eP.Yn.STREAM,
            a = i === eP.Yn.STREAM ? eP.Yh : eP.Qx,
            o = null != (t = r[e]) ? t : {},
            { localMutes: s, localVolumes: l } = tF(i);
        for (let [e, t] of Object.entries(o))
            null == (0, ei.Ky)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== a ? (l[e] = t.volume) : delete l[e],
                e0.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (n)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == o[e] &&
                    (delete s[e],
                    delete l[e],
                    e0.eachConnection((t) => {
                        t.setLocalVolume(e, a), t.setLocalMute(e, !1);
                    }, i));
        t7(
            {
                localMutes: s,
                localVolumes: l,
            },
            i,
        );
    }
}
function nd(e) {
    if (null == r)
        return (
            ej.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
            {
                soundshareId: null,
                soundshareSession: "",
            }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : eu.Z.getAudioPid(e),
            n = "";
        return (
            null != t && (n = eu.Z.generateSessionFromPid(t)),
            {
                soundshareId: t,
                soundshareSession: n,
            }
        );
    }
}
function nf(e, t) {
    (0, ef.isWindows)() &&
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
function n_(e) {
    (i = e.sessionId), (te = !1), (tr = !1);
    let t = tF();
    if (
        (t4() && (t8() ? r_(eP.iA.AUTOMATIC) : t.automaticAudioSubsystem && rp()),
        e0.supports(eP.AN.OFFLOAD_ADM_CONTROLS))
    ) {
        let e = !1;
        (0, ef.isDesktop)()
            ? (e = (0, k.E)({ location: "handleConnectionOpen" }).enabled)
            : ((0, ef.isIOS)() || (0, ef.isAndroid)()) && (e = (0, U.W)({ location: "handleConnectionOpen" }).enabled),
            e0.setOffloadAdmControls(e);
    }
    (0, es.wt)({
        location: "MediaEngineStore",
        autoTrackExposure: !1,
    }) &&
        null !== t.mostRecentlyRequestedVoiceFilter &&
        (0, ef.isDesktop)() &&
        (el.Z.getLastInitAttemptMayHaveCrashed()
            ? (v.Z.dispatch({
                  type: "AUDIO_SET_SELF_MUTE",
                  mute: !0,
                  context: eP.Yn.DEFAULT,
                  playSoundEffect: !0,
              }),
              t7({ mostRecentlyRequestedVoiceFilter: null }))
            : n(358820).r5()),
        nu();
}
function np(e) {
    let { mediaEngineState: t } = e;
    (e1 = t.settingsByContext),
        (e6 = t.inputDevices),
        (e7 = t.outputDevices),
        (tL = t.appSupported),
        (tE = t.krispModuleLoaded),
        (s = t.krispVersion),
        (e8 = t.goLiveContext);
}
function nh() {
    i = null;
}
function nm() {
    if ((0, ef.isWeb)()) {
        let e = X.N.getCurrentConfig({ location: "MediaEngineStore handlePostConnectionOpen" });
        e.loadWasmModule && e.preload && r.startDavePreload();
    }
    return !1;
}
function ng(e) {
    switch (e.state) {
        case eS.hes.CONNECTING:
            nt();
            break;
        case eS.hes.RTC_CONNECTING:
            (tp = !1), (th = !1);
            break;
        case eS.hes.RTC_CONNECTED:
            tK();
            break;
        case eS.hes.DISCONNECTED:
            nA(), nC();
    }
    t5.update();
}
function nE(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (te = t.mute || t.suppress), (tr = t.deaf), e0.eachConnection(tY);
            let e = null != t.guildId && null != t.channelId && null != tS && tS !== t.channelId,
                n = !tm && null == t.channelId;
            return tK(!e && !n && ti), (tS = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== eg.default.getId() || null != eO.Z.getChannelId() || tK(!1, null), e;
    }, !1);
}
function nb(e) {
    let { mute: t } = e;
    (tt = t), e0.eachConnection(tY);
}
function ny(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = tF(t);
    if (t === eP.Yn.DEFAULT && (en.Z.requestPermission(eC.Eu.AUDIO), tn)) return !1;
    (r = !i && !r) || (i = !1),
        n || (ts = !0),
        t7(
            {
                mute: r,
                deaf: i,
            },
            t,
        ),
        e0.eachConnection(tY);
}
function nO(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    t7({ mute: n }, t), r || (ts = !0), e0.eachConnection(tY);
}
function nv(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== eN.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    nu(!0);
}
function nI(e) {
    let { context: t } = e;
    t7({ deaf: !tF(t).deaf }, t), e0.eachConnection(tY);
}
function nT(e) {
    let { context: t, userId: n } = e;
    if (n === eg.default.getId()) return;
    let { localMutes: r } = tF(t);
    r[n] ? delete r[n] : (r[n] = !0),
        t7({ localMutes: r }, t),
        e0.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nS(e) {
    var t, n, r, i, a, o, s;
    let { context: l, userId: c, videoToggleState: u, persist: d, isAutomatic: _ } = e;
    f()(!(d && _), "These are not allowed to both be true.");
    let p = u === eS.ZUi.DISABLED,
        { disabledLocalVideos: h } = tF(l),
        m = null != (t = h[c]) && t,
        g = tw.has(c),
        E = u === eS.ZUi.AUTO_ENABLED || u === eS.ZUi.MANUAL_ENABLED;
    ej.info(
        "disableVideo="
            .concat(p, " currentlyDisabled=")
            .concat(m, " currentlyAutoDisabled=")
            .concat(g, ", isVideoShown=")
            .concat(E),
    ),
        f()(!(g && !m), "If you are auto-disabled, then you are also disabled.");
    let b = p !== m,
        y = l === eP.Yn.DEFAULT,
        O = _ && b && y,
        v = d && b && y;
    ej.info(
        "changed="
            .concat(b, " isDefaultContext=")
            .concat(y, " isUpdateCausedByVideoHealthManager=")
            .concat(O, " isManualToggleByUser=")
            .concat(v),
    );
    let { videoToggleStateMap: I } = tF(l);
    if (
        (I[c] === eS.ZUi.AUTO_PROBING &&
            u === eS.ZUi.AUTO_ENABLED &&
            (0, et.Z)(c, p ? eP.fC.AUTO_DISABLE : eP.fC.AUTO_ENABLE, E),
        (I[c] = u),
        t7({ videoToggleStateMap: I }, l, d),
        u === eS.ZUi.AUTO_PROBING
            ? null == (n = eO.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, !0)
            : null == (r = eO.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, !1),
        tD ||
            (ej.info("isAutoDisableAllowed=".concat(tD, " - disabling VideoHealthManager")),
            null == (a = eO.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()),
        O)
    ) {
        if ((!p && !g) || (p && !tD)) return;
        (0, et.Z)(c, p ? eP.fC.AUTO_DISABLE : eP.fC.AUTO_ENABLE, E), p ? tw.add(c) : tw.delete(c);
    } else
        v &&
            (g && !p
                ? (ej.info("disallowing auto-disable for this session because of manual override by user"),
                  (tD = !1),
                  null == (s = eO.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(),
                  (0, et.Z)(c, eP.fC.MANUAL_REENABLE, E))
                : (0, et.Z)(c, p ? eP.fC.MANUAL_DISABLE : eP.fC.MANUAL_ENABLE, E));
    y && !p && tw.delete(c),
        p ? (h[c] = !0) : delete h[c],
        t7({ disabledLocalVideos: h }, l, d),
        e0.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(c, null != (t = h[c]) && t);
        }, l);
}
function nA() {
    if (0 === tw.size) return;
    let e = eP.Yn.DEFAULT,
        { disabledLocalVideos: t } = tF(e);
    tw.forEach((n) => {
        f()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            e0.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tw.clear(),
        t7({ disabledLocalVideos: t }, e, !1);
}
function nC() {
    let e = eP.Yn.DEFAULT,
        { videoToggleStateMap: t } = tF(e);
    for (let [e, n] of Object.entries(t)) n === eS.ZUi.AUTO_PROBING && delete t[e];
    t7({ videoToggleStateMap: t }, e, !1);
}
function nN(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === eg.default.getId()) return;
    let i = t === eP.Yn.STREAM ? eP.Yh : eP.Qx,
        { localVolumes: a } = tF(t);
    r === i ? delete a[n] : (a[n] = r), t7({ localVolumes: a }, t), e0.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function nR(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: a } = tF(t);
    (a[n] = {
        left: r,
        right: i,
    }),
        t7({ localPans: a }, t),
        e0.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function nP(e) {
    let { context: t, mode: n, options: r } = e;
    t7(
        {
            mode: n,
            modeOptions: r,
        },
        t,
    ),
        e0.eachConnection(tV),
        t5.update();
}
function nw(e) {
    let { volume: t } = e;
    t7({ inputVolume: tH(t) }), e0.setInputVolume(t);
}
function nD(e) {
    let { volume: t } = e;
    t7({ outputVolume: t }), e0.setOutputVolume(t);
}
function nx(e) {
    let { id: t } = e;
    (t = ni(e6, t)), (e5 = performance.now()), t7({ inputDeviceId: t }), e0.setAudioInputDevice(t);
}
function nL(e) {
    let { id: t } = e;
    t7({ outputDeviceId: (t = ni(e7, t)) }), e0.setAudioOutputDevice(t);
}
function nM(e) {
    let { id: t } = e;
    t7({ videoDeviceId: (t = ni(e9, t)) }), tK();
}
function nj(e) {
    let { inputProfile: t } = e;
    t7({ activeInputProfile: t });
    let n = tF();
    e0.eachConnection((e) => {
        tV(e),
            tX(e, n.automaticGainControl),
            e.setEchoCancellation(n.echoCancellation),
            e.setExperimentalEncoders(n.experimentalEncoders),
            tQ(e, n.noiseCancellation),
            e.setNoiseSuppression(n.noiseSuppression);
    }),
        e0.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        t5.update(),
        nK();
}
function nk(e) {
    return e4 !== e.required && ((e4 = e.required), e.required || e0.interact(), !0);
}
function nU(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    na(t), nl(n), nc(r);
}
function nG(e) {
    let { inputVolume: t, outputVolume: n } = e;
    t7({
        inputVolume: tH(t),
        outputVolume: n,
    });
}
function nB(e) {
    var t;
    let n = tF(),
        r = e0.getAudioSubsystem(),
        i = e0.getAudioLayer(),
        a = ni(e6, n.inputDeviceId),
        o = null == (t = e6[a]) ? void 0 : t.name;
    ec.default.track(eS.rMx.VOICE_PROCESSING, {
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
function nZ(e) {
    let t = t7({ echoCancellation: e.enabled });
    e0.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nK(), nB(e.location);
}
function nF(e) {
    nH(e.enabled);
}
function nV(e) {
    let t = t7({ sidechainCompressionStrength: e.strength });
    e0.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function nH(e) {
    let t = t7({ sidechainCompression: e });
    e0.setSidechainCompression(t.sidechainCompression);
}
function nY(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tx.add(n) : tx.delete(n), nW(), nK();
}
function nW() {
    let e = !tx.has("voice_filter_preview") && !tx.has("mic_test");
    e0.setMaybePreprocessMute(e);
}
function nK() {
    let e = tF(),
        t = tx.size > 0,
        n = e.inputDeviceId,
        r = eb.Z.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        a = eb.Z.hasNoiseSuppression(n) || e.noiseSuppression,
        o = tq(eb.Z.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation,
        l = null !== tO,
        c = tx.has("voice_filter") && 1 === tx.size;
    e0.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: a,
        automaticGainControlConfig: o,
        noiseCancellation: s,
        voiceFilters: l,
        loopbackUseAudioMode: c,
    });
}
async function nz() {
    var e, t, n, r;
    if (!e0.supports(eP.AN.VAAPI)) return;
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
        ((tG = !0), (tU = e0.supports(eP.AN.GAMESCOPE_CAPTURE)));
}
function nq(e) {
    let t = t7({ noiseSuppression: e.enabled });
    e0.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nK(), nB(e.location);
}
function nX(e) {
    let t = t7({ automaticGainControl: e.enabled });
    e0.eachConnection((e) => tX(e, t.automaticGainControl)), nK(), nB(e.location);
}
function nQ(e) {
    let t = t7({ noiseCancellation: e.enabled });
    e0.eachConnection((e) => tQ(e, t.noiseCancellation)), nK(), nB(e.location);
}
function nJ(e) {
    er.Z.setKrispModelOverride(e.model), (c = e.model), nK();
}
function n$(e) {
    var t;
    (0, ef.isWeb)() || ((ty = e.enabled), null == (t = e0.setNoiseCancellationEnableStats) || t.call(e0, e.enabled));
}
function n0(e) {
    let t = t7({ experimentalEncoders: e.enabled });
    e0.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
}
function n1(e) {
    t7({ silenceWarning: e.enabled }), t5.update();
}
function n2(e) {
    e0.setDebugLogging(e.enabled);
}
function n3(e) {
    let { level: t } = e;
    (l = t), er.Z.setKrispSuppressionLevel(t);
}
function n4(e) {
    t7({ videoHook: e.enabled });
}
function n8(e) {
    t7({ experimentalSoundshare2: e.enabled });
}
function n5(e) {
    let { enabled: t } = e;
    t7({ useSystemScreensharePicker: t });
}
function n6(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = t7({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r,
        });
    e0.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function n7(e) {
    let { enabled: t } = e;
    t7({ qos: t }), e0.eachConnection((e) => e.setQoS(t));
}
function n9() {
    t9();
}
function re(e) {
    let { inputDetected: t } = e;
    (t_ = t), !tp && t_ && ((tp = !0), t5.update());
}
function rt(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === tn) return !1;
    (tn = n), e0.eachConnection(tY);
}
function rn(e) {
    let { state: t, permissionType: n } = e,
        r = t === eC.PQ.ACCEPTED;
    switch (n) {
        case eC.Eu.AUDIO:
            (tR = !0), e0.eachConnection(tY);
            break;
        case eC.Eu.CAMERA:
            !r && ti && tK(!1);
            break;
        default:
            return !1;
    }
}
function rr() {
    return tE || !1;
}
async function ri() {
    try {
        var e, t, n, i;
        await eh.ZP.ensureModule("discord_krisp");
        let a = eh.ZP.requireModule("discord_krisp");
        (tE = !0),
            (s = null == (e = a.getSdkVersion) ? void 0 : e.call(a)),
            (l = null != (i = null == (t = a.getSuppressionLevel) ? void 0 : t.call(a)) ? i : 100),
            null == (n = a.getNcModels) ||
                n.call(a).then((e) => {
                    (tb = e), r.emitChange();
                }),
            r.emitChange();
    } catch (t) {
        ej.warn("Failed to load Krisp module: ".concat(t.message)), ep.Z.captureException(t);
        let e = eP.H3.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eP.H3.INITIALIZED : n;
        }
        ec.default.track(eS.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), t7({ noiseCancellation: !1 });
    } finally {
        tg = !1;
    }
}
function ra() {
    return (0, ef.isWindows)() || (0, ef.isLinux)() || (0, ef.isMac)();
}
function ro() {
    !ra() || __OVERLAY__ || tg || tE
        ? (0, ef.isWeb)() && e0.supports(eP.AN.NOISE_CANCELLATION)
            ? ((tE = !0), r.emitChange())
            : (0, ef.isWeb)() && t7({ noiseCancellation: !1 })
        : ((tg = !0), ri());
}
function rs(e) {
    let { enabled: t } = e;
    ec.default.track(eS.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != tO ? tO : null,
        enabled: t,
    }),
        t7({ voiceFilterPlaybackEnabled: t });
}
function rl(e) {
    let { newVoiceFilterId: t } = e;
    t7({ mostRecentlyRequestedVoiceFilter: t }), e0.eachConnection((e) => e.setVoiceFilterId(t));
}
function rc() {
    t7({ mostRecentlyRequestedVoiceFilter: null });
}
function ru(e) {
    let { voiceFilterId: t } = e;
    (tI = tO), (tT = tv), (tO = t), (tv = null === t ? null : Date.now());
}
function rd(e) {
    let t = e.bypassEnabled;
    t7({ bypassSystemInputProcessing: t }), e0.setAudioInputBypassSystemProcessing(t), nB(e.location);
}
function rf(e) {
    r_(e.subsystem);
}
function r_(e) {
    e === eP.iA.AUTOMATIC
        ? (t7({ automaticAudioSubsystem: !0 }), rp())
        : (t7({ automaticAudioSubsystem: !1 }), e0.setAudioSubsystem(e));
}
function rp() {
    e0.queueAudioSubsystem(eP.iA.EXPERIMENTAL);
}
function rh(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && tK(i, null), null != t || null == n)) {
        tm = !1;
        return;
    }
    if (tm) return;
    tm = !0;
    let a = tF();
    (a.mute || a.deaf) &&
        (t7({
            deaf: !1,
            mute: !1,
        }),
        e0.eachConnection(tY));
}
function rm(e) {
    let { application: t } = e;
    e2.add(t.id);
}
function rg(e) {
    let { application: t } = e;
    e2.delete(t.id);
}
function rE(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (e3 = !1), e0.eachConnection(tY);
                break;
            case "video":
                tK(!1);
        }
}
function rb(e) {
    (e3 = e.enabled),
        e.unmute &&
            t7({
                mute: !1,
                deaf: !1,
            }),
        e0.eachConnection(tY);
}
function ry(e) {
    let { enabled: t } = e;
    en.Z.requestPermission(eC.Eu.CAMERA), tK(t);
}
function rO(e) {
    let { sourceId: t, applicationName: n, quality: i } = e,
        a = A.Z.isDecoupledGameClippingEnabled(),
        s = A.Z.getSettings().decoupledClipsEnabled;
    if (!a || !s || null == I.Z) return;
    let l = null,
        c = null,
        u = eu.Z.getPidFromDesktopSource(t);
    ({ soundshareId: l, soundshareSession: c } = nd(u));
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
        (e0.setClipsSource(null),
        (0, ef.isWindows)() && null != o.desktopSource.soundshareId && T.pn(o.desktopSource.soundshareId)),
        null != l && nf(l, c),
        (o = d);
    let f = tB(),
        _ = tF().videoHook;
    e0.setClipsSource({
        desktopDescription: {
            id: o.desktopSource.id,
            soundshareId: o.desktopSource.soundshareId,
            useVideoHook: _,
            useGraphicsCapture: t1(),
            useCaptureDeviceForEncode: !1,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: t3(),
            videoHookStaleFrameTimeoutMs: eY,
            graphicsCaptureStaleFrameTimeoutMs: eW,
            hdrCaptureMode: f,
        },
        quality: i,
        applicationName: n,
    });
}
function rv(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((o = null), e0.setClipsSource(null));
}
function rI(e) {
    var t, n, r, i;
    let { settings: a } = e;
    if ((null == a ? void 0 : a.desktopSettings) != null) {
        let e = null,
            r = null,
            { sourceId: i, sound: o } = a.desktopSettings,
            s = null != (t = a.context) ? t : eP.Yn.DEFAULT,
            l =
                null != (n = a.qualityOptions)
                    ? n
                    : {
                          resolution: 720,
                          frameRate: 30,
                      },
            c = !1 === o ? null : eu.Z.getPidFromDesktopSource(i);
        ef.isPlatformEmbedded &&
            !0 === o &&
            (({ soundshareId: e, soundshareSession: r } = nd(c)), null != e && nf(e, r)),
            tW(s),
            tK(s === eP.Yn.STREAM && ti, {
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
        let e = null != (r = a.context) ? r : eP.Yn.DEFAULT,
            { videoDeviceGuid: t, audioDeviceGuid: n } = a.cameraSettings,
            o = e === eP.Yn.STREAM && ti,
            s =
                null != (i = a.qualityOptions)
                    ? i
                    : {
                          resolution: 720,
                          frameRate: 30,
                      };
        tK(o, {
            cameraSource: {
                videoDeviceGuid: t,
                audioDeviceGuid: n,
            },
            quality: {
                resolution: s.resolution,
                frameRate: s.frameRate,
            },
        });
    } else tK(ti, null);
}
function rT(e) {
    let { section: t } = e;
    return t === eS.oAB.VOICE && nt(), !1;
}
function rS() {
    return e0.eachConnection(tJ), !1;
}
function rA(e) {
    let { enabled: t } = e;
    t7({ openH264: t }), e0.setH264Enabled(eX || t$()), e0.eachConnection((e) => e.setSoftwareH264(t$()));
}
function rC(e) {
    let { enabled: t } = e,
        n = t7({ aecDumpEnabled: t });
    e0.setAecDump(n.aecDumpEnabled);
}
function rN(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (e1 = Object.values(eP.Yn).reduce((e, n) => {
        let r = n,
            i = eJ();
        return (e[r] = p().merge(i, t[r])), e;
    }, {})),
        y.K.set(ek, e1),
        ne();
}
function rR(e) {
    let { state: t } = e,
        n = D.Z.isEnabled();
    if (t === eS.$7l.BACKGROUND && ti && !n) (td = !0), tK(!1);
    else {
        if (t !== eS.$7l.ACTIVE || !td) return !1;
        (td = !1), tK(!0);
    }
    return !0;
}
function rP(e) {
    e0.eachConnection((t) => t.setBitRate(e.bitrate));
}
function rw() {
    if ((!ti && null == a) || null != eO.Z.getRTCConnectionId()) return !1;
    tK(!1, null);
}
function rD() {
    return !!tA && ((tA = !1), !0);
}
function rx(e) {
    e0.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function rL(e) {
    let { settings: t } = e;
    e0.applyMediaFilterSettings(t).finally(() => {
        (tC = !1), r.emitChange();
    });
}
function rM() {
    tC = !0;
}
function rj() {
    tC = !1;
}
function rk(e) {
    tj = e.enabled;
}
class rU extends (u = E.ZP.Store) {
    initialize() {
        t0(),
            t6(),
            ro(),
            nC(),
            (tL = {
                [eP.AN.VIDEO]: e0.supports(eP.AN.VIDEO),
                [eP.AN.DESKTOP_CAPTURE]: e0.supports(eP.AN.DESKTOP_CAPTURE),
                [eP.AN.HYBRID_VIDEO]: e0.supports(eP.AN.HYBRID_VIDEO),
            }),
            this.waitFor(eg.default, eE.Z, eb.Z, ey.Z, A.Z, w.Z, eO.Z, x.ZP, eo.Z, eI.default, eT.Z, el.Z);
    }
    supports(e) {
        return e0.supports(e);
    }
    supportsInApp(e) {
        return tL[e] || e0.supports(e);
    }
    isSupported() {
        return e0.supported();
    }
    isExperimentalEncodersSupported() {
        return e0.supports(eP.AN.EXPERIMENTAL_ENCODERS);
    }
    isNoiseSuppressionSupported() {
        return e0.supports(eP.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return rr();
    }
    isNoiseCancellationError() {
        return tA;
    }
    isAutomaticGainControlSupported() {
        return e0.supports(eP.AN.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !t8() && (e0.supports(eP.AN.LEGACY_AUDIO_SUBSYSTEM) || e0.supports(eP.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return e0.supports(eP.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === e0.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return rr();
    }
    isAecDumpSupported() {
        return e0.supports(eP.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return e0.supports(eP.AN.VIDEO) && e0.supports(eP.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        return (
            (null == (e = ey.Z.getChannel(tS)) ? void 0 : e.type) !== eS.d4z.GUILD_STAGE_VOICE &&
            eX &&
            H.Z.simulcastEnabled()
        );
    }
    getAecDump() {
        return tF().aecDumpEnabled;
    }
    getMediaEngine() {
        return e0;
    }
    getVideoComponent() {
        return e0.Video;
    }
    getCameraComponent() {
        return e0.Camera;
    }
    getKrispSuppressionLevel() {
        return null != l ? l : 100;
    }
    getKrispEnableStats() {
        return ty;
    }
    isEnabled() {
        return e3;
    }
    isMute() {
        return this.isSelfMute() || te;
    }
    isDeaf() {
        return this.isSelfDeaf() || tr;
    }
    hasContext(e) {
        return null != e1[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.Yn.DEFAULT;
        return e === eP.Yn.DEFAULT && tt;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.Yn.DEFAULT;
        return (
            !this.isEnabled() ||
            tF(e).mute ||
            !en.Z.didHavePermission(eC.Eu.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eP.Yn.DEFAULT && tn)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return ts;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        ts = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && eb.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return tj;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.Yn.DEFAULT;
        return !this.isSupported() || tF(e).deaf;
    }
    isVideoEnabled() {
        return ti && tf;
    }
    isVideoAvailable() {
        return Object.values(e9).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.Yn.STREAM;
        return e8 === e && null != a;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.Yn.STREAM;
        return e8 === t && null != a && (null == (e = a.desktopSource) ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eP.Yn.DEFAULT;
        return e !== eg.default.getId() && (tF(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return e0.supports(eP.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eP.Yn.DEFAULT;
        return null != (t = tF(n).disabledLocalVideos[e]) && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eP.Yn.DEFAULT;
        return null != (t = tF(n).videoToggleStateMap[e]) ? t : eS.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eP.Yn.DEFAULT;
        return t === eP.Yn.DEFAULT && tw.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.Yn.DEFAULT;
        return e === eP.Yn.DEFAULT && tw.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tC;
    }
    isNativeAudioPermissionReady() {
        return tR;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return e8;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return e5;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eP.Yn.DEFAULT,
            n = tF(t).localPans[e];
        return null != n ? n : eH;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eP.Yn.DEFAULT,
            n = t === eP.Yn.STREAM ? eP.Yh : eP.Qx,
            r = tF(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return tF().inputVolume;
    }
    getOutputVolume() {
        return tF().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.Yn.DEFAULT;
        return tF(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.Yn.DEFAULT;
        return tF(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return tO;
    }
    getActiveVoiceFilterAppliedAt() {
        return tv;
    }
    getPreviousVoiceFilter() {
        return tI;
    }
    getPreviousVoiceFilterAppliedAt() {
        return tT;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return tF().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return tF().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            p().each(e1, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === eS.pM4.PUSH_TO_TALK && e2.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return ni(e6, tF().inputDeviceId);
    }
    getOutputDeviceId() {
        return ni(e7, tF().outputDeviceId);
    }
    getVideoDeviceId() {
        return ni(e9, tF().videoDeviceId);
    }
    getInputDevices() {
        return e6;
    }
    getOutputDevices() {
        return e7;
    }
    getVideoDevices() {
        return e9;
    }
    getEchoCancellation() {
        let e = tF();
        return eb.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return e0.supports(eP.AN.SIDECHAIN_COMPRESSION) && tF().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return tF().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return tF().h265Enabled;
    }
    getLoopback() {
        return tx.size > 0;
    }
    getLoopbackReasons() {
        return tx;
    }
    getNoiseSuppression() {
        let e = tF();
        return eb.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tF();
        return eb.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return tF().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return tF().noiseCancellation;
    }
    getExperimentalEncoders() {
        return tF().experimentalEncoders;
    }
    getHardwareEncoding() {
        return eX;
    }
    getEnableSilenceWarning() {
        return tF().silenceWarning;
    }
    getDebugLogging() {
        return e0.getDebugLogging();
    }
    getQoS() {
        return tF().qos;
    }
    getAttenuation() {
        return tF().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return tF().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return tF().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return t4() && tF().automaticAudioSubsystem ? eP.iA.AUTOMATIC : e0.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return e0.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return tF().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eR._.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.Yn.DEFAULT;
        return tF(e);
    }
    getState() {
        return {
            settingsByContext: e1,
            inputDevices: e6,
            outputDevices: e7,
            appSupported: tL,
            krispModuleLoaded: tE,
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
        return ef.isPlatformEmbedded || this.getMode() !== eS.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        e0.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return e4;
    }
    getVideoHook() {
        return tF().videoHook;
    }
    supportsVideoHook() {
        return e0.supports(eP.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tF().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return (
            e0.supports(eP.AN.EXPERIMENTAL_SOUNDSHARE) &&
            m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eA.T6)
        );
    }
    supportsHookSoundshare() {
        return (
            (0, ef.isWindows)() &&
            e0.supports(eP.AN.SOUNDSHARE) &&
            m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eA.sA)
        );
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = tF().useSystemScreensharePicker,
            n = (0, ef.isLinux)();
        return e && (null != t ? t : n);
    }
    supportsSystemScreensharePicker() {
        return e0.supports(eP.AN.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return tG;
    }
    getUseGamescopeCapture() {
        return tU;
    }
    getOpenH264() {
        return tF().openH264;
    }
    getEverSpeakingWhileMuted() {
        return tl;
    }
    getSpeakingWhileMuted() {
        return tc;
    }
    getKrispModelOverride() {
        return c;
    }
    getKrispModels() {
        return tb;
    }
    getKrispVadActivationThreshold() {
        var e;
        return null != (e = tF().modeOptions.vadKrispActivationThreshold) ? e : eV;
    }
    hasActiveCallKitCall() {
        return tk;
    }
    setHasActiveCallKitCall(e) {
        tk = e;
    }
    supportsScreenSoundshare() {
        return (0, ef.isMac)()
            ? e0.supports(eP.AN.SOUNDSHARE) &&
                  m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eA.yG) &&
                  t3()
            : (0, ef.isWindows)()
              ? e0.supports(eP.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, ef.isLinux)() && e0.supports(eP.AN.SCREEN_SOUNDSHARE);
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.Yn.DEFAULT,
            t = this.supports(eP.AN.VIDEO)
                ? [
                      {
                          rid: "100",
                          type: e === eP.Yn.DEFAULT ? eP.Tr.VIDEO : eP.Tr.SCREEN,
                          quality: eP.y7,
                      },
                  ]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === eP.Yn.DEFAULT || this.goLiveSimulcastEnabled()) &&
                t.push({
                    rid: "50",
                    type: e === eP.Yn.DEFAULT ? eP.Tr.VIDEO : eP.Tr.SCREEN,
                    quality: eP.LD,
                }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: !1 };
        return (
            (0, ef.isWeb)() &&
                (e.fetchDave = X.N.getCurrentConfig({
                    location: "MediaEngineStore fetchAsyncResources",
                }).loadWasmModule),
            e0.fetchAsyncResources(e)
        );
    }
    startDavePreload() {
        if (!tN && ((tN = !0), (0, ef.isWeb)())) {
            let e = { fetchDave: !0 };
            e0.fetchAsyncResources(e).catch((e) => {
                ej.warn("DAVE preload failed:", e), ep.Z.captureException(e);
            });
        }
    }
    getSupportedSecureFramesProtocolVersion() {
        if ((0, ef.isWeb)()) {
            let { useWasmModule: e } = X.N.getCurrentConfig({
                location: "MediaEngineStore getSupportedSecureFramesProtocolVersion",
            });
            if (!e) return 0;
        }
        let e = e0.getSupportedSecureFramesProtocolVersion(),
            t = X.m.getCurrentConfig({ location: "MediaEngineStore" });
        return 114 === e && (e = 1), t.canSupportDaveProtocol && e >= t.protocolVersionFloor ? e : 0;
    }
    hasClipsSource() {
        return null != o;
    }
    getGpuBrand() {
        return tM;
    }
}
function rG(e) {
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
eD(rU, "displayName", "MediaEngineStore");
let rB = (r = new rU(v.Z, {
    VOICE_CHANNEL_SELECT: rh,
    VOICE_STATE_UPDATES: nE,
    CONNECTION_OPEN: n_,
    CONNECTION_CLOSED: nh,
    POST_CONNECTION_OPEN: nm,
    RTC_CONNECTION_STATE: ng,
    AUDIO_SET_TEMPORARY_SELF_MUTE: nb,
    AUDIO_TOGGLE_SELF_MUTE: ny,
    AUDIO_SET_SELF_MUTE: nO,
    AUDIO_TOGGLE_SELF_DEAF: nI,
    AUDIO_TOGGLE_LOCAL_MUTE: nT,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: nS,
    AUDIO_SET_LOCAL_VOLUME: nN,
    AUDIO_SET_LOCAL_PAN: nR,
    AUDIO_SET_MODE: nP,
    AUDIO_SET_INPUT_VOLUME: nw,
    AUDIO_SET_OUTPUT_VOLUME: nD,
    AUDIO_SET_INPUT_DEVICE: nx,
    AUDIO_SET_OUTPUT_DEVICE: nL,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: nj,
    AUDIO_SET_ECHO_CANCELLATION: nZ,
    AUDIO_SET_SIDECHAIN_COMPRESSION: nF,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nV,
    AUDIO_SET_LOOPBACK: nY,
    AUDIO_SET_NOISE_SUPPRESSION: nq,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nX,
    AUDIO_SET_NOISE_CANCELLATION: nQ,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: nJ,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: n1,
    AUDIO_SET_DEBUG_LOGGING: n2,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: n3,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: n$,
    MEDIA_ENGINE_SET_VIDEO_HOOK: n4,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: n8,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: n5,
    AUDIO_SET_ATTENUATION: n6,
    AUDIO_SET_QOS: n7,
    MEDIA_ENGINE_DEVICES: nU,
    AUDIO_VOLUME_CHANGE: nG,
    AUDIO_RESET: n9,
    AUDIO_INPUT_DETECTED: re,
    AUDIO_SET_SUBSYSTEM: rf,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rd,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rb,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: ry,
    MEDIA_ENGINE_PERMISSION: rE,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rI,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nM,
    MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: n0,
    MEDIA_ENGINE_INTERACTION_REQUIRED: nk,
    USER_SETTINGS_MODAL_INIT: rT,
    USER_SETTINGS_MODAL_SET_SECTION: rT,
    CERTIFIED_DEVICES_SET: rS,
    RPC_APP_CONNECTED: rm,
    RPC_APP_DISCONNECTED: rg,
    OVERLAY_INITIALIZE: np,
    MEDIA_ENGINE_SET_OPEN_H264: rA,
    APP_STATE_UPDATE: rR,
    SET_CHANNEL_BITRATE: rP,
    SET_VAD_PERMISSION: rt,
    SET_NATIVE_PERMISSION: rn,
    SET_CHANNEL_VIDEO_QUALITY_MODE: rx,
    MEDIA_ENGINE_SET_AEC_DUMP: rC,
    MEDIA_ENGINE_RESET_SETTINGS: rN,
    CHANNEL_DELETE: rw,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rD,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rL,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rM,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rj,
    USER_SETTINGS_PROTO_UPDATE: nv,
    CLIPS_INIT: rO,
    CLIPS_SETTINGS_UPDATE: rv,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rk,
    VOICE_FILTER_REQUEST_SWITCH: rl,
    VOICE_FILTER_LOOPBACK_TOGGLE: rs,
    VOICE_FILTER_APPLIED: ru,
    VOICE_FILTER_DOWNLOAD_FAILED: rc,
    VOICE_FILTER_APPLY_FAILED: rc,
}));
