let r, i, o, a, s;
n.d(t, { Z: () => rd }), n(388685), n(953529), n(457542), n(539854), n(642613), n(49124), n(337869);
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
    eh = n(345655),
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
function eO(e, t) {
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
let ev = new A.Z('MediaEngineStore'),
    eI = 'MediaEngineStore',
    eS = 4,
    eT = 1,
    eA = 1,
    eN = 1,
    eC = 1,
    eP = {
        left: 1,
        right: 1
    },
    eR = 500,
    ew = 5 * Q.Z.Millis.SECOND,
    eD = -60,
    eL = 100,
    ex = '>=21.0.0',
    ek = 2 * Q.Z.Millis.SECOND,
    eM = 0;
function ej() {
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
        automaticAudioSubsystem: !0,
        activeInputProfile: null
    };
}
let eU = {
        [eh._.CUSTOM]: {},
        [eh._.VOICE_ISOLATION]: {
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
        [eh._.STUDIO]: {
            mode: ed.pM4.VOICE_ACTIVITY,
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
    eG = (0, g.Mt)((0, g.jj)());
ev.enableNativeLogger(!0);
let eB = {},
    eF = new Set([em.Yn.DEFAULT]),
    eV = eG.supports(em.AN.AUTO_ENABLE),
    eZ = !1,
    eH = em.Yn.STREAM,
    eY = performance.now(),
    eW = { [em.w5]: tH('No Input Devices') },
    eK = { [em.w5]: tH('No Output Devices') },
    ez = { [em.w5]: tH('No Video Devices') },
    eq = !1,
    eQ = !1,
    eX = !1,
    eJ = !1,
    e$ = !1,
    e0 = em.Av,
    e1 = !1,
    e3 = !1,
    e2 = !1,
    e4 = new b.V7(),
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
Z.Z.hasPermission(e_.Eu.AUDIO, { showAuthorizationError: !1 }), Z.Z.hasPermission(e_.Eu.CAMERA, { showAuthorizationError: !1 });
let td = !1,
    tf = new Set(),
    t_ = td,
    tp = new Set(),
    th = {},
    tm = null,
    tg = !0,
    tE = !1,
    tb = {},
    ty = 5 * Q.Z.Millis.SECOND;
function tO() {
    var e, t;
    return null != (t = null == (e = ec.default.getCurrentUser()) ? void 0 : e.isStaff()) && t ? 'always' : J.Z === h.R.CANARY ? 'permittedDevicesOnly' : 'never';
}
function tv() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.Yn.DEFAULT,
        t = eB[e];
    return null == t && ((t = ej()), (eB[e] = t)), t;
}
function tI() {
    var e, t, n;
    let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.Yn.DEFAULT,
        i = tv(r),
        o = eU[null != (e = i.activeInputProfile) ? e : eh._.CUSTOM];
    return eO(eb({}, i, o), { modeOptions: eb({}, null != (t = i.modeOptions) ? t : {}, null != (n = o.modeOptions) ? n : {}) });
}
function tS(e) {
    let t = tI(e.context);
    e.setInputMode(t.mode, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: t.modeOptions.autoThreshold,
        vadUseKrisp: t.modeOptions.vadUseKrisp && nG(),
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        pttReleaseDelay: t.modeOptions.delay
    });
}
function tT(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.Qx;
    return f().clamp(e, 0, t);
}
function tA(e) {
    let t = tI(e.context),
        n = !eV || t.mute || t.deaf;
    e.context === em.Yn.DEFAULT ? (n = n || eq || eQ || eX || !Z.Z.didHavePermission(e_.Eu.AUDIO)) : e.context === em.Yn.STREAM && (n = !0), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === em.Yn.DEFAULT && I.Z.updateNativeMute();
}
function tN(e) {
    e !== eH && (null != o && eG.setGoLiveSource(null, eH), (eH = e));
}
function tC() {
    var e, t, n;
    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$,
        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
        s = o;
    if (((null == s ? void 0 : s.desktopSource) != null && s.desktopSource.id !== (null == a || null == (e = a.desktopSource) ? void 0 : e.id) && (null != s.desktopSource.soundshareId && (0, X.isWindows)() && v.pn(s.desktopSource.soundshareId), eG.setGoLiveSource(null, eH)), (null == s ? void 0 : s.cameraSource) != null && (s.cameraSource.videoDeviceGuid !== (null == a || null == (t = a.cameraSource) ? void 0 : t.videoDeviceGuid) || s.cameraSource.audioDeviceGuid !== (null == a || null == (n = a.cameraSource) ? void 0 : n.audioDeviceGuid)) && eG.setGoLiveSource(null, eH), (e$ || i) && ((e0 = (e$ = i) ? tW(ez, tI().videoDeviceId) : em.Av), eG.setVideoInputDevice(e0)), (o = a), null != a)) {
        let e = {
            resolution: a.quality.resolution,
            frameRate: a.quality.frameRate
        };
        if (null != a.desktopSource) {
            let t = tO(),
                n = tI().videoHook,
                i = tL(),
                o = i ? (tx() && (0, F.R)('MediaEngineStore_updateVideo').enabled ? ef.zj : ef.ZM) : 0;
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
                        allowScreenCaptureKit: tk(),
                        videoHookStaleFrameTimeoutMs: eR,
                        graphicsCaptureStaleFrameTimeoutMs: ew,
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
function tP(e, t, n, r) {
    var i;
    let o = null != (i = null == e ? void 0 : e.soundshareSession) ? i : '';
    null == tb[o] && (tb[o] = new Set());
    let a = null != t && !tb[o].has(t);
    a && tb[o].add(t),
        (null == t || a) &&
            z.default.track(
                ed.rMx.SOUNDSHARE_FAILED,
                eb(
                    {
                        soundshare_failure_code: t,
                        soundshare_failure_reason: n,
                        soundshare_failure_will_retry: r
                    },
                    (0, D.Z)(e)
                )
            );
}
function tR(e) {
    switch (e) {
        case em.H3.CPU_OVERUSE:
            return C.Nk.NoiseCancellerCpuOveruse;
        case em.H3.FAILED:
            return C.Nk.NoiseCancellerFailed;
        case em.H3.VAD_CPU_OVERUSE:
            return C.Nk.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function tw(e) {
    let t = tI(),
        n = t.inputDeviceId;
    if ((e.setEchoCancellation(ei.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(ei.Z.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(ei.Z.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), e.setVoiceFilterId(tr), (0, X.isWeb)())) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function tD() {
    eG.on(g.aB.Connection, (e) => {
        var t, n;
        tS(e), tA(e), tw(e);
        let i = tI();
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers), e.setQoS(i.qos), e.setExperimentalEncoders(i.experimentalEncoders), e.setHardwareH264(null == (t = i.hardwareEncoding) || t), e.setSoftwareH264(null == (n = i.openH264) || n);
        let a = es.Z.getGuildId(),
            { muteBeforeProcessing: s, pttBeforeProcessing: l, skipEncode: c } = (null != a ? k.Z : x.Z).getCurrentConfig(eb({ location: 'setupMediaEngine' }, null != a && { guildId: a }), { autoTrackExposure: !0 });
        s && e.setExperimentFlag(em.V8.MUTE_BEFORE_PROCESSING, !0), l && e.setExperimentFlag(em.V8.PTT_BEFORE_PROCESSING, !0), c && e.setExperimentFlag(em.V8.SKIP_ENCODE, !0);
        let u = !1,
            d = !0;
        if ((e.setExperimentFlag(em.V8.RESET_DECODER_ON_ERRORS, !0), u && e.setExperimentFlag(em.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0), d && e.setExperimentFlag(em.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0), e.context === em.Yn.STREAM)) {
            let { simulcastEnabled: t, lqStreamBitrate: n } = M.Z.getConfig();
            e.configureGoLiveSimulcast(t, n);
        }
        (0, X.isWindows)() ? ((null == tm ? void 0 : tm.startsWith('NVIDIA')) || (null == tm ? void 0 : tm.startsWith('AMD')) ? e.setExperimentFlag(em.V8.SIGNAL_AV1, !0) : e.setExperimentFlag(em.V8.SIGNAL_AV1_DECODE, !0)) : ((0, X.isMac)() || (0, X.isLinux)()) && e.setExperimentFlag(em.V8.SIGNAL_AV1_DECODE, !0), (0, X.isWindows)() && e.setExperimentFlag(em.V8.SIGNAL_AV1_HARDWARE_DECODE, !0), eG.setHasFullbandPerformance((0, N.Z)());
        let f = (0, L.D)('setupMediaEngine').enabled;
        if ((e.setRemoteAudioHistory(1000 * !!f), (0, T.Z)(r))) {
            let t = S.Z.getSettings();
            e.setExperimentFlag(em.V8.STREAMER_CLIP, t.clipsEnabled);
            let { enableViewerClipping: n } = G.Z.getCurrentConfig({ location: 'f627ab_15' }, { autoTrackExposure: !1 });
            e.setViewerSideClip(n), e.setClipsKeyFrameInterval(em.ux);
        }
        for (let t of ((i = tI(e.context)), e.setPostponeDecodeLevel(eL), Object.keys(i.localMutes))) t !== en.default.getId() && e.setLocalMute(t, i.localMutes[t]);
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
            e.context === em.Yn.DEFAULT &&
                ((e3 = !1),
                (e2 = !1),
                e.on(g.Sh.SpeakingWhileMuted, () => {
                    (e3 = !0),
                        (e2 = !0),
                        r.emitChange(),
                        e4.stop(),
                        e4.start(ek, () => {
                            (e2 = !1), r.emitChange();
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
                tP(null == o ? void 0 : o.desktopSource, t, n, r);
            }),
            e.on(g.Sh.SoundshareSpeaking, () => {
                (null == o ? void 0 : o.desktopSource) != null && (z.default.track(ed.rMx.SOUNDSHARE_TRANSMITTING, (0, D.Z)(null == o ? void 0 : o.desktopSource)), null != ea.Z.getHookError(ed.K3D.SOUND) && y.Z.wait(() => y.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
            });
        let _ = new b.V7();
        e.on(g.Sh.SoundshareTrace, (e) => {
            switch (e.type) {
                case 'soundshare_attach_requested':
                    _.start(ty, () => {
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
                        (tP(null == o ? void 0 : o.desktopSource, n, t, r),
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
                        eb(
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
                ev.warn('noisecancellererror event: '.concat(e)),
                    (0, C.kr)({
                        type: C.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tR(e)
                    }),
                    (tl = !0),
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
                ev.warn('voiceactivitydetectorerror event: '.concat(e)),
                    (0, C.kr)({
                        type: C.u.NOISE_CANCELLER_ERROR,
                        underlyingError: tR(e)
                    }),
                    z.default.track(ed.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
                    y.Z.dispatch({
                        type: 'AUDIO_SET_MODE',
                        context: em.Yn.DEFAULT,
                        mode: ed.pM4.VOICE_ACTIVITY,
                        options: eO(eb({}, tI(em.Yn.DEFAULT).modeOptions), { vadUseKrisp: !1 })
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
        eG.on(g.aB.DeviceChange, (e, t, n) => {
            y.Z.dispatch({
                type: 'MEDIA_ENGINE_DEVICES',
                inputDevices: e,
                outputDevices: t,
                videoDevices: n
            });
        }),
        eG.on(g.aB.VolumeChange, (e, t) => {
            y.Z.dispatch({
                type: 'AUDIO_VOLUME_CHANGE',
                inputVolume: e,
                outputVolume: t
            });
        }),
        eG.on(g.aB.DesktopSourceEnd, () => {
            y.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                settings: null
            });
        }),
        eG.on(g.aB.AudioPermission, (e) => {
            (tu = !0),
                y.Z.dispatch({
                    type: 'MEDIA_ENGINE_PERMISSION',
                    kind: 'audio',
                    granted: e
                });
        }),
        eG.on(g.aB.VideoPermission, (e) => {
            y.Z.dispatch({
                type: 'MEDIA_ENGINE_PERMISSION',
                kind: 'video',
                granted: e
            });
        }),
        eG.on(g.aB.WatchdogTimeout, async () => {
            let e;
            try {
                await q.Z.submitLiveCrashReport({ message: { message: 'Voice Watchdog Timeout' } });
            } catch (t) {
                'number' == typeof t.status && (e = t.status);
            }
            ev.warn('Watchdog timeout, report submission status: '.concat(null != e ? e : 200)), z.default.track(ed.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
        }),
        eG.on(g.aB.VideoInputInitialized, (e) => {
            z.default.track(ed.rMx.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * Q.Z.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: es.Z.getMediaSessionId(),
                rtc_connection_id: es.Z.getRTCConnectionId()
            });
        }),
        eG.on(g.aB.AudioInputInitialized, (e) => {
            z.default.track(ed.rMx.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * Q.Z.Millis.SECOND),
                rtc_connection_id: es.Z.getRTCConnectionId()
            });
        }),
        eG.on(g.aB.ClipsRecordingRestartNeeded, () => {
            y.Z.dispatch({ type: 'CLIPS_RESTART' });
        }),
        eG.on(g.aB.ClipsInitFailure, (e, t) => {
            y.Z.wait(() => {
                y.Z.dispatch({
                    type: 'CLIPS_INIT_FAILURE',
                    errMsg: e,
                    applicationName: t
                });
            });
        }),
        eG.on(g.aB.ClipsRecordingEnded, (e, t) => {
            var n, r;
            (null == a || null == (n = a.desktopSource) ? void 0 : n.id) === e && (null != t && (null == o || null == (r = o.desktopSource) ? void 0 : r.soundshareId) !== t && v.pn(t), (a = null));
        }),
        eG.on(g.aB.NativeScreenSharePickerUpdate, (e, t) => {
            y.Z.dispatch({
                type: 'NATIVE_SCREEN_SHARE_PICKER_UPDATE',
                existing: e,
                content: t
            });
        }),
        eG.on(g.aB.NativeScreenSharePickerCancel, (e) => {
            y.Z.dispatch({
                type: 'NATIVE_SCREEN_SHARE_PICKER_CANCEL',
                existing: e
            });
        }),
        eG.on(g.aB.NativeScreenSharePickerError, (e) => {
            y.Z.dispatch({
                type: 'NATIVE_SCREEN_SHARE_PICKER_ERROR',
                error: e
            });
        }),
        eG.on(g.aB.AudioDeviceModuleError, (e, t, n) => {
            z.default.track(ed.rMx.AUDIO_DEVICE_MODULE_ERROR, {
                audio_device_module: e,
                code: t,
                device_name: n
            });
        }),
        eG.on(g.aB.VideoCodecError, (e) => {
            let t = 'encode' === e.mode ? C.u.VIDEO_ENCODE_ERROR : C.u.VIDEO_DECODE_ERROR,
                n = {
                    videoCodec: e.codecStandard,
                    errorMessage: e.message
                };
            (0, C.kr)(t === C.u.VIDEO_ENCODE_ERROR ? eO(eb({ type: t }, n), { videoEncoder: e.implName }) : eO(eb({ type: t }, n), { videoDecoder: e.implName }));
        }),
        eG.on(g.aB.ConnectionStats, (e) => {
            y.Z.dispatch({
                type: 'MEDIA_ENGINE_CONNECTION_STATS',
                connectionStats: e.map((e) => {
                    let { stats: t, connection: n } = e;
                    return {
                        stats: t,
                        mediaEngineConnectionId: n.mediaEngineConnectionId,
                        version: eM++,
                        context: n.context
                    };
                })
            });
        }),
        eG.on(g.aB.VoiceQueueMetrics, (e) => {
            let t = ru(e);
            null !== t && z.default.track(ed.rMx.VOICE_QUEUE_METRICS, t);
        }),
        eG.setOnVideoContainerResized((e, t, n) => {
            y.Z.wait(() =>
                y.Z.dispatch({
                    type: 'VIDEO_SIZE_UPDATE',
                    streamId: e,
                    width: t,
                    height: n
                })
            );
        }),
        tU.reset(),
        (0, el.q)().then((e) => {
            null != e && (tm = e.gpu_brand);
        });
}
function tL() {
    return (0, X.isWindows)() && p().satisfies(null === O.Z || void 0 === O.Z ? void 0 : O.Z.os.release, ef.c5);
}
function tx() {
    return (0, X.isWindows)() && p().satisfies(null === O.Z || void 0 === O.Z ? void 0 : O.Z.os.release, ef.sN);
}
function tk() {
    return (0, X.isMac)() && eG.supports(em.AN.SCREEN_CAPTURE_KIT) && p().satisfies(null === O.Z || void 0 === O.Z ? void 0 : O.Z.os.release, ef.C7);
}
function tM() {
    return (0, X.isWindows)() && eG.supports(em.AN.AUTOMATIC_AUDIO_SUBSYSTEM) && eG.supports(em.AN.AUDIO_SUBSYSTEM_DEFERRED_SWITCH);
}
function tj() {
    return eG.supports(em.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
let tU = new (class {
    start() {
        this.started || ((this.started = !0), eG.on(g.aB.Silence, this.handleSilence));
    }
    stop() {
        this.started &&
            ((this.started = !1),
            null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
            eG.removeListener(g.aB.Silence, this.handleSilence),
            y.Z.dispatch({
                type: 'AUDIO_INPUT_DETECTED',
                inputDetected: null
            }));
    }
    update() {
        let e = tI();
        !e7 && es.Z.getState() === ed.hes.RTC_CONNECTED && e.mode === ed.pM4.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop();
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
                                    (y.Z.dispatch({
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
function tG() {
    var e;
    let t = E.K.get('audio');
    null != t && (E.K.set(eI, { [em.Yn.DEFAULT]: t }), E.K.remove('audio')),
        (eB = null != (e = E.K.get(eI)) ? e : {}),
        f().each(eB, (e) => {
            if ((f().defaultsDeep(e, ej()), null != e.modeOptions && 'string' == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, et.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && e.vadUseKrispSettingVersion !== eS && ((e.vadUseKrispSettingVersion = eS), (e.modeOptions.vadUseKrisp = !0)), e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)), !e.vadThrehsoldMigrated)) {
                var t;
                (e.vadThrehsoldMigrated = !0), (null == (t = e.modeOptions) ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = eD);
            }
            (0, X.isWeb)() ? e.ncUseKrispjsSettingVersion !== eA && ((e.ncUseKrispjsSettingVersion = eA), (e.noiseSuppression = !1), (e.noiseCancellation = !0)) : e.ncUseKrispSettingVersion !== eT && ((e.ncUseKrispSettingVersion = eT), (e.noiseSuppression = !1), (e.noiseCancellation = !0)), e.hardwareEnabledVersion !== eN && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = eN)), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
        }),
        tV();
}
function tB(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.Yn.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = tv(t);
    return Object.assign(r, e), !__OVERLAY__ && n && E.K.set(eI, eB), r;
}
function tF() {
    E.K.remove(eI), location.reload();
}
function tV() {
    var e, t, n;
    let r = tI();
    eG.setAudioInputDevice(r.inputDeviceId), eG.setAudioOutputDevice(r.outputDeviceId), tC(), eG.setInputVolume(r.inputVolume), eG.setOutputVolume(r.outputVolume), eG.setH264Enabled(null == (e = r.hardwareEncoding) || e || r.openH264), eG.setAv1Enabled(null == (t = r.hardwareEncoding) || t), eG.setH265Enabled(null == (n = r.hardwareEncoding) || n), eG.setAecDump(r.aecDumpEnabled), eG.setSidechainCompression(r.sidechainCompression), eG.setSidechainCompressionStrength(r.sidechainCompressionStrength), eG.setAudioInputBypassSystemProcessing(r.bypassSystemInputProcessing);
}
function tZ() {
    eV ||
        eG.enable().then(() =>
            y.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
                enabled: !0,
                unmute: !1
            })
        );
}
function tH(e) {
    return {
        id: em.w5,
        index: 0,
        name: e,
        disabled: !0,
        hardwareId: void 0,
        containerId: void 0
    };
}
function tY(e, t) {
    if (0 === e.length) {
        let e = tH(t);
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
function tW(e, t) {
    var n;
    let r = null != (n = e[t]) ? n : f()(e).values().first();
    return null != r ? r.id : t;
}
function tK(e) {
    let t = eW;
    if (((eW = tY(e, eg.intl.string(eg.t['/QIjDA']))), !f().isEqual(eW, t))) {
        let e = tI(),
            t = tW(eW, e.inputDeviceId);
        eG.setAudioInputDevice(t);
    }
}
function tz(e) {
    let t = eK;
    if (((eK = tY(e, eg.intl.string(eg.t.xlUg0t))), !f().isEqual(eK, t))) {
        let e = tI(),
            t = tW(eK, e.outputDeviceId);
        eG.setAudioOutputDevice(t);
    }
}
function tq(e) {
    e6 = e.length > 0;
    let t = ez;
    if (((ez = tY(e, eg.intl.string(eg.t.WKWARU))), e$ && !f().isEqual(ez, t))) {
        var n;
        let e = void 0 !== ez[e0],
            r = e0 === em.w5 && (null == (n = t[em.w5]) ? void 0 : n.disabled);
        tC(e || r);
    }
}
function tQ() {
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
        let i = e === ep.u0.USER ? em.Yn.DEFAULT : em.Yn.STREAM,
            o = i === em.Yn.STREAM ? em.Yh : em.Qx,
            a = null != (t = r[e]) ? t : {},
            { localMutes: s, localVolumes: l } = tI(i);
        for (let [e, t] of Object.entries(a))
            null == (0, H.Ky)(i, e) &&
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
        tB(
            {
                localMutes: s,
                localVolumes: l
            },
            i
        );
    }
}
function tX(e) {
    if (null == r)
        return (
            ev.info('Error: trying to get soundshare id before MediaEngineStore is instantiated.'),
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
function tJ(e, t) {
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
function t$(e) {
    (i = e.sessionId),
        (eq = !1),
        (eJ = !1),
        (0, X.isWeb)() ||
            (U.Z.subscribe({ location: 'handleConnectionOpen' }, (e) => {
                let t = tI();
                !e.sidechainAvailable && t.sidechainCompression ? (tB({ sidechainCompressionSettingVersion: 0 }), nb(!1)) : e.sidechainAvailable && t.sidechainCompressionSettingVersion < eC && (tB({ sidechainCompressionSettingVersion: eC }), nb(e.sidechainEnabled));
            }),
            nO());
    let t = tI();
    tM() && (tj() ? nq(em.iA.AUTOMATIC) : t.automaticAudioSubsystem && nQ()),
        (0, K.wt)({
            location: 'MediaEngineStore',
            autoTrackExposure: !1
        }) &&
            null !== t.mostRecentlyRequestedVoiceFilter &&
            (0, W.J_)(),
        tQ();
}
function t0(e) {
    let { mediaEngineState: t } = e;
    (eB = t.settingsByContext), (eW = t.inputDevices), (eK = t.outputDevices), (th = t.appSupported), (tn = t.krispModuleLoaded), (s = t.krispVersion), (eH = t.goLiveContext);
}
function t1() {
    i = null;
}
function t3(e) {
    switch (e.state) {
        case ed.hes.CONNECTING:
            tZ();
            break;
        case ed.hes.RTC_CONNECTING:
            (e7 = !1), (e9 = !1);
            break;
        case ed.hes.RTC_CONNECTED:
            tC();
            break;
        case ed.hes.DISCONNECTED:
            nt(), nn();
    }
    tU.update();
}
function t2(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => (i === t.sessionId ? ((eq = t.mute || t.suppress), (eJ = t.deaf), eG.eachConnection(tA), tC((null == t.guildId || null == t.channelId || null == ts || ts === t.channelId) && e$), (ts = t.channelId), !0) : (__OVERLAY__ || t.userId !== en.default.getId() || null != es.Z.getChannelId() || tC(!1, null), e)), !1);
}
function t4(e) {
    let { mute: t } = e;
    (eQ = t), eG.eachConnection(tA);
}
function t5(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = tI(t);
    if (t === em.Yn.DEFAULT && (Z.Z.requestPermission(e_.Eu.AUDIO), eX)) return !1;
    (r = !i && !r) || (i = !1),
        n || (e1 = !0),
        tB(
            {
                mute: r,
                deaf: i
            },
            t
        ),
        eG.eachConnection(tA);
}
function t6(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    tB({ mute: n }, t), r || (e1 = !0), eG.eachConnection(tA);
}
function t8(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r
    } = e;
    if (t !== ep.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    tQ(!0);
}
function t7(e) {
    let { context: t } = e;
    tB({ deaf: !tI(t).deaf }, t), eG.eachConnection(tA);
}
function t9(e) {
    let { context: t, userId: n } = e;
    if (n === en.default.getId()) return;
    let { localMutes: r } = tI(t);
    r[n] ? delete r[n] : (r[n] = !0), tB({ localMutes: r }, t), eG.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function ne(e) {
    var t, n, r, i, o, a, s;
    let { context: l, userId: c, videoToggleState: d, persist: f, isAutomatic: _ } = e;
    u()(!(f && _), 'These are not allowed to both be true.');
    let p = d === ed.ZUi.DISABLED,
        { disabledLocalVideos: h } = tI(l),
        m = null != (t = h[c]) && t,
        g = tf.has(c),
        E = d === ed.ZUi.AUTO_ENABLED || d === ed.ZUi.MANUAL_ENABLED;
    ev.info('disableVideo='.concat(p, ' currentlyDisabled=').concat(m, ' currentlyAutoDisabled=').concat(g, ', isVideoShown=').concat(E)), u()(!(g && !m), 'If you are auto-disabled, then you are also disabled.');
    let b = p !== m,
        y = l === em.Yn.DEFAULT,
        O = _ && b && y,
        v = f && b && y;
    ev.info('changed='.concat(b, ' isDefaultContext=').concat(y, ' isUpdateCausedByVideoHealthManager=').concat(O, ' isManualToggleByUser=').concat(v));
    let { videoToggleStateMap: I } = tI(l);
    if ((I[c] === ed.ZUi.AUTO_PROBING && d === ed.ZUi.AUTO_ENABLED && (0, V.Z)(c, p ? em.fC.AUTO_DISABLE : em.fC.AUTO_ENABLE, E), (I[c] = d), tB({ videoToggleStateMap: I }, l, f), d === ed.ZUi.AUTO_PROBING ? null == (n = es.Z.getRTCConnection()) || n.pauseStatsCollectionForUser(c, !0) : null == (r = es.Z.getRTCConnection()) || r.pauseStatsCollectionForUser(c, !1), t_ || (ev.info('isAutoDisableAllowed='.concat(t_, ' - disabling VideoHealthManager')), null == (o = es.Z.getRTCConnection()) || null == (i = o.getVideoHealthManager()) || i.disable()), O)) {
        if ((!p && !g) || (p && !t_)) return;
        (0, V.Z)(c, p ? em.fC.AUTO_DISABLE : em.fC.AUTO_ENABLE, E), p ? tf.add(c) : tf.delete(c);
    } else v && (g && !p ? (ev.info('disallowing auto-disable for this session because of manual override by user'), (t_ = !1), null == (s = es.Z.getRTCConnection()) || null == (a = s.getVideoHealthManager()) || a.disable(), (0, V.Z)(c, em.fC.MANUAL_REENABLE, E)) : (0, V.Z)(c, p ? em.fC.MANUAL_DISABLE : em.fC.MANUAL_ENABLE, E));
    y && !p && tf.delete(c),
        p ? (h[c] = !0) : delete h[c],
        tB({ disabledLocalVideos: h }, l, f),
        eG.eachConnection((e) => {
            var t;
            return e.setLocalVideoDisabled(c, null != (t = h[c]) && t);
        }, l);
}
function nt() {
    if (0 === tf.size) return;
    let e = em.Yn.DEFAULT,
        { disabledLocalVideos: t } = tI(e);
    tf.forEach((n) => {
        u()(t[n], 'If you are auto-disabled, then you are also disabled.'), delete t[n], eG.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tf.clear(),
        tB({ disabledLocalVideos: t }, e, !1);
}
function nn() {
    let e = em.Yn.DEFAULT,
        { videoToggleStateMap: t } = tI(e);
    for (let [e, n] of Object.entries(t)) n === ed.ZUi.AUTO_PROBING && delete t[e];
    tB({ videoToggleStateMap: t }, e, !1);
}
function nr(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === en.default.getId()) return;
    let i = t === em.Yn.STREAM ? em.Yh : em.Qx,
        { localVolumes: o } = tI(t);
    r === i ? delete o[n] : (o[n] = r), tB({ localVolumes: o }, t), eG.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function ni(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: o } = tI(t);
    (o[n] = {
        left: r,
        right: i
    }),
        tB({ localPans: o }, t),
        eG.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function no(e) {
    let { context: t, mode: n, options: r } = e;
    tB(
        {
            mode: n,
            modeOptions: r
        },
        t
    ),
        eG.eachConnection(tS),
        tU.update();
}
function na(e) {
    let { volume: t } = e;
    tB({ inputVolume: tT(t) }), eG.setInputVolume(t);
}
function ns(e) {
    let { volume: t } = e;
    tB({ outputVolume: t }), eG.setOutputVolume(t);
}
function nl(e) {
    let { id: t } = e;
    (t = tW(eW, t)), (eY = performance.now()), tB({ inputDeviceId: t }), eG.setAudioInputDevice(t);
}
function nc(e) {
    let { id: t } = e;
    tB({ outputDeviceId: (t = tW(eK, t)) }), eG.setAudioOutputDevice(t);
}
function nu(e) {
    let { id: t } = e;
    tB({ videoDeviceId: (t = tW(ez, t)) }), tC();
}
function nd(e) {
    let { inputProfile: t } = e,
        n = tB({ activeInputProfile: t });
    eG.eachConnection((e) => {
        tS(e), e.setAutomaticGainControl(n.automaticGainControl), e.setEchoCancellation(n.echoCancellation), e.setExperimentalEncoders(n.experimentalEncoders), e.setNoiseCancellation(n.noiseCancellation), e.setNoiseSuppression(n.noiseSuppression);
    }),
        eG.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        tU.update(),
        nv();
}
function nf(e) {
    return eZ !== e.required && ((eZ = e.required), e.required || eG.interact(), !0);
}
function n_(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    tK(t), tz(n), tq(r);
}
function np(e) {
    let { inputVolume: t, outputVolume: n } = e;
    tB({
        inputVolume: tT(t),
        outputVolume: n
    });
}
function nh(e) {
    var t;
    let n = tI(),
        r = eG.getAudioSubsystem(),
        i = eG.getAudioLayer(),
        o = tW(eW, n.inputDeviceId),
        a = null == (t = eW[o]) ? void 0 : t.name;
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
function nm(e) {
    let t = tB({ echoCancellation: e.enabled });
    eG.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nv(), nh(e.location);
}
function ng(e) {
    nb(e.enabled);
}
function nE(e) {
    let t = tB({ sidechainCompressionStrength: e.strength });
    eG.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function nb(e) {
    let t = tB({ sidechainCompression: e });
    eG.setSidechainCompression(t.sidechainCompression);
}
function ny(e) {
    let { enabled: t, loopbackReason: n } = e,
        r = tp.size > 0;
    return t ? tp.add(n) : tp.delete(n), nO(), tp.size > 0 !== r && nv();
}
function nO() {
    let { voiceFiltersPreProcessMute: e } = B.Z.getCurrentConfig({ location: 'setMaybePreprocessMute' }, { autoTrackExposure: !0 }),
        t = e && !tp.has('voice_filter_preview') && !tp.has('mic_test');
    eG.setMaybePreprocessMute(t);
}
function nv() {
    let e = tI(),
        t = tp.size > 0,
        n = e.inputDeviceId,
        r = ei.Z.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        o = ei.Z.hasNoiseSuppression(n) || e.noiseSuppression,
        a = ei.Z.hasAutomaticGainControl(n) || e.automaticGainControl,
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
function nI(e) {
    let t = tB({ noiseSuppression: e.enabled });
    eG.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nv(), nh(e.location);
}
function nS(e) {
    let t = tB({ automaticGainControl: e.enabled });
    eG.eachConnection((e) => e.setAutomaticGainControl(t.automaticGainControl)), nv(), nh(e.location);
}
function nT(e) {
    let t = tB({ noiseCancellation: e.enabled });
    eG.eachConnection((e) => e.setNoiseCancellation(t.noiseCancellation)), nv(), nh(e.location);
}
function nA(e) {
    let t = tB({ experimentalEncoders: e.enabled });
    eG.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
}
function nN(e) {
    var t, n;
    let { enabled: r } = e,
        i = tB({ hardwareEncoding: r });
    eG.eachConnection((e) => {
        var t;
        return e.setHardwareH264(null == (t = i.hardwareEncoding) || t);
    }),
        eG.setH264Enabled(i.hardwareEncoding || i.openH264),
        eG.setAv1Enabled(null == (t = i.hardwareEncoding) || t),
        eG.setH265Enabled(null == (n = i.hardwareEncoding) || n);
}
function nC(e) {
    tB({ silenceWarning: e.enabled }), tU.update();
}
function nP(e) {
    eG.setDebugLogging(e.enabled);
}
function nR(e) {
    tB({ videoHook: e.enabled });
}
function nw(e) {
    tB({ experimentalSoundshare2: e.enabled });
}
function nD(e) {
    let { enabled: t } = e;
    tB({ useSystemScreensharePicker: t });
}
function nL(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = tB({
            attenuation: t,
            attenuateWhileSpeakingSelf: n,
            attenuateWhileSpeakingOthers: r
        });
    eG.eachConnection((e) => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers));
}
function nx(e) {
    let { enabled: t } = e;
    tB({ qos: t }), eG.eachConnection((e) => e.setQoS(t));
}
function nk() {
    tF();
}
function nM(e) {
    let { inputDetected: t } = e;
    (e8 = t), !e7 && e8 && ((e7 = !0), tU.update());
}
function nj(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === eX) return !1;
    (eX = n), eG.eachConnection(tA);
}
function nU(e) {
    let { state: t, permissionType: n } = e,
        r = t === e_.PQ.ACCEPTED;
    switch (n) {
        case e_.Eu.AUDIO:
            (tu = !0), eG.eachConnection(tA);
            break;
        case e_.Eu.CAMERA:
            !r && e$ && tC(!1);
            break;
        default:
            return !1;
    }
}
function nG() {
    return tn || !1;
}
async function nB() {
    try {
        var e;
        await ee.ZP.ensureModule('discord_krisp');
        let t = ee.ZP.requireModule('discord_krisp');
        (tn = !0), (s = null == (e = t.getSdkVersion) ? void 0 : e.call(t)), r.emitChange();
    } catch (t) {
        ev.warn('Failed to load Krisp module: '.concat(t.message)), $.Z.captureException(t);
        let e = em.H3.INITIALIZED;
        if (t.message.includes(': ')) {
            let n = parseInt(t.message.substring(t.message.indexOf(': ') + 1));
            e = isNaN(n) || 0 === n ? em.H3.INITIALIZED : n;
        }
        z.default.track(ed.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), tB({ noiseCancellation: !1 });
    } finally {
        tt = !1;
    }
}
function nF() {
    return (0, X.isWindows)() || (0, X.isLinux)() || ((0, X.isMac)() && p().satisfies(null === O.Z || void 0 === O.Z ? void 0 : O.Z.os.release, ex));
}
function nV() {
    !nF() || __OVERLAY__ || tt || tn ? ((0, X.isWeb)() && eG.supports(em.AN.NOISE_CANCELLATION) ? ((tn = !0), r.emitChange()) : (0, X.isWeb)() && tB({ noiseCancellation: !1 })) : ((tt = !0), nB());
}
function nZ(e) {
    let { enabled: t } = e;
    z.default.track(ed.rMx.VOICE_FILTER_PLAYBACK_TOGGLED, {
        active_voice_filter_id: null != tr ? tr : null,
        enabled: t
    }),
        tB({ voiceFilterPlaybackEnabled: t });
}
function nH(e) {
    let { newVoiceFilterId: t } = e;
    tB({ mostRecentlyRequestedVoiceFilter: t }), eG.eachConnection((e) => e.setVoiceFilterId(t));
}
function nY() {
    tB({ mostRecentlyRequestedVoiceFilter: null });
}
function nW(e) {
    let { voiceFilterId: t } = e;
    (to = tr), (ta = ti), (tr = t), (ti = null === t ? null : Date.now());
}
function nK(e) {
    let t = e.bypassEnabled;
    tB({ bypassSystemInputProcessing: t }), eG.setAudioInputBypassSystemProcessing(t), nh(e.location);
}
function nz(e) {
    nq(e.subsystem);
}
function nq(e) {
    e === em.iA.AUTOMATIC ? (tB({ automaticAudioSubsystem: !0 }), nQ()) : (tB({ automaticAudioSubsystem: !1 }), eG.setAudioSubsystem(e));
}
function nQ() {
    eG.queueAudioSubsystem(em.iA.EXPERIMENTAL);
}
function nX(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && tC(i, null), null != t || null == n)) {
        te = !1;
        return;
    }
    if (te) return;
    te = !0;
    let o = tI();
    (o.mute || o.deaf) &&
        (tB({
            deaf: !1,
            mute: !1
        }),
        eG.eachConnection(tA));
}
function nJ(e) {
    let { application: t } = e;
    eF.add(t.id);
}
function n$(e) {
    let { application: t } = e;
    eF.delete(t.id);
}
function n0(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case 'audio':
                (eV = !1), eG.eachConnection(tA);
                break;
            case 'video':
                tC(!1);
        }
}
function n1(e) {
    (eV = e.enabled),
        e.unmute &&
            tB({
                mute: !1,
                deaf: !1
            }),
        eG.eachConnection(tA);
}
function n3(e) {
    let { enabled: t } = e;
    Z.Z.requestPermission(e_.Eu.CAMERA), tC(t);
}
function n2(e) {
    let { sourceId: t, applicationName: n, quality: i } = e,
        o = S.Z.isDecoupledGameClippingEnabled(),
        s = S.Z.getSettings().decoupledClipsEnabled;
    if (!o || !s || null == O.Z) return;
    let l = null,
        c = null,
        u = q.Z.getPidFromDesktopSource(t);
    ({ soundshareId: l, soundshareSession: c } = tX(u));
    let d = {
        desktopSource: {
            id: t,
            sourcePid: u,
            soundshareId: l,
            soundshareSession: c
        },
        quality: i
    };
    null != a && a.desktopSource.id !== d.desktopSource.id && (eG.setClipsSource(null), (0, X.isWindows)() && null != a.desktopSource.soundshareId && v.pn(a.desktopSource.soundshareId)), null != l && tJ(l, c), (a = d);
    let f = tO(),
        _ = tI().videoHook;
    eG.setClipsSource({
        desktopDescription: {
            id: a.desktopSource.id,
            soundshareId: a.desktopSource.soundshareId,
            useVideoHook: _,
            useGraphicsCapture: tL(),
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: tk(),
            videoHookStaleFrameTimeoutMs: eR,
            graphicsCaptureStaleFrameTimeoutMs: ew,
            hdrCaptureMode: f
        },
        quality: i,
        applicationName: n
    });
}
function n4(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((a = null), eG.setClipsSource(null));
}
function n5(e) {
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
            c = !1 === a ? null : q.Z.getPidFromDesktopSource(i);
        X.isPlatformEmbedded && !0 === a && (({ soundshareId: e, soundshareSession: r } = tX(c)), null != e && tJ(e, r)),
            tN(s),
            tC(s === em.Yn.STREAM && e$, {
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
        tC(a, {
            cameraSource: {
                videoDeviceGuid: t,
                audioDeviceGuid: n
            },
            quality: {
                resolution: s.resolution,
                frameRate: s.frameRate
            }
        });
    } else tC(e$, null);
}
function n6(e) {
    let { section: t } = e;
    return t === ed.oAB.VOICE && tZ(), !1;
}
function n8() {
    return eG.eachConnection(tw), !1;
}
function n7(e) {
    let { enabled: t } = e,
        n = tB({ openH264: t });
    eG.setH264Enabled(n.hardwareEncoding || n.openH264),
        eG.eachConnection((e) => {
            var t;
            return e.setSoftwareH264(null == (t = n.openH264) || t);
        });
}
function n9(e) {
    let { enabled: t } = e,
        n = tB({ aecDumpEnabled: t });
    eG.setAecDump(n.aecDumpEnabled);
}
function re(e) {
    let { state: t } = e,
        n = R.Z.isEnabled();
    if (t === ed.$7l.BACKGROUND && e$ && !n) (e5 = !0), tC(!1);
    else {
        if (t !== ed.$7l.ACTIVE || !e5) return !1;
        (e5 = !1), tC(!0);
    }
    return !0;
}
function rt(e) {
    eG.eachConnection((t) => t.setBitRate(e.bitrate));
}
function rn() {
    if ((!e$ && null == o) || null != es.Z.getRTCConnectionId()) return !1;
    tC(!1, null);
}
function rr() {
    return !!tl && ((tl = !1), !0);
}
function ri(e) {
    eG.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function ro(e) {
    let { settings: t } = e;
    eG.applyMediaFilterSettings(t).finally(() => {
        (tc = !1), r.emitChange();
    });
}
function ra() {
    tc = !0;
}
function rs() {
    tc = !1;
}
function rl(e) {
    tg = e.enabled;
}
class rc extends (l = m.ZP.Store) {
    initialize() {
        tD(),
            tG(),
            nV(),
            nn(),
            (th = {
                [em.AN.VIDEO]: eG.supports(em.AN.VIDEO),
                [em.AN.DESKTOP_CAPTURE]: eG.supports(em.AN.DESKTOP_CAPTURE),
                [em.AN.HYBRID_VIDEO]: eG.supports(em.AN.HYBRID_VIDEO)
            }),
            this.waitFor(en.default, ei.Z, eo.Z, ea.Z, es.Z, w.ZP, Z.Z.storage, Y.Z, P.Z, S.Z);
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
        return nG();
    }
    isNoiseCancellationError() {
        return tl;
    }
    isAutomaticGainControlSupported() {
        return eG.supports(em.AN.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !tj() && (eG.supports(em.AN.LEGACY_AUDIO_SUBSYSTEM) || eG.supports(em.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return eG.supports(em.AN.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && 'experimental' === eG.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return nG();
    }
    isAecDumpSupported() {
        return eG.supports(em.AN.AEC_DUMP);
    }
    isSimulcastSupported() {
        return eG.supports(em.AN.VIDEO) && eG.supports(em.AN.SIMULCAST);
    }
    goLiveSimulcastEnabled() {
        var e;
        let t = (null == (e = eo.Z.getChannel(ts)) ? void 0 : e.type) === ed.d4z.GUILD_STAGE_VOICE,
            n = r.getHardwareEncoding();
        return !t && n && M.Z.simulcastEnabled();
    }
    getAecDump() {
        return tI().aecDumpEnabled;
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
        return !this.isEnabled() || tI(e).mute || !Z.Z.didHavePermission(e_.Eu.AUDIO) || this.isSelfDeaf(e) || (e === em.Yn.DEFAULT && eX);
    }
    shouldSkipMuteUnmuteSound() {
        return e1;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        e1 = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.Yn.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && ei.Z.isHardwareMute(this.getInputDeviceId());
    }
    isEnableHardwareMuteNotice() {
        return tg;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.Yn.DEFAULT;
        return !this.isSupported() || tI(e).deaf;
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
        return e !== en.default.getId() && (tI(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return eG.supports(em.AN.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.Yn.DEFAULT;
        return null != (t = tI(n).disabledLocalVideos[e]) && t;
    }
    getVideoToggleState(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.Yn.DEFAULT;
        return null != (t = tI(n).videoToggleStateMap[e]) ? t : ed.ZUi.NONE;
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
        return eY;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.Yn.DEFAULT,
            n = tI(t).localPans[e];
        return null != n ? n : eP;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : em.Yn.DEFAULT,
            n = t === em.Yn.STREAM ? em.Yh : em.Qx,
            r = tI(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return tI().inputVolume;
    }
    getOutputVolume() {
        return tI().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.Yn.DEFAULT;
        return tI(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.Yn.DEFAULT;
        return tI(e).modeOptions;
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
        return tI().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return tI().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            f().each(eB, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i }
                } = t;
                r === ed.pM4.PUSH_TO_TALK && eF.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return tW(eW, tI().inputDeviceId);
    }
    getOutputDeviceId() {
        return tW(eK, tI().outputDeviceId);
    }
    getVideoDeviceId() {
        return tW(ez, tI().videoDeviceId);
    }
    getInputDevices() {
        return eW;
    }
    getOutputDevices() {
        return eK;
    }
    getVideoDevices() {
        return ez;
    }
    getEchoCancellation() {
        let e = tI();
        return ei.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return tI().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return tI().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return tI().h265Enabled;
    }
    getLoopback() {
        return tp.size > 0;
    }
    getLoopbackReasons() {
        return tp;
    }
    getNoiseSuppression() {
        let e = tI();
        return ei.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tI();
        return ei.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return tI().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return tI().noiseCancellation;
    }
    getExperimentalEncoders() {
        return tI().experimentalEncoders;
    }
    getHardwareEncoding() {
        var e;
        return null == (e = tI().hardwareEncoding) || e;
    }
    getEnableSilenceWarning() {
        return tI().silenceWarning;
    }
    getDebugLogging() {
        return eG.getDebugLogging();
    }
    getQoS() {
        return tI().qos;
    }
    getAttenuation() {
        return tI().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return tI().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return tI().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return tM() && tI().automaticAudioSubsystem ? em.iA.AUTOMATIC : eG.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return eG.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return tI().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eh._.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : em.Yn.DEFAULT;
        return tI(e);
    }
    getState() {
        return {
            settingsByContext: eB,
            inputDevices: eW,
            outputDevices: eK,
            appSupported: th,
            krispModuleLoaded: tn,
            krispVersion: s,
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
        return X.isPlatformEmbedded || this.getMode() !== ed.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        eG.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return eZ;
    }
    getVideoHook() {
        return tI().videoHook;
    }
    supportsVideoHook() {
        return eG.supports(em.AN.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tI().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && (null == e || e);
    }
    supportsExperimentalSoundshare() {
        return eG.supports(em.AN.EXPERIMENTAL_SOUNDSHARE) && p().satisfies(null === O.Z || void 0 === O.Z ? void 0 : O.Z.os.release, ef.I9);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = tI().useSystemScreensharePicker,
            n = (0, X.isLinux)() || ((0, X.isMac)() && p().satisfies(null === O.Z || void 0 === O.Z ? void 0 : O.Z.os.release, ef.jR));
        return e && (null != t ? t : n);
    }
    supportsSystemScreensharePicker() {
        return eG.supports(em.AN.NATIVE_SCREENSHARE_PICKER);
    }
    getOpenH264() {
        return tI().openH264;
    }
    getEverSpeakingWhileMuted() {
        return e3;
    }
    getSpeakingWhileMuted() {
        return e2;
    }
    hasActiveCallKitCall() {
        return tE;
    }
    setHasActiveCallKitCall(e) {
        tE = e;
    }
    supportsScreenSoundshare() {
        return (0, X.isMac)() ? eG.supports(em.AN.SOUNDSHARE) && p().satisfies(null === O.Z || void 0 === O.Z ? void 0 : O.Z.os.release, ef.yG) && tk() : (0, X.isWindows)() ? eG.supports(em.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare() : !!(0, X.isLinux)() && eG.supports(em.AN.SCREEN_SOUNDSHARE);
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
            t = j.m.getCurrentConfig({ location: 'MediaEngineStore' });
        return 114 === e && (e = 1), t.canSupportDaveProtocol && e >= t.protocolVersionFloor ? e : 0;
    }
    hasClipsSource() {
        return null != a;
    }
    getGpuBrand() {
        return tm;
    }
}
function ru(e) {
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
eE(rc, 'displayName', 'MediaEngineStore');
let rd = (r = new rc(y.Z, {
    VOICE_CHANNEL_SELECT: nX,
    VOICE_STATE_UPDATES: t2,
    CONNECTION_OPEN: t$,
    CONNECTION_CLOSED: t1,
    RTC_CONNECTION_STATE: t3,
    AUDIO_SET_TEMPORARY_SELF_MUTE: t4,
    AUDIO_TOGGLE_SELF_MUTE: t5,
    AUDIO_SET_SELF_MUTE: t6,
    AUDIO_TOGGLE_SELF_DEAF: t7,
    AUDIO_TOGGLE_LOCAL_MUTE: t9,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: ne,
    AUDIO_SET_LOCAL_VOLUME: nr,
    AUDIO_SET_LOCAL_PAN: ni,
    AUDIO_SET_MODE: no,
    AUDIO_SET_INPUT_VOLUME: na,
    AUDIO_SET_OUTPUT_VOLUME: ns,
    AUDIO_SET_INPUT_DEVICE: nl,
    AUDIO_SET_OUTPUT_DEVICE: nc,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: nd,
    AUDIO_SET_ECHO_CANCELLATION: nm,
    AUDIO_SET_SIDECHAIN_COMPRESSION: ng,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: nE,
    AUDIO_SET_LOOPBACK: ny,
    AUDIO_SET_NOISE_SUPPRESSION: nI,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: nS,
    AUDIO_SET_NOISE_CANCELLATION: nT,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: nC,
    AUDIO_SET_DEBUG_LOGGING: nP,
    MEDIA_ENGINE_SET_VIDEO_HOOK: nR,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: nw,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: nD,
    AUDIO_SET_ATTENUATION: nL,
    AUDIO_SET_QOS: nx,
    MEDIA_ENGINE_DEVICES: n_,
    AUDIO_VOLUME_CHANGE: np,
    AUDIO_RESET: nk,
    AUDIO_INPUT_DETECTED: nM,
    AUDIO_SET_SUBSYSTEM: nz,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: nK,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: n1,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: n3,
    MEDIA_ENGINE_PERMISSION: n0,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: n5,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: nu,
    MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: nA,
    MEDIA_ENGINE_INTERACTION_REQUIRED: nf,
    USER_SETTINGS_MODAL_INIT: n6,
    USER_SETTINGS_MODAL_SET_SECTION: n6,
    CERTIFIED_DEVICES_SET: n8,
    RPC_APP_CONNECTED: nJ,
    RPC_APP_DISCONNECTED: n$,
    OVERLAY_INITIALIZE: t0,
    MEDIA_ENGINE_SET_OPEN_H264: n7,
    MEDIA_ENGINE_SET_HARDWARE_ENCODING: nN,
    APP_STATE_UPDATE: re,
    SET_CHANNEL_BITRATE: rt,
    SET_VAD_PERMISSION: nj,
    SET_NATIVE_PERMISSION: nU,
    SET_CHANNEL_VIDEO_QUALITY_MODE: ri,
    MEDIA_ENGINE_SET_AEC_DUMP: n9,
    CHANNEL_DELETE: rn,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rr,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: ro,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: ra,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: rs,
    USER_SETTINGS_PROTO_UPDATE: t8,
    CLIPS_INIT: n2,
    CLIPS_SETTINGS_UPDATE: n4,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: rl,
    VOICE_FILTER_REQUEST_SWITCH: nH,
    VOICE_FILTER_LOOPBACK_TOGGLE: nZ,
    VOICE_FILTER_APPLIED: nW,
    VOICE_FILTER_DOWNLOAD_FAILED: nY,
    VOICE_FILTER_APPLY_FAILED: nY
}));
