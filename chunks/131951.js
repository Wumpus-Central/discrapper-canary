let r, i, a, o, s, l, c;
n.d(t, { Z: () => rV }), n(388685), n(953529), n(457542), n(539854), n(642613), n(49124), n(337869);
var u,
    d = n(512722),
    f = n.n(d),
    p = n(392711),
    _ = n.n(p),
    m = n(209739),
    h = n.n(m),
    g = n(404097),
    E = n(442837),
    b = n(46973),
    y = n(433517),
    O = n(846519),
    v = n(570140),
    S = n(579806),
    I = n(887278),
    T = n(547727),
    A = n(435064),
    C = n(779618),
    N = n(341569),
    P = n(710845),
    R = n(535911),
    w = n(458725),
    D = n(353926),
    x = n(646047),
    L = n(594190),
    j = n(502286),
    M = n(883794),
    k = n(314080),
    U = n(822253),
    G = n(177732),
    Z = n(960708),
    B = n(502450),
    F = n(294473),
    V = n(706629),
    H = n(159142),
    Y = n(27955),
    W = n(166884),
    K = n(126382),
    z = n(422797),
    q = n(805877),
    Q = n(837968),
    X = n(529558),
    J = n(705946),
    $ = n(412412),
    ee = n(441167),
    et = n(338336),
    en = n(751571),
    er = n(311473),
    ei = n(615830),
    ea = n(725380),
    eo = n(383451),
    es = n(581883),
    el = n(875527),
    ec = n(420439),
    eu = n(626135),
    ed = n(12647),
    ef = n(70956),
    ep = n(358085),
    e_ = n(747268),
    em = n(960048),
    eh = n(998502),
    eg = n(13140),
    eE = n(314897),
    eb = n(967368),
    ey = n(463395),
    eO = n(592125),
    ev = n(19780),
    eS = n(704806),
    eI = n(594174),
    eT = n(631768),
    eA = n(981631),
    eC = n(70722),
    eN = n(761274),
    eP = n(526761),
    eR = n(345655),
    ew = n(65154),
    eD = n(388032);
