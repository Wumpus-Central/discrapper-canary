let r, i, o, a;
n.d(t, { Z: () => n8 }), n(47120), n(301563), n(571269), n(298267), n(266796), n(773603), n(653041), n(337869);
var s,
    l = n(512722),
    c = n.n(l),
    u = n(392711),
    d = n.n(u),
    f = n(209739),
    _ = n.n(f),
    p = n(404097),
    h = n(442837),
    g = n(46973),
    m = n(433517),
    E = n(846519),
    v = n(570140),
    b = n(579806),
    y = n(887278),
    O = n(547727),
    S = n(435064),
    I = n(779618),
    T = n(710845),
    N = n(535911),
    A = n(353926),
    C = n(646047),
    R = n(594190),
    P = n(502286),
    D = n(12898),
    w = n(355552),
    L = n(294473),
    x = n(706629),
    M = n(166884),
    k = n(998594),
    j = n(14457),
    U = n(529558),
    G = n(111672),
    B = n(441167),
    V = n(338336),
    F = n(751571),
    Z = n(725380),
    H = n(581883),
    W = n(743498),
    Y = n(875527),
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
function em(e) {
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
function ev(e, t) {
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
let eb = new T.Z('MediaEngineStore'),
    ey = 'MediaEngineStore',
    eO = 4,
    eS = 1,
    eI = 1,
    eT = 1,
    eN = 1,
    eA = 2,
    eC = {
        left: 1,
        right: 1
    },
    eR = 500,
    eP = 5 * q.Z.Millis.SECOND,
    eD = -60,
    ew = 100,
    eL = '>=21.0.0',
    ex = 2 * q.Z.Millis.SECOND;
function eM() {
    return {
        mode: eu.pM4.VOICE_ACTIVITY,
        modeOptions: {
            threshold: eD,
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
        videoHook: ek.supports(ep.AN.VIDEO_HOOK),
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
let ek = (0, g.Mt)((0, g.jj)());
eb.enableNativeLogger(!0);
let ej = {},
    eU = new Set([ep.Yn.DEFAULT]),
    eG = ek.supports(ep.AN.AUTO_ENABLE),
    eB = !1,
    eV = ep.Yn.STREAM,
    eF = { [ep.w5]: tM('No Input Devices') },
    eZ = { [ep.w5]: tM('No Output Devices') },
    eH = { [ep.w5]: tM('No Video Devices') },
    eW = !1,
    eY = !1,
    eK = !1,
    ez = !1,
    eq = !1,
    eQ = ep.Av,
    eX = !1,
    eJ = !1,
    e$ = !1,
    e0 = new E.V7(),
    e1 = !1,
    e2 = !1,
    e3 = null,
    e4 = !1,
    e6 = !1,
    e5 = !1,
    e7 = !1,
    e8 = !1,
    e9 = null,
    te = null,
    tt = null,
    tn = null,
    tr = null,
    ti = !1,
    to = !1,
    ta = !1;
F.Z.hasPermission(ef.Eu.AUDIO, { showAuthorizationError: !1 }), F.Z.hasPermission(ef.Eu.CAMERA, { showAuthorizationError: !1 });
let ts = !1,
    tl = new Set(),
    tc = ts,
    tu = new Set(),
    td = {},
    tf = null,
    t_ = !0,
    tp = {},
    th = 5 * q.Z.Millis.SECOND;
function tg() {
    var e, t;
    return null !== (t = null === (e = el.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t ? 'always' : X.Z === p.R.CANARY ? 'permittedDevicesOnly' : 'never';
}
function tm() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT,
        t = ej[e];
    return null == t && ((t = eM()), (ej[e] = t)), t;
}
function tE(e) {
    let t = tm(e.context);
    e.setInputMode(t.mode, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: t.modeOptions.autoThreshold,
        vadUseKrisp: t.modeOptions.vadUseKrisp && nC(),
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        pttReleaseDelay: t.modeOptions.delay
    });
}
function tv(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Qx;
    return d().clamp(e, 0, t);
}
function tb(e) {
    let t = tm(e.context),
        n = !eG || t.mute || t.deaf;
    e.context === ep.Yn.DEFAULT ? (n = n || eW || eY || eK || !F.Z.didHavePermission(ef.Eu.AUDIO)) : e.context === ep.Yn.STREAM && (n = !0), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === ep.Yn.DEFAULT && O.Z.updateNativeMute();
}
function ty(e) {
    e !== eV && (null != o && ek.setGoLiveSource(null, eV), (eV = e));
}
function tO() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq,
        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
        s = o;
    if (((null == s ? void 0 : s.desktopSource) != null && s.desktopSource.id !== (null == a ? void 0 : null === (e = a.desktopSource) || void 0 === e ? void 0 : e.id) && (null != s.desktopSource.soundshareId && (0, Q.isWindows)() && y.pn(s.desktopSource.soundshareId), ek.setGoLiveSource(null, eV)), (null == s ? void 0 : s.cameraSource) != null && (s.cameraSource.videoDeviceGuid !== (null == a ? void 0 : null === (t = a.cameraSource) || void 0 === t ? void 0 : t.videoDeviceGuid) || s.cameraSource.audioDeviceGuid !== (null == a ? void 0 : null === (n = a.cameraSource) || void 0 === n ? void 0 : n.audioDeviceGuid)) && ek.setGoLiveSource(null, eV), (eq || i) && ((eQ = (eq = i) ? tj(eH, tm().videoDeviceId) : ep.Av), ek.setVideoInputDevice(eQ)), (o = a), null != a)) {
        let e = {
            resolution: a.quality.resolution,
            frameRate: a.quality.frameRate
        };
        if (null != a.desktopSource) {
            let t = tg(),
                n = tm().videoHook;
            ek.setGoLiveSource(
                {
                    desktopDescription: {
                        id: a.desktopSource.id,
                        soundshareId: a.desktopSource.soundshareId,
                        useVideoHook: n,
                        useGraphicsCapture: tN(),
                        useLoopback: r.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: tA(),
                        videoHookStaleFrameTimeoutMs: eR,
                        graphicsCaptureStaleFrameTimeoutMs: eP,
                        hdrCaptureMode: t
                    },
                    quality: e
                },
                eV
            );
        }
        null != a.cameraSource &&
            ek.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: a.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: a.cameraSource.audioDeviceGuid
                    },
                    quality: e
                },
                eV
            );
    }
}
function tS(e, t, n, r) {
    var i;
    let o = null !== (i = null == e ? void 0 : e.soundshareSession) && void 0 !== i ? i : '';
    null == tp[o] && (tp[o] = new Set());
    let a = null != t && !tp[o].has(t);
    a && tp[o].add(t),
        (null == t || a) &&
            K.default.track(
                eu.rMx.SOUNDSHARE_FAILED,
                em(
                    {
                        soundshare_failure_code: t,
                        soundshare_failure_reason: n,
                        soundshare_failure_will_retry: r
                    },
                    (0, P.Z)(e)
                )
            );
}
function tI(e) {
    let t = tm(),
        n = t.inputDeviceId;
    if ((e.setEchoCancellation(er.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(er.Z.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(er.Z.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), e.setVoiceFiltersEnabled(null !== e9), (0, Q.isWeb)())) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function tT() {
    ek.on(g.aB.Connection, (e) => {
        var t, n, i, a;
        tE(e), tb(e), tI(e);
        let s = tm();
        e.setAttenuation(s.attenuation, s.attenuateWhileSpeakingSelf, s.attenuateWhileSpeakingOthers), e.setQoS(s.qos), e.setExperimentalEncoders(s.experimentalEncoders), e.setHardwareH264(null === (t = s.hardwareEncoding) || void 0 === t || t), e.setSoftwareH264(null === (n = s.openH264) || void 0 === n || n);
        let l = ea.Z.getGuildId(),
            { muteBeforeProcessing: c, pttBeforeProcessing: u, skipEncode: d } = (null != l ? x.Z : L.Z).getCurrentConfig(em({ location: 'setupMediaEngine' }, null != l && { guildId: l }), { autoTrackExposure: !0 });
        c && e.setExperimentFlag(ep.V8.MUTE_BEFORE_PROCESSING, !0), u && e.setExperimentFlag(ep.V8.PTT_BEFORE_PROCESSING, !0), d && e.setExperimentFlag(ep.V8.SKIP_ENCODE, !0);
        let f = !1,
            _ = !0;
        if ((e.setExperimentFlag(ep.V8.RESET_DECODER_ON_ERRORS, !0), f && e.setExperimentFlag(ep.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0), _ && e.setExperimentFlag(ep.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0), e.context === ep.Yn.STREAM)) {
            let { simulcastEnabled: t, lqStreamBitrate: n } = M.Z.getConfig();
            e.configureGoLiveSimulcast(t, n);
        }
        (0, Q.isWindows)() ? ((null == tf ? void 0 : tf.startsWith('NVIDIA')) ? e.setExperimentFlag(ep.V8.SIGNAL_AV1, !0) : (null == tf ? void 0 : tf.startsWith('AMD')) && parseInt(null !== (a = null === (i = tf.match(/\d+/)) || void 0 === i ? void 0 : i.at(0)) && void 0 !== a ? a : '0', 10) >= 9000 && D.Z.getCurrentConfig({ location: 'setupMediaEngine' }, { autoTrackExposure: !0 }).signalAV1Support ? e.setExperimentFlag(ep.V8.SIGNAL_AV1, !0) : e.setExperimentFlag(ep.V8.SIGNAL_AV1_DECODE, !0)) : ((0, Q.isMac)() || (0, Q.isLinux)()) && e.setExperimentFlag(ep.V8.SIGNAL_AV1_DECODE, !0), (0, Q.isWindows)() && e.setExperimentFlag(ep.V8.SIGNAL_AV1_HARDWARE_DECODE, !0), ek.setHasFullbandPerformance((0, N.Z)());
        let h = (0, w.D)('setupMediaEngine').enabled;
        if ((e.setRemoteAudioHistory(1000 * !!h), (0, I.Z)(r))) {
            let t = S.Z.getSettings();
            e.setExperimentFlag(ep.V8.STREAMER_CLIP, t.clipsEnabled);
            let { enableViewerClipping: n } = B.Z.getCurrentConfig({ location: 'f627ab_15' }, { autoTrackExposure: !1 });
            e.setViewerSideClip(n), e.setClipsKeyFrameInterval(ep.ux);
        }
        for (let t of ((s = tm(e.context)), e.setPostponeDecodeLevel(ew), Object.keys(s.localMutes))) t !== et.default.getId() && e.setLocalMute(t, s.localMutes[t]);
        for (let t of Object.keys(s.localVolumes)) t !== et.default.getId() && e.setLocalVolume(t, s.localVolumes[t]);
        for (let t of Object.keys(s.localPans)) {
            let n = s.localPans[t];
            e.setLocalPan(t, n.left, n.right);
        }
        for (let t of Object.keys(s.disabledLocalVideos)) e.setLocalVideoDisabled(t, s.disabledLocalVideos[t]);
        e.on(g.Sh.Speaking, (t, n) => {
            v.Z.dispatch({
                type: 'SPEAKING',
                context: e.context,
                userId: t,
                speakingFlags: n
            });
        }),
            e.context === ep.Yn.DEFAULT &&
                ((eJ = !1),
                (e$ = !1),
                e.on(g.Sh.SpeakingWhileMuted, () => {
                    (eJ = !0),
                        (e$ = !0),
                        r.emitChange(),
                        e0.stop(),
                        e0.start(ex, () => {
                            (e$ = !1), r.emitChange();
                        });
                })),
            e.on(g.Sh.DesktopSourceEnd, () => {
                v.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                    settings: { context: e.context }
                });
            }),
            e.on(g.Sh.SoundshareAttached, () => {
                (null == o ? void 0 : o.desktopSource) != null && K.default.track(eu.rMx.SOUNDSHARE_ATTACHED, (0, P.Z)(null == o ? void 0 : o.desktopSource));
            }),
            e.on(g.Sh.SoundshareFailed, (e) => {
                let { failureCode: t, failureReason: n, willRetry: r } = e;
                tS(null == o ? void 0 : o.desktopSource, t, n, r);
            }),
            e.on(g.Sh.SoundshareSpeaking, () => {
                (null == o ? void 0 : o.desktopSource) != null && (K.default.track(eu.rMx.SOUNDSHARE_TRANSMITTING, (0, P.Z)(null == o ? void 0 : o.desktopSource)), null != eo.Z.getHookError(eu.K3D.SOUND) && v.Z.wait(() => v.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
            });
        let m = new E.V7();
        e.on(g.Sh.SoundshareTrace, (e) => {
            switch (e.type) {
                case 'soundshare_attach_requested':
                    m.start(th, () => {
                        v.Z.dispatch({
                            type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
                            errorMessage: 'Sound Hook Failed'
                        });
                    });
                    break;
                case 'soundshare_recv_failed':
                    let t = e.reason,
                        n = e.code,
                        r = e.retry;
                    (null == o ? void 0 : o.desktopSource) == null ||
                        (tS(null == o ? void 0 : o.desktopSource, n, t, r),
                        r ||
                            (m.stop(),
                            v.Z.wait(() =>
                                v.Z.dispatch({
                                    type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
                                    errorMessage: t,
                                    errorCode: n
                                })
                            )));
                    break;
                case 'soundshare_state_transition':
                    4 === e.newState && (m.stop(), v.Z.wait(() => v.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
            }
        }),
            e.on(g.Sh.InteractionRequired, (e) => {
                v.Z.dispatch({
                    type: 'MEDIA_ENGINE_INTERACTION_REQUIRED',
                    required: e
                });
            }),
            e.on(g.Sh.VideoHookInitialize, (e, t, n, r, i, a) => {
                (null == o ? void 0 : o.desktopSource) != null &&
                    K.default.track(
                        eu.rMx.VIDEOHOOK_INITIALIZED,
                        em(
                            {
                                backend: e,
                                format: t,
                                framebuffer_format: n,
                                sample_count: r,
                                success: i,
                                reinitialization: a
                            },
                            (0, P.Z)(null == o ? void 0 : o.desktopSource)
                        )
                    );
            }),
            e.on(g.Sh.NoiseCancellationError, (e) => {
                eb.warn('noisecancellererror event: '.concat(e)),
                    (ti = !0),
                    K.default.track(eu.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
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
                    });
            }),
            e.on(g.Sh.VoiceActivityDetectorError, (e) => {
                eb.warn('voiceactivitydetectorerror event: '.concat(e)),
                    K.default.track(eu.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    v.Z.dispatch({
                        type: 'AUDIO_SET_MODE',
                        context: ep.Yn.DEFAULT,
                        mode: eu.pM4.VOICE_ACTIVITY,
                        options: ev(em({}, tm(ep.Yn.DEFAULT).modeOptions), { vadUseKrisp: !1 })
                    }),
                    v.Z.dispatch({
                        type: 'MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR',
                        code: e
                    });
            }),
            e.on(g.Sh.SdpError, (e, t, n, r) => {
                X.Z === p.R.CANARY &&
                    K.default.track(eu.rMx.SDP_ERROR, {
                        operation: e,
                        error: t,
                        type: n,
                        sdp: r
                    });
            }),
            e.on(g.Sh.VideoState, (t) => {
                v.Z.dispatch({
                    type: 'MEDIA_ENGINE_VIDEO_STATE_CHANGED',
                    videoState: t,
                    context: e.context
                });
            }),
            e.on(g.Sh.Destroy, () => {
                m.stop();
            }),
            e.setBitRate(en.Z.bitrate),
            e.applyVideoQualityMode(ec.Z.mode);
    }),
        ek.on(g.aB.DeviceChange, (e, t, n) => {
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_DEVICES',
                inputDevices: e,
                outputDevices: t,
                videoDevices: n
            });
        }),
        ek.on(g.aB.VolumeChange, (e, t) => {
            v.Z.dispatch({
                type: 'AUDIO_VOLUME_CHANGE',
                inputVolume: e,
                outputVolume: t
            });
        }),
        ek.on(g.aB.DesktopSourceEnd, () => {
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                settings: null
            });
        }),
        ek.on(g.aB.AudioPermission, (e) => {
            (ta = !0),
                v.Z.dispatch({
                    type: 'MEDIA_ENGINE_PERMISSION',
                    kind: 'audio',
                    granted: e
                });
        }),
        ek.on(g.aB.VideoPermission, (e) => {
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_PERMISSION',
                kind: 'video',
                granted: e
            });
        }),
        ek.on(g.aB.WatchdogTimeout, async () => {
            let e;
            try {
                await z.Z.submitLiveCrashReport({ message: { message: 'Voice Watchdog Timeout' } });
            } catch (t) {
                'number' == typeof t.status && (e = t.status);
            }
            eb.warn('Watchdog timeout, report submission status: '.concat(null != e ? e : 200)), K.default.track(eu.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        ek.on(g.aB.VideoInputInitialized, (e) => {
            K.default.track(eu.rMx.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * q.Z.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: ea.Z.getMediaSessionId(),
                rtc_connection_id: ea.Z.getRTCConnectionId()
            });
        }),
        ek.on(g.aB.AudioInputInitialized, (e) => {
            K.default.track(eu.rMx.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * q.Z.Millis.SECOND),
                rtc_connection_id: ea.Z.getRTCConnectionId()
            });
        }),
        ek.on(g.aB.ClipsRecordingRestartNeeded, () => {
            v.Z.dispatch({ type: 'CLIPS_RESTART' });
        }),
        ek.on(g.aB.ClipsInitFailure, (e, t) => {
            v.Z.wait(() => {
                v.Z.dispatch({
                    type: 'CLIPS_INIT_FAILURE',
                    errMsg: e,
                    applicationName: t
                });
            });
        }),
        ek.on(g.aB.ClipsRecordingEnded, (e, t) => {
            var n, r;
            (null == a ? void 0 : null === (n = a.desktopSource) || void 0 === n ? void 0 : n.id) === e && (null != t && (null == o ? void 0 : null === (r = o.desktopSource) || void 0 === r ? void 0 : r.soundshareId) !== t && y.pn(t), (a = null));
        }),
        ek.on(g.aB.NativeScreenSharePickerUpdate, (e) => {
            k.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerUpdate' }),
                v.Z.dispatch({
                    type: 'NATIVE_SCREEN_SHARE_PICKER_UPDATE',
                    existing: e
                });
        }),
        ek.on(g.aB.NativeScreenSharePickerCancel, (e) => {
            k.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerCancel' }),
                v.Z.dispatch({
                    type: 'NATIVE_SCREEN_SHARE_PICKER_CANCEL',
                    existing: e
                });
        }),
        ek.on(g.aB.NativeScreenSharePickerError, (e) => {
            k.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerError' }),
                v.Z.dispatch({
                    type: 'NATIVE_SCREEN_SHARE_PICKER_ERROR',
                    error: e
                });
        }),
        ek.on(g.aB.AudioDeviceModuleError, (e, t, n) => {
            K.default.track(eu.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                audio_device_module: e,
                code: t,
                device_name: n
            });
        }),
        ek.setOnVideoContainerResized((e, t, n) => {
            v.Z.wait(() =>
                v.Z.dispatch({
                    type: 'VIDEO_SIZE_UPDATE',
                    streamId: e,
                    width: t,
                    height: n
                })
            );
        }),
        tR.reset(),
        (0, es.q)().then((e) => {
            null != e && (tf = e.gpu_brand);
        });
}
function tN() {
    return (0, Q.isWindows)() && _().satisfies(null === b.Z || void 0 === b.Z ? void 0 : b.Z.os.release, ed.nz);
}
function tA() {
    return (0, Q.isMac)() && ek.supports(ep.AN.SCREEN_CAPTURE_KIT) && _().satisfies(null === b.Z || void 0 === b.Z ? void 0 : b.Z.os.release, ed.C7);
}
function tC() {
    return (0, Q.isWindows)() && ek.supports(ep.AN.AUTOMATIC_AUDIO_SUBSYSTEM) && ek.supports(ep.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH);
}
let tR = new (class {
    start() {
        this.started || ((this.started = !0), ek.on(g.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            ek.removeListener(g.aB.Silence, this.handleSilence),
            v.Z.dispatch({
                type: 'AUDIO_INPUT_DETECTED',
                inputDetected: null
            }));
    }
    update() {
        let e = tm();
        !e4 && ea.Z.getState() === eu.hes.RTC_CONNECTED && e.mode === eu.pM4.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop();
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
                                    (v.Z.dispatch({
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
function tP() {
    var e;
    let t = m.K.get('audio');
    null != t && (m.K.set(ey, { [ep.Yn.DEFAULT]: t }), m.K.remove('audio')),
        (ej = null !== (e = m.K.get(ey)) && void 0 !== e ? e : {}),
        d().each(ej, (e) => {
            if ((d().defaultsDeep(e, eM()), null != e.modeOptions && 'string' == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, ee.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== eO && ((e.vadUseKrispSettingVersion = eO), (e.modeOptions.vadUseKrisp = !0)), e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)), !e.vadThrehsoldMigrated)) {
                var t;
                (e.vadThrehsoldMigrated = !0), (null === (t = e.modeOptions) || void 0 === t ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = eD);
            }
            (0, Q.isWeb)() ? e.ncUseKrispjsSettingVersion !== eI && ((e.ncUseKrispjsSettingVersion = eI), (e.noiseSuppression = !1), (e.noiseCancellation = !0)) : e.ncUseKrispSettingVersion !== eS && ((e.ncUseKrispSettingVersion = eS), (e.noiseSuppression = !1), (e.noiseCancellation = !0)), e.hardwareEnabledVersion !== eT && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = eT)), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
        }),
        tL();
}
function tD(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = tm(t);
    return Object.assign(r, e), !__OVERLAY__ && n && m.K.set(ey, ej), r;
}
function tw() {
    m.K.remove(ey), location.reload();
}
function tL() {
    var e, t, n;
    let r = tm();
    ek.setAudioInputDevice(r.inputDeviceId), ek.setAudioOutputDevice(r.outputDeviceId), tO(), ek.setInputVolume(r.inputVolume), ek.setOutputVolume(r.outputVolume), ek.setH264Enabled(null === (e = r.hardwareEncoding) || void 0 === e || e || r.openH264), ek.setAv1Enabled(null === (t = r.hardwareEncoding) || void 0 === t || t), ek.setH265Enabled(null === (n = r.hardwareEncoding) || void 0 === n || n), ek.setAecDump(r.aecDumpEnabled), ek.setSidechainCompression(r.sidechainCompression), ek.setSidechainCompressionStrength(r.sidechainCompressionStrength);
}
function tx() {
    eG ||
        ek.enable().then(() =>
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
                enabled: !0,
                unmute: !1
            })
        );
}
function tM(e) {
    return {
        id: ep.w5,
        index: 0,
        name: e,
        disabled: !0
    };
}
function tk(e, t) {
    if (0 === e.length) {
        let e = tM(t);
        return { [e.id]: e };
    }
    return d()(e)
        .map((e) => ({
            id: e.id,
            index: e.index,
            name: e.name,
            disabled: !1,
            facing: e.facing
        }))
        .keyBy('id')
        .value();
}
function tj(e, t) {
    var n;
    let r = null !== (n = e[t]) && void 0 !== n ? n : d()(e).values().first();
    return null != r ? r.id : t;
}
function tU(e) {
    let t = eF;
    if (((eF = tk(e, eh.NW.string(eh.t['/QIjDA']))), !d().isEqual(eF, t))) {
        let e = tm(),
            t = tj(eF, e.inputDeviceId);
        ek.setAudioInputDevice(t);
    }
}
function tG(e) {
    let t = eZ;
    if (((eZ = tk(e, eh.NW.string(eh.t.xlUg0t))), !d().isEqual(eZ, t))) {
        let e = tm(),
            t = tj(eZ, e.outputDeviceId);
        ek.setAudioOutputDevice(t);
    }
}
function tB(e) {
    e2 = e.length > 0;
    let t = eH;
    if (((eH = tk(e, eh.NW.string(eh.t.WKWARU))), eq && !d().isEqual(eH, t))) {
        var n;
        let e = void 0 !== eH[eQ],
            r = eQ === ep.w5 && (null === (n = t[ep.w5]) || void 0 === n ? void 0 : n.disabled);
        tO(e || r);
    }
}
function tV() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        r =
            null !== (e = H.Z.settings.audioContextSettings) && void 0 !== e
                ? e
                : {
                      user: {},
                      stream: {}
                  };
    for (let e of Object.keys(r)) {
        let i = e === e_.u0.USER ? ep.Yn.DEFAULT : ep.Yn.STREAM,
            o = i === ep.Yn.STREAM ? ep.Yh : ep.Qx,
            a = null !== (t = r[e]) && void 0 !== t ? t : {},
            { localMutes: s, localVolumes: l } = tm(i);
        for (let [e, t] of Object.entries(a))
            null == (0, Z.Ky)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== o ? (l[e] = t.volume) : delete l[e],
                ek.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (n)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == a[e] &&
                    (delete s[e],
                    delete l[e],
                    ek.eachConnection((t) => {
                        t.setLocalVolume(e, o), t.setLocalMute(e, !1);
                    }, i));
        tD(
            {
                localMutes: s,
                localVolumes: l
            },
            i
        );
    }
}
function tF(e) {
    if (null == r)
        return (
            eb.info('Error: trying to get soundshare id before MediaEngineStore is instantiated.'),
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
function tZ(e, t) {
    (0, Q.isWindows)() &&
        y.YT(e, { soundshare_session: t }).then((t) => {
            null == t ||
                R.ZP.shouldContinueWithoutElevatedProcessForPID(e) ||
                v.Z.wait(() => {
                    v.Z.dispatch({
                        type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
                        errorMessage: t
                    });
                });
        });
}
function tH(e) {
    (i = e.sessionId),
        (eW = !1),
        (ez = !1),
        (0, Q.isWeb)() ||
            G.Z.subscribe({ location: 'handleConnectionOpen' }, (e) => {
                let t = tm();
                !e.sidechainAvailable && t.sidechainCompression ? (tD({ sidechainCompressionSettingVersion: 0 }), nc(!1)) : e.sidechainAvailable && t.sidechainCompressionSettingVersion < eN && (tD({ sidechainCompressionSettingVersion: eN }), nc(e.sidechainEnabled));
            });
    let t = tm();
    tC() && (t.automaticAudioSubsystem && nU(), t.audioSubsystemSettingVersion < eA && (tD({ audioSubsystemSettingVersion: eA }), t.automaticAudioSubsystem || ek.getAudioSubsystem() === ep.iA.LEGACY || nj(ep.iA.AUTOMATIC))),
        (0, Y.wt)({
            location: 'MediaEngineStore',
            autoTrackExposure: !1
        }) &&
            null !== t.mostRecentlyRequestedVoiceFilter &&
            (0, W.J_)(),
        tV();
}
function tW(e) {
    let { mediaEngineState: t } = e;
    (ej = t.settingsByContext), (eF = t.inputDevices), (eZ = t.outputDevices), (td = t.appSupported), (e8 = t.krispModuleLoaded), (eV = t.goLiveContext);
}
function tY() {
    i = null;
}
function tK(e) {
    switch (e.state) {
        case eu.hes.CONNECTING:
            tx();
            break;
        case eu.hes.RTC_CONNECTING:
            (e4 = !1), (e6 = !1);
            break;
        case eu.hes.RTC_CONNECTED:
            tO();
            break;
        case eu.hes.DISCONNECTED:
            t2(), t3();
    }
    tR.update();
}
function tz(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => (i === t.sessionId ? ((eW = t.mute || t.suppress), (ez = t.deaf), ek.eachConnection(tb), tO((null == t.guildId || null == t.channelId || null == tr || tr === t.channelId) && eq), (tr = t.channelId), !0) : (__OVERLAY__ || t.userId !== et.default.getId() || null != ea.Z.getChannelId() || tO(!1, null), e)), !1);
}
function tq(e) {
    let { mute: t } = e;
    (eY = t), ek.eachConnection(tb);
}
function tQ(e) {
    let { context: t, skipMuteUnmuteSoundEffect: n } = e,
        { mute: r, deaf: i } = tm(t);
    if (t === ep.Yn.DEFAULT && (F.Z.requestPermission(ef.Eu.AUDIO), eK)) return !1;
    (r = !i && !r) || (i = !1),
        n && (eX = !0),
        tD(
            {
                mute: r,
                deaf: i
            },
            t
        ),
        ek.eachConnection(tb);
}
function tX(e) {
    let { context: t, mute: n } = e;
    tD({ mute: n }, t), ek.eachConnection(tb);
}
function tJ(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r
    } = e;
    if (t !== e_.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    tV(!0);
}
function t$(e) {
    let { context: t } = e;
    tD({ deaf: !tm(t).deaf }, t), ek.eachConnection(tb);
}
function t0(e) {
    let { context: t, userId: n } = e;
    if (n === et.default.getId()) return;
    let { localMutes: r } = tm(t);
    r[n] ? delete r[n] : (r[n] = !0), tD({ localMutes: r }, t), ek.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function t1(e) {
    var t, n, r, i, o, a, s;
    let { context: l, userId: u, videoToggleState: d, persist: f, isAutomatic: _ } = e;
    c()(!(f && _), 'These are not allowed to both be true.');
    let p = d === eu.ZUi.DISABLED,
        { disabledLocalVideos: h } = tm(l),
        g = null !== (t = h[u]) && void 0 !== t && t,
        m = tl.has(u),
        E = d === eu.ZUi.AUTO_ENABLED || d === eu.ZUi.MANUAL_ENABLED;
    eb.info('disableVideo='.concat(p, ' currentlyDisabled=').concat(g, ' currentlyAutoDisabled=').concat(m, ', isVideoShown=').concat(E)), c()(!(m && !g), 'If you are auto-disabled, then you are also disabled.');
    let v = p !== g,
        b = l === ep.Yn.DEFAULT,
        y = _ && v && b,
        O = f && v && b;
    eb.info('changed='.concat(v, ' isDefaultContext=').concat(b, ' isUpdateCausedByVideoHealthManager=').concat(y, ' isManualToggleByUser=').concat(O));
    let { videoToggleStateMap: S } = tm(l);
    if ((S[u] === eu.ZUi.AUTO_PROBING && d === eu.ZUi.AUTO_ENABLED && (0, V.Z)(u, p ? ep.fC.AUTO_DISABLE : ep.fC.AUTO_ENABLE, E), (S[u] = d), tD({ videoToggleStateMap: S }, l, f), d === eu.ZUi.AUTO_PROBING ? null === (n = ea.Z.getRTCConnection()) || void 0 === n || n.pauseStatsCollectionForUser(u, !0) : null === (r = ea.Z.getRTCConnection()) || void 0 === r || r.pauseStatsCollectionForUser(u, !1), tc || (eb.info('isAutoDisableAllowed='.concat(tc, ' - disabling VideoHealthManager')), null === (o = ea.Z.getRTCConnection()) || void 0 === o || null === (i = o.getVideoHealthManager()) || void 0 === i || i.disable()), y)) {
        if ((!p && !m) || (p && !tc)) return;
        (0, V.Z)(u, p ? ep.fC.AUTO_DISABLE : ep.fC.AUTO_ENABLE, E), p ? tl.add(u) : tl.delete(u);
    } else O && (m && !p ? (eb.info('disallowing auto-disable for this session because of manual override by user'), (tc = !1), null === (s = ea.Z.getRTCConnection()) || void 0 === s || null === (a = s.getVideoHealthManager()) || void 0 === a || a.disable(), (0, V.Z)(u, ep.fC.MANUAL_REENABLE, E)) : (0, V.Z)(u, p ? ep.fC.MANUAL_DISABLE : ep.fC.MANUAL_ENABLE, E));
    b && !p && tl.delete(u),
        p ? (h[u] = !0) : delete h[u],
        tD({ disabledLocalVideos: h }, l, f),
        ek.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(u, null !== (t = h[u]) && void 0 !== t && t);
        }, l);
}
function t2() {
    if (0 === tl.size) return;
    let e = ep.Yn.DEFAULT,
        { disabledLocalVideos: t } = tm(e);
    tl.forEach((n) => {
        c()(t[n], 'If you are auto-disabled, then you are also disabled.'), delete t[n], ek.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tl.clear(),
        tD({ disabledLocalVideos: t }, e, !1);
}
function t3() {
    let e = ep.Yn.DEFAULT,
        { videoToggleStateMap: t } = tm(e);
    for (let [e, n] of Object.entries(t)) n === eu.ZUi.AUTO_PROBING && delete t[e];
    tD({ videoToggleStateMap: t }, e, !1);
}
function t4(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === et.default.getId()) return;
    let i = t === ep.Yn.STREAM ? ep.Yh : ep.Qx,
        { localVolumes: o } = tm(t);
    r === i ? delete o[n] : (o[n] = r), tD({ localVolumes: o }, t), ek.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function t6(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: o } = tm(t);
    (o[n] = {
        left: r,
        right: i
    }),
        tD({ localPans: o }, t),
        ek.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function t5(e) {
    let { context: t, mode: n, options: r } = e;
    tD(
        {
            mode: n,
            modeOptions: r
        },
        t
    ),
        ek.eachConnection(tE),
        tR.update();
}
function t7(e) {
    let { volume: t } = e;
    tD({ inputVolume: tv(t) }), ek.setInputVolume(t);
}
function t8(e) {
    let { volume: t } = e;
    tD({ outputVolume: t }), ek.setOutputVolume(t);
}
function t9(e) {
    let { id: t } = e;
    tD({ inputDeviceId: (t = tj(eF, t)) }), ek.setAudioInputDevice(t);
}
function ne(e) {
    let { id: t } = e;
    tD({ outputDeviceId: (t = tj(eZ, t)) }), ek.setAudioOutputDevice(t);
}
function nt(e) {
    let { id: t } = e;
    tD({ videoDeviceId: (t = tj(eH, t)) }), tO();
}
function nn(e) {
    return eB !== e.required && ((eB = e.required), e.required || ek.interact(), !0);
}
function nr(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    tU(t), tG(n), tB(r);
}
function ni(e) {
    let { inputVolume: t, outputVolume: n } = e;
    tD({
        inputVolume: tv(t),
        outputVolume: n
    });
}
function no(e) {
    let t = tm();
    K.default.track(eu.rMx.VOICE_PROCESSING, {
        echo_cancellation: t.echoCancellation,
        noise_cancellation: t.noiseCancellation,
        noise_suppression: t.noiseSuppression,
        automatic_gain_control: t.automaticGainControl,
        location: e
    });
}
function na(e) {
    let t = tD({ echoCancellation: e.enabled });
    ek.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nd(), no(e.location);
}
function ns(e) {
    nc(e.enabled);
}
function nl(e) {
    let t = tD({ sidechainCompressionStrength: e.strength });
    ek.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function nc(e) {
    let t = tD({ sidechainCompression: e });
    ek.setSidechainCompression(t.sidechainCompression);
}
function nu(e) {
    let { enabled: t, loopbackReason: n } = e,
        r = tu.size > 0;
    return t ? tu.add(n) : tu.delete(n), tu.size > 0 !== r && nd();
}
function nd() {
    let e = tm(),
        t = tu.size > 0,
        n = e.inputDeviceId,
        r = er.Z.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        o = er.Z.hasNoiseSuppression(n) || e.noiseSuppression,
        a = er.Z.hasAutomaticGainControl(n) || e.automaticGainControl,
        s = e.noiseCancellation,
        l = null !== e9;
    ek.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: o,
        automaticGainControl: a,
        noiseCancellation: s,
        voiceFilters: l
    });
}
function nf(e) {
    let t = tD({ noiseSuppression: e.enabled });
    ek.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nd(), no(e.location);
}
function n_(e) {
    let t = tD({ automaticGainControl: e.enabled });
    ek.eachConnection((e) => e.setAutomaticGainControl(t.automaticGainControl)), nd(), no(e.location);
}
function np(e) {
    let t = tD({ noiseCancellation: e.enabled });
    ek.eachConnection((e) => e.setNoiseCancellation(t.noiseCancellation)), nd(), no(e.location);
}
function nh(e) {
    let t = tD({ experimentalEncoders: e.enabled });
    ek.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
}
function ng(e) {
    var t, n;
    let { enabled: r } = e,
        i = tD({ hardwareEncoding: r });
    ek.eachConnection((e) => {
        var t;
        return e.setHardwareH264(null === (t = i.hardwareEncoding) || void 0 === t || t);
    }),
        ek.setH264Enabled(i.hardwareEncoding || i.openH264),
        ek.setAv1Enabled(null === (t = i.hardwareEncoding) || void 0 === t || t),
        ek.setH265Enabled(null === (n = i.hardwareEncoding) || void 0 === n || n);
}
function nm(e) {
    tD({ silenceWarning: e.enabled }), tR.update();
}
function nE(e) {
    ek.setDebugLogging(e.enabled);
}
function nv(e) {
    tD({ videoHook: e.enabled });
}
function nb(e) {
    tD({ experimentalSoundshare2: e.enabled });
}
function ny(e) {
    let { enabled: t } = e;
    tD({ useSystemScreensharePicker: t });
}
function nO(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = tD({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r
        });
    ek.eachConnection((e) => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers));
}
function nS(e) {
    let { enabled: t } = e;
    tD({ qos: t }), ek.eachConnection((e) => e.setQoS(t));
}
function nI() {
    tw();
}
function nT(e) {
    let { inputDetected: t } = e;
    (e3 = t), !e4 && e3 && ((e4 = !0), tR.update());
}
function nN(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === eK) return !1;
    (eK = n), ek.eachConnection(tb);
}
function nA(e) {
    let { state: t, permissionType: n } = e,
        r = t === ef.PQ.ACCEPTED;
    switch (n) {
        case ef.Eu.AUDIO:
            (ta = !0), ek.eachConnection(tb);
            break;
        case ef.Eu.CAMERA:
            !r && eq && tO(!1);
            break;
        default:
            return !1;
    }
}
function nC() {
    return e8 || !1;
}
async function nR() {
    try {
        await $.ZP.ensureModule('discord_krisp'), $.ZP.requireModule('discord_krisp'), (e8 = !0), r.emitChange();
    } catch (t) {
        eb.warn('Failed to load Krisp module: '.concat(t.message)), J.Z.captureException(t);
        let e = ep.H3.INITIALIZED;
        if (t.message.includes(': ')) {
            let n = parseInt(t.message.substring(t.message.indexOf(': ') + 1));
            e = isNaN(n) || 0 === n ? ep.H3.INITIALIZED : n;
        }
        K.default.track(eu.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), tD({ noiseCancellation: !1 });
    } finally {
        e7 = !1;
    }
}
function nP() {
    return (0, Q.isWindows)() || (0, Q.isLinux)() || ((0, Q.isMac)() && _().satisfies(null === b.Z || void 0 === b.Z ? void 0 : b.Z.os.release, eL));
}
function nD() {
    !nP() || __OVERLAY__ || e7 || e8 ? ((0, Q.isWeb)() && ek.supports(ep.AN.NOISE_CANCELLATION) ? ((e8 = !0), r.emitChange()) : (0, Q.isWeb)() && tD({ noiseCancellation: !1 })) : ((e7 = !0), nR());
}
function nw(e) {
    let { enabled: t } = e;
    K.default.track(eu.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != e9 ? e9 : null,
        enabled: t
    }),
        tD({ voiceFilterPlaybackEnabled: t });
}
function nL(e) {
    let { newVoiceFilterId: t } = e;
    tD({ mostRecentlyRequestedVoiceFilter: t });
    let n = null != t;
    ek.eachConnection((e) => e.setVoiceFiltersEnabled(n));
}
function nx() {
    tD({ mostRecentlyRequestedVoiceFilter: null });
}
function nM(e) {
    let { voiceFilterId: t } = e;
    (tt = e9), (tn = te), (e9 = t), (te = null === t ? null : Date.now());
}
function nk(e) {
    nj(e.subsystem);
}
function nj(e) {
    e === ep.iA.AUTOMATIC ? (tD({ automaticAudioSubsystem: !0 }), nU()) : (tD({ automaticAudioSubsystem: !1 }), ek.setAudioSubsystem(e));
}
function nU() {
    let { enabled: e } = j.I.getCurrentConfig({ location: 'interpretAutomaticAudioSubsystem' });
    e ? ek.queueAudioSubsystem(ep.iA.EXPERIMENTAL) : ek.queueAudioSubsystem(ep.iA.STANDARD);
}
function nG(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && tO(i, null), null != t || null == n)) {
        e5 = !1;
        return;
    }
    if (e5) return;
    e5 = !0;
    let o = tm();
    (o.mute || o.deaf) &&
        (tD({
            deaf: !1,
            mute: !1
        }),
        ek.eachConnection(tb));
}
function nB(e) {
    let { application: t } = e;
    eU.add(t.id);
}
function nV(e) {
    let { application: t } = e;
    eU.delete(t.id);
}
function nF(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case 'audio':
                (eG = !1), ek.eachConnection(tb);
                break;
            case 'video':
                tO(!1);
        }
}
function nZ(e) {
    (eG = e.enabled),
        e.unmute &&
            tD({
                mute: !1,
                deaf: !1
            }),
        ek.eachConnection(tb);
}
function nH(e) {
    let { enabled: t } = e;
    F.Z.requestPermission(ef.Eu.CAMERA), tO(t);
}
function nW(e) {
    let { sourceId: t, applicationName: n, quality: i } = e,
        o = S.Z.isDecoupledGameClippingEnabled(),
        s = S.Z.getSettings().decoupledClipsEnabled;
    if (!o || !s || null == b.Z) return;
    let l = null,
        c = null,
        u = z.Z.getPidFromDesktopSource(t);
    ({ soundshareId: l, soundshareSession: c } = tF(u));
    let d = {
        desktopSource: {
            id: t,
            sourcePid: u,
            soundshareId: l,
            soundshareSession: c
        },
        quality: i
    };
    null != a && a.desktopSource.id !== d.desktopSource.id && (ek.setClipsSource(null), (0, Q.isWindows)() && null != a.desktopSource.soundshareId && y.pn(a.desktopSource.soundshareId)), null != l && tZ(l, c), (a = d);
    let f = tg(),
        _ = tm().videoHook;
    ek.setClipsSource({
        desktopDescription: {
            id: a.desktopSource.id,
            soundshareId: a.desktopSource.soundshareId,
            useVideoHook: _,
            useGraphicsCapture: tN(),
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: tA(),
            videoHookStaleFrameTimeoutMs: eR,
            graphicsCaptureStaleFrameTimeoutMs: eP,
            hdrCaptureMode: f
        },
        quality: i,
        applicationName: n
    });
}
function nY(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((a = null), ek.setClipsSource(null));
}
function nK(e) {
    var t, n, r, i;
    let { settings: o } = e;
    if ((null == o ? void 0 : o.desktopSettings) != null) {
        let e = null,
            r = null,
            { sourceId: i, sound: a } = o.desktopSettings,
            s = null !== (t = o.context) && void 0 !== t ? t : ep.Yn.DEFAULT,
            l =
                null !== (n = o.qualityOptions) && void 0 !== n
                    ? n
                    : {
                          resolution: 720,
                          frameRate: 30
                      },
            c = !1 === a ? null : z.Z.getPidFromDesktopSource(i);
        Q.isPlatformEmbedded && !0 === a && (({ soundshareId: e, soundshareSession: r } = tF(c)), null != e && tZ(e, r)),
            ty(s),
            tO(s === ep.Yn.STREAM && eq, {
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
        let e = null !== (r = o.context) && void 0 !== r ? r : ep.Yn.DEFAULT,
            { videoDeviceGuid: t, audioDeviceGuid: n } = o.cameraSettings,
            a = e === ep.Yn.STREAM && eq,
            s =
                null !== (i = o.qualityOptions) && void 0 !== i
                    ? i
                    : {
                          resolution: 720,
                          frameRate: 30
                      };
        tO(a, {
            cameraSource: {
                videoDeviceGuid: t,
                audioDeviceGuid: n
            },
            quality: {
                resolution: s.resolution,
                frameRate: s.frameRate
            }
        });
    } else tO(eq, null);
}
function nz(e) {
    let { section: t } = e;
    return t === eu.oAB.VOICE && tx(), !1;
}
function nq() {
    return ek.eachConnection(tI), !1;
}
function nQ(e) {
    let { enabled: t } = e,
        n = tD({ openH264: t });
    ek.setH264Enabled(n.hardwareEncoding || n.openH264),
        ek.eachConnection((e) => {
            var t;
            return e.setSoftwareH264(null === (t = n.openH264) || void 0 === t || t);
        });
}
function nX(e) {
    let { enabled: t } = e,
        n = tD({ aecDumpEnabled: t });
    ek.setAecDump(n.aecDumpEnabled);
}
function nJ(e) {
    let { state: t } = e,
        n = C.Z.isEnabled();
    if (t === eu.$7l.BACKGROUND && eq && !n) (e1 = !0), tO(!1);
    else {
        if (t !== eu.$7l.ACTIVE || !e1) return !1;
        (e1 = !1), tO(!0);
    }
    return !0;
}
function n$(e) {
    ek.eachConnection((t) => t.setBitRate(e.bitrate));
}
function n0() {
    if ((!eq && null == o) || null != ea.Z.getRTCConnectionId()) return !1;
    tO(!1, null);
}
function n1() {
    return !!ti && ((ti = !1), !0);
}
function n2(e) {
    ek.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function n3(e) {
    let { settings: t } = e;
    ek.applyMediaFilterSettings(t).finally(() => {
        (to = !1), r.emitChange();
    });
}
function n4() {
    to = !0;
}
function n6() {
    to = !1;
}
function n5(e) {
    t_ = e.enabled;
}
class n7 extends (s = h.ZP.Store) {
    initialize() {
        tT(),
            tP(),
            nD(),
            t3(),
            (td = {
                [ep.AN.VIDEO]: ek.supports(ep.AN.VIDEO),
                [ep.AN.DESKTOP_CAPTURE]: ek.supports(ep.AN.DESKTOP_CAPTURE),
                [ep.AN.HYBRID_VIDEO]: ek.supports(ep.AN.HYBRID_VIDEO)
            }),
            this.waitFor(et.default, er.Z, ei.Z, eo.Z, ea.Z, R.ZP, F.Z.storage, H.Z, A.Z, S.Z);
    }
    supports(e) {
        return ek.supports(e);
    }
    supportsInApp(e) {
        return td[e] || ek.supports(e);
    }
    isSupported() {
        return ek.supported();
    }
    isExperimentalEncodersSupported() {
        return ek.supports(ep.AN.EXPERIMENTAL_ENCODERS);
    }
    isNoiseSuppressionSupported() {
        return ek.supports(ep.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return nC();
    }
    isNoiseCancellationError() {
        return ti;
    }
    isAutomaticGainControlSupported() {
        return ek.supports(ep.AN.AUTOMATIC_GAIN_CONTROL);
    }
    isAdvancedVoiceActivitySupported() {
        return nC();
    }
    isAecDumpSupported() {
        return ek.supports(ep.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return ek.supports(ep.AN.VIDEO) && ek.supports(ep.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        let t = (null === (e = ei.Z.getChannel(tr)) || void 0 === e ? void 0 : e.type) === eu.d4z.GUILD_STAGE_VOICE,
            n = r.getHardwareEncoding();
        return !t && n && M.Z.simulcastEnabled();
    }
    getAecDump() {
        return tm().aecDumpEnabled;
    }
    getMediaEngine() {
        return ek;
    }
    getVideoComponent() {
        return ek.supports(ep.AN.DIRECT_VIDEO) && ek.setUseDirectVideo(!0), ek.Video;
    }
    getCameraComponent() {
        return ek.supports(ep.AN.DIRECT_VIDEO) && ek.setUseDirectVideo(!0), ek.Camera;
    }
    isEnabled() {
        return eG;
    }
    isMute() {
        return this.isSelfMute() || eW;
    }
    isDeaf() {
        return this.isSelfDeaf() || ez;
    }
    hasContext(e) {
        return null != ej[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return e === ep.Yn.DEFAULT && eY;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return !this.isEnabled() || tm(e).mute || !F.Z.didHavePermission(ef.Eu.AUDIO) || this.isSelfDeaf(e) || (e === ep.Yn.DEFAULT && eK);
    }
    shouldSkipMuteUnmuteSound() {
        return eX;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        eX = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && er.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return t_;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return !this.isSupported() || tm(e).deaf;
    }
    isVideoEnabled() {
        return eq && e2;
    }
    isVideoAvailable() {
        return Object.values(eH).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.STREAM;
        return eV === e && null != o;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.STREAM;
        return eV === t && null != o && (null === (e = o.desktopSource) || void 0 === e ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT;
        return e !== et.default.getId() && (tm(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return ek.supports(ep.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT;
        return null !== (t = tm(n).disabledLocalVideos[e]) && void 0 !== t && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT;
        return null !== (t = tm(n).videoToggleStateMap[e]) && void 0 !== t ? t : eu.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT;
        return t === ep.Yn.DEFAULT && tl.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return e === ep.Yn.DEFAULT && tl.size > 0;
    }
    isMediaFilterSettingLoading() {
        return to;
    }
    isNativeAudioPermissionReady() {
        return ta;
    }
    getGoLiveSource() {
        return o;
    }
    getGoLiveContext() {
        return eV;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT,
            n = tm(t).localPans[e];
        return null != n ? n : eC;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT,
            n = t === ep.Yn.STREAM ? ep.Yh : ep.Qx,
            r = tm(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return tm().inputVolume;
    }
    getOutputVolume() {
        return tm().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return tm(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return tm(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return e9;
    }
    getActiveVoiceFilterAppliedAt() {
        return te;
    }
    getPreviousVoiceFilter() {
        return tt;
    }
    getPreviousVoiceFilterAppliedAt() {
        return tn;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return tm().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return tm().voiceFilterPlaybackEnabled;
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
        return tj(eF, tm().inputDeviceId);
    }
    getOutputDeviceId() {
        return tj(eZ, tm().outputDeviceId);
    }
    getVideoDeviceId() {
        return tj(eH, tm().videoDeviceId);
    }
    getInputDevices() {
        return eF;
    }
    getOutputDevices() {
        return eZ;
    }
    getVideoDevices() {
        return eH;
    }
    getEchoCancellation() {
        let e = tm();
        return er.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return tm().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return tm().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return tm().h265Enabled;
    }
    getLoopback() {
        return tu.size > 0;
    }
    getLoopbackReasons() {
        return tu;
    }
    getNoiseSuppression() {
        let e = tm();
        return er.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tm();
        return er.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getNoiseCancellation() {
        return tm().noiseCancellation;
    }
    getExperimentalEncoders() {
        return tm().experimentalEncoders;
    }
    getHardwareEncoding() {
        var e;
        return null === (e = tm().hardwareEncoding) || void 0 === e || e;
    }
    getEnableSilenceWarning() {
        return tm().silenceWarning;
    }
    getDebugLogging() {
        return ek.getDebugLogging();
    }
    getQoS() {
        return tm().qos;
    }
    getAttenuation() {
        return tm().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return tm().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return tm().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return tC() && tm().automaticAudioSubsystem ? ep.iA.AUTOMATIC : ek.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return ek.getMLSSigningKey(e, t);
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return tm(e);
    }
    getState() {
        return {
            settingsByContext: ej,
            inputDevices: eF,
            outputDevices: eZ,
            appSupported: td,
            krispModuleLoaded: e8,
            goLiveSource: o,
            goLiveContext: eV
        };
    }
    getInputDetected() {
        return e3;
    }
    getNoInputDetectedNotice() {
        return e6;
    }
    getPacketDelay() {
        return Q.isPlatformEmbedded || this.getMode() !== eu.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        ek.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return eB;
    }
    getVideoHook() {
        return tm().videoHook;
    }
    supportsVideoHook() {
        return ek.supports(ep.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tm().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e);
    }
    supportsExperimentalSoundshare() {
        return ek.supports(ep.AN.EXPERIMENTAL_SOUNDSHARE) && _().satisfies(null === b.Z || void 0 === b.Z ? void 0 : b.Z.os.release, ed.I9);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = tm().useSystemScreensharePicker,
            n =
                (0, Q.isLinux)() ||
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
        let e = ek.supports(ep.AN.NATIVE_SCREENSHARE_PICKER);
        return k.Z.getCurrentConfig(
            { location: 'supportsSystemScreensharePicker' },
            {
                disable: !e,
                autoTrackExposure: !1
            }
        ).enableSystemPicker;
    }
    getOpenH264() {
        return tm().openH264;
    }
    getEverSpeakingWhileMuted() {
        return eJ;
    }
    getSpeakingWhileMuted() {
        return e$;
    }
    supportsScreenSoundshare() {
        return (0, Q.isMac)() ? ek.supports(ep.AN.SOUNDSHARE) && _().satisfies(null === b.Z || void 0 === b.Z ? void 0 : b.Z.os.release, ed.yG) && tA() : (0, Q.isWindows)() ? ek.supports(ep.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, Q.isLinux)() && ek.supports(ep.AN.SCREEN_SOUNDSHARE);
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
    getSupportedSecureFramesProtocolVersion(e) {
        var t;
        let n = ek.getSupportedSecureFramesProtocolVersion(),
            r = U.m.getCurrentConfig({ location: 'MediaEngineStore' }),
            i =
                null != e
                    ? U.N.getCurrentConfig({
                          guildId: e,
                          location: 'MediaEngineStore'
                      })
                    : null,
            o = r.canSupportDaveProtocol || (null == i ? void 0 : i.canSupportDaveProtocol),
            a = Math.max(r.protocolVersionFloor, null !== (t = null == i ? void 0 : i.protocolVersionFloor) && void 0 !== t ? t : 0),
            s = n > 5 && 114 === n;
        return o && (n >= a || s) ? n : 0;
    }
    hasClipsSource() {
        return null != a;
    }
}
eg(n7, 'displayName', 'MediaEngineStore');
let n8 = (r = new n7(v.Z, {
    VOICE_CHANNEL_SELECT: nG,
    VOICE_STATE_UPDATES: tz,
    CONNECTION_OPEN: tH,
    CONNECTION_CLOSED: tY,
    RTC_CONNECTION_STATE: tK,
    AUDIO_SET_TEMPORARY_SELF_MUTE: tq,
    AUDIO_TOGGLE_SELF_MUTE: tQ,
    AUDIO_SET_SELF_MUTE: tX,
    AUDIO_TOGGLE_SELF_DEAF: t$,
    AUDIO_TOGGLE_LOCAL_MUTE: t0,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: t1,
    AUDIO_SET_LOCAL_VOLUME: t4,
    AUDIO_SET_LOCAL_PAN: t6,
    AUDIO_SET_MODE: t5,
    AUDIO_SET_INPUT_VOLUME: t7,
    AUDIO_SET_OUTPUT_VOLUME: t8,
    AUDIO_SET_INPUT_DEVICE: t9,
    AUDIO_SET_OUTPUT_DEVICE: ne,
    AUDIO_SET_ECHO_CANCELLATION: na,
    AUDIO_SET_SIDECHAIN_COMPRESSION: ns,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nl,
    AUDIO_SET_LOOPBACK: nu,
    AUDIO_SET_NOISE_SUPPRESSION: nf,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: n_,
    AUDIO_SET_NOISE_CANCELLATION: np,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: nm,
    AUDIO_SET_DEBUG_LOGGING: nE,
    MEDIA_ENGINE_SET_VIDEO_HOOK: nv,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: nb,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: ny,
    AUDIO_SET_ATTENUATION: nO,
    AUDIO_SET_QOS: nS,
    MEDIA_ENGINE_DEVICES: nr,
    AUDIO_VOLUME_CHANGE: ni,
    AUDIO_RESET: nI,
    AUDIO_INPUT_DETECTED: nT,
    AUDIO_SET_SUBSYSTEM: nk,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: nZ,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: nH,
    MEDIA_ENGINE_PERMISSION: nF,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: nK,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nt,
    MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nh,
    MEDIA_ENGINE_INTERACTION_REQUIRED: nn,
    USER_SETTINGS_MODAL_INIT: nz,
    USER_SETTINGS_MODAL_SET_SECTION: nz,
    CERTIFIED_DEVICES_SET: nq,
    RPC_APP_CONNECTED: nB,
    RPC_APP_DISCONNECTED: nV,
    OVERLAY_INITIALIZE: tW,
    MEDIA_ENGINE_SET_OPEN_H264: nQ,
    MEDIA_ENGINE_SET_HARDWARE_ENCODING: ng,
    APP_STATE_UPDATE: nJ,
    SET_CHANNEL_BITRATE: n$,
    SET_VAD_PERMISSION: nN,
    SET_NATIVE_PERMISSION: nA,
    SET_CHANNEL_VIDEO_QUALITY_MODE: n2,
    MEDIA_ENGINE_SET_AEC_DUMP: nX,
    CHANNEL_DELETE: n0,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: n1,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: n3,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: n4,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: n6,
    USER_SETTINGS_PROTO_UPDATE: tJ,
    CLIPS_INIT: nW,
    CLIPS_SETTINGS_UPDATE: nY,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: n5,
    VOICE_FILTER_REQUEST_SWITCH: nL,
    VOICE_FILTER_LOOPBACK_TOGGLE: nw,
    VOICE_FILTER_APPLIED: nM,
    VOICE_FILTER_DOWNLOAD_FAILED: nx,
    VOICE_FILTER_APPLY_FAILED: nx
}));
