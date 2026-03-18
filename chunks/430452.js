"use strict";
let r, i, s, a, o, l, u, c, d, _, f;
n.d(t, { Ay: () => ie }), n(323874), n(14289), n(35956), n(321073), n(790599);
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
    q = n(532055),
    Z = n(227493),
    X = n(264866),
    Q = n(927170),
    J = n(729410),
    ee = n(233232),
    et = n(140175);
n(491642);
var en = n(801644),
    er = n(223572),
    ei = n(993628),
    es = n(886124),
    ea = n(165479),
    eo = n(896014),
    el = n(765396),
    eu = n(75076),
    ec = n(674966),
    ed = n(559633),
    e_ = n(3527),
    ef = n(879172),
    ep = n(617617),
    eh = n(340913),
    em = n(996744),
    eE = n(28075),
    eg = n(954571),
    eA = n(353835),
    eI = n(927813),
    eT = n(723702),
    eS = n(728458),
    ey = n(837921),
    ev = n(350535),
    eN = n(961350),
    eC = n(131319),
    eR = n(347481),
    eO = n(734057),
    eb = n(383501),
    eD = n(851581),
    eL = n(287809),
    ew = n(117549),
    eM = n(652215),
    ex = n(502075),
    eP = n(765682),
    ek = n(355097),
    eU = n(509381),
    eG = n(731854),
    eF = n(985018);
let eV = new x.A("MediaEngineStore"),
    eB = "MediaEngineStore",
    eH = 4,
    ej = 1,
    eY = 1,
    eW = 1,
    eK = 0.5,
    e$ = { left: 1, right: 1 },
    ez = 500,
    eq = 5 * eI.A.Millis.SECOND,
    eZ = -60,
    eX = 100,
    eQ = 2 * eI.A.Millis.SECOND,
    eJ = 30 * eI.A.Millis.SECOND,
    e0 = +eI.A.Millis.MINUTE,
    e1 = !0,
    e2 = "deep_noise_suppression",
    e3 = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2",
    e6 = "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f",
    e4 = 0,
    e5 = null;
