let r, i, a, o, s, l, c;
n.d(t, { Z: () => rx }), n(388685), n(953529), n(457542), n(539854), n(642613), n(49124), n(337869);
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
    eD = "MediaEngineStore",
    ew = 4,
    eL = 1,
    ex = 1,
    eM = 1,
    ek = 1,
    ej = 0.5,
    eU = {
        left: 1,
        right: 1,
    },
    eG = 500,
    eB = 5 * ea.Z.Millis.SECOND,
    eZ = -60,
    eF = 100,
    eV = 2 * ea.Z.Millis.SECOND,
    eH = !0,
    eY = 0;
function eW() {
    return {
        mode: eb.pM4.VOICE_ACTIVITY,
        modeOptions: {
            threshold: eZ,
            autoThreshold: eo.isPlatformEmbedded || __OVERLAY__,
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
        inputVolume: eT.Qx,
        outputVolume: eT.Qx,
        inputDeviceId: eT.w5,
        outputDeviceId: eT.w5,
        videoDeviceId: eT.w5,
        qos: !1,
        qosMigrated: !1,
        videoHook: ez.supports(eT.AN.VIDEO_HOOK),
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
    ez = (0, b.Mt)((0, b.jj)());
eP.enableNativeLogger(!0);
let eq = {},
    eX = new Set([eT.Yn.DEFAULT]),
    eQ = ez.supports(eT.AN.AUTO_ENABLE),
    eJ = !1,
    e$ = eT.Yn.STREAM,
    e0 = performance.now(),
    e1 = { [eT.w5]: t5("No Input Devices") },
    e3 = { [eT.w5]: t5("No Output Devices") },
    e2 = { [eT.w5]: t5("No Video Devices") },
    e4 = !1,
    e8 = !1,
    e5 = !1,
    e6 = !1,
    e7 = !1,
    e9 = eT.Av,
    te = eT.Av,
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
Q.Z.hasPermission(eO.Eu.AUDIO, { showAuthorizationError: !1 }),
    Q.Z.hasPermission(eO.Eu.CAMERA, { showAuthorizationError: !1 });
let tT = !1,
    tS = new Set(),
    tA = tT,
    tC = new Set(),
    tN = {},
    tR = null,
    tP = !0,
    tD = !1,
    tw = !1,
    tL = !1;
function tx() {
    var e, t;
    return null != (t = null == (e = eg.default.getCurrentUser()) ? void 0 : e.isStaff()) && t
        ? "always"
        : es.Z === g.R.CANARY
          ? "permittedDevicesOnly"
          : "never";
}
function tM() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT,
        t = eq[e];
    return null == t && ((t = eW()), (eq[e] = t)), t;
}
function tk() {
    var e, t, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT,
        i = tM(r),
        a = eK[null != (e = i.activeInputProfile) ? e : eI._.CUSTOM],
        o = eC({}, null != (t = i.modeOptions) ? t : {}, null != (n = a.modeOptions) ? n : {});
    if (
        (null == o.vadDuringPreProcess && (o.vadDuringPreProcess = (0, z.C)({ location: "getSettings" }).enabled),
        (null == o.vadKrispActivationThreshold && !0 === a.automaticGainControl) || !0 === i.automaticGainControl)
    ) {
        let e = (0, M.U)({ location: "getSettings" });
        null != e.vadKrispActivationThreshold && (o.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return eR(eC({}, i, a), { modeOptions: o });
}
function tj(e) {
    var t, n;
    let r = tk(e.context);
    e.setInputMode(r.mode, {
        vadThreshold: r.modeOptions.threshold,
        vadAutoThreshold: r.modeOptions.autoThreshold,
        vadUseKrisp: r.modeOptions.vadUseKrisp && n6(),
        vadKrispActivationThreshold: null != (t = r.modeOptions.vadKrispActivationThreshold) ? t : ej,
        vadLeading: r.modeOptions.vadLeading,
        vadTrailing: r.modeOptions.vadTrailing,
        vadDuringPreProcess: null != (n = r.modeOptions.vadDuringPreProcess) && n,
        pttReleaseDelay: Math.round(r.modeOptions.delay),
    });
}
function tU(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.Qx;
    return p().clamp(e, 0, t);
}
function tG(e) {
    let t = tk(e.context),
        n = !eQ || t.mute || t.deaf;
    e.context === eT.Yn.DEFAULT
        ? (n = n || e4 || e8 || e5 || !Q.Z.didHavePermission(eO.Eu.AUDIO))
        : e.context === eT.Yn.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eT.Yn.DEFAULT && S.Z.updateNativeMute();
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
            (null != s.desktopSource.soundshareId && (0, eo.isWindows)() && T.pn(s.desktopSource.soundshareId),
            ez.setGoLiveSource(null, e$)),
        (null == s ? void 0 : s.cameraSource) != null &&
            (s.cameraSource.videoDeviceGuid !==
                (null == o || null == (t = o.cameraSource) ? void 0 : t.videoDeviceGuid) ||
                s.cameraSource.audioDeviceGuid !==
                    (null == o || null == (n = o.cameraSource) ? void 0 : n.audioDeviceGuid)) &&
            ez.setGoLiveSource(null, e$),
        e7 || i)
    ) {
        let e = tk().videoDeviceId;
        e7 && e === eT.w5 && te === eT.w5 && e9 !== eT.Av ? (e = e9) : (te = e),
            (e9 = (e7 = i) ? t7(e2, e) : eT.Av),
            ez.setVideoInputDevice(e9);
    }
    if (((a = o), null != o)) {
        let e = {
            resolution: o.quality.resolution,
            frameRate: o.quality.frameRate,
        };
        if (null != o.desktopSource) {
            let t = tx(),
                n = tk().videoHook,
                i = tq(),
                a = i ? (tX() ? ey.zj : ey.ZM) : 0;
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
                        allowScreenCaptureKit: tQ(),
                        videoHookStaleFrameTimeoutMs: eG,
                        graphicsCaptureStaleFrameTimeoutMs: eB,
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
function tV(e) {
    let t = (0, M.U)({
        location: "getAutomaticGainControlConfig",
        disable: !e,
    }).noiseCancellationConfig;
    return eC({ enabled: e }, t);
}
function tH(e, t) {
    e.setAutomaticGainControl(tV(t));
}
async function tY(e, t) {
    if ((0, eo.isIOS)() || (0, eo.isMac)()) {
        let e = await ez.getSystemMicrophoneMode();
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
function tW(e) {
    let t = tk(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(e_.Z.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(e_.Z.hasNoiseSuppression(n) || t.noiseSuppression),
        tH(e, e_.Z.hasAutomaticGainControl(n) || t.automaticGainControl),
        tY(e, t.noiseCancellation),
        e.setVoiceFilterId(th),
        (0, eo.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function tK() {
    var e;
    return !(0, W.f)("MediaEngine").enabled && (null == (e = tk().openH264) || e);
}
function tz() {
    ez.on(b.aB.Connection, (e) => {
        tj(e), tG(e), tW(e);
        let t = tk();
        e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
            e.setQoS(t.qos),
            e.setExperimentalEncoders(t.experimentalEncoders),
            e.setHardwareH264(eH),
            e.setSoftwareH264(tK());
        let n = eh.Z.getGuildId(),
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
            let t = ne(e3);
            e.setSoundshareDiscardRearChannels(t);
            let { simulcastEnabled: n, lqStreamBitrate: r } = H.Z.getConfig();
            e.configureGoLiveSimulcast(n, r);
        }
        if (
            ((0, eo.isWindows)()
                ? (null == tR ? void 0 : tR.startsWith("NVIDIA")) || (null == tR ? void 0 : tR.startsWith("AMD"))
                    ? e.setExperimentFlag(eT.V8.SIGNAL_AV1, !0)
                    : e.setExperimentFlag(eT.V8.SIGNAL_AV1_DECODE, !0)
                : ((0, eo.isMac)() || (0, eo.isLinux)()) && e.setExperimentFlag(eT.V8.SIGNAL_AV1_DECODE, !0),
            (0, eo.isWindows)() && e.setExperimentFlag(eT.V8.SIGNAL_AV1_HARDWARE_DECODE, !0),
            (0, eo.isWeb)())
        ) {
            let { enabled: t } = (0, F.A)("MediaEngineStore");
            e.setExperimentFlag(eT.V8.BROWSER_HEVC, t);
        }
        if ((ez.setHasFullbandPerformance((0, R.Z)()), e.setRemoteAudioHistory(1000), (0, C.Z)(r))) {
            let t = A.Z.getSettings();
            e.setExperimentFlag(eT.V8.STREAMER_CLIP, t.clipsEnabled);
            let { enableViewerClipping: n } = q.Z.getCurrentConfig(
                { location: "f627ab_15" },
                { autoTrackExposure: !1 },
            );
            e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eT.ux);
        }
        for (let n of ((t = tk(e.context)), e.setPostponeDecodeLevel(eF), Object.keys(t.localMutes)))
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
                ((tn = !1),
                (tr = !1),
                e.on(b.Sh.SpeakingWhileMuted, () => {
                    (tn = !0),
                        (tr = !0),
                        r.emitChange(),
                        ti.stop(),
                        ti.start(eV, () => {
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
                        underlyingError: tF(e),
                    }),
                    (ty = !0),
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
                        underlyingError: tF(e),
                    }),
                    er.default.track(eb.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    v.Z.dispatch({
                        type: "AUDIO_SET_MODE",
                        context: eT.Yn.DEFAULT,
                        mode: eb.pM4.VOICE_ACTIVITY,
                        options: eR(eC({}, tk(eT.Yn.DEFAULT).modeOptions), { vadUseKrisp: !1 }),
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
                await ei.Z.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
            } catch (t) {
                "number" == typeof t.status && (e = t.status);
            }
            eP.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)),
                er.default.track(eb.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        ez.on(b.aB.VideoInputInitialized, (e) => {
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
        ez.on(b.aB.AudioInputInitialized, (e) => {
            er.default.track(eb.rMx.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * ea.Z.Millis.SECOND),
                rtc_connection_id: eh.Z.getRTCConnectionId(),
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
            er.default.track(eb.rMx.AUDIO_DEVICE_MODULE_ERROR, {
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
                    ? eR(eC({ type: t }, n), { videoEncoder: e.implName })
                    : eR(eC({ type: t }, n), { videoDecoder: e.implName }),
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
            let t = rL(e);
            null !== t && er.default.track(eb.rMx.VOICE_QUEUE_METRICS, t);
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
        nB(),
        nF(),
        t0.reset(),
        (0, em.q)().then((e) => {
            null != e && (tR = e.gpu_brand);
        }),
        ez.on(b.aB.SystemMicrophoneModeChange, (e) => {
            ez.eachConnection(tW);
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
        ez.supports(eT.AN.SCREEN_CAPTURE_KIT) &&
        m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, ey.C7)
    );
}
function tJ() {
    return (
        (0, eo.isWindows)() &&
        ez.supports(eT.AN.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        ez.supports(eT.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function t$() {
    return ez.supports(eT.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
let t0 = new (class {
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
        let e = tk();
        !tl && eh.Z.getState() === eb.hes.RTC_CONNECTED && e.mode === eb.pM4.VOICE_ACTIVITY && e.silenceWarning
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
                                    e && (tc = !0));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout,
                    ));
            });
    }
})();
function t1() {
    var e;
    let t = y.K.get("audio");
    null != t && (y.K.set(eD, { [eT.Yn.DEFAULT]: t }), y.K.remove("audio")),
        (eq = null != (e = y.K.get(eD)) ? e : {}),
        p().each(eq, (e) => {
            if (
                (p().defaultsDeep(e, eW()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, eu.Kd)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== ew &&
                    ((e.vadUseKrispSettingVersion = ew), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                !e.vadThrehsoldMigrated)
            ) {
                var t;
                (e.vadThrehsoldMigrated = !0),
                    (null == (t = e.modeOptions) ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = eZ);
            }
            ez.supports(eT.AN.SIDECHAIN_COMPRESSION) &&
                e.sidechainCompressionSettingVersion < ek &&
                ((e.sidechainCompressionSettingVersion = ek), (e.sidechainCompression = !0)),
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
function t3(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = tM(t);
    return Object.assign(r, e), !__OVERLAY__ && n && y.K.set(eD, eq), r;
}
function t2() {
    y.K.remove(eD), location.reload();
}
function t4() {
    let e = tk();
    ez.setAudioInputDevice(e.inputDeviceId),
        ez.setAudioOutputDevice(e.outputDeviceId),
        tZ(),
        ez.setInputVolume(e.inputVolume),
        ez.setOutputVolume(e.outputVolume),
        ez.setH264Enabled(eH || tK()),
        ez.setAv1Enabled(eH),
        ez.setH265Enabled(eH),
        ez.setAecDump(e.aecDumpEnabled),
        ez.setSidechainCompression(e.sidechainCompression),
        ez.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        ez.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing);
}
function t8() {
    eQ ||
        ez.enable().then(() =>
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
    let t = e1;
    if (((e1 = t6(e, eS.intl.string(eS.t["/QIjDA"]))), !p().isEqual(e1, t))) {
        let e = tk(),
            t = t7(e1, e.inputDeviceId);
        ez.setAudioInputDevice(t);
    }
}
function ne(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nt(e) {
    ez.eachConnection((t) => {
        t.context === eT.Yn.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function nn(e) {
    let t = e3;
    if (((e3 = t6(e, eS.intl.string(eS.t.xlUg0v))), !p().isEqual(e3, t))) {
        let e = tk(),
            n = t7(e3, e.outputDeviceId);
        ez.setAudioOutputDevice(n);
        let r = ne(t),
            i = ne(e3);
        r !== i && nt(i);
    }
}
function nr(e) {
    to = e.length > 0;
    let t = e2;
    if (((e2 = t6(e, eS.intl.string(eS.t.WKWARY))), e7 && !p().isEqual(e2, t))) {
        var n;
        let e = void 0 !== e2[e9],
            r = e9 === eT.w5 && (null == (n = t[eT.w5]) ? void 0 : n.disabled);
        tZ(e || r);
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
            { localMutes: s, localVolumes: l } = tk(i);
        for (let [e, t] of Object.entries(o))
            null == (0, $.Ky)(i, e) &&
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
function ns(e) {
    (i = e.sessionId), (e4 = !1), (e6 = !1);
    let t = tk();
    if (
        (tJ() && (t$() ? rs(eT.iA.AUTOMATIC) : t.automaticAudioSubsystem && rl()),
        ez.supports(eT.AN.OFFLOAD_ADM_CONTROLS))
    ) {
        let e = !1;
        (0, eo.isDesktop)()
            ? (e = (0, j.E)({ location: "handleConnectionOpen" }).enabled)
            : ((0, eo.isIOS)() || (0, eo.isAndroid)()) && (e = (0, U.W)({ location: "handleConnectionOpen" }).enabled),
            ez.setOffloadAdmControls(e);
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
              t3({ mostRecentlyRequestedVoiceFilter: null }))
            : n(358820).r5()),
        ez.setAsyncVideoInputDeviceInit((0, G.p)("handleConnectionOpen").enabled),
        ni();
}
function nl(e) {
    let { mediaEngineState: t } = e;
    (eq = t.settingsByContext),
        (e1 = t.inputDevices),
        (e3 = t.outputDevices),
        (tN = t.appSupported),
        (tf = t.krispModuleLoaded),
        (s = t.krispVersion),
        (e$ = t.goLiveContext);
}
function nc() {
    i = null;
}
function nu() {
    if ((0, eo.isWeb)()) {
        let e = K.N.getCurrentConfig({ location: "MediaEngineStore handlePostConnectionOpen" });
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
            (tl = !1), (tc = !1);
            break;
        case eb.hes.RTC_CONNECTED:
            tZ();
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
            (e4 = t.mute || t.suppress), (e6 = t.deaf), ez.eachConnection(tG);
            let e = null != t.guildId && null != t.channelId && null != tb && tb !== t.channelId,
                n = !tu && null == t.channelId;
            return tZ(!e && !n && e7), (tb = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== ed.default.getId() || null != eh.Z.getChannelId() || tZ(!1, null), e;
    }, !1);
}
function n_(e) {
    let { mute: t } = e;
    (e8 = t), ez.eachConnection(tG);
}
function np(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = tk(t);
    if (t === eT.Yn.DEFAULT && (Q.Z.requestPermission(eO.Eu.AUDIO), e5)) return !1;
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
function nh(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    t3({ mute: n }, t), r || (tt = !0), ez.eachConnection(tG);
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
    t3({ deaf: !tk(t).deaf }, t), ez.eachConnection(tG);
}
function nE(e) {
    let { context: t, userId: n } = e;
    if (n === ed.default.getId()) return;
    let { localMutes: r } = tk(t);
    r[n] ? delete r[n] : (r[n] = !0),
        t3({ localMutes: r }, t),
        ez.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nb(e) {
    var t, n, r, i, a, o, s;
    let { context: l, userId: c, videoToggleState: u, persist: d, isAutomatic: _ } = e;
    f()(!(d && _), "These are not allowed to both be true.");
    let p = u === eb.ZUi.DISABLED,
        { disabledLocalVideos: h } = tk(l),
        m = null != (t = h[c]) && t,
        g = tS.has(c),
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
    let { videoToggleStateMap: I } = tk(l);
    if (
        (I[c] === eb.ZUi.AUTO_PROBING &&
            u === eb.ZUi.AUTO_ENABLED &&
            (0, X.Z)(c, p ? eT.fC.AUTO_DISABLE : eT.fC.AUTO_ENABLE, E),
        (I[c] = u),
        t3({ videoToggleStateMap: I }, l, d),
        u === eb.ZUi.AUTO_PROBING
            ? null == (n = eh.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, !0)
            : null == (r = eh.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, !1),
        tA ||
            (eP.info("isAutoDisableAllowed=".concat(tA, " - disabling VideoHealthManager")),
            null == (a = eh.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()),
        O)
    ) {
        if ((!p && !g) || (p && !tA)) return;
        (0, X.Z)(c, p ? eT.fC.AUTO_DISABLE : eT.fC.AUTO_ENABLE, E), p ? tS.add(c) : tS.delete(c);
    } else
        v &&
            (g && !p
                ? (eP.info("disallowing auto-disable for this session because of manual override by user"),
                  (tA = !1),
                  null == (s = eh.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(),
                  (0, X.Z)(c, eT.fC.MANUAL_REENABLE, E))
                : (0, X.Z)(c, p ? eT.fC.MANUAL_DISABLE : eT.fC.MANUAL_ENABLE, E));
    y && !p && tS.delete(c),
        p ? (h[c] = !0) : delete h[c],
        t3({ disabledLocalVideos: h }, l, d),
        ez.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(c, null != (t = h[c]) && t);
        }, l);
}
function ny() {
    if (0 === tS.size) return;
    let e = eT.Yn.DEFAULT,
        { disabledLocalVideos: t } = tk(e);
    tS.forEach((n) => {
        f()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            ez.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tS.clear(),
        t3({ disabledLocalVideos: t }, e, !1);
}
function nO() {
    let e = eT.Yn.DEFAULT,
        { videoToggleStateMap: t } = tk(e);
    for (let [e, n] of Object.entries(t)) n === eb.ZUi.AUTO_PROBING && delete t[e];
    t3({ videoToggleStateMap: t }, e, !1);
}
function nv(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === ed.default.getId()) return;
    let i = t === eT.Yn.STREAM ? eT.Yh : eT.Qx,
        { localVolumes: a } = tk(t);
    r === i ? delete a[n] : (a[n] = r), t3({ localVolumes: a }, t), ez.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function nI(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: a } = tk(t);
    (a[n] = {
        left: r,
        right: i,
    }),
        t3({ localPans: a }, t),
        ez.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function nT(e) {
    let { context: t, mode: n, options: r } = e;
    t3(
        {
            mode: n,
            modeOptions: r,
        },
        t,
    ),
        ez.eachConnection(tj),
        t0.update();
}
function nS(e) {
    let { volume: t } = e;
    t3({ inputVolume: tU(t) }), ez.setInputVolume(t);
}
function nA(e) {
    let { volume: t } = e;
    t3({ outputVolume: t }), ez.setOutputVolume(t);
}
function nC(e) {
    let { id: t } = e;
    (t = t7(e1, t)), (e0 = performance.now()), t3({ inputDeviceId: t }), ez.setAudioInputDevice(t);
}
function nN(e) {
    let { id: t } = e;
    t3({ outputDeviceId: (t = t7(e3, t)) }), ez.setAudioOutputDevice(t);
}
function nR(e) {
    let { id: t } = e;
    t3({ videoDeviceId: (t = t7(e2, t)) }), tZ();
}
function nP(e) {
    let { inputProfile: t } = e;
    t3({ activeInputProfile: t });
    let n = tk();
    ez.eachConnection((e) => {
        tj(e),
            tH(e, n.automaticGainControl),
            e.setEchoCancellation(n.echoCancellation),
            e.setExperimentalEncoders(n.experimentalEncoders),
            tY(e, n.noiseCancellation),
            e.setNoiseSuppression(n.noiseSuppression);
    }),
        ez.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        t0.update(),
        nZ();
}
function nD(e) {
    return eJ !== e.required && ((eJ = e.required), e.required || ez.interact(), !0);
}
function nw(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    t9(t), nn(n), nr(r);
}
function nL(e) {
    let { inputVolume: t, outputVolume: n } = e;
    t3({
        inputVolume: tU(t),
        outputVolume: n,
    });
}
function nx(e) {
    var t;
    let n = tk(),
        r = ez.getAudioSubsystem(),
        i = ez.getAudioLayer(),
        a = t7(e1, n.inputDeviceId),
        o = null == (t = e1[a]) ? void 0 : t.name;
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
    let t = t3({ echoCancellation: e.enabled });
    ez.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nZ(), nx(e.location);
}
function nk(e) {
    nU(e.enabled);
}
function nj(e) {
    let t = t3({ sidechainCompressionStrength: e.strength });
    ez.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function nU(e) {
    let t = t3({ sidechainCompression: e });
    ez.setSidechainCompression(t.sidechainCompression);
}
function nG(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tC.add(n) : tC.delete(n), nB(), nZ();
}
function nB() {
    let e = !tC.has("voice_filter_preview") && !tC.has("mic_test");
    ez.setMaybePreprocessMute(e);
}
function nZ() {
    let e = tk(),
        t = tC.size > 0,
        n = e.inputDeviceId,
        r = e_.Z.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        a = e_.Z.hasNoiseSuppression(n) || e.noiseSuppression,
        o = tV(e_.Z.hasAutomaticGainControl(n) || e.automaticGainControl),
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
async function nF() {
    var e, t, n, r;
    if (!ez.supports(eT.AN.VAAPI)) return;
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
    (tL = a), a && ez.supports(eT.AN.GAMESCOPE_CAPTURE) && (tw = !0);
}
function nV(e) {
    let t = t3({ noiseSuppression: e.enabled });
    ez.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nZ(), nx(e.location);
}
function nH(e) {
    let t = t3({ automaticGainControl: e.enabled });
    ez.eachConnection((e) => tH(e, t.automaticGainControl)), nZ(), nx(e.location);
}
function nY(e) {
    let t = t3({ noiseCancellation: e.enabled });
    ez.eachConnection((e) => tY(e, t.noiseCancellation)), nZ(), nx(e.location);
}
function nW(e) {
    J.Z.setKrispModelOverride(e.model), (c = e.model), nZ();
}
function nK(e) {
    var t;
    (0, eo.isWeb)() || ((tp = e.enabled), null == (t = ez.setNoiseCancellationEnableStats) || t.call(ez, e.enabled));
}
function nz(e) {
    let t = t3({ experimentalEncoders: e.enabled });
    ez.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
}
function nq(e) {
    t3({ silenceWarning: e.enabled }), t0.update();
}
function nX(e) {
    ez.setDebugLogging(e.enabled);
}
function nQ(e) {
    let { level: t } = e;
    (l = t), J.Z.setKrispSuppressionLevel(t);
}
function nJ(e) {
    t3({ videoHook: e.enabled });
}
function n$(e) {
    t3({ experimentalSoundshare2: e.enabled });
}
function n0(e) {
    let { enabled: t } = e;
    t3({ useSystemScreensharePicker: t });
}
function n1(e) {
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
function n3(e) {
    let { enabled: t } = e;
    t3({ qos: t }), ez.eachConnection((e) => e.setQoS(t));
}
function n2() {
    t2();
}
function n4(e) {
    let { inputDetected: t } = e;
    (ts = t), !tl && ts && ((tl = !0), t0.update());
}
function n8(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === e5) return !1;
    (e5 = n), ez.eachConnection(tG);
}
function n5(e) {
    let { state: t, permissionType: n } = e,
        r = t === eO.PQ.ACCEPTED;
    switch (n) {
        case eO.Eu.AUDIO:
            (tI = !0), ez.eachConnection(tG);
            break;
        case eO.Eu.CAMERA:
            !r && e7 && tZ(!1);
            break;
        default:
            return !1;
    }
}
function n6() {
    return tf || !1;
}
async function n7() {
    try {
        var e, t, n, i;
        await ec.ZP.ensureModule("discord_krisp");
        let a = ec.ZP.requireModule("discord_krisp");
        (tf = !0),
            (s = null == (e = a.getSdkVersion) ? void 0 : e.call(a)),
            (l = null != (i = null == (t = a.getSuppressionLevel) ? void 0 : t.call(a)) ? i : 100),
            null == (n = a.getNcModels) ||
                n.call(a).then((e) => {
                    (t_ = e), r.emitChange();
                }),
            r.emitChange();
    } catch (t) {
        eP.warn("Failed to load Krisp module: ".concat(t.message)), el.Z.captureException(t);
        let e = eT.H3.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eT.H3.INITIALIZED : n;
        }
        er.default.track(eb.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), t3({ noiseCancellation: !1 });
    } finally {
        td = !1;
    }
}
function n9() {
    return (0, eo.isWindows)() || (0, eo.isLinux)() || (0, eo.isMac)();
}
function re() {
    !n9() || __OVERLAY__ || td || tf
        ? (0, eo.isWeb)() && ez.supports(eT.AN.NOISE_CANCELLATION)
            ? ((tf = !0), r.emitChange())
            : (0, eo.isWeb)() && t3({ noiseCancellation: !1 })
        : ((td = !0), n7());
}
function rt(e) {
    let { enabled: t } = e;
    er.default.track(eb.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != th ? th : null,
        enabled: t,
    }),
        t3({ voiceFilterPlaybackEnabled: t });
}
function rn(e) {
    let { newVoiceFilterId: t } = e;
    t3({ mostRecentlyRequestedVoiceFilter: t }), ez.eachConnection((e) => e.setVoiceFilterId(t));
}
function rr() {
    t3({ mostRecentlyRequestedVoiceFilter: null });
}
function ri(e) {
    let { voiceFilterId: t } = e;
    (tg = th), (tE = tm), (th = t), (tm = null === t ? null : Date.now());
}
function ra(e) {
    let t = e.bypassEnabled;
    t3({ bypassSystemInputProcessing: t }), ez.setAudioInputBypassSystemProcessing(t), nx(e.location);
}
function ro(e) {
    rs(e.subsystem);
}
function rs(e) {
    e === eT.iA.AUTOMATIC
        ? (t3({ automaticAudioSubsystem: !0 }), rl())
        : (t3({ automaticAudioSubsystem: !1 }), ez.setAudioSubsystem(e));
}
function rl() {
    ez.queueAudioSubsystem(eT.iA.EXPERIMENTAL);
}
function rc(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && tZ(i, null), null != t || null == n)) {
        tu = !1;
        return;
    }
    if (tu) return;
    tu = !0;
    let a = tk();
    (a.mute || a.deaf) &&
        (t3({
            deaf: !1,
            mute: !1,
        }),
        ez.eachConnection(tG));
}
function ru(e) {
    let { application: t } = e;
    eX.add(t.id);
}
function rd(e) {
    let { application: t } = e;
    eX.delete(t.id);
}
function rf(e) {
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
function r_(e) {
    (eQ = e.enabled),
        e.unmute &&
            t3({
                mute: !1,
                deaf: !1,
            }),
        ez.eachConnection(tG);
}
function rp(e) {
    let { enabled: t } = e;
    Q.Z.requestPermission(eO.Eu.CAMERA), tZ(t);
}
function rh(e) {
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
        (ez.setClipsSource(null),
        (0, eo.isWindows)() && null != o.desktopSource.soundshareId && T.pn(o.desktopSource.soundshareId)),
        null != l && no(l, c),
        (o = d);
    let f = tx(),
        _ = tk().videoHook;
    ez.setClipsSource({
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
function rm(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((o = null), ez.setClipsSource(null));
}
function rg(e) {
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
            tB(s),
            tZ(s === eT.Yn.STREAM && e7, {
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
            o = e === eT.Yn.STREAM && e7,
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
function rE(e) {
    let { section: t } = e;
    return t === eb.oAB.VOICE && t8(), !1;
}
function rb() {
    return ez.eachConnection(tW), !1;
}
function ry(e) {
    let { enabled: t } = e;
    t3({ openH264: t }), ez.setH264Enabled(eH || tK()), ez.eachConnection((e) => e.setSoftwareH264(tK()));
}
function rO(e) {
    let { enabled: t } = e,
        n = t3({ aecDumpEnabled: t });
    ez.setAecDump(n.aecDumpEnabled);
}
function rv(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (eq = Object.values(eT.Yn).reduce((e, n) => {
        let r = n,
            i = eW();
        return (e[r] = p().merge(i, t[r])), e;
    }, {})),
        y.K.set(eD, eq),
        t4();
}
function rI(e) {
    let { state: t } = e,
        n = w.Z.isEnabled();
    if (t === eb.$7l.BACKGROUND && e7 && !n) (ta = !0), tZ(!1);
    else {
        if (t !== eb.$7l.ACTIVE || !ta) return !1;
        (ta = !1), tZ(!0);
    }
    return !0;
}
function rT(e) {
    ez.eachConnection((t) => t.setBitRate(e.bitrate));
}
function rS() {
    if ((!e7 && null == a) || null != eh.Z.getRTCConnectionId()) return !1;
    tZ(!1, null);
}
function rA() {
    return !!ty && ((ty = !1), !0);
}
function rC(e) {
    ez.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function rN(e) {
    let { settings: t } = e;
    ez.applyMediaFilterSettings(t).finally(() => {
        (tO = !1), r.emitChange();
    });
}
function rR() {
    tO = !0;
}
function rP() {
    tO = !1;
}
function rD(e) {
    tP = e.enabled;
}
class rw extends (u = E.ZP.Store) {
    initialize() {
        tz(),
            t1(),
            re(),
            nO(),
            (tN = {
                [eT.AN.VIDEO]: ez.supports(eT.AN.VIDEO),
                [eT.AN.DESKTOP_CAPTURE]: ez.supports(eT.AN.DESKTOP_CAPTURE),
                [eT.AN.HYBRID_VIDEO]: ez.supports(eT.AN.HYBRID_VIDEO),
            }),
            this.waitFor(ed.default, ef.Z, e_.Z, ep.Z, A.Z, D.Z, eh.Z, L.ZP, ee.Z, eg.default, eE.Z, en.Z);
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
        return ez.supports(eT.AN.EXPERIMENTAL_ENCODERS);
    }
    isNoiseSuppressionSupported() {
        return ez.supports(eT.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return n6();
    }
    isNoiseCancellationError() {
        return ty;
    }
    isAutomaticGainControlSupported() {
        return ez.supports(eT.AN.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !t$() && (ez.supports(eT.AN.LEGACY_AUDIO_SUBSYSTEM) || ez.supports(eT.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return ez.supports(eT.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === ez.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return n6();
    }
    isAecDumpSupported() {
        return ez.supports(eT.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return ez.supports(eT.AN.VIDEO) && ez.supports(eT.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        return (
            (null == (e = ep.Z.getChannel(tb)) ? void 0 : e.type) !== eb.d4z.GUILD_STAGE_VOICE &&
            eH &&
            H.Z.simulcastEnabled()
        );
    }
    getAecDump() {
        return tk().aecDumpEnabled;
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
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT;
        return e === eT.Yn.DEFAULT && e8;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT;
        return (
            !this.isEnabled() ||
            tk(e).mute ||
            !Q.Z.didHavePermission(eO.Eu.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eT.Yn.DEFAULT && e5)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tt;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tt = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && e_.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return tP;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT;
        return !this.isSupported() || tk(e).deaf;
    }
    isVideoEnabled() {
        return e7 && to;
    }
    isVideoAvailable() {
        return Object.values(e2).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.STREAM;
        return e$ === e && null != a;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.STREAM;
        return e$ === t && null != a && (null == (e = a.desktopSource) ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT;
        return e !== ed.default.getId() && (tk(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return ez.supports(eT.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT;
        return null != (t = tk(n).disabledLocalVideos[e]) && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT;
        return null != (t = tk(n).videoToggleStateMap[e]) ? t : eb.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT;
        return t === eT.Yn.DEFAULT && tS.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT;
        return e === eT.Yn.DEFAULT && tS.size > 0;
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
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT,
            n = tk(t).localPans[e];
        return null != n ? n : eU;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT,
            n = t === eT.Yn.STREAM ? eT.Yh : eT.Qx,
            r = tk(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return tk().inputVolume;
    }
    getOutputVolume() {
        return tk().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT;
        return tk(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT;
        return tk(e).modeOptions;
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
        return tk().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return tk().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            p().each(eq, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === eb.pM4.PUSH_TO_TALK && eX.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return t7(e1, tk().inputDeviceId);
    }
    getOutputDeviceId() {
        return t7(e3, tk().outputDeviceId);
    }
    getVideoDeviceId() {
        return t7(e2, tk().videoDeviceId);
    }
    getInputDevices() {
        return e1;
    }
    getOutputDevices() {
        return e3;
    }
    getVideoDevices() {
        return e2;
    }
    getEchoCancellation() {
        let e = tk();
        return e_.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return ez.supports(eT.AN.SIDECHAIN_COMPRESSION) && tk().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return tk().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return tk().h265Enabled;
    }
    getLoopback() {
        return tC.size > 0;
    }
    getLoopbackReasons() {
        return tC;
    }
    getNoiseSuppression() {
        let e = tk();
        return e_.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tk();
        return e_.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return tk().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return tk().noiseCancellation;
    }
    getExperimentalEncoders() {
        return tk().experimentalEncoders;
    }
    getHardwareEncoding() {
        return eH;
    }
    getEnableSilenceWarning() {
        return tk().silenceWarning;
    }
    getDebugLogging() {
        return ez.getDebugLogging();
    }
    getQoS() {
        return tk().qos;
    }
    getAttenuation() {
        return tk().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return tk().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return tk().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return tJ() && tk().automaticAudioSubsystem ? eT.iA.AUTOMATIC : ez.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return ez.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return tk().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eI._.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT;
        return tk(e);
    }
    getState() {
        return {
            settingsByContext: eq,
            inputDevices: e1,
            outputDevices: e3,
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
        return eo.isPlatformEmbedded || this.getMode() !== eb.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        ez.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return eJ;
    }
    getVideoHook() {
        return tk().videoHook;
    }
    supportsVideoHook() {
        return ez.supports(eT.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tk().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return (
            ez.supports(eT.AN.EXPERIMENTAL_SOUNDSHARE) &&
            m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, ey.T6)
        );
    }
    supportsHookSoundshare() {
        return (
            (0, eo.isWindows)() &&
            ez.supports(eT.AN.SOUNDSHARE) &&
            m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, ey.sA)
        );
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = tk().useSystemScreensharePicker,
            n = (0, eo.isLinux)();
        return e && (null != t ? t : n);
    }
    supportsSystemScreensharePicker() {
        return ez.supports(eT.AN.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return tL;
    }
    getUseGamescopeCapture() {
        return tw;
    }
    getOpenH264() {
        return tk().openH264;
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
        return null != (e = tk().modeOptions.vadKrispActivationThreshold) ? e : ej;
    }
    hasActiveCallKitCall() {
        return tD;
    }
    setHasActiveCallKitCall(e) {
        tD = e;
    }
    supportsScreenSoundshare() {
        return (0, eo.isMac)()
            ? ez.supports(eT.AN.SOUNDSHARE) &&
                  m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, ey.yG) &&
                  tQ()
            : (0, eo.isWindows)()
              ? ez.supports(eT.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, eo.isLinux)() && ez.supports(eT.AN.SCREEN_SOUNDSHARE);
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
                (e.fetchDave = K.N.getCurrentConfig({
                    location: "MediaEngineStore fetchAsyncResources",
                }).loadWasmModule),
            ez.fetchAsyncResources(e)
        );
    }
    startDavePreload() {
        if (!tv && ((tv = !0), (0, eo.isWeb)())) {
            let e = { fetchDave: !0 };
            ez.fetchAsyncResources(e).catch((e) => {
                eP.warn("DAVE preload failed:", e), el.Z.captureException(e);
            });
        }
    }
    getSupportedSecureFramesProtocolVersion() {
        if ((0, eo.isWeb)()) {
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
eA(rw, "displayName", "MediaEngineStore");
let rx = (r = new rw(v.Z, {
    VOICE_CHANNEL_SELECT: rc,
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
    AUDIO_SET_SIDECHAIN_COMPRESSION: nk,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nj,
    AUDIO_SET_LOOPBACK: nG,
    AUDIO_SET_NOISE_SUPPRESSION: nV,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nH,
    AUDIO_SET_NOISE_CANCELLATION: nY,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: nW,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: nq,
    AUDIO_SET_DEBUG_LOGGING: nX,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: nQ,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: nK,
    MEDIA_ENGINE_SET_VIDEO_HOOK: nJ,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: n$,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: n0,
    AUDIO_SET_ATTENUATION: n1,
    AUDIO_SET_QOS: n3,
    MEDIA_ENGINE_DEVICES: nw,
    AUDIO_VOLUME_CHANGE: nL,
    AUDIO_RESET: n2,
    AUDIO_INPUT_DETECTED: n4,
    AUDIO_SET_SUBSYSTEM: ro,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: ra,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: r_,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rp,
    MEDIA_ENGINE_PERMISSION: rf,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rg,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nR,
    MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nz,
    MEDIA_ENGINE_INTERACTION_REQUIRED: nD,
    USER_SETTINGS_MODAL_INIT: rE,
    USER_SETTINGS_MODAL_SET_SECTION: rE,
    CERTIFIED_DEVICES_SET: rb,
    RPC_APP_CONNECTED: ru,
    RPC_APP_DISCONNECTED: rd,
    OVERLAY_INITIALIZE: nl,
    MEDIA_ENGINE_SET_OPEN_H264: ry,
    APP_STATE_UPDATE: rI,
    SET_CHANNEL_BITRATE: rT,
    SET_VAD_PERMISSION: n8,
    SET_NATIVE_PERMISSION: n5,
    SET_CHANNEL_VIDEO_QUALITY_MODE: rC,
    MEDIA_ENGINE_SET_AEC_DUMP: rO,
    MEDIA_ENGINE_RESET_SETTINGS: rv,
    CHANNEL_DELETE: rS,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rA,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rN,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rR,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rP,
    USER_SETTINGS_PROTO_UPDATE: nm,
    CLIPS_INIT: rh,
    CLIPS_SETTINGS_UPDATE: rm,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rD,
    VOICE_FILTER_REQUEST_SWITCH: rn,
    VOICE_FILTER_LOOPBACK_TOGGLE: rt,
    VOICE_FILTER_APPLIED: ri,
    VOICE_FILTER_DOWNLOAD_FAILED: rr,
    VOICE_FILTER_APPLY_FAILED: rr,
}));
