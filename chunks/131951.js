let i, a, s, o;
var l,
    u,
    c = r(47120);
var d = r(571269);
var f = r(298267);
var _ = r(724458);
var h = r(773603);
var p = r(653041);
r(337869);
var m = r(512722),
    g = r.n(m),
    E = r(392711),
    v = r.n(E),
    I = r(553813),
    T = r.n(I),
    b = r(404097),
    y = r(442837),
    S = r(46973),
    A = r(433517),
    N = r(846519),
    C = r(570140),
    R = r(579806),
    O = r(887278),
    D = r(547727),
    L = r(435064),
    x = r(779618),
    w = r(710845),
    P = r(535911),
    M = r(353926),
    k = r(646047),
    U = r(594190),
    B = r(502286),
    G = r(12898),
    Z = r(294473),
    F = r(706629),
    V = r(166884),
    j = r(998594),
    H = r(14457),
    Y = r(529558),
    W = r(111672),
    K = r(441167),
    z = r(338336),
    q = r(751571),
    Q = r(725380),
    X = r(581883),
    J = r(626135),
    $ = r(12647),
    ee = r(70956),
    et = r(358085),
    en = r(747268),
    er = r(960048),
    ei = r(998502),
    ea = r(13140),
    es = r(314897),
    eo = r(967368),
    el = r(463395),
    eu = r(592125),
    ec = r(858340),
    ed = r(19780),
    ef = r(704806),
    e_ = r(594174),
    eh = r(631768),
    ep = r(981631),
    em = r(70722),
    eg = r(761274),
    eE = r(526761),
    ev = r(65154),
    eI = r(388032);
