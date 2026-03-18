"use strict";
let r, i, s, a, o, l, u, c, d, _, f;
n.d(t, { Ay: () => it }), n(323874), n(14289), n(35956), n(321073), n(790599);
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
    ei = n(276006),
    es = n(993628),
    ea = n(886124),
    eo = n(165479),
    el = n(896014),
    eu = n(765396),
    ec = n(75076),
    ed = n(674966),
    e_ = n(559633),
    ef = n(3527),
    ep = n(879172),
    eh = n(617617),
    em = n(340913),
    eE = n(996744),
    eg = n(28075),
    eA = n(954571),
    eI = n(353835),
    eT = n(927813),
    eS = n(723702),
    ey = n(728458),
    ev = n(837921),
    eN = n(350535),
    eC = n(961350),
    eR = n(131319),
    eO = n(347481),
    eb = n(734057),
    eD = n(383501),
    eL = n(851581),
    ew = n(287809),
    eM = n(117549),
    ex = n(652215),
    eP = n(502075),
    ek = n(765682),
    eU = n(355097),
    eG = n(509381),
    eF = n(731854),
    eV = n(985018);
let eB = new x.A("MediaEngineStore"),
    eH = "MediaEngineStore",
    ej = 4,
    eY = 1,
    eW = 1,
    eK = 1,
    e$ = 0.5,
    ez = { left: 1, right: 1 },
    eq = 500,
    eZ = 5 * eT.A.Millis.SECOND,
    eX = -60,
    eQ = 100,
    eJ = 2 * eT.A.Millis.SECOND,
    e0 = 30 * eT.A.Millis.SECOND,
    e1 = +eT.A.Millis.MINUTE,
    e2 = !0,
    e3 = "deep_noise_suppression",
    e6 = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2",
    e4 = "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f",
    e5 = 0,
    e7 = null;
