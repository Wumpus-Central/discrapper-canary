let r, i, a, o, s, l, c;
n.d(t, { Z: () => rN }), n(388685), n(953529), n(457542), n(539854), n(642613), n(49124), n(337869);
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
    W = n(839758),
    K = n(529558),
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
    ex = 1,
    eL = 1,
    ej = 1,
    eM = 1,
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
    e0 = { [eT.w5]: t3("No Input Devices") },
    e1 = { [eT.w5]: t3("No Output Devices") },
    e2 = { [eT.w5]: t3("No Video Devices") },
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
    tP = !1;
function tw() {
    var e, t;
    return null != (t = null == (e = eg.default.getCurrentUser()) ? void 0 : e.isStaff()) && t
        ? "always"
        : es.Z === g.R.CANARY
          ? "permittedDevicesOnly"
          : "never";
}
function tD() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT,
        t = ez[e];
    return null == t && ((t = eY()), (ez[e] = t)), t;
}
function tx() {
    var e, t, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT,
        i = tD(r),
        a = eW[null != (e = i.activeInputProfile) ? e : eI._.CUSTOM];
    return eR(eC({}, i, a), {
        modeOptions: eC({}, null != (t = i.modeOptions) ? t : {}, null != (n = a.modeOptions) ? n : {}),
    });
}
function tL(e) {
    var t;
    let n = tx(e.context);
    e.setInputMode(n.mode, {
        vadThreshold: n.modeOptions.threshold,
        vadAutoThreshold: n.modeOptions.autoThreshold,
        vadUseKrisp: n.modeOptions.vadUseKrisp && n2(),
        vadKrispActivationThreshold: null != (t = n.modeOptions.vadKrispActivationThreshold) ? t : 0.5,
        vadLeading: n.modeOptions.vadLeading,
        vadTrailing: n.modeOptions.vadTrailing,
        pttReleaseDelay: Math.round(n.modeOptions.delay),
    });
}
function tj(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.Qx;
    return p().clamp(e, 0, t);
}
function tM(e) {
    let t = tx(e.context),
        n = !eX || t.mute || t.deaf;
    e.context === eT.Yn.DEFAULT
        ? (n = n || e3 || e4 || e8 || !Q.Z.didHavePermission(eO.Eu.AUDIO))
        : e.context === eT.Yn.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eT.Yn.DEFAULT && S.Z.updateNativeMute();
}
function tk(e) {
    e !== eJ && (null != a && eK.setGoLiveSource(null, eJ), (eJ = e));
}
function tU() {
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
        let e = tx().videoDeviceId;
        e6 && e === eT.w5 && e9 === eT.w5 && e7 !== eT.Av ? (e = e7) : (e9 = e),
            (e7 = (e6 = i) ? t8(e2, e) : eT.Av),
            eK.setVideoInputDevice(e7);
    }
    if (((a = o), null != o)) {
        let e = {
            resolution: o.quality.resolution,
            frameRate: o.quality.frameRate,
        };
        if (null != o.desktopSource) {
            let t = tw(),
                n = tx().videoHook,
                i = tW(),
                a = i ? (tK() && (0, q.R)("MediaEngineStore_updateVideo").enabled ? ey.zj : ey.ZM) : 0;
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
                        allowScreenCaptureKit: tz(),
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
function tG(e) {
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
function tB(e) {
    let t = (0, W.n)({
            location: "getAutomaticGainControlConfig",
            disable: !e,
        }).enabled,
        n = (0, j.U)({
            location: "getAutomaticGainControlConfig",
            disable: !e || !t,
        });
    return eC({ enabled: e }, n);
}
function tZ(e, t) {
    e.setAutomaticGainControl(tB(t));
}
async function tF(e, t) {
    if ((0, eo.isIOS)() || (0, eo.isMac)()) {
        let e = await eK.getSystemMicrophoneMode();
        "" !== e &&
            "standard" !== e &&
            M.Z.getConfig({ location: "setNoiseCancellation" }).disabledModes.includes(e) &&
            (t = !1);
    }
    e.setNoiseCancellation(t);
    let n = (0, W.n)({
        location: "setNoiseCancellation",
        disable: !t,
    }).enabled;
    e.setNoiseCancellationDuringProcessing(n);
}
function tV(e) {
    let t = tx(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(e_.Z.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(e_.Z.hasNoiseSuppression(n) || t.noiseSuppression),
        tZ(e, e_.Z.hasAutomaticGainControl(n) || t.automaticGainControl),
        tF(e, t.noiseCancellation),
        e.setVoiceFilterId(tp),
        (0, eo.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function tH() {
    var e;
    return !!(0, Y.m)("MediaEngineStore") || null == (e = tx().hardwareEncoding) || e;
}
function tY() {
    eK.on(b.aB.Connection, (e) => {
        var t;
        tL(e), tM(e), tV(e);
        let n = tx();
        e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers),
            e.setQoS(n.qos),
            e.setExperimentalEncoders(n.experimentalEncoders),
            e.setHardwareH264(tH()),
            e.setSoftwareH264(null == (t = n.openH264) || t);
        let i = eh.Z.getGuildId(),
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
        o && e.setExperimentFlag(eT.V8.MUTE_BEFORE_PROCESSING, !0),
            s && e.setExperimentFlag(eT.V8.PTT_BEFORE_PROCESSING, !0),
            l && e.setExperimentFlag(eT.V8.SKIP_ENCODE, !0);
        let c = !1,
            u = !0;
        if (
            (e.setExperimentFlag(eT.V8.RESET_DECODER_ON_ERRORS, !0),
            c && e.setExperimentFlag(eT.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0),
            u && e.setExperimentFlag(eT.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0),
            e.context === eT.Yn.STREAM)
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
            ((0, eo.isWindows)()
                ? (null == tN ? void 0 : tN.startsWith("NVIDIA")) || (null == tN ? void 0 : tN.startsWith("AMD"))
                    ? e.setExperimentFlag(eT.V8.SIGNAL_AV1, !0)
                    : e.setExperimentFlag(eT.V8.SIGNAL_AV1_DECODE, !0)
                : ((0, eo.isMac)() || (0, eo.isLinux)()) && e.setExperimentFlag(eT.V8.SIGNAL_AV1_DECODE, !0),
            (0, eo.isWindows)() && e.setExperimentFlag(eT.V8.SIGNAL_AV1_HARDWARE_DECODE, !0),
            (0, eo.isWeb)())
        ) {
            let { enabled: t } = (0, F.A)("MediaEngineStore");
            e.setExperimentFlag(eT.V8.BROWSER_HEVC, t);
        }
        eK.setHasFullbandPerformance((0, R.Z)());
        let d = (0, G.D)("setupMediaEngine").enabled;
        if ((e.setRemoteAudioHistory(1000 * !!d), (0, C.Z)(r))) {
            let t = A.Z.getSettings();
            e.setExperimentFlag(eT.V8.STREAMER_CLIP, t.clipsEnabled);
            let { enableViewerClipping: n } = z.Z.getCurrentConfig(
                { location: "f627ab_15" },
                { autoTrackExposure: !1 },
            );
            e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eT.ux);
        }
        for (let t of ((n = tx(e.context)), e.setPostponeDecodeLevel(eF), Object.keys(n.localMutes)))
            t !== ed.default.getId() && e.setLocalMute(t, n.localMutes[t]);
        for (let t of Object.keys(n.localVolumes)) t !== ed.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
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
                            (0, L.Z)(null == a ? void 0 : a.desktopSource),
                        ),
                    );
            }),
            e.on(b.Sh.NoiseCancellationError, (e) => {
                eP.warn("noisecancellererror event: ".concat(e)),
                    (0, P.kr)({
                        type: P.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tG(e),
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
                        underlyingError: tG(e),
                    }),
                    er.default.track(eb.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    v.Z.dispatch({
                        type: "AUDIO_SET_MODE",
                        context: eT.Yn.DEFAULT,
                        mode: eb.pM4.VOICE_ACTIVITY,
                        options: eR(eC({}, tx(eT.Yn.DEFAULT).modeOptions), { vadUseKrisp: !1 }),
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
            let t = rC(e);
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
        nj(),
        tQ.reset(),
        (0, em.q)().then((e) => {
            null != e && (tN = e.gpu_brand);
        }),
        eK.on(b.aB.SystemMicrophoneModeChange, (e) => {
            eK.eachConnection(tV);
        });
}
function tW() {
    return (0, eo.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, ey.c5);
}
function tK() {
    return (0, eo.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, ey.sN);
}
function tz() {
    return (
        (0, eo.isMac)() &&
        eK.supports(eT.AN.SCREEN_CAPTURE_KIT) &&
        m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, ey.C7)
    );
}
function tq() {
    return (
        (0, eo.isWindows)() &&
        eK.supports(eT.AN.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        eK.supports(eT.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function tX() {
    return eK.supports(eT.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
let tQ = new (class {
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
        let e = tx();
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
function tJ() {
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
                e.sidechainCompressionSettingVersion < eM &&
                ((e.sidechainCompressionSettingVersion = eM), (e.sidechainCompression = !0)),
                (0, eo.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== eL &&
                      ((e.ncUseKrispjsSettingVersion = eL), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== ex &&
                      ((e.ncUseKrispSettingVersion = ex), (e.noiseSuppression = !1), (e.noiseCancellation = !0)),
                e.hardwareEnabledVersion !== ej && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = ej)),
                null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
        }),
        t1();
}
function t$(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = tD(t);
    return Object.assign(r, e), !__OVERLAY__ && n && y.K.set(ew, ez), r;
}
function t0() {
    y.K.remove(ew), location.reload();
}
function t1() {
    let e = tx();
    eK.setAudioInputDevice(e.inputDeviceId),
        eK.setAudioOutputDevice(e.outputDeviceId),
        tU(),
        eK.setInputVolume(e.inputVolume),
        eK.setOutputVolume(e.outputVolume),
        eK.setH264Enabled(tH() || e.openH264),
        eK.setAv1Enabled(tH()),
        eK.setH265Enabled(tH()),
        eK.setAecDump(e.aecDumpEnabled),
        eK.setSidechainCompression(e.sidechainCompression),
        eK.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        eK.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing);
}
function t2() {
    eX ||
        eK.enable().then(() =>
            v.Z.dispatch({
                type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
                enabled: !0,
                unmute: !1,
            }),
        );
}
function t3(e) {
    return {
        id: eT.w5,
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
    let i = null != (r = null != (n = e[t]) ? n : e[eT.w5]) ? r : p()(e).values().first();
    return null != i ? i.id : t;
}
function t5(e) {
    let t = e0;
    if (((e0 = t4(e, eS.intl.string(eS.t["/QIjDA"]))), !p().isEqual(e0, t))) {
        let e = tx(),
            t = t8(e0, e.inputDeviceId);
        eK.setAudioInputDevice(t);
    }
}
function t6(e) {
    let t = e1;
    if (((e1 = t4(e, eS.intl.string(eS.t.xlUg0t))), !p().isEqual(e1, t))) {
        let e = tx(),
            t = t8(e1, e.outputDeviceId);
        eK.setAudioOutputDevice(t);
    }
}
function t7(e) {
    ta = e.length > 0;
    let t = e2;
    if (((e2 = t4(e, eS.intl.string(eS.t.WKWARU))), e6 && !p().isEqual(e2, t))) {
        var n;
        let e = void 0 !== e2[e7],
            r = e7 === eT.w5 && (null == (n = t[eT.w5]) ? void 0 : n.disabled);
        tU(e || r);
    }
}
function t9() {
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
            { localMutes: s, localVolumes: l } = tx(i);
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
function nt(e, t) {
    (0, eo.isWindows)() &&
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
function nn(e) {
    (i = e.sessionId), (e3 = !1), (e5 = !1);
    let t = tx();
    if (
        (tq() && (tX() ? rn(eT.iA.AUTOMATIC) : t.automaticAudioSubsystem && rr()),
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
              t$({ mostRecentlyRequestedVoiceFilter: null }))
            : n(358820).r5()),
        t9();
}
function nr(e) {
    let { mediaEngineState: t } = e;
    (ez = t.settingsByContext),
        (e0 = t.inputDevices),
        (e1 = t.outputDevices),
        (tC = t.appSupported),
        (td = t.krispModuleLoaded),
        (s = t.krispVersion),
        (eJ = t.goLiveContext);
}
function ni() {
    i = null;
}
function na() {
    if ((0, eo.isWeb)()) {
        let e = K.N.getCurrentConfig({ location: "MediaEngineStore handlePostConnectionOpen" });
        e.loadWasmModule && e.preload && r.startDavePreload();
    }
    return !1;
}
function no(e) {
    switch (e.state) {
        case eb.hes.CONNECTING:
            t2();
            break;
        case eb.hes.RTC_CONNECTING:
            (ts = !1), (tl = !1);
            break;
        case eb.hes.RTC_CONNECTED:
            tU();
            break;
        case eb.hes.DISCONNECTED:
            nh(), nm();
    }
    tQ.update();
}
function ns(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (e3 = t.mute || t.suppress), (e5 = t.deaf), eK.eachConnection(tM);
            let e = null != t.guildId && null != t.channelId && null != tE && tE !== t.channelId,
                n = !tc && null == t.channelId;
            return tU(!e && !n && e6), (tE = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== ed.default.getId() || null != eh.Z.getChannelId() || tU(!1, null), e;
    }, !1);
}
function nl(e) {
    let { mute: t } = e;
    (e4 = t), eK.eachConnection(tM);
}
function nc(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = tx(t);
    if (t === eT.Yn.DEFAULT && (Q.Z.requestPermission(eO.Eu.AUDIO), e8)) return !1;
    (r = !i && !r) || (i = !1),
        n || (te = !0),
        t$(
            {
                mute: r,
                deaf: i,
            },
            t,
        ),
        eK.eachConnection(tM);
}
function nu(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    t$({ mute: n }, t), r || (te = !0), eK.eachConnection(tM);
}
function nd(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== ev.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    t9(!0);
}
function nf(e) {
    let { context: t } = e;
    t$({ deaf: !tx(t).deaf }, t), eK.eachConnection(tM);
}
function n_(e) {
    let { context: t, userId: n } = e;
    if (n === ed.default.getId()) return;
    let { localMutes: r } = tx(t);
    r[n] ? delete r[n] : (r[n] = !0),
        t$({ localMutes: r }, t),
        eK.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function np(e) {
    var t, n, r, i, a, o, s;
    let { context: l, userId: c, videoToggleState: u, persist: d, isAutomatic: _ } = e;
    f()(!(d && _), "These are not allowed to both be true.");
    let p = u === eb.ZUi.DISABLED,
        { disabledLocalVideos: h } = tx(l),
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
    let { videoToggleStateMap: I } = tx(l);
    if (
        (I[c] === eb.ZUi.AUTO_PROBING &&
            u === eb.ZUi.AUTO_ENABLED &&
            (0, X.Z)(c, p ? eT.fC.AUTO_DISABLE : eT.fC.AUTO_ENABLE, E),
        (I[c] = u),
        t$({ videoToggleStateMap: I }, l, d),
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
        t$({ disabledLocalVideos: h }, l, d),
        eK.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(c, null != (t = h[c]) && t);
        }, l);
}
function nh() {
    if (0 === tT.size) return;
    let e = eT.Yn.DEFAULT,
        { disabledLocalVideos: t } = tx(e);
    tT.forEach((n) => {
        f()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            eK.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tT.clear(),
        t$({ disabledLocalVideos: t }, e, !1);
}
function nm() {
    let e = eT.Yn.DEFAULT,
        { videoToggleStateMap: t } = tx(e);
    for (let [e, n] of Object.entries(t)) n === eb.ZUi.AUTO_PROBING && delete t[e];
    t$({ videoToggleStateMap: t }, e, !1);
}
function ng(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === ed.default.getId()) return;
    let i = t === eT.Yn.STREAM ? eT.Yh : eT.Qx,
        { localVolumes: a } = tx(t);
    r === i ? delete a[n] : (a[n] = r), t$({ localVolumes: a }, t), eK.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function nE(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: a } = tx(t);
    (a[n] = {
        left: r,
        right: i,
    }),
        t$({ localPans: a }, t),
        eK.eachConnection((e) => e.setLocalPan(n, r, i), t);
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
        eK.eachConnection(tL),
        tQ.update();
}
function ny(e) {
    let { volume: t } = e;
    t$({ inputVolume: tj(t) }), eK.setInputVolume(t);
}
function nO(e) {
    let { volume: t } = e;
    t$({ outputVolume: t }), eK.setOutputVolume(t);
}
function nv(e) {
    let { id: t } = e;
    (t = t8(e0, t)), (e$ = performance.now()), t$({ inputDeviceId: t }), eK.setAudioInputDevice(t);
}
function nI(e) {
    let { id: t } = e;
    t$({ outputDeviceId: (t = t8(e1, t)) }), eK.setAudioOutputDevice(t);
}
function nT(e) {
    let { id: t } = e;
    t$({ videoDeviceId: (t = t8(e2, t)) }), tU();
}
function nS(e) {
    let { inputProfile: t } = e;
    t$({ activeInputProfile: t });
    let n = tx();
    eK.eachConnection((e) => {
        tL(e),
            tZ(e, n.automaticGainControl),
            e.setEchoCancellation(n.echoCancellation),
            e.setExperimentalEncoders(n.experimentalEncoders),
            tF(e, n.noiseCancellation),
            e.setNoiseSuppression(n.noiseSuppression);
    }),
        eK.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        tQ.update(),
        nM();
}
function nA(e) {
    return eQ !== e.required && ((eQ = e.required), e.required || eK.interact(), !0);
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
    let n = tx(),
        r = eK.getAudioSubsystem(),
        i = eK.getAudioLayer(),
        a = t8(e0, n.inputDeviceId),
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
function nP(e) {
    let t = t$({ echoCancellation: e.enabled });
    eK.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nM(), nR(e.location);
}
function nw(e) {
    nx(e.enabled);
}
function nD(e) {
    let t = t$({ sidechainCompressionStrength: e.strength });
    eK.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function nx(e) {
    let t = t$({ sidechainCompression: e });
    eK.setSidechainCompression(t.sidechainCompression);
}
function nL(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tA.add(n) : tA.delete(n), nj(), nM();
}
function nj() {
    let e = !tA.has("voice_filter_preview") && !tA.has("mic_test");
    eK.setMaybePreprocessMute(e);
}
function nM() {
    let e = tx(),
        t = tA.size > 0,
        n = e.inputDeviceId,
        r = e_.Z.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        a = e_.Z.hasNoiseSuppression(n) || e.noiseSuppression,
        o = tB(e_.Z.hasAutomaticGainControl(n) || e.automaticGainControl),
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
function nk(e) {
    let t = t$({ noiseSuppression: e.enabled });
    eK.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nM(), nR(e.location);
}
function nU(e) {
    let t = t$({ automaticGainControl: e.enabled });
    eK.eachConnection((e) => tZ(e, t.automaticGainControl)), nM(), nR(e.location);
}
function nG(e) {
    let t = t$({ noiseCancellation: e.enabled });
    eK.eachConnection((e) => tF(e, t.noiseCancellation)), nM(), nR(e.location);
}
function nB(e) {
    J.Z.setKrispModelOverride(e.model), (c = e.model), nM();
}
function nZ(e) {
    var t;
    (0, eo.isWeb)() || ((t_ = e.enabled), null == (t = eK.setNoiseCancellationEnableStats) || t.call(eK, e.enabled));
}
function nF(e) {
    let t = t$({ experimentalEncoders: e.enabled });
    eK.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
}
function nV(e) {
    let { enabled: t } = e,
        n = t$({ hardwareEncoding: t }),
        r = tH();
    eK.eachConnection((e) => e.setHardwareH264(r)),
        eK.setH264Enabled(r || n.openH264),
        eK.setAv1Enabled(r),
        eK.setH265Enabled(r);
}
function nH(e) {
    t$({ silenceWarning: e.enabled }), tQ.update();
}
function nY(e) {
    eK.setDebugLogging(e.enabled);
}
function nW(e) {
    let { level: t } = e;
    (l = t), J.Z.setKrispSuppressionLevel(t);
}
function nK(e) {
    t$({ videoHook: e.enabled });
}
function nz(e) {
    t$({ experimentalSoundshare2: e.enabled });
}
function nq(e) {
    let { enabled: t } = e;
    t$({ useSystemScreensharePicker: t });
}
function nX(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = t$({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r,
        });
    eK.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function nQ(e) {
    let { enabled: t } = e;
    t$({ qos: t }), eK.eachConnection((e) => e.setQoS(t));
}
function nJ() {
    t0();
}
function n$(e) {
    let { inputDetected: t } = e;
    (to = t), !ts && to && ((ts = !0), tQ.update());
}
function n0(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === e8) return !1;
    (e8 = n), eK.eachConnection(tM);
}
function n1(e) {
    let { state: t, permissionType: n } = e,
        r = t === eO.PQ.ACCEPTED;
    switch (n) {
        case eO.Eu.AUDIO:
            (tv = !0), eK.eachConnection(tM);
            break;
        case eO.Eu.CAMERA:
            !r && e6 && tU(!1);
            break;
        default:
            return !1;
    }
}
function n2() {
    return td || !1;
}
async function n3() {
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
        er.default.track(eb.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), t$({ noiseCancellation: !1 });
    } finally {
        tu = !1;
    }
}
function n4() {
    return (0, eo.isWindows)() || (0, eo.isLinux)() || (0, eo.isMac)();
}
function n8() {
    !n4() || __OVERLAY__ || tu || td
        ? (0, eo.isWeb)() && eK.supports(eT.AN.NOISE_CANCELLATION)
            ? ((td = !0), r.emitChange())
            : (0, eo.isWeb)() && t$({ noiseCancellation: !1 })
        : ((tu = !0), n3());
}
function n5(e) {
    let { enabled: t } = e;
    er.default.track(eb.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != tp ? tp : null,
        enabled: t,
    }),
        t$({ voiceFilterPlaybackEnabled: t });
}
function n6(e) {
    let { newVoiceFilterId: t } = e;
    t$({ mostRecentlyRequestedVoiceFilter: t }), eK.eachConnection((e) => e.setVoiceFilterId(t));
}
function n7() {
    t$({ mostRecentlyRequestedVoiceFilter: null });
}
function n9(e) {
    let { voiceFilterId: t } = e;
    (tm = tp), (tg = th), (tp = t), (th = null === t ? null : Date.now());
}
function re(e) {
    let t = e.bypassEnabled;
    t$({ bypassSystemInputProcessing: t }), eK.setAudioInputBypassSystemProcessing(t), nR(e.location);
}
function rt(e) {
    rn(e.subsystem);
}
function rn(e) {
    e === eT.iA.AUTOMATIC
        ? (t$({ automaticAudioSubsystem: !0 }), rr())
        : (t$({ automaticAudioSubsystem: !1 }), eK.setAudioSubsystem(e));
}
function rr() {
    eK.queueAudioSubsystem(eT.iA.EXPERIMENTAL);
}
function ri(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && tU(i, null), null != t || null == n)) {
        tc = !1;
        return;
    }
    if (tc) return;
    tc = !0;
    let a = tx();
    (a.mute || a.deaf) &&
        (t$({
            deaf: !1,
            mute: !1,
        }),
        eK.eachConnection(tM));
}
function ra(e) {
    let { application: t } = e;
    eq.add(t.id);
}
function ro(e) {
    let { application: t } = e;
    eq.delete(t.id);
}
function rs(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (eX = !1), eK.eachConnection(tM);
                break;
            case "video":
                tU(!1);
        }
}
function rl(e) {
    (eX = e.enabled),
        e.unmute &&
            t$({
                mute: !1,
                deaf: !1,
            }),
        eK.eachConnection(tM);
}
function rc(e) {
    let { enabled: t } = e;
    Q.Z.requestPermission(eO.Eu.CAMERA), tU(t);
}
function ru(e) {
    let { sourceId: t, applicationName: n, quality: i } = e,
        a = A.Z.isDecoupledGameClippingEnabled(),
        s = A.Z.getSettings().decoupledClipsEnabled;
    if (!a || !s || null == I.Z) return;
    let l = null,
        c = null,
        u = ei.Z.getPidFromDesktopSource(t);
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
        (eK.setClipsSource(null),
        (0, eo.isWindows)() && null != o.desktopSource.soundshareId && T.pn(o.desktopSource.soundshareId)),
        null != l && nt(l, c),
        (o = d);
    let f = tw(),
        _ = tx().videoHook;
    eK.setClipsSource({
        desktopDescription: {
            id: o.desktopSource.id,
            soundshareId: o.desktopSource.soundshareId,
            useVideoHook: _,
            useGraphicsCapture: tW(),
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: tz(),
            videoHookStaleFrameTimeoutMs: eG,
            graphicsCaptureStaleFrameTimeoutMs: eB,
            hdrCaptureMode: f,
        },
        quality: i,
        applicationName: n,
    });
}
function rd(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((o = null), eK.setClipsSource(null));
}
function rf(e) {
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
            (({ soundshareId: e, soundshareSession: r } = ne(c)), null != e && nt(e, r)),
            tk(s),
            tU(s === eT.Yn.STREAM && e6, {
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
    } else tU(e6, null);
}
function r_(e) {
    let { section: t } = e;
    return t === eb.oAB.VOICE && t2(), !1;
}
function rp() {
    return eK.eachConnection(tV), !1;
}
function rh(e) {
    let { enabled: t } = e,
        n = t$({ openH264: t });
    eK.setH264Enabled(tH() || n.openH264),
        eK.eachConnection((e) => {
            var t;
            return e.setSoftwareH264(null == (t = n.openH264) || t);
        });
}
function rm(e) {
    let { enabled: t } = e,
        n = t$({ aecDumpEnabled: t });
    eK.setAecDump(n.aecDumpEnabled);
}
function rg(e) {
    let { state: t } = e,
        n = D.Z.isEnabled();
    if (t === eb.$7l.BACKGROUND && e6 && !n) (ti = !0), tU(!1);
    else {
        if (t !== eb.$7l.ACTIVE || !ti) return !1;
        (ti = !1), tU(!0);
    }
    return !0;
}
function rE(e) {
    eK.eachConnection((t) => t.setBitRate(e.bitrate));
}
function rb() {
    if ((!e6 && null == a) || null != eh.Z.getRTCConnectionId()) return !1;
    tU(!1, null);
}
function ry() {
    return !!tb && ((tb = !1), !0);
}
function rO(e) {
    eK.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function rv(e) {
    let { settings: t } = e;
    eK.applyMediaFilterSettings(t).finally(() => {
        (ty = !1), r.emitChange();
    });
}
function rI() {
    ty = !0;
}
function rT() {
    ty = !1;
}
function rS(e) {
    tR = e.enabled;
}
class rA extends (u = E.ZP.Store) {
    initialize() {
        tY(),
            tJ(),
            n8(),
            nm(),
            (tC = {
                [eT.AN.VIDEO]: eK.supports(eT.AN.VIDEO),
                [eT.AN.DESKTOP_CAPTURE]: eK.supports(eT.AN.DESKTOP_CAPTURE),
                [eT.AN.HYBRID_VIDEO]: eK.supports(eT.AN.HYBRID_VIDEO),
            }),
            this.waitFor(ed.default, e_.Z, ep.Z, eh.Z, x.ZP, Q.Z.storage, ee.Z, w.Z, A.Z);
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
        return n2();
    }
    isNoiseCancellationError() {
        return tb;
    }
    isAutomaticGainControlSupported() {
        return eK.supports(eT.AN.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !tX() && (eK.supports(eT.AN.LEGACY_AUDIO_SUBSYSTEM) || eK.supports(eT.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return eK.supports(eT.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === eK.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return n2();
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
            n = tH();
        return !t && n && V.Z.simulcastEnabled();
    }
    getAecDump() {
        return tx().aecDumpEnabled;
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
            tx(e).mute ||
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
        return !this.isSupported() || tx(e).deaf;
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
        return e !== ed.default.getId() && (tx(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return eK.supports(eT.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT;
        return null != (t = tx(n).disabledLocalVideos[e]) && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT;
        return null != (t = tx(n).videoToggleStateMap[e]) ? t : eb.ZUi.NONE;
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
            n = tx(t).localPans[e];
        return null != n ? n : eU;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT,
            n = t === eT.Yn.STREAM ? eT.Yh : eT.Qx,
            r = tx(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return tx().inputVolume;
    }
    getOutputVolume() {
        return tx().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT;
        return tx(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT;
        return tx(e).modeOptions;
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
        return tx().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return tx().voiceFilterPlaybackEnabled;
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
        return t8(e0, tx().inputDeviceId);
    }
    getOutputDeviceId() {
        return t8(e1, tx().outputDeviceId);
    }
    getVideoDeviceId() {
        return t8(e2, tx().videoDeviceId);
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
        let e = tx();
        return e_.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return eK.supports(eT.AN.SIDECHAIN_COMPRESSION) && tx().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return tx().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return tx().h265Enabled;
    }
    getLoopback() {
        return tA.size > 0;
    }
    getLoopbackReasons() {
        return tA;
    }
    getNoiseSuppression() {
        let e = tx();
        return e_.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tx();
        return e_.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return tx().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return tx().noiseCancellation;
    }
    getExperimentalEncoders() {
        return tx().experimentalEncoders;
    }
    getHardwareEncoding() {
        return tH();
    }
    getHardwareEncodingSetting() {
        var e;
        return null == (e = tx().hardwareEncoding) || e;
    }
    getEnableSilenceWarning() {
        return tx().silenceWarning;
    }
    getDebugLogging() {
        return eK.getDebugLogging();
    }
    getQoS() {
        return tx().qos;
    }
    getAttenuation() {
        return tx().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return tx().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return tx().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return tq() && tx().automaticAudioSubsystem ? eT.iA.AUTOMATIC : eK.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return eK.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return tx().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eI._.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT;
        return tx(e);
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
        return tx().videoHook;
    }
    supportsVideoHook() {
        return eK.supports(eT.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tx().experimentalSoundshare2;
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
            t = tx().useSystemScreensharePicker,
            n =
                (0, eo.isLinux)() ||
                ((0, eo.isMac)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, ey.jR));
        return e && (null != t ? t : n);
    }
    supportsSystemScreensharePicker() {
        return eK.supports(eT.AN.NATIVE_SCREENSHARE_PICKER);
    }
    getOpenH264() {
        return tx().openH264;
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
        return null != (e = tx().modeOptions.vadKrispActivationThreshold) ? e : ek;
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
                  tz()
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
                (e.fetchDave = K.N.getCurrentConfig({
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
            let { useWasmModule: e } = K.N.getCurrentConfig({
                location: "MediaEngineStore getSupportedSecureFramesProtocolVersion",
            });
            if (!e) return 0;
        }
        let e = eK.getSupportedSecureFramesProtocolVersion(),
            t = K.m.getCurrentConfig({ location: "MediaEngineStore" });
        return 114 === e && (e = 1), t.canSupportDaveProtocol && e >= t.protocolVersionFloor ? e : 0;
    }
    hasClipsSource() {
        return null != o;
    }
    getGpuBrand() {
        return tN;
    }
}
function rC(e) {
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
eA(rA, "displayName", "MediaEngineStore");
let rN = (r = new rA(v.Z, {
    VOICE_CHANNEL_SELECT: ri,
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
    AUDIO_SET_LOOPBACK: nL,
    AUDIO_SET_NOISE_SUPPRESSION: nk,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nU,
    AUDIO_SET_NOISE_CANCELLATION: nG,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: nB,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: nH,
    AUDIO_SET_DEBUG_LOGGING: nY,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: nW,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: nZ,
    MEDIA_ENGINE_SET_VIDEO_HOOK: nK,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: nz,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: nq,
    AUDIO_SET_ATTENUATION: nX,
    AUDIO_SET_QOS: nQ,
    MEDIA_ENGINE_DEVICES: nC,
    AUDIO_VOLUME_CHANGE: nN,
    AUDIO_RESET: nJ,
    AUDIO_INPUT_DETECTED: n$,
    AUDIO_SET_SUBSYSTEM: rt,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: re,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rl,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rc,
    MEDIA_ENGINE_PERMISSION: rs,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rf,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nT,
    MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nF,
    MEDIA_ENGINE_INTERACTION_REQUIRED: nA,
    USER_SETTINGS_MODAL_INIT: r_,
    USER_SETTINGS_MODAL_SET_SECTION: r_,
    CERTIFIED_DEVICES_SET: rp,
    RPC_APP_CONNECTED: ra,
    RPC_APP_DISCONNECTED: ro,
    OVERLAY_INITIALIZE: nr,
    MEDIA_ENGINE_SET_OPEN_H264: rh,
    MEDIA_ENGINE_SET_HARDWARE_ENCODING: nV,
    APP_STATE_UPDATE: rg,
    SET_CHANNEL_BITRATE: rE,
    SET_VAD_PERMISSION: n0,
    SET_NATIVE_PERMISSION: n1,
    SET_CHANNEL_VIDEO_QUALITY_MODE: rO,
    MEDIA_ENGINE_SET_AEC_DUMP: rm,
    CHANNEL_DELETE: rb,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: ry,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rv,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rI,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rT,
    USER_SETTINGS_PROTO_UPDATE: nd,
    CLIPS_INIT: ru,
    CLIPS_SETTINGS_UPDATE: rd,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rS,
    VOICE_FILTER_REQUEST_SWITCH: n6,
    VOICE_FILTER_LOOPBACK_TOGGLE: n5,
    VOICE_FILTER_APPLIED: n9,
    VOICE_FILTER_DOWNLOAD_FAILED: n7,
    VOICE_FILTER_APPLY_FAILED: n7,
}));
