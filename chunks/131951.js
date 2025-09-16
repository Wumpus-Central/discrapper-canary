let r, i, a, o, s, l, c;
n.d(t, { Z: () => rC }), n(388685), n(953529), n(457542), n(539854), n(642613), n(49124), n(337869);
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
    M = n(314080),
    k = n(822253),
    U = n(177732),
    G = n(355552),
    B = n(294473),
    Z = n(706629),
    F = n(159142),
    V = n(166884),
    H = n(585360),
    Y = n(947851),
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
            bypassSystemInputProcessing: !0,
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
    e$ = { [eI.w5]: t2("No Input Devices") },
    e0 = { [eI.w5]: t2("No Output Devices") },
    e1 = { [eI.w5]: t2("No Video Devices") },
    e2 = !1,
    e3 = !1,
    e4 = !1,
    e8 = !1,
    e5 = !1,
    e6 = eI.Av,
    e7 = eI.Av,
    e9 = !1,
    te = !1,
    tt = !1,
    tn = new O.V7(),
    tr = !1,
    ti = !1,
    ta = null,
    to = !1,
    ts = !1,
    tl = !1,
    tc = !1,
    tu = !1,
    td = [],
    tf = !1,
    t_ = null,
    tp = null,
    th = null,
    tm = null,
    tg = null,
    tE = !1,
    tb = !1,
    ty = !1,
    tO = !1;
X.Z.hasPermission(ey.Eu.AUDIO, { showAuthorizationError: !1 }),
    X.Z.hasPermission(ey.Eu.CAMERA, { showAuthorizationError: !1 });
let tv = !1,
    tI = new Set(),
    tT = tv,
    tS = new Set(),
    tA = {},
    tC = null,
    tN = !0,
    tR = !1;
