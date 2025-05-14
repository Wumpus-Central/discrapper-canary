let r, i, o, a, s;
n.d(t, { Z: () => rs }), n(388685), n(953529), n(457542), n(539854), n(642613), n(49124), n(337869);
var l,
    c = n(512722),
    u = n.n(c),
    d = n(392711),
    f = n.n(d),
    _ = n(209739),
    p = n.n(_),
    h = n(404097),
    m = n(442837),
    g = n(46973),
    E = n(433517),
    b = n(846519),
    y = n(570140),
    O = n(579806),
    v = n(887278),
    I = n(547727),
    S = n(435064),
    T = n(779618),
    A = n(710845),
    N = n(535911),
    C = n(458725),
    P = n(353926),
    R = n(646047),
    w = n(594190),
    D = n(502286),
    L = n(355552),
    x = n(294473),
    k = n(706629),
    M = n(166884),
    j = n(529558),
    U = n(111672),
    G = n(441167),
    B = n(580930),
    F = n(787517),
    V = n(338336),
    Z = n(751571),
    H = n(725380),
    Y = n(581883),
    W = n(743498),
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
let eO = new A.Z('MediaEngineStore'),
    ev = 'MediaEngineStore',
    eI = 4,
    eS = 1,
    eT = 1,
    eA = 1,
    eN = 1,
    eC = {
        left: 1,
        right: 1
    },
    eP = 500,
    eR = 5 * Q.Z.Millis.SECOND,
    ew = -60,
    eD = 100,
    eL = '>=21.0.0',
    ex = 2 * Q.Z.Millis.SECOND,
    ek = 0;
