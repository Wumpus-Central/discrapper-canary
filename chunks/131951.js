let r, i, a, o, s, l;
n.d(t, { Z: () => r_ }), n(388685), n(953529), n(457542), n(539854), n(642613), n(49124), n(337869);
var c,
    u = n(512722),
    d = n.n(u),
    f = n(392711),
    _ = n.n(f),
    p = n(209739),
    h = n.n(p),
    m = n(404097),
    g = n(442837),
    E = n(46973),
    b = n(433517),
    y = n(846519),
    O = n(570140),
    v = n(579806),
    I = n(887278),
    S = n(547727),
    T = n(435064),
    A = n(779618),
    N = n(710845),
    C = n(535911),
    R = n(458725),
    P = n(353926),
    w = n(646047),
    D = n(594190),
    L = n(502286),
    x = n(355552),
    k = n(294473),
    M = n(706629),
    j = n(166884),
    U = n(529558),
    G = n(111672),
    B = n(441167),
    F = n(580930),
    V = n(787517),
    Z = n(338336),
    H = n(751571),
    Y = n(311473),
    W = n(725380),
    K = n(581883),
    z = n(875527),
    q = n(420439),
    X = n(626135),
    Q = n(12647),
    J = n(70956),
    $ = n(358085),
    ee = n(747268),
    et = n(960048),
    en = n(998502),
    er = n(13140),
    ei = n(314897),
    ea = n(967368),
    eo = n(463395),
    es = n(592125),
    el = n(858340),
    ec = n(19780),
    eu = n(704806),
    ed = n(594174),
    ef = n(631768),
    e_ = n(981631),
    ep = n(70722),
    eh = n(761274),
    em = n(526761),
    eg = n(345655),
    eE = n(65154),
    eb = n(388032);
