let r, i, a, o, s, l, c;
n.d(t, { Z: () => rm }), n(388685), n(953529), n(457542), n(539854), n(642613), n(49124), n(337869);
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
    S = n(887278),
    T = n(547727),
    A = n(435064),
    N = n(779618),
    C = n(710845),
    R = n(535911),
    P = n(458725),
    w = n(353926),
    D = n(646047),
    L = n(594190),
    x = n(502286),
    k = n(355552),
    M = n(294473),
    j = n(706629),
    U = n(166884),
    G = n(529558),
    B = n(111672),
    F = n(441167),
    V = n(580930),
    Z = n(787517),
    H = n(338336),
    Y = n(751571),
    W = n(311473),
    K = n(725380),
    z = n(581883),
    q = n(875527),
    X = n(420439),
    Q = n(626135),
    J = n(12647),
    $ = n(70956),
    ee = n(358085),
    et = n(747268),
    en = n(960048),
    er = n(998502),
    ei = n(13140),
    ea = n(314897),
    eo = n(967368),
    es = n(463395),
    el = n(592125),
    ec = n(858340),
    eu = n(19780),
    ed = n(704806),
    ef = n(594174),
    e_ = n(631768),
    ep = n(981631),
    eh = n(70722),
    em = n(761274),
    eg = n(526761),
    eE = n(345655),
    eb = n(65154),
    ey = n(388032);
