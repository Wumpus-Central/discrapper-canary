let r, i, a, o, s, l, c;
(n.d(t, { Z: () => rE }), n(388685), n(953529), n(457542), n(539854), n(642613), n(49124), n(337869));
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
    N = n(779618),
    C = n(710845),
    R = n(535911),
    P = n(458725),
    w = n(353926),
    D = n(646047),
    L = n(594190),
    x = n(502286),
    M = n(822253),
    k = n(355552),
    j = n(294473),
    U = n(706629),
    G = n(166884),
    B = n(585360),
    V = n(787199),
    F = n(529558),
    Z = n(111672),
    H = n(441167),
    Y = n(580930),
    W = n(787517),
    K = n(338336),
    z = n(751571),
    q = n(311473),
    X = n(725380),
    Q = n(581883),
    J = n(875527),
    $ = n(420439),
    ee = n(626135),
    et = n(12647),
    en = n(70956),
    er = n(358085),
    ei = n(747268),
    ea = n(960048),
    eo = n(998502),
    es = n(13140),
    el = n(314897),
    ec = n(967368),
    eu = n(463395),
    ed = n(592125),
    ef = n(19780),
    e_ = n(704806),
    ep = n(594174),
    eh = n(631768),
    em = n(981631),
    eg = n(70722),
    eE = n(761274),
    eb = n(526761),
    ey = n(345655),
    eO = n(65154),
    ev = n(388032);
