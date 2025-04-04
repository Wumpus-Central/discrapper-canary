let r, i, o, a;
n.d(t, { Z: () => rn }), n(47120), n(266796), n(773603), n(653041), n(337869);
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
    A = n(785141),
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
    F = n(580930),
    V = n(338336),
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
    eM = 2 * Q.Z.Millis.SECOND;
function ek() {
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
        videoHook: ej.supports(eh.AN.VIDEO_HOOK),
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
let ej = (0, m.Mt)((0, m.jj)());
ev.enableNativeLogger(!0);
let eU = {},
    eG = new Set([eh.Yn.DEFAULT]),
    eB = ej.supports(eh.AN.AUTO_ENABLE),
    eF = !1,
    eV = eh.Yn.STREAM,
    eZ = { [eh.w5]: tU('No Input Devices') },
    eH = { [eh.w5]: tU('No Output Devices') },
    eW = { [eh.w5]: tU('No Video Devices') },
    eY = !1,
    eK = !1,
    ez = !1,
    eq = !1,
    eQ = !1,
    eX = eh.Av,
    eJ = !1,
    e$ = !1,
    e0 = !1,
    e1 = new E.V7(),
    e2 = !1,
    e3 = !1,
    e4 = null,
    e6 = !1,
    e5 = !1,
    e7 = !1,
    e8 = !1,
    e9 = !1,
    te = null,
    tt = null,
    tn = null,
    tr = null,
    ti = null,
    to = !1,
    ta = !1,
    ts = !1;
Z.Z.hasPermission(e_.Eu.AUDIO, { showAuthorizationError: !1 }), Z.Z.hasPermission(e_.Eu.CAMERA, { showAuthorizationError: !1 });
let tl = !1,
    tc = new Set(),
    tu = tl,
    td = new Set(),
    tf = {},
    t_ = null,
    tp = !0,
    th = !1,
    tm = {},
    tg = 5 * Q.Z.Millis.SECOND;
function tE() {
    var e, t;
    return null != (t = null == (e = ec.default.getCurrentUser()) ? void 0 : e.isStaff()) && t ? 'always' : J.Z === p.R.CANARY ? 'permittedDevicesOnly' : 'never';
}
function tb() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT,
        t = eU[e];
    return null == t && ((t = ek()), (eU[e] = t)), t;
}
function ty(e) {
    let t = tb(e.context);
    e.setInputMode(t.mode, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: t.modeOptions.autoThreshold,
        vadUseKrisp: t.modeOptions.vadUseKrisp && nD(),
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        pttReleaseDelay: t.modeOptions.delay
    });
}
function tv(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Qx;
    return d().clamp(e, 0, t);
}
function tO(e) {
    let t = tb(e.context),
        n = !eB || t.mute || t.deaf;
    e.context === eh.Yn.DEFAULT ? (n = n || eY || eK || ez || !Z.Z.didHavePermission(e_.Eu.AUDIO)) : e.context === eh.Yn.STREAM && (n = !0), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eh.Yn.DEFAULT && O.Z.updateNativeMute();
}
function tI(e) {
    e !== eV && (null != o && ej.setGoLiveSource(null, eV), (eV = e));
}
function tS() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eQ,
        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
        s = o;
    if (((null == s ? void 0 : s.desktopSource) != null && s.desktopSource.id !== (null == a || null == (e = a.desktopSource) ? void 0 : e.id) && (null != s.desktopSource.soundshareId && (0, X.isWindows)() && v.pn(s.desktopSource.soundshareId), ej.setGoLiveSource(null, eV)), (null == s ? void 0 : s.cameraSource) != null && (s.cameraSource.videoDeviceGuid !== (null == a || null == (t = a.cameraSource) ? void 0 : t.videoDeviceGuid) || s.cameraSource.audioDeviceGuid !== (null == a || null == (n = a.cameraSource) ? void 0 : n.audioDeviceGuid)) && ej.setGoLiveSource(null, eV), (eQ || i) && ((eX = (eQ = i) ? tB(eW, tb().videoDeviceId) : eh.Av), ej.setVideoInputDevice(eX)), (o = a), null != a)) {
        let e = {
            resolution: a.quality.resolution,
            frameRate: a.quality.frameRate
        };
        if (null != a.desktopSource) {
            let t = tE(),
                n = tb().videoHook;
            ej.setGoLiveSource(
                {
                    desktopDescription: {
                        id: a.desktopSource.id,
                        soundshareId: a.desktopSource.soundshareId,
                        useVideoHook: n,
                        useGraphicsCapture: tR(),
                        useLoopback: r.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: tP(),
                        videoHookStaleFrameTimeoutMs: eP,
                        graphicsCaptureStaleFrameTimeoutMs: ew,
                        hdrCaptureMode: t
                    },
                    quality: e
                },
                eV
            );
        }
        null != a.cameraSource &&
            ej.setGoLiveSource(
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
function tT(e, t, n, r) {
    var i;
    let o = null != (i = null == e ? void 0 : e.soundshareSession) ? i : '';
    null == tm[o] && (tm[o] = new Set());
    let a = null != t && !tm[o].has(t);
    a && tm[o].add(t),
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
function tN(e) {
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
function tA(e) {
    let t = tb(),
        n = t.inputDeviceId;
    if ((e.setEchoCancellation(ei.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(ei.Z.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(ei.Z.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), e.setVoiceFilterId(te), (0, X.isWeb)())) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function tC() {
    ej.on(m.aB.Connection, (e) => {
        var t, n;
        ty(e), tO(e), tA(e);
        let i = tb();
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers), e.setQoS(i.qos), e.setExperimentalEncoders(i.experimentalEncoders), e.setHardwareH264(null == (t = i.hardwareEncoding) || t), e.setSoftwareH264(null == (n = i.openH264) || n);
        let a = es.ZP.getGuildId(),
            { muteBeforeProcessing: s, pttBeforeProcessing: l, skipEncode: c } = (null != a ? x.Z : L.Z).getCurrentConfig(eE({ location: 'setupMediaEngine' }, null != a && { guildId: a }), { autoTrackExposure: !0 });
        s && e.setExperimentFlag(eh.V8.MUTE_BEFORE_PROCESSING, !0), l && e.setExperimentFlag(eh.V8.PTT_BEFORE_PROCESSING, !0), c && e.setExperimentFlag(eh.V8.SKIP_ENCODE, !0);
        let u = !1,
            d = !0;
        if ((e.setExperimentFlag(eh.V8.RESET_DECODER_ON_ERRORS, !0), u && e.setExperimentFlag(eh.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0), d && e.setExperimentFlag(eh.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0), e.context === eh.Yn.STREAM)) {
            let { simulcastEnabled: t, lqStreamBitrate: n } = M.Z.getConfig();
            e.configureGoLiveSimulcast(t, n);
        }
        (0, X.isWindows)() ? ((null == t_ ? void 0 : t_.startsWith('NVIDIA')) || (null == t_ ? void 0 : t_.startsWith('AMD')) ? e.setExperimentFlag(eh.V8.SIGNAL_AV1, !0) : e.setExperimentFlag(eh.V8.SIGNAL_AV1_DECODE, !0)) : ((0, X.isMac)() || (0, X.isLinux)()) && e.setExperimentFlag(eh.V8.SIGNAL_AV1_DECODE, !0), (0, X.isWindows)() && e.setExperimentFlag(eh.V8.SIGNAL_AV1_HARDWARE_DECODE, !0), ej.setHasFullbandPerformance((0, N.Z)());
        let f = (0, D.D)('setupMediaEngine').enabled;
        if ((e.setRemoteAudioHistory(1000 * !!f), (0, S.Z)(r))) {
            let t = I.Z.getSettings();
            e.setExperimentFlag(eh.V8.STREAMER_CLIP, t.clipsEnabled);
            let { enableViewerClipping: n } = B.Z.getCurrentConfig({ location: 'f627ab_15' }, { autoTrackExposure: !1 });
            e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eh.ux);
        }
        for (let t of ((i = tb(e.context)), e.setPostponeDecodeLevel(eL), Object.keys(i.localMutes))) t !== en.default.getId() && e.setLocalMute(t, i.localMutes[t]);
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
                ((e$ = !1),
                (e0 = !1),
                e.on(m.Sh.SpeakingWhileMuted, () => {
                    (e$ = !0),
                        (e0 = !0),
                        r.emitChange(),
                        e1.stop(),
                        e1.start(eM, () => {
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
                (null == o ? void 0 : o.desktopSource) != null && z.default.track(ed.rMx.SOUNDSHARE_ATTACHED, (0, w.Z)(null == o ? void 0 : o.desktopSource));
            }),
            e.on(m.Sh.SoundshareFailed, (e) => {
                let { failureCode: t, failureReason: n, willRetry: r } = e;
                tT(null == o ? void 0 : o.desktopSource, t, n, r);
            }),
            e.on(m.Sh.SoundshareSpeaking, () => {
                (null == o ? void 0 : o.desktopSource) != null && (z.default.track(ed.rMx.SOUNDSHARE_TRANSMITTING, (0, w.Z)(null == o ? void 0 : o.desktopSource)), null != ea.Z.getHookError(ed.K3D.SOUND) && b.Z.wait(() => b.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
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
                        underlyingError: tN(e)
                    }),
                    (to = !0),
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
                        underlyingError: tN(e)
                    }),
                    z.default.track(ed.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    b.Z.dispatch({
                        type: 'AUDIO_SET_MODE',
                        context: eh.Yn.DEFAULT,
                        mode: ed.pM4.VOICE_ACTIVITY,
                        options: ey(eE({}, tb(eh.Yn.DEFAULT).modeOptions), { vadUseKrisp: !1 })
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
        ej.on(m.aB.DeviceChange, (e, t, n) => {
            b.Z.dispatch({
                type: 'MEDIA_ENGINE_DEVICES',
                inputDevices: e,
                outputDevices: t,
                videoDevices: n
            });
        }),
        ej.on(m.aB.VolumeChange, (e, t) => {
            b.Z.dispatch({
                type: 'AUDIO_VOLUME_CHANGE',
                inputVolume: e,
                outputVolume: t
            });
        }),
        ej.on(m.aB.DesktopSourceEnd, () => {
            b.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                settings: null
            });
        }),
        ej.on(m.aB.AudioPermission, (e) => {
            (ts = !0),
                b.Z.dispatch({
                    type: 'MEDIA_ENGINE_PERMISSION',
                    kind: 'audio',
                    granted: e
                });
        }),
        ej.on(m.aB.VideoPermission, (e) => {
            b.Z.dispatch({
                type: 'MEDIA_ENGINE_PERMISSION',
                kind: 'video',
                granted: e
            });
        }),
        ej.on(m.aB.WatchdogTimeout, async () => {
            let e;
            try {
                await q.Z.submitLiveCrashReport({ message: { message: 'Voice Watchdog Timeout' } });
            } catch (t) {
                'number' == typeof t.status && (e = t.status);
            }
            ev.warn('Watchdog timeout, report submission status: '.concat(null != e ? e : 200)), z.default.track(ed.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        ej.on(m.aB.VideoInputInitialized, (e) => {
            z.default.track(ed.rMx.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * Q.Z.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: es.ZP.getMediaSessionId(),
                rtc_connection_id: es.ZP.getRTCConnectionId()
            });
        }),
        ej.on(m.aB.AudioInputInitialized, (e) => {
            z.default.track(ed.rMx.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * Q.Z.Millis.SECOND),
                rtc_connection_id: es.ZP.getRTCConnectionId()
            });
        }),
        ej.on(m.aB.ClipsRecordingRestartNeeded, () => {
            b.Z.dispatch({ type: 'CLIPS_RESTART' });
        }),
        ej.on(m.aB.ClipsInitFailure, (e, t) => {
            b.Z.wait(() => {
                b.Z.dispatch({
                    type: 'CLIPS_INIT_FAILURE',
                    errMsg: e,
                    applicationName: t
                });
            });
        }),
        ej.on(m.aB.ClipsRecordingEnded, (e, t) => {
            var n, r;
            (null == a || null == (n = a.desktopSource) ? void 0 : n.id) === e && (null != t && (null == o || null == (r = o.desktopSource) ? void 0 : r.soundshareId) !== t && v.pn(t), (a = null));
        }),
        ej.on(m.aB.NativeScreenSharePickerUpdate, (e, t) => {
            k.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerUpdate' }),
                b.Z.dispatch({
                    type: 'NATIVE_SCREEN_SHARE_PICKER_UPDATE',
                    existing: e,
                    content: t
                });
        }),
        ej.on(m.aB.NativeScreenSharePickerCancel, (e) => {
            k.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerCancel' }),
                b.Z.dispatch({
                    type: 'NATIVE_SCREEN_SHARE_PICKER_CANCEL',
                    existing: e
                });
        }),
        ej.on(m.aB.NativeScreenSharePickerError, (e) => {
            k.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerError' }),
                b.Z.dispatch({
                    type: 'NATIVE_SCREEN_SHARE_PICKER_ERROR',
                    error: e
                });
        }),
        ej.on(m.aB.AudioDeviceModuleError, (e, t, n) => {
            z.default.track(ed.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                audio_device_module: e,
                code: t,
                device_name: n
            });
        }),
        ej.on(m.aB.VideoCodecError, (e) => {
            let t = 'encode' === e.mode ? A.u.VIDEO_ENCODE_ERROR : A.u.VIDEO_DECODE_ERROR,
                n = {
                    videoCodec: e.codecStandard,
                    errorMessage: e.message
                };
            (0, A.kr)(t === A.u.VIDEO_ENCODE_ERROR ? ey(eE({ type: t }, n), { videoEncoder: e.implName }) : ey(eE({ type: t }, n), { videoDecoder: e.implName }));
        }),
        ej.on(m.aB.ConnectionStats, (e) => {
            b.Z.dispatch({
                type: 'MEDIA_ENGINE_CONNECTION_STATS',
                connectionStats: e.map((e) => {
                    let { stats: t, connection: n } = e;
                    return {
                        stats: t,
                        mediaEngineConnectionId: n.mediaEngineConnectionId,
                        context: n.context
                    };
                })
            });
        }),
        ej.setOnVideoContainerResized((e, t, n) => {
            b.Z.wait(() =>
                b.Z.dispatch({
                    type: 'VIDEO_SIZE_UPDATE',
                    streamId: e,
                    width: t,
                    height: n
                })
            );
        }),
        tD.reset(),
        (0, el.q)().then((e) => {
            null != e && (t_ = e.gpu_brand);
        });
}
function tR() {
    return (0, X.isWindows)() && _().satisfies(null === y.Z || void 0 === y.Z ? void 0 : y.Z.os.release, ef.nz);
}
function tP() {
    return (0, X.isMac)() && ej.supports(eh.AN.SCREEN_CAPTURE_KIT) && _().satisfies(null === y.Z || void 0 === y.Z ? void 0 : y.Z.os.release, ef.C7);
}
function tw() {
    return (0, X.isWindows)() && ej.supports(eh.AN.AUTOMATIC_AUDIO_SUBSYSTEM) && ej.supports(eh.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH);
}
let tD = new (class {
    start() {
        this.started || ((this.started = !0), ej.on(m.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            ej.removeListener(m.aB.Silence, this.handleSilence),
            b.Z.dispatch({
                type: 'AUDIO_INPUT_DETECTED',
                inputDetected: null
            }));
    }
    update() {
        let e = tb();
        !e6 && es.ZP.getState() === ed.hes.RTC_CONNECTED && e.mode === ed.pM4.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop();
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
                                    e && (e5 = !0));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout
                    ));
            });
    }
})();
function tL() {
    var e;
    let t = g.K.get('audio');
    null != t && (g.K.set(eO, { [eh.Yn.DEFAULT]: t }), g.K.remove('audio')),
        (eU = null != (e = g.K.get(eO)) ? e : {}),
        d().each(eU, (e) => {
            if ((d().defaultsDeep(e, ek()), null != e.modeOptions && 'string' == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, et.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== eI && ((e.vadUseKrispSettingVersion = eI), (e.modeOptions.vadUseKrisp = !0)), e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)), !e.vadThrehsoldMigrated)) {
                var t;
                (e.vadThrehsoldMigrated = !0), (null == (t = e.modeOptions) ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = eD);
            }
            (0, X.isWeb)() ? e.ncUseKrispjsSettingVersion !== eT && ((e.ncUseKrispjsSettingVersion = eT), (e.noiseSuppression = !1), (e.noiseCancellation = !0)) : e.ncUseKrispSettingVersion !== eS && ((e.ncUseKrispSettingVersion = eS), (e.noiseSuppression = !1), (e.noiseCancellation = !0)), e.hardwareEnabledVersion !== eN && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = eN)), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
        }),
        tk();
}
function tx(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = tb(t);
    return Object.assign(r, e), !__OVERLAY__ && n && g.K.set(eO, eU), r;
}
function tM() {
    g.K.remove(eO), location.reload();
}
function tk() {
    var e, t, n;
    let r = tb();
    ej.setAudioInputDevice(r.inputDeviceId), ej.setAudioOutputDevice(r.outputDeviceId), tS(), ej.setInputVolume(r.inputVolume), ej.setOutputVolume(r.outputVolume), ej.setH264Enabled(null == (e = r.hardwareEncoding) || e || r.openH264), ej.setAv1Enabled(null == (t = r.hardwareEncoding) || t), ej.setH265Enabled(null == (n = r.hardwareEncoding) || n), ej.setAecDump(r.aecDumpEnabled), ej.setSidechainCompression(r.sidechainCompression), ej.setSidechainCompressionStrength(r.sidechainCompressionStrength);
}
function tj() {
    eB ||
        ej.enable().then(() =>
            b.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
                enabled: !0,
                unmute: !1
            })
        );
}
function tU(e) {
    return {
        id: eh.w5,
        index: 0,
        name: e,
        disabled: !0
    };
}
function tG(e, t) {
    if (0 === e.length) {
        let e = tU(t);
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
function tB(e, t) {
    var n;
    let r = null != (n = e[t]) ? n : d()(e).values().first();
    return null != r ? r.id : t;
}
function tF(e) {
    let t = eZ;
    if (((eZ = tG(e, em.NW.string(em.t['/QIjDA']))), !d().isEqual(eZ, t))) {
        let e = tb(),
            t = tB(eZ, e.inputDeviceId);
        ej.setAudioInputDevice(t);
    }
}
function tV(e) {
    let t = eH;
    if (((eH = tG(e, em.NW.string(em.t.xlUg0t))), !d().isEqual(eH, t))) {
        let e = tb(),
            t = tB(eH, e.outputDeviceId);
        ej.setAudioOutputDevice(t);
    }
}
function tZ(e) {
    e3 = e.length > 0;
    let t = eW;
    if (((eW = tG(e, em.NW.string(em.t.WKWARU))), eQ && !d().isEqual(eW, t))) {
        var n;
        let e = void 0 !== eW[eX],
            r = eX === eh.w5 && (null == (n = t[eh.w5]) ? void 0 : n.disabled);
        tS(e || r);
    }
}
function tH() {
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
            { localMutes: s, localVolumes: l } = tb(i);
        for (let [e, t] of Object.entries(a))
            null == (0, H.Ky)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== o ? (l[e] = t.volume) : delete l[e],
                ej.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (n)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == a[e] &&
                    (delete s[e],
                    delete l[e],
                    ej.eachConnection((t) => {
                        t.setLocalVolume(e, o), t.setLocalMute(e, !1);
                    }, i));
        tx(
            {
                localMutes: s,
                localVolumes: l
            },
            i
        );
    }
}
function tW(e) {
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
function tY(e, t) {
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
function tK(e) {
    (i = e.sessionId),
        (eY = !1),
        (eq = !1),
        (0, X.isWeb)() ||
            (G.Z.subscribe({ location: 'handleConnectionOpen' }, (e) => {
                let t = tb();
                !e.sidechainAvailable && t.sidechainCompression ? (tx({ sidechainCompressionSettingVersion: 0 }), nf(!1)) : e.sidechainAvailable && t.sidechainCompressionSettingVersion < eA && (tx({ sidechainCompressionSettingVersion: eA }), nf(e.sidechainEnabled));
            }),
            np());
    let t = tb();
    tw() && (t.automaticAudioSubsystem && nV(), t.audioSubsystemSettingVersion < eC && (tx({ audioSubsystemSettingVersion: eC }), t.automaticAudioSubsystem || ej.getAudioSubsystem() === eh.iA.LEGACY || nF(eh.iA.AUTOMATIC))),
        (0, K.wt)({
            location: 'MediaEngineStore',
            autoTrackExposure: !1
        }) &&
            null !== t.mostRecentlyRequestedVoiceFilter &&
            (0, Y.J_)(),
        tH();
}
function tz(e) {
    let { mediaEngineState: t } = e;
    (eU = t.settingsByContext), (eZ = t.inputDevices), (eH = t.outputDevices), (tf = t.appSupported), (e9 = t.krispModuleLoaded), (eV = t.goLiveContext);
}
function tq() {
    i = null;
}
function tQ(e) {
    switch (e.state) {
        case ed.hes.CONNECTING:
            tj();
            break;
        case ed.hes.RTC_CONNECTING:
            (e6 = !1), (e5 = !1);
            break;
        case ed.hes.RTC_CONNECTED:
            tS();
            break;
        case ed.hes.DISCONNECTED:
            t6(), t5();
    }
    tD.update();
}
function tX(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => (i === t.sessionId ? ((eY = t.mute || t.suppress), (eq = t.deaf), ej.eachConnection(tO), tS((null == t.guildId || null == t.channelId || null == ti || ti === t.channelId) && eQ), (ti = t.channelId), !0) : (__OVERLAY__ || t.userId !== en.default.getId() || null != es.ZP.getChannelId() || tS(!1, null), e)), !1);
}
function tJ(e) {
    let { mute: t } = e;
    (eK = t), ej.eachConnection(tO);
}
function t$(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = tb(t);
    if (t === eh.Yn.DEFAULT && (Z.Z.requestPermission(e_.Eu.AUDIO), ez)) return !1;
    (r = !i && !r) || (i = !1),
        n || (eJ = !0),
        tx(
            {
                mute: r,
                deaf: i
            },
            t
        ),
        ej.eachConnection(tO);
}
function t0(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    tx({ mute: n }, t), r || (eJ = !0), ej.eachConnection(tO);
}
function t1(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r
    } = e;
    if (t !== ep.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    tH(!0);
}
function t2(e) {
    let { context: t } = e;
    tx({ deaf: !tb(t).deaf }, t), ej.eachConnection(tO);
}
function t3(e) {
    let { context: t, userId: n } = e;
    if (n === en.default.getId()) return;
    let { localMutes: r } = tb(t);
    r[n] ? delete r[n] : (r[n] = !0), tx({ localMutes: r }, t), ej.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function t4(e) {
    var t, n, r, i, o, a, s;
    let { context: l, userId: u, videoToggleState: d, persist: f, isAutomatic: _ } = e;
    c()(!(f && _), 'These are not allowed to both be true.');
    let p = d === ed.ZUi.DISABLED,
        { disabledLocalVideos: h } = tb(l),
        m = null != (t = h[u]) && t,
        g = tc.has(u),
        E = d === ed.ZUi.AUTO_ENABLED || d === ed.ZUi.MANUAL_ENABLED;
    ev.info('disableVideo='.concat(p, ' currentlyDisabled=').concat(m, ' currentlyAutoDisabled=').concat(g, ', isVideoShown=').concat(E)), c()(!(g && !m), 'If you are auto-disabled, then you are also disabled.');
    let b = p !== m,
        y = l === eh.Yn.DEFAULT,
        v = _ && b && y,
        O = f && b && y;
    ev.info('changed='.concat(b, ' isDefaultContext=').concat(y, ' isUpdateCausedByVideoHealthManager=').concat(v, ' isManualToggleByUser=').concat(O));
    let { videoToggleStateMap: I } = tb(l);
    if ((I[u] === ed.ZUi.AUTO_PROBING && d === ed.ZUi.AUTO_ENABLED && (0, V.Z)(u, p ? eh.fC.AUTO_DISABLE : eh.fC.AUTO_ENABLE, E), (I[u] = d), tx({ videoToggleStateMap: I }, l, f), d === ed.ZUi.AUTO_PROBING ? null == (n = es.ZP.getRTCConnection()) || n.pauseStatsCollectionForUser(u, !0) : null == (r = es.ZP.getRTCConnection()) || r.pauseStatsCollectionForUser(u, !1), tu || (ev.info('isAutoDisableAllowed='.concat(tu, ' - disabling VideoHealthManager')), null == (o = es.ZP.getRTCConnection()) || null == (i = o.getVideoHealthManager()) || i.disable()), v)) {
        if ((!p && !g) || (p && !tu)) return;
        (0, V.Z)(u, p ? eh.fC.AUTO_DISABLE : eh.fC.AUTO_ENABLE, E), p ? tc.add(u) : tc.delete(u);
    } else O && (g && !p ? (ev.info('disallowing auto-disable for this session because of manual override by user'), (tu = !1), null == (s = es.ZP.getRTCConnection()) || null == (a = s.getVideoHealthManager()) || a.disable(), (0, V.Z)(u, eh.fC.MANUAL_REENABLE, E)) : (0, V.Z)(u, p ? eh.fC.MANUAL_DISABLE : eh.fC.MANUAL_ENABLE, E));
    y && !p && tc.delete(u),
        p ? (h[u] = !0) : delete h[u],
        tx({ disabledLocalVideos: h }, l, f),
        ej.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(u, null != (t = h[u]) && t);
        }, l);
}
function t6() {
    if (0 === tc.size) return;
    let e = eh.Yn.DEFAULT,
        { disabledLocalVideos: t } = tb(e);
    tc.forEach((n) => {
        c()(t[n], 'If you are auto-disabled, then you are also disabled.'), delete t[n], ej.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tc.clear(),
        tx({ disabledLocalVideos: t }, e, !1);
}
function t5() {
    let e = eh.Yn.DEFAULT,
        { videoToggleStateMap: t } = tb(e);
    for (let [e, n] of Object.entries(t)) n === ed.ZUi.AUTO_PROBING && delete t[e];
    tx({ videoToggleStateMap: t }, e, !1);
}
function t7(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === en.default.getId()) return;
    let i = t === eh.Yn.STREAM ? eh.Yh : eh.Qx,
        { localVolumes: o } = tb(t);
    r === i ? delete o[n] : (o[n] = r), tx({ localVolumes: o }, t), ej.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function t8(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: o } = tb(t);
    (o[n] = {
        left: r,
        right: i
    }),
        tx({ localPans: o }, t),
        ej.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function t9(e) {
    let { context: t, mode: n, options: r } = e;
    tx(
        {
            mode: n,
            modeOptions: r
        },
        t
    ),
        ej.eachConnection(ty),
        tD.update();
}
function ne(e) {
    let { volume: t } = e;
    tx({ inputVolume: tv(t) }), ej.setInputVolume(t);
}
function nt(e) {
    let { volume: t } = e;
    tx({ outputVolume: t }), ej.setOutputVolume(t);
}
function nn(e) {
    let { id: t } = e;
    tx({ inputDeviceId: (t = tB(eZ, t)) }), ej.setAudioInputDevice(t);
}
function nr(e) {
    let { id: t } = e;
    tx({ outputDeviceId: (t = tB(eH, t)) }), ej.setAudioOutputDevice(t);
}
function ni(e) {
    let { id: t } = e;
    tx({ videoDeviceId: (t = tB(eW, t)) }), tS();
}
function no(e) {
    return eF !== e.required && ((eF = e.required), e.required || ej.interact(), !0);
}
function na(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    tF(t), tV(n), tZ(r);
}
function ns(e) {
    let { inputVolume: t, outputVolume: n } = e;
    tx({
        inputVolume: tv(t),
        outputVolume: n
    });
}
function nl(e) {
    let t = tb();
    z.default.track(ed.rMx.VOICE_PROCESSING, {
        echo_cancellation: t.echoCancellation,
        noise_cancellation: t.noiseCancellation,
        noise_suppression: t.noiseSuppression,
        automatic_gain_control: t.automaticGainControl,
        location: e
    });
}
function nc(e) {
    let t = tx({ echoCancellation: e.enabled });
    ej.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nh(), nl(e.location);
}
function nu(e) {
    nf(e.enabled);
}
function nd(e) {
    let t = tx({ sidechainCompressionStrength: e.strength });
    ej.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function nf(e) {
    let t = tx({ sidechainCompression: e });
    ej.setSidechainCompression(t.sidechainCompression);
}
function n_(e) {
    let { enabled: t, loopbackReason: n } = e,
        r = td.size > 0;
    return t ? td.add(n) : td.delete(n), np(), td.size > 0 !== r && nh();
}
function np() {
    let { voiceFiltersPreProcessMute: e } = F.Z.getCurrentConfig({ location: 'setMaybePreprocessMute' }, { autoTrackExposure: !0 }),
        t = e && !td.has('voice_filter_preview') && !td.has('mic_test');
    ej.setMaybePreprocessMute(t);
}
function nh() {
    let e = tb(),
        t = td.size > 0,
        n = e.inputDeviceId,
        r = ei.Z.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        o = ei.Z.hasNoiseSuppression(n) || e.noiseSuppression,
        a = ei.Z.hasAutomaticGainControl(n) || e.automaticGainControl,
        s = e.noiseCancellation,
        l = null !== te;
    ej.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: o,
        automaticGainControl: a,
        noiseCancellation: s,
        voiceFilters: l
    });
}
function nm(e) {
    let t = tx({ noiseSuppression: e.enabled });
    ej.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nh(), nl(e.location);
}
function ng(e) {
    let t = tx({ automaticGainControl: e.enabled });
    ej.eachConnection((e) => e.setAutomaticGainControl(t.automaticGainControl)), nh(), nl(e.location);
}
function nE(e) {
    let t = tx({ noiseCancellation: e.enabled });
    ej.eachConnection((e) => e.setNoiseCancellation(t.noiseCancellation)), nh(), nl(e.location);
}
function nb(e) {
    let t = tx({ experimentalEncoders: e.enabled });
    ej.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
}
function ny(e) {
    var t, n;
    let { enabled: r } = e,
        i = tx({ hardwareEncoding: r });
    ej.eachConnection((e) => {
        var t;
        return e.setHardwareH264(null == (t = i.hardwareEncoding) || t);
    }),
        ej.setH264Enabled(i.hardwareEncoding || i.openH264),
        ej.setAv1Enabled(null == (t = i.hardwareEncoding) || t),
        ej.setH265Enabled(null == (n = i.hardwareEncoding) || n);
}
function nv(e) {
    tx({ silenceWarning: e.enabled }), tD.update();
}
function nO(e) {
    ej.setDebugLogging(e.enabled);
}
function nI(e) {
    tx({ videoHook: e.enabled });
}
function nS(e) {
    tx({ experimentalSoundshare2: e.enabled });
}
function nT(e) {
    let { enabled: t } = e;
    tx({ useSystemScreensharePicker: t });
}
function nN(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = tx({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r
        });
    ej.eachConnection((e) => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers));
}
function nA(e) {
    let { enabled: t } = e;
    tx({ qos: t }), ej.eachConnection((e) => e.setQoS(t));
}
function nC() {
    tM();
}
function nR(e) {
    let { inputDetected: t } = e;
    (e4 = t), !e6 && e4 && ((e6 = !0), tD.update());
}
function nP(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === ez) return !1;
    (ez = n), ej.eachConnection(tO);
}
function nw(e) {
    let { state: t, permissionType: n } = e,
        r = t === e_.PQ.ACCEPTED;
    switch (n) {
        case e_.Eu.AUDIO:
            (ts = !0), ej.eachConnection(tO);
            break;
        case e_.Eu.CAMERA:
            !r && eQ && tS(!1);
            break;
        default:
            return !1;
    }
}
function nD() {
    return e9 || !1;
}
async function nL() {
    try {
        await ee.ZP.ensureModule('discord_krisp'), ee.ZP.requireModule('discord_krisp'), (e9 = !0), r.emitChange();
    } catch (t) {
        ev.warn('Failed to load Krisp module: '.concat(t.message)), $.Z.captureException(t);
        let e = eh.H3.INITIALIZED;
        if (t.message.includes(': ')) {
            let n = parseInt(t.message.substring(t.message.indexOf(': ') + 1));
            e = isNaN(n) || 0 === n ? eh.H3.INITIALIZED : n;
        }
        z.default.track(ed.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), tx({ noiseCancellation: !1 });
    } finally {
        e8 = !1;
    }
}
function nx() {
    return (0, X.isWindows)() || (0, X.isLinux)() || ((0, X.isMac)() && _().satisfies(null === y.Z || void 0 === y.Z ? void 0 : y.Z.os.release, ex));
}
function nM() {
    !nx() || __OVERLAY__ || e8 || e9 ? ((0, X.isWeb)() && ej.supports(eh.AN.NOISE_CANCELLATION) ? ((e9 = !0), r.emitChange()) : (0, X.isWeb)() && tx({ noiseCancellation: !1 })) : ((e8 = !0), nL());
}
function nk(e) {
    let { enabled: t } = e;
    z.default.track(ed.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != te ? te : null,
        enabled: t
    }),
        tx({ voiceFilterPlaybackEnabled: t });
}
function nj(e) {
    let { newVoiceFilterId: t } = e;
    tx({ mostRecentlyRequestedVoiceFilter: t }), ej.eachConnection((e) => e.setVoiceFilterId(t));
}
function nU() {
    tx({ mostRecentlyRequestedVoiceFilter: null });
}
function nG(e) {
    let { voiceFilterId: t } = e;
    (tn = te), (tr = tt), (te = t), (tt = null === t ? null : Date.now());
}
function nB(e) {
    nF(e.subsystem);
}
function nF(e) {
    e === eh.iA.AUTOMATIC ? (tx({ automaticAudioSubsystem: !0 }), nV()) : (tx({ automaticAudioSubsystem: !1 }), ej.setAudioSubsystem(e));
}
function nV() {
    let { enabled: e } = j.I.getCurrentConfig({ location: 'interpretAutomaticAudioSubsystem' });
    e ? ej.queueAudioSubsystem(eh.iA.EXPERIMENTAL) : ej.queueAudioSubsystem(eh.iA.STANDARD);
}
function nZ(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && tS(i, null), null != t || null == n)) {
        e7 = !1;
        return;
    }
    if (e7) return;
    e7 = !0;
    let o = tb();
    (o.mute || o.deaf) &&
        (tx({
            deaf: !1,
            mute: !1
        }),
        ej.eachConnection(tO));
}
function nH(e) {
    let { application: t } = e;
    eG.add(t.id);
}
function nW(e) {
    let { application: t } = e;
    eG.delete(t.id);
}
function nY(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case 'audio':
                (eB = !1), ej.eachConnection(tO);
                break;
            case 'video':
                tS(!1);
        }
}
function nK(e) {
    (eB = e.enabled),
        e.unmute &&
            tx({
                mute: !1,
                deaf: !1
            }),
        ej.eachConnection(tO);
}
function nz(e) {
    let { enabled: t } = e;
    Z.Z.requestPermission(e_.Eu.CAMERA), tS(t);
}
function nq(e) {
    let { sourceId: t, applicationName: n, quality: i } = e,
        o = I.Z.isDecoupledGameClippingEnabled(),
        s = I.Z.getSettings().decoupledClipsEnabled;
    if (!o || !s || null == y.Z) return;
    let l = null,
        c = null,
        u = q.Z.getPidFromDesktopSource(t);
    ({ soundshareId: l, soundshareSession: c } = tW(u));
    let d = {
        desktopSource: {
            id: t,
            sourcePid: u,
            soundshareId: l,
            soundshareSession: c
        },
        quality: i
    };
    null != a && a.desktopSource.id !== d.desktopSource.id && (ej.setClipsSource(null), (0, X.isWindows)() && null != a.desktopSource.soundshareId && v.pn(a.desktopSource.soundshareId)), null != l && tY(l, c), (a = d);
    let f = tE(),
        _ = tb().videoHook;
    ej.setClipsSource({
        desktopDescription: {
            id: a.desktopSource.id,
            soundshareId: a.desktopSource.soundshareId,
            useVideoHook: _,
            useGraphicsCapture: tR(),
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: tP(),
            videoHookStaleFrameTimeoutMs: eP,
            graphicsCaptureStaleFrameTimeoutMs: ew,
            hdrCaptureMode: f
        },
        quality: i,
        applicationName: n
    });
}
function nQ(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((a = null), ej.setClipsSource(null));
}
function nX(e) {
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
        X.isPlatformEmbedded && !0 === a && (({ soundshareId: e, soundshareSession: r } = tW(c)), null != e && tY(e, r)),
            tI(s),
            tS(s === eh.Yn.STREAM && eQ, {
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
            a = e === eh.Yn.STREAM && eQ,
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
function nJ(e) {
    let { section: t } = e;
    return t === ed.oAB.VOICE && tj(), !1;
}
function n$() {
    return ej.eachConnection(tA), !1;
}
function n0(e) {
    let { enabled: t } = e,
        n = tx({ openH264: t });
    ej.setH264Enabled(n.hardwareEncoding || n.openH264),
        ej.eachConnection((e) => {
            var t;
            return e.setSoftwareH264(null == (t = n.openH264) || t);
        });
}
function n1(e) {
    let { enabled: t } = e,
        n = tx({ aecDumpEnabled: t });
    ej.setAecDump(n.aecDumpEnabled);
}
function n2(e) {
    let { state: t } = e,
        n = R.Z.isEnabled();
    if (t === ed.$7l.BACKGROUND && eQ && !n) (e2 = !0), tS(!1);
    else {
        if (t !== ed.$7l.ACTIVE || !e2) return !1;
        (e2 = !1), tS(!0);
    }
    return !0;
}
function n3(e) {
    ej.eachConnection((t) => t.setBitRate(e.bitrate));
}
function n4() {
    if ((!eQ && null == o) || null != es.ZP.getRTCConnectionId()) return !1;
    tS(!1, null);
}
function n6() {
    return !!to && ((to = !1), !0);
}
function n5(e) {
    ej.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function n7(e) {
    let { settings: t } = e;
    ej.applyMediaFilterSettings(t).finally(() => {
        (ta = !1), r.emitChange();
    });
}
function n8() {
    ta = !0;
}
function n9() {
    ta = !1;
}
function re(e) {
    tp = e.enabled;
}
class rt extends (s = h.ZP.Store) {
    initialize() {
        tC(),
            tL(),
            nM(),
            t5(),
            (tf = {
                [eh.AN.VIDEO]: ej.supports(eh.AN.VIDEO),
                [eh.AN.DESKTOP_CAPTURE]: ej.supports(eh.AN.DESKTOP_CAPTURE),
                [eh.AN.HYBRID_VIDEO]: ej.supports(eh.AN.HYBRID_VIDEO)
            }),
            this.waitFor(en.default, ei.Z, eo.Z, ea.Z, es.ZP, P.ZP, Z.Z.storage, W.Z, C.Z, I.Z);
    }
    supports(e) {
        return ej.supports(e);
    }
    supportsInApp(e) {
        return tf[e] || ej.supports(e);
    }
    isSupported() {
        return ej.supported();
    }
    isExperimentalEncodersSupported() {
        return ej.supports(eh.AN.EXPERIMENTAL_ENCODERS);
    }
    isNoiseSuppressionSupported() {
        return ej.supports(eh.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return nD();
    }
    isNoiseCancellationError() {
        return to;
    }
    isAutomaticGainControlSupported() {
        return ej.supports(eh.AN.AUTOMATIC_GAIN_CONTROL);
    }
    isAdvancedVoiceActivitySupported() {
        return nD();
    }
    isAecDumpSupported() {
        return ej.supports(eh.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return ej.supports(eh.AN.VIDEO) && ej.supports(eh.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        let t = (null == (e = eo.Z.getChannel(ti)) ? void 0 : e.type) === ed.d4z.GUILD_STAGE_VOICE,
            n = r.getHardwareEncoding();
        return !t && n && M.Z.simulcastEnabled();
    }
    getAecDump() {
        return tb().aecDumpEnabled;
    }
    getMediaEngine() {
        return ej;
    }
    getVideoComponent() {
        return ej.Video;
    }
    getCameraComponent() {
        return ej.Camera;
    }
    isEnabled() {
        return eB;
    }
    isMute() {
        return this.isSelfMute() || eY;
    }
    isDeaf() {
        return this.isSelfDeaf() || eq;
    }
    hasContext(e) {
        return null != eU[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
        return e === eh.Yn.DEFAULT && eK;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
        return !this.isEnabled() || tb(e).mute || !Z.Z.didHavePermission(e_.Eu.AUDIO) || this.isSelfDeaf(e) || (e === eh.Yn.DEFAULT && ez);
    }
    shouldSkipMuteUnmuteSound() {
        return eJ;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        eJ = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && ei.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return tp;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
        return !this.isSupported() || tb(e).deaf;
    }
    isVideoEnabled() {
        return eQ && e3;
    }
    isVideoAvailable() {
        return Object.values(eW).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.STREAM;
        return eV === e && null != o;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.STREAM;
        return eV === t && null != o && (null == (e = o.desktopSource) ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT;
        return e !== en.default.getId() && (tb(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return ej.supports(eh.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT;
        return null != (t = tb(n).disabledLocalVideos[e]) && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT;
        return null != (t = tb(n).videoToggleStateMap[e]) ? t : ed.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT;
        return t === eh.Yn.DEFAULT && tc.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
        return e === eh.Yn.DEFAULT && tc.size > 0;
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
        return eV;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT,
            n = tb(t).localPans[e];
        return null != n ? n : eR;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT,
            n = t === eh.Yn.STREAM ? eh.Yh : eh.Qx,
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
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
        return tb(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
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
            d().each(eU, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i }
                } = t;
                r === ed.pM4.PUSH_TO_TALK && eG.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return tB(eZ, tb().inputDeviceId);
    }
    getOutputDeviceId() {
        return tB(eH, tb().outputDeviceId);
    }
    getVideoDeviceId() {
        return tB(eW, tb().videoDeviceId);
    }
    getInputDevices() {
        return eZ;
    }
    getOutputDevices() {
        return eH;
    }
    getVideoDevices() {
        return eW;
    }
    getEchoCancellation() {
        let e = tb();
        return ei.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
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
        return ei.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tb();
        return ei.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
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
        return ej.getDebugLogging();
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
        return tw() && tb().automaticAudioSubsystem ? eh.iA.AUTOMATIC : ej.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return ej.getMLSSigningKey(e, t);
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
        return tb(e);
    }
    getState() {
        return {
            settingsByContext: eU,
            inputDevices: eZ,
            outputDevices: eH,
            appSupported: tf,
            krispModuleLoaded: e9,
            goLiveSource: o,
            goLiveContext: eV
        };
    }
    getInputDetected() {
        return e4;
    }
    getNoInputDetectedNotice() {
        return e5;
    }
    getPacketDelay() {
        return X.isPlatformEmbedded || this.getMode() !== ed.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        ej.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return eF;
    }
    getVideoHook() {
        return tb().videoHook;
    }
    supportsVideoHook() {
        return ej.supports(eh.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tb().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e);
    }
    supportsExperimentalSoundshare() {
        return ej.supports(eh.AN.EXPERIMENTAL_SOUNDSHARE) && _().satisfies(null === y.Z || void 0 === y.Z ? void 0 : y.Z.os.release, ef.I9);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = tb().useSystemScreensharePicker,
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
        let e = ej.supports(eh.AN.NATIVE_SCREENSHARE_PICKER);
        return k.Z.getCurrentConfig(
            { location: 'supportsSystemScreensharePicker' },
            {
                disable: !e,
                autoTrackExposure: !1
            }
        ).enableSystemPicker;
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
        return (0, X.isMac)() ? ej.supports(eh.AN.SOUNDSHARE) && _().satisfies(null === y.Z || void 0 === y.Z ? void 0 : y.Z.os.release, ef.yG) && tP() : (0, X.isWindows)() ? ej.supports(eh.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, X.isLinux)() && ej.supports(eh.AN.SCREEN_SOUNDSHARE);
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
        let e = ej.getSupportedSecureFramesProtocolVersion(),
            t = U.m.getCurrentConfig({ location: 'MediaEngineStore' });
        return 114 === e && (e = 1), t.canSupportDaveProtocol && e >= t.protocolVersionFloor ? e : 0;
    }
    hasClipsSource() {
        return null != a;
    }
    getGpuBrand() {
        return t_;
    }
}
eg(rt, 'displayName', 'MediaEngineStore');
let rn = (r = new rt(b.Z, {
    VOICE_CHANNEL_SELECT: nZ,
    VOICE_STATE_UPDATES: tX,
    CONNECTION_OPEN: tK,
    CONNECTION_CLOSED: tq,
    RTC_CONNECTION_STATE: tQ,
    AUDIO_SET_TEMPORARY_SELF_MUTE: tJ,
    AUDIO_TOGGLE_SELF_MUTE: t$,
    AUDIO_SET_SELF_MUTE: t0,
    AUDIO_TOGGLE_SELF_DEAF: t2,
    AUDIO_TOGGLE_LOCAL_MUTE: t3,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: t4,
    AUDIO_SET_LOCAL_VOLUME: t7,
    AUDIO_SET_LOCAL_PAN: t8,
    AUDIO_SET_MODE: t9,
    AUDIO_SET_INPUT_VOLUME: ne,
    AUDIO_SET_OUTPUT_VOLUME: nt,
    AUDIO_SET_INPUT_DEVICE: nn,
    AUDIO_SET_OUTPUT_DEVICE: nr,
    AUDIO_SET_ECHO_CANCELLATION: nc,
    AUDIO_SET_SIDECHAIN_COMPRESSION: nu,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nd,
    AUDIO_SET_LOOPBACK: n_,
    AUDIO_SET_NOISE_SUPPRESSION: nm,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: ng,
    AUDIO_SET_NOISE_CANCELLATION: nE,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: nv,
    AUDIO_SET_DEBUG_LOGGING: nO,
    MEDIA_ENGINE_SET_VIDEO_HOOK: nI,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: nS,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: nT,
    AUDIO_SET_ATTENUATION: nN,
    AUDIO_SET_QOS: nA,
    MEDIA_ENGINE_DEVICES: na,
    AUDIO_VOLUME_CHANGE: ns,
    AUDIO_RESET: nC,
    AUDIO_INPUT_DETECTED: nR,
    AUDIO_SET_SUBSYSTEM: nB,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: nK,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: nz,
    MEDIA_ENGINE_PERMISSION: nY,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: nX,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: ni,
    MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nb,
    MEDIA_ENGINE_INTERACTION_REQUIRED: no,
    USER_SETTINGS_MODAL_INIT: nJ,
    USER_SETTINGS_MODAL_SET_SECTION: nJ,
    CERTIFIED_DEVICES_SET: n$,
    RPC_APP_CONNECTED: nH,
    RPC_APP_DISCONNECTED: nW,
    OVERLAY_INITIALIZE: tz,
    MEDIA_ENGINE_SET_OPEN_H264: n0,
    MEDIA_ENGINE_SET_HARDWARE_ENCODING: ny,
    APP_STATE_UPDATE: n2,
    SET_CHANNEL_BITRATE: n3,
    SET_VAD_PERMISSION: nP,
    SET_NATIVE_PERMISSION: nw,
    SET_CHANNEL_VIDEO_QUALITY_MODE: n5,
    MEDIA_ENGINE_SET_AEC_DUMP: n1,
    CHANNEL_DELETE: n4,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: n6,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: n7,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: n8,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: n9,
    USER_SETTINGS_PROTO_UPDATE: t1,
    CLIPS_INIT: nq,
    CLIPS_SETTINGS_UPDATE: nQ,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: re,
    VOICE_FILTER_REQUEST_SWITCH: nj,
    VOICE_FILTER_LOOPBACK_TOGGLE: nk,
    VOICE_FILTER_APPLIED: nG,
    VOICE_FILTER_DOWNLOAD_FAILED: nU,
    VOICE_FILTER_APPLY_FAILED: nU
}));