function ex(e, t, n) {
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
                ex(e, t, n[t]);
            });
    }
    return e;
}
function ej(e, t) {
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
            : ej(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ek = new P.Z("MediaEngineStore"),
    eU = "MediaEngineStore",
    eG = 4,
    eZ = 1,
    eB = 1,
    eF = 1,
    eV = 0.5,
    eH = {
        left: 1,
        right: 1,
    },
    eY = 500,
    eW = 5 * ef.Z.Millis.SECOND,
    eK = -60,
    ez = 100,
    eq = 2 * ef.Z.Millis.SECOND,
    eQ = !0,
    eX = 0;
function eJ() {
    return {
        mode: eA.pM4.VOICE_ACTIVITY,
        modeOptions: {
            threshold: eK,
            autoThreshold: ep.isPlatformEmbedded || __OVERLAY__,
            vadUseKrisp: !0,
            vadKrispActivationThreshold: eV,
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
        inputVolume: ew.Qx,
        outputVolume: ew.Qx,
        inputDeviceId: ew.w5,
        outputDeviceId: ew.w5,
        videoDeviceId: ew.w5,
        qos: !1,
        qosMigrated: !1,
        videoHook: e0.supports(ew.AN.VIDEO_HOOK),
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
let e$ = {
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
            mode: eA.pM4.VOICE_ACTIVITY,
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
    e0 = (0, b.Mt)((0, b.jj)());
ek.enableNativeLogger(!0);
let e1 = {},
    e3 = new Set([ew.Yn.DEFAULT]),
    e2 = e0.supports(ew.AN.AUTO_ENABLE),
    e4 = !1,
    e5 = ew.Yn.STREAM,
    e8 = performance.now(),
    e6 = { [ew.w5]: no("No Input Devices") },
    e7 = { [ew.w5]: no("No Output Devices") },
    e9 = { [ew.w5]: no("No Video Devices") },
    te = !1,
    tt = !1,
    tn = !1,
    tr = !1,
    ti = !1,
    ta = ew.Av,
    to = ew.Av,
    ts = !1,
    tl = !1,
    tc = !1,
    tu = new O.V7(),
    td = !1,
    tf = !1,
    tp = null,
    t_ = !1,
    tm = !1,
    th = !1,
    tg = !1,
    tE = !1,
    tb = [],
    ty = !1,
    tO = null,
    tv = null,
    tS = null,
    tI = null,
    tT = null,
    tA = !1,
    tC = !1,
    tN = !1,
    tP = null,
    tR = null,
    tw = !1;
en.Z.hasPermission(eN.Eu.AUDIO, { showAuthorizationError: !1 }),
    en.Z.hasPermission(eN.Eu.CAMERA, { showAuthorizationError: !1 });
let tD = !1,
    tx = new Set(),
    tL = tD,
    tj = new Set(),
    tM = {},
    tk = null,
    tU = !0,
    tG = !1,
    tZ = !1,
    tB = !1,
    tF = !1;
function tV() {
    var e, t;
    return null != (t = null == (e = eI.default.getCurrentUser()) ? void 0 : e.isStaff()) && t
        ? "always"
        : e_.Z === g.R.CANARY
          ? "permittedDevicesOnly"
          : "never";
}
async function tH() {
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
function tY() {
    return null != tR
        ? tR
        : "undefined" != typeof window
          ? (tR = tH().then((e) => ((tP = e), e)))
          : Promise.resolve(!1);
}
function tW() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ew.Yn.DEFAULT,
        t = e1[e];
    return null == t && ((t = eJ()), (e1[e] = t)), t;
}
function tK() {
    var e, t, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ew.Yn.DEFAULT,
        i = tW(r),
        a = e$[null != (e = i.activeInputProfile) ? e : eR._.CUSTOM],
        o = eL({}, null != (t = i.modeOptions) ? t : {}, null != (n = a.modeOptions) ? n : {});
    if (
        (null == o.vadDuringPreProcess && (o.vadDuringPreProcess = (0, J.C)({ location: "getSettings" }).enabled),
        (null == o.vadKrispActivationThreshold && !0 === a.automaticGainControl) || !0 === i.automaticGainControl)
    ) {
        let e = (0, M.U)({ location: "getSettings" });
        null != e.vadKrispActivationThreshold && (o.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return eM(eL({}, i, a), { modeOptions: o });
}
function tz(e) {
    var t, n;
    let r = tK(e.context),
        i = r.mode;
    e.context === ew.Yn.DEFAULT &&
        ((0, eo.f)({
            location: "setInputMode",
            autoTrackExposure: !1,
        }).enableLatching &&
            i === eA.pM4.PUSH_TO_TALK &&
            r.modeOptions.pttLatchingEnabled &&
            (i = eA.pM4.VOICE_ACTIVITY),
        (0, Q.I)(!1, !1, !1)),
        e.setInputMode(i, {
            vadThreshold: r.modeOptions.threshold,
            vadAutoThreshold: r.modeOptions.autoThreshold,
            vadUseKrisp: r.modeOptions.vadUseKrisp && ro(),
            vadKrispActivationThreshold: null != (t = r.modeOptions.vadKrispActivationThreshold) ? t : eV,
            vadLeading: r.modeOptions.vadLeading,
            vadTrailing: r.modeOptions.vadTrailing,
            vadDuringPreProcess: null != (n = r.modeOptions.vadDuringPreProcess) && n,
            pttReleaseDelay: Math.round(r.modeOptions.delay),
        });
}
function tq(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ew.Qx;
    return _().clamp(e, 0, t);
}
function tQ(e) {
    let t = tK(e.context),
        n = !e2 || t.mute || t.deaf;
    e.context === ew.Yn.DEFAULT
        ? (n = n || te || tt || tn || !en.Z.didHavePermission(eN.Eu.AUDIO))
        : e.context === ew.Yn.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === ew.Yn.DEFAULT && T.Z.updateNativeMute();
}
function tX(e) {
    e !== e5 && (null != a && e0.setGoLiveSource(null, e5), (e5 = e));
}
function tJ() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ti,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        s = a;
    if (
        ((null == s ? void 0 : s.desktopSource) != null &&
            s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? void 0 : e.id) &&
            (null != s.desktopSource.soundshareId && (0, ep.isWindows)() && I.pn(s.desktopSource.soundshareId),
            e0.setGoLiveSource(null, e5)),
        (null == s ? void 0 : s.cameraSource) != null &&
            (s.cameraSource.videoDeviceGuid !==
                (null == o || null == (t = o.cameraSource) ? void 0 : t.videoDeviceGuid) ||
                s.cameraSource.audioDeviceGuid !==
                    (null == o || null == (n = o.cameraSource) ? void 0 : n.audioDeviceGuid)) &&
            e0.setGoLiveSource(null, e5),
        ti || i)
    ) {
        let e = tK().videoDeviceId;
        ti && e === ew.w5 && to === ew.w5 && ta !== ew.Av ? (e = ta) : (to = e),
            (ta = (ti = i) ? nl(e9, e) : ew.Av),
            e0.setVideoInputDevice(ta);
    }
    if (((a = o), null != o)) {
        let e = {
            resolution: o.quality.resolution,
            frameRate: o.quality.frameRate,
        };
        if (null != o.desktopSource) {
            let t = tV(),
                n = tK().videoHook,
                i = t5(),
                a = i ? (t8() ? eC.zj : eC.ZM) : 0,
                s = (0, ep.isWindows)() && (0, $.t)("updateVideo").enabled;
            e0.setGoLiveSource(
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
                        allowScreenCaptureKit: t6(),
                        videoHookStaleFrameTimeoutMs: eY,
                        graphicsCaptureStaleFrameTimeoutMs: eW,
                        hdrCaptureMode: t,
                        enableGlobalFramePoolLock: (0, Y.T)({ location: "updateVideo" }).enabled,
                    },
                    quality: e,
                },
                e5,
            );
        }
        null != o.cameraSource &&
            e0.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: o.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                e5,
            );
    }
}
function t$(e) {
    switch (e) {
        case ew.H3.CPU_OVERUSE:
            return w.Nk.NoiseCancellerCpuOveruse;
        case ew.H3.FAILED:
            return w.Nk.NoiseCancellerFailed;
        case ew.H3.VAD_CPU_OVERUSE:
            return w.Nk.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function t0(e) {
    let t = (0, M.U)({
        location: "getAutomaticGainControlConfig",
        disable: !e,
    }).noiseCancellationConfig;
    return eL({ enabled: e }, t);
}
function t1(e, t) {
    e.setAutomaticGainControl(t0(t));
}
async function t3(e, t) {
    if ((0, ep.isIOS)() || (0, ep.isMac)()) {
        let e = await e0.getSystemMicrophoneMode();
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
    let { noiseCancellationAfterProcessing: r, vadAfterWebrtc: i } = (0, z.$)({ location: "setNoiseCancellation" });
    e.setNoiseCancellationAfterProcessing(r), e.setVADAfterWebrtc(i);
}
function t2(e) {
    let t = tK(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(ey.Z.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(ey.Z.hasNoiseSuppression(n) || t.noiseSuppression),
        t1(e, ey.Z.hasAutomaticGainControl(n) || t.automaticGainControl),
        t3(e, t.noiseCancellation),
        e.setVoiceFilterId(tO),
        (0, ep.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function t4() {
    e0.on(b.aB.Connection, (e) => {
        tz(e), tQ(e), t2(e);
        let t = tK();
        e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
            e.setQoS(t.qos),
            (0, K.D)({ location: "setupMediaEngine" }).enabled &&
                (e.setExperimentFlag(ew.V8.H265_HARDWARE_ONLY, !0),
                (0, ep.isWindows)()
                    ? tY().then((t) => {
                          e.setExperimentFlag(ew.V8.H265_HARDWARE_DECODE_AVAILABLE, t);
                      })
                    : (0, ep.isMac)() && e.setExperimentFlag(ew.V8.H265_HARDWARE_DECODE_AVAILABLE, !0));
        let n = ev.Z.getGuildId(),
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
        i && e.setExperimentFlag(ew.V8.MUTE_BEFORE_PROCESSING, !0),
            o && e.setExperimentFlag(ew.V8.PTT_BEFORE_PROCESSING, !0),
            s && e.setExperimentFlag(ew.V8.SKIP_ENCODE, !0),
            (0, q.J)({ location: "setupMediaEngine" }).enabled &&
                e.setExperimentFlag(ew.V8.LOW_LATENCY_RATE_CONTROL, !0);
        let l = !1,
            c = !0;
        if (
            (e.setExperimentFlag(ew.V8.RESET_DECODER_ON_ERRORS, !0),
            l && e.setExperimentFlag(ew.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0),
            c && e.setExperimentFlag(ew.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0),
            e.context === ew.Yn.STREAM)
        ) {
            let t = nu(e7);
            e.setSoundshareDiscardRearChannels(t);
            let { simulcastEnabled: n, lqStreamBitrate: r } = W.Z.getConfig();
            e.configureGoLiveSimulcast(n, r);
        }
        if (
            ((0, ep.isWindows)()
                ? (null == tk ? void 0 : tk.startsWith("NVIDIA")) || (null == tk ? void 0 : tk.startsWith("AMD"))
                    ? e.setExperimentFlag(ew.V8.SIGNAL_AV1, !0)
                    : e.setExperimentFlag(ew.V8.SIGNAL_AV1_DECODE, !0)
                : ((0, ep.isMac)() || (0, ep.isLinux)()) && e.setExperimentFlag(ew.V8.SIGNAL_AV1_DECODE, !0),
            (0, ep.isWindows)() && e.setExperimentFlag(ew.V8.SIGNAL_AV1_HARDWARE_DECODE, !0),
            (0, ep.isWeb)())
        ) {
            let { enabled: t } = (0, H.A)("MediaEngineStore");
            e.setExperimentFlag(ew.V8.BROWSER_HEVC, t);
        }
        if ((e0.setHasFullbandPerformance((0, R.Z)()), e.setRemoteAudioHistory(1000), (0, C.Z)(r))) {
            let { enableViewerClipping: t } = ee.Z.getCurrentConfig(
                { location: "f627ab_15" },
                { autoTrackExposure: !1 },
            );
            e.setViewerSideClip(t), e.setClipsKeyFrameInterval(ew.ux);
        }
        for (let n of ((t = tK(e.context)), e.setPostponeDecodeLevel(ez), Object.keys(t.localMutes)))
            n !== eE.default.getId() && e.setLocalMute(n, t.localMutes[n]);
        for (let n of Object.keys(t.localVolumes)) n !== eE.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
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
            e.context === ew.Yn.DEFAULT &&
                ((tl = !1),
                (tc = !1),
                e.on(b.Sh.SpeakingWhileMuted, () => {
                    (tl = !0),
                        (tc = !0),
                        r.emitChange(),
                        tu.stop(),
                        tu.start(eq, () => {
                            (tc = !1), r.emitChange();
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
                    eu.default.track(
                        eA.rMx.VIDEOHOOK_INITIALIZED,
                        eL(
                            {
                                backend: e,
                                format: t,
                                framebuffer_format: n,
                                sample_count: r,
                                success: i,
                                reinitialization: o,
                            },
                            (0, j.Z)(null == a ? void 0 : a.desktopSource),
                        ),
                    );
            }),
            e.on(b.Sh.NoiseCancellationError, (e) => {
                ek.warn("noisecancellererror event: ".concat(e)),
                    (0, w.kr)({
                        type: w.u.NOISE_CANCELLER_ERROR,
                        underlyingError: t$(e),
                    }),
                    (tA = !0),
                    eu.default.track(eA.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
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
                ek.warn("voiceactivitydetectorerror event: ".concat(e)),
                    (0, w.kr)({
                        type: w.u.NOISE_CANCELLER_ERROR,
                        underlyingError: t$(e),
                    }),
                    eu.default.track(eA.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    v.Z.dispatch({
                        type: "AUDIO_SET_MODE",
                        context: ew.Yn.DEFAULT,
                        mode: eA.pM4.VOICE_ACTIVITY,
                        options: eM(eL({}, tK(ew.Yn.DEFAULT).modeOptions), { vadUseKrisp: !1 }),
                    }),
                    v.Z.dispatch({
                        type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
                        code: e,
                    });
            }),
            e.on(b.Sh.SdpError, (e, t, n, r) => {
                eu.default.track(eA.rMx.SDP_ERROR, {
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
            e.setBitRate(eb.Z.bitrate),
            e.applyVideoQualityMode(eT.Z.mode),
            e0.supports(ew.AN.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                e0.setAsyncVideoInputDeviceInit((0, Z.p)("setupMediaEngine").enabled);
    }),
        e0.on(b.aB.DeviceChange, (e, t, n) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_DEVICES",
                inputDevices: e,
                outputDevices: t,
                videoDevices: n,
            });
        }),
        e0.on(b.aB.VolumeChange, (e, t) => {
            v.Z.dispatch({
                type: "AUDIO_VOLUME_CHANGE",
                inputVolume: e,
                outputVolume: t,
            });
        }),
        e0.on(b.aB.DesktopSourceEnd, (e, t) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                settings: null,
                endReason: e,
                errorCode: t,
            });
        }),
        e0.on(b.aB.AudioPermission, (e) => {
            (tw = !0),
                v.Z.dispatch({
                    type: "MEDIA_ENGINE_PERMISSION",
                    kind: "audio",
                    granted: e,
                });
        }),
        e0.on(b.aB.VideoPermission, (e) => {
            v.Z.dispatch({
                type: "MEDIA_ENGINE_PERMISSION",
                kind: "video",
                granted: e,
            });
        }),
        e0.on(b.aB.WatchdogTimeout, async () => {
            let e;
            try {
                await ed.Z.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
            } catch (t) {
                "number" == typeof t.status && (e = t.status);
            }
            ek.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)),
                eu.default.track(eA.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        e0.on(b.aB.VideoInputInitialized, (e) => {
            eu.default.track(eA.rMx.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired
                    ? null
                    : Math.round(e.timeToFirstFrame * ef.Z.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: ev.Z.getMediaSessionId(),
                rtc_connection_id: ev.Z.getRTCConnectionId(),
            });
        }),
        e0.on(b.aB.AudioInputInitialized, (e) => {
            eu.default.track(eA.rMx.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * ef.Z.Millis.SECOND),
                rtc_connection_id: ev.Z.getRTCConnectionId(),
            });
        }),
        e0.on(b.aB.ClipsRecordingRestartNeeded, () => {
            v.Z.dispatch({ type: "CLIPS_RESTART" });
        }),
        e0.on(b.aB.ClipsInitFailure, (e, t) => {
            v.Z.wait(() => {
                v.Z.dispatch({
                    type: "CLIPS_INIT_FAILURE",
                    errMsg: e,
                    applicationName: t,
                });
            });
        }),
        e0.on(b.aB.ClipsRecordingEnded, (e, t) => {
            var n, r;
            (null == o || null == (n = o.desktopSource) ? void 0 : n.id) === e &&
                (null != t && (null == a || null == (r = a.desktopSource) ? void 0 : r.soundshareId) !== t && I.pn(t),
                (o = null));
        }),
        e0.on(b.aB.NativeScreenSharePickerUpdate, (e, t) => {
            v.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE",
                existing: e,
                content: t,
            });
        }),
        e0.on(b.aB.NativeScreenSharePickerCancel, (e) => {
            v.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL",
                existing: e,
            });
        }),
        e0.on(b.aB.NativeScreenSharePickerError, (e) => {
            v.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_ERROR",
                error: e,
            });
        }),
        e0.on(b.aB.AudioDeviceModuleError, (e, t, n) => {
            eu.default.track(eA.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                audio_device_module: e,
                code: t,
                device_name: n,
            });
        }),
        e0.on(b.aB.VideoCodecError, (e) => {
            let t = "encode" === e.mode ? w.u.VIDEO_ENCODE_ERROR : w.u.VIDEO_DECODE_ERROR,
                n = {
                    videoCodec: e.codecStandard,
                    errorMessage: e.message,
                };
            (0, w.kr)(
                t === w.u.VIDEO_ENCODE_ERROR
                    ? eM(eL({ type: t }, n), { videoEncoder: e.implName })
                    : eM(eL({ type: t }, n), { videoDecoder: e.implName }),
            );
        }),
        e0.on(b.aB.ConnectionStats, (e) => {
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
        e0.on(b.aB.VoiceQueueMetrics, (e) => {
            let t = rF(e);
            null !== t && eu.default.track(eA.rMx.VOICE_QUEUE_METRICS, t);
        }),
        e0.setOnVideoContainerResized((e, t, n) => {
            v.Z.wait(() =>
                v.Z.dispatch({
                    type: "VIDEO_SIZE_UPDATE",
                    streamId: e,
                    width: t,
                    height: n,
                }),
            );
        }),
        nQ(),
        nJ(),
        e0.supports(ew.AN.ASYNC_CLIPS_SOURCE_DEINIT) &&
            e0.setAsyncClipsSourceDeinit((0, B.C)("setupMediaEngine").enabled),
        ne.reset(),
        (0, eS.q)().then((e) => {
            null != e && (tk = e.gpu_brand);
        }),
        e0.on(b.aB.SystemMicrophoneModeChange, (e) => {
            e0.eachConnection(t2);
        });
}
function t5() {
    return (0, ep.isWindows)() && h().satisfies(null === S.Z || void 0 === S.Z ? void 0 : S.Z.os.release, eC.c5);
}
function t8() {
    return (0, ep.isWindows)() && h().satisfies(null === S.Z || void 0 === S.Z ? void 0 : S.Z.os.release, eC.sN);
}
function t6() {
    return (
        (0, ep.isMac)() &&
        e0.supports(ew.AN.SCREEN_CAPTURE_KIT) &&
        h().satisfies(null === S.Z || void 0 === S.Z ? void 0 : S.Z.os.release, eC.C7)
    );
}
function t7() {
    return (
        (0, ep.isWindows)() &&
        e0.supports(ew.AN.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        e0.supports(ew.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function t9() {
    return e0.supports(ew.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
let ne = new (class {
    start() {
        this.started || ((this.started = !0), e0.on(b.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout &&
                (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            e0.removeListener(b.aB.Silence, this.handleSilence),
            v.Z.dispatch({
                type: "AUDIO_INPUT_DETECTED",
                inputDetected: null,
            }));
    }
    update() {
        let e = tK();
        !t_ && ev.Z.getState() === eA.hes.RTC_CONNECTED && e.mode === eA.pM4.VOICE_ACTIVITY && e.silenceWarning
            ? this.start()
            : this.stop();
    }
    reset() {
        this.stop(), this.update();
    }
    constructor() {
        ex(this, "stateChangeTimeout", void 0),
            ex(this, "noVoiceTimeout", 5000),
            ex(this, "voiceTimeout", 1500),
            ex(this, "started", !1),
            ex(this, "handleSilence", (e) => {
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
                                    e && (tm = !0));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout,
                    ));
            });
    }
})();
function nt() {
    var e;
    let t = y.K.get("audio");
    null != t && (y.K.set(eU, { [ew.Yn.DEFAULT]: t }), y.K.remove("audio")),
        (e1 = null != (e = y.K.get(eU)) ? e : {}),
        _().each(e1, (e) => {
            if (
                (_().defaultsDeep(e, eJ()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, eg.Kd)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== eG &&
                    ((e.vadUseKrispSettingVersion = eG), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                !e.vadThrehsoldMigrated)
            ) {
                var t;
                (e.vadThrehsoldMigrated = !0),
                    (null == (t = e.modeOptions) ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = eK);
            }
            e0.supports(ew.AN.SIDECHAIN_COMPRESSION) &&
                e.sidechainCompressionSettingVersion < eF &&
                ((e.sidechainCompressionSettingVersion = eF), (e.sidechainCompression = !0)),
                (0, ep.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== eB &&
                      ((e.ncUseKrispjsSettingVersion = eB), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== eZ &&
                      ((e.ncUseKrispSettingVersion = eZ), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
        }),
        ni();
}
function nn(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ew.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = tW(t);
    return Object.assign(r, e), !__OVERLAY__ && n && y.K.set(eU, e1), r;
}
function nr() {
    y.K.remove(eU), location.reload();
}
function ni() {
    let e = tK();
    e0.setAudioInputDevice(e.inputDeviceId),
        e0.setAudioOutputDevice(e.outputDeviceId),
        tJ(),
        e0.setInputVolume(e.inputVolume),
        e0.setOutputVolume(e.outputVolume),
        e0.setH264Enabled(eQ),
        e0.setAv1Enabled(eQ),
        e0.setH265Enabled(eQ),
        e0.setAecDump(e.aecDumpEnabled),
        e0.setSidechainCompression(e.sidechainCompression),
        e0.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        e0.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing);
}
function na() {
    e2 ||
        e0.enable().then(() =>
            v.Z.dispatch({
                type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
                enabled: !0,
                unmute: !1,
            }),
        );
}
function no(e) {
    return {
        id: ew.w5,
        index: 0,
        name: e,
        disabled: !0,
        guid: void 0,
        hardwareId: void 0,
        containerId: void 0,
    };
}
function ns(e, t) {
    if (0 === e.length) {
        let e = no(t);
        return { [e.id]: e };
    }
    return _()(e)
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
function nl(e, t) {
    var n, r;
    let i = null != (r = null != (n = e[t]) ? n : e[ew.w5]) ? r : _()(e).values().first();
    return null != i ? i.id : t;
}
function nc(e) {
    let t = e6;
    if (((e6 = ns(e, eD.intl.string(eD.t["/QIjDA"]))), !_().isEqual(e6, t))) {
        let e = tK(),
            t = nl(e6, e.inputDeviceId);
        e0.setAudioInputDevice(t);
    }
}
function nu(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nd(e) {
    e0.eachConnection((t) => {
        t.context === ew.Yn.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function nf(e) {
    let t = e7;
    if (((e7 = ns(e, eD.intl.string(eD.t.xlUg0v))), !_().isEqual(e7, t))) {
        let e = tK(),
            n = nl(e7, e.outputDeviceId);
        e0.setAudioOutputDevice(n);
        let r = nu(t),
            i = nu(e7);
        r !== i && nd(i);
    }
}
function np(e) {
    tf = e.length > 0;
    let t = e9;
    if (((e9 = ns(e, eD.intl.string(eD.t.WKWARY))), ti && !_().isEqual(e9, t))) {
        var n;
        let e = void 0 !== e9[ta],
            r = ta === ew.w5 && (null == (n = t[ew.w5]) ? void 0 : n.disabled);
        tJ(e || r);
    }
}
function n_() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        r =
            null != (e = es.Z.settings.audioContextSettings)
                ? e
                : {
                      user: {},
                      stream: {},
                  };
    for (let e of Object.keys(r)) {
        let i = e === eP.u0.USER ? ew.Yn.DEFAULT : ew.Yn.STREAM,
            a = i === ew.Yn.STREAM ? ew.Yh : ew.Qx,
            o = null != (t = r[e]) ? t : {},
            { localMutes: s, localVolumes: l } = tK(i);
        for (let [e, t] of Object.entries(o))
            null == (0, ea.Ky)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== a ? (l[e] = t.volume) : delete l[e],
                e0.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (n)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == o[e] &&
                    (delete s[e],
                    delete l[e],
                    e0.eachConnection((t) => {
                        t.setLocalVolume(e, a), t.setLocalMute(e, !1);
                    }, i));
        nn(
            {
                localMutes: s,
                localVolumes: l,
            },
            i,
        );
    }
}
function nm(e) {
    if (null == r)
        return (
            ek.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
            {
                soundshareId: null,
                soundshareSession: "",
            }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : ed.Z.getAudioPid(e),
            n = "";
        return (
            null != t && (n = ed.Z.generateSessionFromPid(t)),
            {
                soundshareId: t,
                soundshareSession: n,
            }
        );
    }
}
function nh(e, t) {
    (0, ep.isWindows)() &&
        e > 1 &&
        I.YT(e, { soundshare_session: t }).then((t) => {
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
function ng(e) {
    (i = e.sessionId), (te = !1), (tr = !1);
    let t = tK();
    if (
        (t7() && (t9() ? rh(ew.iA.AUTOMATIC) : t.automaticAudioSubsystem && rg()),
        e0.supports(ew.AN.OFFLOAD_ADM_CONTROLS))
    ) {
        let e = !1;
        (0, ep.isDesktop)()
            ? (e = (0, U.E)({ location: "handleConnectionOpen" }).enabled)
            : ((0, ep.isIOS)() || (0, ep.isAndroid)()) && (e = (0, G.W)({ location: "handleConnectionOpen" }).enabled),
            e0.setOffloadAdmControls(e);
    }
    (0, el.wt)({
        location: "MediaEngineStore",
        autoTrackExposure: !1,
    }) &&
        null !== t.mostRecentlyRequestedVoiceFilter &&
        (0, ep.isDesktop)() &&
        (ec.Z.getLastInitAttemptMayHaveCrashed()
            ? (v.Z.dispatch({
                  type: "AUDIO_SET_SELF_MUTE",
                  mute: !0,
                  context: ew.Yn.DEFAULT,
                  playSoundEffect: !0,
              }),
              nn({ mostRecentlyRequestedVoiceFilter: null }))
            : n(358820).r5()),
        n_();
}
function nE(e) {
    let { mediaEngineState: t } = e;
    (e1 = t.settingsByContext),
        (e6 = t.inputDevices),
        (e7 = t.outputDevices),
        (tM = t.appSupported),
        (tE = t.krispModuleLoaded),
        (s = t.krispVersion),
        (e5 = t.goLiveContext);
}
function nb() {
    i = null;
}
function ny() {
    if ((0, ep.isWeb)()) {
        let e = X.NJ.getCurrentConfig({ location: "MediaEngineStore handlePostConnectionOpen" });
        e.loadWasmModule && e.preload && r.startDavePreload();
    }
    return !1;
}
function nO(e) {
    switch (e.state) {
        case eA.hes.CONNECTING:
            na();
            break;
        case eA.hes.RTC_CONNECTING:
            (t_ = !1), (tm = !1);
            break;
        case eA.hes.RTC_CONNECTED:
            tJ();
            break;
        case eA.hes.DISCONNECTED:
            nR(), nw();
    }
    ne.update();
}
function nv(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (te = t.mute || t.suppress), (tr = t.deaf), e0.eachConnection(tQ);
            let e = null != t.guildId && null != t.channelId && null != tT && tT !== t.channelId,
                n = !th && null == t.channelId;
            return tJ(!e && !n && ti), (tT = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== eE.default.getId() || null != ev.Z.getChannelId() || tJ(!1, null), e;
    }, !1);
}
function nS(e) {
    let { mute: t } = e;
    (tt = t), e0.eachConnection(tQ);
}
function nI(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = tK(t);
    if (t === ew.Yn.DEFAULT && (en.Z.requestPermission(eN.Eu.AUDIO), tn)) return !1;
    (r = !i && !r) || (i = !1),
        n || (ts = !0),
        nn(
            {
                mute: r,
                deaf: i,
            },
            t,
        ),
        e0.eachConnection(tQ);
}
function nT(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    nn({ mute: n }, t), r || (ts = !0), e0.eachConnection(tQ);
}
function nA(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== eP.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    n_(!0);
}
function nC(e) {
    let { context: t } = e;
    nn({ deaf: !tK(t).deaf }, t), e0.eachConnection(tQ);
}
function nN(e) {
    let { context: t, userId: n } = e;
    if (n === eE.default.getId()) return;
    let { localMutes: r } = tK(t);
    r[n] ? delete r[n] : (r[n] = !0),
        nn({ localMutes: r }, t),
        e0.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nP(e) {
    var t, n, r, i, a, o, s;
    let { context: l, userId: c, videoToggleState: u, persist: d, isAutomatic: p } = e;
    f()(!(d && p), "These are not allowed to both be true.");
    let _ = u === eA.ZUi.DISABLED,
        { disabledLocalVideos: m } = tK(l),
        h = null != (t = m[c]) && t,
        g = tx.has(c),
        E = u === eA.ZUi.AUTO_ENABLED || u === eA.ZUi.MANUAL_ENABLED;
    ek.info(
        "disableVideo="
            .concat(_, " currentlyDisabled=")
            .concat(h, " currentlyAutoDisabled=")
            .concat(g, ", isVideoShown=")
            .concat(E),
    ),
        f()(!(g && !h), "If you are auto-disabled, then you are also disabled.");
    let b = _ !== h,
        y = l === ew.Yn.DEFAULT,
        O = p && b && y,
        v = d && b && y;
    ek.info(
        "changed="
            .concat(b, " isDefaultContext=")
            .concat(y, " isUpdateCausedByVideoHealthManager=")
            .concat(O, " isManualToggleByUser=")
            .concat(v),
    );
    let { videoToggleStateMap: S } = tK(l);
    if (
        (S[c] === eA.ZUi.AUTO_PROBING &&
            u === eA.ZUi.AUTO_ENABLED &&
            (0, et.Z)(c, _ ? ew.fC.AUTO_DISABLE : ew.fC.AUTO_ENABLE, E),
        (S[c] = u),
        nn({ videoToggleStateMap: S }, l, d),
        u === eA.ZUi.AUTO_PROBING
            ? null == (n = ev.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, !0)
            : null == (r = ev.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, !1),
        tL ||
            (ek.info("isAutoDisableAllowed=".concat(tL, " - disabling VideoHealthManager")),
            null == (a = ev.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()),
        O)
    ) {
        if ((!_ && !g) || (_ && !tL)) return;
        (0, et.Z)(c, _ ? ew.fC.AUTO_DISABLE : ew.fC.AUTO_ENABLE, E), _ ? tx.add(c) : tx.delete(c);
    } else
        v &&
            (g && !_
                ? (ek.info("disallowing auto-disable for this session because of manual override by user"),
                  (tL = !1),
                  null == (s = ev.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(),
                  (0, et.Z)(c, ew.fC.MANUAL_REENABLE, E))
                : (0, et.Z)(c, _ ? ew.fC.MANUAL_DISABLE : ew.fC.MANUAL_ENABLE, E));
    y && !_ && tx.delete(c),
        _ ? (m[c] = !0) : delete m[c],
        nn({ disabledLocalVideos: m }, l, d),
        e0.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(c, null != (t = m[c]) && t);
        }, l);
}
function nR() {
    if (0 === tx.size) return;
    let e = ew.Yn.DEFAULT,
        { disabledLocalVideos: t } = tK(e);
    tx.forEach((n) => {
        f()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            e0.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tx.clear(),
        nn({ disabledLocalVideos: t }, e, !1);
}
function nw() {
    let e = ew.Yn.DEFAULT,
        { videoToggleStateMap: t } = tK(e);
    for (let [e, n] of Object.entries(t)) n === eA.ZUi.AUTO_PROBING && delete t[e];
    nn({ videoToggleStateMap: t }, e, !1);
}
function nD(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === eE.default.getId()) return;
    let i = t === ew.Yn.STREAM ? ew.Yh : ew.Qx,
        { localVolumes: a } = tK(t);
    r === i ? delete a[n] : (a[n] = r), nn({ localVolumes: a }, t), e0.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function nx(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: a } = tK(t);
    (a[n] = {
        left: r,
        right: i,
    }),
        nn({ localPans: a }, t),
        e0.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function nL(e) {
    let { context: t, mode: n, options: r } = e;
    nn(
        {
            mode: n,
            modeOptions: r,
        },
        t,
    ),
        e0.eachConnection(tz),
        ne.update();
}
function nj(e) {
    let { volume: t } = e;
    nn({ inputVolume: tq(t) }), e0.setInputVolume(t);
}
function nM(e) {
    let { volume: t } = e;
    nn({ outputVolume: t }), e0.setOutputVolume(t);
}
function nk(e) {
    let { id: t } = e;
    (t = nl(e6, t)), (e8 = performance.now()), nn({ inputDeviceId: t }), e0.setAudioInputDevice(t);
}
function nU(e) {
    let { id: t } = e;
    nn({ outputDeviceId: (t = nl(e7, t)) }), e0.setAudioOutputDevice(t);
}
function nG(e) {
    let { id: t } = e;
    nn({ videoDeviceId: (t = nl(e9, t)) }), tJ();
}
function nZ(e) {
    let { inputProfile: t } = e;
    nn({ activeInputProfile: t });
    let n = tK();
    e0.eachConnection((e) => {
        tz(e),
            t1(e, n.automaticGainControl),
            e.setEchoCancellation(n.echoCancellation),
            t3(e, n.noiseCancellation),
            e.setNoiseSuppression(n.noiseSuppression);
    }),
        e0.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        ne.update(),
        nX();
}
function nB(e) {
    return e4 !== e.required && ((e4 = e.required), e.required || e0.interact(), !0);
}
function nF(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    nc(t), nf(n), np(r);
}
function nV(e) {
    let { inputVolume: t, outputVolume: n } = e;
    nn({
        inputVolume: tq(t),
        outputVolume: n,
    });
}
function nH(e) {
    var t;
    let n = tK(),
        r = e0.getAudioSubsystem(),
        i = e0.getAudioLayer(),
        a = nl(e6, n.inputDeviceId),
        o = null == (t = e6[a]) ? void 0 : t.name;
    eu.default.track(eA.rMx.VOICE_PROCESSING, {
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
function nY(e) {
    let t = nn({ echoCancellation: e.enabled });
    e0.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nX(), nH(e.location);
}
function nW(e) {
    nz(e.enabled);
}
function nK(e) {
    let t = nn({ sidechainCompressionStrength: e.strength });
    e0.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function nz(e) {
    let t = nn({ sidechainCompression: e });
    e0.setSidechainCompression(t.sidechainCompression);
}
function nq(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tj.add(n) : tj.delete(n), nQ(), nX();
}
function nQ() {
    let e = !tj.has("voice_filter_preview") && !tj.has("mic_test");
    e0.setMaybePreprocessMute(e);
}
function nX() {
    let e = tK(),
        t = tj.size > 0,
        n = e.inputDeviceId,
        r = ey.Z.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        a = ey.Z.hasNoiseSuppression(n) || e.noiseSuppression,
        o = t0(ey.Z.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation,
        l = null !== tO,
        c = tj.has("voice_filter") && 1 === tj.size;
    e0.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: a,
        automaticGainControlConfig: o,
        noiseCancellation: s,
        voiceFilters: l,
        loopbackUseAudioMode: c,
    });
}
async function nJ() {
    var e, t, n, r;
    if (!e0.supports(ew.AN.VAAPI)) return;
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
        ((tB = !0), (tZ = e0.supports(ew.AN.GAMESCOPE_CAPTURE)));
}
function n$(e) {
    let t = nn({ noiseSuppression: e.enabled });
    e0.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nX(), nH(e.location);
}
function n0(e) {
    let t = nn({ automaticGainControl: e.enabled });
    e0.eachConnection((e) => t1(e, t.automaticGainControl)), nX(), nH(e.location);
}
function n1(e) {
    let t = nn({ noiseCancellation: e.enabled });
    e0.eachConnection((e) => t3(e, t.noiseCancellation)), nX(), nH(e.location);
}
function n3(e) {
    er.Z.setKrispModelOverride(e.model), (c = e.model), nX();
}
function n2(e) {
    var t;
    (0, ep.isWeb)() || ((ty = e.enabled), null == (t = e0.setNoiseCancellationEnableStats) || t.call(e0, e.enabled));
}
function n4(e) {
    nn({ silenceWarning: e.enabled }), ne.update();
}
function n5(e) {
    e0.setDebugLogging(e.enabled);
}
function n8(e) {
    let { level: t } = e;
    (l = t), er.Z.setKrispSuppressionLevel(t);
}
function n6(e) {
    nn({ videoHook: e.enabled });
}
function n7(e) {
    nn({ experimentalSoundshare2: e.enabled });
}
function n9(e) {
    let { enabled: t } = e;
    nn({ useSystemScreensharePicker: t });
}
function re(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = nn({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r,
        });
    e0.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function rt(e) {
    let { enabled: t } = e;
    nn({ qos: t }), e0.eachConnection((e) => e.setQoS(t));
}
function rn() {
    nr();
}
function rr(e) {
    let { inputDetected: t } = e;
    (tp = t), !t_ && tp && ((t_ = !0), ne.update());
}
function ri(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === tn) return !1;
    (tn = n), e0.eachConnection(tQ);
}
function ra(e) {
    let { state: t, permissionType: n } = e,
        r = t === eN.PQ.ACCEPTED;
    switch (n) {
        case eN.Eu.AUDIO:
            (tw = !0), e0.eachConnection(tQ);
            break;
        case eN.Eu.CAMERA:
            !r && ti && tJ(!1);
            break;
        default:
            return !1;
    }
}
function ro() {
    return tE || !1;
}
async function rs() {
    try {
        var e, t, n, i;
        await eh.ZP.ensureModule("discord_krisp");
        let a = eh.ZP.requireModule("discord_krisp");
        (tE = !0),
            (s = null == (e = a.getSdkVersion) ? void 0 : e.call(a)),
            (l = null != (i = null == (t = a.getSuppressionLevel) ? void 0 : t.call(a)) ? i : 100),
            null == (n = a.getNcModels) ||
                n.call(a).then((e) => {
                    (tb = e), r.emitChange();
                }),
            r.emitChange();
    } catch (t) {
        ek.warn("Failed to load Krisp module: ".concat(t.message)), em.Z.captureException(t);
        let e = ew.H3.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? ew.H3.INITIALIZED : n;
        }
        eu.default.track(eA.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), nn({ noiseCancellation: !1 });
    } finally {
        tg = !1;
    }
}
function rl() {
    return (0, ep.isWindows)() || (0, ep.isLinux)() || (0, ep.isMac)();
}
function rc() {
    !rl() || __OVERLAY__ || tg || tE
        ? (0, ep.isWeb)() && e0.supports(ew.AN.NOISE_CANCELLATION)
            ? ((tE = !0), r.emitChange())
            : (0, ep.isWeb)() && nn({ noiseCancellation: !1 })
        : ((tg = !0), rs());
}
function ru(e) {
    let { enabled: t } = e;
    eu.default.track(eA.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != tO ? tO : null,
        enabled: t,
    }),
        nn({ voiceFilterPlaybackEnabled: t });
}
function rd(e) {
    let { newVoiceFilterId: t } = e;
    nn({ mostRecentlyRequestedVoiceFilter: t }), e0.eachConnection((e) => e.setVoiceFilterId(t));
}
function rf() {
    nn({ mostRecentlyRequestedVoiceFilter: null });
}
function rp(e) {
    let { voiceFilterId: t } = e;
    (tS = tO), (tI = tv), (tO = t), (tv = null === t ? null : Date.now());
}
function r_(e) {
    let t = e.bypassEnabled;
    nn({ bypassSystemInputProcessing: t }), e0.setAudioInputBypassSystemProcessing(t), nH(e.location);
}
function rm(e) {
    rh(e.subsystem);
}
function rh(e) {
    e === ew.iA.AUTOMATIC
        ? (nn({ automaticAudioSubsystem: !0 }), rg())
        : (nn({ automaticAudioSubsystem: !1 }), e0.setAudioSubsystem(e));
}
function rg() {
    e0.queueAudioSubsystem(ew.iA.EXPERIMENTAL);
}
function rE(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && tJ(i, null), null != t || null == n)) {
        th = !1;
        return;
    }
    if (th) return;
    th = !0;
    let a = tK();
    (a.mute || a.deaf) &&
        (nn({
            deaf: !1,
            mute: !1,
        }),
        e0.eachConnection(tQ));
}
function rb(e) {
    let { application: t } = e;
    e3.add(t.id);
}
function ry(e) {
    let { application: t } = e;
    e3.delete(t.id);
}
function rO(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (e2 = !1), e0.eachConnection(tQ);
                break;
            case "video":
                tJ(!1);
        }
}
function rv(e) {
    (e2 = e.enabled),
        e.unmute &&
            nn({
                mute: !1,
                deaf: !1,
            }),
        e0.eachConnection(tQ);
}
function rS(e) {
    let { enabled: t } = e;
    en.Z.requestPermission(eN.Eu.CAMERA), tJ(t);
}
function rI(e) {
    let { sourceId: t, applicationName: n, quality: i } = e;
    if (!(0, N.CY)() || null == S.Z) return !1;
    let a = null,
        s = null,
        l = ed.Z.getPidFromDesktopSource(t);
    ({ soundshareId: a, soundshareSession: s } = nm(l));
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
        (e0.setClipsSource(null),
        (0, ep.isWindows)() && null != o.desktopSource.soundshareId && I.pn(o.desktopSource.soundshareId)),
        null != a && nh(a, s),
        (o = c);
    let u = tV(),
        d = tK().videoHook;
    e0.setClipsSource({
        desktopDescription: {
            id: o.desktopSource.id,
            soundshareId: o.desktopSource.soundshareId,
            useVideoHook: d,
            useGraphicsCapture: t5(),
            useCaptureDeviceForEncode: !1,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: t6(),
            videoHookStaleFrameTimeoutMs: eY,
            graphicsCaptureStaleFrameTimeoutMs: eW,
            hdrCaptureMode: u,
        },
        quality: i,
        applicationName: n,
    });
}
function rT(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((o = null), e0.setClipsSource(null));
}
function rA(e) {
    var t, n, r, i;
    let { settings: a } = e;
    if ((null == a ? void 0 : a.desktopSettings) != null) {
        let e = null,
            r = null,
            { sourceId: i, sound: o } = a.desktopSettings,
            s = null != (t = a.context) ? t : ew.Yn.DEFAULT,
            l =
                null != (n = a.qualityOptions)
                    ? n
                    : {
                          resolution: 720,
                          frameRate: 30,
                      },
            c = !1 === o ? null : ed.Z.getPidFromDesktopSource(i);
        ep.isPlatformEmbedded &&
            !0 === o &&
            (({ soundshareId: e, soundshareSession: r } = nm(c)), null != e && nh(e, r)),
            tX(s),
            tJ(s === ew.Yn.STREAM && ti, {
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
        let e = null != (r = a.context) ? r : ew.Yn.DEFAULT,
            { videoDeviceGuid: t, audioDeviceGuid: n } = a.cameraSettings,
            o = e === ew.Yn.STREAM && ti,
            s =
                null != (i = a.qualityOptions)
                    ? i
                    : {
                          resolution: 720,
                          frameRate: 30,
                      };
        tJ(o, {
            cameraSource: {
                videoDeviceGuid: t,
                audioDeviceGuid: n,
            },
            quality: {
                resolution: s.resolution,
                frameRate: s.frameRate,
            },
        });
    } else tJ(ti, null);
}
function rC(e) {
    let { section: t } = e;
    return t === eA.oAB.VOICE && na(), !1;
}
function rN() {
    return e0.eachConnection(t2), !1;
}
function rP(e) {
    let { enabled: t } = e,
        n = nn({ aecDumpEnabled: t });
    e0.setAecDump(n.aecDumpEnabled);
}
function rR(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (e1 = Object.values(ew.Yn).reduce((e, n) => {
        let r = n,
            i = eJ();
        return (e[r] = _().merge(i, t[r])), e;
    }, {})),
        y.K.set(eU, e1),
        ni();
}
function rw(e) {
    let { state: t } = e,
        n = x.Z.isEnabled();
    if (t === eA.$7l.BACKGROUND && ti && !n) (td = !0), tJ(!1);
    else {
        if (t !== eA.$7l.ACTIVE || !td) return !1;
        (td = !1), tJ(!0);
    }
    return !0;
}
function rD(e) {
    e0.eachConnection((t) => t.setBitRate(e.bitrate));
}
function rx() {
    if ((!ti && null == a) || null != ev.Z.getRTCConnectionId()) return !1;
    tJ(!1, null);
}
function rL() {
    return !!tA && ((tA = !1), !0);
}
function rj(e) {
    e0.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function rM(e) {
    let { settings: t } = e;
    e0.applyMediaFilterSettings(t).finally(() => {
        (tC = !1), r.emitChange();
    });
}
function rk() {
    tC = !0;
}
function rU() {
    tC = !1;
}
function rG(e) {
    tU = e.enabled;
}
function rZ() {
    if ((0, ep.isDesktop)() && ep.isPlatformEmbedded && !tF) {
        tF = !0;
        let e = async () => {
            let t = await new Promise((e) => {
                eh.ZP.pollQueueMetrics((t) => {
                    e(t);
                });
            });
            t.periodMs = ew.rp;
            let n = rF(t);
            null !== n && eu.default.track(eA.rMx.VOICE_QUEUE_METRICS, n), setTimeout(e, ew.rp);
        };
        setTimeout(e, ew.rp);
    }
}
class rB extends (u = E.ZP.Store) {
    initialize() {
        t4(),
            nt(),
            rc(),
            nw(),
            rZ(),
            (tM = {
                [ew.AN.VIDEO]: e0.supports(ew.AN.VIDEO),
                [ew.AN.DESKTOP_CAPTURE]: e0.supports(ew.AN.DESKTOP_CAPTURE),
                [ew.AN.HYBRID_VIDEO]: e0.supports(ew.AN.HYBRID_VIDEO),
            }),
            this.waitFor(eE.default, eb.Z, ey.Z, eO.Z, A.Z, D.Z, ev.Z, L.ZP, ei.Z, es.Z, eI.default, eT.Z, ec.Z);
    }
    supports(e) {
        return e0.supports(e);
    }
    supportsInApp(e) {
        return tM[e] || e0.supports(e);
    }
    isSupported() {
        return e0.supported();
    }
    isNoiseSuppressionSupported() {
        return e0.supports(ew.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return ro();
    }
    isNoiseCancellationError() {
        return tA;
    }
    isAutomaticGainControlSupported() {
        return e0.supports(ew.AN.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !t9() && (e0.supports(ew.AN.LEGACY_AUDIO_SUBSYSTEM) || e0.supports(ew.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return e0.supports(ew.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === e0.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return ro();
    }
    isAecDumpSupported() {
        return e0.supports(ew.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return e0.supports(ew.AN.VIDEO) && e0.supports(ew.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        return (
            (null == (e = eO.Z.getChannel(tT)) ? void 0 : e.type) !== eA.d4z.GUILD_STAGE_VOICE &&
            eQ &&
            W.Z.simulcastEnabled()
        );
    }
    getAecDump() {
        return tK().aecDumpEnabled;
    }
    getMediaEngine() {
        return e0;
    }
    getVideoComponent() {
        return e0.Video;
    }
    getCameraComponent() {
        return e0.Camera;
    }
    getKrispSuppressionLevel() {
        return null != l ? l : 100;
    }
    getKrispEnableStats() {
        return ty;
    }
    isEnabled() {
        return e2;
    }
    isMute() {
        return this.isSelfMute() || te;
    }
    isDeaf() {
        return this.isSelfDeaf() || tr;
    }
    hasContext(e) {
        return null != e1[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ew.Yn.DEFAULT;
        return e === ew.Yn.DEFAULT && tt;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ew.Yn.DEFAULT;
        return (
            !this.isEnabled() ||
            tK(e).mute ||
            !en.Z.didHavePermission(eN.Eu.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === ew.Yn.DEFAULT && tn)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return ts;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        ts = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ew.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && ey.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return tU;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ew.Yn.DEFAULT;
        return !this.isSupported() || tK(e).deaf;
    }
    isVideoEnabled() {
        return ti && tf;
    }
    isVideoAvailable() {
        return Object.values(e9).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ew.Yn.STREAM;
        return e5 === e && null != a;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ew.Yn.STREAM;
        return e5 === t && null != a && (null == (e = a.desktopSource) ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ew.Yn.DEFAULT;
        return e !== eE.default.getId() && (tK(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return e0.supports(ew.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ew.Yn.DEFAULT;
        return null != (t = tK(n).disabledLocalVideos[e]) && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ew.Yn.DEFAULT;
        return null != (t = tK(n).videoToggleStateMap[e]) ? t : eA.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ew.Yn.DEFAULT;
        return t === ew.Yn.DEFAULT && tx.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ew.Yn.DEFAULT;
        return e === ew.Yn.DEFAULT && tx.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tC;
    }
    isNativeAudioPermissionReady() {
        return tw;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return e5;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return e8;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ew.Yn.DEFAULT,
            n = tK(t).localPans[e];
        return null != n ? n : eH;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ew.Yn.DEFAULT,
            n = t === ew.Yn.STREAM ? ew.Yh : ew.Qx,
            r = tK(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return tK().inputVolume;
    }
    getOutputVolume() {
        return tK().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ew.Yn.DEFAULT;
        return tK(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ew.Yn.DEFAULT;
        return tK(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return tO;
    }
    getActiveVoiceFilterAppliedAt() {
        return tv;
    }
    getPreviousVoiceFilter() {
        return tS;
    }
    getPreviousVoiceFilterAppliedAt() {
        return tI;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return tK().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return tK().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            _().each(e1, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === eA.pM4.PUSH_TO_TALK && e3.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nl(e6, tK().inputDeviceId);
    }
    getOutputDeviceId() {
        return nl(e7, tK().outputDeviceId);
    }
    getVideoDeviceId() {
        return nl(e9, tK().videoDeviceId);
    }
    getInputDevices() {
        return e6;
    }
    getOutputDevices() {
        return e7;
    }
    getVideoDevices() {
        return e9;
    }
    getEchoCancellation() {
        let e = tK();
        return ey.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return e0.supports(ew.AN.SIDECHAIN_COMPRESSION) && tK().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return tK().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return tK().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tP && tP;
    }
    getLoopback() {
        return tj.size > 0;
    }
    getLoopbackReasons() {
        return tj;
    }
    getNoiseSuppression() {
        let e = tK();
        return ey.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tK();
        return ey.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return tK().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return tK().noiseCancellation;
    }
    getHardwareEncoding() {
        return eQ;
    }
    getEnableSilenceWarning() {
        return tK().silenceWarning;
    }
    getDebugLogging() {
        return e0.getDebugLogging();
    }
    getQoS() {
        return tK().qos;
    }
    getAttenuation() {
        return tK().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return tK().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return tK().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return t7() && tK().automaticAudioSubsystem ? ew.iA.AUTOMATIC : e0.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return e0.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return tK().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eR._.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ew.Yn.DEFAULT;
        return tK(e);
    }
    getState() {
        return {
            settingsByContext: e1,
            inputDevices: e6,
            outputDevices: e7,
            appSupported: tM,
            krispModuleLoaded: tE,
            krispVersion: s,
            krispSuppressionLevel: l,
            goLiveSource: a,
            goLiveContext: e5,
        };
    }
    getInputDetected() {
        return tp;
    }
    getNoInputDetectedNotice() {
        return tm;
    }
    getPacketDelay() {
        return ep.isPlatformEmbedded || this.getMode() !== eA.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        e0.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return e4;
    }
    getVideoHook() {
        return tK().videoHook;
    }
    supportsVideoHook() {
        return e0.supports(ew.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tK().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return (
            e0.supports(ew.AN.EXPERIMENTAL_SOUNDSHARE) &&
            h().satisfies(null === S.Z || void 0 === S.Z ? void 0 : S.Z.os.release, eC.T6)
        );
    }
    supportsHookSoundshare() {
        return (
            (0, ep.isWindows)() &&
            e0.supports(ew.AN.SOUNDSHARE) &&
            h().satisfies(null === S.Z || void 0 === S.Z ? void 0 : S.Z.os.release, eC.sA)
        );
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = tK().useSystemScreensharePicker,
            n = (0, ep.isLinux)();
        return e && (null != t ? t : n);
    }
    supportsSystemScreensharePicker() {
        return e0.supports(ew.AN.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return tB;
    }
    getUseGamescopeCapture() {
        return tZ;
    }
    getEverSpeakingWhileMuted() {
        return tl;
    }
    getSpeakingWhileMuted() {
        return tc;
    }
    getKrispModelOverride() {
        return c;
    }
    getKrispModels() {
        return tb;
    }
    getKrispVadActivationThreshold() {
        var e;
        return null != (e = tK().modeOptions.vadKrispActivationThreshold) ? e : eV;
    }
    hasActiveCallKitCall() {
        return tG;
    }
    setHasActiveCallKitCall(e) {
        tG = e;
    }
    supportsScreenSoundshare() {
        return (0, ep.isMac)()
            ? e0.supports(ew.AN.SOUNDSHARE) &&
                  h().satisfies(null === S.Z || void 0 === S.Z ? void 0 : S.Z.os.release, eC.yG) &&
                  t6()
            : (0, ep.isWindows)()
              ? e0.supports(ew.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, ep.isLinux)() && e0.supports(ew.AN.SCREEN_SOUNDSHARE);
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ew.Yn.DEFAULT,
            t = this.supports(ew.AN.VIDEO)
                ? [
                      {
                          rid: "100",
                          type: e === ew.Yn.DEFAULT ? ew.Tr.VIDEO : ew.Tr.SCREEN,
                          quality: ew.y7,
                      },
                  ]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === ew.Yn.DEFAULT || this.goLiveSimulcastEnabled()) &&
                t.push({
                    rid: "50",
                    type: e === ew.Yn.DEFAULT ? ew.Tr.VIDEO : ew.Tr.SCREEN,
                    quality: ew.LD,
                }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: !1 };
        return (
            (0, ep.isWeb)() &&
                (e.fetchDave = X.NJ.getCurrentConfig({
                    location: "MediaEngineStore fetchAsyncResources",
                }).loadWasmModule),
            e0.fetchAsyncResources(e)
        );
    }
    startDavePreload() {
        if (!tN && ((tN = !0), (0, ep.isWeb)())) {
            let e = { fetchDave: !0 };
            e0.fetchAsyncResources(e).catch((e) => {
                ek.warn("DAVE preload failed:", e), em.Z.captureException(e);
            });
        }
    }
    getSupportedSecureFramesProtocolVersion() {
        if ((0, ep.isWeb)()) {
            let { useWasmModule: e } = X.NJ.getCurrentConfig({
                location: "MediaEngineStore getSupportedSecureFramesProtocolVersion",
            });
            if (!e) return 0;
        }
        let e = e0.getSupportedSecureFramesProtocolVersion();
        114 === e && (e = 1);
        let t = X.m8.getCurrentConfig({ location: "MediaEngineStore" }),
            n = X.Th.getConfig({ location: "MediaEngineStore" });
        return (t.canSupportDaveProtocol || (n.allowOptIn && ei.Z.getPersistentCodesEnabled())) &&
            e >= t.protocolVersionFloor
            ? e
            : 0;
    }
    hasClipsSource() {
        return null != o;
    }
    getGpuBrand() {
        return tk;
    }
}
function rF(e) {
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
ex(rB, "displayName", "MediaEngineStore");
let rV = (r = new rB(v.Z, {
    VOICE_CHANNEL_SELECT: rE,
    VOICE_STATE_UPDATES: nv,
    CONNECTION_OPEN: ng,
    CONNECTION_CLOSED: nb,
    POST_CONNECTION_OPEN: ny,
    RTC_CONNECTION_STATE: nO,
    AUDIO_SET_TEMPORARY_SELF_MUTE: nS,
    AUDIO_TOGGLE_SELF_MUTE: nI,
    AUDIO_SET_SELF_MUTE: nT,
    AUDIO_TOGGLE_SELF_DEAF: nC,
    AUDIO_TOGGLE_LOCAL_MUTE: nN,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: nP,
    AUDIO_SET_LOCAL_VOLUME: nD,
    AUDIO_SET_LOCAL_PAN: nx,
    AUDIO_SET_MODE: nL,
    AUDIO_SET_INPUT_VOLUME: nj,
    AUDIO_SET_OUTPUT_VOLUME: nM,
    AUDIO_SET_INPUT_DEVICE: nk,
    AUDIO_SET_OUTPUT_DEVICE: nU,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: nZ,
    AUDIO_SET_ECHO_CANCELLATION: nY,
    AUDIO_SET_SIDECHAIN_COMPRESSION: nW,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nK,
    AUDIO_SET_LOOPBACK: nq,
    AUDIO_SET_NOISE_SUPPRESSION: n$,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: n0,
    AUDIO_SET_NOISE_CANCELLATION: n1,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: n3,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: n4,
    AUDIO_SET_DEBUG_LOGGING: n5,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: n8,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: n2,
    MEDIA_ENGINE_SET_VIDEO_HOOK: n6,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: n7,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: n9,
    AUDIO_SET_ATTENUATION: re,
    AUDIO_SET_QOS: rt,
    MEDIA_ENGINE_DEVICES: nF,
    AUDIO_VOLUME_CHANGE: nV,
    AUDIO_RESET: rn,
    AUDIO_INPUT_DETECTED: rr,
    AUDIO_SET_SUBSYSTEM: rm,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: r_,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rv,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rS,
    MEDIA_ENGINE_PERMISSION: rO,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rA,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nG,
    MEDIA_ENGINE_INTERACTION_REQUIRED: nB,
    USER_SETTINGS_MODAL_INIT: rC,
    USER_SETTINGS_MODAL_SET_SECTION: rC,
    CERTIFIED_DEVICES_SET: rN,
    RPC_APP_CONNECTED: rb,
    RPC_APP_DISCONNECTED: ry,
    OVERLAY_INITIALIZE: nE,
    APP_STATE_UPDATE: rw,
    SET_CHANNEL_BITRATE: rD,
    SET_VAD_PERMISSION: ri,
    SET_NATIVE_PERMISSION: ra,
    SET_CHANNEL_VIDEO_QUALITY_MODE: rj,
    MEDIA_ENGINE_SET_AEC_DUMP: rP,
    MEDIA_ENGINE_RESET_SETTINGS: rR,
    CHANNEL_DELETE: rx,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rL,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rM,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rk,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rU,
    USER_SETTINGS_PROTO_UPDATE: nA,
    CLIPS_INIT: rI,
    CLIPS_SETTINGS_UPDATE: rT,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rG,
    VOICE_FILTER_REQUEST_SWITCH: rd,
    VOICE_FILTER_LOOPBACK_TOGGLE: ru,
    VOICE_FILTER_APPLIED: rp,
    VOICE_FILTER_DOWNLOAD_FAILED: rf,
    VOICE_FILTER_APPLY_FAILED: rf,
}));
