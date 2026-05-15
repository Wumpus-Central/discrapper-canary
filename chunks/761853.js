"use strict";
let i, r, s, a, o, l, u, c, d, _, f;
n.d(t, { Ay: () => nD }), n(323874), n(14289), n(35956), n(321073);
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
        name: "2026-05-av1-bitrate-tuning",
        kind: "user",
        defaultConfig: { bitrate: 35e5 },
        variations: { 1: { bitrate: 3e6 }, 2: { bitrate: 25e5 } },
    }),
    q = (0, Y.mj)({
        name: "2026-04-av1-decode-android",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    Z = { probeAudioEffects: !1 },
    X = (0, Y.mj)({
        name: "2026-03-audio-effects-probe",
        kind: "user",
        defaultConfig: Z,
        variations: { 1: { ...Z, probeAudioEffects: !0 } },
    }),
    Q = (0, Y.mj)({
        name: "2025-08-browser-hevc",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    J = (0, Y.mj)({
        name: "2026-05-disable-camera-simulcast",
        kind: "user",
        defaultConfig: { enableSimulcast: !0 },
        variations: { 1: { enableSimulcast: !1 } },
    }),
    ee = (0, Y.mj)({
        name: "2026-04-disable-hook-frame-pacer",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var et = n(240921);
let en = (0, et.Ay)({
        kind: "user",
        name: "2025-11-global-frame-pool-lock",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    ei = (0, Y.mj)({
        name: "2026-02-go-live-hdr",
        kind: "user",
        defaultConfig: { hdrCaptureMode: "never" },
        variations: { 1: { hdrCaptureMode: "always" }, 2: { hdrCaptureMode: "permittedDevicesOnly" } },
    }),
    er = (0, Y.mj)({
        name: "2026-03-ios-audio-interrupt-handling",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var es = n(574381),
    ea = n(941426),
    eo = n(325278);
let el = new ea.Vy("InputWatcher");
class eu {
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
        if ((0, es.uF)() && C().satisfies(L.A?.os.release, eo.PH))
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
                el.warn(`Failed to get device OS volume and/or mute state: ${e}`);
            }
    };
    handleSilence = (e) => {
        let t = !e;
        this.stateChangeTimeout.start(t ? 1500 : 5e3, async () => {
            el.info("Silence:", e),
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
let ec = (0, Y.mj)({
        name: "2026-03-linux-vulkan-capture",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    ed = (0, et.Ay)({
        kind: "user",
        name: "2025-10-low-latency-rate-control",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var e_ = n(140175);
(0, Y.mj)({
    name: "2026-02-mobile-volume-output-slider-removal",
    kind: "user",
    defaultConfig: { audioOutputPresent: !0, nonContextualStreamOutputPresent: !0, showTileVolumeIndicator: !1 },
    variations: { 1: { audioOutputPresent: !1, nonContextualStreamOutputPresent: !1, showTileVolumeIndicator: !0 } },
});
var ef = n(801644);
let eh = (0, et.Ay)({
        kind: "user",
        name: "2025-10-vad-before-processing",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    ep = (0, Y.mj)({
        name: "2026-03-video-capture-device-no-reuse",
        kind: "user",
        defaultConfig: { overrideDeviceReuse: !1 },
        variations: { 1: { overrideDeviceReuse: !0 } },
    }),
    eE = (0, Y.mj)({
        name: "2026-04-video-hook-dx12",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    em = (0, et.Ay)({
        kind: "user",
        name: "2026-02-voice-timeout-mitigations",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eg = (0, Y.mj)({
        name: "2026-02-wgc-dirty-regions-all",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eA = (0, Y.mj)({
        name: "2026-02-wgc-dirty-regions",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eI = (0, Y.mj)({
        name: "2025-12-wmf-gpu-encode",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function eT(e) {
    return eI.getConfig({ location: e });
}
let eS = (0, Y.mj)({
    name: "2026-01-wmf-gpu-encode-intel",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eN = n(75076),
    ey = n(91777),
    eC = n(559633),
    ev = n(205106),
    eO = n(174459),
    eR = n(652215);
let eb = new ea.Vy("AudioEffects");
async function eD(e, t, n) {
    if (!(0, es.uF)()) return Promise.reject(Error("Audio effects querying not supported on non-Windows platforms"));
    try {
        let i = await n.getDeviceAudioEffects(e);
        return (
            D.h.dispatch({ type: "MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS", deviceId: t, ...i }),
            eO.default.track(eR.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, {
                succeeded: !0,
                active_effects: i.active,
                available_effects: i.available,
            }),
            i
        );
    } catch (e) {
        eb.error("Failed to probe audio effects for device", e),
            eO.default.track(eR.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, { succeeded: !1 });
    }
}
var eL = n(967347),
    ew = n(879172),
    eM = n(617617),
    eP = n(499156),
    ex = n(353835),
    eU = n(927813),
    ek = n(38405),
    eG = n(350535),
    eF = n(495544),
    eV = n(131319),
    eB = n(347481),
    eH = n(734057),
    ej = n(763827),
    eY = n(287809),
    eW = n(117549),
    eK = n(765682),
    ez = n(355097),
    e$ = n(509381),
    eq = n(731854),
    eZ = n(375708);
let eX = new p.A("MediaEngineStore"),
    eQ = "MediaEngineStore",
    eJ = { left: 1, right: 1 },
    e0 = 5 * eU.A.Millis.SECOND,
    e1 = 2 * eU.A.Millis.SECOND,
    e2 = 30 * eU.A.Millis.SECOND,
    e3 = +eU.A.Millis.MINUTE,
    e6 = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2",
    e4 = 0;
function e5() {
    return {
        mode: eR.TBI.VOICE_ACTIVITY,
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
        inputVolume: eq.Hz,
        outputVolume: eq.Hz,
        inputDeviceId: eq.dx,
        outputDeviceId: eq.dx,
        videoDeviceId: eq.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: e9.supports(eq.O5.VIDEO_HOOK),
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
let e7 = {
        [e$.m.CUSTOM]: {},
        [e$.m.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [e$.m.STUDIO]: {
            mode: eR.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    e8 = { modeOptions: { vadUseKrisp: !1 }, noiseCancellation: !1, noiseSuppression: !0 },
    e9 = (0, O.hB)((0, O.WI)());
eX.enableNativeLogger(!0);
let te = {},
    tt = new Set([eq.x.DEFAULT]),
    tn = e9.supports(eq.O5.AUTO_ENABLE),
    ti = !1,
    tr = eq.x.STREAM,
    ts = performance.now(),
    ta = null,
    to = { [eq.dx]: nd("No Input Devices") },
    tl = { [eq.dx]: nd("No Output Devices") },
    tu = { [eq.dx]: nd("No Video Devices") },
    tc = new b.Ep(),
    td = !1,
    t_ = !1,
    tf = !1,
    th = !1,
    tp = !1,
    tE = eq.qe,
    tm = eq.qe,
    tg = !1,
    tA = !1,
    tI = new b.Ep(),
    tT = !1,
    tS = !1,
    tN = !1,
    ty = !1,
    tC = new b.Ep(),
    tv = !1,
    tO = !1,
    tR = !1,
    tb = [],
    tD = !1,
    tL = null,
    tw = !1,
    tM = !1,
    tP = !1,
    tx = {},
    tU = null,
    tk = null,
    tG = !1;
ey.A.hasPermission(eK.iL.AUDIO, { showAuthorizationError: !1 }),
    ey.A.hasPermission(eK.iL.CAMERA, { showAuthorizationError: !1 });
let tF = new Set(),
    tV = !1,
    tB = new Set(),
    tH = {},
    tj = null,
    tY = null,
    tW = !0,
    tK = !1,
    tz = new b.Ep(),
    t$ = !1,
    tq = !1,
    tZ = !1,
    tX = !1,
    tQ = {};
function tJ(e) {
    return (function (e) {
        let { location: t } = e;
        return ei.getConfig({ location: t });
    })({ location: e }).hdrCaptureMode;
}
async function t0() {
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
function t1() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq.x.DEFAULT,
        t = te[e];
    return null == t && ((t = e5()), (te[e] = t)), t;
}
function t2() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq.x.DEFAULT,
        t = t1(e),
        n = e7[t.activeInputProfile ?? e$.m.CUSTOM],
        i = tR ? tQ : e8,
        r = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}), ...(i.modeOptions ?? {}) };
    if (
        (null == r.vadDuringPreProcess &&
            (r.vadDuringPreProcess = (function (e) {
                let { location: t, disable: n = !1 } = e;
                return n ? eh.definition.defaultConfig : eh.getConfig({ location: t });
            })({ location: "getSettings" }).enabled),
        (null == r.vadKrispActivationThreshold && !0 === n.automaticGainControl) || !0 === t.automaticGainControl)
    ) {
        let e = z({ location: "getSettings" });
        null != e.vadKrispActivationThreshold && (r.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return { ...t, ...n, ...i, modeOptions: r };
}
function t3(e) {
    let t = t2(e.context),
        n = t.mode;
    e.context === eq.x.DEFAULT && (0, e_.N)(!1, !1);
    let { showPTTSpeakingIndicator: i } = eP.A.getConfig({ location: "setInputMode" }),
        r = i && n === eR.TBI.PUSH_TO_TALK;
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
function t6(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eq.Hz;
    return T().clamp(e, 0, t);
}
function t4(e) {
    let t = t2(e.context),
        n = !tn || t.mute || t.deaf;
    e.context === eq.x.DEFAULT
        ? (n = n || td || t_ || tf || !ey.A.didHavePermission(eK.iL.AUDIO))
        : e.context === eq.x.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eq.x.DEFAULT && M.A.updateNativeMute();
}
function t5() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tp,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
        n = s;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, E.isWindows)()
                ? w.c1(n.desktopSource.soundshareId)
                : null != n.desktopSource.sourcePid && t2().videoHook && w.c1(n.desktopSource.sourcePid),
            e9.setGoLiveSource(null, tr)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            e9.setGoLiveSource(null, tr),
        tp || e)
    ) {
        let t = t2().videoDeviceId;
        tp && t === eq.dx && tm === eq.dx && tE !== eq.qe ? (t = tE) : (tm = t),
            (tE = (tp = e) ? nf(tu, t) : eq.qe),
            e9.setVideoInputDevice(tE);
    }
    if (((s = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = tJ("MediaEngineStore go live"),
                r = t2().videoHook,
                s = nr(),
                a = s ? ((0, E.isWindows)() && C().satisfies(L.A?.os.release, eo.fG) ? eo.zl : eo.eg) : 0,
                o = !1;
            (0, E.isWindows)() &&
                a >= eo.zl &&
                (o =
                    !0 === tY
                        ? eA.getConfig({ location: "updateVideo" }).enabled
                        : eg.getConfig({ location: "updateVideo" }).enabled);
            let l = !r || !ee.getConfig({ location: "updateVideo" }).enabled,
                u = r && eE.getConfig({ location: "updateVideo" }).enabled;
            e9.setGoLiveSource(
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
                        allowScreenCaptureKit: ns(),
                        videoHookStaleFrameTimeoutMs: 500,
                        graphicsCaptureStaleFrameTimeoutMs: e0,
                        hdrCaptureMode: n,
                        enableGlobalFramePoolLock: (function (e) {
                            let { location: t, disable: n = !1 } = e;
                            return n ? en.definition.defaultConfig : en.getConfig({ location: t });
                        })({ location: "updateVideo" }).enabled,
                        useGraphicsCaptureDirtyRegions: o,
                        videoHookAllowDx12: u,
                    },
                    quality: e,
                },
                tr,
            );
        }
        null != t.cameraSource &&
            e9.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: t.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: t.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                tr,
            );
    }
}
function t7(e) {
    switch (e) {
        case eq.CO.KRISP_CPU_OVERUSE:
            return F.B6.KrispCpuOveruse;
        case eq.CO.KRISP_FAILED:
            return F.B6.KrispFailed;
        case eq.CO.KRISP_VAD_CPU_OVERUSE:
            return F.B6.KrispVadCpuOveruse;
        case eq.CO.KRISP_INIT_ERROR:
            return F.B6.KrispInitError;
        case eq.CO.KRISP_INIT_ERROR_NATIVE:
            return F.B6.KrispInitErrorNative;
        case eq.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED:
            return F.B6.KrispInitErrorSse4NotSupported;
        case eq.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED:
            return F.B6.KrispInitErrorAvx2NotSupported;
        case eq.CO.KRISP_INIT_ERROR_UNSIGNED:
            return F.B6.KrispInitErrorUnsigned;
        case eq.CO.KRISP_INIT_ERROR_GLOBAL_INIT:
            return F.B6.KrispInitErrorGlobalInit;
        case eq.CO.KRISP_INIT_ERROR_WEIGHT_8K:
            return F.B6.KrispInitErrorWeight8k;
        case eq.CO.KRISP_INIT_ERROR_WEIGHT_16K:
            return F.B6.KrispInitErrorWeight16k;
        case eq.CO.KRISP_INIT_ERROR_WEIGHT_32K:
            return F.B6.KrispInitErrorWeight32k;
        case eq.CO.KRISP_INIT_ERROR_WEIGHT_VAD:
            return F.B6.KrispInitErrorWeightVad;
        default:
            return;
    }
}
let t8 = new Set([
    eq.CO.KRISP_INIT_ERROR,
    eq.CO.KRISP_INIT_ERROR_NATIVE,
    eq.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED,
    eq.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED,
    eq.CO.KRISP_INIT_ERROR_UNSIGNED,
    eq.CO.KRISP_INIT_ERROR_GLOBAL_INIT,
    eq.CO.KRISP_INIT_ERROR_WEIGHT_8K,
    eq.CO.KRISP_INIT_ERROR_WEIGHT_16K,
    eq.CO.KRISP_INIT_ERROR_WEIGHT_32K,
    eq.CO.KRISP_INIT_ERROR_WEIGHT_VAD,
]);
function t9(e) {
    if (
        (eX.warn(`Voice processing error: ${e}`),
        (0, F.QW)({ type: F.iy.NOISE_CANCELLER_ERROR, underlyingError: t7(e) }),
        eO.default.track(eR.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
        t8.has(e))
    ) {
        tR = !1;
        return;
    }
    e === eq.CO.KRISP_VAD_CPU_OVERUSE
        ? D.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e })
        : ((tw = !0), D.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e }));
}
function ne(e) {
    let t = z({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function nt(e, t) {
    e.setAutomaticGainControl(ne(t));
}
function nn(e, t) {
    let n = (0, ev.A)(t, i.getSystemMicrophoneMode());
    n !== t && eX.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: r } = z({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(r);
}
function ni(e) {
    let t = t2(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eB.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eB.A.hasNoiseSuppression(n) || t.noiseSuppression),
        nt(e, eB.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        nn(e, t.noiseCancellation),
        (0, E.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function nr() {
    return (0, E.isWindows)() && C().satisfies(L.A?.os.release, eo.yg);
}
function ns() {
    return (0, E.isMac)() && e9.supports(eq.O5.SCREEN_CAPTURE_KIT) && C().satisfies(L.A?.os.release, eo.e);
}
function na() {
    return (
        (0, E.isWindows)() &&
        e9.supports(eq.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        e9.supports(eq.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function no() {
    return e9.supports(eq.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function nl(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eq.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = t1(t);
    return Object.assign(i, e), !__OVERLAY__ && n && R.w.set(eQ, te), i;
}
function nu() {
    let e = t2();
    np(e.inputDeviceId),
        e9.setAudioOutputDevice(e.outputDeviceId),
        t5(),
        e9.setInputVolume(e.inputVolume),
        e9.setOutputVolume(e.outputVolume),
        e9.setAecDump(e.aecDumpEnabled),
        e9.setSidechainCompression(e.sidechainCompression),
        e9.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        e9.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        (0, E.isLinux)() && m.Ay?.setOpenH264Enabled?.(e.openH264Enabled),
        e9.setAudioMixerOptions(e.audioMixerSettings);
}
function nc() {
    tn || e9.enable().then(() => D.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nd(e) {
    return { id: eq.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
}
function n_(e, t) {
    if (0 === e.length) {
        let e = nd(t);
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
function nf(e, t) {
    let n = e[t] ?? e[eq.dx] ?? T()(e).values().first();
    return null != n ? n.id : t;
}
function nh(e) {
    if (!(0, E.isWindows)() || !X.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects) return;
    let t = to[e];
    t?.guid != null && eD(t.guid, e, e9);
}
function np(e) {
    e9.setAudioInputDevice(e), nh(e);
}
function nE(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nm() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = eM.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let i = n === ez.W.USER ? eq.x.DEFAULT : eq.x.STREAM,
            r = i === eq.x.STREAM ? eq.Cn : eq.Hz,
            s = t[n] ?? {},
            { localMutes: a, localVolumes: o } = t2(i);
        for (let [e, t] of Object.entries(s))
            null == (0, ew.tM)(i, e) &&
                (t.muted ? (a[e] = !0) : delete a[e],
                t.volume !== r ? (o[e] = t.volume) : delete o[e],
                e9.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (e)
            for (let e of new Set([...Object.keys(a), ...Object.keys(o)]))
                null == s[e] &&
                    (delete a[e],
                    delete o[e],
                    e9.eachConnection((t) => {
                        t.setLocalVolume(e, r), t.setLocalMute(e, !1);
                    }, i));
        nl({ localMutes: a, localVolumes: o }, i);
    }
}
function ng(e, t) {
    if (t) {
        let { soundshareId: t, soundshareSession: s } = (function (e) {
            if (null == i)
                return (
                    eX.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
                    { soundshareId: null, soundshareSession: "" }
                );
            {
                let t = i.getExperimentalSoundshare() ? e : ex.A.getAudioPid(e),
                    n = "";
                return null != t && (n = ex.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n };
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
    return null != e && t2().videoHook && w.GH(e), { soundshareId: null, soundshareSession: null };
}
function nA() {
    let e = eq.x.DEFAULT,
        { videoToggleStateMap: t } = t2(e);
    for (let [e, n] of Object.entries(t)) n === eR.bb8.AUTO_PROBING && delete t[e];
    nl({ videoToggleStateMap: t }, e, !1);
}
function nI(e) {
    let t = t2(),
        n = e9.getAudioSubsystem(),
        r = e9.getAudioLayer(),
        s = nf(to, t.inputDeviceId),
        a = to[s]?.name,
        o = (0, ev.A)(t.noiseCancellation, i.getSystemMicrophoneMode());
    eO.default.track(eR.HAw.VOICE_PROCESSING, {
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
function nT() {
    let e = t2(),
        t = tB.size > 0,
        n = e.inputDeviceId,
        i = eB.A.hasEchoCancellation(n) || e.echoCancellation,
        r = eB.A.hasNoiseSuppression(n) || e.noiseSuppression,
        s = ne(eB.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        a = e.noiseCancellation;
    e9.setLoopback(t, {
        echoCancellation: i,
        echoCancellationPreEcho: !t,
        noiseSuppression: r,
        automaticGainControlConfig: s,
        noiseCancellation: a,
    });
}
async function nS() {
    if (!e9.supports(eq.O5.VAAPI) || window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let e = await window.DiscordNative.processUtils.getSystemInfo();
    (e.electronGPUInfo?.gpuDevice ?? []).some((e) => 4098 === e.vendorId) &&
        ((tZ = !0), (tq = e9.supports(eq.O5.GAMESCOPE_CAPTURE)));
}
async function nN() {
    try {
        await m.Ay.ensureModule("discord_krisp");
        let e = m.Ay.requireModule("discord_krisp");
        (tR = !0),
            (c = e.getSdkVersion?.()),
            (d = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (tb = e), i.emitChange();
            }),
            i.emitChange(),
            await m.Ay.ensureModule("discord_voice");
        let t = m.Ay.requireModule("discord_voice");
        t.setupKrispPath?.();
    } catch (t) {
        eX.warn(`Failed to load Krisp module: ${t.message}`), ek.A.captureException(t);
        let e = eq.CO.KRISP_INIT_ERROR;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eq.CO.KRISP_INIT_ERROR : n;
        }
        (0, F.QW)({ type: F.iy.NOISE_CANCELLER_ERROR, underlyingError: t7(e) }),
            eO.default.track(eR.HAw.VOICE_PROCESSING, { noise_canceller_error: e });
    } finally {
        tO = !1;
    }
}
async function ny() {
    try {
        let e,
            t = "",
            n = !1,
            i = URL.parse(e6);
        if (null === i) return void eX.log("OpenH264 URL ", i, " is invalid");
        let r = i.pathname.split("/"),
            s = r[r.length - 1].replace(".bz2", "");
        try {
            let t = await m.Ay.downloadOpenH264(
                e6,
                s,
                "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f",
                (e) => {
                    eX.log("OpenH264 download status", e);
                },
            );
            eX.log("OpenH264 is ready", t), (n = t.fetchedFromNetwork), (e = !0);
        } catch (n) {
            eX.error("OpenH264 download failed", n), (t = n.message), (e = !1);
        }
        if (
            (eO.default.track(eR.HAw.VIDEO_OPENH264_DOWNLOADED, {
                success: e,
                fetched_from_network: n,
                error_message: t,
            }),
            e)
        ) {
            let e = await m.Ay.cleanupUnusedOpenH264Files([s]);
            eX.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        eX.error("OpenH264 download failed", e);
    }
}
function nC(e) {
    e === eq.rB.AUTOMATIC
        ? (nl({ automaticAudioSubsystem: !0 }), nv())
        : (nl({ automaticAudioSubsystem: !1 }), e9.setAudioSubsystem(e));
}
function nv() {
    e9.queueAudioSubsystem(eq.rB.EXPERIMENTAL);
}
function nO(e) {
    let { section: t } = e;
    return t === eR.nc_.VOICE && nc(), !1;
}
class nR extends v.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        let e;
        if (
            (tc.start(e2, () => {
                eX.error("Device enumeration timed out"), eO.default.track(eR.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
            }),
            e9.on(O.bg.Connection, (e) => {
                let t;
                nT(),
                    t3(e),
                    t4(e),
                    ni(e),
                    e.context === eq.x.STREAM &&
                        e.setAv1CodecBitrateFunc(() => $.getConfig({ location: "MediaEngineStore" }).bitrate);
                let n = t2();
                e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers),
                    e.setQoS(n.qos),
                    (0, E.isWindows)()
                        ? (e.setExperimentFlag(eq.fd.H265_HARDWARE_ONLY, !0),
                          (null != tk
                              ? tk
                              : "u" > typeof window
                                ? (tk = t0().then((e) => ((tU = e), e)))
                                : Promise.resolve(!1)
                          ).then((t) => {
                              e.setExperimentFlag(eq.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                          }))
                        : (0, E.isMac)() && e.setExperimentFlag(eq.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                    (0, E.isLinux)() && n.openH264Enabled && e.setExperimentFlag(eq.fd.USE_LIBOPENH264_DECODER, !0),
                    (function (e) {
                        let { location: t, disable: n = !1 } = e;
                        return n ? ed.definition.defaultConfig : ed.getConfig({ location: t });
                    })({ location: "setupMediaEngine" }).enabled &&
                        e.setExperimentFlag(eq.fd.LOW_LATENCY_RATE_CONTROL, !0),
                    e.setExperimentFlag(eq.fd.RESET_DECODER_ON_ERRORS, !0),
                    e.setExperimentFlag(eq.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
                let { swallowVolumeOnlySpeakingEvents: r } = P.A.getConfig({ location: "MediaEngineStore" });
                if (
                    (r && e.setExperimentFlag(eq.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === eq.x.STREAM)
                ) {
                    let t = nE(tl);
                    e.setSoundshareDiscardRearChannels(t);
                }
                if ((0, E.isWindows)())
                    e.setExperimentFlag(eq.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(eq.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eq.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                else if ((0, E.isMac)())
                    e.setExperimentFlag(eq.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eq.fd.SIGNAL_AV1_HARDWARE_DECODE, !0),
                        e.setExperimentFlag(
                            eq.fd.H265_DISABLE_ENCODE,
                            !(
                                window?.DiscordNative?.os.arch === "arm64" &&
                                C().satisfies(window?.DiscordNative?.os.release, eq.Dk)
                            ),
                        );
                else if ((0, E.isLinux)()) e.setExperimentFlag(eq.fd.SIGNAL_AV1_DECODE, !0);
                else if ((0, E.isIOS)())
                    e.setExperimentFlag(eq.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eq.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                else if ((0, E.isAndroid)() && !1) {
                    let { enabled: t } = q.getConfig({ location: "MediaEngineStore" });
                    t &&
                        (e.setExperimentFlag(eq.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eq.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
                }
                if ((0, E.isWeb)()) {
                    let { enabled: t } = Q.getConfig({ location: "MediaEngineStore" });
                    e.setExperimentFlag(eq.fd.BROWSER_HEVC, t);
                }
                for (let r of ((0, E.isWindows)() &&
                    tj?.startsWith("AMD") &&
                    eT("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eq.fd.WMF_GPU_ENCODE, !0),
                (0, E.isWindows)() &&
                    tj?.startsWith("Intel") &&
                    eS.getConfig({ location: "MediaEngineStore" }).enabled &&
                    e.setExperimentFlag(eq.fd.WMF_GPU_ENCODE, !0),
                (0, E.isWindows)() &&
                    tj?.startsWith("Qualcomm") &&
                    eT("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eq.fd.WMF_GPU_ENCODE, !0),
                e9.setHasFullbandPerformance(null === (t = (0, G.A)()) || t >= 31),
                e.setRemoteAudioHistory(1e3),
                (0, U.A)(i) && e.setClipsKeyFrameInterval(eq.X1),
                (n = t2(e.context)),
                e.setPostponeDecodeLevel(100),
                Object.keys(n.localMutes)))
                    r !== eF.default.getId() && e.setLocalMute(r, n.localMutes[r]);
                for (let t of Object.keys(n.localVolumes))
                    t !== eF.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
                for (let t of Object.keys(n.localPans)) {
                    let i = n.localPans[t];
                    e.setLocalPan(t, i.left, i.right);
                }
                for (let t of Object.keys(n.disabledLocalVideos)) e.setLocalVideoDisabled(t, n.disabledLocalVideos[t]);
                e.on(O.yq.Speaking, (t, n, i, r) => {
                    D.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: r });
                }),
                    e.context === eq.x.DEFAULT &&
                        ((tA = !1),
                        e.on(O.yq.SpeakingWhileMuted, () => {
                            let e = !tA;
                            (tA = !0),
                                e && i.emitChange(),
                                tI.start(e1, () => {
                                    (tA = !1), i.emitChange();
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
                            eO.default.track(eR.HAw.VIDEOHOOK_INITIALIZED, {
                                backend: e,
                                format: t,
                                framebuffer_format: n,
                                sample_count: i,
                                success: r,
                                reinitialization: a,
                                ...(0, j.A)(s?.desktopSource),
                            });
                    }),
                    e.on(O.yq.NoiseCancellationError, t9),
                    e.on(O.yq.VoiceActivityDetectorError, t9),
                    e.on(O.yq.SdpError, (e, t, n, i) => {
                        eO.default.track(eR.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: i });
                    }),
                    e.on(O.yq.VideoState, (t) => {
                        D.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                    }),
                    e.setBitRate(eV.A.bitrate),
                    e.applyVideoQualityMode(eW.A.mode),
                    (0, E.isWindows)() &&
                        e9.supports(eq.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                        e9.setAsyncVideoInputDeviceInit(!0);
            }),
            e9.on(O.bg.DeviceChange, (e, t, n) => {
                tc.stop(),
                    D.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
            }),
            e9.on(O.bg.VolumeChange, (e, t) => {
                D.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
            }),
            e9.on(O.bg.DesktopSourceEnd, (e, t) => {
                D.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
            }),
            e9.on(O.bg.AudioPermission, (e) => {
                (tG = !0), D.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
            }),
            e9.on(O.bg.VideoPermission, (e) => {
                D.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
            }),
            e9.on(O.bg.WatchdogTimeout, async () => {
                let e;
                if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                    try {
                        await ex.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                    } catch (t) {
                        "number" == typeof t.status && (e = t.status);
                    }
                eX.warn(`Watchdog timeout, report submission status: ${e ?? 200}`);
                let t =
                    em.getConfig({ location: "watchdog_timeout" }).enabled && null != L.A.processUtils.setCrashReason;
                try {
                    await eO.default.track(
                        eR.HAw.VOICE_WATCHDOG_TIMEOUT,
                        { minidump_submission_error: e, will_restart: t },
                        { flush: !0 },
                    );
                } catch (e) {
                    eX.error("Failed to flush voice watchdog timeout analytics event", e);
                }
                t &&
                    (eX.info("Relaunching app due to voice watchdog timeout"),
                    await L.A.processUtils.setCrashReason("voice-watchdog-timeout"),
                    R.w.set("discord_watchdog_restart_timestamp", Date.now().toString()),
                    L.A.app.relaunch());
            }),
            e9.on(O.bg.VideoInputInitialized, (e) => {
                eO.default.track(eR.HAw.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired
                        ? null
                        : Math.round(e.timeToFirstFrame * eU.A.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy,
                    media_session_id: ej.A.getMediaSessionId(),
                    rtc_connection_id: ej.A.getRTCConnectionId(),
                });
            }),
            e9.on(O.bg.AudioInputInitialized, (e) => {
                eO.default.track(eR.HAw.AUDIO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_initialized_ms: Math.round(e.timeToInitialized * eU.A.Millis.SECOND),
                    rtc_connection_id: ej.A.getRTCConnectionId(),
                });
            }),
            e9.on(O.bg.ClipsRecordingRestartNeeded, () => {
                D.h.dispatch({ type: "CLIPS_RESTART" });
            }),
            e9.on(O.bg.ClipsInitFailure, (e, t) => {
                D.h.wait(() => {
                    D.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t });
                });
            }),
            e9.on(O.bg.ClipsRecordingEnded, (e, t) => {
                a?.desktopSource?.id === e &&
                    (null != t && s?.desktopSource?.soundshareId !== t && w.c1(t), (a = null));
            }),
            e9.on(O.bg.NativeScreenSharePickerUpdate, (e, t) => {
                D.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
            }),
            e9.on(O.bg.NativeScreenSharePickerCancel, (e) => {
                D.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
            }),
            e9.on(O.bg.NativeScreenSharePickerError, (e) => {
                D.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
            }),
            e9.on(O.bg.AudioDeviceModuleError, (e, t, n) => {
                eO.default.track(eR.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
            }),
            e9.on(O.bg.VideoCodecError, (e) => {
                let t = "encode" === e.mode ? F.iy.VIDEO_ENCODE_ERROR : F.iy.VIDEO_DECODE_ERROR,
                    n = { videoCodec: e.codecStandard, errorMessage: e.message };
                (0, F.QW)(
                    t === F.iy.VIDEO_ENCODE_ERROR
                        ? { type: t, ...n, videoEncoder: e.implName }
                        : { type: t, ...n, videoDecoder: e.implName },
                );
            }),
            e9.on(O.bg.ConnectionStats, (e) => {
                D.h.dispatch({
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
            e9.on(O.bg.VoiceProcessingError, t9),
            e9.on(O.bg.VoiceQueueMetrics, (e) => {
                let t = nb(e);
                null !== t && eO.default.track(eR.HAw.VOICE_QUEUE_METRICS, t);
            }),
            e9.setOnVideoContainerResized((e, t, n) => {
                D.h.wait(() =>
                    D.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
                );
            }),
            nS(),
            o.reset(),
            (0, eL.w)().then((e) => {
                null != e && ((tj = e.gpu_brand), (tY = e.has_intel_hybrid_igpu));
            }),
            e9.on(O.bg.SystemMicrophoneModeChange, (e) => {
                (f = e), e9.eachConnection(ni), i.emitChange();
            }),
            null != (e = R.w.get("audio")) && (R.w.set(eQ, { [eq.x.DEFAULT]: e }), R.w.remove("audio")),
            (te = R.w.get(eQ) ?? {}),
            T().each(te, (e) => {
                T().defaultsDeep(e, e5()),
                    null != e.modeOptions &&
                        "string" == typeof e.modeOptions.shortcut &&
                        (e.modeOptions.shortcut = (0, eG.OH)(e.modeOptions.shortcut)),
                    null != e.modeOptions &&
                        4 !== e.vadUseKrispSettingVersion &&
                        ((e.vadUseKrispSettingVersion = 4), (e.modeOptions.vadUseKrisp = !0)),
                    e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                    e.vadThrehsoldMigrated ||
                        ((e.vadThrehsoldMigrated = !0),
                        e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = -60)),
                    e9.supports(eq.O5.SIDECHAIN_COMPRESSION) &&
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
            nu(),
            ((0, E.isWindows)() || (0, E.isLinux)() || (0, E.isMac)()) && !__OVERLAY__ && !tO && !tR
                ? ((tO = !0), nN())
                : (0, E.isWeb)() && e9.supports(eq.O5.NOISE_CANCELLATION)
                  ? ((tR = !0), i.emitChange())
                  : (0, E.isWeb)() && nl({ noiseCancellation: !1 }),
            (0, E.isLinux)() && ny(),
            nA(),
            (0, E.isDesktop)() && E.isPlatformEmbedded && !tX)
        ) {
            tX = !0;
            let e = async () => {
                let t = await new Promise((e) => {
                    m.Ay.pollQueueMetrics((t) => {
                        e(t);
                    });
                });
                t.periodMs = eq.tl;
                let n = nb(t);
                null !== n && eO.default.track(eR.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, eq.tl);
            };
            setTimeout(e, eq.tl);
        }
        (0, E.isWindows)() &&
            E.isPlatformEmbedded &&
            null === ta &&
            e9
                .getCodecSurvey()
                .then((e) => {
                    try {
                        let t = JSON.parse(e);
                        if (null == t || null == t.available_video_decoders)
                            throw Error("decoder survey is not available");
                        ta = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                    } catch (e) {
                        eX.error("Failed to parse codec survey", e), (ta = !1);
                    }
                })
                .catch((e) => {
                    eX.error("Failed to get codec survey", e), (ta = !1);
                })
                .finally(() => {
                    D.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
                }),
            (0, E.isAndroid)(),
            (tH = {
                [eq.O5.VIDEO]: e9.supports(eq.O5.VIDEO),
                [eq.O5.DESKTOP_CAPTURE]: e9.supports(eq.O5.DESKTOP_CAPTURE),
                [eq.O5.HYBRID_VIDEO]: e9.supports(eq.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eF.default, eV.A, eB.A, eH.A, x.A, V.A, ej.A, H.Ay, eM.A, eY.default, eW.A);
    }
    supports(e) {
        return e9.supports(e);
    }
    supportsInApp(e) {
        return tH[e] || e9.supports(e);
    }
    isSupported() {
        return e9.supported();
    }
    isNoiseSuppressionSupported() {
        return e9.supports(eq.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return tR || !1;
    }
    isNoiseCancellationError() {
        return tw;
    }
    isAutomaticGainControlSupported() {
        return e9.supports(eq.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !no() && (e9.supports(eq.O5.LEGACY_AUDIO_SUBSYSTEM) || e9.supports(eq.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return e9.supports(eq.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === e9.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return tR || !1;
    }
    isAecDumpSupported() {
        return e9.supports(eq.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return e9.supports(eq.O5.VIDEO) && e9.supports(eq.O5.SIMULCAST);
    }
    getAecDump() {
        return t2().aecDumpEnabled;
    }
    getMediaEngine() {
        return e9;
    }
    getVideoComponent() {
        return e9.Video;
    }
    getCameraComponent() {
        return e9.Camera;
    }
    getKrispSuppressionLevel() {
        return d ?? 100;
    }
    getKrispEnableStats() {
        return tD;
    }
    isEnabled() {
        return tn;
    }
    isMute() {
        return this.isSelfMute() || td;
    }
    isDeaf() {
        return this.isSelfDeaf() || th;
    }
    getAudioMixerSettings() {
        return t2().audioMixerSettings;
    }
    hasContext(e) {
        return null != te[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq.x.DEFAULT;
        return e === eq.x.DEFAULT && t_;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq.x.DEFAULT;
        return (
            !this.isEnabled() ||
            t2(e).mute ||
            !ey.A.didHavePermission(eK.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eq.x.DEFAULT && tf)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tg;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tg = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq.x.DEFAULT,
            t = tK && "voice_isolation" !== this.getSystemMicrophoneMode() && t2(e).mode === eR.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (eB.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return tW;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq.x.DEFAULT;
        return !this.isSupported() || t2(e).deaf;
    }
    isVideoEnabled() {
        return tp && tS;
    }
    isVideoAvailable() {
        return Object.values(tu).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return tS;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq.x.STREAM;
        return tr === e && null != s;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq.x.STREAM;
        return tr === e && null != s && s.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eq.x.DEFAULT;
        return e !== eF.default.getId() && (t2(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return e9.supports(eq.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eq.x.DEFAULT;
        return t2(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eq.x.DEFAULT;
        return t2(t).videoToggleStateMap[e] ?? eR.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eq.x.DEFAULT;
        return t === eq.x.DEFAULT && tF.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq.x.DEFAULT;
        return e === eq.x.DEFAULT && tF.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tM;
    }
    isNativeAudioPermissionReady() {
        return tG;
    }
    getGoLiveSource() {
        return s;
    }
    getGoLiveContext() {
        return tr;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return ts;
    }
    isH264MfDecodeAvailable() {
        return ta;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eq.x.DEFAULT,
            n = t2(t).localPans[e];
        return null != n ? n : eJ;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eq.x.DEFAULT,
            n = t === eq.x.STREAM ? eq.Cn : eq.Hz,
            i = t2(t).localVolumes[e];
        return null != i ? i : n;
    }
    getInputVolume() {
        return t2().inputVolume;
    }
    getOutputVolume() {
        return t2().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq.x.DEFAULT;
        return t2(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq.x.DEFAULT;
        return t2(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            T().each(te, (t, n) => {
                let {
                    mode: i,
                    modeOptions: { shortcut: r },
                } = t;
                i === eR.TBI.PUSH_TO_TALK && tt.has(n) && (e[n] = r);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nf(to, t2().inputDeviceId);
    }
    getOutputDeviceId() {
        return nf(tl, t2().outputDeviceId);
    }
    getVideoDeviceId() {
        return nf(tu, t2().videoDeviceId);
    }
    getInputDevices() {
        return to;
    }
    getOutputDevices() {
        return tl;
    }
    getVideoDevices() {
        return tu;
    }
    getEchoCancellation() {
        let e = t2();
        return eB.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return e9.supports(eq.O5.SIDECHAIN_COMPRESSION) && t2().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return t2().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return t2().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tU && tU;
    }
    getOpenH264Enabled() {
        return (0, E.isLinux)() && t2().openH264Enabled;
    }
    getLoopback() {
        return tB.size > 0;
    }
    getLoopbackReasons() {
        return tB;
    }
    getNoiseSuppression() {
        let e = t2();
        return eB.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = t2();
        return eB.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return t2().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return t2().noiseCancellation;
    }
    getHardwareEncoding() {
        return !0;
    }
    getEnableSilenceWarning() {
        return t2().silenceWarning;
    }
    getDebugLogging() {
        return e9.getDebugLogging();
    }
    getQoS() {
        return t2().qos;
    }
    getAttenuation() {
        return t2().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return t2().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return t2().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return na() && t2().automaticAudioSubsystem ? eq.rB.AUTOMATIC : e9.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return e9.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return t2().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === e$.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq.x.DEFAULT;
        return t2(e);
    }
    getState() {
        return {
            settingsByContext: te,
            inputDevices: to,
            outputDevices: tl,
            appSupported: tH,
            krispModuleLoaded: tR,
            krispVersion: c,
            krispSuppressionLevel: d,
            goLiveSource: s,
            goLiveContext: tr,
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
        return ty;
    }
    getInputDeviceOSMuted() {
        return l;
    }
    getInputDeviceOSVolume() {
        return u;
    }
    getPacketDelay() {
        return E.isPlatformEmbedded || this.getMode() !== eR.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        e9.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return ti;
    }
    getVideoHook() {
        return t2().videoHook;
    }
    supportsVideoHook() {
        return e9.supports(eq.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = t2().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return e9.supports(eq.O5.EXPERIMENTAL_SOUNDSHARE) && C().satisfies(L.A?.os.release, eo.$x);
    }
    supportsHookSoundshare() {
        return (0, E.isWindows)() && e9.supports(eq.O5.SOUNDSHARE) && C().satisfies(L.A?.os.release, eo.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = t2().useSystemScreensharePicker,
            n = (0, E.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return e9.supports(eq.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return tZ;
    }
    getVideoEncoderExperiments(e, t) {
        let n = ["unk"];
        if (
            (n.push("nvNewPresets"),
            e === eq.x.STREAM ? n.push("nvRelaxRc=250") : n.push("nvRelaxRc=75"),
            this.getUseVaapiEncoder() && n.push("vaapi"),
            e === eq.x.STREAM && "streamer" === t && (0, E.isWindows)())
        ) {
            n.push("useCaptureDeviceForEncode");
            let { overrideDeviceReuse: e } = ep.getConfig({ location: "handleReady" });
            e && n.push("videoCaptureDeviceOverrideReuse");
        }
        return (
            (function (e) {
                let { location: t } = e;
                return ec.getConfig({ location: t });
            })({ location: "handleReady" }).enabled && n.push("linux-vulkan"),
            n.join(",")
        );
    }
    getUseGamescopeCapture() {
        return tq;
    }
    getSpeakingWhileMuted() {
        return tA;
    }
    getKrispModelOverride() {
        return _;
    }
    getKrispModels() {
        return tb;
    }
    getKrispVadActivationThreshold() {
        return t2().modeOptions.vadKrispActivationThreshold ?? 0.5;
    }
    hasActiveCallKitCall() {
        return t$;
    }
    setHasActiveCallKitCall(e) {
        t$ = e;
    }
    supportsScreenSoundshare() {
        return (0, E.isMac)()
            ? e9.supports(eq.O5.SOUNDSHARE) && C().satisfies(L.A?.os.release, eo.P$) && ns()
            : (0, E.isWindows)()
              ? e9.supports(eq.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, E.isLinux)() && e9.supports(eq.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, E.isWindows)()) {
            if (this.getBypassSystemInputProcessing()) return;
            return tx[this.getInputDeviceId()]?.active?.find((e) => "deep_noise_suppression" === e);
        }
        if ((0, E.isMac)() || (0, E.isIOS)()) return f;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq.x.DEFAULT,
            t = this.supports(eq.O5.VIDEO)
                ? [{ rid: "100", type: e === eq.x.DEFAULT ? eq.mI.VIDEO : eq.mI.SCREEN, quality: eq.Y4 }]
                : [];
        return (
            this.isSimulcastSupported() &&
                e === eq.x.DEFAULT &&
                J.getConfig({ location: "MediaEngineStore.getVideoStreamParameters" }).enableSimulcast &&
                t.push({ rid: "50", type: eq.mI.VIDEO, quality: eq.Cl }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: (0, E.isWeb)() };
        return e9.fetchAsyncResources(e);
    }
    startDavePreload() {
        !tP &&
            ((tP = !0),
            (0, E.isWeb)() &&
                e9.fetchAsyncResources({ fetchDave: !0 }).catch((e) => {
                    eX.warn("DAVE preload failed:", e), ek.A.captureException(e);
                }));
    }
    getSupportedSecureFramesProtocolVersion() {
        return e9.getSupportedSecureFramesProtocolVersion();
    }
    hasClipsSource() {
        return null != a;
    }
    getGpuBrand() {
        return tj;
    }
}
function nb(e) {
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
(i = new nR(D.h, {
    VOICE_CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n, currentVoiceChannelId: i, video: r } = e;
        if ((i !== n && t5(r, null), null != t || null == n)) {
            tv = !1;
            return;
        }
        if (tv) return;
        tv = !0;
        let s = t2();
        (s.mute || s.deaf) && (nl({ deaf: !1, mute: !1 }), e9.eachConnection(t4));
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (r === t.sessionId) {
                (td = t.mute || t.suppress), (th = t.deaf), e9.eachConnection(t4);
                let e = null != t.guildId && null != t.channelId && null != tL && tL !== t.channelId,
                    n = !tv && null == t.channelId;
                return t5(!e && !n && tp), (tL = t.channelId), !0;
            }
            return __OVERLAY__ || t.userId !== eF.default.getId() || null != ej.A.getChannelId() || t5(!1, null), e;
        }, !1);
    },
    CONNECTION_OPEN: function (e) {
        (r = e.sessionId), (td = !1), (th = !1);
        let t = t2();
        na() && (no() ? nC(eq.rB.AUTOMATIC) : t.automaticAudioSubsystem && nv()),
            e9.supports(eq.O5.OFFLOAD_ADM_CONTROLS) && e9.setOffloadAdmControls(!0),
            (0, E.isIOS)() &&
                er.getConfig({ location: "handleConnectionOpen" }).enabled &&
                e9.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
            nh(t.inputDeviceId),
            nm();
    },
    CONNECTION_CLOSED: function () {
        r = null;
    },
    POST_CONNECTION_OPEN: function () {
        return (0, E.isWeb)() && i.startDavePreload(), !1;
    },
    RTC_CONNECTION_STATE: function (e) {
        switch (e.state) {
            case eR.S7L.CONNECTING:
                nc();
                break;
            case eR.S7L.RTC_CONNECTING:
                (ty = !1), (l = void 0), (u = void 0), (tN = !1), (tK = !1), tz.stop(), tC.stop(), o.reset();
                break;
            case eR.S7L.RTC_CONNECTED:
                t5();
                break;
            case eR.S7L.DISCONNECTED:
                (tQ = {}),
                    (function () {
                        if (0 === tF.size) return;
                        let e = eq.x.DEFAULT,
                            { disabledLocalVideos: t } = t2(e);
                        tF.forEach((n) => {
                            A()(t[n], "If you are auto-disabled, then you are also disabled."),
                                delete t[n],
                                e9.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
                        }),
                            tF.clear(),
                            nl({ disabledLocalVideos: t }, e, !1);
                    })(),
                    nA();
        }
    },
    AUDIO_SET_TEMPORARY_SELF_MUTE: function (e) {
        let { mute: t } = e;
        (t_ = t), e9.eachConnection(t4);
    },
    AUDIO_TOGGLE_SELF_MUTE: function (e) {
        let { context: t, playSoundEffect: n } = e,
            { mute: i, deaf: r } = t2(t);
        if (t === eq.x.DEFAULT && (ey.A.requestPermission(eK.iL.AUDIO), tf)) return !1;
        (i = !r && !i) || (r = !1), n || (tg = !0), nl({ mute: i, deaf: r }, t), e9.eachConnection(t4);
    },
    AUDIO_SET_SELF_MUTE: function (e) {
        let { context: t, mute: n, playSoundEffect: i } = e;
        nl({ mute: n }, t), i || (tg = !0), e9.eachConnection(t4);
    },
    AUDIO_TOGGLE_SELF_DEAF: function (e) {
        let { context: t } = e;
        nl({ deaf: !t2(t).deaf }, t), e9.eachConnection(t4);
    },
    AUDIO_TOGGLE_LOCAL_MUTE: function (e) {
        let { context: t, userId: n } = e;
        if (n === eF.default.getId()) return;
        let { localMutes: i } = t2(t);
        i[n] ? delete i[n] : (i[n] = !0),
            nl({ localMutes: i }, t),
            e9.eachConnection((e) => e.setLocalMute(n, i[n] || !1), t);
    },
    AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
        let { context: t, userId: n, videoToggleState: i, persist: r, isAutomatic: s } = e;
        A()(!(r && s), "These are not allowed to both be true.");
        let a = i === eR.bb8.DISABLED,
            { disabledLocalVideos: o } = t2(t),
            l = o[n] ?? !1,
            u = tF.has(n),
            c = i === eR.bb8.AUTO_ENABLED || i === eR.bb8.MANUAL_ENABLED;
        eX.info(`disableVideo=${a} currentlyDisabled=${l} currentlyAutoDisabled=${u}, isVideoShown=${c}`),
            A()(!(u && !l), "If you are auto-disabled, then you are also disabled.");
        let d = a !== l,
            _ = t === eq.x.DEFAULT,
            f = s && d && _,
            h = r && d && _;
        eX.info(`changed=${d} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${f} isManualToggleByUser=${h}`);
        let { videoToggleStateMap: p } = t2(t);
        if (
            (p[n] === eR.bb8.AUTO_PROBING &&
                i === eR.bb8.AUTO_ENABLED &&
                (0, eN.A)(n, a ? eq.Al.AUTO_DISABLE : eq.Al.AUTO_ENABLE, c),
            (p[n] = i),
            nl({ videoToggleStateMap: p }, t, r),
            i === eR.bb8.AUTO_PROBING
                ? ej.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
                : ej.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
            tV ||
                (eX.info(`isAutoDisableAllowed=${tV} - disabling VideoHealthManager`),
                ej.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
            f)
        ) {
            if ((!a && !u) || (a && !tV)) return;
            (0, eN.A)(n, a ? eq.Al.AUTO_DISABLE : eq.Al.AUTO_ENABLE, c), a ? tF.add(n) : tF.delete(n);
        } else
            h &&
                (u && !a
                    ? (eX.info("disallowing auto-disable for this session because of manual override by user"),
                      (tV = !1),
                      ej.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                      (0, eN.A)(n, eq.Al.MANUAL_REENABLE, c))
                    : (0, eN.A)(n, a ? eq.Al.MANUAL_DISABLE : eq.Al.MANUAL_ENABLE, c));
        _ && !a && tF.delete(n),
            a ? (o[n] = !0) : delete o[n],
            nl({ disabledLocalVideos: o }, t, r),
            e9.eachConnection((e) => e.setLocalVideoDisabled(n, o[n] ?? !1), t);
    },
    AUDIO_SET_LOCAL_VOLUME: function (e) {
        let { context: t, userId: n, volume: i } = e;
        if (n === eF.default.getId()) return;
        let r = t === eq.x.STREAM ? eq.Cn : eq.Hz,
            { localVolumes: s } = t2(t);
        i === r ? delete s[n] : (s[n] = i),
            nl({ localVolumes: s }, t),
            e9.eachConnection((e) => e.setLocalVolume(n, i), t);
    },
    AUDIO_SET_AUDIO_MIXER_SETTINGS: function (e) {
        let { context: t, settings: n } = e;
        nl({ audioMixerSettings: n }, t), e9.setAudioMixerOptions(n);
    },
    AUDIO_SET_LOCAL_PAN: function (e) {
        let { context: t, userId: n, left: i, right: r } = e,
            { localPans: s } = t2(t);
        (s[n] = { left: i, right: r }), nl({ localPans: s }, t), e9.eachConnection((e) => e.setLocalPan(n, i, r), t);
    },
    AUDIO_SET_MODE: function (e) {
        let { context: t, mode: n, options: i } = e;
        nl({ mode: n, modeOptions: { ...i, updatedAt: Date.now() } }, t), e9.eachConnection(t3);
    },
    AUDIO_SET_INPUT_VOLUME: function (e) {
        let { volume: t } = e;
        nl({ inputVolume: t6(t) }), e9.setInputVolume(t);
    },
    AUDIO_SET_OUTPUT_VOLUME: function (e) {
        let { volume: t } = e;
        nl({ outputVolume: t }), e9.setOutputVolume(t);
    },
    AUDIO_SET_INPUT_DEVICE: function (e) {
        let { id: t } = e;
        (t = nf(to, t)),
            (ts = performance.now()),
            nl({ inputDeviceId: t }),
            np(t),
            e9.eachConnection(ni),
            (l = void 0),
            (u = void 0),
            tz.stop(),
            (tK = !1);
        let { resetSilenceWarningOnDeviceChange: n } = ef.A.getConfig({
            location: "MediaEngineStore.handleSetInputDevice",
        });
        n && ((tN = !1), o.reset());
    },
    AUDIO_SET_OUTPUT_DEVICE: function (e) {
        let { id: t } = e;
        nl({ outputDeviceId: (t = nf(tl, t)) }), e9.setAudioOutputDevice(t);
    },
    AUDIO_SET_ACTIVE_INPUT_PROFILE: function (e) {
        let { inputProfile: t } = e;
        nl({ activeInputProfile: t });
        let n = t2();
        e9.eachConnection((e) => {
            t3(e), ni(e);
        }),
            e9.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
            nT();
    },
    AUDIO_SET_ECHO_CANCELLATION: function (e) {
        let t = nl({ echoCancellation: e.enabled });
        e9.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nT(), nI(e.location);
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION: function (e) {
        let t;
        (t = nl({ sidechainCompression: e.enabled })), e9.setSidechainCompression(t.sidechainCompression);
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function (e) {
        let t = nl({ sidechainCompressionStrength: e.strength });
        e9.setSidechainCompressionStrength(t.sidechainCompressionStrength);
    },
    AUDIO_SET_LOOPBACK: function (e) {
        let { enabled: t, loopbackReason: n } = e;
        return t ? tB.add(n) : tB.delete(n), nT();
    },
    AUDIO_SET_NOISE_SUPPRESSION: function (e) {
        let t = nl({ noiseSuppression: e.enabled });
        e9.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nT(), nI(e.location);
    },
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function (e) {
        let t = nl({ automaticGainControl: e.enabled });
        e9.eachConnection((e) => nt(e, t.automaticGainControl)), nT(), nI(e.location);
    },
    AUDIO_SET_NOISE_CANCELLATION: function (e) {
        let t = nl({ noiseCancellation: e.enabled });
        e9.eachConnection((e) => nn(e, t.noiseCancellation)), nT(), nI(e.location);
    },
    AUDIO_SET_KRISP_MODEL_OVERRIDE: function (e) {
        eC.A.setKrispModelOverride(e.model), (_ = e.model), nT();
    },
    AUDIO_SET_DISPLAY_SILENCE_WARNING: function (e) {
        nl({ silenceWarning: e.enabled });
    },
    AUDIO_SET_DEBUG_LOGGING: function (e) {
        e9.setDebugLogging(e.enabled);
    },
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: function (e) {
        let { level: t } = e;
        (d = t), eC.A.setKrispSuppressionLevel(t);
    },
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: function (e) {
        (0, E.isWeb)() || ((tD = e.enabled), e9.setNoiseCancellationEnableStats?.(e.enabled));
    },
    MEDIA_ENGINE_SET_VIDEO_HOOK: function (e) {
        nl({ videoHook: e.enabled });
    },
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function (e) {
        nl({ experimentalSoundshare2: e.enabled });
    },
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: function (e) {
        let { enabled: t } = e;
        nl({ useSystemScreensharePicker: t });
    },
    AUDIO_SET_ATTENUATION: function (e) {
        let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i } = e,
            r = nl({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i });
        e9.eachConnection((e) =>
            e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers),
        );
    },
    AUDIO_SET_QOS: function (e) {
        let { enabled: t } = e;
        nl({ qos: t }), e9.eachConnection((e) => e.setQoS(t));
    },
    MEDIA_ENGINE_DEVICES: function (e) {
        let { inputDevices: t, outputDevices: n, videoDevices: i } = e,
            r = to;
        if (((to = n_(t, eZ.intl.string(eZ.t["/QIjDA"]))), !T().isEqual(to, r))) {
            let e = t2();
            np(nf(to, e.inputDeviceId)), e9.eachConnection(ni);
        }
        !(function (e) {
            let t = tl;
            if (((tl = n_(e, eZ.intl.string(eZ.t.xlUg0v))), !T().isEqual(tl, t))) {
                let e = t2(),
                    n = nf(tl, e.outputDeviceId);
                e9.setAudioOutputDevice(n);
                let i = nE(t),
                    r = nE(tl);
                i !== r &&
                    e9.eachConnection((e) => {
                        e.context === eq.x.STREAM && e.setSoundshareDiscardRearChannels(r);
                    });
            }
        })(n);
        tS = i.length > 0;
        let s = tu;
        if (((tu = n_(i, eZ.intl.string(eZ.t.WKWARY))), tp && !T().isEqual(tu, s))) {
            let e = void 0 !== tu[tE],
                t = tE === eq.dx && s[eq.dx]?.disabled,
                n = "Firefox" === N().name && "" === tE && s[tE]?.name === "Default" && !s[tE]?.disabled;
            t5(e || t || n);
        }
    },
    AUDIO_VOLUME_CHANGE: function (e) {
        let { inputVolume: t, outputVolume: n } = e;
        nl({ inputVolume: t6(t), outputVolume: n });
    },
    AUDIO_RESET: function () {
        R.w.remove(eQ), location.reload();
    },
    AUDIO_INPUT_DETECTED: function (e) {
        let { inputDetected: t } = e;
        if (null == t) return !1;
        if (((ty = !0 !== tN && !t), t)) (tN = !0), (tK = !1), tz.stop(), tC.stop();
        else if (t2().mode === eR.TBI.VOICE_ACTIVITY && tN) {
            let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = ef.A.getConfig({
                location: "MediaEngineStore.handleInputDetected",
            });
            e &&
                tz.start(e3, () => {
                    eO.default.track(eR.HAw.HARDWARE_MUTE_GUESSED, {
                        input_device_name: to[nf(to, t2().inputDeviceId)]?.name,
                        rtc_connection_id: ej.A.getRTCConnectionId(),
                    }),
                        (tK = !0),
                        i.emitChange();
                }),
                null != t &&
                    tC.start(t * eU.A.Millis.MINUTE, () => {
                        (tN = !1), o.reset();
                    });
        }
    },
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: function (e) {
        let { osVolume: t, osMuted: n } = e;
        (u = t), (l = n);
    },
    AUDIO_SET_SUBSYSTEM: function (e) {
        nC(e.subsystem);
    },
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: function (e) {
        let t = e.bypassEnabled;
        nl({ bypassSystemInputProcessing: t }), e9.setAudioInputBypassSystemProcessing(t), nI(e.location);
    },
    MEDIA_ENGINE_SET_AUDIO_ENABLED: function (e) {
        (tn = e.enabled), e.unmute && nl({ mute: !1, deaf: !1 }), e9.eachConnection(t4);
    },
    MEDIA_ENGINE_SET_VIDEO_ENABLED: function (e) {
        let { enabled: t } = e;
        ey.A.requestPermission(eK.iL.CAMERA), t5(t);
    },
    MEDIA_ENGINE_PERMISSION: function (e) {
        let { kind: t, granted: n } = e;
        if (!n)
            switch (t) {
                case "audio":
                    (tn = !1), e9.eachConnection(t4);
                    break;
                case "video":
                    t5(!1);
            }
    },
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
        let { settings: t } = e;
        if (t?.desktopSettings != null) {
            let e = null,
                n = null,
                { sourceId: i, sound: r } = t.desktopSettings,
                a = t.context ?? eq.x.DEFAULT,
                o = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
                l = ex.A.getPidFromDesktopSource(i);
            E.isPlatformEmbedded && ({ soundshareId: e, soundshareSession: n } = ng(l, r)),
                a !== tr && (null != s && e9.setGoLiveSource(null, tr), (tr = a)),
                t5(a === eq.x.STREAM && tp, {
                    desktopSource: { id: i, sourcePid: l, soundshareId: e, soundshareSession: n },
                    quality: { resolution: o.resolution, frameRate: o.frameRate },
                });
        } else if (t?.cameraSettings != null) {
            let e = t.context ?? eq.x.DEFAULT,
                { videoDeviceGuid: n, audioDeviceGuid: i } = t.cameraSettings,
                r = e === eq.x.STREAM && tp,
                s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
            t5(r, {
                cameraSource: { videoDeviceGuid: n, audioDeviceGuid: i },
                quality: { resolution: s.resolution, frameRate: s.frameRate },
            });
        } else t5(tp, null);
    },
    MEDIA_ENGINE_SET_VIDEO_DEVICE: function (e) {
        let { id: t } = e;
        nl({ videoDeviceId: (t = nf(tu, t)) }), t5();
    },
    MEDIA_ENGINE_INTERACTION_REQUIRED: function (e) {
        return ti !== e.required && ((ti = e.required), e.required || e9.interact(), !0);
    },
    USER_SETTINGS_MODAL_INIT: nO,
    USER_SETTINGS_MODAL_SET_SECTION: nO,
    CERTIFIED_DEVICES_SET: function () {
        return e9.eachConnection(ni), !1;
    },
    RPC_APP_CONNECTED: function (e) {
        let { application: t } = e;
        tt.add(t.id);
    },
    RPC_APP_DISCONNECTED: function (e) {
        let { application: t } = e;
        tt.delete(t.id);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { mediaEngineState: t } = e;
        (te = t.settingsByContext),
            (to = t.inputDevices),
            (tl = t.outputDevices),
            (tH = t.appSupported),
            (tR = t.krispModuleLoaded),
            (c = t.krispVersion),
            (tr = t.goLiveContext);
    },
    APP_STATE_UPDATE: function (e) {
        let { state: t } = e,
            n = B.A.isEnabled();
        if (t === eR.g6G.BACKGROUND && tp && !n) (tT = !0), t5(!1);
        else {
            if (t !== eR.g6G.ACTIVE || !tT) return !1;
            (tT = !1), t5(!0);
        }
        return !0;
    },
    SET_CHANNEL_BITRATE: function (e) {
        e9.eachConnection((t) => t.setBitRate(e.bitrate));
    },
    SET_VAD_PERMISSION: function (e) {
        let { hasPermission: t } = e,
            n = !t;
        if (n === tf) return !1;
        (tf = n), e9.eachConnection(t4);
    },
    SET_NATIVE_PERMISSION: function (e) {
        let { state: t, permissionType: n } = e,
            i = t === eK.hL.ACCEPTED;
        switch (n) {
            case eK.iL.AUDIO:
                (tG = !0), e9.eachConnection(t4);
                break;
            case eK.iL.CAMERA:
                !i && tp && t5(!1);
                break;
            default:
                return !1;
        }
    },
    SET_CHANNEL_VIDEO_QUALITY_MODE: function (e) {
        e9.eachConnection((t) => t.applyVideoQualityMode(e.mode));
    },
    MEDIA_ENGINE_SET_AEC_DUMP: function (e) {
        let { enabled: t } = e,
            n = nl({ aecDumpEnabled: t });
        e9.setAecDump(n.aecDumpEnabled);
    },
    MEDIA_ENGINE_SET_OPENH264_ENABLED: function (e) {
        let { enabled: t } = e;
        nl({ openH264Enabled: t }), m.Ay?.setOpenH264Enabled?.(t);
    },
    MEDIA_ENGINE_RESET_SETTINGS: function (e) {
        let { overrides: t } = e;
        if (__OVERLAY__) return !1;
        (te = Object.values(eq.x).reduce((e, n) => {
            let i = e5();
            return (e[n] = T().merge(i, t[n])), e;
        }, {})),
            R.w.set(eQ, te),
            nu();
    },
    CHANNEL_DELETE: function () {
        if ((!tp && null == s) || null != ej.A.getRTCConnectionId()) return !1;
        t5(!1, null);
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: function (e) {
        if (e.code === eq.CO.KRISP_CPU_OVERUSE) {
            (tQ.noiseCancellation = !1), (tQ.noiseSuppression = !0);
            let e = t2();
            return e9.eachConnection((t) => nn(t, e.noiseCancellation)), nT(), nI(), !0;
        }
        return !1;
    },
    MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR: function (e) {
        return (
            e.code === eq.CO.KRISP_VAD_CPU_OVERUSE &&
            ((tQ.modeOptions = { vadUseKrisp: !1 }), e9.eachConnection((e) => t3(e)), !0)
        );
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function () {
        return !!tw && ((tw = !1), !0);
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
        let { settings: t } = e;
        e9.applyMediaFilterSettings(t).finally(() => {
            (tM = !1), i.emitChange();
        });
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function () {
        tM = !0;
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function () {
        tM = !1;
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            local: n,
            wasSaved: i,
        } = e;
        if (t !== ez.oD.PRELOADED_USER_SETTINGS || n || null != i) return !1;
        nm(!0);
    },
    CLIPS_INIT: function (e) {
        let { sourceId: t, applicationName: n, quality: r } = e;
        if (!(0, k.Ao)() || null == L.A) return !1;
        null != a &&
            (e9.setClipsSource(null),
            (0, E.isWindows)() &&
                (null != a.desktopSource.soundshareId
                    ? w.c1(a.desktopSource.soundshareId)
                    : null != a.desktopSource.sourcePid && t2().videoHook && w.c1(a.desktopSource.sourcePid)));
        let s = ex.A.getPidFromDesktopSource(t),
            { soundshareId: o, soundshareSession: l } = ng(s, !0);
        a = { desktopSource: { id: t, sourcePid: s, soundshareId: o, soundshareSession: l }, quality: r };
        let u = tJ("MediaEngineStore clips"),
            c = t2().videoHook,
            d = !c || !ee.getConfig({ location: "handleClipsInit" }).enabled,
            _ = c && eE.getConfig({ location: "handleClipsInit" }).enabled;
        e9.setClipsSource({
            desktopDescription: {
                id: a.desktopSource.id,
                soundshareId: a.desktopSource.soundshareId,
                useVideoHook: c,
                useHookFramePacer: d,
                useGraphicsCapture: nr(),
                useCaptureDeviceForEncode: !1,
                useLoopback: i.getExperimentalSoundshare(),
                useQuartzCapturer: !0,
                allowScreenCaptureKit: ns(),
                videoHookStaleFrameTimeoutMs: 500,
                graphicsCaptureStaleFrameTimeoutMs: e0,
                hdrCaptureMode: u,
                videoHookAllowDx12: _,
            },
            quality: r,
            applicationName: n,
            videoEncoderExperiments: i.getVideoEncoderExperiments(eq.x.STREAM, "streamer"),
        });
    },
    CLIPS_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        !1 === t.decoupledClipsEnabled && ((a = null), e9.setClipsSource(null));
    },
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function (e) {
        tW = e.enabled;
    },
    MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: function (e) {
        let { deviceId: t, active: n, available: i } = e;
        tx[t] = { active: n, available: i };
    },
})),
    (o = new eu(e9, i));
let nD = i;
