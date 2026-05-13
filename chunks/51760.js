"use strict";
let i, r, s, a, o, l, u, c, d, _, f;
n.d(t, { Ay: () => nR }), n(323874), n(14289), n(35956), n(321073);
var h = n(823598),
    p = n(626584),
    E = n(723702),
    m = n(19575);
(0, h.WQ)({
    supported() {
        try {
            if (__OVERLAY__);
            else if (E.isPlatformEmbedded) {
                let e = (0, h.lE)();
                if (null == e.VoiceConnection) throw Error("voe function missing");
                return !0;
            }
        } catch (e) {
            new p.A("injectMediaEngine").error("Potentially corrupt installation:", e.message);
        }
        return !1;
    },
    supportsFeature: (e) => m.Ay.supportsFeature(e),
    setProcessPriority(e) {
        m.Ay.getDiscordUtils().setProcessPriority(e);
    },
    getVoiceEngine: () => m.Ay.getVoiceEngine(),
    getOpenH264LibraryPath: () => m.Ay.getOpenH264LibraryPath(),
});
var g = n(284009),
    A = n.n(g),
    I = n(735438),
    T = n.n(I),
    S = n(481613),
    N = n.n(S),
    y = n(299855),
    C = n.n(y),
    v = n(17928),
    O = n(459838),
    R = n(506774),
    b = n(451988),
    D = n(228366),
    L = n(77729),
    w = n(719129),
    M = n(894539),
    P = n(124838),
    x = n(274372),
    U = n(915618),
    k = n(572164),
    G = n(680725),
    F = n(487329),
    V = n(736056),
    B = n(6494),
    H = n(952818),
    j = n(540305),
    Y = n(945810);
