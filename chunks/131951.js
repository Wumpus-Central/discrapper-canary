let r, i, o, a;
n.d(t, { Z: () => n9 }), n(47120), n(301563), n(571269), n(298267), n(566702), n(26686), n(266796), n(773603), n(653041), n(337869);
var s,
    l = n(512722),
    c = n.n(l),
    u = n(392711),
    d = n.n(u),
    f = n(209739),
    p = n.n(f),
    _ = n(404097),
    h = n(442837),
    m = n(46973),
    g = n(433517),
    E = n(846519),
    v = n(570140),
    b = n(579806),
    y = n(887278),
    O = n(547727),
    S = n(435064),
    I = n(779618),
    T = n(569611),
    N = n(710845),
    A = n(535911),
    C = n(353926),
    R = n(646047),
    P = n(594190),
    w = n(502286),
    D = n(12898),
    x = n(355552),
    L = n(294473),
    M = n(706629),
    k = n(166884),
    j = n(998594),
    U = n(14457),
    G = n(529558),
    B = n(111672),
    Z = n(441167),
    F = n(338336),
    V = n(751571),
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
    ep = n(761274),
    e_ = n(526761),
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
function ev(e, t) {
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
function eb(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ev(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ey = new N.Z('MediaEngineStore'),
    eO = 'MediaEngineStore',
    eS = 4,
    eI = 1,
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
    ex = 100,
    eL = '>=21.0.0',
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
ey.enableNativeLogger(!0);
let eU = {},
    eG = new Set([eh.Yn.DEFAULT]),
    eB = ej.supports(eh.AN.AUTO_ENABLE),
    eZ = !1,
    eF = eh.Yn.STREAM,
    eV = { [eh.w5]: tk('No Input Devices') },
    eH = { [eh.w5]: tk('No Output Devices') },
    eW = { [eh.w5]: tk('No Video Devices') },
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
V.Z.hasPermission(ep.Eu.AUDIO, { showAuthorizationError: !1 }), V.Z.hasPermission(ep.Eu.CAMERA, { showAuthorizationError: !1 });
let tl = !1,
    tc = new Set(),
    tu = tl,
    td = new Set(),
    tf = {},
    tp = null,
    t_ = !0,
    th = {},
    tm = 5 * Q.Z.Millis.SECOND;
function tg() {
    var e, t;
    return null !== (t = null === (e = ec.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t ? 'always' : J.Z === _.R.CANARY ? 'permittedDevicesOnly' : 'never';
}
function tE() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT,
        t = eU[e];
    return null == t && ((t = ek()), (eU[e] = t)), t;
}
function tv(e) {
    let t = tE(e.context);
    e.setInputMode(t.mode, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: t.modeOptions.autoThreshold,
        vadUseKrisp: t.modeOptions.vadUseKrisp && nR(),
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        pttReleaseDelay: t.modeOptions.delay
    });
}
function tb(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Qx;
    return d().clamp(e, 0, t);
}
function ty(e) {
    let t = tE(e.context),
        n = !eB || t.mute || t.deaf;
    e.context === eh.Yn.DEFAULT ? (n = n || eY || eK || ez || !V.Z.didHavePermission(ep.Eu.AUDIO)) : e.context === eh.Yn.STREAM && (n = !0), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eh.Yn.DEFAULT && O.Z.updateNativeMute();
}
function tO(e) {
    e !== eF && (null != o && ej.setGoLiveSource(null, eF), (eF = e));
}
function tS() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eQ,
        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
        s = o;
    if (((null == s ? void 0 : s.desktopSource) != null && s.desktopSource.id !== (null == a ? void 0 : null === (e = a.desktopSource) || void 0 === e ? void 0 : e.id) && (null != s.desktopSource.soundshareId && (0, X.isWindows)() && y.pn(s.desktopSource.soundshareId), ej.setGoLiveSource(null, eF)), (null == s ? void 0 : s.cameraSource) != null && (s.cameraSource.videoDeviceGuid !== (null == a ? void 0 : null === (t = a.cameraSource) || void 0 === t ? void 0 : t.videoDeviceGuid) || s.cameraSource.audioDeviceGuid !== (null == a ? void 0 : null === (n = a.cameraSource) || void 0 === n ? void 0 : n.audioDeviceGuid)) && ej.setGoLiveSource(null, eF), (eQ || i) && ((eX = (eQ = i) ? tU(eW, tE().videoDeviceId) : eh.Av), ej.setVideoInputDevice(eX)), (o = a), null != a)) {
        let e = {
            resolution: a.quality.resolution,
            frameRate: a.quality.frameRate
        };
        if (null != a.desktopSource) {
            let t = tg(),
                n = tE().videoHook;
            ej.setGoLiveSource(
                {
                    desktopDescription: {
                        id: a.desktopSource.id,
                        soundshareId: a.desktopSource.soundshareId,
                        useVideoHook: n,
                        useGraphicsCapture: tA(),
                        useLoopback: r.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: tC(),
                        videoHookStaleFrameTimeoutMs: eP,
                        graphicsCaptureStaleFrameTimeoutMs: ew,
                        hdrCaptureMode: t
                    },
                    quality: e
                },
                eF
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
                eF
            );
    }
}
function tI(e, t, n, r) {
    var i;
    let o = null !== (i = null == e ? void 0 : e.soundshareSession) && void 0 !== i ? i : '';
    null == th[o] && (th[o] = new Set());
    let a = null != t && !th[o].has(t);
    a && th[o].add(t),
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
function tT(e) {
    let t = tE(),
        n = t.inputDeviceId;
    if ((e.setEchoCancellation(ei.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(ei.Z.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(ei.Z.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), e.setVoiceFiltersEnabled(null !== te), (0, X.isWeb)())) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function tN() {
    ej.on(m.aB.Connection, (e) => {
        var t, n, i, a;
        tv(e), ty(e), tT(e);
        let s = tE();
        e.setAttenuation(s.attenuation, s.attenuateWhileSpeakingSelf, s.attenuateWhileSpeakingOthers), e.setQoS(s.qos), e.setExperimentalEncoders(s.experimentalEncoders), e.setHardwareH264(null === (t = s.hardwareEncoding) || void 0 === t || t), e.setSoftwareH264(null === (n = s.openH264) || void 0 === n || n);
        let l = es.Z.getGuildId(),
            { muteBeforeProcessing: c, pttBeforeProcessing: u, skipEncode: d } = (null != l ? M.Z : L.Z).getCurrentConfig(eE({ location: 'setupMediaEngine' }, null != l && { guildId: l }), { autoTrackExposure: !0 });
        c && e.setExperimentFlag(eh.V8.MUTE_BEFORE_PROCESSING, !0), u && e.setExperimentFlag(eh.V8.PTT_BEFORE_PROCESSING, !0), d && e.setExperimentFlag(eh.V8.SKIP_ENCODE, !0);
        let f = !1,
            p = !0;
        if ((e.setExperimentFlag(eh.V8.RESET_DECODER_ON_ERRORS, !0), f && e.setExperimentFlag(eh.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0), p && e.setExperimentFlag(eh.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0), e.context === eh.Yn.STREAM)) {
            let { simulcastEnabled: t, lqStreamBitrate: n } = k.Z.getConfig();
            e.configureGoLiveSimulcast(t, n);
        }
        (0, X.isWindows)() ? ((null == tp ? void 0 : tp.startsWith('NVIDIA')) ? e.setExperimentFlag(eh.V8.SIGNAL_AV1, !0) : (null == tp ? void 0 : tp.startsWith('AMD')) && parseInt(null !== (a = null === (i = tp.match(/\d+/)) || void 0 === i ? void 0 : i.at(0)) && void 0 !== a ? a : '0', 10) >= 9000 && D.Z.getCurrentConfig({ location: 'setupMediaEngine' }, { autoTrackExposure: !0 }).signalAV1Support ? e.setExperimentFlag(eh.V8.SIGNAL_AV1, !0) : e.setExperimentFlag(eh.V8.SIGNAL_AV1_DECODE, !0)) : ((0, X.isMac)() || (0, X.isLinux)()) && e.setExperimentFlag(eh.V8.SIGNAL_AV1_DECODE, !0), (0, X.isWindows)() && e.setExperimentFlag(eh.V8.SIGNAL_AV1_HARDWARE_DECODE, !0), ej.setHasFullbandPerformance((0, A.Z)());
        let h = x.s.getCurrentConfig({ location: 'setupMediaEngine' }, { autoTrackExposure: !0 }).enabled;
        if ((e.setRemoteAudioHistory(1000 * !!h), (0, I.Z)(r))) {
            let t = S.Z.getSettings();
            e.setExperimentFlag(eh.V8.STREAMER_CLIP, t.clipsEnabled);
            let { enableViewerClipping: n } = Z.Z.getCurrentConfig({ location: 'f627ab_15' }, { autoTrackExposure: !1 });
            e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eh.ux);
        }
        for (let t of ((s = tE(e.context)), e.setPostponeDecodeLevel(ex), Object.keys(s.localMutes))) t !== en.default.getId() && e.setLocalMute(t, s.localMutes[t]);
        for (let t of Object.keys(s.localVolumes)) t !== en.default.getId() && e.setLocalVolume(t, s.localVolumes[t]);
        for (let t of Object.keys(s.localPans)) {
            let n = s.localPans[t];
            e.setLocalPan(t, n.left, n.right);
        }
        for (let t of Object.keys(s.disabledLocalVideos)) e.setLocalVideoDisabled(t, s.disabledLocalVideos[t]);
        e.on(m.Sh.Speaking, (t, n) => {
            v.Z.dispatch({
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
                v.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                    settings: { context: e.context }
                });
            }),
            e.on(m.Sh.SoundshareAttached, () => {
                (null == o ? void 0 : o.desktopSource) != null && z.default.track(ed.rMx.SOUNDSHARE_ATTACHED, (0, w.Z)(null == o ? void 0 : o.desktopSource));
            }),
            e.on(m.Sh.SoundshareFailed, (e) => {
                let { failureCode: t, failureReason: n, willRetry: r } = e;
                tI(null == o ? void 0 : o.desktopSource, t, n, r);
            }),
            e.on(m.Sh.SoundshareSpeaking, () => {
                (null == o ? void 0 : o.desktopSource) != null && (z.default.track(ed.rMx.SOUNDSHARE_TRANSMITTING, (0, w.Z)(null == o ? void 0 : o.desktopSource)), null != ea.Z.getHookError(ed.K3D.SOUND) && v.Z.wait(() => v.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
            });
        let g = new E.V7();
        e.on(m.Sh.SoundshareTrace, (e) => {
            switch (e.type) {
                case 'soundshare_attach_requested':
                    g.start(tm, () => {
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
                        (tI(null == o ? void 0 : o.desktopSource, n, t, r),
                        r ||
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
                ey.warn('noisecancellererror event: '.concat(e)),
                    (to = !0),
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
                ey.warn('voiceactivitydetectorerror event: '.concat(e)),
                    z.default.track(ed.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    v.Z.dispatch({
                        type: 'AUDIO_SET_MODE',
                        context: eh.Yn.DEFAULT,
                        mode: ed.pM4.VOICE_ACTIVITY,
                        options: eb(eE({}, tE(eh.Yn.DEFAULT).modeOptions), { vadUseKrisp: !1 })
                    }),
                    v.Z.dispatch({
                        type: 'MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR',
                        code: e
                    });
            }),
            e.on(m.Sh.SdpError, (e, t, n, r) => {
                if (J.Z === _.R.CANARY) {
                    let i = (0, T.A7)()
                            .filter((e) => 'UnifiedConnection(default)' === e.category)
                            .map((e) => ''.concat(e.time, ': ').concat(e.message).trim()),
                        o = ''.concat(r, ', logs: ').concat(JSON.stringify(i));
                    z.default.track(ed.rMx.SDP_ERROR, {
                        operation: e,
                        error: t,
                        type: n,
                        sdp: o
                    });
                }
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
            e.setBitRate(er.Z.bitrate),
            e.applyVideoQualityMode(eu.Z.mode);
    }),
        ej.on(m.aB.DeviceChange, (e, t, n) => {
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_DEVICES',
                inputDevices: e,
                outputDevices: t,
                videoDevices: n
            });
        }),
        ej.on(m.aB.VolumeChange, (e, t) => {
            v.Z.dispatch({
                type: 'AUDIO_VOLUME_CHANGE',
                inputVolume: e,
                outputVolume: t
            });
        }),
        ej.on(m.aB.DesktopSourceEnd, () => {
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                settings: null
            });
        }),
        ej.on(m.aB.AudioPermission, (e) => {
            (ts = !0),
                v.Z.dispatch({
                    type: 'MEDIA_ENGINE_PERMISSION',
                    kind: 'audio',
                    granted: e
                });
        }),
        ej.on(m.aB.VideoPermission, (e) => {
            v.Z.dispatch({
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
            ey.warn('Watchdog timeout, report submission status: '.concat(null != e ? e : 200)), z.default.track(ed.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        ej.on(m.aB.VideoInputInitialized, (e) => {
            z.default.track(ed.rMx.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * Q.Z.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: es.Z.getMediaSessionId(),
                rtc_connection_id: es.Z.getRTCConnectionId()
            });
        }),
        ej.on(m.aB.AudioInputInitialized, (e) => {
            z.default.track(ed.rMx.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * Q.Z.Millis.SECOND),
                rtc_connection_id: es.Z.getRTCConnectionId()
            });
        }),
        ej.on(m.aB.ClipsRecordingRestartNeeded, () => {
            v.Z.dispatch({ type: 'CLIPS_RESTART' });
        }),
        ej.on(m.aB.ClipsInitFailure, (e, t) => {
            v.Z.wait(() => {
                v.Z.dispatch({
                    type: 'CLIPS_INIT_FAILURE',
                    errMsg: e,
                    applicationName: t
                });
            });
        }),
        ej.on(m.aB.ClipsRecordingEnded, (e, t) => {
            var n, r;
            (null == a ? void 0 : null === (n = a.desktopSource) || void 0 === n ? void 0 : n.id) === e && (null != t && (null == o ? void 0 : null === (r = o.desktopSource) || void 0 === r ? void 0 : r.soundshareId) !== t && y.pn(t), (a = null));
        }),
        ej.on(m.aB.NativeScreenSharePickerUpdate, (e) => {
            j.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerUpdate' }),
                v.Z.dispatch({
                    type: 'NATIVE_SCREEN_SHARE_PICKER_UPDATE',
                    existing: e
                });
        }),
        ej.on(m.aB.NativeScreenSharePickerCancel, (e) => {
            j.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerCancel' }),
                v.Z.dispatch({
                    type: 'NATIVE_SCREEN_SHARE_PICKER_CANCEL',
                    existing: e
                });
        }),
        ej.on(m.aB.NativeScreenSharePickerError, (e) => {
            j.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerError' }),
                v.Z.dispatch({
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
        ej.setOnVideoContainerResized((e, t, n) => {
            v.Z.wait(() =>
                v.Z.dispatch({
                    type: 'VIDEO_SIZE_UPDATE',
                    streamId: e,
                    width: t,
                    height: n
                })
            );
        }),
        tP.reset(),
        (0, el.q)().then((e) => {
            null != e && (tp = e.gpu_brand);
        });
}
function tA() {
    return (0, X.isWindows)() && p().satisfies(null === b.Z || void 0 === b.Z ? void 0 : b.Z.os.release, ef.nz);
}
function tC() {
    return (0, X.isMac)() && ej.supports(eh.AN.SCREEN_CAPTURE_KIT) && p().satisfies(null === b.Z || void 0 === b.Z ? void 0 : b.Z.os.release, ef.C7);
}
function tR() {
    return (0, X.isWindows)() && ej.supports(eh.AN.AUTOMATIC_AUDIO_SUBSYSTEM) && ej.supports(eh.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH);
}
let tP = new (class {
    start() {
        this.started || ((this.started = !0), ej.on(m.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            ej.removeListener(m.aB.Silence, this.handleSilence),
            v.Z.dispatch({
                type: 'AUDIO_INPUT_DETECTED',
                inputDetected: null
            }));
    }
    update() {
        let e = tE();
        !e6 && es.Z.getState() === ed.hes.RTC_CONNECTED && e.mode === ed.pM4.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop();
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
                                    e && (e5 = !0));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout
                    ));
            });
    }
})();
function tw() {
    var e;
    let t = g.K.get('audio');
    null != t && (g.K.set(eO, { [eh.Yn.DEFAULT]: t }), g.K.remove('audio')),
        (eU = null !== (e = g.K.get(eO)) && void 0 !== e ? e : {}),
        d().each(eU, (e) => {
            if ((d().defaultsDeep(e, ek()), null != e.modeOptions && 'string' == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, et.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== eS && ((e.vadUseKrispSettingVersion = eS), (e.modeOptions.vadUseKrisp = !0)), e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)), !e.vadThrehsoldMigrated)) {
                var t;
                (e.vadThrehsoldMigrated = !0), (null === (t = e.modeOptions) || void 0 === t ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = eD);
            }
            (0, X.isWeb)() ? e.ncUseKrispjsSettingVersion !== eT && ((e.ncUseKrispjsSettingVersion = eT), (e.noiseSuppression = !1), (e.noiseCancellation = !0)) : e.ncUseKrispSettingVersion !== eI && ((e.ncUseKrispSettingVersion = eI), (e.noiseSuppression = !1), (e.noiseCancellation = !0)), e.hardwareEnabledVersion !== eN && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = eN)), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
        }),
        tL();
}
function tD(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = tE(t);
    return Object.assign(r, e), !__OVERLAY__ && n && g.K.set(eO, eU), r;
}
function tx() {
    g.K.remove(eO), location.reload();
}
function tL() {
    var e, t, n;
    let r = tE();
    ej.setAudioInputDevice(r.inputDeviceId), ej.setAudioOutputDevice(r.outputDeviceId), tS(), ej.setInputVolume(r.inputVolume), ej.setOutputVolume(r.outputVolume), ej.setH264Enabled(null === (e = r.hardwareEncoding) || void 0 === e || e || r.openH264), ej.setAv1Enabled(null === (t = r.hardwareEncoding) || void 0 === t || t), ej.setH265Enabled(null === (n = r.hardwareEncoding) || void 0 === n || n), ej.setAecDump(r.aecDumpEnabled), ej.setSidechainCompression(r.sidechainCompression), ej.setSidechainCompressionStrength(r.sidechainCompressionStrength);
}
function tM() {
    eB ||
        ej.enable().then(() =>
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
                enabled: !0,
                unmute: !1
            })
        );
}
function tk(e) {
    return {
        id: eh.w5,
        index: 0,
        name: e,
        disabled: !0
    };
}
function tj(e, t) {
    if (0 === e.length) {
        let e = tk(t);
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
function tU(e, t) {
    var n;
    let r = null !== (n = e[t]) && void 0 !== n ? n : d()(e).values().first();
    return null != r ? r.id : t;
}
function tG(e) {
    let t = eV;
    if (((eV = tj(e, em.NW.string(em.t['/QIjDA']))), !d().isEqual(eV, t))) {
        let e = tE(),
            t = tU(eV, e.inputDeviceId);
        ej.setAudioInputDevice(t);
    }
}
function tB(e) {
    let t = eH;
    if (((eH = tj(e, em.NW.string(em.t.xlUg0t))), !d().isEqual(eH, t))) {
        let e = tE(),
            t = tU(eH, e.outputDeviceId);
        ej.setAudioOutputDevice(t);
    }
}
function tZ(e) {
    e3 = e.length > 0;
    let t = eW;
    if (((eW = tj(e, em.NW.string(em.t.WKWARU))), eQ && !d().isEqual(eW, t))) {
        var n;
        let e = void 0 !== eW[eX],
            r = eX === eh.w5 && (null === (n = t[eh.w5]) || void 0 === n ? void 0 : n.disabled);
        tS(e || r);
    }
}
function tF() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        r =
            null !== (e = W.Z.settings.audioContextSettings) && void 0 !== e
                ? e
                : {
                      user: {},
                      stream: {}
                  };
    for (let e of Object.keys(r)) {
        let i = e === e_.u0.USER ? eh.Yn.DEFAULT : eh.Yn.STREAM,
            o = i === eh.Yn.STREAM ? eh.Yh : eh.Qx,
            a = null !== (t = r[e]) && void 0 !== t ? t : {},
            { localMutes: s, localVolumes: l } = tE(i);
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
        tD(
            {
                localMutes: s,
                localVolumes: l
            },
            i
        );
    }
}
function tV(e) {
    if (null == r)
        return (
            ey.info('Error: trying to get soundshare id before MediaEngineStore is instantiated.'),
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
function tH(e, t) {
    (0, X.isWindows)() &&
        y.YT(e, { soundshare_session: t }).then((t) => {
            null == t ||
                P.ZP.shouldContinueWithoutElevatedProcessForPID(e) ||
                v.Z.wait(() => {
                    v.Z.dispatch({
                        type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
                        errorMessage: t
                    });
                });
        });
}
function tW(e) {
    (i = e.sessionId),
        (eY = !1),
        (eq = !1),
        (0, X.isWeb)() ||
            B.Z.subscribe({ location: 'handleConnectionOpen' }, (e) => {
                let t = tE();
                !e.sidechainAvailable && t.sidechainCompression ? (tD({ sidechainCompressionSettingVersion: 0 }), nu(!1)) : e.sidechainAvailable && t.sidechainCompressionSettingVersion < eA && (tD({ sidechainCompressionSettingVersion: eA }), nu(e.sidechainEnabled));
            });
    let t = tE();
    tR() && (t.automaticAudioSubsystem && nG(), t.audioSubsystemSettingVersion < eC && (tD({ audioSubsystemSettingVersion: eC }), t.automaticAudioSubsystem || ej.getAudioSubsystem() === eh.iA.LEGACY || nU(eh.iA.AUTOMATIC))),
        (0, K.wt)({
            location: 'MediaEngineStore',
            autoTrackExposure: !1
        }) &&
            null !== t.mostRecentlyRequestedVoiceFilter &&
            (0, Y.J_)(),
        tF();
}
function tY(e) {
    let { mediaEngineState: t } = e;
    (eU = t.settingsByContext), (eV = t.inputDevices), (eH = t.outputDevices), (tf = t.appSupported), (e9 = t.krispModuleLoaded), (eF = t.goLiveContext);
}
function tK() {
    i = null;
}
function tz(e) {
    switch (e.state) {
        case ed.hes.CONNECTING:
            tM();
            break;
        case ed.hes.RTC_CONNECTING:
            (e6 = !1), (e5 = !1);
            break;
        case ed.hes.RTC_CONNECTED:
            tS();
            break;
        case ed.hes.DISCONNECTED:
            t3(), t4();
    }
    tP.update();
}
function tq(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => (i === t.sessionId ? ((eY = t.mute || t.suppress), (eq = t.deaf), ej.eachConnection(ty), tS((null == t.guildId || null == t.channelId || null == ti || ti === t.channelId) && eQ), (ti = t.channelId), !0) : (__OVERLAY__ || t.userId !== en.default.getId() || null != es.Z.getChannelId() || tS(!1, null), e)), !1);
}
function tQ(e) {
    let { mute: t } = e;
    (eK = t), ej.eachConnection(ty);
}
function tX(e) {
    let { context: t, skipMuteUnmuteSoundEffect: n } = e,
        { mute: r, deaf: i } = tE(t);
    if (t === eh.Yn.DEFAULT && (V.Z.requestPermission(ep.Eu.AUDIO), ez)) return !1;
    (r = !i && !r) || (i = !1),
        n && (eJ = !0),
        tD(
            {
                mute: r,
                deaf: i
            },
            t
        ),
        ej.eachConnection(ty);
}
function tJ(e) {
    let { context: t, mute: n } = e;
    tD({ mute: n }, t), ej.eachConnection(ty);
}
function t$(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r
    } = e;
    if (t !== e_.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    tF(!0);
}
function t0(e) {
    let { context: t } = e;
    tD({ deaf: !tE(t).deaf }, t), ej.eachConnection(ty);
}
function t1(e) {
    let { context: t, userId: n } = e;
    if (n === en.default.getId()) return;
    let { localMutes: r } = tE(t);
    r[n] ? delete r[n] : (r[n] = !0), tD({ localMutes: r }, t), ej.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function t2(e) {
    var t, n, r, i, o, a, s;
    let { context: l, userId: u, videoToggleState: d, persist: f, isAutomatic: p } = e;
    c()(!(f && p), 'These are not allowed to both be true.');
    let _ = d === ed.ZUi.DISABLED,
        { disabledLocalVideos: h } = tE(l),
        m = null !== (t = h[u]) && void 0 !== t && t,
        g = tc.has(u),
        E = d === ed.ZUi.AUTO_ENABLED || d === ed.ZUi.MANUAL_ENABLED;
    ey.info('disableVideo='.concat(_, ' currentlyDisabled=').concat(m, ' currentlyAutoDisabled=').concat(g, ', isVideoShown=').concat(E)), c()(!(g && !m), 'If you are auto-disabled, then you are also disabled.');
    let v = _ !== m,
        b = l === eh.Yn.DEFAULT,
        y = p && v && b,
        O = f && v && b;
    ey.info('changed='.concat(v, ' isDefaultContext=').concat(b, ' isUpdateCausedByVideoHealthManager=').concat(y, ' isManualToggleByUser=').concat(O));
    let { videoToggleStateMap: S } = tE(l);
    if ((S[u] === ed.ZUi.AUTO_PROBING && d === ed.ZUi.AUTO_ENABLED && (0, F.Z)(u, _ ? eh.fC.AUTO_DISABLE : eh.fC.AUTO_ENABLE, E), (S[u] = d), tD({ videoToggleStateMap: S }, l, f), d === ed.ZUi.AUTO_PROBING ? null === (n = es.Z.getRTCConnection()) || void 0 === n || n.pauseStatsCollectionForUser(u, !0) : null === (r = es.Z.getRTCConnection()) || void 0 === r || r.pauseStatsCollectionForUser(u, !1), tu || (ey.info('isAutoDisableAllowed='.concat(tu, ' - disabling VideoHealthManager')), null === (o = es.Z.getRTCConnection()) || void 0 === o || null === (i = o.getVideoHealthManager()) || void 0 === i || i.disable()), y)) {
        if ((!_ && !g) || (_ && !tu)) return;
        (0, F.Z)(u, _ ? eh.fC.AUTO_DISABLE : eh.fC.AUTO_ENABLE, E), _ ? tc.add(u) : tc.delete(u);
    } else O && (g && !_ ? (ey.info('disallowing auto-disable for this session because of manual override by user'), (tu = !1), null === (s = es.Z.getRTCConnection()) || void 0 === s || null === (a = s.getVideoHealthManager()) || void 0 === a || a.disable(), (0, F.Z)(u, eh.fC.MANUAL_REENABLE, E)) : (0, F.Z)(u, _ ? eh.fC.MANUAL_DISABLE : eh.fC.MANUAL_ENABLE, E));
    b && !_ && tc.delete(u),
        _ ? (h[u] = !0) : delete h[u],
        tD({ disabledLocalVideos: h }, l, f),
        ej.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(u, null !== (t = h[u]) && void 0 !== t && t);
        }, l);
}
function t3() {
    if (0 === tc.size) return;
    let e = eh.Yn.DEFAULT,
        { disabledLocalVideos: t } = tE(e);
    tc.forEach((n) => {
        c()(t[n], 'If you are auto-disabled, then you are also disabled.'), delete t[n], ej.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tc.clear(),
        tD({ disabledLocalVideos: t }, e, !1);
}
function t4() {
    let e = eh.Yn.DEFAULT,
        { videoToggleStateMap: t } = tE(e);
    for (let [e, n] of Object.entries(t)) n === ed.ZUi.AUTO_PROBING && delete t[e];
    tD({ videoToggleStateMap: t }, e, !1);
}
function t6(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === en.default.getId()) return;
    let i = t === eh.Yn.STREAM ? eh.Yh : eh.Qx,
        { localVolumes: o } = tE(t);
    r === i ? delete o[n] : (o[n] = r), tD({ localVolumes: o }, t), ej.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function t5(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: o } = tE(t);
    (o[n] = {
        left: r,
        right: i
    }),
        tD({ localPans: o }, t),
        ej.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function t7(e) {
    let { context: t, mode: n, options: r } = e;
    tD(
        {
            mode: n,
            modeOptions: r
        },
        t
    ),
        ej.eachConnection(tv),
        tP.update();
}
function t8(e) {
    let { volume: t } = e;
    tD({ inputVolume: tb(t) }), ej.setInputVolume(t);
}
function t9(e) {
    let { volume: t } = e;
    tD({ outputVolume: t }), ej.setOutputVolume(t);
}
function ne(e) {
    let { id: t } = e;
    tD({ inputDeviceId: (t = tU(eV, t)) }), ej.setAudioInputDevice(t);
}
function nt(e) {
    let { id: t } = e;
    tD({ outputDeviceId: (t = tU(eH, t)) }), ej.setAudioOutputDevice(t);
}
function nn(e) {
    let { id: t } = e;
    tD({ videoDeviceId: (t = tU(eW, t)) }), tS();
}
function nr(e) {
    return eZ !== e.required && ((eZ = e.required), e.required || ej.interact(), !0);
}
function ni(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    tG(t), tB(n), tZ(r);
}
function no(e) {
    let { inputVolume: t, outputVolume: n } = e;
    tD({
        inputVolume: tb(t),
        outputVolume: n
    });
}
function na(e) {
    let t = tE();
    z.default.track(ed.rMx.VOICE_PROCESSING, {
        echo_cancellation: t.echoCancellation,
        noise_cancellation: t.noiseCancellation,
        noise_suppression: t.noiseSuppression,
        automatic_gain_control: t.automaticGainControl,
        location: e
    });
}
function ns(e) {
    let t = tD({ echoCancellation: e.enabled });
    ej.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nf(), na(e.location);
}
function nl(e) {
    nu(e.enabled);
}
function nc(e) {
    let t = tD({ sidechainCompressionStrength: e.strength });
    ej.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function nu(e) {
    let t = tD({ sidechainCompression: e });
    ej.setSidechainCompression(t.sidechainCompression);
}
function nd(e) {
    let { enabled: t, loopbackReason: n } = e,
        r = td.size > 0;
    return t ? td.add(n) : td.delete(n), td.size > 0 !== r && nf();
}
function nf() {
    let e = tE(),
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
function np(e) {
    let t = tD({ noiseSuppression: e.enabled });
    ej.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nf(), na(e.location);
}
function n_(e) {
    let t = tD({ automaticGainControl: e.enabled });
    ej.eachConnection((e) => e.setAutomaticGainControl(t.automaticGainControl)), nf(), na(e.location);
}
function nh(e) {
    let t = tD({ noiseCancellation: e.enabled });
    ej.eachConnection((e) => e.setNoiseCancellation(t.noiseCancellation)), nf(), na(e.location);
}
function nm(e) {
    let t = tD({ experimentalEncoders: e.enabled });
    ej.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
}
function ng(e) {
    var t, n;
    let { enabled: r } = e,
        i = tD({ hardwareEncoding: r });
    ej.eachConnection((e) => {
        var t;
        return e.setHardwareH264(null === (t = i.hardwareEncoding) || void 0 === t || t);
    }),
        ej.setH264Enabled(i.hardwareEncoding || i.openH264),
        ej.setAv1Enabled(null === (t = i.hardwareEncoding) || void 0 === t || t),
        ej.setH265Enabled(null === (n = i.hardwareEncoding) || void 0 === n || n);
}
function nE(e) {
    tD({ silenceWarning: e.enabled }), tP.update();
}
function nv(e) {
    ej.setDebugLogging(e.enabled);
}
function nb(e) {
    tD({ videoHook: e.enabled });
}
function ny(e) {
    tD({ experimentalSoundshare2: e.enabled });
}
function nO(e) {
    let { enabled: t } = e;
    tD({ useSystemScreensharePicker: t });
}
function nS(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = tD({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r
        });
    ej.eachConnection((e) => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers));
}
function nI(e) {
    let { enabled: t } = e;
    tD({ qos: t }), ej.eachConnection((e) => e.setQoS(t));
}
function nT() {
    tx();
}
function nN(e) {
    let { inputDetected: t } = e;
    (e4 = t), !e6 && e4 && ((e6 = !0), tP.update());
}
function nA(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === ez) return !1;
    (ez = n), ej.eachConnection(ty);
}
function nC(e) {
    let { state: t, permissionType: n } = e,
        r = t === ep.PQ.ACCEPTED;
    switch (n) {
        case ep.Eu.AUDIO:
            (ts = !0), ej.eachConnection(ty);
            break;
        case ep.Eu.CAMERA:
            !r && eQ && tS(!1);
            break;
        default:
            return !1;
    }
}
function nR() {
    return e9 || !1;
}
async function nP() {
    try {
        await ee.ZP.ensureModule('discord_krisp'), ee.ZP.requireModule('discord_krisp'), (e9 = !0), r.emitChange();
    } catch (t) {
        ey.warn('Failed to load Krisp module: '.concat(t.message)), $.Z.captureException(t);
        let e = eh.H3.INITIALIZED;
        if (t.message.includes(': ')) {
            let n = parseInt(t.message.substring(t.message.indexOf(': ') + 1));
            e = isNaN(n) || 0 === n ? eh.H3.INITIALIZED : n;
        }
        z.default.track(ed.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), tD({ noiseCancellation: !1 });
    } finally {
        e8 = !1;
    }
}
function nw() {
    return (0, X.isWindows)() || (0, X.isLinux)() || ((0, X.isMac)() && p().satisfies(null === b.Z || void 0 === b.Z ? void 0 : b.Z.os.release, eL));
}
function nD() {
    !nw() || __OVERLAY__ || e8 || e9 ? ((0, X.isWeb)() && ej.supports(eh.AN.NOISE_CANCELLATION) ? ((e9 = !0), r.emitChange()) : (0, X.isWeb)() && tD({ noiseCancellation: !1 })) : ((e8 = !0), nP());
}
function nx(e) {
    let { enabled: t } = e;
    z.default.track(ed.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != te ? te : null,
        enabled: t
    }),
        tD({ voiceFilterPlaybackEnabled: t });
}
function nL(e) {
    let { newVoiceFilterId: t } = e;
    tD({ mostRecentlyRequestedVoiceFilter: t });
    let n = null != t;
    ej.eachConnection((e) => e.setVoiceFiltersEnabled(n));
}
function nM() {
    tD({ mostRecentlyRequestedVoiceFilter: null });
}
function nk(e) {
    let { voiceFilterId: t } = e;
    (tn = te), (tr = tt), (te = t), (tt = null === t ? null : Date.now());
}
function nj(e) {
    nU(e.subsystem);
}
function nU(e) {
    e === eh.iA.AUTOMATIC ? (tD({ automaticAudioSubsystem: !0 }), nG()) : (tD({ automaticAudioSubsystem: !1 }), ej.setAudioSubsystem(e));
}
function nG() {
    let { enabled: e } = U.I.getCurrentConfig({ location: 'interpretAutomaticAudioSubsystem' });
    e ? ej.queueAudioSubsystem(eh.iA.EXPERIMENTAL) : ej.queueAudioSubsystem(eh.iA.STANDARD);
}
function nB(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && tS(i, null), null != t || null == n)) {
        e7 = !1;
        return;
    }
    if (e7) return;
    e7 = !0;
    let o = tE();
    (o.mute || o.deaf) &&
        (tD({
            deaf: !1,
            mute: !1
        }),
        ej.eachConnection(ty));
}
function nZ(e) {
    let { application: t } = e;
    eG.add(t.id);
}
function nF(e) {
    let { application: t } = e;
    eG.delete(t.id);
}
function nV(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case 'audio':
                (eB = !1), ej.eachConnection(ty);
                break;
            case 'video':
                tS(!1);
        }
}
function nH(e) {
    (eB = e.enabled),
        e.unmute &&
            tD({
                mute: !1,
                deaf: !1
            }),
        ej.eachConnection(ty);
}
function nW(e) {
    let { enabled: t } = e;
    V.Z.requestPermission(ep.Eu.CAMERA), tS(t);
}
function nY(e) {
    let { sourceId: t, applicationName: n, quality: i } = e,
        o = S.Z.isDecoupledGameClippingEnabled(),
        s = S.Z.getSettings().decoupledClipsEnabled;
    if (!o || !s || null == b.Z) return;
    let l = null,
        c = null,
        u = q.Z.getPidFromDesktopSource(t);
    ({ soundshareId: l, soundshareSession: c } = tV(u));
    let d = {
        desktopSource: {
            id: t,
            sourcePid: u,
            soundshareId: l,
            soundshareSession: c
        },
        quality: i
    };
    null != a && a.desktopSource.id !== d.desktopSource.id && (ej.setClipsSource(null), (0, X.isWindows)() && null != a.desktopSource.soundshareId && y.pn(a.desktopSource.soundshareId)), null != l && tH(l, c), (a = d);
    let f = tg(),
        p = tE().videoHook;
    ej.setClipsSource({
        desktopDescription: {
            id: a.desktopSource.id,
            soundshareId: a.desktopSource.soundshareId,
            useVideoHook: p,
            useGraphicsCapture: tA(),
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: tC(),
            videoHookStaleFrameTimeoutMs: eP,
            graphicsCaptureStaleFrameTimeoutMs: ew,
            hdrCaptureMode: f
        },
        quality: i,
        applicationName: n
    });
}
function nK(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((a = null), ej.setClipsSource(null));
}
function nz(e) {
    var t, n, r, i;
    let { settings: o } = e;
    if ((null == o ? void 0 : o.desktopSettings) != null) {
        let e = null,
            r = null,
            { sourceId: i, sound: a } = o.desktopSettings,
            s = null !== (t = o.context) && void 0 !== t ? t : eh.Yn.DEFAULT,
            l =
                null !== (n = o.qualityOptions) && void 0 !== n
                    ? n
                    : {
                          resolution: 720,
                          frameRate: 30
                      },
            c = !1 === a ? null : q.Z.getPidFromDesktopSource(i);
        X.isPlatformEmbedded && !0 === a && (({ soundshareId: e, soundshareSession: r } = tV(c)), null != e && tH(e, r)),
            tO(s),
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
        let e = null !== (r = o.context) && void 0 !== r ? r : eh.Yn.DEFAULT,
            { videoDeviceGuid: t, audioDeviceGuid: n } = o.cameraSettings,
            a = e === eh.Yn.STREAM && eQ,
            s =
                null !== (i = o.qualityOptions) && void 0 !== i
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
function nq(e) {
    let { section: t } = e;
    return t === ed.oAB.VOICE && tM(), !1;
}
function nQ() {
    return ej.eachConnection(tT), !1;
}
function nX(e) {
    let { enabled: t } = e,
        n = tD({ openH264: t });
    ej.setH264Enabled(n.hardwareEncoding || n.openH264),
        ej.eachConnection((e) => {
            var t;
            return e.setSoftwareH264(null === (t = n.openH264) || void 0 === t || t);
        });
}
function nJ(e) {
    let { enabled: t } = e,
        n = tD({ aecDumpEnabled: t });
    ej.setAecDump(n.aecDumpEnabled);
}
function n$(e) {
    let { state: t } = e,
        n = R.Z.isEnabled();
    if (t === ed.$7l.BACKGROUND && eQ && !n) (e2 = !0), tS(!1);
    else {
        if (t !== ed.$7l.ACTIVE || !e2) return !1;
        (e2 = !1), tS(!0);
    }
    return !0;
}
function n0(e) {
    ej.eachConnection((t) => t.setBitRate(e.bitrate));
}
function n1() {
    if ((!eQ && null == o) || null != es.Z.getRTCConnectionId()) return !1;
    tS(!1, null);
}
function n2() {
    return !!to && ((to = !1), !0);
}
function n3(e) {
    ej.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function n4(e) {
    let { settings: t } = e;
    ej.applyMediaFilterSettings(t).finally(() => {
        (ta = !1), r.emitChange();
    });
}
function n6() {
    ta = !0;
}
function n5() {
    ta = !1;
}
function n7(e) {
    t_ = e.enabled;
}
class n8 extends (s = h.ZP.Store) {
    initialize() {
        tN(),
            tw(),
            nD(),
            t4(),
            (tf = {
                [eh.AN.VIDEO]: ej.supports(eh.AN.VIDEO),
                [eh.AN.DESKTOP_CAPTURE]: ej.supports(eh.AN.DESKTOP_CAPTURE),
                [eh.AN.HYBRID_VIDEO]: ej.supports(eh.AN.HYBRID_VIDEO)
            }),
            this.waitFor(en.default, ei.Z, eo.Z, ea.Z, es.Z, P.ZP, V.Z.storage, W.Z, C.Z, S.Z);
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
        return nR();
    }
    isNoiseCancellationError() {
        return to;
    }
    isAutomaticGainControlSupported() {
        return ej.supports(eh.AN.AUTOMATIC_GAIN_CONTROL);
    }
    isAdvancedVoiceActivitySupported() {
        return nR();
    }
    isAecDumpSupported() {
        return ej.supports(eh.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return ej.supports(eh.AN.VIDEO) && ej.supports(eh.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        let t = (null === (e = eo.Z.getChannel(ti)) || void 0 === e ? void 0 : e.type) === ed.d4z.GUILD_STAGE_VOICE,
            n = r.getHardwareEncoding();
        return !t && n && k.Z.simulcastEnabled();
    }
    getAecDump() {
        return tE().aecDumpEnabled;
    }
    getMediaEngine() {
        return ej;
    }
    getVideoComponent() {
        return ej.supports(eh.AN.DIRECT_VIDEO) && ej.setUseDirectVideo(!0), ej.Video;
    }
    getCameraComponent() {
        return ej.supports(eh.AN.DIRECT_VIDEO) && ej.setUseDirectVideo(!0), ej.Camera;
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
        return !this.isEnabled() || tE(e).mute || !V.Z.didHavePermission(ep.Eu.AUDIO) || this.isSelfDeaf(e) || (e === eh.Yn.DEFAULT && ez);
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
        return t_;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
        return !this.isSupported() || tE(e).deaf;
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
        return eF === e && null != o;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.STREAM;
        return eF === t && null != o && (null === (e = o.desktopSource) || void 0 === e ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT;
        return e !== en.default.getId() && (tE(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return ej.supports(eh.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT;
        return null !== (t = tE(n).disabledLocalVideos[e]) && void 0 !== t && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT;
        return null !== (t = tE(n).videoToggleStateMap[e]) && void 0 !== t ? t : ed.ZUi.NONE;
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
        return eF;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT,
            n = tE(t).localPans[e];
        return null != n ? n : eR;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT,
            n = t === eh.Yn.STREAM ? eh.Yh : eh.Qx,
            r = tE(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return tE().inputVolume;
    }
    getOutputVolume() {
        return tE().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
        return tE(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
        return tE(e).modeOptions;
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
        return tE().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return tE().voiceFilterPlaybackEnabled;
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
        return tU(eV, tE().inputDeviceId);
    }
    getOutputDeviceId() {
        return tU(eH, tE().outputDeviceId);
    }
    getVideoDeviceId() {
        return tU(eW, tE().videoDeviceId);
    }
    getInputDevices() {
        return eV;
    }
    getOutputDevices() {
        return eH;
    }
    getVideoDevices() {
        return eW;
    }
    getEchoCancellation() {
        let e = tE();
        return ei.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return tE().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return tE().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return tE().h265Enabled;
    }
    getLoopback() {
        return td.size > 0;
    }
    getNoiseSuppression() {
        let e = tE();
        return ei.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tE();
        return ei.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getNoiseCancellation() {
        return tE().noiseCancellation;
    }
    getExperimentalEncoders() {
        return tE().experimentalEncoders;
    }
    getHardwareEncoding() {
        var e;
        return null === (e = tE().hardwareEncoding) || void 0 === e || e;
    }
    getEnableSilenceWarning() {
        return tE().silenceWarning;
    }
    getDebugLogging() {
        return ej.getDebugLogging();
    }
    getQoS() {
        return tE().qos;
    }
    getAttenuation() {
        return tE().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return tE().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return tE().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return tR() && tE().automaticAudioSubsystem ? eh.iA.AUTOMATIC : ej.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return ej.getMLSSigningKey(e, t);
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
        return tE(e);
    }
    getState() {
        return {
            settingsByContext: eU,
            inputDevices: eV,
            outputDevices: eH,
            appSupported: tf,
            krispModuleLoaded: e9,
            goLiveSource: o,
            goLiveContext: eF
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
        return eZ;
    }
    getVideoHook() {
        return tE().videoHook;
    }
    supportsVideoHook() {
        return ej.supports(eh.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tE().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e);
    }
    supportsExperimentalSoundshare() {
        return ej.supports(eh.AN.EXPERIMENTAL_SOUNDSHARE) && p().satisfies(null === b.Z || void 0 === b.Z ? void 0 : b.Z.os.release, ef.I9);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = tE().useSystemScreensharePicker,
            n =
                (0, X.isLinux)() ||
                j.Z.getCurrentConfig(
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
        return j.Z.getCurrentConfig(
            { location: 'supportsSystemScreensharePicker' },
            {
                disable: !e,
                autoTrackExposure: !1
            }
        ).enableSystemPicker;
    }
    getOpenH264() {
        return tE().openH264;
    }
    getEverSpeakingWhileMuted() {
        return e$;
    }
    getSpeakingWhileMuted() {
        return e0;
    }
    supportsScreenSoundshare() {
        return (0, X.isMac)() ? ej.supports(eh.AN.SOUNDSHARE) && p().satisfies(null === b.Z || void 0 === b.Z ? void 0 : b.Z.os.release, ef.yG) && tC() : (0, X.isWindows)() ? ej.supports(eh.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, X.isLinux)() && ej.supports(eh.AN.SCREEN_SOUNDSHARE);
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
        let n = ej.getSupportedSecureFramesProtocolVersion(),
            r = G.m.getCurrentConfig({ location: 'MediaEngineStore' }),
            i =
                null != e
                    ? G.N.getCurrentConfig({
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
eg(n8, 'displayName', 'MediaEngineStore');
let n9 = (r = new n8(v.Z, {
    VOICE_CHANNEL_SELECT: nB,
    VOICE_STATE_UPDATES: tq,
    CONNECTION_OPEN: tW,
    CONNECTION_CLOSED: tK,
    RTC_CONNECTION_STATE: tz,
    AUDIO_SET_TEMPORARY_SELF_MUTE: tQ,
    AUDIO_TOGGLE_SELF_MUTE: tX,
    AUDIO_SET_SELF_MUTE: tJ,
    AUDIO_TOGGLE_SELF_DEAF: t0,
    AUDIO_TOGGLE_LOCAL_MUTE: t1,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: t2,
    AUDIO_SET_LOCAL_VOLUME: t6,
    AUDIO_SET_LOCAL_PAN: t5,
    AUDIO_SET_MODE: t7,
    AUDIO_SET_INPUT_VOLUME: t8,
    AUDIO_SET_OUTPUT_VOLUME: t9,
    AUDIO_SET_INPUT_DEVICE: ne,
    AUDIO_SET_OUTPUT_DEVICE: nt,
    AUDIO_SET_ECHO_CANCELLATION: ns,
    AUDIO_SET_SIDECHAIN_COMPRESSION: nl,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nc,
    AUDIO_SET_LOOPBACK: nd,
    AUDIO_SET_NOISE_SUPPRESSION: np,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: n_,
    AUDIO_SET_NOISE_CANCELLATION: nh,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: nE,
    AUDIO_SET_DEBUG_LOGGING: nv,
    MEDIA_ENGINE_SET_VIDEO_HOOK: nb,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: ny,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: nO,
    AUDIO_SET_ATTENUATION: nS,
    AUDIO_SET_QOS: nI,
    MEDIA_ENGINE_DEVICES: ni,
    AUDIO_VOLUME_CHANGE: no,
    AUDIO_RESET: nT,
    AUDIO_INPUT_DETECTED: nN,
    AUDIO_SET_SUBSYSTEM: nj,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: nH,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: nW,
    MEDIA_ENGINE_PERMISSION: nV,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: nz,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nn,
    MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nm,
    MEDIA_ENGINE_INTERACTION_REQUIRED: nr,
    USER_SETTINGS_MODAL_INIT: nq,
    USER_SETTINGS_MODAL_SET_SECTION: nq,
    CERTIFIED_DEVICES_SET: nQ,
    RPC_APP_CONNECTED: nZ,
    RPC_APP_DISCONNECTED: nF,
    OVERLAY_INITIALIZE: tY,
    MEDIA_ENGINE_SET_OPEN_H264: nX,
    MEDIA_ENGINE_SET_HARDWARE_ENCODING: ng,
    APP_STATE_UPDATE: n$,
    SET_CHANNEL_BITRATE: n0,
    SET_VAD_PERMISSION: nA,
    SET_NATIVE_PERMISSION: nC,
    SET_CHANNEL_VIDEO_QUALITY_MODE: n3,
    MEDIA_ENGINE_SET_AEC_DUMP: nJ,
    CHANNEL_DELETE: n1,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: n2,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: n4,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: n6,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: n5,
    USER_SETTINGS_PROTO_UPDATE: t$,
    CLIPS_INIT: nY,
    CLIPS_SETTINGS_UPDATE: nK,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: n7,
    VOICE_FILTER_REQUEST_SWITCH: nL,
    VOICE_FILTER_LOOPBACK_TOGGLE: nx,
    VOICE_FILTER_APPLIED: nk,
    VOICE_FILTER_DOWNLOAD_FAILED: nM
}));
