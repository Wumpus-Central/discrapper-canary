let r, i, a, o, s, l, c;
(n.d(t, { Z: () => rO }), n(388685), n(953529), n(457542), n(539854), n(642613), n(49124), n(337869));
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
    M = n(822253),
    k = n(355552),
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
    eM = {
        left: 1,
        right: 1
    },
    ek = 500,
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
    eQ = { [eO.w5]: tQ('No Input Devices') },
    eJ = { [eO.w5]: tQ('No Output Devices') },
    e$ = { [eO.w5]: tQ('No Video Devices') },
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
    tc = !1,
    tu = null,
    td = null,
    tf = null,
    t_ = null,
    tp = null,
    th = !1,
    tm = !1,
    tg = !1;
(K.Z.hasPermission(eE.Eu.AUDIO, { showAuthorizationError: !1 }), K.Z.hasPermission(eE.Eu.CAMERA, { showAuthorizationError: !1 }));
let tE = !1,
    tb = new Set(),
    ty = tE,
    tO = new Set(),
    tv = {},
    tI = null,
    tT = !0,
    tS = !1,
    tA = {},
    tN = 5 * et.Z.Millis.SECOND;
function tC() {
    var e, t;
    return null != (t = null == (e = ep.default.getCurrentUser()) ? void 0 : e.isStaff()) && t ? 'always' : er.Z === g.R.CANARY ? 'permittedDevicesOnly' : 'never';
}
function tR() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eO.Yn.DEFAULT,
        t = eY[e];
    return (null == t && ((t = eF()), (eY[e] = t)), t);
}
function tP() {
    var e, t, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eO.Yn.DEFAULT,
        i = tR(r),
        a = eZ[null != (e = i.activeInputProfile) ? e : ey._.CUSTOM];
    return eA(eT({}, i, a), { modeOptions: eT({}, null != (t = i.modeOptions) ? t : {}, null != (n = a.modeOptions) ? n : {}) });
}
function tw(e) {
    var t;
    let n = tP(e.context);
    e.setInputMode(n.mode, {
        vadThreshold: n.modeOptions.threshold,
        vadAutoThreshold: n.modeOptions.autoThreshold,
        vadUseKrisp: n.modeOptions.vadUseKrisp && nq(),
        vadKrispActivationThreshold: null != (t = n.modeOptions.vadKrispActivationThreshold) ? t : 0.5,
        vadLeading: n.modeOptions.vadLeading,
        vadTrailing: n.modeOptions.vadTrailing,
        pttReleaseDelay: n.modeOptions.delay
    });
}
function tD(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eO.Qx;
    return p().clamp(e, 0, t);
}
function tL(e) {
    let t = tP(e.context),
        n = !eK || t.mute || t.deaf;
    (e.context === eO.Yn.DEFAULT ? (n = n || e0 || e1 || e2 || !K.Z.didHavePermission(eE.Eu.AUDIO)) : e.context === eO.Yn.STREAM && (n = !0), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eO.Yn.DEFAULT && S.Z.updateNativeMute());
}
function tx(e) {
    e !== eq && (null != a && eH.setGoLiveSource(null, eq), (eq = e));
}
function tM() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e4,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        s = a;
    if (((null == s ? void 0 : s.desktopSource) != null && s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? void 0 : e.id) && (null != s.desktopSource.soundshareId && (0, en.isWindows)() && T.pn(s.desktopSource.soundshareId), eH.setGoLiveSource(null, eq)), (null == s ? void 0 : s.cameraSource) != null && (s.cameraSource.videoDeviceGuid !== (null == o || null == (t = o.cameraSource) ? void 0 : t.videoDeviceGuid) || s.cameraSource.audioDeviceGuid !== (null == o || null == (n = o.cameraSource) ? void 0 : n.audioDeviceGuid)) && eH.setGoLiveSource(null, eq), (e4 || i) && ((e5 = (e4 = i) ? t$(e$, tP().videoDeviceId) : eO.Av), eH.setVideoInputDevice(e5)), (a = o), null != o)) {
        let e = {
            resolution: o.quality.resolution,
            frameRate: o.quality.frameRate
        };
        if (null != o.desktopSource) {
            let t = tC(),
                n = tP().videoHook,
                i = tB(),
                a = i ? (tV() && (0, Y.R)('MediaEngineStore_updateVideo').enabled ? eg.zj : eg.ZM) : 0;
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
                        allowScreenCaptureKit: tF(),
                        videoHookStaleFrameTimeoutMs: ek,
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
    null == tA[a] && (tA[a] = new Set());
    let o = null != t && !tA[a].has(t);
    (o && tA[a].add(t),
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
function tj(e) {
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
function tU(e) {
    let t = tP(),
        n = t.inputDeviceId;
    if ((e.setEchoCancellation(ec.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(ec.Z.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(ec.Z.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), e.setVoiceFilterId(tu), (0, en.isWeb)())) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function tG() {
    (eH.on(b.aB.Connection, (e) => {
        var t, n;
        (tw(e), tL(e), tU(e));
        let i = tP();
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
        ((0, en.isWindows)() ? ((null == tI ? void 0 : tI.startsWith('NVIDIA')) || (null == tI ? void 0 : tI.startsWith('AMD')) ? e.setExperimentFlag(eO.V8.SIGNAL_AV1, !0) : e.setExperimentFlag(eO.V8.SIGNAL_AV1_DECODE, !0)) : ((0, en.isMac)() || (0, en.isLinux)()) && e.setExperimentFlag(eO.V8.SIGNAL_AV1_DECODE, !0), (0, en.isWindows)() && e.setExperimentFlag(eO.V8.SIGNAL_AV1_HARDWARE_DECODE, !0), eH.setHasFullbandPerformance((0, R.Z)()));
        let f = (0, k.D)('setupMediaEngine').enabled;
        if ((e.setRemoteAudioHistory(1000 * !!f), (0, N.Z)(r))) {
            let t = A.Z.getSettings();
            e.setExperimentFlag(eO.V8.STREAMER_CLIP, t.clipsEnabled);
            let { enableViewerClipping: n } = Z.Z.getCurrentConfig({ location: 'f627ab_15' }, { autoTrackExposure: !1 });
            (e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eO.ux));
        }
        for (let t of ((i = tP(e.context)), e.setPostponeDecodeLevel(eG), Object.keys(i.localMutes))) t !== es.default.getId() && e.setLocalMute(t, i.localMutes[t]);
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
                    _.start(tN, () => {
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
                        underlyingError: tj(e)
                    }),
                    (th = !0),
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
                        underlyingError: tj(e)
                    }),
                    $.default.track(em.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    v.Z.dispatch({
                        type: 'AUDIO_SET_MODE',
                        context: eO.Yn.DEFAULT,
                        mode: em.pM4.VOICE_ACTIVITY,
                        options: eA(eT({}, tP(eO.Yn.DEFAULT).modeOptions), { vadUseKrisp: !1 })
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
            ((tg = !0),
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
            let t = ry(e);
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
        tY.reset(),
        (0, e_.q)().then((e) => {
            null != e && (tI = e.gpu_brand);
        }));
}
function tB() {
    return (0, en.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eg.c5);
}
function tV() {
    return (0, en.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eg.sN);
}
function tF() {
    return (0, en.isMac)() && eH.supports(eO.AN.SCREEN_CAPTURE_KIT) && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eg.C7);
}
function tZ() {
    return (0, en.isWindows)() && eH.supports(eO.AN.AUTOMATIC_AUDIO_SUBSYSTEM) && eH.supports(eO.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH);
}
function tH() {
    return eH.supports(eO.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
let tY = new (class {
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
        let e = tP();
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
function tW() {
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
        tq());
}
function tK(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eO.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = tR(t);
    return (Object.assign(r, e), !__OVERLAY__ && n && y.K.set(eC, eY), r);
}
function tz() {
    (y.K.remove(eC), location.reload());
}
function tq() {
    var e, t, n;
    let r = tP();
    (eH.setAudioInputDevice(r.inputDeviceId), eH.setAudioOutputDevice(r.outputDeviceId), tM(), eH.setInputVolume(r.inputVolume), eH.setOutputVolume(r.outputVolume), eH.setH264Enabled(null == (e = r.hardwareEncoding) || e || r.openH264), eH.setAv1Enabled(null == (t = r.hardwareEncoding) || t), eH.setH265Enabled(null == (n = r.hardwareEncoding) || n), eH.setAecDump(r.aecDumpEnabled), eH.setSidechainCompression(r.sidechainCompression), eH.setSidechainCompressionStrength(r.sidechainCompressionStrength), eH.setAudioInputBypassSystemProcessing(r.bypassSystemInputProcessing));
}
function tX() {
    eK ||
        eH.enable().then(() =>
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
                enabled: !0,
                unmute: !1
            })
        );
}
function tQ(e) {
    return {
        id: eO.w5,
        index: 0,
        name: e,
        disabled: !0,
        hardwareId: void 0,
        containerId: void 0
    };
}
function tJ(e, t) {
    if (0 === e.length) {
        let e = tQ(t);
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
function t$(e, t) {
    var n;
    let r = null != (n = e[t]) ? n : p()(e).values().first();
    return null != r ? r.id : t;
}
function t0(e) {
    let t = eQ;
    if (((eQ = tJ(e, ev.intl.string(ev.t['/QIjDA']))), !p().isEqual(eQ, t))) {
        let e = tP(),
            t = t$(eQ, e.inputDeviceId);
        eH.setAudioInputDevice(t);
    }
}
function t1(e) {
    let t = eJ;
    if (((eJ = tJ(e, ev.intl.string(ev.t.xlUg0t))), !p().isEqual(eJ, t))) {
        let e = tP(),
            t = t$(eJ, e.outputDeviceId);
        eH.setAudioOutputDevice(t);
    }
}
function t2(e) {
    tt = e.length > 0;
    let t = e$;
    if (((e$ = tJ(e, ev.intl.string(ev.t.WKWARU))), e4 && !p().isEqual(e$, t))) {
        var n;
        let e = void 0 !== e$[e5],
            r = e5 === eO.w5 && (null == (n = t[eO.w5]) ? void 0 : n.disabled);
        tM(e || r);
    }
}
function t3() {
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
            { localMutes: s, localVolumes: l } = tP(i);
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
        tK(
            {
                localMutes: s,
                localVolumes: l
            },
            i
        );
    }
}
function t4(e) {
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
function t5(e, t) {
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
function t6(e) {
    ((i = e.sessionId),
        (e0 = !1),
        (e3 = !1),
        (0, en.isWeb)() ||
            (F.Z.subscribe({ location: 'handleConnectionOpen' }, (e) => {
                let t = tP();
                !e.sidechainAvailable && t.sidechainCompression ? (tK({ sidechainCompressionSettingVersion: 0 }), nA(!1)) : e.sidechainAvailable && t.sidechainCompressionSettingVersion < eL && (tK({ sidechainCompressionSettingVersion: eL }), nA(e.sidechainEnabled));
            }),
            nC()));
    let t = tP();
    if ((tZ() && (tH() ? n5(eO.iA.AUTOMATIC) : t.automaticAudioSubsystem && n6()), eH.supports(eO.AN.OFFLOAD_ADM_CONTROLS))) {
        let { enabled: e } = M.S.getCurrentConfig({ location: 'handleConnectionOpen' }, { autoTrackExposure: !0 });
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
              tK({ mostRecentlyRequestedVoiceFilter: null }))
            : n(358820).r5()),
        t3());
}
function t8(e) {
    let { mediaEngineState: t } = e;
    ((eY = t.settingsByContext), (eQ = t.inputDevices), (eJ = t.outputDevices), (tv = t.appSupported), (ts = t.krispModuleLoaded), (s = t.krispVersion), (eq = t.goLiveContext));
}
function t7() {
    i = null;
}
function t9(e) {
    switch (e.state) {
        case em.hes.CONNECTING:
            tX();
            break;
        case em.hes.RTC_CONNECTING:
            ((tr = !1), (ti = !1));
            break;
        case em.hes.RTC_CONNECTED:
            tM();
            break;
        case em.hes.DISCONNECTED:
            (nl(), nc());
    }
    tY.update();
}
function ne(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => (i === t.sessionId ? ((e0 = t.mute || t.suppress), (e3 = t.deaf), eH.eachConnection(tL), tM((null == t.guildId || null == t.channelId || null == tp || tp === t.channelId) && e4), (tp = t.channelId), !0) : (__OVERLAY__ || t.userId !== es.default.getId() || null != ef.Z.getChannelId() || tM(!1, null), e)), !1);
}
function nt(e) {
    let { mute: t } = e;
    ((e1 = t), eH.eachConnection(tL));
}
function nn(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = tP(t);
    if (t === eO.Yn.DEFAULT && (K.Z.requestPermission(eE.Eu.AUDIO), e2)) return !1;
    ((r = !i && !r) || (i = !1),
        n || (e6 = !0),
        tK(
            {
                mute: r,
                deaf: i
            },
            t
        ),
        eH.eachConnection(tL));
}
function nr(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    (tK({ mute: n }, t), r || (e6 = !0), eH.eachConnection(tL));
}
function ni(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r
    } = e;
    if (t !== eb.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    t3(!0);
}
function na(e) {
    let { context: t } = e;
    (tK({ deaf: !tP(t).deaf }, t), eH.eachConnection(tL));
}
function no(e) {
    let { context: t, userId: n } = e;
    if (n === es.default.getId()) return;
    let { localMutes: r } = tP(t);
    (r[n] ? delete r[n] : (r[n] = !0), tK({ localMutes: r }, t), eH.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t));
}
function ns(e) {
    var t, n, r, i, a, o, s;
    let { context: l, userId: c, videoToggleState: u, persist: d, isAutomatic: _ } = e;
    f()(!(d && _), 'These are not allowed to both be true.');
    let p = u === em.ZUi.DISABLED,
        { disabledLocalVideos: h } = tP(l),
        m = null != (t = h[c]) && t,
        g = tb.has(c),
        E = u === em.ZUi.AUTO_ENABLED || u === em.ZUi.MANUAL_ENABLED;
    (eN.info('disableVideo='.concat(p, ' currentlyDisabled=').concat(m, ' currentlyAutoDisabled=').concat(g, ', isVideoShown=').concat(E)), f()(!(g && !m), 'If you are auto-disabled, then you are also disabled.'));
    let b = p !== m,
        y = l === eO.Yn.DEFAULT,
        O = _ && b && y,
        v = d && b && y;
    eN.info('changed='.concat(b, ' isDefaultContext=').concat(y, ' isUpdateCausedByVideoHealthManager=').concat(O, ' isManualToggleByUser=').concat(v));
    let { videoToggleStateMap: I } = tP(l);
    if ((I[c] === em.ZUi.AUTO_PROBING && u === em.ZUi.AUTO_ENABLED && (0, W.Z)(c, p ? eO.fC.AUTO_DISABLE : eO.fC.AUTO_ENABLE, E), (I[c] = u), tK({ videoToggleStateMap: I }, l, d), u === em.ZUi.AUTO_PROBING ? null == (n = ef.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, !0) : null == (r = ef.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, !1), ty || (eN.info('isAutoDisableAllowed='.concat(ty, ' - disabling VideoHealthManager')), null == (a = ef.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()), O)) {
        if ((!p && !g) || (p && !ty)) return;
        ((0, W.Z)(c, p ? eO.fC.AUTO_DISABLE : eO.fC.AUTO_ENABLE, E), p ? tb.add(c) : tb.delete(c));
    } else v && (g && !p ? (eN.info('disallowing auto-disable for this session because of manual override by user'), (ty = !1), null == (s = ef.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(), (0, W.Z)(c, eO.fC.MANUAL_REENABLE, E)) : (0, W.Z)(c, p ? eO.fC.MANUAL_DISABLE : eO.fC.MANUAL_ENABLE, E));
    (y && !p && tb.delete(c),
        p ? (h[c] = !0) : delete h[c],
        tK({ disabledLocalVideos: h }, l, d),
        eH.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(c, null != (t = h[c]) && t);
        }, l));
}
function nl() {
    if (0 === tb.size) return;
    let e = eO.Yn.DEFAULT,
        { disabledLocalVideos: t } = tP(e);
    (tb.forEach((n) => {
        (f()(t[n], 'If you are auto-disabled, then you are also disabled.'), delete t[n], eH.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e));
    }),
        tb.clear(),
        tK({ disabledLocalVideos: t }, e, !1));
}
function nc() {
    let e = eO.Yn.DEFAULT,
        { videoToggleStateMap: t } = tP(e);
    for (let [e, n] of Object.entries(t)) n === em.ZUi.AUTO_PROBING && delete t[e];
    tK({ videoToggleStateMap: t }, e, !1);
}
function nu(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === es.default.getId()) return;
    let i = t === eO.Yn.STREAM ? eO.Yh : eO.Qx,
        { localVolumes: a } = tP(t);
    (r === i ? delete a[n] : (a[n] = r), tK({ localVolumes: a }, t), eH.eachConnection((e) => e.setLocalVolume(n, r), t));
}
function nd(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: a } = tP(t);
    ((a[n] = {
        left: r,
        right: i
    }),
        tK({ localPans: a }, t),
        eH.eachConnection((e) => e.setLocalPan(n, r, i), t));
}
function nf(e) {
    let { context: t, mode: n, options: r } = e;
    (tK(
        {
            mode: n,
            modeOptions: r
        },
        t
    ),
        eH.eachConnection(tw),
        tY.update());
}
function n_(e) {
    let { volume: t } = e;
    (tK({ inputVolume: tD(t) }), eH.setInputVolume(t));
}
function np(e) {
    let { volume: t } = e;
    (tK({ outputVolume: t }), eH.setOutputVolume(t));
}
function nh(e) {
    let { id: t } = e;
    ((t = t$(eQ, t)), (eX = performance.now()), tK({ inputDeviceId: t }), eH.setAudioInputDevice(t));
}
function nm(e) {
    let { id: t } = e;
    (tK({ outputDeviceId: (t = t$(eJ, t)) }), eH.setAudioOutputDevice(t));
}
function ng(e) {
    let { id: t } = e;
    (tK({ videoDeviceId: (t = t$(e$, t)) }), tM());
}
function nE(e) {
    let { inputProfile: t } = e,
        n = tK({ activeInputProfile: t });
    (eH.eachConnection((e) => {
        (tw(e), e.setAutomaticGainControl(n.automaticGainControl), e.setEchoCancellation(n.echoCancellation), e.setExperimentalEncoders(n.experimentalEncoders), e.setNoiseCancellation(n.noiseCancellation), e.setNoiseSuppression(n.noiseSuppression));
    }),
        eH.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        tY.update(),
        nR());
}
function nb(e) {
    return ez !== e.required && ((ez = e.required), e.required || eH.interact(), !0);
}
function ny(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    (t0(t), t1(n), t2(r));
}
function nO(e) {
    let { inputVolume: t, outputVolume: n } = e;
    tK({
        inputVolume: tD(t),
        outputVolume: n
    });
}
function nv(e) {
    var t;
    let n = tP(),
        r = eH.getAudioSubsystem(),
        i = eH.getAudioLayer(),
        a = t$(eQ, n.inputDeviceId),
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
function nI(e) {
    let t = tK({ echoCancellation: e.enabled });
    (eH.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nR(), nv(e.location));
}
function nT(e) {
    nA(e.enabled);
}
function nS(e) {
    let t = tK({ sidechainCompressionStrength: e.strength });
    eH.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function nA(e) {
    let t = tK({ sidechainCompression: e });
    eH.setSidechainCompression(t.sidechainCompression);
}
function nN(e) {
    let { enabled: t, loopbackReason: n } = e;
    return (t ? tO.add(n) : tO.delete(n), nC(), nR());
}
function nC() {
    let { voiceFiltersPreProcessMute: e } = H.Z.getCurrentConfig({ location: 'setMaybePreprocessMute' }, { autoTrackExposure: !0 }),
        t = e && !tO.has('voice_filter_preview') && !tO.has('mic_test');
    eH.setMaybePreprocessMute(t);
}
function nR() {
    let e = tP(),
        t = tO.size > 0,
        n = e.inputDeviceId,
        r = ec.Z.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        a = ec.Z.hasNoiseSuppression(n) || e.noiseSuppression,
        o = ec.Z.hasAutomaticGainControl(n) || e.automaticGainControl,
        s = e.noiseCancellation,
        l = null !== tu,
        c = tO.has('voice_filter') && 1 === tO.size;
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
function nP(e) {
    let t = tK({ noiseSuppression: e.enabled });
    (eH.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nR(), nv(e.location));
}
function nw(e) {
    let t = tK({ automaticGainControl: e.enabled });
    (eH.eachConnection((e) => e.setAutomaticGainControl(t.automaticGainControl)), nR(), nv(e.location));
}
function nD(e) {
    let t = tK({ noiseCancellation: e.enabled });
    (eH.eachConnection((e) => e.setNoiseCancellation(t.noiseCancellation)), nR(), nv(e.location));
}
function nL(e) {
    (z.Z.setKrispModelOverride(e.model), (c = e.model), nR());
}
function nx(e) {
    var t;
    ((tc = e.enabled), null == (t = eH.setNoiseCancellationEnableStats) || t.call(eH, e.enabled));
}
function nM(e) {
    let t = tK({ experimentalEncoders: e.enabled });
    eH.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
}
function nk(e) {
    var t, n;
    let { enabled: r } = e,
        i = tK({ hardwareEncoding: r });
    (eH.eachConnection((e) => {
        var t;
        return e.setHardwareH264(null == (t = i.hardwareEncoding) || t);
    }),
        eH.setH264Enabled(i.hardwareEncoding || i.openH264),
        eH.setAv1Enabled(null == (t = i.hardwareEncoding) || t),
        eH.setH265Enabled(null == (n = i.hardwareEncoding) || n));
}
function nj(e) {
    (tK({ silenceWarning: e.enabled }), tY.update());
}
function nU(e) {
    eH.setDebugLogging(e.enabled);
}
function nG(e) {
    let { level: t } = e;
    ((l = t), z.Z.setKrispSuppressionLevel(t));
}
function nB(e) {
    tK({ videoHook: e.enabled });
}
function nV(e) {
    tK({ experimentalSoundshare2: e.enabled });
}
function nF(e) {
    let { enabled: t } = e;
    tK({ useSystemScreensharePicker: t });
}
function nZ(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = tK({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r
        });
    eH.eachConnection((e) => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers));
}
function nH(e) {
    let { enabled: t } = e;
    (tK({ qos: t }), eH.eachConnection((e) => e.setQoS(t)));
}
function nY() {
    tz();
}
function nW(e) {
    let { inputDetected: t } = e;
    ((tn = t), !tr && tn && ((tr = !0), tY.update()));
}
function nK(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === e2) return !1;
    ((e2 = n), eH.eachConnection(tL));
}
function nz(e) {
    let { state: t, permissionType: n } = e,
        r = t === eE.PQ.ACCEPTED;
    switch (n) {
        case eE.Eu.AUDIO:
            ((tg = !0), eH.eachConnection(tL));
            break;
        case eE.Eu.CAMERA:
            !r && e4 && tM(!1);
            break;
        default:
            return !1;
    }
}
function nq() {
    return ts || !1;
}
async function nX() {
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
        ($.default.track(em.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), tK({ noiseCancellation: !1 }));
    } finally {
        to = !1;
    }
}
function nQ() {
    return ((0, en.isWindows)() && 'arm64' !== ea.ZP.architecture) || (0, en.isLinux)() || (0, en.isMac)();
}
function nJ() {
    !nQ() || __OVERLAY__ || to || ts ? ((0, en.isWeb)() && eH.supports(eO.AN.NOISE_CANCELLATION) ? ((ts = !0), r.emitChange()) : (0, en.isWeb)() && tK({ noiseCancellation: !1 })) : ((to = !0), nX());
}
function n$(e) {
    let { enabled: t } = e;
    ($.default.track(em.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != tu ? tu : null,
        enabled: t
    }),
        tK({ voiceFilterPlaybackEnabled: t }));
}
function n0(e) {
    let { newVoiceFilterId: t } = e;
    (tK({ mostRecentlyRequestedVoiceFilter: t }), eH.eachConnection((e) => e.setVoiceFilterId(t)));
}
function n1() {
    tK({ mostRecentlyRequestedVoiceFilter: null });
}
function n2(e) {
    let { voiceFilterId: t } = e;
    ((tf = tu), (t_ = td), (tu = t), (td = null === t ? null : Date.now()));
}
function n3(e) {
    let t = e.bypassEnabled;
    (tK({ bypassSystemInputProcessing: t }), eH.setAudioInputBypassSystemProcessing(t), nv(e.location));
}
function n4(e) {
    n5(e.subsystem);
}
function n5(e) {
    e === eO.iA.AUTOMATIC ? (tK({ automaticAudioSubsystem: !0 }), n6()) : (tK({ automaticAudioSubsystem: !1 }), eH.setAudioSubsystem(e));
}
function n6() {
    eH.queueAudioSubsystem(eO.iA.EXPERIMENTAL);
}
function n8(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && tM(i, null), null != t || null == n)) {
        ta = !1;
        return;
    }
    if (ta) return;
    ta = !0;
    let a = tP();
    (a.mute || a.deaf) &&
        (tK({
            deaf: !1,
            mute: !1
        }),
        eH.eachConnection(tL));
}
function n7(e) {
    let { application: t } = e;
    eW.add(t.id);
}
function n9(e) {
    let { application: t } = e;
    eW.delete(t.id);
}
function re(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case 'audio':
                ((eK = !1), eH.eachConnection(tL));
                break;
            case 'video':
                tM(!1);
        }
}
function rt(e) {
    ((eK = e.enabled),
        e.unmute &&
            tK({
                mute: !1,
                deaf: !1
            }),
        eH.eachConnection(tL));
}
function rn(e) {
    let { enabled: t } = e;
    (K.Z.requestPermission(eE.Eu.CAMERA), tM(t));
}
function rr(e) {
    let { sourceId: t, applicationName: n, quality: i } = e,
        a = A.Z.isDecoupledGameClippingEnabled(),
        s = A.Z.getSettings().decoupledClipsEnabled;
    if (!a || !s || null == I.Z) return;
    let l = null,
        c = null,
        u = ee.Z.getPidFromDesktopSource(t);
    ({ soundshareId: l, soundshareSession: c } = t4(u));
    let d = {
        desktopSource: {
            id: t,
            sourcePid: u,
            soundshareId: l,
            soundshareSession: c
        },
        quality: i
    };
    (null != o && o.desktopSource.id !== d.desktopSource.id && (eH.setClipsSource(null), (0, en.isWindows)() && null != o.desktopSource.soundshareId && T.pn(o.desktopSource.soundshareId)), null != l && t5(l, c), (o = d));
    let f = tC(),
        _ = tP().videoHook;
    eH.setClipsSource({
        desktopDescription: {
            id: o.desktopSource.id,
            soundshareId: o.desktopSource.soundshareId,
            useVideoHook: _,
            useGraphicsCapture: tB(),
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: tF(),
            videoHookStaleFrameTimeoutMs: ek,
            graphicsCaptureStaleFrameTimeoutMs: ej,
            hdrCaptureMode: f
        },
        quality: i,
        applicationName: n
    });
}
function ri(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((o = null), eH.setClipsSource(null));
}
function ra(e) {
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
        (en.isPlatformEmbedded && !0 === o && (({ soundshareId: e, soundshareSession: r } = t4(c)), null != e && t5(e, r)),
            tx(s),
            tM(s === eO.Yn.STREAM && e4, {
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
    } else tM(e4, null);
}
function ro(e) {
    let { section: t } = e;
    return (t === em.oAB.VOICE && tX(), !1);
}
function rs() {
    return (eH.eachConnection(tU), !1);
}
function rl(e) {
    let { enabled: t } = e,
        n = tK({ openH264: t });
    (eH.setH264Enabled(n.hardwareEncoding || n.openH264),
        eH.eachConnection((e) => {
            var t;
            return e.setSoftwareH264(null == (t = n.openH264) || t);
        }));
}
function rc(e) {
    let { enabled: t } = e,
        n = tK({ aecDumpEnabled: t });
    eH.setAecDump(n.aecDumpEnabled);
}
function ru(e) {
    let { state: t } = e,
        n = D.Z.isEnabled();
    if (t === em.$7l.BACKGROUND && e4 && !n) ((te = !0), tM(!1));
    else {
        if (t !== em.$7l.ACTIVE || !te) return !1;
        ((te = !1), tM(!0));
    }
    return !0;
}
function rd(e) {
    eH.eachConnection((t) => t.setBitRate(e.bitrate));
}
function rf() {
    if ((!e4 && null == a) || null != ef.Z.getRTCConnectionId()) return !1;
    tM(!1, null);
}
function r_() {
    return !!th && ((th = !1), !0);
}
function rp(e) {
    eH.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function rh(e) {
    let { settings: t } = e;
    eH.applyMediaFilterSettings(t).finally(() => {
        ((tm = !1), r.emitChange());
    });
}
function rm() {
    tm = !0;
}
function rg() {
    tm = !1;
}
function rE(e) {
    tT = e.enabled;
}
class rb extends (u = E.ZP.Store) {
    initialize() {
        (tG(),
            tW(),
            nJ(),
            nc(),
            (tv = {
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
        return tv[e] || eH.supports(e);
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
        return nq();
    }
    isNoiseCancellationError() {
        return th;
    }
    isAutomaticGainControlSupported() {
        return eH.supports(eO.AN.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !tH() && (eH.supports(eO.AN.LEGACY_AUDIO_SUBSYSTEM) || eH.supports(eO.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return eH.supports(eO.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && 'experimental' === eH.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return nq();
    }
    isAecDumpSupported() {
        return eH.supports(eO.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return eH.supports(eO.AN.VIDEO) && eH.supports(eO.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        let t = (null == (e = eu.Z.getChannel(tp)) ? void 0 : e.type) === em.d4z.GUILD_STAGE_VOICE,
            n = r.getHardwareEncoding();
        return !t && n && G.Z.simulcastEnabled();
    }
    getAecDump() {
        return tP().aecDumpEnabled;
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
    getKrispEnableStats() {
        return tc;
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
        return !this.isEnabled() || tP(e).mute || !K.Z.didHavePermission(eE.Eu.AUDIO) || this.isSelfDeaf(e) || (e === eO.Yn.DEFAULT && e2);
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
        return tT;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eO.Yn.DEFAULT;
        return !this.isSupported() || tP(e).deaf;
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
        return e !== es.default.getId() && (tP(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return eH.supports(eO.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eO.Yn.DEFAULT;
        return null != (t = tP(n).disabledLocalVideos[e]) && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eO.Yn.DEFAULT;
        return null != (t = tP(n).videoToggleStateMap[e]) ? t : em.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eO.Yn.DEFAULT;
        return t === eO.Yn.DEFAULT && tb.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eO.Yn.DEFAULT;
        return e === eO.Yn.DEFAULT && tb.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tm;
    }
    isNativeAudioPermissionReady() {
        return tg;
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
            n = tP(t).localPans[e];
        return null != n ? n : eM;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eO.Yn.DEFAULT,
            n = t === eO.Yn.STREAM ? eO.Yh : eO.Qx,
            r = tP(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return tP().inputVolume;
    }
    getOutputVolume() {
        return tP().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eO.Yn.DEFAULT;
        return tP(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eO.Yn.DEFAULT;
        return tP(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return tu;
    }
    getActiveVoiceFilterAppliedAt() {
        return td;
    }
    getPreviousVoiceFilter() {
        return tf;
    }
    getPreviousVoiceFilterAppliedAt() {
        return t_;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return tP().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return tP().voiceFilterPlaybackEnabled;
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
        return t$(eQ, tP().inputDeviceId);
    }
    getOutputDeviceId() {
        return t$(eJ, tP().outputDeviceId);
    }
    getVideoDeviceId() {
        return t$(e$, tP().videoDeviceId);
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
        let e = tP();
        return ec.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return tP().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return tP().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return tP().h265Enabled;
    }
    getLoopback() {
        return tO.size > 0;
    }
    getLoopbackReasons() {
        return tO;
    }
    getNoiseSuppression() {
        let e = tP();
        return ec.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tP();
        return ec.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return tP().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return tP().noiseCancellation;
    }
    getExperimentalEncoders() {
        return tP().experimentalEncoders;
    }
    getHardwareEncoding() {
        var e;
        return null == (e = tP().hardwareEncoding) || e;
    }
    getEnableSilenceWarning() {
        return tP().silenceWarning;
    }
    getDebugLogging() {
        return eH.getDebugLogging();
    }
    getQoS() {
        return tP().qos;
    }
    getAttenuation() {
        return tP().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return tP().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return tP().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return tZ() && tP().automaticAudioSubsystem ? eO.iA.AUTOMATIC : eH.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return eH.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return tP().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === ey._.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eO.Yn.DEFAULT;
        return tP(e);
    }
    getState() {
        return {
            settingsByContext: eY,
            inputDevices: eQ,
            outputDevices: eJ,
            appSupported: tv,
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
        return tP().videoHook;
    }
    supportsVideoHook() {
        return eH.supports(eO.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tP().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e);
    }
    supportsExperimentalSoundshare() {
        return eH.supports(eO.AN.EXPERIMENTAL_SOUNDSHARE) && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eg.I9);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = tP().useSystemScreensharePicker,
            n = (0, en.isLinux)() || ((0, en.isMac)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eg.jR));
        return e && (null != t ? t : n);
    }
    supportsSystemScreensharePicker() {
        return eH.supports(eO.AN.NATIVE_SCREENSHARE_PICKER);
    }
    getOpenH264() {
        return tP().openH264;
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
        return null != (e = tP().modeOptions.vadKrispActivationThreshold) ? e : ex;
    }
    hasActiveCallKitCall() {
        return tS;
    }
    setHasActiveCallKitCall(e) {
        tS = e;
    }
    supportsScreenSoundshare() {
        return (0, en.isMac)() ? eH.supports(eO.AN.SOUNDSHARE) && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eg.yG) && tF() : (0, en.isWindows)() ? eH.supports(eO.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, en.isLinux)() && eH.supports(eO.AN.SCREEN_SOUNDSHARE);
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
        return tI;
    }
}
function ry(e) {
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
eI(rb, 'displayName', 'MediaEngineStore');
let rO = (r = new rb(v.Z, {
    VOICE_CHANNEL_SELECT: n8,
    VOICE_STATE_UPDATES: ne,
    CONNECTION_OPEN: t6,
    CONNECTION_CLOSED: t7,
    RTC_CONNECTION_STATE: t9,
    AUDIO_SET_TEMPORARY_SELF_MUTE: nt,
    AUDIO_TOGGLE_SELF_MUTE: nn,
    AUDIO_SET_SELF_MUTE: nr,
    AUDIO_TOGGLE_SELF_DEAF: na,
    AUDIO_TOGGLE_LOCAL_MUTE: no,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: ns,
    AUDIO_SET_LOCAL_VOLUME: nu,
    AUDIO_SET_LOCAL_PAN: nd,
    AUDIO_SET_MODE: nf,
    AUDIO_SET_INPUT_VOLUME: n_,
    AUDIO_SET_OUTPUT_VOLUME: np,
    AUDIO_SET_INPUT_DEVICE: nh,
    AUDIO_SET_OUTPUT_DEVICE: nm,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: nE,
    AUDIO_SET_ECHO_CANCELLATION: nI,
    AUDIO_SET_SIDECHAIN_COMPRESSION: nT,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nS,
    AUDIO_SET_LOOPBACK: nN,
    AUDIO_SET_NOISE_SUPPRESSION: nP,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nw,
    AUDIO_SET_NOISE_CANCELLATION: nD,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: nL,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: nj,
    AUDIO_SET_DEBUG_LOGGING: nU,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: nG,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: nx,
    MEDIA_ENGINE_SET_VIDEO_HOOK: nB,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: nV,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: nF,
    AUDIO_SET_ATTENUATION: nZ,
    AUDIO_SET_QOS: nH,
    MEDIA_ENGINE_DEVICES: ny,
    AUDIO_VOLUME_CHANGE: nO,
    AUDIO_RESET: nY,
    AUDIO_INPUT_DETECTED: nW,
    AUDIO_SET_SUBSYSTEM: n4,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: n3,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rt,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rn,
    MEDIA_ENGINE_PERMISSION: re,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: ra,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: ng,
    MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nM,
    MEDIA_ENGINE_INTERACTION_REQUIRED: nb,
    USER_SETTINGS_MODAL_INIT: ro,
    USER_SETTINGS_MODAL_SET_SECTION: ro,
    CERTIFIED_DEVICES_SET: rs,
    RPC_APP_CONNECTED: n7,
    RPC_APP_DISCONNECTED: n9,
    OVERLAY_INITIALIZE: t8,
    MEDIA_ENGINE_SET_OPEN_H264: rl,
    MEDIA_ENGINE_SET_HARDWARE_ENCODING: nk,
    APP_STATE_UPDATE: ru,
    SET_CHANNEL_BITRATE: rd,
    SET_VAD_PERMISSION: nK,
    SET_NATIVE_PERMISSION: nz,
    SET_CHANNEL_VIDEO_QUALITY_MODE: rp,
    MEDIA_ENGINE_SET_AEC_DUMP: rc,
    CHANNEL_DELETE: rf,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: r_,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rh,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rm,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rg,
    USER_SETTINGS_PROTO_UPDATE: ni,
    CLIPS_INIT: rr,
    CLIPS_SETTINGS_UPDATE: ri,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rE,
    VOICE_FILTER_REQUEST_SWITCH: n0,
    VOICE_FILTER_LOOPBACK_TOGGLE: n$,
    VOICE_FILTER_APPLIED: n2,
    VOICE_FILTER_DOWNLOAD_FAILED: n1,
    VOICE_FILTER_APPLY_FAILED: n1
}));
