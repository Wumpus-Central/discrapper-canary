let i, r, a, s;
n.d(t, { Z: () => n6 }), n(47120), n(724458), n(773603), n(653041), n(337869);
var o,
    l = n(512722),
    u = n.n(l),
    c = n(392711),
    d = n.n(c),
    f = n(209739),
    _ = n.n(f),
    p = n(404097),
    h = n(442837),
    m = n(46973),
    g = n(433517),
    E = n(846519),
    v = n(570140),
    y = n(579806),
    I = n(887278),
    b = n(547727),
    T = n(435064),
    S = n(779618),
    A = n(710845),
    N = n(535911),
    C = n(353926),
    R = n(646047),
    O = n(594190),
    D = n(502286),
    x = n(12898),
    L = n(355552),
    P = n(294473),
    w = n(706629),
    M = n(166884),
    k = n(998594),
    U = n(14457),
    G = n(529558),
    B = n(111672),
    Z = n(441167),
    F = n(338336),
    V = n(751571),
    j = n(725380),
    H = n(581883),
    Y = n(743498),
    W = n(358820),
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
    ei = n(463395),
    er = n(592125),
    ea = n(858340),
    es = n(19780),
    eo = n(704806),
    el = n(594174),
    eu = n(631768),
    ec = n(981631),
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
let eg = new A.Z('MediaEngineStore'),
    eE = 'MediaEngineStore',
    ev = 4,
    ey = 1,
    eI = 1,
    eb = 1,
    eT = 1,
    eS = 2,
    eA = {
        left: 1,
        right: 1
    },
    eN = 500,
    eC = 5 * q.Z.Millis.SECOND,
    eR = -60,
    eO = 100,
    eD = '>=21.0.0',
    ex = 2 * q.Z.Millis.SECOND;
