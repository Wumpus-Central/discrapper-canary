let r, i, a, o, s, l, c, u;
n.d(t, { Z: () => rz }), n(388685), n(953529), n(457542), n(539854), n(642613), n(49124), n(337869);
var d,
    f = n(512722),
    p = n.n(f),
    _ = n(392711),
    m = n.n(_),
    h = n(209739),
    g = n.n(h),
    E = n(404097),
    b = n(442837),
    y = n(46973),
    O = n(433517),
    v = n(846519),
    S = n(570140),
    I = n(579806),
    T = n(887278),
    C = n(547727),
    A = n(435064),
    N = n(779618),
    P = n(341569),
    R = n(710845),
    w = n(535911),
    D = n(458725),
    x = n(353926),
    L = n(646047),
    j = n(594190),
    M = n(502286),
    k = n(883794),
    U = n(314080),
    G = n(822253),
    Z = n(177732),
    F = n(960708),
    B = n(502450),
    V = n(294473),
    H = n(706629),
    Y = n(159142),
    W = n(27955),
    K = n(166884),
    z = n(126382),
    q = n(422797),
    Q = n(805877),
    X = n(837968),
    J = n(529558),
    $ = n(705946),
    ee = n(412412),
    et = n(441167),
    en = n(787602),
    er = n(338336),
    ei = n(751571),
    ea = n(311473),
    eo = n(825940),
    es = n(615830),
    el = n(725380),
    ec = n(383451),
    eu = n(581883),
    ed = n(875527),
    ef = n(420439),
    ep = n(626135),
    e_ = n(12647),
    em = n(70956),
    eh = n(358085),
    eg = n(747268),
    eE = n(960048),
    eb = n(998502),
    ey = n(13140),
    eO = n(314897),
    ev = n(967368),
    eS = n(463395),
    eI = n(592125),
    eT = n(19780),
    eC = n(704806),
    eA = n(594174),
    eN = n(631768),
    eP = n(981631),
    eR = n(70722),
    ew = n(761274),
    eD = n(526761),
    ex = n(345655),
    eL = n(65154),
    ej = n(388032);
