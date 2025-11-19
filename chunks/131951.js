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
    N = n(341569),
    R = n(710845),
    P = n(535911),
    D = n(458725),
    w = n(353926),
    L = n(646047),
    x = n(594190),
    M = n(502286),
    j = n(883794),
    k = n(314080),
    U = n(822253),
    G = n(177732),
    B = n(960708),
    Z = n(502450),
    F = n(294473),
    V = n(706629),
    H = n(159142),
    Y = n(27955),
    W = n(166884),
    K = n(422797),
    z = n(805877),
    q = n(837968),
    X = n(529558),
    Q = n(705946),
    J = n(412412),
    $ = n(441167),
    ee = n(338336),
    et = n(751571),
    en = n(311473),
    er = n(615830),
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
    eD = n(388032);
function ew(e, t, n) {
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
                ew(e, t, n[t]);
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
function eM(e, t) {
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
let ej = new R.Z("MediaEngineStore"),
    ek = "MediaEngineStore",
    eU = 4,
    eG = 1,
    eB = 1,
    eZ = 1,
    eF = 0.5,
    eV = {
        left: 1,
        right: 1,
    },
    eH = 500,
    eY = 5 * ed.Z.Millis.SECOND,
    eW = -60,
    eK = 100,
    ez = 2 * ed.Z.Millis.SECOND,
    eq = !0,
    eX = 0;
function eQ() {
    return {
        mode: eS.pM4.VOICE_ACTIVITY,
        modeOptions: {
            threshold: eW,
            autoThreshold: ef.isPlatformEmbedded || __OVERLAY__,
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
        inputVolume: eP.Qx,
        outputVolume: eP.Qx,
        inputDeviceId: eP.w5,
        outputDeviceId: eP.w5,
        videoDeviceId: eP.w5,
        qos: !1,
        qosMigrated: !1,
        videoHook: e$.supports(eP.AN.VIDEO_HOOK),
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
let eJ = {
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
    e$ = (0, b.Mt)((0, b.jj)());
ej.enableNativeLogger(!0);
let e0 = {},
    e1 = new Set([eP.Yn.DEFAULT]),
    e3 = e$.supports(eP.AN.AUTO_ENABLE),
    e2 = !1,
    e4 = eP.Yn.STREAM,
    e5 = performance.now(),
    e8 = { [eP.w5]: ne("No Input Devices") },
    e6 = { [eP.w5]: ne("No Output Devices") },
    e7 = { [eP.w5]: ne("No Video Devices") },
    e9 = !1,
    te = !1,
    tt = !1,
    tn = !1,
    tr = !1,
    ti = eP.Av,
    ta = eP.Av,
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
et.Z.hasPermission(eC.Eu.AUDIO, { showAuthorizationError: !1 }),
    et.Z.hasPermission(eC.Eu.CAMERA, { showAuthorizationError: !1 });
let tR = !1,
    tP = new Set(),
    tD = tR,
    tw = new Set(),
    tL = {},
    tx = null,
    tM = !0,
    tj = !1,
    tk = !1,
    tU = !1;
function tG() {
    var e, t;
    return null != (t = null == (e = eI.default.getCurrentUser()) ? void 0 : e.isStaff()) && t
        ? "always"
        : e_.Z === g.R.CANARY
          ? "permittedDevicesOnly"
          : "never";
}
function tB() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.Yn.DEFAULT,
        t = e0[e];
    return null == t && ((t = eQ()), (e0[e] = t)), t;
}
function tZ() {
    var e, t, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.Yn.DEFAULT,
        i = tB(r),
        a = eJ[null != (e = i.activeInputProfile) ? e : eR._.CUSTOM],
        o = eL({}, null != (t = i.modeOptions) ? t : {}, null != (n = a.modeOptions) ? n : {});
    if (
        (null == o.vadDuringPreProcess && (o.vadDuringPreProcess = (0, Q.C)({ location: "getSettings" }).enabled),
        (null == o.vadKrispActivationThreshold && !0 === a.automaticGainControl) || !0 === i.automaticGainControl)
    ) {
        let e = (0, j.U)({ location: "getSettings" });
        null != e.vadKrispActivationThreshold && (o.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return eM(eL({}, i, a), { modeOptions: o });
}
function tF(e) {
    var t, n;
    let r = tZ(e.context),
        i = r.mode;
    e.context === eP.Yn.DEFAULT &&
        ((0, ea.f)({
            location: "setInputMode",
            autoTrackExposure: !1,
        }).enableLatching &&
            i === eS.pM4.PUSH_TO_TALK &&
            r.modeOptions.pttLatchingEnabled &&
            (i = eS.pM4.VOICE_ACTIVITY),
        (0, q.I)(!1, !1, !1)),
        e.setInputMode(i, {
            vadThreshold: r.modeOptions.threshold,
            vadAutoThreshold: r.modeOptions.autoThreshold,
            vadUseKrisp: r.modeOptions.vadUseKrisp && re(),
            vadKrispActivationThreshold: null != (t = r.modeOptions.vadKrispActivationThreshold) ? t : eF,
            vadLeading: r.modeOptions.vadLeading,
            vadTrailing: r.modeOptions.vadTrailing,
            vadDuringPreProcess: null != (n = r.modeOptions.vadDuringPreProcess) && n,
            pttReleaseDelay: Math.round(r.modeOptions.delay),
        });
}
function tV(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eP.Qx;
    return p().clamp(e, 0, t);
}
function tH(e) {
    let t = tZ(e.context),
        n = !e3 || t.mute || t.deaf;
    e.context === eP.Yn.DEFAULT
        ? (n = n || e9 || te || tt || !et.Z.didHavePermission(eC.Eu.AUDIO))
        : e.context === eP.Yn.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eP.Yn.DEFAULT && S.Z.updateNativeMute();
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
            (null != s.desktopSource.soundshareId && (0, ef.isWindows)() && T.pn(s.desktopSource.soundshareId),
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
        tr && e === eP.w5 && ta === eP.w5 && ti !== eP.Av ? (e = ti) : (ta = e),
            (ti = (tr = i) ? nn(e7, e) : eP.Av),
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
                i = t$(),
                a = i ? (t0() ? eA.zj : eA.ZM) : 0,
                s = (0, ef.isWindows)() && (0, J.t)("updateVideo").enabled;
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
                        allowScreenCaptureKit: t1(),
                        videoHookStaleFrameTimeoutMs: eH,
                        graphicsCaptureStaleFrameTimeoutMs: eY,
                        hdrCaptureMode: t,
                        enableGlobalFramePoolLock: (0, Y.T)({ location: "updateVideo" }).enabled,
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
        case eP.H3.CPU_OVERUSE:
            return D.Nk.NoiseCancellerCpuOveruse;
        case eP.H3.FAILED:
            return D.Nk.NoiseCancellerFailed;
        case eP.H3.VAD_CPU_OVERUSE:
            return D.Nk.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function tz(e) {
    let t = (0, j.U)({
        location: "getAutomaticGainControlConfig",
        disable: !e,
    }).noiseCancellationConfig;
    return eL({ enabled: e }, t);
}
function tq(e, t) {
    e.setAutomaticGainControl(tz(t));
}
async function tX(e, t) {
    if ((0, ef.isIOS)() || (0, ef.isMac)()) {
        let e = await e$.getSystemMicrophoneMode();
        "" !== e &&
            "standard" !== e &&
            k.Z.getConfig({ location: "setNoiseCancellation" }).disabledModes.includes(e) &&
            (t = !1);
    }
    e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: n } = (0, j.U)({
        location: "setNoiseCancellation",
        disable: !t,
    });
    e.setNoiseCancellationDuringProcessing(n);
    let { noiseCancellationAfterProcessing: r, vadAfterWebrtc: i } = (0, K.$)({ location: "setNoiseCancellation" });
    e.setNoiseCancellationAfterProcessing(r), e.setVADAfterWebrtc(i);
}
function tQ(e) {
    let t = tZ(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eb.Z.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eb.Z.hasNoiseSuppression(n) || t.noiseSuppression),
        tq(e, eb.Z.hasAutomaticGainControl(n) || t.automaticGainControl),
        tX(e, t.noiseCancellation),
        e.setVoiceFilterId(ty),
        (0, ef.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function tJ() {
    e$.on(b.aB.Connection, (e) => {
        tF(e), tH(e), tQ(e);
        let t = tZ();
        e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers), e.setQoS(t.qos);
        let n = eO.Z.getGuildId(),
            {
                muteBeforeProcessing: i,
                pttBeforeProcessing: o,
                skipEncode: s,
            } = (null != n ? V.Z : F.Z).getCurrentConfig(
                {
                    location: "setupMediaEngine",
                    guildId: null != n ? n : void 0,
                },
                { autoTrackExposure: !0 },
            );
        i && e.setExperimentFlag(eP.V8.MUTE_BEFORE_PROCESSING, !0),
            o && e.setExperimentFlag(eP.V8.PTT_BEFORE_PROCESSING, !0),
            s && e.setExperimentFlag(eP.V8.SKIP_ENCODE, !0),
            (0, z.J)({ location: "setupMediaEngine" }).enabled &&
                e.setExperimentFlag(eP.V8.LOW_LATENCY_RATE_CONTROL, !0);
        let l = !1,
            c = !0;
        if (
            (e.setExperimentFlag(eP.V8.RESET_DECODER_ON_ERRORS, !0),
            l && e.setExperimentFlag(eP.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0),
            c && e.setExperimentFlag(eP.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0),
            e.context === eP.Yn.STREAM)
        ) {
            let t = ni(e6);
            e.setSoundshareDiscardRearChannels(t);
            let { simulcastEnabled: n, lqStreamBitrate: r } = W.Z.getConfig();
            e.configureGoLiveSimulcast(n, r);
        }
        if (
            ((0, ef.isWindows)()
                ? (null == tx ? void 0 : tx.startsWith("NVIDIA")) || (null == tx ? void 0 : tx.startsWith("AMD"))
                    ? e.setExperimentFlag(eP.V8.SIGNAL_AV1, !0)
                    : e.setExperimentFlag(eP.V8.SIGNAL_AV1_DECODE, !0)
                : ((0, ef.isMac)() || (0, ef.isLinux)()) && e.setExperimentFlag(eP.V8.SIGNAL_AV1_DECODE, !0),
            (0, ef.isWindows)() && e.setExperimentFlag(eP.V8.SIGNAL_AV1_HARDWARE_DECODE, !0),
            (0, ef.isWeb)())
        ) {
            let { enabled: t } = (0, H.A)("MediaEngineStore");
            e.setExperimentFlag(eP.V8.BROWSER_HEVC, t);
        }
        if ((e$.setHasFullbandPerformance((0, P.Z)()), e.setRemoteAudioHistory(1000), (0, C.Z)(r))) {
            let { enableViewerClipping: t } = $.Z.getCurrentConfig(
                { location: "f627ab_15" },
                { autoTrackExposure: !1 },
            );
            e.setViewerSideClip(t), e.setClipsKeyFrameInterval(eP.ux);
        }
        for (let n of ((t = tZ(e.context)), e.setPostponeDecodeLevel(eK), Object.keys(t.localMutes)))
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
                    ec.default.track(
                        eS.rMx.VIDEOHOOK_INITIALIZED,
                        eL(
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
                ej.warn("noisecancellererror event: ".concat(e)),
                    (0, D.kr)({
                        type: D.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tK(e),
                    }),
                    (tS = !0),
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
                    (0, D.kr)({
                        type: D.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tK(e),
                    }),
                    ec.default.track(eS.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    v.Z.dispatch({
                        type: "AUDIO_SET_MODE",
                        context: eP.Yn.DEFAULT,
                        mode: eS.pM4.VOICE_ACTIVITY,
                        options: eM(eL({}, tZ(eP.Yn.DEFAULT).modeOptions), { vadUseKrisp: !1 }),
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
            e$.supports(eP.AN.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
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
                await eu.Z.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
            } catch (t) {
                "number" == typeof t.status && (e = t.status);
            }
            ej.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)),
                ec.default.track(eS.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        e$.on(b.aB.VideoInputInitialized, (e) => {
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
        e$.on(b.aB.AudioInputInitialized, (e) => {
            ec.default.track(eS.rMx.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * ed.Z.Millis.SECOND),
                rtc_connection_id: eO.Z.getRTCConnectionId(),
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
            ec.default.track(eS.rMx.AUDIO_DEVICE_MODULE_ERROR, {
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
                    ? eM(eL({ type: t }, n), { videoEncoder: e.implName })
                    : eM(eL({ type: t }, n), { videoDecoder: e.implName }),
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
            let t = rM(e);
            null !== t && ec.default.track(eS.rMx.VOICE_QUEUE_METRICS, t);
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
        nH(),
        nW(),
        e$.supports(eP.AN.ASYNC_CLIPS_SOURCE_DEINIT) &&
            e$.setAsyncClipsSourceDeinit((0, Z.C)("setupMediaEngine").enabled),
        t4.reset(),
        (0, ev.q)().then((e) => {
            null != e && (tx = e.gpu_brand);
        }),
        e$.on(b.aB.SystemMicrophoneModeChange, (e) => {
            e$.eachConnection(tQ);
        });
}
function t$() {
    return (0, ef.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eA.c5);
}
function t0() {
    return (0, ef.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eA.sN);
}
function t1() {
    return (
        (0, ef.isMac)() &&
        e$.supports(eP.AN.SCREEN_CAPTURE_KIT) &&
        m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eA.C7)
    );
}
function t3() {
    return (
        (0, ef.isWindows)() &&
        e$.supports(eP.AN.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        e$.supports(eP.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function t2() {
    return e$.supports(eP.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
let t4 = new (class {
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
        !t_ && eO.Z.getState() === eS.hes.RTC_CONNECTED && e.mode === eS.pM4.VOICE_ACTIVITY && e.silenceWarning
            ? this.start()
            : this.stop();
    }
    reset() {
        this.stop(), this.update();
    }
    constructor() {
        ew(this, "stateChangeTimeout", void 0),
            ew(this, "noVoiceTimeout", 5000),
            ew(this, "voiceTimeout", 1500),
            ew(this, "started", !1),
            ew(this, "handleSilence", (e) => {
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
    null != t && (y.K.set(ek, { [eP.Yn.DEFAULT]: t }), y.K.remove("audio")),
        (e0 = null != (e = y.K.get(ek)) ? e : {}),
        p().each(e0, (e) => {
            if (
                (p().defaultsDeep(e, eQ()),
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
                    (null == (t = e.modeOptions) ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = eW);
            }
            e$.supports(eP.AN.SIDECHAIN_COMPRESSION) &&
                e.sidechainCompressionSettingVersion < eZ &&
                ((e.sidechainCompressionSettingVersion = eZ), (e.sidechainCompression = !0)),
                (0, ef.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== eB &&
                      ((e.ncUseKrispjsSettingVersion = eB), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== eG &&
                      ((e.ncUseKrispSettingVersion = eG), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
        }),
        t7();
}
function t8(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eP.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = tB(t);
    return Object.assign(r, e), !__OVERLAY__ && n && y.K.set(ek, e0), r;
}
function t6() {
    y.K.remove(ek), location.reload();
}
function t7() {
    let e = tZ();
    e$.setAudioInputDevice(e.inputDeviceId),
        e$.setAudioOutputDevice(e.outputDeviceId),
        tW(),
        e$.setInputVolume(e.inputVolume),
        e$.setOutputVolume(e.outputVolume),
        e$.setH264Enabled(eq),
        e$.setAv1Enabled(eq),
        e$.setH265Enabled(eq),
        e$.setAecDump(e.aecDumpEnabled),
        e$.setSidechainCompression(e.sidechainCompression),
        e$.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        e$.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing);
}
function t9() {
    e3 ||
        e$.enable().then(() =>
            v.Z.dispatch({
                type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
                enabled: !0,
                unmute: !1,
            }),
        );
}
function ne(e) {
    return {
        id: eP.w5,
        index: 0,
        name: e,
        disabled: !0,
        guid: void 0,
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
            guid: e.originalId,
            hardwareId: e.hardwareId,
            containerId: e.containerId,
        }))
        .keyBy("id")
        .value();
}
function nn(e, t) {
    var n, r;
    let i = null != (r = null != (n = e[t]) ? n : e[eP.w5]) ? r : p()(e).values().first();
    return null != i ? i.id : t;
}
function nr(e) {
    let t = e8;
    if (((e8 = nt(e, eD.intl.string(eD.t["/QIjDA"]))), !p().isEqual(e8, t))) {
        let e = tZ(),
            t = nn(e8, e.inputDeviceId);
        e$.setAudioInputDevice(t);
    }
}
function ni(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function na(e) {
    e$.eachConnection((t) => {
        t.context === eP.Yn.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function no(e) {
    let t = e6;
    if (((e6 = nt(e, eD.intl.string(eD.t.xlUg0v))), !p().isEqual(e6, t))) {
        let e = tZ(),
            n = nn(e6, e.outputDeviceId);
        e$.setAudioOutputDevice(n);
        let r = ni(t),
            i = ni(e6);
        r !== i && na(i);
    }
}
function ns(e) {
    td = e.length > 0;
    let t = e7;
    if (((e7 = nt(e, eD.intl.string(eD.t.WKWARY))), tr && !p().isEqual(e7, t))) {
        var n;
        let e = void 0 !== e7[ti],
            r = ti === eP.w5 && (null == (n = t[eP.w5]) ? void 0 : n.disabled);
        tW(e || r);
    }
}
function nl() {
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
            { localMutes: s, localVolumes: l } = tZ(i);
        for (let [e, t] of Object.entries(o))
            null == (0, ei.Ky)(i, e) &&
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
        t8(
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
function nu(e, t) {
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
function nd(e) {
    (i = e.sessionId), (e9 = !1), (tn = !1);
    let t = tZ();
    if (
        (t3() && (t2() ? ru(eP.iA.AUTOMATIC) : t.automaticAudioSubsystem && rd()),
        e$.supports(eP.AN.OFFLOAD_ADM_CONTROLS))
    ) {
        let e = !1;
        (0, ef.isDesktop)()
            ? (e = (0, U.E)({ location: "handleConnectionOpen" }).enabled)
            : ((0, ef.isIOS)() || (0, ef.isAndroid)()) && (e = (0, G.W)({ location: "handleConnectionOpen" }).enabled),
            e$.setOffloadAdmControls(e);
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
              t8({ mostRecentlyRequestedVoiceFilter: null }))
            : n(358820).r5()),
        nl();
}
function nf(e) {
    let { mediaEngineState: t } = e;
    (e0 = t.settingsByContext),
        (e8 = t.inputDevices),
        (e6 = t.outputDevices),
        (tL = t.appSupported),
        (tg = t.krispModuleLoaded),
        (s = t.krispVersion),
        (e4 = t.goLiveContext);
}
function n_() {
    i = null;
}
function np() {
    if ((0, ef.isWeb)()) {
        let e = X.NJ.getCurrentConfig({ location: "MediaEngineStore handlePostConnectionOpen" });
        e.loadWasmModule && e.preload && r.startDavePreload();
    }
    return !1;
}
function nh(e) {
    switch (e.state) {
        case eS.hes.CONNECTING:
            t9();
            break;
        case eS.hes.RTC_CONNECTING:
            (t_ = !1), (tp = !1);
            break;
        case eS.hes.RTC_CONNECTED:
            tW();
            break;
        case eS.hes.DISCONNECTED:
            nT(), nS();
    }
    t4.update();
}
function nm(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (e9 = t.mute || t.suppress), (tn = t.deaf), e$.eachConnection(tH);
            let e = null != t.guildId && null != t.channelId && null != tT && tT !== t.channelId,
                n = !th && null == t.channelId;
            return tW(!e && !n && tr), (tT = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== eg.default.getId() || null != eO.Z.getChannelId() || tW(!1, null), e;
    }, !1);
}
function ng(e) {
    let { mute: t } = e;
    (te = t), e$.eachConnection(tH);
}
function nE(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = tZ(t);
    if (t === eP.Yn.DEFAULT && (et.Z.requestPermission(eC.Eu.AUDIO), tt)) return !1;
    (r = !i && !r) || (i = !1),
        n || (to = !0),
        t8(
            {
                mute: r,
                deaf: i,
            },
            t,
        ),
        e$.eachConnection(tH);
}
function nb(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    t8({ mute: n }, t), r || (to = !0), e$.eachConnection(tH);
}
function ny(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== eN.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    nl(!0);
}
function nO(e) {
    let { context: t } = e;
    t8({ deaf: !tZ(t).deaf }, t), e$.eachConnection(tH);
}
function nv(e) {
    let { context: t, userId: n } = e;
    if (n === eg.default.getId()) return;
    let { localMutes: r } = tZ(t);
    r[n] ? delete r[n] : (r[n] = !0),
        t8({ localMutes: r }, t),
        e$.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nI(e) {
    var t, n, r, i, a, o, s;
    let { context: l, userId: c, videoToggleState: u, persist: d, isAutomatic: _ } = e;
    f()(!(d && _), "These are not allowed to both be true.");
    let p = u === eS.ZUi.DISABLED,
        { disabledLocalVideos: h } = tZ(l),
        m = null != (t = h[c]) && t,
        g = tP.has(c),
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
    let { videoToggleStateMap: I } = tZ(l);
    if (
        (I[c] === eS.ZUi.AUTO_PROBING &&
            u === eS.ZUi.AUTO_ENABLED &&
            (0, ee.Z)(c, p ? eP.fC.AUTO_DISABLE : eP.fC.AUTO_ENABLE, E),
        (I[c] = u),
        t8({ videoToggleStateMap: I }, l, d),
        u === eS.ZUi.AUTO_PROBING
            ? null == (n = eO.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, !0)
            : null == (r = eO.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, !1),
        tD ||
            (ej.info("isAutoDisableAllowed=".concat(tD, " - disabling VideoHealthManager")),
            null == (a = eO.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()),
        O)
    ) {
        if ((!p && !g) || (p && !tD)) return;
        (0, ee.Z)(c, p ? eP.fC.AUTO_DISABLE : eP.fC.AUTO_ENABLE, E), p ? tP.add(c) : tP.delete(c);
    } else
        v &&
            (g && !p
                ? (ej.info("disallowing auto-disable for this session because of manual override by user"),
                  (tD = !1),
                  null == (s = eO.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(),
                  (0, ee.Z)(c, eP.fC.MANUAL_REENABLE, E))
                : (0, ee.Z)(c, p ? eP.fC.MANUAL_DISABLE : eP.fC.MANUAL_ENABLE, E));
    y && !p && tP.delete(c),
        p ? (h[c] = !0) : delete h[c],
        t8({ disabledLocalVideos: h }, l, d),
        e$.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(c, null != (t = h[c]) && t);
        }, l);
}
function nT() {
    if (0 === tP.size) return;
    let e = eP.Yn.DEFAULT,
        { disabledLocalVideos: t } = tZ(e);
    tP.forEach((n) => {
        f()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            e$.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tP.clear(),
        t8({ disabledLocalVideos: t }, e, !1);
}
function nS() {
    let e = eP.Yn.DEFAULT,
        { videoToggleStateMap: t } = tZ(e);
    for (let [e, n] of Object.entries(t)) n === eS.ZUi.AUTO_PROBING && delete t[e];
    t8({ videoToggleStateMap: t }, e, !1);
}
function nA(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === eg.default.getId()) return;
    let i = t === eP.Yn.STREAM ? eP.Yh : eP.Qx,
        { localVolumes: a } = tZ(t);
    r === i ? delete a[n] : (a[n] = r), t8({ localVolumes: a }, t), e$.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function nC(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: a } = tZ(t);
    (a[n] = {
        left: r,
        right: i,
    }),
        t8({ localPans: a }, t),
        e$.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function nN(e) {
    let { context: t, mode: n, options: r } = e;
    t8(
        {
            mode: n,
            modeOptions: r,
        },
        t,
    ),
        e$.eachConnection(tF),
        t4.update();
}
function nR(e) {
    let { volume: t } = e;
    t8({ inputVolume: tV(t) }), e$.setInputVolume(t);
}
function nP(e) {
    let { volume: t } = e;
    t8({ outputVolume: t }), e$.setOutputVolume(t);
}
function nD(e) {
    let { id: t } = e;
    (t = nn(e8, t)), (e5 = performance.now()), t8({ inputDeviceId: t }), e$.setAudioInputDevice(t);
}
function nw(e) {
    let { id: t } = e;
    t8({ outputDeviceId: (t = nn(e6, t)) }), e$.setAudioOutputDevice(t);
}
function nL(e) {
    let { id: t } = e;
    t8({ videoDeviceId: (t = nn(e7, t)) }), tW();
}
function nx(e) {
    let { inputProfile: t } = e;
    t8({ activeInputProfile: t });
    let n = tZ();
    e$.eachConnection((e) => {
        tF(e),
            tq(e, n.automaticGainControl),
            e.setEchoCancellation(n.echoCancellation),
            tX(e, n.noiseCancellation),
            e.setNoiseSuppression(n.noiseSuppression);
    }),
        e$.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        t4.update(),
        nY();
}
function nM(e) {
    return e2 !== e.required && ((e2 = e.required), e.required || e$.interact(), !0);
}
function nj(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    nr(t), no(n), ns(r);
}
function nk(e) {
    let { inputVolume: t, outputVolume: n } = e;
    t8({
        inputVolume: tV(t),
        outputVolume: n,
    });
}
function nU(e) {
    var t;
    let n = tZ(),
        r = e$.getAudioSubsystem(),
        i = e$.getAudioLayer(),
        a = nn(e8, n.inputDeviceId),
        o = null == (t = e8[a]) ? void 0 : t.name;
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
function nG(e) {
    let t = t8({ echoCancellation: e.enabled });
    e$.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nY(), nU(e.location);
}
function nB(e) {
    nF(e.enabled);
}
function nZ(e) {
    let t = t8({ sidechainCompressionStrength: e.strength });
    e$.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function nF(e) {
    let t = t8({ sidechainCompression: e });
    e$.setSidechainCompression(t.sidechainCompression);
}
function nV(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tw.add(n) : tw.delete(n), nH(), nY();
}
function nH() {
    let e = !tw.has("voice_filter_preview") && !tw.has("mic_test");
    e$.setMaybePreprocessMute(e);
}
function nY() {
    let e = tZ(),
        t = tw.size > 0,
        n = e.inputDeviceId,
        r = eb.Z.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        a = eb.Z.hasNoiseSuppression(n) || e.noiseSuppression,
        o = tz(eb.Z.hasAutomaticGainControl(n) || e.automaticGainControl),
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
async function nW() {
    var e, t, n, r;
    if (!e$.supports(eP.AN.VAAPI)) return;
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
        ((tU = !0), (tk = e$.supports(eP.AN.GAMESCOPE_CAPTURE)));
}
function nK(e) {
    let t = t8({ noiseSuppression: e.enabled });
    e$.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nY(), nU(e.location);
}
function nz(e) {
    let t = t8({ automaticGainControl: e.enabled });
    e$.eachConnection((e) => tq(e, t.automaticGainControl)), nY(), nU(e.location);
}
function nq(e) {
    let t = t8({ noiseCancellation: e.enabled });
    e$.eachConnection((e) => tX(e, t.noiseCancellation)), nY(), nU(e.location);
}
function nX(e) {
    en.Z.setKrispModelOverride(e.model), (c = e.model), nY();
}
function nQ(e) {
    var t;
    (0, ef.isWeb)() || ((tb = e.enabled), null == (t = e$.setNoiseCancellationEnableStats) || t.call(e$, e.enabled));
}
function nJ(e) {
    t8({ silenceWarning: e.enabled }), t4.update();
}
function n$(e) {
    e$.setDebugLogging(e.enabled);
}
function n0(e) {
    let { level: t } = e;
    (l = t), en.Z.setKrispSuppressionLevel(t);
}
function n1(e) {
    t8({ videoHook: e.enabled });
}
function n3(e) {
    t8({ experimentalSoundshare2: e.enabled });
}
function n2(e) {
    let { enabled: t } = e;
    t8({ useSystemScreensharePicker: t });
}
function n4(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = t8({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r,
        });
    e$.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function n5(e) {
    let { enabled: t } = e;
    t8({ qos: t }), e$.eachConnection((e) => e.setQoS(t));
}
function n8() {
    t6();
}
function n6(e) {
    let { inputDetected: t } = e;
    (tf = t), !t_ && tf && ((t_ = !0), t4.update());
}
function n7(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === tt) return !1;
    (tt = n), e$.eachConnection(tH);
}
function n9(e) {
    let { state: t, permissionType: n } = e,
        r = t === eC.PQ.ACCEPTED;
    switch (n) {
        case eC.Eu.AUDIO:
            (tN = !0), e$.eachConnection(tH);
            break;
        case eC.Eu.CAMERA:
            !r && tr && tW(!1);
            break;
        default:
            return !1;
    }
}
function re() {
    return tg || !1;
}
async function rt() {
    try {
        var e, t, n, i;
        await eh.ZP.ensureModule("discord_krisp");
        let a = eh.ZP.requireModule("discord_krisp");
        (tg = !0),
            (s = null == (e = a.getSdkVersion) ? void 0 : e.call(a)),
            (l = null != (i = null == (t = a.getSuppressionLevel) ? void 0 : t.call(a)) ? i : 100),
            null == (n = a.getNcModels) ||
                n.call(a).then((e) => {
                    (tE = e), r.emitChange();
                }),
            r.emitChange();
    } catch (t) {
        ej.warn("Failed to load Krisp module: ".concat(t.message)), ep.Z.captureException(t);
        let e = eP.H3.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eP.H3.INITIALIZED : n;
        }
        ec.default.track(eS.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), t8({ noiseCancellation: !1 });
    } finally {
        tm = !1;
    }
}
function rn() {
    return (0, ef.isWindows)() || (0, ef.isLinux)() || (0, ef.isMac)();
}
function rr() {
    !rn() || __OVERLAY__ || tm || tg
        ? (0, ef.isWeb)() && e$.supports(eP.AN.NOISE_CANCELLATION)
            ? ((tg = !0), r.emitChange())
            : (0, ef.isWeb)() && t8({ noiseCancellation: !1 })
        : ((tm = !0), rt());
}
function ri(e) {
    let { enabled: t } = e;
    ec.default.track(eS.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != ty ? ty : null,
        enabled: t,
    }),
        t8({ voiceFilterPlaybackEnabled: t });
}
function ra(e) {
    let { newVoiceFilterId: t } = e;
    t8({ mostRecentlyRequestedVoiceFilter: t }), e$.eachConnection((e) => e.setVoiceFilterId(t));
}
function ro() {
    t8({ mostRecentlyRequestedVoiceFilter: null });
}
function rs(e) {
    let { voiceFilterId: t } = e;
    (tv = ty), (tI = tO), (ty = t), (tO = null === t ? null : Date.now());
}
function rl(e) {
    let t = e.bypassEnabled;
    t8({ bypassSystemInputProcessing: t }), e$.setAudioInputBypassSystemProcessing(t), nU(e.location);
}
function rc(e) {
    ru(e.subsystem);
}
function ru(e) {
    e === eP.iA.AUTOMATIC
        ? (t8({ automaticAudioSubsystem: !0 }), rd())
        : (t8({ automaticAudioSubsystem: !1 }), e$.setAudioSubsystem(e));
}
function rd() {
    e$.queueAudioSubsystem(eP.iA.EXPERIMENTAL);
}
function rf(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && tW(i, null), null != t || null == n)) {
        th = !1;
        return;
    }
    if (th) return;
    th = !0;
    let a = tZ();
    (a.mute || a.deaf) &&
        (t8({
            deaf: !1,
            mute: !1,
        }),
        e$.eachConnection(tH));
}
function r_(e) {
    let { application: t } = e;
    e1.add(t.id);
}
function rp(e) {
    let { application: t } = e;
    e1.delete(t.id);
}
function rh(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (e3 = !1), e$.eachConnection(tH);
                break;
            case "video":
                tW(!1);
        }
}
function rm(e) {
    (e3 = e.enabled),
        e.unmute &&
            t8({
                mute: !1,
                deaf: !1,
            }),
        e$.eachConnection(tH);
}
function rg(e) {
    let { enabled: t } = e;
    et.Z.requestPermission(eC.Eu.CAMERA), tW(t);
}
function rE(e) {
    let { sourceId: t, applicationName: n, quality: i } = e;
    if (!(0, N.CY)() || null == I.Z) return !1;
    let a = null,
        s = null,
        l = eu.Z.getPidFromDesktopSource(t);
    ({ soundshareId: a, soundshareSession: s } = nc(l));
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
        (0, ef.isWindows)() && null != o.desktopSource.soundshareId && T.pn(o.desktopSource.soundshareId)),
        null != a && nu(a, s),
        (o = c);
    let u = tG(),
        d = tZ().videoHook;
    e$.setClipsSource({
        desktopDescription: {
            id: o.desktopSource.id,
            soundshareId: o.desktopSource.soundshareId,
            useVideoHook: d,
            useGraphicsCapture: t$(),
            useCaptureDeviceForEncode: !1,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: t1(),
            videoHookStaleFrameTimeoutMs: eH,
            graphicsCaptureStaleFrameTimeoutMs: eY,
            hdrCaptureMode: u,
        },
        quality: i,
        applicationName: n,
    });
}
function rb(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((o = null), e$.setClipsSource(null));
}
function ry(e) {
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
            (({ soundshareId: e, soundshareSession: r } = nc(c)), null != e && nu(e, r)),
            tY(s),
            tW(s === eP.Yn.STREAM && tr, {
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
            o = e === eP.Yn.STREAM && tr,
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
function rO(e) {
    let { section: t } = e;
    return t === eS.oAB.VOICE && t9(), !1;
}
function rv() {
    return e$.eachConnection(tQ), !1;
}
function rI(e) {
    let { enabled: t } = e,
        n = t8({ aecDumpEnabled: t });
    e$.setAecDump(n.aecDumpEnabled);
}
function rT(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (e0 = Object.values(eP.Yn).reduce((e, n) => {
        let r = n,
            i = eQ();
        return (e[r] = p().merge(i, t[r])), e;
    }, {})),
        y.K.set(ek, e0),
        t7();
}
function rS(e) {
    let { state: t } = e,
        n = L.Z.isEnabled();
    if (t === eS.$7l.BACKGROUND && tr && !n) (tu = !0), tW(!1);
    else {
        if (t !== eS.$7l.ACTIVE || !tu) return !1;
        (tu = !1), tW(!0);
    }
    return !0;
}
function rA(e) {
    e$.eachConnection((t) => t.setBitRate(e.bitrate));
}
function rC() {
    if ((!tr && null == a) || null != eO.Z.getRTCConnectionId()) return !1;
    tW(!1, null);
}
function rN() {
    return !!tS && ((tS = !1), !0);
}
function rR(e) {
    e$.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function rP(e) {
    let { settings: t } = e;
    e$.applyMediaFilterSettings(t).finally(() => {
        (tA = !1), r.emitChange();
    });
}
function rD() {
    tA = !0;
}
function rw() {
    tA = !1;
}
function rL(e) {
    tM = e.enabled;
}
class rx extends (u = E.ZP.Store) {
    initialize() {
        tJ(),
            t5(),
            rr(),
            nS(),
            (tL = {
                [eP.AN.VIDEO]: e$.supports(eP.AN.VIDEO),
                [eP.AN.DESKTOP_CAPTURE]: e$.supports(eP.AN.DESKTOP_CAPTURE),
                [eP.AN.HYBRID_VIDEO]: e$.supports(eP.AN.HYBRID_VIDEO),
            }),
            this.waitFor(eg.default, eE.Z, eb.Z, ey.Z, A.Z, w.Z, eO.Z, x.ZP, er.Z, eo.Z, eI.default, eT.Z, el.Z);
    }
    supports(e) {
        return e$.supports(e);
    }
    supportsInApp(e) {
        return tL[e] || e$.supports(e);
    }
    isSupported() {
        return e$.supported();
    }
    isNoiseSuppressionSupported() {
        return e$.supports(eP.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return re();
    }
    isNoiseCancellationError() {
        return tS;
    }
    isAutomaticGainControlSupported() {
        return e$.supports(eP.AN.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !t2() && (e$.supports(eP.AN.LEGACY_AUDIO_SUBSYSTEM) || e$.supports(eP.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return e$.supports(eP.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === e$.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return re();
    }
    isAecDumpSupported() {
        return e$.supports(eP.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return e$.supports(eP.AN.VIDEO) && e$.supports(eP.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        return (
            (null == (e = ey.Z.getChannel(tT)) ? void 0 : e.type) !== eS.d4z.GUILD_STAGE_VOICE &&
            eq &&
            W.Z.simulcastEnabled()
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
        return e3;
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
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.Yn.DEFAULT;
        return e === eP.Yn.DEFAULT && te;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.Yn.DEFAULT;
        return (
            !this.isEnabled() ||
            tZ(e).mute ||
            !et.Z.didHavePermission(eC.Eu.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eP.Yn.DEFAULT && tt)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return to;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        to = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && eb.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return tM;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.Yn.DEFAULT;
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
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.Yn.STREAM;
        return e4 === e && null != a;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.Yn.STREAM;
        return e4 === t && null != a && (null == (e = a.desktopSource) ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eP.Yn.DEFAULT;
        return e !== eg.default.getId() && (tZ(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return e$.supports(eP.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eP.Yn.DEFAULT;
        return null != (t = tZ(n).disabledLocalVideos[e]) && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eP.Yn.DEFAULT;
        return null != (t = tZ(n).videoToggleStateMap[e]) ? t : eS.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eP.Yn.DEFAULT;
        return t === eP.Yn.DEFAULT && tP.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.Yn.DEFAULT;
        return e === eP.Yn.DEFAULT && tP.size > 0;
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
        return e5;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eP.Yn.DEFAULT,
            n = tZ(t).localPans[e];
        return null != n ? n : eV;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eP.Yn.DEFAULT,
            n = t === eP.Yn.STREAM ? eP.Yh : eP.Qx,
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
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.Yn.DEFAULT;
        return tZ(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.Yn.DEFAULT;
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
                r === eS.pM4.PUSH_TO_TALK && e1.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nn(e8, tZ().inputDeviceId);
    }
    getOutputDeviceId() {
        return nn(e6, tZ().outputDeviceId);
    }
    getVideoDeviceId() {
        return nn(e7, tZ().videoDeviceId);
    }
    getInputDevices() {
        return e8;
    }
    getOutputDevices() {
        return e6;
    }
    getVideoDevices() {
        return e7;
    }
    getEchoCancellation() {
        let e = tZ();
        return eb.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return e$.supports(eP.AN.SIDECHAIN_COMPRESSION) && tZ().sidechainCompression;
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
        return eb.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tZ();
        return eb.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return tZ().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return tZ().noiseCancellation;
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
        return t3() && tZ().automaticAudioSubsystem ? eP.iA.AUTOMATIC : e$.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return e$.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return tZ().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eR._.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.Yn.DEFAULT;
        return tZ(e);
    }
    getState() {
        return {
            settingsByContext: e0,
            inputDevices: e8,
            outputDevices: e6,
            appSupported: tL,
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
        return ef.isPlatformEmbedded || this.getMode() !== eS.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        e$.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return e2;
    }
    getVideoHook() {
        return tZ().videoHook;
    }
    supportsVideoHook() {
        return e$.supports(eP.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tZ().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return (
            e$.supports(eP.AN.EXPERIMENTAL_SOUNDSHARE) &&
            m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eA.T6)
        );
    }
    supportsHookSoundshare() {
        return (
            (0, ef.isWindows)() &&
            e$.supports(eP.AN.SOUNDSHARE) &&
            m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eA.sA)
        );
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = tZ().useSystemScreensharePicker,
            n = (0, ef.isLinux)();
        return e && (null != t ? t : n);
    }
    supportsSystemScreensharePicker() {
        return e$.supports(eP.AN.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return tU;
    }
    getUseGamescopeCapture() {
        return tk;
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
        return tj;
    }
    setHasActiveCallKitCall(e) {
        tj = e;
    }
    supportsScreenSoundshare() {
        return (0, ef.isMac)()
            ? e$.supports(eP.AN.SOUNDSHARE) &&
                  m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eA.yG) &&
                  t1()
            : (0, ef.isWindows)()
              ? e$.supports(eP.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, ef.isLinux)() && e$.supports(eP.AN.SCREEN_SOUNDSHARE);
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
                (e.fetchDave = X.NJ.getCurrentConfig({
                    location: "MediaEngineStore fetchAsyncResources",
                }).loadWasmModule),
            e$.fetchAsyncResources(e)
        );
    }
    startDavePreload() {
        if (!tC && ((tC = !0), (0, ef.isWeb)())) {
            let e = { fetchDave: !0 };
            e$.fetchAsyncResources(e).catch((e) => {
                ej.warn("DAVE preload failed:", e), ep.Z.captureException(e);
            });
        }
    }
    getSupportedSecureFramesProtocolVersion() {
        if ((0, ef.isWeb)()) {
            let { useWasmModule: e } = X.NJ.getCurrentConfig({
                location: "MediaEngineStore getSupportedSecureFramesProtocolVersion",
            });
            if (!e) return 0;
        }
        let e = e$.getSupportedSecureFramesProtocolVersion();
        114 === e && (e = 1);
        let t = X.m8.getCurrentConfig({ location: "MediaEngineStore" }),
            n = X.Th.getConfig({ location: "MediaEngineStore" });
        return (t.canSupportDaveProtocol || (n.allowOptIn && er.Z.getPersistentCodesEnabled())) &&
            e >= t.protocolVersionFloor
            ? e
            : 0;
    }
    hasClipsSource() {
        return null != o;
    }
    getGpuBrand() {
        return tx;
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
ew(rx, "displayName", "MediaEngineStore");
let rj = (r = new rx(v.Z, {
    VOICE_CHANNEL_SELECT: rf,
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
    AUDIO_SET_INPUT_DEVICE: nD,
    AUDIO_SET_OUTPUT_DEVICE: nw,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: nx,
    AUDIO_SET_ECHO_CANCELLATION: nG,
    AUDIO_SET_SIDECHAIN_COMPRESSION: nB,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nZ,
    AUDIO_SET_LOOPBACK: nV,
    AUDIO_SET_NOISE_SUPPRESSION: nK,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nz,
    AUDIO_SET_NOISE_CANCELLATION: nq,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: nX,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: nJ,
    AUDIO_SET_DEBUG_LOGGING: n$,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: n0,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: nQ,
    MEDIA_ENGINE_SET_VIDEO_HOOK: n1,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: n3,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: n2,
    AUDIO_SET_ATTENUATION: n4,
    AUDIO_SET_QOS: n5,
    MEDIA_ENGINE_DEVICES: nj,
    AUDIO_VOLUME_CHANGE: nk,
    AUDIO_RESET: n8,
    AUDIO_INPUT_DETECTED: n6,
    AUDIO_SET_SUBSYSTEM: rc,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rl,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rm,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rg,
    MEDIA_ENGINE_PERMISSION: rh,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: ry,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nL,
    MEDIA_ENGINE_INTERACTION_REQUIRED: nM,
    USER_SETTINGS_MODAL_INIT: rO,
    USER_SETTINGS_MODAL_SET_SECTION: rO,
    CERTIFIED_DEVICES_SET: rv,
    RPC_APP_CONNECTED: r_,
    RPC_APP_DISCONNECTED: rp,
    OVERLAY_INITIALIZE: nf,
    APP_STATE_UPDATE: rS,
    SET_CHANNEL_BITRATE: rA,
    SET_VAD_PERMISSION: n7,
    SET_NATIVE_PERMISSION: n9,
    SET_CHANNEL_VIDEO_QUALITY_MODE: rR,
    MEDIA_ENGINE_SET_AEC_DUMP: rI,
    MEDIA_ENGINE_RESET_SETTINGS: rT,
    CHANNEL_DELETE: rC,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rN,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rP,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rD,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rw,
    USER_SETTINGS_PROTO_UPDATE: ny,
    CLIPS_INIT: rE,
    CLIPS_SETTINGS_UPDATE: rb,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rL,
    VOICE_FILTER_REQUEST_SWITCH: ra,
    VOICE_FILTER_LOOPBACK_TOGGLE: ri,
    VOICE_FILTER_APPLIED: rs,
    VOICE_FILTER_DOWNLOAD_FAILED: ro,
    VOICE_FILTER_APPLY_FAILED: ro,
}));
