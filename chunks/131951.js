let i, a, s, o;
var l,
    u,
    c = r(47120);
var d = r(724458);
var f = r(773603);
var _ = r(653041);
r(337869);
var h = r(512722),
    p = r.n(h),
    m = r(392711),
    g = r.n(m),
    E = r(553813),
    v = r.n(E),
    I = r(404097),
    T = r(442837),
    b = r(46973),
    y = r(433517),
    S = r(846519),
    A = r(570140),
    N = r(579806),
    C = r(887278),
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
    es = r(463395),
    eo = r(592125),
    el = r(858340),
    eu = r(19780),
    ec = r(704806),
    ed = r(594174),
    ef = r(631768),
    e_ = r(981631),
    eh = r(70722),
    ep = r(761274),
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
let eI = new L.Z('MediaEngineStore');
!(function (e) {
    (e[(e.DETACHED = 0)] = 'DETACHED'), (e[(e.WAITING = 1)] = 'WAITING'), (e[(e.ATTACHED = 2)] = 'ATTACHED'), (e[(e.STARTED = 3)] = 'STARTED'), (e[(e.PLAYING = 4)] = 'PLAYING'), (e[(e.SILENCE = 5)] = 'SILENCE');
})(l || (l = {}));
let eT = 'MediaEngineStore',
    eb = 4,
    ey = 1,
    eS = 1,
    eA = 1,
    eN = 1,
    eC = 2,
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
        mode: e_.pM4.VOICE_ACTIVITY,
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
let ek = (0, b.Mt)((0, b.jj)());
eI.enableNativeLogger(!0);
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
K.Z.hasPermission(ep.Eu.AUDIO, { showAuthorizationError: !1 }), K.Z.hasPermission(ep.Eu.CAMERA, { showAuthorizationError: !1 });
let tr = !1,
    ti = new Set(),
    ta = tr,
    ts = !1,
    to = {},
    tl = null,
    tu = !0,
    tc = {},
    td = 5 * J.Z.Millis.SECOND;
