"use strict";
let r, i, s, a, o, l, u, c, d, _, f;
n.d(t, { Ay: () => r8 }), n(323874), n(14289), n(35956), n(321073), n(790599);
var p = n(284009),
    h = n.n(p),
    m = n(735438),
    E = n.n(m),
    g = n(481613),
    A = n.n(g),
    I = n(299855),
    T = n.n(I),
    S = n(311907),
    y = n(205693),
    v = n(506774),
    N = n(451988),
    C = n(73153),
    R = n(77729),
    O = n(719129),
    b = n(894539),
    D = n(124838),
    L = n(274372),
    w = n(915618),
    M = n(572164),
    x = n(626584),
    P = n(211597),
    k = n(487329),
    U = n(49463),
    G = n(784113),
    F = n(15285),
    V = n(540305),
    B = n(17300),
    H = n(544746),
    j = n(820344),
    Y = n(638188),
    W = n(269377),
    K = n(934341),
    $ = n(658046),
    z = n(621963),
    q = n(227493),
    Z = n(264866),
    X = n(927170),
    Q = n(233232),
    J = n(140175);
n(491642);
var ee = n(801644),
    et = n(223572),
    en = n(993628),
    er = n(886124),
    ei = n(165479),
    es = n(896014),
    ea = n(765396),
    eo = n(75076),
    el = n(674966),
    eu = n(559633),
    ec = n(3527),
    ed = n(879172),
    e_ = n(617617),
    ef = n(340913),
    ep = n(996744),
    eh = n(28075),
    em = n(954571),
    eE = n(353835),
    eg = n(927813),
    eA = n(723702),
    eI = n(728458),
    eT = n(837921),
    eS = n(350535),
    ey = n(961350),
    ev = n(131319),
    eN = n(347481),
    eC = n(734057),
    eR = n(383501),
    eO = n(851581),
    eb = n(287809),
    eD = n(117549),
    eL = n(652215),
    ew = n(502075),
    eM = n(765682),
    ex = n(355097),
    eP = n(509381),
    ek = n(731854),
    eU = n(985018);
let eG = new x.A("MediaEngineStore"),
    eF = "MediaEngineStore",
    eV = 4,
    eB = 1,
    eH = 1,
    ej = 1,
    eY = 0.5,
    eW = { left: 1, right: 1 },
    eK = 500,
    e$ = 5 * eg.A.Millis.SECOND,
    ez = -60,
    eq = 100,
    eZ = 2 * eg.A.Millis.SECOND,
    eX = 30 * eg.A.Millis.SECOND,
    eQ = +eg.A.Millis.MINUTE,
    eJ = !0,
    e0 = "deep_noise_suppression",
    e1 = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2",
    e2 = "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f",
    e3 = 0,
    e6 = null;