function eL() {
    return {
        mode: ec.pM4.VOICE_ACTIVITY,
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
        mostRecentlyRequestedVoiceFilter: null,
        voiceFilterLoopbackEnabled: !1,
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
        videoHook: eP.supports(ep.AN.VIDEO_HOOK),
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
let eP = (0, m.Mt)((0, m.jj)());
eg.enableNativeLogger(!0);
let ew = {},
    eM = new Set([ep.Yn.DEFAULT]),
    ek = eP.supports(ep.AN.AUTO_ENABLE),
    eU = !1,
    eG = ep.Yn.STREAM,
    eB = { [ep.w5]: tD('No Input Devices') },
    eZ = { [ep.w5]: tD('No Output Devices') },
    eF = { [ep.w5]: tD('No Video Devices') },
    eV = !1,
    ej = !1,
    eH = !1,
    eY = !1,
    eW = !1,
    eK = ep.Av,
    ez = !1,
    eq = !1,
    eQ = !1,
    eX = new E.V7(),
    eJ = !1,
    e$ = !1,
    e0 = null,
    e1 = !1,
    e2 = !1,
    e3 = !1,
    e4 = !1,
    e6 = !1,
    e5 = 'uninitialized',
    e7 = null,
    e8 = null,
    e9 = !1,
    te = !1,
    tt = !1;
V.Z.hasPermission(ef.Eu.AUDIO, { showAuthorizationError: !1 }), V.Z.hasPermission(ef.Eu.CAMERA, { showAuthorizationError: !1 });
let tn = !1,
    ti = new Set(),
    tr = tn,
    ta = !1,
    ts = {},
    to = null,
    tl = !0,
    tu = {},
    tc = 5 * q.Z.Millis.SECOND;
function td() {
    var e, t;
    return null !== (t = null === (e = el.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t ? 'always' : X.Z === p.R.CANARY ? 'permittedDevicesOnly' : 'never';
}
function tf() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT,
        t = ew[e];
    return null == t && ((t = eL()), (ew[e] = t)), t;
}
function t_(e) {
    let t = tf(e.context);
    e.setInputMode(t.mode, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: t.modeOptions.autoThreshold,
        vadUseKrisp: t.modeOptions.vadUseKrisp && nT(),
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        pttReleaseDelay: t.modeOptions.delay
    });
}
function tp(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Qx;
    return d().clamp(e, 0, t);
}
function th(e) {
    let t = tf(e.context),
        n = !ek || t.mute || t.deaf;
    e.context === ep.Yn.DEFAULT ? (n = n || eV || ej || eH || !V.Z.didHavePermission(ef.Eu.AUDIO)) : e.context === ep.Yn.STREAM && (n = !0), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === ep.Yn.DEFAULT && b.Z.updateNativeMute();
}
function tm(e) {
    e !== eG && (null != a && eP.setGoLiveSource(null, eG), (eG = e));
}
function tg() {
    var e, t, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eW,
        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        o = a;
    if (((null == o ? void 0 : o.desktopSource) != null && o.desktopSource.id !== (null == s ? void 0 : null === (e = s.desktopSource) || void 0 === e ? void 0 : e.id) && (null != o.desktopSource.soundshareId && (0, Q.isWindows)() && I.pn(o.desktopSource.soundshareId), eP.setGoLiveSource(null, eG)), (null == o ? void 0 : o.cameraSource) != null && (o.cameraSource.videoDeviceGuid !== (null == s ? void 0 : null === (t = s.cameraSource) || void 0 === t ? void 0 : t.videoDeviceGuid) || o.cameraSource.audioDeviceGuid !== (null == s ? void 0 : null === (n = s.cameraSource) || void 0 === n ? void 0 : n.audioDeviceGuid)) && eP.setGoLiveSource(null, eG), (eW || r) && ((eK = (eW = r) ? tL(eF, tf().videoDeviceId) : ep.Av), eP.setVideoInputDevice(eK)), (a = s), null != s)) {
        let e = {
            resolution: s.quality.resolution,
            frameRate: s.quality.frameRate
        };
        if (null != s.desktopSource) {
            let t = td(),
                n = tf().videoHook;
            eP.setGoLiveSource(
                {
                    desktopDescription: {
                        id: s.desktopSource.id,
                        soundshareId: s.desktopSource.soundshareId,
                        useVideoHook: n,
                        useGraphicsCapture: tI(),
                        useLoopback: i.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: tb(),
                        videoHookStaleFrameTimeoutMs: eN,
                        graphicsCaptureStaleFrameTimeoutMs: eC,
                        hdrCaptureMode: t
                    },
                    quality: e
                },
                eG
            );
        }
        null != s.cameraSource &&
            eP.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: s.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: s.cameraSource.audioDeviceGuid
                    },
                    quality: e
                },
                eG
            );
    }
}
function tE(e, t, n, i) {
    var r;
    let a = null !== (r = null == e ? void 0 : e.soundshareSession) && void 0 !== r ? r : '';
    null == tu[a] && (tu[a] = new Set());
    let s = null != t && !tu[a].has(t);
    s && tu[a].add(t),
        (null == t || s) &&
            K.default.track(ec.rMx.SOUNDSHARE_FAILED, {
                soundshare_failure_code: t,
                soundshare_failure_reason: n,
                soundshare_failure_will_retry: i,
                ...(0, D.Z)(e)
            });
}
function tv(e) {
    let t = tf(),
        n = t.inputDeviceId;
    if ((e.setEchoCancellation(ei.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(ei.Z.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(ei.Z.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), e.setVoiceFiltersEnabled(null !== e7), (0, Q.isWeb)())) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function ty() {
    eP.on(m.aB.Connection, (e) => {
        var t, n;
        t_(e), th(e), tv(e);
        let r = tf();
        e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers), e.setQoS(r.qos), e.setExperimentalEncoders(r.experimentalEncoders), e.setHardwareH264(null === (t = r.hardwareEncoding) || void 0 === t || t), e.setSoftwareH264(null === (n = r.openH264) || void 0 === n || n);
        let s = es.Z.getGuildId(),
            {
                muteBeforeProcessing: o,
                pttBeforeProcessing: l,
                skipEncode: u
            } = (null != s ? w.Z : P.Z).getCurrentConfig(
                {
                    location: 'setupMediaEngine',
                    ...(null != s && { guildId: s })
                },
                { autoTrackExposure: !0 }
            );
        o && e.setExperimentFlag(ep.V8.MUTE_BEFORE_PROCESSING, !0), l && e.setExperimentFlag(ep.V8.PTT_BEFORE_PROCESSING, !0), u && e.setExperimentFlag(ep.V8.SKIP_ENCODE, !0);
        let c = !1,
            d = !0;
        if ((e.setExperimentFlag(ep.V8.RESET_DECODER_ON_ERRORS, !0), c && e.setExperimentFlag(ep.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0), d && e.setExperimentFlag(ep.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0), e.context === ep.Yn.STREAM)) {
            let { simulcastEnabled: t, lqStreamBitrate: n } = M.Z.getConfig();
            e.configureGoLiveSimulcast(t, n);
        }
        (0, Q.isWindows)() ? ((null == to ? void 0 : to.startsWith('NVIDIA')) ? e.setExperimentFlag(ep.V8.SIGNAL_AV1, !0) : (null == to ? void 0 : to.startsWith('AMD')) && x.Z.getCurrentConfig({ location: 'setupMediaEngine' }, { autoTrackExposure: !0 }).signalAV1Support ? e.setExperimentFlag(ep.V8.SIGNAL_AV1, !0) : e.setExperimentFlag(ep.V8.SIGNAL_AV1_DECODE, !0)) : ((0, Q.isMac)() || (0, Q.isLinux)()) && e.setExperimentFlag(ep.V8.SIGNAL_AV1_DECODE, !0), (0, Q.isWindows)() && e.setExperimentFlag(ep.V8.SIGNAL_AV1_HARDWARE_DECODE, !0), eP.setHasFullbandPerformance((0, N.Z)());
        let f = L.s.getCurrentConfig({ location: 'setupMediaEngine' }, { autoTrackExposure: !0 }).enabled;
        if ((e.setRemoteAudioHistory(f ? 1000 : 0), (0, S.Z)(i))) {
            let t = T.Z.getSettings();
            e.setExperimentFlag(ep.V8.STREAMER_CLIP, t.clipsEnabled);
            let { enableViewerClipping: n } = Z.Z.getCurrentConfig({ location: 'f627ab_15' }, { autoTrackExposure: !1 });
            e.setViewerSideClip(n), e.setClipsKeyFrameInterval(ep.ux);
        }
        for (let t of ((r = tf(e.context)), e.setPostponeDecodeLevel(eO), Object.keys(r.localMutes))) t !== et.default.getId() && e.setLocalMute(t, r.localMutes[t]);
        for (let t of Object.keys(r.localVolumes)) t !== et.default.getId() && e.setLocalVolume(t, r.localVolumes[t]);
        for (let t of Object.keys(r.localPans)) {
            let n = r.localPans[t];
            e.setLocalPan(t, n.left, n.right);
        }
        for (let t of Object.keys(r.disabledLocalVideos)) e.setLocalVideoDisabled(t, r.disabledLocalVideos[t]);
        e.on(m.Sh.Speaking, (t, n) => {
            v.Z.dispatch({
                type: 'SPEAKING',
                context: e.context,
                userId: t,
                speakingFlags: n
            });
        }),
            e.context === ep.Yn.DEFAULT &&
                ((eq = !1),
                (eQ = !1),
                e.on(m.Sh.SpeakingWhileMuted, () => {
                    (eq = !0),
                        (eQ = !0),
                        i.emitChange(),
                        eX.stop(),
                        eX.start(ex, () => {
                            (eQ = !1), i.emitChange();
                        });
                })),
            e.on(m.Sh.DesktopSourceEnd, () => {
                v.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                    settings: { context: e.context }
                });
            }),
            e.on(m.Sh.SoundshareAttached, () => {
                (null == a ? void 0 : a.desktopSource) != null && K.default.track(ec.rMx.SOUNDSHARE_ATTACHED, (0, D.Z)(null == a ? void 0 : a.desktopSource));
            }),
            e.on(m.Sh.SoundshareFailed, (e) => {
                let { failureCode: t, failureReason: n, willRetry: i } = e;
                tE(null == a ? void 0 : a.desktopSource, t, n, i);
            }),
            e.on(m.Sh.SoundshareSpeaking, () => {
                (null == a ? void 0 : a.desktopSource) != null && (K.default.track(ec.rMx.SOUNDSHARE_TRANSMITTING, (0, D.Z)(null == a ? void 0 : a.desktopSource)), null != ea.Z.getHookError(ec.K3D.SOUND) && v.Z.wait(() => v.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
            });
        let _ = new E.V7();
        e.on(m.Sh.SoundshareTrace, (e) => {
            switch (e.type) {
                case 'soundshare_attach_requested':
                    _.start(tc, () => {
                        v.Z.dispatch({
                            type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
                            errorMessage: 'Sound Hook Failed'
                        });
                    });
                    break;
                case 'soundshare_recv_failed':
                    let t = e.reason,
                        n = e.code,
                        i = e.retry;
                    (null == a ? void 0 : a.desktopSource) == null ||
                        (tE(null == a ? void 0 : a.desktopSource, n, t, i),
                        i ||
                            (_.stop(),
                            v.Z.wait(() =>
                                v.Z.dispatch({
                                    type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
                                    errorMessage: t,
                                    errorCode: n
                                })
                            )));
                    break;
                case 'soundshare_state_transition':
                    4 === e.newState && (_.stop(), v.Z.wait(() => v.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
            }
        }),
            e.on(m.Sh.InteractionRequired, (e) => {
                v.Z.dispatch({
                    type: 'MEDIA_ENGINE_INTERACTION_REQUIRED',
                    required: e
                });
            }),
            e.on(m.Sh.VideoHookInitialize, (e, t, n, i, r, s) => {
                (null == a ? void 0 : a.desktopSource) != null &&
                    K.default.track(ec.rMx.VIDEOHOOK_INITIALIZED, {
                        backend: e,
                        format: t,
                        framebuffer_format: n,
                        sample_count: i,
                        success: r,
                        reinitialization: s,
                        ...(0, D.Z)(null == a ? void 0 : a.desktopSource)
                    });
            }),
            e.on(m.Sh.NoiseCancellationError, (e) => {
                eg.warn('noisecancellererror event: '.concat(e)),
                    (e9 = !0),
                    K.default.track(ec.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
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
            e.on(m.Sh.VoiceActivityDetectorError, (e) => {
                eg.warn('voiceactivitydetectorerror event: '.concat(e)),
                    K.default.track(ec.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    v.Z.dispatch({
                        type: 'AUDIO_SET_MODE',
                        context: ep.Yn.DEFAULT,
                        mode: ec.pM4.VOICE_ACTIVITY,
                        options: {
                            ...tf(ep.Yn.DEFAULT).modeOptions,
                            vadUseKrisp: !1
                        }
                    }),
                    v.Z.dispatch({
                        type: 'MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR',
                        code: e
                    });
            }),
            e.on(m.Sh.SdpError, (e, t, n, i) => {
                X.Z === p.R.CANARY &&
                    K.default.track(ec.rMx.SDP_ERROR, {
                        operation: e,
                        error: t,
                        type: n,
                        sdp: i
                    });
            }),
            e.on(m.Sh.VideoState, (t) => {
                v.Z.dispatch({
                    type: 'MEDIA_ENGINE_VIDEO_STATE_CHANGED',
                    videoState: t,
                    context: e.context
                });
            }),
            e.on(m.Sh.Destroy, () => {
                _.stop();
            }),
            e.setBitRate(en.Z.bitrate),
            e.applyVideoQualityMode(eu.Z.mode);
    }),
        eP.on(m.aB.DeviceChange, (e, t, n) => {
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_DEVICES',
                inputDevices: e,
                outputDevices: t,
                videoDevices: n
            });
        }),
        eP.on(m.aB.VolumeChange, (e, t) => {
            v.Z.dispatch({
                type: 'AUDIO_VOLUME_CHANGE',
                inputVolume: e,
                outputVolume: t
            });
        }),
        eP.on(m.aB.DesktopSourceEnd, () => {
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                settings: null
            });
        }),
        eP.on(m.aB.AudioPermission, (e) => {
            (tt = !0),
                v.Z.dispatch({
                    type: 'MEDIA_ENGINE_PERMISSION',
                    kind: 'audio',
                    granted: e
                });
        }),
        eP.on(m.aB.VideoPermission, (e) => {
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_PERMISSION',
                kind: 'video',
                granted: e
            });
        }),
        eP.on(m.aB.WatchdogTimeout, async () => {
            let e;
            try {
                await z.Z.submitLiveCrashReport({ message: { message: 'Voice Watchdog Timeout' } });
            } catch (t) {
                'number' == typeof t.status && (e = t.status);
            }
            eg.warn('Watchdog timeout, report submission status: '.concat(null != e ? e : 200)), K.default.track(ec.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        eP.on(m.aB.VideoInputInitialized, (e) => {
            K.default.track(ec.rMx.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * q.Z.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: es.Z.getMediaSessionId(),
                rtc_connection_id: es.Z.getRTCConnectionId()
            });
        }),
        eP.on(m.aB.AudioInputInitialized, (e) => {
            K.default.track(ec.rMx.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * q.Z.Millis.SECOND),
                rtc_connection_id: es.Z.getRTCConnectionId()
            });
        }),
        eP.on(m.aB.ClipsRecordingRestartNeeded, () => {
            v.Z.dispatch({ type: 'CLIPS_RESTART' });
        }),
        eP.on(m.aB.ClipsInitFailure, (e, t) => {
            v.Z.wait(() => {
                v.Z.dispatch({
                    type: 'CLIPS_INIT_FAILURE',
                    errMsg: e,
                    applicationName: t
                });
            });
        }),
        eP.on(m.aB.ClipsRecordingEnded, (e, t) => {
            var n, i;
            (null == s ? void 0 : null === (n = s.desktopSource) || void 0 === n ? void 0 : n.id) === e && (null != t && (null == a ? void 0 : null === (i = a.desktopSource) || void 0 === i ? void 0 : i.soundshareId) !== t && I.pn(t), (s = null));
        }),
        eP.on(m.aB.NativeScreenSharePickerUpdate, (e) => {
            k.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerUpdate' }),
                v.Z.dispatch({
                    type: 'NATIVE_SCREEN_SHARE_PICKER_UPDATE',
                    existing: e
                });
        }),
        eP.on(m.aB.NativeScreenSharePickerCancel, (e) => {
            k.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerCancel' }),
                v.Z.dispatch({
                    type: 'NATIVE_SCREEN_SHARE_PICKER_CANCEL',
                    existing: e
                });
        }),
        eP.on(m.aB.NativeScreenSharePickerError, (e) => {
            k.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerError' }),
                v.Z.dispatch({
                    type: 'NATIVE_SCREEN_SHARE_PICKER_ERROR',
                    error: e
                });
        }),
        eP.on(m.aB.AudioDeviceModuleError, (e, t, n) => {
            K.default.track(ec.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                audio_device_module: e,
                code: t,
                device_name: n
            });
        }),
        eP.setOnVideoContainerResized((e, t, n) => {
            v.Z.wait(() =>
                v.Z.dispatch({
                    type: 'VIDEO_SIZE_UPDATE',
                    streamId: e,
                    width: t,
                    height: n
                })
            );
        }),
        tS.reset(),
        (0, eo.q)().then((e) => {
            null != e && (to = e.gpu_brand);
        });
}
function tI() {
    return (0, Q.isWindows)() && _().satisfies(null === y.Z || void 0 === y.Z ? void 0 : y.Z.os.release, ed.nz);
}
function tb() {
    return (0, Q.isMac)() && eP.supports(ep.AN.SCREEN_CAPTURE_KIT) && _().satisfies(null === y.Z || void 0 === y.Z ? void 0 : y.Z.os.release, ed.C7);
}
function tT() {
    return (0, Q.isWindows)() && eP.supports(ep.AN.AUTOMATIC_AUDIO_SUBSYSTEM) && eP.supports(ep.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH);
}
let tS = new (class {
    start() {
        this.started || ((this.started = !0), eP.on(m.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            eP.removeListener(m.aB.Silence, this.handleSilence),
            v.Z.dispatch({
                type: 'AUDIO_INPUT_DETECTED',
                inputDetected: null
            }));
    }
    update() {
        let e = tf();
        !e1 && es.Z.getState() === ec.hes.RTC_CONNECTED && e.mode === ec.pM4.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop();
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
                                    (v.Z.dispatch({
                                        type: 'AUDIO_INPUT_DETECTED',
                                        inputDetected: t
                                    }),
                                    e && (e2 = !0));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout
                    ));
            });
    }
})();
function tA() {
    var e;
    let t = g.K.get('audio');
    null != t && (g.K.set(eE, { [ep.Yn.DEFAULT]: t }), g.K.remove('audio')),
        (ew = null !== (e = g.K.get(eE)) && void 0 !== e ? e : {}),
        d().each(ew, (e) => {
            if ((d().defaultsDeep(e, eL()), null != e.modeOptions && 'string' == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, ee.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== ev && ((e.vadUseKrispSettingVersion = ev), (e.modeOptions.vadUseKrisp = !0)), e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)), !e.vadThrehsoldMigrated)) {
                var t;
                (e.vadThrehsoldMigrated = !0), (null === (t = e.modeOptions) || void 0 === t ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = eR);
            }
            (0, Q.isWeb)() ? e.ncUseKrispjsSettingVersion !== eI && ((e.ncUseKrispjsSettingVersion = eI), (e.noiseSuppression = !1), (e.noiseCancellation = !0)) : e.ncUseKrispSettingVersion !== ey && ((e.ncUseKrispSettingVersion = ey), (e.noiseSuppression = !1), (e.noiseCancellation = !0)), e.hardwareEnabledVersion !== eb && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = eb)), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
        }),
        tR();
}
function tN(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = tf(t);
    return Object.assign(i, e), !__OVERLAY__ && n && g.K.set(eE, ew), i;
}
function tC() {
    g.K.remove(eE), location.reload();
}
function tR() {
    var e, t, n;
    let i = tf();
    eP.setAudioInputDevice(i.inputDeviceId), eP.setAudioOutputDevice(i.outputDeviceId), tg(), eP.setInputVolume(i.inputVolume), eP.setOutputVolume(i.outputVolume), eP.setH264Enabled(null === (e = i.hardwareEncoding) || void 0 === e || e || i.openH264), eP.setAv1Enabled(null === (t = i.hardwareEncoding) || void 0 === t || t), eP.setH265Enabled(null === (n = i.hardwareEncoding) || void 0 === n || n), eP.setAecDump(i.aecDumpEnabled), eP.setSidechainCompression(i.sidechainCompression), eP.setSidechainCompressionStrength(i.sidechainCompressionStrength);
}
function tO() {
    ek ||
        eP.enable().then(() =>
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
                enabled: !0,
                unmute: !1
            })
        );
}
function tD(e) {
    return {
        id: ep.w5,
        index: 0,
        name: e,
        disabled: !0
    };
}
function tx(e, t) {
    if (0 === e.length) {
        let e = tD(t);
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
function tL(e, t) {
    var n;
    let i = null !== (n = e[t]) && void 0 !== n ? n : d()(e).values().first();
    return null != i ? i.id : t;
}
function tP(e) {
    let t = eB;
    if (((eB = tx(e, eh.intl.string(eh.t['/QIjDA']))), !d().isEqual(eB, t))) {
        let e = tf(),
            t = tL(eB, e.inputDeviceId);
        eP.setAudioInputDevice(t);
    }
}
function tw(e) {
    let t = eZ;
    if (((eZ = tx(e, eh.intl.string(eh.t.xlUg0t))), !d().isEqual(eZ, t))) {
        let e = tf(),
            t = tL(eZ, e.outputDeviceId);
        eP.setAudioOutputDevice(t);
    }
}
function tM(e) {
    e$ = e.length > 0;
    let t = eF;
    if (((eF = tx(e, eh.intl.string(eh.t.WKWARU))), eW && !d().isEqual(eF, t))) {
        var n;
        let e = void 0 !== eF[eK],
            i = eK === ep.w5 && (null === (n = t[ep.w5]) || void 0 === n ? void 0 : n.disabled);
        tg(e || i);
    }
}
function tk() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        i =
            null !== (e = H.Z.settings.audioContextSettings) && void 0 !== e
                ? e
                : {
                      user: {},
                      stream: {}
                  };
    for (let e of Object.keys(i)) {
        let r = e === e_.u0.USER ? ep.Yn.DEFAULT : ep.Yn.STREAM,
            a = r === ep.Yn.STREAM ? ep.Yh : ep.Qx,
            s = null !== (t = i[e]) && void 0 !== t ? t : {},
            { localMutes: o, localVolumes: l } = tf(r);
        for (let [e, t] of Object.entries(s))
            null == (0, j.Ky)(r, e) &&
                (t.muted ? (o[e] = !0) : delete o[e],
                t.volume !== a ? (l[e] = t.volume) : delete l[e],
                eP.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, r));
        if (n)
            for (let e of new Set([...Object.keys(o), ...Object.keys(l)]))
                null == s[e] &&
                    (delete o[e],
                    delete l[e],
                    eP.eachConnection((t) => {
                        t.setLocalVolume(e, a), t.setLocalMute(e, !1);
                    }, r));
        tN(
            {
                localMutes: o,
                localVolumes: l
            },
            r
        );
    }
}
function tU(e) {
    if (null == i)
        return (
            eg.info('Error: trying to get soundshare id before MediaEngineStore is instantiated.'),
            {
                soundshareId: null,
                soundshareSession: ''
            }
        );
    {
        let t = i.getExperimentalSoundshare() ? e : z.Z.getAudioPid(e),
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
function tG(e, t) {
    (0, Q.isWindows)() &&
        I.YT(e, { soundshare_session: t }).then((t) => {
            null == t ||
                O.ZP.shouldContinueWithoutElevatedProcessForPID(e) ||
                v.Z.wait(() => {
                    v.Z.dispatch({
                        type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
                        errorMessage: t
                    });
                });
        });
}
function tB(e) {
    (r = e.sessionId),
        (eV = !1),
        (eY = !1),
        (0, Q.isWeb)() ||
            B.Z.subscribe({ location: 'handleConnectionOpen' }, (e) => {
                let t = tf();
                !e.sidechainAvailable && t.sidechainCompression ? (tN({ sidechainCompressionSettingVersion: 0 }), nr(!1)) : e.sidechainAvailable && t.sidechainCompressionSettingVersion < eT && (tN({ sidechainCompressionSettingVersion: eT }), nr(e.sidechainEnabled));
            });
    let t = tf();
    tT() && (t.automaticAudioSubsystem && nM(), t.audioSubsystemSettingVersion < eS && (tN({ audioSubsystemSettingVersion: eS }), t.automaticAudioSubsystem || eP.getAudioSubsystem() === ep.iA.LEGACY || nw(ep.iA.AUTOMATIC))), tk();
}
function tZ(e) {
    let { mediaEngineState: t } = e;
    (ew = t.settingsByContext), (eB = t.inputDevices), (eZ = t.outputDevices), (ts = t.appSupported), (e6 = t.krispModuleLoaded), (eG = t.goLiveContext);
}
function tF() {
    r = null;
}
function tV(e) {
    switch (e.state) {
        case ec.hes.CONNECTING:
            tO();
            break;
        case ec.hes.RTC_CONNECTING:
            (e1 = !1), (e2 = !1);
            break;
        case ec.hes.RTC_CONNECTED:
            tg();
            break;
        case ec.hes.DISCONNECTED:
            tX(), tJ();
    }
    tS.update();
}
function tj(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => (r === t.sessionId ? ((eV = t.mute || t.suppress), (eY = t.deaf), eP.eachConnection(th), tg(!(null != t.guildId && null != t.channelId && null != e8 && e8 !== t.channelId) && eW), (e8 = t.channelId), !0) : (__OVERLAY__ || t.userId !== et.default.getId() || null != es.Z.getChannelId() || tg(!1, null), e)), !1);
}
function tH(e) {
    let { mute: t } = e;
    (ej = t), eP.eachConnection(th);
}
function tY(e) {
    let { context: t, skipMuteUnmuteSoundEffect: n } = e,
        { mute: i, deaf: r } = tf(t);
    if (t === ep.Yn.DEFAULT && (V.Z.requestPermission(ef.Eu.AUDIO), eH)) return !1;
    (i = !r && !i) || (r = !1),
        n && (ez = !0),
        tN(
            {
                mute: i,
                deaf: r
            },
            t
        ),
        eP.eachConnection(th);
}
function tW(e) {
    let { context: t, mute: n } = e;
    tN({ mute: n }, t), eP.eachConnection(th);
}
function tK(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: i
    } = e;
    if (t !== e_.yP.PRELOADED_USER_SETTINGS || n || null != i) return !1;
    tk(!0);
}
function tz(e) {
    let { context: t } = e;
    tN({ deaf: !tf(t).deaf }, t), eP.eachConnection(th);
}
function tq(e) {
    let { context: t, userId: n } = e;
    if (n === et.default.getId()) return;
    let { localMutes: i } = tf(t);
    i[n] ? delete i[n] : (i[n] = !0), tN({ localMutes: i }, t), eP.eachConnection((e) => e.setLocalMute(n, i[n] || !1), t);
}
function tQ(e) {
    var t, n, i, r, a, s, o;
    let { context: l, userId: c, videoToggleState: d, persist: f, isAutomatic: _ } = e;
    u()(!(f && _), 'These are not allowed to both be true.');
    let p = d === ec.ZUi.DISABLED,
        { disabledLocalVideos: h } = tf(l),
        m = null !== (t = h[c]) && void 0 !== t && t,
        g = ti.has(c),
        E = d === ec.ZUi.AUTO_ENABLED || d === ec.ZUi.MANUAL_ENABLED;
    eg.info('disableVideo='.concat(p, ' currentlyDisabled=').concat(m, ' currentlyAutoDisabled=').concat(g, ', isVideoShown=').concat(E)), u()(!(g && !m), 'If you are auto-disabled, then you are also disabled.');
    let v = p !== m,
        y = l === ep.Yn.DEFAULT,
        I = _ && v && y,
        b = f && v && y;
    eg.info('changed='.concat(v, ' isDefaultContext=').concat(y, ' isUpdateCausedByVideoHealthManager=').concat(I, ' isManualToggleByUser=').concat(b));
    let { videoToggleStateMap: T } = tf(l);
    if ((T[c] === ec.ZUi.AUTO_PROBING && d === ec.ZUi.AUTO_ENABLED && (0, F.Z)(c, p ? ep.fC.AUTO_DISABLE : ep.fC.AUTO_ENABLE, E), (T[c] = d), tN({ videoToggleStateMap: T }, l, f), d === ec.ZUi.AUTO_PROBING ? null === (n = es.Z.getRTCConnection()) || void 0 === n || n.pauseStatsCollectionForUser(c, !0) : null === (i = es.Z.getRTCConnection()) || void 0 === i || i.pauseStatsCollectionForUser(c, !1), tr || (eg.info('isAutoDisableAllowed='.concat(tr, ' - disabling VideoHealthManager')), null === (a = es.Z.getRTCConnection()) || void 0 === a || null === (r = a.getVideoHealthManager()) || void 0 === r || r.disable()), I)) {
        if ((!p && !g) || (p && !tr)) return;
        (0, F.Z)(c, p ? ep.fC.AUTO_DISABLE : ep.fC.AUTO_ENABLE, E), p ? ti.add(c) : ti.delete(c);
    } else b && (g && !p ? (eg.info('disallowing auto-disable for this session because of manual override by user'), (tr = !1), null === (o = es.Z.getRTCConnection()) || void 0 === o || null === (s = o.getVideoHealthManager()) || void 0 === s || s.disable(), (0, F.Z)(c, ep.fC.MANUAL_REENABLE, E)) : (0, F.Z)(c, p ? ep.fC.MANUAL_DISABLE : ep.fC.MANUAL_ENABLE, E));
    y && !p && ti.delete(c),
        p ? (h[c] = !0) : delete h[c],
        tN({ disabledLocalVideos: h }, l, f),
        eP.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(c, null !== (t = h[c]) && void 0 !== t && t);
        }, l);
}
function tX() {
    if (0 === ti.size) return;
    let e = ep.Yn.DEFAULT,
        { disabledLocalVideos: t } = tf(e);
    ti.forEach((n) => {
        u()(t[n], 'If you are auto-disabled, then you are also disabled.'), delete t[n], eP.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        ti.clear(),
        tN({ disabledLocalVideos: t }, e, !1);
}
function tJ() {
    let e = ep.Yn.DEFAULT,
        { videoToggleStateMap: t } = tf(e);
    for (let [e, n] of Object.entries(t)) n === ec.ZUi.AUTO_PROBING && delete t[e];
    tN({ videoToggleStateMap: t }, e, !1);
}
function t$(e) {
    let { context: t, userId: n, volume: i } = e;
    if (n === et.default.getId()) return;
    let r = t === ep.Yn.STREAM ? ep.Yh : ep.Qx,
        { localVolumes: a } = tf(t);
    i === r ? delete a[n] : (a[n] = i), tN({ localVolumes: a }, t), eP.eachConnection((e) => e.setLocalVolume(n, i), t);
}
function t0(e) {
    let { context: t, userId: n, left: i, right: r } = e,
        { localPans: a } = tf(t);
    (a[n] = {
        left: i,
        right: r
    }),
        tN({ localPans: a }, t),
        eP.eachConnection((e) => e.setLocalPan(n, i, r), t);
}
function t1(e) {
    let { context: t, mode: n, options: i } = e;
    tN(
        {
            mode: n,
            modeOptions: i
        },
        t
    ),
        eP.eachConnection(t_),
        tS.update();
}
function t2(e) {
    let { volume: t } = e;
    tN({ inputVolume: tp(t) }), eP.setInputVolume(t);
}
function t3(e) {
    let { volume: t } = e;
    tN({ outputVolume: t }), eP.setOutputVolume(t);
}
function t4(e) {
    let { id: t } = e;
    tN({ inputDeviceId: (t = tL(eB, t)) }), eP.setAudioInputDevice(t);
}
function t6(e) {
    let { id: t } = e;
    tN({ outputDeviceId: (t = tL(eZ, t)) }), eP.setAudioOutputDevice(t);
}
function t5(e) {
    let { id: t } = e;
    tN({ videoDeviceId: (t = tL(eF, t)) }), tg();
}
function t7(e) {
    return eU !== e.required && ((eU = e.required), e.required || eP.interact(), !0);
}
function t8(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: i } = e;
    tP(t), tw(n), tM(i);
}
function t9(e) {
    let { inputVolume: t, outputVolume: n } = e;
    tN({
        inputVolume: tp(t),
        outputVolume: n
    });
}
function ne(e) {
    let t = tf();
    K.default.track(ec.rMx.VOICE_PROCESSING, {
        echo_cancellation: t.echoCancellation,
        noise_cancellation: t.noiseCancellation,
        noise_suppression: t.noiseSuppression,
        automatic_gain_control: t.automaticGainControl,
        location: e
    });
}
function nt(e) {
    let t = tN({ echoCancellation: e.enabled });
    eP.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), ns(), ne(e.location);
}
function nn(e) {
    nr(e.enabled);
}
function ni(e) {
    let t = tN({ sidechainCompressionStrength: e.strength });
    eP.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function nr(e) {
    let t = tN({ sidechainCompression: e });
    eP.setSidechainCompression(t.sidechainCompression);
}
function na(e) {
    let { enabled: t } = e;
    return (ta = t), ns();
}
function ns() {
    let e = tf(),
        t = e.inputDeviceId,
        n = ei.Z.hasEchoCancellation(t) || e.echoCancellation,
        i = !ta,
        r = ei.Z.hasNoiseSuppression(t) || e.noiseSuppression,
        a = ei.Z.hasAutomaticGainControl(t) || e.automaticGainControl,
        s = e.noiseCancellation;
    eP.setLoopback(ta, {
        echoCancellation: n,
        echoCancellationPreEcho: i,
        noiseSuppression: r,
        automaticGainControl: a,
        noiseCancellation: s
    });
}
function no(e) {
    let t = tN({ noiseSuppression: e.enabled });
    eP.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), ns(), ne(e.location);
}
function nl(e) {
    let t = tN({ automaticGainControl: e.enabled });
    eP.eachConnection((e) => e.setAutomaticGainControl(t.automaticGainControl)), ns(), ne(e.location);
}
function nu(e) {
    let t = tN({ noiseCancellation: e.enabled });
    eP.eachConnection((e) => e.setNoiseCancellation(t.noiseCancellation)), ns(), ne(e.location);
}
function nc(e) {
    let t = tN({ experimentalEncoders: e.enabled });
    eP.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
}
function nd(e) {
    var t, n;
    let { enabled: i } = e,
        r = tN({ hardwareEncoding: i });
    eP.eachConnection((e) => {
        var t;
        return e.setHardwareH264(null === (t = r.hardwareEncoding) || void 0 === t || t);
    }),
        eP.setH264Enabled(r.hardwareEncoding || r.openH264),
        eP.setAv1Enabled(null === (t = r.hardwareEncoding) || void 0 === t || t),
        eP.setH265Enabled(null === (n = r.hardwareEncoding) || void 0 === n || n);
}
function nf(e) {
    tN({ silenceWarning: e.enabled }), tS.update();
}
function n_(e) {
    eP.setDebugLogging(e.enabled);
}
function np(e) {
    tN({ videoHook: e.enabled });
}
function nh(e) {
    tN({ experimentalSoundshare2: e.enabled });
}
function nm(e) {
    let { enabled: t } = e;
    tN({ useSystemScreensharePicker: t });
}
function ng(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i } = e,
        r = tN({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: i
        });
    eP.eachConnection((e) => e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers));
}
function nE(e) {
    let { enabled: t } = e;
    tN({ qos: t }), eP.eachConnection((e) => e.setQoS(t));
}
function nv() {
    tC();
}
function ny(e) {
    let { inputDetected: t } = e;
    (e0 = t), !e1 && e0 && ((e1 = !0), tS.update());
}
function nI(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === eH) return !1;
    (eH = n), eP.eachConnection(th);
}
function nb(e) {
    let { state: t, permissionType: n } = e,
        i = t === ef.PQ.ACCEPTED;
    switch (n) {
        case ef.Eu.AUDIO:
            (tt = !0), eP.eachConnection(th);
            break;
        case ef.Eu.CAMERA:
            !i && eW && tg(!1);
            break;
        default:
            return !1;
    }
}
function nT() {
    return e6 || !1;
}
async function nS() {
    try {
        await $.ZP.ensureModule('discord_krisp'), $.ZP.requireModule('discord_krisp'), (e6 = !0), i.emitChange();
    } catch (t) {
        eg.warn('Failed to load Krisp module: '.concat(t.message)), J.Z.captureException(t);
        let e = ep.H3.INITIALIZED;
        if (t.message.includes(': ')) {
            let n = parseInt(t.message.substring(t.message.indexOf(': ') + 1));
            e = isNaN(n) || 0 === n ? ep.H3.INITIALIZED : n;
        }
        K.default.track(ec.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), tN({ noiseCancellation: !1 });
    } finally {
        e4 = !1;
    }
}
function nA() {
    return (0, Q.isWindows)() || (0, Q.isLinux)() || ((0, Q.isMac)() && _().satisfies(null === y.Z || void 0 === y.Z ? void 0 : y.Z.os.release, eD));
}
function nN() {
    !nA() || __OVERLAY__ || e4 || e6 ? ((0, Q.isWeb)() && eP.supports(ep.AN.NOISE_CANCELLATION) ? ((e6 = !0), i.emitChange()) : (0, Q.isWeb)() && tN({ noiseCancellation: !1 })) : ((e4 = !0), nS());
}
async function nC() {
    try {
        await $.ZP.ensureModule('discord_voice_filters');
        let e = $.ZP.getVoiceFilters();
        await e.setupResources(), (0, W.wV)(), (e5 = 'loaded'), (0, Y.v6)(tf().mostRecentlyRequestedVoiceFilter), i.emitChange();
    } catch (e) {
        eg.warn('Failed to load Voice Filters module: '.concat(e.message)), J.Z.captureException(e), (e5 = 'failed');
    }
}
function nR() {
    return (0, Q.isWindows)() || (0, Q.isMac)();
}
function nO() {
    'uninitialized' === e5 && (nR() && !__OVERLAY__ ? ((e5 = 'loading'), nC()) : (0, Q.isWeb)() && eP.supports(ep.AN.VOICE_FILTERS) ? (e5 = 'loaded') : (0, Q.isWeb)());
}
function nD(e) {
    let { enabled: t } = e;
    tN({ voiceFilterLoopbackEnabled: t });
}
function nx(e) {
    let { newVoiceFilterId: t } = e;
    tN({ mostRecentlyRequestedVoiceFilter: t });
    let n = null != t;
    eP.eachConnection((e) => e.setVoiceFiltersEnabled(n));
}
function nL(e) {
    let { voiceFilterId: t } = e;
    e7 = t;
}
function nP(e) {
    nw(e.subsystem);
}
function nw(e) {
    e === ep.iA.AUTOMATIC ? (tN({ automaticAudioSubsystem: !0 }), nM()) : (tN({ automaticAudioSubsystem: !1 }), eP.setAudioSubsystem(e));
}
function nM() {
    let { enabled: e } = U.I.getCurrentConfig({ location: 'interpretAutomaticAudioSubsystem' });
    e ? eP.queueAudioSubsystem(ep.iA.EXPERIMENTAL) : eP.queueAudioSubsystem(ep.iA.STANDARD);
}
function nk(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: i, video: r } = e;
    if ((i !== n && tg(r, null), null != t || null == n)) {
        e3 = !1;
        return;
    }
    if (e3) return;
    e3 = !0;
    let a = tf();
    (a.mute || a.deaf) &&
        (tN({
            deaf: !1,
            mute: !1
        }),
        eP.eachConnection(th));
}
function nU(e) {
    let { application: t } = e;
    eM.add(t.id);
}
function nG(e) {
    let { application: t } = e;
    eM.delete(t.id);
}
function nB(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case 'audio':
                (ek = !1), eP.eachConnection(th);
                break;
            case 'video':
                tg(!1);
        }
}
function nZ(e) {
    (ek = e.enabled),
        e.unmute &&
            tN({
                mute: !1,
                deaf: !1
            }),
        eP.eachConnection(th);
}
function nF(e) {
    let { enabled: t } = e;
    V.Z.requestPermission(ef.Eu.CAMERA), tg(t);
}
function nV(e) {
    let { sourceId: t, applicationName: n, quality: r } = e,
        a = T.Z.isDecoupledGameClippingEnabled(),
        o = T.Z.getSettings().decoupledClipsEnabled;
    if (!a || !o || null == y.Z) return;
    let l = null,
        u = null,
        c = z.Z.getPidFromDesktopSource(t);
    ({ soundshareId: l, soundshareSession: u } = tU(c));
    let d = {
        desktopSource: {
            id: t,
            sourcePid: c,
            soundshareId: l,
            soundshareSession: u
        },
        quality: r
    };
    null != s && s.desktopSource.id !== d.desktopSource.id && (eP.setClipsSource(null), (0, Q.isWindows)() && null != s.desktopSource.soundshareId && I.pn(s.desktopSource.soundshareId)), null != l && tG(l, u), (s = d);
    let f = td(),
        _ = tf().videoHook;
    eP.setClipsSource({
        desktopDescription: {
            id: s.desktopSource.id,
            soundshareId: s.desktopSource.soundshareId,
            useVideoHook: _,
            useGraphicsCapture: tI(),
            useLoopback: i.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: tb(),
            videoHookStaleFrameTimeoutMs: eN,
            graphicsCaptureStaleFrameTimeoutMs: eC,
            hdrCaptureMode: f
        },
        quality: r,
        applicationName: n
    });
}
function nj(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((s = null), eP.setClipsSource(null));
}
function nH(e) {
    var t, n, i, r;
    let { settings: a } = e;
    if ((null == a ? void 0 : a.desktopSettings) != null) {
        let e = null,
            i = null,
            { sourceId: r, sound: s } = a.desktopSettings,
            o = null !== (t = a.context) && void 0 !== t ? t : ep.Yn.DEFAULT,
            l =
                null !== (n = a.qualityOptions) && void 0 !== n
                    ? n
                    : {
                          resolution: 720,
                          frameRate: 30
                      },
            u = !1 === s ? null : z.Z.getPidFromDesktopSource(r);
        Q.isPlatformEmbedded && !0 === s && (({ soundshareId: e, soundshareSession: i } = tU(u)), null != e && tG(e, i)),
            tm(o),
            tg(o === ep.Yn.STREAM && eW, {
                desktopSource: {
                    id: r,
                    sourcePid: u,
                    soundshareId: e,
                    soundshareSession: i
                },
                quality: {
                    resolution: l.resolution,
                    frameRate: l.frameRate
                }
            });
    } else if ((null == a ? void 0 : a.cameraSettings) != null) {
        let e = null !== (i = a.context) && void 0 !== i ? i : ep.Yn.DEFAULT,
            { videoDeviceGuid: t, audioDeviceGuid: n } = a.cameraSettings,
            s = e === ep.Yn.STREAM && eW,
            o =
                null !== (r = a.qualityOptions) && void 0 !== r
                    ? r
                    : {
                          resolution: 720,
                          frameRate: 30
                      };
        tg(s, {
            cameraSource: {
                videoDeviceGuid: t,
                audioDeviceGuid: n
            },
            quality: {
                resolution: o.resolution,
                frameRate: o.frameRate
            }
        });
    } else tg(eW, null);
}
function nY(e) {
    let { section: t } = e;
    return t === ec.oAB.VOICE && tO(), !1;
}
function nW() {
    return eP.eachConnection(tv), !1;
}
function nK(e) {
    let { enabled: t } = e,
        n = tN({ openH264: t });
    eP.setH264Enabled(n.hardwareEncoding || n.openH264),
        eP.eachConnection((e) => {
            var t;
            return e.setSoftwareH264(null === (t = n.openH264) || void 0 === t || t);
        });
}
function nz(e) {
    let { enabled: t } = e,
        n = tN({ aecDumpEnabled: t });
    eP.setAecDump(n.aecDumpEnabled);
}
function nq(e) {
    let { state: t } = e,
        n = R.Z.isEnabled();
    if (t === ec.$7l.BACKGROUND && eW && !n) (eJ = !0), tg(!1);
    else {
        if (t !== ec.$7l.ACTIVE || !eJ) return !1;
        (eJ = !1), tg(!0);
    }
    return !0;
}
function nQ(e) {
    eP.eachConnection((t) => t.setBitRate(e.bitrate));
}
function nX() {
    if ((!eW && null == a) || null != es.Z.getRTCConnectionId()) return !1;
    tg(!1, null);
}
function nJ() {
    return !!e9 && ((e9 = !1), !0);
}
function n$(e) {
    eP.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function n0(e) {
    let { settings: t } = e;
    eP.applyMediaFilterSettings(t).finally(() => {
        (te = !1), i.emitChange();
    });
}
function n1() {
    te = !0;
}
function n2() {
    te = !1;
}
function n3(e) {
    tl = e.enabled;
}
class n4 extends (o = h.ZP.Store) {
    initialize() {
        ty(),
            tA(),
            nN(),
            null !== tf().mostRecentlyRequestedVoiceFilter && nO(),
            tJ(),
            (ts = {
                [ep.AN.VIDEO]: eP.supports(ep.AN.VIDEO),
                [ep.AN.DESKTOP_CAPTURE]: eP.supports(ep.AN.DESKTOP_CAPTURE),
                [ep.AN.HYBRID_VIDEO]: eP.supports(ep.AN.HYBRID_VIDEO)
            }),
            this.waitFor(et.default, ei.Z, er.Z, ea.Z, es.Z, O.ZP, V.Z.storage, H.Z, C.Z, T.Z);
    }
    supports(e) {
        return eP.supports(e);
    }
    supportsInApp(e) {
        return ts[e] || eP.supports(e);
    }
    isSupported() {
        return eP.supported();
    }
    isExperimentalEncodersSupported() {
        return eP.supports(ep.AN.EXPERIMENTAL_ENCODERS);
    }
    isNoiseSuppressionSupported() {
        return eP.supports(ep.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return nT();
    }
    isNoiseCancellationError() {
        return e9;
    }
    isAutomaticGainControlSupported() {
        return eP.supports(ep.AN.AUTOMATIC_GAIN_CONTROL);
    }
    isAdvancedVoiceActivitySupported() {
        return nT();
    }
    isAecDumpSupported() {
        return eP.supports(ep.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return eP.supports(ep.AN.VIDEO) && eP.supports(ep.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        let t = (null === (e = er.Z.getChannel(e8)) || void 0 === e ? void 0 : e.type) === ec.d4z.GUILD_STAGE_VOICE,
            n = i.getHardwareEncoding();
        return !t && n && M.Z.simulcastEnabled();
    }
    getAecDump() {
        return tf().aecDumpEnabled;
    }
    getMediaEngine() {
        return eP;
    }
    getVideoComponent() {
        return eP.supports(ep.AN.DIRECT_VIDEO) && eP.setUseDirectVideo(!0), eP.Video;
    }
    getCameraComponent() {
        return eP.supports(ep.AN.DIRECT_VIDEO) && eP.setUseDirectVideo(!0), eP.Camera;
    }
    isEnabled() {
        return ek;
    }
    isMute() {
        return this.isSelfMute() || eV;
    }
    isDeaf() {
        return this.isSelfDeaf() || eY;
    }
    hasContext(e) {
        return null != ew[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return e === ep.Yn.DEFAULT && ej;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return !this.isEnabled() || tf(e).mute || !V.Z.didHavePermission(ef.Eu.AUDIO) || this.isSelfDeaf(e) || (e === ep.Yn.DEFAULT && eH);
    }
    shouldSkipMuteUnmuteSound() {
        return ez;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        ez = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && ei.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return tl;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return !this.isSupported() || tf(e).deaf;
    }
    isVideoEnabled() {
        return eW && e$;
    }
    isVideoAvailable() {
        return Object.values(eF).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.STREAM;
        return eG === e && null != a;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.STREAM;
        return eG === t && null != a && (null === (e = a.desktopSource) || void 0 === e ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT;
        return e !== et.default.getId() && (tf(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return eP.supports(ep.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT;
        return null !== (t = tf(n).disabledLocalVideos[e]) && void 0 !== t && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT;
        return null !== (t = tf(n).videoToggleStateMap[e]) && void 0 !== t ? t : ec.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT;
        return t === ep.Yn.DEFAULT && ti.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return e === ep.Yn.DEFAULT && ti.size > 0;
    }
    isMediaFilterSettingLoading() {
        return te;
    }
    isNativeAudioPermissionReady() {
        return tt;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return eG;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT,
            n = tf(t).localPans[e];
        return null != n ? n : eA;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT,
            n = t === ep.Yn.STREAM ? ep.Yh : ep.Qx,
            i = tf(t).localVolumes[e];
        return null != i ? i : n;
    }
    getInputVolume() {
        return tf().inputVolume;
    }
    getOutputVolume() {
        return tf().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return tf(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return tf(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return e7;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return tf().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterLoopbackEnabled() {
        return tf().voiceFilterLoopbackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            d().each(ew, (t, n) => {
                let {
                    mode: i,
                    modeOptions: { shortcut: r }
                } = t;
                i === ec.pM4.PUSH_TO_TALK && eM.has(n) && (e[n] = r);
            }),
            e
        );
    }
    getInputDeviceId() {
        return tL(eB, tf().inputDeviceId);
    }
    getOutputDeviceId() {
        return tL(eZ, tf().outputDeviceId);
    }
    getVideoDeviceId() {
        return tL(eF, tf().videoDeviceId);
    }
    getInputDevices() {
        return eB;
    }
    getOutputDevices() {
        return eZ;
    }
    getVideoDevices() {
        return eF;
    }
    getEchoCancellation() {
        let e = tf();
        return ei.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return tf().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return tf().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return tf().h265Enabled;
    }
    getLoopback() {
        return ta;
    }
    getNoiseSuppression() {
        let e = tf();
        return ei.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tf();
        return ei.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getNoiseCancellation() {
        return tf().noiseCancellation;
    }
    getExperimentalEncoders() {
        return tf().experimentalEncoders;
    }
    getHardwareEncoding() {
        var e;
        return null === (e = tf().hardwareEncoding) || void 0 === e || e;
    }
    getEnableSilenceWarning() {
        return tf().silenceWarning;
    }
    getDebugLogging() {
        return eP.getDebugLogging();
    }
    getQoS() {
        return tf().qos;
    }
    getAttenuation() {
        return tf().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return tf().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return tf().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return tT() && tf().automaticAudioSubsystem ? ep.iA.AUTOMATIC : eP.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return eP.getMLSSigningKey(e, t);
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return tf(e);
    }
    getState() {
        return {
            settingsByContext: ew,
            inputDevices: eB,
            outputDevices: eZ,
            appSupported: ts,
            krispModuleLoaded: e6,
            voiceFiltersModuleState: e5,
            goLiveSource: a,
            goLiveContext: eG
        };
    }
    getInputDetected() {
        return e0;
    }
    getNoInputDetectedNotice() {
        return e2;
    }
    getPacketDelay() {
        return Q.isPlatformEmbedded || this.getMode() !== ec.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        eP.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return eU;
    }
    getVideoHook() {
        return tf().videoHook;
    }
    supportsVideoHook() {
        return eP.supports(ep.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tf().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e);
    }
    supportsExperimentalSoundshare() {
        return eP.supports(ep.AN.EXPERIMENTAL_SOUNDSHARE) && _().satisfies(null === y.Z || void 0 === y.Z ? void 0 : y.Z.os.release, ed.I9);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = tf().useSystemScreensharePicker,
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
        let e = eP.supports(ep.AN.NATIVE_SCREENSHARE_PICKER);
        return k.Z.getCurrentConfig(
            { location: 'supportsSystemScreensharePicker' },
            {
                disable: !e,
                autoTrackExposure: !1
            }
        ).enableSystemPicker;
    }
    getOpenH264() {
        return tf().openH264;
    }
    getEverSpeakingWhileMuted() {
        return eq;
    }
    getSpeakingWhileMuted() {
        return eQ;
    }
    supportsScreenSoundshare() {
        return (0, Q.isMac)() ? eP.supports(ep.AN.SOUNDSHARE) && _().satisfies(null === y.Z || void 0 === y.Z ? void 0 : y.Z.os.release, ed.yG) && tb() : (0, Q.isWindows)() ? eP.supports(ep.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, Q.isLinux)() && eP.supports(ep.AN.SCREEN_SOUNDSHARE);
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
        let n = eP.getSupportedSecureFramesProtocolVersion(),
            i = G.m.getCurrentConfig({ location: 'MediaEngineStore' }),
            r =
                null != e
                    ? G.N.getCurrentConfig({
                          guildId: e,
                          location: 'MediaEngineStore'
                      })
                    : null,
            a = i.canSupportDaveProtocol || (null == r ? void 0 : r.canSupportDaveProtocol),
            s = Math.max(i.protocolVersionFloor, null !== (t = null == r ? void 0 : r.protocolVersionFloor) && void 0 !== t ? t : 0),
            o = n > 5 && 114 === n;
        return a && (n >= s || o) ? n : 0;
    }
    hasClipsSource() {
        return null != s;
    }
}
em(n4, 'displayName', 'MediaEngineStore');
let n6 = (i = new n4(v.Z, {
    VOICE_CHANNEL_SELECT: nk,
    VOICE_STATE_UPDATES: tj,
    CONNECTION_OPEN: tB,
    CONNECTION_CLOSED: tF,
    RTC_CONNECTION_STATE: tV,
    AUDIO_SET_TEMPORARY_SELF_MUTE: tH,
    AUDIO_TOGGLE_SELF_MUTE: tY,
    AUDIO_SET_SELF_MUTE: tW,
    AUDIO_TOGGLE_SELF_DEAF: tz,
    AUDIO_TOGGLE_LOCAL_MUTE: tq,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: tQ,
    AUDIO_SET_LOCAL_VOLUME: t$,
    AUDIO_SET_LOCAL_PAN: t0,
    AUDIO_SET_MODE: t1,
    AUDIO_SET_INPUT_VOLUME: t2,
    AUDIO_SET_OUTPUT_VOLUME: t3,
    AUDIO_SET_INPUT_DEVICE: t4,
    AUDIO_SET_OUTPUT_DEVICE: t6,
    AUDIO_SET_ECHO_CANCELLATION: nt,
    AUDIO_SET_SIDECHAIN_COMPRESSION: nn,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: ni,
    AUDIO_SET_LOOPBACK: na,
    AUDIO_SET_NOISE_SUPPRESSION: no,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nl,
    AUDIO_SET_NOISE_CANCELLATION: nu,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: nf,
    AUDIO_SET_DEBUG_LOGGING: n_,
    MEDIA_ENGINE_SET_VIDEO_HOOK: np,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: nh,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: nm,
    AUDIO_SET_ATTENUATION: ng,
    AUDIO_SET_QOS: nE,
    MEDIA_ENGINE_DEVICES: t8,
    AUDIO_VOLUME_CHANGE: t9,
    AUDIO_RESET: nv,
    AUDIO_INPUT_DETECTED: ny,
    AUDIO_SET_SUBSYSTEM: nP,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: nZ,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: nF,
    MEDIA_ENGINE_PERMISSION: nB,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: nH,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: t5,
    MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nc,
    MEDIA_ENGINE_INTERACTION_REQUIRED: t7,
    USER_SETTINGS_MODAL_INIT: nY,
    USER_SETTINGS_MODAL_SET_SECTION: nY,
    CERTIFIED_DEVICES_SET: nW,
    RPC_APP_CONNECTED: nU,
    RPC_APP_DISCONNECTED: nG,
    OVERLAY_INITIALIZE: tZ,
    MEDIA_ENGINE_SET_OPEN_H264: nK,
    MEDIA_ENGINE_SET_HARDWARE_ENCODING: nd,
    APP_STATE_UPDATE: nq,
    SET_CHANNEL_BITRATE: nQ,
    SET_VAD_PERMISSION: nI,
    SET_NATIVE_PERMISSION: nb,
    SET_CHANNEL_VIDEO_QUALITY_MODE: n$,
    MEDIA_ENGINE_SET_AEC_DUMP: nz,
    CHANNEL_DELETE: nX,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: nJ,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: n0,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: n1,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: n2,
    USER_SETTINGS_PROTO_UPDATE: tK,
    CLIPS_INIT: nV,
    CLIPS_SETTINGS_UPDATE: nj,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: n3,
    VOICE_FILTER_REQUEST_SWITCH: nx,
    VOICE_FILTER_LOAD_MODULE: nO,
    VOICE_FILTER_LOOPBACK_TOGGLE: nD,
    VOICE_FILTER_APPLIED: nL
}));
