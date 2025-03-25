let r, i, o, a;
n.d(t, { Z: () => rt }), n(47120), n(301563), n(571269), n(298267), n(266796), n(773603), n(653041), n(337869);
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
    v = n(579806),
    y = n(887278),
    O = n(547727),
    I = n(435064),
    S = n(779618),
    T = n(710845),
    N = n(535911),
    A = n(785141),
    C = n(353926),
    R = n(646047),
    P = n(594190),
    w = n(502286),
    D = n(12898),
    L = n(355552),
    x = n(294473),
    M = n(706629),
    k = n(166884),
    j = n(998594),
    U = n(14457),
    G = n(529558),
    B = n(111672),
    F = n(441167),
    V = n(580930),
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
function ey(e, t) {
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
    ek = 2 * X.Z.Millis.SECOND;
function ej() {
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
        videoHook: eU.supports(em.AN.VIDEO_HOOK),
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
eO.enableNativeLogger(!0);
let eG = {},
    eB = new Set([em.Yn.DEFAULT]),
    eF = eU.supports(em.AN.AUTO_ENABLE),
    eV = !1,
    eZ = em.Yn.STREAM,
    eH = { [em.w5]: tj('No Input Devices') },
    eW = { [em.w5]: tj('No Output Devices') },
    eY = { [em.w5]: tj('No Video Devices') },
    eK = !1,
    ez = !1,
    eq = !1,
    eQ = !1,
    eX = !1,
    eJ = em.Av,
    e$ = !1,
    e0 = !1,
    e1 = !1,
    e2 = new E.V7(),
    e3 = !1,
    e4 = !1,
    e6 = null,
    e5 = !1,
    e7 = !1,
    e8 = !1,
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
H.Z.hasPermission(ep.Eu.AUDIO, { showAuthorizationError: !1 }), H.Z.hasPermission(ep.Eu.CAMERA, { showAuthorizationError: !1 });
let tc = !1,
    tu = new Set(),
    td = tc,
    tf = new Set(),
    t_ = {},
    tp = null,
    th = !0,
    tm = {},
    tg = 5 * X.Z.Millis.SECOND;
function tE() {
    var e, t;
    return null !== (t = null === (e = eu.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t ? 'always' : $.Z === p.R.CANARY ? 'permittedDevicesOnly' : 'never';
}
function tb() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.Yn.DEFAULT,
        t = eG[e];
    return null == t && ((t = ej()), (eG[e] = t)), t;
}
function tv(e) {
    let t = tb(e.context);
    e.setInputMode(t.mode, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: t.modeOptions.autoThreshold,
        vadUseKrisp: t.modeOptions.vadUseKrisp && nw(),
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        pttReleaseDelay: t.modeOptions.delay
    });
}
function ty(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.Qx;
    return d().clamp(e, 0, t);
}
function tO(e) {
    let t = tb(e.context),
        n = !eF || t.mute || t.deaf;
    e.context === em.Yn.DEFAULT ? (n = n || eK || ez || eq || !H.Z.didHavePermission(ep.Eu.AUDIO)) : e.context === em.Yn.STREAM && (n = !0), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === em.Yn.DEFAULT && O.Z.updateNativeMute();
}
function tI(e) {
    e !== eZ && (null != o && eU.setGoLiveSource(null, eZ), (eZ = e));
}
function tS() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX,
        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
        s = o;
    if (((null == s ? void 0 : s.desktopSource) != null && s.desktopSource.id !== (null == a ? void 0 : null === (e = a.desktopSource) || void 0 === e ? void 0 : e.id) && (null != s.desktopSource.soundshareId && (0, J.isWindows)() && y.pn(s.desktopSource.soundshareId), eU.setGoLiveSource(null, eZ)), (null == s ? void 0 : s.cameraSource) != null && (s.cameraSource.videoDeviceGuid !== (null == a ? void 0 : null === (t = a.cameraSource) || void 0 === t ? void 0 : t.videoDeviceGuid) || s.cameraSource.audioDeviceGuid !== (null == a ? void 0 : null === (n = a.cameraSource) || void 0 === n ? void 0 : n.audioDeviceGuid)) && eU.setGoLiveSource(null, eZ), (eX || i) && ((eJ = (eX = i) ? tG(eY, tb().videoDeviceId) : em.Av), eU.setVideoInputDevice(eJ)), (o = a), null != a)) {
        let e = {
            resolution: a.quality.resolution,
            frameRate: a.quality.frameRate
        };
        if (null != a.desktopSource) {
            let t = tE(),
                n = tb().videoHook;
            eU.setGoLiveSource(
                {
                    desktopDescription: {
                        id: a.desktopSource.id,
                        soundshareId: a.desktopSource.soundshareId,
                        useVideoHook: n,
                        useGraphicsCapture: tC(),
                        useLoopback: r.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: tR(),
                        videoHookStaleFrameTimeoutMs: ew,
                        graphicsCaptureStaleFrameTimeoutMs: eD,
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
function tT(e, t, n, r) {
    var i;
    let o = null !== (i = null == e ? void 0 : e.soundshareSession) && void 0 !== i ? i : '';
    null == tm[o] && (tm[o] = new Set());
    let a = null != t && !tm[o].has(t);
    a && tm[o].add(t),
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
function tN(e) {
    let t = tb(),
        n = t.inputDeviceId;
    if ((e.setEchoCancellation(eo.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(eo.Z.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(eo.Z.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), e.setVoiceFilterId(tt), (0, J.isWeb)())) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function tA() {
    eU.on(m.aB.Connection, (e) => {
        var t, n, i, a;
        tv(e), tO(e), tN(e);
        let s = tb();
        e.setAttenuation(s.attenuation, s.attenuateWhileSpeakingSelf, s.attenuateWhileSpeakingOthers), e.setQoS(s.qos), e.setExperimentalEncoders(s.experimentalEncoders), e.setHardwareH264(null === (t = s.hardwareEncoding) || void 0 === t || t), e.setSoftwareH264(null === (n = s.openH264) || void 0 === n || n);
        let l = el.Z.getGuildId(),
            { muteBeforeProcessing: c, pttBeforeProcessing: u, skipEncode: d } = (null != l ? M.Z : x.Z).getCurrentConfig(eb({ location: 'setupMediaEngine' }, null != l && { guildId: l }), { autoTrackExposure: !0 });
        c && e.setExperimentFlag(em.V8.MUTE_BEFORE_PROCESSING, !0), u && e.setExperimentFlag(em.V8.PTT_BEFORE_PROCESSING, !0), d && e.setExperimentFlag(em.V8.SKIP_ENCODE, !0);
        let f = !1,
            _ = !0;
        if ((e.setExperimentFlag(em.V8.RESET_DECODER_ON_ERRORS, !0), f && e.setExperimentFlag(em.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0), _ && e.setExperimentFlag(em.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0), e.context === em.Yn.STREAM)) {
            let { simulcastEnabled: t, lqStreamBitrate: n } = k.Z.getConfig();
            e.configureGoLiveSimulcast(t, n);
        }
        (0, J.isWindows)() ? ((null == tp ? void 0 : tp.startsWith('NVIDIA')) ? e.setExperimentFlag(em.V8.SIGNAL_AV1, !0) : (null == tp ? void 0 : tp.startsWith('AMD')) && parseInt(null !== (a = null === (i = tp.match(/\d+/)) || void 0 === i ? void 0 : i.at(0)) && void 0 !== a ? a : '0', 10) >= 9000 && D.Z.getCurrentConfig({ location: 'setupMediaEngine' }, { autoTrackExposure: !0 }).signalAV1Support ? e.setExperimentFlag(em.V8.SIGNAL_AV1, !0) : e.setExperimentFlag(em.V8.SIGNAL_AV1_DECODE, !0)) : ((0, J.isMac)() || (0, J.isLinux)()) && e.setExperimentFlag(em.V8.SIGNAL_AV1_DECODE, !0), (0, J.isWindows)() && e.setExperimentFlag(em.V8.SIGNAL_AV1_HARDWARE_DECODE, !0), eU.setHasFullbandPerformance((0, N.Z)());
        let p = (0, L.D)('setupMediaEngine').enabled;
        if ((e.setRemoteAudioHistory(1000 * !!p), (0, S.Z)(r))) {
            let t = I.Z.getSettings();
            e.setExperimentFlag(em.V8.STREAMER_CLIP, t.clipsEnabled);
            let { enableViewerClipping: n } = F.Z.getCurrentConfig({ location: 'f627ab_15' }, { autoTrackExposure: !1 });
            e.setViewerSideClip(n), e.setClipsKeyFrameInterval(em.ux);
        }
        for (let t of ((s = tb(e.context)), e.setPostponeDecodeLevel(ex), Object.keys(s.localMutes))) t !== er.default.getId() && e.setLocalMute(t, s.localMutes[t]);
        for (let t of Object.keys(s.localVolumes)) t !== er.default.getId() && e.setLocalVolume(t, s.localVolumes[t]);
        for (let t of Object.keys(s.localPans)) {
            let n = s.localPans[t];
            e.setLocalPan(t, n.left, n.right);
        }
        for (let t of Object.keys(s.disabledLocalVideos)) e.setLocalVideoDisabled(t, s.disabledLocalVideos[t]);
        e.on(m.Sh.Speaking, (t, n) => {
            b.Z.dispatch({
                type: 'SPEAKING',
                context: e.context,
                userId: t,
                speakingFlags: n
            });
        }),
            e.context === em.Yn.DEFAULT &&
                ((e0 = !1),
                (e1 = !1),
                e.on(m.Sh.SpeakingWhileMuted, () => {
                    (e0 = !0),
                        (e1 = !0),
                        r.emitChange(),
                        e2.stop(),
                        e2.start(ek, () => {
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
                (null == o ? void 0 : o.desktopSource) != null && q.default.track(ef.rMx.SOUNDSHARE_ATTACHED, (0, w.Z)(null == o ? void 0 : o.desktopSource));
            }),
            e.on(m.Sh.SoundshareFailed, (e) => {
                let { failureCode: t, failureReason: n, willRetry: r } = e;
                tT(null == o ? void 0 : o.desktopSource, t, n, r);
            }),
            e.on(m.Sh.SoundshareSpeaking, () => {
                (null == o ? void 0 : o.desktopSource) != null && (q.default.track(ef.rMx.SOUNDSHARE_TRANSMITTING, (0, w.Z)(null == o ? void 0 : o.desktopSource)), null != es.Z.getHookError(ef.K3D.SOUND) && b.Z.wait(() => b.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
            });
        let h = new E.V7();
        e.on(m.Sh.SoundshareTrace, (e) => {
            switch (e.type) {
                case 'soundshare_attach_requested':
                    h.start(tg, () => {
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
                    (null == o ? void 0 : o.desktopSource) == null ||
                        (tT(null == o ? void 0 : o.desktopSource, n, t, r),
                        r ||
                            (h.stop(),
                            b.Z.wait(() =>
                                b.Z.dispatch({
                                    type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
                                    errorMessage: t,
                                    errorCode: n
                                })
                            )));
                    break;
                case 'soundshare_state_transition':
                    4 === e.newState && (h.stop(), b.Z.wait(() => b.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
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
                    (0, A.kr)(A.u.NOISE_CANCELLER_ERROR, { underlyingError: 'NoiseCancellerError.'.concat(em.H3[e]) }),
                    (ta = !0),
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
                    (0, A.kr)(A.u.NOISE_CANCELLER_ERROR, { underlyingError: 'NoiseCancellerError.'.concat(em.H3[e]) }),
                    q.default.track(ef.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    b.Z.dispatch({
                        type: 'AUDIO_SET_MODE',
                        context: em.Yn.DEFAULT,
                        mode: ef.pM4.VOICE_ACTIVITY,
                        options: ey(eb({}, tb(em.Yn.DEFAULT).modeOptions), { vadUseKrisp: !1 })
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
                h.stop();
            }),
            e.setBitRate(ei.Z.bitrate),
            e.applyVideoQualityMode(ed.Z.mode);
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
                await Q.Z.submitLiveCrashReport({ message: { message: 'Voice Watchdog Timeout' } });
            } catch (t) {
                'number' == typeof t.status && (e = t.status);
            }
            eO.warn('Watchdog timeout, report submission status: '.concat(null != e ? e : 200)), q.default.track(ef.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        eU.on(m.aB.VideoInputInitialized, (e) => {
            q.default.track(ef.rMx.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * X.Z.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: el.Z.getMediaSessionId(),
                rtc_connection_id: el.Z.getRTCConnectionId()
            });
        }),
        eU.on(m.aB.AudioInputInitialized, (e) => {
            q.default.track(ef.rMx.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * X.Z.Millis.SECOND),
                rtc_connection_id: el.Z.getRTCConnectionId()
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
            (null == a ? void 0 : null === (n = a.desktopSource) || void 0 === n ? void 0 : n.id) === e && (null != t && (null == o ? void 0 : null === (r = o.desktopSource) || void 0 === r ? void 0 : r.soundshareId) !== t && y.pn(t), (a = null));
        }),
        eU.on(m.aB.NativeScreenSharePickerUpdate, (e, t) => {
            j.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerUpdate' }),
                b.Z.dispatch({
                    type: 'NATIVE_SCREEN_SHARE_PICKER_UPDATE',
                    existing: e,
                    content: t
                });
        }),
        eU.on(m.aB.NativeScreenSharePickerCancel, (e) => {
            j.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerCancel' }),
                b.Z.dispatch({
                    type: 'NATIVE_SCREEN_SHARE_PICKER_CANCEL',
                    existing: e
                });
        }),
        eU.on(m.aB.NativeScreenSharePickerError, (e) => {
            j.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerError' }),
                b.Z.dispatch({
                    type: 'NATIVE_SCREEN_SHARE_PICKER_ERROR',
                    error: e
                });
        }),
        eU.on(m.aB.AudioDeviceModuleError, (e, t, n) => {
            q.default.track(ef.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                audio_device_module: e,
                code: t,
                device_name: n
            });
        }),
        eU.on(m.aB.VideoCodecError, (e) => {
            let t = 'encode' === e.mode;
            (0, A.kr)(t ? A.u.VIDEO_ENCODE_ERROR : A.u.VIDEO_DECODE_ERROR, {
                videoCodec: e.codecStandard,
                videoEncoder: t ? e.implName : null,
                videoDecoder: t ? null : e.implName,
                errorMessage: e.message
            });
        }),
        eU.on(m.aB.ConnectionStats, (e) => {
            b.Z.dispatch({
                type: 'MEDIA_ENGINE_CONNECTION_STATS',
                connectionStats: e
            });
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
        tw.reset(),
        (0, ec.q)().then((e) => {
            null != e && (tp = e.gpu_brand);
        });
}
function tC() {
    return (0, J.isWindows)() && _().satisfies(null === v.Z || void 0 === v.Z ? void 0 : v.Z.os.release, e_.nz);
}
function tR() {
    return (0, J.isMac)() && eU.supports(em.AN.SCREEN_CAPTURE_KIT) && _().satisfies(null === v.Z || void 0 === v.Z ? void 0 : v.Z.os.release, e_.C7);
}
function tP() {
    return (0, J.isWindows)() && eU.supports(em.AN.AUTOMATIC_AUDIO_SUBSYSTEM) && eU.supports(em.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH);
}
let tw = new (class {
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
        let e = tb();
        !e5 && el.Z.getState() === ef.hes.RTC_CONNECTED && e.mode === ef.pM4.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop();
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
                                    e && (e7 = !0));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout
                    ));
            });
    }
})();
function tD() {
    var e;
    let t = g.K.get('audio');
    null != t && (g.K.set(eI, { [em.Yn.DEFAULT]: t }), g.K.remove('audio')),
        (eG = null !== (e = g.K.get(eI)) && void 0 !== e ? e : {}),
        d().each(eG, (e) => {
            if ((d().defaultsDeep(e, ej()), null != e.modeOptions && 'string' == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, en.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== eS && ((e.vadUseKrispSettingVersion = eS), (e.modeOptions.vadUseKrisp = !0)), e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)), !e.vadThrehsoldMigrated)) {
                var t;
                (e.vadThrehsoldMigrated = !0), (null === (t = e.modeOptions) || void 0 === t ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = eL);
            }
            (0, J.isWeb)() ? e.ncUseKrispjsSettingVersion !== eN && ((e.ncUseKrispjsSettingVersion = eN), (e.noiseSuppression = !1), (e.noiseCancellation = !0)) : e.ncUseKrispSettingVersion !== eT && ((e.ncUseKrispSettingVersion = eT), (e.noiseSuppression = !1), (e.noiseCancellation = !0)), e.hardwareEnabledVersion !== eA && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = eA)), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
        }),
        tM();
}
function tL(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = tb(t);
    return Object.assign(r, e), !__OVERLAY__ && n && g.K.set(eI, eG), r;
}
function tx() {
    g.K.remove(eI), location.reload();
}
function tM() {
    var e, t, n;
    let r = tb();
    eU.setAudioInputDevice(r.inputDeviceId), eU.setAudioOutputDevice(r.outputDeviceId), tS(), eU.setInputVolume(r.inputVolume), eU.setOutputVolume(r.outputVolume), eU.setH264Enabled(null === (e = r.hardwareEncoding) || void 0 === e || e || r.openH264), eU.setAv1Enabled(null === (t = r.hardwareEncoding) || void 0 === t || t), eU.setH265Enabled(null === (n = r.hardwareEncoding) || void 0 === n || n), eU.setAecDump(r.aecDumpEnabled), eU.setSidechainCompression(r.sidechainCompression), eU.setSidechainCompressionStrength(r.sidechainCompressionStrength);
}
function tk() {
    eF ||
        eU.enable().then(() =>
            b.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
                enabled: !0,
                unmute: !1
            })
        );
}
function tj(e) {
    return {
        id: em.w5,
        index: 0,
        name: e,
        disabled: !0
    };
}
function tU(e, t) {
    if (0 === e.length) {
        let e = tj(t);
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
function tG(e, t) {
    var n;
    let r = null !== (n = e[t]) && void 0 !== n ? n : d()(e).values().first();
    return null != r ? r.id : t;
}
function tB(e) {
    let t = eH;
    if (((eH = tU(e, eg.NW.string(eg.t['/QIjDA']))), !d().isEqual(eH, t))) {
        let e = tb(),
            t = tG(eH, e.inputDeviceId);
        eU.setAudioInputDevice(t);
    }
}
function tF(e) {
    let t = eW;
    if (((eW = tU(e, eg.NW.string(eg.t.xlUg0t))), !d().isEqual(eW, t))) {
        let e = tb(),
            t = tG(eW, e.outputDeviceId);
        eU.setAudioOutputDevice(t);
    }
}
function tV(e) {
    e4 = e.length > 0;
    let t = eY;
    if (((eY = tU(e, eg.NW.string(eg.t.WKWARU))), eX && !d().isEqual(eY, t))) {
        var n;
        let e = void 0 !== eY[eJ],
            r = eJ === em.w5 && (null === (n = t[em.w5]) || void 0 === n ? void 0 : n.disabled);
        tS(e || r);
    }
}
function tZ() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        r =
            null !== (e = Y.Z.settings.audioContextSettings) && void 0 !== e
                ? e
                : {
                      user: {},
                      stream: {}
                  };
    for (let e of Object.keys(r)) {
        let i = e === eh.u0.USER ? em.Yn.DEFAULT : em.Yn.STREAM,
            o = i === em.Yn.STREAM ? em.Yh : em.Qx,
            a = null !== (t = r[e]) && void 0 !== t ? t : {},
            { localMutes: s, localVolumes: l } = tb(i);
        for (let [e, t] of Object.entries(a))
            null == (0, W.Ky)(i, e) &&
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
        tL(
            {
                localMutes: s,
                localVolumes: l
            },
            i
        );
    }
}
function tH(e) {
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
function tW(e, t) {
    (0, J.isWindows)() &&
        y.YT(e, { soundshare_session: t }).then((t) => {
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
function tY(e) {
    (i = e.sessionId),
        (eK = !1),
        (eQ = !1),
        (0, J.isWeb)() ||
            (B.Z.subscribe({ location: 'handleConnectionOpen' }, (e) => {
                let t = tb();
                !e.sidechainAvailable && t.sidechainCompression ? (tL({ sidechainCompressionSettingVersion: 0 }), nd(!1)) : e.sidechainAvailable && t.sidechainCompressionSettingVersion < eC && (tL({ sidechainCompressionSettingVersion: eC }), nd(e.sidechainEnabled));
            }),
            n_());
    let t = tb();
    tP() && (t.automaticAudioSubsystem && nF(), t.audioSubsystemSettingVersion < eR && (tL({ audioSubsystemSettingVersion: eR }), t.automaticAudioSubsystem || eU.getAudioSubsystem() === em.iA.LEGACY || nB(em.iA.AUTOMATIC))),
        (0, z.wt)({
            location: 'MediaEngineStore',
            autoTrackExposure: !1
        }) &&
            null !== t.mostRecentlyRequestedVoiceFilter &&
            (0, K.J_)(),
        tZ();
}
function tK(e) {
    let { mediaEngineState: t } = e;
    (eG = t.settingsByContext), (eH = t.inputDevices), (eW = t.outputDevices), (t_ = t.appSupported), (te = t.krispModuleLoaded), (eZ = t.goLiveContext);
}
function tz() {
    i = null;
}
function tq(e) {
    switch (e.state) {
        case ef.hes.CONNECTING:
            tk();
            break;
        case ef.hes.RTC_CONNECTING:
            (e5 = !1), (e7 = !1);
            break;
        case ef.hes.RTC_CONNECTED:
            tS();
            break;
        case ef.hes.DISCONNECTED:
            t4(), t6();
    }
    tw.update();
}
function tQ(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => (i === t.sessionId ? ((eK = t.mute || t.suppress), (eQ = t.deaf), eU.eachConnection(tO), tS((null == t.guildId || null == t.channelId || null == to || to === t.channelId) && eX), (to = t.channelId), !0) : (__OVERLAY__ || t.userId !== er.default.getId() || null != el.Z.getChannelId() || tS(!1, null), e)), !1);
}
function tX(e) {
    let { mute: t } = e;
    (ez = t), eU.eachConnection(tO);
}
function tJ(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = tb(t);
    if (t === em.Yn.DEFAULT && (H.Z.requestPermission(ep.Eu.AUDIO), eq)) return !1;
    (r = !i && !r) || (i = !1),
        n || (e$ = !0),
        tL(
            {
                mute: r,
                deaf: i
            },
            t
        ),
        eU.eachConnection(tO);
}
function t$(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    tL({ mute: n }, t), r || (e$ = !0), eU.eachConnection(tO);
}
function t0(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r
    } = e;
    if (t !== eh.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    tZ(!0);
}
function t1(e) {
    let { context: t } = e;
    tL({ deaf: !tb(t).deaf }, t), eU.eachConnection(tO);
}
function t2(e) {
    let { context: t, userId: n } = e;
    if (n === er.default.getId()) return;
    let { localMutes: r } = tb(t);
    r[n] ? delete r[n] : (r[n] = !0), tL({ localMutes: r }, t), eU.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function t3(e) {
    var t, n, r, i, o, a, s;
    let { context: l, userId: u, videoToggleState: d, persist: f, isAutomatic: _ } = e;
    c()(!(f && _), 'These are not allowed to both be true.');
    let p = d === ef.ZUi.DISABLED,
        { disabledLocalVideos: h } = tb(l),
        m = null !== (t = h[u]) && void 0 !== t && t,
        g = tu.has(u),
        E = d === ef.ZUi.AUTO_ENABLED || d === ef.ZUi.MANUAL_ENABLED;
    eO.info('disableVideo='.concat(p, ' currentlyDisabled=').concat(m, ' currentlyAutoDisabled=').concat(g, ', isVideoShown=').concat(E)), c()(!(g && !m), 'If you are auto-disabled, then you are also disabled.');
    let b = p !== m,
        v = l === em.Yn.DEFAULT,
        y = _ && b && v,
        O = f && b && v;
    eO.info('changed='.concat(b, ' isDefaultContext=').concat(v, ' isUpdateCausedByVideoHealthManager=').concat(y, ' isManualToggleByUser=').concat(O));
    let { videoToggleStateMap: I } = tb(l);
    if ((I[u] === ef.ZUi.AUTO_PROBING && d === ef.ZUi.AUTO_ENABLED && (0, Z.Z)(u, p ? em.fC.AUTO_DISABLE : em.fC.AUTO_ENABLE, E), (I[u] = d), tL({ videoToggleStateMap: I }, l, f), d === ef.ZUi.AUTO_PROBING ? null === (n = el.Z.getRTCConnection()) || void 0 === n || n.pauseStatsCollectionForUser(u, !0) : null === (r = el.Z.getRTCConnection()) || void 0 === r || r.pauseStatsCollectionForUser(u, !1), td || (eO.info('isAutoDisableAllowed='.concat(td, ' - disabling VideoHealthManager')), null === (o = el.Z.getRTCConnection()) || void 0 === o || null === (i = o.getVideoHealthManager()) || void 0 === i || i.disable()), y)) {
        if ((!p && !g) || (p && !td)) return;
        (0, Z.Z)(u, p ? em.fC.AUTO_DISABLE : em.fC.AUTO_ENABLE, E), p ? tu.add(u) : tu.delete(u);
    } else O && (g && !p ? (eO.info('disallowing auto-disable for this session because of manual override by user'), (td = !1), null === (s = el.Z.getRTCConnection()) || void 0 === s || null === (a = s.getVideoHealthManager()) || void 0 === a || a.disable(), (0, Z.Z)(u, em.fC.MANUAL_REENABLE, E)) : (0, Z.Z)(u, p ? em.fC.MANUAL_DISABLE : em.fC.MANUAL_ENABLE, E));
    v && !p && tu.delete(u),
        p ? (h[u] = !0) : delete h[u],
        tL({ disabledLocalVideos: h }, l, f),
        eU.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(u, null !== (t = h[u]) && void 0 !== t && t);
        }, l);
}
function t4() {
    if (0 === tu.size) return;
    let e = em.Yn.DEFAULT,
        { disabledLocalVideos: t } = tb(e);
    tu.forEach((n) => {
        c()(t[n], 'If you are auto-disabled, then you are also disabled.'), delete t[n], eU.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tu.clear(),
        tL({ disabledLocalVideos: t }, e, !1);
}
function t6() {
    let e = em.Yn.DEFAULT,
        { videoToggleStateMap: t } = tb(e);
    for (let [e, n] of Object.entries(t)) n === ef.ZUi.AUTO_PROBING && delete t[e];
    tL({ videoToggleStateMap: t }, e, !1);
}
function t5(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === er.default.getId()) return;
    let i = t === em.Yn.STREAM ? em.Yh : em.Qx,
        { localVolumes: o } = tb(t);
    r === i ? delete o[n] : (o[n] = r), tL({ localVolumes: o }, t), eU.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function t7(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: o } = tb(t);
    (o[n] = {
        left: r,
        right: i
    }),
        tL({ localPans: o }, t),
        eU.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function t8(e) {
    let { context: t, mode: n, options: r } = e;
    tL(
        {
            mode: n,
            modeOptions: r
        },
        t
    ),
        eU.eachConnection(tv),
        tw.update();
}
function t9(e) {
    let { volume: t } = e;
    tL({ inputVolume: ty(t) }), eU.setInputVolume(t);
}
function ne(e) {
    let { volume: t } = e;
    tL({ outputVolume: t }), eU.setOutputVolume(t);
}
function nt(e) {
    let { id: t } = e;
    tL({ inputDeviceId: (t = tG(eH, t)) }), eU.setAudioInputDevice(t);
}
function nn(e) {
    let { id: t } = e;
    tL({ outputDeviceId: (t = tG(eW, t)) }), eU.setAudioOutputDevice(t);
}
function nr(e) {
    let { id: t } = e;
    tL({ videoDeviceId: (t = tG(eY, t)) }), tS();
}
function ni(e) {
    return eV !== e.required && ((eV = e.required), e.required || eU.interact(), !0);
}
function no(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    tB(t), tF(n), tV(r);
}
function na(e) {
    let { inputVolume: t, outputVolume: n } = e;
    tL({
        inputVolume: ty(t),
        outputVolume: n
    });
}
function ns(e) {
    let t = tb();
    q.default.track(ef.rMx.VOICE_PROCESSING, {
        echo_cancellation: t.echoCancellation,
        noise_cancellation: t.noiseCancellation,
        noise_suppression: t.noiseSuppression,
        automatic_gain_control: t.automaticGainControl,
        location: e
    });
}
function nl(e) {
    let t = tL({ echoCancellation: e.enabled });
    eU.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), np(), ns(e.location);
}
function nc(e) {
    nd(e.enabled);
}
function nu(e) {
    let t = tL({ sidechainCompressionStrength: e.strength });
    eU.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function nd(e) {
    let t = tL({ sidechainCompression: e });
    eU.setSidechainCompression(t.sidechainCompression);
}
function nf(e) {
    let { enabled: t, loopbackReason: n } = e,
        r = tf.size > 0;
    return t ? tf.add(n) : tf.delete(n), n_(), tf.size > 0 !== r && np();
}
function n_() {
    let { voiceFiltersPreProcessMute: e } = V.Z.getCurrentConfig({ location: 'setMaybePreprocessMute' }, { autoTrackExposure: !0 }),
        t = e && !tf.has('voice_filter_preview') && !tf.has('mic_test');
    eU.setMaybePreprocessMute(t);
}
function np() {
    let e = tb(),
        t = tf.size > 0,
        n = e.inputDeviceId,
        r = eo.Z.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        o = eo.Z.hasNoiseSuppression(n) || e.noiseSuppression,
        a = eo.Z.hasAutomaticGainControl(n) || e.automaticGainControl,
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
function nh(e) {
    let t = tL({ noiseSuppression: e.enabled });
    eU.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), np(), ns(e.location);
}
function nm(e) {
    let t = tL({ automaticGainControl: e.enabled });
    eU.eachConnection((e) => e.setAutomaticGainControl(t.automaticGainControl)), np(), ns(e.location);
}
function ng(e) {
    let t = tL({ noiseCancellation: e.enabled });
    eU.eachConnection((e) => e.setNoiseCancellation(t.noiseCancellation)), np(), ns(e.location);
}
function nE(e) {
    let t = tL({ experimentalEncoders: e.enabled });
    eU.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
}
function nb(e) {
    var t, n;
    let { enabled: r } = e,
        i = tL({ hardwareEncoding: r });
    eU.eachConnection((e) => {
        var t;
        return e.setHardwareH264(null === (t = i.hardwareEncoding) || void 0 === t || t);
    }),
        eU.setH264Enabled(i.hardwareEncoding || i.openH264),
        eU.setAv1Enabled(null === (t = i.hardwareEncoding) || void 0 === t || t),
        eU.setH265Enabled(null === (n = i.hardwareEncoding) || void 0 === n || n);
}
function nv(e) {
    tL({ silenceWarning: e.enabled }), tw.update();
}
function ny(e) {
    eU.setDebugLogging(e.enabled);
}
function nO(e) {
    tL({ videoHook: e.enabled });
}
function nI(e) {
    tL({ experimentalSoundshare2: e.enabled });
}
function nS(e) {
    let { enabled: t } = e;
    tL({ useSystemScreensharePicker: t });
}
function nT(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = tL({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r
        });
    eU.eachConnection((e) => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers));
}
function nN(e) {
    let { enabled: t } = e;
    tL({ qos: t }), eU.eachConnection((e) => e.setQoS(t));
}
function nA() {
    tx();
}
function nC(e) {
    let { inputDetected: t } = e;
    (e6 = t), !e5 && e6 && ((e5 = !0), tw.update());
}
function nR(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === eq) return !1;
    (eq = n), eU.eachConnection(tO);
}
function nP(e) {
    let { state: t, permissionType: n } = e,
        r = t === ep.PQ.ACCEPTED;
    switch (n) {
        case ep.Eu.AUDIO:
            (tl = !0), eU.eachConnection(tO);
            break;
        case ep.Eu.CAMERA:
            !r && eX && tS(!1);
            break;
        default:
            return !1;
    }
}
function nw() {
    return te || !1;
}
async function nD() {
    try {
        await et.ZP.ensureModule('discord_krisp'), et.ZP.requireModule('discord_krisp'), (te = !0), r.emitChange();
    } catch (t) {
        eO.warn('Failed to load Krisp module: '.concat(t.message)), ee.Z.captureException(t);
        let e = em.H3.INITIALIZED;
        if (t.message.includes(': ')) {
            let n = parseInt(t.message.substring(t.message.indexOf(': ') + 1));
            e = isNaN(n) || 0 === n ? em.H3.INITIALIZED : n;
        }
        q.default.track(ef.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), tL({ noiseCancellation: !1 });
    } finally {
        e9 = !1;
    }
}
function nL() {
    return (0, J.isWindows)() || (0, J.isLinux)() || ((0, J.isMac)() && _().satisfies(null === v.Z || void 0 === v.Z ? void 0 : v.Z.os.release, eM));
}
function nx() {
    !nL() || __OVERLAY__ || e9 || te ? ((0, J.isWeb)() && eU.supports(em.AN.NOISE_CANCELLATION) ? ((te = !0), r.emitChange()) : (0, J.isWeb)() && tL({ noiseCancellation: !1 })) : ((e9 = !0), nD());
}
function nM(e) {
    let { enabled: t } = e;
    q.default.track(ef.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != tt ? tt : null,
        enabled: t
    }),
        tL({ voiceFilterPlaybackEnabled: t });
}
function nk(e) {
    let { newVoiceFilterId: t } = e;
    tL({ mostRecentlyRequestedVoiceFilter: t }), eU.eachConnection((e) => e.setVoiceFilterId(t));
}
function nj() {
    tL({ mostRecentlyRequestedVoiceFilter: null });
}
function nU(e) {
    let { voiceFilterId: t } = e;
    (tr = tt), (ti = tn), (tt = t), (tn = null === t ? null : Date.now());
}
function nG(e) {
    nB(e.subsystem);
}
function nB(e) {
    e === em.iA.AUTOMATIC ? (tL({ automaticAudioSubsystem: !0 }), nF()) : (tL({ automaticAudioSubsystem: !1 }), eU.setAudioSubsystem(e));
}
function nF() {
    let { enabled: e } = U.I.getCurrentConfig({ location: 'interpretAutomaticAudioSubsystem' });
    e ? eU.queueAudioSubsystem(em.iA.EXPERIMENTAL) : eU.queueAudioSubsystem(em.iA.STANDARD);
}
function nV(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && tS(i, null), null != t || null == n)) {
        e8 = !1;
        return;
    }
    if (e8) return;
    e8 = !0;
    let o = tb();
    (o.mute || o.deaf) &&
        (tL({
            deaf: !1,
            mute: !1
        }),
        eU.eachConnection(tO));
}
function nZ(e) {
    let { application: t } = e;
    eB.add(t.id);
}
function nH(e) {
    let { application: t } = e;
    eB.delete(t.id);
}
function nW(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case 'audio':
                (eF = !1), eU.eachConnection(tO);
                break;
            case 'video':
                tS(!1);
        }
}
function nY(e) {
    (eF = e.enabled),
        e.unmute &&
            tL({
                mute: !1,
                deaf: !1
            }),
        eU.eachConnection(tO);
}
function nK(e) {
    let { enabled: t } = e;
    H.Z.requestPermission(ep.Eu.CAMERA), tS(t);
}
function nz(e) {
    let { sourceId: t, applicationName: n, quality: i } = e,
        o = I.Z.isDecoupledGameClippingEnabled(),
        s = I.Z.getSettings().decoupledClipsEnabled;
    if (!o || !s || null == v.Z) return;
    let l = null,
        c = null,
        u = Q.Z.getPidFromDesktopSource(t);
    ({ soundshareId: l, soundshareSession: c } = tH(u));
    let d = {
        desktopSource: {
            id: t,
            sourcePid: u,
            soundshareId: l,
            soundshareSession: c
        },
        quality: i
    };
    null != a && a.desktopSource.id !== d.desktopSource.id && (eU.setClipsSource(null), (0, J.isWindows)() && null != a.desktopSource.soundshareId && y.pn(a.desktopSource.soundshareId)), null != l && tW(l, c), (a = d);
    let f = tE(),
        _ = tb().videoHook;
    eU.setClipsSource({
        desktopDescription: {
            id: a.desktopSource.id,
            soundshareId: a.desktopSource.soundshareId,
            useVideoHook: _,
            useGraphicsCapture: tC(),
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: tR(),
            videoHookStaleFrameTimeoutMs: ew,
            graphicsCaptureStaleFrameTimeoutMs: eD,
            hdrCaptureMode: f
        },
        quality: i,
        applicationName: n
    });
}
function nq(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((a = null), eU.setClipsSource(null));
}
function nQ(e) {
    var t, n, r, i;
    let { settings: o } = e;
    if ((null == o ? void 0 : o.desktopSettings) != null) {
        let e = null,
            r = null,
            { sourceId: i, sound: a } = o.desktopSettings,
            s = null !== (t = o.context) && void 0 !== t ? t : em.Yn.DEFAULT,
            l =
                null !== (n = o.qualityOptions) && void 0 !== n
                    ? n
                    : {
                          resolution: 720,
                          frameRate: 30
                      },
            c = !1 === a ? null : Q.Z.getPidFromDesktopSource(i);
        J.isPlatformEmbedded && !0 === a && (({ soundshareId: e, soundshareSession: r } = tH(c)), null != e && tW(e, r)),
            tI(s),
            tS(s === em.Yn.STREAM && eX, {
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
        let e = null !== (r = o.context) && void 0 !== r ? r : em.Yn.DEFAULT,
            { videoDeviceGuid: t, audioDeviceGuid: n } = o.cameraSettings,
            a = e === em.Yn.STREAM && eX,
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
    } else tS(eX, null);
}
function nX(e) {
    let { section: t } = e;
    return t === ef.oAB.VOICE && tk(), !1;
}
function nJ() {
    return eU.eachConnection(tN), !1;
}
function n$(e) {
    let { enabled: t } = e,
        n = tL({ openH264: t });
    eU.setH264Enabled(n.hardwareEncoding || n.openH264),
        eU.eachConnection((e) => {
            var t;
            return e.setSoftwareH264(null === (t = n.openH264) || void 0 === t || t);
        });
}
function n0(e) {
    let { enabled: t } = e,
        n = tL({ aecDumpEnabled: t });
    eU.setAecDump(n.aecDumpEnabled);
}
function n1(e) {
    let { state: t } = e,
        n = R.Z.isEnabled();
    if (t === ef.$7l.BACKGROUND && eX && !n) (e3 = !0), tS(!1);
    else {
        if (t !== ef.$7l.ACTIVE || !e3) return !1;
        (e3 = !1), tS(!0);
    }
    return !0;
}
function n2(e) {
    eU.eachConnection((t) => t.setBitRate(e.bitrate));
}
function n3() {
    if ((!eX && null == o) || null != el.Z.getRTCConnectionId()) return !1;
    tS(!1, null);
}
function n4() {
    return !!ta && ((ta = !1), !0);
}
function n6(e) {
    eU.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function n5(e) {
    let { settings: t } = e;
    eU.applyMediaFilterSettings(t).finally(() => {
        (ts = !1), r.emitChange();
    });
}
function n7() {
    ts = !0;
}
function n8() {
    ts = !1;
}
function n9(e) {
    th = e.enabled;
}
class re extends (s = h.ZP.Store) {
    initialize() {
        tA(),
            tD(),
            nx(),
            t6(),
            (t_ = {
                [em.AN.VIDEO]: eU.supports(em.AN.VIDEO),
                [em.AN.DESKTOP_CAPTURE]: eU.supports(em.AN.DESKTOP_CAPTURE),
                [em.AN.HYBRID_VIDEO]: eU.supports(em.AN.HYBRID_VIDEO)
            }),
            this.waitFor(er.default, eo.Z, ea.Z, es.Z, el.Z, P.ZP, H.Z.storage, Y.Z, C.Z, I.Z);
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
        return eU.supports(em.AN.EXPERIMENTAL_ENCODERS);
    }
    isNoiseSuppressionSupported() {
        return eU.supports(em.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return nw();
    }
    isNoiseCancellationError() {
        return ta;
    }
    isAutomaticGainControlSupported() {
        return eU.supports(em.AN.AUTOMATIC_GAIN_CONTROL);
    }
    isAdvancedVoiceActivitySupported() {
        return nw();
    }
    isAecDumpSupported() {
        return eU.supports(em.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return eU.supports(em.AN.VIDEO) && eU.supports(em.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        let t = (null === (e = ea.Z.getChannel(to)) || void 0 === e ? void 0 : e.type) === ef.d4z.GUILD_STAGE_VOICE,
            n = r.getHardwareEncoding();
        return !t && n && k.Z.simulcastEnabled();
    }
    getAecDump() {
        return tb().aecDumpEnabled;
    }
    getMediaEngine() {
        return eU;
    }
    getVideoComponent() {
        return eU.supports(em.AN.DIRECT_VIDEO) && eU.setUseDirectVideo(!0), eU.Video;
    }
    getCameraComponent() {
        return eU.supports(em.AN.DIRECT_VIDEO) && eU.setUseDirectVideo(!0), eU.Camera;
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
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.Yn.DEFAULT;
        return e === em.Yn.DEFAULT && ez;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.Yn.DEFAULT;
        return !this.isEnabled() || tb(e).mute || !H.Z.didHavePermission(ep.Eu.AUDIO) || this.isSelfDeaf(e) || (e === em.Yn.DEFAULT && eq);
    }
    shouldSkipMuteUnmuteSound() {
        return e$;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        e$ = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && eo.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return th;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.Yn.DEFAULT;
        return !this.isSupported() || tb(e).deaf;
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
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.Yn.STREAM;
        return eZ === e && null != o;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.Yn.STREAM;
        return eZ === t && null != o && (null === (e = o.desktopSource) || void 0 === e ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.Yn.DEFAULT;
        return e !== er.default.getId() && (tb(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return eU.supports(em.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.Yn.DEFAULT;
        return null !== (t = tb(n).disabledLocalVideos[e]) && void 0 !== t && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.Yn.DEFAULT;
        return null !== (t = tb(n).videoToggleStateMap[e]) && void 0 !== t ? t : ef.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.Yn.DEFAULT;
        return t === em.Yn.DEFAULT && tu.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.Yn.DEFAULT;
        return e === em.Yn.DEFAULT && tu.size > 0;
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
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.Yn.DEFAULT,
            n = tb(t).localPans[e];
        return null != n ? n : eP;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.Yn.DEFAULT,
            n = t === em.Yn.STREAM ? em.Yh : em.Qx,
            r = tb(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return tb().inputVolume;
    }
    getOutputVolume() {
        return tb().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.Yn.DEFAULT;
        return tb(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.Yn.DEFAULT;
        return tb(e).modeOptions;
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
        return tb().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return tb().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            d().each(eG, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i }
                } = t;
                r === ef.pM4.PUSH_TO_TALK && eB.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return tG(eH, tb().inputDeviceId);
    }
    getOutputDeviceId() {
        return tG(eW, tb().outputDeviceId);
    }
    getVideoDeviceId() {
        return tG(eY, tb().videoDeviceId);
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
        let e = tb();
        return eo.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return tb().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return tb().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return tb().h265Enabled;
    }
    getLoopback() {
        return tf.size > 0;
    }
    getLoopbackReasons() {
        return tf;
    }
    getNoiseSuppression() {
        let e = tb();
        return eo.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tb();
        return eo.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getNoiseCancellation() {
        return tb().noiseCancellation;
    }
    getExperimentalEncoders() {
        return tb().experimentalEncoders;
    }
    getHardwareEncoding() {
        var e;
        return null === (e = tb().hardwareEncoding) || void 0 === e || e;
    }
    getEnableSilenceWarning() {
        return tb().silenceWarning;
    }
    getDebugLogging() {
        return eU.getDebugLogging();
    }
    getQoS() {
        return tb().qos;
    }
    getAttenuation() {
        return tb().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return tb().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return tb().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return tP() && tb().automaticAudioSubsystem ? em.iA.AUTOMATIC : eU.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return eU.getMLSSigningKey(e, t);
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.Yn.DEFAULT;
        return tb(e);
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
        return e6;
    }
    getNoInputDetectedNotice() {
        return e7;
    }
    getPacketDelay() {
        return J.isPlatformEmbedded || this.getMode() !== ef.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        eU.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return eV;
    }
    getVideoHook() {
        return tb().videoHook;
    }
    supportsVideoHook() {
        return eU.supports(em.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tb().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e);
    }
    supportsExperimentalSoundshare() {
        return eU.supports(em.AN.EXPERIMENTAL_SOUNDSHARE) && _().satisfies(null === v.Z || void 0 === v.Z ? void 0 : v.Z.os.release, e_.I9);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = tb().useSystemScreensharePicker,
            n =
                (0, J.isLinux)() ||
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
        let e = eU.supports(em.AN.NATIVE_SCREENSHARE_PICKER);
        return j.Z.getCurrentConfig(
            { location: 'supportsSystemScreensharePicker' },
            {
                disable: !e,
                autoTrackExposure: !1
            }
        ).enableSystemPicker;
    }
    getOpenH264() {
        return tb().openH264;
    }
    getEverSpeakingWhileMuted() {
        return e0;
    }
    getSpeakingWhileMuted() {
        return e1;
    }
    supportsScreenSoundshare() {
        return (0, J.isMac)() ? eU.supports(em.AN.SOUNDSHARE) && _().satisfies(null === v.Z || void 0 === v.Z ? void 0 : v.Z.os.release, e_.yG) && tR() : (0, J.isWindows)() ? eU.supports(em.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, J.isLinux)() && eU.supports(em.AN.SCREEN_SOUNDSHARE);
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
    getSupportedSecureFramesProtocolVersion(e) {
        var t;
        let n = eU.getSupportedSecureFramesProtocolVersion(),
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
eE(re, 'displayName', 'MediaEngineStore');
let rt = (r = new re(b.Z, {
    VOICE_CHANNEL_SELECT: nV,
    VOICE_STATE_UPDATES: tQ,
    CONNECTION_OPEN: tY,
    CONNECTION_CLOSED: tz,
    RTC_CONNECTION_STATE: tq,
    AUDIO_SET_TEMPORARY_SELF_MUTE: tX,
    AUDIO_TOGGLE_SELF_MUTE: tJ,
    AUDIO_SET_SELF_MUTE: t$,
    AUDIO_TOGGLE_SELF_DEAF: t1,
    AUDIO_TOGGLE_LOCAL_MUTE: t2,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: t3,
    AUDIO_SET_LOCAL_VOLUME: t5,
    AUDIO_SET_LOCAL_PAN: t7,
    AUDIO_SET_MODE: t8,
    AUDIO_SET_INPUT_VOLUME: t9,
    AUDIO_SET_OUTPUT_VOLUME: ne,
    AUDIO_SET_INPUT_DEVICE: nt,
    AUDIO_SET_OUTPUT_DEVICE: nn,
    AUDIO_SET_ECHO_CANCELLATION: nl,
    AUDIO_SET_SIDECHAIN_COMPRESSION: nc,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nu,
    AUDIO_SET_LOOPBACK: nf,
    AUDIO_SET_NOISE_SUPPRESSION: nh,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nm,
    AUDIO_SET_NOISE_CANCELLATION: ng,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: nv,
    AUDIO_SET_DEBUG_LOGGING: ny,
    MEDIA_ENGINE_SET_VIDEO_HOOK: nO,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: nI,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: nS,
    AUDIO_SET_ATTENUATION: nT,
    AUDIO_SET_QOS: nN,
    MEDIA_ENGINE_DEVICES: no,
    AUDIO_VOLUME_CHANGE: na,
    AUDIO_RESET: nA,
    AUDIO_INPUT_DETECTED: nC,
    AUDIO_SET_SUBSYSTEM: nG,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: nY,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: nK,
    MEDIA_ENGINE_PERMISSION: nW,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: nQ,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nr,
    MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nE,
    MEDIA_ENGINE_INTERACTION_REQUIRED: ni,
    USER_SETTINGS_MODAL_INIT: nX,
    USER_SETTINGS_MODAL_SET_SECTION: nX,
    CERTIFIED_DEVICES_SET: nJ,
    RPC_APP_CONNECTED: nZ,
    RPC_APP_DISCONNECTED: nH,
    OVERLAY_INITIALIZE: tK,
    MEDIA_ENGINE_SET_OPEN_H264: n$,
    MEDIA_ENGINE_SET_HARDWARE_ENCODING: nb,
    APP_STATE_UPDATE: n1,
    SET_CHANNEL_BITRATE: n2,
    SET_VAD_PERMISSION: nR,
    SET_NATIVE_PERMISSION: nP,
    SET_CHANNEL_VIDEO_QUALITY_MODE: n6,
    MEDIA_ENGINE_SET_AEC_DUMP: n0,
    CHANNEL_DELETE: n3,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: n4,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: n5,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: n7,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: n8,
    USER_SETTINGS_PROTO_UPDATE: t0,
    CLIPS_INIT: nz,
    CLIPS_SETTINGS_UPDATE: nq,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: n9,
    VOICE_FILTER_REQUEST_SWITCH: nk,
    VOICE_FILTER_LOOPBACK_TOGGLE: nM,
    VOICE_FILTER_APPLIED: nU,
    VOICE_FILTER_DOWNLOAD_FAILED: nj,
    VOICE_FILTER_APPLY_FAILED: nj
}));