function ey(e, t, n) {
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
function eO(e) {
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
                ey(e, t, n[t]);
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
function eI(e, t) {
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
let eS = new N.Z('MediaEngineStore'),
    eT = 'MediaEngineStore',
    eA = 4,
    eN = 1,
    eC = 1,
    eR = 1,
    eP = 1,
    ew = {
        left: 1,
        right: 1
    },
    eD = 500,
    eL = 5 * J.Z.Millis.SECOND,
    ex = -60,
    ek = 100,
    eM = 2 * J.Z.Millis.SECOND,
    ej = 0;
function eU() {
    return {
        mode: e_.pM4.VOICE_ACTIVITY,
        modeOptions: {
            threshold: ex,
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
        inputVolume: eE.Qx,
        outputVolume: eE.Qx,
        inputDeviceId: eE.w5,
        outputDeviceId: eE.w5,
        videoDeviceId: eE.w5,
        qos: !1,
        qosMigrated: !1,
        videoHook: eB.supports(eE.AN.VIDEO_HOOK),
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
let eG = {
        [eg._.CUSTOM]: {},
        [eg._.VOICE_ISOLATION]: {
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
        [eg._.STUDIO]: {
            mode: e_.pM4.VOICE_ACTIVITY,
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
    eB = (0, E.Mt)((0, E.jj)());
eS.enableNativeLogger(!0);
let eF = {},
    eV = new Set([eE.Yn.DEFAULT]),
    eZ = eB.supports(eE.AN.AUTO_ENABLE),
    eH = !1,
    eY = eE.Yn.STREAM,
    eW = performance.now(),
    eK = { [eE.w5]: tY('No Input Devices') },
    ez = { [eE.w5]: tY('No Output Devices') },
    eq = { [eE.w5]: tY('No Video Devices') },
    eX = !1,
    eQ = !1,
    eJ = !1,
    e$ = !1,
    e0 = !1,
    e1 = eE.Av,
    e2 = !1,
    e3 = !1,
    e4 = !1,
    e5 = new y.V7(),
    e6 = !1,
    e8 = !1,
    e7 = null,
    e9 = !1,
    te = !1,
    tt = !1,
    tn = !1,
    tr = !1,
    ti = null,
    ta = null,
    to = null,
    ts = null,
    tl = null,
    tc = !1,
    tu = !1,
    td = !1;
H.Z.hasPermission(eh.Eu.AUDIO, { showAuthorizationError: !1 }), H.Z.hasPermission(eh.Eu.CAMERA, { showAuthorizationError: !1 });
let tf = !1,
    t_ = new Set(),
    tp = tf,
    th = new Set(),
    tm = {},
    tg = null,
    tE = !0,
    tb = !1,
    ty = {},
    tO = 5 * J.Z.Millis.SECOND;
function tv() {
    var e, t;
    return null != (t = null == (e = ed.default.getCurrentUser()) ? void 0 : e.isStaff()) && t ? 'always' : ee.Z === m.R.CANARY ? 'permittedDevicesOnly' : 'never';
}
function tI() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.Yn.DEFAULT,
        t = eF[e];
    return null == t && ((t = eU()), (eF[e] = t)), t;
}
function tS() {
    var e, t, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.Yn.DEFAULT,
        i = tI(r),
        a = eG[null != (e = i.activeInputProfile) ? e : eg._.CUSTOM];
    return eI(eO({}, i, a), { modeOptions: eO({}, null != (t = i.modeOptions) ? t : {}, null != (n = a.modeOptions) ? n : {}) });
}
function tT(e) {
    let t = tS(e.context);
    e.setInputMode(t.mode, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: t.modeOptions.autoThreshold,
        vadUseKrisp: t.modeOptions.vadUseKrisp && nF(),
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        pttReleaseDelay: t.modeOptions.delay
    });
}
function tA(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.Qx;
    return _().clamp(e, 0, t);
}
function tN(e) {
    let t = tS(e.context),
        n = !eZ || t.mute || t.deaf;
    e.context === eE.Yn.DEFAULT ? (n = n || eX || eQ || eJ || !H.Z.didHavePermission(eh.Eu.AUDIO)) : e.context === eE.Yn.STREAM && (n = !0), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eE.Yn.DEFAULT && S.Z.updateNativeMute();
}
function tC(e) {
    e !== eY && (null != a && eB.setGoLiveSource(null, eY), (eY = e));
}
function tR() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e0,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        s = a;
    if (((null == s ? void 0 : s.desktopSource) != null && s.desktopSource.id !== (null == o || null == (e = o.desktopSource) ? void 0 : e.id) && (null != s.desktopSource.soundshareId && (0, $.isWindows)() && I.pn(s.desktopSource.soundshareId), eB.setGoLiveSource(null, eY)), (null == s ? void 0 : s.cameraSource) != null && (s.cameraSource.videoDeviceGuid !== (null == o || null == (t = o.cameraSource) ? void 0 : t.videoDeviceGuid) || s.cameraSource.audioDeviceGuid !== (null == o || null == (n = o.cameraSource) ? void 0 : n.audioDeviceGuid)) && eB.setGoLiveSource(null, eY), (e0 || i) && ((e1 = (e0 = i) ? tK(eq, tS().videoDeviceId) : eE.Av), eB.setVideoInputDevice(e1)), (a = o), null != o)) {
        let e = {
            resolution: o.quality.resolution,
            frameRate: o.quality.frameRate
        };
        if (null != o.desktopSource) {
            let t = tv(),
                n = tS().videoHook,
                i = tx(),
                a = i ? (tk() && (0, V.R)('MediaEngineStore_updateVideo').enabled ? ep.zj : ep.ZM) : 0;
            eB.setGoLiveSource(
                {
                    desktopDescription: {
                        id: o.desktopSource.id,
                        soundshareId: o.desktopSource.soundshareId,
                        useVideoHook: n,
                        useGraphicsCapture: i,
                        useGraphicsCaptureApiLevel: a,
                        useLoopback: r.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: tM(),
                        videoHookStaleFrameTimeoutMs: eD,
                        graphicsCaptureStaleFrameTimeoutMs: eL,
                        hdrCaptureMode: t
                    },
                    quality: e
                },
                eY
            );
        }
        null != o.cameraSource &&
            eB.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: o.cameraSource.audioDeviceGuid
                    },
                    quality: e
                },
                eY
            );
    }
}
function tP(e, t, n, r) {
    var i;
    let a = null != (i = null == e ? void 0 : e.soundshareSession) ? i : '';
    null == ty[a] && (ty[a] = new Set());
    let o = null != t && !ty[a].has(t);
    o && ty[a].add(t),
        (null == t || o) &&
            X.default.track(
                e_.rMx.SOUNDSHARE_FAILED,
                eO(
                    {
                        soundshare_failure_code: t,
                        soundshare_failure_reason: n,
                        soundshare_failure_will_retry: r
                    },
                    (0, L.Z)(e)
                )
            );
}
function tw(e) {
    switch (e) {
        case eE.H3.CPU_OVERUSE:
            return R.Nk.NoiseCancellerCpuOveruse;
        case eE.H3.FAILED:
            return R.Nk.NoiseCancellerFailed;
        case eE.H3.VAD_CPU_OVERUSE:
            return R.Nk.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function tD(e) {
    let t = tS(),
        n = t.inputDeviceId;
    if ((e.setEchoCancellation(eo.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(eo.Z.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(eo.Z.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), e.setVoiceFilterId(ti), (0, $.isWeb)())) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function tL() {
    eB.on(E.aB.Connection, (e) => {
        var t, n;
        tT(e), tN(e), tD(e);
        let i = tS();
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers), e.setQoS(i.qos), e.setExperimentalEncoders(i.experimentalEncoders), e.setHardwareH264(null == (t = i.hardwareEncoding) || t), e.setSoftwareH264(null == (n = i.openH264) || n);
        let o = ec.Z.getGuildId(),
            { muteBeforeProcessing: s, pttBeforeProcessing: l, skipEncode: c } = (null != o ? M.Z : k.Z).getCurrentConfig(eO({ location: 'setupMediaEngine' }, null != o && { guildId: o }), { autoTrackExposure: !0 });
        s && e.setExperimentFlag(eE.V8.MUTE_BEFORE_PROCESSING, !0), l && e.setExperimentFlag(eE.V8.PTT_BEFORE_PROCESSING, !0), c && e.setExperimentFlag(eE.V8.SKIP_ENCODE, !0);
        let u = !1,
            d = !0;
        if ((e.setExperimentFlag(eE.V8.RESET_DECODER_ON_ERRORS, !0), u && e.setExperimentFlag(eE.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0), d && e.setExperimentFlag(eE.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0), e.context === eE.Yn.STREAM)) {
            let { simulcastEnabled: t, lqStreamBitrate: n } = j.Z.getConfig();
            e.configureGoLiveSimulcast(t, n);
        }
        (0, $.isWindows)() ? ((null == tg ? void 0 : tg.startsWith('NVIDIA')) || (null == tg ? void 0 : tg.startsWith('AMD')) ? e.setExperimentFlag(eE.V8.SIGNAL_AV1, !0) : e.setExperimentFlag(eE.V8.SIGNAL_AV1_DECODE, !0)) : ((0, $.isMac)() || (0, $.isLinux)()) && e.setExperimentFlag(eE.V8.SIGNAL_AV1_DECODE, !0), (0, $.isWindows)() && e.setExperimentFlag(eE.V8.SIGNAL_AV1_HARDWARE_DECODE, !0), eB.setHasFullbandPerformance((0, C.Z)());
        let f = (0, x.D)('setupMediaEngine').enabled;
        if ((e.setRemoteAudioHistory(1000 * !!f), (0, A.Z)(r))) {
            let t = T.Z.getSettings();
            e.setExperimentFlag(eE.V8.STREAMER_CLIP, t.clipsEnabled);
            let { enableViewerClipping: n } = B.Z.getCurrentConfig({ location: 'f627ab_15' }, { autoTrackExposure: !1 });
            e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eE.ux);
        }
        for (let t of ((i = tS(e.context)), e.setPostponeDecodeLevel(ek), Object.keys(i.localMutes))) t !== ei.default.getId() && e.setLocalMute(t, i.localMutes[t]);
        for (let t of Object.keys(i.localVolumes)) t !== ei.default.getId() && e.setLocalVolume(t, i.localVolumes[t]);
        for (let t of Object.keys(i.localPans)) {
            let n = i.localPans[t];
            e.setLocalPan(t, n.left, n.right);
        }
        for (let t of Object.keys(i.disabledLocalVideos)) e.setLocalVideoDisabled(t, i.disabledLocalVideos[t]);
        e.on(E.Sh.Speaking, (t, n) => {
            O.Z.dispatch({
                type: 'SPEAKING',
                context: e.context,
                userId: t,
                speakingFlags: n
            });
        }),
            e.context === eE.Yn.DEFAULT &&
                ((e3 = !1),
                (e4 = !1),
                e.on(E.Sh.SpeakingWhileMuted, () => {
                    (e3 = !0),
                        (e4 = !0),
                        r.emitChange(),
                        e5.stop(),
                        e5.start(eM, () => {
                            (e4 = !1), r.emitChange();
                        });
                })),
            e.on(E.Sh.DesktopSourceEnd, () => {
                O.Z.dispatch({
                    type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                    settings: { context: e.context }
                });
            }),
            e.on(E.Sh.SoundshareAttached, () => {
                (null == a ? void 0 : a.desktopSource) != null && X.default.track(e_.rMx.SOUNDSHARE_ATTACHED, (0, L.Z)(null == a ? void 0 : a.desktopSource));
            }),
            e.on(E.Sh.SoundshareFailed, (e) => {
                let { failureCode: t, failureReason: n, willRetry: r } = e;
                tP(null == a ? void 0 : a.desktopSource, t, n, r);
            }),
            e.on(E.Sh.SoundshareSpeaking, () => {
                (null == a ? void 0 : a.desktopSource) != null && (X.default.track(e_.rMx.SOUNDSHARE_TRANSMITTING, (0, L.Z)(null == a ? void 0 : a.desktopSource)), null != el.Z.getHookError(e_.K3D.SOUND) && O.Z.wait(() => O.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
            });
        let _ = new y.V7();
        e.on(E.Sh.SoundshareTrace, (e) => {
            switch (e.type) {
                case 'soundshare_attach_requested':
                    _.start(tO, () => {
                        O.Z.dispatch({
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
                        (tP(null == a ? void 0 : a.desktopSource, n, t, r),
                        r ||
                            (_.stop(),
                            O.Z.wait(() =>
                                O.Z.dispatch({
                                    type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
                                    errorMessage: t,
                                    errorCode: n
                                })
                            )));
                    break;
                case 'soundshare_state_transition':
                    4 === e.newState && (_.stop(), O.Z.wait(() => O.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
            }
        }),
            e.on(E.Sh.InteractionRequired, (e) => {
                O.Z.dispatch({
                    type: 'MEDIA_ENGINE_INTERACTION_REQUIRED',
                    required: e
                });
            }),
            e.on(E.Sh.VideoHookInitialize, (e, t, n, r, i, o) => {
                (null == a ? void 0 : a.desktopSource) != null &&
                    X.default.track(
                        e_.rMx.VIDEOHOOK_INITIALIZED,
                        eO(
                            {
                                backend: e,
                                format: t,
                                framebuffer_format: n,
                                sample_count: r,
                                success: i,
                                reinitialization: o
                            },
                            (0, L.Z)(null == a ? void 0 : a.desktopSource)
                        )
                    );
            }),
            e.on(E.Sh.NoiseCancellationError, (e) => {
                eS.warn('noisecancellererror event: '.concat(e)),
                    (0, R.kr)({
                        type: R.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tw(e)
                    }),
                    (tc = !0),
                    X.default.track(e_.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    O.Z.dispatch({
                        type: 'AUDIO_SET_NOISE_SUPPRESSION',
                        enabled: !0
                    }),
                    O.Z.dispatch({
                        type: 'AUDIO_SET_NOISE_CANCELLATION',
                        enabled: !1
                    }),
                    O.Z.dispatch({
                        type: 'MEDIA_ENGINE_NOISE_CANCELLATION_ERROR',
                        code: e
                    });
            }),
            e.on(E.Sh.VoiceActivityDetectorError, (e) => {
                eS.warn('voiceactivitydetectorerror event: '.concat(e)),
                    (0, R.kr)({
                        type: R.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tw(e)
                    }),
                    X.default.track(e_.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    O.Z.dispatch({
                        type: 'AUDIO_SET_MODE',
                        context: eE.Yn.DEFAULT,
                        mode: e_.pM4.VOICE_ACTIVITY,
                        options: eI(eO({}, tS(eE.Yn.DEFAULT).modeOptions), { vadUseKrisp: !1 })
                    }),
                    O.Z.dispatch({
                        type: 'MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR',
                        code: e
                    });
            }),
            e.on(E.Sh.SdpError, (e, t, n, r) => {
                X.default.track(e_.rMx.SDP_ERROR, {
                    operation: e,
                    error: t,
                    type: n,
                    sdp: r
                });
            }),
            e.on(E.Sh.VideoState, (t) => {
                O.Z.dispatch({
                    type: 'MEDIA_ENGINE_VIDEO_STATE_CHANGED',
                    videoState: t,
                    context: e.context
                });
            }),
            e.on(E.Sh.Destroy, () => {
                _.stop();
            }),
            e.setBitRate(ea.Z.bitrate),
            e.applyVideoQualityMode(ef.Z.mode);
    }),
        eB.on(E.aB.DeviceChange, (e, t, n) => {
            O.Z.dispatch({
                type: 'MEDIA_ENGINE_DEVICES',
                inputDevices: e,
                outputDevices: t,
                videoDevices: n
            });
        }),
        eB.on(E.aB.VolumeChange, (e, t) => {
            O.Z.dispatch({
                type: 'AUDIO_VOLUME_CHANGE',
                inputVolume: e,
                outputVolume: t
            });
        }),
        eB.on(E.aB.DesktopSourceEnd, () => {
            O.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                settings: null
            });
        }),
        eB.on(E.aB.AudioPermission, (e) => {
            (td = !0),
                O.Z.dispatch({
                    type: 'MEDIA_ENGINE_PERMISSION',
                    kind: 'audio',
                    granted: e
                });
        }),
        eB.on(E.aB.VideoPermission, (e) => {
            O.Z.dispatch({
                type: 'MEDIA_ENGINE_PERMISSION',
                kind: 'video',
                granted: e
            });
        }),
        eB.on(E.aB.WatchdogTimeout, async () => {
            let e;
            try {
                await Q.Z.submitLiveCrashReport({ message: { message: 'Voice Watchdog Timeout' } });
            } catch (t) {
                'number' == typeof t.status && (e = t.status);
            }
            eS.warn('Watchdog timeout, report submission status: '.concat(null != e ? e : 200)), X.default.track(e_.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        eB.on(E.aB.VideoInputInitialized, (e) => {
            X.default.track(e_.rMx.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * J.Z.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: ec.Z.getMediaSessionId(),
                rtc_connection_id: ec.Z.getRTCConnectionId()
            });
        }),
        eB.on(E.aB.AudioInputInitialized, (e) => {
            X.default.track(e_.rMx.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * J.Z.Millis.SECOND),
                rtc_connection_id: ec.Z.getRTCConnectionId()
            });
        }),
        eB.on(E.aB.ClipsRecordingRestartNeeded, () => {
            O.Z.dispatch({ type: 'CLIPS_RESTART' });
        }),
        eB.on(E.aB.ClipsInitFailure, (e, t) => {
            O.Z.wait(() => {
                O.Z.dispatch({
                    type: 'CLIPS_INIT_FAILURE',
                    errMsg: e,
                    applicationName: t
                });
            });
        }),
        eB.on(E.aB.ClipsRecordingEnded, (e, t) => {
            var n, r;
            (null == o || null == (n = o.desktopSource) ? void 0 : n.id) === e && (null != t && (null == a || null == (r = a.desktopSource) ? void 0 : r.soundshareId) !== t && I.pn(t), (o = null));
        }),
        eB.on(E.aB.NativeScreenSharePickerUpdate, (e, t) => {
            O.Z.dispatch({
                type: 'NATIVE_SCREEN_SHARE_PICKER_UPDATE',
                existing: e,
                content: t
            });
        }),
        eB.on(E.aB.NativeScreenSharePickerCancel, (e) => {
            O.Z.dispatch({
                type: 'NATIVE_SCREEN_SHARE_PICKER_CANCEL',
                existing: e
            });
        }),
        eB.on(E.aB.NativeScreenSharePickerError, (e) => {
            O.Z.dispatch({
                type: 'NATIVE_SCREEN_SHARE_PICKER_ERROR',
                error: e
            });
        }),
        eB.on(E.aB.AudioDeviceModuleError, (e, t, n) => {
            X.default.track(e_.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                audio_device_module: e,
                code: t,
                device_name: n
            });
        }),
        eB.on(E.aB.VideoCodecError, (e) => {
            let t = 'encode' === e.mode ? R.u.VIDEO_ENCODE_ERROR : R.u.VIDEO_DECODE_ERROR,
                n = {
                    videoCodec: e.codecStandard,
                    errorMessage: e.message
                };
            (0, R.kr)(t === R.u.VIDEO_ENCODE_ERROR ? eI(eO({ type: t }, n), { videoEncoder: e.implName }) : eI(eO({ type: t }, n), { videoDecoder: e.implName }));
        }),
        eB.on(E.aB.ConnectionStats, (e) => {
            O.Z.dispatch({
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
        eB.on(E.aB.VoiceQueueMetrics, (e) => {
            let t = rf(e);
            null !== t && X.default.track(e_.rMx.VOICE_QUEUE_METRICS, t);
        }),
        eB.setOnVideoContainerResized((e, t, n) => {
            O.Z.wait(() =>
                O.Z.dispatch({
                    type: 'VIDEO_SIZE_UPDATE',
                    streamId: e,
                    width: t,
                    height: n
                })
            );
        }),
        tG.reset(),
        (0, eu.q)().then((e) => {
            null != e && (tg = e.gpu_brand);
        });
}
function tx() {
    return (0, $.isWindows)() && h().satisfies(null === v.Z || void 0 === v.Z ? void 0 : v.Z.os.release, ep.c5);
}
function tk() {
    return (0, $.isWindows)() && h().satisfies(null === v.Z || void 0 === v.Z ? void 0 : v.Z.os.release, ep.sN);
}
function tM() {
    return (0, $.isMac)() && eB.supports(eE.AN.SCREEN_CAPTURE_KIT) && h().satisfies(null === v.Z || void 0 === v.Z ? void 0 : v.Z.os.release, ep.C7);
}
function tj() {
    return (0, $.isWindows)() && eB.supports(eE.AN.AUTOMATIC_AUDIO_SUBSYSTEM) && eB.supports(eE.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH);
}
function tU() {
    return eB.supports(eE.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
let tG = new (class {
    start() {
        this.started || ((this.started = !0), eB.on(E.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            eB.removeListener(E.aB.Silence, this.handleSilence),
            O.Z.dispatch({
                type: 'AUDIO_INPUT_DETECTED',
                inputDetected: null
            }));
    }
    update() {
        let e = tS();
        !e9 && ec.Z.getState() === e_.hes.RTC_CONNECTED && e.mode === e_.pM4.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop();
    }
    reset() {
        this.stop(), this.update();
    }
    constructor() {
        ey(this, 'stateChangeTimeout', void 0),
            ey(this, 'noVoiceTimeout', 5000),
            ey(this, 'voiceTimeout', 1500),
            ey(this, 'started', !1),
            ey(this, 'handleSilence', (e) => {
                let t = !e;
                null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout),
                    (this.stateChangeTimeout = setTimeout(
                        () => {
                            (this.stateChangeTimeout = null),
                                this.started &&
                                    (O.Z.dispatch({
                                        type: 'AUDIO_INPUT_DETECTED',
                                        inputDetected: t
                                    }),
                                    e && (te = !0));
                        },
                        t ? this.voiceTimeout : this.noVoiceTimeout
                    ));
            });
    }
})();
function tB() {
    var e;
    let t = b.K.get('audio');
    null != t && (b.K.set(eT, { [eE.Yn.DEFAULT]: t }), b.K.remove('audio')),
        (eF = null != (e = b.K.get(eT)) ? e : {}),
        _().each(eF, (e) => {
            if ((_().defaultsDeep(e, eU()), null != e.modeOptions && 'string' == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, er.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== eA && ((e.vadUseKrispSettingVersion = eA), (e.modeOptions.vadUseKrisp = !0)), e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)), !e.vadThrehsoldMigrated)) {
                var t;
                (e.vadThrehsoldMigrated = !0), (null == (t = e.modeOptions) ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = ex);
            }
            (0, $.isWeb)() ? e.ncUseKrispjsSettingVersion !== eC && ((e.ncUseKrispjsSettingVersion = eC), (e.noiseSuppression = !1), (e.noiseCancellation = !0)) : e.ncUseKrispSettingVersion !== eN && ((e.ncUseKrispSettingVersion = eN), (e.noiseSuppression = !1), (e.noiseCancellation = !0)), e.hardwareEnabledVersion !== eR && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = eR)), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
        }),
        tZ();
}
function tF(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = tI(t);
    return Object.assign(r, e), !__OVERLAY__ && n && b.K.set(eT, eF), r;
}
function tV() {
    b.K.remove(eT), location.reload();
}
function tZ() {
    var e, t, n;
    let r = tS();
    eB.setAudioInputDevice(r.inputDeviceId), eB.setAudioOutputDevice(r.outputDeviceId), tR(), eB.setInputVolume(r.inputVolume), eB.setOutputVolume(r.outputVolume), eB.setH264Enabled(null == (e = r.hardwareEncoding) || e || r.openH264), eB.setAv1Enabled(null == (t = r.hardwareEncoding) || t), eB.setH265Enabled(null == (n = r.hardwareEncoding) || n), eB.setAecDump(r.aecDumpEnabled), eB.setSidechainCompression(r.sidechainCompression), eB.setSidechainCompressionStrength(r.sidechainCompressionStrength), eB.setAudioInputBypassSystemProcessing(r.bypassSystemInputProcessing);
}
function tH() {
    eZ ||
        eB.enable().then(() =>
            O.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
                enabled: !0,
                unmute: !1
            })
        );
}
function tY(e) {
    return {
        id: eE.w5,
        index: 0,
        name: e,
        disabled: !0,
        hardwareId: void 0,
        containerId: void 0
    };
}
function tW(e, t) {
    if (0 === e.length) {
        let e = tY(t);
        return { [e.id]: e };
    }
    return _()(e)
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
function tK(e, t) {
    var n;
    let r = null != (n = e[t]) ? n : _()(e).values().first();
    return null != r ? r.id : t;
}
function tz(e) {
    let t = eK;
    if (((eK = tW(e, eb.intl.string(eb.t['/QIjDA']))), !_().isEqual(eK, t))) {
        let e = tS(),
            t = tK(eK, e.inputDeviceId);
        eB.setAudioInputDevice(t);
    }
}
function tq(e) {
    let t = ez;
    if (((ez = tW(e, eb.intl.string(eb.t.xlUg0t))), !_().isEqual(ez, t))) {
        let e = tS(),
            t = tK(ez, e.outputDeviceId);
        eB.setAudioOutputDevice(t);
    }
}
function tX(e) {
    e8 = e.length > 0;
    let t = eq;
    if (((eq = tW(e, eb.intl.string(eb.t.WKWARU))), e0 && !_().isEqual(eq, t))) {
        var n;
        let e = void 0 !== eq[e1],
            r = e1 === eE.w5 && (null == (n = t[eE.w5]) ? void 0 : n.disabled);
        tR(e || r);
    }
}
function tQ() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        r =
            null != (e = K.Z.settings.audioContextSettings)
                ? e
                : {
                      user: {},
                      stream: {}
                  };
    for (let e of Object.keys(r)) {
        let i = e === em.u0.USER ? eE.Yn.DEFAULT : eE.Yn.STREAM,
            a = i === eE.Yn.STREAM ? eE.Yh : eE.Qx,
            o = null != (t = r[e]) ? t : {},
            { localMutes: s, localVolumes: l } = tS(i);
        for (let [e, t] of Object.entries(o))
            null == (0, W.Ky)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== a ? (l[e] = t.volume) : delete l[e],
                eB.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (n)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == o[e] &&
                    (delete s[e],
                    delete l[e],
                    eB.eachConnection((t) => {
                        t.setLocalVolume(e, a), t.setLocalMute(e, !1);
                    }, i));
        tF(
            {
                localMutes: s,
                localVolumes: l
            },
            i
        );
    }
}
function tJ(e) {
    if (null == r)
        return (
            eS.info('Error: trying to get soundshare id before MediaEngineStore is instantiated.'),
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
function t$(e, t) {
    (0, $.isWindows)() &&
        I.YT(e, { soundshare_session: t }).then((t) => {
            null == t ||
                D.ZP.shouldContinueWithoutElevatedProcessForPID(e) ||
                O.Z.wait(() => {
                    O.Z.dispatch({
                        type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
                        errorMessage: t
                    });
                });
        });
}
function t0(e) {
    (i = e.sessionId),
        (eX = !1),
        (e$ = !1),
        (0, $.isWeb)() ||
            (G.Z.subscribe({ location: 'handleConnectionOpen' }, (e) => {
                let t = tS();
                !e.sidechainAvailable && t.sidechainCompression ? (tF({ sidechainCompressionSettingVersion: 0 }), ny(!1)) : e.sidechainAvailable && t.sidechainCompressionSettingVersion < eP && (tF({ sidechainCompressionSettingVersion: eP }), ny(e.sidechainEnabled));
            }),
            nv());
    let t = tS();
    tj() && (tU() ? nQ(eE.iA.AUTOMATIC) : t.automaticAudioSubsystem && nJ()),
        (0, z.wt)({
            location: 'MediaEngineStore',
            autoTrackExposure: !1
        }) &&
            null !== t.mostRecentlyRequestedVoiceFilter &&
            (0, $.isDesktop)() &&
            (q.Z.getLastInitAttemptMayHaveCrashed()
                ? (O.Z.dispatch({
                      type: 'AUDIO_SET_SELF_MUTE',
                      mute: !0,
                      context: eE.Yn.DEFAULT,
                      playSoundEffect: !0
                  }),
                  tF({ mostRecentlyRequestedVoiceFilter: null }))
                : n(358820).r5()),
        tQ();
}
function t1(e) {
    let { mediaEngineState: t } = e;
    (eF = t.settingsByContext), (eK = t.inputDevices), (ez = t.outputDevices), (tm = t.appSupported), (tr = t.krispModuleLoaded), (s = t.krispVersion), (eY = t.goLiveContext);
}
function t2() {
    i = null;
}
function t3(e) {
    switch (e.state) {
        case e_.hes.CONNECTING:
            tH();
            break;
        case e_.hes.RTC_CONNECTING:
            (e9 = !1), (te = !1);
            break;
        case e_.hes.RTC_CONNECTED:
            tR();
            break;
        case e_.hes.DISCONNECTED:
            nn(), nr();
    }
    tG.update();
}
function t4(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => (i === t.sessionId ? ((eX = t.mute || t.suppress), (e$ = t.deaf), eB.eachConnection(tN), tR((null == t.guildId || null == t.channelId || null == tl || tl === t.channelId) && e0), (tl = t.channelId), !0) : (__OVERLAY__ || t.userId !== ei.default.getId() || null != ec.Z.getChannelId() || tR(!1, null), e)), !1);
}
function t5(e) {
    let { mute: t } = e;
    (eQ = t), eB.eachConnection(tN);
}
function t6(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = tS(t);
    if (t === eE.Yn.DEFAULT && (H.Z.requestPermission(eh.Eu.AUDIO), eJ)) return !1;
    (r = !i && !r) || (i = !1),
        n || (e2 = !0),
        tF(
            {
                mute: r,
                deaf: i
            },
            t
        ),
        eB.eachConnection(tN);
}
function t8(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    tF({ mute: n }, t), r || (e2 = !0), eB.eachConnection(tN);
}
function t7(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r
    } = e;
    if (t !== em.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    tQ(!0);
}
function t9(e) {
    let { context: t } = e;
    tF({ deaf: !tS(t).deaf }, t), eB.eachConnection(tN);
}
function ne(e) {
    let { context: t, userId: n } = e;
    if (n === ei.default.getId()) return;
    let { localMutes: r } = tS(t);
    r[n] ? delete r[n] : (r[n] = !0), tF({ localMutes: r }, t), eB.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nt(e) {
    var t, n, r, i, a, o, s;
    let { context: l, userId: c, videoToggleState: u, persist: f, isAutomatic: _ } = e;
    d()(!(f && _), 'These are not allowed to both be true.');
    let p = u === e_.ZUi.DISABLED,
        { disabledLocalVideos: h } = tS(l),
        m = null != (t = h[c]) && t,
        g = t_.has(c),
        E = u === e_.ZUi.AUTO_ENABLED || u === e_.ZUi.MANUAL_ENABLED;
    eS.info('disableVideo='.concat(p, ' currentlyDisabled=').concat(m, ' currentlyAutoDisabled=').concat(g, ', isVideoShown=').concat(E)), d()(!(g && !m), 'If you are auto-disabled, then you are also disabled.');
    let b = p !== m,
        y = l === eE.Yn.DEFAULT,
        O = _ && b && y,
        v = f && b && y;
    eS.info('changed='.concat(b, ' isDefaultContext=').concat(y, ' isUpdateCausedByVideoHealthManager=').concat(O, ' isManualToggleByUser=').concat(v));
    let { videoToggleStateMap: I } = tS(l);
    if ((I[c] === e_.ZUi.AUTO_PROBING && u === e_.ZUi.AUTO_ENABLED && (0, Z.Z)(c, p ? eE.fC.AUTO_DISABLE : eE.fC.AUTO_ENABLE, E), (I[c] = u), tF({ videoToggleStateMap: I }, l, f), u === e_.ZUi.AUTO_PROBING ? null == (n = ec.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, !0) : null == (r = ec.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, !1), tp || (eS.info('isAutoDisableAllowed='.concat(tp, ' - disabling VideoHealthManager')), null == (a = ec.Z.getRTCConnection()) || null == (i = a.getVideoHealthManager()) || i.disable()), O)) {
        if ((!p && !g) || (p && !tp)) return;
        (0, Z.Z)(c, p ? eE.fC.AUTO_DISABLE : eE.fC.AUTO_ENABLE, E), p ? t_.add(c) : t_.delete(c);
    } else v && (g && !p ? (eS.info('disallowing auto-disable for this session because of manual override by user'), (tp = !1), null == (s = ec.Z.getRTCConnection()) || null == (o = s.getVideoHealthManager()) || o.disable(), (0, Z.Z)(c, eE.fC.MANUAL_REENABLE, E)) : (0, Z.Z)(c, p ? eE.fC.MANUAL_DISABLE : eE.fC.MANUAL_ENABLE, E));
    y && !p && t_.delete(c),
        p ? (h[c] = !0) : delete h[c],
        tF({ disabledLocalVideos: h }, l, f),
        eB.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(c, null != (t = h[c]) && t);
        }, l);
}
function nn() {
    if (0 === t_.size) return;
    let e = eE.Yn.DEFAULT,
        { disabledLocalVideos: t } = tS(e);
    t_.forEach((n) => {
        d()(t[n], 'If you are auto-disabled, then you are also disabled.'), delete t[n], eB.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        t_.clear(),
        tF({ disabledLocalVideos: t }, e, !1);
}
function nr() {
    let e = eE.Yn.DEFAULT,
        { videoToggleStateMap: t } = tS(e);
    for (let [e, n] of Object.entries(t)) n === e_.ZUi.AUTO_PROBING && delete t[e];
    tF({ videoToggleStateMap: t }, e, !1);
}
function ni(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === ei.default.getId()) return;
    let i = t === eE.Yn.STREAM ? eE.Yh : eE.Qx,
        { localVolumes: a } = tS(t);
    r === i ? delete a[n] : (a[n] = r), tF({ localVolumes: a }, t), eB.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function na(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: a } = tS(t);
    (a[n] = {
        left: r,
        right: i
    }),
        tF({ localPans: a }, t),
        eB.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function no(e) {
    let { context: t, mode: n, options: r } = e;
    tF(
        {
            mode: n,
            modeOptions: r
        },
        t
    ),
        eB.eachConnection(tT),
        tG.update();
}
function ns(e) {
    let { volume: t } = e;
    tF({ inputVolume: tA(t) }), eB.setInputVolume(t);
}
function nl(e) {
    let { volume: t } = e;
    tF({ outputVolume: t }), eB.setOutputVolume(t);
}
function nc(e) {
    let { id: t } = e;
    (t = tK(eK, t)), (eW = performance.now()), tF({ inputDeviceId: t }), eB.setAudioInputDevice(t);
}
function nu(e) {
    let { id: t } = e;
    tF({ outputDeviceId: (t = tK(ez, t)) }), eB.setAudioOutputDevice(t);
}
function nd(e) {
    let { id: t } = e;
    tF({ videoDeviceId: (t = tK(eq, t)) }), tR();
}
function nf(e) {
    let { inputProfile: t } = e,
        n = tF({ activeInputProfile: t });
    eB.eachConnection((e) => {
        tT(e), e.setAutomaticGainControl(n.automaticGainControl), e.setEchoCancellation(n.echoCancellation), e.setExperimentalEncoders(n.experimentalEncoders), e.setNoiseCancellation(n.noiseCancellation), e.setNoiseSuppression(n.noiseSuppression);
    }),
        eB.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        tG.update(),
        nI();
}
function n_(e) {
    return eH !== e.required && ((eH = e.required), e.required || eB.interact(), !0);
}
function np(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    tz(t), tq(n), tX(r);
}
function nh(e) {
    let { inputVolume: t, outputVolume: n } = e;
    tF({
        inputVolume: tA(t),
        outputVolume: n
    });
}
function nm(e) {
    var t;
    let n = tS(),
        r = eB.getAudioSubsystem(),
        i = eB.getAudioLayer(),
        a = tK(eK, n.inputDeviceId),
        o = null == (t = eK[a]) ? void 0 : t.name;
    X.default.track(e_.rMx.VOICE_PROCESSING, {
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
function ng(e) {
    let t = tF({ echoCancellation: e.enabled });
    eB.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nI(), nm(e.location);
}
function nE(e) {
    ny(e.enabled);
}
function nb(e) {
    let t = tF({ sidechainCompressionStrength: e.strength });
    eB.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function ny(e) {
    let t = tF({ sidechainCompression: e });
    eB.setSidechainCompression(t.sidechainCompression);
}
function nO(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? th.add(n) : th.delete(n), nv(), nI();
}
function nv() {
    let { voiceFiltersPreProcessMute: e } = F.Z.getCurrentConfig({ location: 'setMaybePreprocessMute' }, { autoTrackExposure: !0 }),
        t = e && !th.has('voice_filter_preview') && !th.has('mic_test');
    eB.setMaybePreprocessMute(t);
}
function nI() {
    let e = tS(),
        t = th.size > 0,
        n = e.inputDeviceId,
        r = eo.Z.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        a = eo.Z.hasNoiseSuppression(n) || e.noiseSuppression,
        o = eo.Z.hasAutomaticGainControl(n) || e.automaticGainControl,
        s = e.noiseCancellation,
        l = null !== ti,
        c = th.has('voice_filter') && 1 === th.size;
    eB.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: a,
        automaticGainControl: o,
        noiseCancellation: s,
        voiceFilters: l,
        loopbackUseAudioMode: c
    });
}
function nS(e) {
    let t = tF({ noiseSuppression: e.enabled });
    eB.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nI(), nm(e.location);
}
function nT(e) {
    let t = tF({ automaticGainControl: e.enabled });
    eB.eachConnection((e) => e.setAutomaticGainControl(t.automaticGainControl)), nI(), nm(e.location);
}
function nA(e) {
    let t = tF({ noiseCancellation: e.enabled });
    eB.eachConnection((e) => e.setNoiseCancellation(t.noiseCancellation)), nI(), nm(e.location);
}
function nN(e) {
    let t = tF({ experimentalEncoders: e.enabled });
    eB.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
}
function nC(e) {
    var t, n;
    let { enabled: r } = e,
        i = tF({ hardwareEncoding: r });
    eB.eachConnection((e) => {
        var t;
        return e.setHardwareH264(null == (t = i.hardwareEncoding) || t);
    }),
        eB.setH264Enabled(i.hardwareEncoding || i.openH264),
        eB.setAv1Enabled(null == (t = i.hardwareEncoding) || t),
        eB.setH265Enabled(null == (n = i.hardwareEncoding) || n);
}
function nR(e) {
    tF({ silenceWarning: e.enabled }), tG.update();
}
function nP(e) {
    eB.setDebugLogging(e.enabled);
}
function nw(e) {
    let { level: t } = e;
    (l = t), Y.Z.setKrispSuppressionLevel(t);
}
function nD(e) {
    tF({ videoHook: e.enabled });
}
function nL(e) {
    tF({ experimentalSoundshare2: e.enabled });
}
function nx(e) {
    let { enabled: t } = e;
    tF({ useSystemScreensharePicker: t });
}
function nk(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = tF({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r
        });
    eB.eachConnection((e) => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers));
}
function nM(e) {
    let { enabled: t } = e;
    tF({ qos: t }), eB.eachConnection((e) => e.setQoS(t));
}
function nj() {
    tV();
}
function nU(e) {
    let { inputDetected: t } = e;
    (e7 = t), !e9 && e7 && ((e9 = !0), tG.update());
}
function nG(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === eJ) return !1;
    (eJ = n), eB.eachConnection(tN);
}
function nB(e) {
    let { state: t, permissionType: n } = e,
        r = t === eh.PQ.ACCEPTED;
    switch (n) {
        case eh.Eu.AUDIO:
            (td = !0), eB.eachConnection(tN);
            break;
        case eh.Eu.CAMERA:
            !r && e0 && tR(!1);
            break;
        default:
            return !1;
    }
}
function nF() {
    return tr || !1;
}
async function nV() {
    try {
        var e, t, n;
        await en.ZP.ensureModule('discord_krisp');
        let i = en.ZP.requireModule('discord_krisp');
        (tr = !0), (s = null == (e = i.getSdkVersion) ? void 0 : e.call(i)), (l = null != (n = null == (t = i.getSuppressionLevel) ? void 0 : t.call(i)) ? n : 100), r.emitChange();
    } catch (t) {
        eS.warn('Failed to load Krisp module: '.concat(t.message)), et.Z.captureException(t);
        let e = eE.H3.INITIALIZED;
        if (t.message.includes(': ')) {
            let n = parseInt(t.message.substring(t.message.indexOf(': ') + 1));
            e = isNaN(n) || 0 === n ? eE.H3.INITIALIZED : n;
        }
        X.default.track(e_.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), tF({ noiseCancellation: !1 });
    } finally {
        tn = !1;
    }
}
function nZ() {
    return (0, $.isWindows)() || (0, $.isLinux)() || (0, $.isMac)();
}
function nH() {
    !nZ() || __OVERLAY__ || tn || tr ? ((0, $.isWeb)() && eB.supports(eE.AN.NOISE_CANCELLATION) ? ((tr = !0), r.emitChange()) : (0, $.isWeb)() && tF({ noiseCancellation: !1 })) : ((tn = !0), nV());
}
function nY(e) {
    let { enabled: t } = e;
    X.default.track(e_.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != ti ? ti : null,
        enabled: t
    }),
        tF({ voiceFilterPlaybackEnabled: t });
}
function nW(e) {
    let { newVoiceFilterId: t } = e;
    tF({ mostRecentlyRequestedVoiceFilter: t }), eB.eachConnection((e) => e.setVoiceFilterId(t));
}
function nK() {
    tF({ mostRecentlyRequestedVoiceFilter: null });
}
function nz(e) {
    let { voiceFilterId: t } = e;
    (to = ti), (ts = ta), (ti = t), (ta = null === t ? null : Date.now());
}
function nq(e) {
    let t = e.bypassEnabled;
    tF({ bypassSystemInputProcessing: t }), eB.setAudioInputBypassSystemProcessing(t), nm(e.location);
}
function nX(e) {
    nQ(e.subsystem);
}
function nQ(e) {
    e === eE.iA.AUTOMATIC ? (tF({ automaticAudioSubsystem: !0 }), nJ()) : (tF({ automaticAudioSubsystem: !1 }), eB.setAudioSubsystem(e));
}
function nJ() {
    eB.queueAudioSubsystem(eE.iA.EXPERIMENTAL);
}
function n$(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && tR(i, null), null != t || null == n)) {
        tt = !1;
        return;
    }
    if (tt) return;
    tt = !0;
    let a = tS();
    (a.mute || a.deaf) &&
        (tF({
            deaf: !1,
            mute: !1
        }),
        eB.eachConnection(tN));
}
function n0(e) {
    let { application: t } = e;
    eV.add(t.id);
}
function n1(e) {
    let { application: t } = e;
    eV.delete(t.id);
}
function n2(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case 'audio':
                (eZ = !1), eB.eachConnection(tN);
                break;
            case 'video':
                tR(!1);
        }
}
function n3(e) {
    (eZ = e.enabled),
        e.unmute &&
            tF({
                mute: !1,
                deaf: !1
            }),
        eB.eachConnection(tN);
}
function n4(e) {
    let { enabled: t } = e;
    H.Z.requestPermission(eh.Eu.CAMERA), tR(t);
}
function n5(e) {
    let { sourceId: t, applicationName: n, quality: i } = e,
        a = T.Z.isDecoupledGameClippingEnabled(),
        s = T.Z.getSettings().decoupledClipsEnabled;
    if (!a || !s || null == v.Z) return;
    let l = null,
        c = null,
        u = Q.Z.getPidFromDesktopSource(t);
    ({ soundshareId: l, soundshareSession: c } = tJ(u));
    let d = {
        desktopSource: {
            id: t,
            sourcePid: u,
            soundshareId: l,
            soundshareSession: c
        },
        quality: i
    };
    null != o && o.desktopSource.id !== d.desktopSource.id && (eB.setClipsSource(null), (0, $.isWindows)() && null != o.desktopSource.soundshareId && I.pn(o.desktopSource.soundshareId)), null != l && t$(l, c), (o = d);
    let f = tv(),
        _ = tS().videoHook;
    eB.setClipsSource({
        desktopDescription: {
            id: o.desktopSource.id,
            soundshareId: o.desktopSource.soundshareId,
            useVideoHook: _,
            useGraphicsCapture: tx(),
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: tM(),
            videoHookStaleFrameTimeoutMs: eD,
            graphicsCaptureStaleFrameTimeoutMs: eL,
            hdrCaptureMode: f
        },
        quality: i,
        applicationName: n
    });
}
function n6(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((o = null), eB.setClipsSource(null));
}
function n8(e) {
    var t, n, r, i;
    let { settings: a } = e;
    if ((null == a ? void 0 : a.desktopSettings) != null) {
        let e = null,
            r = null,
            { sourceId: i, sound: o } = a.desktopSettings,
            s = null != (t = a.context) ? t : eE.Yn.DEFAULT,
            l =
                null != (n = a.qualityOptions)
                    ? n
                    : {
                          resolution: 720,
                          frameRate: 30
                      },
            c = !1 === o ? null : Q.Z.getPidFromDesktopSource(i);
        $.isPlatformEmbedded && !0 === o && (({ soundshareId: e, soundshareSession: r } = tJ(c)), null != e && t$(e, r)),
            tC(s),
            tR(s === eE.Yn.STREAM && e0, {
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
        let e = null != (r = a.context) ? r : eE.Yn.DEFAULT,
            { videoDeviceGuid: t, audioDeviceGuid: n } = a.cameraSettings,
            o = e === eE.Yn.STREAM && e0,
            s =
                null != (i = a.qualityOptions)
                    ? i
                    : {
                          resolution: 720,
                          frameRate: 30
                      };
        tR(o, {
            cameraSource: {
                videoDeviceGuid: t,
                audioDeviceGuid: n
            },
            quality: {
                resolution: s.resolution,
                frameRate: s.frameRate
            }
        });
    } else tR(e0, null);
}
function n7(e) {
    let { section: t } = e;
    return t === e_.oAB.VOICE && tH(), !1;
}
function n9() {
    return eB.eachConnection(tD), !1;
}
function re(e) {
    let { enabled: t } = e,
        n = tF({ openH264: t });
    eB.setH264Enabled(n.hardwareEncoding || n.openH264),
        eB.eachConnection((e) => {
            var t;
            return e.setSoftwareH264(null == (t = n.openH264) || t);
        });
}
function rt(e) {
    let { enabled: t } = e,
        n = tF({ aecDumpEnabled: t });
    eB.setAecDump(n.aecDumpEnabled);
}
function rn(e) {
    let { state: t } = e,
        n = w.Z.isEnabled();
    if (t === e_.$7l.BACKGROUND && e0 && !n) (e6 = !0), tR(!1);
    else {
        if (t !== e_.$7l.ACTIVE || !e6) return !1;
        (e6 = !1), tR(!0);
    }
    return !0;
}
function rr(e) {
    eB.eachConnection((t) => t.setBitRate(e.bitrate));
}
function ri() {
    if ((!e0 && null == a) || null != ec.Z.getRTCConnectionId()) return !1;
    tR(!1, null);
}
function ra() {
    return !!tc && ((tc = !1), !0);
}
function ro(e) {
    eB.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function rs(e) {
    let { settings: t } = e;
    eB.applyMediaFilterSettings(t).finally(() => {
        (tu = !1), r.emitChange();
    });
}
function rl() {
    tu = !0;
}
function rc() {
    tu = !1;
}
function ru(e) {
    tE = e.enabled;
}
class rd extends (c = g.ZP.Store) {
    initialize() {
        tL(),
            tB(),
            nH(),
            nr(),
            (tm = {
                [eE.AN.VIDEO]: eB.supports(eE.AN.VIDEO),
                [eE.AN.DESKTOP_CAPTURE]: eB.supports(eE.AN.DESKTOP_CAPTURE),
                [eE.AN.HYBRID_VIDEO]: eB.supports(eE.AN.HYBRID_VIDEO)
            }),
            this.waitFor(ei.default, eo.Z, es.Z, el.Z, ec.Z, D.ZP, H.Z.storage, K.Z, P.Z, T.Z);
    }
    supports(e) {
        return eB.supports(e);
    }
    supportsInApp(e) {
        return tm[e] || eB.supports(e);
    }
    isSupported() {
        return eB.supported();
    }
    isExperimentalEncodersSupported() {
        return eB.supports(eE.AN.EXPERIMENTAL_ENCODERS);
    }
    isNoiseSuppressionSupported() {
        return eB.supports(eE.AN.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return nF();
    }
    isNoiseCancellationError() {
        return tc;
    }
    isAutomaticGainControlSupported() {
        return eB.supports(eE.AN.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !tU() && (eB.supports(eE.AN.LEGACY_AUDIO_SUBSYSTEM) || eB.supports(eE.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return eB.supports(eE.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && 'experimental' === eB.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return nF();
    }
    isAecDumpSupported() {
        return eB.supports(eE.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return eB.supports(eE.AN.VIDEO) && eB.supports(eE.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        let t = (null == (e = es.Z.getChannel(tl)) ? void 0 : e.type) === e_.d4z.GUILD_STAGE_VOICE,
            n = r.getHardwareEncoding();
        return !t && n && j.Z.simulcastEnabled();
    }
    getAecDump() {
        return tS().aecDumpEnabled;
    }
    getMediaEngine() {
        return eB;
    }
    getVideoComponent() {
        return eB.Video;
    }
    getCameraComponent() {
        return eB.Camera;
    }
    getKrispSuppressionLevel() {
        return null != l ? l : 100;
    }
    isEnabled() {
        return eZ;
    }
    isMute() {
        return this.isSelfMute() || eX;
    }
    isDeaf() {
        return this.isSelfDeaf() || e$;
    }
    hasContext(e) {
        return null != eF[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.Yn.DEFAULT;
        return e === eE.Yn.DEFAULT && eQ;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.Yn.DEFAULT;
        return !this.isEnabled() || tS(e).mute || !H.Z.didHavePermission(eh.Eu.AUDIO) || this.isSelfDeaf(e) || (e === eE.Yn.DEFAULT && eJ);
    }
    shouldSkipMuteUnmuteSound() {
        return e2;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        e2 = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && eo.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return tE;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.Yn.DEFAULT;
        return !this.isSupported() || tS(e).deaf;
    }
    isVideoEnabled() {
        return e0 && e8;
    }
    isVideoAvailable() {
        return Object.values(eq).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.Yn.STREAM;
        return eY === e && null != a;
    }
    isSoundSharing() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.Yn.STREAM;
        return eY === t && null != a && (null == (e = a.desktopSource) ? void 0 : e.soundshareId) != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.Yn.DEFAULT;
        return e !== ei.default.getId() && (tS(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return eB.supports(eE.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.Yn.DEFAULT;
        return null != (t = tS(n).disabledLocalVideos[e]) && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.Yn.DEFAULT;
        return null != (t = tS(n).videoToggleStateMap[e]) ? t : e_.ZUi.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.Yn.DEFAULT;
        return t === eE.Yn.DEFAULT && t_.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.Yn.DEFAULT;
        return e === eE.Yn.DEFAULT && t_.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tu;
    }
    isNativeAudioPermissionReady() {
        return td;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return eY;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return eW;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.Yn.DEFAULT,
            n = tS(t).localPans[e];
        return null != n ? n : ew;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eE.Yn.DEFAULT,
            n = t === eE.Yn.STREAM ? eE.Yh : eE.Qx,
            r = tS(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return tS().inputVolume;
    }
    getOutputVolume() {
        return tS().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.Yn.DEFAULT;
        return tS(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.Yn.DEFAULT;
        return tS(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return ti;
    }
    getActiveVoiceFilterAppliedAt() {
        return ta;
    }
    getPreviousVoiceFilter() {
        return to;
    }
    getPreviousVoiceFilterAppliedAt() {
        return ts;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return tS().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return tS().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            _().each(eF, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i }
                } = t;
                r === e_.pM4.PUSH_TO_TALK && eV.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return tK(eK, tS().inputDeviceId);
    }
    getOutputDeviceId() {
        return tK(ez, tS().outputDeviceId);
    }
    getVideoDeviceId() {
        return tK(eq, tS().videoDeviceId);
    }
    getInputDevices() {
        return eK;
    }
    getOutputDevices() {
        return ez;
    }
    getVideoDevices() {
        return eq;
    }
    getEchoCancellation() {
        let e = tS();
        return eo.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return tS().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return tS().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return tS().h265Enabled;
    }
    getLoopback() {
        return th.size > 0;
    }
    getLoopbackReasons() {
        return th;
    }
    getNoiseSuppression() {
        let e = tS();
        return eo.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tS();
        return eo.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return tS().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return tS().noiseCancellation;
    }
    getExperimentalEncoders() {
        return tS().experimentalEncoders;
    }
    getHardwareEncoding() {
        var e;
        return null == (e = tS().hardwareEncoding) || e;
    }
    getEnableSilenceWarning() {
        return tS().silenceWarning;
    }
    getDebugLogging() {
        return eB.getDebugLogging();
    }
    getQoS() {
        return tS().qos;
    }
    getAttenuation() {
        return tS().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return tS().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return tS().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return tj() && tS().automaticAudioSubsystem ? eE.iA.AUTOMATIC : eB.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return eB.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return tS().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eg._.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.Yn.DEFAULT;
        return tS(e);
    }
    getState() {
        return {
            settingsByContext: eF,
            inputDevices: eK,
            outputDevices: ez,
            appSupported: tm,
            krispModuleLoaded: tr,
            krispVersion: s,
            krispSuppressionLevel: l,
            goLiveSource: a,
            goLiveContext: eY
        };
    }
    getInputDetected() {
        return e7;
    }
    getNoInputDetectedNotice() {
        return te;
    }
    getPacketDelay() {
        return $.isPlatformEmbedded || this.getMode() !== e_.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        eB.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return eH;
    }
    getVideoHook() {
        return tS().videoHook;
    }
    supportsVideoHook() {
        return eB.supports(eE.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tS().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e);
    }
    supportsExperimentalSoundshare() {
        return eB.supports(eE.AN.EXPERIMENTAL_SOUNDSHARE) && h().satisfies(null === v.Z || void 0 === v.Z ? void 0 : v.Z.os.release, ep.I9);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = tS().useSystemScreensharePicker,
            n = (0, $.isLinux)() || ((0, $.isMac)() && h().satisfies(null === v.Z || void 0 === v.Z ? void 0 : v.Z.os.release, ep.jR));
        return e && (null != t ? t : n);
    }
    supportsSystemScreensharePicker() {
        return eB.supports(eE.AN.NATIVE_SCREENSHARE_PICKER);
    }
    getOpenH264() {
        return tS().openH264;
    }
    getEverSpeakingWhileMuted() {
        return e3;
    }
    getSpeakingWhileMuted() {
        return e4;
    }
    hasActiveCallKitCall() {
        return tb;
    }
    setHasActiveCallKitCall(e) {
        tb = e;
    }
    supportsScreenSoundshare() {
        return (0, $.isMac)() ? eB.supports(eE.AN.SOUNDSHARE) && h().satisfies(null === v.Z || void 0 === v.Z ? void 0 : v.Z.os.release, ep.yG) && tM() : (0, $.isWindows)() ? eB.supports(eE.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, $.isLinux)() && eB.supports(eE.AN.SCREEN_SOUNDSHARE);
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eE.Yn.DEFAULT,
            t = this.supports(eE.AN.VIDEO)
                ? [
                      {
                          rid: '100',
                          type: e === eE.Yn.DEFAULT ? eE.Tr.VIDEO : eE.Tr.SCREEN,
                          quality: eE.y7
                      }
                  ]
                : [];
        return (
            this.isSimulcastSupported() &&
                (e === eE.Yn.DEFAULT || this.goLiveSimulcastEnabled()) &&
                t.push({
                    rid: '50',
                    type: e === eE.Yn.DEFAULT ? eE.Tr.VIDEO : eE.Tr.SCREEN,
                    quality: eE.LD
                }),
            t
        );
    }
    getSupportedSecureFramesProtocolVersion() {
        let e = eB.getSupportedSecureFramesProtocolVersion(),
            t = U.m.getCurrentConfig({ location: 'MediaEngineStore' });
        return 114 === e && (e = 1), t.canSupportDaveProtocol && e >= t.protocolVersionFloor ? e : 0;
    }
    hasClipsSource() {
        return null != o;
    }
    getGpuBrand() {
        return tg;
    }
}
function rf(e) {
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
ey(rd, 'displayName', 'MediaEngineStore');
let r_ = (r = new rd(O.Z, {
    VOICE_CHANNEL_SELECT: n$,
    VOICE_STATE_UPDATES: t4,
    CONNECTION_OPEN: t0,
    CONNECTION_CLOSED: t2,
    RTC_CONNECTION_STATE: t3,
    AUDIO_SET_TEMPORARY_SELF_MUTE: t5,
    AUDIO_TOGGLE_SELF_MUTE: t6,
    AUDIO_SET_SELF_MUTE: t8,
    AUDIO_TOGGLE_SELF_DEAF: t9,
    AUDIO_TOGGLE_LOCAL_MUTE: ne,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: nt,
    AUDIO_SET_LOCAL_VOLUME: ni,
    AUDIO_SET_LOCAL_PAN: na,
    AUDIO_SET_MODE: no,
    AUDIO_SET_INPUT_VOLUME: ns,
    AUDIO_SET_OUTPUT_VOLUME: nl,
    AUDIO_SET_INPUT_DEVICE: nc,
    AUDIO_SET_OUTPUT_DEVICE: nu,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: nf,
    AUDIO_SET_ECHO_CANCELLATION: ng,
    AUDIO_SET_SIDECHAIN_COMPRESSION: nE,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nb,
    AUDIO_SET_LOOPBACK: nO,
    AUDIO_SET_NOISE_SUPPRESSION: nS,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nT,
    AUDIO_SET_NOISE_CANCELLATION: nA,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: nR,
    AUDIO_SET_DEBUG_LOGGING: nP,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: nw,
    MEDIA_ENGINE_SET_VIDEO_HOOK: nD,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: nL,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: nx,
    AUDIO_SET_ATTENUATION: nk,
    AUDIO_SET_QOS: nM,
    MEDIA_ENGINE_DEVICES: np,
    AUDIO_VOLUME_CHANGE: nh,
    AUDIO_RESET: nj,
    AUDIO_INPUT_DETECTED: nU,
    AUDIO_SET_SUBSYSTEM: nX,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: nq,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: n3,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: n4,
    MEDIA_ENGINE_PERMISSION: n2,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: n8,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nd,
    MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nN,
    MEDIA_ENGINE_INTERACTION_REQUIRED: n_,
    USER_SETTINGS_MODAL_INIT: n7,
    USER_SETTINGS_MODAL_SET_SECTION: n7,
    CERTIFIED_DEVICES_SET: n9,
    RPC_APP_CONNECTED: n0,
    RPC_APP_DISCONNECTED: n1,
    OVERLAY_INITIALIZE: t1,
    MEDIA_ENGINE_SET_OPEN_H264: re,
    MEDIA_ENGINE_SET_HARDWARE_ENCODING: nC,
    APP_STATE_UPDATE: rn,
    SET_CHANNEL_BITRATE: rr,
    SET_VAD_PERMISSION: nG,
    SET_NATIVE_PERMISSION: nB,
    SET_CHANNEL_VIDEO_QUALITY_MODE: ro,
    MEDIA_ENGINE_SET_AEC_DUMP: rt,
    CHANNEL_DELETE: ri,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: ra,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: rs,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: rl,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rc,
    USER_SETTINGS_PROTO_UPDATE: t7,
    CLIPS_INIT: n5,
    CLIPS_SETTINGS_UPDATE: n6,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: ru,
    VOICE_FILTER_REQUEST_SWITCH: nW,
    VOICE_FILTER_LOOPBACK_TOGGLE: nY,
    VOICE_FILTER_APPLIED: nz,
    VOICE_FILTER_DOWNLOAD_FAILED: nK,
    VOICE_FILTER_APPLY_FAILED: nK
}));
