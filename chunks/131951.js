let r, i, a, o, s, l, c;
n.d(t, { Z: () => rP }), n(388685), n(953529), n(457542), n(539854), n(642613), n(49124), n(337869);
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
    j = n(883794),
    M = n(314080),
    k = n(822253),
    U = n(177732),
    G = n(294473),
    B = n(706629),
    Z = n(159142),
    F = n(302630),
    V = n(166884),
    H = n(947851),
    Y = n(529558),
    W = n(441167),
    K = n(787517),
    z = n(338336),
    q = n(751571),
    X = n(311473),
    Q = n(725380),
    J = n(581883),
    $ = n(875527),
    ee = n(420439),
    et = n(626135),
    en = n(12647),
    er = n(70956),
    ei = n(358085),
    ea = n(747268),
    eo = n(960048),
    es = n(998502),
    el = n(13140),
    ec = n(314897),
    eu = n(967368),
    ed = n(463395),
    ef = n(592125),
    e_ = n(19780),
    ep = n(704806),
    eh = n(594174),
    em = n(631768),
    eg = n(981631),
    eE = n(70722),
    eb = n(761274),
    ey = n(526761),
    eO = n(345655),
    ev = n(65154),
    eI = n(388032);
function eT(e, t, n) {
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
function eS(e) {
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
                eT(e, t, n[t]);
            });
    }
    return e;
}
function eA(e, t) {
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
function eC(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eA(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eN = new N.Z("MediaEngineStore"),
    eR = "MediaEngineStore",
    eP = 4,
    ew = 1,
    eD = 1,
    eL = 1,
    ex = 1,
    ej = 0.5,
    eM = {
        left: 1,
        right: 1,
    },
    ek = 500,
    eU = 5 * er.Z.Millis.SECOND,
    eG = -60,
    eB = 100,
    eZ = 2 * er.Z.Millis.SECOND,
    eF = 0;
function eV() {
    return {
        mode: eg.pM4.VOICE_ACTIVITY,
        modeOptions: {
            threshold: eG,
            autoThreshold: ei.isPlatformEmbedded || __OVERLAY__,
            vadUseKrisp: !0,
            vadKrispActivationThreshold: ej,
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
        inputVolume: ev.Qx,
        outputVolume: ev.Qx,
        inputDeviceId: ev.w5,
        outputDeviceId: ev.w5,
        videoDeviceId: ev.w5,
        qos: !1,
        qosMigrated: !1,
        videoHook: eY.supports(ev.AN.VIDEO_HOOK),
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
let eH = {
        [eO._.CUSTOM]: {},
        [eO._.VOICE_ISOLATION]: {
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
        [eO._.STUDIO]: {
            mode: eg.pM4.VOICE_ACTIVITY,
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
    eY = (0, b.Mt)((0, b.jj)());
eN.enableNativeLogger(!0);
let eW = {},
    eK = new Set([ev.Yn.DEFAULT]),
    ez = eY.supports(ev.AN.AUTO_ENABLE),
    eq = !1,
    eX = ev.Yn.STREAM,
    eQ = performance.now(),
    eJ = { [ev.w5]: t3("No Input Devices") },
    e$ = { [ev.w5]: t3("No Output Devices") },
    e0 = { [ev.w5]: t3("No Video Devices") },
    e1 = !1,
    e2 = !1,
    e3 = !1,
    e4 = !1,
    e8 = !1,
    e5 = ev.Av,
    e6 = ev.Av,
    e7 = !1,
    e9 = !1,
    te = !1,
    tt = new O.V7(),
    tn = !1,
    tr = !1,
    ti = null,
    ta = !1,
    to = !1,
    ts = !1,
    tl = !1,
    tc = !1,
    tu = [],
    td = !1,
    tf = null,
    t_ = null,
    tp = null,
    th = null,
    tm = null,
    tg = !1,
    tE = !1,
    tb = !1,
    ty = !1;
q.Z.hasPermission(eb.Eu.AUDIO, { showAuthorizationError: !1 }),
    q.Z.hasPermission(eb.Eu.CAMERA, { showAuthorizationError: !1 });
let tO = !1,
    tv = new Set(),
    tI = tO,
    tT = new Set(),
    tS = {},
    tA = null,
    tC = !0,
    tN = !1,
    tR = !1,
    tP = !1;
function tw() {
    var e, t;
    return null != (t = null == (e = eh.default.getCurrentUser()) ? void 0 : e.isStaff()) && t
        ? "always"
        : ea.Z === g.R.CANARY
          ? "permittedDevicesOnly"
          : "never";
}
function tD() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.DEFAULT,
        t = eW[e];
    return null == t && ((t = eV()), (eW[e] = t)), t;
}
function tL() {
    var e, t, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.DEFAULT,
        i = tD(r),
        a = eH[null != (e = i.activeInputProfile) ? e : eO._.CUSTOM];
    return eC(eS({}, i, a), {
        modeOptions: eS({}, null != (t = i.modeOptions) ? t : {}, null != (n = a.modeOptions) ? n : {}),
    });
}
function tx(e) {
    var t;
    let n = tL(e.context);
    e.setInputMode(n.mode, {
        vadThreshold: n.modeOptions.threshold,
        vadAutoThreshold: n.modeOptions.autoThreshold,
        vadUseKrisp: n.modeOptions.vadUseKrisp && n3(),
        vadKrispActivationThreshold: null != (t = n.modeOptions.vadKrispActivationThreshold) ? t : 0.5,
        vadLeading: n.modeOptions.vadLeading,
        vadTrailing: n.modeOptions.vadTrailing,
        pttReleaseDelay: Math.round(n.modeOptions.delay),
    });
}
function tj(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ev.Qx;
    return p().clamp(e, 0, t);
}
function tM(e) {
    let t = tL(e.context),
        n = !ez || t.mute || t.deaf;
    e.context === ev.Yn.DEFAULT
        ? (n = n || e1 || e2 || e3 || !q.Z.didHavePermission(eb.Eu.AUDIO))
        : e.context === ev.Yn.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === ev.Yn.DEFAULT && S.Z.updateNativeMute();
}
function tk(e) {
    e !== eX && (null != a && eY.setGoLiveSource(null, eX), (eX = e));
}
function tU() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e8,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        s = a;
    if (
        ((null == s ? void 0 : s.desktopSource) != null &&
            s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? void 0 : e.id) &&
            (null != s.desktopSource.soundshareId && (0, ei.isWindows)() && T.pn(s.desktopSource.soundshareId),
            eY.setGoLiveSource(null, eX)),
        (null == s ? void 0 : s.cameraSource) != null &&
            (s.cameraSource.videoDeviceGuid !==
                (null == o || null == (t = o.cameraSource) ? void 0 : t.videoDeviceGuid) ||
                s.cameraSource.audioDeviceGuid !==
                    (null == o || null == (n = o.cameraSource) ? void 0 : n.audioDeviceGuid)) &&
            eY.setGoLiveSource(null, eX),
        e8 || i)
    ) {
        let e = tL().videoDeviceId;
        e8 && e === ev.w5 && e6 === ev.w5 && e5 !== ev.Av ? (e = e5) : (e6 = e),
            (e5 = (e8 = i) ? t8(e0, e) : ev.Av),
            eY.setVideoInputDevice(e5);
    }
    if (((a = o), null != o)) {
        let e = {
            resolution: o.quality.resolution,
            frameRate: o.quality.frameRate,
        };
        if (null != o.desktopSource) {
            let t = tw(),
                n = tL().videoHook,
                i = tW(),
                a = i
                    ? tK() && K.G.getCurrentConfig({ location: "MediaEngineStore_updateVideo" }).enabled
                        ? eE.zj
                        : eE.ZM
                    : 0;
            eY.setGoLiveSource(
                {
                    desktopDescription: {
                        id: o.desktopSource.id,
                        soundshareId: o.desktopSource.soundshareId,
                        useVideoHook: n,
                        useGraphicsCapture: i,
                        useGraphicsCaptureApiLevel: a,
                        useLoopback: r.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: tz(),
                        videoHookStaleFrameTimeoutMs: ek,
                        graphicsCaptureStaleFrameTimeoutMs: eU,
                        hdrCaptureMode: t,
                    },
                    quality: e,
                },
                eX,
            );
        }
        null != o.cameraSource &&
            eY.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: o.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                eX,
            );
    }
}
function tG(e) {
    switch (e) {
        case ev.H3.CPU_OVERUSE:
            return P.Nk.NoiseCancellerCpuOveruse;
        case ev.H3.FAILED:
            return P.Nk.NoiseCancellerFailed;
        case ev.H3.VAD_CPU_OVERUSE:
            return P.Nk.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function tB(e) {
    let t = (0, j.U)({
        location: "getAutomaticGainControlConfig",
        disable: !e,
    }).noiseCancellationConfig;
    return eS({ enabled: e }, t);
}
function tZ(e, t) {
    e.setAutomaticGainControl(tB(t));
}
async function tF(e, t) {
    if ((0, ei.isIOS)() || (0, ei.isMac)()) {
        let e = await eY.getSystemMicrophoneMode();
        "" !== e &&
            "standard" !== e &&
            M.Z.getConfig({ location: "setNoiseCancellation" }).disabledModes.includes(e) &&
            (t = !1);
    }
    e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: n } = (0, j.U)({
        location: "setNoiseCancellation",
        disable: !t,
    });
    e.setNoiseCancellationDuringProcessing(n);
}
function tV(e) {
    let t = tL(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(ed.Z.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(ed.Z.hasNoiseSuppression(n) || t.noiseSuppression),
        tZ(e, ed.Z.hasAutomaticGainControl(n) || t.automaticGainControl),
        tF(e, t.noiseCancellation),
        e.setVoiceFilterId(tf),
        (0, ei.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function tH() {
    var e;
    return !!(0, H.m)("MediaEngineStore") || null == (e = tL().hardwareEncoding) || e;
}
function tY() {
    eY.on(b.aB.Connection, (e) => {
        var t;
        tx(e), tM(e), tV(e);
        let n = tL();
        e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers),
            e.setQoS(n.qos),
            e.setExperimentalEncoders(n.experimentalEncoders),
            e.setHardwareH264(tH()),
            e.setSoftwareH264(null == (t = n.openH264) || t);
        let i = e_.Z.getGuildId(),
            {
                muteBeforeProcessing: o,
                pttBeforeProcessing: s,
                skipEncode: l,
            } = (null != i ? B.Z : G.Z).getCurrentConfig(
                {
                    location: "setupMediaEngine",
                    guildId: null != i ? i : void 0,
                },
                { autoTrackExposure: !0 },
            );
        o && e.setExperimentFlag(ev.V8.MUTE_BEFORE_PROCESSING, !0),
            s && e.setExperimentFlag(ev.V8.PTT_BEFORE_PROCESSING, !0),
            l && e.setExperimentFlag(ev.V8.SKIP_ENCODE, !0);
        let c = !1,
            u = !0;
        if (
            (e.setExperimentFlag(ev.V8.RESET_DECODER_ON_ERRORS, !0),
            c && e.setExperimentFlag(ev.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0),
            u && e.setExperimentFlag(ev.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0),
            e.context === ev.Yn.STREAM)
        ) {
            let { simulcastEnabled: t, lqStreamBitrate: n } = V.Z.getConfig();
            e.configureGoLiveSimulcast(t, n);
        }
        if (
            ((0, ei.isWindows)()
                ? (null == tA ? void 0 : tA.startsWith("NVIDIA")) || (null == tA ? void 0 : tA.startsWith("AMD"))
                    ? e.setExperimentFlag(ev.V8.SIGNAL_AV1, !0)
                    : e.setExperimentFlag(ev.V8.SIGNAL_AV1_DECODE, !0)
                : ((0, ei.isMac)() || (0, ei.isLinux)()) && e.setExperimentFlag(ev.V8.SIGNAL_AV1_DECODE, !0),
            (0, ei.isWindows)() && e.setExperimentFlag(ev.V8.SIGNAL_AV1_HARDWARE_DECODE, !0),
            (0, ei.isWeb)())
        ) {
            let { enabled: t } = (0, Z.A)("MediaEngineStore");
            e.setExperimentFlag(ev.V8.BROWSER_HEVC, t);
        }
        if ((eY.setHasFullbandPerformance((0, R.Z)()), e.setRemoteAudioHistory(1000), (0, C.Z)(r))) {
            let t = A.Z.getSettings();
            e.setExperimentFlag(ev.V8.STREAMER_CLIP, t.clipsEnabled);
            let { enableViewerClipping: n } = W.Z.getCurrentConfig(
                { location: "f627ab_15" },
                { autoTrackExposure: !1 },
            );
            e.setViewerSideClip(n), e.setClipsKeyFrameInterval(ev.ux);
        }
        for (let t of ((n = tL(e.context)), e.setPostponeDecodeLevel(eB), Object.keys(n.localMutes)))
            t !== ec.default.getId() && e.setLocalMute(t, n.localMutes[t]);
        for (let t of Object.keys(n.localVolumes)) t !== ec.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
        for (let t of Object.keys(n.localPans)) {
            let r = n.localPans[t];
            e.setLocalPan(t, r.left, r.right);
        }
        for (let t of Object.keys(n.disabledLocalVideos)) e.setLocalVideoDisabled(t, n.disabledLocalVideos[t]);
        e.on(b.Sh.Speaking, (t, n) => {
            v.Z.dispatch({
                type: "SPEAKING",
                context: e.context,
                userId: t,
                speakingFlags: n,
            });
        }),
            e.context === ev.Yn.DEFAULT &&
                ((e9 = !1),
                (te = !1),
                e.on(b.Sh.SpeakingWhileMuted, () => {
                    (e9 = !0),
                        (te = !0),
                        r.emitChange(),
                        tt.stop(),
                        tt.start(eZ, () => {
                            (te = !1), r.emitChange();
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
                    et.default.track(
                        eg.rMx.VIDEOHOOK_INITIALIZED,
                        eS(
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
                eN.warn("noisecancellererror event: ".concat(e)),
                    (0, P.kr)({
                        type: P.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tG(e),
                    }),
                    (tg = !0),
                    et.default.track(eg.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
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
                eN.warn("voiceactivitydetectorerror event: ".concat(e)),
                    (0, P.kr)({
                        type: P.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tG(e),
                    }),
                    et.default.track(eg.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    v.Z.dispatch({
                        type: "AUDIO_SET_MODE",
                        context: ev.Yn.DEFAULT,
                        mode: eg.pM4.VOICE_ACTIVITY,
                        options: eC(eS({}, tL(ev.Yn.DEFAULT).modeOptions), { vadUseKrisp: !1 }),
                    }),
                    v.Z.dispatch({
                        type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
                        code: e,
                    });
            }),
            e.on(b.Sh.SdpError, (e, t, n, r) => {
                et.default.track(eg.rMx.SDP_ERROR, {
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
            e.setBitRate(eu.Z.bitrate),
            e.applyVideoQualityMode(em.Z.mode);
    }),
        eY.on(b.aB.DeviceChange, (e, t, n) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_DEVICES",
                inputDevices: e,
                outputDevices: t,
                videoDevices: n,
            });
        }),
        eY.on(b.aB.VolumeChange, (e, t) => {
            v.Z.dispatch({
                type: "AUDIO_VOLUME_CHANGE",
                inputVolume: e,
                outputVolume: t,
            });
        }),
        eY.on(b.aB.DesktopSourceEnd, (e, t) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                settings: null,
                endReason: e,
                errorCode: t,
            });
        }),
        eY.on(b.aB.AudioPermission, (e) => {
            (ty = !0),
                v.Z.dispatch({
                    type: "MEDIA_ENGINE_PERMISSION",
                    kind: "audio",
                    granted: e,
                });
        }),
        eY.on(b.aB.VideoPermission, (e) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_PERMISSION",
                kind: "video",
                granted: e,
            });
        }),
        eY.on(b.aB.WatchdogTimeout, async () => {
            let e;
            try {
                await en.Z.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
            } catch (t) {
                "number" == typeof t.status && (e = t.status);
            }
            eN.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)),
                et.default.track(eg.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        eY.on(b.aB.VideoInputInitialized, (e) => {
            et.default.track(eg.rMx.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired
                    ? null
                    : Math.round(e.timeToFirstFrame * er.Z.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: e_.Z.getMediaSessionId(),
                rtc_connection_id: e_.Z.getRTCConnectionId(),
            });
        }),
        eY.on(b.aB.AudioInputInitialized, (e) => {
            et.default.track(eg.rMx.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * er.Z.Millis.SECOND),
                rtc_connection_id: e_.Z.getRTCConnectionId(),
            });
        }),
        eY.on(b.aB.ClipsRecordingRestartNeeded, () => {
            v.Z.dispatch({ type: "CLIPS_RESTART" });
        }),
        eY.on(b.aB.ClipsInitFailure, (e, t) => {
            v.Z.wait(() => {
                v.Z.dispatch({
                    type: "CLIPS_INIT_FAILURE",
                    errMsg: e,
                    applicationName: t,
                });
            });
        }),
        eY.on(b.aB.ClipsRecordingEnded, (e, t) => {
            var n, r;
            (null == o || null == (n = o.desktopSource) ? void 0 : n.id) === e &&
                (null != t && (null == a || null == (r = a.desktopSource) ? void 0 : r.soundshareId) !== t && T.pn(t),
                (o = null));
        }),
        eY.on(b.aB.NativeScreenSharePickerUpdate, (e, t) => {
            v.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE",
                existing: e,
                content: t,
            });
        }),
        eY.on(b.aB.NativeScreenSharePickerCancel, (e) => {
            v.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL",
                existing: e,
            });
        }),
        eY.on(b.aB.NativeScreenSharePickerError, (e) => {
            v.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_ERROR",
                error: e,
            });
        }),
        eY.on(b.aB.AudioDeviceModuleError, (e, t, n) => {
            et.default.track(eg.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                audio_device_module: e,
                code: t,
                device_name: n,
            });
        }),
        eY.on(b.aB.VideoCodecError, (e) => {
            let t = "encode" === e.mode ? P.u.VIDEO_ENCODE_ERROR : P.u.VIDEO_DECODE_ERROR,
                n = {
                    videoCodec: e.codecStandard,
                    errorMessage: e.message,
                };
            (0, P.kr)(
                t === P.u.VIDEO_ENCODE_ERROR
                    ? eC(eS({ type: t }, n), { videoEncoder: e.implName })
                    : eC(eS({ type: t }, n), { videoDecoder: e.implName }),
            );
        }),
        eY.on(b.aB.ConnectionStats, (e) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_CONNECTION_STATS",
                connectionStats: e.map((e) => {
                    let { stats: t, connection: n } = e;
                    return {
                        stats: t,
                        mediaEngineConnectionId: n.mediaEngineConnectionId,
                        version: eF++,
                        context: n.context,
                    };
                }),
            });
        }),
        eY.on(b.aB.VoiceQueueMetrics, (e) => {
            let t = rR(e);
            null !== t && et.default.track(eg.rMx.VOICE_QUEUE_METRICS, t);
        }),
        eY.setOnVideoContainerResized((e, t, n) => {
            v.Z.wait(() =>
                v.Z.dispatch({
                    type: "VIDEO_SIZE_UPDATE",
                    streamId: e,
                    width: t,
                    height: n,
                }),
            );
        }),
        nj(),
        nk(),
        tQ.reset(),
        (0, ep.q)().then((e) => {
            null != e && (tA = e.gpu_brand);
        }),
        eY.on(b.aB.SystemMicrophoneModeChange, (e) => {
            eY.eachConnection(tV);
        });
}
function tW() {
    return (0, ei.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eE.c5);
}
function tK() {
    return (0, ei.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eE.sN);
}
function tz() {
    return (
        (0, ei.isMac)() &&
        eY.supports(ev.AN.SCREEN_CAPTURE_KIT) &&
        m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eE.C7)
    );
}
function tq() {
    return (
        (0, ei.isWindows)() &&
        eY.supports(ev.AN.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        eY.supports(ev.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function tX() {
    return eY.supports(ev.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
let tQ = new (class {
    start() {
        this.started || ((this.started = !0), eY.on(b.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout &&
                (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            eY.removeListener(b.aB.Silence, this.handleSilence),
            v.Z.dispatch({
                type: "AUDIO_INPUT_DETECTED",
                inputDetected: null,
            }));
    }
    update() {
        let e = tL();
        !ta && e_.Z.getState() === eg.hes.RTC_CONNECTED && e.mode === eg.pM4.VOICE_ACTIVITY && e.silenceWarning
            ? this.start()
            : this.stop();
    }
    reset() {
        this.stop(), this.update();
    }
    constructor() {
        eT(this, "stateChangeTimeout", void 0),
            eT(this, "noVoiceTimeout", 5000),
            eT(this, "voiceTimeout", 1500),
            eT(this, "started", !1),
            eT(this, "handleSilence", (e) => {
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
                                    e && (to = !0));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout,
                    ));
            });
    }
})();
function tJ() {
    var e;
    let t = y.K.get("audio");
    null != t && (y.K.set(eR, { [ev.Yn.DEFAULT]: t }), y.K.remove("audio")),
        (eW = null != (e = y.K.get(eR)) ? e : {}),
        p().each(eW, (e) => {
            if (
                (p().defaultsDeep(e, eV()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, el.Kd)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== eP &&
                    ((e.vadUseKrispSettingVersion = eP), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                !e.vadThrehsoldMigrated)
            ) {
                var t;
                (e.vadThrehsoldMigrated = !0),
                    (null == (t = e.modeOptions) ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = eG);
            }
            eY.supports(ev.AN.SIDECHAIN_COMPRESSION) &&
                e.sidechainCompressionSettingVersion < ex &&
                ((e.sidechainCompressionSettingVersion = ex), (e.sidechainCompression = !0)),
                (0, ei.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== eD &&
                      ((e.ncUseKrispjsSettingVersion = eD), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== ew &&
                      ((e.ncUseKrispSettingVersion = ew), (e.noiseSuppression = !1), (e.noiseCancellation = !0)),
                e.hardwareEnabledVersion !== eL && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = eL)),
                null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
        }),
        t1();
}
function t$(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ev.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = tD(t);
    return Object.assign(r, e), !__OVERLAY__ && n && y.K.set(eR, eW), r;
}
function t0() {
    y.K.remove(eR), location.reload();
}
function t1() {
    let e = tL();
    eY.setAudioInputDevice(e.inputDeviceId),
        eY.setAudioOutputDevice(e.outputDeviceId),
        tU(),
        eY.setInputVolume(e.inputVolume),
        eY.setOutputVolume(e.outputVolume),
        eY.setH264Enabled(tH() || e.openH264),
        eY.setAv1Enabled(tH()),
        eY.setH265Enabled(tH()),
        eY.setAecDump(e.aecDumpEnabled),
        eY.setSidechainCompression(e.sidechainCompression),
        eY.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        eY.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing);
}
function t2() {
    ez ||
        eY.enable().then(() =>
            v.Z.dispatch({
                type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
                enabled: !0,
                unmute: !1,
            }),
        );
}
function t3(e) {
    return {
        id: ev.w5,
        index: 0,
        name: e,
        disabled: !0,
        hardwareId: void 0,
        containerId: void 0,
    };
}
function t4(e, t) {
    if (0 === e.length) {
        let e = t3(t);
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
function t8(e, t) {
    var n, r;
    let i = null != (r = null != (n = e[t]) ? n : e[ev.w5]) ? r : p()(e).values().first();
    return null != i ? i.id : t;
}
function t5(e) {
    let t = eJ;
    if (((eJ = t4(e, eI.intl.string(eI.t["/QIjDA"]))), !p().isEqual(eJ, t))) {
        let e = tL(),
            t = t8(eJ, e.inputDeviceId);
        eY.setAudioInputDevice(t);
    }
}
function t6(e) {
    let t = e$;
    if (((e$ = t4(e, eI.intl.string(eI.t.xlUg0t))), !p().isEqual(e$, t))) {
        let e = tL(),
            t = t8(e$, e.outputDeviceId);
        eY.setAudioOutputDevice(t);
    }
}
function t7(e) {
    tr = e.length > 0;
    let t = e0;
    if (((e0 = t4(e, eI.intl.string(eI.t.WKWARU))), e8 && !p().isEqual(e0, t))) {
        var n;
        let e = void 0 !== e0[e5],
            r = e5 === ev.w5 && (null == (n = t[ev.w5]) ? void 0 : n.disabled);
        tU(e || r);
    }
}
function t9() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        r =
            null != (e = J.Z.settings.audioContextSettings)
                ? e
                : {
                      user: {},
                      stream: {},
                  };
    for (let e of Object.keys(r)) {
        let i = e === ey.u0.USER ? ev.Yn.DEFAULT : ev.Yn.STREAM,
            a = i === ev.Yn.STREAM ? ev.Yh : ev.Qx,
            o = null != (t = r[e]) ? t : {},
            { localMutes: s, localVolumes: l } = tL(i);
        for (let [e, t] of Object.entries(o))
            null == (0, Q.Ky)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== a ? (l[e] = t.volume) : delete l[e],
                eY.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (n)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == o[e] &&
                    (delete s[e],
                    delete l[e],
                    eY.eachConnection((t) => {
                        t.setLocalVolume(e, a), t.setLocalMute(e, !1);
                    }, i));
        t$(
            {
                localMutes: s,
                localVolumes: l,
            },
            i,
        );
    }
}
function ne(e) {
    if (null == r)
        return (
            eN.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
            {
                soundshareId: null,
                soundshareSession: "",
            }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : en.Z.getAudioPid(e),
            n = "";
        return (
            null != t && (n = en.Z.generateSessionFromPid(t)),
            {
                soundshareId: t,
                soundshareSession: n,
            }
        );
    }
}
function nt(e, t) {
    (0, ei.isWindows)() &&
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
function nn(e) {
    (i = e.sessionId), (e1 = !1), (e4 = !1);
    let t = tL();
    if (
        (tq() && (tX() ? rr(ev.iA.AUTOMATIC) : t.automaticAudioSubsystem && ri()),
        eY.supports(ev.AN.OFFLOAD_ADM_CONTROLS))
    ) {
        let e = !1;
        (0, ei.isDesktop)()
            ? (e = (0, k.E)({ location: "handleConnectionOpen" }).enabled)
            : ((0, ei.isIOS)() || (0, ei.isAndroid)()) && (e = (0, U.W)({ location: "handleConnectionOpen" }).enabled),
            eY.setOffloadAdmControls(e);
    }
    (0, $.wt)({
        location: "MediaEngineStore",
        autoTrackExposure: !1,
    }) &&
        null !== t.mostRecentlyRequestedVoiceFilter &&
        (0, ei.isDesktop)() &&
        (ee.Z.getLastInitAttemptMayHaveCrashed()
            ? (v.Z.dispatch({
                  type: "AUDIO_SET_SELF_MUTE",
                  mute: !0,
                  context: ev.Yn.DEFAULT,
                  playSoundEffect: !0,
              }),
              t$({ mostRecentlyRequestedVoiceFilter: null }))
            : n(358820).r5()),
        t9();
}
function nr(e) {
    let { mediaEngineState: t } = e;
    (eW = t.settingsByContext),
        (eJ = t.inputDevices),
        (e$ = t.outputDevices),
        (tS = t.appSupported),
        (tc = t.krispModuleLoaded),
        (s = t.krispVersion),
        (eX = t.goLiveContext);
}
function ni() {
    i = null;
}
function na() {
    if ((0, ei.isWeb)()) {
        let e = Y.N.getCurrentConfig({ location: "MediaEngineStore handlePostConnectionOpen" });
        e.loadWasmModule && e.preload && r.startDavePreload();
    }
    return !1;
}
function no(e) {
    switch (e.state) {
        case eg.hes.CONNECTING:
            t2();
            break;
        case eg.hes.RTC_CONNECTING:
            (ta = !1), (to = !1);
            break;
        case eg.hes.RTC_CONNECTED:
            tU();
            break;
        case eg.hes.DISCONNECTED:
            nh(), nm();
    }
    tQ.update();
}
function ns(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (e1 = t.mute || t.suppress), (e4 = t.deaf), eY.eachConnection(tM);
            let e = null != t.guildId && null != t.channelId && null != tm && tm !== t.channelId,
                n = !ts && null == t.channelId;
            return tU(!e && !n && e8), (tm = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== ec.default.getId() || null != e_.Z.getChannelId() || tU(!1, null), e;
    }, !1);
}
function nl(e) {
    let { mute: t } = e;
    (e2 = t), eY.eachConnection(tM);
}
function nc(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = tL(t);
    if (t === ev.Yn.DEFAULT && (q.Z.requestPermission(eb.Eu.AUDIO), e3)) return !1;
    (r = !i && !r) || (i = !1),
        n || (e7 = !0),
        t$(
            {
                mute: r,
                deaf: i,
            },
            t,
        ),
        eY.eachConnection(tM);
}
function nu(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    t$({ mute: n }, t), r || (e7 = !0), eY.eachConnection(tM);
}
function nd(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== ey.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    t9(!0);
}
function nf(e) {
    let { context: t } = e;
    t$({ deaf: !tL(t).deaf }, t), eY.eachConnection(tM);
}
function n_(e) {
    let { context: t, userId: n } = e;
    if (n === ec.default.getId()) return;
    let { localMutes: r } = tL(t);
    r[n] ? delete r[n] : (r[n] = !0),
        t$({ localMutes: r }, t),
        eY.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function np(e) {
    var t, n, r, i, a, o, s;
    let { context: l, userId: c, videoToggleState: u, persist: d, isAutomatic: _ } = e;
    f()(!(d && _), "These are not allowed to both be true.");
    let p = u === eg.ZUi.DISABLED,
        { disabledLocalVideos: h } = tL(l),
        m = null != (t = h[c]) && t,
        g = tv.has(c),
        E = u === eg.ZUi.AUTO_ENABLED || u === eg.ZUi.MANUAL_ENABLED;
    eN.info(
        "disableVideo="
            .concat(p, " currentlyDisabled=")
            .concat(m, " currentlyAutoDisabled=")
            .concat(g, ", isVideoShown=")
            .concat(E),
    ),
        f()(!(g && !m), "If you are auto-disabled, then you are also disabled.");
    let b = p !== m,
        y = l === ev.Yn.DEFAULT,
        O = _ && b && y,
        v = d && b && y;
    eN.info(
        "changed="
            .concat(b, " isDefaultContext=")
            .concat(y, " isUpdateCausedByVideoHealthManager=")
            .concat(O, " isManualToggleByUser=")
            .concat(v),
    );
    let { videoToggleStateMap: I } = tL(l);
    if (
        (I[c] === eg.ZUi.AUTO_PROBING &&
            u === eg.ZUi.AUTO_ENABLED &&
            (0, z.Z)(c, p ? ev.fC.AUTO_DISABLE : ev.fC.AUTO_ENABLE, E),
        (I[c] = u),
        t$({ videoToggleStateMap: I }, l, d),
        u === eg.ZUi.AUTO_PROBING
            ? null == (n = e_.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, !0)
            : null == (r = e_.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, !1),
        tI ||
            (eN.info("isAutoDisableAllowed=".concat(tI, " - disabling VideoHealthManager")),
            null == (a = e_.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()),
        O)
    ) {
        if ((!p && !g) || (p && !tI)) return;
        (0, z.Z)(c, p ? ev.fC.AUTO_DISABLE : ev.fC.AUTO_ENABLE, E), p ? tv.add(c) : tv.delete(c);
    } else
        v &&
            (g && !p
                ? (eN.info("disallowing auto-disable for this session because of manual override by user"),
                  (tI = !1),
                  null == (s = e_.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(),
                  (0, z.Z)(c, ev.fC.MANUAL_REENABLE, E))
                : (0, z.Z)(c, p ? ev.fC.MANUAL_DISABLE : ev.fC.MANUAL_ENABLE, E));
    y && !p && tv.delete(c),
        p ? (h[c] = !0) : delete h[c],
        t$({ disabledLocalVideos: h }, l, d),
        eY.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(c, null != (t = h[c]) && t);
        }, l);
}
function nh() {
    if (0 === tv.size) return;
    let e = ev.Yn.DEFAULT,
        { disabledLocalVideos: t } = tL(e);
    tv.forEach((n) => {
        f()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            eY.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tv.clear(),
        t$({ disabledLocalVideos: t }, e, !1);
}
function nm() {
    let e = ev.Yn.DEFAULT,
        { videoToggleStateMap: t } = tL(e);
    for (let [e, n] of Object.entries(t)) n === eg.ZUi.AUTO_PROBING && delete t[e];
    t$({ videoToggleStateMap: t }, e, !1);
}
function ng(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === ec.default.getId()) return;
    let i = t === ev.Yn.STREAM ? ev.Yh : ev.Qx,
        { localVolumes: a } = tL(t);
    r === i ? delete a[n] : (a[n] = r), t$({ localVolumes: a }, t), eY.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function nE(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: a } = tL(t);
    (a[n] = {
        left: r,
        right: i,
    }),
        t$({ localPans: a }, t),
        eY.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function nb(e) {
    let { context: t, mode: n, options: r } = e;
    t$(
        {
            mode: n,
            modeOptions: r,
        },
        t,
    ),
        eY.eachConnection(tx),
        tQ.update();
}
function ny(e) {
    let { volume: t } = e;
    t$({ inputVolume: tj(t) }), eY.setInputVolume(t);
}
function nO(e) {
    let { volume: t } = e;
    t$({ outputVolume: t }), eY.setOutputVolume(t);
}
function nv(e) {
    let { id: t } = e;
    (t = t8(eJ, t)), (eQ = performance.now()), t$({ inputDeviceId: t }), eY.setAudioInputDevice(t);
}
function nI(e) {
    let { id: t } = e;
    t$({ outputDeviceId: (t = t8(e$, t)) }), eY.setAudioOutputDevice(t);
}
function nT(e) {
    let { id: t } = e;
    t$({ videoDeviceId: (t = t8(e0, t)) }), tU();
}
function nS(e) {
    let { inputProfile: t } = e;
    t$({ activeInputProfile: t });
    let n = tL();
    eY.eachConnection((e) => {
        tx(e),
            tZ(e, n.automaticGainControl),
            e.setEchoCancellation(n.echoCancellation),
            e.setExperimentalEncoders(n.experimentalEncoders),
            tF(e, n.noiseCancellation),
            e.setNoiseSuppression(n.noiseSuppression);
    }),
        eY.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        tQ.update(),
        nM();
}
function nA(e) {
    return eq !== e.required && ((eq = e.required), e.required || eY.interact(), !0);
}
function nC(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    t5(t), t6(n), t7(r);
}
function nN(e) {
    let { inputVolume: t, outputVolume: n } = e;
    t$({
        inputVolume: tj(t),
        outputVolume: n,
    });
}
function nR(e) {
    var t;
    let n = tL(),
        r = eY.getAudioSubsystem(),
        i = eY.getAudioLayer(),
        a = t8(eJ, n.inputDeviceId),
        o = null == (t = eJ[a]) ? void 0 : t.name;
    et.default.track(eg.rMx.VOICE_PROCESSING, {
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
function nP(e) {
    let t = t$({ echoCancellation: e.enabled });
    eY.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nM(), nR(e.location);
}
function nw(e) {
    nL(e.enabled);
}
function nD(e) {
    let t = t$({ sidechainCompressionStrength: e.strength });
    eY.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function nL(e) {
    let t = t$({ sidechainCompression: e });
    eY.setSidechainCompression(t.sidechainCompression);
}
function nx(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tT.add(n) : tT.delete(n), nj(), nM();
}
function nj() {
    let e = !tT.has("voice_filter_preview") && !tT.has("mic_test");
    eY.setMaybePreprocessMute(e);
}
function nM() {
    let e = tL(),
        t = tT.size > 0,
        n = e.inputDeviceId,
        r = ed.Z.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        a = ed.Z.hasNoiseSuppression(n) || e.noiseSuppression,
        o = tB(ed.Z.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation,
        l = null !== tf,
        c = tT.has("voice_filter") && 1 === tT.size;
    eY.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: a,
        automaticGainControlConfig: o,
        noiseCancellation: s,
        voiceFilters: l,
        loopbackUseAudioMode: c,
    });
}
async function nk() {
    var e, t, n, r;
    if (!eY.supports(ev.AN.VAAPI)) return;
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
    (tP = a), a && eY.supports(ev.AN.GAMESCOPE_CAPTURE) && (tR = !0);
}
function nU(e) {
    let t = t$({ noiseSuppression: e.enabled });
    eY.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nM(), nR(e.location);
}
function nG(e) {
    let t = t$({ automaticGainControl: e.enabled });
    eY.eachConnection((e) => tZ(e, t.automaticGainControl)), nM(), nR(e.location);
}
function nB(e) {
    let t = t$({ noiseCancellation: e.enabled });
    eY.eachConnection((e) => tF(e, t.noiseCancellation)), nM(), nR(e.location);
}
function nZ(e) {
    X.Z.setKrispModelOverride(e.model), (c = e.model), nM();
}
function nF(e) {
    var t;
    (0, ei.isWeb)() || ((td = e.enabled), null == (t = eY.setNoiseCancellationEnableStats) || t.call(eY, e.enabled));
}
function nV(e) {
    let t = t$({ experimentalEncoders: e.enabled });
    eY.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
}
function nH(e) {
    let { enabled: t } = e,
        n = t$({ hardwareEncoding: t }),
        r = tH();
    eY.eachConnection((e) => e.setHardwareH264(r)),
        eY.setH264Enabled(r || n.openH264),
        eY.setAv1Enabled(r),
        eY.setH265Enabled(r);
}
function nY(e) {
    t$({ silenceWarning: e.enabled }), tQ.update();
}
function nW(e) {
    eY.setDebugLogging(e.enabled);
}
function nK(e) {
    let { level: t } = e;
    (l = t), X.Z.setKrispSuppressionLevel(t);
}
function nz(e) {
    t$({ videoHook: e.enabled });
}
function nq(e) {
    t$({ experimentalSoundshare2: e.enabled });
}
function nX(e) {
    let { enabled: t } = e;
    t$({ useSystemScreensharePicker: t });
}
function nQ(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = t$({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r,
        });
    eY.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function nJ(e) {
    let { enabled: t } = e;
    t$({ qos: t }), eY.eachConnection((e) => e.setQoS(t));
}
function n$() {
    t0();
}
function n0(e) {
    let { inputDetected: t } = e;
    (ti = t), !ta && ti && ((ta = !0), tQ.update());
}
function n1(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === e3) return !1;
    (e3 = n), eY.eachConnection(tM);
}
function n2(e) {
    let { state: t, permissionType: n } = e,
        r = t === eb.PQ.ACCEPTED;
    switch (n) {
        case eb.Eu.AUDIO:
            (ty = !0), eY.eachConnection(tM);
            break;
        case eb.Eu.CAMERA:
            !r && e8 && tU(!1);
            break;
        default:
            return !1;
    }
}
function n3() {
    return tc || !1;
}
async function n4() {
    try {
        var e, t, n, i;
        await es.ZP.ensureModule("discord_krisp");
        let a = es.ZP.requireModule("discord_krisp");
        (tc = !0),
            (s = null == (e = a.getSdkVersion) ? void 0 : e.call(a)),
            (l = null != (i = null == (t = a.getSuppressionLevel) ? void 0 : t.call(a)) ? i : 100),
            null == (n = a.getNcModels) ||
                n.call(a).then((e) => {
                    (tu = e), r.emitChange();
                }),
            r.emitChange();
    } catch (t) {
        eN.warn("Failed to load Krisp module: ".concat(t.message)), eo.Z.captureException(t);
        let e = ev.H3.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? ev.H3.INITIALIZED : n;
        }
        et.default.track(eg.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), t$({ noiseCancellation: !1 });
    } finally {
        tl = !1;
    }
}
function n8() {
    return (0, ei.isWindows)() || (0, ei.isLinux)() || (0, ei.isMac)();
}
function n5() {
    !n8() || __OVERLAY__ || tl || tc
        ? (0, ei.isWeb)() && eY.supports(ev.AN.NOISE_CANCELLATION)
            ? ((tc = !0), r.emitChange())
            : (0, ei.isWeb)() && t$({ noiseCancellation: !1 })
        : ((tl = !0), n4());
}
function n6(e) {
    let { enabled: t } = e;
    et.default.track(eg.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != tf ? tf : null,
        enabled: t,
    }),
        t$({ voiceFilterPlaybackEnabled: t });
}
function n7(e) {
    let { newVoiceFilterId: t } = e;
    t$({ mostRecentlyRequestedVoiceFilter: t }), eY.eachConnection((e) => e.setVoiceFilterId(t));
}
function n9() {
    t$({ mostRecentlyRequestedVoiceFilter: null });
}
function re(e) {
    let { voiceFilterId: t } = e;
    (tp = tf), (th = t_), (tf = t), (t_ = null === t ? null : Date.now());
}
function rt(e) {
    let t = e.bypassEnabled;
    t$({ bypassSystemInputProcessing: t }), eY.setAudioInputBypassSystemProcessing(t), nR(e.location);
}
function rn(e) {
    rr(e.subsystem);
}
function rr(e) {
    e === ev.iA.AUTOMATIC
        ? (t$({ automaticAudioSubsystem: !0 }), ri())
        : (t$({ automaticAudioSubsystem: !1 }), eY.setAudioSubsystem(e));
}
function ri() {
    eY.queueAudioSubsystem(ev.iA.EXPERIMENTAL);
}
function ra(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && tU(i, null), null != t || null == n)) {
        ts = !1;
        return;
    }
    if (ts) return;
    ts = !0;
    let a = tL();
    (a.mute || a.deaf) &&
        (t$({
            deaf: !1,
            mute: !1,
        }),
        eY.eachConnection(tM));
}
function ro(e) {
    let { application: t } = e;
    eK.add(t.id);
}
function rs(e) {
    let { application: t } = e;
    eK.delete(t.id);
}
function rl(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (ez = !1), eY.eachConnection(tM);
                break;
            case "video":
                tU(!1);
        }
}
function rc(e) {
    (ez = e.enabled),
        e.unmute &&
            t$({
                mute: !1,
                deaf: !1,
            }),
        eY.eachConnection(tM);
}
function ru(e) {
    let { enabled: t } = e;
    q.Z.requestPermission(eb.Eu.CAMERA), tU(t);
}
function rd(e) {
    let { sourceId: t, applicationName: n, quality: i } = e,
        a = A.Z.isDecoupledGameClippingEnabled(),
        s = A.Z.getSettings().decoupledClipsEnabled;
    if (!a || !s || null == I.Z) return;
    let l = null,
        c = null,
        u = en.Z.getPidFromDesktopSource(t);
    ({ soundshareId: l, soundshareSession: c } = ne(u));
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
        (eY.setClipsSource(null),
        (0, ei.isWindows)() && null != o.desktopSource.soundshareId && T.pn(o.desktopSource.soundshareId)),
        null != l && nt(l, c),
        (o = d);
    let f = tw(),
        _ = tL().videoHook;
    eY.setClipsSource({
        desktopDescription: {
            id: o.desktopSource.id,
            soundshareId: o.desktopSource.soundshareId,
            useVideoHook: _,
            useGraphicsCapture: tW(),
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: tz(),
            videoHookStaleFrameTimeoutMs: ek,
            graphicsCaptureStaleFrameTimeoutMs: eU,
            hdrCaptureMode: f,
        },
        quality: i,
        applicationName: n,
    });
}
function rf(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((o = null), eY.setClipsSource(null));
}
function r_(e) {
    var t, n, r, i;
    let { settings: a } = e;
    if ((null == a ? void 0 : a.desktopSettings) != null) {
        let e = null,
            r = null,
            { sourceId: i, sound: o } = a.desktopSettings,
            s = null != (t = a.context) ? t : ev.Yn.DEFAULT,
            l =
                null != (n = a.qualityOptions)
                    ? n
                    : {
                          resolution: 720,
                          frameRate: 30,
                      },
            c = !1 === o ? null : en.Z.getPidFromDesktopSource(i);
        ei.isPlatformEmbedded &&
            !0 === o &&
            (({ soundshareId: e, soundshareSession: r } = ne(c)), null != e && nt(e, r)),
            tk(s),
            tU(s === ev.Yn.STREAM && e8, {
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
        let e = null != (r = a.context) ? r : ev.Yn.DEFAULT,
            { videoDeviceGuid: t, audioDeviceGuid: n } = a.cameraSettings,
            o = e === ev.Yn.STREAM && e8,
            s =
                null != (i = a.qualityOptions)
                    ? i
                    : {
                          resolution: 720,
                          frameRate: 30,
                      };
        tU(o, {
            cameraSource: {
                videoDeviceGuid: t,
                audioDeviceGuid: n,
            },
            quality: {
                resolution: s.resolution,
                frameRate: s.frameRate,
            },
        });
    } else tU(e8, null);
}
function rp(e) {
    let { section: t } = e;
    return t === eg.oAB.VOICE && t2(), !1;
}
function rh() {
    return eY.eachConnection(tV), !1;
}
function rm(e) {
    let { enabled: t } = e,
        n = t$({ openH264: t });
    eY.setH264Enabled(tH() || n.openH264),
        eY.eachConnection((e) => {
            var t;
            return e.setSoftwareH264(null == (t = n.openH264) || t);
        });
}
function rg(e) {
    let { enabled: t } = e,
        n = t$({ aecDumpEnabled: t });
    eY.setAecDump(n.aecDumpEnabled);
}
function rE(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (eW = Object.values(ev.Yn).reduce((e, n) => {
        let r = n,
            i = eV();
        return (e[r] = p().merge(i, t[r])), e;
    }, {})),
        y.K.set(eR, eW),
        t1();
}
function rb(e) {
    let { state: t } = e,
        n = D.Z.isEnabled();
    if (t === eg.$7l.BACKGROUND && e8 && !n) (tn = !0), tU(!1);
    else {
        if (t !== eg.$7l.ACTIVE || !tn) return !1;
        (tn = !1), tU(!0);
    }
    return !0;
}
function ry(e) {
    eY.eachConnection((t) => t.setBitRate(e.bitrate));
}
function rO() {
    if ((!e8 && null == a) || null != e_.Z.getRTCConnectionId()) return !1;
    tU(!1, null);
}
function rv() {
    return !!tg && ((tg = !1), !0);
}
function rI(e) {
    eY.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function rT(e) {
    let { settings: t } = e;
    eY.applyMediaFilterSettings(t).finally(() => {
        (tE = !1), r.emitChange();
    });
}
function rS() {
    tE = !0;
}
function rA() {
    tE = !1;
}
function rC(e) {
    tC = e.enabled;
}
class rN extends (u = E.ZP.Store) {
    initialize() {
        tY(),
            tJ(),
            n5(),
            nm(),
            (tS = {
                [ev.AN.VIDEO]: eY.supports(ev.AN.VIDEO),
                [ev.AN.DESKTOP_CAPTURE]: eY.supports(ev.AN.DESKTOP_CAPTURE),
                [ev.AN.HYBRID_VIDEO]: eY.supports(ev.AN.HYBRID_VIDEO),
            }),
            this.waitFor(ec.default, ed.Z, ef.Z, e_.Z, L.ZP, q.Z.storage, J.Z, w.Z, A.Z);
    }
    supports(e) {
        return eY.supports(e);
    }
    supportsInApp(e) {
        return tS[e] || eY.supports(e);
    }
    isSupported() {
        return eY.supported();
    }
    isExperimentalEncodersSupported() {
        return eY.supports(ev.AN.EXPERIMENTAL_ENCODERS);
    }
    isNoiseSuppressionSupported() {
        return eY.supports(ev.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return n3();
    }
    isNoiseCancellationError() {
        return tg;
    }
    isAutomaticGainControlSupported() {
        return eY.supports(ev.AN.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !tX() && (eY.supports(ev.AN.LEGACY_AUDIO_SUBSYSTEM) || eY.supports(ev.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return eY.supports(ev.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === eY.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return n3();
    }
    isAecDumpSupported() {
        return eY.supports(ev.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return eY.supports(ev.AN.VIDEO) && eY.supports(ev.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        let t = (null == (e = ef.Z.getChannel(tm)) ? void 0 : e.type) === eg.d4z.GUILD_STAGE_VOICE,
            n = tH();
        return !t && n && V.Z.simulcastEnabled();
    }
    getAecDump() {
        return tL().aecDumpEnabled;
    }
    getMediaEngine() {
        return eY;
    }
    getVideoComponent() {
        return eY.Video;
    }
    getCameraComponent() {
        return eY.Camera;
    }
    getKrispSuppressionLevel() {
        return null != l ? l : 100;
    }
    getKrispEnableStats() {
        return td;
    }
    isEnabled() {
        return ez;
    }
    isMute() {
        return this.isSelfMute() || e1;
    }
    isDeaf() {
        return this.isSelfDeaf() || e4;
    }
    hasContext(e) {
        return null != eW[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.DEFAULT;
        return e === ev.Yn.DEFAULT && e2;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.DEFAULT;
        return (
            !this.isEnabled() ||
            tL(e).mute ||
            !q.Z.didHavePermission(eb.Eu.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === ev.Yn.DEFAULT && e3)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return e7;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        e7 = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && ed.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return tC;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.DEFAULT;
        return !this.isSupported() || tL(e).deaf;
    }
    isVideoEnabled() {
        return e8 && tr;
    }
    isVideoAvailable() {
        return Object.values(e0).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.STREAM;
        return eX === e && null != a;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.STREAM;
        return eX === t && null != a && (null == (e = a.desktopSource) ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ev.Yn.DEFAULT;
        return e !== ec.default.getId() && (tL(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return eY.supports(ev.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ev.Yn.DEFAULT;
        return null != (t = tL(n).disabledLocalVideos[e]) && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ev.Yn.DEFAULT;
        return null != (t = tL(n).videoToggleStateMap[e]) ? t : eg.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ev.Yn.DEFAULT;
        return t === ev.Yn.DEFAULT && tv.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.DEFAULT;
        return e === ev.Yn.DEFAULT && tv.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tE;
    }
    isNativeAudioPermissionReady() {
        return ty;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return eX;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return eQ;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ev.Yn.DEFAULT,
            n = tL(t).localPans[e];
        return null != n ? n : eM;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ev.Yn.DEFAULT,
            n = t === ev.Yn.STREAM ? ev.Yh : ev.Qx,
            r = tL(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return tL().inputVolume;
    }
    getOutputVolume() {
        return tL().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.DEFAULT;
        return tL(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.DEFAULT;
        return tL(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return tf;
    }
    getActiveVoiceFilterAppliedAt() {
        return t_;
    }
    getPreviousVoiceFilter() {
        return tp;
    }
    getPreviousVoiceFilterAppliedAt() {
        return th;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return tL().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return tL().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            p().each(eW, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === eg.pM4.PUSH_TO_TALK && eK.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return t8(eJ, tL().inputDeviceId);
    }
    getOutputDeviceId() {
        return t8(e$, tL().outputDeviceId);
    }
    getVideoDeviceId() {
        return t8(e0, tL().videoDeviceId);
    }
    getInputDevices() {
        return eJ;
    }
    getOutputDevices() {
        return e$;
    }
    getVideoDevices() {
        return e0;
    }
    getEchoCancellation() {
        let e = tL();
        return ed.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return eY.supports(ev.AN.SIDECHAIN_COMPRESSION) && tL().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return tL().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return tL().h265Enabled;
    }
    getLoopback() {
        return tT.size > 0;
    }
    getLoopbackReasons() {
        return tT;
    }
    getNoiseSuppression() {
        let e = tL();
        return ed.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tL();
        return ed.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return tL().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return tL().noiseCancellation;
    }
    getExperimentalEncoders() {
        return tL().experimentalEncoders;
    }
    getHardwareEncoding() {
        return tH();
    }
    getHardwareEncodingSetting() {
        var e;
        return null == (e = tL().hardwareEncoding) || e;
    }
    getEnableSilenceWarning() {
        return tL().silenceWarning;
    }
    getDebugLogging() {
        return eY.getDebugLogging();
    }
    getQoS() {
        return tL().qos;
    }
    getAttenuation() {
        return tL().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return tL().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return tL().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return tq() && tL().automaticAudioSubsystem ? ev.iA.AUTOMATIC : eY.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return eY.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return tL().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eO._.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.DEFAULT;
        return tL(e);
    }
    getState() {
        return {
            settingsByContext: eW,
            inputDevices: eJ,
            outputDevices: e$,
            appSupported: tS,
            krispModuleLoaded: tc,
            krispVersion: s,
            krispSuppressionLevel: l,
            goLiveSource: a,
            goLiveContext: eX,
        };
    }
    getInputDetected() {
        return ti;
    }
    getNoInputDetectedNotice() {
        return to;
    }
    getPacketDelay() {
        return ei.isPlatformEmbedded || this.getMode() !== eg.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        eY.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return eq;
    }
    getVideoHook() {
        return tL().videoHook;
    }
    supportsVideoHook() {
        return eY.supports(ev.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tL().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return (
            eY.supports(ev.AN.EXPERIMENTAL_SOUNDSHARE) &&
            m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eE.T6)
        );
    }
    supportsHookSoundshare() {
        return (
            (0, ei.isWindows)() &&
            eY.supports(ev.AN.SOUNDSHARE) &&
            m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eE.sA)
        );
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = tL().useSystemScreensharePicker,
            n = (0, ei.isLinux)();
        return e && (null != t ? t : n);
    }
    supportsSystemScreensharePicker() {
        return eY.supports(ev.AN.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return tP;
    }
    getUseGamescopeCapture() {
        return tR;
    }
    getOpenH264() {
        return tL().openH264;
    }
    getEverSpeakingWhileMuted() {
        return e9;
    }
    getSpeakingWhileMuted() {
        return te;
    }
    getKrispModelOverride() {
        return c;
    }
    getKrispModels() {
        return tu;
    }
    getKrispVadActivationThreshold() {
        var e;
        return null != (e = tL().modeOptions.vadKrispActivationThreshold) ? e : ej;
    }
    hasActiveCallKitCall() {
        return tN;
    }
    setHasActiveCallKitCall(e) {
        tN = e;
    }
    supportsScreenSoundshare() {
        return (0, ei.isMac)()
            ? eY.supports(ev.AN.SOUNDSHARE) &&
                  m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eE.yG) &&
                  tz()
            : (0, ei.isWindows)()
              ? eY.supports(ev.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, ei.isLinux)() && eY.supports(ev.AN.SCREEN_SOUNDSHARE);
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.DEFAULT,
            t = this.supports(ev.AN.VIDEO)
                ? [
                      {
                          rid: "100",
                          type: e === ev.Yn.DEFAULT ? ev.Tr.VIDEO : ev.Tr.SCREEN,
                          quality: ev.y7,
                      },
                  ]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === ev.Yn.DEFAULT || this.goLiveSimulcastEnabled()) &&
                t.push({
                    rid: "50",
                    type: e === ev.Yn.DEFAULT ? ev.Tr.VIDEO : ev.Tr.SCREEN,
                    quality: ev.LD,
                }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: !1 };
        return (
            (0, ei.isWeb)() &&
                (e.fetchDave = Y.N.getCurrentConfig({
                    location: "MediaEngineStore fetchAsyncResources",
                }).loadWasmModule),
            eY.fetchAsyncResources(e)
        );
    }
    startDavePreload() {
        if (!tb && ((tb = !0), (0, ei.isWeb)())) {
            let e = { fetchDave: !0 };
            eY.fetchAsyncResources(e).catch((e) => {
                eN.warn("DAVE preload failed:", e), eo.Z.captureException(e);
            });
        }
    }
    getSupportedSecureFramesProtocolVersion() {
        if ((0, ei.isWeb)()) {
            let { useWasmModule: e } = Y.N.getCurrentConfig({
                location: "MediaEngineStore getSupportedSecureFramesProtocolVersion",
            });
            if (!e) return 0;
        }
        let e = eY.getSupportedSecureFramesProtocolVersion(),
            t = Y.m.getCurrentConfig({ location: "MediaEngineStore" });
        return 114 === e && (e = 1), t.canSupportDaveProtocol && e >= t.protocolVersionFloor ? e : 0;
    }
    hasClipsSource() {
        return null != o;
    }
    getGpuBrand() {
        return tA;
    }
}
function rR(e) {
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
eT(rN, "displayName", "MediaEngineStore");
let rP = (r = new rN(v.Z, {
    VOICE_CHANNEL_SELECT: ra,
    VOICE_STATE_UPDATES: ns,
    CONNECTION_OPEN: nn,
    CONNECTION_CLOSED: ni,
    POST_CONNECTION_OPEN: na,
    RTC_CONNECTION_STATE: no,
    AUDIO_SET_TEMPORARY_SELF_MUTE: nl,
    AUDIO_TOGGLE_SELF_MUTE: nc,
    AUDIO_SET_SELF_MUTE: nu,
    AUDIO_TOGGLE_SELF_DEAF: nf,
    AUDIO_TOGGLE_LOCAL_MUTE: n_,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: np,
    AUDIO_SET_LOCAL_VOLUME: ng,
    AUDIO_SET_LOCAL_PAN: nE,
    AUDIO_SET_MODE: nb,
    AUDIO_SET_INPUT_VOLUME: ny,
    AUDIO_SET_OUTPUT_VOLUME: nO,
    AUDIO_SET_INPUT_DEVICE: nv,
    AUDIO_SET_OUTPUT_DEVICE: nI,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: nS,
    AUDIO_SET_ECHO_CANCELLATION: nP,
    AUDIO_SET_SIDECHAIN_COMPRESSION: nw,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nD,
    AUDIO_SET_LOOPBACK: nx,
    AUDIO_SET_NOISE_SUPPRESSION: nU,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nG,
    AUDIO_SET_NOISE_CANCELLATION: nB,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: nZ,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: nY,
    AUDIO_SET_DEBUG_LOGGING: nW,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: nK,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: nF,
    MEDIA_ENGINE_SET_VIDEO_HOOK: nz,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: nq,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: nX,
    AUDIO_SET_ATTENUATION: nQ,
    AUDIO_SET_QOS: nJ,
    MEDIA_ENGINE_DEVICES: nC,
    AUDIO_VOLUME_CHANGE: nN,
    AUDIO_RESET: n$,
    AUDIO_INPUT_DETECTED: n0,
    AUDIO_SET_SUBSYSTEM: rn,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rt,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rc,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: ru,
    MEDIA_ENGINE_PERMISSION: rl,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: r_,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nT,
    MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nV,
    MEDIA_ENGINE_INTERACTION_REQUIRED: nA,
    USER_SETTINGS_MODAL_INIT: rp,
    USER_SETTINGS_MODAL_SET_SECTION: rp,
    CERTIFIED_DEVICES_SET: rh,
    RPC_APP_CONNECTED: ro,
    RPC_APP_DISCONNECTED: rs,
    OVERLAY_INITIALIZE: nr,
    MEDIA_ENGINE_SET_OPEN_H264: rm,
    MEDIA_ENGINE_SET_HARDWARE_ENCODING: nH,
    APP_STATE_UPDATE: rb,
    SET_CHANNEL_BITRATE: ry,
    SET_VAD_PERMISSION: n1,
    SET_NATIVE_PERMISSION: n2,
    SET_CHANNEL_VIDEO_QUALITY_MODE: rI,
    MEDIA_ENGINE_SET_AEC_DUMP: rg,
    MEDIA_ENGINE_RESET_SETTINGS: rE,
    CHANNEL_DELETE: rO,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rv,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rT,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rS,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rA,
    USER_SETTINGS_PROTO_UPDATE: nd,
    CLIPS_INIT: rd,
    CLIPS_SETTINGS_UPDATE: rf,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rC,
    VOICE_FILTER_REQUEST_SWITCH: n7,
    VOICE_FILTER_LOOPBACK_TOGGLE: n6,
    VOICE_FILTER_APPLIED: re,
    VOICE_FILTER_DOWNLOAD_FAILED: n9,
    VOICE_FILTER_APPLY_FAILED: n9,
}));
