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
    N = n(710845),
    R = n(535911),
    P = n(458725),
    D = n(353926),
    w = n(646047),
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
    q = n(441167),
    X = n(986855),
    Q = n(338336),
    J = n(751571),
    $ = n(311473),
    ee = n(725380),
    et = n(581883),
    en = n(875527),
    er = n(420439),
    ei = n(626135),
    ea = n(12647),
    eo = n(70956),
    es = n(358085),
    el = n(747268),
    ec = n(960048),
    eu = n(998502),
    ed = n(13140),
    ef = n(314897),
    e_ = n(967368),
    ep = n(463395),
    eh = n(592125),
    em = n(19780),
    eg = n(704806),
    eE = n(594174),
    eb = n(631768),
    ey = n(981631),
    eO = n(70722),
    ev = n(761274),
    eI = n(526761),
    eT = n(345655),
    eS = n(65154),
    eA = n(388032);
function eC(e, t, n) {
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
function eN(e) {
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
                eC(e, t, n[t]);
            });
    }
    return e;
}
function eR(e, t) {
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
function eP(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eR(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eD = new N.Z("MediaEngineStore"),
    ew = "MediaEngineStore",
    eL = 4,
    ex = 1,
    eM = 1,
    ek = 1,
    ej = 1,
    eU = 0.5,
    eG = {
        left: 1,
        right: 1,
    },
    eB = 500,
    eZ = 5 * eo.Z.Millis.SECOND,
    eF = -60,
    eV = 100,
    eH = 2 * eo.Z.Millis.SECOND,
    eY = !0,
    eW = 0;
function eK() {
    return {
        mode: ey.pM4.VOICE_ACTIVITY,
        modeOptions: {
            threshold: eF,
            autoThreshold: es.isPlatformEmbedded || __OVERLAY__,
            vadUseKrisp: !0,
            vadKrispActivationThreshold: eU,
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
        inputVolume: eS.Qx,
        outputVolume: eS.Qx,
        inputDeviceId: eS.w5,
        outputDeviceId: eS.w5,
        videoDeviceId: eS.w5,
        qos: !1,
        qosMigrated: !1,
        videoHook: eq.supports(eS.AN.VIDEO_HOOK),
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
            mode: ey.pM4.VOICE_ACTIVITY,
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
    eQ = new Set([eS.Yn.DEFAULT]),
    eJ = eq.supports(eS.AN.AUTO_ENABLE),
    e$ = !1,
    e0 = eS.Yn.STREAM,
    e1 = performance.now(),
    e3 = { [eS.w5]: t6("No Input Devices") },
    e2 = { [eS.w5]: t6("No Output Devices") },
    e4 = { [eS.w5]: t6("No Video Devices") },
    e8 = !1,
    e5 = !1,
    e6 = !1,
    e7 = !1,
    e9 = !1,
    te = eS.Av,
    tt = eS.Av,
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
J.Z.hasPermission(ev.Eu.AUDIO, { showAuthorizationError: !1 }),
    J.Z.hasPermission(ev.Eu.CAMERA, { showAuthorizationError: !1 });
let tS = !1,
    tA = new Set(),
    tC = tS,
    tN = new Set(),
    tR = {},
    tP = null,
    tD = !0,
    tw = !1,
    tL = !1,
    tx = !1;
function tM() {
    var e, t;
    return null != (t = null == (e = eE.default.getCurrentUser()) ? void 0 : e.isStaff()) && t
        ? "always"
        : el.Z === g.R.CANARY
          ? "permittedDevicesOnly"
          : "never";
}
function tk() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.Yn.DEFAULT,
        t = eX[e];
    return null == t && ((t = eK()), (eX[e] = t)), t;
}
function tj() {
    var e, t, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.Yn.DEFAULT,
        i = tk(r),
        a = ez[null != (e = i.activeInputProfile) ? e : eT._.CUSTOM],
        o = eN({}, null != (t = i.modeOptions) ? t : {}, null != (n = a.modeOptions) ? n : {});
    if (
        (null == o.vadDuringPreProcess && (o.vadDuringPreProcess = (0, z.C)({ location: "getSettings" }).enabled),
        (null == o.vadKrispActivationThreshold && !0 === a.automaticGainControl) || !0 === i.automaticGainControl)
    ) {
        let e = (0, M.U)({ location: "getSettings" });
        null != e.vadKrispActivationThreshold && (o.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return eP(eN({}, i, a), { modeOptions: o });
}
function tU(e) {
    var t, n;
    let r = tj(e.context);
    e.setInputMode(r.mode, {
        vadThreshold: r.modeOptions.threshold,
        vadAutoThreshold: r.modeOptions.autoThreshold,
        vadUseKrisp: r.modeOptions.vadUseKrisp && n7(),
        vadKrispActivationThreshold: null != (t = r.modeOptions.vadKrispActivationThreshold) ? t : eU,
        vadLeading: r.modeOptions.vadLeading,
        vadTrailing: r.modeOptions.vadTrailing,
        vadDuringPreProcess: null != (n = r.modeOptions.vadDuringPreProcess) && n,
        pttReleaseDelay: Math.round(r.modeOptions.delay),
    });
}
function tG(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eS.Qx;
    return p().clamp(e, 0, t);
}
function tB(e) {
    let t = tj(e.context),
        n = !eJ || t.mute || t.deaf;
    e.context === eS.Yn.DEFAULT
        ? (n = n || e8 || e5 || e6 || !J.Z.didHavePermission(ev.Eu.AUDIO))
        : e.context === eS.Yn.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eS.Yn.DEFAULT && S.Z.updateNativeMute();
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
            (null != s.desktopSource.soundshareId && (0, es.isWindows)() && T.pn(s.desktopSource.soundshareId),
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
        e9 && e === eS.w5 && tt === eS.w5 && te !== eS.Av ? (e = te) : (tt = e),
            (te = (e9 = i) ? t9(e4, e) : eS.Av),
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
                i = tX(),
                a = i ? (tQ() ? eO.zj : eO.ZM) : 0;
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
                        allowScreenCaptureKit: tJ(),
                        videoHookStaleFrameTimeoutMs: eB,
                        graphicsCaptureStaleFrameTimeoutMs: eZ,
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
        case eS.H3.CPU_OVERUSE:
            return P.Nk.NoiseCancellerCpuOveruse;
        case eS.H3.FAILED:
            return P.Nk.NoiseCancellerFailed;
        case eS.H3.VAD_CPU_OVERUSE:
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
    return eN({ enabled: e }, t);
}
function tY(e, t) {
    e.setAutomaticGainControl(tH(t));
}
async function tW(e, t) {
    if ((0, es.isIOS)() || (0, es.isMac)()) {
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
        (e.setEchoCancellation(ep.Z.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(ep.Z.hasNoiseSuppression(n) || t.noiseSuppression),
        tY(e, ep.Z.hasAutomaticGainControl(n) || t.automaticGainControl),
        tW(e, t.noiseCancellation),
        e.setVoiceFilterId(tm),
        (0, es.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function tz() {
    var e;
    return !(0, W.f)("MediaEngine").enabled && !(0, X.M)("MediaEngine").enabled && (null == (e = tj().openH264) || e);
}
function tq() {
    eq.on(b.aB.Connection, (e) => {
        tU(e), tB(e), tK(e);
        let t = tj();
        e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
            e.setQoS(t.qos),
            e.setExperimentalEncoders(t.experimentalEncoders),
            e.setHardwareH264(eY),
            e.setSoftwareH264(tz());
        let n = em.Z.getGuildId(),
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
        i && e.setExperimentFlag(eS.V8.MUTE_BEFORE_PROCESSING, !0),
            o && e.setExperimentFlag(eS.V8.PTT_BEFORE_PROCESSING, !0),
            s && e.setExperimentFlag(eS.V8.SKIP_ENCODE, !0);
        let l = !1,
            c = !0;
        if (
            (e.setExperimentFlag(eS.V8.RESET_DECODER_ON_ERRORS, !0),
            l && e.setExperimentFlag(eS.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0),
            c && e.setExperimentFlag(eS.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0),
            e.context === eS.Yn.STREAM)
        ) {
            let t = nt(e2);
            e.setSoundshareDiscardRearChannels(t);
            let { simulcastEnabled: n, lqStreamBitrate: r } = H.Z.getConfig();
            e.configureGoLiveSimulcast(n, r);
        }
        if (
            ((0, es.isWindows)()
                ? (null == tP ? void 0 : tP.startsWith("NVIDIA")) || (null == tP ? void 0 : tP.startsWith("AMD"))
                    ? e.setExperimentFlag(eS.V8.SIGNAL_AV1, !0)
                    : e.setExperimentFlag(eS.V8.SIGNAL_AV1_DECODE, !0)
                : ((0, es.isMac)() || (0, es.isLinux)()) && e.setExperimentFlag(eS.V8.SIGNAL_AV1_DECODE, !0),
            (0, es.isWindows)() && e.setExperimentFlag(eS.V8.SIGNAL_AV1_HARDWARE_DECODE, !0),
            (0, es.isWeb)())
        ) {
            let { enabled: t } = (0, F.A)("MediaEngineStore");
            e.setExperimentFlag(eS.V8.BROWSER_HEVC, t);
        }
        if ((eq.setHasFullbandPerformance((0, R.Z)()), e.setRemoteAudioHistory(1000), (0, C.Z)(r))) {
            let t = A.Z.getSettings();
            e.setExperimentFlag(eS.V8.STREAMER_CLIP, t.clipsEnabled);
            let { enableViewerClipping: n } = q.Z.getCurrentConfig(
                { location: "f627ab_15" },
                { autoTrackExposure: !1 },
            );
            e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eS.ux);
        }
        for (let n of ((t = tj(e.context)), e.setPostponeDecodeLevel(eV), Object.keys(t.localMutes)))
            n !== ef.default.getId() && e.setLocalMute(n, t.localMutes[n]);
        for (let n of Object.keys(t.localVolumes)) n !== ef.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
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
            e.context === eS.Yn.DEFAULT &&
                ((tr = !1),
                (ti = !1),
                e.on(b.Sh.SpeakingWhileMuted, () => {
                    (tr = !0),
                        (ti = !0),
                        r.emitChange(),
                        ta.stop(),
                        ta.start(eH, () => {
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
                    ei.default.track(
                        ey.rMx.VIDEOHOOK_INITIALIZED,
                        eN(
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
                    ei.default.track(ey.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
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
                    ei.default.track(ey.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    v.Z.dispatch({
                        type: "AUDIO_SET_MODE",
                        context: eS.Yn.DEFAULT,
                        mode: ey.pM4.VOICE_ACTIVITY,
                        options: eP(eN({}, tj(eS.Yn.DEFAULT).modeOptions), { vadUseKrisp: !1 }),
                    }),
                    v.Z.dispatch({
                        type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
                        code: e,
                    });
            }),
            e.on(b.Sh.SdpError, (e, t, n, r) => {
                ei.default.track(ey.rMx.SDP_ERROR, {
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
            e.setBitRate(e_.Z.bitrate),
            e.applyVideoQualityMode(eb.Z.mode);
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
                await ea.Z.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
            } catch (t) {
                "number" == typeof t.status && (e = t.status);
            }
            eD.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)),
                ei.default.track(ey.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        eq.on(b.aB.VideoInputInitialized, (e) => {
            ei.default.track(ey.rMx.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired
                    ? null
                    : Math.round(e.timeToFirstFrame * eo.Z.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: em.Z.getMediaSessionId(),
                rtc_connection_id: em.Z.getRTCConnectionId(),
            });
        }),
        eq.on(b.aB.AudioInputInitialized, (e) => {
            ei.default.track(ey.rMx.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * eo.Z.Millis.SECOND),
                rtc_connection_id: em.Z.getRTCConnectionId(),
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
            ei.default.track(ey.rMx.AUDIO_DEVICE_MODULE_ERROR, {
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
                    ? eP(eN({ type: t }, n), { videoEncoder: e.implName })
                    : eP(eN({ type: t }, n), { videoDecoder: e.implName }),
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
            let t = rx(e);
            null !== t && ei.default.track(ey.rMx.VOICE_QUEUE_METRICS, t);
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
        nZ(),
        nV(),
        t1.reset(),
        (0, eg.q)().then((e) => {
            null != e && (tP = e.gpu_brand);
        }),
        eq.on(b.aB.SystemMicrophoneModeChange, (e) => {
            eq.eachConnection(tK);
        });
}
function tX() {
    return (0, es.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eO.c5);
}
function tQ() {
    return (0, es.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eO.sN);
}
function tJ() {
    return (
        (0, es.isMac)() &&
        eq.supports(eS.AN.SCREEN_CAPTURE_KIT) &&
        m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eO.C7)
    );
}
function t$() {
    return (
        (0, es.isWindows)() &&
        eq.supports(eS.AN.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        eq.supports(eS.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function t0() {
    return eq.supports(eS.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
let t1 = new (class {
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
        !tc && em.Z.getState() === ey.hes.RTC_CONNECTED && e.mode === ey.pM4.VOICE_ACTIVITY && e.silenceWarning
            ? this.start()
            : this.stop();
    }
    reset() {
        this.stop(), this.update();
    }
    constructor() {
        eC(this, "stateChangeTimeout", void 0),
            eC(this, "noVoiceTimeout", 5000),
            eC(this, "voiceTimeout", 1500),
            eC(this, "started", !1),
            eC(this, "handleSilence", (e) => {
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
    null != t && (y.K.set(ew, { [eS.Yn.DEFAULT]: t }), y.K.remove("audio")),
        (eX = null != (e = y.K.get(ew)) ? e : {}),
        p().each(eX, (e) => {
            if (
                (p().defaultsDeep(e, eK()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, ed.Kd)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== eL &&
                    ((e.vadUseKrispSettingVersion = eL), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                !e.vadThrehsoldMigrated)
            ) {
                var t;
                (e.vadThrehsoldMigrated = !0),
                    (null == (t = e.modeOptions) ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = eF);
            }
            eq.supports(eS.AN.SIDECHAIN_COMPRESSION) &&
                e.sidechainCompressionSettingVersion < ej &&
                ((e.sidechainCompressionSettingVersion = ej), (e.sidechainCompression = !0)),
                (0, es.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== eM &&
                      ((e.ncUseKrispjsSettingVersion = eM), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== ex &&
                      ((e.ncUseKrispSettingVersion = ex), (e.noiseSuppression = !1), (e.noiseCancellation = !0)),
                e.hardwareEnabledVersion !== ek && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = ek)),
                null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
        }),
        t8();
}
function t2(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eS.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = tk(t);
    return Object.assign(r, e), !__OVERLAY__ && n && y.K.set(ew, eX), r;
}
function t4() {
    y.K.remove(ew), location.reload();
}
function t8() {
    let e = tj();
    eq.setAudioInputDevice(e.inputDeviceId),
        eq.setAudioOutputDevice(e.outputDeviceId),
        tF(),
        eq.setInputVolume(e.inputVolume),
        eq.setOutputVolume(e.outputVolume),
        eq.setH264Enabled(eY || tz()),
        eq.setAv1Enabled(eY),
        eq.setH265Enabled(eY),
        eq.setAecDump(e.aecDumpEnabled),
        eq.setSidechainCompression(e.sidechainCompression),
        eq.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        eq.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing);
}
function t5() {
    eJ ||
        eq.enable().then(() =>
            v.Z.dispatch({
                type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
                enabled: !0,
                unmute: !1,
            }),
        );
}
function t6(e) {
    return {
        id: eS.w5,
        index: 0,
        name: e,
        disabled: !0,
        hardwareId: void 0,
        containerId: void 0,
    };
}
function t7(e, t) {
    if (0 === e.length) {
        let e = t6(t);
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
function t9(e, t) {
    var n, r;
    let i = null != (r = null != (n = e[t]) ? n : e[eS.w5]) ? r : p()(e).values().first();
    return null != i ? i.id : t;
}
function ne(e) {
    let t = e3;
    if (((e3 = t7(e, eA.intl.string(eA.t["/QIjDA"]))), !p().isEqual(e3, t))) {
        let e = tj(),
            t = t9(e3, e.inputDeviceId);
        eq.setAudioInputDevice(t);
    }
}
function nt(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nn(e) {
    eq.eachConnection((t) => {
        t.context === eS.Yn.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function nr(e) {
    let t = e2;
    if (((e2 = t7(e, eA.intl.string(eA.t.xlUg0v))), !p().isEqual(e2, t))) {
        let e = tj(),
            n = t9(e2, e.outputDeviceId);
        eq.setAudioOutputDevice(n);
        let r = nt(t),
            i = nt(e2);
        r !== i && nn(i);
    }
}
function ni(e) {
    ts = e.length > 0;
    let t = e4;
    if (((e4 = t7(e, eA.intl.string(eA.t.WKWARY))), e9 && !p().isEqual(e4, t))) {
        var n;
        let e = void 0 !== e4[te],
            r = te === eS.w5 && (null == (n = t[eS.w5]) ? void 0 : n.disabled);
        tF(e || r);
    }
}
function na() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        r =
            null != (e = et.Z.settings.audioContextSettings)
                ? e
                : {
                      user: {},
                      stream: {},
                  };
    for (let e of Object.keys(r)) {
        let i = e === eI.u0.USER ? eS.Yn.DEFAULT : eS.Yn.STREAM,
            a = i === eS.Yn.STREAM ? eS.Yh : eS.Qx,
            o = null != (t = r[e]) ? t : {},
            { localMutes: s, localVolumes: l } = tj(i);
        for (let [e, t] of Object.entries(o))
            null == (0, ee.Ky)(i, e) &&
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
        t2(
            {
                localMutes: s,
                localVolumes: l,
            },
            i,
        );
    }
}
function no(e) {
    if (null == r)
        return (
            eD.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
            {
                soundshareId: null,
                soundshareSession: "",
            }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : ea.Z.getAudioPid(e),
            n = "";
        return (
            null != t && (n = ea.Z.generateSessionFromPid(t)),
            {
                soundshareId: t,
                soundshareSession: n,
            }
        );
    }
}
function ns(e, t) {
    (0, es.isWindows)() &&
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
function nl(e) {
    (i = e.sessionId), (e8 = !1), (e7 = !1);
    let t = tj();
    if (
        (t$() && (t0() ? rl(eS.iA.AUTOMATIC) : t.automaticAudioSubsystem && rc()),
        eq.supports(eS.AN.OFFLOAD_ADM_CONTROLS))
    ) {
        let e = !1;
        (0, es.isDesktop)()
            ? (e = (0, j.E)({ location: "handleConnectionOpen" }).enabled)
            : ((0, es.isIOS)() || (0, es.isAndroid)()) && (e = (0, U.W)({ location: "handleConnectionOpen" }).enabled),
            eq.setOffloadAdmControls(e);
    }
    (0, en.wt)({
        location: "MediaEngineStore",
        autoTrackExposure: !1,
    }) &&
        null !== t.mostRecentlyRequestedVoiceFilter &&
        (0, es.isDesktop)() &&
        (er.Z.getLastInitAttemptMayHaveCrashed()
            ? (v.Z.dispatch({
                  type: "AUDIO_SET_SELF_MUTE",
                  mute: !0,
                  context: eS.Yn.DEFAULT,
                  playSoundEffect: !0,
              }),
              t2({ mostRecentlyRequestedVoiceFilter: null }))
            : n(358820).r5()),
        eq.setAsyncVideoInputDeviceInit((0, G.p)("handleConnectionOpen").enabled),
        na();
}
function nc(e) {
    let { mediaEngineState: t } = e;
    (eX = t.settingsByContext),
        (e3 = t.inputDevices),
        (e2 = t.outputDevices),
        (tR = t.appSupported),
        (t_ = t.krispModuleLoaded),
        (s = t.krispVersion),
        (e0 = t.goLiveContext);
}
function nu() {
    i = null;
}
function nd() {
    if ((0, es.isWeb)()) {
        let e = K.N.getCurrentConfig({ location: "MediaEngineStore handlePostConnectionOpen" });
        e.loadWasmModule && e.preload && r.startDavePreload();
    }
    return !1;
}
function nf(e) {
    switch (e.state) {
        case ey.hes.CONNECTING:
            t5();
            break;
        case ey.hes.RTC_CONNECTING:
            (tc = !1), (tu = !1);
            break;
        case ey.hes.RTC_CONNECTED:
            tF();
            break;
        case ey.hes.DISCONNECTED:
            nO(), nv();
    }
    t1.update();
}
function n_(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (e8 = t.mute || t.suppress), (e7 = t.deaf), eq.eachConnection(tB);
            let e = null != t.guildId && null != t.channelId && null != ty && ty !== t.channelId,
                n = !td && null == t.channelId;
            return tF(!e && !n && e9), (ty = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== ef.default.getId() || null != em.Z.getChannelId() || tF(!1, null), e;
    }, !1);
}
function np(e) {
    let { mute: t } = e;
    (e5 = t), eq.eachConnection(tB);
}
function nh(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = tj(t);
    if (t === eS.Yn.DEFAULT && (J.Z.requestPermission(ev.Eu.AUDIO), e6)) return !1;
    (r = !i && !r) || (i = !1),
        n || (tn = !0),
        t2(
            {
                mute: r,
                deaf: i,
            },
            t,
        ),
        eq.eachConnection(tB);
}
function nm(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    t2({ mute: n }, t), r || (tn = !0), eq.eachConnection(tB);
}
function ng(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== eI.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    na(!0);
}
function nE(e) {
    let { context: t } = e;
    t2({ deaf: !tj(t).deaf }, t), eq.eachConnection(tB);
}
function nb(e) {
    let { context: t, userId: n } = e;
    if (n === ef.default.getId()) return;
    let { localMutes: r } = tj(t);
    r[n] ? delete r[n] : (r[n] = !0),
        t2({ localMutes: r }, t),
        eq.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function ny(e) {
    var t, n, r, i, a, o, s;
    let { context: l, userId: c, videoToggleState: u, persist: d, isAutomatic: _ } = e;
    f()(!(d && _), "These are not allowed to both be true.");
    let p = u === ey.ZUi.DISABLED,
        { disabledLocalVideos: h } = tj(l),
        m = null != (t = h[c]) && t,
        g = tA.has(c),
        E = u === ey.ZUi.AUTO_ENABLED || u === ey.ZUi.MANUAL_ENABLED;
    eD.info(
        "disableVideo="
            .concat(p, " currentlyDisabled=")
            .concat(m, " currentlyAutoDisabled=")
            .concat(g, ", isVideoShown=")
            .concat(E),
    ),
        f()(!(g && !m), "If you are auto-disabled, then you are also disabled.");
    let b = p !== m,
        y = l === eS.Yn.DEFAULT,
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
        (I[c] === ey.ZUi.AUTO_PROBING &&
            u === ey.ZUi.AUTO_ENABLED &&
            (0, Q.Z)(c, p ? eS.fC.AUTO_DISABLE : eS.fC.AUTO_ENABLE, E),
        (I[c] = u),
        t2({ videoToggleStateMap: I }, l, d),
        u === ey.ZUi.AUTO_PROBING
            ? null == (n = em.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, !0)
            : null == (r = em.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, !1),
        tC ||
            (eD.info("isAutoDisableAllowed=".concat(tC, " - disabling VideoHealthManager")),
            null == (a = em.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()),
        O)
    ) {
        if ((!p && !g) || (p && !tC)) return;
        (0, Q.Z)(c, p ? eS.fC.AUTO_DISABLE : eS.fC.AUTO_ENABLE, E), p ? tA.add(c) : tA.delete(c);
    } else
        v &&
            (g && !p
                ? (eD.info("disallowing auto-disable for this session because of manual override by user"),
                  (tC = !1),
                  null == (s = em.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(),
                  (0, Q.Z)(c, eS.fC.MANUAL_REENABLE, E))
                : (0, Q.Z)(c, p ? eS.fC.MANUAL_DISABLE : eS.fC.MANUAL_ENABLE, E));
    y && !p && tA.delete(c),
        p ? (h[c] = !0) : delete h[c],
        t2({ disabledLocalVideos: h }, l, d),
        eq.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(c, null != (t = h[c]) && t);
        }, l);
}
function nO() {
    if (0 === tA.size) return;
    let e = eS.Yn.DEFAULT,
        { disabledLocalVideos: t } = tj(e);
    tA.forEach((n) => {
        f()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            eq.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tA.clear(),
        t2({ disabledLocalVideos: t }, e, !1);
}
function nv() {
    let e = eS.Yn.DEFAULT,
        { videoToggleStateMap: t } = tj(e);
    for (let [e, n] of Object.entries(t)) n === ey.ZUi.AUTO_PROBING && delete t[e];
    t2({ videoToggleStateMap: t }, e, !1);
}
function nI(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === ef.default.getId()) return;
    let i = t === eS.Yn.STREAM ? eS.Yh : eS.Qx,
        { localVolumes: a } = tj(t);
    r === i ? delete a[n] : (a[n] = r), t2({ localVolumes: a }, t), eq.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function nT(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: a } = tj(t);
    (a[n] = {
        left: r,
        right: i,
    }),
        t2({ localPans: a }, t),
        eq.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function nS(e) {
    let { context: t, mode: n, options: r } = e;
    t2(
        {
            mode: n,
            modeOptions: r,
        },
        t,
    ),
        eq.eachConnection(tU),
        t1.update();
}
function nA(e) {
    let { volume: t } = e;
    t2({ inputVolume: tG(t) }), eq.setInputVolume(t);
}
function nC(e) {
    let { volume: t } = e;
    t2({ outputVolume: t }), eq.setOutputVolume(t);
}
function nN(e) {
    let { id: t } = e;
    (t = t9(e3, t)), (e1 = performance.now()), t2({ inputDeviceId: t }), eq.setAudioInputDevice(t);
}
function nR(e) {
    let { id: t } = e;
    t2({ outputDeviceId: (t = t9(e2, t)) }), eq.setAudioOutputDevice(t);
}
function nP(e) {
    let { id: t } = e;
    t2({ videoDeviceId: (t = t9(e4, t)) }), tF();
}
function nD(e) {
    let { inputProfile: t } = e;
    t2({ activeInputProfile: t });
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
        t1.update(),
        nF();
}
function nw(e) {
    return e$ !== e.required && ((e$ = e.required), e.required || eq.interact(), !0);
}
function nL(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    ne(t), nr(n), ni(r);
}
function nx(e) {
    let { inputVolume: t, outputVolume: n } = e;
    t2({
        inputVolume: tG(t),
        outputVolume: n,
    });
}
function nM(e) {
    var t;
    let n = tj(),
        r = eq.getAudioSubsystem(),
        i = eq.getAudioLayer(),
        a = t9(e3, n.inputDeviceId),
        o = null == (t = e3[a]) ? void 0 : t.name;
    ei.default.track(ey.rMx.VOICE_PROCESSING, {
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
function nk(e) {
    let t = t2({ echoCancellation: e.enabled });
    eq.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nF(), nM(e.location);
}
function nj(e) {
    nG(e.enabled);
}
function nU(e) {
    let t = t2({ sidechainCompressionStrength: e.strength });
    eq.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function nG(e) {
    let t = t2({ sidechainCompression: e });
    eq.setSidechainCompression(t.sidechainCompression);
}
function nB(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tN.add(n) : tN.delete(n), nZ(), nF();
}
function nZ() {
    let e = !tN.has("voice_filter_preview") && !tN.has("mic_test");
    eq.setMaybePreprocessMute(e);
}
function nF() {
    let e = tj(),
        t = tN.size > 0,
        n = e.inputDeviceId,
        r = ep.Z.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        a = ep.Z.hasNoiseSuppression(n) || e.noiseSuppression,
        o = tH(ep.Z.hasAutomaticGainControl(n) || e.automaticGainControl),
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
async function nV() {
    var e, t, n, r;
    if (!eq.supports(eS.AN.VAAPI)) return;
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
    (tx = a), a && eq.supports(eS.AN.GAMESCOPE_CAPTURE) && (tL = !0);
}
function nH(e) {
    let t = t2({ noiseSuppression: e.enabled });
    eq.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nF(), nM(e.location);
}
function nY(e) {
    let t = t2({ automaticGainControl: e.enabled });
    eq.eachConnection((e) => tY(e, t.automaticGainControl)), nF(), nM(e.location);
}
function nW(e) {
    let t = t2({ noiseCancellation: e.enabled });
    eq.eachConnection((e) => tW(e, t.noiseCancellation)), nF(), nM(e.location);
}
function nK(e) {
    $.Z.setKrispModelOverride(e.model), (c = e.model), nF();
}
function nz(e) {
    var t;
    (0, es.isWeb)() || ((th = e.enabled), null == (t = eq.setNoiseCancellationEnableStats) || t.call(eq, e.enabled));
}
function nq(e) {
    let t = t2({ experimentalEncoders: e.enabled });
    eq.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
}
function nX(e) {
    t2({ silenceWarning: e.enabled }), t1.update();
}
function nQ(e) {
    eq.setDebugLogging(e.enabled);
}
function nJ(e) {
    let { level: t } = e;
    (l = t), $.Z.setKrispSuppressionLevel(t);
}
function n$(e) {
    t2({ videoHook: e.enabled });
}
function n0(e) {
    t2({ experimentalSoundshare2: e.enabled });
}
function n1(e) {
    let { enabled: t } = e;
    t2({ useSystemScreensharePicker: t });
}
function n3(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = t2({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r,
        });
    eq.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function n2(e) {
    let { enabled: t } = e;
    t2({ qos: t }), eq.eachConnection((e) => e.setQoS(t));
}
function n4() {
    t4();
}
function n8(e) {
    let { inputDetected: t } = e;
    (tl = t), !tc && tl && ((tc = !0), t1.update());
}
function n5(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === e6) return !1;
    (e6 = n), eq.eachConnection(tB);
}
function n6(e) {
    let { state: t, permissionType: n } = e,
        r = t === ev.PQ.ACCEPTED;
    switch (n) {
        case ev.Eu.AUDIO:
            (tT = !0), eq.eachConnection(tB);
            break;
        case ev.Eu.CAMERA:
            !r && e9 && tF(!1);
            break;
        default:
            return !1;
    }
}
function n7() {
    return t_ || !1;
}
async function n9() {
    try {
        var e, t, n, i;
        await eu.ZP.ensureModule("discord_krisp");
        let a = eu.ZP.requireModule("discord_krisp");
        (t_ = !0),
            (s = null == (e = a.getSdkVersion) ? void 0 : e.call(a)),
            (l = null != (i = null == (t = a.getSuppressionLevel) ? void 0 : t.call(a)) ? i : 100),
            null == (n = a.getNcModels) ||
                n.call(a).then((e) => {
                    (tp = e), r.emitChange();
                }),
            r.emitChange();
    } catch (t) {
        eD.warn("Failed to load Krisp module: ".concat(t.message)), ec.Z.captureException(t);
        let e = eS.H3.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eS.H3.INITIALIZED : n;
        }
        ei.default.track(ey.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), t2({ noiseCancellation: !1 });
    } finally {
        tf = !1;
    }
}
function re() {
    return (0, es.isWindows)() || (0, es.isLinux)() || (0, es.isMac)();
}
function rt() {
    !re() || __OVERLAY__ || tf || t_
        ? (0, es.isWeb)() && eq.supports(eS.AN.NOISE_CANCELLATION)
            ? ((t_ = !0), r.emitChange())
            : (0, es.isWeb)() && t2({ noiseCancellation: !1 })
        : ((tf = !0), n9());
}
function rn(e) {
    let { enabled: t } = e;
    ei.default.track(ey.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != tm ? tm : null,
        enabled: t,
    }),
        t2({ voiceFilterPlaybackEnabled: t });
}
function rr(e) {
    let { newVoiceFilterId: t } = e;
    t2({ mostRecentlyRequestedVoiceFilter: t }), eq.eachConnection((e) => e.setVoiceFilterId(t));
}
function ri() {
    t2({ mostRecentlyRequestedVoiceFilter: null });
}
function ra(e) {
    let { voiceFilterId: t } = e;
    (tE = tm), (tb = tg), (tm = t), (tg = null === t ? null : Date.now());
}
function ro(e) {
    let t = e.bypassEnabled;
    t2({ bypassSystemInputProcessing: t }), eq.setAudioInputBypassSystemProcessing(t), nM(e.location);
}
function rs(e) {
    rl(e.subsystem);
}
function rl(e) {
    e === eS.iA.AUTOMATIC
        ? (t2({ automaticAudioSubsystem: !0 }), rc())
        : (t2({ automaticAudioSubsystem: !1 }), eq.setAudioSubsystem(e));
}
function rc() {
    eq.queueAudioSubsystem(eS.iA.EXPERIMENTAL);
}
function ru(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && tF(i, null), null != t || null == n)) {
        td = !1;
        return;
    }
    if (td) return;
    td = !0;
    let a = tj();
    (a.mute || a.deaf) &&
        (t2({
            deaf: !1,
            mute: !1,
        }),
        eq.eachConnection(tB));
}
function rd(e) {
    let { application: t } = e;
    eQ.add(t.id);
}
function rf(e) {
    let { application: t } = e;
    eQ.delete(t.id);
}
function r_(e) {
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
function rp(e) {
    (eJ = e.enabled),
        e.unmute &&
            t2({
                mute: !1,
                deaf: !1,
            }),
        eq.eachConnection(tB);
}
function rh(e) {
    let { enabled: t } = e;
    J.Z.requestPermission(ev.Eu.CAMERA), tF(t);
}
function rm(e) {
    let { sourceId: t, applicationName: n, quality: i } = e,
        a = A.Z.isDecoupledGameClippingEnabled(),
        s = A.Z.getSettings().decoupledClipsEnabled;
    if (!a || !s || null == I.Z) return;
    let l = null,
        c = null,
        u = ea.Z.getPidFromDesktopSource(t);
    ({ soundshareId: l, soundshareSession: c } = no(u));
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
        (0, es.isWindows)() && null != o.desktopSource.soundshareId && T.pn(o.desktopSource.soundshareId)),
        null != l && ns(l, c),
        (o = d);
    let f = tM(),
        _ = tj().videoHook;
    eq.setClipsSource({
        desktopDescription: {
            id: o.desktopSource.id,
            soundshareId: o.desktopSource.soundshareId,
            useVideoHook: _,
            useGraphicsCapture: tX(),
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: tJ(),
            videoHookStaleFrameTimeoutMs: eB,
            graphicsCaptureStaleFrameTimeoutMs: eZ,
            hdrCaptureMode: f,
        },
        quality: i,
        applicationName: n,
    });
}
function rg(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((o = null), eq.setClipsSource(null));
}
function rE(e) {
    var t, n, r, i;
    let { settings: a } = e;
    if ((null == a ? void 0 : a.desktopSettings) != null) {
        let e = null,
            r = null,
            { sourceId: i, sound: o } = a.desktopSettings,
            s = null != (t = a.context) ? t : eS.Yn.DEFAULT,
            l =
                null != (n = a.qualityOptions)
                    ? n
                    : {
                          resolution: 720,
                          frameRate: 30,
                      },
            c = !1 === o ? null : ea.Z.getPidFromDesktopSource(i);
        es.isPlatformEmbedded &&
            !0 === o &&
            (({ soundshareId: e, soundshareSession: r } = no(c)), null != e && ns(e, r)),
            tZ(s),
            tF(s === eS.Yn.STREAM && e9, {
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
        let e = null != (r = a.context) ? r : eS.Yn.DEFAULT,
            { videoDeviceGuid: t, audioDeviceGuid: n } = a.cameraSettings,
            o = e === eS.Yn.STREAM && e9,
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
function rb(e) {
    let { section: t } = e;
    return t === ey.oAB.VOICE && t5(), !1;
}
function ry() {
    return eq.eachConnection(tK), !1;
}
function rO(e) {
    let { enabled: t } = e;
    t2({ openH264: t }), eq.setH264Enabled(eY || tz()), eq.eachConnection((e) => e.setSoftwareH264(tz()));
}
function rv(e) {
    let { enabled: t } = e,
        n = t2({ aecDumpEnabled: t });
    eq.setAecDump(n.aecDumpEnabled);
}
function rI(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (eX = Object.values(eS.Yn).reduce((e, n) => {
        let r = n,
            i = eK();
        return (e[r] = p().merge(i, t[r])), e;
    }, {})),
        y.K.set(ew, eX),
        t8();
}
function rT(e) {
    let { state: t } = e,
        n = w.Z.isEnabled();
    if (t === ey.$7l.BACKGROUND && e9 && !n) (to = !0), tF(!1);
    else {
        if (t !== ey.$7l.ACTIVE || !to) return !1;
        (to = !1), tF(!0);
    }
    return !0;
}
function rS(e) {
    eq.eachConnection((t) => t.setBitRate(e.bitrate));
}
function rA() {
    if ((!e9 && null == a) || null != em.Z.getRTCConnectionId()) return !1;
    tF(!1, null);
}
function rC() {
    return !!tO && ((tO = !1), !0);
}
function rN(e) {
    eq.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function rR(e) {
    let { settings: t } = e;
    eq.applyMediaFilterSettings(t).finally(() => {
        (tv = !1), r.emitChange();
    });
}
function rP() {
    tv = !0;
}
function rD() {
    tv = !1;
}
function rw(e) {
    tD = e.enabled;
}
class rL extends (u = E.ZP.Store) {
    initialize() {
        tq(),
            t3(),
            rt(),
            nv(),
            (tR = {
                [eS.AN.VIDEO]: eq.supports(eS.AN.VIDEO),
                [eS.AN.DESKTOP_CAPTURE]: eq.supports(eS.AN.DESKTOP_CAPTURE),
                [eS.AN.HYBRID_VIDEO]: eq.supports(eS.AN.HYBRID_VIDEO),
            }),
            this.waitFor(ef.default, e_.Z, ep.Z, eh.Z, A.Z, D.Z, em.Z, L.ZP, et.Z, eE.default, eb.Z, er.Z);
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
        return eq.supports(eS.AN.EXPERIMENTAL_ENCODERS);
    }
    isNoiseSuppressionSupported() {
        return eq.supports(eS.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return n7();
    }
    isNoiseCancellationError() {
        return tO;
    }
    isAutomaticGainControlSupported() {
        return eq.supports(eS.AN.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !t0() && (eq.supports(eS.AN.LEGACY_AUDIO_SUBSYSTEM) || eq.supports(eS.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return eq.supports(eS.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === eq.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return n7();
    }
    isAecDumpSupported() {
        return eq.supports(eS.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return eq.supports(eS.AN.VIDEO) && eq.supports(eS.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        return (
            (null == (e = eh.Z.getChannel(ty)) ? void 0 : e.type) !== ey.d4z.GUILD_STAGE_VOICE &&
            eY &&
            H.Z.simulcastEnabled()
        );
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
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.Yn.DEFAULT;
        return e === eS.Yn.DEFAULT && e5;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.Yn.DEFAULT;
        return (
            !this.isEnabled() ||
            tj(e).mute ||
            !J.Z.didHavePermission(ev.Eu.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eS.Yn.DEFAULT && e6)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tn;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tn = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && ep.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return tD;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.Yn.DEFAULT;
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
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.Yn.STREAM;
        return e0 === e && null != a;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.Yn.STREAM;
        return e0 === t && null != a && (null == (e = a.desktopSource) ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eS.Yn.DEFAULT;
        return e !== ef.default.getId() && (tj(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return eq.supports(eS.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eS.Yn.DEFAULT;
        return null != (t = tj(n).disabledLocalVideos[e]) && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eS.Yn.DEFAULT;
        return null != (t = tj(n).videoToggleStateMap[e]) ? t : ey.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eS.Yn.DEFAULT;
        return t === eS.Yn.DEFAULT && tA.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.Yn.DEFAULT;
        return e === eS.Yn.DEFAULT && tA.size > 0;
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
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eS.Yn.DEFAULT,
            n = tj(t).localPans[e];
        return null != n ? n : eG;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eS.Yn.DEFAULT,
            n = t === eS.Yn.STREAM ? eS.Yh : eS.Qx,
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
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.Yn.DEFAULT;
        return tj(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.Yn.DEFAULT;
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
                r === ey.pM4.PUSH_TO_TALK && eQ.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return t9(e3, tj().inputDeviceId);
    }
    getOutputDeviceId() {
        return t9(e2, tj().outputDeviceId);
    }
    getVideoDeviceId() {
        return t9(e4, tj().videoDeviceId);
    }
    getInputDevices() {
        return e3;
    }
    getOutputDevices() {
        return e2;
    }
    getVideoDevices() {
        return e4;
    }
    getEchoCancellation() {
        let e = tj();
        return ep.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return eq.supports(eS.AN.SIDECHAIN_COMPRESSION) && tj().sidechainCompression;
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
        return ep.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tj();
        return ep.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
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
        return eY;
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
        return t$() && tj().automaticAudioSubsystem ? eS.iA.AUTOMATIC : eq.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return eq.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return tj().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eT._.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.Yn.DEFAULT;
        return tj(e);
    }
    getState() {
        return {
            settingsByContext: eX,
            inputDevices: e3,
            outputDevices: e2,
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
        return es.isPlatformEmbedded || this.getMode() !== ey.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
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
        return eq.supports(eS.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tj().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return (
            eq.supports(eS.AN.EXPERIMENTAL_SOUNDSHARE) &&
            m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eO.T6)
        );
    }
    supportsHookSoundshare() {
        return (
            (0, es.isWindows)() &&
            eq.supports(eS.AN.SOUNDSHARE) &&
            m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eO.sA)
        );
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = tj().useSystemScreensharePicker,
            n = (0, es.isLinux)();
        return e && (null != t ? t : n);
    }
    supportsSystemScreensharePicker() {
        return eq.supports(eS.AN.NATIVE_SCREENSHARE_PICKER);
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
        return null != (e = tj().modeOptions.vadKrispActivationThreshold) ? e : eU;
    }
    hasActiveCallKitCall() {
        return tw;
    }
    setHasActiveCallKitCall(e) {
        tw = e;
    }
    supportsScreenSoundshare() {
        return (0, es.isMac)()
            ? eq.supports(eS.AN.SOUNDSHARE) &&
                  m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eO.yG) &&
                  tJ()
            : (0, es.isWindows)()
              ? eq.supports(eS.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, es.isLinux)() && eq.supports(eS.AN.SCREEN_SOUNDSHARE);
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.Yn.DEFAULT,
            t = this.supports(eS.AN.VIDEO)
                ? [
                      {
                          rid: "100",
                          type: e === eS.Yn.DEFAULT ? eS.Tr.VIDEO : eS.Tr.SCREEN,
                          quality: eS.y7,
                      },
                  ]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === eS.Yn.DEFAULT || this.goLiveSimulcastEnabled()) &&
                t.push({
                    rid: "50",
                    type: e === eS.Yn.DEFAULT ? eS.Tr.VIDEO : eS.Tr.SCREEN,
                    quality: eS.LD,
                }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: !1 };
        return (
            (0, es.isWeb)() &&
                (e.fetchDave = K.N.getCurrentConfig({
                    location: "MediaEngineStore fetchAsyncResources",
                }).loadWasmModule),
            eq.fetchAsyncResources(e)
        );
    }
    startDavePreload() {
        if (!tI && ((tI = !0), (0, es.isWeb)())) {
            let e = { fetchDave: !0 };
            eq.fetchAsyncResources(e).catch((e) => {
                eD.warn("DAVE preload failed:", e), ec.Z.captureException(e);
            });
        }
    }
    getSupportedSecureFramesProtocolVersion() {
        if ((0, es.isWeb)()) {
            let { useWasmModule: e } = K.N.getCurrentConfig({
                location: "MediaEngineStore getSupportedSecureFramesProtocolVersion",
            });
            if (!e) return 0;
        }
        let e = eq.getSupportedSecureFramesProtocolVersion(),
            t = K.m.getCurrentConfig({ location: "MediaEngineStore" });
        return 114 === e && (e = 1), t.canSupportDaveProtocol && e >= t.protocolVersionFloor ? e : 0;
    }
    hasClipsSource() {
        return null != o;
    }
    getGpuBrand() {
        return tP;
    }
}
function rx(e) {
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
eC(rL, "displayName", "MediaEngineStore");
let rM = (r = new rL(v.Z, {
    VOICE_CHANNEL_SELECT: ru,
    VOICE_STATE_UPDATES: n_,
    CONNECTION_OPEN: nl,
    CONNECTION_CLOSED: nu,
    POST_CONNECTION_OPEN: nd,
    RTC_CONNECTION_STATE: nf,
    AUDIO_SET_TEMPORARY_SELF_MUTE: np,
    AUDIO_TOGGLE_SELF_MUTE: nh,
    AUDIO_SET_SELF_MUTE: nm,
    AUDIO_TOGGLE_SELF_DEAF: nE,
    AUDIO_TOGGLE_LOCAL_MUTE: nb,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: ny,
    AUDIO_SET_LOCAL_VOLUME: nI,
    AUDIO_SET_LOCAL_PAN: nT,
    AUDIO_SET_MODE: nS,
    AUDIO_SET_INPUT_VOLUME: nA,
    AUDIO_SET_OUTPUT_VOLUME: nC,
    AUDIO_SET_INPUT_DEVICE: nN,
    AUDIO_SET_OUTPUT_DEVICE: nR,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: nD,
    AUDIO_SET_ECHO_CANCELLATION: nk,
    AUDIO_SET_SIDECHAIN_COMPRESSION: nj,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nU,
    AUDIO_SET_LOOPBACK: nB,
    AUDIO_SET_NOISE_SUPPRESSION: nH,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nY,
    AUDIO_SET_NOISE_CANCELLATION: nW,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: nK,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: nX,
    AUDIO_SET_DEBUG_LOGGING: nQ,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: nJ,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: nz,
    MEDIA_ENGINE_SET_VIDEO_HOOK: n$,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: n0,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: n1,
    AUDIO_SET_ATTENUATION: n3,
    AUDIO_SET_QOS: n2,
    MEDIA_ENGINE_DEVICES: nL,
    AUDIO_VOLUME_CHANGE: nx,
    AUDIO_RESET: n4,
    AUDIO_INPUT_DETECTED: n8,
    AUDIO_SET_SUBSYSTEM: rs,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: ro,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rp,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rh,
    MEDIA_ENGINE_PERMISSION: r_,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rE,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nP,
    MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nq,
    MEDIA_ENGINE_INTERACTION_REQUIRED: nw,
    USER_SETTINGS_MODAL_INIT: rb,
    USER_SETTINGS_MODAL_SET_SECTION: rb,
    CERTIFIED_DEVICES_SET: ry,
    RPC_APP_CONNECTED: rd,
    RPC_APP_DISCONNECTED: rf,
    OVERLAY_INITIALIZE: nc,
    MEDIA_ENGINE_SET_OPEN_H264: rO,
    APP_STATE_UPDATE: rT,
    SET_CHANNEL_BITRATE: rS,
    SET_VAD_PERMISSION: n5,
    SET_NATIVE_PERMISSION: n6,
    SET_CHANNEL_VIDEO_QUALITY_MODE: rN,
    MEDIA_ENGINE_SET_AEC_DUMP: rv,
    MEDIA_ENGINE_RESET_SETTINGS: rI,
    CHANNEL_DELETE: rA,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rC,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rR,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rP,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rD,
    USER_SETTINGS_PROTO_UPDATE: ng,
    CLIPS_INIT: rm,
    CLIPS_SETTINGS_UPDATE: rg,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rw,
    VOICE_FILTER_REQUEST_SWITCH: rr,
    VOICE_FILTER_LOOPBACK_TOGGLE: rn,
    VOICE_FILTER_APPLIED: ra,
    VOICE_FILTER_DOWNLOAD_FAILED: ri,
    VOICE_FILTER_APPLY_FAILED: ri,
}));