function eM() {
    return {
        mode: ed.pM4.VOICE_ACTIVITY,
        modeOptions: {
            threshold: ew,
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
        bypassSystemInputProcessing: !0,
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
        automaticAudioSubsystem: !0
    };
}
let ej = (0, g.Mt)((0, g.jj)());
eO.enableNativeLogger(!0);
let eU = {},
    eG = new Set([eh.Yn.DEFAULT]),
    eB = ej.supports(eh.AN.AUTO_ENABLE),
    eF = !1,
    eV = eh.Yn.STREAM,
    eZ = performance.now(),
    eH = { [eh.w5]: tF('No Input Devices') },
    eY = { [eh.w5]: tF('No Output Devices') },
    eW = { [eh.w5]: tF('No Video Devices') },
    eK = !1,
    ez = !1,
    eq = !1,
    eQ = !1,
    eX = !1,
    eJ = eh.Av,
    e$ = !1,
    e0 = !1,
    e1 = !1,
    e2 = new b.V7(),
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
    return null != (t = null == (e = ec.default.getCurrentUser()) ? void 0 : e.isStaff()) && t ? 'always' : J.Z === h.R.CANARY ? 'permittedDevicesOnly' : 'never';
}
function ty() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT,
        t = eU[e];
    return null == t && ((t = eM()), (eU[e] = t)), t;
}
function tO(e) {
    let t = ty(e.context);
    e.setInputMode(t.mode, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: t.modeOptions.autoThreshold,
        vadUseKrisp: t.modeOptions.vadUseKrisp && nk(),
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        pttReleaseDelay: t.modeOptions.delay
    });
}
function tv(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Qx;
    return f().clamp(e, 0, t);
}
function tI(e) {
    let t = ty(e.context),
        n = !eB || t.mute || t.deaf;
    e.context === eh.Yn.DEFAULT ? (n = n || eK || ez || eq || !Z.Z.didHavePermission(e_.Eu.AUDIO)) : e.context === eh.Yn.STREAM && (n = !0), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eh.Yn.DEFAULT && I.Z.updateNativeMute();
}
function tS(e) {
    e !== eV && (null != o && ej.setGoLiveSource(null, eV), (eV = e));
}
function tT() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX,
        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
        s = o;
    if (((null == s ? void 0 : s.desktopSource) != null && s.desktopSource.id !== (null == a || null == (e = a.desktopSource) ? void 0 : e.id) && (null != s.desktopSource.soundshareId && (0, X.isWindows)() && v.pn(s.desktopSource.soundshareId), ej.setGoLiveSource(null, eV)), (null == s ? void 0 : s.cameraSource) != null && (s.cameraSource.videoDeviceGuid !== (null == a || null == (t = a.cameraSource) ? void 0 : t.videoDeviceGuid) || s.cameraSource.audioDeviceGuid !== (null == a || null == (n = a.cameraSource) ? void 0 : n.audioDeviceGuid)) && ej.setGoLiveSource(null, eV), (eX || i) && ((eJ = (eX = i) ? tZ(eW, ty().videoDeviceId) : eh.Av), ej.setVideoInputDevice(eJ)), (o = a), null != a)) {
        let e = {
            resolution: a.quality.resolution,
            frameRate: a.quality.frameRate
        };
        if (null != a.desktopSource) {
            let t = tb(),
                n = ty().videoHook,
                i = tR(),
                o = i ? (tw() && (0, F.R)('MediaEngineStore_updateVideo').enabled ? ef.zj : ef.ZM) : 0;
            ej.setGoLiveSource(
                {
                    desktopDescription: {
                        id: a.desktopSource.id,
                        soundshareId: a.desktopSource.soundshareId,
                        useVideoHook: n,
                        useGraphicsCapture: i,
                        useGraphicsCaptureApiLevel: o,
                        useLoopback: r.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: tD(),
                        videoHookStaleFrameTimeoutMs: eP,
                        graphicsCaptureStaleFrameTimeoutMs: eR,
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
function tA(e, t, n, r) {
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
                    (0, D.Z)(e)
                )
            );
}
function tN(e) {
    switch (e) {
        case eh.H3.CPU_OVERUSE:
            return C.Nk.NoiseCancellerCpuOveruse;
        case eh.H3.FAILED:
            return C.Nk.NoiseCancellerFailed;
        case eh.H3.VAD_CPU_OVERUSE:
            return C.Nk.NoiseCancellerVadCpuOveruse;
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
    ej.on(g.aB.Connection, (e) => {
        var t, n;
        tO(e), tI(e), tC(e);
        let i = ty();
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers), e.setQoS(i.qos), e.setExperimentalEncoders(i.experimentalEncoders), e.setHardwareH264(null == (t = i.hardwareEncoding) || t), e.setSoftwareH264(null == (n = i.openH264) || n);
        let a = es.Z.getGuildId(),
            { muteBeforeProcessing: s, pttBeforeProcessing: l, skipEncode: c } = (null != a ? k.Z : x.Z).getCurrentConfig(eE({ location: 'setupMediaEngine' }, null != a && { guildId: a }), { autoTrackExposure: !0 });
        s && e.setExperimentFlag(eh.V8.MUTE_BEFORE_PROCESSING, !0), l && e.setExperimentFlag(eh.V8.PTT_BEFORE_PROCESSING, !0), c && e.setExperimentFlag(eh.V8.SKIP_ENCODE, !0);
        let u = !1,
            d = !0;
        if ((e.setExperimentFlag(eh.V8.RESET_DECODER_ON_ERRORS, !0), u && e.setExperimentFlag(eh.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0), d && e.setExperimentFlag(eh.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0), e.context === eh.Yn.STREAM)) {
            let { simulcastEnabled: t, lqStreamBitrate: n } = M.Z.getConfig();
            e.configureGoLiveSimulcast(t, n);
        }
        (0, X.isWindows)() ? ((null == tp ? void 0 : tp.startsWith('NVIDIA')) || (null == tp ? void 0 : tp.startsWith('AMD')) ? e.setExperimentFlag(eh.V8.SIGNAL_AV1, !0) : e.setExperimentFlag(eh.V8.SIGNAL_AV1_DECODE, !0)) : ((0, X.isMac)() || (0, X.isLinux)()) && e.setExperimentFlag(eh.V8.SIGNAL_AV1_DECODE, !0), (0, X.isWindows)() && e.setExperimentFlag(eh.V8.SIGNAL_AV1_HARDWARE_DECODE, !0), ej.setHasFullbandPerformance((0, N.Z)());
        let f = (0, L.D)('setupMediaEngine').enabled;
        if ((e.setRemoteAudioHistory(1000 * !!f), (0, T.Z)(r))) {
            let t = S.Z.getSettings();
            e.setExperimentFlag(eh.V8.STREAMER_CLIP, t.clipsEnabled);
            let { enableViewerClipping: n } = G.Z.getCurrentConfig({ location: 'f627ab_15' }, { autoTrackExposure: !1 });
            e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eh.ux);
        }
        for (let t of ((i = ty(e.context)), e.setPostponeDecodeLevel(eD), Object.keys(i.localMutes))) t !== en.default.getId() && e.setLocalMute(t, i.localMutes[t]);
        for (let t of Object.keys(i.localVolumes)) t !== en.default.getId() && e.setLocalVolume(t, i.localVolumes[t]);
        for (let t of Object.keys(i.localPans)) {
            let n = i.localPans[t];
            e.setLocalPan(t, n.left, n.right);
        }
        for (let t of Object.keys(i.disabledLocalVideos)) e.setLocalVideoDisabled(t, i.disabledLocalVideos[t]);
        e.on(g.Sh.Speaking, (t, n) => {
            y.Z.dispatch({
                type: 'SPEAKING',
                context: e.context,
                userId: t,
                speakingFlags: n
            });
        }),
            e.context === eh.Yn.DEFAULT &&
                ((e0 = !1),
                (e1 = !1),
                e.on(g.Sh.SpeakingWhileMuted, () => {
                    (e0 = !0),
                        (e1 = !0),
                        r.emitChange(),
                        e2.stop(),
                        e2.start(ex, () => {
                            (e1 = !1), r.emitChange();
                        });
                })),
            e.on(g.Sh.DesktopSourceEnd, () => {
                y.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                    settings: { context: e.context }
                });
            }),
            e.on(g.Sh.SoundshareAttached, () => {
                (null == o ? void 0 : o.desktopSource) != null && z.default.track(ed.rMx.SOUNDSHARE_ATTACHED, (0, D.Z)(null == o ? void 0 : o.desktopSource));
            }),
            e.on(g.Sh.SoundshareFailed, (e) => {
                let { failureCode: t, failureReason: n, willRetry: r } = e;
                tA(null == o ? void 0 : o.desktopSource, t, n, r);
            }),
            e.on(g.Sh.SoundshareSpeaking, () => {
                (null == o ? void 0 : o.desktopSource) != null && (z.default.track(ed.rMx.SOUNDSHARE_TRANSMITTING, (0, D.Z)(null == o ? void 0 : o.desktopSource)), null != ea.Z.getHookError(ed.K3D.SOUND) && y.Z.wait(() => y.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
            });
        let _ = new b.V7();
        e.on(g.Sh.SoundshareTrace, (e) => {
            switch (e.type) {
                case 'soundshare_attach_requested':
                    _.start(tE, () => {
                        y.Z.dispatch({
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
                        (tA(null == o ? void 0 : o.desktopSource, n, t, r),
                        r ||
                            (_.stop(),
                            y.Z.wait(() =>
                                y.Z.dispatch({
                                    type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
                                    errorMessage: t,
                                    errorCode: n
                                })
                            )));
                    break;
                case 'soundshare_state_transition':
                    4 === e.newState && (_.stop(), y.Z.wait(() => y.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
            }
        }),
            e.on(g.Sh.InteractionRequired, (e) => {
                y.Z.dispatch({
                    type: 'MEDIA_ENGINE_INTERACTION_REQUIRED',
                    required: e
                });
            }),
            e.on(g.Sh.VideoHookInitialize, (e, t, n, r, i, a) => {
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
                            (0, D.Z)(null == o ? void 0 : o.desktopSource)
                        )
                    );
            }),
            e.on(g.Sh.NoiseCancellationError, (e) => {
                eO.warn('noisecancellererror event: '.concat(e)),
                    (0, C.kr)({
                        type: C.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tN(e)
                    }),
                    (ta = !0),
                    z.default.track(ed.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    y.Z.dispatch({
                        type: 'AUDIO_SET_NOISE_SUPPRESSION',
                        enabled: !0
                    }),
                    y.Z.dispatch({
                        type: 'AUDIO_SET_NOISE_CANCELLATION',
                        enabled: !1
                    }),
                    y.Z.dispatch({
                        type: 'MEDIA_ENGINE_NOISE_CANCELLATION_ERROR',
                        code: e
                    });
            }),
            e.on(g.Sh.VoiceActivityDetectorError, (e) => {
                eO.warn('voiceactivitydetectorerror event: '.concat(e)),
                    (0, C.kr)({
                        type: C.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tN(e)
                    }),
                    z.default.track(ed.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    y.Z.dispatch({
                        type: 'AUDIO_SET_MODE',
                        context: eh.Yn.DEFAULT,
                        mode: ed.pM4.VOICE_ACTIVITY,
                        options: ey(eE({}, ty(eh.Yn.DEFAULT).modeOptions), { vadUseKrisp: !1 })
                    }),
                    y.Z.dispatch({
                        type: 'MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR',
                        code: e
                    });
            }),
            e.on(g.Sh.SdpError, (e, t, n, r) => {
                z.default.track(ed.rMx.SDP_ERROR, {
                    operation: e,
                    error: t,
                    type: n,
                    sdp: r
                });
            }),
            e.on(g.Sh.VideoState, (t) => {
                y.Z.dispatch({
                    type: 'MEDIA_ENGINE_VIDEO_STATE_CHANGED',
                    videoState: t,
                    context: e.context
                });
            }),
            e.on(g.Sh.Destroy, () => {
                _.stop();
            }),
            e.setBitRate(er.Z.bitrate),
            e.applyVideoQualityMode(eu.Z.mode);
    }),
        ej.on(g.aB.DeviceChange, (e, t, n) => {
            y.Z.dispatch({
                type: 'MEDIA_ENGINE_DEVICES',
                inputDevices: e,
                outputDevices: t,
                videoDevices: n
            });
        }),
        ej.on(g.aB.VolumeChange, (e, t) => {
            y.Z.dispatch({
                type: 'AUDIO_VOLUME_CHANGE',
                inputVolume: e,
                outputVolume: t
            });
        }),
        ej.on(g.aB.DesktopSourceEnd, () => {
            y.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                settings: null
            });
        }),
        ej.on(g.aB.AudioPermission, (e) => {
            (tl = !0),
                y.Z.dispatch({
                    type: 'MEDIA_ENGINE_PERMISSION',
                    kind: 'audio',
                    granted: e
                });
        }),
        ej.on(g.aB.VideoPermission, (e) => {
            y.Z.dispatch({
                type: 'MEDIA_ENGINE_PERMISSION',
                kind: 'video',
                granted: e
            });
        }),
        ej.on(g.aB.WatchdogTimeout, async () => {
            let e;
            try {
                await q.Z.submitLiveCrashReport({ message: { message: 'Voice Watchdog Timeout' } });
            } catch (t) {
                'number' == typeof t.status && (e = t.status);
            }
            eO.warn('Watchdog timeout, report submission status: '.concat(null != e ? e : 200)), z.default.track(ed.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        ej.on(g.aB.VideoInputInitialized, (e) => {
            z.default.track(ed.rMx.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * Q.Z.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: es.Z.getMediaSessionId(),
                rtc_connection_id: es.Z.getRTCConnectionId()
            });
        }),
        ej.on(g.aB.AudioInputInitialized, (e) => {
            z.default.track(ed.rMx.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * Q.Z.Millis.SECOND),
                rtc_connection_id: es.Z.getRTCConnectionId()
            });
        }),
        ej.on(g.aB.ClipsRecordingRestartNeeded, () => {
            y.Z.dispatch({ type: 'CLIPS_RESTART' });
        }),
        ej.on(g.aB.ClipsInitFailure, (e, t) => {
            y.Z.wait(() => {
                y.Z.dispatch({
                    type: 'CLIPS_INIT_FAILURE',
                    errMsg: e,
                    applicationName: t
                });
            });
        }),
        ej.on(g.aB.ClipsRecordingEnded, (e, t) => {
            var n, r;
            (null == a || null == (n = a.desktopSource) ? void 0 : n.id) === e && (null != t && (null == o || null == (r = o.desktopSource) ? void 0 : r.soundshareId) !== t && v.pn(t), (a = null));
        }),
        ej.on(g.aB.NativeScreenSharePickerUpdate, (e, t) => {
            y.Z.dispatch({
                type: 'NATIVE_SCREEN_SHARE_PICKER_UPDATE',
                existing: e,
                content: t
            });
        }),
        ej.on(g.aB.NativeScreenSharePickerCancel, (e) => {
            y.Z.dispatch({
                type: 'NATIVE_SCREEN_SHARE_PICKER_CANCEL',
                existing: e
            });
        }),
        ej.on(g.aB.NativeScreenSharePickerError, (e) => {
            y.Z.dispatch({
                type: 'NATIVE_SCREEN_SHARE_PICKER_ERROR',
                error: e
            });
        }),
        ej.on(g.aB.AudioDeviceModuleError, (e, t, n) => {
            z.default.track(ed.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                audio_device_module: e,
                code: t,
                device_name: n
            });
        }),
        ej.on(g.aB.VideoCodecError, (e) => {
            let t = 'encode' === e.mode ? C.u.VIDEO_ENCODE_ERROR : C.u.VIDEO_DECODE_ERROR,
                n = {
                    videoCodec: e.codecStandard,
                    errorMessage: e.message
                };
            (0, C.kr)(t === C.u.VIDEO_ENCODE_ERROR ? ey(eE({ type: t }, n), { videoEncoder: e.implName }) : ey(eE({ type: t }, n), { videoDecoder: e.implName }));
        }),
        ej.on(g.aB.ConnectionStats, (e) => {
            y.Z.dispatch({
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
        ej.on(g.aB.VoiceQueueMetrics, (e) => {
            let t = ra(e);
            null !== t && z.default.track(ed.rMx.VOICE_QUEUE_METRICS, t);
        }),
        ej.setOnVideoContainerResized((e, t, n) => {
            y.Z.wait(() =>
                y.Z.dispatch({
                    type: 'VIDEO_SIZE_UPDATE',
                    streamId: e,
                    width: t,
                    height: n
                })
            );
        }),
        tk.reset(),
        (0, el.q)().then((e) => {
            null != e && (tp = e.gpu_brand);
        });
}
function tR() {
    return (0, X.isWindows)() && p().satisfies(null === O.Z || void 0 === O.Z ? void 0 : O.Z.os.release, ef.c5);
}
function tw() {
    return (0, X.isWindows)() && p().satisfies(null === O.Z || void 0 === O.Z ? void 0 : O.Z.os.release, ef.sN);
}
function tD() {
    return (0, X.isMac)() && ej.supports(eh.AN.SCREEN_CAPTURE_KIT) && p().satisfies(null === O.Z || void 0 === O.Z ? void 0 : O.Z.os.release, ef.C7);
}
function tL() {
    return (0, X.isWindows)() && ej.supports(eh.AN.AUTOMATIC_AUDIO_SUBSYSTEM) && ej.supports(eh.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH);
}
function tx() {
    return ej.supports(eh.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
let tk = new (class {
    start() {
        this.started || ((this.started = !0), ej.on(g.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            ej.removeListener(g.aB.Silence, this.handleSilence),
            y.Z.dispatch({
                type: 'AUDIO_INPUT_DETECTED',
                inputDetected: null
            }));
    }
    update() {
        let e = ty();
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
                                    (y.Z.dispatch({
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
function tM() {
    var e;
    let t = E.K.get('audio');
    null != t && (E.K.set(ev, { [eh.Yn.DEFAULT]: t }), E.K.remove('audio')),
        (eU = null != (e = E.K.get(ev)) ? e : {}),
        f().each(eU, (e) => {
            if ((f().defaultsDeep(e, eM()), null != e.modeOptions && 'string' == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, et.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== eI && ((e.vadUseKrispSettingVersion = eI), (e.modeOptions.vadUseKrisp = !0)), e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)), !e.vadThrehsoldMigrated)) {
                var t;
                (e.vadThrehsoldMigrated = !0), (null == (t = e.modeOptions) ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = ew);
            }
            (0, X.isWeb)() ? e.ncUseKrispjsSettingVersion !== eT && ((e.ncUseKrispjsSettingVersion = eT), (e.noiseSuppression = !1), (e.noiseCancellation = !0)) : e.ncUseKrispSettingVersion !== eS && ((e.ncUseKrispSettingVersion = eS), (e.noiseSuppression = !1), (e.noiseCancellation = !0)), e.hardwareEnabledVersion !== eA && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = eA)), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
        }),
        tG();
}
function tj(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = ty(t);
    return Object.assign(r, e), !__OVERLAY__ && n && E.K.set(ev, eU), r;
}
function tU() {
    E.K.remove(ev), location.reload();
}
function tG() {
    var e, t, n;
    let r = ty();
    ej.setAudioInputDevice(r.inputDeviceId), ej.setAudioOutputDevice(r.outputDeviceId), tT(), ej.setInputVolume(r.inputVolume), ej.setOutputVolume(r.outputVolume), ej.setH264Enabled(null == (e = r.hardwareEncoding) || e || r.openH264), ej.setAv1Enabled(null == (t = r.hardwareEncoding) || t), ej.setH265Enabled(null == (n = r.hardwareEncoding) || n), ej.setAecDump(r.aecDumpEnabled), ej.setSidechainCompression(r.sidechainCompression), ej.setSidechainCompressionStrength(r.sidechainCompressionStrength), ej.setAudioInputBypassSystemProcessing(r.bypassSystemInputProcessing);
}
function tB() {
    eB ||
        ej.enable().then(() =>
            y.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
                enabled: !0,
                unmute: !1
            })
        );
}
function tF(e) {
    return {
        id: eh.w5,
        index: 0,
        name: e,
        disabled: !0,
        hardwareId: void 0,
        containerId: void 0
    };
}
function tV(e, t) {
    if (0 === e.length) {
        let e = tF(t);
        return { [e.id]: e };
    }
    return f()(e)
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
function tZ(e, t) {
    var n;
    let r = null != (n = e[t]) ? n : f()(e).values().first();
    return null != r ? r.id : t;
}
function tH(e) {
    let t = eH;
    if (((eH = tV(e, em.intl.string(em.t['/QIjDA']))), !f().isEqual(eH, t))) {
        let e = ty(),
            t = tZ(eH, e.inputDeviceId);
        ej.setAudioInputDevice(t);
    }
}
function tY(e) {
    let t = eY;
    if (((eY = tV(e, em.intl.string(em.t.xlUg0t))), !f().isEqual(eY, t))) {
        let e = ty(),
            t = tZ(eY, e.outputDeviceId);
        ej.setAudioOutputDevice(t);
    }
}
function tW(e) {
    e4 = e.length > 0;
    let t = eW;
    if (((eW = tV(e, em.intl.string(em.t.WKWARU))), eX && !f().isEqual(eW, t))) {
        var n;
        let e = void 0 !== eW[eJ],
            r = eJ === eh.w5 && (null == (n = t[eh.w5]) ? void 0 : n.disabled);
        tT(e || r);
    }
}
function tK() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        r =
            null != (e = Y.Z.settings.audioContextSettings)
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
        tj(
            {
                localMutes: s,
                localVolumes: l
            },
            i
        );
    }
}
function tz(e) {
    if (null == r)
        return (
            eO.info('Error: trying to get soundshare id before MediaEngineStore is instantiated.'),
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
function tq(e, t) {
    (0, X.isWindows)() &&
        v.YT(e, { soundshare_session: t }).then((t) => {
            null == t ||
                w.ZP.shouldContinueWithoutElevatedProcessForPID(e) ||
                y.Z.wait(() => {
                    y.Z.dispatch({
                        type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
                        errorMessage: t
                    });
                });
        });
}
function tQ(e) {
    (i = e.sessionId),
        (eK = !1),
        (eQ = !1),
        (0, X.isWeb)() ||
            (U.Z.subscribe({ location: 'handleConnectionOpen' }, (e) => {
                let t = ty();
                !e.sidechainAvailable && t.sidechainCompression ? (tj({ sidechainCompressionSettingVersion: 0 }), nh(!1)) : e.sidechainAvailable && t.sidechainCompressionSettingVersion < eN && (tj({ sidechainCompressionSettingVersion: eN }), nh(e.sidechainEnabled));
            }),
            ng());
    let t = ty();
    tL() && (tx() ? nY(eh.iA.AUTOMATIC) : t.automaticAudioSubsystem && nW()),
        (0, K.wt)({
            location: 'MediaEngineStore',
            autoTrackExposure: !1
        }) &&
            null !== t.mostRecentlyRequestedVoiceFilter &&
            (0, W.J_)(),
        tK();
}
function tX(e) {
    let { mediaEngineState: t } = e;
    (eU = t.settingsByContext), (eH = t.inputDevices), (eY = t.outputDevices), (t_ = t.appSupported), (te = t.krispModuleLoaded), (s = t.krispVersion), (eV = t.goLiveContext);
}
function tJ() {
    i = null;
}
function t$(e) {
    switch (e.state) {
        case ed.hes.CONNECTING:
            tB();
            break;
        case ed.hes.RTC_CONNECTING:
            (e6 = !1), (e8 = !1);
            break;
        case ed.hes.RTC_CONNECTED:
            tT();
            break;
        case ed.hes.DISCONNECTED:
            t7(), t9();
    }
    tk.update();
}
function t0(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => (i === t.sessionId ? ((eK = t.mute || t.suppress), (eQ = t.deaf), ej.eachConnection(tI), tT((null == t.guildId || null == t.channelId || null == to || to === t.channelId) && eX), (to = t.channelId), !0) : (__OVERLAY__ || t.userId !== en.default.getId() || null != es.Z.getChannelId() || tT(!1, null), e)), !1);
}
function t1(e) {
    let { mute: t } = e;
    (ez = t), ej.eachConnection(tI);
}
function t2(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = ty(t);
    if (t === eh.Yn.DEFAULT && (Z.Z.requestPermission(e_.Eu.AUDIO), eq)) return !1;
    (r = !i && !r) || (i = !1),
        n || (e$ = !0),
        tj(
            {
                mute: r,
                deaf: i
            },
            t
        ),
        ej.eachConnection(tI);
}
function t3(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    tj({ mute: n }, t), r || (e$ = !0), ej.eachConnection(tI);
}
function t4(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r
    } = e;
    if (t !== ep.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    tK(!0);
}
function t5(e) {
    let { context: t } = e;
    tj({ deaf: !ty(t).deaf }, t), ej.eachConnection(tI);
}
function t6(e) {
    let { context: t, userId: n } = e;
    if (n === en.default.getId()) return;
    let { localMutes: r } = ty(t);
    r[n] ? delete r[n] : (r[n] = !0), tj({ localMutes: r }, t), ej.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function t8(e) {
    var t, n, r, i, o, a, s;
    let { context: l, userId: c, videoToggleState: d, persist: f, isAutomatic: _ } = e;
    u()(!(f && _), 'These are not allowed to both be true.');
    let p = d === ed.ZUi.DISABLED,
        { disabledLocalVideos: h } = ty(l),
        m = null != (t = h[c]) && t,
        g = tu.has(c),
        E = d === ed.ZUi.AUTO_ENABLED || d === ed.ZUi.MANUAL_ENABLED;
    eO.info('disableVideo='.concat(p, ' currentlyDisabled=').concat(m, ' currentlyAutoDisabled=').concat(g, ', isVideoShown=').concat(E)), u()(!(g && !m), 'If you are auto-disabled, then you are also disabled.');
    let b = p !== m,
        y = l === eh.Yn.DEFAULT,
        O = _ && b && y,
        v = f && b && y;
    eO.info('changed='.concat(b, ' isDefaultContext=').concat(y, ' isUpdateCausedByVideoHealthManager=').concat(O, ' isManualToggleByUser=').concat(v));
    let { videoToggleStateMap: I } = ty(l);
    if ((I[c] === ed.ZUi.AUTO_PROBING && d === ed.ZUi.AUTO_ENABLED && (0, V.Z)(c, p ? eh.fC.AUTO_DISABLE : eh.fC.AUTO_ENABLE, E), (I[c] = d), tj({ videoToggleStateMap: I }, l, f), d === ed.ZUi.AUTO_PROBING ? null == (n = es.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, !0) : null == (r = es.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, !1), td || (eO.info('isAutoDisableAllowed='.concat(td, ' - disabling VideoHealthManager')), null == (o = es.Z.getRTCConnection()) || null == (i = o.getVideoHealthManager()) || i.disable()), O)) {
        if ((!p && !g) || (p && !td)) return;
        (0, V.Z)(c, p ? eh.fC.AUTO_DISABLE : eh.fC.AUTO_ENABLE, E), p ? tu.add(c) : tu.delete(c);
    } else v && (g && !p ? (eO.info('disallowing auto-disable for this session because of manual override by user'), (td = !1), null == (s = es.Z.getRTCConnection()) || null == (a = s.getVideoHealthManager()) || a.disable(), (0, V.Z)(c, eh.fC.MANUAL_REENABLE, E)) : (0, V.Z)(c, p ? eh.fC.MANUAL_DISABLE : eh.fC.MANUAL_ENABLE, E));
    y && !p && tu.delete(c),
        p ? (h[c] = !0) : delete h[c],
        tj({ disabledLocalVideos: h }, l, f),
        ej.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(c, null != (t = h[c]) && t);
        }, l);
}
function t7() {
    if (0 === tu.size) return;
    let e = eh.Yn.DEFAULT,
        { disabledLocalVideos: t } = ty(e);
    tu.forEach((n) => {
        u()(t[n], 'If you are auto-disabled, then you are also disabled.'), delete t[n], ej.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tu.clear(),
        tj({ disabledLocalVideos: t }, e, !1);
}
function t9() {
    let e = eh.Yn.DEFAULT,
        { videoToggleStateMap: t } = ty(e);
    for (let [e, n] of Object.entries(t)) n === ed.ZUi.AUTO_PROBING && delete t[e];
    tj({ videoToggleStateMap: t }, e, !1);
}
function ne(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === en.default.getId()) return;
    let i = t === eh.Yn.STREAM ? eh.Yh : eh.Qx,
        { localVolumes: o } = ty(t);
    r === i ? delete o[n] : (o[n] = r), tj({ localVolumes: o }, t), ej.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function nt(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: o } = ty(t);
    (o[n] = {
        left: r,
        right: i
    }),
        tj({ localPans: o }, t),
        ej.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function nn(e) {
    let { context: t, mode: n, options: r } = e;
    tj(
        {
            mode: n,
            modeOptions: r
        },
        t
    ),
        ej.eachConnection(tO),
        tk.update();
}
function nr(e) {
    let { volume: t } = e;
    tj({ inputVolume: tv(t) }), ej.setInputVolume(t);
}
function ni(e) {
    let { volume: t } = e;
    tj({ outputVolume: t }), ej.setOutputVolume(t);
}
function no(e) {
    let { id: t } = e;
    (t = tZ(eH, t)), (eZ = performance.now()), tj({ inputDeviceId: t }), ej.setAudioInputDevice(t);
}
function na(e) {
    let { id: t } = e;
    tj({ outputDeviceId: (t = tZ(eY, t)) }), ej.setAudioOutputDevice(t);
}
function ns(e) {
    let { id: t } = e;
    tj({ videoDeviceId: (t = tZ(eW, t)) }), tT();
}
function nl(e) {
    return eF !== e.required && ((eF = e.required), e.required || ej.interact(), !0);
}
function nc(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    tH(t), tY(n), tW(r);
}
function nu(e) {
    let { inputVolume: t, outputVolume: n } = e;
    tj({
        inputVolume: tv(t),
        outputVolume: n
    });
}
function nd(e) {
    var t;
    let n = ty(),
        r = ej.getAudioSubsystem(),
        i = ej.getAudioLayer(),
        o = tZ(eH, n.inputDeviceId),
        a = null == (t = eH[o]) ? void 0 : t.name;
    z.default.track(ed.rMx.VOICE_PROCESSING, {
        echo_cancellation: n.echoCancellation,
        noise_cancellation: n.noiseCancellation,
        noise_suppression: n.noiseSuppression,
        automatic_gain_control: n.automaticGainControl,
        location: e,
        bypass_system_input_processing: n.bypassSystemInputProcessing,
        audio_subsystem: r,
        audio_layer: i,
        input_device: a
    });
}
function nf(e) {
    let t = tj({ echoCancellation: e.enabled });
    ej.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nE(), nd(e.location);
}
function n_(e) {
    nh(e.enabled);
}
function np(e) {
    let t = tj({ sidechainCompressionStrength: e.strength });
    ej.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function nh(e) {
    let t = tj({ sidechainCompression: e });
    ej.setSidechainCompression(t.sidechainCompression);
}
function nm(e) {
    let { enabled: t, loopbackReason: n } = e,
        r = tf.size > 0;
    return t ? tf.add(n) : tf.delete(n), ng(), tf.size > 0 !== r && nE();
}
function ng() {
    let { voiceFiltersPreProcessMute: e } = B.Z.getCurrentConfig({ location: 'setMaybePreprocessMute' }, { autoTrackExposure: !0 }),
        t = e && !tf.has('voice_filter_preview') && !tf.has('mic_test');
    ej.setMaybePreprocessMute(t);
}
function nE() {
    let e = ty(),
        t = tf.size > 0,
        n = e.inputDeviceId,
        r = ei.Z.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        o = ei.Z.hasNoiseSuppression(n) || e.noiseSuppression,
        a = ei.Z.hasAutomaticGainControl(n) || e.automaticGainControl,
        s = e.noiseCancellation,
        l = null !== tt;
    ej.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: o,
        automaticGainControl: a,
        noiseCancellation: s,
        voiceFilters: l
    });
}
function nb(e) {
    let t = tj({ noiseSuppression: e.enabled });
    ej.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nE(), nd(e.location);
}
function ny(e) {
    let t = tj({ automaticGainControl: e.enabled });
    ej.eachConnection((e) => e.setAutomaticGainControl(t.automaticGainControl)), nE(), nd(e.location);
}
function nO(e) {
    let t = tj({ noiseCancellation: e.enabled });
    ej.eachConnection((e) => e.setNoiseCancellation(t.noiseCancellation)), nE(), nd(e.location);
}
function nv(e) {
    let t = tj({ experimentalEncoders: e.enabled });
    ej.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
}
function nI(e) {
    var t, n;
    let { enabled: r } = e,
        i = tj({ hardwareEncoding: r });
    ej.eachConnection((e) => {
        var t;
        return e.setHardwareH264(null == (t = i.hardwareEncoding) || t);
    }),
        ej.setH264Enabled(i.hardwareEncoding || i.openH264),
        ej.setAv1Enabled(null == (t = i.hardwareEncoding) || t),
        ej.setH265Enabled(null == (n = i.hardwareEncoding) || n);
}
function nS(e) {
    tj({ silenceWarning: e.enabled }), tk.update();
}
function nT(e) {
    ej.setDebugLogging(e.enabled);
}
function nA(e) {
    tj({ videoHook: e.enabled });
}
function nN(e) {
    tj({ experimentalSoundshare2: e.enabled });
}
function nC(e) {
    let { enabled: t } = e;
    tj({ useSystemScreensharePicker: t });
}
function nP(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = tj({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r
        });
    ej.eachConnection((e) => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers));
}
function nR(e) {
    let { enabled: t } = e;
    tj({ qos: t }), ej.eachConnection((e) => e.setQoS(t));
}
function nw() {
    tU();
}
function nD(e) {
    let { inputDetected: t } = e;
    (e5 = t), !e6 && e5 && ((e6 = !0), tk.update());
}
function nL(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === eq) return !1;
    (eq = n), ej.eachConnection(tI);
}
function nx(e) {
    let { state: t, permissionType: n } = e,
        r = t === e_.PQ.ACCEPTED;
    switch (n) {
        case e_.Eu.AUDIO:
            (tl = !0), ej.eachConnection(tI);
            break;
        case e_.Eu.CAMERA:
            !r && eX && tT(!1);
            break;
        default:
            return !1;
    }
}
function nk() {
    return te || !1;
}
async function nM() {
    try {
        var e;
        await ee.ZP.ensureModule('discord_krisp');
        let t = ee.ZP.requireModule('discord_krisp');
        (te = !0), (s = null == (e = t.getSdkVersion) ? void 0 : e.call(t)), r.emitChange();
    } catch (t) {
        eO.warn('Failed to load Krisp module: '.concat(t.message)), $.Z.captureException(t);
        let e = eh.H3.INITIALIZED;
        if (t.message.includes(': ')) {
            let n = parseInt(t.message.substring(t.message.indexOf(': ') + 1));
            e = isNaN(n) || 0 === n ? eh.H3.INITIALIZED : n;
        }
        z.default.track(ed.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), tj({ noiseCancellation: !1 });
    } finally {
        e9 = !1;
    }
}
function nj() {
    return (0, X.isWindows)() || (0, X.isLinux)() || ((0, X.isMac)() && p().satisfies(null === O.Z || void 0 === O.Z ? void 0 : O.Z.os.release, eL));
}
function nU() {
    !nj() || __OVERLAY__ || e9 || te ? ((0, X.isWeb)() && ej.supports(eh.AN.NOISE_CANCELLATION) ? ((te = !0), r.emitChange()) : (0, X.isWeb)() && tj({ noiseCancellation: !1 })) : ((e9 = !0), nM());
}
function nG(e) {
    let { enabled: t } = e;
    z.default.track(ed.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != tt ? tt : null,
        enabled: t
    }),
        tj({ voiceFilterPlaybackEnabled: t });
}
function nB(e) {
    let { newVoiceFilterId: t } = e;
    tj({ mostRecentlyRequestedVoiceFilter: t }), ej.eachConnection((e) => e.setVoiceFilterId(t));
}
function nF() {
    tj({ mostRecentlyRequestedVoiceFilter: null });
}
function nV(e) {
    let { voiceFilterId: t } = e;
    (tr = tt), (ti = tn), (tt = t), (tn = null === t ? null : Date.now());
}
function nZ(e) {
    let t = e.bypassEnabled;
    tj({ bypassSystemInputProcessing: t }), ej.setAudioInputBypassSystemProcessing(t), nd(e.location);
}
function nH(e) {
    nY(e.subsystem);
}
function nY(e) {
    e === eh.iA.AUTOMATIC ? (tj({ automaticAudioSubsystem: !0 }), nW()) : (tj({ automaticAudioSubsystem: !1 }), ej.setAudioSubsystem(e));
}
function nW() {
    ej.queueAudioSubsystem(eh.iA.EXPERIMENTAL);
}
function nK(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && tT(i, null), null != t || null == n)) {
        e7 = !1;
        return;
    }
    if (e7) return;
    e7 = !0;
    let o = ty();
    (o.mute || o.deaf) &&
        (tj({
            deaf: !1,
            mute: !1
        }),
        ej.eachConnection(tI));
}
function nz(e) {
    let { application: t } = e;
    eG.add(t.id);
}
function nq(e) {
    let { application: t } = e;
    eG.delete(t.id);
}
function nQ(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case 'audio':
                (eB = !1), ej.eachConnection(tI);
                break;
            case 'video':
                tT(!1);
        }
}
function nX(e) {
    (eB = e.enabled),
        e.unmute &&
            tj({
                mute: !1,
                deaf: !1
            }),
        ej.eachConnection(tI);
}
function nJ(e) {
    let { enabled: t } = e;
    Z.Z.requestPermission(e_.Eu.CAMERA), tT(t);
}
function n$(e) {
    let { sourceId: t, applicationName: n, quality: i } = e,
        o = S.Z.isDecoupledGameClippingEnabled(),
        s = S.Z.getSettings().decoupledClipsEnabled;
    if (!o || !s || null == O.Z) return;
    let l = null,
        c = null,
        u = q.Z.getPidFromDesktopSource(t);
    ({ soundshareId: l, soundshareSession: c } = tz(u));
    let d = {
        desktopSource: {
            id: t,
            sourcePid: u,
            soundshareId: l,
            soundshareSession: c
        },
        quality: i
    };
    null != a && a.desktopSource.id !== d.desktopSource.id && (ej.setClipsSource(null), (0, X.isWindows)() && null != a.desktopSource.soundshareId && v.pn(a.desktopSource.soundshareId)), null != l && tq(l, c), (a = d);
    let f = tb(),
        _ = ty().videoHook;
    ej.setClipsSource({
        desktopDescription: {
            id: a.desktopSource.id,
            soundshareId: a.desktopSource.soundshareId,
            useVideoHook: _,
            useGraphicsCapture: tR(),
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: tD(),
            videoHookStaleFrameTimeoutMs: eP,
            graphicsCaptureStaleFrameTimeoutMs: eR,
            hdrCaptureMode: f
        },
        quality: i,
        applicationName: n
    });
}
function n0(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((a = null), ej.setClipsSource(null));
}
function n1(e) {
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
        X.isPlatformEmbedded && !0 === a && (({ soundshareId: e, soundshareSession: r } = tz(c)), null != e && tq(e, r)),
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
function n2(e) {
    let { section: t } = e;
    return t === ed.oAB.VOICE && tB(), !1;
}
function n3() {
    return ej.eachConnection(tC), !1;
}
function n4(e) {
    let { enabled: t } = e,
        n = tj({ openH264: t });
    ej.setH264Enabled(n.hardwareEncoding || n.openH264),
        ej.eachConnection((e) => {
            var t;
            return e.setSoftwareH264(null == (t = n.openH264) || t);
        });
}
function n5(e) {
    let { enabled: t } = e,
        n = tj({ aecDumpEnabled: t });
    ej.setAecDump(n.aecDumpEnabled);
}
function n6(e) {
    let { state: t } = e,
        n = R.Z.isEnabled();
    if (t === ed.$7l.BACKGROUND && eX && !n) (e3 = !0), tT(!1);
    else {
        if (t !== ed.$7l.ACTIVE || !e3) return !1;
        (e3 = !1), tT(!0);
    }
    return !0;
}
function n8(e) {
    ej.eachConnection((t) => t.setBitRate(e.bitrate));
}
function n7() {
    if ((!eX && null == o) || null != es.Z.getRTCConnectionId()) return !1;
    tT(!1, null);
}
function n9() {
    return !!ta && ((ta = !1), !0);
}
function re(e) {
    ej.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function rt(e) {
    let { settings: t } = e;
    ej.applyMediaFilterSettings(t).finally(() => {
        (ts = !1), r.emitChange();
    });
}
function rn() {
    ts = !0;
}
function rr() {
    ts = !1;
}
function ri(e) {
    th = e.enabled;
}
class ro extends (l = m.ZP.Store) {
    initialize() {
        tP(),
            tM(),
            nU(),
            t9(),
            (t_ = {
                [eh.AN.VIDEO]: ej.supports(eh.AN.VIDEO),
                [eh.AN.DESKTOP_CAPTURE]: ej.supports(eh.AN.DESKTOP_CAPTURE),
                [eh.AN.HYBRID_VIDEO]: ej.supports(eh.AN.HYBRID_VIDEO)
            }),
            this.waitFor(en.default, ei.Z, eo.Z, ea.Z, es.Z, w.ZP, Z.Z.storage, Y.Z, P.Z, S.Z);
    }
    supports(e) {
        return ej.supports(e);
    }
    supportsInApp(e) {
        return t_[e] || ej.supports(e);
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
        return nk();
    }
    isNoiseCancellationError() {
        return ta;
    }
    isAutomaticGainControlSupported() {
        return ej.supports(eh.AN.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !tx() && (ej.supports(eh.AN.LEGACY_AUDIO_SUBSYSTEM) || ej.supports(eh.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return ej.supports(eh.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && 'experimental' === ej.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return nk();
    }
    isAecDumpSupported() {
        return ej.supports(eh.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return ej.supports(eh.AN.VIDEO) && ej.supports(eh.AN.SIMULCAST);
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
        return this.isSelfMute() || eK;
    }
    isDeaf() {
        return this.isSelfDeaf() || eQ;
    }
    hasContext(e) {
        return null != eU[e];
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
        return e !== en.default.getId() && (ty(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return ej.supports(eh.AN.DISABLE_VIDEO);
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
        return eV;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return eZ;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.Yn.DEFAULT,
            n = ty(t).localPans[e];
        return null != n ? n : eC;
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
            f().each(eU, (t, n) => {
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
        return tZ(eH, ty().inputDeviceId);
    }
    getOutputDeviceId() {
        return tZ(eY, ty().outputDeviceId);
    }
    getVideoDeviceId() {
        return tZ(eW, ty().videoDeviceId);
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
    getBypassSystemInputProcessing() {
        return ty().bypassSystemInputProcessing;
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
        return ej.getDebugLogging();
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
        return tL() && ty().automaticAudioSubsystem ? eh.iA.AUTOMATIC : ej.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return ej.getMLSSigningKey(e, t);
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.Yn.DEFAULT;
        return ty(e);
    }
    getState() {
        return {
            settingsByContext: eU,
            inputDevices: eH,
            outputDevices: eY,
            appSupported: t_,
            krispModuleLoaded: te,
            krispVersion: s,
            goLiveSource: o,
            goLiveContext: eV
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
        ej.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return eF;
    }
    getVideoHook() {
        return ty().videoHook;
    }
    supportsVideoHook() {
        return ej.supports(eh.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = ty().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e);
    }
    supportsExperimentalSoundshare() {
        return ej.supports(eh.AN.EXPERIMENTAL_SOUNDSHARE) && p().satisfies(null === O.Z || void 0 === O.Z ? void 0 : O.Z.os.release, ef.I9);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = ty().useSystemScreensharePicker,
            n = (0, X.isLinux)() || ((0, X.isMac)() && p().satisfies(null === O.Z || void 0 === O.Z ? void 0 : O.Z.os.release, ef.jR));
        return e && (null != t ? t : n);
    }
    supportsSystemScreensharePicker() {
        return ej.supports(eh.AN.NATIVE_SCREENSHARE_PICKER);
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
        return (0, X.isMac)() ? ej.supports(eh.AN.SOUNDSHARE) && p().satisfies(null === O.Z || void 0 === O.Z ? void 0 : O.Z.os.release, ef.yG) && tD() : (0, X.isWindows)() ? ej.supports(eh.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, X.isLinux)() && ej.supports(eh.AN.SCREEN_SOUNDSHARE);
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
            t = j.m.getCurrentConfig({ location: 'MediaEngineStore' });
        return 114 === e && (e = 1), t.canSupportDaveProtocol && e >= t.protocolVersionFloor ? e : 0;
    }
    hasClipsSource() {
        return null != a;
    }
    getGpuBrand() {
        return tp;
    }
}
function ra(e) {
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
eg(ro, 'displayName', 'MediaEngineStore');
let rs = (r = new ro(y.Z, {
    VOICE_CHANNEL_SELECT: nK,
    VOICE_STATE_UPDATES: t0,
    CONNECTION_OPEN: tQ,
    CONNECTION_CLOSED: tJ,
    RTC_CONNECTION_STATE: t$,
    AUDIO_SET_TEMPORARY_SELF_MUTE: t1,
    AUDIO_TOGGLE_SELF_MUTE: t2,
    AUDIO_SET_SELF_MUTE: t3,
    AUDIO_TOGGLE_SELF_DEAF: t5,
    AUDIO_TOGGLE_LOCAL_MUTE: t6,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: t8,
    AUDIO_SET_LOCAL_VOLUME: ne,
    AUDIO_SET_LOCAL_PAN: nt,
    AUDIO_SET_MODE: nn,
    AUDIO_SET_INPUT_VOLUME: nr,
    AUDIO_SET_OUTPUT_VOLUME: ni,
    AUDIO_SET_INPUT_DEVICE: no,
    AUDIO_SET_OUTPUT_DEVICE: na,
    AUDIO_SET_ECHO_CANCELLATION: nf,
    AUDIO_SET_SIDECHAIN_COMPRESSION: n_,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: np,
    AUDIO_SET_LOOPBACK: nm,
    AUDIO_SET_NOISE_SUPPRESSION: nb,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: ny,
    AUDIO_SET_NOISE_CANCELLATION: nO,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: nS,
    AUDIO_SET_DEBUG_LOGGING: nT,
    MEDIA_ENGINE_SET_VIDEO_HOOK: nA,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: nN,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: nC,
    AUDIO_SET_ATTENUATION: nP,
    AUDIO_SET_QOS: nR,
    MEDIA_ENGINE_DEVICES: nc,
    AUDIO_VOLUME_CHANGE: nu,
    AUDIO_RESET: nw,
    AUDIO_INPUT_DETECTED: nD,
    AUDIO_SET_SUBSYSTEM: nH,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: nZ,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: nX,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: nJ,
    MEDIA_ENGINE_PERMISSION: nQ,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: n1,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: ns,
    MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nv,
    MEDIA_ENGINE_INTERACTION_REQUIRED: nl,
    USER_SETTINGS_MODAL_INIT: n2,
    USER_SETTINGS_MODAL_SET_SECTION: n2,
    CERTIFIED_DEVICES_SET: n3,
    RPC_APP_CONNECTED: nz,
    RPC_APP_DISCONNECTED: nq,
    OVERLAY_INITIALIZE: tX,
    MEDIA_ENGINE_SET_OPEN_H264: n4,
    MEDIA_ENGINE_SET_HARDWARE_ENCODING: nI,
    APP_STATE_UPDATE: n6,
    SET_CHANNEL_BITRATE: n8,
    SET_VAD_PERMISSION: nL,
    SET_NATIVE_PERMISSION: nx,
    SET_CHANNEL_VIDEO_QUALITY_MODE: re,
    MEDIA_ENGINE_SET_AEC_DUMP: n5,
    CHANNEL_DELETE: n7,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: n9,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rt,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rn,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rr,
    USER_SETTINGS_PROTO_UPDATE: t4,
    CLIPS_INIT: n$,
    CLIPS_SETTINGS_UPDATE: n0,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: ri,
    VOICE_FILTER_REQUEST_SWITCH: nB,
    VOICE_FILTER_LOOPBACK_TOGGLE: nG,
    VOICE_FILTER_APPLIED: nV,
    VOICE_FILTER_DOWNLOAD_FAILED: nF,
    VOICE_FILTER_APPLY_FAILED: nF
}));
