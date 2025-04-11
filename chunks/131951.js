let r, i, o, a;
n.d(t, { Z: () => ri }), n(388685), n(953529), n(457542), n(539854), n(642613), n(49124), n(337869);
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
    P = n(646047),
    R = n(594190),
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
    eP = {
        left: 1,
        right: 1
    },
    eR = 500,
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
    eH = { [eh.w5]: tG('No Input Devices') },
    eW = { [eh.w5]: tG('No Output Devices') },
    eY = { [eh.w5]: tG('No Video Devices') },
    eK = !1,
    ez = !1,
    eq = !1,
    eQ = !1,
    eX = !1,
    eJ = eh.Av,
    e$ = !1,
    e0 = !1,
    e1 = !1,
    e2 = new E.V7(),
    e3 = !1,
    e4 = !1,
    e5 = null,
    e6 = !1,
    e8 = !1,
    e7 = !1,
    e9 = !1,
    te = !1,
    tt = null,
    tn = null,
    tr = null,
    ti = null,
    to = null,
    ta = !1,
    ts = !1,
    tl = !1;
Z.Z.hasPermission(e_.Eu.AUDIO, { showAuthorizationError: !1 }), Z.Z.hasPermission(e_.Eu.CAMERA, { showAuthorizationError: !1 });
let tc = !1,
    tu = new Set(),
    td = tc,
    tf = new Set(),
    t_ = {},
    tp = null,
    th = !0,
    tm = !1,
    tg = {},
    tE = 5 * Q.Z.Millis.SECOND;
