"use strict";
let i, r, s, a, o, l, _, d, u, c, E;
n.d(t, { Ay: () => nO }), n(323874), n(14289), n(35956), n(321073);
var h = n(823598),
    m = n(626584),
    f = n(723702),
    g = n(19575);
(0, h.WQ)({
    supported() {
        try {
            if (__OVERLAY__);
            else if (f.isPlatformEmbedded) {
                let e = (0, h.lE)();
                if (null == e.VoiceConnection) throw Error("voe function missing");
                return !0;
            }
        } catch (e) {
            new m.A("injectMediaEngine").error("Potentially corrupt installation:", e.message);
        }
        return !1;
    },
    supportsFeature: (e) => g.Ay.supportsFeature(e),
    setProcessPriority(e) {
        g.Ay.getDiscordUtils().setProcessPriority(e);
    },
    getVoiceEngine: () => g.Ay.getVoiceEngine(),
    getOpenH264LibraryPath: () => g.Ay.getOpenH264LibraryPath(),
});
var A = n(284009),
    I = n.n(A),
    p = n(735438),
    T = n.n(p),
    S = n(481613),
    N = n.n(S),
    O = n(299855),
    R = n.n(O),
    C = n(17928),
    y = n(205693),
    D = n(506774),
    L = n(451988),
    v = n(228366),
    w = n(77729),
    P = n(719129),
    b = n(894539),
    k = n(124838),
    U = n(274372),
    M = n(915618),
    G = n(572164),
    x = n(680725),
    V = n(487329),
    F = n(736056),
    B = n(6494),
    H = n(328153),
    Y = n(540305),
    W = n(945810);
let K = {
        useAGC2: !0,
        enableAnalog: !1,
        enableDigital: !0,
        headroom_db: 5,
        max_gain_db: 50,
        initial_gain_db: 15,
        max_gain_change_db_per_second: 6,
        max_output_noise_level_dbfs: -50,
        fixed_gain_db: 0,
    },
    j = (0, W.mj)({
        kind: "user",
        name: "2025-09-agc2-v2",
        defaultConfig: { noiseCancellationDuringProcessing: !1, noiseCancellationConfig: { useAGC2: !1 } },
        variations: {
            1: { noiseCancellationDuringProcessing: !0, noiseCancellationConfig: { useAGC2: !1 } },
            2: { noiseCancellationDuringProcessing: !0, noiseCancellationConfig: K, vadKrispActivationThreshold: 0.5 },
            3: { noiseCancellationDuringProcessing: !0, noiseCancellationConfig: K, vadKrispActivationThreshold: 0.7 },
            4: { noiseCancellationDuringProcessing: !0, noiseCancellationConfig: K, vadKrispActivationThreshold: 0.8 },
            5: { noiseCancellationDuringProcessing: !0, noiseCancellationConfig: K, vadKrispActivationThreshold: 0.9 },
            6: { noiseCancellationDuringProcessing: !0, noiseCancellationConfig: K, vadKrispActivationThreshold: 0.95 },
        },
    });
