let r, i, a, o, s, l, c;
(n.d(t, { Z: () => rE }), n(388685), n(953529), n(457542), n(539854), n(642613), n(49124), n(337869));
var u,
    d = n(512722),
    f = n.n(d),
    _ = n(392711),
    p = n.n(_),
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
    k = n(822253),
    M = n(355552),
    j = n(294473),
    U = n(706629),
    G = n(166884),
    B = n(529558),
    V = n(111672),
    F = n(441167),
    Z = n(580930),
    H = n(787517),
    Y = n(338336),
    W = n(751571),
    K = n(311473),
    z = n(725380),
    q = n(581883),
    X = n(875527),
    Q = n(420439),
    J = n(626135),
    $ = n(12647),
    ee = n(70956),
    et = n(358085),
    en = n(747268),
    er = n(960048),
    ei = n(998502),
    ea = n(13140),
    eo = n(314897),
    es = n(967368),
    el = n(463395),
    ec = n(592125),
    eu = n(858340),
    ed = n(19780),
    ef = n(704806),
    e_ = n(594174),
    ep = n(631768),
    eh = n(981631),
    em = n(70722),
    eg = n(761274),
    eE = n(526761),
    eb = n(345655),
    ey = n(65154),
    eO = n(388032);
function ev(e, t, n) {
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
function eI(e) {
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
                ev(e, t, n[t]);
            }));
    }
    return e;
}
function eT(e, t) {
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
function eS(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eT(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eA = new C.Z('MediaEngineStore'),
    eN = 'MediaEngineStore',
    eC = 4,
    eR = 1,
    eP = 1,
    ew = 1,
    eD = 1,
    eL = 0.5,
    ex = {
        left: 1,
        right: 1
    },
    ek = 500,
    eM = 5 * ee.Z.Millis.SECOND,
    ej = -60,
    eU = 100,
    eG = 2 * ee.Z.Millis.SECOND,
    eB = 0;
function eV() {
    return {
        mode: eh.pM4.VOICE_ACTIVITY,
        modeOptions: {
            threshold: ej,
            autoThreshold: et.isPlatformEmbedded || __OVERLAY__,
            vadUseKrisp: !0,
            vadKrispActivationThreshold: eL,
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
        inputVolume: ey.Qx,
        outputVolume: ey.Qx,
        inputDeviceId: ey.w5,
        outputDeviceId: ey.w5,
        videoDeviceId: ey.w5,
        qos: !1,
        qosMigrated: !1,
        videoHook: eZ.supports(ey.AN.VIDEO_HOOK),
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
let eF = {
        [eb._.CUSTOM]: {},
        [eb._.VOICE_ISOLATION]: {
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
        [eb._.STUDIO]: {
            mode: eh.pM4.VOICE_ACTIVITY,
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
    eZ = (0, b.Mt)((0, b.jj)());
eA.enableNativeLogger(!0);
let eH = {},
    eY = new Set([ey.Yn.DEFAULT]),
    eW = eZ.supports(ey.AN.AUTO_ENABLE),
    eK = !1,
    ez = ey.Yn.STREAM,
    eq = performance.now(),
    eX = { [ey.w5]: tq('No Input Devices') },
    eQ = { [ey.w5]: tq('No Output Devices') },
    eJ = { [ey.w5]: tq('No Video Devices') },
    e$ = !1,
    e0 = !1,
    e1 = !1,
    e2 = !1,
    e3 = !1,
    e4 = ey.Av,
    e5 = !1,
    e6 = !1,
    e8 = !1,
    e7 = new O.V7(),
    e9 = !1,
    te = !1,
    tt = null,
    tn = !1,
    tr = !1,
    ti = !1,
    ta = !1,
    to = !1,
    ts = [],
    tl = null,
    tc = null,
    tu = null,
    td = null,
    tf = null,
    t_ = !1,
    tp = !1,
    th = !1;
(W.Z.hasPermission(eg.Eu.AUDIO, { showAuthorizationError: !1 }), W.Z.hasPermission(eg.Eu.CAMERA, { showAuthorizationError: !1 }));
let tm = !1,
    tg = new Set(),
    tE = tm,
    tb = new Set(),
    ty = {},
    tO = null,
    tv = !0,
    tI = !1,
    tT = {},
    tS = 5 * ee.Z.Millis.SECOND;
function tA() {
    var e, t;
    return null != (t = null == (e = e_.default.getCurrentUser()) ? void 0 : e.isStaff()) && t ? 'always' : en.Z === g.R.CANARY ? 'permittedDevicesOnly' : 'never';
}
function tN() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ey.Yn.DEFAULT,
        t = eH[e];
    return (null == t && ((t = eV()), (eH[e] = t)), t);
}
function tC() {
    var e, t, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ey.Yn.DEFAULT,
        i = tN(r),
        a = eF[null != (e = i.activeInputProfile) ? e : eb._.CUSTOM];
    return eS(eI({}, i, a), { modeOptions: eI({}, null != (t = i.modeOptions) ? t : {}, null != (n = a.modeOptions) ? n : {}) });
}
function tR(e) {
    var t;
    let n = tC(e.context);
    e.setInputMode(n.mode, {
        vadThreshold: n.modeOptions.threshold,
        vadAutoThreshold: n.modeOptions.autoThreshold,
        vadUseKrisp: n.modeOptions.vadUseKrisp && nW(),
        vadKrispActivationThreshold: null != (t = n.modeOptions.vadKrispActivationThreshold) ? t : 0.5,
        vadLeading: n.modeOptions.vadLeading,
        vadTrailing: n.modeOptions.vadTrailing,
        pttReleaseDelay: n.modeOptions.delay
    });
}
function tP(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ey.Qx;
    return p().clamp(e, 0, t);
}
function tw(e) {
    let t = tC(e.context),
        n = !eW || t.mute || t.deaf;
    (e.context === ey.Yn.DEFAULT ? (n = n || e$ || e0 || e1 || !W.Z.didHavePermission(eg.Eu.AUDIO)) : e.context === ey.Yn.STREAM && (n = !0), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === ey.Yn.DEFAULT && S.Z.updateNativeMute());
}
function tD(e) {
    e !== ez && (null != a && eZ.setGoLiveSource(null, ez), (ez = e));
}
function tL() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e3,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        s = a;
    if (((null == s ? void 0 : s.desktopSource) != null && s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? void 0 : e.id) && (null != s.desktopSource.soundshareId && (0, et.isWindows)() && T.pn(s.desktopSource.soundshareId), eZ.setGoLiveSource(null, ez)), (null == s ? void 0 : s.cameraSource) != null && (s.cameraSource.videoDeviceGuid !== (null == o || null == (t = o.cameraSource) ? void 0 : t.videoDeviceGuid) || s.cameraSource.audioDeviceGuid !== (null == o || null == (n = o.cameraSource) ? void 0 : n.audioDeviceGuid)) && eZ.setGoLiveSource(null, ez), (e3 || i) && ((e4 = (e3 = i) ? tQ(eJ, tC().videoDeviceId) : ey.Av), eZ.setVideoInputDevice(e4)), (a = o), null != o)) {
        let e = {
            resolution: o.quality.resolution,
            frameRate: o.quality.frameRate
        };
        if (null != o.desktopSource) {
            let t = tA(),
                n = tC().videoHook,
                i = tU(),
                a = i ? (tG() && (0, H.R)('MediaEngineStore_updateVideo').enabled ? em.zj : em.ZM) : 0;
            eZ.setGoLiveSource(
                {
                    desktopDescription: {
                        id: o.desktopSource.id,
                        soundshareId: o.desktopSource.soundshareId,
                        useVideoHook: n,
                        useGraphicsCapture: i,
                        useGraphicsCaptureApiLevel: a,
                        useLoopback: r.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: tB(),
                        videoHookStaleFrameTimeoutMs: ek,
                        graphicsCaptureStaleFrameTimeoutMs: eM,
                        hdrCaptureMode: t
                    },
                    quality: e
                },
                ez
            );
        }
        null != o.cameraSource &&
            eZ.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: o.cameraSource.audioDeviceGuid
                    },
                    quality: e
                },
                ez
            );
    }
}
function tx(e, t, n, r) {
    var i;
    let a = null != (i = null == e ? void 0 : e.soundshareSession) ? i : '';
    null == tT[a] && (tT[a] = new Set());
    let o = null != t && !tT[a].has(t);
    (o && tT[a].add(t),
        (null == t || o) &&
            J.default.track(
                eh.rMx.SOUNDSHARE_FAILED,
                eI(
                    {
                        soundshare_failure_code: t,
                        soundshare_failure_reason: n,
                        soundshare_failure_will_retry: r
                    },
                    (0, x.Z)(e)
                )
            ));
}
function tk(e) {
    switch (e) {
        case ey.H3.CPU_OVERUSE:
            return P.Nk.NoiseCancellerCpuOveruse;
        case ey.H3.FAILED:
            return P.Nk.NoiseCancellerFailed;
        case ey.H3.VAD_CPU_OVERUSE:
            return P.Nk.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function tM(e) {
    let t = tC(),
        n = t.inputDeviceId;
    if ((e.setEchoCancellation(el.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(el.Z.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(el.Z.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), e.setVoiceFilterId(tl), (0, et.isWeb)())) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function tj() {
    (eZ.on(b.aB.Connection, (e) => {
        var t, n;
        (tR(e), tw(e), tM(e));
        let i = tC();
        (e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers), e.setQoS(i.qos), e.setExperimentalEncoders(i.experimentalEncoders), e.setHardwareH264(null == (t = i.hardwareEncoding) || t), e.setSoftwareH264(null == (n = i.openH264) || n));
        let o = ed.Z.getGuildId(),
            { muteBeforeProcessing: s, pttBeforeProcessing: l, skipEncode: c } = (null != o ? U.Z : j.Z).getCurrentConfig(eI({ location: 'setupMediaEngine' }, null != o && { guildId: o }), { autoTrackExposure: !0 });
        (s && e.setExperimentFlag(ey.V8.MUTE_BEFORE_PROCESSING, !0), l && e.setExperimentFlag(ey.V8.PTT_BEFORE_PROCESSING, !0), c && e.setExperimentFlag(ey.V8.SKIP_ENCODE, !0));
        let u = !1,
            d = !0;
        if ((e.setExperimentFlag(ey.V8.RESET_DECODER_ON_ERRORS, !0), u && e.setExperimentFlag(ey.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0), d && e.setExperimentFlag(ey.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0), e.context === ey.Yn.STREAM)) {
            let { simulcastEnabled: t, lqStreamBitrate: n } = G.Z.getConfig();
            e.configureGoLiveSimulcast(t, n);
        }
        ((0, et.isWindows)() ? ((null == tO ? void 0 : tO.startsWith('NVIDIA')) || (null == tO ? void 0 : tO.startsWith('AMD')) ? e.setExperimentFlag(ey.V8.SIGNAL_AV1, !0) : e.setExperimentFlag(ey.V8.SIGNAL_AV1_DECODE, !0)) : ((0, et.isMac)() || (0, et.isLinux)()) && e.setExperimentFlag(ey.V8.SIGNAL_AV1_DECODE, !0), (0, et.isWindows)() && e.setExperimentFlag(ey.V8.SIGNAL_AV1_HARDWARE_DECODE, !0), eZ.setHasFullbandPerformance((0, R.Z)()));
        let f = (0, M.D)('setupMediaEngine').enabled;
        if ((e.setRemoteAudioHistory(1000 * !!f), (0, N.Z)(r))) {
            let t = A.Z.getSettings();
            e.setExperimentFlag(ey.V8.STREAMER_CLIP, t.clipsEnabled);
            let { enableViewerClipping: n } = F.Z.getCurrentConfig({ location: 'f627ab_15' }, { autoTrackExposure: !1 });
            (e.setViewerSideClip(n), e.setClipsKeyFrameInterval(ey.ux));
        }
        for (let t of ((i = tC(e.context)), e.setPostponeDecodeLevel(eU), Object.keys(i.localMutes))) t !== eo.default.getId() && e.setLocalMute(t, i.localMutes[t]);
        for (let t of Object.keys(i.localVolumes)) t !== eo.default.getId() && e.setLocalVolume(t, i.localVolumes[t]);
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
            e.context === ey.Yn.DEFAULT &&
                ((e6 = !1),
                (e8 = !1),
                e.on(b.Sh.SpeakingWhileMuted, () => {
                    ((e6 = !0),
                        (e8 = !0),
                        r.emitChange(),
                        e7.stop(),
                        e7.start(eG, () => {
                            ((e8 = !1), r.emitChange());
                        }));
                })),
            e.on(b.Sh.DesktopSourceEnd, () => {
                v.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                    settings: { context: e.context }
                });
            }),
            e.on(b.Sh.SoundshareAttached, () => {
                (null == a ? void 0 : a.desktopSource) != null && J.default.track(eh.rMx.SOUNDSHARE_ATTACHED, (0, x.Z)(null == a ? void 0 : a.desktopSource));
            }),
            e.on(b.Sh.SoundshareFailed, (e) => {
                let { failureCode: t, failureReason: n, willRetry: r } = e;
                tx(null == a ? void 0 : a.desktopSource, t, n, r);
            }),
            e.on(b.Sh.SoundshareSpeaking, () => {
                (null == a ? void 0 : a.desktopSource) != null && (J.default.track(eh.rMx.SOUNDSHARE_TRANSMITTING, (0, x.Z)(null == a ? void 0 : a.desktopSource)), null != eu.Z.getHookError(eh.K3D.SOUND) && v.Z.wait(() => v.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
            }));
        let _ = new O.V7();
        (e.on(b.Sh.SoundshareTrace, (e) => {
            switch (e.type) {
                case 'soundshare_attach_requested':
                    _.start(tS, () => {
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
                    (null == a ? void 0 : a.desktopSource) != null &&
                        (tx(null == a ? void 0 : a.desktopSource, n, t, r),
                        r ||
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
            e.on(b.Sh.InteractionRequired, (e) => {
                v.Z.dispatch({
                    type: 'MEDIA_ENGINE_INTERACTION_REQUIRED',
                    required: e
                });
            }),
            e.on(b.Sh.VideoHookInitialize, (e, t, n, r, i, o) => {
                (null == a ? void 0 : a.desktopSource) != null &&
                    J.default.track(
                        eh.rMx.VIDEOHOOK_INITIALIZED,
                        eI(
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
                (eA.warn('noisecancellererror event: '.concat(e)),
                    (0, P.kr)({
                        type: P.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tk(e)
                    }),
                    (t_ = !0),
                    J.default.track(eh.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
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
                (eA.warn('voiceactivitydetectorerror event: '.concat(e)),
                    (0, P.kr)({
                        type: P.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tk(e)
                    }),
                    J.default.track(eh.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    v.Z.dispatch({
                        type: 'AUDIO_SET_MODE',
                        context: ey.Yn.DEFAULT,
                        mode: eh.pM4.VOICE_ACTIVITY,
                        options: eS(eI({}, tC(ey.Yn.DEFAULT).modeOptions), { vadUseKrisp: !1 })
                    }),
                    v.Z.dispatch({
                        type: 'MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR',
                        code: e
                    }));
            }),
            e.on(b.Sh.SdpError, (e, t, n, r) => {
                J.default.track(eh.rMx.SDP_ERROR, {
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
            e.on(b.Sh.Destroy, () => {
                _.stop();
            }),
            e.setBitRate(es.Z.bitrate),
            e.applyVideoQualityMode(ep.Z.mode));
    }),
        eZ.on(b.aB.DeviceChange, (e, t, n) => {
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_DEVICES',
                inputDevices: e,
                outputDevices: t,
                videoDevices: n
            });
        }),
        eZ.on(b.aB.VolumeChange, (e, t) => {
            v.Z.dispatch({
                type: 'AUDIO_VOLUME_CHANGE',
                inputVolume: e,
                outputVolume: t
            });
        }),
        eZ.on(b.aB.DesktopSourceEnd, () => {
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                settings: null
            });
        }),
        eZ.on(b.aB.AudioPermission, (e) => {
            ((th = !0),
                v.Z.dispatch({
                    type: 'MEDIA_ENGINE_PERMISSION',
                    kind: 'audio',
                    granted: e
                }));
        }),
        eZ.on(b.aB.VideoPermission, (e) => {
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_PERMISSION',
                kind: 'video',
                granted: e
            });
        }),
        eZ.on(b.aB.WatchdogTimeout, async () => {
            let e;
            try {
                await $.Z.submitLiveCrashReport({ message: { message: 'Voice Watchdog Timeout' } });
            } catch (t) {
                'number' == typeof t.status && (e = t.status);
            }
            (eA.warn('Watchdog timeout, report submission status: '.concat(null != e ? e : 200)), J.default.track(eh.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e }));
        }),
        eZ.on(b.aB.VideoInputInitialized, (e) => {
            J.default.track(eh.rMx.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * ee.Z.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: ed.Z.getMediaSessionId(),
                rtc_connection_id: ed.Z.getRTCConnectionId()
            });
        }),
        eZ.on(b.aB.AudioInputInitialized, (e) => {
            J.default.track(eh.rMx.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * ee.Z.Millis.SECOND),
                rtc_connection_id: ed.Z.getRTCConnectionId()
            });
        }),
        eZ.on(b.aB.ClipsRecordingRestartNeeded, () => {
            v.Z.dispatch({ type: 'CLIPS_RESTART' });
        }),
        eZ.on(b.aB.ClipsInitFailure, (e, t) => {
            v.Z.wait(() => {
                v.Z.dispatch({
                    type: 'CLIPS_INIT_FAILURE',
                    errMsg: e,
                    applicationName: t
                });
            });
        }),
        eZ.on(b.aB.ClipsRecordingEnded, (e, t) => {
            var n, r;
            (null == o || null == (n = o.desktopSource) ? void 0 : n.id) === e && (null != t && (null == a || null == (r = a.desktopSource) ? void 0 : r.soundshareId) !== t && T.pn(t), (o = null));
        }),
        eZ.on(b.aB.NativeScreenSharePickerUpdate, (e, t) => {
            v.Z.dispatch({
                type: 'NATIVE_SCREEN_SHARE_PICKER_UPDATE',
                existing: e,
                content: t
            });
        }),
        eZ.on(b.aB.NativeScreenSharePickerCancel, (e) => {
            v.Z.dispatch({
                type: 'NATIVE_SCREEN_SHARE_PICKER_CANCEL',
                existing: e
            });
        }),
        eZ.on(b.aB.NativeScreenSharePickerError, (e) => {
            v.Z.dispatch({
                type: 'NATIVE_SCREEN_SHARE_PICKER_ERROR',
                error: e
            });
        }),
        eZ.on(b.aB.AudioDeviceModuleError, (e, t, n) => {
            J.default.track(eh.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                audio_device_module: e,
                code: t,
                device_name: n
            });
        }),
        eZ.on(b.aB.VideoCodecError, (e) => {
            let t = 'encode' === e.mode ? P.u.VIDEO_ENCODE_ERROR : P.u.VIDEO_DECODE_ERROR,
                n = {
                    videoCodec: e.codecStandard,
                    errorMessage: e.message
                };
            (0, P.kr)(t === P.u.VIDEO_ENCODE_ERROR ? eS(eI({ type: t }, n), { videoEncoder: e.implName }) : eS(eI({ type: t }, n), { videoDecoder: e.implName }));
        }),
        eZ.on(b.aB.ConnectionStats, (e) => {
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_CONNECTION_STATS',
                connectionStats: e.map((e) => {
                    let { stats: t, connection: n } = e;
                    return {
                        stats: t,
                        mediaEngineConnectionId: n.mediaEngineConnectionId,
                        version: eB++,
                        context: n.context
                    };
                })
            });
        }),
        eZ.on(b.aB.VoiceQueueMetrics, (e) => {
            let t = rg(e);
            null !== t && J.default.track(eh.rMx.VOICE_QUEUE_METRICS, t);
        }),
        eZ.setOnVideoContainerResized((e, t, n) => {
            v.Z.wait(() =>
                v.Z.dispatch({
                    type: 'VIDEO_SIZE_UPDATE',
                    streamId: e,
                    width: t,
                    height: n
                })
            );
        }),
        tZ.reset(),
        (0, ef.q)().then((e) => {
            null != e && (tO = e.gpu_brand);
        }));
}
function tU() {
    return (0, et.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, em.c5);
}
function tG() {
    return (0, et.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, em.sN);
}
function tB() {
    return (0, et.isMac)() && eZ.supports(ey.AN.SCREEN_CAPTURE_KIT) && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, em.C7);
}
function tV() {
    return (0, et.isWindows)() && eZ.supports(ey.AN.AUTOMATIC_AUDIO_SUBSYSTEM) && eZ.supports(ey.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH);
}
function tF() {
    return eZ.supports(ey.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
let tZ = new (class {
    start() {
        this.started || ((this.started = !0), eZ.on(b.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            eZ.removeListener(b.aB.Silence, this.handleSilence),
            v.Z.dispatch({
                type: 'AUDIO_INPUT_DETECTED',
                inputDetected: null
            }));
    }
    update() {
        let e = tC();
        !tn && ed.Z.getState() === eh.hes.RTC_CONNECTED && e.mode === eh.pM4.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop();
    }
    reset() {
        (this.stop(), this.update());
    }
    constructor() {
        (ev(this, 'stateChangeTimeout', void 0),
            ev(this, 'noVoiceTimeout', 5000),
            ev(this, 'voiceTimeout', 1500),
            ev(this, 'started', !1),
            ev(this, 'handleSilence', (e) => {
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
                                    e && (tr = !0)));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout
                    )));
            }));
    }
})();
function tH() {
    var e;
    let t = y.K.get('audio');
    (null != t && (y.K.set(eN, { [ey.Yn.DEFAULT]: t }), y.K.remove('audio')),
        (eH = null != (e = y.K.get(eN)) ? e : {}),
        p().each(eH, (e) => {
            if ((p().defaultsDeep(e, eV()), null != e.modeOptions && 'string' == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, ea.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== eC && ((e.vadUseKrispSettingVersion = eC), (e.modeOptions.vadUseKrisp = !0)), e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)), !e.vadThrehsoldMigrated)) {
                var t;
                ((e.vadThrehsoldMigrated = !0), (null == (t = e.modeOptions) ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = ej));
            }
            ((0, et.isWeb)() ? e.ncUseKrispjsSettingVersion !== eP && ((e.ncUseKrispjsSettingVersion = eP), (e.noiseSuppression = !1), (e.noiseCancellation = !0)) : e.ncUseKrispSettingVersion !== eR && ((e.ncUseKrispSettingVersion = eR), (e.noiseSuppression = !1), (e.noiseCancellation = !0)), e.hardwareEnabledVersion !== ew && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = ew)), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264));
        }),
        tK());
}
function tY(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ey.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = tN(t);
    return (Object.assign(r, e), !__OVERLAY__ && n && y.K.set(eN, eH), r);
}
function tW() {
    (y.K.remove(eN), location.reload());
}
function tK() {
    var e, t, n;
    let r = tC();
    (eZ.setAudioInputDevice(r.inputDeviceId), eZ.setAudioOutputDevice(r.outputDeviceId), tL(), eZ.setInputVolume(r.inputVolume), eZ.setOutputVolume(r.outputVolume), eZ.setH264Enabled(null == (e = r.hardwareEncoding) || e || r.openH264), eZ.setAv1Enabled(null == (t = r.hardwareEncoding) || t), eZ.setH265Enabled(null == (n = r.hardwareEncoding) || n), eZ.setAecDump(r.aecDumpEnabled), eZ.setSidechainCompression(r.sidechainCompression), eZ.setSidechainCompressionStrength(r.sidechainCompressionStrength), eZ.setAudioInputBypassSystemProcessing(r.bypassSystemInputProcessing));
}
function tz() {
    eW ||
        eZ.enable().then(() =>
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
                enabled: !0,
                unmute: !1
            })
        );
}
function tq(e) {
    return {
        id: ey.w5,
        index: 0,
        name: e,
        disabled: !0,
        hardwareId: void 0,
        containerId: void 0
    };
}
function tX(e, t) {
    if (0 === e.length) {
        let e = tq(t);
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
function tQ(e, t) {
    var n;
    let r = null != (n = e[t]) ? n : p()(e).values().first();
    return null != r ? r.id : t;
}
function tJ(e) {
    let t = eX;
    if (((eX = tX(e, eO.intl.string(eO.t['/QIjDA']))), !p().isEqual(eX, t))) {
        let e = tC(),
            t = tQ(eX, e.inputDeviceId);
        eZ.setAudioInputDevice(t);
    }
}
function t$(e) {
    let t = eQ;
    if (((eQ = tX(e, eO.intl.string(eO.t.xlUg0t))), !p().isEqual(eQ, t))) {
        let e = tC(),
            t = tQ(eQ, e.outputDeviceId);
        eZ.setAudioOutputDevice(t);
    }
}
function t0(e) {
    te = e.length > 0;
    let t = eJ;
    if (((eJ = tX(e, eO.intl.string(eO.t.WKWARU))), e3 && !p().isEqual(eJ, t))) {
        var n;
        let e = void 0 !== eJ[e4],
            r = e4 === ey.w5 && (null == (n = t[ey.w5]) ? void 0 : n.disabled);
        tL(e || r);
    }
}
function t1() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        r =
            null != (e = q.Z.settings.audioContextSettings)
                ? e
                : {
                      user: {},
                      stream: {}
                  };
    for (let e of Object.keys(r)) {
        let i = e === eE.u0.USER ? ey.Yn.DEFAULT : ey.Yn.STREAM,
            a = i === ey.Yn.STREAM ? ey.Yh : ey.Qx,
            o = null != (t = r[e]) ? t : {},
            { localMutes: s, localVolumes: l } = tC(i);
        for (let [e, t] of Object.entries(o))
            null == (0, z.Ky)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== a ? (l[e] = t.volume) : delete l[e],
                eZ.eachConnection((n) => {
                    (n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted));
                }, i));
        if (n)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == o[e] &&
                    (delete s[e],
                    delete l[e],
                    eZ.eachConnection((t) => {
                        (t.setLocalVolume(e, a), t.setLocalMute(e, !1));
                    }, i));
        tY(
            {
                localMutes: s,
                localVolumes: l
            },
            i
        );
    }
}
function t2(e) {
    if (null == r)
        return (
            eA.info('Error: trying to get soundshare id before MediaEngineStore is instantiated.'),
            {
                soundshareId: null,
                soundshareSession: ''
            }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : $.Z.getAudioPid(e),
            n = '';
        return (
            null != t && (n = $.Z.generateSessionFromPid(t)),
            {
                soundshareId: t,
                soundshareSession: n
            }
        );
    }
}
function t3(e, t) {
    (0, et.isWindows)() &&
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
function t4(e) {
    ((i = e.sessionId),
        (e$ = !1),
        (e2 = !1),
        (0, et.isWeb)() ||
            (V.Z.subscribe({ location: 'handleConnectionOpen' }, (e) => {
                let t = tC();
                !e.sidechainAvailable && t.sidechainCompression ? (tY({ sidechainCompressionSettingVersion: 0 }), nT(!1)) : e.sidechainAvailable && t.sidechainCompressionSettingVersion < eD && (tY({ sidechainCompressionSettingVersion: eD }), nT(e.sidechainEnabled));
            }),
            nA()));
    let t = tC();
    if ((tV() && (tF() ? n2(ey.iA.AUTOMATIC) : t.automaticAudioSubsystem && n3()), eZ.supports(ey.AN.OFFLOAD_ADM_CONTROLS))) {
        let { enabled: e } = k.S.getCurrentConfig({ location: 'handleConnectionOpen' }, { autoTrackExposure: !0 });
        eZ.setOffloadAdmControls(e);
    }
    ((0, X.wt)({
        location: 'MediaEngineStore',
        autoTrackExposure: !1
    }) &&
        null !== t.mostRecentlyRequestedVoiceFilter &&
        (0, et.isDesktop)() &&
        (Q.Z.getLastInitAttemptMayHaveCrashed()
            ? (v.Z.dispatch({
                  type: 'AUDIO_SET_SELF_MUTE',
                  mute: !0,
                  context: ey.Yn.DEFAULT,
                  playSoundEffect: !0
              }),
              tY({ mostRecentlyRequestedVoiceFilter: null }))
            : n(358820).r5()),
        t1());
}
function t5(e) {
    let { mediaEngineState: t } = e;
    ((eH = t.settingsByContext), (eX = t.inputDevices), (eQ = t.outputDevices), (ty = t.appSupported), (to = t.krispModuleLoaded), (s = t.krispVersion), (ez = t.goLiveContext));
}
function t6() {
    i = null;
}
function t8(e) {
    switch (e.state) {
        case eh.hes.CONNECTING:
            tz();
            break;
        case eh.hes.RTC_CONNECTING:
            ((tn = !1), (tr = !1));
            break;
        case eh.hes.RTC_CONNECTED:
            tL();
            break;
        case eh.hes.DISCONNECTED:
            (no(), ns());
    }
    tZ.update();
}
function t7(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => (i === t.sessionId ? ((e$ = t.mute || t.suppress), (e2 = t.deaf), eZ.eachConnection(tw), tL((null == t.guildId || null == t.channelId || null == tf || tf === t.channelId) && e3), (tf = t.channelId), !0) : (__OVERLAY__ || t.userId !== eo.default.getId() || null != ed.Z.getChannelId() || tL(!1, null), e)), !1);
}
function t9(e) {
    let { mute: t } = e;
    ((e0 = t), eZ.eachConnection(tw));
}
function ne(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = tC(t);
    if (t === ey.Yn.DEFAULT && (W.Z.requestPermission(eg.Eu.AUDIO), e1)) return !1;
    ((r = !i && !r) || (i = !1),
        n || (e5 = !0),
        tY(
            {
                mute: r,
                deaf: i
            },
            t
        ),
        eZ.eachConnection(tw));
}
function nt(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    (tY({ mute: n }, t), r || (e5 = !0), eZ.eachConnection(tw));
}
function nn(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r
    } = e;
    if (t !== eE.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    t1(!0);
}
function nr(e) {
    let { context: t } = e;
    (tY({ deaf: !tC(t).deaf }, t), eZ.eachConnection(tw));
}
function ni(e) {
    let { context: t, userId: n } = e;
    if (n === eo.default.getId()) return;
    let { localMutes: r } = tC(t);
    (r[n] ? delete r[n] : (r[n] = !0), tY({ localMutes: r }, t), eZ.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t));
}
function na(e) {
    var t, n, r, i, a, o, s;
    let { context: l, userId: c, videoToggleState: u, persist: d, isAutomatic: _ } = e;
    f()(!(d && _), 'These are not allowed to both be true.');
    let p = u === eh.ZUi.DISABLED,
        { disabledLocalVideos: h } = tC(l),
        m = null != (t = h[c]) && t,
        g = tg.has(c),
        E = u === eh.ZUi.AUTO_ENABLED || u === eh.ZUi.MANUAL_ENABLED;
    (eA.info('disableVideo='.concat(p, ' currentlyDisabled=').concat(m, ' currentlyAutoDisabled=').concat(g, ', isVideoShown=').concat(E)), f()(!(g && !m), 'If you are auto-disabled, then you are also disabled.'));
    let b = p !== m,
        y = l === ey.Yn.DEFAULT,
        O = _ && b && y,
        v = d && b && y;
    eA.info('changed='.concat(b, ' isDefaultContext=').concat(y, ' isUpdateCausedByVideoHealthManager=').concat(O, ' isManualToggleByUser=').concat(v));
    let { videoToggleStateMap: I } = tC(l);
    if ((I[c] === eh.ZUi.AUTO_PROBING && u === eh.ZUi.AUTO_ENABLED && (0, Y.Z)(c, p ? ey.fC.AUTO_DISABLE : ey.fC.AUTO_ENABLE, E), (I[c] = u), tY({ videoToggleStateMap: I }, l, d), u === eh.ZUi.AUTO_PROBING ? null == (n = ed.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, !0) : null == (r = ed.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, !1), tE || (eA.info('isAutoDisableAllowed='.concat(tE, ' - disabling VideoHealthManager')), null == (a = ed.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()), O)) {
        if ((!p && !g) || (p && !tE)) return;
        ((0, Y.Z)(c, p ? ey.fC.AUTO_DISABLE : ey.fC.AUTO_ENABLE, E), p ? tg.add(c) : tg.delete(c));
    } else v && (g && !p ? (eA.info('disallowing auto-disable for this session because of manual override by user'), (tE = !1), null == (s = ed.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(), (0, Y.Z)(c, ey.fC.MANUAL_REENABLE, E)) : (0, Y.Z)(c, p ? ey.fC.MANUAL_DISABLE : ey.fC.MANUAL_ENABLE, E));
    (y && !p && tg.delete(c),
        p ? (h[c] = !0) : delete h[c],
        tY({ disabledLocalVideos: h }, l, d),
        eZ.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(c, null != (t = h[c]) && t);
        }, l));
}
function no() {
    if (0 === tg.size) return;
    let e = ey.Yn.DEFAULT,
        { disabledLocalVideos: t } = tC(e);
    (tg.forEach((n) => {
        (f()(t[n], 'If you are auto-disabled, then you are also disabled.'), delete t[n], eZ.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e));
    }),
        tg.clear(),
        tY({ disabledLocalVideos: t }, e, !1));
}
function ns() {
    let e = ey.Yn.DEFAULT,
        { videoToggleStateMap: t } = tC(e);
    for (let [e, n] of Object.entries(t)) n === eh.ZUi.AUTO_PROBING && delete t[e];
    tY({ videoToggleStateMap: t }, e, !1);
}
function nl(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === eo.default.getId()) return;
    let i = t === ey.Yn.STREAM ? ey.Yh : ey.Qx,
        { localVolumes: a } = tC(t);
    (r === i ? delete a[n] : (a[n] = r), tY({ localVolumes: a }, t), eZ.eachConnection((e) => e.setLocalVolume(n, r), t));
}
function nc(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: a } = tC(t);
    ((a[n] = {
        left: r,
        right: i
    }),
        tY({ localPans: a }, t),
        eZ.eachConnection((e) => e.setLocalPan(n, r, i), t));
}
function nu(e) {
    let { context: t, mode: n, options: r } = e;
    (tY(
        {
            mode: n,
            modeOptions: r
        },
        t
    ),
        eZ.eachConnection(tR),
        tZ.update());
}
function nd(e) {
    let { volume: t } = e;
    (tY({ inputVolume: tP(t) }), eZ.setInputVolume(t));
}
function nf(e) {
    let { volume: t } = e;
    (tY({ outputVolume: t }), eZ.setOutputVolume(t));
}
function n_(e) {
    let { id: t } = e;
    ((t = tQ(eX, t)), (eq = performance.now()), tY({ inputDeviceId: t }), eZ.setAudioInputDevice(t));
}
function np(e) {
    let { id: t } = e;
    (tY({ outputDeviceId: (t = tQ(eQ, t)) }), eZ.setAudioOutputDevice(t));
}
function nh(e) {
    let { id: t } = e;
    (tY({ videoDeviceId: (t = tQ(eJ, t)) }), tL());
}
function nm(e) {
    let { inputProfile: t } = e,
        n = tY({ activeInputProfile: t });
    (eZ.eachConnection((e) => {
        (tR(e), e.setAutomaticGainControl(n.automaticGainControl), e.setEchoCancellation(n.echoCancellation), e.setExperimentalEncoders(n.experimentalEncoders), e.setNoiseCancellation(n.noiseCancellation), e.setNoiseSuppression(n.noiseSuppression));
    }),
        eZ.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        tZ.update(),
        nN());
}
function ng(e) {
    return eK !== e.required && ((eK = e.required), e.required || eZ.interact(), !0);
}
function nE(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    (tJ(t), t$(n), t0(r));
}
function nb(e) {
    let { inputVolume: t, outputVolume: n } = e;
    tY({
        inputVolume: tP(t),
        outputVolume: n
    });
}
function ny(e) {
    var t;
    let n = tC(),
        r = eZ.getAudioSubsystem(),
        i = eZ.getAudioLayer(),
        a = tQ(eX, n.inputDeviceId),
        o = null == (t = eX[a]) ? void 0 : t.name;
    J.default.track(eh.rMx.VOICE_PROCESSING, {
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
function nO(e) {
    let t = tY({ echoCancellation: e.enabled });
    (eZ.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nN(), ny(e.location));
}
function nv(e) {
    nT(e.enabled);
}
function nI(e) {
    let t = tY({ sidechainCompressionStrength: e.strength });
    eZ.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function nT(e) {
    let t = tY({ sidechainCompression: e });
    eZ.setSidechainCompression(t.sidechainCompression);
}
function nS(e) {
    let { enabled: t, loopbackReason: n } = e;
    return (t ? tb.add(n) : tb.delete(n), nA(), nN());
}
function nA() {
    let { voiceFiltersPreProcessMute: e } = Z.Z.getCurrentConfig({ location: 'setMaybePreprocessMute' }, { autoTrackExposure: !0 }),
        t = e && !tb.has('voice_filter_preview') && !tb.has('mic_test');
    eZ.setMaybePreprocessMute(t);
}
function nN() {
    let e = tC(),
        t = tb.size > 0,
        n = e.inputDeviceId,
        r = el.Z.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        a = el.Z.hasNoiseSuppression(n) || e.noiseSuppression,
        o = el.Z.hasAutomaticGainControl(n) || e.automaticGainControl,
        s = e.noiseCancellation,
        l = null !== tl,
        c = tb.has('voice_filter') && 1 === tb.size;
    eZ.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: a,
        automaticGainControl: o,
        noiseCancellation: s,
        voiceFilters: l,
        loopbackUseAudioMode: c
    });
}
function nC(e) {
    let t = tY({ noiseSuppression: e.enabled });
    (eZ.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nN(), ny(e.location));
}
function nR(e) {
    let t = tY({ automaticGainControl: e.enabled });
    (eZ.eachConnection((e) => e.setAutomaticGainControl(t.automaticGainControl)), nN(), ny(e.location));
}
function nP(e) {
    let t = tY({ noiseCancellation: e.enabled });
    (eZ.eachConnection((e) => e.setNoiseCancellation(t.noiseCancellation)), nN(), ny(e.location));
}
function nw(e) {
    (K.Z.setKrispModelOverride(e.model), (c = e.model), nN());
}
function nD(e) {
    let t = tY({ experimentalEncoders: e.enabled });
    eZ.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
}
function nL(e) {
    var t, n;
    let { enabled: r } = e,
        i = tY({ hardwareEncoding: r });
    (eZ.eachConnection((e) => {
        var t;
        return e.setHardwareH264(null == (t = i.hardwareEncoding) || t);
    }),
        eZ.setH264Enabled(i.hardwareEncoding || i.openH264),
        eZ.setAv1Enabled(null == (t = i.hardwareEncoding) || t),
        eZ.setH265Enabled(null == (n = i.hardwareEncoding) || n));
}
function nx(e) {
    (tY({ silenceWarning: e.enabled }), tZ.update());
}
function nk(e) {
    eZ.setDebugLogging(e.enabled);
}
function nM(e) {
    let { level: t } = e;
    ((l = t), K.Z.setKrispSuppressionLevel(t));
}
function nj(e) {
    tY({ videoHook: e.enabled });
}
function nU(e) {
    tY({ experimentalSoundshare2: e.enabled });
}
function nG(e) {
    let { enabled: t } = e;
    tY({ useSystemScreensharePicker: t });
}
function nB(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = tY({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r
        });
    eZ.eachConnection((e) => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers));
}
function nV(e) {
    let { enabled: t } = e;
    (tY({ qos: t }), eZ.eachConnection((e) => e.setQoS(t)));
}
function nF() {
    tW();
}
function nZ(e) {
    let { inputDetected: t } = e;
    ((tt = t), !tn && tt && ((tn = !0), tZ.update()));
}
function nH(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === e1) return !1;
    ((e1 = n), eZ.eachConnection(tw));
}
function nY(e) {
    let { state: t, permissionType: n } = e,
        r = t === eg.PQ.ACCEPTED;
    switch (n) {
        case eg.Eu.AUDIO:
            ((th = !0), eZ.eachConnection(tw));
            break;
        case eg.Eu.CAMERA:
            !r && e3 && tL(!1);
            break;
        default:
            return !1;
    }
}
function nW() {
    return to || !1;
}
async function nK() {
    try {
        var e, t, n, i;
        await ei.ZP.ensureModule('discord_krisp');
        let a = ei.ZP.requireModule('discord_krisp');
        ((to = !0),
            (s = null == (e = a.getSdkVersion) ? void 0 : e.call(a)),
            (l = null != (i = null == (t = a.getSuppressionLevel) ? void 0 : t.call(a)) ? i : 100),
            null == (n = a.getNcModels) ||
                n.call(a).then((e) => {
                    ((ts = e), r.emitChange());
                }),
            r.emitChange());
    } catch (t) {
        (eA.warn('Failed to load Krisp module: '.concat(t.message)), er.Z.captureException(t));
        let e = ey.H3.INITIALIZED;
        if (t.message.includes(': ')) {
            let n = parseInt(t.message.substring(t.message.indexOf(': ') + 1));
            e = isNaN(n) || 0 === n ? ey.H3.INITIALIZED : n;
        }
        (J.default.track(eh.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), tY({ noiseCancellation: !1 }));
    } finally {
        ta = !1;
    }
}
function nz() {
    return ((0, et.isWindows)() && 'arm64' !== ei.ZP.architecture) || (0, et.isLinux)() || (0, et.isMac)();
}
function nq() {
    !nz() || __OVERLAY__ || ta || to ? ((0, et.isWeb)() && eZ.supports(ey.AN.NOISE_CANCELLATION) ? ((to = !0), r.emitChange()) : (0, et.isWeb)() && tY({ noiseCancellation: !1 })) : ((ta = !0), nK());
}
function nX(e) {
    let { enabled: t } = e;
    (J.default.track(eh.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != tl ? tl : null,
        enabled: t
    }),
        tY({ voiceFilterPlaybackEnabled: t }));
}
function nQ(e) {
    let { newVoiceFilterId: t } = e;
    (tY({ mostRecentlyRequestedVoiceFilter: t }), eZ.eachConnection((e) => e.setVoiceFilterId(t)));
}
function nJ() {
    tY({ mostRecentlyRequestedVoiceFilter: null });
}
function n$(e) {
    let { voiceFilterId: t } = e;
    ((tu = tl), (td = tc), (tl = t), (tc = null === t ? null : Date.now()));
}
function n0(e) {
    let t = e.bypassEnabled;
    (tY({ bypassSystemInputProcessing: t }), eZ.setAudioInputBypassSystemProcessing(t), ny(e.location));
}
function n1(e) {
    n2(e.subsystem);
}
function n2(e) {
    e === ey.iA.AUTOMATIC ? (tY({ automaticAudioSubsystem: !0 }), n3()) : (tY({ automaticAudioSubsystem: !1 }), eZ.setAudioSubsystem(e));
}
function n3() {
    eZ.queueAudioSubsystem(ey.iA.EXPERIMENTAL);
}
function n4(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && tL(i, null), null != t || null == n)) {
        ti = !1;
        return;
    }
    if (ti) return;
    ti = !0;
    let a = tC();
    (a.mute || a.deaf) &&
        (tY({
            deaf: !1,
            mute: !1
        }),
        eZ.eachConnection(tw));
}
function n5(e) {
    let { application: t } = e;
    eY.add(t.id);
}
function n6(e) {
    let { application: t } = e;
    eY.delete(t.id);
}
function n8(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case 'audio':
                ((eW = !1), eZ.eachConnection(tw));
                break;
            case 'video':
                tL(!1);
        }
}
function n7(e) {
    ((eW = e.enabled),
        e.unmute &&
            tY({
                mute: !1,
                deaf: !1
            }),
        eZ.eachConnection(tw));
}
function n9(e) {
    let { enabled: t } = e;
    (W.Z.requestPermission(eg.Eu.CAMERA), tL(t));
}
function re(e) {
    let { sourceId: t, applicationName: n, quality: i } = e,
        a = A.Z.isDecoupledGameClippingEnabled(),
        s = A.Z.getSettings().decoupledClipsEnabled;
    if (!a || !s || null == I.Z) return;
    let l = null,
        c = null,
        u = $.Z.getPidFromDesktopSource(t);
    ({ soundshareId: l, soundshareSession: c } = t2(u));
    let d = {
        desktopSource: {
            id: t,
            sourcePid: u,
            soundshareId: l,
            soundshareSession: c
        },
        quality: i
    };
    (null != o && o.desktopSource.id !== d.desktopSource.id && (eZ.setClipsSource(null), (0, et.isWindows)() && null != o.desktopSource.soundshareId && T.pn(o.desktopSource.soundshareId)), null != l && t3(l, c), (o = d));
    let f = tA(),
        _ = tC().videoHook;
    eZ.setClipsSource({
        desktopDescription: {
            id: o.desktopSource.id,
            soundshareId: o.desktopSource.soundshareId,
            useVideoHook: _,
            useGraphicsCapture: tU(),
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: tB(),
            videoHookStaleFrameTimeoutMs: ek,
            graphicsCaptureStaleFrameTimeoutMs: eM,
            hdrCaptureMode: f
        },
        quality: i,
        applicationName: n
    });
}
function rt(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((o = null), eZ.setClipsSource(null));
}
function rn(e) {
    var t, n, r, i;
    let { settings: a } = e;
    if ((null == a ? void 0 : a.desktopSettings) != null) {
        let e = null,
            r = null,
            { sourceId: i, sound: o } = a.desktopSettings,
            s = null != (t = a.context) ? t : ey.Yn.DEFAULT,
            l =
                null != (n = a.qualityOptions)
                    ? n
                    : {
                          resolution: 720,
                          frameRate: 30
                      },
            c = !1 === o ? null : $.Z.getPidFromDesktopSource(i);
        (et.isPlatformEmbedded && !0 === o && (({ soundshareId: e, soundshareSession: r } = t2(c)), null != e && t3(e, r)),
            tD(s),
            tL(s === ey.Yn.STREAM && e3, {
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
        let e = null != (r = a.context) ? r : ey.Yn.DEFAULT,
            { videoDeviceGuid: t, audioDeviceGuid: n } = a.cameraSettings,
            o = e === ey.Yn.STREAM && e3,
            s =
                null != (i = a.qualityOptions)
                    ? i
                    : {
                          resolution: 720,
                          frameRate: 30
                      };
        tL(o, {
            cameraSource: {
                videoDeviceGuid: t,
                audioDeviceGuid: n
            },
            quality: {
                resolution: s.resolution,
                frameRate: s.frameRate
            }
        });
    } else tL(e3, null);
}
function rr(e) {
    let { section: t } = e;
    return (t === eh.oAB.VOICE && tz(), !1);
}
function ri() {
    return (eZ.eachConnection(tM), !1);
}
function ra(e) {
    let { enabled: t } = e,
        n = tY({ openH264: t });
    (eZ.setH264Enabled(n.hardwareEncoding || n.openH264),
        eZ.eachConnection((e) => {
            var t;
            return e.setSoftwareH264(null == (t = n.openH264) || t);
        }));
}
function ro(e) {
    let { enabled: t } = e,
        n = tY({ aecDumpEnabled: t });
    eZ.setAecDump(n.aecDumpEnabled);
}
function rs(e) {
    let { state: t } = e,
        n = D.Z.isEnabled();
    if (t === eh.$7l.BACKGROUND && e3 && !n) ((e9 = !0), tL(!1));
    else {
        if (t !== eh.$7l.ACTIVE || !e9) return !1;
        ((e9 = !1), tL(!0));
    }
    return !0;
}
function rl(e) {
    eZ.eachConnection((t) => t.setBitRate(e.bitrate));
}
function rc() {
    if ((!e3 && null == a) || null != ed.Z.getRTCConnectionId()) return !1;
    tL(!1, null);
}
function ru() {
    return !!t_ && ((t_ = !1), !0);
}
function rd(e) {
    eZ.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function rf(e) {
    let { settings: t } = e;
    eZ.applyMediaFilterSettings(t).finally(() => {
        ((tp = !1), r.emitChange());
    });
}
function r_() {
    tp = !0;
}
function rp() {
    tp = !1;
}
function rh(e) {
    tv = e.enabled;
}
class rm extends (u = E.ZP.Store) {
    initialize() {
        (tj(),
            tH(),
            nq(),
            ns(),
            (ty = {
                [ey.AN.VIDEO]: eZ.supports(ey.AN.VIDEO),
                [ey.AN.DESKTOP_CAPTURE]: eZ.supports(ey.AN.DESKTOP_CAPTURE),
                [ey.AN.HYBRID_VIDEO]: eZ.supports(ey.AN.HYBRID_VIDEO)
            }),
            this.waitFor(eo.default, el.Z, ec.Z, eu.Z, ed.Z, L.ZP, W.Z.storage, q.Z, w.Z, A.Z));
    }
    supports(e) {
        return eZ.supports(e);
    }
    supportsInApp(e) {
        return ty[e] || eZ.supports(e);
    }
    isSupported() {
        return eZ.supported();
    }
    isExperimentalEncodersSupported() {
        return eZ.supports(ey.AN.EXPERIMENTAL_ENCODERS);
    }
    isNoiseSuppressionSupported() {
        return eZ.supports(ey.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return nW();
    }
    isNoiseCancellationError() {
        return t_;
    }
    isAutomaticGainControlSupported() {
        return eZ.supports(ey.AN.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !tF() && (eZ.supports(ey.AN.LEGACY_AUDIO_SUBSYSTEM) || eZ.supports(ey.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return eZ.supports(ey.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && 'experimental' === eZ.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return nW();
    }
    isAecDumpSupported() {
        return eZ.supports(ey.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return eZ.supports(ey.AN.VIDEO) && eZ.supports(ey.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        let t = (null == (e = ec.Z.getChannel(tf)) ? void 0 : e.type) === eh.d4z.GUILD_STAGE_VOICE,
            n = r.getHardwareEncoding();
        return !t && n && G.Z.simulcastEnabled();
    }
    getAecDump() {
        return tC().aecDumpEnabled;
    }
    getMediaEngine() {
        return eZ;
    }
    getVideoComponent() {
        return eZ.Video;
    }
    getCameraComponent() {
        return eZ.Camera;
    }
    getKrispSuppressionLevel() {
        return null != l ? l : 100;
    }
    isEnabled() {
        return eW;
    }
    isMute() {
        return this.isSelfMute() || e$;
    }
    isDeaf() {
        return this.isSelfDeaf() || e2;
    }
    hasContext(e) {
        return null != eH[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ey.Yn.DEFAULT;
        return e === ey.Yn.DEFAULT && e0;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ey.Yn.DEFAULT;
        return !this.isEnabled() || tC(e).mute || !W.Z.didHavePermission(eg.Eu.AUDIO) || this.isSelfDeaf(e) || (e === ey.Yn.DEFAULT && e1);
    }
    shouldSkipMuteUnmuteSound() {
        return e5;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        e5 = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ey.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && el.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return tv;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ey.Yn.DEFAULT;
        return !this.isSupported() || tC(e).deaf;
    }
    isVideoEnabled() {
        return e3 && te;
    }
    isVideoAvailable() {
        return Object.values(eJ).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ey.Yn.STREAM;
        return ez === e && null != a;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ey.Yn.STREAM;
        return ez === t && null != a && (null == (e = a.desktopSource) ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ey.Yn.DEFAULT;
        return e !== eo.default.getId() && (tC(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return eZ.supports(ey.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ey.Yn.DEFAULT;
        return null != (t = tC(n).disabledLocalVideos[e]) && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ey.Yn.DEFAULT;
        return null != (t = tC(n).videoToggleStateMap[e]) ? t : eh.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ey.Yn.DEFAULT;
        return t === ey.Yn.DEFAULT && tg.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ey.Yn.DEFAULT;
        return e === ey.Yn.DEFAULT && tg.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tp;
    }
    isNativeAudioPermissionReady() {
        return th;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return ez;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return eq;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ey.Yn.DEFAULT,
            n = tC(t).localPans[e];
        return null != n ? n : ex;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ey.Yn.DEFAULT,
            n = t === ey.Yn.STREAM ? ey.Yh : ey.Qx,
            r = tC(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return tC().inputVolume;
    }
    getOutputVolume() {
        return tC().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ey.Yn.DEFAULT;
        return tC(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ey.Yn.DEFAULT;
        return tC(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return tl;
    }
    getActiveVoiceFilterAppliedAt() {
        return tc;
    }
    getPreviousVoiceFilter() {
        return tu;
    }
    getPreviousVoiceFilterAppliedAt() {
        return td;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return tC().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return tC().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            p().each(eH, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i }
                } = t;
                r === eh.pM4.PUSH_TO_TALK && eY.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return tQ(eX, tC().inputDeviceId);
    }
    getOutputDeviceId() {
        return tQ(eQ, tC().outputDeviceId);
    }
    getVideoDeviceId() {
        return tQ(eJ, tC().videoDeviceId);
    }
    getInputDevices() {
        return eX;
    }
    getOutputDevices() {
        return eQ;
    }
    getVideoDevices() {
        return eJ;
    }
    getEchoCancellation() {
        let e = tC();
        return el.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return tC().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return tC().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return tC().h265Enabled;
    }
    getLoopback() {
        return tb.size > 0;
    }
    getLoopbackReasons() {
        return tb;
    }
    getNoiseSuppression() {
        let e = tC();
        return el.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tC();
        return el.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return tC().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return tC().noiseCancellation;
    }
    getExperimentalEncoders() {
        return tC().experimentalEncoders;
    }
    getHardwareEncoding() {
        var e;
        return null == (e = tC().hardwareEncoding) || e;
    }
    getEnableSilenceWarning() {
        return tC().silenceWarning;
    }
    getDebugLogging() {
        return eZ.getDebugLogging();
    }
    getQoS() {
        return tC().qos;
    }
    getAttenuation() {
        return tC().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return tC().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return tC().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return tV() && tC().automaticAudioSubsystem ? ey.iA.AUTOMATIC : eZ.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return eZ.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return tC().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eb._.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ey.Yn.DEFAULT;
        return tC(e);
    }
    getState() {
        return {
            settingsByContext: eH,
            inputDevices: eX,
            outputDevices: eQ,
            appSupported: ty,
            krispModuleLoaded: to,
            krispVersion: s,
            krispSuppressionLevel: l,
            goLiveSource: a,
            goLiveContext: ez
        };
    }
    getInputDetected() {
        return tt;
    }
    getNoInputDetectedNotice() {
        return tr;
    }
    getPacketDelay() {
        return et.isPlatformEmbedded || this.getMode() !== eh.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        eZ.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return eK;
    }
    getVideoHook() {
        return tC().videoHook;
    }
    supportsVideoHook() {
        return eZ.supports(ey.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tC().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e);
    }
    supportsExperimentalSoundshare() {
        return eZ.supports(ey.AN.EXPERIMENTAL_SOUNDSHARE) && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, em.I9);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = tC().useSystemScreensharePicker,
            n = (0, et.isLinux)() || ((0, et.isMac)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, em.jR));
        return e && (null != t ? t : n);
    }
    supportsSystemScreensharePicker() {
        return eZ.supports(ey.AN.NATIVE_SCREENSHARE_PICKER);
    }
    getOpenH264() {
        return tC().openH264;
    }
    getEverSpeakingWhileMuted() {
        return e6;
    }
    getSpeakingWhileMuted() {
        return e8;
    }
    getKrispModelOverride() {
        return c;
    }
    getKrispModels() {
        return ts;
    }
    getKrispVadActivationThreshold() {
        var e;
        return null != (e = tC().modeOptions.vadKrispActivationThreshold) ? e : eL;
    }
    hasActiveCallKitCall() {
        return tI;
    }
    setHasActiveCallKitCall(e) {
        tI = e;
    }
    supportsScreenSoundshare() {
        return (0, et.isMac)() ? eZ.supports(ey.AN.SOUNDSHARE) && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, em.yG) && tB() : (0, et.isWindows)() ? eZ.supports(ey.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, et.isLinux)() && eZ.supports(ey.AN.SCREEN_SOUNDSHARE);
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ey.Yn.DEFAULT,
            t = this.supports(ey.AN.VIDEO)
                ? [
                      {
                          rid: '100',
                          type: e === ey.Yn.DEFAULT ? ey.Tr.VIDEO : ey.Tr.SCREEN,
                          quality: ey.y7
                      }
                  ]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === ey.Yn.DEFAULT || this.goLiveSimulcastEnabled()) &&
                t.push({
                    rid: '50',
                    type: e === ey.Yn.DEFAULT ? ey.Tr.VIDEO : ey.Tr.SCREEN,
                    quality: ey.LD
                }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: !1 };
        return ((0, et.isWeb)() && (e.fetchDave = B.N.getCurrentConfig({ location: 'MediaEngineStore fetchAsyncResources' }).loadWasmModule), eZ.fetchAsyncResources(e));
    }
    getSupportedSecureFramesProtocolVersion() {
        if ((0, et.isWeb)()) {
            let { useWasmModule: e } = B.N.getCurrentConfig({ location: 'MediaEngineStore getSupportedSecureFramesProtocolVersion' });
            if (!e) return 0;
        }
        let e = eZ.getSupportedSecureFramesProtocolVersion(),
            t = B.m.getCurrentConfig({ location: 'MediaEngineStore' });
        return (114 === e && (e = 1), t.canSupportDaveProtocol && e >= t.protocolVersionFloor ? e : 0);
    }
    hasClipsSource() {
        return null != o;
    }
    getGpuBrand() {
        return tO;
    }
}
function rg(e) {
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
ev(rm, 'displayName', 'MediaEngineStore');
let rE = (r = new rm(v.Z, {
    VOICE_CHANNEL_SELECT: n4,
    VOICE_STATE_UPDATES: t7,
    CONNECTION_OPEN: t4,
    CONNECTION_CLOSED: t6,
    RTC_CONNECTION_STATE: t8,
    AUDIO_SET_TEMPORARY_SELF_MUTE: t9,
    AUDIO_TOGGLE_SELF_MUTE: ne,
    AUDIO_SET_SELF_MUTE: nt,
    AUDIO_TOGGLE_SELF_DEAF: nr,
    AUDIO_TOGGLE_LOCAL_MUTE: ni,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: na,
    AUDIO_SET_LOCAL_VOLUME: nl,
    AUDIO_SET_LOCAL_PAN: nc,
    AUDIO_SET_MODE: nu,
    AUDIO_SET_INPUT_VOLUME: nd,
    AUDIO_SET_OUTPUT_VOLUME: nf,
    AUDIO_SET_INPUT_DEVICE: n_,
    AUDIO_SET_OUTPUT_DEVICE: np,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: nm,
    AUDIO_SET_ECHO_CANCELLATION: nO,
    AUDIO_SET_SIDECHAIN_COMPRESSION: nv,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nI,
    AUDIO_SET_LOOPBACK: nS,
    AUDIO_SET_NOISE_SUPPRESSION: nC,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nR,
    AUDIO_SET_NOISE_CANCELLATION: nP,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: nw,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: nx,
    AUDIO_SET_DEBUG_LOGGING: nk,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: nM,
    MEDIA_ENGINE_SET_VIDEO_HOOK: nj,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: nU,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: nG,
    AUDIO_SET_ATTENUATION: nB,
    AUDIO_SET_QOS: nV,
    MEDIA_ENGINE_DEVICES: nE,
    AUDIO_VOLUME_CHANGE: nb,
    AUDIO_RESET: nF,
    AUDIO_INPUT_DETECTED: nZ,
    AUDIO_SET_SUBSYSTEM: n1,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: n0,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: n7,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: n9,
    MEDIA_ENGINE_PERMISSION: n8,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rn,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nh,
    MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nD,
    MEDIA_ENGINE_INTERACTION_REQUIRED: ng,
    USER_SETTINGS_MODAL_INIT: rr,
    USER_SETTINGS_MODAL_SET_SECTION: rr,
    CERTIFIED_DEVICES_SET: ri,
    RPC_APP_CONNECTED: n5,
    RPC_APP_DISCONNECTED: n6,
    OVERLAY_INITIALIZE: t5,
    MEDIA_ENGINE_SET_OPEN_H264: ra,
    MEDIA_ENGINE_SET_HARDWARE_ENCODING: nL,
    APP_STATE_UPDATE: rs,
    SET_CHANNEL_BITRATE: rl,
    SET_VAD_PERMISSION: nH,
    SET_NATIVE_PERMISSION: nY,
    SET_CHANNEL_VIDEO_QUALITY_MODE: rd,
    MEDIA_ENGINE_SET_AEC_DUMP: ro,
    CHANNEL_DELETE: rc,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: ru,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rf,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: r_,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rp,
    USER_SETTINGS_PROTO_UPDATE: nn,
    CLIPS_INIT: re,
    CLIPS_SETTINGS_UPDATE: rt,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rh,
    VOICE_FILTER_REQUEST_SWITCH: nQ,
    VOICE_FILTER_LOOPBACK_TOGGLE: nX,
    VOICE_FILTER_APPLIED: n$,
    VOICE_FILTER_DOWNLOAD_FAILED: nJ,
    VOICE_FILTER_APPLY_FAILED: nJ
}));
