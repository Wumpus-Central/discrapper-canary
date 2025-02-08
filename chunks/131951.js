let i, r, a, s;
n.d(t, { Z: () => n5 }), n(47120), n(724458), n(773603), n(653041), n(337869);
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
    W = n(875527),
    K = n(358820),
    z = n(626135),
    q = n(12647),
    Q = n(70956),
    X = n(358085),
    J = n(747268),
    $ = n(960048),
    ee = n(998502),
    et = n(13140),
    en = n(314897),
    ei = n(967368),
    er = n(463395),
    ea = n(592125),
    es = n(858340),
    eo = n(19780),
    el = n(704806),
    eu = n(594174),
    ec = n(631768),
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
let eE = new A.Z('MediaEngineStore'),
    ev = 'MediaEngineStore',
    ey = 4,
    eI = 1,
    eb = 1,
    eT = 1,
    eS = 1,
    eA = 2,
    eN = {
        left: 1,
        right: 1
    },
    eC = 500,
    eR = 5 * Q.Z.Millis.SECOND,
    eO = -60,
    eD = 100,
    ex = '>=21.0.0',
    eL = 2 * Q.Z.Millis.SECOND;
function eP() {
    return {
        mode: ed.pM4.VOICE_ACTIVITY,
        modeOptions: {
            threshold: eO,
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
        videoHook: ew.supports(eh.AN.VIDEO_HOOK),
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
let ew = (0, m.Mt)((0, m.jj)());
eE.enableNativeLogger(!0);
let eM = {},
    ek = new Set([eh.Yn.DEFAULT]),
    eU = ew.supports(eh.AN.AUTO_ENABLE),
    eG = !1,
    eB = eh.Yn.STREAM,
    eZ = { [eh.w5]: tx('No Input Devices') },
    eF = { [eh.w5]: tx('No Output Devices') },
    eV = { [eh.w5]: tx('No Video Devices') },
    ej = !1,
    eH = !1,
    eY = !1,
    eW = !1,
    eK = !1,
    ez = eh.Av,
    eq = !1,
    eQ = !1,
    eX = !1,
    eJ = new E.V7(),
    e$ = !1,
    e0 = !1,
    e1 = null,
    e2 = !1,
    e3 = !1,
    e4 = !1,
    e6 = !1,
    e5 = !1,
    e7 = 'uninitialized',
    e8 = null,
    e9 = null,
    te = !1,
    tt = !1,
    tn = !1;
V.Z.hasPermission(e_.Eu.AUDIO, { showAuthorizationError: !1 }), V.Z.hasPermission(e_.Eu.CAMERA, { showAuthorizationError: !1 });
let ti = !1,
    tr = new Set(),
    ta = ti,
    ts = !1,
    to = {},
    tl = null,
    tu = !0,
    tc = {},
    td = 5 * Q.Z.Millis.SECOND;
function tf() {
    var e, t;
    return null !== (t = null === (e = eu.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t ? 'always' : J.Z === p.R.CANARY ? 'permittedDevicesOnly' : 'never';
}
function t_() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT,
        t = eM[e];
    return null == t && ((t = eP()), (eM[e] = t)), t;
}
function tp(e) {
    let t = t_(e.context);
    e.setInputMode(t.mode, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: t.modeOptions.autoThreshold,
        vadUseKrisp: t.modeOptions.vadUseKrisp && nS(),
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        pttReleaseDelay: t.modeOptions.delay
    });
}
function th(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Qx;
    return d().clamp(e, 0, t);
}
function tm(e) {
    let t = t_(e.context),
        n = !eU || t.mute || t.deaf;
    e.context === eh.Yn.DEFAULT ? (n = n || ej || eH || eY || !V.Z.didHavePermission(e_.Eu.AUDIO)) : e.context === eh.Yn.STREAM && (n = !0), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eh.Yn.DEFAULT && b.Z.updateNativeMute();
}
function tg(e) {
    e !== eB && (null != a && ew.setGoLiveSource(null, eB), (eB = e));
}
function tE() {
    var e, t, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eK,
        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        o = a;
    if (((null == o ? void 0 : o.desktopSource) != null && o.desktopSource.id !== (null == s ? void 0 : null === (e = s.desktopSource) || void 0 === e ? void 0 : e.id) && (null != o.desktopSource.soundshareId && (0, X.isWindows)() && I.pn(o.desktopSource.soundshareId), ew.setGoLiveSource(null, eB)), (null == o ? void 0 : o.cameraSource) != null && (o.cameraSource.videoDeviceGuid !== (null == s ? void 0 : null === (t = s.cameraSource) || void 0 === t ? void 0 : t.videoDeviceGuid) || o.cameraSource.audioDeviceGuid !== (null == s ? void 0 : null === (n = s.cameraSource) || void 0 === n ? void 0 : n.audioDeviceGuid)) && ew.setGoLiveSource(null, eB), (eK || r) && ((ez = (eK = r) ? tP(eV, t_().videoDeviceId) : eh.Av), ew.setVideoInputDevice(ez)), (a = s), null != s)) {
        let e = {
            resolution: s.quality.resolution,
            frameRate: s.quality.frameRate
        };
        if (null != s.desktopSource) {
            let t = tf(),
                n = t_().videoHook;
            ew.setGoLiveSource(
                {
                    desktopDescription: {
                        id: s.desktopSource.id,
                        soundshareId: s.desktopSource.soundshareId,
                        useVideoHook: n,
                        useGraphicsCapture: tb(),
                        useLoopback: i.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: tT(),
                        videoHookStaleFrameTimeoutMs: eC,
                        graphicsCaptureStaleFrameTimeoutMs: eR,
                        hdrCaptureMode: t
                    },
                    quality: e
                },
                eB
            );
        }
        null != s.cameraSource &&
            ew.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: s.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: s.cameraSource.audioDeviceGuid
                    },
                    quality: e
                },
                eB
            );
    }
}
function tv(e, t, n, i) {
    var r;
    let a = null !== (r = null == e ? void 0 : e.soundshareSession) && void 0 !== r ? r : '';
    null == tc[a] && (tc[a] = new Set());
    let s = null != t && !tc[a].has(t);
    s && tc[a].add(t),
        (null == t || s) &&
            z.default.track(ed.rMx.SOUNDSHARE_FAILED, {
                soundshare_failure_code: t,
                soundshare_failure_reason: n,
                soundshare_failure_will_retry: i,
                ...(0, D.Z)(e)
            });
}
function ty(e) {
    let t = t_(),
        n = t.inputDeviceId;
    if ((e.setEchoCancellation(er.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(er.Z.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(er.Z.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), e.setVoiceFiltersEnabled(null !== e8), (0, X.isWeb)())) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function tI() {
    ew.on(m.aB.Connection, (e) => {
        var t, n;
        tp(e), tm(e), ty(e);
        let r = t_();
        e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers), e.setQoS(r.qos), e.setExperimentalEncoders(r.experimentalEncoders), e.setHardwareH264(null === (t = r.hardwareEncoding) || void 0 === t || t), e.setSoftwareH264(null === (n = r.openH264) || void 0 === n || n);
        let s = eo.Z.getGuildId(),
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
        o && e.setExperimentFlag(eh.V8.MUTE_BEFORE_PROCESSING, !0), l && e.setExperimentFlag(eh.V8.PTT_BEFORE_PROCESSING, !0), u && e.setExperimentFlag(eh.V8.SKIP_ENCODE, !0);
        let c = !1,
            d = !0;
        if ((e.setExperimentFlag(eh.V8.RESET_DECODER_ON_ERRORS, !0), c && e.setExperimentFlag(eh.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0), d && e.setExperimentFlag(eh.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0), e.context === eh.Yn.STREAM)) {
            let { simulcastEnabled: t, lqStreamBitrate: n } = M.Z.getConfig();
            e.configureGoLiveSimulcast(t, n);
        }
        (0, X.isWindows)() ? ((null == tl ? void 0 : tl.startsWith('NVIDIA')) ? e.setExperimentFlag(eh.V8.SIGNAL_AV1, !0) : (null == tl ? void 0 : tl.startsWith('AMD')) && x.Z.getCurrentConfig({ location: 'setupMediaEngine' }, { autoTrackExposure: !0 }).signalAV1Support ? e.setExperimentFlag(eh.V8.SIGNAL_AV1, !0) : e.setExperimentFlag(eh.V8.SIGNAL_AV1_DECODE, !0)) : ((0, X.isMac)() || (0, X.isLinux)()) && e.setExperimentFlag(eh.V8.SIGNAL_AV1_DECODE, !0), (0, X.isWindows)() && e.setExperimentFlag(eh.V8.SIGNAL_AV1_HARDWARE_DECODE, !0), ew.setHasFullbandPerformance((0, N.Z)());
        let f = L.s.getCurrentConfig({ location: 'setupMediaEngine' }, { autoTrackExposure: !0 }).enabled;
        if ((e.setRemoteAudioHistory(f ? 1000 : 0), (0, S.Z)(i))) {
            let t = T.Z.getSettings();
            e.setExperimentFlag(eh.V8.STREAMER_CLIP, t.clipsEnabled);
            let { enableViewerClipping: n } = Z.Z.getCurrentConfig({ location: 'f627ab_15' }, { autoTrackExposure: !1 });
            e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eh.ux);
        }
        for (let t of ((r = t_(e.context)), e.setPostponeDecodeLevel(eD), Object.keys(r.localMutes))) t !== en.default.getId() && e.setLocalMute(t, r.localMutes[t]);
        for (let t of Object.keys(r.localVolumes)) t !== en.default.getId() && e.setLocalVolume(t, r.localVolumes[t]);
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
            e.context === eh.Yn.DEFAULT &&
                ((eQ = !1),
                (eX = !1),
                e.on(m.Sh.SpeakingWhileMuted, () => {
                    (eQ = !0),
                        (eX = !0),
                        i.emitChange(),
                        eJ.stop(),
                        eJ.start(eL, () => {
                            (eX = !1), i.emitChange();
                        });
                })),
            e.on(m.Sh.DesktopSourceEnd, () => {
                v.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                    settings: { context: e.context }
                });
            }),
            e.on(m.Sh.SoundshareAttached, () => {
                (null == a ? void 0 : a.desktopSource) != null && z.default.track(ed.rMx.SOUNDSHARE_ATTACHED, (0, D.Z)(null == a ? void 0 : a.desktopSource));
            }),
            e.on(m.Sh.SoundshareFailed, (e) => {
                let { failureCode: t, failureReason: n, willRetry: i } = e;
                tv(null == a ? void 0 : a.desktopSource, t, n, i);
            }),
            e.on(m.Sh.SoundshareSpeaking, () => {
                (null == a ? void 0 : a.desktopSource) != null && (z.default.track(ed.rMx.SOUNDSHARE_TRANSMITTING, (0, D.Z)(null == a ? void 0 : a.desktopSource)), null != es.Z.getHookError(ed.K3D.SOUND) && v.Z.wait(() => v.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
            });
        let _ = new E.V7();
        e.on(m.Sh.SoundshareTrace, (e) => {
            switch (e.type) {
                case 'soundshare_attach_requested':
                    _.start(td, () => {
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
                        (tv(null == a ? void 0 : a.desktopSource, n, t, i),
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
                    z.default.track(ed.rMx.VIDEOHOOK_INITIALIZED, {
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
                eE.warn('noisecancellererror event: '.concat(e)),
                    (te = !0),
                    z.default.track(ed.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
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
                eE.warn('voiceactivitydetectorerror event: '.concat(e)),
                    z.default.track(ed.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    v.Z.dispatch({
                        type: 'AUDIO_SET_MODE',
                        context: eh.Yn.DEFAULT,
                        mode: ed.pM4.VOICE_ACTIVITY,
                        options: {
                            ...t_(eh.Yn.DEFAULT).modeOptions,
                            vadUseKrisp: !1
                        }
                    }),
                    v.Z.dispatch({
                        type: 'MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR',
                        code: e
                    });
            }),
            e.on(m.Sh.SdpError, (e, t, n, i) => {
                J.Z === p.R.CANARY &&
                    z.default.track(ed.rMx.SDP_ERROR, {
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
            e.setBitRate(ei.Z.bitrate),
            e.applyVideoQualityMode(ec.Z.mode);
    }),
        ew.on(m.aB.DeviceChange, (e, t, n) => {
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_DEVICES',
                inputDevices: e,
                outputDevices: t,
                videoDevices: n
            });
        }),
        ew.on(m.aB.VolumeChange, (e, t) => {
            v.Z.dispatch({
                type: 'AUDIO_VOLUME_CHANGE',
                inputVolume: e,
                outputVolume: t
            });
        }),
        ew.on(m.aB.DesktopSourceEnd, () => {
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                settings: null
            });
        }),
        ew.on(m.aB.AudioPermission, (e) => {
            (tn = !0),
                v.Z.dispatch({
                    type: 'MEDIA_ENGINE_PERMISSION',
                    kind: 'audio',
                    granted: e
                });
        }),
        ew.on(m.aB.VideoPermission, (e) => {
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_PERMISSION',
                kind: 'video',
                granted: e
            });
        }),
        ew.on(m.aB.WatchdogTimeout, async () => {
            let e;
            try {
                await q.Z.submitLiveCrashReport({ message: { message: 'Voice Watchdog Timeout' } });
            } catch (t) {
                'number' == typeof t.status && (e = t.status);
            }
            eE.warn('Watchdog timeout, report submission status: '.concat(null != e ? e : 200)), z.default.track(ed.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        ew.on(m.aB.VideoInputInitialized, (e) => {
            z.default.track(ed.rMx.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * Q.Z.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: eo.Z.getMediaSessionId(),
                rtc_connection_id: eo.Z.getRTCConnectionId()
            });
        }),
        ew.on(m.aB.AudioInputInitialized, (e) => {
            z.default.track(ed.rMx.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * Q.Z.Millis.SECOND),
                rtc_connection_id: eo.Z.getRTCConnectionId()
            });
        }),
        ew.on(m.aB.ClipsRecordingRestartNeeded, () => {
            v.Z.dispatch({ type: 'CLIPS_RESTART' });
        }),
        ew.on(m.aB.ClipsInitFailure, (e, t) => {
            v.Z.wait(() => {
                v.Z.dispatch({
                    type: 'CLIPS_INIT_FAILURE',
                    errMsg: e,
                    applicationName: t
                });
            });
        }),
        ew.on(m.aB.ClipsRecordingEnded, (e, t) => {
            var n, i;
            (null == s ? void 0 : null === (n = s.desktopSource) || void 0 === n ? void 0 : n.id) === e && (null != t && (null == a ? void 0 : null === (i = a.desktopSource) || void 0 === i ? void 0 : i.soundshareId) !== t && I.pn(t), (s = null));
        }),
        ew.on(m.aB.NativeScreenSharePickerUpdate, (e) => {
            k.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerUpdate' }),
                v.Z.dispatch({
                    type: 'NATIVE_SCREEN_SHARE_PICKER_UPDATE',
                    existing: e
                });
        }),
        ew.on(m.aB.NativeScreenSharePickerCancel, (e) => {
            k.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerCancel' }),
                v.Z.dispatch({
                    type: 'NATIVE_SCREEN_SHARE_PICKER_CANCEL',
                    existing: e
                });
        }),
        ew.on(m.aB.NativeScreenSharePickerError, (e) => {
            k.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerError' }),
                v.Z.dispatch({
                    type: 'NATIVE_SCREEN_SHARE_PICKER_ERROR',
                    error: e
                });
        }),
        ew.on(m.aB.AudioDeviceModuleError, (e, t, n) => {
            z.default.track(ed.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                audio_device_module: e,
                code: t,
                device_name: n
            });
        }),
        ew.setOnVideoContainerResized((e, t, n) => {
            v.Z.wait(() =>
                v.Z.dispatch({
                    type: 'VIDEO_SIZE_UPDATE',
                    streamId: e,
                    width: t,
                    height: n
                })
            );
        }),
        tA.reset(),
        (0, el.q)().then((e) => {
            null != e && (tl = e.gpu_brand);
        });
}
function tb() {
    return (0, X.isWindows)() && _().satisfies(null === y.Z || void 0 === y.Z ? void 0 : y.Z.os.release, ef.nz);
}
function tT() {
    return (0, X.isMac)() && ew.supports(eh.AN.SCREEN_CAPTURE_KIT) && _().satisfies(null === y.Z || void 0 === y.Z ? void 0 : y.Z.os.release, ef.C7);
}
function tS() {
    return (0, X.isWindows)() && ew.supports(eh.AN.AUTOMATIC_AUDIO_SUBSYSTEM) && ew.supports(eh.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH);
}
let tA = new (class {
    start() {
        this.started || ((this.started = !0), ew.on(m.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            ew.removeListener(m.aB.Silence, this.handleSilence),
            v.Z.dispatch({
                type: 'AUDIO_INPUT_DETECTED',
                inputDetected: null
            }));
    }
    update() {
        let e = t_();
        !e2 && eo.Z.getState() === ed.hes.RTC_CONNECTED && e.mode === ed.pM4.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop();
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
                                    e && (e3 = !0));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout
                    ));
            });
    }
})();
function tN() {
    var e;
    let t = g.K.get('audio');
    null != t && (g.K.set(ev, { [eh.Yn.DEFAULT]: t }), g.K.remove('audio')),
        (eM = null !== (e = g.K.get(ev)) && void 0 !== e ? e : {}),
        d().each(eM, (e) => {
            if ((d().defaultsDeep(e, eP()), null != e.modeOptions && 'string' == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, et.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== ey && ((e.vadUseKrispSettingVersion = ey), (e.modeOptions.vadUseKrisp = !0)), e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)), !e.vadThrehsoldMigrated)) {
                var t;
                (e.vadThrehsoldMigrated = !0), (null === (t = e.modeOptions) || void 0 === t ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = eO);
            }
            (0, X.isWeb)() ? e.ncUseKrispjsSettingVersion !== eb && ((e.ncUseKrispjsSettingVersion = eb), (e.noiseSuppression = !1), (e.noiseCancellation = !0)) : e.ncUseKrispSettingVersion !== eI && ((e.ncUseKrispSettingVersion = eI), (e.noiseSuppression = !1), (e.noiseCancellation = !0)), e.hardwareEnabledVersion !== eT && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = eT)), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
        }),
        tO();
}
function tC(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = t_(t);
    return Object.assign(i, e), !__OVERLAY__ && n && g.K.set(ev, eM), i;
}
function tR() {
    g.K.remove(ev), location.reload();
}
function tO() {
    var e, t, n;
    let i = t_();
    ew.setAudioInputDevice(i.inputDeviceId), ew.setAudioOutputDevice(i.outputDeviceId), tE(), ew.setInputVolume(i.inputVolume), ew.setOutputVolume(i.outputVolume), ew.setH264Enabled(null === (e = i.hardwareEncoding) || void 0 === e || e || i.openH264), ew.setAv1Enabled(null === (t = i.hardwareEncoding) || void 0 === t || t), ew.setH265Enabled(null === (n = i.hardwareEncoding) || void 0 === n || n), ew.setAecDump(i.aecDumpEnabled), ew.setSidechainCompression(i.sidechainCompression), ew.setSidechainCompressionStrength(i.sidechainCompressionStrength);
}
function tD() {
    eU ||
        ew.enable().then(() =>
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
                enabled: !0,
                unmute: !1
            })
        );
}
function tx(e) {
    return {
        id: eh.w5,
        index: 0,
        name: e,
        disabled: !0
    };
}
function tL(e, t) {
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
function tP(e, t) {
    var n;
    let i = null !== (n = e[t]) && void 0 !== n ? n : d()(e).values().first();
    return null != i ? i.id : t;
}
function tw(e) {
    let t = eZ;
    if (((eZ = tL(e, em.intl.string(em.t['/QIjDA']))), !d().isEqual(eZ, t))) {
        let e = t_(),
            t = tP(eZ, e.inputDeviceId);
        ew.setAudioInputDevice(t);
    }
}
function tM(e) {
    let t = eF;
    if (((eF = tL(e, em.intl.string(em.t.xlUg0t))), !d().isEqual(eF, t))) {
        let e = t_(),
            t = tP(eF, e.outputDeviceId);
        ew.setAudioOutputDevice(t);
    }
}
function tk(e) {
    e0 = e.length > 0;
    let t = eV;
    if (((eV = tL(e, em.intl.string(em.t.WKWARU))), eK && !d().isEqual(eV, t))) {
        var n;
        let e = void 0 !== eV[ez],
            i = ez === eh.w5 && (null === (n = t[eh.w5]) || void 0 === n ? void 0 : n.disabled);
        tE(e || i);
    }
}
function tU() {
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
        let r = e === ep.u0.USER ? eh.Yn.DEFAULT : eh.Yn.STREAM,
            a = r === eh.Yn.STREAM ? eh.Yh : eh.Qx,
            s = null !== (t = i[e]) && void 0 !== t ? t : {},
            { localMutes: o, localVolumes: l } = t_(r);
        for (let [e, t] of Object.entries(s))
            null == (0, j.Ky)(r, e) &&
                (t.muted ? (o[e] = !0) : delete o[e],
                t.volume !== a ? (l[e] = t.volume) : delete l[e],
                ew.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, r));
        if (n)
            for (let e of new Set([...Object.keys(o), ...Object.keys(l)]))
                null == s[e] &&
                    (delete o[e],
                    delete l[e],
                    ew.eachConnection((t) => {
                        t.setLocalVolume(e, a), t.setLocalMute(e, !1);
                    }, r));
        tC(
            {
                localMutes: o,
                localVolumes: l
            },
            r
        );
    }
}
function tG(e) {
    if (null == i)
        return (
            eE.info('Error: trying to get soundshare id before MediaEngineStore is instantiated.'),
            {
                soundshareId: null,
                soundshareSession: ''
            }
        );
    {
        let t = i.getExperimentalSoundshare() ? e : q.Z.getAudioPid(e),
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
function tB(e, t) {
    (0, X.isWindows)() &&
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
function tZ(e) {
    (r = e.sessionId),
        (ej = !1),
        (eW = !1),
        (0, X.isWeb)() ||
            B.Z.subscribe({ location: 'handleConnectionOpen' }, (e) => {
                let t = t_();
                !e.sidechainAvailable && t.sidechainCompression ? (tC({ sidechainCompressionSettingVersion: 0 }), na(!1)) : e.sidechainAvailable && t.sidechainCompressionSettingVersion < eS && (tC({ sidechainCompressionSettingVersion: eS }), na(e.sidechainEnabled));
            });
    let t = t_();
    tS() && (t.automaticAudioSubsystem && nk(), t.audioSubsystemSettingVersion < eA && (tC({ audioSubsystemSettingVersion: eA }), t.automaticAudioSubsystem || ew.getAudioSubsystem() === eh.iA.LEGACY || nM(eh.iA.AUTOMATIC))), tU();
}
function tF(e) {
    let { mediaEngineState: t } = e;
    (eM = t.settingsByContext), (eZ = t.inputDevices), (eF = t.outputDevices), (to = t.appSupported), (e5 = t.krispModuleLoaded), (eB = t.goLiveContext);
}
function tV() {
    r = null;
}
function tj(e) {
    switch (e.state) {
        case ed.hes.CONNECTING:
            tD();
            break;
        case ed.hes.RTC_CONNECTING:
            (e2 = !1), (e3 = !1);
            break;
        case ed.hes.RTC_CONNECTED:
            tE();
            break;
        case ed.hes.DISCONNECTED:
            tJ(), t$();
    }
    tA.update();
}
function tH(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => (r === t.sessionId ? ((ej = t.mute || t.suppress), (eW = t.deaf), ew.eachConnection(tm), tE(!(null != t.guildId && null != t.channelId && null != e9 && e9 !== t.channelId) && eK), (e9 = t.channelId), !0) : (__OVERLAY__ || t.userId !== en.default.getId() || null != eo.Z.getChannelId() || tE(!1, null), e)), !1);
}
function tY(e) {
    let { mute: t } = e;
    (eH = t), ew.eachConnection(tm);
}
function tW(e) {
    let { context: t, skipMuteUnmuteSoundEffect: n } = e,
        { mute: i, deaf: r } = t_(t);
    if (t === eh.Yn.DEFAULT && (V.Z.requestPermission(e_.Eu.AUDIO), eY)) return !1;
    (i = !r && !i) || (r = !1),
        n && (eq = !0),
        tC(
            {
                mute: i,
                deaf: r
            },
            t
        ),
        ew.eachConnection(tm);
}
function tK(e) {
    let { context: t, mute: n } = e;
    tC({ mute: n }, t), ew.eachConnection(tm);
}
function tz(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: i
    } = e;
    if (t !== ep.yP.PRELOADED_USER_SETTINGS || n || null != i) return !1;
    tU(!0);
}
function tq(e) {
    let { context: t } = e;
    tC({ deaf: !t_(t).deaf }, t), ew.eachConnection(tm);
}
function tQ(e) {
    let { context: t, userId: n } = e;
    if (n === en.default.getId()) return;
    let { localMutes: i } = t_(t);
    i[n] ? delete i[n] : (i[n] = !0), tC({ localMutes: i }, t), ew.eachConnection((e) => e.setLocalMute(n, i[n] || !1), t);
}
function tX(e) {
    var t, n, i, r, a, s, o;
    let { context: l, userId: c, videoToggleState: d, persist: f, isAutomatic: _ } = e;
    u()(!(f && _), 'These are not allowed to both be true.');
    let p = d === ed.ZUi.DISABLED,
        { disabledLocalVideos: h } = t_(l),
        m = null !== (t = h[c]) && void 0 !== t && t,
        g = tr.has(c),
        E = d === ed.ZUi.AUTO_ENABLED || d === ed.ZUi.MANUAL_ENABLED;
    eE.info('disableVideo='.concat(p, ' currentlyDisabled=').concat(m, ' currentlyAutoDisabled=').concat(g, ', isVideoShown=').concat(E)), u()(!(g && !m), 'If you are auto-disabled, then you are also disabled.');
    let v = p !== m,
        y = l === eh.Yn.DEFAULT,
        I = _ && v && y,
        b = f && v && y;
    eE.info('changed='.concat(v, ' isDefaultContext=').concat(y, ' isUpdateCausedByVideoHealthManager=').concat(I, ' isManualToggleByUser=').concat(b));
    let { videoToggleStateMap: T } = t_(l);
    if ((T[c] === ed.ZUi.AUTO_PROBING && d === ed.ZUi.AUTO_ENABLED && (0, F.Z)(c, p ? eh.fC.AUTO_DISABLE : eh.fC.AUTO_ENABLE, E), (T[c] = d), tC({ videoToggleStateMap: T }, l, f), d === ed.ZUi.AUTO_PROBING ? null === (n = eo.Z.getRTCConnection()) || void 0 === n || n.pauseStatsCollectionForUser(c, !0) : null === (i = eo.Z.getRTCConnection()) || void 0 === i || i.pauseStatsCollectionForUser(c, !1), ta || (eE.info('isAutoDisableAllowed='.concat(ta, ' - disabling VideoHealthManager')), null === (a = eo.Z.getRTCConnection()) || void 0 === a || null === (r = a.getVideoHealthManager()) || void 0 === r || r.disable()), I)) {
        if ((!p && !g) || (p && !ta)) return;
        (0, F.Z)(c, p ? eh.fC.AUTO_DISABLE : eh.fC.AUTO_ENABLE, E), p ? tr.add(c) : tr.delete(c);
    } else b && (g && !p ? (eE.info('disallowing auto-disable for this session because of manual override by user'), (ta = !1), null === (o = eo.Z.getRTCConnection()) || void 0 === o || null === (s = o.getVideoHealthManager()) || void 0 === s || s.disable(), (0, F.Z)(c, eh.fC.MANUAL_REENABLE, E)) : (0, F.Z)(c, p ? eh.fC.MANUAL_DISABLE : eh.fC.MANUAL_ENABLE, E));
    y && !p && tr.delete(c),
        p ? (h[c] = !0) : delete h[c],
        tC({ disabledLocalVideos: h }, l, f),
        ew.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(c, null !== (t = h[c]) && void 0 !== t && t);
        }, l);
}
function tJ() {
    if (0 === tr.size) return;
    let e = eh.Yn.DEFAULT,
        { disabledLocalVideos: t } = t_(e);
    tr.forEach((n) => {
        u()(t[n], 'If you are auto-disabled, then you are also disabled.'), delete t[n], ew.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tr.clear(),
        tC({ disabledLocalVideos: t }, e, !1);
}
function t$() {
    let e = eh.Yn.DEFAULT,
        { videoToggleStateMap: t } = t_(e);
    for (let [e, n] of Object.entries(t)) n === ed.ZUi.AUTO_PROBING && delete t[e];
    tC({ videoToggleStateMap: t }, e, !1);
}
function t0(e) {
    let { context: t, userId: n, volume: i } = e;
    if (n === en.default.getId()) return;
    let r = t === eh.Yn.STREAM ? eh.Yh : eh.Qx,
        { localVolumes: a } = t_(t);
    i === r ? delete a[n] : (a[n] = i), tC({ localVolumes: a }, t), ew.eachConnection((e) => e.setLocalVolume(n, i), t);
}
function t1(e) {
    let { context: t, userId: n, left: i, right: r } = e,
        { localPans: a } = t_(t);
    (a[n] = {
        left: i,
        right: r
    }),
        tC({ localPans: a }, t),
        ew.eachConnection((e) => e.setLocalPan(n, i, r), t);
}
function t2(e) {
    let { context: t, mode: n, options: i } = e;
    tC(
        {
            mode: n,
            modeOptions: i
        },
        t
    ),
        ew.eachConnection(tp),
        tA.update();
}
function t3(e) {
    let { volume: t } = e;
    tC({ inputVolume: th(t) }), ew.setInputVolume(t);
}
function t4(e) {
    let { volume: t } = e;
    tC({ outputVolume: t }), ew.setOutputVolume(t);
}
function t6(e) {
    let { id: t } = e;
    tC({ inputDeviceId: (t = tP(eZ, t)) }), ew.setAudioInputDevice(t);
}
function t5(e) {
    let { id: t } = e;
    tC({ outputDeviceId: (t = tP(eF, t)) }), ew.setAudioOutputDevice(t);
}
function t7(e) {
    let { id: t } = e;
    tC({ videoDeviceId: (t = tP(eV, t)) }), tE();
}
function t8(e) {
    return eG !== e.required && ((eG = e.required), e.required || ew.interact(), !0);
}
function t9(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: i } = e;
    tw(t), tM(n), tk(i);
}
function ne(e) {
    let { inputVolume: t, outputVolume: n } = e;
    tC({
        inputVolume: th(t),
        outputVolume: n
    });
}
function nt(e) {
    let t = t_();
    z.default.track(ed.rMx.VOICE_PROCESSING, {
        echo_cancellation: t.echoCancellation,
        noise_cancellation: t.noiseCancellation,
        noise_suppression: t.noiseSuppression,
        automatic_gain_control: t.automaticGainControl,
        location: e
    });
}
function nn(e) {
    let t = tC({ echoCancellation: e.enabled });
    ew.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), no(), nt(e.location);
}
function ni(e) {
    na(e.enabled);
}
function nr(e) {
    let t = tC({ sidechainCompressionStrength: e.strength });
    ew.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function na(e) {
    let t = tC({ sidechainCompression: e });
    ew.setSidechainCompression(t.sidechainCompression);
}
function ns(e) {
    let { enabled: t } = e;
    return (ts = t), no();
}
function no() {
    let e = t_(),
        t = e.inputDeviceId,
        n = er.Z.hasEchoCancellation(t) || e.echoCancellation,
        i = !ts,
        r = er.Z.hasNoiseSuppression(t) || e.noiseSuppression,
        a = er.Z.hasAutomaticGainControl(t) || e.automaticGainControl,
        s = e.noiseCancellation;
    ew.setLoopback(ts, {
        echoCancellation: n,
        echoCancellationPreEcho: i,
        noiseSuppression: r,
        automaticGainControl: a,
        noiseCancellation: s
    });
}
function nl(e) {
    let t = tC({ noiseSuppression: e.enabled });
    ew.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), no(), nt(e.location);
}
function nu(e) {
    let t = tC({ automaticGainControl: e.enabled });
    ew.eachConnection((e) => e.setAutomaticGainControl(t.automaticGainControl)), no(), nt(e.location);
}
function nc(e) {
    let t = tC({ noiseCancellation: e.enabled });
    ew.eachConnection((e) => e.setNoiseCancellation(t.noiseCancellation)), no(), nt(e.location);
}
function nd(e) {
    let t = tC({ experimentalEncoders: e.enabled });
    ew.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
}
function nf(e) {
    var t, n;
    let { enabled: i } = e,
        r = tC({ hardwareEncoding: i });
    ew.eachConnection((e) => {
        var t;
        return e.setHardwareH264(null === (t = r.hardwareEncoding) || void 0 === t || t);
    }),
        ew.setH264Enabled(r.hardwareEncoding || r.openH264),
        ew.setAv1Enabled(null === (t = r.hardwareEncoding) || void 0 === t || t),
        ew.setH265Enabled(null === (n = r.hardwareEncoding) || void 0 === n || n);
}
function n_(e) {
    tC({ silenceWarning: e.enabled }), tA.update();
}
function np(e) {
    ew.setDebugLogging(e.enabled);
}
function nh(e) {
    tC({ videoHook: e.enabled });
}
function nm(e) {
    tC({ experimentalSoundshare2: e.enabled });
}
function ng(e) {
    let { enabled: t } = e;
    tC({ useSystemScreensharePicker: t });
}
function nE(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i } = e,
        r = tC({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: i
        });
    ew.eachConnection((e) => e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers));
}
function nv(e) {
    let { enabled: t } = e;
    tC({ qos: t }), ew.eachConnection((e) => e.setQoS(t));
}
function ny() {
    tR();
}
function nI(e) {
    let { inputDetected: t } = e;
    (e1 = t), !e2 && e1 && ((e2 = !0), tA.update());
}
function nb(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === eY) return !1;
    (eY = n), ew.eachConnection(tm);
}
function nT(e) {
    let { state: t, permissionType: n } = e,
        i = t === e_.PQ.ACCEPTED;
    switch (n) {
        case e_.Eu.AUDIO:
            (tn = !0), ew.eachConnection(tm);
            break;
        case e_.Eu.CAMERA:
            !i && eK && tE(!1);
            break;
        default:
            return !1;
    }
}
function nS() {
    return e5 || !1;
}
async function nA() {
    try {
        await ee.ZP.ensureModule('discord_krisp'), ee.ZP.requireModule('discord_krisp'), (e5 = !0), i.emitChange();
    } catch (t) {
        eE.warn('Failed to load Krisp module: '.concat(t.message)), $.Z.captureException(t);
        let e = eh.H3.INITIALIZED;
        if (t.message.includes(': ')) {
            let n = parseInt(t.message.substring(t.message.indexOf(': ') + 1));
            e = isNaN(n) || 0 === n ? eh.H3.INITIALIZED : n;
        }
        z.default.track(ed.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), tC({ noiseCancellation: !1 });
    } finally {
        e6 = !1;
    }
}
function nN() {
    return (0, X.isWindows)() || (0, X.isLinux)() || ((0, X.isMac)() && _().satisfies(null === y.Z || void 0 === y.Z ? void 0 : y.Z.os.release, ex));
}
function nC() {
    !nN() || __OVERLAY__ || e6 || e5 ? ((0, X.isWeb)() && ew.supports(eh.AN.NOISE_CANCELLATION) ? ((e5 = !0), i.emitChange()) : (0, X.isWeb)() && tC({ noiseCancellation: !1 })) : ((e6 = !0), nA());
}
async function nR() {
    try {
        await ee.ZP.ensureModule('discord_voice_filters');
        let e = ee.ZP.getVoiceFilters();
        await e.setupResources(), (0, K.wV)(), (e7 = 'loaded'), (0, Y.v6)(t_().mostRecentlyRequestedVoiceFilter), i.emitChange();
    } catch (e) {
        eE.warn('Failed to load Voice Filters module: '.concat(e.message)), $.Z.captureException(e), (e7 = 'failed');
    }
}
function nO() {
    return (0, X.isWindows)() || (0, X.isMac)();
}
function nD() {
    'uninitialized' === e7 && (nO() && !__OVERLAY__ ? ((e7 = 'loading'), nR()) : (0, X.isWeb)() && ew.supports(eh.AN.VOICE_FILTERS) ? (e7 = 'loaded') : (0, X.isWeb)());
}
function nx(e) {
    let { enabled: t } = e;
    tC({ voiceFilterPlaybackEnabled: t });
}
function nL(e) {
    let { newVoiceFilterId: t } = e;
    tC({ mostRecentlyRequestedVoiceFilter: t });
    let n = null != t;
    ew.eachConnection((e) => e.setVoiceFiltersEnabled(n));
}
function nP(e) {
    let { voiceFilterId: t } = e;
    e8 = t;
}
function nw(e) {
    nM(e.subsystem);
}
function nM(e) {
    e === eh.iA.AUTOMATIC ? (tC({ automaticAudioSubsystem: !0 }), nk()) : (tC({ automaticAudioSubsystem: !1 }), ew.setAudioSubsystem(e));
}
function nk() {
    let { enabled: e } = U.I.getCurrentConfig({ location: 'interpretAutomaticAudioSubsystem' });
    e ? ew.queueAudioSubsystem(eh.iA.EXPERIMENTAL) : ew.queueAudioSubsystem(eh.iA.STANDARD);
}
function nU(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: i, video: r } = e;
    if ((i !== n && tE(r, null), null != t || null == n)) {
        e4 = !1;
        return;
    }
    if (e4) return;
    e4 = !0;
    let a = t_();
    (a.mute || a.deaf) &&
        (tC({
            deaf: !1,
            mute: !1
        }),
        ew.eachConnection(tm));
}
function nG(e) {
    let { application: t } = e;
    ek.add(t.id);
}
function nB(e) {
    let { application: t } = e;
    ek.delete(t.id);
}
function nZ(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case 'audio':
                (eU = !1), ew.eachConnection(tm);
                break;
            case 'video':
                tE(!1);
        }
}
function nF(e) {
    (eU = e.enabled),
        e.unmute &&
            tC({
                mute: !1,
                deaf: !1
            }),
        ew.eachConnection(tm);
}
function nV(e) {
    let { enabled: t } = e;
    V.Z.requestPermission(e_.Eu.CAMERA), tE(t);
}
function nj(e) {
    let { sourceId: t, applicationName: n, quality: r } = e,
        a = T.Z.isDecoupledGameClippingEnabled(),
        o = T.Z.getSettings().decoupledClipsEnabled;
    if (!a || !o || null == y.Z) return;
    let l = null,
        u = null,
        c = q.Z.getPidFromDesktopSource(t);
    ({ soundshareId: l, soundshareSession: u } = tG(c));
    let d = {
        desktopSource: {
            id: t,
            sourcePid: c,
            soundshareId: l,
            soundshareSession: u
        },
        quality: r
    };
    null != s && s.desktopSource.id !== d.desktopSource.id && (ew.setClipsSource(null), (0, X.isWindows)() && null != s.desktopSource.soundshareId && I.pn(s.desktopSource.soundshareId)), null != l && tB(l, u), (s = d);
    let f = tf(),
        _ = t_().videoHook;
    ew.setClipsSource({
        desktopDescription: {
            id: s.desktopSource.id,
            soundshareId: s.desktopSource.soundshareId,
            useVideoHook: _,
            useGraphicsCapture: tb(),
            useLoopback: i.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: tT(),
            videoHookStaleFrameTimeoutMs: eC,
            graphicsCaptureStaleFrameTimeoutMs: eR,
            hdrCaptureMode: f
        },
        quality: r,
        applicationName: n
    });
}
function nH(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((s = null), ew.setClipsSource(null));
}
function nY(e) {
    var t, n, i, r;
    let { settings: a } = e;
    if ((null == a ? void 0 : a.desktopSettings) != null) {
        let e = null,
            i = null,
            { sourceId: r, sound: s } = a.desktopSettings,
            o = null !== (t = a.context) && void 0 !== t ? t : eh.Yn.DEFAULT,
            l =
                null !== (n = a.qualityOptions) && void 0 !== n
                    ? n
                    : {
                          resolution: 720,
                          frameRate: 30
                      },
            u = !1 === s ? null : q.Z.getPidFromDesktopSource(r);
        X.isPlatformEmbedded && !0 === s && (({ soundshareId: e, soundshareSession: i } = tG(u)), null != e && tB(e, i)),
            tg(o),
            tE(o === eh.Yn.STREAM && eK, {
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
        let e = null !== (i = a.context) && void 0 !== i ? i : eh.Yn.DEFAULT,
            { videoDeviceGuid: t, audioDeviceGuid: n } = a.cameraSettings,
            s = e === eh.Yn.STREAM && eK,
            o =
                null !== (r = a.qualityOptions) && void 0 !== r
                    ? r
                    : {
                          resolution: 720,
                          frameRate: 30
                      };
        tE(s, {
            cameraSource: {
                videoDeviceGuid: t,
                audioDeviceGuid: n
            },
            quality: {
                resolution: o.resolution,
                frameRate: o.frameRate
            }
        });
    } else tE(eK, null);
}
function nW(e) {
    let { section: t } = e;
    return t === ed.oAB.VOICE && tD(), !1;
}
function nK() {
    return ew.eachConnection(ty), !1;
}
function nz(e) {
    let { enabled: t } = e,
        n = tC({ openH264: t });
    ew.setH264Enabled(n.hardwareEncoding || n.openH264),
        ew.eachConnection((e) => {
            var t;
            return e.setSoftwareH264(null === (t = n.openH264) || void 0 === t || t);
        });
}
function nq(e) {
    let { enabled: t } = e,
        n = tC({ aecDumpEnabled: t });
    ew.setAecDump(n.aecDumpEnabled);
}
function nQ(e) {
    let { state: t } = e,
        n = R.Z.isEnabled();
    if (t === ed.$7l.BACKGROUND && eK && !n) (e$ = !0), tE(!1);
    else {
        if (t !== ed.$7l.ACTIVE || !e$) return !1;
        (e$ = !1), tE(!0);
    }
    return !0;
}
function nX(e) {
    ew.eachConnection((t) => t.setBitRate(e.bitrate));
}
function nJ() {
    if ((!eK && null == a) || null != eo.Z.getRTCConnectionId()) return !1;
    tE(!1, null);
}
function n$() {
    return !!te && ((te = !1), !0);
}
function n0(e) {
    ew.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function n1(e) {
    let { settings: t } = e;
    ew.applyMediaFilterSettings(t).finally(() => {
        (tt = !1), i.emitChange();
    });
}
function n2() {
    tt = !0;
}
function n3() {
    tt = !1;
}
function n4(e) {
    tu = e.enabled;
}
class n6 extends (o = h.ZP.Store) {
    initialize() {
        tI(),
            tN(),
            nC(),
            W.c.getCurrentConfig({ location: 'MediaEngineStore' }, { autoTrackExposure: !1 }).enabled && null !== t_().mostRecentlyRequestedVoiceFilter && nD(),
            t$(),
            (to = {
                [eh.AN.VIDEO]: ew.supports(eh.AN.VIDEO),
                [eh.AN.DESKTOP_CAPTURE]: ew.supports(eh.AN.DESKTOP_CAPTURE),
                [eh.AN.HYBRID_VIDEO]: ew.supports(eh.AN.HYBRID_VIDEO)
            }),
            this.waitFor(en.default, er.Z, ea.Z, es.Z, eo.Z, O.ZP, V.Z.storage, H.Z, C.Z, T.Z);
    }
    supports(e) {
        return ew.supports(e);
    }
    supportsInApp(e) {
        return to[e] || ew.supports(e);
    }
    isSupported() {
        return ew.supported();
    }
    isExperimentalEncodersSupported() {
        return ew.supports(eh.AN.EXPERIMENTAL_ENCODERS);
    }
    isNoiseSuppressionSupported() {
        return ew.supports(eh.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return nS();
    }
    isNoiseCancellationError() {
        return te;
    }
    isAutomaticGainControlSupported() {
        return ew.supports(eh.AN.AUTOMATIC_GAIN_CONTROL);
    }
    isAdvancedVoiceActivitySupported() {
        return nS();
    }
    isAecDumpSupported() {
        return ew.supports(eh.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return ew.supports(eh.AN.VIDEO) && ew.supports(eh.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        let t = (null === (e = ea.Z.getChannel(e9)) || void 0 === e ? void 0 : e.type) === ed.d4z.GUILD_STAGE_VOICE,
            n = i.getHardwareEncoding();
        return !t && n && M.Z.simulcastEnabled();
    }
    getAecDump() {
        return t_().aecDumpEnabled;
    }
    getMediaEngine() {
        return ew;
    }
    getVideoComponent() {
        return ew.supports(eh.AN.DIRECT_VIDEO) && ew.setUseDirectVideo(!0), ew.Video;
    }
    getCameraComponent() {
        return ew.supports(eh.AN.DIRECT_VIDEO) && ew.setUseDirectVideo(!0), ew.Camera;
    }
    isEnabled() {
        return eU;
    }
    isMute() {
        return this.isSelfMute() || ej;
    }
    isDeaf() {
        return this.isSelfDeaf() || eW;
    }
    hasContext(e) {
        return null != eM[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
        return e === eh.Yn.DEFAULT && eH;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
        return !this.isEnabled() || t_(e).mute || !V.Z.didHavePermission(e_.Eu.AUDIO) || this.isSelfDeaf(e) || (e === eh.Yn.DEFAULT && eY);
    }
    shouldSkipMuteUnmuteSound() {
        return eq;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        eq = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && er.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return tu;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
        return !this.isSupported() || t_(e).deaf;
    }
    isVideoEnabled() {
        return eK && e0;
    }
    isVideoAvailable() {
        return Object.values(eV).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.STREAM;
        return eB === e && null != a;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.STREAM;
        return eB === t && null != a && (null === (e = a.desktopSource) || void 0 === e ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT;
        return e !== en.default.getId() && (t_(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return ew.supports(eh.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT;
        return null !== (t = t_(n).disabledLocalVideos[e]) && void 0 !== t && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT;
        return null !== (t = t_(n).videoToggleStateMap[e]) && void 0 !== t ? t : ed.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT;
        return t === eh.Yn.DEFAULT && tr.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
        return e === eh.Yn.DEFAULT && tr.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tt;
    }
    isNativeAudioPermissionReady() {
        return tn;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return eB;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT,
            n = t_(t).localPans[e];
        return null != n ? n : eN;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT,
            n = t === eh.Yn.STREAM ? eh.Yh : eh.Qx,
            i = t_(t).localVolumes[e];
        return null != i ? i : n;
    }
    getInputVolume() {
        return t_().inputVolume;
    }
    getOutputVolume() {
        return t_().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
        return t_(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
        return t_(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return e8;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return t_().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return t_().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            d().each(eM, (t, n) => {
                let {
                    mode: i,
                    modeOptions: { shortcut: r }
                } = t;
                i === ed.pM4.PUSH_TO_TALK && ek.has(n) && (e[n] = r);
            }),
            e
        );
    }
    getInputDeviceId() {
        return tP(eZ, t_().inputDeviceId);
    }
    getOutputDeviceId() {
        return tP(eF, t_().outputDeviceId);
    }
    getVideoDeviceId() {
        return tP(eV, t_().videoDeviceId);
    }
    getInputDevices() {
        return eZ;
    }
    getOutputDevices() {
        return eF;
    }
    getVideoDevices() {
        return eV;
    }
    getEchoCancellation() {
        let e = t_();
        return er.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return t_().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return t_().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return t_().h265Enabled;
    }
    getLoopback() {
        return ts;
    }
    getNoiseSuppression() {
        let e = t_();
        return er.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = t_();
        return er.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getNoiseCancellation() {
        return t_().noiseCancellation;
    }
    getExperimentalEncoders() {
        return t_().experimentalEncoders;
    }
    getHardwareEncoding() {
        var e;
        return null === (e = t_().hardwareEncoding) || void 0 === e || e;
    }
    getEnableSilenceWarning() {
        return t_().silenceWarning;
    }
    getDebugLogging() {
        return ew.getDebugLogging();
    }
    getQoS() {
        return t_().qos;
    }
    getAttenuation() {
        return t_().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return t_().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return t_().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return tS() && t_().automaticAudioSubsystem ? eh.iA.AUTOMATIC : ew.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return ew.getMLSSigningKey(e, t);
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
        return t_(e);
    }
    getState() {
        return {
            settingsByContext: eM,
            inputDevices: eZ,
            outputDevices: eF,
            appSupported: to,
            krispModuleLoaded: e5,
            voiceFiltersModuleState: e7,
            goLiveSource: a,
            goLiveContext: eB
        };
    }
    getInputDetected() {
        return e1;
    }
    getNoInputDetectedNotice() {
        return e3;
    }
    getPacketDelay() {
        return X.isPlatformEmbedded || this.getMode() !== ed.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        ew.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return eG;
    }
    getVideoHook() {
        return t_().videoHook;
    }
    supportsVideoHook() {
        return ew.supports(eh.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = t_().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e);
    }
    supportsExperimentalSoundshare() {
        return ew.supports(eh.AN.EXPERIMENTAL_SOUNDSHARE) && _().satisfies(null === y.Z || void 0 === y.Z ? void 0 : y.Z.os.release, ef.I9);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = t_().useSystemScreensharePicker,
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
        let e = ew.supports(eh.AN.NATIVE_SCREENSHARE_PICKER);
        return k.Z.getCurrentConfig(
            { location: 'supportsSystemScreensharePicker' },
            {
                disable: !e,
                autoTrackExposure: !1
            }
        ).enableSystemPicker;
    }
    getOpenH264() {
        return t_().openH264;
    }
    getEverSpeakingWhileMuted() {
        return eQ;
    }
    getSpeakingWhileMuted() {
        return eX;
    }
    supportsScreenSoundshare() {
        return (0, X.isMac)() ? ew.supports(eh.AN.SOUNDSHARE) && _().satisfies(null === y.Z || void 0 === y.Z ? void 0 : y.Z.os.release, ef.yG) && tT() : (0, X.isWindows)() ? ew.supports(eh.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, X.isLinux)() && ew.supports(eh.AN.SCREEN_SOUNDSHARE);
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
    getSupportedSecureFramesProtocolVersion(e) {
        var t;
        let n = ew.getSupportedSecureFramesProtocolVersion(),
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
eg(n6, 'displayName', 'MediaEngineStore');
let n5 = (i = new n6(v.Z, {
    VOICE_CHANNEL_SELECT: nU,
    VOICE_STATE_UPDATES: tH,
    CONNECTION_OPEN: tZ,
    CONNECTION_CLOSED: tV,
    RTC_CONNECTION_STATE: tj,
    AUDIO_SET_TEMPORARY_SELF_MUTE: tY,
    AUDIO_TOGGLE_SELF_MUTE: tW,
    AUDIO_SET_SELF_MUTE: tK,
    AUDIO_TOGGLE_SELF_DEAF: tq,
    AUDIO_TOGGLE_LOCAL_MUTE: tQ,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: tX,
    AUDIO_SET_LOCAL_VOLUME: t0,
    AUDIO_SET_LOCAL_PAN: t1,
    AUDIO_SET_MODE: t2,
    AUDIO_SET_INPUT_VOLUME: t3,
    AUDIO_SET_OUTPUT_VOLUME: t4,
    AUDIO_SET_INPUT_DEVICE: t6,
    AUDIO_SET_OUTPUT_DEVICE: t5,
    AUDIO_SET_ECHO_CANCELLATION: nn,
    AUDIO_SET_SIDECHAIN_COMPRESSION: ni,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nr,
    AUDIO_SET_LOOPBACK: ns,
    AUDIO_SET_NOISE_SUPPRESSION: nl,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nu,
    AUDIO_SET_NOISE_CANCELLATION: nc,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: n_,
    AUDIO_SET_DEBUG_LOGGING: np,
    MEDIA_ENGINE_SET_VIDEO_HOOK: nh,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: nm,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: ng,
    AUDIO_SET_ATTENUATION: nE,
    AUDIO_SET_QOS: nv,
    MEDIA_ENGINE_DEVICES: t9,
    AUDIO_VOLUME_CHANGE: ne,
    AUDIO_RESET: ny,
    AUDIO_INPUT_DETECTED: nI,
    AUDIO_SET_SUBSYSTEM: nw,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: nF,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: nV,
    MEDIA_ENGINE_PERMISSION: nZ,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: nY,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: t7,
    MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nd,
    MEDIA_ENGINE_INTERACTION_REQUIRED: t8,
    USER_SETTINGS_MODAL_INIT: nW,
    USER_SETTINGS_MODAL_SET_SECTION: nW,
    CERTIFIED_DEVICES_SET: nK,
    RPC_APP_CONNECTED: nG,
    RPC_APP_DISCONNECTED: nB,
    OVERLAY_INITIALIZE: tF,
    MEDIA_ENGINE_SET_OPEN_H264: nz,
    MEDIA_ENGINE_SET_HARDWARE_ENCODING: nf,
    APP_STATE_UPDATE: nQ,
    SET_CHANNEL_BITRATE: nX,
    SET_VAD_PERMISSION: nb,
    SET_NATIVE_PERMISSION: nT,
    SET_CHANNEL_VIDEO_QUALITY_MODE: n0,
    MEDIA_ENGINE_SET_AEC_DUMP: nq,
    CHANNEL_DELETE: nJ,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: n$,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: n1,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: n2,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: n3,
    USER_SETTINGS_PROTO_UPDATE: tz,
    CLIPS_INIT: nj,
    CLIPS_SETTINGS_UPDATE: nH,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: n4,
    VOICE_FILTER_REQUEST_SWITCH: nL,
    VOICE_FILTER_LOAD_MODULE: nD,
    VOICE_FILTER_LOOPBACK_TOGGLE: nx,
    VOICE_FILTER_APPLIED: nP
}));