function eO(e, t, n) {
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
function ev(e) {
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
                eO(e, t, n[t]);
            });
    }
    return e;
}
function eI(e, t) {
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
function eS(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eI(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eT = new C.Z('MediaEngineStore'),
    eA = 'MediaEngineStore',
    eN = 4,
    eC = 1,
    eR = 1,
    eP = 1,
    ew = 1,
    eD = {
        left: 1,
        right: 1
    },
    eL = 500,
    ex = 5 * $.Z.Millis.SECOND,
    ek = -60,
    eM = 100,
    ej = 2 * $.Z.Millis.SECOND,
    eU = 0;
function eG() {
    return {
        mode: ep.pM4.VOICE_ACTIVITY,
        modeOptions: {
            threshold: ek,
            autoThreshold: ee.isPlatformEmbedded || __OVERLAY__,
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
        inputVolume: eb.Qx,
        outputVolume: eb.Qx,
        inputDeviceId: eb.w5,
        outputDeviceId: eb.w5,
        videoDeviceId: eb.w5,
        qos: !1,
        qosMigrated: !1,
        videoHook: eF.supports(eb.AN.VIDEO_HOOK),
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
let eB = {
        [eE._.CUSTOM]: {},
        [eE._.VOICE_ISOLATION]: {
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
        [eE._.STUDIO]: {
            mode: ep.pM4.VOICE_ACTIVITY,
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
    eF = (0, b.Mt)((0, b.jj)());
eT.enableNativeLogger(!0);
let eV = {},
    eZ = new Set([eb.Yn.DEFAULT]),
    eH = eF.supports(eb.AN.AUTO_ENABLE),
    eY = !1,
    eW = eb.Yn.STREAM,
    eK = performance.now(),
    ez = { [eb.w5]: tK('No Input Devices') },
    eq = { [eb.w5]: tK('No Output Devices') },
    eX = { [eb.w5]: tK('No Video Devices') },
    eQ = !1,
    eJ = !1,
    e$ = !1,
    e0 = !1,
    e1 = !1,
    e2 = eb.Av,
    e3 = !1,
    e4 = !1,
    e5 = !1,
    e6 = new O.V7(),
    e8 = !1,
    e7 = !1,
    e9 = null,
    te = !1,
    tt = !1,
    tn = !1,
    tr = !1,
    ti = !1,
    ta = [],
    to = null,
    ts = null,
    tl = null,
    tc = null,
    tu = null,
    td = !1,
    tf = !1,
    t_ = !1;
Y.Z.hasPermission(em.Eu.AUDIO, { showAuthorizationError: !1 }), Y.Z.hasPermission(em.Eu.CAMERA, { showAuthorizationError: !1 });
let tp = !1,
    th = new Set(),
    tm = tp,
    tg = new Set(),
    tE = {},
    tb = null,
    ty = !0,
    tO = !1,
    tv = {},
    tI = 5 * $.Z.Millis.SECOND;
function tS() {
    var e, t;
    return null != (t = null == (e = ef.default.getCurrentUser()) ? void 0 : e.isStaff()) && t ? 'always' : et.Z === g.R.CANARY ? 'permittedDevicesOnly' : 'never';
}
function tT() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eb.Yn.DEFAULT,
        t = eV[e];
    return null == t && ((t = eG()), (eV[e] = t)), t;
}
function tA() {
    var e, t, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eb.Yn.DEFAULT,
        i = tT(r),
        a = eB[null != (e = i.activeInputProfile) ? e : eE._.CUSTOM];
    return eS(ev({}, i, a), { modeOptions: ev({}, null != (t = i.modeOptions) ? t : {}, null != (n = a.modeOptions) ? n : {}) });
}
function tN(e) {
    let t = tA(e.context);
    e.setInputMode(t.mode, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: t.modeOptions.autoThreshold,
        vadUseKrisp: t.modeOptions.vadUseKrisp && nH(),
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        pttReleaseDelay: t.modeOptions.delay
    });
}
function tC(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eb.Qx;
    return p().clamp(e, 0, t);
}
function tR(e) {
    let t = tA(e.context),
        n = !eH || t.mute || t.deaf;
    e.context === eb.Yn.DEFAULT ? (n = n || eQ || eJ || e$ || !Y.Z.didHavePermission(em.Eu.AUDIO)) : e.context === eb.Yn.STREAM && (n = !0), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eb.Yn.DEFAULT && T.Z.updateNativeMute();
}
function tP(e) {
    e !== eW && (null != a && eF.setGoLiveSource(null, eW), (eW = e));
}
function tw() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e1,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        s = a;
    if (((null == s ? void 0 : s.desktopSource) != null && s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? void 0 : e.id) && (null != s.desktopSource.soundshareId && (0, ee.isWindows)() && S.pn(s.desktopSource.soundshareId), eF.setGoLiveSource(null, eW)), (null == s ? void 0 : s.cameraSource) != null && (s.cameraSource.videoDeviceGuid !== (null == o || null == (t = o.cameraSource) ? void 0 : t.videoDeviceGuid) || s.cameraSource.audioDeviceGuid !== (null == o || null == (n = o.cameraSource) ? void 0 : n.audioDeviceGuid)) && eF.setGoLiveSource(null, eW), (e1 || i) && ((e2 = (e1 = i) ? tq(eX, tA().videoDeviceId) : eb.Av), eF.setVideoInputDevice(e2)), (a = o), null != o)) {
        let e = {
            resolution: o.quality.resolution,
            frameRate: o.quality.frameRate
        };
        if (null != o.desktopSource) {
            let t = tS(),
                n = tA().videoHook,
                i = tM(),
                a = i ? (tj() && (0, Z.R)('MediaEngineStore_updateVideo').enabled ? eh.zj : eh.ZM) : 0;
            eF.setGoLiveSource(
                {
                    desktopDescription: {
                        id: o.desktopSource.id,
                        soundshareId: o.desktopSource.soundshareId,
                        useVideoHook: n,
                        useGraphicsCapture: i,
                        useGraphicsCaptureApiLevel: a,
                        useLoopback: r.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: tU(),
                        videoHookStaleFrameTimeoutMs: eL,
                        graphicsCaptureStaleFrameTimeoutMs: ex,
                        hdrCaptureMode: t
                    },
                    quality: e
                },
                eW
            );
        }
        null != o.cameraSource &&
            eF.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: o.cameraSource.audioDeviceGuid
                    },
                    quality: e
                },
                eW
            );
    }
}
function tD(e, t, n, r) {
    var i;
    let a = null != (i = null == e ? void 0 : e.soundshareSession) ? i : '';
    null == tv[a] && (tv[a] = new Set());
    let o = null != t && !tv[a].has(t);
    o && tv[a].add(t),
        (null == t || o) &&
            Q.default.track(
                ep.rMx.SOUNDSHARE_FAILED,
                ev(
                    {
                        soundshare_failure_code: t,
                        soundshare_failure_reason: n,
                        soundshare_failure_will_retry: r
                    },
                    (0, x.Z)(e)
                )
            );
}
function tL(e) {
    switch (e) {
        case eb.H3.CPU_OVERUSE:
            return P.Nk.NoiseCancellerCpuOveruse;
        case eb.H3.FAILED:
            return P.Nk.NoiseCancellerFailed;
        case eb.H3.VAD_CPU_OVERUSE:
            return P.Nk.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function tx(e) {
    let t = tA(),
        n = t.inputDeviceId;
    if ((e.setEchoCancellation(es.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(es.Z.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(es.Z.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), e.setVoiceFilterId(to), (0, ee.isWeb)())) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function tk() {
    eF.on(b.aB.Connection, (e) => {
        var t, n;
        tN(e), tR(e), tx(e);
        let i = tA();
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers), e.setQoS(i.qos), e.setExperimentalEncoders(i.experimentalEncoders), e.setHardwareH264(null == (t = i.hardwareEncoding) || t), e.setSoftwareH264(null == (n = i.openH264) || n);
        let o = eu.Z.getGuildId(),
            { muteBeforeProcessing: s, pttBeforeProcessing: l, skipEncode: c } = (null != o ? j.Z : M.Z).getCurrentConfig(ev({ location: 'setupMediaEngine' }, null != o && { guildId: o }), { autoTrackExposure: !0 });
        s && e.setExperimentFlag(eb.V8.MUTE_BEFORE_PROCESSING, !0), l && e.setExperimentFlag(eb.V8.PTT_BEFORE_PROCESSING, !0), c && e.setExperimentFlag(eb.V8.SKIP_ENCODE, !0);
        let u = !1,
            d = !0;
        if ((e.setExperimentFlag(eb.V8.RESET_DECODER_ON_ERRORS, !0), u && e.setExperimentFlag(eb.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0), d && e.setExperimentFlag(eb.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0), e.context === eb.Yn.STREAM)) {
            let { simulcastEnabled: t, lqStreamBitrate: n } = U.Z.getConfig();
            e.configureGoLiveSimulcast(t, n);
        }
        (0, ee.isWindows)() ? ((null == tb ? void 0 : tb.startsWith('NVIDIA')) || (null == tb ? void 0 : tb.startsWith('AMD')) ? e.setExperimentFlag(eb.V8.SIGNAL_AV1, !0) : e.setExperimentFlag(eb.V8.SIGNAL_AV1_DECODE, !0)) : ((0, ee.isMac)() || (0, ee.isLinux)()) && e.setExperimentFlag(eb.V8.SIGNAL_AV1_DECODE, !0), (0, ee.isWindows)() && e.setExperimentFlag(eb.V8.SIGNAL_AV1_HARDWARE_DECODE, !0), eF.setHasFullbandPerformance((0, R.Z)());
        let f = (0, k.D)('setupMediaEngine').enabled;
        if ((e.setRemoteAudioHistory(1000 * !!f), (0, N.Z)(r))) {
            let t = A.Z.getSettings();
            e.setExperimentFlag(eb.V8.STREAMER_CLIP, t.clipsEnabled);
            let { enableViewerClipping: n } = F.Z.getCurrentConfig({ location: 'f627ab_15' }, { autoTrackExposure: !1 });
            e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eb.ux);
        }
        for (let t of ((i = tA(e.context)), e.setPostponeDecodeLevel(eM), Object.keys(i.localMutes))) t !== ea.default.getId() && e.setLocalMute(t, i.localMutes[t]);
        for (let t of Object.keys(i.localVolumes)) t !== ea.default.getId() && e.setLocalVolume(t, i.localVolumes[t]);
        for (let t of Object.keys(i.localPans)) {
            let n = i.localPans[t];
            e.setLocalPan(t, n.left, n.right);
        }
        for (let t of Object.keys(i.disabledLocalVideos)) e.setLocalVideoDisabled(t, i.disabledLocalVideos[t]);
        e.on(b.Sh.Speaking, (t, n) => {
            v.Z.dispatch({
                type: 'SPEAKING',
                context: e.context,
                userId: t,
                speakingFlags: n
            });
        }),
            e.context === eb.Yn.DEFAULT &&
                ((e4 = !1),
                (e5 = !1),
                e.on(b.Sh.SpeakingWhileMuted, () => {
                    (e4 = !0),
                        (e5 = !0),
                        r.emitChange(),
                        e6.stop(),
                        e6.start(ej, () => {
                            (e5 = !1), r.emitChange();
                        });
                })),
            e.on(b.Sh.DesktopSourceEnd, () => {
                v.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                    settings: { context: e.context }
                });
            }),
            e.on(b.Sh.SoundshareAttached, () => {
                (null == a ? void 0 : a.desktopSource) != null && Q.default.track(ep.rMx.SOUNDSHARE_ATTACHED, (0, x.Z)(null == a ? void 0 : a.desktopSource));
            }),
            e.on(b.Sh.SoundshareFailed, (e) => {
                let { failureCode: t, failureReason: n, willRetry: r } = e;
                tD(null == a ? void 0 : a.desktopSource, t, n, r);
            }),
            e.on(b.Sh.SoundshareSpeaking, () => {
                (null == a ? void 0 : a.desktopSource) != null && (Q.default.track(ep.rMx.SOUNDSHARE_TRANSMITTING, (0, x.Z)(null == a ? void 0 : a.desktopSource)), null != ec.Z.getHookError(ep.K3D.SOUND) && v.Z.wait(() => v.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
            });
        let _ = new O.V7();
        e.on(b.Sh.SoundshareTrace, (e) => {
            switch (e.type) {
                case 'soundshare_attach_requested':
                    _.start(tI, () => {
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
                        (tD(null == a ? void 0 : a.desktopSource, n, t, r),
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
                    Q.default.track(
                        ep.rMx.VIDEOHOOK_INITIALIZED,
                        ev(
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
                eT.warn('noisecancellererror event: '.concat(e)),
                    (0, P.kr)({
                        type: P.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tL(e)
                    }),
                    (td = !0),
                    Q.default.track(ep.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
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
            e.on(b.Sh.VoiceActivityDetectorError, (e) => {
                eT.warn('voiceactivitydetectorerror event: '.concat(e)),
                    (0, P.kr)({
                        type: P.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tL(e)
                    }),
                    Q.default.track(ep.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    v.Z.dispatch({
                        type: 'AUDIO_SET_MODE',
                        context: eb.Yn.DEFAULT,
                        mode: ep.pM4.VOICE_ACTIVITY,
                        options: eS(ev({}, tA(eb.Yn.DEFAULT).modeOptions), { vadUseKrisp: !1 })
                    }),
                    v.Z.dispatch({
                        type: 'MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR',
                        code: e
                    });
            }),
            e.on(b.Sh.SdpError, (e, t, n, r) => {
                Q.default.track(ep.rMx.SDP_ERROR, {
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
            e.setBitRate(eo.Z.bitrate),
            e.applyVideoQualityMode(e_.Z.mode);
    }),
        eF.on(b.aB.DeviceChange, (e, t, n) => {
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_DEVICES',
                inputDevices: e,
                outputDevices: t,
                videoDevices: n
            });
        }),
        eF.on(b.aB.VolumeChange, (e, t) => {
            v.Z.dispatch({
                type: 'AUDIO_VOLUME_CHANGE',
                inputVolume: e,
                outputVolume: t
            });
        }),
        eF.on(b.aB.DesktopSourceEnd, () => {
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                settings: null
            });
        }),
        eF.on(b.aB.AudioPermission, (e) => {
            (t_ = !0),
                v.Z.dispatch({
                    type: 'MEDIA_ENGINE_PERMISSION',
                    kind: 'audio',
                    granted: e
                });
        }),
        eF.on(b.aB.VideoPermission, (e) => {
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_PERMISSION',
                kind: 'video',
                granted: e
            });
        }),
        eF.on(b.aB.WatchdogTimeout, async () => {
            let e;
            try {
                await J.Z.submitLiveCrashReport({ message: { message: 'Voice Watchdog Timeout' } });
            } catch (t) {
                'number' == typeof t.status && (e = t.status);
            }
            eT.warn('Watchdog timeout, report submission status: '.concat(null != e ? e : 200)), Q.default.track(ep.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        eF.on(b.aB.VideoInputInitialized, (e) => {
            Q.default.track(ep.rMx.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * $.Z.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: eu.Z.getMediaSessionId(),
                rtc_connection_id: eu.Z.getRTCConnectionId()
            });
        }),
        eF.on(b.aB.AudioInputInitialized, (e) => {
            Q.default.track(ep.rMx.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * $.Z.Millis.SECOND),
                rtc_connection_id: eu.Z.getRTCConnectionId()
            });
        }),
        eF.on(b.aB.ClipsRecordingRestartNeeded, () => {
            v.Z.dispatch({ type: 'CLIPS_RESTART' });
        }),
        eF.on(b.aB.ClipsInitFailure, (e, t) => {
            v.Z.wait(() => {
                v.Z.dispatch({
                    type: 'CLIPS_INIT_FAILURE',
                    errMsg: e,
                    applicationName: t
                });
            });
        }),
        eF.on(b.aB.ClipsRecordingEnded, (e, t) => {
            var n, r;
            (null == o || null == (n = o.desktopSource) ? void 0 : n.id) === e && (null != t && (null == a || null == (r = a.desktopSource) ? void 0 : r.soundshareId) !== t && S.pn(t), (o = null));
        }),
        eF.on(b.aB.NativeScreenSharePickerUpdate, (e, t) => {
            v.Z.dispatch({
                type: 'NATIVE_SCREEN_SHARE_PICKER_UPDATE',
                existing: e,
                content: t
            });
        }),
        eF.on(b.aB.NativeScreenSharePickerCancel, (e) => {
            v.Z.dispatch({
                type: 'NATIVE_SCREEN_SHARE_PICKER_CANCEL',
                existing: e
            });
        }),
        eF.on(b.aB.NativeScreenSharePickerError, (e) => {
            v.Z.dispatch({
                type: 'NATIVE_SCREEN_SHARE_PICKER_ERROR',
                error: e
            });
        }),
        eF.on(b.aB.AudioDeviceModuleError, (e, t, n) => {
            Q.default.track(ep.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                audio_device_module: e,
                code: t,
                device_name: n
            });
        }),
        eF.on(b.aB.VideoCodecError, (e) => {
            let t = 'encode' === e.mode ? P.u.VIDEO_ENCODE_ERROR : P.u.VIDEO_DECODE_ERROR,
                n = {
                    videoCodec: e.codecStandard,
                    errorMessage: e.message
                };
            (0, P.kr)(t === P.u.VIDEO_ENCODE_ERROR ? eS(ev({ type: t }, n), { videoEncoder: e.implName }) : eS(ev({ type: t }, n), { videoDecoder: e.implName }));
        }),
        eF.on(b.aB.ConnectionStats, (e) => {
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_CONNECTION_STATS',
                connectionStats: e.map((e) => {
                    let { stats: t, connection: n } = e;
                    return {
                        stats: t,
                        mediaEngineConnectionId: n.mediaEngineConnectionId,
                        version: eU++,
                        context: n.context
                    };
                })
            });
        }),
        eF.on(b.aB.VoiceQueueMetrics, (e) => {
            let t = rh(e);
            null !== t && Q.default.track(ep.rMx.VOICE_QUEUE_METRICS, t);
        }),
        eF.setOnVideoContainerResized((e, t, n) => {
            v.Z.wait(() =>
                v.Z.dispatch({
                    type: 'VIDEO_SIZE_UPDATE',
                    streamId: e,
                    width: t,
                    height: n
                })
            );
        }),
        tF.reset(),
        (0, ed.q)().then((e) => {
            null != e && (tb = e.gpu_brand);
        });
}
function tM() {
    return (0, ee.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eh.c5);
}
function tj() {
    return (0, ee.isWindows)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eh.sN);
}
function tU() {
    return (0, ee.isMac)() && eF.supports(eb.AN.SCREEN_CAPTURE_KIT) && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eh.C7);
}
function tG() {
    return (0, ee.isWindows)() && eF.supports(eb.AN.AUTOMATIC_AUDIO_SUBSYSTEM) && eF.supports(eb.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH);
}
function tB() {
    return eF.supports(eb.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
let tF = new (class {
    start() {
        this.started || ((this.started = !0), eF.on(b.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            eF.removeListener(b.aB.Silence, this.handleSilence),
            v.Z.dispatch({
                type: 'AUDIO_INPUT_DETECTED',
                inputDetected: null
            }));
    }
    update() {
        let e = tA();
        !te && eu.Z.getState() === ep.hes.RTC_CONNECTED && e.mode === ep.pM4.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop();
    }
    reset() {
        this.stop(), this.update();
    }
    constructor() {
        eO(this, 'stateChangeTimeout', void 0),
            eO(this, 'noVoiceTimeout', 5000),
            eO(this, 'voiceTimeout', 1500),
            eO(this, 'started', !1),
            eO(this, 'handleSilence', (e) => {
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
                                    e && (tt = !0));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout
                    ));
            });
    }
})();
function tV() {
    var e;
    let t = y.K.get('audio');
    null != t && (y.K.set(eA, { [eb.Yn.DEFAULT]: t }), y.K.remove('audio')),
        (eV = null != (e = y.K.get(eA)) ? e : {}),
        p().each(eV, (e) => {
            if ((p().defaultsDeep(e, eG()), null != e.modeOptions && 'string' == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, ei.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== eN && ((e.vadUseKrispSettingVersion = eN), (e.modeOptions.vadUseKrisp = !0)), e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)), !e.vadThrehsoldMigrated)) {
                var t;
                (e.vadThrehsoldMigrated = !0), (null == (t = e.modeOptions) ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = ek);
            }
            (0, ee.isWeb)() ? e.ncUseKrispjsSettingVersion !== eR && ((e.ncUseKrispjsSettingVersion = eR), (e.noiseSuppression = !1), (e.noiseCancellation = !0)) : e.ncUseKrispSettingVersion !== eC && ((e.ncUseKrispSettingVersion = eC), (e.noiseSuppression = !1), (e.noiseCancellation = !0)), e.hardwareEnabledVersion !== eP && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = eP)), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
        }),
        tY();
}
function tZ(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eb.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = tT(t);
    return Object.assign(r, e), !__OVERLAY__ && n && y.K.set(eA, eV), r;
}
function tH() {
    y.K.remove(eA), location.reload();
}
function tY() {
    var e, t, n;
    let r = tA();
    eF.setAudioInputDevice(r.inputDeviceId), eF.setAudioOutputDevice(r.outputDeviceId), tw(), eF.setInputVolume(r.inputVolume), eF.setOutputVolume(r.outputVolume), eF.setH264Enabled(null == (e = r.hardwareEncoding) || e || r.openH264), eF.setAv1Enabled(null == (t = r.hardwareEncoding) || t), eF.setH265Enabled(null == (n = r.hardwareEncoding) || n), eF.setAecDump(r.aecDumpEnabled), eF.setSidechainCompression(r.sidechainCompression), eF.setSidechainCompressionStrength(r.sidechainCompressionStrength), eF.setAudioInputBypassSystemProcessing(r.bypassSystemInputProcessing);
}
function tW() {
    eH ||
        eF.enable().then(() =>
            v.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
                enabled: !0,
                unmute: !1
            })
        );
}
function tK(e) {
    return {
        id: eb.w5,
        index: 0,
        name: e,
        disabled: !0,
        hardwareId: void 0,
        containerId: void 0
    };
}
function tz(e, t) {
    if (0 === e.length) {
        let e = tK(t);
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
function tq(e, t) {
    var n;
    let r = null != (n = e[t]) ? n : p()(e).values().first();
    return null != r ? r.id : t;
}
function tX(e) {
    let t = ez;
    if (((ez = tz(e, ey.intl.string(ey.t['/QIjDA']))), !p().isEqual(ez, t))) {
        let e = tA(),
            t = tq(ez, e.inputDeviceId);
        eF.setAudioInputDevice(t);
    }
}
function tQ(e) {
    let t = eq;
    if (((eq = tz(e, ey.intl.string(ey.t.xlUg0t))), !p().isEqual(eq, t))) {
        let e = tA(),
            t = tq(eq, e.outputDeviceId);
        eF.setAudioOutputDevice(t);
    }
}
function tJ(e) {
    e7 = e.length > 0;
    let t = eX;
    if (((eX = tz(e, ey.intl.string(ey.t.WKWARU))), e1 && !p().isEqual(eX, t))) {
        var n;
        let e = void 0 !== eX[e2],
            r = e2 === eb.w5 && (null == (n = t[eb.w5]) ? void 0 : n.disabled);
        tw(e || r);
    }
}
function t$() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        r =
            null != (e = z.Z.settings.audioContextSettings)
                ? e
                : {
                      user: {},
                      stream: {}
                  };
    for (let e of Object.keys(r)) {
        let i = e === eg.u0.USER ? eb.Yn.DEFAULT : eb.Yn.STREAM,
            a = i === eb.Yn.STREAM ? eb.Yh : eb.Qx,
            o = null != (t = r[e]) ? t : {},
            { localMutes: s, localVolumes: l } = tA(i);
        for (let [e, t] of Object.entries(o))
            null == (0, K.Ky)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== a ? (l[e] = t.volume) : delete l[e],
                eF.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (n)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == o[e] &&
                    (delete s[e],
                    delete l[e],
                    eF.eachConnection((t) => {
                        t.setLocalVolume(e, a), t.setLocalMute(e, !1);
                    }, i));
        tZ(
            {
                localMutes: s,
                localVolumes: l
            },
            i
        );
    }
}
function t0(e) {
    if (null == r)
        return (
            eT.info('Error: trying to get soundshare id before MediaEngineStore is instantiated.'),
            {
                soundshareId: null,
                soundshareSession: ''
            }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : J.Z.getAudioPid(e),
            n = '';
        return (
            null != t && (n = J.Z.generateSessionFromPid(t)),
            {
                soundshareId: t,
                soundshareSession: n
            }
        );
    }
}
function t1(e, t) {
    (0, ee.isWindows)() &&
        S.YT(e, { soundshare_session: t }).then((t) => {
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
function t2(e) {
    (i = e.sessionId),
        (eQ = !1),
        (e0 = !1),
        (0, ee.isWeb)() ||
            (B.Z.subscribe({ location: 'handleConnectionOpen' }, (e) => {
                let t = tA();
                !e.sidechainAvailable && t.sidechainCompression ? (tZ({ sidechainCompressionSettingVersion: 0 }), nv(!1)) : e.sidechainAvailable && t.sidechainCompressionSettingVersion < ew && (tZ({ sidechainCompressionSettingVersion: ew }), nv(e.sidechainEnabled));
            }),
            nS());
    let t = tA();
    tG() && (tB() ? n0(eb.iA.AUTOMATIC) : t.automaticAudioSubsystem && n1()),
        (0, q.wt)({
            location: 'MediaEngineStore',
            autoTrackExposure: !1
        }) &&
            null !== t.mostRecentlyRequestedVoiceFilter &&
            (0, ee.isDesktop)() &&
            (X.Z.getLastInitAttemptMayHaveCrashed()
                ? (v.Z.dispatch({
                      type: 'AUDIO_SET_SELF_MUTE',
                      mute: !0,
                      context: eb.Yn.DEFAULT,
                      playSoundEffect: !0
                  }),
                  tZ({ mostRecentlyRequestedVoiceFilter: null }))
                : n(358820).r5()),
        t$();
}
function t3(e) {
    let { mediaEngineState: t } = e;
    (eV = t.settingsByContext), (ez = t.inputDevices), (eq = t.outputDevices), (tE = t.appSupported), (ti = t.krispModuleLoaded), (s = t.krispVersion), (eW = t.goLiveContext);
}
function t4() {
    i = null;
}
function t5(e) {
    switch (e.state) {
        case ep.hes.CONNECTING:
            tW();
            break;
        case ep.hes.RTC_CONNECTING:
            (te = !1), (tt = !1);
            break;
        case ep.hes.RTC_CONNECTED:
            tw();
            break;
        case ep.hes.DISCONNECTED:
            ni(), na();
    }
    tF.update();
}
function t6(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => (i === t.sessionId ? ((eQ = t.mute || t.suppress), (e0 = t.deaf), eF.eachConnection(tR), tw((null == t.guildId || null == t.channelId || null == tu || tu === t.channelId) && e1), (tu = t.channelId), !0) : (__OVERLAY__ || t.userId !== ea.default.getId() || null != eu.Z.getChannelId() || tw(!1, null), e)), !1);
}
function t8(e) {
    let { mute: t } = e;
    (eJ = t), eF.eachConnection(tR);
}
function t7(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = tA(t);
    if (t === eb.Yn.DEFAULT && (Y.Z.requestPermission(em.Eu.AUDIO), e$)) return !1;
    (r = !i && !r) || (i = !1),
        n || (e3 = !0),
        tZ(
            {
                mute: r,
                deaf: i
            },
            t
        ),
        eF.eachConnection(tR);
}
function t9(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    tZ({ mute: n }, t), r || (e3 = !0), eF.eachConnection(tR);
}
function ne(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r
    } = e;
    if (t !== eg.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    t$(!0);
}
function nt(e) {
    let { context: t } = e;
    tZ({ deaf: !tA(t).deaf }, t), eF.eachConnection(tR);
}
function nn(e) {
    let { context: t, userId: n } = e;
    if (n === ea.default.getId()) return;
    let { localMutes: r } = tA(t);
    r[n] ? delete r[n] : (r[n] = !0), tZ({ localMutes: r }, t), eF.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nr(e) {
    var t, n, r, i, a, o, s;
    let { context: l, userId: c, videoToggleState: u, persist: d, isAutomatic: _ } = e;
    f()(!(d && _), 'These are not allowed to both be true.');
    let p = u === ep.ZUi.DISABLED,
        { disabledLocalVideos: h } = tA(l),
        m = null != (t = h[c]) && t,
        g = th.has(c),
        E = u === ep.ZUi.AUTO_ENABLED || u === ep.ZUi.MANUAL_ENABLED;
    eT.info('disableVideo='.concat(p, ' currentlyDisabled=').concat(m, ' currentlyAutoDisabled=').concat(g, ', isVideoShown=').concat(E)), f()(!(g && !m), 'If you are auto-disabled, then you are also disabled.');
    let b = p !== m,
        y = l === eb.Yn.DEFAULT,
        O = _ && b && y,
        v = d && b && y;
    eT.info('changed='.concat(b, ' isDefaultContext=').concat(y, ' isUpdateCausedByVideoHealthManager=').concat(O, ' isManualToggleByUser=').concat(v));
    let { videoToggleStateMap: I } = tA(l);
    if ((I[c] === ep.ZUi.AUTO_PROBING && u === ep.ZUi.AUTO_ENABLED && (0, H.Z)(c, p ? eb.fC.AUTO_DISABLE : eb.fC.AUTO_ENABLE, E), (I[c] = u), tZ({ videoToggleStateMap: I }, l, d), u === ep.ZUi.AUTO_PROBING ? null == (n = eu.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, !0) : null == (r = eu.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, !1), tm || (eT.info('isAutoDisableAllowed='.concat(tm, ' - disabling VideoHealthManager')), null == (a = eu.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()), O)) {
        if ((!p && !g) || (p && !tm)) return;
        (0, H.Z)(c, p ? eb.fC.AUTO_DISABLE : eb.fC.AUTO_ENABLE, E), p ? th.add(c) : th.delete(c);
    } else v && (g && !p ? (eT.info('disallowing auto-disable for this session because of manual override by user'), (tm = !1), null == (s = eu.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(), (0, H.Z)(c, eb.fC.MANUAL_REENABLE, E)) : (0, H.Z)(c, p ? eb.fC.MANUAL_DISABLE : eb.fC.MANUAL_ENABLE, E));
    y && !p && th.delete(c),
        p ? (h[c] = !0) : delete h[c],
        tZ({ disabledLocalVideos: h }, l, d),
        eF.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(c, null != (t = h[c]) && t);
        }, l);
}
function ni() {
    if (0 === th.size) return;
    let e = eb.Yn.DEFAULT,
        { disabledLocalVideos: t } = tA(e);
    th.forEach((n) => {
        f()(t[n], 'If you are auto-disabled, then you are also disabled.'), delete t[n], eF.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        th.clear(),
        tZ({ disabledLocalVideos: t }, e, !1);
}
function na() {
    let e = eb.Yn.DEFAULT,
        { videoToggleStateMap: t } = tA(e);
    for (let [e, n] of Object.entries(t)) n === ep.ZUi.AUTO_PROBING && delete t[e];
    tZ({ videoToggleStateMap: t }, e, !1);
}
function no(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === ea.default.getId()) return;
    let i = t === eb.Yn.STREAM ? eb.Yh : eb.Qx,
        { localVolumes: a } = tA(t);
    r === i ? delete a[n] : (a[n] = r), tZ({ localVolumes: a }, t), eF.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function ns(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: a } = tA(t);
    (a[n] = {
        left: r,
        right: i
    }),
        tZ({ localPans: a }, t),
        eF.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function nl(e) {
    let { context: t, mode: n, options: r } = e;
    tZ(
        {
            mode: n,
            modeOptions: r
        },
        t
    ),
        eF.eachConnection(tN),
        tF.update();
}
function nc(e) {
    let { volume: t } = e;
    tZ({ inputVolume: tC(t) }), eF.setInputVolume(t);
}
function nu(e) {
    let { volume: t } = e;
    tZ({ outputVolume: t }), eF.setOutputVolume(t);
}
function nd(e) {
    let { id: t } = e;
    (t = tq(ez, t)), (eK = performance.now()), tZ({ inputDeviceId: t }), eF.setAudioInputDevice(t);
}
function nf(e) {
    let { id: t } = e;
    tZ({ outputDeviceId: (t = tq(eq, t)) }), eF.setAudioOutputDevice(t);
}
function n_(e) {
    let { id: t } = e;
    tZ({ videoDeviceId: (t = tq(eX, t)) }), tw();
}
function np(e) {
    let { inputProfile: t } = e,
        n = tZ({ activeInputProfile: t });
    eF.eachConnection((e) => {
        tN(e), e.setAutomaticGainControl(n.automaticGainControl), e.setEchoCancellation(n.echoCancellation), e.setExperimentalEncoders(n.experimentalEncoders), e.setNoiseCancellation(n.noiseCancellation), e.setNoiseSuppression(n.noiseSuppression);
    }),
        eF.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        tF.update(),
        nT();
}
function nh(e) {
    return eY !== e.required && ((eY = e.required), e.required || eF.interact(), !0);
}
function nm(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    tX(t), tQ(n), tJ(r);
}
function ng(e) {
    let { inputVolume: t, outputVolume: n } = e;
    tZ({
        inputVolume: tC(t),
        outputVolume: n
    });
}
function nE(e) {
    var t;
    let n = tA(),
        r = eF.getAudioSubsystem(),
        i = eF.getAudioLayer(),
        a = tq(ez, n.inputDeviceId),
        o = null == (t = ez[a]) ? void 0 : t.name;
    Q.default.track(ep.rMx.VOICE_PROCESSING, {
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
function nb(e) {
    let t = tZ({ echoCancellation: e.enabled });
    eF.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nT(), nE(e.location);
}
function ny(e) {
    nv(e.enabled);
}
function nO(e) {
    let t = tZ({ sidechainCompressionStrength: e.strength });
    eF.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function nv(e) {
    let t = tZ({ sidechainCompression: e });
    eF.setSidechainCompression(t.sidechainCompression);
}
function nI(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tg.add(n) : tg.delete(n), nS(), nT();
}
function nS() {
    let { voiceFiltersPreProcessMute: e } = V.Z.getCurrentConfig({ location: 'setMaybePreprocessMute' }, { autoTrackExposure: !0 }),
        t = e && !tg.has('voice_filter_preview') && !tg.has('mic_test');
    eF.setMaybePreprocessMute(t);
}
function nT() {
    let e = tA(),
        t = tg.size > 0,
        n = e.inputDeviceId,
        r = es.Z.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        a = es.Z.hasNoiseSuppression(n) || e.noiseSuppression,
        o = es.Z.hasAutomaticGainControl(n) || e.automaticGainControl,
        s = e.noiseCancellation,
        l = null !== to,
        c = tg.has('voice_filter') && 1 === tg.size;
    eF.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: a,
        automaticGainControl: o,
        noiseCancellation: s,
        voiceFilters: l,
        loopbackUseAudioMode: c
    });
}
function nA(e) {
    let t = tZ({ noiseSuppression: e.enabled });
    eF.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nT(), nE(e.location);
}
function nN(e) {
    let t = tZ({ automaticGainControl: e.enabled });
    eF.eachConnection((e) => e.setAutomaticGainControl(t.automaticGainControl)), nT(), nE(e.location);
}
function nC(e) {
    let t = tZ({ noiseCancellation: e.enabled });
    eF.eachConnection((e) => e.setNoiseCancellation(t.noiseCancellation)), nT(), nE(e.location);
}
function nR(e) {
    W.Z.setKrispModelOverride(e.model), (c = e.model), nT();
}
function nP(e) {
    let t = tZ({ experimentalEncoders: e.enabled });
    eF.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
}
function nw(e) {
    var t, n;
    let { enabled: r } = e,
        i = tZ({ hardwareEncoding: r });
    eF.eachConnection((e) => {
        var t;
        return e.setHardwareH264(null == (t = i.hardwareEncoding) || t);
    }),
        eF.setH264Enabled(i.hardwareEncoding || i.openH264),
        eF.setAv1Enabled(null == (t = i.hardwareEncoding) || t),
        eF.setH265Enabled(null == (n = i.hardwareEncoding) || n);
}
function nD(e) {
    tZ({ silenceWarning: e.enabled }), tF.update();
}
function nL(e) {
    eF.setDebugLogging(e.enabled);
}
function nx(e) {
    let { level: t } = e;
    (l = t), W.Z.setKrispSuppressionLevel(t);
}
function nk(e) {
    tZ({ videoHook: e.enabled });
}
function nM(e) {
    tZ({ experimentalSoundshare2: e.enabled });
}
function nj(e) {
    let { enabled: t } = e;
    tZ({ useSystemScreensharePicker: t });
}
function nU(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = tZ({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r
        });
    eF.eachConnection((e) => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers));
}
function nG(e) {
    let { enabled: t } = e;
    tZ({ qos: t }), eF.eachConnection((e) => e.setQoS(t));
}
function nB() {
    tH();
}
function nF(e) {
    let { inputDetected: t } = e;
    (e9 = t), !te && e9 && ((te = !0), tF.update());
}
function nV(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === e$) return !1;
    (e$ = n), eF.eachConnection(tR);
}
function nZ(e) {
    let { state: t, permissionType: n } = e,
        r = t === em.PQ.ACCEPTED;
    switch (n) {
        case em.Eu.AUDIO:
            (t_ = !0), eF.eachConnection(tR);
            break;
        case em.Eu.CAMERA:
            !r && e1 && tw(!1);
            break;
        default:
            return !1;
    }
}
function nH() {
    return ti || !1;
}
async function nY() {
    try {
        var e, t, n, i;
        await er.ZP.ensureModule('discord_krisp');
        let a = er.ZP.requireModule('discord_krisp');
        (ti = !0),
            (s = null == (e = a.getSdkVersion) ? void 0 : e.call(a)),
            (l = null != (i = null == (t = a.getSuppressionLevel) ? void 0 : t.call(a)) ? i : 100),
            null == (n = a.getNcModels) ||
                n.call(a).then((e) => {
                    (ta = e), r.emitChange();
                }),
            r.emitChange();
    } catch (t) {
        eT.warn('Failed to load Krisp module: '.concat(t.message)), en.Z.captureException(t);
        let e = eb.H3.INITIALIZED;
        if (t.message.includes(': ')) {
            let n = parseInt(t.message.substring(t.message.indexOf(': ') + 1));
            e = isNaN(n) || 0 === n ? eb.H3.INITIALIZED : n;
        }
        Q.default.track(ep.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), tZ({ noiseCancellation: !1 });
    } finally {
        tr = !1;
    }
}
function nW() {
    return (0, ee.isWindows)() || (0, ee.isLinux)() || (0, ee.isMac)();
}
function nK() {
    !nW() || __OVERLAY__ || tr || ti ? ((0, ee.isWeb)() && eF.supports(eb.AN.NOISE_CANCELLATION) ? ((ti = !0), r.emitChange()) : (0, ee.isWeb)() && tZ({ noiseCancellation: !1 })) : ((tr = !0), nY());
}
function nz(e) {
    let { enabled: t } = e;
    Q.default.track(ep.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != to ? to : null,
        enabled: t
    }),
        tZ({ voiceFilterPlaybackEnabled: t });
}
function nq(e) {
    let { newVoiceFilterId: t } = e;
    tZ({ mostRecentlyRequestedVoiceFilter: t }), eF.eachConnection((e) => e.setVoiceFilterId(t));
}
function nX() {
    tZ({ mostRecentlyRequestedVoiceFilter: null });
}
function nQ(e) {
    let { voiceFilterId: t } = e;
    (tl = to), (tc = ts), (to = t), (ts = null === t ? null : Date.now());
}
function nJ(e) {
    let t = e.bypassEnabled;
    tZ({ bypassSystemInputProcessing: t }), eF.setAudioInputBypassSystemProcessing(t), nE(e.location);
}
function n$(e) {
    n0(e.subsystem);
}
function n0(e) {
    e === eb.iA.AUTOMATIC ? (tZ({ automaticAudioSubsystem: !0 }), n1()) : (tZ({ automaticAudioSubsystem: !1 }), eF.setAudioSubsystem(e));
}
function n1() {
    eF.queueAudioSubsystem(eb.iA.EXPERIMENTAL);
}
function n2(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && tw(i, null), null != t || null == n)) {
        tn = !1;
        return;
    }
    if (tn) return;
    tn = !0;
    let a = tA();
    (a.mute || a.deaf) &&
        (tZ({
            deaf: !1,
            mute: !1
        }),
        eF.eachConnection(tR));
}
function n3(e) {
    let { application: t } = e;
    eZ.add(t.id);
}
function n4(e) {
    let { application: t } = e;
    eZ.delete(t.id);
}
function n5(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case 'audio':
                (eH = !1), eF.eachConnection(tR);
                break;
            case 'video':
                tw(!1);
        }
}
function n6(e) {
    (eH = e.enabled),
        e.unmute &&
            tZ({
                mute: !1,
                deaf: !1
            }),
        eF.eachConnection(tR);
}
function n8(e) {
    let { enabled: t } = e;
    Y.Z.requestPermission(em.Eu.CAMERA), tw(t);
}
function n7(e) {
    let { sourceId: t, applicationName: n, quality: i } = e,
        a = A.Z.isDecoupledGameClippingEnabled(),
        s = A.Z.getSettings().decoupledClipsEnabled;
    if (!a || !s || null == I.Z) return;
    let l = null,
        c = null,
        u = J.Z.getPidFromDesktopSource(t);
    ({ soundshareId: l, soundshareSession: c } = t0(u));
    let d = {
        desktopSource: {
            id: t,
            sourcePid: u,
            soundshareId: l,
            soundshareSession: c
        },
        quality: i
    };
    null != o && o.desktopSource.id !== d.desktopSource.id && (eF.setClipsSource(null), (0, ee.isWindows)() && null != o.desktopSource.soundshareId && S.pn(o.desktopSource.soundshareId)), null != l && t1(l, c), (o = d);
    let f = tS(),
        _ = tA().videoHook;
    eF.setClipsSource({
        desktopDescription: {
            id: o.desktopSource.id,
            soundshareId: o.desktopSource.soundshareId,
            useVideoHook: _,
            useGraphicsCapture: tM(),
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: tU(),
            videoHookStaleFrameTimeoutMs: eL,
            graphicsCaptureStaleFrameTimeoutMs: ex,
            hdrCaptureMode: f
        },
        quality: i,
        applicationName: n
    });
}
function n9(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((o = null), eF.setClipsSource(null));
}
function re(e) {
    var t, n, r, i;
    let { settings: a } = e;
    if ((null == a ? void 0 : a.desktopSettings) != null) {
        let e = null,
            r = null,
            { sourceId: i, sound: o } = a.desktopSettings,
            s = null != (t = a.context) ? t : eb.Yn.DEFAULT,
            l =
                null != (n = a.qualityOptions)
                    ? n
                    : {
                          resolution: 720,
                          frameRate: 30
                      },
            c = !1 === o ? null : J.Z.getPidFromDesktopSource(i);
        ee.isPlatformEmbedded && !0 === o && (({ soundshareId: e, soundshareSession: r } = t0(c)), null != e && t1(e, r)),
            tP(s),
            tw(s === eb.Yn.STREAM && e1, {
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
    } else if ((null == a ? void 0 : a.cameraSettings) != null) {
        let e = null != (r = a.context) ? r : eb.Yn.DEFAULT,
            { videoDeviceGuid: t, audioDeviceGuid: n } = a.cameraSettings,
            o = e === eb.Yn.STREAM && e1,
            s =
                null != (i = a.qualityOptions)
                    ? i
                    : {
                          resolution: 720,
                          frameRate: 30
                      };
        tw(o, {
            cameraSource: {
                videoDeviceGuid: t,
                audioDeviceGuid: n
            },
            quality: {
                resolution: s.resolution,
                frameRate: s.frameRate
            }
        });
    } else tw(e1, null);
}
function rt(e) {
    let { section: t } = e;
    return t === ep.oAB.VOICE && tW(), !1;
}
function rn() {
    return eF.eachConnection(tx), !1;
}
function rr(e) {
    let { enabled: t } = e,
        n = tZ({ openH264: t });
    eF.setH264Enabled(n.hardwareEncoding || n.openH264),
        eF.eachConnection((e) => {
            var t;
            return e.setSoftwareH264(null == (t = n.openH264) || t);
        });
}
function ri(e) {
    let { enabled: t } = e,
        n = tZ({ aecDumpEnabled: t });
    eF.setAecDump(n.aecDumpEnabled);
}
function ra(e) {
    let { state: t } = e,
        n = D.Z.isEnabled();
    if (t === ep.$7l.BACKGROUND && e1 && !n) (e8 = !0), tw(!1);
    else {
        if (t !== ep.$7l.ACTIVE || !e8) return !1;
        (e8 = !1), tw(!0);
    }
    return !0;
}
function ro(e) {
    eF.eachConnection((t) => t.setBitRate(e.bitrate));
}
function rs() {
    if ((!e1 && null == a) || null != eu.Z.getRTCConnectionId()) return !1;
    tw(!1, null);
}
function rl() {
    return !!td && ((td = !1), !0);
}
function rc(e) {
    eF.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function ru(e) {
    let { settings: t } = e;
    eF.applyMediaFilterSettings(t).finally(() => {
        (tf = !1), r.emitChange();
    });
}
function rd() {
    tf = !0;
}
function rf() {
    tf = !1;
}
function r_(e) {
    ty = e.enabled;
}
class rp extends (u = E.ZP.Store) {
    initialize() {
        tk(),
            tV(),
            nK(),
            na(),
            (tE = {
                [eb.AN.VIDEO]: eF.supports(eb.AN.VIDEO),
                [eb.AN.DESKTOP_CAPTURE]: eF.supports(eb.AN.DESKTOP_CAPTURE),
                [eb.AN.HYBRID_VIDEO]: eF.supports(eb.AN.HYBRID_VIDEO)
            }),
            this.waitFor(ea.default, es.Z, el.Z, ec.Z, eu.Z, L.ZP, Y.Z.storage, z.Z, w.Z, A.Z);
    }
    supports(e) {
        return eF.supports(e);
    }
    supportsInApp(e) {
        return tE[e] || eF.supports(e);
    }
    isSupported() {
        return eF.supported();
    }
    isExperimentalEncodersSupported() {
        return eF.supports(eb.AN.EXPERIMENTAL_ENCODERS);
    }
    isNoiseSuppressionSupported() {
        return eF.supports(eb.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return nH();
    }
    isNoiseCancellationError() {
        return td;
    }
    isAutomaticGainControlSupported() {
        return eF.supports(eb.AN.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !tB() && (eF.supports(eb.AN.LEGACY_AUDIO_SUBSYSTEM) || eF.supports(eb.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return eF.supports(eb.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && 'experimental' === eF.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return nH();
    }
    isAecDumpSupported() {
        return eF.supports(eb.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return eF.supports(eb.AN.VIDEO) && eF.supports(eb.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        let t = (null == (e = el.Z.getChannel(tu)) ? void 0 : e.type) === ep.d4z.GUILD_STAGE_VOICE,
            n = r.getHardwareEncoding();
        return !t && n && U.Z.simulcastEnabled();
    }
    getAecDump() {
        return tA().aecDumpEnabled;
    }
    getMediaEngine() {
        return eF;
    }
    getVideoComponent() {
        return eF.Video;
    }
    getCameraComponent() {
        return eF.Camera;
    }
    getKrispSuppressionLevel() {
        return null != l ? l : 100;
    }
    isEnabled() {
        return eH;
    }
    isMute() {
        return this.isSelfMute() || eQ;
    }
    isDeaf() {
        return this.isSelfDeaf() || e0;
    }
    hasContext(e) {
        return null != eV[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eb.Yn.DEFAULT;
        return e === eb.Yn.DEFAULT && eJ;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eb.Yn.DEFAULT;
        return !this.isEnabled() || tA(e).mute || !Y.Z.didHavePermission(em.Eu.AUDIO) || this.isSelfDeaf(e) || (e === eb.Yn.DEFAULT && e$);
    }
    shouldSkipMuteUnmuteSound() {
        return e3;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        e3 = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eb.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && es.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return ty;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eb.Yn.DEFAULT;
        return !this.isSupported() || tA(e).deaf;
    }
    isVideoEnabled() {
        return e1 && e7;
    }
    isVideoAvailable() {
        return Object.values(eX).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eb.Yn.STREAM;
        return eW === e && null != a;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eb.Yn.STREAM;
        return eW === t && null != a && (null == (e = a.desktopSource) ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eb.Yn.DEFAULT;
        return e !== ea.default.getId() && (tA(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return eF.supports(eb.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eb.Yn.DEFAULT;
        return null != (t = tA(n).disabledLocalVideos[e]) && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eb.Yn.DEFAULT;
        return null != (t = tA(n).videoToggleStateMap[e]) ? t : ep.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eb.Yn.DEFAULT;
        return t === eb.Yn.DEFAULT && th.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eb.Yn.DEFAULT;
        return e === eb.Yn.DEFAULT && th.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tf;
    }
    isNativeAudioPermissionReady() {
        return t_;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return eW;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return eK;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eb.Yn.DEFAULT,
            n = tA(t).localPans[e];
        return null != n ? n : eD;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eb.Yn.DEFAULT,
            n = t === eb.Yn.STREAM ? eb.Yh : eb.Qx,
            r = tA(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return tA().inputVolume;
    }
    getOutputVolume() {
        return tA().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eb.Yn.DEFAULT;
        return tA(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eb.Yn.DEFAULT;
        return tA(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return to;
    }
    getActiveVoiceFilterAppliedAt() {
        return ts;
    }
    getPreviousVoiceFilter() {
        return tl;
    }
    getPreviousVoiceFilterAppliedAt() {
        return tc;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return tA().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return tA().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            p().each(eV, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i }
                } = t;
                r === ep.pM4.PUSH_TO_TALK && eZ.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return tq(ez, tA().inputDeviceId);
    }
    getOutputDeviceId() {
        return tq(eq, tA().outputDeviceId);
    }
    getVideoDeviceId() {
        return tq(eX, tA().videoDeviceId);
    }
    getInputDevices() {
        return ez;
    }
    getOutputDevices() {
        return eq;
    }
    getVideoDevices() {
        return eX;
    }
    getEchoCancellation() {
        let e = tA();
        return es.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return tA().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return tA().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return tA().h265Enabled;
    }
    getLoopback() {
        return tg.size > 0;
    }
    getLoopbackReasons() {
        return tg;
    }
    getNoiseSuppression() {
        let e = tA();
        return es.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tA();
        return es.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return tA().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return tA().noiseCancellation;
    }
    getExperimentalEncoders() {
        return tA().experimentalEncoders;
    }
    getHardwareEncoding() {
        var e;
        return null == (e = tA().hardwareEncoding) || e;
    }
    getEnableSilenceWarning() {
        return tA().silenceWarning;
    }
    getDebugLogging() {
        return eF.getDebugLogging();
    }
    getQoS() {
        return tA().qos;
    }
    getAttenuation() {
        return tA().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return tA().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return tA().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return tG() && tA().automaticAudioSubsystem ? eb.iA.AUTOMATIC : eF.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return eF.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return tA().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eE._.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eb.Yn.DEFAULT;
        return tA(e);
    }
    getState() {
        return {
            settingsByContext: eV,
            inputDevices: ez,
            outputDevices: eq,
            appSupported: tE,
            krispModuleLoaded: ti,
            krispVersion: s,
            krispSuppressionLevel: l,
            goLiveSource: a,
            goLiveContext: eW
        };
    }
    getInputDetected() {
        return e9;
    }
    getNoInputDetectedNotice() {
        return tt;
    }
    getPacketDelay() {
        return ee.isPlatformEmbedded || this.getMode() !== ep.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        eF.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return eY;
    }
    getVideoHook() {
        return tA().videoHook;
    }
    supportsVideoHook() {
        return eF.supports(eb.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tA().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e);
    }
    supportsExperimentalSoundshare() {
        return eF.supports(eb.AN.EXPERIMENTAL_SOUNDSHARE) && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eh.I9);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = tA().useSystemScreensharePicker,
            n = (0, ee.isLinux)() || ((0, ee.isMac)() && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eh.jR));
        return e && (null != t ? t : n);
    }
    supportsSystemScreensharePicker() {
        return eF.supports(eb.AN.NATIVE_SCREENSHARE_PICKER);
    }
    getOpenH264() {
        return tA().openH264;
    }
    getEverSpeakingWhileMuted() {
        return e4;
    }
    getSpeakingWhileMuted() {
        return e5;
    }
    getKrispModelOverride() {
        return c;
    }
    getKrispModels() {
        return ta;
    }
    hasActiveCallKitCall() {
        return tO;
    }
    setHasActiveCallKitCall(e) {
        tO = e;
    }
    supportsScreenSoundshare() {
        return (0, ee.isMac)() ? eF.supports(eb.AN.SOUNDSHARE) && m().satisfies(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release, eh.yG) && tU() : (0, ee.isWindows)() ? eF.supports(eb.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, ee.isLinux)() && eF.supports(eb.AN.SCREEN_SOUNDSHARE);
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eb.Yn.DEFAULT,
            t = this.supports(eb.AN.VIDEO)
                ? [
                      {
                          rid: '100',
                          type: e === eb.Yn.DEFAULT ? eb.Tr.VIDEO : eb.Tr.SCREEN,
                          quality: eb.y7
                      }
                  ]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === eb.Yn.DEFAULT || this.goLiveSimulcastEnabled()) &&
                t.push({
                    rid: '50',
                    type: e === eb.Yn.DEFAULT ? eb.Tr.VIDEO : eb.Tr.SCREEN,
                    quality: eb.LD
                }),
            t
        );
    }
    getSupportedSecureFramesProtocolVersion() {
        let e = eF.getSupportedSecureFramesProtocolVersion(),
            t = G.m.getCurrentConfig({ location: 'MediaEngineStore' });
        return 114 === e && (e = 1), t.canSupportDaveProtocol && e >= t.protocolVersionFloor ? e : 0;
    }
    hasClipsSource() {
        return null != o;
    }
    getGpuBrand() {
        return tb;
    }
}
function rh(e) {
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
eO(rp, 'displayName', 'MediaEngineStore');
let rm = (r = new rp(v.Z, {
    VOICE_CHANNEL_SELECT: n2,
    VOICE_STATE_UPDATES: t6,
    CONNECTION_OPEN: t2,
    CONNECTION_CLOSED: t4,
    RTC_CONNECTION_STATE: t5,
    AUDIO_SET_TEMPORARY_SELF_MUTE: t8,
    AUDIO_TOGGLE_SELF_MUTE: t7,
    AUDIO_SET_SELF_MUTE: t9,
    AUDIO_TOGGLE_SELF_DEAF: nt,
    AUDIO_TOGGLE_LOCAL_MUTE: nn,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: nr,
    AUDIO_SET_LOCAL_VOLUME: no,
    AUDIO_SET_LOCAL_PAN: ns,
    AUDIO_SET_MODE: nl,
    AUDIO_SET_INPUT_VOLUME: nc,
    AUDIO_SET_OUTPUT_VOLUME: nu,
    AUDIO_SET_INPUT_DEVICE: nd,
    AUDIO_SET_OUTPUT_DEVICE: nf,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: np,
    AUDIO_SET_ECHO_CANCELLATION: nb,
    AUDIO_SET_SIDECHAIN_COMPRESSION: ny,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nO,
    AUDIO_SET_LOOPBACK: nI,
    AUDIO_SET_NOISE_SUPPRESSION: nA,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nN,
    AUDIO_SET_NOISE_CANCELLATION: nC,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: nR,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: nD,
    AUDIO_SET_DEBUG_LOGGING: nL,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: nx,
    MEDIA_ENGINE_SET_VIDEO_HOOK: nk,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: nM,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: nj,
    AUDIO_SET_ATTENUATION: nU,
    AUDIO_SET_QOS: nG,
    MEDIA_ENGINE_DEVICES: nm,
    AUDIO_VOLUME_CHANGE: ng,
    AUDIO_RESET: nB,
    AUDIO_INPUT_DETECTED: nF,
    AUDIO_SET_SUBSYSTEM: n$,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: nJ,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: n6,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: n8,
    MEDIA_ENGINE_PERMISSION: n5,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: re,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: n_,
    MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nP,
    MEDIA_ENGINE_INTERACTION_REQUIRED: nh,
    USER_SETTINGS_MODAL_INIT: rt,
    USER_SETTINGS_MODAL_SET_SECTION: rt,
    CERTIFIED_DEVICES_SET: rn,
    RPC_APP_CONNECTED: n3,
    RPC_APP_DISCONNECTED: n4,
    OVERLAY_INITIALIZE: t3,
    MEDIA_ENGINE_SET_OPEN_H264: rr,
    MEDIA_ENGINE_SET_HARDWARE_ENCODING: nw,
    APP_STATE_UPDATE: ra,
    SET_CHANNEL_BITRATE: ro,
    SET_VAD_PERMISSION: nV,
    SET_NATIVE_PERMISSION: nZ,
    SET_CHANNEL_VIDEO_QUALITY_MODE: rc,
    MEDIA_ENGINE_SET_AEC_DUMP: ri,
    CHANNEL_DELETE: rs,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rl,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: ru,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rd,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rf,
    USER_SETTINGS_PROTO_UPDATE: ne,
    CLIPS_INIT: n7,
    CLIPS_SETTINGS_UPDATE: n9,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: r_,
    VOICE_FILTER_REQUEST_SWITCH: nq,
    VOICE_FILTER_LOOPBACK_TOGGLE: nz,
    VOICE_FILTER_APPLIED: nQ,
    VOICE_FILTER_DOWNLOAD_FAILED: nX,
    VOICE_FILTER_APPLY_FAILED: nX
}));
