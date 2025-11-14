let r, i, a, o, s, l, c;
n.d(t, { Z: () => rG }), n(388685), n(953529), n(457542), n(539854), n(642613), n(49124), n(337869);
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
    N = n(341569),
    R = n(710845),
    P = n(535911),
    D = n(458725),
    w = n(353926),
    x = n(646047),
    L = n(594190),
    M = n(502286),
    k = n(883794),
    j = n(314080),
    U = n(822253),
    G = n(177732),
    B = n(960708),
    Z = n(294473),
    F = n(706629),
    V = n(159142),
    H = n(27955),
    Y = n(166884),
    W = n(422797),
    K = n(805877),
    z = n(837968),
    q = n(529558),
    X = n(705946),
    Q = n(412412),
    J = n(441167),
    $ = n(338336),
    ee = n(751571),
    et = n(311473),
    en = n(615830),
    er = n(725380),
    ei = n(383451),
    ea = n(581883),
    eo = n(875527),
    es = n(420439),
    el = n(626135),
    ec = n(12647),
    eu = n(70956),
    ed = n(358085),
    ef = n(747268),
    e_ = n(960048),
    ep = n(998502),
    eh = n(13140),
    em = n(314897),
    eg = n(967368),
    eE = n(463395),
    eb = n(592125),
    ey = n(19780),
    eO = n(704806),
    ev = n(594174),
    eI = n(631768),
    eT = n(981631),
    eS = n(70722),
    eA = n(761274),
    eC = n(526761),
    eN = n(345655),
    eR = n(65154),
    eP = n(388032);
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
                eD(e, t, n[t]);
            });
    }
    return e;
}
function ex(e, t) {
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
function eL(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ex(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eM = new R.Z("MediaEngineStore"),
    ek = "MediaEngineStore",
    ej = 4,
    eU = 1,
    eG = 1,
    eB = 1,
    eZ = 1,
    eF = 0.5,
    eV = {
        left: 1,
        right: 1,
    },
    eH = 500,
    eY = 5 * eu.Z.Millis.SECOND,
    eW = -60,
    eK = 100,
    ez = 2 * eu.Z.Millis.SECOND,
    eq = !0,
    eX = 0;
function eQ() {
    return {
        mode: eT.pM4.VOICE_ACTIVITY,
        modeOptions: {
            threshold: eW,
            autoThreshold: ed.isPlatformEmbedded || __OVERLAY__,
            vadUseKrisp: !0,
            vadKrispActivationThreshold: eF,
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
        inputVolume: eR.Qx,
        outputVolume: eR.Qx,
        inputDeviceId: eR.w5,
        outputDeviceId: eR.w5,
        videoDeviceId: eR.w5,
        qos: !1,
        qosMigrated: !1,
        videoHook: e$.supports(eR.AN.VIDEO_HOOK),
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
let eJ = {
        [eN._.CUSTOM]: {},
        [eN._.VOICE_ISOLATION]: {
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
        [eN._.STUDIO]: {
            mode: eT.pM4.VOICE_ACTIVITY,
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
    e$ = (0, b.Mt)((0, b.jj)());
eM.enableNativeLogger(!0);
let e0 = {},
    e1 = new Set([eR.Yn.DEFAULT]),
    e2 = e$.supports(eR.AN.AUTO_ENABLE),
    e3 = !1,
    e4 = eR.Yn.STREAM,
    e8 = performance.now(),
    e5 = { [eR.w5]: nt("No Input Devices") },
    e6 = { [eR.w5]: nt("No Output Devices") },
    e7 = { [eR.w5]: nt("No Video Devices") },
    e9 = !1,
    te = !1,
    tt = !1,
    tn = !1,
    tr = !1,
    ti = eR.Av,
    ta = eR.Av,
    to = !1,
    ts = !1,
    tl = !1,
    tc = new O.V7(),
    tu = !1,
    td = !1,
    tf = null,
    t_ = !1,
    tp = !1,
    th = !1,
    tm = !1,
    tg = !1,
    tE = [],
    tb = !1,
    ty = null,
    tO = null,
    tv = null,
    tI = null,
    tT = null,
    tS = !1,
    tA = !1,
    tC = !1,
    tN = !1;
ee.Z.hasPermission(eA.Eu.AUDIO, { showAuthorizationError: !1 }),
    ee.Z.hasPermission(eA.Eu.CAMERA, { showAuthorizationError: !1 });
let tR = !1,
    tP = new Set(),
    tD = tR,
    tw = new Set(),
    tx = {},
    tL = null,
    tM = !0,
    tk = !1,
    tj = !1,
    tU = !1;
function tG() {
    var e, t;
    return null != (t = null == (e = ev.default.getCurrentUser()) ? void 0 : e.isStaff()) && t
        ? "always"
        : ef.Z === g.R.CANARY
          ? "permittedDevicesOnly"
          : "never";
}
function tB() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eR.Yn.DEFAULT,
        t = e0[e];
    return null == t && ((t = eQ()), (e0[e] = t)), t;
}
function tZ() {
    var e, t, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eR.Yn.DEFAULT,
        i = tB(r),
        a = eJ[null != (e = i.activeInputProfile) ? e : eN._.CUSTOM],
        o = ew({}, null != (t = i.modeOptions) ? t : {}, null != (n = a.modeOptions) ? n : {});
    if (
        (null == o.vadDuringPreProcess && (o.vadDuringPreProcess = (0, X.C)({ location: "getSettings" }).enabled),
        (null == o.vadKrispActivationThreshold && !0 === a.automaticGainControl) || !0 === i.automaticGainControl)
    ) {
        let e = (0, k.U)({ location: "getSettings" });
        null != e.vadKrispActivationThreshold && (o.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return eL(ew({}, i, a), { modeOptions: o });
}
function tF(e) {
    var t, n;
    let r = tZ(e.context),
        i = r.mode;
    e.context === eR.Yn.DEFAULT &&
        ((0, ei.f)({
            location: "setInputMode",
            autoTrackExposure: !1,
        }).enableLatching &&
            i === eT.pM4.PUSH_TO_TALK &&
            r.modeOptions.pttLatchingEnabled &&
            (i = eT.pM4.VOICE_ACTIVITY),
        (0, z.I)(!1, !1, !1)),
        e.setInputMode(i, {
            vadThreshold: r.modeOptions.threshold,
            vadAutoThreshold: r.modeOptions.autoThreshold,
            vadUseKrisp: r.modeOptions.vadUseKrisp && rn(),
            vadKrispActivationThreshold: null != (t = r.modeOptions.vadKrispActivationThreshold) ? t : eF,
            vadLeading: r.modeOptions.vadLeading,
            vadTrailing: r.modeOptions.vadTrailing,
            vadDuringPreProcess: null != (n = r.modeOptions.vadDuringPreProcess) && n,
            pttReleaseDelay: Math.round(r.modeOptions.delay),
        });
}
function tV(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eR.Qx;
    return p().clamp(e, 0, t);
}
function tH(e) {
    let t = tZ(e.context),
        n = !e2 || t.mute || t.deaf;
    e.context === eR.Yn.DEFAULT
        ? (n = n || e9 || te || tt || !ee.Z.didHavePermission(eA.Eu.AUDIO))
        : e.context === eR.Yn.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eR.Yn.DEFAULT && S.Z.updateNativeMute();
}
function tY(e) {
    e !== e4 && (null != a && e$.setGoLiveSource(null, e4), (e4 = e));
}
function tW() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tr,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        s = a;
    if (
        ((null == s ? void 0 : s.desktopSource) != null &&
            s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? void 0 : e.id) &&
            (null != s.desktopSource.soundshareId && (0, ed.isWindows)() && T.pn(s.desktopSource.soundshareId),
            e$.setGoLiveSource(null, e4)),
        (null == s ? void 0 : s.cameraSource) != null &&
            (s.cameraSource.videoDeviceGuid !==
                (null == o || null == (t = o.cameraSource) ? void 0 : t.videoDeviceGuid) ||
                s.cameraSource.audioDeviceGuid !==
                    (null == o || null == (n = o.cameraSource) ? void 0 : n.audioDeviceGuid)) &&
            e$.setGoLiveSource(null, e4),
        tr || i)
    ) {
        let e = tZ().videoDeviceId;
        tr && e === eR.w5 && ta === eR.w5 && ti !== eR.Av ? (e = ti) : (ta = e),
            (ti = (tr = i) ? nr(e7, e) : eR.Av),
            e$.setVideoInputDevice(ti);
    }
    if (((a = o), null != o)) {
        let e = {
            resolution: o.quality.resolution,
            frameRate: o.quality.frameRate,
        };
        if (null != o.desktopSource) {
            let t = tG(),
                n = tZ().videoHook,
                i = t0(),
                a = i ? (t1() ? eS.zj : eS.ZM) : 0,
                s = (0, ed.isWindows)() && (0, Q.t)("updateVideo").enabled;
            e$.setGoLiveSource(
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
                        allowScreenCaptureKit: t2(),
                        videoHookStaleFrameTimeoutMs: eH,
                        graphicsCaptureStaleFrameTimeoutMs: eY,
                        hdrCaptureMode: t,
                        enableGlobalFramePoolLock: (0, H.T)({ location: "updateVideo" }).enabled,
                    },
                    quality: e,
                },
                e4,
            );
        }
        null != o.cameraSource &&
            e$.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: o.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                e4,
            );
    }
}
function tK(e) {
    switch (e) {
        case eR.H3.CPU_OVERUSE:
            return D.Nk.NoiseCancellerCpuOveruse;
        case eR.H3.FAILED:
            return D.Nk.NoiseCancellerFailed;
        case eR.H3.VAD_CPU_OVERUSE:
            return D.Nk.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function tz(e) {
    let t = (0, k.U)({
        location: "getAutomaticGainControlConfig",
        disable: !e,
    }).noiseCancellationConfig;
    return ew({ enabled: e }, t);
}
function tq(e, t) {
    e.setAutomaticGainControl(tz(t));
}
async function tX(e, t) {
    if ((0, ed.isIOS)() || (0, ed.isMac)()) {
        let e = await e$.getSystemMicrophoneMode();
        "" !== e &&
            "standard" !== e &&
            j.Z.getConfig({ location: "setNoiseCancellation" }).disabledModes.includes(e) &&
            (t = !1);
    }
    e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: n } = (0, k.U)({
        location: "setNoiseCancellation",
        disable: !t,
    });
    e.setNoiseCancellationDuringProcessing(n);
    let { noiseCancellationAfterProcessing: r, vadAfterWebrtc: i } = (0, W.$)({ location: "setNoiseCancellation" });
    e.setNoiseCancellationAfterProcessing(r), e.setVADAfterWebrtc(i);
}
function tQ(e) {
    let t = tZ(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eE.Z.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eE.Z.hasNoiseSuppression(n) || t.noiseSuppression),
        tq(e, eE.Z.hasAutomaticGainControl(n) || t.automaticGainControl),
        tX(e, t.noiseCancellation),
        e.setVoiceFilterId(ty),
        (0, ed.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function tJ() {
    return !1;
}
function t$() {
    e$.on(b.aB.Connection, (e) => {
        tF(e), tH(e), tQ(e);
        let t = tZ();
        e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
            e.setQoS(t.qos),
            e.setExperimentalEncoders(t.experimentalEncoders),
            e.setHardwareH264(eq),
            e.setSoftwareH264(tJ());
        let n = ey.Z.getGuildId(),
            {
                muteBeforeProcessing: i,
                pttBeforeProcessing: o,
                skipEncode: s,
            } = (null != n ? F.Z : Z.Z).getCurrentConfig(
                {
                    location: "setupMediaEngine",
                    guildId: null != n ? n : void 0,
                },
                { autoTrackExposure: !0 },
            );
        i && e.setExperimentFlag(eR.V8.MUTE_BEFORE_PROCESSING, !0),
            o && e.setExperimentFlag(eR.V8.PTT_BEFORE_PROCESSING, !0),
            s && e.setExperimentFlag(eR.V8.SKIP_ENCODE, !0),
            (0, K.J)({ location: "setupMediaEngine" }).enabled &&
                e.setExperimentFlag(eR.V8.LOW_LATENCY_RATE_CONTROL, !0);
        let l = !1,
            c = !0;
        if (
            (e.setExperimentFlag(eR.V8.RESET_DECODER_ON_ERRORS, !0),
            l && e.setExperimentFlag(eR.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0),
            c && e.setExperimentFlag(eR.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0),
            e.context === eR.Yn.STREAM)
        ) {
            let t = na(e6);
            e.setSoundshareDiscardRearChannels(t);
            let { simulcastEnabled: n, lqStreamBitrate: r } = Y.Z.getConfig();
            e.configureGoLiveSimulcast(n, r);
        }
        if (
            ((0, ed.isWindows)()
                ? (null == tL ? void 0 : tL.startsWith("NVIDIA")) || (null == tL ? void 0 : tL.startsWith("AMD"))
                    ? e.setExperimentFlag(eR.V8.SIGNAL_AV1, !0)
                    : e.setExperimentFlag(eR.V8.SIGNAL_AV1_DECODE, !0)
                : ((0, ed.isMac)() || (0, ed.isLinux)()) && e.setExperimentFlag(eR.V8.SIGNAL_AV1_DECODE, !0),
            (0, ed.isWindows)() && e.setExperimentFlag(eR.V8.SIGNAL_AV1_HARDWARE_DECODE, !0),
            (0, ed.isWeb)())
        ) {
            let { enabled: t } = (0, V.A)("MediaEngineStore");
            e.setExperimentFlag(eR.V8.BROWSER_HEVC, t);
        }
        if ((e$.setHasFullbandPerformance((0, P.Z)()), e.setRemoteAudioHistory(1000), (0, C.Z)(r))) {
            let { enableViewerClipping: t } = J.Z.getCurrentConfig(
                { location: "f627ab_15" },
                { autoTrackExposure: !1 },
            );
            e.setViewerSideClip(t), e.setClipsKeyFrameInterval(eR.ux);
        }
        for (let n of ((t = tZ(e.context)), e.setPostponeDecodeLevel(eK), Object.keys(t.localMutes)))
            n !== em.default.getId() && e.setLocalMute(n, t.localMutes[n]);
        for (let n of Object.keys(t.localVolumes)) n !== em.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
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
            e.context === eR.Yn.DEFAULT &&
                ((ts = !1),
                (tl = !1),
                e.on(b.Sh.SpeakingWhileMuted, () => {
                    (ts = !0),
                        (tl = !0),
                        r.emitChange(),
                        tc.stop(),
                        tc.start(ez, () => {
                            (tl = !1), r.emitChange();
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
                    el.default.track(
                        eT.rMx.VIDEOHOOK_INITIALIZED,
                        ew(
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
            e.on(b.Sh.NoiseCancellationError, (e) => {
                eM.warn("noisecancellererror event: ".concat(e)),
                    (0, D.kr)({
                        type: D.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tK(e),
                    }),
                    (tS = !0),
                    el.default.track(eT.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
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
                eM.warn("voiceactivitydetectorerror event: ".concat(e)),
                    (0, D.kr)({
                        type: D.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tK(e),
                    }),
                    el.default.track(eT.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    v.Z.dispatch({
                        type: "AUDIO_SET_MODE",
                        context: eR.Yn.DEFAULT,
                        mode: eT.pM4.VOICE_ACTIVITY,
                        options: eL(ew({}, tZ(eR.Yn.DEFAULT).modeOptions), { vadUseKrisp: !1 }),
                    }),
                    v.Z.dispatch({
                        type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
                        code: e,
                    });
            }),
            e.on(b.Sh.SdpError, (e, t, n, r) => {
                el.default.track(eT.rMx.SDP_ERROR, {
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
            e.setBitRate(eg.Z.bitrate),
            e.applyVideoQualityMode(eI.Z.mode),
            e$.supports(eR.AN.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                e$.setAsyncVideoInputDeviceInit((0, B.p)("setupMediaEngine").enabled);
    }),
        e$.on(b.aB.DeviceChange, (e, t, n) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_DEVICES",
                inputDevices: e,
                outputDevices: t,
                videoDevices: n,
            });
        }),
        e$.on(b.aB.VolumeChange, (e, t) => {
            v.Z.dispatch({
                type: "AUDIO_VOLUME_CHANGE",
                inputVolume: e,
                outputVolume: t,
            });
        }),
        e$.on(b.aB.DesktopSourceEnd, (e, t) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                settings: null,
                endReason: e,
                errorCode: t,
            });
        }),
        e$.on(b.aB.AudioPermission, (e) => {
            (tN = !0),
                v.Z.dispatch({
                    type: "MEDIA_ENGINE_PERMISSION",
                    kind: "audio",
                    granted: e,
                });
        }),
        e$.on(b.aB.VideoPermission, (e) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_PERMISSION",
                kind: "video",
                granted: e,
            });
        }),
        e$.on(b.aB.WatchdogTimeout, async () => {
            let e;
            try {
                await ec.Z.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
            } catch (t) {
                "number" == typeof t.status && (e = t.status);
            }
            eM.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)),
                el.default.track(eT.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        e$.on(b.aB.VideoInputInitialized, (e) => {
            el.default.track(eT.rMx.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired
                    ? null
                    : Math.round(e.timeToFirstFrame * eu.Z.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: ey.Z.getMediaSessionId(),
                rtc_connection_id: ey.Z.getRTCConnectionId(),
            });
        }),
        e$.on(b.aB.AudioInputInitialized, (e) => {
            el.default.track(eT.rMx.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * eu.Z.Millis.SECOND),
                rtc_connection_id: ey.Z.getRTCConnectionId(),
            });
        }),
        e$.on(b.aB.ClipsRecordingRestartNeeded, () => {
            v.Z.dispatch({ type: "CLIPS_RESTART" });
        }),
        e$.on(b.aB.ClipsInitFailure, (e, t) => {
            v.Z.wait(() => {
                v.Z.dispatch({
                    type: "CLIPS_INIT_FAILURE",
                    errMsg: e,
                    applicationName: t,
                });
            });
        }),
        e$.on(b.aB.ClipsRecordingEnded, (e, t) => {
            var n, r;
            (null == o || null == (n = o.desktopSource) ? void 0 : n.id) === e &&
                (null != t && (null == a || null == (r = a.desktopSource) ? void 0 : r.soundshareId) !== t && T.pn(t),
                (o = null));
        }),
        e$.on(b.aB.NativeScreenSharePickerUpdate, (e, t) => {
            v.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE",
                existing: e,
                content: t,
            });
        }),
        e$.on(b.aB.NativeScreenSharePickerCancel, (e) => {
            v.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL",
                existing: e,
            });
        }),
        e$.on(b.aB.NativeScreenSharePickerError, (e) => {
            v.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_ERROR",
                error: e,
            });
        }),
        e$.on(b.aB.AudioDeviceModuleError, (e, t, n) => {
            el.default.track(eT.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                audio_device_module: e,
                code: t,
                device_name: n,
            });
        }),
        e$.on(b.aB.VideoCodecError, (e) => {
            let t = "encode" === e.mode ? D.u.VIDEO_ENCODE_ERROR : D.u.VIDEO_DECODE_ERROR,
                n = {
                    videoCodec: e.codecStandard,
                    errorMessage: e.message,
                };
            (0, D.kr)(
                t === D.u.VIDEO_ENCODE_ERROR
                    ? eL(ew({ type: t }, n), { videoEncoder: e.implName })
                    : eL(ew({ type: t }, n), { videoDecoder: e.implName }),
            );
        }),
        e$.on(b.aB.ConnectionStats, (e) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_CONNECTION_STATS",
                connectionStats: e.map((e) => {
                    let { stats: t, connection: n } = e;
                    return {
                        stats: t,
                        mediaEngineConnectionId: n.mediaEngineConnectionId,
                        version: eX++,
                        context: n.context,
                    };
                }),
            });
        }),
        e$.on(b.aB.VoiceQueueMetrics, (e) => {
            let t = rU(e);
            null !== t && el.default.track(eT.rMx.VOICE_QUEUE_METRICS, t);
        }),
        e$.setOnVideoContainerResized((e, t, n) => {
            v.Z.wait(() =>
                v.Z.dispatch({
                    type: "VIDEO_SIZE_UPDATE",
                    streamId: e,
                    width: t,
                    height: n,
                }),
            );
        }),
        nY(),
        nK(),
        t8.reset(),
        (0, eO.q)().then((e) => {
            null != e && (tL = e.gpu_brand);
        }),
        e$.on(b.aB.SystemMicrophoneModeChange, (e) => {
            e$.eachConnection(tQ);
        });
}
function t0() {
    return (0, ed.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eS.c5);
}
function t1() {
    return (0, ed.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eS.sN);
}
function t2() {
    return (
        (0, ed.isMac)() &&
        e$.supports(eR.AN.SCREEN_CAPTURE_KIT) &&
        m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eS.C7)
    );
}
function t3() {
    return (
        (0, ed.isWindows)() &&
        e$.supports(eR.AN.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        e$.supports(eR.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function t4() {
    return e$.supports(eR.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
let t8 = new (class {
    start() {
        this.started || ((this.started = !0), e$.on(b.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout &&
                (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            e$.removeListener(b.aB.Silence, this.handleSilence),
            v.Z.dispatch({
                type: "AUDIO_INPUT_DETECTED",
                inputDetected: null,
            }));
    }
    update() {
        let e = tZ();
        !t_ && ey.Z.getState() === eT.hes.RTC_CONNECTED && e.mode === eT.pM4.VOICE_ACTIVITY && e.silenceWarning
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
                                    e && (tp = !0));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout,
                    ));
            });
    }
})();
function t5() {
    var e;
    let t = y.K.get("audio");
    null != t && (y.K.set(ek, { [eR.Yn.DEFAULT]: t }), y.K.remove("audio")),
        (e0 = null != (e = y.K.get(ek)) ? e : {}),
        p().each(e0, (e) => {
            if (
                (p().defaultsDeep(e, eQ()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, eh.Kd)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== ej &&
                    ((e.vadUseKrispSettingVersion = ej), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                !e.vadThrehsoldMigrated)
            ) {
                var t;
                (e.vadThrehsoldMigrated = !0),
                    (null == (t = e.modeOptions) ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = eW);
            }
            e$.supports(eR.AN.SIDECHAIN_COMPRESSION) &&
                e.sidechainCompressionSettingVersion < eZ &&
                ((e.sidechainCompressionSettingVersion = eZ), (e.sidechainCompression = !0)),
                (0, ed.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== eG &&
                      ((e.ncUseKrispjsSettingVersion = eG), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== eU &&
                      ((e.ncUseKrispSettingVersion = eU), (e.noiseSuppression = !1), (e.noiseCancellation = !0)),
                e.hardwareEnabledVersion !== eB && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = eB)),
                null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
        }),
        t9();
}
function t6(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eR.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = tB(t);
    return Object.assign(r, e), !__OVERLAY__ && n && y.K.set(ek, e0), r;
}
function t7() {
    y.K.remove(ek), location.reload();
}
function t9() {
    let e = tZ();
    e$.setAudioInputDevice(e.inputDeviceId),
        e$.setAudioOutputDevice(e.outputDeviceId),
        tW(),
        e$.setInputVolume(e.inputVolume),
        e$.setOutputVolume(e.outputVolume),
        e$.setH264Enabled(eq || tJ()),
        e$.setAv1Enabled(eq),
        e$.setH265Enabled(eq),
        e$.setAecDump(e.aecDumpEnabled),
        e$.setSidechainCompression(e.sidechainCompression),
        e$.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        e$.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing);
}
function ne() {
    e2 ||
        e$.enable().then(() =>
            v.Z.dispatch({
                type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
                enabled: !0,
                unmute: !1,
            }),
        );
}
function nt(e) {
    return {
        id: eR.w5,
        index: 0,
        name: e,
        disabled: !0,
        guid: void 0,
        hardwareId: void 0,
        containerId: void 0,
    };
}
function nn(e, t) {
    if (0 === e.length) {
        let e = nt(t);
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
function nr(e, t) {
    var n, r;
    let i = null != (r = null != (n = e[t]) ? n : e[eR.w5]) ? r : p()(e).values().first();
    return null != i ? i.id : t;
}
function ni(e) {
    let t = e5;
    if (((e5 = nn(e, eP.intl.string(eP.t["/QIjDA"]))), !p().isEqual(e5, t))) {
        let e = tZ(),
            t = nr(e5, e.inputDeviceId);
        e$.setAudioInputDevice(t);
    }
}
function na(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function no(e) {
    e$.eachConnection((t) => {
        t.context === eR.Yn.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function ns(e) {
    let t = e6;
    if (((e6 = nn(e, eP.intl.string(eP.t.xlUg0v))), !p().isEqual(e6, t))) {
        let e = tZ(),
            n = nr(e6, e.outputDeviceId);
        e$.setAudioOutputDevice(n);
        let r = na(t),
            i = na(e6);
        r !== i && no(i);
    }
}
function nl(e) {
    td = e.length > 0;
    let t = e7;
    if (((e7 = nn(e, eP.intl.string(eP.t.WKWARY))), tr && !p().isEqual(e7, t))) {
        var n;
        let e = void 0 !== e7[ti],
            r = ti === eR.w5 && (null == (n = t[eR.w5]) ? void 0 : n.disabled);
        tW(e || r);
    }
}
function nc() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        r =
            null != (e = ea.Z.settings.audioContextSettings)
                ? e
                : {
                      user: {},
                      stream: {},
                  };
    for (let e of Object.keys(r)) {
        let i = e === eC.u0.USER ? eR.Yn.DEFAULT : eR.Yn.STREAM,
            a = i === eR.Yn.STREAM ? eR.Yh : eR.Qx,
            o = null != (t = r[e]) ? t : {},
            { localMutes: s, localVolumes: l } = tZ(i);
        for (let [e, t] of Object.entries(o))
            null == (0, er.Ky)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== a ? (l[e] = t.volume) : delete l[e],
                e$.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (n)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == o[e] &&
                    (delete s[e],
                    delete l[e],
                    e$.eachConnection((t) => {
                        t.setLocalVolume(e, a), t.setLocalMute(e, !1);
                    }, i));
        t6(
            {
                localMutes: s,
                localVolumes: l,
            },
            i,
        );
    }
}
function nu(e) {
    if (null == r)
        return (
            eM.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
            {
                soundshareId: null,
                soundshareSession: "",
            }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : ec.Z.getAudioPid(e),
            n = "";
        return (
            null != t && (n = ec.Z.generateSessionFromPid(t)),
            {
                soundshareId: t,
                soundshareSession: n,
            }
        );
    }
}
function nd(e, t) {
    (0, ed.isWindows)() &&
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
function nf(e) {
    (i = e.sessionId), (e9 = !1), (tn = !1);
    let t = tZ();
    if (
        (t3() && (t4() ? rf(eR.iA.AUTOMATIC) : t.automaticAudioSubsystem && r_()),
        e$.supports(eR.AN.OFFLOAD_ADM_CONTROLS))
    ) {
        let e = !1;
        (0, ed.isDesktop)()
            ? (e = (0, U.E)({ location: "handleConnectionOpen" }).enabled)
            : ((0, ed.isIOS)() || (0, ed.isAndroid)()) && (e = (0, G.W)({ location: "handleConnectionOpen" }).enabled),
            e$.setOffloadAdmControls(e);
    }
    (0, eo.wt)({
        location: "MediaEngineStore",
        autoTrackExposure: !1,
    }) &&
        null !== t.mostRecentlyRequestedVoiceFilter &&
        (0, ed.isDesktop)() &&
        (es.Z.getLastInitAttemptMayHaveCrashed()
            ? (v.Z.dispatch({
                  type: "AUDIO_SET_SELF_MUTE",
                  mute: !0,
                  context: eR.Yn.DEFAULT,
                  playSoundEffect: !0,
              }),
              t6({ mostRecentlyRequestedVoiceFilter: null }))
            : n(358820).r5()),
        nc();
}
function n_(e) {
    let { mediaEngineState: t } = e;
    (e0 = t.settingsByContext),
        (e5 = t.inputDevices),
        (e6 = t.outputDevices),
        (tx = t.appSupported),
        (tg = t.krispModuleLoaded),
        (s = t.krispVersion),
        (e4 = t.goLiveContext);
}
function np() {
    i = null;
}
function nh() {
    if ((0, ed.isWeb)()) {
        let e = q.NJ.getCurrentConfig({ location: "MediaEngineStore handlePostConnectionOpen" });
        e.loadWasmModule && e.preload && r.startDavePreload();
    }
    return !1;
}
function nm(e) {
    switch (e.state) {
        case eT.hes.CONNECTING:
            ne();
            break;
        case eT.hes.RTC_CONNECTING:
            (t_ = !1), (tp = !1);
            break;
        case eT.hes.RTC_CONNECTED:
            tW();
            break;
        case eT.hes.DISCONNECTED:
            nS(), nA();
    }
    t8.update();
}
function ng(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (e9 = t.mute || t.suppress), (tn = t.deaf), e$.eachConnection(tH);
            let e = null != t.guildId && null != t.channelId && null != tT && tT !== t.channelId,
                n = !th && null == t.channelId;
            return tW(!e && !n && tr), (tT = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== em.default.getId() || null != ey.Z.getChannelId() || tW(!1, null), e;
    }, !1);
}
function nE(e) {
    let { mute: t } = e;
    (te = t), e$.eachConnection(tH);
}
function nb(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = tZ(t);
    if (t === eR.Yn.DEFAULT && (ee.Z.requestPermission(eA.Eu.AUDIO), tt)) return !1;
    (r = !i && !r) || (i = !1),
        n || (to = !0),
        t6(
            {
                mute: r,
                deaf: i,
            },
            t,
        ),
        e$.eachConnection(tH);
}
function ny(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    t6({ mute: n }, t), r || (to = !0), e$.eachConnection(tH);
}
function nO(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== eC.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    nc(!0);
}
function nv(e) {
    let { context: t } = e;
    t6({ deaf: !tZ(t).deaf }, t), e$.eachConnection(tH);
}
function nI(e) {
    let { context: t, userId: n } = e;
    if (n === em.default.getId()) return;
    let { localMutes: r } = tZ(t);
    r[n] ? delete r[n] : (r[n] = !0),
        t6({ localMutes: r }, t),
        e$.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nT(e) {
    var t, n, r, i, a, o, s;
    let { context: l, userId: c, videoToggleState: u, persist: d, isAutomatic: _ } = e;
    f()(!(d && _), "These are not allowed to both be true.");
    let p = u === eT.ZUi.DISABLED,
        { disabledLocalVideos: h } = tZ(l),
        m = null != (t = h[c]) && t,
        g = tP.has(c),
        E = u === eT.ZUi.AUTO_ENABLED || u === eT.ZUi.MANUAL_ENABLED;
    eM.info(
        "disableVideo="
            .concat(p, " currentlyDisabled=")
            .concat(m, " currentlyAutoDisabled=")
            .concat(g, ", isVideoShown=")
            .concat(E),
    ),
        f()(!(g && !m), "If you are auto-disabled, then you are also disabled.");
    let b = p !== m,
        y = l === eR.Yn.DEFAULT,
        O = _ && b && y,
        v = d && b && y;
    eM.info(
        "changed="
            .concat(b, " isDefaultContext=")
            .concat(y, " isUpdateCausedByVideoHealthManager=")
            .concat(O, " isManualToggleByUser=")
            .concat(v),
    );
    let { videoToggleStateMap: I } = tZ(l);
    if (
        (I[c] === eT.ZUi.AUTO_PROBING &&
            u === eT.ZUi.AUTO_ENABLED &&
            (0, $.Z)(c, p ? eR.fC.AUTO_DISABLE : eR.fC.AUTO_ENABLE, E),
        (I[c] = u),
        t6({ videoToggleStateMap: I }, l, d),
        u === eT.ZUi.AUTO_PROBING
            ? null == (n = ey.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, !0)
            : null == (r = ey.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, !1),
        tD ||
            (eM.info("isAutoDisableAllowed=".concat(tD, " - disabling VideoHealthManager")),
            null == (a = ey.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()),
        O)
    ) {
        if ((!p && !g) || (p && !tD)) return;
        (0, $.Z)(c, p ? eR.fC.AUTO_DISABLE : eR.fC.AUTO_ENABLE, E), p ? tP.add(c) : tP.delete(c);
    } else
        v &&
            (g && !p
                ? (eM.info("disallowing auto-disable for this session because of manual override by user"),
                  (tD = !1),
                  null == (s = ey.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(),
                  (0, $.Z)(c, eR.fC.MANUAL_REENABLE, E))
                : (0, $.Z)(c, p ? eR.fC.MANUAL_DISABLE : eR.fC.MANUAL_ENABLE, E));
    y && !p && tP.delete(c),
        p ? (h[c] = !0) : delete h[c],
        t6({ disabledLocalVideos: h }, l, d),
        e$.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(c, null != (t = h[c]) && t);
        }, l);
}
function nS() {
    if (0 === tP.size) return;
    let e = eR.Yn.DEFAULT,
        { disabledLocalVideos: t } = tZ(e);
    tP.forEach((n) => {
        f()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            e$.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tP.clear(),
        t6({ disabledLocalVideos: t }, e, !1);
}
function nA() {
    let e = eR.Yn.DEFAULT,
        { videoToggleStateMap: t } = tZ(e);
    for (let [e, n] of Object.entries(t)) n === eT.ZUi.AUTO_PROBING && delete t[e];
    t6({ videoToggleStateMap: t }, e, !1);
}
function nC(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === em.default.getId()) return;
    let i = t === eR.Yn.STREAM ? eR.Yh : eR.Qx,
        { localVolumes: a } = tZ(t);
    r === i ? delete a[n] : (a[n] = r), t6({ localVolumes: a }, t), e$.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function nN(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: a } = tZ(t);
    (a[n] = {
        left: r,
        right: i,
    }),
        t6({ localPans: a }, t),
        e$.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function nR(e) {
    let { context: t, mode: n, options: r } = e;
    t6(
        {
            mode: n,
            modeOptions: r,
        },
        t,
    ),
        e$.eachConnection(tF),
        t8.update();
}
function nP(e) {
    let { volume: t } = e;
    t6({ inputVolume: tV(t) }), e$.setInputVolume(t);
}
function nD(e) {
    let { volume: t } = e;
    t6({ outputVolume: t }), e$.setOutputVolume(t);
}
function nw(e) {
    let { id: t } = e;
    (t = nr(e5, t)), (e8 = performance.now()), t6({ inputDeviceId: t }), e$.setAudioInputDevice(t);
}
function nx(e) {
    let { id: t } = e;
    t6({ outputDeviceId: (t = nr(e6, t)) }), e$.setAudioOutputDevice(t);
}
function nL(e) {
    let { id: t } = e;
    t6({ videoDeviceId: (t = nr(e7, t)) }), tW();
}
function nM(e) {
    let { inputProfile: t } = e;
    t6({ activeInputProfile: t });
    let n = tZ();
    e$.eachConnection((e) => {
        tF(e),
            tq(e, n.automaticGainControl),
            e.setEchoCancellation(n.echoCancellation),
            e.setExperimentalEncoders(n.experimentalEncoders),
            tX(e, n.noiseCancellation),
            e.setNoiseSuppression(n.noiseSuppression);
    }),
        e$.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        t8.update(),
        nW();
}
function nk(e) {
    return e3 !== e.required && ((e3 = e.required), e.required || e$.interact(), !0);
}
function nj(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    ni(t), ns(n), nl(r);
}
function nU(e) {
    let { inputVolume: t, outputVolume: n } = e;
    t6({
        inputVolume: tV(t),
        outputVolume: n,
    });
}
function nG(e) {
    var t;
    let n = tZ(),
        r = e$.getAudioSubsystem(),
        i = e$.getAudioLayer(),
        a = nr(e5, n.inputDeviceId),
        o = null == (t = e5[a]) ? void 0 : t.name;
    el.default.track(eT.rMx.VOICE_PROCESSING, {
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
function nB(e) {
    let t = t6({ echoCancellation: e.enabled });
    e$.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nW(), nG(e.location);
}
function nZ(e) {
    nV(e.enabled);
}
function nF(e) {
    let t = t6({ sidechainCompressionStrength: e.strength });
    e$.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function nV(e) {
    let t = t6({ sidechainCompression: e });
    e$.setSidechainCompression(t.sidechainCompression);
}
function nH(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tw.add(n) : tw.delete(n), nY(), nW();
}
function nY() {
    let e = !tw.has("voice_filter_preview") && !tw.has("mic_test");
    e$.setMaybePreprocessMute(e);
}
function nW() {
    let e = tZ(),
        t = tw.size > 0,
        n = e.inputDeviceId,
        r = eE.Z.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        a = eE.Z.hasNoiseSuppression(n) || e.noiseSuppression,
        o = tz(eE.Z.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation,
        l = null !== ty,
        c = tw.has("voice_filter") && 1 === tw.size;
    e$.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: a,
        automaticGainControlConfig: o,
        noiseCancellation: s,
        voiceFilters: l,
        loopbackUseAudioMode: c,
    });
}
async function nK() {
    var e, t, n, r;
    if (!e$.supports(eR.AN.VAAPI)) return;
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
        ((tU = !0), (tj = e$.supports(eR.AN.GAMESCOPE_CAPTURE)));
}
function nz(e) {
    let t = t6({ noiseSuppression: e.enabled });
    e$.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nW(), nG(e.location);
}
function nq(e) {
    let t = t6({ automaticGainControl: e.enabled });
    e$.eachConnection((e) => tq(e, t.automaticGainControl)), nW(), nG(e.location);
}
function nX(e) {
    let t = t6({ noiseCancellation: e.enabled });
    e$.eachConnection((e) => tX(e, t.noiseCancellation)), nW(), nG(e.location);
}
function nQ(e) {
    et.Z.setKrispModelOverride(e.model), (c = e.model), nW();
}
function nJ(e) {
    var t;
    (0, ed.isWeb)() || ((tb = e.enabled), null == (t = e$.setNoiseCancellationEnableStats) || t.call(e$, e.enabled));
}
function n$(e) {
    let t = t6({ experimentalEncoders: e.enabled });
    e$.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
}
function n0(e) {
    t6({ silenceWarning: e.enabled }), t8.update();
}
function n1(e) {
    e$.setDebugLogging(e.enabled);
}
function n2(e) {
    let { level: t } = e;
    (l = t), et.Z.setKrispSuppressionLevel(t);
}
function n3(e) {
    t6({ videoHook: e.enabled });
}
function n4(e) {
    t6({ experimentalSoundshare2: e.enabled });
}
function n8(e) {
    let { enabled: t } = e;
    t6({ useSystemScreensharePicker: t });
}
function n5(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = t6({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r,
        });
    e$.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function n6(e) {
    let { enabled: t } = e;
    t6({ qos: t }), e$.eachConnection((e) => e.setQoS(t));
}
function n7() {
    t7();
}
function n9(e) {
    let { inputDetected: t } = e;
    (tf = t), !t_ && tf && ((t_ = !0), t8.update());
}
function re(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === tt) return !1;
    (tt = n), e$.eachConnection(tH);
}
function rt(e) {
    let { state: t, permissionType: n } = e,
        r = t === eA.PQ.ACCEPTED;
    switch (n) {
        case eA.Eu.AUDIO:
            (tN = !0), e$.eachConnection(tH);
            break;
        case eA.Eu.CAMERA:
            !r && tr && tW(!1);
            break;
        default:
            return !1;
    }
}
function rn() {
    return tg || !1;
}
async function rr() {
    try {
        var e, t, n, i;
        await ep.ZP.ensureModule("discord_krisp");
        let a = ep.ZP.requireModule("discord_krisp");
        (tg = !0),
            (s = null == (e = a.getSdkVersion) ? void 0 : e.call(a)),
            (l = null != (i = null == (t = a.getSuppressionLevel) ? void 0 : t.call(a)) ? i : 100),
            null == (n = a.getNcModels) ||
                n.call(a).then((e) => {
                    (tE = e), r.emitChange();
                }),
            r.emitChange();
    } catch (t) {
        eM.warn("Failed to load Krisp module: ".concat(t.message)), e_.Z.captureException(t);
        let e = eR.H3.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eR.H3.INITIALIZED : n;
        }
        el.default.track(eT.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), t6({ noiseCancellation: !1 });
    } finally {
        tm = !1;
    }
}
function ri() {
    return (0, ed.isWindows)() || (0, ed.isLinux)() || (0, ed.isMac)();
}
function ra() {
    !ri() || __OVERLAY__ || tm || tg
        ? (0, ed.isWeb)() && e$.supports(eR.AN.NOISE_CANCELLATION)
            ? ((tg = !0), r.emitChange())
            : (0, ed.isWeb)() && t6({ noiseCancellation: !1 })
        : ((tm = !0), rr());
}
function ro(e) {
    let { enabled: t } = e;
    el.default.track(eT.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != ty ? ty : null,
        enabled: t,
    }),
        t6({ voiceFilterPlaybackEnabled: t });
}
function rs(e) {
    let { newVoiceFilterId: t } = e;
    t6({ mostRecentlyRequestedVoiceFilter: t }), e$.eachConnection((e) => e.setVoiceFilterId(t));
}
function rl() {
    t6({ mostRecentlyRequestedVoiceFilter: null });
}
function rc(e) {
    let { voiceFilterId: t } = e;
    (tv = ty), (tI = tO), (ty = t), (tO = null === t ? null : Date.now());
}
function ru(e) {
    let t = e.bypassEnabled;
    t6({ bypassSystemInputProcessing: t }), e$.setAudioInputBypassSystemProcessing(t), nG(e.location);
}
function rd(e) {
    rf(e.subsystem);
}
function rf(e) {
    e === eR.iA.AUTOMATIC
        ? (t6({ automaticAudioSubsystem: !0 }), r_())
        : (t6({ automaticAudioSubsystem: !1 }), e$.setAudioSubsystem(e));
}
function r_() {
    e$.queueAudioSubsystem(eR.iA.EXPERIMENTAL);
}
function rp(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && tW(i, null), null != t || null == n)) {
        th = !1;
        return;
    }
    if (th) return;
    th = !0;
    let a = tZ();
    (a.mute || a.deaf) &&
        (t6({
            deaf: !1,
            mute: !1,
        }),
        e$.eachConnection(tH));
}
function rh(e) {
    let { application: t } = e;
    e1.add(t.id);
}
function rm(e) {
    let { application: t } = e;
    e1.delete(t.id);
}
function rg(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (e2 = !1), e$.eachConnection(tH);
                break;
            case "video":
                tW(!1);
        }
}
function rE(e) {
    (e2 = e.enabled),
        e.unmute &&
            t6({
                mute: !1,
                deaf: !1,
            }),
        e$.eachConnection(tH);
}
function rb(e) {
    let { enabled: t } = e;
    ee.Z.requestPermission(eA.Eu.CAMERA), tW(t);
}
function ry(e) {
    let { sourceId: t, applicationName: n, quality: i } = e;
    if (!(0, N.CY)() || null == I.Z) return !1;
    let a = null,
        s = null,
        l = ec.Z.getPidFromDesktopSource(t);
    ({ soundshareId: a, soundshareSession: s } = nu(l));
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
        (e$.setClipsSource(null),
        (0, ed.isWindows)() && null != o.desktopSource.soundshareId && T.pn(o.desktopSource.soundshareId)),
        null != a && nd(a, s),
        (o = c);
    let u = tG(),
        d = tZ().videoHook;
    e$.setClipsSource({
        desktopDescription: {
            id: o.desktopSource.id,
            soundshareId: o.desktopSource.soundshareId,
            useVideoHook: d,
            useGraphicsCapture: t0(),
            useCaptureDeviceForEncode: !1,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: t2(),
            videoHookStaleFrameTimeoutMs: eH,
            graphicsCaptureStaleFrameTimeoutMs: eY,
            hdrCaptureMode: u,
        },
        quality: i,
        applicationName: n,
    });
}
function rO(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((o = null), e$.setClipsSource(null));
}
function rv(e) {
    var t, n, r, i;
    let { settings: a } = e;
    if ((null == a ? void 0 : a.desktopSettings) != null) {
        let e = null,
            r = null,
            { sourceId: i, sound: o } = a.desktopSettings,
            s = null != (t = a.context) ? t : eR.Yn.DEFAULT,
            l =
                null != (n = a.qualityOptions)
                    ? n
                    : {
                          resolution: 720,
                          frameRate: 30,
                      },
            c = !1 === o ? null : ec.Z.getPidFromDesktopSource(i);
        ed.isPlatformEmbedded &&
            !0 === o &&
            (({ soundshareId: e, soundshareSession: r } = nu(c)), null != e && nd(e, r)),
            tY(s),
            tW(s === eR.Yn.STREAM && tr, {
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
        let e = null != (r = a.context) ? r : eR.Yn.DEFAULT,
            { videoDeviceGuid: t, audioDeviceGuid: n } = a.cameraSettings,
            o = e === eR.Yn.STREAM && tr,
            s =
                null != (i = a.qualityOptions)
                    ? i
                    : {
                          resolution: 720,
                          frameRate: 30,
                      };
        tW(o, {
            cameraSource: {
                videoDeviceGuid: t,
                audioDeviceGuid: n,
            },
            quality: {
                resolution: s.resolution,
                frameRate: s.frameRate,
            },
        });
    } else tW(tr, null);
}
function rI(e) {
    let { section: t } = e;
    return t === eT.oAB.VOICE && ne(), !1;
}
function rT() {
    return e$.eachConnection(tQ), !1;
}
function rS(e) {
    let { enabled: t } = e;
    t6({ openH264: t }), e$.setH264Enabled(eq || tJ()), e$.eachConnection((e) => e.setSoftwareH264(tJ()));
}
function rA(e) {
    let { enabled: t } = e,
        n = t6({ aecDumpEnabled: t });
    e$.setAecDump(n.aecDumpEnabled);
}
function rC(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (e0 = Object.values(eR.Yn).reduce((e, n) => {
        let r = n,
            i = eQ();
        return (e[r] = p().merge(i, t[r])), e;
    }, {})),
        y.K.set(ek, e0),
        t9();
}
function rN(e) {
    let { state: t } = e,
        n = x.Z.isEnabled();
    if (t === eT.$7l.BACKGROUND && tr && !n) (tu = !0), tW(!1);
    else {
        if (t !== eT.$7l.ACTIVE || !tu) return !1;
        (tu = !1), tW(!0);
    }
    return !0;
}
function rR(e) {
    e$.eachConnection((t) => t.setBitRate(e.bitrate));
}
function rP() {
    if ((!tr && null == a) || null != ey.Z.getRTCConnectionId()) return !1;
    tW(!1, null);
}
function rD() {
    return !!tS && ((tS = !1), !0);
}
function rw(e) {
    e$.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function rx(e) {
    let { settings: t } = e;
    e$.applyMediaFilterSettings(t).finally(() => {
        (tA = !1), r.emitChange();
    });
}
function rL() {
    tA = !0;
}
function rM() {
    tA = !1;
}
function rk(e) {
    tM = e.enabled;
}
class rj extends (u = E.ZP.Store) {
    initialize() {
        t$(),
            t5(),
            ra(),
            nA(),
            (tx = {
                [eR.AN.VIDEO]: e$.supports(eR.AN.VIDEO),
                [eR.AN.DESKTOP_CAPTURE]: e$.supports(eR.AN.DESKTOP_CAPTURE),
                [eR.AN.HYBRID_VIDEO]: e$.supports(eR.AN.HYBRID_VIDEO),
            }),
            this.waitFor(em.default, eg.Z, eE.Z, eb.Z, A.Z, w.Z, ey.Z, L.ZP, en.Z, ea.Z, ev.default, eI.Z, es.Z);
    }
    supports(e) {
        return e$.supports(e);
    }
    supportsInApp(e) {
        return tx[e] || e$.supports(e);
    }
    isSupported() {
        return e$.supported();
    }
    isExperimentalEncodersSupported() {
        return e$.supports(eR.AN.EXPERIMENTAL_ENCODERS);
    }
    isNoiseSuppressionSupported() {
        return e$.supports(eR.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return rn();
    }
    isNoiseCancellationError() {
        return tS;
    }
    isAutomaticGainControlSupported() {
        return e$.supports(eR.AN.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !t4() && (e$.supports(eR.AN.LEGACY_AUDIO_SUBSYSTEM) || e$.supports(eR.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return e$.supports(eR.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === e$.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return rn();
    }
    isAecDumpSupported() {
        return e$.supports(eR.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return e$.supports(eR.AN.VIDEO) && e$.supports(eR.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        return (
            (null == (e = eb.Z.getChannel(tT)) ? void 0 : e.type) !== eT.d4z.GUILD_STAGE_VOICE &&
            eq &&
            Y.Z.simulcastEnabled()
        );
    }
    getAecDump() {
        return tZ().aecDumpEnabled;
    }
    getMediaEngine() {
        return e$;
    }
    getVideoComponent() {
        return e$.Video;
    }
    getCameraComponent() {
        return e$.Camera;
    }
    getKrispSuppressionLevel() {
        return null != l ? l : 100;
    }
    getKrispEnableStats() {
        return tb;
    }
    isEnabled() {
        return e2;
    }
    isMute() {
        return this.isSelfMute() || e9;
    }
    isDeaf() {
        return this.isSelfDeaf() || tn;
    }
    hasContext(e) {
        return null != e0[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eR.Yn.DEFAULT;
        return e === eR.Yn.DEFAULT && te;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eR.Yn.DEFAULT;
        return (
            !this.isEnabled() ||
            tZ(e).mute ||
            !ee.Z.didHavePermission(eA.Eu.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eR.Yn.DEFAULT && tt)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return to;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        to = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eR.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && eE.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return tM;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eR.Yn.DEFAULT;
        return !this.isSupported() || tZ(e).deaf;
    }
    isVideoEnabled() {
        return tr && td;
    }
    isVideoAvailable() {
        return Object.values(e7).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eR.Yn.STREAM;
        return e4 === e && null != a;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eR.Yn.STREAM;
        return e4 === t && null != a && (null == (e = a.desktopSource) ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eR.Yn.DEFAULT;
        return e !== em.default.getId() && (tZ(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return e$.supports(eR.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eR.Yn.DEFAULT;
        return null != (t = tZ(n).disabledLocalVideos[e]) && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eR.Yn.DEFAULT;
        return null != (t = tZ(n).videoToggleStateMap[e]) ? t : eT.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eR.Yn.DEFAULT;
        return t === eR.Yn.DEFAULT && tP.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eR.Yn.DEFAULT;
        return e === eR.Yn.DEFAULT && tP.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tA;
    }
    isNativeAudioPermissionReady() {
        return tN;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return e4;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return e8;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eR.Yn.DEFAULT,
            n = tZ(t).localPans[e];
        return null != n ? n : eV;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eR.Yn.DEFAULT,
            n = t === eR.Yn.STREAM ? eR.Yh : eR.Qx,
            r = tZ(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return tZ().inputVolume;
    }
    getOutputVolume() {
        return tZ().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eR.Yn.DEFAULT;
        return tZ(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eR.Yn.DEFAULT;
        return tZ(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return ty;
    }
    getActiveVoiceFilterAppliedAt() {
        return tO;
    }
    getPreviousVoiceFilter() {
        return tv;
    }
    getPreviousVoiceFilterAppliedAt() {
        return tI;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return tZ().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return tZ().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            p().each(e0, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === eT.pM4.PUSH_TO_TALK && e1.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nr(e5, tZ().inputDeviceId);
    }
    getOutputDeviceId() {
        return nr(e6, tZ().outputDeviceId);
    }
    getVideoDeviceId() {
        return nr(e7, tZ().videoDeviceId);
    }
    getInputDevices() {
        return e5;
    }
    getOutputDevices() {
        return e6;
    }
    getVideoDevices() {
        return e7;
    }
    getEchoCancellation() {
        let e = tZ();
        return eE.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return e$.supports(eR.AN.SIDECHAIN_COMPRESSION) && tZ().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return tZ().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return tZ().h265Enabled;
    }
    getLoopback() {
        return tw.size > 0;
    }
    getLoopbackReasons() {
        return tw;
    }
    getNoiseSuppression() {
        let e = tZ();
        return eE.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tZ();
        return eE.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return tZ().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return tZ().noiseCancellation;
    }
    getExperimentalEncoders() {
        return tZ().experimentalEncoders;
    }
    getHardwareEncoding() {
        return eq;
    }
    getEnableSilenceWarning() {
        return tZ().silenceWarning;
    }
    getDebugLogging() {
        return e$.getDebugLogging();
    }
    getQoS() {
        return tZ().qos;
    }
    getAttenuation() {
        return tZ().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return tZ().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return tZ().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return t3() && tZ().automaticAudioSubsystem ? eR.iA.AUTOMATIC : e$.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return e$.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return tZ().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eN._.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eR.Yn.DEFAULT;
        return tZ(e);
    }
    getState() {
        return {
            settingsByContext: e0,
            inputDevices: e5,
            outputDevices: e6,
            appSupported: tx,
            krispModuleLoaded: tg,
            krispVersion: s,
            krispSuppressionLevel: l,
            goLiveSource: a,
            goLiveContext: e4,
        };
    }
    getInputDetected() {
        return tf;
    }
    getNoInputDetectedNotice() {
        return tp;
    }
    getPacketDelay() {
        return ed.isPlatformEmbedded || this.getMode() !== eT.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        e$.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return e3;
    }
    getVideoHook() {
        return tZ().videoHook;
    }
    supportsVideoHook() {
        return e$.supports(eR.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tZ().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return (
            e$.supports(eR.AN.EXPERIMENTAL_SOUNDSHARE) &&
            m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eS.T6)
        );
    }
    supportsHookSoundshare() {
        return (
            (0, ed.isWindows)() &&
            e$.supports(eR.AN.SOUNDSHARE) &&
            m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eS.sA)
        );
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = tZ().useSystemScreensharePicker,
            n = (0, ed.isLinux)();
        return e && (null != t ? t : n);
    }
    supportsSystemScreensharePicker() {
        return e$.supports(eR.AN.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return tU;
    }
    getUseGamescopeCapture() {
        return tj;
    }
    getOpenH264() {
        return tZ().openH264;
    }
    getEverSpeakingWhileMuted() {
        return ts;
    }
    getSpeakingWhileMuted() {
        return tl;
    }
    getKrispModelOverride() {
        return c;
    }
    getKrispModels() {
        return tE;
    }
    getKrispVadActivationThreshold() {
        var e;
        return null != (e = tZ().modeOptions.vadKrispActivationThreshold) ? e : eF;
    }
    hasActiveCallKitCall() {
        return tk;
    }
    setHasActiveCallKitCall(e) {
        tk = e;
    }
    supportsScreenSoundshare() {
        return (0, ed.isMac)()
            ? e$.supports(eR.AN.SOUNDSHARE) &&
                  m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eS.yG) &&
                  t2()
            : (0, ed.isWindows)()
              ? e$.supports(eR.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, ed.isLinux)() && e$.supports(eR.AN.SCREEN_SOUNDSHARE);
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eR.Yn.DEFAULT,
            t = this.supports(eR.AN.VIDEO)
                ? [
                      {
                          rid: "100",
                          type: e === eR.Yn.DEFAULT ? eR.Tr.VIDEO : eR.Tr.SCREEN,
                          quality: eR.y7,
                      },
                  ]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === eR.Yn.DEFAULT || this.goLiveSimulcastEnabled()) &&
                t.push({
                    rid: "50",
                    type: e === eR.Yn.DEFAULT ? eR.Tr.VIDEO : eR.Tr.SCREEN,
                    quality: eR.LD,
                }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: !1 };
        return (
            (0, ed.isWeb)() &&
                (e.fetchDave = q.NJ.getCurrentConfig({
                    location: "MediaEngineStore fetchAsyncResources",
                }).loadWasmModule),
            e$.fetchAsyncResources(e)
        );
    }
    startDavePreload() {
        if (!tC && ((tC = !0), (0, ed.isWeb)())) {
            let e = { fetchDave: !0 };
            e$.fetchAsyncResources(e).catch((e) => {
                eM.warn("DAVE preload failed:", e), e_.Z.captureException(e);
            });
        }
    }
    getSupportedSecureFramesProtocolVersion() {
        if ((0, ed.isWeb)()) {
            let { useWasmModule: e } = q.NJ.getCurrentConfig({
                location: "MediaEngineStore getSupportedSecureFramesProtocolVersion",
            });
            if (!e) return 0;
        }
        let e = e$.getSupportedSecureFramesProtocolVersion();
        114 === e && (e = 1);
        let t = q.m8.getCurrentConfig({ location: "MediaEngineStore" }),
            n = q.Th.getConfig({ location: "MediaEngineStore" });
        return (t.canSupportDaveProtocol || (n.allowOptIn && en.Z.getPersistentCodesEnabled())) &&
            e >= t.protocolVersionFloor
            ? e
            : 0;
    }
    hasClipsSource() {
        return null != o;
    }
    getGpuBrand() {
        return tL;
    }
}
function rU(e) {
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
eD(rj, "displayName", "MediaEngineStore");
let rG = (r = new rj(v.Z, {
    VOICE_CHANNEL_SELECT: rp,
    VOICE_STATE_UPDATES: ng,
    CONNECTION_OPEN: nf,
    CONNECTION_CLOSED: np,
    POST_CONNECTION_OPEN: nh,
    RTC_CONNECTION_STATE: nm,
    AUDIO_SET_TEMPORARY_SELF_MUTE: nE,
    AUDIO_TOGGLE_SELF_MUTE: nb,
    AUDIO_SET_SELF_MUTE: ny,
    AUDIO_TOGGLE_SELF_DEAF: nv,
    AUDIO_TOGGLE_LOCAL_MUTE: nI,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: nT,
    AUDIO_SET_LOCAL_VOLUME: nC,
    AUDIO_SET_LOCAL_PAN: nN,
    AUDIO_SET_MODE: nR,
    AUDIO_SET_INPUT_VOLUME: nP,
    AUDIO_SET_OUTPUT_VOLUME: nD,
    AUDIO_SET_INPUT_DEVICE: nw,
    AUDIO_SET_OUTPUT_DEVICE: nx,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: nM,
    AUDIO_SET_ECHO_CANCELLATION: nB,
    AUDIO_SET_SIDECHAIN_COMPRESSION: nZ,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nF,
    AUDIO_SET_LOOPBACK: nH,
    AUDIO_SET_NOISE_SUPPRESSION: nz,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nq,
    AUDIO_SET_NOISE_CANCELLATION: nX,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: nQ,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: n0,
    AUDIO_SET_DEBUG_LOGGING: n1,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: n2,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: nJ,
    MEDIA_ENGINE_SET_VIDEO_HOOK: n3,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: n4,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: n8,
    AUDIO_SET_ATTENUATION: n5,
    AUDIO_SET_QOS: n6,
    MEDIA_ENGINE_DEVICES: nj,
    AUDIO_VOLUME_CHANGE: nU,
    AUDIO_RESET: n7,
    AUDIO_INPUT_DETECTED: n9,
    AUDIO_SET_SUBSYSTEM: rd,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: ru,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rE,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rb,
    MEDIA_ENGINE_PERMISSION: rg,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rv,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nL,
    MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: n$,
    MEDIA_ENGINE_INTERACTION_REQUIRED: nk,
    USER_SETTINGS_MODAL_INIT: rI,
    USER_SETTINGS_MODAL_SET_SECTION: rI,
    CERTIFIED_DEVICES_SET: rT,
    RPC_APP_CONNECTED: rh,
    RPC_APP_DISCONNECTED: rm,
    OVERLAY_INITIALIZE: n_,
    MEDIA_ENGINE_SET_OPEN_H264: rS,
    APP_STATE_UPDATE: rN,
    SET_CHANNEL_BITRATE: rR,
    SET_VAD_PERMISSION: re,
    SET_NATIVE_PERMISSION: rt,
    SET_CHANNEL_VIDEO_QUALITY_MODE: rw,
    MEDIA_ENGINE_SET_AEC_DUMP: rA,
    MEDIA_ENGINE_RESET_SETTINGS: rC,
    CHANNEL_DELETE: rP,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rD,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rx,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rL,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rM,
    USER_SETTINGS_PROTO_UPDATE: nO,
    CLIPS_INIT: ry,
    CLIPS_SETTINGS_UPDATE: rO,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rk,
    VOICE_FILTER_REQUEST_SWITCH: rs,
    VOICE_FILTER_LOOPBACK_TOGGLE: ro,
    VOICE_FILTER_APPLIED: rc,
    VOICE_FILTER_DOWNLOAD_FAILED: rl,
    VOICE_FILTER_APPLY_FAILED: rl,
}));
