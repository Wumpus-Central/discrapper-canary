let r, i, a, o, s, l, c;
n.d(t, { Z: () => rk }), n(388685), n(953529), n(457542), n(539854), n(642613), n(49124), n(337869);
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
    L = n(594190),
    x = n(502286),
    M = n(883794),
    k = n(314080),
    j = n(822253),
    U = n(177732),
    G = n(960708),
    B = n(294473),
    Z = n(706629),
    F = n(159142),
    V = n(302630),
    H = n(166884),
    Y = n(422797),
    W = n(64592),
    K = n(529558),
    z = n(705946),
    q = n(412412),
    X = n(441167),
    Q = n(986855),
    J = n(338336),
    $ = n(751571),
    ee = n(311473),
    et = n(725380),
    en = n(581883),
    er = n(875527),
    ei = n(420439),
    ea = n(626135),
    eo = n(12647),
    es = n(70956),
    el = n(358085),
    ec = n(747268),
    eu = n(960048),
    ed = n(998502),
    ef = n(13140),
    e_ = n(314897),
    ep = n(967368),
    eh = n(463395),
    em = n(592125),
    eg = n(19780),
    eE = n(704806),
    eb = n(594174),
    ey = n(631768),
    eO = n(981631),
    ev = n(70722),
    eI = n(761274),
    eS = n(526761),
    eT = n(345655),
    eA = n(65154),
    eC = n(388032);
