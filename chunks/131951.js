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
    H = n(64592),
    Y = n(947851),
    W = n(529558),
    K = n(705946),
    z = n(441167),
    q = n(787517),
    X = n(338336),
    Q = n(751571),
    J = n(311473),
    $ = n(725380),
    ee = n(581883),
    et = n(875527),
    en = n(420439),
    er = n(626135),
    ei = n(12647),
    ea = n(70956),
    eo = n(358085),
    es = n(747268),
    el = n(960048),
    ec = n(998502),
    eu = n(13140),
    ed = n(314897),
    ef = n(967368),
    e_ = n(463395),
    ep = n(592125),
    eh = n(19780),
    em = n(704806),
    eg = n(594174),
    eE = n(631768),
    eb = n(981631),
    ey = n(70722),
    eO = n(761274),
    ev = n(526761),
    eI = n(345655),
    eT = n(65154),
    eS = n(388032);
function eA(e, t, n) {
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
function eC(e) {
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
                eA(e, t, n[t]);
            });
    }
    return e;
}
function eN(e, t) {
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
function eR(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eN(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eP = new N.Z("MediaEngineStore"),
    ew = "MediaEngineStore",
    eD = 4,
    eL = 1,
    ex = 1,
    eM = 1,
    ej = 1,
    ek = 0.5,
    eU = {
        left: 1,
        right: 1,
    },
    eG = 500,
    eB = 5 * ea.Z.Millis.SECOND,
    eZ = -60,
    eF = 100,
    eV = 2 * ea.Z.Millis.SECOND,
    eH = 0;
function eY() {
    return {
        mode: eb.pM4.VOICE_ACTIVITY,
        modeOptions: {
            threshold: eZ,
            autoThreshold: eo.isPlatformEmbedded || __OVERLAY__,
            vadUseKrisp: !0,
            vadKrispActivationThreshold: ek,
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
        inputVolume: eT.Qx,
        outputVolume: eT.Qx,
        inputDeviceId: eT.w5,
        outputDeviceId: eT.w5,
        videoDeviceId: eT.w5,
        qos: !1,
        qosMigrated: !1,
        videoHook: eK.supports(eT.AN.VIDEO_HOOK),
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
let eW = {
        [eI._.CUSTOM]: {},
        [eI._.VOICE_ISOLATION]: {
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
        [eI._.STUDIO]: {
            mode: eb.pM4.VOICE_ACTIVITY,
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
    eK = (0, b.Mt)((0, b.jj)());
eP.enableNativeLogger(!0);
let ez = {},
    eq = new Set([eT.Yn.DEFAULT]),
    eX = eK.supports(eT.AN.AUTO_ENABLE),
    eQ = !1,
    eJ = eT.Yn.STREAM,
    e$ = performance.now(),
    e0 = { [eT.w5]: t5("No Input Devices") },
    e1 = { [eT.w5]: t5("No Output Devices") },
    e2 = { [eT.w5]: t5("No Video Devices") },
    e3 = !1,
    e4 = !1,
    e8 = !1,
    e5 = !1,
    e6 = !1,
    e7 = eT.Av,
    e9 = eT.Av,
    te = !1,
    tt = !1,
    tn = !1,
    tr = new O.V7(),
    ti = !1,
    ta = !1,
    to = null,
    ts = !1,
    tl = !1,
    tc = !1,
    tu = !1,
    td = !1,
    tf = [],
    t_ = !1,
    tp = null,
    th = null,
    tm = null,
    tg = null,
    tE = null,
    tb = !1,
    ty = !1,
    tO = !1,
    tv = !1;
Q.Z.hasPermission(eO.Eu.AUDIO, { showAuthorizationError: !1 }),
    Q.Z.hasPermission(eO.Eu.CAMERA, { showAuthorizationError: !1 });
let tI = !1,
    tT = new Set(),
    tS = tI,
    tA = new Set(),
    tC = {},
    tN = null,
    tR = !0,
    tP = !1,
    tw = !1,
    tD = !1;
function tL() {
    var e, t;
    return null != (t = null == (e = eg.default.getCurrentUser()) ? void 0 : e.isStaff()) && t
        ? "always"
        : es.Z === g.R.CANARY
          ? "permittedDevicesOnly"
          : "never";
}
function tx() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT,
        t = ez[e];
    return null == t && ((t = eY()), (ez[e] = t)), t;
}
function tM() {
    var e, t, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT,
        i = tx(r),
        a = eW[null != (e = i.activeInputProfile) ? e : eI._.CUSTOM],
        o = eC({}, null != (t = i.modeOptions) ? t : {}, null != (n = a.modeOptions) ? n : {});
    return (
        null == o.vadDuringPreProcess && (o.vadDuringPreProcess = (0, K.C)({ location: "getSettings" }).enabled),
        eR(eC({}, i, a), { modeOptions: o })
    );
}
function tj(e) {
    var t, n;
    let r = tM(e.context);
    e.setInputMode(r.mode, {
        vadThreshold: r.modeOptions.threshold,
        vadAutoThreshold: r.modeOptions.autoThreshold,
        vadUseKrisp: r.modeOptions.vadUseKrisp && n7(),
        vadKrispActivationThreshold: null != (t = r.modeOptions.vadKrispActivationThreshold) ? t : 0.5,
        vadLeading: r.modeOptions.vadLeading,
        vadTrailing: r.modeOptions.vadTrailing,
        vadDuringPreProcess: null != (n = r.modeOptions.vadDuringPreProcess) && n,
        pttReleaseDelay: Math.round(r.modeOptions.delay),
    });
}
function tk(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.Qx;
    return p().clamp(e, 0, t);
}
function tU(e) {
    let t = tM(e.context),
        n = !eX || t.mute || t.deaf;
    e.context === eT.Yn.DEFAULT
        ? (n = n || e3 || e4 || e8 || !Q.Z.didHavePermission(eO.Eu.AUDIO))
        : e.context === eT.Yn.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eT.Yn.DEFAULT && S.Z.updateNativeMute();
}
function tG(e) {
    e !== eJ && (null != a && eK.setGoLiveSource(null, eJ), (eJ = e));
}
function tB() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e6,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        s = a;
    if (
        ((null == s ? void 0 : s.desktopSource) != null &&
            s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? void 0 : e.id) &&
            (null != s.desktopSource.soundshareId && (0, eo.isWindows)() && T.pn(s.desktopSource.soundshareId),
            eK.setGoLiveSource(null, eJ)),
        (null == s ? void 0 : s.cameraSource) != null &&
            (s.cameraSource.videoDeviceGuid !==
                (null == o || null == (t = o.cameraSource) ? void 0 : t.videoDeviceGuid) ||
                s.cameraSource.audioDeviceGuid !==
                    (null == o || null == (n = o.cameraSource) ? void 0 : n.audioDeviceGuid)) &&
            eK.setGoLiveSource(null, eJ),
        e6 || i)
    ) {
        let e = tM().videoDeviceId;
        e6 && e === eT.w5 && e9 === eT.w5 && e7 !== eT.Av ? (e = e7) : (e9 = e),
            (e7 = (e6 = i) ? t7(e2, e) : eT.Av),
            eK.setVideoInputDevice(e7);
    }
    if (((a = o), null != o)) {
        let e = {
            resolution: o.quality.resolution,
            frameRate: o.quality.frameRate,
        };
        if (null != o.desktopSource) {
            let t = tL(),
                n = tM().videoHook,
                i = tq(),
                a = i
                    ? tX() && q.G.getCurrentConfig({ location: "MediaEngineStore_updateVideo" }).enabled
                        ? ey.zj
                        : ey.ZM
                    : 0;
            eK.setGoLiveSource(
                {
                    desktopDescription: {
                        id: o.desktopSource.id,
                        soundshareId: o.desktopSource.soundshareId,
                        useVideoHook: n,
                        useGraphicsCapture: i,
                        useGraphicsCaptureApiLevel: a,
                        useLoopback: r.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: tQ(),
                        videoHookStaleFrameTimeoutMs: eG,
                        graphicsCaptureStaleFrameTimeoutMs: eB,
                        hdrCaptureMode: t,
                    },
                    quality: e,
                },
                eJ,
            );
        }
        null != o.cameraSource &&
            eK.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: o.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                eJ,
            );
    }
}
function tZ(e) {
    switch (e) {
        case eT.H3.CPU_OVERUSE:
            return P.Nk.NoiseCancellerCpuOveruse;
        case eT.H3.FAILED:
            return P.Nk.NoiseCancellerFailed;
        case eT.H3.VAD_CPU_OVERUSE:
            return P.Nk.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function tF(e) {
    let t = (0, M.U)({
        location: "getAutomaticGainControlConfig",
        disable: !e,
    }).noiseCancellationConfig;
    return eC({ enabled: e }, t);
}
function tV(e, t) {
    e.setAutomaticGainControl(tF(t));
}
async function tH(e, t) {
    if ((0, eo.isIOS)() || (0, eo.isMac)()) {
        let e = await eK.getSystemMicrophoneMode();
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
}
function tY(e) {
    let t = tM(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(e_.Z.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(e_.Z.hasNoiseSuppression(n) || t.noiseSuppression),
        tV(e, e_.Z.hasAutomaticGainControl(n) || t.automaticGainControl),
        tH(e, t.noiseCancellation),
        e.setVoiceFilterId(tp),
        (0, eo.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function tW() {
    var e;
    return !(0, H.f)("MediaEngine").enabled && (null == (e = tM().openH264) || e);
}
function tK() {
    var e;
    return !!(0, Y.m)("MediaEngineStore") || null == (e = tM().hardwareEncoding) || e;
}
function tz() {
    eK.on(b.aB.Connection, (e) => {
        tj(e), tU(e), tY(e);
        let t = tM();
        e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
            e.setQoS(t.qos),
            e.setExperimentalEncoders(t.experimentalEncoders),
            e.setHardwareH264(tK()),
            e.setSoftwareH264(tW());
        let n = eh.Z.getGuildId(),
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
        i && e.setExperimentFlag(eT.V8.MUTE_BEFORE_PROCESSING, !0),
            o && e.setExperimentFlag(eT.V8.PTT_BEFORE_PROCESSING, !0),
            s && e.setExperimentFlag(eT.V8.SKIP_ENCODE, !0);
        let l = !1,
            c = !0;
        if (
            (e.setExperimentFlag(eT.V8.RESET_DECODER_ON_ERRORS, !0),
            l && e.setExperimentFlag(eT.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0),
            c && e.setExperimentFlag(eT.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0),
            e.context === eT.Yn.STREAM)
        ) {
            let t = ne(e1);
            e.setSoundshareDiscardRearChannels(t);
            let { simulcastEnabled: n, lqStreamBitrate: r } = V.Z.getConfig();
            e.configureGoLiveSimulcast(n, r);
        }
        if (
            ((0, eo.isWindows)()
                ? (null == tN ? void 0 : tN.startsWith("NVIDIA")) || (null == tN ? void 0 : tN.startsWith("AMD"))
                    ? e.setExperimentFlag(eT.V8.SIGNAL_AV1, !0)
                    : e.setExperimentFlag(eT.V8.SIGNAL_AV1_DECODE, !0)
                : ((0, eo.isMac)() || (0, eo.isLinux)()) && e.setExperimentFlag(eT.V8.SIGNAL_AV1_DECODE, !0),
            (0, eo.isWindows)() && e.setExperimentFlag(eT.V8.SIGNAL_AV1_HARDWARE_DECODE, !0),
            (0, eo.isWeb)())
        ) {
            let { enabled: t } = (0, Z.A)("MediaEngineStore");
            e.setExperimentFlag(eT.V8.BROWSER_HEVC, t);
        }
        if ((eK.setHasFullbandPerformance((0, R.Z)()), e.setRemoteAudioHistory(1000), (0, C.Z)(r))) {
            let t = A.Z.getSettings();
            e.setExperimentFlag(eT.V8.STREAMER_CLIP, t.clipsEnabled);
            let { enableViewerClipping: n } = z.Z.getCurrentConfig(
                { location: "f627ab_15" },
                { autoTrackExposure: !1 },
            );
            e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eT.ux);
        }
        for (let n of ((t = tM(e.context)), e.setPostponeDecodeLevel(eF), Object.keys(t.localMutes)))
            n !== ed.default.getId() && e.setLocalMute(n, t.localMutes[n]);
        for (let n of Object.keys(t.localVolumes)) n !== ed.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
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
            e.context === eT.Yn.DEFAULT &&
                ((tt = !1),
                (tn = !1),
                e.on(b.Sh.SpeakingWhileMuted, () => {
                    (tt = !0),
                        (tn = !0),
                        r.emitChange(),
                        tr.stop(),
                        tr.start(eV, () => {
                            (tn = !1), r.emitChange();
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
                    er.default.track(
                        eb.rMx.VIDEOHOOK_INITIALIZED,
                        eC(
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
                eP.warn("noisecancellererror event: ".concat(e)),
                    (0, P.kr)({
                        type: P.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tZ(e),
                    }),
                    (tb = !0),
                    er.default.track(eb.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
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
                eP.warn("voiceactivitydetectorerror event: ".concat(e)),
                    (0, P.kr)({
                        type: P.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tZ(e),
                    }),
                    er.default.track(eb.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    v.Z.dispatch({
                        type: "AUDIO_SET_MODE",
                        context: eT.Yn.DEFAULT,
                        mode: eb.pM4.VOICE_ACTIVITY,
                        options: eR(eC({}, tM(eT.Yn.DEFAULT).modeOptions), { vadUseKrisp: !1 }),
                    }),
                    v.Z.dispatch({
                        type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
                        code: e,
                    });
            }),
            e.on(b.Sh.SdpError, (e, t, n, r) => {
                er.default.track(eb.rMx.SDP_ERROR, {
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
            e.setBitRate(ef.Z.bitrate),
            e.applyVideoQualityMode(eE.Z.mode);
    }),
        eK.on(b.aB.DeviceChange, (e, t, n) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_DEVICES",
                inputDevices: e,
                outputDevices: t,
                videoDevices: n,
            });
        }),
        eK.on(b.aB.VolumeChange, (e, t) => {
            v.Z.dispatch({
                type: "AUDIO_VOLUME_CHANGE",
                inputVolume: e,
                outputVolume: t,
            });
        }),
        eK.on(b.aB.DesktopSourceEnd, (e, t) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                settings: null,
                endReason: e,
                errorCode: t,
            });
        }),
        eK.on(b.aB.AudioPermission, (e) => {
            (tv = !0),
                v.Z.dispatch({
                    type: "MEDIA_ENGINE_PERMISSION",
                    kind: "audio",
                    granted: e,
                });
        }),
        eK.on(b.aB.VideoPermission, (e) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_PERMISSION",
                kind: "video",
                granted: e,
            });
        }),
        eK.on(b.aB.WatchdogTimeout, async () => {
            let e;
            try {
                await ei.Z.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
            } catch (t) {
                "number" == typeof t.status && (e = t.status);
            }
            eP.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)),
                er.default.track(eb.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        eK.on(b.aB.VideoInputInitialized, (e) => {
            er.default.track(eb.rMx.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired
                    ? null
                    : Math.round(e.timeToFirstFrame * ea.Z.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: eh.Z.getMediaSessionId(),
                rtc_connection_id: eh.Z.getRTCConnectionId(),
            });
        }),
        eK.on(b.aB.AudioInputInitialized, (e) => {
            er.default.track(eb.rMx.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * ea.Z.Millis.SECOND),
                rtc_connection_id: eh.Z.getRTCConnectionId(),
            });
        }),
        eK.on(b.aB.ClipsRecordingRestartNeeded, () => {
            v.Z.dispatch({ type: "CLIPS_RESTART" });
        }),
        eK.on(b.aB.ClipsInitFailure, (e, t) => {
            v.Z.wait(() => {
                v.Z.dispatch({
                    type: "CLIPS_INIT_FAILURE",
                    errMsg: e,
                    applicationName: t,
                });
            });
        }),
        eK.on(b.aB.ClipsRecordingEnded, (e, t) => {
            var n, r;
            (null == o || null == (n = o.desktopSource) ? void 0 : n.id) === e &&
                (null != t && (null == a || null == (r = a.desktopSource) ? void 0 : r.soundshareId) !== t && T.pn(t),
                (o = null));
        }),
        eK.on(b.aB.NativeScreenSharePickerUpdate, (e, t) => {
            v.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE",
                existing: e,
                content: t,
            });
        }),
        eK.on(b.aB.NativeScreenSharePickerCancel, (e) => {
            v.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL",
                existing: e,
            });
        }),
        eK.on(b.aB.NativeScreenSharePickerError, (e) => {
            v.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_ERROR",
                error: e,
            });
        }),
        eK.on(b.aB.AudioDeviceModuleError, (e, t, n) => {
            er.default.track(eb.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                audio_device_module: e,
                code: t,
                device_name: n,
            });
        }),
        eK.on(b.aB.VideoCodecError, (e) => {
            let t = "encode" === e.mode ? P.u.VIDEO_ENCODE_ERROR : P.u.VIDEO_DECODE_ERROR,
                n = {
                    videoCodec: e.codecStandard,
                    errorMessage: e.message,
                };
            (0, P.kr)(
                t === P.u.VIDEO_ENCODE_ERROR
                    ? eR(eC({ type: t }, n), { videoEncoder: e.implName })
                    : eR(eC({ type: t }, n), { videoDecoder: e.implName }),
            );
        }),
        eK.on(b.aB.ConnectionStats, (e) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_CONNECTION_STATS",
                connectionStats: e.map((e) => {
                    let { stats: t, connection: n } = e;
                    return {
                        stats: t,
                        mediaEngineConnectionId: n.mediaEngineConnectionId,
                        version: eH++,
                        context: n.context,
                    };
                }),
            });
        }),
        eK.on(b.aB.VoiceQueueMetrics, (e) => {
            let t = rx(e);
            null !== t && er.default.track(eb.rMx.VOICE_QUEUE_METRICS, t);
        }),
        eK.setOnVideoContainerResized((e, t, n) => {
            v.Z.wait(() =>
                v.Z.dispatch({
                    type: "VIDEO_SIZE_UPDATE",
                    streamId: e,
                    width: t,
                    height: n,
                }),
            );
        }),
        nB(),
        nF(),
        t0.reset(),
        (0, em.q)().then((e) => {
            null != e && (tN = e.gpu_brand);
        }),
        eK.on(b.aB.SystemMicrophoneModeChange, (e) => {
            eK.eachConnection(tY);
        });
}
function tq() {
    return (0, eo.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, ey.c5);
}
function tX() {
    return (0, eo.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, ey.sN);
}
function tQ() {
    return (
        (0, eo.isMac)() &&
        eK.supports(eT.AN.SCREEN_CAPTURE_KIT) &&
        m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, ey.C7)
    );
}
function tJ() {
    return (
        (0, eo.isWindows)() &&
        eK.supports(eT.AN.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        eK.supports(eT.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function t$() {
    return eK.supports(eT.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
let t0 = new (class {
    start() {
        this.started || ((this.started = !0), eK.on(b.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout &&
                (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            eK.removeListener(b.aB.Silence, this.handleSilence),
            v.Z.dispatch({
                type: "AUDIO_INPUT_DETECTED",
                inputDetected: null,
            }));
    }
    update() {
        let e = tM();
        !ts && eh.Z.getState() === eb.hes.RTC_CONNECTED && e.mode === eb.pM4.VOICE_ACTIVITY && e.silenceWarning
            ? this.start()
            : this.stop();
    }
    reset() {
        this.stop(), this.update();
    }
    constructor() {
        eA(this, "stateChangeTimeout", void 0),
            eA(this, "noVoiceTimeout", 5000),
            eA(this, "voiceTimeout", 1500),
            eA(this, "started", !1),
            eA(this, "handleSilence", (e) => {
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
                                    e && (tl = !0));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout,
                    ));
            });
    }
})();
function t1() {
    var e;
    let t = y.K.get("audio");
    null != t && (y.K.set(ew, { [eT.Yn.DEFAULT]: t }), y.K.remove("audio")),
        (ez = null != (e = y.K.get(ew)) ? e : {}),
        p().each(ez, (e) => {
            if (
                (p().defaultsDeep(e, eY()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, eu.Kd)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== eD &&
                    ((e.vadUseKrispSettingVersion = eD), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                !e.vadThrehsoldMigrated)
            ) {
                var t;
                (e.vadThrehsoldMigrated = !0),
                    (null == (t = e.modeOptions) ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = eZ);
            }
            eK.supports(eT.AN.SIDECHAIN_COMPRESSION) &&
                e.sidechainCompressionSettingVersion < ej &&
                ((e.sidechainCompressionSettingVersion = ej), (e.sidechainCompression = !0)),
                (0, eo.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== ex &&
                      ((e.ncUseKrispjsSettingVersion = ex), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== eL &&
                      ((e.ncUseKrispSettingVersion = eL), (e.noiseSuppression = !1), (e.noiseCancellation = !0)),
                e.hardwareEnabledVersion !== eM && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = eM)),
                null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
        }),
        t4();
}
function t2(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = tx(t);
    return Object.assign(r, e), !__OVERLAY__ && n && y.K.set(ew, ez), r;
}
function t3() {
    y.K.remove(ew), location.reload();
}
function t4() {
    let e = tM();
    eK.setAudioInputDevice(e.inputDeviceId),
        eK.setAudioOutputDevice(e.outputDeviceId),
        tB(),
        eK.setInputVolume(e.inputVolume),
        eK.setOutputVolume(e.outputVolume),
        eK.setH264Enabled(tK() || tW()),
        eK.setAv1Enabled(tK()),
        eK.setH265Enabled(tK()),
        eK.setAecDump(e.aecDumpEnabled),
        eK.setSidechainCompression(e.sidechainCompression),
        eK.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        eK.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing);
}
function t8() {
    eX ||
        eK.enable().then(() =>
            v.Z.dispatch({
                type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
                enabled: !0,
                unmute: !1,
            }),
        );
}
function t5(e) {
    return {
        id: eT.w5,
        index: 0,
        name: e,
        disabled: !0,
        hardwareId: void 0,
        containerId: void 0,
    };
}
function t6(e, t) {
    if (0 === e.length) {
        let e = t5(t);
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
function t7(e, t) {
    var n, r;
    let i = null != (r = null != (n = e[t]) ? n : e[eT.w5]) ? r : p()(e).values().first();
    return null != i ? i.id : t;
}
function t9(e) {
    let t = e0;
    if (((e0 = t6(e, eS.intl.string(eS.t["/QIjDA"]))), !p().isEqual(e0, t))) {
        let e = tM(),
            t = t7(e0, e.inputDeviceId);
        eK.setAudioInputDevice(t);
    }
}
function ne(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nt(e) {
    eK.eachConnection((t) => {
        t.context === eT.Yn.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function nn(e) {
    let t = e1;
    if (((e1 = t6(e, eS.intl.string(eS.t.xlUg0t))), !p().isEqual(e1, t))) {
        let e = tM(),
            n = t7(e1, e.outputDeviceId);
        eK.setAudioOutputDevice(n);
        let r = ne(t),
            i = ne(e1);
        r !== i && nt(i);
    }
}
function nr(e) {
    ta = e.length > 0;
    let t = e2;
    if (((e2 = t6(e, eS.intl.string(eS.t.WKWARU))), e6 && !p().isEqual(e2, t))) {
        var n;
        let e = void 0 !== e2[e7],
            r = e7 === eT.w5 && (null == (n = t[eT.w5]) ? void 0 : n.disabled);
        tB(e || r);
    }
}
function ni() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        r =
            null != (e = ee.Z.settings.audioContextSettings)
                ? e
                : {
                      user: {},
                      stream: {},
                  };
    for (let e of Object.keys(r)) {
        let i = e === ev.u0.USER ? eT.Yn.DEFAULT : eT.Yn.STREAM,
            a = i === eT.Yn.STREAM ? eT.Yh : eT.Qx,
            o = null != (t = r[e]) ? t : {},
            { localMutes: s, localVolumes: l } = tM(i);
        for (let [e, t] of Object.entries(o))
            null == (0, $.Ky)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== a ? (l[e] = t.volume) : delete l[e],
                eK.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (n)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == o[e] &&
                    (delete s[e],
                    delete l[e],
                    eK.eachConnection((t) => {
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
function na(e) {
    if (null == r)
        return (
            eP.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
            {
                soundshareId: null,
                soundshareSession: "",
            }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : ei.Z.getAudioPid(e),
            n = "";
        return (
            null != t && (n = ei.Z.generateSessionFromPid(t)),
            {
                soundshareId: t,
                soundshareSession: n,
            }
        );
    }
}
function no(e, t) {
    (0, eo.isWindows)() &&
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
function ns(e) {
    (i = e.sessionId), (e3 = !1), (e5 = !1);
    let t = tM();
    if (
        (tJ() && (t$() ? rl(eT.iA.AUTOMATIC) : t.automaticAudioSubsystem && rc()),
        eK.supports(eT.AN.OFFLOAD_ADM_CONTROLS))
    ) {
        let e = !1;
        (0, eo.isDesktop)()
            ? (e = (0, k.E)({ location: "handleConnectionOpen" }).enabled)
            : ((0, eo.isIOS)() || (0, eo.isAndroid)()) && (e = (0, U.W)({ location: "handleConnectionOpen" }).enabled),
            eK.setOffloadAdmControls(e);
    }
    (0, et.wt)({
        location: "MediaEngineStore",
        autoTrackExposure: !1,
    }) &&
        null !== t.mostRecentlyRequestedVoiceFilter &&
        (0, eo.isDesktop)() &&
        (en.Z.getLastInitAttemptMayHaveCrashed()
            ? (v.Z.dispatch({
                  type: "AUDIO_SET_SELF_MUTE",
                  mute: !0,
                  context: eT.Yn.DEFAULT,
                  playSoundEffect: !0,
              }),
              t2({ mostRecentlyRequestedVoiceFilter: null }))
            : n(358820).r5()),
        ni();
}
function nl(e) {
    let { mediaEngineState: t } = e;
    (ez = t.settingsByContext),
        (e0 = t.inputDevices),
        (e1 = t.outputDevices),
        (tC = t.appSupported),
        (td = t.krispModuleLoaded),
        (s = t.krispVersion),
        (eJ = t.goLiveContext);
}
function nc() {
    i = null;
}
function nu() {
    if ((0, eo.isWeb)()) {
        let e = W.N.getCurrentConfig({ location: "MediaEngineStore handlePostConnectionOpen" });
        e.loadWasmModule && e.preload && r.startDavePreload();
    }
    return !1;
}
function nd(e) {
    switch (e.state) {
        case eb.hes.CONNECTING:
            t8();
            break;
        case eb.hes.RTC_CONNECTING:
            (ts = !1), (tl = !1);
            break;
        case eb.hes.RTC_CONNECTED:
            tB();
            break;
        case eb.hes.DISCONNECTED:
            ny(), nO();
    }
    t0.update();
}
function nf(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (e3 = t.mute || t.suppress), (e5 = t.deaf), eK.eachConnection(tU);
            let e = null != t.guildId && null != t.channelId && null != tE && tE !== t.channelId,
                n = !tc && null == t.channelId;
            return tB(!e && !n && e6), (tE = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== ed.default.getId() || null != eh.Z.getChannelId() || tB(!1, null), e;
    }, !1);
}
function n_(e) {
    let { mute: t } = e;
    (e4 = t), eK.eachConnection(tU);
}
function np(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = tM(t);
    if (t === eT.Yn.DEFAULT && (Q.Z.requestPermission(eO.Eu.AUDIO), e8)) return !1;
    (r = !i && !r) || (i = !1),
        n || (te = !0),
        t2(
            {
                mute: r,
                deaf: i,
            },
            t,
        ),
        eK.eachConnection(tU);
}
function nh(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    t2({ mute: n }, t), r || (te = !0), eK.eachConnection(tU);
}
function nm(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== ev.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    ni(!0);
}
function ng(e) {
    let { context: t } = e;
    t2({ deaf: !tM(t).deaf }, t), eK.eachConnection(tU);
}
function nE(e) {
    let { context: t, userId: n } = e;
    if (n === ed.default.getId()) return;
    let { localMutes: r } = tM(t);
    r[n] ? delete r[n] : (r[n] = !0),
        t2({ localMutes: r }, t),
        eK.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nb(e) {
    var t, n, r, i, a, o, s;
    let { context: l, userId: c, videoToggleState: u, persist: d, isAutomatic: _ } = e;
    f()(!(d && _), "These are not allowed to both be true.");
    let p = u === eb.ZUi.DISABLED,
        { disabledLocalVideos: h } = tM(l),
        m = null != (t = h[c]) && t,
        g = tT.has(c),
        E = u === eb.ZUi.AUTO_ENABLED || u === eb.ZUi.MANUAL_ENABLED;
    eP.info(
        "disableVideo="
            .concat(p, " currentlyDisabled=")
            .concat(m, " currentlyAutoDisabled=")
            .concat(g, ", isVideoShown=")
            .concat(E),
    ),
        f()(!(g && !m), "If you are auto-disabled, then you are also disabled.");
    let b = p !== m,
        y = l === eT.Yn.DEFAULT,
        O = _ && b && y,
        v = d && b && y;
    eP.info(
        "changed="
            .concat(b, " isDefaultContext=")
            .concat(y, " isUpdateCausedByVideoHealthManager=")
            .concat(O, " isManualToggleByUser=")
            .concat(v),
    );
    let { videoToggleStateMap: I } = tM(l);
    if (
        (I[c] === eb.ZUi.AUTO_PROBING &&
            u === eb.ZUi.AUTO_ENABLED &&
            (0, X.Z)(c, p ? eT.fC.AUTO_DISABLE : eT.fC.AUTO_ENABLE, E),
        (I[c] = u),
        t2({ videoToggleStateMap: I }, l, d),
        u === eb.ZUi.AUTO_PROBING
            ? null == (n = eh.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, !0)
            : null == (r = eh.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, !1),
        tS ||
            (eP.info("isAutoDisableAllowed=".concat(tS, " - disabling VideoHealthManager")),
            null == (a = eh.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()),
        O)
    ) {
        if ((!p && !g) || (p && !tS)) return;
        (0, X.Z)(c, p ? eT.fC.AUTO_DISABLE : eT.fC.AUTO_ENABLE, E), p ? tT.add(c) : tT.delete(c);
    } else
        v &&
            (g && !p
                ? (eP.info("disallowing auto-disable for this session because of manual override by user"),
                  (tS = !1),
                  null == (s = eh.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(),
                  (0, X.Z)(c, eT.fC.MANUAL_REENABLE, E))
                : (0, X.Z)(c, p ? eT.fC.MANUAL_DISABLE : eT.fC.MANUAL_ENABLE, E));
    y && !p && tT.delete(c),
        p ? (h[c] = !0) : delete h[c],
        t2({ disabledLocalVideos: h }, l, d),
        eK.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(c, null != (t = h[c]) && t);
        }, l);
}
function ny() {
    if (0 === tT.size) return;
    let e = eT.Yn.DEFAULT,
        { disabledLocalVideos: t } = tM(e);
    tT.forEach((n) => {
        f()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            eK.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tT.clear(),
        t2({ disabledLocalVideos: t }, e, !1);
}
function nO() {
    let e = eT.Yn.DEFAULT,
        { videoToggleStateMap: t } = tM(e);
    for (let [e, n] of Object.entries(t)) n === eb.ZUi.AUTO_PROBING && delete t[e];
    t2({ videoToggleStateMap: t }, e, !1);
}
function nv(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === ed.default.getId()) return;
    let i = t === eT.Yn.STREAM ? eT.Yh : eT.Qx,
        { localVolumes: a } = tM(t);
    r === i ? delete a[n] : (a[n] = r), t2({ localVolumes: a }, t), eK.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function nI(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: a } = tM(t);
    (a[n] = {
        left: r,
        right: i,
    }),
        t2({ localPans: a }, t),
        eK.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function nT(e) {
    let { context: t, mode: n, options: r } = e;
    t2(
        {
            mode: n,
            modeOptions: r,
        },
        t,
    ),
        eK.eachConnection(tj),
        t0.update();
}
function nS(e) {
    let { volume: t } = e;
    t2({ inputVolume: tk(t) }), eK.setInputVolume(t);
}
function nA(e) {
    let { volume: t } = e;
    t2({ outputVolume: t }), eK.setOutputVolume(t);
}
function nC(e) {
    let { id: t } = e;
    (t = t7(e0, t)), (e$ = performance.now()), t2({ inputDeviceId: t }), eK.setAudioInputDevice(t);
}
function nN(e) {
    let { id: t } = e;
    t2({ outputDeviceId: (t = t7(e1, t)) }), eK.setAudioOutputDevice(t);
}
function nR(e) {
    let { id: t } = e;
    t2({ videoDeviceId: (t = t7(e2, t)) }), tB();
}
function nP(e) {
    let { inputProfile: t } = e;
    t2({ activeInputProfile: t });
    let n = tM();
    eK.eachConnection((e) => {
        tj(e),
            tV(e, n.automaticGainControl),
            e.setEchoCancellation(n.echoCancellation),
            e.setExperimentalEncoders(n.experimentalEncoders),
            tH(e, n.noiseCancellation),
            e.setNoiseSuppression(n.noiseSuppression);
    }),
        eK.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        t0.update(),
        nZ();
}
function nw(e) {
    return eQ !== e.required && ((eQ = e.required), e.required || eK.interact(), !0);
}
function nD(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    t9(t), nn(n), nr(r);
}
function nL(e) {
    let { inputVolume: t, outputVolume: n } = e;
    t2({
        inputVolume: tk(t),
        outputVolume: n,
    });
}
function nx(e) {
    var t;
    let n = tM(),
        r = eK.getAudioSubsystem(),
        i = eK.getAudioLayer(),
        a = t7(e0, n.inputDeviceId),
        o = null == (t = e0[a]) ? void 0 : t.name;
    er.default.track(eb.rMx.VOICE_PROCESSING, {
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
function nM(e) {
    let t = t2({ echoCancellation: e.enabled });
    eK.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nZ(), nx(e.location);
}
function nj(e) {
    nU(e.enabled);
}
function nk(e) {
    let t = t2({ sidechainCompressionStrength: e.strength });
    eK.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function nU(e) {
    let t = t2({ sidechainCompression: e });
    eK.setSidechainCompression(t.sidechainCompression);
}
function nG(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tA.add(n) : tA.delete(n), nB(), nZ();
}
function nB() {
    let e = !tA.has("voice_filter_preview") && !tA.has("mic_test");
    eK.setMaybePreprocessMute(e);
}
function nZ() {
    let e = tM(),
        t = tA.size > 0,
        n = e.inputDeviceId,
        r = e_.Z.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        a = e_.Z.hasNoiseSuppression(n) || e.noiseSuppression,
        o = tF(e_.Z.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation,
        l = null !== tp,
        c = tA.has("voice_filter") && 1 === tA.size;
    eK.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: a,
        automaticGainControlConfig: o,
        noiseCancellation: s,
        voiceFilters: l,
        loopbackUseAudioMode: c,
    });
}
async function nF() {
    var e, t, n, r;
    if (!eK.supports(eT.AN.VAAPI)) return;
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
    (tD = a), a && eK.supports(eT.AN.GAMESCOPE_CAPTURE) && (tw = !0);
}
function nV(e) {
    let t = t2({ noiseSuppression: e.enabled });
    eK.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nZ(), nx(e.location);
}
function nH(e) {
    let t = t2({ automaticGainControl: e.enabled });
    eK.eachConnection((e) => tV(e, t.automaticGainControl)), nZ(), nx(e.location);
}
function nY(e) {
    let t = t2({ noiseCancellation: e.enabled });
    eK.eachConnection((e) => tH(e, t.noiseCancellation)), nZ(), nx(e.location);
}
function nW(e) {
    J.Z.setKrispModelOverride(e.model), (c = e.model), nZ();
}
function nK(e) {
    var t;
    (0, eo.isWeb)() || ((t_ = e.enabled), null == (t = eK.setNoiseCancellationEnableStats) || t.call(eK, e.enabled));
}
function nz(e) {
    let t = t2({ experimentalEncoders: e.enabled });
    eK.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
}
function nq(e) {
    let { enabled: t } = e;
    t2({ hardwareEncoding: t });
    let n = tK();
    eK.eachConnection((e) => e.setHardwareH264(n)),
        eK.setH264Enabled(n || tW()),
        eK.setAv1Enabled(n),
        eK.setH265Enabled(n);
}
function nX(e) {
    t2({ silenceWarning: e.enabled }), t0.update();
}
function nQ(e) {
    eK.setDebugLogging(e.enabled);
}
function nJ(e) {
    let { level: t } = e;
    (l = t), J.Z.setKrispSuppressionLevel(t);
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
function n2(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = t2({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r,
        });
    eK.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function n3(e) {
    let { enabled: t } = e;
    t2({ qos: t }), eK.eachConnection((e) => e.setQoS(t));
}
function n4() {
    t3();
}
function n8(e) {
    let { inputDetected: t } = e;
    (to = t), !ts && to && ((ts = !0), t0.update());
}
function n5(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === e8) return !1;
    (e8 = n), eK.eachConnection(tU);
}
function n6(e) {
    let { state: t, permissionType: n } = e,
        r = t === eO.PQ.ACCEPTED;
    switch (n) {
        case eO.Eu.AUDIO:
            (tv = !0), eK.eachConnection(tU);
            break;
        case eO.Eu.CAMERA:
            !r && e6 && tB(!1);
            break;
        default:
            return !1;
    }
}
function n7() {
    return td || !1;
}
async function n9() {
    try {
        var e, t, n, i;
        await ec.ZP.ensureModule("discord_krisp");
        let a = ec.ZP.requireModule("discord_krisp");
        (td = !0),
            (s = null == (e = a.getSdkVersion) ? void 0 : e.call(a)),
            (l = null != (i = null == (t = a.getSuppressionLevel) ? void 0 : t.call(a)) ? i : 100),
            null == (n = a.getNcModels) ||
                n.call(a).then((e) => {
                    (tf = e), r.emitChange();
                }),
            r.emitChange();
    } catch (t) {
        eP.warn("Failed to load Krisp module: ".concat(t.message)), el.Z.captureException(t);
        let e = eT.H3.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eT.H3.INITIALIZED : n;
        }
        er.default.track(eb.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), t2({ noiseCancellation: !1 });
    } finally {
        tu = !1;
    }
}
function re() {
    return (0, eo.isWindows)() || (0, eo.isLinux)() || (0, eo.isMac)();
}
function rt() {
    !re() || __OVERLAY__ || tu || td
        ? (0, eo.isWeb)() && eK.supports(eT.AN.NOISE_CANCELLATION)
            ? ((td = !0), r.emitChange())
            : (0, eo.isWeb)() && t2({ noiseCancellation: !1 })
        : ((tu = !0), n9());
}
function rn(e) {
    let { enabled: t } = e;
    er.default.track(eb.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != tp ? tp : null,
        enabled: t,
    }),
        t2({ voiceFilterPlaybackEnabled: t });
}
function rr(e) {
    let { newVoiceFilterId: t } = e;
    t2({ mostRecentlyRequestedVoiceFilter: t }), eK.eachConnection((e) => e.setVoiceFilterId(t));
}
function ri() {
    t2({ mostRecentlyRequestedVoiceFilter: null });
}
function ra(e) {
    let { voiceFilterId: t } = e;
    (tm = tp), (tg = th), (tp = t), (th = null === t ? null : Date.now());
}
function ro(e) {
    let t = e.bypassEnabled;
    t2({ bypassSystemInputProcessing: t }), eK.setAudioInputBypassSystemProcessing(t), nx(e.location);
}
function rs(e) {
    rl(e.subsystem);
}
function rl(e) {
    e === eT.iA.AUTOMATIC
        ? (t2({ automaticAudioSubsystem: !0 }), rc())
        : (t2({ automaticAudioSubsystem: !1 }), eK.setAudioSubsystem(e));
}
function rc() {
    eK.queueAudioSubsystem(eT.iA.EXPERIMENTAL);
}
function ru(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && tB(i, null), null != t || null == n)) {
        tc = !1;
        return;
    }
    if (tc) return;
    tc = !0;
    let a = tM();
    (a.mute || a.deaf) &&
        (t2({
            deaf: !1,
            mute: !1,
        }),
        eK.eachConnection(tU));
}
function rd(e) {
    let { application: t } = e;
    eq.add(t.id);
}
function rf(e) {
    let { application: t } = e;
    eq.delete(t.id);
}
function r_(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (eX = !1), eK.eachConnection(tU);
                break;
            case "video":
                tB(!1);
        }
}
function rp(e) {
    (eX = e.enabled),
        e.unmute &&
            t2({
                mute: !1,
                deaf: !1,
            }),
        eK.eachConnection(tU);
}
function rh(e) {
    let { enabled: t } = e;
    Q.Z.requestPermission(eO.Eu.CAMERA), tB(t);
}
function rm(e) {
    let { sourceId: t, applicationName: n, quality: i } = e,
        a = A.Z.isDecoupledGameClippingEnabled(),
        s = A.Z.getSettings().decoupledClipsEnabled;
    if (!a || !s || null == I.Z) return;
    let l = null,
        c = null,
        u = ei.Z.getPidFromDesktopSource(t);
    ({ soundshareId: l, soundshareSession: c } = na(u));
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
        (eK.setClipsSource(null),
        (0, eo.isWindows)() && null != o.desktopSource.soundshareId && T.pn(o.desktopSource.soundshareId)),
        null != l && no(l, c),
        (o = d);
    let f = tL(),
        _ = tM().videoHook;
    eK.setClipsSource({
        desktopDescription: {
            id: o.desktopSource.id,
            soundshareId: o.desktopSource.soundshareId,
            useVideoHook: _,
            useGraphicsCapture: tq(),
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: tQ(),
            videoHookStaleFrameTimeoutMs: eG,
            graphicsCaptureStaleFrameTimeoutMs: eB,
            hdrCaptureMode: f,
        },
        quality: i,
        applicationName: n,
    });
}
function rg(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((o = null), eK.setClipsSource(null));
}
function rE(e) {
    var t, n, r, i;
    let { settings: a } = e;
    if ((null == a ? void 0 : a.desktopSettings) != null) {
        let e = null,
            r = null,
            { sourceId: i, sound: o } = a.desktopSettings,
            s = null != (t = a.context) ? t : eT.Yn.DEFAULT,
            l =
                null != (n = a.qualityOptions)
                    ? n
                    : {
                          resolution: 720,
                          frameRate: 30,
                      },
            c = !1 === o ? null : ei.Z.getPidFromDesktopSource(i);
        eo.isPlatformEmbedded &&
            !0 === o &&
            (({ soundshareId: e, soundshareSession: r } = na(c)), null != e && no(e, r)),
            tG(s),
            tB(s === eT.Yn.STREAM && e6, {
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
        let e = null != (r = a.context) ? r : eT.Yn.DEFAULT,
            { videoDeviceGuid: t, audioDeviceGuid: n } = a.cameraSettings,
            o = e === eT.Yn.STREAM && e6,
            s =
                null != (i = a.qualityOptions)
                    ? i
                    : {
                          resolution: 720,
                          frameRate: 30,
                      };
        tB(o, {
            cameraSource: {
                videoDeviceGuid: t,
                audioDeviceGuid: n,
            },
            quality: {
                resolution: s.resolution,
                frameRate: s.frameRate,
            },
        });
    } else tB(e6, null);
}
function rb(e) {
    let { section: t } = e;
    return t === eb.oAB.VOICE && t8(), !1;
}
function ry() {
    return eK.eachConnection(tY), !1;
}
function rO(e) {
    let { enabled: t } = e;
    t2({ openH264: t }), eK.setH264Enabled(tK() || tW()), eK.eachConnection((e) => e.setSoftwareH264(tW()));
}
function rv(e) {
    let { enabled: t } = e,
        n = t2({ aecDumpEnabled: t });
    eK.setAecDump(n.aecDumpEnabled);
}
function rI(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (ez = Object.values(eT.Yn).reduce((e, n) => {
        let r = n,
            i = eY();
        return (e[r] = p().merge(i, t[r])), e;
    }, {})),
        y.K.set(ew, ez),
        t4();
}
function rT(e) {
    let { state: t } = e,
        n = D.Z.isEnabled();
    if (t === eb.$7l.BACKGROUND && e6 && !n) (ti = !0), tB(!1);
    else {
        if (t !== eb.$7l.ACTIVE || !ti) return !1;
        (ti = !1), tB(!0);
    }
    return !0;
}
function rS(e) {
    eK.eachConnection((t) => t.setBitRate(e.bitrate));
}
function rA() {
    if ((!e6 && null == a) || null != eh.Z.getRTCConnectionId()) return !1;
    tB(!1, null);
}
function rC() {
    return !!tb && ((tb = !1), !0);
}
function rN(e) {
    eK.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function rR(e) {
    let { settings: t } = e;
    eK.applyMediaFilterSettings(t).finally(() => {
        (ty = !1), r.emitChange();
    });
}
function rP() {
    ty = !0;
}
function rw() {
    ty = !1;
}
function rD(e) {
    tR = e.enabled;
}
class rL extends (u = E.ZP.Store) {
    initialize() {
        tz(),
            t1(),
            rt(),
            nO(),
            (tC = {
                [eT.AN.VIDEO]: eK.supports(eT.AN.VIDEO),
                [eT.AN.DESKTOP_CAPTURE]: eK.supports(eT.AN.DESKTOP_CAPTURE),
                [eT.AN.HYBRID_VIDEO]: eK.supports(eT.AN.HYBRID_VIDEO),
            }),
            this.waitFor(ed.default, e_.Z, ep.Z, eh.Z, L.ZP, Q.Z.storage, ee.Z, w.Z, A.Z);
    }
    supports(e) {
        return eK.supports(e);
    }
    supportsInApp(e) {
        return tC[e] || eK.supports(e);
    }
    isSupported() {
        return eK.supported();
    }
    isExperimentalEncodersSupported() {
        return eK.supports(eT.AN.EXPERIMENTAL_ENCODERS);
    }
    isNoiseSuppressionSupported() {
        return eK.supports(eT.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return n7();
    }
    isNoiseCancellationError() {
        return tb;
    }
    isAutomaticGainControlSupported() {
        return eK.supports(eT.AN.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !t$() && (eK.supports(eT.AN.LEGACY_AUDIO_SUBSYSTEM) || eK.supports(eT.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return eK.supports(eT.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === eK.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return n7();
    }
    isAecDumpSupported() {
        return eK.supports(eT.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return eK.supports(eT.AN.VIDEO) && eK.supports(eT.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        let t = (null == (e = ep.Z.getChannel(tE)) ? void 0 : e.type) === eb.d4z.GUILD_STAGE_VOICE,
            n = tK();
        return !t && n && V.Z.simulcastEnabled();
    }
    getAecDump() {
        return tM().aecDumpEnabled;
    }
    getMediaEngine() {
        return eK;
    }
    getVideoComponent() {
        return eK.Video;
    }
    getCameraComponent() {
        return eK.Camera;
    }
    getKrispSuppressionLevel() {
        return null != l ? l : 100;
    }
    getKrispEnableStats() {
        return t_;
    }
    isEnabled() {
        return eX;
    }
    isMute() {
        return this.isSelfMute() || e3;
    }
    isDeaf() {
        return this.isSelfDeaf() || e5;
    }
    hasContext(e) {
        return null != ez[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT;
        return e === eT.Yn.DEFAULT && e4;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT;
        return (
            !this.isEnabled() ||
            tM(e).mute ||
            !Q.Z.didHavePermission(eO.Eu.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eT.Yn.DEFAULT && e8)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return te;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        te = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && e_.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return tR;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT;
        return !this.isSupported() || tM(e).deaf;
    }
    isVideoEnabled() {
        return e6 && ta;
    }
    isVideoAvailable() {
        return Object.values(e2).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.STREAM;
        return eJ === e && null != a;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.STREAM;
        return eJ === t && null != a && (null == (e = a.desktopSource) ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT;
        return e !== ed.default.getId() && (tM(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return eK.supports(eT.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT;
        return null != (t = tM(n).disabledLocalVideos[e]) && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT;
        return null != (t = tM(n).videoToggleStateMap[e]) ? t : eb.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT;
        return t === eT.Yn.DEFAULT && tT.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT;
        return e === eT.Yn.DEFAULT && tT.size > 0;
    }
    isMediaFilterSettingLoading() {
        return ty;
    }
    isNativeAudioPermissionReady() {
        return tv;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return eJ;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return e$;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT,
            n = tM(t).localPans[e];
        return null != n ? n : eU;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT,
            n = t === eT.Yn.STREAM ? eT.Yh : eT.Qx,
            r = tM(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return tM().inputVolume;
    }
    getOutputVolume() {
        return tM().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT;
        return tM(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT;
        return tM(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return tp;
    }
    getActiveVoiceFilterAppliedAt() {
        return th;
    }
    getPreviousVoiceFilter() {
        return tm;
    }
    getPreviousVoiceFilterAppliedAt() {
        return tg;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return tM().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return tM().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            p().each(ez, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === eb.pM4.PUSH_TO_TALK && eq.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return t7(e0, tM().inputDeviceId);
    }
    getOutputDeviceId() {
        return t7(e1, tM().outputDeviceId);
    }
    getVideoDeviceId() {
        return t7(e2, tM().videoDeviceId);
    }
    getInputDevices() {
        return e0;
    }
    getOutputDevices() {
        return e1;
    }
    getVideoDevices() {
        return e2;
    }
    getEchoCancellation() {
        let e = tM();
        return e_.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return eK.supports(eT.AN.SIDECHAIN_COMPRESSION) && tM().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return tM().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return tM().h265Enabled;
    }
    getLoopback() {
        return tA.size > 0;
    }
    getLoopbackReasons() {
        return tA;
    }
    getNoiseSuppression() {
        let e = tM();
        return e_.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tM();
        return e_.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return tM().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return tM().noiseCancellation;
    }
    getExperimentalEncoders() {
        return tM().experimentalEncoders;
    }
    getHardwareEncoding() {
        return tK();
    }
    getHardwareEncodingSetting() {
        var e;
        return null == (e = tM().hardwareEncoding) || e;
    }
    getEnableSilenceWarning() {
        return tM().silenceWarning;
    }
    getDebugLogging() {
        return eK.getDebugLogging();
    }
    getQoS() {
        return tM().qos;
    }
    getAttenuation() {
        return tM().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return tM().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return tM().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return tJ() && tM().automaticAudioSubsystem ? eT.iA.AUTOMATIC : eK.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return eK.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return tM().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eI._.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT;
        return tM(e);
    }
    getState() {
        return {
            settingsByContext: ez,
            inputDevices: e0,
            outputDevices: e1,
            appSupported: tC,
            krispModuleLoaded: td,
            krispVersion: s,
            krispSuppressionLevel: l,
            goLiveSource: a,
            goLiveContext: eJ,
        };
    }
    getInputDetected() {
        return to;
    }
    getNoInputDetectedNotice() {
        return tl;
    }
    getPacketDelay() {
        return eo.isPlatformEmbedded || this.getMode() !== eb.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        eK.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return eQ;
    }
    getVideoHook() {
        return tM().videoHook;
    }
    supportsVideoHook() {
        return eK.supports(eT.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tM().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return (
            eK.supports(eT.AN.EXPERIMENTAL_SOUNDSHARE) &&
            m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, ey.T6)
        );
    }
    supportsHookSoundshare() {
        return (
            (0, eo.isWindows)() &&
            eK.supports(eT.AN.SOUNDSHARE) &&
            m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, ey.sA)
        );
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = tM().useSystemScreensharePicker,
            n = (0, eo.isLinux)();
        return e && (null != t ? t : n);
    }
    supportsSystemScreensharePicker() {
        return eK.supports(eT.AN.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return tD;
    }
    getUseGamescopeCapture() {
        return tw;
    }
    getOpenH264() {
        return tM().openH264;
    }
    getEverSpeakingWhileMuted() {
        return tt;
    }
    getSpeakingWhileMuted() {
        return tn;
    }
    getKrispModelOverride() {
        return c;
    }
    getKrispModels() {
        return tf;
    }
    getKrispVadActivationThreshold() {
        var e;
        return null != (e = tM().modeOptions.vadKrispActivationThreshold) ? e : ek;
    }
    hasActiveCallKitCall() {
        return tP;
    }
    setHasActiveCallKitCall(e) {
        tP = e;
    }
    supportsScreenSoundshare() {
        return (0, eo.isMac)()
            ? eK.supports(eT.AN.SOUNDSHARE) &&
                  m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, ey.yG) &&
                  tQ()
            : (0, eo.isWindows)()
              ? eK.supports(eT.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, eo.isLinux)() && eK.supports(eT.AN.SCREEN_SOUNDSHARE);
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT,
            t = this.supports(eT.AN.VIDEO)
                ? [
                      {
                          rid: "100",
                          type: e === eT.Yn.DEFAULT ? eT.Tr.VIDEO : eT.Tr.SCREEN,
                          quality: eT.y7,
                      },
                  ]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === eT.Yn.DEFAULT || this.goLiveSimulcastEnabled()) &&
                t.push({
                    rid: "50",
                    type: e === eT.Yn.DEFAULT ? eT.Tr.VIDEO : eT.Tr.SCREEN,
                    quality: eT.LD,
                }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: !1 };
        return (
            (0, eo.isWeb)() &&
                (e.fetchDave = W.N.getCurrentConfig({
                    location: "MediaEngineStore fetchAsyncResources",
                }).loadWasmModule),
            eK.fetchAsyncResources(e)
        );
    }
    startDavePreload() {
        if (!tO && ((tO = !0), (0, eo.isWeb)())) {
            let e = { fetchDave: !0 };
            eK.fetchAsyncResources(e).catch((e) => {
                eP.warn("DAVE preload failed:", e), el.Z.captureException(e);
            });
        }
    }
    getSupportedSecureFramesProtocolVersion() {
        if ((0, eo.isWeb)()) {
            let { useWasmModule: e } = W.N.getCurrentConfig({
                location: "MediaEngineStore getSupportedSecureFramesProtocolVersion",
            });
            if (!e) return 0;
        }
        let e = eK.getSupportedSecureFramesProtocolVersion(),
            t = W.m.getCurrentConfig({ location: "MediaEngineStore" });
        return 114 === e && (e = 1), t.canSupportDaveProtocol && e >= t.protocolVersionFloor ? e : 0;
    }
    hasClipsSource() {
        return null != o;
    }
    getGpuBrand() {
        return tN;
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
eA(rL, "displayName", "MediaEngineStore");
let rM = (r = new rL(v.Z, {
    VOICE_CHANNEL_SELECT: ru,
    VOICE_STATE_UPDATES: nf,
    CONNECTION_OPEN: ns,
    CONNECTION_CLOSED: nc,
    POST_CONNECTION_OPEN: nu,
    RTC_CONNECTION_STATE: nd,
    AUDIO_SET_TEMPORARY_SELF_MUTE: n_,
    AUDIO_TOGGLE_SELF_MUTE: np,
    AUDIO_SET_SELF_MUTE: nh,
    AUDIO_TOGGLE_SELF_DEAF: ng,
    AUDIO_TOGGLE_LOCAL_MUTE: nE,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: nb,
    AUDIO_SET_LOCAL_VOLUME: nv,
    AUDIO_SET_LOCAL_PAN: nI,
    AUDIO_SET_MODE: nT,
    AUDIO_SET_INPUT_VOLUME: nS,
    AUDIO_SET_OUTPUT_VOLUME: nA,
    AUDIO_SET_INPUT_DEVICE: nC,
    AUDIO_SET_OUTPUT_DEVICE: nN,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: nP,
    AUDIO_SET_ECHO_CANCELLATION: nM,
    AUDIO_SET_SIDECHAIN_COMPRESSION: nj,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nk,
    AUDIO_SET_LOOPBACK: nG,
    AUDIO_SET_NOISE_SUPPRESSION: nV,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nH,
    AUDIO_SET_NOISE_CANCELLATION: nY,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: nW,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: nX,
    AUDIO_SET_DEBUG_LOGGING: nQ,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: nJ,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: nK,
    MEDIA_ENGINE_SET_VIDEO_HOOK: n$,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: n0,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: n1,
    AUDIO_SET_ATTENUATION: n2,
    AUDIO_SET_QOS: n3,
    MEDIA_ENGINE_DEVICES: nD,
    AUDIO_VOLUME_CHANGE: nL,
    AUDIO_RESET: n4,
    AUDIO_INPUT_DETECTED: n8,
    AUDIO_SET_SUBSYSTEM: rs,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: ro,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rp,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rh,
    MEDIA_ENGINE_PERMISSION: r_,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rE,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nR,
    MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nz,
    MEDIA_ENGINE_INTERACTION_REQUIRED: nw,
    USER_SETTINGS_MODAL_INIT: rb,
    USER_SETTINGS_MODAL_SET_SECTION: rb,
    CERTIFIED_DEVICES_SET: ry,
    RPC_APP_CONNECTED: rd,
    RPC_APP_DISCONNECTED: rf,
    OVERLAY_INITIALIZE: nl,
    MEDIA_ENGINE_SET_OPEN_H264: rO,
    MEDIA_ENGINE_SET_HARDWARE_ENCODING: nq,
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
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rw,
    USER_SETTINGS_PROTO_UPDATE: nm,
    CLIPS_INIT: rm,
    CLIPS_SETTINGS_UPDATE: rg,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rD,
    VOICE_FILTER_REQUEST_SWITCH: rr,
    VOICE_FILTER_LOOPBACK_TOGGLE: rn,
    VOICE_FILTER_APPLIED: ra,
    VOICE_FILTER_DOWNLOAD_FAILED: ri,
    VOICE_FILTER_APPLY_FAILED: ri,
}));
