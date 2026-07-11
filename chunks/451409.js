"use strict";
let i, r, a, s, l, o, d, c, u, _, E;
n.d(t, { yz: () => e8, Ay: () => nB }), n(323874), n(14289), n(35956), n(321073);
var A,
    h = n(823598),
    I = n(626584),
    f = n(723702),
    p = n(19575);
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
            new I.A("injectMediaEngine").error("Potentially corrupt installation:", e.message);
        }
        return !1;
    },
    supportsFeature: (e) => p.Ay.supportsFeature(e),
    setProcessPriority(e) {
        p.Ay.getDiscordUtils().setProcessPriority(e);
    },
    getVoiceEngine: () => p.Ay.getVoiceEngine(),
    getOpenH264LibraryPath: () => p.Ay.getOpenH264LibraryPath(),
});
var T = n(284009),
    m = n.n(T),
    g = n(735438),
    S = n.n(g),
    N = n(481613),
    C = n.n(N),
    O = n(299855),
    R = n.n(O),
    L = n(17928),
    D = n(459838),
    y = n(506774),
    v = n(451988),
    b = n(228366),
    M = n(77729),
    P = n(719129),
    U = n(894539),
    w = n(124838),
    G = n(274372),
    x = n(915618),
    k = n(572164),
    F = n(680725),
    V = n(487329),
    B = n(736056),
    H = n(6494),
    j = n(952818),
    W = n(540305),
    Y = n(945810);
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
    $ = (0, Y.mj)({
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
let q = (0, Y.mj)({
        name: "2026-06-av1-encode-linux",
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
var ea = n(574381),
    es = n(941426),
    el = n(325278);
let eo = new es.Vy("InputWatcher");
class ed {
    mediaEngine;
    mediaEngineStore;
    stateChangeTimeout = new v.Ep();
    inputDetected = void 0;
    lastUpdateTime = performance.now();
    constructor(e, t) {
        (this.mediaEngine = e), (this.mediaEngineStore = t), this.mediaEngine.on(D.bg.Silence, this.handleSilence);
    }
    reset() {
        this.stateChangeTimeout.stop(),
            null != this.inputDetected && this.handleSilence(!this.inputDetected),
            (this.inputDetected = void 0);
    }
    fetchInputDeviceOSConfig = async () => {
        if ((0, ea.uF)() && R().satisfies(M.A?.os.release, el.PH))
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
                    b.h.dispatch({ type: "AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED", osVolume: i, osMuted: r });
                }
            } catch (e) {
                eo.warn(`Failed to get device OS volume and/or mute state: ${e}`);
            }
    };
    handleSilence = (e) => {
        let t = !e;
        this.stateChangeTimeout.start(t ? 1500 : 5e3, async () => {
            eo.info("Silence:", e),
                (this.inputDetected = t),
                (this.lastUpdateTime = performance.now()),
                e && (await this.fetchInputDeviceOSConfig()),
                b.h.dispatch({
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
var eu = n(140175);
(0, Y.mj)({
    name: "2026-02-mobile-volume-output-slider-removal",
    kind: "user",
    defaultConfig: { audioOutputPresent: !0, nonContextualStreamOutputPresent: !0, showTileVolumeIndicator: !1 },
    variations: { 1: { audioOutputPresent: !1, nonContextualStreamOutputPresent: !1, showTileVolumeIndicator: !0 } },
});
var e_ = n(801644);
let eE = (0, Y.mj)({
        kind: "user",
        name: "2026-06-systemwide-echo-cancellation-for-people-who-refuse-to-wear-headphones",
        defaultConfig: { echoReferenceMode: "mix" },
        variations: { 1: { echoReferenceMode: "auto" } },
    }),
    eA = (0, Y.mj)({
        name: "2026-06-upscale-small-captured-frames",
        kind: "user",
        defaultConfig: { minCaptureWidth: 0, minCaptureHeight: 0 },
        variations: { 1: { minCaptureWidth: 130, minCaptureHeight: 130 } },
    }),
    eh = (0, et.Ay)({
        kind: "user",
        name: "2025-10-vad-before-processing",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eI = (0, Y.mj)({
        name: "2026-03-video-capture-device-no-reuse",
        kind: "user",
        defaultConfig: { overrideDeviceReuse: !1 },
        variations: { 1: { overrideDeviceReuse: !0 } },
    }),
    ef = (0, Y.mj)({
        name: "2026-04-video-hook-dx12",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    ep = (0, Y.mj)({
        name: "2026-02-wgc-dirty-regions-all",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eT = (0, Y.mj)({
        name: "2026-02-wgc-dirty-regions",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    em = (0, Y.mj)({
        name: "2026-06-wmf-cpu-encode-intel",
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
function eS(e) {
    return eg.getConfig({ location: e });
}
let eN = (0, Y.mj)({
    name: "2026-01-wmf-gpu-encode-intel",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eC = n(75076),
    eO = n(91777),
    eR = n(559633),
    eL = n(205106),
    eD = n(174459),
    ey = n(652215);
let ev = new es.Vy("AudioEffects");
async function eb(e, t, n) {
    if (!(0, ea.uF)()) return Promise.reject(Error("Audio effects querying not supported on non-Windows platforms"));
    try {
        let i = await n.getDeviceAudioEffects(e);
        return (
            b.h.dispatch({ type: "MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS", deviceId: t, ...i }),
            eD.default.track(ey.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, {
                succeeded: !0,
                active_effects: i.active,
                available_effects: i.available,
            }),
            i
        );
    } catch (e) {
        ev.error("Failed to probe audio effects for device", e),
            eD.default.track(ey.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, { succeeded: !1 });
    }
}
var eM = n(967347),
    eP = n(617617),
    eU = n(125325),
    ew = n(499156),
    eG = n(353835),
    ex = n(927813),
    ek = n(38405),
    eF = n(350535),
    eV = n(280450),
    eB = n(131319),
    eH = n(347481),
    ej = n(734057),
    eW = n(763827),
    eY = n(287809),
    eK = n(117549),
    e$ = n(765682),
    ez = n(829997),
    eq = n(355097),
    eZ = n(621380),
    eX = n(731854),
    eQ = n(375708);
let eJ = new I.A("MediaEngineStore"),
    e0 = "MediaEngineStore",
    e1 = { left: 1, right: 1 },
    e2 = 5 * ex.A.Millis.SECOND,
    e3 = 2 * ex.A.Millis.SECOND,
    e6 = 30 * ex.A.Millis.SECOND,
    e4 = +ex.A.Millis.MINUTE,
    e7 = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2",
    e5 = 0;
var e8 =
    (((A = {}).WEBCAM = "WEBCAM"),
    (A.INTEGRATED = "INTEGRATED"),
    (A.BLUETOOTH = "BLUETOOTH"),
    (A.AIRPLAY = "AIRPLAY"),
    (A.HEADSET = "HEADSET"),
    A);
function e9() {
    return {
        mode: ey.TBI.VOICE_ACTIVITY,
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
            mode: ey.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    tt = { modeOptions: { vadUseKrisp: !1 }, noiseCancellation: !1, noiseSuppression: !0 },
    tn = (0, D.hB)((0, D.WI)());
eJ.enableNativeLogger(!0);
let ti = {},
    tr = new Set([eX.x.DEFAULT]),
    ta = tn.supports(eX.O5.AUTO_ENABLE),
    ts = !1,
    tl = eX.x.STREAM,
    to = 0,
    td = !1,
    tc = performance.now(),
    tu = null,
    t_ = { [eX.dx]: nT("No Input Devices") },
    tE = { [eX.dx]: nT("No Output Devices") },
    tA = { [eX.dx]: nT("No Video Devices") },
    th = new v.Ep(),
    tI = !1,
    tf = !1,
    tp = !1,
    tT = !1,
    tm = !1,
    tg = eX.qe,
    tS = eX.qe,
    tN = !1,
    tC = !1,
    tO = new v.Ep(),
    tR = !1,
    tL = !1,
    tD = !1,
    ty = !1,
    tv = new v.Ep(),
    tb = !1,
    tM = !1,
    tP = !1,
    tU = !1,
    tw = [],
    tG = !1,
    tx = null,
    tk = !1,
    tF = !1,
    tV = !1,
    tB = {},
    tH = null,
    tj = null,
    tW = !1;
eO.A.hasPermission(e$.iL.AUDIO, { showAuthorizationError: !1 }),
    eO.A.hasPermission(e$.iL.CAMERA, { showAuthorizationError: !1 });
let tY = new Set(),
    tK = !1,
    t$ = new Set(),
    tz = {},
    tq = null,
    tZ = null,
    tX = null,
    tQ = !0,
    tJ = !1,
    t0 = new v.Ep(),
    t1 = !1,
    t2 = !1,
    t3 = !1,
    t6 = !1,
    t4 = {};
function t7(e) {
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
function t8() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT,
        t = ti[e];
    return null == t && ((t = e9()), (ti[e] = t)), t;
}
function t9() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT,
        t = t8(e),
        n = te[t.activeInputProfile ?? eZ.m.CUSTOM],
        i = nP() ? t4 : tt,
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
function ne(e) {
    let t = t9(e.context),
        n = t.mode;
    e.context === eX.x.DEFAULT && (0, eu.N)(!1, !1);
    let { showPTTSpeakingIndicator: i } = ew.A.getConfig({ location: "setInputMode" }),
        r = i && n === ey.TBI.PUSH_TO_TALK;
    e.setInputMode(n, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: !!r || t.modeOptions.autoThreshold,
        vadUseKrisp: (!!r || t.modeOptions.vadUseKrisp) && nP(),
        vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? 0.5,
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        vadDuringPreProcess: t.modeOptions.vadDuringPreProcess ?? !1,
        pttReleaseDelay: Math.round(t.modeOptions.delay),
    });
}
function nt(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eX.Hz;
    return S().clamp(e, 0, t);
}
function nn(e) {
    let t = t9(e.context),
        n = !ta || t.mute || t.deaf;
    switch (e.context) {
        case eX.x.DEFAULT:
            n = n || tI || tf || tp || !eO.A.didHavePermission(e$.iL.AUDIO);
            break;
        case eX.x.STREAM:
            n = !0;
            break;
        default:
            e.context;
    }
    e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eX.x.DEFAULT && U.A.updateNativeMute();
}
function ni() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tm,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        n = a;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, f.isWindows)()
                ? P.c1(n.desktopSource.soundshareId)
                : null != n.desktopSource.sourcePid && t9().videoHook && P.c1(n.desktopSource.sourcePid),
            tn.setGoLiveSource(null, tl)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            tn.setGoLiveSource(null, tl),
        tm || e)
    ) {
        let t = t9().videoDeviceId;
        tm && t === eX.dx && tS === eX.dx && tg !== eX.qe ? (t = tg) : (tS = t),
            (tg = (tm = e) ? nN(tA, t) : eX.qe),
            tn.setVideoInputDevice(tg);
    }
    if (((a = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = t7("MediaEngineStore go live"),
                r = t9().videoHook,
                a = n_(),
                s = a ? ((0, f.isWindows)() && R().satisfies(M.A?.os.release, el.fG) ? el.zl : el.eg) : 0,
                l = !1;
            (0, f.isWindows)() &&
                s >= el.zl &&
                (l =
                    !0 === tZ
                        ? eT.getConfig({ location: "updateVideo" }).enabled
                        : ep.getConfig({ location: "updateVideo" }).enabled);
            let o = !r || !ee.getConfig({ location: "updateVideo" }).enabled,
                d = r && ef.getConfig({ location: "updateVideo" }).enabled,
                { minCaptureWidth: c, minCaptureHeight: u } = eA.getConfig({ location: "updateVideo" });
            tn.setGoLiveSource(
                {
                    desktopDescription: {
                        id: t.desktopSource.id,
                        soundshareId: t.desktopSource.soundshareId,
                        useVideoHook: r,
                        useHookFramePacer: o,
                        useGraphicsCapture: a,
                        useGraphicsCaptureApiLevel: s,
                        useCaptureDeviceForEncode: (0, f.isWindows)(),
                        useLoopback: i.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: nE(),
                        videoHookStaleFrameTimeoutMs: 500,
                        graphicsCaptureStaleFrameTimeoutMs: e2,
                        hdrCaptureMode: n,
                        enableGlobalFramePoolLock: (function (e) {
                            let { location: t, disable: n = !1 } = e;
                            return n ? en.definition.defaultConfig : en.getConfig({ location: t });
                        })({ location: "updateVideo" }).enabled,
                        useGraphicsCaptureDirtyRegions: l,
                        videoHookAllowDx12: d,
                        minCaptureWidth: c,
                        minCaptureHeight: u,
                    },
                    quality: e,
                },
                tl,
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
                tl,
            );
    }
}
function nr(e) {
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
let na = new Set([
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
        (0, V.QW)({ type: V.iy.NOISE_CANCELLER_ERROR, underlyingError: nr(e) }),
        eD.default.track(ey.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
        na.has(e))
    ) {
        tU = !0;
        return;
    }
    e === eX.CO.KRISP_VAD_CPU_OVERUSE
        ? b.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e })
        : ((tk = !0), b.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e }));
}
function nl(e, t) {
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
        b.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_FILTER_ERROR", code: e, target: n ? "live" : "preview" });
}
function no(e) {
    let t = z({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function nd(e, t) {
    e.setAutomaticGainControl(no(t));
}
function nc(e, t) {
    let n = (0, eL.A)(t, i.getSystemMicrophoneMode());
    n !== t && eJ.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: r } = z({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(r);
}
function nu(e) {
    let t = t9(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eH.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eH.A.hasNoiseSuppression(n) || t.noiseSuppression),
        nd(e, eH.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        nc(e, t.noiseCancellation),
        e.setSpatialAudioEnabled(t.audioMixerSettings.enabled),
        (0, f.isWindows)() && R().satisfies(M.A?.os.release, ">=10.0.15063") && e.context === eX.x.DEFAULT)
    ) {
        let t = (function (e) {
            let { location: t } = e;
            return eE.getConfig({ location: t });
        })({ location: "updateConnectionVoiceProcessing" });
        e.setEchoReferenceMode(t.echoReferenceMode);
    }
    if ((0, f.isWeb)()) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function n_() {
    return (0, f.isWindows)() && R().satisfies(M.A?.os.release, el.yg);
}
function nE() {
    return (0, f.isMac)() && tn.supports(eX.O5.SCREEN_CAPTURE_KIT) && R().satisfies(M.A?.os.release, el.e);
}
function nA() {
    return (
        (0, f.isWindows)() &&
        tn.supports(eX.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        tn.supports(eX.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nh() {
    return tn.supports(eX.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function nI(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eX.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = t8(t);
    return Object.assign(i, e), !__OVERLAY__ && n && y.w.set(e0, ti), i;
}
function nf() {
    let e = t9();
    nO(e.inputDeviceId),
        tn.setAudioOutputDevice(e.outputDeviceId),
        ni(),
        tn.setInputVolume(e.inputVolume),
        tn.setOutputVolume(e.outputVolume),
        tn.setAecDump(e.aecDumpEnabled),
        tn.setSidechainCompression(e.sidechainCompression),
        tn.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        tn.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        (0, f.isLinux)() && p.Ay?.setOpenH264Enabled?.(e.openH264Enabled),
        tn.setAudioMixerOptions(e.audioMixerSettings);
}
function np() {
    ta || tn.enable().then(() => b.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nT(e) {
    return { id: eX.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
}
function nm(e, t) {
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
let ng = /^HDAUDIO\\(?:SUB)?FUNC_\d+&VEN_(?:8086|1002|10DE)/;
function nS(e, t) {
    let { deviceType: n, defaultName: i } = t,
        r = e[{ audioinput: "inputDevices", audiooutput: "outputDevices", videoinput: "videoDevices" }[n]];
    if (0 === r.length) {
        let e = nT(i);
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
                    case nm(e, r):
                        return "WEBCAM";
                    case ["builtin", "displayport", "hdmi"].includes(e.macosTransportType ?? ""):
                    case null != e.hardwareId && ng.test(e.hardwareId):
                        return "INTEGRATED";
                    case S()(e.hardwareId).startsWith("BTHENUM"):
                    case ["bluetooth", "bluetoothle"].includes(e.macosTransportType ?? ""):
                        return "BLUETOOTH";
                    case ["airplay", "continuitycapturewireless"].includes(e.macosTransportType ?? ""):
                        return "AIRPLAY";
                    case "audioinput" === e.type && nm(e, i):
                    case "audiooutput" === e.type && nm(e, n):
                        return "HEADSET";
                }
            })(t, e),
        }))
        .keyBy("id")
        .value();
}
function nN(e, t) {
    let n = e[t] ?? e[eX.dx] ?? S()(e).values().first();
    return null != n ? n.id : t;
}
function nC(e) {
    if (!(0, f.isWindows)() || !X.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects) return;
    let t = t_[e];
    t?.guid != null && eb(t.guid, e, tn);
}
function nO(e) {
    tn.setAudioInputDevice(e), nC(e);
}
function nR(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nL() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = eP.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let i = n === eq.W.USER ? eX.x.DEFAULT : eX.x.STREAM,
            r = i === eX.x.STREAM ? eX.Cn : eX.Hz,
            a = t[n] ?? {},
            { localMutes: s, localVolumes: l } = t9(i);
        for (let [e, t] of Object.entries(a))
            null == (0, eU.tM)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== r ? (l[e] = t.volume) : delete l[e],
                tn.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (e)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == a[e] &&
                    (delete s[e],
                    delete l[e],
                    tn.eachConnection((t) => {
                        t.setLocalVolume(e, r), t.setLocalMute(e, !1);
                    }, i));
        nI({ localMutes: s, localVolumes: l }, i);
    }
}
function nD(e, t) {
    if (t) {
        let { soundshareId: t, soundshareSession: a } = (function (e) {
            if (null == i)
                return (
                    eJ.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
                    { soundshareId: null, soundshareSession: "" }
                );
            {
                let t = i.getExperimentalSoundshare() ? e : eG.A.getAudioPid(e),
                    n = "";
                return null != t && (n = eG.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n };
            }
        })(e);
        if (null != t) {
            var n, r;
            return (
                (n = t),
                (r = a),
                (0, f.isWindows)() &&
                    n > 1 &&
                    P.GH(n, { soundshare_session: r }).then((e) => {
                        null == e ||
                            j.Ay.shouldContinueWithoutElevatedProcessForPID(n) ||
                            b.h.wait(() => {
                                b.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: e });
                            });
                    }),
                { soundshareId: t, soundshareSession: a }
            );
        }
    }
    return null != e && t9().videoHook && P.GH(e), { soundshareId: null, soundshareSession: null };
}
function ny() {
    let e = eX.x.DEFAULT,
        { videoToggleStateMap: t } = t9(e);
    for (let [e, n] of Object.entries(t)) n === ey.bb8.AUTO_PROBING && delete t[e];
    nI({ videoToggleStateMap: t }, e, !1);
}
function nv(e) {
    let t = t9(),
        n = tn.getAudioSubsystem(),
        r = tn.getAudioLayer(),
        a = nN(t_, t.inputDeviceId),
        s = t_[a]?.name,
        l = (0, eL.A)(t.noiseCancellation, i.getSystemMicrophoneMode());
    eD.default.track(ey.HAw.VOICE_PROCESSING, {
        echo_cancellation: t.echoCancellation,
        noise_cancellation: t.noiseCancellation,
        noise_suppression: t.noiseSuppression,
        automatic_gain_control: t.automaticGainControl,
        location: e,
        bypass_system_input_processing: t.bypassSystemInputProcessing,
        audio_subsystem: n,
        audio_layer: r,
        input_device: s,
        effective_noise_cancellation: l,
    });
}
function nb() {
    let e = t9(),
        t = t$.size > 0,
        n = e.inputDeviceId,
        i = eH.A.hasEchoCancellation(n) || e.echoCancellation,
        r = eH.A.hasNoiseSuppression(n) || e.noiseSuppression,
        a = no(eH.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation;
    tn.setLoopback(t, {
        echoCancellation: i,
        echoCancellationPreEcho: !t,
        noiseSuppression: r,
        automaticGainControlConfig: a,
        noiseCancellation: s,
    });
}
async function nM() {
    if (!tn.supports(eX.O5.VAAPI) || window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let e = await window.DiscordNative.processUtils.getSystemInfo();
    (e.electronGPUInfo?.gpuDevice ?? []).some((e) => 4098 === e.vendorId) &&
        ((t3 = !0), (t2 = tn.supports(eX.O5.GAMESCOPE_CAPTURE)));
}
function nP() {
    return (tP || !1) && !tU;
}
async function nU() {
    try {
        await p.Ay.ensureModule("discord_krisp");
        let e = p.Ay.requireModule("discord_krisp");
        (tP = !0),
            (c = e.getSdkVersion?.()),
            (u = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (tw = e), i.emitChange();
            }),
            i.emitChange(),
            await p.Ay.ensureModule("discord_voice");
        let t = p.Ay.requireModule("discord_voice");
        t.setupKrispPath?.();
    } catch (t) {
        eJ.warn(`Failed to load Krisp module: ${t.message}`), ek.A.captureException(t);
        let e = eX.CO.KRISP_INIT_ERROR;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eX.CO.KRISP_INIT_ERROR : n;
        }
        (0, V.QW)({ type: V.iy.NOISE_CANCELLER_ERROR, underlyingError: nr(e) }),
            eD.default.track(ey.HAw.VOICE_PROCESSING, { noise_canceller_error: e });
    } finally {
        tM = !1;
    }
}
async function nw() {
    try {
        let e,
            t = "",
            n = !1,
            i = URL.parse(e7);
        if (null === i) return void eJ.log("OpenH264 URL ", i, " is invalid");
        let r = i.pathname.split("/"),
            a = r[r.length - 1].replace(".bz2", "");
        try {
            let t = await p.Ay.downloadOpenH264(
                e7,
                a,
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
            (eD.default.track(ey.HAw.VIDEO_OPENH264_DOWNLOADED, {
                success: e,
                fetched_from_network: n,
                error_message: t,
            }),
            e)
        ) {
            let e = await p.Ay.cleanupUnusedOpenH264Files([a]);
            eJ.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        eJ.error("OpenH264 download failed", e);
    }
}
function nG(e) {
    e === eX.rB.AUTOMATIC
        ? (nI({ automaticAudioSubsystem: !0 }), nx())
        : (nI({ automaticAudioSubsystem: !1 }), tn.setAudioSubsystem(e));
}
function nx() {
    tn.queueAudioSubsystem(eX.rB.EXPERIMENTAL);
}
function nk(e) {
    let { section: t } = e;
    return t === ey.nc_.VOICE && np(), !1;
}
class nF extends L.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        let e;
        if (
            ((l ??= new ed(tn, this)),
            th.start(e6, () => {
                eJ.error("Device enumeration timed out"), eD.default.track(ey.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
            }),
            tn.on(D.bg.Connection, (e) => {
                let t;
                nb(), ne(e), nn(e), nu(e);
                let n = t9();
                e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers),
                    e.setQoS(n.qos),
                    (0, f.isWindows)()
                        ? (e.setExperimentFlag(eX.fd.H265_HARDWARE_ONLY, !0),
                          (null != tj
                              ? tj
                              : "u" > typeof window
                                ? (tj = t5().then((e) => ((tH = e), e)))
                                : Promise.resolve(!1)
                          ).then((t) => {
                              e.setExperimentFlag(eX.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                          }))
                        : (0, f.isMac)() && e.setExperimentFlag(eX.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                    (0, f.isLinux)() && n.openH264Enabled && e.setExperimentFlag(eX.fd.USE_LIBOPENH264_DECODER, !0),
                    (function (e) {
                        let { location: t, disable: n = !1 } = e;
                        return n ? ec.definition.defaultConfig : ec.getConfig({ location: t });
                    })({ location: "setupMediaEngine" }).enabled &&
                        e.setExperimentFlag(eX.fd.LOW_LATENCY_RATE_CONTROL, !0),
                    e.setExperimentFlag(eX.fd.RESET_DECODER_ON_ERRORS, !0),
                    e.setExperimentFlag(eX.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
                let { swallowVolumeOnlySpeakingEvents: r } = w.A.getConfig({ location: "MediaEngineStore" });
                if (
                    (r && e.setExperimentFlag(eX.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === eX.x.STREAM)
                ) {
                    let t = nR(tE);
                    e.setSoundshareDiscardRearChannels(t);
                }
                if ((0, f.isWindows)())
                    e.setExperimentFlag(eX.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(eX.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eX.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                else if ((0, f.isMac)())
                    e.setExperimentFlag(eX.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eX.fd.SIGNAL_AV1_HARDWARE_DECODE, !0),
                        e.setExperimentFlag(
                            eX.fd.H265_DISABLE_ENCODE,
                            !(
                                window?.DiscordNative?.os.arch === "arm64" &&
                                R().satisfies(window?.DiscordNative?.os.release, eX.Dk)
                            ),
                        );
                else if ((0, f.isLinux)()) {
                    let { enabled: t } = q.getConfig({ location: "MediaEngineStore" });
                    t && e.setExperimentFlag(eX.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(eX.fd.SIGNAL_AV1_DECODE, !0);
                } else
                    ((0, f.isIOS)() || (0, f.isAndroid)()) &&
                        (e.setExperimentFlag(eX.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eX.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
                if ((0, f.isWeb)()) {
                    let { enabled: t } = Q.getConfig({ location: "MediaEngineStore" });
                    e.setExperimentFlag(eX.fd.BROWSER_HEVC, t);
                }
                for (let r of ((0, f.isWindows)() &&
                    tq?.startsWith("AMD") &&
                    eS("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eX.fd.WMF_GPU_ENCODE, !0),
                (0, f.isWindows)() &&
                    tq?.startsWith("Intel") &&
                    !0 === tZ &&
                    1 === tX &&
                    eN.getConfig({ location: "MediaEngineStore" }).enabled &&
                    (e.setExperimentFlag(eX.fd.WMF_GPU_ENCODE, !0), e.setExperimentFlag(eX.fd.INTEL_GPU_DISABLE, !0)),
                (0, f.isWindows)() &&
                    tq?.startsWith("Intel") &&
                    !0 === tZ &&
                    1 === tX &&
                    em.getConfig({ location: "MediaEngineStore" }).enabled &&
                    e.setExperimentFlag(eX.fd.INTEL_GPU_DISABLE, !0),
                (0, f.isWindows)() &&
                    tq?.startsWith("Qualcomm") &&
                    eS("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eX.fd.WMF_GPU_ENCODE, !0),
                tn.setHasFullbandPerformance(null === (t = (0, F.A)()) || t >= 31),
                e.setRemoteAudioHistory(1e3),
                (0, x.A)(i) && e.setClipsKeyFrameInterval(eX.X1),
                (n = t9(e.context)),
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
                e.on(D.yq.Speaking, (t, n, i, r) => {
                    b.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: r });
                }),
                    e.context === eX.x.DEFAULT &&
                        ((tC = !1),
                        e.on(D.yq.SpeakingWhileMuted, () => {
                            let e = !tC;
                            (tC = !0),
                                e && i.emitChange(),
                                tO.start(e3, () => {
                                    (tC = !1), i.emitChange();
                                });
                        })),
                    e.on(D.yq.DesktopSourceEnd, (t, n) => {
                        b.h.dispatch({
                            type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                            settings: { context: e.context },
                            endReason: t,
                            errorCode: n,
                        });
                    }),
                    e.on(D.yq.InteractionRequired, (e) => {
                        b.h.dispatch({ type: "MEDIA_ENGINE_INTERACTION_REQUIRED", required: e });
                    }),
                    e.on(D.yq.VideoHookInitialize, (e, t, n, i, r, s) => {
                        a?.desktopSource != null &&
                            eD.default.track(ey.HAw.VIDEOHOOK_INITIALIZED, {
                                backend: e,
                                format: t,
                                framebuffer_format: n,
                                sample_count: i,
                                success: r,
                                reinitialization: s,
                                ...(0, W.A)(a?.desktopSource),
                            });
                    }),
                    e.on(D.yq.NoiseCancellationError, ns),
                    e.on(D.yq.VoiceActivityDetectorError, ns),
                    e.on(D.yq.SdpError, (e, t, n, i) => {
                        eD.default.track(ey.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: i });
                    }),
                    e.on(D.yq.VideoState, (t) => {
                        b.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                    }),
                    e.setBitRate(eB.A.bitrate),
                    e.applyVideoQualityMode(eK.A.mode),
                    (0, f.isWindows)() &&
                        tn.supports(eX.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                        tn.setAsyncVideoInputDeviceInit(!0);
            }),
            tn.on(D.bg.DeviceChange, (e, t, n) => {
                th.stop(),
                    b.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
            }),
            tn.on(D.bg.VolumeChange, (e, t) => {
                b.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
            }),
            tn.on(D.bg.DesktopSourceEnd, (e, t) => {
                b.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
            }),
            tn.on(D.bg.AudioPermission, (e) => {
                (tW = !0), b.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
            }),
            tn.on(D.bg.VideoPermission, (e) => {
                b.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
            }),
            tn.on(D.bg.WatchdogTimeout, async () => {
                let e;
                if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                    try {
                        await eG.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                    } catch (t) {
                        "number" == typeof t.status && (e = t.status);
                    }
                eJ.warn(`Watchdog timeout, report submission status: ${e ?? 200}`);
                let t = null != M.A.processUtils.setCrashReason;
                try {
                    await eD.default.track(
                        ey.HAw.VOICE_WATCHDOG_TIMEOUT,
                        { minidump_submission_error: e, will_restart: t },
                        { flush: !0 },
                    );
                } catch (e) {
                    eJ.error("Failed to flush voice watchdog timeout analytics event", e);
                }
                t &&
                    (eJ.info("Relaunching app due to voice watchdog timeout"),
                    await M.A.processUtils.setCrashReason("voice-watchdog-timeout"),
                    y.w.set("discord_watchdog_restart_timestamp", Date.now().toString()),
                    M.A.app.relaunch());
            }),
            tn.on(D.bg.VideoInputInitialized, (e) => {
                eD.default.track(ey.HAw.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired
                        ? null
                        : Math.round(e.timeToFirstFrame * ex.A.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy,
                    media_session_id: eW.A.getMediaSessionId(),
                    rtc_connection_id: eW.A.getRTCConnectionId(),
                });
            }),
            tn.on(D.bg.AudioInputInitialized, (e) => {
                eD.default.track(ey.HAw.AUDIO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_initialized_ms: Math.round(e.timeToInitialized * ex.A.Millis.SECOND),
                    rtc_connection_id: eW.A.getRTCConnectionId(),
                });
            }),
            tn.on(D.bg.ClipsRecordingRestartNeeded, () => {
                b.h.dispatch({ type: "CLIPS_RESTART" });
            }),
            tn.on(D.bg.ClipsInitFailure, (e, t) => {
                let n = to < 3;
                (to += 1),
                    b.h.wait(() => {
                        b.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t }),
                            n
                                ? b.h.dispatch({ type: "CLIPS_RESTART" })
                                : eJ.warn(
                                      `Clips init failure budget exhausted (${to} consecutive unhealthy attempts); skipping auto-restart. A settings flip / game change / app restart will retry.`,
                                  );
                    });
            }),
            tn.on(D.bg.ClipsRecordingHealthy, () => {
                0 !== to && (eJ.info(`Clips bridge reported healthy; resetting restart budget (was ${to}).`), (to = 0));
            }),
            tn.on(D.bg.ClipsRecordingReadyChanged, (e) => {
                td !== e && (eJ.info(`Clips recorder ready changed: ${e}`), (td = e));
            }),
            tn.on(D.bg.ClipsBridgeIdleShutdown, () => {
                eJ.info("Clips bridge idle shutdown");
            }),
            tn.on(D.bg.ClipsRecordingEnded, (e, t) => {
                s?.desktopSource?.id === e &&
                    (null != t && a?.desktopSource?.soundshareId !== t && P.c1(t), (s = null));
            }),
            tn.on(D.bg.NativeScreenSharePickerUpdate, (e, t) => {
                b.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
            }),
            tn.on(D.bg.NativeScreenSharePickerCancel, (e) => {
                b.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
            }),
            tn.on(D.bg.NativeScreenSharePickerError, (e) => {
                b.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
            }),
            tn.on(D.bg.AudioDeviceModuleError, (e, t, n) => {
                eD.default.track(ey.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
            }),
            tn.on(D.bg.VideoCodecError, (e) => {
                let t = "encode" === e.mode ? V.iy.VIDEO_ENCODE_ERROR : V.iy.VIDEO_DECODE_ERROR,
                    n = { videoCodec: e.codecStandard, errorMessage: e.message };
                (0, V.QW)(
                    t === V.iy.VIDEO_ENCODE_ERROR
                        ? { type: t, ...n, videoEncoder: e.implName }
                        : { type: t, ...n, videoDecoder: e.implName },
                );
            }),
            tn.on(D.bg.ConnectionStats, (e) => {
                b.h.dispatch({
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
            tn.on(D.bg.VoiceProcessingError, ns),
            tn.on(D.bg.VideoFilterError, nl),
            tn.on(D.bg.VoiceQueueMetrics, (e) => {
                let t = nV(e);
                null !== t && eD.default.track(ey.HAw.VOICE_QUEUE_METRICS, t);
            }),
            tn.setOnVideoContainerResized((e, t, n) => {
                b.h.wait(() =>
                    b.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
                );
            }),
            nM(),
            l.reset(),
            (0, eM.w)().then((e) => {
                null != e && ((tq = e.gpu_brand), (tZ = e.has_intel_hybrid_igpu), (tX = e.gpu_count));
            }),
            tn.on(D.bg.SystemMicrophoneModeChange, (e) => {
                (E = e), tn.eachConnection(nu), i.emitChange();
            }),
            null != (e = y.w.get("audio")) && (y.w.set(e0, { [eX.x.DEFAULT]: e }), y.w.remove("audio")),
            (ti = y.w.get(e0) ?? {}),
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
                    (0, f.isWeb)()
                        ? 1 !== e.ncUseKrispjsSettingVersion &&
                          ((e.ncUseKrispjsSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                        : 1 !== e.ncUseKrispSettingVersion &&
                          ((e.ncUseKrispSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
            }),
            nf(),
            ((0, f.isWindows)() || (0, f.isLinux)() || (0, f.isMac)()) && !__OVERLAY__ && !tM && !tP
                ? ((tM = !0), nU())
                : (0, f.isWeb)() && tn.supports(eX.O5.NOISE_CANCELLATION)
                  ? ((tP = !0), i.emitChange())
                  : (0, f.isWeb)() && nI({ noiseCancellation: !1 }),
            (0, f.isLinux)() && nw(),
            ny(),
            (0, f.isDesktop)() && f.isPlatformEmbedded && !t6)
        ) {
            t6 = !0;
            let e = async () => {
                let t = await new Promise((e) => {
                    p.Ay.pollQueueMetrics((t) => {
                        e(t);
                    });
                });
                t.periodMs = eX.tl;
                let n = nV(t);
                null !== n && eD.default.track(ey.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, eX.tl);
            };
            setTimeout(e, eX.tl);
        }
        (0, f.isWindows)() &&
            f.isPlatformEmbedded &&
            null === tu &&
            tn
                .getCodecSurvey()
                .then((e) => {
                    try {
                        let t = JSON.parse(e);
                        if (null == t || null == t.available_video_decoders)
                            throw Error("decoder survey is not available");
                        tu = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                    } catch (e) {
                        eJ.error("Failed to parse codec survey", e), (tu = !1);
                    }
                })
                .catch((e) => {
                    eJ.error("Failed to get codec survey", e), (tu = !1);
                })
                .finally(() => {
                    b.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
                }),
            (tz = {
                [eX.O5.VIDEO]: tn.supports(eX.O5.VIDEO),
                [eX.O5.DESKTOP_CAPTURE]: tn.supports(eX.O5.DESKTOP_CAPTURE),
                [eX.O5.HYBRID_VIDEO]: tn.supports(eX.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eV.default, eB.A, eH.A, ej.A, G.Ay, B.A, eW.A, j.Ay, eP.A, eY.default, eK.A);
    }
    supports(e) {
        return tn.supports(e);
    }
    supportsInApp(e) {
        return tz[e] || tn.supports(e);
    }
    isSupported() {
        return tn.supported();
    }
    isNoiseSuppressionSupported() {
        return tn.supports(eX.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return nP();
    }
    isNoiseCancellationError() {
        return tk;
    }
    isAutomaticGainControlSupported() {
        return tn.supports(eX.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nh() && (tn.supports(eX.O5.LEGACY_AUDIO_SUBSYSTEM) || tn.supports(eX.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return tn.supports(eX.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === tn.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return nP();
    }
    isAecDumpSupported() {
        return tn.supports(eX.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return tn.supports(eX.O5.VIDEO) && tn.supports(eX.O5.SIMULCAST);
    }
    getAecDump() {
        return t9().aecDumpEnabled;
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
        return u ?? 100;
    }
    getKrispEnableStats() {
        return tG;
    }
    isEnabled() {
        return ta;
    }
    isMute() {
        return this.isSelfMute() || tI;
    }
    isDeaf() {
        return this.isSelfDeaf() || tT;
    }
    isServerMute() {
        return tI;
    }
    isServerDeaf() {
        return tT;
    }
    getAudioMixerSettings() {
        return t9().audioMixerSettings;
    }
    hasContext(e) {
        return null != ti[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT;
        return e === eX.x.DEFAULT && tf;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT;
        return (
            !this.isEnabled() ||
            t9(e).mute ||
            !eO.A.didHavePermission(e$.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eX.x.DEFAULT && tp)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tN;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tN = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT,
            t = tJ && "voice_isolation" !== this.getSystemMicrophoneMode() && t9(e).mode === ey.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (eH.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return tQ;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT;
        return !this.isSupported() || t9(e).deaf;
    }
    isVideoEnabled() {
        return tm && tL;
    }
    isVideoAvailable() {
        return Object.values(tA).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return tL;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.STREAM;
        return tl === e && null != a;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.STREAM;
        return tl === e && null != a && a.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eX.x.DEFAULT;
        return e !== eV.default.getId() && (t9(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return tn.supports(eX.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eX.x.DEFAULT;
        return t9(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eX.x.DEFAULT;
        return t9(t).videoToggleStateMap[e] ?? ey.bb8.NONE;
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
        return tF;
    }
    isNativeAudioPermissionReady() {
        return tW;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return tl;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return tc;
    }
    isH264MfDecodeAvailable() {
        return tu;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eX.x.DEFAULT,
            n = t9(t).localPans[e];
        return null != n ? n : e1;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eX.x.DEFAULT,
            n = t === eX.x.STREAM ? eX.Cn : eX.Hz,
            i = t9(t).localVolumes[e];
        return null != i ? i : n;
    }
    getInputVolume() {
        return t9().inputVolume;
    }
    getOutputVolume() {
        return t9().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT;
        return t9(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT;
        return t9(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            S().each(ti, (t, n) => {
                let {
                    mode: i,
                    modeOptions: { shortcut: r },
                } = t;
                i === ey.TBI.PUSH_TO_TALK && tr.has(n) && (e[n] = r);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nN(t_, t9().inputDeviceId);
    }
    getOutputDeviceId() {
        return nN(tE, t9().outputDeviceId);
    }
    getVideoDeviceId() {
        return nN(tA, t9().videoDeviceId);
    }
    getInputDevices() {
        return t_;
    }
    getOutputDevices() {
        return tE;
    }
    getVideoDevices() {
        return tA;
    }
    getEchoCancellation() {
        let e = t9();
        return eH.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return tn.supports(eX.O5.SIDECHAIN_COMPRESSION) && t9().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return t9().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return t9().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tH && tH;
    }
    getOpenH264Enabled() {
        return (0, f.isLinux)() && t9().openH264Enabled;
    }
    getLoopback() {
        return t$.size > 0;
    }
    getLoopbackReasons() {
        return t$;
    }
    getNoiseSuppression() {
        let e = t9();
        return eH.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = t9();
        return eH.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return t9().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return t9().noiseCancellation;
    }
    getHardwareEncoding() {
        return !0;
    }
    getEnableSilenceWarning() {
        return t9().silenceWarning;
    }
    getDebugLogging() {
        return tn.getDebugLogging();
    }
    getQoS() {
        return t9().qos;
    }
    getAttenuation() {
        return t9().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return t9().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return t9().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return nA() && t9().automaticAudioSubsystem ? eX.rB.AUTOMATIC : tn.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return tn.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return t9().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eZ.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eX.x.DEFAULT;
        return t9(e);
    }
    getState() {
        return {
            settingsByContext: ti,
            inputDevices: t_,
            outputDevices: tE,
            appSupported: tz,
            krispModuleLoaded: tP,
            krispFatalError: tU,
            krispVersion: c,
            krispSuppressionLevel: u,
            goLiveSource: a,
            goLiveContext: tl,
        };
    }
    getInputDetectedThisConnection() {
        return tD;
    }
    getInputDetected() {
        return l.inputDetected;
    }
    getLastInputDetectedUpdateTime() {
        return l.lastUpdateTime;
    }
    getNoInputDetectedNotice() {
        return ty;
    }
    getInputDeviceOSMuted() {
        return o;
    }
    getInputDeviceOSVolume() {
        return d;
    }
    getPacketDelay() {
        return f.isPlatformEmbedded || this.getMode() !== ey.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        tn.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return ts;
    }
    getVideoHook() {
        return t9().videoHook;
    }
    supportsVideoHook() {
        return tn.supports(eX.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = t9().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return tn.supports(eX.O5.EXPERIMENTAL_SOUNDSHARE) && R().satisfies(M.A?.os.release, el.$x);
    }
    supportsHookSoundshare() {
        return (0, f.isWindows)() && tn.supports(eX.O5.SOUNDSHARE) && R().satisfies(M.A?.os.release, el.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = t9().useSystemScreensharePicker,
            n = (0, f.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return tn.supports(eX.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return t3;
    }
    getVideoEncoderExperiments(e, t) {
        let n = ["unk"];
        if (
            (n.push("nvNewPresets"),
            e === eX.x.STREAM ? n.push("nvRelaxRc=250") : n.push("nvRelaxRc=75"),
            this.getUseVaapiEncoder() && n.push("vaapi"),
            e === eX.x.STREAM && "streamer" === t && (0, f.isWindows)())
        ) {
            n.push("useCaptureDeviceForEncode");
            let { overrideDeviceReuse: e } = eI.getConfig({ location: "handleReady" });
            e && n.push("videoCaptureDeviceOverrideReuse");
        }
        return n.push("linux-vulkan"), n.join(",");
    }
    getUseGamescopeCapture() {
        return t2;
    }
    getSpeakingWhileMuted() {
        return tC;
    }
    getKrispModelOverride() {
        return _;
    }
    getKrispModels() {
        return tw;
    }
    getKrispVadActivationThreshold() {
        return t9().modeOptions.vadKrispActivationThreshold ?? 0.5;
    }
    hasActiveCallKitCall() {
        return t1;
    }
    setHasActiveCallKitCall(e) {
        t1 = e;
    }
    supportsScreenSoundshare() {
        return (0, f.isMac)()
            ? tn.supports(eX.O5.SOUNDSHARE) && R().satisfies(M.A?.os.release, el.P$) && nE()
            : (0, f.isWindows)()
              ? tn.supports(eX.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, f.isLinux)() && tn.supports(eX.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, f.isWindows)()) {
            if (this.getBypassSystemInputProcessing()) return;
            return tB[this.getInputDeviceId()]?.active?.find((e) => "deep_noise_suppression" === e);
        }
        if ((0, f.isMac)() || (0, f.isIOS)()) return E;
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
        let e = { fetchDave: (0, f.isWeb)() };
        return tn.fetchAsyncResources(e);
    }
    startDavePreload() {
        !tV &&
            ((tV = !0),
            (0, f.isWeb)() &&
                tn.fetchAsyncResources({ fetchDave: !0 }).catch((e) => {
                    eJ.warn("DAVE preload failed:", e), ek.A.captureException(e);
                }));
    }
    getSupportedSecureFramesProtocolVersion() {
        return tn.getSupportedSecureFramesProtocolVersion();
    }
    hasClipsSource() {
        return null != s;
    }
    isClipsRecordingReady() {
        return td;
    }
    isClipsRecordingReadySignalSupported() {
        return tn.supports(eX.O5.CLIPS_RECORDING_READY_EVENTS);
    }
    getGpuBrand() {
        return tq;
    }
}
function nV(e) {
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
let nB = (i = new nF(b.h, {
    VOICE_CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n, currentVoiceChannelId: i, video: r } = e;
        if ((i !== n && ni(r, null), null != t || null == n)) {
            tb = !1;
            return;
        }
        if (tb) return;
        tb = !0;
        let a = t9();
        (a.mute || a.deaf) && (nI({ deaf: !1, mute: !1 }), tn.eachConnection(nn));
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (r === t.sessionId) {
                (tI = t.mute || t.suppress), (tT = t.deaf), tn.eachConnection(nn);
                let e = null != t.guildId && null != t.channelId && null != tx && tx !== t.channelId,
                    n = !tb && null == t.channelId;
                return ni(!e && !n && tm), (tx = t.channelId), !0;
            }
            return __OVERLAY__ || t.userId !== eV.default.getId() || null != eW.A.getChannelId() || ni(!1, null), e;
        }, !1);
    },
    CONNECTION_OPEN: function (e) {
        (r = e.sessionId), (tI = !1), (tT = !1);
        let t = t9();
        nA() && (nh() ? nG(eX.rB.AUTOMATIC) : t.automaticAudioSubsystem && nx()),
            tn.supports(eX.O5.OFFLOAD_ADM_CONTROLS) && tn.setOffloadAdmControls(!0),
            (0, f.isIOS)() &&
                er.getConfig({ location: "handleConnectionOpen" }).enabled &&
                tn.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
            nC(t.inputDeviceId),
            nL();
    },
    CONNECTION_CLOSED: function () {
        r = null;
    },
    POST_CONNECTION_OPEN: function () {
        return (0, f.isWeb)() && i.startDavePreload(), !1;
    },
    RTC_CONNECTION_STATE: function (e) {
        switch (e.state) {
            case ey.S7L.CONNECTING:
                np();
                break;
            case ey.S7L.RTC_CONNECTING:
                (ty = !1), (o = void 0), (d = void 0), (tD = !1), (tJ = !1), t0.stop(), tv.stop(), l.reset();
                break;
            case ey.S7L.RTC_CONNECTED:
                ni();
                break;
            case ey.S7L.DISCONNECTED:
                (t4 = {}),
                    (function () {
                        if (0 === tY.size) return;
                        let e = eX.x.DEFAULT,
                            { disabledLocalVideos: t } = t9(e);
                        tY.forEach((n) => {
                            m()(t[n], "If you are auto-disabled, then you are also disabled."),
                                delete t[n],
                                tn.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
                        }),
                            tY.clear(),
                            nI({ disabledLocalVideos: t }, e, !1);
                    })(),
                    ny();
        }
    },
    AUDIO_SET_TEMPORARY_SELF_MUTE: function (e) {
        let { mute: t } = e;
        (tf = t), tn.eachConnection(nn);
    },
    AUDIO_TOGGLE_SELF_MUTE: function (e) {
        let { context: t, playSoundEffect: n } = e,
            { mute: i, deaf: r } = t9(t);
        if (t === eX.x.DEFAULT && (eO.A.requestPermission(e$.iL.AUDIO), tp)) return !1;
        (i = !r && !i) || (r = !1), n || (tN = !0), nI({ mute: i, deaf: r }, t), tn.eachConnection(nn);
    },
    AUDIO_SET_SELF_MUTE: function (e) {
        let { context: t, mute: n, playSoundEffect: i } = e;
        nI({ mute: n }, t), i || (tN = !0), tn.eachConnection(nn);
    },
    AUDIO_TOGGLE_SELF_DEAF: function (e) {
        let { context: t } = e;
        nI({ deaf: !t9(t).deaf }, t), tn.eachConnection(nn);
    },
    AUDIO_TOGGLE_LOCAL_MUTE: function (e) {
        let { context: t, userId: n } = e;
        if (n === eV.default.getId()) return;
        let { localMutes: i } = t9(t);
        i[n] ? delete i[n] : (i[n] = !0),
            nI({ localMutes: i }, t),
            tn.eachConnection((e) => e.setLocalMute(n, i[n] || !1), t);
    },
    AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
        let { context: t, userId: n, videoToggleState: i, persist: r, isAutomatic: a } = e;
        m()(!(r && a), "These are not allowed to both be true.");
        let s = i === ey.bb8.DISABLED,
            { disabledLocalVideos: l } = t9(t),
            o = l[n] ?? !1,
            d = tY.has(n),
            c = i === ey.bb8.AUTO_ENABLED || i === ey.bb8.MANUAL_ENABLED;
        eJ.info(`disableVideo=${s} currentlyDisabled=${o} currentlyAutoDisabled=${d}, isVideoShown=${c}`),
            m()(!(d && !o), "If you are auto-disabled, then you are also disabled.");
        let u = s !== o,
            _ = t === eX.x.DEFAULT,
            E = a && u && _,
            A = r && u && _;
        eJ.info(`changed=${u} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${E} isManualToggleByUser=${A}`);
        let { videoToggleStateMap: h } = t9(t);
        if (
            (h[n] === ey.bb8.AUTO_PROBING &&
                i === ey.bb8.AUTO_ENABLED &&
                (0, eC.A)(n, s ? eX.Al.AUTO_DISABLE : eX.Al.AUTO_ENABLE, c),
            (h[n] = i),
            nI({ videoToggleStateMap: h }, t, r),
            i === ey.bb8.AUTO_PROBING
                ? eW.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
                : eW.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
            tK ||
                (eJ.info(`isAutoDisableAllowed=${tK} - disabling VideoHealthManager`),
                eW.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
            E)
        ) {
            if ((!s && !d) || (s && !tK)) return;
            (0, eC.A)(n, s ? eX.Al.AUTO_DISABLE : eX.Al.AUTO_ENABLE, c), s ? tY.add(n) : tY.delete(n);
        } else
            A &&
                (d && !s
                    ? (eJ.info("disallowing auto-disable for this session because of manual override by user"),
                      (tK = !1),
                      eW.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                      (0, eC.A)(n, eX.Al.MANUAL_REENABLE, c))
                    : (0, eC.A)(n, s ? eX.Al.MANUAL_DISABLE : eX.Al.MANUAL_ENABLE, c));
        _ && !s && tY.delete(n),
            s ? (l[n] = !0) : delete l[n],
            nI({ disabledLocalVideos: l }, t, r),
            tn.eachConnection((e) => e.setLocalVideoDisabled(n, l[n] ?? !1), t);
    },
    AUDIO_SET_LOCAL_VOLUME: function (e) {
        let { context: t, userId: n, volume: i } = e;
        if (n === eV.default.getId()) return;
        let r = t === eX.x.STREAM ? eX.Cn : eX.Hz,
            { localVolumes: a } = t9(t);
        i === r ? delete a[n] : (a[n] = i),
            nI({ localVolumes: a }, t),
            tn.eachConnection((e) => e.setLocalVolume(n, i), t);
    },
    AUDIO_SET_AUDIO_MIXER_SETTINGS: function (e) {
        let { context: t, settings: n } = e;
        nI({ audioMixerSettings: n }, t),
            tn.setAudioMixerOptions(n),
            tn.eachConnection((e) => e.setSpatialAudioEnabled(n.enabled), eX.x.DEFAULT);
    },
    AUDIO_SET_LOCAL_PAN: function (e) {
        let { context: t, userId: n, left: i, right: r } = e,
            { localPans: a } = t9(t);
        (a[n] = { left: i, right: r }), nI({ localPans: a }, t), tn.eachConnection((e) => e.setLocalPan(n, i, r), t);
    },
    AUDIO_SET_MODE: function (e) {
        let { context: t, mode: n, options: i } = e;
        nI({ mode: n, modeOptions: { ...i, updatedAt: Date.now() } }, t), tn.eachConnection(ne);
    },
    AUDIO_SET_INPUT_VOLUME: function (e) {
        let { volume: t } = e;
        nI({ inputVolume: nt(t) }), tn.setInputVolume(t);
    },
    AUDIO_SET_OUTPUT_VOLUME: function (e) {
        let { volume: t } = e;
        nI({ outputVolume: t }), tn.setOutputVolume(t);
    },
    AUDIO_SET_INPUT_DEVICE: function (e) {
        let { id: t } = e;
        (t = nN(t_, t)),
            (tc = performance.now()),
            nI({ inputDeviceId: t }),
            nO(t),
            tn.eachConnection(nu),
            (o = void 0),
            (d = void 0),
            t0.stop(),
            (tJ = !1);
        let { resetSilenceWarningOnDeviceChange: n } = e_.A.getConfig({
            location: "MediaEngineStore.handleSetInputDevice",
        });
        n && ((tD = !1), l.reset());
    },
    AUDIO_SET_OUTPUT_DEVICE: function (e) {
        let { id: t } = e;
        nI({ outputDeviceId: (t = nN(tE, t)) }), tn.setAudioOutputDevice(t);
    },
    AUDIO_SET_ACTIVE_INPUT_PROFILE: function (e) {
        let { inputProfile: t } = e;
        nI({ activeInputProfile: t });
        let n = t9();
        tn.eachConnection((e) => {
            ne(e), nu(e);
        }),
            tn.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
            nb();
    },
    AUDIO_SET_ECHO_CANCELLATION: function (e) {
        let t = nI({ echoCancellation: e.enabled });
        tn.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nb(), nv(e.location);
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION: function (e) {
        let t;
        (t = nI({ sidechainCompression: e.enabled })), tn.setSidechainCompression(t.sidechainCompression);
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function (e) {
        let t = nI({ sidechainCompressionStrength: e.strength });
        tn.setSidechainCompressionStrength(t.sidechainCompressionStrength);
    },
    AUDIO_SET_LOOPBACK: function (e) {
        let { enabled: t, loopbackReason: n } = e;
        return t ? t$.add(n) : t$.delete(n), nb();
    },
    AUDIO_SET_NOISE_SUPPRESSION: function (e) {
        let t = nI({ noiseSuppression: e.enabled });
        tn.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nb(), nv(e.location);
    },
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function (e) {
        let t = nI({ automaticGainControl: e.enabled });
        tn.eachConnection((e) => nd(e, t.automaticGainControl)), nb(), nv(e.location);
    },
    AUDIO_SET_NOISE_CANCELLATION: function (e) {
        let t = nI({ noiseCancellation: e.enabled });
        tn.eachConnection((e) => nc(e, t.noiseCancellation)), nb(), nv(e.location);
    },
    AUDIO_SET_KRISP_MODEL_OVERRIDE: function (e) {
        eR.A.setKrispModelOverride(e.model), (_ = e.model), nb();
    },
    AUDIO_SET_DISPLAY_SILENCE_WARNING: function (e) {
        nI({ silenceWarning: e.enabled });
    },
    AUDIO_SET_DEBUG_LOGGING: function (e) {
        tn.setDebugLogging(e.enabled);
    },
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: function (e) {
        let { level: t } = e;
        (u = t), eR.A.setKrispSuppressionLevel(t);
    },
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: function (e) {
        (0, f.isWeb)() || ((tG = e.enabled), tn.setNoiseCancellationEnableStats?.(e.enabled));
    },
    MEDIA_ENGINE_SET_VIDEO_HOOK: function (e) {
        nI({ videoHook: e.enabled });
    },
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function (e) {
        nI({ experimentalSoundshare2: e.enabled });
    },
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: function (e) {
        let { enabled: t } = e;
        nI({ useSystemScreensharePicker: t });
    },
    AUDIO_SET_ATTENUATION: function (e) {
        let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i } = e,
            r = nI({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i });
        tn.eachConnection((e) =>
            e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers),
        );
    },
    AUDIO_SET_QOS: function (e) {
        let { enabled: t } = e;
        nI({ qos: t }), tn.eachConnection((e) => e.setQoS(t));
    },
    MEDIA_ENGINE_DEVICES: function (e) {
        let t = t_;
        if (
            ((t_ = nS(e, { deviceType: eX.oh.AUDIO_INPUT, defaultName: eQ.intl.string(eQ.t["/QIjDA"]) })),
            !S().isEqual(t_, t))
        ) {
            let e = t9();
            nO(nN(t_, e.inputDeviceId)), tn.eachConnection(nu);
        }
        !(function (e) {
            let t = tE;
            if (
                ((tE = nS(e, { deviceType: eX.oh.AUDIO_OUTPUT, defaultName: eQ.intl.string(eQ.t.xlUg0v) })),
                !S().isEqual(tE, t))
            ) {
                let e = t9(),
                    n = nN(tE, e.outputDeviceId);
                tn.setAudioOutputDevice(n);
                let i = nR(t),
                    r = nR(tE);
                i !== r &&
                    tn.eachConnection((e) => {
                        e.context === eX.x.STREAM && e.setSoundshareDiscardRearChannels(r);
                    });
            }
        })(e);
        tL = e.videoDevices.length > 0;
        let n = tA;
        if (
            ((tA = nS(e, { deviceType: eX.oh.VIDEO_INPUT, defaultName: eQ.intl.string(eQ.t.WKWARY) })),
            tm && !S().isEqual(tA, n))
        ) {
            let e = void 0 !== tA[tg],
                t = tg === eX.dx && n[eX.dx]?.disabled,
                i = "Firefox" === C().name && "" === tg && n[tg]?.name === "Default" && !n[tg]?.disabled;
            ni(e || t || i);
        }
    },
    AUDIO_VOLUME_CHANGE: function (e) {
        let { inputVolume: t, outputVolume: n } = e;
        nI({ inputVolume: nt(t), outputVolume: n });
    },
    AUDIO_RESET: function () {
        y.w.remove(e0), location.reload();
    },
    AUDIO_INPUT_DETECTED: function (e) {
        let { inputDetected: t } = e;
        if (null == t) return !1;
        if (((ty = !0 !== tD && !t), t)) (tD = !0), (tJ = !1), t0.stop(), tv.stop();
        else if (t9().mode === ey.TBI.VOICE_ACTIVITY && tD) {
            let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = e_.A.getConfig({
                location: "MediaEngineStore.handleInputDetected",
            });
            e &&
                t0.start(e4, () => {
                    eD.default.track(ey.HAw.HARDWARE_MUTE_GUESSED, {
                        input_device_name: t_[nN(t_, t9().inputDeviceId)]?.name,
                        rtc_connection_id: eW.A.getRTCConnectionId(),
                    }),
                        (tJ = !0),
                        i.emitChange();
                }),
                null != t &&
                    tv.start(t * ex.A.Millis.MINUTE, () => {
                        (tD = !1), l.reset();
                    });
        }
    },
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: function (e) {
        let { osVolume: t, osMuted: n } = e;
        (d = t), (o = n);
    },
    AUDIO_SET_SUBSYSTEM: function (e) {
        nG(e.subsystem);
    },
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: function (e) {
        let t = e.bypassEnabled;
        nI({ bypassSystemInputProcessing: t }), tn.setAudioInputBypassSystemProcessing(t), nv(e.location);
    },
    MEDIA_ENGINE_SET_AUDIO_ENABLED: function (e) {
        (ta = e.enabled), e.unmute && nI({ mute: !1, deaf: !1 }), tn.eachConnection(nn);
    },
    MEDIA_ENGINE_SET_VIDEO_ENABLED: function (e) {
        let { enabled: t } = e;
        eO.A.requestPermission(e$.iL.CAMERA), ni(t);
    },
    MEDIA_ENGINE_PERMISSION: function (e) {
        let { kind: t, granted: n } = e;
        if (!n)
            switch (t) {
                case "audio":
                    (ta = !1), tn.eachConnection(nn);
                    break;
                case "video":
                    ni(!1);
            }
    },
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
        let { settings: t } = e;
        if (t?.desktopSettings != null) {
            let e = null,
                n = null,
                { sourceId: i, sound: r } = t.desktopSettings,
                s = t.context ?? eX.x.DEFAULT,
                l = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
                o = eG.A.getPidFromDesktopSource(i);
            f.isPlatformEmbedded && ({ soundshareId: e, soundshareSession: n } = nD(o, r)),
                s !== tl && (null != a && tn.setGoLiveSource(null, tl), (tl = s)),
                ni(s === eX.x.STREAM && tm, {
                    desktopSource: { id: i, sourcePid: o, soundshareId: e, soundshareSession: n },
                    quality: { resolution: l.resolution, frameRate: l.frameRate },
                });
        } else if (t?.cameraSettings != null) {
            let e = t.context ?? eX.x.DEFAULT,
                { videoDeviceGuid: n, audioDeviceGuid: i, sound: r } = t.cameraSettings,
                a = e === eX.x.STREAM && tm,
                s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
            ni(a, {
                cameraSource: { videoDeviceGuid: n, audioDeviceGuid: i, sound: r },
                quality: { resolution: s.resolution, frameRate: s.frameRate },
            });
        } else ni(tm, null);
    },
    MEDIA_ENGINE_SET_VIDEO_DEVICE: function (e) {
        let { id: t } = e;
        nI({ videoDeviceId: (t = nN(tA, t)) }), ni();
    },
    MEDIA_ENGINE_INTERACTION_REQUIRED: function (e) {
        return ts !== e.required && ((ts = e.required), e.required || tn.interact(), !0);
    },
    USER_SETTINGS_MODAL_INIT: nk,
    USER_SETTINGS_MODAL_SET_SECTION: nk,
    CERTIFIED_DEVICES_SET: function () {
        return tn.eachConnection(nu), !1;
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
            (t_ = t.inputDevices),
            (tE = t.outputDevices),
            (tz = t.appSupported),
            (tP = t.krispModuleLoaded),
            (tU = t.krispFatalError),
            (c = t.krispVersion),
            (tl = t.goLiveContext);
    },
    APP_STATE_UPDATE: function (e) {
        let { state: t } = e,
            n = H.A.isEnabled();
        if (t === ey.g6G.BACKGROUND && tm && !n) (tR = !0), ni(!1);
        else {
            if (t !== ey.g6G.ACTIVE || !tR) return !1;
            (tR = !1), ni(!0);
        }
        return !0;
    },
    SET_CHANNEL_BITRATE: function (e) {
        tn.eachConnection((t) => t.setBitRate(e.bitrate));
    },
    SET_VAD_PERMISSION: function (e) {
        let { hasPermission: t } = e,
            n = !t;
        if (n === tp) return !1;
        (tp = n), tn.eachConnection(nn);
    },
    SET_NATIVE_PERMISSION: function (e) {
        let { state: t, permissionType: n } = e,
            i = t === e$.hL.ACCEPTED;
        switch (n) {
            case e$.iL.AUDIO:
                (tW = !0), tn.eachConnection(nn);
                break;
            case e$.iL.CAMERA:
                !i && tm && ni(!1);
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
            n = nI({ aecDumpEnabled: t });
        tn.setAecDump(n.aecDumpEnabled);
    },
    MEDIA_ENGINE_SET_OPENH264_ENABLED: function (e) {
        let { enabled: t } = e;
        nI({ openH264Enabled: t }), p.Ay?.setOpenH264Enabled?.(t);
    },
    MEDIA_ENGINE_RESET_SETTINGS: function (e) {
        let { overrides: t } = e;
        if (__OVERLAY__) return !1;
        (ti = Object.values(eX.x).reduce((e, n) => {
            let i = e9();
            return (e[n] = S().merge(i, t[n])), e;
        }, {})),
            y.w.set(e0, ti),
            nf();
    },
    CHANNEL_DELETE: function () {
        if ((!tm && null == a) || null != eW.A.getRTCConnectionId()) return !1;
        ni(!1, null);
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: function (e) {
        if (e.code === eX.CO.KRISP_CPU_OVERUSE) {
            (t4.noiseCancellation = !1), (t4.noiseSuppression = !0);
            let e = t9();
            return tn.eachConnection((t) => nc(t, e.noiseCancellation)), nb(), nv(), !0;
        }
        return !1;
    },
    MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR: function (e) {
        return (
            e.code === eX.CO.KRISP_VAD_CPU_OVERUSE &&
            ((t4.modeOptions = { vadUseKrisp: !1 }), tn.eachConnection((e) => ne(e)), !0)
        );
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function () {
        return !!tk && ((tk = !1), !0);
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
        let { settings: t } = e;
        tn.applyMediaFilterSettings(t).finally(() => {
            (tF = !1), i.emitChange();
        });
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function () {
        tF = !0;
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function () {
        tF = !1;
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            local: n,
            wasSaved: i,
        } = e;
        if (t !== eq.oD.PRELOADED_USER_SETTINGS || n || null != i) return !1;
        nL(!0);
    },
    CLIPS_INIT: function (e) {
        let { sourceId: t, applicationName: n, quality: r } = e;
        if (!(0, k.Ao)() || null == M.A || (s?.desktopSource.id === t && s.quality === r)) return !1;
        null != s &&
            (tn.setClipsSource(null),
            (0, f.isWindows)() &&
                (null != s.desktopSource.soundshareId
                    ? P.c1(s.desktopSource.soundshareId)
                    : null != s.desktopSource.sourcePid && t9().videoHook && P.c1(s.desktopSource.sourcePid)));
        let a = eG.A.getPidFromDesktopSource(t),
            { soundshareId: l, soundshareSession: o } = nD(a, !0);
        s = { desktopSource: { id: t, sourcePid: a, soundshareId: l, soundshareSession: o }, quality: r };
        let d = t7("MediaEngineStore clips"),
            c = t9().videoHook,
            u = !c || !ee.getConfig({ location: "handleClipsInit" }).enabled,
            _ = c && ef.getConfig({ location: "handleClipsInit" }).enabled,
            { minCaptureWidth: E, minCaptureHeight: A } = eA.getConfig({ location: "handleClipsInit" });
        tn.setClipsSource({
            desktopDescription: {
                id: s.desktopSource.id,
                soundshareId: s.desktopSource.soundshareId,
                useVideoHook: c,
                useHookFramePacer: u,
                useGraphicsCapture: n_(),
                useCaptureDeviceForEncode: !1,
                useLoopback: i.getExperimentalSoundshare(),
                useQuartzCapturer: !0,
                allowScreenCaptureKit: nE(),
                videoHookStaleFrameTimeoutMs: 500,
                graphicsCaptureStaleFrameTimeoutMs: e2,
                hdrCaptureMode: d,
                videoHookAllowDx12: _,
                minCaptureWidth: E,
                minCaptureHeight: A,
            },
            quality: r,
            applicationName: n,
            videoEncoderExperiments: i.getVideoEncoderExperiments(eX.x.STREAM, "streamer"),
        });
    },
    CLIPS_RESTART: function () {
        s = null;
    },
    CLIPS_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        !1 === t.decoupledClipsEnabled && ((s = null), tn.setClipsSource(null)), !1 === t.clipsEnabled && (s = null);
    },
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function (e) {
        tQ = e.enabled;
    },
    MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: function (e) {
        let { deviceId: t, active: n, available: i } = e;
        tB[t] = { active: n, available: i };
    },
}));