function tP() {
    var e, t;
    return null != (t = null == (e = em.default.getCurrentUser()) ? void 0 : e.isStaff()) && t
        ? "always"
        : eo.Z === g.R.CANARY
          ? "permittedDevicesOnly"
          : "never";
}
function tw() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT,
        t = eK[e];
    return null == t && ((t = eH()), (eK[e] = t)), t;
}
function tD() {
    var e, t, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT,
        i = tw(r),
        a = eY[null != (e = i.activeInputProfile) ? e : ev._.CUSTOM];
    return eN(eA({}, i, a), {
        modeOptions: eA({}, null != (t = i.modeOptions) ? t : {}, null != (n = a.modeOptions) ? n : {}),
    });
}
function tx(e) {
    var t;
    let n = tD(e.context);
    e.setInputMode(n.mode, {
        vadThreshold: n.modeOptions.threshold,
        vadAutoThreshold: n.modeOptions.autoThreshold,
        vadUseKrisp: n.modeOptions.vadUseKrisp && n1(),
        vadKrispActivationThreshold: null != (t = n.modeOptions.vadKrispActivationThreshold) ? t : 0.5,
        vadLeading: n.modeOptions.vadLeading,
        vadTrailing: n.modeOptions.vadTrailing,
        pttReleaseDelay: Math.round(n.modeOptions.delay),
    });
}
function tL(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.Qx;
    return p().clamp(e, 0, t);
}
function tj(e) {
    let t = tD(e.context),
        n = !eq || t.mute || t.deaf;
    e.context === eI.Yn.DEFAULT
        ? (n = n || e2 || e3 || e4 || !X.Z.didHavePermission(ey.Eu.AUDIO))
        : e.context === eI.Yn.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eI.Yn.DEFAULT && S.Z.updateNativeMute();
}
function tM(e) {
    e !== eQ && (null != a && eW.setGoLiveSource(null, eQ), (eQ = e));
}
function tk() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e5,
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
        e5 || i)
    ) {
        let e = tD().videoDeviceId;
        e5 && e === eI.w5 && e7 === eI.w5 && e6 !== eI.Av ? (e = e6) : (e7 = e),
            (e6 = (e5 = i) ? t4(e1, e) : eI.Av),
            eW.setVideoInputDevice(e6);
    }
    if (((a = o), null != o)) {
        let e = {
            resolution: o.quality.resolution,
            frameRate: o.quality.frameRate,
        };
        if (null != o.desktopSource) {
            let t = tP(),
                n = tD().videoHook,
                i = tY(),
                a = i ? (tW() && (0, z.R)("MediaEngineStore_updateVideo").enabled ? eb.zj : eb.ZM) : 0;
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
                        allowScreenCaptureKit: tK(),
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
function tU(e) {
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
function tG(e) {
    let t = (0, j.U)({
        location: "getAutomaticGainControlConfig",
        disable: !e,
    }).noiseCancellationConfig;
    return eA({ enabled: e }, t);
}
function tB(e, t) {
    e.setAutomaticGainControl(tG(t));
}
async function tZ(e, t) {
    if ((0, ea.isIOS)() || (0, ea.isMac)()) {
        let e = await eW.getSystemMicrophoneMode();
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
function tF(e) {
    let t = tD(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(ef.Z.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(ef.Z.hasNoiseSuppression(n) || t.noiseSuppression),
        tB(e, ef.Z.hasAutomaticGainControl(n) || t.automaticGainControl),
        tZ(e, t.noiseCancellation),
        e.setVoiceFilterId(t_),
        (0, ea.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function tV() {
    var e;
    return !!(0, Y.m)("MediaEngineStore") || null == (e = tD().hardwareEncoding) || e;
}
function tH() {
    eW.on(b.aB.Connection, (e) => {
        var t;
        tx(e), tj(e), tF(e);
        let n = tD();
        e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers),
            e.setQoS(n.qos),
            e.setExperimentalEncoders(n.experimentalEncoders),
            e.setHardwareH264(tV()),
            e.setSoftwareH264(null == (t = n.openH264) || t);
        let i = ep.Z.getGuildId(),
            {
                muteBeforeProcessing: o,
                pttBeforeProcessing: s,
                skipEncode: l,
            } = (null != i ? Z.Z : B.Z).getCurrentConfig(
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
            let { simulcastEnabled: t, lqStreamBitrate: n } = V.Z.getConfig();
            e.configureGoLiveSimulcast(t, n);
            let {
                enabled: r,
                scaleOffBitrateFloor: i,
                adjustMaxBitrateFloor: a,
            } = (0, H.k)({
                location: "setupMediaEngine",
                autoTrackExposure: !0,
            });
            e.setGoLiveUsePixelCounts(r, i, a);
        }
        if (
            ((0, ea.isWindows)()
                ? (null == tC ? void 0 : tC.startsWith("NVIDIA")) || (null == tC ? void 0 : tC.startsWith("AMD"))
                    ? e.setExperimentFlag(eI.V8.SIGNAL_AV1, !0)
                    : e.setExperimentFlag(eI.V8.SIGNAL_AV1_DECODE, !0)
                : ((0, ea.isMac)() || (0, ea.isLinux)()) && e.setExperimentFlag(eI.V8.SIGNAL_AV1_DECODE, !0),
            (0, ea.isWindows)() && e.setExperimentFlag(eI.V8.SIGNAL_AV1_HARDWARE_DECODE, !0),
            (0, ea.isWeb)())
        ) {
            let { enabled: t } = (0, F.A)("MediaEngineStore");
            e.setExperimentFlag(eI.V8.BROWSER_HEVC, t);
        }
        eW.setHasFullbandPerformance((0, R.Z)());
        let d = (0, G.D)("setupMediaEngine").enabled;
        if ((e.setRemoteAudioHistory(1000 * !!d), (0, C.Z)(r))) {
            let t = A.Z.getSettings();
            e.setExperimentFlag(eI.V8.STREAMER_CLIP, t.clipsEnabled);
            let { enableViewerClipping: n } = K.Z.getCurrentConfig(
                { location: "f627ab_15" },
                { autoTrackExposure: !1 },
            );
            e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eI.ux);
        }
        for (let t of ((n = tD(e.context)), e.setPostponeDecodeLevel(eZ), Object.keys(n.localMutes)))
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
                ((te = !1),
                (tt = !1),
                e.on(b.Sh.SpeakingWhileMuted, () => {
                    (te = !0),
                        (tt = !0),
                        r.emitChange(),
                        tn.stop(),
                        tn.start(eF, () => {
                            (tt = !1), r.emitChange();
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
                        underlyingError: tU(e),
                    }),
                    (tE = !0),
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
                        underlyingError: tU(e),
                    }),
                    en.default.track(eE.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    v.Z.dispatch({
                        type: "AUDIO_SET_MODE",
                        context: eI.Yn.DEFAULT,
                        mode: eE.pM4.VOICE_ACTIVITY,
                        options: eN(eA({}, tD(eI.Yn.DEFAULT).modeOptions), { vadUseKrisp: !1 }),
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
            (tO = !0),
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
            let t = rA(e);
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
        nL(),
        tX.reset(),
        (0, eh.q)().then((e) => {
            null != e && (tC = e.gpu_brand);
        }),
        eW.on(b.aB.SystemMicrophoneModeChange, (e) => {
            eW.eachConnection(tF);
        });
}
function tY() {
    return (0, ea.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eb.c5);
}
function tW() {
    return (0, ea.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eb.sN);
}
function tK() {
    return (
        (0, ea.isMac)() &&
        eW.supports(eI.AN.SCREEN_CAPTURE_KIT) &&
        m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eb.C7)
    );
}
function tz() {
    return (
        (0, ea.isWindows)() &&
        eW.supports(eI.AN.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        eW.supports(eI.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function tq() {
    return eW.supports(eI.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
let tX = new (class {
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
        let e = tD();
        !to && ep.Z.getState() === eE.hes.RTC_CONNECTED && e.mode === eE.pM4.VOICE_ACTIVITY && e.silenceWarning
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
                                    e && (ts = !0));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout,
                    ));
            });
    }
})();
function tQ() {
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
        t0();
}
function tJ(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = tw(t);
    return Object.assign(r, e), !__OVERLAY__ && n && y.K.set(eP, eK), r;
}
function t$() {
    y.K.remove(eP), location.reload();
}
function t0() {
    let e = tD();
    eW.setAudioInputDevice(e.inputDeviceId),
        eW.setAudioOutputDevice(e.outputDeviceId),
        tk(),
        eW.setInputVolume(e.inputVolume),
        eW.setOutputVolume(e.outputVolume),
        eW.setH264Enabled(tV() || e.openH264),
        eW.setAv1Enabled(tV()),
        eW.setH265Enabled(tV()),
        eW.setAecDump(e.aecDumpEnabled),
        eW.setSidechainCompression(e.sidechainCompression),
        eW.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        eW.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing);
}
function t1() {
    eq ||
        eW.enable().then(() =>
            v.Z.dispatch({
                type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
                enabled: !0,
                unmute: !1,
            }),
        );
}
function t2(e) {
    return {
        id: eI.w5,
        index: 0,
        name: e,
        disabled: !0,
        hardwareId: void 0,
        containerId: void 0,
    };
}
function t3(e, t) {
    if (0 === e.length) {
        let e = t2(t);
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
function t4(e, t) {
    var n, r;
    let i = null != (r = null != (n = e[t]) ? n : e[eI.w5]) ? r : p()(e).values().first();
    return null != i ? i.id : t;
}
function t8(e) {
    let t = e$;
    if (((e$ = t3(e, eT.intl.string(eT.t["/QIjDA"]))), !p().isEqual(e$, t))) {
        let e = tD(),
            t = t4(e$, e.inputDeviceId);
        eW.setAudioInputDevice(t);
    }
}
function t5(e) {
    let t = e0;
    if (((e0 = t3(e, eT.intl.string(eT.t.xlUg0t))), !p().isEqual(e0, t))) {
        let e = tD(),
            t = t4(e0, e.outputDeviceId);
        eW.setAudioOutputDevice(t);
    }
}
function t6(e) {
    ti = e.length > 0;
    let t = e1;
    if (((e1 = t3(e, eT.intl.string(eT.t.WKWARU))), e5 && !p().isEqual(e1, t))) {
        var n;
        let e = void 0 !== e1[e6],
            r = e6 === eI.w5 && (null == (n = t[eI.w5]) ? void 0 : n.disabled);
        tk(e || r);
    }
}
function t7() {
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
            { localMutes: s, localVolumes: l } = tD(i);
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
        tJ(
            {
                localMutes: s,
                localVolumes: l,
            },
            i,
        );
    }
}
function t9(e) {
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
function ne(e, t) {
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
function nt(e) {
    (i = e.sessionId), (e2 = !1), (e8 = !1);
    let t = tD();
    if (
        (tz() && (tq() ? rt(eI.iA.AUTOMATIC) : t.automaticAudioSubsystem && rn()),
        eW.supports(eI.AN.OFFLOAD_ADM_CONTROLS))
    ) {
        let e = !1;
        (0, ea.isDesktop)()
            ? (e = (0, k.E)({ location: "handleConnectionOpen" }).enabled)
            : ((0, ea.isIOS)() || (0, ea.isAndroid)()) && (e = (0, U.W)({ location: "handleConnectionOpen" }).enabled),
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
              tJ({ mostRecentlyRequestedVoiceFilter: null }))
            : n(358820).r5()),
        t7();
}
function nn(e) {
    let { mediaEngineState: t } = e;
    (eK = t.settingsByContext),
        (e$ = t.inputDevices),
        (e0 = t.outputDevices),
        (tA = t.appSupported),
        (tu = t.krispModuleLoaded),
        (s = t.krispVersion),
        (eQ = t.goLiveContext);
}
function nr() {
    i = null;
}
function ni() {
    if ((0, ea.isWeb)()) {
        let e = W.N.getCurrentConfig({ location: "MediaEngineStore handlePostConnectionOpen" });
        e.loadWasmModule && e.preload && r.startDavePreload();
    }
    return !1;
}
function na(e) {
    switch (e.state) {
        case eE.hes.CONNECTING:
            t1();
            break;
        case eE.hes.RTC_CONNECTING:
            (to = !1), (ts = !1);
            break;
        case eE.hes.RTC_CONNECTED:
            tk();
            break;
        case eE.hes.DISCONNECTED:
            np(), nh();
    }
    tX.update();
}
function no(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (e2 = t.mute || t.suppress), (e8 = t.deaf), eW.eachConnection(tj);
            let e = null != t.guildId && null != t.channelId && null != tg && tg !== t.channelId,
                n = !tl && null == t.channelId;
            return tk(!e && !n && e5), (tg = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== eu.default.getId() || null != ep.Z.getChannelId() || tk(!1, null), e;
    }, !1);
}
function ns(e) {
    let { mute: t } = e;
    (e3 = t), eW.eachConnection(tj);
}
function nl(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = tD(t);
    if (t === eI.Yn.DEFAULT && (X.Z.requestPermission(ey.Eu.AUDIO), e4)) return !1;
    (r = !i && !r) || (i = !1),
        n || (e9 = !0),
        tJ(
            {
                mute: r,
                deaf: i,
            },
            t,
        ),
        eW.eachConnection(tj);
}
function nc(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    tJ({ mute: n }, t), r || (e9 = !0), eW.eachConnection(tj);
}
function nu(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== eO.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    t7(!0);
}
function nd(e) {
    let { context: t } = e;
    tJ({ deaf: !tD(t).deaf }, t), eW.eachConnection(tj);
}
function nf(e) {
    let { context: t, userId: n } = e;
    if (n === eu.default.getId()) return;
    let { localMutes: r } = tD(t);
    r[n] ? delete r[n] : (r[n] = !0),
        tJ({ localMutes: r }, t),
        eW.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function n_(e) {
    var t, n, r, i, a, o, s;
    let { context: l, userId: c, videoToggleState: u, persist: d, isAutomatic: _ } = e;
    f()(!(d && _), "These are not allowed to both be true.");
    let p = u === eE.ZUi.DISABLED,
        { disabledLocalVideos: h } = tD(l),
        m = null != (t = h[c]) && t,
        g = tI.has(c),
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
    let { videoToggleStateMap: I } = tD(l);
    if (
        (I[c] === eE.ZUi.AUTO_PROBING &&
            u === eE.ZUi.AUTO_ENABLED &&
            (0, q.Z)(c, p ? eI.fC.AUTO_DISABLE : eI.fC.AUTO_ENABLE, E),
        (I[c] = u),
        tJ({ videoToggleStateMap: I }, l, d),
        u === eE.ZUi.AUTO_PROBING
            ? null == (n = ep.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, !0)
            : null == (r = ep.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, !1),
        tT ||
            (eR.info("isAutoDisableAllowed=".concat(tT, " - disabling VideoHealthManager")),
            null == (a = ep.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()),
        O)
    ) {
        if ((!p && !g) || (p && !tT)) return;
        (0, q.Z)(c, p ? eI.fC.AUTO_DISABLE : eI.fC.AUTO_ENABLE, E), p ? tI.add(c) : tI.delete(c);
    } else
        v &&
            (g && !p
                ? (eR.info("disallowing auto-disable for this session because of manual override by user"),
                  (tT = !1),
                  null == (s = ep.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(),
                  (0, q.Z)(c, eI.fC.MANUAL_REENABLE, E))
                : (0, q.Z)(c, p ? eI.fC.MANUAL_DISABLE : eI.fC.MANUAL_ENABLE, E));
    y && !p && tI.delete(c),
        p ? (h[c] = !0) : delete h[c],
        tJ({ disabledLocalVideos: h }, l, d),
        eW.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(c, null != (t = h[c]) && t);
        }, l);
}
function np() {
    if (0 === tI.size) return;
    let e = eI.Yn.DEFAULT,
        { disabledLocalVideos: t } = tD(e);
    tI.forEach((n) => {
        f()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            eW.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tI.clear(),
        tJ({ disabledLocalVideos: t }, e, !1);
}
function nh() {
    let e = eI.Yn.DEFAULT,
        { videoToggleStateMap: t } = tD(e);
    for (let [e, n] of Object.entries(t)) n === eE.ZUi.AUTO_PROBING && delete t[e];
    tJ({ videoToggleStateMap: t }, e, !1);
}
function nm(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === eu.default.getId()) return;
    let i = t === eI.Yn.STREAM ? eI.Yh : eI.Qx,
        { localVolumes: a } = tD(t);
    r === i ? delete a[n] : (a[n] = r), tJ({ localVolumes: a }, t), eW.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function ng(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: a } = tD(t);
    (a[n] = {
        left: r,
        right: i,
    }),
        tJ({ localPans: a }, t),
        eW.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function nE(e) {
    let { context: t, mode: n, options: r } = e;
    tJ(
        {
            mode: n,
            modeOptions: r,
        },
        t,
    ),
        eW.eachConnection(tx),
        tX.update();
}
function nb(e) {
    let { volume: t } = e;
    tJ({ inputVolume: tL(t) }), eW.setInputVolume(t);
}
function ny(e) {
    let { volume: t } = e;
    tJ({ outputVolume: t }), eW.setOutputVolume(t);
}
function nO(e) {
    let { id: t } = e;
    (t = t4(e$, t)), (eJ = performance.now()), tJ({ inputDeviceId: t }), eW.setAudioInputDevice(t);
}
function nv(e) {
    let { id: t } = e;
    tJ({ outputDeviceId: (t = t4(e0, t)) }), eW.setAudioOutputDevice(t);
}
function nI(e) {
    let { id: t } = e;
    tJ({ videoDeviceId: (t = t4(e1, t)) }), tk();
}
function nT(e) {
    let { inputProfile: t } = e;
    tJ({ activeInputProfile: t });
    let n = tD();
    eW.eachConnection((e) => {
        tx(e),
            tB(e, n.automaticGainControl),
            e.setEchoCancellation(n.echoCancellation),
            e.setExperimentalEncoders(n.experimentalEncoders),
            tZ(e, n.noiseCancellation),
            e.setNoiseSuppression(n.noiseSuppression);
    }),
        eW.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        tX.update(),
        nj();
}
function nS(e) {
    return eX !== e.required && ((eX = e.required), e.required || eW.interact(), !0);
}
function nA(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    t8(t), t5(n), t6(r);
}
function nC(e) {
    let { inputVolume: t, outputVolume: n } = e;
    tJ({
        inputVolume: tL(t),
        outputVolume: n,
    });
}
function nN(e) {
    var t;
    let n = tD(),
        r = eW.getAudioSubsystem(),
        i = eW.getAudioLayer(),
        a = t4(e$, n.inputDeviceId),
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
function nR(e) {
    let t = tJ({ echoCancellation: e.enabled });
    eW.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nj(), nN(e.location);
}
function nP(e) {
    nD(e.enabled);
}
function nw(e) {
    let t = tJ({ sidechainCompressionStrength: e.strength });
    eW.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function nD(e) {
    let t = tJ({ sidechainCompression: e });
    eW.setSidechainCompression(t.sidechainCompression);
}
function nx(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tS.add(n) : tS.delete(n), nL(), nj();
}
function nL() {
    let e = !tS.has("voice_filter_preview") && !tS.has("mic_test");
    eW.setMaybePreprocessMute(e);
}
function nj() {
    let e = tD(),
        t = tS.size > 0,
        n = e.inputDeviceId,
        r = ef.Z.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        a = ef.Z.hasNoiseSuppression(n) || e.noiseSuppression,
        o = tG(ef.Z.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation,
        l = null !== t_,
        c = tS.has("voice_filter") && 1 === tS.size;
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
function nM(e) {
    let t = tJ({ noiseSuppression: e.enabled });
    eW.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nj(), nN(e.location);
}
function nk(e) {
    let t = tJ({ automaticGainControl: e.enabled });
    eW.eachConnection((e) => tB(e, t.automaticGainControl)), nj(), nN(e.location);
}
function nU(e) {
    let t = tJ({ noiseCancellation: e.enabled });
    eW.eachConnection((e) => tZ(e, t.noiseCancellation)), nj(), nN(e.location);
}
function nG(e) {
    Q.Z.setKrispModelOverride(e.model), (c = e.model), nj();
}
function nB(e) {
    var t;
    (0, ea.isWeb)() || ((tf = e.enabled), null == (t = eW.setNoiseCancellationEnableStats) || t.call(eW, e.enabled));
}
function nZ(e) {
    let t = tJ({ experimentalEncoders: e.enabled });
    eW.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
}
function nF(e) {
    let { enabled: t } = e,
        n = tJ({ hardwareEncoding: t }),
        r = tV();
    eW.eachConnection((e) => e.setHardwareH264(r)),
        eW.setH264Enabled(r || n.openH264),
        eW.setAv1Enabled(r),
        eW.setH265Enabled(r);
}
function nV(e) {
    tJ({ silenceWarning: e.enabled }), tX.update();
}
function nH(e) {
    eW.setDebugLogging(e.enabled);
}
function nY(e) {
    let { level: t } = e;
    (l = t), Q.Z.setKrispSuppressionLevel(t);
}
function nW(e) {
    tJ({ videoHook: e.enabled });
}
function nK(e) {
    tJ({ experimentalSoundshare2: e.enabled });
}
function nz(e) {
    let { enabled: t } = e;
    tJ({ useSystemScreensharePicker: t });
}
function nq(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = tJ({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r,
        });
    eW.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function nX(e) {
    let { enabled: t } = e;
    tJ({ qos: t }), eW.eachConnection((e) => e.setQoS(t));
}
function nQ() {
    t$();
}
function nJ(e) {
    let { inputDetected: t } = e;
    (ta = t), !to && ta && ((to = !0), tX.update());
}
function n$(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === e4) return !1;
    (e4 = n), eW.eachConnection(tj);
}
function n0(e) {
    let { state: t, permissionType: n } = e,
        r = t === ey.PQ.ACCEPTED;
    switch (n) {
        case ey.Eu.AUDIO:
            (tO = !0), eW.eachConnection(tj);
            break;
        case ey.Eu.CAMERA:
            !r && e5 && tk(!1);
            break;
        default:
            return !1;
    }
}
function n1() {
    return tu || !1;
}
async function n2() {
    try {
        var e, t, n, i;
        await el.ZP.ensureModule("discord_krisp");
        let a = el.ZP.requireModule("discord_krisp");
        (tu = !0),
            (s = null == (e = a.getSdkVersion) ? void 0 : e.call(a)),
            (l = null != (i = null == (t = a.getSuppressionLevel) ? void 0 : t.call(a)) ? i : 100),
            null == (n = a.getNcModels) ||
                n.call(a).then((e) => {
                    (td = e), r.emitChange();
                }),
            r.emitChange();
    } catch (t) {
        eR.warn("Failed to load Krisp module: ".concat(t.message)), es.Z.captureException(t);
        let e = eI.H3.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eI.H3.INITIALIZED : n;
        }
        en.default.track(eE.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), tJ({ noiseCancellation: !1 });
    } finally {
        tc = !1;
    }
}
function n3() {
    return (0, ea.isWindows)() || (0, ea.isLinux)() || (0, ea.isMac)();
}
function n4() {
    !n3() || __OVERLAY__ || tc || tu
        ? (0, ea.isWeb)() && eW.supports(eI.AN.NOISE_CANCELLATION)
            ? ((tu = !0), r.emitChange())
            : (0, ea.isWeb)() && tJ({ noiseCancellation: !1 })
        : ((tc = !0), n2());
}
function n8(e) {
    let { enabled: t } = e;
    en.default.track(eE.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != t_ ? t_ : null,
        enabled: t,
    }),
        tJ({ voiceFilterPlaybackEnabled: t });
}
function n5(e) {
    let { newVoiceFilterId: t } = e;
    tJ({ mostRecentlyRequestedVoiceFilter: t }), eW.eachConnection((e) => e.setVoiceFilterId(t));
}
function n6() {
    tJ({ mostRecentlyRequestedVoiceFilter: null });
}
function n7(e) {
    let { voiceFilterId: t } = e;
    (th = t_), (tm = tp), (t_ = t), (tp = null === t ? null : Date.now());
}
function n9(e) {
    let t = e.bypassEnabled;
    tJ({ bypassSystemInputProcessing: t }), eW.setAudioInputBypassSystemProcessing(t), nN(e.location);
}
function re(e) {
    rt(e.subsystem);
}
function rt(e) {
    e === eI.iA.AUTOMATIC
        ? (tJ({ automaticAudioSubsystem: !0 }), rn())
        : (tJ({ automaticAudioSubsystem: !1 }), eW.setAudioSubsystem(e));
}
function rn() {
    eW.queueAudioSubsystem(eI.iA.EXPERIMENTAL);
}
function rr(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && tk(i, null), null != t || null == n)) {
        tl = !1;
        return;
    }
    if (tl) return;
    tl = !0;
    let a = tD();
    (a.mute || a.deaf) &&
        (tJ({
            deaf: !1,
            mute: !1,
        }),
        eW.eachConnection(tj));
}
function ri(e) {
    let { application: t } = e;
    ez.add(t.id);
}
function ra(e) {
    let { application: t } = e;
    ez.delete(t.id);
}
function ro(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (eq = !1), eW.eachConnection(tj);
                break;
            case "video":
                tk(!1);
        }
}
function rs(e) {
    (eq = e.enabled),
        e.unmute &&
            tJ({
                mute: !1,
                deaf: !1,
            }),
        eW.eachConnection(tj);
}
function rl(e) {
    let { enabled: t } = e;
    X.Z.requestPermission(ey.Eu.CAMERA), tk(t);
}
function rc(e) {
    let { sourceId: t, applicationName: n, quality: i } = e,
        a = A.Z.isDecoupledGameClippingEnabled(),
        s = A.Z.getSettings().decoupledClipsEnabled;
    if (!a || !s || null == I.Z) return;
    let l = null,
        c = null,
        u = er.Z.getPidFromDesktopSource(t);
    ({ soundshareId: l, soundshareSession: c } = t9(u));
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
        null != l && ne(l, c),
        (o = d);
    let f = tP(),
        _ = tD().videoHook;
    eW.setClipsSource({
        desktopDescription: {
            id: o.desktopSource.id,
            soundshareId: o.desktopSource.soundshareId,
            useVideoHook: _,
            useGraphicsCapture: tY(),
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: tK(),
            videoHookStaleFrameTimeoutMs: eU,
            graphicsCaptureStaleFrameTimeoutMs: eG,
            hdrCaptureMode: f,
        },
        quality: i,
        applicationName: n,
    });
}
function ru(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((o = null), eW.setClipsSource(null));
}
function rd(e) {
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
            (({ soundshareId: e, soundshareSession: r } = t9(c)), null != e && ne(e, r)),
            tM(s),
            tk(s === eI.Yn.STREAM && e5, {
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
            o = e === eI.Yn.STREAM && e5,
            s =
                null != (i = a.qualityOptions)
                    ? i
                    : {
                          resolution: 720,
                          frameRate: 30,
                      };
        tk(o, {
            cameraSource: {
                videoDeviceGuid: t,
                audioDeviceGuid: n,
            },
            quality: {
                resolution: s.resolution,
                frameRate: s.frameRate,
            },
        });
    } else tk(e5, null);
}
function rf(e) {
    let { section: t } = e;
    return t === eE.oAB.VOICE && t1(), !1;
}
function r_() {
    return eW.eachConnection(tF), !1;
}
function rp(e) {
    let { enabled: t } = e,
        n = tJ({ openH264: t });
    eW.setH264Enabled(tV() || n.openH264),
        eW.eachConnection((e) => {
            var t;
            return e.setSoftwareH264(null == (t = n.openH264) || t);
        });
}
function rh(e) {
    let { enabled: t } = e,
        n = tJ({ aecDumpEnabled: t });
    eW.setAecDump(n.aecDumpEnabled);
}
function rm(e) {
    let { state: t } = e,
        n = D.Z.isEnabled();
    if (t === eE.$7l.BACKGROUND && e5 && !n) (tr = !0), tk(!1);
    else {
        if (t !== eE.$7l.ACTIVE || !tr) return !1;
        (tr = !1), tk(!0);
    }
    return !0;
}
function rg(e) {
    eW.eachConnection((t) => t.setBitRate(e.bitrate));
}
function rE() {
    if ((!e5 && null == a) || null != ep.Z.getRTCConnectionId()) return !1;
    tk(!1, null);
}
function rb() {
    return !!tE && ((tE = !1), !0);
}
function ry(e) {
    eW.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function rO(e) {
    let { settings: t } = e;
    eW.applyMediaFilterSettings(t).finally(() => {
        (tb = !1), r.emitChange();
    });
}
function rv() {
    tb = !0;
}
function rI() {
    tb = !1;
}
function rT(e) {
    tN = e.enabled;
}
class rS extends (u = E.ZP.Store) {
    initialize() {
        tH(),
            tQ(),
            n4(),
            nh(),
            (tA = {
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
        return tA[e] || eW.supports(e);
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
        return n1();
    }
    isNoiseCancellationError() {
        return tE;
    }
    isAutomaticGainControlSupported() {
        return eW.supports(eI.AN.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !tq() && (eW.supports(eI.AN.LEGACY_AUDIO_SUBSYSTEM) || eW.supports(eI.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return eW.supports(eI.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === eW.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return n1();
    }
    isAecDumpSupported() {
        return eW.supports(eI.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return eW.supports(eI.AN.VIDEO) && eW.supports(eI.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        let t = (null == (e = e_.Z.getChannel(tg)) ? void 0 : e.type) === eE.d4z.GUILD_STAGE_VOICE,
            n = tV();
        return !t && n && V.Z.simulcastEnabled();
    }
    getAecDump() {
        return tD().aecDumpEnabled;
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
        return tf;
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
            tD(e).mute ||
            !X.Z.didHavePermission(ey.Eu.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eI.Yn.DEFAULT && e4)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return e9;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        e9 = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && ef.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return tN;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT;
        return !this.isSupported() || tD(e).deaf;
    }
    isVideoEnabled() {
        return e5 && ti;
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
        return e !== eu.default.getId() && (tD(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return eW.supports(eI.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.Yn.DEFAULT;
        return null != (t = tD(n).disabledLocalVideos[e]) && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.Yn.DEFAULT;
        return null != (t = tD(n).videoToggleStateMap[e]) ? t : eE.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.Yn.DEFAULT;
        return t === eI.Yn.DEFAULT && tI.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT;
        return e === eI.Yn.DEFAULT && tI.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tb;
    }
    isNativeAudioPermissionReady() {
        return tO;
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
            n = tD(t).localPans[e];
        return null != n ? n : ek;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.Yn.DEFAULT,
            n = t === eI.Yn.STREAM ? eI.Yh : eI.Qx,
            r = tD(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return tD().inputVolume;
    }
    getOutputVolume() {
        return tD().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT;
        return tD(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT;
        return tD(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return t_;
    }
    getActiveVoiceFilterAppliedAt() {
        return tp;
    }
    getPreviousVoiceFilter() {
        return th;
    }
    getPreviousVoiceFilterAppliedAt() {
        return tm;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return tD().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return tD().voiceFilterPlaybackEnabled;
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
        return t4(e$, tD().inputDeviceId);
    }
    getOutputDeviceId() {
        return t4(e0, tD().outputDeviceId);
    }
    getVideoDeviceId() {
        return t4(e1, tD().videoDeviceId);
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
        let e = tD();
        return ef.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return eW.supports(eI.AN.SIDECHAIN_COMPRESSION) && tD().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return tD().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return tD().h265Enabled;
    }
    getLoopback() {
        return tS.size > 0;
    }
    getLoopbackReasons() {
        return tS;
    }
    getNoiseSuppression() {
        let e = tD();
        return ef.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tD();
        return ef.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return tD().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return tD().noiseCancellation;
    }
    getExperimentalEncoders() {
        return tD().experimentalEncoders;
    }
    getHardwareEncoding() {
        return tV();
    }
    getHardwareEncodingSetting() {
        var e;
        return null == (e = tD().hardwareEncoding) || e;
    }
    getEnableSilenceWarning() {
        return tD().silenceWarning;
    }
    getDebugLogging() {
        return eW.getDebugLogging();
    }
    getQoS() {
        return tD().qos;
    }
    getAttenuation() {
        return tD().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return tD().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return tD().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return tz() && tD().automaticAudioSubsystem ? eI.iA.AUTOMATIC : eW.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return eW.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return tD().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === ev._.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT;
        return tD(e);
    }
    getState() {
        return {
            settingsByContext: eK,
            inputDevices: e$,
            outputDevices: e0,
            appSupported: tA,
            krispModuleLoaded: tu,
            krispVersion: s,
            krispSuppressionLevel: l,
            goLiveSource: a,
            goLiveContext: eQ,
        };
    }
    getInputDetected() {
        return ta;
    }
    getNoInputDetectedNotice() {
        return ts;
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
        return tD().videoHook;
    }
    supportsVideoHook() {
        return eW.supports(eI.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tD().experimentalSoundshare2;
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
            t = tD().useSystemScreensharePicker,
            n =
                (0, ea.isLinux)() ||
                ((0, ea.isMac)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eb.jR));
        return e && (null != t ? t : n);
    }
    supportsSystemScreensharePicker() {
        return eW.supports(eI.AN.NATIVE_SCREENSHARE_PICKER);
    }
    getOpenH264() {
        return tD().openH264;
    }
    getEverSpeakingWhileMuted() {
        return te;
    }
    getSpeakingWhileMuted() {
        return tt;
    }
    getKrispModelOverride() {
        return c;
    }
    getKrispModels() {
        return td;
    }
    getKrispVadActivationThreshold() {
        var e;
        return null != (e = tD().modeOptions.vadKrispActivationThreshold) ? e : eM;
    }
    hasActiveCallKitCall() {
        return tR;
    }
    setHasActiveCallKitCall(e) {
        tR = e;
    }
    supportsScreenSoundshare() {
        return (0, ea.isMac)()
            ? eW.supports(eI.AN.SOUNDSHARE) &&
                  m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eb.yG) &&
                  tK()
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
        if (!ty && ((ty = !0), (0, ea.isWeb)())) {
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
        return tC;
    }
}
function rA(e) {
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
eS(rS, "displayName", "MediaEngineStore");
let rC = (r = new rS(v.Z, {
    VOICE_CHANNEL_SELECT: rr,
    VOICE_STATE_UPDATES: no,
    CONNECTION_OPEN: nt,
    CONNECTION_CLOSED: nr,
    POST_CONNECTION_OPEN: ni,
    RTC_CONNECTION_STATE: na,
    AUDIO_SET_TEMPORARY_SELF_MUTE: ns,
    AUDIO_TOGGLE_SELF_MUTE: nl,
    AUDIO_SET_SELF_MUTE: nc,
    AUDIO_TOGGLE_SELF_DEAF: nd,
    AUDIO_TOGGLE_LOCAL_MUTE: nf,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: n_,
    AUDIO_SET_LOCAL_VOLUME: nm,
    AUDIO_SET_LOCAL_PAN: ng,
    AUDIO_SET_MODE: nE,
    AUDIO_SET_INPUT_VOLUME: nb,
    AUDIO_SET_OUTPUT_VOLUME: ny,
    AUDIO_SET_INPUT_DEVICE: nO,
    AUDIO_SET_OUTPUT_DEVICE: nv,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: nT,
    AUDIO_SET_ECHO_CANCELLATION: nR,
    AUDIO_SET_SIDECHAIN_COMPRESSION: nP,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nw,
    AUDIO_SET_LOOPBACK: nx,
    AUDIO_SET_NOISE_SUPPRESSION: nM,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nk,
    AUDIO_SET_NOISE_CANCELLATION: nU,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: nG,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: nV,
    AUDIO_SET_DEBUG_LOGGING: nH,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: nY,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: nB,
    MEDIA_ENGINE_SET_VIDEO_HOOK: nW,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: nK,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: nz,
    AUDIO_SET_ATTENUATION: nq,
    AUDIO_SET_QOS: nX,
    MEDIA_ENGINE_DEVICES: nA,
    AUDIO_VOLUME_CHANGE: nC,
    AUDIO_RESET: nQ,
    AUDIO_INPUT_DETECTED: nJ,
    AUDIO_SET_SUBSYSTEM: re,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: n9,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rs,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rl,
    MEDIA_ENGINE_PERMISSION: ro,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rd,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nI,
    MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nZ,
    MEDIA_ENGINE_INTERACTION_REQUIRED: nS,
    USER_SETTINGS_MODAL_INIT: rf,
    USER_SETTINGS_MODAL_SET_SECTION: rf,
    CERTIFIED_DEVICES_SET: r_,
    RPC_APP_CONNECTED: ri,
    RPC_APP_DISCONNECTED: ra,
    OVERLAY_INITIALIZE: nn,
    MEDIA_ENGINE_SET_OPEN_H264: rp,
    MEDIA_ENGINE_SET_HARDWARE_ENCODING: nF,
    APP_STATE_UPDATE: rm,
    SET_CHANNEL_BITRATE: rg,
    SET_VAD_PERMISSION: n$,
    SET_NATIVE_PERMISSION: n0,
    SET_CHANNEL_VIDEO_QUALITY_MODE: ry,
    MEDIA_ENGINE_SET_AEC_DUMP: rh,
    CHANNEL_DELETE: rE,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rb,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rO,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rv,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rI,
    USER_SETTINGS_PROTO_UPDATE: nu,
    CLIPS_INIT: rc,
    CLIPS_SETTINGS_UPDATE: ru,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rT,
    VOICE_FILTER_REQUEST_SWITCH: n5,
    VOICE_FILTER_LOOPBACK_TOGGLE: n8,
    VOICE_FILTER_APPLIED: n7,
    VOICE_FILTER_DOWNLOAD_FAILED: n6,
    VOICE_FILTER_APPLY_FAILED: n6,
}));