function tf() {
    var e, n;
    return null !== (n = null === (e = ed.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== n && n ? 'always' : ee.Z === I.R.CANARY ? 'permittedDevicesOnly' : 'never';
}
function t_() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eg.Yn.DEFAULT,
        n = eU[e];
    return null == n && ((n = eM()), (eU[e] = n)), n;
}
function th(e) {
    let n = t_(e.context);
    e.setInputMode(n.mode, {
        vadThreshold: n.modeOptions.threshold,
        vadAutoThreshold: n.modeOptions.autoThreshold,
        vadUseKrisp: n.modeOptions.vadUseKrisp && nS(),
        vadLeading: n.modeOptions.vadLeading,
        vadTrailing: n.modeOptions.vadTrailing,
        pttReleaseDelay: n.modeOptions.delay
    });
}
function tp(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eg.Qx;
    return g().clamp(e, 0, n);
}
function tm(e) {
    let n = t_(e.context),
        r = !eG || n.mute || n.deaf;
    e.context === eg.Yn.DEFAULT ? (r = r || eY || eW || eK || !K.Z.didHavePermission(ep.Eu.AUDIO)) : e.context === eg.Yn.STREAM && (r = !0), e.setSelfMute(r), e.setSelfDeaf(n.deaf), e.context === eg.Yn.DEFAULT && R.Z.updateNativeMute();
}
function tg(e) {
    if (e !== eF) null != s && ek.setGoLiveSource(null, eF), (eF = e);
}
function tE() {
    var e, n, r;
    let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
        l = s;
    if (((null == l ? void 0 : l.desktopSource) != null && l.desktopSource.id !== (null == o ? void 0 : null === (e = o.desktopSource) || void 0 === e ? void 0 : e.id) && (null != l.desktopSource.soundshareId && (0, $.isWindows)() && C.pn(l.desktopSource.soundshareId), ek.setGoLiveSource(null, eF)), (null == l ? void 0 : l.cameraSource) != null && (l.cameraSource.videoDeviceGuid !== (null == o ? void 0 : null === (n = o.cameraSource) || void 0 === n ? void 0 : n.videoDeviceGuid) || l.cameraSource.audioDeviceGuid !== (null == o ? void 0 : null === (r = o.cameraSource) || void 0 === r ? void 0 : r.audioDeviceGuid)) && ek.setGoLiveSource(null, eF), (eq || a) && ((eQ = (eq = a) ? tw(eH, t_().videoDeviceId) : eg.Av), ek.setVideoInputDevice(eQ)), (s = o), null != o)) {
        let e = {
            resolution: o.quality.resolution,
            frameRate: o.quality.frameRate
        };
        if (null != o.desktopSource) {
            let n = tf(),
                r = t_().videoHook;
            ek.setGoLiveSource(
                {
                    desktopDescription: {
                        id: o.desktopSource.id,
                        soundshareId: o.desktopSource.soundshareId,
                        useVideoHook: r,
                        useGraphicsCapture: tb(),
                        useLoopback: i.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: ty(),
                        videoHookStaleFrameTimeoutMs: eO,
                        graphicsCaptureStaleFrameTimeoutMs: eD,
                        hdrCaptureMode: n
                    },
                    quality: e
                },
                eF
            );
        }
        null != o.cameraSource &&
            ek.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: o.cameraSource.audioDeviceGuid
                    },
                    quality: e
                },
                eF
            );
    }
}
function tv(e, n, r, i) {
    var a;
    let s = null !== (a = null == e ? void 0 : e.soundshareSession) && void 0 !== a ? a : '';
    null == tc[s] && (tc[s] = new Set());
    let o = null != n && !tc[s].has(n);
    o && tc[s].add(n),
        (null == n || o) &&
            Q.default.track(e_.rMx.SOUNDSHARE_FAILED, {
                soundshare_failure_code: n,
                soundshare_failure_reason: r,
                soundshare_failure_will_retry: i,
                ...(0, k.Z)(e)
            });
}
function tI(e) {
    let n = t_(),
        r = n.inputDeviceId;
    if ((e.setEchoCancellation(es.Z.hasEchoCancellation(r) || n.echoCancellation), e.setNoiseSuppression(es.Z.hasNoiseSuppression(r) || n.noiseSuppression), e.setAutomaticGainControl(es.Z.hasAutomaticGainControl(r) || n.automaticGainControl), e.setNoiseCancellation(n.noiseCancellation), (0, $.isWeb)())) {
        let r = n.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(r);
    }
}
function tT() {
    ek.on(b.aB.Connection, (e) => {
        var n, r;
        th(e), tm(e), tI(e);
        let a = t_();
        e.setAttenuation(a.attenuation, a.attenuateWhileSpeakingSelf, a.attenuateWhileSpeakingOthers), e.setQoS(a.qos), e.setExperimentalEncoders(a.experimentalEncoders), e.setHardwareH264(null === (n = a.hardwareEncoding) || void 0 === n || n), e.setSoftwareH264(null === (r = a.openH264) || void 0 === r || r);
        let o = eu.Z.getGuildId(),
            {
                muteBeforeProcessing: l,
                pttBeforeProcessing: u,
                skipEncode: c
            } = (null != o ? G.Z : B.Z).getCurrentConfig(
                {
                    location: 'setupMediaEngine',
                    ...(null != o && { guildId: o })
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
        for (let n of ((a = t_(e.context)), e.setPostponeDecodeLevel(ex), Object.keys(a.localMutes))) n !== ei.default.getId() && e.setLocalMute(n, a.localMutes[n]);
        for (let n of Object.keys(a.localVolumes)) n !== ei.default.getId() && e.setLocalVolume(n, a.localVolumes[n]);
        for (let n of Object.keys(a.localPans)) {
            let r = a.localPans[n];
            e.setLocalPan(n, r.left, r.right);
        }
        for (let n of Object.keys(a.disabledLocalVideos)) e.setLocalVideoDisabled(n, a.disabledLocalVideos[n]);
        e.on(b.Sh.Speaking, (n, r) => {
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
                e.on(b.Sh.SpeakingWhileMuted, () => {
                    (eJ = !0),
                        (e$ = !0),
                        i.emitChange(),
                        e0.stop(),
                        e0.start(eP, () => {
                            (e$ = !1), i.emitChange();
                        });
                })),
            e.on(b.Sh.DesktopSourceEnd, () => {
                A.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                    settings: { context: e.context }
                });
            }),
            e.on(b.Sh.SoundshareAttached, () => {
                (null == s ? void 0 : s.desktopSource) != null && Q.default.track(e_.rMx.SOUNDSHARE_ATTACHED, (0, k.Z)(null == s ? void 0 : s.desktopSource));
            }),
            e.on(b.Sh.SoundshareFailed, (e) => {
                let { failureCode: n, failureReason: r, willRetry: i } = e;
                tv(null == s ? void 0 : s.desktopSource, n, r, i);
            }),
            e.on(b.Sh.SoundshareSpeaking, () => {
                (null == s ? void 0 : s.desktopSource) != null && (Q.default.track(e_.rMx.SOUNDSHARE_TRANSMITTING, (0, k.Z)(null == s ? void 0 : s.desktopSource)), null != el.Z.getHookError(e_.K3D.SOUND) && A.Z.wait(() => A.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
            });
        let _ = new S.V7();
        e.on(b.Sh.SoundshareTrace, (e) => {
            switch (e.type) {
                case 'soundshare_attach_requested':
                    _.start(td, () => {
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
                    (null == s ? void 0 : s.desktopSource) != null &&
                        (tv(null == s ? void 0 : s.desktopSource, r, n, i),
                        !i &&
                            (_.stop(),
                            A.Z.wait(() =>
                                A.Z.dispatch({
                                    type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
                                    errorMessage: n,
                                    errorCode: r
                                })
                            )));
                    break;
                case 'soundshare_state_transition':
                    4 === e.newState && (_.stop(), A.Z.wait(() => A.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
            }
        }),
            e.on(b.Sh.InteractionRequired, (e) => {
                A.Z.dispatch({
                    type: 'MEDIA_ENGINE_INTERACTION_REQUIRED',
                    required: e
                });
            }),
            e.on(b.Sh.VideoHookInitialize, (e, n, r, i, a, o) => {
                (null == s ? void 0 : s.desktopSource) != null &&
                    Q.default.track(e_.rMx.VIDEOHOOK_INITIALIZED, {
                        backend: e,
                        format: n,
                        framebuffer_format: r,
                        sample_count: i,
                        success: a,
                        reinitialization: o,
                        ...(0, k.Z)(null == s ? void 0 : s.desktopSource)
                    });
            }),
            e.on(b.Sh.NoiseCancellationError, (e) => {
                eI.warn('noisecancellererror event: '.concat(e)),
                    (te = !0),
                    Q.default.track(e_.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
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
            e.on(b.Sh.VoiceActivityDetectorError, (e) => {
                eI.warn('voiceactivitydetectorerror event: '.concat(e)),
                    Q.default.track(e_.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    A.Z.dispatch({
                        type: 'AUDIO_SET_MODE',
                        context: eg.Yn.DEFAULT,
                        mode: e_.pM4.VOICE_ACTIVITY,
                        options: {
                            ...t_(eg.Yn.DEFAULT).modeOptions,
                            vadUseKrisp: !1
                        }
                    }),
                    A.Z.dispatch({
                        type: 'MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR',
                        code: e
                    });
            }),
            e.on(b.Sh.SdpError, (e, n, r, i) => {
                ee.Z === I.R.CANARY &&
                    Q.default.track(e_.rMx.SDP_ERROR, {
                        operation: e,
                        error: n,
                        type: r,
                        sdp: i
                    });
            }),
            e.on(b.Sh.VideoState, (n) => {
                A.Z.dispatch({
                    type: 'MEDIA_ENGINE_VIDEO_STATE_CHANGED',
                    videoState: n,
                    context: e.context
                });
            }),
            e.on(b.Sh.Destroy, () => {
                _.stop();
            }),
            e.setBitRate(ea.Z.bitrate),
            e.applyVideoQualityMode(ef.Z.mode);
    }),
        ek.on(b.aB.DeviceChange, (e, n, r) => {
            A.Z.dispatch({
                type: 'MEDIA_ENGINE_DEVICES',
                inputDevices: e,
                outputDevices: n,
                videoDevices: r
            });
        }),
        ek.on(b.aB.VolumeChange, (e, n) => {
            A.Z.dispatch({
                type: 'AUDIO_VOLUME_CHANGE',
                inputVolume: e,
                outputVolume: n
            });
        }),
        ek.on(b.aB.DesktopSourceEnd, () => {
            A.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                settings: null
            });
        }),
        ek.on(b.aB.AudioPermission, (e) => {
            (tn = !0),
                A.Z.dispatch({
                    type: 'MEDIA_ENGINE_PERMISSION',
                    kind: 'audio',
                    granted: e
                });
        }),
        ek.on(b.aB.VideoPermission, (e) => {
            A.Z.dispatch({
                type: 'MEDIA_ENGINE_PERMISSION',
                kind: 'video',
                granted: e
            });
        }),
        ek.on(b.aB.WatchdogTimeout, async () => {
            let e;
            try {
                await X.Z.submitLiveCrashReport({ message: { message: 'Voice Watchdog Timeout' } });
            } catch (n) {
                'number' == typeof n.status && (e = n.status);
            }
            eI.warn('Watchdog timeout, report submission status: '.concat(null != e ? e : 200)), Q.default.track(e_.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        ek.on(b.aB.VideoInputInitialized, (e) => {
            Q.default.track(e_.rMx.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * J.Z.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: eu.Z.getMediaSessionId(),
                rtc_connection_id: eu.Z.getRTCConnectionId()
            });
        }),
        ek.on(b.aB.ClipsRecordingRestartNeeded, () => {
            A.Z.dispatch({ type: 'CLIPS_RESTART' });
        }),
        ek.on(b.aB.ClipsInitFailure, (e, n) => {
            A.Z.wait(() => {
                A.Z.dispatch({
                    type: 'CLIPS_INIT_FAILURE',
                    errMsg: e,
                    applicationName: n
                });
            });
        }),
        ek.on(b.aB.ClipsRecordingEnded, (e, n) => {
            var r, i;
            (null == o ? void 0 : null === (r = o.desktopSource) || void 0 === r ? void 0 : r.id) === e && (null != n && (null == s ? void 0 : null === (i = s.desktopSource) || void 0 === i ? void 0 : i.soundshareId) !== n && C.pn(n), (o = null));
        }),
        ek.on(b.aB.NativeScreenSharePickerUpdate, (e) => {
            F.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerUpdate' }),
                A.Z.dispatch({
                    type: 'NATIVE_SCREEN_SHARE_PICKER_UPDATE',
                    existing: e
                });
        }),
        ek.on(b.aB.NativeScreenSharePickerCancel, (e) => {
            F.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerCancel' }),
                A.Z.dispatch({
                    type: 'NATIVE_SCREEN_SHARE_PICKER_CANCEL',
                    existing: e
                });
        }),
        ek.on(b.aB.NativeScreenSharePickerError, (e) => {
            F.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerError' }),
                A.Z.dispatch({
                    type: 'NATIVE_SCREEN_SHARE_PICKER_ERROR',
                    error: e
                });
        }),
        ek.on(b.aB.AudioDeviceModuleError, (e, n, r) => {
            Q.default.track(e_.rMx.AUDIO_DEVICE_MODULE_ERROR, {
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
function tb() {
    return (0, $.isWindows)() && v().satisfies(null === N.Z || void 0 === N.Z ? void 0 : N.Z.os.release, eh.nz);
}
function ty() {
    return (0, $.isMac)() && ek.supports(eg.AN.SCREEN_CAPTURE_KIT) && v().satisfies(null === N.Z || void 0 === N.Z ? void 0 : N.Z.os.release, eh.C7);
}
function tS() {
    return (0, $.isWindows)() && ek.supports(eg.AN.AUTOMATIC_AUDIO_SUBSYSTEM) && ek.supports(eg.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH);
}
let tA = new (class {
    start() {
        !this.started && ((this.started = !0), ek.on(b.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            ek.removeListener(b.aB.Silence, this.handleSilence),
            A.Z.dispatch({
                type: 'AUDIO_INPUT_DETECTED',
                inputDetected: null
            }));
    }
    update() {
        let e = t_();
        !e4 && eu.Z.getState() === e_.hes.RTC_CONNECTED && e.mode === e_.pM4.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop();
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
function tN() {
    var e;
    let n = y.K.get('audio');
    null != n && (y.K.set(eT, { [eg.Yn.DEFAULT]: n }), y.K.remove('audio')),
        (eU = null !== (e = y.K.get(eT)) && void 0 !== e ? e : {}),
        g().each(eU, (e) => {
            if ((g().defaultsDeep(e, eM()), null != e.modeOptions && 'string' == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, er.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== eb && ((e.vadUseKrispSettingVersion = eb), (e.modeOptions.vadUseKrisp = !0)), !e.qosMigrated && ((e.qosMigrated = !0), (e.qos = !1)), !e.vadThrehsoldMigrated)) {
                var n;
                (e.vadThrehsoldMigrated = !0), (null === (n = e.modeOptions) || void 0 === n ? void 0 : n.threshold) === -40 && (e.modeOptions.threshold = eL);
            }
            (0, $.isWeb)() ? e.ncUseKrispjsSettingVersion !== eS && ((e.ncUseKrispjsSettingVersion = eS), (e.noiseSuppression = !1), (e.noiseCancellation = !0)) : e.ncUseKrispSettingVersion !== ey && ((e.ncUseKrispSettingVersion = ey), (e.noiseSuppression = !1), (e.noiseCancellation = !0)), e.hardwareEnabledVersion !== eA && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = eA)), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
        }),
        tO();
}
function tC(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eg.Yn.DEFAULT,
        r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = t_(n);
    return Object.assign(i, e), !__OVERLAY__ && r && y.K.set(eT, eU), i;
}
function tR() {
    y.K.remove(eT);
    location.reload();
}
function tO() {
    var e, n, r;
    let i = t_();
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
        let e = t_(),
            n = tw(eV, e.inputDeviceId);
        ek.setAudioInputDevice(n);
    }
}
function tM(e) {
    let n = ej;
    if (((ej = tx(e, eE.intl.string(eE.t.xlUg0t))), !g().isEqual(ej, n))) {
        let e = t_(),
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
            s = a === eg.Yn.STREAM ? eg.Yh : eg.Qx,
            o = null !== (n = i[e]) && void 0 !== n ? n : {},
            { localMutes: l, localVolumes: u } = t_(a);
        for (let [e, n] of Object.entries(o))
            null == (0, z.Ky)(a, e) &&
                (n.muted ? (l[e] = !0) : delete l[e],
                n.volume !== s ? (u[e] = n.volume) : delete u[e],
                ek.eachConnection((r) => {
                    r.setLocalVolume(e, n.volume), r.setLocalMute(e, n.muted);
                }, a));
        if (r)
            for (let e of new Set([...Object.keys(l), ...Object.keys(u)]))
                null == o[e] &&
                    (delete l[e],
                    delete u[e],
                    ek.eachConnection((n) => {
                        n.setLocalVolume(e, s), n.setLocalMute(e, !1);
                    }, a));
        tC(
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
            eI.info('Error: trying to get soundshare id before MediaEngineStore is instantiated.'),
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
        C.YT(e, { soundshare_session: n }).then((n) => {
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
                let n = t_();
                !e.sidechainAvailable && n.sidechainCompression ? (tC({ sidechainCompressionSettingVersion: 0 }), na(!1)) : e.sidechainAvailable && n.sidechainCompressionSettingVersion < eN && (tC({ sidechainCompressionSettingVersion: eN }), na(e.sidechainEnabled));
            });
    let n = t_();
    tS() && (n.automaticAudioSubsystem && nD(), n.audioSubsystemSettingVersion < eC && (tC({ audioSubsystemSettingVersion: eC }), !n.automaticAudioSubsystem && ek.getAudioSubsystem() !== eg.iA.LEGACY && nO(eg.iA.AUTOMATIC))), tU();
}
function tF(e) {
    let { mediaEngineState: n } = e;
    (eU = n.settingsByContext), (eV = n.inputDevices), (ej = n.outputDevices), (to = n.appSupported), (e8 = n.krispModuleLoaded), (eF = n.goLiveContext);
}
function tV() {
    a = null;
}
function tj(e) {
    switch (e.state) {
        case e_.hes.CONNECTING:
            tD();
            break;
        case e_.hes.RTC_CONNECTING:
            (e4 = !1), (e6 = !1);
            break;
        case e_.hes.RTC_CONNECTED:
            tE();
            break;
        case e_.hes.DISCONNECTED:
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
        { mute: i, deaf: a } = t_(n);
    if (n === eg.Yn.DEFAULT && (K.Z.requestPermission(ep.Eu.AUDIO), eK)) return !1;
    !(i = !a && !i) && (a = !1),
        r && (eX = !0),
        tC(
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
    tC({ mute: r }, n), ek.eachConnection(tm);
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
    tC({ deaf: !t_(n).deaf }, n), ek.eachConnection(tm);
}
function tQ(e) {
    let { context: n, userId: r } = e;
    if (r === ei.default.getId()) return;
    let { localMutes: i } = t_(n);
    i[r] ? delete i[r] : (i[r] = !0), tC({ localMutes: i }, n), ek.eachConnection((e) => e.setLocalMute(r, i[r] || !1), n);
}
function tX(e) {
    var n, r, i, a, s, o, l;
    let { context: u, userId: c, videoToggleState: d, persist: f, isAutomatic: _ } = e;
    p()(!(f && _), 'These are not allowed to both be true.');
    let h = d === e_.ZUi.DISABLED,
        { disabledLocalVideos: m } = t_(u),
        g = null !== (n = m[c]) && void 0 !== n && n,
        E = ti.has(c),
        v = d === e_.ZUi.AUTO_ENABLED || d === e_.ZUi.MANUAL_ENABLED;
    eI.info('disableVideo='.concat(h, ' currentlyDisabled=').concat(g, ' currentlyAutoDisabled=').concat(E, ', isVideoShown=').concat(v)), p()(!(E && !g), 'If you are auto-disabled, then you are also disabled.');
    let I = h !== g,
        T = u === eg.Yn.DEFAULT,
        b = _ && I && T,
        y = f && I && T;
    eI.info('changed='.concat(I, ' isDefaultContext=').concat(T, ' isUpdateCausedByVideoHealthManager=').concat(b, ' isManualToggleByUser=').concat(y));
    let { videoToggleStateMap: S } = t_(u);
    if ((S[c] === e_.ZUi.AUTO_PROBING && d === e_.ZUi.AUTO_ENABLED && (0, W.Z)(c, h ? eg.fC.AUTO_DISABLE : eg.fC.AUTO_ENABLE, v), (S[c] = d), tC({ videoToggleStateMap: S }, u, f), d === e_.ZUi.AUTO_PROBING ? null === (r = eu.Z.getRTCConnection()) || void 0 === r || r.pauseStatsCollectionForUser(c, !0) : null === (i = eu.Z.getRTCConnection()) || void 0 === i || i.pauseStatsCollectionForUser(c, !1), !ta && (eI.info('isAutoDisableAllowed='.concat(ta, ' - disabling VideoHealthManager')), null === (s = eu.Z.getRTCConnection()) || void 0 === s || null === (a = s.getVideoHealthManager()) || void 0 === a || a.disable()), b)) {
        if ((!h && !E) || (h && !ta)) return;
        (0, W.Z)(c, h ? eg.fC.AUTO_DISABLE : eg.fC.AUTO_ENABLE, v), h ? ti.add(c) : ti.delete(c);
    } else y && (E && !h ? (eI.info('disallowing auto-disable for this session because of manual override by user'), (ta = !1), null === (l = eu.Z.getRTCConnection()) || void 0 === l || null === (o = l.getVideoHealthManager()) || void 0 === o || o.disable(), (0, W.Z)(c, eg.fC.MANUAL_REENABLE, v)) : (0, W.Z)(c, h ? eg.fC.MANUAL_DISABLE : eg.fC.MANUAL_ENABLE, v));
    T && !h && ti.delete(c),
        h ? (m[c] = !0) : delete m[c],
        tC({ disabledLocalVideos: m }, u, f),
        ek.eachConnection((e) => {
            var n;
            return e.setLocalVideoDisabled(c, null !== (n = m[c]) && void 0 !== n && n);
        }, u);
}
function tJ() {
    if (0 === ti.size) return;
    let e = eg.Yn.DEFAULT,
        { disabledLocalVideos: n } = t_(e);
    ti.forEach((r) => {
        p()(n[r], 'If you are auto-disabled, then you are also disabled.'), delete n[r], ek.eachConnection((e) => e.setLocalVideoDisabled(r, !1), e);
    }),
        ti.clear(),
        tC({ disabledLocalVideos: n }, e, !1);
}
function t$() {
    let e = eg.Yn.DEFAULT,
        { videoToggleStateMap: n } = t_(e);
    for (let [e, r] of Object.entries(n)) r === e_.ZUi.AUTO_PROBING && delete n[e];
    tC({ videoToggleStateMap: n }, e, !1);
}
function t0(e) {
    let { context: n, userId: r, volume: i } = e;
    if (r === ei.default.getId()) return;
    let a = n === eg.Yn.STREAM ? eg.Yh : eg.Qx,
        { localVolumes: s } = t_(n);
    i === a ? delete s[r] : (s[r] = i), tC({ localVolumes: s }, n), ek.eachConnection((e) => e.setLocalVolume(r, i), n);
}
function t1(e) {
    let { context: n, userId: r, left: i, right: a } = e,
        { localPans: s } = t_(n);
    (s[r] = {
        left: i,
        right: a
    }),
        tC({ localPans: s }, n),
        ek.eachConnection((e) => e.setLocalPan(r, i, a), n);
}
function t2(e) {
    let { context: n, mode: r, options: i } = e;
    tC(
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
    tC({ inputVolume: tp(n) }), ek.setInputVolume(n);
}
function t4(e) {
    let { volume: n } = e;
    tC({ outputVolume: n }), ek.setOutputVolume(n);
}
function t6(e) {
    let { id: n } = e;
    tC({ inputDeviceId: (n = tw(eV, n)) }), ek.setAudioInputDevice(n);
}
function t5(e) {
    let { id: n } = e;
    tC({ outputDeviceId: (n = tw(ej, n)) }), ek.setAudioOutputDevice(n);
}
function t7(e) {
    let { id: n } = e;
    tC({ videoDeviceId: (n = tw(eH, n)) }), tE();
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
    tC({
        inputVolume: tp(n),
        outputVolume: r
    });
}
function nt(e) {
    let n = t_();
    Q.default.track(e_.rMx.VOICE_PROCESSING, {
        echo_cancellation: n.echoCancellation,
        noise_cancellation: n.noiseCancellation,
        noise_suppression: n.noiseSuppression,
        automatic_gain_control: n.automaticGainControl,
        location: e
    });
}
function nn(e) {
    let n = tC({ echoCancellation: e.enabled });
    ek.eachConnection((e) => e.setEchoCancellation(n.echoCancellation)), no(), nt(e.location);
}
function nr(e) {
    na(e.enabled);
}
function ni(e) {
    let n = tC({ sidechainCompressionStrength: e.strength });
    ek.setSidechainCompressionStrength(n.sidechainCompressionStrength);
}
function na(e) {
    let n = tC({ sidechainCompression: e });
    ek.setSidechainCompression(n.sidechainCompression);
}
function ns(e) {
    let { enabled: n } = e;
    return (ts = n), no();
}
function no() {
    let e = t_(),
        n = e.inputDeviceId,
        r = es.Z.hasEchoCancellation(n) || e.echoCancellation,
        i = es.Z.hasNoiseSuppression(n) || e.noiseSuppression,
        a = es.Z.hasAutomaticGainControl(n) || e.automaticGainControl,
        s = e.noiseCancellation;
    ek.setLoopback(ts, {
        echoCancellation: r,
        noiseSuppression: i,
        automaticGainControl: a,
        noiseCancellation: s
    });
}
function nl(e) {
    let n = tC({ noiseSuppression: e.enabled });
    ek.eachConnection((e) => e.setNoiseSuppression(n.noiseSuppression)), no(), nt(e.location);
}
function nu(e) {
    let n = tC({ automaticGainControl: e.enabled });
    ek.eachConnection((e) => e.setAutomaticGainControl(n.automaticGainControl)), no(), nt(e.location);
}
function nc(e) {
    let n = tC({ noiseCancellation: e.enabled });
    ek.eachConnection((e) => e.setNoiseCancellation(n.noiseCancellation)), no(), nt(e.location);
}
function nd(e) {
    let n = tC({ experimentalEncoders: e.enabled });
    ek.eachConnection((e) => e.setExperimentalEncoders(n.experimentalEncoders));
}
function nf(e) {
    var n, r;
    let { enabled: i } = e,
        a = tC({ hardwareEncoding: i });
    ek.eachConnection((e) => {
        var n;
        return e.setHardwareH264(null === (n = a.hardwareEncoding) || void 0 === n || n);
    }),
        ek.setH264Enabled(a.hardwareEncoding || a.openH264),
        ek.setAv1Enabled(null === (n = a.hardwareEncoding) || void 0 === n || n),
        ek.setH265Enabled(null === (r = a.hardwareEncoding) || void 0 === r || r);
}
function n_(e) {
    tC({ silenceWarning: e.enabled }), tA.update();
}
function nh(e) {
    ek.setDebugLogging(e.enabled);
}
function np(e) {
    tC({ videoHook: e.enabled });
}
function nm(e) {
    tC({ experimentalSoundshare2: e.enabled });
}
function ng(e) {
    let { enabled: n } = e;
    tC({ useSystemScreensharePicker: n });
}
function nE(e) {
    let { attenuation: n, attenuateWhileSpeakingSelf: r, attenuateWhileSpeakingOthers: i } = e,
        a = tC({
            attenuation: n,
            attenuateWhileSpeakingSelf: r,
            attenuateWhileSpeakingOthers: i
        });
    ek.eachConnection((e) => e.setAttenuation(a.attenuation, a.attenuateWhileSpeakingSelf, a.attenuateWhileSpeakingOthers));
}
function nv(e) {
    let { enabled: n } = e;
    tC({ qos: n }), ek.eachConnection((e) => e.setQoS(n));
}
function nI() {
    tR();
}
function nT(e) {
    let { inputDetected: n } = e;
    (e3 = n), !e4 && e3 && ((e4 = !0), tA.update());
}
function nb(e) {
    let { hasPermission: n } = e,
        r = !n;
    if (r === eK) return !1;
    (eK = r), ek.eachConnection(tm);
}
function ny(e) {
    let { state: n, permissionType: r } = e,
        i = n === ep.PQ.ACCEPTED;
    switch (r) {
        case ep.Eu.AUDIO:
            (tn = !0), ek.eachConnection(tm);
            break;
        case ep.Eu.CAMERA:
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
        eI.warn('Failed to load Krisp module: '.concat(n.message)), et.Z.captureException(n);
        let e = eg.H3.INITIALIZED;
        if (n.message.includes(': ')) {
            let r = parseInt(n.message.substring(n.message.indexOf(': ') + 1));
            e = isNaN(r) || 0 === r ? eg.H3.INITIALIZED : r;
        }
        Q.default.track(e_.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), tC({ noiseCancellation: !1 });
    } finally {
        e7 = !1;
    }
}
function nN() {
    return (0, $.isWindows)() || (0, $.isLinux)() || ((0, $.isMac)() && v().satisfies(null === N.Z || void 0 === N.Z ? void 0 : N.Z.os.release, ew));
}
function nC() {
    !nN() || __OVERLAY__ || e7 || e8 ? ((0, $.isWeb)() && ek.supports(eg.AN.NOISE_CANCELLATION) ? ((e8 = !0), i.emitChange()) : (0, $.isWeb)() && tC({ noiseCancellation: !1 })) : ((e7 = !0), nA());
}
function nR(e) {
    nO(e.subsystem);
}
function nO(e) {
    e === eg.iA.AUTOMATIC ? (tC({ automaticAudioSubsystem: !0 }), nD()) : (tC({ automaticAudioSubsystem: !1 }), ek.setAudioSubsystem(e));
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
    let s = t_();
    (s.mute || s.deaf) &&
        (tC({
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
            tC({
                mute: !1,
                deaf: !1
            }),
        ek.eachConnection(tm);
}
function nk(e) {
    let { enabled: n } = e;
    K.Z.requestPermission(ep.Eu.CAMERA), tE(n);
}
function nU(e) {
    let { sourceId: n, applicationName: r, quality: a } = e,
        s = O.Z.isDecoupledGameClippingEnabled(),
        l = O.Z.getSettings().decoupledClipsEnabled;
    if (!s || !l || null == N.Z) return;
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
    null != o && o.desktopSource.id !== f.desktopSource.id && (ek.setClipsSource(null), (0, $.isWindows)() && null != o.desktopSource.soundshareId && C.pn(o.desktopSource.soundshareId)), null != u && tG(u, c), (o = f);
    let _ = tf(),
        h = t_().videoHook;
    ek.setClipsSource({
        desktopDescription: {
            id: o.desktopSource.id,
            soundshareId: o.desktopSource.soundshareId,
            useVideoHook: h,
            useGraphicsCapture: tb(),
            useLoopback: i.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: ty(),
            videoHookStaleFrameTimeoutMs: eO,
            graphicsCaptureStaleFrameTimeoutMs: eD,
            hdrCaptureMode: _
        },
        quality: a,
        applicationName: r
    });
}
function nB(e) {
    let { settings: n } = e;
    !1 === n.decoupledClipsEnabled && ((o = null), ek.setClipsSource(null));
}
function nG(e) {
    var n, r, i, a;
    let { settings: s } = e;
    if ((null == s ? void 0 : s.desktopSettings) != null) {
        let e = null,
            i = null,
            { sourceId: a, sound: o } = s.desktopSettings,
            l = null !== (n = s.context) && void 0 !== n ? n : eg.Yn.DEFAULT,
            u =
                null !== (r = s.qualityOptions) && void 0 !== r
                    ? r
                    : {
                          resolution: 720,
                          frameRate: 30
                      },
            c = !1 === o ? null : X.Z.getPidFromDesktopSource(a);
        $.isPlatformEmbedded && !0 === o && (({ soundshareId: e, soundshareSession: i } = tB(c)), null != e && tG(e, i)),
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
    } else if ((null == s ? void 0 : s.cameraSettings) != null) {
        let e = null !== (i = s.context) && void 0 !== i ? i : eg.Yn.DEFAULT,
            { videoDeviceGuid: n, audioDeviceGuid: r } = s.cameraSettings,
            o = e === eg.Yn.STREAM && eq,
            l =
                null !== (a = s.qualityOptions) && void 0 !== a
                    ? a
                    : {
                          resolution: 720,
                          frameRate: 30
                      };
        tE(o, {
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
    return n === e_.oAB.VOICE && tD(), !1;
}
function nF() {
    return ek.eachConnection(tI), !1;
}
function nV(e) {
    let { enabled: n } = e,
        r = tC({ openH264: n });
    ek.setH264Enabled(r.hardwareEncoding || r.openH264),
        ek.eachConnection((e) => {
            var n;
            return e.setSoftwareH264(null === (n = r.openH264) || void 0 === n || n);
        });
}
function nj(e) {
    let { enabled: n } = e,
        r = tC({ aecDumpEnabled: n });
    ek.setAecDump(r.aecDumpEnabled);
}
function nH(e) {
    let { state: n } = e,
        r = P.Z.isEnabled();
    if (n === e_.$7l.BACKGROUND && eq && !r) (e1 = !0), tE(!1);
    else {
        if (n !== e_.$7l.ACTIVE || !e1) return !1;
        (e1 = !1), tE(!0);
    }
    return !0;
}
function nY(e) {
    ek.eachConnection((n) => n.setBitRate(e.bitrate));
}
function nW() {
    if ((!eq && null == s) || null != eu.Z.getRTCConnectionId()) return !1;
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
class n$ extends (u = T.ZP.Store) {
    initialize() {
        tT(),
            tN(),
            nC(),
            t$(),
            (to = {
                [eg.AN.VIDEO]: ek.supports(eg.AN.VIDEO),
                [eg.AN.DESKTOP_CAPTURE]: ek.supports(eg.AN.DESKTOP_CAPTURE),
                [eg.AN.HYBRID_VIDEO]: ek.supports(eg.AN.HYBRID_VIDEO)
            }),
            this.waitFor(ei.default, es.Z, eo.Z, el.Z, eu.Z, M.ZP, K.Z.storage, q.Z, w.Z, O.Z);
    }
    supports(e) {
        return ek.supports(e);
    }
    supportsInApp(e) {
        return to[e] || ek.supports(e);
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
        let n = (null === (e = eo.Z.getChannel(e9)) || void 0 === e ? void 0 : e.type) === e_.d4z.GUILD_STAGE_VOICE,
            r = i.getHardwareEncoding();
        return !n && r && Z.Z.simulcastEnabled();
    }
    getAecDump() {
        return t_().aecDumpEnabled;
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
        return !this.isEnabled() || t_(e).mute || !K.Z.didHavePermission(ep.Eu.AUDIO) || this.isSelfDeaf(e) || (e === eg.Yn.DEFAULT && eK);
    }
    shouldSkipMuteUnmuteSound() {
        return eX;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        eX = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eg.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && es.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return tu;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eg.Yn.DEFAULT;
        return !this.isSupported() || t_(e).deaf;
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
        return eF === e && null != s;
    }
    isSoundSharing() {
        var e;
        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eg.Yn.STREAM;
        return eF === n && null != s && (null === (e = s.desktopSource) || void 0 === e ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eg.Yn.DEFAULT;
        return e !== ei.default.getId() && (t_(n).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return ek.supports(eg.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var n;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eg.Yn.DEFAULT;
        return null !== (n = t_(r).disabledLocalVideos[e]) && void 0 !== n && n;
    }
    getVideoToggleState(e) {
        var n;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eg.Yn.DEFAULT;
        return null !== (n = t_(r).videoToggleStateMap[e]) && void 0 !== n ? n : e_.ZUi.NONE;
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
        return s;
    }
    getGoLiveContext() {
        return eF;
    }
    getLocalPan(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eg.Yn.DEFAULT,
            r = t_(n).localPans[e];
        return null != r ? r : eR;
    }
    getLocalVolume(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eg.Yn.DEFAULT,
            r = n === eg.Yn.STREAM ? eg.Yh : eg.Qx,
            i = t_(n).localVolumes[e];
        return null != i ? i : r;
    }
    getInputVolume() {
        return t_().inputVolume;
    }
    getOutputVolume() {
        return t_().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eg.Yn.DEFAULT;
        return t_(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eg.Yn.DEFAULT;
        return t_(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            g().each(eU, (n, r) => {
                let {
                    mode: i,
                    modeOptions: { shortcut: a }
                } = n;
                i === e_.pM4.PUSH_TO_TALK && eB.has(r) && (e[r] = a);
            }),
            e
        );
    }
    getInputDeviceId() {
        return tw(eV, t_().inputDeviceId);
    }
    getOutputDeviceId() {
        return tw(ej, t_().outputDeviceId);
    }
    getVideoDeviceId() {
        return tw(eH, t_().videoDeviceId);
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
        let e = t_();
        return es.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
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
        return ek.getLoopback();
    }
    getNoiseSuppression() {
        let e = t_();
        return es.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = t_();
        return es.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
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
        return ek.getDebugLogging();
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
        return tS() && t_().automaticAudioSubsystem ? eg.iA.AUTOMATIC : ek.getAudioSubsystem();
    }
    getMLSSigningKey(e, n) {
        return ek.getMLSSigningKey(e, n);
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eg.Yn.DEFAULT;
        return t_(e);
    }
    getState() {
        return {
            settingsByContext: eU,
            inputDevices: eV,
            outputDevices: ej,
            appSupported: to,
            krispModuleLoaded: e8,
            goLiveSource: s,
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
        return $.isPlatformEmbedded || this.getMode() !== e_.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, n) {
        ek.eachConnection((r) => r.setCanHavePriority(e, n));
    }
    isInteractionRequired() {
        return eZ;
    }
    getVideoHook() {
        return t_().videoHook;
    }
    supportsVideoHook() {
        return ek.supports(eg.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = t_().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e);
    }
    supportsExperimentalSoundshare() {
        return ek.supports(eg.AN.EXPERIMENTAL_SOUNDSHARE) && v().satisfies(null === N.Z || void 0 === N.Z ? void 0 : N.Z.os.release, eh.I9);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            n = t_().useSystemScreensharePicker,
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
        return t_().openH264;
    }
    getEverSpeakingWhileMuted() {
        return eJ;
    }
    getSpeakingWhileMuted() {
        return e$;
    }
    supportsScreenSoundshare() {
        return (0, $.isMac)() ? ek.supports(eg.AN.SOUNDSHARE) && v().satisfies(null === N.Z || void 0 === N.Z ? void 0 : N.Z.os.release, eh.yG) && ty() : (0, $.isWindows)() ? ek.supports(eg.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, $.isLinux)() && ek.supports(eg.AN.SCREEN_SOUNDSHARE);
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
            s = i.canSupportDaveProtocol || (null == a ? void 0 : a.canSupportDaveProtocol),
            o = Math.max(i.protocolVersionFloor, null !== (n = null == a ? void 0 : a.protocolVersionFloor) && void 0 !== n ? n : 0),
            l = r > 5 && 114 === r;
        return s && (r >= o || l) ? r : 0;
    }
    hasClipsSource() {
        return null != o;
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
        AUDIO_SET_LOOPBACK: ns,
        AUDIO_SET_NOISE_SUPPRESSION: nl,
        AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nu,
        AUDIO_SET_NOISE_CANCELLATION: nc,
        AUDIO_SET_DISPLAY_SILENCE_WARNING: n_,
        AUDIO_SET_DEBUG_LOGGING: nh,
        MEDIA_ENGINE_SET_VIDEO_HOOK: np,
        MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: nm,
        MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: ng,
        AUDIO_SET_ATTENUATION: nE,
        AUDIO_SET_QOS: nv,
        MEDIA_ENGINE_DEVICES: t9,
        AUDIO_VOLUME_CHANGE: ne,
        AUDIO_RESET: nI,
        AUDIO_INPUT_DETECTED: nT,
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
        SET_VAD_PERMISSION: nb,
        SET_NATIVE_PERMISSION: ny,
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
