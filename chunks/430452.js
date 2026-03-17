"use strict";
let r, i, s, a, o, l, u, c, d, _, f;
n.d(t, { Ay: () => ir }), n(323874), n(14289), n(35956), n(321073), n(790599);
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
    q = n(780732),
    Z = n(532055),
    X = n(227493),
    Q = n(264866),
    J = n(927170),
    ee = n(729410),
    et = n(233232),
    en = n(140175);
n(491642);
var er = n(801644),
    ei = n(223572),
    es = n(276006),
    ea = n(993628),
    eo = n(886124),
    el = n(165479),
    eu = n(896014),
    ec = n(765396),
    ed = n(75076),
    e_ = n(674966),
    ef = n(559633),
    ep = n(3527),
    eh = n(879172),
    em = n(617617),
    eE = n(340913),
    eg = n(996744),
    eA = n(28075),
    eI = n(954571),
    eT = n(353835),
    eS = n(927813),
    ey = n(723702),
    ev = n(728458),
    eN = n(837921),
    eC = n(350535),
    eR = n(961350),
    eO = n(131319),
    eb = n(347481),
    eD = n(734057),
    eL = n(383501),
    ew = n(851581),
    eM = n(287809),
    ex = n(117549),
    eP = n(652215),
    ek = n(502075),
    eU = n(765682),
    eG = n(355097),
    eF = n(509381),
    eV = n(731854),
    eB = n(985018);
let eH = new x.A("MediaEngineStore"),
    ej = "MediaEngineStore",
    eY = 4,
    eW = 1,
    eK = 1,
    e$ = 1,
    ez = 0.5,
    eq = { left: 1, right: 1 },
    eZ = 500,
    eX = 5 * eS.A.Millis.SECOND,
    eQ = -60,
    eJ = 100,
    e0 = 2 * eS.A.Millis.SECOND,
    e1 = 30 * eS.A.Millis.SECOND,
    e2 = +eS.A.Millis.MINUTE,
    e3 = !0,
    e6 = "deep_noise_suppression",
    e4 = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2",
    e5 = "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f",
    e7 = 0,
    e8 = null;
