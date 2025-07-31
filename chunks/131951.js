let r, i, a, o, s, l, c;
(n.d(t, { Z: () => rI }), n(388685), n(953529), n(457542), n(539854), n(642613), n(49124), n(337869));
var u,
    d = n(512722),
    _ = n.n(d),
    f = n(392711),
    p = n.n(f),
    h = n(209739),
    m = n.n(h),
    g = n(404097),
    E = n(442837),
    b = n(46973),
    y = n(433517),
    O = n(846519),
    v = n(570140),
    I = n(579806),
    T = n(887278),
    S = n(547727),
    A = n(435064),
    N = n(779618),
    C = n(710845),
    R = n(535911),
    P = n(458725),
    w = n(353926),
    D = n(646047),
    L = n(594190),
    x = n(502286),
    k = n(883794),
    M = n(822253),
    j = n(177732),
    U = n(355552),
    G = n(294473),
    B = n(706629),
    V = n(166884),
    F = n(585360),
    Z = n(787199),
    H = n(529558),
    Y = n(111672),
    W = n(441167),
    K = n(580930),
    z = n(787517),
    q = n(338336),
    X = n(751571),
    Q = n(311473),
    J = n(266661),
    $ = n(725380),
    ee = n(581883),
    et = n(875527),
    en = n(420439),
    er = n(626135),
    ei = n(12647),
    ea = n(70956),
    eo = n(358085),
    es = n(747268),
    el = n(960048),
    ec = n(998502),
    eu = n(13140),
    ed = n(314897),
    e_ = n(967368),
    ef = n(463395),
    ep = n(592125),
    eh = n(19780),
    em = n(704806),
    eg = n(594174),
    eE = n(631768),
    eb = n(981631),
    ey = n(70722),
    eO = n(761274),
    ev = n(526761),
    eI = n(345655),
    eT = n(65154),
    eS = n(388032);