function eM(e, t, n) {
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
function ek(e) {
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
                eM(e, t, n[t]);
            });
    }
    return e;
}
function eU(e, t) {
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
function eG(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eU(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eZ = new R.Z("MediaEngineStore"),
    eF = "MediaEngineStore",
    eB = 4,
    eV = 1,
    eH = 1,
    eY = 1,
    eW = 0.5,
    eK = {
        left: 1,
        right: 1,
    },
    ez = 500,
    eq = 5 * em.Z.Millis.SECOND,
    eQ = -60,
    eX = 100,
    eJ = 2 * em.Z.Millis.SECOND,
    e$ = !0,
    e0 = "deep_noise_suppression",
    e1 = 0;
function e3() {
    return {
        mode: eP.pM4.VOICE_ACTIVITY,
        modeOptions: {
            threshold: eQ,
            autoThreshold: eh.isPlatformEmbedded || __OVERLAY__,
            vadUseKrisp: !0,
            vadKrispActivationThreshold: eW,
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
        inputVolume: eL.Qx,
        outputVolume: eL.Qx,
        inputDeviceId: eL.w5,
        outputDeviceId: eL.w5,
        videoDeviceId: eL.w5,
        qos: !1,
        qosMigrated: !1,
        videoHook: e4.supports(eL.AN.VIDEO_HOOK),
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
let e2 = {
        [ex._.CUSTOM]: {},
        [ex._.VOICE_ISOLATION]: {
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
        [ex._.STUDIO]: {
            mode: eP.pM4.VOICE_ACTIVITY,
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
    e4 = (0, y.Mt)((0, y.jj)());
eZ.enableNativeLogger(!0);
let e5 = {},
    e8 = new Set([eL.Yn.DEFAULT]),
    e6 = e4.supports(eL.AN.AUTO_ENABLE),
    e7 = !1,
    e9 = eL.Yn.STREAM,
    te = performance.now(),
    tt = { [eL.w5]: nd("No Input Devices") },
    tn = { [eL.w5]: nd("No Output Devices") },
    tr = { [eL.w5]: nd("No Video Devices") },
    ti = !1,
    ta = !1,
    to = !1,
    ts = !1,
    tl = !1,
    tc = eL.Av,
    tu = eL.Av,
    td = !1,
    tf = !1,
    tp = !1,
    t_ = new v.V7(),
    tm = !1,
    th = !1,
    tg = null,
    tE = !1,
    tb = !1,
    ty = !1,
    tO = !1,
    tv = !1,
    tS = [],
    tI = !1,
    tT = null,
    tC = null,
    tA = null,
    tN = null,
    tP = null,
    tR = !1,
    tw = !1,
    tD = !1,
    tx = null,
    tL = null,
    tj = !1;
ei.Z.hasPermission(ew.Eu.AUDIO, { showAuthorizationError: !1 }),
    ei.Z.hasPermission(ew.Eu.CAMERA, { showAuthorizationError: !1 });
let tM = !1,
    tk = new Set(),
    tU = tM,
    tG = new Set(),
    tZ = {},
    tF = null,
    tB = !0,
    tV = !1,
    tH = !1,
    tY = !1,
    tW = !1;
function tK() {
    var e, t;
    return null != (t = null == (e = eA.default.getCurrentUser()) ? void 0 : e.isStaff()) && t
        ? "always"
        : eg.Z === E.R.CANARY
          ? "permittedDevicesOnly"
          : "never";
}
async function tz() {
    if (
        "undefined" == typeof window ||
        "undefined" == typeof navigator ||
        !("mediaCapabilities" in navigator) ||
        null == navigator.mediaCapabilities
    )
        return !1;
    try {
        let e = await navigator.mediaCapabilities.decodingInfo({
            type: "file",
            video: {
                contentType: 'video/mp4; codecs="hev1.1.6.L153.B0"',
                width: 1920,
                height: 1080,
                bitrate: 2000000,
                framerate: 30,
            },
        });
        return e.supported && e.powerEfficient;
    } catch (e) {
        return !1;
    }
}
function tq() {
    return null != tL
        ? tL
        : "undefined" != typeof window
          ? (tL = tz().then((e) => ((tx = e), e)))
          : Promise.resolve(!1);
}
function tQ() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eL.Yn.DEFAULT,
        t = e5[e];
    return null == t && ((t = e3()), (e5[e] = t)), t;
}
function tX() {
    var e, t, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eL.Yn.DEFAULT,
        i = tQ(r),
        a = e2[null != (e = i.activeInputProfile) ? e : ex._.CUSTOM],
        o = ek({}, null != (t = i.modeOptions) ? t : {}, null != (n = a.modeOptions) ? n : {});
    if (
        (null == o.vadDuringPreProcess && (o.vadDuringPreProcess = (0, $.C)({ location: "getSettings" }).enabled),
        (null == o.vadKrispActivationThreshold && !0 === a.automaticGainControl) || !0 === i.automaticGainControl)
    ) {
        let e = (0, k.U)({ location: "getSettings" });
        null != e.vadKrispActivationThreshold && (o.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return eG(ek({}, i, a), { modeOptions: o });
}
function tJ(e) {
    var t, n;
    let r = tX(e.context),
        i = r.mode;
    e.context === eL.Yn.DEFAULT &&
        ((0, ec.f)({
            location: "setInputMode",
            autoTrackExposure: !1,
        }).enableLatching &&
            i === eP.pM4.PUSH_TO_TALK &&
            r.modeOptions.pttLatchingEnabled &&
            (i = eP.pM4.VOICE_ACTIVITY),
        (0, X.I)(!1, !1, !1)),
        e.setInputMode(i, {
            vadThreshold: r.modeOptions.threshold,
            vadAutoThreshold: r.modeOptions.autoThreshold,
            vadUseKrisp: r.modeOptions.vadUseKrisp && rd(),
            vadKrispActivationThreshold: null != (t = r.modeOptions.vadKrispActivationThreshold) ? t : eW,
            vadLeading: r.modeOptions.vadLeading,
            vadTrailing: r.modeOptions.vadTrailing,
            vadDuringPreProcess: null != (n = r.modeOptions.vadDuringPreProcess) && n,
            pttReleaseDelay: Math.round(r.modeOptions.delay),
        });
}
function t$(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eL.Qx;
    return m().clamp(e, 0, t);
}
function t0(e) {
    let t = tX(e.context),
        n = !e6 || t.mute || t.deaf;
    e.context === eL.Yn.DEFAULT
        ? (n = n || ti || ta || to || !ei.Z.didHavePermission(ew.Eu.AUDIO))
        : e.context === eL.Yn.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eL.Yn.DEFAULT && C.Z.updateNativeMute();
}
function t1(e) {
    e !== e9 && (null != a && e4.setGoLiveSource(null, e9), (e9 = e));
}
function t3() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tl,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        s = a;
    if (
        ((null == s ? void 0 : s.desktopSource) != null &&
            s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? void 0 : e.id) &&
            (null != s.desktopSource.soundshareId && (0, eh.isWindows)() && T.pn(s.desktopSource.soundshareId),
            e4.setGoLiveSource(null, e9)),
        (null == s ? void 0 : s.cameraSource) != null &&
            (s.cameraSource.videoDeviceGuid !==
                (null == o || null == (t = o.cameraSource) ? void 0 : t.videoDeviceGuid) ||
                s.cameraSource.audioDeviceGuid !==
                    (null == o || null == (n = o.cameraSource) ? void 0 : n.audioDeviceGuid)) &&
            e4.setGoLiveSource(null, e9),
        tl || i)
    ) {
        let e = tX().videoDeviceId;
        tl && e === eL.w5 && tu === eL.w5 && tc !== eL.Av ? (e = tc) : (tu = e),
            (tc = (tl = i) ? np(tr, e) : eL.Av),
            e4.setVideoInputDevice(tc);
    }
    if (((a = o), null != o)) {
        let e = {
            resolution: o.quality.resolution,
            frameRate: o.quality.frameRate,
        };
        if (null != o.desktopSource) {
            let t = tK(),
                n = tX().videoHook,
                i = ne(),
                a = i ? (nt() ? eR.zj : eR.ZM) : 0,
                s = (0, eh.isWindows)() && (0, ee.t)("updateVideo").enabled;
            e4.setGoLiveSource(
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
                        allowScreenCaptureKit: nn(),
                        videoHookStaleFrameTimeoutMs: ez,
                        graphicsCaptureStaleFrameTimeoutMs: eq,
                        hdrCaptureMode: t,
                        enableGlobalFramePoolLock: (0, W.T)({ location: "updateVideo" }).enabled,
                    },
                    quality: e,
                },
                e9,
            );
        }
        null != o.cameraSource &&
            e4.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: o.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                e9,
            );
    }
}
function t2(e) {
    switch (e) {
        case eL.H3.CPU_OVERUSE:
            return D.Nk.NoiseCancellerCpuOveruse;
        case eL.H3.FAILED:
            return D.Nk.NoiseCancellerFailed;
        case eL.H3.VAD_CPU_OVERUSE:
            return D.Nk.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function t4(e) {
    let t = (0, k.U)({
        location: "getAutomaticGainControlConfig",
        disable: !e,
    }).noiseCancellationConfig;
    return ek({ enabled: e }, t);
}
function t5(e, t) {
    e.setAutomaticGainControl(t4(t));
}
function t8(e) {
    if ((0, eh.isIOS)() || (0, eh.isMac)()) {
        var t;
        let n = null != (t = r.getSystemMicrophoneMode()) ? t : "";
        if ("" !== n && "standard" !== n) {
            let { disabledModes: e } = U.Z.getConfig({ location: "setNoiseCancellation" });
            if (e.includes(n)) return eZ.info("Falling back to system noise suppression."), !1;
        }
        return e;
    }
    if (!e) return e;
    let n = r.getSystemMicrophoneMode();
    if (null == n || "" === n) return e;
    if ((0, eh.isWindows)() && n === e0) {
        let { preferSystemEffects: e } = (0, eo.P)({ location: "setNoiseCancellation" });
        if (e) return eZ.info("Falling back to system noise suppression."), !1;
    }
    return e;
}
function t6(e, t) {
    (t = t8(t)), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: n } = (0, k.U)({
        location: "setNoiseCancellation",
        disable: !t,
    });
    e.setNoiseCancellationDuringProcessing(n);
    let { noiseCancellationAfterProcessing: r, vadAfterWebrtc: i } = (0, q.$)({ location: "setNoiseCancellation" });
    e.setNoiseCancellationAfterProcessing(r), e.setVADAfterWebrtc(i);
}
function t7(e) {
    let t = tX(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eS.Z.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eS.Z.hasNoiseSuppression(n) || t.noiseSuppression),
        t5(e, eS.Z.hasAutomaticGainControl(n) || t.automaticGainControl),
        t6(e, t.noiseCancellation),
        e.setVoiceFilterId(tT),
        (0, eh.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function t9() {
    e4.on(y.aB.Connection, (e) => {
        tJ(e), t0(e), t7(e);
        let t = tX();
        e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers), e.setQoS(t.qos);
        let n = (0, z.D)({ location: "setupMediaEngine" }).treatment;
        n === z.$.NoSoftwareDecode
            ? (e.setExperimentFlag(eL.V8.H265_HARDWARE_ONLY, !0),
              (0, eh.isWindows)()
                  ? tq().then((t) => {
                        e.setExperimentFlag(eL.V8.H265_HARDWARE_DECODE_AVAILABLE, t);
                    })
                  : (0, eh.isMac)() && e.setExperimentFlag(eL.V8.H265_HARDWARE_DECODE_AVAILABLE, !0))
            : n === z.$.Disabled &&
              (e.setExperimentFlag(eL.V8.H265_HARDWARE_ONLY, !0),
              e.setExperimentFlag(eL.V8.H265_HARDWARE_DECODE_AVAILABLE, !1));
        let i = eT.Z.getGuildId(),
            {
                muteBeforeProcessing: o,
                pttBeforeProcessing: s,
                skipEncode: l,
            } = (null != i ? H.Z : V.Z).getCurrentConfig(
                {
                    location: "setupMediaEngine",
                    guildId: null != i ? i : void 0,
                },
                { autoTrackExposure: !0 },
            );
        o && e.setExperimentFlag(eL.V8.MUTE_BEFORE_PROCESSING, !0),
            s && e.setExperimentFlag(eL.V8.PTT_BEFORE_PROCESSING, !0),
            l && e.setExperimentFlag(eL.V8.SKIP_ENCODE, !0),
            (0, Q.J)({ location: "setupMediaEngine" }).enabled &&
                e.setExperimentFlag(eL.V8.LOW_LATENCY_RATE_CONTROL, !0);
        let c = !1,
            u = !0;
        if (
            (e.setExperimentFlag(eL.V8.RESET_DECODER_ON_ERRORS, !0),
            c && e.setExperimentFlag(eL.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0),
            u && e.setExperimentFlag(eL.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0),
            e.context === eL.Yn.STREAM)
        ) {
            let t = nm(tn);
            e.setSoundshareDiscardRearChannels(t);
            let { simulcastEnabled: n, lqStreamBitrate: r } = K.Z.getConfig();
            e.configureGoLiveSimulcast(n, r);
        }
        if (
            ((0, eh.isWindows)()
                ? (null == tF ? void 0 : tF.startsWith("NVIDIA")) || (null == tF ? void 0 : tF.startsWith("AMD"))
                    ? e.setExperimentFlag(eL.V8.SIGNAL_AV1, !0)
                    : e.setExperimentFlag(eL.V8.SIGNAL_AV1_DECODE, !0)
                : ((0, eh.isMac)() || (0, eh.isLinux)()) && e.setExperimentFlag(eL.V8.SIGNAL_AV1_DECODE, !0),
            (0, eh.isWindows)() && e.setExperimentFlag(eL.V8.SIGNAL_AV1_HARDWARE_DECODE, !0),
            (0, eh.isWeb)())
        ) {
            let { enabled: t } = (0, Y.A)("MediaEngineStore");
            e.setExperimentFlag(eL.V8.BROWSER_HEVC, t);
        }
        if (
            ((0, eh.isWindows)() &&
                (null == tF ? void 0 : tF.startsWith("AMD")) &&
                (0, en.C)("MediaEngineStore").enabled &&
                e.setExperimentFlag(eL.V8.WMF_GPU_ENCODE, !0),
            e4.setHasFullbandPerformance((0, w.Z)()),
            e.setRemoteAudioHistory(1000),
            (0, N.Z)(r))
        ) {
            let { enableViewerClipping: t } = et.Z.getCurrentConfig(
                { location: "f627ab_15" },
                { autoTrackExposure: !1 },
            );
            e.setViewerSideClip(t), e.setClipsKeyFrameInterval(eL.ux);
        }
        for (let n of ((t = tX(e.context)), e.setPostponeDecodeLevel(eX), Object.keys(t.localMutes)))
            n !== eO.default.getId() && e.setLocalMute(n, t.localMutes[n]);
        for (let n of Object.keys(t.localVolumes)) n !== eO.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
        for (let n of Object.keys(t.localPans)) {
            let r = t.localPans[n];
            e.setLocalPan(n, r.left, r.right);
        }
        for (let n of Object.keys(t.disabledLocalVideos)) e.setLocalVideoDisabled(n, t.disabledLocalVideos[n]);
        e.on(y.Sh.Speaking, (t, n, r, i) => {
            S.Z.dispatch({
                type: "SPEAKING",
                context: e.context,
                userId: t,
                speakingFlags: n,
                voiceDb: i,
            });
        }),
            e.context === eL.Yn.DEFAULT &&
                ((tf = !1),
                (tp = !1),
                e.on(y.Sh.SpeakingWhileMuted, () => {
                    (tf = !0),
                        (tp = !0),
                        r.emitChange(),
                        t_.stop(),
                        t_.start(eJ, () => {
                            (tp = !1), r.emitChange();
                        });
                })),
            e.on(y.Sh.DesktopSourceEnd, (t, n) => {
                S.Z.dispatch({
                    type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                    settings: { context: e.context },
                    endReason: t,
                    errorCode: n,
                });
            }),
            e.on(y.Sh.InteractionRequired, (e) => {
                S.Z.dispatch({
                    type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
                    required: e,
                });
            }),
            e.on(y.Sh.VideoHookInitialize, (e, t, n, r, i, o) => {
                (null == a ? void 0 : a.desktopSource) != null &&
                    ep.default.track(
                        eP.rMx.VIDEOHOOK_INITIALIZED,
                        ek(
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
            e.on(y.Sh.NoiseCancellationError, (e) => {
                eZ.warn("noisecancellererror event: ".concat(e)),
                    (0, D.kr)({
                        type: D.u.NOISE_CANCELLER_ERROR,
                        underlyingError: t2(e),
                    }),
                    (tR = !0),
                    ep.default.track(eP.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    S.Z.dispatch({
                        type: "AUDIO_SET_NOISE_SUPPRESSION",
                        enabled: !0,
                    }),
                    S.Z.dispatch({
                        type: "AUDIO_SET_NOISE_CANCELLATION",
                        enabled: !1,
                    }),
                    S.Z.dispatch({
                        type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR",
                        code: e,
                    });
            }),
            e.on(y.Sh.VoiceActivityDetectorError, (e) => {
                eZ.warn("voiceactivitydetectorerror event: ".concat(e)),
                    (0, D.kr)({
                        type: D.u.NOISE_CANCELLER_ERROR,
                        underlyingError: t2(e),
                    }),
                    ep.default.track(eP.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    S.Z.dispatch({
                        type: "AUDIO_SET_MODE",
                        context: eL.Yn.DEFAULT,
                        mode: eP.pM4.VOICE_ACTIVITY,
                        options: eG(ek({}, tX(eL.Yn.DEFAULT).modeOptions), { vadUseKrisp: !1 }),
                    }),
                    S.Z.dispatch({
                        type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
                        code: e,
                    });
            }),
            e.on(y.Sh.SdpError, (e, t, n, r) => {
                ep.default.track(eP.rMx.SDP_ERROR, {
                    operation: e,
                    error: t,
                    type: n,
                    sdp: r,
                });
            }),
            e.on(y.Sh.VideoState, (t) => {
                S.Z.dispatch({
                    type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED",
                    videoState: t,
                    context: e.context,
                });
            }),
            e.setBitRate(ev.Z.bitrate),
            e.applyVideoQualityMode(eN.Z.mode),
            e4.supports(eL.AN.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                e4.setAsyncVideoInputDeviceInit((0, F.p)("setupMediaEngine").enabled);
    }),
        e4.on(y.aB.DeviceChange, (e, t, n) => {
            S.Z.dispatch({
                type: "MEDIA_ENGINE_DEVICES",
                inputDevices: e,
                outputDevices: t,
                videoDevices: n,
            });
        }),
        e4.on(y.aB.VolumeChange, (e, t) => {
            S.Z.dispatch({
                type: "AUDIO_VOLUME_CHANGE",
                inputVolume: e,
                outputVolume: t,
            });
        }),
        e4.on(y.aB.DesktopSourceEnd, (e, t) => {
            S.Z.dispatch({
                type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                settings: null,
                endReason: e,
                errorCode: t,
            });
        }),
        e4.on(y.aB.AudioPermission, (e) => {
            (tj = !0),
                S.Z.dispatch({
                    type: "MEDIA_ENGINE_PERMISSION",
                    kind: "audio",
                    granted: e,
                });
        }),
        e4.on(y.aB.VideoPermission, (e) => {
            S.Z.dispatch({
                type: "MEDIA_ENGINE_PERMISSION",
                kind: "video",
                granted: e,
            });
        }),
        e4.on(y.aB.WatchdogTimeout, async () => {
            let e;
            try {
                await e_.Z.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
            } catch (t) {
                "number" == typeof t.status && (e = t.status);
            }
            eZ.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)),
                ep.default.track(eP.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        e4.on(y.aB.VideoInputInitialized, (e) => {
            ep.default.track(eP.rMx.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired
                    ? null
                    : Math.round(e.timeToFirstFrame * em.Z.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: eT.Z.getMediaSessionId(),
                rtc_connection_id: eT.Z.getRTCConnectionId(),
            });
        }),
        e4.on(y.aB.AudioInputInitialized, (e) => {
            ep.default.track(eP.rMx.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * em.Z.Millis.SECOND),
                rtc_connection_id: eT.Z.getRTCConnectionId(),
            });
        }),
        e4.on(y.aB.ClipsRecordingRestartNeeded, () => {
            S.Z.dispatch({ type: "CLIPS_RESTART" });
        }),
        e4.on(y.aB.ClipsInitFailure, (e, t) => {
            S.Z.wait(() => {
                S.Z.dispatch({
                    type: "CLIPS_INIT_FAILURE",
                    errMsg: e,
                    applicationName: t,
                });
            });
        }),
        e4.on(y.aB.ClipsRecordingEnded, (e, t) => {
            var n, r;
            (null == o || null == (n = o.desktopSource) ? void 0 : n.id) === e &&
                (null != t && (null == a || null == (r = a.desktopSource) ? void 0 : r.soundshareId) !== t && T.pn(t),
                (o = null));
        }),
        e4.on(y.aB.NativeScreenSharePickerUpdate, (e, t) => {
            S.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE",
                existing: e,
                content: t,
            });
        }),
        e4.on(y.aB.NativeScreenSharePickerCancel, (e) => {
            S.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL",
                existing: e,
            });
        }),
        e4.on(y.aB.NativeScreenSharePickerError, (e) => {
            S.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_ERROR",
                error: e,
            });
        }),
        e4.on(y.aB.AudioDeviceModuleError, (e, t, n) => {
            ep.default.track(eP.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                audio_device_module: e,
                code: t,
                device_name: n,
            });
        }),
        e4.on(y.aB.VideoCodecError, (e) => {
            let t = "encode" === e.mode ? D.u.VIDEO_ENCODE_ERROR : D.u.VIDEO_DECODE_ERROR,
                n = {
                    videoCodec: e.codecStandard,
                    errorMessage: e.message,
                };
            (0, D.kr)(
                t === D.u.VIDEO_ENCODE_ERROR
                    ? eG(ek({ type: t }, n), { videoEncoder: e.implName })
                    : eG(ek({ type: t }, n), { videoDecoder: e.implName }),
            );
        }),
        e4.on(y.aB.ConnectionStats, (e) => {
            S.Z.dispatch({
                type: "MEDIA_ENGINE_CONNECTION_STATS",
                connectionStats: e.map((e) => {
                    let { stats: t, connection: n } = e;
                    return {
                        stats: t,
                        mediaEngineConnectionId: n.mediaEngineConnectionId,
                        version: e1++,
                        context: n.context,
                    };
                }),
            });
        }),
        e4.on(y.aB.VoiceQueueMetrics, (e) => {
            let t = rK(e);
            null !== t && ep.default.track(eP.rMx.VOICE_QUEUE_METRICS, t);
        }),
        e4.setOnVideoContainerResized((e, t, n) => {
            S.Z.wait(() =>
                S.Z.dispatch({
                    type: "VIDEO_SIZE_UPDATE",
                    streamId: e,
                    dimensions: {
                        width: t,
                        height: n,
                    },
                }),
            );
        }),
        n1(),
        n2(),
        e4.supports(eL.AN.ASYNC_CLIPS_SOURCE_DEINIT) &&
            e4.setAsyncClipsSourceDeinit((0, B.C)("setupMediaEngine").enabled),
        na.reset(),
        (0, eC.q)().then((e) => {
            null != e && (tF = e.gpu_brand);
        }),
        e4.on(y.aB.SystemMicrophoneModeChange, (e) => {
            (u = e), e4.eachConnection(t7);
        });
}
function ne() {
    return (0, eh.isWindows)() && g().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eR.c5);
}
function nt() {
    return (0, eh.isWindows)() && g().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eR.sN);
}
function nn() {
    return (
        (0, eh.isMac)() &&
        e4.supports(eL.AN.SCREEN_CAPTURE_KIT) &&
        g().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eR.C7)
    );
}
function nr() {
    return (
        (0, eh.isWindows)() &&
        e4.supports(eL.AN.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        e4.supports(eL.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function ni() {
    return e4.supports(eL.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
let na = new (class {
    start() {
        this.started || ((this.started = !0), e4.on(y.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout &&
                (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            e4.removeListener(y.aB.Silence, this.handleSilence),
            S.Z.dispatch({
                type: "AUDIO_INPUT_DETECTED",
                inputDetected: null,
            }));
    }
    update() {
        let e = tX();
        !tE && eT.Z.getState() === eP.hes.RTC_CONNECTED && e.mode === eP.pM4.VOICE_ACTIVITY && e.silenceWarning
            ? this.start()
            : this.stop();
    }
    reset() {
        this.stop(), this.update();
    }
    constructor() {
        eM(this, "stateChangeTimeout", void 0),
            eM(this, "noVoiceTimeout", 5000),
            eM(this, "voiceTimeout", 1500),
            eM(this, "started", !1),
            eM(this, "handleSilence", (e) => {
                let t = !e;
                null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout),
                    (this.stateChangeTimeout = setTimeout(
                        () => {
                            (this.stateChangeTimeout = null),
                                this.started &&
                                    (S.Z.dispatch({
                                        type: "AUDIO_INPUT_DETECTED",
                                        inputDetected: t,
                                    }),
                                    e && (tb = !0));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout,
                    ));
            });
    }
})();
function no() {
    var e;
    let t = O.K.get("audio");
    null != t && (O.K.set(eF, { [eL.Yn.DEFAULT]: t }), O.K.remove("audio")),
        (e5 = null != (e = O.K.get(eF)) ? e : {}),
        m().each(e5, (e) => {
            if (
                (m().defaultsDeep(e, e3()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, ey.Kd)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== eB &&
                    ((e.vadUseKrispSettingVersion = eB), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                !e.vadThrehsoldMigrated)
            ) {
                var t;
                (e.vadThrehsoldMigrated = !0),
                    (null == (t = e.modeOptions) ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = eQ);
            }
            e4.supports(eL.AN.SIDECHAIN_COMPRESSION) &&
                e.sidechainCompressionSettingVersion < eY &&
                ((e.sidechainCompressionSettingVersion = eY), (e.sidechainCompression = !0)),
                (0, eh.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== eH &&
                      ((e.ncUseKrispjsSettingVersion = eH), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== eV &&
                      ((e.ncUseKrispSettingVersion = eV), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
        }),
        nc();
}
function ns(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eL.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = tQ(t);
    return Object.assign(r, e), !__OVERLAY__ && n && O.K.set(eF, e5), r;
}
function nl() {
    O.K.remove(eF), location.reload();
}
function nc() {
    let e = tX();
    e4.setAudioInputDevice(e.inputDeviceId),
        e4.setAudioOutputDevice(e.outputDeviceId),
        t3(),
        e4.setInputVolume(e.inputVolume),
        e4.setOutputVolume(e.outputVolume),
        e4.setH264Enabled(e$),
        e4.setAv1Enabled(e$),
        e4.setH265Enabled(e$),
        e4.setAecDump(e.aecDumpEnabled),
        e4.setSidechainCompression(e.sidechainCompression),
        e4.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        e4.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing);
}
function nu() {
    e6 ||
        e4.enable().then(() =>
            S.Z.dispatch({
                type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
                enabled: !0,
                unmute: !1,
            }),
        );
}
function nd(e) {
    return {
        id: eL.w5,
        index: 0,
        name: e,
        disabled: !0,
        guid: void 0,
        hardwareId: void 0,
        containerId: void 0,
    };
}
function nf(e, t) {
    if (0 === e.length) {
        let e = nd(t);
        return { [e.id]: e };
    }
    return m()(e)
        .map((e) => ({
            id: e.id,
            index: e.index,
            name: e.name,
            disabled: !1,
            facing: e.facing,
            guid: e.originalId,
            hardwareId: e.hardwareId,
            containerId: e.containerId,
            effects: e.effects,
        }))
        .keyBy("id")
        .value();
}
function np(e, t) {
    var n, r;
    let i = null != (r = null != (n = e[t]) ? n : e[eL.w5]) ? r : m()(e).values().first();
    return null != i ? i.id : t;
}
function n_(e) {
    let t = tt;
    if (((tt = nf(e, ej.intl.string(ej.t["/QIjDA"]))), !m().isEqual(tt, t))) {
        let e = tX(),
            t = np(tt, e.inputDeviceId);
        e4.setAudioInputDevice(t), e4.eachConnection(t7);
    }
}
function nm(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nh(e) {
    e4.eachConnection((t) => {
        t.context === eL.Yn.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function ng(e) {
    let t = tn;
    if (((tn = nf(e, ej.intl.string(ej.t.xlUg0v))), !m().isEqual(tn, t))) {
        let e = tX(),
            n = np(tn, e.outputDeviceId);
        e4.setAudioOutputDevice(n);
        let r = nm(t),
            i = nm(tn);
        r !== i && nh(i);
    }
}
function nE(e) {
    th = e.length > 0;
    let t = tr;
    if (((tr = nf(e, ej.intl.string(ej.t.WKWARY))), tl && !m().isEqual(tr, t))) {
        var n;
        let e = void 0 !== tr[tc],
            r = tc === eL.w5 && (null == (n = t[eL.w5]) ? void 0 : n.disabled);
        t3(e || r);
    }
}
function nb() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        r =
            null != (e = eu.Z.settings.audioContextSettings)
                ? e
                : {
                      user: {},
                      stream: {},
                  };
    for (let e of Object.keys(r)) {
        let i = e === eD.u0.USER ? eL.Yn.DEFAULT : eL.Yn.STREAM,
            a = i === eL.Yn.STREAM ? eL.Yh : eL.Qx,
            o = null != (t = r[e]) ? t : {},
            { localMutes: s, localVolumes: l } = tX(i);
        for (let [e, t] of Object.entries(o))
            null == (0, el.Ky)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== a ? (l[e] = t.volume) : delete l[e],
                e4.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (n)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == o[e] &&
                    (delete s[e],
                    delete l[e],
                    e4.eachConnection((t) => {
                        t.setLocalVolume(e, a), t.setLocalMute(e, !1);
                    }, i));
        ns(
            {
                localMutes: s,
                localVolumes: l,
            },
            i,
        );
    }
}
function ny(e) {
    if (null == r)
        return (
            eZ.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
            {
                soundshareId: null,
                soundshareSession: "",
            }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : e_.Z.getAudioPid(e),
            n = "";
        return (
            null != t && (n = e_.Z.generateSessionFromPid(t)),
            {
                soundshareId: t,
                soundshareSession: n,
            }
        );
    }
}
function nO(e, t) {
    (0, eh.isWindows)() &&
        e > 1 &&
        T.YT(e, { soundshare_session: t }).then((t) => {
            null == t ||
                j.ZP.shouldContinueWithoutElevatedProcessForPID(e) ||
                S.Z.wait(() => {
                    S.Z.dispatch({
                        type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                        errorMessage: t,
                    });
                });
        });
}
function nv(e) {
    (i = e.sessionId), (ti = !1), (ts = !1);
    let t = tX();
    if (
        (nr() && (ni() ? rO(eL.iA.AUTOMATIC) : t.automaticAudioSubsystem && rv()),
        e4.supports(eL.AN.OFFLOAD_ADM_CONTROLS))
    ) {
        let e = !1;
        (0, eh.isDesktop)()
            ? (e = (0, G.E)({ location: "handleConnectionOpen" }).enabled)
            : ((0, eh.isIOS)() || (0, eh.isAndroid)()) && (e = (0, Z.W)({ location: "handleConnectionOpen" }).enabled),
            e4.setOffloadAdmControls(e);
    }
    (0, ed.wt)({
        location: "MediaEngineStore",
        autoTrackExposure: !1,
    }) &&
        null !== t.mostRecentlyRequestedVoiceFilter &&
        (0, eh.isDesktop)() &&
        (ef.Z.getLastInitAttemptMayHaveCrashed()
            ? (S.Z.dispatch({
                  type: "AUDIO_SET_SELF_MUTE",
                  mute: !0,
                  context: eL.Yn.DEFAULT,
                  playSoundEffect: !0,
              }),
              ns({ mostRecentlyRequestedVoiceFilter: null }))
            : n(358820).r5()),
        nb();
}
function nS(e) {
    let { mediaEngineState: t } = e;
    (e5 = t.settingsByContext),
        (tt = t.inputDevices),
        (tn = t.outputDevices),
        (tZ = t.appSupported),
        (tv = t.krispModuleLoaded),
        (s = t.krispVersion),
        (e9 = t.goLiveContext);
}
function nI() {
    i = null;
}
function nT() {
    if ((0, eh.isWeb)()) {
        let e = J.NJ.getCurrentConfig({ location: "MediaEngineStore handlePostConnectionOpen" });
        e.loadWasmModule && e.preload && r.startDavePreload();
    }
    return !1;
}
function nC(e) {
    switch (e.state) {
        case eP.hes.CONNECTING:
            nu();
            break;
        case eP.hes.RTC_CONNECTING:
            (tE = !1), (tb = !1);
            break;
        case eP.hes.RTC_CONNECTED:
            t3();
            break;
        case eP.hes.DISCONNECTED:
            nj(), nM();
    }
    na.update();
}
function nA(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (ti = t.mute || t.suppress), (ts = t.deaf), e4.eachConnection(t0);
            let e = null != t.guildId && null != t.channelId && null != tP && tP !== t.channelId,
                n = !ty && null == t.channelId;
            return t3(!e && !n && tl), (tP = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== eO.default.getId() || null != eT.Z.getChannelId() || t3(!1, null), e;
    }, !1);
}
function nN(e) {
    let { mute: t } = e;
    (ta = t), e4.eachConnection(t0);
}
function nP(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = tX(t);
    if (t === eL.Yn.DEFAULT && (ei.Z.requestPermission(ew.Eu.AUDIO), to)) return !1;
    (r = !i && !r) || (i = !1),
        n || (td = !0),
        ns(
            {
                mute: r,
                deaf: i,
            },
            t,
        ),
        e4.eachConnection(t0);
}
function nR(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    ns({ mute: n }, t), r || (td = !0), e4.eachConnection(t0);
}
function nw(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== eD.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    nb(!0);
}
function nD(e) {
    let { context: t } = e;
    ns({ deaf: !tX(t).deaf }, t), e4.eachConnection(t0);
}
function nx(e) {
    let { context: t, userId: n } = e;
    if (n === eO.default.getId()) return;
    let { localMutes: r } = tX(t);
    r[n] ? delete r[n] : (r[n] = !0),
        ns({ localMutes: r }, t),
        e4.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nL(e) {
    var t, n, r, i, a, o, s;
    let { context: l, userId: c, videoToggleState: u, persist: d, isAutomatic: f } = e;
    p()(!(d && f), "These are not allowed to both be true.");
    let _ = u === eP.ZUi.DISABLED,
        { disabledLocalVideos: m } = tX(l),
        h = null != (t = m[c]) && t,
        g = tk.has(c),
        E = u === eP.ZUi.AUTO_ENABLED || u === eP.ZUi.MANUAL_ENABLED;
    eZ.info(
        "disableVideo="
            .concat(_, " currentlyDisabled=")
            .concat(h, " currentlyAutoDisabled=")
            .concat(g, ", isVideoShown=")
            .concat(E),
    ),
        p()(!(g && !h), "If you are auto-disabled, then you are also disabled.");
    let b = _ !== h,
        y = l === eL.Yn.DEFAULT,
        O = f && b && y,
        v = d && b && y;
    eZ.info(
        "changed="
            .concat(b, " isDefaultContext=")
            .concat(y, " isUpdateCausedByVideoHealthManager=")
            .concat(O, " isManualToggleByUser=")
            .concat(v),
    );
    let { videoToggleStateMap: S } = tX(l);
    if (
        (S[c] === eP.ZUi.AUTO_PROBING &&
            u === eP.ZUi.AUTO_ENABLED &&
            (0, er.Z)(c, _ ? eL.fC.AUTO_DISABLE : eL.fC.AUTO_ENABLE, E),
        (S[c] = u),
        ns({ videoToggleStateMap: S }, l, d),
        u === eP.ZUi.AUTO_PROBING
            ? null == (n = eT.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, !0)
            : null == (r = eT.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, !1),
        tU ||
            (eZ.info("isAutoDisableAllowed=".concat(tU, " - disabling VideoHealthManager")),
            null == (a = eT.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()),
        O)
    ) {
        if ((!_ && !g) || (_ && !tU)) return;
        (0, er.Z)(c, _ ? eL.fC.AUTO_DISABLE : eL.fC.AUTO_ENABLE, E), _ ? tk.add(c) : tk.delete(c);
    } else
        v &&
            (g && !_
                ? (eZ.info("disallowing auto-disable for this session because of manual override by user"),
                  (tU = !1),
                  null == (s = eT.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(),
                  (0, er.Z)(c, eL.fC.MANUAL_REENABLE, E))
                : (0, er.Z)(c, _ ? eL.fC.MANUAL_DISABLE : eL.fC.MANUAL_ENABLE, E));
    y && !_ && tk.delete(c),
        _ ? (m[c] = !0) : delete m[c],
        ns({ disabledLocalVideos: m }, l, d),
        e4.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(c, null != (t = m[c]) && t);
        }, l);
}
function nj() {
    if (0 === tk.size) return;
    let e = eL.Yn.DEFAULT,
        { disabledLocalVideos: t } = tX(e);
    tk.forEach((n) => {
        p()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            e4.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tk.clear(),
        ns({ disabledLocalVideos: t }, e, !1);
}
function nM() {
    let e = eL.Yn.DEFAULT,
        { videoToggleStateMap: t } = tX(e);
    for (let [e, n] of Object.entries(t)) n === eP.ZUi.AUTO_PROBING && delete t[e];
    ns({ videoToggleStateMap: t }, e, !1);
}
function nk(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === eO.default.getId()) return;
    let i = t === eL.Yn.STREAM ? eL.Yh : eL.Qx,
        { localVolumes: a } = tX(t);
    r === i ? delete a[n] : (a[n] = r), ns({ localVolumes: a }, t), e4.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function nU(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: a } = tX(t);
    (a[n] = {
        left: r,
        right: i,
    }),
        ns({ localPans: a }, t),
        e4.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function nG(e) {
    let { context: t, mode: n, options: r } = e;
    ns(
        {
            mode: n,
            modeOptions: r,
        },
        t,
    ),
        e4.eachConnection(tJ),
        na.update();
}
function nZ(e) {
    let { volume: t } = e;
    ns({ inputVolume: t$(t) }), e4.setInputVolume(t);
}
function nF(e) {
    let { volume: t } = e;
    ns({ outputVolume: t }), e4.setOutputVolume(t);
}
function nB(e) {
    let { id: t } = e;
    (t = np(tt, t)),
        (te = performance.now()),
        ns({ inputDeviceId: t }),
        e4.setAudioInputDevice(t),
        e4.eachConnection(t7);
}
function nV(e) {
    let { id: t } = e;
    ns({ outputDeviceId: (t = np(tn, t)) }), e4.setAudioOutputDevice(t);
}
function nH(e) {
    let { id: t } = e;
    ns({ videoDeviceId: (t = np(tr, t)) }), t3();
}
function nY(e) {
    let { inputProfile: t } = e;
    ns({ activeInputProfile: t });
    let n = tX();
    e4.eachConnection((e) => {
        tJ(e), t7(e);
    }),
        e4.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        na.update(),
        n3();
}
function nW(e) {
    return e7 !== e.required && ((e7 = e.required), e.required || e4.interact(), !0);
}
function nK(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    n_(t), ng(n), nE(r);
}
function nz(e) {
    let { inputVolume: t, outputVolume: n } = e;
    ns({
        inputVolume: t$(t),
        outputVolume: n,
    });
}
function nq(e) {
    var t;
    let n = tX(),
        r = e4.getAudioSubsystem(),
        i = e4.getAudioLayer(),
        a = np(tt, n.inputDeviceId),
        o = null == (t = tt[a]) ? void 0 : t.name,
        s = t8(n.noiseCancellation);
    ep.default.track(eP.rMx.VOICE_PROCESSING, {
        echo_cancellation: n.echoCancellation,
        noise_cancellation: n.noiseCancellation,
        noise_suppression: n.noiseSuppression,
        automatic_gain_control: n.automaticGainControl,
        location: e,
        bypass_system_input_processing: n.bypassSystemInputProcessing,
        audio_subsystem: r,
        audio_layer: i,
        input_device: o,
        effective_noise_cancellation: s,
    });
}
function nQ(e) {
    let t = ns({ echoCancellation: e.enabled });
    e4.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), n3(), nq(e.location);
}
function nX(e) {
    n$(e.enabled);
}
function nJ(e) {
    let t = ns({ sidechainCompressionStrength: e.strength });
    e4.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function n$(e) {
    let t = ns({ sidechainCompression: e });
    e4.setSidechainCompression(t.sidechainCompression);
}
function n0(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tG.add(n) : tG.delete(n), n1(), n3();
}
function n1() {
    let e = !tG.has("voice_filter_preview") && !tG.has("mic_test");
    e4.setMaybePreprocessMute(e);
}
function n3() {
    let e = tX(),
        t = tG.size > 0,
        n = e.inputDeviceId,
        r = eS.Z.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        a = eS.Z.hasNoiseSuppression(n) || e.noiseSuppression,
        o = t4(eS.Z.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation,
        l = null !== tT,
        c = tG.has("voice_filter") && 1 === tG.size;
    e4.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: a,
        automaticGainControlConfig: o,
        noiseCancellation: s,
        voiceFilters: l,
        loopbackUseAudioMode: c,
    });
}
async function n2() {
    var e, t, n, r;
    if (!e4.supports(eL.AN.VAAPI)) return;
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
        ((tY = !0), (tH = e4.supports(eL.AN.GAMESCOPE_CAPTURE)));
}
function n4(e) {
    let t = ns({ noiseSuppression: e.enabled });
    e4.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), n3(), nq(e.location);
}
function n5(e) {
    let t = ns({ automaticGainControl: e.enabled });
    e4.eachConnection((e) => t5(e, t.automaticGainControl)), n3(), nq(e.location);
}
function n8(e) {
    let t = ns({ noiseCancellation: e.enabled });
    e4.eachConnection((e) => t6(e, t.noiseCancellation)), n3(), nq(e.location);
}
function n6(e) {
    ea.Z.setKrispModelOverride(e.model), (c = e.model), n3();
}
function n7(e) {
    var t;
    (0, eh.isWeb)() || ((tI = e.enabled), null == (t = e4.setNoiseCancellationEnableStats) || t.call(e4, e.enabled));
}
function n9(e) {
    ns({ silenceWarning: e.enabled }), na.update();
}
function re(e) {
    e4.setDebugLogging(e.enabled);
}
function rt(e) {
    let { level: t } = e;
    (l = t), ea.Z.setKrispSuppressionLevel(t);
}
function rn(e) {
    ns({ videoHook: e.enabled });
}
function rr(e) {
    ns({ experimentalSoundshare2: e.enabled });
}
function ri(e) {
    let { enabled: t } = e;
    ns({ useSystemScreensharePicker: t });
}
function ra(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = ns({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r,
        });
    e4.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function ro(e) {
    let { enabled: t } = e;
    ns({ qos: t }), e4.eachConnection((e) => e.setQoS(t));
}
function rs() {
    nl();
}
function rl(e) {
    let { inputDetected: t } = e;
    (tg = t), !tE && tg && ((tE = !0), na.update());
}
function rc(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === to) return !1;
    (to = n), e4.eachConnection(t0);
}
function ru(e) {
    let { state: t, permissionType: n } = e,
        r = t === ew.PQ.ACCEPTED;
    switch (n) {
        case ew.Eu.AUDIO:
            (tj = !0), e4.eachConnection(t0);
            break;
        case ew.Eu.CAMERA:
            !r && tl && t3(!1);
            break;
        default:
            return !1;
    }
}
function rd() {
    return tv || !1;
}
async function rf() {
    try {
        var e, t, n, i;
        await eb.ZP.ensureModule("discord_krisp");
        let a = eb.ZP.requireModule("discord_krisp");
        (tv = !0),
            (s = null == (e = a.getSdkVersion) ? void 0 : e.call(a)),
            (l = null != (i = null == (t = a.getSuppressionLevel) ? void 0 : t.call(a)) ? i : 100),
            null == (n = a.getNcModels) ||
                n.call(a).then((e) => {
                    (tS = e), r.emitChange();
                }),
            r.emitChange();
    } catch (t) {
        eZ.warn("Failed to load Krisp module: ".concat(t.message)), eE.Z.captureException(t);
        let e = eL.H3.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eL.H3.INITIALIZED : n;
        }
        ep.default.track(eP.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), ns({ noiseCancellation: !1 });
    } finally {
        tO = !1;
    }
}
function rp() {
    return (0, eh.isWindows)() || (0, eh.isLinux)() || (0, eh.isMac)();
}
function r_() {
    !rp() || __OVERLAY__ || tO || tv
        ? (0, eh.isWeb)() && e4.supports(eL.AN.NOISE_CANCELLATION)
            ? ((tv = !0), r.emitChange())
            : (0, eh.isWeb)() && ns({ noiseCancellation: !1 })
        : ((tO = !0), rf());
}
function rm(e) {
    let { enabled: t } = e;
    ep.default.track(eP.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != tT ? tT : null,
        enabled: t,
    }),
        ns({ voiceFilterPlaybackEnabled: t });
}
function rh(e) {
    let { newVoiceFilterId: t } = e;
    ns({ mostRecentlyRequestedVoiceFilter: t }), e4.eachConnection((e) => e.setVoiceFilterId(t));
}
function rg() {
    ns({ mostRecentlyRequestedVoiceFilter: null });
}
function rE(e) {
    let { voiceFilterId: t } = e;
    (tA = tT), (tN = tC), (tT = t), (tC = null === t ? null : Date.now());
}
function rb(e) {
    let t = e.bypassEnabled;
    ns({ bypassSystemInputProcessing: t }), e4.setAudioInputBypassSystemProcessing(t), nq(e.location);
}
function ry(e) {
    rO(e.subsystem);
}
function rO(e) {
    e === eL.iA.AUTOMATIC
        ? (ns({ automaticAudioSubsystem: !0 }), rv())
        : (ns({ automaticAudioSubsystem: !1 }), e4.setAudioSubsystem(e));
}
function rv() {
    e4.queueAudioSubsystem(eL.iA.EXPERIMENTAL);
}
function rS(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && t3(i, null), null != t || null == n)) {
        ty = !1;
        return;
    }
    if (ty) return;
    ty = !0;
    let a = tX();
    (a.mute || a.deaf) &&
        (ns({
            deaf: !1,
            mute: !1,
        }),
        e4.eachConnection(t0));
}
function rI(e) {
    let { application: t } = e;
    e8.add(t.id);
}
function rT(e) {
    let { application: t } = e;
    e8.delete(t.id);
}
function rC(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (e6 = !1), e4.eachConnection(t0);
                break;
            case "video":
                t3(!1);
        }
}
function rA(e) {
    (e6 = e.enabled),
        e.unmute &&
            ns({
                mute: !1,
                deaf: !1,
            }),
        e4.eachConnection(t0);
}
function rN(e) {
    let { enabled: t } = e;
    ei.Z.requestPermission(ew.Eu.CAMERA), t3(t);
}
function rP(e) {
    let { sourceId: t, applicationName: n, quality: i } = e;
    if (!(0, P.CY)() || null == I.Z) return !1;
    let a = null,
        s = null,
        l = e_.Z.getPidFromDesktopSource(t);
    ({ soundshareId: a, soundshareSession: s } = ny(l));
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
        (e4.setClipsSource(null),
        (0, eh.isWindows)() && null != o.desktopSource.soundshareId && T.pn(o.desktopSource.soundshareId)),
        null != a && nO(a, s),
        (o = c);
    let u = tK(),
        d = tX().videoHook;
    e4.setClipsSource({
        desktopDescription: {
            id: o.desktopSource.id,
            soundshareId: o.desktopSource.soundshareId,
            useVideoHook: d,
            useGraphicsCapture: ne(),
            useCaptureDeviceForEncode: !1,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: nn(),
            videoHookStaleFrameTimeoutMs: ez,
            graphicsCaptureStaleFrameTimeoutMs: eq,
            hdrCaptureMode: u,
        },
        quality: i,
        applicationName: n,
    });
}
function rR(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((o = null), e4.setClipsSource(null));
}
function rw(e) {
    var t, n, r, i;
    let { settings: a } = e;
    if ((null == a ? void 0 : a.desktopSettings) != null) {
        let e = null,
            r = null,
            { sourceId: i, sound: o } = a.desktopSettings,
            s = null != (t = a.context) ? t : eL.Yn.DEFAULT,
            l =
                null != (n = a.qualityOptions)
                    ? n
                    : {
                          resolution: 720,
                          frameRate: 30,
                      },
            c = !1 === o ? null : e_.Z.getPidFromDesktopSource(i);
        eh.isPlatformEmbedded &&
            !0 === o &&
            (({ soundshareId: e, soundshareSession: r } = ny(c)), null != e && nO(e, r)),
            t1(s),
            t3(s === eL.Yn.STREAM && tl, {
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
        let e = null != (r = a.context) ? r : eL.Yn.DEFAULT,
            { videoDeviceGuid: t, audioDeviceGuid: n } = a.cameraSettings,
            o = e === eL.Yn.STREAM && tl,
            s =
                null != (i = a.qualityOptions)
                    ? i
                    : {
                          resolution: 720,
                          frameRate: 30,
                      };
        t3(o, {
            cameraSource: {
                videoDeviceGuid: t,
                audioDeviceGuid: n,
            },
            quality: {
                resolution: s.resolution,
                frameRate: s.frameRate,
            },
        });
    } else t3(tl, null);
}
function rD(e) {
    let { section: t } = e;
    return t === eP.oAB.VOICE && nu(), !1;
}
function rx() {
    return e4.eachConnection(t7), !1;
}
function rL(e) {
    let { enabled: t } = e,
        n = ns({ aecDumpEnabled: t });
    e4.setAecDump(n.aecDumpEnabled);
}
function rj(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (e5 = Object.values(eL.Yn).reduce((e, n) => {
        let r = n,
            i = e3();
        return (e[r] = m().merge(i, t[r])), e;
    }, {})),
        O.K.set(eF, e5),
        nc();
}
function rM(e) {
    let { state: t } = e,
        n = L.Z.isEnabled();
    if (t === eP.$7l.BACKGROUND && tl && !n) (tm = !0), t3(!1);
    else {
        if (t !== eP.$7l.ACTIVE || !tm) return !1;
        (tm = !1), t3(!0);
    }
    return !0;
}
function rk(e) {
    e4.eachConnection((t) => t.setBitRate(e.bitrate));
}
function rU() {
    if ((!tl && null == a) || null != eT.Z.getRTCConnectionId()) return !1;
    t3(!1, null);
}
function rG() {
    return !!tR && ((tR = !1), !0);
}
function rZ(e) {
    e4.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function rF(e) {
    let { settings: t } = e;
    e4.applyMediaFilterSettings(t).finally(() => {
        (tw = !1), r.emitChange();
    });
}
function rB() {
    tw = !0;
}
function rV() {
    tw = !1;
}
function rH(e) {
    tB = e.enabled;
}
function rY() {
    if ((0, eh.isDesktop)() && eh.isPlatformEmbedded && !tW) {
        tW = !0;
        let e = async () => {
            let t = await new Promise((e) => {
                eb.ZP.pollQueueMetrics((t) => {
                    e(t);
                });
            });
            t.periodMs = eL.rp;
            let n = rK(t);
            null !== n && ep.default.track(eP.rMx.VOICE_QUEUE_METRICS, n), setTimeout(e, eL.rp);
        };
        setTimeout(e, eL.rp);
    }
}
class rW extends (d = b.ZP.Store) {
    initialize() {
        t9(),
            no(),
            r_(),
            nM(),
            rY(),
            (tZ = {
                [eL.AN.VIDEO]: e4.supports(eL.AN.VIDEO),
                [eL.AN.DESKTOP_CAPTURE]: e4.supports(eL.AN.DESKTOP_CAPTURE),
                [eL.AN.HYBRID_VIDEO]: e4.supports(eL.AN.HYBRID_VIDEO),
            }),
            this.waitFor(eO.default, ev.Z, eS.Z, eI.Z, A.Z, x.Z, eT.Z, j.ZP, es.Z, eu.Z, eA.default, eN.Z, ef.Z);
    }
    supports(e) {
        return e4.supports(e);
    }
    supportsInApp(e) {
        return tZ[e] || e4.supports(e);
    }
    isSupported() {
        return e4.supported();
    }
    isNoiseSuppressionSupported() {
        return e4.supports(eL.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return rd();
    }
    isNoiseCancellationError() {
        return tR;
    }
    isAutomaticGainControlSupported() {
        return e4.supports(eL.AN.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !ni() && (e4.supports(eL.AN.LEGACY_AUDIO_SUBSYSTEM) || e4.supports(eL.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return e4.supports(eL.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === e4.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return rd();
    }
    isAecDumpSupported() {
        return e4.supports(eL.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return e4.supports(eL.AN.VIDEO) && e4.supports(eL.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        return (
            (null == (e = eI.Z.getChannel(tP)) ? void 0 : e.type) !== eP.d4z.GUILD_STAGE_VOICE &&
            e$ &&
            K.Z.simulcastEnabled()
        );
    }
    getAecDump() {
        return tX().aecDumpEnabled;
    }
    getMediaEngine() {
        return e4;
    }
    getVideoComponent() {
        return e4.Video;
    }
    getCameraComponent() {
        return e4.Camera;
    }
    getKrispSuppressionLevel() {
        return null != l ? l : 100;
    }
    getKrispEnableStats() {
        return tI;
    }
    isEnabled() {
        return e6;
    }
    isMute() {
        return this.isSelfMute() || ti;
    }
    isDeaf() {
        return this.isSelfDeaf() || ts;
    }
    hasContext(e) {
        return null != e5[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eL.Yn.DEFAULT;
        return e === eL.Yn.DEFAULT && ta;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eL.Yn.DEFAULT;
        return (
            !this.isEnabled() ||
            tX(e).mute ||
            !ei.Z.didHavePermission(ew.Eu.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eL.Yn.DEFAULT && to)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return td;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        td = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eL.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && eS.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return tB;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eL.Yn.DEFAULT;
        return !this.isSupported() || tX(e).deaf;
    }
    isVideoEnabled() {
        return tl && th;
    }
    isVideoAvailable() {
        return Object.values(tr).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eL.Yn.STREAM;
        return e9 === e && null != a;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eL.Yn.STREAM;
        return e9 === t && null != a && (null == (e = a.desktopSource) ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eL.Yn.DEFAULT;
        return e !== eO.default.getId() && (tX(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return e4.supports(eL.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eL.Yn.DEFAULT;
        return null != (t = tX(n).disabledLocalVideos[e]) && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eL.Yn.DEFAULT;
        return null != (t = tX(n).videoToggleStateMap[e]) ? t : eP.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eL.Yn.DEFAULT;
        return t === eL.Yn.DEFAULT && tk.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eL.Yn.DEFAULT;
        return e === eL.Yn.DEFAULT && tk.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tw;
    }
    isNativeAudioPermissionReady() {
        return tj;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return e9;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return te;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eL.Yn.DEFAULT,
            n = tX(t).localPans[e];
        return null != n ? n : eK;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eL.Yn.DEFAULT,
            n = t === eL.Yn.STREAM ? eL.Yh : eL.Qx,
            r = tX(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return tX().inputVolume;
    }
    getOutputVolume() {
        return tX().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eL.Yn.DEFAULT;
        return tX(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eL.Yn.DEFAULT;
        return tX(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return tT;
    }
    getActiveVoiceFilterAppliedAt() {
        return tC;
    }
    getPreviousVoiceFilter() {
        return tA;
    }
    getPreviousVoiceFilterAppliedAt() {
        return tN;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return tX().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return tX().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            m().each(e5, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === eP.pM4.PUSH_TO_TALK && e8.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return np(tt, tX().inputDeviceId);
    }
    getOutputDeviceId() {
        return np(tn, tX().outputDeviceId);
    }
    getVideoDeviceId() {
        return np(tr, tX().videoDeviceId);
    }
    getInputDevices() {
        return tt;
    }
    getOutputDevices() {
        return tn;
    }
    getVideoDevices() {
        return tr;
    }
    getEchoCancellation() {
        let e = tX();
        return eS.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return e4.supports(eL.AN.SIDECHAIN_COMPRESSION) && tX().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return tX().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return tX().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tx && tx;
    }
    getLoopback() {
        return tG.size > 0;
    }
    getLoopbackReasons() {
        return tG;
    }
    getNoiseSuppression() {
        let e = tX();
        return eS.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tX();
        return eS.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return tX().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return tX().noiseCancellation;
    }
    getHardwareEncoding() {
        return e$;
    }
    getEnableSilenceWarning() {
        return tX().silenceWarning;
    }
    getDebugLogging() {
        return e4.getDebugLogging();
    }
    getQoS() {
        return tX().qos;
    }
    getAttenuation() {
        return tX().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return tX().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return tX().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return nr() && tX().automaticAudioSubsystem ? eL.iA.AUTOMATIC : e4.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return e4.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return tX().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === ex._.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eL.Yn.DEFAULT;
        return tX(e);
    }
    getState() {
        return {
            settingsByContext: e5,
            inputDevices: tt,
            outputDevices: tn,
            appSupported: tZ,
            krispModuleLoaded: tv,
            krispVersion: s,
            krispSuppressionLevel: l,
            goLiveSource: a,
            goLiveContext: e9,
        };
    }
    getInputDetected() {
        return tg;
    }
    getNoInputDetectedNotice() {
        return tb;
    }
    getPacketDelay() {
        return eh.isPlatformEmbedded || this.getMode() !== eP.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        e4.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return e7;
    }
    getVideoHook() {
        return tX().videoHook;
    }
    supportsVideoHook() {
        return e4.supports(eL.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tX().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return (
            e4.supports(eL.AN.EXPERIMENTAL_SOUNDSHARE) &&
            g().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eR.T6)
        );
    }
    supportsHookSoundshare() {
        return (
            (0, eh.isWindows)() &&
            e4.supports(eL.AN.SOUNDSHARE) &&
            g().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eR.sA)
        );
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = tX().useSystemScreensharePicker,
            n = (0, eh.isLinux)();
        return e && (null != t ? t : n);
    }
    supportsSystemScreensharePicker() {
        return e4.supports(eL.AN.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return tY;
    }
    getUseGamescopeCapture() {
        return tH;
    }
    getEverSpeakingWhileMuted() {
        return tf;
    }
    getSpeakingWhileMuted() {
        return tp;
    }
    getKrispModelOverride() {
        return c;
    }
    getKrispModels() {
        return tS;
    }
    getKrispVadActivationThreshold() {
        var e;
        return null != (e = tX().modeOptions.vadKrispActivationThreshold) ? e : eW;
    }
    hasActiveCallKitCall() {
        return tV;
    }
    setHasActiveCallKitCall(e) {
        tV = e;
    }
    supportsScreenSoundshare() {
        return (0, eh.isMac)()
            ? e4.supports(eL.AN.SOUNDSHARE) &&
                  g().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eR.yG) &&
                  nn()
            : (0, eh.isWindows)()
              ? e4.supports(eL.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, eh.isLinux)() && e4.supports(eL.AN.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, eh.isWindows)()) {
            var e, t;
            return null == (t = this.getInputDevices()[this.getInputDeviceId()]) || null == (e = t.effects)
                ? void 0
                : e.find((e) => e === e0);
        }
        if ((0, eh.isMac)() || (0, eh.isIOS)()) return u;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eL.Yn.DEFAULT,
            t = this.supports(eL.AN.VIDEO)
                ? [
                      {
                          rid: "100",
                          type: e === eL.Yn.DEFAULT ? eL.Tr.VIDEO : eL.Tr.SCREEN,
                          quality: eL.y7,
                      },
                  ]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === eL.Yn.DEFAULT || this.goLiveSimulcastEnabled()) &&
                t.push({
                    rid: "50",
                    type: e === eL.Yn.DEFAULT ? eL.Tr.VIDEO : eL.Tr.SCREEN,
                    quality: eL.LD,
                }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: !1 };
        return (
            (0, eh.isWeb)() &&
                (e.fetchDave = J.NJ.getCurrentConfig({
                    location: "MediaEngineStore fetchAsyncResources",
                }).loadWasmModule),
            e4.fetchAsyncResources(e)
        );
    }
    startDavePreload() {
        if (!tD && ((tD = !0), (0, eh.isWeb)())) {
            let e = { fetchDave: !0 };
            e4.fetchAsyncResources(e).catch((e) => {
                eZ.warn("DAVE preload failed:", e), eE.Z.captureException(e);
            });
        }
    }
    getSupportedSecureFramesProtocolVersion() {
        if ((0, eh.isWeb)()) {
            let { useWasmModule: e } = J.NJ.getCurrentConfig({
                location: "MediaEngineStore getSupportedSecureFramesProtocolVersion",
            });
            if (!e) return 0;
        }
        let e = e4.getSupportedSecureFramesProtocolVersion();
        114 === e && (e = 1);
        let t = J.m8.getCurrentConfig({ location: "MediaEngineStore" }),
            n = J.Th.getConfig({ location: "MediaEngineStore" });
        return (t.canSupportDaveProtocol || (n.allowOptIn && es.Z.getPersistentCodesEnabled())) &&
            e >= t.protocolVersionFloor
            ? e
            : 0;
    }
    hasClipsSource() {
        return null != o;
    }
    getGpuBrand() {
        return tF;
    }
}
function rK(e) {
    if (null == e.taskMetrics || 0 === e.taskMetrics.length || 1 === e.taskMetrics.length) return null;
    let t = {
        metrics_period_ms: e.periodMs,
        total_tasks: 0,
        total_exec_time_ns: 0,
        queue_name: e.queueName,
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
eM(rW, "displayName", "MediaEngineStore");
let rz = (r = new rW(S.Z, {
    VOICE_CHANNEL_SELECT: rS,
    VOICE_STATE_UPDATES: nA,
    CONNECTION_OPEN: nv,
    CONNECTION_CLOSED: nI,
    POST_CONNECTION_OPEN: nT,
    RTC_CONNECTION_STATE: nC,
    AUDIO_SET_TEMPORARY_SELF_MUTE: nN,
    AUDIO_TOGGLE_SELF_MUTE: nP,
    AUDIO_SET_SELF_MUTE: nR,
    AUDIO_TOGGLE_SELF_DEAF: nD,
    AUDIO_TOGGLE_LOCAL_MUTE: nx,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: nL,
    AUDIO_SET_LOCAL_VOLUME: nk,
    AUDIO_SET_LOCAL_PAN: nU,
    AUDIO_SET_MODE: nG,
    AUDIO_SET_INPUT_VOLUME: nZ,
    AUDIO_SET_OUTPUT_VOLUME: nF,
    AUDIO_SET_INPUT_DEVICE: nB,
    AUDIO_SET_OUTPUT_DEVICE: nV,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: nY,
    AUDIO_SET_ECHO_CANCELLATION: nQ,
    AUDIO_SET_SIDECHAIN_COMPRESSION: nX,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nJ,
    AUDIO_SET_LOOPBACK: n0,
    AUDIO_SET_NOISE_SUPPRESSION: n4,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: n5,
    AUDIO_SET_NOISE_CANCELLATION: n8,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: n6,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: n9,
    AUDIO_SET_DEBUG_LOGGING: re,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: rt,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: n7,
    MEDIA_ENGINE_SET_VIDEO_HOOK: rn,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: rr,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: ri,
    AUDIO_SET_ATTENUATION: ra,
    AUDIO_SET_QOS: ro,
    MEDIA_ENGINE_DEVICES: nK,
    AUDIO_VOLUME_CHANGE: nz,
    AUDIO_RESET: rs,
    AUDIO_INPUT_DETECTED: rl,
    AUDIO_SET_SUBSYSTEM: ry,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rb,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rA,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rN,
    MEDIA_ENGINE_PERMISSION: rC,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rw,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nH,
    MEDIA_ENGINE_INTERACTION_REQUIRED: nW,
    USER_SETTINGS_MODAL_INIT: rD,
    USER_SETTINGS_MODAL_SET_SECTION: rD,
    CERTIFIED_DEVICES_SET: rx,
    RPC_APP_CONNECTED: rI,
    RPC_APP_DISCONNECTED: rT,
    OVERLAY_INITIALIZE: nS,
    APP_STATE_UPDATE: rM,
    SET_CHANNEL_BITRATE: rk,
    SET_VAD_PERMISSION: rc,
    SET_NATIVE_PERMISSION: ru,
    SET_CHANNEL_VIDEO_QUALITY_MODE: rZ,
    MEDIA_ENGINE_SET_AEC_DUMP: rL,
    MEDIA_ENGINE_RESET_SETTINGS: rj,
    CHANNEL_DELETE: rU,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rG,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rF,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rB,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rV,
    USER_SETTINGS_PROTO_UPDATE: nw,
    CLIPS_INIT: rP,
    CLIPS_SETTINGS_UPDATE: rR,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rH,
    VOICE_FILTER_REQUEST_SWITCH: rh,
    VOICE_FILTER_LOOPBACK_TOGGLE: rm,
    VOICE_FILTER_APPLIED: rE,
    VOICE_FILTER_DOWNLOAD_FAILED: rg,
    VOICE_FILTER_APPLY_FAILED: rg,
}));
