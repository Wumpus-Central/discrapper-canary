"use strict";
let i, r, a, s, l, o, d, c, u, _, E;
n.d(t, { yz: () => ts, Ay: () => n1 }), n(323874), n(14289), n(35956), n(321073);
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
    g = n(435558),
    S = n.n(g),
    N = n(481613),
    C = n.n(N),
    O = n(299855),
    R = n.n(O),
    L = n(17928),
    y = n(459838),
    D = n(506774),
    v = n(451988),
    b = n(228366),
    M = n(77729),
    P = n(719129),
    U = n(894539),
    w = n(124838),
    G = n(915725),
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
    });
var Q = n(403362);
let J = (0, Y.mj)({
    kind: "user",
    name: "2026-08-audio-fidelity",
    defaultConfig: { capSampleRate: !1, capChannelCount: !1, condition: "none" },
    variations: {
        1: { capSampleRate: !0, capChannelCount: !1, condition: "krisp" },
        2: { capSampleRate: !0, capChannelCount: !1, condition: "noiseSuppression" },
        3: { capSampleRate: !0, capChannelCount: !1, condition: "echoCancellation" },
        4: { capSampleRate: !0, capChannelCount: !1, condition: "any" },
        5: { capSampleRate: !0, capChannelCount: !0, condition: "krisp" },
        6: { capSampleRate: !0, capChannelCount: !0, condition: "noiseSuppression" },
        7: { capSampleRate: !0, capChannelCount: !0, condition: "echoCancellation" },
        8: { capSampleRate: !0, capChannelCount: !0, condition: "any" },
    },
});
function ee(e, t) {
    switch (e) {
        case "krisp":
            return t.krispEnabled;
        case "noiseSuppression":
            return t.noiseSuppressionEnabled;
        case "echoCancellation":
            return t.echoCancellationEnabled;
        case "any":
            return t.krispEnabled || t.noiseSuppressionEnabled || t.echoCancellationEnabled;
        case "none":
            return !1;
        default:
            (0, Q.xb)(e);
    }
}
let et = (0, Y.mj)({
        name: "2025-08-browser-hevc",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    en = (0, Y.mj)({
        name: "2026-05-disable-camera-simulcast",
        kind: "user",
        defaultConfig: { enableSimulcast: !0 },
        variations: { 1: { enableSimulcast: !1 } },
    }),
    ei = (0, Y.mj)({
        name: "2026-04-disable-hook-frame-pacer",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var er = n(240921);
let ea = (0, er.Ay)({
        kind: "user",
        name: "2025-11-global-frame-pool-lock",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    es = (0, Y.mj)({
        name: "2026-02-go-live-hdr",
        kind: "user",
        defaultConfig: { hdrCaptureMode: "never" },
        variations: { 1: { hdrCaptureMode: "always" }, 2: { hdrCaptureMode: "permittedDevicesOnly" } },
    }),
    el = (0, Y.mj)({
        name: "2026-03-ios-audio-interrupt-handling",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var eo = n(574381),
    ed = n(941426),
    ec = n(325278);
let eu = new ed.Vy("InputWatcher");
class e_ {
    mediaEngine;
    mediaEngineStore;
    stateChangeTimeout = new v.Ep();
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
        if ((0, eo.uF)() && R().satisfies(M.A?.os.release, ec.PH))
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
                eu.warn(`Failed to get device OS volume and/or mute state: ${e}`);
            }
    };
    handleSilence = (e) => {
        let t = !e;
        this.stateChangeTimeout.start(t ? 1500 : 5e3, async () => {
            eu.info("Silence:", e),
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
let eE = (0, Y.mj)({
        kind: "user",
        name: "2026-07-krisp-cpu-disablement",
        defaultConfig: { consecutiveFailures: 1 },
        variations: { 1: { consecutiveFailures: 3 }, 2: { consecutiveFailures: 5 }, 3: { consecutiveFailures: 10 } },
    }),
    eA = (0, Y.mj)({
        kind: "user",
        name: "2026-04-krisp-v9-ios",
        defaultConfig: {
            models: [
                { name: "small_NC_8k", maxSampleRate: 8e3, filename: "krisp-nc-o-nb-v2.kef" },
                { name: "small_NC", maxSampleRate: 16e3, filename: "krisp-nc-o-lite-v1.kef" },
                { name: "full_NC", maxSampleRate: 96e3, filename: "krisp-nc-o-med-v7-fp16.kef" },
            ],
        },
        variations: {
            1: {
                models: [
                    { name: "small_NC_8k", maxSampleRate: 8e3, filename: "krisp-nc-o-nb-v2.kef" },
                    {
                        name: "small_NC_non_optimized",
                        maxSampleRate: 16e3,
                        filename: "c6.f.s.laughter.da1785_non_optimized.kef",
                    },
                    { name: "full_NC_non_optimized", maxSampleRate: 96e3, filename: "krisp-nc-o-med-v7.kef" },
                ],
            },
        },
    }),
    eh = (0, er.Ay)({
        kind: "user",
        name: "2025-10-low-latency-rate-control",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var eI = n(140175);
(0, Y.mj)({
    name: "2026-02-mobile-volume-output-slider-removal",
    kind: "user",
    defaultConfig: { audioOutputPresent: !0, nonContextualStreamOutputPresent: !0, showTileVolumeIndicator: !1 },
    variations: { 1: { audioOutputPresent: !1, nonContextualStreamOutputPresent: !1, showTileVolumeIndicator: !0 } },
});
let ef = (0, er.Ay)({
    kind: "user",
    name: "2026-07-nvenc-reconstructed-frames",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var ep = n(801644);
let eT = (0, Y.mj)({
        name: "2026-09-stream-zero-vad-leading",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    em = (0, Y.mj)({
        kind: "user",
        name: "2026-06-systemwide-echo-cancellation-for-people-who-refuse-to-wear-headphones",
        defaultConfig: { echoReferenceMode: "mix" },
        variations: { 1: { echoReferenceMode: "auto" } },
    }),
    eg = (0, Y.mj)({
        name: "2026-06-upscale-small-captured-frames",
        kind: "user",
        defaultConfig: { minCaptureWidth: 0, minCaptureHeight: 0 },
        variations: { 1: { minCaptureWidth: 130, minCaptureHeight: 130 } },
    }),
    eS = (0, Y.mj)({
        name: "2026-03-video-capture-device-no-reuse",
        kind: "user",
        defaultConfig: { overrideDeviceReuse: !1 },
        variations: { 1: { overrideDeviceReuse: !0 } },
    });
var eN = n(625075);
let eC = (0, Y.mj)({
        name: "2026-04-video-hook-dx12",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eO = (0, Y.mj)({
        name: "2026-02-wgc-dirty-regions-all",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eR = (0, Y.mj)({
        name: "2026-02-wgc-dirty-regions",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eL = (0, Y.mj)({
        name: "2026-06-wmf-cpu-encode-intel",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    ey = (0, Y.mj)({
        name: "2025-12-wmf-gpu-encode",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function eD(e) {
    return ey.getConfig({ location: e });
}
let ev = (0, Y.mj)({
    name: "2026-01-wmf-gpu-encode-intel",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eb = n(75076),
    eM = n(91777),
    eP = n(559633),
    eU = n(205106),
    ew = n(174459),
    eG = n(652215);
let ex = new ed.Vy("AudioEffects");
async function ek(e, t, n) {
    if (!(0, eo.uF)()) return Promise.reject(Error("Audio effects querying not supported on non-Windows platforms"));
    try {
        let i = await n.getDeviceAudioEffects(e);
        return (
            b.h.dispatch({ type: "MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS", deviceId: t, ...i }),
            ew.default.track(eG.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, {
                succeeded: !0,
                active_effects: i.active,
                available_effects: i.available,
            }),
            i
        );
    } catch (e) {
        ex.error("Failed to probe audio effects for device", e),
            ew.default.track(eG.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, { succeeded: !1 });
    }
}
var eF = n(967347),
    eV = n(617617),
    eB = n(125325),
    eH = n(499156),
    ej = n(738566),
    eW = n(353835),
    eY = n(927813),
    eK = n(38405),
    e$ = n(350535),
    ez = n(280450),
    eq = n(131319),
    eZ = n(347481),
    eX = n(734057),
    eQ = n(763827),
    eJ = n(287809),
    e0 = n(117549),
    e1 = n(765682);
let e2 = {
    enabled: !0,
    spatialBlend: 1,
    reflectionsEnabled: !1,
    roomSize: 25,
    distanceAttenuationEnabled: !1,
    mode: "arc",
    spread: 2,
    arcAngle: 20,
    gridColumns: 3,
    gridSpacing: 1,
    buckets: 10,
    listenerHeight: 0.15,
    distance: 5,
};
var e3 = n(355097),
    e5 = n(621380),
    e6 = n(731854),
    e4 = n(375708);
let e7 = new I.A("MediaEngineStore"),
    e8 = "MediaEngineStore",
    e9 = { left: 1, right: 1 },
    te = 5 * eY.A.Millis.SECOND,
    tt = 2 * eY.A.Millis.SECOND,
    tn = 30 * eY.A.Millis.SECOND,
    ti = +eY.A.Millis.MINUTE,
    tr = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2",
    ta = 0;
var ts =
    (((A = {}).WEBCAM = "WEBCAM"),
    (A.INTEGRATED = "INTEGRATED"),
    (A.BLUETOOTH = "BLUETOOTH"),
    (A.AIRPLAY = "AIRPLAY"),
    (A.HEADSET = "HEADSET"),
    A);
function tl() {
    return {
        mode: eG.TBI.VOICE_ACTIVITY,
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
        audioMixerSettings: { ...e2 },
        audioMixerSettingsVersion: 0,
        localPans: {},
        inputVolume: e6.Hz,
        outputVolume: e6.Hz,
        inputDeviceId: e6.dx,
        outputDeviceId: e6.dx,
        videoDeviceId: e6.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: tc.supports(e6.O5.VIDEO_HOOK),
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
let to = {
        [e5.m.CUSTOM]: {},
        [e5.m.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [e5.m.STUDIO]: {
            mode: eG.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    td = { modeOptions: { vadUseKrisp: !1 }, noiseCancellation: !1, noiseSuppression: !0 },
    tc = (0, y.hB)((0, y.WI)());
function tu(e) {
    return eN.k.getConfig({ location: e }).videoEnabled;
}
e7.enableNativeLogger(!0);
let t_ = {},
    tE = new Set([e6.x.DEFAULT]),
    tA = tc.supports(e6.O5.AUTO_ENABLE),
    th = !1,
    tI = e6.x.STREAM,
    tf = 0,
    tp = !1,
    tT = performance.now(),
    tm = null,
    tg = { [e6.dx]: nv("No Input Devices") },
    tS = { [e6.dx]: nv("No Output Devices") },
    tN = { [e6.dx]: nv("No Video Devices") },
    tC = new v.Ep(),
    tO = !1,
    tR = !1,
    tL = !1,
    ty = !1,
    tD = !1,
    tv = e6.qe,
    tb = e6.qe,
    tM = !1,
    tP = !1,
    tU = new v.Ep(),
    tw = !1,
    tG = !1,
    tx = !1,
    tk = !1,
    tF = new v.Ep(),
    tV = !1,
    tB = !1,
    tH = !1,
    tj = !1,
    tW = [],
    tY = !1,
    tK = null,
    t$ = !1,
    tz = !1,
    tq = !1,
    tZ = !1,
    tX = {},
    tQ = null,
    tJ = null,
    t0 = !1;
eM.A.hasPermission(e1.iL.AUDIO, { showAuthorizationError: !1 }),
    eM.A.hasPermission(e1.iL.CAMERA, { showAuthorizationError: !1 });
let t1 = new Set(),
    t2 = !1,
    t3 = new Set(),
    t5 = {},
    t6 = null,
    t4 = null,
    t7 = null,
    t8 = !0,
    t9 = !1,
    ne = new v.Ep(),
    nt = !1,
    nn = !1,
    ni = !1,
    nr = !1,
    na = {};
function ns(e) {
    return (function (e) {
        let { location: t } = e;
        return es.getConfig({ location: t });
    })({ location: e }).hdrCaptureMode;
}
async function nl() {
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
function no() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e6.x.DEFAULT,
        t = t_[e];
    return null == t && ((t = tl()), (t_[e] = t)), t;
}
function nd() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e6.x.DEFAULT,
        t = no(e);
    if (e === e6.x.STREAM)
        return {
            ...t,
            modeOptions: {
                ...t.modeOptions,
                vadLeading: eT.getConfig({ location: "MediaEngineStore.getSettings" }).enabled
                    ? 0
                    : t.modeOptions.vadLeading,
            },
        };
    let n = to[t.activeInputProfile ?? e5.m.CUSTOM],
        i = n$() ? na : td,
        r = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}), ...(i.modeOptions ?? {}) };
    if ((null == r.vadKrispActivationThreshold && !0 === n.automaticGainControl) || !0 === t.automaticGainControl) {
        let e = z({ location: "getSettings" });
        null != e.vadKrispActivationThreshold && (r.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return { ...t, ...n, ...i, modeOptions: r };
}
function nc(e) {
    let t = nd(e.context),
        n = t.mode;
    e.context === e6.x.DEFAULT && (0, eI.N)(!1, !1);
    let { showPTTSpeakingIndicator: i } = eH.A.getConfig({ location: "setInputMode" }),
        r = i && n === eG.TBI.PUSH_TO_TALK;
    e.setInputMode(n, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: !!r || t.modeOptions.autoThreshold,
        vadUseKrisp: (!!r || t.modeOptions.vadUseKrisp) && n$(),
        vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? 0.5,
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        pttReleaseDelay: Math.round(t.modeOptions.delay),
    });
}
function nu(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e6.Hz;
    return S().clamp(e, 0, t);
}
function n_(e) {
    let t = nd(e.context),
        n = !tA || t.mute || t.deaf;
    switch (e.context) {
        case e6.x.DEFAULT:
            n = n || tO || tR || tL || !eM.A.didHavePermission(e1.iL.AUDIO);
            break;
        case e6.x.STREAM:
            n = !0;
            break;
        default:
            e.context;
    }
    e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === e6.x.DEFAULT && U.A.updateNativeMute();
}
function nE() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tD,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        n = a;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, f.isWindows)()
                ? P.c1(n.desktopSource.soundshareId)
                : null != n.desktopSource.sourcePid && nd().videoHook && P.c1(n.desktopSource.sourcePid),
            tc.setGoLiveSource(null, tI)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            tc.setGoLiveSource(null, tI),
        tD || e)
    ) {
        let t = nd().videoDeviceId;
        tD && t === e6.dx && tb === e6.dx && tv !== e6.qe ? (t = tv) : (tb = t),
            (tv = (tD = e) ? nw(tN, t) : e6.qe),
            tc.setVideoInputDevice(tv);
    }
    if (((a = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = ns("MediaEngineStore go live"),
                r = nd().videoHook,
                a = nN(),
                s = a ? ((0, f.isWindows)() && R().satisfies(M.A?.os.release, ec.fG) ? ec.zl : ec.eg) : 0,
                l = !1;
            (0, f.isWindows)() &&
                s >= ec.zl &&
                (l =
                    !0 === t4
                        ? eR.getConfig({ location: "updateVideo" }).enabled
                        : eO.getConfig({ location: "updateVideo" }).enabled);
            let o = !r || !ei.getConfig({ location: "updateVideo" }).enabled,
                d = r && eC.getConfig({ location: "updateVideo" }).enabled,
                { minCaptureWidth: c, minCaptureHeight: u } = eg.getConfig({ location: "updateVideo" });
            tc.setGoLiveSource(
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
                        allowScreenCaptureKit: nC(),
                        videoHookStaleFrameTimeoutMs: 500,
                        graphicsCaptureStaleFrameTimeoutMs: te,
                        hdrCaptureMode: n,
                        enableGlobalFramePoolLock: (function (e) {
                            let { location: t, disable: n = !1 } = e;
                            return n ? ea.definition.defaultConfig : ea.getConfig({ location: t });
                        })({ location: "updateVideo" }).enabled,
                        useGraphicsCaptureDirtyRegions: l,
                        videoHookAllowDx12: d,
                        minCaptureWidth: c,
                        minCaptureHeight: u,
                    },
                    quality: e,
                },
                tI,
            );
        }
        null != t.cameraSource &&
            tc.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: t.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: !1 === t.cameraSource.sound ? "" : t.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                tI,
            );
    }
}
function nA(e) {
    switch (e) {
        case e6.CO.KRISP_CPU_OVERUSE:
            return V.B6.KrispCpuOveruse;
        case e6.CO.KRISP_FAILED:
            return V.B6.KrispFailed;
        case e6.CO.KRISP_VAD_CPU_OVERUSE:
            return V.B6.KrispVadCpuOveruse;
        case e6.CO.KRISP_INIT_ERROR:
            return V.B6.KrispInitError;
        case e6.CO.KRISP_INIT_ERROR_NATIVE:
            return V.B6.KrispInitErrorNative;
        case e6.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED:
            return V.B6.KrispInitErrorSse4NotSupported;
        case e6.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED:
            return V.B6.KrispInitErrorAvx2NotSupported;
        case e6.CO.KRISP_INIT_ERROR_UNSIGNED:
            return V.B6.KrispInitErrorUnsigned;
        case e6.CO.KRISP_INIT_ERROR_GLOBAL_INIT:
            return V.B6.KrispInitErrorGlobalInit;
        case e6.CO.KRISP_INIT_ERROR_WEIGHT_8K:
            return V.B6.KrispInitErrorWeight8k;
        case e6.CO.KRISP_INIT_ERROR_WEIGHT_16K:
            return V.B6.KrispInitErrorWeight16k;
        case e6.CO.KRISP_INIT_ERROR_WEIGHT_32K:
            return V.B6.KrispInitErrorWeight32k;
        case e6.CO.KRISP_INIT_ERROR_WEIGHT_VAD:
            return V.B6.KrispInitErrorWeightVad;
        default:
            return;
    }
}
let nh = new Set([
    e6.CO.KRISP_INIT_ERROR,
    e6.CO.KRISP_INIT_ERROR_NATIVE,
    e6.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED,
    e6.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED,
    e6.CO.KRISP_INIT_ERROR_UNSIGNED,
    e6.CO.KRISP_INIT_ERROR_GLOBAL_INIT,
    e6.CO.KRISP_INIT_ERROR_WEIGHT_8K,
    e6.CO.KRISP_INIT_ERROR_WEIGHT_16K,
    e6.CO.KRISP_INIT_ERROR_WEIGHT_32K,
    e6.CO.KRISP_INIT_ERROR_WEIGHT_VAD,
]);
function nI(e, t) {
    if (
        (e7.warn(`Voice processing error: ${e}`),
        (0, V.QW)({ type: V.iy.NOISE_CANCELLER_ERROR, underlyingError: nA(e), voiceProcessingErrorDetails: t }),
        ew.default.track(eG.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
        nh.has(e))
    ) {
        tj = !0;
        return;
    }
    e === e6.CO.KRISP_VAD_CPU_OVERUSE
        ? b.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e })
        : ((t$ = !0), b.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e }));
}
function nf(e, t) {
    let n = t === e6.$C.LIVE;
    e7.warn(`Video filter error: ${e} (${n ? "live" : "preview"})`),
        n &&
            (0, V.QW)({
                type: V.iy.VIDEO_BACKGROUND_UNAVAILABLE,
                underlyingError: (function (e) {
                    switch (e) {
                        case e6.kv.UNSUPPORTED:
                            return V.B6.VideoBackgroundUnsupported;
                        case e6.kv.INIT_FAILED:
                            return V.B6.VideoBackgroundInitFailed;
                        default:
                            return;
                    }
                })(e),
            }),
        b.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_FILTER_ERROR", code: e, target: n ? "live" : "preview" });
}
function np(e) {
    let t = z({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function nT(e, t) {
    e.setAutomaticGainControl(np(t));
}
function nm(e, t) {
    let n = (0, eU.A)(t, i.getSystemMicrophoneMode());
    n !== t && e7.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: r } = z({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(r);
}
function ng() {
    let e = nd(),
        t = e.inputDeviceId,
        n = eZ.A.hasEchoCancellation(t) || e.echoCancellation,
        r = eZ.A.hasNoiseSuppression(t) || e.noiseSuppression,
        { maxSampleRateHz: a, maxChannelCount: s } = (function (e, t) {
            let { location: n } = e;
            if (!ee("any", t)) return { maxSampleRateHz: 0, maxChannelCount: 0 };
            let i = (function (e) {
                let { location: t } = e;
                return J.getConfig({ location: t });
            })({ location: n });
            return ee(i.condition, t)
                ? { maxSampleRateHz: 32e3 * !!i.capSampleRate, maxChannelCount: +!!i.capChannelCount }
                : { maxSampleRateHz: 0, maxChannelCount: 0 };
        })(
            { location: "updateVoiceFidelityCaps" },
            {
                krispEnabled: (0, eU.A)(e.noiseCancellation, i.getSystemMicrophoneMode()),
                noiseSuppressionEnabled: r,
                echoCancellationEnabled: n,
            },
        );
    tc.setVoiceSampleRateCap(a), tc.setVoiceChannelCountCap(s);
}
function nS(e) {
    let t = nd(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eZ.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eZ.A.hasNoiseSuppression(n) || t.noiseSuppression),
        nT(e, eZ.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        nm(e, t.noiseCancellation),
        e.setSpatialAudioEnabled(nH(t.audioMixerSettings)),
        ng(),
        (0, f.isWindows)() && R().satisfies(M.A?.os.release, ">=10.0.15063") && e.context === e6.x.DEFAULT)
    ) {
        let t = (function (e) {
                let { location: t } = e;
                return em.getConfig({ location: t });
            })({ location: "updateConnectionVoiceProcessing" }),
            n = nP(tg[i.getInputDeviceId()]) || nP(tS[i.getOutputDeviceId()]);
        e.setEchoReferenceMode(n ? "mix" : t.echoReferenceMode);
    }
    if ((0, f.isDesktop)()) {
        let { consecutiveFailures: t } = (function (e) {
            let { location: t } = e;
            return eE.getConfig({ location: t });
        })({ location: "updateConnectionVoiceProcessing" });
        e.setNoiseCancellationCpuDisablement(t);
    }
    if ((0, f.isWeb)()) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function nN() {
    return (0, f.isWindows)() && R().satisfies(M.A?.os.release, ec.yg);
}
function nC() {
    return (0, f.isMac)() && tc.supports(e6.O5.SCREEN_CAPTURE_KIT) && R().satisfies(M.A?.os.release, ec.e);
}
function nO() {
    return (
        (0, f.isWindows)() &&
        tc.supports(e6.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        tc.supports(e6.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nR() {
    return tc.supports(e6.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function nL(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e6.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = no(t);
    return Object.assign(i, e), !__OVERLAY__ && n && D.w.set(e8, t_), i;
}
function ny() {
    let e = nd();
    nx(e.inputDeviceId),
        tc.setAudioOutputDevice(e.outputDeviceId),
        nE(),
        tc.setInputVolume(e.inputVolume),
        tc.setOutputVolume(e.outputVolume),
        tc.setAecDump(e.aecDumpEnabled),
        tc.setSidechainCompression(e.sidechainCompression),
        tc.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        tc.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        (0, f.isLinux)() && p.Ay?.setOpenH264Enabled?.(e.openH264Enabled),
        nj(e.audioMixerSettings);
}
function nD() {
    tA || tc.enable().then(() => b.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nv(e) {
    return { id: e6.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
}
function nb(e, t) {
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
let nM = /^HDAUDIO\\(?:SUB)?FUNC_\d+&VEN_(?:8086|1002|10DE)/;
function nP(e) {
    return e?.windowsDeviceService === "voicemodvad" || e?.name?.toLowerCase().includes("voicemod") === !0;
}
function nU(e, t) {
    let { deviceType: n, defaultName: i } = t,
        r = e[{ audioinput: "inputDevices", audiooutput: "outputDevices", videoinput: "videoDevices" }[n]];
    if (0 === r.length) {
        let e = nv(i);
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
                    case nb(e, r):
                        return "WEBCAM";
                    case ["builtin", "displayport", "hdmi"].includes(e.macosTransportType ?? ""):
                    case null != e.hardwareId && nM.test(e.hardwareId):
                        return "INTEGRATED";
                    case S()(e.hardwareId).startsWith("BTHENUM"):
                    case ["bluetooth", "bluetoothle"].includes(e.macosTransportType ?? ""):
                        return "BLUETOOTH";
                    case ["airplay", "continuitycapturewireless"].includes(e.macosTransportType ?? ""):
                        return "AIRPLAY";
                    case "audioinput" === e.type && nb(e, i):
                    case "audiooutput" === e.type && nb(e, n):
                        return "HEADSET";
                }
            })(t, e),
            windowsDeviceService: t.windowsDeviceService,
        }))
        .keyBy("id")
        .value();
}
function nw(e, t) {
    let n = e[t] ?? e[e6.dx] ?? S()(e).values().first();
    return null != n ? n.id : t;
}
function nG(e) {
    if (!(0, f.isWindows)() || !X.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects) return;
    let t = tg[e];
    t?.guid != null && ek(t.guid, e, tc);
}
function nx(e) {
    tc.setAudioInputDevice(e), nG(e);
}
function nk(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nF() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = eV.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let i = n === e3.W.USER ? e6.x.DEFAULT : e6.x.STREAM,
            r = i === e6.x.STREAM ? e6.Cn : e6.Hz,
            a = t[n] ?? {},
            { localMutes: s, localVolumes: l } = nd(i);
        for (let [e, t] of Object.entries(a))
            null == (0, eB.tM)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== r ? (l[e] = t.volume) : delete l[e],
                tc.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (e)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == a[e] &&
                    (delete s[e],
                    delete l[e],
                    tc.eachConnection((t) => {
                        t.setLocalVolume(e, r), t.setLocalMute(e, !1);
                    }, i));
        nL({ localMutes: s, localVolumes: l }, i);
    }
}
function nV(e, t) {
    if (t) {
        let { soundshareId: t, soundshareSession: a } = (function (e) {
            if (null == i)
                return (
                    e7.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
                    { soundshareId: null, soundshareSession: "" }
                );
            {
                let t = i.getExperimentalSoundshare() ? e : eW.A.getAudioPid(e),
                    n = "";
                return null != t && (n = eW.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n };
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
    return null != e && nd().videoHook && P.GH(e), { soundshareId: null, soundshareSession: null };
}
function nB() {
    let e = e6.x.DEFAULT,
        { videoToggleStateMap: t } = nd(e);
    for (let [e, n] of Object.entries(t)) n === eG.bb8.AUTO_PROBING && delete t[e];
    nL({ videoToggleStateMap: t }, e, !1);
}
function nH(e) {
    let { enabled: t } = ej.A.getConfig({ location: "MediaEngineStore" });
    return !0 === e.enabled && t && tc.supports(e6.O5.SPATIAL_AUDIO);
}
function nj(e) {
    (tZ = nH(e)), tc.setAudioMixerOptions({ ...e, enabled: tZ });
}
function nW(e) {
    let t = nd(),
        n = tc.getAudioSubsystem(),
        r = tc.getAudioLayer(),
        a = nw(tg, t.inputDeviceId),
        s = tg[a]?.name,
        l = (0, eU.A)(t.noiseCancellation, i.getSystemMicrophoneMode());
    ew.default.track(eG.HAw.VOICE_PROCESSING, {
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
function nY() {
    let e = nd(),
        t = t3.size > 0,
        n = e.inputDeviceId,
        i = eZ.A.hasEchoCancellation(n) || e.echoCancellation,
        r = eZ.A.hasNoiseSuppression(n) || e.noiseSuppression,
        a = np(eZ.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation;
    tc.setLoopback(t, {
        echoCancellation: i,
        echoCancellationPreEcho: !t,
        noiseSuppression: r,
        automaticGainControlConfig: a,
        noiseCancellation: s,
    }),
        ng();
}
async function nK() {
    if (!tc.supports(e6.O5.VAAPI) || window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let e = await window.DiscordNative.processUtils.getSystemInfo();
    (e.electronGPUInfo?.gpuDevice ?? []).some((e) => 4098 === e.vendorId) &&
        ((ni = !0), (nn = tc.supports(e6.O5.GAMESCOPE_CAPTURE)));
}
function n$() {
    return (tH || !1) && !tj;
}
async function nz() {
    try {
        await p.Ay.ensureModule("discord_krisp");
        let e = p.Ay.requireModule("discord_krisp");
        (tH = !0),
            (c = e.getSdkVersion?.()),
            (u = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (tW = e), i.emitChange();
            }),
            i.emitChange(),
            await p.Ay.ensureModule("discord_voice");
        let t = p.Ay.requireModule("discord_voice");
        t.setupKrispPath?.();
    } catch (t) {
        e7.warn(`Failed to load Krisp module: ${t.message}`), eK.A.captureException(t);
        let e = e6.CO.KRISP_INIT_ERROR;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? e6.CO.KRISP_INIT_ERROR : n;
        }
        (0, V.QW)({ type: V.iy.NOISE_CANCELLER_ERROR, underlyingError: nA(e) }),
            ew.default.track(eG.HAw.VOICE_PROCESSING, { noise_canceller_error: e });
    } finally {
        tB = !1;
    }
}
async function nq() {
    try {
        let e,
            t = "",
            n = !1,
            i = URL.parse(tr);
        if (null === i) return void e7.log("OpenH264 URL ", i, " is invalid");
        let r = i.pathname.split("/"),
            a = r[r.length - 1].replace(".bz2", "");
        try {
            let t = await p.Ay.downloadOpenH264(
                tr,
                a,
                "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f",
                (e) => {
                    e7.log("OpenH264 download status", e);
                },
            );
            e7.log("OpenH264 is ready", t), (n = t.fetchedFromNetwork), (e = !0);
        } catch (n) {
            e7.error("OpenH264 download failed", n), (t = n.message), (e = !1);
        }
        if (
            (ew.default.track(eG.HAw.VIDEO_OPENH264_DOWNLOADED, {
                success: e,
                fetched_from_network: n,
                error_message: t,
            }),
            e)
        ) {
            let e = await p.Ay.cleanupUnusedOpenH264Files([a]);
            e7.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        e7.error("OpenH264 download failed", e);
    }
}
function nZ(e) {
    e === e6.rB.AUTOMATIC
        ? (nL({ automaticAudioSubsystem: !0 }), nX())
        : (nL({ automaticAudioSubsystem: !1 }), tc.setAudioSubsystem(e));
}
function nX() {
    tc.queueAudioSubsystem(e6.rB.EXPERIMENTAL);
}
function nQ(e) {
    let { section: t } = e;
    return t === eG.nc_.VOICE && nD(), !1;
}
class nJ extends L.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        let e;
        if (
            ((l ??= new e_(tc, this)),
            tC.start(tn, () => {
                e7.error("Device enumeration timed out"), ew.default.track(eG.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
            }),
            tc.on(y.bg.Connection, (e) => {
                let t;
                nY(), nc(e), n_(e), nS(e);
                let n = nd();
                e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers),
                    e.setQoS(n.qos),
                    (0, f.isWindows)()
                        ? (e.setExperimentFlag(e6.fd.H265_HARDWARE_ONLY, !0),
                          (null != tJ
                              ? tJ
                              : "u" > typeof window
                                ? (tJ = nl().then((e) => ((tQ = e), e)))
                                : Promise.resolve(!1)
                          ).then((t) => {
                              e.setExperimentFlag(e6.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                          }))
                        : (0, f.isMac)() && e.setExperimentFlag(e6.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                    (0, f.isLinux)() && n.openH264Enabled && e.setExperimentFlag(e6.fd.USE_LIBOPENH264_DECODER, !0),
                    (function (e) {
                        let { location: t, disable: n = !1 } = e;
                        return n ? eh.definition.defaultConfig : eh.getConfig({ location: t });
                    })({ location: "setupMediaEngine" }).enabled &&
                        e.setExperimentFlag(e6.fd.LOW_LATENCY_RATE_CONTROL, !0),
                    e.setExperimentFlag(e6.fd.RESET_DECODER_ON_ERRORS, !0),
                    e.setExperimentFlag(e6.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
                let { swallowVolumeOnlySpeakingEvents: r } = w.A.getConfig({ location: "MediaEngineStore" });
                if (
                    (r && e.setExperimentFlag(e6.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === e6.x.STREAM)
                ) {
                    let t = nk(tS);
                    e.setSoundshareDiscardRearChannels(t);
                }
                if ((0, f.isWindows)())
                    e.setExperimentFlag(e6.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(e6.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e6.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                else if ((0, f.isMac)())
                    e.setExperimentFlag(e6.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e6.fd.SIGNAL_AV1_HARDWARE_DECODE, !0),
                        e.setExperimentFlag(
                            e6.fd.H265_DISABLE_ENCODE,
                            !(
                                window?.DiscordNative?.os.arch === "arm64" &&
                                R().satisfies(window?.DiscordNative?.os.release, e6.Dk)
                            ),
                        );
                else if ((0, f.isLinux)()) {
                    let { enabled: t } = q.getConfig({ location: "MediaEngineStore" });
                    t && e.setExperimentFlag(e6.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(e6.fd.SIGNAL_AV1_DECODE, !0);
                } else
                    ((0, f.isIOS)() || (0, f.isAndroid)()) &&
                        (e.setExperimentFlag(e6.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e6.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
                if ((0, f.isWeb)()) {
                    let { enabled: t } = et.getConfig({ location: "MediaEngineStore" });
                    e.setExperimentFlag(e6.fd.BROWSER_HEVC, t);
                }
                for (let r of ((0, f.isWindows)() &&
                    t6?.startsWith("AMD") &&
                    eD("MediaEngineStore").enabled &&
                    e.setExperimentFlag(e6.fd.WMF_GPU_ENCODE, !0),
                (0, f.isWindows)() &&
                    t6?.startsWith("Intel") &&
                    !0 === t4 &&
                    1 === t7 &&
                    ev.getConfig({ location: "MediaEngineStore" }).enabled &&
                    (e.setExperimentFlag(e6.fd.WMF_GPU_ENCODE, !0), e.setExperimentFlag(e6.fd.INTEL_GPU_DISABLE, !0)),
                (0, f.isWindows)() &&
                    t6?.startsWith("Intel") &&
                    !0 === t4 &&
                    1 === t7 &&
                    eL.getConfig({ location: "MediaEngineStore" }).enabled &&
                    e.setExperimentFlag(e6.fd.INTEL_GPU_DISABLE, !0),
                (0, f.isWindows)() &&
                    t6?.startsWith("Qualcomm") &&
                    eD("MediaEngineStore").enabled &&
                    e.setExperimentFlag(e6.fd.WMF_GPU_ENCODE, !0),
                tc.setHasFullbandPerformance(null === (t = (0, F.A)()) || t >= 31),
                e.setRemoteAudioHistory(1e3),
                (0, x.A)(i) && e.setClipsKeyFrameInterval(e6.X1),
                (n = nd(e.context)),
                e.setPostponeDecodeLevel(100),
                Object.keys(n.localMutes)))
                    r !== ez.default.getId() && e.setLocalMute(r, n.localMutes[r]);
                for (let t of Object.keys(n.localVolumes))
                    t !== ez.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
                for (let t of Object.keys(n.localPans)) {
                    let i = n.localPans[t];
                    e.setLocalPan(t, i.left, i.right);
                }
                for (let t of Object.keys(n.disabledLocalVideos)) e.setLocalVideoDisabled(t, n.disabledLocalVideos[t]);
                e.on(y.yq.Speaking, (t, n, i, r) => {
                    b.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: r });
                }),
                    e.context === e6.x.DEFAULT &&
                        ((tP = !1),
                        e.on(y.yq.SpeakingWhileMuted, () => {
                            let e = !tP;
                            (tP = !0),
                                e && i.emitChange(),
                                tU.start(tt, () => {
                                    (tP = !1), i.emitChange();
                                });
                        })),
                    e.on(y.yq.DesktopSourceEnd, (t, n) => {
                        b.h.dispatch({
                            type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                            settings: { context: e.context },
                            endReason: t,
                            errorCode: n,
                        });
                    }),
                    e.on(y.yq.InteractionRequired, (e) => {
                        b.h.dispatch({ type: "MEDIA_ENGINE_INTERACTION_REQUIRED", required: e });
                    }),
                    e.on(y.yq.VideoHookInitialize, (e, t, n, i, r, s) => {
                        a?.desktopSource != null &&
                            ew.default.track(eG.HAw.VIDEOHOOK_INITIALIZED, {
                                backend: e,
                                format: t,
                                framebuffer_format: n,
                                sample_count: i,
                                success: r,
                                reinitialization: s,
                                ...(0, W.A)(a?.desktopSource),
                            });
                    }),
                    e.on(y.yq.NoiseCancellationError, nI),
                    e.on(y.yq.VoiceActivityDetectorError, nI),
                    e.on(y.yq.SdpError, (e, t, n, i) => {
                        ew.default.track(eG.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: i });
                    }),
                    e.on(y.yq.VideoState, (t) => {
                        b.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                    }),
                    e.setBitRate(eq.A.bitrate),
                    e.applyVideoQualityMode(e0.A.mode),
                    (0, f.isWindows)() &&
                        tc.supports(e6.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                        tc.setAsyncVideoInputDeviceInit(!0);
            }),
            tc.on(y.bg.DeviceChange, (e, t, n) => {
                tC.stop(),
                    b.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
            }),
            tc.on(y.bg.VolumeChange, (e, t) => {
                b.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
            }),
            tc.on(y.bg.DesktopSourceEnd, (e, t) => {
                b.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
            }),
            tc.on(y.bg.AudioPermission, (e) => {
                (t0 = !0), b.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
            }),
            tc.on(y.bg.VideoPermission, (e) => {
                b.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
            }),
            tc.on(y.bg.WatchdogTimeout, async () => {
                let e;
                if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                    try {
                        await eW.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                    } catch (t) {
                        "number" == typeof t.status && (e = t.status);
                    }
                e7.warn(`Watchdog timeout, report submission status: ${e ?? 200}`);
                let t = null != M.A.processUtils.setCrashReason;
                try {
                    await ew.default.track(
                        eG.HAw.VOICE_WATCHDOG_TIMEOUT,
                        { minidump_submission_error: e, will_restart: t },
                        { flush: !0 },
                    );
                } catch (e) {
                    e7.error("Failed to flush voice watchdog timeout analytics event", e);
                }
                t &&
                    (e7.info("Relaunching app due to voice watchdog timeout"),
                    await M.A.processUtils.setCrashReason("voice-watchdog-timeout"),
                    D.w.set("discord_watchdog_restart_timestamp", Date.now().toString()),
                    M.A.app.relaunch());
            }),
            tc.on(y.bg.VideoInputInitialized, (e) => {
                ew.default.track(eG.HAw.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired
                        ? null
                        : Math.round(e.timeToFirstFrame * eY.A.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy,
                    media_session_id: eQ.A.getMediaSessionId(),
                    rtc_connection_id: eQ.A.getRTCConnectionId(),
                });
            }),
            tc.on(y.bg.AudioInputInitialized, (e) => {
                ew.default.track(eG.HAw.AUDIO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_initialized_ms: Math.round(e.timeToInitialized * eY.A.Millis.SECOND),
                    rtc_connection_id: eQ.A.getRTCConnectionId(),
                });
            }),
            tc.on(y.bg.ClipsRecordingRestartNeeded, () => {
                b.h.dispatch({ type: "CLIPS_RESTART" });
            }),
            tc.on(y.bg.ClipsInitFailure, (e, t) => {
                let n = tf < 3;
                (tf += 1),
                    b.h.wait(() => {
                        b.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t }),
                            n
                                ? b.h.dispatch({ type: "CLIPS_RESTART" })
                                : e7.warn(
                                      `Clips init failure budget exhausted (${tf} consecutive unhealthy attempts); skipping auto-restart. A settings flip / game change / app restart will retry.`,
                                  );
                    });
            }),
            tc.on(y.bg.ClipsRecordingHealthy, () => {
                0 !== tf && (e7.info(`Clips bridge reported healthy; resetting restart budget (was ${tf}).`), (tf = 0));
            }),
            tc.on(y.bg.ClipsRecordingReadyChanged, (e) => {
                tp !== e && (e7.info(`Clips recorder ready changed: ${e}`), (tp = e));
            }),
            tc.on(y.bg.ClipsBridgeIdleShutdown, () => {
                e7.info("Clips bridge idle shutdown");
            }),
            tc.on(y.bg.ClipsRecordingEnded, (e, t) => {
                s?.desktopSource?.id === e &&
                    (null != t && a?.desktopSource?.soundshareId !== t && P.c1(t), (s = null));
            }),
            tc.on(y.bg.NativeScreenSharePickerUpdate, (e, t) => {
                b.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
            }),
            tc.on(y.bg.NativeScreenSharePickerCancel, (e) => {
                b.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
            }),
            tc.on(y.bg.NativeScreenSharePickerError, (e) => {
                b.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
            }),
            tc.on(y.bg.AudioDeviceModuleError, (e, t, n) => {
                ew.default.track(eG.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
            }),
            tc.on(y.bg.VideoCodecError, (e) => {
                let t = "encode" === e.mode ? V.iy.VIDEO_ENCODE_ERROR : V.iy.VIDEO_DECODE_ERROR,
                    n = { videoCodec: e.codecStandard, errorMessage: e.message };
                (0, V.QW)(
                    t === V.iy.VIDEO_ENCODE_ERROR
                        ? { type: t, ...n, videoEncoder: e.implName }
                        : { type: t, ...n, videoDecoder: e.implName },
                );
            }),
            tc.on(y.bg.ConnectionStats, (e) => {
                b.h.dispatch({
                    type: "MEDIA_ENGINE_CONNECTION_STATS",
                    connectionStats: e.map((e) => {
                        let { stats: t, connection: n } = e;
                        return {
                            stats: t,
                            mediaEngineConnectionId: n.mediaEngineConnectionId,
                            version: ta++,
                            context: n.context,
                        };
                    }),
                });
            }),
            tc.on(y.bg.VoiceProcessingError, nI),
            tc.on(y.bg.VideoFilterError, nf),
            tc.on(y.bg.VoiceQueueMetrics, (e) => {
                let t = n0(e);
                null !== t && ew.default.track(eG.HAw.VOICE_QUEUE_METRICS, t);
            }),
            tc.setOnVideoContainerResized((e, t, n) => {
                b.h.wait(() =>
                    b.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
                );
            }),
            nK(),
            l.reset(),
            (0, eF.w)().then((e) => {
                null != e && ((t6 = e.gpu_brand), (t4 = e.has_intel_hybrid_igpu), (t7 = e.gpu_count));
            }),
            tc.on(y.bg.SystemMicrophoneModeChange, (e) => {
                (E = e), tc.eachConnection(nS), i.emitChange();
            }),
            null != (e = D.w.get("audio")) && (D.w.set(e8, { [e6.x.DEFAULT]: e }), D.w.remove("audio")),
            (t_ = D.w.get(e8) ?? {}),
            S().each(t_, (e) => {
                S().defaultsDeep(e, tl()),
                    null != e.modeOptions &&
                        "string" == typeof e.modeOptions.shortcut &&
                        (e.modeOptions.shortcut = (0, e$.OH)(e.modeOptions.shortcut)),
                    null != e.modeOptions &&
                        4 !== e.vadUseKrispSettingVersion &&
                        ((e.vadUseKrispSettingVersion = 4), (e.modeOptions.vadUseKrisp = !0)),
                    e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                    e.vadThrehsoldMigrated ||
                        ((e.vadThrehsoldMigrated = !0),
                        e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = -60)),
                    tc.supports(e6.O5.SIDECHAIN_COMPRESSION) &&
                        e.sidechainCompressionSettingVersion < 1 &&
                        ((e.sidechainCompressionSettingVersion = 1), (e.sidechainCompression = !0)),
                    e.audioMixerSettingsVersion < 3 &&
                        ((e.audioMixerSettingsVersion = 3), (e.audioMixerSettings = { ...e2 })),
                    (0, f.isWeb)()
                        ? 1 !== e.ncUseKrispjsSettingVersion &&
                          ((e.ncUseKrispjsSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                        : 1 !== e.ncUseKrispSettingVersion &&
                          ((e.ncUseKrispSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
            }),
            ny(),
            ((0, f.isWindows)() || (0, f.isLinux)() || (0, f.isMac)()) && !__OVERLAY__ && !tB && !tH
                ? ((tB = !0), nz())
                : (0, f.isWeb)() && tc.supports(e6.O5.NOISE_CANCELLATION)
                  ? ((tH = !0), i.emitChange())
                  : (0, f.isWeb)() && nL({ noiseCancellation: !1 }),
            (0, f.isLinux)() && nq(),
            nB(),
            (0, f.isDesktop)() && f.isPlatformEmbedded && !nr)
        ) {
            async function t() {
                let e = await new Promise((e) => {
                    p.Ay.pollQueueMetrics((t) => {
                        e(t);
                    });
                });
                e.periodMs = e6.tl;
                let n = n0(e);
                null !== n && ew.default.track(eG.HAw.VOICE_QUEUE_METRICS, n), setTimeout(t, e6.tl);
            }
            (nr = !0), setTimeout(t, e6.tl);
        }
        (0, f.isWindows)() &&
            f.isPlatformEmbedded &&
            null === tm &&
            tc
                .getCodecSurvey()
                .then((e) => {
                    try {
                        let t = JSON.parse(e);
                        if (null == t || null == t.available_video_decoders)
                            throw Error("decoder survey is not available");
                        tm = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                    } catch (e) {
                        e7.error("Failed to parse codec survey", e), (tm = !1);
                    }
                })
                .catch((e) => {
                    e7.error("Failed to get codec survey", e), (tm = !1);
                })
                .finally(() => {
                    b.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
                }),
            (t5 = {
                [e6.O5.VIDEO]: tc.supports(e6.O5.VIDEO),
                [e6.O5.DESKTOP_CAPTURE]: tc.supports(e6.O5.DESKTOP_CAPTURE),
                [e6.O5.HYBRID_VIDEO]: tc.supports(e6.O5.HYBRID_VIDEO),
            }),
            this.waitFor(ez.default, eq.A, eZ.A, eX.A, G.Ay, B.A, eQ.A, j.Ay, eV.A, eJ.default, e0.A);
    }
    supports(e) {
        return (e !== e6.O5.VIDEO || !!tu("MediaEngineStore.supports")) && tc.supports(e);
    }
    supportsInApp(e) {
        return (e !== e6.O5.VIDEO || !!tu("MediaEngineStore.supportsInApp")) && (t5[e] || tc.supports(e));
    }
    isSupported() {
        return tc.supported();
    }
    isNoiseSuppressionSupported() {
        return tc.supports(e6.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return n$();
    }
    isNoiseCancellationError() {
        return t$;
    }
    isAutomaticGainControlSupported() {
        return tc.supports(e6.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nR() && (tc.supports(e6.O5.LEGACY_AUDIO_SUBSYSTEM) || tc.supports(e6.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return tc.supports(e6.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === tc.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return n$();
    }
    isAecDumpSupported() {
        return tc.supports(e6.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return tc.supports(e6.O5.VIDEO) && tc.supports(e6.O5.SIMULCAST);
    }
    getAecDump() {
        return nd().aecDumpEnabled;
    }
    getMediaEngine() {
        return tc;
    }
    getVideoComponent() {
        return tc.Video;
    }
    getCameraComponent() {
        return tc.Camera;
    }
    getKrispSuppressionLevel() {
        return u ?? 100;
    }
    getKrispEnableStats() {
        return tY;
    }
    isEnabled() {
        return tA;
    }
    isMute() {
        return this.isSelfMute() || tO;
    }
    isDeaf() {
        return this.isSelfDeaf() || ty;
    }
    isServerMute() {
        return tO;
    }
    isServerDeaf() {
        return ty;
    }
    getAudioMixerSettings() {
        return nd().audioMixerSettings;
    }
    isSpatialAudioEnabled() {
        return !0 === this.getAudioMixerSettings().enabled;
    }
    isSpatialAudioActive() {
        return tZ;
    }
    hasContext(e) {
        return null != t_[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e6.x.DEFAULT;
        return e === e6.x.DEFAULT && tR;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e6.x.DEFAULT;
        return (
            !this.isEnabled() ||
            nd(e).mute ||
            !eM.A.didHavePermission(e1.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === e6.x.DEFAULT && tL)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tM;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tM = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e6.x.DEFAULT,
            t = t9 && "voice_isolation" !== this.getSystemMicrophoneMode() && nd(e).mode === eG.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (eZ.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return t8;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e6.x.DEFAULT;
        return !this.isSupported() || nd(e).deaf;
    }
    isVideoEnabled() {
        return tD && tG;
    }
    isVideoAvailable() {
        return Object.values(tN).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return tG;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e6.x.STREAM;
        return tI === e && null != a;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e6.x.STREAM;
        return tI === e && null != a && a.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e6.x.DEFAULT;
        return e !== ez.default.getId() && (nd(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return tc.supports(e6.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e6.x.DEFAULT;
        return nd(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e6.x.DEFAULT;
        return nd(t).videoToggleStateMap[e] ?? eG.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e6.x.DEFAULT;
        return t === e6.x.DEFAULT && t1.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e6.x.DEFAULT;
        return e === e6.x.DEFAULT && t1.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tz;
    }
    isNativeAudioPermissionReady() {
        return t0;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return tI;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return tT;
    }
    isH264MfDecodeAvailable() {
        return tm;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e6.x.DEFAULT,
            n = nd(t).localPans[e];
        return null != n ? n : e9;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e6.x.DEFAULT,
            n = t === e6.x.STREAM ? e6.Cn : e6.Hz,
            i = nd(t).localVolumes[e];
        return null != i ? i : n;
    }
    getInputVolume() {
        return nd().inputVolume;
    }
    getOutputVolume() {
        return nd().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e6.x.DEFAULT;
        return nd(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e6.x.DEFAULT;
        return nd(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            S().each(t_, (t, n) => {
                let {
                    mode: i,
                    modeOptions: { shortcut: r },
                } = t;
                i === eG.TBI.PUSH_TO_TALK && tE.has(n) && (e[n] = r);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nw(tg, nd().inputDeviceId);
    }
    getOutputDeviceId() {
        return nw(tS, nd().outputDeviceId);
    }
    getVideoDeviceId() {
        return nw(tN, nd().videoDeviceId);
    }
    getInputDevices() {
        return tg;
    }
    getOutputDevices() {
        return tS;
    }
    getVideoDevices() {
        return tN;
    }
    getEchoCancellation() {
        let e = nd();
        return eZ.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return tc.supports(e6.O5.SIDECHAIN_COMPRESSION) && nd().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return nd().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return nd().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tQ && tQ;
    }
    getOpenH264Enabled() {
        return (0, f.isLinux)() && nd().openH264Enabled;
    }
    getLoopback() {
        return t3.size > 0;
    }
    getLoopbackReasons() {
        return t3;
    }
    getNoiseSuppression() {
        let e = nd();
        return eZ.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = nd();
        return eZ.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return nd().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return nd().noiseCancellation;
    }
    getHardwareEncoding() {
        return !0;
    }
    getEnableSilenceWarning() {
        return nd().silenceWarning;
    }
    getDebugLogging() {
        return tc.getDebugLogging();
    }
    getQoS() {
        return nd().qos;
    }
    getAttenuation() {
        return nd().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return nd().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return nd().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return nO() && nd().automaticAudioSubsystem ? e6.rB.AUTOMATIC : tc.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return tc.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return nd().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === e5.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e6.x.DEFAULT;
        return nd(e);
    }
    getState() {
        return {
            settingsByContext: t_,
            inputDevices: tg,
            outputDevices: tS,
            appSupported: t5,
            krispModuleLoaded: tH,
            krispFatalError: tj,
            krispVersion: c,
            krispSuppressionLevel: u,
            goLiveSource: a,
            goLiveContext: tI,
        };
    }
    getInputDetectedThisConnection() {
        return tx;
    }
    getInputDetected() {
        return l.inputDetected;
    }
    getLastInputDetectedUpdateTime() {
        return l.lastUpdateTime;
    }
    getNoInputDetectedNotice() {
        return tk;
    }
    getInputDeviceOSMuted() {
        return o;
    }
    getInputDeviceOSVolume() {
        return d;
    }
    getPacketDelay() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e6.x.DEFAULT;
        return f.isPlatformEmbedded || this.getMode(e) !== eG.TBI.VOICE_ACTIVITY
            ? 0
            : this.getModeOptions(e).vadLeading;
    }
    setCanHavePriority(e, t) {
        tc.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return th;
    }
    getVideoHook() {
        return nd().videoHook;
    }
    supportsVideoHook() {
        return tc.supports(e6.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = nd().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return tc.supports(e6.O5.EXPERIMENTAL_SOUNDSHARE) && R().satisfies(M.A?.os.release, ec.$x);
    }
    supportsHookSoundshare() {
        return (0, f.isWindows)() && tc.supports(e6.O5.SOUNDSHARE) && R().satisfies(M.A?.os.release, ec.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = nd().useSystemScreensharePicker,
            n = (0, f.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return tc.supports(e6.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return ni;
    }
    getVideoEncoderExperiments(e, t) {
        let n = ["unk"];
        if (
            (n.push("nvNewPresets"),
            e === e6.x.STREAM ? n.push("nvRelaxRc=250") : n.push("nvRelaxRc=75"),
            this.getUseVaapiEncoder() && n.push("vaapi"),
            (function (e) {
                let { location: t, disable: n = !1 } = e;
                return n ? ef.definition.defaultConfig : ef.getConfig({ location: t });
            })({ location: "getVideoEncoderExperiments" }).enabled && n.push("nvReconFrames"),
            e === e6.x.STREAM && "streamer" === t && (0, f.isWindows)())
        ) {
            n.push("useCaptureDeviceForEncode");
            let { overrideDeviceReuse: e } = eS.getConfig({ location: "handleReady" });
            e && n.push("videoCaptureDeviceOverrideReuse");
        }
        return n.push("linux-vulkan"), n.join(",");
    }
    getUseGamescopeCapture() {
        return nn;
    }
    getSpeakingWhileMuted() {
        return tP;
    }
    getKrispModelOverride() {
        return _;
    }
    getKrispModels() {
        return tW;
    }
    getKrispVadActivationThreshold() {
        return nd().modeOptions.vadKrispActivationThreshold ?? 0.5;
    }
    hasActiveCallKitCall() {
        return nt;
    }
    setHasActiveCallKitCall(e) {
        nt = e;
    }
    supportsScreenSoundshare() {
        return (0, f.isMac)()
            ? tc.supports(e6.O5.SOUNDSHARE) && R().satisfies(M.A?.os.release, ec.P$) && nC()
            : (0, f.isWindows)()
              ? tc.supports(e6.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, f.isLinux)() && tc.supports(e6.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, f.isWindows)()) {
            if (this.getBypassSystemInputProcessing()) return;
            return tX[this.getInputDeviceId()]?.active?.find((e) => "deep_noise_suppression" === e);
        }
        if ((0, f.isMac)() || (0, f.isIOS)()) return E;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e6.x.DEFAULT,
            t = this.supports(e6.O5.VIDEO)
                ? [{ rid: "100", type: e === e6.x.DEFAULT ? e6.mI.VIDEO : e6.mI.SCREEN, quality: e6.Y4 }]
                : [];
        return (
            this.isSimulcastSupported() &&
                e === e6.x.DEFAULT &&
                en.getConfig({ location: "MediaEngineStore.getVideoStreamParameters" }).enableSimulcast &&
                t.push({ rid: "50", type: e6.mI.VIDEO, quality: e6.Cl }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: (0, f.isWeb)() };
        return tc.fetchAsyncResources(e);
    }
    startDavePreload() {
        !tq &&
            ((tq = !0),
            (0, f.isWeb)() &&
                tc.fetchAsyncResources({ fetchDave: !0 }).catch((e) => {
                    e7.warn("DAVE preload failed:", e), eK.A.captureException(e);
                }));
    }
    getSupportedSecureFramesProtocolVersion() {
        return tc.getSupportedSecureFramesProtocolVersion();
    }
    hasClipsSource() {
        return null != s;
    }
    isClipsRecordingReady() {
        return tp;
    }
    isClipsRecordingReadySignalSupported() {
        return tc.supports(e6.O5.CLIPS_RECORDING_READY_EVENTS);
    }
    getGpuBrand() {
        return t6;
    }
}
function n0(e) {
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
let n1 = (i = new nJ(b.h, {
    VOICE_CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n, currentVoiceChannelId: i, video: r } = e;
        if ((i !== n && nE(r, null), null != t || null == n)) {
            tV = !1;
            return;
        }
        if (tV) return;
        tV = !0;
        let a = nd();
        (a.mute || a.deaf) && (nL({ deaf: !1, mute: !1 }), tc.eachConnection(n_));
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (r === t.sessionId) {
                (tO = t.mute || t.suppress), (ty = t.deaf), tc.eachConnection(n_);
                let e = null != t.guildId && null != t.channelId && null != tK && tK !== t.channelId,
                    n = !tV && null == t.channelId;
                return nE(!e && !n && tD), (tK = t.channelId), !0;
            }
            return __OVERLAY__ || t.userId !== ez.default.getId() || null != eQ.A.getChannelId() || nE(!1, null), e;
        }, !1);
    },
    CONNECTION_OPEN: function (e) {
        (r = e.sessionId), (tO = !1), (ty = !1);
        let t = nd();
        nO() && (nR() ? nZ(e6.rB.AUTOMATIC) : t.automaticAudioSubsystem && nX()),
            tc.supports(e6.O5.OFFLOAD_ADM_CONTROLS) && tc.setOffloadAdmControls(!0),
            (0, f.isIOS)() &&
                el.getConfig({ location: "handleConnectionOpen" }).enabled &&
                tc.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
            (0, f.isIOS)() && (tc.setNcModels?.(eA.getConfig({ location: "setupKrisp" }).models), i.emitChange()),
            nG(t.inputDeviceId),
            nF();
    },
    CONNECTION_CLOSED: function () {
        r = null;
    },
    POST_CONNECTION_OPEN: function () {
        return (0, f.isWeb)() && i.startDavePreload(), !1;
    },
    RTC_CONNECTION_STATE: function (e) {
        switch (e.state) {
            case eG.S7L.CONNECTING:
                nD();
                break;
            case eG.S7L.RTC_CONNECTING:
                (tk = !1), (o = void 0), (d = void 0), (tx = !1), (t9 = !1), ne.stop(), tF.stop(), l.reset();
                break;
            case eG.S7L.RTC_CONNECTED:
                nE();
                break;
            case eG.S7L.DISCONNECTED:
                (na = {}),
                    (function () {
                        if (0 === t1.size) return;
                        let e = e6.x.DEFAULT,
                            { disabledLocalVideos: t } = nd(e);
                        t1.forEach((n) => {
                            m()(t[n], "If you are auto-disabled, then you are also disabled."),
                                delete t[n],
                                tc.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
                        }),
                            t1.clear(),
                            nL({ disabledLocalVideos: t }, e, !1);
                    })(),
                    nB();
        }
    },
    AUDIO_SET_TEMPORARY_SELF_MUTE: function (e) {
        let { mute: t } = e;
        (tR = t), tc.eachConnection(n_);
    },
    AUDIO_TOGGLE_SELF_MUTE: function (e) {
        let { context: t, playSoundEffect: n } = e,
            { mute: i, deaf: r } = nd(t);
        if (t === e6.x.DEFAULT && (eM.A.requestPermission(e1.iL.AUDIO), tL)) return !1;
        (i = !r && !i) || (r = !1), n || (tM = !0), nL({ mute: i, deaf: r }, t), tc.eachConnection(n_);
    },
    AUDIO_SET_SELF_MUTE: function (e) {
        let { context: t, mute: n, playSoundEffect: i } = e;
        nL({ mute: n }, t), i || (tM = !0), tc.eachConnection(n_);
    },
    AUDIO_TOGGLE_SELF_DEAF: function (e) {
        let { context: t } = e;
        nL({ deaf: !nd(t).deaf }, t), tc.eachConnection(n_);
    },
    AUDIO_TOGGLE_LOCAL_MUTE: function (e) {
        let { context: t, userId: n } = e;
        if (n === ez.default.getId()) return;
        let { localMutes: i } = nd(t);
        i[n] ? delete i[n] : (i[n] = !0),
            nL({ localMutes: i }, t),
            tc.eachConnection((e) => e.setLocalMute(n, i[n] || !1), t);
    },
    AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
        let { context: t, userId: n, videoToggleState: i, persist: r, isAutomatic: a } = e;
        m()(!(r && a), "These are not allowed to both be true.");
        let s = i === eG.bb8.DISABLED,
            { disabledLocalVideos: l } = nd(t),
            o = l[n] ?? !1,
            d = t1.has(n),
            c = i === eG.bb8.AUTO_ENABLED || i === eG.bb8.MANUAL_ENABLED;
        e7.info(`disableVideo=${s} currentlyDisabled=${o} currentlyAutoDisabled=${d}, isVideoShown=${c}`),
            m()(!(d && !o), "If you are auto-disabled, then you are also disabled.");
        let u = s !== o,
            _ = t === e6.x.DEFAULT,
            E = a && u && _,
            A = r && u && _;
        e7.info(`changed=${u} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${E} isManualToggleByUser=${A}`);
        let { videoToggleStateMap: h } = nd(t);
        if (
            (h[n] === eG.bb8.AUTO_PROBING &&
                i === eG.bb8.AUTO_ENABLED &&
                (0, eb.A)(n, s ? e6.Al.AUTO_DISABLE : e6.Al.AUTO_ENABLE, c),
            (h[n] = i),
            nL({ videoToggleStateMap: h }, t, r),
            i === eG.bb8.AUTO_PROBING
                ? eQ.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
                : eQ.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
            t2 ||
                (e7.info(`isAutoDisableAllowed=${t2} - disabling VideoHealthManager`),
                eQ.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
            E)
        ) {
            if ((!s && !d) || (s && !t2)) return;
            (0, eb.A)(n, s ? e6.Al.AUTO_DISABLE : e6.Al.AUTO_ENABLE, c), s ? t1.add(n) : t1.delete(n);
        } else
            A &&
                (d && !s
                    ? (e7.info("disallowing auto-disable for this session because of manual override by user"),
                      (t2 = !1),
                      eQ.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                      (0, eb.A)(n, e6.Al.MANUAL_REENABLE, c))
                    : (0, eb.A)(n, s ? e6.Al.MANUAL_DISABLE : e6.Al.MANUAL_ENABLE, c));
        _ && !s && t1.delete(n),
            s ? (l[n] = !0) : delete l[n],
            nL({ disabledLocalVideos: l }, t, r),
            tc.eachConnection((e) => e.setLocalVideoDisabled(n, l[n] ?? !1), t);
    },
    AUDIO_SET_LOCAL_VOLUME: function (e) {
        let { context: t, userId: n, volume: i } = e;
        if (n === ez.default.getId()) return;
        let r = t === e6.x.STREAM ? e6.Cn : e6.Hz,
            { localVolumes: a } = nd(t);
        i === r ? delete a[n] : (a[n] = i),
            nL({ localVolumes: a }, t),
            tc.eachConnection((e) => e.setLocalVolume(n, i), t);
    },
    AUDIO_SET_AUDIO_MIXER_SETTINGS: function (e) {
        let { context: t, settings: n } = e;
        nL({ audioMixerSettings: n }, t), nj(n), tc.eachConnection((e) => e.setSpatialAudioEnabled(tZ), e6.x.DEFAULT);
    },
    AUDIO_SET_LOCAL_PAN: function (e) {
        let { context: t, userId: n, left: i, right: r } = e,
            { localPans: a } = nd(t);
        (a[n] = { left: i, right: r }), nL({ localPans: a }, t), tc.eachConnection((e) => e.setLocalPan(n, i, r), t);
    },
    AUDIO_SET_MODE: function (e) {
        let { context: t, mode: n, options: i } = e;
        nL({ mode: n, modeOptions: { ...i, updatedAt: Date.now() } }, t), tc.eachConnection(nc);
    },
    AUDIO_SET_INPUT_VOLUME: function (e) {
        let { volume: t } = e;
        nL({ inputVolume: nu(t) }), tc.setInputVolume(t);
    },
    AUDIO_SET_OUTPUT_VOLUME: function (e) {
        let { volume: t } = e;
        nL({ outputVolume: t }), tc.setOutputVolume(t);
    },
    AUDIO_SET_INPUT_DEVICE: function (e) {
        let { id: t } = e;
        (t = nw(tg, t)),
            (tT = performance.now()),
            nL({ inputDeviceId: t }),
            nx(t),
            tc.eachConnection(nS),
            (o = void 0),
            (d = void 0),
            ne.stop(),
            (t9 = !1);
        let { resetSilenceWarningOnDeviceChange: n } = ep.A.getConfig({
            location: "MediaEngineStore.handleSetInputDevice",
        });
        n && ((tx = !1), l.reset());
    },
    AUDIO_SET_OUTPUT_DEVICE: function (e) {
        let { id: t } = e;
        nL({ outputDeviceId: (t = nw(tS, t)) }), tc.setAudioOutputDevice(t), tc.eachConnection(nS);
    },
    AUDIO_SET_ACTIVE_INPUT_PROFILE: function (e) {
        let { inputProfile: t } = e;
        nL({ activeInputProfile: t });
        let n = nd();
        tc.eachConnection((e) => {
            nc(e), nS(e);
        }),
            tc.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
            nY();
    },
    AUDIO_SET_ECHO_CANCELLATION: function (e) {
        let t = nL({ echoCancellation: e.enabled }),
            n = eZ.A.hasEchoCancellation(t.inputDeviceId) || t.echoCancellation;
        tc.eachConnection((e) => e.setEchoCancellation(n)), nY(), nW(e.location);
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION: function (e) {
        let t;
        (t = nL({ sidechainCompression: e.enabled })), tc.setSidechainCompression(t.sidechainCompression);
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function (e) {
        let t = nL({ sidechainCompressionStrength: e.strength });
        tc.setSidechainCompressionStrength(t.sidechainCompressionStrength);
    },
    AUDIO_SET_LOOPBACK: function (e) {
        let { enabled: t, loopbackReason: n } = e;
        return t ? t3.add(n) : t3.delete(n), nY();
    },
    AUDIO_SET_NOISE_SUPPRESSION: function (e) {
        let t = nL({ noiseSuppression: e.enabled }),
            n = eZ.A.hasNoiseSuppression(t.inputDeviceId) || t.noiseSuppression;
        tc.eachConnection((e) => e.setNoiseSuppression(n)), nY(), nW(e.location);
    },
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function (e) {
        let t = nL({ automaticGainControl: e.enabled });
        tc.eachConnection((e) => nT(e, t.automaticGainControl)), nY(), nW(e.location);
    },
    AUDIO_SET_NOISE_CANCELLATION: function (e) {
        let t = nL({ noiseCancellation: e.enabled });
        tc.eachConnection((e) => nm(e, t.noiseCancellation)), nY(), nW(e.location);
    },
    AUDIO_SET_KRISP_MODEL_OVERRIDE: function (e) {
        eP.A.setKrispModelOverride(e.model), (_ = e.model), nY();
    },
    AUDIO_SET_DISPLAY_SILENCE_WARNING: function (e) {
        nL({ silenceWarning: e.enabled });
    },
    AUDIO_SET_DEBUG_LOGGING: function (e) {
        tc.setDebugLogging(e.enabled);
    },
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: function (e) {
        let { level: t } = e;
        (u = t), eP.A.setKrispSuppressionLevel(t);
    },
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: function (e) {
        (0, f.isWeb)() || ((tY = e.enabled), tc.setNoiseCancellationEnableStats?.(e.enabled));
    },
    MEDIA_ENGINE_SET_VIDEO_HOOK: function (e) {
        nL({ videoHook: e.enabled });
    },
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function (e) {
        nL({ experimentalSoundshare2: e.enabled });
    },
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: function (e) {
        let { enabled: t } = e;
        nL({ useSystemScreensharePicker: t });
    },
    AUDIO_SET_ATTENUATION: function (e) {
        let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i } = e,
            r = nL({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i });
        tc.eachConnection((e) =>
            e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers),
        );
    },
    AUDIO_SET_QOS: function (e) {
        let { enabled: t } = e;
        nL({ qos: t }), tc.eachConnection((e) => e.setQoS(t));
    },
    MEDIA_ENGINE_DEVICES: function (e) {
        let t = tg;
        if (
            ((tg = nU(e, { deviceType: e6.oh.AUDIO_INPUT, defaultName: e4.intl.string(e4.t["/QIjDA"]) })),
            !S().isEqual(tg, t))
        ) {
            let e = nd();
            nx(nw(tg, e.inputDeviceId)), tc.eachConnection(nS);
        }
        !(function (e) {
            let t = tS;
            if (
                ((tS = nU(e, { deviceType: e6.oh.AUDIO_OUTPUT, defaultName: e4.intl.string(e4.t.xlUg0v) })),
                !S().isEqual(tS, t))
            ) {
                let e = nd(),
                    n = nw(tS, e.outputDeviceId);
                tc.setAudioOutputDevice(n), tc.eachConnection(nS);
                let i = nk(t),
                    r = nk(tS);
                i !== r &&
                    tc.eachConnection((e) => {
                        e.context === e6.x.STREAM && e.setSoundshareDiscardRearChannels(r);
                    });
            }
        })(e);
        tG = e.videoDevices.length > 0;
        let n = tN;
        if (
            ((tN = nU(e, { deviceType: e6.oh.VIDEO_INPUT, defaultName: e4.intl.string(e4.t.WKWARY) })),
            tD && !S().isEqual(tN, n))
        ) {
            let e = void 0 !== tN[tv],
                t = tv === e6.dx && n[e6.dx]?.disabled,
                i = "Firefox" === C().name && "" === tv && n[tv]?.name === "Default" && !n[tv]?.disabled;
            nE(e || t || i);
        }
    },
    AUDIO_VOLUME_CHANGE: function (e) {
        let { inputVolume: t, outputVolume: n } = e;
        nL({ inputVolume: nu(t), outputVolume: n });
    },
    AUDIO_RESET: function () {
        D.w.remove(e8), location.reload();
    },
    AUDIO_INPUT_DETECTED: function (e) {
        let { inputDetected: t } = e;
        if (null == t) return !1;
        if (((tk = !0 !== tx && !t), t)) (tx = !0), (t9 = !1), ne.stop(), tF.stop();
        else if (nd().mode === eG.TBI.VOICE_ACTIVITY && tx) {
            let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = ep.A.getConfig({
                location: "MediaEngineStore.handleInputDetected",
            });
            e &&
                ne.start(ti, () => {
                    ew.default.track(eG.HAw.HARDWARE_MUTE_GUESSED, {
                        input_device_name: tg[nw(tg, nd().inputDeviceId)]?.name,
                        rtc_connection_id: eQ.A.getRTCConnectionId(),
                    }),
                        (t9 = !0),
                        i.emitChange();
                }),
                null != t &&
                    tF.start(t * eY.A.Millis.MINUTE, () => {
                        (tx = !1), l.reset();
                    });
        }
    },
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: function (e) {
        let { osVolume: t, osMuted: n } = e;
        (d = t), (o = n);
    },
    AUDIO_SET_SUBSYSTEM: function (e) {
        nZ(e.subsystem);
    },
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: function (e) {
        let t = e.bypassEnabled;
        nL({ bypassSystemInputProcessing: t }), tc.setAudioInputBypassSystemProcessing(t), ng(), nW(e.location);
    },
    MEDIA_ENGINE_SET_AUDIO_ENABLED: function (e) {
        (tA = e.enabled), e.unmute && nL({ mute: !1, deaf: !1 }), tc.eachConnection(n_);
    },
    MEDIA_ENGINE_SET_VIDEO_ENABLED: function (e) {
        let { enabled: t } = e;
        eM.A.requestPermission(e1.iL.CAMERA), nE(t);
    },
    MEDIA_ENGINE_PERMISSION: function (e) {
        let { kind: t, granted: n } = e;
        if (!n)
            switch (t) {
                case "audio":
                    (tA = !1), tc.eachConnection(n_);
                    break;
                case "video":
                    nE(!1);
            }
    },
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
        let { settings: t } = e;
        if (t?.desktopSettings != null) {
            let e = null,
                n = null,
                { sourceId: i, sound: r } = t.desktopSettings,
                s = t.context ?? e6.x.DEFAULT,
                l = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
                o = eW.A.getPidFromDesktopSource(i);
            f.isPlatformEmbedded && ({ soundshareId: e, soundshareSession: n } = nV(o, r)),
                s !== tI && (null != a && tc.setGoLiveSource(null, tI), (tI = s)),
                nE(s === e6.x.STREAM && tD, {
                    desktopSource: { id: i, sourcePid: o, soundshareId: e, soundshareSession: n },
                    quality: { resolution: l.resolution, frameRate: l.frameRate },
                });
        } else if (t?.cameraSettings != null) {
            let e = t.context ?? e6.x.DEFAULT,
                { videoDeviceGuid: n, audioDeviceGuid: i, sound: r } = t.cameraSettings,
                a = e === e6.x.STREAM && tD,
                s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
            nE(a, {
                cameraSource: { videoDeviceGuid: n, audioDeviceGuid: i, sound: r },
                quality: { resolution: s.resolution, frameRate: s.frameRate },
            });
        } else nE(tD, null);
    },
    MEDIA_ENGINE_SET_VIDEO_DEVICE: function (e) {
        let { id: t } = e;
        nL({ videoDeviceId: (t = nw(tN, t)) }), nE();
    },
    MEDIA_ENGINE_INTERACTION_REQUIRED: function (e) {
        return th !== e.required && ((th = e.required), e.required || tc.interact(), !0);
    },
    USER_SETTINGS_MODAL_INIT: nQ,
    USER_SETTINGS_MODAL_SET_SECTION: nQ,
    CERTIFIED_DEVICES_SET: function () {
        return tc.eachConnection(nS), !1;
    },
    RPC_APP_CONNECTED: function (e) {
        let { application: t } = e;
        tE.add(t.id);
    },
    RPC_APP_DISCONNECTED: function (e) {
        let { application: t } = e;
        tE.delete(t.id);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { mediaEngineState: t } = e;
        (t_ = t.settingsByContext),
            (tg = t.inputDevices),
            (tS = t.outputDevices),
            (t5 = t.appSupported),
            (tH = t.krispModuleLoaded),
            (tj = t.krispFatalError),
            (c = t.krispVersion),
            (tI = t.goLiveContext);
    },
    APP_STATE_UPDATE: function (e) {
        let { state: t } = e,
            n = H.A.isEnabled();
        if (t === eG.g6G.BACKGROUND && tD && !n) (tw = !0), nE(!1);
        else {
            if (t !== eG.g6G.ACTIVE || !tw) return !1;
            (tw = !1), nE(!0);
        }
        return !0;
    },
    SET_CHANNEL_BITRATE: function (e) {
        tc.eachConnection((t) => t.setBitRate(e.bitrate));
    },
    SET_VAD_PERMISSION: function (e) {
        let { hasPermission: t } = e,
            n = !t;
        if (n === tL) return !1;
        (tL = n), tc.eachConnection(n_);
    },
    SET_NATIVE_PERMISSION: function (e) {
        let { state: t, permissionType: n } = e,
            i = t === e1.hL.ACCEPTED;
        switch (n) {
            case e1.iL.AUDIO:
                (t0 = !0), tc.eachConnection(n_);
                break;
            case e1.iL.CAMERA:
                !i && tD && nE(!1);
                break;
            default:
                return !1;
        }
    },
    SET_CHANNEL_VIDEO_QUALITY_MODE: function (e) {
        tc.eachConnection((t) => t.applyVideoQualityMode(e.mode));
    },
    MEDIA_ENGINE_SET_AEC_DUMP: function (e) {
        let { enabled: t } = e,
            n = nL({ aecDumpEnabled: t });
        tc.setAecDump(n.aecDumpEnabled);
    },
    MEDIA_ENGINE_SET_OPENH264_ENABLED: function (e) {
        let { enabled: t } = e;
        nL({ openH264Enabled: t }), p.Ay?.setOpenH264Enabled?.(t);
    },
    MEDIA_ENGINE_RESET_SETTINGS: function (e) {
        let { overrides: t } = e;
        if (__OVERLAY__) return !1;
        (t_ = Object.values(e6.x).reduce((e, n) => {
            let i = tl();
            return (e[n] = S().merge(i, t[n])), e;
        }, {})),
            D.w.set(e8, t_),
            ny();
    },
    CHANNEL_DELETE: function () {
        if ((!tD && null == a) || null != eQ.A.getRTCConnectionId()) return !1;
        nE(!1, null);
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: function (e) {
        if (e.code === e6.CO.KRISP_CPU_OVERUSE) {
            (na.noiseCancellation = !1), (na.noiseSuppression = !0);
            let e = nd();
            return tc.eachConnection((t) => nm(t, e.noiseCancellation)), nY(), nW(), !0;
        }
        return !1;
    },
    MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR: function (e) {
        return (
            e.code === e6.CO.KRISP_VAD_CPU_OVERUSE &&
            ((na.modeOptions = { vadUseKrisp: !1 }), tc.eachConnection((e) => nc(e)), !0)
        );
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function () {
        return !!t$ && ((t$ = !1), !0);
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
        let { settings: t } = e;
        tc.applyMediaFilterSettings(t).finally(() => {
            (tz = !1), i.emitChange();
        });
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function () {
        tz = !0;
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function () {
        tz = !1;
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            local: n,
            wasSaved: i,
        } = e;
        if (t !== e3.oD.PRELOADED_USER_SETTINGS || n || null != i) return !1;
        nF(!0);
    },
    CLIPS_INIT: function (e) {
        let { sourceId: t, applicationName: n, quality: r } = e;
        if (!(0, k.T)() || null == M.A || (s?.desktopSource.id === t && s.quality === r)) return !1;
        null != s &&
            (tc.setClipsSource(null),
            (0, f.isWindows)() &&
                (null != s.desktopSource.soundshareId
                    ? P.c1(s.desktopSource.soundshareId)
                    : null != s.desktopSource.sourcePid && nd().videoHook && P.c1(s.desktopSource.sourcePid)));
        let a = eW.A.getPidFromDesktopSource(t),
            { soundshareId: l, soundshareSession: o } = nV(a, !0);
        s = { desktopSource: { id: t, sourcePid: a, soundshareId: l, soundshareSession: o }, quality: r };
        let d = ns("MediaEngineStore clips"),
            c = nd().videoHook,
            u = !c || !ei.getConfig({ location: "handleClipsInit" }).enabled,
            _ = c && eC.getConfig({ location: "handleClipsInit" }).enabled,
            { minCaptureWidth: E, minCaptureHeight: A } = eg.getConfig({ location: "handleClipsInit" });
        tc.setClipsSource({
            desktopDescription: {
                id: s.desktopSource.id,
                soundshareId: s.desktopSource.soundshareId,
                useVideoHook: c,
                useHookFramePacer: u,
                useGraphicsCapture: nN(),
                useCaptureDeviceForEncode: !1,
                useLoopback: i.getExperimentalSoundshare(),
                useQuartzCapturer: !0,
                allowScreenCaptureKit: nC(),
                videoHookStaleFrameTimeoutMs: 500,
                graphicsCaptureStaleFrameTimeoutMs: te,
                hdrCaptureMode: d,
                videoHookAllowDx12: _,
                minCaptureWidth: E,
                minCaptureHeight: A,
            },
            quality: r,
            bitratePercent: r.bitratePercent,
            applicationName: n,
            videoEncoderExperiments: i.getVideoEncoderExperiments(e6.x.STREAM, "streamer"),
        });
    },
    CLIPS_RESTART: function () {
        s = null;
    },
    CLIPS_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        !1 === t.clipsEnabled && ((s = null), tc.setClipsSource(null));
    },
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function (e) {
        t8 = e.enabled;
    },
    MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: function (e) {
        let { deviceId: t, active: n, available: i } = e;
        (tX[t] = { active: n, available: i }), ng();
    },
}));
