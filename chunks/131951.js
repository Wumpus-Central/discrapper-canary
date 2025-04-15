let r, i, o, a;
n.d(t, { Z: () => rs }), n(388685), n(953529), n(457542), n(539854), n(642613), n(49124), n(337869);
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
    A = n(458725),
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
    V = n(787517),
    Z = n(338336),
    H = n(751571),
    W = n(725380),
    Y = n(581883),
    K = n(743498),
    z = n(875527),
    q = n(626135),
    Q = n(12647),
    X = n(70956),
    J = n(358085),
    $ = n(747268),
    ee = n(960048),
    et = n(998502),
    en = n(13140),
    er = n(314897),
    ei = n(967368),
    eo = n(463395),
    ea = n(592125),
    es = n(858340),
    el = n(19780),
    ec = n(704806),
    eu = n(594174),
    ed = n(631768),
    ef = n(981631),
    e_ = n(70722),
    ep = n(761274),
    eh = n(526761),
    em = n(65154),
    eg = n(388032);
function eE(e, t, n) {
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
function eb(e) {
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
                eE(e, t, n[t]);
            });
    }
    return e;
}
function ey(e, t) {
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
function ev(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ey(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eO = new T.Z('MediaEngineStore'),
    eI = 'MediaEngineStore',
    eS = 4,
    eT = 1,
    eN = 1,
    eA = 1,
    eC = 1,
    eR = 2,
    eP = {
        left: 1,
        right: 1
    },
    ew = 500,
    eD = 5 * X.Z.Millis.SECOND,
    eL = -60,
    ex = 100,
    eM = '>=21.0.0',
    ek = 2 * X.Z.Millis.SECOND,
    ej = 0;
function eU() {
    return {
        mode: ef.pM4.VOICE_ACTIVITY,
        modeOptions: {
            threshold: eL,
            autoThreshold: J.isPlatformEmbedded || __OVERLAY__,
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
        inputVolume: em.Qx,
        outputVolume: em.Qx,
        inputDeviceId: em.w5,
        outputDeviceId: em.w5,
        videoDeviceId: em.w5,
        qos: !1,
        qosMigrated: !1,
        videoHook: eG.supports(em.AN.VIDEO_HOOK),
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
let eG = (0, m.Mt)((0, m.jj)());
eO.enableNativeLogger(!0);
let eB = {},
    eF = new Set([em.Yn.DEFAULT]),
    eV = eG.supports(em.AN.AUTO_ENABLE),
    eZ = !1,
    eH = em.Yn.STREAM,
    eW = performance.now(),
    eY = { [em.w5]: tV('No Input Devices') },
    eK = { [em.w5]: tV('No Output Devices') },
    ez = { [em.w5]: tV('No Video Devices') },
    eq = !1,
    eQ = !1,
    eX = !1,
    eJ = !1,
    e$ = !1,
    e0 = em.Av,
    e1 = !1,
    e2 = !1,
    e3 = !1,
    e4 = new E.V7(),
    e5 = !1,
    e6 = !1,
    e8 = null,
    e7 = !1,
    e9 = !1,
    te = !1,
    tt = !1,
    tn = !1,
    tr = null,
    ti = null,
    to = null,
    ta = null,
    ts = null,
    tl = !1,
    tc = !1,
    tu = !1;
H.Z.hasPermission(ep.Eu.AUDIO, { showAuthorizationError: !1 }), H.Z.hasPermission(ep.Eu.CAMERA, { showAuthorizationError: !1 });
let td = !1,
    tf = new Set(),
    t_ = td,
    tp = new Set(),
    th = {},
    tm = null,
    tg = !0,
    tE = !1,
    tb = {},
    ty = 5 * X.Z.Millis.SECOND;
function tv() {
    var e, t;
    return null != (t = null == (e = eu.default.getCurrentUser()) ? void 0 : e.isStaff()) && t ? 'always' : $.Z === p.R.CANARY ? 'permittedDevicesOnly' : 'never';
}
function tO() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.Yn.DEFAULT,
        t = eB[e];
    return null == t && ((t = eU()), (eB[e] = t)), t;
}
function tI(e) {
    let t = tO(e.context);
    e.setInputMode(t.mode, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: t.modeOptions.autoThreshold,
        vadUseKrisp: t.modeOptions.vadUseKrisp && nk(),
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        pttReleaseDelay: t.modeOptions.delay
    });
}
function tS(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.Qx;
    return d().clamp(e, 0, t);
}
function tT(e) {
    let t = tO(e.context),
        n = !eV || t.mute || t.deaf;
    e.context === em.Yn.DEFAULT ? (n = n || eq || eQ || eX || !H.Z.didHavePermission(ep.Eu.AUDIO)) : e.context === em.Yn.STREAM && (n = !0), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === em.Yn.DEFAULT && O.Z.updateNativeMute();
}
function tN(e) {
    e !== eH && (null != o && eG.setGoLiveSource(null, eH), (eH = e));
}
function tA() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$,
        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
        s = o;
    if (((null == s ? void 0 : s.desktopSource) != null && s.desktopSource.id !== (null == a || null == (e = a.desktopSource) ? void 0 : e.id) && (null != s.desktopSource.soundshareId && (0, J.isWindows)() && v.pn(s.desktopSource.soundshareId), eG.setGoLiveSource(null, eH)), (null == s ? void 0 : s.cameraSource) != null && (s.cameraSource.videoDeviceGuid !== (null == a || null == (t = a.cameraSource) ? void 0 : t.videoDeviceGuid) || s.cameraSource.audioDeviceGuid !== (null == a || null == (n = a.cameraSource) ? void 0 : n.audioDeviceGuid)) && eG.setGoLiveSource(null, eH), (e$ || i) && ((e0 = (e$ = i) ? tH(ez, tO().videoDeviceId) : em.Av), eG.setVideoInputDevice(e0)), (o = a), null != a)) {
        let e = {
            resolution: a.quality.resolution,
            frameRate: a.quality.frameRate
        };
        if (null != a.desktopSource) {
            let t = tv(),
                n = tO().videoHook,
                i = tD(),
                o = i ? (tL() && (0, V.R)('MediaEngineStore_updateVideo').enabled ? e_.zj : e_.ZM) : 0;
            eG.setGoLiveSource(
                {
                    desktopDescription: {
                        id: a.desktopSource.id,
                        soundshareId: a.desktopSource.soundshareId,
                        useVideoHook: n,
                        useGraphicsCapture: i,
                        useGraphicsCaptureApiLevel: o,
                        useLoopback: r.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: tx(),
                        videoHookStaleFrameTimeoutMs: ew,
                        graphicsCaptureStaleFrameTimeoutMs: eD,
                        hdrCaptureMode: t
                    },
                    quality: e
                },
                eH
            );
        }
        null != a.cameraSource &&
            eG.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: a.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: a.cameraSource.audioDeviceGuid
                    },
                    quality: e
                },
                eH
            );
    }
}
function tC(e, t, n, r) {
    var i;
    let o = null != (i = null == e ? void 0 : e.soundshareSession) ? i : '';
    null == tb[o] && (tb[o] = new Set());
    let a = null != t && !tb[o].has(t);
    a && tb[o].add(t),
        (null == t || a) &&
            q.default.track(
                ef.rMx.SOUNDSHARE_FAILED,
                eb(
                    {
                        soundshare_failure_code: t,
                        soundshare_failure_reason: n,
                        soundshare_failure_will_retry: r
                    },
                    (0, w.Z)(e)
                )
            );
}
function tR(e) {
    switch (e) {
        case em.H3.CPU_OVERUSE:
            return A.Nk.NoiseCancellerCpuOveruse;
        case em.H3.FAILED:
            return A.Nk.NoiseCancellerFailed;
        case em.H3.VAD_CPU_OVERUSE:
            return A.Nk.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function tP(e) {
    let t = tO(),
        n = t.inputDeviceId;
    if ((e.setEchoCancellation(eo.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(eo.Z.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(eo.Z.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), e.setVoiceFilterId(tr), (0, J.isWeb)())) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function tw() {
    eG.on(m.aB.Connection, (e) => {
        var t, n;
        tI(e), tT(e), tP(e);
        let i = tO();
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers), e.setQoS(i.qos), e.setExperimentalEncoders(i.experimentalEncoders), e.setHardwareH264(null == (t = i.hardwareEncoding) || t), e.setSoftwareH264(null == (n = i.openH264) || n);
        let a = el.Z.getGuildId(),
            { muteBeforeProcessing: s, pttBeforeProcessing: l, skipEncode: c } = (null != a ? x.Z : L.Z).getCurrentConfig(eb({ location: 'setupMediaEngine' }, null != a && { guildId: a }), { autoTrackExposure: !0 });
        s && e.setExperimentFlag(em.V8.MUTE_BEFORE_PROCESSING, !0), l && e.setExperimentFlag(em.V8.PTT_BEFORE_PROCESSING, !0), c && e.setExperimentFlag(em.V8.SKIP_ENCODE, !0);
        let u = !1,
            d = !0;
        if ((e.setExperimentFlag(em.V8.RESET_DECODER_ON_ERRORS, !0), u && e.setExperimentFlag(em.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0), d && e.setExperimentFlag(em.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0), e.context === em.Yn.STREAM)) {
            let { simulcastEnabled: t, lqStreamBitrate: n } = M.Z.getConfig();
            e.configureGoLiveSimulcast(t, n);
        }
        (0, J.isWindows)() ? ((null == tm ? void 0 : tm.startsWith('NVIDIA')) || (null == tm ? void 0 : tm.startsWith('AMD')) ? e.setExperimentFlag(em.V8.SIGNAL_AV1, !0) : e.setExperimentFlag(em.V8.SIGNAL_AV1_DECODE, !0)) : ((0, J.isMac)() || (0, J.isLinux)()) && e.setExperimentFlag(em.V8.SIGNAL_AV1_DECODE, !0), (0, J.isWindows)() && e.setExperimentFlag(em.V8.SIGNAL_AV1_HARDWARE_DECODE, !0), eG.setHasFullbandPerformance((0, N.Z)());
        let f = (0, D.D)('setupMediaEngine').enabled;
        if ((e.setRemoteAudioHistory(1000 * !!f), (0, S.Z)(r))) {
            let t = I.Z.getSettings();
            e.setExperimentFlag(em.V8.STREAMER_CLIP, t.clipsEnabled);
            let { enableViewerClipping: n } = B.Z.getCurrentConfig({ location: 'f627ab_15' }, { autoTrackExposure: !1 });
            e.setViewerSideClip(n), e.setClipsKeyFrameInterval(em.ux);
        }
        for (let t of ((i = tO(e.context)), e.setPostponeDecodeLevel(ex), Object.keys(i.localMutes))) t !== er.default.getId() && e.setLocalMute(t, i.localMutes[t]);
        for (let t of Object.keys(i.localVolumes)) t !== er.default.getId() && e.setLocalVolume(t, i.localVolumes[t]);
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
            e.context === em.Yn.DEFAULT &&
                ((e2 = !1),
                (e3 = !1),
                e.on(m.Sh.SpeakingWhileMuted, () => {
                    (e2 = !0),
                        (e3 = !0),
                        r.emitChange(),
                        e4.stop(),
                        e4.start(ek, () => {
                            (e3 = !1), r.emitChange();
                        });
                })),
            e.on(m.Sh.DesktopSourceEnd, () => {
                b.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                    settings: { context: e.context }
                });
            }),
            e.on(m.Sh.SoundshareAttached, () => {
                (null == o ? void 0 : o.desktopSource) != null && q.default.track(ef.rMx.SOUNDSHARE_ATTACHED, (0, w.Z)(null == o ? void 0 : o.desktopSource));
            }),
            e.on(m.Sh.SoundshareFailed, (e) => {
                let { failureCode: t, failureReason: n, willRetry: r } = e;
                tC(null == o ? void 0 : o.desktopSource, t, n, r);
            }),
            e.on(m.Sh.SoundshareSpeaking, () => {
                (null == o ? void 0 : o.desktopSource) != null && (q.default.track(ef.rMx.SOUNDSHARE_TRANSMITTING, (0, w.Z)(null == o ? void 0 : o.desktopSource)), null != es.Z.getHookError(ef.K3D.SOUND) && b.Z.wait(() => b.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
            });
        let _ = new E.V7();
        e.on(m.Sh.SoundshareTrace, (e) => {
            switch (e.type) {
                case 'soundshare_attach_requested':
                    _.start(ty, () => {
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
                        (tC(null == o ? void 0 : o.desktopSource, n, t, r),
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
                    q.default.track(
                        ef.rMx.VIDEOHOOK_INITIALIZED,
                        eb(
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
                eO.warn('noisecancellererror event: '.concat(e)),
                    (0, A.kr)({
                        type: A.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tR(e)
                    }),
                    (tl = !0),
                    q.default.track(ef.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
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
                eO.warn('voiceactivitydetectorerror event: '.concat(e)),
                    (0, A.kr)({
                        type: A.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tR(e)
                    }),
                    q.default.track(ef.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    b.Z.dispatch({
                        type: 'AUDIO_SET_MODE',
                        context: em.Yn.DEFAULT,
                        mode: ef.pM4.VOICE_ACTIVITY,
                        options: ev(eb({}, tO(em.Yn.DEFAULT).modeOptions), { vadUseKrisp: !1 })
                    }),
                    b.Z.dispatch({
                        type: 'MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR',
                        code: e
                    });
            }),
            e.on(m.Sh.SdpError, (e, t, n, r) => {
                q.default.track(ef.rMx.SDP_ERROR, {
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
            e.setBitRate(ei.Z.bitrate),
            e.applyVideoQualityMode(ed.Z.mode);
    }),
        eG.on(m.aB.DeviceChange, (e, t, n) => {
            b.Z.dispatch({
                type: 'MEDIA_ENGINE_DEVICES',
                inputDevices: e,
                outputDevices: t,
                videoDevices: n
            });
        }),
        eG.on(m.aB.VolumeChange, (e, t) => {
            b.Z.dispatch({
                type: 'AUDIO_VOLUME_CHANGE',
                inputVolume: e,
                outputVolume: t
            });
        }),
        eG.on(m.aB.DesktopSourceEnd, () => {
            b.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                settings: null
            });
        }),
        eG.on(m.aB.AudioPermission, (e) => {
            (tu = !0),
                b.Z.dispatch({
                    type: 'MEDIA_ENGINE_PERMISSION',
                    kind: 'audio',
                    granted: e
                });
        }),
        eG.on(m.aB.VideoPermission, (e) => {
            b.Z.dispatch({
                type: 'MEDIA_ENGINE_PERMISSION',
                kind: 'video',
                granted: e
            });
        }),
        eG.on(m.aB.WatchdogTimeout, async () => {
            let e;
            try {
                await Q.Z.submitLiveCrashReport({ message: { message: 'Voice Watchdog Timeout' } });
            } catch (t) {
                'number' == typeof t.status && (e = t.status);
            }
            eO.warn('Watchdog timeout, report submission status: '.concat(null != e ? e : 200)), q.default.track(ef.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        eG.on(m.aB.VideoInputInitialized, (e) => {
            q.default.track(ef.rMx.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * X.Z.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: el.Z.getMediaSessionId(),
                rtc_connection_id: el.Z.getRTCConnectionId()
            });
        }),
        eG.on(m.aB.AudioInputInitialized, (e) => {
            q.default.track(ef.rMx.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * X.Z.Millis.SECOND),
                rtc_connection_id: el.Z.getRTCConnectionId()
            });
        }),
        eG.on(m.aB.ClipsRecordingRestartNeeded, () => {
            b.Z.dispatch({ type: 'CLIPS_RESTART' });
        }),
        eG.on(m.aB.ClipsInitFailure, (e, t) => {
            b.Z.wait(() => {
                b.Z.dispatch({
                    type: 'CLIPS_INIT_FAILURE',
                    errMsg: e,
                    applicationName: t
                });
            });
        }),
        eG.on(m.aB.ClipsRecordingEnded, (e, t) => {
            var n, r;
            (null == a || null == (n = a.desktopSource) ? void 0 : n.id) === e && (null != t && (null == o || null == (r = o.desktopSource) ? void 0 : r.soundshareId) !== t && v.pn(t), (a = null));
        }),
        eG.on(m.aB.NativeScreenSharePickerUpdate, (e, t) => {
            k.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerUpdate' }),
                b.Z.dispatch({
                    type: 'NATIVE_SCREEN_SHARE_PICKER_UPDATE',
                    existing: e,
                    content: t
                });
        }),
        eG.on(m.aB.NativeScreenSharePickerCancel, (e) => {
            k.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerCancel' }),
                b.Z.dispatch({
                    type: 'NATIVE_SCREEN_SHARE_PICKER_CANCEL',
                    existing: e
                });
        }),
        eG.on(m.aB.NativeScreenSharePickerError, (e) => {
            k.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerError' }),
                b.Z.dispatch({
                    type: 'NATIVE_SCREEN_SHARE_PICKER_ERROR',
                    error: e
                });
        }),
        eG.on(m.aB.AudioDeviceModuleError, (e, t, n) => {
            q.default.track(ef.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                audio_device_module: e,
                code: t,
                device_name: n
            });
        }),
        eG.on(m.aB.VideoCodecError, (e) => {
            let t = 'encode' === e.mode ? A.u.VIDEO_ENCODE_ERROR : A.u.VIDEO_DECODE_ERROR,
                n = {
                    videoCodec: e.codecStandard,
                    errorMessage: e.message
                };
            (0, A.kr)(t === A.u.VIDEO_ENCODE_ERROR ? ev(eb({ type: t }, n), { videoEncoder: e.implName }) : ev(eb({ type: t }, n), { videoDecoder: e.implName }));
        }),
        eG.on(m.aB.ConnectionStats, (e) => {
            b.Z.dispatch({
                type: 'MEDIA_ENGINE_CONNECTION_STATS',
                connectionStats: e.map((e) => {
                    let { stats: t, connection: n } = e;
                    return {
                        stats: t,
                        mediaEngineConnectionId: n.mediaEngineConnectionId,
                        version: ej++,
                        context: n.context
                    };
                })
            });
        }),
        eG.on(m.aB.VoiceQueueMetrics, (e) => {
            let t = ra(e);
            null !== t && q.default.track(ef.rMx.VOICE_QUEUE_METRICS, t);
        }),
        eG.setOnVideoContainerResized((e, t, n) => {
            b.Z.wait(() =>
                b.Z.dispatch({
                    type: 'VIDEO_SIZE_UPDATE',
                    streamId: e,
                    width: t,
                    height: n
                })
            );
        }),
        tk.reset(),
        (0, ec.q)().then((e) => {
            null != e && (tm = e.gpu_brand);
        });
}
function tD() {
    return (0, J.isWindows)() && _().satisfies(null === y.Z || void 0 === y.Z ? void 0 : y.Z.os.release, e_.c5);
}
function tL() {
    return (0, J.isWindows)() && _().satisfies(null === y.Z || void 0 === y.Z ? void 0 : y.Z.os.release, e_.sN);
}
function tx() {
    return (0, J.isMac)() && eG.supports(em.AN.SCREEN_CAPTURE_KIT) && _().satisfies(null === y.Z || void 0 === y.Z ? void 0 : y.Z.os.release, e_.C7);
}
function tM() {
    return (0, J.isWindows)() && eG.supports(em.AN.AUTOMATIC_AUDIO_SUBSYSTEM) && eG.supports(em.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH);
}
let tk = new (class {
    start() {
        this.started || ((this.started = !0), eG.on(m.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            eG.removeListener(m.aB.Silence, this.handleSilence),
            b.Z.dispatch({
                type: 'AUDIO_INPUT_DETECTED',
                inputDetected: null
            }));
    }
    update() {
        let e = tO();
        !e7 && el.Z.getState() === ef.hes.RTC_CONNECTED && e.mode === ef.pM4.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop();
    }
    reset() {
        this.stop(), this.update();
    }
    constructor() {
        eE(this, 'stateChangeTimeout', void 0),
            eE(this, 'noVoiceTimeout', 5000),
            eE(this, 'voiceTimeout', 1500),
            eE(this, 'started', !1),
            eE(this, 'handleSilence', (e) => {
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
                                    e && (e9 = !0));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout
                    ));
            });
    }
})();
function tj() {
    var e;
    let t = g.K.get('audio');
    null != t && (g.K.set(eI, { [em.Yn.DEFAULT]: t }), g.K.remove('audio')),
        (eB = null != (e = g.K.get(eI)) ? e : {}),
        d().each(eB, (e) => {
            if ((d().defaultsDeep(e, eU()), null != e.modeOptions && 'string' == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, en.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== eS && ((e.vadUseKrispSettingVersion = eS), (e.modeOptions.vadUseKrisp = !0)), e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)), !e.vadThrehsoldMigrated)) {
                var t;
                (e.vadThrehsoldMigrated = !0), (null == (t = e.modeOptions) ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = eL);
            }
            (0, J.isWeb)() ? e.ncUseKrispjsSettingVersion !== eN && ((e.ncUseKrispjsSettingVersion = eN), (e.noiseSuppression = !1), (e.noiseCancellation = !0)) : e.ncUseKrispSettingVersion !== eT && ((e.ncUseKrispSettingVersion = eT), (e.noiseSuppression = !1), (e.noiseCancellation = !0)), e.hardwareEnabledVersion !== eA && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = eA)), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
        }),
        tB();
}
function tU(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = tO(t);
    return Object.assign(r, e), !__OVERLAY__ && n && g.K.set(eI, eB), r;
}
function tG() {
    g.K.remove(eI), location.reload();
}
function tB() {
    var e, t, n;
    let r = tO();
    eG.setAudioInputDevice(r.inputDeviceId), eG.setAudioOutputDevice(r.outputDeviceId), tA(), eG.setInputVolume(r.inputVolume), eG.setOutputVolume(r.outputVolume), eG.setH264Enabled(null == (e = r.hardwareEncoding) || e || r.openH264), eG.setAv1Enabled(null == (t = r.hardwareEncoding) || t), eG.setH265Enabled(null == (n = r.hardwareEncoding) || n), eG.setAecDump(r.aecDumpEnabled), eG.setSidechainCompression(r.sidechainCompression), eG.setSidechainCompressionStrength(r.sidechainCompressionStrength);
}
function tF() {
    eV ||
        eG.enable().then(() =>
            b.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
                enabled: !0,
                unmute: !1
            })
        );
}
function tV(e) {
    return {
        id: em.w5,
        index: 0,
        name: e,
        disabled: !0,
        hardwareId: void 0,
        containerId: void 0
    };
}
function tZ(e, t) {
    if (0 === e.length) {
        let e = tV(t);
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
function tH(e, t) {
    var n;
    let r = null != (n = e[t]) ? n : d()(e).values().first();
    return null != r ? r.id : t;
}
function tW(e) {
    let t = eY;
    if (((eY = tZ(e, eg.NW.string(eg.t['/QIjDA']))), !d().isEqual(eY, t))) {
        let e = tO(),
            t = tH(eY, e.inputDeviceId);
        eG.setAudioInputDevice(t);
    }
}
function tY(e) {
    let t = eK;
    if (((eK = tZ(e, eg.NW.string(eg.t.xlUg0t))), !d().isEqual(eK, t))) {
        let e = tO(),
            t = tH(eK, e.outputDeviceId);
        eG.setAudioOutputDevice(t);
    }
}
function tK(e) {
    e6 = e.length > 0;
    let t = ez;
    if (((ez = tZ(e, eg.NW.string(eg.t.WKWARU))), e$ && !d().isEqual(ez, t))) {
        var n;
        let e = void 0 !== ez[e0],
            r = e0 === em.w5 && (null == (n = t[em.w5]) ? void 0 : n.disabled);
        tA(e || r);
    }
}
function tz() {
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
        let i = e === eh.u0.USER ? em.Yn.DEFAULT : em.Yn.STREAM,
            o = i === em.Yn.STREAM ? em.Yh : em.Qx,
            a = null != (t = r[e]) ? t : {},
            { localMutes: s, localVolumes: l } = tO(i);
        for (let [e, t] of Object.entries(a))
            null == (0, W.Ky)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== o ? (l[e] = t.volume) : delete l[e],
                eG.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (n)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == a[e] &&
                    (delete s[e],
                    delete l[e],
                    eG.eachConnection((t) => {
                        t.setLocalVolume(e, o), t.setLocalMute(e, !1);
                    }, i));
        tU(
            {
                localMutes: s,
                localVolumes: l
            },
            i
        );
    }
}
function tq(e) {
    if (null == r)
        return (
            eO.info('Error: trying to get soundshare id before MediaEngineStore is instantiated.'),
            {
                soundshareId: null,
                soundshareSession: ''
            }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : Q.Z.getAudioPid(e),
            n = '';
        return (
            null != t && (n = Q.Z.generateSessionFromPid(t)),
            {
                soundshareId: t,
                soundshareSession: n
            }
        );
    }
}
function tQ(e, t) {
    (0, J.isWindows)() &&
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
function tX(e) {
    (i = e.sessionId),
        (eq = !1),
        (eJ = !1),
        (0, J.isWeb)() ||
            (G.Z.subscribe({ location: 'handleConnectionOpen' }, (e) => {
                let t = tO();
                !e.sidechainAvailable && t.sidechainCompression ? (tU({ sidechainCompressionSettingVersion: 0 }), nm(!1)) : e.sidechainAvailable && t.sidechainCompressionSettingVersion < eC && (tU({ sidechainCompressionSettingVersion: eC }), nm(e.sidechainEnabled));
            }),
            nE());
    let t = tO();
    tM() && (t.automaticAudioSubsystem && nY(), t.audioSubsystemSettingVersion < eR && (tU({ audioSubsystemSettingVersion: eR }), t.automaticAudioSubsystem || eG.getAudioSubsystem() === em.iA.LEGACY || nW(em.iA.AUTOMATIC))),
        (0, z.wt)({
            location: 'MediaEngineStore',
            autoTrackExposure: !1
        }) &&
            null !== t.mostRecentlyRequestedVoiceFilter &&
            (0, K.J_)(),
        tz();
}
function tJ(e) {
    let { mediaEngineState: t } = e;
    (eB = t.settingsByContext), (eY = t.inputDevices), (eK = t.outputDevices), (th = t.appSupported), (tn = t.krispModuleLoaded), (eH = t.goLiveContext);
}
function t$() {
    i = null;
}
function t0(e) {
    switch (e.state) {
        case ef.hes.CONNECTING:
            tF();
            break;
        case ef.hes.RTC_CONNECTING:
            (e7 = !1), (e9 = !1);
            break;
        case ef.hes.RTC_CONNECTED:
            tA();
            break;
        case ef.hes.DISCONNECTED:
            t9(), ne();
    }
    tk.update();
}
function t1(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => (i === t.sessionId ? ((eq = t.mute || t.suppress), (eJ = t.deaf), eG.eachConnection(tT), tA((null == t.guildId || null == t.channelId || null == ts || ts === t.channelId) && e$), (ts = t.channelId), !0) : (__OVERLAY__ || t.userId !== er.default.getId() || null != el.Z.getChannelId() || tA(!1, null), e)), !1);
}
function t2(e) {
    let { mute: t } = e;
    (eQ = t), eG.eachConnection(tT);
}
function t3(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = tO(t);
    if (t === em.Yn.DEFAULT && (H.Z.requestPermission(ep.Eu.AUDIO), eX)) return !1;
    (r = !i && !r) || (i = !1),
        n || (e1 = !0),
        tU(
            {
                mute: r,
                deaf: i
            },
            t
        ),
        eG.eachConnection(tT);
}
function t4(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    tU({ mute: n }, t), r || (e1 = !0), eG.eachConnection(tT);
}
function t5(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r
    } = e;
    if (t !== eh.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    tz(!0);
}
function t6(e) {
    let { context: t } = e;
    tU({ deaf: !tO(t).deaf }, t), eG.eachConnection(tT);
}
function t8(e) {
    let { context: t, userId: n } = e;
    if (n === er.default.getId()) return;
    let { localMutes: r } = tO(t);
    r[n] ? delete r[n] : (r[n] = !0), tU({ localMutes: r }, t), eG.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function t7(e) {
    var t, n, r, i, o, a, s;
    let { context: l, userId: u, videoToggleState: d, persist: f, isAutomatic: _ } = e;
    c()(!(f && _), 'These are not allowed to both be true.');
    let p = d === ef.ZUi.DISABLED,
        { disabledLocalVideos: h } = tO(l),
        m = null != (t = h[u]) && t,
        g = tf.has(u),
        E = d === ef.ZUi.AUTO_ENABLED || d === ef.ZUi.MANUAL_ENABLED;
    eO.info('disableVideo='.concat(p, ' currentlyDisabled=').concat(m, ' currentlyAutoDisabled=').concat(g, ', isVideoShown=').concat(E)), c()(!(g && !m), 'If you are auto-disabled, then you are also disabled.');
    let b = p !== m,
        y = l === em.Yn.DEFAULT,
        v = _ && b && y,
        O = f && b && y;
    eO.info('changed='.concat(b, ' isDefaultContext=').concat(y, ' isUpdateCausedByVideoHealthManager=').concat(v, ' isManualToggleByUser=').concat(O));
    let { videoToggleStateMap: I } = tO(l);
    if ((I[u] === ef.ZUi.AUTO_PROBING && d === ef.ZUi.AUTO_ENABLED && (0, Z.Z)(u, p ? em.fC.AUTO_DISABLE : em.fC.AUTO_ENABLE, E), (I[u] = d), tU({ videoToggleStateMap: I }, l, f), d === ef.ZUi.AUTO_PROBING ? null == (n = el.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(u, !0) : null == (r = el.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(u, !1), t_ || (eO.info('isAutoDisableAllowed='.concat(t_, ' - disabling VideoHealthManager')), null == (o = el.Z.getRTCConnection()) || null == (i = o.getVideoHealthManager()) || i.disable()), v)) {
        if ((!p && !g) || (p && !t_)) return;
        (0, Z.Z)(u, p ? em.fC.AUTO_DISABLE : em.fC.AUTO_ENABLE, E), p ? tf.add(u) : tf.delete(u);
    } else O && (g && !p ? (eO.info('disallowing auto-disable for this session because of manual override by user'), (t_ = !1), null == (s = el.Z.getRTCConnection()) || null == (a = s.getVideoHealthManager()) || a.disable(), (0, Z.Z)(u, em.fC.MANUAL_REENABLE, E)) : (0, Z.Z)(u, p ? em.fC.MANUAL_DISABLE : em.fC.MANUAL_ENABLE, E));
    y && !p && tf.delete(u),
        p ? (h[u] = !0) : delete h[u],
        tU({ disabledLocalVideos: h }, l, f),
        eG.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(u, null != (t = h[u]) && t);
        }, l);
}
function t9() {
    if (0 === tf.size) return;
    let e = em.Yn.DEFAULT,
        { disabledLocalVideos: t } = tO(e);
    tf.forEach((n) => {
        c()(t[n], 'If you are auto-disabled, then you are also disabled.'), delete t[n], eG.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tf.clear(),
        tU({ disabledLocalVideos: t }, e, !1);
}
function ne() {
    let e = em.Yn.DEFAULT,
        { videoToggleStateMap: t } = tO(e);
    for (let [e, n] of Object.entries(t)) n === ef.ZUi.AUTO_PROBING && delete t[e];
    tU({ videoToggleStateMap: t }, e, !1);
}
function nt(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === er.default.getId()) return;
    let i = t === em.Yn.STREAM ? em.Yh : em.Qx,
        { localVolumes: o } = tO(t);
    r === i ? delete o[n] : (o[n] = r), tU({ localVolumes: o }, t), eG.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function nn(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: o } = tO(t);
    (o[n] = {
        left: r,
        right: i
    }),
        tU({ localPans: o }, t),
        eG.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function nr(e) {
    let { context: t, mode: n, options: r } = e;
    tU(
        {
            mode: n,
            modeOptions: r
        },
        t
    ),
        eG.eachConnection(tI),
        tk.update();
}
function ni(e) {
    let { volume: t } = e;
    tU({ inputVolume: tS(t) }), eG.setInputVolume(t);
}
function no(e) {
    let { volume: t } = e;
    tU({ outputVolume: t }), eG.setOutputVolume(t);
}
function na(e) {
    let { id: t } = e;
    (t = tH(eY, t)), (eW = performance.now()), tU({ inputDeviceId: t }), eG.setAudioInputDevice(t);
}
function ns(e) {
    let { id: t } = e;
    tU({ outputDeviceId: (t = tH(eK, t)) }), eG.setAudioOutputDevice(t);
}
function nl(e) {
    let { id: t } = e;
    tU({ videoDeviceId: (t = tH(ez, t)) }), tA();
}
function nc(e) {
    return eZ !== e.required && ((eZ = e.required), e.required || eG.interact(), !0);
}
function nu(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    tW(t), tY(n), tK(r);
}
function nd(e) {
    let { inputVolume: t, outputVolume: n } = e;
    tU({
        inputVolume: tS(t),
        outputVolume: n
    });
}
function nf(e) {
    let t = tO();
    q.default.track(ef.rMx.VOICE_PROCESSING, {
        echo_cancellation: t.echoCancellation,
        noise_cancellation: t.noiseCancellation,
        noise_suppression: t.noiseSuppression,
        automatic_gain_control: t.automaticGainControl,
        location: e
    });
}
function n_(e) {
    let t = tU({ echoCancellation: e.enabled });
    eG.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nb(), nf(e.location);
}
function np(e) {
    nm(e.enabled);
}
function nh(e) {
    let t = tU({ sidechainCompressionStrength: e.strength });
    eG.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function nm(e) {
    let t = tU({ sidechainCompression: e });
    eG.setSidechainCompression(t.sidechainCompression);
}
function ng(e) {
    let { enabled: t, loopbackReason: n } = e,
        r = tp.size > 0;
    return t ? tp.add(n) : tp.delete(n), nE(), tp.size > 0 !== r && nb();
}
function nE() {
    let { voiceFiltersPreProcessMute: e } = F.Z.getCurrentConfig({ location: 'setMaybePreprocessMute' }, { autoTrackExposure: !0 }),
        t = e && !tp.has('voice_filter_preview') && !tp.has('mic_test');
    eG.setMaybePreprocessMute(t);
}
function nb() {
    let e = tO(),
        t = tp.size > 0,
        n = e.inputDeviceId,
        r = eo.Z.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        o = eo.Z.hasNoiseSuppression(n) || e.noiseSuppression,
        a = eo.Z.hasAutomaticGainControl(n) || e.automaticGainControl,
        s = e.noiseCancellation,
        l = null !== tr;
    eG.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: o,
        automaticGainControl: a,
        noiseCancellation: s,
        voiceFilters: l
    });
}
function ny(e) {
    let t = tU({ noiseSuppression: e.enabled });
    eG.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nb(), nf(e.location);
}
function nv(e) {
    let t = tU({ automaticGainControl: e.enabled });
    eG.eachConnection((e) => e.setAutomaticGainControl(t.automaticGainControl)), nb(), nf(e.location);
}
function nO(e) {
    let t = tU({ noiseCancellation: e.enabled });
    eG.eachConnection((e) => e.setNoiseCancellation(t.noiseCancellation)), nb(), nf(e.location);
}
function nI(e) {
    let t = tU({ experimentalEncoders: e.enabled });
    eG.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
}
function nS(e) {
    var t, n;
    let { enabled: r } = e,
        i = tU({ hardwareEncoding: r });
    eG.eachConnection((e) => {
        var t;
        return e.setHardwareH264(null == (t = i.hardwareEncoding) || t);
    }),
        eG.setH264Enabled(i.hardwareEncoding || i.openH264),
        eG.setAv1Enabled(null == (t = i.hardwareEncoding) || t),
        eG.setH265Enabled(null == (n = i.hardwareEncoding) || n);
}
function nT(e) {
    tU({ silenceWarning: e.enabled }), tk.update();
}
function nN(e) {
    eG.setDebugLogging(e.enabled);
}
function nA(e) {
    tU({ videoHook: e.enabled });
}
function nC(e) {
    tU({ experimentalSoundshare2: e.enabled });
}
function nR(e) {
    let { enabled: t } = e;
    tU({ useSystemScreensharePicker: t });
}
function nP(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = tU({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r
        });
    eG.eachConnection((e) => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers));
}
function nw(e) {
    let { enabled: t } = e;
    tU({ qos: t }), eG.eachConnection((e) => e.setQoS(t));
}
function nD() {
    tG();
}
function nL(e) {
    let { inputDetected: t } = e;
    (e8 = t), !e7 && e8 && ((e7 = !0), tk.update());
}
function nx(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === eX) return !1;
    (eX = n), eG.eachConnection(tT);
}
function nM(e) {
    let { state: t, permissionType: n } = e,
        r = t === ep.PQ.ACCEPTED;
    switch (n) {
        case ep.Eu.AUDIO:
            (tu = !0), eG.eachConnection(tT);
            break;
        case ep.Eu.CAMERA:
            !r && e$ && tA(!1);
            break;
        default:
            return !1;
    }
}
function nk() {
    return tn || !1;
}
async function nj() {
    try {
        await et.ZP.ensureModule('discord_krisp'), et.ZP.requireModule('discord_krisp'), (tn = !0), r.emitChange();
    } catch (t) {
        eO.warn('Failed to load Krisp module: '.concat(t.message)), ee.Z.captureException(t);
        let e = em.H3.INITIALIZED;
        if (t.message.includes(': ')) {
            let n = parseInt(t.message.substring(t.message.indexOf(': ') + 1));
            e = isNaN(n) || 0 === n ? em.H3.INITIALIZED : n;
        }
        q.default.track(ef.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), tU({ noiseCancellation: !1 });
    } finally {
        tt = !1;
    }
}
function nU() {
    return (0, J.isWindows)() || (0, J.isLinux)() || ((0, J.isMac)() && _().satisfies(null === y.Z || void 0 === y.Z ? void 0 : y.Z.os.release, eM));
}
function nG() {
    !nU() || __OVERLAY__ || tt || tn ? ((0, J.isWeb)() && eG.supports(em.AN.NOISE_CANCELLATION) ? ((tn = !0), r.emitChange()) : (0, J.isWeb)() && tU({ noiseCancellation: !1 })) : ((tt = !0), nj());
}
function nB(e) {
    let { enabled: t } = e;
    q.default.track(ef.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != tr ? tr : null,
        enabled: t
    }),
        tU({ voiceFilterPlaybackEnabled: t });
}
function nF(e) {
    let { newVoiceFilterId: t } = e;
    tU({ mostRecentlyRequestedVoiceFilter: t }), eG.eachConnection((e) => e.setVoiceFilterId(t));
}
function nV() {
    tU({ mostRecentlyRequestedVoiceFilter: null });
}
function nZ(e) {
    let { voiceFilterId: t } = e;
    (to = tr), (ta = ti), (tr = t), (ti = null === t ? null : Date.now());
}
function nH(e) {
    nW(e.subsystem);
}
function nW(e) {
    e === em.iA.AUTOMATIC ? (tU({ automaticAudioSubsystem: !0 }), nY()) : (tU({ automaticAudioSubsystem: !1 }), eG.setAudioSubsystem(e));
}
function nY() {
    let { enabled: e } = j.I.getCurrentConfig({ location: 'interpretAutomaticAudioSubsystem' });
    e ? eG.queueAudioSubsystem(em.iA.EXPERIMENTAL) : eG.queueAudioSubsystem(em.iA.STANDARD);
}
function nK(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && tA(i, null), null != t || null == n)) {
        te = !1;
        return;
    }
    if (te) return;
    te = !0;
    let o = tO();
    (o.mute || o.deaf) &&
        (tU({
            deaf: !1,
            mute: !1
        }),
        eG.eachConnection(tT));
}
function nz(e) {
    let { application: t } = e;
    eF.add(t.id);
}
function nq(e) {
    let { application: t } = e;
    eF.delete(t.id);
}
function nQ(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case 'audio':
                (eV = !1), eG.eachConnection(tT);
                break;
            case 'video':
                tA(!1);
        }
}
function nX(e) {
    (eV = e.enabled),
        e.unmute &&
            tU({
                mute: !1,
                deaf: !1
            }),
        eG.eachConnection(tT);
}
function nJ(e) {
    let { enabled: t } = e;
    H.Z.requestPermission(ep.Eu.CAMERA), tA(t);
}
function n$(e) {
    let { sourceId: t, applicationName: n, quality: i } = e,
        o = I.Z.isDecoupledGameClippingEnabled(),
        s = I.Z.getSettings().decoupledClipsEnabled;
    if (!o || !s || null == y.Z) return;
    let l = null,
        c = null,
        u = Q.Z.getPidFromDesktopSource(t);
    ({ soundshareId: l, soundshareSession: c } = tq(u));
    let d = {
        desktopSource: {
            id: t,
            sourcePid: u,
            soundshareId: l,
            soundshareSession: c
        },
        quality: i
    };
    null != a && a.desktopSource.id !== d.desktopSource.id && (eG.setClipsSource(null), (0, J.isWindows)() && null != a.desktopSource.soundshareId && v.pn(a.desktopSource.soundshareId)), null != l && tQ(l, c), (a = d);
    let f = tv(),
        _ = tO().videoHook;
    eG.setClipsSource({
        desktopDescription: {
            id: a.desktopSource.id,
            soundshareId: a.desktopSource.soundshareId,
            useVideoHook: _,
            useGraphicsCapture: tD(),
            useGraphicsCaptureApiLevel: null,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: tx(),
            videoHookStaleFrameTimeoutMs: ew,
            graphicsCaptureStaleFrameTimeoutMs: eD,
            hdrCaptureMode: f
        },
        quality: i,
        applicationName: n
    });
}
function n0(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((a = null), eG.setClipsSource(null));
}
function n1(e) {
    var t, n, r, i;
    let { settings: o } = e;
    if ((null == o ? void 0 : o.desktopSettings) != null) {
        let e = null,
            r = null,
            { sourceId: i, sound: a } = o.desktopSettings,
            s = null != (t = o.context) ? t : em.Yn.DEFAULT,
            l =
                null != (n = o.qualityOptions)
                    ? n
                    : {
                          resolution: 720,
                          frameRate: 30
                      },
            c = !1 === a ? null : Q.Z.getPidFromDesktopSource(i);
        J.isPlatformEmbedded && !0 === a && (({ soundshareId: e, soundshareSession: r } = tq(c)), null != e && tQ(e, r)),
            tN(s),
            tA(s === em.Yn.STREAM && e$, {
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
        let e = null != (r = o.context) ? r : em.Yn.DEFAULT,
            { videoDeviceGuid: t, audioDeviceGuid: n } = o.cameraSettings,
            a = e === em.Yn.STREAM && e$,
            s =
                null != (i = o.qualityOptions)
                    ? i
                    : {
                          resolution: 720,
                          frameRate: 30
                      };
        tA(a, {
            cameraSource: {
                videoDeviceGuid: t,
                audioDeviceGuid: n
            },
            quality: {
                resolution: s.resolution,
                frameRate: s.frameRate
            }
        });
    } else tA(e$, null);
}
function n2(e) {
    let { section: t } = e;
    return t === ef.oAB.VOICE && tF(), !1;
}
function n3() {
    return eG.eachConnection(tP), !1;
}
function n4(e) {
    let { enabled: t } = e,
        n = tU({ openH264: t });
    eG.setH264Enabled(n.hardwareEncoding || n.openH264),
        eG.eachConnection((e) => {
            var t;
            return e.setSoftwareH264(null == (t = n.openH264) || t);
        });
}
function n5(e) {
    let { enabled: t } = e,
        n = tU({ aecDumpEnabled: t });
    eG.setAecDump(n.aecDumpEnabled);
}
function n6(e) {
    let { state: t } = e,
        n = R.Z.isEnabled();
    if (t === ef.$7l.BACKGROUND && e$ && !n) (e5 = !0), tA(!1);
    else {
        if (t !== ef.$7l.ACTIVE || !e5) return !1;
        (e5 = !1), tA(!0);
    }
    return !0;
}
function n8(e) {
    eG.eachConnection((t) => t.setBitRate(e.bitrate));
}
function n7() {
    if ((!e$ && null == o) || null != el.Z.getRTCConnectionId()) return !1;
    tA(!1, null);
}
function n9() {
    return !!tl && ((tl = !1), !0);
}
function re(e) {
    eG.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function rt(e) {
    let { settings: t } = e;
    eG.applyMediaFilterSettings(t).finally(() => {
        (tc = !1), r.emitChange();
    });
}
function rn() {
    tc = !0;
}
function rr() {
    tc = !1;
}
function ri(e) {
    tg = e.enabled;
}
class ro extends (s = h.ZP.Store) {
    initialize() {
        tw(),
            tj(),
            nG(),
            ne(),
            (th = {
                [em.AN.VIDEO]: eG.supports(em.AN.VIDEO),
                [em.AN.DESKTOP_CAPTURE]: eG.supports(em.AN.DESKTOP_CAPTURE),
                [em.AN.HYBRID_VIDEO]: eG.supports(em.AN.HYBRID_VIDEO)
            }),
            this.waitFor(er.default, eo.Z, ea.Z, es.Z, el.Z, P.ZP, H.Z.storage, Y.Z, C.Z, I.Z);
    }
    supports(e) {
        return eG.supports(e);
    }
    supportsInApp(e) {
        return th[e] || eG.supports(e);
    }
    isSupported() {
        return eG.supported();
    }
    isExperimentalEncodersSupported() {
        return eG.supports(em.AN.EXPERIMENTAL_ENCODERS);
    }
    isNoiseSuppressionSupported() {
        return eG.supports(em.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return nk();
    }
    isNoiseCancellationError() {
        return tl;
    }
    isAutomaticGainControlSupported() {
        return eG.supports(em.AN.AUTOMATIC_GAIN_CONTROL);
    }
    isAdvancedVoiceActivitySupported() {
        return nk();
    }
    isAecDumpSupported() {
        return eG.supports(em.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return eG.supports(em.AN.VIDEO) && eG.supports(em.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        let t = (null == (e = ea.Z.getChannel(ts)) ? void 0 : e.type) === ef.d4z.GUILD_STAGE_VOICE,
            n = r.getHardwareEncoding();
        return !t && n && M.Z.simulcastEnabled();
    }
    getAecDump() {
        return tO().aecDumpEnabled;
    }
    getMediaEngine() {
        return eG;
    }
    getVideoComponent() {
        return eG.Video;
    }
    getCameraComponent() {
        return eG.Camera;
    }
    isEnabled() {
        return eV;
    }
    isMute() {
        return this.isSelfMute() || eq;
    }
    isDeaf() {
        return this.isSelfDeaf() || eJ;
    }
    hasContext(e) {
        return null != eB[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.Yn.DEFAULT;
        return e === em.Yn.DEFAULT && eQ;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.Yn.DEFAULT;
        return !this.isEnabled() || tO(e).mute || !H.Z.didHavePermission(ep.Eu.AUDIO) || this.isSelfDeaf(e) || (e === em.Yn.DEFAULT && eX);
    }
    shouldSkipMuteUnmuteSound() {
        return e1;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        e1 = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && eo.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return tg;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.Yn.DEFAULT;
        return !this.isSupported() || tO(e).deaf;
    }
    isVideoEnabled() {
        return e$ && e6;
    }
    isVideoAvailable() {
        return Object.values(ez).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.Yn.STREAM;
        return eH === e && null != o;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.Yn.STREAM;
        return eH === t && null != o && (null == (e = o.desktopSource) ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.Yn.DEFAULT;
        return e !== er.default.getId() && (tO(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return eG.supports(em.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.Yn.DEFAULT;
        return null != (t = tO(n).disabledLocalVideos[e]) && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.Yn.DEFAULT;
        return null != (t = tO(n).videoToggleStateMap[e]) ? t : ef.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.Yn.DEFAULT;
        return t === em.Yn.DEFAULT && tf.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.Yn.DEFAULT;
        return e === em.Yn.DEFAULT && tf.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tc;
    }
    isNativeAudioPermissionReady() {
        return tu;
    }
    getGoLiveSource() {
        return o;
    }
    getGoLiveContext() {
        return eH;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return eW;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.Yn.DEFAULT,
            n = tO(t).localPans[e];
        return null != n ? n : eP;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.Yn.DEFAULT,
            n = t === em.Yn.STREAM ? em.Yh : em.Qx,
            r = tO(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return tO().inputVolume;
    }
    getOutputVolume() {
        return tO().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.Yn.DEFAULT;
        return tO(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.Yn.DEFAULT;
        return tO(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return tr;
    }
    getActiveVoiceFilterAppliedAt() {
        return ti;
    }
    getPreviousVoiceFilter() {
        return to;
    }
    getPreviousVoiceFilterAppliedAt() {
        return ta;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return tO().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return tO().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            d().each(eB, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i }
                } = t;
                r === ef.pM4.PUSH_TO_TALK && eF.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return tH(eY, tO().inputDeviceId);
    }
    getOutputDeviceId() {
        return tH(eK, tO().outputDeviceId);
    }
    getVideoDeviceId() {
        return tH(ez, tO().videoDeviceId);
    }
    getInputDevices() {
        return eY;
    }
    getOutputDevices() {
        return eK;
    }
    getVideoDevices() {
        return ez;
    }
    getEchoCancellation() {
        let e = tO();
        return eo.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return tO().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return tO().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return tO().h265Enabled;
    }
    getLoopback() {
        return tp.size > 0;
    }
    getLoopbackReasons() {
        return tp;
    }
    getNoiseSuppression() {
        let e = tO();
        return eo.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tO();
        return eo.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getNoiseCancellation() {
        return tO().noiseCancellation;
    }
    getExperimentalEncoders() {
        return tO().experimentalEncoders;
    }
    getHardwareEncoding() {
        var e;
        return null == (e = tO().hardwareEncoding) || e;
    }
    getEnableSilenceWarning() {
        return tO().silenceWarning;
    }
    getDebugLogging() {
        return eG.getDebugLogging();
    }
    getQoS() {
        return tO().qos;
    }
    getAttenuation() {
        return tO().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return tO().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return tO().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return tM() && tO().automaticAudioSubsystem ? em.iA.AUTOMATIC : eG.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return eG.getMLSSigningKey(e, t);
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.Yn.DEFAULT;
        return tO(e);
    }
    getState() {
        return {
            settingsByContext: eB,
            inputDevices: eY,
            outputDevices: eK,
            appSupported: th,
            krispModuleLoaded: tn,
            goLiveSource: o,
            goLiveContext: eH
        };
    }
    getInputDetected() {
        return e8;
    }
    getNoInputDetectedNotice() {
        return e9;
    }
    getPacketDelay() {
        return J.isPlatformEmbedded || this.getMode() !== ef.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        eG.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return eZ;
    }
    getVideoHook() {
        return tO().videoHook;
    }
    supportsVideoHook() {
        return eG.supports(em.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tO().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e);
    }
    supportsExperimentalSoundshare() {
        return eG.supports(em.AN.EXPERIMENTAL_SOUNDSHARE) && _().satisfies(null === y.Z || void 0 === y.Z ? void 0 : y.Z.os.release, e_.I9);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = tO().useSystemScreensharePicker,
            n =
                (0, J.isLinux)() ||
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
        let e = eG.supports(em.AN.NATIVE_SCREENSHARE_PICKER);
        return k.Z.getCurrentConfig(
            { location: 'supportsSystemScreensharePicker' },
            {
                disable: !e,
                autoTrackExposure: !1
            }
        ).enableSystemPicker;
    }
    getOpenH264() {
        return tO().openH264;
    }
    getEverSpeakingWhileMuted() {
        return e2;
    }
    getSpeakingWhileMuted() {
        return e3;
    }
    hasActiveCallKitCall() {
        return tE;
    }
    setHasActiveCallKitCall(e) {
        tE = e;
    }
    supportsScreenSoundshare() {
        return (0, J.isMac)() ? eG.supports(em.AN.SOUNDSHARE) && _().satisfies(null === y.Z || void 0 === y.Z ? void 0 : y.Z.os.release, e_.yG) && tx() : (0, J.isWindows)() ? eG.supports(em.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, J.isLinux)() && eG.supports(em.AN.SCREEN_SOUNDSHARE);
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.Yn.DEFAULT,
            t = this.supports(em.AN.VIDEO)
                ? [
                      {
                          rid: '100',
                          type: e === em.Yn.DEFAULT ? em.Tr.VIDEO : em.Tr.SCREEN,
                          quality: em.y7
                      }
                  ]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === em.Yn.DEFAULT || this.goLiveSimulcastEnabled()) &&
                t.push({
                    rid: '50',
                    type: e === em.Yn.DEFAULT ? em.Tr.VIDEO : em.Tr.SCREEN,
                    quality: em.LD
                }),
            t
        );
    }
    getSupportedSecureFramesProtocolVersion() {
        let e = eG.getSupportedSecureFramesProtocolVersion(),
            t = U.m.getCurrentConfig({ location: 'MediaEngineStore' });
        return 114 === e && (e = 1), t.canSupportDaveProtocol && e >= t.protocolVersionFloor ? e : 0;
    }
    hasClipsSource() {
        return null != a;
    }
    getGpuBrand() {
        return tm;
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
eE(ro, 'displayName', 'MediaEngineStore');
let rs = (r = new ro(b.Z, {
    VOICE_CHANNEL_SELECT: nK,
    VOICE_STATE_UPDATES: t1,
    CONNECTION_OPEN: tX,
    CONNECTION_CLOSED: t$,
    RTC_CONNECTION_STATE: t0,
    AUDIO_SET_TEMPORARY_SELF_MUTE: t2,
    AUDIO_TOGGLE_SELF_MUTE: t3,
    AUDIO_SET_SELF_MUTE: t4,
    AUDIO_TOGGLE_SELF_DEAF: t6,
    AUDIO_TOGGLE_LOCAL_MUTE: t8,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: t7,
    AUDIO_SET_LOCAL_VOLUME: nt,
    AUDIO_SET_LOCAL_PAN: nn,
    AUDIO_SET_MODE: nr,
    AUDIO_SET_INPUT_VOLUME: ni,
    AUDIO_SET_OUTPUT_VOLUME: no,
    AUDIO_SET_INPUT_DEVICE: na,
    AUDIO_SET_OUTPUT_DEVICE: ns,
    AUDIO_SET_ECHO_CANCELLATION: n_,
    AUDIO_SET_SIDECHAIN_COMPRESSION: np,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nh,
    AUDIO_SET_LOOPBACK: ng,
    AUDIO_SET_NOISE_SUPPRESSION: ny,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nv,
    AUDIO_SET_NOISE_CANCELLATION: nO,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: nT,
    AUDIO_SET_DEBUG_LOGGING: nN,
    MEDIA_ENGINE_SET_VIDEO_HOOK: nA,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: nC,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: nR,
    AUDIO_SET_ATTENUATION: nP,
    AUDIO_SET_QOS: nw,
    MEDIA_ENGINE_DEVICES: nu,
    AUDIO_VOLUME_CHANGE: nd,
    AUDIO_RESET: nD,
    AUDIO_INPUT_DETECTED: nL,
    AUDIO_SET_SUBSYSTEM: nH,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: nX,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: nJ,
    MEDIA_ENGINE_PERMISSION: nQ,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: n1,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nl,
    MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nI,
    MEDIA_ENGINE_INTERACTION_REQUIRED: nc,
    USER_SETTINGS_MODAL_INIT: n2,
    USER_SETTINGS_MODAL_SET_SECTION: n2,
    CERTIFIED_DEVICES_SET: n3,
    RPC_APP_CONNECTED: nz,
    RPC_APP_DISCONNECTED: nq,
    OVERLAY_INITIALIZE: tJ,
    MEDIA_ENGINE_SET_OPEN_H264: n4,
    MEDIA_ENGINE_SET_HARDWARE_ENCODING: nS,
    APP_STATE_UPDATE: n6,
    SET_CHANNEL_BITRATE: n8,
    SET_VAD_PERMISSION: nx,
    SET_NATIVE_PERMISSION: nM,
    SET_CHANNEL_VIDEO_QUALITY_MODE: re,
    MEDIA_ENGINE_SET_AEC_DUMP: n5,
    CHANNEL_DELETE: n7,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: n9,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rt,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rn,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rr,
    USER_SETTINGS_PROTO_UPDATE: t5,
    CLIPS_INIT: n$,
    CLIPS_SETTINGS_UPDATE: n0,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: ri,
    VOICE_FILTER_REQUEST_SWITCH: nF,
    VOICE_FILTER_LOOPBACK_TOGGLE: nB,
    VOICE_FILTER_APPLIED: nZ,
    VOICE_FILTER_DOWNLOAD_FAILED: nV,
    VOICE_FILTER_APPLY_FAILED: nV
}));
