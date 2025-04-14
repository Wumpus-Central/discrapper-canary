let r, i, o, a;
n.d(t, { Z: () => ro }), n(388685), n(953529), n(457542), n(539854), n(642613), n(49124), n(337869);
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
    v = n(887278),
    O = n(547727),
    I = n(435064),
    S = n(779618),
    T = n(710845),
    N = n(535911),
    A = n(458725),
    C = n(353926),
    R = n(646047),
    P = n(594190),
    w = n(502286),
    D = n(355552),
    L = n(294473),
    x = n(706629),
    M = n(166884),
    k = n(998594),
    j = n(14457),
    U = n(529558),
    G = n(111672),
    B = n(441167),
    V = n(580930),
    F = n(338336),
    Z = n(751571),
    H = n(725380),
    W = n(581883),
    Y = n(743498),
    K = n(875527),
    z = n(626135),
    q = n(12647),
    Q = n(70956),
    X = n(358085),
    J = n(747268),
    $ = n(960048),
    ee = n(998502),
    et = n(13140),
    en = n(314897),
    er = n(967368),
    ei = n(463395),
    eo = n(592125),
    ea = n(858340),
    es = n(19780),
    el = n(704806),
    ec = n(594174),
    eu = n(631768),
    ed = n(981631),
    ef = n(70722),
    e_ = n(761274),
    ep = n(526761),
    eh = n(65154),
    em = n(388032);