function tb() {
    var e, t;
    return null != (t = null == (e = ec.default.getCurrentUser()) ? void 0 : e.isStaff()) && t ? 'always' : J.Z === p.R.CANARY ? 'permittedDevicesOnly' : 'never';
}
function ty() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT,
        t = eG[e];
    return null == t && ((t = ej()), (eG[e] = t)), t;
}
function tv(e) {
    let t = ty(e.context);
    e.setInputMode(t.mode, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: t.modeOptions.autoThreshold,
        vadUseKrisp: t.modeOptions.vadUseKrisp && nL(),
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        pttReleaseDelay: t.modeOptions.delay
    });
}
function tO(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Qx;
    return d().clamp(e, 0, t);
}
function tI(e) {
    let t = ty(e.context),
        n = !eV || t.mute || t.deaf;
    e.context === eh.Yn.DEFAULT ? (n = n || eK || ez || eq || !Z.Z.didHavePermission(e_.Eu.AUDIO)) : e.context === eh.Yn.STREAM && (n = !0), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eh.Yn.DEFAULT && O.Z.updateNativeMute();
}
function tS(e) {
    e !== eZ && (null != o && eU.setGoLiveSource(null, eZ), (eZ = e));
}
function tT() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX,
        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
        s = o;
    if (((null == s ? void 0 : s.desktopSource) != null && s.desktopSource.id !== (null == a || null == (e = a.desktopSource) ? void 0 : e.id) && (null != s.desktopSource.soundshareId && (0, X.isWindows)() && v.pn(s.desktopSource.soundshareId), eU.setGoLiveSource(null, eZ)), (null == s ? void 0 : s.cameraSource) != null && (s.cameraSource.videoDeviceGuid !== (null == a || null == (t = a.cameraSource) ? void 0 : t.videoDeviceGuid) || s.cameraSource.audioDeviceGuid !== (null == a || null == (n = a.cameraSource) ? void 0 : n.audioDeviceGuid)) && eU.setGoLiveSource(null, eZ), (eX || i) && ((eJ = (eX = i) ? tV(eY, ty().videoDeviceId) : eh.Av), eU.setVideoInputDevice(eJ)), (o = a), null != a)) {
        let e = {
            resolution: a.quality.resolution,
            frameRate: a.quality.frameRate
        };
        if (null != a.desktopSource) {
            let t = tb(),
                n = ty().videoHook;
            eU.setGoLiveSource(
                {
                    desktopDescription: {
                        id: a.desktopSource.id,
                        soundshareId: a.desktopSource.soundshareId,
                        useVideoHook: n,
                        useGraphicsCapture: tR(),
                        useLoopback: r.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: tw(),
                        videoHookStaleFrameTimeoutMs: eR,
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
function tN(e, t, n, r) {
    var i;
    let o = null != (i = null == e ? void 0 : e.soundshareSession) ? i : '';
    null == tg[o] && (tg[o] = new Set());
    let a = null != t && !tg[o].has(t);
    a && tg[o].add(t),
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
function tA(e) {
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
function tC(e) {
    let t = ty(),
        n = t.inputDeviceId;
    if ((e.setEchoCancellation(ei.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(ei.Z.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(ei.Z.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), e.setVoiceFilterId(tt), (0, X.isWeb)())) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function tP() {
    eU.on(m.aB.Connection, (e) => {
        var t, n;
        tv(e), tI(e), tC(e);
        let i = ty();
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
        (0, X.isWindows)() ? ((null == tp ? void 0 : tp.startsWith('NVIDIA')) || (null == tp ? void 0 : tp.startsWith('AMD')) ? e.setExperimentFlag(eh.V8.SIGNAL_AV1, !0) : e.setExperimentFlag(eh.V8.SIGNAL_AV1_DECODE, !0)) : ((0, X.isMac)() || (0, X.isLinux)()) && e.setExperimentFlag(eh.V8.SIGNAL_AV1_DECODE, !0), (0, X.isWindows)() && e.setExperimentFlag(eh.V8.SIGNAL_AV1_HARDWARE_DECODE, !0), eU.setHasFullbandPerformance((0, N.Z)());
        let f = (0, D.D)('setupMediaEngine').enabled;
        if ((e.setRemoteAudioHistory(1000 * !!f), (0, S.Z)(r))) {
            let t = I.Z.getSettings();
            e.setExperimentFlag(eh.V8.STREAMER_CLIP, t.clipsEnabled);
            let { enableViewerClipping: n } = B.Z.getCurrentConfig({ location: 'f627ab_15' }, { autoTrackExposure: !1 });
            e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eh.ux);
        }
        for (let t of ((i = ty(e.context)), e.setPostponeDecodeLevel(eL), Object.keys(i.localMutes))) t !== en.default.getId() && e.setLocalMute(t, i.localMutes[t]);
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
                ((e0 = !1),
                (e1 = !1),
                e.on(m.Sh.SpeakingWhileMuted, () => {
                    (e0 = !0),
                        (e1 = !0),
                        r.emitChange(),
                        e2.stop(),
                        e2.start(eM, () => {
                            (e1 = !1), r.emitChange();
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
                tN(null == o ? void 0 : o.desktopSource, t, n, r);
            }),
            e.on(m.Sh.SoundshareSpeaking, () => {
                (null == o ? void 0 : o.desktopSource) != null && (z.default.track(ed.rMx.SOUNDSHARE_TRANSMITTING, (0, w.Z)(null == o ? void 0 : o.desktopSource)), null != ea.Z.getHookError(ed.K3D.SOUND) && b.Z.wait(() => b.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
            });
        let _ = new E.V7();
        e.on(m.Sh.SoundshareTrace, (e) => {
            switch (e.type) {
                case 'soundshare_attach_requested':
                    _.start(tE, () => {
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
                        (tN(null == o ? void 0 : o.desktopSource, n, t, r),
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
                        underlyingError: tA(e)
                    }),
                    (ta = !0),
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
                        underlyingError: tA(e)
                    }),
                    z.default.track(ed.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    b.Z.dispatch({
                        type: 'AUDIO_SET_MODE',
                        context: eh.Yn.DEFAULT,
                        mode: ed.pM4.VOICE_ACTIVITY,
                        options: ey(eE({}, ty(eh.Yn.DEFAULT).modeOptions), { vadUseKrisp: !1 })
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
            (tl = !0),
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
                media_session_id: es.ZP.getMediaSessionId(),
                rtc_connection_id: es.ZP.getRTCConnectionId()
            });
        }),
        eU.on(m.aB.AudioInputInitialized, (e) => {
            z.default.track(ed.rMx.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * Q.Z.Millis.SECOND),
                rtc_connection_id: es.ZP.getRTCConnectionId()
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
            let t = rr(e);
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
        tL.reset(),
        (0, el.q)().then((e) => {
            null != e && (tp = e.gpu_brand);
        });
}
function tR() {
    return (0, X.isWindows)() && _().satisfies(null === y.Z || void 0 === y.Z ? void 0 : y.Z.os.release, ef.nz);
}
function tw() {
    return (0, X.isMac)() && eU.supports(eh.AN.SCREEN_CAPTURE_KIT) && _().satisfies(null === y.Z || void 0 === y.Z ? void 0 : y.Z.os.release, ef.C7);
}
function tD() {
    return (0, X.isWindows)() && eU.supports(eh.AN.AUTOMATIC_AUDIO_SUBSYSTEM) && eU.supports(eh.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH);
}
let tL = new (class {
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
        let e = ty();
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
                                    e && (e8 = !0));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout
                    ));
            });
    }
})();
function tx() {
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
        tj();
}
function tM(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = ty(t);
    return Object.assign(r, e), !__OVERLAY__ && n && g.K.set(eO, eG), r;
}
function tk() {
    g.K.remove(eO), location.reload();
}
function tj() {
    var e, t, n;
    let r = ty();
    eU.setAudioInputDevice(r.inputDeviceId), eU.setAudioOutputDevice(r.outputDeviceId), tT(), eU.setInputVolume(r.inputVolume), eU.setOutputVolume(r.outputVolume), eU.setH264Enabled(null == (e = r.hardwareEncoding) || e || r.openH264), eU.setAv1Enabled(null == (t = r.hardwareEncoding) || t), eU.setH265Enabled(null == (n = r.hardwareEncoding) || n), eU.setAecDump(r.aecDumpEnabled), eU.setSidechainCompression(r.sidechainCompression), eU.setSidechainCompressionStrength(r.sidechainCompressionStrength);
}
function tU() {
    eV ||
        eU.enable().then(() =>
            b.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
                enabled: !0,
                unmute: !1
            })
        );
}
function tG(e) {
    return {
        id: eh.w5,
        index: 0,
        name: e,
        disabled: !0,
        hardwareId: void 0,
        containerId: void 0
    };
}
function tB(e, t) {
    if (0 === e.length) {
        let e = tG(t);
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
function tF(e) {
    let t = eH;
    if (((eH = tB(e, em.NW.string(em.t['/QIjDA']))), !d().isEqual(eH, t))) {
        let e = ty(),
            t = tV(eH, e.inputDeviceId);
        eU.setAudioInputDevice(t);
    }
}
function tZ(e) {
    let t = eW;
    if (((eW = tB(e, em.NW.string(em.t.xlUg0t))), !d().isEqual(eW, t))) {
        let e = ty(),
            t = tV(eW, e.outputDeviceId);
        eU.setAudioOutputDevice(t);
    }
}
function tH(e) {
    e4 = e.length > 0;
    let t = eY;
    if (((eY = tB(e, em.NW.string(em.t.WKWARU))), eX && !d().isEqual(eY, t))) {
        var n;
        let e = void 0 !== eY[eJ],
            r = eJ === eh.w5 && (null == (n = t[eh.w5]) ? void 0 : n.disabled);
        tT(e || r);
    }
}
function tW() {
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
            { localMutes: s, localVolumes: l } = ty(i);
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
        tM(
            {
                localMutes: s,
                localVolumes: l
            },
            i
        );
    }
}
function tY(e) {
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
function tK(e, t) {
    (0, X.isWindows)() &&
        v.YT(e, { soundshare_session: t }).then((t) => {
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
function tz(e) {
    (i = e.sessionId),
        (eK = !1),
        (eQ = !1),
        (0, X.isWeb)() ||
            (G.Z.subscribe({ location: 'handleConnectionOpen' }, (e) => {
                let t = ty();
                !e.sidechainAvailable && t.sidechainCompression ? (tM({ sidechainCompressionSettingVersion: 0 }), n_(!1)) : e.sidechainAvailable && t.sidechainCompressionSettingVersion < eA && (tM({ sidechainCompressionSettingVersion: eA }), n_(e.sidechainEnabled));
            }),
            nh());
    let t = ty();
    tD() && (t.automaticAudioSubsystem && nZ(), t.audioSubsystemSettingVersion < eC && (tM({ audioSubsystemSettingVersion: eC }), t.automaticAudioSubsystem || eU.getAudioSubsystem() === eh.iA.LEGACY || nF(eh.iA.AUTOMATIC))),
        (0, K.wt)({
            location: 'MediaEngineStore',
            autoTrackExposure: !1
        }) &&
            null !== t.mostRecentlyRequestedVoiceFilter &&
            (0, Y.J_)(),
        tW();
}
function tq(e) {
    let { mediaEngineState: t } = e;
    (eG = t.settingsByContext), (eH = t.inputDevices), (eW = t.outputDevices), (t_ = t.appSupported), (te = t.krispModuleLoaded), (eZ = t.goLiveContext);
}
function tQ() {
    i = null;
}
function tX(e) {
    switch (e.state) {
        case ed.hes.CONNECTING:
            tU();
            break;
        case ed.hes.RTC_CONNECTING:
            (e6 = !1), (e8 = !1);
            break;
        case ed.hes.RTC_CONNECTED:
            tT();
            break;
        case ed.hes.DISCONNECTED:
            t6(), t8();
    }
    tL.update();
}
function tJ(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => (i === t.sessionId ? ((eK = t.mute || t.suppress), (eQ = t.deaf), eU.eachConnection(tI), tT((null == t.guildId || null == t.channelId || null == to || to === t.channelId) && eX), (to = t.channelId), !0) : (__OVERLAY__ || t.userId !== en.default.getId() || null != es.ZP.getChannelId() || tT(!1, null), e)), !1);
}
function t$(e) {
    let { mute: t } = e;
    (ez = t), eU.eachConnection(tI);
}
function t0(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = ty(t);
    if (t === eh.Yn.DEFAULT && (Z.Z.requestPermission(e_.Eu.AUDIO), eq)) return !1;
    (r = !i && !r) || (i = !1),
        n || (e$ = !0),
        tM(
            {
                mute: r,
                deaf: i
            },
            t
        ),
        eU.eachConnection(tI);
}
function t1(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    tM({ mute: n }, t), r || (e$ = !0), eU.eachConnection(tI);
}
function t2(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r
    } = e;
    if (t !== ep.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    tW(!0);
}
function t3(e) {
    let { context: t } = e;
    tM({ deaf: !ty(t).deaf }, t), eU.eachConnection(tI);
}
function t4(e) {
    let { context: t, userId: n } = e;
    if (n === en.default.getId()) return;
    let { localMutes: r } = ty(t);
    r[n] ? delete r[n] : (r[n] = !0), tM({ localMutes: r }, t), eU.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function t5(e) {
    var t, n, r, i, o, a, s;
    let { context: l, userId: u, videoToggleState: d, persist: f, isAutomatic: _ } = e;
    c()(!(f && _), 'These are not allowed to both be true.');
    let p = d === ed.ZUi.DISABLED,
        { disabledLocalVideos: h } = ty(l),
        m = null != (t = h[u]) && t,
        g = tu.has(u),
        E = d === ed.ZUi.AUTO_ENABLED || d === ed.ZUi.MANUAL_ENABLED;
    ev.info('disableVideo='.concat(p, ' currentlyDisabled=').concat(m, ' currentlyAutoDisabled=').concat(g, ', isVideoShown=').concat(E)), c()(!(g && !m), 'If you are auto-disabled, then you are also disabled.');
    let b = p !== m,
        y = l === eh.Yn.DEFAULT,
        v = _ && b && y,
        O = f && b && y;
    ev.info('changed='.concat(b, ' isDefaultContext=').concat(y, ' isUpdateCausedByVideoHealthManager=').concat(v, ' isManualToggleByUser=').concat(O));
    let { videoToggleStateMap: I } = ty(l);
    if ((I[u] === ed.ZUi.AUTO_PROBING && d === ed.ZUi.AUTO_ENABLED && (0, F.Z)(u, p ? eh.fC.AUTO_DISABLE : eh.fC.AUTO_ENABLE, E), (I[u] = d), tM({ videoToggleStateMap: I }, l, f), d === ed.ZUi.AUTO_PROBING ? null == (n = es.ZP.getRTCConnection()) || n.pauseStatsCollectionForUser(u, !0) : null == (r = es.ZP.getRTCConnection()) || r.pauseStatsCollectionForUser(u, !1), td || (ev.info('isAutoDisableAllowed='.concat(td, ' - disabling VideoHealthManager')), null == (o = es.ZP.getRTCConnection()) || null == (i = o.getVideoHealthManager()) || i.disable()), v)) {
        if ((!p && !g) || (p && !td)) return;
        (0, F.Z)(u, p ? eh.fC.AUTO_DISABLE : eh.fC.AUTO_ENABLE, E), p ? tu.add(u) : tu.delete(u);
    } else O && (g && !p ? (ev.info('disallowing auto-disable for this session because of manual override by user'), (td = !1), null == (s = es.ZP.getRTCConnection()) || null == (a = s.getVideoHealthManager()) || a.disable(), (0, F.Z)(u, eh.fC.MANUAL_REENABLE, E)) : (0, F.Z)(u, p ? eh.fC.MANUAL_DISABLE : eh.fC.MANUAL_ENABLE, E));
    y && !p && tu.delete(u),
        p ? (h[u] = !0) : delete h[u],
        tM({ disabledLocalVideos: h }, l, f),
        eU.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(u, null != (t = h[u]) && t);
        }, l);
}
function t6() {
    if (0 === tu.size) return;
    let e = eh.Yn.DEFAULT,
        { disabledLocalVideos: t } = ty(e);
    tu.forEach((n) => {
        c()(t[n], 'If you are auto-disabled, then you are also disabled.'), delete t[n], eU.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tu.clear(),
        tM({ disabledLocalVideos: t }, e, !1);
}
function t8() {
    let e = eh.Yn.DEFAULT,
        { videoToggleStateMap: t } = ty(e);
    for (let [e, n] of Object.entries(t)) n === ed.ZUi.AUTO_PROBING && delete t[e];
    tM({ videoToggleStateMap: t }, e, !1);
}
function t7(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === en.default.getId()) return;
    let i = t === eh.Yn.STREAM ? eh.Yh : eh.Qx,
        { localVolumes: o } = ty(t);
    r === i ? delete o[n] : (o[n] = r), tM({ localVolumes: o }, t), eU.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function t9(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: o } = ty(t);
    (o[n] = {
        left: r,
        right: i
    }),
        tM({ localPans: o }, t),
        eU.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function ne(e) {
    let { context: t, mode: n, options: r } = e;
    tM(
        {
            mode: n,
            modeOptions: r
        },
        t
    ),
        eU.eachConnection(tv),
        tL.update();
}
function nt(e) {
    let { volume: t } = e;
    tM({ inputVolume: tO(t) }), eU.setInputVolume(t);
}
function nn(e) {
    let { volume: t } = e;
    tM({ outputVolume: t }), eU.setOutputVolume(t);
}
function nr(e) {
    let { id: t } = e;
    tM({ inputDeviceId: (t = tV(eH, t)) }), eU.setAudioInputDevice(t);
}
function ni(e) {
    let { id: t } = e;
    tM({ outputDeviceId: (t = tV(eW, t)) }), eU.setAudioOutputDevice(t);
}
function no(e) {
    let { id: t } = e;
    tM({ videoDeviceId: (t = tV(eY, t)) }), tT();
}
function na(e) {
    return eF !== e.required && ((eF = e.required), e.required || eU.interact(), !0);
}
function ns(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    tF(t), tZ(n), tH(r);
}
function nl(e) {
    let { inputVolume: t, outputVolume: n } = e;
    tM({
        inputVolume: tO(t),
        outputVolume: n
    });
}
function nc(e) {
    let t = ty();
    z.default.track(ed.rMx.VOICE_PROCESSING, {
        echo_cancellation: t.echoCancellation,
        noise_cancellation: t.noiseCancellation,
        noise_suppression: t.noiseSuppression,
        automatic_gain_control: t.automaticGainControl,
        location: e
    });
}
function nu(e) {
    let t = tM({ echoCancellation: e.enabled });
    eU.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nm(), nc(e.location);
}
function nd(e) {
    n_(e.enabled);
}
function nf(e) {
    let t = tM({ sidechainCompressionStrength: e.strength });
    eU.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function n_(e) {
    let t = tM({ sidechainCompression: e });
    eU.setSidechainCompression(t.sidechainCompression);
}
function np(e) {
    let { enabled: t, loopbackReason: n } = e,
        r = tf.size > 0;
    return t ? tf.add(n) : tf.delete(n), nh(), tf.size > 0 !== r && nm();
}
function nh() {
    let { voiceFiltersPreProcessMute: e } = V.Z.getCurrentConfig({ location: 'setMaybePreprocessMute' }, { autoTrackExposure: !0 }),
        t = e && !tf.has('voice_filter_preview') && !tf.has('mic_test');
    eU.setMaybePreprocessMute(t);
}
function nm() {
    let e = ty(),
        t = tf.size > 0,
        n = e.inputDeviceId,
        r = ei.Z.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        o = ei.Z.hasNoiseSuppression(n) || e.noiseSuppression,
        a = ei.Z.hasAutomaticGainControl(n) || e.automaticGainControl,
        s = e.noiseCancellation,
        l = null !== tt;
    eU.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: o,
        automaticGainControl: a,
        noiseCancellation: s,
        voiceFilters: l
    });
}
function ng(e) {
    let t = tM({ noiseSuppression: e.enabled });
    eU.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nm(), nc(e.location);
}
function nE(e) {
    let t = tM({ automaticGainControl: e.enabled });
    eU.eachConnection((e) => e.setAutomaticGainControl(t.automaticGainControl)), nm(), nc(e.location);
}
function nb(e) {
    let t = tM({ noiseCancellation: e.enabled });
    eU.eachConnection((e) => e.setNoiseCancellation(t.noiseCancellation)), nm(), nc(e.location);
}
function ny(e) {
    let t = tM({ experimentalEncoders: e.enabled });
    eU.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
}
function nv(e) {
    var t, n;
    let { enabled: r } = e,
        i = tM({ hardwareEncoding: r });
    eU.eachConnection((e) => {
        var t;
        return e.setHardwareH264(null == (t = i.hardwareEncoding) || t);
    }),
        eU.setH264Enabled(i.hardwareEncoding || i.openH264),
        eU.setAv1Enabled(null == (t = i.hardwareEncoding) || t),
        eU.setH265Enabled(null == (n = i.hardwareEncoding) || n);
}
function nO(e) {
    tM({ silenceWarning: e.enabled }), tL.update();
}
function nI(e) {
    eU.setDebugLogging(e.enabled);
}
function nS(e) {
    tM({ videoHook: e.enabled });
}
function nT(e) {
    tM({ experimentalSoundshare2: e.enabled });
}
function nN(e) {
    let { enabled: t } = e;
    tM({ useSystemScreensharePicker: t });
}
function nA(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = tM({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r
        });
    eU.eachConnection((e) => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers));
}
function nC(e) {
    let { enabled: t } = e;
    tM({ qos: t }), eU.eachConnection((e) => e.setQoS(t));
}
function nP() {
    tk();
}
function nR(e) {
    let { inputDetected: t } = e;
    (e5 = t), !e6 && e5 && ((e6 = !0), tL.update());
}
function nw(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === eq) return !1;
    (eq = n), eU.eachConnection(tI);
}
function nD(e) {
    let { state: t, permissionType: n } = e,
        r = t === e_.PQ.ACCEPTED;
    switch (n) {
        case e_.Eu.AUDIO:
            (tl = !0), eU.eachConnection(tI);
            break;
        case e_.Eu.CAMERA:
            !r && eX && tT(!1);
            break;
        default:
            return !1;
    }
}
function nL() {
    return te || !1;
}
async function nx() {
    try {
        await ee.ZP.ensureModule('discord_krisp'), ee.ZP.requireModule('discord_krisp'), (te = !0), r.emitChange();
    } catch (t) {
        ev.warn('Failed to load Krisp module: '.concat(t.message)), $.Z.captureException(t);
        let e = eh.H3.INITIALIZED;
        if (t.message.includes(': ')) {
            let n = parseInt(t.message.substring(t.message.indexOf(': ') + 1));
            e = isNaN(n) || 0 === n ? eh.H3.INITIALIZED : n;
        }
        z.default.track(ed.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), tM({ noiseCancellation: !1 });
    } finally {
        e9 = !1;
    }
}
function nM() {
    return (0, X.isWindows)() || (0, X.isLinux)() || ((0, X.isMac)() && _().satisfies(null === y.Z || void 0 === y.Z ? void 0 : y.Z.os.release, ex));
}
function nk() {
    !nM() || __OVERLAY__ || e9 || te ? ((0, X.isWeb)() && eU.supports(eh.AN.NOISE_CANCELLATION) ? ((te = !0), r.emitChange()) : (0, X.isWeb)() && tM({ noiseCancellation: !1 })) : ((e9 = !0), nx());
}
function nj(e) {
    let { enabled: t } = e;
    z.default.track(ed.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != tt ? tt : null,
        enabled: t
    }),
        tM({ voiceFilterPlaybackEnabled: t });
}
function nU(e) {
    let { newVoiceFilterId: t } = e;
    tM({ mostRecentlyRequestedVoiceFilter: t }), eU.eachConnection((e) => e.setVoiceFilterId(t));
}
function nG() {
    tM({ mostRecentlyRequestedVoiceFilter: null });
}
function nB(e) {
    let { voiceFilterId: t } = e;
    (tr = tt), (ti = tn), (tt = t), (tn = null === t ? null : Date.now());
}
function nV(e) {
    nF(e.subsystem);
}
function nF(e) {
    e === eh.iA.AUTOMATIC ? (tM({ automaticAudioSubsystem: !0 }), nZ()) : (tM({ automaticAudioSubsystem: !1 }), eU.setAudioSubsystem(e));
}
function nZ() {
    let { enabled: e } = j.I.getCurrentConfig({ location: 'interpretAutomaticAudioSubsystem' });
    e ? eU.queueAudioSubsystem(eh.iA.EXPERIMENTAL) : eU.queueAudioSubsystem(eh.iA.STANDARD);
}
function nH(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && tT(i, null), null != t || null == n)) {
        e7 = !1;
        return;
    }
    if (e7) return;
    e7 = !0;
    let o = ty();
    (o.mute || o.deaf) &&
        (tM({
            deaf: !1,
            mute: !1
        }),
        eU.eachConnection(tI));
}
function nW(e) {
    let { application: t } = e;
    eB.add(t.id);
}
function nY(e) {
    let { application: t } = e;
    eB.delete(t.id);
}
function nK(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case 'audio':
                (eV = !1), eU.eachConnection(tI);
                break;
            case 'video':
                tT(!1);
        }
}
function nz(e) {
    (eV = e.enabled),
        e.unmute &&
            tM({
                mute: !1,
                deaf: !1
            }),
        eU.eachConnection(tI);
}
function nq(e) {
    let { enabled: t } = e;
    Z.Z.requestPermission(e_.Eu.CAMERA), tT(t);
}
function nQ(e) {
    let { sourceId: t, applicationName: n, quality: i } = e,
        o = I.Z.isDecoupledGameClippingEnabled(),
        s = I.Z.getSettings().decoupledClipsEnabled;
    if (!o || !s || null == y.Z) return;
    let l = null,
        c = null,
        u = q.Z.getPidFromDesktopSource(t);
    ({ soundshareId: l, soundshareSession: c } = tY(u));
    let d = {
        desktopSource: {
            id: t,
            sourcePid: u,
            soundshareId: l,
            soundshareSession: c
        },
        quality: i
    };
    null != a && a.desktopSource.id !== d.desktopSource.id && (eU.setClipsSource(null), (0, X.isWindows)() && null != a.desktopSource.soundshareId && v.pn(a.desktopSource.soundshareId)), null != l && tK(l, c), (a = d);
    let f = tb(),
        _ = ty().videoHook;
    eU.setClipsSource({
        desktopDescription: {
            id: a.desktopSource.id,
            soundshareId: a.desktopSource.soundshareId,
            useVideoHook: _,
            useGraphicsCapture: tR(),
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: tw(),
            videoHookStaleFrameTimeoutMs: eR,
            graphicsCaptureStaleFrameTimeoutMs: ew,
            hdrCaptureMode: f
        },
        quality: i,
        applicationName: n
    });
}
function nX(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((a = null), eU.setClipsSource(null));
}
function nJ(e) {
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
        X.isPlatformEmbedded && !0 === a && (({ soundshareId: e, soundshareSession: r } = tY(c)), null != e && tK(e, r)),
            tS(s),
            tT(s === eh.Yn.STREAM && eX, {
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
            a = e === eh.Yn.STREAM && eX,
            s =
                null != (i = o.qualityOptions)
                    ? i
                    : {
                          resolution: 720,
                          frameRate: 30
                      };
        tT(a, {
            cameraSource: {
                videoDeviceGuid: t,
                audioDeviceGuid: n
            },
            quality: {
                resolution: s.resolution,
                frameRate: s.frameRate
            }
        });
    } else tT(eX, null);
}
function n$(e) {
    let { section: t } = e;
    return t === ed.oAB.VOICE && tU(), !1;
}
function n0() {
    return eU.eachConnection(tC), !1;
}
function n1(e) {
    let { enabled: t } = e,
        n = tM({ openH264: t });
    eU.setH264Enabled(n.hardwareEncoding || n.openH264),
        eU.eachConnection((e) => {
            var t;
            return e.setSoftwareH264(null == (t = n.openH264) || t);
        });
}
function n2(e) {
    let { enabled: t } = e,
        n = tM({ aecDumpEnabled: t });
    eU.setAecDump(n.aecDumpEnabled);
}
function n3(e) {
    let { state: t } = e,
        n = P.Z.isEnabled();
    if (t === ed.$7l.BACKGROUND && eX && !n) (e3 = !0), tT(!1);
    else {
        if (t !== ed.$7l.ACTIVE || !e3) return !1;
        (e3 = !1), tT(!0);
    }
    return !0;
}
function n4(e) {
    eU.eachConnection((t) => t.setBitRate(e.bitrate));
}
function n5() {
    if ((!eX && null == o) || null != es.ZP.getRTCConnectionId()) return !1;
    tT(!1, null);
}
function n6() {
    return !!ta && ((ta = !1), !0);
}
function n8(e) {
    eU.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function n7(e) {
    let { settings: t } = e;
    eU.applyMediaFilterSettings(t).finally(() => {
        (ts = !1), r.emitChange();
    });
}
function n9() {
    ts = !0;
}
function re() {
    ts = !1;
}
function rt(e) {
    th = e.enabled;
}
class rn extends (s = h.ZP.Store) {
    initialize() {
        tP(),
            tx(),
            nk(),
            t8(),
            (t_ = {
                [eh.AN.VIDEO]: eU.supports(eh.AN.VIDEO),
                [eh.AN.DESKTOP_CAPTURE]: eU.supports(eh.AN.DESKTOP_CAPTURE),
                [eh.AN.HYBRID_VIDEO]: eU.supports(eh.AN.HYBRID_VIDEO)
            }),
            this.waitFor(en.default, ei.Z, eo.Z, ea.Z, es.ZP, R.ZP, Z.Z.storage, W.Z, C.Z, I.Z);
    }
    supports(e) {
        return eU.supports(e);
    }
    supportsInApp(e) {
        return t_[e] || eU.supports(e);
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
        return nL();
    }
    isNoiseCancellationError() {
        return ta;
    }
    isAutomaticGainControlSupported() {
        return eU.supports(eh.AN.AUTOMATIC_GAIN_CONTROL);
    }
    isAdvancedVoiceActivitySupported() {
        return nL();
    }
    isAecDumpSupported() {
        return eU.supports(eh.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return eU.supports(eh.AN.VIDEO) && eU.supports(eh.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        let t = (null == (e = eo.Z.getChannel(to)) ? void 0 : e.type) === ed.d4z.GUILD_STAGE_VOICE,
            n = r.getHardwareEncoding();
        return !t && n && M.Z.simulcastEnabled();
    }
    getAecDump() {
        return ty().aecDumpEnabled;
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
        return this.isSelfMute() || eK;
    }
    isDeaf() {
        return this.isSelfDeaf() || eQ;
    }
    hasContext(e) {
        return null != eG[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
        return e === eh.Yn.DEFAULT && ez;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
        return !this.isEnabled() || ty(e).mute || !Z.Z.didHavePermission(e_.Eu.AUDIO) || this.isSelfDeaf(e) || (e === eh.Yn.DEFAULT && eq);
    }
    shouldSkipMuteUnmuteSound() {
        return e$;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        e$ = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && ei.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return th;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
        return !this.isSupported() || ty(e).deaf;
    }
    isVideoEnabled() {
        return eX && e4;
    }
    isVideoAvailable() {
        return Object.values(eY).some((e) => {
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
        return e !== en.default.getId() && (ty(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return eU.supports(eh.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT;
        return null != (t = ty(n).disabledLocalVideos[e]) && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT;
        return null != (t = ty(n).videoToggleStateMap[e]) ? t : ed.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT;
        return t === eh.Yn.DEFAULT && tu.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
        return e === eh.Yn.DEFAULT && tu.size > 0;
    }
    isMediaFilterSettingLoading() {
        return ts;
    }
    isNativeAudioPermissionReady() {
        return tl;
    }
    getGoLiveSource() {
        return o;
    }
    getGoLiveContext() {
        return eZ;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT,
            n = ty(t).localPans[e];
        return null != n ? n : eP;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT,
            n = t === eh.Yn.STREAM ? eh.Yh : eh.Qx,
            r = ty(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return ty().inputVolume;
    }
    getOutputVolume() {
        return ty().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
        return ty(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
        return ty(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return tt;
    }
    getActiveVoiceFilterAppliedAt() {
        return tn;
    }
    getPreviousVoiceFilter() {
        return tr;
    }
    getPreviousVoiceFilterAppliedAt() {
        return ti;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return ty().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return ty().voiceFilterPlaybackEnabled;
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
        return tV(eH, ty().inputDeviceId);
    }
    getOutputDeviceId() {
        return tV(eW, ty().outputDeviceId);
    }
    getVideoDeviceId() {
        return tV(eY, ty().videoDeviceId);
    }
    getInputDevices() {
        return eH;
    }
    getOutputDevices() {
        return eW;
    }
    getVideoDevices() {
        return eY;
    }
    getEchoCancellation() {
        let e = ty();
        return ei.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return ty().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return ty().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return ty().h265Enabled;
    }
    getLoopback() {
        return tf.size > 0;
    }
    getLoopbackReasons() {
        return tf;
    }
    getNoiseSuppression() {
        let e = ty();
        return ei.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = ty();
        return ei.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getNoiseCancellation() {
        return ty().noiseCancellation;
    }
    getExperimentalEncoders() {
        return ty().experimentalEncoders;
    }
    getHardwareEncoding() {
        var e;
        return null == (e = ty().hardwareEncoding) || e;
    }
    getEnableSilenceWarning() {
        return ty().silenceWarning;
    }
    getDebugLogging() {
        return eU.getDebugLogging();
    }
    getQoS() {
        return ty().qos;
    }
    getAttenuation() {
        return ty().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return ty().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return ty().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return tD() && ty().automaticAudioSubsystem ? eh.iA.AUTOMATIC : eU.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return eU.getMLSSigningKey(e, t);
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
        return ty(e);
    }
    getState() {
        return {
            settingsByContext: eG,
            inputDevices: eH,
            outputDevices: eW,
            appSupported: t_,
            krispModuleLoaded: te,
            goLiveSource: o,
            goLiveContext: eZ
        };
    }
    getInputDetected() {
        return e5;
    }
    getNoInputDetectedNotice() {
        return e8;
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
        return ty().videoHook;
    }
    supportsVideoHook() {
        return eU.supports(eh.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = ty().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e);
    }
    supportsExperimentalSoundshare() {
        return eU.supports(eh.AN.EXPERIMENTAL_SOUNDSHARE) && _().satisfies(null === y.Z || void 0 === y.Z ? void 0 : y.Z.os.release, ef.I9);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = ty().useSystemScreensharePicker,
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
        return ty().openH264;
    }
    getEverSpeakingWhileMuted() {
        return e0;
    }
    getSpeakingWhileMuted() {
        return e1;
    }
    hasActiveCallKitCall() {
        return tm;
    }
    setHasActiveCallKitCall(e) {
        tm = e;
    }
    supportsScreenSoundshare() {
        return (0, X.isMac)() ? eU.supports(eh.AN.SOUNDSHARE) && _().satisfies(null === y.Z || void 0 === y.Z ? void 0 : y.Z.os.release, ef.yG) && tw() : (0, X.isWindows)() ? eU.supports(eh.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, X.isLinux)() && eU.supports(eh.AN.SCREEN_SOUNDSHARE);
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
        return tp;
    }
}
function rr(e) {
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
eg(rn, 'displayName', 'MediaEngineStore');
let ri = (r = new rn(b.Z, {
    VOICE_CHANNEL_SELECT: nH,
    VOICE_STATE_UPDATES: tJ,
    CONNECTION_OPEN: tz,
    CONNECTION_CLOSED: tQ,
    RTC_CONNECTION_STATE: tX,
    AUDIO_SET_TEMPORARY_SELF_MUTE: t$,
    AUDIO_TOGGLE_SELF_MUTE: t0,
    AUDIO_SET_SELF_MUTE: t1,
    AUDIO_TOGGLE_SELF_DEAF: t3,
    AUDIO_TOGGLE_LOCAL_MUTE: t4,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: t5,
    AUDIO_SET_LOCAL_VOLUME: t7,
    AUDIO_SET_LOCAL_PAN: t9,
    AUDIO_SET_MODE: ne,
    AUDIO_SET_INPUT_VOLUME: nt,
    AUDIO_SET_OUTPUT_VOLUME: nn,
    AUDIO_SET_INPUT_DEVICE: nr,
    AUDIO_SET_OUTPUT_DEVICE: ni,
    AUDIO_SET_ECHO_CANCELLATION: nu,
    AUDIO_SET_SIDECHAIN_COMPRESSION: nd,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nf,
    AUDIO_SET_LOOPBACK: np,
    AUDIO_SET_NOISE_SUPPRESSION: ng,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nE,
    AUDIO_SET_NOISE_CANCELLATION: nb,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: nO,
    AUDIO_SET_DEBUG_LOGGING: nI,
    MEDIA_ENGINE_SET_VIDEO_HOOK: nS,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: nT,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: nN,
    AUDIO_SET_ATTENUATION: nA,
    AUDIO_SET_QOS: nC,
    MEDIA_ENGINE_DEVICES: ns,
    AUDIO_VOLUME_CHANGE: nl,
    AUDIO_RESET: nP,
    AUDIO_INPUT_DETECTED: nR,
    AUDIO_SET_SUBSYSTEM: nV,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: nz,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: nq,
    MEDIA_ENGINE_PERMISSION: nK,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: nJ,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: no,
    MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: ny,
    MEDIA_ENGINE_INTERACTION_REQUIRED: na,
    USER_SETTINGS_MODAL_INIT: n$,
    USER_SETTINGS_MODAL_SET_SECTION: n$,
    CERTIFIED_DEVICES_SET: n0,
    RPC_APP_CONNECTED: nW,
    RPC_APP_DISCONNECTED: nY,
    OVERLAY_INITIALIZE: tq,
    MEDIA_ENGINE_SET_OPEN_H264: n1,
    MEDIA_ENGINE_SET_HARDWARE_ENCODING: nv,
    APP_STATE_UPDATE: n3,
    SET_CHANNEL_BITRATE: n4,
    SET_VAD_PERMISSION: nw,
    SET_NATIVE_PERMISSION: nD,
    SET_CHANNEL_VIDEO_QUALITY_MODE: n8,
    MEDIA_ENGINE_SET_AEC_DUMP: n2,
    CHANNEL_DELETE: n5,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: n6,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: n7,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: n9,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: re,
    USER_SETTINGS_PROTO_UPDATE: t2,
    CLIPS_INIT: nQ,
    CLIPS_SETTINGS_UPDATE: nX,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rt,
    VOICE_FILTER_REQUEST_SWITCH: nU,
    VOICE_FILTER_LOOPBACK_TOGGLE: nj,
    VOICE_FILTER_APPLIED: nB,
    VOICE_FILTER_DOWNLOAD_FAILED: nG,
    VOICE_FILTER_APPLY_FAILED: nG
}));