let W = {
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
    K = (0, Y.mj)({
        kind: "user",
        name: "2025-09-agc2-v2",
        defaultConfig: { noiseCancellationDuringProcessing: !1, noiseCancellationConfig: { useAGC2: !1 } },
        variations: {
            1: { noiseCancellationDuringProcessing: !0, noiseCancellationConfig: { useAGC2: !1 } },
            2: { noiseCancellationDuringProcessing: !0, noiseCancellationConfig: W, vadKrispActivationThreshold: 0.5 },
            3: { noiseCancellationDuringProcessing: !0, noiseCancellationConfig: W, vadKrispActivationThreshold: 0.7 },
            4: { noiseCancellationDuringProcessing: !0, noiseCancellationConfig: W, vadKrispActivationThreshold: 0.8 },
            5: { noiseCancellationDuringProcessing: !0, noiseCancellationConfig: W, vadKrispActivationThreshold: 0.9 },
            6: { noiseCancellationDuringProcessing: !0, noiseCancellationConfig: W, vadKrispActivationThreshold: 0.95 },
        },
    });
function z(e) {
    let { location: t, disable: n = !1 } = e;
    return n ? K.definition.defaultConfig : K.getConfig({ location: t });
}
let $ = (0, Y.mj)({
        name: "2026-04-av1-decode-android",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    q = { probeAudioEffects: !1 },
    Z = (0, Y.mj)({
        name: "2026-03-audio-effects-probe",
        kind: "user",
        defaultConfig: q,
        variations: { 1: { ...q, probeAudioEffects: !0 } },
    }),
    X = (0, Y.mj)({
        name: "2025-08-browser-hevc",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    Q = (0, Y.mj)({
        name: "2026-04-disable-hook-frame-pacer",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var J = n(240921);
let ee = (0, J.Ay)({
        kind: "user",
        name: "2025-11-global-frame-pool-lock",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    et = (0, Y.mj)({
        name: "2026-02-go-live-hdr",
        kind: "user",
        defaultConfig: { hdrCaptureMode: "never" },
        variations: { 1: { hdrCaptureMode: "always" }, 2: { hdrCaptureMode: "permittedDevicesOnly" } },
    }),
    en = (0, Y.mj)({
        name: "2026-03-ios-audio-interrupt-handling",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var ei = n(574381),
    er = n(941426),
    es = n(325278);
let ea = new er.Vy("InputWatcher");
class eo {
    mediaEngine;
    mediaEngineStore;
    stateChangeTimeout = new b.Ep();
    inputDetected = void 0;
    lastUpdateTime = performance.now();
    constructor(e, t) {
        (this.mediaEngine = e), (this.mediaEngineStore = t), this.mediaEngine.on(O.bg.Silence, this.handleSilence);
    }
    reset() {
        this.stateChangeTimeout.stop(),
            null != this.inputDetected && this.handleSilence(!this.inputDetected),
            (this.inputDetected = void 0);
    }
    fetchInputDeviceOSConfig = async () => {
        if ((0, ei.uF)() && C().satisfies(L.A?.os.release, es.PH))
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
                    D.h.dispatch({ type: "AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED", osVolume: i, osMuted: r });
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
                D.h.dispatch({
                    type: "AUDIO_INPUT_DETECTED",
                    inputDetected: this.inputDetected,
                    lastUpdateTime: this.lastUpdateTime,
                });
        });
    };
}
let el = (0, Y.mj)({
        name: "2026-03-linux-vulkan-capture",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eu = (0, J.Ay)({
        kind: "user",
        name: "2025-10-low-latency-rate-control",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var ec = n(140175);
(0, Y.mj)({
    name: "2026-02-mobile-volume-output-slider-removal",
    kind: "user",
    defaultConfig: { audioOutputPresent: !0, nonContextualStreamOutputPresent: !0, showTileVolumeIndicator: !1 },
    variations: { 1: { audioOutputPresent: !1, nonContextualStreamOutputPresent: !1, showTileVolumeIndicator: !0 } },
});
var ed = n(801644);
let e_ = (0, J.Ay)({
        kind: "user",
        name: "2025-10-vad-before-processing",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    ef = (0, Y.mj)({
        name: "2026-03-video-capture-device-no-reuse",
        kind: "user",
        defaultConfig: { overrideDeviceReuse: !1 },
        variations: { 1: { overrideDeviceReuse: !0 } },
    }),
    eh = (0, Y.mj)({
        name: "2026-04-video-hook-dx12",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    ep = (0, J.Ay)({
        kind: "user",
        name: "2026-02-voice-timeout-mitigations",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eE = (0, Y.mj)({
        name: "2026-02-wgc-dirty-regions-all",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    em = (0, Y.mj)({
        name: "2026-02-wgc-dirty-regions",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eg = (0, Y.mj)({
        name: "2025-12-wmf-gpu-encode",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function eA(e) {
    return eg.getConfig({ location: e });
}
let eI = (0, Y.mj)({
    name: "2026-01-wmf-gpu-encode-intel",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eT = n(75076),
    eS = n(91777),
    eN = n(559633),
    ey = n(205106),
    eC = n(174459),
    ev = n(652215);
let eO = new er.Vy("AudioEffects");
async function eR(e, t, n) {
    if (!(0, ei.uF)()) return Promise.reject(Error("Audio effects querying not supported on non-Windows platforms"));
    try {
        let i = await n.getDeviceAudioEffects(e);
        return (
            D.h.dispatch({ type: "MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS", deviceId: t, ...i }),
            eC.default.track(ev.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, {
                succeeded: !0,
                active_effects: i.active,
                available_effects: i.available,
            }),
            i
        );
    } catch (e) {
        eO.error("Failed to probe audio effects for device", e),
            eC.default.track(ev.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, { succeeded: !1 });
    }
}
var eb = n(967347),
    eD = n(879172),
    eL = n(617617),
    ew = n(499156),
    eM = n(353835),
    eP = n(927813),
    ex = n(38405),
    eU = n(350535),
    ek = n(495544),
    eG = n(131319),
    eF = n(347481),
    eV = n(734057),
    eB = n(763827),
    eH = n(287809),
    ej = n(117549),
    eY = n(765682),
    eW = n(355097),
    eK = n(509381),
    ez = n(731854),
    e$ = n(375708);
let eq = new p.A("MediaEngineStore"),
    eZ = "MediaEngineStore",
    eX = { left: 1, right: 1 },
    eQ = 5 * eP.A.Millis.SECOND,
    eJ = 2 * eP.A.Millis.SECOND,
    e0 = 30 * eP.A.Millis.SECOND,
    e1 = +eP.A.Millis.MINUTE,
    e2 = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2",
    e3 = 0;
function e6() {
    return {
        mode: ev.TBI.VOICE_ACTIVITY,
        modeOptions: {
            threshold: -60,
            autoThreshold: E.isPlatformEmbedded || __OVERLAY__,
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
        audioMixerSettings: {
            enabled: !1,
            mode: "line",
            spatialBlend: 1,
            distance: 3,
            roomSize: 25,
            spread: 4,
            arcAngle: 180,
            gridColumns: 3,
            gridSpacing: 1.5,
            buckets: 10,
            listenerHeight: 0.15,
        },
        localPans: {},
        inputVolume: ez.Hz,
        outputVolume: ez.Hz,
        inputDeviceId: ez.dx,
        outputDeviceId: ez.dx,
        videoDeviceId: ez.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: e7.supports(ez.O5.VIDEO_HOOK),
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
        [eK.m.CUSTOM]: {},
        [eK.m.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [eK.m.STUDIO]: {
            mode: ev.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    e5 = { modeOptions: { vadUseKrisp: !1 }, noiseCancellation: !1, noiseSuppression: !0 },
    e7 = (0, O.hB)((0, O.WI)());
eq.enableNativeLogger(!0);
let e8 = {},
    e9 = new Set([ez.x.DEFAULT]),
    te = e7.supports(ez.O5.AUTO_ENABLE),
    tt = !1,
    tn = ez.x.STREAM,
    ti = performance.now(),
    tr = null,
    ts = { [ez.dx]: nu("No Input Devices") },
    ta = { [ez.dx]: nu("No Output Devices") },
    to = { [ez.dx]: nu("No Video Devices") },
    tl = new b.Ep(),
    tu = !1,
    tc = !1,
    td = !1,
    t_ = !1,
    tf = !1,
    th = ez.qe,
    tp = ez.qe,
    tE = !1,
    tm = !1,
    tg = new b.Ep(),
    tA = !1,
    tI = !1,
    tT = !1,
    tS = !1,
    tN = new b.Ep(),
    ty = !1,
    tC = !1,
    tv = !1,
    tO = [],
    tR = !1,
    tb = null,
    tD = !1,
    tL = !1,
    tw = !1,
    tM = {},
    tP = null,
    tx = null,
    tU = !1;
eS.A.hasPermission(eY.iL.AUDIO, { showAuthorizationError: !1 }),
    eS.A.hasPermission(eY.iL.CAMERA, { showAuthorizationError: !1 });
let tk = new Set(),
    tG = !1,
    tF = new Set(),
    tV = {},
    tB = null,
    tH = null,
    tj = !0,
    tY = !1,
    tW = new b.Ep(),
    tK = !1,
    tz = !1,
    t$ = !1,
    tq = !1,
    tZ = {};
function tX(e) {
    return (function (e) {
        let { location: t } = e;
        return et.getConfig({ location: t });
    })({ location: e }).hdrCaptureMode;
}
async function tQ() {
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
function tJ() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ez.x.DEFAULT,
        t = e8[e];
    return null == t && ((t = e6()), (e8[e] = t)), t;
}
function t0() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ez.x.DEFAULT,
        t = tJ(e),
        n = e4[t.activeInputProfile ?? eK.m.CUSTOM],
        i = tv ? tZ : e5,
        r = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}), ...(i.modeOptions ?? {}) };
    if (
        (null == r.vadDuringPreProcess &&
            (r.vadDuringPreProcess = (function (e) {
                let { location: t, disable: n = !1 } = e;
                return n ? e_.definition.defaultConfig : e_.getConfig({ location: t });
            })({ location: "getSettings" }).enabled),
        (null == r.vadKrispActivationThreshold && !0 === n.automaticGainControl) || !0 === t.automaticGainControl)
    ) {
        let e = z({ location: "getSettings" });
        null != e.vadKrispActivationThreshold && (r.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return { ...t, ...n, ...i, modeOptions: r };
}
function t1(e) {
    let t = t0(e.context),
        n = t.mode;
    e.context === ez.x.DEFAULT && (0, ec.N)(!1, !1);
    let { showPTTSpeakingIndicator: i } = ew.A.getConfig({ location: "setInputMode" }),
        r = i && n === ev.TBI.PUSH_TO_TALK;
    e.setInputMode(n, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: !!r || t.modeOptions.autoThreshold,
        vadUseKrisp: (!!r || t.modeOptions.vadUseKrisp) && (tv || !1),
        vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? 0.5,
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        vadDuringPreProcess: t.modeOptions.vadDuringPreProcess ?? !1,
        pttReleaseDelay: Math.round(t.modeOptions.delay),
    });
}
function t2(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ez.Hz;
    return T().clamp(e, 0, t);
}
function t3(e) {
    let t = t0(e.context),
        n = !te || t.mute || t.deaf;
    e.context === ez.x.DEFAULT
        ? (n = n || tu || tc || td || !eS.A.didHavePermission(eY.iL.AUDIO))
        : e.context === ez.x.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === ez.x.DEFAULT && M.A.updateNativeMute();
}
function t6() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tf,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
        n = s;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, E.isWindows)()
                ? w.c1(n.desktopSource.soundshareId)
                : null != n.desktopSource.sourcePid && t0().videoHook && w.c1(n.desktopSource.sourcePid),
            e7.setGoLiveSource(null, tn)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            e7.setGoLiveSource(null, tn),
        tf || e)
    ) {
        let t = t0().videoDeviceId;
        tf && t === ez.dx && tp === ez.dx && th !== ez.qe ? (t = th) : (tp = t),
            (th = (tf = e) ? nd(to, t) : ez.qe),
            e7.setVideoInputDevice(th);
    }
    if (((s = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = tX("MediaEngineStore go live"),
                r = t0().videoHook,
                s = nn(),
                a = s ? ((0, E.isWindows)() && C().satisfies(L.A?.os.release, es.fG) ? es.zl : es.eg) : 0,
                o = !1;
            (0, E.isWindows)() &&
                a >= es.zl &&
                (o =
                    !0 === tH
                        ? em.getConfig({ location: "updateVideo" }).enabled
                        : eE.getConfig({ location: "updateVideo" }).enabled);
            let l = !r || !Q.getConfig({ location: "updateVideo" }).enabled,
                u = r && eh.getConfig({ location: "updateVideo" }).enabled;
            e7.setGoLiveSource(
                {
                    desktopDescription: {
                        id: t.desktopSource.id,
                        soundshareId: t.desktopSource.soundshareId,
                        useVideoHook: r,
                        useHookFramePacer: l,
                        useGraphicsCapture: s,
                        useGraphicsCaptureApiLevel: a,
                        useCaptureDeviceForEncode: (0, E.isWindows)(),
                        useLoopback: i.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: ni(),
                        videoHookStaleFrameTimeoutMs: 500,
                        graphicsCaptureStaleFrameTimeoutMs: eQ,
                        hdrCaptureMode: n,
                        enableGlobalFramePoolLock: (function (e) {
                            let { location: t, disable: n = !1 } = e;
                            return n ? ee.definition.defaultConfig : ee.getConfig({ location: t });
                        })({ location: "updateVideo" }).enabled,
                        useGraphicsCaptureDirtyRegions: o,
                        videoHookAllowDx12: u,
                    },
                    quality: e,
                },
                tn,
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
                tn,
            );
    }
}
function t4(e) {
    switch (e) {
        case ez.CO.KRISP_CPU_OVERUSE:
            return F.B6.KrispCpuOveruse;
        case ez.CO.KRISP_FAILED:
            return F.B6.KrispFailed;
        case ez.CO.KRISP_VAD_CPU_OVERUSE:
            return F.B6.KrispVadCpuOveruse;
        case ez.CO.KRISP_INIT_ERROR:
            return F.B6.KrispInitError;
        case ez.CO.KRISP_INIT_ERROR_NATIVE:
            return F.B6.KrispInitErrorNative;
        case ez.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED:
            return F.B6.KrispInitErrorSse4NotSupported;
        case ez.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED:
            return F.B6.KrispInitErrorAvx2NotSupported;
        case ez.CO.KRISP_INIT_ERROR_UNSIGNED:
            return F.B6.KrispInitErrorUnsigned;
        case ez.CO.KRISP_INIT_ERROR_GLOBAL_INIT:
            return F.B6.KrispInitErrorGlobalInit;
        case ez.CO.KRISP_INIT_ERROR_WEIGHT_8K:
            return F.B6.KrispInitErrorWeight8k;
        case ez.CO.KRISP_INIT_ERROR_WEIGHT_16K:
            return F.B6.KrispInitErrorWeight16k;
        case ez.CO.KRISP_INIT_ERROR_WEIGHT_32K:
            return F.B6.KrispInitErrorWeight32k;
        case ez.CO.KRISP_INIT_ERROR_WEIGHT_VAD:
            return F.B6.KrispInitErrorWeightVad;
        default:
            return;
    }
}
let t5 = new Set([
    ez.CO.KRISP_INIT_ERROR,
    ez.CO.KRISP_INIT_ERROR_NATIVE,
    ez.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED,
    ez.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED,
    ez.CO.KRISP_INIT_ERROR_UNSIGNED,
    ez.CO.KRISP_INIT_ERROR_GLOBAL_INIT,
    ez.CO.KRISP_INIT_ERROR_WEIGHT_8K,
    ez.CO.KRISP_INIT_ERROR_WEIGHT_16K,
    ez.CO.KRISP_INIT_ERROR_WEIGHT_32K,
    ez.CO.KRISP_INIT_ERROR_WEIGHT_VAD,
]);
function t7(e) {
    if (
        (eq.warn(`Voice processing error: ${e}`),
        (0, F.QW)({ type: F.iy.NOISE_CANCELLER_ERROR, underlyingError: t4(e) }),
        eC.default.track(ev.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
        t5.has(e))
    ) {
        tv = !1;
        return;
    }
    e === ez.CO.KRISP_VAD_CPU_OVERUSE
        ? D.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e })
        : ((tD = !0), D.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e }));
}
function t8(e) {
    let t = z({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function t9(e, t) {
    e.setAutomaticGainControl(t8(t));
}
function ne(e, t) {
    let n = (0, ey.A)(t, i.getSystemMicrophoneMode());
    n !== t && eq.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: r } = z({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(r);
}
function nt(e) {
    let t = t0(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eF.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eF.A.hasNoiseSuppression(n) || t.noiseSuppression),
        t9(e, eF.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        ne(e, t.noiseCancellation),
        (0, E.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function nn() {
    return (0, E.isWindows)() && C().satisfies(L.A?.os.release, es.yg);
}
function ni() {
    return (0, E.isMac)() && e7.supports(ez.O5.SCREEN_CAPTURE_KIT) && C().satisfies(L.A?.os.release, es.e);
}
function nr() {
    return (
        (0, E.isWindows)() &&
        e7.supports(ez.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        e7.supports(ez.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function ns() {
    return e7.supports(ez.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function na(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ez.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = tJ(t);
    return Object.assign(i, e), !__OVERLAY__ && n && R.w.set(eZ, e8), i;
}
function no() {
    let e = t0();
    nf(e.inputDeviceId),
        e7.setAudioOutputDevice(e.outputDeviceId),
        t6(),
        e7.setInputVolume(e.inputVolume),
        e7.setOutputVolume(e.outputVolume),
        e7.setAecDump(e.aecDumpEnabled),
        e7.setSidechainCompression(e.sidechainCompression),
        e7.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        e7.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        (0, E.isLinux)() && m.Ay?.setOpenH264Enabled?.(e.openH264Enabled),
        e7.setAudioMixerOptions(e.audioMixerSettings);
}
function nl() {
    te || e7.enable().then(() => D.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nu(e) {
    return { id: ez.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
}
function nc(e, t) {
    if (0 === e.length) {
        let e = nu(t);
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
function nd(e, t) {
    let n = e[t] ?? e[ez.dx] ?? T()(e).values().first();
    return null != n ? n.id : t;
}
function n_(e) {
    if (!(0, E.isWindows)() || !Z.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects) return;
    let t = ts[e];
    t?.guid != null && eR(t.guid, e, e7);
}
function nf(e) {
    e7.setAudioInputDevice(e), n_(e);
}
function nh(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function np() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = eL.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let i = n === eW.W.USER ? ez.x.DEFAULT : ez.x.STREAM,
            r = i === ez.x.STREAM ? ez.Cn : ez.Hz,
            s = t[n] ?? {},
            { localMutes: a, localVolumes: o } = t0(i);
        for (let [e, t] of Object.entries(s))
            null == (0, eD.tM)(i, e) &&
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
        na({ localMutes: a, localVolumes: o }, i);
    }
}
function nE(e, t) {
    if (t) {
        let { soundshareId: t, soundshareSession: s } = (function (e) {
            if (null == i)
                return (
                    eq.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
                    { soundshareId: null, soundshareSession: "" }
                );
            {
                let t = i.getExperimentalSoundshare() ? e : eM.A.getAudioPid(e),
                    n = "";
                return null != t && (n = eM.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n };
            }
        })(e);
        if (null != t) {
            var n, r;
            return (
                (n = t),
                (r = s),
                (0, E.isWindows)() &&
                    n > 1 &&
                    w.GH(n, { soundshare_session: r }).then((e) => {
                        null == e ||
                            H.Ay.shouldContinueWithoutElevatedProcessForPID(n) ||
                            D.h.wait(() => {
                                D.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: e });
                            });
                    }),
                { soundshareId: t, soundshareSession: s }
            );
        }
    }
    return null != e && t0().videoHook && w.GH(e), { soundshareId: null, soundshareSession: null };
}
function nm() {
    let e = ez.x.DEFAULT,
        { videoToggleStateMap: t } = t0(e);
    for (let [e, n] of Object.entries(t)) n === ev.bb8.AUTO_PROBING && delete t[e];
    na({ videoToggleStateMap: t }, e, !1);
}
function ng(e) {
    let t = t0(),
        n = e7.getAudioSubsystem(),
        r = e7.getAudioLayer(),
        s = nd(ts, t.inputDeviceId),
        a = ts[s]?.name,
        o = (0, ey.A)(t.noiseCancellation, i.getSystemMicrophoneMode());
    eC.default.track(ev.HAw.VOICE_PROCESSING, {
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
function nA() {
    let e = t0(),
        t = tF.size > 0,
        n = e.inputDeviceId,
        i = eF.A.hasEchoCancellation(n) || e.echoCancellation,
        r = eF.A.hasNoiseSuppression(n) || e.noiseSuppression,
        s = t8(eF.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        a = e.noiseCancellation;
    e7.setLoopback(t, {
        echoCancellation: i,
        echoCancellationPreEcho: !t,
        noiseSuppression: r,
        automaticGainControlConfig: s,
        noiseCancellation: a,
    });
}
async function nI() {
    if (!e7.supports(ez.O5.VAAPI) || window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let e = await window.DiscordNative.processUtils.getSystemInfo();
    (e.electronGPUInfo?.gpuDevice ?? []).some((e) => 4098 === e.vendorId) &&
        ((t$ = !0), (tz = e7.supports(ez.O5.GAMESCOPE_CAPTURE)));
}
async function nT() {
    try {
        await m.Ay.ensureModule("discord_krisp");
        let e = m.Ay.requireModule("discord_krisp");
        (tv = !0),
            (c = e.getSdkVersion?.()),
            (d = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (tO = e), i.emitChange();
            }),
            i.emitChange(),
            await m.Ay.ensureModule("discord_voice");
        let t = m.Ay.requireModule("discord_voice");
        t.setupKrispPath?.();
    } catch (t) {
        eq.warn(`Failed to load Krisp module: ${t.message}`), ex.A.captureException(t);
        let e = ez.CO.KRISP_INIT_ERROR;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? ez.CO.KRISP_INIT_ERROR : n;
        }
        (0, F.QW)({ type: F.iy.NOISE_CANCELLER_ERROR, underlyingError: t4(e) }),
            eC.default.track(ev.HAw.VOICE_PROCESSING, { noise_canceller_error: e });
    } finally {
        tC = !1;
    }
}
async function nS() {
    try {
        let e,
            t = "",
            n = !1,
            i = URL.parse(e2);
        if (null === i) return void eq.log("OpenH264 URL ", i, " is invalid");
        let r = i.pathname.split("/"),
            s = r[r.length - 1].replace(".bz2", "");
        try {
            let t = await m.Ay.downloadOpenH264(
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
            (eC.default.track(ev.HAw.VIDEO_OPENH264_DOWNLOADED, {
                success: e,
                fetched_from_network: n,
                error_message: t,
            }),
            e)
        ) {
            let e = await m.Ay.cleanupUnusedOpenH264Files([s]);
            eq.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        eq.error("OpenH264 download failed", e);
    }
}
function nN(e) {
    e === ez.rB.AUTOMATIC
        ? (na({ automaticAudioSubsystem: !0 }), ny())
        : (na({ automaticAudioSubsystem: !1 }), e7.setAudioSubsystem(e));
}
function ny() {
    e7.queueAudioSubsystem(ez.rB.EXPERIMENTAL);
}
function nC(e) {
    let { section: t } = e;
    return t === ev.nc_.VOICE && nl(), !1;
}
class nv extends v.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        let e;
        if (
            (tl.start(e0, () => {
                eq.error("Device enumeration timed out"), eC.default.track(ev.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
            }),
            e7.on(O.bg.Connection, (e) => {
                let t;
                nA(), t1(e), t3(e), nt(e);
                let n = t0();
                e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers),
                    e.setQoS(n.qos),
                    (0, E.isWindows)()
                        ? (e.setExperimentFlag(ez.fd.H265_HARDWARE_ONLY, !0),
                          (null != tx
                              ? tx
                              : "u" > typeof window
                                ? (tx = tQ().then((e) => ((tP = e), e)))
                                : Promise.resolve(!1)
                          ).then((t) => {
                              e.setExperimentFlag(ez.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                          }))
                        : (0, E.isMac)() && e.setExperimentFlag(ez.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                    (0, E.isLinux)() && n.openH264Enabled && e.setExperimentFlag(ez.fd.USE_LIBOPENH264_DECODER, !0),
                    (function (e) {
                        let { location: t, disable: n = !1 } = e;
                        return n ? eu.definition.defaultConfig : eu.getConfig({ location: t });
                    })({ location: "setupMediaEngine" }).enabled &&
                        e.setExperimentFlag(ez.fd.LOW_LATENCY_RATE_CONTROL, !0),
                    e.setExperimentFlag(ez.fd.RESET_DECODER_ON_ERRORS, !0),
                    e.setExperimentFlag(ez.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
                let { swallowVolumeOnlySpeakingEvents: r } = P.A.getConfig({ location: "MediaEngineStore" });
                if (
                    (r && e.setExperimentFlag(ez.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === ez.x.STREAM)
                ) {
                    let t = nh(ta);
                    e.setSoundshareDiscardRearChannels(t);
                }
                if ((0, E.isWindows)())
                    e.setExperimentFlag(ez.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(ez.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(ez.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                else if ((0, E.isMac)())
                    e.setExperimentFlag(ez.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(ez.fd.SIGNAL_AV1_HARDWARE_DECODE, !0),
                        e.setExperimentFlag(
                            ez.fd.H265_DISABLE_ENCODE,
                            !(
                                window?.DiscordNative?.os.arch === "arm64" &&
                                C().satisfies(window?.DiscordNative?.os.release, ez.Dk)
                            ),
                        );
                else if ((0, E.isLinux)()) e.setExperimentFlag(ez.fd.SIGNAL_AV1_DECODE, !0);
                else if ((0, E.isIOS)())
                    e.setExperimentFlag(ez.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(ez.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                else if ((0, E.isAndroid)() && !1) {
                    let { enabled: t } = $.getConfig({ location: "MediaEngineStore" });
                    t &&
                        (e.setExperimentFlag(ez.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(ez.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
                }
                if ((0, E.isWeb)()) {
                    let { enabled: t } = X.getConfig({ location: "MediaEngineStore" });
                    e.setExperimentFlag(ez.fd.BROWSER_HEVC, t);
                }
                for (let r of ((0, E.isWindows)() &&
                    tB?.startsWith("AMD") &&
                    eA("MediaEngineStore").enabled &&
                    e.setExperimentFlag(ez.fd.WMF_GPU_ENCODE, !0),
                (0, E.isWindows)() &&
                    tB?.startsWith("Intel") &&
                    eI.getConfig({ location: "MediaEngineStore" }).enabled &&
                    e.setExperimentFlag(ez.fd.WMF_GPU_ENCODE, !0),
                (0, E.isWindows)() &&
                    tB?.startsWith("Qualcomm") &&
                    eA("MediaEngineStore").enabled &&
                    e.setExperimentFlag(ez.fd.WMF_GPU_ENCODE, !0),
                e7.setHasFullbandPerformance(null === (t = (0, G.A)()) || t >= 31),
                e.setRemoteAudioHistory(1e3),
                (0, U.A)(i) && e.setClipsKeyFrameInterval(ez.X1),
                (n = t0(e.context)),
                e.setPostponeDecodeLevel(100),
                Object.keys(n.localMutes)))
                    r !== ek.default.getId() && e.setLocalMute(r, n.localMutes[r]);
                for (let t of Object.keys(n.localVolumes))
                    t !== ek.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
                for (let t of Object.keys(n.localPans)) {
                    let i = n.localPans[t];
                    e.setLocalPan(t, i.left, i.right);
                }
                for (let t of Object.keys(n.disabledLocalVideos)) e.setLocalVideoDisabled(t, n.disabledLocalVideos[t]);
                e.on(O.yq.Speaking, (t, n, i, r) => {
                    D.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: r });
                }),
                    e.context === ez.x.DEFAULT &&
                        ((tm = !1),
                        e.on(O.yq.SpeakingWhileMuted, () => {
                            let e = !tm;
                            (tm = !0),
                                e && i.emitChange(),
                                tg.start(eJ, () => {
                                    (tm = !1), i.emitChange();
                                });
                        })),
                    e.on(O.yq.DesktopSourceEnd, (t, n) => {
                        D.h.dispatch({
                            type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                            settings: { context: e.context },
                            endReason: t,
                            errorCode: n,
                        });
                    }),
                    e.on(O.yq.InteractionRequired, (e) => {
                        D.h.dispatch({ type: "MEDIA_ENGINE_INTERACTION_REQUIRED", required: e });
                    }),
                    e.on(O.yq.VideoHookInitialize, (e, t, n, i, r, a) => {
                        s?.desktopSource != null &&
                            eC.default.track(ev.HAw.VIDEOHOOK_INITIALIZED, {
                                backend: e,
                                format: t,
                                framebuffer_format: n,
                                sample_count: i,
                                success: r,
                                reinitialization: a,
                                ...(0, j.A)(s?.desktopSource),
                            });
                    }),
                    e.on(O.yq.NoiseCancellationError, t7),
                    e.on(O.yq.VoiceActivityDetectorError, t7),
                    e.on(O.yq.SdpError, (e, t, n, i) => {
                        eC.default.track(ev.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: i });
                    }),
                    e.on(O.yq.VideoState, (t) => {
                        D.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                    }),
                    e.setBitRate(eG.A.bitrate),
                    e.applyVideoQualityMode(ej.A.mode),
                    (0, E.isWindows)() &&
                        e7.supports(ez.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                        e7.setAsyncVideoInputDeviceInit(!0);
            }),
            e7.on(O.bg.DeviceChange, (e, t, n) => {
                tl.stop(),
                    D.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
            }),
            e7.on(O.bg.VolumeChange, (e, t) => {
                D.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
            }),
            e7.on(O.bg.DesktopSourceEnd, (e, t) => {
                D.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
            }),
            e7.on(O.bg.AudioPermission, (e) => {
                (tU = !0), D.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
            }),
            e7.on(O.bg.VideoPermission, (e) => {
                D.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
            }),
            e7.on(O.bg.WatchdogTimeout, async () => {
                let e;
                if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                    try {
                        await eM.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                    } catch (t) {
                        "number" == typeof t.status && (e = t.status);
                    }
                eq.warn(`Watchdog timeout, report submission status: ${e ?? 200}`);
                let t =
                    ep.getConfig({ location: "watchdog_timeout" }).enabled && null != L.A.processUtils.setCrashReason;
                try {
                    await eC.default.track(
                        ev.HAw.VOICE_WATCHDOG_TIMEOUT,
                        { minidump_submission_error: e, will_restart: t },
                        { flush: !0 },
                    );
                } catch (e) {
                    eq.error("Failed to flush voice watchdog timeout analytics event", e);
                }
                t &&
                    (eq.info("Relaunching app due to voice watchdog timeout"),
                    await L.A.processUtils.setCrashReason("voice-watchdog-timeout"),
                    R.w.set("discord_watchdog_restart_timestamp", Date.now().toString()),
                    L.A.app.relaunch());
            }),
            e7.on(O.bg.VideoInputInitialized, (e) => {
                eC.default.track(ev.HAw.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired
                        ? null
                        : Math.round(e.timeToFirstFrame * eP.A.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy,
                    media_session_id: eB.A.getMediaSessionId(),
                    rtc_connection_id: eB.A.getRTCConnectionId(),
                });
            }),
            e7.on(O.bg.AudioInputInitialized, (e) => {
                eC.default.track(ev.HAw.AUDIO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_initialized_ms: Math.round(e.timeToInitialized * eP.A.Millis.SECOND),
                    rtc_connection_id: eB.A.getRTCConnectionId(),
                });
            }),
            e7.on(O.bg.ClipsRecordingRestartNeeded, () => {
                D.h.dispatch({ type: "CLIPS_RESTART" });
            }),
            e7.on(O.bg.ClipsInitFailure, (e, t) => {
                D.h.wait(() => {
                    D.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t });
                });
            }),
            e7.on(O.bg.ClipsRecordingEnded, (e, t) => {
                a?.desktopSource?.id === e &&
                    (null != t && s?.desktopSource?.soundshareId !== t && w.c1(t), (a = null));
            }),
            e7.on(O.bg.NativeScreenSharePickerUpdate, (e, t) => {
                D.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
            }),
            e7.on(O.bg.NativeScreenSharePickerCancel, (e) => {
                D.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
            }),
            e7.on(O.bg.NativeScreenSharePickerError, (e) => {
                D.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
            }),
            e7.on(O.bg.AudioDeviceModuleError, (e, t, n) => {
                eC.default.track(ev.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
            }),
            e7.on(O.bg.VideoCodecError, (e) => {
                let t = "encode" === e.mode ? F.iy.VIDEO_ENCODE_ERROR : F.iy.VIDEO_DECODE_ERROR,
                    n = { videoCodec: e.codecStandard, errorMessage: e.message };
                (0, F.QW)(
                    t === F.iy.VIDEO_ENCODE_ERROR
                        ? { type: t, ...n, videoEncoder: e.implName }
                        : { type: t, ...n, videoDecoder: e.implName },
                );
            }),
            e7.on(O.bg.ConnectionStats, (e) => {
                D.h.dispatch({
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
            e7.on(O.bg.VoiceProcessingError, t7),
            e7.on(O.bg.VoiceQueueMetrics, (e) => {
                let t = nO(e);
                null !== t && eC.default.track(ev.HAw.VOICE_QUEUE_METRICS, t);
            }),
            e7.setOnVideoContainerResized((e, t, n) => {
                D.h.wait(() =>
                    D.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
                );
            }),
            nI(),
            o.reset(),
            (0, eb.w)().then((e) => {
                null != e && ((tB = e.gpu_brand), (tH = e.has_intel_hybrid_igpu));
            }),
            e7.on(O.bg.SystemMicrophoneModeChange, (e) => {
                (f = e), e7.eachConnection(nt), i.emitChange();
            }),
            null != (e = R.w.get("audio")) && (R.w.set(eZ, { [ez.x.DEFAULT]: e }), R.w.remove("audio")),
            (e8 = R.w.get(eZ) ?? {}),
            T().each(e8, (e) => {
                T().defaultsDeep(e, e6()),
                    null != e.modeOptions &&
                        "string" == typeof e.modeOptions.shortcut &&
                        (e.modeOptions.shortcut = (0, eU.OH)(e.modeOptions.shortcut)),
                    null != e.modeOptions &&
                        4 !== e.vadUseKrispSettingVersion &&
                        ((e.vadUseKrispSettingVersion = 4), (e.modeOptions.vadUseKrisp = !0)),
                    e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                    e.vadThrehsoldMigrated ||
                        ((e.vadThrehsoldMigrated = !0),
                        e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = -60)),
                    e7.supports(ez.O5.SIDECHAIN_COMPRESSION) &&
                        e.sidechainCompressionSettingVersion < 1 &&
                        ((e.sidechainCompressionSettingVersion = 1), (e.sidechainCompression = !0)),
                    (0, E.isWeb)()
                        ? 1 !== e.ncUseKrispjsSettingVersion &&
                          ((e.ncUseKrispjsSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                        : 1 !== e.ncUseKrispSettingVersion &&
                          ((e.ncUseKrispSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0)),
                    null == e.audioMixerSettings &&
                        (e.audioMixerSettings = {
                            enabled: !1,
                            mode: "line",
                            spatialBlend: 1,
                            distance: 3,
                            roomSize: 25,
                            spread: 4,
                            arcAngle: 180,
                            gridColumns: 3,
                            gridSpacing: 1.5,
                            buckets: 10,
                            listenerHeight: 0.15,
                        });
            }),
            no(),
            ((0, E.isWindows)() || (0, E.isLinux)() || (0, E.isMac)()) && !__OVERLAY__ && !tC && !tv
                ? ((tC = !0), nT())
                : (0, E.isWeb)() && e7.supports(ez.O5.NOISE_CANCELLATION)
                  ? ((tv = !0), i.emitChange())
                  : (0, E.isWeb)() && na({ noiseCancellation: !1 }),
            (0, E.isLinux)() && nS(),
            nm(),
            (0, E.isDesktop)() && E.isPlatformEmbedded && !tq)
        ) {
            tq = !0;
            let e = async () => {
                let t = await new Promise((e) => {
                    m.Ay.pollQueueMetrics((t) => {
                        e(t);
                    });
                });
                t.periodMs = ez.tl;
                let n = nO(t);
                null !== n && eC.default.track(ev.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, ez.tl);
            };
            setTimeout(e, ez.tl);
        }
        (0, E.isWindows)() &&
            E.isPlatformEmbedded &&
            null === tr &&
            e7
                .getCodecSurvey()
                .then((e) => {
                    try {
                        let t = JSON.parse(e);
                        if (null == t || null == t.available_video_decoders)
                            throw Error("decoder survey is not available");
                        tr = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                    } catch (e) {
                        eq.error("Failed to parse codec survey", e), (tr = !1);
                    }
                })
                .catch((e) => {
                    eq.error("Failed to get codec survey", e), (tr = !1);
                })
                .finally(() => {
                    D.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
                }),
            (0, E.isAndroid)(),
            (tV = {
                [ez.O5.VIDEO]: e7.supports(ez.O5.VIDEO),
                [ez.O5.DESKTOP_CAPTURE]: e7.supports(ez.O5.DESKTOP_CAPTURE),
                [ez.O5.HYBRID_VIDEO]: e7.supports(ez.O5.HYBRID_VIDEO),
            }),
            this.waitFor(ek.default, eG.A, eF.A, eV.A, x.A, V.A, eB.A, H.Ay, eL.A, eH.default, ej.A);
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
        return e7.supports(ez.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return tv || !1;
    }
    isNoiseCancellationError() {
        return tD;
    }
    isAutomaticGainControlSupported() {
        return e7.supports(ez.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !ns() && (e7.supports(ez.O5.LEGACY_AUDIO_SUBSYSTEM) || e7.supports(ez.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return e7.supports(ez.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === e7.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return tv || !1;
    }
    isAecDumpSupported() {
        return e7.supports(ez.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return e7.supports(ez.O5.VIDEO) && e7.supports(ez.O5.SIMULCAST);
    }
    getAecDump() {
        return t0().aecDumpEnabled;
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
        return d ?? 100;
    }
    getKrispEnableStats() {
        return tR;
    }
    isEnabled() {
        return te;
    }
    isMute() {
        return this.isSelfMute() || tu;
    }
    isDeaf() {
        return this.isSelfDeaf() || t_;
    }
    getAudioMixerSettings() {
        return t0().audioMixerSettings;
    }
    hasContext(e) {
        return null != e8[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ez.x.DEFAULT;
        return e === ez.x.DEFAULT && tc;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ez.x.DEFAULT;
        return (
            !this.isEnabled() ||
            t0(e).mute ||
            !eS.A.didHavePermission(eY.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === ez.x.DEFAULT && td)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tE;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tE = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ez.x.DEFAULT,
            t = tY && "voice_isolation" !== this.getSystemMicrophoneMode() && t0(e).mode === ev.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (eF.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return tj;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ez.x.DEFAULT;
        return !this.isSupported() || t0(e).deaf;
    }
    isVideoEnabled() {
        return tf && tI;
    }
    isVideoAvailable() {
        return Object.values(to).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return tI;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ez.x.STREAM;
        return tn === e && null != s;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ez.x.STREAM;
        return tn === e && null != s && s.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ez.x.DEFAULT;
        return e !== ek.default.getId() && (t0(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return e7.supports(ez.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ez.x.DEFAULT;
        return t0(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ez.x.DEFAULT;
        return t0(t).videoToggleStateMap[e] ?? ev.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ez.x.DEFAULT;
        return t === ez.x.DEFAULT && tk.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ez.x.DEFAULT;
        return e === ez.x.DEFAULT && tk.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tL;
    }
    isNativeAudioPermissionReady() {
        return tU;
    }
    getGoLiveSource() {
        return s;
    }
    getGoLiveContext() {
        return tn;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return ti;
    }
    isH264MfDecodeAvailable() {
        return tr;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ez.x.DEFAULT,
            n = t0(t).localPans[e];
        return null != n ? n : eX;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ez.x.DEFAULT,
            n = t === ez.x.STREAM ? ez.Cn : ez.Hz,
            i = t0(t).localVolumes[e];
        return null != i ? i : n;
    }
    getInputVolume() {
        return t0().inputVolume;
    }
    getOutputVolume() {
        return t0().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ez.x.DEFAULT;
        return t0(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ez.x.DEFAULT;
        return t0(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            T().each(e8, (t, n) => {
                let {
                    mode: i,
                    modeOptions: { shortcut: r },
                } = t;
                i === ev.TBI.PUSH_TO_TALK && e9.has(n) && (e[n] = r);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nd(ts, t0().inputDeviceId);
    }
    getOutputDeviceId() {
        return nd(ta, t0().outputDeviceId);
    }
    getVideoDeviceId() {
        return nd(to, t0().videoDeviceId);
    }
    getInputDevices() {
        return ts;
    }
    getOutputDevices() {
        return ta;
    }
    getVideoDevices() {
        return to;
    }
    getEchoCancellation() {
        let e = t0();
        return eF.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return e7.supports(ez.O5.SIDECHAIN_COMPRESSION) && t0().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return t0().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return t0().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tP && tP;
    }
    getOpenH264Enabled() {
        return (0, E.isLinux)() && t0().openH264Enabled;
    }
    getLoopback() {
        return tF.size > 0;
    }
    getLoopbackReasons() {
        return tF;
    }
    getNoiseSuppression() {
        let e = t0();
        return eF.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = t0();
        return eF.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return t0().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return t0().noiseCancellation;
    }
    getHardwareEncoding() {
        return !0;
    }
    getEnableSilenceWarning() {
        return t0().silenceWarning;
    }
    getDebugLogging() {
        return e7.getDebugLogging();
    }
    getQoS() {
        return t0().qos;
    }
    getAttenuation() {
        return t0().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return t0().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return t0().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return nr() && t0().automaticAudioSubsystem ? ez.rB.AUTOMATIC : e7.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return e7.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return t0().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eK.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ez.x.DEFAULT;
        return t0(e);
    }
    getState() {
        return {
            settingsByContext: e8,
            inputDevices: ts,
            outputDevices: ta,
            appSupported: tV,
            krispModuleLoaded: tv,
            krispVersion: c,
            krispSuppressionLevel: d,
            goLiveSource: s,
            goLiveContext: tn,
        };
    }
    getInputDetectedThisConnection() {
        return tT;
    }
    getInputDetected() {
        return o.inputDetected;
    }
    getLastInputDetectedUpdateTime() {
        return o.lastUpdateTime;
    }
    getNoInputDetectedNotice() {
        return tS;
    }
    getInputDeviceOSMuted() {
        return l;
    }
    getInputDeviceOSVolume() {
        return u;
    }
    getPacketDelay() {
        return E.isPlatformEmbedded || this.getMode() !== ev.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        e7.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return tt;
    }
    getVideoHook() {
        return t0().videoHook;
    }
    supportsVideoHook() {
        return e7.supports(ez.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = t0().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return e7.supports(ez.O5.EXPERIMENTAL_SOUNDSHARE) && C().satisfies(L.A?.os.release, es.$x);
    }
    supportsHookSoundshare() {
        return (0, E.isWindows)() && e7.supports(ez.O5.SOUNDSHARE) && C().satisfies(L.A?.os.release, es.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = t0().useSystemScreensharePicker,
            n = (0, E.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return e7.supports(ez.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return t$;
    }
    getVideoEncoderExperiments(e, t) {
        let n = ["unk"];
        if (
            (n.push("nvNewPresets"),
            e === ez.x.STREAM ? n.push("nvRelaxRc=250") : n.push("nvRelaxRc=75"),
            this.getUseVaapiEncoder() && n.push("vaapi"),
            e === ez.x.STREAM && "streamer" === t && (0, E.isWindows)())
        ) {
            n.push("useCaptureDeviceForEncode");
            let { overrideDeviceReuse: e } = ef.getConfig({ location: "handleReady" });
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
        return tz;
    }
    getSpeakingWhileMuted() {
        return tm;
    }
    getKrispModelOverride() {
        return _;
    }
    getKrispModels() {
        return tO;
    }
    getKrispVadActivationThreshold() {
        return t0().modeOptions.vadKrispActivationThreshold ?? 0.5;
    }
    hasActiveCallKitCall() {
        return tK;
    }
    setHasActiveCallKitCall(e) {
        tK = e;
    }
    supportsScreenSoundshare() {
        return (0, E.isMac)()
            ? e7.supports(ez.O5.SOUNDSHARE) && C().satisfies(L.A?.os.release, es.P$) && ni()
            : (0, E.isWindows)()
              ? e7.supports(ez.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, E.isLinux)() && e7.supports(ez.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, E.isWindows)()) {
            if (this.getBypassSystemInputProcessing()) return;
            return tM[this.getInputDeviceId()]?.active?.find((e) => "deep_noise_suppression" === e);
        }
        if ((0, E.isMac)() || (0, E.isIOS)()) return f;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ez.x.DEFAULT,
            t = this.supports(ez.O5.VIDEO)
                ? [{ rid: "100", type: e === ez.x.DEFAULT ? ez.mI.VIDEO : ez.mI.SCREEN, quality: ez.Y4 }]
                : [];
        return (
            this.isSimulcastSupported() &&
                e === ez.x.DEFAULT &&
                t.push({ rid: "50", type: ez.mI.VIDEO, quality: ez.Cl }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: (0, E.isWeb)() };
        return e7.fetchAsyncResources(e);
    }
    startDavePreload() {
        !tw &&
            ((tw = !0),
            (0, E.isWeb)() &&
                e7.fetchAsyncResources({ fetchDave: !0 }).catch((e) => {
                    eq.warn("DAVE preload failed:", e), ex.A.captureException(e);
                }));
    }
    getSupportedSecureFramesProtocolVersion() {
        return e7.getSupportedSecureFramesProtocolVersion();
    }
    hasClipsSource() {
        return null != a;
    }
    getGpuBrand() {
        return tB;
    }
}
function nO(e) {
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
(i = new nv(D.h, {
    VOICE_CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n, currentVoiceChannelId: i, video: r } = e;
        if ((i !== n && t6(r, null), null != t || null == n)) {
            ty = !1;
            return;
        }
        if (ty) return;
        ty = !0;
        let s = t0();
        (s.mute || s.deaf) && (na({ deaf: !1, mute: !1 }), e7.eachConnection(t3));
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (r === t.sessionId) {
                (tu = t.mute || t.suppress), (t_ = t.deaf), e7.eachConnection(t3);
                let e = null != t.guildId && null != t.channelId && null != tb && tb !== t.channelId,
                    n = !ty && null == t.channelId;
                return t6(!e && !n && tf), (tb = t.channelId), !0;
            }
            return __OVERLAY__ || t.userId !== ek.default.getId() || null != eB.A.getChannelId() || t6(!1, null), e;
        }, !1);
    },
    CONNECTION_OPEN: function (e) {
        (r = e.sessionId), (tu = !1), (t_ = !1);
        let t = t0();
        nr() && (ns() ? nN(ez.rB.AUTOMATIC) : t.automaticAudioSubsystem && ny()),
            e7.supports(ez.O5.OFFLOAD_ADM_CONTROLS) && e7.setOffloadAdmControls(!0),
            (0, E.isIOS)() &&
                en.getConfig({ location: "handleConnectionOpen" }).enabled &&
                e7.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
            n_(t.inputDeviceId),
            np();
    },
    CONNECTION_CLOSED: function () {
        r = null;
    },
    POST_CONNECTION_OPEN: function () {
        return (0, E.isWeb)() && i.startDavePreload(), !1;
    },
    RTC_CONNECTION_STATE: function (e) {
        switch (e.state) {
            case ev.S7L.CONNECTING:
                nl();
                break;
            case ev.S7L.RTC_CONNECTING:
                (tS = !1), (l = void 0), (u = void 0), (tT = !1), (tY = !1), tW.stop(), tN.stop(), o.reset();
                break;
            case ev.S7L.RTC_CONNECTED:
                t6();
                break;
            case ev.S7L.DISCONNECTED:
                (tZ = {}),
                    (function () {
                        if (0 === tk.size) return;
                        let e = ez.x.DEFAULT,
                            { disabledLocalVideos: t } = t0(e);
                        tk.forEach((n) => {
                            A()(t[n], "If you are auto-disabled, then you are also disabled."),
                                delete t[n],
                                e7.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
                        }),
                            tk.clear(),
                            na({ disabledLocalVideos: t }, e, !1);
                    })(),
                    nm();
        }
    },
    AUDIO_SET_TEMPORARY_SELF_MUTE: function (e) {
        let { mute: t } = e;
        (tc = t), e7.eachConnection(t3);
    },
    AUDIO_TOGGLE_SELF_MUTE: function (e) {
        let { context: t, playSoundEffect: n } = e,
            { mute: i, deaf: r } = t0(t);
        if (t === ez.x.DEFAULT && (eS.A.requestPermission(eY.iL.AUDIO), td)) return !1;
        (i = !r && !i) || (r = !1), n || (tE = !0), na({ mute: i, deaf: r }, t), e7.eachConnection(t3);
    },
    AUDIO_SET_SELF_MUTE: function (e) {
        let { context: t, mute: n, playSoundEffect: i } = e;
        na({ mute: n }, t), i || (tE = !0), e7.eachConnection(t3);
    },
    AUDIO_TOGGLE_SELF_DEAF: function (e) {
        let { context: t } = e;
        na({ deaf: !t0(t).deaf }, t), e7.eachConnection(t3);
    },
    AUDIO_TOGGLE_LOCAL_MUTE: function (e) {
        let { context: t, userId: n } = e;
        if (n === ek.default.getId()) return;
        let { localMutes: i } = t0(t);
        i[n] ? delete i[n] : (i[n] = !0),
            na({ localMutes: i }, t),
            e7.eachConnection((e) => e.setLocalMute(n, i[n] || !1), t);
    },
    AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
        let { context: t, userId: n, videoToggleState: i, persist: r, isAutomatic: s } = e;
        A()(!(r && s), "These are not allowed to both be true.");
        let a = i === ev.bb8.DISABLED,
            { disabledLocalVideos: o } = t0(t),
            l = o[n] ?? !1,
            u = tk.has(n),
            c = i === ev.bb8.AUTO_ENABLED || i === ev.bb8.MANUAL_ENABLED;
        eq.info(`disableVideo=${a} currentlyDisabled=${l} currentlyAutoDisabled=${u}, isVideoShown=${c}`),
            A()(!(u && !l), "If you are auto-disabled, then you are also disabled.");
        let d = a !== l,
            _ = t === ez.x.DEFAULT,
            f = s && d && _,
            h = r && d && _;
        eq.info(`changed=${d} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${f} isManualToggleByUser=${h}`);
        let { videoToggleStateMap: p } = t0(t);
        if (
            (p[n] === ev.bb8.AUTO_PROBING &&
                i === ev.bb8.AUTO_ENABLED &&
                (0, eT.A)(n, a ? ez.Al.AUTO_DISABLE : ez.Al.AUTO_ENABLE, c),
            (p[n] = i),
            na({ videoToggleStateMap: p }, t, r),
            i === ev.bb8.AUTO_PROBING
                ? eB.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
                : eB.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
            tG ||
                (eq.info(`isAutoDisableAllowed=${tG} - disabling VideoHealthManager`),
                eB.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
            f)
        ) {
            if ((!a && !u) || (a && !tG)) return;
            (0, eT.A)(n, a ? ez.Al.AUTO_DISABLE : ez.Al.AUTO_ENABLE, c), a ? tk.add(n) : tk.delete(n);
        } else
            h &&
                (u && !a
                    ? (eq.info("disallowing auto-disable for this session because of manual override by user"),
                      (tG = !1),
                      eB.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                      (0, eT.A)(n, ez.Al.MANUAL_REENABLE, c))
                    : (0, eT.A)(n, a ? ez.Al.MANUAL_DISABLE : ez.Al.MANUAL_ENABLE, c));
        _ && !a && tk.delete(n),
            a ? (o[n] = !0) : delete o[n],
            na({ disabledLocalVideos: o }, t, r),
            e7.eachConnection((e) => e.setLocalVideoDisabled(n, o[n] ?? !1), t);
    },
    AUDIO_SET_LOCAL_VOLUME: function (e) {
        let { context: t, userId: n, volume: i } = e;
        if (n === ek.default.getId()) return;
        let r = t === ez.x.STREAM ? ez.Cn : ez.Hz,
            { localVolumes: s } = t0(t);
        i === r ? delete s[n] : (s[n] = i),
            na({ localVolumes: s }, t),
            e7.eachConnection((e) => e.setLocalVolume(n, i), t);
    },
    AUDIO_SET_AUDIO_MIXER_SETTINGS: function (e) {
        let { context: t, settings: n } = e;
        na({ audioMixerSettings: n }, t), e7.setAudioMixerOptions(n);
    },
    AUDIO_SET_LOCAL_PAN: function (e) {
        let { context: t, userId: n, left: i, right: r } = e,
            { localPans: s } = t0(t);
        (s[n] = { left: i, right: r }), na({ localPans: s }, t), e7.eachConnection((e) => e.setLocalPan(n, i, r), t);
    },
    AUDIO_SET_MODE: function (e) {
        let { context: t, mode: n, options: i } = e;
        na({ mode: n, modeOptions: { ...i, updatedAt: Date.now() } }, t), e7.eachConnection(t1);
    },
    AUDIO_SET_INPUT_VOLUME: function (e) {
        let { volume: t } = e;
        na({ inputVolume: t2(t) }), e7.setInputVolume(t);
    },
    AUDIO_SET_OUTPUT_VOLUME: function (e) {
        let { volume: t } = e;
        na({ outputVolume: t }), e7.setOutputVolume(t);
    },
    AUDIO_SET_INPUT_DEVICE: function (e) {
        let { id: t } = e;
        (t = nd(ts, t)),
            (ti = performance.now()),
            na({ inputDeviceId: t }),
            nf(t),
            e7.eachConnection(nt),
            (l = void 0),
            (u = void 0),
            tW.stop(),
            (tY = !1);
        let { resetSilenceWarningOnDeviceChange: n } = ed.A.getConfig({
            location: "MediaEngineStore.handleSetInputDevice",
        });
        n && ((tT = !1), o.reset());
    },
    AUDIO_SET_OUTPUT_DEVICE: function (e) {
        let { id: t } = e;
        na({ outputDeviceId: (t = nd(ta, t)) }), e7.setAudioOutputDevice(t);
    },
    AUDIO_SET_ACTIVE_INPUT_PROFILE: function (e) {
        let { inputProfile: t } = e;
        na({ activeInputProfile: t });
        let n = t0();
        e7.eachConnection((e) => {
            t1(e), nt(e);
        }),
            e7.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
            nA();
    },
    AUDIO_SET_ECHO_CANCELLATION: function (e) {
        let t = na({ echoCancellation: e.enabled });
        e7.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nA(), ng(e.location);
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION: function (e) {
        let t;
        (t = na({ sidechainCompression: e.enabled })), e7.setSidechainCompression(t.sidechainCompression);
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function (e) {
        let t = na({ sidechainCompressionStrength: e.strength });
        e7.setSidechainCompressionStrength(t.sidechainCompressionStrength);
    },
    AUDIO_SET_LOOPBACK: function (e) {
        let { enabled: t, loopbackReason: n } = e;
        return t ? tF.add(n) : tF.delete(n), nA();
    },
    AUDIO_SET_NOISE_SUPPRESSION: function (e) {
        let t = na({ noiseSuppression: e.enabled });
        e7.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nA(), ng(e.location);
    },
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function (e) {
        let t = na({ automaticGainControl: e.enabled });
        e7.eachConnection((e) => t9(e, t.automaticGainControl)), nA(), ng(e.location);
    },
    AUDIO_SET_NOISE_CANCELLATION: function (e) {
        let t = na({ noiseCancellation: e.enabled });
        e7.eachConnection((e) => ne(e, t.noiseCancellation)), nA(), ng(e.location);
    },
    AUDIO_SET_KRISP_MODEL_OVERRIDE: function (e) {
        eN.A.setKrispModelOverride(e.model), (_ = e.model), nA();
    },
    AUDIO_SET_DISPLAY_SILENCE_WARNING: function (e) {
        na({ silenceWarning: e.enabled });
    },
    AUDIO_SET_DEBUG_LOGGING: function (e) {
        e7.setDebugLogging(e.enabled);
    },
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: function (e) {
        let { level: t } = e;
        (d = t), eN.A.setKrispSuppressionLevel(t);
    },
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: function (e) {
        (0, E.isWeb)() || ((tR = e.enabled), e7.setNoiseCancellationEnableStats?.(e.enabled));
    },
    MEDIA_ENGINE_SET_VIDEO_HOOK: function (e) {
        na({ videoHook: e.enabled });
    },
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function (e) {
        na({ experimentalSoundshare2: e.enabled });
    },
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: function (e) {
        let { enabled: t } = e;
        na({ useSystemScreensharePicker: t });
    },
    AUDIO_SET_ATTENUATION: function (e) {
        let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i } = e,
            r = na({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i });
        e7.eachConnection((e) =>
            e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers),
        );
    },
    AUDIO_SET_QOS: function (e) {
        let { enabled: t } = e;
        na({ qos: t }), e7.eachConnection((e) => e.setQoS(t));
    },
    MEDIA_ENGINE_DEVICES: function (e) {
        let { inputDevices: t, outputDevices: n, videoDevices: i } = e,
            r = ts;
        if (((ts = nc(t, e$.intl.string(e$.t["/QIjDA"]))), !T().isEqual(ts, r))) {
            let e = t0();
            nf(nd(ts, e.inputDeviceId)), e7.eachConnection(nt);
        }
        !(function (e) {
            let t = ta;
            if (((ta = nc(e, e$.intl.string(e$.t.xlUg0v))), !T().isEqual(ta, t))) {
                let e = t0(),
                    n = nd(ta, e.outputDeviceId);
                e7.setAudioOutputDevice(n);
                let i = nh(t),
                    r = nh(ta);
                i !== r &&
                    e7.eachConnection((e) => {
                        e.context === ez.x.STREAM && e.setSoundshareDiscardRearChannels(r);
                    });
            }
        })(n);
        tI = i.length > 0;
        let s = to;
        if (((to = nc(i, e$.intl.string(e$.t.WKWARY))), tf && !T().isEqual(to, s))) {
            let e = void 0 !== to[th],
                t = th === ez.dx && s[ez.dx]?.disabled,
                n = "Firefox" === N().name && "" === th && s[th]?.name === "Default" && !s[th]?.disabled;
            t6(e || t || n);
        }
    },
    AUDIO_VOLUME_CHANGE: function (e) {
        let { inputVolume: t, outputVolume: n } = e;
        na({ inputVolume: t2(t), outputVolume: n });
    },
    AUDIO_RESET: function () {
        R.w.remove(eZ), location.reload();
    },
    AUDIO_INPUT_DETECTED: function (e) {
        let { inputDetected: t } = e;
        if (null == t) return !1;
        if (((tS = !0 !== tT && !t), t)) (tT = !0), (tY = !1), tW.stop(), tN.stop();
        else if (t0().mode === ev.TBI.VOICE_ACTIVITY && tT) {
            let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = ed.A.getConfig({
                location: "MediaEngineStore.handleInputDetected",
            });
            e &&
                tW.start(e1, () => {
                    eC.default.track(ev.HAw.HARDWARE_MUTE_GUESSED, {
                        input_device_name: ts[nd(ts, t0().inputDeviceId)]?.name,
                        rtc_connection_id: eB.A.getRTCConnectionId(),
                    }),
                        (tY = !0),
                        i.emitChange();
                }),
                null != t &&
                    tN.start(t * eP.A.Millis.MINUTE, () => {
                        (tT = !1), o.reset();
                    });
        }
    },
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: function (e) {
        let { osVolume: t, osMuted: n } = e;
        (u = t), (l = n);
    },
    AUDIO_SET_SUBSYSTEM: function (e) {
        nN(e.subsystem);
    },
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: function (e) {
        let t = e.bypassEnabled;
        na({ bypassSystemInputProcessing: t }), e7.setAudioInputBypassSystemProcessing(t), ng(e.location);
    },
    MEDIA_ENGINE_SET_AUDIO_ENABLED: function (e) {
        (te = e.enabled), e.unmute && na({ mute: !1, deaf: !1 }), e7.eachConnection(t3);
    },
    MEDIA_ENGINE_SET_VIDEO_ENABLED: function (e) {
        let { enabled: t } = e;
        eS.A.requestPermission(eY.iL.CAMERA), t6(t);
    },
    MEDIA_ENGINE_PERMISSION: function (e) {
        let { kind: t, granted: n } = e;
        if (!n)
            switch (t) {
                case "audio":
                    (te = !1), e7.eachConnection(t3);
                    break;
                case "video":
                    t6(!1);
            }
    },
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
        let { settings: t } = e;
        if (t?.desktopSettings != null) {
            let e = null,
                n = null,
                { sourceId: i, sound: r } = t.desktopSettings,
                a = t.context ?? ez.x.DEFAULT,
                o = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
                l = eM.A.getPidFromDesktopSource(i);
            E.isPlatformEmbedded && ({ soundshareId: e, soundshareSession: n } = nE(l, r)),
                a !== tn && (null != s && e7.setGoLiveSource(null, tn), (tn = a)),
                t6(a === ez.x.STREAM && tf, {
                    desktopSource: { id: i, sourcePid: l, soundshareId: e, soundshareSession: n },
                    quality: { resolution: o.resolution, frameRate: o.frameRate },
                });
        } else if (t?.cameraSettings != null) {
            let e = t.context ?? ez.x.DEFAULT,
                { videoDeviceGuid: n, audioDeviceGuid: i } = t.cameraSettings,
                r = e === ez.x.STREAM && tf,
                s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
            t6(r, {
                cameraSource: { videoDeviceGuid: n, audioDeviceGuid: i },
                quality: { resolution: s.resolution, frameRate: s.frameRate },
            });
        } else t6(tf, null);
    },
    MEDIA_ENGINE_SET_VIDEO_DEVICE: function (e) {
        let { id: t } = e;
        na({ videoDeviceId: (t = nd(to, t)) }), t6();
    },
    MEDIA_ENGINE_INTERACTION_REQUIRED: function (e) {
        return tt !== e.required && ((tt = e.required), e.required || e7.interact(), !0);
    },
    USER_SETTINGS_MODAL_INIT: nC,
    USER_SETTINGS_MODAL_SET_SECTION: nC,
    CERTIFIED_DEVICES_SET: function () {
        return e7.eachConnection(nt), !1;
    },
    RPC_APP_CONNECTED: function (e) {
        let { application: t } = e;
        e9.add(t.id);
    },
    RPC_APP_DISCONNECTED: function (e) {
        let { application: t } = e;
        e9.delete(t.id);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { mediaEngineState: t } = e;
        (e8 = t.settingsByContext),
            (ts = t.inputDevices),
            (ta = t.outputDevices),
            (tV = t.appSupported),
            (tv = t.krispModuleLoaded),
            (c = t.krispVersion),
            (tn = t.goLiveContext);
    },
    APP_STATE_UPDATE: function (e) {
        let { state: t } = e,
            n = B.A.isEnabled();
        if (t === ev.g6G.BACKGROUND && tf && !n) (tA = !0), t6(!1);
        else {
            if (t !== ev.g6G.ACTIVE || !tA) return !1;
            (tA = !1), t6(!0);
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
        (td = n), e7.eachConnection(t3);
    },
    SET_NATIVE_PERMISSION: function (e) {
        let { state: t, permissionType: n } = e,
            i = t === eY.hL.ACCEPTED;
        switch (n) {
            case eY.iL.AUDIO:
                (tU = !0), e7.eachConnection(t3);
                break;
            case eY.iL.CAMERA:
                !i && tf && t6(!1);
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
            n = na({ aecDumpEnabled: t });
        e7.setAecDump(n.aecDumpEnabled);
    },
    MEDIA_ENGINE_SET_OPENH264_ENABLED: function (e) {
        let { enabled: t } = e;
        na({ openH264Enabled: t }), m.Ay?.setOpenH264Enabled?.(t);
    },
    MEDIA_ENGINE_RESET_SETTINGS: function (e) {
        let { overrides: t } = e;
        if (__OVERLAY__) return !1;
        (e8 = Object.values(ez.x).reduce((e, n) => {
            let i = e6();
            return (e[n] = T().merge(i, t[n])), e;
        }, {})),
            R.w.set(eZ, e8),
            no();
    },
    CHANNEL_DELETE: function () {
        if ((!tf && null == s) || null != eB.A.getRTCConnectionId()) return !1;
        t6(!1, null);
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: function (e) {
        if (e.code === ez.CO.KRISP_CPU_OVERUSE) {
            (tZ.noiseCancellation = !1), (tZ.noiseSuppression = !0);
            let e = t0();
            return e7.eachConnection((t) => ne(t, e.noiseCancellation)), nA(), ng(), !0;
        }
        return !1;
    },
    MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR: function (e) {
        return (
            e.code === ez.CO.KRISP_VAD_CPU_OVERUSE &&
            ((tZ.modeOptions = { vadUseKrisp: !1 }), e7.eachConnection((e) => t1(e)), !0)
        );
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function () {
        return !!tD && ((tD = !1), !0);
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
        let { settings: t } = e;
        e7.applyMediaFilterSettings(t).finally(() => {
            (tL = !1), i.emitChange();
        });
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function () {
        tL = !0;
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function () {
        tL = !1;
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            local: n,
            wasSaved: i,
        } = e;
        if (t !== eW.oD.PRELOADED_USER_SETTINGS || n || null != i) return !1;
        np(!0);
    },
    CLIPS_INIT: function (e) {
        let { sourceId: t, applicationName: n, quality: r } = e;
        if (!(0, k.Ao)() || null == L.A) return !1;
        null != a &&
            (e7.setClipsSource(null),
            (0, E.isWindows)() &&
                (null != a.desktopSource.soundshareId
                    ? w.c1(a.desktopSource.soundshareId)
                    : null != a.desktopSource.sourcePid && t0().videoHook && w.c1(a.desktopSource.sourcePid)));
        let s = eM.A.getPidFromDesktopSource(t),
            { soundshareId: o, soundshareSession: l } = nE(s, !0);
        a = { desktopSource: { id: t, sourcePid: s, soundshareId: o, soundshareSession: l }, quality: r };
        let u = tX("MediaEngineStore clips"),
            c = t0().videoHook,
            d = !c || !Q.getConfig({ location: "handleClipsInit" }).enabled,
            _ = c && eh.getConfig({ location: "handleClipsInit" }).enabled;
        e7.setClipsSource({
            desktopDescription: {
                id: a.desktopSource.id,
                soundshareId: a.desktopSource.soundshareId,
                useVideoHook: c,
                useHookFramePacer: d,
                useGraphicsCapture: nn(),
                useCaptureDeviceForEncode: !1,
                useLoopback: i.getExperimentalSoundshare(),
                useQuartzCapturer: !0,
                allowScreenCaptureKit: ni(),
                videoHookStaleFrameTimeoutMs: 500,
                graphicsCaptureStaleFrameTimeoutMs: eQ,
                hdrCaptureMode: u,
                videoHookAllowDx12: _,
            },
            quality: r,
            applicationName: n,
            videoEncoderExperiments: i.getVideoEncoderExperiments(ez.x.STREAM, "streamer"),
        });
    },
    CLIPS_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        !1 === t.decoupledClipsEnabled && ((a = null), e7.setClipsSource(null));
    },
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function (e) {
        tj = e.enabled;
    },
    MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: function (e) {
        let { deviceId: t, active: n, available: i } = e;
        tM[t] = { active: n, available: i };
    },
})),
    (o = new eo(e7, i));
let nR = i;