function eg(e, t, n) {
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
function eE(e) {
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
                eg(e, t, n[t]);
            });
    }
    return e;
}
function eb(e, t) {
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
function ey(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eb(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ev = new T.Z('MediaEngineStore'),
    eO = 'MediaEngineStore',
    eI = 4,
    eS = 1,
    eT = 1,
    eN = 1,
    eA = 1,
    eC = 2,
    eR = {
        left: 1,
        right: 1
    },
    eP = 500,
    ew = 5 * Q.Z.Millis.SECOND,
    eD = -60,
    eL = 100,
    ex = '>=21.0.0',
    eM = 2 * Q.Z.Millis.SECOND,
    ek = 0;
function ej() {
    return {
        mode: ed.pM4.VOICE_ACTIVITY,
        modeOptions: {
            threshold: eD,
            autoThreshold: X.isPlatformEmbedded || __OVERLAY__,
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
        inputVolume: eh.Qx,
        outputVolume: eh.Qx,
        inputDeviceId: eh.w5,
        outputDeviceId: eh.w5,
        videoDeviceId: eh.w5,
        qos: !1,
        qosMigrated: !1,
        videoHook: eU.supports(eh.AN.VIDEO_HOOK),
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        openH264: !0,
        h265Enabled: !0,
        vadThrehsoldMigrated: !1,
        aecDumpEnabled: !1,
        sidechainCompression: !1,
        sidechainCompressionSettingVersion: 0,
        sidechainCompressionStrength: 50,
        audioSubsystemSettingVersion: 0,
        automaticAudioSubsystem: !1
    };
}
let eU = (0, m.Mt)((0, m.jj)());
ev.enableNativeLogger(!0);
let eG = {},
    eB = new Set([eh.Yn.DEFAULT]),
    eV = eU.supports(eh.AN.AUTO_ENABLE),
    eF = !1,
    eZ = eh.Yn.STREAM,
    eH = performance.now(),
    eW = { [eh.w5]: tB('No Input Devices') },
    eY = { [eh.w5]: tB('No Output Devices') },
    eK = { [eh.w5]: tB('No Video Devices') },
    ez = !1,
    eq = !1,
    eQ = !1,
    eX = !1,
    eJ = !1,
    e$ = eh.Av,
    e0 = !1,
    e1 = !1,
    e2 = !1,
    e3 = new E.V7(),
    e4 = !1,
    e5 = !1,
    e6 = null,
    e8 = !1,
    e7 = !1,
    e9 = !1,
    te = !1,
    tt = !1,
    tn = null,
    tr = null,
    ti = null,
    to = null,
    ta = null,
    ts = !1,
    tl = !1,
    tc = !1;
Z.Z.hasPermission(e_.Eu.AUDIO, { showAuthorizationError: !1 }), Z.Z.hasPermission(e_.Eu.CAMERA, { showAuthorizationError: !1 });
let tu = !1,
    td = new Set(),
    tf = tu,
    t_ = new Set(),
    tp = {},
    th = null,
    tm = !0,
    tg = !1,
    tE = {},
    tb = 5 * Q.Z.Millis.SECOND;
function ty() {
    var e, t;
    return null != (t = null == (e = ec.default.getCurrentUser()) ? void 0 : e.isStaff()) && t ? 'always' : J.Z === p.R.CANARY ? 'permittedDevicesOnly' : 'never';
}
function tv() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT,
        t = eG[e];
    return null == t && ((t = ej()), (eG[e] = t)), t;
}
function tO(e) {
    let t = tv(e.context);
    e.setInputMode(t.mode, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: t.modeOptions.autoThreshold,
        vadUseKrisp: t.modeOptions.vadUseKrisp && nx(),
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        pttReleaseDelay: t.modeOptions.delay
    });
}
function tI(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Qx;
    return d().clamp(e, 0, t);
}
function tS(e) {
    let t = tv(e.context),
        n = !eV || t.mute || t.deaf;
    e.context === eh.Yn.DEFAULT ? (n = n || ez || eq || eQ || !Z.Z.didHavePermission(e_.Eu.AUDIO)) : e.context === eh.Yn.STREAM && (n = !0), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eh.Yn.DEFAULT && O.Z.updateNativeMute();
}
function tT(e) {
    e !== eZ && (null != o && eU.setGoLiveSource(null, eZ), (eZ = e));
}
function tN() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eJ,
        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
        s = o;
    if (((null == s ? void 0 : s.desktopSource) != null && s.desktopSource.id !== (null == a || null == (e = a.desktopSource) ? void 0 : e.id) && (null != s.desktopSource.soundshareId && (0, X.isWindows)() && v.pn(s.desktopSource.soundshareId), eU.setGoLiveSource(null, eZ)), (null == s ? void 0 : s.cameraSource) != null && (s.cameraSource.videoDeviceGuid !== (null == a || null == (t = a.cameraSource) ? void 0 : t.videoDeviceGuid) || s.cameraSource.audioDeviceGuid !== (null == a || null == (n = a.cameraSource) ? void 0 : n.audioDeviceGuid)) && eU.setGoLiveSource(null, eZ), (eJ || i) && ((e$ = (eJ = i) ? tF(eK, tv().videoDeviceId) : eh.Av), eU.setVideoInputDevice(e$)), (o = a), null != a)) {
        let e = {
            resolution: a.quality.resolution,
            frameRate: a.quality.frameRate
        };
        if (null != a.desktopSource) {
            let t = ty(),
                n = tv().videoHook;
            eU.setGoLiveSource(
                {
                    desktopDescription: {
                        id: a.desktopSource.id,
                        soundshareId: a.desktopSource.soundshareId,
                        useVideoHook: n,
                        useGraphicsCapture: tw(),
                        useLoopback: r.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: tD(),
                        videoHookStaleFrameTimeoutMs: eP,
                        graphicsCaptureStaleFrameTimeoutMs: ew,
                        hdrCaptureMode: t
                    },
                    quality: e
                },
                eZ
            );
        }
        null != a.cameraSource &&
            eU.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: a.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: a.cameraSource.audioDeviceGuid
                    },
                    quality: e
                },
                eZ
            );
    }
}
function tA(e, t, n, r) {
    var i;
    let o = null != (i = null == e ? void 0 : e.soundshareSession) ? i : '';
    null == tE[o] && (tE[o] = new Set());
    let a = null != t && !tE[o].has(t);
    a && tE[o].add(t),
        (null == t || a) &&
            z.default.track(
                ed.rMx.SOUNDSHARE_FAILED,
                eE(
                    {
                        soundshare_failure_code: t,
                        soundshare_failure_reason: n,
                        soundshare_failure_will_retry: r
                    },
                    (0, w.Z)(e)
                )
            );
}
function tC(e) {
    switch (e) {
        case eh.H3.CPU_OVERUSE:
            return A.Nk.NoiseCancellerCpuOveruse;
        case eh.H3.FAILED:
            return A.Nk.NoiseCancellerFailed;
        case eh.H3.VAD_CPU_OVERUSE:
            return A.Nk.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function tR(e) {
    let t = tv(),
        n = t.inputDeviceId;
    if ((e.setEchoCancellation(ei.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(ei.Z.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(ei.Z.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), e.setVoiceFilterId(tn), (0, X.isWeb)())) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function tP() {
    eU.on(m.aB.Connection, (e) => {
        var t, n;
        tO(e), tS(e), tR(e);
        let i = tv();
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers), e.setQoS(i.qos), e.setExperimentalEncoders(i.experimentalEncoders), e.setHardwareH264(null == (t = i.hardwareEncoding) || t), e.setSoftwareH264(null == (n = i.openH264) || n);
        let a = es.Z.getGuildId(),
            { muteBeforeProcessing: s, pttBeforeProcessing: l, skipEncode: c } = (null != a ? x.Z : L.Z).getCurrentConfig(eE({ location: 'setupMediaEngine' }, null != a && { guildId: a }), { autoTrackExposure: !0 });
        s && e.setExperimentFlag(eh.V8.MUTE_BEFORE_PROCESSING, !0), l && e.setExperimentFlag(eh.V8.PTT_BEFORE_PROCESSING, !0), c && e.setExperimentFlag(eh.V8.SKIP_ENCODE, !0);
        let u = !1,
            d = !0;
        if ((e.setExperimentFlag(eh.V8.RESET_DECODER_ON_ERRORS, !0), u && e.setExperimentFlag(eh.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0), d && e.setExperimentFlag(eh.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0), e.context === eh.Yn.STREAM)) {
            let { simulcastEnabled: t, lqStreamBitrate: n } = M.Z.getConfig();
            e.configureGoLiveSimulcast(t, n);
        }
        (0, X.isWindows)() ? ((null == th ? void 0 : th.startsWith('NVIDIA')) || (null == th ? void 0 : th.startsWith('AMD')) ? e.setExperimentFlag(eh.V8.SIGNAL_AV1, !0) : e.setExperimentFlag(eh.V8.SIGNAL_AV1_DECODE, !0)) : ((0, X.isMac)() || (0, X.isLinux)()) && e.setExperimentFlag(eh.V8.SIGNAL_AV1_DECODE, !0), (0, X.isWindows)() && e.setExperimentFlag(eh.V8.SIGNAL_AV1_HARDWARE_DECODE, !0), eU.setHasFullbandPerformance((0, N.Z)());
        let f = (0, D.D)('setupMediaEngine').enabled;
        if ((e.setRemoteAudioHistory(1000 * !!f), (0, S.Z)(r))) {
            let t = I.Z.getSettings();
            e.setExperimentFlag(eh.V8.STREAMER_CLIP, t.clipsEnabled);
            let { enableViewerClipping: n } = B.Z.getCurrentConfig({ location: 'f627ab_15' }, { autoTrackExposure: !1 });
            e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eh.ux);
        }
        for (let t of ((i = tv(e.context)), e.setPostponeDecodeLevel(eL), Object.keys(i.localMutes))) t !== en.default.getId() && e.setLocalMute(t, i.localMutes[t]);
        for (let t of Object.keys(i.localVolumes)) t !== en.default.getId() && e.setLocalVolume(t, i.localVolumes[t]);
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
            e.context === eh.Yn.DEFAULT &&
                ((e1 = !1),
                (e2 = !1),
                e.on(m.Sh.SpeakingWhileMuted, () => {
                    (e1 = !0),
                        (e2 = !0),
                        r.emitChange(),
                        e3.stop(),
                        e3.start(eM, () => {
                            (e2 = !1), r.emitChange();
                        });
                })),
            e.on(m.Sh.DesktopSourceEnd, () => {
                b.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                    settings: { context: e.context }
                });
            }),
            e.on(m.Sh.SoundshareAttached, () => {
                (null == o ? void 0 : o.desktopSource) != null && z.default.track(ed.rMx.SOUNDSHARE_ATTACHED, (0, w.Z)(null == o ? void 0 : o.desktopSource));
            }),
            e.on(m.Sh.SoundshareFailed, (e) => {
                let { failureCode: t, failureReason: n, willRetry: r } = e;
                tA(null == o ? void 0 : o.desktopSource, t, n, r);
            }),
            e.on(m.Sh.SoundshareSpeaking, () => {
                (null == o ? void 0 : o.desktopSource) != null && (z.default.track(ed.rMx.SOUNDSHARE_TRANSMITTING, (0, w.Z)(null == o ? void 0 : o.desktopSource)), null != ea.Z.getHookError(ed.K3D.SOUND) && b.Z.wait(() => b.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
            });
        let _ = new E.V7();
        e.on(m.Sh.SoundshareTrace, (e) => {
            switch (e.type) {
                case 'soundshare_attach_requested':
                    _.start(tb, () => {
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
                        (tA(null == o ? void 0 : o.desktopSource, n, t, r),
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
                    z.default.track(
                        ed.rMx.VIDEOHOOK_INITIALIZED,
                        eE(
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
                ev.warn('noisecancellererror event: '.concat(e)),
                    (0, A.kr)({
                        type: A.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tC(e)
                    }),
                    (ts = !0),
                    z.default.track(ed.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
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
                ev.warn('voiceactivitydetectorerror event: '.concat(e)),
                    (0, A.kr)({
                        type: A.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tC(e)
                    }),
                    z.default.track(ed.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    b.Z.dispatch({
                        type: 'AUDIO_SET_MODE',
                        context: eh.Yn.DEFAULT,
                        mode: ed.pM4.VOICE_ACTIVITY,
                        options: ey(eE({}, tv(eh.Yn.DEFAULT).modeOptions), { vadUseKrisp: !1 })
                    }),
                    b.Z.dispatch({
                        type: 'MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR',
                        code: e
                    });
            }),
            e.on(m.Sh.SdpError, (e, t, n, r) => {
                z.default.track(ed.rMx.SDP_ERROR, {
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
            e.setBitRate(er.Z.bitrate),
            e.applyVideoQualityMode(eu.Z.mode);
    }),
        eU.on(m.aB.DeviceChange, (e, t, n) => {
            b.Z.dispatch({
                type: 'MEDIA_ENGINE_DEVICES',
                inputDevices: e,
                outputDevices: t,
                videoDevices: n
            });
        }),
        eU.on(m.aB.VolumeChange, (e, t) => {
            b.Z.dispatch({
                type: 'AUDIO_VOLUME_CHANGE',
                inputVolume: e,
                outputVolume: t
            });
        }),
        eU.on(m.aB.DesktopSourceEnd, () => {
            b.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                settings: null
            });
        }),
        eU.on(m.aB.AudioPermission, (e) => {
            (tc = !0),
                b.Z.dispatch({
                    type: 'MEDIA_ENGINE_PERMISSION',
                    kind: 'audio',
                    granted: e
                });
        }),
        eU.on(m.aB.VideoPermission, (e) => {
            b.Z.dispatch({
                type: 'MEDIA_ENGINE_PERMISSION',
                kind: 'video',
                granted: e
            });
        }),
        eU.on(m.aB.WatchdogTimeout, async () => {
            let e;
            try {
                await q.Z.submitLiveCrashReport({ message: { message: 'Voice Watchdog Timeout' } });
            } catch (t) {
                'number' == typeof t.status && (e = t.status);
            }
            ev.warn('Watchdog timeout, report submission status: '.concat(null != e ? e : 200)), z.default.track(ed.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        eU.on(m.aB.VideoInputInitialized, (e) => {
            z.default.track(ed.rMx.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * Q.Z.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: es.Z.getMediaSessionId(),
                rtc_connection_id: es.Z.getRTCConnectionId()
            });
        }),
        eU.on(m.aB.AudioInputInitialized, (e) => {
            z.default.track(ed.rMx.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * Q.Z.Millis.SECOND),
                rtc_connection_id: es.Z.getRTCConnectionId()
            });
        }),
        eU.on(m.aB.ClipsRecordingRestartNeeded, () => {
            b.Z.dispatch({ type: 'CLIPS_RESTART' });
        }),
        eU.on(m.aB.ClipsInitFailure, (e, t) => {
            b.Z.wait(() => {
                b.Z.dispatch({
                    type: 'CLIPS_INIT_FAILURE',
                    errMsg: e,
                    applicationName: t
                });
            });
        }),
        eU.on(m.aB.ClipsRecordingEnded, (e, t) => {
            var n, r;
            (null == a || null == (n = a.desktopSource) ? void 0 : n.id) === e && (null != t && (null == o || null == (r = o.desktopSource) ? void 0 : r.soundshareId) !== t && v.pn(t), (a = null));
        }),
        eU.on(m.aB.NativeScreenSharePickerUpdate, (e, t) => {
            k.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerUpdate' }),
                b.Z.dispatch({
                    type: 'NATIVE_SCREEN_SHARE_PICKER_UPDATE',
                    existing: e,
                    content: t
                });
        }),
        eU.on(m.aB.NativeScreenSharePickerCancel, (e) => {
            k.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerCancel' }),
                b.Z.dispatch({
                    type: 'NATIVE_SCREEN_SHARE_PICKER_CANCEL',
                    existing: e
                });
        }),
        eU.on(m.aB.NativeScreenSharePickerError, (e) => {
            k.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerError' }),
                b.Z.dispatch({
                    type: 'NATIVE_SCREEN_SHARE_PICKER_ERROR',
                    error: e
                });
        }),
        eU.on(m.aB.AudioDeviceModuleError, (e, t, n) => {
            z.default.track(ed.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                audio_device_module: e,
                code: t,
                device_name: n
            });
        }),
        eU.on(m.aB.VideoCodecError, (e) => {
            let t = 'encode' === e.mode ? A.u.VIDEO_ENCODE_ERROR : A.u.VIDEO_DECODE_ERROR,
                n = {
                    videoCodec: e.codecStandard,
                    errorMessage: e.message
                };
            (0, A.kr)(t === A.u.VIDEO_ENCODE_ERROR ? ey(eE({ type: t }, n), { videoEncoder: e.implName }) : ey(eE({ type: t }, n), { videoDecoder: e.implName }));
        }),
        eU.on(m.aB.ConnectionStats, (e) => {
            b.Z.dispatch({
                type: 'MEDIA_ENGINE_CONNECTION_STATS',
                connectionStats: e.map((e) => {
                    let { stats: t, connection: n } = e;
                    return {
                        stats: t,
                        mediaEngineConnectionId: n.mediaEngineConnectionId,
                        version: ek++,
                        context: n.context
                    };
                })
            });
        }),
        eU.on(m.aB.VoiceQueueMetrics, (e) => {
            let t = ri(e);
            null !== t && z.default.track(ed.rMx.VOICE_QUEUE_METRICS, t);
        }),
        eU.setOnVideoContainerResized((e, t, n) => {
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
        (0, el.q)().then((e) => {
            null != e && (th = e.gpu_brand);
        });
}
function tw() {
    return (0, X.isWindows)() && _().satisfies(null === y.Z || void 0 === y.Z ? void 0 : y.Z.os.release, ef.nz);
}
function tD() {
    return (0, X.isMac)() && eU.supports(eh.AN.SCREEN_CAPTURE_KIT) && _().satisfies(null === y.Z || void 0 === y.Z ? void 0 : y.Z.os.release, ef.C7);
}
function tL() {
    return (0, X.isWindows)() && eU.supports(eh.AN.AUTOMATIC_AUDIO_SUBSYSTEM) && eU.supports(eh.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH);
}
let tx = new (class {
    start() {
        this.started || ((this.started = !0), eU.on(m.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            eU.removeListener(m.aB.Silence, this.handleSilence),
            b.Z.dispatch({
                type: 'AUDIO_INPUT_DETECTED',
                inputDetected: null
            }));
    }
    update() {
        let e = tv();
        !e8 && es.Z.getState() === ed.hes.RTC_CONNECTED && e.mode === ed.pM4.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop();
    }
    reset() {
        this.stop(), this.update();
    }
    constructor() {
        eg(this, 'stateChangeTimeout', void 0),
            eg(this, 'noVoiceTimeout', 5000),
            eg(this, 'voiceTimeout', 1500),
            eg(this, 'started', !1),
            eg(this, 'handleSilence', (e) => {
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
                                    e && (e7 = !0));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout
                    ));
            });
    }
})();
function tM() {
    var e;
    let t = g.K.get('audio');
    null != t && (g.K.set(eO, { [eh.Yn.DEFAULT]: t }), g.K.remove('audio')),
        (eG = null != (e = g.K.get(eO)) ? e : {}),
        d().each(eG, (e) => {
            if ((d().defaultsDeep(e, ej()), null != e.modeOptions && 'string' == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, et.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== eI && ((e.vadUseKrispSettingVersion = eI), (e.modeOptions.vadUseKrisp = !0)), e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)), !e.vadThrehsoldMigrated)) {
                var t;
                (e.vadThrehsoldMigrated = !0), (null == (t = e.modeOptions) ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = eD);
            }
            (0, X.isWeb)() ? e.ncUseKrispjsSettingVersion !== eT && ((e.ncUseKrispjsSettingVersion = eT), (e.noiseSuppression = !1), (e.noiseCancellation = !0)) : e.ncUseKrispSettingVersion !== eS && ((e.ncUseKrispSettingVersion = eS), (e.noiseSuppression = !1), (e.noiseCancellation = !0)), e.hardwareEnabledVersion !== eN && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = eN)), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
        }),
        tU();
}
function tk(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = tv(t);
    return Object.assign(r, e), !__OVERLAY__ && n && g.K.set(eO, eG), r;
}
function tj() {
    g.K.remove(eO), location.reload();
}
function tU() {
    var e, t, n;
    let r = tv();
    eU.setAudioInputDevice(r.inputDeviceId), eU.setAudioOutputDevice(r.outputDeviceId), tN(), eU.setInputVolume(r.inputVolume), eU.setOutputVolume(r.outputVolume), eU.setH264Enabled(null == (e = r.hardwareEncoding) || e || r.openH264), eU.setAv1Enabled(null == (t = r.hardwareEncoding) || t), eU.setH265Enabled(null == (n = r.hardwareEncoding) || n), eU.setAecDump(r.aecDumpEnabled), eU.setSidechainCompression(r.sidechainCompression), eU.setSidechainCompressionStrength(r.sidechainCompressionStrength);
}
function tG() {
    eV ||
        eU.enable().then(() =>
            b.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
                enabled: !0,
                unmute: !1
            })
        );
}
function tB(e) {
    return {
        id: eh.w5,
        index: 0,
        name: e,
        disabled: !0,
        hardwareId: void 0,
        containerId: void 0
    };
}
function tV(e, t) {
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
function tF(e, t) {
    var n;
    let r = null != (n = e[t]) ? n : d()(e).values().first();
    return null != r ? r.id : t;
}
function tZ(e) {
    let t = eW;
    if (((eW = tV(e, em.NW.string(em.t['/QIjDA']))), !d().isEqual(eW, t))) {
        let e = tv(),
            t = tF(eW, e.inputDeviceId);
        eU.setAudioInputDevice(t);
    }
}
function tH(e) {
    let t = eY;
    if (((eY = tV(e, em.NW.string(em.t.xlUg0t))), !d().isEqual(eY, t))) {
        let e = tv(),
            t = tF(eY, e.outputDeviceId);
        eU.setAudioOutputDevice(t);
    }
}
function tW(e) {
    e5 = e.length > 0;
    let t = eK;
    if (((eK = tV(e, em.NW.string(em.t.WKWARU))), eJ && !d().isEqual(eK, t))) {
        var n;
        let e = void 0 !== eK[e$],
            r = e$ === eh.w5 && (null == (n = t[eh.w5]) ? void 0 : n.disabled);
        tN(e || r);
    }
}
function tY() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        r =
            null != (e = W.Z.settings.audioContextSettings)
                ? e
                : {
                      user: {},
                      stream: {}
                  };
    for (let e of Object.keys(r)) {
        let i = e === ep.u0.USER ? eh.Yn.DEFAULT : eh.Yn.STREAM,
            o = i === eh.Yn.STREAM ? eh.Yh : eh.Qx,
            a = null != (t = r[e]) ? t : {},
            { localMutes: s, localVolumes: l } = tv(i);
        for (let [e, t] of Object.entries(a))
            null == (0, H.Ky)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== o ? (l[e] = t.volume) : delete l[e],
                eU.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (n)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == a[e] &&
                    (delete s[e],
                    delete l[e],
                    eU.eachConnection((t) => {
                        t.setLocalVolume(e, o), t.setLocalMute(e, !1);
                    }, i));
        tk(
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
            ev.info('Error: trying to get soundshare id before MediaEngineStore is instantiated.'),
            {
                soundshareId: null,
                soundshareSession: ''
            }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : q.Z.getAudioPid(e),
            n = '';
        return (
            null != t && (n = q.Z.generateSessionFromPid(t)),
            {
                soundshareId: t,
                soundshareSession: n
            }
        );
    }
}
function tz(e, t) {
    (0, X.isWindows)() &&
        v.YT(e, { soundshare_session: t }).then((t) => {
            null == t ||
                P.ZP.shouldContinueWithoutElevatedProcessForPID(e) ||
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
        (ez = !1),
        (eX = !1),
        (0, X.isWeb)() ||
            (G.Z.subscribe({ location: 'handleConnectionOpen' }, (e) => {
                let t = tv();
                !e.sidechainAvailable && t.sidechainCompression ? (tk({ sidechainCompressionSettingVersion: 0 }), np(!1)) : e.sidechainAvailable && t.sidechainCompressionSettingVersion < eA && (tk({ sidechainCompressionSettingVersion: eA }), np(e.sidechainEnabled));
            }),
            nm());
    let t = tv();
    tL() && (t.automaticAudioSubsystem && nH(), t.audioSubsystemSettingVersion < eC && (tk({ audioSubsystemSettingVersion: eC }), t.automaticAudioSubsystem || eU.getAudioSubsystem() === eh.iA.LEGACY || nZ(eh.iA.AUTOMATIC))),
        (0, K.wt)({
            location: 'MediaEngineStore',
            autoTrackExposure: !1
        }) &&
            null !== t.mostRecentlyRequestedVoiceFilter &&
            (0, Y.J_)(),
        tY();
}
function tQ(e) {
    let { mediaEngineState: t } = e;
    (eG = t.settingsByContext), (eW = t.inputDevices), (eY = t.outputDevices), (tp = t.appSupported), (tt = t.krispModuleLoaded), (eZ = t.goLiveContext);
}
function tX() {
    i = null;
}
function tJ(e) {
    switch (e.state) {
        case ed.hes.CONNECTING:
            tG();
            break;
        case ed.hes.RTC_CONNECTING:
            (e8 = !1), (e7 = !1);
            break;
        case ed.hes.RTC_CONNECTED:
            tN();
            break;
        case ed.hes.DISCONNECTED:
            t8(), t7();
    }
    tx.update();
}
function t$(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => (i === t.sessionId ? ((ez = t.mute || t.suppress), (eX = t.deaf), eU.eachConnection(tS), tN((null == t.guildId || null == t.channelId || null == ta || ta === t.channelId) && eJ), (ta = t.channelId), !0) : (__OVERLAY__ || t.userId !== en.default.getId() || null != es.Z.getChannelId() || tN(!1, null), e)), !1);
}
function t0(e) {
    let { mute: t } = e;
    (eq = t), eU.eachConnection(tS);
}
function t1(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = tv(t);
    if (t === eh.Yn.DEFAULT && (Z.Z.requestPermission(e_.Eu.AUDIO), eQ)) return !1;
    (r = !i && !r) || (i = !1),
        n || (e0 = !0),
        tk(
            {
                mute: r,
                deaf: i
            },
            t
        ),
        eU.eachConnection(tS);
}
function t2(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    tk({ mute: n }, t), r || (e0 = !0), eU.eachConnection(tS);
}
function t3(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r
    } = e;
    if (t !== ep.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    tY(!0);
}
function t4(e) {
    let { context: t } = e;
    tk({ deaf: !tv(t).deaf }, t), eU.eachConnection(tS);
}
function t5(e) {
    let { context: t, userId: n } = e;
    if (n === en.default.getId()) return;
    let { localMutes: r } = tv(t);
    r[n] ? delete r[n] : (r[n] = !0), tk({ localMutes: r }, t), eU.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function t6(e) {
    var t, n, r, i, o, a, s;
    let { context: l, userId: u, videoToggleState: d, persist: f, isAutomatic: _ } = e;
    c()(!(f && _), 'These are not allowed to both be true.');
    let p = d === ed.ZUi.DISABLED,
        { disabledLocalVideos: h } = tv(l),
        m = null != (t = h[u]) && t,
        g = td.has(u),
        E = d === ed.ZUi.AUTO_ENABLED || d === ed.ZUi.MANUAL_ENABLED;
    ev.info('disableVideo='.concat(p, ' currentlyDisabled=').concat(m, ' currentlyAutoDisabled=').concat(g, ', isVideoShown=').concat(E)), c()(!(g && !m), 'If you are auto-disabled, then you are also disabled.');
    let b = p !== m,
        y = l === eh.Yn.DEFAULT,
        v = _ && b && y,
        O = f && b && y;
    ev.info('changed='.concat(b, ' isDefaultContext=').concat(y, ' isUpdateCausedByVideoHealthManager=').concat(v, ' isManualToggleByUser=').concat(O));
    let { videoToggleStateMap: I } = tv(l);
    if ((I[u] === ed.ZUi.AUTO_PROBING && d === ed.ZUi.AUTO_ENABLED && (0, F.Z)(u, p ? eh.fC.AUTO_DISABLE : eh.fC.AUTO_ENABLE, E), (I[u] = d), tk({ videoToggleStateMap: I }, l, f), d === ed.ZUi.AUTO_PROBING ? null == (n = es.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(u, !0) : null == (r = es.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(u, !1), tf || (ev.info('isAutoDisableAllowed='.concat(tf, ' - disabling VideoHealthManager')), null == (o = es.Z.getRTCConnection()) || null == (i = o.getVideoHealthManager()) || i.disable()), v)) {
        if ((!p && !g) || (p && !tf)) return;
        (0, F.Z)(u, p ? eh.fC.AUTO_DISABLE : eh.fC.AUTO_ENABLE, E), p ? td.add(u) : td.delete(u);
    } else O && (g && !p ? (ev.info('disallowing auto-disable for this session because of manual override by user'), (tf = !1), null == (s = es.Z.getRTCConnection()) || null == (a = s.getVideoHealthManager()) || a.disable(), (0, F.Z)(u, eh.fC.MANUAL_REENABLE, E)) : (0, F.Z)(u, p ? eh.fC.MANUAL_DISABLE : eh.fC.MANUAL_ENABLE, E));
    y && !p && td.delete(u),
        p ? (h[u] = !0) : delete h[u],
        tk({ disabledLocalVideos: h }, l, f),
        eU.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(u, null != (t = h[u]) && t);
        }, l);
}
function t8() {
    if (0 === td.size) return;
    let e = eh.Yn.DEFAULT,
        { disabledLocalVideos: t } = tv(e);
    td.forEach((n) => {
        c()(t[n], 'If you are auto-disabled, then you are also disabled.'), delete t[n], eU.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        td.clear(),
        tk({ disabledLocalVideos: t }, e, !1);
}
function t7() {
    let e = eh.Yn.DEFAULT,
        { videoToggleStateMap: t } = tv(e);
    for (let [e, n] of Object.entries(t)) n === ed.ZUi.AUTO_PROBING && delete t[e];
    tk({ videoToggleStateMap: t }, e, !1);
}
function t9(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === en.default.getId()) return;
    let i = t === eh.Yn.STREAM ? eh.Yh : eh.Qx,
        { localVolumes: o } = tv(t);
    r === i ? delete o[n] : (o[n] = r), tk({ localVolumes: o }, t), eU.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function ne(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: o } = tv(t);
    (o[n] = {
        left: r,
        right: i
    }),
        tk({ localPans: o }, t),
        eU.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function nt(e) {
    let { context: t, mode: n, options: r } = e;
    tk(
        {
            mode: n,
            modeOptions: r
        },
        t
    ),
        eU.eachConnection(tO),
        tx.update();
}
function nn(e) {
    let { volume: t } = e;
    tk({ inputVolume: tI(t) }), eU.setInputVolume(t);
}
function nr(e) {
    let { volume: t } = e;
    tk({ outputVolume: t }), eU.setOutputVolume(t);
}
function ni(e) {
    let { id: t } = e;
    (t = tF(eW, t)), (eH = performance.now()), tk({ inputDeviceId: t }), eU.setAudioInputDevice(t);
}
function no(e) {
    let { id: t } = e;
    tk({ outputDeviceId: (t = tF(eY, t)) }), eU.setAudioOutputDevice(t);
}
function na(e) {
    let { id: t } = e;
    tk({ videoDeviceId: (t = tF(eK, t)) }), tN();
}
function ns(e) {
    return eF !== e.required && ((eF = e.required), e.required || eU.interact(), !0);
}
function nl(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    tZ(t), tH(n), tW(r);
}
function nc(e) {
    let { inputVolume: t, outputVolume: n } = e;
    tk({
        inputVolume: tI(t),
        outputVolume: n
    });
}
function nu(e) {
    let t = tv();
    z.default.track(ed.rMx.VOICE_PROCESSING, {
        echo_cancellation: t.echoCancellation,
        noise_cancellation: t.noiseCancellation,
        noise_suppression: t.noiseSuppression,
        automatic_gain_control: t.automaticGainControl,
        location: e
    });
}
function nd(e) {
    let t = tk({ echoCancellation: e.enabled });
    eU.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), ng(), nu(e.location);
}
function nf(e) {
    np(e.enabled);
}
function n_(e) {
    let t = tk({ sidechainCompressionStrength: e.strength });
    eU.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function np(e) {
    let t = tk({ sidechainCompression: e });
    eU.setSidechainCompression(t.sidechainCompression);
}
function nh(e) {
    let { enabled: t, loopbackReason: n } = e,
        r = t_.size > 0;
    return t ? t_.add(n) : t_.delete(n), nm(), t_.size > 0 !== r && ng();
}
function nm() {
    let { voiceFiltersPreProcessMute: e } = V.Z.getCurrentConfig({ location: 'setMaybePreprocessMute' }, { autoTrackExposure: !0 }),
        t = e && !t_.has('voice_filter_preview') && !t_.has('mic_test');
    eU.setMaybePreprocessMute(t);
}
function ng() {
    let e = tv(),
        t = t_.size > 0,
        n = e.inputDeviceId,
        r = ei.Z.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        o = ei.Z.hasNoiseSuppression(n) || e.noiseSuppression,
        a = ei.Z.hasAutomaticGainControl(n) || e.automaticGainControl,
        s = e.noiseCancellation,
        l = null !== tn;
    eU.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: o,
        automaticGainControl: a,
        noiseCancellation: s,
        voiceFilters: l
    });
}
function nE(e) {
    let t = tk({ noiseSuppression: e.enabled });
    eU.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), ng(), nu(e.location);
}
function nb(e) {
    let t = tk({ automaticGainControl: e.enabled });
    eU.eachConnection((e) => e.setAutomaticGainControl(t.automaticGainControl)), ng(), nu(e.location);
}
function ny(e) {
    let t = tk({ noiseCancellation: e.enabled });
    eU.eachConnection((e) => e.setNoiseCancellation(t.noiseCancellation)), ng(), nu(e.location);
}
function nv(e) {
    let t = tk({ experimentalEncoders: e.enabled });
    eU.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
}
function nO(e) {
    var t, n;
    let { enabled: r } = e,
        i = tk({ hardwareEncoding: r });
    eU.eachConnection((e) => {
        var t;
        return e.setHardwareH264(null == (t = i.hardwareEncoding) || t);
    }),
        eU.setH264Enabled(i.hardwareEncoding || i.openH264),
        eU.setAv1Enabled(null == (t = i.hardwareEncoding) || t),
        eU.setH265Enabled(null == (n = i.hardwareEncoding) || n);
}
function nI(e) {
    tk({ silenceWarning: e.enabled }), tx.update();
}
function nS(e) {
    eU.setDebugLogging(e.enabled);
}
function nT(e) {
    tk({ videoHook: e.enabled });
}
function nN(e) {
    tk({ experimentalSoundshare2: e.enabled });
}
function nA(e) {
    let { enabled: t } = e;
    tk({ useSystemScreensharePicker: t });
}
function nC(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = tk({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r
        });
    eU.eachConnection((e) => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers));
}
function nR(e) {
    let { enabled: t } = e;
    tk({ qos: t }), eU.eachConnection((e) => e.setQoS(t));
}
function nP() {
    tj();
}
function nw(e) {
    let { inputDetected: t } = e;
    (e6 = t), !e8 && e6 && ((e8 = !0), tx.update());
}
function nD(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === eQ) return !1;
    (eQ = n), eU.eachConnection(tS);
}
function nL(e) {
    let { state: t, permissionType: n } = e,
        r = t === e_.PQ.ACCEPTED;
    switch (n) {
        case e_.Eu.AUDIO:
            (tc = !0), eU.eachConnection(tS);
            break;
        case e_.Eu.CAMERA:
            !r && eJ && tN(!1);
            break;
        default:
            return !1;
    }
}
function nx() {
    return tt || !1;
}
async function nM() {
    try {
        await ee.ZP.ensureModule('discord_krisp'), ee.ZP.requireModule('discord_krisp'), (tt = !0), r.emitChange();
    } catch (t) {
        ev.warn('Failed to load Krisp module: '.concat(t.message)), $.Z.captureException(t);
        let e = eh.H3.INITIALIZED;
        if (t.message.includes(': ')) {
            let n = parseInt(t.message.substring(t.message.indexOf(': ') + 1));
            e = isNaN(n) || 0 === n ? eh.H3.INITIALIZED : n;
        }
        z.default.track(ed.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), tk({ noiseCancellation: !1 });
    } finally {
        te = !1;
    }
}
function nk() {
    return (0, X.isWindows)() || (0, X.isLinux)() || ((0, X.isMac)() && _().satisfies(null === y.Z || void 0 === y.Z ? void 0 : y.Z.os.release, ex));
}
function nj() {
    !nk() || __OVERLAY__ || te || tt ? ((0, X.isWeb)() && eU.supports(eh.AN.NOISE_CANCELLATION) ? ((tt = !0), r.emitChange()) : (0, X.isWeb)() && tk({ noiseCancellation: !1 })) : ((te = !0), nM());
}
function nU(e) {
    let { enabled: t } = e;
    z.default.track(ed.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != tn ? tn : null,
        enabled: t
    }),
        tk({ voiceFilterPlaybackEnabled: t });
}
function nG(e) {
    let { newVoiceFilterId: t } = e;
    tk({ mostRecentlyRequestedVoiceFilter: t }), eU.eachConnection((e) => e.setVoiceFilterId(t));
}
function nB() {
    tk({ mostRecentlyRequestedVoiceFilter: null });
}
function nV(e) {
    let { voiceFilterId: t } = e;
    (ti = tn), (to = tr), (tn = t), (tr = null === t ? null : Date.now());
}
function nF(e) {
    nZ(e.subsystem);
}
function nZ(e) {
    e === eh.iA.AUTOMATIC ? (tk({ automaticAudioSubsystem: !0 }), nH()) : (tk({ automaticAudioSubsystem: !1 }), eU.setAudioSubsystem(e));
}
function nH() {
    let { enabled: e } = j.I.getCurrentConfig({ location: 'interpretAutomaticAudioSubsystem' });
    e ? eU.queueAudioSubsystem(eh.iA.EXPERIMENTAL) : eU.queueAudioSubsystem(eh.iA.STANDARD);
}
function nW(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && tN(i, null), null != t || null == n)) {
        e9 = !1;
        return;
    }
    if (e9) return;
    e9 = !0;
    let o = tv();
    (o.mute || o.deaf) &&
        (tk({
            deaf: !1,
            mute: !1
        }),
        eU.eachConnection(tS));
}
function nY(e) {
    let { application: t } = e;
    eB.add(t.id);
}
function nK(e) {
    let { application: t } = e;
    eB.delete(t.id);
}
function nz(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case 'audio':
                (eV = !1), eU.eachConnection(tS);
                break;
            case 'video':
                tN(!1);
        }
}
function nq(e) {
    (eV = e.enabled),
        e.unmute &&
            tk({
                mute: !1,
                deaf: !1
            }),
        eU.eachConnection(tS);
}
function nQ(e) {
    let { enabled: t } = e;
    Z.Z.requestPermission(e_.Eu.CAMERA), tN(t);
}
function nX(e) {
    let { sourceId: t, applicationName: n, quality: i } = e,
        o = I.Z.isDecoupledGameClippingEnabled(),
        s = I.Z.getSettings().decoupledClipsEnabled;
    if (!o || !s || null == y.Z) return;
    let l = null,
        c = null,
        u = q.Z.getPidFromDesktopSource(t);
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
    null != a && a.desktopSource.id !== d.desktopSource.id && (eU.setClipsSource(null), (0, X.isWindows)() && null != a.desktopSource.soundshareId && v.pn(a.desktopSource.soundshareId)), null != l && tz(l, c), (a = d);
    let f = ty(),
        _ = tv().videoHook;
    eU.setClipsSource({
        desktopDescription: {
            id: a.desktopSource.id,
            soundshareId: a.desktopSource.soundshareId,
            useVideoHook: _,
            useGraphicsCapture: tw(),
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: tD(),
            videoHookStaleFrameTimeoutMs: eP,
            graphicsCaptureStaleFrameTimeoutMs: ew,
            hdrCaptureMode: f
        },
        quality: i,
        applicationName: n
    });
}
function nJ(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((a = null), eU.setClipsSource(null));
}
function n$(e) {
    var t, n, r, i;
    let { settings: o } = e;
    if ((null == o ? void 0 : o.desktopSettings) != null) {
        let e = null,
            r = null,
            { sourceId: i, sound: a } = o.desktopSettings,
            s = null != (t = o.context) ? t : eh.Yn.DEFAULT,
            l =
                null != (n = o.qualityOptions)
                    ? n
                    : {
                          resolution: 720,
                          frameRate: 30
                      },
            c = !1 === a ? null : q.Z.getPidFromDesktopSource(i);
        X.isPlatformEmbedded && !0 === a && (({ soundshareId: e, soundshareSession: r } = tK(c)), null != e && tz(e, r)),
            tT(s),
            tN(s === eh.Yn.STREAM && eJ, {
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
        let e = null != (r = o.context) ? r : eh.Yn.DEFAULT,
            { videoDeviceGuid: t, audioDeviceGuid: n } = o.cameraSettings,
            a = e === eh.Yn.STREAM && eJ,
            s =
                null != (i = o.qualityOptions)
                    ? i
                    : {
                          resolution: 720,
                          frameRate: 30
                      };
        tN(a, {
            cameraSource: {
                videoDeviceGuid: t,
                audioDeviceGuid: n
            },
            quality: {
                resolution: s.resolution,
                frameRate: s.frameRate
            }
        });
    } else tN(eJ, null);
}
function n0(e) {
    let { section: t } = e;
    return t === ed.oAB.VOICE && tG(), !1;
}
function n1() {
    return eU.eachConnection(tR), !1;
}
function n2(e) {
    let { enabled: t } = e,
        n = tk({ openH264: t });
    eU.setH264Enabled(n.hardwareEncoding || n.openH264),
        eU.eachConnection((e) => {
            var t;
            return e.setSoftwareH264(null == (t = n.openH264) || t);
        });
}
function n3(e) {
    let { enabled: t } = e,
        n = tk({ aecDumpEnabled: t });
    eU.setAecDump(n.aecDumpEnabled);
}
function n4(e) {
    let { state: t } = e,
        n = R.Z.isEnabled();
    if (t === ed.$7l.BACKGROUND && eJ && !n) (e4 = !0), tN(!1);
    else {
        if (t !== ed.$7l.ACTIVE || !e4) return !1;
        (e4 = !1), tN(!0);
    }
    return !0;
}
function n5(e) {
    eU.eachConnection((t) => t.setBitRate(e.bitrate));
}
function n6() {
    if ((!eJ && null == o) || null != es.Z.getRTCConnectionId()) return !1;
    tN(!1, null);
}
function n8() {
    return !!ts && ((ts = !1), !0);
}
function n7(e) {
    eU.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function n9(e) {
    let { settings: t } = e;
    eU.applyMediaFilterSettings(t).finally(() => {
        (tl = !1), r.emitChange();
    });
}
function re() {
    tl = !0;
}
function rt() {
    tl = !1;
}
function rn(e) {
    tm = e.enabled;
}
class rr extends (s = h.ZP.Store) {
    initialize() {
        tP(),
            tM(),
            nj(),
            t7(),
            (tp = {
                [eh.AN.VIDEO]: eU.supports(eh.AN.VIDEO),
                [eh.AN.DESKTOP_CAPTURE]: eU.supports(eh.AN.DESKTOP_CAPTURE),
                [eh.AN.HYBRID_VIDEO]: eU.supports(eh.AN.HYBRID_VIDEO)
            }),
            this.waitFor(en.default, ei.Z, eo.Z, ea.Z, es.Z, P.ZP, Z.Z.storage, W.Z, C.Z, I.Z);
    }
    supports(e) {
        return eU.supports(e);
    }
    supportsInApp(e) {
        return tp[e] || eU.supports(e);
    }
    isSupported() {
        return eU.supported();
    }
    isExperimentalEncodersSupported() {
        return eU.supports(eh.AN.EXPERIMENTAL_ENCODERS);
    }
    isNoiseSuppressionSupported() {
        return eU.supports(eh.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return nx();
    }
    isNoiseCancellationError() {
        return ts;
    }
    isAutomaticGainControlSupported() {
        return eU.supports(eh.AN.AUTOMATIC_GAIN_CONTROL);
    }
    isAdvancedVoiceActivitySupported() {
        return nx();
    }
    isAecDumpSupported() {
        return eU.supports(eh.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return eU.supports(eh.AN.VIDEO) && eU.supports(eh.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        let t = (null == (e = eo.Z.getChannel(ta)) ? void 0 : e.type) === ed.d4z.GUILD_STAGE_VOICE,
            n = r.getHardwareEncoding();
        return !t && n && M.Z.simulcastEnabled();
    }
    getAecDump() {
        return tv().aecDumpEnabled;
    }
    getMediaEngine() {
        return eU;
    }
    getVideoComponent() {
        return eU.Video;
    }
    getCameraComponent() {
        return eU.Camera;
    }
    isEnabled() {
        return eV;
    }
    isMute() {
        return this.isSelfMute() || ez;
    }
    isDeaf() {
        return this.isSelfDeaf() || eX;
    }
    hasContext(e) {
        return null != eG[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
        return e === eh.Yn.DEFAULT && eq;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
        return !this.isEnabled() || tv(e).mute || !Z.Z.didHavePermission(e_.Eu.AUDIO) || this.isSelfDeaf(e) || (e === eh.Yn.DEFAULT && eQ);
    }
    shouldSkipMuteUnmuteSound() {
        return e0;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        e0 = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && ei.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return tm;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
        return !this.isSupported() || tv(e).deaf;
    }
    isVideoEnabled() {
        return eJ && e5;
    }
    isVideoAvailable() {
        return Object.values(eK).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.STREAM;
        return eZ === e && null != o;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.STREAM;
        return eZ === t && null != o && (null == (e = o.desktopSource) ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT;
        return e !== en.default.getId() && (tv(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return eU.supports(eh.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT;
        return null != (t = tv(n).disabledLocalVideos[e]) && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT;
        return null != (t = tv(n).videoToggleStateMap[e]) ? t : ed.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT;
        return t === eh.Yn.DEFAULT && td.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
        return e === eh.Yn.DEFAULT && td.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tl;
    }
    isNativeAudioPermissionReady() {
        return tc;
    }
    getGoLiveSource() {
        return o;
    }
    getGoLiveContext() {
        return eZ;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return eH;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT,
            n = tv(t).localPans[e];
        return null != n ? n : eR;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT,
            n = t === eh.Yn.STREAM ? eh.Yh : eh.Qx,
            r = tv(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return tv().inputVolume;
    }
    getOutputVolume() {
        return tv().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
        return tv(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
        return tv(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return tn;
    }
    getActiveVoiceFilterAppliedAt() {
        return tr;
    }
    getPreviousVoiceFilter() {
        return ti;
    }
    getPreviousVoiceFilterAppliedAt() {
        return to;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return tv().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return tv().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            d().each(eG, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i }
                } = t;
                r === ed.pM4.PUSH_TO_TALK && eB.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return tF(eW, tv().inputDeviceId);
    }
    getOutputDeviceId() {
        return tF(eY, tv().outputDeviceId);
    }
    getVideoDeviceId() {
        return tF(eK, tv().videoDeviceId);
    }
    getInputDevices() {
        return eW;
    }
    getOutputDevices() {
        return eY;
    }
    getVideoDevices() {
        return eK;
    }
    getEchoCancellation() {
        let e = tv();
        return ei.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return tv().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return tv().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return tv().h265Enabled;
    }
    getLoopback() {
        return t_.size > 0;
    }
    getLoopbackReasons() {
        return t_;
    }
    getNoiseSuppression() {
        let e = tv();
        return ei.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tv();
        return ei.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getNoiseCancellation() {
        return tv().noiseCancellation;
    }
    getExperimentalEncoders() {
        return tv().experimentalEncoders;
    }
    getHardwareEncoding() {
        var e;
        return null == (e = tv().hardwareEncoding) || e;
    }
    getEnableSilenceWarning() {
        return tv().silenceWarning;
    }
    getDebugLogging() {
        return eU.getDebugLogging();
    }
    getQoS() {
        return tv().qos;
    }
    getAttenuation() {
        return tv().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return tv().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return tv().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return tL() && tv().automaticAudioSubsystem ? eh.iA.AUTOMATIC : eU.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return eU.getMLSSigningKey(e, t);
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
        return tv(e);
    }
    getState() {
        return {
            settingsByContext: eG,
            inputDevices: eW,
            outputDevices: eY,
            appSupported: tp,
            krispModuleLoaded: tt,
            goLiveSource: o,
            goLiveContext: eZ
        };
    }
    getInputDetected() {
        return e6;
    }
    getNoInputDetectedNotice() {
        return e7;
    }
    getPacketDelay() {
        return X.isPlatformEmbedded || this.getMode() !== ed.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        eU.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return eF;
    }
    getVideoHook() {
        return tv().videoHook;
    }
    supportsVideoHook() {
        return eU.supports(eh.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tv().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e);
    }
    supportsExperimentalSoundshare() {
        return eU.supports(eh.AN.EXPERIMENTAL_SOUNDSHARE) && _().satisfies(null === y.Z || void 0 === y.Z ? void 0 : y.Z.os.release, ef.I9);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = tv().useSystemScreensharePicker,
            n =
                (0, X.isLinux)() ||
                k.Z.getCurrentConfig(
                    { location: 'getUseSystemScreensharePicker' },
                    {
                        disable: !e,
                        autoTrackExposure: !1
                    }
                ).useSystemPickerInModalByDefault;
        return e && (null != t ? t : n);
    }
    supportsSystemScreensharePicker() {
        let e = eU.supports(eh.AN.NATIVE_SCREENSHARE_PICKER);
        return k.Z.getCurrentConfig(
            { location: 'supportsSystemScreensharePicker' },
            {
                disable: !e,
                autoTrackExposure: !1
            }
        ).enableSystemPicker;
    }
    getOpenH264() {
        return tv().openH264;
    }
    getEverSpeakingWhileMuted() {
        return e1;
    }
    getSpeakingWhileMuted() {
        return e2;
    }
    hasActiveCallKitCall() {
        return tg;
    }
    setHasActiveCallKitCall(e) {
        tg = e;
    }
    supportsScreenSoundshare() {
        return (0, X.isMac)() ? eU.supports(eh.AN.SOUNDSHARE) && _().satisfies(null === y.Z || void 0 === y.Z ? void 0 : y.Z.os.release, ef.yG) && tD() : (0, X.isWindows)() ? eU.supports(eh.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, X.isLinux)() && eU.supports(eh.AN.SCREEN_SOUNDSHARE);
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT,
            t = this.supports(eh.AN.VIDEO)
                ? [
                      {
                          rid: '100',
                          type: e === eh.Yn.DEFAULT ? eh.Tr.VIDEO : eh.Tr.SCREEN,
                          quality: eh.y7
                      }
                  ]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === eh.Yn.DEFAULT || this.goLiveSimulcastEnabled()) &&
                t.push({
                    rid: '50',
                    type: e === eh.Yn.DEFAULT ? eh.Tr.VIDEO : eh.Tr.SCREEN,
                    quality: eh.LD
                }),
            t
        );
    }
    getSupportedSecureFramesProtocolVersion() {
        let e = eU.getSupportedSecureFramesProtocolVersion(),
            t = U.m.getCurrentConfig({ location: 'MediaEngineStore' });
        return 114 === e && (e = 1), t.canSupportDaveProtocol && e >= t.protocolVersionFloor ? e : 0;
    }
    hasClipsSource() {
        return null != a;
    }
    getGpuBrand() {
        return th;
    }
}
function ri(e) {
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
eg(rr, 'displayName', 'MediaEngineStore');
let ro = (r = new rr(b.Z, {
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
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: nN,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: nA,
    AUDIO_SET_ATTENUATION: nC,
    AUDIO_SET_QOS: nR,
    MEDIA_ENGINE_DEVICES: nl,
    AUDIO_VOLUME_CHANGE: nc,
    AUDIO_RESET: nP,
    AUDIO_INPUT_DETECTED: nw,
    AUDIO_SET_SUBSYSTEM: nF,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: nq,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: nQ,
    MEDIA_ENGINE_PERMISSION: nz,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: n$,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: na,
    MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nv,
    MEDIA_ENGINE_INTERACTION_REQUIRED: ns,
    USER_SETTINGS_MODAL_INIT: n0,
    USER_SETTINGS_MODAL_SET_SECTION: n0,
    CERTIFIED_DEVICES_SET: n1,
    RPC_APP_CONNECTED: nY,
    RPC_APP_DISCONNECTED: nK,
    OVERLAY_INITIALIZE: tQ,
    MEDIA_ENGINE_SET_OPEN_H264: n2,
    MEDIA_ENGINE_SET_HARDWARE_ENCODING: nO,
    APP_STATE_UPDATE: n4,
    SET_CHANNEL_BITRATE: n5,
    SET_VAD_PERMISSION: nD,
    SET_NATIVE_PERMISSION: nL,
    SET_CHANNEL_VIDEO_QUALITY_MODE: n7,
    MEDIA_ENGINE_SET_AEC_DUMP: n3,
    CHANNEL_DELETE: n6,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: n8,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: n9,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: re,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rt,
    USER_SETTINGS_PROTO_UPDATE: t3,
    CLIPS_INIT: nX,
    CLIPS_SETTINGS_UPDATE: nJ,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rn,
    VOICE_FILTER_REQUEST_SWITCH: nG,
    VOICE_FILTER_LOOPBACK_TOGGLE: nU,
    VOICE_FILTER_APPLIED: nV,
    VOICE_FILTER_DOWNLOAD_FAILED: nB,
    VOICE_FILTER_APPLY_FAILED: nB
}));
