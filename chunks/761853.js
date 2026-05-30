"use strict";
let i, r, s, a, o, l, u, c, d, _, h;
n.d(t, { Ay: () => nM }), n(323874), n(14289), n(35956), n(321073);
var f = n(823598),
    p = n(626584),
    E = n(723702),
    m = n(19575);
(0, f.WQ)({
    supported() {
        try {
            if (__OVERLAY__);
            else if (E.isPlatformEmbedded) {
                let e = (0, f.lE)();
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
    y = n.n(S),
    N = n(299855),
    v = n.n(N),
    C = n(17928),
    R = n(459838),
    O = n(506774),
    b = n(451988),
    D = n(228366),
    L = n(77729),
    w = n(719129),
    M = n(894539),
    P = n(124838),
    x = n(274372),
    k = n(915618),
    U = n(572164),
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
function $(e) {
    let { location: t, disable: n = !1 } = e;
    return n ? K.definition.defaultConfig : K.getConfig({ location: t });
}
let z = (0, Y.mj)({
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
    X = { probeAudioEffects: !1 },
    Z = (0, Y.mj)({
        name: "2026-03-audio-effects-probe",
        kind: "user",
        defaultConfig: X,
        variations: { 1: { ...X, probeAudioEffects: !0 } },
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
        (this.mediaEngine = e), (this.mediaEngineStore = t), this.mediaEngine.on(R.bg.Silence, this.handleSilence);
    }
    reset() {
        this.stateChangeTimeout.stop(),
            null != this.inputDetected && this.handleSilence(!this.inputDetected),
            (this.inputDetected = void 0);
    }
    fetchInputDeviceOSConfig = async () => {
        if ((0, es.uF)() && v().satisfies(L.A?.os.release, eo.PH))
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
var eh = n(801644);
let ef = (0, et.Ay)({
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
var ey = n(75076),
    eN = n(91777),
    ev = n(559633),
    eC = n(205106),
    eR = n(174459),
    eO = n(652215);
let eb = new ea.Vy("AudioEffects");
async function eD(e, t, n) {
    if (!(0, es.uF)()) return Promise.reject(Error("Audio effects querying not supported on non-Windows platforms"));
    try {
        let i = await n.getDeviceAudioEffects(e);
        return (
            D.h.dispatch({ type: "MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS", deviceId: t, ...i }),
            eR.default.track(eO.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, {
                succeeded: !0,
                active_effects: i.active,
                available_effects: i.available,
            }),
            i
        );
    } catch (e) {
        eb.error("Failed to probe audio effects for device", e),
            eR.default.track(eO.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, { succeeded: !1 });
    }
}
var eL = n(967347),
    ew = n(617617),
    eM = n(125325),
    eP = n(499156),
    ex = n(353835),
    ek = n(927813),
    eU = n(38405),
    eG = n(350535),
    eF = n(495544),
    eV = n(131319),
    eB = n(347481),
    eH = n(734057),
    ej = n(763827),
    eY = n(287809),
    eW = n(117549),
    eK = n(765682),
    e$ = n(829997),
    ez = n(355097),
    eq = n(621380),
    eX = n(731854),
    eZ = n(375708);
let eQ = new p.A("MediaEngineStore"),
    eJ = "MediaEngineStore",
    e0 = { left: 1, right: 1 },
    e1 = 5 * ek.A.Millis.SECOND,
    e2 = 2 * ek.A.Millis.SECOND,
    e3 = 30 * ek.A.Millis.SECOND,
    e6 = +ek.A.Millis.MINUTE,
    e4 = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2",
    e5 = 0;
function e7() {
    return {
        mode: eO.TBI.VOICE_ACTIVITY,
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
        audioMixerSettings: { ...e$.b },
        audioMixerSettingsVersion: 0,
        localPans: {},
        inputVolume: eX.Hz,
        outputVolume: eX.Hz,
        inputDeviceId: eX.dx,
        outputDeviceId: eX.dx,
        videoDeviceId: eX.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: te.supports(eX.O5.VIDEO_HOOK),
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
let e8 = {
        [eq.m.CUSTOM]: {},
        [eq.m.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [eq.m.STUDIO]: {
            mode: eO.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    e9 = { modeOptions: { vadUseKrisp: !1 }, noiseCancellation: !1, noiseSuppression: !0 },
    te = (0, R.hB)((0, R.WI)());
eQ.enableNativeLogger(!0);
let tt = {},
    tn = new Set([eX.x.DEFAULT]),
    ti = te.supports(eX.O5.AUTO_ENABLE),
    tr = !1,
    ts = eX.x.STREAM,
    ta = performance.now(),
    to = null,
    tl = { [eX.dx]: nh("No Input Devices") },
    tu = { [eX.dx]: nh("No Output Devices") },
    tc = { [eX.dx]: nh("No Video Devices") },
    td = new b.Ep(),
    t_ = !1,
    th = !1,
    tf = !1,
    tp = !1,
    tE = !1,
    tm = eX.qe,
    tg = eX.qe,
    tA = !1,
    tI = !1,
    tT = new b.Ep(),
    tS = !1,
    ty = !1,
    tN = !1,
    tv = !1,
    tC = new b.Ep(),
    tR = !1,
    tO = !1,
    tb = !1,
    tD = !1,
    tL = [],
    tw = !1,
    tM = null,
    tP = !1,
    tx = !1,
    tk = !1,
    tU = {},
    tG = null,
    tF = null,
    tV = !1;
eN.A.hasPermission(eK.iL.AUDIO, { showAuthorizationError: !1 }),
    eN.A.hasPermission(eK.iL.CAMERA, { showAuthorizationError: !1 });
let tB = new Set(),
    tH = !1,
    tj = new Set(),
    tY = {},
    tW = null,
    tK = null,
    t$ = !0,
    tz = !1,
    tq = new b.Ep(),
    tX = !1,
    tZ = !1,
    tQ = !1,
    tJ = !1,
    t0 = {};
function t1(e) {
    return (function (e) {
        let { location: t } = e;
        return ei.getConfig({ location: t });
    })({ location: e }).hdrCaptureMode;
}
async function t2() {
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
function t3() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT,
        t = tt[e];
    return null == t && ((t = e7()), (tt[e] = t)), t;
}
function t6() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT,
        t = t3(e),
        n = e8[t.activeInputProfile ?? eq.m.CUSTOM],
        i = nv() ? t0 : e9,
        r = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}), ...(i.modeOptions ?? {}) };
    if (
        (null == r.vadDuringPreProcess &&
            (r.vadDuringPreProcess = (function (e) {
                let { location: t, disable: n = !1 } = e;
                return n ? ef.definition.defaultConfig : ef.getConfig({ location: t });
            })({ location: "getSettings" }).enabled),
        (null == r.vadKrispActivationThreshold && !0 === n.automaticGainControl) || !0 === t.automaticGainControl)
    ) {
        let e = $({ location: "getSettings" });
        null != e.vadKrispActivationThreshold && (r.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return { ...t, ...n, ...i, modeOptions: r };
}
function t4(e) {
    let t = t6(e.context),
        n = t.mode;
    e.context === eX.x.DEFAULT && (0, e_.N)(!1, !1);
    let { showPTTSpeakingIndicator: i } = eP.A.getConfig({ location: "setInputMode" }),
        r = i && n === eO.TBI.PUSH_TO_TALK;
    e.setInputMode(n, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: !!r || t.modeOptions.autoThreshold,
        vadUseKrisp: (!!r || t.modeOptions.vadUseKrisp) && nv(),
        vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? 0.5,
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        vadDuringPreProcess: t.modeOptions.vadDuringPreProcess ?? !1,
        pttReleaseDelay: Math.round(t.modeOptions.delay),
    });
}
function t5(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eX.Hz;
    return T().clamp(e, 0, t);
}
function t7(e) {
    let t = t6(e.context),
        n = !ti || t.mute || t.deaf;
    e.context === eX.x.DEFAULT
        ? (n = n || t_ || th || tf || !eN.A.didHavePermission(eK.iL.AUDIO))
        : e.context === eX.x.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eX.x.DEFAULT && M.A.updateNativeMute();
}
function t8() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tE,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
        n = s;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, E.isWindows)()
                ? w.c1(n.desktopSource.soundshareId)
                : null != n.desktopSource.sourcePid && t6().videoHook && w.c1(n.desktopSource.sourcePid),
            te.setGoLiveSource(null, ts)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            te.setGoLiveSource(null, ts),
        tE || e)
    ) {
        let t = t6().videoDeviceId;
        tE && t === eX.dx && tg === eX.dx && tm !== eX.qe ? (t = tm) : (tg = t),
            (tm = (tE = e) ? np(tc, t) : eX.qe),
            te.setVideoInputDevice(tm);
    }
    if (((s = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = t1("MediaEngineStore go live"),
                r = t6().videoHook,
                s = na(),
                a = s ? ((0, E.isWindows)() && v().satisfies(L.A?.os.release, eo.fG) ? eo.zl : eo.eg) : 0,
                o = !1;
            (0, E.isWindows)() &&
                a >= eo.zl &&
                (o =
                    !0 === tK
                        ? eA.getConfig({ location: "updateVideo" }).enabled
                        : eg.getConfig({ location: "updateVideo" }).enabled);
            let l = !r || !ee.getConfig({ location: "updateVideo" }).enabled,
                u = r && eE.getConfig({ location: "updateVideo" }).enabled;
            te.setGoLiveSource(
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
                        allowScreenCaptureKit: no(),
                        videoHookStaleFrameTimeoutMs: 500,
                        graphicsCaptureStaleFrameTimeoutMs: e1,
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
                ts,
            );
        }
        null != t.cameraSource &&
            te.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: t.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: !1 === t.cameraSource.sound ? "" : t.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                ts,
            );
    }
}
function t9(e) {
    switch (e) {
        case eX.CO.KRISP_CPU_OVERUSE:
            return F.B6.KrispCpuOveruse;
        case eX.CO.KRISP_FAILED:
            return F.B6.KrispFailed;
        case eX.CO.KRISP_VAD_CPU_OVERUSE:
            return F.B6.KrispVadCpuOveruse;
        case eX.CO.KRISP_INIT_ERROR:
            return F.B6.KrispInitError;
        case eX.CO.KRISP_INIT_ERROR_NATIVE:
            return F.B6.KrispInitErrorNative;
        case eX.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED:
            return F.B6.KrispInitErrorSse4NotSupported;
        case eX.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED:
            return F.B6.KrispInitErrorAvx2NotSupported;
        case eX.CO.KRISP_INIT_ERROR_UNSIGNED:
            return F.B6.KrispInitErrorUnsigned;
        case eX.CO.KRISP_INIT_ERROR_GLOBAL_INIT:
            return F.B6.KrispInitErrorGlobalInit;
        case eX.CO.KRISP_INIT_ERROR_WEIGHT_8K:
            return F.B6.KrispInitErrorWeight8k;
        case eX.CO.KRISP_INIT_ERROR_WEIGHT_16K:
            return F.B6.KrispInitErrorWeight16k;
        case eX.CO.KRISP_INIT_ERROR_WEIGHT_32K:
            return F.B6.KrispInitErrorWeight32k;
        case eX.CO.KRISP_INIT_ERROR_WEIGHT_VAD:
            return F.B6.KrispInitErrorWeightVad;
        default:
            return;
    }
}
let ne = new Set([
    eX.CO.KRISP_INIT_ERROR,
    eX.CO.KRISP_INIT_ERROR_NATIVE,
    eX.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED,
    eX.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED,
    eX.CO.KRISP_INIT_ERROR_UNSIGNED,
    eX.CO.KRISP_INIT_ERROR_GLOBAL_INIT,
    eX.CO.KRISP_INIT_ERROR_WEIGHT_8K,
    eX.CO.KRISP_INIT_ERROR_WEIGHT_16K,
    eX.CO.KRISP_INIT_ERROR_WEIGHT_32K,
    eX.CO.KRISP_INIT_ERROR_WEIGHT_VAD,
]);
function nt(e) {
    if (
        (eQ.warn(`Voice processing error: ${e}`),
        (0, F.QW)({ type: F.iy.NOISE_CANCELLER_ERROR, underlyingError: t9(e) }),
        eR.default.track(eO.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
        ne.has(e))
    ) {
        tD = !0;
        return;
    }
    e === eX.CO.KRISP_VAD_CPU_OVERUSE
        ? D.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e })
        : ((tP = !0), D.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e }));
}
function nn(e) {
    let t = $({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function ni(e, t) {
    e.setAutomaticGainControl(nn(t));
}
function nr(e, t) {
    let n = (0, eC.A)(t, i.getSystemMicrophoneMode());
    n !== t && eQ.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: r } = $({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(r);
}
function ns(e) {
    let t = t6(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eB.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eB.A.hasNoiseSuppression(n) || t.noiseSuppression),
        ni(e, eB.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        nr(e, t.noiseCancellation),
        e.setSpatialAudioEnabled(t.audioMixerSettings.enabled),
        (0, E.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function na() {
    return (0, E.isWindows)() && v().satisfies(L.A?.os.release, eo.yg);
}
function no() {
    return (0, E.isMac)() && te.supports(eX.O5.SCREEN_CAPTURE_KIT) && v().satisfies(L.A?.os.release, eo.e);
}
function nl() {
    return (
        (0, E.isWindows)() &&
        te.supports(eX.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        te.supports(eX.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nu() {
    return te.supports(eX.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function nc(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eX.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = t3(t);
    return Object.assign(i, e), !__OVERLAY__ && n && O.w.set(eJ, tt), i;
}
function nd() {
    let e = t6();
    nm(e.inputDeviceId),
        te.setAudioOutputDevice(e.outputDeviceId),
        t8(),
        te.setInputVolume(e.inputVolume),
        te.setOutputVolume(e.outputVolume),
        te.setAecDump(e.aecDumpEnabled),
        te.setSidechainCompression(e.sidechainCompression),
        te.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        te.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        (0, E.isLinux)() && m.Ay?.setOpenH264Enabled?.(e.openH264Enabled),
        te.setAudioMixerOptions(e.audioMixerSettings);
}
function n_() {
    ti || te.enable().then(() => D.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nh(e) {
    return { id: eX.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
}
function nf(e, t) {
    if (0 === e.length) {
        let e = nh(t);
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
function np(e, t) {
    let n = e[t] ?? e[eX.dx] ?? T()(e).values().first();
    return null != n ? n.id : t;
}
function nE(e) {
    if (!(0, E.isWindows)() || !Z.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects) return;
    let t = tl[e];
    t?.guid != null && eD(t.guid, e, te);
}
function nm(e) {
    te.setAudioInputDevice(e), nE(e);
}
function ng(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nA() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = ew.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let i = n === ez.W.USER ? eX.x.DEFAULT : eX.x.STREAM,
            r = i === eX.x.STREAM ? eX.Cn : eX.Hz,
            s = t[n] ?? {},
            { localMutes: a, localVolumes: o } = t6(i);
        for (let [e, t] of Object.entries(s))
            null == (0, eM.tM)(i, e) &&
                (t.muted ? (a[e] = !0) : delete a[e],
                t.volume !== r ? (o[e] = t.volume) : delete o[e],
                te.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (e)
            for (let e of new Set([...Object.keys(a), ...Object.keys(o)]))
                null == s[e] &&
                    (delete a[e],
                    delete o[e],
                    te.eachConnection((t) => {
                        t.setLocalVolume(e, r), t.setLocalMute(e, !1);
                    }, i));
        nc({ localMutes: a, localVolumes: o }, i);
    }
}
function nI(e, t) {
    if (t) {
        let { soundshareId: t, soundshareSession: s } = (function (e) {
            if (null == i)
                return (
                    eQ.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
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
    return null != e && t6().videoHook && w.GH(e), { soundshareId: null, soundshareSession: null };
}
function nT() {
    let e = eX.x.DEFAULT,
        { videoToggleStateMap: t } = t6(e);
    for (let [e, n] of Object.entries(t)) n === eO.bb8.AUTO_PROBING && delete t[e];
    nc({ videoToggleStateMap: t }, e, !1);
}
function nS(e) {
    let t = t6(),
        n = te.getAudioSubsystem(),
        r = te.getAudioLayer(),
        s = np(tl, t.inputDeviceId),
        a = tl[s]?.name,
        o = (0, eC.A)(t.noiseCancellation, i.getSystemMicrophoneMode());
    eR.default.track(eO.HAw.VOICE_PROCESSING, {
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
function ny() {
    let e = t6(),
        t = tj.size > 0,
        n = e.inputDeviceId,
        i = eB.A.hasEchoCancellation(n) || e.echoCancellation,
        r = eB.A.hasNoiseSuppression(n) || e.noiseSuppression,
        s = nn(eB.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        a = e.noiseCancellation;
    te.setLoopback(t, {
        echoCancellation: i,
        echoCancellationPreEcho: !t,
        noiseSuppression: r,
        automaticGainControlConfig: s,
        noiseCancellation: a,
    });
}
async function nN() {
    if (!te.supports(eX.O5.VAAPI) || window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let e = await window.DiscordNative.processUtils.getSystemInfo();
    (e.electronGPUInfo?.gpuDevice ?? []).some((e) => 4098 === e.vendorId) &&
        ((tQ = !0), (tZ = te.supports(eX.O5.GAMESCOPE_CAPTURE)));
}
function nv() {
    return (tb || !1) && !tD;
}
async function nC() {
    try {
        await m.Ay.ensureModule("discord_krisp");
        let e = m.Ay.requireModule("discord_krisp");
        (tb = !0),
            (c = e.getSdkVersion?.()),
            (d = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (tL = e), i.emitChange();
            }),
            i.emitChange(),
            await m.Ay.ensureModule("discord_voice");
        let t = m.Ay.requireModule("discord_voice");
        t.setupKrispPath?.();
    } catch (t) {
        eQ.warn(`Failed to load Krisp module: ${t.message}`), eU.A.captureException(t);
        let e = eX.CO.KRISP_INIT_ERROR;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eX.CO.KRISP_INIT_ERROR : n;
        }
        (0, F.QW)({ type: F.iy.NOISE_CANCELLER_ERROR, underlyingError: t9(e) }),
            eR.default.track(eO.HAw.VOICE_PROCESSING, { noise_canceller_error: e });
    } finally {
        tO = !1;
    }
}
async function nR() {
    try {
        let e,
            t = "",
            n = !1,
            i = URL.parse(e4);
        if (null === i) return void eQ.log("OpenH264 URL ", i, " is invalid");
        let r = i.pathname.split("/"),
            s = r[r.length - 1].replace(".bz2", "");
        try {
            let t = await m.Ay.downloadOpenH264(
                e4,
                s,
                "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f",
                (e) => {
                    eQ.log("OpenH264 download status", e);
                },
            );
            eQ.log("OpenH264 is ready", t), (n = t.fetchedFromNetwork), (e = !0);
        } catch (n) {
            eQ.error("OpenH264 download failed", n), (t = n.message), (e = !1);
        }
        if (
            (eR.default.track(eO.HAw.VIDEO_OPENH264_DOWNLOADED, {
                success: e,
                fetched_from_network: n,
                error_message: t,
            }),
            e)
        ) {
            let e = await m.Ay.cleanupUnusedOpenH264Files([s]);
            eQ.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        eQ.error("OpenH264 download failed", e);
    }
}
function nO(e) {
    e === eX.rB.AUTOMATIC
        ? (nc({ automaticAudioSubsystem: !0 }), nb())
        : (nc({ automaticAudioSubsystem: !1 }), te.setAudioSubsystem(e));
}
function nb() {
    te.queueAudioSubsystem(eX.rB.EXPERIMENTAL);
}
function nD(e) {
    let { section: t } = e;
    return t === eO.nc_.VOICE && n_(), !1;
}
class nL extends C.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        let e;
        if (
            (td.start(e3, () => {
                eQ.error("Device enumeration timed out"), eR.default.track(eO.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
            }),
            te.on(R.bg.Connection, (e) => {
                let t;
                ny(),
                    t4(e),
                    t7(e),
                    ns(e),
                    e.context === eX.x.STREAM &&
                        e.setAv1CodecBitrateFunc(() => z.getConfig({ location: "MediaEngineStore" }).bitrate);
                let n = t6();
                e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers),
                    e.setQoS(n.qos),
                    (0, E.isWindows)()
                        ? (e.setExperimentFlag(eX.fd.H265_HARDWARE_ONLY, !0),
                          (null != tF
                              ? tF
                              : "u" > typeof window
                                ? (tF = t2().then((e) => ((tG = e), e)))
                                : Promise.resolve(!1)
                          ).then((t) => {
                              e.setExperimentFlag(eX.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                          }))
                        : (0, E.isMac)() && e.setExperimentFlag(eX.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                    (0, E.isLinux)() && n.openH264Enabled && e.setExperimentFlag(eX.fd.USE_LIBOPENH264_DECODER, !0),
                    (function (e) {
                        let { location: t, disable: n = !1 } = e;
                        return n ? ed.definition.defaultConfig : ed.getConfig({ location: t });
                    })({ location: "setupMediaEngine" }).enabled &&
                        e.setExperimentFlag(eX.fd.LOW_LATENCY_RATE_CONTROL, !0),
                    e.setExperimentFlag(eX.fd.RESET_DECODER_ON_ERRORS, !0),
                    e.setExperimentFlag(eX.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
                let { swallowVolumeOnlySpeakingEvents: r } = P.A.getConfig({ location: "MediaEngineStore" });
                if (
                    (r && e.setExperimentFlag(eX.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === eX.x.STREAM)
                ) {
                    let t = ng(tu);
                    e.setSoundshareDiscardRearChannels(t);
                }
                if ((0, E.isWindows)())
                    e.setExperimentFlag(eX.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(eX.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eX.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                else if ((0, E.isMac)())
                    e.setExperimentFlag(eX.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eX.fd.SIGNAL_AV1_HARDWARE_DECODE, !0),
                        e.setExperimentFlag(
                            eX.fd.H265_DISABLE_ENCODE,
                            !(
                                window?.DiscordNative?.os.arch === "arm64" &&
                                v().satisfies(window?.DiscordNative?.os.release, eX.Dk)
                            ),
                        );
                else if ((0, E.isLinux)()) e.setExperimentFlag(eX.fd.SIGNAL_AV1_DECODE, !0);
                else if ((0, E.isIOS)())
                    e.setExperimentFlag(eX.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eX.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                else if ((0, E.isAndroid)() && !1) {
                    let { enabled: t } = q.getConfig({ location: "MediaEngineStore" });
                    t &&
                        (e.setExperimentFlag(eX.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eX.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
                }
                if ((0, E.isWeb)()) {
                    let { enabled: t } = Q.getConfig({ location: "MediaEngineStore" });
                    e.setExperimentFlag(eX.fd.BROWSER_HEVC, t);
                }
                for (let r of ((0, E.isWindows)() &&
                    tW?.startsWith("AMD") &&
                    eT("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eX.fd.WMF_GPU_ENCODE, !0),
                (0, E.isWindows)() &&
                    tW?.startsWith("Intel") &&
                    eS.getConfig({ location: "MediaEngineStore" }).enabled &&
                    e.setExperimentFlag(eX.fd.WMF_GPU_ENCODE, !0),
                (0, E.isWindows)() &&
                    tW?.startsWith("Qualcomm") &&
                    eT("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eX.fd.WMF_GPU_ENCODE, !0),
                te.setHasFullbandPerformance(null === (t = (0, G.A)()) || t >= 31),
                e.setRemoteAudioHistory(1e3),
                (0, k.A)(i) && e.setClipsKeyFrameInterval(eX.X1),
                (n = t6(e.context)),
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
                e.on(R.yq.Speaking, (t, n, i, r) => {
                    D.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: r });
                }),
                    e.context === eX.x.DEFAULT &&
                        ((tI = !1),
                        e.on(R.yq.SpeakingWhileMuted, () => {
                            let e = !tI;
                            (tI = !0),
                                e && i.emitChange(),
                                tT.start(e2, () => {
                                    (tI = !1), i.emitChange();
                                });
                        })),
                    e.on(R.yq.DesktopSourceEnd, (t, n) => {
                        D.h.dispatch({
                            type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                            settings: { context: e.context },
                            endReason: t,
                            errorCode: n,
                        });
                    }),
                    e.on(R.yq.InteractionRequired, (e) => {
                        D.h.dispatch({ type: "MEDIA_ENGINE_INTERACTION_REQUIRED", required: e });
                    }),
                    e.on(R.yq.VideoHookInitialize, (e, t, n, i, r, a) => {
                        s?.desktopSource != null &&
                            eR.default.track(eO.HAw.VIDEOHOOK_INITIALIZED, {
                                backend: e,
                                format: t,
                                framebuffer_format: n,
                                sample_count: i,
                                success: r,
                                reinitialization: a,
                                ...(0, j.A)(s?.desktopSource),
                            });
                    }),
                    e.on(R.yq.NoiseCancellationError, nt),
                    e.on(R.yq.VoiceActivityDetectorError, nt),
                    e.on(R.yq.SdpError, (e, t, n, i) => {
                        eR.default.track(eO.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: i });
                    }),
                    e.on(R.yq.VideoState, (t) => {
                        D.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                    }),
                    e.setBitRate(eV.A.bitrate),
                    e.applyVideoQualityMode(eW.A.mode),
                    (0, E.isWindows)() &&
                        te.supports(eX.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                        te.setAsyncVideoInputDeviceInit(!0);
            }),
            te.on(R.bg.DeviceChange, (e, t, n) => {
                td.stop(),
                    D.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
            }),
            te.on(R.bg.VolumeChange, (e, t) => {
                D.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
            }),
            te.on(R.bg.DesktopSourceEnd, (e, t) => {
                D.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
            }),
            te.on(R.bg.AudioPermission, (e) => {
                (tV = !0), D.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
            }),
            te.on(R.bg.VideoPermission, (e) => {
                D.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
            }),
            te.on(R.bg.WatchdogTimeout, async () => {
                let e;
                if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                    try {
                        await ex.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                    } catch (t) {
                        "number" == typeof t.status && (e = t.status);
                    }
                eQ.warn(`Watchdog timeout, report submission status: ${e ?? 200}`);
                let t =
                    em.getConfig({ location: "watchdog_timeout" }).enabled && null != L.A.processUtils.setCrashReason;
                try {
                    await eR.default.track(
                        eO.HAw.VOICE_WATCHDOG_TIMEOUT,
                        { minidump_submission_error: e, will_restart: t },
                        { flush: !0 },
                    );
                } catch (e) {
                    eQ.error("Failed to flush voice watchdog timeout analytics event", e);
                }
                t &&
                    (eQ.info("Relaunching app due to voice watchdog timeout"),
                    await L.A.processUtils.setCrashReason("voice-watchdog-timeout"),
                    O.w.set("discord_watchdog_restart_timestamp", Date.now().toString()),
                    L.A.app.relaunch());
            }),
            te.on(R.bg.VideoInputInitialized, (e) => {
                eR.default.track(eO.HAw.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired
                        ? null
                        : Math.round(e.timeToFirstFrame * ek.A.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy,
                    media_session_id: ej.A.getMediaSessionId(),
                    rtc_connection_id: ej.A.getRTCConnectionId(),
                });
            }),
            te.on(R.bg.AudioInputInitialized, (e) => {
                eR.default.track(eO.HAw.AUDIO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_initialized_ms: Math.round(e.timeToInitialized * ek.A.Millis.SECOND),
                    rtc_connection_id: ej.A.getRTCConnectionId(),
                });
            }),
            te.on(R.bg.ClipsRecordingRestartNeeded, () => {
                D.h.dispatch({ type: "CLIPS_RESTART" });
            }),
            te.on(R.bg.ClipsInitFailure, (e, t) => {
                D.h.wait(() => {
                    D.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t });
                });
            }),
            te.on(R.bg.ClipsRecordingEnded, (e, t) => {
                a?.desktopSource?.id === e &&
                    (null != t && s?.desktopSource?.soundshareId !== t && w.c1(t), (a = null));
            }),
            te.on(R.bg.NativeScreenSharePickerUpdate, (e, t) => {
                D.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
            }),
            te.on(R.bg.NativeScreenSharePickerCancel, (e) => {
                D.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
            }),
            te.on(R.bg.NativeScreenSharePickerError, (e) => {
                D.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
            }),
            te.on(R.bg.AudioDeviceModuleError, (e, t, n) => {
                eR.default.track(eO.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
            }),
            te.on(R.bg.VideoCodecError, (e) => {
                let t = "encode" === e.mode ? F.iy.VIDEO_ENCODE_ERROR : F.iy.VIDEO_DECODE_ERROR,
                    n = { videoCodec: e.codecStandard, errorMessage: e.message };
                (0, F.QW)(
                    t === F.iy.VIDEO_ENCODE_ERROR
                        ? { type: t, ...n, videoEncoder: e.implName }
                        : { type: t, ...n, videoDecoder: e.implName },
                );
            }),
            te.on(R.bg.ConnectionStats, (e) => {
                D.h.dispatch({
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
            te.on(R.bg.VoiceProcessingError, nt),
            te.on(R.bg.VoiceQueueMetrics, (e) => {
                let t = nw(e);
                null !== t && eR.default.track(eO.HAw.VOICE_QUEUE_METRICS, t);
            }),
            te.setOnVideoContainerResized((e, t, n) => {
                D.h.wait(() =>
                    D.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
                );
            }),
            nN(),
            o.reset(),
            (0, eL.w)().then((e) => {
                null != e && ((tW = e.gpu_brand), (tK = e.has_intel_hybrid_igpu));
            }),
            te.on(R.bg.SystemMicrophoneModeChange, (e) => {
                (h = e), te.eachConnection(ns), i.emitChange();
            }),
            null != (e = O.w.get("audio")) && (O.w.set(eJ, { [eX.x.DEFAULT]: e }), O.w.remove("audio")),
            (tt = O.w.get(eJ) ?? {}),
            T().each(tt, (e) => {
                T().defaultsDeep(e, e7()),
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
                    te.supports(eX.O5.SIDECHAIN_COMPRESSION) &&
                        e.sidechainCompressionSettingVersion < 1 &&
                        ((e.sidechainCompressionSettingVersion = 1), (e.sidechainCompression = !0)),
                    e.audioMixerSettingsVersion < 1 &&
                        ((e.audioMixerSettingsVersion = 1), (e.audioMixerSettings = { ...e$.b })),
                    (0, E.isWeb)()
                        ? 1 !== e.ncUseKrispjsSettingVersion &&
                          ((e.ncUseKrispjsSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                        : 1 !== e.ncUseKrispSettingVersion &&
                          ((e.ncUseKrispSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
            }),
            nd(),
            ((0, E.isWindows)() || (0, E.isLinux)() || (0, E.isMac)()) && !__OVERLAY__ && !tO && !tb
                ? ((tO = !0), nC())
                : (0, E.isWeb)() && te.supports(eX.O5.NOISE_CANCELLATION)
                  ? ((tb = !0), i.emitChange())
                  : (0, E.isWeb)() && nc({ noiseCancellation: !1 }),
            (0, E.isLinux)() && nR(),
            nT(),
            (0, E.isDesktop)() && E.isPlatformEmbedded && !tJ)
        ) {
            tJ = !0;
            let e = async () => {
                let t = await new Promise((e) => {
                    m.Ay.pollQueueMetrics((t) => {
                        e(t);
                    });
                });
                t.periodMs = eX.tl;
                let n = nw(t);
                null !== n && eR.default.track(eO.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, eX.tl);
            };
            setTimeout(e, eX.tl);
        }
        (0, E.isWindows)() &&
            E.isPlatformEmbedded &&
            null === to &&
            te
                .getCodecSurvey()
                .then((e) => {
                    try {
                        let t = JSON.parse(e);
                        if (null == t || null == t.available_video_decoders)
                            throw Error("decoder survey is not available");
                        to = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                    } catch (e) {
                        eQ.error("Failed to parse codec survey", e), (to = !1);
                    }
                })
                .catch((e) => {
                    eQ.error("Failed to get codec survey", e), (to = !1);
                })
                .finally(() => {
                    D.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
                }),
            (0, E.isAndroid)(),
            (tY = {
                [eX.O5.VIDEO]: te.supports(eX.O5.VIDEO),
                [eX.O5.DESKTOP_CAPTURE]: te.supports(eX.O5.DESKTOP_CAPTURE),
                [eX.O5.HYBRID_VIDEO]: te.supports(eX.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eF.default, eV.A, eB.A, eH.A, x.Ay, V.A, ej.A, H.Ay, ew.A, eY.default, eW.A);
    }
    supports(e) {
        return te.supports(e);
    }
    supportsInApp(e) {
        return tY[e] || te.supports(e);
    }
    isSupported() {
        return te.supported();
    }
    isNoiseSuppressionSupported() {
        return te.supports(eX.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return nv();
    }
    isNoiseCancellationError() {
        return tP;
    }
    isAutomaticGainControlSupported() {
        return te.supports(eX.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nu() && (te.supports(eX.O5.LEGACY_AUDIO_SUBSYSTEM) || te.supports(eX.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return te.supports(eX.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === te.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return nv();
    }
    isAecDumpSupported() {
        return te.supports(eX.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return te.supports(eX.O5.VIDEO) && te.supports(eX.O5.SIMULCAST);
    }
    getAecDump() {
        return t6().aecDumpEnabled;
    }
    getMediaEngine() {
        return te;
    }
    getVideoComponent() {
        return te.Video;
    }
    getCameraComponent() {
        return te.Camera;
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
        return this.isSelfMute() || t_;
    }
    isDeaf() {
        return this.isSelfDeaf() || tp;
    }
    getAudioMixerSettings() {
        return t6().audioMixerSettings;
    }
    hasContext(e) {
        return null != tt[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT;
        return e === eX.x.DEFAULT && th;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT;
        return (
            !this.isEnabled() ||
            t6(e).mute ||
            !eN.A.didHavePermission(eK.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eX.x.DEFAULT && tf)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tA;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tA = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT,
            t = tz && "voice_isolation" !== this.getSystemMicrophoneMode() && t6(e).mode === eO.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (eB.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return t$;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT;
        return !this.isSupported() || t6(e).deaf;
    }
    isVideoEnabled() {
        return tE && ty;
    }
    isVideoAvailable() {
        return Object.values(tc).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return ty;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.STREAM;
        return ts === e && null != s;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.STREAM;
        return ts === e && null != s && s.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eX.x.DEFAULT;
        return e !== eF.default.getId() && (t6(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return te.supports(eX.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eX.x.DEFAULT;
        return t6(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eX.x.DEFAULT;
        return t6(t).videoToggleStateMap[e] ?? eO.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eX.x.DEFAULT;
        return t === eX.x.DEFAULT && tB.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT;
        return e === eX.x.DEFAULT && tB.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tx;
    }
    isNativeAudioPermissionReady() {
        return tV;
    }
    getGoLiveSource() {
        return s;
    }
    getGoLiveContext() {
        return ts;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return ta;
    }
    isH264MfDecodeAvailable() {
        return to;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eX.x.DEFAULT,
            n = t6(t).localPans[e];
        return null != n ? n : e0;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eX.x.DEFAULT,
            n = t === eX.x.STREAM ? eX.Cn : eX.Hz,
            i = t6(t).localVolumes[e];
        return null != i ? i : n;
    }
    getInputVolume() {
        return t6().inputVolume;
    }
    getOutputVolume() {
        return t6().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT;
        return t6(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT;
        return t6(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            T().each(tt, (t, n) => {
                let {
                    mode: i,
                    modeOptions: { shortcut: r },
                } = t;
                i === eO.TBI.PUSH_TO_TALK && tn.has(n) && (e[n] = r);
            }),
            e
        );
    }
    getInputDeviceId() {
        return np(tl, t6().inputDeviceId);
    }
    getOutputDeviceId() {
        return np(tu, t6().outputDeviceId);
    }
    getVideoDeviceId() {
        return np(tc, t6().videoDeviceId);
    }
    getInputDevices() {
        return tl;
    }
    getOutputDevices() {
        return tu;
    }
    getVideoDevices() {
        return tc;
    }
    getEchoCancellation() {
        let e = t6();
        return eB.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return te.supports(eX.O5.SIDECHAIN_COMPRESSION) && t6().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return t6().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return t6().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tG && tG;
    }
    getOpenH264Enabled() {
        return (0, E.isLinux)() && t6().openH264Enabled;
    }
    getLoopback() {
        return tj.size > 0;
    }
    getLoopbackReasons() {
        return tj;
    }
    getNoiseSuppression() {
        let e = t6();
        return eB.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = t6();
        return eB.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return t6().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return t6().noiseCancellation;
    }
    getHardwareEncoding() {
        return !0;
    }
    getEnableSilenceWarning() {
        return t6().silenceWarning;
    }
    getDebugLogging() {
        return te.getDebugLogging();
    }
    getQoS() {
        return t6().qos;
    }
    getAttenuation() {
        return t6().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return t6().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return t6().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return nl() && t6().automaticAudioSubsystem ? eX.rB.AUTOMATIC : te.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return te.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return t6().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eq.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT;
        return t6(e);
    }
    getState() {
        return {
            settingsByContext: tt,
            inputDevices: tl,
            outputDevices: tu,
            appSupported: tY,
            krispModuleLoaded: tb,
            krispFatalError: tD,
            krispVersion: c,
            krispSuppressionLevel: d,
            goLiveSource: s,
            goLiveContext: ts,
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
        return tv;
    }
    getInputDeviceOSMuted() {
        return l;
    }
    getInputDeviceOSVolume() {
        return u;
    }
    getPacketDelay() {
        return E.isPlatformEmbedded || this.getMode() !== eO.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        te.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return tr;
    }
    getVideoHook() {
        return t6().videoHook;
    }
    supportsVideoHook() {
        return te.supports(eX.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = t6().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return te.supports(eX.O5.EXPERIMENTAL_SOUNDSHARE) && v().satisfies(L.A?.os.release, eo.$x);
    }
    supportsHookSoundshare() {
        return (0, E.isWindows)() && te.supports(eX.O5.SOUNDSHARE) && v().satisfies(L.A?.os.release, eo.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = t6().useSystemScreensharePicker,
            n = (0, E.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return te.supports(eX.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return tQ;
    }
    getVideoEncoderExperiments(e, t) {
        let n = ["unk"];
        if (
            (n.push("nvNewPresets"),
            e === eX.x.STREAM ? n.push("nvRelaxRc=250") : n.push("nvRelaxRc=75"),
            this.getUseVaapiEncoder() && n.push("vaapi"),
            e === eX.x.STREAM && "streamer" === t && (0, E.isWindows)())
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
        return tZ;
    }
    getSpeakingWhileMuted() {
        return tI;
    }
    getKrispModelOverride() {
        return _;
    }
    getKrispModels() {
        return tL;
    }
    getKrispVadActivationThreshold() {
        return t6().modeOptions.vadKrispActivationThreshold ?? 0.5;
    }
    hasActiveCallKitCall() {
        return tX;
    }
    setHasActiveCallKitCall(e) {
        tX = e;
    }
    supportsScreenSoundshare() {
        return (0, E.isMac)()
            ? te.supports(eX.O5.SOUNDSHARE) && v().satisfies(L.A?.os.release, eo.P$) && no()
            : (0, E.isWindows)()
              ? te.supports(eX.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, E.isLinux)() && te.supports(eX.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, E.isWindows)()) {
            if (this.getBypassSystemInputProcessing()) return;
            return tU[this.getInputDeviceId()]?.active?.find((e) => "deep_noise_suppression" === e);
        }
        if ((0, E.isMac)() || (0, E.isIOS)()) return h;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT,
            t = this.supports(eX.O5.VIDEO)
                ? [{ rid: "100", type: e === eX.x.DEFAULT ? eX.mI.VIDEO : eX.mI.SCREEN, quality: eX.Y4 }]
                : [];
        return (
            this.isSimulcastSupported() &&
                e === eX.x.DEFAULT &&
                J.getConfig({ location: "MediaEngineStore.getVideoStreamParameters" }).enableSimulcast &&
                t.push({ rid: "50", type: eX.mI.VIDEO, quality: eX.Cl }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: (0, E.isWeb)() };
        return te.fetchAsyncResources(e);
    }
    startDavePreload() {
        !tk &&
            ((tk = !0),
            (0, E.isWeb)() &&
                te.fetchAsyncResources({ fetchDave: !0 }).catch((e) => {
                    eQ.warn("DAVE preload failed:", e), eU.A.captureException(e);
                }));
    }
    getSupportedSecureFramesProtocolVersion() {
        return te.getSupportedSecureFramesProtocolVersion();
    }
    hasClipsSource() {
        return null != a;
    }
    getGpuBrand() {
        return tW;
    }
}
function nw(e) {
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
(i = new nL(D.h, {
    VOICE_CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n, currentVoiceChannelId: i, video: r } = e;
        if ((i !== n && t8(r, null), null != t || null == n)) {
            tR = !1;
            return;
        }
        if (tR) return;
        tR = !0;
        let s = t6();
        (s.mute || s.deaf) && (nc({ deaf: !1, mute: !1 }), te.eachConnection(t7));
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (r === t.sessionId) {
                (t_ = t.mute || t.suppress), (tp = t.deaf), te.eachConnection(t7);
                let e = null != t.guildId && null != t.channelId && null != tM && tM !== t.channelId,
                    n = !tR && null == t.channelId;
                return t8(!e && !n && tE), (tM = t.channelId), !0;
            }
            return __OVERLAY__ || t.userId !== eF.default.getId() || null != ej.A.getChannelId() || t8(!1, null), e;
        }, !1);
    },
    CONNECTION_OPEN: function (e) {
        (r = e.sessionId), (t_ = !1), (tp = !1);
        let t = t6();
        nl() && (nu() ? nO(eX.rB.AUTOMATIC) : t.automaticAudioSubsystem && nb()),
            te.supports(eX.O5.OFFLOAD_ADM_CONTROLS) && te.setOffloadAdmControls(!0),
            (0, E.isIOS)() &&
                er.getConfig({ location: "handleConnectionOpen" }).enabled &&
                te.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
            nE(t.inputDeviceId),
            nA();
    },
    CONNECTION_CLOSED: function () {
        r = null;
    },
    POST_CONNECTION_OPEN: function () {
        return (0, E.isWeb)() && i.startDavePreload(), !1;
    },
    RTC_CONNECTION_STATE: function (e) {
        switch (e.state) {
            case eO.S7L.CONNECTING:
                n_();
                break;
            case eO.S7L.RTC_CONNECTING:
                (tv = !1), (l = void 0), (u = void 0), (tN = !1), (tz = !1), tq.stop(), tC.stop(), o.reset();
                break;
            case eO.S7L.RTC_CONNECTED:
                t8();
                break;
            case eO.S7L.DISCONNECTED:
                (t0 = {}),
                    (function () {
                        if (0 === tB.size) return;
                        let e = eX.x.DEFAULT,
                            { disabledLocalVideos: t } = t6(e);
                        tB.forEach((n) => {
                            A()(t[n], "If you are auto-disabled, then you are also disabled."),
                                delete t[n],
                                te.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
                        }),
                            tB.clear(),
                            nc({ disabledLocalVideos: t }, e, !1);
                    })(),
                    nT();
        }
    },
    AUDIO_SET_TEMPORARY_SELF_MUTE: function (e) {
        let { mute: t } = e;
        (th = t), te.eachConnection(t7);
    },
    AUDIO_TOGGLE_SELF_MUTE: function (e) {
        let { context: t, playSoundEffect: n } = e,
            { mute: i, deaf: r } = t6(t);
        if (t === eX.x.DEFAULT && (eN.A.requestPermission(eK.iL.AUDIO), tf)) return !1;
        (i = !r && !i) || (r = !1), n || (tA = !0), nc({ mute: i, deaf: r }, t), te.eachConnection(t7);
    },
    AUDIO_SET_SELF_MUTE: function (e) {
        let { context: t, mute: n, playSoundEffect: i } = e;
        nc({ mute: n }, t), i || (tA = !0), te.eachConnection(t7);
    },
    AUDIO_TOGGLE_SELF_DEAF: function (e) {
        let { context: t } = e;
        nc({ deaf: !t6(t).deaf }, t), te.eachConnection(t7);
    },
    AUDIO_TOGGLE_LOCAL_MUTE: function (e) {
        let { context: t, userId: n } = e;
        if (n === eF.default.getId()) return;
        let { localMutes: i } = t6(t);
        i[n] ? delete i[n] : (i[n] = !0),
            nc({ localMutes: i }, t),
            te.eachConnection((e) => e.setLocalMute(n, i[n] || !1), t);
    },
    AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
        let { context: t, userId: n, videoToggleState: i, persist: r, isAutomatic: s } = e;
        A()(!(r && s), "These are not allowed to both be true.");
        let a = i === eO.bb8.DISABLED,
            { disabledLocalVideos: o } = t6(t),
            l = o[n] ?? !1,
            u = tB.has(n),
            c = i === eO.bb8.AUTO_ENABLED || i === eO.bb8.MANUAL_ENABLED;
        eQ.info(`disableVideo=${a} currentlyDisabled=${l} currentlyAutoDisabled=${u}, isVideoShown=${c}`),
            A()(!(u && !l), "If you are auto-disabled, then you are also disabled.");
        let d = a !== l,
            _ = t === eX.x.DEFAULT,
            h = s && d && _,
            f = r && d && _;
        eQ.info(`changed=${d} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${h} isManualToggleByUser=${f}`);
        let { videoToggleStateMap: p } = t6(t);
        if (
            (p[n] === eO.bb8.AUTO_PROBING &&
                i === eO.bb8.AUTO_ENABLED &&
                (0, ey.A)(n, a ? eX.Al.AUTO_DISABLE : eX.Al.AUTO_ENABLE, c),
            (p[n] = i),
            nc({ videoToggleStateMap: p }, t, r),
            i === eO.bb8.AUTO_PROBING
                ? ej.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
                : ej.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
            tH ||
                (eQ.info(`isAutoDisableAllowed=${tH} - disabling VideoHealthManager`),
                ej.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
            h)
        ) {
            if ((!a && !u) || (a && !tH)) return;
            (0, ey.A)(n, a ? eX.Al.AUTO_DISABLE : eX.Al.AUTO_ENABLE, c), a ? tB.add(n) : tB.delete(n);
        } else
            f &&
                (u && !a
                    ? (eQ.info("disallowing auto-disable for this session because of manual override by user"),
                      (tH = !1),
                      ej.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                      (0, ey.A)(n, eX.Al.MANUAL_REENABLE, c))
                    : (0, ey.A)(n, a ? eX.Al.MANUAL_DISABLE : eX.Al.MANUAL_ENABLE, c));
        _ && !a && tB.delete(n),
            a ? (o[n] = !0) : delete o[n],
            nc({ disabledLocalVideos: o }, t, r),
            te.eachConnection((e) => e.setLocalVideoDisabled(n, o[n] ?? !1), t);
    },
    AUDIO_SET_LOCAL_VOLUME: function (e) {
        let { context: t, userId: n, volume: i } = e;
        if (n === eF.default.getId()) return;
        let r = t === eX.x.STREAM ? eX.Cn : eX.Hz,
            { localVolumes: s } = t6(t);
        i === r ? delete s[n] : (s[n] = i),
            nc({ localVolumes: s }, t),
            te.eachConnection((e) => e.setLocalVolume(n, i), t);
    },
    AUDIO_SET_AUDIO_MIXER_SETTINGS: function (e) {
        let { context: t, settings: n } = e;
        nc({ audioMixerSettings: n }, t),
            te.setAudioMixerOptions(n),
            te.eachConnection((e) => e.setSpatialAudioEnabled(n.enabled), eX.x.DEFAULT);
    },
    AUDIO_SET_LOCAL_PAN: function (e) {
        let { context: t, userId: n, left: i, right: r } = e,
            { localPans: s } = t6(t);
        (s[n] = { left: i, right: r }), nc({ localPans: s }, t), te.eachConnection((e) => e.setLocalPan(n, i, r), t);
    },
    AUDIO_SET_MODE: function (e) {
        let { context: t, mode: n, options: i } = e;
        nc({ mode: n, modeOptions: { ...i, updatedAt: Date.now() } }, t), te.eachConnection(t4);
    },
    AUDIO_SET_INPUT_VOLUME: function (e) {
        let { volume: t } = e;
        nc({ inputVolume: t5(t) }), te.setInputVolume(t);
    },
    AUDIO_SET_OUTPUT_VOLUME: function (e) {
        let { volume: t } = e;
        nc({ outputVolume: t }), te.setOutputVolume(t);
    },
    AUDIO_SET_INPUT_DEVICE: function (e) {
        let { id: t } = e;
        (t = np(tl, t)),
            (ta = performance.now()),
            nc({ inputDeviceId: t }),
            nm(t),
            te.eachConnection(ns),
            (l = void 0),
            (u = void 0),
            tq.stop(),
            (tz = !1);
        let { resetSilenceWarningOnDeviceChange: n } = eh.A.getConfig({
            location: "MediaEngineStore.handleSetInputDevice",
        });
        n && ((tN = !1), o.reset());
    },
    AUDIO_SET_OUTPUT_DEVICE: function (e) {
        let { id: t } = e;
        nc({ outputDeviceId: (t = np(tu, t)) }), te.setAudioOutputDevice(t);
    },
    AUDIO_SET_ACTIVE_INPUT_PROFILE: function (e) {
        let { inputProfile: t } = e;
        nc({ activeInputProfile: t });
        let n = t6();
        te.eachConnection((e) => {
            t4(e), ns(e);
        }),
            te.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
            ny();
    },
    AUDIO_SET_ECHO_CANCELLATION: function (e) {
        let t = nc({ echoCancellation: e.enabled });
        te.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), ny(), nS(e.location);
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION: function (e) {
        let t;
        (t = nc({ sidechainCompression: e.enabled })), te.setSidechainCompression(t.sidechainCompression);
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function (e) {
        let t = nc({ sidechainCompressionStrength: e.strength });
        te.setSidechainCompressionStrength(t.sidechainCompressionStrength);
    },
    AUDIO_SET_LOOPBACK: function (e) {
        let { enabled: t, loopbackReason: n } = e;
        return t ? tj.add(n) : tj.delete(n), ny();
    },
    AUDIO_SET_NOISE_SUPPRESSION: function (e) {
        let t = nc({ noiseSuppression: e.enabled });
        te.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), ny(), nS(e.location);
    },
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function (e) {
        let t = nc({ automaticGainControl: e.enabled });
        te.eachConnection((e) => ni(e, t.automaticGainControl)), ny(), nS(e.location);
    },
    AUDIO_SET_NOISE_CANCELLATION: function (e) {
        let t = nc({ noiseCancellation: e.enabled });
        te.eachConnection((e) => nr(e, t.noiseCancellation)), ny(), nS(e.location);
    },
    AUDIO_SET_KRISP_MODEL_OVERRIDE: function (e) {
        ev.A.setKrispModelOverride(e.model), (_ = e.model), ny();
    },
    AUDIO_SET_DISPLAY_SILENCE_WARNING: function (e) {
        nc({ silenceWarning: e.enabled });
    },
    AUDIO_SET_DEBUG_LOGGING: function (e) {
        te.setDebugLogging(e.enabled);
    },
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: function (e) {
        let { level: t } = e;
        (d = t), ev.A.setKrispSuppressionLevel(t);
    },
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: function (e) {
        (0, E.isWeb)() || ((tw = e.enabled), te.setNoiseCancellationEnableStats?.(e.enabled));
    },
    MEDIA_ENGINE_SET_VIDEO_HOOK: function (e) {
        nc({ videoHook: e.enabled });
    },
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function (e) {
        nc({ experimentalSoundshare2: e.enabled });
    },
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: function (e) {
        let { enabled: t } = e;
        nc({ useSystemScreensharePicker: t });
    },
    AUDIO_SET_ATTENUATION: function (e) {
        let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i } = e,
            r = nc({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i });
        te.eachConnection((e) =>
            e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers),
        );
    },
    AUDIO_SET_QOS: function (e) {
        let { enabled: t } = e;
        nc({ qos: t }), te.eachConnection((e) => e.setQoS(t));
    },
    MEDIA_ENGINE_DEVICES: function (e) {
        let { inputDevices: t, outputDevices: n, videoDevices: i } = e,
            r = tl;
        if (((tl = nf(t, eZ.intl.string(eZ.t["/QIjDA"]))), !T().isEqual(tl, r))) {
            let e = t6();
            nm(np(tl, e.inputDeviceId)), te.eachConnection(ns);
        }
        !(function (e) {
            let t = tu;
            if (((tu = nf(e, eZ.intl.string(eZ.t.xlUg0v))), !T().isEqual(tu, t))) {
                let e = t6(),
                    n = np(tu, e.outputDeviceId);
                te.setAudioOutputDevice(n);
                let i = ng(t),
                    r = ng(tu);
                i !== r &&
                    te.eachConnection((e) => {
                        e.context === eX.x.STREAM && e.setSoundshareDiscardRearChannels(r);
                    });
            }
        })(n);
        ty = i.length > 0;
        let s = tc;
        if (((tc = nf(i, eZ.intl.string(eZ.t.WKWARY))), tE && !T().isEqual(tc, s))) {
            let e = void 0 !== tc[tm],
                t = tm === eX.dx && s[eX.dx]?.disabled,
                n = "Firefox" === y().name && "" === tm && s[tm]?.name === "Default" && !s[tm]?.disabled;
            t8(e || t || n);
        }
    },
    AUDIO_VOLUME_CHANGE: function (e) {
        let { inputVolume: t, outputVolume: n } = e;
        nc({ inputVolume: t5(t), outputVolume: n });
    },
    AUDIO_RESET: function () {
        O.w.remove(eJ), location.reload();
    },
    AUDIO_INPUT_DETECTED: function (e) {
        let { inputDetected: t } = e;
        if (null == t) return !1;
        if (((tv = !0 !== tN && !t), t)) (tN = !0), (tz = !1), tq.stop(), tC.stop();
        else if (t6().mode === eO.TBI.VOICE_ACTIVITY && tN) {
            let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = eh.A.getConfig({
                location: "MediaEngineStore.handleInputDetected",
            });
            e &&
                tq.start(e6, () => {
                    eR.default.track(eO.HAw.HARDWARE_MUTE_GUESSED, {
                        input_device_name: tl[np(tl, t6().inputDeviceId)]?.name,
                        rtc_connection_id: ej.A.getRTCConnectionId(),
                    }),
                        (tz = !0),
                        i.emitChange();
                }),
                null != t &&
                    tC.start(t * ek.A.Millis.MINUTE, () => {
                        (tN = !1), o.reset();
                    });
        }
    },
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: function (e) {
        let { osVolume: t, osMuted: n } = e;
        (u = t), (l = n);
    },
    AUDIO_SET_SUBSYSTEM: function (e) {
        nO(e.subsystem);
    },
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: function (e) {
        let t = e.bypassEnabled;
        nc({ bypassSystemInputProcessing: t }), te.setAudioInputBypassSystemProcessing(t), nS(e.location);
    },
    MEDIA_ENGINE_SET_AUDIO_ENABLED: function (e) {
        (ti = e.enabled), e.unmute && nc({ mute: !1, deaf: !1 }), te.eachConnection(t7);
    },
    MEDIA_ENGINE_SET_VIDEO_ENABLED: function (e) {
        let { enabled: t } = e;
        eN.A.requestPermission(eK.iL.CAMERA), t8(t);
    },
    MEDIA_ENGINE_PERMISSION: function (e) {
        let { kind: t, granted: n } = e;
        if (!n)
            switch (t) {
                case "audio":
                    (ti = !1), te.eachConnection(t7);
                    break;
                case "video":
                    t8(!1);
            }
    },
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
        let { settings: t } = e;
        if (t?.desktopSettings != null) {
            let e = null,
                n = null,
                { sourceId: i, sound: r } = t.desktopSettings,
                a = t.context ?? eX.x.DEFAULT,
                o = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
                l = ex.A.getPidFromDesktopSource(i);
            E.isPlatformEmbedded && ({ soundshareId: e, soundshareSession: n } = nI(l, r)),
                a !== ts && (null != s && te.setGoLiveSource(null, ts), (ts = a)),
                t8(a === eX.x.STREAM && tE, {
                    desktopSource: { id: i, sourcePid: l, soundshareId: e, soundshareSession: n },
                    quality: { resolution: o.resolution, frameRate: o.frameRate },
                });
        } else if (t?.cameraSettings != null) {
            let e = t.context ?? eX.x.DEFAULT,
                { videoDeviceGuid: n, audioDeviceGuid: i, sound: r } = t.cameraSettings,
                s = e === eX.x.STREAM && tE,
                a = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
            t8(s, {
                cameraSource: { videoDeviceGuid: n, audioDeviceGuid: i, sound: r },
                quality: { resolution: a.resolution, frameRate: a.frameRate },
            });
        } else t8(tE, null);
    },
    MEDIA_ENGINE_SET_VIDEO_DEVICE: function (e) {
        let { id: t } = e;
        nc({ videoDeviceId: (t = np(tc, t)) }), t8();
    },
    MEDIA_ENGINE_INTERACTION_REQUIRED: function (e) {
        return tr !== e.required && ((tr = e.required), e.required || te.interact(), !0);
    },
    USER_SETTINGS_MODAL_INIT: nD,
    USER_SETTINGS_MODAL_SET_SECTION: nD,
    CERTIFIED_DEVICES_SET: function () {
        return te.eachConnection(ns), !1;
    },
    RPC_APP_CONNECTED: function (e) {
        let { application: t } = e;
        tn.add(t.id);
    },
    RPC_APP_DISCONNECTED: function (e) {
        let { application: t } = e;
        tn.delete(t.id);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { mediaEngineState: t } = e;
        (tt = t.settingsByContext),
            (tl = t.inputDevices),
            (tu = t.outputDevices),
            (tY = t.appSupported),
            (tb = t.krispModuleLoaded),
            (tD = t.krispFatalError),
            (c = t.krispVersion),
            (ts = t.goLiveContext);
    },
    APP_STATE_UPDATE: function (e) {
        let { state: t } = e,
            n = B.A.isEnabled();
        if (t === eO.g6G.BACKGROUND && tE && !n) (tS = !0), t8(!1);
        else {
            if (t !== eO.g6G.ACTIVE || !tS) return !1;
            (tS = !1), t8(!0);
        }
        return !0;
    },
    SET_CHANNEL_BITRATE: function (e) {
        te.eachConnection((t) => t.setBitRate(e.bitrate));
    },
    SET_VAD_PERMISSION: function (e) {
        let { hasPermission: t } = e,
            n = !t;
        if (n === tf) return !1;
        (tf = n), te.eachConnection(t7);
    },
    SET_NATIVE_PERMISSION: function (e) {
        let { state: t, permissionType: n } = e,
            i = t === eK.hL.ACCEPTED;
        switch (n) {
            case eK.iL.AUDIO:
                (tV = !0), te.eachConnection(t7);
                break;
            case eK.iL.CAMERA:
                !i && tE && t8(!1);
                break;
            default:
                return !1;
        }
    },
    SET_CHANNEL_VIDEO_QUALITY_MODE: function (e) {
        te.eachConnection((t) => t.applyVideoQualityMode(e.mode));
    },
    MEDIA_ENGINE_SET_AEC_DUMP: function (e) {
        let { enabled: t } = e,
            n = nc({ aecDumpEnabled: t });
        te.setAecDump(n.aecDumpEnabled);
    },
    MEDIA_ENGINE_SET_OPENH264_ENABLED: function (e) {
        let { enabled: t } = e;
        nc({ openH264Enabled: t }), m.Ay?.setOpenH264Enabled?.(t);
    },
    MEDIA_ENGINE_RESET_SETTINGS: function (e) {
        let { overrides: t } = e;
        if (__OVERLAY__) return !1;
        (tt = Object.values(eX.x).reduce((e, n) => {
            let i = e7();
            return (e[n] = T().merge(i, t[n])), e;
        }, {})),
            O.w.set(eJ, tt),
            nd();
    },
    CHANNEL_DELETE: function () {
        if ((!tE && null == s) || null != ej.A.getRTCConnectionId()) return !1;
        t8(!1, null);
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: function (e) {
        if (e.code === eX.CO.KRISP_CPU_OVERUSE) {
            (t0.noiseCancellation = !1), (t0.noiseSuppression = !0);
            let e = t6();
            return te.eachConnection((t) => nr(t, e.noiseCancellation)), ny(), nS(), !0;
        }
        return !1;
    },
    MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR: function (e) {
        return (
            e.code === eX.CO.KRISP_VAD_CPU_OVERUSE &&
            ((t0.modeOptions = { vadUseKrisp: !1 }), te.eachConnection((e) => t4(e)), !0)
        );
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function () {
        return !!tP && ((tP = !1), !0);
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
        let { settings: t } = e;
        te.applyMediaFilterSettings(t).finally(() => {
            (tx = !1), i.emitChange();
        });
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function () {
        tx = !0;
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function () {
        tx = !1;
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            local: n,
            wasSaved: i,
        } = e;
        if (t !== ez.oD.PRELOADED_USER_SETTINGS || n || null != i) return !1;
        nA(!0);
    },
    CLIPS_INIT: function (e) {
        let { sourceId: t, applicationName: n, quality: r } = e;
        if (!(0, U.Ao)() || null == L.A || (a?.desktopSource.id === t && a.quality === r)) return !1;
        null != a &&
            (te.setClipsSource(null),
            (0, E.isWindows)() &&
                (null != a.desktopSource.soundshareId
                    ? w.c1(a.desktopSource.soundshareId)
                    : null != a.desktopSource.sourcePid && t6().videoHook && w.c1(a.desktopSource.sourcePid)));
        let s = ex.A.getPidFromDesktopSource(t),
            { soundshareId: o, soundshareSession: l } = nI(s, !0);
        a = { desktopSource: { id: t, sourcePid: s, soundshareId: o, soundshareSession: l }, quality: r };
        let u = t1("MediaEngineStore clips"),
            c = t6().videoHook,
            d = !c || !ee.getConfig({ location: "handleClipsInit" }).enabled,
            _ = c && eE.getConfig({ location: "handleClipsInit" }).enabled;
        te.setClipsSource({
            desktopDescription: {
                id: a.desktopSource.id,
                soundshareId: a.desktopSource.soundshareId,
                useVideoHook: c,
                useHookFramePacer: d,
                useGraphicsCapture: na(),
                useCaptureDeviceForEncode: !1,
                useLoopback: i.getExperimentalSoundshare(),
                useQuartzCapturer: !0,
                allowScreenCaptureKit: no(),
                videoHookStaleFrameTimeoutMs: 500,
                graphicsCaptureStaleFrameTimeoutMs: e1,
                hdrCaptureMode: u,
                videoHookAllowDx12: _,
            },
            quality: r,
            applicationName: n,
            videoEncoderExperiments: i.getVideoEncoderExperiments(eX.x.STREAM, "streamer"),
        });
    },
    CLIPS_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        !1 === t.decoupledClipsEnabled && ((a = null), te.setClipsSource(null));
    },
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function (e) {
        t$ = e.enabled;
    },
    MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: function (e) {
        let { deviceId: t, active: n, available: i } = e;
        tU[t] = { active: n, available: i };
    },
})),
    (o = new eu(te, i));
let nM = i;
