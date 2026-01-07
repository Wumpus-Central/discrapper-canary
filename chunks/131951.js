let r, i, a, o, s, l, c, u;
n.d(t, { Z: () => rQ }), n(388685), n(953529), n(457542), n(539854), n(642613), n(49124), n(337869);
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
    e$ = 30 * em.Z.Millis.SECOND,
    e0 = !0,
    e1 = "deep_noise_suppression",
    e3 = 0;
function e2() {
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
        videoHook: e5.supports(eL.AN.VIDEO_HOOK),
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
let e4 = {
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
    e5 = (0, y.Mt)((0, y.jj)());
eZ.enableNativeLogger(!0);
let e8 = {},
    e6 = new Set([eL.Yn.DEFAULT]),
    e7 = e5.supports(eL.AN.AUTO_ENABLE),
    e9 = !1,
    te = eL.Yn.STREAM,
    tt = performance.now(),
    tn = { [eL.w5]: np("No Input Devices") },
    tr = { [eL.w5]: np("No Output Devices") },
    ti = { [eL.w5]: np("No Video Devices") },
    ta = new v.V7(),
    to = !1,
    ts = !1,
    tl = !1,
    tc = !1,
    tu = !1,
    td = eL.Av,
    tf = eL.Av,
    tp = !1,
    t_ = !1,
    tm = !1,
    th = new v.V7(),
    tg = !1,
    tE = !1,
    tb = null,
    ty = !1,
    tO = !1,
    tv = !1,
    tS = !1,
    tI = !1,
    tT = [],
    tC = !1,
    tA = null,
    tN = null,
    tP = null,
    tR = null,
    tw = null,
    tD = !1,
    tx = !1,
    tL = !1,
    tj = null,
    tM = null,
    tk = !1;
ei.Z.hasPermission(ew.Eu.AUDIO, { showAuthorizationError: !1 }),
    ei.Z.hasPermission(ew.Eu.CAMERA, { showAuthorizationError: !1 });
let tU = !1,
    tG = new Set(),
    tZ = tU,
    tF = new Set(),
    tB = {},
    tV = null,
    tH = !0,
    tY = !1,
    tW = !1,
    tK = !1,
    tz = !1;
function tq() {
    var e, t;
    return null != (t = null == (e = eA.default.getCurrentUser()) ? void 0 : e.isStaff()) && t
        ? "always"
        : eg.Z === E.R.CANARY
          ? "permittedDevicesOnly"
          : "never";
}
async function tQ() {
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
function tX() {
    return null != tM
        ? tM
        : "undefined" != typeof window
          ? (tM = tQ().then((e) => ((tj = e), e)))
          : Promise.resolve(!1);
}
function tJ() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eL.Yn.DEFAULT,
        t = e8[e];
    return null == t && ((t = e2()), (e8[e] = t)), t;
}
function t$() {
    var e, t, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eL.Yn.DEFAULT,
        i = tJ(r),
        a = e4[null != (e = i.activeInputProfile) ? e : ex._.CUSTOM],
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
function t0(e) {
    var t, n;
    let r = t$(e.context),
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
            vadUseKrisp: r.modeOptions.vadUseKrisp && rp(),
            vadKrispActivationThreshold: null != (t = r.modeOptions.vadKrispActivationThreshold) ? t : eW,
            vadLeading: r.modeOptions.vadLeading,
            vadTrailing: r.modeOptions.vadTrailing,
            vadDuringPreProcess: null != (n = r.modeOptions.vadDuringPreProcess) && n,
            pttReleaseDelay: Math.round(r.modeOptions.delay),
        });
}
function t1(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eL.Qx;
    return m().clamp(e, 0, t);
}
function t3(e) {
    let t = t$(e.context),
        n = !e7 || t.mute || t.deaf;
    e.context === eL.Yn.DEFAULT
        ? (n = n || to || ts || tl || !ei.Z.didHavePermission(ew.Eu.AUDIO))
        : e.context === eL.Yn.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eL.Yn.DEFAULT && C.Z.updateNativeMute();
}
function t2(e) {
    e !== te && (null != a && e5.setGoLiveSource(null, te), (te = e));
}
function t4() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tu,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        s = a;
    if (
        ((null == s ? void 0 : s.desktopSource) != null &&
            s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? void 0 : e.id) &&
            (null != s.desktopSource.soundshareId && (0, eh.isWindows)() && T.pn(s.desktopSource.soundshareId),
            e5.setGoLiveSource(null, te)),
        (null == s ? void 0 : s.cameraSource) != null &&
            (s.cameraSource.videoDeviceGuid !==
                (null == o || null == (t = o.cameraSource) ? void 0 : t.videoDeviceGuid) ||
                s.cameraSource.audioDeviceGuid !==
                    (null == o || null == (n = o.cameraSource) ? void 0 : n.audioDeviceGuid)) &&
            e5.setGoLiveSource(null, te),
        tu || i)
    ) {
        let e = t$().videoDeviceId;
        tu && e === eL.w5 && tf === eL.w5 && td !== eL.Av ? (e = td) : (tf = e),
            (td = (tu = i) ? nm(ti, e) : eL.Av),
            e5.setVideoInputDevice(td);
    }
    if (((a = o), null != o)) {
        let e = {
            resolution: o.quality.resolution,
            frameRate: o.quality.frameRate,
        };
        if (null != o.desktopSource) {
            let t = tq(),
                n = t$().videoHook,
                i = nn(),
                a = i ? (nr() ? eR.zj : eR.ZM) : 0,
                s = (0, eh.isWindows)() && (0, ee.t)("updateVideo").enabled;
            e5.setGoLiveSource(
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
                        allowScreenCaptureKit: ni(),
                        videoHookStaleFrameTimeoutMs: ez,
                        graphicsCaptureStaleFrameTimeoutMs: eq,
                        hdrCaptureMode: t,
                        enableGlobalFramePoolLock: (0, W.T)({ location: "updateVideo" }).enabled,
                    },
                    quality: e,
                },
                te,
            );
        }
        null != o.cameraSource &&
            e5.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: o.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                te,
            );
    }
}
function t5(e) {
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
function t8(e) {
    let t = (0, k.U)({
        location: "getAutomaticGainControlConfig",
        disable: !e,
    }).noiseCancellationConfig;
    return ek({ enabled: e }, t);
}
function t6(e, t) {
    e.setAutomaticGainControl(t8(t));
}
function t7(e) {
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
    if ((0, eh.isWindows)() && n === e1) {
        let { preferSystemEffects: e } = (0, eo.P)({ location: "setNoiseCancellation" });
        if (e) return eZ.info("Falling back to system noise suppression."), !1;
    }
    return e;
}
function t9(e, t) {
    (t = t7(t)), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: n } = (0, k.U)({
        location: "setNoiseCancellation",
        disable: !t,
    });
    e.setNoiseCancellationDuringProcessing(n);
    let { noiseCancellationAfterProcessing: r, vadAfterWebrtc: i } = (0, q.$)({ location: "setNoiseCancellation" });
    e.setNoiseCancellationAfterProcessing(r), e.setVADAfterWebrtc(i);
}
function ne(e) {
    let t = t$(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eS.Z.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eS.Z.hasNoiseSuppression(n) || t.noiseSuppression),
        t6(e, eS.Z.hasAutomaticGainControl(n) || t.automaticGainControl),
        t9(e, t.noiseCancellation),
        e.setVoiceFilterId(tA),
        (0, eh.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function nt() {
    ta.start(e$, () => {
        eZ.error("Device enumeration timed out"), ep.default.track(eP.rMx.DEVICE_ENUMERATION_TIMEOUT, {});
    }),
        e5.on(y.aB.Connection, (e) => {
            t0(e), t3(e), ne(e);
            let t = t$();
            e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
                e.setQoS(t.qos);
            let n = (0, z.D)({ location: "setupMediaEngine" }).treatment;
            n === z.$.NoSoftwareDecode
                ? (e.setExperimentFlag(eL.V8.H265_HARDWARE_ONLY, !0),
                  (0, eh.isWindows)()
                      ? tX().then((t) => {
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
                let t = ng(tr);
                e.setSoundshareDiscardRearChannels(t);
                let { simulcastEnabled: n, lqStreamBitrate: r } = K.Z.getConfig();
                e.configureGoLiveSimulcast(n, r);
            }
            if (
                ((0, eh.isWindows)()
                    ? e.setExperimentFlag(eL.V8.SIGNAL_AV1, !0)
                    : ((0, eh.isMac)() || (0, eh.isLinux)()) && e.setExperimentFlag(eL.V8.SIGNAL_AV1_DECODE, !0),
                (0, eh.isWindows)() && e.setExperimentFlag(eL.V8.SIGNAL_AV1_HARDWARE_DECODE, !0),
                (0, eh.isWeb)())
            ) {
                let { enabled: t } = (0, Y.A)("MediaEngineStore");
                e.setExperimentFlag(eL.V8.BROWSER_HEVC, t);
            }
            if (
                ((0, eh.isWindows)() &&
                    (null == tV ? void 0 : tV.startsWith("AMD")) &&
                    (0, en.C)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eL.V8.WMF_GPU_ENCODE, !0),
                (0, eh.isWindows)() &&
                    (null == tV ? void 0 : tV.startsWith("Qualcomm")) &&
                    (0, en.C)("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eL.V8.WMF_GPU_ENCODE, !0),
                e5.setHasFullbandPerformance((0, w.Z)()),
                e.setRemoteAudioHistory(1000),
                (0, N.Z)(r))
            ) {
                let { enableViewerClipping: t } = et.Z.getCurrentConfig(
                    { location: "f627ab_15" },
                    { autoTrackExposure: !1 },
                );
                e.setViewerSideClip(t), e.setClipsKeyFrameInterval(eL.ux);
            }
            for (let n of ((t = t$(e.context)), e.setPostponeDecodeLevel(eX), Object.keys(t.localMutes)))
                n !== eO.default.getId() && e.setLocalMute(n, t.localMutes[n]);
            for (let n of Object.keys(t.localVolumes))
                n !== eO.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
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
                    ((t_ = !1),
                    (tm = !1),
                    e.on(y.Sh.SpeakingWhileMuted, () => {
                        (t_ = !0),
                            (tm = !0),
                            r.emitChange(),
                            th.stop(),
                            th.start(eJ, () => {
                                (tm = !1), r.emitChange();
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
                            underlyingError: t5(e),
                        }),
                        (tD = !0),
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
                            underlyingError: t5(e),
                        }),
                        ep.default.track(eP.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                        S.Z.dispatch({
                            type: "AUDIO_SET_MODE",
                            context: eL.Yn.DEFAULT,
                            mode: eP.pM4.VOICE_ACTIVITY,
                            options: eG(ek({}, t$(eL.Yn.DEFAULT).modeOptions), { vadUseKrisp: !1 }),
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
                e5.supports(eL.AN.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                    e5.setAsyncVideoInputDeviceInit((0, F.p)("setupMediaEngine").enabled);
        }),
        e5.on(y.aB.DeviceChange, (e, t, n) => {
            ta.stop(),
                S.Z.dispatch({
                    type: "MEDIA_ENGINE_DEVICES",
                    inputDevices: e,
                    outputDevices: t,
                    videoDevices: n,
                });
        }),
        e5.on(y.aB.VolumeChange, (e, t) => {
            S.Z.dispatch({
                type: "AUDIO_VOLUME_CHANGE",
                inputVolume: e,
                outputVolume: t,
            });
        }),
        e5.on(y.aB.DesktopSourceEnd, (e, t) => {
            S.Z.dispatch({
                type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                settings: null,
                endReason: e,
                errorCode: t,
            });
        }),
        e5.on(y.aB.AudioPermission, (e) => {
            (tk = !0),
                S.Z.dispatch({
                    type: "MEDIA_ENGINE_PERMISSION",
                    kind: "audio",
                    granted: e,
                });
        }),
        e5.on(y.aB.VideoPermission, (e) => {
            S.Z.dispatch({
                type: "MEDIA_ENGINE_PERMISSION",
                kind: "video",
                granted: e,
            });
        }),
        e5.on(y.aB.WatchdogTimeout, async () => {
            let e;
            try {
                await e_.Z.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
            } catch (t) {
                "number" == typeof t.status && (e = t.status);
            }
            eZ.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)),
                ep.default.track(eP.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        e5.on(y.aB.VideoInputInitialized, (e) => {
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
        e5.on(y.aB.AudioInputInitialized, (e) => {
            ep.default.track(eP.rMx.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * em.Z.Millis.SECOND),
                rtc_connection_id: eT.Z.getRTCConnectionId(),
            });
        }),
        e5.on(y.aB.ClipsRecordingRestartNeeded, () => {
            S.Z.dispatch({ type: "CLIPS_RESTART" });
        }),
        e5.on(y.aB.ClipsInitFailure, (e, t) => {
            S.Z.wait(() => {
                S.Z.dispatch({
                    type: "CLIPS_INIT_FAILURE",
                    errMsg: e,
                    applicationName: t,
                });
            });
        }),
        e5.on(y.aB.ClipsRecordingEnded, (e, t) => {
            var n, r;
            (null == o || null == (n = o.desktopSource) ? void 0 : n.id) === e &&
                (null != t && (null == a || null == (r = a.desktopSource) ? void 0 : r.soundshareId) !== t && T.pn(t),
                (o = null));
        }),
        e5.on(y.aB.NativeScreenSharePickerUpdate, (e, t) => {
            S.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE",
                existing: e,
                content: t,
            });
        }),
        e5.on(y.aB.NativeScreenSharePickerCancel, (e) => {
            S.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL",
                existing: e,
            });
        }),
        e5.on(y.aB.NativeScreenSharePickerError, (e) => {
            S.Z.dispatch({
                type: "NATIVE_SCREEN_SHARE_PICKER_ERROR",
                error: e,
            });
        }),
        e5.on(y.aB.AudioDeviceModuleError, (e, t, n) => {
            ep.default.track(eP.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                audio_device_module: e,
                code: t,
                device_name: n,
            });
        }),
        e5.on(y.aB.VideoCodecError, (e) => {
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
        e5.on(y.aB.ConnectionStats, (e) => {
            S.Z.dispatch({
                type: "MEDIA_ENGINE_CONNECTION_STATS",
                connectionStats: e.map((e) => {
                    let { stats: t, connection: n } = e;
                    return {
                        stats: t,
                        mediaEngineConnectionId: n.mediaEngineConnectionId,
                        version: e3++,
                        context: n.context,
                    };
                }),
            });
        }),
        e5.on(y.aB.VoiceQueueMetrics, (e) => {
            let t = rq(e);
            null !== t && ep.default.track(eP.rMx.VOICE_QUEUE_METRICS, t);
        }),
        e5.setOnVideoContainerResized((e, t, n) => {
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
        n2(),
        n5(),
        e5.supports(eL.AN.ASYNC_CLIPS_SOURCE_DEINIT) &&
            e5.setAsyncClipsSourceDeinit((0, B.C)("setupMediaEngine").enabled),
        ns.reset(),
        (0, eC.q)().then((e) => {
            null != e && (tV = e.gpu_brand);
        }),
        e5.on(y.aB.SystemMicrophoneModeChange, (e) => {
            (u = e), e5.eachConnection(ne);
        });
}
function nn() {
    return (0, eh.isWindows)() && g().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eR.c5);
}
function nr() {
    return (0, eh.isWindows)() && g().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eR.sN);
}
function ni() {
    return (
        (0, eh.isMac)() &&
        e5.supports(eL.AN.SCREEN_CAPTURE_KIT) &&
        g().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eR.C7)
    );
}
function na() {
    return (
        (0, eh.isWindows)() &&
        e5.supports(eL.AN.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        e5.supports(eL.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function no() {
    return e5.supports(eL.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
let ns = new (class {
    start() {
        this.started || ((this.started = !0), e5.on(y.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout &&
                (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            e5.removeListener(y.aB.Silence, this.handleSilence),
            S.Z.dispatch({
                type: "AUDIO_INPUT_DETECTED",
                inputDetected: null,
            }));
    }
    update() {
        let e = t$();
        !ty && eT.Z.getState() === eP.hes.RTC_CONNECTED && e.mode === eP.pM4.VOICE_ACTIVITY && e.silenceWarning
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
                                    e && (tO = !0));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout,
                    ));
            });
    }
})();
function nl() {
    var e;
    let t = O.K.get("audio");
    null != t && (O.K.set(eF, { [eL.Yn.DEFAULT]: t }), O.K.remove("audio")),
        (e8 = null != (e = O.K.get(eF)) ? e : {}),
        m().each(e8, (e) => {
            if (
                (m().defaultsDeep(e, e2()),
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
            e5.supports(eL.AN.SIDECHAIN_COMPRESSION) &&
                e.sidechainCompressionSettingVersion < eY &&
                ((e.sidechainCompressionSettingVersion = eY), (e.sidechainCompression = !0)),
                (0, eh.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== eH &&
                      ((e.ncUseKrispjsSettingVersion = eH), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== eV &&
                      ((e.ncUseKrispSettingVersion = eV), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
        }),
        nd();
}
function nc(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eL.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = tJ(t);
    return Object.assign(r, e), !__OVERLAY__ && n && O.K.set(eF, e8), r;
}
function nu() {
    O.K.remove(eF), location.reload();
}
function nd() {
    let e = t$();
    e5.setAudioInputDevice(e.inputDeviceId),
        e5.setAudioOutputDevice(e.outputDeviceId),
        t4(),
        e5.setInputVolume(e.inputVolume),
        e5.setOutputVolume(e.outputVolume),
        e5.setAecDump(e.aecDumpEnabled),
        e5.setSidechainCompression(e.sidechainCompression),
        e5.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        e5.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing);
}
function nf() {
    e7 ||
        e5.enable().then(() =>
            S.Z.dispatch({
                type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
                enabled: !0,
                unmute: !1,
            }),
        );
}
function np(e) {
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
function n_(e, t) {
    if (0 === e.length) {
        let e = np(t);
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
function nm(e, t) {
    var n, r;
    let i = null != (r = null != (n = e[t]) ? n : e[eL.w5]) ? r : m()(e).values().first();
    return null != i ? i.id : t;
}
function nh(e) {
    let t = tn;
    if (((tn = n_(e, ej.intl.string(ej.t["/QIjDA"]))), !m().isEqual(tn, t))) {
        let e = t$(),
            t = nm(tn, e.inputDeviceId);
        e5.setAudioInputDevice(t), e5.eachConnection(ne);
    }
}
function ng(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nE(e) {
    e5.eachConnection((t) => {
        t.context === eL.Yn.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function nb(e) {
    let t = tr;
    if (((tr = n_(e, ej.intl.string(ej.t.xlUg0v))), !m().isEqual(tr, t))) {
        let e = t$(),
            n = nm(tr, e.outputDeviceId);
        e5.setAudioOutputDevice(n);
        let r = ng(t),
            i = ng(tr);
        r !== i && nE(i);
    }
}
function ny(e) {
    tE = e.length > 0;
    let t = ti;
    if (((ti = n_(e, ej.intl.string(ej.t.WKWARY))), tu && !m().isEqual(ti, t))) {
        var n;
        let e = void 0 !== ti[td],
            r = td === eL.w5 && (null == (n = t[eL.w5]) ? void 0 : n.disabled);
        t4(e || r);
    }
}
function nO() {
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
            { localMutes: s, localVolumes: l } = t$(i);
        for (let [e, t] of Object.entries(o))
            null == (0, el.Ky)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== a ? (l[e] = t.volume) : delete l[e],
                e5.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (n)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == o[e] &&
                    (delete s[e],
                    delete l[e],
                    e5.eachConnection((t) => {
                        t.setLocalVolume(e, a), t.setLocalMute(e, !1);
                    }, i));
        nc(
            {
                localMutes: s,
                localVolumes: l,
            },
            i,
        );
    }
}
function nv(e) {
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
function nS(e, t) {
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
function nI(e) {
    (i = e.sessionId), (to = !1), (tc = !1);
    let t = t$();
    if (
        (na() && (no() ? rS(eL.iA.AUTOMATIC) : t.automaticAudioSubsystem && rI()),
        e5.supports(eL.AN.OFFLOAD_ADM_CONTROLS))
    ) {
        let e = !1;
        (0, eh.isDesktop)()
            ? (e = (0, G.E)({ location: "handleConnectionOpen" }).enabled)
            : ((0, eh.isIOS)() || (0, eh.isAndroid)()) && (e = (0, Z.W)({ location: "handleConnectionOpen" }).enabled),
            e5.setOffloadAdmControls(e);
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
              nc({ mostRecentlyRequestedVoiceFilter: null }))
            : n(358820).r5()),
        nO();
}
function nT(e) {
    let { mediaEngineState: t } = e;
    (e8 = t.settingsByContext),
        (tn = t.inputDevices),
        (tr = t.outputDevices),
        (tB = t.appSupported),
        (tI = t.krispModuleLoaded),
        (s = t.krispVersion),
        (te = t.goLiveContext);
}
function nC() {
    i = null;
}
function nA() {
    if ((0, eh.isWeb)()) {
        let e = J.NJ.getCurrentConfig({ location: "MediaEngineStore handlePostConnectionOpen" });
        e.loadWasmModule && e.preload && r.startDavePreload();
    }
    return !1;
}
function nN(e) {
    switch (e.state) {
        case eP.hes.CONNECTING:
            nf();
            break;
        case eP.hes.RTC_CONNECTING:
            (ty = !1), (tO = !1);
            break;
        case eP.hes.RTC_CONNECTED:
            t4();
            break;
        case eP.hes.DISCONNECTED:
            nk(), nU();
    }
    ns.update();
}
function nP(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (to = t.mute || t.suppress), (tc = t.deaf), e5.eachConnection(t3);
            let e = null != t.guildId && null != t.channelId && null != tw && tw !== t.channelId,
                n = !tv && null == t.channelId;
            return t4(!e && !n && tu), (tw = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== eO.default.getId() || null != eT.Z.getChannelId() || t4(!1, null), e;
    }, !1);
}
function nR(e) {
    let { mute: t } = e;
    (ts = t), e5.eachConnection(t3);
}
function nw(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = t$(t);
    if (t === eL.Yn.DEFAULT && (ei.Z.requestPermission(ew.Eu.AUDIO), tl)) return !1;
    (r = !i && !r) || (i = !1),
        n || (tp = !0),
        nc(
            {
                mute: r,
                deaf: i,
            },
            t,
        ),
        e5.eachConnection(t3);
}
function nD(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    nc({ mute: n }, t), r || (tp = !0), e5.eachConnection(t3);
}
function nx(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== eD.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    nO(!0);
}
function nL(e) {
    let { context: t } = e;
    nc({ deaf: !t$(t).deaf }, t), e5.eachConnection(t3);
}
function nj(e) {
    let { context: t, userId: n } = e;
    if (n === eO.default.getId()) return;
    let { localMutes: r } = t$(t);
    r[n] ? delete r[n] : (r[n] = !0),
        nc({ localMutes: r }, t),
        e5.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nM(e) {
    var t, n, r, i, a, o, s;
    let { context: l, userId: c, videoToggleState: u, persist: d, isAutomatic: f } = e;
    p()(!(d && f), "These are not allowed to both be true.");
    let _ = u === eP.ZUi.DISABLED,
        { disabledLocalVideos: m } = t$(l),
        h = null != (t = m[c]) && t,
        g = tG.has(c),
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
    let { videoToggleStateMap: S } = t$(l);
    if (
        (S[c] === eP.ZUi.AUTO_PROBING &&
            u === eP.ZUi.AUTO_ENABLED &&
            (0, er.Z)(c, _ ? eL.fC.AUTO_DISABLE : eL.fC.AUTO_ENABLE, E),
        (S[c] = u),
        nc({ videoToggleStateMap: S }, l, d),
        u === eP.ZUi.AUTO_PROBING
            ? null == (n = eT.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, !0)
            : null == (r = eT.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, !1),
        tZ ||
            (eZ.info("isAutoDisableAllowed=".concat(tZ, " - disabling VideoHealthManager")),
            null == (a = eT.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()),
        O)
    ) {
        if ((!_ && !g) || (_ && !tZ)) return;
        (0, er.Z)(c, _ ? eL.fC.AUTO_DISABLE : eL.fC.AUTO_ENABLE, E), _ ? tG.add(c) : tG.delete(c);
    } else
        v &&
            (g && !_
                ? (eZ.info("disallowing auto-disable for this session because of manual override by user"),
                  (tZ = !1),
                  null == (s = eT.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(),
                  (0, er.Z)(c, eL.fC.MANUAL_REENABLE, E))
                : (0, er.Z)(c, _ ? eL.fC.MANUAL_DISABLE : eL.fC.MANUAL_ENABLE, E));
    y && !_ && tG.delete(c),
        _ ? (m[c] = !0) : delete m[c],
        nc({ disabledLocalVideos: m }, l, d),
        e5.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(c, null != (t = m[c]) && t);
        }, l);
}
function nk() {
    if (0 === tG.size) return;
    let e = eL.Yn.DEFAULT,
        { disabledLocalVideos: t } = t$(e);
    tG.forEach((n) => {
        p()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            e5.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tG.clear(),
        nc({ disabledLocalVideos: t }, e, !1);
}
function nU() {
    let e = eL.Yn.DEFAULT,
        { videoToggleStateMap: t } = t$(e);
    for (let [e, n] of Object.entries(t)) n === eP.ZUi.AUTO_PROBING && delete t[e];
    nc({ videoToggleStateMap: t }, e, !1);
}
function nG(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === eO.default.getId()) return;
    let i = t === eL.Yn.STREAM ? eL.Yh : eL.Qx,
        { localVolumes: a } = t$(t);
    r === i ? delete a[n] : (a[n] = r), nc({ localVolumes: a }, t), e5.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function nZ(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: a } = t$(t);
    (a[n] = {
        left: r,
        right: i,
    }),
        nc({ localPans: a }, t),
        e5.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function nF(e) {
    let { context: t, mode: n, options: r } = e;
    nc(
        {
            mode: n,
            modeOptions: r,
        },
        t,
    ),
        e5.eachConnection(t0),
        ns.update();
}
function nB(e) {
    let { volume: t } = e;
    nc({ inputVolume: t1(t) }), e5.setInputVolume(t);
}
function nV(e) {
    let { volume: t } = e;
    nc({ outputVolume: t }), e5.setOutputVolume(t);
}
function nH(e) {
    let { id: t } = e;
    (t = nm(tn, t)),
        (tt = performance.now()),
        nc({ inputDeviceId: t }),
        e5.setAudioInputDevice(t),
        e5.eachConnection(ne);
}
function nY(e) {
    let { id: t } = e;
    nc({ outputDeviceId: (t = nm(tr, t)) }), e5.setAudioOutputDevice(t);
}
function nW(e) {
    let { id: t } = e;
    nc({ videoDeviceId: (t = nm(ti, t)) }), t4();
}
function nK(e) {
    let { inputProfile: t } = e;
    nc({ activeInputProfile: t });
    let n = t$();
    e5.eachConnection((e) => {
        t0(e), ne(e);
    }),
        e5.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        ns.update(),
        n4();
}
function nz(e) {
    return e9 !== e.required && ((e9 = e.required), e.required || e5.interact(), !0);
}
function nq(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    nh(t), nb(n), ny(r);
}
function nQ(e) {
    let { inputVolume: t, outputVolume: n } = e;
    nc({
        inputVolume: t1(t),
        outputVolume: n,
    });
}
function nX(e) {
    var t;
    let n = t$(),
        r = e5.getAudioSubsystem(),
        i = e5.getAudioLayer(),
        a = nm(tn, n.inputDeviceId),
        o = null == (t = tn[a]) ? void 0 : t.name,
        s = t7(n.noiseCancellation);
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
function nJ(e) {
    let t = nc({ echoCancellation: e.enabled });
    e5.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), n4(), nX(e.location);
}
function n$(e) {
    n1(e.enabled);
}
function n0(e) {
    let t = nc({ sidechainCompressionStrength: e.strength });
    e5.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function n1(e) {
    let t = nc({ sidechainCompression: e });
    e5.setSidechainCompression(t.sidechainCompression);
}
function n3(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tF.add(n) : tF.delete(n), n2(), n4();
}
function n2() {
    let e = !tF.has("voice_filter_preview") && !tF.has("mic_test");
    e5.setMaybePreprocessMute(e);
}
function n4() {
    let e = t$(),
        t = tF.size > 0,
        n = e.inputDeviceId,
        r = eS.Z.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        a = eS.Z.hasNoiseSuppression(n) || e.noiseSuppression,
        o = t8(eS.Z.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation,
        l = null !== tA,
        c = tF.has("voice_filter") && 1 === tF.size;
    e5.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: a,
        automaticGainControlConfig: o,
        noiseCancellation: s,
        voiceFilters: l,
        loopbackUseAudioMode: c,
    });
}
async function n5() {
    var e, t, n, r;
    if (!e5.supports(eL.AN.VAAPI)) return;
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
        ((tK = !0), (tW = e5.supports(eL.AN.GAMESCOPE_CAPTURE)));
}
function n8(e) {
    let t = nc({ noiseSuppression: e.enabled });
    e5.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), n4(), nX(e.location);
}
function n6(e) {
    let t = nc({ automaticGainControl: e.enabled });
    e5.eachConnection((e) => t6(e, t.automaticGainControl)), n4(), nX(e.location);
}
function n7(e) {
    let t = nc({ noiseCancellation: e.enabled });
    e5.eachConnection((e) => t9(e, t.noiseCancellation)), n4(), nX(e.location);
}
function n9(e) {
    ea.Z.setKrispModelOverride(e.model), (c = e.model), n4();
}
function re(e) {
    var t;
    (0, eh.isWeb)() || ((tC = e.enabled), null == (t = e5.setNoiseCancellationEnableStats) || t.call(e5, e.enabled));
}
function rt(e) {
    nc({ silenceWarning: e.enabled }), ns.update();
}
function rn(e) {
    e5.setDebugLogging(e.enabled);
}
function rr(e) {
    let { level: t } = e;
    (l = t), ea.Z.setKrispSuppressionLevel(t);
}
function ri(e) {
    nc({ videoHook: e.enabled });
}
function ra(e) {
    nc({ experimentalSoundshare2: e.enabled });
}
function ro(e) {
    let { enabled: t } = e;
    nc({ useSystemScreensharePicker: t });
}
function rs(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = nc({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r,
        });
    e5.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function rl(e) {
    let { enabled: t } = e;
    nc({ qos: t }), e5.eachConnection((e) => e.setQoS(t));
}
function rc() {
    nu();
}
function ru(e) {
    let { inputDetected: t } = e;
    (tb = t), !ty && tb && ((ty = !0), ns.update());
}
function rd(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === tl) return !1;
    (tl = n), e5.eachConnection(t3);
}
function rf(e) {
    let { state: t, permissionType: n } = e,
        r = t === ew.PQ.ACCEPTED;
    switch (n) {
        case ew.Eu.AUDIO:
            (tk = !0), e5.eachConnection(t3);
            break;
        case ew.Eu.CAMERA:
            !r && tu && t4(!1);
            break;
        default:
            return !1;
    }
}
function rp() {
    return tI || !1;
}
async function r_() {
    try {
        var e, t, n, i;
        await eb.ZP.ensureModule("discord_krisp");
        let a = eb.ZP.requireModule("discord_krisp");
        (tI = !0),
            (s = null == (e = a.getSdkVersion) ? void 0 : e.call(a)),
            (l = null != (i = null == (t = a.getSuppressionLevel) ? void 0 : t.call(a)) ? i : 100),
            null == (n = a.getNcModels) ||
                n.call(a).then((e) => {
                    (tT = e), r.emitChange();
                }),
            r.emitChange();
    } catch (t) {
        eZ.warn("Failed to load Krisp module: ".concat(t.message)), eE.Z.captureException(t);
        let e = eL.H3.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eL.H3.INITIALIZED : n;
        }
        ep.default.track(eP.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), nc({ noiseCancellation: !1 });
    } finally {
        tS = !1;
    }
}
function rm() {
    return (0, eh.isWindows)() || (0, eh.isLinux)() || (0, eh.isMac)();
}
function rh() {
    !rm() || __OVERLAY__ || tS || tI
        ? (0, eh.isWeb)() && e5.supports(eL.AN.NOISE_CANCELLATION)
            ? ((tI = !0), r.emitChange())
            : (0, eh.isWeb)() && nc({ noiseCancellation: !1 })
        : ((tS = !0), r_());
}
function rg(e) {
    let { enabled: t } = e;
    ep.default.track(eP.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != tA ? tA : null,
        enabled: t,
    }),
        nc({ voiceFilterPlaybackEnabled: t });
}
function rE(e) {
    let { newVoiceFilterId: t } = e;
    nc({ mostRecentlyRequestedVoiceFilter: t }), e5.eachConnection((e) => e.setVoiceFilterId(t));
}
function rb() {
    nc({ mostRecentlyRequestedVoiceFilter: null });
}
function ry(e) {
    let { voiceFilterId: t } = e;
    (tP = tA), (tR = tN), (tA = t), (tN = null === t ? null : Date.now());
}
function rO(e) {
    let t = e.bypassEnabled;
    nc({ bypassSystemInputProcessing: t }), e5.setAudioInputBypassSystemProcessing(t), nX(e.location);
}
function rv(e) {
    rS(e.subsystem);
}
function rS(e) {
    e === eL.iA.AUTOMATIC
        ? (nc({ automaticAudioSubsystem: !0 }), rI())
        : (nc({ automaticAudioSubsystem: !1 }), e5.setAudioSubsystem(e));
}
function rI() {
    e5.queueAudioSubsystem(eL.iA.EXPERIMENTAL);
}
function rT(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && t4(i, null), null != t || null == n)) {
        tv = !1;
        return;
    }
    if (tv) return;
    tv = !0;
    let a = t$();
    (a.mute || a.deaf) &&
        (nc({
            deaf: !1,
            mute: !1,
        }),
        e5.eachConnection(t3));
}
function rC(e) {
    let { application: t } = e;
    e6.add(t.id);
}
function rA(e) {
    let { application: t } = e;
    e6.delete(t.id);
}
function rN(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (e7 = !1), e5.eachConnection(t3);
                break;
            case "video":
                t4(!1);
        }
}
function rP(e) {
    (e7 = e.enabled),
        e.unmute &&
            nc({
                mute: !1,
                deaf: !1,
            }),
        e5.eachConnection(t3);
}
function rR(e) {
    let { enabled: t } = e;
    ei.Z.requestPermission(ew.Eu.CAMERA), t4(t);
}
function rw(e) {
    let { sourceId: t, applicationName: n, quality: i } = e;
    if (!(0, P.CY)() || null == I.Z) return !1;
    let a = null,
        s = null,
        l = e_.Z.getPidFromDesktopSource(t);
    ({ soundshareId: a, soundshareSession: s } = nv(l));
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
        (e5.setClipsSource(null),
        (0, eh.isWindows)() && null != o.desktopSource.soundshareId && T.pn(o.desktopSource.soundshareId)),
        null != a && nS(a, s),
        (o = c);
    let u = tq(),
        d = t$().videoHook;
    e5.setClipsSource({
        desktopDescription: {
            id: o.desktopSource.id,
            soundshareId: o.desktopSource.soundshareId,
            useVideoHook: d,
            useGraphicsCapture: nn(),
            useCaptureDeviceForEncode: !1,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: ni(),
            videoHookStaleFrameTimeoutMs: ez,
            graphicsCaptureStaleFrameTimeoutMs: eq,
            hdrCaptureMode: u,
        },
        quality: i,
        applicationName: n,
    });
}
function rD(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((o = null), e5.setClipsSource(null));
}
function rx(e) {
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
            (({ soundshareId: e, soundshareSession: r } = nv(c)), null != e && nS(e, r)),
            t2(s),
            t4(s === eL.Yn.STREAM && tu, {
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
            o = e === eL.Yn.STREAM && tu,
            s =
                null != (i = a.qualityOptions)
                    ? i
                    : {
                          resolution: 720,
                          frameRate: 30,
                      };
        t4(o, {
            cameraSource: {
                videoDeviceGuid: t,
                audioDeviceGuid: n,
            },
            quality: {
                resolution: s.resolution,
                frameRate: s.frameRate,
            },
        });
    } else t4(tu, null);
}
function rL(e) {
    let { section: t } = e;
    return t === eP.oAB.VOICE && nf(), !1;
}
function rj() {
    return e5.eachConnection(ne), !1;
}
function rM(e) {
    let { enabled: t } = e,
        n = nc({ aecDumpEnabled: t });
    e5.setAecDump(n.aecDumpEnabled);
}
function rk(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (e8 = Object.values(eL.Yn).reduce((e, n) => {
        let r = n,
            i = e2();
        return (e[r] = m().merge(i, t[r])), e;
    }, {})),
        O.K.set(eF, e8),
        nd();
}
function rU(e) {
    let { state: t } = e,
        n = L.Z.isEnabled();
    if (t === eP.$7l.BACKGROUND && tu && !n) (tg = !0), t4(!1);
    else {
        if (t !== eP.$7l.ACTIVE || !tg) return !1;
        (tg = !1), t4(!0);
    }
    return !0;
}
function rG(e) {
    e5.eachConnection((t) => t.setBitRate(e.bitrate));
}
function rZ() {
    if ((!tu && null == a) || null != eT.Z.getRTCConnectionId()) return !1;
    t4(!1, null);
}
function rF() {
    return !!tD && ((tD = !1), !0);
}
function rB(e) {
    e5.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function rV(e) {
    let { settings: t } = e;
    e5.applyMediaFilterSettings(t).finally(() => {
        (tx = !1), r.emitChange();
    });
}
function rH() {
    tx = !0;
}
function rY() {
    tx = !1;
}
function rW(e) {
    tH = e.enabled;
}
function rK() {
    if ((0, eh.isDesktop)() && eh.isPlatformEmbedded && !tz) {
        tz = !0;
        let e = async () => {
            let t = await new Promise((e) => {
                eb.ZP.pollQueueMetrics((t) => {
                    e(t);
                });
            });
            t.periodMs = eL.rp;
            let n = rq(t);
            null !== n && ep.default.track(eP.rMx.VOICE_QUEUE_METRICS, n), setTimeout(e, eL.rp);
        };
        setTimeout(e, eL.rp);
    }
}
class rz extends (d = b.ZP.Store) {
    initialize() {
        nt(),
            nl(),
            rh(),
            nU(),
            rK(),
            (tB = {
                [eL.AN.VIDEO]: e5.supports(eL.AN.VIDEO),
                [eL.AN.DESKTOP_CAPTURE]: e5.supports(eL.AN.DESKTOP_CAPTURE),
                [eL.AN.HYBRID_VIDEO]: e5.supports(eL.AN.HYBRID_VIDEO),
            }),
            this.waitFor(eO.default, ev.Z, eS.Z, eI.Z, A.Z, x.Z, eT.Z, j.ZP, es.Z, eu.Z, eA.default, eN.Z, ef.Z);
    }
    supports(e) {
        return e5.supports(e);
    }
    supportsInApp(e) {
        return tB[e] || e5.supports(e);
    }
    isSupported() {
        return e5.supported();
    }
    isNoiseSuppressionSupported() {
        return e5.supports(eL.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return rp();
    }
    isNoiseCancellationError() {
        return tD;
    }
    isAutomaticGainControlSupported() {
        return e5.supports(eL.AN.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !no() && (e5.supports(eL.AN.LEGACY_AUDIO_SUBSYSTEM) || e5.supports(eL.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return e5.supports(eL.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === e5.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return rp();
    }
    isAecDumpSupported() {
        return e5.supports(eL.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return e5.supports(eL.AN.VIDEO) && e5.supports(eL.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        return (
            (null == (e = eI.Z.getChannel(tw)) ? void 0 : e.type) !== eP.d4z.GUILD_STAGE_VOICE &&
            e0 &&
            K.Z.simulcastEnabled()
        );
    }
    getAecDump() {
        return t$().aecDumpEnabled;
    }
    getMediaEngine() {
        return e5;
    }
    getVideoComponent() {
        return e5.Video;
    }
    getCameraComponent() {
        return e5.Camera;
    }
    getKrispSuppressionLevel() {
        return null != l ? l : 100;
    }
    getKrispEnableStats() {
        return tC;
    }
    isEnabled() {
        return e7;
    }
    isMute() {
        return this.isSelfMute() || to;
    }
    isDeaf() {
        return this.isSelfDeaf() || tc;
    }
    hasContext(e) {
        return null != e8[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eL.Yn.DEFAULT;
        return e === eL.Yn.DEFAULT && ts;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eL.Yn.DEFAULT;
        return (
            !this.isEnabled() ||
            t$(e).mute ||
            !ei.Z.didHavePermission(ew.Eu.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eL.Yn.DEFAULT && tl)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tp;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tp = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eL.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && eS.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return tH;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eL.Yn.DEFAULT;
        return !this.isSupported() || t$(e).deaf;
    }
    isVideoEnabled() {
        return tu && tE;
    }
    isVideoAvailable() {
        return Object.values(ti).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eL.Yn.STREAM;
        return te === e && null != a;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eL.Yn.STREAM;
        return te === t && null != a && (null == (e = a.desktopSource) ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eL.Yn.DEFAULT;
        return e !== eO.default.getId() && (t$(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return e5.supports(eL.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eL.Yn.DEFAULT;
        return null != (t = t$(n).disabledLocalVideos[e]) && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eL.Yn.DEFAULT;
        return null != (t = t$(n).videoToggleStateMap[e]) ? t : eP.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eL.Yn.DEFAULT;
        return t === eL.Yn.DEFAULT && tG.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eL.Yn.DEFAULT;
        return e === eL.Yn.DEFAULT && tG.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tx;
    }
    isNativeAudioPermissionReady() {
        return tk;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return te;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return tt;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eL.Yn.DEFAULT,
            n = t$(t).localPans[e];
        return null != n ? n : eK;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eL.Yn.DEFAULT,
            n = t === eL.Yn.STREAM ? eL.Yh : eL.Qx,
            r = t$(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return t$().inputVolume;
    }
    getOutputVolume() {
        return t$().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eL.Yn.DEFAULT;
        return t$(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eL.Yn.DEFAULT;
        return t$(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return tA;
    }
    getActiveVoiceFilterAppliedAt() {
        return tN;
    }
    getPreviousVoiceFilter() {
        return tP;
    }
    getPreviousVoiceFilterAppliedAt() {
        return tR;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return t$().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return t$().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            m().each(e8, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === eP.pM4.PUSH_TO_TALK && e6.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nm(tn, t$().inputDeviceId);
    }
    getOutputDeviceId() {
        return nm(tr, t$().outputDeviceId);
    }
    getVideoDeviceId() {
        return nm(ti, t$().videoDeviceId);
    }
    getInputDevices() {
        return tn;
    }
    getOutputDevices() {
        return tr;
    }
    getVideoDevices() {
        return ti;
    }
    getEchoCancellation() {
        let e = t$();
        return eS.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return e5.supports(eL.AN.SIDECHAIN_COMPRESSION) && t$().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return t$().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return t$().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tj && tj;
    }
    getLoopback() {
        return tF.size > 0;
    }
    getLoopbackReasons() {
        return tF;
    }
    getNoiseSuppression() {
        let e = t$();
        return eS.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = t$();
        return eS.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return t$().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return t$().noiseCancellation;
    }
    getHardwareEncoding() {
        return e0;
    }
    getEnableSilenceWarning() {
        return t$().silenceWarning;
    }
    getDebugLogging() {
        return e5.getDebugLogging();
    }
    getQoS() {
        return t$().qos;
    }
    getAttenuation() {
        return t$().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return t$().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return t$().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return na() && t$().automaticAudioSubsystem ? eL.iA.AUTOMATIC : e5.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return e5.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return t$().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === ex._.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eL.Yn.DEFAULT;
        return t$(e);
    }
    getState() {
        return {
            settingsByContext: e8,
            inputDevices: tn,
            outputDevices: tr,
            appSupported: tB,
            krispModuleLoaded: tI,
            krispVersion: s,
            krispSuppressionLevel: l,
            goLiveSource: a,
            goLiveContext: te,
        };
    }
    getInputDetected() {
        return tb;
    }
    getNoInputDetectedNotice() {
        return tO;
    }
    getPacketDelay() {
        return eh.isPlatformEmbedded || this.getMode() !== eP.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        e5.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return e9;
    }
    getVideoHook() {
        return t$().videoHook;
    }
    supportsVideoHook() {
        return e5.supports(eL.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = t$().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return (
            e5.supports(eL.AN.EXPERIMENTAL_SOUNDSHARE) &&
            g().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eR.T6)
        );
    }
    supportsHookSoundshare() {
        return (
            (0, eh.isWindows)() &&
            e5.supports(eL.AN.SOUNDSHARE) &&
            g().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eR.sA)
        );
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = t$().useSystemScreensharePicker,
            n = (0, eh.isLinux)();
        return e && (null != t ? t : n);
    }
    supportsSystemScreensharePicker() {
        return e5.supports(eL.AN.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return tK;
    }
    getUseGamescopeCapture() {
        return tW;
    }
    getEverSpeakingWhileMuted() {
        return t_;
    }
    getSpeakingWhileMuted() {
        return tm;
    }
    getKrispModelOverride() {
        return c;
    }
    getKrispModels() {
        return tT;
    }
    getKrispVadActivationThreshold() {
        var e;
        return null != (e = t$().modeOptions.vadKrispActivationThreshold) ? e : eW;
    }
    hasActiveCallKitCall() {
        return tY;
    }
    setHasActiveCallKitCall(e) {
        tY = e;
    }
    supportsScreenSoundshare() {
        return (0, eh.isMac)()
            ? e5.supports(eL.AN.SOUNDSHARE) &&
                  g().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eR.yG) &&
                  ni()
            : (0, eh.isWindows)()
              ? e5.supports(eL.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, eh.isLinux)() && e5.supports(eL.AN.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, eh.isWindows)()) {
            var e, t;
            return null == (t = this.getInputDevices()[this.getInputDeviceId()]) || null == (e = t.effects)
                ? void 0
                : e.find((e) => e === e1);
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
            e5.fetchAsyncResources(e)
        );
    }
    startDavePreload() {
        if (!tL && ((tL = !0), (0, eh.isWeb)())) {
            let e = { fetchDave: !0 };
            e5.fetchAsyncResources(e).catch((e) => {
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
        let e = e5.getSupportedSecureFramesProtocolVersion();
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
        return tV;
    }
}
function rq(e) {
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
eM(rz, "displayName", "MediaEngineStore");
let rQ = (r = new rz(S.Z, {
    VOICE_CHANNEL_SELECT: rT,
    VOICE_STATE_UPDATES: nP,
    CONNECTION_OPEN: nI,
    CONNECTION_CLOSED: nC,
    POST_CONNECTION_OPEN: nA,
    RTC_CONNECTION_STATE: nN,
    AUDIO_SET_TEMPORARY_SELF_MUTE: nR,
    AUDIO_TOGGLE_SELF_MUTE: nw,
    AUDIO_SET_SELF_MUTE: nD,
    AUDIO_TOGGLE_SELF_DEAF: nL,
    AUDIO_TOGGLE_LOCAL_MUTE: nj,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: nM,
    AUDIO_SET_LOCAL_VOLUME: nG,
    AUDIO_SET_LOCAL_PAN: nZ,
    AUDIO_SET_MODE: nF,
    AUDIO_SET_INPUT_VOLUME: nB,
    AUDIO_SET_OUTPUT_VOLUME: nV,
    AUDIO_SET_INPUT_DEVICE: nH,
    AUDIO_SET_OUTPUT_DEVICE: nY,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: nK,
    AUDIO_SET_ECHO_CANCELLATION: nJ,
    AUDIO_SET_SIDECHAIN_COMPRESSION: n$,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: n0,
    AUDIO_SET_LOOPBACK: n3,
    AUDIO_SET_NOISE_SUPPRESSION: n8,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: n6,
    AUDIO_SET_NOISE_CANCELLATION: n7,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: n9,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: rt,
    AUDIO_SET_DEBUG_LOGGING: rn,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: rr,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: re,
    MEDIA_ENGINE_SET_VIDEO_HOOK: ri,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: ra,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: ro,
    AUDIO_SET_ATTENUATION: rs,
    AUDIO_SET_QOS: rl,
    MEDIA_ENGINE_DEVICES: nq,
    AUDIO_VOLUME_CHANGE: nQ,
    AUDIO_RESET: rc,
    AUDIO_INPUT_DETECTED: ru,
    AUDIO_SET_SUBSYSTEM: rv,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rO,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rP,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rR,
    MEDIA_ENGINE_PERMISSION: rN,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rx,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nW,
    MEDIA_ENGINE_INTERACTION_REQUIRED: nz,
    USER_SETTINGS_MODAL_INIT: rL,
    USER_SETTINGS_MODAL_SET_SECTION: rL,
    CERTIFIED_DEVICES_SET: rj,
    RPC_APP_CONNECTED: rC,
    RPC_APP_DISCONNECTED: rA,
    OVERLAY_INITIALIZE: nT,
    APP_STATE_UPDATE: rU,
    SET_CHANNEL_BITRATE: rG,
    SET_VAD_PERMISSION: rd,
    SET_NATIVE_PERMISSION: rf,
    SET_CHANNEL_VIDEO_QUALITY_MODE: rB,
    MEDIA_ENGINE_SET_AEC_DUMP: rM,
    MEDIA_ENGINE_RESET_SETTINGS: rk,
    CHANNEL_DELETE: rZ,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rF,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rV,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rH,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rY,
    USER_SETTINGS_PROTO_UPDATE: nx,
    CLIPS_INIT: rw,
    CLIPS_SETTINGS_UPDATE: rD,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rW,
    VOICE_FILTER_REQUEST_SWITCH: rE,
    VOICE_FILTER_LOOPBACK_TOGGLE: rg,
    VOICE_FILTER_APPLIED: ry,
    VOICE_FILTER_DOWNLOAD_FAILED: rb,
    VOICE_FILTER_APPLY_FAILED: rb,
}));