function e8() {
    if (!(0, eS.isIOS)() || null == e7) return !1;
    let e = e7();
    if (null == e || !e.startsWith("ARM64_")) return !1;
    let t = e.substring(6);
    return ("T" === t[0] || "S" === t[0]) && parseInt(t.substring(1), 10) >= 8122;
}
let e9 = null;
async function te() {
    if (!(0, eS.isMac)() || R.A?.os.arch !== "arm64" || R.A?.processUtils?.getSystemInfo == null) {
        e9 = !1;
        return;
    }
    let e = await R.A.processUtils.getSystemInfo(),
        t = e.cpus?.[0]?.model ?? "";
    eB.info("Detected Mac CPU", t);
    let n = t.match(/Apple M(\d+)/);
    if (null == n) {
        e9 = !0;
        return;
    }
    e9 = parseInt(n[1], 10) >= 3;
}
function tt() {
    return !0 === e9;
}
function tn() {
    return {
        mode: ex.TBI.VOICE_ACTIVITY,
        modeOptions: {
            threshold: eX,
            autoThreshold: eS.isPlatformEmbedded || __OVERLAY__,
            vadUseKrisp: !0,
            vadKrispActivationThreshold: e$,
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
        inputVolume: eF.Hz,
        outputVolume: eF.Hz,
        inputDeviceId: eF.dx,
        outputDeviceId: eF.dx,
        videoDeviceId: eF.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: ti.supports(eF.O5.VIDEO_HOOK),
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
let tr = {
        [eG.m.CUSTOM]: {},
        [eG.m.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [eG.m.STUDIO]: {
            mode: ex.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    ti = (0, y.hB)((0, y.WI)());
eB.enableNativeLogger(!0);
let ts = {},
    ta = new Set([eF.x.DEFAULT]),
    to = ti.supports(eF.O5.AUTO_ENABLE),
    tl = !1,
    tu = eF.x.STREAM,
    tc = performance.now(),
    td = null,
    t_ = { [eF.dx]: nv("No Input Devices") },
    tf = { [eF.dx]: nv("No Output Devices") },
    tp = { [eF.dx]: nv("No Video Devices") },
    th = new N.Ep(),
    tm = !1,
    tE = !1,
    tg = !1,
    tA = !1,
    tI = !1,
    tT = eF.qe,
    tS = eF.qe,
    ty = !1,
    tv = !1,
    tN = new N.Ep(),
    tC = !1,
    tR = !1,
    tO = !1,
    tb = !1,
    tD = new N.Ep(),
    tL = !1,
    tw = !1,
    tM = !1,
    tx = [],
    tP = !1,
    tk = null,
    tU = null,
    tG = null,
    tF = null,
    tV = null,
    tB = !1,
    tH = !1,
    tj = !1,
    tY = null,
    tW = null,
    tK = !1;
ed.A.hasPermission(ek.iL.AUDIO, { showAuthorizationError: !1 }),
    ed.A.hasPermission(ek.iL.CAMERA, { showAuthorizationError: !1 });
let t$ = !1,
    tz = new Set(),
    tq = t$,
    tZ = new Set(),
    tX = {},
    tQ = null,
    tJ = null,
    t0 = !0,
    t1 = !1,
    t2 = new N.Ep(),
    t3 = !1,
    t6 = !1,
    t4 = !1,
    t5 = !1;
function t7(e) {
    return (0, z.p)({ location: e }).hdrCaptureMode;
}
async function t8() {
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
function t9() {
    return null != tW ? tW : "u" > typeof window ? (tW = t8().then((e) => ((tY = e), e))) : Promise.resolve(!1);
}
function ne() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eF.x.DEFAULT,
        t = ts[e];
    return null == t && ((t = tn()), (ts[e] = t)), t;
}
function nt() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eF.x.DEFAULT,
        t = ne(e),
        n = tr[t.activeInputProfile ?? eG.m.CUSTOM],
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
function nn(e) {
    let t = nt(e.context),
        n = t.mode;
    e.context === eF.x.DEFAULT && (0, et.N)(!1, !1);
    let { showPTTSpeakingIndicator: r } = em.A.getConfig({ location: "setInputMode" }),
        i = r && n === ex.TBI.PUSH_TO_TALK;
    e.setInputMode(n, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: !!i || t.modeOptions.autoThreshold,
        vadUseKrisp: (!!i || t.modeOptions.vadUseKrisp) && rN(),
        vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? e$,
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        vadDuringPreProcess: t.modeOptions.vadDuringPreProcess ?? !1,
        pttReleaseDelay: Math.round(t.modeOptions.delay),
    });
}
function nr(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eF.Hz;
    return E().clamp(e, 0, t);
}
function ni(e) {
    let t = nt(e.context),
        n = !to || t.mute || t.deaf;
    e.context === eF.x.DEFAULT
        ? (n = n || tm || tE || tg || !ed.A.didHavePermission(ek.iL.AUDIO))
        : e.context === eF.x.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eF.x.DEFAULT && b.A.updateNativeMute();
}
function ns(e) {
    e !== tu && (null != s && ti.setGoLiveSource(null, tu), (tu = e));
}
function na() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tI,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
        n = s;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, eS.isWindows)() && O.c1(n.desktopSource.soundshareId),
            ti.setGoLiveSource(null, tu)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            ti.setGoLiveSource(null, tu),
        tI || e)
    ) {
        let t = nt().videoDeviceId;
        tI && t === eF.dx && tS === eF.dx && tT !== eF.qe ? (t = tT) : (tS = t),
            (tT = (tI = e) ? nC(tp, t) : eF.qe),
            ti.setVideoInputDevice(tT);
    }
    if (((s = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = t7("MediaEngineStore go live"),
                i = nt().videoHook,
                s = np(),
                a = s ? (nh() ? eP.zl : eP.eg) : 0,
                o = (0, eS.isWindows)() && (0, ei.b)("updateVideo").enabled,
                l = !1;
            (0, eS.isWindows)() &&
                a >= eP.zl &&
                (l =
                    !0 === tJ
                        ? eo.q.getConfig({ location: "updateVideo" }).enabled
                        : ea.d.getConfig({ location: "updateVideo" }).enabled),
                ti.setGoLiveSource(
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
                            allowScreenCaptureKit: nm(),
                            videoHookStaleFrameTimeoutMs: eq,
                            graphicsCaptureStaleFrameTimeoutMs: eZ,
                            hdrCaptureMode: n,
                            enableGlobalFramePoolLock: (0, $.H)({ location: "updateVideo" }).enabled,
                            useGraphicsCaptureDirtyRegions: l,
                        },
                        quality: e,
                    },
                    tu,
                );
        }
        null != t.cameraSource &&
            ti.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: t.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: t.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                tu,
            );
    }
}
function no(e) {
    switch (e) {
        case eF.CO.CPU_OVERUSE:
            return k.B6.NoiseCancellerCpuOveruse;
        case eF.CO.FAILED:
            return k.B6.NoiseCancellerFailed;
        case eF.CO.VAD_CPU_OVERUSE:
            return k.B6.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function nl() {
    null === td &&
        ti
            .getCodecSurvey()
            .then((e) => {
                try {
                    let t = JSON.parse(e);
                    if (null == t || null == t.available_video_decoders) throw Error("decoder survey is not available");
                    td = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                } catch (e) {
                    eB.error("Failed to parse codec survey", e), (td = !1);
                }
            })
            .catch((e) => {
                eB.error("Failed to get codec survey", e), (td = !1);
            })
            .finally(() => {
                C.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
            });
}
function nu(e) {
    let t = (0, B.F)({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function nc(e, t) {
    e.setAutomaticGainControl(nu(t));
}
function nd(e, t) {
    let n = (0, ef.A)(t, r.getSystemMicrophoneMode());
    n !== t && eB.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: i } = (0, B.F)({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(i);
    let { noiseCancellationAfterProcessing: s, vadAfterWebrtc: a } = (0, Q.$)({ location: "setNoiseCancellation" });
    e.setNoiseCancellationAfterProcessing(s), e.setVADAfterWebrtc(a);
}
function n_(e) {
    let t = nt(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eO.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eO.A.hasNoiseSuppression(n) || t.noiseSuppression),
        nc(e, eO.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        nd(e, t.noiseCancellation),
        e.setVoiceFilterId(tk),
        (0, eS.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function nf() {
    th.start(e0, () => {
        eB.error("Device enumeration timed out"), eA.default.track(ex.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
    }),
        ti.on(y.bg.Connection, (e) => {
            nn(e), ni(e), n_(e);
            let t = nt();
            e.setAttenuation(t.attenuation, t.attenuateWhileSpeakingSelf, t.attenuateWhileSpeakingOthers),
                e.setQoS(t.qos),
                (0, eS.isWindows)()
                    ? (e.setExperimentFlag(eF.fd.H265_HARDWARE_ONLY, !0),
                      t9().then((t) => {
                          e.setExperimentFlag(eF.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                      }),
                      (0, q.W)({ location: "setupMediaEngine" }).enabled &&
                          e.setExperimentFlag(eF.fd.H264_MF_ZERO_COPY, !0))
                    : (0, eS.isMac)() && e.setExperimentFlag(eF.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                (0, eS.isLinux)() &&
                    (0, J.b)({ location: "setupMediaEngine" }).enabled &&
                    t.openH264Enabled &&
                    e.setExperimentFlag(eF.fd.USE_LIBOPENH264_DECODER, !0);
            let n = eD.A.getGuildId(),
                {
                    muteBeforeProcessing: i,
                    pttBeforeProcessing: a,
                    skipEncode: o,
                } = (null != n ? W.A : Y.A).getCurrentConfig(
                    { location: "setupMediaEngine", guildId: n ?? void 0 },
                    { autoTrackExposure: !0 },
                );
            i && e.setExperimentFlag(eF.fd.MUTE_BEFORE_PROCESSING, !0),
                a && e.setExperimentFlag(eF.fd.PTT_BEFORE_PROCESSING, !0),
                o && e.setExperimentFlag(eF.fd.SKIP_ENCODE, !0),
                (0, ee.J)({ location: "setupMediaEngine" }).enabled &&
                    e.setExperimentFlag(eF.fd.LOW_LATENCY_RATE_CONTROL, !0);
            let l = !1,
                u = !0;
            e.setExperimentFlag(eF.fd.RESET_DECODER_ON_ERRORS, !0),
                l && e.setExperimentFlag(eF.fd.SOFTWARE_FALLBACK_ON_ERRORS, !0),
                u && e.setExperimentFlag(eF.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
            let { swallowVolumeOnlySpeakingEvents: c } = D.A.getConfig({ location: "MediaEngineStore" });
            if ((c && e.setExperimentFlag(eF.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === eF.x.STREAM)) {
                let t = nO(tf);
                e.setSoundshareDiscardRearChannels(t);
            }
            if ((0, eS.isWindows)())
                e.setExperimentFlag(eF.fd.SIGNAL_AV1, !0), e.setExperimentFlag(eF.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
            else if ((0, eS.isMac)())
                if ((e.setExperimentFlag(eF.fd.SIGNAL_AV1_DECODE, !0), tt())) {
                    let { enabled: t } = (0, j.t)("MediaEngineStore");
                    t
                        ? (eB.info("This Mac supports AV1 Hardware. AV1 Hardware enabled."),
                          e.setExperimentFlag(eF.fd.SIGNAL_AV1_HARDWARE_DECODE, !0))
                        : eB.info("This Mac supports AV1 Hardware. AV1 Hardware not yet enabled.");
                } else eB.info("This Mac does not support AV1 Hardware.");
            else if ((0, eS.isLinux)()) e.setExperimentFlag(eF.fd.SIGNAL_AV1_DECODE, !0);
            else if ((0, eS.isIOS)() && e8()) {
                let { enabled: t } = (0, H.$)("MediaEngineStore");
                t &&
                    (e.setExperimentFlag(eF.fd.SIGNAL_AV1_DECODE, !0),
                    e.setExperimentFlag(eF.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
            }
            if ((0, eS.isWeb)()) {
                let { enabled: t } = (0, K.O)("MediaEngineStore");
                e.setExperimentFlag(eF.fd.BROWSER_HEVC, t);
            }
            for (let n of ((0, eS.isWindows)() &&
                tQ?.startsWith("AMD") &&
                (0, el.F)("MediaEngineStore").enabled &&
                e.setExperimentFlag(eF.fd.WMF_GPU_ENCODE, !0),
            (0, eS.isWindows)() &&
                tQ?.startsWith("Intel") &&
                (0, eu.J)("MediaEngineStore").enabled &&
                e.setExperimentFlag(eF.fd.WMF_GPU_ENCODE, !0),
            (0, eS.isWindows)() &&
                tQ?.startsWith("Qualcomm") &&
                (0, el.F)("MediaEngineStore").enabled &&
                e.setExperimentFlag(eF.fd.WMF_GPU_ENCODE, !0),
            ti.setHasFullbandPerformance((0, P.A)()),
            e.setRemoteAudioHistory(1e3),
            (0, w.A)(r) && e.setClipsKeyFrameInterval(eF.X1),
            (t = nt(e.context)),
            e.setPostponeDecodeLevel(eQ),
            Object.keys(t.localMutes)))
                n !== eC.default.getId() && e.setLocalMute(n, t.localMutes[n]);
            for (let n of Object.keys(t.localVolumes))
                n !== eC.default.getId() && e.setLocalVolume(n, t.localVolumes[n]);
            for (let n of Object.keys(t.localPans)) {
                let r = t.localPans[n];
                e.setLocalPan(n, r.left, r.right);
            }
            for (let n of Object.keys(t.disabledLocalVideos)) e.setLocalVideoDisabled(n, t.disabledLocalVideos[n]);
            e.on(y.yq.Speaking, (t, n, r, i) => {
                C.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: i });
            }),
                e.context === eF.x.DEFAULT &&
                    ((tv = !1),
                    e.on(y.yq.SpeakingWhileMuted, () => {
                        let e = !tv;
                        (tv = !0),
                            e && r.emitChange(),
                            tN.start(eJ, () => {
                                (tv = !1), r.emitChange();
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
                        eA.default.track(ex.HAw.VIDEOHOOK_INITIALIZED, {
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
                    eB.warn(`noisecancellererror event: ${e}`),
                        (0, k.QW)({ type: k.iy.NOISE_CANCELLER_ERROR, underlyingError: no(e) }),
                        (tB = !0),
                        eA.default.track(ex.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        C.h.dispatch({ type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: !0 }),
                        C.h.dispatch({ type: "AUDIO_SET_NOISE_CANCELLATION", enabled: !1 }),
                        C.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e });
                }),
                e.on(y.yq.VoiceActivityDetectorError, (e) => {
                    eB.warn(`voiceactivitydetectorerror event: ${e}`),
                        (0, k.QW)({ type: k.iy.NOISE_CANCELLER_ERROR, underlyingError: no(e) }),
                        eA.default.track(ex.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                        C.h.dispatch({
                            type: "AUDIO_SET_MODE",
                            context: eF.x.DEFAULT,
                            mode: ex.TBI.VOICE_ACTIVITY,
                            options: { ...nt(eF.x.DEFAULT).modeOptions, vadUseKrisp: !1 },
                        }),
                        C.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e });
                }),
                e.on(y.yq.SdpError, (e, t, n, r) => {
                    eA.default.track(ex.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: r });
                }),
                e.on(y.yq.VideoState, (t) => {
                    C.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                }),
                e.setBitRate(eR.A.bitrate),
                e.applyVideoQualityMode(eM.A.mode),
                (0, eS.isWindows)() &&
                    ti.supports(eF.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                    ti.setAsyncVideoInputDeviceInit(!0);
        }),
        ti.on(y.bg.DeviceChange, (e, t, n) => {
            th.stop(),
                C.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
        }),
        ti.on(y.bg.VolumeChange, (e, t) => {
            C.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
        }),
        ti.on(y.bg.DesktopSourceEnd, (e, t) => {
            C.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
        }),
        ti.on(y.bg.AudioPermission, (e) => {
            (tK = !0), C.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
        }),
        ti.on(y.bg.VideoPermission, (e) => {
            C.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
        }),
        ti.on(y.bg.WatchdogTimeout, async () => {
            let e;
            if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                try {
                    await eI.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                } catch (t) {
                    "number" == typeof t.status && (e = t.status);
                }
            eB.warn(`Watchdog timeout, report submission status: ${e ?? 200}`);
            let t = es.A.getConfig({ location: "watchdog_timeout" }).enabled && null != R.A.processUtils.setCrashReason;
            eA.default.track(
                ex.HAw.VOICE_WATCHDOG_TIMEOUT,
                { minidump_submission_error: e, will_restart: t },
                { flush: !0 },
            ),
                t &&
                    (eB.info("Relaunching app due to voice watchdog timeout"),
                    await R.A.processUtils.setCrashReason("voice-watchdog-timeout"),
                    v.w.set("discord_watchdog_restart_timestamp", Date.now().toString()),
                    R.A.app.relaunch());
        }),
        ti.on(y.bg.VideoInputInitialized, (e) => {
            eA.default.track(ex.HAw.VIDEO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_first_frame_ms: e.initializationTimerExpired
                    ? null
                    : Math.round(e.timeToFirstFrame * eT.A.Millis.SECOND),
                timed_out: e.initializationTimerExpired,
                activity: e.entropy,
                media_session_id: eD.A.getMediaSessionId(),
                rtc_connection_id: eD.A.getRTCConnectionId(),
            });
        }),
        ti.on(y.bg.AudioInputInitialized, (e) => {
            eA.default.track(ex.HAw.AUDIO_INPUT_INITIALIZED, {
                device_name: e.description.name,
                time_to_initialized_ms: Math.round(e.timeToInitialized * eT.A.Millis.SECOND),
                rtc_connection_id: eD.A.getRTCConnectionId(),
            });
        }),
        ti.on(y.bg.ClipsRecordingRestartNeeded, () => {
            C.h.dispatch({ type: "CLIPS_RESTART" });
        }),
        ti.on(y.bg.ClipsInitFailure, (e, t) => {
            C.h.wait(() => {
                C.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t });
            });
        }),
        ti.on(y.bg.ClipsRecordingEnded, (e, t) => {
            a?.desktopSource?.id === e && (null != t && s?.desktopSource?.soundshareId !== t && O.c1(t), (a = null));
        }),
        ti.on(y.bg.NativeScreenSharePickerUpdate, (e, t) => {
            C.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
        }),
        ti.on(y.bg.NativeScreenSharePickerCancel, (e) => {
            C.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
        }),
        ti.on(y.bg.NativeScreenSharePickerError, (e) => {
            C.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
        }),
        ti.on(y.bg.AudioDeviceModuleError, (e, t, n) => {
            eA.default.track(ex.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
        }),
        ti.on(y.bg.VideoCodecError, (e) => {
            let t = "encode" === e.mode ? k.iy.VIDEO_ENCODE_ERROR : k.iy.VIDEO_DECODE_ERROR,
                n = { videoCodec: e.codecStandard, errorMessage: e.message };
            (0, k.QW)(
                t === k.iy.VIDEO_ENCODE_ERROR
                    ? { type: t, ...n, videoEncoder: e.implName }
                    : { type: t, ...n, videoDecoder: e.implName },
            );
        }),
        ti.on(y.bg.ConnectionStats, (e) => {
            C.h.dispatch({
                type: "MEDIA_ENGINE_CONNECTION_STATS",
                connectionStats: e.map((e) => {
                    let { stats: t, connection: n } = e;
                    return {
                        stats: t,
                        mediaEngineConnectionId: n.mediaEngineConnectionId,
                        version: e5++,
                        context: n.context,
                    };
                }),
            });
        }),
        ti.on(y.bg.VoiceQueueMetrics, (e) => {
            let t = ie(e);
            null !== t && eA.default.track(ex.HAw.VOICE_QUEUE_METRICS, t);
        }),
        ti.setOnVideoContainerResized((e, t, n) => {
            C.h.wait(() =>
                C.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
            );
        }),
        te(),
        ri(),
        ra(),
        o.reset(),
        (0, eL.w)().then((e) => {
            null != e && ((tQ = e.gpu_brand), (tJ = e.has_intel_hybrid_igpu));
        }),
        ti.on(y.bg.SystemMicrophoneModeChange, (e) => {
            (f = e), ti.eachConnection(n_), r.emitChange();
        });
}
function np() {
    return (0, eS.isWindows)() && T().satisfies(R.A?.os.release, eP.yg);
}
function nh() {
    return (0, eS.isWindows)() && T().satisfies(R.A?.os.release, eP.fG);
}
function nm() {
    return (0, eS.isMac)() && ti.supports(eF.O5.SCREEN_CAPTURE_KIT) && T().satisfies(R.A?.os.release, eP.e);
}
function nE() {
    return (
        (0, eS.isWindows)() &&
        ti.supports(eF.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        ti.supports(eF.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function ng() {
    return ti.supports(eF.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function nA() {
    let e = v.w.get("audio");
    null != e && (v.w.set(eH, { [eF.x.DEFAULT]: e }), v.w.remove("audio")),
        (ts = v.w.get(eH) ?? {}),
        E().each(ts, (e) => {
            E().defaultsDeep(e, tn()),
                null != e.modeOptions &&
                    "string" == typeof e.modeOptions.shortcut &&
                    (e.modeOptions.shortcut = (0, eN.OH)(e.modeOptions.shortcut)),
                null != e.modeOptions &&
                    e.vadUseKrispSettingVersion !== ej &&
                    ((e.vadUseKrispSettingVersion = ej), (e.modeOptions.vadUseKrisp = !0)),
                e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                e.vadThrehsoldMigrated ||
                    ((e.vadThrehsoldMigrated = !0), e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = eX)),
                ti.supports(eF.O5.SIDECHAIN_COMPRESSION) &&
                    e.sidechainCompressionSettingVersion < eK &&
                    ((e.sidechainCompressionSettingVersion = eK), (e.sidechainCompression = !0)),
                (0, eS.isWeb)()
                    ? e.ncUseKrispjsSettingVersion !== eW &&
                      ((e.ncUseKrispjsSettingVersion = eW), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                    : e.ncUseKrispSettingVersion !== eY &&
                      ((e.ncUseKrispSettingVersion = eY), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
        }),
        nS();
}
function nI(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eF.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = ne(t);
    return Object.assign(r, e), !__OVERLAY__ && n && v.w.set(eH, ts), r;
}
function nT() {
    v.w.remove(eH), location.reload();
}
function nS() {
    let e = nt();
    ti.setAudioInputDevice(e.inputDeviceId),
        ti.setAudioOutputDevice(e.outputDeviceId),
        na(),
        ti.setInputVolume(e.inputVolume),
        ti.setOutputVolume(e.outputVolume),
        ti.setAecDump(e.aecDumpEnabled),
        ti.setSidechainCompression(e.sidechainCompression),
        ti.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        ti.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        ev.Ay?.setOpenH264Enabled?.(e.openH264Enabled);
}
function ny() {
    to || ti.enable().then(() => C.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nv(e) {
    return { id: eF.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
}
function nN(e, t) {
    if (0 === e.length) {
        let e = nv(t);
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
function nC(e, t) {
    let n = e[t] ?? e[eF.dx] ?? E()(e).values().first();
    return null != n ? n.id : t;
}
function nR(e) {
    let t = t_;
    if (((t_ = nN(e, eV.intl.string(eV.t["/QIjDA"]))), !E().isEqual(t_, t))) {
        let e = nt(),
            t = nC(t_, e.inputDeviceId);
        ti.setAudioInputDevice(t), ti.eachConnection(n_);
    }
}
function nO(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nb(e) {
    ti.eachConnection((t) => {
        t.context === eF.x.STREAM && t.setSoundshareDiscardRearChannels(e);
    });
}
function nD(e) {
    let t = tf;
    if (((tf = nN(e, eV.intl.string(eV.t.xlUg0v))), !E().isEqual(tf, t))) {
        let e = nt(),
            n = nC(tf, e.outputDeviceId);
        ti.setAudioOutputDevice(n);
        let r = nO(t),
            i = nO(tf);
        r !== i && nb(i);
    }
}
function nL(e) {
    tR = e.length > 0;
    let t = tp;
    if (((tp = nN(e, eV.intl.string(eV.t.WKWARY))), tI && !E().isEqual(tp, t))) {
        let e = void 0 !== tp[tT],
            n = tT === eF.dx && t[eF.dx]?.disabled,
            r = "Firefox" === A().name && "" === tT && t[tT]?.name === "Default" && !t[tT]?.disabled;
        na(e || n || r);
    }
}
function nw() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = eh.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let r = n === eU.W.USER ? eF.x.DEFAULT : eF.x.STREAM,
            i = r === eF.x.STREAM ? eF.Cn : eF.Hz,
            s = t[n] ?? {},
            { localMutes: a, localVolumes: o } = nt(r);
        for (let [e, t] of Object.entries(s))
            null == (0, ep.tM)(r, e) &&
                (t.muted ? (a[e] = !0) : delete a[e],
                t.volume !== i ? (o[e] = t.volume) : delete o[e],
                ti.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, r));
        if (e)
            for (let e of new Set([...Object.keys(a), ...Object.keys(o)]))
                null == s[e] &&
                    (delete a[e],
                    delete o[e],
                    ti.eachConnection((t) => {
                        t.setLocalVolume(e, i), t.setLocalMute(e, !1);
                    }, r));
        nI({ localMutes: a, localVolumes: o }, r);
    }
}
function nM(e) {
    if (null == r)
        return (
            eB.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
            { soundshareId: null, soundshareSession: "" }
        );
    {
        let t = r.getExperimentalSoundshare() ? e : eI.A.getAudioPid(e),
            n = "";
        return null != t && (n = eI.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n };
    }
}
function nx(e, t) {
    (0, eS.isWindows)() &&
        e > 1 &&
        O.GH(e, { soundshare_session: t }).then((t) => {
            null == t ||
                F.Ay.shouldContinueWithoutElevatedProcessForPID(e) ||
                C.h.wait(() => {
                    C.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: t });
                });
        });
}
function nP(e) {
    (i = e.sessionId), (tm = !1), (tA = !1);
    let t = nt();
    nE() && (ng() ? rU(eF.rB.AUTOMATIC) : t.automaticAudioSubsystem && rG()),
        ti.supports(eF.O5.OFFLOAD_ADM_CONTROLS) && ti.setOffloadAdmControls(!0),
        (0, eS.isIOS)() &&
            (0, Z.Y)("handleConnectionOpen").enabled &&
            ti.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
        (0, eE.Lb)({ location: "MediaEngineStore", autoTrackExposure: !1 }) &&
            null !== t.mostRecentlyRequestedVoiceFilter &&
            (0, eS.isDesktop)() &&
            (eg.A.getLastInitAttemptMayHaveCrashed()
                ? (C.h.dispatch({ type: "AUDIO_SET_SELF_MUTE", mute: !0, context: eF.x.DEFAULT, playSoundEffect: !0 }),
                  nI({ mostRecentlyRequestedVoiceFilter: null }))
                : n(342887).md()),
        nw();
}
function nk(e) {
    let { mediaEngineState: t } = e;
    (ts = t.settingsByContext),
        (t_ = t.inputDevices),
        (tf = t.outputDevices),
        (tX = t.appSupported),
        (tM = t.krispModuleLoaded),
        (c = t.krispVersion),
        (tu = t.goLiveContext);
}
function nU() {
    i = null;
}
function nG() {
    return (0, eS.isWeb)() && r.startDavePreload(), !1;
}
function nF(e) {
    switch (e.state) {
        case ex.S7L.CONNECTING:
            ny();
            break;
        case ex.S7L.RTC_CONNECTING:
            (tb = !1), (l = void 0), (u = void 0), (tO = !1), (t1 = !1), t2.stop(), tD.stop(), o.reset();
            break;
        case ex.S7L.RTC_CONNECTED:
            na();
            break;
        case ex.S7L.DISCONNECTED:
            nz(), nq();
    }
}
function nV(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        if (i === t.sessionId) {
            (tm = t.mute || t.suppress), (tA = t.deaf), ti.eachConnection(ni);
            let e = null != t.guildId && null != t.channelId && null != tV && tV !== t.channelId,
                n = !tL && null == t.channelId;
            return na(!e && !n && tI), (tV = t.channelId), !0;
        }
        return __OVERLAY__ || t.userId !== eC.default.getId() || null != eD.A.getChannelId() || na(!1, null), e;
    }, !1);
}
function nB(e) {
    let { mute: t } = e;
    (tE = t), ti.eachConnection(ni);
}
function nH(e) {
    let { context: t, playSoundEffect: n } = e,
        { mute: r, deaf: i } = nt(t);
    if (t === eF.x.DEFAULT && (ed.A.requestPermission(ek.iL.AUDIO), tg)) return !1;
    (r = !i && !r) || (i = !1), n || (ty = !0), nI({ mute: r, deaf: i }, t), ti.eachConnection(ni);
}
function nj(e) {
    let { context: t, mute: n, playSoundEffect: r } = e;
    nI({ mute: n }, t), r || (ty = !0), ti.eachConnection(ni);
}
function nY(e) {
    let {
        settings: { type: t },
        local: n,
        wasSaved: r,
    } = e;
    if (t !== eU.oD.PRELOADED_USER_SETTINGS || n || null != r) return !1;
    nw(!0);
}
function nW(e) {
    let { context: t } = e;
    nI({ deaf: !nt(t).deaf }, t), ti.eachConnection(ni);
}
function nK(e) {
    let { context: t, userId: n } = e;
    if (n === eC.default.getId()) return;
    let { localMutes: r } = nt(t);
    r[n] ? delete r[n] : (r[n] = !0),
        nI({ localMutes: r }, t),
        ti.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
}
function n$(e) {
    let { context: t, userId: n, videoToggleState: r, persist: i, isAutomatic: s } = e;
    h()(!(i && s), "These are not allowed to both be true.");
    let a = r === ex.bb8.DISABLED,
        { disabledLocalVideos: o } = nt(t),
        l = o[n] ?? !1,
        u = tz.has(n),
        c = r === ex.bb8.AUTO_ENABLED || r === ex.bb8.MANUAL_ENABLED;
    eB.info(`disableVideo=${a} currentlyDisabled=${l} currentlyAutoDisabled=${u}, isVideoShown=${c}`),
        h()(!(u && !l), "If you are auto-disabled, then you are also disabled.");
    let d = a !== l,
        _ = t === eF.x.DEFAULT,
        f = s && d && _,
        p = i && d && _;
    eB.info(`changed=${d} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${f} isManualToggleByUser=${p}`);
    let { videoToggleStateMap: m } = nt(t);
    if (
        (m[n] === ex.bb8.AUTO_PROBING &&
            r === ex.bb8.AUTO_ENABLED &&
            (0, ec.A)(n, a ? eF.Al.AUTO_DISABLE : eF.Al.AUTO_ENABLE, c),
        (m[n] = r),
        nI({ videoToggleStateMap: m }, t, i),
        r === ex.bb8.AUTO_PROBING
            ? eD.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
            : eD.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
        tq ||
            (eB.info(`isAutoDisableAllowed=${tq} - disabling VideoHealthManager`),
            eD.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
        f)
    ) {
        if ((!a && !u) || (a && !tq)) return;
        (0, ec.A)(n, a ? eF.Al.AUTO_DISABLE : eF.Al.AUTO_ENABLE, c), a ? tz.add(n) : tz.delete(n);
    } else
        p &&
            (u && !a
                ? (eB.info("disallowing auto-disable for this session because of manual override by user"),
                  (tq = !1),
                  eD.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                  (0, ec.A)(n, eF.Al.MANUAL_REENABLE, c))
                : (0, ec.A)(n, a ? eF.Al.MANUAL_DISABLE : eF.Al.MANUAL_ENABLE, c));
    _ && !a && tz.delete(n),
        a ? (o[n] = !0) : delete o[n],
        nI({ disabledLocalVideos: o }, t, i),
        ti.eachConnection((e) => e.setLocalVideoDisabled(n, o[n] ?? !1), t);
}
function nz() {
    if (0 === tz.size) return;
    let e = eF.x.DEFAULT,
        { disabledLocalVideos: t } = nt(e);
    tz.forEach((n) => {
        h()(t[n], "If you are auto-disabled, then you are also disabled."),
            delete t[n],
            ti.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
    }),
        tz.clear(),
        nI({ disabledLocalVideos: t }, e, !1);
}
function nq() {
    let e = eF.x.DEFAULT,
        { videoToggleStateMap: t } = nt(e);
    for (let [e, n] of Object.entries(t)) n === ex.bb8.AUTO_PROBING && delete t[e];
    nI({ videoToggleStateMap: t }, e, !1);
}
function nZ(e) {
    let { context: t, userId: n, volume: r } = e;
    if (n === eC.default.getId()) return;
    let i = t === eF.x.STREAM ? eF.Cn : eF.Hz,
        { localVolumes: s } = nt(t);
    r === i ? delete s[n] : (s[n] = r), nI({ localVolumes: s }, t), ti.eachConnection((e) => e.setLocalVolume(n, r), t);
}
function nX(e) {
    let { context: t, userId: n, left: r, right: i } = e,
        { localPans: s } = nt(t);
    (s[n] = { left: r, right: i }), nI({ localPans: s }, t), ti.eachConnection((e) => e.setLocalPan(n, r, i), t);
}
function nQ(e) {
    let { context: t, mode: n, options: r } = e;
    nI({ mode: n, modeOptions: { ...r, updatedAt: Date.now() } }, t), ti.eachConnection(nn);
}
function nJ(e) {
    let { volume: t } = e;
    nI({ inputVolume: nr(t) }), ti.setInputVolume(t);
}
function n0(e) {
    let { volume: t } = e;
    nI({ outputVolume: t }), ti.setOutputVolume(t);
}
function n1(e) {
    let { id: t } = e;
    (t = nC(t_, t)),
        (tc = performance.now()),
        nI({ inputDeviceId: t }),
        ti.setAudioInputDevice(t),
        ti.eachConnection(n_),
        (l = void 0),
        (u = void 0),
        t2.stop(),
        (t1 = !1);
    let { resetSilenceWarningOnDeviceChange: n } = en.A.getConfig({
        location: "MediaEngineStore.handleSetInputDevice",
    });
    n && ((tO = !1), o.reset());
}
function n2(e) {
    let { id: t } = e;
    nI({ outputDeviceId: (t = nC(tf, t)) }), ti.setAudioOutputDevice(t);
}
function n3(e) {
    let { id: t } = e;
    nI({ videoDeviceId: (t = nC(tp, t)) }), na();
}
function n6(e) {
    let { inputProfile: t } = e;
    nI({ activeInputProfile: t });
    let n = nt();
    ti.eachConnection((e) => {
        nn(e), n_(e);
    }),
        ti.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
        rs();
}
function n4(e) {
    return tl !== e.required && ((tl = e.required), e.required || ti.interact(), !0);
}
function n5(e) {
    let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
    nR(t), nD(n), nL(r);
}
function n7(e) {
    let { inputVolume: t, outputVolume: n } = e;
    nI({ inputVolume: nr(t), outputVolume: n });
}
function n8(e) {
    let t = nt(),
        n = ti.getAudioSubsystem(),
        i = ti.getAudioLayer(),
        s = nC(t_, t.inputDeviceId),
        a = t_[s]?.name,
        o = (0, ef.A)(t.noiseCancellation, r.getSystemMicrophoneMode());
    eA.default.track(ex.HAw.VOICE_PROCESSING, {
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
function n9(e) {
    let t = nI({ echoCancellation: e.enabled });
    ti.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), rs(), n8(e.location);
}
function re(e) {
    rn(e.enabled);
}
function rt(e) {
    let t = nI({ sidechainCompressionStrength: e.strength });
    ti.setSidechainCompressionStrength(t.sidechainCompressionStrength);
}
function rn(e) {
    let t = nI({ sidechainCompression: e });
    ti.setSidechainCompression(t.sidechainCompression);
}
function rr(e) {
    let { enabled: t, loopbackReason: n } = e;
    return t ? tZ.add(n) : tZ.delete(n), ri(), rs();
}
function ri() {
    let e = !tZ.has("voice_filter_preview") && !tZ.has("mic_test");
    ti.setMaybePreprocessMute(e);
}
function rs() {
    let e = nt(),
        t = tZ.size > 0,
        n = e.inputDeviceId,
        r = eO.A.hasEchoCancellation(n) || e.echoCancellation,
        i = !t,
        s = eO.A.hasNoiseSuppression(n) || e.noiseSuppression,
        a = nu(eO.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        o = e.noiseCancellation,
        l = null !== tk,
        u = tZ.has("voice_filter") && 1 === tZ.size;
    ti.setLoopback(t, {
        echoCancellation: r,
        echoCancellationPreEcho: i,
        noiseSuppression: s,
        automaticGainControlConfig: a,
        noiseCancellation: o,
        voiceFilters: l,
        loopbackUseAudioMode: u,
    });
}
async function ra() {
    if (!ti.supports(eF.O5.VAAPI)) return;
    let e = 4098;
    if (window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let t = await window.DiscordNative.processUtils.getSystemInfo();
    (t.electronGPUInfo?.gpuDevice ?? []).some((t) => t.vendorId === e) &&
        ((t4 = !0), (t6 = ti.supports(eF.O5.GAMESCOPE_CAPTURE)));
}
function ro(e) {
    let t = nI({ noiseSuppression: e.enabled });
    ti.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), rs(), n8(e.location);
}
function rl(e) {
    let t = nI({ automaticGainControl: e.enabled });
    ti.eachConnection((e) => nc(e, t.automaticGainControl)), rs(), n8(e.location);
}
function ru(e) {
    let t = nI({ noiseCancellation: e.enabled });
    ti.eachConnection((e) => nd(e, t.noiseCancellation)), rs(), n8(e.location);
}
function rc(e) {
    e_.A.setKrispModelOverride(e.model), (_ = e.model), rs();
}
function rd(e) {
    (0, eS.isWeb)() || ((tP = e.enabled), ti.setNoiseCancellationEnableStats?.(e.enabled));
}
function r_(e) {
    nI({ silenceWarning: e.enabled });
}
function rf(e) {
    ti.setDebugLogging(e.enabled);
}
function rp(e) {
    let { level: t } = e;
    (d = t), e_.A.setKrispSuppressionLevel(t);
}
function rh(e) {
    nI({ videoHook: e.enabled });
}
function rm(e) {
    nI({ experimentalSoundshare2: e.enabled });
}
function rE(e) {
    let { enabled: t } = e;
    nI({ useSystemScreensharePicker: t });
}
function rg(e) {
    let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
        i = nI({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r });
    ti.eachConnection((e) =>
        e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers),
    );
}
function rA(e) {
    let { enabled: t } = e;
    nI({ qos: t }), ti.eachConnection((e) => e.setQoS(t));
}
function rI() {
    nT();
}
function rT(e) {
    let { osVolume: t, osMuted: n } = e;
    (u = t), (l = n);
}
function rS(e) {
    let { inputDetected: t } = e;
    if (null == t) return !1;
    if (((tb = !0 !== tO && !t), t)) (tO = !0), (t1 = !1), t2.stop(), tD.stop();
    else if (nt().mode === ex.TBI.VOICE_ACTIVITY && tO) {
        let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = en.A.getConfig({
            location: "MediaEngineStore.handleInputDetected",
        });
        e &&
            t2.start(e1, () => {
                eA.default.track(ex.HAw.HARDWARE_MUTE_GUESSED, {
                    input_device_name: t_[nC(t_, nt().inputDeviceId)]?.name,
                    rtc_connection_id: eD.A.getRTCConnectionId(),
                }),
                    (t1 = !0),
                    r.emitChange();
            }),
            null != t &&
                tD.start(t * eT.A.Millis.MINUTE, () => {
                    (tO = !1), o.reset();
                });
    }
}
function ry(e) {
    let { hasPermission: t } = e,
        n = !t;
    if (n === tg) return !1;
    (tg = n), ti.eachConnection(ni);
}
function rv(e) {
    let { state: t, permissionType: n } = e,
        r = t === ek.hL.ACCEPTED;
    switch (n) {
        case ek.iL.AUDIO:
            (tK = !0), ti.eachConnection(ni);
            break;
        case ek.iL.CAMERA:
            !r && tI && na(!1);
            break;
        default:
            return !1;
    }
}
function rN() {
    return tM || !1;
}
async function rC() {
    try {
        await ev.Ay.ensureModule("discord_krisp");
        let e = ev.Ay.requireModule("discord_krisp");
        (tM = !0),
            (c = e.getSdkVersion?.()),
            (d = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (tx = e), r.emitChange();
            }),
            r.emitChange();
    } catch (t) {
        eB.warn(`Failed to load Krisp module: ${t.message}`), ey.A.captureException(t);
        let e = eF.CO.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eF.CO.INITIALIZED : n;
        }
        eA.default.track(ex.HAw.VOICE_PROCESSING, { noise_canceller_error: e }), nI({ noiseCancellation: !1 });
    } finally {
        tw = !1;
    }
}
function rR() {
    return (0, eS.isWindows)() || (0, eS.isLinux)() || (0, eS.isMac)();
}
function rO() {
    !rR() || __OVERLAY__ || tw || tM
        ? (0, eS.isWeb)() && ti.supports(eF.O5.NOISE_CANCELLATION)
            ? ((tM = !0), r.emitChange())
            : (0, eS.isWeb)() && nI({ noiseCancellation: !1 })
        : ((tw = !0), rC());
}
async function rb() {
    try {
        let e,
            t = "",
            n = !1,
            r = URL.parse(e6);
        if (null === r) return void eB.log("OpenH264 URL ", r, " is invalid");
        let i = r.pathname.split("/"),
            s = i[i.length - 1].replace(".bz2", "");
        try {
            let t = await ev.Ay.downloadOpenH264(e6, s, e4, (e) => {
                eB.log("OpenH264 download status", e);
            });
            eB.log("OpenH264 is ready", t), (n = t.fetchedFromNetwork), (e = !0);
        } catch (n) {
            eB.error("OpenH264 download failed", n), (t = n.message), (e = !1);
        }
        if (
            (eA.default.track(ex.HAw.VIDEO_OPENH264_DOWNLOADED, {
                success: e,
                fetched_from_network: n,
                error_message: t,
            }),
            e)
        ) {
            let e = await ev.Ay.cleanupUnusedOpenH264Files([s]);
            eB.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        eB.error("OpenH264 download failed", e);
    }
}
function rD() {
    (0, eS.isLinux)() && rb();
}
function rL(e) {
    let { enabled: t } = e;
    eA.default.track(ex.HAw.VOICE_FILTER_PLAYBACK_TOGGLED, { active_voice_filter_id: tk ?? null, enabled: t }),
        nI({ voiceFilterPlaybackEnabled: t });
}
function rw(e) {
    let { newVoiceFilterId: t } = e;
    nI({ mostRecentlyRequestedVoiceFilter: t }), ti.eachConnection((e) => e.setVoiceFilterId(t));
}
function rM() {
    nI({ mostRecentlyRequestedVoiceFilter: null });
}
function rx(e) {
    let { voiceFilterId: t } = e;
    (tG = tk), (tF = tU), (tk = t), (tU = null === t ? null : Date.now());
}
function rP(e) {
    let t = e.bypassEnabled;
    nI({ bypassSystemInputProcessing: t }), ti.setAudioInputBypassSystemProcessing(t), n8(e.location);
}
function rk(e) {
    rU(e.subsystem);
}
function rU(e) {
    e === eF.rB.AUTOMATIC
        ? (nI({ automaticAudioSubsystem: !0 }), rG())
        : (nI({ automaticAudioSubsystem: !1 }), ti.setAudioSubsystem(e));
}
function rG() {
    ti.queueAudioSubsystem(eF.rB.EXPERIMENTAL);
}
function rF(e) {
    let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
    if ((r !== n && na(i, null), null != t || null == n)) {
        tL = !1;
        return;
    }
    if (tL) return;
    tL = !0;
    let s = nt();
    (s.mute || s.deaf) && (nI({ deaf: !1, mute: !1 }), ti.eachConnection(ni));
}
function rV(e) {
    let { application: t } = e;
    ta.add(t.id);
}
function rB(e) {
    let { application: t } = e;
    ta.delete(t.id);
}
function rH(e) {
    let { kind: t, granted: n } = e;
    if (!n)
        switch (t) {
            case "audio":
                (to = !1), ti.eachConnection(ni);
                break;
            case "video":
                na(!1);
        }
}
function rj(e) {
    (to = e.enabled), e.unmute && nI({ mute: !1, deaf: !1 }), ti.eachConnection(ni);
}
function rY(e) {
    let { enabled: t } = e;
    ed.A.requestPermission(ek.iL.CAMERA), na(t);
}
function rW(e) {
    let { sourceId: t, applicationName: n, quality: i } = e;
    if (!(0, M.Ao)() || null == R.A) return !1;
    let s = null,
        o = null,
        l = eI.A.getPidFromDesktopSource(t);
    ({ soundshareId: s, soundshareSession: o } = nM(l));
    let u = { desktopSource: { id: t, sourcePid: l, soundshareId: s, soundshareSession: o }, quality: i };
    null != a &&
        (ti.setClipsSource(null),
        (0, eS.isWindows)() && null != a.desktopSource.soundshareId && O.c1(a.desktopSource.soundshareId)),
        null != s && nx(s, o),
        (a = u);
    let c = t7("MediaEngineStore clips"),
        d = nt().videoHook;
    ti.setClipsSource({
        desktopDescription: {
            id: a.desktopSource.id,
            soundshareId: a.desktopSource.soundshareId,
            useVideoHook: d,
            useGraphicsCapture: np(),
            useCaptureDeviceForEncode: !1,
            useLoopback: r.getExperimentalSoundshare(),
            useQuartzCapturer: !0,
            allowScreenCaptureKit: nm(),
            videoHookStaleFrameTimeoutMs: eq,
            graphicsCaptureStaleFrameTimeoutMs: eZ,
            hdrCaptureMode: c,
        },
        quality: i,
        applicationName: n,
    });
}
function rK(e) {
    let { settings: t } = e;
    !1 === t.decoupledClipsEnabled && ((a = null), ti.setClipsSource(null));
}
function r$(e) {
    let { settings: t } = e;
    if (t?.desktopSettings != null) {
        let e = null,
            n = null,
            { sourceId: r, sound: i } = t.desktopSettings,
            s = t.context ?? eF.x.DEFAULT,
            a = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
            o = !1 === i ? null : eI.A.getPidFromDesktopSource(r);
        eS.isPlatformEmbedded &&
            !0 === i &&
            (({ soundshareId: e, soundshareSession: n } = nM(o)), null != e && nx(e, n)),
            ns(s),
            na(s === eF.x.STREAM && tI, {
                desktopSource: { id: r, sourcePid: o, soundshareId: e, soundshareSession: n },
                quality: { resolution: a.resolution, frameRate: a.frameRate },
            });
    } else if (t?.cameraSettings != null) {
        let e = t.context ?? eF.x.DEFAULT,
            { videoDeviceGuid: n, audioDeviceGuid: r } = t.cameraSettings,
            i = e === eF.x.STREAM && tI,
            s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
        na(i, {
            cameraSource: { videoDeviceGuid: n, audioDeviceGuid: r },
            quality: { resolution: s.resolution, frameRate: s.frameRate },
        });
    } else na(tI, null);
}
function rz(e) {
    let { section: t } = e;
    return t === ex.nc_.VOICE && ny(), !1;
}
function rq() {
    return ti.eachConnection(n_), !1;
}
function rZ(e) {
    let { enabled: t } = e,
        n = nI({ aecDumpEnabled: t });
    ti.setAecDump(n.aecDumpEnabled);
}
function rX(e) {
    let { enabled: t } = e;
    nI({ openH264Enabled: t }), ev.Ay?.setOpenH264Enabled?.(t);
}
function rQ(e) {
    let { overrides: t } = e;
    if (__OVERLAY__) return !1;
    (ts = Object.values(eF.x).reduce((e, n) => {
        let r = n,
            i = tn();
        return (e[r] = E().merge(i, t[r])), e;
    }, {})),
        v.w.set(eH, ts),
        nS();
}
function rJ(e) {
    let { state: t } = e,
        n = G.A.isEnabled();
    if (t === ex.g6G.BACKGROUND && tI && !n) (tC = !0), na(!1);
    else {
        if (t !== ex.g6G.ACTIVE || !tC) return !1;
        (tC = !1), na(!0);
    }
    return !0;
}
function r0(e) {
    ti.eachConnection((t) => t.setBitRate(e.bitrate));
}
function r1() {
    if ((!tI && null == s) || null != eD.A.getRTCConnectionId()) return !1;
    na(!1, null);
}
function r2() {
    return !!tB && ((tB = !1), !0);
}
function r3(e) {
    ti.eachConnection((t) => t.applyVideoQualityMode(e.mode));
}
function r6(e) {
    let { settings: t } = e;
    ti.applyMediaFilterSettings(t).finally(() => {
        (tH = !1), r.emitChange();
    });
}
function r4() {
    tH = !0;
}
function r5() {
    tH = !1;
}
function r7(e) {
    t0 = e.enabled;
}
function r8() {
    if ((0, eS.isDesktop)() && eS.isPlatformEmbedded && !t5) {
        t5 = !0;
        let e = async () => {
            let t = await new Promise((e) => {
                ev.Ay.pollQueueMetrics((t) => {
                    e(t);
                });
            });
            t.periodMs = eF.tl;
            let n = ie(t);
            null !== n && eA.default.track(ex.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, eF.tl);
        };
        setTimeout(e, eF.tl);
    }
}
class r9 extends S.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        nf(),
            nA(),
            rO(),
            rD(),
            nq(),
            r8(),
            (0, eS.isWindows)() && eS.isPlatformEmbedded && nl(),
            (tX = {
                [eF.O5.VIDEO]: ti.supports(eF.O5.VIDEO),
                [eF.O5.DESKTOP_CAPTURE]: ti.supports(eF.O5.DESKTOP_CAPTURE),
                [eF.O5.HYBRID_VIDEO]: ti.supports(eF.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eC.default, eR.A, eO.A, eb.A, L.A, U.A, eD.A, F.Ay, eh.A, ew.default, eM.A, eg.A);
    }
    supports(e) {
        return ti.supports(e);
    }
    supportsInApp(e) {
        return tX[e] || ti.supports(e);
    }
    isSupported() {
        return ti.supported();
    }
    isNoiseSuppressionSupported() {
        return ti.supports(eF.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return rN();
    }
    isNoiseCancellationError() {
        return tB;
    }
    isAutomaticGainControlSupported() {
        return ti.supports(eF.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !ng() && (ti.supports(eF.O5.LEGACY_AUDIO_SUBSYSTEM) || ti.supports(eF.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return ti.supports(eF.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === ti.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return rN();
    }
    isAecDumpSupported() {
        return ti.supports(eF.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return ti.supports(eF.O5.VIDEO) && ti.supports(eF.O5.SIMULCAST);
    }
    getAecDump() {
        return nt().aecDumpEnabled;
    }
    getMediaEngine() {
        return ti;
    }
    getVideoComponent() {
        return ti.Video;
    }
    getCameraComponent() {
        return ti.Camera;
    }
    getKrispSuppressionLevel() {
        return d ?? 100;
    }
    getKrispEnableStats() {
        return tP;
    }
    isEnabled() {
        return to;
    }
    isMute() {
        return this.isSelfMute() || tm;
    }
    isDeaf() {
        return this.isSelfDeaf() || tA;
    }
    hasContext(e) {
        return null != ts[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eF.x.DEFAULT;
        return e === eF.x.DEFAULT && tE;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eF.x.DEFAULT;
        return (
            !this.isEnabled() ||
            nt(e).mute ||
            !ed.A.didHavePermission(ek.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eF.x.DEFAULT && tg)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return ty;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        ty = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eF.x.DEFAULT,
            t = t1 && "voice_isolation" !== this.getSystemMicrophoneMode() && nt(e).mode === ex.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (eO.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return t0;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eF.x.DEFAULT;
        return !this.isSupported() || nt(e).deaf;
    }
    isVideoEnabled() {
        return tI && tR;
    }
    isVideoAvailable() {
        return Object.values(tp).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return tR;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eF.x.STREAM;
        return tu === e && null != s;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eF.x.STREAM;
        return tu === e && null != s && s.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eF.x.DEFAULT;
        return e !== eC.default.getId() && (nt(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return ti.supports(eF.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eF.x.DEFAULT;
        return nt(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eF.x.DEFAULT;
        return nt(t).videoToggleStateMap[e] ?? ex.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eF.x.DEFAULT;
        return t === eF.x.DEFAULT && tz.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eF.x.DEFAULT;
        return e === eF.x.DEFAULT && tz.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tH;
    }
    isNativeAudioPermissionReady() {
        return tK;
    }
    getGoLiveSource() {
        return s;
    }
    getGoLiveContext() {
        return tu;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return tc;
    }
    isH264MfDecodeAvailable() {
        return td;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eF.x.DEFAULT,
            n = nt(t).localPans[e];
        return null != n ? n : ez;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eF.x.DEFAULT,
            n = t === eF.x.STREAM ? eF.Cn : eF.Hz,
            r = nt(t).localVolumes[e];
        return null != r ? r : n;
    }
    getInputVolume() {
        return nt().inputVolume;
    }
    getOutputVolume() {
        return nt().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eF.x.DEFAULT;
        return nt(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eF.x.DEFAULT;
        return nt(e).modeOptions;
    }
    getActiveVoiceFilter() {
        return tk;
    }
    getActiveVoiceFilterAppliedAt() {
        return tU;
    }
    getPreviousVoiceFilter() {
        return tG;
    }
    getPreviousVoiceFilterAppliedAt() {
        return tF;
    }
    getMostRecentlyRequestedVoiceFilter() {
        return nt().mostRecentlyRequestedVoiceFilter;
    }
    getVoiceFilterPlaybackEnabled() {
        return nt().voiceFilterPlaybackEnabled;
    }
    getShortcuts() {
        let e = {};
        return (
            E().each(ts, (t, n) => {
                let {
                    mode: r,
                    modeOptions: { shortcut: i },
                } = t;
                r === ex.TBI.PUSH_TO_TALK && ta.has(n) && (e[n] = i);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nC(t_, nt().inputDeviceId);
    }
    getOutputDeviceId() {
        return nC(tf, nt().outputDeviceId);
    }
    getVideoDeviceId() {
        return nC(tp, nt().videoDeviceId);
    }
    getInputDevices() {
        return t_;
    }
    getOutputDevices() {
        return tf;
    }
    getVideoDevices() {
        return tp;
    }
    getEchoCancellation() {
        let e = nt();
        return eO.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return ti.supports(eF.O5.SIDECHAIN_COMPRESSION) && nt().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return nt().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return nt().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tY && tY;
    }
    getOpenH264Enabled() {
        return (0, eS.isLinux)() && nt().openH264Enabled;
    }
    getLoopback() {
        return tZ.size > 0;
    }
    getLoopbackReasons() {
        return tZ;
    }
    getNoiseSuppression() {
        let e = nt();
        return eO.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = nt();
        return eO.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return nt().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return nt().noiseCancellation;
    }
    getHardwareEncoding() {
        return e2;
    }
    getEnableSilenceWarning() {
        return nt().silenceWarning;
    }
    getDebugLogging() {
        return ti.getDebugLogging();
    }
    getQoS() {
        return nt().qos;
    }
    getAttenuation() {
        return nt().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return nt().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return nt().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return nE() && nt().automaticAudioSubsystem ? eF.rB.AUTOMATIC : ti.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return ti.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return nt().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eG.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eF.x.DEFAULT;
        return nt(e);
    }
    getState() {
        return {
            settingsByContext: ts,
            inputDevices: t_,
            outputDevices: tf,
            appSupported: tX,
            krispModuleLoaded: tM,
            krispVersion: c,
            krispSuppressionLevel: d,
            goLiveSource: s,
            goLiveContext: tu,
        };
    }
    getInputDetectedThisConnection() {
        return tO;
    }
    getInputDetected() {
        return o.inputDetected;
    }
    getLastInputDetectedUpdateTime() {
        return o.lastUpdateTime;
    }
    getNoInputDetectedNotice() {
        return tb;
    }
    getInputDeviceOSMuted() {
        return l;
    }
    getInputDeviceOSVolume() {
        return u;
    }
    getPacketDelay() {
        return eS.isPlatformEmbedded || this.getMode() !== ex.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        ti.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return tl;
    }
    getVideoHook() {
        return nt().videoHook;
    }
    supportsVideoHook() {
        return ti.supports(eF.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = nt().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return ti.supports(eF.O5.EXPERIMENTAL_SOUNDSHARE) && T().satisfies(R.A?.os.release, eP.$x);
    }
    supportsHookSoundshare() {
        return (0, eS.isWindows)() && ti.supports(eF.O5.SOUNDSHARE) && T().satisfies(R.A?.os.release, eP.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = nt().useSystemScreensharePicker,
            n = (0, eS.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return ti.supports(eF.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return t4;
    }
    getUseGamescopeCapture() {
        return t6;
    }
    getSpeakingWhileMuted() {
        return tv;
    }
    getKrispModelOverride() {
        return _;
    }
    getKrispModels() {
        return tx;
    }
    getKrispVadActivationThreshold() {
        return nt().modeOptions.vadKrispActivationThreshold ?? e$;
    }
    hasActiveCallKitCall() {
        return t3;
    }
    setHasActiveCallKitCall(e) {
        t3 = e;
    }
    supportsScreenSoundshare() {
        return (0, eS.isMac)()
            ? ti.supports(eF.O5.SOUNDSHARE) && T().satisfies(R.A?.os.release, eP.P$) && nm()
            : (0, eS.isWindows)()
              ? ti.supports(eF.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, eS.isLinux)() && ti.supports(eF.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        return (0, eS.isWindows)()
            ? this.getInputDevices()[this.getInputDeviceId()]?.effects?.find((e) => e === e3)
            : (0, eS.isMac)() || (0, eS.isIOS)()
              ? f
              : void 0;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eF.x.DEFAULT,
            t = this.supports(eF.O5.VIDEO)
                ? [{ rid: "100", type: e === eF.x.DEFAULT ? eF.mI.VIDEO : eF.mI.SCREEN, quality: eF.Y4 }]
                : [];
        return (
            this.isSimulcastSupported() &&
                e === eF.x.DEFAULT &&
                t.push({ rid: "50", type: eF.mI.VIDEO, quality: eF.Cl }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: (0, eS.isWeb)() };
        return ti.fetchAsyncResources(e);
    }
    startDavePreload() {
        if (!tj && ((tj = !0), (0, eS.isWeb)())) {
            let e = { fetchDave: !0 };
            ti.fetchAsyncResources(e).catch((e) => {
                eB.warn("DAVE preload failed:", e), ey.A.captureException(e);
            });
        }
    }
    getSupportedSecureFramesProtocolVersion() {
        return ti.getSupportedSecureFramesProtocolVersion();
    }
    hasClipsSource() {
        return null != a;
    }
    getGpuBrand() {
        return tQ;
    }
}
function ie(e) {
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
(r = new r9(C.h, {
    VOICE_CHANNEL_SELECT: rF,
    VOICE_STATE_UPDATES: nV,
    CONNECTION_OPEN: nP,
    CONNECTION_CLOSED: nU,
    POST_CONNECTION_OPEN: nG,
    RTC_CONNECTION_STATE: nF,
    AUDIO_SET_TEMPORARY_SELF_MUTE: nB,
    AUDIO_TOGGLE_SELF_MUTE: nH,
    AUDIO_SET_SELF_MUTE: nj,
    AUDIO_TOGGLE_SELF_DEAF: nW,
    AUDIO_TOGGLE_LOCAL_MUTE: nK,
    AUDIO_SET_LOCAL_VIDEO_DISABLED: n$,
    AUDIO_SET_LOCAL_VOLUME: nZ,
    AUDIO_SET_LOCAL_PAN: nX,
    AUDIO_SET_MODE: nQ,
    AUDIO_SET_INPUT_VOLUME: nJ,
    AUDIO_SET_OUTPUT_VOLUME: n0,
    AUDIO_SET_INPUT_DEVICE: n1,
    AUDIO_SET_OUTPUT_DEVICE: n2,
    AUDIO_SET_ACTIVE_INPUT_PROFILE: n6,
    AUDIO_SET_ECHO_CANCELLATION: n9,
    AUDIO_SET_SIDECHAIN_COMPRESSION: re,
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: rt,
    AUDIO_SET_LOOPBACK: rr,
    AUDIO_SET_NOISE_SUPPRESSION: ro,
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: rl,
    AUDIO_SET_NOISE_CANCELLATION: ru,
    AUDIO_SET_KRISP_MODEL_OVERRIDE: rc,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: r_,
    AUDIO_SET_DEBUG_LOGGING: rf,
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: rp,
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: rd,
    MEDIA_ENGINE_SET_VIDEO_HOOK: rh,
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: rm,
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: rE,
    AUDIO_SET_ATTENUATION: rg,
    AUDIO_SET_QOS: rA,
    MEDIA_ENGINE_DEVICES: n5,
    AUDIO_VOLUME_CHANGE: n7,
    AUDIO_RESET: rI,
    AUDIO_INPUT_DETECTED: rS,
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: rT,
    AUDIO_SET_SUBSYSTEM: rk,
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: rP,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: rj,
    MEDIA_ENGINE_SET_VIDEO_ENABLED: rY,
    MEDIA_ENGINE_PERMISSION: rH,
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: r$,
    MEDIA_ENGINE_SET_VIDEO_DEVICE: n3,
    MEDIA_ENGINE_INTERACTION_REQUIRED: n4,
    USER_SETTINGS_MODAL_INIT: rz,
    USER_SETTINGS_MODAL_SET_SECTION: rz,
    CERTIFIED_DEVICES_SET: rq,
    RPC_APP_CONNECTED: rV,
    RPC_APP_DISCONNECTED: rB,
    OVERLAY_INITIALIZE: nk,
    APP_STATE_UPDATE: rJ,
    SET_CHANNEL_BITRATE: r0,
    SET_VAD_PERMISSION: ry,
    SET_NATIVE_PERMISSION: rv,
    SET_CHANNEL_VIDEO_QUALITY_MODE: r3,
    MEDIA_ENGINE_SET_AEC_DUMP: rZ,
    MEDIA_ENGINE_SET_OPENH264_ENABLED: rX,
    MEDIA_ENGINE_RESET_SETTINGS: rQ,
    CHANNEL_DELETE: r1,
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: r2,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: r6,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: r4,
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: r5,
    USER_SETTINGS_PROTO_UPDATE: nY,
    CLIPS_INIT: rW,
    CLIPS_SETTINGS_UPDATE: rK,
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: r7,
    VOICE_FILTER_REQUEST_SWITCH: rw,
    VOICE_FILTER_LOOPBACK_TOGGLE: rL,
    VOICE_FILTER_APPLIED: rx,
    VOICE_FILTER_DOWNLOAD_FAILED: rM,
    VOICE_FILTER_APPLY_FAILED: rM,
})),
    (o = new X.A(ti, r));
let it = r;
