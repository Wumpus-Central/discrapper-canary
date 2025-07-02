let r, i, a, o, s, l, c;
(n.d(t, { Z: () => rb }), n(388685), n(953529), n(457542), n(539854), n(642613), n(49124), n(337869));
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
    B = n(585360),
    V = n(529558),
    F = n(111672),
    Z = n(441167),
    H = n(580930),
    Y = n(787517),
    W = n(338336),
    K = n(751571),
    z = n(311473),
    q = n(725380),
    X = n(581883),
    Q = n(875527),
    J = n(420439),
    $ = n(626135),
    ee = n(12647),
    et = n(70956),
    en = n(358085),
    er = n(747268),
    ei = n(960048),
    ea = n(998502),
    eo = n(13140),
    es = n(314897),
    el = n(967368),
    ec = n(463395),
    eu = n(592125),
    ed = n(858340),
    ef = n(19780),
    e_ = n(704806),
    ep = n(594174),
    eh = n(631768),
    em = n(981631),
    eg = n(70722),
    eE = n(761274),
    eb = n(526761),
    ey = n(345655),
    eO = n(65154),
    ev = n(388032);
function eI(e, t, n) {
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
function eT(e) {
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
                eI(e, t, n[t]);
            }));
    }
    return e;
}
function eS(e, t) {
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
function eA(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eS(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eN = new C.Z('MediaEngineStore'),
    eC = 'MediaEngineStore',
    eR = 4,
    eP = 1,
    ew = 1,
    eD = 1,
    eL = 1,
    ex = 0.5,
    ek = {
        left: 1,
        right: 1
    },
    eM = 500,
    ej = 5 * et.Z.Millis.SECOND,
    eU = -60,
    eG = 100,
    eB = 2 * et.Z.Millis.SECOND,
    eV = 0;
function eF() {
    return {
        mode: em.pM4.VOICE_ACTIVITY,
        modeOptions: {
            threshold: eU,
            autoThreshold: en.isPlatformEmbedded || __OVERLAY__,
            vadUseKrisp: !0,
            vadKrispActivationThreshold: ex,
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
        inputVolume: eO.Qx,
        outputVolume: eO.Qx,
        inputDeviceId: eO.w5,
        outputDeviceId: eO.w5,
        videoDeviceId: eO.w5,
        qos: !1,
        qosMigrated: !1,
        videoHook: eH.supports(eO.AN.VIDEO_HOOK),
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
let eZ = {
        [ey._.CUSTOM]: {},
        [ey._.VOICE_ISOLATION]: {
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
        [ey._.STUDIO]: {
            mode: em.pM4.VOICE_ACTIVITY,
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
    eH = (0, b.Mt)((0, b.jj)());
eN.enableNativeLogger(!0);
let eY = {},
    eW = new Set([eO.Yn.DEFAULT]),
    eK = eH.supports(eO.AN.AUTO_ENABLE),
    ez = !1,
    eq = eO.Yn.STREAM,
    eX = performance.now(),
    eQ = { [eO.w5]: tX('No Input Devices') },
    eJ = { [eO.w5]: tX('No Output Devices') },
    e$ = { [eO.w5]: tX('No Video Devices') },
    e0 = !1,
    e1 = !1,
    e2 = !1,
    e3 = !1,
    e4 = !1,
    e5 = eO.Av,
    e6 = !1,
    e8 = !1,
    e7 = !1,
    e9 = new O.V7(),
    te = !1,
    tt = !1,
    tn = null,
    tr = !1,
    ti = !1,
    ta = !1,
    to = !1,
    ts = !1,
    tl = [],
    tc = null,
    tu = null,
    td = null,
    tf = null,
    t_ = null,
    tp = !1,
    th = !1,
    tm = !1;
(K.Z.hasPermission(eE.Eu.AUDIO, { showAuthorizationError: !1 }), K.Z.hasPermission(eE.Eu.CAMERA, { showAuthorizationError: !1 }));
let tg = !1,
    tE = new Set(),
    tb = tg,
    ty = new Set(),
    tO = {},
    tv = null,
    tI = !0,
    tT = !1,
    tS = {},
    tA = 5 * et.Z.Millis.SECOND;
function tN() {
    var e, t;
    return null != (t = null == (e = ep.default.getCurrentUser()) ? void 0 : e.isStaff()) && t ? 'always' : er.Z === g.R.CANARY ? 'permittedDevicesOnly' : 'never';
}
function tC() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eO.Yn.DEFAULT,
        t = eY[e];
    return (null == t && ((t = eF()), (eY[e] = t)), t);
}
function tR() {
    var e, t, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eO.Yn.DEFAULT,
        i = tC(r),
        a = eZ[null != (e = i.activeInputProfile) ? e : ey._.CUSTOM];
    return eA(eT({}, i, a), { modeOptions: eT({}, null != (t = i.modeOptions) ? t : {}, null != (n = a.modeOptions) ? n : {}) });
}
function tP(e) {
    var t;
    let n = tR(e.context);
    e.setInputMode(n.mode, {
        vadThreshold: n.modeOptions.threshold,
        vadAutoThreshold: n.modeOptions.autoThreshold,
        vadUseKrisp: n.modeOptions.vadUseKrisp && nK(),
        vadKrispActivationThreshold: null != (t = n.modeOptions.vadKrispActivationThreshold) ? t : 0.5,
        vadLeading: n.modeOptions.vadLeading,
        vadTrailing: n.modeOptions.vadTrailing,
        pttReleaseDelay: n.modeOptions.delay
    });
}
function tw(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eO.Qx;
    return p().clamp(e, 0, t);
}
function tD(e) {
    let t = tR(e.context),
        n = !eK || t.mute || t.deaf;
    (e.context === eO.Yn.DEFAULT ? (n = n || e0 || e1 || e2 || !K.Z.didHavePermission(eE.Eu.AUDIO)) : e.context === eO.Yn.STREAM && (n = !0), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eO.Yn.DEFAULT && S.Z.updateNativeMute());
}
function tL(e) {
    e !== eq && (null != a && eH.setGoLiveSource(null, eq), (eq = e));
}
function tx() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e4,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        s = a;
    if (((null == s ? void 0 : s.desktopSource) != null && s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? void 0 : e.id) && (null != s.desktopSource.soundshareId && (0, en.isWindows)() && T.pn(s.desktopSource.soundshareId), eH.setGoLiveSource(null, eq)), (null == s ? void 0 : s.cameraSource) != null && (s.cameraSource.videoDeviceGuid !== (null == o || null == (t = o.cameraSource) ? void 0 : t.videoDeviceGuid) || s.cameraSource.audioDeviceGuid !== (null == o || null == (n = o.cameraSource) ? void 0 : n.audioDeviceGuid)) && eH.setGoLiveSource(null, eq), (e4 || i) && ((e5 = (e4 = i) ? tJ(e$, tR().videoDeviceId) : eO.Av), eH.setVideoInputDevice(e5)), (a = o), null != o)) {
        let e = {
            resolution: o.quality.resolution,
            frameRate: o.quality.frameRate
        };
        if (null != o.desktopSource) {
            let t = tN(),
                n = tR().videoHook,
                i = tG(),
                a = i ? (tB() && (0, Y.R)('MediaEngineStore_updateVideo').enabled ? eg.zj : eg.ZM) : 0;
            eH.setGoLiveSource(
                {
                    desktopDescription: {
                        id: o.desktopSource.id,
                        soundshareId: o.desktopSource.soundshareId,
                        useVideoHook: n,
                        useGraphicsCapture: i,
                        useGraphicsCaptureApiLevel: a,
                        useLoopback: r.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: tV(),
                        videoHookStaleFrameTimeoutMs: eM,
                        graphicsCaptureStaleFrameTimeoutMs: ej,
                        hdrCaptureMode: t
                    },
                    quality: e
                },
                eq
            );
        }
        null != o.cameraSource &&
            eH.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: o.cameraSource.audioDeviceGuid
                    },
                    quality: e
                },
                eq
            );
    }
}
function tk(e, t, n, r) {
    var i;
    let a = null != (i = null == e ? void 0 : e.soundshareSession) ? i : '';
    null == tS[a] && (tS[a] = new Set());
    let o = null != t && !tS[a].has(t);
    (o && tS[a].add(t),
        (null == t || o) &&
            $.default.track(
                em.rMx.SOUNDSHARE_FAILED,
                eT(
                    {
                        soundshare_failure_code: t,
                        soundshare_failure_reason: n,
                        soundshare_failure_will_retry: r
                    },
                    (0, x.Z)(e)
                )
            ));
}
function tM(e) {
    switch (e) {
        case eO.H3.CPU_OVERUSE:
            return P.Nk.NoiseCancellerCpuOveruse;
        case eO.H3.FAILED:
            return P.Nk.NoiseCancellerFailed;
        case eO.H3.VAD_CPU_OVERUSE:
            return P.Nk.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function tj(e) {
    let t = tR(),
        n = t.inputDeviceId;
    if ((e.setEchoCancellation(ec.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(ec.Z.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(ec.Z.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), e.setVoiceFilterId(tc), (0, en.isWeb)())) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function tU() {
    (eH.on(b.aB.Connection, (e) => {
        var t, n;
        (tP(e), tD(e), tj(e));
        let i = tR();
        (e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers), e.setQoS(i.qos), e.setExperimentalEncoders(i.experimentalEncoders), e.setHardwareH264(null == (t = i.hardwareEncoding) || t), e.setSoftwareH264(null == (n = i.openH264) || n));
        let o = ef.Z.getGuildId(),
            { muteBeforeProcessing: s, pttBeforeProcessing: l, skipEncode: c } = (null != o ? U.Z : j.Z).getCurrentConfig(eT({ location: 'setupMediaEngine' }, null != o && { guildId: o }), { autoTrackExposure: !0 });
        (s && e.setExperimentFlag(eO.V8.MUTE_BEFORE_PROCESSING, !0), l && e.setExperimentFlag(eO.V8.PTT_BEFORE_PROCESSING, !0), c && e.setExperimentFlag(eO.V8.SKIP_ENCODE, !0));
        let u = !1,
            d = !0;
        if ((e.setExperimentFlag(eO.V8.RESET_DECODER_ON_ERRORS, !0), u && e.setExperimentFlag(eO.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0), d && e.setExperimentFlag(eO.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0), e.context === eO.Yn.STREAM)) {
            let { simulcastEnabled: t, lqStreamBitrate: n } = G.Z.getConfig();
            e.configureGoLiveSimulcast(t, n);
            let r = (0, B.k)({
                location: 'setupMediaEngine',
                autoTrackExposure: !0
            }).enabled;
            e.setGoLiveUsePixelCounts(r);
        }
        ((0, en.isWindows)() ? ((null == tv ? void 0 : tv.startsWith('NVIDIA')) || (null == tv ? void 0 : tv.startsWith('AMD')) ? e.setExperimentFlag(eO.V8.SIGNAL_AV1, !0) : e.setExperimentFlag(eO.V8.SIGNAL_AV1_DECODE, !0)) : ((0, en.isMac)() || (0, en.isLinux)()) && e.setExperimentFlag(eO.V8.SIGNAL_AV1_DECODE, !0), (0, en.isWindows)() && e.setExperimentFlag(eO.V8.SIGNAL_AV1_HARDWARE_DECODE, !0), eH.setHasFullbandPerformance((0, R.Z)()));
        let f = (0, M.D)('setupMediaEngine').enabled;
        if ((e.setRemoteAudioHistory(1000 * !!f), (0, N.Z)(r))) {
            let t = A.Z.getSettings();
            e.setExperimentFlag(eO.V8.STREAMER_CLIP, t.clipsEnabled);
            let { enableViewerClipping: n } = Z.Z.getCurrentConfig({ location: 'f627ab_15' }, { autoTrackExposure: !1 });
            (e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eO.ux));
        }
        for (let t of ((i = tR(e.context)), e.setPostponeDecodeLevel(eG), Object.keys(i.localMutes))) t !== es.default.getId() && e.setLocalMute(t, i.localMutes[t]);
        for (let t of Object.keys(i.localVolumes)) t !== es.default.getId() && e.setLocalVolume(t, i.localVolumes[t]);
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
            e.context === eO.Yn.DEFAULT &&
                ((e8 = !1),
                (e7 = !1),
                e.on(b.Sh.SpeakingWhileMuted, () => {
                    ((e8 = !0),
                        (e7 = !0),
                        r.emitChange(),
                        e9.stop(),
                        e9.start(eB, () => {
                            ((e7 = !1), r.emitChange());
                        }));
                })),
            e.on(b.Sh.DesktopSourceEnd, () => {
                v.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                    settings: { context: e.context }
                });
            }),
            e.on(b.Sh.SoundshareAttached, () => {
                (null == a ? void 0 : a.desktopSource) != null && $.default.track(em.rMx.SOUNDSHARE_ATTACHED, (0, x.Z)(null == a ? void 0 : a.desktopSource));
            }),
            e.on(b.Sh.SoundshareFailed, (e) => {
                let { failureCode: t, failureReason: n, willRetry: r } = e;
                tk(null == a ? void 0 : a.desktopSource, t, n, r);
            }),
            e.on(b.Sh.SoundshareSpeaking, () => {
                (null == a ? void 0 : a.desktopSource) != null && ($.default.track(em.rMx.SOUNDSHARE_TRANSMITTING, (0, x.Z)(null == a ? void 0 : a.desktopSource)), null != ed.Z.getHookError(em.K3D.SOUND) && v.Z.wait(() => v.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
            }));
        let _ = new O.V7();
        (e.on(b.Sh.SoundshareTrace, (e) => {
            switch (e.type) {
                case 'soundshare_attach_requested':
                    _.start(tA, () => {
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
                        (tk(null == a ? void 0 : a.desktopSource, n, t, r),
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
                    $.default.track(
                        em.rMx.VIDEOHOOK_INITIALIZED,
                        eT(
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
                (eN.warn('noisecancellererror event: '.concat(e)),
                    (0, P.kr)({
                        type: P.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tM(e)
                    }),
                    (tp = !0),
                    $.default.track(em.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
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
                (eN.warn('voiceactivitydetectorerror event: '.concat(e)),
                    (0, P.kr)({
                        type: P.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tM(e)
                    }),
                    $.default.track(em.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    v.Z.dispatch({
                        type: 'AUDIO_SET_MODE',
                        context: eO.Yn.DEFAULT,
                        mode: em.pM4.VOICE_ACTIVITY,
                        options: eA(eT({}, tR(eO.Yn.DEFAULT).modeOptions), { vadUseKrisp: !1 })
                    }),
                    v.Z.dispatch({
                        type: 'MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR',
                        code: e
                    }));
            }),
            e.on(b.Sh.SdpError, (e, t, n, r) => {
                $.default.track(em.rMx.SDP_ERROR, {
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
            e.setBitRate(el.Z.bitrate),
            e.applyVideoQualityMode(eh.Z.mode));
    }),
        eH.on(b.aB.DeviceChange, (e, t, n) => {
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_DEVICES',
                inputDevices: e,
                outputDevices: t,
                videoDevices: n
            });
        }),
        eH.on(b.aB.VolumeChange, (e, t) => {
            v.Z.dispatch({
                type: 'AUDIO_VOLUME_CHANGE',
                inputVolume: e,
                outputVolume: t
            });
        }),
        eH.on(b.aB.DesktopSourceEnd, () => {
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                settings: null
            });
        }),
        eH.on(b.aB.AudioPermission, (e) => {
            ((tm = !0),
                v.Z.dispatch({
                    type: 'MEDIA_ENGINE_PERMISSION',
                    kind: 'audio',
                    granted: e
                }));
        }),
        eH.on(b.aB.VideoPermission, (e) => {
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_PERMISSION',
                kind: 'video',
                granted: e
            });
        }),
        eH.on(b.aB.WatchdogTimeout, async () => {
            let e;
            try {
                await ee.Z.submitLiveCrashReport({ message: { message: 'Voice Watchdog Timeout' } });
            } catch (t) {
                'number' == typeof t.status && (e = t.status);
            }
            (eN.warn('Watchdog timeout, report submission status: '.concat(null != e ? e : 200)), $.default.track(em.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e }));
        }),
        eH.on(b.aB.VideoInputInitialized, (e) => {
            $.default.track(em.rMx.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * et.Z.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: ef.Z.getMediaSessionId(),
                rtc_connection_id: ef.Z.getRTCConnectionId()
            });
        }),
        eH.on(b.aB.AudioInputInitialized, (e) => {
            $.default.track(em.rMx.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * et.Z.Millis.SECOND),
                rtc_connection_id: ef.Z.getRTCConnectionId()
            });
        }),
        eH.on(b.aB.ClipsRecordingRestartNeeded, () => {
            v.Z.dispatch({ type: 'CLIPS_RESTART' });
        }),
        eH.on(b.aB.ClipsInitFailure, (e, t) => {
            v.Z.wait(() => {
                v.Z.dispatch({
                    type: 'CLIPS_INIT_FAILURE',
                    errMsg: e,
                    applicationName: t
                });
            });
        }),
        eH.on(b.aB.ClipsRecordingEnded, (e, t) => {
            var n, r;
            (null == o || null == (n = o.desktopSource) ? void 0 : n.id) === e && (null != t && (null == a || null == (r = a.desktopSource) ? void 0 : r.soundshareId) !== t && T.pn(t), (o = null));
        }),
        eH.on(b.aB.NativeScreenSharePickerUpdate, (e, t) => {
            v.Z.dispatch({
                type: 'NATIVE_SCREEN_SHARE_PICKER_UPDATE',
                existing: e,
                content: t
            });
        }),
        eH.on(b.aB.NativeScreenSharePickerCancel, (e) => {
            v.Z.dispatch({
                type: 'NATIVE_SCREEN_SHARE_PICKER_CANCEL',
                existing: e
            });
        }),
        eH.on(b.aB.NativeScreenSharePickerError, (e) => {
            v.Z.dispatch({
                type: 'NATIVE_SCREEN_SHARE_PICKER_ERROR',
                error: e
            });
        }),
        eH.on(b.aB.AudioDeviceModuleError, (e, t, n) => {
            $.default.track(em.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                audio_device_module: e,
                code: t,
                device_name: n
            });
        }),
        eH.on(b.aB.VideoCodecError, (e) => {
            let t = 'encode' === e.mode ? P.u.VIDEO_ENCODE_ERROR : P.u.VIDEO_DECODE_ERROR,
                n = {
                    videoCodec: e.codecStandard,
                    errorMessage: e.message
                };
            (0, P.kr)(t === P.u.VIDEO_ENCODE_ERROR ? eA(eT({ type: t }, n), { videoEncoder: e.implName }) : eA(eT({ type: t }, n), { videoDecoder: e.implName }));
        }),
        eH.on(b.aB.ConnectionStats, (e) => {
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_CONNECTION_STATS',
                connectionStats: e.map((e) => {
                    let { stats: t, connection: n } = e;
                    return {
                        stats: t,
                        mediaEngineConnectionId: n.mediaEngineConnectionId,
                        version: eV++,
                        context: n.context
                    };
                })
            });
        }),
        eH.on(b.aB.VoiceQueueMetrics, (e) => {
            let t = rE(e);
            null !== t && $.default.track(em.rMx.VOICE_QUEUE_METRICS, t);
        }),
        eH.setOnVideoContainerResized((e, t, n) => {
            v.Z.wait(() =>
                v.Z.dispatch({
                    type: 'VIDEO_SIZE_UPDATE',
                    streamId: e,
                    width: t,
                    height: n
                })
            );
        }),
        tH.reset(),
        (0, e_.q)().then((e) => {
            null != e && (tv = e.gpu_brand);
        }));
}
function tG() {
    return (0, en.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eg.c5);
}
function tB() {
    return (0, en.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eg.sN);
}
function tV() {
    return (0, en.isMac)() && eH.supports(eO.AN.SCREEN_CAPTURE_KIT) && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eg.C7);
}
function tF() {
    return (0, en.isWindows)() && eH.supports(eO.AN.AUTOMATIC_AUDIO_SUBSYSTEM) && eH.supports(eO.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH);
}
function tZ() {
    return eH.supports(eO.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
let tH = new (class {
    start() {
        this.started || ((this.started = !0), eH.on(b.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            eH.removeListener(b.aB.Silence, this.handleSilence),
            v.Z.dispatch({
                type: 'AUDIO_INPUT_DETECTED',
                inputDetected: null
            }));
    }
    update() {
        let e = tR();
        !tr && ef.Z.getState() === em.hes.RTC_CONNECTED && e.mode === em.pM4.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop();
    }
    reset() {
        (this.stop(), this.update());
    }
    constructor() {
        (eI(this, 'stateChangeTimeout', void 0),
            eI(this, 'noVoiceTimeout', 5000),
            eI(this, 'voiceTimeout', 1500),
            eI(this, 'started', !1),
            eI(this, 'handleSilence', (e) => {
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
                                    e && (ti = !0)));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout
                    )));
            }));
    }
})();
function tY() {
    var e;
    let t = y.K.get('audio');
    (null != t && (y.K.set(eC, { [eO.Yn.DEFAULT]: t }), y.K.remove('audio')),
        (eY = null != (e = y.K.get(eC)) ? e : {}),
        p().each(eY, (e) => {
            if ((p().defaultsDeep(e, eF()), null != e.modeOptions && 'string' == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, eo.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== eR && ((e.vadUseKrispSettingVersion = eR), (e.modeOptions.vadUseKrisp = !0)), e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)), !e.vadThrehsoldMigrated)) {
                var t;
                ((e.vadThrehsoldMigrated = !0), (null == (t = e.modeOptions) ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = eU));
            }
            ((0, en.isWeb)() ? e.ncUseKrispjsSettingVersion !== ew && ((e.ncUseKrispjsSettingVersion = ew), (e.noiseSuppression = !1), (e.noiseCancellation = !0)) : e.ncUseKrispSettingVersion !== eP && ((e.ncUseKrispSettingVersion = eP), (e.noiseSuppression = !1), (e.noiseCancellation = !0)), e.hardwareEnabledVersion !== eD && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = eD)), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264));
        }),
        tz());
}
function tW(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eO.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = tC(t);
    return (Object.assign(r, e), !__OVERLAY__ && n && y.K.set(eC, eY), r);
}
function tK() {
    (y.K.remove(eC), location.reload());
}
function tz() {
    var e, t, n;
    let r = tR();
    (eH.setAudioInputDevice(r.inputDeviceId), eH.setAudioOutputDevice(r.outputDeviceId), tx(), eH.setInputVolume(r.inputVolume), eH.setOutputVolume(r.outputVolume), eH.setH264Enabled(null == (e = r.hardwareEncoding) || e || r.openH264), eH.setAv1Enabled(null == (t = r.hardwareEncoding) || t), eH.setH265Enabled(null == (n = r.hardwareEncoding) || n), eH.setAecDump(r.aecDumpEnabled), eH.setSidechainCompression(r.sidechainCompression), eH.setSidechainCompressionStrength(r.sidechainCompressionStrength), eH.setAudioInputBypassSystemProcessing(r.bypassSystemInputProcessing));
}
function tq() {
    eK ||
        eH.enable().then(() =>
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
                enabled: !0,
                unmute: !1
            })
        );
}
function tX(e) {
    return {
        id: eO.w5,
        index: 0,
        name: e,
        disabled: !0,
        hardwareId: void 0,
        containerId: void 0
    };
}
function tQ(e, t) {
    if (0 === e.length) {
        let e = tX(t);
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
function tJ(e, t) {
    var n;
    let r = null != (n = e[t]) ? n : p()(e).values().first();
    return null != r ? r.id : t;
}
function t$(e) {
    let t = eQ;
    if (((eQ = tQ(e, ev.intl.string(ev.t['/QIjDA']))), !p().isEqual(eQ, t))) {
        let e = tR(),
            t = tJ(eQ, e.inputDeviceId);
        eH.setAudioInputDevice(t);
    }
}
function t0(e) {
    let t = eJ;
    if (((eJ = tQ(e, ev.intl.string(ev.t.xlUg0t))), !p().isEqual(eJ, t))) {
        let e = tR(),
            t = tJ(eJ, e.outputDeviceId);
        eH.setAudioOutputDevice(t);
    }
}
function t1(e) {
    tt = e.length > 0;
    let t = e$;
    if (((e$ = tQ(e, ev.intl.string(ev.t.WKWARU))), e4 && !p().isEqual(e$, t))) {
        var n;
        let e = void 0 !== e$[e5],
            r = e5 === eO.w5 && (null == (n = t[eO.w5]) ? void 0 : n.disabled);
        tx(e || r);
    }
}
function t2() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        r =
            null != (e = X.Z.settings.audioContextSettings)
                ? e
                : {
                      user: {},
                      stream: {}
                  };
    for (let e of Object.keys(r)) {
        let i = e === eb.u0.USER ? eO.Yn.DEFAULT : eO.Yn.STREAM,
            a = i === eO.Yn.STREAM ? eO.Yh : eO.Qx,
            o = null != (t = r[e]) ? t : {},
            { localMutes: s, localVolumes: l } = tR(i);
        for (let [e, t] of Object.entries(o))
            null == (0, q.Ky)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== a ? (l[e] = t.volume) : delete l[e],
                eH.eachConnection((n) => {
                    (n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted));
                }, i));
        if (n)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == o[e] &&
                    (delete s[e],
                    delete l[e],
                    eH.eachConnection((t) => {
                        (t.setLocalVolume(e, a), t.setLocalMute(e, !1));
                    }, i));
        tW(
            {
                localMutes: s,
                localVolumes: l
            },
            i
        );
    }
}
function t3(e) {
    if (null == r)
        return (
            eN.info('Error: trying to get soundshare id before MediaEngineStore is instantiated.'),
            {
                soundshareId: null,
                soundshareSession: ''
            }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : ee.Z.getAudioPid(e),
            n = '';
        return (
            null != t && (n = ee.Z.generateSessionFromPid(t)),
            {
                soundshareId: t,
                soundshareSession: n
            }
        );
    }
}
function t4(e, t) {
    (0, en.isWindows)() &&
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
function t5(e) {
    ((i = e.sessionId),
        (e0 = !1),
        (e3 = !1),
        (0, en.isWeb)() ||
            (F.Z.subscribe({ location: 'handleConnectionOpen' }, (e) => {
                let t = tR();
                !e.sidechainAvailable && t.sidechainCompression ? (tW({ sidechainCompressionSettingVersion: 0 }), nS(!1)) : e.sidechainAvailable && t.sidechainCompressionSettingVersion < eL && (tW({ sidechainCompressionSettingVersion: eL }), nS(e.sidechainEnabled));
            }),
            nN()));
    let t = tR();
    if ((tF() && (tZ() ? n3(eO.iA.AUTOMATIC) : t.automaticAudioSubsystem && n4()), eH.supports(eO.AN.OFFLOAD_ADM_CONTROLS))) {
        let { enabled: e } = k.S.getCurrentConfig({ location: 'handleConnectionOpen' }, { autoTrackExposure: !0 });
        eH.setOffloadAdmControls(e);
    }
    ((0, Q.wt)({
        location: 'MediaEngineStore',
        autoTrackExposure: !1
    }) &&
        null !== t.mostRecentlyRequestedVoiceFilter &&
        (0, en.isDesktop)() &&
        (J.Z.getLastInitAttemptMayHaveCrashed()
            ? (v.Z.dispatch({
                  type: 'AUDIO_SET_SELF_MUTE',
                  mute: !0,
                  context: eO.Yn.DEFAULT,
                  playSoundEffect: !0
              }),
              tW({ mostRecentlyRequestedVoiceFilter: null }))
            : n(358820).r5()),
        t2());
}
function t6(e) {
    let { mediaEngineState: t } = e;
    ((eY = t.settingsByContext), (eQ = t.inputDevices), (eJ = t.outputDevices), (tO = t.appSupported), (ts = t.krispModuleLoaded), (s = t.krispVersion), (eq = t.goLiveContext));
}
function t8() {
    i = null;
}
function t7(e) {
    switch (e.state) {
        case em.hes.CONNECTING:
            tq();
            break;
        case em.hes.RTC_CONNECTING:
            ((tr = !1), (ti = !1));
            break;
        case em.hes.RTC_CONNECTED:
            tx();
            break;
        case em.hes.DISCONNECTED:
            (ns(), nl());
    }
    tH.update();
}
function t9(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => (i === t.sessionId ? ((e0 = t.mute || t.suppress), (e3 = t.deaf), eH.eachConnection(tD), tx((null == t.guildId || null == t.channelId || null == t_ || t_ === t.channelId) && e4), (t_ = t.channelId), !0) : (__OVERLAY__ || t.userId !== es.default.getId() || null != ef.Z.getChannelId() || tx(!1, null), e)), !1);
}
function ne(e) {
    let { mute: t } = e;
    ((e1 = t), eH.eachConnection(tD));
}
function nt(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = tR(t);
    if (t === eO.Yn.DEFAULT && (K.Z.requestPermission(eE.Eu.AUDIO), e2)) return !1;
    ((r = !i && !r) || (i = !1),
        n || (e6 = !0),
        tW(
            {
                mute: r,
                deaf: i
            },
            t
        ),
        eH.eachConnection(tD));
}
function nn(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    (tW({ mute: n }, t), r || (e6 = !0), eH.eachConnection(tD));
}
function nr(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r
    } = e;
    if (t !== eb.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    t2(!0);
}
function ni(e) {
    let { context: t } = e;
    (tW({ deaf: !tR(t).deaf }, t), eH.eachConnection(tD));
}
function na(e) {
    let { context: t, userId: n } = e;
    if (n === es.default.getId()) return;
    let { localMutes: r } = tR(t);
    (r[n] ? delete r[n] : (r[n] = !0), tW({ localMutes: r }, t), eH.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t));
}
function no(e) {
    var t, n, r, i, a, o, s;
    let { context: l, userId: c, videoToggleState: u, persist: d, isAutomatic: _ } = e;
    f()(!(d && _), 'These are not allowed to both be true.');
    let p = u === em.ZUi.DISABLED,
        { disabledLocalVideos: h } = tR(l),
        m = null != (t = h[c]) && t,
        g = tE.has(c),
        E = u === em.ZUi.AUTO_ENABLED || u === em.ZUi.MANUAL_ENABLED;
    (eN.info('disableVideo='.concat(p, ' currentlyDisabled=').concat(m, ' currentlyAutoDisabled=').concat(g, ', isVideoShown=').concat(E)), f()(!(g && !m), 'If you are auto-disabled, then you are also disabled.'));
    let b = p !== m,
        y = l === eO.Yn.DEFAULT,
        O = _ && b && y,
        v = d && b && y;
    eN.info('changed='.concat(b, ' isDefaultContext=').concat(y, ' isUpdateCausedByVideoHealthManager=').concat(O, ' isManualToggleByUser=').concat(v));
    let { videoToggleStateMap: I } = tR(l);
    if ((I[c] === em.ZUi.AUTO_PROBING && u === em.ZUi.AUTO_ENABLED && (0, W.Z)(c, p ? eO.fC.AUTO_DISABLE : eO.fC.AUTO_ENABLE, E), (I[c] = u), tW({ videoToggleStateMap: I }, l, d), u === em.ZUi.AUTO_PROBING ? null == (n = ef.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, !0) : null == (r = ef.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, !1), tb || (eN.info('isAutoDisableAllowed='.concat(tb, ' - disabling VideoHealthManager')), null == (a = ef.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()), O)) {
        if ((!p && !g) || (p && !tb)) return;
        ((0, W.Z)(c, p ? eO.fC.AUTO_DISABLE : eO.fC.AUTO_ENABLE, E), p ? tE.add(c) : tE.delete(c));
    } else v && (g && !p ? (eN.info('disallowing auto-disable for this session because of manual override by user'), (tb = !1), null == (s = ef.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(), (0, W.Z)(c, eO.fC.MANUAL_REENABLE, E)) : (0, W.Z)(c, p ? eO.fC.MANUAL_DISABLE : eO.fC.MANUAL_ENABLE, E));
    (y && !p && tE.delete(c),
        p ? (h[c] = !0) : delete h[c],
        tW({ disabledLocalVideos: h }, l, d),
        eH.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(c, null != (t = h[c]) && t);
        }, l));
}
function ns() {
    if (0 === tE.size) return;
    let e = eO.Yn.DEFAULT,
        { disabledLocalVideos: t } = tR(e);
    (tE.forEach((n) => {
        (f()(t[n], 'If you are auto-disabled, then you are also disabled.'), delete t[n], eH.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e));
    }),
        tE.clear(),
        tW({ disabledLocalVideos: t }, e, !1));
}
function nl() {
    let e = eO.Yn.DEFAULT,
        { videoToggleStateMap: t } = tR(e);
    for (let [e, n] of Object.entries(t)) n === em.ZUi.AUTO_PROBING && delete t[e];
    tW({ videoToggleStateMap: t }, e, !1);
}
function nc(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === es.default.getId()) return;
    let i = t === eO.Yn.STREAM ? eO.Yh : eO.Qx,
        { localVolumes: a } = tR(t);
    (r === i ? delete a[n] : (a[n] = r), tW({ localVolumes: a }, t), eH.eachConnection((e) => e.setLocalVolume(n, r), t));
}
function nu(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: a } = tR(t);
    ((a[n] = {
        left: r,
        right: i
    }),
        tW({ localPans: a }, t),
        eH.eachConnection((e) => e.setLocalPan(n, r, i), t));
}
function nd(e) {
    let { context: t, mode: n, options: r } = e;
    (tW(
        {
            mode: n,
            modeOptions: r
        },
        t
    ),
        eH.eachConnection(tP),
        tH.update());
}
function nf(e) {
    let { volume: t } = e;
    (tW({ inputVolume: tw(t) }), eH.setInputVolume(t));
}
function n_(e) {
    let { volume: t } = e;
    (tW({ outputVolume: t }), eH.setOutputVolume(t));
}
function np(e) {
    let { id: t } = e;
    ((t = tJ(eQ, t)), (eX = performance.now()), tW({ inputDeviceId: t }), eH.setAudioInputDevice(t));
}
function nh(e) {
    let { id: t } = e;
    (tW({ outputDeviceId: (t = tJ(eJ, t)) }), eH.setAudioOutputDevice(t));
}
function nm(e) {
    let { id: t } = e;
    (tW({ videoDeviceId: (t = tJ(e$, t)) }), tx());
}
function ng(e) {
    let { inputProfile: t } = e,
        n = tW({ activeInputProfile: t });
    (eH.eachConnection((e) => {
        (tP(e), e.setAutomaticGainControl(n.automaticGainControl), e.setEchoCancellation(n.echoCancellation), e.setExperimentalEncoders(n.experimentalEncoders), e.setNoiseCancellation(n.noiseCancellation), e.setNoiseSuppression(n.noiseSuppression));
    }),
        eH.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        tH.update(),
        nC());
}
function nE(e) {
    return ez !== e.required && ((ez = e.required), e.required || eH.interact(), !0);
}
function nb(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    (t$(t), t0(n), t1(r));
}
function ny(e) {
    let { inputVolume: t, outputVolume: n } = e;
    tW({
        inputVolume: tw(t),
        outputVolume: n
    });
}
function nO(e) {
    var t;
    let n = tR(),
        r = eH.getAudioSubsystem(),
        i = eH.getAudioLayer(),
        a = tJ(eQ, n.inputDeviceId),
        o = null == (t = eQ[a]) ? void 0 : t.name;
    $.default.track(em.rMx.VOICE_PROCESSING, {
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
function nv(e) {
    let t = tW({ echoCancellation: e.enabled });
    (eH.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nC(), nO(e.location));
}
function nI(e) {
    nS(e.enabled);
}
function nT(e) {
    let t = tW({ sidechainCompressionStrength: e.strength });
    eH.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function nS(e) {
    let t = tW({ sidechainCompression: e });
    eH.setSidechainCompression(t.sidechainCompression);
}
function nA(e) {
    let { enabled: t, loopbackReason: n } = e;
    return (t ? ty.add(n) : ty.delete(n), nN(), nC());
}
function nN() {
    let { voiceFiltersPreProcessMute: e } = H.Z.getCurrentConfig({ location: 'setMaybePreprocessMute' }, { autoTrackExposure: !0 }),
        t = e && !ty.has('voice_filter_preview') && !ty.has('mic_test');
    eH.setMaybePreprocessMute(t);
}
function nC() {
    let e = tR(),
        t = ty.size > 0,
        n = e.inputDeviceId,
        r = ec.Z.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        a = ec.Z.hasNoiseSuppression(n) || e.noiseSuppression,
        o = ec.Z.hasAutomaticGainControl(n) || e.automaticGainControl,
        s = e.noiseCancellation,
        l = null !== tc,
        c = ty.has('voice_filter') && 1 === ty.size;
    eH.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: a,
        automaticGainControl: o,
        noiseCancellation: s,
        voiceFilters: l,
        loopbackUseAudioMode: c
    });
}
function nR(e) {
    let t = tW({ noiseSuppression: e.enabled });
    (eH.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nC(), nO(e.location));
}
function nP(e) {
    let t = tW({ automaticGainControl: e.enabled });
    (eH.eachConnection((e) => e.setAutomaticGainControl(t.automaticGainControl)), nC(), nO(e.location));
}
function nw(e) {
    let t = tW({ noiseCancellation: e.enabled });
    (eH.eachConnection((e) => e.setNoiseCancellation(t.noiseCancellation)), nC(), nO(e.location));
}
function nD(e) {
    (z.Z.setKrispModelOverride(e.model), (c = e.model), nC());
}
function nL(e) {
    let t = tW({ experimentalEncoders: e.enabled });
    eH.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
}
function nx(e) {
    var t, n;
    let { enabled: r } = e,
        i = tW({ hardwareEncoding: r });
    (eH.eachConnection((e) => {
        var t;
        return e.setHardwareH264(null == (t = i.hardwareEncoding) || t);
    }),
        eH.setH264Enabled(i.hardwareEncoding || i.openH264),
        eH.setAv1Enabled(null == (t = i.hardwareEncoding) || t),
        eH.setH265Enabled(null == (n = i.hardwareEncoding) || n));
}
function nk(e) {
    (tW({ silenceWarning: e.enabled }), tH.update());
}
function nM(e) {
    eH.setDebugLogging(e.enabled);
}
function nj(e) {
    let { level: t } = e;
    ((l = t), z.Z.setKrispSuppressionLevel(t));
}
function nU(e) {
    tW({ videoHook: e.enabled });
}
function nG(e) {
    tW({ experimentalSoundshare2: e.enabled });
}
function nB(e) {
    let { enabled: t } = e;
    tW({ useSystemScreensharePicker: t });
}
function nV(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = tW({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r
        });
    eH.eachConnection((e) => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers));
}
function nF(e) {
    let { enabled: t } = e;
    (tW({ qos: t }), eH.eachConnection((e) => e.setQoS(t)));
}
function nZ() {
    tK();
}
function nH(e) {
    let { inputDetected: t } = e;
    ((tn = t), !tr && tn && ((tr = !0), tH.update()));
}
function nY(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === e2) return !1;
    ((e2 = n), eH.eachConnection(tD));
}
function nW(e) {
    let { state: t, permissionType: n } = e,
        r = t === eE.PQ.ACCEPTED;
    switch (n) {
        case eE.Eu.AUDIO:
            ((tm = !0), eH.eachConnection(tD));
            break;
        case eE.Eu.CAMERA:
            !r && e4 && tx(!1);
            break;
        default:
            return !1;
    }
}
function nK() {
    return ts || !1;
}
async function nz() {
    try {
        var e, t, n, i;
        await ea.ZP.ensureModule('discord_krisp');
        let a = ea.ZP.requireModule('discord_krisp');
        ((ts = !0),
            (s = null == (e = a.getSdkVersion) ? void 0 : e.call(a)),
            (l = null != (i = null == (t = a.getSuppressionLevel) ? void 0 : t.call(a)) ? i : 100),
            null == (n = a.getNcModels) ||
                n.call(a).then((e) => {
                    ((tl = e), r.emitChange());
                }),
            r.emitChange());
    } catch (t) {
        (eN.warn('Failed to load Krisp module: '.concat(t.message)), ei.Z.captureException(t));
        let e = eO.H3.INITIALIZED;
        if (t.message.includes(': ')) {
            let n = parseInt(t.message.substring(t.message.indexOf(': ') + 1));
            e = isNaN(n) || 0 === n ? eO.H3.INITIALIZED : n;
        }
        ($.default.track(em.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), tW({ noiseCancellation: !1 }));
    } finally {
        to = !1;
    }
}
function nq() {
    return ((0, en.isWindows)() && 'arm64' !== ea.ZP.architecture) || (0, en.isLinux)() || (0, en.isMac)();
}
function nX() {
    !nq() || __OVERLAY__ || to || ts ? ((0, en.isWeb)() && eH.supports(eO.AN.NOISE_CANCELLATION) ? ((ts = !0), r.emitChange()) : (0, en.isWeb)() && tW({ noiseCancellation: !1 })) : ((to = !0), nz());
}
function nQ(e) {
    let { enabled: t } = e;
    ($.default.track(em.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != tc ? tc : null,
        enabled: t
    }),
        tW({ voiceFilterPlaybackEnabled: t }));
}
function nJ(e) {
    let { newVoiceFilterId: t } = e;
    (tW({ mostRecentlyRequestedVoiceFilter: t }), eH.eachConnection((e) => e.setVoiceFilterId(t)));
}
function n$() {
    tW({ mostRecentlyRequestedVoiceFilter: null });
}
function n0(e) {
    let { voiceFilterId: t } = e;
    ((td = tc), (tf = tu), (tc = t), (tu = null === t ? null : Date.now()));
}
function n1(e) {
    let t = e.bypassEnabled;
    (tW({ bypassSystemInputProcessing: t }), eH.setAudioInputBypassSystemProcessing(t), nO(e.location));
}
function n2(e) {
    n3(e.subsystem);
}
function n3(e) {
    e === eO.iA.AUTOMATIC ? (tW({ automaticAudioSubsystem: !0 }), n4()) : (tW({ automaticAudioSubsystem: !1 }), eH.setAudioSubsystem(e));
}
function n4() {
    eH.queueAudioSubsystem(eO.iA.EXPERIMENTAL);
}
function n5(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && tx(i, null), null != t || null == n)) {
        ta = !1;
        return;
    }
    if (ta) return;
    ta = !0;
    let a = tR();
    (a.mute || a.deaf) &&
        (tW({
            deaf: !1,
            mute: !1
        }),
        eH.eachConnection(tD));
}
function n6(e) {
    let { application: t } = e;
    eW.add(t.id);
}
function n8(e) {
    let { application: t } = e;
    eW.delete(t.id);
}
function n7(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case 'audio':
                ((eK = !1), eH.eachConnection(tD));
                break;
            case 'video':
                tx(!1);
        }
}
function n9(e) {
    ((eK = e.enabled),
        e.unmute &&
            tW({
                mute: !1,
                deaf: !1
            }),
        eH.eachConnection(tD));
}
function re(e) {
    let { enabled: t } = e;
    (K.Z.requestPermission(eE.Eu.CAMERA), tx(t));
}
function rt(e) {
    let { sourceId: t, applicationName: n, quality: i } = e,
        a = A.Z.isDecoupledGameClippingEnabled(),
        s = A.Z.getSettings().decoupledClipsEnabled;
    if (!a || !s || null == I.Z) return;
    let l = null,
        c = null,
        u = ee.Z.getPidFromDesktopSource(t);
    ({ soundshareId: l, soundshareSession: c } = t3(u));
    let d = {
        desktopSource: {
            id: t,
            sourcePid: u,
            soundshareId: l,
            soundshareSession: c
        },
        quality: i
    };
    (null != o && o.desktopSource.id !== d.desktopSource.id && (eH.setClipsSource(null), (0, en.isWindows)() && null != o.desktopSource.soundshareId && T.pn(o.desktopSource.soundshareId)), null != l && t4(l, c), (o = d));
    let f = tN(),
        _ = tR().videoHook;
    eH.setClipsSource({
        desktopDescription: {
            id: o.desktopSource.id,
            soundshareId: o.desktopSource.soundshareId,
            useVideoHook: _,
            useGraphicsCapture: tG(),
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: tV(),
            videoHookStaleFrameTimeoutMs: eM,
            graphicsCaptureStaleFrameTimeoutMs: ej,
            hdrCaptureMode: f
        },
        quality: i,
        applicationName: n
    });
}
function rn(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((o = null), eH.setClipsSource(null));
}
function rr(e) {
    var t, n, r, i;
    let { settings: a } = e;
    if ((null == a ? void 0 : a.desktopSettings) != null) {
        let e = null,
            r = null,
            { sourceId: i, sound: o } = a.desktopSettings,
            s = null != (t = a.context) ? t : eO.Yn.DEFAULT,
            l =
                null != (n = a.qualityOptions)
                    ? n
                    : {
                          resolution: 720,
                          frameRate: 30
                      },
            c = !1 === o ? null : ee.Z.getPidFromDesktopSource(i);
        (en.isPlatformEmbedded && !0 === o && (({ soundshareId: e, soundshareSession: r } = t3(c)), null != e && t4(e, r)),
            tL(s),
            tx(s === eO.Yn.STREAM && e4, {
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
        let e = null != (r = a.context) ? r : eO.Yn.DEFAULT,
            { videoDeviceGuid: t, audioDeviceGuid: n } = a.cameraSettings,
            o = e === eO.Yn.STREAM && e4,
            s =
                null != (i = a.qualityOptions)
                    ? i
                    : {
                          resolution: 720,
                          frameRate: 30
                      };
        tx(o, {
            cameraSource: {
                videoDeviceGuid: t,
                audioDeviceGuid: n
            },
            quality: {
                resolution: s.resolution,
                frameRate: s.frameRate
            }
        });
    } else tx(e4, null);
}
function ri(e) {
    let { section: t } = e;
    return (t === em.oAB.VOICE && tq(), !1);
}
function ra() {
    return (eH.eachConnection(tj), !1);
}
function ro(e) {
    let { enabled: t } = e,
        n = tW({ openH264: t });
    (eH.setH264Enabled(n.hardwareEncoding || n.openH264),
        eH.eachConnection((e) => {
            var t;
            return e.setSoftwareH264(null == (t = n.openH264) || t);
        }));
}
function rs(e) {
    let { enabled: t } = e,
        n = tW({ aecDumpEnabled: t });
    eH.setAecDump(n.aecDumpEnabled);
}
function rl(e) {
    let { state: t } = e,
        n = D.Z.isEnabled();
    if (t === em.$7l.BACKGROUND && e4 && !n) ((te = !0), tx(!1));
    else {
        if (t !== em.$7l.ACTIVE || !te) return !1;
        ((te = !1), tx(!0));
    }
    return !0;
}
function rc(e) {
    eH.eachConnection((t) => t.setBitRate(e.bitrate));
}
function ru() {
    if ((!e4 && null == a) || null != ef.Z.getRTCConnectionId()) return !1;
    tx(!1, null);
}
function rd() {
    return !!tp && ((tp = !1), !0);
}
function rf(e) {
    eH.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function r_(e) {
    let { settings: t } = e;
    eH.applyMediaFilterSettings(t).finally(() => {
        ((th = !1), r.emitChange());
    });
}
function rp() {
    th = !0;
}
function rh() {
    th = !1;
}
function rm(e) {
    tI = e.enabled;
}
class rg extends (u = E.ZP.Store) {
    initialize() {
        (tU(),
            tY(),
            nX(),
            nl(),
            (tO = {
                [eO.AN.VIDEO]: eH.supports(eO.AN.VIDEO),
                [eO.AN.DESKTOP_CAPTURE]: eH.supports(eO.AN.DESKTOP_CAPTURE),
                [eO.AN.HYBRID_VIDEO]: eH.supports(eO.AN.HYBRID_VIDEO)
            }),
            this.waitFor(es.default, ec.Z, eu.Z, ed.Z, ef.Z, L.ZP, K.Z.storage, X.Z, w.Z, A.Z));
    }
    supports(e) {
        return eH.supports(e);
    }
    supportsInApp(e) {
        return tO[e] || eH.supports(e);
    }
    isSupported() {
        return eH.supported();
    }
    isExperimentalEncodersSupported() {
        return eH.supports(eO.AN.EXPERIMENTAL_ENCODERS);
    }
    isNoiseSuppressionSupported() {
        return eH.supports(eO.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return nK();
    }
    isNoiseCancellationError() {
        return tp;
    }
    isAutomaticGainControlSupported() {
        return eH.supports(eO.AN.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !tZ() && (eH.supports(eO.AN.LEGACY_AUDIO_SUBSYSTEM) || eH.supports(eO.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return eH.supports(eO.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && 'experimental' === eH.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return nK();
    }
    isAecDumpSupported() {
        return eH.supports(eO.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return eH.supports(eO.AN.VIDEO) && eH.supports(eO.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        let t = (null == (e = eu.Z.getChannel(t_)) ? void 0 : e.type) === em.d4z.GUILD_STAGE_VOICE,
            n = r.getHardwareEncoding();
        return !t && n && G.Z.simulcastEnabled();
    }
    getAecDump() {
        return tR().aecDumpEnabled;
    }
    getMediaEngine() {
        return eH;
    }
    getVideoComponent() {
        return eH.Video;
    }
    getCameraComponent() {
        return eH.Camera;
    }
    getKrispSuppressionLevel() {
        return null != l ? l : 100;
    }
    isEnabled() {
        return eK;
    }
    isMute() {
        return this.isSelfMute() || e0;
    }
    isDeaf() {
        return this.isSelfDeaf() || e3;
    }
    hasContext(e) {
        return null != eY[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eO.Yn.DEFAULT;
        return e === eO.Yn.DEFAULT && e1;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eO.Yn.DEFAULT;
        return !this.isEnabled() || tR(e).mute || !K.Z.didHavePermission(eE.Eu.AUDIO) || this.isSelfDeaf(e) || (e === eO.Yn.DEFAULT && e2);
    }
    shouldSkipMuteUnmuteSound() {
        return e6;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        e6 = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eO.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && ec.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return tI;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eO.Yn.DEFAULT;
        return !this.isSupported() || tR(e).deaf;
    }
    isVideoEnabled() {
        return e4 && tt;
    }
    isVideoAvailable() {
        return Object.values(e$).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eO.Yn.STREAM;
        return eq === e && null != a;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eO.Yn.STREAM;
        return eq === t && null != a && (null == (e = a.desktopSource) ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eO.Yn.DEFAULT;
        return e !== es.default.getId() && (tR(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return eH.supports(eO.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eO.Yn.DEFAULT;
        return null != (t = tR(n).disabledLocalVideos[e]) && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eO.Yn.DEFAULT;
        return null != (t = tR(n).videoToggleStateMap[e]) ? t : em.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eO.Yn.DEFAULT;
        return t === eO.Yn.DEFAULT && tE.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eO.Yn.DEFAULT;
        return e === eO.Yn.DEFAULT && tE.size > 0;
    }
    isMediaFilterSettingLoading() {
        return th;
    }
    isNativeAudioPermissionReady() {
        return tm;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return eq;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return eX;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eO.Yn.DEFAULT,
            n = tR(t).localPans[e];
        return null != n ? n : ek;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eO.Yn.DEFAULT,
            n = t === eO.Yn.STREAM ? eO.Yh : eO.Qx,
            r = tR(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return tR().inputVolume;
    }
    getOutputVolume() {
        return tR().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eO.Yn.DEFAULT;
        return tR(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eO.Yn.DEFAULT;
        return tR(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return tc;
    }
    getActiveVoiceFilterAppliedAt() {
        return tu;
    }
    getPreviousVoiceFilter() {
        return td;
    }
    getPreviousVoiceFilterAppliedAt() {
        return tf;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return tR().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return tR().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            p().each(eY, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i }
                } = t;
                r === em.pM4.PUSH_TO_TALK && eW.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return tJ(eQ, tR().inputDeviceId);
    }
    getOutputDeviceId() {
        return tJ(eJ, tR().outputDeviceId);
    }
    getVideoDeviceId() {
        return tJ(e$, tR().videoDeviceId);
    }
    getInputDevices() {
        return eQ;
    }
    getOutputDevices() {
        return eJ;
    }
    getVideoDevices() {
        return e$;
    }
    getEchoCancellation() {
        let e = tR();
        return ec.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return tR().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return tR().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return tR().h265Enabled;
    }
    getLoopback() {
        return ty.size > 0;
    }
    getLoopbackReasons() {
        return ty;
    }
    getNoiseSuppression() {
        let e = tR();
        return ec.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tR();
        return ec.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return tR().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return tR().noiseCancellation;
    }
    getExperimentalEncoders() {
        return tR().experimentalEncoders;
    }
    getHardwareEncoding() {
        var e;
        return null == (e = tR().hardwareEncoding) || e;
    }
    getEnableSilenceWarning() {
        return tR().silenceWarning;
    }
    getDebugLogging() {
        return eH.getDebugLogging();
    }
    getQoS() {
        return tR().qos;
    }
    getAttenuation() {
        return tR().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return tR().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return tR().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return tF() && tR().automaticAudioSubsystem ? eO.iA.AUTOMATIC : eH.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return eH.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return tR().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === ey._.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eO.Yn.DEFAULT;
        return tR(e);
    }
    getState() {
        return {
            settingsByContext: eY,
            inputDevices: eQ,
            outputDevices: eJ,
            appSupported: tO,
            krispModuleLoaded: ts,
            krispVersion: s,
            krispSuppressionLevel: l,
            goLiveSource: a,
            goLiveContext: eq
        };
    }
    getInputDetected() {
        return tn;
    }
    getNoInputDetectedNotice() {
        return ti;
    }
    getPacketDelay() {
        return en.isPlatformEmbedded || this.getMode() !== em.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        eH.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return ez;
    }
    getVideoHook() {
        return tR().videoHook;
    }
    supportsVideoHook() {
        return eH.supports(eO.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tR().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e);
    }
    supportsExperimentalSoundshare() {
        return eH.supports(eO.AN.EXPERIMENTAL_SOUNDSHARE) && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eg.I9);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = tR().useSystemScreensharePicker,
            n = (0, en.isLinux)() || ((0, en.isMac)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eg.jR));
        return e && (null != t ? t : n);
    }
    supportsSystemScreensharePicker() {
        return eH.supports(eO.AN.NATIVE_SCREENSHARE_PICKER);
    }
    getOpenH264() {
        return tR().openH264;
    }
    getEverSpeakingWhileMuted() {
        return e8;
    }
    getSpeakingWhileMuted() {
        return e7;
    }
    getKrispModelOverride() {
        return c;
    }
    getKrispModels() {
        return tl;
    }
    getKrispVadActivationThreshold() {
        var e;
        return null != (e = tR().modeOptions.vadKrispActivationThreshold) ? e : ex;
    }
    hasActiveCallKitCall() {
        return tT;
    }
    setHasActiveCallKitCall(e) {
        tT = e;
    }
    supportsScreenSoundshare() {
        return (0, en.isMac)() ? eH.supports(eO.AN.SOUNDSHARE) && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eg.yG) && tV() : (0, en.isWindows)() ? eH.supports(eO.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, en.isLinux)() && eH.supports(eO.AN.SCREEN_SOUNDSHARE);
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eO.Yn.DEFAULT,
            t = this.supports(eO.AN.VIDEO)
                ? [
                      {
                          rid: '100',
                          type: e === eO.Yn.DEFAULT ? eO.Tr.VIDEO : eO.Tr.SCREEN,
                          quality: eO.y7
                      }
                  ]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === eO.Yn.DEFAULT || this.goLiveSimulcastEnabled()) &&
                t.push({
                    rid: '50',
                    type: e === eO.Yn.DEFAULT ? eO.Tr.VIDEO : eO.Tr.SCREEN,
                    quality: eO.LD
                }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: !1 };
        return ((0, en.isWeb)() && (e.fetchDave = V.N.getCurrentConfig({ location: 'MediaEngineStore fetchAsyncResources' }).loadWasmModule), eH.fetchAsyncResources(e));
    }
    getSupportedSecureFramesProtocolVersion() {
        if ((0, en.isWeb)()) {
            let { useWasmModule: e } = V.N.getCurrentConfig({ location: 'MediaEngineStore getSupportedSecureFramesProtocolVersion' });
            if (!e) return 0;
        }
        let e = eH.getSupportedSecureFramesProtocolVersion(),
            t = V.m.getCurrentConfig({ location: 'MediaEngineStore' });
        return (114 === e && (e = 1), t.canSupportDaveProtocol && e >= t.protocolVersionFloor ? e : 0);
    }
    hasClipsSource() {
        return null != o;
    }
    getGpuBrand() {
        return tv;
    }
}
function rE(e) {
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
eI(rg, 'displayName', 'MediaEngineStore');
let rb = (r = new rg(v.Z, {
    VOICE_CHANNEL_SELECT: n5,
    VOICE_STATE_UPDATES: t9,
    CONNECTION_OPEN: t5,
    CONNECTION_CLOSED: t8,
    RTC_CONNECTION_STATE: t7,
    AUDIO_SET_TEMPORARY_SELF_MUTE: ne,
    AUDIO_TOGGLE_SELF_MUTE: nt,
    AUDIO_SET_SELF_MUTE: nn,
    AUDIO_TOGGLE_SELF_DEAF: ni,
    AUDIO_TOGGLE_LOCAL_MUTE: na,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: no,
    AUDIO_SET_LOCAL_VOLUME: nc,
    AUDIO_SET_LOCAL_PAN: nu,
    AUDIO_SET_MODE: nd,
    AUDIO_SET_INPUT_VOLUME: nf,
    AUDIO_SET_OUTPUT_VOLUME: n_,
    AUDIO_SET_INPUT_DEVICE: np,
    AUDIO_SET_OUTPUT_DEVICE: nh,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: ng,
    AUDIO_SET_ECHO_CANCELLATION: nv,
    AUDIO_SET_SIDECHAIN_COMPRESSION: nI,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nT,
    AUDIO_SET_LOOPBACK: nA,
    AUDIO_SET_NOISE_SUPPRESSION: nR,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nP,
    AUDIO_SET_NOISE_CANCELLATION: nw,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: nD,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: nk,
    AUDIO_SET_DEBUG_LOGGING: nM,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: nj,
    MEDIA_ENGINE_SET_VIDEO_HOOK: nU,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: nG,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: nB,
    AUDIO_SET_ATTENUATION: nV,
    AUDIO_SET_QOS: nF,
    MEDIA_ENGINE_DEVICES: nb,
    AUDIO_VOLUME_CHANGE: ny,
    AUDIO_RESET: nZ,
    AUDIO_INPUT_DETECTED: nH,
    AUDIO_SET_SUBSYSTEM: n2,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: n1,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: n9,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: re,
    MEDIA_ENGINE_PERMISSION: n7,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rr,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nm,
    MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nL,
    MEDIA_ENGINE_INTERACTION_REQUIRED: nE,
    USER_SETTINGS_MODAL_INIT: ri,
    USER_SETTINGS_MODAL_SET_SECTION: ri,
    CERTIFIED_DEVICES_SET: ra,
    RPC_APP_CONNECTED: n6,
    RPC_APP_DISCONNECTED: n8,
    OVERLAY_INITIALIZE: t6,
    MEDIA_ENGINE_SET_OPEN_H264: ro,
    MEDIA_ENGINE_SET_HARDWARE_ENCODING: nx,
    APP_STATE_UPDATE: rl,
    SET_CHANNEL_BITRATE: rc,
    SET_VAD_PERMISSION: nY,
    SET_NATIVE_PERMISSION: nW,
    SET_CHANNEL_VIDEO_QUALITY_MODE: rf,
    MEDIA_ENGINE_SET_AEC_DUMP: rs,
    CHANNEL_DELETE: ru,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rd,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: r_,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rp,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rh,
    USER_SETTINGS_PROTO_UPDATE: nr,
    CLIPS_INIT: rt,
    CLIPS_SETTINGS_UPDATE: rn,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rm,
    VOICE_FILTER_REQUEST_SWITCH: nJ,
    VOICE_FILTER_LOOPBACK_TOGGLE: nQ,
    VOICE_FILTER_APPLIED: n0,
    VOICE_FILTER_DOWNLOAD_FAILED: n$,
    VOICE_FILTER_APPLY_FAILED: n$
}));
