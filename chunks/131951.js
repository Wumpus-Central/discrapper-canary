let r, i, a, o, s, l, c;
(n.d(t, { Z: () => rb }), n(388685), n(953529), n(457542), n(539854), n(642613), n(49124), n(337869));
var u,
    d = n(512722),
    _ = n.n(d),
    f = n(392711),
    p = n.n(f),
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
    X = n(266661),
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
    e_ = n(592125),
    ef = n(19780),
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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function eS(e) {
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
                eT(e, t, n[t]);
            }));
    }
    return e;
}
function eA(e, t) {
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
function eN(e, t) {
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
let eC = new C.Z('MediaEngineStore'),
    eR = 'MediaEngineStore',
    eP = 4,
    ew = 1,
    eD = 1,
    eL = 1,
    ex = 1,
    eM = 0.5,
    ek = {
        left: 1,
        right: 1
    },
    ej = 500,
    eU = 5 * er.Z.Millis.SECOND,
    eG = -60,
    eB = 100,
    eV = 2 * er.Z.Millis.SECOND,
    eF = 0;
function eZ() {
    return {
        mode: eg.pM4.VOICE_ACTIVITY,
        modeOptions: {
            threshold: eG,
            autoThreshold: ei.isPlatformEmbedded || __OVERLAY__,
            vadUseKrisp: !0,
            vadKrispActivationThreshold: eM,
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
        sidechainCompression: !1,
        sidechainCompressionSettingVersion: 0,
        sidechainCompressionStrength: 50,
        automaticAudioSubsystem: !0,
        activeInputProfile: null
    };
}
let eH = {
        [eO._.CUSTOM]: {},
        [eO._.VOICE_ISOLATION]: {
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
        [eO._.STUDIO]: {
            mode: eg.pM4.VOICE_ACTIVITY,
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
    eY = (0, b.Mt)((0, b.jj)());
eC.enableNativeLogger(!0);
let eW = {},
    eK = new Set([ev.Yn.DEFAULT]),
    ez = eY.supports(ev.AN.AUTO_ENABLE),
    eq = !1,
    eX = ev.Yn.STREAM,
    eQ = performance.now(),
    eJ = { [ev.w5]: tq('No Input Devices') },
    e$ = { [ev.w5]: tq('No Output Devices') },
    e0 = { [ev.w5]: tq('No Video Devices') },
    e1 = !1,
    e2 = !1,
    e3 = !1,
    e4 = !1,
    e5 = !1,
    e6 = ev.Av,
    e8 = !1,
    e7 = !1,
    e9 = !1,
    te = new O.V7(),
    tt = !1,
    tn = !1,
    tr = null,
    ti = !1,
    ta = !1,
    to = !1,
    ts = !1,
    tl = !1,
    tc = [],
    tu = !1,
    td = null,
    t_ = null,
    tf = null,
    tp = null,
    th = null,
    tm = !1,
    tg = !1,
    tE = !1;
(z.Z.hasPermission(eb.Eu.AUDIO, { showAuthorizationError: !1 }), z.Z.hasPermission(eb.Eu.CAMERA, { showAuthorizationError: !1 }));
let tb = !1,
    ty = new Set(),
    tO = tb,
    tv = new Set(),
    tI = {},
    tT = null,
    tS = !0,
    tA = !1;
function tN() {
    var e, t;
    return null != (t = null == (e = eh.default.getCurrentUser()) ? void 0 : e.isStaff()) && t ? 'always' : ea.Z === g.R.CANARY ? 'permittedDevicesOnly' : 'never';
}
function tC() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.DEFAULT,
        t = eW[e];
    return (null == t && ((t = eZ()), (eW[e] = t)), t);
}
function tR() {
    var e, t, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.DEFAULT,
        i = tC(r),
        a = eH[null != (e = i.activeInputProfile) ? e : eO._.CUSTOM];
    return eN(eS({}, i, a), { modeOptions: eS({}, null != (t = i.modeOptions) ? t : {}, null != (n = a.modeOptions) ? n : {}) });
}
function tP(e) {
    var t;
    let n = tR(e.context);
    e.setInputMode(n.mode, {
        vadThreshold: n.modeOptions.threshold,
        vadAutoThreshold: n.modeOptions.autoThreshold,
        vadUseKrisp: n.modeOptions.vadUseKrisp && nK() && !X.M.getCurrentConfig({ location: 'setInputMode' }).disableKrispVAD,
        vadKrispActivationThreshold: null != (t = n.modeOptions.vadKrispActivationThreshold) ? t : 0.5,
        vadLeading: n.modeOptions.vadLeading,
        vadTrailing: n.modeOptions.vadTrailing,
        pttReleaseDelay: n.modeOptions.delay
    });
}
function tw(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ev.Qx;
    return p().clamp(e, 0, t);
}
function tD(e) {
    let t = tR(e.context),
        n = !ez || t.mute || t.deaf;
    (e.context === ev.Yn.DEFAULT ? (n = n || e1 || e2 || e3 || !z.Z.didHavePermission(eb.Eu.AUDIO)) : e.context === ev.Yn.STREAM && (n = !0), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === ev.Yn.DEFAULT && S.Z.updateNativeMute());
}
function tL(e) {
    e !== eX && (null != a && eY.setGoLiveSource(null, eX), (eX = e));
}
function tx() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e5,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        s = a;
    if (((null == s ? void 0 : s.desktopSource) != null && s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? void 0 : e.id) && (null != s.desktopSource.soundshareId && (0, ei.isWindows)() && T.pn(s.desktopSource.soundshareId), eY.setGoLiveSource(null, eX)), (null == s ? void 0 : s.cameraSource) != null && (s.cameraSource.videoDeviceGuid !== (null == o || null == (t = o.cameraSource) ? void 0 : t.videoDeviceGuid) || s.cameraSource.audioDeviceGuid !== (null == o || null == (n = o.cameraSource) ? void 0 : n.audioDeviceGuid)) && eY.setGoLiveSource(null, eX), (e5 || i) && ((e6 = (e5 = i) ? tQ(e0, tR().videoDeviceId) : ev.Av), eY.setVideoInputDevice(e6)), (a = o), null != o)) {
        let e = {
            resolution: o.quality.resolution,
            frameRate: o.quality.frameRate
        };
        if (null != o.desktopSource) {
            let t = tN(),
                n = tR().videoHook,
                i = tU(),
                a = i ? (tG() && (0, W.R)('MediaEngineStore_updateVideo').enabled ? eE.zj : eE.ZM) : 0;
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
                        allowScreenCaptureKit: tB(),
                        videoHookStaleFrameTimeoutMs: ej,
                        graphicsCaptureStaleFrameTimeoutMs: eU,
                        hdrCaptureMode: t
                    },
                    quality: e
                },
                eX
            );
        }
        null != o.cameraSource &&
            eY.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: o.cameraSource.audioDeviceGuid
                    },
                    quality: e
                },
                eX
            );
    }
}
function tM(e) {
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
function tk(e) {
    let t = tR(),
        n = t.inputDeviceId;
    if ((e.setEchoCancellation(ed.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(ed.Z.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(ed.Z.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), e.setVoiceFilterId(td), (0, ei.isWeb)())) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function tj() {
    (eY.on(b.aB.Connection, (e) => {
        var t, n;
        (tP(e), tD(e), tk(e));
        let i = tR();
        (e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers), e.setQoS(i.qos), e.setExperimentalEncoders(i.experimentalEncoders), e.setHardwareH264(null == (t = i.hardwareEncoding) || t), e.setSoftwareH264(null == (n = i.openH264) || n));
        let o = ef.Z.getGuildId(),
            { muteBeforeProcessing: s, pttBeforeProcessing: l, skipEncode: c } = (null != o ? U.Z : j.Z).getCurrentConfig(eS({ location: 'setupMediaEngine' }, null != o && { guildId: o }), { autoTrackExposure: !0 });
        (s && e.setExperimentFlag(ev.V8.MUTE_BEFORE_PROCESSING, !0),
            l && e.setExperimentFlag(ev.V8.PTT_BEFORE_PROCESSING, !0),
            c && e.setExperimentFlag(ev.V8.SKIP_ENCODE, !0),
            null != o &&
                V.Z.getCurrentConfig(
                    {
                        location: 'setupMediaEngine',
                        guildId: o
                    },
                    { autoTrackExposure: !0 }
                ).enabled &&
                e.setExperimentFlag(ev.V8.SIGNAL_RED, !0));
        let u = !1,
            d = !0;
        if ((e.setExperimentFlag(ev.V8.RESET_DECODER_ON_ERRORS, !0), u && e.setExperimentFlag(ev.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0), d && e.setExperimentFlag(ev.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0), e.context === ev.Yn.STREAM)) {
            let { simulcastEnabled: t, lqStreamBitrate: n } = G.Z.getConfig();
            e.configureGoLiveSimulcast(t, n);
            let r = (0, B.k)({
                location: 'setupMediaEngine',
                autoTrackExposure: !0
            }).enabled;
            e.setGoLiveUsePixelCounts(r);
        }
        ((0, ei.isWindows)() ? ((null == tT ? void 0 : tT.startsWith('NVIDIA')) || (null == tT ? void 0 : tT.startsWith('AMD')) ? e.setExperimentFlag(ev.V8.SIGNAL_AV1, !0) : e.setExperimentFlag(ev.V8.SIGNAL_AV1_DECODE, !0)) : ((0, ei.isMac)() || (0, ei.isLinux)()) && e.setExperimentFlag(ev.V8.SIGNAL_AV1_DECODE, !0), (0, ei.isWindows)() && e.setExperimentFlag(ev.V8.SIGNAL_AV1_HARDWARE_DECODE, !0), eY.setHasFullbandPerformance((0, R.Z)()));
        let _ = (0, k.D)('setupMediaEngine').enabled;
        if ((e.setRemoteAudioHistory(1000 * !!_), (0, N.Z)(r))) {
            let t = A.Z.getSettings();
            e.setExperimentFlag(ev.V8.STREAMER_CLIP, t.clipsEnabled);
            let { enableViewerClipping: n } = H.Z.getCurrentConfig({ location: 'f627ab_15' }, { autoTrackExposure: !1 });
            (e.setViewerSideClip(n), e.setClipsKeyFrameInterval(ev.ux));
        }
        for (let t of ((i = tR(e.context)), e.setPostponeDecodeLevel(eB), Object.keys(i.localMutes))) t !== ec.default.getId() && e.setLocalMute(t, i.localMutes[t]);
        for (let t of Object.keys(i.localVolumes)) t !== ec.default.getId() && e.setLocalVolume(t, i.localVolumes[t]);
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
            e.context === ev.Yn.DEFAULT &&
                ((e7 = !1),
                (e9 = !1),
                e.on(b.Sh.SpeakingWhileMuted, () => {
                    ((e7 = !0),
                        (e9 = !0),
                        r.emitChange(),
                        te.stop(),
                        te.start(eV, () => {
                            ((e9 = !1), r.emitChange());
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
                    et.default.track(
                        eg.rMx.VIDEOHOOK_INITIALIZED,
                        eS(
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
                (eC.warn('noisecancellererror event: '.concat(e)),
                    (0, P.kr)({
                        type: P.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tM(e)
                    }),
                    (tm = !0),
                    et.default.track(eg.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
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
                (eC.warn('voiceactivitydetectorerror event: '.concat(e)),
                    (0, P.kr)({
                        type: P.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tM(e)
                    }),
                    et.default.track(eg.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    v.Z.dispatch({
                        type: 'AUDIO_SET_MODE',
                        context: ev.Yn.DEFAULT,
                        mode: eg.pM4.VOICE_ACTIVITY,
                        options: eN(eS({}, tR(ev.Yn.DEFAULT).modeOptions), { vadUseKrisp: !1 })
                    }),
                    v.Z.dispatch({
                        type: 'MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR',
                        code: e
                    }));
            }),
            e.on(b.Sh.SdpError, (e, t, n, r) => {
                et.default.track(eg.rMx.SDP_ERROR, {
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
            e.setBitRate(eu.Z.bitrate),
            e.applyVideoQualityMode(em.Z.mode));
    }),
        eY.on(b.aB.DeviceChange, (e, t, n) => {
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_DEVICES',
                inputDevices: e,
                outputDevices: t,
                videoDevices: n
            });
        }),
        eY.on(b.aB.VolumeChange, (e, t) => {
            v.Z.dispatch({
                type: 'AUDIO_VOLUME_CHANGE',
                inputVolume: e,
                outputVolume: t
            });
        }),
        eY.on(b.aB.DesktopSourceEnd, () => {
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                settings: null
            });
        }),
        eY.on(b.aB.AudioPermission, (e) => {
            ((tE = !0),
                v.Z.dispatch({
                    type: 'MEDIA_ENGINE_PERMISSION',
                    kind: 'audio',
                    granted: e
                }));
        }),
        eY.on(b.aB.VideoPermission, (e) => {
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_PERMISSION',
                kind: 'video',
                granted: e
            });
        }),
        eY.on(b.aB.WatchdogTimeout, async () => {
            let e;
            try {
                await en.Z.submitLiveCrashReport({ message: { message: 'Voice Watchdog Timeout' } });
            } catch (t) {
                'number' == typeof t.status && (e = t.status);
            }
            (eC.warn('Watchdog timeout, report submission status: '.concat(null != e ? e : 200)), et.default.track(eg.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e }));
        }),
        eY.on(b.aB.VideoInputInitialized, (e) => {
            et.default.track(eg.rMx.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * er.Z.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: ef.Z.getMediaSessionId(),
                rtc_connection_id: ef.Z.getRTCConnectionId()
            });
        }),
        eY.on(b.aB.AudioInputInitialized, (e) => {
            et.default.track(eg.rMx.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * er.Z.Millis.SECOND),
                rtc_connection_id: ef.Z.getRTCConnectionId()
            });
        }),
        eY.on(b.aB.ClipsRecordingRestartNeeded, () => {
            v.Z.dispatch({ type: 'CLIPS_RESTART' });
        }),
        eY.on(b.aB.ClipsInitFailure, (e, t) => {
            v.Z.wait(() => {
                v.Z.dispatch({
                    type: 'CLIPS_INIT_FAILURE',
                    errMsg: e,
                    applicationName: t
                });
            });
        }),
        eY.on(b.aB.ClipsRecordingEnded, (e, t) => {
            var n, r;
            (null == o || null == (n = o.desktopSource) ? void 0 : n.id) === e && (null != t && (null == a || null == (r = a.desktopSource) ? void 0 : r.soundshareId) !== t && T.pn(t), (o = null));
        }),
        eY.on(b.aB.NativeScreenSharePickerUpdate, (e, t) => {
            v.Z.dispatch({
                type: 'NATIVE_SCREEN_SHARE_PICKER_UPDATE',
                existing: e,
                content: t
            });
        }),
        eY.on(b.aB.NativeScreenSharePickerCancel, (e) => {
            v.Z.dispatch({
                type: 'NATIVE_SCREEN_SHARE_PICKER_CANCEL',
                existing: e
            });
        }),
        eY.on(b.aB.NativeScreenSharePickerError, (e) => {
            v.Z.dispatch({
                type: 'NATIVE_SCREEN_SHARE_PICKER_ERROR',
                error: e
            });
        }),
        eY.on(b.aB.AudioDeviceModuleError, (e, t, n) => {
            et.default.track(eg.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                audio_device_module: e,
                code: t,
                device_name: n
            });
        }),
        eY.on(b.aB.VideoCodecError, (e) => {
            let t = 'encode' === e.mode ? P.u.VIDEO_ENCODE_ERROR : P.u.VIDEO_DECODE_ERROR,
                n = {
                    videoCodec: e.codecStandard,
                    errorMessage: e.message
                };
            (0, P.kr)(t === P.u.VIDEO_ENCODE_ERROR ? eN(eS({ type: t }, n), { videoEncoder: e.implName }) : eN(eS({ type: t }, n), { videoDecoder: e.implName }));
        }),
        eY.on(b.aB.ConnectionStats, (e) => {
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_CONNECTION_STATS',
                connectionStats: e.map((e) => {
                    let { stats: t, connection: n } = e;
                    return {
                        stats: t,
                        mediaEngineConnectionId: n.mediaEngineConnectionId,
                        version: eF++,
                        context: n.context
                    };
                })
            });
        }),
        eY.on(b.aB.VoiceQueueMetrics, (e) => {
            let t = rE(e);
            null !== t && et.default.track(eg.rMx.VOICE_QUEUE_METRICS, t);
        }),
        eY.setOnVideoContainerResized((e, t, n) => {
            v.Z.wait(() =>
                v.Z.dispatch({
                    type: 'VIDEO_SIZE_UPDATE',
                    streamId: e,
                    width: t,
                    height: n
                })
            );
        }),
        tZ.reset(),
        (0, ep.q)().then((e) => {
            null != e && (tT = e.gpu_brand);
        }));
}
function tU() {
    return (0, ei.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eE.c5);
}
function tG() {
    return (0, ei.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eE.sN);
}
function tB() {
    return (0, ei.isMac)() && eY.supports(ev.AN.SCREEN_CAPTURE_KIT) && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eE.C7);
}
function tV() {
    return (0, ei.isWindows)() && eY.supports(ev.AN.AUTOMATIC_AUDIO_SUBSYSTEM) && eY.supports(ev.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH);
}
function tF() {
    return eY.supports(ev.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
let tZ = new (class {
    start() {
        this.started || ((this.started = !0), eY.on(b.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            eY.removeListener(b.aB.Silence, this.handleSilence),
            v.Z.dispatch({
                type: 'AUDIO_INPUT_DETECTED',
                inputDetected: null
            }));
    }
    update() {
        let e = tR();
        !ti && ef.Z.getState() === eg.hes.RTC_CONNECTED && e.mode === eg.pM4.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop();
    }
    reset() {
        (this.stop(), this.update());
    }
    constructor() {
        (eT(this, 'stateChangeTimeout', void 0),
            eT(this, 'noVoiceTimeout', 5000),
            eT(this, 'voiceTimeout', 1500),
            eT(this, 'started', !1),
            eT(this, 'handleSilence', (e) => {
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
                                    e && (ta = !0)));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout
                    )));
            }));
    }
})();
function tH() {
    var e;
    let t = y.K.get('audio');
    (null != t && (y.K.set(eR, { [ev.Yn.DEFAULT]: t }), y.K.remove('audio')),
        (eW = null != (e = y.K.get(eR)) ? e : {}),
        p().each(eW, (e) => {
            if ((p().defaultsDeep(e, eZ()), null != e.modeOptions && 'string' == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, el.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== eP && ((e.vadUseKrispSettingVersion = eP), (e.modeOptions.vadUseKrisp = !0)), e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)), !e.vadThrehsoldMigrated)) {
                var t;
                ((e.vadThrehsoldMigrated = !0), (null == (t = e.modeOptions) ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = eG));
            }
            ((0, ei.isWeb)() ? e.ncUseKrispjsSettingVersion !== eD && ((e.ncUseKrispjsSettingVersion = eD), (e.noiseSuppression = !1), (e.noiseCancellation = !0)) : e.ncUseKrispSettingVersion !== ew && ((e.ncUseKrispSettingVersion = ew), (e.noiseSuppression = !1), (e.noiseCancellation = !0)), e.hardwareEnabledVersion !== eL && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = eL)), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264));
        }),
        tK());
}
function tY(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ev.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = tC(t);
    return (Object.assign(r, e), !__OVERLAY__ && n && y.K.set(eR, eW), r);
}
function tW() {
    (y.K.remove(eR), location.reload());
}
function tK() {
    var e, t, n;
    let r = tR();
    (eY.setAudioInputDevice(r.inputDeviceId), eY.setAudioOutputDevice(r.outputDeviceId), tx(), eY.setInputVolume(r.inputVolume), eY.setOutputVolume(r.outputVolume), eY.setH264Enabled(null == (e = r.hardwareEncoding) || e || r.openH264), eY.setAv1Enabled(null == (t = r.hardwareEncoding) || t), eY.setH265Enabled(null == (n = r.hardwareEncoding) || n), eY.setAecDump(r.aecDumpEnabled), eY.setSidechainCompression(r.sidechainCompression), eY.setSidechainCompressionStrength(r.sidechainCompressionStrength), eY.setAudioInputBypassSystemProcessing(r.bypassSystemInputProcessing));
}
function tz() {
    ez ||
        eY.enable().then(() =>
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
                enabled: !0,
                unmute: !1
            })
        );
}
function tq(e) {
    return {
        id: ev.w5,
        index: 0,
        name: e,
        disabled: !0,
        hardwareId: void 0,
        containerId: void 0
    };
}
function tX(e, t) {
    if (0 === e.length) {
        let e = tq(t);
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
function tQ(e, t) {
    var n;
    let r = null != (n = e[t]) ? n : p()(e).values().first();
    return null != r ? r.id : t;
}
function tJ(e) {
    let t = eJ;
    if (((eJ = tX(e, eI.intl.string(eI.t['/QIjDA']))), !p().isEqual(eJ, t))) {
        let e = tR(),
            t = tQ(eJ, e.inputDeviceId);
        eY.setAudioInputDevice(t);
    }
}
function t$(e) {
    let t = e$;
    if (((e$ = tX(e, eI.intl.string(eI.t.xlUg0t))), !p().isEqual(e$, t))) {
        let e = tR(),
            t = tQ(e$, e.outputDeviceId);
        eY.setAudioOutputDevice(t);
    }
}
function t0(e) {
    tn = e.length > 0;
    let t = e0;
    if (((e0 = tX(e, eI.intl.string(eI.t.WKWARU))), e5 && !p().isEqual(e0, t))) {
        var n;
        let e = void 0 !== e0[e6],
            r = e6 === ev.w5 && (null == (n = t[ev.w5]) ? void 0 : n.disabled);
        tx(e || r);
    }
}
function t1() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        r =
            null != (e = J.Z.settings.audioContextSettings)
                ? e
                : {
                      user: {},
                      stream: {}
                  };
    for (let e of Object.keys(r)) {
        let i = e === ey.u0.USER ? ev.Yn.DEFAULT : ev.Yn.STREAM,
            a = i === ev.Yn.STREAM ? ev.Yh : ev.Qx,
            o = null != (t = r[e]) ? t : {},
            { localMutes: s, localVolumes: l } = tR(i);
        for (let [e, t] of Object.entries(o))
            null == (0, Q.Ky)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== a ? (l[e] = t.volume) : delete l[e],
                eY.eachConnection((n) => {
                    (n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted));
                }, i));
        if (n)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == o[e] &&
                    (delete s[e],
                    delete l[e],
                    eY.eachConnection((t) => {
                        (t.setLocalVolume(e, a), t.setLocalMute(e, !1));
                    }, i));
        tY(
            {
                localMutes: s,
                localVolumes: l
            },
            i
        );
    }
}
function t2(e) {
    if (null == r)
        return (
            eC.info('Error: trying to get soundshare id before MediaEngineStore is instantiated.'),
            {
                soundshareId: null,
                soundshareSession: ''
            }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : en.Z.getAudioPid(e),
            n = '';
        return (
            null != t && (n = en.Z.generateSessionFromPid(t)),
            {
                soundshareId: t,
                soundshareSession: n
            }
        );
    }
}
function t3(e, t) {
    (0, ei.isWindows)() &&
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
function t4(e) {
    ((i = e.sessionId),
        (e1 = !1),
        (e4 = !1),
        (0, ei.isWeb)() ||
            (Z.Z.subscribe({ location: 'handleConnectionOpen' }, (e) => {
                let t = tR();
                !e.sidechainAvailable && t.sidechainCompression ? (tY({ sidechainCompressionSettingVersion: 0 }), nT(!1)) : e.sidechainAvailable && t.sidechainCompressionSettingVersion < ex && (tY({ sidechainCompressionSettingVersion: ex }), nT(e.sidechainEnabled));
            }),
            nA()));
    let t = tR();
    if ((tV() && (tF() ? n3(ev.iA.AUTOMATIC) : t.automaticAudioSubsystem && n4()), eY.supports(ev.AN.OFFLOAD_ADM_CONTROLS))) {
        let { enabled: e } = M.S.getCurrentConfig({ location: 'handleConnectionOpen' }, { autoTrackExposure: !0 });
        eY.setOffloadAdmControls(e);
    }
    ((0, $.wt)({
        location: 'MediaEngineStore',
        autoTrackExposure: !1
    }) &&
        null !== t.mostRecentlyRequestedVoiceFilter &&
        (0, ei.isDesktop)() &&
        (ee.Z.getLastInitAttemptMayHaveCrashed()
            ? (v.Z.dispatch({
                  type: 'AUDIO_SET_SELF_MUTE',
                  mute: !0,
                  context: ev.Yn.DEFAULT,
                  playSoundEffect: !0
              }),
              tY({ mostRecentlyRequestedVoiceFilter: null }))
            : n(358820).r5()),
        t1());
}
function t5(e) {
    let { mediaEngineState: t } = e;
    ((eW = t.settingsByContext), (eJ = t.inputDevices), (e$ = t.outputDevices), (tI = t.appSupported), (tl = t.krispModuleLoaded), (s = t.krispVersion), (eX = t.goLiveContext));
}
function t6() {
    i = null;
}
function t8(e) {
    switch (e.state) {
        case eg.hes.CONNECTING:
            tz();
            break;
        case eg.hes.RTC_CONNECTING:
            ((ti = !1), (ta = !1));
            break;
        case eg.hes.RTC_CONNECTED:
            tx();
            break;
        case eg.hes.DISCONNECTED:
            (no(), ns());
    }
    tZ.update();
}
function t7(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => (i === t.sessionId ? ((e1 = t.mute || t.suppress), (e4 = t.deaf), eY.eachConnection(tD), tx((null == t.guildId || null == t.channelId || null == th || th === t.channelId) && e5), (th = t.channelId), !0) : (__OVERLAY__ || t.userId !== ec.default.getId() || null != ef.Z.getChannelId() || tx(!1, null), e)), !1);
}
function t9(e) {
    let { mute: t } = e;
    ((e2 = t), eY.eachConnection(tD));
}
function ne(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = tR(t);
    if (t === ev.Yn.DEFAULT && (z.Z.requestPermission(eb.Eu.AUDIO), e3)) return !1;
    ((r = !i && !r) || (i = !1),
        n || (e8 = !0),
        tY(
            {
                mute: r,
                deaf: i
            },
            t
        ),
        eY.eachConnection(tD));
}
function nt(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    (tY({ mute: n }, t), r || (e8 = !0), eY.eachConnection(tD));
}
function nn(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r
    } = e;
    if (t !== ey.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    t1(!0);
}
function nr(e) {
    let { context: t } = e;
    (tY({ deaf: !tR(t).deaf }, t), eY.eachConnection(tD));
}
function ni(e) {
    let { context: t, userId: n } = e;
    if (n === ec.default.getId()) return;
    let { localMutes: r } = tR(t);
    (r[n] ? delete r[n] : (r[n] = !0), tY({ localMutes: r }, t), eY.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t));
}
function na(e) {
    var t, n, r, i, a, o, s;
    let { context: l, userId: c, videoToggleState: u, persist: d, isAutomatic: f } = e;
    _()(!(d && f), 'These are not allowed to both be true.');
    let p = u === eg.ZUi.DISABLED,
        { disabledLocalVideos: h } = tR(l),
        m = null != (t = h[c]) && t,
        g = ty.has(c),
        E = u === eg.ZUi.AUTO_ENABLED || u === eg.ZUi.MANUAL_ENABLED;
    (eC.info('disableVideo='.concat(p, ' currentlyDisabled=').concat(m, ' currentlyAutoDisabled=').concat(g, ', isVideoShown=').concat(E)), _()(!(g && !m), 'If you are auto-disabled, then you are also disabled.'));
    let b = p !== m,
        y = l === ev.Yn.DEFAULT,
        O = f && b && y,
        v = d && b && y;
    eC.info('changed='.concat(b, ' isDefaultContext=').concat(y, ' isUpdateCausedByVideoHealthManager=').concat(O, ' isManualToggleByUser=').concat(v));
    let { videoToggleStateMap: I } = tR(l);
    if ((I[c] === eg.ZUi.AUTO_PROBING && u === eg.ZUi.AUTO_ENABLED && (0, K.Z)(c, p ? ev.fC.AUTO_DISABLE : ev.fC.AUTO_ENABLE, E), (I[c] = u), tY({ videoToggleStateMap: I }, l, d), u === eg.ZUi.AUTO_PROBING ? null == (n = ef.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, !0) : null == (r = ef.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, !1), tO || (eC.info('isAutoDisableAllowed='.concat(tO, ' - disabling VideoHealthManager')), null == (a = ef.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()), O)) {
        if ((!p && !g) || (p && !tO)) return;
        ((0, K.Z)(c, p ? ev.fC.AUTO_DISABLE : ev.fC.AUTO_ENABLE, E), p ? ty.add(c) : ty.delete(c));
    } else v && (g && !p ? (eC.info('disallowing auto-disable for this session because of manual override by user'), (tO = !1), null == (s = ef.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(), (0, K.Z)(c, ev.fC.MANUAL_REENABLE, E)) : (0, K.Z)(c, p ? ev.fC.MANUAL_DISABLE : ev.fC.MANUAL_ENABLE, E));
    (y && !p && ty.delete(c),
        p ? (h[c] = !0) : delete h[c],
        tY({ disabledLocalVideos: h }, l, d),
        eY.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(c, null != (t = h[c]) && t);
        }, l));
}
function no() {
    if (0 === ty.size) return;
    let e = ev.Yn.DEFAULT,
        { disabledLocalVideos: t } = tR(e);
    (ty.forEach((n) => {
        (_()(t[n], 'If you are auto-disabled, then you are also disabled.'), delete t[n], eY.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e));
    }),
        ty.clear(),
        tY({ disabledLocalVideos: t }, e, !1));
}
function ns() {
    let e = ev.Yn.DEFAULT,
        { videoToggleStateMap: t } = tR(e);
    for (let [e, n] of Object.entries(t)) n === eg.ZUi.AUTO_PROBING && delete t[e];
    tY({ videoToggleStateMap: t }, e, !1);
}
function nl(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === ec.default.getId()) return;
    let i = t === ev.Yn.STREAM ? ev.Yh : ev.Qx,
        { localVolumes: a } = tR(t);
    (r === i ? delete a[n] : (a[n] = r), tY({ localVolumes: a }, t), eY.eachConnection((e) => e.setLocalVolume(n, r), t));
}
function nc(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: a } = tR(t);
    ((a[n] = {
        left: r,
        right: i
    }),
        tY({ localPans: a }, t),
        eY.eachConnection((e) => e.setLocalPan(n, r, i), t));
}
function nu(e) {
    let { context: t, mode: n, options: r } = e;
    (tY(
        {
            mode: n,
            modeOptions: r
        },
        t
    ),
        eY.eachConnection(tP),
        tZ.update());
}
function nd(e) {
    let { volume: t } = e;
    (tY({ inputVolume: tw(t) }), eY.setInputVolume(t));
}
function n_(e) {
    let { volume: t } = e;
    (tY({ outputVolume: t }), eY.setOutputVolume(t));
}
function nf(e) {
    let { id: t } = e;
    ((t = tQ(eJ, t)), (eQ = performance.now()), tY({ inputDeviceId: t }), eY.setAudioInputDevice(t));
}
function np(e) {
    let { id: t } = e;
    (tY({ outputDeviceId: (t = tQ(e$, t)) }), eY.setAudioOutputDevice(t));
}
function nh(e) {
    let { id: t } = e;
    (tY({ videoDeviceId: (t = tQ(e0, t)) }), tx());
}
function nm(e) {
    let { inputProfile: t } = e,
        n = tY({ activeInputProfile: t });
    (eY.eachConnection((e) => {
        (tP(e), e.setAutomaticGainControl(n.automaticGainControl), e.setEchoCancellation(n.echoCancellation), e.setExperimentalEncoders(n.experimentalEncoders), e.setNoiseCancellation(n.noiseCancellation), e.setNoiseSuppression(n.noiseSuppression));
    }),
        eY.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        tZ.update(),
        nN());
}
function ng(e) {
    return eq !== e.required && ((eq = e.required), e.required || eY.interact(), !0);
}
function nE(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    (tJ(t), t$(n), t0(r));
}
function nb(e) {
    let { inputVolume: t, outputVolume: n } = e;
    tY({
        inputVolume: tw(t),
        outputVolume: n
    });
}
function ny(e) {
    var t;
    let n = tR(),
        r = eY.getAudioSubsystem(),
        i = eY.getAudioLayer(),
        a = tQ(eJ, n.inputDeviceId),
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
        input_device: o
    });
}
function nO(e) {
    let t = tY({ echoCancellation: e.enabled });
    (eY.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nN(), ny(e.location));
}
function nv(e) {
    nT(e.enabled);
}
function nI(e) {
    let t = tY({ sidechainCompressionStrength: e.strength });
    eY.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function nT(e) {
    let t = tY({ sidechainCompression: e });
    eY.setSidechainCompression(t.sidechainCompression);
}
function nS(e) {
    let { enabled: t, loopbackReason: n } = e;
    return (t ? tv.add(n) : tv.delete(n), nA(), nN());
}
function nA() {
    let { voiceFiltersPreProcessMute: e } = Y.Z.getCurrentConfig({ location: 'setMaybePreprocessMute' }, { autoTrackExposure: !0 }),
        t = e && !tv.has('voice_filter_preview') && !tv.has('mic_test');
    eY.setMaybePreprocessMute(t);
}
function nN() {
    let e = tR(),
        t = tv.size > 0,
        n = e.inputDeviceId,
        r = ed.Z.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        a = ed.Z.hasNoiseSuppression(n) || e.noiseSuppression,
        o = ed.Z.hasAutomaticGainControl(n) || e.automaticGainControl,
        s = e.noiseCancellation,
        l = null !== td,
        c = tv.has('voice_filter') && 1 === tv.size;
    eY.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: a,
        automaticGainControl: o,
        noiseCancellation: s,
        voiceFilters: l,
        loopbackUseAudioMode: c
    });
}
function nC(e) {
    let t = tY({ noiseSuppression: e.enabled });
    (eY.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nN(), ny(e.location));
}
function nR(e) {
    let t = tY({ automaticGainControl: e.enabled });
    (eY.eachConnection((e) => e.setAutomaticGainControl(t.automaticGainControl)), nN(), ny(e.location));
}
function nP(e) {
    let t = tY({ noiseCancellation: e.enabled });
    (eY.eachConnection((e) => e.setNoiseCancellation(t.noiseCancellation)), nN(), ny(e.location));
}
function nw(e) {
    (q.Z.setKrispModelOverride(e.model), (c = e.model), nN());
}
function nD(e) {
    var t;
    (0, ei.isWeb)() || ((tu = e.enabled), null == (t = eY.setNoiseCancellationEnableStats) || t.call(eY, e.enabled));
}
function nL(e) {
    let t = tY({ experimentalEncoders: e.enabled });
    eY.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
}
function nx(e) {
    var t, n;
    let { enabled: r } = e,
        i = tY({ hardwareEncoding: r });
    (eY.eachConnection((e) => {
        var t;
        return e.setHardwareH264(null == (t = i.hardwareEncoding) || t);
    }),
        eY.setH264Enabled(i.hardwareEncoding || i.openH264),
        eY.setAv1Enabled(null == (t = i.hardwareEncoding) || t),
        eY.setH265Enabled(null == (n = i.hardwareEncoding) || n));
}
function nM(e) {
    (tY({ silenceWarning: e.enabled }), tZ.update());
}
function nk(e) {
    eY.setDebugLogging(e.enabled);
}
function nj(e) {
    let { level: t } = e;
    ((l = t), q.Z.setKrispSuppressionLevel(t));
}
function nU(e) {
    tY({ videoHook: e.enabled });
}
function nG(e) {
    tY({ experimentalSoundshare2: e.enabled });
}
function nB(e) {
    let { enabled: t } = e;
    tY({ useSystemScreensharePicker: t });
}
function nV(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = tY({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r
        });
    eY.eachConnection((e) => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers));
}
function nF(e) {
    let { enabled: t } = e;
    (tY({ qos: t }), eY.eachConnection((e) => e.setQoS(t)));
}
function nZ() {
    tW();
}
function nH(e) {
    let { inputDetected: t } = e;
    ((tr = t), !ti && tr && ((ti = !0), tZ.update()));
}
function nY(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === e3) return !1;
    ((e3 = n), eY.eachConnection(tD));
}
function nW(e) {
    let { state: t, permissionType: n } = e,
        r = t === eb.PQ.ACCEPTED;
    switch (n) {
        case eb.Eu.AUDIO:
            ((tE = !0), eY.eachConnection(tD));
            break;
        case eb.Eu.CAMERA:
            !r && e5 && tx(!1);
            break;
        default:
            return !1;
    }
}
function nK() {
    return tl || !1;
}
async function nz() {
    try {
        var e, t, n, i;
        await es.ZP.ensureModule('discord_krisp');
        let a = es.ZP.requireModule('discord_krisp');
        ((tl = !0),
            (s = null == (e = a.getSdkVersion) ? void 0 : e.call(a)),
            (l = null != (i = null == (t = a.getSuppressionLevel) ? void 0 : t.call(a)) ? i : 100),
            null == (n = a.getNcModels) ||
                n.call(a).then((e) => {
                    ((tc = e), r.emitChange());
                }),
            r.emitChange());
    } catch (t) {
        (eC.warn('Failed to load Krisp module: '.concat(t.message)), eo.Z.captureException(t));
        let e = ev.H3.INITIALIZED;
        if (t.message.includes(': ')) {
            let n = parseInt(t.message.substring(t.message.indexOf(': ') + 1));
            e = isNaN(n) || 0 === n ? ev.H3.INITIALIZED : n;
        }
        (et.default.track(eg.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), tY({ noiseCancellation: !1 }));
    } finally {
        ts = !1;
    }
}
function nq() {
    return ((0, ei.isWindows)() && 'arm64' !== es.ZP.architecture) || (0, ei.isLinux)() || (0, ei.isMac)();
}
function nX() {
    !nq() || __OVERLAY__ || ts || tl ? ((0, ei.isWeb)() && eY.supports(ev.AN.NOISE_CANCELLATION) ? ((tl = !0), r.emitChange()) : (0, ei.isWeb)() && tY({ noiseCancellation: !1 })) : ((ts = !0), nz());
}
function nQ(e) {
    let { enabled: t } = e;
    (et.default.track(eg.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != td ? td : null,
        enabled: t
    }),
        tY({ voiceFilterPlaybackEnabled: t }));
}
function nJ(e) {
    let { newVoiceFilterId: t } = e;
    (tY({ mostRecentlyRequestedVoiceFilter: t }), eY.eachConnection((e) => e.setVoiceFilterId(t)));
}
function n$() {
    tY({ mostRecentlyRequestedVoiceFilter: null });
}
function n0(e) {
    let { voiceFilterId: t } = e;
    ((tf = td), (tp = t_), (td = t), (t_ = null === t ? null : Date.now()));
}
function n1(e) {
    let t = e.bypassEnabled;
    (tY({ bypassSystemInputProcessing: t }), eY.setAudioInputBypassSystemProcessing(t), ny(e.location));
}
function n2(e) {
    n3(e.subsystem);
}
function n3(e) {
    e === ev.iA.AUTOMATIC ? (tY({ automaticAudioSubsystem: !0 }), n4()) : (tY({ automaticAudioSubsystem: !1 }), eY.setAudioSubsystem(e));
}
function n4() {
    eY.queueAudioSubsystem(ev.iA.EXPERIMENTAL);
}
function n5(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && tx(i, null), null != t || null == n)) {
        to = !1;
        return;
    }
    if (to) return;
    to = !0;
    let a = tR();
    (a.mute || a.deaf) &&
        (tY({
            deaf: !1,
            mute: !1
        }),
        eY.eachConnection(tD));
}
function n6(e) {
    let { application: t } = e;
    eK.add(t.id);
}
function n8(e) {
    let { application: t } = e;
    eK.delete(t.id);
}
function n7(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case 'audio':
                ((ez = !1), eY.eachConnection(tD));
                break;
            case 'video':
                tx(!1);
        }
}
function n9(e) {
    ((ez = e.enabled),
        e.unmute &&
            tY({
                mute: !1,
                deaf: !1
            }),
        eY.eachConnection(tD));
}
function re(e) {
    let { enabled: t } = e;
    (z.Z.requestPermission(eb.Eu.CAMERA), tx(t));
}
function rt(e) {
    let { sourceId: t, applicationName: n, quality: i } = e,
        a = A.Z.isDecoupledGameClippingEnabled(),
        s = A.Z.getSettings().decoupledClipsEnabled;
    if (!a || !s || null == I.Z) return;
    let l = null,
        c = null,
        u = en.Z.getPidFromDesktopSource(t);
    ({ soundshareId: l, soundshareSession: c } = t2(u));
    let d = {
        desktopSource: {
            id: t,
            sourcePid: u,
            soundshareId: l,
            soundshareSession: c
        },
        quality: i
    };
    (null != o && o.desktopSource.id !== d.desktopSource.id && (eY.setClipsSource(null), (0, ei.isWindows)() && null != o.desktopSource.soundshareId && T.pn(o.desktopSource.soundshareId)), null != l && t3(l, c), (o = d));
    let _ = tN(),
        f = tR().videoHook;
    eY.setClipsSource({
        desktopDescription: {
            id: o.desktopSource.id,
            soundshareId: o.desktopSource.soundshareId,
            useVideoHook: f,
            useGraphicsCapture: tU(),
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: tB(),
            videoHookStaleFrameTimeoutMs: ej,
            graphicsCaptureStaleFrameTimeoutMs: eU,
            hdrCaptureMode: _
        },
        quality: i,
        applicationName: n
    });
}
function rn(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((o = null), eY.setClipsSource(null));
}
function rr(e) {
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
                          frameRate: 30
                      },
            c = !1 === o ? null : en.Z.getPidFromDesktopSource(i);
        (ei.isPlatformEmbedded && !0 === o && (({ soundshareId: e, soundshareSession: r } = t2(c)), null != e && t3(e, r)),
            tL(s),
            tx(s === ev.Yn.STREAM && e5, {
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
        let e = null != (r = a.context) ? r : ev.Yn.DEFAULT,
            { videoDeviceGuid: t, audioDeviceGuid: n } = a.cameraSettings,
            o = e === ev.Yn.STREAM && e5,
            s =
                null != (i = a.qualityOptions)
                    ? i
                    : {
                          resolution: 720,
                          frameRate: 30
                      };
        tx(o, {
            cameraSource: {
                videoDeviceGuid: t,
                audioDeviceGuid: n
            },
            quality: {
                resolution: s.resolution,
                frameRate: s.frameRate
            }
        });
    } else tx(e5, null);
}
function ri(e) {
    let { section: t } = e;
    return (t === eg.oAB.VOICE && tz(), !1);
}
function ra() {
    return (eY.eachConnection(tk), !1);
}
function ro(e) {
    let { enabled: t } = e,
        n = tY({ openH264: t });
    (eY.setH264Enabled(n.hardwareEncoding || n.openH264),
        eY.eachConnection((e) => {
            var t;
            return e.setSoftwareH264(null == (t = n.openH264) || t);
        }));
}
function rs(e) {
    let { enabled: t } = e,
        n = tY({ aecDumpEnabled: t });
    eY.setAecDump(n.aecDumpEnabled);
}
function rl(e) {
    let { state: t } = e,
        n = D.Z.isEnabled();
    if (t === eg.$7l.BACKGROUND && e5 && !n) ((tt = !0), tx(!1));
    else {
        if (t !== eg.$7l.ACTIVE || !tt) return !1;
        ((tt = !1), tx(!0));
    }
    return !0;
}
function rc(e) {
    eY.eachConnection((t) => t.setBitRate(e.bitrate));
}
function ru() {
    if ((!e5 && null == a) || null != ef.Z.getRTCConnectionId()) return !1;
    tx(!1, null);
}
function rd() {
    return !!tm && ((tm = !1), !0);
}
function r_(e) {
    eY.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function rf(e) {
    let { settings: t } = e;
    eY.applyMediaFilterSettings(t).finally(() => {
        ((tg = !1), r.emitChange());
    });
}
function rp() {
    tg = !0;
}
function rh() {
    tg = !1;
}
function rm(e) {
    tS = e.enabled;
}
class rg extends (u = E.ZP.Store) {
    initialize() {
        (tj(),
            tH(),
            nX(),
            ns(),
            (tI = {
                [ev.AN.VIDEO]: eY.supports(ev.AN.VIDEO),
                [ev.AN.DESKTOP_CAPTURE]: eY.supports(ev.AN.DESKTOP_CAPTURE),
                [ev.AN.HYBRID_VIDEO]: eY.supports(ev.AN.HYBRID_VIDEO)
            }),
            this.waitFor(ec.default, ed.Z, e_.Z, ef.Z, L.ZP, z.Z.storage, J.Z, w.Z, A.Z));
    }
    supports(e) {
        return eY.supports(e);
    }
    supportsInApp(e) {
        return tI[e] || eY.supports(e);
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
        return nK();
    }
    isNoiseCancellationError() {
        return tm;
    }
    isAutomaticGainControlSupported() {
        return eY.supports(ev.AN.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !tF() && (eY.supports(ev.AN.LEGACY_AUDIO_SUBSYSTEM) || eY.supports(ev.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return eY.supports(ev.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && 'experimental' === eY.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return nK();
    }
    isAecDumpSupported() {
        return eY.supports(ev.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return eY.supports(ev.AN.VIDEO) && eY.supports(ev.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        let t = (null == (e = e_.Z.getChannel(th)) ? void 0 : e.type) === eg.d4z.GUILD_STAGE_VOICE,
            n = r.getHardwareEncoding();
        return !t && n && G.Z.simulcastEnabled();
    }
    getAecDump() {
        return tR().aecDumpEnabled;
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
        return tu;
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
        return !this.isEnabled() || tR(e).mute || !z.Z.didHavePermission(eb.Eu.AUDIO) || this.isSelfDeaf(e) || (e === ev.Yn.DEFAULT && e3);
    }
    shouldSkipMuteUnmuteSound() {
        return e8;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        e8 = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && ed.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return tS;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.DEFAULT;
        return !this.isSupported() || tR(e).deaf;
    }
    isVideoEnabled() {
        return e5 && tn;
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
        return e !== ec.default.getId() && (tR(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return eY.supports(ev.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ev.Yn.DEFAULT;
        return null != (t = tR(n).disabledLocalVideos[e]) && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ev.Yn.DEFAULT;
        return null != (t = tR(n).videoToggleStateMap[e]) ? t : eg.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ev.Yn.DEFAULT;
        return t === ev.Yn.DEFAULT && ty.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.DEFAULT;
        return e === ev.Yn.DEFAULT && ty.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tg;
    }
    isNativeAudioPermissionReady() {
        return tE;
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
            n = tR(t).localPans[e];
        return null != n ? n : ek;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ev.Yn.DEFAULT,
            n = t === ev.Yn.STREAM ? ev.Yh : ev.Qx,
            r = tR(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return tR().inputVolume;
    }
    getOutputVolume() {
        return tR().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.DEFAULT;
        return tR(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.DEFAULT;
        return tR(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return td;
    }
    getActiveVoiceFilterAppliedAt() {
        return t_;
    }
    getPreviousVoiceFilter() {
        return tf;
    }
    getPreviousVoiceFilterAppliedAt() {
        return tp;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return tR().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return tR().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            p().each(eW, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i }
                } = t;
                r === eg.pM4.PUSH_TO_TALK && eK.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return tQ(eJ, tR().inputDeviceId);
    }
    getOutputDeviceId() {
        return tQ(e$, tR().outputDeviceId);
    }
    getVideoDeviceId() {
        return tQ(e0, tR().videoDeviceId);
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
        let e = tR();
        return ed.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return tR().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return tR().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return tR().h265Enabled;
    }
    getLoopback() {
        return tv.size > 0;
    }
    getLoopbackReasons() {
        return tv;
    }
    getNoiseSuppression() {
        let e = tR();
        return ed.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tR();
        return ed.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return tR().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return tR().noiseCancellation;
    }
    getExperimentalEncoders() {
        return tR().experimentalEncoders;
    }
    getHardwareEncoding() {
        var e;
        return null == (e = tR().hardwareEncoding) || e;
    }
    getEnableSilenceWarning() {
        return tR().silenceWarning;
    }
    getDebugLogging() {
        return eY.getDebugLogging();
    }
    getQoS() {
        return tR().qos;
    }
    getAttenuation() {
        return tR().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return tR().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return tR().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return tV() && tR().automaticAudioSubsystem ? ev.iA.AUTOMATIC : eY.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return eY.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return tR().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eO._.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.DEFAULT;
        return tR(e);
    }
    getState() {
        return {
            settingsByContext: eW,
            inputDevices: eJ,
            outputDevices: e$,
            appSupported: tI,
            krispModuleLoaded: tl,
            krispVersion: s,
            krispSuppressionLevel: l,
            goLiveSource: a,
            goLiveContext: eX
        };
    }
    getInputDetected() {
        return tr;
    }
    getNoInputDetectedNotice() {
        return ta;
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
        return tR().videoHook;
    }
    supportsVideoHook() {
        return eY.supports(ev.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tR().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e);
    }
    supportsExperimentalSoundshare() {
        return eY.supports(ev.AN.EXPERIMENTAL_SOUNDSHARE) && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eE.I9);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = tR().useSystemScreensharePicker,
            n = (0, ei.isLinux)() || ((0, ei.isMac)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eE.jR));
        return e && (null != t ? t : n);
    }
    supportsSystemScreensharePicker() {
        return eY.supports(ev.AN.NATIVE_SCREENSHARE_PICKER);
    }
    getOpenH264() {
        return tR().openH264;
    }
    getEverSpeakingWhileMuted() {
        return e7;
    }
    getSpeakingWhileMuted() {
        return e9;
    }
    getKrispModelOverride() {
        return c;
    }
    getKrispModels() {
        return tc;
    }
    getKrispVadActivationThreshold() {
        var e;
        return null != (e = tR().modeOptions.vadKrispActivationThreshold) ? e : eM;
    }
    hasActiveCallKitCall() {
        return tA;
    }
    setHasActiveCallKitCall(e) {
        tA = e;
    }
    supportsScreenSoundshare() {
        return (0, ei.isMac)() ? eY.supports(ev.AN.SOUNDSHARE) && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eE.yG) && tB() : (0, ei.isWindows)() ? eY.supports(ev.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, ei.isLinux)() && eY.supports(ev.AN.SCREEN_SOUNDSHARE);
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.DEFAULT,
            t = this.supports(ev.AN.VIDEO)
                ? [
                      {
                          rid: '100',
                          type: e === ev.Yn.DEFAULT ? ev.Tr.VIDEO : ev.Tr.SCREEN,
                          quality: ev.y7
                      }
                  ]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === ev.Yn.DEFAULT || this.goLiveSimulcastEnabled()) &&
                t.push({
                    rid: '50',
                    type: e === ev.Yn.DEFAULT ? ev.Tr.VIDEO : ev.Tr.SCREEN,
                    quality: ev.LD
                }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: !1 };
        return ((0, ei.isWeb)() && (e.fetchDave = F.N.getCurrentConfig({ location: 'MediaEngineStore fetchAsyncResources' }).loadWasmModule), eY.fetchAsyncResources(e));
    }
    getSupportedSecureFramesProtocolVersion() {
        if ((0, ei.isWeb)()) {
            let { useWasmModule: e } = F.N.getCurrentConfig({ location: 'MediaEngineStore getSupportedSecureFramesProtocolVersion' });
            if (!e) return 0;
        }
        let e = eY.getSupportedSecureFramesProtocolVersion(),
            t = F.m.getCurrentConfig({ location: 'MediaEngineStore' });
        return (114 === e && (e = 1), t.canSupportDaveProtocol && e >= t.protocolVersionFloor ? e : 0);
    }
    hasClipsSource() {
        return null != o;
    }
    getGpuBrand() {
        return tT;
    }
}
function rE(e) {
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
eT(rg, 'displayName', 'MediaEngineStore');
let rb = (r = new rg(v.Z, {
    VOICE_CHANNEL_SELECT: n5,
    VOICE_STATE_UPDATES: t7,
    CONNECTION_OPEN: t4,
    CONNECTION_CLOSED: t6,
    RTC_CONNECTION_STATE: t8,
    AUDIO_SET_TEMPORARY_SELF_MUTE: t9,
    AUDIO_TOGGLE_SELF_MUTE: ne,
    AUDIO_SET_SELF_MUTE: nt,
    AUDIO_TOGGLE_SELF_DEAF: nr,
    AUDIO_TOGGLE_LOCAL_MUTE: ni,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: na,
    AUDIO_SET_LOCAL_VOLUME: nl,
    AUDIO_SET_LOCAL_PAN: nc,
    AUDIO_SET_MODE: nu,
    AUDIO_SET_INPUT_VOLUME: nd,
    AUDIO_SET_OUTPUT_VOLUME: n_,
    AUDIO_SET_INPUT_DEVICE: nf,
    AUDIO_SET_OUTPUT_DEVICE: np,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: nm,
    AUDIO_SET_ECHO_CANCELLATION: nO,
    AUDIO_SET_SIDECHAIN_COMPRESSION: nv,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nI,
    AUDIO_SET_LOOPBACK: nS,
    AUDIO_SET_NOISE_SUPPRESSION: nC,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nR,
    AUDIO_SET_NOISE_CANCELLATION: nP,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: nw,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: nM,
    AUDIO_SET_DEBUG_LOGGING: nk,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: nj,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: nD,
    MEDIA_ENGINE_SET_VIDEO_HOOK: nU,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: nG,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: nB,
    AUDIO_SET_ATTENUATION: nV,
    AUDIO_SET_QOS: nF,
    MEDIA_ENGINE_DEVICES: nE,
    AUDIO_VOLUME_CHANGE: nb,
    AUDIO_RESET: nZ,
    AUDIO_INPUT_DETECTED: nH,
    AUDIO_SET_SUBSYSTEM: n2,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: n1,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: n9,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: re,
    MEDIA_ENGINE_PERMISSION: n7,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rr,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nh,
    MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nL,
    MEDIA_ENGINE_INTERACTION_REQUIRED: ng,
    USER_SETTINGS_MODAL_INIT: ri,
    USER_SETTINGS_MODAL_SET_SECTION: ri,
    CERTIFIED_DEVICES_SET: ra,
    RPC_APP_CONNECTED: n6,
    RPC_APP_DISCONNECTED: n8,
    OVERLAY_INITIALIZE: t5,
    MEDIA_ENGINE_SET_OPEN_H264: ro,
    MEDIA_ENGINE_SET_HARDWARE_ENCODING: nx,
    APP_STATE_UPDATE: rl,
    SET_CHANNEL_BITRATE: rc,
    SET_VAD_PERMISSION: nY,
    SET_NATIVE_PERMISSION: nW,
    SET_CHANNEL_VIDEO_QUALITY_MODE: r_,
    MEDIA_ENGINE_SET_AEC_DUMP: rs,
    CHANNEL_DELETE: ru,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rd,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rf,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rp,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rh,
    USER_SETTINGS_PROTO_UPDATE: nn,
    CLIPS_INIT: rt,
    CLIPS_SETTINGS_UPDATE: rn,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rm,
    VOICE_FILTER_REQUEST_SWITCH: nJ,
    VOICE_FILTER_LOOPBACK_TOGGLE: nQ,
    VOICE_FILTER_APPLIED: n0,
    VOICE_FILTER_DOWNLOAD_FAILED: n$,
    VOICE_FILTER_APPLY_FAILED: n$
}));