function eI(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function eT(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                eI(e, t, n[t]);
            }));
    }
    return e;
}
function eS(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function eA(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eS(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eN = new C.Z('MediaEngineStore'),
    eC = 'MediaEngineStore',
    eR = 4,
    eP = 1,
    ew = 1,
    eD = 1,
    eL = 1,
    ex = 0.5,
    eM = {
        left: 1,
        right: 1
    },
    ek = 500,
    ej = 5 * en.Z.Millis.SECOND,
    eU = -60,
    eG = 100,
    eB = 2 * en.Z.Millis.SECOND,
    eV = 0;
function eF() {
    return {
        mode: em.pM4.VOICE_ACTIVITY,
        modeOptions: {
            threshold: eU,
            autoThreshold: er.isPlatformEmbedded || __OVERLAY__,
            vadUseKrisp: !0,
            vadKrispActivationThreshold: ex,
            vadLeading: 5,
            vadTrailing: 25,
            delay: 20,
            shortcut: []
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
        inputVolume: eO.Qx,
        outputVolume: eO.Qx,
        inputDeviceId: eO.w5,
        outputDeviceId: eO.w5,
        videoDeviceId: eO.w5,
        qos: !1,
        qosMigrated: !1,
        videoHook: eH.supports(eO.AN.VIDEO_HOOK),
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        openH264: !0,
        h265Enabled: !0,
        vadThrehsoldMigrated: !1,
        aecDumpEnabled: !1,
        sidechainCompression: !1,
        sidechainCompressionSettingVersion: 0,
        sidechainCompressionStrength: 50,
        automaticAudioSubsystem: !0,
        activeInputProfile: null
    };
}
let eZ = {
        [ey._.CUSTOM]: {},
        [ey._.VOICE_ISOLATION]: {
            modeOptions: {
                autoThreshold: !0,
                vadUseKrisp: !0
            },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !1
        },
        [ey._.STUDIO]: {
            mode: em.pM4.VOICE_ACTIVITY,
            modeOptions: {
                threshold: -84,
                autoThreshold: !1,
                vadUseKrisp: !1
            },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0
        }
    },
    eH = (0, b.Mt)((0, b.jj)());
eN.enableNativeLogger(!0);
let eY = {},
    eW = new Set([eO.Yn.DEFAULT]),
    eK = eH.supports(eO.AN.AUTO_ENABLE),
    ez = !1,
    eq = eO.Yn.STREAM,
    eX = performance.now(),
    eQ = { [eO.w5]: tz('No Input Devices') },
    eJ = { [eO.w5]: tz('No Output Devices') },
    e$ = { [eO.w5]: tz('No Video Devices') },
    e0 = !1,
    e1 = !1,
    e2 = !1,
    e3 = !1,
    e4 = !1,
    e5 = eO.Av,
    e6 = !1,
    e8 = !1,
    e7 = !1,
    e9 = new O.V7(),
    te = !1,
    tt = !1,
    tn = null,
    tr = !1,
    ti = !1,
    ta = !1,
    to = !1,
    ts = !1,
    tl = [],
    tc = !1,
    tu = null,
    td = null,
    tf = null,
    t_ = null,
    tp = null,
    th = !1,
    tm = !1,
    tg = !1;
(z.Z.hasPermission(eE.Eu.AUDIO, { showAuthorizationError: !1 }), z.Z.hasPermission(eE.Eu.CAMERA, { showAuthorizationError: !1 }));
let tE = !1,
    tb = new Set(),
    ty = tE,
    tO = new Set(),
    tv = {},
    tI = null,
    tT = !0,
    tS = !1;
function tA() {
    var e, t;
    return null != (t = null == (e = ep.default.getCurrentUser()) ? void 0 : e.isStaff()) && t ? 'always' : ei.Z === g.R.CANARY ? 'permittedDevicesOnly' : 'never';
}
function tN() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eO.Yn.DEFAULT,
        t = eY[e];
    return (null == t && ((t = eF()), (eY[e] = t)), t);
}
function tC() {
    var e, t, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eO.Yn.DEFAULT,
        i = tN(r),
        a = eZ[null != (e = i.activeInputProfile) ? e : ey._.CUSTOM];
    return eA(eT({}, i, a), { modeOptions: eT({}, null != (t = i.modeOptions) ? t : {}, null != (n = a.modeOptions) ? n : {}) });
}
function tR(e) {
    var t;
    let n = tC(e.context);
    e.setInputMode(n.mode, {
        vadThreshold: n.modeOptions.threshold,
        vadAutoThreshold: n.modeOptions.autoThreshold,
        vadUseKrisp: n.modeOptions.vadUseKrisp && nW(),
        vadKrispActivationThreshold: null != (t = n.modeOptions.vadKrispActivationThreshold) ? t : 0.5,
        vadLeading: n.modeOptions.vadLeading,
        vadTrailing: n.modeOptions.vadTrailing,
        pttReleaseDelay: n.modeOptions.delay
    });
}
function tP(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eO.Qx;
    return p().clamp(e, 0, t);
}
function tw(e) {
    let t = tC(e.context),
        n = !eK || t.mute || t.deaf;
    (e.context === eO.Yn.DEFAULT ? (n = n || e0 || e1 || e2 || !z.Z.didHavePermission(eE.Eu.AUDIO)) : e.context === eO.Yn.STREAM && (n = !0), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eO.Yn.DEFAULT && S.Z.updateNativeMute());
}
function tD(e) {
    e !== eq && (null != a && eH.setGoLiveSource(null, eq), (eq = e));
}
function tL() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e4,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        s = a;
    if (((null == s ? void 0 : s.desktopSource) != null && s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? void 0 : e.id) && (null != s.desktopSource.soundshareId && (0, er.isWindows)() && T.pn(s.desktopSource.soundshareId), eH.setGoLiveSource(null, eq)), (null == s ? void 0 : s.cameraSource) != null && (s.cameraSource.videoDeviceGuid !== (null == o || null == (t = o.cameraSource) ? void 0 : t.videoDeviceGuid) || s.cameraSource.audioDeviceGuid !== (null == o || null == (n = o.cameraSource) ? void 0 : n.audioDeviceGuid)) && eH.setGoLiveSource(null, eq), (e4 || i) && ((e5 = (e4 = i) ? tX(e$, tC().videoDeviceId) : eO.Av), eH.setVideoInputDevice(e5)), (a = o), null != o)) {
        let e = {
            resolution: o.quality.resolution,
            frameRate: o.quality.frameRate
        };
        if (null != o.desktopSource) {
            let t = tA(),
                n = tC().videoHook,
                i = tj(),
                a = i ? (tU() && (0, W.R)('MediaEngineStore_updateVideo').enabled ? eg.zj : eg.ZM) : 0;
            eH.setGoLiveSource(
                {
                    desktopDescription: {
                        id: o.desktopSource.id,
                        soundshareId: o.desktopSource.soundshareId,
                        useVideoHook: n,
                        useGraphicsCapture: i,
                        useGraphicsCaptureApiLevel: a,
                        useLoopback: r.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: tG(),
                        videoHookStaleFrameTimeoutMs: ek,
                        graphicsCaptureStaleFrameTimeoutMs: ej,
                        hdrCaptureMode: t
                    },
                    quality: e
                },
                eq
            );
        }
        null != o.cameraSource &&
            eH.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: o.cameraSource.audioDeviceGuid
                    },
                    quality: e
                },
                eq
            );
    }
}
function tx(e) {
    switch (e) {
        case eO.H3.CPU_OVERUSE:
            return P.Nk.NoiseCancellerCpuOveruse;
        case eO.H3.FAILED:
            return P.Nk.NoiseCancellerFailed;
        case eO.H3.VAD_CPU_OVERUSE:
            return P.Nk.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function tM(e) {
    let t = tC(),
        n = t.inputDeviceId;
    if ((e.setEchoCancellation(eu.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(eu.Z.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(eu.Z.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), e.setVoiceFilterId(tu), (0, er.isWeb)())) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function tk() {
    (eH.on(b.aB.Connection, (e) => {
        var t, n;
        (tR(e), tw(e), tM(e));
        let i = tC();
        (e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers), e.setQoS(i.qos), e.setExperimentalEncoders(i.experimentalEncoders), e.setHardwareH264(null == (t = i.hardwareEncoding) || t), e.setSoftwareH264(null == (n = i.openH264) || n));
        let o = ef.Z.getGuildId(),
            { muteBeforeProcessing: s, pttBeforeProcessing: l, skipEncode: c } = (null != o ? U.Z : j.Z).getCurrentConfig(eT({ location: 'setupMediaEngine' }, null != o && { guildId: o }), { autoTrackExposure: !0 });
        (s && e.setExperimentFlag(eO.V8.MUTE_BEFORE_PROCESSING, !0),
            l && e.setExperimentFlag(eO.V8.PTT_BEFORE_PROCESSING, !0),
            c && e.setExperimentFlag(eO.V8.SKIP_ENCODE, !0),
            null != o &&
                V.Z.getCurrentConfig(
                    {
                        location: 'setupMediaEngine',
                        guildId: o
                    },
                    { autoTrackExposure: !0 }
                ).enabled &&
                e.setExperimentFlag(eO.V8.SIGNAL_RED, !0));
        let u = !1,
            d = !0;
        if ((e.setExperimentFlag(eO.V8.RESET_DECODER_ON_ERRORS, !0), u && e.setExperimentFlag(eO.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0), d && e.setExperimentFlag(eO.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0), e.context === eO.Yn.STREAM)) {
            let { simulcastEnabled: t, lqStreamBitrate: n } = G.Z.getConfig();
            e.configureGoLiveSimulcast(t, n);
            let r = (0, B.k)({
                location: 'setupMediaEngine',
                autoTrackExposure: !0
            }).enabled;
            e.setGoLiveUsePixelCounts(r);
        }
        ((0, er.isWindows)() ? ((null == tI ? void 0 : tI.startsWith('NVIDIA')) || (null == tI ? void 0 : tI.startsWith('AMD')) ? e.setExperimentFlag(eO.V8.SIGNAL_AV1, !0) : e.setExperimentFlag(eO.V8.SIGNAL_AV1_DECODE, !0)) : ((0, er.isMac)() || (0, er.isLinux)()) && e.setExperimentFlag(eO.V8.SIGNAL_AV1_DECODE, !0), (0, er.isWindows)() && e.setExperimentFlag(eO.V8.SIGNAL_AV1_HARDWARE_DECODE, !0), eH.setHasFullbandPerformance((0, R.Z)()));
        let f = (0, k.D)('setupMediaEngine').enabled;
        if ((e.setRemoteAudioHistory(1000 * !!f), (0, N.Z)(r))) {
            let t = A.Z.getSettings();
            e.setExperimentFlag(eO.V8.STREAMER_CLIP, t.clipsEnabled);
            let { enableViewerClipping: n } = H.Z.getCurrentConfig({ location: 'f627ab_15' }, { autoTrackExposure: !1 });
            (e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eO.ux));
        }
        for (let t of ((i = tC(e.context)), e.setPostponeDecodeLevel(eG), Object.keys(i.localMutes))) t !== el.default.getId() && e.setLocalMute(t, i.localMutes[t]);
        for (let t of Object.keys(i.localVolumes)) t !== el.default.getId() && e.setLocalVolume(t, i.localVolumes[t]);
        for (let t of Object.keys(i.localPans)) {
            let n = i.localPans[t];
            e.setLocalPan(t, n.left, n.right);
        }
        for (let t of Object.keys(i.disabledLocalVideos)) e.setLocalVideoDisabled(t, i.disabledLocalVideos[t]);
        (e.on(b.Sh.Speaking, (t, n) => {
            v.Z.dispatch({
                type: 'SPEAKING',
                context: e.context,
                userId: t,
                speakingFlags: n
            });
        }),
            e.context === eO.Yn.DEFAULT &&
                ((e8 = !1),
                (e7 = !1),
                e.on(b.Sh.SpeakingWhileMuted, () => {
                    ((e8 = !0),
                        (e7 = !0),
                        r.emitChange(),
                        e9.stop(),
                        e9.start(eB, () => {
                            ((e7 = !1), r.emitChange());
                        }));
                })),
            e.on(b.Sh.DesktopSourceEnd, () => {
                v.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                    settings: { context: e.context }
                });
            }),
            e.on(b.Sh.InteractionRequired, (e) => {
                v.Z.dispatch({
                    type: 'MEDIA_ENGINE_INTERACTION_REQUIRED',
                    required: e
                });
            }),
            e.on(b.Sh.VideoHookInitialize, (e, t, n, r, i, o) => {
                (null == a ? void 0 : a.desktopSource) != null &&
                    ee.default.track(
                        em.rMx.VIDEOHOOK_INITIALIZED,
                        eT(
                            {
                                backend: e,
                                format: t,
                                framebuffer_format: n,
                                sample_count: r,
                                success: i,
                                reinitialization: o
                            },
                            (0, x.Z)(null == a ? void 0 : a.desktopSource)
                        )
                    );
            }),
            e.on(b.Sh.NoiseCancellationError, (e) => {
                (eN.warn('noisecancellererror event: '.concat(e)),
                    (0, P.kr)({
                        type: P.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tx(e)
                    }),
                    (th = !0),
                    ee.default.track(em.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    v.Z.dispatch({
                        type: 'AUDIO_SET_NOISE_SUPPRESSION',
                        enabled: !0
                    }),
                    v.Z.dispatch({
                        type: 'AUDIO_SET_NOISE_CANCELLATION',
                        enabled: !1
                    }),
                    v.Z.dispatch({
                        type: 'MEDIA_ENGINE_NOISE_CANCELLATION_ERROR',
                        code: e
                    }));
            }),
            e.on(b.Sh.VoiceActivityDetectorError, (e) => {
                (eN.warn('voiceactivitydetectorerror event: '.concat(e)),
                    (0, P.kr)({
                        type: P.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tx(e)
                    }),
                    ee.default.track(em.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    v.Z.dispatch({
                        type: 'AUDIO_SET_MODE',
                        context: eO.Yn.DEFAULT,
                        mode: em.pM4.VOICE_ACTIVITY,
                        options: eA(eT({}, tC(eO.Yn.DEFAULT).modeOptions), { vadUseKrisp: !1 })
                    }),
                    v.Z.dispatch({
                        type: 'MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR',
                        code: e
                    }));
            }),
            e.on(b.Sh.SdpError, (e, t, n, r) => {
                ee.default.track(em.rMx.SDP_ERROR, {
                    operation: e,
                    error: t,
                    type: n,
                    sdp: r
                });
            }),
            e.on(b.Sh.VideoState, (t) => {
                v.Z.dispatch({
                    type: 'MEDIA_ENGINE_VIDEO_STATE_CHANGED',
                    videoState: t,
                    context: e.context
                });
            }),
            e.setBitRate(ec.Z.bitrate),
            e.applyVideoQualityMode(eh.Z.mode));
    }),
        eH.on(b.aB.DeviceChange, (e, t, n) => {
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_DEVICES',
                inputDevices: e,
                outputDevices: t,
                videoDevices: n
            });
        }),
        eH.on(b.aB.VolumeChange, (e, t) => {
            v.Z.dispatch({
                type: 'AUDIO_VOLUME_CHANGE',
                inputVolume: e,
                outputVolume: t
            });
        }),
        eH.on(b.aB.DesktopSourceEnd, () => {
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                settings: null
            });
        }),
        eH.on(b.aB.AudioPermission, (e) => {
            ((tg = !0),
                v.Z.dispatch({
                    type: 'MEDIA_ENGINE_PERMISSION',
                    kind: 'audio',
                    granted: e
                }));
        }),
        eH.on(b.aB.VideoPermission, (e) => {
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_PERMISSION',
                kind: 'video',
                granted: e
            });
        }),
        eH.on(b.aB.WatchdogTimeout, async () => {
            let e;
            try {
                await et.Z.submitLiveCrashReport({ message: { message: 'Voice Watchdog Timeout' } });
            } catch (t) {
                'number' == typeof t.status && (e = t.status);
            }
            (eN.warn('Watchdog timeout, report submission status: '.concat(null != e ? e : 200)), ee.default.track(em.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e }));
        }),
        eH.on(b.aB.VideoInputInitialized, (e) => {
            ee.default.track(em.rMx.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * en.Z.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: ef.Z.getMediaSessionId(),
                rtc_connection_id: ef.Z.getRTCConnectionId()
            });
        }),
        eH.on(b.aB.AudioInputInitialized, (e) => {
            ee.default.track(em.rMx.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * en.Z.Millis.SECOND),
                rtc_connection_id: ef.Z.getRTCConnectionId()
            });
        }),
        eH.on(b.aB.ClipsRecordingRestartNeeded, () => {
            v.Z.dispatch({ type: 'CLIPS_RESTART' });
        }),
        eH.on(b.aB.ClipsInitFailure, (e, t) => {
            v.Z.wait(() => {
                v.Z.dispatch({
                    type: 'CLIPS_INIT_FAILURE',
                    errMsg: e,
                    applicationName: t
                });
            });
        }),
        eH.on(b.aB.ClipsRecordingEnded, (e, t) => {
            var n, r;
            (null == o || null == (n = o.desktopSource) ? void 0 : n.id) === e && (null != t && (null == a || null == (r = a.desktopSource) ? void 0 : r.soundshareId) !== t && T.pn(t), (o = null));
        }),
        eH.on(b.aB.NativeScreenSharePickerUpdate, (e, t) => {
            v.Z.dispatch({
                type: 'NATIVE_SCREEN_SHARE_PICKER_UPDATE',
                existing: e,
                content: t
            });
        }),
        eH.on(b.aB.NativeScreenSharePickerCancel, (e) => {
            v.Z.dispatch({
                type: 'NATIVE_SCREEN_SHARE_PICKER_CANCEL',
                existing: e
            });
        }),
        eH.on(b.aB.NativeScreenSharePickerError, (e) => {
            v.Z.dispatch({
                type: 'NATIVE_SCREEN_SHARE_PICKER_ERROR',
                error: e
            });
        }),
        eH.on(b.aB.AudioDeviceModuleError, (e, t, n) => {
            ee.default.track(em.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                audio_device_module: e,
                code: t,
                device_name: n
            });
        }),
        eH.on(b.aB.VideoCodecError, (e) => {
            let t = 'encode' === e.mode ? P.u.VIDEO_ENCODE_ERROR : P.u.VIDEO_DECODE_ERROR,
                n = {
                    videoCodec: e.codecStandard,
                    errorMessage: e.message
                };
            (0, P.kr)(t === P.u.VIDEO_ENCODE_ERROR ? eA(eT({ type: t }, n), { videoEncoder: e.implName }) : eA(eT({ type: t }, n), { videoDecoder: e.implName }));
        }),
        eH.on(b.aB.ConnectionStats, (e) => {
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_CONNECTION_STATS',
                connectionStats: e.map((e) => {
                    let { stats: t, connection: n } = e;
                    return {
                        stats: t,
                        mediaEngineConnectionId: n.mediaEngineConnectionId,
                        version: eV++,
                        context: n.context
                    };
                })
            });
        }),
        eH.on(b.aB.VoiceQueueMetrics, (e) => {
            let t = rg(e);
            null !== t && ee.default.track(em.rMx.VOICE_QUEUE_METRICS, t);
        }),
        eH.setOnVideoContainerResized((e, t, n) => {
            v.Z.wait(() =>
                v.Z.dispatch({
                    type: 'VIDEO_SIZE_UPDATE',
                    streamId: e,
                    width: t,
                    height: n
                })
            );
        }),
        tF.reset(),
        (0, e_.q)().then((e) => {
            null != e && (tI = e.gpu_brand);
        }));
}
function tj() {
    return (0, er.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eg.c5);
}
function tU() {
    return (0, er.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eg.sN);
}
function tG() {
    return (0, er.isMac)() && eH.supports(eO.AN.SCREEN_CAPTURE_KIT) && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eg.C7);
}
function tB() {
    return (0, er.isWindows)() && eH.supports(eO.AN.AUTOMATIC_AUDIO_SUBSYSTEM) && eH.supports(eO.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH);
}
function tV() {
    return eH.supports(eO.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
let tF = new (class {
    start() {
        this.started || ((this.started = !0), eH.on(b.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            eH.removeListener(b.aB.Silence, this.handleSilence),
            v.Z.dispatch({
                type: 'AUDIO_INPUT_DETECTED',
                inputDetected: null
            }));
    }
    update() {
        let e = tC();
        !tr && ef.Z.getState() === em.hes.RTC_CONNECTED && e.mode === em.pM4.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop();
    }
    reset() {
        (this.stop(), this.update());
    }
    constructor() {
        (eI(this, 'stateChangeTimeout', void 0),
            eI(this, 'noVoiceTimeout', 5000),
            eI(this, 'voiceTimeout', 1500),
            eI(this, 'started', !1),
            eI(this, 'handleSilence', (e) => {
                let t = !e;
                (null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout),
                    (this.stateChangeTimeout = setTimeout(
                        () => {
                            ((this.stateChangeTimeout = null),
                                this.started &&
                                    (v.Z.dispatch({
                                        type: 'AUDIO_INPUT_DETECTED',
                                        inputDetected: t
                                    }),
                                    e && (ti = !0)));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout
                    )));
            }));
    }
})();
function tZ() {
    var e;
    let t = y.K.get('audio');
    (null != t && (y.K.set(eC, { [eO.Yn.DEFAULT]: t }), y.K.remove('audio')),
        (eY = null != (e = y.K.get(eC)) ? e : {}),
        p().each(eY, (e) => {
            if ((p().defaultsDeep(e, eF()), null != e.modeOptions && 'string' == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, es.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== eR && ((e.vadUseKrispSettingVersion = eR), (e.modeOptions.vadUseKrisp = !0)), e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)), !e.vadThrehsoldMigrated)) {
                var t;
                ((e.vadThrehsoldMigrated = !0), (null == (t = e.modeOptions) ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = eU));
            }
            ((0, er.isWeb)() ? e.ncUseKrispjsSettingVersion !== ew && ((e.ncUseKrispjsSettingVersion = ew), (e.noiseSuppression = !1), (e.noiseCancellation = !0)) : e.ncUseKrispSettingVersion !== eP && ((e.ncUseKrispSettingVersion = eP), (e.noiseSuppression = !1), (e.noiseCancellation = !0)), e.hardwareEnabledVersion !== eD && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = eD)), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264));
        }),
        tW());
}
function tH(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eO.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = tN(t);
    return (Object.assign(r, e), !__OVERLAY__ && n && y.K.set(eC, eY), r);
}
function tY() {
    (y.K.remove(eC), location.reload());
}
function tW() {
    var e, t, n;
    let r = tC();
    (eH.setAudioInputDevice(r.inputDeviceId), eH.setAudioOutputDevice(r.outputDeviceId), tL(), eH.setInputVolume(r.inputVolume), eH.setOutputVolume(r.outputVolume), eH.setH264Enabled(null == (e = r.hardwareEncoding) || e || r.openH264), eH.setAv1Enabled(null == (t = r.hardwareEncoding) || t), eH.setH265Enabled(null == (n = r.hardwareEncoding) || n), eH.setAecDump(r.aecDumpEnabled), eH.setSidechainCompression(r.sidechainCompression), eH.setSidechainCompressionStrength(r.sidechainCompressionStrength), eH.setAudioInputBypassSystemProcessing(r.bypassSystemInputProcessing));
}
function tK() {
    eK ||
        eH.enable().then(() =>
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
                enabled: !0,
                unmute: !1
            })
        );
}
function tz(e) {
    return {
        id: eO.w5,
        index: 0,
        name: e,
        disabled: !0,
        hardwareId: void 0,
        containerId: void 0
    };
}
function tq(e, t) {
    if (0 === e.length) {
        let e = tz(t);
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
            containerId: e.containerId
        }))
        .keyBy('id')
        .value();
}
function tX(e, t) {
    var n;
    let r = null != (n = e[t]) ? n : p()(e).values().first();
    return null != r ? r.id : t;
}
function tQ(e) {
    let t = eQ;
    if (((eQ = tq(e, ev.intl.string(ev.t['/QIjDA']))), !p().isEqual(eQ, t))) {
        let e = tC(),
            t = tX(eQ, e.inputDeviceId);
        eH.setAudioInputDevice(t);
    }
}
function tJ(e) {
    let t = eJ;
    if (((eJ = tq(e, ev.intl.string(ev.t.xlUg0t))), !p().isEqual(eJ, t))) {
        let e = tC(),
            t = tX(eJ, e.outputDeviceId);
        eH.setAudioOutputDevice(t);
    }
}
function t$(e) {
    tt = e.length > 0;
    let t = e$;
    if (((e$ = tq(e, ev.intl.string(ev.t.WKWARU))), e4 && !p().isEqual(e$, t))) {
        var n;
        let e = void 0 !== e$[e5],
            r = e5 === eO.w5 && (null == (n = t[eO.w5]) ? void 0 : n.disabled);
        tL(e || r);
    }
}
function t0() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        r =
            null != (e = Q.Z.settings.audioContextSettings)
                ? e
                : {
                      user: {},
                      stream: {}
                  };
    for (let e of Object.keys(r)) {
        let i = e === eb.u0.USER ? eO.Yn.DEFAULT : eO.Yn.STREAM,
            a = i === eO.Yn.STREAM ? eO.Yh : eO.Qx,
            o = null != (t = r[e]) ? t : {},
            { localMutes: s, localVolumes: l } = tC(i);
        for (let [e, t] of Object.entries(o))
            null == (0, X.Ky)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== a ? (l[e] = t.volume) : delete l[e],
                eH.eachConnection((n) => {
                    (n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted));
                }, i));
        if (n)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == o[e] &&
                    (delete s[e],
                    delete l[e],
                    eH.eachConnection((t) => {
                        (t.setLocalVolume(e, a), t.setLocalMute(e, !1));
                    }, i));
        tH(
            {
                localMutes: s,
                localVolumes: l
            },
            i
        );
    }
}
function t1(e) {
    if (null == r)
        return (
            eN.info('Error: trying to get soundshare id before MediaEngineStore is instantiated.'),
            {
                soundshareId: null,
                soundshareSession: ''
            }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : et.Z.getAudioPid(e),
            n = '';
        return (
            null != t && (n = et.Z.generateSessionFromPid(t)),
            {
                soundshareId: t,
                soundshareSession: n
            }
        );
    }
}
function t2(e, t) {
    (0, er.isWindows)() &&
        T.YT(e, { soundshare_session: t }).then((t) => {
            null == t ||
                L.ZP.shouldContinueWithoutElevatedProcessForPID(e) ||
                v.Z.wait(() => {
                    v.Z.dispatch({
                        type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
                        errorMessage: t
                    });
                });
        });
}
function t3(e) {
    ((i = e.sessionId),
        (e0 = !1),
        (e3 = !1),
        (0, er.isWeb)() ||
            (Z.Z.subscribe({ location: 'handleConnectionOpen' }, (e) => {
                let t = tC();
                !e.sidechainAvailable && t.sidechainCompression ? (tH({ sidechainCompressionSettingVersion: 0 }), nI(!1)) : e.sidechainAvailable && t.sidechainCompressionSettingVersion < eL && (tH({ sidechainCompressionSettingVersion: eL }), nI(e.sidechainEnabled));
            }),
            nS()));
    let t = tC();
    if ((tB() && (tV() ? n2(eO.iA.AUTOMATIC) : t.automaticAudioSubsystem && n3()), eH.supports(eO.AN.OFFLOAD_ADM_CONTROLS))) {
        let { enabled: e } = M.S.getCurrentConfig({ location: 'handleConnectionOpen' }, { autoTrackExposure: !0 });
        eH.setOffloadAdmControls(e);
    }
    ((0, J.wt)({
        location: 'MediaEngineStore',
        autoTrackExposure: !1
    }) &&
        null !== t.mostRecentlyRequestedVoiceFilter &&
        (0, er.isDesktop)() &&
        ($.Z.getLastInitAttemptMayHaveCrashed()
            ? (v.Z.dispatch({
                  type: 'AUDIO_SET_SELF_MUTE',
                  mute: !0,
                  context: eO.Yn.DEFAULT,
                  playSoundEffect: !0
              }),
              tH({ mostRecentlyRequestedVoiceFilter: null }))
            : n(358820).r5()),
        t0());
}
function t4(e) {
    let { mediaEngineState: t } = e;
    ((eY = t.settingsByContext), (eQ = t.inputDevices), (eJ = t.outputDevices), (tv = t.appSupported), (ts = t.krispModuleLoaded), (s = t.krispVersion), (eq = t.goLiveContext));
}
function t5() {
    i = null;
}
function t6(e) {
    switch (e.state) {
        case em.hes.CONNECTING:
            tK();
            break;
        case em.hes.RTC_CONNECTING:
            ((tr = !1), (ti = !1));
            break;
        case em.hes.RTC_CONNECTED:
            tL();
            break;
        case em.hes.DISCONNECTED:
            (na(), no());
    }
    tF.update();
}
function t8(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => (i === t.sessionId ? ((e0 = t.mute || t.suppress), (e3 = t.deaf), eH.eachConnection(tw), tL((null == t.guildId || null == t.channelId || null == tp || tp === t.channelId) && e4), (tp = t.channelId), !0) : (__OVERLAY__ || t.userId !== el.default.getId() || null != ef.Z.getChannelId() || tL(!1, null), e)), !1);
}
function t7(e) {
    let { mute: t } = e;
    ((e1 = t), eH.eachConnection(tw));
}
function t9(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = tC(t);
    if (t === eO.Yn.DEFAULT && (z.Z.requestPermission(eE.Eu.AUDIO), e2)) return !1;
    ((r = !i && !r) || (i = !1),
        n || (e6 = !0),
        tH(
            {
                mute: r,
                deaf: i
            },
            t
        ),
        eH.eachConnection(tw));
}
function ne(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    (tH({ mute: n }, t), r || (e6 = !0), eH.eachConnection(tw));
}
function nt(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r
    } = e;
    if (t !== eb.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    t0(!0);
}
function nn(e) {
    let { context: t } = e;
    (tH({ deaf: !tC(t).deaf }, t), eH.eachConnection(tw));
}
function nr(e) {
    let { context: t, userId: n } = e;
    if (n === el.default.getId()) return;
    let { localMutes: r } = tC(t);
    (r[n] ? delete r[n] : (r[n] = !0), tH({ localMutes: r }, t), eH.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t));
}
function ni(e) {
    var t, n, r, i, a, o, s;
    let { context: l, userId: c, videoToggleState: u, persist: d, isAutomatic: _ } = e;
    f()(!(d && _), 'These are not allowed to both be true.');
    let p = u === em.ZUi.DISABLED,
        { disabledLocalVideos: h } = tC(l),
        m = null != (t = h[c]) && t,
        g = tb.has(c),
        E = u === em.ZUi.AUTO_ENABLED || u === em.ZUi.MANUAL_ENABLED;
    (eN.info('disableVideo='.concat(p, ' currentlyDisabled=').concat(m, ' currentlyAutoDisabled=').concat(g, ', isVideoShown=').concat(E)), f()(!(g && !m), 'If you are auto-disabled, then you are also disabled.'));
    let b = p !== m,
        y = l === eO.Yn.DEFAULT,
        O = _ && b && y,
        v = d && b && y;
    eN.info('changed='.concat(b, ' isDefaultContext=').concat(y, ' isUpdateCausedByVideoHealthManager=').concat(O, ' isManualToggleByUser=').concat(v));
    let { videoToggleStateMap: I } = tC(l);
    if ((I[c] === em.ZUi.AUTO_PROBING && u === em.ZUi.AUTO_ENABLED && (0, K.Z)(c, p ? eO.fC.AUTO_DISABLE : eO.fC.AUTO_ENABLE, E), (I[c] = u), tH({ videoToggleStateMap: I }, l, d), u === em.ZUi.AUTO_PROBING ? null == (n = ef.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, !0) : null == (r = ef.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, !1), ty || (eN.info('isAutoDisableAllowed='.concat(ty, ' - disabling VideoHealthManager')), null == (a = ef.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()), O)) {
        if ((!p && !g) || (p && !ty)) return;
        ((0, K.Z)(c, p ? eO.fC.AUTO_DISABLE : eO.fC.AUTO_ENABLE, E), p ? tb.add(c) : tb.delete(c));
    } else v && (g && !p ? (eN.info('disallowing auto-disable for this session because of manual override by user'), (ty = !1), null == (s = ef.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(), (0, K.Z)(c, eO.fC.MANUAL_REENABLE, E)) : (0, K.Z)(c, p ? eO.fC.MANUAL_DISABLE : eO.fC.MANUAL_ENABLE, E));
    (y && !p && tb.delete(c),
        p ? (h[c] = !0) : delete h[c],
        tH({ disabledLocalVideos: h }, l, d),
        eH.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(c, null != (t = h[c]) && t);
        }, l));
}
function na() {
    if (0 === tb.size) return;
    let e = eO.Yn.DEFAULT,
        { disabledLocalVideos: t } = tC(e);
    (tb.forEach((n) => {
        (f()(t[n], 'If you are auto-disabled, then you are also disabled.'), delete t[n], eH.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e));
    }),
        tb.clear(),
        tH({ disabledLocalVideos: t }, e, !1));
}
function no() {
    let e = eO.Yn.DEFAULT,
        { videoToggleStateMap: t } = tC(e);
    for (let [e, n] of Object.entries(t)) n === em.ZUi.AUTO_PROBING && delete t[e];
    tH({ videoToggleStateMap: t }, e, !1);
}
function ns(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === el.default.getId()) return;
    let i = t === eO.Yn.STREAM ? eO.Yh : eO.Qx,
        { localVolumes: a } = tC(t);
    (r === i ? delete a[n] : (a[n] = r), tH({ localVolumes: a }, t), eH.eachConnection((e) => e.setLocalVolume(n, r), t));
}
function nl(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: a } = tC(t);
    ((a[n] = {
        left: r,
        right: i
    }),
        tH({ localPans: a }, t),
        eH.eachConnection((e) => e.setLocalPan(n, r, i), t));
}
function nc(e) {
    let { context: t, mode: n, options: r } = e;
    (tH(
        {
            mode: n,
            modeOptions: r
        },
        t
    ),
        eH.eachConnection(tR),
        tF.update());
}
function nu(e) {
    let { volume: t } = e;
    (tH({ inputVolume: tP(t) }), eH.setInputVolume(t));
}
function nd(e) {
    let { volume: t } = e;
    (tH({ outputVolume: t }), eH.setOutputVolume(t));
}
function nf(e) {
    let { id: t } = e;
    ((t = tX(eQ, t)), (eX = performance.now()), tH({ inputDeviceId: t }), eH.setAudioInputDevice(t));
}
function n_(e) {
    let { id: t } = e;
    (tH({ outputDeviceId: (t = tX(eJ, t)) }), eH.setAudioOutputDevice(t));
}
function np(e) {
    let { id: t } = e;
    (tH({ videoDeviceId: (t = tX(e$, t)) }), tL());
}
function nh(e) {
    let { inputProfile: t } = e,
        n = tH({ activeInputProfile: t });
    (eH.eachConnection((e) => {
        (tR(e), e.setAutomaticGainControl(n.automaticGainControl), e.setEchoCancellation(n.echoCancellation), e.setExperimentalEncoders(n.experimentalEncoders), e.setNoiseCancellation(n.noiseCancellation), e.setNoiseSuppression(n.noiseSuppression));
    }),
        eH.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        tF.update(),
        nA());
}
function nm(e) {
    return ez !== e.required && ((ez = e.required), e.required || eH.interact(), !0);
}
function ng(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    (tQ(t), tJ(n), t$(r));
}
function nE(e) {
    let { inputVolume: t, outputVolume: n } = e;
    tH({
        inputVolume: tP(t),
        outputVolume: n
    });
}
function nb(e) {
    var t;
    let n = tC(),
        r = eH.getAudioSubsystem(),
        i = eH.getAudioLayer(),
        a = tX(eQ, n.inputDeviceId),
        o = null == (t = eQ[a]) ? void 0 : t.name;
    ee.default.track(em.rMx.VOICE_PROCESSING, {
        echo_cancellation: n.echoCancellation,
        noise_cancellation: n.noiseCancellation,
        noise_suppression: n.noiseSuppression,
        automatic_gain_control: n.automaticGainControl,
        location: e,
        bypass_system_input_processing: n.bypassSystemInputProcessing,
        audio_subsystem: r,
        audio_layer: i,
        input_device: o
    });
}
function ny(e) {
    let t = tH({ echoCancellation: e.enabled });
    (eH.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nA(), nb(e.location));
}
function nO(e) {
    nI(e.enabled);
}
function nv(e) {
    let t = tH({ sidechainCompressionStrength: e.strength });
    eH.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function nI(e) {
    let t = tH({ sidechainCompression: e });
    eH.setSidechainCompression(t.sidechainCompression);
}
function nT(e) {
    let { enabled: t, loopbackReason: n } = e;
    return (t ? tO.add(n) : tO.delete(n), nS(), nA());
}
function nS() {
    let { voiceFiltersPreProcessMute: e } = Y.Z.getCurrentConfig({ location: 'setMaybePreprocessMute' }, { autoTrackExposure: !0 }),
        t = e && !tO.has('voice_filter_preview') && !tO.has('mic_test');
    eH.setMaybePreprocessMute(t);
}
function nA() {
    let e = tC(),
        t = tO.size > 0,
        n = e.inputDeviceId,
        r = eu.Z.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        a = eu.Z.hasNoiseSuppression(n) || e.noiseSuppression,
        o = eu.Z.hasAutomaticGainControl(n) || e.automaticGainControl,
        s = e.noiseCancellation,
        l = null !== tu,
        c = tO.has('voice_filter') && 1 === tO.size;
    eH.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: a,
        automaticGainControl: o,
        noiseCancellation: s,
        voiceFilters: l,
        loopbackUseAudioMode: c
    });
}
function nN(e) {
    let t = tH({ noiseSuppression: e.enabled });
    (eH.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nA(), nb(e.location));
}
function nC(e) {
    let t = tH({ automaticGainControl: e.enabled });
    (eH.eachConnection((e) => e.setAutomaticGainControl(t.automaticGainControl)), nA(), nb(e.location));
}
function nR(e) {
    let t = tH({ noiseCancellation: e.enabled });
    (eH.eachConnection((e) => e.setNoiseCancellation(t.noiseCancellation)), nA(), nb(e.location));
}
function nP(e) {
    (q.Z.setKrispModelOverride(e.model), (c = e.model), nA());
}
function nw(e) {
    var t;
    (0, er.isWeb)() || ((tc = e.enabled), null == (t = eH.setNoiseCancellationEnableStats) || t.call(eH, e.enabled));
}
function nD(e) {
    let t = tH({ experimentalEncoders: e.enabled });
    eH.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
}
function nL(e) {
    var t, n;
    let { enabled: r } = e,
        i = tH({ hardwareEncoding: r });
    (eH.eachConnection((e) => {
        var t;
        return e.setHardwareH264(null == (t = i.hardwareEncoding) || t);
    }),
        eH.setH264Enabled(i.hardwareEncoding || i.openH264),
        eH.setAv1Enabled(null == (t = i.hardwareEncoding) || t),
        eH.setH265Enabled(null == (n = i.hardwareEncoding) || n));
}
function nx(e) {
    (tH({ silenceWarning: e.enabled }), tF.update());
}
function nM(e) {
    eH.setDebugLogging(e.enabled);
}
function nk(e) {
    let { level: t } = e;
    ((l = t), q.Z.setKrispSuppressionLevel(t));
}
function nj(e) {
    tH({ videoHook: e.enabled });
}
function nU(e) {
    tH({ experimentalSoundshare2: e.enabled });
}
function nG(e) {
    let { enabled: t } = e;
    tH({ useSystemScreensharePicker: t });
}
function nB(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = tH({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r
        });
    eH.eachConnection((e) => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers));
}
function nV(e) {
    let { enabled: t } = e;
    (tH({ qos: t }), eH.eachConnection((e) => e.setQoS(t)));
}
function nF() {
    tY();
}
function nZ(e) {
    let { inputDetected: t } = e;
    ((tn = t), !tr && tn && ((tr = !0), tF.update()));
}
function nH(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === e2) return !1;
    ((e2 = n), eH.eachConnection(tw));
}
function nY(e) {
    let { state: t, permissionType: n } = e,
        r = t === eE.PQ.ACCEPTED;
    switch (n) {
        case eE.Eu.AUDIO:
            ((tg = !0), eH.eachConnection(tw));
            break;
        case eE.Eu.CAMERA:
            !r && e4 && tL(!1);
            break;
        default:
            return !1;
    }
}
function nW() {
    return ts || !1;
}
async function nK() {
    try {
        var e, t, n, i;
        await eo.ZP.ensureModule('discord_krisp');
        let a = eo.ZP.requireModule('discord_krisp');
        ((ts = !0),
            (s = null == (e = a.getSdkVersion) ? void 0 : e.call(a)),
            (l = null != (i = null == (t = a.getSuppressionLevel) ? void 0 : t.call(a)) ? i : 100),
            null == (n = a.getNcModels) ||
                n.call(a).then((e) => {
                    ((tl = e), r.emitChange());
                }),
            r.emitChange());
    } catch (t) {
        (eN.warn('Failed to load Krisp module: '.concat(t.message)), ea.Z.captureException(t));
        let e = eO.H3.INITIALIZED;
        if (t.message.includes(': ')) {
            let n = parseInt(t.message.substring(t.message.indexOf(': ') + 1));
            e = isNaN(n) || 0 === n ? eO.H3.INITIALIZED : n;
        }
        (ee.default.track(em.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), tH({ noiseCancellation: !1 }));
    } finally {
        to = !1;
    }
}
function nz() {
    return ((0, er.isWindows)() && 'arm64' !== eo.ZP.architecture) || (0, er.isLinux)() || (0, er.isMac)();
}
function nq() {
    !nz() || __OVERLAY__ || to || ts ? ((0, er.isWeb)() && eH.supports(eO.AN.NOISE_CANCELLATION) ? ((ts = !0), r.emitChange()) : (0, er.isWeb)() && tH({ noiseCancellation: !1 })) : ((to = !0), nK());
}
function nX(e) {
    let { enabled: t } = e;
    (ee.default.track(em.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != tu ? tu : null,
        enabled: t
    }),
        tH({ voiceFilterPlaybackEnabled: t }));
}
function nQ(e) {
    let { newVoiceFilterId: t } = e;
    (tH({ mostRecentlyRequestedVoiceFilter: t }), eH.eachConnection((e) => e.setVoiceFilterId(t)));
}
function nJ() {
    tH({ mostRecentlyRequestedVoiceFilter: null });
}
function n$(e) {
    let { voiceFilterId: t } = e;
    ((tf = tu), (t_ = td), (tu = t), (td = null === t ? null : Date.now()));
}
function n0(e) {
    let t = e.bypassEnabled;
    (tH({ bypassSystemInputProcessing: t }), eH.setAudioInputBypassSystemProcessing(t), nb(e.location));
}
function n1(e) {
    n2(e.subsystem);
}
function n2(e) {
    e === eO.iA.AUTOMATIC ? (tH({ automaticAudioSubsystem: !0 }), n3()) : (tH({ automaticAudioSubsystem: !1 }), eH.setAudioSubsystem(e));
}
function n3() {
    eH.queueAudioSubsystem(eO.iA.EXPERIMENTAL);
}
function n4(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && tL(i, null), null != t || null == n)) {
        ta = !1;
        return;
    }
    if (ta) return;
    ta = !0;
    let a = tC();
    (a.mute || a.deaf) &&
        (tH({
            deaf: !1,
            mute: !1
        }),
        eH.eachConnection(tw));
}
function n5(e) {
    let { application: t } = e;
    eW.add(t.id);
}
function n6(e) {
    let { application: t } = e;
    eW.delete(t.id);
}
function n8(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case 'audio':
                ((eK = !1), eH.eachConnection(tw));
                break;
            case 'video':
                tL(!1);
        }
}
function n7(e) {
    ((eK = e.enabled),
        e.unmute &&
            tH({
                mute: !1,
                deaf: !1
            }),
        eH.eachConnection(tw));
}
function n9(e) {
    let { enabled: t } = e;
    (z.Z.requestPermission(eE.Eu.CAMERA), tL(t));
}
function re(e) {
    let { sourceId: t, applicationName: n, quality: i } = e,
        a = A.Z.isDecoupledGameClippingEnabled(),
        s = A.Z.getSettings().decoupledClipsEnabled;
    if (!a || !s || null == I.Z) return;
    let l = null,
        c = null,
        u = et.Z.getPidFromDesktopSource(t);
    ({ soundshareId: l, soundshareSession: c } = t1(u));
    let d = {
        desktopSource: {
            id: t,
            sourcePid: u,
            soundshareId: l,
            soundshareSession: c
        },
        quality: i
    };
    (null != o && o.desktopSource.id !== d.desktopSource.id && (eH.setClipsSource(null), (0, er.isWindows)() && null != o.desktopSource.soundshareId && T.pn(o.desktopSource.soundshareId)), null != l && t2(l, c), (o = d));
    let f = tA(),
        _ = tC().videoHook;
    eH.setClipsSource({
        desktopDescription: {
            id: o.desktopSource.id,
            soundshareId: o.desktopSource.soundshareId,
            useVideoHook: _,
            useGraphicsCapture: tj(),
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: tG(),
            videoHookStaleFrameTimeoutMs: ek,
            graphicsCaptureStaleFrameTimeoutMs: ej,
            hdrCaptureMode: f
        },
        quality: i,
        applicationName: n
    });
}
function rt(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((o = null), eH.setClipsSource(null));
}
function rn(e) {
    var t, n, r, i;
    let { settings: a } = e;
    if ((null == a ? void 0 : a.desktopSettings) != null) {
        let e = null,
            r = null,
            { sourceId: i, sound: o } = a.desktopSettings,
            s = null != (t = a.context) ? t : eO.Yn.DEFAULT,
            l =
                null != (n = a.qualityOptions)
                    ? n
                    : {
                          resolution: 720,
                          frameRate: 30
                      },
            c = !1 === o ? null : et.Z.getPidFromDesktopSource(i);
        (er.isPlatformEmbedded && !0 === o && (({ soundshareId: e, soundshareSession: r } = t1(c)), null != e && t2(e, r)),
            tD(s),
            tL(s === eO.Yn.STREAM && e4, {
                desktopSource: {
                    id: i,
                    sourcePid: c,
                    soundshareId: e,
                    soundshareSession: r
                },
                quality: {
                    resolution: l.resolution,
                    frameRate: l.frameRate
                }
            }));
    } else if ((null == a ? void 0 : a.cameraSettings) != null) {
        let e = null != (r = a.context) ? r : eO.Yn.DEFAULT,
            { videoDeviceGuid: t, audioDeviceGuid: n } = a.cameraSettings,
            o = e === eO.Yn.STREAM && e4,
            s =
                null != (i = a.qualityOptions)
                    ? i
                    : {
                          resolution: 720,
                          frameRate: 30
                      };
        tL(o, {
            cameraSource: {
                videoDeviceGuid: t,
                audioDeviceGuid: n
            },
            quality: {
                resolution: s.resolution,
                frameRate: s.frameRate
            }
        });
    } else tL(e4, null);
}
function rr(e) {
    let { section: t } = e;
    return (t === em.oAB.VOICE && tK(), !1);
}
function ri() {
    return (eH.eachConnection(tM), !1);
}
function ra(e) {
    let { enabled: t } = e,
        n = tH({ openH264: t });
    (eH.setH264Enabled(n.hardwareEncoding || n.openH264),
        eH.eachConnection((e) => {
            var t;
            return e.setSoftwareH264(null == (t = n.openH264) || t);
        }));
}
function ro(e) {
    let { enabled: t } = e,
        n = tH({ aecDumpEnabled: t });
    eH.setAecDump(n.aecDumpEnabled);
}
function rs(e) {
    let { state: t } = e,
        n = D.Z.isEnabled();
    if (t === em.$7l.BACKGROUND && e4 && !n) ((te = !0), tL(!1));
    else {
        if (t !== em.$7l.ACTIVE || !te) return !1;
        ((te = !1), tL(!0));
    }
    return !0;
}
function rl(e) {
    eH.eachConnection((t) => t.setBitRate(e.bitrate));
}
function rc() {
    if ((!e4 && null == a) || null != ef.Z.getRTCConnectionId()) return !1;
    tL(!1, null);
}
function ru() {
    return !!th && ((th = !1), !0);
}
function rd(e) {
    eH.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function rf(e) {
    let { settings: t } = e;
    eH.applyMediaFilterSettings(t).finally(() => {
        ((tm = !1), r.emitChange());
    });
}
function r_() {
    tm = !0;
}
function rp() {
    tm = !1;
}
function rh(e) {
    tT = e.enabled;
}
class rm extends (u = E.ZP.Store) {
    initialize() {
        (tk(),
            tZ(),
            nq(),
            no(),
            (tv = {
                [eO.AN.VIDEO]: eH.supports(eO.AN.VIDEO),
                [eO.AN.DESKTOP_CAPTURE]: eH.supports(eO.AN.DESKTOP_CAPTURE),
                [eO.AN.HYBRID_VIDEO]: eH.supports(eO.AN.HYBRID_VIDEO)
            }),
            this.waitFor(el.default, eu.Z, ed.Z, ef.Z, L.ZP, z.Z.storage, Q.Z, w.Z, A.Z));
    }
    supports(e) {
        return eH.supports(e);
    }
    supportsInApp(e) {
        return tv[e] || eH.supports(e);
    }
    isSupported() {
        return eH.supported();
    }
    isExperimentalEncodersSupported() {
        return eH.supports(eO.AN.EXPERIMENTAL_ENCODERS);
    }
    isNoiseSuppressionSupported() {
        return eH.supports(eO.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return nW();
    }
    isNoiseCancellationError() {
        return th;
    }
    isAutomaticGainControlSupported() {
        return eH.supports(eO.AN.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !tV() && (eH.supports(eO.AN.LEGACY_AUDIO_SUBSYSTEM) || eH.supports(eO.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return eH.supports(eO.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && 'experimental' === eH.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return nW();
    }
    isAecDumpSupported() {
        return eH.supports(eO.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return eH.supports(eO.AN.VIDEO) && eH.supports(eO.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        let t = (null == (e = ed.Z.getChannel(tp)) ? void 0 : e.type) === em.d4z.GUILD_STAGE_VOICE,
            n = r.getHardwareEncoding();
        return !t && n && G.Z.simulcastEnabled();
    }
    getAecDump() {
        return tC().aecDumpEnabled;
    }
    getMediaEngine() {
        return eH;
    }
    getVideoComponent() {
        return eH.Video;
    }
    getCameraComponent() {
        return eH.Camera;
    }
    getKrispSuppressionLevel() {
        return null != l ? l : 100;
    }
    getKrispEnableStats() {
        return tc;
    }
    isEnabled() {
        return eK;
    }
    isMute() {
        return this.isSelfMute() || e0;
    }
    isDeaf() {
        return this.isSelfDeaf() || e3;
    }
    hasContext(e) {
        return null != eY[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eO.Yn.DEFAULT;
        return e === eO.Yn.DEFAULT && e1;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eO.Yn.DEFAULT;
        return !this.isEnabled() || tC(e).mute || !z.Z.didHavePermission(eE.Eu.AUDIO) || this.isSelfDeaf(e) || (e === eO.Yn.DEFAULT && e2);
    }
    shouldSkipMuteUnmuteSound() {
        return e6;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        e6 = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eO.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && eu.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return tT;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eO.Yn.DEFAULT;
        return !this.isSupported() || tC(e).deaf;
    }
    isVideoEnabled() {
        return e4 && tt;
    }
    isVideoAvailable() {
        return Object.values(e$).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eO.Yn.STREAM;
        return eq === e && null != a;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eO.Yn.STREAM;
        return eq === t && null != a && (null == (e = a.desktopSource) ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eO.Yn.DEFAULT;
        return e !== el.default.getId() && (tC(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return eH.supports(eO.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eO.Yn.DEFAULT;
        return null != (t = tC(n).disabledLocalVideos[e]) && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eO.Yn.DEFAULT;
        return null != (t = tC(n).videoToggleStateMap[e]) ? t : em.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eO.Yn.DEFAULT;
        return t === eO.Yn.DEFAULT && tb.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eO.Yn.DEFAULT;
        return e === eO.Yn.DEFAULT && tb.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tm;
    }
    isNativeAudioPermissionReady() {
        return tg;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return eq;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return eX;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eO.Yn.DEFAULT,
            n = tC(t).localPans[e];
        return null != n ? n : eM;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eO.Yn.DEFAULT,
            n = t === eO.Yn.STREAM ? eO.Yh : eO.Qx,
            r = tC(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return tC().inputVolume;
    }
    getOutputVolume() {
        return tC().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eO.Yn.DEFAULT;
        return tC(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eO.Yn.DEFAULT;
        return tC(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return tu;
    }
    getActiveVoiceFilterAppliedAt() {
        return td;
    }
    getPreviousVoiceFilter() {
        return tf;
    }
    getPreviousVoiceFilterAppliedAt() {
        return t_;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return tC().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return tC().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            p().each(eY, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i }
                } = t;
                r === em.pM4.PUSH_TO_TALK && eW.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return tX(eQ, tC().inputDeviceId);
    }
    getOutputDeviceId() {
        return tX(eJ, tC().outputDeviceId);
    }
    getVideoDeviceId() {
        return tX(e$, tC().videoDeviceId);
    }
    getInputDevices() {
        return eQ;
    }
    getOutputDevices() {
        return eJ;
    }
    getVideoDevices() {
        return e$;
    }
    getEchoCancellation() {
        let e = tC();
        return eu.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return tC().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return tC().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return tC().h265Enabled;
    }
    getLoopback() {
        return tO.size > 0;
    }
    getLoopbackReasons() {
        return tO;
    }
    getNoiseSuppression() {
        let e = tC();
        return eu.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tC();
        return eu.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return tC().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return tC().noiseCancellation;
    }
    getExperimentalEncoders() {
        return tC().experimentalEncoders;
    }
    getHardwareEncoding() {
        var e;
        return null == (e = tC().hardwareEncoding) || e;
    }
    getEnableSilenceWarning() {
        return tC().silenceWarning;
    }
    getDebugLogging() {
        return eH.getDebugLogging();
    }
    getQoS() {
        return tC().qos;
    }
    getAttenuation() {
        return tC().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return tC().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return tC().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return tB() && tC().automaticAudioSubsystem ? eO.iA.AUTOMATIC : eH.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return eH.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return tC().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === ey._.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eO.Yn.DEFAULT;
        return tC(e);
    }
    getState() {
        return {
            settingsByContext: eY,
            inputDevices: eQ,
            outputDevices: eJ,
            appSupported: tv,
            krispModuleLoaded: ts,
            krispVersion: s,
            krispSuppressionLevel: l,
            goLiveSource: a,
            goLiveContext: eq
        };
    }
    getInputDetected() {
        return tn;
    }
    getNoInputDetectedNotice() {
        return ti;
    }
    getPacketDelay() {
        return er.isPlatformEmbedded || this.getMode() !== em.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        eH.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return ez;
    }
    getVideoHook() {
        return tC().videoHook;
    }
    supportsVideoHook() {
        return eH.supports(eO.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tC().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e);
    }
    supportsExperimentalSoundshare() {
        return eH.supports(eO.AN.EXPERIMENTAL_SOUNDSHARE) && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eg.I9);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = tC().useSystemScreensharePicker,
            n = (0, er.isLinux)() || ((0, er.isMac)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eg.jR));
        return e && (null != t ? t : n);
    }
    supportsSystemScreensharePicker() {
        return eH.supports(eO.AN.NATIVE_SCREENSHARE_PICKER);
    }
    getOpenH264() {
        return tC().openH264;
    }
    getEverSpeakingWhileMuted() {
        return e8;
    }
    getSpeakingWhileMuted() {
        return e7;
    }
    getKrispModelOverride() {
        return c;
    }
    getKrispModels() {
        return tl;
    }
    getKrispVadActivationThreshold() {
        var e;
        return null != (e = tC().modeOptions.vadKrispActivationThreshold) ? e : ex;
    }
    hasActiveCallKitCall() {
        return tS;
    }
    setHasActiveCallKitCall(e) {
        tS = e;
    }
    supportsScreenSoundshare() {
        return (0, er.isMac)() ? eH.supports(eO.AN.SOUNDSHARE) && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eg.yG) && tG() : (0, er.isWindows)() ? eH.supports(eO.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, er.isLinux)() && eH.supports(eO.AN.SCREEN_SOUNDSHARE);
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eO.Yn.DEFAULT,
            t = this.supports(eO.AN.VIDEO)
                ? [
                      {
                          rid: '100',
                          type: e === eO.Yn.DEFAULT ? eO.Tr.VIDEO : eO.Tr.SCREEN,
                          quality: eO.y7
                      }
                  ]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === eO.Yn.DEFAULT || this.goLiveSimulcastEnabled()) &&
                t.push({
                    rid: '50',
                    type: e === eO.Yn.DEFAULT ? eO.Tr.VIDEO : eO.Tr.SCREEN,
                    quality: eO.LD
                }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: !1 };
        return ((0, er.isWeb)() && (e.fetchDave = F.N.getCurrentConfig({ location: 'MediaEngineStore fetchAsyncResources' }).loadWasmModule), eH.fetchAsyncResources(e));
    }
    getSupportedSecureFramesProtocolVersion() {
        if ((0, er.isWeb)()) {
            let { useWasmModule: e } = F.N.getCurrentConfig({ location: 'MediaEngineStore getSupportedSecureFramesProtocolVersion' });
            if (!e) return 0;
        }
        let e = eH.getSupportedSecureFramesProtocolVersion(),
            t = F.m.getCurrentConfig({ location: 'MediaEngineStore' });
        return (114 === e && (e = 1), t.canSupportDaveProtocol && e >= t.protocolVersionFloor ? e : 0);
    }
    hasClipsSource() {
        return null != o;
    }
    getGpuBrand() {
        return tI;
    }
}
function rg(e) {
    if (null == e.taskMetrics || 0 === e.taskMetrics.length || 1 === e.taskMetrics.length) return null;
    let t = {
        metrics_period_ms: e.periodMs,
        total_tasks: 0,
        total_exec_time_ns: 0
    };
    ((t.total_tasks = e.taskMetrics.reduce((e, t) => e + t.count, 0)), (t.total_exec_time_ns = e.taskMetrics.reduce((e, t) => e + t.totalExecTimeNs, 0)));
    let n = [...e.taskMetrics].sort((e, t) => t.longestExecTimeNs - e.longestExecTimeNs),
        r = [...e.taskMetrics].sort((e, t) => t.longestQueueTimeNs - e.longestQueueTimeNs);
    for (let e = 0; e < 3; e++)
        if (e < n.length) {
            let r = n[e];
            ((t['slow_task_'.concat(e, '_name')] = r.name), (t['slow_task_'.concat(e, '_longest_exec_time_ns')] = r.longestExecTimeNs));
        }
    for (let e = 0; e < 3; e++)
        if (e < r.length) {
            let n = r[e];
            ((t['delayed_task_'.concat(e, '_name')] = n.name), (t['delayed_task_'.concat(e, '_longest_queue_time_ns')] = n.longestQueueTimeNs));
        }
    return ((t.full_task_report = JSON.stringify(n)), t);
}
eI(rm, 'displayName', 'MediaEngineStore');
let rE = (r = new rm(v.Z, {
    VOICE_CHANNEL_SELECT: n4,
    VOICE_STATE_UPDATES: t8,
    CONNECTION_OPEN: t3,
    CONNECTION_CLOSED: t5,
    RTC_CONNECTION_STATE: t6,
    AUDIO_SET_TEMPORARY_SELF_MUTE: t7,
    AUDIO_TOGGLE_SELF_MUTE: t9,
    AUDIO_SET_SELF_MUTE: ne,
    AUDIO_TOGGLE_SELF_DEAF: nn,
    AUDIO_TOGGLE_LOCAL_MUTE: nr,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: ni,
    AUDIO_SET_LOCAL_VOLUME: ns,
    AUDIO_SET_LOCAL_PAN: nl,
    AUDIO_SET_MODE: nc,
    AUDIO_SET_INPUT_VOLUME: nu,
    AUDIO_SET_OUTPUT_VOLUME: nd,
    AUDIO_SET_INPUT_DEVICE: nf,
    AUDIO_SET_OUTPUT_DEVICE: n_,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: nh,
    AUDIO_SET_ECHO_CANCELLATION: ny,
    AUDIO_SET_SIDECHAIN_COMPRESSION: nO,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nv,
    AUDIO_SET_LOOPBACK: nT,
    AUDIO_SET_NOISE_SUPPRESSION: nN,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nC,
    AUDIO_SET_NOISE_CANCELLATION: nR,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: nP,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: nx,
    AUDIO_SET_DEBUG_LOGGING: nM,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: nk,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: nw,
    MEDIA_ENGINE_SET_VIDEO_HOOK: nj,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: nU,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: nG,
    AUDIO_SET_ATTENUATION: nB,
    AUDIO_SET_QOS: nV,
    MEDIA_ENGINE_DEVICES: ng,
    AUDIO_VOLUME_CHANGE: nE,
    AUDIO_RESET: nF,
    AUDIO_INPUT_DETECTED: nZ,
    AUDIO_SET_SUBSYSTEM: n1,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: n0,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: n7,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: n9,
    MEDIA_ENGINE_PERMISSION: n8,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rn,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: np,
    MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nD,
    MEDIA_ENGINE_INTERACTION_REQUIRED: nm,
    USER_SETTINGS_MODAL_INIT: rr,
    USER_SETTINGS_MODAL_SET_SECTION: rr,
    CERTIFIED_DEVICES_SET: ri,
    RPC_APP_CONNECTED: n5,
    RPC_APP_DISCONNECTED: n6,
    OVERLAY_INITIALIZE: t4,
    MEDIA_ENGINE_SET_OPEN_H264: ra,
    MEDIA_ENGINE_SET_HARDWARE_ENCODING: nL,
    APP_STATE_UPDATE: rs,
    SET_CHANNEL_BITRATE: rl,
    SET_VAD_PERMISSION: nH,
    SET_NATIVE_PERMISSION: nY,
    SET_CHANNEL_VIDEO_QUALITY_MODE: rd,
    MEDIA_ENGINE_SET_AEC_DUMP: ro,
    CHANNEL_DELETE: rc,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: ru,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rf,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: r_,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rp,
    USER_SETTINGS_PROTO_UPDATE: nt,
    CLIPS_INIT: re,
    CLIPS_SETTINGS_UPDATE: rt,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rh,
    VOICE_FILTER_REQUEST_SWITCH: nQ,
    VOICE_FILTER_LOOPBACK_TOGGLE: nX,
    VOICE_FILTER_APPLIED: n$,
    VOICE_FILTER_DOWNLOAD_FAILED: nJ,
    VOICE_FILTER_APPLY_FAILED: nJ
}));
