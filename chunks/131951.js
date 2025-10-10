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
    j = n(314080),
    k = n(822253),
    U = n(177732),
    G = n(294473),
    B = n(706629),
    Z = n(159142),
    F = n(302630),
    V = n(166884),
    H = n(422797),
    Y = n(64592),
    W = n(947851),
    K = n(529558),
    z = n(705946),
    q = n(441167),
    X = n(787517),
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
let ew = new N.Z("MediaEngineStore"),
    eD = "MediaEngineStore",
    eL = 4,
    ex = 1,
    eM = 1,
    ej = 1,
    ek = 1,
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
    eY = 0;
function eW() {
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
        videoHook: ez.supports(eS.AN.VIDEO_HOOK),
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
let eK = {
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
    ez = (0, b.Mt)((0, b.jj)());
ew.enableNativeLogger(!0);
let eq = {},
    eX = new Set([eS.Yn.DEFAULT]),
    eQ = ez.supports(eS.AN.AUTO_ENABLE),
    eJ = !1,
    e$ = eS.Yn.STREAM,
    e0 = performance.now(),
    e1 = { [eS.w5]: t6("No Input Devices") },
    e2 = { [eS.w5]: t6("No Output Devices") },
    e3 = { [eS.w5]: t6("No Video Devices") },
    e4 = !1,
    e8 = !1,
    e5 = !1,
    e6 = !1,
    e7 = !1,
    e9 = eS.Av,
    te = eS.Av,
    tt = !1,
    tn = !1,
    tr = !1,
    ti = new O.V7(),
    ta = !1,
    to = !1,
    ts = null,
    tl = !1,
    tc = !1,
    tu = !1,
    td = !1,
    tf = !1,
    t_ = [],
    tp = !1,
    th = null,
    tm = null,
    tg = null,
    tE = null,
    tb = null,
    ty = !1,
    tO = !1,
    tv = !1,
    tI = !1;
J.Z.hasPermission(ev.Eu.AUDIO, { showAuthorizationError: !1 }),
    J.Z.hasPermission(ev.Eu.CAMERA, { showAuthorizationError: !1 });
let tT = !1,
    tS = new Set(),
    tA = tT,
    tC = new Set(),
    tN = {},
    tR = null,
    tP = !0,
    tw = !1,
    tD = !1,
    tL = !1;
function tx() {
    var e, t;
    return null != (t = null == (e = eE.default.getCurrentUser()) ? void 0 : e.isStaff()) && t
        ? "always"
        : el.Z === g.R.CANARY
          ? "permittedDevicesOnly"
          : "never";
}
function tM() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.Yn.DEFAULT,
        t = eq[e];
    return null == t && ((t = eW()), (eq[e] = t)), t;
}
function tj() {
    var e, t, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.Yn.DEFAULT,
        i = tM(r),
        a = eK[null != (e = i.activeInputProfile) ? e : eT._.CUSTOM],
        o = eN({}, null != (t = i.modeOptions) ? t : {}, null != (n = a.modeOptions) ? n : {});
    return (
        null == o.vadDuringPreProcess && (o.vadDuringPreProcess = (0, z.C)({ location: "getSettings" }).enabled),
        eP(eN({}, i, a), { modeOptions: o })
    );
}
function tk(e) {
    var t, n;
    let r = tj(e.context);
    e.setInputMode(r.mode, {
        vadThreshold: r.modeOptions.threshold,
        vadAutoThreshold: r.modeOptions.autoThreshold,
        vadUseKrisp: r.modeOptions.vadUseKrisp && n9(),
        vadKrispActivationThreshold: null != (t = r.modeOptions.vadKrispActivationThreshold) ? t : 0.5,
        vadLeading: r.modeOptions.vadLeading,
        vadTrailing: r.modeOptions.vadTrailing,
        vadDuringPreProcess: null != (n = r.modeOptions.vadDuringPreProcess) && n,
        pttReleaseDelay: Math.round(r.modeOptions.delay),
    });
}
function tU(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eS.Qx;
    return p().clamp(e, 0, t);
}
function tG(e) {
    let t = tj(e.context),
        n = !eQ || t.mute || t.deaf;
    e.context === eS.Yn.DEFAULT
        ? (n = n || e4 || e8 || e5 || !J.Z.didHavePermission(ev.Eu.AUDIO))
        : e.context === eS.Yn.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eS.Yn.DEFAULT && S.Z.updateNativeMute();
}
function tB(e) {
    e !== e$ && (null != a && ez.setGoLiveSource(null, e$), (e$ = e));
}
function tZ() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e7,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        s = a;
    if (
        ((null == s ? void 0 : s.desktopSource) != null &&
            s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? void 0 : e.id) &&
            (null != s.desktopSource.soundshareId && (0, es.isWindows)() && T.pn(s.desktopSource.soundshareId),
            ez.setGoLiveSource(null, e$)),
        (null == s ? void 0 : s.cameraSource) != null &&
            (s.cameraSource.videoDeviceGuid !==
                (null == o || null == (t = o.cameraSource) ? void 0 : t.videoDeviceGuid) ||
                s.cameraSource.audioDeviceGuid !==
                    (null == o || null == (n = o.cameraSource) ? void 0 : n.audioDeviceGuid)) &&
            ez.setGoLiveSource(null, e$),
        e7 || i)
    ) {
        let e = tj().videoDeviceId;
        e7 && e === eS.w5 && te === eS.w5 && e9 !== eS.Av ? (e = e9) : (te = e),
            (e9 = (e7 = i) ? t9(e3, e) : eS.Av),
            ez.setVideoInputDevice(e9);
    }
    if (((a = o), null != o)) {
        let e = {
            resolution: o.quality.resolution,
            frameRate: o.quality.frameRate,
        };
        if (null != o.desktopSource) {
            let t = tx(),
                n = tj().videoHook,
                i = tX(),
                a = i
                    ? tQ() && X.G.getCurrentConfig({ location: "MediaEngineStore_updateVideo" }).enabled
                        ? eO.zj
                        : eO.ZM
                    : 0;
            ez.setGoLiveSource(
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
                e$,
            );
        }
        null != o.cameraSource &&
            ez.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: o.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                e$,
            );
    }
}
function tF(e) {
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
function tV(e) {
    let t = (0, M.U)({
        location: "getAutomaticGainControlConfig",
        disable: !e,
    }).noiseCancellationConfig;
    return eN({ enabled: e }, t);
}
function tH(e, t) {
    e.setAutomaticGainControl(tV(t));
}
async function tY(e, t) {
    if ((0, es.isIOS)() || (0, es.isMac)()) {
        let e = await ez.getSystemMicrophoneMode();
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
    let { noiseCancellationAfterProcessing: r, vadAfterWebrtc: i } = (0, H.$)({ location: "setNoiseCancellation" });
    e.setNoiseCancellationAfterProcessing(r), e.setVADAfterWebrtc(i);
}
function tW(e) {
    let t = tj(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(ep.Z.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(ep.Z.hasNoiseSuppression(n) || t.noiseSuppression),
        tH(e, ep.Z.hasAutomaticGainControl(n) || t.automaticGainControl),
        tY(e, t.noiseCancellation),
        e.setVoiceFilterId(th),
        (0, es.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function tK() {
    var e;
    return !(0, Y.f)("MediaEngine").enabled && (null == (e = tj().openH264) || e);
}
function tz() {
    var e;
    return !!(0, W.m)("MediaEngineStore") || null == (e = tj().hardwareEncoding) || e;
}
function tq() {
    ez.on(b.aB.Connection, (e) => {
        tk(e), tG(e), tW(e);
        let t = tj();
        e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
            e.setQoS(t.qos),
            e.setExperimentalEncoders(t.experimentalEncoders),
            e.setHardwareH264(tz()),
            e.setSoftwareH264(tK());
        let n = em.Z.getGuildId(),
            {
                muteBeforeProcessing: i,
                pttBeforeProcessing: o,
                skipEncode: s,
            } = (null != n ? B.Z : G.Z).getCurrentConfig(
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
            let { simulcastEnabled: n, lqStreamBitrate: r } = V.Z.getConfig();
            e.configureGoLiveSimulcast(n, r);
        }
        if (
            ((0, es.isWindows)()
                ? (null == tR ? void 0 : tR.startsWith("NVIDIA")) || (null == tR ? void 0 : tR.startsWith("AMD"))
                    ? e.setExperimentFlag(eS.V8.SIGNAL_AV1, !0)
                    : e.setExperimentFlag(eS.V8.SIGNAL_AV1_DECODE, !0)
                : ((0, es.isMac)() || (0, es.isLinux)()) && e.setExperimentFlag(eS.V8.SIGNAL_AV1_DECODE, !0),
            (0, es.isWindows)() && e.setExperimentFlag(eS.V8.SIGNAL_AV1_HARDWARE_DECODE, !0),
            (0, es.isWeb)())
        ) {
            let { enabled: t } = (0, Z.A)("MediaEngineStore");
            e.setExperimentFlag(eS.V8.BROWSER_HEVC, t);
        }
        if ((ez.setHasFullbandPerformance((0, R.Z)()), e.setRemoteAudioHistory(1000), (0, C.Z)(r))) {
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
                ((tn = !1),
                (tr = !1),
                e.on(b.Sh.SpeakingWhileMuted, () => {
                    (tn = !0),
                        (tr = !0),
                        r.emitChange(),
                        ti.stop(),
                        ti.start(eH, () => {
                            (tr = !1), r.emitChange();
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
                ew.warn("noisecancellererror event: ".concat(e)),
                    (0, P.kr)({
                        type: P.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tF(e),
                    }),
                    (ty = !0),
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
                ew.warn("voiceactivitydetectorerror event: ".concat(e)),
                    (0, P.kr)({
                        type: P.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tF(e),
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
        ez.on(b.aB.DeviceChange, (e, t, n) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_DEVICES",
                inputDevices: e,
                outputDevices: t,
                videoDevices: n,
            });
        }),
        ez.on(b.aB.VolumeChange, (e, t) => {
            v.Z.dispatch({
                type: "AUDIO_VOLUME_CHANGE",
                inputVolume: e,
                outputVolume: t,
            });
        }),
        ez.on(b.aB.DesktopSourceEnd, (e, t) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                settings: null,
                endReason: e,
                errorCode: t,
            });
        }),
        ez.on(b.aB.AudioPermission, (e) => {
            (tI = !0),
                v.Z.dispatch({
                    type: "MEDIA_ENGINE_PERMISSION",
                    kind: "audio",
                    granted: e,
                });
        }),
        ez.on(b.aB.VideoPermission, (e) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_PERMISSION",
                kind: "video",
                granted: e,
            });
        }),
        ez.on(b.aB.WatchdogTimeout, async () => {
            let e;
            try {
                await ea.Z.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
            } catch (t) {
                "number" == typeof t.status && (e = t.status);
            }
            ew.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)),
                ei.default.track(ey.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        ez.on(b.aB.VideoInputInitialized, (e) => {
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
        ez.on(b.aB.AudioInputInitialized, (e) => {
            ei.default.track(ey.rMx.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * eo.Z.Millis.SECOND),
                rtc_connection_id: em.Z.getRTCConnectionId(),
            });
        }),
        ez.on(b.aB.ClipsRecordingRestartNeeded, () => {
            v.Z.dispatch({ type: "CLIPS_RESTART" });
        }),
        ez.on(b.aB.ClipsInitFailure, (e, t) => {
            v.Z.wait(() => {
                v.Z.dispatch({
                    type: "CLIPS_INIT_FAILURE",
                    errMsg: e,
                    applicationName: t,
                });
            });
        }),
        ez.on(b.aB.ClipsRecordingEnded, (e, t) => {
            var n, r;
            (null == o || null == (n = o.desktopSource) ? void 0 : n.id) === e &&
                (null != t && (null == a || null == (r = a.desktopSource) ? void 0 : r.soundshareId) !== t && T.pn(t),
                (o = null));
        }),
        ez.on(b.aB.NativeScreenSharePickerUpdate, (e, t) => {
            v.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE",
                existing: e,
                content: t,
            });
        }),
        ez.on(b.aB.NativeScreenSharePickerCancel, (e) => {
            v.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL",
                existing: e,
            });
        }),
        ez.on(b.aB.NativeScreenSharePickerError, (e) => {
            v.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_ERROR",
                error: e,
            });
        }),
        ez.on(b.aB.AudioDeviceModuleError, (e, t, n) => {
            ei.default.track(ey.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                audio_device_module: e,
                code: t,
                device_name: n,
            });
        }),
        ez.on(b.aB.VideoCodecError, (e) => {
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
        ez.on(b.aB.ConnectionStats, (e) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_CONNECTION_STATS",
                connectionStats: e.map((e) => {
                    let { stats: t, connection: n } = e;
                    return {
                        stats: t,
                        mediaEngineConnectionId: n.mediaEngineConnectionId,
                        version: eY++,
                        context: n.context,
                    };
                }),
            });
        }),
        ez.on(b.aB.VoiceQueueMetrics, (e) => {
            let t = rM(e);
            null !== t && ei.default.track(ey.rMx.VOICE_QUEUE_METRICS, t);
        }),
        ez.setOnVideoContainerResized((e, t, n) => {
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
            null != e && (tR = e.gpu_brand);
        }),
        ez.on(b.aB.SystemMicrophoneModeChange, (e) => {
            ez.eachConnection(tW);
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
        ez.supports(eS.AN.SCREEN_CAPTURE_KIT) &&
        m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eO.C7)
    );
}
function t$() {
    return (
        (0, es.isWindows)() &&
        ez.supports(eS.AN.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        ez.supports(eS.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function t0() {
    return ez.supports(eS.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
let t1 = new (class {
    start() {
        this.started || ((this.started = !0), ez.on(b.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout &&
                (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            ez.removeListener(b.aB.Silence, this.handleSilence),
            v.Z.dispatch({
                type: "AUDIO_INPUT_DETECTED",
                inputDetected: null,
            }));
    }
    update() {
        let e = tj();
        !tl && em.Z.getState() === ey.hes.RTC_CONNECTED && e.mode === ey.pM4.VOICE_ACTIVITY && e.silenceWarning
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
                                    e && (tc = !0));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout,
                    ));
            });
    }
})();
function t2() {
    var e;
    let t = y.K.get("audio");
    null != t && (y.K.set(eD, { [eS.Yn.DEFAULT]: t }), y.K.remove("audio")),
        (eq = null != (e = y.K.get(eD)) ? e : {}),
        p().each(eq, (e) => {
            if (
                (p().defaultsDeep(e, eW()),
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
            ez.supports(eS.AN.SIDECHAIN_COMPRESSION) &&
                e.sidechainCompressionSettingVersion < ek &&
                ((e.sidechainCompressionSettingVersion = ek), (e.sidechainCompression = !0)),
                (0, es.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== eM &&
                      ((e.ncUseKrispjsSettingVersion = eM), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== ex &&
                      ((e.ncUseKrispSettingVersion = ex), (e.noiseSuppression = !1), (e.noiseCancellation = !0)),
                e.hardwareEnabledVersion !== ej && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = ej)),
                null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
        }),
        t8();
}
function t3(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eS.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = tM(t);
    return Object.assign(r, e), !__OVERLAY__ && n && y.K.set(eD, eq), r;
}
function t4() {
    y.K.remove(eD), location.reload();
}
function t8() {
    let e = tj();
    ez.setAudioInputDevice(e.inputDeviceId),
        ez.setAudioOutputDevice(e.outputDeviceId),
        tZ(),
        ez.setInputVolume(e.inputVolume),
        ez.setOutputVolume(e.outputVolume),
        ez.setH264Enabled(tz() || tK()),
        ez.setAv1Enabled(tz()),
        ez.setH265Enabled(tz()),
        ez.setAecDump(e.aecDumpEnabled),
        ez.setSidechainCompression(e.sidechainCompression),
        ez.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        ez.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing);
}
function t5() {
    eQ ||
        ez.enable().then(() =>
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
    let t = e1;
    if (((e1 = t7(e, eA.intl.string(eA.t["/QIjDA"]))), !p().isEqual(e1, t))) {
        let e = tj(),
            t = t9(e1, e.inputDeviceId);
        ez.setAudioInputDevice(t);
    }
}
function nt(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nn(e) {
    ez.eachConnection((t) => {
        t.context === eS.Yn.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function nr(e) {
    let t = e2;
    if (((e2 = t7(e, eA.intl.string(eA.t.xlUg0t))), !p().isEqual(e2, t))) {
        let e = tj(),
            n = t9(e2, e.outputDeviceId);
        ez.setAudioOutputDevice(n);
        let r = nt(t),
            i = nt(e2);
        r !== i && nn(i);
    }
}
function ni(e) {
    to = e.length > 0;
    let t = e3;
    if (((e3 = t7(e, eA.intl.string(eA.t.WKWARU))), e7 && !p().isEqual(e3, t))) {
        var n;
        let e = void 0 !== e3[e9],
            r = e9 === eS.w5 && (null == (n = t[eS.w5]) ? void 0 : n.disabled);
        tZ(e || r);
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
                ez.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (n)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == o[e] &&
                    (delete s[e],
                    delete l[e],
                    ez.eachConnection((t) => {
                        t.setLocalVolume(e, a), t.setLocalMute(e, !1);
                    }, i));
        t3(
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
            ew.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
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
    (i = e.sessionId), (e4 = !1), (e6 = !1);
    let t = tj();
    if (
        (t$() && (t0() ? rc(eS.iA.AUTOMATIC) : t.automaticAudioSubsystem && ru()),
        ez.supports(eS.AN.OFFLOAD_ADM_CONTROLS))
    ) {
        let e = !1;
        (0, es.isDesktop)()
            ? (e = (0, k.E)({ location: "handleConnectionOpen" }).enabled)
            : ((0, es.isIOS)() || (0, es.isAndroid)()) && (e = (0, U.W)({ location: "handleConnectionOpen" }).enabled),
            ez.setOffloadAdmControls(e);
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
              t3({ mostRecentlyRequestedVoiceFilter: null }))
            : n(358820).r5()),
        na();
}
function nc(e) {
    let { mediaEngineState: t } = e;
    (eq = t.settingsByContext),
        (e1 = t.inputDevices),
        (e2 = t.outputDevices),
        (tN = t.appSupported),
        (tf = t.krispModuleLoaded),
        (s = t.krispVersion),
        (e$ = t.goLiveContext);
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
            (tl = !1), (tc = !1);
            break;
        case ey.hes.RTC_CONNECTED:
            tZ();
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
            (e4 = t.mute || t.suppress), (e6 = t.deaf), ez.eachConnection(tG);
            let e = null != t.guildId && null != t.channelId && null != tb && tb !== t.channelId,
                n = !tu && null == t.channelId;
            return tZ(!e && !n && e7), (tb = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== ef.default.getId() || null != em.Z.getChannelId() || tZ(!1, null), e;
    }, !1);
}
function np(e) {
    let { mute: t } = e;
    (e8 = t), ez.eachConnection(tG);
}
function nh(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = tj(t);
    if (t === eS.Yn.DEFAULT && (J.Z.requestPermission(ev.Eu.AUDIO), e5)) return !1;
    (r = !i && !r) || (i = !1),
        n || (tt = !0),
        t3(
            {
                mute: r,
                deaf: i,
            },
            t,
        ),
        ez.eachConnection(tG);
}
function nm(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    t3({ mute: n }, t), r || (tt = !0), ez.eachConnection(tG);
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
    t3({ deaf: !tj(t).deaf }, t), ez.eachConnection(tG);
}
function nb(e) {
    let { context: t, userId: n } = e;
    if (n === ef.default.getId()) return;
    let { localMutes: r } = tj(t);
    r[n] ? delete r[n] : (r[n] = !0),
        t3({ localMutes: r }, t),
        ez.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function ny(e) {
    var t, n, r, i, a, o, s;
    let { context: l, userId: c, videoToggleState: u, persist: d, isAutomatic: _ } = e;
    f()(!(d && _), "These are not allowed to both be true.");
    let p = u === ey.ZUi.DISABLED,
        { disabledLocalVideos: h } = tj(l),
        m = null != (t = h[c]) && t,
        g = tS.has(c),
        E = u === ey.ZUi.AUTO_ENABLED || u === ey.ZUi.MANUAL_ENABLED;
    ew.info(
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
    ew.info(
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
        t3({ videoToggleStateMap: I }, l, d),
        u === ey.ZUi.AUTO_PROBING
            ? null == (n = em.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, !0)
            : null == (r = em.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, !1),
        tA ||
            (ew.info("isAutoDisableAllowed=".concat(tA, " - disabling VideoHealthManager")),
            null == (a = em.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()),
        O)
    ) {
        if ((!p && !g) || (p && !tA)) return;
        (0, Q.Z)(c, p ? eS.fC.AUTO_DISABLE : eS.fC.AUTO_ENABLE, E), p ? tS.add(c) : tS.delete(c);
    } else
        v &&
            (g && !p
                ? (ew.info("disallowing auto-disable for this session because of manual override by user"),
                  (tA = !1),
                  null == (s = em.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(),
                  (0, Q.Z)(c, eS.fC.MANUAL_REENABLE, E))
                : (0, Q.Z)(c, p ? eS.fC.MANUAL_DISABLE : eS.fC.MANUAL_ENABLE, E));
    y && !p && tS.delete(c),
        p ? (h[c] = !0) : delete h[c],
        t3({ disabledLocalVideos: h }, l, d),
        ez.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(c, null != (t = h[c]) && t);
        }, l);
}
function nO() {
    if (0 === tS.size) return;
    let e = eS.Yn.DEFAULT,
        { disabledLocalVideos: t } = tj(e);
    tS.forEach((n) => {
        f()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            ez.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tS.clear(),
        t3({ disabledLocalVideos: t }, e, !1);
}
function nv() {
    let e = eS.Yn.DEFAULT,
        { videoToggleStateMap: t } = tj(e);
    for (let [e, n] of Object.entries(t)) n === ey.ZUi.AUTO_PROBING && delete t[e];
    t3({ videoToggleStateMap: t }, e, !1);
}
function nI(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === ef.default.getId()) return;
    let i = t === eS.Yn.STREAM ? eS.Yh : eS.Qx,
        { localVolumes: a } = tj(t);
    r === i ? delete a[n] : (a[n] = r), t3({ localVolumes: a }, t), ez.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function nT(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: a } = tj(t);
    (a[n] = {
        left: r,
        right: i,
    }),
        t3({ localPans: a }, t),
        ez.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function nS(e) {
    let { context: t, mode: n, options: r } = e;
    t3(
        {
            mode: n,
            modeOptions: r,
        },
        t,
    ),
        ez.eachConnection(tk),
        t1.update();
}
function nA(e) {
    let { volume: t } = e;
    t3({ inputVolume: tU(t) }), ez.setInputVolume(t);
}
function nC(e) {
    let { volume: t } = e;
    t3({ outputVolume: t }), ez.setOutputVolume(t);
}
function nN(e) {
    let { id: t } = e;
    (t = t9(e1, t)), (e0 = performance.now()), t3({ inputDeviceId: t }), ez.setAudioInputDevice(t);
}
function nR(e) {
    let { id: t } = e;
    t3({ outputDeviceId: (t = t9(e2, t)) }), ez.setAudioOutputDevice(t);
}
function nP(e) {
    let { id: t } = e;
    t3({ videoDeviceId: (t = t9(e3, t)) }), tZ();
}
function nw(e) {
    let { inputProfile: t } = e;
    t3({ activeInputProfile: t });
    let n = tj();
    ez.eachConnection((e) => {
        tk(e),
            tH(e, n.automaticGainControl),
            e.setEchoCancellation(n.echoCancellation),
            e.setExperimentalEncoders(n.experimentalEncoders),
            tY(e, n.noiseCancellation),
            e.setNoiseSuppression(n.noiseSuppression);
    }),
        ez.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        t1.update(),
        nF();
}
function nD(e) {
    return eJ !== e.required && ((eJ = e.required), e.required || ez.interact(), !0);
}
function nL(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    ne(t), nr(n), ni(r);
}
function nx(e) {
    let { inputVolume: t, outputVolume: n } = e;
    t3({
        inputVolume: tU(t),
        outputVolume: n,
    });
}
function nM(e) {
    var t;
    let n = tj(),
        r = ez.getAudioSubsystem(),
        i = ez.getAudioLayer(),
        a = t9(e1, n.inputDeviceId),
        o = null == (t = e1[a]) ? void 0 : t.name;
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
function nj(e) {
    let t = t3({ echoCancellation: e.enabled });
    ez.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nF(), nM(e.location);
}
function nk(e) {
    nG(e.enabled);
}
function nU(e) {
    let t = t3({ sidechainCompressionStrength: e.strength });
    ez.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function nG(e) {
    let t = t3({ sidechainCompression: e });
    ez.setSidechainCompression(t.sidechainCompression);
}
function nB(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tC.add(n) : tC.delete(n), nZ(), nF();
}
function nZ() {
    let e = !tC.has("voice_filter_preview") && !tC.has("mic_test");
    ez.setMaybePreprocessMute(e);
}
function nF() {
    let e = tj(),
        t = tC.size > 0,
        n = e.inputDeviceId,
        r = ep.Z.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        a = ep.Z.hasNoiseSuppression(n) || e.noiseSuppression,
        o = tV(ep.Z.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation,
        l = null !== th,
        c = tC.has("voice_filter") && 1 === tC.size;
    ez.setLoopback(t, {
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
    if (!ez.supports(eS.AN.VAAPI)) return;
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
    let { enabled: a } = await (0, F.m)("setGamescopeVaapiEnabled");
    (tL = a), a && ez.supports(eS.AN.GAMESCOPE_CAPTURE) && (tD = !0);
}
function nH(e) {
    let t = t3({ noiseSuppression: e.enabled });
    ez.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nF(), nM(e.location);
}
function nY(e) {
    let t = t3({ automaticGainControl: e.enabled });
    ez.eachConnection((e) => tH(e, t.automaticGainControl)), nF(), nM(e.location);
}
function nW(e) {
    let t = t3({ noiseCancellation: e.enabled });
    ez.eachConnection((e) => tY(e, t.noiseCancellation)), nF(), nM(e.location);
}
function nK(e) {
    $.Z.setKrispModelOverride(e.model), (c = e.model), nF();
}
function nz(e) {
    var t;
    (0, es.isWeb)() || ((tp = e.enabled), null == (t = ez.setNoiseCancellationEnableStats) || t.call(ez, e.enabled));
}
function nq(e) {
    let t = t3({ experimentalEncoders: e.enabled });
    ez.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
}
function nX(e) {
    let { enabled: t } = e;
    t3({ hardwareEncoding: t });
    let n = tz();
    ez.eachConnection((e) => e.setHardwareH264(n)),
        ez.setH264Enabled(n || tK()),
        ez.setAv1Enabled(n),
        ez.setH265Enabled(n);
}
function nQ(e) {
    t3({ silenceWarning: e.enabled }), t1.update();
}
function nJ(e) {
    ez.setDebugLogging(e.enabled);
}
function n$(e) {
    let { level: t } = e;
    (l = t), $.Z.setKrispSuppressionLevel(t);
}
function n0(e) {
    t3({ videoHook: e.enabled });
}
function n1(e) {
    t3({ experimentalSoundshare2: e.enabled });
}
function n2(e) {
    let { enabled: t } = e;
    t3({ useSystemScreensharePicker: t });
}
function n3(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = t3({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r,
        });
    ez.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function n4(e) {
    let { enabled: t } = e;
    t3({ qos: t }), ez.eachConnection((e) => e.setQoS(t));
}
function n8() {
    t4();
}
function n5(e) {
    let { inputDetected: t } = e;
    (ts = t), !tl && ts && ((tl = !0), t1.update());
}
function n6(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === e5) return !1;
    (e5 = n), ez.eachConnection(tG);
}
function n7(e) {
    let { state: t, permissionType: n } = e,
        r = t === ev.PQ.ACCEPTED;
    switch (n) {
        case ev.Eu.AUDIO:
            (tI = !0), ez.eachConnection(tG);
            break;
        case ev.Eu.CAMERA:
            !r && e7 && tZ(!1);
            break;
        default:
            return !1;
    }
}
function n9() {
    return tf || !1;
}
async function re() {
    try {
        var e, t, n, i;
        await eu.ZP.ensureModule("discord_krisp");
        let a = eu.ZP.requireModule("discord_krisp");
        (tf = !0),
            (s = null == (e = a.getSdkVersion) ? void 0 : e.call(a)),
            (l = null != (i = null == (t = a.getSuppressionLevel) ? void 0 : t.call(a)) ? i : 100),
            null == (n = a.getNcModels) ||
                n.call(a).then((e) => {
                    (t_ = e), r.emitChange();
                }),
            r.emitChange();
    } catch (t) {
        ew.warn("Failed to load Krisp module: ".concat(t.message)), ec.Z.captureException(t);
        let e = eS.H3.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eS.H3.INITIALIZED : n;
        }
        ei.default.track(ey.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), t3({ noiseCancellation: !1 });
    } finally {
        td = !1;
    }
}
function rt() {
    return (0, es.isWindows)() || (0, es.isLinux)() || (0, es.isMac)();
}
function rn() {
    !rt() || __OVERLAY__ || td || tf
        ? (0, es.isWeb)() && ez.supports(eS.AN.NOISE_CANCELLATION)
            ? ((tf = !0), r.emitChange())
            : (0, es.isWeb)() && t3({ noiseCancellation: !1 })
        : ((td = !0), re());
}
function rr(e) {
    let { enabled: t } = e;
    ei.default.track(ey.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != th ? th : null,
        enabled: t,
    }),
        t3({ voiceFilterPlaybackEnabled: t });
}
function ri(e) {
    let { newVoiceFilterId: t } = e;
    t3({ mostRecentlyRequestedVoiceFilter: t }), ez.eachConnection((e) => e.setVoiceFilterId(t));
}
function ra() {
    t3({ mostRecentlyRequestedVoiceFilter: null });
}
function ro(e) {
    let { voiceFilterId: t } = e;
    (tg = th), (tE = tm), (th = t), (tm = null === t ? null : Date.now());
}
function rs(e) {
    let t = e.bypassEnabled;
    t3({ bypassSystemInputProcessing: t }), ez.setAudioInputBypassSystemProcessing(t), nM(e.location);
}
function rl(e) {
    rc(e.subsystem);
}
function rc(e) {
    e === eS.iA.AUTOMATIC
        ? (t3({ automaticAudioSubsystem: !0 }), ru())
        : (t3({ automaticAudioSubsystem: !1 }), ez.setAudioSubsystem(e));
}
function ru() {
    ez.queueAudioSubsystem(eS.iA.EXPERIMENTAL);
}
function rd(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && tZ(i, null), null != t || null == n)) {
        tu = !1;
        return;
    }
    if (tu) return;
    tu = !0;
    let a = tj();
    (a.mute || a.deaf) &&
        (t3({
            deaf: !1,
            mute: !1,
        }),
        ez.eachConnection(tG));
}
function rf(e) {
    let { application: t } = e;
    eX.add(t.id);
}
function r_(e) {
    let { application: t } = e;
    eX.delete(t.id);
}
function rp(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (eQ = !1), ez.eachConnection(tG);
                break;
            case "video":
                tZ(!1);
        }
}
function rh(e) {
    (eQ = e.enabled),
        e.unmute &&
            t3({
                mute: !1,
                deaf: !1,
            }),
        ez.eachConnection(tG);
}
function rm(e) {
    let { enabled: t } = e;
    J.Z.requestPermission(ev.Eu.CAMERA), tZ(t);
}
function rg(e) {
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
        (ez.setClipsSource(null),
        (0, es.isWindows)() && null != o.desktopSource.soundshareId && T.pn(o.desktopSource.soundshareId)),
        null != l && ns(l, c),
        (o = d);
    let f = tx(),
        _ = tj().videoHook;
    ez.setClipsSource({
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
function rE(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((o = null), ez.setClipsSource(null));
}
function rb(e) {
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
            tB(s),
            tZ(s === eS.Yn.STREAM && e7, {
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
            o = e === eS.Yn.STREAM && e7,
            s =
                null != (i = a.qualityOptions)
                    ? i
                    : {
                          resolution: 720,
                          frameRate: 30,
                      };
        tZ(o, {
            cameraSource: {
                videoDeviceGuid: t,
                audioDeviceGuid: n,
            },
            quality: {
                resolution: s.resolution,
                frameRate: s.frameRate,
            },
        });
    } else tZ(e7, null);
}
function ry(e) {
    let { section: t } = e;
    return t === ey.oAB.VOICE && t5(), !1;
}
function rO() {
    return ez.eachConnection(tW), !1;
}
function rv(e) {
    let { enabled: t } = e;
    t3({ openH264: t }), ez.setH264Enabled(tz() || tK()), ez.eachConnection((e) => e.setSoftwareH264(tK()));
}
function rI(e) {
    let { enabled: t } = e,
        n = t3({ aecDumpEnabled: t });
    ez.setAecDump(n.aecDumpEnabled);
}
function rT(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (eq = Object.values(eS.Yn).reduce((e, n) => {
        let r = n,
            i = eW();
        return (e[r] = p().merge(i, t[r])), e;
    }, {})),
        y.K.set(eD, eq),
        t8();
}
function rS(e) {
    let { state: t } = e,
        n = D.Z.isEnabled();
    if (t === ey.$7l.BACKGROUND && e7 && !n) (ta = !0), tZ(!1);
    else {
        if (t !== ey.$7l.ACTIVE || !ta) return !1;
        (ta = !1), tZ(!0);
    }
    return !0;
}
function rA(e) {
    ez.eachConnection((t) => t.setBitRate(e.bitrate));
}
function rC() {
    if ((!e7 && null == a) || null != em.Z.getRTCConnectionId()) return !1;
    tZ(!1, null);
}
function rN() {
    return !!ty && ((ty = !1), !0);
}
function rR(e) {
    ez.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function rP(e) {
    let { settings: t } = e;
    ez.applyMediaFilterSettings(t).finally(() => {
        (tO = !1), r.emitChange();
    });
}
function rw() {
    tO = !0;
}
function rD() {
    tO = !1;
}
function rL(e) {
    tP = e.enabled;
}
class rx extends (u = E.ZP.Store) {
    initialize() {
        tq(),
            t2(),
            rn(),
            nv(),
            (tN = {
                [eS.AN.VIDEO]: ez.supports(eS.AN.VIDEO),
                [eS.AN.DESKTOP_CAPTURE]: ez.supports(eS.AN.DESKTOP_CAPTURE),
                [eS.AN.HYBRID_VIDEO]: ez.supports(eS.AN.HYBRID_VIDEO),
            }),
            this.waitFor(ef.default, ep.Z, eh.Z, em.Z, L.ZP, J.Z.storage, et.Z, w.Z, A.Z);
    }
    supports(e) {
        return ez.supports(e);
    }
    supportsInApp(e) {
        return tN[e] || ez.supports(e);
    }
    isSupported() {
        return ez.supported();
    }
    isExperimentalEncodersSupported() {
        return ez.supports(eS.AN.EXPERIMENTAL_ENCODERS);
    }
    isNoiseSuppressionSupported() {
        return ez.supports(eS.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return n9();
    }
    isNoiseCancellationError() {
        return ty;
    }
    isAutomaticGainControlSupported() {
        return ez.supports(eS.AN.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !t0() && (ez.supports(eS.AN.LEGACY_AUDIO_SUBSYSTEM) || ez.supports(eS.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return ez.supports(eS.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === ez.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return n9();
    }
    isAecDumpSupported() {
        return ez.supports(eS.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return ez.supports(eS.AN.VIDEO) && ez.supports(eS.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        let t = (null == (e = eh.Z.getChannel(tb)) ? void 0 : e.type) === ey.d4z.GUILD_STAGE_VOICE,
            n = tz();
        return !t && n && V.Z.simulcastEnabled();
    }
    getAecDump() {
        return tj().aecDumpEnabled;
    }
    getMediaEngine() {
        return ez;
    }
    getVideoComponent() {
        return ez.Video;
    }
    getCameraComponent() {
        return ez.Camera;
    }
    getKrispSuppressionLevel() {
        return null != l ? l : 100;
    }
    getKrispEnableStats() {
        return tp;
    }
    isEnabled() {
        return eQ;
    }
    isMute() {
        return this.isSelfMute() || e4;
    }
    isDeaf() {
        return this.isSelfDeaf() || e6;
    }
    hasContext(e) {
        return null != eq[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.Yn.DEFAULT;
        return e === eS.Yn.DEFAULT && e8;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.Yn.DEFAULT;
        return (
            !this.isEnabled() ||
            tj(e).mute ||
            !J.Z.didHavePermission(ev.Eu.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eS.Yn.DEFAULT && e5)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tt;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tt = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && ep.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return tP;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.Yn.DEFAULT;
        return !this.isSupported() || tj(e).deaf;
    }
    isVideoEnabled() {
        return e7 && to;
    }
    isVideoAvailable() {
        return Object.values(e3).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.Yn.STREAM;
        return e$ === e && null != a;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.Yn.STREAM;
        return e$ === t && null != a && (null == (e = a.desktopSource) ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eS.Yn.DEFAULT;
        return e !== ef.default.getId() && (tj(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return ez.supports(eS.AN.DISABLE_VIDEO);
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
        return t === eS.Yn.DEFAULT && tS.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.Yn.DEFAULT;
        return e === eS.Yn.DEFAULT && tS.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tO;
    }
    isNativeAudioPermissionReady() {
        return tI;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return e$;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return e0;
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
        return th;
    }
    getActiveVoiceFilterAppliedAt() {
        return tm;
    }
    getPreviousVoiceFilter() {
        return tg;
    }
    getPreviousVoiceFilterAppliedAt() {
        return tE;
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
            p().each(eq, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === ey.pM4.PUSH_TO_TALK && eX.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return t9(e1, tj().inputDeviceId);
    }
    getOutputDeviceId() {
        return t9(e2, tj().outputDeviceId);
    }
    getVideoDeviceId() {
        return t9(e3, tj().videoDeviceId);
    }
    getInputDevices() {
        return e1;
    }
    getOutputDevices() {
        return e2;
    }
    getVideoDevices() {
        return e3;
    }
    getEchoCancellation() {
        let e = tj();
        return ep.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return ez.supports(eS.AN.SIDECHAIN_COMPRESSION) && tj().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return tj().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return tj().h265Enabled;
    }
    getLoopback() {
        return tC.size > 0;
    }
    getLoopbackReasons() {
        return tC;
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
        return tz();
    }
    getHardwareEncodingSetting() {
        var e;
        return null == (e = tj().hardwareEncoding) || e;
    }
    getEnableSilenceWarning() {
        return tj().silenceWarning;
    }
    getDebugLogging() {
        return ez.getDebugLogging();
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
        return t$() && tj().automaticAudioSubsystem ? eS.iA.AUTOMATIC : ez.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return ez.getMLSSigningKey(e, t);
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
            settingsByContext: eq,
            inputDevices: e1,
            outputDevices: e2,
            appSupported: tN,
            krispModuleLoaded: tf,
            krispVersion: s,
            krispSuppressionLevel: l,
            goLiveSource: a,
            goLiveContext: e$,
        };
    }
    getInputDetected() {
        return ts;
    }
    getNoInputDetectedNotice() {
        return tc;
    }
    getPacketDelay() {
        return es.isPlatformEmbedded || this.getMode() !== ey.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        ez.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return eJ;
    }
    getVideoHook() {
        return tj().videoHook;
    }
    supportsVideoHook() {
        return ez.supports(eS.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tj().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return (
            ez.supports(eS.AN.EXPERIMENTAL_SOUNDSHARE) &&
            m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eO.T6)
        );
    }
    supportsHookSoundshare() {
        return (
            (0, es.isWindows)() &&
            ez.supports(eS.AN.SOUNDSHARE) &&
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
        return ez.supports(eS.AN.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return tL;
    }
    getUseGamescopeCapture() {
        return tD;
    }
    getOpenH264() {
        return tj().openH264;
    }
    getEverSpeakingWhileMuted() {
        return tn;
    }
    getSpeakingWhileMuted() {
        return tr;
    }
    getKrispModelOverride() {
        return c;
    }
    getKrispModels() {
        return t_;
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
            ? ez.supports(eS.AN.SOUNDSHARE) &&
                  m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eO.yG) &&
                  tJ()
            : (0, es.isWindows)()
              ? ez.supports(eS.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, es.isLinux)() && ez.supports(eS.AN.SCREEN_SOUNDSHARE);
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
            ez.fetchAsyncResources(e)
        );
    }
    startDavePreload() {
        if (!tv && ((tv = !0), (0, es.isWeb)())) {
            let e = { fetchDave: !0 };
            ez.fetchAsyncResources(e).catch((e) => {
                ew.warn("DAVE preload failed:", e), ec.Z.captureException(e);
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
        let e = ez.getSupportedSecureFramesProtocolVersion(),
            t = K.m.getCurrentConfig({ location: "MediaEngineStore" });
        return 114 === e && (e = 1), t.canSupportDaveProtocol && e >= t.protocolVersionFloor ? e : 0;
    }
    hasClipsSource() {
        return null != o;
    }
    getGpuBrand() {
        return tR;
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
eC(rx, "displayName", "MediaEngineStore");
let rj = (r = new rx(v.Z, {
    VOICE_CHANNEL_SELECT: rd,
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
    AUDIO_SET_ACTIVE_INPUT_PROFILE: nw,
    AUDIO_SET_ECHO_CANCELLATION: nj,
    AUDIO_SET_SIDECHAIN_COMPRESSION: nk,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nU,
    AUDIO_SET_LOOPBACK: nB,
    AUDIO_SET_NOISE_SUPPRESSION: nH,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nY,
    AUDIO_SET_NOISE_CANCELLATION: nW,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: nK,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: nQ,
    AUDIO_SET_DEBUG_LOGGING: nJ,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: n$,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: nz,
    MEDIA_ENGINE_SET_VIDEO_HOOK: n0,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: n1,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: n2,
    AUDIO_SET_ATTENUATION: n3,
    AUDIO_SET_QOS: n4,
    MEDIA_ENGINE_DEVICES: nL,
    AUDIO_VOLUME_CHANGE: nx,
    AUDIO_RESET: n8,
    AUDIO_INPUT_DETECTED: n5,
    AUDIO_SET_SUBSYSTEM: rl,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rs,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rh,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rm,
    MEDIA_ENGINE_PERMISSION: rp,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rb,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nP,
    MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nq,
    MEDIA_ENGINE_INTERACTION_REQUIRED: nD,
    USER_SETTINGS_MODAL_INIT: ry,
    USER_SETTINGS_MODAL_SET_SECTION: ry,
    CERTIFIED_DEVICES_SET: rO,
    RPC_APP_CONNECTED: rf,
    RPC_APP_DISCONNECTED: r_,
    OVERLAY_INITIALIZE: nc,
    MEDIA_ENGINE_SET_OPEN_H264: rv,
    MEDIA_ENGINE_SET_HARDWARE_ENCODING: nX,
    APP_STATE_UPDATE: rS,
    SET_CHANNEL_BITRATE: rA,
    SET_VAD_PERMISSION: n6,
    SET_NATIVE_PERMISSION: n7,
    SET_CHANNEL_VIDEO_QUALITY_MODE: rR,
    MEDIA_ENGINE_SET_AEC_DUMP: rI,
    MEDIA_ENGINE_RESET_SETTINGS: rT,
    CHANNEL_DELETE: rC,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rN,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rP,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rw,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rD,
    USER_SETTINGS_PROTO_UPDATE: ng,
    CLIPS_INIT: rg,
    CLIPS_SETTINGS_UPDATE: rE,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rL,
    VOICE_FILTER_REQUEST_SWITCH: ri,
    VOICE_FILTER_LOOPBACK_TOGGLE: rr,
    VOICE_FILTER_APPLIED: ro,
    VOICE_FILTER_DOWNLOAD_FAILED: ra,
    VOICE_FILTER_APPLY_FAILED: ra,
}));