function e4() {
    if (!(0, eA.isIOS)() || null == e6) return !1;
    let e = e6();
    if (null == e || !e.startsWith("ARM64_")) return !1;
    let t = e.substring(6);
    return ("T" === t[0] || "S" === t[0]) && parseInt(t.substring(1), 10) >= 8122;
}
let e5 = null;
async function e7() {
    if (!(0, eA.isMac)() || R.A?.os.arch !== "arm64" || R.A?.processUtils?.getSystemInfo == null) {
        e5 = !1;
        return;
    }
    let e = await R.A.processUtils.getSystemInfo(),
        t = e.cpus?.[0]?.model ?? "";
    eG.info("Detected Mac CPU", t);
    let n = t.match(/Apple M(\d+)/);
    if (null == n) {
        e5 = !0;
        return;
    }
    e5 = parseInt(n[1], 10) >= 3;
}
function e8() {
    return !0 === e5;
}
function e9() {
    return {
        mode: eL.TBI.VOICE_ACTIVITY,
        modeOptions: {
            threshold: ez,
            autoThreshold: eA.isPlatformEmbedded || __OVERLAY__,
            vadUseKrisp: !0,
            vadKrispActivationThreshold: eY,
            vadLeading: 5,
            vadTrailing: 25,
            delay: 20,
            shortcut: [],
            updatedAt: void 0,
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
        hardwareEnabledVersion: 0,
        silenceWarning: !0,
        attenuation: 0,
        attenuateWhileSpeakingSelf: !1,
        attenuateWhileSpeakingOthers: !0,
        localMutes: {},
        disabledLocalVideos: {},
        videoToggleStateMap: {},
        localVolumes: {},
        localPans: {},
        inputVolume: ek.Hz,
        outputVolume: ek.Hz,
        inputDeviceId: ek.dx,
        outputDeviceId: ek.dx,
        videoDeviceId: ek.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: tt.supports(ek.O5.VIDEO_HOOK),
        experimentalSoundshare2: null,
        useSystemScreensharePicker: null,
        h265Enabled: !0,
        vadThrehsoldMigrated: !1,
        aecDumpEnabled: !1,
        openH264Enabled: !0,
        sidechainCompression: !0,
        sidechainCompressionSettingVersion: 1,
        sidechainCompressionStrength: 50,
        automaticAudioSubsystem: !0,
        activeInputProfile: null,
    };
}
let te = {
        [eP.m.CUSTOM]: {},
        [eP.m.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [eP.m.STUDIO]: {
            mode: eL.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    tt = (0, y.hB)((0, y.WI)());
eG.enableNativeLogger(!0);
let tn = {},
    tr = new Set([ek.x.DEFAULT]),
    ti = tt.supports(ek.O5.AUTO_ENABLE),
    ts = !1,
    ta = ek.x.STREAM,
    to = performance.now(),
    tl = null,
    tu = { [ek.dx]: nT("No Input Devices") },
    tc = { [ek.dx]: nT("No Output Devices") },
    td = { [ek.dx]: nT("No Video Devices") },
    t_ = new N.Ep(),
    tf = !1,
    tp = !1,
    th = !1,
    tm = !1,
    tE = !1,
    tg = ek.qe,
    tA = ek.qe,
    tI = !1,
    tT = !1,
    tS = new N.Ep(),
    ty = !1,
    tv = !1,
    tN = !1,
    tC = !1,
    tR = new N.Ep(),
    tO = !1,
    tb = !1,
    tD = !1,
    tL = [],
    tw = !1,
    tM = null,
    tx = null,
    tP = null,
    tk = null,
    tU = null,
    tG = !1,
    tF = !1,
    tV = !1,
    tB = null,
    tH = null,
    tj = !1;
el.A.hasPermission(eM.iL.AUDIO, { showAuthorizationError: !1 }),
    el.A.hasPermission(eM.iL.CAMERA, { showAuthorizationError: !1 });
let tY = !1,
    tW = new Set(),
    tK = tY,
    t$ = new Set(),
    tz = {},
    tq = null,
    tZ = null,
    tX = !0,
    tQ = !1,
    tJ = new N.Ep(),
    t0 = !1,
    t1 = !1,
    t2 = !1,
    t3 = !1;
function t6(e) {
    return (0, z.p)({ location: e }).hdrCaptureMode;
}
async function t4() {
    if (
        "u" < typeof window ||
        "u" < typeof navigator ||
        !("mediaCapabilities" in navigator) ||
        null == navigator.mediaCapabilities
    )
        return !1;
    try {
        let e = await navigator.mediaCapabilities.decodingInfo({
            type: "file",
            video: {
                contentType: 'video/mp4; codecs="hev1.1.6.L153.B0"',
                width: 1920,
                height: 1080,
                bitrate: 2e6,
                framerate: 30,
            },
        });
        return e.supported && e.powerEfficient;
    } catch {
        return !1;
    }
}
function t5() {
    return null != tH ? tH : "u" > typeof window ? (tH = t4().then((e) => ((tB = e), e))) : Promise.resolve(!1);
}
function t7() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.x.DEFAULT,
        t = tn[e];
    return null == t && ((t = e9()), (tn[e] = t)), t;
}
function t8() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.x.DEFAULT,
        t = t7(e),
        n = te[t.activeInputProfile ?? eP.m.CUSTOM],
        r = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}) };
    if (
        (null == r.vadDuringPreProcess && (r.vadDuringPreProcess = (0, et.R)({ location: "getSettings" }).enabled),
        (null == r.vadKrispActivationThreshold && !0 === n.automaticGainControl) || !0 === t.automaticGainControl)
    ) {
        let e = (0, B.F)({ location: "getSettings" });
        null != e.vadKrispActivationThreshold && (r.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return { ...t, ...n, modeOptions: r };
}
function t9(e) {
    let t = t8(e.context),
        n = t.mode;
    e.context === ek.x.DEFAULT && (0, J.N)(!1, !1);
    let { showPTTSpeakingIndicator: r } = ef.A.getConfig({ location: "setInputMode" }),
        i = r && n === eL.TBI.PUSH_TO_TALK;
    e.setInputMode(n, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: !!i || t.modeOptions.autoThreshold,
        vadUseKrisp: (!!i || t.modeOptions.vadUseKrisp) && rS(),
        vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? eY,
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        vadDuringPreProcess: t.modeOptions.vadDuringPreProcess ?? !1,
        pttReleaseDelay: Math.round(t.modeOptions.delay),
    });
}
function ne(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ek.Hz;
    return E().clamp(e, 0, t);
}
function nt(e) {
    let t = t8(e.context),
        n = !ti || t.mute || t.deaf;
    e.context === ek.x.DEFAULT
        ? (n = n || tf || tp || th || !el.A.didHavePermission(eM.iL.AUDIO))
        : e.context === ek.x.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === ek.x.DEFAULT && b.A.updateNativeMute();
}
function nn(e) {
    e !== ta && (null != s && tt.setGoLiveSource(null, ta), (ta = e));
}
function nr() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tE,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
        n = s;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, eA.isWindows)() && O.c1(n.desktopSource.soundshareId),
            tt.setGoLiveSource(null, ta)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            tt.setGoLiveSource(null, ta),
        tE || e)
    ) {
        let t = t8().videoDeviceId;
        tE && t === ek.dx && tA === ek.dx && tg !== ek.qe ? (t = tg) : (tA = t),
            (tg = (tE = e) ? ny(td, t) : ek.qe),
            tt.setVideoInputDevice(tg);
    }
    if (((s = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = t6("MediaEngineStore go live"),
                i = t8().videoHook,
                s = nd(),
                a = s ? (n_() ? ew.zl : ew.eg) : 0,
                o = !1;
            (0, eA.isWindows)() &&
                a >= ew.zl &&
                (o =
                    !0 === tZ
                        ? ei.q.getConfig({ location: "updateVideo" }).enabled
                        : er.d.getConfig({ location: "updateVideo" }).enabled),
                tt.setGoLiveSource(
                    {
                        desktopDescription: {
                            id: t.desktopSource.id,
                            soundshareId: t.desktopSource.soundshareId,
                            useVideoHook: i,
                            useGraphicsCapture: s,
                            useGraphicsCaptureApiLevel: a,
                            useCaptureDeviceForEncode: (0, eA.isWindows)(),
                            useLoopback: r.getExperimentalSoundshare(),
                            useQuartzCapturer: !0,
                            allowScreenCaptureKit: nf(),
                            videoHookStaleFrameTimeoutMs: eK,
                            graphicsCaptureStaleFrameTimeoutMs: e$,
                            hdrCaptureMode: n,
                            enableGlobalFramePoolLock: (0, $.H)({ location: "updateVideo" }).enabled,
                            useGraphicsCaptureDirtyRegions: o,
                        },
                        quality: e,
                    },
                    ta,
                );
        }
        null != t.cameraSource &&
            tt.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: t.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: t.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                ta,
            );
    }
}
function ni(e) {
    switch (e) {
        case ek.CO.CPU_OVERUSE:
            return k.B6.NoiseCancellerCpuOveruse;
        case ek.CO.FAILED:
            return k.B6.NoiseCancellerFailed;
        case ek.CO.VAD_CPU_OVERUSE:
            return k.B6.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function ns() {
    null === tl &&
        tt
            .getCodecSurvey()
            .then((e) => {
                try {
                    let t = JSON.parse(e);
                    if (null == t || null == t.available_video_decoders) throw Error("decoder survey is not available");
                    tl = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                } catch (e) {
                    eG.error("Failed to parse codec survey", e), (tl = !1);
                }
            })
            .catch((e) => {
                eG.error("Failed to get codec survey", e), (tl = !1);
            })
            .finally(() => {
                C.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
            });
}
function na(e) {
    let t = (0, B.F)({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function no(e, t) {
    e.setAutomaticGainControl(na(t));
}
function nl(e, t) {
    let n = (0, ec.A)(t, r.getSystemMicrophoneMode());
    n !== t && eG.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: i } = (0, B.F)({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(i);
    let { noiseCancellationAfterProcessing: s, vadAfterWebrtc: a } = (0, X.$)({ location: "setNoiseCancellation" });
    e.setNoiseCancellationAfterProcessing(s), e.setVADAfterWebrtc(a);
}
function nu(e) {
    let t = t8(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eN.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eN.A.hasNoiseSuppression(n) || t.noiseSuppression),
        no(e, eN.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        nl(e, t.noiseCancellation),
        e.setVoiceFilterId(tM),
        (0, eA.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function nc() {
    t_.start(eX, () => {
        eG.error("Device enumeration timed out"), em.default.track(eL.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
    }),
        tt.on(y.bg.Connection, (e) => {
            t9(e), nt(e), nu(e);
            let t = t8();
            e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
                e.setQoS(t.qos),
                (0, eA.isWindows)()
                    ? (e.setExperimentFlag(ek.fd.H265_HARDWARE_ONLY, !0),
                      t5().then((t) => {
                          e.setExperimentFlag(ek.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                      }))
                    : (0, eA.isMac)() && e.setExperimentFlag(ek.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                (0, eA.isLinux)() && t.openH264Enabled && e.setExperimentFlag(ek.fd.USE_LIBOPENH264_DECODER, !0);
            let n = eR.A.getGuildId(),
                {
                    muteBeforeProcessing: i,
                    pttBeforeProcessing: a,
                    skipEncode: o,
                } = (null != n ? W.A : Y.A).getCurrentConfig(
                    { location: "setupMediaEngine", guildId: n ?? void 0 },
                    { autoTrackExposure: !0 },
                );
            i && e.setExperimentFlag(ek.fd.MUTE_BEFORE_PROCESSING, !0),
                a && e.setExperimentFlag(ek.fd.PTT_BEFORE_PROCESSING, !0),
                o && e.setExperimentFlag(ek.fd.SKIP_ENCODE, !0),
                (0, Q.J)({ location: "setupMediaEngine" }).enabled &&
                    e.setExperimentFlag(ek.fd.LOW_LATENCY_RATE_CONTROL, !0);
            let l = !1,
                u = !0;
            e.setExperimentFlag(ek.fd.RESET_DECODER_ON_ERRORS, !0),
                l && e.setExperimentFlag(ek.fd.SOFTWARE_FALLBACK_ON_ERRORS, !0),
                u && e.setExperimentFlag(ek.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
            let { swallowVolumeOnlySpeakingEvents: c } = D.A.getConfig({ location: "MediaEngineStore" });
            if ((c && e.setExperimentFlag(ek.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === ek.x.STREAM)) {
                let t = nN(tc);
                e.setSoundshareDiscardRearChannels(t);
            }
            if ((0, eA.isWindows)())
                e.setExperimentFlag(ek.fd.SIGNAL_AV1, !0), e.setExperimentFlag(ek.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            else if ((0, eA.isMac)())
                if ((e.setExperimentFlag(ek.fd.SIGNAL_AV1_DECODE, !0), e8())) {
                    let { enabled: t } = (0, j.t)("MediaEngineStore");
                    t
                        ? (eG.info("This Mac supports AV1 Hardware. AV1 Hardware enabled."),
                          e.setExperimentFlag(ek.fd.SIGNAL_AV1_HARDWARE_DECODE, !0))
                        : eG.info("This Mac supports AV1 Hardware. AV1 Hardware not yet enabled.");
                } else eG.info("This Mac does not support AV1 Hardware.");
            else if ((0, eA.isLinux)()) e.setExperimentFlag(ek.fd.SIGNAL_AV1_DECODE, !0);
            else if ((0, eA.isIOS)() && e4()) {
                let { enabled: t } = (0, H.$)("MediaEngineStore");
                t &&
                    (e.setExperimentFlag(ek.fd.SIGNAL_AV1_DECODE, !0),
                    e.setExperimentFlag(ek.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
            }
            if ((0, eA.isWeb)()) {
                let { enabled: t } = (0, K.O)("MediaEngineStore");
                e.setExperimentFlag(ek.fd.BROWSER_HEVC, t);
            }
            for (let n of ((0, eA.isWindows)() &&
                tq?.startsWith("AMD") &&
                (0, es.F)("MediaEngineStore").enabled &&
                e.setExperimentFlag(ek.fd.WMF_GPU_ENCODE, !0),
            (0, eA.isWindows)() &&
                tq?.startsWith("Intel") &&
                (0, ea.J)("MediaEngineStore").enabled &&
                e.setExperimentFlag(ek.fd.WMF_GPU_ENCODE, !0),
            (0, eA.isWindows)() &&
                tq?.startsWith("Qualcomm") &&
                (0, es.F)("MediaEngineStore").enabled &&
                e.setExperimentFlag(ek.fd.WMF_GPU_ENCODE, !0),
            tt.setHasFullbandPerformance((0, P.A)()),
            e.setRemoteAudioHistory(1e3),
            (0, w.A)(r) && e.setClipsKeyFrameInterval(ek.X1),
            (t = t8(e.context)),
            e.setPostponeDecodeLevel(eq),
            Object.keys(t.localMutes)))
                n !== ey.default.getId() && e.setLocalMute(n, t.localMutes[n]);
            for (let n of Object.keys(t.localVolumes))
                n !== ey.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
            for (let n of Object.keys(t.localPans)) {
                let r = t.localPans[n];
                e.setLocalPan(n, r.left, r.right);
            }
            for (let n of Object.keys(t.disabledLocalVideos)) e.setLocalVideoDisabled(n, t.disabledLocalVideos[n]);
            e.on(y.yq.Speaking, (t, n, r, i) => {
                C.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: i });
            }),
                e.context === ek.x.DEFAULT &&
                    ((tT = !1),
                    e.on(y.yq.SpeakingWhileMuted, () => {
                        let e = !tT;
                        (tT = !0),
                            e && r.emitChange(),
                            tS.start(eZ, () => {
                                (tT = !1), r.emitChange();
                            });
                    })),
                e.on(y.yq.DesktopSourceEnd, (t, n) => {
                    C.h.dispatch({
                        type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                        settings: { context: e.context },
                        endReason: t,
                        errorCode: n,
                    });
                }),
                e.on(y.yq.InteractionRequired, (e) => {
                    C.h.dispatch({ type: "MEDIA_ENGINE_INTERACTION_REQUIRED", required: e });
                }),
                e.on(y.yq.VideoHookInitialize, (e, t, n, r, i, a) => {
                    s?.desktopSource != null &&
                        em.default.track(eL.HAw.VIDEOHOOK_INITIALIZED, {
                            backend: e,
                            format: t,
                            framebuffer_format: n,
                            sample_count: r,
                            success: i,
                            reinitialization: a,
                            ...(0, V.A)(s?.desktopSource),
                        });
                }),
                e.on(y.yq.NoiseCancellationError, (e) => {
                    eG.warn(`noisecancellererror event: ${e}`),
                        (0, k.QW)({ type: k.iy.NOISE_CANCELLER_ERROR, underlyingError: ni(e) }),
                        (tG = !0),
                        em.default.track(eL.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        C.h.dispatch({ type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: !0 }),
                        C.h.dispatch({ type: "AUDIO_SET_NOISE_CANCELLATION", enabled: !1 }),
                        C.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e });
                }),
                e.on(y.yq.VoiceActivityDetectorError, (e) => {
                    eG.warn(`voiceactivitydetectorerror event: ${e}`),
                        (0, k.QW)({ type: k.iy.NOISE_CANCELLER_ERROR, underlyingError: ni(e) }),
                        em.default.track(eL.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        C.h.dispatch({
                            type: "AUDIO_SET_MODE",
                            context: ek.x.DEFAULT,
                            mode: eL.TBI.VOICE_ACTIVITY,
                            options: { ...t8(ek.x.DEFAULT).modeOptions, vadUseKrisp: !1 },
                        }),
                        C.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e });
                }),
                e.on(y.yq.SdpError, (e, t, n, r) => {
                    em.default.track(eL.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: r });
                }),
                e.on(y.yq.VideoState, (t) => {
                    C.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                }),
                e.setBitRate(ev.A.bitrate),
                e.applyVideoQualityMode(eD.A.mode),
                (0, eA.isWindows)() &&
                    tt.supports(ek.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                    tt.setAsyncVideoInputDeviceInit(!0);
        }),
        tt.on(y.bg.DeviceChange, (e, t, n) => {
            t_.stop(),
                C.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
        }),
        tt.on(y.bg.VolumeChange, (e, t) => {
            C.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
        }),
        tt.on(y.bg.DesktopSourceEnd, (e, t) => {
            C.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
        }),
        tt.on(y.bg.AudioPermission, (e) => {
            (tj = !0), C.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
        }),
        tt.on(y.bg.VideoPermission, (e) => {
            C.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
        }),
        tt.on(y.bg.WatchdogTimeout, async () => {
            let e;
            if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                try {
                    await eE.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                } catch (t) {
                    "number" == typeof t.status && (e = t.status);
                }
            eG.warn(`Watchdog timeout, report submission status: ${e ?? 200}`);
            let t = en.A.getConfig({ location: "watchdog_timeout" }).enabled && null != R.A.processUtils.setCrashReason;
            em.default.track(
                eL.HAw.VOICE_WATCHDOG_TIMEOUT,
                { minidump_submission_error: e, will_restart: t },
                { flush: !0 },
            ),
                t &&
                    (eG.info("Relaunching app due to voice watchdog timeout"),
                    await R.A.processUtils.setCrashReason("voice-watchdog-timeout"),
                    v.w.set("discord_watchdog_restart_timestamp", Date.now().toString()),
                    R.A.app.relaunch());
        }),
        tt.on(y.bg.VideoInputInitialized, (e) => {
            em.default.track(eL.HAw.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired
                    ? null
                    : Math.round(e.timeToFirstFrame * eg.A.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: eR.A.getMediaSessionId(),
                rtc_connection_id: eR.A.getRTCConnectionId(),
            });
        }),
        tt.on(y.bg.AudioInputInitialized, (e) => {
            em.default.track(eL.HAw.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * eg.A.Millis.SECOND),
                rtc_connection_id: eR.A.getRTCConnectionId(),
            });
        }),
        tt.on(y.bg.ClipsRecordingRestartNeeded, () => {
            C.h.dispatch({ type: "CLIPS_RESTART" });
        }),
        tt.on(y.bg.ClipsInitFailure, (e, t) => {
            C.h.wait(() => {
                C.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t });
            });
        }),
        tt.on(y.bg.ClipsRecordingEnded, (e, t) => {
            a?.desktopSource?.id === e && (null != t && s?.desktopSource?.soundshareId !== t && O.c1(t), (a = null));
        }),
        tt.on(y.bg.NativeScreenSharePickerUpdate, (e, t) => {
            C.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
        }),
        tt.on(y.bg.NativeScreenSharePickerCancel, (e) => {
            C.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
        }),
        tt.on(y.bg.NativeScreenSharePickerError, (e) => {
            C.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
        }),
        tt.on(y.bg.AudioDeviceModuleError, (e, t, n) => {
            em.default.track(eL.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
        }),
        tt.on(y.bg.VideoCodecError, (e) => {
            let t = "encode" === e.mode ? k.iy.VIDEO_ENCODE_ERROR : k.iy.VIDEO_DECODE_ERROR,
                n = { videoCodec: e.codecStandard, errorMessage: e.message };
            (0, k.QW)(
                t === k.iy.VIDEO_ENCODE_ERROR
                    ? { type: t, ...n, videoEncoder: e.implName }
                    : { type: t, ...n, videoDecoder: e.implName },
            );
        }),
        tt.on(y.bg.ConnectionStats, (e) => {
            C.h.dispatch({
                type: "MEDIA_ENGINE_CONNECTION_STATS",
                connectionStats: e.map((e) => {
                    let { stats: t, connection: n } = e;
                    return {
                        stats: t,
                        mediaEngineConnectionId: n.mediaEngineConnectionId,
                        version: e3++,
                        context: n.context,
                    };
                }),
            });
        }),
        tt.on(y.bg.VoiceQueueMetrics, (e) => {
            let t = r7(e);
            null !== t && em.default.track(eL.HAw.VOICE_QUEUE_METRICS, t);
        }),
        tt.setOnVideoContainerResized((e, t, n) => {
            C.h.wait(() =>
                C.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
            );
        }),
        e7(),
        rt(),
        rr(),
        o.reset(),
        (0, eO.w)().then((e) => {
            null != e && ((tq = e.gpu_brand), (tZ = e.has_intel_hybrid_igpu));
        }),
        tt.on(y.bg.SystemMicrophoneModeChange, (e) => {
            (f = e), tt.eachConnection(nu), r.emitChange();
        });
}
function nd() {
    return (0, eA.isWindows)() && T().satisfies(R.A?.os.release, ew.yg);
}
function n_() {
    return (0, eA.isWindows)() && T().satisfies(R.A?.os.release, ew.fG);
}
function nf() {
    return (0, eA.isMac)() && tt.supports(ek.O5.SCREEN_CAPTURE_KIT) && T().satisfies(R.A?.os.release, ew.e);
}
function np() {
    return (
        (0, eA.isWindows)() &&
        tt.supports(ek.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        tt.supports(ek.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nh() {
    return tt.supports(ek.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function nm() {
    let e = v.w.get("audio");
    null != e && (v.w.set(eF, { [ek.x.DEFAULT]: e }), v.w.remove("audio")),
        (tn = v.w.get(eF) ?? {}),
        E().each(tn, (e) => {
            E().defaultsDeep(e, e9()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, eS.OH)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== eV &&
                    ((e.vadUseKrispSettingVersion = eV), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                e.vadThrehsoldMigrated ||
                    ((e.vadThrehsoldMigrated = !0), e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = ez)),
                tt.supports(ek.O5.SIDECHAIN_COMPRESSION) &&
                    e.sidechainCompressionSettingVersion < ej &&
                    ((e.sidechainCompressionSettingVersion = ej), (e.sidechainCompression = !0)),
                (0, eA.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== eH &&
                      ((e.ncUseKrispjsSettingVersion = eH), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== eB &&
                      ((e.ncUseKrispSettingVersion = eB), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
        }),
        nA();
}
function nE(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ek.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = t7(t);
    return Object.assign(r, e), !__OVERLAY__ && n && v.w.set(eF, tn), r;
}
function ng() {
    v.w.remove(eF), location.reload();
}
function nA() {
    let e = t8();
    tt.setAudioInputDevice(e.inputDeviceId),
        tt.setAudioOutputDevice(e.outputDeviceId),
        nr(),
        tt.setInputVolume(e.inputVolume),
        tt.setOutputVolume(e.outputVolume),
        tt.setAecDump(e.aecDumpEnabled),
        tt.setSidechainCompression(e.sidechainCompression),
        tt.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        tt.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        eT.Ay?.setOpenH264Enabled?.(e.openH264Enabled);
}
function nI() {
    ti || tt.enable().then(() => C.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nT(e) {
    return { id: ek.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
}
function nS(e, t) {
    if (0 === e.length) {
        let e = nT(t);
        return { [e.id]: e };
    }
    return E()(e)
        .map((e) => ({
            id: e.id,
            index: e.index,
            name: e.name,
            disabled: !1,
            facing: e.facing,
            guid: e.originalId,
            hardwareId: e.hardwareId,
            containerId: e.containerId,
            effects: e.effects,
        }))
        .keyBy("id")
        .value();
}
function ny(e, t) {
    let n = e[t] ?? e[ek.dx] ?? E()(e).values().first();
    return null != n ? n.id : t;
}
function nv(e) {
    let t = tu;
    if (((tu = nS(e, eU.intl.string(eU.t["/QIjDA"]))), !E().isEqual(tu, t))) {
        let e = t8(),
            t = ny(tu, e.inputDeviceId);
        tt.setAudioInputDevice(t), tt.eachConnection(nu);
    }
}
function nN(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nC(e) {
    tt.eachConnection((t) => {
        t.context === ek.x.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function nR(e) {
    let t = tc;
    if (((tc = nS(e, eU.intl.string(eU.t.xlUg0v))), !E().isEqual(tc, t))) {
        let e = t8(),
            n = ny(tc, e.outputDeviceId);
        tt.setAudioOutputDevice(n);
        let r = nN(t),
            i = nN(tc);
        r !== i && nC(i);
    }
}
function nO(e) {
    tv = e.length > 0;
    let t = td;
    if (((td = nS(e, eU.intl.string(eU.t.WKWARY))), tE && !E().isEqual(td, t))) {
        let e = void 0 !== td[tg],
            n = tg === ek.dx && t[ek.dx]?.disabled,
            r = "Firefox" === A().name && "" === tg && t[tg]?.name === "Default" && !t[tg]?.disabled;
        nr(e || n || r);
    }
}
function nb() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = e_.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let r = n === ex.W.USER ? ek.x.DEFAULT : ek.x.STREAM,
            i = r === ek.x.STREAM ? ek.Cn : ek.Hz,
            s = t[n] ?? {},
            { localMutes: a, localVolumes: o } = t8(r);
        for (let [e, t] of Object.entries(s))
            null == (0, ed.tM)(r, e) &&
                (t.muted ? (a[e] = !0) : delete a[e],
                t.volume !== i ? (o[e] = t.volume) : delete o[e],
                tt.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, r));
        if (e)
            for (let e of new Set([...Object.keys(a), ...Object.keys(o)]))
                null == s[e] &&
                    (delete a[e],
                    delete o[e],
                    tt.eachConnection((t) => {
                        t.setLocalVolume(e, i), t.setLocalMute(e, !1);
                    }, r));
        nE({ localMutes: a, localVolumes: o }, r);
    }
}
function nD(e) {
    if (null == r)
        return (
            eG.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
            { soundshareId: null, soundshareSession: "" }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : eE.A.getAudioPid(e),
            n = "";
        return null != t && (n = eE.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n };
    }
}
function nL(e, t) {
    (0, eA.isWindows)() &&
        e > 1 &&
        O.GH(e, { soundshare_session: t }).then((t) => {
            null == t ||
                F.Ay.shouldContinueWithoutElevatedProcessForPID(e) ||
                C.h.wait(() => {
                    C.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: t });
                });
        });
}
function nw(e) {
    (i = e.sessionId), (tf = !1), (tm = !1);
    let t = t8();
    np() && (nh() ? rx(ek.rB.AUTOMATIC) : t.automaticAudioSubsystem && rP()),
        tt.supports(ek.O5.OFFLOAD_ADM_CONTROLS) && tt.setOffloadAdmControls(!0),
        (0, eA.isIOS)() &&
            (0, q.Y)("handleConnectionOpen").enabled &&
            tt.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
        (0, ep.Lb)({ location: "MediaEngineStore", autoTrackExposure: !1 }) &&
            null !== t.mostRecentlyRequestedVoiceFilter &&
            (0, eA.isDesktop)() &&
            (eh.A.getLastInitAttemptMayHaveCrashed()
                ? (C.h.dispatch({ type: "AUDIO_SET_SELF_MUTE", mute: !0, context: ek.x.DEFAULT, playSoundEffect: !0 }),
                  nE({ mostRecentlyRequestedVoiceFilter: null }))
                : n(342887).md()),
        nb();
}
function nM(e) {
    let { mediaEngineState: t } = e;
    (tn = t.settingsByContext),
        (tu = t.inputDevices),
        (tc = t.outputDevices),
        (tz = t.appSupported),
        (tD = t.krispModuleLoaded),
        (c = t.krispVersion),
        (ta = t.goLiveContext);
}
function nx() {
    i = null;
}
function nP() {
    return (0, eA.isWeb)() && r.startDavePreload(), !1;
}
function nk(e) {
    switch (e.state) {
        case eL.S7L.CONNECTING:
            nI();
            break;
        case eL.S7L.RTC_CONNECTING:
            (tC = !1), (l = void 0), (u = void 0), (tN = !1), (tQ = !1), tJ.stop(), tR.stop(), o.reset();
            break;
        case eL.S7L.RTC_CONNECTED:
            nr();
            break;
        case eL.S7L.DISCONNECTED:
            nW(), nK();
    }
}
function nU(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (tf = t.mute || t.suppress), (tm = t.deaf), tt.eachConnection(nt);
            let e = null != t.guildId && null != t.channelId && null != tU && tU !== t.channelId,
                n = !tO && null == t.channelId;
            return nr(!e && !n && tE), (tU = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== ey.default.getId() || null != eR.A.getChannelId() || nr(!1, null), e;
    }, !1);
}
function nG(e) {
    let { mute: t } = e;
    (tp = t), tt.eachConnection(nt);
}
function nF(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = t8(t);
    if (t === ek.x.DEFAULT && (el.A.requestPermission(eM.iL.AUDIO), th)) return !1;
    (r = !i && !r) || (i = !1), n || (tI = !0), nE({ mute: r, deaf: i }, t), tt.eachConnection(nt);
}
function nV(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    nE({ mute: n }, t), r || (tI = !0), tt.eachConnection(nt);
}
function nB(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== ex.oD.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    nb(!0);
}
function nH(e) {
    let { context: t } = e;
    nE({ deaf: !t8(t).deaf }, t), tt.eachConnection(nt);
}
function nj(e) {
    let { context: t, userId: n } = e;
    if (n === ey.default.getId()) return;
    let { localMutes: r } = t8(t);
    r[n] ? delete r[n] : (r[n] = !0),
        nE({ localMutes: r }, t),
        tt.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nY(e) {
    let { context: t, userId: n, videoToggleState: r, persist: i, isAutomatic: s } = e;
    h()(!(i && s), "These are not allowed to both be true.");
    let a = r === eL.bb8.DISABLED,
        { disabledLocalVideos: o } = t8(t),
        l = o[n] ?? !1,
        u = tW.has(n),
        c = r === eL.bb8.AUTO_ENABLED || r === eL.bb8.MANUAL_ENABLED;
    eG.info(`disableVideo=${a} currentlyDisabled=${l} currentlyAutoDisabled=${u}, isVideoShown=${c}`),
        h()(!(u && !l), "If you are auto-disabled, then you are also disabled.");
    let d = a !== l,
        _ = t === ek.x.DEFAULT,
        f = s && d && _,
        p = i && d && _;
    eG.info(`changed=${d} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${f} isManualToggleByUser=${p}`);
    let { videoToggleStateMap: m } = t8(t);
    if (
        (m[n] === eL.bb8.AUTO_PROBING &&
            r === eL.bb8.AUTO_ENABLED &&
            (0, eo.A)(n, a ? ek.Al.AUTO_DISABLE : ek.Al.AUTO_ENABLE, c),
        (m[n] = r),
        nE({ videoToggleStateMap: m }, t, i),
        r === eL.bb8.AUTO_PROBING
            ? eR.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
            : eR.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
        tK ||
            (eG.info(`isAutoDisableAllowed=${tK} - disabling VideoHealthManager`),
            eR.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
        f)
    ) {
        if ((!a && !u) || (a && !tK)) return;
        (0, eo.A)(n, a ? ek.Al.AUTO_DISABLE : ek.Al.AUTO_ENABLE, c), a ? tW.add(n) : tW.delete(n);
    } else
        p &&
            (u && !a
                ? (eG.info("disallowing auto-disable for this session because of manual override by user"),
                  (tK = !1),
                  eR.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                  (0, eo.A)(n, ek.Al.MANUAL_REENABLE, c))
                : (0, eo.A)(n, a ? ek.Al.MANUAL_DISABLE : ek.Al.MANUAL_ENABLE, c));
    _ && !a && tW.delete(n),
        a ? (o[n] = !0) : delete o[n],
        nE({ disabledLocalVideos: o }, t, i),
        tt.eachConnection((e) => e.setLocalVideoDisabled(n, o[n] ?? !1), t);
}
function nW() {
    if (0 === tW.size) return;
    let e = ek.x.DEFAULT,
        { disabledLocalVideos: t } = t8(e);
    tW.forEach((n) => {
        h()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            tt.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tW.clear(),
        nE({ disabledLocalVideos: t }, e, !1);
}
function nK() {
    let e = ek.x.DEFAULT,
        { videoToggleStateMap: t } = t8(e);
    for (let [e, n] of Object.entries(t)) n === eL.bb8.AUTO_PROBING && delete t[e];
    nE({ videoToggleStateMap: t }, e, !1);
}
function n$(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === ey.default.getId()) return;
    let i = t === ek.x.STREAM ? ek.Cn : ek.Hz,
        { localVolumes: s } = t8(t);
    r === i ? delete s[n] : (s[n] = r), nE({ localVolumes: s }, t), tt.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function nz(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: s } = t8(t);
    (s[n] = { left: r, right: i }), nE({ localPans: s }, t), tt.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function nq(e) {
    let { context: t, mode: n, options: r } = e;
    nE({ mode: n, modeOptions: { ...r, updatedAt: Date.now() } }, t), tt.eachConnection(t9);
}
function nZ(e) {
    let { volume: t } = e;
    nE({ inputVolume: ne(t) }), tt.setInputVolume(t);
}
function nX(e) {
    let { volume: t } = e;
    nE({ outputVolume: t }), tt.setOutputVolume(t);
}
function nQ(e) {
    let { id: t } = e;
    (t = ny(tu, t)),
        (to = performance.now()),
        nE({ inputDeviceId: t }),
        tt.setAudioInputDevice(t),
        tt.eachConnection(nu),
        (l = void 0),
        (u = void 0),
        tJ.stop(),
        (tQ = !1);
    let { resetSilenceWarningOnDeviceChange: n } = ee.A.getConfig({
        location: "MediaEngineStore.handleSetInputDevice",
    });
    n && ((tN = !1), o.reset());
}
function nJ(e) {
    let { id: t } = e;
    nE({ outputDeviceId: (t = ny(tc, t)) }), tt.setAudioOutputDevice(t);
}
function n0(e) {
    let { id: t } = e;
    nE({ videoDeviceId: (t = ny(td, t)) }), nr();
}
function n1(e) {
    let { inputProfile: t } = e;
    nE({ activeInputProfile: t });
    let n = t8();
    tt.eachConnection((e) => {
        t9(e), nu(e);
    }),
        tt.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        rn();
}
function n2(e) {
    return ts !== e.required && ((ts = e.required), e.required || tt.interact(), !0);
}
function n3(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    nv(t), nR(n), nO(r);
}
function n6(e) {
    let { inputVolume: t, outputVolume: n } = e;
    nE({ inputVolume: ne(t), outputVolume: n });
}
function n4(e) {
    let t = t8(),
        n = tt.getAudioSubsystem(),
        i = tt.getAudioLayer(),
        s = ny(tu, t.inputDeviceId),
        a = tu[s]?.name,
        o = (0, ec.A)(t.noiseCancellation, r.getSystemMicrophoneMode());
    em.default.track(eL.HAw.VOICE_PROCESSING, {
        echo_cancellation: t.echoCancellation,
        noise_cancellation: t.noiseCancellation,
        noise_suppression: t.noiseSuppression,
        automatic_gain_control: t.automaticGainControl,
        location: e,
        bypass_system_input_processing: t.bypassSystemInputProcessing,
        audio_subsystem: n,
        audio_layer: i,
        input_device: a,
        effective_noise_cancellation: o,
    });
}
function n5(e) {
    let t = nE({ echoCancellation: e.enabled });
    tt.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), rn(), n4(e.location);
}
function n7(e) {
    n9(e.enabled);
}
function n8(e) {
    let t = nE({ sidechainCompressionStrength: e.strength });
    tt.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function n9(e) {
    let t = nE({ sidechainCompression: e });
    tt.setSidechainCompression(t.sidechainCompression);
}
function re(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? t$.add(n) : t$.delete(n), rt(), rn();
}
function rt() {
    let e = !t$.has("voice_filter_preview") && !t$.has("mic_test");
    tt.setMaybePreprocessMute(e);
}
function rn() {
    let e = t8(),
        t = t$.size > 0,
        n = e.inputDeviceId,
        r = eN.A.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        s = eN.A.hasNoiseSuppression(n) || e.noiseSuppression,
        a = na(eN.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        o = e.noiseCancellation,
        l = null !== tM,
        u = t$.has("voice_filter") && 1 === t$.size;
    tt.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: s,
        automaticGainControlConfig: a,
        noiseCancellation: o,
        voiceFilters: l,
        loopbackUseAudioMode: u,
    });
}
async function rr() {
    if (!tt.supports(ek.O5.VAAPI)) return;
    let e = 4098;
    if (window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let t = await window.DiscordNative.processUtils.getSystemInfo();
    (t.electronGPUInfo?.gpuDevice ?? []).some((t) => t.vendorId === e) &&
        ((t2 = !0), (t1 = tt.supports(ek.O5.GAMESCOPE_CAPTURE)));
}
function ri(e) {
    let t = nE({ noiseSuppression: e.enabled });
    tt.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), rn(), n4(e.location);
}
function rs(e) {
    let t = nE({ automaticGainControl: e.enabled });
    tt.eachConnection((e) => no(e, t.automaticGainControl)), rn(), n4(e.location);
}
function ra(e) {
    let t = nE({ noiseCancellation: e.enabled });
    tt.eachConnection((e) => nl(e, t.noiseCancellation)), rn(), n4(e.location);
}
function ro(e) {
    eu.A.setKrispModelOverride(e.model), (_ = e.model), rn();
}
function rl(e) {
    (0, eA.isWeb)() || ((tw = e.enabled), tt.setNoiseCancellationEnableStats?.(e.enabled));
}
function ru(e) {
    nE({ silenceWarning: e.enabled });
}
function rc(e) {
    tt.setDebugLogging(e.enabled);
}
function rd(e) {
    let { level: t } = e;
    (d = t), eu.A.setKrispSuppressionLevel(t);
}
function r_(e) {
    nE({ videoHook: e.enabled });
}
function rf(e) {
    nE({ experimentalSoundshare2: e.enabled });
}
function rp(e) {
    let { enabled: t } = e;
    nE({ useSystemScreensharePicker: t });
}
function rh(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = nE({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r });
    tt.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function rm(e) {
    let { enabled: t } = e;
    nE({ qos: t }), tt.eachConnection((e) => e.setQoS(t));
}
function rE() {
    ng();
}
function rg(e) {
    let { osVolume: t, osMuted: n } = e;
    (u = t), (l = n);
}
function rA(e) {
    let { inputDetected: t } = e;
    if (null == t) return !1;
    if (((tC = !0 !== tN && !t), t)) (tN = !0), (tQ = !1), tJ.stop(), tR.stop();
    else if (t8().mode === eL.TBI.VOICE_ACTIVITY && tN) {
        let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = ee.A.getConfig({
            location: "MediaEngineStore.handleInputDetected",
        });
        e &&
            tJ.start(eQ, () => {
                em.default.track(eL.HAw.HARDWARE_MUTE_GUESSED, {
                    input_device_name: tu[ny(tu, t8().inputDeviceId)]?.name,
                    rtc_connection_id: eR.A.getRTCConnectionId(),
                }),
                    (tQ = !0),
                    r.emitChange();
            }),
            null != t &&
                tR.start(t * eg.A.Millis.MINUTE, () => {
                    (tN = !1), o.reset();
                });
    }
}
function rI(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === th) return !1;
    (th = n), tt.eachConnection(nt);
}
function rT(e) {
    let { state: t, permissionType: n } = e,
        r = t === eM.hL.ACCEPTED;
    switch (n) {
        case eM.iL.AUDIO:
            (tj = !0), tt.eachConnection(nt);
            break;
        case eM.iL.CAMERA:
            !r && tE && nr(!1);
            break;
        default:
            return !1;
    }
}
function rS() {
    return tD || !1;
}
async function ry() {
    try {
        await eT.Ay.ensureModule("discord_krisp");
        let e = eT.Ay.requireModule("discord_krisp");
        (tD = !0),
            (c = e.getSdkVersion?.()),
            (d = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (tL = e), r.emitChange();
            }),
            r.emitChange();
    } catch (t) {
        eG.warn(`Failed to load Krisp module: ${t.message}`), eI.A.captureException(t);
        let e = ek.CO.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? ek.CO.INITIALIZED : n;
        }
        em.default.track(eL.HAw.VOICE_PROCESSING, { noise_canceller_error: e }), nE({ noiseCancellation: !1 });
    } finally {
        tb = !1;
    }
}
function rv() {
    return (0, eA.isWindows)() || (0, eA.isLinux)() || (0, eA.isMac)();
}
function rN() {
    !rv() || __OVERLAY__ || tb || tD
        ? (0, eA.isWeb)() && tt.supports(ek.O5.NOISE_CANCELLATION)
            ? ((tD = !0), r.emitChange())
            : (0, eA.isWeb)() && nE({ noiseCancellation: !1 })
        : ((tb = !0), ry());
}
async function rC() {
    try {
        let e,
            t = "",
            n = !1,
            r = URL.parse(e1);
        if (null === r) return void eG.log("OpenH264 URL ", r, " is invalid");
        let i = r.pathname.split("/"),
            s = i[i.length - 1].replace(".bz2", "");
        try {
            let t = await eT.Ay.downloadOpenH264(e1, s, e2, (e) => {
                eG.log("OpenH264 download status", e);
            });
            eG.log("OpenH264 is ready", t), (n = t.fetchedFromNetwork), (e = !0);
        } catch (n) {
            eG.error("OpenH264 download failed", n), (t = n.message), (e = !1);
        }
        if (
            (em.default.track(eL.HAw.VIDEO_OPENH264_DOWNLOADED, {
                success: e,
                fetched_from_network: n,
                error_message: t,
            }),
            e)
        ) {
            let e = await eT.Ay.cleanupUnusedOpenH264Files([s]);
            eG.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        eG.error("OpenH264 download failed", e);
    }
}
function rR() {
    (0, eA.isLinux)() && rC();
}
function rO(e) {
    let { enabled: t } = e;
    em.default.track(eL.HAw.VOICE_FILTER_PLAYBACK_TOGGLED, { active_voice_filter_id: tM ?? null, enabled: t }),
        nE({ voiceFilterPlaybackEnabled: t });
}
function rb(e) {
    let { newVoiceFilterId: t } = e;
    nE({ mostRecentlyRequestedVoiceFilter: t }), tt.eachConnection((e) => e.setVoiceFilterId(t));
}
function rD() {
    nE({ mostRecentlyRequestedVoiceFilter: null });
}
function rL(e) {
    let { voiceFilterId: t } = e;
    (tP = tM), (tk = tx), (tM = t), (tx = null === t ? null : Date.now());
}
function rw(e) {
    let t = e.bypassEnabled;
    nE({ bypassSystemInputProcessing: t }), tt.setAudioInputBypassSystemProcessing(t), n4(e.location);
}
function rM(e) {
    rx(e.subsystem);
}
function rx(e) {
    e === ek.rB.AUTOMATIC
        ? (nE({ automaticAudioSubsystem: !0 }), rP())
        : (nE({ automaticAudioSubsystem: !1 }), tt.setAudioSubsystem(e));
}
function rP() {
    tt.queueAudioSubsystem(ek.rB.EXPERIMENTAL);
}
function rk(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && nr(i, null), null != t || null == n)) {
        tO = !1;
        return;
    }
    if (tO) return;
    tO = !0;
    let s = t8();
    (s.mute || s.deaf) && (nE({ deaf: !1, mute: !1 }), tt.eachConnection(nt));
}
function rU(e) {
    let { application: t } = e;
    tr.add(t.id);
}
function rG(e) {
    let { application: t } = e;
    tr.delete(t.id);
}
function rF(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (ti = !1), tt.eachConnection(nt);
                break;
            case "video":
                nr(!1);
        }
}
function rV(e) {
    (ti = e.enabled), e.unmute && nE({ mute: !1, deaf: !1 }), tt.eachConnection(nt);
}
function rB(e) {
    let { enabled: t } = e;
    el.A.requestPermission(eM.iL.CAMERA), nr(t);
}
function rH(e) {
    let { sourceId: t, applicationName: n, quality: i } = e;
    if (!(0, M.Ao)() || null == R.A) return !1;
    let s = null,
        o = null,
        l = eE.A.getPidFromDesktopSource(t);
    ({ soundshareId: s, soundshareSession: o } = nD(l));
    let u = { desktopSource: { id: t, sourcePid: l, soundshareId: s, soundshareSession: o }, quality: i };
    null != a &&
        (tt.setClipsSource(null),
        (0, eA.isWindows)() && null != a.desktopSource.soundshareId && O.c1(a.desktopSource.soundshareId)),
        null != s && nL(s, o),
        (a = u);
    let c = t6("MediaEngineStore clips"),
        d = t8().videoHook;
    tt.setClipsSource({
        desktopDescription: {
            id: a.desktopSource.id,
            soundshareId: a.desktopSource.soundshareId,
            useVideoHook: d,
            useGraphicsCapture: nd(),
            useCaptureDeviceForEncode: !1,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: nf(),
            videoHookStaleFrameTimeoutMs: eK,
            graphicsCaptureStaleFrameTimeoutMs: e$,
            hdrCaptureMode: c,
        },
        quality: i,
        applicationName: n,
    });
}
function rj(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((a = null), tt.setClipsSource(null));
}
function rY(e) {
    let { settings: t } = e;
    if (t?.desktopSettings != null) {
        let e = null,
            n = null,
            { sourceId: r, sound: i } = t.desktopSettings,
            s = t.context ?? ek.x.DEFAULT,
            a = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
            o = !1 === i ? null : eE.A.getPidFromDesktopSource(r);
        eA.isPlatformEmbedded &&
            !0 === i &&
            (({ soundshareId: e, soundshareSession: n } = nD(o)), null != e && nL(e, n)),
            nn(s),
            nr(s === ek.x.STREAM && tE, {
                desktopSource: { id: r, sourcePid: o, soundshareId: e, soundshareSession: n },
                quality: { resolution: a.resolution, frameRate: a.frameRate },
            });
    } else if (t?.cameraSettings != null) {
        let e = t.context ?? ek.x.DEFAULT,
            { videoDeviceGuid: n, audioDeviceGuid: r } = t.cameraSettings,
            i = e === ek.x.STREAM && tE,
            s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
        nr(i, {
            cameraSource: { videoDeviceGuid: n, audioDeviceGuid: r },
            quality: { resolution: s.resolution, frameRate: s.frameRate },
        });
    } else nr(tE, null);
}
function rW(e) {
    let { section: t } = e;
    return t === eL.nc_.VOICE && nI(), !1;
}
function rK() {
    return tt.eachConnection(nu), !1;
}
function r$(e) {
    let { enabled: t } = e,
        n = nE({ aecDumpEnabled: t });
    tt.setAecDump(n.aecDumpEnabled);
}
function rz(e) {
    let { enabled: t } = e;
    nE({ openH264Enabled: t }), eT.Ay?.setOpenH264Enabled?.(t);
}
function rq(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (tn = Object.values(ek.x).reduce((e, n) => {
        let r = n,
            i = e9();
        return (e[r] = E().merge(i, t[r])), e;
    }, {})),
        v.w.set(eF, tn),
        nA();
}
function rZ(e) {
    let { state: t } = e,
        n = G.A.isEnabled();
    if (t === eL.g6G.BACKGROUND && tE && !n) (ty = !0), nr(!1);
    else {
        if (t !== eL.g6G.ACTIVE || !ty) return !1;
        (ty = !1), nr(!0);
    }
    return !0;
}
function rX(e) {
    tt.eachConnection((t) => t.setBitRate(e.bitrate));
}
function rQ() {
    if ((!tE && null == s) || null != eR.A.getRTCConnectionId()) return !1;
    nr(!1, null);
}
function rJ() {
    return !!tG && ((tG = !1), !0);
}
function r0(e) {
    tt.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function r1(e) {
    let { settings: t } = e;
    tt.applyMediaFilterSettings(t).finally(() => {
        (tF = !1), r.emitChange();
    });
}
function r2() {
    tF = !0;
}
function r3() {
    tF = !1;
}
function r6(e) {
    tX = e.enabled;
}
function r4() {
    if ((0, eA.isDesktop)() && eA.isPlatformEmbedded && !t3) {
        t3 = !0;
        let e = async () => {
            let t = await new Promise((e) => {
                eT.Ay.pollQueueMetrics((t) => {
                    e(t);
                });
            });
            t.periodMs = ek.tl;
            let n = r7(t);
            null !== n && em.default.track(eL.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, ek.tl);
        };
        setTimeout(e, ek.tl);
    }
}
class r5 extends S.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        nc(),
            nm(),
            rN(),
            rR(),
            nK(),
            r4(),
            (0, eA.isWindows)() && eA.isPlatformEmbedded && ns(),
            (tz = {
                [ek.O5.VIDEO]: tt.supports(ek.O5.VIDEO),
                [ek.O5.DESKTOP_CAPTURE]: tt.supports(ek.O5.DESKTOP_CAPTURE),
                [ek.O5.HYBRID_VIDEO]: tt.supports(ek.O5.HYBRID_VIDEO),
            }),
            this.waitFor(ey.default, ev.A, eN.A, eC.A, L.A, U.A, eR.A, F.Ay, e_.A, eb.default, eD.A, eh.A);
    }
    supports(e) {
        return tt.supports(e);
    }
    supportsInApp(e) {
        return tz[e] || tt.supports(e);
    }
    isSupported() {
        return tt.supported();
    }
    isNoiseSuppressionSupported() {
        return tt.supports(ek.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return rS();
    }
    isNoiseCancellationError() {
        return tG;
    }
    isAutomaticGainControlSupported() {
        return tt.supports(ek.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nh() && (tt.supports(ek.O5.LEGACY_AUDIO_SUBSYSTEM) || tt.supports(ek.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return tt.supports(ek.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === tt.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return rS();
    }
    isAecDumpSupported() {
        return tt.supports(ek.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return tt.supports(ek.O5.VIDEO) && tt.supports(ek.O5.SIMULCAST);
    }
    getAecDump() {
        return t8().aecDumpEnabled;
    }
    getMediaEngine() {
        return tt;
    }
    getVideoComponent() {
        return tt.Video;
    }
    getCameraComponent() {
        return tt.Camera;
    }
    getKrispSuppressionLevel() {
        return d ?? 100;
    }
    getKrispEnableStats() {
        return tw;
    }
    isEnabled() {
        return ti;
    }
    isMute() {
        return this.isSelfMute() || tf;
    }
    isDeaf() {
        return this.isSelfDeaf() || tm;
    }
    hasContext(e) {
        return null != tn[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.x.DEFAULT;
        return e === ek.x.DEFAULT && tp;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.x.DEFAULT;
        return (
            !this.isEnabled() ||
            t8(e).mute ||
            !el.A.didHavePermission(eM.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === ek.x.DEFAULT && th)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tI;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tI = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.x.DEFAULT,
            t = tQ && "voice_isolation" !== this.getSystemMicrophoneMode() && t8(e).mode === eL.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (eN.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return tX;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.x.DEFAULT;
        return !this.isSupported() || t8(e).deaf;
    }
    isVideoEnabled() {
        return tE && tv;
    }
    isVideoAvailable() {
        return Object.values(td).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return tv;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.x.STREAM;
        return ta === e && null != s;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.x.STREAM;
        return ta === e && null != s && s.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ek.x.DEFAULT;
        return e !== ey.default.getId() && (t8(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return tt.supports(ek.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ek.x.DEFAULT;
        return t8(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ek.x.DEFAULT;
        return t8(t).videoToggleStateMap[e] ?? eL.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ek.x.DEFAULT;
        return t === ek.x.DEFAULT && tW.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.x.DEFAULT;
        return e === ek.x.DEFAULT && tW.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tF;
    }
    isNativeAudioPermissionReady() {
        return tj;
    }
    getGoLiveSource() {
        return s;
    }
    getGoLiveContext() {
        return ta;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return to;
    }
    isH264MfDecodeAvailable() {
        return tl;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ek.x.DEFAULT,
            n = t8(t).localPans[e];
        return null != n ? n : eW;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ek.x.DEFAULT,
            n = t === ek.x.STREAM ? ek.Cn : ek.Hz,
            r = t8(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return t8().inputVolume;
    }
    getOutputVolume() {
        return t8().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.x.DEFAULT;
        return t8(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.x.DEFAULT;
        return t8(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return tM;
    }
    getActiveVoiceFilterAppliedAt() {
        return tx;
    }
    getPreviousVoiceFilter() {
        return tP;
    }
    getPreviousVoiceFilterAppliedAt() {
        return tk;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return t8().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return t8().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            E().each(tn, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === eL.TBI.PUSH_TO_TALK && tr.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return ny(tu, t8().inputDeviceId);
    }
    getOutputDeviceId() {
        return ny(tc, t8().outputDeviceId);
    }
    getVideoDeviceId() {
        return ny(td, t8().videoDeviceId);
    }
    getInputDevices() {
        return tu;
    }
    getOutputDevices() {
        return tc;
    }
    getVideoDevices() {
        return td;
    }
    getEchoCancellation() {
        let e = t8();
        return eN.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return tt.supports(ek.O5.SIDECHAIN_COMPRESSION) && t8().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return t8().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return t8().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tB && tB;
    }
    getOpenH264Enabled() {
        return (0, eA.isLinux)() && t8().openH264Enabled;
    }
    getLoopback() {
        return t$.size > 0;
    }
    getLoopbackReasons() {
        return t$;
    }
    getNoiseSuppression() {
        let e = t8();
        return eN.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = t8();
        return eN.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return t8().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return t8().noiseCancellation;
    }
    getHardwareEncoding() {
        return eJ;
    }
    getEnableSilenceWarning() {
        return t8().silenceWarning;
    }
    getDebugLogging() {
        return tt.getDebugLogging();
    }
    getQoS() {
        return t8().qos;
    }
    getAttenuation() {
        return t8().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return t8().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return t8().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return np() && t8().automaticAudioSubsystem ? ek.rB.AUTOMATIC : tt.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return tt.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return t8().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eP.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.x.DEFAULT;
        return t8(e);
    }
    getState() {
        return {
            settingsByContext: tn,
            inputDevices: tu,
            outputDevices: tc,
            appSupported: tz,
            krispModuleLoaded: tD,
            krispVersion: c,
            krispSuppressionLevel: d,
            goLiveSource: s,
            goLiveContext: ta,
        };
    }
    getInputDetectedThisConnection() {
        return tN;
    }
    getInputDetected() {
        return o.inputDetected;
    }
    getLastInputDetectedUpdateTime() {
        return o.lastUpdateTime;
    }
    getNoInputDetectedNotice() {
        return tC;
    }
    getInputDeviceOSMuted() {
        return l;
    }
    getInputDeviceOSVolume() {
        return u;
    }
    getPacketDelay() {
        return eA.isPlatformEmbedded || this.getMode() !== eL.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        tt.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return ts;
    }
    getVideoHook() {
        return t8().videoHook;
    }
    supportsVideoHook() {
        return tt.supports(ek.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = t8().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return tt.supports(ek.O5.EXPERIMENTAL_SOUNDSHARE) && T().satisfies(R.A?.os.release, ew.$x);
    }
    supportsHookSoundshare() {
        return (0, eA.isWindows)() && tt.supports(ek.O5.SOUNDSHARE) && T().satisfies(R.A?.os.release, ew.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = t8().useSystemScreensharePicker,
            n = (0, eA.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return tt.supports(ek.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return t2;
    }
    getUseGamescopeCapture() {
        return t1;
    }
    getSpeakingWhileMuted() {
        return tT;
    }
    getKrispModelOverride() {
        return _;
    }
    getKrispModels() {
        return tL;
    }
    getKrispVadActivationThreshold() {
        return t8().modeOptions.vadKrispActivationThreshold ?? eY;
    }
    hasActiveCallKitCall() {
        return t0;
    }
    setHasActiveCallKitCall(e) {
        t0 = e;
    }
    supportsScreenSoundshare() {
        return (0, eA.isMac)()
            ? tt.supports(ek.O5.SOUNDSHARE) && T().satisfies(R.A?.os.release, ew.P$) && nf()
            : (0, eA.isWindows)()
              ? tt.supports(ek.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, eA.isLinux)() && tt.supports(ek.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        return (0, eA.isWindows)()
            ? this.getInputDevices()[this.getInputDeviceId()]?.effects?.find((e) => e === e0)
            : (0, eA.isMac)() || (0, eA.isIOS)()
              ? f
              : void 0;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.x.DEFAULT,
            t = this.supports(ek.O5.VIDEO)
                ? [{ rid: "100", type: e === ek.x.DEFAULT ? ek.mI.VIDEO : ek.mI.SCREEN, quality: ek.Y4 }]
                : [];
        return (
            this.isSimulcastSupported() &&
                e === ek.x.DEFAULT &&
                t.push({ rid: "50", type: ek.mI.VIDEO, quality: ek.Cl }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: (0, eA.isWeb)() };
        return tt.fetchAsyncResources(e);
    }
    startDavePreload() {
        if (!tV && ((tV = !0), (0, eA.isWeb)())) {
            let e = { fetchDave: !0 };
            tt.fetchAsyncResources(e).catch((e) => {
                eG.warn("DAVE preload failed:", e), eI.A.captureException(e);
            });
        }
    }
    getSupportedSecureFramesProtocolVersion() {
        return tt.getSupportedSecureFramesProtocolVersion();
    }
    hasClipsSource() {
        return null != a;
    }
    getGpuBrand() {
        return tq;
    }
}
function r7(e) {
    if (null == e.taskMetrics || 0 === e.taskMetrics.length || 1 === e.taskMetrics.length) return null;
    let t = { metrics_period_ms: e.periodMs, total_tasks: 0, total_exec_time_ns: 0, queue_name: e.queueName };
    (t.total_tasks = e.taskMetrics.reduce((e, t) => e + t.count, 0)),
        (t.total_exec_time_ns = e.taskMetrics.reduce((e, t) => e + t.totalExecTimeNs, 0));
    let n = [...e.taskMetrics].sort((e, t) => t.longestExecTimeNs - e.longestExecTimeNs),
        r = [...e.taskMetrics].sort((e, t) => t.longestQueueTimeNs - e.longestQueueTimeNs);
    for (let e = 0; e < 3; e++)
        if (e < n.length) {
            let r = n[e];
            (t[`slow_task_${e}_name`] = r.name), (t[`slow_task_${e}_longest_exec_time_ns`] = r.longestExecTimeNs);
        }
    for (let e = 0; e < 3; e++)
        if (e < r.length) {
            let n = r[e];
            (t[`delayed_task_${e}_name`] = n.name),
                (t[`delayed_task_${e}_longest_queue_time_ns`] = n.longestQueueTimeNs);
        }
    return (t.full_task_report = JSON.stringify(n)), t;
}
(r = new r5(C.h, {
    VOICE_CHANNEL_SELECT: rk,
    VOICE_STATE_UPDATES: nU,
    CONNECTION_OPEN: nw,
    CONNECTION_CLOSED: nx,
    POST_CONNECTION_OPEN: nP,
    RTC_CONNECTION_STATE: nk,
    AUDIO_SET_TEMPORARY_SELF_MUTE: nG,
    AUDIO_TOGGLE_SELF_MUTE: nF,
    AUDIO_SET_SELF_MUTE: nV,
    AUDIO_TOGGLE_SELF_DEAF: nH,
    AUDIO_TOGGLE_LOCAL_MUTE: nj,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: nY,
    AUDIO_SET_LOCAL_VOLUME: n$,
    AUDIO_SET_LOCAL_PAN: nz,
    AUDIO_SET_MODE: nq,
    AUDIO_SET_INPUT_VOLUME: nZ,
    AUDIO_SET_OUTPUT_VOLUME: nX,
    AUDIO_SET_INPUT_DEVICE: nQ,
    AUDIO_SET_OUTPUT_DEVICE: nJ,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: n1,
    AUDIO_SET_ECHO_CANCELLATION: n5,
    AUDIO_SET_SIDECHAIN_COMPRESSION: n7,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: n8,
    AUDIO_SET_LOOPBACK: re,
    AUDIO_SET_NOISE_SUPPRESSION: ri,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: rs,
    AUDIO_SET_NOISE_CANCELLATION: ra,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: ro,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: ru,
    AUDIO_SET_DEBUG_LOGGING: rc,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: rd,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: rl,
    MEDIA_ENGINE_SET_VIDEO_HOOK: r_,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: rf,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: rp,
    AUDIO_SET_ATTENUATION: rh,
    AUDIO_SET_QOS: rm,
    MEDIA_ENGINE_DEVICES: n3,
    AUDIO_VOLUME_CHANGE: n6,
    AUDIO_RESET: rE,
    AUDIO_INPUT_DETECTED: rA,
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: rg,
    AUDIO_SET_SUBSYSTEM: rM,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rw,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rV,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rB,
    MEDIA_ENGINE_PERMISSION: rF,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rY,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: n0,
    MEDIA_ENGINE_INTERACTION_REQUIRED: n2,
    USER_SETTINGS_MODAL_INIT: rW,
    USER_SETTINGS_MODAL_SET_SECTION: rW,
    CERTIFIED_DEVICES_SET: rK,
    RPC_APP_CONNECTED: rU,
    RPC_APP_DISCONNECTED: rG,
    OVERLAY_INITIALIZE: nM,
    APP_STATE_UPDATE: rZ,
    SET_CHANNEL_BITRATE: rX,
    SET_VAD_PERMISSION: rI,
    SET_NATIVE_PERMISSION: rT,
    SET_CHANNEL_VIDEO_QUALITY_MODE: r0,
    MEDIA_ENGINE_SET_AEC_DUMP: r$,
    MEDIA_ENGINE_SET_OPENH264_ENABLED: rz,
    MEDIA_ENGINE_RESET_SETTINGS: rq,
    CHANNEL_DELETE: rQ,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: rJ,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: r1,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: r2,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: r3,
    USER_SETTINGS_PROTO_UPDATE: nB,
    CLIPS_INIT: rH,
    CLIPS_SETTINGS_UPDATE: rj,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: r6,
    VOICE_FILTER_REQUEST_SWITCH: rb,
    VOICE_FILTER_LOOPBACK_TOGGLE: rO,
    VOICE_FILTER_APPLIED: rL,
    VOICE_FILTER_DOWNLOAD_FAILED: rD,
    VOICE_FILTER_APPLY_FAILED: rD,
})),
    (o = new Z.A(tt, r));
let r8 = r;
