"use strict";
let i, r, a, s, l, o, d, c, u, _, E;
n.d(t, { yz: () => ta, Ay: () => nJ }), n(323874), n(14289), n(35956), n(321073);
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
    D = n(459838),
    y = n(506774),
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
    ed = n(118356),
    ec = n(325278);
let eu = new ed.Vy("InputWatcher");
class e_ {
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
    eA = (0, er.Ay)({
        kind: "user",
        name: "2025-10-low-latency-rate-control",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var eh = n(140175);
let eI = (0, Y.mj)({
    name: "2026-07-mkl-zen-cpu-dispatch-override",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function ef(e) {
    return eI.getConfig({ location: e });
}
(0, Y.mj)({
    name: "2026-02-mobile-volume-output-slider-removal",
    kind: "user",
    defaultConfig: { audioOutputPresent: !0, nonContextualStreamOutputPresent: !0, showTileVolumeIndicator: !1 },
    variations: { 1: { audioOutputPresent: !1, nonContextualStreamOutputPresent: !1, showTileVolumeIndicator: !0 } },
});
var ep = n(801644);
let eT = (0, Y.mj)({
        kind: "user",
        name: "2026-06-systemwide-echo-cancellation-for-people-who-refuse-to-wear-headphones",
        defaultConfig: { echoReferenceMode: "mix" },
        variations: { 1: { echoReferenceMode: "auto" } },
    }),
    em = (0, Y.mj)({
        name: "2026-06-upscale-small-captured-frames",
        kind: "user",
        defaultConfig: { minCaptureWidth: 0, minCaptureHeight: 0 },
        variations: { 1: { minCaptureWidth: 130, minCaptureHeight: 130 } },
    }),
    eg = (0, er.Ay)({
        kind: "user",
        name: "2025-10-vad-before-processing",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eS = (0, Y.mj)({
        name: "2026-03-video-capture-device-no-reuse",
        kind: "user",
        defaultConfig: { overrideDeviceReuse: !1 },
        variations: { 1: { overrideDeviceReuse: !0 } },
    }),
    eN = (0, Y.mj)({
        name: "2026-04-video-hook-dx12",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eC = (0, Y.mj)({
        name: "2026-02-wgc-dirty-regions-all",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eO = (0, Y.mj)({
        name: "2026-02-wgc-dirty-regions",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eR = (0, Y.mj)({
        name: "2026-06-wmf-cpu-encode-intel",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eL = (0, Y.mj)({
        name: "2025-12-wmf-gpu-encode",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function eD(e) {
    return eL.getConfig({ location: e });
}
let ey = (0, Y.mj)({
    name: "2026-01-wmf-gpu-encode-intel",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var ev = n(75076),
    eb = n(91777),
    eM = n(559633),
    eP = n(205106),
    eU = n(174459),
    ew = n(652215);
let eG = new ed.Vy("AudioEffects");
async function ex(e, t, n) {
    if (!(0, eo.uF)()) return Promise.reject(Error("Audio effects querying not supported on non-Windows platforms"));
    try {
        let i = await n.getDeviceAudioEffects(e);
        return (
            b.h.dispatch({ type: "MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS", deviceId: t, ...i }),
            eU.default.track(ew.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, {
                succeeded: !0,
                active_effects: i.active,
                available_effects: i.available,
            }),
            i
        );
    } catch (e) {
        eG.error("Failed to probe audio effects for device", e),
            eU.default.track(ew.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, { succeeded: !1 });
    }
}
var ek = n(967347),
    eF = n(617617),
    eV = n(125325),
    eB = n(499156),
    eH = n(738566),
    ej = n(353835),
    eW = n(927813),
    eY = n(38405),
    eK = n(350535),
    e$ = n(280450),
    ez = n(131319),
    eq = n(347481),
    eZ = n(734057),
    eX = n(763827),
    eQ = n(287809),
    eJ = n(117549),
    e0 = n(765682);
let e1 = {
    enabled: !0,
    spatialBlend: 1,
    reflectionsEnabled: !1,
    roomSize: 25,
    mode: "arc",
    spread: 2,
    arcAngle: 20,
    gridColumns: 3,
    gridSpacing: 1,
    buckets: 10,
    listenerHeight: 0.15,
    distance: 5,
};
var e2 = n(355097),
    e3 = n(621380),
    e4 = n(731854),
    e5 = n(375708);
let e6 = new I.A("MediaEngineStore"),
    e7 = "MediaEngineStore",
    e8 = { left: 1, right: 1 },
    e9 = 5 * eW.A.Millis.SECOND,
    te = 2 * eW.A.Millis.SECOND,
    tt = 30 * eW.A.Millis.SECOND,
    tn = +eW.A.Millis.MINUTE,
    ti = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2",
    tr = 0;
var ta =
    (((A = {}).WEBCAM = "WEBCAM"),
    (A.INTEGRATED = "INTEGRATED"),
    (A.BLUETOOTH = "BLUETOOTH"),
    (A.AIRPLAY = "AIRPLAY"),
    (A.HEADSET = "HEADSET"),
    A);
function ts() {
    return {
        mode: ew.TBI.VOICE_ACTIVITY,
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
        audioMixerSettings: { ...e1 },
        audioMixerSettingsVersion: 0,
        localPans: {},
        inputVolume: e4.Hz,
        outputVolume: e4.Hz,
        inputDeviceId: e4.dx,
        outputDeviceId: e4.dx,
        videoDeviceId: e4.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: td.supports(e4.O5.VIDEO_HOOK),
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
let tl = {
        [e3.m.CUSTOM]: {},
        [e3.m.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [e3.m.STUDIO]: {
            mode: ew.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    to = { modeOptions: { vadUseKrisp: !1 }, noiseCancellation: !1, noiseSuppression: !0 },
    td = (0, D.hB)((0, D.WI)());
e6.enableNativeLogger(!0);
let tc = {},
    tu = new Set([e4.x.DEFAULT]),
    t_ = td.supports(e4.O5.AUTO_ENABLE),
    tE = !1,
    tA = e4.x.STREAM,
    th = 0,
    tI = !1,
    tf = performance.now(),
    tp = null,
    tT = { [e4.dx]: nD("No Input Devices") },
    tm = { [e4.dx]: nD("No Output Devices") },
    tg = { [e4.dx]: nD("No Video Devices") },
    tS = new v.Ep(),
    tN = !1,
    tC = !1,
    tO = !1,
    tR = !1,
    tL = !1,
    tD = e4.qe,
    ty = e4.qe,
    tv = !1,
    tb = !1,
    tM = new v.Ep(),
    tP = !1,
    tU = !1,
    tw = !1,
    tG = !1,
    tx = new v.Ep(),
    tk = !1,
    tF = !1,
    tV = !1,
    tB = !1,
    tH = [],
    tj = !1,
    tW = null,
    tY = !1,
    tK = !1,
    t$ = !1,
    tz = !1,
    tq = {},
    tZ = null,
    tX = null,
    tQ = !1;
eb.A.hasPermission(e0.iL.AUDIO, { showAuthorizationError: !1 }),
    eb.A.hasPermission(e0.iL.CAMERA, { showAuthorizationError: !1 });
let tJ = new Set(),
    t0 = !1,
    t1 = new Set(),
    t2 = {},
    t3 = null,
    t4 = null,
    t5 = null,
    t6 = !0,
    t7 = !1,
    t8 = new v.Ep(),
    t9 = !1,
    ne = !1,
    nt = !1,
    nn = !1,
    ni = {};
function nr(e) {
    return (function (e) {
        let { location: t } = e;
        return es.getConfig({ location: t });
    })({ location: e }).hdrCaptureMode;
}
async function na() {
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
function ns() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e4.x.DEFAULT,
        t = tc[e];
    return null == t && ((t = ts()), (tc[e] = t)), t;
}
function nl() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e4.x.DEFAULT,
        t = ns(e),
        n = tl[t.activeInputProfile ?? e3.m.CUSTOM],
        i = nY() ? ni : to,
        r = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}), ...(i.modeOptions ?? {}) };
    if (
        (null == r.vadDuringPreProcess &&
            (r.vadDuringPreProcess = (function (e) {
                let { location: t, disable: n = !1 } = e;
                return n ? eg.definition.defaultConfig : eg.getConfig({ location: t });
            })({ location: "getSettings" }).enabled),
        (null == r.vadKrispActivationThreshold && !0 === n.automaticGainControl) || !0 === t.automaticGainControl)
    ) {
        let e = z({ location: "getSettings" });
        null != e.vadKrispActivationThreshold && (r.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return { ...t, ...n, ...i, modeOptions: r };
}
function no(e) {
    let t = nl(e.context),
        n = t.mode;
    e.context === e4.x.DEFAULT && (0, eh.N)(!1, !1);
    let { showPTTSpeakingIndicator: i } = eB.A.getConfig({ location: "setInputMode" }),
        r = i && n === ew.TBI.PUSH_TO_TALK;
    e.setInputMode(n, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: !!r || t.modeOptions.autoThreshold,
        vadUseKrisp: (!!r || t.modeOptions.vadUseKrisp) && nY(),
        vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? 0.5,
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        vadDuringPreProcess: t.modeOptions.vadDuringPreProcess ?? !1,
        pttReleaseDelay: Math.round(t.modeOptions.delay),
    });
}
function nd(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e4.Hz;
    return S().clamp(e, 0, t);
}
function nc(e) {
    let t = nl(e.context),
        n = !t_ || t.mute || t.deaf;
    switch (e.context) {
        case e4.x.DEFAULT:
            n = n || tN || tC || tO || !eb.A.didHavePermission(e0.iL.AUDIO);
            break;
        case e4.x.STREAM:
            n = !0;
            break;
        default:
            e.context;
    }
    e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === e4.x.DEFAULT && U.A.updateNativeMute();
}
function nu() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tL,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        n = a;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, f.isWindows)()
                ? P.c1(n.desktopSource.soundshareId)
                : null != n.desktopSource.sourcePid && nl().videoHook && P.c1(n.desktopSource.sourcePid),
            td.setGoLiveSource(null, tA)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            td.setGoLiveSource(null, tA),
        tL || e)
    ) {
        let t = nl().videoDeviceId;
        tL && t === e4.dx && ty === e4.dx && tD !== e4.qe ? (t = tD) : (ty = t),
            (tD = (tL = e) ? nP(tg, t) : e4.qe),
            td.setVideoInputDevice(tD);
    }
    if (((a = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = nr("MediaEngineStore go live"),
                r = nl().videoHook,
                a = ng(),
                s = a ? ((0, f.isWindows)() && R().satisfies(M.A?.os.release, ec.fG) ? ec.zl : ec.eg) : 0,
                l = !1;
            (0, f.isWindows)() &&
                s >= ec.zl &&
                (l =
                    !0 === t4
                        ? eO.getConfig({ location: "updateVideo" }).enabled
                        : eC.getConfig({ location: "updateVideo" }).enabled);
            let o = !r || !ei.getConfig({ location: "updateVideo" }).enabled,
                d = r && eN.getConfig({ location: "updateVideo" }).enabled,
                { minCaptureWidth: c, minCaptureHeight: u } = em.getConfig({ location: "updateVideo" });
            td.setGoLiveSource(
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
                        allowScreenCaptureKit: nS(),
                        videoHookStaleFrameTimeoutMs: 500,
                        graphicsCaptureStaleFrameTimeoutMs: e9,
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
                tA,
            );
        }
        null != t.cameraSource &&
            td.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: t.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: !1 === t.cameraSource.sound ? "" : t.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                tA,
            );
    }
}
function n_(e) {
    switch (e) {
        case e4.CO.KRISP_CPU_OVERUSE:
            return V.B6.KrispCpuOveruse;
        case e4.CO.KRISP_FAILED:
            return V.B6.KrispFailed;
        case e4.CO.KRISP_VAD_CPU_OVERUSE:
            return V.B6.KrispVadCpuOveruse;
        case e4.CO.KRISP_INIT_ERROR:
            return V.B6.KrispInitError;
        case e4.CO.KRISP_INIT_ERROR_NATIVE:
            return V.B6.KrispInitErrorNative;
        case e4.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED:
            return V.B6.KrispInitErrorSse4NotSupported;
        case e4.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED:
            return V.B6.KrispInitErrorAvx2NotSupported;
        case e4.CO.KRISP_INIT_ERROR_UNSIGNED:
            return V.B6.KrispInitErrorUnsigned;
        case e4.CO.KRISP_INIT_ERROR_GLOBAL_INIT:
            return V.B6.KrispInitErrorGlobalInit;
        case e4.CO.KRISP_INIT_ERROR_WEIGHT_8K:
            return V.B6.KrispInitErrorWeight8k;
        case e4.CO.KRISP_INIT_ERROR_WEIGHT_16K:
            return V.B6.KrispInitErrorWeight16k;
        case e4.CO.KRISP_INIT_ERROR_WEIGHT_32K:
            return V.B6.KrispInitErrorWeight32k;
        case e4.CO.KRISP_INIT_ERROR_WEIGHT_VAD:
            return V.B6.KrispInitErrorWeightVad;
        default:
            return;
    }
}
let nE = new Set([
    e4.CO.KRISP_INIT_ERROR,
    e4.CO.KRISP_INIT_ERROR_NATIVE,
    e4.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED,
    e4.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED,
    e4.CO.KRISP_INIT_ERROR_UNSIGNED,
    e4.CO.KRISP_INIT_ERROR_GLOBAL_INIT,
    e4.CO.KRISP_INIT_ERROR_WEIGHT_8K,
    e4.CO.KRISP_INIT_ERROR_WEIGHT_16K,
    e4.CO.KRISP_INIT_ERROR_WEIGHT_32K,
    e4.CO.KRISP_INIT_ERROR_WEIGHT_VAD,
]);
function nA(e) {
    if (
        (e6.warn(`Voice processing error: ${e}`),
        (0, V.QW)({ type: V.iy.NOISE_CANCELLER_ERROR, underlyingError: n_(e) }),
        eU.default.track(ew.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
        nE.has(e))
    ) {
        tB = !0;
        return;
    }
    e === e4.CO.KRISP_VAD_CPU_OVERUSE
        ? b.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e })
        : ((tY = !0), b.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e }));
}
function nh(e, t) {
    let n = t === e4.$C.LIVE;
    e6.warn(`Video filter error: ${e} (${n ? "live" : "preview"})`),
        n &&
            (0, V.QW)({
                type: V.iy.VIDEO_BACKGROUND_UNAVAILABLE,
                underlyingError: (function (e) {
                    switch (e) {
                        case e4.kv.UNSUPPORTED:
                            return V.B6.VideoBackgroundUnsupported;
                        case e4.kv.INIT_FAILED:
                            return V.B6.VideoBackgroundInitFailed;
                        default:
                            return;
                    }
                })(e),
            }),
        b.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_FILTER_ERROR", code: e, target: n ? "live" : "preview" });
}
function nI(e) {
    let t = z({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function nf(e, t) {
    e.setAutomaticGainControl(nI(t));
}
function np(e, t) {
    let n = (0, eP.A)(t, i.getSystemMicrophoneMode());
    n !== t && e6.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: r } = z({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(r);
}
function nT() {
    let e = nl(),
        t = e.inputDeviceId,
        n = eq.A.hasEchoCancellation(t) || e.echoCancellation,
        r = eq.A.hasNoiseSuppression(t) || e.noiseSuppression,
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
                krispEnabled: (0, eP.A)(e.noiseCancellation, i.getSystemMicrophoneMode()),
                noiseSuppressionEnabled: r,
                echoCancellationEnabled: n,
            },
        );
    td.setVoiceSampleRateCap(a), td.setVoiceChannelCountCap(s);
}
function nm(e) {
    let t = nl(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eq.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eq.A.hasNoiseSuppression(n) || t.noiseSuppression),
        nf(e, eq.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        np(e, t.noiseCancellation),
        e.setSpatialAudioEnabled(nV(t.audioMixerSettings)),
        nT(),
        (0, f.isWindows)() && R().satisfies(M.A?.os.release, ">=10.0.15063") && e.context === e4.x.DEFAULT)
    ) {
        let t = (function (e) {
                let { location: t } = e;
                return eT.getConfig({ location: t });
            })({ location: "updateConnectionVoiceProcessing" }),
            n = nb(tT[i.getInputDeviceId()]) || nb(tm[i.getOutputDeviceId()]);
        e.setEchoReferenceMode(n ? "mix" : t.echoReferenceMode);
    }
    if ((0, f.isWeb)()) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function ng() {
    return (0, f.isWindows)() && R().satisfies(M.A?.os.release, ec.yg);
}
function nS() {
    return (0, f.isMac)() && td.supports(e4.O5.SCREEN_CAPTURE_KIT) && R().satisfies(M.A?.os.release, ec.e);
}
function nN() {
    return (
        (0, f.isWindows)() &&
        td.supports(e4.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        td.supports(e4.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nC() {
    return td.supports(e4.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function nO(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e4.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = ns(t);
    return Object.assign(i, e), !__OVERLAY__ && n && y.w.set(e7, tc), i;
}
function nR() {
    let e = nl();
    nw(e.inputDeviceId),
        td.setAudioOutputDevice(e.outputDeviceId),
        nu(),
        td.setInputVolume(e.inputVolume),
        td.setOutputVolume(e.outputVolume),
        td.setAecDump(e.aecDumpEnabled),
        td.setSidechainCompression(e.sidechainCompression),
        td.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        td.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        (0, f.isLinux)() && p.Ay?.setOpenH264Enabled?.(e.openH264Enabled),
        nB(e.audioMixerSettings);
}
function nL() {
    t_ || td.enable().then(() => b.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nD(e) {
    return { id: e4.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
}
function ny(e, t) {
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
let nv = /^HDAUDIO\\(?:SUB)?FUNC_\d+&VEN_(?:8086|1002|10DE)/;
function nb(e) {
    return e?.windowsDeviceService === "voicemodvad" || e?.name?.toLowerCase().includes("voicemod") === !0;
}
function nM(e, t) {
    let { deviceType: n, defaultName: i } = t,
        r = e[{ audioinput: "inputDevices", audiooutput: "outputDevices", videoinput: "videoDevices" }[n]];
    if (0 === r.length) {
        let e = nD(i);
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
                    case ny(e, r):
                        return "WEBCAM";
                    case ["builtin", "displayport", "hdmi"].includes(e.macosTransportType ?? ""):
                    case null != e.hardwareId && nv.test(e.hardwareId):
                        return "INTEGRATED";
                    case S()(e.hardwareId).startsWith("BTHENUM"):
                    case ["bluetooth", "bluetoothle"].includes(e.macosTransportType ?? ""):
                        return "BLUETOOTH";
                    case ["airplay", "continuitycapturewireless"].includes(e.macosTransportType ?? ""):
                        return "AIRPLAY";
                    case "audioinput" === e.type && ny(e, i):
                    case "audiooutput" === e.type && ny(e, n):
                        return "HEADSET";
                }
            })(t, e),
            windowsDeviceService: t.windowsDeviceService,
        }))
        .keyBy("id")
        .value();
}
function nP(e, t) {
    let n = e[t] ?? e[e4.dx] ?? S()(e).values().first();
    return null != n ? n.id : t;
}
function nU(e) {
    if (!(0, f.isWindows)() || !X.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects) return;
    let t = tT[e];
    t?.guid != null && ex(t.guid, e, td);
}
function nw(e) {
    td.setAudioInputDevice(e), nU(e);
}
function nG(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nx() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = eF.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let i = n === e2.W.USER ? e4.x.DEFAULT : e4.x.STREAM,
            r = i === e4.x.STREAM ? e4.Cn : e4.Hz,
            a = t[n] ?? {},
            { localMutes: s, localVolumes: l } = nl(i);
        for (let [e, t] of Object.entries(a))
            null == (0, eV.tM)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== r ? (l[e] = t.volume) : delete l[e],
                td.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (e)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == a[e] &&
                    (delete s[e],
                    delete l[e],
                    td.eachConnection((t) => {
                        t.setLocalVolume(e, r), t.setLocalMute(e, !1);
                    }, i));
        nO({ localMutes: s, localVolumes: l }, i);
    }
}
function nk(e, t) {
    if (t) {
        let { soundshareId: t, soundshareSession: a } = (function (e) {
            if (null == i)
                return (
                    e6.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
                    { soundshareId: null, soundshareSession: "" }
                );
            {
                let t = i.getExperimentalSoundshare() ? e : ej.A.getAudioPid(e),
                    n = "";
                return null != t && (n = ej.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n };
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
    return null != e && nl().videoHook && P.GH(e), { soundshareId: null, soundshareSession: null };
}
function nF() {
    let e = e4.x.DEFAULT,
        { videoToggleStateMap: t } = nl(e);
    for (let [e, n] of Object.entries(t)) n === ew.bb8.AUTO_PROBING && delete t[e];
    nO({ videoToggleStateMap: t }, e, !1);
}
function nV(e) {
    let { enabled: t } = eH.A.getConfig({ location: "MediaEngineStore" });
    return !0 === e.enabled && t && td.supports(e4.O5.SPATIAL_AUDIO);
}
function nB(e) {
    (tz = nV(e)), td.setAudioMixerOptions({ ...e, enabled: tz });
}
function nH(e) {
    let t = nl(),
        n = td.getAudioSubsystem(),
        r = td.getAudioLayer(),
        a = nP(tT, t.inputDeviceId),
        s = tT[a]?.name,
        l = (0, eP.A)(t.noiseCancellation, i.getSystemMicrophoneMode());
    eU.default.track(ew.HAw.VOICE_PROCESSING, {
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
function nj() {
    let e = nl(),
        t = t1.size > 0,
        n = e.inputDeviceId,
        i = eq.A.hasEchoCancellation(n) || e.echoCancellation,
        r = eq.A.hasNoiseSuppression(n) || e.noiseSuppression,
        a = nI(eq.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation;
    td.setLoopback(t, {
        echoCancellation: i,
        echoCancellationPreEcho: !t,
        noiseSuppression: r,
        automaticGainControlConfig: a,
        noiseCancellation: s,
    }),
        nT();
}
async function nW() {
    if (!td.supports(e4.O5.VAAPI) || window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let e = await window.DiscordNative.processUtils.getSystemInfo();
    (e.electronGPUInfo?.gpuDevice ?? []).some((e) => 4098 === e.vendorId) &&
        ((nt = !0), (ne = td.supports(e4.O5.GAMESCOPE_CAPTURE)));
}
function nY() {
    return (tV || !1) && !tB;
}
async function nK() {
    try {
        await p.Ay.ensureModule("discord_krisp");
        let e = p.Ay.requireModule("discord_krisp");
        (tV = !0),
            (c = e.getSdkVersion?.()),
            (u = e.getSuppressionLevel?.() ?? 100),
            (0, f.isWindows)() && e.setMklZenOverrideEnabled?.(ef("setupKrispNativeModule").enabled),
            e.getNcModels?.().then((e) => {
                (tH = e), i.emitChange();
            }),
            i.emitChange(),
            await p.Ay.ensureModule("discord_voice");
        let t = p.Ay.requireModule("discord_voice");
        t.setupKrispPath?.();
    } catch (t) {
        e6.warn(`Failed to load Krisp module: ${t.message}`), eY.A.captureException(t);
        let e = e4.CO.KRISP_INIT_ERROR;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? e4.CO.KRISP_INIT_ERROR : n;
        }
        (0, V.QW)({ type: V.iy.NOISE_CANCELLER_ERROR, underlyingError: n_(e) }),
            eU.default.track(ew.HAw.VOICE_PROCESSING, { noise_canceller_error: e });
    } finally {
        tF = !1;
    }
}
async function n$() {
    try {
        let e,
            t = "",
            n = !1,
            i = URL.parse(ti);
        if (null === i) return void e6.log("OpenH264 URL ", i, " is invalid");
        let r = i.pathname.split("/"),
            a = r[r.length - 1].replace(".bz2", "");
        try {
            let t = await p.Ay.downloadOpenH264(
                ti,
                a,
                "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f",
                (e) => {
                    e6.log("OpenH264 download status", e);
                },
            );
            e6.log("OpenH264 is ready", t), (n = t.fetchedFromNetwork), (e = !0);
        } catch (n) {
            e6.error("OpenH264 download failed", n), (t = n.message), (e = !1);
        }
        if (
            (eU.default.track(ew.HAw.VIDEO_OPENH264_DOWNLOADED, {
                success: e,
                fetched_from_network: n,
                error_message: t,
            }),
            e)
        ) {
            let e = await p.Ay.cleanupUnusedOpenH264Files([a]);
            e6.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        e6.error("OpenH264 download failed", e);
    }
}
function nz(e) {
    e === e4.rB.AUTOMATIC
        ? (nO({ automaticAudioSubsystem: !0 }), nq())
        : (nO({ automaticAudioSubsystem: !1 }), td.setAudioSubsystem(e));
}
function nq() {
    td.queueAudioSubsystem(e4.rB.EXPERIMENTAL);
}
function nZ(e) {
    let { section: t } = e;
    return t === ew.nc_.VOICE && nL(), !1;
}
class nX extends L.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        let e;
        if (
            ((l ??= new e_(td, this)),
            tS.start(tt, () => {
                e6.error("Device enumeration timed out"), eU.default.track(ew.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
            }),
            td.on(D.bg.Connection, (e) => {
                let t;
                nj(), no(e), nc(e), nm(e);
                let n = nl();
                e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers),
                    e.setQoS(n.qos),
                    (0, f.isWindows)()
                        ? (e.setExperimentFlag(e4.fd.H265_HARDWARE_ONLY, !0),
                          (null != tX
                              ? tX
                              : "u" > typeof window
                                ? (tX = na().then((e) => ((tZ = e), e)))
                                : Promise.resolve(!1)
                          ).then((t) => {
                              e.setExperimentFlag(e4.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                          }))
                        : (0, f.isMac)() && e.setExperimentFlag(e4.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                    (0, f.isLinux)() && n.openH264Enabled && e.setExperimentFlag(e4.fd.USE_LIBOPENH264_DECODER, !0),
                    (function (e) {
                        let { location: t, disable: n = !1 } = e;
                        return n ? eA.definition.defaultConfig : eA.getConfig({ location: t });
                    })({ location: "setupMediaEngine" }).enabled &&
                        e.setExperimentFlag(e4.fd.LOW_LATENCY_RATE_CONTROL, !0),
                    e.setExperimentFlag(e4.fd.RESET_DECODER_ON_ERRORS, !0),
                    e.setExperimentFlag(e4.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
                let { swallowVolumeOnlySpeakingEvents: r } = w.A.getConfig({ location: "MediaEngineStore" });
                if (
                    (r && e.setExperimentFlag(e4.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === e4.x.STREAM)
                ) {
                    let t = nG(tm);
                    e.setSoundshareDiscardRearChannels(t);
                }
                if ((0, f.isWindows)())
                    e.setExperimentFlag(e4.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(e4.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e4.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                else if ((0, f.isMac)())
                    e.setExperimentFlag(e4.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e4.fd.SIGNAL_AV1_HARDWARE_DECODE, !0),
                        e.setExperimentFlag(
                            e4.fd.H265_DISABLE_ENCODE,
                            !(
                                window?.DiscordNative?.os.arch === "arm64" &&
                                R().satisfies(window?.DiscordNative?.os.release, e4.Dk)
                            ),
                        );
                else if ((0, f.isLinux)()) {
                    let { enabled: t } = q.getConfig({ location: "MediaEngineStore" });
                    t && e.setExperimentFlag(e4.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(e4.fd.SIGNAL_AV1_DECODE, !0);
                } else
                    ((0, f.isIOS)() || (0, f.isAndroid)()) &&
                        (e.setExperimentFlag(e4.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e4.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
                if ((0, f.isWeb)()) {
                    let { enabled: t } = et.getConfig({ location: "MediaEngineStore" });
                    e.setExperimentFlag(e4.fd.BROWSER_HEVC, t);
                }
                for (let r of ((0, f.isWindows)() &&
                    t3?.startsWith("AMD") &&
                    eD("MediaEngineStore").enabled &&
                    e.setExperimentFlag(e4.fd.WMF_GPU_ENCODE, !0),
                (0, f.isWindows)() &&
                    t3?.startsWith("Intel") &&
                    !0 === t4 &&
                    1 === t5 &&
                    ey.getConfig({ location: "MediaEngineStore" }).enabled &&
                    (e.setExperimentFlag(e4.fd.WMF_GPU_ENCODE, !0), e.setExperimentFlag(e4.fd.INTEL_GPU_DISABLE, !0)),
                (0, f.isWindows)() &&
                    t3?.startsWith("Intel") &&
                    !0 === t4 &&
                    1 === t5 &&
                    eR.getConfig({ location: "MediaEngineStore" }).enabled &&
                    e.setExperimentFlag(e4.fd.INTEL_GPU_DISABLE, !0),
                (0, f.isWindows)() &&
                    t3?.startsWith("Qualcomm") &&
                    eD("MediaEngineStore").enabled &&
                    e.setExperimentFlag(e4.fd.WMF_GPU_ENCODE, !0),
                td.setHasFullbandPerformance(null === (t = (0, F.A)()) || t >= 31),
                e.setRemoteAudioHistory(1e3),
                (0, x.A)(i) && e.setClipsKeyFrameInterval(e4.X1),
                (n = nl(e.context)),
                e.setPostponeDecodeLevel(100),
                Object.keys(n.localMutes)))
                    r !== e$.default.getId() && e.setLocalMute(r, n.localMutes[r]);
                for (let t of Object.keys(n.localVolumes))
                    t !== e$.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
                for (let t of Object.keys(n.localPans)) {
                    let i = n.localPans[t];
                    e.setLocalPan(t, i.left, i.right);
                }
                for (let t of Object.keys(n.disabledLocalVideos)) e.setLocalVideoDisabled(t, n.disabledLocalVideos[t]);
                e.on(D.yq.Speaking, (t, n, i, r) => {
                    b.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: r });
                }),
                    e.context === e4.x.DEFAULT &&
                        ((tb = !1),
                        e.on(D.yq.SpeakingWhileMuted, () => {
                            let e = !tb;
                            (tb = !0),
                                e && i.emitChange(),
                                tM.start(te, () => {
                                    (tb = !1), i.emitChange();
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
                            eU.default.track(ew.HAw.VIDEOHOOK_INITIALIZED, {
                                backend: e,
                                format: t,
                                framebuffer_format: n,
                                sample_count: i,
                                success: r,
                                reinitialization: s,
                                ...(0, W.A)(a?.desktopSource),
                            });
                    }),
                    e.on(D.yq.NoiseCancellationError, nA),
                    e.on(D.yq.VoiceActivityDetectorError, nA),
                    e.on(D.yq.SdpError, (e, t, n, i) => {
                        eU.default.track(ew.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: i });
                    }),
                    e.on(D.yq.VideoState, (t) => {
                        b.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                    }),
                    e.setBitRate(ez.A.bitrate),
                    e.applyVideoQualityMode(eJ.A.mode),
                    (0, f.isWindows)() &&
                        td.supports(e4.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                        td.setAsyncVideoInputDeviceInit(!0);
            }),
            td.on(D.bg.DeviceChange, (e, t, n) => {
                tS.stop(),
                    b.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
            }),
            td.on(D.bg.VolumeChange, (e, t) => {
                b.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
            }),
            td.on(D.bg.DesktopSourceEnd, (e, t) => {
                b.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
            }),
            td.on(D.bg.AudioPermission, (e) => {
                (tQ = !0), b.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
            }),
            td.on(D.bg.VideoPermission, (e) => {
                b.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
            }),
            td.on(D.bg.WatchdogTimeout, async () => {
                let e;
                if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                    try {
                        await ej.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                    } catch (t) {
                        "number" == typeof t.status && (e = t.status);
                    }
                e6.warn(`Watchdog timeout, report submission status: ${e ?? 200}`);
                let t = null != M.A.processUtils.setCrashReason;
                try {
                    await eU.default.track(
                        ew.HAw.VOICE_WATCHDOG_TIMEOUT,
                        { minidump_submission_error: e, will_restart: t },
                        { flush: !0 },
                    );
                } catch (e) {
                    e6.error("Failed to flush voice watchdog timeout analytics event", e);
                }
                t &&
                    (e6.info("Relaunching app due to voice watchdog timeout"),
                    await M.A.processUtils.setCrashReason("voice-watchdog-timeout"),
                    y.w.set("discord_watchdog_restart_timestamp", Date.now().toString()),
                    M.A.app.relaunch());
            }),
            td.on(D.bg.VideoInputInitialized, (e) => {
                eU.default.track(ew.HAw.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired
                        ? null
                        : Math.round(e.timeToFirstFrame * eW.A.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy,
                    media_session_id: eX.A.getMediaSessionId(),
                    rtc_connection_id: eX.A.getRTCConnectionId(),
                });
            }),
            td.on(D.bg.AudioInputInitialized, (e) => {
                eU.default.track(ew.HAw.AUDIO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_initialized_ms: Math.round(e.timeToInitialized * eW.A.Millis.SECOND),
                    rtc_connection_id: eX.A.getRTCConnectionId(),
                });
            }),
            td.on(D.bg.ClipsRecordingRestartNeeded, () => {
                b.h.dispatch({ type: "CLIPS_RESTART" });
            }),
            td.on(D.bg.ClipsInitFailure, (e, t) => {
                let n = th < 3;
                (th += 1),
                    b.h.wait(() => {
                        b.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t }),
                            n
                                ? b.h.dispatch({ type: "CLIPS_RESTART" })
                                : e6.warn(
                                      `Clips init failure budget exhausted (${th} consecutive unhealthy attempts); skipping auto-restart. A settings flip / game change / app restart will retry.`,
                                  );
                    });
            }),
            td.on(D.bg.ClipsRecordingHealthy, () => {
                0 !== th && (e6.info(`Clips bridge reported healthy; resetting restart budget (was ${th}).`), (th = 0));
            }),
            td.on(D.bg.ClipsRecordingReadyChanged, (e) => {
                tI !== e && (e6.info(`Clips recorder ready changed: ${e}`), (tI = e));
            }),
            td.on(D.bg.ClipsBridgeIdleShutdown, () => {
                e6.info("Clips bridge idle shutdown");
            }),
            td.on(D.bg.ClipsRecordingEnded, (e, t) => {
                s?.desktopSource?.id === e &&
                    (null != t && a?.desktopSource?.soundshareId !== t && P.c1(t), (s = null));
            }),
            td.on(D.bg.NativeScreenSharePickerUpdate, (e, t) => {
                b.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
            }),
            td.on(D.bg.NativeScreenSharePickerCancel, (e) => {
                b.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
            }),
            td.on(D.bg.NativeScreenSharePickerError, (e) => {
                b.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
            }),
            td.on(D.bg.AudioDeviceModuleError, (e, t, n) => {
                eU.default.track(ew.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
            }),
            td.on(D.bg.VideoCodecError, (e) => {
                let t = "encode" === e.mode ? V.iy.VIDEO_ENCODE_ERROR : V.iy.VIDEO_DECODE_ERROR,
                    n = { videoCodec: e.codecStandard, errorMessage: e.message };
                (0, V.QW)(
                    t === V.iy.VIDEO_ENCODE_ERROR
                        ? { type: t, ...n, videoEncoder: e.implName }
                        : { type: t, ...n, videoDecoder: e.implName },
                );
            }),
            td.on(D.bg.ConnectionStats, (e) => {
                b.h.dispatch({
                    type: "MEDIA_ENGINE_CONNECTION_STATS",
                    connectionStats: e.map((e) => {
                        let { stats: t, connection: n } = e;
                        return {
                            stats: t,
                            mediaEngineConnectionId: n.mediaEngineConnectionId,
                            version: tr++,
                            context: n.context,
                        };
                    }),
                });
            }),
            td.on(D.bg.VoiceProcessingError, nA),
            td.on(D.bg.VideoFilterError, nh),
            td.on(D.bg.VoiceQueueMetrics, (e) => {
                let t = nQ(e);
                null !== t && eU.default.track(ew.HAw.VOICE_QUEUE_METRICS, t);
            }),
            td.setOnVideoContainerResized((e, t, n) => {
                b.h.wait(() =>
                    b.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
                );
            }),
            nW(),
            l.reset(),
            (0, ek.w)().then((e) => {
                null != e && ((t3 = e.gpu_brand), (t4 = e.has_intel_hybrid_igpu), (t5 = e.gpu_count));
            }),
            td.on(D.bg.SystemMicrophoneModeChange, (e) => {
                (E = e), td.eachConnection(nm), i.emitChange();
            }),
            null != (e = y.w.get("audio")) && (y.w.set(e7, { [e4.x.DEFAULT]: e }), y.w.remove("audio")),
            (tc = y.w.get(e7) ?? {}),
            S().each(tc, (e) => {
                S().defaultsDeep(e, ts()),
                    null != e.modeOptions &&
                        "string" == typeof e.modeOptions.shortcut &&
                        (e.modeOptions.shortcut = (0, eK.OH)(e.modeOptions.shortcut)),
                    null != e.modeOptions &&
                        4 !== e.vadUseKrispSettingVersion &&
                        ((e.vadUseKrispSettingVersion = 4), (e.modeOptions.vadUseKrisp = !0)),
                    e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                    e.vadThrehsoldMigrated ||
                        ((e.vadThrehsoldMigrated = !0),
                        e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = -60)),
                    td.supports(e4.O5.SIDECHAIN_COMPRESSION) &&
                        e.sidechainCompressionSettingVersion < 1 &&
                        ((e.sidechainCompressionSettingVersion = 1), (e.sidechainCompression = !0)),
                    e.audioMixerSettingsVersion < 3 &&
                        ((e.audioMixerSettingsVersion = 3), (e.audioMixerSettings = { ...e1 })),
                    (0, f.isWeb)()
                        ? 1 !== e.ncUseKrispjsSettingVersion &&
                          ((e.ncUseKrispjsSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                        : 1 !== e.ncUseKrispSettingVersion &&
                          ((e.ncUseKrispSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
            }),
            nR(),
            ((0, f.isWindows)() || (0, f.isLinux)() || (0, f.isMac)()) && !__OVERLAY__ && !tF && !tV
                ? ((tF = !0), nK())
                : (0, f.isWeb)() && td.supports(e4.O5.NOISE_CANCELLATION)
                  ? ((tV = !0), i.emitChange())
                  : (0, f.isWeb)() && nO({ noiseCancellation: !1 }),
            (0, f.isLinux)() && n$(),
            nF(),
            (0, f.isDesktop)() && f.isPlatformEmbedded && !nn)
        ) {
            async function t() {
                let e = await new Promise((e) => {
                    p.Ay.pollQueueMetrics((t) => {
                        e(t);
                    });
                });
                e.periodMs = e4.tl;
                let n = nQ(e);
                null !== n && eU.default.track(ew.HAw.VOICE_QUEUE_METRICS, n), setTimeout(t, e4.tl);
            }
            (nn = !0), setTimeout(t, e4.tl);
        }
        (0, f.isWindows)() &&
            f.isPlatformEmbedded &&
            null === tp &&
            td
                .getCodecSurvey()
                .then((e) => {
                    try {
                        let t = JSON.parse(e);
                        if (null == t || null == t.available_video_decoders)
                            throw Error("decoder survey is not available");
                        tp = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                    } catch (e) {
                        e6.error("Failed to parse codec survey", e), (tp = !1);
                    }
                })
                .catch((e) => {
                    e6.error("Failed to get codec survey", e), (tp = !1);
                })
                .finally(() => {
                    b.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
                }),
            (t2 = {
                [e4.O5.VIDEO]: td.supports(e4.O5.VIDEO),
                [e4.O5.DESKTOP_CAPTURE]: td.supports(e4.O5.DESKTOP_CAPTURE),
                [e4.O5.HYBRID_VIDEO]: td.supports(e4.O5.HYBRID_VIDEO),
            }),
            this.waitFor(e$.default, ez.A, eq.A, eZ.A, G.Ay, B.A, eX.A, j.Ay, eF.A, eQ.default, eJ.A);
    }
    supports(e) {
        return td.supports(e);
    }
    supportsInApp(e) {
        return t2[e] || td.supports(e);
    }
    isSupported() {
        return td.supported();
    }
    isNoiseSuppressionSupported() {
        return td.supports(e4.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return nY();
    }
    isNoiseCancellationError() {
        return tY;
    }
    isAutomaticGainControlSupported() {
        return td.supports(e4.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nC() && (td.supports(e4.O5.LEGACY_AUDIO_SUBSYSTEM) || td.supports(e4.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return td.supports(e4.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === td.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return nY();
    }
    isAecDumpSupported() {
        return td.supports(e4.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return td.supports(e4.O5.VIDEO) && td.supports(e4.O5.SIMULCAST);
    }
    getAecDump() {
        return nl().aecDumpEnabled;
    }
    getMediaEngine() {
        return td;
    }
    getVideoComponent() {
        return td.Video;
    }
    getCameraComponent() {
        return td.Camera;
    }
    getKrispSuppressionLevel() {
        return u ?? 100;
    }
    getKrispEnableStats() {
        return tj;
    }
    isEnabled() {
        return t_;
    }
    isMute() {
        return this.isSelfMute() || tN;
    }
    isDeaf() {
        return this.isSelfDeaf() || tR;
    }
    isServerMute() {
        return tN;
    }
    isServerDeaf() {
        return tR;
    }
    getAudioMixerSettings() {
        return nl().audioMixerSettings;
    }
    isSpatialAudioEnabled() {
        return !0 === this.getAudioMixerSettings().enabled;
    }
    isSpatialAudioActive() {
        return tz;
    }
    hasContext(e) {
        return null != tc[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e4.x.DEFAULT;
        return e === e4.x.DEFAULT && tC;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e4.x.DEFAULT;
        return (
            !this.isEnabled() ||
            nl(e).mute ||
            !eb.A.didHavePermission(e0.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === e4.x.DEFAULT && tO)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tv;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tv = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e4.x.DEFAULT,
            t = t7 && "voice_isolation" !== this.getSystemMicrophoneMode() && nl(e).mode === ew.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (eq.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return t6;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e4.x.DEFAULT;
        return !this.isSupported() || nl(e).deaf;
    }
    isVideoEnabled() {
        return tL && tU;
    }
    isVideoAvailable() {
        return Object.values(tg).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return tU;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e4.x.STREAM;
        return tA === e && null != a;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e4.x.STREAM;
        return tA === e && null != a && a.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e4.x.DEFAULT;
        return e !== e$.default.getId() && (nl(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return td.supports(e4.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e4.x.DEFAULT;
        return nl(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e4.x.DEFAULT;
        return nl(t).videoToggleStateMap[e] ?? ew.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e4.x.DEFAULT;
        return t === e4.x.DEFAULT && tJ.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e4.x.DEFAULT;
        return e === e4.x.DEFAULT && tJ.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tK;
    }
    isNativeAudioPermissionReady() {
        return tQ;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return tA;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return tf;
    }
    isH264MfDecodeAvailable() {
        return tp;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e4.x.DEFAULT,
            n = nl(t).localPans[e];
        return null != n ? n : e8;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e4.x.DEFAULT,
            n = t === e4.x.STREAM ? e4.Cn : e4.Hz,
            i = nl(t).localVolumes[e];
        return null != i ? i : n;
    }
    getInputVolume() {
        return nl().inputVolume;
    }
    getOutputVolume() {
        return nl().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e4.x.DEFAULT;
        return nl(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e4.x.DEFAULT;
        return nl(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            S().each(tc, (t, n) => {
                let {
                    mode: i,
                    modeOptions: { shortcut: r },
                } = t;
                i === ew.TBI.PUSH_TO_TALK && tu.has(n) && (e[n] = r);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nP(tT, nl().inputDeviceId);
    }
    getOutputDeviceId() {
        return nP(tm, nl().outputDeviceId);
    }
    getVideoDeviceId() {
        return nP(tg, nl().videoDeviceId);
    }
    getInputDevices() {
        return tT;
    }
    getOutputDevices() {
        return tm;
    }
    getVideoDevices() {
        return tg;
    }
    getEchoCancellation() {
        let e = nl();
        return eq.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return td.supports(e4.O5.SIDECHAIN_COMPRESSION) && nl().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return nl().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return nl().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tZ && tZ;
    }
    getOpenH264Enabled() {
        return (0, f.isLinux)() && nl().openH264Enabled;
    }
    getLoopback() {
        return t1.size > 0;
    }
    getLoopbackReasons() {
        return t1;
    }
    getNoiseSuppression() {
        let e = nl();
        return eq.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = nl();
        return eq.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return nl().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return nl().noiseCancellation;
    }
    getHardwareEncoding() {
        return !0;
    }
    getEnableSilenceWarning() {
        return nl().silenceWarning;
    }
    getDebugLogging() {
        return td.getDebugLogging();
    }
    getQoS() {
        return nl().qos;
    }
    getAttenuation() {
        return nl().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return nl().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return nl().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return nN() && nl().automaticAudioSubsystem ? e4.rB.AUTOMATIC : td.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return td.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return nl().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === e3.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e4.x.DEFAULT;
        return nl(e);
    }
    getState() {
        return {
            settingsByContext: tc,
            inputDevices: tT,
            outputDevices: tm,
            appSupported: t2,
            krispModuleLoaded: tV,
            krispFatalError: tB,
            krispVersion: c,
            krispSuppressionLevel: u,
            goLiveSource: a,
            goLiveContext: tA,
        };
    }
    getInputDetectedThisConnection() {
        return tw;
    }
    getInputDetected() {
        return l.inputDetected;
    }
    getLastInputDetectedUpdateTime() {
        return l.lastUpdateTime;
    }
    getNoInputDetectedNotice() {
        return tG;
    }
    getInputDeviceOSMuted() {
        return o;
    }
    getInputDeviceOSVolume() {
        return d;
    }
    getPacketDelay() {
        return f.isPlatformEmbedded || this.getMode() !== ew.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        td.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return tE;
    }
    getVideoHook() {
        return nl().videoHook;
    }
    supportsVideoHook() {
        return td.supports(e4.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = nl().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return td.supports(e4.O5.EXPERIMENTAL_SOUNDSHARE) && R().satisfies(M.A?.os.release, ec.$x);
    }
    supportsHookSoundshare() {
        return (0, f.isWindows)() && td.supports(e4.O5.SOUNDSHARE) && R().satisfies(M.A?.os.release, ec.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = nl().useSystemScreensharePicker,
            n = (0, f.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return td.supports(e4.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return nt;
    }
    getVideoEncoderExperiments(e, t) {
        let n = ["unk"];
        if (
            (n.push("nvNewPresets"),
            e === e4.x.STREAM ? n.push("nvRelaxRc=250") : n.push("nvRelaxRc=75"),
            this.getUseVaapiEncoder() && n.push("vaapi"),
            e === e4.x.STREAM && "streamer" === t && (0, f.isWindows)())
        ) {
            n.push("useCaptureDeviceForEncode");
            let { overrideDeviceReuse: e } = eS.getConfig({ location: "handleReady" });
            e && n.push("videoCaptureDeviceOverrideReuse");
        }
        return n.push("linux-vulkan"), n.join(",");
    }
    getUseGamescopeCapture() {
        return ne;
    }
    getSpeakingWhileMuted() {
        return tb;
    }
    getKrispModelOverride() {
        return _;
    }
    getKrispModels() {
        return tH;
    }
    getKrispVadActivationThreshold() {
        return nl().modeOptions.vadKrispActivationThreshold ?? 0.5;
    }
    hasActiveCallKitCall() {
        return t9;
    }
    setHasActiveCallKitCall(e) {
        t9 = e;
    }
    supportsScreenSoundshare() {
        return (0, f.isMac)()
            ? td.supports(e4.O5.SOUNDSHARE) && R().satisfies(M.A?.os.release, ec.P$) && nS()
            : (0, f.isWindows)()
              ? td.supports(e4.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, f.isLinux)() && td.supports(e4.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, f.isWindows)()) {
            if (this.getBypassSystemInputProcessing()) return;
            return tq[this.getInputDeviceId()]?.active?.find((e) => "deep_noise_suppression" === e);
        }
        if ((0, f.isMac)() || (0, f.isIOS)()) return E;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e4.x.DEFAULT,
            t = this.supports(e4.O5.VIDEO)
                ? [{ rid: "100", type: e === e4.x.DEFAULT ? e4.mI.VIDEO : e4.mI.SCREEN, quality: e4.Y4 }]
                : [];
        return (
            this.isSimulcastSupported() &&
                e === e4.x.DEFAULT &&
                en.getConfig({ location: "MediaEngineStore.getVideoStreamParameters" }).enableSimulcast &&
                t.push({ rid: "50", type: e4.mI.VIDEO, quality: e4.Cl }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: (0, f.isWeb)() };
        return td.fetchAsyncResources(e);
    }
    startDavePreload() {
        !t$ &&
            ((t$ = !0),
            (0, f.isWeb)() &&
                td.fetchAsyncResources({ fetchDave: !0 }).catch((e) => {
                    e6.warn("DAVE preload failed:", e), eY.A.captureException(e);
                }));
    }
    getSupportedSecureFramesProtocolVersion() {
        return td.getSupportedSecureFramesProtocolVersion();
    }
    hasClipsSource() {
        return null != s;
    }
    isClipsRecordingReady() {
        return tI;
    }
    isClipsRecordingReadySignalSupported() {
        return td.supports(e4.O5.CLIPS_RECORDING_READY_EVENTS);
    }
    getGpuBrand() {
        return t3;
    }
}
function nQ(e) {
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
let nJ = (i = new nX(b.h, {
    VOICE_CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n, currentVoiceChannelId: i, video: r } = e;
        if ((i !== n && nu(r, null), null != t || null == n)) {
            tk = !1;
            return;
        }
        if (tk) return;
        tk = !0;
        let a = nl();
        (a.mute || a.deaf) && (nO({ deaf: !1, mute: !1 }), td.eachConnection(nc));
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (r === t.sessionId) {
                (tN = t.mute || t.suppress), (tR = t.deaf), td.eachConnection(nc);
                let e = null != t.guildId && null != t.channelId && null != tW && tW !== t.channelId,
                    n = !tk && null == t.channelId;
                return nu(!e && !n && tL), (tW = t.channelId), !0;
            }
            return __OVERLAY__ || t.userId !== e$.default.getId() || null != eX.A.getChannelId() || nu(!1, null), e;
        }, !1);
    },
    CONNECTION_OPEN: function (e) {
        (r = e.sessionId), (tN = !1), (tR = !1);
        let t = nl();
        nN() && (nC() ? nz(e4.rB.AUTOMATIC) : t.automaticAudioSubsystem && nq()),
            td.supports(e4.O5.OFFLOAD_ADM_CONTROLS) && td.setOffloadAdmControls(!0),
            (0, f.isIOS)() &&
                el.getConfig({ location: "handleConnectionOpen" }).enabled &&
                td.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
            (0, f.isWindows)() &&
                tV &&
                p.Ay.requireModule("discord_krisp").setMklZenOverrideEnabled?.(ef("handleConnectionOpen").enabled),
            (0, f.isIOS)() && (td.setNcModels?.(eE.getConfig({ location: "setupKrisp" }).models), i.emitChange()),
            nU(t.inputDeviceId),
            nx();
    },
    CONNECTION_CLOSED: function () {
        r = null;
    },
    POST_CONNECTION_OPEN: function () {
        return (0, f.isWeb)() && i.startDavePreload(), !1;
    },
    RTC_CONNECTION_STATE: function (e) {
        switch (e.state) {
            case ew.S7L.CONNECTING:
                nL();
                break;
            case ew.S7L.RTC_CONNECTING:
                (tG = !1), (o = void 0), (d = void 0), (tw = !1), (t7 = !1), t8.stop(), tx.stop(), l.reset();
                break;
            case ew.S7L.RTC_CONNECTED:
                nu();
                break;
            case ew.S7L.DISCONNECTED:
                (ni = {}),
                    (function () {
                        if (0 === tJ.size) return;
                        let e = e4.x.DEFAULT,
                            { disabledLocalVideos: t } = nl(e);
                        tJ.forEach((n) => {
                            m()(t[n], "If you are auto-disabled, then you are also disabled."),
                                delete t[n],
                                td.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
                        }),
                            tJ.clear(),
                            nO({ disabledLocalVideos: t }, e, !1);
                    })(),
                    nF();
        }
    },
    AUDIO_SET_TEMPORARY_SELF_MUTE: function (e) {
        let { mute: t } = e;
        (tC = t), td.eachConnection(nc);
    },
    AUDIO_TOGGLE_SELF_MUTE: function (e) {
        let { context: t, playSoundEffect: n } = e,
            { mute: i, deaf: r } = nl(t);
        if (t === e4.x.DEFAULT && (eb.A.requestPermission(e0.iL.AUDIO), tO)) return !1;
        (i = !r && !i) || (r = !1), n || (tv = !0), nO({ mute: i, deaf: r }, t), td.eachConnection(nc);
    },
    AUDIO_SET_SELF_MUTE: function (e) {
        let { context: t, mute: n, playSoundEffect: i } = e;
        nO({ mute: n }, t), i || (tv = !0), td.eachConnection(nc);
    },
    AUDIO_TOGGLE_SELF_DEAF: function (e) {
        let { context: t } = e;
        nO({ deaf: !nl(t).deaf }, t), td.eachConnection(nc);
    },
    AUDIO_TOGGLE_LOCAL_MUTE: function (e) {
        let { context: t, userId: n } = e;
        if (n === e$.default.getId()) return;
        let { localMutes: i } = nl(t);
        i[n] ? delete i[n] : (i[n] = !0),
            nO({ localMutes: i }, t),
            td.eachConnection((e) => e.setLocalMute(n, i[n] || !1), t);
    },
    AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
        let { context: t, userId: n, videoToggleState: i, persist: r, isAutomatic: a } = e;
        m()(!(r && a), "These are not allowed to both be true.");
        let s = i === ew.bb8.DISABLED,
            { disabledLocalVideos: l } = nl(t),
            o = l[n] ?? !1,
            d = tJ.has(n),
            c = i === ew.bb8.AUTO_ENABLED || i === ew.bb8.MANUAL_ENABLED;
        e6.info(`disableVideo=${s} currentlyDisabled=${o} currentlyAutoDisabled=${d}, isVideoShown=${c}`),
            m()(!(d && !o), "If you are auto-disabled, then you are also disabled.");
        let u = s !== o,
            _ = t === e4.x.DEFAULT,
            E = a && u && _,
            A = r && u && _;
        e6.info(`changed=${u} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${E} isManualToggleByUser=${A}`);
        let { videoToggleStateMap: h } = nl(t);
        if (
            (h[n] === ew.bb8.AUTO_PROBING &&
                i === ew.bb8.AUTO_ENABLED &&
                (0, ev.A)(n, s ? e4.Al.AUTO_DISABLE : e4.Al.AUTO_ENABLE, c),
            (h[n] = i),
            nO({ videoToggleStateMap: h }, t, r),
            i === ew.bb8.AUTO_PROBING
                ? eX.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
                : eX.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
            t0 ||
                (e6.info(`isAutoDisableAllowed=${t0} - disabling VideoHealthManager`),
                eX.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
            E)
        ) {
            if ((!s && !d) || (s && !t0)) return;
            (0, ev.A)(n, s ? e4.Al.AUTO_DISABLE : e4.Al.AUTO_ENABLE, c), s ? tJ.add(n) : tJ.delete(n);
        } else
            A &&
                (d && !s
                    ? (e6.info("disallowing auto-disable for this session because of manual override by user"),
                      (t0 = !1),
                      eX.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                      (0, ev.A)(n, e4.Al.MANUAL_REENABLE, c))
                    : (0, ev.A)(n, s ? e4.Al.MANUAL_DISABLE : e4.Al.MANUAL_ENABLE, c));
        _ && !s && tJ.delete(n),
            s ? (l[n] = !0) : delete l[n],
            nO({ disabledLocalVideos: l }, t, r),
            td.eachConnection((e) => e.setLocalVideoDisabled(n, l[n] ?? !1), t);
    },
    AUDIO_SET_LOCAL_VOLUME: function (e) {
        let { context: t, userId: n, volume: i } = e;
        if (n === e$.default.getId()) return;
        let r = t === e4.x.STREAM ? e4.Cn : e4.Hz,
            { localVolumes: a } = nl(t);
        i === r ? delete a[n] : (a[n] = i),
            nO({ localVolumes: a }, t),
            td.eachConnection((e) => e.setLocalVolume(n, i), t);
    },
    AUDIO_SET_AUDIO_MIXER_SETTINGS: function (e) {
        let { context: t, settings: n } = e;
        nO({ audioMixerSettings: n }, t), nB(n), td.eachConnection((e) => e.setSpatialAudioEnabled(tz), e4.x.DEFAULT);
    },
    AUDIO_SET_LOCAL_PAN: function (e) {
        let { context: t, userId: n, left: i, right: r } = e,
            { localPans: a } = nl(t);
        (a[n] = { left: i, right: r }), nO({ localPans: a }, t), td.eachConnection((e) => e.setLocalPan(n, i, r), t);
    },
    AUDIO_SET_MODE: function (e) {
        let { context: t, mode: n, options: i } = e;
        nO({ mode: n, modeOptions: { ...i, updatedAt: Date.now() } }, t), td.eachConnection(no);
    },
    AUDIO_SET_INPUT_VOLUME: function (e) {
        let { volume: t } = e;
        nO({ inputVolume: nd(t) }), td.setInputVolume(t);
    },
    AUDIO_SET_OUTPUT_VOLUME: function (e) {
        let { volume: t } = e;
        nO({ outputVolume: t }), td.setOutputVolume(t);
    },
    AUDIO_SET_INPUT_DEVICE: function (e) {
        let { id: t } = e;
        (t = nP(tT, t)),
            (tf = performance.now()),
            nO({ inputDeviceId: t }),
            nw(t),
            td.eachConnection(nm),
            (o = void 0),
            (d = void 0),
            t8.stop(),
            (t7 = !1);
        let { resetSilenceWarningOnDeviceChange: n } = ep.A.getConfig({
            location: "MediaEngineStore.handleSetInputDevice",
        });
        n && ((tw = !1), l.reset());
    },
    AUDIO_SET_OUTPUT_DEVICE: function (e) {
        let { id: t } = e;
        nO({ outputDeviceId: (t = nP(tm, t)) }), td.setAudioOutputDevice(t), td.eachConnection(nm);
    },
    AUDIO_SET_ACTIVE_INPUT_PROFILE: function (e) {
        let { inputProfile: t } = e;
        nO({ activeInputProfile: t });
        let n = nl();
        td.eachConnection((e) => {
            no(e), nm(e);
        }),
            td.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
            nj();
    },
    AUDIO_SET_ECHO_CANCELLATION: function (e) {
        let t = nO({ echoCancellation: e.enabled }),
            n = eq.A.hasEchoCancellation(t.inputDeviceId) || t.echoCancellation;
        td.eachConnection((e) => e.setEchoCancellation(n)), nj(), nH(e.location);
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION: function (e) {
        let t;
        (t = nO({ sidechainCompression: e.enabled })), td.setSidechainCompression(t.sidechainCompression);
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function (e) {
        let t = nO({ sidechainCompressionStrength: e.strength });
        td.setSidechainCompressionStrength(t.sidechainCompressionStrength);
    },
    AUDIO_SET_LOOPBACK: function (e) {
        let { enabled: t, loopbackReason: n } = e;
        return t ? t1.add(n) : t1.delete(n), nj();
    },
    AUDIO_SET_NOISE_SUPPRESSION: function (e) {
        let t = nO({ noiseSuppression: e.enabled }),
            n = eq.A.hasNoiseSuppression(t.inputDeviceId) || t.noiseSuppression;
        td.eachConnection((e) => e.setNoiseSuppression(n)), nj(), nH(e.location);
    },
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function (e) {
        let t = nO({ automaticGainControl: e.enabled });
        td.eachConnection((e) => nf(e, t.automaticGainControl)), nj(), nH(e.location);
    },
    AUDIO_SET_NOISE_CANCELLATION: function (e) {
        let t = nO({ noiseCancellation: e.enabled });
        td.eachConnection((e) => np(e, t.noiseCancellation)), nj(), nH(e.location);
    },
    AUDIO_SET_KRISP_MODEL_OVERRIDE: function (e) {
        eM.A.setKrispModelOverride(e.model), (_ = e.model), nj();
    },
    AUDIO_SET_DISPLAY_SILENCE_WARNING: function (e) {
        nO({ silenceWarning: e.enabled });
    },
    AUDIO_SET_DEBUG_LOGGING: function (e) {
        td.setDebugLogging(e.enabled);
    },
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: function (e) {
        let { level: t } = e;
        (u = t), eM.A.setKrispSuppressionLevel(t);
    },
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: function (e) {
        (0, f.isWeb)() || ((tj = e.enabled), td.setNoiseCancellationEnableStats?.(e.enabled));
    },
    MEDIA_ENGINE_SET_VIDEO_HOOK: function (e) {
        nO({ videoHook: e.enabled });
    },
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function (e) {
        nO({ experimentalSoundshare2: e.enabled });
    },
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: function (e) {
        let { enabled: t } = e;
        nO({ useSystemScreensharePicker: t });
    },
    AUDIO_SET_ATTENUATION: function (e) {
        let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i } = e,
            r = nO({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i });
        td.eachConnection((e) =>
            e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers),
        );
    },
    AUDIO_SET_QOS: function (e) {
        let { enabled: t } = e;
        nO({ qos: t }), td.eachConnection((e) => e.setQoS(t));
    },
    MEDIA_ENGINE_DEVICES: function (e) {
        let t = tT;
        if (
            ((tT = nM(e, { deviceType: e4.oh.AUDIO_INPUT, defaultName: e5.intl.string(e5.t["/QIjDA"]) })),
            !S().isEqual(tT, t))
        ) {
            let e = nl();
            nw(nP(tT, e.inputDeviceId)), td.eachConnection(nm);
        }
        !(function (e) {
            let t = tm;
            if (
                ((tm = nM(e, { deviceType: e4.oh.AUDIO_OUTPUT, defaultName: e5.intl.string(e5.t.xlUg0v) })),
                !S().isEqual(tm, t))
            ) {
                let e = nl(),
                    n = nP(tm, e.outputDeviceId);
                td.setAudioOutputDevice(n), td.eachConnection(nm);
                let i = nG(t),
                    r = nG(tm);
                i !== r &&
                    td.eachConnection((e) => {
                        e.context === e4.x.STREAM && e.setSoundshareDiscardRearChannels(r);
                    });
            }
        })(e);
        tU = e.videoDevices.length > 0;
        let n = tg;
        if (
            ((tg = nM(e, { deviceType: e4.oh.VIDEO_INPUT, defaultName: e5.intl.string(e5.t.WKWARY) })),
            tL && !S().isEqual(tg, n))
        ) {
            let e = void 0 !== tg[tD],
                t = tD === e4.dx && n[e4.dx]?.disabled,
                i = "Firefox" === C().name && "" === tD && n[tD]?.name === "Default" && !n[tD]?.disabled;
            nu(e || t || i);
        }
    },
    AUDIO_VOLUME_CHANGE: function (e) {
        let { inputVolume: t, outputVolume: n } = e;
        nO({ inputVolume: nd(t), outputVolume: n });
    },
    AUDIO_RESET: function () {
        y.w.remove(e7), location.reload();
    },
    AUDIO_INPUT_DETECTED: function (e) {
        let { inputDetected: t } = e;
        if (null == t) return !1;
        if (((tG = !0 !== tw && !t), t)) (tw = !0), (t7 = !1), t8.stop(), tx.stop();
        else if (nl().mode === ew.TBI.VOICE_ACTIVITY && tw) {
            let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = ep.A.getConfig({
                location: "MediaEngineStore.handleInputDetected",
            });
            e &&
                t8.start(tn, () => {
                    eU.default.track(ew.HAw.HARDWARE_MUTE_GUESSED, {
                        input_device_name: tT[nP(tT, nl().inputDeviceId)]?.name,
                        rtc_connection_id: eX.A.getRTCConnectionId(),
                    }),
                        (t7 = !0),
                        i.emitChange();
                }),
                null != t &&
                    tx.start(t * eW.A.Millis.MINUTE, () => {
                        (tw = !1), l.reset();
                    });
        }
    },
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: function (e) {
        let { osVolume: t, osMuted: n } = e;
        (d = t), (o = n);
    },
    AUDIO_SET_SUBSYSTEM: function (e) {
        nz(e.subsystem);
    },
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: function (e) {
        let t = e.bypassEnabled;
        nO({ bypassSystemInputProcessing: t }), td.setAudioInputBypassSystemProcessing(t), nT(), nH(e.location);
    },
    MEDIA_ENGINE_SET_AUDIO_ENABLED: function (e) {
        (t_ = e.enabled), e.unmute && nO({ mute: !1, deaf: !1 }), td.eachConnection(nc);
    },
    MEDIA_ENGINE_SET_VIDEO_ENABLED: function (e) {
        let { enabled: t } = e;
        eb.A.requestPermission(e0.iL.CAMERA), nu(t);
    },
    MEDIA_ENGINE_PERMISSION: function (e) {
        let { kind: t, granted: n } = e;
        if (!n)
            switch (t) {
                case "audio":
                    (t_ = !1), td.eachConnection(nc);
                    break;
                case "video":
                    nu(!1);
            }
    },
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
        let { settings: t } = e;
        if (t?.desktopSettings != null) {
            let e = null,
                n = null,
                { sourceId: i, sound: r } = t.desktopSettings,
                s = t.context ?? e4.x.DEFAULT,
                l = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
                o = ej.A.getPidFromDesktopSource(i);
            f.isPlatformEmbedded && ({ soundshareId: e, soundshareSession: n } = nk(o, r)),
                s !== tA && (null != a && td.setGoLiveSource(null, tA), (tA = s)),
                nu(s === e4.x.STREAM && tL, {
                    desktopSource: { id: i, sourcePid: o, soundshareId: e, soundshareSession: n },
                    quality: { resolution: l.resolution, frameRate: l.frameRate },
                });
        } else if (t?.cameraSettings != null) {
            let e = t.context ?? e4.x.DEFAULT,
                { videoDeviceGuid: n, audioDeviceGuid: i, sound: r } = t.cameraSettings,
                a = e === e4.x.STREAM && tL,
                s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
            nu(a, {
                cameraSource: { videoDeviceGuid: n, audioDeviceGuid: i, sound: r },
                quality: { resolution: s.resolution, frameRate: s.frameRate },
            });
        } else nu(tL, null);
    },
    MEDIA_ENGINE_SET_VIDEO_DEVICE: function (e) {
        let { id: t } = e;
        nO({ videoDeviceId: (t = nP(tg, t)) }), nu();
    },
    MEDIA_ENGINE_INTERACTION_REQUIRED: function (e) {
        return tE !== e.required && ((tE = e.required), e.required || td.interact(), !0);
    },
    USER_SETTINGS_MODAL_INIT: nZ,
    USER_SETTINGS_MODAL_SET_SECTION: nZ,
    CERTIFIED_DEVICES_SET: function () {
        return td.eachConnection(nm), !1;
    },
    RPC_APP_CONNECTED: function (e) {
        let { application: t } = e;
        tu.add(t.id);
    },
    RPC_APP_DISCONNECTED: function (e) {
        let { application: t } = e;
        tu.delete(t.id);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { mediaEngineState: t } = e;
        (tc = t.settingsByContext),
            (tT = t.inputDevices),
            (tm = t.outputDevices),
            (t2 = t.appSupported),
            (tV = t.krispModuleLoaded),
            (tB = t.krispFatalError),
            (c = t.krispVersion),
            (tA = t.goLiveContext);
    },
    APP_STATE_UPDATE: function (e) {
        let { state: t } = e,
            n = H.A.isEnabled();
        if (t === ew.g6G.BACKGROUND && tL && !n) (tP = !0), nu(!1);
        else {
            if (t !== ew.g6G.ACTIVE || !tP) return !1;
            (tP = !1), nu(!0);
        }
        return !0;
    },
    SET_CHANNEL_BITRATE: function (e) {
        td.eachConnection((t) => t.setBitRate(e.bitrate));
    },
    SET_VAD_PERMISSION: function (e) {
        let { hasPermission: t } = e,
            n = !t;
        if (n === tO) return !1;
        (tO = n), td.eachConnection(nc);
    },
    SET_NATIVE_PERMISSION: function (e) {
        let { state: t, permissionType: n } = e,
            i = t === e0.hL.ACCEPTED;
        switch (n) {
            case e0.iL.AUDIO:
                (tQ = !0), td.eachConnection(nc);
                break;
            case e0.iL.CAMERA:
                !i && tL && nu(!1);
                break;
            default:
                return !1;
        }
    },
    SET_CHANNEL_VIDEO_QUALITY_MODE: function (e) {
        td.eachConnection((t) => t.applyVideoQualityMode(e.mode));
    },
    MEDIA_ENGINE_SET_AEC_DUMP: function (e) {
        let { enabled: t } = e,
            n = nO({ aecDumpEnabled: t });
        td.setAecDump(n.aecDumpEnabled);
    },
    MEDIA_ENGINE_SET_OPENH264_ENABLED: function (e) {
        let { enabled: t } = e;
        nO({ openH264Enabled: t }), p.Ay?.setOpenH264Enabled?.(t);
    },
    MEDIA_ENGINE_RESET_SETTINGS: function (e) {
        let { overrides: t } = e;
        if (__OVERLAY__) return !1;
        (tc = Object.values(e4.x).reduce((e, n) => {
            let i = ts();
            return (e[n] = S().merge(i, t[n])), e;
        }, {})),
            y.w.set(e7, tc),
            nR();
    },
    CHANNEL_DELETE: function () {
        if ((!tL && null == a) || null != eX.A.getRTCConnectionId()) return !1;
        nu(!1, null);
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: function (e) {
        if (e.code === e4.CO.KRISP_CPU_OVERUSE) {
            (ni.noiseCancellation = !1), (ni.noiseSuppression = !0);
            let e = nl();
            return td.eachConnection((t) => np(t, e.noiseCancellation)), nj(), nH(), !0;
        }
        return !1;
    },
    MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR: function (e) {
        return (
            e.code === e4.CO.KRISP_VAD_CPU_OVERUSE &&
            ((ni.modeOptions = { vadUseKrisp: !1 }), td.eachConnection((e) => no(e)), !0)
        );
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function () {
        return !!tY && ((tY = !1), !0);
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
        let { settings: t } = e;
        td.applyMediaFilterSettings(t).finally(() => {
            (tK = !1), i.emitChange();
        });
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function () {
        tK = !0;
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function () {
        tK = !1;
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            local: n,
            wasSaved: i,
        } = e;
        if (t !== e2.oD.PRELOADED_USER_SETTINGS || n || null != i) return !1;
        nx(!0);
    },
    CLIPS_INIT: function (e) {
        let { sourceId: t, applicationName: n, quality: r } = e;
        if (!(0, k.Ao)() || null == M.A || (s?.desktopSource.id === t && s.quality === r)) return !1;
        null != s &&
            (td.setClipsSource(null),
            (0, f.isWindows)() &&
                (null != s.desktopSource.soundshareId
                    ? P.c1(s.desktopSource.soundshareId)
                    : null != s.desktopSource.sourcePid && nl().videoHook && P.c1(s.desktopSource.sourcePid)));
        let a = ej.A.getPidFromDesktopSource(t),
            { soundshareId: l, soundshareSession: o } = nk(a, !0);
        s = { desktopSource: { id: t, sourcePid: a, soundshareId: l, soundshareSession: o }, quality: r };
        let d = nr("MediaEngineStore clips"),
            c = nl().videoHook,
            u = !c || !ei.getConfig({ location: "handleClipsInit" }).enabled,
            _ = c && eN.getConfig({ location: "handleClipsInit" }).enabled,
            { minCaptureWidth: E, minCaptureHeight: A } = em.getConfig({ location: "handleClipsInit" });
        td.setClipsSource({
            desktopDescription: {
                id: s.desktopSource.id,
                soundshareId: s.desktopSource.soundshareId,
                useVideoHook: c,
                useHookFramePacer: u,
                useGraphicsCapture: ng(),
                useCaptureDeviceForEncode: !1,
                useLoopback: i.getExperimentalSoundshare(),
                useQuartzCapturer: !0,
                allowScreenCaptureKit: nS(),
                videoHookStaleFrameTimeoutMs: 500,
                graphicsCaptureStaleFrameTimeoutMs: e9,
                hdrCaptureMode: d,
                videoHookAllowDx12: _,
                minCaptureWidth: E,
                minCaptureHeight: A,
            },
            quality: r,
            bitratePercent: r.bitratePercent,
            applicationName: n,
            videoEncoderExperiments: i.getVideoEncoderExperiments(e4.x.STREAM, "streamer"),
        });
    },
    CLIPS_RESTART: function () {
        s = null;
    },
    CLIPS_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        !1 === t.decoupledClipsEnabled && ((s = null), td.setClipsSource(null)), !1 === t.clipsEnabled && (s = null);
    },
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function (e) {
        t6 = e.enabled;
    },
    MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: function (e) {
        let { deviceId: t, active: n, available: i } = e;
        (tq[t] = { active: n, available: i }), nT();
    },
}));
