let r, i, a, o, s, l, c;
n.d(t, { Z: () => rj }), n(388685), n(953529), n(457542), n(539854), n(642613), n(49124), n(337869);
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
    K = n(947851),
    z = n(529558),
    q = n(705946),
    X = n(441167),
    Q = n(787517),
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
    eT = n(526761),
    eS = n(345655),
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
    eW = 0;
function eK() {
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
        videoHook: eq.supports(eA.AN.VIDEO_HOOK),
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
let ez = {
        [eS._.CUSTOM]: {},
        [eS._.VOICE_ISOLATION]: {
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
        [eS._.STUDIO]: {
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
    eq = (0, b.Mt)((0, b.jj)());
eD.enableNativeLogger(!0);
let eX = {},
    eQ = new Set([eA.Yn.DEFAULT]),
    eJ = eq.supports(eA.AN.AUTO_ENABLE),
    e$ = !1,
    e0 = eA.Yn.STREAM,
    e1 = performance.now(),
    e2 = { [eA.w5]: t7("No Input Devices") },
    e3 = { [eA.w5]: t7("No Output Devices") },
    e4 = { [eA.w5]: t7("No Video Devices") },
    e8 = !1,
    e5 = !1,
    e6 = !1,
    e7 = !1,
    e9 = !1,
    te = eA.Av,
    tt = eA.Av,
    tn = !1,
    tr = !1,
    ti = !1,
    ta = new O.V7(),
    to = !1,
    ts = !1,
    tl = null,
    tc = !1,
    tu = !1,
    td = !1,
    tf = !1,
    t_ = !1,
    tp = [],
    th = !1,
    tm = null,
    tg = null,
    tE = null,
    tb = null,
    ty = null,
    tO = !1,
    tv = !1,
    tI = !1,
    tT = !1;
$.Z.hasPermission(eI.Eu.AUDIO, { showAuthorizationError: !1 }),
    $.Z.hasPermission(eI.Eu.CAMERA, { showAuthorizationError: !1 });
let tS = !1,
    tA = new Set(),
    tC = tS,
    tN = new Set(),
    tR = {},
    tP = null,
    tw = !0,
    tD = !1,
    tL = !1,
    tx = !1;
function tM() {
    var e, t;
    return null != (t = null == (e = eb.default.getCurrentUser()) ? void 0 : e.isStaff()) && t
        ? "always"
        : ec.Z === g.R.CANARY
          ? "permittedDevicesOnly"
          : "never";
}
function tk() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.Yn.DEFAULT,
        t = eX[e];
    return null == t && ((t = eK()), (eX[e] = t)), t;
}
function tj() {
    var e, t, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.Yn.DEFAULT,
        i = tk(r),
        a = ez[null != (e = i.activeInputProfile) ? e : eS._.CUSTOM],
        o = eR({}, null != (t = i.modeOptions) ? t : {}, null != (n = a.modeOptions) ? n : {});
    if (
        (null == o.vadDuringPreProcess && (o.vadDuringPreProcess = (0, q.C)({ location: "getSettings" }).enabled),
        (null == o.vadKrispActivationThreshold && !0 === a.automaticGainControl) || !0 === i.automaticGainControl)
    ) {
        let e = (0, M.U)({ location: "getSettings" });
        null != e.vadKrispActivationThreshold && (o.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return ew(eR({}, i, a), { modeOptions: o });
}
function tU(e) {
    var t, n;
    let r = tj(e.context);
    e.setInputMode(r.mode, {
        vadThreshold: r.modeOptions.threshold,
        vadAutoThreshold: r.modeOptions.autoThreshold,
        vadUseKrisp: r.modeOptions.vadUseKrisp && re(),
        vadKrispActivationThreshold: null != (t = r.modeOptions.vadKrispActivationThreshold) ? t : eG,
        vadLeading: r.modeOptions.vadLeading,
        vadTrailing: r.modeOptions.vadTrailing,
        vadDuringPreProcess: null != (n = r.modeOptions.vadDuringPreProcess) && n,
        pttReleaseDelay: Math.round(r.modeOptions.delay),
    });
}
function tG(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eA.Qx;
    return p().clamp(e, 0, t);
}
function tB(e) {
    let t = tj(e.context),
        n = !eJ || t.mute || t.deaf;
    e.context === eA.Yn.DEFAULT
        ? (n = n || e8 || e5 || e6 || !$.Z.didHavePermission(eI.Eu.AUDIO))
        : e.context === eA.Yn.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eA.Yn.DEFAULT && S.Z.updateNativeMute();
}
function tZ(e) {
    e !== e0 && (null != a && eq.setGoLiveSource(null, e0), (e0 = e));
}
function tF() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e9,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        s = a;
    if (
        ((null == s ? void 0 : s.desktopSource) != null &&
            s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? void 0 : e.id) &&
            (null != s.desktopSource.soundshareId && (0, el.isWindows)() && T.pn(s.desktopSource.soundshareId),
            eq.setGoLiveSource(null, e0)),
        (null == s ? void 0 : s.cameraSource) != null &&
            (s.cameraSource.videoDeviceGuid !==
                (null == o || null == (t = o.cameraSource) ? void 0 : t.videoDeviceGuid) ||
                s.cameraSource.audioDeviceGuid !==
                    (null == o || null == (n = o.cameraSource) ? void 0 : n.audioDeviceGuid)) &&
            eq.setGoLiveSource(null, e0),
        e9 || i)
    ) {
        let e = tj().videoDeviceId;
        e9 && e === eA.w5 && tt === eA.w5 && te !== eA.Av ? (e = te) : (tt = e),
            (te = (e9 = i) ? ne(e4, e) : eA.Av),
            eq.setVideoInputDevice(te);
    }
    if (((a = o), null != o)) {
        let e = {
            resolution: o.quality.resolution,
            frameRate: o.quality.frameRate,
        };
        if (null != o.desktopSource) {
            let t = tM(),
                n = tj().videoHook,
                i = tQ(),
                a = i
                    ? tJ() && Q.G.getCurrentConfig({ location: "MediaEngineStore_updateVideo" }).enabled
                        ? ev.zj
                        : ev.ZM
                    : 0;
            eq.setGoLiveSource(
                {
                    desktopDescription: {
                        id: o.desktopSource.id,
                        soundshareId: o.desktopSource.soundshareId,
                        useVideoHook: n,
                        useGraphicsCapture: i,
                        useGraphicsCaptureApiLevel: a,
                        useLoopback: r.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: t$(),
                        videoHookStaleFrameTimeoutMs: eZ,
                        graphicsCaptureStaleFrameTimeoutMs: eF,
                        hdrCaptureMode: t,
                    },
                    quality: e,
                },
                e0,
            );
        }
        null != o.cameraSource &&
            eq.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: o.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                e0,
            );
    }
}
function tV(e) {
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
function tH(e) {
    let t = (0, M.U)({
        location: "getAutomaticGainControlConfig",
        disable: !e,
    }).noiseCancellationConfig;
    return eR({ enabled: e }, t);
}
function tY(e, t) {
    e.setAutomaticGainControl(tH(t));
}
async function tW(e, t) {
    if ((0, el.isIOS)() || (0, el.isMac)()) {
        let e = await eq.getSystemMicrophoneMode();
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
function tK(e) {
    let t = tj(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eh.Z.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eh.Z.hasNoiseSuppression(n) || t.noiseSuppression),
        tY(e, eh.Z.hasAutomaticGainControl(n) || t.automaticGainControl),
        tW(e, t.noiseCancellation),
        e.setVoiceFilterId(tm),
        (0, el.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function tz() {
    var e;
    return !(0, W.f)("MediaEngine").enabled && (null == (e = tj().openH264) || e);
}
function tq() {
    var e;
    return !!(0, K.m)("MediaEngineStore") || null == (e = tj().hardwareEncoding) || e;
}
function tX() {
    eq.on(b.aB.Connection, (e) => {
        tU(e), tB(e), tK(e);
        let t = tj();
        e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
            e.setQoS(t.qos),
            e.setExperimentalEncoders(t.experimentalEncoders),
            e.setHardwareH264(tq()),
            e.setSoftwareH264(tz());
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
            let t = nn(e3);
            e.setSoundshareDiscardRearChannels(t);
            let { simulcastEnabled: n, lqStreamBitrate: r } = H.Z.getConfig();
            e.configureGoLiveSimulcast(n, r);
        }
        if (
            ((0, el.isWindows)()
                ? (null == tP ? void 0 : tP.startsWith("NVIDIA")) || (null == tP ? void 0 : tP.startsWith("AMD"))
                    ? e.setExperimentFlag(eA.V8.SIGNAL_AV1, !0)
                    : e.setExperimentFlag(eA.V8.SIGNAL_AV1_DECODE, !0)
                : ((0, el.isMac)() || (0, el.isLinux)()) && e.setExperimentFlag(eA.V8.SIGNAL_AV1_DECODE, !0),
            (0, el.isWindows)() && e.setExperimentFlag(eA.V8.SIGNAL_AV1_HARDWARE_DECODE, !0),
            (0, el.isWeb)())
        ) {
            let { enabled: t } = (0, F.A)("MediaEngineStore");
            e.setExperimentFlag(eA.V8.BROWSER_HEVC, t);
        }
        if ((eq.setHasFullbandPerformance((0, R.Z)()), e.setRemoteAudioHistory(1000), (0, C.Z)(r))) {
            let t = A.Z.getSettings();
            e.setExperimentFlag(eA.V8.STREAMER_CLIP, t.clipsEnabled);
            let { enableViewerClipping: n } = X.Z.getCurrentConfig(
                { location: "f627ab_15" },
                { autoTrackExposure: !1 },
            );
            e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eA.ux);
        }
        for (let n of ((t = tj(e.context)), e.setPostponeDecodeLevel(eH), Object.keys(t.localMutes)))
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
                ((tr = !1),
                (ti = !1),
                e.on(b.Sh.SpeakingWhileMuted, () => {
                    (tr = !0),
                        (ti = !0),
                        r.emitChange(),
                        ta.stop(),
                        ta.start(eY, () => {
                            (ti = !1), r.emitChange();
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
                        underlyingError: tV(e),
                    }),
                    (tO = !0),
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
                        underlyingError: tV(e),
                    }),
                    ea.default.track(eO.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    v.Z.dispatch({
                        type: "AUDIO_SET_MODE",
                        context: eA.Yn.DEFAULT,
                        mode: eO.pM4.VOICE_ACTIVITY,
                        options: ew(eR({}, tj(eA.Yn.DEFAULT).modeOptions), { vadUseKrisp: !1 }),
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
            e.applyVideoQualityMode(ey.Z.mode);
    }),
        eq.on(b.aB.DeviceChange, (e, t, n) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_DEVICES",
                inputDevices: e,
                outputDevices: t,
                videoDevices: n,
            });
        }),
        eq.on(b.aB.VolumeChange, (e, t) => {
            v.Z.dispatch({
                type: "AUDIO_VOLUME_CHANGE",
                inputVolume: e,
                outputVolume: t,
            });
        }),
        eq.on(b.aB.DesktopSourceEnd, (e, t) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                settings: null,
                endReason: e,
                errorCode: t,
            });
        }),
        eq.on(b.aB.AudioPermission, (e) => {
            (tT = !0),
                v.Z.dispatch({
                    type: "MEDIA_ENGINE_PERMISSION",
                    kind: "audio",
                    granted: e,
                });
        }),
        eq.on(b.aB.VideoPermission, (e) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_PERMISSION",
                kind: "video",
                granted: e,
            });
        }),
        eq.on(b.aB.WatchdogTimeout, async () => {
            let e;
            try {
                await eo.Z.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
            } catch (t) {
                "number" == typeof t.status && (e = t.status);
            }
            eD.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)),
                ea.default.track(eO.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        eq.on(b.aB.VideoInputInitialized, (e) => {
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
        eq.on(b.aB.AudioInputInitialized, (e) => {
            ea.default.track(eO.rMx.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * es.Z.Millis.SECOND),
                rtc_connection_id: eg.Z.getRTCConnectionId(),
            });
        }),
        eq.on(b.aB.ClipsRecordingRestartNeeded, () => {
            v.Z.dispatch({ type: "CLIPS_RESTART" });
        }),
        eq.on(b.aB.ClipsInitFailure, (e, t) => {
            v.Z.wait(() => {
                v.Z.dispatch({
                    type: "CLIPS_INIT_FAILURE",
                    errMsg: e,
                    applicationName: t,
                });
            });
        }),
        eq.on(b.aB.ClipsRecordingEnded, (e, t) => {
            var n, r;
            (null == o || null == (n = o.desktopSource) ? void 0 : n.id) === e &&
                (null != t && (null == a || null == (r = a.desktopSource) ? void 0 : r.soundshareId) !== t && T.pn(t),
                (o = null));
        }),
        eq.on(b.aB.NativeScreenSharePickerUpdate, (e, t) => {
            v.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE",
                existing: e,
                content: t,
            });
        }),
        eq.on(b.aB.NativeScreenSharePickerCancel, (e) => {
            v.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL",
                existing: e,
            });
        }),
        eq.on(b.aB.NativeScreenSharePickerError, (e) => {
            v.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_ERROR",
                error: e,
            });
        }),
        eq.on(b.aB.AudioDeviceModuleError, (e, t, n) => {
            ea.default.track(eO.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                audio_device_module: e,
                code: t,
                device_name: n,
            });
        }),
        eq.on(b.aB.VideoCodecError, (e) => {
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
        eq.on(b.aB.ConnectionStats, (e) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_CONNECTION_STATS",
                connectionStats: e.map((e) => {
                    let { stats: t, connection: n } = e;
                    return {
                        stats: t,
                        mediaEngineConnectionId: n.mediaEngineConnectionId,
                        version: eW++,
                        context: n.context,
                    };
                }),
            });
        }),
        eq.on(b.aB.VoiceQueueMetrics, (e) => {
            let t = rk(e);
            null !== t && ea.default.track(eO.rMx.VOICE_QUEUE_METRICS, t);
        }),
        eq.setOnVideoContainerResized((e, t, n) => {
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
        t2.reset(),
        (0, eE.q)().then((e) => {
            null != e && (tP = e.gpu_brand);
        }),
        eq.on(b.aB.SystemMicrophoneModeChange, (e) => {
            eq.eachConnection(tK);
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
        eq.supports(eA.AN.SCREEN_CAPTURE_KIT) &&
        m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, ev.C7)
    );
}
function t0() {
    return (
        (0, el.isWindows)() &&
        eq.supports(eA.AN.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        eq.supports(eA.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function t1() {
    return eq.supports(eA.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
let t2 = new (class {
    start() {
        this.started || ((this.started = !0), eq.on(b.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout &&
                (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            eq.removeListener(b.aB.Silence, this.handleSilence),
            v.Z.dispatch({
                type: "AUDIO_INPUT_DETECTED",
                inputDetected: null,
            }));
    }
    update() {
        let e = tj();
        !tc && eg.Z.getState() === eO.hes.RTC_CONNECTED && e.mode === eO.pM4.VOICE_ACTIVITY && e.silenceWarning
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
                                    e && (tu = !0));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout,
                    ));
            });
    }
})();
function t3() {
    var e;
    let t = y.K.get("audio");
    null != t && (y.K.set(eL, { [eA.Yn.DEFAULT]: t }), y.K.remove("audio")),
        (eX = null != (e = y.K.get(eL)) ? e : {}),
        p().each(eX, (e) => {
            if (
                (p().defaultsDeep(e, eK()),
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
            eq.supports(eA.AN.SIDECHAIN_COMPRESSION) &&
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
        r = tk(t);
    return Object.assign(r, e), !__OVERLAY__ && n && y.K.set(eL, eX), r;
}
function t8() {
    y.K.remove(eL), location.reload();
}
function t5() {
    let e = tj();
    eq.setAudioInputDevice(e.inputDeviceId),
        eq.setAudioOutputDevice(e.outputDeviceId),
        tF(),
        eq.setInputVolume(e.inputVolume),
        eq.setOutputVolume(e.outputVolume),
        eq.setH264Enabled(tq() || tz()),
        eq.setAv1Enabled(tq()),
        eq.setH265Enabled(tq()),
        eq.setAecDump(e.aecDumpEnabled),
        eq.setSidechainCompression(e.sidechainCompression),
        eq.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        eq.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing);
}
function t6() {
    eJ ||
        eq.enable().then(() =>
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
        let e = tj(),
            t = ne(e2, e.inputDeviceId);
        eq.setAudioInputDevice(t);
    }
}
function nn(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nr(e) {
    eq.eachConnection((t) => {
        t.context === eA.Yn.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function ni(e) {
    let t = e3;
    if (((e3 = t9(e, eC.intl.string(eC.t.xlUg0t))), !p().isEqual(e3, t))) {
        let e = tj(),
            n = ne(e3, e.outputDeviceId);
        eq.setAudioOutputDevice(n);
        let r = nn(t),
            i = nn(e3);
        r !== i && nr(i);
    }
}
function na(e) {
    ts = e.length > 0;
    let t = e4;
    if (((e4 = t9(e, eC.intl.string(eC.t.WKWARU))), e9 && !p().isEqual(e4, t))) {
        var n;
        let e = void 0 !== e4[te],
            r = te === eA.w5 && (null == (n = t[eA.w5]) ? void 0 : n.disabled);
        tF(e || r);
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
        let i = e === eT.u0.USER ? eA.Yn.DEFAULT : eA.Yn.STREAM,
            a = i === eA.Yn.STREAM ? eA.Yh : eA.Qx,
            o = null != (t = r[e]) ? t : {},
            { localMutes: s, localVolumes: l } = tj(i);
        for (let [e, t] of Object.entries(o))
            null == (0, et.Ky)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== a ? (l[e] = t.volume) : delete l[e],
                eq.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (n)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == o[e] &&
                    (delete s[e],
                    delete l[e],
                    eq.eachConnection((t) => {
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
        T.YT(e, { soundshare_session: t }).then((t) => {
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
    (i = e.sessionId), (e8 = !1), (e7 = !1);
    let t = tj();
    if (
        (t0() && (t1() ? ru(eA.iA.AUTOMATIC) : t.automaticAudioSubsystem && rd()),
        eq.supports(eA.AN.OFFLOAD_ADM_CONTROLS))
    ) {
        let e = !1;
        (0, el.isDesktop)()
            ? (e = (0, j.E)({ location: "handleConnectionOpen" }).enabled)
            : ((0, el.isIOS)() || (0, el.isAndroid)()) && (e = (0, U.W)({ location: "handleConnectionOpen" }).enabled),
            eq.setOffloadAdmControls(e);
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
        eq.setAsyncVideoInputDeviceInit((0, G.p)("handleConnectionOpen").enabled),
        no();
}
function nu(e) {
    let { mediaEngineState: t } = e;
    (eX = t.settingsByContext),
        (e2 = t.inputDevices),
        (e3 = t.outputDevices),
        (tR = t.appSupported),
        (t_ = t.krispModuleLoaded),
        (s = t.krispVersion),
        (e0 = t.goLiveContext);
}
function nd() {
    i = null;
}
function nf() {
    if ((0, el.isWeb)()) {
        let e = z.N.getCurrentConfig({ location: "MediaEngineStore handlePostConnectionOpen" });
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
            (tc = !1), (tu = !1);
            break;
        case eO.hes.RTC_CONNECTED:
            tF();
            break;
        case eO.hes.DISCONNECTED:
            nv(), nI();
    }
    t2.update();
}
function np(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (e8 = t.mute || t.suppress), (e7 = t.deaf), eq.eachConnection(tB);
            let e = null != t.guildId && null != t.channelId && null != ty && ty !== t.channelId,
                n = !td && null == t.channelId;
            return tF(!e && !n && e9), (ty = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== e_.default.getId() || null != eg.Z.getChannelId() || tF(!1, null), e;
    }, !1);
}
function nh(e) {
    let { mute: t } = e;
    (e5 = t), eq.eachConnection(tB);
}
function nm(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = tj(t);
    if (t === eA.Yn.DEFAULT && ($.Z.requestPermission(eI.Eu.AUDIO), e6)) return !1;
    (r = !i && !r) || (i = !1),
        n || (tn = !0),
        t4(
            {
                mute: r,
                deaf: i,
            },
            t,
        ),
        eq.eachConnection(tB);
}
function ng(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    t4({ mute: n }, t), r || (tn = !0), eq.eachConnection(tB);
}
function nE(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== eT.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    no(!0);
}
function nb(e) {
    let { context: t } = e;
    t4({ deaf: !tj(t).deaf }, t), eq.eachConnection(tB);
}
function ny(e) {
    let { context: t, userId: n } = e;
    if (n === e_.default.getId()) return;
    let { localMutes: r } = tj(t);
    r[n] ? delete r[n] : (r[n] = !0),
        t4({ localMutes: r }, t),
        eq.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nO(e) {
    var t, n, r, i, a, o, s;
    let { context: l, userId: c, videoToggleState: u, persist: d, isAutomatic: _ } = e;
    f()(!(d && _), "These are not allowed to both be true.");
    let p = u === eO.ZUi.DISABLED,
        { disabledLocalVideos: h } = tj(l),
        m = null != (t = h[c]) && t,
        g = tA.has(c),
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
    let { videoToggleStateMap: I } = tj(l);
    if (
        (I[c] === eO.ZUi.AUTO_PROBING &&
            u === eO.ZUi.AUTO_ENABLED &&
            (0, J.Z)(c, p ? eA.fC.AUTO_DISABLE : eA.fC.AUTO_ENABLE, E),
        (I[c] = u),
        t4({ videoToggleStateMap: I }, l, d),
        u === eO.ZUi.AUTO_PROBING
            ? null == (n = eg.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, !0)
            : null == (r = eg.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, !1),
        tC ||
            (eD.info("isAutoDisableAllowed=".concat(tC, " - disabling VideoHealthManager")),
            null == (a = eg.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()),
        O)
    ) {
        if ((!p && !g) || (p && !tC)) return;
        (0, J.Z)(c, p ? eA.fC.AUTO_DISABLE : eA.fC.AUTO_ENABLE, E), p ? tA.add(c) : tA.delete(c);
    } else
        v &&
            (g && !p
                ? (eD.info("disallowing auto-disable for this session because of manual override by user"),
                  (tC = !1),
                  null == (s = eg.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(),
                  (0, J.Z)(c, eA.fC.MANUAL_REENABLE, E))
                : (0, J.Z)(c, p ? eA.fC.MANUAL_DISABLE : eA.fC.MANUAL_ENABLE, E));
    y && !p && tA.delete(c),
        p ? (h[c] = !0) : delete h[c],
        t4({ disabledLocalVideos: h }, l, d),
        eq.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(c, null != (t = h[c]) && t);
        }, l);
}
function nv() {
    if (0 === tA.size) return;
    let e = eA.Yn.DEFAULT,
        { disabledLocalVideos: t } = tj(e);
    tA.forEach((n) => {
        f()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            eq.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tA.clear(),
        t4({ disabledLocalVideos: t }, e, !1);
}
function nI() {
    let e = eA.Yn.DEFAULT,
        { videoToggleStateMap: t } = tj(e);
    for (let [e, n] of Object.entries(t)) n === eO.ZUi.AUTO_PROBING && delete t[e];
    t4({ videoToggleStateMap: t }, e, !1);
}
function nT(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === e_.default.getId()) return;
    let i = t === eA.Yn.STREAM ? eA.Yh : eA.Qx,
        { localVolumes: a } = tj(t);
    r === i ? delete a[n] : (a[n] = r), t4({ localVolumes: a }, t), eq.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function nS(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: a } = tj(t);
    (a[n] = {
        left: r,
        right: i,
    }),
        t4({ localPans: a }, t),
        eq.eachConnection((e) => e.setLocalPan(n, r, i), t);
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
        eq.eachConnection(tU),
        t2.update();
}
function nC(e) {
    let { volume: t } = e;
    t4({ inputVolume: tG(t) }), eq.setInputVolume(t);
}
function nN(e) {
    let { volume: t } = e;
    t4({ outputVolume: t }), eq.setOutputVolume(t);
}
function nR(e) {
    let { id: t } = e;
    (t = ne(e2, t)), (e1 = performance.now()), t4({ inputDeviceId: t }), eq.setAudioInputDevice(t);
}
function nP(e) {
    let { id: t } = e;
    t4({ outputDeviceId: (t = ne(e3, t)) }), eq.setAudioOutputDevice(t);
}
function nw(e) {
    let { id: t } = e;
    t4({ videoDeviceId: (t = ne(e4, t)) }), tF();
}
function nD(e) {
    let { inputProfile: t } = e;
    t4({ activeInputProfile: t });
    let n = tj();
    eq.eachConnection((e) => {
        tU(e),
            tY(e, n.automaticGainControl),
            e.setEchoCancellation(n.echoCancellation),
            e.setExperimentalEncoders(n.experimentalEncoders),
            tW(e, n.noiseCancellation),
            e.setNoiseSuppression(n.noiseSuppression);
    }),
        eq.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        t2.update(),
        nV();
}
function nL(e) {
    return e$ !== e.required && ((e$ = e.required), e.required || eq.interact(), !0);
}
function nx(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    nt(t), ni(n), na(r);
}
function nM(e) {
    let { inputVolume: t, outputVolume: n } = e;
    t4({
        inputVolume: tG(t),
        outputVolume: n,
    });
}
function nk(e) {
    var t;
    let n = tj(),
        r = eq.getAudioSubsystem(),
        i = eq.getAudioLayer(),
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
    eq.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nV(), nk(e.location);
}
function nU(e) {
    nB(e.enabled);
}
function nG(e) {
    let t = t4({ sidechainCompressionStrength: e.strength });
    eq.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function nB(e) {
    let t = t4({ sidechainCompression: e });
    eq.setSidechainCompression(t.sidechainCompression);
}
function nZ(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tN.add(n) : tN.delete(n), nF(), nV();
}
function nF() {
    let e = !tN.has("voice_filter_preview") && !tN.has("mic_test");
    eq.setMaybePreprocessMute(e);
}
function nV() {
    let e = tj(),
        t = tN.size > 0,
        n = e.inputDeviceId,
        r = eh.Z.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        a = eh.Z.hasNoiseSuppression(n) || e.noiseSuppression,
        o = tH(eh.Z.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation,
        l = null !== tm,
        c = tN.has("voice_filter") && 1 === tN.size;
    eq.setLoopback(t, {
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
    if (!eq.supports(eA.AN.VAAPI)) return;
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
    (tx = a), a && eq.supports(eA.AN.GAMESCOPE_CAPTURE) && (tL = !0);
}
function nY(e) {
    let t = t4({ noiseSuppression: e.enabled });
    eq.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nV(), nk(e.location);
}
function nW(e) {
    let t = t4({ automaticGainControl: e.enabled });
    eq.eachConnection((e) => tY(e, t.automaticGainControl)), nV(), nk(e.location);
}
function nK(e) {
    let t = t4({ noiseCancellation: e.enabled });
    eq.eachConnection((e) => tW(e, t.noiseCancellation)), nV(), nk(e.location);
}
function nz(e) {
    ee.Z.setKrispModelOverride(e.model), (c = e.model), nV();
}
function nq(e) {
    var t;
    (0, el.isWeb)() || ((th = e.enabled), null == (t = eq.setNoiseCancellationEnableStats) || t.call(eq, e.enabled));
}
function nX(e) {
    let t = t4({ experimentalEncoders: e.enabled });
    eq.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
}
function nQ(e) {
    let { enabled: t } = e;
    t4({ hardwareEncoding: t });
    let n = tq();
    eq.eachConnection((e) => e.setHardwareH264(n)),
        eq.setH264Enabled(n || tz()),
        eq.setAv1Enabled(n),
        eq.setH265Enabled(n);
}
function nJ(e) {
    t4({ silenceWarning: e.enabled }), t2.update();
}
function n$(e) {
    eq.setDebugLogging(e.enabled);
}
function n0(e) {
    let { level: t } = e;
    (l = t), ee.Z.setKrispSuppressionLevel(t);
}
function n1(e) {
    t4({ videoHook: e.enabled });
}
function n2(e) {
    t4({ experimentalSoundshare2: e.enabled });
}
function n3(e) {
    let { enabled: t } = e;
    t4({ useSystemScreensharePicker: t });
}
function n4(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = t4({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r,
        });
    eq.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function n8(e) {
    let { enabled: t } = e;
    t4({ qos: t }), eq.eachConnection((e) => e.setQoS(t));
}
function n5() {
    t8();
}
function n6(e) {
    let { inputDetected: t } = e;
    (tl = t), !tc && tl && ((tc = !0), t2.update());
}
function n7(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === e6) return !1;
    (e6 = n), eq.eachConnection(tB);
}
function n9(e) {
    let { state: t, permissionType: n } = e,
        r = t === eI.PQ.ACCEPTED;
    switch (n) {
        case eI.Eu.AUDIO:
            (tT = !0), eq.eachConnection(tB);
            break;
        case eI.Eu.CAMERA:
            !r && e9 && tF(!1);
            break;
        default:
            return !1;
    }
}
function re() {
    return t_ || !1;
}
async function rt() {
    try {
        var e, t, n, i;
        await ed.ZP.ensureModule("discord_krisp");
        let a = ed.ZP.requireModule("discord_krisp");
        (t_ = !0),
            (s = null == (e = a.getSdkVersion) ? void 0 : e.call(a)),
            (l = null != (i = null == (t = a.getSuppressionLevel) ? void 0 : t.call(a)) ? i : 100),
            null == (n = a.getNcModels) ||
                n.call(a).then((e) => {
                    (tp = e), r.emitChange();
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
        tf = !1;
    }
}
function rn() {
    return (0, el.isWindows)() || (0, el.isLinux)() || (0, el.isMac)();
}
function rr() {
    !rn() || __OVERLAY__ || tf || t_
        ? (0, el.isWeb)() && eq.supports(eA.AN.NOISE_CANCELLATION)
            ? ((t_ = !0), r.emitChange())
            : (0, el.isWeb)() && t4({ noiseCancellation: !1 })
        : ((tf = !0), rt());
}
function ri(e) {
    let { enabled: t } = e;
    ea.default.track(eO.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != tm ? tm : null,
        enabled: t,
    }),
        t4({ voiceFilterPlaybackEnabled: t });
}
function ra(e) {
    let { newVoiceFilterId: t } = e;
    t4({ mostRecentlyRequestedVoiceFilter: t }), eq.eachConnection((e) => e.setVoiceFilterId(t));
}
function ro() {
    t4({ mostRecentlyRequestedVoiceFilter: null });
}
function rs(e) {
    let { voiceFilterId: t } = e;
    (tE = tm), (tb = tg), (tm = t), (tg = null === t ? null : Date.now());
}
function rl(e) {
    let t = e.bypassEnabled;
    t4({ bypassSystemInputProcessing: t }), eq.setAudioInputBypassSystemProcessing(t), nk(e.location);
}
function rc(e) {
    ru(e.subsystem);
}
function ru(e) {
    e === eA.iA.AUTOMATIC
        ? (t4({ automaticAudioSubsystem: !0 }), rd())
        : (t4({ automaticAudioSubsystem: !1 }), eq.setAudioSubsystem(e));
}
function rd() {
    eq.queueAudioSubsystem(eA.iA.EXPERIMENTAL);
}
function rf(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && tF(i, null), null != t || null == n)) {
        td = !1;
        return;
    }
    if (td) return;
    td = !0;
    let a = tj();
    (a.mute || a.deaf) &&
        (t4({
            deaf: !1,
            mute: !1,
        }),
        eq.eachConnection(tB));
}
function r_(e) {
    let { application: t } = e;
    eQ.add(t.id);
}
function rp(e) {
    let { application: t } = e;
    eQ.delete(t.id);
}
function rh(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (eJ = !1), eq.eachConnection(tB);
                break;
            case "video":
                tF(!1);
        }
}
function rm(e) {
    (eJ = e.enabled),
        e.unmute &&
            t4({
                mute: !1,
                deaf: !1,
            }),
        eq.eachConnection(tB);
}
function rg(e) {
    let { enabled: t } = e;
    $.Z.requestPermission(eI.Eu.CAMERA), tF(t);
}
function rE(e) {
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
        (eq.setClipsSource(null),
        (0, el.isWindows)() && null != o.desktopSource.soundshareId && T.pn(o.desktopSource.soundshareId)),
        null != l && nl(l, c),
        (o = d);
    let f = tM(),
        _ = tj().videoHook;
    eq.setClipsSource({
        desktopDescription: {
            id: o.desktopSource.id,
            soundshareId: o.desktopSource.soundshareId,
            useVideoHook: _,
            useGraphicsCapture: tQ(),
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
function rb(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((o = null), eq.setClipsSource(null));
}
function ry(e) {
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
            tZ(s),
            tF(s === eA.Yn.STREAM && e9, {
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
            o = e === eA.Yn.STREAM && e9,
            s =
                null != (i = a.qualityOptions)
                    ? i
                    : {
                          resolution: 720,
                          frameRate: 30,
                      };
        tF(o, {
            cameraSource: {
                videoDeviceGuid: t,
                audioDeviceGuid: n,
            },
            quality: {
                resolution: s.resolution,
                frameRate: s.frameRate,
            },
        });
    } else tF(e9, null);
}
function rO(e) {
    let { section: t } = e;
    return t === eO.oAB.VOICE && t6(), !1;
}
function rv() {
    return eq.eachConnection(tK), !1;
}
function rI(e) {
    let { enabled: t } = e;
    t4({ openH264: t }), eq.setH264Enabled(tq() || tz()), eq.eachConnection((e) => e.setSoftwareH264(tz()));
}
function rT(e) {
    let { enabled: t } = e,
        n = t4({ aecDumpEnabled: t });
    eq.setAecDump(n.aecDumpEnabled);
}
function rS(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (eX = Object.values(eA.Yn).reduce((e, n) => {
        let r = n,
            i = eK();
        return (e[r] = p().merge(i, t[r])), e;
    }, {})),
        y.K.set(eL, eX),
        t5();
}
function rA(e) {
    let { state: t } = e,
        n = D.Z.isEnabled();
    if (t === eO.$7l.BACKGROUND && e9 && !n) (to = !0), tF(!1);
    else {
        if (t !== eO.$7l.ACTIVE || !to) return !1;
        (to = !1), tF(!0);
    }
    return !0;
}
function rC(e) {
    eq.eachConnection((t) => t.setBitRate(e.bitrate));
}
function rN() {
    if ((!e9 && null == a) || null != eg.Z.getRTCConnectionId()) return !1;
    tF(!1, null);
}
function rR() {
    return !!tO && ((tO = !1), !0);
}
function rP(e) {
    eq.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function rw(e) {
    let { settings: t } = e;
    eq.applyMediaFilterSettings(t).finally(() => {
        (tv = !1), r.emitChange();
    });
}
function rD() {
    tv = !0;
}
function rL() {
    tv = !1;
}
function rx(e) {
    tw = e.enabled;
}
class rM extends (u = E.ZP.Store) {
    initialize() {
        tX(),
            t3(),
            rr(),
            nI(),
            (tR = {
                [eA.AN.VIDEO]: eq.supports(eA.AN.VIDEO),
                [eA.AN.DESKTOP_CAPTURE]: eq.supports(eA.AN.DESKTOP_CAPTURE),
                [eA.AN.HYBRID_VIDEO]: eq.supports(eA.AN.HYBRID_VIDEO),
            }),
            this.waitFor(e_.default, eh.Z, em.Z, eg.Z, L.ZP, $.Z.storage, en.Z, w.Z, A.Z);
    }
    supports(e) {
        return eq.supports(e);
    }
    supportsInApp(e) {
        return tR[e] || eq.supports(e);
    }
    isSupported() {
        return eq.supported();
    }
    isExperimentalEncodersSupported() {
        return eq.supports(eA.AN.EXPERIMENTAL_ENCODERS);
    }
    isNoiseSuppressionSupported() {
        return eq.supports(eA.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return re();
    }
    isNoiseCancellationError() {
        return tO;
    }
    isAutomaticGainControlSupported() {
        return eq.supports(eA.AN.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !t1() && (eq.supports(eA.AN.LEGACY_AUDIO_SUBSYSTEM) || eq.supports(eA.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return eq.supports(eA.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === eq.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return re();
    }
    isAecDumpSupported() {
        return eq.supports(eA.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return eq.supports(eA.AN.VIDEO) && eq.supports(eA.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        let t = (null == (e = em.Z.getChannel(ty)) ? void 0 : e.type) === eO.d4z.GUILD_STAGE_VOICE,
            n = tq();
        return !t && n && H.Z.simulcastEnabled();
    }
    getAecDump() {
        return tj().aecDumpEnabled;
    }
    getMediaEngine() {
        return eq;
    }
    getVideoComponent() {
        return eq.Video;
    }
    getCameraComponent() {
        return eq.Camera;
    }
    getKrispSuppressionLevel() {
        return null != l ? l : 100;
    }
    getKrispEnableStats() {
        return th;
    }
    isEnabled() {
        return eJ;
    }
    isMute() {
        return this.isSelfMute() || e8;
    }
    isDeaf() {
        return this.isSelfDeaf() || e7;
    }
    hasContext(e) {
        return null != eX[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.Yn.DEFAULT;
        return e === eA.Yn.DEFAULT && e5;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.Yn.DEFAULT;
        return (
            !this.isEnabled() ||
            tj(e).mute ||
            !$.Z.didHavePermission(eI.Eu.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eA.Yn.DEFAULT && e6)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tn;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tn = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && eh.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return tw;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.Yn.DEFAULT;
        return !this.isSupported() || tj(e).deaf;
    }
    isVideoEnabled() {
        return e9 && ts;
    }
    isVideoAvailable() {
        return Object.values(e4).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.Yn.STREAM;
        return e0 === e && null != a;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.Yn.STREAM;
        return e0 === t && null != a && (null == (e = a.desktopSource) ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eA.Yn.DEFAULT;
        return e !== e_.default.getId() && (tj(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return eq.supports(eA.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eA.Yn.DEFAULT;
        return null != (t = tj(n).disabledLocalVideos[e]) && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eA.Yn.DEFAULT;
        return null != (t = tj(n).videoToggleStateMap[e]) ? t : eO.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eA.Yn.DEFAULT;
        return t === eA.Yn.DEFAULT && tA.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.Yn.DEFAULT;
        return e === eA.Yn.DEFAULT && tA.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tv;
    }
    isNativeAudioPermissionReady() {
        return tT;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return e0;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return e1;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eA.Yn.DEFAULT,
            n = tj(t).localPans[e];
        return null != n ? n : eB;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eA.Yn.DEFAULT,
            n = t === eA.Yn.STREAM ? eA.Yh : eA.Qx,
            r = tj(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return tj().inputVolume;
    }
    getOutputVolume() {
        return tj().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.Yn.DEFAULT;
        return tj(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.Yn.DEFAULT;
        return tj(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return tm;
    }
    getActiveVoiceFilterAppliedAt() {
        return tg;
    }
    getPreviousVoiceFilter() {
        return tE;
    }
    getPreviousVoiceFilterAppliedAt() {
        return tb;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return tj().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return tj().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            p().each(eX, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === eO.pM4.PUSH_TO_TALK && eQ.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return ne(e2, tj().inputDeviceId);
    }
    getOutputDeviceId() {
        return ne(e3, tj().outputDeviceId);
    }
    getVideoDeviceId() {
        return ne(e4, tj().videoDeviceId);
    }
    getInputDevices() {
        return e2;
    }
    getOutputDevices() {
        return e3;
    }
    getVideoDevices() {
        return e4;
    }
    getEchoCancellation() {
        let e = tj();
        return eh.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return eq.supports(eA.AN.SIDECHAIN_COMPRESSION) && tj().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return tj().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return tj().h265Enabled;
    }
    getLoopback() {
        return tN.size > 0;
    }
    getLoopbackReasons() {
        return tN;
    }
    getNoiseSuppression() {
        let e = tj();
        return eh.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tj();
        return eh.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return tj().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return tj().noiseCancellation;
    }
    getExperimentalEncoders() {
        return tj().experimentalEncoders;
    }
    getHardwareEncoding() {
        return tq();
    }
    getHardwareEncodingSetting() {
        var e;
        return null == (e = tj().hardwareEncoding) || e;
    }
    getEnableSilenceWarning() {
        return tj().silenceWarning;
    }
    getDebugLogging() {
        return eq.getDebugLogging();
    }
    getQoS() {
        return tj().qos;
    }
    getAttenuation() {
        return tj().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return tj().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return tj().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return t0() && tj().automaticAudioSubsystem ? eA.iA.AUTOMATIC : eq.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return eq.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return tj().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eS._.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.Yn.DEFAULT;
        return tj(e);
    }
    getState() {
        return {
            settingsByContext: eX,
            inputDevices: e2,
            outputDevices: e3,
            appSupported: tR,
            krispModuleLoaded: t_,
            krispVersion: s,
            krispSuppressionLevel: l,
            goLiveSource: a,
            goLiveContext: e0,
        };
    }
    getInputDetected() {
        return tl;
    }
    getNoInputDetectedNotice() {
        return tu;
    }
    getPacketDelay() {
        return el.isPlatformEmbedded || this.getMode() !== eO.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        eq.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return e$;
    }
    getVideoHook() {
        return tj().videoHook;
    }
    supportsVideoHook() {
        return eq.supports(eA.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tj().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return (
            eq.supports(eA.AN.EXPERIMENTAL_SOUNDSHARE) &&
            m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, ev.T6)
        );
    }
    supportsHookSoundshare() {
        return (
            (0, el.isWindows)() &&
            eq.supports(eA.AN.SOUNDSHARE) &&
            m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, ev.sA)
        );
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = tj().useSystemScreensharePicker,
            n = (0, el.isLinux)();
        return e && (null != t ? t : n);
    }
    supportsSystemScreensharePicker() {
        return eq.supports(eA.AN.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return tx;
    }
    getUseGamescopeCapture() {
        return tL;
    }
    getOpenH264() {
        return tj().openH264;
    }
    getEverSpeakingWhileMuted() {
        return tr;
    }
    getSpeakingWhileMuted() {
        return ti;
    }
    getKrispModelOverride() {
        return c;
    }
    getKrispModels() {
        return tp;
    }
    getKrispVadActivationThreshold() {
        var e;
        return null != (e = tj().modeOptions.vadKrispActivationThreshold) ? e : eG;
    }
    hasActiveCallKitCall() {
        return tD;
    }
    setHasActiveCallKitCall(e) {
        tD = e;
    }
    supportsScreenSoundshare() {
        return (0, el.isMac)()
            ? eq.supports(eA.AN.SOUNDSHARE) &&
                  m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, ev.yG) &&
                  t$()
            : (0, el.isWindows)()
              ? eq.supports(eA.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, el.isLinux)() && eq.supports(eA.AN.SCREEN_SOUNDSHARE);
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
                (e.fetchDave = z.N.getCurrentConfig({
                    location: "MediaEngineStore fetchAsyncResources",
                }).loadWasmModule),
            eq.fetchAsyncResources(e)
        );
    }
    startDavePreload() {
        if (!tI && ((tI = !0), (0, el.isWeb)())) {
            let e = { fetchDave: !0 };
            eq.fetchAsyncResources(e).catch((e) => {
                eD.warn("DAVE preload failed:", e), eu.Z.captureException(e);
            });
        }
    }
    getSupportedSecureFramesProtocolVersion() {
        if ((0, el.isWeb)()) {
            let { useWasmModule: e } = z.N.getCurrentConfig({
                location: "MediaEngineStore getSupportedSecureFramesProtocolVersion",
            });
            if (!e) return 0;
        }
        let e = eq.getSupportedSecureFramesProtocolVersion(),
            t = z.m.getCurrentConfig({ location: "MediaEngineStore" });
        return 114 === e && (e = 1), t.canSupportDaveProtocol && e >= t.protocolVersionFloor ? e : 0;
    }
    hasClipsSource() {
        return null != o;
    }
    getGpuBrand() {
        return tP;
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
eN(rM, "displayName", "MediaEngineStore");
let rj = (r = new rM(v.Z, {
    VOICE_CHANNEL_SELECT: rf,
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
    AUDIO_SET_LOCAL_VOLUME: nT,
    AUDIO_SET_LOCAL_PAN: nS,
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
    AUDIO_SET_DISPLAY_SILENCE_WARNING: nJ,
    AUDIO_SET_DEBUG_LOGGING: n$,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: n0,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: nq,
    MEDIA_ENGINE_SET_VIDEO_HOOK: n1,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: n2,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: n3,
    AUDIO_SET_ATTENUATION: n4,
    AUDIO_SET_QOS: n8,
    MEDIA_ENGINE_DEVICES: nx,
    AUDIO_VOLUME_CHANGE: nM,
    AUDIO_RESET: n5,
    AUDIO_INPUT_DETECTED: n6,
    AUDIO_SET_SUBSYSTEM: rc,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rl,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rm,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rg,
    MEDIA_ENGINE_PERMISSION: rh,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: ry,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nw,
    MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nX,
    MEDIA_ENGINE_INTERACTION_REQUIRED: nL,
    USER_SETTINGS_MODAL_INIT: rO,
    USER_SETTINGS_MODAL_SET_SECTION: rO,
    CERTIFIED_DEVICES_SET: rv,
    RPC_APP_CONNECTED: r_,
    RPC_APP_DISCONNECTED: rp,
    OVERLAY_INITIALIZE: nu,
    MEDIA_ENGINE_SET_OPEN_H264: rI,
    MEDIA_ENGINE_SET_HARDWARE_ENCODING: nQ,
    APP_STATE_UPDATE: rA,
    SET_CHANNEL_BITRATE: rC,
    SET_VAD_PERMISSION: n7,
    SET_NATIVE_PERMISSION: n9,
    SET_CHANNEL_VIDEO_QUALITY_MODE: rP,
    MEDIA_ENGINE_SET_AEC_DUMP: rT,
    MEDIA_ENGINE_RESET_SETTINGS: rS,
    CHANNEL_DELETE: rN,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rR,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rw,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rD,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rL,
    USER_SETTINGS_PROTO_UPDATE: nE,
    CLIPS_INIT: rE,
    CLIPS_SETTINGS_UPDATE: rb,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rx,
    VOICE_FILTER_REQUEST_SWITCH: ra,
    VOICE_FILTER_LOOPBACK_TOGGLE: ri,
    VOICE_FILTER_APPLIED: rs,
    VOICE_FILTER_DOWNLOAD_FAILED: ro,
    VOICE_FILTER_APPLY_FAILED: ro,
}));