function eN(e, t, n) {
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
function eR(e) {
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
                eN(e, t, n[t]);
            });
    }
    return e;
}
function eP(e, t) {
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
function ew(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eP(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eD = new N.Z("MediaEngineStore"),
    eL = "MediaEngineStore",
    ex = 4,
    eM = 1,
    ek = 1,
    ej = 1,
    eU = 1,
    eG = 0.5,
    eB = {
        left: 1,
        right: 1,
    },
    eZ = 500,
    eF = 5 * es.Z.Millis.SECOND,
    eV = -60,
    eH = 100,
    eY = 2 * es.Z.Millis.SECOND,
    eW = !0,
    eK = 0;
function ez() {
    return {
        mode: eO.pM4.VOICE_ACTIVITY,
        modeOptions: {
            threshold: eV,
            autoThreshold: el.isPlatformEmbedded || __OVERLAY__,
            vadUseKrisp: !0,
            vadKrispActivationThreshold: eG,
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
        inputVolume: eA.Qx,
        outputVolume: eA.Qx,
        inputDeviceId: eA.w5,
        outputDeviceId: eA.w5,
        videoDeviceId: eA.w5,
        qos: !1,
        qosMigrated: !1,
        videoHook: eX.supports(eA.AN.VIDEO_HOOK),
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
let eq = {
        [eT._.CUSTOM]: {},
        [eT._.VOICE_ISOLATION]: {
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
        [eT._.STUDIO]: {
            mode: eO.pM4.VOICE_ACTIVITY,
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
    eX = (0, b.Mt)((0, b.jj)());
eD.enableNativeLogger(!0);
let eQ = {},
    eJ = new Set([eA.Yn.DEFAULT]),
    e$ = eX.supports(eA.AN.AUTO_ENABLE),
    e0 = !1,
    e1 = eA.Yn.STREAM,
    e3 = performance.now(),
    e2 = { [eA.w5]: t7("No Input Devices") },
    e4 = { [eA.w5]: t7("No Output Devices") },
    e8 = { [eA.w5]: t7("No Video Devices") },
    e5 = !1,
    e6 = !1,
    e7 = !1,
    e9 = !1,
    te = !1,
    tt = eA.Av,
    tn = eA.Av,
    tr = !1,
    ti = !1,
    ta = !1,
    to = new O.V7(),
    ts = !1,
    tl = !1,
    tc = null,
    tu = !1,
    td = !1,
    tf = !1,
    t_ = !1,
    tp = !1,
    th = [],
    tm = !1,
    tg = null,
    tE = null,
    tb = null,
    ty = null,
    tO = null,
    tv = !1,
    tI = !1,
    tS = !1,
    tT = !1;
$.Z.hasPermission(eI.Eu.AUDIO, { showAuthorizationError: !1 }),
    $.Z.hasPermission(eI.Eu.CAMERA, { showAuthorizationError: !1 });
let tA = !1,
    tC = new Set(),
    tN = tA,
    tR = new Set(),
    tP = {},
    tw = null,
    tD = !0,
    tL = !1,
    tx = !1,
    tM = !1;
function tk() {
    var e, t;
    return null != (t = null == (e = eb.default.getCurrentUser()) ? void 0 : e.isStaff()) && t
        ? "always"
        : ec.Z === g.R.CANARY
          ? "permittedDevicesOnly"
          : "never";
}
function tj() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.Yn.DEFAULT,
        t = eQ[e];
    return null == t && ((t = ez()), (eQ[e] = t)), t;
}
function tU() {
    var e, t, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.Yn.DEFAULT,
        i = tj(r),
        a = eq[null != (e = i.activeInputProfile) ? e : eT._.CUSTOM],
        o = eR({}, null != (t = i.modeOptions) ? t : {}, null != (n = a.modeOptions) ? n : {});
    if (
        (null == o.vadDuringPreProcess && (o.vadDuringPreProcess = (0, z.C)({ location: "getSettings" }).enabled),
        (null == o.vadKrispActivationThreshold && !0 === a.automaticGainControl) || !0 === i.automaticGainControl)
    ) {
        let e = (0, M.U)({ location: "getSettings" });
        null != e.vadKrispActivationThreshold && (o.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return ew(eR({}, i, a), { modeOptions: o });
}
function tG(e) {
    var t, n;
    let r = tU(e.context);
    e.setInputMode(r.mode, {
        vadThreshold: r.modeOptions.threshold,
        vadAutoThreshold: r.modeOptions.autoThreshold,
        vadUseKrisp: r.modeOptions.vadUseKrisp && n9(),
        vadKrispActivationThreshold: null != (t = r.modeOptions.vadKrispActivationThreshold) ? t : eG,
        vadLeading: r.modeOptions.vadLeading,
        vadTrailing: r.modeOptions.vadTrailing,
        vadDuringPreProcess: null != (n = r.modeOptions.vadDuringPreProcess) && n,
        pttReleaseDelay: Math.round(r.modeOptions.delay),
    });
}
function tB(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eA.Qx;
    return p().clamp(e, 0, t);
}
function tZ(e) {
    let t = tU(e.context),
        n = !e$ || t.mute || t.deaf;
    e.context === eA.Yn.DEFAULT
        ? (n = n || e5 || e6 || e7 || !$.Z.didHavePermission(eI.Eu.AUDIO))
        : e.context === eA.Yn.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eA.Yn.DEFAULT && T.Z.updateNativeMute();
}
function tF(e) {
    e !== e1 && (null != a && eX.setGoLiveSource(null, e1), (e1 = e));
}
function tV() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : te,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        s = a;
    if (
        ((null == s ? void 0 : s.desktopSource) != null &&
            s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? void 0 : e.id) &&
            (null != s.desktopSource.soundshareId && (0, el.isWindows)() && S.pn(s.desktopSource.soundshareId),
            eX.setGoLiveSource(null, e1)),
        (null == s ? void 0 : s.cameraSource) != null &&
            (s.cameraSource.videoDeviceGuid !==
                (null == o || null == (t = o.cameraSource) ? void 0 : t.videoDeviceGuid) ||
                s.cameraSource.audioDeviceGuid !==
                    (null == o || null == (n = o.cameraSource) ? void 0 : n.audioDeviceGuid)) &&
            eX.setGoLiveSource(null, e1),
        te || i)
    ) {
        let e = tU().videoDeviceId;
        te && e === eA.w5 && tn === eA.w5 && tt !== eA.Av ? (e = tt) : (tn = e),
            (tt = (te = i) ? ne(e8, e) : eA.Av),
            eX.setVideoInputDevice(tt);
    }
    if (((a = o), null != o)) {
        let e = {
            resolution: o.quality.resolution,
            frameRate: o.quality.frameRate,
        };
        if (null != o.desktopSource) {
            let t = tk(),
                n = tU().videoHook,
                i = tQ(),
                a = i ? (tJ() ? ev.zj : ev.ZM) : 0,
                s = (0, el.isWindows)() && (0, q.t)("updateVideo").enabled;
            eX.setGoLiveSource(
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
                        allowScreenCaptureKit: t$(),
                        videoHookStaleFrameTimeoutMs: eZ,
                        graphicsCaptureStaleFrameTimeoutMs: eF,
                        hdrCaptureMode: t,
                    },
                    quality: e,
                },
                e1,
            );
        }
        null != o.cameraSource &&
            eX.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: o.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                e1,
            );
    }
}
function tH(e) {
    switch (e) {
        case eA.H3.CPU_OVERUSE:
            return P.Nk.NoiseCancellerCpuOveruse;
        case eA.H3.FAILED:
            return P.Nk.NoiseCancellerFailed;
        case eA.H3.VAD_CPU_OVERUSE:
            return P.Nk.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function tY(e) {
    let t = (0, M.U)({
        location: "getAutomaticGainControlConfig",
        disable: !e,
    }).noiseCancellationConfig;
    return eR({ enabled: e }, t);
}
function tW(e, t) {
    e.setAutomaticGainControl(tY(t));
}
async function tK(e, t) {
    if ((0, el.isIOS)() || (0, el.isMac)()) {
        let e = await eX.getSystemMicrophoneMode();
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
    let { noiseCancellationAfterProcessing: r, vadAfterWebrtc: i } = (0, Y.$)({ location: "setNoiseCancellation" });
    e.setNoiseCancellationAfterProcessing(r), e.setVADAfterWebrtc(i);
}
function tz(e) {
    let t = tU(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eh.Z.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eh.Z.hasNoiseSuppression(n) || t.noiseSuppression),
        tW(e, eh.Z.hasAutomaticGainControl(n) || t.automaticGainControl),
        tK(e, t.noiseCancellation),
        e.setVoiceFilterId(tg),
        (0, el.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function tq() {
    var e;
    return !(0, W.f)("MediaEngine").enabled && !(0, Q.M)("MediaEngine").enabled && (null == (e = tU().openH264) || e);
}
function tX() {
    eX.on(b.aB.Connection, (e) => {
        tG(e), tZ(e), tz(e);
        let t = tU();
        e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
            e.setQoS(t.qos),
            e.setExperimentalEncoders(t.experimentalEncoders),
            e.setHardwareH264(eW),
            e.setSoftwareH264(tq());
        let n = eg.Z.getGuildId(),
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
        i && e.setExperimentFlag(eA.V8.MUTE_BEFORE_PROCESSING, !0),
            o && e.setExperimentFlag(eA.V8.PTT_BEFORE_PROCESSING, !0),
            s && e.setExperimentFlag(eA.V8.SKIP_ENCODE, !0);
        let l = !1,
            c = !0;
        if (
            (e.setExperimentFlag(eA.V8.RESET_DECODER_ON_ERRORS, !0),
            l && e.setExperimentFlag(eA.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0),
            c && e.setExperimentFlag(eA.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0),
            e.context === eA.Yn.STREAM)
        ) {
            let t = nn(e4);
            e.setSoundshareDiscardRearChannels(t);
            let { simulcastEnabled: n, lqStreamBitrate: r } = H.Z.getConfig();
            e.configureGoLiveSimulcast(n, r);
        }
        if (
            ((0, el.isWindows)()
                ? (null == tw ? void 0 : tw.startsWith("NVIDIA")) || (null == tw ? void 0 : tw.startsWith("AMD"))
                    ? e.setExperimentFlag(eA.V8.SIGNAL_AV1, !0)
                    : e.setExperimentFlag(eA.V8.SIGNAL_AV1_DECODE, !0)
                : ((0, el.isMac)() || (0, el.isLinux)()) && e.setExperimentFlag(eA.V8.SIGNAL_AV1_DECODE, !0),
            (0, el.isWindows)() && e.setExperimentFlag(eA.V8.SIGNAL_AV1_HARDWARE_DECODE, !0),
            (0, el.isWeb)())
        ) {
            let { enabled: t } = (0, F.A)("MediaEngineStore");
            e.setExperimentFlag(eA.V8.BROWSER_HEVC, t);
        }
        if ((eX.setHasFullbandPerformance((0, R.Z)()), e.setRemoteAudioHistory(1000), (0, C.Z)(r))) {
            let t = A.Z.getSettings();
            e.setExperimentFlag(eA.V8.STREAMER_CLIP, t.clipsEnabled);
            let { enableViewerClipping: n } = X.Z.getCurrentConfig(
                { location: "f627ab_15" },
                { autoTrackExposure: !1 },
            );
            e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eA.ux);
        }
        for (let n of ((t = tU(e.context)), e.setPostponeDecodeLevel(eH), Object.keys(t.localMutes)))
            n !== e_.default.getId() && e.setLocalMute(n, t.localMutes[n]);
        for (let n of Object.keys(t.localVolumes)) n !== e_.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
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
            e.context === eA.Yn.DEFAULT &&
                ((ti = !1),
                (ta = !1),
                e.on(b.Sh.SpeakingWhileMuted, () => {
                    (ti = !0),
                        (ta = !0),
                        r.emitChange(),
                        to.stop(),
                        to.start(eY, () => {
                            (ta = !1), r.emitChange();
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
                    ea.default.track(
                        eO.rMx.VIDEOHOOK_INITIALIZED,
                        eR(
                            {
                                backend: e,
                                format: t,
                                framebuffer_format: n,
                                sample_count: r,
                                success: i,
                                reinitialization: o,
                            },
                            (0, x.Z)(null == a ? void 0 : a.desktopSource),
                        ),
                    );
            }),
            e.on(b.Sh.NoiseCancellationError, (e) => {
                eD.warn("noisecancellererror event: ".concat(e)),
                    (0, P.kr)({
                        type: P.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tH(e),
                    }),
                    (tv = !0),
                    ea.default.track(eO.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
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
                eD.warn("voiceactivitydetectorerror event: ".concat(e)),
                    (0, P.kr)({
                        type: P.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tH(e),
                    }),
                    ea.default.track(eO.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    v.Z.dispatch({
                        type: "AUDIO_SET_MODE",
                        context: eA.Yn.DEFAULT,
                        mode: eO.pM4.VOICE_ACTIVITY,
                        options: ew(eR({}, tU(eA.Yn.DEFAULT).modeOptions), { vadUseKrisp: !1 }),
                    }),
                    v.Z.dispatch({
                        type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
                        code: e,
                    });
            }),
            e.on(b.Sh.SdpError, (e, t, n, r) => {
                ea.default.track(eO.rMx.SDP_ERROR, {
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
            e.setBitRate(ep.Z.bitrate),
            e.applyVideoQualityMode(ey.Z.mode),
            eX.supports(eA.AN.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                eX.setAsyncVideoInputDeviceInit((0, G.p)("setupMediaEngine").enabled);
    }),
        eX.on(b.aB.DeviceChange, (e, t, n) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_DEVICES",
                inputDevices: e,
                outputDevices: t,
                videoDevices: n,
            });
        }),
        eX.on(b.aB.VolumeChange, (e, t) => {
            v.Z.dispatch({
                type: "AUDIO_VOLUME_CHANGE",
                inputVolume: e,
                outputVolume: t,
            });
        }),
        eX.on(b.aB.DesktopSourceEnd, (e, t) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                settings: null,
                endReason: e,
                errorCode: t,
            });
        }),
        eX.on(b.aB.AudioPermission, (e) => {
            (tT = !0),
                v.Z.dispatch({
                    type: "MEDIA_ENGINE_PERMISSION",
                    kind: "audio",
                    granted: e,
                });
        }),
        eX.on(b.aB.VideoPermission, (e) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_PERMISSION",
                kind: "video",
                granted: e,
            });
        }),
        eX.on(b.aB.WatchdogTimeout, async () => {
            let e;
            try {
                await eo.Z.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
            } catch (t) {
                "number" == typeof t.status && (e = t.status);
            }
            eD.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)),
                ea.default.track(eO.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        eX.on(b.aB.VideoInputInitialized, (e) => {
            ea.default.track(eO.rMx.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired
                    ? null
                    : Math.round(e.timeToFirstFrame * es.Z.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: eg.Z.getMediaSessionId(),
                rtc_connection_id: eg.Z.getRTCConnectionId(),
            });
        }),
        eX.on(b.aB.AudioInputInitialized, (e) => {
            ea.default.track(eO.rMx.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * es.Z.Millis.SECOND),
                rtc_connection_id: eg.Z.getRTCConnectionId(),
            });
        }),
        eX.on(b.aB.ClipsRecordingRestartNeeded, () => {
            v.Z.dispatch({ type: "CLIPS_RESTART" });
        }),
        eX.on(b.aB.ClipsInitFailure, (e, t) => {
            v.Z.wait(() => {
                v.Z.dispatch({
                    type: "CLIPS_INIT_FAILURE",
                    errMsg: e,
                    applicationName: t,
                });
            });
        }),
        eX.on(b.aB.ClipsRecordingEnded, (e, t) => {
            var n, r;
            (null == o || null == (n = o.desktopSource) ? void 0 : n.id) === e &&
                (null != t && (null == a || null == (r = a.desktopSource) ? void 0 : r.soundshareId) !== t && S.pn(t),
                (o = null));
        }),
        eX.on(b.aB.NativeScreenSharePickerUpdate, (e, t) => {
            v.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE",
                existing: e,
                content: t,
            });
        }),
        eX.on(b.aB.NativeScreenSharePickerCancel, (e) => {
            v.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL",
                existing: e,
            });
        }),
        eX.on(b.aB.NativeScreenSharePickerError, (e) => {
            v.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_ERROR",
                error: e,
            });
        }),
        eX.on(b.aB.AudioDeviceModuleError, (e, t, n) => {
            ea.default.track(eO.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                audio_device_module: e,
                code: t,
                device_name: n,
            });
        }),
        eX.on(b.aB.VideoCodecError, (e) => {
            let t = "encode" === e.mode ? P.u.VIDEO_ENCODE_ERROR : P.u.VIDEO_DECODE_ERROR,
                n = {
                    videoCodec: e.codecStandard,
                    errorMessage: e.message,
                };
            (0, P.kr)(
                t === P.u.VIDEO_ENCODE_ERROR
                    ? ew(eR({ type: t }, n), { videoEncoder: e.implName })
                    : ew(eR({ type: t }, n), { videoDecoder: e.implName }),
            );
        }),
        eX.on(b.aB.ConnectionStats, (e) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_CONNECTION_STATS",
                connectionStats: e.map((e) => {
                    let { stats: t, connection: n } = e;
                    return {
                        stats: t,
                        mediaEngineConnectionId: n.mediaEngineConnectionId,
                        version: eK++,
                        context: n.context,
                    };
                }),
            });
        }),
        eX.on(b.aB.VoiceQueueMetrics, (e) => {
            let t = rM(e);
            null !== t && ea.default.track(eO.rMx.VOICE_QUEUE_METRICS, t);
        }),
        eX.setOnVideoContainerResized((e, t, n) => {
            v.Z.wait(() =>
                v.Z.dispatch({
                    type: "VIDEO_SIZE_UPDATE",
                    streamId: e,
                    width: t,
                    height: n,
                }),
            );
        }),
        nF(),
        nH(),
        t3.reset(),
        (0, eE.q)().then((e) => {
            null != e && (tw = e.gpu_brand);
        }),
        eX.on(b.aB.SystemMicrophoneModeChange, (e) => {
            eX.eachConnection(tz);
        });
}
function tQ() {
    return (0, el.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, ev.c5);
}
function tJ() {
    return (0, el.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, ev.sN);
}
function t$() {
    return (
        (0, el.isMac)() &&
        eX.supports(eA.AN.SCREEN_CAPTURE_KIT) &&
        m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, ev.C7)
    );
}
function t0() {
    return (
        (0, el.isWindows)() &&
        eX.supports(eA.AN.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        eX.supports(eA.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function t1() {
    return eX.supports(eA.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
let t3 = new (class {
    start() {
        this.started || ((this.started = !0), eX.on(b.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout &&
                (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            eX.removeListener(b.aB.Silence, this.handleSilence),
            v.Z.dispatch({
                type: "AUDIO_INPUT_DETECTED",
                inputDetected: null,
            }));
    }
    update() {
        let e = tU();
        !tu && eg.Z.getState() === eO.hes.RTC_CONNECTED && e.mode === eO.pM4.VOICE_ACTIVITY && e.silenceWarning
            ? this.start()
            : this.stop();
    }
    reset() {
        this.stop(), this.update();
    }
    constructor() {
        eN(this, "stateChangeTimeout", void 0),
            eN(this, "noVoiceTimeout", 5000),
            eN(this, "voiceTimeout", 1500),
            eN(this, "started", !1),
            eN(this, "handleSilence", (e) => {
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
                                    e && (td = !0));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout,
                    ));
            });
    }
})();
function t2() {
    var e;
    let t = y.K.get("audio");
    null != t && (y.K.set(eL, { [eA.Yn.DEFAULT]: t }), y.K.remove("audio")),
        (eQ = null != (e = y.K.get(eL)) ? e : {}),
        p().each(eQ, (e) => {
            if (
                (p().defaultsDeep(e, ez()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, ef.Kd)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== ex &&
                    ((e.vadUseKrispSettingVersion = ex), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                !e.vadThrehsoldMigrated)
            ) {
                var t;
                (e.vadThrehsoldMigrated = !0),
                    (null == (t = e.modeOptions) ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = eV);
            }
            eX.supports(eA.AN.SIDECHAIN_COMPRESSION) &&
                e.sidechainCompressionSettingVersion < eU &&
                ((e.sidechainCompressionSettingVersion = eU), (e.sidechainCompression = !0)),
                (0, el.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== ek &&
                      ((e.ncUseKrispjsSettingVersion = ek), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== eM &&
                      ((e.ncUseKrispSettingVersion = eM), (e.noiseSuppression = !1), (e.noiseCancellation = !0)),
                e.hardwareEnabledVersion !== ej && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = ej)),
                null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
        }),
        t5();
}
function t4(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eA.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = tj(t);
    return Object.assign(r, e), !__OVERLAY__ && n && y.K.set(eL, eQ), r;
}
function t8() {
    y.K.remove(eL), location.reload();
}
function t5() {
    let e = tU();
    eX.setAudioInputDevice(e.inputDeviceId),
        eX.setAudioOutputDevice(e.outputDeviceId),
        tV(),
        eX.setInputVolume(e.inputVolume),
        eX.setOutputVolume(e.outputVolume),
        eX.setH264Enabled(eW || tq()),
        eX.setAv1Enabled(eW),
        eX.setH265Enabled(eW),
        eX.setAecDump(e.aecDumpEnabled),
        eX.setSidechainCompression(e.sidechainCompression),
        eX.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        eX.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing);
}
function t6() {
    e$ ||
        eX.enable().then(() =>
            v.Z.dispatch({
                type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
                enabled: !0,
                unmute: !1,
            }),
        );
}
function t7(e) {
    return {
        id: eA.w5,
        index: 0,
        name: e,
        disabled: !0,
        hardwareId: void 0,
        containerId: void 0,
    };
}
function t9(e, t) {
    if (0 === e.length) {
        let e = t7(t);
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
function ne(e, t) {
    var n, r;
    let i = null != (r = null != (n = e[t]) ? n : e[eA.w5]) ? r : p()(e).values().first();
    return null != i ? i.id : t;
}
function nt(e) {
    let t = e2;
    if (((e2 = t9(e, eC.intl.string(eC.t["/QIjDA"]))), !p().isEqual(e2, t))) {
        let e = tU(),
            t = ne(e2, e.inputDeviceId);
        eX.setAudioInputDevice(t);
    }
}
function nn(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nr(e) {
    eX.eachConnection((t) => {
        t.context === eA.Yn.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function ni(e) {
    let t = e4;
    if (((e4 = t9(e, eC.intl.string(eC.t.xlUg0v))), !p().isEqual(e4, t))) {
        let e = tU(),
            n = ne(e4, e.outputDeviceId);
        eX.setAudioOutputDevice(n);
        let r = nn(t),
            i = nn(e4);
        r !== i && nr(i);
    }
}
function na(e) {
    tl = e.length > 0;
    let t = e8;
    if (((e8 = t9(e, eC.intl.string(eC.t.WKWARY))), te && !p().isEqual(e8, t))) {
        var n;
        let e = void 0 !== e8[tt],
            r = tt === eA.w5 && (null == (n = t[eA.w5]) ? void 0 : n.disabled);
        tV(e || r);
    }
}
function no() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        r =
            null != (e = en.Z.settings.audioContextSettings)
                ? e
                : {
                      user: {},
                      stream: {},
                  };
    for (let e of Object.keys(r)) {
        let i = e === eS.u0.USER ? eA.Yn.DEFAULT : eA.Yn.STREAM,
            a = i === eA.Yn.STREAM ? eA.Yh : eA.Qx,
            o = null != (t = r[e]) ? t : {},
            { localMutes: s, localVolumes: l } = tU(i);
        for (let [e, t] of Object.entries(o))
            null == (0, et.Ky)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== a ? (l[e] = t.volume) : delete l[e],
                eX.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (n)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == o[e] &&
                    (delete s[e],
                    delete l[e],
                    eX.eachConnection((t) => {
                        t.setLocalVolume(e, a), t.setLocalMute(e, !1);
                    }, i));
        t4(
            {
                localMutes: s,
                localVolumes: l,
            },
            i,
        );
    }
}
function ns(e) {
    if (null == r)
        return (
            eD.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
            {
                soundshareId: null,
                soundshareSession: "",
            }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : eo.Z.getAudioPid(e),
            n = "";
        return (
            null != t && (n = eo.Z.generateSessionFromPid(t)),
            {
                soundshareId: t,
                soundshareSession: n,
            }
        );
    }
}
function nl(e, t) {
    (0, el.isWindows)() &&
        e > 1 &&
        S.YT(e, { soundshare_session: t }).then((t) => {
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
function nc(e) {
    (i = e.sessionId), (e5 = !1), (e9 = !1);
    let t = tU();
    if (
        (t0() && (t1() ? rc(eA.iA.AUTOMATIC) : t.automaticAudioSubsystem && ru()),
        eX.supports(eA.AN.OFFLOAD_ADM_CONTROLS))
    ) {
        let e = !1;
        (0, el.isDesktop)()
            ? (e = (0, j.E)({ location: "handleConnectionOpen" }).enabled)
            : ((0, el.isIOS)() || (0, el.isAndroid)()) && (e = (0, U.W)({ location: "handleConnectionOpen" }).enabled),
            eX.setOffloadAdmControls(e);
    }
    (0, er.wt)({
        location: "MediaEngineStore",
        autoTrackExposure: !1,
    }) &&
        null !== t.mostRecentlyRequestedVoiceFilter &&
        (0, el.isDesktop)() &&
        (ei.Z.getLastInitAttemptMayHaveCrashed()
            ? (v.Z.dispatch({
                  type: "AUDIO_SET_SELF_MUTE",
                  mute: !0,
                  context: eA.Yn.DEFAULT,
                  playSoundEffect: !0,
              }),
              t4({ mostRecentlyRequestedVoiceFilter: null }))
            : n(358820).r5()),
        no();
}
function nu(e) {
    let { mediaEngineState: t } = e;
    (eQ = t.settingsByContext),
        (e2 = t.inputDevices),
        (e4 = t.outputDevices),
        (tP = t.appSupported),
        (tp = t.krispModuleLoaded),
        (s = t.krispVersion),
        (e1 = t.goLiveContext);
}
function nd() {
    i = null;
}
function nf() {
    if ((0, el.isWeb)()) {
        let e = K.N.getCurrentConfig({ location: "MediaEngineStore handlePostConnectionOpen" });
        e.loadWasmModule && e.preload && r.startDavePreload();
    }
    return !1;
}
function n_(e) {
    switch (e.state) {
        case eO.hes.CONNECTING:
            t6();
            break;
        case eO.hes.RTC_CONNECTING:
            (tu = !1), (td = !1);
            break;
        case eO.hes.RTC_CONNECTED:
            tV();
            break;
        case eO.hes.DISCONNECTED:
            nv(), nI();
    }
    t3.update();
}
function np(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (e5 = t.mute || t.suppress), (e9 = t.deaf), eX.eachConnection(tZ);
            let e = null != t.guildId && null != t.channelId && null != tO && tO !== t.channelId,
                n = !tf && null == t.channelId;
            return tV(!e && !n && te), (tO = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== e_.default.getId() || null != eg.Z.getChannelId() || tV(!1, null), e;
    }, !1);
}
function nh(e) {
    let { mute: t } = e;
    (e6 = t), eX.eachConnection(tZ);
}
function nm(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = tU(t);
    if (t === eA.Yn.DEFAULT && ($.Z.requestPermission(eI.Eu.AUDIO), e7)) return !1;
    (r = !i && !r) || (i = !1),
        n || (tr = !0),
        t4(
            {
                mute: r,
                deaf: i,
            },
            t,
        ),
        eX.eachConnection(tZ);
}
function ng(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    t4({ mute: n }, t), r || (tr = !0), eX.eachConnection(tZ);
}
function nE(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== eS.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    no(!0);
}
function nb(e) {
    let { context: t } = e;
    t4({ deaf: !tU(t).deaf }, t), eX.eachConnection(tZ);
}
function ny(e) {
    let { context: t, userId: n } = e;
    if (n === e_.default.getId()) return;
    let { localMutes: r } = tU(t);
    r[n] ? delete r[n] : (r[n] = !0),
        t4({ localMutes: r }, t),
        eX.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nO(e) {
    var t, n, r, i, a, o, s;
    let { context: l, userId: c, videoToggleState: u, persist: d, isAutomatic: _ } = e;
    f()(!(d && _), "These are not allowed to both be true.");
    let p = u === eO.ZUi.DISABLED,
        { disabledLocalVideos: h } = tU(l),
        m = null != (t = h[c]) && t,
        g = tC.has(c),
        E = u === eO.ZUi.AUTO_ENABLED || u === eO.ZUi.MANUAL_ENABLED;
    eD.info(
        "disableVideo="
            .concat(p, " currentlyDisabled=")
            .concat(m, " currentlyAutoDisabled=")
            .concat(g, ", isVideoShown=")
            .concat(E),
    ),
        f()(!(g && !m), "If you are auto-disabled, then you are also disabled.");
    let b = p !== m,
        y = l === eA.Yn.DEFAULT,
        O = _ && b && y,
        v = d && b && y;
    eD.info(
        "changed="
            .concat(b, " isDefaultContext=")
            .concat(y, " isUpdateCausedByVideoHealthManager=")
            .concat(O, " isManualToggleByUser=")
            .concat(v),
    );
    let { videoToggleStateMap: I } = tU(l);
    if (
        (I[c] === eO.ZUi.AUTO_PROBING &&
            u === eO.ZUi.AUTO_ENABLED &&
            (0, J.Z)(c, p ? eA.fC.AUTO_DISABLE : eA.fC.AUTO_ENABLE, E),
        (I[c] = u),
        t4({ videoToggleStateMap: I }, l, d),
        u === eO.ZUi.AUTO_PROBING
            ? null == (n = eg.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, !0)
            : null == (r = eg.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, !1),
        tN ||
            (eD.info("isAutoDisableAllowed=".concat(tN, " - disabling VideoHealthManager")),
            null == (a = eg.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()),
        O)
    ) {
        if ((!p && !g) || (p && !tN)) return;
        (0, J.Z)(c, p ? eA.fC.AUTO_DISABLE : eA.fC.AUTO_ENABLE, E), p ? tC.add(c) : tC.delete(c);
    } else
        v &&
            (g && !p
                ? (eD.info("disallowing auto-disable for this session because of manual override by user"),
                  (tN = !1),
                  null == (s = eg.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(),
                  (0, J.Z)(c, eA.fC.MANUAL_REENABLE, E))
                : (0, J.Z)(c, p ? eA.fC.MANUAL_DISABLE : eA.fC.MANUAL_ENABLE, E));
    y && !p && tC.delete(c),
        p ? (h[c] = !0) : delete h[c],
        t4({ disabledLocalVideos: h }, l, d),
        eX.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(c, null != (t = h[c]) && t);
        }, l);
}
function nv() {
    if (0 === tC.size) return;
    let e = eA.Yn.DEFAULT,
        { disabledLocalVideos: t } = tU(e);
    tC.forEach((n) => {
        f()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            eX.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tC.clear(),
        t4({ disabledLocalVideos: t }, e, !1);
}
function nI() {
    let e = eA.Yn.DEFAULT,
        { videoToggleStateMap: t } = tU(e);
    for (let [e, n] of Object.entries(t)) n === eO.ZUi.AUTO_PROBING && delete t[e];
    t4({ videoToggleStateMap: t }, e, !1);
}
function nS(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === e_.default.getId()) return;
    let i = t === eA.Yn.STREAM ? eA.Yh : eA.Qx,
        { localVolumes: a } = tU(t);
    r === i ? delete a[n] : (a[n] = r), t4({ localVolumes: a }, t), eX.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function nT(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: a } = tU(t);
    (a[n] = {
        left: r,
        right: i,
    }),
        t4({ localPans: a }, t),
        eX.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function nA(e) {
    let { context: t, mode: n, options: r } = e;
    t4(
        {
            mode: n,
            modeOptions: r,
        },
        t,
    ),
        eX.eachConnection(tG),
        t3.update();
}
function nC(e) {
    let { volume: t } = e;
    t4({ inputVolume: tB(t) }), eX.setInputVolume(t);
}
function nN(e) {
    let { volume: t } = e;
    t4({ outputVolume: t }), eX.setOutputVolume(t);
}
function nR(e) {
    let { id: t } = e;
    (t = ne(e2, t)), (e3 = performance.now()), t4({ inputDeviceId: t }), eX.setAudioInputDevice(t);
}
function nP(e) {
    let { id: t } = e;
    t4({ outputDeviceId: (t = ne(e4, t)) }), eX.setAudioOutputDevice(t);
}
function nw(e) {
    let { id: t } = e;
    t4({ videoDeviceId: (t = ne(e8, t)) }), tV();
}
function nD(e) {
    let { inputProfile: t } = e;
    t4({ activeInputProfile: t });
    let n = tU();
    eX.eachConnection((e) => {
        tG(e),
            tW(e, n.automaticGainControl),
            e.setEchoCancellation(n.echoCancellation),
            e.setExperimentalEncoders(n.experimentalEncoders),
            tK(e, n.noiseCancellation),
            e.setNoiseSuppression(n.noiseSuppression);
    }),
        eX.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        t3.update(),
        nV();
}
function nL(e) {
    return e0 !== e.required && ((e0 = e.required), e.required || eX.interact(), !0);
}
function nx(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    nt(t), ni(n), na(r);
}
function nM(e) {
    let { inputVolume: t, outputVolume: n } = e;
    t4({
        inputVolume: tB(t),
        outputVolume: n,
    });
}
function nk(e) {
    var t;
    let n = tU(),
        r = eX.getAudioSubsystem(),
        i = eX.getAudioLayer(),
        a = ne(e2, n.inputDeviceId),
        o = null == (t = e2[a]) ? void 0 : t.name;
    ea.default.track(eO.rMx.VOICE_PROCESSING, {
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
function nj(e) {
    let t = t4({ echoCancellation: e.enabled });
    eX.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nV(), nk(e.location);
}
function nU(e) {
    nB(e.enabled);
}
function nG(e) {
    let t = t4({ sidechainCompressionStrength: e.strength });
    eX.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function nB(e) {
    let t = t4({ sidechainCompression: e });
    eX.setSidechainCompression(t.sidechainCompression);
}
function nZ(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tR.add(n) : tR.delete(n), nF(), nV();
}
function nF() {
    let e = !tR.has("voice_filter_preview") && !tR.has("mic_test");
    eX.setMaybePreprocessMute(e);
}
function nV() {
    let e = tU(),
        t = tR.size > 0,
        n = e.inputDeviceId,
        r = eh.Z.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        a = eh.Z.hasNoiseSuppression(n) || e.noiseSuppression,
        o = tY(eh.Z.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation,
        l = null !== tg,
        c = tR.has("voice_filter") && 1 === tR.size;
    eX.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: a,
        automaticGainControlConfig: o,
        noiseCancellation: s,
        voiceFilters: l,
        loopbackUseAudioMode: c,
    });
}
async function nH() {
    var e, t, n, r;
    if (!eX.supports(eA.AN.VAAPI)) return;
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
    (tM = a), a && eX.supports(eA.AN.GAMESCOPE_CAPTURE) && (tx = !0);
}
function nY(e) {
    let t = t4({ noiseSuppression: e.enabled });
    eX.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nV(), nk(e.location);
}
function nW(e) {
    let t = t4({ automaticGainControl: e.enabled });
    eX.eachConnection((e) => tW(e, t.automaticGainControl)), nV(), nk(e.location);
}
function nK(e) {
    let t = t4({ noiseCancellation: e.enabled });
    eX.eachConnection((e) => tK(e, t.noiseCancellation)), nV(), nk(e.location);
}
function nz(e) {
    ee.Z.setKrispModelOverride(e.model), (c = e.model), nV();
}
function nq(e) {
    var t;
    (0, el.isWeb)() || ((tm = e.enabled), null == (t = eX.setNoiseCancellationEnableStats) || t.call(eX, e.enabled));
}
function nX(e) {
    let t = t4({ experimentalEncoders: e.enabled });
    eX.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
}
function nQ(e) {
    t4({ silenceWarning: e.enabled }), t3.update();
}
function nJ(e) {
    eX.setDebugLogging(e.enabled);
}
function n$(e) {
    let { level: t } = e;
    (l = t), ee.Z.setKrispSuppressionLevel(t);
}
function n0(e) {
    t4({ videoHook: e.enabled });
}
function n1(e) {
    t4({ experimentalSoundshare2: e.enabled });
}
function n3(e) {
    let { enabled: t } = e;
    t4({ useSystemScreensharePicker: t });
}
function n2(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = t4({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r,
        });
    eX.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function n4(e) {
    let { enabled: t } = e;
    t4({ qos: t }), eX.eachConnection((e) => e.setQoS(t));
}
function n8() {
    t8();
}
function n5(e) {
    let { inputDetected: t } = e;
    (tc = t), !tu && tc && ((tu = !0), t3.update());
}
function n6(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === e7) return !1;
    (e7 = n), eX.eachConnection(tZ);
}
function n7(e) {
    let { state: t, permissionType: n } = e,
        r = t === eI.PQ.ACCEPTED;
    switch (n) {
        case eI.Eu.AUDIO:
            (tT = !0), eX.eachConnection(tZ);
            break;
        case eI.Eu.CAMERA:
            !r && te && tV(!1);
            break;
        default:
            return !1;
    }
}
function n9() {
    return tp || !1;
}
async function re() {
    try {
        var e, t, n, i;
        await ed.ZP.ensureModule("discord_krisp");
        let a = ed.ZP.requireModule("discord_krisp");
        (tp = !0),
            (s = null == (e = a.getSdkVersion) ? void 0 : e.call(a)),
            (l = null != (i = null == (t = a.getSuppressionLevel) ? void 0 : t.call(a)) ? i : 100),
            null == (n = a.getNcModels) ||
                n.call(a).then((e) => {
                    (th = e), r.emitChange();
                }),
            r.emitChange();
    } catch (t) {
        eD.warn("Failed to load Krisp module: ".concat(t.message)), eu.Z.captureException(t);
        let e = eA.H3.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eA.H3.INITIALIZED : n;
        }
        ea.default.track(eO.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), t4({ noiseCancellation: !1 });
    } finally {
        t_ = !1;
    }
}
function rt() {
    return (0, el.isWindows)() || (0, el.isLinux)() || (0, el.isMac)();
}
function rn() {
    !rt() || __OVERLAY__ || t_ || tp
        ? (0, el.isWeb)() && eX.supports(eA.AN.NOISE_CANCELLATION)
            ? ((tp = !0), r.emitChange())
            : (0, el.isWeb)() && t4({ noiseCancellation: !1 })
        : ((t_ = !0), re());
}
function rr(e) {
    let { enabled: t } = e;
    ea.default.track(eO.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != tg ? tg : null,
        enabled: t,
    }),
        t4({ voiceFilterPlaybackEnabled: t });
}
function ri(e) {
    let { newVoiceFilterId: t } = e;
    t4({ mostRecentlyRequestedVoiceFilter: t }), eX.eachConnection((e) => e.setVoiceFilterId(t));
}
function ra() {
    t4({ mostRecentlyRequestedVoiceFilter: null });
}
function ro(e) {
    let { voiceFilterId: t } = e;
    (tb = tg), (ty = tE), (tg = t), (tE = null === t ? null : Date.now());
}
function rs(e) {
    let t = e.bypassEnabled;
    t4({ bypassSystemInputProcessing: t }), eX.setAudioInputBypassSystemProcessing(t), nk(e.location);
}
function rl(e) {
    rc(e.subsystem);
}
function rc(e) {
    e === eA.iA.AUTOMATIC
        ? (t4({ automaticAudioSubsystem: !0 }), ru())
        : (t4({ automaticAudioSubsystem: !1 }), eX.setAudioSubsystem(e));
}
function ru() {
    eX.queueAudioSubsystem(eA.iA.EXPERIMENTAL);
}
function rd(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && tV(i, null), null != t || null == n)) {
        tf = !1;
        return;
    }
    if (tf) return;
    tf = !0;
    let a = tU();
    (a.mute || a.deaf) &&
        (t4({
            deaf: !1,
            mute: !1,
        }),
        eX.eachConnection(tZ));
}
function rf(e) {
    let { application: t } = e;
    eJ.add(t.id);
}
function r_(e) {
    let { application: t } = e;
    eJ.delete(t.id);
}
function rp(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (e$ = !1), eX.eachConnection(tZ);
                break;
            case "video":
                tV(!1);
        }
}
function rh(e) {
    (e$ = e.enabled),
        e.unmute &&
            t4({
                mute: !1,
                deaf: !1,
            }),
        eX.eachConnection(tZ);
}
function rm(e) {
    let { enabled: t } = e;
    $.Z.requestPermission(eI.Eu.CAMERA), tV(t);
}
function rg(e) {
    let { sourceId: t, applicationName: n, quality: i } = e,
        a = A.Z.isDecoupledGameClippingEnabled(),
        s = A.Z.getSettings().decoupledClipsEnabled;
    if (!a || !s || null == I.Z) return;
    let l = null,
        c = null,
        u = eo.Z.getPidFromDesktopSource(t);
    ({ soundshareId: l, soundshareSession: c } = ns(u));
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
        (eX.setClipsSource(null),
        (0, el.isWindows)() && null != o.desktopSource.soundshareId && S.pn(o.desktopSource.soundshareId)),
        null != l && nl(l, c),
        (o = d);
    let f = tk(),
        _ = tU().videoHook;
    eX.setClipsSource({
        desktopDescription: {
            id: o.desktopSource.id,
            soundshareId: o.desktopSource.soundshareId,
            useVideoHook: _,
            useGraphicsCapture: tQ(),
            useCaptureDeviceForEncode: !1,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: t$(),
            videoHookStaleFrameTimeoutMs: eZ,
            graphicsCaptureStaleFrameTimeoutMs: eF,
            hdrCaptureMode: f,
        },
        quality: i,
        applicationName: n,
    });
}
function rE(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((o = null), eX.setClipsSource(null));
}
function rb(e) {
    var t, n, r, i;
    let { settings: a } = e;
    if ((null == a ? void 0 : a.desktopSettings) != null) {
        let e = null,
            r = null,
            { sourceId: i, sound: o } = a.desktopSettings,
            s = null != (t = a.context) ? t : eA.Yn.DEFAULT,
            l =
                null != (n = a.qualityOptions)
                    ? n
                    : {
                          resolution: 720,
                          frameRate: 30,
                      },
            c = !1 === o ? null : eo.Z.getPidFromDesktopSource(i);
        el.isPlatformEmbedded &&
            !0 === o &&
            (({ soundshareId: e, soundshareSession: r } = ns(c)), null != e && nl(e, r)),
            tF(s),
            tV(s === eA.Yn.STREAM && te, {
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
        let e = null != (r = a.context) ? r : eA.Yn.DEFAULT,
            { videoDeviceGuid: t, audioDeviceGuid: n } = a.cameraSettings,
            o = e === eA.Yn.STREAM && te,
            s =
                null != (i = a.qualityOptions)
                    ? i
                    : {
                          resolution: 720,
                          frameRate: 30,
                      };
        tV(o, {
            cameraSource: {
                videoDeviceGuid: t,
                audioDeviceGuid: n,
            },
            quality: {
                resolution: s.resolution,
                frameRate: s.frameRate,
            },
        });
    } else tV(te, null);
}
function ry(e) {
    let { section: t } = e;
    return t === eO.oAB.VOICE && t6(), !1;
}
function rO() {
    return eX.eachConnection(tz), !1;
}
function rv(e) {
    let { enabled: t } = e;
    t4({ openH264: t }), eX.setH264Enabled(eW || tq()), eX.eachConnection((e) => e.setSoftwareH264(tq()));
}
function rI(e) {
    let { enabled: t } = e,
        n = t4({ aecDumpEnabled: t });
    eX.setAecDump(n.aecDumpEnabled);
}
function rS(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (eQ = Object.values(eA.Yn).reduce((e, n) => {
        let r = n,
            i = ez();
        return (e[r] = p().merge(i, t[r])), e;
    }, {})),
        y.K.set(eL, eQ),
        t5();
}
function rT(e) {
    let { state: t } = e,
        n = D.Z.isEnabled();
    if (t === eO.$7l.BACKGROUND && te && !n) (ts = !0), tV(!1);
    else {
        if (t !== eO.$7l.ACTIVE || !ts) return !1;
        (ts = !1), tV(!0);
    }
    return !0;
}
function rA(e) {
    eX.eachConnection((t) => t.setBitRate(e.bitrate));
}
function rC() {
    if ((!te && null == a) || null != eg.Z.getRTCConnectionId()) return !1;
    tV(!1, null);
}
function rN() {
    return !!tv && ((tv = !1), !0);
}
function rR(e) {
    eX.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function rP(e) {
    let { settings: t } = e;
    eX.applyMediaFilterSettings(t).finally(() => {
        (tI = !1), r.emitChange();
    });
}
function rw() {
    tI = !0;
}
function rD() {
    tI = !1;
}
function rL(e) {
    tD = e.enabled;
}
class rx extends (u = E.ZP.Store) {
    initialize() {
        tX(),
            t2(),
            rn(),
            nI(),
            (tP = {
                [eA.AN.VIDEO]: eX.supports(eA.AN.VIDEO),
                [eA.AN.DESKTOP_CAPTURE]: eX.supports(eA.AN.DESKTOP_CAPTURE),
                [eA.AN.HYBRID_VIDEO]: eX.supports(eA.AN.HYBRID_VIDEO),
            }),
            this.waitFor(e_.default, ep.Z, eh.Z, em.Z, A.Z, w.Z, eg.Z, L.ZP, en.Z, eb.default, ey.Z, ei.Z);
    }
    supports(e) {
        return eX.supports(e);
    }
    supportsInApp(e) {
        return tP[e] || eX.supports(e);
    }
    isSupported() {
        return eX.supported();
    }
    isExperimentalEncodersSupported() {
        return eX.supports(eA.AN.EXPERIMENTAL_ENCODERS);
    }
    isNoiseSuppressionSupported() {
        return eX.supports(eA.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return n9();
    }
    isNoiseCancellationError() {
        return tv;
    }
    isAutomaticGainControlSupported() {
        return eX.supports(eA.AN.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !t1() && (eX.supports(eA.AN.LEGACY_AUDIO_SUBSYSTEM) || eX.supports(eA.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return eX.supports(eA.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === eX.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return n9();
    }
    isAecDumpSupported() {
        return eX.supports(eA.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return eX.supports(eA.AN.VIDEO) && eX.supports(eA.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        return (
            (null == (e = em.Z.getChannel(tO)) ? void 0 : e.type) !== eO.d4z.GUILD_STAGE_VOICE &&
            eW &&
            H.Z.simulcastEnabled()
        );
    }
    getAecDump() {
        return tU().aecDumpEnabled;
    }
    getMediaEngine() {
        return eX;
    }
    getVideoComponent() {
        return eX.Video;
    }
    getCameraComponent() {
        return eX.Camera;
    }
    getKrispSuppressionLevel() {
        return null != l ? l : 100;
    }
    getKrispEnableStats() {
        return tm;
    }
    isEnabled() {
        return e$;
    }
    isMute() {
        return this.isSelfMute() || e5;
    }
    isDeaf() {
        return this.isSelfDeaf() || e9;
    }
    hasContext(e) {
        return null != eQ[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.Yn.DEFAULT;
        return e === eA.Yn.DEFAULT && e6;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.Yn.DEFAULT;
        return (
            !this.isEnabled() ||
            tU(e).mute ||
            !$.Z.didHavePermission(eI.Eu.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eA.Yn.DEFAULT && e7)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tr;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tr = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && eh.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return tD;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.Yn.DEFAULT;
        return !this.isSupported() || tU(e).deaf;
    }
    isVideoEnabled() {
        return te && tl;
    }
    isVideoAvailable() {
        return Object.values(e8).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.Yn.STREAM;
        return e1 === e && null != a;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.Yn.STREAM;
        return e1 === t && null != a && (null == (e = a.desktopSource) ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eA.Yn.DEFAULT;
        return e !== e_.default.getId() && (tU(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return eX.supports(eA.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eA.Yn.DEFAULT;
        return null != (t = tU(n).disabledLocalVideos[e]) && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eA.Yn.DEFAULT;
        return null != (t = tU(n).videoToggleStateMap[e]) ? t : eO.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eA.Yn.DEFAULT;
        return t === eA.Yn.DEFAULT && tC.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.Yn.DEFAULT;
        return e === eA.Yn.DEFAULT && tC.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tI;
    }
    isNativeAudioPermissionReady() {
        return tT;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return e1;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return e3;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eA.Yn.DEFAULT,
            n = tU(t).localPans[e];
        return null != n ? n : eB;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eA.Yn.DEFAULT,
            n = t === eA.Yn.STREAM ? eA.Yh : eA.Qx,
            r = tU(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return tU().inputVolume;
    }
    getOutputVolume() {
        return tU().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.Yn.DEFAULT;
        return tU(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.Yn.DEFAULT;
        return tU(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return tg;
    }
    getActiveVoiceFilterAppliedAt() {
        return tE;
    }
    getPreviousVoiceFilter() {
        return tb;
    }
    getPreviousVoiceFilterAppliedAt() {
        return ty;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return tU().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return tU().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            p().each(eQ, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === eO.pM4.PUSH_TO_TALK && eJ.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return ne(e2, tU().inputDeviceId);
    }
    getOutputDeviceId() {
        return ne(e4, tU().outputDeviceId);
    }
    getVideoDeviceId() {
        return ne(e8, tU().videoDeviceId);
    }
    getInputDevices() {
        return e2;
    }
    getOutputDevices() {
        return e4;
    }
    getVideoDevices() {
        return e8;
    }
    getEchoCancellation() {
        let e = tU();
        return eh.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return eX.supports(eA.AN.SIDECHAIN_COMPRESSION) && tU().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return tU().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return tU().h265Enabled;
    }
    getLoopback() {
        return tR.size > 0;
    }
    getLoopbackReasons() {
        return tR;
    }
    getNoiseSuppression() {
        let e = tU();
        return eh.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tU();
        return eh.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return tU().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return tU().noiseCancellation;
    }
    getExperimentalEncoders() {
        return tU().experimentalEncoders;
    }
    getHardwareEncoding() {
        return eW;
    }
    getEnableSilenceWarning() {
        return tU().silenceWarning;
    }
    getDebugLogging() {
        return eX.getDebugLogging();
    }
    getQoS() {
        return tU().qos;
    }
    getAttenuation() {
        return tU().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return tU().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return tU().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return t0() && tU().automaticAudioSubsystem ? eA.iA.AUTOMATIC : eX.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return eX.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return tU().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eT._.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.Yn.DEFAULT;
        return tU(e);
    }
    getState() {
        return {
            settingsByContext: eQ,
            inputDevices: e2,
            outputDevices: e4,
            appSupported: tP,
            krispModuleLoaded: tp,
            krispVersion: s,
            krispSuppressionLevel: l,
            goLiveSource: a,
            goLiveContext: e1,
        };
    }
    getInputDetected() {
        return tc;
    }
    getNoInputDetectedNotice() {
        return td;
    }
    getPacketDelay() {
        return el.isPlatformEmbedded || this.getMode() !== eO.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        eX.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return e0;
    }
    getVideoHook() {
        return tU().videoHook;
    }
    supportsVideoHook() {
        return eX.supports(eA.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tU().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return (
            eX.supports(eA.AN.EXPERIMENTAL_SOUNDSHARE) &&
            m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, ev.T6)
        );
    }
    supportsHookSoundshare() {
        return (
            (0, el.isWindows)() &&
            eX.supports(eA.AN.SOUNDSHARE) &&
            m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, ev.sA)
        );
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = tU().useSystemScreensharePicker,
            n = (0, el.isLinux)();
        return e && (null != t ? t : n);
    }
    supportsSystemScreensharePicker() {
        return eX.supports(eA.AN.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return tM;
    }
    getUseGamescopeCapture() {
        return tx;
    }
    getOpenH264() {
        return tU().openH264;
    }
    getEverSpeakingWhileMuted() {
        return ti;
    }
    getSpeakingWhileMuted() {
        return ta;
    }
    getKrispModelOverride() {
        return c;
    }
    getKrispModels() {
        return th;
    }
    getKrispVadActivationThreshold() {
        var e;
        return null != (e = tU().modeOptions.vadKrispActivationThreshold) ? e : eG;
    }
    hasActiveCallKitCall() {
        return tL;
    }
    setHasActiveCallKitCall(e) {
        tL = e;
    }
    supportsScreenSoundshare() {
        return (0, el.isMac)()
            ? eX.supports(eA.AN.SOUNDSHARE) &&
                  m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, ev.yG) &&
                  t$()
            : (0, el.isWindows)()
              ? eX.supports(eA.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, el.isLinux)() && eX.supports(eA.AN.SCREEN_SOUNDSHARE);
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.Yn.DEFAULT,
            t = this.supports(eA.AN.VIDEO)
                ? [
                      {
                          rid: "100",
                          type: e === eA.Yn.DEFAULT ? eA.Tr.VIDEO : eA.Tr.SCREEN,
                          quality: eA.y7,
                      },
                  ]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === eA.Yn.DEFAULT || this.goLiveSimulcastEnabled()) &&
                t.push({
                    rid: "50",
                    type: e === eA.Yn.DEFAULT ? eA.Tr.VIDEO : eA.Tr.SCREEN,
                    quality: eA.LD,
                }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: !1 };
        return (
            (0, el.isWeb)() &&
                (e.fetchDave = K.N.getCurrentConfig({
                    location: "MediaEngineStore fetchAsyncResources",
                }).loadWasmModule),
            eX.fetchAsyncResources(e)
        );
    }
    startDavePreload() {
        if (!tS && ((tS = !0), (0, el.isWeb)())) {
            let e = { fetchDave: !0 };
            eX.fetchAsyncResources(e).catch((e) => {
                eD.warn("DAVE preload failed:", e), eu.Z.captureException(e);
            });
        }
    }
    getSupportedSecureFramesProtocolVersion() {
        if ((0, el.isWeb)()) {
            let { useWasmModule: e } = K.N.getCurrentConfig({
                location: "MediaEngineStore getSupportedSecureFramesProtocolVersion",
            });
            if (!e) return 0;
        }
        let e = eX.getSupportedSecureFramesProtocolVersion(),
            t = K.m.getCurrentConfig({ location: "MediaEngineStore" });
        return 114 === e && (e = 1), t.canSupportDaveProtocol && e >= t.protocolVersionFloor ? e : 0;
    }
    hasClipsSource() {
        return null != o;
    }
    getGpuBrand() {
        return tw;
    }
}
function rM(e) {
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
eN(rx, "displayName", "MediaEngineStore");
let rk = (r = new rx(v.Z, {
    VOICE_CHANNEL_SELECT: rd,
    VOICE_STATE_UPDATES: np,
    CONNECTION_OPEN: nc,
    CONNECTION_CLOSED: nd,
    POST_CONNECTION_OPEN: nf,
    RTC_CONNECTION_STATE: n_,
    AUDIO_SET_TEMPORARY_SELF_MUTE: nh,
    AUDIO_TOGGLE_SELF_MUTE: nm,
    AUDIO_SET_SELF_MUTE: ng,
    AUDIO_TOGGLE_SELF_DEAF: nb,
    AUDIO_TOGGLE_LOCAL_MUTE: ny,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: nO,
    AUDIO_SET_LOCAL_VOLUME: nS,
    AUDIO_SET_LOCAL_PAN: nT,
    AUDIO_SET_MODE: nA,
    AUDIO_SET_INPUT_VOLUME: nC,
    AUDIO_SET_OUTPUT_VOLUME: nN,
    AUDIO_SET_INPUT_DEVICE: nR,
    AUDIO_SET_OUTPUT_DEVICE: nP,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: nD,
    AUDIO_SET_ECHO_CANCELLATION: nj,
    AUDIO_SET_SIDECHAIN_COMPRESSION: nU,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nG,
    AUDIO_SET_LOOPBACK: nZ,
    AUDIO_SET_NOISE_SUPPRESSION: nY,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nW,
    AUDIO_SET_NOISE_CANCELLATION: nK,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: nz,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: nQ,
    AUDIO_SET_DEBUG_LOGGING: nJ,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: n$,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: nq,
    MEDIA_ENGINE_SET_VIDEO_HOOK: n0,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: n1,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: n3,
    AUDIO_SET_ATTENUATION: n2,
    AUDIO_SET_QOS: n4,
    MEDIA_ENGINE_DEVICES: nx,
    AUDIO_VOLUME_CHANGE: nM,
    AUDIO_RESET: n8,
    AUDIO_INPUT_DETECTED: n5,
    AUDIO_SET_SUBSYSTEM: rl,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rs,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rh,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rm,
    MEDIA_ENGINE_PERMISSION: rp,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rb,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nw,
    MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nX,
    MEDIA_ENGINE_INTERACTION_REQUIRED: nL,
    USER_SETTINGS_MODAL_INIT: ry,
    USER_SETTINGS_MODAL_SET_SECTION: ry,
    CERTIFIED_DEVICES_SET: rO,
    RPC_APP_CONNECTED: rf,
    RPC_APP_DISCONNECTED: r_,
    OVERLAY_INITIALIZE: nu,
    MEDIA_ENGINE_SET_OPEN_H264: rv,
    APP_STATE_UPDATE: rT,
    SET_CHANNEL_BITRATE: rA,
    SET_VAD_PERMISSION: n6,
    SET_NATIVE_PERMISSION: n7,
    SET_CHANNEL_VIDEO_QUALITY_MODE: rR,
    MEDIA_ENGINE_SET_AEC_DUMP: rI,
    MEDIA_ENGINE_RESET_SETTINGS: rS,
    CHANNEL_DELETE: rC,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rN,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rP,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rw,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rD,
    USER_SETTINGS_PROTO_UPDATE: nE,
    CLIPS_INIT: rg,
    CLIPS_SETTINGS_UPDATE: rE,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rL,
    VOICE_FILTER_REQUEST_SWITCH: ri,
    VOICE_FILTER_LOOPBACK_TOGGLE: rr,
    VOICE_FILTER_APPLIED: ro,
    VOICE_FILTER_DOWNLOAD_FAILED: ra,
    VOICE_FILTER_APPLY_FAILED: ra,
}));
