let i, r, a, s;
n.d(t, { Z: () => n4 }), n(47120), n(571269), n(298267), n(724458), n(773603), n(653041), n(337869);
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
    T = n(547727),
    b = n(435064),
    S = n(779618),
    A = n(710845),
    N = n(535911),
    C = n(353926),
    R = n(646047),
    O = n(594190),
    D = n(502286),
    L = n(12898),
    x = n(355552),
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
    eT = 1,
    eb = 1,
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
    eL = 2 * q.Z.Millis.SECOND;
function ex() {
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
    eB = { [ep.w5]: tx('No Input Devices') },
    eZ = { [ep.w5]: tx('No Output Devices') },
    eF = { [ep.w5]: tx('No Video Devices') },
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
    e5 = null,
    e7 = null,
    e8 = null,
    e9 = null,
    te = null,
    tt = !1,
    tn = !1,
    ti = !1;
V.Z.hasPermission(ef.Eu.AUDIO, { showAuthorizationError: !1 }), V.Z.hasPermission(ef.Eu.CAMERA, { showAuthorizationError: !1 });
let tr = !1,
    ta = new Set(),
    ts = tr,
    to = !1,
    tl = {},
    tu = null,
    tc = !0,
    td = {},
    tf = 5 * q.Z.Millis.SECOND;
function t_() {
    var e, t;
    return null !== (t = null === (e = el.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t ? 'always' : X.Z === p.R.CANARY ? 'permittedDevicesOnly' : 'never';
}
function tp() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT,
        t = ew[e];
    return null == t && ((t = ex()), (ew[e] = t)), t;
}
function th(e) {
    let t = tp(e.context);
    e.setInputMode(t.mode, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: t.modeOptions.autoThreshold,
        vadUseKrisp: t.modeOptions.vadUseKrisp && nA(),
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        pttReleaseDelay: t.modeOptions.delay
    });
}
function tm(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Qx;
    return d().clamp(e, 0, t);
}
function tg(e) {
    let t = tp(e.context),
        n = !ek || t.mute || t.deaf;
    e.context === ep.Yn.DEFAULT ? (n = n || eV || ej || eH || !V.Z.didHavePermission(ef.Eu.AUDIO)) : e.context === ep.Yn.STREAM && (n = !0), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === ep.Yn.DEFAULT && T.Z.updateNativeMute();
}
function tE(e) {
    e !== eG && (null != a && eP.setGoLiveSource(null, eG), (eG = e));
}
function tv() {
    var e, t, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eW,
        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        o = a;
    if (((null == o ? void 0 : o.desktopSource) != null && o.desktopSource.id !== (null == s ? void 0 : null === (e = s.desktopSource) || void 0 === e ? void 0 : e.id) && (null != o.desktopSource.soundshareId && (0, Q.isWindows)() && I.pn(o.desktopSource.soundshareId), eP.setGoLiveSource(null, eG)), (null == o ? void 0 : o.cameraSource) != null && (o.cameraSource.videoDeviceGuid !== (null == s ? void 0 : null === (t = s.cameraSource) || void 0 === t ? void 0 : t.videoDeviceGuid) || o.cameraSource.audioDeviceGuid !== (null == s ? void 0 : null === (n = s.cameraSource) || void 0 === n ? void 0 : n.audioDeviceGuid)) && eP.setGoLiveSource(null, eG), (eW || r) && ((eK = (eW = r) ? tw(eF, tp().videoDeviceId) : ep.Av), eP.setVideoInputDevice(eK)), (a = s), null != s)) {
        let e = {
            resolution: s.quality.resolution,
            frameRate: s.quality.frameRate
        };
        if (null != s.desktopSource) {
            let t = t_(),
                n = tp().videoHook;
            eP.setGoLiveSource(
                {
                    desktopDescription: {
                        id: s.desktopSource.id,
                        soundshareId: s.desktopSource.soundshareId,
                        useVideoHook: n,
                        useGraphicsCapture: tb(),
                        useLoopback: i.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: tS(),
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
function ty(e, t, n, i) {
    var r;
    let a = null !== (r = null == e ? void 0 : e.soundshareSession) && void 0 !== r ? r : '';
    null == td[a] && (td[a] = new Set());
    let s = null != t && !td[a].has(t);
    s && td[a].add(t),
        (null == t || s) &&
            K.default.track(ec.rMx.SOUNDSHARE_FAILED, {
                soundshare_failure_code: t,
                soundshare_failure_reason: n,
                soundshare_failure_will_retry: i,
                ...(0, D.Z)(e)
            });
}
function tI(e) {
    let t = tp(),
        n = t.inputDeviceId;
    if ((e.setEchoCancellation(ei.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(ei.Z.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(ei.Z.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), e.setVoiceFiltersEnabled(null !== e5), (0, Q.isWeb)())) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function tT() {
    eP.on(m.aB.Connection, (e) => {
        var t, n, r, s;
        th(e), tg(e), tI(e);
        let o = tp();
        e.setAttenuation(o.attenuation, o.attenuateWhileSpeakingSelf, o.attenuateWhileSpeakingOthers), e.setQoS(o.qos), e.setExperimentalEncoders(o.experimentalEncoders), e.setHardwareH264(null === (t = o.hardwareEncoding) || void 0 === t || t), e.setSoftwareH264(null === (n = o.openH264) || void 0 === n || n);
        let l = es.Z.getGuildId(),
            {
                muteBeforeProcessing: u,
                pttBeforeProcessing: c,
                skipEncode: d
            } = (null != l ? w.Z : P.Z).getCurrentConfig(
                {
                    location: 'setupMediaEngine',
                    ...(null != l && { guildId: l })
                },
                { autoTrackExposure: !0 }
            );
        u && e.setExperimentFlag(ep.V8.MUTE_BEFORE_PROCESSING, !0), c && e.setExperimentFlag(ep.V8.PTT_BEFORE_PROCESSING, !0), d && e.setExperimentFlag(ep.V8.SKIP_ENCODE, !0);
        let f = !1,
            _ = !0;
        if ((e.setExperimentFlag(ep.V8.RESET_DECODER_ON_ERRORS, !0), f && e.setExperimentFlag(ep.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0), _ && e.setExperimentFlag(ep.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0), e.context === ep.Yn.STREAM)) {
            let { simulcastEnabled: t, lqStreamBitrate: n } = M.Z.getConfig();
            e.configureGoLiveSimulcast(t, n);
        }
        (0, Q.isWindows)() ? ((null == tu ? void 0 : tu.startsWith('NVIDIA')) ? e.setExperimentFlag(ep.V8.SIGNAL_AV1, !0) : (null == tu ? void 0 : tu.startsWith('AMD')) && parseInt(null !== (s = null === (r = tu.match(/\d+/)) || void 0 === r ? void 0 : r.at(0)) && void 0 !== s ? s : '0', 10) >= 9000 && L.Z.getCurrentConfig({ location: 'setupMediaEngine' }, { autoTrackExposure: !0 }).signalAV1Support ? e.setExperimentFlag(ep.V8.SIGNAL_AV1, !0) : e.setExperimentFlag(ep.V8.SIGNAL_AV1_DECODE, !0)) : ((0, Q.isMac)() || (0, Q.isLinux)()) && e.setExperimentFlag(ep.V8.SIGNAL_AV1_DECODE, !0), (0, Q.isWindows)() && e.setExperimentFlag(ep.V8.SIGNAL_AV1_HARDWARE_DECODE, !0), eP.setHasFullbandPerformance((0, N.Z)());
        let h = x.s.getCurrentConfig({ location: 'setupMediaEngine' }, { autoTrackExposure: !0 }).enabled;
        if ((e.setRemoteAudioHistory(h ? 1000 : 0), (0, S.Z)(i))) {
            let t = b.Z.getSettings();
            e.setExperimentFlag(ep.V8.STREAMER_CLIP, t.clipsEnabled);
            let { enableViewerClipping: n } = Z.Z.getCurrentConfig({ location: 'f627ab_15' }, { autoTrackExposure: !1 });
            e.setViewerSideClip(n), e.setClipsKeyFrameInterval(ep.ux);
        }
        for (let t of ((o = tp(e.context)), e.setPostponeDecodeLevel(eO), Object.keys(o.localMutes))) t !== et.default.getId() && e.setLocalMute(t, o.localMutes[t]);
        for (let t of Object.keys(o.localVolumes)) t !== et.default.getId() && e.setLocalVolume(t, o.localVolumes[t]);
        for (let t of Object.keys(o.localPans)) {
            let n = o.localPans[t];
            e.setLocalPan(t, n.left, n.right);
        }
        for (let t of Object.keys(o.disabledLocalVideos)) e.setLocalVideoDisabled(t, o.disabledLocalVideos[t]);
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
                        eX.start(eL, () => {
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
                ty(null == a ? void 0 : a.desktopSource, t, n, i);
            }),
            e.on(m.Sh.SoundshareSpeaking, () => {
                (null == a ? void 0 : a.desktopSource) != null && (K.default.track(ec.rMx.SOUNDSHARE_TRANSMITTING, (0, D.Z)(null == a ? void 0 : a.desktopSource)), null != ea.Z.getHookError(ec.K3D.SOUND) && v.Z.wait(() => v.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
            });
        let g = new E.V7();
        e.on(m.Sh.SoundshareTrace, (e) => {
            switch (e.type) {
                case 'soundshare_attach_requested':
                    g.start(tf, () => {
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
                        (ty(null == a ? void 0 : a.desktopSource, n, t, i),
                        i ||
                            (g.stop(),
                            v.Z.wait(() =>
                                v.Z.dispatch({
                                    type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
                                    errorMessage: t,
                                    errorCode: n
                                })
                            )));
                    break;
                case 'soundshare_state_transition':
                    4 === e.newState && (g.stop(), v.Z.wait(() => v.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
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
                    (tt = !0),
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
                            ...tp(ep.Yn.DEFAULT).modeOptions,
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
                g.stop();
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
            (ti = !0),
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
        tN.reset(),
        (0, eo.q)().then((e) => {
            null != e && (tu = e.gpu_brand);
        });
}
function tb() {
    return (0, Q.isWindows)() && _().satisfies(null === y.Z || void 0 === y.Z ? void 0 : y.Z.os.release, ed.nz);
}
function tS() {
    return (0, Q.isMac)() && eP.supports(ep.AN.SCREEN_CAPTURE_KIT) && _().satisfies(null === y.Z || void 0 === y.Z ? void 0 : y.Z.os.release, ed.C7);
}
function tA() {
    return (0, Q.isWindows)() && eP.supports(ep.AN.AUTOMATIC_AUDIO_SUBSYSTEM) && eP.supports(ep.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH);
}
let tN = new (class {
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
        let e = tp();
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
function tC() {
    var e;
    let t = g.K.get('audio');
    null != t && (g.K.set(eE, { [ep.Yn.DEFAULT]: t }), g.K.remove('audio')),
        (ew = null !== (e = g.K.get(eE)) && void 0 !== e ? e : {}),
        d().each(ew, (e) => {
            if ((d().defaultsDeep(e, ex()), null != e.modeOptions && 'string' == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, ee.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== ev && ((e.vadUseKrispSettingVersion = ev), (e.modeOptions.vadUseKrisp = !0)), e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)), !e.vadThrehsoldMigrated)) {
                var t;
                (e.vadThrehsoldMigrated = !0), (null === (t = e.modeOptions) || void 0 === t ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = eR);
            }
            (0, Q.isWeb)() ? e.ncUseKrispjsSettingVersion !== eI && ((e.ncUseKrispjsSettingVersion = eI), (e.noiseSuppression = !1), (e.noiseCancellation = !0)) : e.ncUseKrispSettingVersion !== ey && ((e.ncUseKrispSettingVersion = ey), (e.noiseSuppression = !1), (e.noiseCancellation = !0)), e.hardwareEnabledVersion !== eT && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = eT)), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
        }),
        tD();
}
function tR(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = tp(t);
    return Object.assign(i, e), !__OVERLAY__ && n && g.K.set(eE, ew), i;
}
function tO() {
    g.K.remove(eE), location.reload();
}
function tD() {
    var e, t, n;
    let i = tp();
    eP.setAudioInputDevice(i.inputDeviceId), eP.setAudioOutputDevice(i.outputDeviceId), tv(), eP.setInputVolume(i.inputVolume), eP.setOutputVolume(i.outputVolume), eP.setH264Enabled(null === (e = i.hardwareEncoding) || void 0 === e || e || i.openH264), eP.setAv1Enabled(null === (t = i.hardwareEncoding) || void 0 === t || t), eP.setH265Enabled(null === (n = i.hardwareEncoding) || void 0 === n || n), eP.setAecDump(i.aecDumpEnabled), eP.setSidechainCompression(i.sidechainCompression), eP.setSidechainCompressionStrength(i.sidechainCompressionStrength);
}
function tL() {
    ek ||
        eP.enable().then(() =>
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
                enabled: !0,
                unmute: !1
            })
        );
}
function tx(e) {
    return {
        id: ep.w5,
        index: 0,
        name: e,
        disabled: !0
    };
}
function tP(e, t) {
    if (0 === e.length) {
        let e = tx(t);
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
function tw(e, t) {
    var n;
    let i = null !== (n = e[t]) && void 0 !== n ? n : d()(e).values().first();
    return null != i ? i.id : t;
}
function tM(e) {
    let t = eB;
    if (((eB = tP(e, eh.intl.string(eh.t['/QIjDA']))), !d().isEqual(eB, t))) {
        let e = tp(),
            t = tw(eB, e.inputDeviceId);
        eP.setAudioInputDevice(t);
    }
}
function tk(e) {
    let t = eZ;
    if (((eZ = tP(e, eh.intl.string(eh.t.xlUg0t))), !d().isEqual(eZ, t))) {
        let e = tp(),
            t = tw(eZ, e.outputDeviceId);
        eP.setAudioOutputDevice(t);
    }
}
function tU(e) {
    e$ = e.length > 0;
    let t = eF;
    if (((eF = tP(e, eh.intl.string(eh.t.WKWARU))), eW && !d().isEqual(eF, t))) {
        var n;
        let e = void 0 !== eF[eK],
            i = eK === ep.w5 && (null === (n = t[ep.w5]) || void 0 === n ? void 0 : n.disabled);
        tv(e || i);
    }
}
function tG() {
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
            { localMutes: o, localVolumes: l } = tp(r);
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
        tR(
            {
                localMutes: o,
                localVolumes: l
            },
            r
        );
    }
}
function tB(e) {
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
function tZ(e, t) {
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
function tF(e) {
    (r = e.sessionId),
        (eV = !1),
        (eY = !1),
        (0, Q.isWeb)() ||
            B.Z.subscribe({ location: 'handleConnectionOpen' }, (e) => {
                let t = tp();
                !e.sidechainAvailable && t.sidechainCompression ? (tR({ sidechainCompressionSettingVersion: 0 }), ns(!1)) : e.sidechainAvailable && t.sidechainCompressionSettingVersion < eb && (tR({ sidechainCompressionSettingVersion: eb }), ns(e.sidechainEnabled));
            });
    let t = tp();
    tA() && (t.automaticAudioSubsystem && nw(), t.audioSubsystemSettingVersion < eS && (tR({ audioSubsystemSettingVersion: eS }), t.automaticAudioSubsystem || eP.getAudioSubsystem() === ep.iA.LEGACY || nP(ep.iA.AUTOMATIC))), tG();
}
function tV(e) {
    let { mediaEngineState: t } = e;
    (ew = t.settingsByContext), (eB = t.inputDevices), (eZ = t.outputDevices), (tl = t.appSupported), (e6 = t.krispModuleLoaded), (eG = t.goLiveContext);
}
function tj() {
    r = null;
}
function tH(e) {
    switch (e.state) {
        case ec.hes.CONNECTING:
            tL();
            break;
        case ec.hes.RTC_CONNECTING:
            (e1 = !1), (e2 = !1);
            break;
        case ec.hes.RTC_CONNECTED:
            tv();
            break;
        case ec.hes.DISCONNECTED:
            t$(), t0();
    }
    tN.update();
}
function tY(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => (r === t.sessionId ? ((eV = t.mute || t.suppress), (eY = t.deaf), eP.eachConnection(tg), tv(!(null != t.guildId && null != t.channelId && null != te && te !== t.channelId) && eW), (te = t.channelId), !0) : (__OVERLAY__ || t.userId !== et.default.getId() || null != es.Z.getChannelId() || tv(!1, null), e)), !1);
}
function tW(e) {
    let { mute: t } = e;
    (ej = t), eP.eachConnection(tg);
}
function tK(e) {
    let { context: t, skipMuteUnmuteSoundEffect: n } = e,
        { mute: i, deaf: r } = tp(t);
    if (t === ep.Yn.DEFAULT && (V.Z.requestPermission(ef.Eu.AUDIO), eH)) return !1;
    (i = !r && !i) || (r = !1),
        n && (ez = !0),
        tR(
            {
                mute: i,
                deaf: r
            },
            t
        ),
        eP.eachConnection(tg);
}
function tz(e) {
    let { context: t, mute: n } = e;
    tR({ mute: n }, t), eP.eachConnection(tg);
}
function tq(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: i
    } = e;
    if (t !== e_.yP.PRELOADED_USER_SETTINGS || n || null != i) return !1;
    tG(!0);
}
function tQ(e) {
    let { context: t } = e;
    tR({ deaf: !tp(t).deaf }, t), eP.eachConnection(tg);
}
function tX(e) {
    let { context: t, userId: n } = e;
    if (n === et.default.getId()) return;
    let { localMutes: i } = tp(t);
    i[n] ? delete i[n] : (i[n] = !0), tR({ localMutes: i }, t), eP.eachConnection((e) => e.setLocalMute(n, i[n] || !1), t);
}
function tJ(e) {
    var t, n, i, r, a, s, o;
    let { context: l, userId: c, videoToggleState: d, persist: f, isAutomatic: _ } = e;
    u()(!(f && _), 'These are not allowed to both be true.');
    let p = d === ec.ZUi.DISABLED,
        { disabledLocalVideos: h } = tp(l),
        m = null !== (t = h[c]) && void 0 !== t && t,
        g = ta.has(c),
        E = d === ec.ZUi.AUTO_ENABLED || d === ec.ZUi.MANUAL_ENABLED;
    eg.info('disableVideo='.concat(p, ' currentlyDisabled=').concat(m, ' currentlyAutoDisabled=').concat(g, ', isVideoShown=').concat(E)), u()(!(g && !m), 'If you are auto-disabled, then you are also disabled.');
    let v = p !== m,
        y = l === ep.Yn.DEFAULT,
        I = _ && v && y,
        T = f && v && y;
    eg.info('changed='.concat(v, ' isDefaultContext=').concat(y, ' isUpdateCausedByVideoHealthManager=').concat(I, ' isManualToggleByUser=').concat(T));
    let { videoToggleStateMap: b } = tp(l);
    if ((b[c] === ec.ZUi.AUTO_PROBING && d === ec.ZUi.AUTO_ENABLED && (0, F.Z)(c, p ? ep.fC.AUTO_DISABLE : ep.fC.AUTO_ENABLE, E), (b[c] = d), tR({ videoToggleStateMap: b }, l, f), d === ec.ZUi.AUTO_PROBING ? null === (n = es.Z.getRTCConnection()) || void 0 === n || n.pauseStatsCollectionForUser(c, !0) : null === (i = es.Z.getRTCConnection()) || void 0 === i || i.pauseStatsCollectionForUser(c, !1), ts || (eg.info('isAutoDisableAllowed='.concat(ts, ' - disabling VideoHealthManager')), null === (a = es.Z.getRTCConnection()) || void 0 === a || null === (r = a.getVideoHealthManager()) || void 0 === r || r.disable()), I)) {
        if ((!p && !g) || (p && !ts)) return;
        (0, F.Z)(c, p ? ep.fC.AUTO_DISABLE : ep.fC.AUTO_ENABLE, E), p ? ta.add(c) : ta.delete(c);
    } else T && (g && !p ? (eg.info('disallowing auto-disable for this session because of manual override by user'), (ts = !1), null === (o = es.Z.getRTCConnection()) || void 0 === o || null === (s = o.getVideoHealthManager()) || void 0 === s || s.disable(), (0, F.Z)(c, ep.fC.MANUAL_REENABLE, E)) : (0, F.Z)(c, p ? ep.fC.MANUAL_DISABLE : ep.fC.MANUAL_ENABLE, E));
    y && !p && ta.delete(c),
        p ? (h[c] = !0) : delete h[c],
        tR({ disabledLocalVideos: h }, l, f),
        eP.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(c, null !== (t = h[c]) && void 0 !== t && t);
        }, l);
}
function t$() {
    if (0 === ta.size) return;
    let e = ep.Yn.DEFAULT,
        { disabledLocalVideos: t } = tp(e);
    ta.forEach((n) => {
        u()(t[n], 'If you are auto-disabled, then you are also disabled.'), delete t[n], eP.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        ta.clear(),
        tR({ disabledLocalVideos: t }, e, !1);
}
function t0() {
    let e = ep.Yn.DEFAULT,
        { videoToggleStateMap: t } = tp(e);
    for (let [e, n] of Object.entries(t)) n === ec.ZUi.AUTO_PROBING && delete t[e];
    tR({ videoToggleStateMap: t }, e, !1);
}
function t1(e) {
    let { context: t, userId: n, volume: i } = e;
    if (n === et.default.getId()) return;
    let r = t === ep.Yn.STREAM ? ep.Yh : ep.Qx,
        { localVolumes: a } = tp(t);
    i === r ? delete a[n] : (a[n] = i), tR({ localVolumes: a }, t), eP.eachConnection((e) => e.setLocalVolume(n, i), t);
}
function t2(e) {
    let { context: t, userId: n, left: i, right: r } = e,
        { localPans: a } = tp(t);
    (a[n] = {
        left: i,
        right: r
    }),
        tR({ localPans: a }, t),
        eP.eachConnection((e) => e.setLocalPan(n, i, r), t);
}
function t3(e) {
    let { context: t, mode: n, options: i } = e;
    tR(
        {
            mode: n,
            modeOptions: i
        },
        t
    ),
        eP.eachConnection(th),
        tN.update();
}
function t4(e) {
    let { volume: t } = e;
    tR({ inputVolume: tm(t) }), eP.setInputVolume(t);
}
function t6(e) {
    let { volume: t } = e;
    tR({ outputVolume: t }), eP.setOutputVolume(t);
}
function t5(e) {
    let { id: t } = e;
    tR({ inputDeviceId: (t = tw(eB, t)) }), eP.setAudioInputDevice(t);
}
function t7(e) {
    let { id: t } = e;
    tR({ outputDeviceId: (t = tw(eZ, t)) }), eP.setAudioOutputDevice(t);
}
function t8(e) {
    let { id: t } = e;
    tR({ videoDeviceId: (t = tw(eF, t)) }), tv();
}
function t9(e) {
    return eU !== e.required && ((eU = e.required), e.required || eP.interact(), !0);
}
function ne(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: i } = e;
    tM(t), tk(n), tU(i);
}
function nt(e) {
    let { inputVolume: t, outputVolume: n } = e;
    tR({
        inputVolume: tm(t),
        outputVolume: n
    });
}
function nn(e) {
    let t = tp();
    K.default.track(ec.rMx.VOICE_PROCESSING, {
        echo_cancellation: t.echoCancellation,
        noise_cancellation: t.noiseCancellation,
        noise_suppression: t.noiseSuppression,
        automatic_gain_control: t.automaticGainControl,
        location: e
    });
}
function ni(e) {
    let t = tR({ echoCancellation: e.enabled });
    eP.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nl(), nn(e.location);
}
function nr(e) {
    ns(e.enabled);
}
function na(e) {
    let t = tR({ sidechainCompressionStrength: e.strength });
    eP.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function ns(e) {
    let t = tR({ sidechainCompression: e });
    eP.setSidechainCompression(t.sidechainCompression);
}
function no(e) {
    let { enabled: t } = e;
    return (to = t), nl();
}
function nl() {
    let e = tp(),
        t = e.inputDeviceId,
        n = ei.Z.hasEchoCancellation(t) || e.echoCancellation,
        i = !to,
        r = ei.Z.hasNoiseSuppression(t) || e.noiseSuppression,
        a = ei.Z.hasAutomaticGainControl(t) || e.automaticGainControl,
        s = e.noiseCancellation;
    eP.setLoopback(to, {
        echoCancellation: n,
        echoCancellationPreEcho: i,
        noiseSuppression: r,
        automaticGainControl: a,
        noiseCancellation: s
    });
}
function nu(e) {
    let t = tR({ noiseSuppression: e.enabled });
    eP.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nl(), nn(e.location);
}
function nc(e) {
    let t = tR({ automaticGainControl: e.enabled });
    eP.eachConnection((e) => e.setAutomaticGainControl(t.automaticGainControl)), nl(), nn(e.location);
}
function nd(e) {
    let t = tR({ noiseCancellation: e.enabled });
    eP.eachConnection((e) => e.setNoiseCancellation(t.noiseCancellation)), nl(), nn(e.location);
}
function nf(e) {
    let t = tR({ experimentalEncoders: e.enabled });
    eP.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
}
function n_(e) {
    var t, n;
    let { enabled: i } = e,
        r = tR({ hardwareEncoding: i });
    eP.eachConnection((e) => {
        var t;
        return e.setHardwareH264(null === (t = r.hardwareEncoding) || void 0 === t || t);
    }),
        eP.setH264Enabled(r.hardwareEncoding || r.openH264),
        eP.setAv1Enabled(null === (t = r.hardwareEncoding) || void 0 === t || t),
        eP.setH265Enabled(null === (n = r.hardwareEncoding) || void 0 === n || n);
}
function np(e) {
    tR({ silenceWarning: e.enabled }), tN.update();
}
function nh(e) {
    eP.setDebugLogging(e.enabled);
}
function nm(e) {
    tR({ videoHook: e.enabled });
}
function ng(e) {
    tR({ experimentalSoundshare2: e.enabled });
}
function nE(e) {
    let { enabled: t } = e;
    tR({ useSystemScreensharePicker: t });
}
function nv(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i } = e,
        r = tR({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: i
        });
    eP.eachConnection((e) => e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers));
}
function ny(e) {
    let { enabled: t } = e;
    tR({ qos: t }), eP.eachConnection((e) => e.setQoS(t));
}
function nI() {
    tO();
}
function nT(e) {
    let { inputDetected: t } = e;
    (e0 = t), !e1 && e0 && ((e1 = !0), tN.update());
}
function nb(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === eH) return !1;
    (eH = n), eP.eachConnection(tg);
}
function nS(e) {
    let { state: t, permissionType: n } = e,
        i = t === ef.PQ.ACCEPTED;
    switch (n) {
        case ef.Eu.AUDIO:
            (ti = !0), eP.eachConnection(tg);
            break;
        case ef.Eu.CAMERA:
            !i && eW && tv(!1);
            break;
        default:
            return !1;
    }
}
function nA() {
    return e6 || !1;
}
async function nN() {
    try {
        await $.ZP.ensureModule('discord_krisp'), $.ZP.requireModule('discord_krisp'), (e6 = !0), i.emitChange();
    } catch (t) {
        eg.warn('Failed to load Krisp module: '.concat(t.message)), J.Z.captureException(t);
        let e = ep.H3.INITIALIZED;
        if (t.message.includes(': ')) {
            let n = parseInt(t.message.substring(t.message.indexOf(': ') + 1));
            e = isNaN(n) || 0 === n ? ep.H3.INITIALIZED : n;
        }
        K.default.track(ec.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), tR({ noiseCancellation: !1 });
    } finally {
        e4 = !1;
    }
}
function nC() {
    return (0, Q.isWindows)() || (0, Q.isLinux)() || ((0, Q.isMac)() && _().satisfies(null === y.Z || void 0 === y.Z ? void 0 : y.Z.os.release, eD));
}
function nR() {
    !nC() || __OVERLAY__ || e4 || e6 ? ((0, Q.isWeb)() && eP.supports(ep.AN.NOISE_CANCELLATION) ? ((e6 = !0), i.emitChange()) : (0, Q.isWeb)() && tR({ noiseCancellation: !1 })) : ((e4 = !0), nN());
}
function nO(e) {
    let { enabled: t } = e;
    K.default.track(ec.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != e5 ? e5 : null,
        enabled: t
    }),
        tR({ voiceFilterPlaybackEnabled: t });
}
function nD(e) {
    let { newVoiceFilterId: t } = e;
    tR({ mostRecentlyRequestedVoiceFilter: t });
    let n = null != t;
    eP.eachConnection((e) => e.setVoiceFiltersEnabled(n));
}
function nL(e) {
    let { voiceFilterId: t } = e;
    (e8 = e5), (e9 = e7), (e5 = t), (e7 = null === t ? null : Date.now());
}
function nx(e) {
    nP(e.subsystem);
}
function nP(e) {
    e === ep.iA.AUTOMATIC ? (tR({ automaticAudioSubsystem: !0 }), nw()) : (tR({ automaticAudioSubsystem: !1 }), eP.setAudioSubsystem(e));
}
function nw() {
    let { enabled: e } = U.I.getCurrentConfig({ location: 'interpretAutomaticAudioSubsystem' });
    e ? eP.queueAudioSubsystem(ep.iA.EXPERIMENTAL) : eP.queueAudioSubsystem(ep.iA.STANDARD);
}
function nM(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: i, video: r } = e;
    if ((i !== n && tv(r, null), null != t || null == n)) {
        e3 = !1;
        return;
    }
    if (e3) return;
    e3 = !0;
    let a = tp();
    (a.mute || a.deaf) &&
        (tR({
            deaf: !1,
            mute: !1
        }),
        eP.eachConnection(tg));
}
function nk(e) {
    let { application: t } = e;
    eM.add(t.id);
}
function nU(e) {
    let { application: t } = e;
    eM.delete(t.id);
}
function nG(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case 'audio':
                (ek = !1), eP.eachConnection(tg);
                break;
            case 'video':
                tv(!1);
        }
}
function nB(e) {
    (ek = e.enabled),
        e.unmute &&
            tR({
                mute: !1,
                deaf: !1
            }),
        eP.eachConnection(tg);
}
function nZ(e) {
    let { enabled: t } = e;
    V.Z.requestPermission(ef.Eu.CAMERA), tv(t);
}
function nF(e) {
    let { sourceId: t, applicationName: n, quality: r } = e,
        a = b.Z.isDecoupledGameClippingEnabled(),
        o = b.Z.getSettings().decoupledClipsEnabled;
    if (!a || !o || null == y.Z) return;
    let l = null,
        u = null,
        c = z.Z.getPidFromDesktopSource(t);
    ({ soundshareId: l, soundshareSession: u } = tB(c));
    let d = {
        desktopSource: {
            id: t,
            sourcePid: c,
            soundshareId: l,
            soundshareSession: u
        },
        quality: r
    };
    null != s && s.desktopSource.id !== d.desktopSource.id && (eP.setClipsSource(null), (0, Q.isWindows)() && null != s.desktopSource.soundshareId && I.pn(s.desktopSource.soundshareId)), null != l && tZ(l, u), (s = d);
    let f = t_(),
        _ = tp().videoHook;
    eP.setClipsSource({
        desktopDescription: {
            id: s.desktopSource.id,
            soundshareId: s.desktopSource.soundshareId,
            useVideoHook: _,
            useGraphicsCapture: tb(),
            useLoopback: i.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: tS(),
            videoHookStaleFrameTimeoutMs: eN,
            graphicsCaptureStaleFrameTimeoutMs: eC,
            hdrCaptureMode: f
        },
        quality: r,
        applicationName: n
    });
}
function nV(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((s = null), eP.setClipsSource(null));
}
function nj(e) {
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
        Q.isPlatformEmbedded && !0 === s && (({ soundshareId: e, soundshareSession: i } = tB(u)), null != e && tZ(e, i)),
            tE(o),
            tv(o === ep.Yn.STREAM && eW, {
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
        tv(s, {
            cameraSource: {
                videoDeviceGuid: t,
                audioDeviceGuid: n
            },
            quality: {
                resolution: o.resolution,
                frameRate: o.frameRate
            }
        });
    } else tv(eW, null);
}
function nH(e) {
    let { section: t } = e;
    return t === ec.oAB.VOICE && tL(), !1;
}
function nY() {
    return eP.eachConnection(tI), !1;
}
function nW(e) {
    let { enabled: t } = e,
        n = tR({ openH264: t });
    eP.setH264Enabled(n.hardwareEncoding || n.openH264),
        eP.eachConnection((e) => {
            var t;
            return e.setSoftwareH264(null === (t = n.openH264) || void 0 === t || t);
        });
}
function nK(e) {
    let { enabled: t } = e,
        n = tR({ aecDumpEnabled: t });
    eP.setAecDump(n.aecDumpEnabled);
}
function nz(e) {
    let { state: t } = e,
        n = R.Z.isEnabled();
    if (t === ec.$7l.BACKGROUND && eW && !n) (eJ = !0), tv(!1);
    else {
        if (t !== ec.$7l.ACTIVE || !eJ) return !1;
        (eJ = !1), tv(!0);
    }
    return !0;
}
function nq(e) {
    eP.eachConnection((t) => t.setBitRate(e.bitrate));
}
function nQ() {
    if ((!eW && null == a) || null != es.Z.getRTCConnectionId()) return !1;
    tv(!1, null);
}
function nX() {
    return !!tt && ((tt = !1), !0);
}
function nJ(e) {
    eP.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function n$(e) {
    let { settings: t } = e;
    eP.applyMediaFilterSettings(t).finally(() => {
        (tn = !1), i.emitChange();
    });
}
function n0() {
    tn = !0;
}
function n1() {
    tn = !1;
}
function n2(e) {
    tc = e.enabled;
}
class n3 extends (o = h.ZP.Store) {
    initialize() {
        tT(),
            tC(),
            nR(),
            W.c.getCurrentConfig({ location: 'MediaEngineStore' }, { autoTrackExposure: !1 }).enabled && null !== tp().mostRecentlyRequestedVoiceFilter && (0, Y.J_)(),
            t0(),
            (tl = {
                [ep.AN.VIDEO]: eP.supports(ep.AN.VIDEO),
                [ep.AN.DESKTOP_CAPTURE]: eP.supports(ep.AN.DESKTOP_CAPTURE),
                [ep.AN.HYBRID_VIDEO]: eP.supports(ep.AN.HYBRID_VIDEO)
            }),
            this.waitFor(et.default, ei.Z, er.Z, ea.Z, es.Z, O.ZP, V.Z.storage, H.Z, C.Z, b.Z);
    }
    supports(e) {
        return eP.supports(e);
    }
    supportsInApp(e) {
        return tl[e] || eP.supports(e);
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
        return nA();
    }
    isNoiseCancellationError() {
        return tt;
    }
    isAutomaticGainControlSupported() {
        return eP.supports(ep.AN.AUTOMATIC_GAIN_CONTROL);
    }
    isAdvancedVoiceActivitySupported() {
        return nA();
    }
    isAecDumpSupported() {
        return eP.supports(ep.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return eP.supports(ep.AN.VIDEO) && eP.supports(ep.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        let t = (null === (e = er.Z.getChannel(te)) || void 0 === e ? void 0 : e.type) === ec.d4z.GUILD_STAGE_VOICE,
            n = i.getHardwareEncoding();
        return !t && n && M.Z.simulcastEnabled();
    }
    getAecDump() {
        return tp().aecDumpEnabled;
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
        return !this.isEnabled() || tp(e).mute || !V.Z.didHavePermission(ef.Eu.AUDIO) || this.isSelfDeaf(e) || (e === ep.Yn.DEFAULT && eH);
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
        return tc;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return !this.isSupported() || tp(e).deaf;
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
        return e !== et.default.getId() && (tp(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return eP.supports(ep.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT;
        return null !== (t = tp(n).disabledLocalVideos[e]) && void 0 !== t && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT;
        return null !== (t = tp(n).videoToggleStateMap[e]) && void 0 !== t ? t : ec.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT;
        return t === ep.Yn.DEFAULT && ta.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return e === ep.Yn.DEFAULT && ta.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tn;
    }
    isNativeAudioPermissionReady() {
        return ti;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return eG;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT,
            n = tp(t).localPans[e];
        return null != n ? n : eA;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT,
            n = t === ep.Yn.STREAM ? ep.Yh : ep.Qx,
            i = tp(t).localVolumes[e];
        return null != i ? i : n;
    }
    getInputVolume() {
        return tp().inputVolume;
    }
    getOutputVolume() {
        return tp().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return tp(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return tp(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return e5;
    }
    getActiveVoiceFilterAppliedAt() {
        return e7;
    }
    getPreviousVoiceFilter() {
        return e8;
    }
    getPreviousVoiceFilterAppliedAt() {
        return e9;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return tp().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return tp().voiceFilterPlaybackEnabled;
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
        return tw(eB, tp().inputDeviceId);
    }
    getOutputDeviceId() {
        return tw(eZ, tp().outputDeviceId);
    }
    getVideoDeviceId() {
        return tw(eF, tp().videoDeviceId);
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
        let e = tp();
        return ei.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return tp().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return tp().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return tp().h265Enabled;
    }
    getLoopback() {
        return to;
    }
    getNoiseSuppression() {
        let e = tp();
        return ei.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tp();
        return ei.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getNoiseCancellation() {
        return tp().noiseCancellation;
    }
    getExperimentalEncoders() {
        return tp().experimentalEncoders;
    }
    getHardwareEncoding() {
        var e;
        return null === (e = tp().hardwareEncoding) || void 0 === e || e;
    }
    getEnableSilenceWarning() {
        return tp().silenceWarning;
    }
    getDebugLogging() {
        return eP.getDebugLogging();
    }
    getQoS() {
        return tp().qos;
    }
    getAttenuation() {
        return tp().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return tp().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return tp().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return tA() && tp().automaticAudioSubsystem ? ep.iA.AUTOMATIC : eP.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return eP.getMLSSigningKey(e, t);
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
        return tp(e);
    }
    getState() {
        return {
            settingsByContext: ew,
            inputDevices: eB,
            outputDevices: eZ,
            appSupported: tl,
            krispModuleLoaded: e6,
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
        return tp().videoHook;
    }
    supportsVideoHook() {
        return eP.supports(ep.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tp().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e);
    }
    supportsExperimentalSoundshare() {
        return eP.supports(ep.AN.EXPERIMENTAL_SOUNDSHARE) && _().satisfies(null === y.Z || void 0 === y.Z ? void 0 : y.Z.os.release, ed.I9);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = tp().useSystemScreensharePicker,
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
        return tp().openH264;
    }
    getEverSpeakingWhileMuted() {
        return eq;
    }
    getSpeakingWhileMuted() {
        return eQ;
    }
    supportsScreenSoundshare() {
        return (0, Q.isMac)() ? eP.supports(ep.AN.SOUNDSHARE) && _().satisfies(null === y.Z || void 0 === y.Z ? void 0 : y.Z.os.release, ed.yG) && tS() : (0, Q.isWindows)() ? eP.supports(ep.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, Q.isLinux)() && eP.supports(ep.AN.SCREEN_SOUNDSHARE);
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
em(n3, 'displayName', 'MediaEngineStore');
let n4 = (i = new n3(v.Z, {
    VOICE_CHANNEL_SELECT: nM,
    VOICE_STATE_UPDATES: tY,
    CONNECTION_OPEN: tF,
    CONNECTION_CLOSED: tj,
    RTC_CONNECTION_STATE: tH,
    AUDIO_SET_TEMPORARY_SELF_MUTE: tW,
    AUDIO_TOGGLE_SELF_MUTE: tK,
    AUDIO_SET_SELF_MUTE: tz,
    AUDIO_TOGGLE_SELF_DEAF: tQ,
    AUDIO_TOGGLE_LOCAL_MUTE: tX,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: tJ,
    AUDIO_SET_LOCAL_VOLUME: t1,
    AUDIO_SET_LOCAL_PAN: t2,
    AUDIO_SET_MODE: t3,
    AUDIO_SET_INPUT_VOLUME: t4,
    AUDIO_SET_OUTPUT_VOLUME: t6,
    AUDIO_SET_INPUT_DEVICE: t5,
    AUDIO_SET_OUTPUT_DEVICE: t7,
    AUDIO_SET_ECHO_CANCELLATION: ni,
    AUDIO_SET_SIDECHAIN_COMPRESSION: nr,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: na,
    AUDIO_SET_LOOPBACK: no,
    AUDIO_SET_NOISE_SUPPRESSION: nu,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nc,
    AUDIO_SET_NOISE_CANCELLATION: nd,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: np,
    AUDIO_SET_DEBUG_LOGGING: nh,
    MEDIA_ENGINE_SET_VIDEO_HOOK: nm,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: ng,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: nE,
    AUDIO_SET_ATTENUATION: nv,
    AUDIO_SET_QOS: ny,
    MEDIA_ENGINE_DEVICES: ne,
    AUDIO_VOLUME_CHANGE: nt,
    AUDIO_RESET: nI,
    AUDIO_INPUT_DETECTED: nT,
    AUDIO_SET_SUBSYSTEM: nx,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: nB,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: nZ,
    MEDIA_ENGINE_PERMISSION: nG,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: nj,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: t8,
    MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nf,
    MEDIA_ENGINE_INTERACTION_REQUIRED: t9,
    USER_SETTINGS_MODAL_INIT: nH,
    USER_SETTINGS_MODAL_SET_SECTION: nH,
    CERTIFIED_DEVICES_SET: nY,
    RPC_APP_CONNECTED: nk,
    RPC_APP_DISCONNECTED: nU,
    OVERLAY_INITIALIZE: tV,
    MEDIA_ENGINE_SET_OPEN_H264: nW,
    MEDIA_ENGINE_SET_HARDWARE_ENCODING: n_,
    APP_STATE_UPDATE: nz,
    SET_CHANNEL_BITRATE: nq,
    SET_VAD_PERMISSION: nb,
    SET_NATIVE_PERMISSION: nS,
    SET_CHANNEL_VIDEO_QUALITY_MODE: nJ,
    MEDIA_ENGINE_SET_AEC_DUMP: nK,
    CHANNEL_DELETE: nQ,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: nX,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: n$,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: n0,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: n1,
    USER_SETTINGS_PROTO_UPDATE: tq,
    CLIPS_INIT: nF,
    CLIPS_SETTINGS_UPDATE: nV,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: n2,
    VOICE_FILTER_REQUEST_SWITCH: nD,
    VOICE_FILTER_LOOPBACK_TOGGLE: nO,
    VOICE_FILTER_APPLIED: nL
}));