function e7() {
    if (!(0, eT.isIOS)() || null == e5) return !1;
    let e = e5();
    if (null == e || !e.startsWith("ARM64_")) return !1;
    let t = e.substring(6);
    return ("T" === t[0] || "S" === t[0]) && parseInt(t.substring(1), 10) >= 8122;
}
let e8 = null;
async function e9() {
    if (!(0, eT.isMac)() || R.A?.os.arch !== "arm64" || R.A?.processUtils?.getSystemInfo == null) {
        e8 = !1;
        return;
    }
    let e = await R.A.processUtils.getSystemInfo(),
        t = e.cpus?.[0]?.model ?? "";
    eV.info("Detected Mac CPU", t);
    let n = t.match(/Apple M(\d+)/);
    if (null == n) {
        e8 = !0;
        return;
    }
    e8 = parseInt(n[1], 10) >= 3;
}
function te() {
    return !0 === e8;
}
function tt() {
    return {
        mode: eM.TBI.VOICE_ACTIVITY,
        modeOptions: {
            threshold: eZ,
            autoThreshold: eT.isPlatformEmbedded || __OVERLAY__,
            vadUseKrisp: !0,
            vadKrispActivationThreshold: eK,
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
        inputVolume: eG.Hz,
        outputVolume: eG.Hz,
        inputDeviceId: eG.dx,
        outputDeviceId: eG.dx,
        videoDeviceId: eG.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: tr.supports(eG.O5.VIDEO_HOOK),
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
let tn = {
        [eU.m.CUSTOM]: {},
        [eU.m.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [eU.m.STUDIO]: {
            mode: eM.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    tr = (0, y.hB)((0, y.WI)());
eV.enableNativeLogger(!0);
let ti = {},
    ts = new Set([eG.x.DEFAULT]),
    ta = tr.supports(eG.O5.AUTO_ENABLE),
    to = !1,
    tl = eG.x.STREAM,
    tu = performance.now(),
    tc = null,
    td = { [eG.dx]: ny("No Input Devices") },
    t_ = { [eG.dx]: ny("No Output Devices") },
    tf = { [eG.dx]: ny("No Video Devices") },
    tp = new N.Ep(),
    th = !1,
    tm = !1,
    tE = !1,
    tg = !1,
    tA = !1,
    tI = eG.qe,
    tT = eG.qe,
    tS = !1,
    ty = !1,
    tv = new N.Ep(),
    tN = !1,
    tC = !1,
    tR = !1,
    tO = !1,
    tb = new N.Ep(),
    tD = !1,
    tL = !1,
    tw = !1,
    tM = [],
    tx = !1,
    tP = null,
    tk = null,
    tU = null,
    tG = null,
    tF = null,
    tV = !1,
    tB = !1,
    tH = !1,
    tj = null,
    tY = null,
    tW = !1;
ec.A.hasPermission(eP.iL.AUDIO, { showAuthorizationError: !1 }),
    ec.A.hasPermission(eP.iL.CAMERA, { showAuthorizationError: !1 });
let tK = !1,
    t$ = new Set(),
    tz = tK,
    tq = new Set(),
    tZ = {},
    tX = null,
    tQ = null,
    tJ = !0,
    t0 = !1,
    t1 = new N.Ep(),
    t2 = !1,
    t3 = !1,
    t6 = !1,
    t4 = !1;
function t5(e) {
    return (0, z.p)({ location: e }).hdrCaptureMode;
}
async function t7() {
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
function t8() {
    return null != tY ? tY : "u" > typeof window ? (tY = t7().then((e) => ((tj = e), e))) : Promise.resolve(!1);
}
function t9() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eG.x.DEFAULT,
        t = ti[e];
    return null == t && ((t = tt()), (ti[e] = t)), t;
}
function ne() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eG.x.DEFAULT,
        t = t9(e),
        n = tn[t.activeInputProfile ?? eU.m.CUSTOM],
        r = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}) };
    if (
        (null == r.vadDuringPreProcess && (r.vadDuringPreProcess = (0, er.R)({ location: "getSettings" }).enabled),
        (null == r.vadKrispActivationThreshold && !0 === n.automaticGainControl) || !0 === t.automaticGainControl)
    ) {
        let e = (0, B.F)({ location: "getSettings" });
        null != e.vadKrispActivationThreshold && (r.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return { ...t, ...n, modeOptions: r };
}
function nt(e) {
    let t = ne(e.context),
        n = t.mode;
    e.context === eG.x.DEFAULT && (0, et.N)(!1, !1);
    let { showPTTSpeakingIndicator: r } = eh.A.getConfig({ location: "setInputMode" }),
        i = r && n === eM.TBI.PUSH_TO_TALK;
    e.setInputMode(n, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: !!i || t.modeOptions.autoThreshold,
        vadUseKrisp: (!!i || t.modeOptions.vadUseKrisp) && rv(),
        vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? eK,
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        vadDuringPreProcess: t.modeOptions.vadDuringPreProcess ?? !1,
        pttReleaseDelay: Math.round(t.modeOptions.delay),
    });
}
function nn(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eG.Hz;
    return E().clamp(e, 0, t);
}
function nr(e) {
    let t = ne(e.context),
        n = !ta || t.mute || t.deaf;
    e.context === eG.x.DEFAULT
        ? (n = n || th || tm || tE || !ec.A.didHavePermission(eP.iL.AUDIO))
        : e.context === eG.x.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eG.x.DEFAULT && b.A.updateNativeMute();
}
function ni(e) {
    e !== tl && (null != s && tr.setGoLiveSource(null, tl), (tl = e));
}
function ns() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tA,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
        n = s;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, eT.isWindows)() && O.c1(n.desktopSource.soundshareId),
            tr.setGoLiveSource(null, tl)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            tr.setGoLiveSource(null, tl),
        tA || e)
    ) {
        let t = ne().videoDeviceId;
        tA && t === eG.dx && tT === eG.dx && tI !== eG.qe ? (t = tI) : (tT = t),
            (tI = (tA = e) ? nN(tf, t) : eG.qe),
            tr.setVideoInputDevice(tI);
    }
    if (((s = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = t5("MediaEngineStore go live"),
                i = ne().videoHook,
                s = nf(),
                a = s ? (np() ? ex.zl : ex.eg) : 0,
                o = !1;
            (0, eT.isWindows)() &&
                a >= ex.zl &&
                (o =
                    !0 === tQ
                        ? ea.q.getConfig({ location: "updateVideo" }).enabled
                        : es.d.getConfig({ location: "updateVideo" }).enabled),
                tr.setGoLiveSource(
                    {
                        desktopDescription: {
                            id: t.desktopSource.id,
                            soundshareId: t.desktopSource.soundshareId,
                            useVideoHook: i,
                            useGraphicsCapture: s,
                            useGraphicsCaptureApiLevel: a,
                            useCaptureDeviceForEncode: (0, eT.isWindows)(),
                            useLoopback: r.getExperimentalSoundshare(),
                            useQuartzCapturer: !0,
                            allowScreenCaptureKit: nh(),
                            videoHookStaleFrameTimeoutMs: ez,
                            graphicsCaptureStaleFrameTimeoutMs: eq,
                            hdrCaptureMode: n,
                            enableGlobalFramePoolLock: (0, $.H)({ location: "updateVideo" }).enabled,
                            useGraphicsCaptureDirtyRegions: o,
                        },
                        quality: e,
                    },
                    tl,
                );
        }
        null != t.cameraSource &&
            tr.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: t.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: t.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                tl,
            );
    }
}
function na(e) {
    switch (e) {
        case eG.CO.CPU_OVERUSE:
            return k.B6.NoiseCancellerCpuOveruse;
        case eG.CO.FAILED:
            return k.B6.NoiseCancellerFailed;
        case eG.CO.VAD_CPU_OVERUSE:
            return k.B6.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function no() {
    null === tc &&
        tr
            .getCodecSurvey()
            .then((e) => {
                try {
                    let t = JSON.parse(e);
                    if (null == t || null == t.available_video_decoders) throw Error("decoder survey is not available");
                    tc = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                } catch (e) {
                    eV.error("Failed to parse codec survey", e), (tc = !1);
                }
            })
            .catch((e) => {
                eV.error("Failed to get codec survey", e), (tc = !1);
            })
            .finally(() => {
                C.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
            });
}
function nl(e) {
    let t = (0, B.F)({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function nu(e, t) {
    e.setAutomaticGainControl(nl(t));
}
function nc(e, t) {
    let n = (0, e_.A)(t, r.getSystemMicrophoneMode());
    n !== t && eV.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: i } = (0, B.F)({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(i);
    let { noiseCancellationAfterProcessing: s, vadAfterWebrtc: a } = (0, Q.$)({ location: "setNoiseCancellation" });
    e.setNoiseCancellationAfterProcessing(s), e.setVADAfterWebrtc(a);
}
function nd(e) {
    let t = ne(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eR.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eR.A.hasNoiseSuppression(n) || t.noiseSuppression),
        nu(e, eR.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        nc(e, t.noiseCancellation),
        e.setVoiceFilterId(tP),
        (0, eT.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function n_() {
    tp.start(eJ, () => {
        eV.error("Device enumeration timed out"), eg.default.track(eM.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
    }),
        tr.on(y.bg.Connection, (e) => {
            nt(e), nr(e), nd(e);
            let t = ne();
            e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
                e.setQoS(t.qos),
                (0, eT.isWindows)()
                    ? (e.setExperimentFlag(eG.fd.H265_HARDWARE_ONLY, !0),
                      t8().then((t) => {
                          e.setExperimentFlag(eG.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                      }),
                      (0, q.W)({ location: "setupMediaEngine" }).enabled &&
                          e.setExperimentFlag(eG.fd.H264_MF_ZERO_COPY, !0))
                    : (0, eT.isMac)() && e.setExperimentFlag(eG.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                (0, eT.isLinux)() &&
                    (0, J.b)({ location: "setupMediaEngine" }).enabled &&
                    t.openH264Enabled &&
                    e.setExperimentFlag(eG.fd.USE_LIBOPENH264_DECODER, !0);
            let n = eb.A.getGuildId(),
                {
                    muteBeforeProcessing: i,
                    pttBeforeProcessing: a,
                    skipEncode: o,
                } = (null != n ? W.A : Y.A).getCurrentConfig(
                    { location: "setupMediaEngine", guildId: n ?? void 0 },
                    { autoTrackExposure: !0 },
                );
            i && e.setExperimentFlag(eG.fd.MUTE_BEFORE_PROCESSING, !0),
                a && e.setExperimentFlag(eG.fd.PTT_BEFORE_PROCESSING, !0),
                o && e.setExperimentFlag(eG.fd.SKIP_ENCODE, !0),
                (0, ee.J)({ location: "setupMediaEngine" }).enabled &&
                    e.setExperimentFlag(eG.fd.LOW_LATENCY_RATE_CONTROL, !0);
            let l = !1,
                u = !0;
            e.setExperimentFlag(eG.fd.RESET_DECODER_ON_ERRORS, !0),
                l && e.setExperimentFlag(eG.fd.SOFTWARE_FALLBACK_ON_ERRORS, !0),
                u && e.setExperimentFlag(eG.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
            let { swallowVolumeOnlySpeakingEvents: c } = D.A.getConfig({ location: "MediaEngineStore" });
            if ((c && e.setExperimentFlag(eG.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === eG.x.STREAM)) {
                let t = nR(t_);
                e.setSoundshareDiscardRearChannels(t);
            }
            if ((0, eT.isWindows)())
                e.setExperimentFlag(eG.fd.SIGNAL_AV1, !0), e.setExperimentFlag(eG.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            else if ((0, eT.isMac)())
                if ((e.setExperimentFlag(eG.fd.SIGNAL_AV1_DECODE, !0), te())) {
                    let { enabled: t } = (0, j.t)("MediaEngineStore");
                    t
                        ? (eV.info("This Mac supports AV1 Hardware. AV1 Hardware enabled."),
                          e.setExperimentFlag(eG.fd.SIGNAL_AV1_HARDWARE_DECODE, !0))
                        : eV.info("This Mac supports AV1 Hardware. AV1 Hardware not yet enabled.");
                } else eV.info("This Mac does not support AV1 Hardware.");
            else if ((0, eT.isLinux)()) e.setExperimentFlag(eG.fd.SIGNAL_AV1_DECODE, !0);
            else if ((0, eT.isIOS)() && e7()) {
                let { enabled: t } = (0, H.$)("MediaEngineStore");
                t &&
                    (e.setExperimentFlag(eG.fd.SIGNAL_AV1_DECODE, !0),
                    e.setExperimentFlag(eG.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
            }
            if ((0, eT.isWeb)()) {
                let { enabled: t } = (0, K.O)("MediaEngineStore");
                e.setExperimentFlag(eG.fd.BROWSER_HEVC, t);
            }
            for (let n of ((0, eT.isWindows)() &&
                tX?.startsWith("AMD") &&
                (0, eo.F)("MediaEngineStore").enabled &&
                e.setExperimentFlag(eG.fd.WMF_GPU_ENCODE, !0),
            (0, eT.isWindows)() &&
                tX?.startsWith("Intel") &&
                (0, el.J)("MediaEngineStore").enabled &&
                e.setExperimentFlag(eG.fd.WMF_GPU_ENCODE, !0),
            (0, eT.isWindows)() &&
                tX?.startsWith("Qualcomm") &&
                (0, eo.F)("MediaEngineStore").enabled &&
                e.setExperimentFlag(eG.fd.WMF_GPU_ENCODE, !0),
            tr.setHasFullbandPerformance((0, P.A)()),
            e.setRemoteAudioHistory(1e3),
            (0, w.A)(r) && e.setClipsKeyFrameInterval(eG.X1),
            (t = ne(e.context)),
            e.setPostponeDecodeLevel(eX),
            Object.keys(t.localMutes)))
                n !== eN.default.getId() && e.setLocalMute(n, t.localMutes[n]);
            for (let n of Object.keys(t.localVolumes))
                n !== eN.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
            for (let n of Object.keys(t.localPans)) {
                let r = t.localPans[n];
                e.setLocalPan(n, r.left, r.right);
            }
            for (let n of Object.keys(t.disabledLocalVideos)) e.setLocalVideoDisabled(n, t.disabledLocalVideos[n]);
            e.on(y.yq.Speaking, (t, n, r, i) => {
                C.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: i });
            }),
                e.context === eG.x.DEFAULT &&
                    ((ty = !1),
                    e.on(y.yq.SpeakingWhileMuted, () => {
                        let e = !ty;
                        (ty = !0),
                            e && r.emitChange(),
                            tv.start(eQ, () => {
                                (ty = !1), r.emitChange();
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
                        eg.default.track(eM.HAw.VIDEOHOOK_INITIALIZED, {
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
                    eV.warn(`noisecancellererror event: ${e}`),
                        (0, k.QW)({ type: k.iy.NOISE_CANCELLER_ERROR, underlyingError: na(e) }),
                        (tV = !0),
                        eg.default.track(eM.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        C.h.dispatch({ type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: !0 }),
                        C.h.dispatch({ type: "AUDIO_SET_NOISE_CANCELLATION", enabled: !1 }),
                        C.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e });
                }),
                e.on(y.yq.VoiceActivityDetectorError, (e) => {
                    eV.warn(`voiceactivitydetectorerror event: ${e}`),
                        (0, k.QW)({ type: k.iy.NOISE_CANCELLER_ERROR, underlyingError: na(e) }),
                        eg.default.track(eM.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        C.h.dispatch({
                            type: "AUDIO_SET_MODE",
                            context: eG.x.DEFAULT,
                            mode: eM.TBI.VOICE_ACTIVITY,
                            options: { ...ne(eG.x.DEFAULT).modeOptions, vadUseKrisp: !1 },
                        }),
                        C.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e });
                }),
                e.on(y.yq.SdpError, (e, t, n, r) => {
                    eg.default.track(eM.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: r });
                }),
                e.on(y.yq.VideoState, (t) => {
                    C.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                }),
                e.setBitRate(eC.A.bitrate),
                e.applyVideoQualityMode(ew.A.mode),
                (0, eT.isWindows)() &&
                    tr.supports(eG.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                    tr.setAsyncVideoInputDeviceInit(!0);
        }),
        tr.on(y.bg.DeviceChange, (e, t, n) => {
            tp.stop(),
                C.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
        }),
        tr.on(y.bg.VolumeChange, (e, t) => {
            C.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
        }),
        tr.on(y.bg.DesktopSourceEnd, (e, t) => {
            C.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
        }),
        tr.on(y.bg.AudioPermission, (e) => {
            (tW = !0), C.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
        }),
        tr.on(y.bg.VideoPermission, (e) => {
            C.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
        }),
        tr.on(y.bg.WatchdogTimeout, async () => {
            let e;
            if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                try {
                    await eA.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                } catch (t) {
                    "number" == typeof t.status && (e = t.status);
                }
            eV.warn(`Watchdog timeout, report submission status: ${e ?? 200}`);
            let t = ei.A.getConfig({ location: "watchdog_timeout" }).enabled && null != R.A.processUtils.setCrashReason;
            eg.default.track(
                eM.HAw.VOICE_WATCHDOG_TIMEOUT,
                { minidump_submission_error: e, will_restart: t },
                { flush: !0 },
            ),
                t &&
                    (eV.info("Relaunching app due to voice watchdog timeout"),
                    await R.A.processUtils.setCrashReason("voice-watchdog-timeout"),
                    v.w.set("discord_watchdog_restart_timestamp", Date.now().toString()),
                    R.A.app.relaunch());
        }),
        tr.on(y.bg.VideoInputInitialized, (e) => {
            eg.default.track(eM.HAw.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired
                    ? null
                    : Math.round(e.timeToFirstFrame * eI.A.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: eb.A.getMediaSessionId(),
                rtc_connection_id: eb.A.getRTCConnectionId(),
            });
        }),
        tr.on(y.bg.AudioInputInitialized, (e) => {
            eg.default.track(eM.HAw.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * eI.A.Millis.SECOND),
                rtc_connection_id: eb.A.getRTCConnectionId(),
            });
        }),
        tr.on(y.bg.ClipsRecordingRestartNeeded, () => {
            C.h.dispatch({ type: "CLIPS_RESTART" });
        }),
        tr.on(y.bg.ClipsInitFailure, (e, t) => {
            C.h.wait(() => {
                C.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t });
            });
        }),
        tr.on(y.bg.ClipsRecordingEnded, (e, t) => {
            a?.desktopSource?.id === e && (null != t && s?.desktopSource?.soundshareId !== t && O.c1(t), (a = null));
        }),
        tr.on(y.bg.NativeScreenSharePickerUpdate, (e, t) => {
            C.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
        }),
        tr.on(y.bg.NativeScreenSharePickerCancel, (e) => {
            C.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
        }),
        tr.on(y.bg.NativeScreenSharePickerError, (e) => {
            C.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
        }),
        tr.on(y.bg.AudioDeviceModuleError, (e, t, n) => {
            eg.default.track(eM.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
        }),
        tr.on(y.bg.VideoCodecError, (e) => {
            let t = "encode" === e.mode ? k.iy.VIDEO_ENCODE_ERROR : k.iy.VIDEO_DECODE_ERROR,
                n = { videoCodec: e.codecStandard, errorMessage: e.message };
            (0, k.QW)(
                t === k.iy.VIDEO_ENCODE_ERROR
                    ? { type: t, ...n, videoEncoder: e.implName }
                    : { type: t, ...n, videoDecoder: e.implName },
            );
        }),
        tr.on(y.bg.ConnectionStats, (e) => {
            C.h.dispatch({
                type: "MEDIA_ENGINE_CONNECTION_STATS",
                connectionStats: e.map((e) => {
                    let { stats: t, connection: n } = e;
                    return {
                        stats: t,
                        mediaEngineConnectionId: n.mediaEngineConnectionId,
                        version: e4++,
                        context: n.context,
                    };
                }),
            });
        }),
        tr.on(y.bg.VoiceQueueMetrics, (e) => {
            let t = r9(e);
            null !== t && eg.default.track(eM.HAw.VOICE_QUEUE_METRICS, t);
        }),
        tr.setOnVideoContainerResized((e, t, n) => {
            C.h.wait(() =>
                C.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
            );
        }),
        e9(),
        rr(),
        rs(),
        o.reset(),
        (0, eD.w)().then((e) => {
            null != e && ((tX = e.gpu_brand), (tQ = e.has_intel_hybrid_igpu));
        }),
        tr.on(y.bg.SystemMicrophoneModeChange, (e) => {
            (f = e), tr.eachConnection(nd), r.emitChange();
        });
}
function nf() {
    return (0, eT.isWindows)() && T().satisfies(R.A?.os.release, ex.yg);
}
function np() {
    return (0, eT.isWindows)() && T().satisfies(R.A?.os.release, ex.fG);
}
function nh() {
    return (0, eT.isMac)() && tr.supports(eG.O5.SCREEN_CAPTURE_KIT) && T().satisfies(R.A?.os.release, ex.e);
}
function nm() {
    return (
        (0, eT.isWindows)() &&
        tr.supports(eG.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        tr.supports(eG.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nE() {
    return tr.supports(eG.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function ng() {
    let e = v.w.get("audio");
    null != e && (v.w.set(eB, { [eG.x.DEFAULT]: e }), v.w.remove("audio")),
        (ti = v.w.get(eB) ?? {}),
        E().each(ti, (e) => {
            E().defaultsDeep(e, tt()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, ev.OH)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== eH &&
                    ((e.vadUseKrispSettingVersion = eH), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                e.vadThrehsoldMigrated ||
                    ((e.vadThrehsoldMigrated = !0), e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = eZ)),
                tr.supports(eG.O5.SIDECHAIN_COMPRESSION) &&
                    e.sidechainCompressionSettingVersion < eW &&
                    ((e.sidechainCompressionSettingVersion = eW), (e.sidechainCompression = !0)),
                (0, eT.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== eY &&
                      ((e.ncUseKrispjsSettingVersion = eY), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== ej &&
                      ((e.ncUseKrispSettingVersion = ej), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
        }),
        nT();
}
function nA(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eG.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = t9(t);
    return Object.assign(r, e), !__OVERLAY__ && n && v.w.set(eB, ti), r;
}
function nI() {
    v.w.remove(eB), location.reload();
}
function nT() {
    let e = ne();
    tr.setAudioInputDevice(e.inputDeviceId),
        tr.setAudioOutputDevice(e.outputDeviceId),
        ns(),
        tr.setInputVolume(e.inputVolume),
        tr.setOutputVolume(e.outputVolume),
        tr.setAecDump(e.aecDumpEnabled),
        tr.setSidechainCompression(e.sidechainCompression),
        tr.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        tr.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        ey.Ay?.setOpenH264Enabled?.(e.openH264Enabled);
}
function nS() {
    ta || tr.enable().then(() => C.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function ny(e) {
    return { id: eG.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
}
function nv(e, t) {
    if (0 === e.length) {
        let e = ny(t);
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
function nN(e, t) {
    let n = e[t] ?? e[eG.dx] ?? E()(e).values().first();
    return null != n ? n.id : t;
}
function nC(e) {
    let t = td;
    if (((td = nv(e, eF.intl.string(eF.t["/QIjDA"]))), !E().isEqual(td, t))) {
        let e = ne(),
            t = nN(td, e.inputDeviceId);
        tr.setAudioInputDevice(t), tr.eachConnection(nd);
    }
}
function nR(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nO(e) {
    tr.eachConnection((t) => {
        t.context === eG.x.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function nb(e) {
    let t = t_;
    if (((t_ = nv(e, eF.intl.string(eF.t.xlUg0v))), !E().isEqual(t_, t))) {
        let e = ne(),
            n = nN(t_, e.outputDeviceId);
        tr.setAudioOutputDevice(n);
        let r = nR(t),
            i = nR(t_);
        r !== i && nO(i);
    }
}
function nD(e) {
    tC = e.length > 0;
    let t = tf;
    if (((tf = nv(e, eF.intl.string(eF.t.WKWARY))), tA && !E().isEqual(tf, t))) {
        let e = void 0 !== tf[tI],
            n = tI === eG.dx && t[eG.dx]?.disabled,
            r = "Firefox" === A().name && "" === tI && t[tI]?.name === "Default" && !t[tI]?.disabled;
        ns(e || n || r);
    }
}
function nL() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = ep.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let r = n === ek.W.USER ? eG.x.DEFAULT : eG.x.STREAM,
            i = r === eG.x.STREAM ? eG.Cn : eG.Hz,
            s = t[n] ?? {},
            { localMutes: a, localVolumes: o } = ne(r);
        for (let [e, t] of Object.entries(s))
            null == (0, ef.tM)(r, e) &&
                (t.muted ? (a[e] = !0) : delete a[e],
                t.volume !== i ? (o[e] = t.volume) : delete o[e],
                tr.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, r));
        if (e)
            for (let e of new Set([...Object.keys(a), ...Object.keys(o)]))
                null == s[e] &&
                    (delete a[e],
                    delete o[e],
                    tr.eachConnection((t) => {
                        t.setLocalVolume(e, i), t.setLocalMute(e, !1);
                    }, r));
        nA({ localMutes: a, localVolumes: o }, r);
    }
}
function nw(e) {
    if (null == r)
        return (
            eV.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
            { soundshareId: null, soundshareSession: "" }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : eA.A.getAudioPid(e),
            n = "";
        return null != t && (n = eA.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n };
    }
}
function nM(e, t) {
    (0, eT.isWindows)() &&
        e > 1 &&
        O.GH(e, { soundshare_session: t }).then((t) => {
            null == t ||
                F.Ay.shouldContinueWithoutElevatedProcessForPID(e) ||
                C.h.wait(() => {
                    C.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: t });
                });
        });
}
function nx(e) {
    (i = e.sessionId), (th = !1), (tg = !1);
    let t = ne();
    nm() && (nE() ? rk(eG.rB.AUTOMATIC) : t.automaticAudioSubsystem && rU()),
        tr.supports(eG.O5.OFFLOAD_ADM_CONTROLS) && tr.setOffloadAdmControls(!0),
        (0, eT.isIOS)() &&
            (0, Z.Y)("handleConnectionOpen").enabled &&
            tr.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
        (0, em.Lb)({ location: "MediaEngineStore", autoTrackExposure: !1 }) &&
            null !== t.mostRecentlyRequestedVoiceFilter &&
            (0, eT.isDesktop)() &&
            (eE.A.getLastInitAttemptMayHaveCrashed()
                ? (C.h.dispatch({ type: "AUDIO_SET_SELF_MUTE", mute: !0, context: eG.x.DEFAULT, playSoundEffect: !0 }),
                  nA({ mostRecentlyRequestedVoiceFilter: null }))
                : n(342887).md()),
        nL();
}
function nP(e) {
    let { mediaEngineState: t } = e;
    (ti = t.settingsByContext),
        (td = t.inputDevices),
        (t_ = t.outputDevices),
        (tZ = t.appSupported),
        (tw = t.krispModuleLoaded),
        (c = t.krispVersion),
        (tl = t.goLiveContext);
}
function nk() {
    i = null;
}
function nU() {
    return (0, eT.isWeb)() && r.startDavePreload(), !1;
}
function nG(e) {
    switch (e.state) {
        case eM.S7L.CONNECTING:
            nS();
            break;
        case eM.S7L.RTC_CONNECTING:
            (tO = !1), (l = void 0), (u = void 0), (tR = !1), (t0 = !1), t1.stop(), tb.stop(), o.reset();
            break;
        case eM.S7L.RTC_CONNECTED:
            ns();
            break;
        case eM.S7L.DISCONNECTED:
            n$(), nz();
    }
}
function nF(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (th = t.mute || t.suppress), (tg = t.deaf), tr.eachConnection(nr);
            let e = null != t.guildId && null != t.channelId && null != tF && tF !== t.channelId,
                n = !tD && null == t.channelId;
            return ns(!e && !n && tA), (tF = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== eN.default.getId() || null != eb.A.getChannelId() || ns(!1, null), e;
    }, !1);
}
function nV(e) {
    let { mute: t } = e;
    (tm = t), tr.eachConnection(nr);
}
function nB(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = ne(t);
    if (t === eG.x.DEFAULT && (ec.A.requestPermission(eP.iL.AUDIO), tE)) return !1;
    (r = !i && !r) || (i = !1), n || (tS = !0), nA({ mute: r, deaf: i }, t), tr.eachConnection(nr);
}
function nH(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    nA({ mute: n }, t), r || (tS = !0), tr.eachConnection(nr);
}
function nj(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== ek.oD.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    nL(!0);
}
function nY(e) {
    let { context: t } = e;
    nA({ deaf: !ne(t).deaf }, t), tr.eachConnection(nr);
}
function nW(e) {
    let { context: t, userId: n } = e;
    if (n === eN.default.getId()) return;
    let { localMutes: r } = ne(t);
    r[n] ? delete r[n] : (r[n] = !0),
        nA({ localMutes: r }, t),
        tr.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nK(e) {
    let { context: t, userId: n, videoToggleState: r, persist: i, isAutomatic: s } = e;
    h()(!(i && s), "These are not allowed to both be true.");
    let a = r === eM.bb8.DISABLED,
        { disabledLocalVideos: o } = ne(t),
        l = o[n] ?? !1,
        u = t$.has(n),
        c = r === eM.bb8.AUTO_ENABLED || r === eM.bb8.MANUAL_ENABLED;
    eV.info(`disableVideo=${a} currentlyDisabled=${l} currentlyAutoDisabled=${u}, isVideoShown=${c}`),
        h()(!(u && !l), "If you are auto-disabled, then you are also disabled.");
    let d = a !== l,
        _ = t === eG.x.DEFAULT,
        f = s && d && _,
        p = i && d && _;
    eV.info(`changed=${d} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${f} isManualToggleByUser=${p}`);
    let { videoToggleStateMap: m } = ne(t);
    if (
        (m[n] === eM.bb8.AUTO_PROBING &&
            r === eM.bb8.AUTO_ENABLED &&
            (0, eu.A)(n, a ? eG.Al.AUTO_DISABLE : eG.Al.AUTO_ENABLE, c),
        (m[n] = r),
        nA({ videoToggleStateMap: m }, t, i),
        r === eM.bb8.AUTO_PROBING
            ? eb.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
            : eb.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
        tz ||
            (eV.info(`isAutoDisableAllowed=${tz} - disabling VideoHealthManager`),
            eb.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
        f)
    ) {
        if ((!a && !u) || (a && !tz)) return;
        (0, eu.A)(n, a ? eG.Al.AUTO_DISABLE : eG.Al.AUTO_ENABLE, c), a ? t$.add(n) : t$.delete(n);
    } else
        p &&
            (u && !a
                ? (eV.info("disallowing auto-disable for this session because of manual override by user"),
                  (tz = !1),
                  eb.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                  (0, eu.A)(n, eG.Al.MANUAL_REENABLE, c))
                : (0, eu.A)(n, a ? eG.Al.MANUAL_DISABLE : eG.Al.MANUAL_ENABLE, c));
    _ && !a && t$.delete(n),
        a ? (o[n] = !0) : delete o[n],
        nA({ disabledLocalVideos: o }, t, i),
        tr.eachConnection((e) => e.setLocalVideoDisabled(n, o[n] ?? !1), t);
}
function n$() {
    if (0 === t$.size) return;
    let e = eG.x.DEFAULT,
        { disabledLocalVideos: t } = ne(e);
    t$.forEach((n) => {
        h()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            tr.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        t$.clear(),
        nA({ disabledLocalVideos: t }, e, !1);
}
function nz() {
    let e = eG.x.DEFAULT,
        { videoToggleStateMap: t } = ne(e);
    for (let [e, n] of Object.entries(t)) n === eM.bb8.AUTO_PROBING && delete t[e];
    nA({ videoToggleStateMap: t }, e, !1);
}
function nq(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === eN.default.getId()) return;
    let i = t === eG.x.STREAM ? eG.Cn : eG.Hz,
        { localVolumes: s } = ne(t);
    r === i ? delete s[n] : (s[n] = r), nA({ localVolumes: s }, t), tr.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function nZ(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: s } = ne(t);
    (s[n] = { left: r, right: i }), nA({ localPans: s }, t), tr.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function nX(e) {
    let { context: t, mode: n, options: r } = e;
    nA({ mode: n, modeOptions: { ...r, updatedAt: Date.now() } }, t), tr.eachConnection(nt);
}
function nQ(e) {
    let { volume: t } = e;
    nA({ inputVolume: nn(t) }), tr.setInputVolume(t);
}
function nJ(e) {
    let { volume: t } = e;
    nA({ outputVolume: t }), tr.setOutputVolume(t);
}
function n0(e) {
    let { id: t } = e;
    (t = nN(td, t)),
        (tu = performance.now()),
        nA({ inputDeviceId: t }),
        tr.setAudioInputDevice(t),
        tr.eachConnection(nd),
        (l = void 0),
        (u = void 0),
        t1.stop(),
        (t0 = !1);
    let { resetSilenceWarningOnDeviceChange: n } = en.A.getConfig({
        location: "MediaEngineStore.handleSetInputDevice",
    });
    n && ((tR = !1), o.reset());
}
function n1(e) {
    let { id: t } = e;
    nA({ outputDeviceId: (t = nN(t_, t)) }), tr.setAudioOutputDevice(t);
}
function n2(e) {
    let { id: t } = e;
    nA({ videoDeviceId: (t = nN(tf, t)) }), ns();
}
function n3(e) {
    let { inputProfile: t } = e;
    nA({ activeInputProfile: t });
    let n = ne();
    tr.eachConnection((e) => {
        nt(e), nd(e);
    }),
        tr.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        ri();
}
function n6(e) {
    return to !== e.required && ((to = e.required), e.required || tr.interact(), !0);
}
function n4(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    nC(t), nb(n), nD(r);
}
function n5(e) {
    let { inputVolume: t, outputVolume: n } = e;
    nA({ inputVolume: nn(t), outputVolume: n });
}
function n7(e) {
    let t = ne(),
        n = tr.getAudioSubsystem(),
        i = tr.getAudioLayer(),
        s = nN(td, t.inputDeviceId),
        a = td[s]?.name,
        o = (0, e_.A)(t.noiseCancellation, r.getSystemMicrophoneMode());
    eg.default.track(eM.HAw.VOICE_PROCESSING, {
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
function n8(e) {
    let t = nA({ echoCancellation: e.enabled });
    tr.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), ri(), n7(e.location);
}
function n9(e) {
    rt(e.enabled);
}
function re(e) {
    let t = nA({ sidechainCompressionStrength: e.strength });
    tr.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function rt(e) {
    let t = nA({ sidechainCompression: e });
    tr.setSidechainCompression(t.sidechainCompression);
}
function rn(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tq.add(n) : tq.delete(n), rr(), ri();
}
function rr() {
    let e = !tq.has("voice_filter_preview") && !tq.has("mic_test");
    tr.setMaybePreprocessMute(e);
}
function ri() {
    let e = ne(),
        t = tq.size > 0,
        n = e.inputDeviceId,
        r = eR.A.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        s = eR.A.hasNoiseSuppression(n) || e.noiseSuppression,
        a = nl(eR.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        o = e.noiseCancellation,
        l = null !== tP,
        u = tq.has("voice_filter") && 1 === tq.size;
    tr.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: s,
        automaticGainControlConfig: a,
        noiseCancellation: o,
        voiceFilters: l,
        loopbackUseAudioMode: u,
    });
}
async function rs() {
    if (!tr.supports(eG.O5.VAAPI)) return;
    let e = 4098;
    if (window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let t = await window.DiscordNative.processUtils.getSystemInfo();
    (t.electronGPUInfo?.gpuDevice ?? []).some((t) => t.vendorId === e) &&
        ((t6 = !0), (t3 = tr.supports(eG.O5.GAMESCOPE_CAPTURE)));
}
function ra(e) {
    let t = nA({ noiseSuppression: e.enabled });
    tr.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), ri(), n7(e.location);
}
function ro(e) {
    let t = nA({ automaticGainControl: e.enabled });
    tr.eachConnection((e) => nu(e, t.automaticGainControl)), ri(), n7(e.location);
}
function rl(e) {
    let t = nA({ noiseCancellation: e.enabled });
    tr.eachConnection((e) => nc(e, t.noiseCancellation)), ri(), n7(e.location);
}
function ru(e) {
    ed.A.setKrispModelOverride(e.model), (_ = e.model), ri();
}
function rc(e) {
    (0, eT.isWeb)() || ((tx = e.enabled), tr.setNoiseCancellationEnableStats?.(e.enabled));
}
function rd(e) {
    nA({ silenceWarning: e.enabled });
}
function r_(e) {
    tr.setDebugLogging(e.enabled);
}
function rf(e) {
    let { level: t } = e;
    (d = t), ed.A.setKrispSuppressionLevel(t);
}
function rp(e) {
    nA({ videoHook: e.enabled });
}
function rh(e) {
    nA({ experimentalSoundshare2: e.enabled });
}
function rm(e) {
    let { enabled: t } = e;
    nA({ useSystemScreensharePicker: t });
}
function rE(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = nA({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r });
    tr.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function rg(e) {
    let { enabled: t } = e;
    nA({ qos: t }), tr.eachConnection((e) => e.setQoS(t));
}
function rA() {
    nI();
}
function rI(e) {
    let { osVolume: t, osMuted: n } = e;
    (u = t), (l = n);
}
function rT(e) {
    let { inputDetected: t } = e;
    if (null == t) return !1;
    if (((tO = !0 !== tR && !t), t)) (tR = !0), (t0 = !1), t1.stop(), tb.stop();
    else if (ne().mode === eM.TBI.VOICE_ACTIVITY && tR) {
        let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = en.A.getConfig({
            location: "MediaEngineStore.handleInputDetected",
        });
        e &&
            t1.start(e0, () => {
                eg.default.track(eM.HAw.HARDWARE_MUTE_GUESSED, {
                    input_device_name: td[nN(td, ne().inputDeviceId)]?.name,
                    rtc_connection_id: eb.A.getRTCConnectionId(),
                }),
                    (t0 = !0),
                    r.emitChange();
            }),
            null != t &&
                tb.start(t * eI.A.Millis.MINUTE, () => {
                    (tR = !1), o.reset();
                });
    }
}
function rS(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === tE) return !1;
    (tE = n), tr.eachConnection(nr);
}
function ry(e) {
    let { state: t, permissionType: n } = e,
        r = t === eP.hL.ACCEPTED;
    switch (n) {
        case eP.iL.AUDIO:
            (tW = !0), tr.eachConnection(nr);
            break;
        case eP.iL.CAMERA:
            !r && tA && ns(!1);
            break;
        default:
            return !1;
    }
}
function rv() {
    return tw || !1;
}
async function rN() {
    try {
        await ey.Ay.ensureModule("discord_krisp");
        let e = ey.Ay.requireModule("discord_krisp");
        (tw = !0),
            (c = e.getSdkVersion?.()),
            (d = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (tM = e), r.emitChange();
            }),
            r.emitChange();
    } catch (t) {
        eV.warn(`Failed to load Krisp module: ${t.message}`), eS.A.captureException(t);
        let e = eG.CO.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eG.CO.INITIALIZED : n;
        }
        eg.default.track(eM.HAw.VOICE_PROCESSING, { noise_canceller_error: e }), nA({ noiseCancellation: !1 });
    } finally {
        tL = !1;
    }
}
function rC() {
    return (0, eT.isWindows)() || (0, eT.isLinux)() || (0, eT.isMac)();
}
function rR() {
    !rC() || __OVERLAY__ || tL || tw
        ? (0, eT.isWeb)() && tr.supports(eG.O5.NOISE_CANCELLATION)
            ? ((tw = !0), r.emitChange())
            : (0, eT.isWeb)() && nA({ noiseCancellation: !1 })
        : ((tL = !0), rN());
}
async function rO() {
    try {
        let e,
            t = "",
            n = !1,
            r = URL.parse(e3);
        if (null === r) return void eV.log("OpenH264 URL ", r, " is invalid");
        let i = r.pathname.split("/"),
            s = i[i.length - 1].replace(".bz2", "");
        try {
            let t = await ey.Ay.downloadOpenH264(e3, s, e6, (e) => {
                eV.log("OpenH264 download status", e);
            });
            eV.log("OpenH264 is ready", t), (n = t.fetchedFromNetwork), (e = !0);
        } catch (n) {
            eV.error("OpenH264 download failed", n), (t = n.message), (e = !1);
        }
        if (
            (eg.default.track(eM.HAw.VIDEO_OPENH264_DOWNLOADED, {
                success: e,
                fetched_from_network: n,
                error_message: t,
            }),
            e)
        ) {
            let e = await ey.Ay.cleanupUnusedOpenH264Files([s]);
            eV.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        eV.error("OpenH264 download failed", e);
    }
}
function rb() {
    (0, eT.isLinux)() && rO();
}
function rD(e) {
    let { enabled: t } = e;
    eg.default.track(eM.HAw.VOICE_FILTER_PLAYBACK_TOGGLED, { active_voice_filter_id: tP ?? null, enabled: t }),
        nA({ voiceFilterPlaybackEnabled: t });
}
function rL(e) {
    let { newVoiceFilterId: t } = e;
    nA({ mostRecentlyRequestedVoiceFilter: t }), tr.eachConnection((e) => e.setVoiceFilterId(t));
}
function rw() {
    nA({ mostRecentlyRequestedVoiceFilter: null });
}
function rM(e) {
    let { voiceFilterId: t } = e;
    (tU = tP), (tG = tk), (tP = t), (tk = null === t ? null : Date.now());
}
function rx(e) {
    let t = e.bypassEnabled;
    nA({ bypassSystemInputProcessing: t }), tr.setAudioInputBypassSystemProcessing(t), n7(e.location);
}
function rP(e) {
    rk(e.subsystem);
}
function rk(e) {
    e === eG.rB.AUTOMATIC
        ? (nA({ automaticAudioSubsystem: !0 }), rU())
        : (nA({ automaticAudioSubsystem: !1 }), tr.setAudioSubsystem(e));
}
function rU() {
    tr.queueAudioSubsystem(eG.rB.EXPERIMENTAL);
}
function rG(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && ns(i, null), null != t || null == n)) {
        tD = !1;
        return;
    }
    if (tD) return;
    tD = !0;
    let s = ne();
    (s.mute || s.deaf) && (nA({ deaf: !1, mute: !1 }), tr.eachConnection(nr));
}
function rF(e) {
    let { application: t } = e;
    ts.add(t.id);
}
function rV(e) {
    let { application: t } = e;
    ts.delete(t.id);
}
function rB(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (ta = !1), tr.eachConnection(nr);
                break;
            case "video":
                ns(!1);
        }
}
function rH(e) {
    (ta = e.enabled), e.unmute && nA({ mute: !1, deaf: !1 }), tr.eachConnection(nr);
}
function rj(e) {
    let { enabled: t } = e;
    ec.A.requestPermission(eP.iL.CAMERA), ns(t);
}
function rY(e) {
    let { sourceId: t, applicationName: n, quality: i } = e;
    if (!(0, M.Ao)() || null == R.A) return !1;
    let s = null,
        o = null,
        l = eA.A.getPidFromDesktopSource(t);
    ({ soundshareId: s, soundshareSession: o } = nw(l));
    let u = { desktopSource: { id: t, sourcePid: l, soundshareId: s, soundshareSession: o }, quality: i };
    null != a &&
        (tr.setClipsSource(null),
        (0, eT.isWindows)() && null != a.desktopSource.soundshareId && O.c1(a.desktopSource.soundshareId)),
        null != s && nM(s, o),
        (a = u);
    let c = t5("MediaEngineStore clips"),
        d = ne().videoHook;
    tr.setClipsSource({
        desktopDescription: {
            id: a.desktopSource.id,
            soundshareId: a.desktopSource.soundshareId,
            useVideoHook: d,
            useGraphicsCapture: nf(),
            useCaptureDeviceForEncode: !1,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: nh(),
            videoHookStaleFrameTimeoutMs: ez,
            graphicsCaptureStaleFrameTimeoutMs: eq,
            hdrCaptureMode: c,
        },
        quality: i,
        applicationName: n,
    });
}
function rW(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((a = null), tr.setClipsSource(null));
}
function rK(e) {
    let { settings: t } = e;
    if (t?.desktopSettings != null) {
        let e = null,
            n = null,
            { sourceId: r, sound: i } = t.desktopSettings,
            s = t.context ?? eG.x.DEFAULT,
            a = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
            o = !1 === i ? null : eA.A.getPidFromDesktopSource(r);
        eT.isPlatformEmbedded &&
            !0 === i &&
            (({ soundshareId: e, soundshareSession: n } = nw(o)), null != e && nM(e, n)),
            ni(s),
            ns(s === eG.x.STREAM && tA, {
                desktopSource: { id: r, sourcePid: o, soundshareId: e, soundshareSession: n },
                quality: { resolution: a.resolution, frameRate: a.frameRate },
            });
    } else if (t?.cameraSettings != null) {
        let e = t.context ?? eG.x.DEFAULT,
            { videoDeviceGuid: n, audioDeviceGuid: r } = t.cameraSettings,
            i = e === eG.x.STREAM && tA,
            s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
        ns(i, {
            cameraSource: { videoDeviceGuid: n, audioDeviceGuid: r },
            quality: { resolution: s.resolution, frameRate: s.frameRate },
        });
    } else ns(tA, null);
}
function r$(e) {
    let { section: t } = e;
    return t === eM.nc_.VOICE && nS(), !1;
}
function rz() {
    return tr.eachConnection(nd), !1;
}
function rq(e) {
    let { enabled: t } = e,
        n = nA({ aecDumpEnabled: t });
    tr.setAecDump(n.aecDumpEnabled);
}
function rZ(e) {
    let { enabled: t } = e;
    nA({ openH264Enabled: t }), ey.Ay?.setOpenH264Enabled?.(t);
}
function rX(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (ti = Object.values(eG.x).reduce((e, n) => {
        let r = n,
            i = tt();
        return (e[r] = E().merge(i, t[r])), e;
    }, {})),
        v.w.set(eB, ti),
        nT();
}
function rQ(e) {
    let { state: t } = e,
        n = G.A.isEnabled();
    if (t === eM.g6G.BACKGROUND && tA && !n) (tN = !0), ns(!1);
    else {
        if (t !== eM.g6G.ACTIVE || !tN) return !1;
        (tN = !1), ns(!0);
    }
    return !0;
}
function rJ(e) {
    tr.eachConnection((t) => t.setBitRate(e.bitrate));
}
function r0() {
    if ((!tA && null == s) || null != eb.A.getRTCConnectionId()) return !1;
    ns(!1, null);
}
function r1() {
    return !!tV && ((tV = !1), !0);
}
function r2(e) {
    tr.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function r3(e) {
    let { settings: t } = e;
    tr.applyMediaFilterSettings(t).finally(() => {
        (tB = !1), r.emitChange();
    });
}
function r6() {
    tB = !0;
}
function r4() {
    tB = !1;
}
function r5(e) {
    tJ = e.enabled;
}
function r7() {
    if ((0, eT.isDesktop)() && eT.isPlatformEmbedded && !t4) {
        t4 = !0;
        let e = async () => {
            let t = await new Promise((e) => {
                ey.Ay.pollQueueMetrics((t) => {
                    e(t);
                });
            });
            t.periodMs = eG.tl;
            let n = r9(t);
            null !== n && eg.default.track(eM.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, eG.tl);
        };
        setTimeout(e, eG.tl);
    }
}
class r8 extends S.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        n_(),
            ng(),
            rR(),
            rb(),
            nz(),
            r7(),
            (0, eT.isWindows)() && eT.isPlatformEmbedded && no(),
            (tZ = {
                [eG.O5.VIDEO]: tr.supports(eG.O5.VIDEO),
                [eG.O5.DESKTOP_CAPTURE]: tr.supports(eG.O5.DESKTOP_CAPTURE),
                [eG.O5.HYBRID_VIDEO]: tr.supports(eG.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eN.default, eC.A, eR.A, eO.A, L.A, U.A, eb.A, F.Ay, ep.A, eL.default, ew.A, eE.A);
    }
    supports(e) {
        return tr.supports(e);
    }
    supportsInApp(e) {
        return tZ[e] || tr.supports(e);
    }
    isSupported() {
        return tr.supported();
    }
    isNoiseSuppressionSupported() {
        return tr.supports(eG.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return rv();
    }
    isNoiseCancellationError() {
        return tV;
    }
    isAutomaticGainControlSupported() {
        return tr.supports(eG.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nE() && (tr.supports(eG.O5.LEGACY_AUDIO_SUBSYSTEM) || tr.supports(eG.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return tr.supports(eG.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === tr.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return rv();
    }
    isAecDumpSupported() {
        return tr.supports(eG.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return tr.supports(eG.O5.VIDEO) && tr.supports(eG.O5.SIMULCAST);
    }
    getAecDump() {
        return ne().aecDumpEnabled;
    }
    getMediaEngine() {
        return tr;
    }
    getVideoComponent() {
        return tr.Video;
    }
    getCameraComponent() {
        return tr.Camera;
    }
    getKrispSuppressionLevel() {
        return d ?? 100;
    }
    getKrispEnableStats() {
        return tx;
    }
    isEnabled() {
        return ta;
    }
    isMute() {
        return this.isSelfMute() || th;
    }
    isDeaf() {
        return this.isSelfDeaf() || tg;
    }
    hasContext(e) {
        return null != ti[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eG.x.DEFAULT;
        return e === eG.x.DEFAULT && tm;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eG.x.DEFAULT;
        return (
            !this.isEnabled() ||
            ne(e).mute ||
            !ec.A.didHavePermission(eP.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eG.x.DEFAULT && tE)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tS;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tS = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eG.x.DEFAULT,
            t = t0 && "voice_isolation" !== this.getSystemMicrophoneMode() && ne(e).mode === eM.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (eR.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return tJ;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eG.x.DEFAULT;
        return !this.isSupported() || ne(e).deaf;
    }
    isVideoEnabled() {
        return tA && tC;
    }
    isVideoAvailable() {
        return Object.values(tf).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return tC;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eG.x.STREAM;
        return tl === e && null != s;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eG.x.STREAM;
        return tl === e && null != s && s.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eG.x.DEFAULT;
        return e !== eN.default.getId() && (ne(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return tr.supports(eG.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eG.x.DEFAULT;
        return ne(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eG.x.DEFAULT;
        return ne(t).videoToggleStateMap[e] ?? eM.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eG.x.DEFAULT;
        return t === eG.x.DEFAULT && t$.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eG.x.DEFAULT;
        return e === eG.x.DEFAULT && t$.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tB;
    }
    isNativeAudioPermissionReady() {
        return tW;
    }
    getGoLiveSource() {
        return s;
    }
    getGoLiveContext() {
        return tl;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return tu;
    }
    isH264MfDecodeAvailable() {
        return tc;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eG.x.DEFAULT,
            n = ne(t).localPans[e];
        return null != n ? n : e$;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eG.x.DEFAULT,
            n = t === eG.x.STREAM ? eG.Cn : eG.Hz,
            r = ne(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return ne().inputVolume;
    }
    getOutputVolume() {
        return ne().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eG.x.DEFAULT;
        return ne(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eG.x.DEFAULT;
        return ne(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return tP;
    }
    getActiveVoiceFilterAppliedAt() {
        return tk;
    }
    getPreviousVoiceFilter() {
        return tU;
    }
    getPreviousVoiceFilterAppliedAt() {
        return tG;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return ne().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return ne().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            E().each(ti, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === eM.TBI.PUSH_TO_TALK && ts.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nN(td, ne().inputDeviceId);
    }
    getOutputDeviceId() {
        return nN(t_, ne().outputDeviceId);
    }
    getVideoDeviceId() {
        return nN(tf, ne().videoDeviceId);
    }
    getInputDevices() {
        return td;
    }
    getOutputDevices() {
        return t_;
    }
    getVideoDevices() {
        return tf;
    }
    getEchoCancellation() {
        let e = ne();
        return eR.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return tr.supports(eG.O5.SIDECHAIN_COMPRESSION) && ne().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return ne().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return ne().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tj && tj;
    }
    getOpenH264Enabled() {
        return (0, eT.isLinux)() && ne().openH264Enabled;
    }
    getLoopback() {
        return tq.size > 0;
    }
    getLoopbackReasons() {
        return tq;
    }
    getNoiseSuppression() {
        let e = ne();
        return eR.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = ne();
        return eR.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return ne().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return ne().noiseCancellation;
    }
    getHardwareEncoding() {
        return e1;
    }
    getEnableSilenceWarning() {
        return ne().silenceWarning;
    }
    getDebugLogging() {
        return tr.getDebugLogging();
    }
    getQoS() {
        return ne().qos;
    }
    getAttenuation() {
        return ne().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return ne().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return ne().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return nm() && ne().automaticAudioSubsystem ? eG.rB.AUTOMATIC : tr.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return tr.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return ne().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eU.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eG.x.DEFAULT;
        return ne(e);
    }
    getState() {
        return {
            settingsByContext: ti,
            inputDevices: td,
            outputDevices: t_,
            appSupported: tZ,
            krispModuleLoaded: tw,
            krispVersion: c,
            krispSuppressionLevel: d,
            goLiveSource: s,
            goLiveContext: tl,
        };
    }
    getInputDetectedThisConnection() {
        return tR;
    }
    getInputDetected() {
        return o.inputDetected;
    }
    getLastInputDetectedUpdateTime() {
        return o.lastUpdateTime;
    }
    getNoInputDetectedNotice() {
        return tO;
    }
    getInputDeviceOSMuted() {
        return l;
    }
    getInputDeviceOSVolume() {
        return u;
    }
    getPacketDelay() {
        return eT.isPlatformEmbedded || this.getMode() !== eM.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        tr.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return to;
    }
    getVideoHook() {
        return ne().videoHook;
    }
    supportsVideoHook() {
        return tr.supports(eG.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = ne().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return tr.supports(eG.O5.EXPERIMENTAL_SOUNDSHARE) && T().satisfies(R.A?.os.release, ex.$x);
    }
    supportsHookSoundshare() {
        return (0, eT.isWindows)() && tr.supports(eG.O5.SOUNDSHARE) && T().satisfies(R.A?.os.release, ex.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = ne().useSystemScreensharePicker,
            n = (0, eT.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return tr.supports(eG.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return t6;
    }
    getUseGamescopeCapture() {
        return t3;
    }
    getSpeakingWhileMuted() {
        return ty;
    }
    getKrispModelOverride() {
        return _;
    }
    getKrispModels() {
        return tM;
    }
    getKrispVadActivationThreshold() {
        return ne().modeOptions.vadKrispActivationThreshold ?? eK;
    }
    hasActiveCallKitCall() {
        return t2;
    }
    setHasActiveCallKitCall(e) {
        t2 = e;
    }
    supportsScreenSoundshare() {
        return (0, eT.isMac)()
            ? tr.supports(eG.O5.SOUNDSHARE) && T().satisfies(R.A?.os.release, ex.P$) && nh()
            : (0, eT.isWindows)()
              ? tr.supports(eG.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, eT.isLinux)() && tr.supports(eG.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        return (0, eT.isWindows)()
            ? this.getInputDevices()[this.getInputDeviceId()]?.effects?.find((e) => e === e2)
            : (0, eT.isMac)() || (0, eT.isIOS)()
              ? f
              : void 0;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eG.x.DEFAULT,
            t = this.supports(eG.O5.VIDEO)
                ? [{ rid: "100", type: e === eG.x.DEFAULT ? eG.mI.VIDEO : eG.mI.SCREEN, quality: eG.Y4 }]
                : [];
        return (
            this.isSimulcastSupported() &&
                e === eG.x.DEFAULT &&
                t.push({ rid: "50", type: eG.mI.VIDEO, quality: eG.Cl }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: (0, eT.isWeb)() };
        return tr.fetchAsyncResources(e);
    }
    startDavePreload() {
        if (!tH && ((tH = !0), (0, eT.isWeb)())) {
            let e = { fetchDave: !0 };
            tr.fetchAsyncResources(e).catch((e) => {
                eV.warn("DAVE preload failed:", e), eS.A.captureException(e);
            });
        }
    }
    getSupportedSecureFramesProtocolVersion() {
        return tr.getSupportedSecureFramesProtocolVersion();
    }
    hasClipsSource() {
        return null != a;
    }
    getGpuBrand() {
        return tX;
    }
}
function r9(e) {
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
(r = new r8(C.h, {
    VOICE_CHANNEL_SELECT: rG,
    VOICE_STATE_UPDATES: nF,
    CONNECTION_OPEN: nx,
    CONNECTION_CLOSED: nk,
    POST_CONNECTION_OPEN: nU,
    RTC_CONNECTION_STATE: nG,
    AUDIO_SET_TEMPORARY_SELF_MUTE: nV,
    AUDIO_TOGGLE_SELF_MUTE: nB,
    AUDIO_SET_SELF_MUTE: nH,
    AUDIO_TOGGLE_SELF_DEAF: nY,
    AUDIO_TOGGLE_LOCAL_MUTE: nW,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: nK,
    AUDIO_SET_LOCAL_VOLUME: nq,
    AUDIO_SET_LOCAL_PAN: nZ,
    AUDIO_SET_MODE: nX,
    AUDIO_SET_INPUT_VOLUME: nQ,
    AUDIO_SET_OUTPUT_VOLUME: nJ,
    AUDIO_SET_INPUT_DEVICE: n0,
    AUDIO_SET_OUTPUT_DEVICE: n1,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: n3,
    AUDIO_SET_ECHO_CANCELLATION: n8,
    AUDIO_SET_SIDECHAIN_COMPRESSION: n9,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: re,
    AUDIO_SET_LOOPBACK: rn,
    AUDIO_SET_NOISE_SUPPRESSION: ra,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: ro,
    AUDIO_SET_NOISE_CANCELLATION: rl,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: ru,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: rd,
    AUDIO_SET_DEBUG_LOGGING: r_,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: rf,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: rc,
    MEDIA_ENGINE_SET_VIDEO_HOOK: rp,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: rh,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: rm,
    AUDIO_SET_ATTENUATION: rE,
    AUDIO_SET_QOS: rg,
    MEDIA_ENGINE_DEVICES: n4,
    AUDIO_VOLUME_CHANGE: n5,
    AUDIO_RESET: rA,
    AUDIO_INPUT_DETECTED: rT,
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: rI,
    AUDIO_SET_SUBSYSTEM: rP,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rx,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rH,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rj,
    MEDIA_ENGINE_PERMISSION: rB,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rK,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: n2,
    MEDIA_ENGINE_INTERACTION_REQUIRED: n6,
    USER_SETTINGS_MODAL_INIT: r$,
    USER_SETTINGS_MODAL_SET_SECTION: r$,
    CERTIFIED_DEVICES_SET: rz,
    RPC_APP_CONNECTED: rF,
    RPC_APP_DISCONNECTED: rV,
    OVERLAY_INITIALIZE: nP,
    APP_STATE_UPDATE: rQ,
    SET_CHANNEL_BITRATE: rJ,
    SET_VAD_PERMISSION: rS,
    SET_NATIVE_PERMISSION: ry,
    SET_CHANNEL_VIDEO_QUALITY_MODE: r2,
    MEDIA_ENGINE_SET_AEC_DUMP: rq,
    MEDIA_ENGINE_SET_OPENH264_ENABLED: rZ,
    MEDIA_ENGINE_RESET_SETTINGS: rX,
    CHANNEL_DELETE: r0,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: r1,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: r3,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: r6,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: r4,
    USER_SETTINGS_PROTO_UPDATE: nj,
    CLIPS_INIT: rY,
    CLIPS_SETTINGS_UPDATE: rW,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: r5,
    VOICE_FILTER_REQUEST_SWITCH: rL,
    VOICE_FILTER_LOOPBACK_TOGGLE: rD,
    VOICE_FILTER_APPLIED: rM,
    VOICE_FILTER_DOWNLOAD_FAILED: rw,
    VOICE_FILTER_APPLY_FAILED: rw,
})),
    (o = new X.A(tr, r));
let ie = r;
