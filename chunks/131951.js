let r, i, a, o, s, l, c;
n.d(t, { Z: () => rM }), n(388685), n(953529), n(457542), n(539854), n(642613), n(49124), n(337869);
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
    eZ = 0.5,
    eF = {
        left: 1,
        right: 1,
    },
    eV = 500,
    eH = 5 * eu.Z.Millis.SECOND,
    eY = -60,
    eW = 100,
    eK = 2 * eu.Z.Millis.SECOND,
    ez = !0,
    eq = 0;
function eX() {
    return {
        mode: eT.pM4.VOICE_ACTIVITY,
        modeOptions: {
            threshold: eY,
            autoThreshold: ed.isPlatformEmbedded || __OVERLAY__,
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
        inputVolume: eR.Qx,
        outputVolume: eR.Qx,
        inputDeviceId: eR.w5,
        outputDeviceId: eR.w5,
        videoDeviceId: eR.w5,
        qos: !1,
        qosMigrated: !1,
        videoHook: eJ.supports(eR.AN.VIDEO_HOOK),
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
let eQ = {
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
    eJ = (0, b.Mt)((0, b.jj)());
eM.enableNativeLogger(!0);
let e$ = {},
    e0 = new Set([eR.Yn.DEFAULT]),
    e1 = eJ.supports(eR.AN.AUTO_ENABLE),
    e2 = !1,
    e3 = eR.Yn.STREAM,
    e4 = performance.now(),
    e8 = { [eR.w5]: t9("No Input Devices") },
    e5 = { [eR.w5]: t9("No Output Devices") },
    e6 = { [eR.w5]: t9("No Video Devices") },
    e7 = !1,
    e9 = !1,
    te = !1,
    tt = !1,
    tn = !1,
    tr = eR.Av,
    ti = eR.Av,
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
ee.Z.hasPermission(eA.Eu.AUDIO, { showAuthorizationError: !1 }),
    ee.Z.hasPermission(eA.Eu.CAMERA, { showAuthorizationError: !1 });
let tN = !1,
    tR = new Set(),
    tP = tN,
    tD = new Set(),
    tw = {},
    tx = null,
    tL = !0,
    tM = !1,
    tk = !1,
    tj = !1;
function tU() {
    var e, t;
    return null != (t = null == (e = ev.default.getCurrentUser()) ? void 0 : e.isStaff()) && t
        ? "always"
        : ef.Z === g.R.CANARY
          ? "permittedDevicesOnly"
          : "never";
}
function tG() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eR.Yn.DEFAULT,
        t = e$[e];
    return null == t && ((t = eX()), (e$[e] = t)), t;
}
function tB() {
    var e, t, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eR.Yn.DEFAULT,
        i = tG(r),
        a = eQ[null != (e = i.activeInputProfile) ? e : eN._.CUSTOM],
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
function tZ(e) {
    var t, n;
    let r = tB(e.context),
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
            vadUseKrisp: r.modeOptions.vadUseKrisp && n9(),
            vadKrispActivationThreshold: null != (t = r.modeOptions.vadKrispActivationThreshold) ? t : eZ,
            vadLeading: r.modeOptions.vadLeading,
            vadTrailing: r.modeOptions.vadTrailing,
            vadDuringPreProcess: null != (n = r.modeOptions.vadDuringPreProcess) && n,
            pttReleaseDelay: Math.round(r.modeOptions.delay),
        });
}
function tF(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eR.Qx;
    return p().clamp(e, 0, t);
}
function tV(e) {
    let t = tB(e.context),
        n = !e1 || t.mute || t.deaf;
    e.context === eR.Yn.DEFAULT
        ? (n = n || e7 || e9 || te || !ee.Z.didHavePermission(eA.Eu.AUDIO))
        : e.context === eR.Yn.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eR.Yn.DEFAULT && S.Z.updateNativeMute();
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
            (null != s.desktopSource.soundshareId && (0, ed.isWindows)() && T.pn(s.desktopSource.soundshareId),
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
        tn && e === eR.w5 && ti === eR.w5 && tr !== eR.Av ? (e = tr) : (ti = e),
            (tr = (tn = i) ? nt(e6, e) : eR.Av),
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
                i = tJ(),
                a = i ? (t$() ? eS.zj : eS.ZM) : 0,
                s = (0, ed.isWindows)() && (0, Q.t)("updateVideo").enabled;
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
                        allowScreenCaptureKit: t0(),
                        videoHookStaleFrameTimeoutMs: eV,
                        graphicsCaptureStaleFrameTimeoutMs: eH,
                        hdrCaptureMode: t,
                        enableGlobalFramePoolLock: (0, H.T)({ location: "updateVideo" }).enabled,
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
function tK(e) {
    let t = (0, k.U)({
        location: "getAutomaticGainControlConfig",
        disable: !e,
    }).noiseCancellationConfig;
    return ew({ enabled: e }, t);
}
function tz(e, t) {
    e.setAutomaticGainControl(tK(t));
}
async function tq(e, t) {
    if ((0, ed.isIOS)() || (0, ed.isMac)()) {
        let e = await eJ.getSystemMicrophoneMode();
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
function tX(e) {
    let t = tB(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eE.Z.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eE.Z.hasNoiseSuppression(n) || t.noiseSuppression),
        tz(e, eE.Z.hasAutomaticGainControl(n) || t.automaticGainControl),
        tq(e, t.noiseCancellation),
        e.setVoiceFilterId(tb),
        (0, ed.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function tQ() {
    eJ.on(b.aB.Connection, (e) => {
        tZ(e), tV(e), tX(e);
        let t = tB();
        e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers), e.setQoS(t.qos);
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
            let t = nr(e5);
            e.setSoundshareDiscardRearChannels(t);
            let { simulcastEnabled: n, lqStreamBitrate: r } = Y.Z.getConfig();
            e.configureGoLiveSimulcast(n, r);
        }
        if (
            ((0, ed.isWindows)()
                ? (null == tx ? void 0 : tx.startsWith("NVIDIA")) || (null == tx ? void 0 : tx.startsWith("AMD"))
                    ? e.setExperimentFlag(eR.V8.SIGNAL_AV1, !0)
                    : e.setExperimentFlag(eR.V8.SIGNAL_AV1_DECODE, !0)
                : ((0, ed.isMac)() || (0, ed.isLinux)()) && e.setExperimentFlag(eR.V8.SIGNAL_AV1_DECODE, !0),
            (0, ed.isWindows)() && e.setExperimentFlag(eR.V8.SIGNAL_AV1_HARDWARE_DECODE, !0),
            (0, ed.isWeb)())
        ) {
            let { enabled: t } = (0, V.A)("MediaEngineStore");
            e.setExperimentFlag(eR.V8.BROWSER_HEVC, t);
        }
        if ((eJ.setHasFullbandPerformance((0, P.Z)()), e.setRemoteAudioHistory(1000), (0, C.Z)(r))) {
            let { enableViewerClipping: t } = J.Z.getCurrentConfig(
                { location: "f627ab_15" },
                { autoTrackExposure: !1 },
            );
            e.setViewerSideClip(t), e.setClipsKeyFrameInterval(eR.ux);
        }
        for (let n of ((t = tB(e.context)), e.setPostponeDecodeLevel(eW), Object.keys(t.localMutes)))
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
                        underlyingError: tW(e),
                    }),
                    (tT = !0),
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
                        underlyingError: tW(e),
                    }),
                    el.default.track(eT.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    v.Z.dispatch({
                        type: "AUDIO_SET_MODE",
                        context: eR.Yn.DEFAULT,
                        mode: eT.pM4.VOICE_ACTIVITY,
                        options: eL(ew({}, tB(eR.Yn.DEFAULT).modeOptions), { vadUseKrisp: !1 }),
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
            eJ.supports(eR.AN.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                eJ.setAsyncVideoInputDeviceInit((0, B.p)("setupMediaEngine").enabled);
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
                await ec.Z.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
            } catch (t) {
                "number" == typeof t.status && (e = t.status);
            }
            eM.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)),
                el.default.track(eT.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        eJ.on(b.aB.VideoInputInitialized, (e) => {
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
        eJ.on(b.aB.AudioInputInitialized, (e) => {
            el.default.track(eT.rMx.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * eu.Z.Millis.SECOND),
                rtc_connection_id: ey.Z.getRTCConnectionId(),
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
            el.default.track(eT.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                audio_device_module: e,
                code: t,
                device_name: n,
            });
        }),
        eJ.on(b.aB.VideoCodecError, (e) => {
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
            let t = rL(e);
            null !== t && el.default.track(eT.rMx.VOICE_QUEUE_METRICS, t);
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
        nV(),
        nY(),
        t3.reset(),
        (0, eO.q)().then((e) => {
            null != e && (tx = e.gpu_brand);
        }),
        eJ.on(b.aB.SystemMicrophoneModeChange, (e) => {
            eJ.eachConnection(tX);
        });
}
function tJ() {
    return (0, ed.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eS.c5);
}
function t$() {
    return (0, ed.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eS.sN);
}
function t0() {
    return (
        (0, ed.isMac)() &&
        eJ.supports(eR.AN.SCREEN_CAPTURE_KIT) &&
        m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eS.C7)
    );
}
function t1() {
    return (
        (0, ed.isWindows)() &&
        eJ.supports(eR.AN.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        eJ.supports(eR.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function t2() {
    return eJ.supports(eR.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
let t3 = new (class {
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
        !tf && ey.Z.getState() === eT.hes.RTC_CONNECTED && e.mode === eT.pM4.VOICE_ACTIVITY && e.silenceWarning
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
                                    e && (t_ = !0));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout,
                    ));
            });
    }
})();
function t4() {
    var e;
    let t = y.K.get("audio");
    null != t && (y.K.set(ek, { [eR.Yn.DEFAULT]: t }), y.K.remove("audio")),
        (e$ = null != (e = y.K.get(ek)) ? e : {}),
        p().each(e$, (e) => {
            if (
                (p().defaultsDeep(e, eX()),
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
                    (null == (t = e.modeOptions) ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = eY);
            }
            eJ.supports(eR.AN.SIDECHAIN_COMPRESSION) &&
                e.sidechainCompressionSettingVersion < eB &&
                ((e.sidechainCompressionSettingVersion = eB), (e.sidechainCompression = !0)),
                (0, ed.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== eG &&
                      ((e.ncUseKrispjsSettingVersion = eG), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== eU &&
                      ((e.ncUseKrispSettingVersion = eU), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
        }),
        t6();
}
function t8(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eR.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = tG(t);
    return Object.assign(r, e), !__OVERLAY__ && n && y.K.set(ek, e$), r;
}
function t5() {
    y.K.remove(ek), location.reload();
}
function t6() {
    let e = tB();
    eJ.setAudioInputDevice(e.inputDeviceId),
        eJ.setAudioOutputDevice(e.outputDeviceId),
        tY(),
        eJ.setInputVolume(e.inputVolume),
        eJ.setOutputVolume(e.outputVolume),
        eJ.setH264Enabled(ez),
        eJ.setAv1Enabled(ez),
        eJ.setH265Enabled(ez),
        eJ.setAecDump(e.aecDumpEnabled),
        eJ.setSidechainCompression(e.sidechainCompression),
        eJ.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        eJ.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing);
}
function t7() {
    e1 ||
        eJ.enable().then(() =>
            v.Z.dispatch({
                type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
                enabled: !0,
                unmute: !1,
            }),
        );
}
function t9(e) {
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
function ne(e, t) {
    if (0 === e.length) {
        let e = t9(t);
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
function nt(e, t) {
    var n, r;
    let i = null != (r = null != (n = e[t]) ? n : e[eR.w5]) ? r : p()(e).values().first();
    return null != i ? i.id : t;
}
function nn(e) {
    let t = e8;
    if (((e8 = ne(e, eP.intl.string(eP.t["/QIjDA"]))), !p().isEqual(e8, t))) {
        let e = tB(),
            t = nt(e8, e.inputDeviceId);
        eJ.setAudioInputDevice(t);
    }
}
function nr(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function ni(e) {
    eJ.eachConnection((t) => {
        t.context === eR.Yn.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function na(e) {
    let t = e5;
    if (((e5 = ne(e, eP.intl.string(eP.t.xlUg0v))), !p().isEqual(e5, t))) {
        let e = tB(),
            n = nt(e5, e.outputDeviceId);
        eJ.setAudioOutputDevice(n);
        let r = nr(t),
            i = nr(e5);
        r !== i && ni(i);
    }
}
function no(e) {
    tu = e.length > 0;
    let t = e6;
    if (((e6 = ne(e, eP.intl.string(eP.t.WKWARY))), tn && !p().isEqual(e6, t))) {
        var n;
        let e = void 0 !== e6[tr],
            r = tr === eR.w5 && (null == (n = t[eR.w5]) ? void 0 : n.disabled);
        tY(e || r);
    }
}
function ns() {
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
            { localMutes: s, localVolumes: l } = tB(i);
        for (let [e, t] of Object.entries(o))
            null == (0, er.Ky)(i, e) &&
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
        t8(
            {
                localMutes: s,
                localVolumes: l,
            },
            i,
        );
    }
}
function nl(e) {
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
function nc(e, t) {
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
function nu(e) {
    (i = e.sessionId), (e7 = !1), (tt = !1);
    let t = tB();
    if (
        (t1() && (t2() ? rc(eR.iA.AUTOMATIC) : t.automaticAudioSubsystem && ru()),
        eJ.supports(eR.AN.OFFLOAD_ADM_CONTROLS))
    ) {
        let e = !1;
        (0, ed.isDesktop)()
            ? (e = (0, U.E)({ location: "handleConnectionOpen" }).enabled)
            : ((0, ed.isIOS)() || (0, ed.isAndroid)()) && (e = (0, G.W)({ location: "handleConnectionOpen" }).enabled),
            eJ.setOffloadAdmControls(e);
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
              t8({ mostRecentlyRequestedVoiceFilter: null }))
            : n(358820).r5()),
        ns();
}
function nd(e) {
    let { mediaEngineState: t } = e;
    (e$ = t.settingsByContext),
        (e8 = t.inputDevices),
        (e5 = t.outputDevices),
        (tw = t.appSupported),
        (tm = t.krispModuleLoaded),
        (s = t.krispVersion),
        (e3 = t.goLiveContext);
}
function nf() {
    i = null;
}
function n_() {
    if ((0, ed.isWeb)()) {
        let e = q.NJ.getCurrentConfig({ location: "MediaEngineStore handlePostConnectionOpen" });
        e.loadWasmModule && e.preload && r.startDavePreload();
    }
    return !1;
}
function np(e) {
    switch (e.state) {
        case eT.hes.CONNECTING:
            t7();
            break;
        case eT.hes.RTC_CONNECTING:
            (tf = !1), (t_ = !1);
            break;
        case eT.hes.RTC_CONNECTED:
            tY();
            break;
        case eT.hes.DISCONNECTED:
            nI(), nT();
    }
    t3.update();
}
function nh(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (e7 = t.mute || t.suppress), (tt = t.deaf), eJ.eachConnection(tV);
            let e = null != t.guildId && null != t.channelId && null != tI && tI !== t.channelId,
                n = !tp && null == t.channelId;
            return tY(!e && !n && tn), (tI = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== em.default.getId() || null != ey.Z.getChannelId() || tY(!1, null), e;
    }, !1);
}
function nm(e) {
    let { mute: t } = e;
    (e9 = t), eJ.eachConnection(tV);
}
function ng(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = tB(t);
    if (t === eR.Yn.DEFAULT && (ee.Z.requestPermission(eA.Eu.AUDIO), te)) return !1;
    (r = !i && !r) || (i = !1),
        n || (ta = !0),
        t8(
            {
                mute: r,
                deaf: i,
            },
            t,
        ),
        eJ.eachConnection(tV);
}
function nE(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    t8({ mute: n }, t), r || (ta = !0), eJ.eachConnection(tV);
}
function nb(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== eC.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    ns(!0);
}
function ny(e) {
    let { context: t } = e;
    t8({ deaf: !tB(t).deaf }, t), eJ.eachConnection(tV);
}
function nO(e) {
    let { context: t, userId: n } = e;
    if (n === em.default.getId()) return;
    let { localMutes: r } = tB(t);
    r[n] ? delete r[n] : (r[n] = !0),
        t8({ localMutes: r }, t),
        eJ.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nv(e) {
    var t, n, r, i, a, o, s;
    let { context: l, userId: c, videoToggleState: u, persist: d, isAutomatic: _ } = e;
    f()(!(d && _), "These are not allowed to both be true.");
    let p = u === eT.ZUi.DISABLED,
        { disabledLocalVideos: h } = tB(l),
        m = null != (t = h[c]) && t,
        g = tR.has(c),
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
    let { videoToggleStateMap: I } = tB(l);
    if (
        (I[c] === eT.ZUi.AUTO_PROBING &&
            u === eT.ZUi.AUTO_ENABLED &&
            (0, $.Z)(c, p ? eR.fC.AUTO_DISABLE : eR.fC.AUTO_ENABLE, E),
        (I[c] = u),
        t8({ videoToggleStateMap: I }, l, d),
        u === eT.ZUi.AUTO_PROBING
            ? null == (n = ey.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, !0)
            : null == (r = ey.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, !1),
        tP ||
            (eM.info("isAutoDisableAllowed=".concat(tP, " - disabling VideoHealthManager")),
            null == (a = ey.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()),
        O)
    ) {
        if ((!p && !g) || (p && !tP)) return;
        (0, $.Z)(c, p ? eR.fC.AUTO_DISABLE : eR.fC.AUTO_ENABLE, E), p ? tR.add(c) : tR.delete(c);
    } else
        v &&
            (g && !p
                ? (eM.info("disallowing auto-disable for this session because of manual override by user"),
                  (tP = !1),
                  null == (s = ey.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(),
                  (0, $.Z)(c, eR.fC.MANUAL_REENABLE, E))
                : (0, $.Z)(c, p ? eR.fC.MANUAL_DISABLE : eR.fC.MANUAL_ENABLE, E));
    y && !p && tR.delete(c),
        p ? (h[c] = !0) : delete h[c],
        t8({ disabledLocalVideos: h }, l, d),
        eJ.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(c, null != (t = h[c]) && t);
        }, l);
}
function nI() {
    if (0 === tR.size) return;
    let e = eR.Yn.DEFAULT,
        { disabledLocalVideos: t } = tB(e);
    tR.forEach((n) => {
        f()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            eJ.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tR.clear(),
        t8({ disabledLocalVideos: t }, e, !1);
}
function nT() {
    let e = eR.Yn.DEFAULT,
        { videoToggleStateMap: t } = tB(e);
    for (let [e, n] of Object.entries(t)) n === eT.ZUi.AUTO_PROBING && delete t[e];
    t8({ videoToggleStateMap: t }, e, !1);
}
function nS(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === em.default.getId()) return;
    let i = t === eR.Yn.STREAM ? eR.Yh : eR.Qx,
        { localVolumes: a } = tB(t);
    r === i ? delete a[n] : (a[n] = r), t8({ localVolumes: a }, t), eJ.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function nA(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: a } = tB(t);
    (a[n] = {
        left: r,
        right: i,
    }),
        t8({ localPans: a }, t),
        eJ.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function nC(e) {
    let { context: t, mode: n, options: r } = e;
    t8(
        {
            mode: n,
            modeOptions: r,
        },
        t,
    ),
        eJ.eachConnection(tZ),
        t3.update();
}
function nN(e) {
    let { volume: t } = e;
    t8({ inputVolume: tF(t) }), eJ.setInputVolume(t);
}
function nR(e) {
    let { volume: t } = e;
    t8({ outputVolume: t }), eJ.setOutputVolume(t);
}
function nP(e) {
    let { id: t } = e;
    (t = nt(e8, t)), (e4 = performance.now()), t8({ inputDeviceId: t }), eJ.setAudioInputDevice(t);
}
function nD(e) {
    let { id: t } = e;
    t8({ outputDeviceId: (t = nt(e5, t)) }), eJ.setAudioOutputDevice(t);
}
function nw(e) {
    let { id: t } = e;
    t8({ videoDeviceId: (t = nt(e6, t)) }), tY();
}
function nx(e) {
    let { inputProfile: t } = e;
    t8({ activeInputProfile: t });
    let n = tB();
    eJ.eachConnection((e) => {
        tZ(e),
            tz(e, n.automaticGainControl),
            e.setEchoCancellation(n.echoCancellation),
            tq(e, n.noiseCancellation),
            e.setNoiseSuppression(n.noiseSuppression);
    }),
        eJ.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        t3.update(),
        nH();
}
function nL(e) {
    return e2 !== e.required && ((e2 = e.required), e.required || eJ.interact(), !0);
}
function nM(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    nn(t), na(n), no(r);
}
function nk(e) {
    let { inputVolume: t, outputVolume: n } = e;
    t8({
        inputVolume: tF(t),
        outputVolume: n,
    });
}
function nj(e) {
    var t;
    let n = tB(),
        r = eJ.getAudioSubsystem(),
        i = eJ.getAudioLayer(),
        a = nt(e8, n.inputDeviceId),
        o = null == (t = e8[a]) ? void 0 : t.name;
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
function nU(e) {
    let t = t8({ echoCancellation: e.enabled });
    eJ.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nH(), nj(e.location);
}
function nG(e) {
    nZ(e.enabled);
}
function nB(e) {
    let t = t8({ sidechainCompressionStrength: e.strength });
    eJ.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function nZ(e) {
    let t = t8({ sidechainCompression: e });
    eJ.setSidechainCompression(t.sidechainCompression);
}
function nF(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tD.add(n) : tD.delete(n), nV(), nH();
}
function nV() {
    let e = !tD.has("voice_filter_preview") && !tD.has("mic_test");
    eJ.setMaybePreprocessMute(e);
}
function nH() {
    let e = tB(),
        t = tD.size > 0,
        n = e.inputDeviceId,
        r = eE.Z.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        a = eE.Z.hasNoiseSuppression(n) || e.noiseSuppression,
        o = tK(eE.Z.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation,
        l = null !== tb,
        c = tD.has("voice_filter") && 1 === tD.size;
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
async function nY() {
    var e, t, n, r;
    if (!eJ.supports(eR.AN.VAAPI)) return;
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
        ((tj = !0), (tk = eJ.supports(eR.AN.GAMESCOPE_CAPTURE)));
}
function nW(e) {
    let t = t8({ noiseSuppression: e.enabled });
    eJ.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nH(), nj(e.location);
}
function nK(e) {
    let t = t8({ automaticGainControl: e.enabled });
    eJ.eachConnection((e) => tz(e, t.automaticGainControl)), nH(), nj(e.location);
}
function nz(e) {
    let t = t8({ noiseCancellation: e.enabled });
    eJ.eachConnection((e) => tq(e, t.noiseCancellation)), nH(), nj(e.location);
}
function nq(e) {
    et.Z.setKrispModelOverride(e.model), (c = e.model), nH();
}
function nX(e) {
    var t;
    (0, ed.isWeb)() || ((tE = e.enabled), null == (t = eJ.setNoiseCancellationEnableStats) || t.call(eJ, e.enabled));
}
function nQ(e) {
    t8({ silenceWarning: e.enabled }), t3.update();
}
function nJ(e) {
    eJ.setDebugLogging(e.enabled);
}
function n$(e) {
    let { level: t } = e;
    (l = t), et.Z.setKrispSuppressionLevel(t);
}
function n0(e) {
    t8({ videoHook: e.enabled });
}
function n1(e) {
    t8({ experimentalSoundshare2: e.enabled });
}
function n2(e) {
    let { enabled: t } = e;
    t8({ useSystemScreensharePicker: t });
}
function n3(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = t8({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r,
        });
    eJ.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function n4(e) {
    let { enabled: t } = e;
    t8({ qos: t }), eJ.eachConnection((e) => e.setQoS(t));
}
function n8() {
    t5();
}
function n5(e) {
    let { inputDetected: t } = e;
    (td = t), !tf && td && ((tf = !0), t3.update());
}
function n6(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === te) return !1;
    (te = n), eJ.eachConnection(tV);
}
function n7(e) {
    let { state: t, permissionType: n } = e,
        r = t === eA.PQ.ACCEPTED;
    switch (n) {
        case eA.Eu.AUDIO:
            (tC = !0), eJ.eachConnection(tV);
            break;
        case eA.Eu.CAMERA:
            !r && tn && tY(!1);
            break;
        default:
            return !1;
    }
}
function n9() {
    return tm || !1;
}
async function re() {
    try {
        var e, t, n, i;
        await ep.ZP.ensureModule("discord_krisp");
        let a = ep.ZP.requireModule("discord_krisp");
        (tm = !0),
            (s = null == (e = a.getSdkVersion) ? void 0 : e.call(a)),
            (l = null != (i = null == (t = a.getSuppressionLevel) ? void 0 : t.call(a)) ? i : 100),
            null == (n = a.getNcModels) ||
                n.call(a).then((e) => {
                    (tg = e), r.emitChange();
                }),
            r.emitChange();
    } catch (t) {
        eM.warn("Failed to load Krisp module: ".concat(t.message)), e_.Z.captureException(t);
        let e = eR.H3.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eR.H3.INITIALIZED : n;
        }
        el.default.track(eT.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), t8({ noiseCancellation: !1 });
    } finally {
        th = !1;
    }
}
function rt() {
    return (0, ed.isWindows)() || (0, ed.isLinux)() || (0, ed.isMac)();
}
function rn() {
    !rt() || __OVERLAY__ || th || tm
        ? (0, ed.isWeb)() && eJ.supports(eR.AN.NOISE_CANCELLATION)
            ? ((tm = !0), r.emitChange())
            : (0, ed.isWeb)() && t8({ noiseCancellation: !1 })
        : ((th = !0), re());
}
function rr(e) {
    let { enabled: t } = e;
    el.default.track(eT.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != tb ? tb : null,
        enabled: t,
    }),
        t8({ voiceFilterPlaybackEnabled: t });
}
function ri(e) {
    let { newVoiceFilterId: t } = e;
    t8({ mostRecentlyRequestedVoiceFilter: t }), eJ.eachConnection((e) => e.setVoiceFilterId(t));
}
function ra() {
    t8({ mostRecentlyRequestedVoiceFilter: null });
}
function ro(e) {
    let { voiceFilterId: t } = e;
    (tO = tb), (tv = ty), (tb = t), (ty = null === t ? null : Date.now());
}
function rs(e) {
    let t = e.bypassEnabled;
    t8({ bypassSystemInputProcessing: t }), eJ.setAudioInputBypassSystemProcessing(t), nj(e.location);
}
function rl(e) {
    rc(e.subsystem);
}
function rc(e) {
    e === eR.iA.AUTOMATIC
        ? (t8({ automaticAudioSubsystem: !0 }), ru())
        : (t8({ automaticAudioSubsystem: !1 }), eJ.setAudioSubsystem(e));
}
function ru() {
    eJ.queueAudioSubsystem(eR.iA.EXPERIMENTAL);
}
function rd(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && tY(i, null), null != t || null == n)) {
        tp = !1;
        return;
    }
    if (tp) return;
    tp = !0;
    let a = tB();
    (a.mute || a.deaf) &&
        (t8({
            deaf: !1,
            mute: !1,
        }),
        eJ.eachConnection(tV));
}
function rf(e) {
    let { application: t } = e;
    e0.add(t.id);
}
function r_(e) {
    let { application: t } = e;
    e0.delete(t.id);
}
function rp(e) {
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
function rh(e) {
    (e1 = e.enabled),
        e.unmute &&
            t8({
                mute: !1,
                deaf: !1,
            }),
        eJ.eachConnection(tV);
}
function rm(e) {
    let { enabled: t } = e;
    ee.Z.requestPermission(eA.Eu.CAMERA), tY(t);
}
function rg(e) {
    let { sourceId: t, applicationName: n, quality: i } = e;
    if (!(0, N.CY)() || null == I.Z) return !1;
    let a = null,
        s = null,
        l = ec.Z.getPidFromDesktopSource(t);
    ({ soundshareId: a, soundshareSession: s } = nl(l));
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
        (eJ.setClipsSource(null),
        (0, ed.isWindows)() && null != o.desktopSource.soundshareId && T.pn(o.desktopSource.soundshareId)),
        null != a && nc(a, s),
        (o = c);
    let u = tU(),
        d = tB().videoHook;
    eJ.setClipsSource({
        desktopDescription: {
            id: o.desktopSource.id,
            soundshareId: o.desktopSource.soundshareId,
            useVideoHook: d,
            useGraphicsCapture: tJ(),
            useCaptureDeviceForEncode: !1,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: t0(),
            videoHookStaleFrameTimeoutMs: eV,
            graphicsCaptureStaleFrameTimeoutMs: eH,
            hdrCaptureMode: u,
        },
        quality: i,
        applicationName: n,
    });
}
function rE(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((o = null), eJ.setClipsSource(null));
}
function rb(e) {
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
            (({ soundshareId: e, soundshareSession: r } = nl(c)), null != e && nc(e, r)),
            tH(s),
            tY(s === eR.Yn.STREAM && tn, {
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
            o = e === eR.Yn.STREAM && tn,
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
function ry(e) {
    let { section: t } = e;
    return t === eT.oAB.VOICE && t7(), !1;
}
function rO() {
    return eJ.eachConnection(tX), !1;
}
function rv(e) {
    let { enabled: t } = e,
        n = t8({ aecDumpEnabled: t });
    eJ.setAecDump(n.aecDumpEnabled);
}
function rI(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (e$ = Object.values(eR.Yn).reduce((e, n) => {
        let r = n,
            i = eX();
        return (e[r] = p().merge(i, t[r])), e;
    }, {})),
        y.K.set(ek, e$),
        t6();
}
function rT(e) {
    let { state: t } = e,
        n = x.Z.isEnabled();
    if (t === eT.$7l.BACKGROUND && tn && !n) (tc = !0), tY(!1);
    else {
        if (t !== eT.$7l.ACTIVE || !tc) return !1;
        (tc = !1), tY(!0);
    }
    return !0;
}
function rS(e) {
    eJ.eachConnection((t) => t.setBitRate(e.bitrate));
}
function rA() {
    if ((!tn && null == a) || null != ey.Z.getRTCConnectionId()) return !1;
    tY(!1, null);
}
function rC() {
    return !!tT && ((tT = !1), !0);
}
function rN(e) {
    eJ.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function rR(e) {
    let { settings: t } = e;
    eJ.applyMediaFilterSettings(t).finally(() => {
        (tS = !1), r.emitChange();
    });
}
function rP() {
    tS = !0;
}
function rD() {
    tS = !1;
}
function rw(e) {
    tL = e.enabled;
}
class rx extends (u = E.ZP.Store) {
    initialize() {
        tQ(),
            t4(),
            rn(),
            nT(),
            (tw = {
                [eR.AN.VIDEO]: eJ.supports(eR.AN.VIDEO),
                [eR.AN.DESKTOP_CAPTURE]: eJ.supports(eR.AN.DESKTOP_CAPTURE),
                [eR.AN.HYBRID_VIDEO]: eJ.supports(eR.AN.HYBRID_VIDEO),
            }),
            this.waitFor(em.default, eg.Z, eE.Z, eb.Z, A.Z, w.Z, ey.Z, L.ZP, en.Z, ea.Z, ev.default, eI.Z, es.Z);
    }
    supports(e) {
        return eJ.supports(e);
    }
    supportsInApp(e) {
        return tw[e] || eJ.supports(e);
    }
    isSupported() {
        return eJ.supported();
    }
    isNoiseSuppressionSupported() {
        return eJ.supports(eR.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return n9();
    }
    isNoiseCancellationError() {
        return tT;
    }
    isAutomaticGainControlSupported() {
        return eJ.supports(eR.AN.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !t2() && (eJ.supports(eR.AN.LEGACY_AUDIO_SUBSYSTEM) || eJ.supports(eR.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return eJ.supports(eR.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === eJ.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return n9();
    }
    isAecDumpSupported() {
        return eJ.supports(eR.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return eJ.supports(eR.AN.VIDEO) && eJ.supports(eR.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        return (
            (null == (e = eb.Z.getChannel(tI)) ? void 0 : e.type) !== eT.d4z.GUILD_STAGE_VOICE &&
            ez &&
            Y.Z.simulcastEnabled()
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
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eR.Yn.DEFAULT;
        return e === eR.Yn.DEFAULT && e9;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eR.Yn.DEFAULT;
        return (
            !this.isEnabled() ||
            tB(e).mute ||
            !ee.Z.didHavePermission(eA.Eu.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eR.Yn.DEFAULT && te)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return ta;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        ta = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eR.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && eE.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return tL;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eR.Yn.DEFAULT;
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
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eR.Yn.STREAM;
        return e3 === e && null != a;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eR.Yn.STREAM;
        return e3 === t && null != a && (null == (e = a.desktopSource) ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eR.Yn.DEFAULT;
        return e !== em.default.getId() && (tB(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return eJ.supports(eR.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eR.Yn.DEFAULT;
        return null != (t = tB(n).disabledLocalVideos[e]) && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eR.Yn.DEFAULT;
        return null != (t = tB(n).videoToggleStateMap[e]) ? t : eT.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eR.Yn.DEFAULT;
        return t === eR.Yn.DEFAULT && tR.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eR.Yn.DEFAULT;
        return e === eR.Yn.DEFAULT && tR.size > 0;
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
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eR.Yn.DEFAULT,
            n = tB(t).localPans[e];
        return null != n ? n : eF;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eR.Yn.DEFAULT,
            n = t === eR.Yn.STREAM ? eR.Yh : eR.Qx,
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
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eR.Yn.DEFAULT;
        return tB(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eR.Yn.DEFAULT;
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
                r === eT.pM4.PUSH_TO_TALK && e0.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nt(e8, tB().inputDeviceId);
    }
    getOutputDeviceId() {
        return nt(e5, tB().outputDeviceId);
    }
    getVideoDeviceId() {
        return nt(e6, tB().videoDeviceId);
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
        return eE.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return eJ.supports(eR.AN.SIDECHAIN_COMPRESSION) && tB().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return tB().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return tB().h265Enabled;
    }
    getLoopback() {
        return tD.size > 0;
    }
    getLoopbackReasons() {
        return tD;
    }
    getNoiseSuppression() {
        let e = tB();
        return eE.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tB();
        return eE.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return tB().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return tB().noiseCancellation;
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
        return t1() && tB().automaticAudioSubsystem ? eR.iA.AUTOMATIC : eJ.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return eJ.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return tB().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eN._.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eR.Yn.DEFAULT;
        return tB(e);
    }
    getState() {
        return {
            settingsByContext: e$,
            inputDevices: e8,
            outputDevices: e5,
            appSupported: tw,
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
        return ed.isPlatformEmbedded || this.getMode() !== eT.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
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
        return eJ.supports(eR.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tB().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return (
            eJ.supports(eR.AN.EXPERIMENTAL_SOUNDSHARE) &&
            m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eS.T6)
        );
    }
    supportsHookSoundshare() {
        return (
            (0, ed.isWindows)() &&
            eJ.supports(eR.AN.SOUNDSHARE) &&
            m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eS.sA)
        );
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = tB().useSystemScreensharePicker,
            n = (0, ed.isLinux)();
        return e && (null != t ? t : n);
    }
    supportsSystemScreensharePicker() {
        return eJ.supports(eR.AN.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return tj;
    }
    getUseGamescopeCapture() {
        return tk;
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
        return (0, ed.isMac)()
            ? eJ.supports(eR.AN.SOUNDSHARE) &&
                  m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eS.yG) &&
                  t0()
            : (0, ed.isWindows)()
              ? eJ.supports(eR.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, ed.isLinux)() && eJ.supports(eR.AN.SCREEN_SOUNDSHARE);
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
            eJ.fetchAsyncResources(e)
        );
    }
    startDavePreload() {
        if (!tA && ((tA = !0), (0, ed.isWeb)())) {
            let e = { fetchDave: !0 };
            eJ.fetchAsyncResources(e).catch((e) => {
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
        let e = eJ.getSupportedSecureFramesProtocolVersion();
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
        return tx;
    }
}
function rL(e) {
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
eD(rx, "displayName", "MediaEngineStore");
let rM = (r = new rx(v.Z, {
    VOICE_CHANNEL_SELECT: rd,
    VOICE_STATE_UPDATES: nh,
    CONNECTION_OPEN: nu,
    CONNECTION_CLOSED: nf,
    POST_CONNECTION_OPEN: n_,
    RTC_CONNECTION_STATE: np,
    AUDIO_SET_TEMPORARY_SELF_MUTE: nm,
    AUDIO_TOGGLE_SELF_MUTE: ng,
    AUDIO_SET_SELF_MUTE: nE,
    AUDIO_TOGGLE_SELF_DEAF: ny,
    AUDIO_TOGGLE_LOCAL_MUTE: nO,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: nv,
    AUDIO_SET_LOCAL_VOLUME: nS,
    AUDIO_SET_LOCAL_PAN: nA,
    AUDIO_SET_MODE: nC,
    AUDIO_SET_INPUT_VOLUME: nN,
    AUDIO_SET_OUTPUT_VOLUME: nR,
    AUDIO_SET_INPUT_DEVICE: nP,
    AUDIO_SET_OUTPUT_DEVICE: nD,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: nx,
    AUDIO_SET_ECHO_CANCELLATION: nU,
    AUDIO_SET_SIDECHAIN_COMPRESSION: nG,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nB,
    AUDIO_SET_LOOPBACK: nF,
    AUDIO_SET_NOISE_SUPPRESSION: nW,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nK,
    AUDIO_SET_NOISE_CANCELLATION: nz,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: nq,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: nQ,
    AUDIO_SET_DEBUG_LOGGING: nJ,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: n$,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: nX,
    MEDIA_ENGINE_SET_VIDEO_HOOK: n0,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: n1,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: n2,
    AUDIO_SET_ATTENUATION: n3,
    AUDIO_SET_QOS: n4,
    MEDIA_ENGINE_DEVICES: nM,
    AUDIO_VOLUME_CHANGE: nk,
    AUDIO_RESET: n8,
    AUDIO_INPUT_DETECTED: n5,
    AUDIO_SET_SUBSYSTEM: rl,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rs,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rh,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rm,
    MEDIA_ENGINE_PERMISSION: rp,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rb,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nw,
    MEDIA_ENGINE_INTERACTION_REQUIRED: nL,
    USER_SETTINGS_MODAL_INIT: ry,
    USER_SETTINGS_MODAL_SET_SECTION: ry,
    CERTIFIED_DEVICES_SET: rO,
    RPC_APP_CONNECTED: rf,
    RPC_APP_DISCONNECTED: r_,
    OVERLAY_INITIALIZE: nd,
    APP_STATE_UPDATE: rT,
    SET_CHANNEL_BITRATE: rS,
    SET_VAD_PERMISSION: n6,
    SET_NATIVE_PERMISSION: n7,
    SET_CHANNEL_VIDEO_QUALITY_MODE: rN,
    MEDIA_ENGINE_SET_AEC_DUMP: rv,
    MEDIA_ENGINE_RESET_SETTINGS: rI,
    CHANNEL_DELETE: rA,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rC,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rR,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rP,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rD,
    USER_SETTINGS_PROTO_UPDATE: nb,
    CLIPS_INIT: rg,
    CLIPS_SETTINGS_UPDATE: rE,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rw,
    VOICE_FILTER_REQUEST_SWITCH: ri,
    VOICE_FILTER_LOOPBACK_TOGGLE: rr,
    VOICE_FILTER_APPLIED: ro,
    VOICE_FILTER_DOWNLOAD_FAILED: ra,
    VOICE_FILTER_APPLY_FAILED: ra,
}));
