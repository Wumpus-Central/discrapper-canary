let i, a, o, s;
var l,
    u,
    c = r(47120);
var d = r(724458);
var f = r(773603);
var p = r(653041);
r(337869);
var h = r(512722),
    _ = r.n(h),
    m = r(392711),
    g = r.n(m),
    E = r(209739),
    v = r.n(E),
    y = r(404097),
    b = r(442837),
    I = r(46973),
    T = r(433517),
    S = r(846519),
    A = r(570140),
    C = r(579806),
    N = r(887278),
    R = r(547727),
    O = r(435064),
    D = r(779618),
    L = r(710845),
    x = r(535911),
    w = r(353926),
    P = r(646047),
    M = r(594190),
    k = r(502286),
    U = r(12898),
    B = r(294473),
    G = r(706629),
    Z = r(166884),
    F = r(998594),
    V = r(14457),
    j = r(529558),
    H = r(111672),
    Y = r(441167),
    W = r(338336),
    K = r(751571),
    z = r(725380),
    q = r(581883),
    Q = r(626135),
    X = r(12647),
    J = r(70956),
    $ = r(358085),
    ee = r(747268),
    et = r(960048),
    en = r(998502),
    er = r(13140),
    ei = r(314897),
    ea = r(967368),
    eo = r(463395),
    es = r(592125),
    el = r(858340),
    eu = r(19780),
    ec = r(704806),
    ed = r(594174),
    ef = r(631768),
    ep = r(981631),
    eh = r(70722),
    e_ = r(761274),
    em = r(526761),
    eg = r(65154),
    eE = r(388032);
