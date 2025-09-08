let r, i, a, o, s, l, c;
n.d(t, { Z: () => rA }), n(388685), n(953529), n(457542), n(539854), n(642613), n(49124), n(337869);
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
    j = n(883794),
    M = n(822253),
    k = n(177732),
    U = n(355552),
    G = n(294473),
    B = n(706629),
    Z = n(159142),
    F = n(166884),
    V = n(585360),
    H = n(947851),
    Y = n(839758),
    W = n(529558),
    K = n(441167),
    z = n(787517),
    q = n(338336),
    X = n(751571),
    Q = n(311473),
    J = n(725380),
    $ = n(581883),
    ee = n(875527),
    et = n(420439),
    en = n(626135),
    er = n(12647),
    ei = n(70956),
    ea = n(358085),
    eo = n(747268),
    es = n(960048),
    el = n(998502),
    ec = n(13140),
    eu = n(314897),
    ed = n(967368),
    ef = n(463395),
    e_ = n(592125),
    ep = n(19780),
    eh = n(704806),
    em = n(594174),
    eg = n(631768),
    eE = n(981631),
    eb = n(70722),
    ey = n(761274),
    eO = n(526761),
    ev = n(345655),
    eI = n(65154),
    eT = n(388032);
function eS(e, t, n) {
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
function eA(e) {
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
                eS(e, t, n[t]);
            });
    }
    return e;
}
function eC(e, t) {
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
function eN(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eC(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eR = new N.Z("MediaEngineStore"),
    eP = "MediaEngineStore",
    ew = 4,
    eD = 1,
    ex = 1,
    eL = 1,
    ej = 1,
    eM = 0.5,
    ek = {
        left: 1,
        right: 1,
    },
    eU = 500,
    eG = 5 * ei.Z.Millis.SECOND,
    eB = -60,
    eZ = 100,
    eF = 2 * ei.Z.Millis.SECOND,
    eV = 0;
function eH() {
    return {
        mode: eE.pM4.VOICE_ACTIVITY,
        modeOptions: {
            threshold: eB,
            autoThreshold: ea.isPlatformEmbedded || __OVERLAY__,
            vadUseKrisp: !0,
            vadKrispActivationThreshold: eM,
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
        inputVolume: eI.Qx,
        outputVolume: eI.Qx,
        inputDeviceId: eI.w5,
        outputDeviceId: eI.w5,
        videoDeviceId: eI.w5,
        qos: !1,
        qosMigrated: !1,
        videoHook: eW.supports(eI.AN.VIDEO_HOOK),
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
let eY = {
        [ev._.CUSTOM]: {},
        [ev._.VOICE_ISOLATION]: {
            modeOptions: {
                autoThreshold: !0,
                vadUseKrisp: !0,
            },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !1,
        },
        [ev._.STUDIO]: {
            mode: eE.pM4.VOICE_ACTIVITY,
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
    eW = (0, b.Mt)((0, b.jj)());
eR.enableNativeLogger(!0);
let eK = {},
    ez = new Set([eI.Yn.DEFAULT]),
    eq = eW.supports(eI.AN.AUTO_ENABLE),
    eX = !1,
    eQ = eI.Yn.STREAM,
    eJ = performance.now(),
    e$ = { [eI.w5]: t1("No Input Devices") },
    e0 = { [eI.w5]: t1("No Output Devices") },
    e1 = { [eI.w5]: t1("No Video Devices") },
    e2 = !1,
    e3 = !1,
    e4 = !1,
    e8 = !1,
    e6 = !1,
    e5 = eI.Av,
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
X.Z.hasPermission(ey.Eu.AUDIO, { showAuthorizationError: !1 }),
    X.Z.hasPermission(ey.Eu.CAMERA, { showAuthorizationError: !1 });
let tO = !1,
    tv = new Set(),
    tI = tO,
    tT = new Set(),
    tS = {},
    tA = null,
    tC = !0,
    tN = !1;
function tR() {
    var e, t;
    return null != (t = null == (e = em.default.getCurrentUser()) ? void 0 : e.isStaff()) && t
        ? "always"
        : eo.Z === g.R.CANARY
          ? "permittedDevicesOnly"
          : "never";
}
function tP() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT,
        t = eK[e];
    return null == t && ((t = eH()), (eK[e] = t)), t;
}
function tw() {
    var e, t, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT,
        i = tP(r),
        a = eY[null != (e = i.activeInputProfile) ? e : ev._.CUSTOM];
    return eN(eA({}, i, a), {
        modeOptions: eA({}, null != (t = i.modeOptions) ? t : {}, null != (n = a.modeOptions) ? n : {}),
    });
}
function tD(e) {
    var t;
    let n = tw(e.context);
    e.setInputMode(n.mode, {
        vadThreshold: n.modeOptions.threshold,
        vadAutoThreshold: n.modeOptions.autoThreshold,
        vadUseKrisp: n.modeOptions.vadUseKrisp && n0(),
        vadKrispActivationThreshold: null != (t = n.modeOptions.vadKrispActivationThreshold) ? t : 0.5,
        vadLeading: n.modeOptions.vadLeading,
        vadTrailing: n.modeOptions.vadTrailing,
        pttReleaseDelay: Math.round(n.modeOptions.delay),
    });
}
function tx(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.Qx;
    return p().clamp(e, 0, t);
}
function tL(e) {
    let t = tw(e.context),
        n = !eq || t.mute || t.deaf;
    e.context === eI.Yn.DEFAULT
        ? (n = n || e2 || e3 || e4 || !X.Z.didHavePermission(ey.Eu.AUDIO))
        : e.context === eI.Yn.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eI.Yn.DEFAULT && S.Z.updateNativeMute();
}
function tj(e) {
    e !== eQ && (null != a && eW.setGoLiveSource(null, eQ), (eQ = e));
}
function tM() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e6,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        s = a;
    if (
        ((null == s ? void 0 : s.desktopSource) != null &&
            s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? void 0 : e.id) &&
            (null != s.desktopSource.soundshareId && (0, ea.isWindows)() && T.pn(s.desktopSource.soundshareId),
            eW.setGoLiveSource(null, eQ)),
        (null == s ? void 0 : s.cameraSource) != null &&
            (s.cameraSource.videoDeviceGuid !==
                (null == o || null == (t = o.cameraSource) ? void 0 : t.videoDeviceGuid) ||
                s.cameraSource.audioDeviceGuid !==
                    (null == o || null == (n = o.cameraSource) ? void 0 : n.audioDeviceGuid)) &&
            eW.setGoLiveSource(null, eQ),
        e6 || i)
    ) {
        let e = tw().videoDeviceId;
        e6 && e === eI.w5 && e5 !== eI.Av && (e = e5), (e5 = (e6 = i) ? t3(e1, e) : eI.Av), eW.setVideoInputDevice(e5);
    }
    if (((a = o), null != o)) {
        let e = {
            resolution: o.quality.resolution,
            frameRate: o.quality.frameRate,
        };
        if (null != o.desktopSource) {
            let t = tR(),
                n = tw().videoHook,
                i = tH(),
                a = i ? (tY() && (0, z.R)("MediaEngineStore_updateVideo").enabled ? eb.zj : eb.ZM) : 0;
            eW.setGoLiveSource(
                {
                    desktopDescription: {
                        id: o.desktopSource.id,
                        soundshareId: o.desktopSource.soundshareId,
                        useVideoHook: n,
                        useGraphicsCapture: i,
                        useGraphicsCaptureApiLevel: a,
                        useLoopback: r.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: tW(),
                        videoHookStaleFrameTimeoutMs: eU,
                        graphicsCaptureStaleFrameTimeoutMs: eG,
                        hdrCaptureMode: t,
                    },
                    quality: e,
                },
                eQ,
            );
        }
        null != o.cameraSource &&
            eW.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: o.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                eQ,
            );
    }
}
function tk(e) {
    switch (e) {
        case eI.H3.CPU_OVERUSE:
            return P.Nk.NoiseCancellerCpuOveruse;
        case eI.H3.FAILED:
            return P.Nk.NoiseCancellerFailed;
        case eI.H3.VAD_CPU_OVERUSE:
            return P.Nk.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function tU(e) {
    let t = (0, j.U)({
        location: "getAutomaticGainControlConfig",
        disable: !e,
    });
    return eA({ enabled: e }, t);
}
function tG(e, t) {
    e.setAutomaticGainControl(tU(t));
}
function tB(e, t) {
    e.setNoiseCancellation(t);
    let n = (0, Y.n)({
        location: "getAutomaticGainControlConfig",
        disable: !t,
    }).enabled;
    e.setNoiseCancellationDuringProcessing(n);
}
function tZ(e) {
    let t = tw(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(ef.Z.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(ef.Z.hasNoiseSuppression(n) || t.noiseSuppression),
        tG(e, ef.Z.hasAutomaticGainControl(n) || t.automaticGainControl),
        tB(e, t.noiseCancellation),
        e.setVoiceFilterId(tf),
        (0, ea.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function tF() {
    var e;
    return !!(0, H.m)("MediaEngineStore") || null == (e = tw().hardwareEncoding) || e;
}
function tV() {
    eW.on(b.aB.Connection, (e) => {
        var t;
        tD(e), tL(e), tZ(e);
        let n = tw();
        e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers),
            e.setQoS(n.qos),
            e.setExperimentalEncoders(n.experimentalEncoders),
            e.setHardwareH264(tF()),
            e.setSoftwareH264(null == (t = n.openH264) || t);
        let i = ep.Z.getGuildId(),
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
        o && e.setExperimentFlag(eI.V8.MUTE_BEFORE_PROCESSING, !0),
            s && e.setExperimentFlag(eI.V8.PTT_BEFORE_PROCESSING, !0),
            l && e.setExperimentFlag(eI.V8.SKIP_ENCODE, !0);
        let c = !1,
            u = !0;
        if (
            (e.setExperimentFlag(eI.V8.RESET_DECODER_ON_ERRORS, !0),
            c && e.setExperimentFlag(eI.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0),
            u && e.setExperimentFlag(eI.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0),
            e.context === eI.Yn.STREAM)
        ) {
            let { simulcastEnabled: t, lqStreamBitrate: n } = F.Z.getConfig();
            e.configureGoLiveSimulcast(t, n);
            let {
                enabled: r,
                scaleOffBitrateFloor: i,
                adjustMaxBitrateFloor: a,
            } = (0, V.k)({
                location: "setupMediaEngine",
                autoTrackExposure: !0,
            });
            e.setGoLiveUsePixelCounts(r, i, a);
        }
        if (
            ((0, ea.isWindows)()
                ? (null == tA ? void 0 : tA.startsWith("NVIDIA")) || (null == tA ? void 0 : tA.startsWith("AMD"))
                    ? e.setExperimentFlag(eI.V8.SIGNAL_AV1, !0)
                    : e.setExperimentFlag(eI.V8.SIGNAL_AV1_DECODE, !0)
                : ((0, ea.isMac)() || (0, ea.isLinux)()) && e.setExperimentFlag(eI.V8.SIGNAL_AV1_DECODE, !0),
            (0, ea.isWindows)() && e.setExperimentFlag(eI.V8.SIGNAL_AV1_HARDWARE_DECODE, !0),
            (0, ea.isWeb)())
        ) {
            let { enabled: t } = (0, Z.A)("MediaEngineStore");
            e.setExperimentFlag(eI.V8.BROWSER_HEVC, t);
        }
        eW.setHasFullbandPerformance((0, R.Z)());
        let d = (0, U.D)("setupMediaEngine").enabled;
        if ((e.setRemoteAudioHistory(1000 * !!d), (0, C.Z)(r))) {
            let t = A.Z.getSettings();
            e.setExperimentFlag(eI.V8.STREAMER_CLIP, t.clipsEnabled);
            let { enableViewerClipping: n } = K.Z.getCurrentConfig(
                { location: "f627ab_15" },
                { autoTrackExposure: !1 },
            );
            e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eI.ux);
        }
        for (let t of ((n = tw(e.context)), e.setPostponeDecodeLevel(eZ), Object.keys(n.localMutes)))
            t !== eu.default.getId() && e.setLocalMute(t, n.localMutes[t]);
        for (let t of Object.keys(n.localVolumes)) t !== eu.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
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
            e.context === eI.Yn.DEFAULT &&
                ((e9 = !1),
                (te = !1),
                e.on(b.Sh.SpeakingWhileMuted, () => {
                    (e9 = !0),
                        (te = !0),
                        r.emitChange(),
                        tt.stop(),
                        tt.start(eF, () => {
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
                    en.default.track(
                        eE.rMx.VIDEOHOOK_INITIALIZED,
                        eA(
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
                eR.warn("noisecancellererror event: ".concat(e)),
                    (0, P.kr)({
                        type: P.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tk(e),
                    }),
                    (tg = !0),
                    en.default.track(eE.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
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
                eR.warn("voiceactivitydetectorerror event: ".concat(e)),
                    (0, P.kr)({
                        type: P.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tk(e),
                    }),
                    en.default.track(eE.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    v.Z.dispatch({
                        type: "AUDIO_SET_MODE",
                        context: eI.Yn.DEFAULT,
                        mode: eE.pM4.VOICE_ACTIVITY,
                        options: eN(eA({}, tw(eI.Yn.DEFAULT).modeOptions), { vadUseKrisp: !1 }),
                    }),
                    v.Z.dispatch({
                        type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
                        code: e,
                    });
            }),
            e.on(b.Sh.SdpError, (e, t, n, r) => {
                en.default.track(eE.rMx.SDP_ERROR, {
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
            e.setBitRate(ed.Z.bitrate),
            e.applyVideoQualityMode(eg.Z.mode);
    }),
        eW.on(b.aB.DeviceChange, (e, t, n) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_DEVICES",
                inputDevices: e,
                outputDevices: t,
                videoDevices: n,
            });
        }),
        eW.on(b.aB.VolumeChange, (e, t) => {
            v.Z.dispatch({
                type: "AUDIO_VOLUME_CHANGE",
                inputVolume: e,
                outputVolume: t,
            });
        }),
        eW.on(b.aB.DesktopSourceEnd, (e, t) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                settings: null,
                endReason: e,
                errorCode: t,
            });
        }),
        eW.on(b.aB.AudioPermission, (e) => {
            (ty = !0),
                v.Z.dispatch({
                    type: "MEDIA_ENGINE_PERMISSION",
                    kind: "audio",
                    granted: e,
                });
        }),
        eW.on(b.aB.VideoPermission, (e) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_PERMISSION",
                kind: "video",
                granted: e,
            });
        }),
        eW.on(b.aB.WatchdogTimeout, async () => {
            let e;
            try {
                await er.Z.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
            } catch (t) {
                "number" == typeof t.status && (e = t.status);
            }
            eR.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)),
                en.default.track(eE.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        eW.on(b.aB.VideoInputInitialized, (e) => {
            en.default.track(eE.rMx.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired
                    ? null
                    : Math.round(e.timeToFirstFrame * ei.Z.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: ep.Z.getMediaSessionId(),
                rtc_connection_id: ep.Z.getRTCConnectionId(),
            });
        }),
        eW.on(b.aB.AudioInputInitialized, (e) => {
            en.default.track(eE.rMx.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * ei.Z.Millis.SECOND),
                rtc_connection_id: ep.Z.getRTCConnectionId(),
            });
        }),
        eW.on(b.aB.ClipsRecordingRestartNeeded, () => {
            v.Z.dispatch({ type: "CLIPS_RESTART" });
        }),
        eW.on(b.aB.ClipsInitFailure, (e, t) => {
            v.Z.wait(() => {
                v.Z.dispatch({
                    type: "CLIPS_INIT_FAILURE",
                    errMsg: e,
                    applicationName: t,
                });
            });
        }),
        eW.on(b.aB.ClipsRecordingEnded, (e, t) => {
            var n, r;
            (null == o || null == (n = o.desktopSource) ? void 0 : n.id) === e &&
                (null != t && (null == a || null == (r = a.desktopSource) ? void 0 : r.soundshareId) !== t && T.pn(t),
                (o = null));
        }),
        eW.on(b.aB.NativeScreenSharePickerUpdate, (e, t) => {
            v.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE",
                existing: e,
                content: t,
            });
        }),
        eW.on(b.aB.NativeScreenSharePickerCancel, (e) => {
            v.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL",
                existing: e,
            });
        }),
        eW.on(b.aB.NativeScreenSharePickerError, (e) => {
            v.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_ERROR",
                error: e,
            });
        }),
        eW.on(b.aB.AudioDeviceModuleError, (e, t, n) => {
            en.default.track(eE.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                audio_device_module: e,
                code: t,
                device_name: n,
            });
        }),
        eW.on(b.aB.VideoCodecError, (e) => {
            let t = "encode" === e.mode ? P.u.VIDEO_ENCODE_ERROR : P.u.VIDEO_DECODE_ERROR,
                n = {
                    videoCodec: e.codecStandard,
                    errorMessage: e.message,
                };
            (0, P.kr)(
                t === P.u.VIDEO_ENCODE_ERROR
                    ? eN(eA({ type: t }, n), { videoEncoder: e.implName })
                    : eN(eA({ type: t }, n), { videoDecoder: e.implName }),
            );
        }),
        eW.on(b.aB.ConnectionStats, (e) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_CONNECTION_STATS",
                connectionStats: e.map((e) => {
                    let { stats: t, connection: n } = e;
                    return {
                        stats: t,
                        mediaEngineConnectionId: n.mediaEngineConnectionId,
                        version: eV++,
                        context: n.context,
                    };
                }),
            });
        }),
        eW.on(b.aB.VoiceQueueMetrics, (e) => {
            let t = rS(e);
            null !== t && en.default.track(eE.rMx.VOICE_QUEUE_METRICS, t);
        }),
        eW.setOnVideoContainerResized((e, t, n) => {
            v.Z.wait(() =>
                v.Z.dispatch({
                    type: "VIDEO_SIZE_UPDATE",
                    streamId: e,
                    width: t,
                    height: n,
                }),
            );
        }),
        nx(),
        tq.reset(),
        (0, eh.q)().then((e) => {
            null != e && (tA = e.gpu_brand);
        });
}
function tH() {
    return (0, ea.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eb.c5);
}
function tY() {
    return (0, ea.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eb.sN);
}
function tW() {
    return (
        (0, ea.isMac)() &&
        eW.supports(eI.AN.SCREEN_CAPTURE_KIT) &&
        m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eb.C7)
    );
}
function tK() {
    return (
        (0, ea.isWindows)() &&
        eW.supports(eI.AN.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        eW.supports(eI.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function tz() {
    return eW.supports(eI.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
let tq = new (class {
    start() {
        this.started || ((this.started = !0), eW.on(b.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout &&
                (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            eW.removeListener(b.aB.Silence, this.handleSilence),
            v.Z.dispatch({
                type: "AUDIO_INPUT_DETECTED",
                inputDetected: null,
            }));
    }
    update() {
        let e = tw();
        !ta && ep.Z.getState() === eE.hes.RTC_CONNECTED && e.mode === eE.pM4.VOICE_ACTIVITY && e.silenceWarning
            ? this.start()
            : this.stop();
    }
    reset() {
        this.stop(), this.update();
    }
    constructor() {
        eS(this, "stateChangeTimeout", void 0),
            eS(this, "noVoiceTimeout", 5000),
            eS(this, "voiceTimeout", 1500),
            eS(this, "started", !1),
            eS(this, "handleSilence", (e) => {
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
function tX() {
    var e;
    let t = y.K.get("audio");
    null != t && (y.K.set(eP, { [eI.Yn.DEFAULT]: t }), y.K.remove("audio")),
        (eK = null != (e = y.K.get(eP)) ? e : {}),
        p().each(eK, (e) => {
            if (
                (p().defaultsDeep(e, eH()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, ec.Kd)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== ew &&
                    ((e.vadUseKrispSettingVersion = ew), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                !e.vadThrehsoldMigrated)
            ) {
                var t;
                (e.vadThrehsoldMigrated = !0),
                    (null == (t = e.modeOptions) ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = eB);
            }
            eW.supports(eI.AN.SIDECHAIN_COMPRESSION) &&
                e.sidechainCompressionSettingVersion < ej &&
                ((e.sidechainCompressionSettingVersion = ej), (e.sidechainCompression = !0)),
                (0, ea.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== ex &&
                      ((e.ncUseKrispjsSettingVersion = ex), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== eD &&
                      ((e.ncUseKrispSettingVersion = eD), (e.noiseSuppression = !1), (e.noiseCancellation = !0)),
                e.hardwareEnabledVersion !== eL && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = eL)),
                null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
        }),
        t$();
}
function tQ(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = tP(t);
    return Object.assign(r, e), !__OVERLAY__ && n && y.K.set(eP, eK), r;
}
function tJ() {
    y.K.remove(eP), location.reload();
}
function t$() {
    let e = tw();
    eW.setAudioInputDevice(e.inputDeviceId),
        eW.setAudioOutputDevice(e.outputDeviceId),
        tM(),
        eW.setInputVolume(e.inputVolume),
        eW.setOutputVolume(e.outputVolume),
        eW.setH264Enabled(tF() || e.openH264),
        eW.setAv1Enabled(tF()),
        eW.setH265Enabled(tF()),
        eW.setAecDump(e.aecDumpEnabled),
        eW.setSidechainCompression(e.sidechainCompression),
        eW.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        eW.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing);
}
function t0() {
    eq ||
        eW.enable().then(() =>
            v.Z.dispatch({
                type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
                enabled: !0,
                unmute: !1,
            }),
        );
}
function t1(e) {
    return {
        id: eI.w5,
        index: 0,
        name: e,
        disabled: !0,
        hardwareId: void 0,
        containerId: void 0,
    };
}
function t2(e, t) {
    if (0 === e.length) {
        let e = t1(t);
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
function t3(e, t) {
    var n, r;
    let i = null != (r = null != (n = e[t]) ? n : e[eI.w5]) ? r : p()(e).values().first();
    return null != i ? i.id : t;
}
function t4(e) {
    let t = e$;
    if (((e$ = t2(e, eT.intl.string(eT.t["/QIjDA"]))), !p().isEqual(e$, t))) {
        let e = tw(),
            t = t3(e$, e.inputDeviceId);
        eW.setAudioInputDevice(t);
    }
}
function t8(e) {
    let t = e0;
    if (((e0 = t2(e, eT.intl.string(eT.t.xlUg0t))), !p().isEqual(e0, t))) {
        let e = tw(),
            t = t3(e0, e.outputDeviceId);
        eW.setAudioOutputDevice(t);
    }
}
function t6(e) {
    tr = e.length > 0;
    let t = e1;
    if (((e1 = t2(e, eT.intl.string(eT.t.WKWARU))), e6 && !p().isEqual(e1, t))) {
        var n;
        let e = void 0 !== e1[e5],
            r = e5 === eI.w5 && (null == (n = t[eI.w5]) ? void 0 : n.disabled);
        tM(e || r);
    }
}
function t5() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        r =
            null != (e = $.Z.settings.audioContextSettings)
                ? e
                : {
                      user: {},
                      stream: {},
                  };
    for (let e of Object.keys(r)) {
        let i = e === eO.u0.USER ? eI.Yn.DEFAULT : eI.Yn.STREAM,
            a = i === eI.Yn.STREAM ? eI.Yh : eI.Qx,
            o = null != (t = r[e]) ? t : {},
            { localMutes: s, localVolumes: l } = tw(i);
        for (let [e, t] of Object.entries(o))
            null == (0, J.Ky)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== a ? (l[e] = t.volume) : delete l[e],
                eW.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (n)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == o[e] &&
                    (delete s[e],
                    delete l[e],
                    eW.eachConnection((t) => {
                        t.setLocalVolume(e, a), t.setLocalMute(e, !1);
                    }, i));
        tQ(
            {
                localMutes: s,
                localVolumes: l,
            },
            i,
        );
    }
}
function t7(e) {
    if (null == r)
        return (
            eR.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
            {
                soundshareId: null,
                soundshareSession: "",
            }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : er.Z.getAudioPid(e),
            n = "";
        return (
            null != t && (n = er.Z.generateSessionFromPid(t)),
            {
                soundshareId: t,
                soundshareSession: n,
            }
        );
    }
}
function t9(e, t) {
    (0, ea.isWindows)() &&
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
function ne(e) {
    (i = e.sessionId), (e2 = !1), (e8 = !1);
    let t = tw();
    if (
        (tK() && (tz() ? re(eI.iA.AUTOMATIC) : t.automaticAudioSubsystem && rt()),
        eW.supports(eI.AN.OFFLOAD_ADM_CONTROLS))
    ) {
        let e = !1;
        (0, ea.isDesktop)()
            ? (e = (0, M.E)({ location: "handleConnectionOpen" }).enabled)
            : ((0, ea.isIOS)() || (0, ea.isAndroid)()) && (e = (0, k.W)({ location: "handleConnectionOpen" }).enabled),
            eW.setOffloadAdmControls(e);
    }
    (0, ee.wt)({
        location: "MediaEngineStore",
        autoTrackExposure: !1,
    }) &&
        null !== t.mostRecentlyRequestedVoiceFilter &&
        (0, ea.isDesktop)() &&
        (et.Z.getLastInitAttemptMayHaveCrashed()
            ? (v.Z.dispatch({
                  type: "AUDIO_SET_SELF_MUTE",
                  mute: !0,
                  context: eI.Yn.DEFAULT,
                  playSoundEffect: !0,
              }),
              tQ({ mostRecentlyRequestedVoiceFilter: null }))
            : n(358820).r5()),
        t5();
}
function nt(e) {
    let { mediaEngineState: t } = e;
    (eK = t.settingsByContext),
        (e$ = t.inputDevices),
        (e0 = t.outputDevices),
        (tS = t.appSupported),
        (tc = t.krispModuleLoaded),
        (s = t.krispVersion),
        (eQ = t.goLiveContext);
}
function nn() {
    i = null;
}
function nr() {
    if ((0, ea.isWeb)()) {
        let e = W.N.getCurrentConfig({ location: "MediaEngineStore handlePostConnectionOpen" });
        e.loadWasmModule && e.preload && r.startDavePreload();
    }
    return !1;
}
function ni(e) {
    switch (e.state) {
        case eE.hes.CONNECTING:
            t0();
            break;
        case eE.hes.RTC_CONNECTING:
            (ta = !1), (to = !1);
            break;
        case eE.hes.RTC_CONNECTED:
            tM();
            break;
        case eE.hes.DISCONNECTED:
            n_(), np();
    }
    tq.update();
}
function na(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (e2 = t.mute || t.suppress), (e8 = t.deaf), eW.eachConnection(tL);
            let e = null != t.guildId && null != t.channelId && null != tm && tm !== t.channelId,
                n = !ts && null == t.channelId;
            return tM(!e && !n && e6), (tm = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== eu.default.getId() || null != ep.Z.getChannelId() || tM(!1, null), e;
    }, !1);
}
function no(e) {
    let { mute: t } = e;
    (e3 = t), eW.eachConnection(tL);
}
function ns(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = tw(t);
    if (t === eI.Yn.DEFAULT && (X.Z.requestPermission(ey.Eu.AUDIO), e4)) return !1;
    (r = !i && !r) || (i = !1),
        n || (e7 = !0),
        tQ(
            {
                mute: r,
                deaf: i,
            },
            t,
        ),
        eW.eachConnection(tL);
}
function nl(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    tQ({ mute: n }, t), r || (e7 = !0), eW.eachConnection(tL);
}
function nc(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== eO.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    t5(!0);
}
function nu(e) {
    let { context: t } = e;
    tQ({ deaf: !tw(t).deaf }, t), eW.eachConnection(tL);
}
function nd(e) {
    let { context: t, userId: n } = e;
    if (n === eu.default.getId()) return;
    let { localMutes: r } = tw(t);
    r[n] ? delete r[n] : (r[n] = !0),
        tQ({ localMutes: r }, t),
        eW.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nf(e) {
    var t, n, r, i, a, o, s;
    let { context: l, userId: c, videoToggleState: u, persist: d, isAutomatic: _ } = e;
    f()(!(d && _), "These are not allowed to both be true.");
    let p = u === eE.ZUi.DISABLED,
        { disabledLocalVideos: h } = tw(l),
        m = null != (t = h[c]) && t,
        g = tv.has(c),
        E = u === eE.ZUi.AUTO_ENABLED || u === eE.ZUi.MANUAL_ENABLED;
    eR.info(
        "disableVideo="
            .concat(p, " currentlyDisabled=")
            .concat(m, " currentlyAutoDisabled=")
            .concat(g, ", isVideoShown=")
            .concat(E),
    ),
        f()(!(g && !m), "If you are auto-disabled, then you are also disabled.");
    let b = p !== m,
        y = l === eI.Yn.DEFAULT,
        O = _ && b && y,
        v = d && b && y;
    eR.info(
        "changed="
            .concat(b, " isDefaultContext=")
            .concat(y, " isUpdateCausedByVideoHealthManager=")
            .concat(O, " isManualToggleByUser=")
            .concat(v),
    );
    let { videoToggleStateMap: I } = tw(l);
    if (
        (I[c] === eE.ZUi.AUTO_PROBING &&
            u === eE.ZUi.AUTO_ENABLED &&
            (0, q.Z)(c, p ? eI.fC.AUTO_DISABLE : eI.fC.AUTO_ENABLE, E),
        (I[c] = u),
        tQ({ videoToggleStateMap: I }, l, d),
        u === eE.ZUi.AUTO_PROBING
            ? null == (n = ep.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, !0)
            : null == (r = ep.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, !1),
        tI ||
            (eR.info("isAutoDisableAllowed=".concat(tI, " - disabling VideoHealthManager")),
            null == (a = ep.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()),
        O)
    ) {
        if ((!p && !g) || (p && !tI)) return;
        (0, q.Z)(c, p ? eI.fC.AUTO_DISABLE : eI.fC.AUTO_ENABLE, E), p ? tv.add(c) : tv.delete(c);
    } else
        v &&
            (g && !p
                ? (eR.info("disallowing auto-disable for this session because of manual override by user"),
                  (tI = !1),
                  null == (s = ep.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(),
                  (0, q.Z)(c, eI.fC.MANUAL_REENABLE, E))
                : (0, q.Z)(c, p ? eI.fC.MANUAL_DISABLE : eI.fC.MANUAL_ENABLE, E));
    y && !p && tv.delete(c),
        p ? (h[c] = !0) : delete h[c],
        tQ({ disabledLocalVideos: h }, l, d),
        eW.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(c, null != (t = h[c]) && t);
        }, l);
}
function n_() {
    if (0 === tv.size) return;
    let e = eI.Yn.DEFAULT,
        { disabledLocalVideos: t } = tw(e);
    tv.forEach((n) => {
        f()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            eW.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tv.clear(),
        tQ({ disabledLocalVideos: t }, e, !1);
}
function np() {
    let e = eI.Yn.DEFAULT,
        { videoToggleStateMap: t } = tw(e);
    for (let [e, n] of Object.entries(t)) n === eE.ZUi.AUTO_PROBING && delete t[e];
    tQ({ videoToggleStateMap: t }, e, !1);
}
function nh(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === eu.default.getId()) return;
    let i = t === eI.Yn.STREAM ? eI.Yh : eI.Qx,
        { localVolumes: a } = tw(t);
    r === i ? delete a[n] : (a[n] = r), tQ({ localVolumes: a }, t), eW.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function nm(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: a } = tw(t);
    (a[n] = {
        left: r,
        right: i,
    }),
        tQ({ localPans: a }, t),
        eW.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function ng(e) {
    let { context: t, mode: n, options: r } = e;
    tQ(
        {
            mode: n,
            modeOptions: r,
        },
        t,
    ),
        eW.eachConnection(tD),
        tq.update();
}
function nE(e) {
    let { volume: t } = e;
    tQ({ inputVolume: tx(t) }), eW.setInputVolume(t);
}
function nb(e) {
    let { volume: t } = e;
    tQ({ outputVolume: t }), eW.setOutputVolume(t);
}
function ny(e) {
    let { id: t } = e;
    (t = t3(e$, t)), (eJ = performance.now()), tQ({ inputDeviceId: t }), eW.setAudioInputDevice(t);
}
function nO(e) {
    let { id: t } = e;
    tQ({ outputDeviceId: (t = t3(e0, t)) }), eW.setAudioOutputDevice(t);
}
function nv(e) {
    let { id: t } = e;
    tQ({ videoDeviceId: (t = t3(e1, t)) }), tM();
}
function nI(e) {
    let { inputProfile: t } = e,
        n = tQ({ activeInputProfile: t });
    eW.eachConnection((e) => {
        tD(e),
            tG(e, n.automaticGainControl),
            e.setEchoCancellation(n.echoCancellation),
            e.setExperimentalEncoders(n.experimentalEncoders),
            tB(e, n.noiseCancellation),
            e.setNoiseSuppression(n.noiseSuppression);
    }),
        eW.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        tq.update(),
        nL();
}
function nT(e) {
    return eX !== e.required && ((eX = e.required), e.required || eW.interact(), !0);
}
function nS(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    t4(t), t8(n), t6(r);
}
function nA(e) {
    let { inputVolume: t, outputVolume: n } = e;
    tQ({
        inputVolume: tx(t),
        outputVolume: n,
    });
}
function nC(e) {
    var t;
    let n = tw(),
        r = eW.getAudioSubsystem(),
        i = eW.getAudioLayer(),
        a = t3(e$, n.inputDeviceId),
        o = null == (t = e$[a]) ? void 0 : t.name;
    en.default.track(eE.rMx.VOICE_PROCESSING, {
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
function nN(e) {
    let t = tQ({ echoCancellation: e.enabled });
    eW.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nL(), nC(e.location);
}
function nR(e) {
    nw(e.enabled);
}
function nP(e) {
    let t = tQ({ sidechainCompressionStrength: e.strength });
    eW.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function nw(e) {
    let t = tQ({ sidechainCompression: e });
    eW.setSidechainCompression(t.sidechainCompression);
}
function nD(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tT.add(n) : tT.delete(n), nx(), nL();
}
function nx() {
    let e = !tT.has("voice_filter_preview") && !tT.has("mic_test");
    eW.setMaybePreprocessMute(e);
}
function nL() {
    let e = tw(),
        t = tT.size > 0,
        n = e.inputDeviceId,
        r = ef.Z.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        a = ef.Z.hasNoiseSuppression(n) || e.noiseSuppression,
        o = tU(ef.Z.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation,
        l = null !== tf,
        c = tT.has("voice_filter") && 1 === tT.size;
    eW.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: a,
        automaticGainControlConfig: o,
        noiseCancellation: s,
        voiceFilters: l,
        loopbackUseAudioMode: c,
    });
}
function nj(e) {
    let t = tQ({ noiseSuppression: e.enabled });
    eW.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nL(), nC(e.location);
}
function nM(e) {
    let t = tQ({ automaticGainControl: e.enabled });
    eW.eachConnection((e) => tG(e, t.automaticGainControl)), nL(), nC(e.location);
}
function nk(e) {
    let t = tQ({ noiseCancellation: e.enabled });
    eW.eachConnection((e) => tB(e, t.noiseCancellation)), nL(), nC(e.location);
}
function nU(e) {
    Q.Z.setKrispModelOverride(e.model), (c = e.model), nL();
}
function nG(e) {
    var t;
    (0, ea.isWeb)() || ((td = e.enabled), null == (t = eW.setNoiseCancellationEnableStats) || t.call(eW, e.enabled));
}
function nB(e) {
    let t = tQ({ experimentalEncoders: e.enabled });
    eW.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
}
function nZ(e) {
    let { enabled: t } = e,
        n = tQ({ hardwareEncoding: t }),
        r = tF();
    eW.eachConnection((e) => e.setHardwareH264(r)),
        eW.setH264Enabled(r || n.openH264),
        eW.setAv1Enabled(r),
        eW.setH265Enabled(r);
}
function nF(e) {
    tQ({ silenceWarning: e.enabled }), tq.update();
}
function nV(e) {
    eW.setDebugLogging(e.enabled);
}
function nH(e) {
    let { level: t } = e;
    (l = t), Q.Z.setKrispSuppressionLevel(t);
}
function nY(e) {
    tQ({ videoHook: e.enabled });
}
function nW(e) {
    tQ({ experimentalSoundshare2: e.enabled });
}
function nK(e) {
    let { enabled: t } = e;
    tQ({ useSystemScreensharePicker: t });
}
function nz(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = tQ({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r,
        });
    eW.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function nq(e) {
    let { enabled: t } = e;
    tQ({ qos: t }), eW.eachConnection((e) => e.setQoS(t));
}
function nX() {
    tJ();
}
function nQ(e) {
    let { inputDetected: t } = e;
    (ti = t), !ta && ti && ((ta = !0), tq.update());
}
function nJ(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === e4) return !1;
    (e4 = n), eW.eachConnection(tL);
}
function n$(e) {
    let { state: t, permissionType: n } = e,
        r = t === ey.PQ.ACCEPTED;
    switch (n) {
        case ey.Eu.AUDIO:
            (ty = !0), eW.eachConnection(tL);
            break;
        case ey.Eu.CAMERA:
            !r && e6 && tM(!1);
            break;
        default:
            return !1;
    }
}
function n0() {
    return tc || !1;
}
async function n1() {
    try {
        var e, t, n, i;
        await el.ZP.ensureModule("discord_krisp");
        let a = el.ZP.requireModule("discord_krisp");
        (tc = !0),
            (s = null == (e = a.getSdkVersion) ? void 0 : e.call(a)),
            (l = null != (i = null == (t = a.getSuppressionLevel) ? void 0 : t.call(a)) ? i : 100),
            null == (n = a.getNcModels) ||
                n.call(a).then((e) => {
                    (tu = e), r.emitChange();
                }),
            r.emitChange();
    } catch (t) {
        eR.warn("Failed to load Krisp module: ".concat(t.message)), es.Z.captureException(t);
        let e = eI.H3.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eI.H3.INITIALIZED : n;
        }
        en.default.track(eE.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), tQ({ noiseCancellation: !1 });
    } finally {
        tl = !1;
    }
}
function n2() {
    return ((0, ea.isWindows)() && "arm64" !== el.ZP.architecture) || (0, ea.isLinux)() || (0, ea.isMac)();
}
function n3() {
    !n2() || __OVERLAY__ || tl || tc
        ? (0, ea.isWeb)() && eW.supports(eI.AN.NOISE_CANCELLATION)
            ? ((tc = !0), r.emitChange())
            : (0, ea.isWeb)() && tQ({ noiseCancellation: !1 })
        : ((tl = !0), n1());
}
function n4(e) {
    let { enabled: t } = e;
    en.default.track(eE.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != tf ? tf : null,
        enabled: t,
    }),
        tQ({ voiceFilterPlaybackEnabled: t });
}
function n8(e) {
    let { newVoiceFilterId: t } = e;
    tQ({ mostRecentlyRequestedVoiceFilter: t }), eW.eachConnection((e) => e.setVoiceFilterId(t));
}
function n6() {
    tQ({ mostRecentlyRequestedVoiceFilter: null });
}
function n5(e) {
    let { voiceFilterId: t } = e;
    (tp = tf), (th = t_), (tf = t), (t_ = null === t ? null : Date.now());
}
function n7(e) {
    let t = e.bypassEnabled;
    tQ({ bypassSystemInputProcessing: t }), eW.setAudioInputBypassSystemProcessing(t), nC(e.location);
}
function n9(e) {
    re(e.subsystem);
}
function re(e) {
    e === eI.iA.AUTOMATIC
        ? (tQ({ automaticAudioSubsystem: !0 }), rt())
        : (tQ({ automaticAudioSubsystem: !1 }), eW.setAudioSubsystem(e));
}
function rt() {
    eW.queueAudioSubsystem(eI.iA.EXPERIMENTAL);
}
function rn(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && tM(i, null), null != t || null == n)) {
        ts = !1;
        return;
    }
    if (ts) return;
    ts = !0;
    let a = tw();
    (a.mute || a.deaf) &&
        (tQ({
            deaf: !1,
            mute: !1,
        }),
        eW.eachConnection(tL));
}
function rr(e) {
    let { application: t } = e;
    ez.add(t.id);
}
function ri(e) {
    let { application: t } = e;
    ez.delete(t.id);
}
function ra(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (eq = !1), eW.eachConnection(tL);
                break;
            case "video":
                tM(!1);
        }
}
function ro(e) {
    (eq = e.enabled),
        e.unmute &&
            tQ({
                mute: !1,
                deaf: !1,
            }),
        eW.eachConnection(tL);
}
function rs(e) {
    let { enabled: t } = e;
    X.Z.requestPermission(ey.Eu.CAMERA), tM(t);
}
function rl(e) {
    let { sourceId: t, applicationName: n, quality: i } = e,
        a = A.Z.isDecoupledGameClippingEnabled(),
        s = A.Z.getSettings().decoupledClipsEnabled;
    if (!a || !s || null == I.Z) return;
    let l = null,
        c = null,
        u = er.Z.getPidFromDesktopSource(t);
    ({ soundshareId: l, soundshareSession: c } = t7(u));
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
        (eW.setClipsSource(null),
        (0, ea.isWindows)() && null != o.desktopSource.soundshareId && T.pn(o.desktopSource.soundshareId)),
        null != l && t9(l, c),
        (o = d);
    let f = tR(),
        _ = tw().videoHook;
    eW.setClipsSource({
        desktopDescription: {
            id: o.desktopSource.id,
            soundshareId: o.desktopSource.soundshareId,
            useVideoHook: _,
            useGraphicsCapture: tH(),
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: tW(),
            videoHookStaleFrameTimeoutMs: eU,
            graphicsCaptureStaleFrameTimeoutMs: eG,
            hdrCaptureMode: f,
        },
        quality: i,
        applicationName: n,
    });
}
function rc(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((o = null), eW.setClipsSource(null));
}
function ru(e) {
    var t, n, r, i;
    let { settings: a } = e;
    if ((null == a ? void 0 : a.desktopSettings) != null) {
        let e = null,
            r = null,
            { sourceId: i, sound: o } = a.desktopSettings,
            s = null != (t = a.context) ? t : eI.Yn.DEFAULT,
            l =
                null != (n = a.qualityOptions)
                    ? n
                    : {
                          resolution: 720,
                          frameRate: 30,
                      },
            c = !1 === o ? null : er.Z.getPidFromDesktopSource(i);
        ea.isPlatformEmbedded &&
            !0 === o &&
            (({ soundshareId: e, soundshareSession: r } = t7(c)), null != e && t9(e, r)),
            tj(s),
            tM(s === eI.Yn.STREAM && e6, {
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
        let e = null != (r = a.context) ? r : eI.Yn.DEFAULT,
            { videoDeviceGuid: t, audioDeviceGuid: n } = a.cameraSettings,
            o = e === eI.Yn.STREAM && e6,
            s =
                null != (i = a.qualityOptions)
                    ? i
                    : {
                          resolution: 720,
                          frameRate: 30,
                      };
        tM(o, {
            cameraSource: {
                videoDeviceGuid: t,
                audioDeviceGuid: n,
            },
            quality: {
                resolution: s.resolution,
                frameRate: s.frameRate,
            },
        });
    } else tM(e6, null);
}
function rd(e) {
    let { section: t } = e;
    return t === eE.oAB.VOICE && t0(), !1;
}
function rf() {
    return eW.eachConnection(tZ), !1;
}
function r_(e) {
    let { enabled: t } = e,
        n = tQ({ openH264: t });
    eW.setH264Enabled(tF() || n.openH264),
        eW.eachConnection((e) => {
            var t;
            return e.setSoftwareH264(null == (t = n.openH264) || t);
        });
}
function rp(e) {
    let { enabled: t } = e,
        n = tQ({ aecDumpEnabled: t });
    eW.setAecDump(n.aecDumpEnabled);
}
function rh(e) {
    let { state: t } = e,
        n = D.Z.isEnabled();
    if (t === eE.$7l.BACKGROUND && e6 && !n) (tn = !0), tM(!1);
    else {
        if (t !== eE.$7l.ACTIVE || !tn) return !1;
        (tn = !1), tM(!0);
    }
    return !0;
}
function rm(e) {
    eW.eachConnection((t) => t.setBitRate(e.bitrate));
}
function rg() {
    if ((!e6 && null == a) || null != ep.Z.getRTCConnectionId()) return !1;
    tM(!1, null);
}
function rE() {
    return !!tg && ((tg = !1), !0);
}
function rb(e) {
    eW.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function ry(e) {
    let { settings: t } = e;
    eW.applyMediaFilterSettings(t).finally(() => {
        (tE = !1), r.emitChange();
    });
}
function rO() {
    tE = !0;
}
function rv() {
    tE = !1;
}
function rI(e) {
    tC = e.enabled;
}
class rT extends (u = E.ZP.Store) {
    initialize() {
        tV(),
            tX(),
            n3(),
            np(),
            (tS = {
                [eI.AN.VIDEO]: eW.supports(eI.AN.VIDEO),
                [eI.AN.DESKTOP_CAPTURE]: eW.supports(eI.AN.DESKTOP_CAPTURE),
                [eI.AN.HYBRID_VIDEO]: eW.supports(eI.AN.HYBRID_VIDEO),
            }),
            this.waitFor(eu.default, ef.Z, e_.Z, ep.Z, x.ZP, X.Z.storage, $.Z, w.Z, A.Z);
    }
    supports(e) {
        return eW.supports(e);
    }
    supportsInApp(e) {
        return tS[e] || eW.supports(e);
    }
    isSupported() {
        return eW.supported();
    }
    isExperimentalEncodersSupported() {
        return eW.supports(eI.AN.EXPERIMENTAL_ENCODERS);
    }
    isNoiseSuppressionSupported() {
        return eW.supports(eI.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return n0();
    }
    isNoiseCancellationError() {
        return tg;
    }
    isAutomaticGainControlSupported() {
        return eW.supports(eI.AN.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !tz() && (eW.supports(eI.AN.LEGACY_AUDIO_SUBSYSTEM) || eW.supports(eI.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return eW.supports(eI.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === eW.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return n0();
    }
    isAecDumpSupported() {
        return eW.supports(eI.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return eW.supports(eI.AN.VIDEO) && eW.supports(eI.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        let t = (null == (e = e_.Z.getChannel(tm)) ? void 0 : e.type) === eE.d4z.GUILD_STAGE_VOICE,
            n = tF();
        return !t && n && F.Z.simulcastEnabled();
    }
    getAecDump() {
        return tw().aecDumpEnabled;
    }
    getMediaEngine() {
        return eW;
    }
    getVideoComponent() {
        return eW.Video;
    }
    getCameraComponent() {
        return eW.Camera;
    }
    getKrispSuppressionLevel() {
        return null != l ? l : 100;
    }
    getKrispEnableStats() {
        return td;
    }
    isEnabled() {
        return eq;
    }
    isMute() {
        return this.isSelfMute() || e2;
    }
    isDeaf() {
        return this.isSelfDeaf() || e8;
    }
    hasContext(e) {
        return null != eK[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT;
        return e === eI.Yn.DEFAULT && e3;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT;
        return (
            !this.isEnabled() ||
            tw(e).mute ||
            !X.Z.didHavePermission(ey.Eu.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eI.Yn.DEFAULT && e4)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return e7;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        e7 = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && ef.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return tC;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT;
        return !this.isSupported() || tw(e).deaf;
    }
    isVideoEnabled() {
        return e6 && tr;
    }
    isVideoAvailable() {
        return Object.values(e1).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.STREAM;
        return eQ === e && null != a;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.STREAM;
        return eQ === t && null != a && (null == (e = a.desktopSource) ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.Yn.DEFAULT;
        return e !== eu.default.getId() && (tw(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return eW.supports(eI.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.Yn.DEFAULT;
        return null != (t = tw(n).disabledLocalVideos[e]) && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.Yn.DEFAULT;
        return null != (t = tw(n).videoToggleStateMap[e]) ? t : eE.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.Yn.DEFAULT;
        return t === eI.Yn.DEFAULT && tv.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT;
        return e === eI.Yn.DEFAULT && tv.size > 0;
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
        return eQ;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return eJ;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.Yn.DEFAULT,
            n = tw(t).localPans[e];
        return null != n ? n : ek;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.Yn.DEFAULT,
            n = t === eI.Yn.STREAM ? eI.Yh : eI.Qx,
            r = tw(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return tw().inputVolume;
    }
    getOutputVolume() {
        return tw().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT;
        return tw(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT;
        return tw(e).modeOptions;
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
        return tw().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return tw().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            p().each(eK, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === eE.pM4.PUSH_TO_TALK && ez.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return t3(e$, tw().inputDeviceId);
    }
    getOutputDeviceId() {
        return t3(e0, tw().outputDeviceId);
    }
    getVideoDeviceId() {
        return t3(e1, tw().videoDeviceId);
    }
    getInputDevices() {
        return e$;
    }
    getOutputDevices() {
        return e0;
    }
    getVideoDevices() {
        return e1;
    }
    getEchoCancellation() {
        let e = tw();
        return ef.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return eW.supports(eI.AN.SIDECHAIN_COMPRESSION) && tw().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return tw().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return tw().h265Enabled;
    }
    getLoopback() {
        return tT.size > 0;
    }
    getLoopbackReasons() {
        return tT;
    }
    getNoiseSuppression() {
        let e = tw();
        return ef.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tw();
        return ef.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return tw().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return tw().noiseCancellation;
    }
    getExperimentalEncoders() {
        return tw().experimentalEncoders;
    }
    getHardwareEncoding() {
        return tF();
    }
    getHardwareEncodingSetting() {
        var e;
        return null == (e = tw().hardwareEncoding) || e;
    }
    getEnableSilenceWarning() {
        return tw().silenceWarning;
    }
    getDebugLogging() {
        return eW.getDebugLogging();
    }
    getQoS() {
        return tw().qos;
    }
    getAttenuation() {
        return tw().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return tw().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return tw().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return tK() && tw().automaticAudioSubsystem ? eI.iA.AUTOMATIC : eW.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return eW.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return tw().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === ev._.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT;
        return tw(e);
    }
    getState() {
        return {
            settingsByContext: eK,
            inputDevices: e$,
            outputDevices: e0,
            appSupported: tS,
            krispModuleLoaded: tc,
            krispVersion: s,
            krispSuppressionLevel: l,
            goLiveSource: a,
            goLiveContext: eQ,
        };
    }
    getInputDetected() {
        return ti;
    }
    getNoInputDetectedNotice() {
        return to;
    }
    getPacketDelay() {
        return ea.isPlatformEmbedded || this.getMode() !== eE.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        eW.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return eX;
    }
    getVideoHook() {
        return tw().videoHook;
    }
    supportsVideoHook() {
        return eW.supports(eI.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tw().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return (
            eW.supports(eI.AN.EXPERIMENTAL_SOUNDSHARE) &&
            m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eb.T6)
        );
    }
    supportsHookSoundshare() {
        return (
            (0, ea.isWindows)() &&
            eW.supports(eI.AN.SOUNDSHARE) &&
            m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eb.sA)
        );
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = tw().useSystemScreensharePicker,
            n =
                (0, ea.isLinux)() ||
                ((0, ea.isMac)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eb.jR));
        return e && (null != t ? t : n);
    }
    supportsSystemScreensharePicker() {
        return eW.supports(eI.AN.NATIVE_SCREENSHARE_PICKER);
    }
    getOpenH264() {
        return tw().openH264;
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
        return null != (e = tw().modeOptions.vadKrispActivationThreshold) ? e : eM;
    }
    hasActiveCallKitCall() {
        return tN;
    }
    setHasActiveCallKitCall(e) {
        tN = e;
    }
    supportsScreenSoundshare() {
        return (0, ea.isMac)()
            ? eW.supports(eI.AN.SOUNDSHARE) &&
                  m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eb.yG) &&
                  tW()
            : (0, ea.isWindows)()
              ? eW.supports(eI.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, ea.isLinux)() && eW.supports(eI.AN.SCREEN_SOUNDSHARE);
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT,
            t = this.supports(eI.AN.VIDEO)
                ? [
                      {
                          rid: "100",
                          type: e === eI.Yn.DEFAULT ? eI.Tr.VIDEO : eI.Tr.SCREEN,
                          quality: eI.y7,
                      },
                  ]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === eI.Yn.DEFAULT || this.goLiveSimulcastEnabled()) &&
                t.push({
                    rid: "50",
                    type: e === eI.Yn.DEFAULT ? eI.Tr.VIDEO : eI.Tr.SCREEN,
                    quality: eI.LD,
                }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: !1 };
        return (
            (0, ea.isWeb)() &&
                (e.fetchDave = W.N.getCurrentConfig({
                    location: "MediaEngineStore fetchAsyncResources",
                }).loadWasmModule),
            eW.fetchAsyncResources(e)
        );
    }
    startDavePreload() {
        if (!tb && ((tb = !0), (0, ea.isWeb)())) {
            let e = { fetchDave: !0 };
            eW.fetchAsyncResources(e).catch((e) => {
                eR.warn("DAVE preload failed:", e), es.Z.captureException(e);
            });
        }
    }
    getSupportedSecureFramesProtocolVersion() {
        if ((0, ea.isWeb)()) {
            let { useWasmModule: e } = W.N.getCurrentConfig({
                location: "MediaEngineStore getSupportedSecureFramesProtocolVersion",
            });
            if (!e) return 0;
        }
        let e = eW.getSupportedSecureFramesProtocolVersion(),
            t = W.m.getCurrentConfig({ location: "MediaEngineStore" });
        return 114 === e && (e = 1), t.canSupportDaveProtocol && e >= t.protocolVersionFloor ? e : 0;
    }
    hasClipsSource() {
        return null != o;
    }
    getGpuBrand() {
        return tA;
    }
}
function rS(e) {
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
eS(rT, "displayName", "MediaEngineStore");
let rA = (r = new rT(v.Z, {
    VOICE_CHANNEL_SELECT: rn,
    VOICE_STATE_UPDATES: na,
    CONNECTION_OPEN: ne,
    CONNECTION_CLOSED: nn,
    POST_CONNECTION_OPEN: nr,
    RTC_CONNECTION_STATE: ni,
    AUDIO_SET_TEMPORARY_SELF_MUTE: no,
    AUDIO_TOGGLE_SELF_MUTE: ns,
    AUDIO_SET_SELF_MUTE: nl,
    AUDIO_TOGGLE_SELF_DEAF: nu,
    AUDIO_TOGGLE_LOCAL_MUTE: nd,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: nf,
    AUDIO_SET_LOCAL_VOLUME: nh,
    AUDIO_SET_LOCAL_PAN: nm,
    AUDIO_SET_MODE: ng,
    AUDIO_SET_INPUT_VOLUME: nE,
    AUDIO_SET_OUTPUT_VOLUME: nb,
    AUDIO_SET_INPUT_DEVICE: ny,
    AUDIO_SET_OUTPUT_DEVICE: nO,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: nI,
    AUDIO_SET_ECHO_CANCELLATION: nN,
    AUDIO_SET_SIDECHAIN_COMPRESSION: nR,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nP,
    AUDIO_SET_LOOPBACK: nD,
    AUDIO_SET_NOISE_SUPPRESSION: nj,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nM,
    AUDIO_SET_NOISE_CANCELLATION: nk,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: nU,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: nF,
    AUDIO_SET_DEBUG_LOGGING: nV,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: nH,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: nG,
    MEDIA_ENGINE_SET_VIDEO_HOOK: nY,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: nW,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: nK,
    AUDIO_SET_ATTENUATION: nz,
    AUDIO_SET_QOS: nq,
    MEDIA_ENGINE_DEVICES: nS,
    AUDIO_VOLUME_CHANGE: nA,
    AUDIO_RESET: nX,
    AUDIO_INPUT_DETECTED: nQ,
    AUDIO_SET_SUBSYSTEM: n9,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: n7,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: ro,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rs,
    MEDIA_ENGINE_PERMISSION: ra,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: ru,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nv,
    MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nB,
    MEDIA_ENGINE_INTERACTION_REQUIRED: nT,
    USER_SETTINGS_MODAL_INIT: rd,
    USER_SETTINGS_MODAL_SET_SECTION: rd,
    CERTIFIED_DEVICES_SET: rf,
    RPC_APP_CONNECTED: rr,
    RPC_APP_DISCONNECTED: ri,
    OVERLAY_INITIALIZE: nt,
    MEDIA_ENGINE_SET_OPEN_H264: r_,
    MEDIA_ENGINE_SET_HARDWARE_ENCODING: nZ,
    APP_STATE_UPDATE: rh,
    SET_CHANNEL_BITRATE: rm,
    SET_VAD_PERMISSION: nJ,
    SET_NATIVE_PERMISSION: n$,
    SET_CHANNEL_VIDEO_QUALITY_MODE: rb,
    MEDIA_ENGINE_SET_AEC_DUMP: rp,
    CHANNEL_DELETE: rg,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rE,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: ry,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rO,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rv,
    USER_SETTINGS_PROTO_UPDATE: nc,
    CLIPS_INIT: rl,
    CLIPS_SETTINGS_UPDATE: rc,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rI,
    VOICE_FILTER_REQUEST_SWITCH: n8,
    VOICE_FILTER_LOOPBACK_TOGGLE: n4,
    VOICE_FILTER_APPLIED: n5,
    VOICE_FILTER_DOWNLOAD_FAILED: n6,
    VOICE_FILTER_APPLY_FAILED: n6,
}));