function eT(e, n, r) {
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
let eb = new w.Z('MediaEngineStore');
!(function (e) {
    (e[(e.DETACHED = 0)] = 'DETACHED'), (e[(e.WAITING = 1)] = 'WAITING'), (e[(e.ATTACHED = 2)] = 'ATTACHED'), (e[(e.STARTED = 3)] = 'STARTED'), (e[(e.PLAYING = 4)] = 'PLAYING'), (e[(e.SILENCE = 5)] = 'SILENCE');
})(l || (l = {}));
let ey = 'MediaEngineStore',
    eS = 4,
    eA = 1,
    eN = 1,
    eC = 1,
    eR = 1,
    eO = 2,
    eD = {
        left: 1,
        right: 1
    },
    eL = 500,
    ex = 5 * ee.Z.Millis.SECOND,
    ew = -60,
    eP = 100,
    eM = '>=21.0.0',
    ek = 2 * ee.Z.Millis.SECOND;
function eU() {
    return {
        mode: ep.pM4.VOICE_ACTIVITY,
        modeOptions: {
            threshold: ew,
            autoThreshold: et.isPlatformEmbedded || __OVERLAY__,
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
        inputVolume: ev.Qx,
        outputVolume: ev.Qx,
        inputDeviceId: ev.w5,
        outputDeviceId: ev.w5,
        videoDeviceId: ev.w5,
        qos: !1,
        qosMigrated: !1,
        videoHook: eB.supports(ev.AN.VIDEO_HOOK),
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
let eB = (0, S.Mt)((0, S.jj)());
eb.enableNativeLogger(!0);
let eG = {},
    eZ = new Set([ev.Yn.DEFAULT]),
    eF = eB.supports(ev.AN.AUTO_ENABLE),
    eV = !1,
    ej = ev.Yn.STREAM,
    eH = { [ev.w5]: tw('No Input Devices') },
    eY = { [ev.w5]: tw('No Output Devices') },
    eW = { [ev.w5]: tw('No Video Devices') },
    eK = !1,
    ez = !1,
    eq = !1,
    eQ = !1,
    eX = !1,
    eJ = ev.Av,
    e$ = !1,
    e0 = !1,
    e1 = !1,
    e2 = new N.V7(),
    e3 = !1,
    e4 = !1,
    e6 = null,
    e5 = !1,
    e7 = !1,
    e8 = !1,
    e9 = !1,
    te = !1,
    tt = null,
    tn = !1,
    tr = !1,
    ti = !1;
q.Z.hasPermission(eg.Eu.AUDIO, { showAuthorizationError: !1 }), q.Z.hasPermission(eg.Eu.CAMERA, { showAuthorizationError: !1 });
let ta = !1,
    ts = new Set(),
    to = ta,
    tl = !1,
    tu = {},
    tc = null,
    td = !0,
    tf = {},
    t_ = 5 * ee.Z.Millis.SECOND;
function th() {
    var e, n;
    return null !== (n = null === (e = e_.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== n && n ? 'always' : en.Z === b.R.CANARY ? 'permittedDevicesOnly' : 'never';
}
function tp() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.DEFAULT,
        n = eG[e];
    return null == n && ((n = eU()), (eG[e] = n)), n;
}
function tm(e) {
    let n = tp(e.context);
    e.setInputMode(n.mode, {
        vadThreshold: n.modeOptions.threshold,
        vadAutoThreshold: n.modeOptions.autoThreshold,
        vadUseKrisp: n.modeOptions.vadUseKrisp && nN(),
        vadLeading: n.modeOptions.vadLeading,
        vadTrailing: n.modeOptions.vadTrailing,
        pttReleaseDelay: n.modeOptions.delay
    });
}
function tg(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ev.Qx;
    return v().clamp(e, 0, n);
}
function tE(e) {
    let n = tp(e.context),
        r = !eF || n.mute || n.deaf;
    e.context === ev.Yn.DEFAULT ? (r = r || eK || ez || eq || !q.Z.didHavePermission(eg.Eu.AUDIO)) : e.context === ev.Yn.STREAM && (r = !0), e.setSelfMute(r), e.setSelfDeaf(n.deaf), e.context === ev.Yn.DEFAULT && D.Z.updateNativeMute();
}
function tv(e) {
    if (e !== ej) null != s && eB.setGoLiveSource(null, ej), (ej = e);
}
function tI() {
    var e, n, r;
    let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
        l = s;
    if (((null == l ? void 0 : l.desktopSource) != null && l.desktopSource.id !== (null == o ? void 0 : null === (e = o.desktopSource) || void 0 === e ? void 0 : e.id) && (null != l.desktopSource.soundshareId && (0, et.isWindows)() && O.pn(l.desktopSource.soundshareId), eB.setGoLiveSource(null, ej)), (null == l ? void 0 : l.cameraSource) != null && (l.cameraSource.videoDeviceGuid !== (null == o ? void 0 : null === (n = o.cameraSource) || void 0 === n ? void 0 : n.videoDeviceGuid) || l.cameraSource.audioDeviceGuid !== (null == o ? void 0 : null === (r = o.cameraSource) || void 0 === r ? void 0 : r.audioDeviceGuid)) && eB.setGoLiveSource(null, ej), (eX || a) && ((eJ = (eX = a) ? tM(eW, tp().videoDeviceId) : ev.Av), eB.setVideoInputDevice(eJ)), (s = o), null != o)) {
        let e = {
            resolution: o.quality.resolution,
            frameRate: o.quality.frameRate
        };
        if (null != o.desktopSource) {
            let n = th(),
                r = tp().videoHook;
            eB.setGoLiveSource(
                {
                    desktopDescription: {
                        id: o.desktopSource.id,
                        soundshareId: o.desktopSource.soundshareId,
                        useVideoHook: r,
                        useGraphicsCapture: tS(),
                        useLoopback: i.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: tA(),
                        videoHookStaleFrameTimeoutMs: eL,
                        graphicsCaptureStaleFrameTimeoutMs: ex,
                        hdrCaptureMode: n
                    },
                    quality: e
                },
                ej
            );
        }
        null != o.cameraSource &&
            eB.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: o.cameraSource.audioDeviceGuid
                    },
                    quality: e
                },
                ej
            );
    }
}
function tT(e, n, r, i) {
    var a;
    let s = null !== (a = null == e ? void 0 : e.soundshareSession) && void 0 !== a ? a : '';
    null == tf[s] && (tf[s] = new Set());
    let o = null != n && !tf[s].has(n);
    o && tf[s].add(n),
        (null == n || o) &&
            J.default.track(ep.rMx.SOUNDSHARE_FAILED, {
                soundshare_failure_code: n,
                soundshare_failure_reason: r,
                soundshare_failure_will_retry: i,
                ...(0, B.Z)(e)
            });
}
function tb(e) {
    let n = tp(),
        r = n.inputDeviceId;
    if ((e.setEchoCancellation(el.Z.hasEchoCancellation(r) || n.echoCancellation), e.setNoiseSuppression(el.Z.hasNoiseSuppression(r) || n.noiseSuppression), e.setAutomaticGainControl(el.Z.hasAutomaticGainControl(r) || n.automaticGainControl), e.setNoiseCancellation(n.noiseCancellation), (0, et.isWeb)())) {
        let r = n.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(r);
    }
}
function ty() {
    eB.on(S.aB.Connection, (e) => {
        var n, r, a, o;
        tm(e), tE(e), tb(e);
        let l = tp();
        e.setAttenuation(l.attenuation, l.attenuateWhileSpeakingSelf, l.attenuateWhileSpeakingOthers), e.setQoS(l.qos), e.setExperimentalEncoders(l.experimentalEncoders), e.setHardwareH264(null === (n = l.hardwareEncoding) || void 0 === n || n), e.setSoftwareH264(null === (r = l.openH264) || void 0 === r || r);
        let u = ed.Z.getGuildId(),
            {
                muteBeforeProcessing: c,
                pttBeforeProcessing: d,
                skipEncode: f
            } = (null != u ? F.Z : Z.Z).getCurrentConfig(
                {
                    location: 'setupMediaEngine',
                    ...(null != u && { guildId: u })
                },
                { autoTrackExposure: !0 }
            );
        c && e.setExperimentFlag(ev.V8.MUTE_BEFORE_PROCESSING, !0), d && e.setExperimentFlag(ev.V8.PTT_BEFORE_PROCESSING, !0), f && e.setExperimentFlag(ev.V8.SKIP_ENCODE, !0);
        let _ = !1,
            h = !0;
        e.setExperimentFlag(ev.V8.RESET_DECODER_ON_ERRORS, !0), _ && e.setExperimentFlag(ev.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0), h && e.setExperimentFlag(ev.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
        if (e.context === ev.Yn.STREAM) {
            let { simulcastEnabled: n, lqStreamBitrate: r } = V.Z.getConfig();
            e.configureGoLiveSimulcast(n, r);
        }
        if (((0, et.isWindows)() ? ((null == tc ? void 0 : tc.startsWith('NVIDIA')) ? e.setExperimentFlag(ev.V8.SIGNAL_AV1, !0) : (null == tc ? void 0 : tc.startsWith('AMD')) && parseInt(null !== (o = null === (a = tc.match(/\d+/)) || void 0 === a ? void 0 : a.at(0)) && void 0 !== o ? o : '0', 10) >= 9000 && G.Z.getCurrentConfig({ location: 'setupMediaEngine' }, { autoTrackExposure: !0 }).signalAV1Support ? e.setExperimentFlag(ev.V8.SIGNAL_AV1, !0) : e.setExperimentFlag(ev.V8.SIGNAL_AV1_DECODE, !0)) : ((0, et.isMac)() || (0, et.isLinux)()) && e.setExperimentFlag(ev.V8.SIGNAL_AV1_DECODE, !0), (0, et.isWindows)() && e.setExperimentFlag(ev.V8.SIGNAL_AV1_HARDWARE_DECODE, !0), eB.setHasFullbandPerformance((0, P.Z)()), e.setRemoteAudioHistory(0), (0, x.Z)(i))) {
            let n = L.Z.getSettings();
            e.setExperimentFlag(ev.V8.STREAMER_CLIP, n.clipsEnabled);
            let { enableViewerClipping: r } = K.Z.getCurrentConfig({ location: 'f627ab_15' }, { autoTrackExposure: !1 });
            e.setViewerSideClip(r), e.setClipsKeyFrameInterval(ev.ux);
        }
        for (let n of ((l = tp(e.context)), e.setPostponeDecodeLevel(eP), Object.keys(l.localMutes))) n !== es.default.getId() && e.setLocalMute(n, l.localMutes[n]);
        for (let n of Object.keys(l.localVolumes)) n !== es.default.getId() && e.setLocalVolume(n, l.localVolumes[n]);
        for (let n of Object.keys(l.localPans)) {
            let r = l.localPans[n];
            e.setLocalPan(n, r.left, r.right);
        }
        for (let n of Object.keys(l.disabledLocalVideos)) e.setLocalVideoDisabled(n, l.disabledLocalVideos[n]);
        e.on(S.Sh.Speaking, (n, r) => {
            C.Z.dispatch({
                type: 'SPEAKING',
                context: e.context,
                userId: n,
                speakingFlags: r
            });
        }),
            e.context === ev.Yn.DEFAULT &&
                ((e0 = !1),
                (e1 = !1),
                e.on(S.Sh.SpeakingWhileMuted, () => {
                    (e0 = !0),
                        (e1 = !0),
                        i.emitChange(),
                        e2.stop(),
                        e2.start(ek, () => {
                            (e1 = !1), i.emitChange();
                        });
                })),
            e.on(S.Sh.DesktopSourceEnd, () => {
                C.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                    settings: { context: e.context }
                });
            }),
            e.on(S.Sh.SoundshareAttached, () => {
                (null == s ? void 0 : s.desktopSource) != null && J.default.track(ep.rMx.SOUNDSHARE_ATTACHED, (0, B.Z)(null == s ? void 0 : s.desktopSource));
            }),
            e.on(S.Sh.SoundshareFailed, (e) => {
                let { failureCode: n, failureReason: r, willRetry: i } = e;
                tT(null == s ? void 0 : s.desktopSource, n, r, i);
            }),
            e.on(S.Sh.SoundshareSpeaking, () => {
                (null == s ? void 0 : s.desktopSource) != null && (J.default.track(ep.rMx.SOUNDSHARE_TRANSMITTING, (0, B.Z)(null == s ? void 0 : s.desktopSource)), null != ec.Z.getHookError(ep.K3D.SOUND) && C.Z.wait(() => C.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
            });
        let p = new N.V7();
        e.on(S.Sh.SoundshareTrace, (e) => {
            switch (e.type) {
                case 'soundshare_attach_requested':
                    p.start(t_, () => {
                        C.Z.dispatch({
                            type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
                            errorMessage: 'Sound Hook Failed'
                        });
                    });
                    break;
                case 'soundshare_recv_failed':
                    let n = e.reason,
                        r = e.code,
                        i = e.retry;
                    (null == s ? void 0 : s.desktopSource) != null &&
                        (tT(null == s ? void 0 : s.desktopSource, r, n, i),
                        !i &&
                            (p.stop(),
                            C.Z.wait(() =>
                                C.Z.dispatch({
                                    type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
                                    errorMessage: n,
                                    errorCode: r
                                })
                            )));
                    break;
                case 'soundshare_state_transition':
                    4 === e.newState && (p.stop(), C.Z.wait(() => C.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
            }
        }),
            e.on(S.Sh.InteractionRequired, (e) => {
                C.Z.dispatch({
                    type: 'MEDIA_ENGINE_INTERACTION_REQUIRED',
                    required: e
                });
            }),
            e.on(S.Sh.VideoHookInitialize, (e, n, r, i, a, o) => {
                (null == s ? void 0 : s.desktopSource) != null &&
                    J.default.track(ep.rMx.VIDEOHOOK_INITIALIZED, {
                        backend: e,
                        format: n,
                        framebuffer_format: r,
                        sample_count: i,
                        success: a,
                        reinitialization: o,
                        ...(0, B.Z)(null == s ? void 0 : s.desktopSource)
                    });
            }),
            e.on(S.Sh.NoiseCancellationError, (e) => {
                eb.warn('noisecancellererror event: '.concat(e)),
                    (tn = !0),
                    J.default.track(ep.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    C.Z.dispatch({
                        type: 'AUDIO_SET_NOISE_SUPPRESSION',
                        enabled: !0
                    }),
                    C.Z.dispatch({
                        type: 'AUDIO_SET_NOISE_CANCELLATION',
                        enabled: !1
                    }),
                    C.Z.dispatch({
                        type: 'MEDIA_ENGINE_NOISE_CANCELLATION_ERROR',
                        code: e
                    });
            }),
            e.on(S.Sh.VoiceActivityDetectorError, (e) => {
                eb.warn('voiceactivitydetectorerror event: '.concat(e)),
                    J.default.track(ep.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    C.Z.dispatch({
                        type: 'AUDIO_SET_MODE',
                        context: ev.Yn.DEFAULT,
                        mode: ep.pM4.VOICE_ACTIVITY,
                        options: {
                            ...tp(ev.Yn.DEFAULT).modeOptions,
                            vadUseKrisp: !1
                        }
                    }),
                    C.Z.dispatch({
                        type: 'MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR',
                        code: e
                    });
            }),
            e.on(S.Sh.SdpError, (e, n, r, i) => {
                en.Z === b.R.CANARY &&
                    J.default.track(ep.rMx.SDP_ERROR, {
                        operation: e,
                        error: n,
                        type: r,
                        sdp: i
                    });
            }),
            e.on(S.Sh.VideoState, (n) => {
                C.Z.dispatch({
                    type: 'MEDIA_ENGINE_VIDEO_STATE_CHANGED',
                    videoState: n,
                    context: e.context
                });
            }),
            e.on(S.Sh.Destroy, () => {
                p.stop();
            }),
            e.setBitRate(eo.Z.bitrate),
            e.applyVideoQualityMode(eh.Z.mode);
    }),
        eB.on(S.aB.DeviceChange, (e, n, r) => {
            C.Z.dispatch({
                type: 'MEDIA_ENGINE_DEVICES',
                inputDevices: e,
                outputDevices: n,
                videoDevices: r
            });
        }),
        eB.on(S.aB.VolumeChange, (e, n) => {
            C.Z.dispatch({
                type: 'AUDIO_VOLUME_CHANGE',
                inputVolume: e,
                outputVolume: n
            });
        }),
        eB.on(S.aB.DesktopSourceEnd, () => {
            C.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                settings: null
            });
        }),
        eB.on(S.aB.AudioPermission, (e) => {
            (ti = !0),
                C.Z.dispatch({
                    type: 'MEDIA_ENGINE_PERMISSION',
                    kind: 'audio',
                    granted: e
                });
        }),
        eB.on(S.aB.VideoPermission, (e) => {
            C.Z.dispatch({
                type: 'MEDIA_ENGINE_PERMISSION',
                kind: 'video',
                granted: e
            });
        }),
        eB.on(S.aB.WatchdogTimeout, async () => {
            let e;
            try {
                await $.Z.submitLiveCrashReport({ message: { message: 'Voice Watchdog Timeout' } });
            } catch (n) {
                'number' == typeof n.status && (e = n.status);
            }
            eb.warn('Watchdog timeout, report submission status: '.concat(null != e ? e : 200)), J.default.track(ep.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        eB.on(S.aB.VideoInputInitialized, (e) => {
            J.default.track(ep.rMx.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * ee.Z.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: ed.Z.getMediaSessionId(),
                rtc_connection_id: ed.Z.getRTCConnectionId()
            });
        }),
        eB.on(S.aB.AudioInputInitialized, (e) => {
            J.default.track(ep.rMx.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * ee.Z.Millis.SECOND),
                rtc_connection_id: ed.Z.getRTCConnectionId()
            });
        }),
        eB.on(S.aB.ClipsRecordingRestartNeeded, () => {
            C.Z.dispatch({ type: 'CLIPS_RESTART' });
        }),
        eB.on(S.aB.ClipsInitFailure, (e, n) => {
            C.Z.wait(() => {
                C.Z.dispatch({
                    type: 'CLIPS_INIT_FAILURE',
                    errMsg: e,
                    applicationName: n
                });
            });
        }),
        eB.on(S.aB.ClipsRecordingEnded, (e, n) => {
            var r, i;
            (null == o ? void 0 : null === (r = o.desktopSource) || void 0 === r ? void 0 : r.id) === e && (null != n && (null == s ? void 0 : null === (i = s.desktopSource) || void 0 === i ? void 0 : i.soundshareId) !== n && O.pn(n), (o = null));
        }),
        eB.on(S.aB.NativeScreenSharePickerUpdate, (e) => {
            j.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerUpdate' }),
                C.Z.dispatch({
                    type: 'NATIVE_SCREEN_SHARE_PICKER_UPDATE',
                    existing: e
                });
        }),
        eB.on(S.aB.NativeScreenSharePickerCancel, (e) => {
            j.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerCancel' }),
                C.Z.dispatch({
                    type: 'NATIVE_SCREEN_SHARE_PICKER_CANCEL',
                    existing: e
                });
        }),
        eB.on(S.aB.NativeScreenSharePickerError, (e) => {
            j.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerError' }),
                C.Z.dispatch({
                    type: 'NATIVE_SCREEN_SHARE_PICKER_ERROR',
                    error: e
                });
        }),
        eB.on(S.aB.AudioDeviceModuleError, (e, n, r) => {
            J.default.track(ep.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                audio_device_module: e,
                code: n,
                device_name: r
            });
        }),
        eB.setOnVideoContainerResized((e, n, r) => {
            C.Z.wait(() =>
                C.Z.dispatch({
                    type: 'VIDEO_SIZE_UPDATE',
                    streamId: e,
                    width: n,
                    height: r
                })
            );
        }),
        tC.reset(),
        (0, ef.q)().then((e) => {
            null != e && (tc = e.gpu_brand);
        });
}
function tS() {
    return (0, et.isWindows)() && T().satisfies(null === R.Z || void 0 === R.Z ? void 0 : R.Z.os.release, em.nz);
}
function tA() {
    return (0, et.isMac)() && eB.supports(ev.AN.SCREEN_CAPTURE_KIT) && T().satisfies(null === R.Z || void 0 === R.Z ? void 0 : R.Z.os.release, em.C7);
}
function tN() {
    return (0, et.isWindows)() && eB.supports(ev.AN.AUTOMATIC_AUDIO_SUBSYSTEM) && eB.supports(ev.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH);
}
let tC = new (class {
    start() {
        !this.started && ((this.started = !0), eB.on(S.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            eB.removeListener(S.aB.Silence, this.handleSilence),
            C.Z.dispatch({
                type: 'AUDIO_INPUT_DETECTED',
                inputDetected: null
            }));
    }
    update() {
        let e = tp();
        !e5 && ed.Z.getState() === ep.hes.RTC_CONNECTED && e.mode === ep.pM4.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop();
    }
    reset() {
        this.stop(), this.update();
    }
    constructor() {
        eT(this, 'stateChangeTimeout', void 0),
            eT(this, 'noVoiceTimeout', 5000),
            eT(this, 'voiceTimeout', 1500),
            eT(this, 'started', !1),
            eT(this, 'handleSilence', (e) => {
                let n = !e;
                null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout),
                    (this.stateChangeTimeout = setTimeout(
                        () => {
                            (this.stateChangeTimeout = null),
                                this.started &&
                                    (C.Z.dispatch({
                                        type: 'AUDIO_INPUT_DETECTED',
                                        inputDetected: n
                                    }),
                                    e && (e7 = !0));
                        },
                        n ? this.voiceTimeout : this.noVoiceTimeout
                    ));
            });
    }
})();
function tR() {
    var e;
    let n = A.K.get('audio');
    null != n && (A.K.set(ey, { [ev.Yn.DEFAULT]: n }), A.K.remove('audio')),
        (eG = null !== (e = A.K.get(ey)) && void 0 !== e ? e : {}),
        v().each(eG, (e) => {
            if ((v().defaultsDeep(e, eU()), null != e.modeOptions && 'string' == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, ea.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== eS && ((e.vadUseKrispSettingVersion = eS), (e.modeOptions.vadUseKrisp = !0)), !e.qosMigrated && ((e.qosMigrated = !0), (e.qos = !1)), !e.vadThrehsoldMigrated)) {
                var n;
                (e.vadThrehsoldMigrated = !0), (null === (n = e.modeOptions) || void 0 === n ? void 0 : n.threshold) === -40 && (e.modeOptions.threshold = ew);
            }
            (0, et.isWeb)() ? e.ncUseKrispjsSettingVersion !== eN && ((e.ncUseKrispjsSettingVersion = eN), (e.noiseSuppression = !1), (e.noiseCancellation = !0)) : e.ncUseKrispSettingVersion !== eA && ((e.ncUseKrispSettingVersion = eA), (e.noiseSuppression = !1), (e.noiseCancellation = !0)), e.hardwareEnabledVersion !== eC && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = eC)), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
        }),
        tL();
}
function tO(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ev.Yn.DEFAULT,
        r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = tp(n);
    return Object.assign(i, e), !__OVERLAY__ && r && A.K.set(ey, eG), i;
}
function tD() {
    A.K.remove(ey);
    location.reload();
}
function tL() {
    var e, n, r;
    let i = tp();
    eB.setAudioInputDevice(i.inputDeviceId), eB.setAudioOutputDevice(i.outputDeviceId), tI(), eB.setInputVolume(i.inputVolume), eB.setOutputVolume(i.outputVolume), eB.setH264Enabled(null === (e = i.hardwareEncoding) || void 0 === e || e || i.openH264), eB.setAv1Enabled(null === (n = i.hardwareEncoding) || void 0 === n || n), eB.setH265Enabled(null === (r = i.hardwareEncoding) || void 0 === r || r), eB.setAecDump(i.aecDumpEnabled), eB.setSidechainCompression(i.sidechainCompression), eB.setSidechainCompressionStrength(i.sidechainCompressionStrength);
}
function tx() {
    !eF &&
        eB.enable().then(() =>
            C.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
                enabled: !0,
                unmute: !1
            })
        );
}
function tw(e) {
    return {
        id: ev.w5,
        index: 0,
        name: e,
        disabled: !0
    };
}
function tP(e, n) {
    if (0 === e.length) {
        let e = tw(n);
        return { [e.id]: e };
    }
    return v()(e)
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
function tM(e, n) {
    var r;
    let i = null !== (r = e[n]) && void 0 !== r ? r : v()(e).values().first();
    return null != i ? i.id : n;
}
function tk(e) {
    let n = eH;
    if (((eH = tP(e, eI.intl.string(eI.t['/QIjDA']))), !v().isEqual(eH, n))) {
        let e = tp(),
            n = tM(eH, e.inputDeviceId);
        eB.setAudioInputDevice(n);
    }
}
function tU(e) {
    let n = eY;
    if (((eY = tP(e, eI.intl.string(eI.t.xlUg0t))), !v().isEqual(eY, n))) {
        let e = tp(),
            n = tM(eY, e.outputDeviceId);
        eB.setAudioOutputDevice(n);
    }
}
function tB(e) {
    e4 = e.length > 0;
    let n = eW;
    if (((eW = tP(e, eI.intl.string(eI.t.WKWARU))), eX && !v().isEqual(eW, n))) {
        var r;
        let e = void 0 !== eW[eJ],
            i = eJ === ev.w5 && (null === (r = n[ev.w5]) || void 0 === r ? void 0 : r.disabled);
        tI(e || i);
    }
}
function tG() {
    var e, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        i =
            null !== (e = X.Z.settings.audioContextSettings) && void 0 !== e
                ? e
                : {
                      user: {},
                      stream: {}
                  };
    for (let e of Object.keys(i)) {
        let a = e === eE.u0.USER ? ev.Yn.DEFAULT : ev.Yn.STREAM,
            s = a === ev.Yn.STREAM ? ev.Yh : ev.Qx,
            o = null !== (n = i[e]) && void 0 !== n ? n : {},
            { localMutes: l, localVolumes: u } = tp(a);
        for (let [e, n] of Object.entries(o))
            null == (0, Q.Ky)(a, e) &&
                (n.muted ? (l[e] = !0) : delete l[e],
                n.volume !== s ? (u[e] = n.volume) : delete u[e],
                eB.eachConnection((r) => {
                    r.setLocalVolume(e, n.volume), r.setLocalMute(e, n.muted);
                }, a));
        if (r)
            for (let e of new Set([...Object.keys(l), ...Object.keys(u)]))
                null == o[e] &&
                    (delete l[e],
                    delete u[e],
                    eB.eachConnection((n) => {
                        n.setLocalVolume(e, s), n.setLocalMute(e, !1);
                    }, a));
        tO(
            {
                localMutes: l,
                localVolumes: u
            },
            a
        );
    }
}
function tZ(e) {
    if (null == i)
        return (
            eb.info('Error: trying to get soundshare id before MediaEngineStore is instantiated.'),
            {
                soundshareId: null,
                soundshareSession: ''
            }
        );
    {
        let n = i.getExperimentalSoundshare() ? e : $.Z.getAudioPid(e),
            r = '';
        return (
            null != n && (r = $.Z.generateSessionFromPid(n)),
            {
                soundshareId: n,
                soundshareSession: r
            }
        );
    }
}
function tF(e, n) {
    (0, et.isWindows)() &&
        O.YT(e, { soundshare_session: n }).then((n) => {
            null != n &&
                !U.ZP.shouldContinueWithoutElevatedProcessForPID(e) &&
                C.Z.wait(() => {
                    C.Z.dispatch({
                        type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
                        errorMessage: n
                    });
                });
        });
}
function tV(e) {
    (a = e.sessionId),
        (eK = !1),
        (eQ = !1),
        !(0, et.isWeb)() &&
            W.Z.subscribe({ location: 'handleConnectionOpen' }, (e) => {
                let n = tp();
                !e.sidechainAvailable && n.sidechainCompression ? (tO({ sidechainCompressionSettingVersion: 0 }), no(!1)) : e.sidechainAvailable && n.sidechainCompressionSettingVersion < eR && (tO({ sidechainCompressionSettingVersion: eR }), no(e.sidechainEnabled));
            });
    let n = tp();
    tN() && (n.automaticAudioSubsystem && nx(), n.audioSubsystemSettingVersion < eO && (tO({ audioSubsystemSettingVersion: eO }), !n.automaticAudioSubsystem && eB.getAudioSubsystem() !== ev.iA.LEGACY && nL(ev.iA.AUTOMATIC))), tG();
}
function tj(e) {
    let { mediaEngineState: n } = e;
    (eG = n.settingsByContext), (eH = n.inputDevices), (eY = n.outputDevices), (tu = n.appSupported), (te = n.krispModuleLoaded), (ej = n.goLiveContext);
}
function tH() {
    a = null;
}
function tY(e) {
    switch (e.state) {
        case ep.hes.CONNECTING:
            tx();
            break;
        case ep.hes.RTC_CONNECTING:
            (e5 = !1), (e7 = !1);
            break;
        case ep.hes.RTC_CONNECTED:
            tI();
            break;
        case ep.hes.DISCONNECTED:
            t0(), t1();
    }
    tC.update();
}
function tW(e) {
    let { voiceStates: n } = e;
    return n.reduce((e, n) => (a === n.sessionId ? ((eK = n.mute || n.suppress), (eQ = n.deaf), eB.eachConnection(tE), tI(!(null != n.guildId && null != n.channelId && null != tt && tt !== n.channelId) && eX), (tt = n.channelId), !0) : (!__OVERLAY__ && n.userId === es.default.getId() && null == ed.Z.getChannelId() && tI(!1, null), e)), !1);
}
function tK(e) {
    let { mute: n } = e;
    (ez = n), eB.eachConnection(tE);
}
function tz(e) {
    let { context: n, skipMuteUnmuteSoundEffect: r } = e,
        { mute: i, deaf: a } = tp(n);
    if (n === ev.Yn.DEFAULT && (q.Z.requestPermission(eg.Eu.AUDIO), eq)) return !1;
    !(i = !a && !i) && (a = !1),
        r && (e$ = !0),
        tO(
            {
                mute: i,
                deaf: a
            },
            n
        ),
        eB.eachConnection(tE);
}
function tq(e) {
    let { context: n, mute: r } = e;
    tO({ mute: r }, n), eB.eachConnection(tE);
}
function tQ(e) {
    let {
        settings: { type: n },
        local: r,
        wasSaved: i
    } = e;
    if (n !== eE.yP.PRELOADED_USER_SETTINGS || r || null != i) return !1;
    tG(!0);
}
function tX(e) {
    let { context: n } = e;
    tO({ deaf: !tp(n).deaf }, n), eB.eachConnection(tE);
}
function tJ(e) {
    let { context: n, userId: r } = e;
    if (r === es.default.getId()) return;
    let { localMutes: i } = tp(n);
    i[r] ? delete i[r] : (i[r] = !0), tO({ localMutes: i }, n), eB.eachConnection((e) => e.setLocalMute(r, i[r] || !1), n);
}
function t$(e) {
    var n, r, i, a, s, o, l;
    let { context: u, userId: c, videoToggleState: d, persist: f, isAutomatic: _ } = e;
    g()(!(f && _), 'These are not allowed to both be true.');
    let h = d === ep.ZUi.DISABLED,
        { disabledLocalVideos: p } = tp(u),
        m = null !== (n = p[c]) && void 0 !== n && n,
        E = ts.has(c),
        v = d === ep.ZUi.AUTO_ENABLED || d === ep.ZUi.MANUAL_ENABLED;
    eb.info('disableVideo='.concat(h, ' currentlyDisabled=').concat(m, ' currentlyAutoDisabled=').concat(E, ', isVideoShown=').concat(v)), g()(!(E && !m), 'If you are auto-disabled, then you are also disabled.');
    let I = h !== m,
        T = u === ev.Yn.DEFAULT,
        b = _ && I && T,
        y = f && I && T;
    eb.info('changed='.concat(I, ' isDefaultContext=').concat(T, ' isUpdateCausedByVideoHealthManager=').concat(b, ' isManualToggleByUser=').concat(y));
    let { videoToggleStateMap: S } = tp(u);
    if ((S[c] === ep.ZUi.AUTO_PROBING && d === ep.ZUi.AUTO_ENABLED && (0, z.Z)(c, h ? ev.fC.AUTO_DISABLE : ev.fC.AUTO_ENABLE, v), (S[c] = d), tO({ videoToggleStateMap: S }, u, f), d === ep.ZUi.AUTO_PROBING ? null === (r = ed.Z.getRTCConnection()) || void 0 === r || r.pauseStatsCollectionForUser(c, !0) : null === (i = ed.Z.getRTCConnection()) || void 0 === i || i.pauseStatsCollectionForUser(c, !1), !to && (eb.info('isAutoDisableAllowed='.concat(to, ' - disabling VideoHealthManager')), null === (s = ed.Z.getRTCConnection()) || void 0 === s || null === (a = s.getVideoHealthManager()) || void 0 === a || a.disable()), b)) {
        if ((!h && !E) || (h && !to)) return;
        (0, z.Z)(c, h ? ev.fC.AUTO_DISABLE : ev.fC.AUTO_ENABLE, v), h ? ts.add(c) : ts.delete(c);
    } else y && (E && !h ? (eb.info('disallowing auto-disable for this session because of manual override by user'), (to = !1), null === (l = ed.Z.getRTCConnection()) || void 0 === l || null === (o = l.getVideoHealthManager()) || void 0 === o || o.disable(), (0, z.Z)(c, ev.fC.MANUAL_REENABLE, v)) : (0, z.Z)(c, h ? ev.fC.MANUAL_DISABLE : ev.fC.MANUAL_ENABLE, v));
    T && !h && ts.delete(c),
        h ? (p[c] = !0) : delete p[c],
        tO({ disabledLocalVideos: p }, u, f),
        eB.eachConnection((e) => {
            var n;
            return e.setLocalVideoDisabled(c, null !== (n = p[c]) && void 0 !== n && n);
        }, u);
}
function t0() {
    if (0 === ts.size) return;
    let e = ev.Yn.DEFAULT,
        { disabledLocalVideos: n } = tp(e);
    ts.forEach((r) => {
        g()(n[r], 'If you are auto-disabled, then you are also disabled.'), delete n[r], eB.eachConnection((e) => e.setLocalVideoDisabled(r, !1), e);
    }),
        ts.clear(),
        tO({ disabledLocalVideos: n }, e, !1);
}
function t1() {
    let e = ev.Yn.DEFAULT,
        { videoToggleStateMap: n } = tp(e);
    for (let [e, r] of Object.entries(n)) r === ep.ZUi.AUTO_PROBING && delete n[e];
    tO({ videoToggleStateMap: n }, e, !1);
}
function t2(e) {
    let { context: n, userId: r, volume: i } = e;
    if (r === es.default.getId()) return;
    let a = n === ev.Yn.STREAM ? ev.Yh : ev.Qx,
        { localVolumes: s } = tp(n);
    i === a ? delete s[r] : (s[r] = i), tO({ localVolumes: s }, n), eB.eachConnection((e) => e.setLocalVolume(r, i), n);
}
function t3(e) {
    let { context: n, userId: r, left: i, right: a } = e,
        { localPans: s } = tp(n);
    (s[r] = {
        left: i,
        right: a
    }),
        tO({ localPans: s }, n),
        eB.eachConnection((e) => e.setLocalPan(r, i, a), n);
}
function t4(e) {
    let { context: n, mode: r, options: i } = e;
    tO(
        {
            mode: r,
            modeOptions: i
        },
        n
    ),
        eB.eachConnection(tm),
        tC.update();
}
function t6(e) {
    let { volume: n } = e;
    tO({ inputVolume: tg(n) }), eB.setInputVolume(n);
}
function t5(e) {
    let { volume: n } = e;
    tO({ outputVolume: n }), eB.setOutputVolume(n);
}
function t7(e) {
    let { id: n } = e;
    tO({ inputDeviceId: (n = tM(eH, n)) }), eB.setAudioInputDevice(n);
}
function t8(e) {
    let { id: n } = e;
    tO({ outputDeviceId: (n = tM(eY, n)) }), eB.setAudioOutputDevice(n);
}
function t9(e) {
    let { id: n } = e;
    tO({ videoDeviceId: (n = tM(eW, n)) }), tI();
}
function ne(e) {
    return eV !== e.required && ((eV = e.required), !e.required && eB.interact(), !0);
}
function nt(e) {
    let { inputDevices: n, outputDevices: r, videoDevices: i } = e;
    tk(n), tU(r), tB(i);
}
function nn(e) {
    let { inputVolume: n, outputVolume: r } = e;
    tO({
        inputVolume: tg(n),
        outputVolume: r
    });
}
function nr(e) {
    let n = tp();
    J.default.track(ep.rMx.VOICE_PROCESSING, {
        echo_cancellation: n.echoCancellation,
        noise_cancellation: n.noiseCancellation,
        noise_suppression: n.noiseSuppression,
        automatic_gain_control: n.automaticGainControl,
        location: e
    });
}
function ni(e) {
    let n = tO({ echoCancellation: e.enabled });
    eB.eachConnection((e) => e.setEchoCancellation(n.echoCancellation)), nu(), nr(e.location);
}
function na(e) {
    no(e.enabled);
}
function ns(e) {
    let n = tO({ sidechainCompressionStrength: e.strength });
    eB.setSidechainCompressionStrength(n.sidechainCompressionStrength);
}
function no(e) {
    let n = tO({ sidechainCompression: e });
    eB.setSidechainCompression(n.sidechainCompression);
}
function nl(e) {
    let { enabled: n } = e;
    return (tl = n), nu();
}
function nu() {
    let e = tp(),
        n = e.inputDeviceId,
        r = el.Z.hasEchoCancellation(n) || e.echoCancellation,
        i = el.Z.hasNoiseSuppression(n) || e.noiseSuppression,
        a = el.Z.hasAutomaticGainControl(n) || e.automaticGainControl,
        s = e.noiseCancellation;
    eB.setLoopback(tl, {
        echoCancellation: r,
        noiseSuppression: i,
        automaticGainControl: a,
        noiseCancellation: s
    });
}
function nc(e) {
    let n = tO({ noiseSuppression: e.enabled });
    eB.eachConnection((e) => e.setNoiseSuppression(n.noiseSuppression)), nu(), nr(e.location);
}
function nd(e) {
    let n = tO({ automaticGainControl: e.enabled });
    eB.eachConnection((e) => e.setAutomaticGainControl(n.automaticGainControl)), nu(), nr(e.location);
}
function nf(e) {
    let n = tO({ noiseCancellation: e.enabled });
    eB.eachConnection((e) => e.setNoiseCancellation(n.noiseCancellation)), nu(), nr(e.location);
}
function n_(e) {
    let n = tO({ experimentalEncoders: e.enabled });
    eB.eachConnection((e) => e.setExperimentalEncoders(n.experimentalEncoders));
}
function nh(e) {
    var n, r;
    let { enabled: i } = e,
        a = tO({ hardwareEncoding: i });
    eB.eachConnection((e) => {
        var n;
        return e.setHardwareH264(null === (n = a.hardwareEncoding) || void 0 === n || n);
    }),
        eB.setH264Enabled(a.hardwareEncoding || a.openH264),
        eB.setAv1Enabled(null === (n = a.hardwareEncoding) || void 0 === n || n),
        eB.setH265Enabled(null === (r = a.hardwareEncoding) || void 0 === r || r);
}
function np(e) {
    tO({ silenceWarning: e.enabled }), tC.update();
}
function nm(e) {
    eB.setDebugLogging(e.enabled);
}
function ng(e) {
    tO({ videoHook: e.enabled });
}
function nE(e) {
    tO({ experimentalSoundshare2: e.enabled });
}
function nv(e) {
    let { enabled: n } = e;
    tO({ useSystemScreensharePicker: n });
}
function nI(e) {
    let { attenuation: n, attenuateWhileSpeakingSelf: r, attenuateWhileSpeakingOthers: i } = e,
        a = tO({
            attenuation: n,
            attenuateWhileSpeakingSelf: r,
            attenuateWhileSpeakingOthers: i
        });
    eB.eachConnection((e) => e.setAttenuation(a.attenuation, a.attenuateWhileSpeakingSelf, a.attenuateWhileSpeakingOthers));
}
function nT(e) {
    let { enabled: n } = e;
    tO({ qos: n }), eB.eachConnection((e) => e.setQoS(n));
}
function nb() {
    tD();
}
function ny(e) {
    let { inputDetected: n } = e;
    (e6 = n), !e5 && e6 && ((e5 = !0), tC.update());
}
function nS(e) {
    let { hasPermission: n } = e,
        r = !n;
    if (r === eq) return !1;
    (eq = r), eB.eachConnection(tE);
}
function nA(e) {
    let { state: n, permissionType: r } = e,
        i = n === eg.PQ.ACCEPTED;
    switch (r) {
        case eg.Eu.AUDIO:
            (ti = !0), eB.eachConnection(tE);
            break;
        case eg.Eu.CAMERA:
            !i && eX && tI(!1);
            break;
        default:
            return !1;
    }
}
function nN() {
    return te || !1;
}
async function nC() {
    try {
        await ei.ZP.ensureModule('discord_krisp'), ei.ZP.requireModule('discord_krisp'), (te = !0), i.emitChange();
    } catch (n) {
        eb.warn('Failed to load Krisp module: '.concat(n.message)), er.Z.captureException(n);
        let e = ev.H3.INITIALIZED;
        if (n.message.includes(': ')) {
            let r = parseInt(n.message.substring(n.message.indexOf(': ') + 1));
            e = isNaN(r) || 0 === r ? ev.H3.INITIALIZED : r;
        }
        J.default.track(ep.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), tO({ noiseCancellation: !1 });
    } finally {
        e9 = !1;
    }
}
function nR() {
    return (0, et.isWindows)() || (0, et.isLinux)() || ((0, et.isMac)() && T().satisfies(null === R.Z || void 0 === R.Z ? void 0 : R.Z.os.release, eM));
}
function nO() {
    !nR() || __OVERLAY__ || e9 || te ? ((0, et.isWeb)() && eB.supports(ev.AN.NOISE_CANCELLATION) ? ((te = !0), i.emitChange()) : (0, et.isWeb)() && tO({ noiseCancellation: !1 })) : ((e9 = !0), nC());
}
function nD(e) {
    nL(e.subsystem);
}
function nL(e) {
    e === ev.iA.AUTOMATIC ? (tO({ automaticAudioSubsystem: !0 }), nx()) : (tO({ automaticAudioSubsystem: !1 }), eB.setAudioSubsystem(e));
}
function nx() {
    let { enabled: e } = H.I.getCurrentConfig({ location: 'interpretAutomaticAudioSubsystem' });
    e ? eB.queueAudioSubsystem(ev.iA.EXPERIMENTAL) : eB.queueAudioSubsystem(ev.iA.STANDARD);
}
function nw(e) {
    let { guildId: n, channelId: r, currentVoiceChannelId: i, video: a } = e;
    if ((i !== r && tI(a, null), null != n || null == r)) {
        e8 = !1;
        return;
    }
    if (e8) return;
    e8 = !0;
    let s = tp();
    (s.mute || s.deaf) &&
        (tO({
            deaf: !1,
            mute: !1
        }),
        eB.eachConnection(tE));
}
function nP(e) {
    let { application: n } = e;
    eZ.add(n.id);
}
function nM(e) {
    let { application: n } = e;
    eZ.delete(n.id);
}
function nk(e) {
    let { kind: n, granted: r } = e;
    if (!r)
        switch (n) {
            case 'audio':
                (eF = !1), eB.eachConnection(tE);
                break;
            case 'video':
                tI(!1);
        }
}
function nU(e) {
    (eF = e.enabled),
        e.unmute &&
            tO({
                mute: !1,
                deaf: !1
            }),
        eB.eachConnection(tE);
}
function nB(e) {
    let { enabled: n } = e;
    q.Z.requestPermission(eg.Eu.CAMERA), tI(n);
}
function nG(e) {
    let { sourceId: n, applicationName: r, quality: a } = e,
        s = L.Z.isDecoupledGameClippingEnabled(),
        l = L.Z.getSettings().decoupledClipsEnabled;
    if (!s || !l || null == R.Z) return;
    let u = null,
        c = null,
        d = $.Z.getPidFromDesktopSource(n);
    ({ soundshareId: u, soundshareSession: c } = tZ(d));
    let f = {
        desktopSource: {
            id: n,
            sourcePid: d,
            soundshareId: u,
            soundshareSession: c
        },
        quality: a
    };
    null != o && o.desktopSource.id !== f.desktopSource.id && (eB.setClipsSource(null), (0, et.isWindows)() && null != o.desktopSource.soundshareId && O.pn(o.desktopSource.soundshareId)), null != u && tF(u, c), (o = f);
    let _ = th(),
        h = tp().videoHook;
    eB.setClipsSource({
        desktopDescription: {
            id: o.desktopSource.id,
            soundshareId: o.desktopSource.soundshareId,
            useVideoHook: h,
            useGraphicsCapture: tS(),
            useLoopback: i.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: tA(),
            videoHookStaleFrameTimeoutMs: eL,
            graphicsCaptureStaleFrameTimeoutMs: ex,
            hdrCaptureMode: _
        },
        quality: a,
        applicationName: r
    });
}
function nZ(e) {
    let { settings: n } = e;
    !1 === n.decoupledClipsEnabled && ((o = null), eB.setClipsSource(null));
}
function nF(e) {
    var n, r, i, a;
    let { settings: s } = e;
    if ((null == s ? void 0 : s.desktopSettings) != null) {
        let e = null,
            i = null,
            { sourceId: a, sound: o } = s.desktopSettings,
            l = null !== (n = s.context) && void 0 !== n ? n : ev.Yn.DEFAULT,
            u =
                null !== (r = s.qualityOptions) && void 0 !== r
                    ? r
                    : {
                          resolution: 720,
                          frameRate: 30
                      },
            c = !1 === o ? null : $.Z.getPidFromDesktopSource(a);
        et.isPlatformEmbedded && !0 === o && (({ soundshareId: e, soundshareSession: i } = tZ(c)), null != e && tF(e, i)),
            tv(l),
            tI(l === ev.Yn.STREAM && eX, {
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
    } else if ((null == s ? void 0 : s.cameraSettings) != null) {
        let e = null !== (i = s.context) && void 0 !== i ? i : ev.Yn.DEFAULT,
            { videoDeviceGuid: n, audioDeviceGuid: r } = s.cameraSettings,
            o = e === ev.Yn.STREAM && eX,
            l =
                null !== (a = s.qualityOptions) && void 0 !== a
                    ? a
                    : {
                          resolution: 720,
                          frameRate: 30
                      };
        tI(o, {
            cameraSource: {
                videoDeviceGuid: n,
                audioDeviceGuid: r
            },
            quality: {
                resolution: l.resolution,
                frameRate: l.frameRate
            }
        });
    } else tI(eX, null);
}
function nV(e) {
    let { section: n } = e;
    return n === ep.oAB.VOICE && tx(), !1;
}
function nj() {
    return eB.eachConnection(tb), !1;
}
function nH(e) {
    let { enabled: n } = e,
        r = tO({ openH264: n });
    eB.setH264Enabled(r.hardwareEncoding || r.openH264),
        eB.eachConnection((e) => {
            var n;
            return e.setSoftwareH264(null === (n = r.openH264) || void 0 === n || n);
        });
}
function nY(e) {
    let { enabled: n } = e,
        r = tO({ aecDumpEnabled: n });
    eB.setAecDump(r.aecDumpEnabled);
}
function nW(e) {
    let { state: n } = e,
        r = k.Z.isEnabled();
    if (n === ep.$7l.BACKGROUND && eX && !r) (e3 = !0), tI(!1);
    else {
        if (n !== ep.$7l.ACTIVE || !e3) return !1;
        (e3 = !1), tI(!0);
    }
    return !0;
}
function nK(e) {
    eB.eachConnection((n) => n.setBitRate(e.bitrate));
}
function nz() {
    if ((!eX && null == s) || null != ed.Z.getRTCConnectionId()) return !1;
    tI(!1, null);
}
function nq() {
    return !!tn && ((tn = !1), !0);
}
function nQ(e) {
    eB.eachConnection((n) => n.applyVideoQualityMode(e.mode));
}
function nX(e) {
    let { settings: n } = e;
    eB.applyMediaFilterSettings(n).finally(() => {
        (tr = !1), i.emitChange();
    });
}
function nJ() {
    tr = !0;
}
function n$() {
    tr = !1;
}
function n0(e) {
    td = e.enabled;
}
class n1 extends (u = y.ZP.Store) {
    initialize() {
        ty(),
            tR(),
            nO(),
            t1(),
            (tu = {
                [ev.AN.VIDEO]: eB.supports(ev.AN.VIDEO),
                [ev.AN.DESKTOP_CAPTURE]: eB.supports(ev.AN.DESKTOP_CAPTURE),
                [ev.AN.HYBRID_VIDEO]: eB.supports(ev.AN.HYBRID_VIDEO)
            }),
            this.waitFor(es.default, el.Z, eu.Z, ec.Z, ed.Z, U.ZP, q.Z.storage, X.Z, M.Z, L.Z);
    }
    supports(e) {
        return eB.supports(e);
    }
    supportsInApp(e) {
        return tu[e] || eB.supports(e);
    }
    isSupported() {
        return eB.supported();
    }
    isExperimentalEncodersSupported() {
        return eB.supports(ev.AN.EXPERIMENTAL_ENCODERS);
    }
    isNoiseSuppressionSupported() {
        return eB.supports(ev.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return nN();
    }
    isNoiseCancellationError() {
        return tn;
    }
    isAutomaticGainControlSupported() {
        return eB.supports(ev.AN.AUTOMATIC_GAIN_CONTROL);
    }
    isAdvancedVoiceActivitySupported() {
        return nN();
    }
    isAecDumpSupported() {
        return eB.supports(ev.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return eB.supports(ev.AN.VIDEO) && eB.supports(ev.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        let n = (null === (e = eu.Z.getChannel(tt)) || void 0 === e ? void 0 : e.type) === ep.d4z.GUILD_STAGE_VOICE,
            r = i.getHardwareEncoding();
        return !n && r && V.Z.simulcastEnabled();
    }
    getAecDump() {
        return tp().aecDumpEnabled;
    }
    getMediaEngine() {
        return eB;
    }
    getVideoComponent() {
        return eB.supports(ev.AN.DIRECT_VIDEO) && eB.setUseDirectVideo(!0), eB.Video;
    }
    getCameraComponent() {
        return eB.supports(ev.AN.DIRECT_VIDEO) && eB.setUseDirectVideo(!0), eB.Camera;
    }
    isEnabled() {
        return eF;
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
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.DEFAULT;
        return e === ev.Yn.DEFAULT && ez;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.DEFAULT;
        return !this.isEnabled() || tp(e).mute || !q.Z.didHavePermission(eg.Eu.AUDIO) || this.isSelfDeaf(e) || (e === ev.Yn.DEFAULT && eq);
    }
    shouldSkipMuteUnmuteSound() {
        return e$;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        e$ = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && el.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return td;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.DEFAULT;
        return !this.isSupported() || tp(e).deaf;
    }
    isVideoEnabled() {
        return eX && e4;
    }
    isVideoAvailable() {
        return Object.values(eW).some((e) => {
            let { disabled: n } = e;
            return !n;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.STREAM;
        return ej === e && null != s;
    }
    isSoundSharing() {
        var e;
        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.STREAM;
        return ej === n && null != s && (null === (e = s.desktopSource) || void 0 === e ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ev.Yn.DEFAULT;
        return e !== es.default.getId() && (tp(n).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return eB.supports(ev.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var n;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ev.Yn.DEFAULT;
        return null !== (n = tp(r).disabledLocalVideos[e]) && void 0 !== n && n;
    }
    getVideoToggleState(e) {
        var n;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ev.Yn.DEFAULT;
        return null !== (n = tp(r).videoToggleStateMap[e]) && void 0 !== n ? n : ep.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ev.Yn.DEFAULT;
        return n === ev.Yn.DEFAULT && ts.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.DEFAULT;
        return e === ev.Yn.DEFAULT && ts.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tr;
    }
    isNativeAudioPermissionReady() {
        return ti;
    }
    getGoLiveSource() {
        return s;
    }
    getGoLiveContext() {
        return ej;
    }
    getLocalPan(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ev.Yn.DEFAULT,
            r = tp(n).localPans[e];
        return null != r ? r : eD;
    }
    getLocalVolume(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ev.Yn.DEFAULT,
            r = n === ev.Yn.STREAM ? ev.Yh : ev.Qx,
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
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.DEFAULT;
        return tp(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.DEFAULT;
        return tp(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            v().each(eG, (n, r) => {
                let {
                    mode: i,
                    modeOptions: { shortcut: a }
                } = n;
                i === ep.pM4.PUSH_TO_TALK && eZ.has(r) && (e[r] = a);
            }),
            e
        );
    }
    getInputDeviceId() {
        return tM(eH, tp().inputDeviceId);
    }
    getOutputDeviceId() {
        return tM(eY, tp().outputDeviceId);
    }
    getVideoDeviceId() {
        return tM(eW, tp().videoDeviceId);
    }
    getInputDevices() {
        return eH;
    }
    getOutputDevices() {
        return eY;
    }
    getVideoDevices() {
        return eW;
    }
    getEchoCancellation() {
        let e = tp();
        return el.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
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
        return eB.getLoopback();
    }
    getNoiseSuppression() {
        let e = tp();
        return el.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tp();
        return el.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
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
        return eB.getDebugLogging();
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
        return tN() && tp().automaticAudioSubsystem ? ev.iA.AUTOMATIC : eB.getAudioSubsystem();
    }
    getMLSSigningKey(e, n) {
        return eB.getMLSSigningKey(e, n);
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.DEFAULT;
        return tp(e);
    }
    getState() {
        return {
            settingsByContext: eG,
            inputDevices: eH,
            outputDevices: eY,
            appSupported: tu,
            krispModuleLoaded: te,
            goLiveSource: s,
            goLiveContext: ej
        };
    }
    getInputDetected() {
        return e6;
    }
    getNoInputDetectedNotice() {
        return e7;
    }
    getPacketDelay() {
        return et.isPlatformEmbedded || this.getMode() !== ep.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, n) {
        eB.eachConnection((r) => r.setCanHavePriority(e, n));
    }
    isInteractionRequired() {
        return eV;
    }
    getVideoHook() {
        return tp().videoHook;
    }
    supportsVideoHook() {
        return eB.supports(ev.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tp().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e);
    }
    supportsExperimentalSoundshare() {
        return eB.supports(ev.AN.EXPERIMENTAL_SOUNDSHARE) && T().satisfies(null === R.Z || void 0 === R.Z ? void 0 : R.Z.os.release, em.I9);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            n = tp().useSystemScreensharePicker,
            r =
                (0, et.isLinux)() ||
                j.Z.getCurrentConfig(
                    { location: 'getUseSystemScreensharePicker' },
                    {
                        disable: !e,
                        autoTrackExposure: !1
                    }
                ).useSystemPickerInModalByDefault;
        return e && (null != n ? n : r);
    }
    supportsSystemScreensharePicker() {
        let e = eB.supports(ev.AN.NATIVE_SCREENSHARE_PICKER);
        return j.Z.getCurrentConfig(
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
        return e0;
    }
    getSpeakingWhileMuted() {
        return e1;
    }
    supportsScreenSoundshare() {
        return (0, et.isMac)() ? eB.supports(ev.AN.SOUNDSHARE) && T().satisfies(null === R.Z || void 0 === R.Z ? void 0 : R.Z.os.release, em.yG) && tA() : (0, et.isWindows)() ? eB.supports(ev.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, et.isLinux)() && eB.supports(ev.AN.SCREEN_SOUNDSHARE);
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ev.Yn.DEFAULT,
            n = this.supports(ev.AN.VIDEO)
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
                n.push({
                    rid: '50',
                    type: e === ev.Yn.DEFAULT ? ev.Tr.VIDEO : ev.Tr.SCREEN,
                    quality: ev.LD
                }),
            n
        );
    }
    getSupportedSecureFramesProtocolVersion(e) {
        var n;
        let r = eB.getSupportedSecureFramesProtocolVersion(),
            i = Y.m.getCurrentConfig({ location: 'MediaEngineStore' }),
            a =
                null != e
                    ? Y.N.getCurrentConfig({
                          guildId: e,
                          location: 'MediaEngineStore'
                      })
                    : null,
            s = i.canSupportDaveProtocol || (null == a ? void 0 : a.canSupportDaveProtocol),
            o = Math.max(i.protocolVersionFloor, null !== (n = null == a ? void 0 : a.protocolVersionFloor) && void 0 !== n ? n : 0),
            l = r > 5 && 114 === r;
        return s && (r >= o || l) ? r : 0;
    }
    hasClipsSource() {
        return null != o;
    }
}
eT(n1, 'displayName', 'MediaEngineStore'),
    (i = new n1(C.Z, {
        VOICE_CHANNEL_SELECT: nw,
        VOICE_STATE_UPDATES: tW,
        CONNECTION_OPEN: tV,
        CONNECTION_CLOSED: tH,
        RTC_CONNECTION_STATE: tY,
        AUDIO_SET_TEMPORARY_SELF_MUTE: tK,
        AUDIO_TOGGLE_SELF_MUTE: tz,
        AUDIO_SET_SELF_MUTE: tq,
        AUDIO_TOGGLE_SELF_DEAF: tX,
        AUDIO_TOGGLE_LOCAL_MUTE: tJ,
        AUDIO_SET_LOCAL_VIDEO_DISABLED: t$,
        AUDIO_SET_LOCAL_VOLUME: t2,
        AUDIO_SET_LOCAL_PAN: t3,
        AUDIO_SET_MODE: t4,
        AUDIO_SET_INPUT_VOLUME: t6,
        AUDIO_SET_OUTPUT_VOLUME: t5,
        AUDIO_SET_INPUT_DEVICE: t7,
        AUDIO_SET_OUTPUT_DEVICE: t8,
        AUDIO_SET_ECHO_CANCELLATION: ni,
        AUDIO_SET_SIDECHAIN_COMPRESSION: na,
        AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: ns,
        AUDIO_SET_LOOPBACK: nl,
        AUDIO_SET_NOISE_SUPPRESSION: nc,
        AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nd,
        AUDIO_SET_NOISE_CANCELLATION: nf,
        AUDIO_SET_DISPLAY_SILENCE_WARNING: np,
        AUDIO_SET_DEBUG_LOGGING: nm,
        MEDIA_ENGINE_SET_VIDEO_HOOK: ng,
        MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: nE,
        MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: nv,
        AUDIO_SET_ATTENUATION: nI,
        AUDIO_SET_QOS: nT,
        MEDIA_ENGINE_DEVICES: nt,
        AUDIO_VOLUME_CHANGE: nn,
        AUDIO_RESET: nb,
        AUDIO_INPUT_DETECTED: ny,
        AUDIO_SET_SUBSYSTEM: nD,
        MEDIA_ENGINE_SET_AUDIO_ENABLED: nU,
        MEDIA_ENGINE_SET_VIDEO_ENABLED: nB,
        MEDIA_ENGINE_PERMISSION: nk,
        MEDIA_ENGINE_SET_GO_LIVE_SOURCE: nF,
        MEDIA_ENGINE_SET_VIDEO_DEVICE: t9,
        MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: n_,
        MEDIA_ENGINE_INTERACTION_REQUIRED: ne,
        USER_SETTINGS_MODAL_INIT: nV,
        USER_SETTINGS_MODAL_SET_SECTION: nV,
        CERTIFIED_DEVICES_SET: nj,
        RPC_APP_CONNECTED: nP,
        RPC_APP_DISCONNECTED: nM,
        OVERLAY_INITIALIZE: tj,
        MEDIA_ENGINE_SET_OPEN_H264: nH,
        MEDIA_ENGINE_SET_HARDWARE_ENCODING: nh,
        APP_STATE_UPDATE: nW,
        SET_CHANNEL_BITRATE: nK,
        SET_VAD_PERMISSION: nS,
        SET_NATIVE_PERMISSION: nA,
        SET_CHANNEL_VIDEO_QUALITY_MODE: nQ,
        MEDIA_ENGINE_SET_AEC_DUMP: nY,
        CHANNEL_DELETE: nz,
        MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: nq,
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: nX,
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: nJ,
        MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: n$,
        USER_SETTINGS_PROTO_UPDATE: tQ,
        CLIPS_INIT: nG,
        CLIPS_SETTINGS_UPDATE: nZ,
        MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: n0
    })),
    (n.Z = i);