function ev(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let ey = new L.Z('MediaEngineStore');
!(function (e) {
    (e[(e.DETACHED = 0)] = 'DETACHED'), (e[(e.WAITING = 1)] = 'WAITING'), (e[(e.ATTACHED = 2)] = 'ATTACHED'), (e[(e.STARTED = 3)] = 'STARTED'), (e[(e.PLAYING = 4)] = 'PLAYING'), (e[(e.SILENCE = 5)] = 'SILENCE');
})(l || (l = {}));
let eb = 'MediaEngineStore',
    eI = 4,
    eT = 1,
    eS = 1,
    eA = 1,
    eC = 1,
    eN = 2,
    eR = {
        left: 1,
        right: 1
    },
    eO = 500,
    eD = 5 * J.Z.Millis.SECOND,
    eL = -60,
    ex = 100,
    ew = '>=21.0.0',
    eP = 2 * J.Z.Millis.SECOND;
function eM() {
    return {
        mode: ep.pM4.VOICE_ACTIVITY,
        modeOptions: {
            threshold: eL,
            autoThreshold: $.isPlatformEmbedded || __OVERLAY__,
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
        inputVolume: eg.Qx,
        outputVolume: eg.Qx,
        inputDeviceId: eg.w5,
        outputDeviceId: eg.w5,
        videoDeviceId: eg.w5,
        qos: !1,
        qosMigrated: !1,
        videoHook: ek.supports(eg.AN.VIDEO_HOOK),
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
let ek = (0, I.Mt)((0, I.jj)());
ey.enableNativeLogger(!0);
let eU = {},
    eB = new Set([eg.Yn.DEFAULT]),
    eG = ek.supports(eg.AN.AUTO_ENABLE),
    eZ = !1,
    eF = eg.Yn.STREAM,
    eV = { [eg.w5]: tL('No Input Devices') },
    ej = { [eg.w5]: tL('No Output Devices') },
    eH = { [eg.w5]: tL('No Video Devices') },
    eY = !1,
    eW = !1,
    eK = !1,
    ez = !1,
    eq = !1,
    eQ = eg.Av,
    eX = !1,
    eJ = !1,
    e$ = !1,
    e0 = new S.V7(),
    e1 = !1,
    e2 = !1,
    e3 = null,
    e4 = !1,
    e6 = !1,
    e5 = !1,
    e7 = !1,
    e8 = !1,
    e9 = null,
    te = !1,
    tt = !1,
    tn = !1;
K.Z.hasPermission(e_.Eu.AUDIO, { showAuthorizationError: !1 }), K.Z.hasPermission(e_.Eu.CAMERA, { showAuthorizationError: !1 });
let tr = !1,
    ti = new Set(),
    ta = tr,
    to = !1,
    ts = {},
    tl = null,
    tu = !0,
    tc = {},
    td = 5 * J.Z.Millis.SECOND;
function tf() {
    var e, n;
    return null !== (n = null === (e = ed.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== n && n ? 'always' : ee.Z === y.R.CANARY ? 'permittedDevicesOnly' : 'never';
}
function tp() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eg.Yn.DEFAULT,
        n = eU[e];
    return null == n && ((n = eM()), (eU[e] = n)), n;
}
function th(e) {
    let n = tp(e.context);
    e.setInputMode(n.mode, {
        vadThreshold: n.modeOptions.threshold,
        vadAutoThreshold: n.modeOptions.autoThreshold,
        vadUseKrisp: n.modeOptions.vadUseKrisp && nS(),
        vadLeading: n.modeOptions.vadLeading,
        vadTrailing: n.modeOptions.vadTrailing,
        pttReleaseDelay: n.modeOptions.delay
    });
}
function t_(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eg.Qx;
    return g().clamp(e, 0, n);
}
function tm(e) {
    let n = tp(e.context),
        r = !eG || n.mute || n.deaf;
    e.context === eg.Yn.DEFAULT ? (r = r || eY || eW || eK || !K.Z.didHavePermission(e_.Eu.AUDIO)) : e.context === eg.Yn.STREAM && (r = !0), e.setSelfMute(r), e.setSelfDeaf(n.deaf), e.context === eg.Yn.DEFAULT && R.Z.updateNativeMute();
}
function tg(e) {
    if (e !== eF) null != o && ek.setGoLiveSource(null, eF), (eF = e);
}
function tE() {
    var e, n, r;
    let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq,
        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
        l = o;
    if (((null == l ? void 0 : l.desktopSource) != null && l.desktopSource.id !== (null == s ? void 0 : null === (e = s.desktopSource) || void 0 === e ? void 0 : e.id) && (null != l.desktopSource.soundshareId && (0, $.isWindows)() && N.pn(l.desktopSource.soundshareId), ek.setGoLiveSource(null, eF)), (null == l ? void 0 : l.cameraSource) != null && (l.cameraSource.videoDeviceGuid !== (null == s ? void 0 : null === (n = s.cameraSource) || void 0 === n ? void 0 : n.videoDeviceGuid) || l.cameraSource.audioDeviceGuid !== (null == s ? void 0 : null === (r = s.cameraSource) || void 0 === r ? void 0 : r.audioDeviceGuid)) && ek.setGoLiveSource(null, eF), (eq || a) && ((eQ = (eq = a) ? tw(eH, tp().videoDeviceId) : eg.Av), ek.setVideoInputDevice(eQ)), (o = s), null != s)) {
        let e = {
            resolution: s.quality.resolution,
            frameRate: s.quality.frameRate
        };
        if (null != s.desktopSource) {
            let n = tf(),
                r = tp().videoHook;
            ek.setGoLiveSource(
                {
                    desktopDescription: {
                        id: s.desktopSource.id,
                        soundshareId: s.desktopSource.soundshareId,
                        useVideoHook: r,
                        useGraphicsCapture: tI(),
                        useLoopback: i.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: tT(),
                        videoHookStaleFrameTimeoutMs: eO,
                        graphicsCaptureStaleFrameTimeoutMs: eD,
                        hdrCaptureMode: n
                    },
                    quality: e
                },
                eF
            );
        }
        null != s.cameraSource &&
            ek.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: s.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: s.cameraSource.audioDeviceGuid
                    },
                    quality: e
                },
                eF
            );
    }
}
function tv(e, n, r, i) {
    var a;
    let o = null !== (a = null == e ? void 0 : e.soundshareSession) && void 0 !== a ? a : '';
    null == tc[o] && (tc[o] = new Set());
    let s = null != n && !tc[o].has(n);
    s && tc[o].add(n),
        (null == n || s) &&
            Q.default.track(ep.rMx.SOUNDSHARE_FAILED, {
                soundshare_failure_code: n,
                soundshare_failure_reason: r,
                soundshare_failure_will_retry: i,
                ...(0, k.Z)(e)
            });
}
function ty(e) {
    let n = tp(),
        r = n.inputDeviceId;
    if ((e.setEchoCancellation(eo.Z.hasEchoCancellation(r) || n.echoCancellation), e.setNoiseSuppression(eo.Z.hasNoiseSuppression(r) || n.noiseSuppression), e.setAutomaticGainControl(eo.Z.hasAutomaticGainControl(r) || n.automaticGainControl), e.setNoiseCancellation(n.noiseCancellation), (0, $.isWeb)())) {
        let r = n.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(r);
    }
}
function tb() {
    ek.on(I.aB.Connection, (e) => {
        var n, r;
        th(e), tm(e), ty(e);
        let a = tp();
        e.setAttenuation(a.attenuation, a.attenuateWhileSpeakingSelf, a.attenuateWhileSpeakingOthers), e.setQoS(a.qos), e.setExperimentalEncoders(a.experimentalEncoders), e.setHardwareH264(null === (n = a.hardwareEncoding) || void 0 === n || n), e.setSoftwareH264(null === (r = a.openH264) || void 0 === r || r);
        let s = eu.Z.getGuildId(),
            {
                muteBeforeProcessing: l,
                pttBeforeProcessing: u,
                skipEncode: c
            } = (null != s ? G.Z : B.Z).getCurrentConfig(
                {
                    location: 'setupMediaEngine',
                    ...(null != s && { guildId: s })
                },
                { autoTrackExposure: !0 }
            );
        l && e.setExperimentFlag(eg.V8.MUTE_BEFORE_PROCESSING, !0), u && e.setExperimentFlag(eg.V8.PTT_BEFORE_PROCESSING, !0), c && e.setExperimentFlag(eg.V8.SKIP_ENCODE, !0);
        let d = !1,
            f = !0;
        e.setExperimentFlag(eg.V8.RESET_DECODER_ON_ERRORS, !0), d && e.setExperimentFlag(eg.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0), f && e.setExperimentFlag(eg.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
        if (e.context === eg.Yn.STREAM) {
            let { simulcastEnabled: n, lqStreamBitrate: r } = Z.Z.getConfig();
            e.configureGoLiveSimulcast(n, r);
        }
        if (((0, $.isWindows)() ? ((null == tl ? void 0 : tl.startsWith('NVIDIA')) ? e.setExperimentFlag(eg.V8.SIGNAL_AV1, !0) : (null == tl ? void 0 : tl.startsWith('AMD')) && U.Z.getCurrentConfig({ location: 'setupMediaEngine' }, { autoTrackExposure: !0 }).signalAV1Support ? e.setExperimentFlag(eg.V8.SIGNAL_AV1, !0) : e.setExperimentFlag(eg.V8.SIGNAL_AV1_DECODE, !0)) : ((0, $.isMac)() || (0, $.isLinux)()) && e.setExperimentFlag(eg.V8.SIGNAL_AV1_DECODE, !0), (0, $.isWindows)() && e.setExperimentFlag(eg.V8.SIGNAL_AV1_HARDWARE_DECODE, !0), ek.setHasFullbandPerformance((0, x.Z)()), e.setRemoteAudioHistory(0), (0, D.Z)(i))) {
            let n = O.Z.getSettings();
            e.setExperimentFlag(eg.V8.STREAMER_CLIP, n.clipsEnabled);
            let { enableViewerClipping: r } = Y.Z.getCurrentConfig({ location: 'f627ab_15' }, { autoTrackExposure: !1 });
            e.setViewerSideClip(r), e.setClipsKeyFrameInterval(eg.ux);
        }
        for (let n of ((a = tp(e.context)), e.setPostponeDecodeLevel(ex), Object.keys(a.localMutes))) n !== ei.default.getId() && e.setLocalMute(n, a.localMutes[n]);
        for (let n of Object.keys(a.localVolumes)) n !== ei.default.getId() && e.setLocalVolume(n, a.localVolumes[n]);
        for (let n of Object.keys(a.localPans)) {
            let r = a.localPans[n];
            e.setLocalPan(n, r.left, r.right);
        }
        for (let n of Object.keys(a.disabledLocalVideos)) e.setLocalVideoDisabled(n, a.disabledLocalVideos[n]);
        e.on(I.Sh.Speaking, (n, r) => {
            A.Z.dispatch({
                type: 'SPEAKING',
                context: e.context,
                userId: n,
                speakingFlags: r
            });
        }),
            e.context === eg.Yn.DEFAULT &&
                ((eJ = !1),
                (e$ = !1),
                e.on(I.Sh.SpeakingWhileMuted, () => {
                    (eJ = !0),
                        (e$ = !0),
                        i.emitChange(),
                        e0.stop(),
                        e0.start(eP, () => {
                            (e$ = !1), i.emitChange();
                        });
                })),
            e.on(I.Sh.DesktopSourceEnd, () => {
                A.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                    settings: { context: e.context }
                });
            }),
            e.on(I.Sh.SoundshareAttached, () => {
                (null == o ? void 0 : o.desktopSource) != null && Q.default.track(ep.rMx.SOUNDSHARE_ATTACHED, (0, k.Z)(null == o ? void 0 : o.desktopSource));
            }),
            e.on(I.Sh.SoundshareFailed, (e) => {
                let { failureCode: n, failureReason: r, willRetry: i } = e;
                tv(null == o ? void 0 : o.desktopSource, n, r, i);
            }),
            e.on(I.Sh.SoundshareSpeaking, () => {
                (null == o ? void 0 : o.desktopSource) != null && (Q.default.track(ep.rMx.SOUNDSHARE_TRANSMITTING, (0, k.Z)(null == o ? void 0 : o.desktopSource)), null != el.Z.getHookError(ep.K3D.SOUND) && A.Z.wait(() => A.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
            });
        let p = new S.V7();
        e.on(I.Sh.SoundshareTrace, (e) => {
            switch (e.type) {
                case 'soundshare_attach_requested':
                    p.start(td, () => {
                        A.Z.dispatch({
                            type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
                            errorMessage: 'Sound Hook Failed'
                        });
                    });
                    break;
                case 'soundshare_recv_failed':
                    let n = e.reason,
                        r = e.code,
                        i = e.retry;
                    (null == o ? void 0 : o.desktopSource) != null &&
                        (tv(null == o ? void 0 : o.desktopSource, r, n, i),
                        !i &&
                            (p.stop(),
                            A.Z.wait(() =>
                                A.Z.dispatch({
                                    type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
                                    errorMessage: n,
                                    errorCode: r
                                })
                            )));
                    break;
                case 'soundshare_state_transition':
                    4 === e.newState && (p.stop(), A.Z.wait(() => A.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
            }
        }),
            e.on(I.Sh.InteractionRequired, (e) => {
                A.Z.dispatch({
                    type: 'MEDIA_ENGINE_INTERACTION_REQUIRED',
                    required: e
                });
            }),
            e.on(I.Sh.VideoHookInitialize, (e, n, r, i, a, s) => {
                (null == o ? void 0 : o.desktopSource) != null &&
                    Q.default.track(ep.rMx.VIDEOHOOK_INITIALIZED, {
                        backend: e,
                        format: n,
                        framebuffer_format: r,
                        sample_count: i,
                        success: a,
                        reinitialization: s,
                        ...(0, k.Z)(null == o ? void 0 : o.desktopSource)
                    });
            }),
            e.on(I.Sh.NoiseCancellationError, (e) => {
                ey.warn('noisecancellererror event: '.concat(e)),
                    (te = !0),
                    Q.default.track(ep.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    A.Z.dispatch({
                        type: 'AUDIO_SET_NOISE_SUPPRESSION',
                        enabled: !0
                    }),
                    A.Z.dispatch({
                        type: 'AUDIO_SET_NOISE_CANCELLATION',
                        enabled: !1
                    }),
                    A.Z.dispatch({
                        type: 'MEDIA_ENGINE_NOISE_CANCELLATION_ERROR',
                        code: e
                    });
            }),
            e.on(I.Sh.VoiceActivityDetectorError, (e) => {
                ey.warn('voiceactivitydetectorerror event: '.concat(e)),
                    Q.default.track(ep.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    A.Z.dispatch({
                        type: 'AUDIO_SET_MODE',
                        context: eg.Yn.DEFAULT,
                        mode: ep.pM4.VOICE_ACTIVITY,
                        options: {
                            ...tp(eg.Yn.DEFAULT).modeOptions,
                            vadUseKrisp: !1
                        }
                    }),
                    A.Z.dispatch({
                        type: 'MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR',
                        code: e
                    });
            }),
            e.on(I.Sh.SdpError, (e, n, r, i) => {
                ee.Z === y.R.CANARY &&
                    Q.default.track(ep.rMx.SDP_ERROR, {
                        operation: e,
                        error: n,
                        type: r,
                        sdp: i
                    });
            }),
            e.on(I.Sh.VideoState, (n) => {
                A.Z.dispatch({
                    type: 'MEDIA_ENGINE_VIDEO_STATE_CHANGED',
                    videoState: n,
                    context: e.context
                });
            }),
            e.on(I.Sh.Destroy, () => {
                p.stop();
            }),
            e.setBitRate(ea.Z.bitrate),
            e.applyVideoQualityMode(ef.Z.mode);
    }),
        ek.on(I.aB.DeviceChange, (e, n, r) => {
            A.Z.dispatch({
                type: 'MEDIA_ENGINE_DEVICES',
                inputDevices: e,
                outputDevices: n,
                videoDevices: r
            });
        }),
        ek.on(I.aB.VolumeChange, (e, n) => {
            A.Z.dispatch({
                type: 'AUDIO_VOLUME_CHANGE',
                inputVolume: e,
                outputVolume: n
            });
        }),
        ek.on(I.aB.DesktopSourceEnd, () => {
            A.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                settings: null
            });
        }),
        ek.on(I.aB.AudioPermission, (e) => {
            (tn = !0),
                A.Z.dispatch({
                    type: 'MEDIA_ENGINE_PERMISSION',
                    kind: 'audio',
                    granted: e
                });
        }),
        ek.on(I.aB.VideoPermission, (e) => {
            A.Z.dispatch({
                type: 'MEDIA_ENGINE_PERMISSION',
                kind: 'video',
                granted: e
            });
        }),
        ek.on(I.aB.WatchdogTimeout, async () => {
            let e;
            try {
                await X.Z.submitLiveCrashReport({ message: { message: 'Voice Watchdog Timeout' } });
            } catch (n) {
                'number' == typeof n.status && (e = n.status);
            }
            ey.warn('Watchdog timeout, report submission status: '.concat(null != e ? e : 200)), Q.default.track(ep.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        ek.on(I.aB.VideoInputInitialized, (e) => {
            Q.default.track(ep.rMx.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * J.Z.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: eu.Z.getMediaSessionId(),
                rtc_connection_id: eu.Z.getRTCConnectionId()
            });
        }),
        ek.on(I.aB.AudioInputInitialized, (e) => {
            Q.default.track(ep.rMx.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * J.Z.Millis.SECOND),
                rtc_connection_id: eu.Z.getRTCConnectionId()
            });
        }),
        ek.on(I.aB.ClipsRecordingRestartNeeded, () => {
            A.Z.dispatch({ type: 'CLIPS_RESTART' });
        }),
        ek.on(I.aB.ClipsInitFailure, (e, n) => {
            A.Z.wait(() => {
                A.Z.dispatch({
                    type: 'CLIPS_INIT_FAILURE',
                    errMsg: e,
                    applicationName: n
                });
            });
        }),
        ek.on(I.aB.ClipsRecordingEnded, (e, n) => {
            var r, i;
            (null == s ? void 0 : null === (r = s.desktopSource) || void 0 === r ? void 0 : r.id) === e && (null != n && (null == o ? void 0 : null === (i = o.desktopSource) || void 0 === i ? void 0 : i.soundshareId) !== n && N.pn(n), (s = null));
        }),
        ek.on(I.aB.NativeScreenSharePickerUpdate, (e) => {
            F.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerUpdate' }),
                A.Z.dispatch({
                    type: 'NATIVE_SCREEN_SHARE_PICKER_UPDATE',
                    existing: e
                });
        }),
        ek.on(I.aB.NativeScreenSharePickerCancel, (e) => {
            F.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerCancel' }),
                A.Z.dispatch({
                    type: 'NATIVE_SCREEN_SHARE_PICKER_CANCEL',
                    existing: e
                });
        }),
        ek.on(I.aB.NativeScreenSharePickerError, (e) => {
            F.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerError' }),
                A.Z.dispatch({
                    type: 'NATIVE_SCREEN_SHARE_PICKER_ERROR',
                    error: e
                });
        }),
        ek.on(I.aB.AudioDeviceModuleError, (e, n, r) => {
            Q.default.track(ep.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                audio_device_module: e,
                code: n,
                device_name: r
            });
        }),
        ek.setOnVideoContainerResized((e, n, r) => {
            A.Z.wait(() =>
                A.Z.dispatch({
                    type: 'VIDEO_SIZE_UPDATE',
                    streamId: e,
                    width: n,
                    height: r
                })
            );
        }),
        tA.reset(),
        (0, ec.q)().then((e) => {
            null != e && (tl = e.gpu_brand);
        });
}
function tI() {
    return (0, $.isWindows)() && v().satisfies(null === C.Z || void 0 === C.Z ? void 0 : C.Z.os.release, eh.nz);
}
function tT() {
    return (0, $.isMac)() && ek.supports(eg.AN.SCREEN_CAPTURE_KIT) && v().satisfies(null === C.Z || void 0 === C.Z ? void 0 : C.Z.os.release, eh.C7);
}
function tS() {
    return (0, $.isWindows)() && ek.supports(eg.AN.AUTOMATIC_AUDIO_SUBSYSTEM) && ek.supports(eg.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH);
}
let tA = new (class {
    start() {
        !this.started && ((this.started = !0), ek.on(I.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            ek.removeListener(I.aB.Silence, this.handleSilence),
            A.Z.dispatch({
                type: 'AUDIO_INPUT_DETECTED',
                inputDetected: null
            }));
    }
    update() {
        let e = tp();
        !e4 && eu.Z.getState() === ep.hes.RTC_CONNECTED && e.mode === ep.pM4.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop();
    }
    reset() {
        this.stop(), this.update();
    }
    constructor() {
        ev(this, 'stateChangeTimeout', void 0),
            ev(this, 'noVoiceTimeout', 5000),
            ev(this, 'voiceTimeout', 1500),
            ev(this, 'started', !1),
            ev(this, 'handleSilence', (e) => {
                let n = !e;
                null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout),
                    (this.stateChangeTimeout = setTimeout(
                        () => {
                            (this.stateChangeTimeout = null),
                                this.started &&
                                    (A.Z.dispatch({
                                        type: 'AUDIO_INPUT_DETECTED',
                                        inputDetected: n
                                    }),
                                    e && (e6 = !0));
                        },
                        n ? this.voiceTimeout : this.noVoiceTimeout
                    ));
            });
    }
})();
function tC() {
    var e;
    let n = T.K.get('audio');
    null != n && (T.K.set(eb, { [eg.Yn.DEFAULT]: n }), T.K.remove('audio')),
        (eU = null !== (e = T.K.get(eb)) && void 0 !== e ? e : {}),
        g().each(eU, (e) => {
            if ((g().defaultsDeep(e, eM()), null != e.modeOptions && 'string' == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, er.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== eI && ((e.vadUseKrispSettingVersion = eI), (e.modeOptions.vadUseKrisp = !0)), !e.qosMigrated && ((e.qosMigrated = !0), (e.qos = !1)), !e.vadThrehsoldMigrated)) {
                var n;
                (e.vadThrehsoldMigrated = !0), (null === (n = e.modeOptions) || void 0 === n ? void 0 : n.threshold) === -40 && (e.modeOptions.threshold = eL);
            }
            (0, $.isWeb)() ? e.ncUseKrispjsSettingVersion !== eS && ((e.ncUseKrispjsSettingVersion = eS), (e.noiseSuppression = !1), (e.noiseCancellation = !0)) : e.ncUseKrispSettingVersion !== eT && ((e.ncUseKrispSettingVersion = eT), (e.noiseSuppression = !1), (e.noiseCancellation = !0)), e.hardwareEnabledVersion !== eA && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = eA)), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
        }),
        tO();
}
function tN(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eg.Yn.DEFAULT,
        r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = tp(n);
    return Object.assign(i, e), !__OVERLAY__ && r && T.K.set(eb, eU), i;
}
function tR() {
    T.K.remove(eb);
    location.reload();
}
function tO() {
    var e, n, r;
    let i = tp();
    ek.setAudioInputDevice(i.inputDeviceId), ek.setAudioOutputDevice(i.outputDeviceId), tE(), ek.setInputVolume(i.inputVolume), ek.setOutputVolume(i.outputVolume), ek.setH264Enabled(null === (e = i.hardwareEncoding) || void 0 === e || e || i.openH264), ek.setAv1Enabled(null === (n = i.hardwareEncoding) || void 0 === n || n), ek.setH265Enabled(null === (r = i.hardwareEncoding) || void 0 === r || r), ek.setAecDump(i.aecDumpEnabled), ek.setSidechainCompression(i.sidechainCompression), ek.setSidechainCompressionStrength(i.sidechainCompressionStrength);
}
function tD() {
    !eG &&
        ek.enable().then(() =>
            A.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
                enabled: !0,
                unmute: !1
            })
        );
}
function tL(e) {
    return {
        id: eg.w5,
        index: 0,
        name: e,
        disabled: !0
    };
}
function tx(e, n) {
    if (0 === e.length) {
        let e = tL(n);
        return { [e.id]: e };
    }
    return g()(e)
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
function tw(e, n) {
    var r;
    let i = null !== (r = e[n]) && void 0 !== r ? r : g()(e).values().first();
    return null != i ? i.id : n;
}
function tP(e) {
    let n = eV;
    if (((eV = tx(e, eE.intl.string(eE.t['/QIjDA']))), !g().isEqual(eV, n))) {
        let e = tp(),
            n = tw(eV, e.inputDeviceId);
        ek.setAudioInputDevice(n);
    }
}
function tM(e) {
    let n = ej;
    if (((ej = tx(e, eE.intl.string(eE.t.xlUg0t))), !g().isEqual(ej, n))) {
        let e = tp(),
            n = tw(ej, e.outputDeviceId);
        ek.setAudioOutputDevice(n);
    }
}
function tk(e) {
    e2 = e.length > 0;
    let n = eH;
    if (((eH = tx(e, eE.intl.string(eE.t.WKWARU))), eq && !g().isEqual(eH, n))) {
        var r;
        let e = void 0 !== eH[eQ],
            i = eQ === eg.w5 && (null === (r = n[eg.w5]) || void 0 === r ? void 0 : r.disabled);
        tE(e || i);
    }
}
function tU() {
    var e, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        i =
            null !== (e = q.Z.settings.audioContextSettings) && void 0 !== e
                ? e
                : {
                      user: {},
                      stream: {}
                  };
    for (let e of Object.keys(i)) {
        let a = e === em.u0.USER ? eg.Yn.DEFAULT : eg.Yn.STREAM,
            o = a === eg.Yn.STREAM ? eg.Yh : eg.Qx,
            s = null !== (n = i[e]) && void 0 !== n ? n : {},
            { localMutes: l, localVolumes: u } = tp(a);
        for (let [e, n] of Object.entries(s))
            null == (0, z.Ky)(a, e) &&
                (n.muted ? (l[e] = !0) : delete l[e],
                n.volume !== o ? (u[e] = n.volume) : delete u[e],
                ek.eachConnection((r) => {
                    r.setLocalVolume(e, n.volume), r.setLocalMute(e, n.muted);
                }, a));
        if (r)
            for (let e of new Set([...Object.keys(l), ...Object.keys(u)]))
                null == s[e] &&
                    (delete l[e],
                    delete u[e],
                    ek.eachConnection((n) => {
                        n.setLocalVolume(e, o), n.setLocalMute(e, !1);
                    }, a));
        tN(
            {
                localMutes: l,
                localVolumes: u
            },
            a
        );
    }
}
function tB(e) {
    if (null == i)
        return (
            ey.info('Error: trying to get soundshare id before MediaEngineStore is instantiated.'),
            {
                soundshareId: null,
                soundshareSession: ''
            }
        );
    {
        let n = i.getExperimentalSoundshare() ? e : X.Z.getAudioPid(e),
            r = '';
        return (
            null != n && (r = X.Z.generateSessionFromPid(n)),
            {
                soundshareId: n,
                soundshareSession: r
            }
        );
    }
}
function tG(e, n) {
    (0, $.isWindows)() &&
        N.YT(e, { soundshare_session: n }).then((n) => {
            null != n &&
                !M.ZP.shouldContinueWithoutElevatedProcessForPID(e) &&
                A.Z.wait(() => {
                    A.Z.dispatch({
                        type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
                        errorMessage: n
                    });
                });
        });
}
function tZ(e) {
    (a = e.sessionId),
        (eY = !1),
        (ez = !1),
        !(0, $.isWeb)() &&
            H.Z.subscribe({ location: 'handleConnectionOpen' }, (e) => {
                let n = tp();
                !e.sidechainAvailable && n.sidechainCompression ? (tN({ sidechainCompressionSettingVersion: 0 }), na(!1)) : e.sidechainAvailable && n.sidechainCompressionSettingVersion < eC && (tN({ sidechainCompressionSettingVersion: eC }), na(e.sidechainEnabled));
            });
    let n = tp();
    tS() && (n.automaticAudioSubsystem && nD(), n.audioSubsystemSettingVersion < eN && (tN({ audioSubsystemSettingVersion: eN }), !n.automaticAudioSubsystem && ek.getAudioSubsystem() !== eg.iA.LEGACY && nO(eg.iA.AUTOMATIC))), tU();
}
function tF(e) {
    let { mediaEngineState: n } = e;
    (eU = n.settingsByContext), (eV = n.inputDevices), (ej = n.outputDevices), (ts = n.appSupported), (e8 = n.krispModuleLoaded), (eF = n.goLiveContext);
}
function tV() {
    a = null;
}
function tj(e) {
    switch (e.state) {
        case ep.hes.CONNECTING:
            tD();
            break;
        case ep.hes.RTC_CONNECTING:
            (e4 = !1), (e6 = !1);
            break;
        case ep.hes.RTC_CONNECTED:
            tE();
            break;
        case ep.hes.DISCONNECTED:
            tJ(), t$();
    }
    tA.update();
}
function tH(e) {
    let { voiceStates: n } = e;
    return n.reduce((e, n) => (a === n.sessionId ? ((eY = n.mute || n.suppress), (ez = n.deaf), ek.eachConnection(tm), tE(!(null != n.guildId && null != n.channelId && null != e9 && e9 !== n.channelId) && eq), (e9 = n.channelId), !0) : (!__OVERLAY__ && n.userId === ei.default.getId() && null == eu.Z.getChannelId() && tE(!1, null), e)), !1);
}
function tY(e) {
    let { mute: n } = e;
    (eW = n), ek.eachConnection(tm);
}
function tW(e) {
    let { context: n, skipMuteUnmuteSoundEffect: r } = e,
        { mute: i, deaf: a } = tp(n);
    if (n === eg.Yn.DEFAULT && (K.Z.requestPermission(e_.Eu.AUDIO), eK)) return !1;
    !(i = !a && !i) && (a = !1),
        r && (eX = !0),
        tN(
            {
                mute: i,
                deaf: a
            },
            n
        ),
        ek.eachConnection(tm);
}
function tK(e) {
    let { context: n, mute: r } = e;
    tN({ mute: r }, n), ek.eachConnection(tm);
}
function tz(e) {
    let {
        settings: { type: n },
        local: r,
        wasSaved: i
    } = e;
    if (n !== em.yP.PRELOADED_USER_SETTINGS || r || null != i) return !1;
    tU(!0);
}
function tq(e) {
    let { context: n } = e;
    tN({ deaf: !tp(n).deaf }, n), ek.eachConnection(tm);
}
function tQ(e) {
    let { context: n, userId: r } = e;
    if (r === ei.default.getId()) return;
    let { localMutes: i } = tp(n);
    i[r] ? delete i[r] : (i[r] = !0), tN({ localMutes: i }, n), ek.eachConnection((e) => e.setLocalMute(r, i[r] || !1), n);
}
function tX(e) {
    var n, r, i, a, o, s, l;
    let { context: u, userId: c, videoToggleState: d, persist: f, isAutomatic: p } = e;
    _()(!(f && p), 'These are not allowed to both be true.');
    let h = d === ep.ZUi.DISABLED,
        { disabledLocalVideos: m } = tp(u),
        g = null !== (n = m[c]) && void 0 !== n && n,
        E = ti.has(c),
        v = d === ep.ZUi.AUTO_ENABLED || d === ep.ZUi.MANUAL_ENABLED;
    ey.info('disableVideo='.concat(h, ' currentlyDisabled=').concat(g, ' currentlyAutoDisabled=').concat(E, ', isVideoShown=').concat(v)), _()(!(E && !g), 'If you are auto-disabled, then you are also disabled.');
    let y = h !== g,
        b = u === eg.Yn.DEFAULT,
        I = p && y && b,
        T = f && y && b;
    ey.info('changed='.concat(y, ' isDefaultContext=').concat(b, ' isUpdateCausedByVideoHealthManager=').concat(I, ' isManualToggleByUser=').concat(T));
    let { videoToggleStateMap: S } = tp(u);
    if ((S[c] === ep.ZUi.AUTO_PROBING && d === ep.ZUi.AUTO_ENABLED && (0, W.Z)(c, h ? eg.fC.AUTO_DISABLE : eg.fC.AUTO_ENABLE, v), (S[c] = d), tN({ videoToggleStateMap: S }, u, f), d === ep.ZUi.AUTO_PROBING ? null === (r = eu.Z.getRTCConnection()) || void 0 === r || r.pauseStatsCollectionForUser(c, !0) : null === (i = eu.Z.getRTCConnection()) || void 0 === i || i.pauseStatsCollectionForUser(c, !1), !ta && (ey.info('isAutoDisableAllowed='.concat(ta, ' - disabling VideoHealthManager')), null === (o = eu.Z.getRTCConnection()) || void 0 === o || null === (a = o.getVideoHealthManager()) || void 0 === a || a.disable()), I)) {
        if ((!h && !E) || (h && !ta)) return;
        (0, W.Z)(c, h ? eg.fC.AUTO_DISABLE : eg.fC.AUTO_ENABLE, v), h ? ti.add(c) : ti.delete(c);
    } else T && (E && !h ? (ey.info('disallowing auto-disable for this session because of manual override by user'), (ta = !1), null === (l = eu.Z.getRTCConnection()) || void 0 === l || null === (s = l.getVideoHealthManager()) || void 0 === s || s.disable(), (0, W.Z)(c, eg.fC.MANUAL_REENABLE, v)) : (0, W.Z)(c, h ? eg.fC.MANUAL_DISABLE : eg.fC.MANUAL_ENABLE, v));
    b && !h && ti.delete(c),
        h ? (m[c] = !0) : delete m[c],
        tN({ disabledLocalVideos: m }, u, f),
        ek.eachConnection((e) => {
            var n;
            return e.setLocalVideoDisabled(c, null !== (n = m[c]) && void 0 !== n && n);
        }, u);
}
function tJ() {
    if (0 === ti.size) return;
    let e = eg.Yn.DEFAULT,
        { disabledLocalVideos: n } = tp(e);
    ti.forEach((r) => {
        _()(n[r], 'If you are auto-disabled, then you are also disabled.'), delete n[r], ek.eachConnection((e) => e.setLocalVideoDisabled(r, !1), e);
    }),
        ti.clear(),
        tN({ disabledLocalVideos: n }, e, !1);
}
function t$() {
    let e = eg.Yn.DEFAULT,
        { videoToggleStateMap: n } = tp(e);
    for (let [e, r] of Object.entries(n)) r === ep.ZUi.AUTO_PROBING && delete n[e];
    tN({ videoToggleStateMap: n }, e, !1);
}
function t0(e) {
    let { context: n, userId: r, volume: i } = e;
    if (r === ei.default.getId()) return;
    let a = n === eg.Yn.STREAM ? eg.Yh : eg.Qx,
        { localVolumes: o } = tp(n);
    i === a ? delete o[r] : (o[r] = i), tN({ localVolumes: o }, n), ek.eachConnection((e) => e.setLocalVolume(r, i), n);
}
function t1(e) {
    let { context: n, userId: r, left: i, right: a } = e,
        { localPans: o } = tp(n);
    (o[r] = {
        left: i,
        right: a
    }),
        tN({ localPans: o }, n),
        ek.eachConnection((e) => e.setLocalPan(r, i, a), n);
}
function t2(e) {
    let { context: n, mode: r, options: i } = e;
    tN(
        {
            mode: r,
            modeOptions: i
        },
        n
    ),
        ek.eachConnection(th),
        tA.update();
}
function t3(e) {
    let { volume: n } = e;
    tN({ inputVolume: t_(n) }), ek.setInputVolume(n);
}
function t4(e) {
    let { volume: n } = e;
    tN({ outputVolume: n }), ek.setOutputVolume(n);
}
function t6(e) {
    let { id: n } = e;
    tN({ inputDeviceId: (n = tw(eV, n)) }), ek.setAudioInputDevice(n);
}
function t5(e) {
    let { id: n } = e;
    tN({ outputDeviceId: (n = tw(ej, n)) }), ek.setAudioOutputDevice(n);
}
function t7(e) {
    let { id: n } = e;
    tN({ videoDeviceId: (n = tw(eH, n)) }), tE();
}
function t8(e) {
    return eZ !== e.required && ((eZ = e.required), !e.required && ek.interact(), !0);
}
function t9(e) {
    let { inputDevices: n, outputDevices: r, videoDevices: i } = e;
    tP(n), tM(r), tk(i);
}
function ne(e) {
    let { inputVolume: n, outputVolume: r } = e;
    tN({
        inputVolume: t_(n),
        outputVolume: r
    });
}
function nt(e) {
    let n = tp();
    Q.default.track(ep.rMx.VOICE_PROCESSING, {
        echo_cancellation: n.echoCancellation,
        noise_cancellation: n.noiseCancellation,
        noise_suppression: n.noiseSuppression,
        automatic_gain_control: n.automaticGainControl,
        location: e
    });
}
function nn(e) {
    let n = tN({ echoCancellation: e.enabled });
    ek.eachConnection((e) => e.setEchoCancellation(n.echoCancellation)), ns(), nt(e.location);
}
function nr(e) {
    na(e.enabled);
}
function ni(e) {
    let n = tN({ sidechainCompressionStrength: e.strength });
    ek.setSidechainCompressionStrength(n.sidechainCompressionStrength);
}
function na(e) {
    let n = tN({ sidechainCompression: e });
    ek.setSidechainCompression(n.sidechainCompression);
}
function no(e) {
    let { enabled: n } = e;
    return (to = n), ns();
}
function ns() {
    let e = tp(),
        n = e.inputDeviceId,
        r = eo.Z.hasEchoCancellation(n) || e.echoCancellation,
        i = eo.Z.hasNoiseSuppression(n) || e.noiseSuppression,
        a = eo.Z.hasAutomaticGainControl(n) || e.automaticGainControl,
        o = e.noiseCancellation;
    ek.setLoopback(to, {
        echoCancellation: r,
        noiseSuppression: i,
        automaticGainControl: a,
        noiseCancellation: o
    });
}
function nl(e) {
    let n = tN({ noiseSuppression: e.enabled });
    ek.eachConnection((e) => e.setNoiseSuppression(n.noiseSuppression)), ns(), nt(e.location);
}
function nu(e) {
    let n = tN({ automaticGainControl: e.enabled });
    ek.eachConnection((e) => e.setAutomaticGainControl(n.automaticGainControl)), ns(), nt(e.location);
}
function nc(e) {
    let n = tN({ noiseCancellation: e.enabled });
    ek.eachConnection((e) => e.setNoiseCancellation(n.noiseCancellation)), ns(), nt(e.location);
}
function nd(e) {
    let n = tN({ experimentalEncoders: e.enabled });
    ek.eachConnection((e) => e.setExperimentalEncoders(n.experimentalEncoders));
}
function nf(e) {
    var n, r;
    let { enabled: i } = e,
        a = tN({ hardwareEncoding: i });
    ek.eachConnection((e) => {
        var n;
        return e.setHardwareH264(null === (n = a.hardwareEncoding) || void 0 === n || n);
    }),
        ek.setH264Enabled(a.hardwareEncoding || a.openH264),
        ek.setAv1Enabled(null === (n = a.hardwareEncoding) || void 0 === n || n),
        ek.setH265Enabled(null === (r = a.hardwareEncoding) || void 0 === r || r);
}
function np(e) {
    tN({ silenceWarning: e.enabled }), tA.update();
}
function nh(e) {
    ek.setDebugLogging(e.enabled);
}
function n_(e) {
    tN({ videoHook: e.enabled });
}
function nm(e) {
    tN({ experimentalSoundshare2: e.enabled });
}
function ng(e) {
    let { enabled: n } = e;
    tN({ useSystemScreensharePicker: n });
}
function nE(e) {
    let { attenuation: n, attenuateWhileSpeakingSelf: r, attenuateWhileSpeakingOthers: i } = e,
        a = tN({
            attenuation: n,
            attenuateWhileSpeakingSelf: r,
            attenuateWhileSpeakingOthers: i
        });
    ek.eachConnection((e) => e.setAttenuation(a.attenuation, a.attenuateWhileSpeakingSelf, a.attenuateWhileSpeakingOthers));
}
function nv(e) {
    let { enabled: n } = e;
    tN({ qos: n }), ek.eachConnection((e) => e.setQoS(n));
}
function ny() {
    tR();
}
function nb(e) {
    let { inputDetected: n } = e;
    (e3 = n), !e4 && e3 && ((e4 = !0), tA.update());
}
function nI(e) {
    let { hasPermission: n } = e,
        r = !n;
    if (r === eK) return !1;
    (eK = r), ek.eachConnection(tm);
}
function nT(e) {
    let { state: n, permissionType: r } = e,
        i = n === e_.PQ.ACCEPTED;
    switch (r) {
        case e_.Eu.AUDIO:
            (tn = !0), ek.eachConnection(tm);
            break;
        case e_.Eu.CAMERA:
            !i && eq && tE(!1);
            break;
        default:
            return !1;
    }
}
function nS() {
    return e8 || !1;
}
async function nA() {
    try {
        await en.ZP.ensureModule('discord_krisp'), en.ZP.requireModule('discord_krisp'), (e8 = !0), i.emitChange();
    } catch (n) {
        ey.warn('Failed to load Krisp module: '.concat(n.message)), et.Z.captureException(n);
        let e = eg.H3.INITIALIZED;
        if (n.message.includes(': ')) {
            let r = parseInt(n.message.substring(n.message.indexOf(': ') + 1));
            e = isNaN(r) || 0 === r ? eg.H3.INITIALIZED : r;
        }
        Q.default.track(ep.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), tN({ noiseCancellation: !1 });
    } finally {
        e7 = !1;
    }
}
function nC() {
    return (0, $.isWindows)() || (0, $.isLinux)() || ((0, $.isMac)() && v().satisfies(null === C.Z || void 0 === C.Z ? void 0 : C.Z.os.release, ew));
}
function nN() {
    !nC() || __OVERLAY__ || e7 || e8 ? ((0, $.isWeb)() && ek.supports(eg.AN.NOISE_CANCELLATION) ? ((e8 = !0), i.emitChange()) : (0, $.isWeb)() && tN({ noiseCancellation: !1 })) : ((e7 = !0), nA());
}
function nR(e) {
    nO(e.subsystem);
}
function nO(e) {
    e === eg.iA.AUTOMATIC ? (tN({ automaticAudioSubsystem: !0 }), nD()) : (tN({ automaticAudioSubsystem: !1 }), ek.setAudioSubsystem(e));
}
function nD() {
    let { enabled: e } = V.I.getCurrentConfig({ location: 'interpretAutomaticAudioSubsystem' });
    e ? ek.queueAudioSubsystem(eg.iA.EXPERIMENTAL) : ek.queueAudioSubsystem(eg.iA.STANDARD);
}
function nL(e) {
    let { guildId: n, channelId: r, currentVoiceChannelId: i, video: a } = e;
    if ((i !== r && tE(a, null), null != n || null == r)) {
        e5 = !1;
        return;
    }
    if (e5) return;
    e5 = !0;
    let o = tp();
    (o.mute || o.deaf) &&
        (tN({
            deaf: !1,
            mute: !1
        }),
        ek.eachConnection(tm));
}
function nx(e) {
    let { application: n } = e;
    eB.add(n.id);
}
function nw(e) {
    let { application: n } = e;
    eB.delete(n.id);
}
function nP(e) {
    let { kind: n, granted: r } = e;
    if (!r)
        switch (n) {
            case 'audio':
                (eG = !1), ek.eachConnection(tm);
                break;
            case 'video':
                tE(!1);
        }
}
function nM(e) {
    (eG = e.enabled),
        e.unmute &&
            tN({
                mute: !1,
                deaf: !1
            }),
        ek.eachConnection(tm);
}
function nk(e) {
    let { enabled: n } = e;
    K.Z.requestPermission(e_.Eu.CAMERA), tE(n);
}
function nU(e) {
    let { sourceId: n, applicationName: r, quality: a } = e,
        o = O.Z.isDecoupledGameClippingEnabled(),
        l = O.Z.getSettings().decoupledClipsEnabled;
    if (!o || !l || null == C.Z) return;
    let u = null,
        c = null,
        d = X.Z.getPidFromDesktopSource(n);
    ({ soundshareId: u, soundshareSession: c } = tB(d));
    let f = {
        desktopSource: {
            id: n,
            sourcePid: d,
            soundshareId: u,
            soundshareSession: c
        },
        quality: a
    };
    null != s && s.desktopSource.id !== f.desktopSource.id && (ek.setClipsSource(null), (0, $.isWindows)() && null != s.desktopSource.soundshareId && N.pn(s.desktopSource.soundshareId)), null != u && tG(u, c), (s = f);
    let p = tf(),
        h = tp().videoHook;
    ek.setClipsSource({
        desktopDescription: {
            id: s.desktopSource.id,
            soundshareId: s.desktopSource.soundshareId,
            useVideoHook: h,
            useGraphicsCapture: tI(),
            useLoopback: i.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: tT(),
            videoHookStaleFrameTimeoutMs: eO,
            graphicsCaptureStaleFrameTimeoutMs: eD,
            hdrCaptureMode: p
        },
        quality: a,
        applicationName: r
    });
}
function nB(e) {
    let { settings: n } = e;
    !1 === n.decoupledClipsEnabled && ((s = null), ek.setClipsSource(null));
}
function nG(e) {
    var n, r, i, a;
    let { settings: o } = e;
    if ((null == o ? void 0 : o.desktopSettings) != null) {
        let e = null,
            i = null,
            { sourceId: a, sound: s } = o.desktopSettings,
            l = null !== (n = o.context) && void 0 !== n ? n : eg.Yn.DEFAULT,
            u =
                null !== (r = o.qualityOptions) && void 0 !== r
                    ? r
                    : {
                          resolution: 720,
                          frameRate: 30
                      },
            c = !1 === s ? null : X.Z.getPidFromDesktopSource(a);
        $.isPlatformEmbedded && !0 === s && (({ soundshareId: e, soundshareSession: i } = tB(c)), null != e && tG(e, i)),
            tg(l),
            tE(l === eg.Yn.STREAM && eq, {
                desktopSource: {
                    id: a,
                    sourcePid: c,
                    soundshareId: e,
                    soundshareSession: i
                },
                quality: {
                    resolution: u.resolution,
                    frameRate: u.frameRate
                }
            });
    } else if ((null == o ? void 0 : o.cameraSettings) != null) {
        let e = null !== (i = o.context) && void 0 !== i ? i : eg.Yn.DEFAULT,
            { videoDeviceGuid: n, audioDeviceGuid: r } = o.cameraSettings,
            s = e === eg.Yn.STREAM && eq,
            l =
                null !== (a = o.qualityOptions) && void 0 !== a
                    ? a
                    : {
                          resolution: 720,
                          frameRate: 30
                      };
        tE(s, {
            cameraSource: {
                videoDeviceGuid: n,
                audioDeviceGuid: r
            },
            quality: {
                resolution: l.resolution,
                frameRate: l.frameRate
            }
        });
    } else tE(eq, null);
}
function nZ(e) {
    let { section: n } = e;
    return n === ep.oAB.VOICE && tD(), !1;
}
function nF() {
    return ek.eachConnection(ty), !1;
}
function nV(e) {
    let { enabled: n } = e,
        r = tN({ openH264: n });
    ek.setH264Enabled(r.hardwareEncoding || r.openH264),
        ek.eachConnection((e) => {
            var n;
            return e.setSoftwareH264(null === (n = r.openH264) || void 0 === n || n);
        });
}
function nj(e) {
    let { enabled: n } = e,
        r = tN({ aecDumpEnabled: n });
    ek.setAecDump(r.aecDumpEnabled);
}
function nH(e) {
    let { state: n } = e,
        r = P.Z.isEnabled();
    if (n === ep.$7l.BACKGROUND && eq && !r) (e1 = !0), tE(!1);
    else {
        if (n !== ep.$7l.ACTIVE || !e1) return !1;
        (e1 = !1), tE(!0);
    }
    return !0;
}
function nY(e) {
    ek.eachConnection((n) => n.setBitRate(e.bitrate));
}
function nW() {
    if ((!eq && null == o) || null != eu.Z.getRTCConnectionId()) return !1;
    tE(!1, null);
}
function nK() {
    return !!te && ((te = !1), !0);
}
function nz(e) {
    ek.eachConnection((n) => n.applyVideoQualityMode(e.mode));
}
function nq(e) {
    let { settings: n } = e;
    ek.applyMediaFilterSettings(n).finally(() => {
        (tt = !1), i.emitChange();
    });
}
function nQ() {
    tt = !0;
}
function nX() {
    tt = !1;
}
function nJ(e) {
    tu = e.enabled;
}
class n$ extends (u = b.ZP.Store) {
    initialize() {
        tb(),
            tC(),
            nN(),
            t$(),
            (ts = {
                [eg.AN.VIDEO]: ek.supports(eg.AN.VIDEO),
                [eg.AN.DESKTOP_CAPTURE]: ek.supports(eg.AN.DESKTOP_CAPTURE),
                [eg.AN.HYBRID_VIDEO]: ek.supports(eg.AN.HYBRID_VIDEO)
            }),
            this.waitFor(ei.default, eo.Z, es.Z, el.Z, eu.Z, M.ZP, K.Z.storage, q.Z, w.Z, O.Z);
    }
    supports(e) {
        return ek.supports(e);
    }
    supportsInApp(e) {
        return ts[e] || ek.supports(e);
    }
    isSupported() {
        return ek.supported();
    }
    isExperimentalEncodersSupported() {
        return ek.supports(eg.AN.EXPERIMENTAL_ENCODERS);
    }
    isNoiseSuppressionSupported() {
        return ek.supports(eg.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return nS();
    }
    isNoiseCancellationError() {
        return te;
    }
    isAutomaticGainControlSupported() {
        return ek.supports(eg.AN.AUTOMATIC_GAIN_CONTROL);
    }
    isAdvancedVoiceActivitySupported() {
        return nS();
    }
    isAecDumpSupported() {
        return ek.supports(eg.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return ek.supports(eg.AN.VIDEO) && ek.supports(eg.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        let n = (null === (e = es.Z.getChannel(e9)) || void 0 === e ? void 0 : e.type) === ep.d4z.GUILD_STAGE_VOICE,
            r = i.getHardwareEncoding();
        return !n && r && Z.Z.simulcastEnabled();
    }
    getAecDump() {
        return tp().aecDumpEnabled;
    }
    getMediaEngine() {
        return ek;
    }
    getVideoComponent() {
        return ek.supports(eg.AN.DIRECT_VIDEO) && ek.setUseDirectVideo(!0), ek.Video;
    }
    getCameraComponent() {
        return ek.supports(eg.AN.DIRECT_VIDEO) && ek.setUseDirectVideo(!0), ek.Camera;
    }
    isEnabled() {
        return eG;
    }
    isMute() {
        return this.isSelfMute() || eY;
    }
    isDeaf() {
        return this.isSelfDeaf() || ez;
    }
    hasContext(e) {
        return null != eU[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eg.Yn.DEFAULT;
        return e === eg.Yn.DEFAULT && eW;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eg.Yn.DEFAULT;
        return !this.isEnabled() || tp(e).mute || !K.Z.didHavePermission(e_.Eu.AUDIO) || this.isSelfDeaf(e) || (e === eg.Yn.DEFAULT && eK);
    }
    shouldSkipMuteUnmuteSound() {
        return eX;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        eX = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eg.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && eo.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return tu;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eg.Yn.DEFAULT;
        return !this.isSupported() || tp(e).deaf;
    }
    isVideoEnabled() {
        return eq && e2;
    }
    isVideoAvailable() {
        return Object.values(eH).some((e) => {
            let { disabled: n } = e;
            return !n;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eg.Yn.STREAM;
        return eF === e && null != o;
    }
    isSoundSharing() {
        var e;
        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eg.Yn.STREAM;
        return eF === n && null != o && (null === (e = o.desktopSource) || void 0 === e ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eg.Yn.DEFAULT;
        return e !== ei.default.getId() && (tp(n).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return ek.supports(eg.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var n;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eg.Yn.DEFAULT;
        return null !== (n = tp(r).disabledLocalVideos[e]) && void 0 !== n && n;
    }
    getVideoToggleState(e) {
        var n;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eg.Yn.DEFAULT;
        return null !== (n = tp(r).videoToggleStateMap[e]) && void 0 !== n ? n : ep.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eg.Yn.DEFAULT;
        return n === eg.Yn.DEFAULT && ti.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eg.Yn.DEFAULT;
        return e === eg.Yn.DEFAULT && ti.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tt;
    }
    isNativeAudioPermissionReady() {
        return tn;
    }
    getGoLiveSource() {
        return o;
    }
    getGoLiveContext() {
        return eF;
    }
    getLocalPan(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eg.Yn.DEFAULT,
            r = tp(n).localPans[e];
        return null != r ? r : eR;
    }
    getLocalVolume(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eg.Yn.DEFAULT,
            r = n === eg.Yn.STREAM ? eg.Yh : eg.Qx,
            i = tp(n).localVolumes[e];
        return null != i ? i : r;
    }
    getInputVolume() {
        return tp().inputVolume;
    }
    getOutputVolume() {
        return tp().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eg.Yn.DEFAULT;
        return tp(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eg.Yn.DEFAULT;
        return tp(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            g().each(eU, (n, r) => {
                let {
                    mode: i,
                    modeOptions: { shortcut: a }
                } = n;
                i === ep.pM4.PUSH_TO_TALK && eB.has(r) && (e[r] = a);
            }),
            e
        );
    }
    getInputDeviceId() {
        return tw(eV, tp().inputDeviceId);
    }
    getOutputDeviceId() {
        return tw(ej, tp().outputDeviceId);
    }
    getVideoDeviceId() {
        return tw(eH, tp().videoDeviceId);
    }
    getInputDevices() {
        return eV;
    }
    getOutputDevices() {
        return ej;
    }
    getVideoDevices() {
        return eH;
    }
    getEchoCancellation() {
        let e = tp();
        return eo.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
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
        return ek.getLoopback();
    }
    getNoiseSuppression() {
        let e = tp();
        return eo.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tp();
        return eo.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
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
        return ek.getDebugLogging();
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
        return tS() && tp().automaticAudioSubsystem ? eg.iA.AUTOMATIC : ek.getAudioSubsystem();
    }
    getMLSSigningKey(e, n) {
        return ek.getMLSSigningKey(e, n);
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eg.Yn.DEFAULT;
        return tp(e);
    }
    getState() {
        return {
            settingsByContext: eU,
            inputDevices: eV,
            outputDevices: ej,
            appSupported: ts,
            krispModuleLoaded: e8,
            goLiveSource: o,
            goLiveContext: eF
        };
    }
    getInputDetected() {
        return e3;
    }
    getNoInputDetectedNotice() {
        return e6;
    }
    getPacketDelay() {
        return $.isPlatformEmbedded || this.getMode() !== ep.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, n) {
        ek.eachConnection((r) => r.setCanHavePriority(e, n));
    }
    isInteractionRequired() {
        return eZ;
    }
    getVideoHook() {
        return tp().videoHook;
    }
    supportsVideoHook() {
        return ek.supports(eg.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tp().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e);
    }
    supportsExperimentalSoundshare() {
        return ek.supports(eg.AN.EXPERIMENTAL_SOUNDSHARE) && v().satisfies(null === C.Z || void 0 === C.Z ? void 0 : C.Z.os.release, eh.I9);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            n = tp().useSystemScreensharePicker,
            r =
                (0, $.isLinux)() ||
                F.Z.getCurrentConfig(
                    { location: 'getUseSystemScreensharePicker' },
                    {
                        disable: !e,
                        autoTrackExposure: !1
                    }
                ).useSystemPickerInModalByDefault;
        return e && (null != n ? n : r);
    }
    supportsSystemScreensharePicker() {
        let e = ek.supports(eg.AN.NATIVE_SCREENSHARE_PICKER);
        return F.Z.getCurrentConfig(
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
        return eJ;
    }
    getSpeakingWhileMuted() {
        return e$;
    }
    supportsScreenSoundshare() {
        return (0, $.isMac)() ? ek.supports(eg.AN.SOUNDSHARE) && v().satisfies(null === C.Z || void 0 === C.Z ? void 0 : C.Z.os.release, eh.yG) && tT() : (0, $.isWindows)() ? ek.supports(eg.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, $.isLinux)() && ek.supports(eg.AN.SCREEN_SOUNDSHARE);
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eg.Yn.DEFAULT,
            n = this.supports(eg.AN.VIDEO)
                ? [
                      {
                          rid: '100',
                          type: e === eg.Yn.DEFAULT ? eg.Tr.VIDEO : eg.Tr.SCREEN,
                          quality: eg.y7
                      }
                  ]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === eg.Yn.DEFAULT || this.goLiveSimulcastEnabled()) &&
                n.push({
                    rid: '50',
                    type: e === eg.Yn.DEFAULT ? eg.Tr.VIDEO : eg.Tr.SCREEN,
                    quality: eg.LD
                }),
            n
        );
    }
    getSupportedSecureFramesProtocolVersion(e) {
        var n;
        let r = ek.getSupportedSecureFramesProtocolVersion(),
            i = j.m.getCurrentConfig({ location: 'MediaEngineStore' }),
            a =
                null != e
                    ? j.N.getCurrentConfig({
                          guildId: e,
                          location: 'MediaEngineStore'
                      })
                    : null,
            o = i.canSupportDaveProtocol || (null == a ? void 0 : a.canSupportDaveProtocol),
            s = Math.max(i.protocolVersionFloor, null !== (n = null == a ? void 0 : a.protocolVersionFloor) && void 0 !== n ? n : 0),
            l = r > 5 && 114 === r;
        return o && (r >= s || l) ? r : 0;
    }
    hasClipsSource() {
        return null != s;
    }
}
ev(n$, 'displayName', 'MediaEngineStore'),
    (i = new n$(A.Z, {
        VOICE_CHANNEL_SELECT: nL,
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
        AUDIO_SET_SIDECHAIN_COMPRESSION: nr,
        AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: ni,
        AUDIO_SET_LOOPBACK: no,
        AUDIO_SET_NOISE_SUPPRESSION: nl,
        AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nu,
        AUDIO_SET_NOISE_CANCELLATION: nc,
        AUDIO_SET_DISPLAY_SILENCE_WARNING: np,
        AUDIO_SET_DEBUG_LOGGING: nh,
        MEDIA_ENGINE_SET_VIDEO_HOOK: n_,
        MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: nm,
        MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: ng,
        AUDIO_SET_ATTENUATION: nE,
        AUDIO_SET_QOS: nv,
        MEDIA_ENGINE_DEVICES: t9,
        AUDIO_VOLUME_CHANGE: ne,
        AUDIO_RESET: ny,
        AUDIO_INPUT_DETECTED: nb,
        AUDIO_SET_SUBSYSTEM: nR,
        MEDIA_ENGINE_SET_AUDIO_ENABLED: nM,
        MEDIA_ENGINE_SET_VIDEO_ENABLED: nk,
        MEDIA_ENGINE_PERMISSION: nP,
        MEDIA_ENGINE_SET_GO_LIVE_SOURCE: nG,
        MEDIA_ENGINE_SET_VIDEO_DEVICE: t7,
        MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nd,
        MEDIA_ENGINE_INTERACTION_REQUIRED: t8,
        USER_SETTINGS_MODAL_INIT: nZ,
        USER_SETTINGS_MODAL_SET_SECTION: nZ,
        CERTIFIED_DEVICES_SET: nF,
        RPC_APP_CONNECTED: nx,
        RPC_APP_DISCONNECTED: nw,
        OVERLAY_INITIALIZE: tF,
        MEDIA_ENGINE_SET_OPEN_H264: nV,
        MEDIA_ENGINE_SET_HARDWARE_ENCODING: nf,
        APP_STATE_UPDATE: nH,
        SET_CHANNEL_BITRATE: nY,
        SET_VAD_PERMISSION: nI,
        SET_NATIVE_PERMISSION: nT,
        SET_CHANNEL_VIDEO_QUALITY_MODE: nz,
        MEDIA_ENGINE_SET_AEC_DUMP: nj,
        CHANNEL_DELETE: nW,
        MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: nK,
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: nq,
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: nQ,
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: nX,
        USER_SETTINGS_PROTO_UPDATE: tz,
        CLIPS_INIT: nU,
        CLIPS_SETTINGS_UPDATE: nB,
        MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: nJ
    })),
    (n.Z = i);
