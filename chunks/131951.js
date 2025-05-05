let r, i, o, a;
n.d(t, { Z: () => ra }), n(388685), n(953529), n(457542), n(539854), n(642613), n(49124), n(337869);
var s,
    l = n(512722),
    c = n.n(l),
    u = n(392711),
    d = n.n(u),
    f = n(209739),
    _ = n.n(f),
    p = n(404097),
    h = n(442837),
    m = n(46973),
    g = n(433517),
    E = n(846519),
    b = n(570140),
    y = n(579806),
    O = n(887278),
    v = n(547727),
    I = n(435064),
    S = n(779618),
    T = n(710845),
    A = n(535911),
    N = n(458725),
    C = n(353926),
    P = n(646047),
    R = n(594190),
    w = n(502286),
    D = n(355552),
    L = n(294473),
    x = n(706629),
    k = n(166884),
    M = n(529558),
    j = n(111672),
    U = n(441167),
    G = n(580930),
    B = n(787517),
    F = n(338336),
    V = n(751571),
    Z = n(725380),
    H = n(581883),
    Y = n(743498),
    W = n(875527),
    K = n(626135),
    z = n(12647),
    q = n(70956),
    Q = n(358085),
    X = n(747268),
    J = n(960048),
    $ = n(998502),
    ee = n(13140),
    et = n(314897),
    en = n(967368),
    er = n(463395),
    ei = n(592125),
    eo = n(858340),
    ea = n(19780),
    es = n(704806),
    el = n(594174),
    ec = n(631768),
    eu = n(981631),
    ed = n(70722),
    ef = n(761274),
    e_ = n(526761),
    ep = n(65154),
    eh = n(388032);
