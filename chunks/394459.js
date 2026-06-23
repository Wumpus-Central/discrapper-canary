"use strict";
let i, r, s, a, o, l, u, c, d, _, h;
n.d(t, { yz: () => e8, Ay: () => nV }), n(323874), n(14289), n(35956), n(321073);
var f,
    p = n(823598),
    E = n(626584),
    m = n(723702),
    g = n(19575);
(0, p.WQ)({
    supported() {
        try {
            if (__OVERLAY__);
            else if (m.isPlatformEmbedded) {
                let e = (0, p.lE)();
                if (null == e.VoiceConnection) throw Error("voe function missing");
                return !0;
            }
        } catch (e) {
            new E.A("injectMediaEngine").error("Potentially corrupt installation:", e.message);
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
    T = n(735438),
    S = n.n(T),
    y = n(481613),
    C = n.n(y),
    N = n(299855),
    v = n.n(N),
    R = n(17928),
    O = n(459838),
    b = n(506774),
    D = n(451988),
    L = n(228366),
    w = n(77729),
    M = n(719129),
    P = n(894539),
    x = n(124838),
    k = n(274372),
    U = n(915618),
    G = n(572164),
    F = n(680725),
    V = n(487329),
    B = n(736056),
    j = n(6494),
    H = n(952818),
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
    $ = (0, W.mj)({
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
function z(e) {
    let { location: t, disable: n = !1 } = e;
    return n ? $.definition.defaultConfig : $.getConfig({ location: t });
}
let q = (0, W.mj)({
        name: "2026-04-av1-decode-android",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    Z = { probeAudioEffects: !1 },
    X = (0, W.mj)({
        name: "2026-03-audio-effects-probe",
        kind: "user",
        defaultConfig: Z,
        variations: { 1: { ...Z, probeAudioEffects: !0 } },
    }),
    Q = (0, W.mj)({
        name: "2025-08-browser-hevc",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    J = (0, W.mj)({
        name: "2026-05-disable-camera-simulcast",
        kind: "user",
        defaultConfig: { enableSimulcast: !0 },
        variations: { 1: { enableSimulcast: !1 } },
    }),
    ee = (0, W.mj)({
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
    ei = (0, W.mj)({
        name: "2026-02-go-live-hdr",
        kind: "user",
        defaultConfig: { hdrCaptureMode: "never" },
        variations: { 1: { hdrCaptureMode: "always" }, 2: { hdrCaptureMode: "permittedDevicesOnly" } },
    }),
    er = (0, W.mj)({
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
    stateChangeTimeout = new D.Ep();
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
        if ((0, es.uF)() && v().satisfies(w.A?.os.release, eo.PH))
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
                    L.h.dispatch({ type: "AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED", osVolume: i, osMuted: r });
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
                L.h.dispatch({
                    type: "AUDIO_INPUT_DETECTED",
                    inputDetected: this.inputDetected,
                    lastUpdateTime: this.lastUpdateTime,
                });
        });
    };
}
let ec = (0, et.Ay)({
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
var e_ = n(801644);
let eh = (0, W.mj)({
        kind: "user",
        name: "2026-06-systemwide-echo-cancellation-for-people-who-refuse-to-wear-headphones",
        defaultConfig: { echoReferenceMode: "mix" },
        variations: { 1: { echoReferenceMode: "auto" } },
    }),
    ef = (0, W.mj)({
        name: "2026-06-upscale-small-captured-frames",
        kind: "user",
        defaultConfig: { minCaptureWidth: 0, minCaptureHeight: 0 },
        variations: { 1: { minCaptureWidth: 130, minCaptureHeight: 130 } },
    }),
    ep = (0, et.Ay)({
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
    em = (0, W.mj)({
        name: "2026-04-video-hook-dx12",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eg = (0, W.mj)({
        name: "2026-02-wgc-dirty-regions-all",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eA = (0, W.mj)({
        name: "2026-02-wgc-dirty-regions",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eI = (0, W.mj)({
        name: "2026-06-wmf-cpu-encode-intel",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eT = (0, W.mj)({
        name: "2025-12-wmf-gpu-encode",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function eS(e) {
    return eT.getConfig({ location: e });
}
let ey = (0, W.mj)({
    name: "2026-01-wmf-gpu-encode-intel",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eC = n(75076),
    eN = n(91777),
    ev = n(559633),
    eR = n(205106),
    eO = n(174459),
    eb = n(652215);
let eD = new ea.Vy("AudioEffects");
async function eL(e, t, n) {
    if (!(0, es.uF)()) return Promise.reject(Error("Audio effects querying not supported on non-Windows platforms"));
    try {
        let i = await n.getDeviceAudioEffects(e);
        return (
            L.h.dispatch({ type: "MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS", deviceId: t, ...i }),
            eO.default.track(eb.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, {
                succeeded: !0,
                active_effects: i.active,
                available_effects: i.available,
            }),
            i
        );
    } catch (e) {
        eD.error("Failed to probe audio effects for device", e),
            eO.default.track(eb.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, { succeeded: !1 });
    }
}
var ew = n(967347),
    eM = n(617617),
    eP = n(125325),
    ex = n(499156),
    ek = n(353835),
    eU = n(927813),
    eG = n(38405),
    eF = n(350535),
    eV = n(495544),
    eB = n(131319),
    ej = n(347481),
    eH = n(734057),
    eY = n(763827),
    eW = n(287809),
    eK = n(117549),
    e$ = n(765682),
    ez = n(829997),
    eq = n(355097),
    eZ = n(621380),
    eX = n(731854),
    eQ = n(375708);
let eJ = new E.A("MediaEngineStore"),
    e0 = "MediaEngineStore",
    e1 = { left: 1, right: 1 },
    e2 = 5 * eU.A.Millis.SECOND,
    e3 = 2 * eU.A.Millis.SECOND,
    e6 = 30 * eU.A.Millis.SECOND,
    e4 = +eU.A.Millis.MINUTE,
    e5 = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2",
    e7 = 0;
var e8 =
    (((f = {}).WEBCAM = "WEBCAM"),
    (f.INTEGRATED = "INTEGRATED"),
    (f.BLUETOOTH = "BLUETOOTH"),
    (f.AIRPLAY = "AIRPLAY"),
    (f.HEADSET = "HEADSET"),
    f);
function e9() {
    return {
        mode: eb.TBI.VOICE_ACTIVITY,
        modeOptions: {
            threshold: -60,
            autoThreshold: m.isPlatformEmbedded || __OVERLAY__,
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
        audioMixerSettings: { ...ez.b },
        audioMixerSettingsVersion: 0,
        localPans: {},
        inputVolume: eX.Hz,
        outputVolume: eX.Hz,
        inputDeviceId: eX.dx,
        outputDeviceId: eX.dx,
        videoDeviceId: eX.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: tn.supports(eX.O5.VIDEO_HOOK),
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
        [eZ.m.CUSTOM]: {},
        [eZ.m.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [eZ.m.STUDIO]: {
            mode: eb.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    tt = { modeOptions: { vadUseKrisp: !1 }, noiseCancellation: !1, noiseSuppression: !0 },
    tn = (0, O.hB)((0, O.WI)());
eJ.enableNativeLogger(!0);
let ti = {},
    tr = new Set([eX.x.DEFAULT]),
    ts = tn.supports(eX.O5.AUTO_ENABLE),
    ta = !1,
    to = eX.x.STREAM,
    tl = 0,
    tu = performance.now(),
    tc = null,
    td = { [eX.dx]: ng("No Input Devices") },
    t_ = { [eX.dx]: ng("No Output Devices") },
    th = { [eX.dx]: ng("No Video Devices") },
    tf = new D.Ep(),
    tp = !1,
    tE = !1,
    tm = !1,
    tg = !1,
    tA = !1,
    tI = eX.qe,
    tT = eX.qe,
    tS = !1,
    ty = !1,
    tC = new D.Ep(),
    tN = !1,
    tv = !1,
    tR = !1,
    tO = !1,
    tb = new D.Ep(),
    tD = !1,
    tL = !1,
    tw = !1,
    tM = !1,
    tP = [],
    tx = !1,
    tk = null,
    tU = !1,
    tG = !1,
    tF = !1,
    tV = {},
    tB = null,
    tj = null,
    tH = !1;
eN.A.hasPermission(e$.iL.AUDIO, { showAuthorizationError: !1 }),
    eN.A.hasPermission(e$.iL.CAMERA, { showAuthorizationError: !1 });
let tY = new Set(),
    tW = !1,
    tK = new Set(),
    t$ = {},
    tz = null,
    tq = null,
    tZ = null,
    tX = !0,
    tQ = !1,
    tJ = new D.Ep(),
    t0 = !1,
    t1 = !1,
    t2 = !1,
    t3 = !1,
    t6 = {};
function t4(e) {
    return (function (e) {
        let { location: t } = e;
        return ei.getConfig({ location: t });
    })({ location: e }).hdrCaptureMode;
}
async function t5() {
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
function t7() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT,
        t = ti[e];
    return null == t && ((t = e9()), (ti[e] = t)), t;
}
function t8() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT,
        t = t7(e),
        n = te[t.activeInputProfile ?? eZ.m.CUSTOM],
        i = nw() ? t6 : tt,
        r = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}), ...(i.modeOptions ?? {}) };
    if (
        (null == r.vadDuringPreProcess &&
            (r.vadDuringPreProcess = (function (e) {
                let { location: t, disable: n = !1 } = e;
                return n ? ep.definition.defaultConfig : ep.getConfig({ location: t });
            })({ location: "getSettings" }).enabled),
        (null == r.vadKrispActivationThreshold && !0 === n.automaticGainControl) || !0 === t.automaticGainControl)
    ) {
        let e = z({ location: "getSettings" });
        null != e.vadKrispActivationThreshold && (r.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return { ...t, ...n, ...i, modeOptions: r };
}
function t9(e) {
    let t = t8(e.context),
        n = t.mode;
    e.context === eX.x.DEFAULT && (0, ed.N)(!1, !1);
    let { showPTTSpeakingIndicator: i } = ex.A.getConfig({ location: "setInputMode" }),
        r = i && n === eb.TBI.PUSH_TO_TALK;
    e.setInputMode(n, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: !!r || t.modeOptions.autoThreshold,
        vadUseKrisp: (!!r || t.modeOptions.vadUseKrisp) && nw(),
        vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? 0.5,
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        vadDuringPreProcess: t.modeOptions.vadDuringPreProcess ?? !1,
        pttReleaseDelay: Math.round(t.modeOptions.delay),
    });
}
function ne(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eX.Hz;
    return S().clamp(e, 0, t);
}
function nt(e) {
    let t = t8(e.context),
        n = !ts || t.mute || t.deaf;
    switch (e.context) {
        case eX.x.DEFAULT:
            n = n || tp || tE || tm || !eN.A.didHavePermission(e$.iL.AUDIO);
            break;
        case eX.x.STREAM:
            n = !0;
            break;
        default:
            e.context;
    }
    e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eX.x.DEFAULT && P.A.updateNativeMute();
}
function nn() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tA,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
        n = s;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, m.isWindows)()
                ? M.c1(n.desktopSource.soundshareId)
                : null != n.desktopSource.sourcePid && t8().videoHook && M.c1(n.desktopSource.sourcePid),
            tn.setGoLiveSource(null, to)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            tn.setGoLiveSource(null, to),
        tA || e)
    ) {
        let t = t8().videoDeviceId;
        tA && t === eX.dx && tT === eX.dx && tI !== eX.qe ? (t = tI) : (tT = t),
            (tI = (tA = e) ? nS(th, t) : eX.qe),
            tn.setVideoInputDevice(tI);
    }
    if (((s = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = t4("MediaEngineStore go live"),
                r = t8().videoHook,
                s = nd(),
                a = s ? ((0, m.isWindows)() && v().satisfies(w.A?.os.release, eo.fG) ? eo.zl : eo.eg) : 0,
                o = !1;
            (0, m.isWindows)() &&
                a >= eo.zl &&
                (o =
                    !0 === tq
                        ? eA.getConfig({ location: "updateVideo" }).enabled
                        : eg.getConfig({ location: "updateVideo" }).enabled);
            let l = !r || !ee.getConfig({ location: "updateVideo" }).enabled,
                u = r && em.getConfig({ location: "updateVideo" }).enabled,
                { minCaptureWidth: c, minCaptureHeight: d } = ef.getConfig({ location: "updateVideo" });
            tn.setGoLiveSource(
                {
                    desktopDescription: {
                        id: t.desktopSource.id,
                        soundshareId: t.desktopSource.soundshareId,
                        useVideoHook: r,
                        useHookFramePacer: l,
                        useGraphicsCapture: s,
                        useGraphicsCaptureApiLevel: a,
                        useCaptureDeviceForEncode: (0, m.isWindows)(),
                        useLoopback: i.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: n_(),
                        videoHookStaleFrameTimeoutMs: 500,
                        graphicsCaptureStaleFrameTimeoutMs: e2,
                        hdrCaptureMode: n,
                        enableGlobalFramePoolLock: (function (e) {
                            let { location: t, disable: n = !1 } = e;
                            return n ? en.definition.defaultConfig : en.getConfig({ location: t });
                        })({ location: "updateVideo" }).enabled,
                        useGraphicsCaptureDirtyRegions: o,
                        videoHookAllowDx12: u,
                        minCaptureWidth: c,
                        minCaptureHeight: d,
                    },
                    quality: e,
                },
                to,
            );
        }
        null != t.cameraSource &&
            tn.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: t.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: !1 === t.cameraSource.sound ? "" : t.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                to,
            );
    }
}
function ni(e) {
    switch (e) {
        case eX.CO.KRISP_CPU_OVERUSE:
            return V.B6.KrispCpuOveruse;
        case eX.CO.KRISP_FAILED:
            return V.B6.KrispFailed;
        case eX.CO.KRISP_VAD_CPU_OVERUSE:
            return V.B6.KrispVadCpuOveruse;
        case eX.CO.KRISP_INIT_ERROR:
            return V.B6.KrispInitError;
        case eX.CO.KRISP_INIT_ERROR_NATIVE:
            return V.B6.KrispInitErrorNative;
        case eX.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED:
            return V.B6.KrispInitErrorSse4NotSupported;
        case eX.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED:
            return V.B6.KrispInitErrorAvx2NotSupported;
        case eX.CO.KRISP_INIT_ERROR_UNSIGNED:
            return V.B6.KrispInitErrorUnsigned;
        case eX.CO.KRISP_INIT_ERROR_GLOBAL_INIT:
            return V.B6.KrispInitErrorGlobalInit;
        case eX.CO.KRISP_INIT_ERROR_WEIGHT_8K:
            return V.B6.KrispInitErrorWeight8k;
        case eX.CO.KRISP_INIT_ERROR_WEIGHT_16K:
            return V.B6.KrispInitErrorWeight16k;
        case eX.CO.KRISP_INIT_ERROR_WEIGHT_32K:
            return V.B6.KrispInitErrorWeight32k;
        case eX.CO.KRISP_INIT_ERROR_WEIGHT_VAD:
            return V.B6.KrispInitErrorWeightVad;
        default:
            return;
    }
}
let nr = new Set([
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
function ns(e) {
    if (
        (eJ.warn(`Voice processing error: ${e}`),
        (0, V.QW)({ type: V.iy.NOISE_CANCELLER_ERROR, underlyingError: ni(e) }),
        eO.default.track(eb.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
        nr.has(e))
    ) {
        tM = !0;
        return;
    }
    e === eX.CO.KRISP_VAD_CPU_OVERUSE
        ? L.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e })
        : ((tU = !0), L.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e }));
}
function na(e, t) {
    let n = t === eX.$C.LIVE;
    eJ.warn(`Video filter error: ${e} (${n ? "live" : "preview"})`),
        n &&
            (0, V.QW)({
                type: V.iy.VIDEO_BACKGROUND_UNAVAILABLE,
                underlyingError: (function (e) {
                    switch (e) {
                        case eX.kv.UNSUPPORTED:
                            return V.B6.VideoBackgroundUnsupported;
                        case eX.kv.INIT_FAILED:
                            return V.B6.VideoBackgroundInitFailed;
                        default:
                            return;
                    }
                })(e),
            }),
        L.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_FILTER_ERROR", code: e, target: n ? "live" : "preview" });
}
function no(e) {
    let t = z({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function nl(e, t) {
    e.setAutomaticGainControl(no(t));
}
function nu(e, t) {
    let n = (0, eR.A)(t, i.getSystemMicrophoneMode());
    n !== t && eJ.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: r } = z({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(r);
}
function nc(e) {
    let t = t8(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(ej.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(ej.A.hasNoiseSuppression(n) || t.noiseSuppression),
        nl(e, ej.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        nu(e, t.noiseCancellation),
        e.setSpatialAudioEnabled(t.audioMixerSettings.enabled),
        (0, m.isWindows)() && v().satisfies(w.A?.os.release, ">=10.0.15063") && e.context === eX.x.DEFAULT)
    ) {
        let t = (function (e) {
            let { location: t } = e;
            return eh.getConfig({ location: t });
        })({ location: "updateConnectionVoiceProcessing" });
        e.setEchoReferenceMode(t.echoReferenceMode);
    }
    if ((0, m.isWeb)()) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function nd() {
    return (0, m.isWindows)() && v().satisfies(w.A?.os.release, eo.yg);
}
function n_() {
    return (0, m.isMac)() && tn.supports(eX.O5.SCREEN_CAPTURE_KIT) && v().satisfies(w.A?.os.release, eo.e);
}
function nh() {
    return (
        (0, m.isWindows)() &&
        tn.supports(eX.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        tn.supports(eX.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nf() {
    return tn.supports(eX.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function np(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eX.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = t7(t);
    return Object.assign(i, e), !__OVERLAY__ && n && b.w.set(e0, ti), i;
}
function nE() {
    let e = t8();
    nC(e.inputDeviceId),
        tn.setAudioOutputDevice(e.outputDeviceId),
        nn(),
        tn.setInputVolume(e.inputVolume),
        tn.setOutputVolume(e.outputVolume),
        tn.setAecDump(e.aecDumpEnabled),
        tn.setSidechainCompression(e.sidechainCompression),
        tn.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        tn.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        (0, m.isLinux)() && g.Ay?.setOpenH264Enabled?.(e.openH264Enabled),
        tn.setAudioMixerOptions(e.audioMixerSettings);
}
function nm() {
    ts || tn.enable().then(() => L.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function ng(e) {
    return { id: eX.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
}
function nA(e, t) {
    return (
        null !=
        t.find(
            (t) =>
                (null != t.containerId && t.containerId === e.containerId) ||
                (null != t.hardwareId && t.hardwareId === e.hardwareId) ||
                (null != t.originalId && t.originalId === e.originalId),
        )
    );
}
let nI = /^HDAUDIO\\(?:SUB)?FUNC_\d+&VEN_(?:8086|1002|10DE)/;
function nT(e, t) {
    let { deviceType: n, defaultName: i } = t,
        r = e[{ audioinput: "inputDevices", audiooutput: "outputDevices", videoinput: "videoDevices" }[n]];
    if (0 === r.length) {
        let e = ng(i);
        return { [e.id]: e };
    }
    return S()(r)
        .map((t) => ({
            id: t.id,
            index: t.index,
            name: t.name,
            disabled: !1,
            facing: t.facing,
            guid: t.originalId,
            hardwareId: t.hardwareId,
            containerId: t.containerId,
            effects: t.effects,
            formFactor: (function (e, t) {
                let { inputDevices: n, outputDevices: i, videoDevices: r } = t;
                switch (!0) {
                    case "videoinput" === e.type:
                    case nA(e, r):
                        return "WEBCAM";
                    case ["builtin", "displayport", "hdmi"].includes(e.macosTransportType ?? ""):
                    case null != e.hardwareId && nI.test(e.hardwareId):
                        return "INTEGRATED";
                    case S()(e.hardwareId).startsWith("BTHENUM"):
                    case ["bluetooth", "bluetoothle"].includes(e.macosTransportType ?? ""):
                        return "BLUETOOTH";
                    case ["airplay", "continuitycapturewireless"].includes(e.macosTransportType ?? ""):
                        return "AIRPLAY";
                    case "audioinput" === e.type && nA(e, i):
                    case "audiooutput" === e.type && nA(e, n):
                        return "HEADSET";
                }
            })(t, e),
        }))
        .keyBy("id")
        .value();
}
function nS(e, t) {
    let n = e[t] ?? e[eX.dx] ?? S()(e).values().first();
    return null != n ? n.id : t;
}
function ny(e) {
    if (!(0, m.isWindows)() || !X.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects) return;
    let t = td[e];
    t?.guid != null && eL(t.guid, e, tn);
}
function nC(e) {
    tn.setAudioInputDevice(e), ny(e);
}
function nN(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nv() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = eM.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let i = n === eq.W.USER ? eX.x.DEFAULT : eX.x.STREAM,
            r = i === eX.x.STREAM ? eX.Cn : eX.Hz,
            s = t[n] ?? {},
            { localMutes: a, localVolumes: o } = t8(i);
        for (let [e, t] of Object.entries(s))
            null == (0, eP.tM)(i, e) &&
                (t.muted ? (a[e] = !0) : delete a[e],
                t.volume !== r ? (o[e] = t.volume) : delete o[e],
                tn.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (e)
            for (let e of new Set([...Object.keys(a), ...Object.keys(o)]))
                null == s[e] &&
                    (delete a[e],
                    delete o[e],
                    tn.eachConnection((t) => {
                        t.setLocalVolume(e, r), t.setLocalMute(e, !1);
                    }, i));
        np({ localMutes: a, localVolumes: o }, i);
    }
}
function nR(e, t) {
    if (t) {
        let { soundshareId: t, soundshareSession: s } = (function (e) {
            if (null == i)
                return (
                    eJ.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
                    { soundshareId: null, soundshareSession: "" }
                );
            {
                let t = i.getExperimentalSoundshare() ? e : ek.A.getAudioPid(e),
                    n = "";
                return null != t && (n = ek.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n };
            }
        })(e);
        if (null != t) {
            var n, r;
            return (
                (n = t),
                (r = s),
                (0, m.isWindows)() &&
                    n > 1 &&
                    M.GH(n, { soundshare_session: r }).then((e) => {
                        null == e ||
                            H.Ay.shouldContinueWithoutElevatedProcessForPID(n) ||
                            L.h.wait(() => {
                                L.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: e });
                            });
                    }),
                { soundshareId: t, soundshareSession: s }
            );
        }
    }
    return null != e && t8().videoHook && M.GH(e), { soundshareId: null, soundshareSession: null };
}
function nO() {
    let e = eX.x.DEFAULT,
        { videoToggleStateMap: t } = t8(e);
    for (let [e, n] of Object.entries(t)) n === eb.bb8.AUTO_PROBING && delete t[e];
    np({ videoToggleStateMap: t }, e, !1);
}
function nb(e) {
    let t = t8(),
        n = tn.getAudioSubsystem(),
        r = tn.getAudioLayer(),
        s = nS(td, t.inputDeviceId),
        a = td[s]?.name,
        o = (0, eR.A)(t.noiseCancellation, i.getSystemMicrophoneMode());
    eO.default.track(eb.HAw.VOICE_PROCESSING, {
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
function nD() {
    let e = t8(),
        t = tK.size > 0,
        n = e.inputDeviceId,
        i = ej.A.hasEchoCancellation(n) || e.echoCancellation,
        r = ej.A.hasNoiseSuppression(n) || e.noiseSuppression,
        s = no(ej.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        a = e.noiseCancellation;
    tn.setLoopback(t, {
        echoCancellation: i,
        echoCancellationPreEcho: !t,
        noiseSuppression: r,
        automaticGainControlConfig: s,
        noiseCancellation: a,
    });
}
async function nL() {
    if (!tn.supports(eX.O5.VAAPI) || window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let e = await window.DiscordNative.processUtils.getSystemInfo();
    (e.electronGPUInfo?.gpuDevice ?? []).some((e) => 4098 === e.vendorId) &&
        ((t2 = !0), (t1 = tn.supports(eX.O5.GAMESCOPE_CAPTURE)));
}
function nw() {
    return (tw || !1) && !tM;
}
async function nM() {
    try {
        await g.Ay.ensureModule("discord_krisp");
        let e = g.Ay.requireModule("discord_krisp");
        (tw = !0),
            (c = e.getSdkVersion?.()),
            (d = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (tP = e), i.emitChange();
            }),
            i.emitChange(),
            await g.Ay.ensureModule("discord_voice");
        let t = g.Ay.requireModule("discord_voice");
        t.setupKrispPath?.();
    } catch (t) {
        eJ.warn(`Failed to load Krisp module: ${t.message}`), eG.A.captureException(t);
        let e = eX.CO.KRISP_INIT_ERROR;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eX.CO.KRISP_INIT_ERROR : n;
        }
        (0, V.QW)({ type: V.iy.NOISE_CANCELLER_ERROR, underlyingError: ni(e) }),
            eO.default.track(eb.HAw.VOICE_PROCESSING, { noise_canceller_error: e });
    } finally {
        tL = !1;
    }
}
async function nP() {
    try {
        let e,
            t = "",
            n = !1,
            i = URL.parse(e5);
        if (null === i) return void eJ.log("OpenH264 URL ", i, " is invalid");
        let r = i.pathname.split("/"),
            s = r[r.length - 1].replace(".bz2", "");
        try {
            let t = await g.Ay.downloadOpenH264(
                e5,
                s,
                "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f",
                (e) => {
                    eJ.log("OpenH264 download status", e);
                },
            );
            eJ.log("OpenH264 is ready", t), (n = t.fetchedFromNetwork), (e = !0);
        } catch (n) {
            eJ.error("OpenH264 download failed", n), (t = n.message), (e = !1);
        }
        if (
            (eO.default.track(eb.HAw.VIDEO_OPENH264_DOWNLOADED, {
                success: e,
                fetched_from_network: n,
                error_message: t,
            }),
            e)
        ) {
            let e = await g.Ay.cleanupUnusedOpenH264Files([s]);
            eJ.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        eJ.error("OpenH264 download failed", e);
    }
}
function nx(e) {
    e === eX.rB.AUTOMATIC
        ? (np({ automaticAudioSubsystem: !0 }), nk())
        : (np({ automaticAudioSubsystem: !1 }), tn.setAudioSubsystem(e));
}
function nk() {
    tn.queueAudioSubsystem(eX.rB.EXPERIMENTAL);
}
function nU(e) {
    let { section: t } = e;
    return t === eb.nc_.VOICE && nm(), !1;
}
class nG extends R.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        let e;
        if (
            (tf.start(e6, () => {
                eJ.error("Device enumeration timed out"), eO.default.track(eb.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
            }),
            tn.on(O.bg.Connection, (e) => {
                let t;
                nD(), t9(e), nt(e), nc(e);
                let n = t8();
                e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers),
                    e.setQoS(n.qos),
                    (0, m.isWindows)()
                        ? (e.setExperimentFlag(eX.fd.H265_HARDWARE_ONLY, !0),
                          (null != tj
                              ? tj
                              : "u" > typeof window
                                ? (tj = t5().then((e) => ((tB = e), e)))
                                : Promise.resolve(!1)
                          ).then((t) => {
                              e.setExperimentFlag(eX.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                          }))
                        : (0, m.isMac)() && e.setExperimentFlag(eX.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                    (0, m.isLinux)() && n.openH264Enabled && e.setExperimentFlag(eX.fd.USE_LIBOPENH264_DECODER, !0),
                    (function (e) {
                        let { location: t, disable: n = !1 } = e;
                        return n ? ec.definition.defaultConfig : ec.getConfig({ location: t });
                    })({ location: "setupMediaEngine" }).enabled &&
                        e.setExperimentFlag(eX.fd.LOW_LATENCY_RATE_CONTROL, !0),
                    e.setExperimentFlag(eX.fd.RESET_DECODER_ON_ERRORS, !0),
                    e.setExperimentFlag(eX.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
                let { swallowVolumeOnlySpeakingEvents: r } = x.A.getConfig({ location: "MediaEngineStore" });
                if (
                    (r && e.setExperimentFlag(eX.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === eX.x.STREAM)
                ) {
                    let t = nN(t_);
                    e.setSoundshareDiscardRearChannels(t);
                }
                if ((0, m.isWindows)())
                    e.setExperimentFlag(eX.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(eX.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eX.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                else if ((0, m.isMac)())
                    e.setExperimentFlag(eX.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eX.fd.SIGNAL_AV1_HARDWARE_DECODE, !0),
                        e.setExperimentFlag(
                            eX.fd.H265_DISABLE_ENCODE,
                            !(
                                window?.DiscordNative?.os.arch === "arm64" &&
                                v().satisfies(window?.DiscordNative?.os.release, eX.Dk)
                            ),
                        );
                else if ((0, m.isLinux)()) e.setExperimentFlag(eX.fd.SIGNAL_AV1_DECODE, !0);
                else if ((0, m.isIOS)())
                    e.setExperimentFlag(eX.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eX.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                else if ((0, m.isAndroid)() && !1) {
                    let { enabled: t } = q.getConfig({ location: "MediaEngineStore" });
                    t &&
                        (e.setExperimentFlag(eX.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eX.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
                }
                if ((0, m.isWeb)()) {
                    let { enabled: t } = Q.getConfig({ location: "MediaEngineStore" });
                    e.setExperimentFlag(eX.fd.BROWSER_HEVC, t);
                }
                for (let r of ((0, m.isWindows)() &&
                    tz?.startsWith("AMD") &&
                    eS("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eX.fd.WMF_GPU_ENCODE, !0),
                (0, m.isWindows)() &&
                    tz?.startsWith("Intel") &&
                    ey.getConfig({ location: "MediaEngineStore" }).enabled &&
                    e.setExperimentFlag(eX.fd.WMF_GPU_ENCODE, !0),
                (0, m.isWindows)() &&
                    tz?.startsWith("Intel") &&
                    !0 === tq &&
                    1 === tZ &&
                    eI.getConfig({ location: "MediaEngineStore" }).enabled &&
                    e.setExperimentFlag(eX.fd.INTEL_GPU, !0),
                (0, m.isWindows)() &&
                    tz?.startsWith("Qualcomm") &&
                    eS("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eX.fd.WMF_GPU_ENCODE, !0),
                tn.setHasFullbandPerformance(null === (t = (0, F.A)()) || t >= 31),
                e.setRemoteAudioHistory(1e3),
                (0, U.A)(i) && e.setClipsKeyFrameInterval(eX.X1),
                (n = t8(e.context)),
                e.setPostponeDecodeLevel(100),
                Object.keys(n.localMutes)))
                    r !== eV.default.getId() && e.setLocalMute(r, n.localMutes[r]);
                for (let t of Object.keys(n.localVolumes))
                    t !== eV.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
                for (let t of Object.keys(n.localPans)) {
                    let i = n.localPans[t];
                    e.setLocalPan(t, i.left, i.right);
                }
                for (let t of Object.keys(n.disabledLocalVideos)) e.setLocalVideoDisabled(t, n.disabledLocalVideos[t]);
                e.on(O.yq.Speaking, (t, n, i, r) => {
                    L.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: r });
                }),
                    e.context === eX.x.DEFAULT &&
                        ((ty = !1),
                        e.on(O.yq.SpeakingWhileMuted, () => {
                            let e = !ty;
                            (ty = !0),
                                e && i.emitChange(),
                                tC.start(e3, () => {
                                    (ty = !1), i.emitChange();
                                });
                        })),
                    e.on(O.yq.DesktopSourceEnd, (t, n) => {
                        L.h.dispatch({
                            type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                            settings: { context: e.context },
                            endReason: t,
                            errorCode: n,
                        });
                    }),
                    e.on(O.yq.InteractionRequired, (e) => {
                        L.h.dispatch({ type: "MEDIA_ENGINE_INTERACTION_REQUIRED", required: e });
                    }),
                    e.on(O.yq.VideoHookInitialize, (e, t, n, i, r, a) => {
                        s?.desktopSource != null &&
                            eO.default.track(eb.HAw.VIDEOHOOK_INITIALIZED, {
                                backend: e,
                                format: t,
                                framebuffer_format: n,
                                sample_count: i,
                                success: r,
                                reinitialization: a,
                                ...(0, Y.A)(s?.desktopSource),
                            });
                    }),
                    e.on(O.yq.NoiseCancellationError, ns),
                    e.on(O.yq.VoiceActivityDetectorError, ns),
                    e.on(O.yq.SdpError, (e, t, n, i) => {
                        eO.default.track(eb.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: i });
                    }),
                    e.on(O.yq.VideoState, (t) => {
                        L.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                    }),
                    e.setBitRate(eB.A.bitrate),
                    e.applyVideoQualityMode(eK.A.mode),
                    (0, m.isWindows)() &&
                        tn.supports(eX.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                        tn.setAsyncVideoInputDeviceInit(!0);
            }),
            tn.on(O.bg.DeviceChange, (e, t, n) => {
                tf.stop(),
                    L.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
            }),
            tn.on(O.bg.VolumeChange, (e, t) => {
                L.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
            }),
            tn.on(O.bg.DesktopSourceEnd, (e, t) => {
                L.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
            }),
            tn.on(O.bg.AudioPermission, (e) => {
                (tH = !0), L.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
            }),
            tn.on(O.bg.VideoPermission, (e) => {
                L.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
            }),
            tn.on(O.bg.WatchdogTimeout, async () => {
                let e;
                if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                    try {
                        await ek.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                    } catch (t) {
                        "number" == typeof t.status && (e = t.status);
                    }
                eJ.warn(`Watchdog timeout, report submission status: ${e ?? 200}`);
                let t = null != w.A.processUtils.setCrashReason;
                try {
                    await eO.default.track(
                        eb.HAw.VOICE_WATCHDOG_TIMEOUT,
                        { minidump_submission_error: e, will_restart: t },
                        { flush: !0 },
                    );
                } catch (e) {
                    eJ.error("Failed to flush voice watchdog timeout analytics event", e);
                }
                t &&
                    (eJ.info("Relaunching app due to voice watchdog timeout"),
                    await w.A.processUtils.setCrashReason("voice-watchdog-timeout"),
                    b.w.set("discord_watchdog_restart_timestamp", Date.now().toString()),
                    w.A.app.relaunch());
            }),
            tn.on(O.bg.VideoInputInitialized, (e) => {
                eO.default.track(eb.HAw.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired
                        ? null
                        : Math.round(e.timeToFirstFrame * eU.A.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy,
                    media_session_id: eY.A.getMediaSessionId(),
                    rtc_connection_id: eY.A.getRTCConnectionId(),
                });
            }),
            tn.on(O.bg.AudioInputInitialized, (e) => {
                eO.default.track(eb.HAw.AUDIO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_initialized_ms: Math.round(e.timeToInitialized * eU.A.Millis.SECOND),
                    rtc_connection_id: eY.A.getRTCConnectionId(),
                });
            }),
            tn.on(O.bg.ClipsRecordingRestartNeeded, () => {
                L.h.dispatch({ type: "CLIPS_RESTART" });
            }),
            tn.on(O.bg.ClipsInitFailure, (e, t) => {
                let n = tl < 3;
                (tl += 1),
                    L.h.wait(() => {
                        L.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t }),
                            n
                                ? L.h.dispatch({ type: "CLIPS_RESTART" })
                                : eJ.warn(
                                      `Clips init failure budget exhausted (${tl} consecutive unhealthy attempts); skipping auto-restart. A settings flip / game change / app restart will retry.`,
                                  );
                    });
            }),
            tn.on(O.bg.ClipsRecordingHealthy, () => {
                0 !== tl && (eJ.info(`Clips bridge reported healthy; resetting restart budget (was ${tl}).`), (tl = 0));
            }),
            tn.on(O.bg.ClipsBridgeIdleShutdown, () => {
                eJ.info("Clips bridge idle shutdown");
            }),
            tn.on(O.bg.ClipsRecordingEnded, (e, t) => {
                a?.desktopSource?.id === e &&
                    (null != t && s?.desktopSource?.soundshareId !== t && M.c1(t), (a = null));
            }),
            tn.on(O.bg.NativeScreenSharePickerUpdate, (e, t) => {
                L.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
            }),
            tn.on(O.bg.NativeScreenSharePickerCancel, (e) => {
                L.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
            }),
            tn.on(O.bg.NativeScreenSharePickerError, (e) => {
                L.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
            }),
            tn.on(O.bg.AudioDeviceModuleError, (e, t, n) => {
                eO.default.track(eb.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
            }),
            tn.on(O.bg.VideoCodecError, (e) => {
                let t = "encode" === e.mode ? V.iy.VIDEO_ENCODE_ERROR : V.iy.VIDEO_DECODE_ERROR,
                    n = { videoCodec: e.codecStandard, errorMessage: e.message };
                (0, V.QW)(
                    t === V.iy.VIDEO_ENCODE_ERROR
                        ? { type: t, ...n, videoEncoder: e.implName }
                        : { type: t, ...n, videoDecoder: e.implName },
                );
            }),
            tn.on(O.bg.ConnectionStats, (e) => {
                L.h.dispatch({
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
            tn.on(O.bg.VoiceProcessingError, ns),
            tn.on(O.bg.VideoFilterError, na),
            tn.on(O.bg.VoiceQueueMetrics, (e) => {
                let t = nF(e);
                null !== t && eO.default.track(eb.HAw.VOICE_QUEUE_METRICS, t);
            }),
            tn.setOnVideoContainerResized((e, t, n) => {
                L.h.wait(() =>
                    L.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
                );
            }),
            nL(),
            o.reset(),
            (0, ew.w)().then((e) => {
                null != e && ((tz = e.gpu_brand), (tq = e.has_intel_hybrid_igpu), (tZ = e.gpu_count));
            }),
            tn.on(O.bg.SystemMicrophoneModeChange, (e) => {
                (h = e), tn.eachConnection(nc), i.emitChange();
            }),
            null != (e = b.w.get("audio")) && (b.w.set(e0, { [eX.x.DEFAULT]: e }), b.w.remove("audio")),
            (ti = b.w.get(e0) ?? {}),
            S().each(ti, (e) => {
                S().defaultsDeep(e, e9()),
                    null != e.modeOptions &&
                        "string" == typeof e.modeOptions.shortcut &&
                        (e.modeOptions.shortcut = (0, eF.OH)(e.modeOptions.shortcut)),
                    null != e.modeOptions &&
                        4 !== e.vadUseKrispSettingVersion &&
                        ((e.vadUseKrispSettingVersion = 4), (e.modeOptions.vadUseKrisp = !0)),
                    e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                    e.vadThrehsoldMigrated ||
                        ((e.vadThrehsoldMigrated = !0),
                        e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = -60)),
                    tn.supports(eX.O5.SIDECHAIN_COMPRESSION) &&
                        e.sidechainCompressionSettingVersion < 1 &&
                        ((e.sidechainCompressionSettingVersion = 1), (e.sidechainCompression = !0)),
                    e.audioMixerSettingsVersion < 1 &&
                        ((e.audioMixerSettingsVersion = 1), (e.audioMixerSettings = { ...ez.b })),
                    (0, m.isWeb)()
                        ? 1 !== e.ncUseKrispjsSettingVersion &&
                          ((e.ncUseKrispjsSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                        : 1 !== e.ncUseKrispSettingVersion &&
                          ((e.ncUseKrispSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
            }),
            nE(),
            ((0, m.isWindows)() || (0, m.isLinux)() || (0, m.isMac)()) && !__OVERLAY__ && !tL && !tw
                ? ((tL = !0), nM())
                : (0, m.isWeb)() && tn.supports(eX.O5.NOISE_CANCELLATION)
                  ? ((tw = !0), i.emitChange())
                  : (0, m.isWeb)() && np({ noiseCancellation: !1 }),
            (0, m.isLinux)() && nP(),
            nO(),
            (0, m.isDesktop)() && m.isPlatformEmbedded && !t3)
        ) {
            t3 = !0;
            let e = async () => {
                let t = await new Promise((e) => {
                    g.Ay.pollQueueMetrics((t) => {
                        e(t);
                    });
                });
                t.periodMs = eX.tl;
                let n = nF(t);
                null !== n && eO.default.track(eb.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, eX.tl);
            };
            setTimeout(e, eX.tl);
        }
        (0, m.isWindows)() &&
            m.isPlatformEmbedded &&
            null === tc &&
            tn
                .getCodecSurvey()
                .then((e) => {
                    try {
                        let t = JSON.parse(e);
                        if (null == t || null == t.available_video_decoders)
                            throw Error("decoder survey is not available");
                        tc = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                    } catch (e) {
                        eJ.error("Failed to parse codec survey", e), (tc = !1);
                    }
                })
                .catch((e) => {
                    eJ.error("Failed to get codec survey", e), (tc = !1);
                })
                .finally(() => {
                    L.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
                }),
            (0, m.isAndroid)(),
            (t$ = {
                [eX.O5.VIDEO]: tn.supports(eX.O5.VIDEO),
                [eX.O5.DESKTOP_CAPTURE]: tn.supports(eX.O5.DESKTOP_CAPTURE),
                [eX.O5.HYBRID_VIDEO]: tn.supports(eX.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eV.default, eB.A, ej.A, eH.A, k.Ay, B.A, eY.A, H.Ay, eM.A, eW.default, eK.A);
    }
    supports(e) {
        return tn.supports(e);
    }
    supportsInApp(e) {
        return t$[e] || tn.supports(e);
    }
    isSupported() {
        return tn.supported();
    }
    isNoiseSuppressionSupported() {
        return tn.supports(eX.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return nw();
    }
    isNoiseCancellationError() {
        return tU;
    }
    isAutomaticGainControlSupported() {
        return tn.supports(eX.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nf() && (tn.supports(eX.O5.LEGACY_AUDIO_SUBSYSTEM) || tn.supports(eX.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return tn.supports(eX.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === tn.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return nw();
    }
    isAecDumpSupported() {
        return tn.supports(eX.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return tn.supports(eX.O5.VIDEO) && tn.supports(eX.O5.SIMULCAST);
    }
    getAecDump() {
        return t8().aecDumpEnabled;
    }
    getMediaEngine() {
        return tn;
    }
    getVideoComponent() {
        return tn.Video;
    }
    getCameraComponent() {
        return tn.Camera;
    }
    getKrispSuppressionLevel() {
        return d ?? 100;
    }
    getKrispEnableStats() {
        return tx;
    }
    isEnabled() {
        return ts;
    }
    isMute() {
        return this.isSelfMute() || tp;
    }
    isDeaf() {
        return this.isSelfDeaf() || tg;
    }
    isServerMute() {
        return tp;
    }
    isServerDeaf() {
        return tg;
    }
    getAudioMixerSettings() {
        return t8().audioMixerSettings;
    }
    hasContext(e) {
        return null != ti[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT;
        return e === eX.x.DEFAULT && tE;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT;
        return (
            !this.isEnabled() ||
            t8(e).mute ||
            !eN.A.didHavePermission(e$.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eX.x.DEFAULT && tm)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tS;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tS = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT,
            t = tQ && "voice_isolation" !== this.getSystemMicrophoneMode() && t8(e).mode === eb.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (ej.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return tX;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT;
        return !this.isSupported() || t8(e).deaf;
    }
    isVideoEnabled() {
        return tA && tv;
    }
    isVideoAvailable() {
        return Object.values(th).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return tv;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.STREAM;
        return to === e && null != s;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.STREAM;
        return to === e && null != s && s.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eX.x.DEFAULT;
        return e !== eV.default.getId() && (t8(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return tn.supports(eX.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eX.x.DEFAULT;
        return t8(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eX.x.DEFAULT;
        return t8(t).videoToggleStateMap[e] ?? eb.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eX.x.DEFAULT;
        return t === eX.x.DEFAULT && tY.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT;
        return e === eX.x.DEFAULT && tY.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tG;
    }
    isNativeAudioPermissionReady() {
        return tH;
    }
    getGoLiveSource() {
        return s;
    }
    getGoLiveContext() {
        return to;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return tu;
    }
    isH264MfDecodeAvailable() {
        return tc;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eX.x.DEFAULT,
            n = t8(t).localPans[e];
        return null != n ? n : e1;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eX.x.DEFAULT,
            n = t === eX.x.STREAM ? eX.Cn : eX.Hz,
            i = t8(t).localVolumes[e];
        return null != i ? i : n;
    }
    getInputVolume() {
        return t8().inputVolume;
    }
    getOutputVolume() {
        return t8().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT;
        return t8(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT;
        return t8(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            S().each(ti, (t, n) => {
                let {
                    mode: i,
                    modeOptions: { shortcut: r },
                } = t;
                i === eb.TBI.PUSH_TO_TALK && tr.has(n) && (e[n] = r);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nS(td, t8().inputDeviceId);
    }
    getOutputDeviceId() {
        return nS(t_, t8().outputDeviceId);
    }
    getVideoDeviceId() {
        return nS(th, t8().videoDeviceId);
    }
    getInputDevices() {
        return td;
    }
    getOutputDevices() {
        return t_;
    }
    getVideoDevices() {
        return th;
    }
    getEchoCancellation() {
        let e = t8();
        return ej.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return tn.supports(eX.O5.SIDECHAIN_COMPRESSION) && t8().sidechainCompression;
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
        return (0, m.isLinux)() && t8().openH264Enabled;
    }
    getLoopback() {
        return tK.size > 0;
    }
    getLoopbackReasons() {
        return tK;
    }
    getNoiseSuppression() {
        let e = t8();
        return ej.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = t8();
        return ej.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return t8().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return t8().noiseCancellation;
    }
    getHardwareEncoding() {
        return !0;
    }
    getEnableSilenceWarning() {
        return t8().silenceWarning;
    }
    getDebugLogging() {
        return tn.getDebugLogging();
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
        return nh() && t8().automaticAudioSubsystem ? eX.rB.AUTOMATIC : tn.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return tn.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return t8().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eZ.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT;
        return t8(e);
    }
    getState() {
        return {
            settingsByContext: ti,
            inputDevices: td,
            outputDevices: t_,
            appSupported: t$,
            krispModuleLoaded: tw,
            krispFatalError: tM,
            krispVersion: c,
            krispSuppressionLevel: d,
            goLiveSource: s,
            goLiveContext: to,
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
        return m.isPlatformEmbedded || this.getMode() !== eb.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        tn.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return ta;
    }
    getVideoHook() {
        return t8().videoHook;
    }
    supportsVideoHook() {
        return tn.supports(eX.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = t8().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return tn.supports(eX.O5.EXPERIMENTAL_SOUNDSHARE) && v().satisfies(w.A?.os.release, eo.$x);
    }
    supportsHookSoundshare() {
        return (0, m.isWindows)() && tn.supports(eX.O5.SOUNDSHARE) && v().satisfies(w.A?.os.release, eo.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = t8().useSystemScreensharePicker,
            n = (0, m.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return tn.supports(eX.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return t2;
    }
    getVideoEncoderExperiments(e, t) {
        let n = ["unk"];
        if (
            (n.push("nvNewPresets"),
            e === eX.x.STREAM ? n.push("nvRelaxRc=250") : n.push("nvRelaxRc=75"),
            this.getUseVaapiEncoder() && n.push("vaapi"),
            e === eX.x.STREAM && "streamer" === t && (0, m.isWindows)())
        ) {
            n.push("useCaptureDeviceForEncode");
            let { overrideDeviceReuse: e } = eE.getConfig({ location: "handleReady" });
            e && n.push("videoCaptureDeviceOverrideReuse");
        }
        return n.push("linux-vulkan"), n.join(",");
    }
    getUseGamescopeCapture() {
        return t1;
    }
    getSpeakingWhileMuted() {
        return ty;
    }
    getKrispModelOverride() {
        return _;
    }
    getKrispModels() {
        return tP;
    }
    getKrispVadActivationThreshold() {
        return t8().modeOptions.vadKrispActivationThreshold ?? 0.5;
    }
    hasActiveCallKitCall() {
        return t0;
    }
    setHasActiveCallKitCall(e) {
        t0 = e;
    }
    supportsScreenSoundshare() {
        return (0, m.isMac)()
            ? tn.supports(eX.O5.SOUNDSHARE) && v().satisfies(w.A?.os.release, eo.P$) && n_()
            : (0, m.isWindows)()
              ? tn.supports(eX.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, m.isLinux)() && tn.supports(eX.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, m.isWindows)()) {
            if (this.getBypassSystemInputProcessing()) return;
            return tV[this.getInputDeviceId()]?.active?.find((e) => "deep_noise_suppression" === e);
        }
        if ((0, m.isMac)() || (0, m.isIOS)()) return h;
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
        let e = { fetchDave: (0, m.isWeb)() };
        return tn.fetchAsyncResources(e);
    }
    startDavePreload() {
        !tF &&
            ((tF = !0),
            (0, m.isWeb)() &&
                tn.fetchAsyncResources({ fetchDave: !0 }).catch((e) => {
                    eJ.warn("DAVE preload failed:", e), eG.A.captureException(e);
                }));
    }
    getSupportedSecureFramesProtocolVersion() {
        return tn.getSupportedSecureFramesProtocolVersion();
    }
    hasClipsSource() {
        return null != a;
    }
    getGpuBrand() {
        return tz;
    }
}
function nF(e) {
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
(i = new nG(L.h, {
    VOICE_CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n, currentVoiceChannelId: i, video: r } = e;
        if ((i !== n && nn(r, null), null != t || null == n)) {
            tD = !1;
            return;
        }
        if (tD) return;
        tD = !0;
        let s = t8();
        (s.mute || s.deaf) && (np({ deaf: !1, mute: !1 }), tn.eachConnection(nt));
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (r === t.sessionId) {
                (tp = t.mute || t.suppress), (tg = t.deaf), tn.eachConnection(nt);
                let e = null != t.guildId && null != t.channelId && null != tk && tk !== t.channelId,
                    n = !tD && null == t.channelId;
                return nn(!e && !n && tA), (tk = t.channelId), !0;
            }
            return __OVERLAY__ || t.userId !== eV.default.getId() || null != eY.A.getChannelId() || nn(!1, null), e;
        }, !1);
    },
    CONNECTION_OPEN: function (e) {
        (r = e.sessionId), (tp = !1), (tg = !1);
        let t = t8();
        nh() && (nf() ? nx(eX.rB.AUTOMATIC) : t.automaticAudioSubsystem && nk()),
            tn.supports(eX.O5.OFFLOAD_ADM_CONTROLS) && tn.setOffloadAdmControls(!0),
            (0, m.isIOS)() &&
                er.getConfig({ location: "handleConnectionOpen" }).enabled &&
                tn.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
            ny(t.inputDeviceId),
            nv();
    },
    CONNECTION_CLOSED: function () {
        r = null;
    },
    POST_CONNECTION_OPEN: function () {
        return (0, m.isWeb)() && i.startDavePreload(), !1;
    },
    RTC_CONNECTION_STATE: function (e) {
        switch (e.state) {
            case eb.S7L.CONNECTING:
                nm();
                break;
            case eb.S7L.RTC_CONNECTING:
                (tO = !1), (l = void 0), (u = void 0), (tR = !1), (tQ = !1), tJ.stop(), tb.stop(), o.reset();
                break;
            case eb.S7L.RTC_CONNECTED:
                nn();
                break;
            case eb.S7L.DISCONNECTED:
                (t6 = {}),
                    (function () {
                        if (0 === tY.size) return;
                        let e = eX.x.DEFAULT,
                            { disabledLocalVideos: t } = t8(e);
                        tY.forEach((n) => {
                            I()(t[n], "If you are auto-disabled, then you are also disabled."),
                                delete t[n],
                                tn.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
                        }),
                            tY.clear(),
                            np({ disabledLocalVideos: t }, e, !1);
                    })(),
                    nO();
        }
    },
    AUDIO_SET_TEMPORARY_SELF_MUTE: function (e) {
        let { mute: t } = e;
        (tE = t), tn.eachConnection(nt);
    },
    AUDIO_TOGGLE_SELF_MUTE: function (e) {
        let { context: t, playSoundEffect: n } = e,
            { mute: i, deaf: r } = t8(t);
        if (t === eX.x.DEFAULT && (eN.A.requestPermission(e$.iL.AUDIO), tm)) return !1;
        (i = !r && !i) || (r = !1), n || (tS = !0), np({ mute: i, deaf: r }, t), tn.eachConnection(nt);
    },
    AUDIO_SET_SELF_MUTE: function (e) {
        let { context: t, mute: n, playSoundEffect: i } = e;
        np({ mute: n }, t), i || (tS = !0), tn.eachConnection(nt);
    },
    AUDIO_TOGGLE_SELF_DEAF: function (e) {
        let { context: t } = e;
        np({ deaf: !t8(t).deaf }, t), tn.eachConnection(nt);
    },
    AUDIO_TOGGLE_LOCAL_MUTE: function (e) {
        let { context: t, userId: n } = e;
        if (n === eV.default.getId()) return;
        let { localMutes: i } = t8(t);
        i[n] ? delete i[n] : (i[n] = !0),
            np({ localMutes: i }, t),
            tn.eachConnection((e) => e.setLocalMute(n, i[n] || !1), t);
    },
    AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
        let { context: t, userId: n, videoToggleState: i, persist: r, isAutomatic: s } = e;
        I()(!(r && s), "These are not allowed to both be true.");
        let a = i === eb.bb8.DISABLED,
            { disabledLocalVideos: o } = t8(t),
            l = o[n] ?? !1,
            u = tY.has(n),
            c = i === eb.bb8.AUTO_ENABLED || i === eb.bb8.MANUAL_ENABLED;
        eJ.info(`disableVideo=${a} currentlyDisabled=${l} currentlyAutoDisabled=${u}, isVideoShown=${c}`),
            I()(!(u && !l), "If you are auto-disabled, then you are also disabled.");
        let d = a !== l,
            _ = t === eX.x.DEFAULT,
            h = s && d && _,
            f = r && d && _;
        eJ.info(`changed=${d} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${h} isManualToggleByUser=${f}`);
        let { videoToggleStateMap: p } = t8(t);
        if (
            (p[n] === eb.bb8.AUTO_PROBING &&
                i === eb.bb8.AUTO_ENABLED &&
                (0, eC.A)(n, a ? eX.Al.AUTO_DISABLE : eX.Al.AUTO_ENABLE, c),
            (p[n] = i),
            np({ videoToggleStateMap: p }, t, r),
            i === eb.bb8.AUTO_PROBING
                ? eY.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
                : eY.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
            tW ||
                (eJ.info(`isAutoDisableAllowed=${tW} - disabling VideoHealthManager`),
                eY.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
            h)
        ) {
            if ((!a && !u) || (a && !tW)) return;
            (0, eC.A)(n, a ? eX.Al.AUTO_DISABLE : eX.Al.AUTO_ENABLE, c), a ? tY.add(n) : tY.delete(n);
        } else
            f &&
                (u && !a
                    ? (eJ.info("disallowing auto-disable for this session because of manual override by user"),
                      (tW = !1),
                      eY.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                      (0, eC.A)(n, eX.Al.MANUAL_REENABLE, c))
                    : (0, eC.A)(n, a ? eX.Al.MANUAL_DISABLE : eX.Al.MANUAL_ENABLE, c));
        _ && !a && tY.delete(n),
            a ? (o[n] = !0) : delete o[n],
            np({ disabledLocalVideos: o }, t, r),
            tn.eachConnection((e) => e.setLocalVideoDisabled(n, o[n] ?? !1), t);
    },
    AUDIO_SET_LOCAL_VOLUME: function (e) {
        let { context: t, userId: n, volume: i } = e;
        if (n === eV.default.getId()) return;
        let r = t === eX.x.STREAM ? eX.Cn : eX.Hz,
            { localVolumes: s } = t8(t);
        i === r ? delete s[n] : (s[n] = i),
            np({ localVolumes: s }, t),
            tn.eachConnection((e) => e.setLocalVolume(n, i), t);
    },
    AUDIO_SET_AUDIO_MIXER_SETTINGS: function (e) {
        let { context: t, settings: n } = e;
        np({ audioMixerSettings: n }, t),
            tn.setAudioMixerOptions(n),
            tn.eachConnection((e) => e.setSpatialAudioEnabled(n.enabled), eX.x.DEFAULT);
    },
    AUDIO_SET_LOCAL_PAN: function (e) {
        let { context: t, userId: n, left: i, right: r } = e,
            { localPans: s } = t8(t);
        (s[n] = { left: i, right: r }), np({ localPans: s }, t), tn.eachConnection((e) => e.setLocalPan(n, i, r), t);
    },
    AUDIO_SET_MODE: function (e) {
        let { context: t, mode: n, options: i } = e;
        np({ mode: n, modeOptions: { ...i, updatedAt: Date.now() } }, t), tn.eachConnection(t9);
    },
    AUDIO_SET_INPUT_VOLUME: function (e) {
        let { volume: t } = e;
        np({ inputVolume: ne(t) }), tn.setInputVolume(t);
    },
    AUDIO_SET_OUTPUT_VOLUME: function (e) {
        let { volume: t } = e;
        np({ outputVolume: t }), tn.setOutputVolume(t);
    },
    AUDIO_SET_INPUT_DEVICE: function (e) {
        let { id: t } = e;
        (t = nS(td, t)),
            (tu = performance.now()),
            np({ inputDeviceId: t }),
            nC(t),
            tn.eachConnection(nc),
            (l = void 0),
            (u = void 0),
            tJ.stop(),
            (tQ = !1);
        let { resetSilenceWarningOnDeviceChange: n } = e_.A.getConfig({
            location: "MediaEngineStore.handleSetInputDevice",
        });
        n && ((tR = !1), o.reset());
    },
    AUDIO_SET_OUTPUT_DEVICE: function (e) {
        let { id: t } = e;
        np({ outputDeviceId: (t = nS(t_, t)) }), tn.setAudioOutputDevice(t);
    },
    AUDIO_SET_ACTIVE_INPUT_PROFILE: function (e) {
        let { inputProfile: t } = e;
        np({ activeInputProfile: t });
        let n = t8();
        tn.eachConnection((e) => {
            t9(e), nc(e);
        }),
            tn.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
            nD();
    },
    AUDIO_SET_ECHO_CANCELLATION: function (e) {
        let t = np({ echoCancellation: e.enabled });
        tn.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nD(), nb(e.location);
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION: function (e) {
        let t;
        (t = np({ sidechainCompression: e.enabled })), tn.setSidechainCompression(t.sidechainCompression);
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function (e) {
        let t = np({ sidechainCompressionStrength: e.strength });
        tn.setSidechainCompressionStrength(t.sidechainCompressionStrength);
    },
    AUDIO_SET_LOOPBACK: function (e) {
        let { enabled: t, loopbackReason: n } = e;
        return t ? tK.add(n) : tK.delete(n), nD();
    },
    AUDIO_SET_NOISE_SUPPRESSION: function (e) {
        let t = np({ noiseSuppression: e.enabled });
        tn.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nD(), nb(e.location);
    },
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function (e) {
        let t = np({ automaticGainControl: e.enabled });
        tn.eachConnection((e) => nl(e, t.automaticGainControl)), nD(), nb(e.location);
    },
    AUDIO_SET_NOISE_CANCELLATION: function (e) {
        let t = np({ noiseCancellation: e.enabled });
        tn.eachConnection((e) => nu(e, t.noiseCancellation)), nD(), nb(e.location);
    },
    AUDIO_SET_KRISP_MODEL_OVERRIDE: function (e) {
        ev.A.setKrispModelOverride(e.model), (_ = e.model), nD();
    },
    AUDIO_SET_DISPLAY_SILENCE_WARNING: function (e) {
        np({ silenceWarning: e.enabled });
    },
    AUDIO_SET_DEBUG_LOGGING: function (e) {
        tn.setDebugLogging(e.enabled);
    },
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: function (e) {
        let { level: t } = e;
        (d = t), ev.A.setKrispSuppressionLevel(t);
    },
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: function (e) {
        (0, m.isWeb)() || ((tx = e.enabled), tn.setNoiseCancellationEnableStats?.(e.enabled));
    },
    MEDIA_ENGINE_SET_VIDEO_HOOK: function (e) {
        np({ videoHook: e.enabled });
    },
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function (e) {
        np({ experimentalSoundshare2: e.enabled });
    },
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: function (e) {
        let { enabled: t } = e;
        np({ useSystemScreensharePicker: t });
    },
    AUDIO_SET_ATTENUATION: function (e) {
        let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i } = e,
            r = np({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i });
        tn.eachConnection((e) =>
            e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers),
        );
    },
    AUDIO_SET_QOS: function (e) {
        let { enabled: t } = e;
        np({ qos: t }), tn.eachConnection((e) => e.setQoS(t));
    },
    MEDIA_ENGINE_DEVICES: function (e) {
        let t = td;
        if (
            ((td = nT(e, { deviceType: eX.oh.AUDIO_INPUT, defaultName: eQ.intl.string(eQ.t["/QIjDA"]) })),
            !S().isEqual(td, t))
        ) {
            let e = t8();
            nC(nS(td, e.inputDeviceId)), tn.eachConnection(nc);
        }
        !(function (e) {
            let t = t_;
            if (
                ((t_ = nT(e, { deviceType: eX.oh.AUDIO_OUTPUT, defaultName: eQ.intl.string(eQ.t.xlUg0v) })),
                !S().isEqual(t_, t))
            ) {
                let e = t8(),
                    n = nS(t_, e.outputDeviceId);
                tn.setAudioOutputDevice(n);
                let i = nN(t),
                    r = nN(t_);
                i !== r &&
                    tn.eachConnection((e) => {
                        e.context === eX.x.STREAM && e.setSoundshareDiscardRearChannels(r);
                    });
            }
        })(e);
        tv = e.videoDevices.length > 0;
        let n = th;
        if (
            ((th = nT(e, { deviceType: eX.oh.VIDEO_INPUT, defaultName: eQ.intl.string(eQ.t.WKWARY) })),
            tA && !S().isEqual(th, n))
        ) {
            let e = void 0 !== th[tI],
                t = tI === eX.dx && n[eX.dx]?.disabled,
                i = "Firefox" === C().name && "" === tI && n[tI]?.name === "Default" && !n[tI]?.disabled;
            nn(e || t || i);
        }
    },
    AUDIO_VOLUME_CHANGE: function (e) {
        let { inputVolume: t, outputVolume: n } = e;
        np({ inputVolume: ne(t), outputVolume: n });
    },
    AUDIO_RESET: function () {
        b.w.remove(e0), location.reload();
    },
    AUDIO_INPUT_DETECTED: function (e) {
        let { inputDetected: t } = e;
        if (null == t) return !1;
        if (((tO = !0 !== tR && !t), t)) (tR = !0), (tQ = !1), tJ.stop(), tb.stop();
        else if (t8().mode === eb.TBI.VOICE_ACTIVITY && tR) {
            let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = e_.A.getConfig({
                location: "MediaEngineStore.handleInputDetected",
            });
            e &&
                tJ.start(e4, () => {
                    eO.default.track(eb.HAw.HARDWARE_MUTE_GUESSED, {
                        input_device_name: td[nS(td, t8().inputDeviceId)]?.name,
                        rtc_connection_id: eY.A.getRTCConnectionId(),
                    }),
                        (tQ = !0),
                        i.emitChange();
                }),
                null != t &&
                    tb.start(t * eU.A.Millis.MINUTE, () => {
                        (tR = !1), o.reset();
                    });
        }
    },
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: function (e) {
        let { osVolume: t, osMuted: n } = e;
        (u = t), (l = n);
    },
    AUDIO_SET_SUBSYSTEM: function (e) {
        nx(e.subsystem);
    },
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: function (e) {
        let t = e.bypassEnabled;
        np({ bypassSystemInputProcessing: t }), tn.setAudioInputBypassSystemProcessing(t), nb(e.location);
    },
    MEDIA_ENGINE_SET_AUDIO_ENABLED: function (e) {
        (ts = e.enabled), e.unmute && np({ mute: !1, deaf: !1 }), tn.eachConnection(nt);
    },
    MEDIA_ENGINE_SET_VIDEO_ENABLED: function (e) {
        let { enabled: t } = e;
        eN.A.requestPermission(e$.iL.CAMERA), nn(t);
    },
    MEDIA_ENGINE_PERMISSION: function (e) {
        let { kind: t, granted: n } = e;
        if (!n)
            switch (t) {
                case "audio":
                    (ts = !1), tn.eachConnection(nt);
                    break;
                case "video":
                    nn(!1);
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
                l = ek.A.getPidFromDesktopSource(i);
            m.isPlatformEmbedded && ({ soundshareId: e, soundshareSession: n } = nR(l, r)),
                a !== to && (null != s && tn.setGoLiveSource(null, to), (to = a)),
                nn(a === eX.x.STREAM && tA, {
                    desktopSource: { id: i, sourcePid: l, soundshareId: e, soundshareSession: n },
                    quality: { resolution: o.resolution, frameRate: o.frameRate },
                });
        } else if (t?.cameraSettings != null) {
            let e = t.context ?? eX.x.DEFAULT,
                { videoDeviceGuid: n, audioDeviceGuid: i, sound: r } = t.cameraSettings,
                s = e === eX.x.STREAM && tA,
                a = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
            nn(s, {
                cameraSource: { videoDeviceGuid: n, audioDeviceGuid: i, sound: r },
                quality: { resolution: a.resolution, frameRate: a.frameRate },
            });
        } else nn(tA, null);
    },
    MEDIA_ENGINE_SET_VIDEO_DEVICE: function (e) {
        let { id: t } = e;
        np({ videoDeviceId: (t = nS(th, t)) }), nn();
    },
    MEDIA_ENGINE_INTERACTION_REQUIRED: function (e) {
        return ta !== e.required && ((ta = e.required), e.required || tn.interact(), !0);
    },
    USER_SETTINGS_MODAL_INIT: nU,
    USER_SETTINGS_MODAL_SET_SECTION: nU,
    CERTIFIED_DEVICES_SET: function () {
        return tn.eachConnection(nc), !1;
    },
    RPC_APP_CONNECTED: function (e) {
        let { application: t } = e;
        tr.add(t.id);
    },
    RPC_APP_DISCONNECTED: function (e) {
        let { application: t } = e;
        tr.delete(t.id);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { mediaEngineState: t } = e;
        (ti = t.settingsByContext),
            (td = t.inputDevices),
            (t_ = t.outputDevices),
            (t$ = t.appSupported),
            (tw = t.krispModuleLoaded),
            (tM = t.krispFatalError),
            (c = t.krispVersion),
            (to = t.goLiveContext);
    },
    APP_STATE_UPDATE: function (e) {
        let { state: t } = e,
            n = j.A.isEnabled();
        if (t === eb.g6G.BACKGROUND && tA && !n) (tN = !0), nn(!1);
        else {
            if (t !== eb.g6G.ACTIVE || !tN) return !1;
            (tN = !1), nn(!0);
        }
        return !0;
    },
    SET_CHANNEL_BITRATE: function (e) {
        tn.eachConnection((t) => t.setBitRate(e.bitrate));
    },
    SET_VAD_PERMISSION: function (e) {
        let { hasPermission: t } = e,
            n = !t;
        if (n === tm) return !1;
        (tm = n), tn.eachConnection(nt);
    },
    SET_NATIVE_PERMISSION: function (e) {
        let { state: t, permissionType: n } = e,
            i = t === e$.hL.ACCEPTED;
        switch (n) {
            case e$.iL.AUDIO:
                (tH = !0), tn.eachConnection(nt);
                break;
            case e$.iL.CAMERA:
                !i && tA && nn(!1);
                break;
            default:
                return !1;
        }
    },
    SET_CHANNEL_VIDEO_QUALITY_MODE: function (e) {
        tn.eachConnection((t) => t.applyVideoQualityMode(e.mode));
    },
    MEDIA_ENGINE_SET_AEC_DUMP: function (e) {
        let { enabled: t } = e,
            n = np({ aecDumpEnabled: t });
        tn.setAecDump(n.aecDumpEnabled);
    },
    MEDIA_ENGINE_SET_OPENH264_ENABLED: function (e) {
        let { enabled: t } = e;
        np({ openH264Enabled: t }), g.Ay?.setOpenH264Enabled?.(t);
    },
    MEDIA_ENGINE_RESET_SETTINGS: function (e) {
        let { overrides: t } = e;
        if (__OVERLAY__) return !1;
        (ti = Object.values(eX.x).reduce((e, n) => {
            let i = e9();
            return (e[n] = S().merge(i, t[n])), e;
        }, {})),
            b.w.set(e0, ti),
            nE();
    },
    CHANNEL_DELETE: function () {
        if ((!tA && null == s) || null != eY.A.getRTCConnectionId()) return !1;
        nn(!1, null);
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: function (e) {
        if (e.code === eX.CO.KRISP_CPU_OVERUSE) {
            (t6.noiseCancellation = !1), (t6.noiseSuppression = !0);
            let e = t8();
            return tn.eachConnection((t) => nu(t, e.noiseCancellation)), nD(), nb(), !0;
        }
        return !1;
    },
    MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR: function (e) {
        return (
            e.code === eX.CO.KRISP_VAD_CPU_OVERUSE &&
            ((t6.modeOptions = { vadUseKrisp: !1 }), tn.eachConnection((e) => t9(e)), !0)
        );
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function () {
        return !!tU && ((tU = !1), !0);
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
        let { settings: t } = e;
        tn.applyMediaFilterSettings(t).finally(() => {
            (tG = !1), i.emitChange();
        });
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function () {
        tG = !0;
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function () {
        tG = !1;
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            local: n,
            wasSaved: i,
        } = e;
        if (t !== eq.oD.PRELOADED_USER_SETTINGS || n || null != i) return !1;
        nv(!0);
    },
    CLIPS_INIT: function (e) {
        let { sourceId: t, applicationName: n, quality: r } = e;
        if (!(0, G.Ao)() || null == w.A || (a?.desktopSource.id === t && a.quality === r)) return !1;
        null != a &&
            (tn.setClipsSource(null),
            (0, m.isWindows)() &&
                (null != a.desktopSource.soundshareId
                    ? M.c1(a.desktopSource.soundshareId)
                    : null != a.desktopSource.sourcePid && t8().videoHook && M.c1(a.desktopSource.sourcePid)));
        let s = ek.A.getPidFromDesktopSource(t),
            { soundshareId: o, soundshareSession: l } = nR(s, !0);
        a = { desktopSource: { id: t, sourcePid: s, soundshareId: o, soundshareSession: l }, quality: r };
        let u = t4("MediaEngineStore clips"),
            c = t8().videoHook,
            d = !c || !ee.getConfig({ location: "handleClipsInit" }).enabled,
            _ = c && em.getConfig({ location: "handleClipsInit" }).enabled,
            { minCaptureWidth: h, minCaptureHeight: f } = ef.getConfig({ location: "handleClipsInit" });
        tn.setClipsSource({
            desktopDescription: {
                id: a.desktopSource.id,
                soundshareId: a.desktopSource.soundshareId,
                useVideoHook: c,
                useHookFramePacer: d,
                useGraphicsCapture: nd(),
                useCaptureDeviceForEncode: !1,
                useLoopback: i.getExperimentalSoundshare(),
                useQuartzCapturer: !0,
                allowScreenCaptureKit: n_(),
                videoHookStaleFrameTimeoutMs: 500,
                graphicsCaptureStaleFrameTimeoutMs: e2,
                hdrCaptureMode: u,
                videoHookAllowDx12: _,
                minCaptureWidth: h,
                minCaptureHeight: f,
            },
            quality: r,
            applicationName: n,
            videoEncoderExperiments: i.getVideoEncoderExperiments(eX.x.STREAM, "streamer"),
        });
    },
    CLIPS_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        !1 === t.decoupledClipsEnabled && ((a = null), tn.setClipsSource(null));
    },
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function (e) {
        tX = e.enabled;
    },
    MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: function (e) {
        let { deviceId: t, active: n, available: i } = e;
        tV[t] = { active: n, available: i };
    },
})),
    (o = new eu(tn, i));
let nV = i;