function $(e) {
    let { location: t, disable: n = !1 } = e;
    return n ? j.definition.defaultConfig : j.getConfig({ location: t });
}
let z = (0, W.mj)({
        name: "2026-04-av1-decode-android",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    q = { probeAudioEffects: !1 },
    X = (0, W.mj)({
        name: "2026-03-audio-effects-probe",
        kind: "user",
        defaultConfig: q,
        variations: { 1: { ...q, probeAudioEffects: !0 } },
    }),
    Q = (0, W.mj)({
        name: "2025-08-browser-hevc",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    J = (0, W.mj)({
        name: "2026-04-disable-hook-frame-pacer",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var Z = n(250105);
let ee = (0, Z.Ay)({
        kind: "user",
        name: "2025-11-global-frame-pool-lock",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    et = (0, W.mj)({
        name: "2026-02-go-live-hdr",
        kind: "user",
        defaultConfig: { hdrCaptureMode: "never" },
        variations: { 1: { hdrCaptureMode: "always" }, 2: { hdrCaptureMode: "permittedDevicesOnly" } },
    }),
    en = (0, W.mj)({
        name: "2026-03-ios-audio-interrupt-handling",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var ei = n(574381),
    er = n(118356),
    es = n(325278);
let ea = new er.Vy("InputWatcher");
class eo {
    mediaEngine;
    mediaEngineStore;
    stateChangeTimeout = new L.Ep();
    inputDetected = void 0;
    lastUpdateTime = performance.now();
    constructor(e, t) {
        (this.mediaEngine = e), (this.mediaEngineStore = t), this.mediaEngine.on(y.bg.Silence, this.handleSilence);
    }
    reset() {
        this.stateChangeTimeout.stop(),
            null != this.inputDetected && this.handleSilence(!this.inputDetected),
            (this.inputDetected = void 0);
    }
    fetchInputDeviceOSConfig = async () => {
        if ((0, ei.uF)() && R().satisfies(w.A?.os.release, es.PH))
            try {
                let e = this.mediaEngineStore.getInputDeviceId(),
                    t = this.mediaEngineStore.getInputDevices()[e]?.guid;
                if (null != t && "" !== t) {
                    let e = n(19575).Ay;
                    await e.ensureModule("discord_voice");
                    let [i, r] = await Promise.all([
                        this.mediaEngine.getDeviceOSVolume(t),
                        this.mediaEngine.getDeviceOSMuted(t),
                    ]);
                    v.h.dispatch({ type: "AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED", osVolume: i, osMuted: r });
                }
            } catch (e) {
                ea.warn(`Failed to get device OS volume and/or mute state: ${e}`);
            }
    };
    handleSilence = (e) => {
        let t = !e;
        this.stateChangeTimeout.start(t ? 1500 : 5e3, async () => {
            ea.info("Silence:", e),
                (this.inputDetected = t),
                (this.lastUpdateTime = performance.now()),
                e && (await this.fetchInputDeviceOSConfig()),
                v.h.dispatch({
                    type: "AUDIO_INPUT_DETECTED",
                    inputDetected: this.inputDetected,
                    lastUpdateTime: this.lastUpdateTime,
                });
        });
    };
}
let el = (0, W.mj)({
        name: "2026-03-linux-vulkan-capture",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    e_ = (0, Z.Ay)({
        kind: "user",
        name: "2025-10-low-latency-rate-control",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var ed = n(140175);
(0, W.mj)({
    name: "2026-02-mobile-volume-output-slider-removal",
    kind: "user",
    defaultConfig: { audioOutputPresent: !0, nonContextualStreamOutputPresent: !0, showTileVolumeIndicator: !1 },
    variations: { 1: { audioOutputPresent: !1, nonContextualStreamOutputPresent: !1, showTileVolumeIndicator: !0 } },
});
var eu = n(801644);
let ec = (0, Z.Ay)({
        kind: "user",
        name: "2025-10-vad-before-processing",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eE = (0, W.mj)({
        name: "2026-03-video-capture-device-no-reuse",
        kind: "user",
        defaultConfig: { overrideDeviceReuse: !1 },
        variations: { 1: { overrideDeviceReuse: !0 } },
    }),
    eh = (0, W.mj)({
        name: "2026-04-video-hook-dx12",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    em = (0, Z.Ay)({
        kind: "user",
        name: "2026-02-voice-timeout-mitigations",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    ef = (0, W.mj)({
        name: "2026-02-wgc-dirty-regions-all",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eg = (0, W.mj)({
        name: "2026-02-wgc-dirty-regions",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eA = (0, W.mj)({
        name: "2025-12-wmf-gpu-encode",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function eI(e) {
    return eA.getConfig({ location: e });
}
let ep = (0, W.mj)({
    name: "2026-01-wmf-gpu-encode-intel",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eT = n(75076),
    eS = n(91777),
    eN = n(559633),
    eO = n(205106),
    eR = n(954571),
    eC = n(652215);
let ey = new er.Vy("AudioEffects");
async function eD(e, t, n) {
    if (!(0, ei.uF)()) return Promise.reject(Error("Audio effects querying not supported on non-Windows platforms"));
    try {
        let i = await n.getDeviceAudioEffects(e);
        return (
            v.h.dispatch({ type: "MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS", deviceId: t, ...i }),
            eR.default.track(eC.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, {
                succeeded: !0,
                active_effects: i.active,
                available_effects: i.available,
            }),
            i
        );
    } catch (e) {
        ey.error("Failed to probe audio effects for device", e),
            eR.default.track(eC.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, { succeeded: !1 });
    }
}
var eL = n(967347),
    ev = n(879172),
    ew = n(617617),
    eP = n(499156),
    eb = n(353835),
    ek = n(927813),
    eU = n(38405),
    eM = n(350535),
    eG = n(495544),
    ex = n(131319),
    eV = n(347481),
    eF = n(734057),
    eB = n(763827),
    eH = n(287809),
    eY = n(117549),
    eW = n(765682),
    eK = n(355097),
    ej = n(509381),
    e$ = n(731854),
    ez = n(985018);
let eq = new m.A("MediaEngineStore"),
    eX = "MediaEngineStore",
    eQ = { left: 1, right: 1 },
    eJ = 5 * ek.A.Millis.SECOND,
    eZ = 2 * ek.A.Millis.SECOND,
    e0 = 30 * ek.A.Millis.SECOND,
    e1 = +ek.A.Millis.MINUTE,
    e2 = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2",
    e3 = 0;
function e6() {
    return {
        mode: eC.TBI.VOICE_ACTIVITY,
        modeOptions: {
            threshold: -60,
            autoThreshold: f.isPlatformEmbedded || __OVERLAY__,
            vadUseKrisp: !0,
            vadKrispActivationThreshold: 0.5,
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
        inputVolume: e$.Hz,
        outputVolume: e$.Hz,
        inputDeviceId: e$.dx,
        outputDeviceId: e$.dx,
        videoDeviceId: e$.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: e7.supports(e$.O5.VIDEO_HOOK),
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
let e4 = {
        [ej.m.CUSTOM]: {},
        [ej.m.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [ej.m.STUDIO]: {
            mode: eC.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    e7 = (0, y.hB)((0, y.WI)());
eq.enableNativeLogger(!0);
let e5 = {},
    e8 = new Set([e$.x.DEFAULT]),
    e9 = e7.supports(e$.O5.AUTO_ENABLE),
    te = !1,
    tt = e$.x.STREAM,
    tn = performance.now(),
    ti = null,
    tr = { [e$.dx]: ns("No Input Devices") },
    ts = { [e$.dx]: ns("No Output Devices") },
    ta = { [e$.dx]: ns("No Video Devices") },
    to = new L.Ep(),
    tl = !1,
    t_ = !1,
    td = !1,
    tu = !1,
    tc = !1,
    tE = e$.qe,
    th = e$.qe,
    tm = !1,
    tf = !1,
    tg = new L.Ep(),
    tA = !1,
    tI = !1,
    tp = !1,
    tT = !1,
    tS = new L.Ep(),
    tN = !1,
    tO = !1,
    tR = !1,
    tC = [],
    ty = !1,
    tD = null,
    tL = !1,
    tv = !1,
    tw = !1,
    tP = {},
    tb = null,
    tk = null,
    tU = !1;
eS.A.hasPermission(eW.iL.AUDIO, { showAuthorizationError: !1 }),
    eS.A.hasPermission(eW.iL.CAMERA, { showAuthorizationError: !1 });
let tM = new Set(),
    tG = !1,
    tx = new Set(),
    tV = {},
    tF = null,
    tB = null,
    tH = !0,
    tY = !1,
    tW = new L.Ep(),
    tK = !1,
    tj = !1,
    t$ = !1,
    tz = !1;
function tq(e) {
    return (function (e) {
        let { location: t } = e;
        return et.getConfig({ location: t });
    })({ location: e }).hdrCaptureMode;
}
async function tX() {
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
function tQ() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT,
        t = e5[e];
    return null == t && ((t = e6()), (e5[e] = t)), t;
}
function tJ() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT,
        t = tQ(e),
        n = e4[t.activeInputProfile ?? ej.m.CUSTOM],
        i = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}) };
    if (
        (null == i.vadDuringPreProcess &&
            (i.vadDuringPreProcess = (function (e) {
                let { location: t, disable: n = !1 } = e;
                return n ? ec.definition.defaultConfig : ec.getConfig({ location: t });
            })({ location: "getSettings" }).enabled),
        (null == i.vadKrispActivationThreshold && !0 === n.automaticGainControl) || !0 === t.automaticGainControl)
    ) {
        let e = $({ location: "getSettings" });
        null != e.vadKrispActivationThreshold && (i.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return { ...t, ...n, modeOptions: i };
}
function tZ(e) {
    let t = tJ(e.context),
        n = t.mode;
    e.context === e$.x.DEFAULT && (0, ed.N)(!1, !1);
    let { showPTTSpeakingIndicator: i } = eP.A.getConfig({ location: "setInputMode" }),
        r = i && n === eC.TBI.PUSH_TO_TALK;
    e.setInputMode(n, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: !!r || t.modeOptions.autoThreshold,
        vadUseKrisp: (!!r || t.modeOptions.vadUseKrisp) && (tR || !1),
        vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? 0.5,
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        vadDuringPreProcess: t.modeOptions.vadDuringPreProcess ?? !1,
        pttReleaseDelay: Math.round(t.modeOptions.delay),
    });
}
function t0(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e$.Hz;
    return T().clamp(e, 0, t);
}
function t1(e) {
    let t = tJ(e.context),
        n = !e9 || t.mute || t.deaf;
    e.context === e$.x.DEFAULT
        ? (n = n || tl || t_ || td || !eS.A.didHavePermission(eW.iL.AUDIO))
        : e.context === e$.x.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === e$.x.DEFAULT && b.A.updateNativeMute();
}
function t2() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tc,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
        n = s;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, f.isWindows)()
                ? P.c1(n.desktopSource.soundshareId)
                : null != n.desktopSource.sourcePid && tJ().videoHook && P.c1(n.desktopSource.sourcePid),
            e7.setGoLiveSource(null, tt)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            e7.setGoLiveSource(null, tt),
        tc || e)
    ) {
        let t = tJ().videoDeviceId;
        tc && t === e$.dx && th === e$.dx && tE !== e$.qe ? (t = tE) : (th = t),
            (tE = (tc = e) ? no(ta, t) : e$.qe),
            e7.setVideoInputDevice(tE);
    }
    if (((s = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = tq("MediaEngineStore go live"),
                r = tJ().videoHook,
                s = t8(),
                a = s ? ((0, f.isWindows)() && R().satisfies(w.A?.os.release, es.fG) ? es.zl : es.eg) : 0,
                o = !1;
            (0, f.isWindows)() &&
                a >= es.zl &&
                (o =
                    !0 === tB
                        ? eg.getConfig({ location: "updateVideo" }).enabled
                        : ef.getConfig({ location: "updateVideo" }).enabled);
            let l = !r || !J.getConfig({ location: "updateVideo" }).enabled,
                _ = r && eh.getConfig({ location: "updateVideo" }).enabled;
            e7.setGoLiveSource(
                {
                    desktopDescription: {
                        id: t.desktopSource.id,
                        soundshareId: t.desktopSource.soundshareId,
                        useVideoHook: r,
                        useHookFramePacer: l,
                        useGraphicsCapture: s,
                        useGraphicsCaptureApiLevel: a,
                        useCaptureDeviceForEncode: (0, f.isWindows)(),
                        useLoopback: i.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: t9(),
                        videoHookStaleFrameTimeoutMs: 500,
                        graphicsCaptureStaleFrameTimeoutMs: eJ,
                        hdrCaptureMode: n,
                        enableGlobalFramePoolLock: (function (e) {
                            let { location: t, disable: n = !1 } = e;
                            return n ? ee.definition.defaultConfig : ee.getConfig({ location: t });
                        })({ location: "updateVideo" }).enabled,
                        useGraphicsCaptureDirtyRegions: o,
                        videoHookAllowDx12: _,
                    },
                    quality: e,
                },
                tt,
            );
        }
        null != t.cameraSource &&
            e7.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: t.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: t.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                tt,
            );
    }
}
function t3(e) {
    switch (e) {
        case e$.CO.CPU_OVERUSE:
            return V.B6.NoiseCancellerCpuOveruse;
        case e$.CO.FAILED:
            return V.B6.NoiseCancellerFailed;
        case e$.CO.VAD_CPU_OVERUSE:
            return V.B6.NoiseCancellerVadCpuOveruse;
        default:
            return;
    }
}
function t6(e) {
    let t = $({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function t4(e, t) {
    e.setAutomaticGainControl(t6(t));
}
function t7(e, t) {
    let n = (0, eO.A)(t, i.getSystemMicrophoneMode());
    n !== t && eq.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: r } = $({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(r);
}
function t5(e) {
    let t = tJ(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eV.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eV.A.hasNoiseSuppression(n) || t.noiseSuppression),
        t4(e, eV.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        t7(e, t.noiseCancellation),
        (0, f.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function t8() {
    return (0, f.isWindows)() && R().satisfies(w.A?.os.release, es.yg);
}
function t9() {
    return (0, f.isMac)() && e7.supports(e$.O5.SCREEN_CAPTURE_KIT) && R().satisfies(w.A?.os.release, es.e);
}
function ne() {
    return (
        (0, f.isWindows)() &&
        e7.supports(e$.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        e7.supports(e$.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nt() {
    return e7.supports(e$.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function nn(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e$.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = tQ(t);
    return Object.assign(i, e), !__OVERLAY__ && n && D.w.set(eX, e5), i;
}
function ni() {
    let e = tJ();
    n_(e.inputDeviceId),
        e7.setAudioOutputDevice(e.outputDeviceId),
        t2(),
        e7.setInputVolume(e.inputVolume),
        e7.setOutputVolume(e.outputVolume),
        e7.setAecDump(e.aecDumpEnabled),
        e7.setSidechainCompression(e.sidechainCompression),
        e7.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        e7.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        (0, f.isLinux)() && g.Ay?.setOpenH264Enabled?.(e.openH264Enabled);
}
function nr() {
    e9 || e7.enable().then(() => v.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function ns(e) {
    return { id: e$.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
}
function na(e, t) {
    if (0 === e.length) {
        let e = ns(t);
        return { [e.id]: e };
    }
    return T()(e)
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
function no(e, t) {
    let n = e[t] ?? e[e$.dx] ?? T()(e).values().first();
    return null != n ? n.id : t;
}
function nl(e) {
    if (!(0, f.isWindows)() || !X.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects) return;
    let t = tr[e];
    t?.guid != null && eD(t.guid, e, e7);
}
function n_(e) {
    e7.setAudioInputDevice(e), nl(e);
}
function nd(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nu() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = ew.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let i = n === eK.W.USER ? e$.x.DEFAULT : e$.x.STREAM,
            r = i === e$.x.STREAM ? e$.Cn : e$.Hz,
            s = t[n] ?? {},
            { localMutes: a, localVolumes: o } = tJ(i);
        for (let [e, t] of Object.entries(s))
            null == (0, ev.tM)(i, e) &&
                (t.muted ? (a[e] = !0) : delete a[e],
                t.volume !== r ? (o[e] = t.volume) : delete o[e],
                e7.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (e)
            for (let e of new Set([...Object.keys(a), ...Object.keys(o)]))
                null == s[e] &&
                    (delete a[e],
                    delete o[e],
                    e7.eachConnection((t) => {
                        t.setLocalVolume(e, r), t.setLocalMute(e, !1);
                    }, i));
        nn({ localMutes: a, localVolumes: o }, i);
    }
}
function nc(e, t) {
    if (t) {
        let { soundshareId: t, soundshareSession: s } = (function (e) {
            if (null == i)
                return (
                    eq.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
                    { soundshareId: null, soundshareSession: "" }
                );
            {
                let t = i.getExperimentalSoundshare() ? e : eb.A.getAudioPid(e),
                    n = "";
                return null != t && (n = eb.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n };
            }
        })(e);
        if (null != t) {
            var n, r;
            return (
                (n = t),
                (r = s),
                (0, f.isWindows)() &&
                    n > 1 &&
                    P.GH(n, { soundshare_session: r }).then((e) => {
                        null == e ||
                            H.Ay.shouldContinueWithoutElevatedProcessForPID(n) ||
                            v.h.wait(() => {
                                v.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: e });
                            });
                    }),
                { soundshareId: t, soundshareSession: s }
            );
        }
    }
    return null != e && tJ().videoHook && P.GH(e), { soundshareId: null, soundshareSession: null };
}
function nE() {
    let e = e$.x.DEFAULT,
        { videoToggleStateMap: t } = tJ(e);
    for (let [e, n] of Object.entries(t)) n === eC.bb8.AUTO_PROBING && delete t[e];
    nn({ videoToggleStateMap: t }, e, !1);
}
function nh(e) {
    let t = tJ(),
        n = e7.getAudioSubsystem(),
        r = e7.getAudioLayer(),
        s = no(tr, t.inputDeviceId),
        a = tr[s]?.name,
        o = (0, eO.A)(t.noiseCancellation, i.getSystemMicrophoneMode());
    eR.default.track(eC.HAw.VOICE_PROCESSING, {
        echo_cancellation: t.echoCancellation,
        noise_cancellation: t.noiseCancellation,
        noise_suppression: t.noiseSuppression,
        automatic_gain_control: t.automaticGainControl,
        location: e,
        bypass_system_input_processing: t.bypassSystemInputProcessing,
        audio_subsystem: n,
        audio_layer: r,
        input_device: a,
        effective_noise_cancellation: o,
    });
}
function nm() {
    let e = tJ(),
        t = tx.size > 0,
        n = e.inputDeviceId,
        i = eV.A.hasEchoCancellation(n) || e.echoCancellation,
        r = eV.A.hasNoiseSuppression(n) || e.noiseSuppression,
        s = t6(eV.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        a = e.noiseCancellation;
    e7.setLoopback(t, {
        echoCancellation: i,
        echoCancellationPreEcho: !t,
        noiseSuppression: r,
        automaticGainControlConfig: s,
        noiseCancellation: a,
    });
}
async function nf() {
    if (!e7.supports(e$.O5.VAAPI) || window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let e = await window.DiscordNative.processUtils.getSystemInfo();
    (e.electronGPUInfo?.gpuDevice ?? []).some((e) => 4098 === e.vendorId) &&
        ((t$ = !0), (tj = e7.supports(e$.O5.GAMESCOPE_CAPTURE)));
}
async function ng() {
    try {
        await g.Ay.ensureModule("discord_krisp");
        let e = g.Ay.requireModule("discord_krisp");
        (tR = !0),
            (d = e.getSdkVersion?.()),
            (u = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (tC = e), i.emitChange();
            }),
            i.emitChange(),
            await g.Ay.ensureModule("discord_voice");
        let t = g.Ay.requireModule("discord_voice");
        t.setupKrispPath?.();
    } catch (t) {
        eq.warn(`Failed to load Krisp module: ${t.message}`), eU.A.captureException(t);
        let e = e$.CO.INITIALIZED;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? e$.CO.INITIALIZED : n;
        }
        eR.default.track(eC.HAw.VOICE_PROCESSING, { noise_canceller_error: e }), nn({ noiseCancellation: !1 });
    } finally {
        tO = !1;
    }
}
async function nA() {
    try {
        let e,
            t = "",
            n = !1,
            i = URL.parse(e2);
        if (null === i) return void eq.log("OpenH264 URL ", i, " is invalid");
        let r = i.pathname.split("/"),
            s = r[r.length - 1].replace(".bz2", "");
        try {
            let t = await g.Ay.downloadOpenH264(
                e2,
                s,
                "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f",
                (e) => {
                    eq.log("OpenH264 download status", e);
                },
            );
            eq.log("OpenH264 is ready", t), (n = t.fetchedFromNetwork), (e = !0);
        } catch (n) {
            eq.error("OpenH264 download failed", n), (t = n.message), (e = !1);
        }
        if (
            (eR.default.track(eC.HAw.VIDEO_OPENH264_DOWNLOADED, {
                success: e,
                fetched_from_network: n,
                error_message: t,
            }),
            e)
        ) {
            let e = await g.Ay.cleanupUnusedOpenH264Files([s]);
            eq.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        eq.error("OpenH264 download failed", e);
    }
}
function nI(e) {
    e === e$.rB.AUTOMATIC
        ? (nn({ automaticAudioSubsystem: !0 }), np())
        : (nn({ automaticAudioSubsystem: !1 }), e7.setAudioSubsystem(e));
}
function np() {
    e7.queueAudioSubsystem(e$.rB.EXPERIMENTAL);
}
function nT(e) {
    let { section: t } = e;
    return t === eC.nc_.VOICE && nr(), !1;
}
class nS extends C.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        let e;
        if (
            (to.start(e0, () => {
                eq.error("Device enumeration timed out"), eR.default.track(eC.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
            }),
            e7.on(y.bg.Connection, (e) => {
                let t;
                tZ(e), t1(e), t5(e);
                let n = tJ();
                e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers),
                    e.setQoS(n.qos),
                    (0, f.isWindows)()
                        ? (e.setExperimentFlag(e$.fd.H265_HARDWARE_ONLY, !0),
                          (null != tk
                              ? tk
                              : "u" > typeof window
                                ? (tk = tX().then((e) => ((tb = e), e)))
                                : Promise.resolve(!1)
                          ).then((t) => {
                              e.setExperimentFlag(e$.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                          }))
                        : (0, f.isMac)() && e.setExperimentFlag(e$.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                    (0, f.isLinux)() && n.openH264Enabled && e.setExperimentFlag(e$.fd.USE_LIBOPENH264_DECODER, !0),
                    (function (e) {
                        let { location: t, disable: n = !1 } = e;
                        return n ? e_.definition.defaultConfig : e_.getConfig({ location: t });
                    })({ location: "setupMediaEngine" }).enabled &&
                        e.setExperimentFlag(e$.fd.LOW_LATENCY_RATE_CONTROL, !0),
                    e.setExperimentFlag(e$.fd.RESET_DECODER_ON_ERRORS, !0),
                    e.setExperimentFlag(e$.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
                let { swallowVolumeOnlySpeakingEvents: r } = k.A.getConfig({ location: "MediaEngineStore" });
                if (
                    (r && e.setExperimentFlag(e$.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === e$.x.STREAM)
                ) {
                    let t = nd(ts);
                    e.setSoundshareDiscardRearChannels(t);
                }
                if ((0, f.isWindows)())
                    e.setExperimentFlag(e$.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(e$.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e$.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                else if ((0, f.isMac)())
                    e.setExperimentFlag(e$.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e$.fd.SIGNAL_AV1_HARDWARE_DECODE, !0),
                        e.setExperimentFlag(
                            e$.fd.H265_DISABLE_ENCODE,
                            !(
                                window?.DiscordNative?.os.arch === "arm64" &&
                                R().satisfies(window?.DiscordNative?.os.release, e$.Dk)
                            ),
                        );
                else if ((0, f.isLinux)()) e.setExperimentFlag(e$.fd.SIGNAL_AV1_DECODE, !0);
                else if ((0, f.isIOS)())
                    e.setExperimentFlag(e$.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e$.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                else if ((0, f.isAndroid)() && !1) {
                    let { enabled: t } = z.getConfig({ location: "MediaEngineStore" });
                    t &&
                        (e.setExperimentFlag(e$.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e$.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
                }
                if ((0, f.isWeb)()) {
                    let { enabled: t } = Q.getConfig({ location: "MediaEngineStore" });
                    e.setExperimentFlag(e$.fd.BROWSER_HEVC, t);
                }
                for (let r of ((0, f.isWindows)() &&
                    tF?.startsWith("AMD") &&
                    eI("MediaEngineStore").enabled &&
                    e.setExperimentFlag(e$.fd.WMF_GPU_ENCODE, !0),
                (0, f.isWindows)() &&
                    tF?.startsWith("Intel") &&
                    ep.getConfig({ location: "MediaEngineStore" }).enabled &&
                    e.setExperimentFlag(e$.fd.WMF_GPU_ENCODE, !0),
                (0, f.isWindows)() &&
                    tF?.startsWith("Qualcomm") &&
                    eI("MediaEngineStore").enabled &&
                    e.setExperimentFlag(e$.fd.WMF_GPU_ENCODE, !0),
                e7.setHasFullbandPerformance(null === (t = (0, x.A)()) || t >= 31),
                e.setRemoteAudioHistory(1e3),
                (0, M.A)(i) && e.setClipsKeyFrameInterval(e$.X1),
                (n = tJ(e.context)),
                e.setPostponeDecodeLevel(100),
                Object.keys(n.localMutes)))
                    r !== eG.default.getId() && e.setLocalMute(r, n.localMutes[r]);
                for (let t of Object.keys(n.localVolumes))
                    t !== eG.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
                for (let t of Object.keys(n.localPans)) {
                    let i = n.localPans[t];
                    e.setLocalPan(t, i.left, i.right);
                }
                for (let t of Object.keys(n.disabledLocalVideos)) e.setLocalVideoDisabled(t, n.disabledLocalVideos[t]);
                e.on(y.yq.Speaking, (t, n, i, r) => {
                    v.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: r });
                }),
                    e.context === e$.x.DEFAULT &&
                        ((tf = !1),
                        e.on(y.yq.SpeakingWhileMuted, () => {
                            let e = !tf;
                            (tf = !0),
                                e && i.emitChange(),
                                tg.start(eZ, () => {
                                    (tf = !1), i.emitChange();
                                });
                        })),
                    e.on(y.yq.DesktopSourceEnd, (t, n) => {
                        v.h.dispatch({
                            type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                            settings: { context: e.context },
                            endReason: t,
                            errorCode: n,
                        });
                    }),
                    e.on(y.yq.InteractionRequired, (e) => {
                        v.h.dispatch({ type: "MEDIA_ENGINE_INTERACTION_REQUIRED", required: e });
                    }),
                    e.on(y.yq.VideoHookInitialize, (e, t, n, i, r, a) => {
                        s?.desktopSource != null &&
                            eR.default.track(eC.HAw.VIDEOHOOK_INITIALIZED, {
                                backend: e,
                                format: t,
                                framebuffer_format: n,
                                sample_count: i,
                                success: r,
                                reinitialization: a,
                                ...(0, Y.A)(s?.desktopSource),
                            });
                    }),
                    e.on(y.yq.NoiseCancellationError, (e) => {
                        eq.warn(`noisecancellererror event: ${e}`),
                            (0, V.QW)({ type: V.iy.NOISE_CANCELLER_ERROR, underlyingError: t3(e) }),
                            (tL = !0),
                            eR.default.track(eC.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                            v.h.dispatch({ type: "AUDIO_SET_NOISE_SUPPRESSION", enabled: !0 }),
                            v.h.dispatch({ type: "AUDIO_SET_NOISE_CANCELLATION", enabled: !1 }),
                            v.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e });
                    }),
                    e.on(y.yq.VoiceActivityDetectorError, (e) => {
                        eq.warn(`voiceactivitydetectorerror event: ${e}`),
                            (0, V.QW)({ type: V.iy.NOISE_CANCELLER_ERROR, underlyingError: t3(e) }),
                            eR.default.track(eC.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
                            v.h.dispatch({
                                type: "AUDIO_SET_MODE",
                                context: e$.x.DEFAULT,
                                mode: eC.TBI.VOICE_ACTIVITY,
                                options: { ...tJ(e$.x.DEFAULT).modeOptions, vadUseKrisp: !1 },
                            }),
                            v.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e });
                    }),
                    e.on(y.yq.SdpError, (e, t, n, i) => {
                        eR.default.track(eC.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: i });
                    }),
                    e.on(y.yq.VideoState, (t) => {
                        v.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                    }),
                    e.setBitRate(ex.A.bitrate),
                    e.applyVideoQualityMode(eY.A.mode),
                    (0, f.isWindows)() &&
                        e7.supports(e$.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                        e7.setAsyncVideoInputDeviceInit(!0);
            }),
            e7.on(y.bg.DeviceChange, (e, t, n) => {
                to.stop(),
                    v.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
            }),
            e7.on(y.bg.VolumeChange, (e, t) => {
                v.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
            }),
            e7.on(y.bg.DesktopSourceEnd, (e, t) => {
                v.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
            }),
            e7.on(y.bg.AudioPermission, (e) => {
                (tU = !0), v.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
            }),
            e7.on(y.bg.VideoPermission, (e) => {
                v.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
            }),
            e7.on(y.bg.WatchdogTimeout, async () => {
                let e;
                if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                    try {
                        await eb.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                    } catch (t) {
                        "number" == typeof t.status && (e = t.status);
                    }
                eq.warn(`Watchdog timeout, report submission status: ${e ?? 200}`);
                let t =
                    em.getConfig({ location: "watchdog_timeout" }).enabled && null != w.A.processUtils.setCrashReason;
                try {
                    await eR.default.track(
                        eC.HAw.VOICE_WATCHDOG_TIMEOUT,
                        { minidump_submission_error: e, will_restart: t },
                        { flush: !0 },
                    );
                } catch (e) {
                    eq.error("Failed to flush voice watchdog timeout analytics event", e);
                }
                t &&
                    (eq.info("Relaunching app due to voice watchdog timeout"),
                    await w.A.processUtils.setCrashReason("voice-watchdog-timeout"),
                    D.w.set("discord_watchdog_restart_timestamp", Date.now().toString()),
                    w.A.app.relaunch());
            }),
            e7.on(y.bg.VideoInputInitialized, (e) => {
                eR.default.track(eC.HAw.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired
                        ? null
                        : Math.round(e.timeToFirstFrame * ek.A.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy,
                    media_session_id: eB.A.getMediaSessionId(),
                    rtc_connection_id: eB.A.getRTCConnectionId(),
                });
            }),
            e7.on(y.bg.AudioInputInitialized, (e) => {
                eR.default.track(eC.HAw.AUDIO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_initialized_ms: Math.round(e.timeToInitialized * ek.A.Millis.SECOND),
                    rtc_connection_id: eB.A.getRTCConnectionId(),
                });
            }),
            e7.on(y.bg.ClipsRecordingRestartNeeded, () => {
                v.h.dispatch({ type: "CLIPS_RESTART" });
            }),
            e7.on(y.bg.ClipsInitFailure, (e, t) => {
                v.h.wait(() => {
                    v.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t });
                });
            }),
            e7.on(y.bg.ClipsRecordingEnded, (e, t) => {
                a?.desktopSource?.id === e &&
                    (null != t && s?.desktopSource?.soundshareId !== t && P.c1(t), (a = null));
            }),
            e7.on(y.bg.NativeScreenSharePickerUpdate, (e, t) => {
                v.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
            }),
            e7.on(y.bg.NativeScreenSharePickerCancel, (e) => {
                v.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
            }),
            e7.on(y.bg.NativeScreenSharePickerError, (e) => {
                v.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
            }),
            e7.on(y.bg.AudioDeviceModuleError, (e, t, n) => {
                eR.default.track(eC.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
            }),
            e7.on(y.bg.VideoCodecError, (e) => {
                let t = "encode" === e.mode ? V.iy.VIDEO_ENCODE_ERROR : V.iy.VIDEO_DECODE_ERROR,
                    n = { videoCodec: e.codecStandard, errorMessage: e.message };
                (0, V.QW)(
                    t === V.iy.VIDEO_ENCODE_ERROR
                        ? { type: t, ...n, videoEncoder: e.implName }
                        : { type: t, ...n, videoDecoder: e.implName },
                );
            }),
            e7.on(y.bg.ConnectionStats, (e) => {
                v.h.dispatch({
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
            e7.on(y.bg.VoiceQueueMetrics, (e) => {
                let t = nN(e);
                null !== t && eR.default.track(eC.HAw.VOICE_QUEUE_METRICS, t);
            }),
            e7.setOnVideoContainerResized((e, t, n) => {
                v.h.wait(() =>
                    v.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
                );
            }),
            nf(),
            o.reset(),
            (0, eL.w)().then((e) => {
                null != e && ((tF = e.gpu_brand), (tB = e.has_intel_hybrid_igpu));
            }),
            e7.on(y.bg.SystemMicrophoneModeChange, (e) => {
                (E = e), e7.eachConnection(t5), i.emitChange();
            }),
            null != (e = D.w.get("audio")) && (D.w.set(eX, { [e$.x.DEFAULT]: e }), D.w.remove("audio")),
            (e5 = D.w.get(eX) ?? {}),
            T().each(e5, (e) => {
                T().defaultsDeep(e, e6()),
                    null != e.modeOptions &&
                        "string" == typeof e.modeOptions.shortcut &&
                        (e.modeOptions.shortcut = (0, eM.OH)(e.modeOptions.shortcut)),
                    null != e.modeOptions &&
                        4 !== e.vadUseKrispSettingVersion &&
                        ((e.vadUseKrispSettingVersion = 4), (e.modeOptions.vadUseKrisp = !0)),
                    e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                    e.vadThrehsoldMigrated ||
                        ((e.vadThrehsoldMigrated = !0),
                        e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = -60)),
                    e7.supports(e$.O5.SIDECHAIN_COMPRESSION) &&
                        e.sidechainCompressionSettingVersion < 1 &&
                        ((e.sidechainCompressionSettingVersion = 1), (e.sidechainCompression = !0)),
                    (0, f.isWeb)()
                        ? 1 !== e.ncUseKrispjsSettingVersion &&
                          ((e.ncUseKrispjsSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                        : 1 !== e.ncUseKrispSettingVersion &&
                          ((e.ncUseKrispSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
            }),
            ni(),
            ((0, f.isWindows)() || (0, f.isLinux)() || (0, f.isMac)()) && !__OVERLAY__ && !tO && !tR
                ? ((tO = !0), ng())
                : (0, f.isWeb)() && e7.supports(e$.O5.NOISE_CANCELLATION)
                  ? ((tR = !0), i.emitChange())
                  : (0, f.isWeb)() && nn({ noiseCancellation: !1 }),
            (0, f.isLinux)() && nA(),
            nE(),
            (0, f.isDesktop)() && f.isPlatformEmbedded && !tz)
        ) {
            tz = !0;
            let e = async () => {
                let t = await new Promise((e) => {
                    g.Ay.pollQueueMetrics((t) => {
                        e(t);
                    });
                });
                t.periodMs = e$.tl;
                let n = nN(t);
                null !== n && eR.default.track(eC.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, e$.tl);
            };
            setTimeout(e, e$.tl);
        }
        (0, f.isWindows)() &&
            f.isPlatformEmbedded &&
            null === ti &&
            e7
                .getCodecSurvey()
                .then((e) => {
                    try {
                        let t = JSON.parse(e);
                        if (null == t || null == t.available_video_decoders)
                            throw Error("decoder survey is not available");
                        ti = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                    } catch (e) {
                        eq.error("Failed to parse codec survey", e), (ti = !1);
                    }
                })
                .catch((e) => {
                    eq.error("Failed to get codec survey", e), (ti = !1);
                })
                .finally(() => {
                    v.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
                }),
            (0, f.isAndroid)(),
            (tV = {
                [e$.O5.VIDEO]: e7.supports(e$.O5.VIDEO),
                [e$.O5.DESKTOP_CAPTURE]: e7.supports(e$.O5.DESKTOP_CAPTURE),
                [e$.O5.HYBRID_VIDEO]: e7.supports(e$.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eG.default, ex.A, eV.A, eF.A, U.A, F.A, eB.A, H.Ay, ew.A, eH.default, eY.A);
    }
    supports(e) {
        return e7.supports(e);
    }
    supportsInApp(e) {
        return tV[e] || e7.supports(e);
    }
    isSupported() {
        return e7.supported();
    }
    isNoiseSuppressionSupported() {
        return e7.supports(e$.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return tR || !1;
    }
    isNoiseCancellationError() {
        return tL;
    }
    isAutomaticGainControlSupported() {
        return e7.supports(e$.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nt() && (e7.supports(e$.O5.LEGACY_AUDIO_SUBSYSTEM) || e7.supports(e$.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return e7.supports(e$.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === e7.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return tR || !1;
    }
    isAecDumpSupported() {
        return e7.supports(e$.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return e7.supports(e$.O5.VIDEO) && e7.supports(e$.O5.SIMULCAST);
    }
    getAecDump() {
        return tJ().aecDumpEnabled;
    }
    getMediaEngine() {
        return e7;
    }
    getVideoComponent() {
        return e7.Video;
    }
    getCameraComponent() {
        return e7.Camera;
    }
    getKrispSuppressionLevel() {
        return u ?? 100;
    }
    getKrispEnableStats() {
        return ty;
    }
    isEnabled() {
        return e9;
    }
    isMute() {
        return this.isSelfMute() || tl;
    }
    isDeaf() {
        return this.isSelfDeaf() || tu;
    }
    hasContext(e) {
        return null != e5[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT;
        return e === e$.x.DEFAULT && t_;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT;
        return (
            !this.isEnabled() ||
            tJ(e).mute ||
            !eS.A.didHavePermission(eW.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === e$.x.DEFAULT && td)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tm;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tm = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT,
            t = tY && "voice_isolation" !== this.getSystemMicrophoneMode() && tJ(e).mode === eC.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (eV.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return tH;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT;
        return !this.isSupported() || tJ(e).deaf;
    }
    isVideoEnabled() {
        return tc && tI;
    }
    isVideoAvailable() {
        return Object.values(ta).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return tI;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.STREAM;
        return tt === e && null != s;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.STREAM;
        return tt === e && null != s && s.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e$.x.DEFAULT;
        return e !== eG.default.getId() && (tJ(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return e7.supports(e$.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e$.x.DEFAULT;
        return tJ(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e$.x.DEFAULT;
        return tJ(t).videoToggleStateMap[e] ?? eC.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e$.x.DEFAULT;
        return t === e$.x.DEFAULT && tM.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT;
        return e === e$.x.DEFAULT && tM.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tv;
    }
    isNativeAudioPermissionReady() {
        return tU;
    }
    getGoLiveSource() {
        return s;
    }
    getGoLiveContext() {
        return tt;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return tn;
    }
    isH264MfDecodeAvailable() {
        return ti;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e$.x.DEFAULT,
            n = tJ(t).localPans[e];
        return null != n ? n : eQ;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e$.x.DEFAULT,
            n = t === e$.x.STREAM ? e$.Cn : e$.Hz,
            i = tJ(t).localVolumes[e];
        return null != i ? i : n;
    }
    getInputVolume() {
        return tJ().inputVolume;
    }
    getOutputVolume() {
        return tJ().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT;
        return tJ(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT;
        return tJ(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            T().each(e5, (t, n) => {
                let {
                    mode: i,
                    modeOptions: { shortcut: r },
                } = t;
                i === eC.TBI.PUSH_TO_TALK && e8.has(n) && (e[n] = r);
            }),
            e
        );
    }
    getInputDeviceId() {
        return no(tr, tJ().inputDeviceId);
    }
    getOutputDeviceId() {
        return no(ts, tJ().outputDeviceId);
    }
    getVideoDeviceId() {
        return no(ta, tJ().videoDeviceId);
    }
    getInputDevices() {
        return tr;
    }
    getOutputDevices() {
        return ts;
    }
    getVideoDevices() {
        return ta;
    }
    getEchoCancellation() {
        let e = tJ();
        return eV.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return e7.supports(e$.O5.SIDECHAIN_COMPRESSION) && tJ().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return tJ().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return tJ().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tb && tb;
    }
    getOpenH264Enabled() {
        return (0, f.isLinux)() && tJ().openH264Enabled;
    }
    getLoopback() {
        return tx.size > 0;
    }
    getLoopbackReasons() {
        return tx;
    }
    getNoiseSuppression() {
        let e = tJ();
        return eV.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = tJ();
        return eV.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return tJ().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return tJ().noiseCancellation;
    }
    getHardwareEncoding() {
        return !0;
    }
    getEnableSilenceWarning() {
        return tJ().silenceWarning;
    }
    getDebugLogging() {
        return e7.getDebugLogging();
    }
    getQoS() {
        return tJ().qos;
    }
    getAttenuation() {
        return tJ().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return tJ().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return tJ().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return ne() && tJ().automaticAudioSubsystem ? e$.rB.AUTOMATIC : e7.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return e7.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return tJ().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === ej.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT;
        return tJ(e);
    }
    getState() {
        return {
            settingsByContext: e5,
            inputDevices: tr,
            outputDevices: ts,
            appSupported: tV,
            krispModuleLoaded: tR,
            krispVersion: d,
            krispSuppressionLevel: u,
            goLiveSource: s,
            goLiveContext: tt,
        };
    }
    getInputDetectedThisConnection() {
        return tp;
    }
    getInputDetected() {
        return o.inputDetected;
    }
    getLastInputDetectedUpdateTime() {
        return o.lastUpdateTime;
    }
    getNoInputDetectedNotice() {
        return tT;
    }
    getInputDeviceOSMuted() {
        return l;
    }
    getInputDeviceOSVolume() {
        return _;
    }
    getPacketDelay() {
        return f.isPlatformEmbedded || this.getMode() !== eC.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        e7.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return te;
    }
    getVideoHook() {
        return tJ().videoHook;
    }
    supportsVideoHook() {
        return e7.supports(e$.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = tJ().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return e7.supports(e$.O5.EXPERIMENTAL_SOUNDSHARE) && R().satisfies(w.A?.os.release, es.$x);
    }
    supportsHookSoundshare() {
        return (0, f.isWindows)() && e7.supports(e$.O5.SOUNDSHARE) && R().satisfies(w.A?.os.release, es.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = tJ().useSystemScreensharePicker,
            n = (0, f.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return e7.supports(e$.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return t$;
    }
    getVideoEncoderExperiments(e, t) {
        let n = ["unk"];
        if (
            (n.push("nvNewPresets"),
            e === e$.x.STREAM ? n.push("nvRelaxRc=250") : n.push("nvRelaxRc=75"),
            this.getUseVaapiEncoder() && n.push("vaapi"),
            e === e$.x.STREAM && "streamer" === t && (0, f.isWindows)())
        ) {
            n.push("useCaptureDeviceForEncode");
            let { overrideDeviceReuse: e } = eE.getConfig({ location: "handleReady" });
            e && n.push("videoCaptureDeviceOverrideReuse");
        }
        return (
            (function (e) {
                let { location: t } = e;
                return el.getConfig({ location: t });
            })({ location: "handleReady" }).enabled && n.push("linux-vulkan"),
            n.join(",")
        );
    }
    getUseGamescopeCapture() {
        return tj;
    }
    getSpeakingWhileMuted() {
        return tf;
    }
    getKrispModelOverride() {
        return c;
    }
    getKrispModels() {
        return tC;
    }
    getKrispVadActivationThreshold() {
        return tJ().modeOptions.vadKrispActivationThreshold ?? 0.5;
    }
    hasActiveCallKitCall() {
        return tK;
    }
    setHasActiveCallKitCall(e) {
        tK = e;
    }
    supportsScreenSoundshare() {
        return (0, f.isMac)()
            ? e7.supports(e$.O5.SOUNDSHARE) && R().satisfies(w.A?.os.release, es.P$) && t9()
            : (0, f.isWindows)()
              ? e7.supports(e$.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, f.isLinux)() && e7.supports(e$.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, f.isWindows)()) {
            if (this.getBypassSystemInputProcessing()) return;
            return tP[this.getInputDeviceId()]?.active?.find((e) => "deep_noise_suppression" === e);
        }
        if ((0, f.isMac)() || (0, f.isIOS)()) return E;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT,
            t = this.supports(e$.O5.VIDEO)
                ? [{ rid: "100", type: e === e$.x.DEFAULT ? e$.mI.VIDEO : e$.mI.SCREEN, quality: e$.Y4 }]
                : [];
        return (
            this.isSimulcastSupported() &&
                e === e$.x.DEFAULT &&
                t.push({ rid: "50", type: e$.mI.VIDEO, quality: e$.Cl }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: (0, f.isWeb)() };
        return e7.fetchAsyncResources(e);
    }
    startDavePreload() {
        !tw &&
            ((tw = !0),
            (0, f.isWeb)() &&
                e7.fetchAsyncResources({ fetchDave: !0 }).catch((e) => {
                    eq.warn("DAVE preload failed:", e), eU.A.captureException(e);
                }));
    }
    getSupportedSecureFramesProtocolVersion() {
        return e7.getSupportedSecureFramesProtocolVersion();
    }
    hasClipsSource() {
        return null != a;
    }
    getGpuBrand() {
        return tF;
    }
}
function nN(e) {
    if (null == e.taskMetrics || 0 === e.taskMetrics.length || 1 === e.taskMetrics.length) return null;
    let t = { metrics_period_ms: e.periodMs, total_tasks: 0, total_exec_time_ns: 0, queue_name: e.queueName };
    (t.total_tasks = e.taskMetrics.reduce((e, t) => e + t.count, 0)),
        (t.total_exec_time_ns = e.taskMetrics.reduce((e, t) => e + t.totalExecTimeNs, 0));
    let n = [...e.taskMetrics].sort((e, t) => t.longestExecTimeNs - e.longestExecTimeNs),
        i = [...e.taskMetrics].sort((e, t) => t.longestQueueTimeNs - e.longestQueueTimeNs);
    for (let e = 0; e < 3; e++)
        if (e < n.length) {
            let i = n[e];
            (t[`slow_task_${e}_name`] = i.name), (t[`slow_task_${e}_longest_exec_time_ns`] = i.longestExecTimeNs);
        }
    for (let e = 0; e < 3; e++)
        if (e < i.length) {
            let n = i[e];
            (t[`delayed_task_${e}_name`] = n.name),
                (t[`delayed_task_${e}_longest_queue_time_ns`] = n.longestQueueTimeNs);
        }
    return (t.full_task_report = JSON.stringify(n)), t;
}
(i = new nS(v.h, {
    VOICE_CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n, currentVoiceChannelId: i, video: r } = e;
        if ((i !== n && t2(r, null), null != t || null == n)) {
            tN = !1;
            return;
        }
        if (tN) return;
        tN = !0;
        let s = tJ();
        (s.mute || s.deaf) && (nn({ deaf: !1, mute: !1 }), e7.eachConnection(t1));
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (r === t.sessionId) {
                (tl = t.mute || t.suppress), (tu = t.deaf), e7.eachConnection(t1);
                let e = null != t.guildId && null != t.channelId && null != tD && tD !== t.channelId,
                    n = !tN && null == t.channelId;
                return t2(!e && !n && tc), (tD = t.channelId), !0;
            }
            return __OVERLAY__ || t.userId !== eG.default.getId() || null != eB.A.getChannelId() || t2(!1, null), e;
        }, !1);
    },
    CONNECTION_OPEN: function (e) {
        (r = e.sessionId), (tl = !1), (tu = !1);
        let t = tJ();
        ne() && (nt() ? nI(e$.rB.AUTOMATIC) : t.automaticAudioSubsystem && np()),
            e7.supports(e$.O5.OFFLOAD_ADM_CONTROLS) && e7.setOffloadAdmControls(!0),
            (0, f.isIOS)() &&
                en.getConfig({ location: "handleConnectionOpen" }).enabled &&
                e7.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
            nl(t.inputDeviceId),
            nu();
    },
    CONNECTION_CLOSED: function () {
        r = null;
    },
    POST_CONNECTION_OPEN: function () {
        return (0, f.isWeb)() && i.startDavePreload(), !1;
    },
    RTC_CONNECTION_STATE: function (e) {
        switch (e.state) {
            case eC.S7L.CONNECTING:
                nr();
                break;
            case eC.S7L.RTC_CONNECTING:
                (tT = !1), (l = void 0), (_ = void 0), (tp = !1), (tY = !1), tW.stop(), tS.stop(), o.reset();
                break;
            case eC.S7L.RTC_CONNECTED:
                t2();
                break;
            case eC.S7L.DISCONNECTED:
                (function () {
                    if (0 === tM.size) return;
                    let e = e$.x.DEFAULT,
                        { disabledLocalVideos: t } = tJ(e);
                    tM.forEach((n) => {
                        I()(t[n], "If you are auto-disabled, then you are also disabled."),
                            delete t[n],
                            e7.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
                    }),
                        tM.clear(),
                        nn({ disabledLocalVideos: t }, e, !1);
                })(),
                    nE();
        }
    },
    AUDIO_SET_TEMPORARY_SELF_MUTE: function (e) {
        let { mute: t } = e;
        (t_ = t), e7.eachConnection(t1);
    },
    AUDIO_TOGGLE_SELF_MUTE: function (e) {
        let { context: t, playSoundEffect: n } = e,
            { mute: i, deaf: r } = tJ(t);
        if (t === e$.x.DEFAULT && (eS.A.requestPermission(eW.iL.AUDIO), td)) return !1;
        (i = !r && !i) || (r = !1), n || (tm = !0), nn({ mute: i, deaf: r }, t), e7.eachConnection(t1);
    },
    AUDIO_SET_SELF_MUTE: function (e) {
        let { context: t, mute: n, playSoundEffect: i } = e;
        nn({ mute: n }, t), i || (tm = !0), e7.eachConnection(t1);
    },
    AUDIO_TOGGLE_SELF_DEAF: function (e) {
        let { context: t } = e;
        nn({ deaf: !tJ(t).deaf }, t), e7.eachConnection(t1);
    },
    AUDIO_TOGGLE_LOCAL_MUTE: function (e) {
        let { context: t, userId: n } = e;
        if (n === eG.default.getId()) return;
        let { localMutes: i } = tJ(t);
        i[n] ? delete i[n] : (i[n] = !0),
            nn({ localMutes: i }, t),
            e7.eachConnection((e) => e.setLocalMute(n, i[n] || !1), t);
    },
    AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
        let { context: t, userId: n, videoToggleState: i, persist: r, isAutomatic: s } = e;
        I()(!(r && s), "These are not allowed to both be true.");
        let a = i === eC.bb8.DISABLED,
            { disabledLocalVideos: o } = tJ(t),
            l = o[n] ?? !1,
            _ = tM.has(n),
            d = i === eC.bb8.AUTO_ENABLED || i === eC.bb8.MANUAL_ENABLED;
        eq.info(`disableVideo=${a} currentlyDisabled=${l} currentlyAutoDisabled=${_}, isVideoShown=${d}`),
            I()(!(_ && !l), "If you are auto-disabled, then you are also disabled.");
        let u = a !== l,
            c = t === e$.x.DEFAULT,
            E = s && u && c,
            h = r && u && c;
        eq.info(`changed=${u} isDefaultContext=${c} isUpdateCausedByVideoHealthManager=${E} isManualToggleByUser=${h}`);
        let { videoToggleStateMap: m } = tJ(t);
        if (
            (m[n] === eC.bb8.AUTO_PROBING &&
                i === eC.bb8.AUTO_ENABLED &&
                (0, eT.A)(n, a ? e$.Al.AUTO_DISABLE : e$.Al.AUTO_ENABLE, d),
            (m[n] = i),
            nn({ videoToggleStateMap: m }, t, r),
            i === eC.bb8.AUTO_PROBING
                ? eB.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
                : eB.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
            tG ||
                (eq.info(`isAutoDisableAllowed=${tG} - disabling VideoHealthManager`),
                eB.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
            E)
        ) {
            if ((!a && !_) || (a && !tG)) return;
            (0, eT.A)(n, a ? e$.Al.AUTO_DISABLE : e$.Al.AUTO_ENABLE, d), a ? tM.add(n) : tM.delete(n);
        } else
            h &&
                (_ && !a
                    ? (eq.info("disallowing auto-disable for this session because of manual override by user"),
                      (tG = !1),
                      eB.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                      (0, eT.A)(n, e$.Al.MANUAL_REENABLE, d))
                    : (0, eT.A)(n, a ? e$.Al.MANUAL_DISABLE : e$.Al.MANUAL_ENABLE, d));
        c && !a && tM.delete(n),
            a ? (o[n] = !0) : delete o[n],
            nn({ disabledLocalVideos: o }, t, r),
            e7.eachConnection((e) => e.setLocalVideoDisabled(n, o[n] ?? !1), t);
    },
    AUDIO_SET_LOCAL_VOLUME: function (e) {
        let { context: t, userId: n, volume: i } = e;
        if (n === eG.default.getId()) return;
        let r = t === e$.x.STREAM ? e$.Cn : e$.Hz,
            { localVolumes: s } = tJ(t);
        i === r ? delete s[n] : (s[n] = i),
            nn({ localVolumes: s }, t),
            e7.eachConnection((e) => e.setLocalVolume(n, i), t);
    },
    AUDIO_SET_LOCAL_PAN: function (e) {
        let { context: t, userId: n, left: i, right: r } = e,
            { localPans: s } = tJ(t);
        (s[n] = { left: i, right: r }), nn({ localPans: s }, t), e7.eachConnection((e) => e.setLocalPan(n, i, r), t);
    },
    AUDIO_SET_MODE: function (e) {
        let { context: t, mode: n, options: i } = e;
        nn({ mode: n, modeOptions: { ...i, updatedAt: Date.now() } }, t), e7.eachConnection(tZ);
    },
    AUDIO_SET_INPUT_VOLUME: function (e) {
        let { volume: t } = e;
        nn({ inputVolume: t0(t) }), e7.setInputVolume(t);
    },
    AUDIO_SET_OUTPUT_VOLUME: function (e) {
        let { volume: t } = e;
        nn({ outputVolume: t }), e7.setOutputVolume(t);
    },
    AUDIO_SET_INPUT_DEVICE: function (e) {
        let { id: t } = e;
        (t = no(tr, t)),
            (tn = performance.now()),
            nn({ inputDeviceId: t }),
            n_(t),
            e7.eachConnection(t5),
            (l = void 0),
            (_ = void 0),
            tW.stop(),
            (tY = !1);
        let { resetSilenceWarningOnDeviceChange: n } = eu.A.getConfig({
            location: "MediaEngineStore.handleSetInputDevice",
        });
        n && ((tp = !1), o.reset());
    },
    AUDIO_SET_OUTPUT_DEVICE: function (e) {
        let { id: t } = e;
        nn({ outputDeviceId: (t = no(ts, t)) }), e7.setAudioOutputDevice(t);
    },
    AUDIO_SET_ACTIVE_INPUT_PROFILE: function (e) {
        let { inputProfile: t } = e;
        nn({ activeInputProfile: t });
        let n = tJ();
        e7.eachConnection((e) => {
            tZ(e), t5(e);
        }),
            e7.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
            nm();
    },
    AUDIO_SET_ECHO_CANCELLATION: function (e) {
        let t = nn({ echoCancellation: e.enabled });
        e7.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nm(), nh(e.location);
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION: function (e) {
        let t;
        (t = nn({ sidechainCompression: e.enabled })), e7.setSidechainCompression(t.sidechainCompression);
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function (e) {
        let t = nn({ sidechainCompressionStrength: e.strength });
        e7.setSidechainCompressionStrength(t.sidechainCompressionStrength);
    },
    AUDIO_SET_LOOPBACK: function (e) {
        let { enabled: t, loopbackReason: n } = e;
        return t ? tx.add(n) : tx.delete(n), nm();
    },
    AUDIO_SET_NOISE_SUPPRESSION: function (e) {
        let t = nn({ noiseSuppression: e.enabled });
        e7.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nm(), nh(e.location);
    },
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function (e) {
        let t = nn({ automaticGainControl: e.enabled });
        e7.eachConnection((e) => t4(e, t.automaticGainControl)), nm(), nh(e.location);
    },
    AUDIO_SET_NOISE_CANCELLATION: function (e) {
        let t = nn({ noiseCancellation: e.enabled });
        e7.eachConnection((e) => t7(e, t.noiseCancellation)), nm(), nh(e.location);
    },
    AUDIO_SET_KRISP_MODEL_OVERRIDE: function (e) {
        eN.A.setKrispModelOverride(e.model), (c = e.model), nm();
    },
    AUDIO_SET_DISPLAY_SILENCE_WARNING: function (e) {
        nn({ silenceWarning: e.enabled });
    },
    AUDIO_SET_DEBUG_LOGGING: function (e) {
        e7.setDebugLogging(e.enabled);
    },
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: function (e) {
        let { level: t } = e;
        (u = t), eN.A.setKrispSuppressionLevel(t);
    },
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: function (e) {
        (0, f.isWeb)() || ((ty = e.enabled), e7.setNoiseCancellationEnableStats?.(e.enabled));
    },
    MEDIA_ENGINE_SET_VIDEO_HOOK: function (e) {
        nn({ videoHook: e.enabled });
    },
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function (e) {
        nn({ experimentalSoundshare2: e.enabled });
    },
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: function (e) {
        let { enabled: t } = e;
        nn({ useSystemScreensharePicker: t });
    },
    AUDIO_SET_ATTENUATION: function (e) {
        let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i } = e,
            r = nn({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i });
        e7.eachConnection((e) =>
            e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers),
        );
    },
    AUDIO_SET_QOS: function (e) {
        let { enabled: t } = e;
        nn({ qos: t }), e7.eachConnection((e) => e.setQoS(t));
    },
    MEDIA_ENGINE_DEVICES: function (e) {
        let { inputDevices: t, outputDevices: n, videoDevices: i } = e,
            r = tr;
        if (((tr = na(t, ez.intl.string(ez.t["/QIjDA"]))), !T().isEqual(tr, r))) {
            let e = tJ();
            n_(no(tr, e.inputDeviceId)), e7.eachConnection(t5);
        }
        !(function (e) {
            let t = ts;
            if (((ts = na(e, ez.intl.string(ez.t.xlUg0v))), !T().isEqual(ts, t))) {
                let e = tJ(),
                    n = no(ts, e.outputDeviceId);
                e7.setAudioOutputDevice(n);
                let i = nd(t),
                    r = nd(ts);
                i !== r &&
                    e7.eachConnection((e) => {
                        e.context === e$.x.STREAM && e.setSoundshareDiscardRearChannels(r);
                    });
            }
        })(n);
        tI = i.length > 0;
        let s = ta;
        if (((ta = na(i, ez.intl.string(ez.t.WKWARY))), tc && !T().isEqual(ta, s))) {
            let e = void 0 !== ta[tE],
                t = tE === e$.dx && s[e$.dx]?.disabled,
                n = "Firefox" === N().name && "" === tE && s[tE]?.name === "Default" && !s[tE]?.disabled;
            t2(e || t || n);
        }
    },
    AUDIO_VOLUME_CHANGE: function (e) {
        let { inputVolume: t, outputVolume: n } = e;
        nn({ inputVolume: t0(t), outputVolume: n });
    },
    AUDIO_RESET: function () {
        D.w.remove(eX), location.reload();
    },
    AUDIO_INPUT_DETECTED: function (e) {
        let { inputDetected: t } = e;
        if (null == t) return !1;
        if (((tT = !0 !== tp && !t), t)) (tp = !0), (tY = !1), tW.stop(), tS.stop();
        else if (tJ().mode === eC.TBI.VOICE_ACTIVITY && tp) {
            let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = eu.A.getConfig({
                location: "MediaEngineStore.handleInputDetected",
            });
            e &&
                tW.start(e1, () => {
                    eR.default.track(eC.HAw.HARDWARE_MUTE_GUESSED, {
                        input_device_name: tr[no(tr, tJ().inputDeviceId)]?.name,
                        rtc_connection_id: eB.A.getRTCConnectionId(),
                    }),
                        (tY = !0),
                        i.emitChange();
                }),
                null != t &&
                    tS.start(t * ek.A.Millis.MINUTE, () => {
                        (tp = !1), o.reset();
                    });
        }
    },
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: function (e) {
        let { osVolume: t, osMuted: n } = e;
        (_ = t), (l = n);
    },
    AUDIO_SET_SUBSYSTEM: function (e) {
        nI(e.subsystem);
    },
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: function (e) {
        let t = e.bypassEnabled;
        nn({ bypassSystemInputProcessing: t }), e7.setAudioInputBypassSystemProcessing(t), nh(e.location);
    },
    MEDIA_ENGINE_SET_AUDIO_ENABLED: function (e) {
        (e9 = e.enabled), e.unmute && nn({ mute: !1, deaf: !1 }), e7.eachConnection(t1);
    },
    MEDIA_ENGINE_SET_VIDEO_ENABLED: function (e) {
        let { enabled: t } = e;
        eS.A.requestPermission(eW.iL.CAMERA), t2(t);
    },
    MEDIA_ENGINE_PERMISSION: function (e) {
        let { kind: t, granted: n } = e;
        if (!n)
            switch (t) {
                case "audio":
                    (e9 = !1), e7.eachConnection(t1);
                    break;
                case "video":
                    t2(!1);
            }
    },
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
        let { settings: t } = e;
        if (t?.desktopSettings != null) {
            let e = null,
                n = null,
                { sourceId: i, sound: r } = t.desktopSettings,
                a = t.context ?? e$.x.DEFAULT,
                o = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
                l = eb.A.getPidFromDesktopSource(i);
            f.isPlatformEmbedded && ({ soundshareId: e, soundshareSession: n } = nc(l, r)),
                a !== tt && (null != s && e7.setGoLiveSource(null, tt), (tt = a)),
                t2(a === e$.x.STREAM && tc, {
                    desktopSource: { id: i, sourcePid: l, soundshareId: e, soundshareSession: n },
                    quality: { resolution: o.resolution, frameRate: o.frameRate },
                });
        } else if (t?.cameraSettings != null) {
            let e = t.context ?? e$.x.DEFAULT,
                { videoDeviceGuid: n, audioDeviceGuid: i } = t.cameraSettings,
                r = e === e$.x.STREAM && tc,
                s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
            t2(r, {
                cameraSource: { videoDeviceGuid: n, audioDeviceGuid: i },
                quality: { resolution: s.resolution, frameRate: s.frameRate },
            });
        } else t2(tc, null);
    },
    MEDIA_ENGINE_SET_VIDEO_DEVICE: function (e) {
        let { id: t } = e;
        nn({ videoDeviceId: (t = no(ta, t)) }), t2();
    },
    MEDIA_ENGINE_INTERACTION_REQUIRED: function (e) {
        return te !== e.required && ((te = e.required), e.required || e7.interact(), !0);
    },
    USER_SETTINGS_MODAL_INIT: nT,
    USER_SETTINGS_MODAL_SET_SECTION: nT,
    CERTIFIED_DEVICES_SET: function () {
        return e7.eachConnection(t5), !1;
    },
    RPC_APP_CONNECTED: function (e) {
        let { application: t } = e;
        e8.add(t.id);
    },
    RPC_APP_DISCONNECTED: function (e) {
        let { application: t } = e;
        e8.delete(t.id);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { mediaEngineState: t } = e;
        (e5 = t.settingsByContext),
            (tr = t.inputDevices),
            (ts = t.outputDevices),
            (tV = t.appSupported),
            (tR = t.krispModuleLoaded),
            (d = t.krispVersion),
            (tt = t.goLiveContext);
    },
    APP_STATE_UPDATE: function (e) {
        let { state: t } = e,
            n = B.A.isEnabled();
        if (t === eC.g6G.BACKGROUND && tc && !n) (tA = !0), t2(!1);
        else {
            if (t !== eC.g6G.ACTIVE || !tA) return !1;
            (tA = !1), t2(!0);
        }
        return !0;
    },
    SET_CHANNEL_BITRATE: function (e) {
        e7.eachConnection((t) => t.setBitRate(e.bitrate));
    },
    SET_VAD_PERMISSION: function (e) {
        let { hasPermission: t } = e,
            n = !t;
        if (n === td) return !1;
        (td = n), e7.eachConnection(t1);
    },
    SET_NATIVE_PERMISSION: function (e) {
        let { state: t, permissionType: n } = e,
            i = t === eW.hL.ACCEPTED;
        switch (n) {
            case eW.iL.AUDIO:
                (tU = !0), e7.eachConnection(t1);
                break;
            case eW.iL.CAMERA:
                !i && tc && t2(!1);
                break;
            default:
                return !1;
        }
    },
    SET_CHANNEL_VIDEO_QUALITY_MODE: function (e) {
        e7.eachConnection((t) => t.applyVideoQualityMode(e.mode));
    },
    MEDIA_ENGINE_SET_AEC_DUMP: function (e) {
        let { enabled: t } = e,
            n = nn({ aecDumpEnabled: t });
        e7.setAecDump(n.aecDumpEnabled);
    },
    MEDIA_ENGINE_SET_OPENH264_ENABLED: function (e) {
        let { enabled: t } = e;
        nn({ openH264Enabled: t }), g.Ay?.setOpenH264Enabled?.(t);
    },
    MEDIA_ENGINE_RESET_SETTINGS: function (e) {
        let { overrides: t } = e;
        if (__OVERLAY__) return !1;
        (e5 = Object.values(e$.x).reduce((e, n) => {
            let i = e6();
            return (e[n] = T().merge(i, t[n])), e;
        }, {})),
            D.w.set(eX, e5),
            ni();
    },
    CHANNEL_DELETE: function () {
        if ((!tc && null == s) || null != eB.A.getRTCConnectionId()) return !1;
        t2(!1, null);
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function () {
        return !!tL && ((tL = !1), !0);
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
        let { settings: t } = e;
        e7.applyMediaFilterSettings(t).finally(() => {
            (tv = !1), i.emitChange();
        });
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function () {
        tv = !0;
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function () {
        tv = !1;
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            local: n,
            wasSaved: i,
        } = e;
        if (t !== eK.oD.PRELOADED_USER_SETTINGS || n || null != i) return !1;
        nu(!0);
    },
    CLIPS_INIT: function (e) {
        let { sourceId: t, applicationName: n, quality: r } = e;
        if (!(0, G.Ao)() || null == w.A) return !1;
        null != a &&
            (e7.setClipsSource(null),
            (0, f.isWindows)() &&
                (null != a.desktopSource.soundshareId
                    ? P.c1(a.desktopSource.soundshareId)
                    : null != a.desktopSource.sourcePid && tJ().videoHook && P.c1(a.desktopSource.sourcePid)));
        let s = eb.A.getPidFromDesktopSource(t),
            { soundshareId: o, soundshareSession: l } = nc(s, !0);
        a = { desktopSource: { id: t, sourcePid: s, soundshareId: o, soundshareSession: l }, quality: r };
        let _ = tq("MediaEngineStore clips"),
            d = tJ().videoHook,
            u = !d || !J.getConfig({ location: "handleClipsInit" }).enabled,
            c = d && eh.getConfig({ location: "handleClipsInit" }).enabled;
        e7.setClipsSource({
            desktopDescription: {
                id: a.desktopSource.id,
                soundshareId: a.desktopSource.soundshareId,
                useVideoHook: d,
                useHookFramePacer: u,
                useGraphicsCapture: t8(),
                useCaptureDeviceForEncode: !1,
                useLoopback: i.getExperimentalSoundshare(),
                useQuartzCapturer: !0,
                allowScreenCaptureKit: t9(),
                videoHookStaleFrameTimeoutMs: 500,
                graphicsCaptureStaleFrameTimeoutMs: eJ,
                hdrCaptureMode: _,
                videoHookAllowDx12: c,
            },
            quality: r,
            applicationName: n,
            videoEncoderExperiments: i.getVideoEncoderExperiments(e$.x.STREAM, "streamer"),
        });
    },
    CLIPS_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        !1 === t.decoupledClipsEnabled && ((a = null), e7.setClipsSource(null));
    },
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function (e) {
        tH = e.enabled;
    },
    MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: function (e) {
        let { deviceId: t, active: n, available: i } = e;
        tP[t] = { active: n, available: i };
    },
})),
    (o = new eo(e7, i));
let nO = i;