function e9() {
    if (!(0, ey.isIOS)() || null == e8) return !1;
    let e = e8();
    if (null == e || !e.startsWith("ARM64_")) return !1;
    let t = e.substring(6);
    return ("T" === t[0] || "S" === t[0]) && parseInt(t.substring(1), 10) >= 8122;
}
let te = null;
async function tt() {
    if (!(0, ey.isMac)() || R.A?.os.arch !== "arm64" || R.A?.processUtils?.getSystemInfo == null) {
        te = !1;
        return;
    }
    let e = await R.A.processUtils.getSystemInfo(),
        t = e.cpus?.[0]?.model ?? "";
    eH.info("Detected Mac CPU", t);
    let n = t.match(/Apple M(\d+)/);
    if (null == n) {
        te = !0;
        return;
    }
    te = parseInt(n[1], 10) >= 3;
}
function tn() {
    return !0 === te;
}
function tr() {
    return {
        mode: eP.TBI.VOICE_ACTIVITY,
        modeOptions: {
            threshold: eQ,
            autoThreshold: ey.isPlatformEmbedded || __OVERLAY__,
            vadUseKrisp: !0,
            vadKrispActivationThreshold: ez,
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
        inputVolume: eV.Hz,
        outputVolume: eV.Hz,
        inputDeviceId: eV.dx,
        outputDeviceId: eV.dx,
        videoDeviceId: eV.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: ts.supports(eV.O5.VIDEO_HOOK),
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
let ti = {
        [eF.m.CUSTOM]: {},
        [eF.m.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [eF.m.STUDIO]: {
            mode: eP.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    ts = (0, y.hB)((0, y.WI)());
eH.enableNativeLogger(!0);
let ta = {},
    to = new Set([eV.x.DEFAULT]),
    tl = ts.supports(eV.O5.AUTO_ENABLE),
    tu = !1,
    tc = eV.x.STREAM,
    td = performance.now(),
    t_ = null,
    tf = { [eV.dx]: nN("No Input Devices") },
    tp = { [eV.dx]: nN("No Output Devices") },
    th = { [eV.dx]: nN("No Video Devices") },
    tm = new N.Ep(),
    tE = !1,
    tg = !1,
    tA = !1,
    tI = !1,
    tT = !1,
    tS = eV.qe,
    ty = eV.qe,
    tv = !1,
    tN = !1,
    tC = new N.Ep(),
    tR = !1,
    tO = !1,
    tb = !1,
    tD = !1,
    tL = new N.Ep(),
    tw = !1,
    tM = !1,
    tx = !1,
    tP = [],
    tk = !1,
    tU = null,
    tG = null,
    tF = null,
    tV = null,
    tB = null,
    tH = !1,
    tj = !1,
    tY = !1,
    tW = null,
    tK = null,
    t$ = !1;
e_.A.hasPermission(eU.iL.AUDIO, { showAuthorizationError: !1 }),
    e_.A.hasPermission(eU.iL.CAMERA, { showAuthorizationError: !1 });
let tz = !1,
    tq = new Set(),
    tZ = tz,
    tX = new Set(),
    tQ = {},
    tJ = null,
    t0 = null,
    t1 = !0,
    t2 = !1,
    t3 = new N.Ep(),
    t6 = !1,
    t4 = !1,
    t5 = !1,
    t7 = !1;
function t8(e) {
    return (0, z.p)({ location: e }).hdrCaptureMode;
}
async function t9() {
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
function ne() {
    return null != tK ? tK : "u" > typeof window ? (tK = t9().then((e) => ((tW = e), e))) : Promise.resolve(!1);
}
function nt() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT,
        t = ta[e];
    return null == t && ((t = tr()), (ta[e] = t)), t;
}
function nn() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT,
        t = nt(e),
        n = ti[t.activeInputProfile ?? eF.m.CUSTOM],
        r = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}) };
    if (
        (null == r.vadDuringPreProcess && (r.vadDuringPreProcess = (0, ei.R)({ location: "getSettings" }).enabled),
        (null == r.vadKrispActivationThreshold && !0 === n.automaticGainControl) || !0 === t.automaticGainControl)
    ) {
        let e = (0, B.F)({ location: "getSettings" });
        null != e.vadKrispActivationThreshold && (r.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return { ...t, ...n, modeOptions: r };
}
function nr(e) {
    let t = nn(e.context),
        n = t.mode;
    e.context === eV.x.DEFAULT && (0, en.N)(!1, !1);
    let { showPTTSpeakingIndicator: r } = eE.A.getConfig({ location: "setInputMode" }),
        i = r && n === eP.TBI.PUSH_TO_TALK;
    e.setInputMode(n, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: !!i || t.modeOptions.autoThreshold,
        vadUseKrisp: (!!i || t.modeOptions.vadUseKrisp) && rC(),
        vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? ez,
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        vadDuringPreProcess: t.modeOptions.vadDuringPreProcess ?? !1,
        pttReleaseDelay: Math.round(t.modeOptions.delay),
    });
}
function ni(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eV.Hz;
    return E().clamp(e, 0, t);
}
function ns(e) {
    let t = nn(e.context),
        n = !tl || t.mute || t.deaf;
    e.context === eV.x.DEFAULT
        ? (n = n || tE || tg || tA || !e_.A.didHavePermission(eU.iL.AUDIO))
        : e.context === eV.x.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eV.x.DEFAULT && b.A.updateNativeMute();
}
function na(e) {
    e !== tc && (null != s && ts.setGoLiveSource(null, tc), (tc = e));
}
function no() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tT,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
        n = s;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, ey.isWindows)() && O.c1(n.desktopSource.soundshareId),
            ts.setGoLiveSource(null, tc)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            ts.setGoLiveSource(null, tc),
        tT || e)
    ) {
        let t = nn().videoDeviceId;
        tT && t === eV.dx && ty === eV.dx && tS !== eV.qe ? (t = tS) : (ty = t),
            (tS = (tT = e) ? nR(th, t) : eV.qe),
            ts.setVideoInputDevice(tS);
    }
    if (((s = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = t8("MediaEngineStore go live"),
                i = nn().videoHook,
                s = nh(),
                a = s ? (nm() ? ek.zl : ek.eg) : 0,
                o = (0, ey.isWindows)() && (0, es.b)("updateVideo").enabled,
                l = !1;
            (0, ey.isWindows)() &&
                a >= ek.zl &&
                (l =
                    !0 === t0
                        ? el.q.getConfig({ location: "updateVideo" }).enabled
                        : eo.d.getConfig({ location: "updateVideo" }).enabled),
                ts.setGoLiveSource(
                    {
                        desktopDescription: {
                            id: t.desktopSource.id,
                            soundshareId: t.desktopSource.soundshareId,
                            useVideoHook: i,
                            useGraphicsCapture: s,
                            useGraphicsCaptureApiLevel: a,
                            useCaptureDeviceForEncode: o,
                            useLoopback: r.getExperimentalSoundshare(),
                            useQuartzCapturer: !0,
                            allowScreenCaptureKit: nE(),
                            videoHookStaleFrameTimeoutMs: eZ,
                            graphicsCaptureStaleFrameTimeoutMs: eX,
                            hdrCaptureMode: n,
                            enableGlobalFramePoolLock: (0, $.H)({ location: "updateVideo" }).enabled,
                            useGraphicsCaptureDirtyRegions: l,
                        },
                        quality: e,
                    },
                    tc,
                );
        }
        null != t.cameraSource &&
            ts.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: t.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: t.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                tc,
            );
    }
}
function nl(e) {
    switch (e) {
        case eV.CO.CPU_OVERUSE:
            return k.B6.NoiseCancellerCpuOveruse;
        case eV.CO.FAILED:
            return k.B6.NoiseCancellerFailed;
        case eV.CO.VAD_CPU_OVERUSE:
            return k.B6.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function nu() {
    null === t_ &&
        ts
            .getCodecSurvey()
            .then((e) => {
                try {
                    let t = JSON.parse(e);
                    if (null == t || null == t.available_video_decoders) throw Error("decoder survey is not available");
                    t_ = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                } catch (e) {
                    eH.error("Failed to parse codec survey", e), (t_ = !1);
                }
            })
            .catch((e) => {
                eH.error("Failed to get codec survey", e), (t_ = !1);
            })
            .finally(() => {
                C.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
            });
}
function nc(e) {
    let t = (0, B.F)({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function nd(e, t) {
    e.setAutomaticGainControl(nc(t));
}
function n_(e, t) {
    let n = (0, ep.A)(t, r.getSystemMicrophoneMode());
    n !== t && eH.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: i } = (0, B.F)({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(i);
    let { noiseCancellationAfterProcessing: s, vadAfterWebrtc: a } = (0, J.$)({ location: "setNoiseCancellation" });
    e.setNoiseCancellationAfterProcessing(s), e.setVADAfterWebrtc(a);
}
function nf(e) {
    let t = nn(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eb.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eb.A.hasNoiseSuppression(n) || t.noiseSuppression),
        nd(e, eb.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        n_(e, t.noiseCancellation),
        e.setVoiceFilterId(tU),
        (0, ey.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function np() {
    tm.start(e1, () => {
        eH.error("Device enumeration timed out"), eI.default.track(eP.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
    }),
        ts.on(y.bg.Connection, (e) => {
            nr(e), ns(e), nf(e);
            let t = nn();
            e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
                e.setQoS(t.qos),
                (0, ey.isWindows)()
                    ? (e.setExperimentFlag(eV.fd.H265_HARDWARE_ONLY, !0),
                      ne().then((t) => {
                          e.setExperimentFlag(eV.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                      }))
                    : (0, ey.isMac)() && e.setExperimentFlag(eV.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                (0, ey.isWindows)() &&
                    (0, q.r)({ location: "setupMediaEngine" }).enabled &&
                    (e.setExperimentFlag(eV.fd.USE_H264_MF_DECODER, !0),
                    (0, Z.W)({ location: "setupMediaEngine" }).enabled &&
                        e.setExperimentFlag(eV.fd.H264_MF_ZERO_COPY, !0)),
                (0, ey.isLinux)() &&
                    (0, ee.b)({ location: "setupMediaEngine" }).enabled &&
                    t.openH264Enabled &&
                    e.setExperimentFlag(eV.fd.USE_LIBOPENH264_DECODER, !0);
            let n = eL.A.getGuildId(),
                {
                    muteBeforeProcessing: i,
                    pttBeforeProcessing: a,
                    skipEncode: o,
                } = (null != n ? W.A : Y.A).getCurrentConfig(
                    { location: "setupMediaEngine", guildId: n ?? void 0 },
                    { autoTrackExposure: !0 },
                );
            i && e.setExperimentFlag(eV.fd.MUTE_BEFORE_PROCESSING, !0),
                a && e.setExperimentFlag(eV.fd.PTT_BEFORE_PROCESSING, !0),
                o && e.setExperimentFlag(eV.fd.SKIP_ENCODE, !0),
                (0, et.J)({ location: "setupMediaEngine" }).enabled &&
                    e.setExperimentFlag(eV.fd.LOW_LATENCY_RATE_CONTROL, !0);
            let l = !1,
                u = !0;
            e.setExperimentFlag(eV.fd.RESET_DECODER_ON_ERRORS, !0),
                l && e.setExperimentFlag(eV.fd.SOFTWARE_FALLBACK_ON_ERRORS, !0),
                u && e.setExperimentFlag(eV.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
            let { swallowVolumeOnlySpeakingEvents: c } = D.A.getConfig({ location: "MediaEngineStore" });
            if ((c && e.setExperimentFlag(eV.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === eV.x.STREAM)) {
                let t = nb(tp);
                e.setSoundshareDiscardRearChannels(t);
            }
            if ((0, ey.isWindows)())
                e.setExperimentFlag(eV.fd.SIGNAL_AV1, !0), e.setExperimentFlag(eV.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            else if ((0, ey.isMac)())
                if ((e.setExperimentFlag(eV.fd.SIGNAL_AV1_DECODE, !0), tn())) {
                    let { enabled: t } = (0, j.t)("MediaEngineStore");
                    t
                        ? (eH.info("This Mac supports AV1 Hardware. AV1 Hardware enabled."),
                          e.setExperimentFlag(eV.fd.SIGNAL_AV1_HARDWARE_DECODE, !0))
                        : eH.info("This Mac supports AV1 Hardware. AV1 Hardware not yet enabled.");
                } else eH.info("This Mac does not support AV1 Hardware.");
            else if ((0, ey.isLinux)()) e.setExperimentFlag(eV.fd.SIGNAL_AV1_DECODE, !0);
            else if ((0, ey.isIOS)() && e9()) {
                let { enabled: t } = (0, H.$)("MediaEngineStore");
                t &&
                    (e.setExperimentFlag(eV.fd.SIGNAL_AV1_DECODE, !0),
                    e.setExperimentFlag(eV.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
            }
            if ((0, ey.isWeb)()) {
                let { enabled: t } = (0, K.O)("MediaEngineStore");
                e.setExperimentFlag(eV.fd.BROWSER_HEVC, t);
            }
            for (let n of ((0, ey.isWindows)() &&
                tJ?.startsWith("AMD") &&
                (0, eu.F)("MediaEngineStore").enabled &&
                e.setExperimentFlag(eV.fd.WMF_GPU_ENCODE, !0),
            (0, ey.isWindows)() &&
                tJ?.startsWith("Intel") &&
                (0, ec.J)("MediaEngineStore").enabled &&
                e.setExperimentFlag(eV.fd.WMF_GPU_ENCODE, !0),
            (0, ey.isWindows)() &&
                tJ?.startsWith("Qualcomm") &&
                (0, eu.F)("MediaEngineStore").enabled &&
                e.setExperimentFlag(eV.fd.WMF_GPU_ENCODE, !0),
            ts.setHasFullbandPerformance((0, P.A)()),
            e.setRemoteAudioHistory(1e3),
            (0, w.A)(r) && e.setClipsKeyFrameInterval(eV.X1),
            (t = nn(e.context)),
            e.setPostponeDecodeLevel(eJ),
            Object.keys(t.localMutes)))
                n !== eR.default.getId() && e.setLocalMute(n, t.localMutes[n]);
            for (let n of Object.keys(t.localVolumes))
                n !== eR.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
            for (let n of Object.keys(t.localPans)) {
                let r = t.localPans[n];
                e.setLocalPan(n, r.left, r.right);
            }
            for (let n of Object.keys(t.disabledLocalVideos)) e.setLocalVideoDisabled(n, t.disabledLocalVideos[n]);
            e.on(y.yq.Speaking, (t, n, r, i) => {
                C.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: i });
            }),
                e.context === eV.x.DEFAULT &&
                    ((tN = !1),
                    e.on(y.yq.SpeakingWhileMuted, () => {
                        let e = !tN;
                        (tN = !0),
                            e && r.emitChange(),
                            tC.start(e0, () => {
                                (tN = !1), r.emitChange();
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
                        eI.default.track(eP.HAw.VIDEOHOOK_INITIALIZED, {
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
                    eH.warn(`noisecancellererror event: ${e}`),
                        (0, k.QW)({ type: k.iy.NOISE_CANCELLER_ERROR, underlyingError: nl(e) }),
                        (tH = !0),
                        eI.default.track(eP.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        C.h.dispatch({ type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: !0 }),
                        C.h.dispatch({ type: "AUDIO_SET_NOISE_CANCELLATION", enabled: !1 }),
                        C.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e });
                }),
                e.on(y.yq.VoiceActivityDetectorError, (e) => {
                    eH.warn(`voiceactivitydetectorerror event: ${e}`),
                        (0, k.QW)({ type: k.iy.NOISE_CANCELLER_ERROR, underlyingError: nl(e) }),
                        eI.default.track(eP.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        C.h.dispatch({
                            type: "AUDIO_SET_MODE",
                            context: eV.x.DEFAULT,
                            mode: eP.TBI.VOICE_ACTIVITY,
                            options: { ...nn(eV.x.DEFAULT).modeOptions, vadUseKrisp: !1 },
                        }),
                        C.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e });
                }),
                e.on(y.yq.SdpError, (e, t, n, r) => {
                    eI.default.track(eP.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: r });
                }),
                e.on(y.yq.VideoState, (t) => {
                    C.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                }),
                e.setBitRate(eO.A.bitrate),
                e.applyVideoQualityMode(ex.A.mode),
                (0, ey.isWindows)() &&
                    ts.supports(eV.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                    ts.setAsyncVideoInputDeviceInit(!0);
        }),
        ts.on(y.bg.DeviceChange, (e, t, n) => {
            tm.stop(),
                C.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
        }),
        ts.on(y.bg.VolumeChange, (e, t) => {
            C.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
        }),
        ts.on(y.bg.DesktopSourceEnd, (e, t) => {
            C.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
        }),
        ts.on(y.bg.AudioPermission, (e) => {
            (t$ = !0), C.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
        }),
        ts.on(y.bg.VideoPermission, (e) => {
            C.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
        }),
        ts.on(y.bg.WatchdogTimeout, async () => {
            let e;
            if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                try {
                    await eT.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                } catch (t) {
                    "number" == typeof t.status && (e = t.status);
                }
            eH.warn(`Watchdog timeout, report submission status: ${e ?? 200}`);
            let t = ea.A.getConfig({ location: "watchdog_timeout" }).enabled && null != R.A.processUtils.setCrashReason;
            eI.default.track(
                eP.HAw.VOICE_WATCHDOG_TIMEOUT,
                { minidump_submission_error: e, will_restart: t },
                { flush: !0 },
            ),
                t &&
                    (eH.info("Relaunching app due to voice watchdog timeout"),
                    await R.A.processUtils.setCrashReason("voice-watchdog-timeout"),
                    v.w.set("discord_watchdog_restart_timestamp", Date.now().toString()),
                    R.A.app.relaunch());
        }),
        ts.on(y.bg.VideoInputInitialized, (e) => {
            eI.default.track(eP.HAw.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired
                    ? null
                    : Math.round(e.timeToFirstFrame * eS.A.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: eL.A.getMediaSessionId(),
                rtc_connection_id: eL.A.getRTCConnectionId(),
            });
        }),
        ts.on(y.bg.AudioInputInitialized, (e) => {
            eI.default.track(eP.HAw.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * eS.A.Millis.SECOND),
                rtc_connection_id: eL.A.getRTCConnectionId(),
            });
        }),
        ts.on(y.bg.ClipsRecordingRestartNeeded, () => {
            C.h.dispatch({ type: "CLIPS_RESTART" });
        }),
        ts.on(y.bg.ClipsInitFailure, (e, t) => {
            C.h.wait(() => {
                C.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t });
            });
        }),
        ts.on(y.bg.ClipsRecordingEnded, (e, t) => {
            a?.desktopSource?.id === e && (null != t && s?.desktopSource?.soundshareId !== t && O.c1(t), (a = null));
        }),
        ts.on(y.bg.NativeScreenSharePickerUpdate, (e, t) => {
            C.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
        }),
        ts.on(y.bg.NativeScreenSharePickerCancel, (e) => {
            C.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
        }),
        ts.on(y.bg.NativeScreenSharePickerError, (e) => {
            C.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
        }),
        ts.on(y.bg.AudioDeviceModuleError, (e, t, n) => {
            eI.default.track(eP.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
        }),
        ts.on(y.bg.VideoCodecError, (e) => {
            let t = "encode" === e.mode ? k.iy.VIDEO_ENCODE_ERROR : k.iy.VIDEO_DECODE_ERROR,
                n = { videoCodec: e.codecStandard, errorMessage: e.message };
            (0, k.QW)(
                t === k.iy.VIDEO_ENCODE_ERROR
                    ? { type: t, ...n, videoEncoder: e.implName }
                    : { type: t, ...n, videoDecoder: e.implName },
            );
        }),
        ts.on(y.bg.ConnectionStats, (e) => {
            C.h.dispatch({
                type: "MEDIA_ENGINE_CONNECTION_STATS",
                connectionStats: e.map((e) => {
                    let { stats: t, connection: n } = e;
                    return {
                        stats: t,
                        mediaEngineConnectionId: n.mediaEngineConnectionId,
                        version: e7++,
                        context: n.context,
                    };
                }),
            });
        }),
        ts.on(y.bg.VoiceQueueMetrics, (e) => {
            let t = it(e);
            null !== t && eI.default.track(eP.HAw.VOICE_QUEUE_METRICS, t);
        }),
        ts.setOnVideoContainerResized((e, t, n) => {
            C.h.wait(() =>
                C.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
            );
        }),
        tt(),
        rs(),
        ro(),
        o.reset(),
        (0, ew.w)().then((e) => {
            null != e && ((tJ = e.gpu_brand), (t0 = e.has_intel_hybrid_igpu));
        }),
        ts.on(y.bg.SystemMicrophoneModeChange, (e) => {
            (f = e), ts.eachConnection(nf), r.emitChange();
        });
}
function nh() {
    return (0, ey.isWindows)() && T().satisfies(R.A?.os.release, ek.yg);
}
function nm() {
    return (0, ey.isWindows)() && T().satisfies(R.A?.os.release, ek.fG);
}
function nE() {
    return (0, ey.isMac)() && ts.supports(eV.O5.SCREEN_CAPTURE_KIT) && T().satisfies(R.A?.os.release, ek.e);
}
function ng() {
    return (
        (0, ey.isWindows)() &&
        ts.supports(eV.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        ts.supports(eV.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nA() {
    return ts.supports(eV.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function nI() {
    let e = v.w.get("audio");
    null != e && (v.w.set(ej, { [eV.x.DEFAULT]: e }), v.w.remove("audio")),
        (ta = v.w.get(ej) ?? {}),
        E().each(ta, (e) => {
            E().defaultsDeep(e, tr()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, eC.OH)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== eY &&
                    ((e.vadUseKrispSettingVersion = eY), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                e.vadThrehsoldMigrated ||
                    ((e.vadThrehsoldMigrated = !0), e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = eQ)),
                ts.supports(eV.O5.SIDECHAIN_COMPRESSION) &&
                    e.sidechainCompressionSettingVersion < e$ &&
                    ((e.sidechainCompressionSettingVersion = e$), (e.sidechainCompression = !0)),
                (0, ey.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== eK &&
                      ((e.ncUseKrispjsSettingVersion = eK), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== eW &&
                      ((e.ncUseKrispSettingVersion = eW), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
        }),
        ny();
}
function nT(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eV.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = nt(t);
    return Object.assign(r, e), !__OVERLAY__ && n && v.w.set(ej, ta), r;
}
function nS() {
    v.w.remove(ej), location.reload();
}
function ny() {
    let e = nn();
    ts.setAudioInputDevice(e.inputDeviceId),
        ts.setAudioOutputDevice(e.outputDeviceId),
        no(),
        ts.setInputVolume(e.inputVolume),
        ts.setOutputVolume(e.outputVolume),
        ts.setAecDump(e.aecDumpEnabled),
        ts.setSidechainCompression(e.sidechainCompression),
        ts.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        ts.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        eN.Ay?.setOpenH264Enabled?.(e.openH264Enabled);
}
function nv() {
    tl || ts.enable().then(() => C.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nN(e) {
    return { id: eV.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
}
function nC(e, t) {
    if (0 === e.length) {
        let e = nN(t);
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
function nR(e, t) {
    let n = e[t] ?? e[eV.dx] ?? E()(e).values().first();
    return null != n ? n.id : t;
}
function nO(e) {
    let t = tf;
    if (((tf = nC(e, eB.intl.string(eB.t["/QIjDA"]))), !E().isEqual(tf, t))) {
        let e = nn(),
            t = nR(tf, e.inputDeviceId);
        ts.setAudioInputDevice(t), ts.eachConnection(nf);
    }
}
function nb(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nD(e) {
    ts.eachConnection((t) => {
        t.context === eV.x.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function nL(e) {
    let t = tp;
    if (((tp = nC(e, eB.intl.string(eB.t.xlUg0v))), !E().isEqual(tp, t))) {
        let e = nn(),
            n = nR(tp, e.outputDeviceId);
        ts.setAudioOutputDevice(n);
        let r = nb(t),
            i = nb(tp);
        r !== i && nD(i);
    }
}
function nw(e) {
    tO = e.length > 0;
    let t = th;
    if (((th = nC(e, eB.intl.string(eB.t.WKWARY))), tT && !E().isEqual(th, t))) {
        let e = void 0 !== th[tS],
            n = tS === eV.dx && t[eV.dx]?.disabled,
            r = "Firefox" === A().name && "" === tS && t[tS]?.name === "Default" && !t[tS]?.disabled;
        no(e || n || r);
    }
}
function nM() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = em.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let r = n === eG.W.USER ? eV.x.DEFAULT : eV.x.STREAM,
            i = r === eV.x.STREAM ? eV.Cn : eV.Hz,
            s = t[n] ?? {},
            { localMutes: a, localVolumes: o } = nn(r);
        for (let [e, t] of Object.entries(s))
            null == (0, eh.tM)(r, e) &&
                (t.muted ? (a[e] = !0) : delete a[e],
                t.volume !== i ? (o[e] = t.volume) : delete o[e],
                ts.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, r));
        if (e)
            for (let e of new Set([...Object.keys(a), ...Object.keys(o)]))
                null == s[e] &&
                    (delete a[e],
                    delete o[e],
                    ts.eachConnection((t) => {
                        t.setLocalVolume(e, i), t.setLocalMute(e, !1);
                    }, r));
        nT({ localMutes: a, localVolumes: o }, r);
    }
}
function nx(e) {
    if (null == r)
        return (
            eH.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
            { soundshareId: null, soundshareSession: "" }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : eT.A.getAudioPid(e),
            n = "";
        return null != t && (n = eT.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n };
    }
}
function nP(e, t) {
    (0, ey.isWindows)() &&
        e > 1 &&
        O.GH(e, { soundshare_session: t }).then((t) => {
            null == t ||
                F.Ay.shouldContinueWithoutElevatedProcessForPID(e) ||
                C.h.wait(() => {
                    C.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: t });
                });
        });
}
function nk(e) {
    (i = e.sessionId), (tE = !1), (tI = !1);
    let t = nn();
    ng() && (nA() ? rG(eV.rB.AUTOMATIC) : t.automaticAudioSubsystem && rF()),
        ts.supports(eV.O5.OFFLOAD_ADM_CONTROLS) && ts.setOffloadAdmControls(!0),
        (0, ey.isIOS)() &&
            (0, X.Y)("handleConnectionOpen").enabled &&
            ts.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
        (0, eg.Lb)({ location: "MediaEngineStore", autoTrackExposure: !1 }) &&
            null !== t.mostRecentlyRequestedVoiceFilter &&
            (0, ey.isDesktop)() &&
            (eA.A.getLastInitAttemptMayHaveCrashed()
                ? (C.h.dispatch({ type: "AUDIO_SET_SELF_MUTE", mute: !0, context: eV.x.DEFAULT, playSoundEffect: !0 }),
                  nT({ mostRecentlyRequestedVoiceFilter: null }))
                : n(342887).md()),
        nM();
}
function nU(e) {
    let { mediaEngineState: t } = e;
    (ta = t.settingsByContext),
        (tf = t.inputDevices),
        (tp = t.outputDevices),
        (tQ = t.appSupported),
        (tx = t.krispModuleLoaded),
        (c = t.krispVersion),
        (tc = t.goLiveContext);
}
function nG() {
    i = null;
}
function nF() {
    return (0, ey.isWeb)() && r.startDavePreload(), !1;
}
function nV(e) {
    switch (e.state) {
        case eP.S7L.CONNECTING:
            nv();
            break;
        case eP.S7L.RTC_CONNECTING:
            (tD = !1), (l = void 0), (u = void 0), (tb = !1), (t2 = !1), t3.stop(), tL.stop(), o.reset();
            break;
        case eP.S7L.RTC_CONNECTED:
            no();
            break;
        case eP.S7L.DISCONNECTED:
            nq(), nZ();
    }
}
function nB(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (tE = t.mute || t.suppress), (tI = t.deaf), ts.eachConnection(ns);
            let e = null != t.guildId && null != t.channelId && null != tB && tB !== t.channelId,
                n = !tw && null == t.channelId;
            return no(!e && !n && tT), (tB = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== eR.default.getId() || null != eL.A.getChannelId() || no(!1, null), e;
    }, !1);
}
function nH(e) {
    let { mute: t } = e;
    (tg = t), ts.eachConnection(ns);
}
function nj(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = nn(t);
    if (t === eV.x.DEFAULT && (e_.A.requestPermission(eU.iL.AUDIO), tA)) return !1;
    (r = !i && !r) || (i = !1), n || (tv = !0), nT({ mute: r, deaf: i }, t), ts.eachConnection(ns);
}
function nY(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    nT({ mute: n }, t), r || (tv = !0), ts.eachConnection(ns);
}
function nW(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== eG.oD.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    nM(!0);
}
function nK(e) {
    let { context: t } = e;
    nT({ deaf: !nn(t).deaf }, t), ts.eachConnection(ns);
}
function n$(e) {
    let { context: t, userId: n } = e;
    if (n === eR.default.getId()) return;
    let { localMutes: r } = nn(t);
    r[n] ? delete r[n] : (r[n] = !0),
        nT({ localMutes: r }, t),
        ts.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function nz(e) {
    let { context: t, userId: n, videoToggleState: r, persist: i, isAutomatic: s } = e;
    h()(!(i && s), "These are not allowed to both be true.");
    let a = r === eP.bb8.DISABLED,
        { disabledLocalVideos: o } = nn(t),
        l = o[n] ?? !1,
        u = tq.has(n),
        c = r === eP.bb8.AUTO_ENABLED || r === eP.bb8.MANUAL_ENABLED;
    eH.info(`disableVideo=${a} currentlyDisabled=${l} currentlyAutoDisabled=${u}, isVideoShown=${c}`),
        h()(!(u && !l), "If you are auto-disabled, then you are also disabled.");
    let d = a !== l,
        _ = t === eV.x.DEFAULT,
        f = s && d && _,
        p = i && d && _;
    eH.info(`changed=${d} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${f} isManualToggleByUser=${p}`);
    let { videoToggleStateMap: m } = nn(t);
    if (
        (m[n] === eP.bb8.AUTO_PROBING &&
            r === eP.bb8.AUTO_ENABLED &&
            (0, ed.A)(n, a ? eV.Al.AUTO_DISABLE : eV.Al.AUTO_ENABLE, c),
        (m[n] = r),
        nT({ videoToggleStateMap: m }, t, i),
        r === eP.bb8.AUTO_PROBING
            ? eL.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
            : eL.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
        tZ ||
            (eH.info(`isAutoDisableAllowed=${tZ} - disabling VideoHealthManager`),
            eL.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
        f)
    ) {
        if ((!a && !u) || (a && !tZ)) return;
        (0, ed.A)(n, a ? eV.Al.AUTO_DISABLE : eV.Al.AUTO_ENABLE, c), a ? tq.add(n) : tq.delete(n);
    } else
        p &&
            (u && !a
                ? (eH.info("disallowing auto-disable for this session because of manual override by user"),
                  (tZ = !1),
                  eL.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                  (0, ed.A)(n, eV.Al.MANUAL_REENABLE, c))
                : (0, ed.A)(n, a ? eV.Al.MANUAL_DISABLE : eV.Al.MANUAL_ENABLE, c));
    _ && !a && tq.delete(n),
        a ? (o[n] = !0) : delete o[n],
        nT({ disabledLocalVideos: o }, t, i),
        ts.eachConnection((e) => e.setLocalVideoDisabled(n, o[n] ?? !1), t);
}
function nq() {
    if (0 === tq.size) return;
    let e = eV.x.DEFAULT,
        { disabledLocalVideos: t } = nn(e);
    tq.forEach((n) => {
        h()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            ts.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tq.clear(),
        nT({ disabledLocalVideos: t }, e, !1);
}
function nZ() {
    let e = eV.x.DEFAULT,
        { videoToggleStateMap: t } = nn(e);
    for (let [e, n] of Object.entries(t)) n === eP.bb8.AUTO_PROBING && delete t[e];
    nT({ videoToggleStateMap: t }, e, !1);
}
function nX(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === eR.default.getId()) return;
    let i = t === eV.x.STREAM ? eV.Cn : eV.Hz,
        { localVolumes: s } = nn(t);
    r === i ? delete s[n] : (s[n] = r), nT({ localVolumes: s }, t), ts.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function nQ(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: s } = nn(t);
    (s[n] = { left: r, right: i }), nT({ localPans: s }, t), ts.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function nJ(e) {
    let { context: t, mode: n, options: r } = e;
    nT({ mode: n, modeOptions: { ...r, updatedAt: Date.now() } }, t), ts.eachConnection(nr);
}
function n0(e) {
    let { volume: t } = e;
    nT({ inputVolume: ni(t) }), ts.setInputVolume(t);
}
function n1(e) {
    let { volume: t } = e;
    nT({ outputVolume: t }), ts.setOutputVolume(t);
}
function n2(e) {
    let { id: t } = e;
    (t = nR(tf, t)),
        (td = performance.now()),
        nT({ inputDeviceId: t }),
        ts.setAudioInputDevice(t),
        ts.eachConnection(nf),
        (l = void 0),
        (u = void 0),
        t3.stop(),
        (t2 = !1);
    let { resetSilenceWarningOnDeviceChange: n } = er.A.getConfig({
        location: "MediaEngineStore.handleSetInputDevice",
    });
    n && ((tb = !1), o.reset());
}
function n3(e) {
    let { id: t } = e;
    nT({ outputDeviceId: (t = nR(tp, t)) }), ts.setAudioOutputDevice(t);
}
function n6(e) {
    let { id: t } = e;
    nT({ videoDeviceId: (t = nR(th, t)) }), no();
}
function n4(e) {
    let { inputProfile: t } = e;
    nT({ activeInputProfile: t });
    let n = nn();
    ts.eachConnection((e) => {
        nr(e), nf(e);
    }),
        ts.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        ra();
}
function n5(e) {
    return tu !== e.required && ((tu = e.required), e.required || ts.interact(), !0);
}
function n7(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    nO(t), nL(n), nw(r);
}
function n8(e) {
    let { inputVolume: t, outputVolume: n } = e;
    nT({ inputVolume: ni(t), outputVolume: n });
}
function n9(e) {
    let t = nn(),
        n = ts.getAudioSubsystem(),
        i = ts.getAudioLayer(),
        s = nR(tf, t.inputDeviceId),
        a = tf[s]?.name,
        o = (0, ep.A)(t.noiseCancellation, r.getSystemMicrophoneMode());
    eI.default.track(eP.HAw.VOICE_PROCESSING, {
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
function re(e) {
    let t = nT({ echoCancellation: e.enabled });
    ts.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), ra(), n9(e.location);
}
function rt(e) {
    rr(e.enabled);
}
function rn(e) {
    let t = nT({ sidechainCompressionStrength: e.strength });
    ts.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function rr(e) {
    let t = nT({ sidechainCompression: e });
    ts.setSidechainCompression(t.sidechainCompression);
}
function ri(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tX.add(n) : tX.delete(n), rs(), ra();
}
function rs() {
    let e = !tX.has("voice_filter_preview") && !tX.has("mic_test");
    ts.setMaybePreprocessMute(e);
}
function ra() {
    let e = nn(),
        t = tX.size > 0,
        n = e.inputDeviceId,
        r = eb.A.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        s = eb.A.hasNoiseSuppression(n) || e.noiseSuppression,
        a = nc(eb.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        o = e.noiseCancellation,
        l = null !== tU,
        u = tX.has("voice_filter") && 1 === tX.size;
    ts.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: s,
        automaticGainControlConfig: a,
        noiseCancellation: o,
        voiceFilters: l,
        loopbackUseAudioMode: u,
    });
}
async function ro() {
    if (!ts.supports(eV.O5.VAAPI)) return;
    let e = 4098;
    if (window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let t = await window.DiscordNative.processUtils.getSystemInfo();
    (t.electronGPUInfo?.gpuDevice ?? []).some((t) => t.vendorId === e) &&
        ((t5 = !0), (t4 = ts.supports(eV.O5.GAMESCOPE_CAPTURE)));
}
function rl(e) {
    let t = nT({ noiseSuppression: e.enabled });
    ts.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), ra(), n9(e.location);
}
function ru(e) {
    let t = nT({ automaticGainControl: e.enabled });
    ts.eachConnection((e) => nd(e, t.automaticGainControl)), ra(), n9(e.location);
}
function rc(e) {
    let t = nT({ noiseCancellation: e.enabled });
    ts.eachConnection((e) => n_(e, t.noiseCancellation)), ra(), n9(e.location);
}
function rd(e) {
    ef.A.setKrispModelOverride(e.model), (_ = e.model), ra();
}
function r_(e) {
    (0, ey.isWeb)() || ((tk = e.enabled), ts.setNoiseCancellationEnableStats?.(e.enabled));
}
function rf(e) {
    nT({ silenceWarning: e.enabled });
}
function rp(e) {
    ts.setDebugLogging(e.enabled);
}
function rh(e) {
    let { level: t } = e;
    (d = t), ef.A.setKrispSuppressionLevel(t);
}
function rm(e) {
    nT({ videoHook: e.enabled });
}
function rE(e) {
    nT({ experimentalSoundshare2: e.enabled });
}
function rg(e) {
    let { enabled: t } = e;
    nT({ useSystemScreensharePicker: t });
}
function rA(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = nT({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r });
    ts.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function rI(e) {
    let { enabled: t } = e;
    nT({ qos: t }), ts.eachConnection((e) => e.setQoS(t));
}
function rT() {
    nS();
}
function rS(e) {
    let { osVolume: t, osMuted: n } = e;
    (u = t), (l = n);
}
function ry(e) {
    let { inputDetected: t } = e;
    if (null == t) return !1;
    if (((tD = !0 !== tb && !t), t)) (tb = !0), (t2 = !1), t3.stop(), tL.stop();
    else if (nn().mode === eP.TBI.VOICE_ACTIVITY && tb) {
        let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = er.A.getConfig({
            location: "MediaEngineStore.handleInputDetected",
        });
        e &&
            t3.start(e2, () => {
                eI.default.track(eP.HAw.HARDWARE_MUTE_GUESSED, {
                    input_device_name: tf[nR(tf, nn().inputDeviceId)]?.name,
                    rtc_connection_id: eL.A.getRTCConnectionId(),
                }),
                    (t2 = !0),
                    r.emitChange();
            }),
            null != t &&
                tL.start(t * eS.A.Millis.MINUTE, () => {
                    (tb = !1), o.reset();
                });
    }
}
function rv(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === tA) return !1;
    (tA = n), ts.eachConnection(ns);
}
function rN(e) {
    let { state: t, permissionType: n } = e,
        r = t === eU.hL.ACCEPTED;
    switch (n) {
        case eU.iL.AUDIO:
            (t$ = !0), ts.eachConnection(ns);
            break;
        case eU.iL.CAMERA:
            !r && tT && no(!1);
            break;
        default:
            return !1;
    }
}
function rC() {
    return tx || !1;
}
async function rR() {
    try {
        await eN.Ay.ensureModule("discord_krisp");
        let e = eN.Ay.requireModule("discord_krisp");
        (tx = !0),
            (c = e.getSdkVersion?.()),
            (d = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (tP = e), r.emitChange();
            }),
            r.emitChange();
    } catch (t) {
        eH.warn(`Failed to load Krisp module: ${t.message}`), ev.A.captureException(t);
        let e = eV.CO.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eV.CO.INITIALIZED : n;
        }
        eI.default.track(eP.HAw.VOICE_PROCESSING, { noise_canceller_error: e }), nT({ noiseCancellation: !1 });
    } finally {
        tM = !1;
    }
}
function rO() {
    return (0, ey.isWindows)() || (0, ey.isLinux)() || (0, ey.isMac)();
}
function rb() {
    !rO() || __OVERLAY__ || tM || tx
        ? (0, ey.isWeb)() && ts.supports(eV.O5.NOISE_CANCELLATION)
            ? ((tx = !0), r.emitChange())
            : (0, ey.isWeb)() && nT({ noiseCancellation: !1 })
        : ((tM = !0), rR());
}
async function rD() {
    try {
        let e,
            t = "",
            n = !1,
            r = URL.parse(e4);
        if (null === r) return void eH.log("OpenH264 URL ", r, " is invalid");
        let i = r.pathname.split("/"),
            s = i[i.length - 1].replace(".bz2", "");
        try {
            let t = await eN.Ay.downloadOpenH264(e4, s, e5, (e) => {
                eH.log("OpenH264 download status", e);
            });
            eH.log("OpenH264 is ready", t), (n = t.fetchedFromNetwork), (e = !0);
        } catch (n) {
            eH.error("OpenH264 download failed", n), (t = n.message), (e = !1);
        }
        if (
            (eI.default.track(eP.HAw.VIDEO_OPENH264_DOWNLOADED, {
                success: e,
                fetched_from_network: n,
                error_message: t,
            }),
            e)
        ) {
            let e = await eN.Ay.cleanupUnusedOpenH264Files([s]);
            eH.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        eH.error("OpenH264 download failed", e);
    }
}
function rL() {
    (0, ey.isLinux)() && rD();
}
function rw(e) {
    let { enabled: t } = e;
    eI.default.track(eP.HAw.VOICE_FILTER_PLAYBACK_TOGGLED, { active_voice_filter_id: tU ?? null, enabled: t }),
        nT({ voiceFilterPlaybackEnabled: t });
}
function rM(e) {
    let { newVoiceFilterId: t } = e;
    nT({ mostRecentlyRequestedVoiceFilter: t }), ts.eachConnection((e) => e.setVoiceFilterId(t));
}
function rx() {
    nT({ mostRecentlyRequestedVoiceFilter: null });
}
function rP(e) {
    let { voiceFilterId: t } = e;
    (tF = tU), (tV = tG), (tU = t), (tG = null === t ? null : Date.now());
}
function rk(e) {
    let t = e.bypassEnabled;
    nT({ bypassSystemInputProcessing: t }), ts.setAudioInputBypassSystemProcessing(t), n9(e.location);
}
function rU(e) {
    rG(e.subsystem);
}
function rG(e) {
    e === eV.rB.AUTOMATIC
        ? (nT({ automaticAudioSubsystem: !0 }), rF())
        : (nT({ automaticAudioSubsystem: !1 }), ts.setAudioSubsystem(e));
}
function rF() {
    ts.queueAudioSubsystem(eV.rB.EXPERIMENTAL);
}
function rV(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && no(i, null), null != t || null == n)) {
        tw = !1;
        return;
    }
    if (tw) return;
    tw = !0;
    let s = nn();
    (s.mute || s.deaf) && (nT({ deaf: !1, mute: !1 }), ts.eachConnection(ns));
}
function rB(e) {
    let { application: t } = e;
    to.add(t.id);
}
function rH(e) {
    let { application: t } = e;
    to.delete(t.id);
}
function rj(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (tl = !1), ts.eachConnection(ns);
                break;
            case "video":
                no(!1);
        }
}
function rY(e) {
    (tl = e.enabled), e.unmute && nT({ mute: !1, deaf: !1 }), ts.eachConnection(ns);
}
function rW(e) {
    let { enabled: t } = e;
    e_.A.requestPermission(eU.iL.CAMERA), no(t);
}
function rK(e) {
    let { sourceId: t, applicationName: n, quality: i } = e;
    if (!(0, M.Ao)() || null == R.A) return !1;
    let s = null,
        o = null,
        l = eT.A.getPidFromDesktopSource(t);
    ({ soundshareId: s, soundshareSession: o } = nx(l));
    let u = { desktopSource: { id: t, sourcePid: l, soundshareId: s, soundshareSession: o }, quality: i };
    null != a &&
        (ts.setClipsSource(null),
        (0, ey.isWindows)() && null != a.desktopSource.soundshareId && O.c1(a.desktopSource.soundshareId)),
        null != s && nP(s, o),
        (a = u);
    let c = t8("MediaEngineStore clips"),
        d = nn().videoHook;
    ts.setClipsSource({
        desktopDescription: {
            id: a.desktopSource.id,
            soundshareId: a.desktopSource.soundshareId,
            useVideoHook: d,
            useGraphicsCapture: nh(),
            useCaptureDeviceForEncode: !1,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: nE(),
            videoHookStaleFrameTimeoutMs: eZ,
            graphicsCaptureStaleFrameTimeoutMs: eX,
            hdrCaptureMode: c,
        },
        quality: i,
        applicationName: n,
    });
}
function r$(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((a = null), ts.setClipsSource(null));
}
function rz(e) {
    let { settings: t } = e;
    if (t?.desktopSettings != null) {
        let e = null,
            n = null,
            { sourceId: r, sound: i } = t.desktopSettings,
            s = t.context ?? eV.x.DEFAULT,
            a = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
            o = !1 === i ? null : eT.A.getPidFromDesktopSource(r);
        ey.isPlatformEmbedded &&
            !0 === i &&
            (({ soundshareId: e, soundshareSession: n } = nx(o)), null != e && nP(e, n)),
            na(s),
            no(s === eV.x.STREAM && tT, {
                desktopSource: { id: r, sourcePid: o, soundshareId: e, soundshareSession: n },
                quality: { resolution: a.resolution, frameRate: a.frameRate },
            });
    } else if (t?.cameraSettings != null) {
        let e = t.context ?? eV.x.DEFAULT,
            { videoDeviceGuid: n, audioDeviceGuid: r } = t.cameraSettings,
            i = e === eV.x.STREAM && tT,
            s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
        no(i, {
            cameraSource: { videoDeviceGuid: n, audioDeviceGuid: r },
            quality: { resolution: s.resolution, frameRate: s.frameRate },
        });
    } else no(tT, null);
}
function rq(e) {
    let { section: t } = e;
    return t === eP.nc_.VOICE && nv(), !1;
}
function rZ() {
    return ts.eachConnection(nf), !1;
}
function rX(e) {
    let { enabled: t } = e,
        n = nT({ aecDumpEnabled: t });
    ts.setAecDump(n.aecDumpEnabled);
}
function rQ(e) {
    let { enabled: t } = e;
    nT({ openH264Enabled: t }), eN.Ay?.setOpenH264Enabled?.(t);
}
function rJ(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (ta = Object.values(eV.x).reduce((e, n) => {
        let r = n,
            i = tr();
        return (e[r] = E().merge(i, t[r])), e;
    }, {})),
        v.w.set(ej, ta),
        ny();
}
function r0(e) {
    let { state: t } = e,
        n = G.A.isEnabled();
    if (t === eP.g6G.BACKGROUND && tT && !n) (tR = !0), no(!1);
    else {
        if (t !== eP.g6G.ACTIVE || !tR) return !1;
        (tR = !1), no(!0);
    }
    return !0;
}
function r1(e) {
    ts.eachConnection((t) => t.setBitRate(e.bitrate));
}
function r2() {
    if ((!tT && null == s) || null != eL.A.getRTCConnectionId()) return !1;
    no(!1, null);
}
function r3() {
    return !!tH && ((tH = !1), !0);
}
function r6(e) {
    ts.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function r4(e) {
    let { settings: t } = e;
    ts.applyMediaFilterSettings(t).finally(() => {
        (tj = !1), r.emitChange();
    });
}
function r5() {
    tj = !0;
}
function r7() {
    tj = !1;
}
function r8(e) {
    t1 = e.enabled;
}
function r9() {
    if ((0, ey.isDesktop)() && ey.isPlatformEmbedded && !t7) {
        t7 = !0;
        let e = async () => {
            let t = await new Promise((e) => {
                eN.Ay.pollQueueMetrics((t) => {
                    e(t);
                });
            });
            t.periodMs = eV.tl;
            let n = it(t);
            null !== n && eI.default.track(eP.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, eV.tl);
        };
        setTimeout(e, eV.tl);
    }
}
class ie extends S.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        np(),
            nI(),
            rb(),
            rL(),
            nZ(),
            r9(),
            (0, ey.isWindows)() && ey.isPlatformEmbedded && nu(),
            (tQ = {
                [eV.O5.VIDEO]: ts.supports(eV.O5.VIDEO),
                [eV.O5.DESKTOP_CAPTURE]: ts.supports(eV.O5.DESKTOP_CAPTURE),
                [eV.O5.HYBRID_VIDEO]: ts.supports(eV.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eR.default, eO.A, eb.A, eD.A, L.A, U.A, eL.A, F.Ay, em.A, eM.default, ex.A, eA.A);
    }
    supports(e) {
        return ts.supports(e);
    }
    supportsInApp(e) {
        return tQ[e] || ts.supports(e);
    }
    isSupported() {
        return ts.supported();
    }
    isNoiseSuppressionSupported() {
        return ts.supports(eV.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return rC();
    }
    isNoiseCancellationError() {
        return tH;
    }
    isAutomaticGainControlSupported() {
        return ts.supports(eV.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nA() && (ts.supports(eV.O5.LEGACY_AUDIO_SUBSYSTEM) || ts.supports(eV.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return ts.supports(eV.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === ts.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return rC();
    }
    isAecDumpSupported() {
        return ts.supports(eV.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return ts.supports(eV.O5.VIDEO) && ts.supports(eV.O5.SIMULCAST);
    }
    getAecDump() {
        return nn().aecDumpEnabled;
    }
    getMediaEngine() {
        return ts;
    }
    getVideoComponent() {
        return ts.Video;
    }
    getCameraComponent() {
        return ts.Camera;
    }
    getKrispSuppressionLevel() {
        return d ?? 100;
    }
    getKrispEnableStats() {
        return tk;
    }
    isEnabled() {
        return tl;
    }
    isMute() {
        return this.isSelfMute() || tE;
    }
    isDeaf() {
        return this.isSelfDeaf() || tI;
    }
    hasContext(e) {
        return null != ta[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT;
        return e === eV.x.DEFAULT && tg;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT;
        return (
            !this.isEnabled() ||
            nn(e).mute ||
            !e_.A.didHavePermission(eU.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eV.x.DEFAULT && tA)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tv;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tv = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT,
            t = t2 && "voice_isolation" !== this.getSystemMicrophoneMode() && nn(e).mode === eP.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (eb.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return t1;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT;
        return !this.isSupported() || nn(e).deaf;
    }
    isVideoEnabled() {
        return tT && tO;
    }
    isVideoAvailable() {
        return Object.values(th).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return tO;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.STREAM;
        return tc === e && null != s;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.STREAM;
        return tc === e && null != s && s.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eV.x.DEFAULT;
        return e !== eR.default.getId() && (nn(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return ts.supports(eV.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eV.x.DEFAULT;
        return nn(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eV.x.DEFAULT;
        return nn(t).videoToggleStateMap[e] ?? eP.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eV.x.DEFAULT;
        return t === eV.x.DEFAULT && tq.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT;
        return e === eV.x.DEFAULT && tq.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tj;
    }
    isNativeAudioPermissionReady() {
        return t$;
    }
    getGoLiveSource() {
        return s;
    }
    getGoLiveContext() {
        return tc;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return td;
    }
    isH264MfDecodeAvailable() {
        return t_;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eV.x.DEFAULT,
            n = nn(t).localPans[e];
        return null != n ? n : eq;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eV.x.DEFAULT,
            n = t === eV.x.STREAM ? eV.Cn : eV.Hz,
            r = nn(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return nn().inputVolume;
    }
    getOutputVolume() {
        return nn().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT;
        return nn(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT;
        return nn(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return tU;
    }
    getActiveVoiceFilterAppliedAt() {
        return tG;
    }
    getPreviousVoiceFilter() {
        return tF;
    }
    getPreviousVoiceFilterAppliedAt() {
        return tV;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return nn().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return nn().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            E().each(ta, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === eP.TBI.PUSH_TO_TALK && to.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nR(tf, nn().inputDeviceId);
    }
    getOutputDeviceId() {
        return nR(tp, nn().outputDeviceId);
    }
    getVideoDeviceId() {
        return nR(th, nn().videoDeviceId);
    }
    getInputDevices() {
        return tf;
    }
    getOutputDevices() {
        return tp;
    }
    getVideoDevices() {
        return th;
    }
    getEchoCancellation() {
        let e = nn();
        return eb.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return ts.supports(eV.O5.SIDECHAIN_COMPRESSION) && nn().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return nn().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return nn().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tW && tW;
    }
    getOpenH264Enabled() {
        return (0, ey.isLinux)() && nn().openH264Enabled;
    }
    getLoopback() {
        return tX.size > 0;
    }
    getLoopbackReasons() {
        return tX;
    }
    getNoiseSuppression() {
        let e = nn();
        return eb.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = nn();
        return eb.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return nn().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return nn().noiseCancellation;
    }
    getHardwareEncoding() {
        return e3;
    }
    getEnableSilenceWarning() {
        return nn().silenceWarning;
    }
    getDebugLogging() {
        return ts.getDebugLogging();
    }
    getQoS() {
        return nn().qos;
    }
    getAttenuation() {
        return nn().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return nn().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return nn().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return ng() && nn().automaticAudioSubsystem ? eV.rB.AUTOMATIC : ts.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return ts.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return nn().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eF.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT;
        return nn(e);
    }
    getState() {
        return {
            settingsByContext: ta,
            inputDevices: tf,
            outputDevices: tp,
            appSupported: tQ,
            krispModuleLoaded: tx,
            krispVersion: c,
            krispSuppressionLevel: d,
            goLiveSource: s,
            goLiveContext: tc,
        };
    }
    getInputDetectedThisConnection() {
        return tb;
    }
    getInputDetected() {
        return o.inputDetected;
    }
    getLastInputDetectedUpdateTime() {
        return o.lastUpdateTime;
    }
    getNoInputDetectedNotice() {
        return tD;
    }
    getInputDeviceOSMuted() {
        return l;
    }
    getInputDeviceOSVolume() {
        return u;
    }
    getPacketDelay() {
        return ey.isPlatformEmbedded || this.getMode() !== eP.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        ts.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return tu;
    }
    getVideoHook() {
        return nn().videoHook;
    }
    supportsVideoHook() {
        return ts.supports(eV.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = nn().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return ts.supports(eV.O5.EXPERIMENTAL_SOUNDSHARE) && T().satisfies(R.A?.os.release, ek.$x);
    }
    supportsHookSoundshare() {
        return (0, ey.isWindows)() && ts.supports(eV.O5.SOUNDSHARE) && T().satisfies(R.A?.os.release, ek.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = nn().useSystemScreensharePicker,
            n = (0, ey.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return ts.supports(eV.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return t5;
    }
    getUseGamescopeCapture() {
        return t4;
    }
    getSpeakingWhileMuted() {
        return tN;
    }
    getKrispModelOverride() {
        return _;
    }
    getKrispModels() {
        return tP;
    }
    getKrispVadActivationThreshold() {
        return nn().modeOptions.vadKrispActivationThreshold ?? ez;
    }
    hasActiveCallKitCall() {
        return t6;
    }
    setHasActiveCallKitCall(e) {
        t6 = e;
    }
    supportsScreenSoundshare() {
        return (0, ey.isMac)()
            ? ts.supports(eV.O5.SOUNDSHARE) && T().satisfies(R.A?.os.release, ek.P$) && nE()
            : (0, ey.isWindows)()
              ? ts.supports(eV.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, ey.isLinux)() && ts.supports(eV.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        return (0, ey.isWindows)()
            ? this.getInputDevices()[this.getInputDeviceId()]?.effects?.find((e) => e === e6)
            : (0, ey.isMac)() || (0, ey.isIOS)()
              ? f
              : void 0;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.x.DEFAULT,
            t = this.supports(eV.O5.VIDEO)
                ? [{ rid: "100", type: e === eV.x.DEFAULT ? eV.mI.VIDEO : eV.mI.SCREEN, quality: eV.Y4 }]
                : [];
        return (
            this.isSimulcastSupported() &&
                e === eV.x.DEFAULT &&
                t.push({ rid: "50", type: eV.mI.VIDEO, quality: eV.Cl }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: (0, ey.isWeb)() };
        return ts.fetchAsyncResources(e);
    }
    startDavePreload() {
        if (!tY && ((tY = !0), (0, ey.isWeb)())) {
            let e = { fetchDave: !0 };
            ts.fetchAsyncResources(e).catch((e) => {
                eH.warn("DAVE preload failed:", e), ev.A.captureException(e);
            });
        }
    }
    getSupportedSecureFramesProtocolVersion() {
        return ts.getSupportedSecureFramesProtocolVersion();
    }
    hasClipsSource() {
        return null != a;
    }
    getGpuBrand() {
        return tJ;
    }
}
function it(e) {
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
(r = new ie(C.h, {
    VOICE_CHANNEL_SELECT: rV,
    VOICE_STATE_UPDATES: nB,
    CONNECTION_OPEN: nk,
    CONNECTION_CLOSED: nG,
    POST_CONNECTION_OPEN: nF,
    RTC_CONNECTION_STATE: nV,
    AUDIO_SET_TEMPORARY_SELF_MUTE: nH,
    AUDIO_TOGGLE_SELF_MUTE: nj,
    AUDIO_SET_SELF_MUTE: nY,
    AUDIO_TOGGLE_SELF_DEAF: nK,
    AUDIO_TOGGLE_LOCAL_MUTE: n$,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: nz,
    AUDIO_SET_LOCAL_VOLUME: nX,
    AUDIO_SET_LOCAL_PAN: nQ,
    AUDIO_SET_MODE: nJ,
    AUDIO_SET_INPUT_VOLUME: n0,
    AUDIO_SET_OUTPUT_VOLUME: n1,
    AUDIO_SET_INPUT_DEVICE: n2,
    AUDIO_SET_OUTPUT_DEVICE: n3,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: n4,
    AUDIO_SET_ECHO_CANCELLATION: re,
    AUDIO_SET_SIDECHAIN_COMPRESSION: rt,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: rn,
    AUDIO_SET_LOOPBACK: ri,
    AUDIO_SET_NOISE_SUPPRESSION: rl,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: ru,
    AUDIO_SET_NOISE_CANCELLATION: rc,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: rd,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: rf,
    AUDIO_SET_DEBUG_LOGGING: rp,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: rh,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: r_,
    MEDIA_ENGINE_SET_VIDEO_HOOK: rm,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: rE,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: rg,
    AUDIO_SET_ATTENUATION: rA,
    AUDIO_SET_QOS: rI,
    MEDIA_ENGINE_DEVICES: n7,
    AUDIO_VOLUME_CHANGE: n8,
    AUDIO_RESET: rT,
    AUDIO_INPUT_DETECTED: ry,
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: rS,
    AUDIO_SET_SUBSYSTEM: rU,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rk,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rY,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rW,
    MEDIA_ENGINE_PERMISSION: rj,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: rz,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: n6,
    MEDIA_ENGINE_INTERACTION_REQUIRED: n5,
    USER_SETTINGS_MODAL_INIT: rq,
    USER_SETTINGS_MODAL_SET_SECTION: rq,
    CERTIFIED_DEVICES_SET: rZ,
    RPC_APP_CONNECTED: rB,
    RPC_APP_DISCONNECTED: rH,
    OVERLAY_INITIALIZE: nU,
    APP_STATE_UPDATE: r0,
    SET_CHANNEL_BITRATE: r1,
    SET_VAD_PERMISSION: rv,
    SET_NATIVE_PERMISSION: rN,
    SET_CHANNEL_VIDEO_QUALITY_MODE: r6,
    MEDIA_ENGINE_SET_AEC_DUMP: rX,
    MEDIA_ENGINE_SET_OPENH264_ENABLED: rQ,
    MEDIA_ENGINE_RESET_SETTINGS: rJ,
    CHANNEL_DELETE: r2,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: r3,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: r4,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: r5,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: r7,
    USER_SETTINGS_PROTO_UPDATE: nW,
    CLIPS_INIT: rK,
    CLIPS_SETTINGS_UPDATE: r$,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: r8,
    VOICE_FILTER_REQUEST_SWITCH: rM,
    VOICE_FILTER_LOOPBACK_TOGGLE: rw,
    VOICE_FILTER_APPLIED: rP,
    VOICE_FILTER_DOWNLOAD_FAILED: rx,
    VOICE_FILTER_APPLY_FAILED: rx,
})),
    (o = new Q.A(ts, r));
let ir = r;