function eA(e, t, n) {
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
function eN(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                eA(e, t, n[t]);
            }));
    }
    return e;
}
function eC(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function eR(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eC(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eP = new C.Z('MediaEngineStore'),
    ew = 'MediaEngineStore',
    eD = 4,
    eL = 1,
    ex = 1,
    ek = 1,
    eM = 1,
    ej = 0.5,
    eU = {
        left: 1,
        right: 1
    },
    eG = 500,
    eB = 5 * ea.Z.Millis.SECOND,
    eV = -60,
    eF = 100,
    eZ = 2 * ea.Z.Millis.SECOND,
    eH = 0;
function eY() {
    return {
        mode: eb.pM4.VOICE_ACTIVITY,
        modeOptions: {
            threshold: eV,
            autoThreshold: eo.isPlatformEmbedded || __OVERLAY__,
            vadUseKrisp: !0,
            vadKrispActivationThreshold: ej,
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
        inputVolume: eT.Qx,
        outputVolume: eT.Qx,
        inputDeviceId: eT.w5,
        outputDeviceId: eT.w5,
        videoDeviceId: eT.w5,
        qos: !1,
        qosMigrated: !1,
        videoHook: eK.supports(eT.AN.VIDEO_HOOK),
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        openH264: !0,
        h265Enabled: !0,
        vadThrehsoldMigrated: !1,
        aecDumpEnabled: !1,
        sidechainCompression: !1,
        sidechainCompressionSettingVersion: 0,
        sidechainCompressionStrength: 50,
        automaticAudioSubsystem: !0,
        activeInputProfile: null
    };
}
let eW = {
        [eI._.CUSTOM]: {},
        [eI._.VOICE_ISOLATION]: {
            modeOptions: {
                autoThreshold: !0,
                vadUseKrisp: !0
            },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !1
        },
        [eI._.STUDIO]: {
            mode: eb.pM4.VOICE_ACTIVITY,
            modeOptions: {
                threshold: -84,
                autoThreshold: !1,
                vadUseKrisp: !1
            },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0
        }
    },
    eK = (0, b.Mt)((0, b.jj)());
eP.enableNativeLogger(!0);
let ez = {},
    eq = new Set([eT.Yn.DEFAULT]),
    eX = eK.supports(eT.AN.AUTO_ENABLE),
    eQ = !1,
    eJ = eT.Yn.STREAM,
    e$ = performance.now(),
    e0 = { [eT.w5]: t$('No Input Devices') },
    e1 = { [eT.w5]: t$('No Output Devices') },
    e2 = { [eT.w5]: t$('No Video Devices') },
    e3 = !1,
    e4 = !1,
    e5 = !1,
    e6 = !1,
    e8 = !1,
    e7 = eT.Av,
    e9 = !1,
    te = !1,
    tt = !1,
    tn = new O.V7(),
    tr = !1,
    ti = !1,
    ta = null,
    to = !1,
    ts = !1,
    tl = !1,
    tc = !1,
    tu = !1,
    td = [],
    t_ = !1,
    tf = null,
    tp = null,
    th = null,
    tm = null,
    tg = null,
    tE = !1,
    tb = !1,
    ty = !1;
(X.Z.hasPermission(eO.Eu.AUDIO, { showAuthorizationError: !1 }), X.Z.hasPermission(eO.Eu.CAMERA, { showAuthorizationError: !1 }));
let tO = !1,
    tv = new Set(),
    tI = tO,
    tT = new Set(),
    tS = {},
    tA = null,
    tN = !0,
    tC = !1;
function tR() {
    var e, t;
    return null != (t = null == (e = eg.default.getCurrentUser()) ? void 0 : e.isStaff()) && t ? 'always' : es.Z === g.R.CANARY ? 'permittedDevicesOnly' : 'never';
}
function tP() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT,
        t = ez[e];
    return (null == t && ((t = eY()), (ez[e] = t)), t);
}
function tw() {
    var e, t, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT,
        i = tP(r),
        a = eW[null != (e = i.activeInputProfile) ? e : eI._.CUSTOM];
    return eR(eN({}, i, a), { modeOptions: eN({}, null != (t = i.modeOptions) ? t : {}, null != (n = a.modeOptions) ? n : {}) });
}
function tD(e) {
    var t;
    let n = tw(e.context);
    e.setInputMode(n.mode, {
        vadThreshold: n.modeOptions.threshold,
        vadAutoThreshold: n.modeOptions.autoThreshold,
        vadUseKrisp: n.modeOptions.vadUseKrisp && nQ() && !J.M.getCurrentConfig({ location: 'setInputMode' }).disableKrispVAD,
        vadKrispActivationThreshold: null != (t = n.modeOptions.vadKrispActivationThreshold) ? t : 0.5,
        vadLeading: n.modeOptions.vadLeading,
        vadTrailing: n.modeOptions.vadTrailing,
        pttReleaseDelay: n.modeOptions.delay
    });
}
function tL(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.Qx;
    return p().clamp(e, 0, t);
}
function tx(e) {
    let t = tw(e.context),
        n = !eX || t.mute || t.deaf;
    (e.context === eT.Yn.DEFAULT ? (n = n || e3 || e4 || e5 || !X.Z.didHavePermission(eO.Eu.AUDIO)) : e.context === eT.Yn.STREAM && (n = !0), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eT.Yn.DEFAULT && S.Z.updateNativeMute());
}
function tk(e) {
    e !== eJ && (null != a && eK.setGoLiveSource(null, eJ), (eJ = e));
}
function tM() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e8,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        s = a;
    if (((null == s ? void 0 : s.desktopSource) != null && s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? void 0 : e.id) && (null != s.desktopSource.soundshareId && (0, eo.isWindows)() && T.pn(s.desktopSource.soundshareId), eK.setGoLiveSource(null, eJ)), (null == s ? void 0 : s.cameraSource) != null && (s.cameraSource.videoDeviceGuid !== (null == o || null == (t = o.cameraSource) ? void 0 : t.videoDeviceGuid) || s.cameraSource.audioDeviceGuid !== (null == o || null == (n = o.cameraSource) ? void 0 : n.audioDeviceGuid)) && eK.setGoLiveSource(null, eJ), (e8 || i) && ((e7 = (e8 = i) ? t1(e2, tw().videoDeviceId) : eT.Av), eK.setVideoInputDevice(e7)), (a = o), null != o)) {
        let e = {
            resolution: o.quality.resolution,
            frameRate: o.quality.frameRate
        };
        if (null != o.desktopSource) {
            let t = tR(),
                n = tw().videoHook,
                i = tF(),
                a = i ? (tZ() && (0, z.R)('MediaEngineStore_updateVideo').enabled ? ey.zj : ey.ZM) : 0;
            eK.setGoLiveSource(
                {
                    desktopDescription: {
                        id: o.desktopSource.id,
                        soundshareId: o.desktopSource.soundshareId,
                        useVideoHook: n,
                        useGraphicsCapture: i,
                        useGraphicsCaptureApiLevel: a,
                        useLoopback: r.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: tH(),
                        videoHookStaleFrameTimeoutMs: eG,
                        graphicsCaptureStaleFrameTimeoutMs: eB,
                        hdrCaptureMode: t
                    },
                    quality: e
                },
                eJ
            );
        }
        null != o.cameraSource &&
            eK.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: o.cameraSource.audioDeviceGuid
                    },
                    quality: e
                },
                eJ
            );
    }
}
function tj(e) {
    switch (e) {
        case eT.H3.CPU_OVERUSE:
            return P.Nk.NoiseCancellerCpuOveruse;
        case eT.H3.FAILED:
            return P.Nk.NoiseCancellerFailed;
        case eT.H3.VAD_CPU_OVERUSE:
            return P.Nk.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function tU(e) {
    let t = k.Z.getCurrentConfig(
        { location: 'getAutomaticGainControlConfig' },
        {
            autoTrackExposure: !0,
            disable: !e
        }
    );
    return eN({ enabled: e }, t);
}
function tG(e, t) {
    e.setAutomaticGainControl(tU(t));
}
function tB(e) {
    let t = tw(),
        n = t.inputDeviceId;
    if ((e.setEchoCancellation(ef.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(ef.Z.hasNoiseSuppression(n) || t.noiseSuppression), tG(e, ef.Z.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), e.setVoiceFilterId(tf), (0, eo.isWeb)())) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function tV() {
    (eK.on(b.aB.Connection, (e) => {
        var t, n;
        (tD(e), tx(e), tB(e));
        let i = tw();
        (e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers), e.setQoS(i.qos), e.setExperimentalEncoders(i.experimentalEncoders), e.setHardwareH264(null == (t = i.hardwareEncoding) || t), e.setSoftwareH264(null == (n = i.openH264) || n));
        let o = eh.Z.getGuildId(),
            { muteBeforeProcessing: s, pttBeforeProcessing: l, skipEncode: c } = (null != o ? B.Z : G.Z).getCurrentConfig(eN({ location: 'setupMediaEngine' }, null != o && { guildId: o }), { autoTrackExposure: !0 });
        (s && e.setExperimentFlag(eT.V8.MUTE_BEFORE_PROCESSING, !0),
            l && e.setExperimentFlag(eT.V8.PTT_BEFORE_PROCESSING, !0),
            c && e.setExperimentFlag(eT.V8.SKIP_ENCODE, !0),
            null != o &&
                Z.Z.getCurrentConfig(
                    {
                        location: 'setupMediaEngine',
                        guildId: o
                    },
                    { autoTrackExposure: !0 }
                ).enabled &&
                e.setExperimentFlag(eT.V8.SIGNAL_RED, !0));
        let u = !1,
            d = !0;
        if ((e.setExperimentFlag(eT.V8.RESET_DECODER_ON_ERRORS, !0), u && e.setExperimentFlag(eT.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0), d && e.setExperimentFlag(eT.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0), e.context === eT.Yn.STREAM)) {
            let { simulcastEnabled: t, lqStreamBitrate: n } = V.Z.getConfig();
            e.configureGoLiveSimulcast(t, n);
            let r = (0, F.k)({
                location: 'setupMediaEngine',
                autoTrackExposure: !0
            }).enabled;
            e.setGoLiveUsePixelCounts(r);
        }
        ((0, eo.isWindows)() ? ((null == tA ? void 0 : tA.startsWith('NVIDIA')) || (null == tA ? void 0 : tA.startsWith('AMD')) ? e.setExperimentFlag(eT.V8.SIGNAL_AV1, !0) : e.setExperimentFlag(eT.V8.SIGNAL_AV1_DECODE, !0)) : ((0, eo.isMac)() || (0, eo.isLinux)()) && e.setExperimentFlag(eT.V8.SIGNAL_AV1_DECODE, !0), (0, eo.isWindows)() && e.setExperimentFlag(eT.V8.SIGNAL_AV1_HARDWARE_DECODE, !0), eK.setHasFullbandPerformance((0, R.Z)()));
        let _ = (0, U.D)('setupMediaEngine').enabled;
        if ((e.setRemoteAudioHistory(1000 * !!_), (0, N.Z)(r))) {
            let t = A.Z.getSettings();
            e.setExperimentFlag(eT.V8.STREAMER_CLIP, t.clipsEnabled);
            let { enableViewerClipping: n } = W.Z.getCurrentConfig({ location: 'f627ab_15' }, { autoTrackExposure: !1 });
            (e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eT.ux));
        }
        for (let t of ((i = tw(e.context)), e.setPostponeDecodeLevel(eF), Object.keys(i.localMutes))) t !== ed.default.getId() && e.setLocalMute(t, i.localMutes[t]);
        for (let t of Object.keys(i.localVolumes)) t !== ed.default.getId() && e.setLocalVolume(t, i.localVolumes[t]);
        for (let t of Object.keys(i.localPans)) {
            let n = i.localPans[t];
            e.setLocalPan(t, n.left, n.right);
        }
        for (let t of Object.keys(i.disabledLocalVideos)) e.setLocalVideoDisabled(t, i.disabledLocalVideos[t]);
        (e.on(b.Sh.Speaking, (t, n) => {
            v.Z.dispatch({
                type: 'SPEAKING',
                context: e.context,
                userId: t,
                speakingFlags: n
            });
        }),
            e.context === eT.Yn.DEFAULT &&
                ((te = !1),
                (tt = !1),
                e.on(b.Sh.SpeakingWhileMuted, () => {
                    ((te = !0),
                        (tt = !0),
                        r.emitChange(),
                        tn.stop(),
                        tn.start(eZ, () => {
                            ((tt = !1), r.emitChange());
                        }));
                })),
            e.on(b.Sh.DesktopSourceEnd, (t, n) => {
                v.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                    settings: { context: e.context },
                    endReason: t,
                    errorCode: n
                });
            }),
            e.on(b.Sh.InteractionRequired, (e) => {
                v.Z.dispatch({
                    type: 'MEDIA_ENGINE_INTERACTION_REQUIRED',
                    required: e
                });
            }),
            e.on(b.Sh.VideoHookInitialize, (e, t, n, r, i, o) => {
                (null == a ? void 0 : a.desktopSource) != null &&
                    er.default.track(
                        eb.rMx.VIDEOHOOK_INITIALIZED,
                        eN(
                            {
                                backend: e,
                                format: t,
                                framebuffer_format: n,
                                sample_count: r,
                                success: i,
                                reinitialization: o
                            },
                            (0, x.Z)(null == a ? void 0 : a.desktopSource)
                        )
                    );
            }),
            e.on(b.Sh.NoiseCancellationError, (e) => {
                (eP.warn('noisecancellererror event: '.concat(e)),
                    (0, P.kr)({
                        type: P.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tj(e)
                    }),
                    (tE = !0),
                    er.default.track(eb.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
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
                    }));
            }),
            e.on(b.Sh.VoiceActivityDetectorError, (e) => {
                (eP.warn('voiceactivitydetectorerror event: '.concat(e)),
                    (0, P.kr)({
                        type: P.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tj(e)
                    }),
                    er.default.track(eb.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    v.Z.dispatch({
                        type: 'AUDIO_SET_MODE',
                        context: eT.Yn.DEFAULT,
                        mode: eb.pM4.VOICE_ACTIVITY,
                        options: eR(eN({}, tw(eT.Yn.DEFAULT).modeOptions), { vadUseKrisp: !1 })
                    }),
                    v.Z.dispatch({
                        type: 'MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR',
                        code: e
                    }));
            }),
            e.on(b.Sh.SdpError, (e, t, n, r) => {
                er.default.track(eb.rMx.SDP_ERROR, {
                    operation: e,
                    error: t,
                    type: n,
                    sdp: r
                });
            }),
            e.on(b.Sh.VideoState, (t) => {
                v.Z.dispatch({
                    type: 'MEDIA_ENGINE_VIDEO_STATE_CHANGED',
                    videoState: t,
                    context: e.context
                });
            }),
            e.setBitRate(e_.Z.bitrate),
            e.applyVideoQualityMode(eE.Z.mode));
    }),
        eK.on(b.aB.DeviceChange, (e, t, n) => {
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_DEVICES',
                inputDevices: e,
                outputDevices: t,
                videoDevices: n
            });
        }),
        eK.on(b.aB.VolumeChange, (e, t) => {
            v.Z.dispatch({
                type: 'AUDIO_VOLUME_CHANGE',
                inputVolume: e,
                outputVolume: t
            });
        }),
        eK.on(b.aB.DesktopSourceEnd, (e, t) => {
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                settings: null,
                endReason: e,
                errorCode: t
            });
        }),
        eK.on(b.aB.AudioPermission, (e) => {
            ((ty = !0),
                v.Z.dispatch({
                    type: 'MEDIA_ENGINE_PERMISSION',
                    kind: 'audio',
                    granted: e
                }));
        }),
        eK.on(b.aB.VideoPermission, (e) => {
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_PERMISSION',
                kind: 'video',
                granted: e
            });
        }),
        eK.on(b.aB.WatchdogTimeout, async () => {
            let e;
            try {
                await ei.Z.submitLiveCrashReport({ message: { message: 'Voice Watchdog Timeout' } });
            } catch (t) {
                'number' == typeof t.status && (e = t.status);
            }
            (eP.warn('Watchdog timeout, report submission status: '.concat(null != e ? e : 200)), er.default.track(eb.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e }));
        }),
        eK.on(b.aB.VideoInputInitialized, (e) => {
            er.default.track(eb.rMx.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * ea.Z.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: eh.Z.getMediaSessionId(),
                rtc_connection_id: eh.Z.getRTCConnectionId()
            });
        }),
        eK.on(b.aB.AudioInputInitialized, (e) => {
            er.default.track(eb.rMx.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * ea.Z.Millis.SECOND),
                rtc_connection_id: eh.Z.getRTCConnectionId()
            });
        }),
        eK.on(b.aB.ClipsRecordingRestartNeeded, () => {
            v.Z.dispatch({ type: 'CLIPS_RESTART' });
        }),
        eK.on(b.aB.ClipsInitFailure, (e, t) => {
            v.Z.wait(() => {
                v.Z.dispatch({
                    type: 'CLIPS_INIT_FAILURE',
                    errMsg: e,
                    applicationName: t
                });
            });
        }),
        eK.on(b.aB.ClipsRecordingEnded, (e, t) => {
            var n, r;
            (null == o || null == (n = o.desktopSource) ? void 0 : n.id) === e && (null != t && (null == a || null == (r = a.desktopSource) ? void 0 : r.soundshareId) !== t && T.pn(t), (o = null));
        }),
        eK.on(b.aB.NativeScreenSharePickerUpdate, (e, t) => {
            v.Z.dispatch({
                type: 'NATIVE_SCREEN_SHARE_PICKER_UPDATE',
                existing: e,
                content: t
            });
        }),
        eK.on(b.aB.NativeScreenSharePickerCancel, (e) => {
            v.Z.dispatch({
                type: 'NATIVE_SCREEN_SHARE_PICKER_CANCEL',
                existing: e
            });
        }),
        eK.on(b.aB.NativeScreenSharePickerError, (e) => {
            v.Z.dispatch({
                type: 'NATIVE_SCREEN_SHARE_PICKER_ERROR',
                error: e
            });
        }),
        eK.on(b.aB.AudioDeviceModuleError, (e, t, n) => {
            er.default.track(eb.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                audio_device_module: e,
                code: t,
                device_name: n
            });
        }),
        eK.on(b.aB.VideoCodecError, (e) => {
            let t = 'encode' === e.mode ? P.u.VIDEO_ENCODE_ERROR : P.u.VIDEO_DECODE_ERROR,
                n = {
                    videoCodec: e.codecStandard,
                    errorMessage: e.message
                };
            (0, P.kr)(t === P.u.VIDEO_ENCODE_ERROR ? eR(eN({ type: t }, n), { videoEncoder: e.implName }) : eR(eN({ type: t }, n), { videoDecoder: e.implName }));
        }),
        eK.on(b.aB.ConnectionStats, (e) => {
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_CONNECTION_STATS',
                connectionStats: e.map((e) => {
                    let { stats: t, connection: n } = e;
                    return {
                        stats: t,
                        mediaEngineConnectionId: n.mediaEngineConnectionId,
                        version: eH++,
                        context: n.context
                    };
                })
            });
        }),
        eK.on(b.aB.VoiceQueueMetrics, (e) => {
            let t = rv(e);
            null !== t && er.default.track(eb.rMx.VOICE_QUEUE_METRICS, t);
        }),
        eK.setOnVideoContainerResized((e, t, n) => {
            v.Z.wait(() =>
                v.Z.dispatch({
                    type: 'VIDEO_SIZE_UPDATE',
                    streamId: e,
                    width: t,
                    height: n
                })
            );
        }),
        tK.reset(),
        (0, em.q)().then((e) => {
            null != e && (tA = e.gpu_brand);
        }));
}
function tF() {
    return (0, eo.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, ey.c5);
}
function tZ() {
    return (0, eo.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, ey.sN);
}
function tH() {
    return (0, eo.isMac)() && eK.supports(eT.AN.SCREEN_CAPTURE_KIT) && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, ey.C7);
}
function tY() {
    return (0, eo.isWindows)() && eK.supports(eT.AN.AUTOMATIC_AUDIO_SUBSYSTEM) && eK.supports(eT.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH);
}
function tW() {
    return eK.supports(eT.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
let tK = new (class {
    start() {
        this.started || ((this.started = !0), eK.on(b.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            eK.removeListener(b.aB.Silence, this.handleSilence),
            v.Z.dispatch({
                type: 'AUDIO_INPUT_DETECTED',
                inputDetected: null
            }));
    }
    update() {
        let e = tw();
        !to && eh.Z.getState() === eb.hes.RTC_CONNECTED && e.mode === eb.pM4.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop();
    }
    reset() {
        (this.stop(), this.update());
    }
    constructor() {
        (eA(this, 'stateChangeTimeout', void 0),
            eA(this, 'noVoiceTimeout', 5000),
            eA(this, 'voiceTimeout', 1500),
            eA(this, 'started', !1),
            eA(this, 'handleSilence', (e) => {
                let t = !e;
                (null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout),
                    (this.stateChangeTimeout = setTimeout(
                        () => {
                            ((this.stateChangeTimeout = null),
                                this.started &&
                                    (v.Z.dispatch({
                                        type: 'AUDIO_INPUT_DETECTED',
                                        inputDetected: t
                                    }),
                                    e && (ts = !0)));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout
                    )));
            }));
    }
})();
function tz() {
    var e;
    let t = y.K.get('audio');
    (null != t && (y.K.set(ew, { [eT.Yn.DEFAULT]: t }), y.K.remove('audio')),
        (ez = null != (e = y.K.get(ew)) ? e : {}),
        p().each(ez, (e) => {
            if ((p().defaultsDeep(e, eY()), null != e.modeOptions && 'string' == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, eu.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== eD && ((e.vadUseKrispSettingVersion = eD), (e.modeOptions.vadUseKrisp = !0)), e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)), !e.vadThrehsoldMigrated)) {
                var t;
                ((e.vadThrehsoldMigrated = !0), (null == (t = e.modeOptions) ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = eV));
            }
            ((0, eo.isWeb)() ? e.ncUseKrispjsSettingVersion !== ex && ((e.ncUseKrispjsSettingVersion = ex), (e.noiseSuppression = !1), (e.noiseCancellation = !0)) : e.ncUseKrispSettingVersion !== eL && ((e.ncUseKrispSettingVersion = eL), (e.noiseSuppression = !1), (e.noiseCancellation = !0)), e.hardwareEnabledVersion !== ek && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = ek)), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264));
        }),
        tQ());
}
function tq(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = tP(t);
    return (Object.assign(r, e), !__OVERLAY__ && n && y.K.set(ew, ez), r);
}
function tX() {
    (y.K.remove(ew), location.reload());
}
function tQ() {
    var e, t, n;
    let r = tw();
    (eK.setAudioInputDevice(r.inputDeviceId), eK.setAudioOutputDevice(r.outputDeviceId), tM(), eK.setInputVolume(r.inputVolume), eK.setOutputVolume(r.outputVolume), eK.setH264Enabled(null == (e = r.hardwareEncoding) || e || r.openH264), eK.setAv1Enabled(null == (t = r.hardwareEncoding) || t), eK.setH265Enabled(null == (n = r.hardwareEncoding) || n), eK.setAecDump(r.aecDumpEnabled), eK.setSidechainCompression(r.sidechainCompression), eK.setSidechainCompressionStrength(r.sidechainCompressionStrength), eK.setAudioInputBypassSystemProcessing(r.bypassSystemInputProcessing));
}
function tJ() {
    eX ||
        eK.enable().then(() =>
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
                enabled: !0,
                unmute: !1
            })
        );
}
function t$(e) {
    return {
        id: eT.w5,
        index: 0,
        name: e,
        disabled: !0,
        hardwareId: void 0,
        containerId: void 0
    };
}
function t0(e, t) {
    if (0 === e.length) {
        let e = t$(t);
        return { [e.id]: e };
    }
    return p()(e)
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
function t1(e, t) {
    var n;
    let r = null != (n = e[t]) ? n : p()(e).values().first();
    return null != r ? r.id : t;
}
function t2(e) {
    let t = e0;
    if (((e0 = t0(e, eS.intl.string(eS.t['/QIjDA']))), !p().isEqual(e0, t))) {
        let e = tw(),
            t = t1(e0, e.inputDeviceId);
        eK.setAudioInputDevice(t);
    }
}
function t3(e) {
    let t = e1;
    if (((e1 = t0(e, eS.intl.string(eS.t.xlUg0t))), !p().isEqual(e1, t))) {
        let e = tw(),
            t = t1(e1, e.outputDeviceId);
        eK.setAudioOutputDevice(t);
    }
}
function t4(e) {
    ti = e.length > 0;
    let t = e2;
    if (((e2 = t0(e, eS.intl.string(eS.t.WKWARU))), e8 && !p().isEqual(e2, t))) {
        var n;
        let e = void 0 !== e2[e7],
            r = e7 === eT.w5 && (null == (n = t[eT.w5]) ? void 0 : n.disabled);
        tM(e || r);
    }
}
function t5() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        r =
            null != (e = ee.Z.settings.audioContextSettings)
                ? e
                : {
                      user: {},
                      stream: {}
                  };
    for (let e of Object.keys(r)) {
        let i = e === ev.u0.USER ? eT.Yn.DEFAULT : eT.Yn.STREAM,
            a = i === eT.Yn.STREAM ? eT.Yh : eT.Qx,
            o = null != (t = r[e]) ? t : {},
            { localMutes: s, localVolumes: l } = tw(i);
        for (let [e, t] of Object.entries(o))
            null == (0, $.Ky)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== a ? (l[e] = t.volume) : delete l[e],
                eK.eachConnection((n) => {
                    (n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted));
                }, i));
        if (n)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == o[e] &&
                    (delete s[e],
                    delete l[e],
                    eK.eachConnection((t) => {
                        (t.setLocalVolume(e, a), t.setLocalMute(e, !1));
                    }, i));
        tq(
            {
                localMutes: s,
                localVolumes: l
            },
            i
        );
    }
}
function t6(e) {
    if (null == r)
        return (
            eP.info('Error: trying to get soundshare id before MediaEngineStore is instantiated.'),
            {
                soundshareId: null,
                soundshareSession: ''
            }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : ei.Z.getAudioPid(e),
            n = '';
        return (
            null != t && (n = ei.Z.generateSessionFromPid(t)),
            {
                soundshareId: t,
                soundshareSession: n
            }
        );
    }
}
function t8(e, t) {
    (0, eo.isWindows)() &&
        T.YT(e, { soundshare_session: t }).then((t) => {
            null == t ||
                L.ZP.shouldContinueWithoutElevatedProcessForPID(e) ||
                v.Z.wait(() => {
                    v.Z.dispatch({
                        type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
                        errorMessage: t
                    });
                });
        });
}
function t7(e) {
    ((i = e.sessionId),
        (e3 = !1),
        (e6 = !1),
        (0, eo.isWeb)() ||
            (Y.Z.subscribe({ location: 'handleConnectionOpen' }, (e) => {
                let t = tw();
                !e.sidechainAvailable && t.sidechainCompression ? (tq({ sidechainCompressionSettingVersion: 0 }), nC(!1)) : e.sidechainAvailable && t.sidechainCompressionSettingVersion < eM && (tq({ sidechainCompressionSettingVersion: eM }), nC(e.sidechainEnabled));
            }),
            nP()));
    let t = tw();
    if ((tY() && (tW() ? n8(eT.iA.AUTOMATIC) : t.automaticAudioSubsystem && n7()), eK.supports(eT.AN.OFFLOAD_ADM_CONTROLS))) {
        let e = !1;
        ((0, eo.isDesktop)() ? (e = (0, M.E)({ location: 'handleConnectionOpen' }).enabled) : ((0, eo.isIOS)() || (0, eo.isAndroid)()) && (e = (0, j.W)({ location: 'handleConnectionOpen' }).enabled), eK.setOffloadAdmControls(e));
    }
    ((0, et.wt)({
        location: 'MediaEngineStore',
        autoTrackExposure: !1
    }) &&
        null !== t.mostRecentlyRequestedVoiceFilter &&
        (0, eo.isDesktop)() &&
        (en.Z.getLastInitAttemptMayHaveCrashed()
            ? (v.Z.dispatch({
                  type: 'AUDIO_SET_SELF_MUTE',
                  mute: !0,
                  context: eT.Yn.DEFAULT,
                  playSoundEffect: !0
              }),
              tq({ mostRecentlyRequestedVoiceFilter: null }))
            : n(358820).r5()),
        t5());
}
function t9(e) {
    let { mediaEngineState: t } = e;
    ((ez = t.settingsByContext), (e0 = t.inputDevices), (e1 = t.outputDevices), (tS = t.appSupported), (tu = t.krispModuleLoaded), (s = t.krispVersion), (eJ = t.goLiveContext));
}
function ne() {
    i = null;
}
function nt(e) {
    switch (e.state) {
        case eb.hes.CONNECTING:
            tJ();
            break;
        case eb.hes.RTC_CONNECTING:
            ((to = !1), (ts = !1));
            break;
        case eb.hes.RTC_CONNECTED:
            tM();
            break;
        case eb.hes.DISCONNECTED:
            (nu(), nd());
    }
    tK.update();
}
function nn(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => (i === t.sessionId ? ((e3 = t.mute || t.suppress), (e6 = t.deaf), eK.eachConnection(tx), tM((null == t.guildId || null == t.channelId || null == tg || tg === t.channelId) && e8), (tg = t.channelId), !0) : (__OVERLAY__ || t.userId !== ed.default.getId() || null != eh.Z.getChannelId() || tM(!1, null), e)), !1);
}
function nr(e) {
    let { mute: t } = e;
    ((e4 = t), eK.eachConnection(tx));
}
function ni(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = tw(t);
    if (t === eT.Yn.DEFAULT && (X.Z.requestPermission(eO.Eu.AUDIO), e5)) return !1;
    ((r = !i && !r) || (i = !1),
        n || (e9 = !0),
        tq(
            {
                mute: r,
                deaf: i
            },
            t
        ),
        eK.eachConnection(tx));
}
function na(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    (tq({ mute: n }, t), r || (e9 = !0), eK.eachConnection(tx));
}
function no(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r
    } = e;
    if (t !== ev.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    t5(!0);
}
function ns(e) {
    let { context: t } = e;
    (tq({ deaf: !tw(t).deaf }, t), eK.eachConnection(tx));
}
function nl(e) {
    let { context: t, userId: n } = e;
    if (n === ed.default.getId()) return;
    let { localMutes: r } = tw(t);
    (r[n] ? delete r[n] : (r[n] = !0), tq({ localMutes: r }, t), eK.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t));
}
function nc(e) {
    var t, n, r, i, a, o, s;
    let { context: l, userId: c, videoToggleState: u, persist: d, isAutomatic: f } = e;
    _()(!(d && f), 'These are not allowed to both be true.');
    let p = u === eb.ZUi.DISABLED,
        { disabledLocalVideos: h } = tw(l),
        m = null != (t = h[c]) && t,
        g = tv.has(c),
        E = u === eb.ZUi.AUTO_ENABLED || u === eb.ZUi.MANUAL_ENABLED;
    (eP.info('disableVideo='.concat(p, ' currentlyDisabled=').concat(m, ' currentlyAutoDisabled=').concat(g, ', isVideoShown=').concat(E)), _()(!(g && !m), 'If you are auto-disabled, then you are also disabled.'));
    let b = p !== m,
        y = l === eT.Yn.DEFAULT,
        O = f && b && y,
        v = d && b && y;
    eP.info('changed='.concat(b, ' isDefaultContext=').concat(y, ' isUpdateCausedByVideoHealthManager=').concat(O, ' isManualToggleByUser=').concat(v));
    let { videoToggleStateMap: I } = tw(l);
    if ((I[c] === eb.ZUi.AUTO_PROBING && u === eb.ZUi.AUTO_ENABLED && (0, q.Z)(c, p ? eT.fC.AUTO_DISABLE : eT.fC.AUTO_ENABLE, E), (I[c] = u), tq({ videoToggleStateMap: I }, l, d), u === eb.ZUi.AUTO_PROBING ? null == (n = eh.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, !0) : null == (r = eh.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, !1), tI || (eP.info('isAutoDisableAllowed='.concat(tI, ' - disabling VideoHealthManager')), null == (a = eh.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()), O)) {
        if ((!p && !g) || (p && !tI)) return;
        ((0, q.Z)(c, p ? eT.fC.AUTO_DISABLE : eT.fC.AUTO_ENABLE, E), p ? tv.add(c) : tv.delete(c));
    } else v && (g && !p ? (eP.info('disallowing auto-disable for this session because of manual override by user'), (tI = !1), null == (s = eh.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(), (0, q.Z)(c, eT.fC.MANUAL_REENABLE, E)) : (0, q.Z)(c, p ? eT.fC.MANUAL_DISABLE : eT.fC.MANUAL_ENABLE, E));
    (y && !p && tv.delete(c),
        p ? (h[c] = !0) : delete h[c],
        tq({ disabledLocalVideos: h }, l, d),
        eK.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(c, null != (t = h[c]) && t);
        }, l));
}
function nu() {
    if (0 === tv.size) return;
    let e = eT.Yn.DEFAULT,
        { disabledLocalVideos: t } = tw(e);
    (tv.forEach((n) => {
        (_()(t[n], 'If you are auto-disabled, then you are also disabled.'), delete t[n], eK.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e));
    }),
        tv.clear(),
        tq({ disabledLocalVideos: t }, e, !1));
}
function nd() {
    let e = eT.Yn.DEFAULT,
        { videoToggleStateMap: t } = tw(e);
    for (let [e, n] of Object.entries(t)) n === eb.ZUi.AUTO_PROBING && delete t[e];
    tq({ videoToggleStateMap: t }, e, !1);
}
function n_(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === ed.default.getId()) return;
    let i = t === eT.Yn.STREAM ? eT.Yh : eT.Qx,
        { localVolumes: a } = tw(t);
    (r === i ? delete a[n] : (a[n] = r), tq({ localVolumes: a }, t), eK.eachConnection((e) => e.setLocalVolume(n, r), t));
}
function nf(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: a } = tw(t);
    ((a[n] = {
        left: r,
        right: i
    }),
        tq({ localPans: a }, t),
        eK.eachConnection((e) => e.setLocalPan(n, r, i), t));
}
function np(e) {
    let { context: t, mode: n, options: r } = e;
    (tq(
        {
            mode: n,
            modeOptions: r
        },
        t
    ),
        eK.eachConnection(tD),
        tK.update());
}
function nh(e) {
    let { volume: t } = e;
    (tq({ inputVolume: tL(t) }), eK.setInputVolume(t));
}
function nm(e) {
    let { volume: t } = e;
    (tq({ outputVolume: t }), eK.setOutputVolume(t));
}
function ng(e) {
    let { id: t } = e;
    ((t = t1(e0, t)), (e$ = performance.now()), tq({ inputDeviceId: t }), eK.setAudioInputDevice(t));
}
function nE(e) {
    let { id: t } = e;
    (tq({ outputDeviceId: (t = t1(e1, t)) }), eK.setAudioOutputDevice(t));
}
function nb(e) {
    let { id: t } = e;
    (tq({ videoDeviceId: (t = t1(e2, t)) }), tM());
}
function ny(e) {
    let { inputProfile: t } = e,
        n = tq({ activeInputProfile: t });
    (eK.eachConnection((e) => {
        (tD(e), tG(e, n.automaticGainControl), e.setEchoCancellation(n.echoCancellation), e.setExperimentalEncoders(n.experimentalEncoders), e.setNoiseCancellation(n.noiseCancellation), e.setNoiseSuppression(n.noiseSuppression));
    }),
        eK.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        tK.update(),
        nw());
}
function nO(e) {
    return eQ !== e.required && ((eQ = e.required), e.required || eK.interact(), !0);
}
function nv(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    (t2(t), t3(n), t4(r));
}
function nI(e) {
    let { inputVolume: t, outputVolume: n } = e;
    tq({
        inputVolume: tL(t),
        outputVolume: n
    });
}
function nT(e) {
    var t;
    let n = tw(),
        r = eK.getAudioSubsystem(),
        i = eK.getAudioLayer(),
        a = t1(e0, n.inputDeviceId),
        o = null == (t = e0[a]) ? void 0 : t.name;
    er.default.track(eb.rMx.VOICE_PROCESSING, {
        echo_cancellation: n.echoCancellation,
        noise_cancellation: n.noiseCancellation,
        noise_suppression: n.noiseSuppression,
        automatic_gain_control: n.automaticGainControl,
        location: e,
        bypass_system_input_processing: n.bypassSystemInputProcessing,
        audio_subsystem: r,
        audio_layer: i,
        input_device: o
    });
}
function nS(e) {
    let t = tq({ echoCancellation: e.enabled });
    (eK.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nw(), nT(e.location));
}
function nA(e) {
    nC(e.enabled);
}
function nN(e) {
    let t = tq({ sidechainCompressionStrength: e.strength });
    eK.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function nC(e) {
    let t = tq({ sidechainCompression: e });
    eK.setSidechainCompression(t.sidechainCompression);
}
function nR(e) {
    let { enabled: t, loopbackReason: n } = e;
    return (t ? tT.add(n) : tT.delete(n), nP(), nw());
}
function nP() {
    let { voiceFiltersPreProcessMute: e } = K.Z.getCurrentConfig({ location: 'setMaybePreprocessMute' }, { autoTrackExposure: !0 }),
        t = e && !tT.has('voice_filter_preview') && !tT.has('mic_test');
    eK.setMaybePreprocessMute(t);
}
function nw() {
    let e = tw(),
        t = tT.size > 0,
        n = e.inputDeviceId,
        r = ef.Z.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        a = ef.Z.hasNoiseSuppression(n) || e.noiseSuppression,
        o = tU(ef.Z.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation,
        l = null !== tf,
        c = tT.has('voice_filter') && 1 === tT.size;
    eK.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: a,
        automaticGainControlConfig: o,
        noiseCancellation: s,
        voiceFilters: l,
        loopbackUseAudioMode: c
    });
}
function nD(e) {
    let t = tq({ noiseSuppression: e.enabled });
    (eK.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nw(), nT(e.location));
}
function nL(e) {
    let t = tq({ automaticGainControl: e.enabled });
    (eK.eachConnection((e) => tG(e, t.automaticGainControl)), nw(), nT(e.location));
}
function nx(e) {
    let t = tq({ noiseCancellation: e.enabled });
    (eK.eachConnection((e) => e.setNoiseCancellation(t.noiseCancellation)), nw(), nT(e.location));
}
function nk(e) {
    (Q.Z.setKrispModelOverride(e.model), (c = e.model), nw());
}
function nM(e) {
    var t;
    (0, eo.isWeb)() || ((t_ = e.enabled), null == (t = eK.setNoiseCancellationEnableStats) || t.call(eK, e.enabled));
}
function nj(e) {
    let t = tq({ experimentalEncoders: e.enabled });
    eK.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
}
function nU(e) {
    var t, n;
    let { enabled: r } = e,
        i = tq({ hardwareEncoding: r });
    (eK.eachConnection((e) => {
        var t;
        return e.setHardwareH264(null == (t = i.hardwareEncoding) || t);
    }),
        eK.setH264Enabled(i.hardwareEncoding || i.openH264),
        eK.setAv1Enabled(null == (t = i.hardwareEncoding) || t),
        eK.setH265Enabled(null == (n = i.hardwareEncoding) || n));
}
function nG(e) {
    (tq({ silenceWarning: e.enabled }), tK.update());
}
function nB(e) {
    eK.setDebugLogging(e.enabled);
}
function nV(e) {
    let { level: t } = e;
    ((l = t), Q.Z.setKrispSuppressionLevel(t));
}
function nF(e) {
    tq({ videoHook: e.enabled });
}
function nZ(e) {
    tq({ experimentalSoundshare2: e.enabled });
}
function nH(e) {
    let { enabled: t } = e;
    tq({ useSystemScreensharePicker: t });
}
function nY(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = tq({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r
        });
    eK.eachConnection((e) => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers));
}
function nW(e) {
    let { enabled: t } = e;
    (tq({ qos: t }), eK.eachConnection((e) => e.setQoS(t)));
}
function nK() {
    tX();
}
function nz(e) {
    let { inputDetected: t } = e;
    ((ta = t), !to && ta && ((to = !0), tK.update()));
}
function nq(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === e5) return !1;
    ((e5 = n), eK.eachConnection(tx));
}
function nX(e) {
    let { state: t, permissionType: n } = e,
        r = t === eO.PQ.ACCEPTED;
    switch (n) {
        case eO.Eu.AUDIO:
            ((ty = !0), eK.eachConnection(tx));
            break;
        case eO.Eu.CAMERA:
            !r && e8 && tM(!1);
            break;
        default:
            return !1;
    }
}
function nQ() {
    return tu || !1;
}
async function nJ() {
    try {
        var e, t, n, i;
        await ec.ZP.ensureModule('discord_krisp');
        let a = ec.ZP.requireModule('discord_krisp');
        ((tu = !0),
            (s = null == (e = a.getSdkVersion) ? void 0 : e.call(a)),
            (l = null != (i = null == (t = a.getSuppressionLevel) ? void 0 : t.call(a)) ? i : 100),
            null == (n = a.getNcModels) ||
                n.call(a).then((e) => {
                    ((td = e), r.emitChange());
                }),
            r.emitChange());
    } catch (t) {
        (eP.warn('Failed to load Krisp module: '.concat(t.message)), el.Z.captureException(t));
        let e = eT.H3.INITIALIZED;
        if (t.message.includes(': ')) {
            let n = parseInt(t.message.substring(t.message.indexOf(': ') + 1));
            e = isNaN(n) || 0 === n ? eT.H3.INITIALIZED : n;
        }
        (er.default.track(eb.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), tq({ noiseCancellation: !1 }));
    } finally {
        tc = !1;
    }
}
function n$() {
    return ((0, eo.isWindows)() && 'arm64' !== ec.ZP.architecture) || (0, eo.isLinux)() || (0, eo.isMac)();
}
function n0() {
    !n$() || __OVERLAY__ || tc || tu ? ((0, eo.isWeb)() && eK.supports(eT.AN.NOISE_CANCELLATION) ? ((tu = !0), r.emitChange()) : (0, eo.isWeb)() && tq({ noiseCancellation: !1 })) : ((tc = !0), nJ());
}
function n1(e) {
    let { enabled: t } = e;
    (er.default.track(eb.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != tf ? tf : null,
        enabled: t
    }),
        tq({ voiceFilterPlaybackEnabled: t }));
}
function n2(e) {
    let { newVoiceFilterId: t } = e;
    (tq({ mostRecentlyRequestedVoiceFilter: t }), eK.eachConnection((e) => e.setVoiceFilterId(t)));
}
function n3() {
    tq({ mostRecentlyRequestedVoiceFilter: null });
}
function n4(e) {
    let { voiceFilterId: t } = e;
    ((th = tf), (tm = tp), (tf = t), (tp = null === t ? null : Date.now()));
}
function n5(e) {
    let t = e.bypassEnabled;
    (tq({ bypassSystemInputProcessing: t }), eK.setAudioInputBypassSystemProcessing(t), nT(e.location));
}
function n6(e) {
    n8(e.subsystem);
}
function n8(e) {
    e === eT.iA.AUTOMATIC ? (tq({ automaticAudioSubsystem: !0 }), n7()) : (tq({ automaticAudioSubsystem: !1 }), eK.setAudioSubsystem(e));
}
function n7() {
    eK.queueAudioSubsystem(eT.iA.EXPERIMENTAL);
}
function n9(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && tM(i, null), null != t || null == n)) {
        tl = !1;
        return;
    }
    if (tl) return;
    tl = !0;
    let a = tw();
    (a.mute || a.deaf) &&
        (tq({
            deaf: !1,
            mute: !1
        }),
        eK.eachConnection(tx));
}
function re(e) {
    let { application: t } = e;
    eq.add(t.id);
}
function rt(e) {
    let { application: t } = e;
    eq.delete(t.id);
}
function rn(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case 'audio':
                ((eX = !1), eK.eachConnection(tx));
                break;
            case 'video':
                tM(!1);
        }
}
function rr(e) {
    ((eX = e.enabled),
        e.unmute &&
            tq({
                mute: !1,
                deaf: !1
            }),
        eK.eachConnection(tx));
}
function ri(e) {
    let { enabled: t } = e;
    (X.Z.requestPermission(eO.Eu.CAMERA), tM(t));
}
function ra(e) {
    let { sourceId: t, applicationName: n, quality: i } = e,
        a = A.Z.isDecoupledGameClippingEnabled(),
        s = A.Z.getSettings().decoupledClipsEnabled;
    if (!a || !s || null == I.Z) return;
    let l = null,
        c = null,
        u = ei.Z.getPidFromDesktopSource(t);
    ({ soundshareId: l, soundshareSession: c } = t6(u));
    let d = {
        desktopSource: {
            id: t,
            sourcePid: u,
            soundshareId: l,
            soundshareSession: c
        },
        quality: i
    };
    (null != o && o.desktopSource.id !== d.desktopSource.id && (eK.setClipsSource(null), (0, eo.isWindows)() && null != o.desktopSource.soundshareId && T.pn(o.desktopSource.soundshareId)), null != l && t8(l, c), (o = d));
    let _ = tR(),
        f = tw().videoHook;
    eK.setClipsSource({
        desktopDescription: {
            id: o.desktopSource.id,
            soundshareId: o.desktopSource.soundshareId,
            useVideoHook: f,
            useGraphicsCapture: tF(),
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: tH(),
            videoHookStaleFrameTimeoutMs: eG,
            graphicsCaptureStaleFrameTimeoutMs: eB,
            hdrCaptureMode: _
        },
        quality: i,
        applicationName: n
    });
}
function ro(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((o = null), eK.setClipsSource(null));
}
function rs(e) {
    var t, n, r, i;
    let { settings: a } = e;
    if ((null == a ? void 0 : a.desktopSettings) != null) {
        let e = null,
            r = null,
            { sourceId: i, sound: o } = a.desktopSettings,
            s = null != (t = a.context) ? t : eT.Yn.DEFAULT,
            l =
                null != (n = a.qualityOptions)
                    ? n
                    : {
                          resolution: 720,
                          frameRate: 30
                      },
            c = !1 === o ? null : ei.Z.getPidFromDesktopSource(i);
        (eo.isPlatformEmbedded && !0 === o && (({ soundshareId: e, soundshareSession: r } = t6(c)), null != e && t8(e, r)),
            tk(s),
            tM(s === eT.Yn.STREAM && e8, {
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
            }));
    } else if ((null == a ? void 0 : a.cameraSettings) != null) {
        let e = null != (r = a.context) ? r : eT.Yn.DEFAULT,
            { videoDeviceGuid: t, audioDeviceGuid: n } = a.cameraSettings,
            o = e === eT.Yn.STREAM && e8,
            s =
                null != (i = a.qualityOptions)
                    ? i
                    : {
                          resolution: 720,
                          frameRate: 30
                      };
        tM(o, {
            cameraSource: {
                videoDeviceGuid: t,
                audioDeviceGuid: n
            },
            quality: {
                resolution: s.resolution,
                frameRate: s.frameRate
            }
        });
    } else tM(e8, null);
}
function rl(e) {
    let { section: t } = e;
    return (t === eb.oAB.VOICE && tJ(), !1);
}
function rc() {
    return (eK.eachConnection(tB), !1);
}
function ru(e) {
    let { enabled: t } = e,
        n = tq({ openH264: t });
    (eK.setH264Enabled(n.hardwareEncoding || n.openH264),
        eK.eachConnection((e) => {
            var t;
            return e.setSoftwareH264(null == (t = n.openH264) || t);
        }));
}
function rd(e) {
    let { enabled: t } = e,
        n = tq({ aecDumpEnabled: t });
    eK.setAecDump(n.aecDumpEnabled);
}
function r_(e) {
    let { state: t } = e,
        n = D.Z.isEnabled();
    if (t === eb.$7l.BACKGROUND && e8 && !n) ((tr = !0), tM(!1));
    else {
        if (t !== eb.$7l.ACTIVE || !tr) return !1;
        ((tr = !1), tM(!0));
    }
    return !0;
}
function rf(e) {
    eK.eachConnection((t) => t.setBitRate(e.bitrate));
}
function rp() {
    if ((!e8 && null == a) || null != eh.Z.getRTCConnectionId()) return !1;
    tM(!1, null);
}
function rh() {
    return !!tE && ((tE = !1), !0);
}
function rm(e) {
    eK.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function rg(e) {
    let { settings: t } = e;
    eK.applyMediaFilterSettings(t).finally(() => {
        ((tb = !1), r.emitChange());
    });
}
function rE() {
    tb = !0;
}
function rb() {
    tb = !1;
}
function ry(e) {
    tN = e.enabled;
}
class rO extends (u = E.ZP.Store) {
    initialize() {
        (tV(),
            tz(),
            n0(),
            nd(),
            (tS = {
                [eT.AN.VIDEO]: eK.supports(eT.AN.VIDEO),
                [eT.AN.DESKTOP_CAPTURE]: eK.supports(eT.AN.DESKTOP_CAPTURE),
                [eT.AN.HYBRID_VIDEO]: eK.supports(eT.AN.HYBRID_VIDEO)
            }),
            this.waitFor(ed.default, ef.Z, ep.Z, eh.Z, L.ZP, X.Z.storage, ee.Z, w.Z, A.Z));
    }
    supports(e) {
        return eK.supports(e);
    }
    supportsInApp(e) {
        return tS[e] || eK.supports(e);
    }
    isSupported() {
        return eK.supported();
    }
    isExperimentalEncodersSupported() {
        return eK.supports(eT.AN.EXPERIMENTAL_ENCODERS);
    }
    isNoiseSuppressionSupported() {
        return eK.supports(eT.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return nQ();
    }
    isNoiseCancellationError() {
        return tE;
    }
    isAutomaticGainControlSupported() {
        return eK.supports(eT.AN.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !tW() && (eK.supports(eT.AN.LEGACY_AUDIO_SUBSYSTEM) || eK.supports(eT.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return eK.supports(eT.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && 'experimental' === eK.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return nQ();
    }
    isAecDumpSupported() {
        return eK.supports(eT.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return eK.supports(eT.AN.VIDEO) && eK.supports(eT.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        let t = (null == (e = ep.Z.getChannel(tg)) ? void 0 : e.type) === eb.d4z.GUILD_STAGE_VOICE,
            n = r.getHardwareEncoding();
        return !t && n && V.Z.simulcastEnabled();
    }
    getAecDump() {
        return tw().aecDumpEnabled;
    }
    getMediaEngine() {
        return eK;
    }
    getVideoComponent() {
        return eK.Video;
    }
    getCameraComponent() {
        return eK.Camera;
    }
    getKrispSuppressionLevel() {
        return null != l ? l : 100;
    }
    getKrispEnableStats() {
        return t_;
    }
    isEnabled() {
        return eX;
    }
    isMute() {
        return this.isSelfMute() || e3;
    }
    isDeaf() {
        return this.isSelfDeaf() || e6;
    }
    hasContext(e) {
        return null != ez[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT;
        return e === eT.Yn.DEFAULT && e4;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT;
        return !this.isEnabled() || tw(e).mute || !X.Z.didHavePermission(eO.Eu.AUDIO) || this.isSelfDeaf(e) || (e === eT.Yn.DEFAULT && e5);
    }
    shouldSkipMuteUnmuteSound() {
        return e9;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        e9 = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && ef.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return tN;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT;
        return !this.isSupported() || tw(e).deaf;
    }
    isVideoEnabled() {
        return e8 && ti;
    }
    isVideoAvailable() {
        return Object.values(e2).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.STREAM;
        return eJ === e && null != a;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.STREAM;
        return eJ === t && null != a && (null == (e = a.desktopSource) ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT;
        return e !== ed.default.getId() && (tw(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return eK.supports(eT.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT;
        return null != (t = tw(n).disabledLocalVideos[e]) && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT;
        return null != (t = tw(n).videoToggleStateMap[e]) ? t : eb.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT;
        return t === eT.Yn.DEFAULT && tv.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT;
        return e === eT.Yn.DEFAULT && tv.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tb;
    }
    isNativeAudioPermissionReady() {
        return ty;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return eJ;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return e$;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT,
            n = tw(t).localPans[e];
        return null != n ? n : eU;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT,
            n = t === eT.Yn.STREAM ? eT.Yh : eT.Qx,
            r = tw(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return tw().inputVolume;
    }
    getOutputVolume() {
        return tw().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT;
        return tw(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT;
        return tw(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return tf;
    }
    getActiveVoiceFilterAppliedAt() {
        return tp;
    }
    getPreviousVoiceFilter() {
        return th;
    }
    getPreviousVoiceFilterAppliedAt() {
        return tm;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return tw().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return tw().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            p().each(ez, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i }
                } = t;
                r === eb.pM4.PUSH_TO_TALK && eq.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return t1(e0, tw().inputDeviceId);
    }
    getOutputDeviceId() {
        return t1(e1, tw().outputDeviceId);
    }
    getVideoDeviceId() {
        return t1(e2, tw().videoDeviceId);
    }
    getInputDevices() {
        return e0;
    }
    getOutputDevices() {
        return e1;
    }
    getVideoDevices() {
        return e2;
    }
    getEchoCancellation() {
        let e = tw();
        return ef.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return tw().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return tw().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return tw().h265Enabled;
    }
    getLoopback() {
        return tT.size > 0;
    }
    getLoopbackReasons() {
        return tT;
    }
    getNoiseSuppression() {
        let e = tw();
        return ef.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tw();
        return ef.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return tw().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return tw().noiseCancellation;
    }
    getExperimentalEncoders() {
        return tw().experimentalEncoders;
    }
    getHardwareEncoding() {
        var e;
        return null == (e = tw().hardwareEncoding) || e;
    }
    getEnableSilenceWarning() {
        return tw().silenceWarning;
    }
    getDebugLogging() {
        return eK.getDebugLogging();
    }
    getQoS() {
        return tw().qos;
    }
    getAttenuation() {
        return tw().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return tw().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return tw().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return tY() && tw().automaticAudioSubsystem ? eT.iA.AUTOMATIC : eK.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return eK.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return tw().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eI._.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT;
        return tw(e);
    }
    getState() {
        return {
            settingsByContext: ez,
            inputDevices: e0,
            outputDevices: e1,
            appSupported: tS,
            krispModuleLoaded: tu,
            krispVersion: s,
            krispSuppressionLevel: l,
            goLiveSource: a,
            goLiveContext: eJ
        };
    }
    getInputDetected() {
        return ta;
    }
    getNoInputDetectedNotice() {
        return ts;
    }
    getPacketDelay() {
        return eo.isPlatformEmbedded || this.getMode() !== eb.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        eK.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return eQ;
    }
    getVideoHook() {
        return tw().videoHook;
    }
    supportsVideoHook() {
        return eK.supports(eT.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tw().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e);
    }
    supportsExperimentalSoundshare() {
        return eK.supports(eT.AN.EXPERIMENTAL_SOUNDSHARE) && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, ey.I9);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = tw().useSystemScreensharePicker,
            n = (0, eo.isLinux)() || ((0, eo.isMac)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, ey.jR));
        return e && (null != t ? t : n);
    }
    supportsSystemScreensharePicker() {
        return eK.supports(eT.AN.NATIVE_SCREENSHARE_PICKER);
    }
    getOpenH264() {
        return tw().openH264;
    }
    getEverSpeakingWhileMuted() {
        return te;
    }
    getSpeakingWhileMuted() {
        return tt;
    }
    getKrispModelOverride() {
        return c;
    }
    getKrispModels() {
        return td;
    }
    getKrispVadActivationThreshold() {
        var e;
        return null != (e = tw().modeOptions.vadKrispActivationThreshold) ? e : ej;
    }
    hasActiveCallKitCall() {
        return tC;
    }
    setHasActiveCallKitCall(e) {
        tC = e;
    }
    supportsScreenSoundshare() {
        return (0, eo.isMac)() ? eK.supports(eT.AN.SOUNDSHARE) && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, ey.yG) && tH() : (0, eo.isWindows)() ? eK.supports(eT.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, eo.isLinux)() && eK.supports(eT.AN.SCREEN_SOUNDSHARE);
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT,
            t = this.supports(eT.AN.VIDEO)
                ? [
                      {
                          rid: '100',
                          type: e === eT.Yn.DEFAULT ? eT.Tr.VIDEO : eT.Tr.SCREEN,
                          quality: eT.y7
                      }
                  ]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === eT.Yn.DEFAULT || this.goLiveSimulcastEnabled()) &&
                t.push({
                    rid: '50',
                    type: e === eT.Yn.DEFAULT ? eT.Tr.VIDEO : eT.Tr.SCREEN,
                    quality: eT.LD
                }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: !1 };
        return ((0, eo.isWeb)() && (e.fetchDave = H.N.getCurrentConfig({ location: 'MediaEngineStore fetchAsyncResources' }).loadWasmModule), eK.fetchAsyncResources(e));
    }
    getSupportedSecureFramesProtocolVersion() {
        if ((0, eo.isWeb)()) {
            let { useWasmModule: e } = H.N.getCurrentConfig({ location: 'MediaEngineStore getSupportedSecureFramesProtocolVersion' });
            if (!e) return 0;
        }
        let e = eK.getSupportedSecureFramesProtocolVersion(),
            t = H.m.getCurrentConfig({ location: 'MediaEngineStore' });
        return (114 === e && (e = 1), t.canSupportDaveProtocol && e >= t.protocolVersionFloor ? e : 0);
    }
    hasClipsSource() {
        return null != o;
    }
    getGpuBrand() {
        return tA;
    }
}
function rv(e) {
    if (null == e.taskMetrics || 0 === e.taskMetrics.length || 1 === e.taskMetrics.length) return null;
    let t = {
        metrics_period_ms: e.periodMs,
        total_tasks: 0,
        total_exec_time_ns: 0
    };
    ((t.total_tasks = e.taskMetrics.reduce((e, t) => e + t.count, 0)), (t.total_exec_time_ns = e.taskMetrics.reduce((e, t) => e + t.totalExecTimeNs, 0)));
    let n = [...e.taskMetrics].sort((e, t) => t.longestExecTimeNs - e.longestExecTimeNs),
        r = [...e.taskMetrics].sort((e, t) => t.longestQueueTimeNs - e.longestQueueTimeNs);
    for (let e = 0; e < 3; e++)
        if (e < n.length) {
            let r = n[e];
            ((t['slow_task_'.concat(e, '_name')] = r.name), (t['slow_task_'.concat(e, '_longest_exec_time_ns')] = r.longestExecTimeNs));
        }
    for (let e = 0; e < 3; e++)
        if (e < r.length) {
            let n = r[e];
            ((t['delayed_task_'.concat(e, '_name')] = n.name), (t['delayed_task_'.concat(e, '_longest_queue_time_ns')] = n.longestQueueTimeNs));
        }
    return ((t.full_task_report = JSON.stringify(n)), t);
}
eA(rO, 'displayName', 'MediaEngineStore');
let rI = (r = new rO(v.Z, {
    VOICE_CHANNEL_SELECT: n9,
    VOICE_STATE_UPDATES: nn,
    CONNECTION_OPEN: t7,
    CONNECTION_CLOSED: ne,
    RTC_CONNECTION_STATE: nt,
    AUDIO_SET_TEMPORARY_SELF_MUTE: nr,
    AUDIO_TOGGLE_SELF_MUTE: ni,
    AUDIO_SET_SELF_MUTE: na,
    AUDIO_TOGGLE_SELF_DEAF: ns,
    AUDIO_TOGGLE_LOCAL_MUTE: nl,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: nc,
    AUDIO_SET_LOCAL_VOLUME: n_,
    AUDIO_SET_LOCAL_PAN: nf,
    AUDIO_SET_MODE: np,
    AUDIO_SET_INPUT_VOLUME: nh,
    AUDIO_SET_OUTPUT_VOLUME: nm,
    AUDIO_SET_INPUT_DEVICE: ng,
    AUDIO_SET_OUTPUT_DEVICE: nE,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: ny,
    AUDIO_SET_ECHO_CANCELLATION: nS,
    AUDIO_SET_SIDECHAIN_COMPRESSION: nA,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nN,
    AUDIO_SET_LOOPBACK: nR,
    AUDIO_SET_NOISE_SUPPRESSION: nD,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nL,
    AUDIO_SET_NOISE_CANCELLATION: nx,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: nk,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: nG,
    AUDIO_SET_DEBUG_LOGGING: nB,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: nV,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: nM,
    MEDIA_ENGINE_SET_VIDEO_HOOK: nF,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: nZ,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: nH,
    AUDIO_SET_ATTENUATION: nY,
    AUDIO_SET_QOS: nW,
    MEDIA_ENGINE_DEVICES: nv,
    AUDIO_VOLUME_CHANGE: nI,
    AUDIO_RESET: nK,
    AUDIO_INPUT_DETECTED: nz,
    AUDIO_SET_SUBSYSTEM: n6,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: n5,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rr,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: ri,
    MEDIA_ENGINE_PERMISSION: rn,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rs,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nb,
    MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nj,
    MEDIA_ENGINE_INTERACTION_REQUIRED: nO,
    USER_SETTINGS_MODAL_INIT: rl,
    USER_SETTINGS_MODAL_SET_SECTION: rl,
    CERTIFIED_DEVICES_SET: rc,
    RPC_APP_CONNECTED: re,
    RPC_APP_DISCONNECTED: rt,
    OVERLAY_INITIALIZE: t9,
    MEDIA_ENGINE_SET_OPEN_H264: ru,
    MEDIA_ENGINE_SET_HARDWARE_ENCODING: nU,
    APP_STATE_UPDATE: r_,
    SET_CHANNEL_BITRATE: rf,
    SET_VAD_PERMISSION: nq,
    SET_NATIVE_PERMISSION: nX,
    SET_CHANNEL_VIDEO_QUALITY_MODE: rm,
    MEDIA_ENGINE_SET_AEC_DUMP: rd,
    CHANNEL_DELETE: rp,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rh,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rg,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rE,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rb,
    USER_SETTINGS_PROTO_UPDATE: no,
    CLIPS_INIT: ra,
    CLIPS_SETTINGS_UPDATE: ro,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: ry,
    VOICE_FILTER_REQUEST_SWITCH: n2,
    VOICE_FILTER_LOOPBACK_TOGGLE: n1,
    VOICE_FILTER_APPLIED: n4,
    VOICE_FILTER_DOWNLOAD_FAILED: n3,
    VOICE_FILTER_APPLY_FAILED: n3
}));