function em(e, t, n) {
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
function eg(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                em(e, t, n[t]);
            });
    }
    return e;
}
function eE(e, t) {
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
function eb(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eE(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ey = new T.Z('MediaEngineStore'),
    eO = 'MediaEngineStore',
    ev = 4,
    eI = 1,
    eS = 1,
    eT = 1,
    eA = 1,
    eN = {
        left: 1,
        right: 1
    },
    eC = 500,
    eP = 5 * q.Z.Millis.SECOND,
    eR = -60,
    ew = 100,
    eD = '>=21.0.0',
    eL = 2 * q.Z.Millis.SECOND,
    ex = 0;
function ek() {
    return {
        mode: eu.pM4.VOICE_ACTIVITY,
        modeOptions: {
            threshold: eR,
            autoThreshold: Q.isPlatformEmbedded || __OVERLAY__,
            vadUseKrisp: !0,
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
        inputVolume: ep.Qx,
        outputVolume: ep.Qx,
        inputDeviceId: ep.w5,
        outputDeviceId: ep.w5,
        videoDeviceId: ep.w5,
        qos: !1,
        qosMigrated: !1,
        videoHook: eM.supports(ep.AN.VIDEO_HOOK),
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        openH264: !0,
        h265Enabled: !0,
        vadThrehsoldMigrated: !1,
        aecDumpEnabled: !1,
        sidechainCompression: !1,
        sidechainCompressionSettingVersion: 0,
        sidechainCompressionStrength: 50,
        automaticAudioSubsystem: !0
    };
}
let eM = (0, m.Mt)((0, m.jj)());
ey.enableNativeLogger(!0);
let ej = {},
    eU = new Set([ep.Yn.DEFAULT]),
    eG = eM.supports(ep.AN.AUTO_ENABLE),
    eB = !1,
    eF = ep.Yn.STREAM,
    eV = performance.now(),
    eZ = { [ep.w5]: tB('No Input Devices') },
    eH = { [ep.w5]: tB('No Output Devices') },
    eY = { [ep.w5]: tB('No Video Devices') },
    eW = !1,
    eK = !1,
    ez = !1,
    eq = !1,
    eQ = !1,
    eX = ep.Av,
    eJ = !1,
    e$ = !1,
    e0 = !1,
    e1 = new E.V7(),
    e2 = !1,
    e3 = !1,
    e4 = null,
    e5 = !1,
    e6 = !1,
    e8 = !1,
    e7 = !1,
    e9 = !1,
    te = null,
    tt = null,
    tn = null,
    tr = null,
    ti = null,
    to = !1,
    ta = !1,
    ts = !1;
V.Z.hasPermission(ef.Eu.AUDIO, { showAuthorizationError: !1 }), V.Z.hasPermission(ef.Eu.CAMERA, { showAuthorizationError: !1 });
let tl = !1,
    tc = new Set(),
    tu = tl,
    td = new Set(),
    tf = {},
    t_ = null,
    tp = !0,
    th = !1,
    tm = {},
    tg = 5 * q.Z.Millis.SECOND;
function tE() {
    var e, t;
    return null != (t = null == (e = el.default.getCurrentUser()) ? void 0 : e.isStaff()) && t ? 'always' : X.Z === p.R.CANARY ? 'permittedDevicesOnly' : 'never';
}
function tb() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT,
        t = ej[e];
    return null == t && ((t = ek()), (ej[e] = t)), t;
}
function ty(e) {
    let t = tb(e.context);
    e.setInputMode(t.mode, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: t.modeOptions.autoThreshold,
        vadUseKrisp: t.modeOptions.vadUseKrisp && nx(),
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        pttReleaseDelay: t.modeOptions.delay
    });
}
function tO(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Qx;
    return d().clamp(e, 0, t);
}
function tv(e) {
    let t = tb(e.context),
        n = !eG || t.mute || t.deaf;
    e.context === ep.Yn.DEFAULT ? (n = n || eW || eK || ez || !V.Z.didHavePermission(ef.Eu.AUDIO)) : e.context === ep.Yn.STREAM && (n = !0), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === ep.Yn.DEFAULT && v.Z.updateNativeMute();
}
function tI(e) {
    e !== eF && (null != o && eM.setGoLiveSource(null, eF), (eF = e));
}
function tS() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eQ,
        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
        s = o;
    if (((null == s ? void 0 : s.desktopSource) != null && s.desktopSource.id !== (null == a || null == (e = a.desktopSource) ? void 0 : e.id) && (null != s.desktopSource.soundshareId && (0, Q.isWindows)() && O.pn(s.desktopSource.soundshareId), eM.setGoLiveSource(null, eF)), (null == s ? void 0 : s.cameraSource) != null && (s.cameraSource.videoDeviceGuid !== (null == a || null == (t = a.cameraSource) ? void 0 : t.videoDeviceGuid) || s.cameraSource.audioDeviceGuid !== (null == a || null == (n = a.cameraSource) ? void 0 : n.audioDeviceGuid)) && eM.setGoLiveSource(null, eF), (eQ || i) && ((eX = (eQ = i) ? tV(eY, tb().videoDeviceId) : ep.Av), eM.setVideoInputDevice(eX)), (o = a), null != a)) {
        let e = {
            resolution: a.quality.resolution,
            frameRate: a.quality.frameRate
        };
        if (null != a.desktopSource) {
            let t = tE(),
                n = tb().videoHook,
                i = tP(),
                o = i ? (tR() && (0, B.R)('MediaEngineStore_updateVideo').enabled ? ed.zj : ed.ZM) : 0;
            eM.setGoLiveSource(
                {
                    desktopDescription: {
                        id: a.desktopSource.id,
                        soundshareId: a.desktopSource.soundshareId,
                        useVideoHook: n,
                        useGraphicsCapture: i,
                        useGraphicsCaptureApiLevel: o,
                        useLoopback: r.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: tw(),
                        videoHookStaleFrameTimeoutMs: eC,
                        graphicsCaptureStaleFrameTimeoutMs: eP,
                        hdrCaptureMode: t
                    },
                    quality: e
                },
                eF
            );
        }
        null != a.cameraSource &&
            eM.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: a.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: a.cameraSource.audioDeviceGuid
                    },
                    quality: e
                },
                eF
            );
    }
}
function tT(e, t, n, r) {
    var i;
    let o = null != (i = null == e ? void 0 : e.soundshareSession) ? i : '';
    null == tm[o] && (tm[o] = new Set());
    let a = null != t && !tm[o].has(t);
    a && tm[o].add(t),
        (null == t || a) &&
            K.default.track(
                eu.rMx.SOUNDSHARE_FAILED,
                eg(
                    {
                        soundshare_failure_code: t,
                        soundshare_failure_reason: n,
                        soundshare_failure_will_retry: r
                    },
                    (0, w.Z)(e)
                )
            );
}
function tA(e) {
    switch (e) {
        case ep.H3.CPU_OVERUSE:
            return N.Nk.NoiseCancellerCpuOveruse;
        case ep.H3.FAILED:
            return N.Nk.NoiseCancellerFailed;
        case ep.H3.VAD_CPU_OVERUSE:
            return N.Nk.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function tN(e) {
    let t = tb(),
        n = t.inputDeviceId;
    if ((e.setEchoCancellation(er.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(er.Z.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(er.Z.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), e.setVoiceFilterId(te), (0, Q.isWeb)())) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function tC() {
    eM.on(m.aB.Connection, (e) => {
        var t, n;
        ty(e), tv(e), tN(e);
        let i = tb();
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers), e.setQoS(i.qos), e.setExperimentalEncoders(i.experimentalEncoders), e.setHardwareH264(null == (t = i.hardwareEncoding) || t), e.setSoftwareH264(null == (n = i.openH264) || n);
        let a = ea.Z.getGuildId(),
            { muteBeforeProcessing: s, pttBeforeProcessing: l, skipEncode: c } = (null != a ? x.Z : L.Z).getCurrentConfig(eg({ location: 'setupMediaEngine' }, null != a && { guildId: a }), { autoTrackExposure: !0 });
        s && e.setExperimentFlag(ep.V8.MUTE_BEFORE_PROCESSING, !0), l && e.setExperimentFlag(ep.V8.PTT_BEFORE_PROCESSING, !0), c && e.setExperimentFlag(ep.V8.SKIP_ENCODE, !0);
        let u = !1,
            d = !0;
        if ((e.setExperimentFlag(ep.V8.RESET_DECODER_ON_ERRORS, !0), u && e.setExperimentFlag(ep.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0), d && e.setExperimentFlag(ep.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0), e.context === ep.Yn.STREAM)) {
            let { simulcastEnabled: t, lqStreamBitrate: n } = k.Z.getConfig();
            e.configureGoLiveSimulcast(t, n);
        }
        (0, Q.isWindows)() ? ((null == t_ ? void 0 : t_.startsWith('NVIDIA')) || (null == t_ ? void 0 : t_.startsWith('AMD')) ? e.setExperimentFlag(ep.V8.SIGNAL_AV1, !0) : e.setExperimentFlag(ep.V8.SIGNAL_AV1_DECODE, !0)) : ((0, Q.isMac)() || (0, Q.isLinux)()) && e.setExperimentFlag(ep.V8.SIGNAL_AV1_DECODE, !0), (0, Q.isWindows)() && e.setExperimentFlag(ep.V8.SIGNAL_AV1_HARDWARE_DECODE, !0), eM.setHasFullbandPerformance((0, A.Z)());
        let f = (0, D.D)('setupMediaEngine').enabled;
        if ((e.setRemoteAudioHistory(1000 * !!f), (0, S.Z)(r))) {
            let t = I.Z.getSettings();
            e.setExperimentFlag(ep.V8.STREAMER_CLIP, t.clipsEnabled);
            let { enableViewerClipping: n } = U.Z.getCurrentConfig({ location: 'f627ab_15' }, { autoTrackExposure: !1 });
            e.setViewerSideClip(n), e.setClipsKeyFrameInterval(ep.ux);
        }
        for (let t of ((i = tb(e.context)), e.setPostponeDecodeLevel(ew), Object.keys(i.localMutes))) t !== et.default.getId() && e.setLocalMute(t, i.localMutes[t]);
        for (let t of Object.keys(i.localVolumes)) t !== et.default.getId() && e.setLocalVolume(t, i.localVolumes[t]);
        for (let t of Object.keys(i.localPans)) {
            let n = i.localPans[t];
            e.setLocalPan(t, n.left, n.right);
        }
        for (let t of Object.keys(i.disabledLocalVideos)) e.setLocalVideoDisabled(t, i.disabledLocalVideos[t]);
        e.on(m.Sh.Speaking, (t, n) => {
            b.Z.dispatch({
                type: 'SPEAKING',
                context: e.context,
                userId: t,
                speakingFlags: n
            });
        }),
            e.context === ep.Yn.DEFAULT &&
                ((e$ = !1),
                (e0 = !1),
                e.on(m.Sh.SpeakingWhileMuted, () => {
                    (e$ = !0),
                        (e0 = !0),
                        r.emitChange(),
                        e1.stop(),
                        e1.start(eL, () => {
                            (e0 = !1), r.emitChange();
                        });
                })),
            e.on(m.Sh.DesktopSourceEnd, () => {
                b.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                    settings: { context: e.context }
                });
            }),
            e.on(m.Sh.SoundshareAttached, () => {
                (null == o ? void 0 : o.desktopSource) != null && K.default.track(eu.rMx.SOUNDSHARE_ATTACHED, (0, w.Z)(null == o ? void 0 : o.desktopSource));
            }),
            e.on(m.Sh.SoundshareFailed, (e) => {
                let { failureCode: t, failureReason: n, willRetry: r } = e;
                tT(null == o ? void 0 : o.desktopSource, t, n, r);
            }),
            e.on(m.Sh.SoundshareSpeaking, () => {
                (null == o ? void 0 : o.desktopSource) != null && (K.default.track(eu.rMx.SOUNDSHARE_TRANSMITTING, (0, w.Z)(null == o ? void 0 : o.desktopSource)), null != eo.Z.getHookError(eu.K3D.SOUND) && b.Z.wait(() => b.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
            });
        let _ = new E.V7();
        e.on(m.Sh.SoundshareTrace, (e) => {
            switch (e.type) {
                case 'soundshare_attach_requested':
                    _.start(tg, () => {
                        b.Z.dispatch({
                            type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
                            errorMessage: 'Sound Hook Failed'
                        });
                    });
                    break;
                case 'soundshare_recv_failed':
                    let t = e.reason,
                        n = e.code,
                        r = e.retry;
                    (null == o ? void 0 : o.desktopSource) != null &&
                        (tT(null == o ? void 0 : o.desktopSource, n, t, r),
                        r ||
                            (_.stop(),
                            b.Z.wait(() =>
                                b.Z.dispatch({
                                    type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
                                    errorMessage: t,
                                    errorCode: n
                                })
                            )));
                    break;
                case 'soundshare_state_transition':
                    4 === e.newState && (_.stop(), b.Z.wait(() => b.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
            }
        }),
            e.on(m.Sh.InteractionRequired, (e) => {
                b.Z.dispatch({
                    type: 'MEDIA_ENGINE_INTERACTION_REQUIRED',
                    required: e
                });
            }),
            e.on(m.Sh.VideoHookInitialize, (e, t, n, r, i, a) => {
                (null == o ? void 0 : o.desktopSource) != null &&
                    K.default.track(
                        eu.rMx.VIDEOHOOK_INITIALIZED,
                        eg(
                            {
                                backend: e,
                                format: t,
                                framebuffer_format: n,
                                sample_count: r,
                                success: i,
                                reinitialization: a
                            },
                            (0, w.Z)(null == o ? void 0 : o.desktopSource)
                        )
                    );
            }),
            e.on(m.Sh.NoiseCancellationError, (e) => {
                ey.warn('noisecancellererror event: '.concat(e)),
                    (0, N.kr)({
                        type: N.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tA(e)
                    }),
                    (to = !0),
                    K.default.track(eu.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    b.Z.dispatch({
                        type: 'AUDIO_SET_NOISE_SUPPRESSION',
                        enabled: !0
                    }),
                    b.Z.dispatch({
                        type: 'AUDIO_SET_NOISE_CANCELLATION',
                        enabled: !1
                    }),
                    b.Z.dispatch({
                        type: 'MEDIA_ENGINE_NOISE_CANCELLATION_ERROR',
                        code: e
                    });
            }),
            e.on(m.Sh.VoiceActivityDetectorError, (e) => {
                ey.warn('voiceactivitydetectorerror event: '.concat(e)),
                    (0, N.kr)({
                        type: N.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tA(e)
                    }),
                    K.default.track(eu.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    b.Z.dispatch({
                        type: 'AUDIO_SET_MODE',
                        context: ep.Yn.DEFAULT,
                        mode: eu.pM4.VOICE_ACTIVITY,
                        options: eb(eg({}, tb(ep.Yn.DEFAULT).modeOptions), { vadUseKrisp: !1 })
                    }),
                    b.Z.dispatch({
                        type: 'MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR',
                        code: e
                    });
            }),
            e.on(m.Sh.SdpError, (e, t, n, r) => {
                K.default.track(eu.rMx.SDP_ERROR, {
                    operation: e,
                    error: t,
                    type: n,
                    sdp: r
                });
            }),
            e.on(m.Sh.VideoState, (t) => {
                b.Z.dispatch({
                    type: 'MEDIA_ENGINE_VIDEO_STATE_CHANGED',
                    videoState: t,
                    context: e.context
                });
            }),
            e.on(m.Sh.Destroy, () => {
                _.stop();
            }),
            e.setBitRate(en.Z.bitrate),
            e.applyVideoQualityMode(ec.Z.mode);
    }),
        eM.on(m.aB.DeviceChange, (e, t, n) => {
            b.Z.dispatch({
                type: 'MEDIA_ENGINE_DEVICES',
                inputDevices: e,
                outputDevices: t,
                videoDevices: n
            });
        }),
        eM.on(m.aB.VolumeChange, (e, t) => {
            b.Z.dispatch({
                type: 'AUDIO_VOLUME_CHANGE',
                inputVolume: e,
                outputVolume: t
            });
        }),
        eM.on(m.aB.DesktopSourceEnd, () => {
            b.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                settings: null
            });
        }),
        eM.on(m.aB.AudioPermission, (e) => {
            (ts = !0),
                b.Z.dispatch({
                    type: 'MEDIA_ENGINE_PERMISSION',
                    kind: 'audio',
                    granted: e
                });
        }),
        eM.on(m.aB.VideoPermission, (e) => {
            b.Z.dispatch({
                type: 'MEDIA_ENGINE_PERMISSION',
                kind: 'video',
                granted: e
            });
        }),
        eM.on(m.aB.WatchdogTimeout, async () => {
            let e;
            try {
                await z.Z.submitLiveCrashReport({ message: { message: 'Voice Watchdog Timeout' } });
            } catch (t) {
                'number' == typeof t.status && (e = t.status);
            }
            ey.warn('Watchdog timeout, report submission status: '.concat(null != e ? e : 200)), K.default.track(eu.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        eM.on(m.aB.VideoInputInitialized, (e) => {
            K.default.track(eu.rMx.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * q.Z.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: ea.Z.getMediaSessionId(),
                rtc_connection_id: ea.Z.getRTCConnectionId()
            });
        }),
        eM.on(m.aB.AudioInputInitialized, (e) => {
            K.default.track(eu.rMx.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * q.Z.Millis.SECOND),
                rtc_connection_id: ea.Z.getRTCConnectionId()
            });
        }),
        eM.on(m.aB.ClipsRecordingRestartNeeded, () => {
            b.Z.dispatch({ type: 'CLIPS_RESTART' });
        }),
        eM.on(m.aB.ClipsInitFailure, (e, t) => {
            b.Z.wait(() => {
                b.Z.dispatch({
                    type: 'CLIPS_INIT_FAILURE',
                    errMsg: e,
                    applicationName: t
                });
            });
        }),
        eM.on(m.aB.ClipsRecordingEnded, (e, t) => {
            var n, r;
            (null == a || null == (n = a.desktopSource) ? void 0 : n.id) === e && (null != t && (null == o || null == (r = o.desktopSource) ? void 0 : r.soundshareId) !== t && O.pn(t), (a = null));
        }),
        eM.on(m.aB.NativeScreenSharePickerUpdate, (e, t) => {
            b.Z.dispatch({
                type: 'NATIVE_SCREEN_SHARE_PICKER_UPDATE',
                existing: e,
                content: t
            });
        }),
        eM.on(m.aB.NativeScreenSharePickerCancel, (e) => {
            b.Z.dispatch({
                type: 'NATIVE_SCREEN_SHARE_PICKER_CANCEL',
                existing: e
            });
        }),
        eM.on(m.aB.NativeScreenSharePickerError, (e) => {
            b.Z.dispatch({
                type: 'NATIVE_SCREEN_SHARE_PICKER_ERROR',
                error: e
            });
        }),
        eM.on(m.aB.AudioDeviceModuleError, (e, t, n) => {
            K.default.track(eu.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                audio_device_module: e,
                code: t,
                device_name: n
            });
        }),
        eM.on(m.aB.VideoCodecError, (e) => {
            let t = 'encode' === e.mode ? N.u.VIDEO_ENCODE_ERROR : N.u.VIDEO_DECODE_ERROR,
                n = {
                    videoCodec: e.codecStandard,
                    errorMessage: e.message
                };
            (0, N.kr)(t === N.u.VIDEO_ENCODE_ERROR ? eb(eg({ type: t }, n), { videoEncoder: e.implName }) : eb(eg({ type: t }, n), { videoDecoder: e.implName }));
        }),
        eM.on(m.aB.ConnectionStats, (e) => {
            b.Z.dispatch({
                type: 'MEDIA_ENGINE_CONNECTION_STATS',
                connectionStats: e.map((e) => {
                    let { stats: t, connection: n } = e;
                    return {
                        stats: t,
                        mediaEngineConnectionId: n.mediaEngineConnectionId,
                        version: ex++,
                        context: n.context
                    };
                })
            });
        }),
        eM.on(m.aB.VoiceQueueMetrics, (e) => {
            let t = ro(e);
            null !== t && K.default.track(eu.rMx.VOICE_QUEUE_METRICS, t);
        }),
        eM.setOnVideoContainerResized((e, t, n) => {
            b.Z.wait(() =>
                b.Z.dispatch({
                    type: 'VIDEO_SIZE_UPDATE',
                    streamId: e,
                    width: t,
                    height: n
                })
            );
        }),
        tx.reset(),
        (0, es.q)().then((e) => {
            null != e && (t_ = e.gpu_brand);
        });
}
function tP() {
    return (0, Q.isWindows)() && _().satisfies(null === y.Z || void 0 === y.Z ? void 0 : y.Z.os.release, ed.c5);
}
function tR() {
    return (0, Q.isWindows)() && _().satisfies(null === y.Z || void 0 === y.Z ? void 0 : y.Z.os.release, ed.sN);
}
function tw() {
    return (0, Q.isMac)() && eM.supports(ep.AN.SCREEN_CAPTURE_KIT) && _().satisfies(null === y.Z || void 0 === y.Z ? void 0 : y.Z.os.release, ed.C7);
}
function tD() {
    return (0, Q.isWindows)() && eM.supports(ep.AN.AUTOMATIC_AUDIO_SUBSYSTEM) && eM.supports(ep.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH);
}
function tL() {
    return eM.supports(ep.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
let tx = new (class {
    start() {
        this.started || ((this.started = !0), eM.on(m.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            eM.removeListener(m.aB.Silence, this.handleSilence),
            b.Z.dispatch({
                type: 'AUDIO_INPUT_DETECTED',
                inputDetected: null
            }));
    }
    update() {
        let e = tb();
        !e5 && ea.Z.getState() === eu.hes.RTC_CONNECTED && e.mode === eu.pM4.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop();
    }
    reset() {
        this.stop(), this.update();
    }
    constructor() {
        em(this, 'stateChangeTimeout', void 0),
            em(this, 'noVoiceTimeout', 5000),
            em(this, 'voiceTimeout', 1500),
            em(this, 'started', !1),
            em(this, 'handleSilence', (e) => {
                let t = !e;
                null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout),
                    (this.stateChangeTimeout = setTimeout(
                        () => {
                            (this.stateChangeTimeout = null),
                                this.started &&
                                    (b.Z.dispatch({
                                        type: 'AUDIO_INPUT_DETECTED',
                                        inputDetected: t
                                    }),
                                    e && (e6 = !0));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout
                    ));
            });
    }
})();
function tk() {
    var e;
    let t = g.K.get('audio');
    null != t && (g.K.set(eO, { [ep.Yn.DEFAULT]: t }), g.K.remove('audio')),
        (ej = null != (e = g.K.get(eO)) ? e : {}),
        d().each(ej, (e) => {
            if ((d().defaultsDeep(e, ek()), null != e.modeOptions && 'string' == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, ee.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== ev && ((e.vadUseKrispSettingVersion = ev), (e.modeOptions.vadUseKrisp = !0)), e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)), !e.vadThrehsoldMigrated)) {
                var t;
                (e.vadThrehsoldMigrated = !0), (null == (t = e.modeOptions) ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = eR);
            }
            (0, Q.isWeb)() ? e.ncUseKrispjsSettingVersion !== eS && ((e.ncUseKrispjsSettingVersion = eS), (e.noiseSuppression = !1), (e.noiseCancellation = !0)) : e.ncUseKrispSettingVersion !== eI && ((e.ncUseKrispSettingVersion = eI), (e.noiseSuppression = !1), (e.noiseCancellation = !0)), e.hardwareEnabledVersion !== eT && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = eT)), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
        }),
        tU();
}
function tM(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = tb(t);
    return Object.assign(r, e), !__OVERLAY__ && n && g.K.set(eO, ej), r;
}
function tj() {
    g.K.remove(eO), location.reload();
}
function tU() {
    var e, t, n;
    let r = tb();
    eM.setAudioInputDevice(r.inputDeviceId), eM.setAudioOutputDevice(r.outputDeviceId), tS(), eM.setInputVolume(r.inputVolume), eM.setOutputVolume(r.outputVolume), eM.setH264Enabled(null == (e = r.hardwareEncoding) || e || r.openH264), eM.setAv1Enabled(null == (t = r.hardwareEncoding) || t), eM.setH265Enabled(null == (n = r.hardwareEncoding) || n), eM.setAecDump(r.aecDumpEnabled), eM.setSidechainCompression(r.sidechainCompression), eM.setSidechainCompressionStrength(r.sidechainCompressionStrength), eM.setAudioInputBypassSystemProcessing(r.bypassSystemInputProcessing);
}
function tG() {
    eG ||
        eM.enable().then(() =>
            b.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
                enabled: !0,
                unmute: !1
            })
        );
}
function tB(e) {
    return {
        id: ep.w5,
        index: 0,
        name: e,
        disabled: !0,
        hardwareId: void 0,
        containerId: void 0
    };
}
function tF(e, t) {
    if (0 === e.length) {
        let e = tB(t);
        return { [e.id]: e };
    }
    return d()(e)
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
function tV(e, t) {
    var n;
    let r = null != (n = e[t]) ? n : d()(e).values().first();
    return null != r ? r.id : t;
}
function tZ(e) {
    let t = eZ;
    if (((eZ = tF(e, eh.intl.string(eh.t['/QIjDA']))), !d().isEqual(eZ, t))) {
        let e = tb(),
            t = tV(eZ, e.inputDeviceId);
        eM.setAudioInputDevice(t);
    }
}
function tH(e) {
    let t = eH;
    if (((eH = tF(e, eh.intl.string(eh.t.xlUg0t))), !d().isEqual(eH, t))) {
        let e = tb(),
            t = tV(eH, e.outputDeviceId);
        eM.setAudioOutputDevice(t);
    }
}
function tY(e) {
    e3 = e.length > 0;
    let t = eY;
    if (((eY = tF(e, eh.intl.string(eh.t.WKWARU))), eQ && !d().isEqual(eY, t))) {
        var n;
        let e = void 0 !== eY[eX],
            r = eX === ep.w5 && (null == (n = t[ep.w5]) ? void 0 : n.disabled);
        tS(e || r);
    }
}
function tW() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        r =
            null != (e = H.Z.settings.audioContextSettings)
                ? e
                : {
                      user: {},
                      stream: {}
                  };
    for (let e of Object.keys(r)) {
        let i = e === e_.u0.USER ? ep.Yn.DEFAULT : ep.Yn.STREAM,
            o = i === ep.Yn.STREAM ? ep.Yh : ep.Qx,
            a = null != (t = r[e]) ? t : {},
            { localMutes: s, localVolumes: l } = tb(i);
        for (let [e, t] of Object.entries(a))
            null == (0, Z.Ky)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== o ? (l[e] = t.volume) : delete l[e],
                eM.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (n)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == a[e] &&
                    (delete s[e],
                    delete l[e],
                    eM.eachConnection((t) => {
                        t.setLocalVolume(e, o), t.setLocalMute(e, !1);
                    }, i));
        tM(
            {
                localMutes: s,
                localVolumes: l
            },
            i
        );
    }
}
function tK(e) {
    if (null == r)
        return (
            ey.info('Error: trying to get soundshare id before MediaEngineStore is instantiated.'),
            {
                soundshareId: null,
                soundshareSession: ''
            }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : z.Z.getAudioPid(e),
            n = '';
        return (
            null != t && (n = z.Z.generateSessionFromPid(t)),
            {
                soundshareId: t,
                soundshareSession: n
            }
        );
    }
}
function tz(e, t) {
    (0, Q.isWindows)() &&
        O.YT(e, { soundshare_session: t }).then((t) => {
            null == t ||
                R.ZP.shouldContinueWithoutElevatedProcessForPID(e) ||
                b.Z.wait(() => {
                    b.Z.dispatch({
                        type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
                        errorMessage: t
                    });
                });
        });
}
function tq(e) {
    (i = e.sessionId),
        (eW = !1),
        (eq = !1),
        (0, Q.isWeb)() ||
            (j.Z.subscribe({ location: 'handleConnectionOpen' }, (e) => {
                let t = tb();
                !e.sidechainAvailable && t.sidechainCompression ? (tM({ sidechainCompressionSettingVersion: 0 }), np(!1)) : e.sidechainAvailable && t.sidechainCompressionSettingVersion < eA && (tM({ sidechainCompressionSettingVersion: eA }), np(e.sidechainEnabled));
            }),
            nm());
    let t = tb();
    tD() && (tL() ? nH(ep.iA.AUTOMATIC) : t.automaticAudioSubsystem && nY()),
        (0, W.wt)({
            location: 'MediaEngineStore',
            autoTrackExposure: !1
        }) &&
            null !== t.mostRecentlyRequestedVoiceFilter &&
            (0, Y.J_)(),
        tW();
}
function tQ(e) {
    let { mediaEngineState: t } = e;
    (ej = t.settingsByContext), (eZ = t.inputDevices), (eH = t.outputDevices), (tf = t.appSupported), (e9 = t.krispModuleLoaded), (eF = t.goLiveContext);
}
function tX() {
    i = null;
}
function tJ(e) {
    switch (e.state) {
        case eu.hes.CONNECTING:
            tG();
            break;
        case eu.hes.RTC_CONNECTING:
            (e5 = !1), (e6 = !1);
            break;
        case eu.hes.RTC_CONNECTED:
            tS();
            break;
        case eu.hes.DISCONNECTED:
            t8(), t7();
    }
    tx.update();
}
function t$(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => (i === t.sessionId ? ((eW = t.mute || t.suppress), (eq = t.deaf), eM.eachConnection(tv), tS((null == t.guildId || null == t.channelId || null == ti || ti === t.channelId) && eQ), (ti = t.channelId), !0) : (__OVERLAY__ || t.userId !== et.default.getId() || null != ea.Z.getChannelId() || tS(!1, null), e)), !1);
}
function t0(e) {
    let { mute: t } = e;
    (eK = t), eM.eachConnection(tv);
}
function t1(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = tb(t);
    if (t === ep.Yn.DEFAULT && (V.Z.requestPermission(ef.Eu.AUDIO), ez)) return !1;
    (r = !i && !r) || (i = !1),
        n || (eJ = !0),
        tM(
            {
                mute: r,
                deaf: i
            },
            t
        ),
        eM.eachConnection(tv);
}
function t2(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    tM({ mute: n }, t), r || (eJ = !0), eM.eachConnection(tv);
}
function t3(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r
    } = e;
    if (t !== e_.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    tW(!0);
}
function t4(e) {
    let { context: t } = e;
    tM({ deaf: !tb(t).deaf }, t), eM.eachConnection(tv);
}
function t5(e) {
    let { context: t, userId: n } = e;
    if (n === et.default.getId()) return;
    let { localMutes: r } = tb(t);
    r[n] ? delete r[n] : (r[n] = !0), tM({ localMutes: r }, t), eM.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function t6(e) {
    var t, n, r, i, o, a, s;
    let { context: l, userId: u, videoToggleState: d, persist: f, isAutomatic: _ } = e;
    c()(!(f && _), 'These are not allowed to both be true.');
    let p = d === eu.ZUi.DISABLED,
        { disabledLocalVideos: h } = tb(l),
        m = null != (t = h[u]) && t,
        g = tc.has(u),
        E = d === eu.ZUi.AUTO_ENABLED || d === eu.ZUi.MANUAL_ENABLED;
    ey.info('disableVideo='.concat(p, ' currentlyDisabled=').concat(m, ' currentlyAutoDisabled=').concat(g, ', isVideoShown=').concat(E)), c()(!(g && !m), 'If you are auto-disabled, then you are also disabled.');
    let b = p !== m,
        y = l === ep.Yn.DEFAULT,
        O = _ && b && y,
        v = f && b && y;
    ey.info('changed='.concat(b, ' isDefaultContext=').concat(y, ' isUpdateCausedByVideoHealthManager=').concat(O, ' isManualToggleByUser=').concat(v));
    let { videoToggleStateMap: I } = tb(l);
    if ((I[u] === eu.ZUi.AUTO_PROBING && d === eu.ZUi.AUTO_ENABLED && (0, F.Z)(u, p ? ep.fC.AUTO_DISABLE : ep.fC.AUTO_ENABLE, E), (I[u] = d), tM({ videoToggleStateMap: I }, l, f), d === eu.ZUi.AUTO_PROBING ? null == (n = ea.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(u, !0) : null == (r = ea.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(u, !1), tu || (ey.info('isAutoDisableAllowed='.concat(tu, ' - disabling VideoHealthManager')), null == (o = ea.Z.getRTCConnection()) || null == (i = o.getVideoHealthManager()) || i.disable()), O)) {
        if ((!p && !g) || (p && !tu)) return;
        (0, F.Z)(u, p ? ep.fC.AUTO_DISABLE : ep.fC.AUTO_ENABLE, E), p ? tc.add(u) : tc.delete(u);
    } else v && (g && !p ? (ey.info('disallowing auto-disable for this session because of manual override by user'), (tu = !1), null == (s = ea.Z.getRTCConnection()) || null == (a = s.getVideoHealthManager()) || a.disable(), (0, F.Z)(u, ep.fC.MANUAL_REENABLE, E)) : (0, F.Z)(u, p ? ep.fC.MANUAL_DISABLE : ep.fC.MANUAL_ENABLE, E));
    y && !p && tc.delete(u),
        p ? (h[u] = !0) : delete h[u],
        tM({ disabledLocalVideos: h }, l, f),
        eM.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(u, null != (t = h[u]) && t);
        }, l);
}
function t8() {
    if (0 === tc.size) return;
    let e = ep.Yn.DEFAULT,
        { disabledLocalVideos: t } = tb(e);
    tc.forEach((n) => {
        c()(t[n], 'If you are auto-disabled, then you are also disabled.'), delete t[n], eM.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tc.clear(),
        tM({ disabledLocalVideos: t }, e, !1);
}
function t7() {
    let e = ep.Yn.DEFAULT,
        { videoToggleStateMap: t } = tb(e);
    for (let [e, n] of Object.entries(t)) n === eu.ZUi.AUTO_PROBING && delete t[e];
    tM({ videoToggleStateMap: t }, e, !1);
}
function t9(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === et.default.getId()) return;
    let i = t === ep.Yn.STREAM ? ep.Yh : ep.Qx,
        { localVolumes: o } = tb(t);
    r === i ? delete o[n] : (o[n] = r), tM({ localVolumes: o }, t), eM.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function ne(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: o } = tb(t);
    (o[n] = {
        left: r,
        right: i
    }),
        tM({ localPans: o }, t),
        eM.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function nt(e) {
    let { context: t, mode: n, options: r } = e;
    tM(
        {
            mode: n,
            modeOptions: r
        },
        t
    ),
        eM.eachConnection(ty),
        tx.update();
}
function nn(e) {
    let { volume: t } = e;
    tM({ inputVolume: tO(t) }), eM.setInputVolume(t);
}
function nr(e) {
    let { volume: t } = e;
    tM({ outputVolume: t }), eM.setOutputVolume(t);
}
function ni(e) {
    let { id: t } = e;
    (t = tV(eZ, t)), (eV = performance.now()), tM({ inputDeviceId: t }), eM.setAudioInputDevice(t);
}
function no(e) {
    let { id: t } = e;
    tM({ outputDeviceId: (t = tV(eH, t)) }), eM.setAudioOutputDevice(t);
}
function na(e) {
    let { id: t } = e;
    tM({ videoDeviceId: (t = tV(eY, t)) }), tS();
}
function ns(e) {
    return eB !== e.required && ((eB = e.required), e.required || eM.interact(), !0);
}
function nl(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    tZ(t), tH(n), tY(r);
}
function nc(e) {
    let { inputVolume: t, outputVolume: n } = e;
    tM({
        inputVolume: tO(t),
        outputVolume: n
    });
}
function nu(e) {
    var t;
    let n = tb(),
        r = eM.getAudioSubsystem(),
        i = eM.getAudioLayer(),
        o = tV(eZ, n.inputDeviceId),
        a = null == (t = eZ[o]) ? void 0 : t.name;
    K.default.track(eu.rMx.VOICE_PROCESSING, {
        echo_cancellation: n.echoCancellation,
        noise_cancellation: n.noiseCancellation,
        noise_suppression: n.noiseSuppression,
        automatic_gain_control: n.automaticGainControl,
        location: e,
        bypass_system_input_processing: n.bypassSystemInputProcessing,
        audio_subsystem: r,
        audio_layer: i,
        input_device: a
    });
}
function nd(e) {
    let t = tM({ echoCancellation: e.enabled });
    eM.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), ng(), nu(e.location);
}
function nf(e) {
    np(e.enabled);
}
function n_(e) {
    let t = tM({ sidechainCompressionStrength: e.strength });
    eM.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function np(e) {
    let t = tM({ sidechainCompression: e });
    eM.setSidechainCompression(t.sidechainCompression);
}
function nh(e) {
    let { enabled: t, loopbackReason: n } = e,
        r = td.size > 0;
    return t ? td.add(n) : td.delete(n), nm(), td.size > 0 !== r && ng();
}
function nm() {
    let { voiceFiltersPreProcessMute: e } = G.Z.getCurrentConfig({ location: 'setMaybePreprocessMute' }, { autoTrackExposure: !0 }),
        t = e && !td.has('voice_filter_preview') && !td.has('mic_test');
    eM.setMaybePreprocessMute(t);
}
function ng() {
    let e = tb(),
        t = td.size > 0,
        n = e.inputDeviceId,
        r = er.Z.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        o = er.Z.hasNoiseSuppression(n) || e.noiseSuppression,
        a = er.Z.hasAutomaticGainControl(n) || e.automaticGainControl,
        s = e.noiseCancellation,
        l = null !== te;
    eM.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: o,
        automaticGainControl: a,
        noiseCancellation: s,
        voiceFilters: l
    });
}
function nE(e) {
    let t = tM({ noiseSuppression: e.enabled });
    eM.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), ng(), nu(e.location);
}
function nb(e) {
    let t = tM({ automaticGainControl: e.enabled });
    eM.eachConnection((e) => e.setAutomaticGainControl(t.automaticGainControl)), ng(), nu(e.location);
}
function ny(e) {
    let t = tM({ noiseCancellation: e.enabled });
    eM.eachConnection((e) => e.setNoiseCancellation(t.noiseCancellation)), ng(), nu(e.location);
}
function nO(e) {
    let t = tM({ experimentalEncoders: e.enabled });
    eM.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
}
function nv(e) {
    var t, n;
    let { enabled: r } = e,
        i = tM({ hardwareEncoding: r });
    eM.eachConnection((e) => {
        var t;
        return e.setHardwareH264(null == (t = i.hardwareEncoding) || t);
    }),
        eM.setH264Enabled(i.hardwareEncoding || i.openH264),
        eM.setAv1Enabled(null == (t = i.hardwareEncoding) || t),
        eM.setH265Enabled(null == (n = i.hardwareEncoding) || n);
}
function nI(e) {
    tM({ silenceWarning: e.enabled }), tx.update();
}
function nS(e) {
    eM.setDebugLogging(e.enabled);
}
function nT(e) {
    tM({ videoHook: e.enabled });
}
function nA(e) {
    tM({ experimentalSoundshare2: e.enabled });
}
function nN(e) {
    let { enabled: t } = e;
    tM({ useSystemScreensharePicker: t });
}
function nC(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = tM({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r
        });
    eM.eachConnection((e) => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers));
}
function nP(e) {
    let { enabled: t } = e;
    tM({ qos: t }), eM.eachConnection((e) => e.setQoS(t));
}
function nR() {
    tj();
}
function nw(e) {
    let { inputDetected: t } = e;
    (e4 = t), !e5 && e4 && ((e5 = !0), tx.update());
}
function nD(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === ez) return !1;
    (ez = n), eM.eachConnection(tv);
}
function nL(e) {
    let { state: t, permissionType: n } = e,
        r = t === ef.PQ.ACCEPTED;
    switch (n) {
        case ef.Eu.AUDIO:
            (ts = !0), eM.eachConnection(tv);
            break;
        case ef.Eu.CAMERA:
            !r && eQ && tS(!1);
            break;
        default:
            return !1;
    }
}
function nx() {
    return e9 || !1;
}
async function nk() {
    try {
        await $.ZP.ensureModule('discord_krisp'), $.ZP.requireModule('discord_krisp'), (e9 = !0), r.emitChange();
    } catch (t) {
        ey.warn('Failed to load Krisp module: '.concat(t.message)), J.Z.captureException(t);
        let e = ep.H3.INITIALIZED;
        if (t.message.includes(': ')) {
            let n = parseInt(t.message.substring(t.message.indexOf(': ') + 1));
            e = isNaN(n) || 0 === n ? ep.H3.INITIALIZED : n;
        }
        K.default.track(eu.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), tM({ noiseCancellation: !1 });
    } finally {
        e7 = !1;
    }
}
function nM() {
    return (0, Q.isWindows)() || (0, Q.isLinux)() || ((0, Q.isMac)() && _().satisfies(null === y.Z || void 0 === y.Z ? void 0 : y.Z.os.release, eD));
}
function nj() {
    !nM() || __OVERLAY__ || e7 || e9 ? ((0, Q.isWeb)() && eM.supports(ep.AN.NOISE_CANCELLATION) ? ((e9 = !0), r.emitChange()) : (0, Q.isWeb)() && tM({ noiseCancellation: !1 })) : ((e7 = !0), nk());
}
function nU(e) {
    let { enabled: t } = e;
    K.default.track(eu.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != te ? te : null,
        enabled: t
    }),
        tM({ voiceFilterPlaybackEnabled: t });
}
function nG(e) {
    let { newVoiceFilterId: t } = e;
    tM({ mostRecentlyRequestedVoiceFilter: t }), eM.eachConnection((e) => e.setVoiceFilterId(t));
}
function nB() {
    tM({ mostRecentlyRequestedVoiceFilter: null });
}
function nF(e) {
    let { voiceFilterId: t } = e;
    (tn = te), (tr = tt), (te = t), (tt = null === t ? null : Date.now());
}
function nV(e) {
    let t = e.bypassEnabled;
    tM({ bypassSystemInputProcessing: t }), eM.setAudioInputBypassSystemProcessing(t), nu(e.location);
}
function nZ(e) {
    nH(e.subsystem);
}
function nH(e) {
    e === ep.iA.AUTOMATIC ? (tM({ automaticAudioSubsystem: !0 }), nY()) : (tM({ automaticAudioSubsystem: !1 }), eM.setAudioSubsystem(e));
}
function nY() {
    eM.queueAudioSubsystem(ep.iA.EXPERIMENTAL);
}
function nW(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && tS(i, null), null != t || null == n)) {
        e8 = !1;
        return;
    }
    if (e8) return;
    e8 = !0;
    let o = tb();
    (o.mute || o.deaf) &&
        (tM({
            deaf: !1,
            mute: !1
        }),
        eM.eachConnection(tv));
}
function nK(e) {
    let { application: t } = e;
    eU.add(t.id);
}
function nz(e) {
    let { application: t } = e;
    eU.delete(t.id);
}
function nq(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case 'audio':
                (eG = !1), eM.eachConnection(tv);
                break;
            case 'video':
                tS(!1);
        }
}
function nQ(e) {
    (eG = e.enabled),
        e.unmute &&
            tM({
                mute: !1,
                deaf: !1
            }),
        eM.eachConnection(tv);
}
function nX(e) {
    let { enabled: t } = e;
    V.Z.requestPermission(ef.Eu.CAMERA), tS(t);
}
function nJ(e) {
    let { sourceId: t, applicationName: n, quality: i } = e,
        o = I.Z.isDecoupledGameClippingEnabled(),
        s = I.Z.getSettings().decoupledClipsEnabled;
    if (!o || !s || null == y.Z) return;
    let l = null,
        c = null,
        u = z.Z.getPidFromDesktopSource(t);
    ({ soundshareId: l, soundshareSession: c } = tK(u));
    let d = {
        desktopSource: {
            id: t,
            sourcePid: u,
            soundshareId: l,
            soundshareSession: c
        },
        quality: i
    };
    null != a && a.desktopSource.id !== d.desktopSource.id && (eM.setClipsSource(null), (0, Q.isWindows)() && null != a.desktopSource.soundshareId && O.pn(a.desktopSource.soundshareId)), null != l && tz(l, c), (a = d);
    let f = tE(),
        _ = tb().videoHook;
    eM.setClipsSource({
        desktopDescription: {
            id: a.desktopSource.id,
            soundshareId: a.desktopSource.soundshareId,
            useVideoHook: _,
            useGraphicsCapture: tP(),
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: tw(),
            videoHookStaleFrameTimeoutMs: eC,
            graphicsCaptureStaleFrameTimeoutMs: eP,
            hdrCaptureMode: f
        },
        quality: i,
        applicationName: n
    });
}
function n$(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((a = null), eM.setClipsSource(null));
}
function n0(e) {
    var t, n, r, i;
    let { settings: o } = e;
    if ((null == o ? void 0 : o.desktopSettings) != null) {
        let e = null,
            r = null,
            { sourceId: i, sound: a } = o.desktopSettings,
            s = null != (t = o.context) ? t : ep.Yn.DEFAULT,
            l =
                null != (n = o.qualityOptions)
                    ? n
                    : {
                          resolution: 720,
                          frameRate: 30
                      },
            c = !1 === a ? null : z.Z.getPidFromDesktopSource(i);
        Q.isPlatformEmbedded && !0 === a && (({ soundshareId: e, soundshareSession: r } = tK(c)), null != e && tz(e, r)),
            tI(s),
            tS(s === ep.Yn.STREAM && eQ, {
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
            });
    } else if ((null == o ? void 0 : o.cameraSettings) != null) {
        let e = null != (r = o.context) ? r : ep.Yn.DEFAULT,
            { videoDeviceGuid: t, audioDeviceGuid: n } = o.cameraSettings,
            a = e === ep.Yn.STREAM && eQ,
            s =
                null != (i = o.qualityOptions)
                    ? i
                    : {
                          resolution: 720,
                          frameRate: 30
                      };
        tS(a, {
            cameraSource: {
                videoDeviceGuid: t,
                audioDeviceGuid: n
            },
            quality: {
                resolution: s.resolution,
                frameRate: s.frameRate
            }
        });
    } else tS(eQ, null);
}
function n1(e) {
    let { section: t } = e;
    return t === eu.oAB.VOICE && tG(), !1;
}
function n2() {
    return eM.eachConnection(tN), !1;
}
function n3(e) {
    let { enabled: t } = e,
        n = tM({ openH264: t });
    eM.setH264Enabled(n.hardwareEncoding || n.openH264),
        eM.eachConnection((e) => {
            var t;
            return e.setSoftwareH264(null == (t = n.openH264) || t);
        });
}
function n4(e) {
    let { enabled: t } = e,
        n = tM({ aecDumpEnabled: t });
    eM.setAecDump(n.aecDumpEnabled);
}
function n5(e) {
    let { state: t } = e,
        n = P.Z.isEnabled();
    if (t === eu.$7l.BACKGROUND && eQ && !n) (e2 = !0), tS(!1);
    else {
        if (t !== eu.$7l.ACTIVE || !e2) return !1;
        (e2 = !1), tS(!0);
    }
    return !0;
}
function n6(e) {
    eM.eachConnection((t) => t.setBitRate(e.bitrate));
}
function n8() {
    if ((!eQ && null == o) || null != ea.Z.getRTCConnectionId()) return !1;
    tS(!1, null);
}
function n7() {
    return !!to && ((to = !1), !0);
}
function n9(e) {
    eM.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function re(e) {
    let { settings: t } = e;
    eM.applyMediaFilterSettings(t).finally(() => {
        (ta = !1), r.emitChange();
    });
}
function rt() {
    ta = !0;
}
function rn() {
    ta = !1;
}
function rr(e) {
    tp = e.enabled;
}
class ri extends (s = h.ZP.Store) {
    initialize() {
        tC(),
            tk(),
            nj(),
            t7(),
            (tf = {
                [ep.AN.VIDEO]: eM.supports(ep.AN.VIDEO),
                [ep.AN.DESKTOP_CAPTURE]: eM.supports(ep.AN.DESKTOP_CAPTURE),
                [ep.AN.HYBRID_VIDEO]: eM.supports(ep.AN.HYBRID_VIDEO)
            }),
            this.waitFor(et.default, er.Z, ei.Z, eo.Z, ea.Z, R.ZP, V.Z.storage, H.Z, C.Z, I.Z);
    }
    supports(e) {
        return eM.supports(e);
    }
    supportsInApp(e) {
        return tf[e] || eM.supports(e);
    }
    isSupported() {
        return eM.supported();
    }
    isExperimentalEncodersSupported() {
        return eM.supports(ep.AN.EXPERIMENTAL_ENCODERS);
    }
    isNoiseSuppressionSupported() {
        return eM.supports(ep.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return nx();
    }
    isNoiseCancellationError() {
        return to;
    }
    isAutomaticGainControlSupported() {
        return eM.supports(ep.AN.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !tL() && (eM.supports(ep.AN.LEGACY_AUDIO_SUBSYSTEM) || eM.supports(ep.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return eM.supports(ep.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && 'experimental' === eM.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return nx();
    }
    isAecDumpSupported() {
        return eM.supports(ep.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return eM.supports(ep.AN.VIDEO) && eM.supports(ep.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        let t = (null == (e = ei.Z.getChannel(ti)) ? void 0 : e.type) === eu.d4z.GUILD_STAGE_VOICE,
            n = r.getHardwareEncoding();
        return !t && n && k.Z.simulcastEnabled();
    }
    getAecDump() {
        return tb().aecDumpEnabled;
    }
    getMediaEngine() {
        return eM;
    }
    getVideoComponent() {
        return eM.Video;
    }
    getCameraComponent() {
        return eM.Camera;
    }
    isEnabled() {
        return eG;
    }
    isMute() {
        return this.isSelfMute() || eW;
    }
    isDeaf() {
        return this.isSelfDeaf() || eq;
    }
    hasContext(e) {
        return null != ej[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return e === ep.Yn.DEFAULT && eK;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return !this.isEnabled() || tb(e).mute || !V.Z.didHavePermission(ef.Eu.AUDIO) || this.isSelfDeaf(e) || (e === ep.Yn.DEFAULT && ez);
    }
    shouldSkipMuteUnmuteSound() {
        return eJ;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        eJ = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && er.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return tp;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return !this.isSupported() || tb(e).deaf;
    }
    isVideoEnabled() {
        return eQ && e3;
    }
    isVideoAvailable() {
        return Object.values(eY).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.STREAM;
        return eF === e && null != o;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.STREAM;
        return eF === t && null != o && (null == (e = o.desktopSource) ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT;
        return e !== et.default.getId() && (tb(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return eM.supports(ep.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT;
        return null != (t = tb(n).disabledLocalVideos[e]) && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT;
        return null != (t = tb(n).videoToggleStateMap[e]) ? t : eu.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT;
        return t === ep.Yn.DEFAULT && tc.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return e === ep.Yn.DEFAULT && tc.size > 0;
    }
    isMediaFilterSettingLoading() {
        return ta;
    }
    isNativeAudioPermissionReady() {
        return ts;
    }
    getGoLiveSource() {
        return o;
    }
    getGoLiveContext() {
        return eF;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return eV;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT,
            n = tb(t).localPans[e];
        return null != n ? n : eN;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT,
            n = t === ep.Yn.STREAM ? ep.Yh : ep.Qx,
            r = tb(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return tb().inputVolume;
    }
    getOutputVolume() {
        return tb().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return tb(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return tb(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return te;
    }
    getActiveVoiceFilterAppliedAt() {
        return tt;
    }
    getPreviousVoiceFilter() {
        return tn;
    }
    getPreviousVoiceFilterAppliedAt() {
        return tr;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return tb().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return tb().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            d().each(ej, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i }
                } = t;
                r === eu.pM4.PUSH_TO_TALK && eU.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return tV(eZ, tb().inputDeviceId);
    }
    getOutputDeviceId() {
        return tV(eH, tb().outputDeviceId);
    }
    getVideoDeviceId() {
        return tV(eY, tb().videoDeviceId);
    }
    getInputDevices() {
        return eZ;
    }
    getOutputDevices() {
        return eH;
    }
    getVideoDevices() {
        return eY;
    }
    getEchoCancellation() {
        let e = tb();
        return er.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return tb().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return tb().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return tb().h265Enabled;
    }
    getLoopback() {
        return td.size > 0;
    }
    getLoopbackReasons() {
        return td;
    }
    getNoiseSuppression() {
        let e = tb();
        return er.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tb();
        return er.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return tb().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return tb().noiseCancellation;
    }
    getExperimentalEncoders() {
        return tb().experimentalEncoders;
    }
    getHardwareEncoding() {
        var e;
        return null == (e = tb().hardwareEncoding) || e;
    }
    getEnableSilenceWarning() {
        return tb().silenceWarning;
    }
    getDebugLogging() {
        return eM.getDebugLogging();
    }
    getQoS() {
        return tb().qos;
    }
    getAttenuation() {
        return tb().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return tb().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return tb().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return tD() && tb().automaticAudioSubsystem ? ep.iA.AUTOMATIC : eM.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return eM.getMLSSigningKey(e, t);
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return tb(e);
    }
    getState() {
        return {
            settingsByContext: ej,
            inputDevices: eZ,
            outputDevices: eH,
            appSupported: tf,
            krispModuleLoaded: e9,
            goLiveSource: o,
            goLiveContext: eF
        };
    }
    getInputDetected() {
        return e4;
    }
    getNoInputDetectedNotice() {
        return e6;
    }
    getPacketDelay() {
        return Q.isPlatformEmbedded || this.getMode() !== eu.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        eM.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return eB;
    }
    getVideoHook() {
        return tb().videoHook;
    }
    supportsVideoHook() {
        return eM.supports(ep.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tb().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e);
    }
    supportsExperimentalSoundshare() {
        return eM.supports(ep.AN.EXPERIMENTAL_SOUNDSHARE) && _().satisfies(null === y.Z || void 0 === y.Z ? void 0 : y.Z.os.release, ed.I9);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = tb().useSystemScreensharePicker,
            n = (0, Q.isLinux)() || ((0, Q.isMac)() && _().satisfies(null === y.Z || void 0 === y.Z ? void 0 : y.Z.os.release, ed.jR));
        return e && (null != t ? t : n);
    }
    supportsSystemScreensharePicker() {
        return eM.supports(ep.AN.NATIVE_SCREENSHARE_PICKER);
    }
    getOpenH264() {
        return tb().openH264;
    }
    getEverSpeakingWhileMuted() {
        return e$;
    }
    getSpeakingWhileMuted() {
        return e0;
    }
    hasActiveCallKitCall() {
        return th;
    }
    setHasActiveCallKitCall(e) {
        th = e;
    }
    supportsScreenSoundshare() {
        return (0, Q.isMac)() ? eM.supports(ep.AN.SOUNDSHARE) && _().satisfies(null === y.Z || void 0 === y.Z ? void 0 : y.Z.os.release, ed.yG) && tw() : (0, Q.isWindows)() ? eM.supports(ep.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, Q.isLinux)() && eM.supports(ep.AN.SCREEN_SOUNDSHARE);
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT,
            t = this.supports(ep.AN.VIDEO)
                ? [
                      {
                          rid: '100',
                          type: e === ep.Yn.DEFAULT ? ep.Tr.VIDEO : ep.Tr.SCREEN,
                          quality: ep.y7
                      }
                  ]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === ep.Yn.DEFAULT || this.goLiveSimulcastEnabled()) &&
                t.push({
                    rid: '50',
                    type: e === ep.Yn.DEFAULT ? ep.Tr.VIDEO : ep.Tr.SCREEN,
                    quality: ep.LD
                }),
            t
        );
    }
    getSupportedSecureFramesProtocolVersion() {
        let e = eM.getSupportedSecureFramesProtocolVersion(),
            t = M.m.getCurrentConfig({ location: 'MediaEngineStore' });
        return 114 === e && (e = 1), t.canSupportDaveProtocol && e >= t.protocolVersionFloor ? e : 0;
    }
    hasClipsSource() {
        return null != a;
    }
    getGpuBrand() {
        return t_;
    }
}
function ro(e) {
    if (null == e.taskMetrics || 0 === e.taskMetrics.length || 1 === e.taskMetrics.length) return null;
    let t = {
        metrics_period_ms: e.periodMs,
        total_tasks: 0,
        total_exec_time_ns: 0
    };
    (t.total_tasks = e.taskMetrics.reduce((e, t) => e + t.count, 0)), (t.total_exec_time_ns = e.taskMetrics.reduce((e, t) => e + t.totalExecTimeNs, 0));
    let n = [...e.taskMetrics].sort((e, t) => t.longestExecTimeNs - e.longestExecTimeNs),
        r = [...e.taskMetrics].sort((e, t) => t.longestQueueTimeNs - e.longestQueueTimeNs);
    for (let e = 0; e < 3; e++)
        if (e < n.length) {
            let r = n[e];
            (t['slow_task_'.concat(e, '_name')] = r.name), (t['slow_task_'.concat(e, '_longest_exec_time_ns')] = r.longestExecTimeNs);
        }
    for (let e = 0; e < 3; e++)
        if (e < r.length) {
            let n = r[e];
            (t['delayed_task_'.concat(e, '_name')] = n.name), (t['delayed_task_'.concat(e, '_longest_queue_time_ns')] = n.longestQueueTimeNs);
        }
    return (t.full_task_report = JSON.stringify(n)), t;
}
em(ri, 'displayName', 'MediaEngineStore');
let ra = (r = new ri(b.Z, {
    VOICE_CHANNEL_SELECT: nW,
    VOICE_STATE_UPDATES: t$,
    CONNECTION_OPEN: tq,
    CONNECTION_CLOSED: tX,
    RTC_CONNECTION_STATE: tJ,
    AUDIO_SET_TEMPORARY_SELF_MUTE: t0,
    AUDIO_TOGGLE_SELF_MUTE: t1,
    AUDIO_SET_SELF_MUTE: t2,
    AUDIO_TOGGLE_SELF_DEAF: t4,
    AUDIO_TOGGLE_LOCAL_MUTE: t5,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: t6,
    AUDIO_SET_LOCAL_VOLUME: t9,
    AUDIO_SET_LOCAL_PAN: ne,
    AUDIO_SET_MODE: nt,
    AUDIO_SET_INPUT_VOLUME: nn,
    AUDIO_SET_OUTPUT_VOLUME: nr,
    AUDIO_SET_INPUT_DEVICE: ni,
    AUDIO_SET_OUTPUT_DEVICE: no,
    AUDIO_SET_ECHO_CANCELLATION: nd,
    AUDIO_SET_SIDECHAIN_COMPRESSION: nf,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: n_,
    AUDIO_SET_LOOPBACK: nh,
    AUDIO_SET_NOISE_SUPPRESSION: nE,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nb,
    AUDIO_SET_NOISE_CANCELLATION: ny,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: nI,
    AUDIO_SET_DEBUG_LOGGING: nS,
    MEDIA_ENGINE_SET_VIDEO_HOOK: nT,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: nA,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: nN,
    AUDIO_SET_ATTENUATION: nC,
    AUDIO_SET_QOS: nP,
    MEDIA_ENGINE_DEVICES: nl,
    AUDIO_VOLUME_CHANGE: nc,
    AUDIO_RESET: nR,
    AUDIO_INPUT_DETECTED: nw,
    AUDIO_SET_SUBSYSTEM: nZ,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: nV,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: nQ,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: nX,
    MEDIA_ENGINE_PERMISSION: nq,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: n0,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: na,
    MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nO,
    MEDIA_ENGINE_INTERACTION_REQUIRED: ns,
    USER_SETTINGS_MODAL_INIT: n1,
    USER_SETTINGS_MODAL_SET_SECTION: n1,
    CERTIFIED_DEVICES_SET: n2,
    RPC_APP_CONNECTED: nK,
    RPC_APP_DISCONNECTED: nz,
    OVERLAY_INITIALIZE: tQ,
    MEDIA_ENGINE_SET_OPEN_H264: n3,
    MEDIA_ENGINE_SET_HARDWARE_ENCODING: nv,
    APP_STATE_UPDATE: n5,
    SET_CHANNEL_BITRATE: n6,
    SET_VAD_PERMISSION: nD,
    SET_NATIVE_PERMISSION: nL,
    SET_CHANNEL_VIDEO_QUALITY_MODE: n9,
    MEDIA_ENGINE_SET_AEC_DUMP: n4,
    CHANNEL_DELETE: n8,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: n7,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: re,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rt,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rn,
    USER_SETTINGS_PROTO_UPDATE: t3,
    CLIPS_INIT: nJ,
    CLIPS_SETTINGS_UPDATE: n$,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rr,
    VOICE_FILTER_REQUEST_SWITCH: nG,
    VOICE_FILTER_LOOPBACK_TOGGLE: nU,
    VOICE_FILTER_APPLIED: nF,
    VOICE_FILTER_DOWNLOAD_FAILED: nB,
    VOICE_FILTER_APPLY_FAILED: nB
}));
