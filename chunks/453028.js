"use strict";
let i, r, a, s, l, o, d, c, u, _, E;
n.d(t, { yz: () => ta, Ay: () => n0 }), n(323874), n(14289), n(35956), n(321073);
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
    R = n(299855),
    O = n.n(R),
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
let Z = (0, Y.mj)({
        name: "2026-06-av1-encode-linux",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    q = { probeAudioEffects: !1 },
    X = (0, Y.mj)({
        name: "2026-03-audio-effects-probe",
        kind: "user",
        defaultConfig: q,
        variations: { 1: { ...q, probeAudioEffects: !0 } },
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
        if ((0, eo.uF)() && O().satisfies(M.A?.os.release, ec.PH))
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
    eg = (0, Y.mj)({
        name: "2026-03-video-capture-device-no-reuse",
        kind: "user",
        defaultConfig: { overrideDeviceReuse: !1 },
        variations: { 1: { overrideDeviceReuse: !0 } },
    });
var eS = n(625075);
let eN = (0, Y.mj)({
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
    eR = (0, Y.mj)({
        name: "2026-02-wgc-dirty-regions",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eO = (0, Y.mj)({
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
function ey(e) {
    return eL.getConfig({ location: e });
}
let eD = (0, Y.mj)({
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
    eZ = n(347481),
    eq = n(734057),
    eX = n(763827),
    eQ = n(287809),
    eJ = n(117549),
    e0 = n(765682);
let e1 = {
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
var e2 = n(355097),
    e3 = n(621380),
    e5 = n(731854),
    e4 = n(375708);
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
        inputVolume: e5.Hz,
        outputVolume: e5.Hz,
        inputDeviceId: e5.dx,
        outputDeviceId: e5.dx,
        videoDeviceId: e5.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: td.supports(e5.O5.VIDEO_HOOK),
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
    td = (0, y.hB)((0, y.WI)());
function tc(e) {
    return eS.k.getConfig({ location: e }).videoEnabled;
}
e6.enableNativeLogger(!0);
let tu = {},
    t_ = new Set([e5.x.DEFAULT]),
    tE = td.supports(e5.O5.AUTO_ENABLE),
    tA = !1,
    th = e5.x.STREAM,
    tI = 0,
    tf = !1,
    tp = performance.now(),
    tT = null,
    tm = { [e5.dx]: nD("No Input Devices") },
    tg = { [e5.dx]: nD("No Output Devices") },
    tS = { [e5.dx]: nD("No Video Devices") },
    tN = new v.Ep(),
    tC = !1,
    tR = !1,
    tO = !1,
    tL = !1,
    ty = !1,
    tD = e5.qe,
    tv = e5.qe,
    tb = !1,
    tM = !1,
    tP = new v.Ep(),
    tU = !1,
    tw = !1,
    tG = !1,
    tx = !1,
    tk = new v.Ep(),
    tF = !1,
    tV = !1,
    tB = !1,
    tH = !1,
    tj = [],
    tW = !1,
    tY = null,
    tK = !1,
    t$ = !1,
    tz = !1,
    tZ = !1,
    tq = {},
    tX = null,
    tQ = null,
    tJ = !1;
eb.A.hasPermission(e0.iL.AUDIO, { showAuthorizationError: !1 }),
    eb.A.hasPermission(e0.iL.CAMERA, { showAuthorizationError: !1 });
let t0 = new Set(),
    t1 = !1,
    t2 = new Set(),
    t3 = {},
    t5 = null,
    t4 = null,
    t6 = null,
    t7 = !0,
    t8 = !1,
    t9 = new v.Ep(),
    ne = !1,
    nt = !1,
    nn = !1,
    ni = !1,
    nr = {};
function na(e) {
    return (function (e) {
        let { location: t } = e;
        return es.getConfig({ location: t });
    })({ location: e }).hdrCaptureMode;
}
async function ns() {
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
function nl() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e5.x.DEFAULT,
        t = tu[e];
    return null == t && ((t = ts()), (tu[e] = t)), t;
}
function no() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e5.x.DEFAULT,
        t = nl(e),
        n = tl[t.activeInputProfile ?? e3.m.CUSTOM],
        i = nK() ? nr : to,
        r = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}), ...(i.modeOptions ?? {}) };
    if ((null == r.vadKrispActivationThreshold && !0 === n.automaticGainControl) || !0 === t.automaticGainControl) {
        let e = z({ location: "getSettings" });
        null != e.vadKrispActivationThreshold && (r.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return { ...t, ...n, ...i, modeOptions: r };
}
function nd(e) {
    let t = no(e.context),
        n = t.mode;
    e.context === e5.x.DEFAULT && (0, eI.N)(!1, !1);
    let { showPTTSpeakingIndicator: i } = eB.A.getConfig({ location: "setInputMode" }),
        r = i && n === ew.TBI.PUSH_TO_TALK;
    e.setInputMode(n, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: !!r || t.modeOptions.autoThreshold,
        vadUseKrisp: (!!r || t.modeOptions.vadUseKrisp) && nK(),
        vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? 0.5,
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        pttReleaseDelay: Math.round(t.modeOptions.delay),
    });
}
function nc(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e5.Hz;
    return S().clamp(e, 0, t);
}
function nu(e) {
    let t = no(e.context),
        n = !tE || t.mute || t.deaf;
    switch (e.context) {
        case e5.x.DEFAULT:
            n = n || tC || tR || tO || !eb.A.didHavePermission(e0.iL.AUDIO);
            break;
        case e5.x.STREAM:
            n = !0;
            break;
        default:
            e.context;
    }
    e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === e5.x.DEFAULT && U.A.updateNativeMute();
}
function n_() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ty,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        n = a;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, f.isWindows)()
                ? P.c1(n.desktopSource.soundshareId)
                : null != n.desktopSource.sourcePid && no().videoHook && P.c1(n.desktopSource.sourcePid),
            td.setGoLiveSource(null, th)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            td.setGoLiveSource(null, th),
        ty || e)
    ) {
        let t = no().videoDeviceId;
        ty && t === e5.dx && tv === e5.dx && tD !== e5.qe ? (t = tD) : (tv = t),
            (tD = (ty = e) ? nU(tS, t) : e5.qe),
            td.setVideoInputDevice(tD);
    }
    if (((a = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = na("MediaEngineStore go live"),
                r = no().videoHook,
                a = nS(),
                s = a ? ((0, f.isWindows)() && O().satisfies(M.A?.os.release, ec.fG) ? ec.zl : ec.eg) : 0,
                l = !1;
            (0, f.isWindows)() &&
                s >= ec.zl &&
                (l =
                    !0 === t4
                        ? eR.getConfig({ location: "updateVideo" }).enabled
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
                        allowScreenCaptureKit: nN(),
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
                th,
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
                th,
            );
    }
}
function nE(e) {
    switch (e) {
        case e5.CO.KRISP_CPU_OVERUSE:
            return V.B6.KrispCpuOveruse;
        case e5.CO.KRISP_FAILED:
            return V.B6.KrispFailed;
        case e5.CO.KRISP_VAD_CPU_OVERUSE:
            return V.B6.KrispVadCpuOveruse;
        case e5.CO.KRISP_INIT_ERROR:
            return V.B6.KrispInitError;
        case e5.CO.KRISP_INIT_ERROR_NATIVE:
            return V.B6.KrispInitErrorNative;
        case e5.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED:
            return V.B6.KrispInitErrorSse4NotSupported;
        case e5.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED:
            return V.B6.KrispInitErrorAvx2NotSupported;
        case e5.CO.KRISP_INIT_ERROR_UNSIGNED:
            return V.B6.KrispInitErrorUnsigned;
        case e5.CO.KRISP_INIT_ERROR_GLOBAL_INIT:
            return V.B6.KrispInitErrorGlobalInit;
        case e5.CO.KRISP_INIT_ERROR_WEIGHT_8K:
            return V.B6.KrispInitErrorWeight8k;
        case e5.CO.KRISP_INIT_ERROR_WEIGHT_16K:
            return V.B6.KrispInitErrorWeight16k;
        case e5.CO.KRISP_INIT_ERROR_WEIGHT_32K:
            return V.B6.KrispInitErrorWeight32k;
        case e5.CO.KRISP_INIT_ERROR_WEIGHT_VAD:
            return V.B6.KrispInitErrorWeightVad;
        default:
            return;
    }
}
let nA = new Set([
    e5.CO.KRISP_INIT_ERROR,
    e5.CO.KRISP_INIT_ERROR_NATIVE,
    e5.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED,
    e5.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED,
    e5.CO.KRISP_INIT_ERROR_UNSIGNED,
    e5.CO.KRISP_INIT_ERROR_GLOBAL_INIT,
    e5.CO.KRISP_INIT_ERROR_WEIGHT_8K,
    e5.CO.KRISP_INIT_ERROR_WEIGHT_16K,
    e5.CO.KRISP_INIT_ERROR_WEIGHT_32K,
    e5.CO.KRISP_INIT_ERROR_WEIGHT_VAD,
]);
function nh(e) {
    if (
        (e6.warn(`Voice processing error: ${e}`),
        (0, V.QW)({ type: V.iy.NOISE_CANCELLER_ERROR, underlyingError: nE(e) }),
        eU.default.track(ew.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
        nA.has(e))
    ) {
        tH = !0;
        return;
    }
    e === e5.CO.KRISP_VAD_CPU_OVERUSE
        ? b.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e })
        : ((tK = !0), b.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e }));
}
function nI(e, t) {
    let n = t === e5.$C.LIVE;
    e6.warn(`Video filter error: ${e} (${n ? "live" : "preview"})`),
        n &&
            (0, V.QW)({
                type: V.iy.VIDEO_BACKGROUND_UNAVAILABLE,
                underlyingError: (function (e) {
                    switch (e) {
                        case e5.kv.UNSUPPORTED:
                            return V.B6.VideoBackgroundUnsupported;
                        case e5.kv.INIT_FAILED:
                            return V.B6.VideoBackgroundInitFailed;
                        default:
                            return;
                    }
                })(e),
            }),
        b.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_FILTER_ERROR", code: e, target: n ? "live" : "preview" });
}
function nf(e) {
    let t = z({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function np(e, t) {
    e.setAutomaticGainControl(nf(t));
}
function nT(e, t) {
    let n = (0, eP.A)(t, i.getSystemMicrophoneMode());
    n !== t && e6.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: r } = z({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(r);
}
function nm() {
    let e = no(),
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
                krispEnabled: (0, eP.A)(e.noiseCancellation, i.getSystemMicrophoneMode()),
                noiseSuppressionEnabled: r,
                echoCancellationEnabled: n,
            },
        );
    td.setVoiceSampleRateCap(a), td.setVoiceChannelCountCap(s);
}
function ng(e) {
    let t = no(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eZ.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eZ.A.hasNoiseSuppression(n) || t.noiseSuppression),
        np(e, eZ.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        nT(e, t.noiseCancellation),
        e.setSpatialAudioEnabled(nB(t.audioMixerSettings)),
        nm(),
        (0, f.isWindows)() && O().satisfies(M.A?.os.release, ">=10.0.15063") && e.context === e5.x.DEFAULT)
    ) {
        let t = (function (e) {
                let { location: t } = e;
                return eT.getConfig({ location: t });
            })({ location: "updateConnectionVoiceProcessing" }),
            n = nM(tm[i.getInputDeviceId()]) || nM(tg[i.getOutputDeviceId()]);
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
function nS() {
    return (0, f.isWindows)() && O().satisfies(M.A?.os.release, ec.yg);
}
function nN() {
    return (0, f.isMac)() && td.supports(e5.O5.SCREEN_CAPTURE_KIT) && O().satisfies(M.A?.os.release, ec.e);
}
function nC() {
    return (
        (0, f.isWindows)() &&
        td.supports(e5.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        td.supports(e5.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nR() {
    return td.supports(e5.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function nO(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e5.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = nl(t);
    return Object.assign(i, e), !__OVERLAY__ && n && D.w.set(e7, tu), i;
}
function nL() {
    let e = no();
    nG(e.inputDeviceId),
        td.setAudioOutputDevice(e.outputDeviceId),
        n_(),
        td.setInputVolume(e.inputVolume),
        td.setOutputVolume(e.outputVolume),
        td.setAecDump(e.aecDumpEnabled),
        td.setSidechainCompression(e.sidechainCompression),
        td.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        td.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        (0, f.isLinux)() && p.Ay?.setOpenH264Enabled?.(e.openH264Enabled),
        nH(e.audioMixerSettings);
}
function ny() {
    tE || td.enable().then(() => b.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nD(e) {
    return { id: e5.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
}
function nv(e, t) {
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
let nb = /^HDAUDIO\\(?:SUB)?FUNC_\d+&VEN_(?:8086|1002|10DE)/;
function nM(e) {
    return e?.windowsDeviceService === "voicemodvad" || e?.name?.toLowerCase().includes("voicemod") === !0;
}
function nP(e, t) {
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
                    case nv(e, r):
                        return "WEBCAM";
                    case ["builtin", "displayport", "hdmi"].includes(e.macosTransportType ?? ""):
                    case null != e.hardwareId && nb.test(e.hardwareId):
                        return "INTEGRATED";
                    case S()(e.hardwareId).startsWith("BTHENUM"):
                    case ["bluetooth", "bluetoothle"].includes(e.macosTransportType ?? ""):
                        return "BLUETOOTH";
                    case ["airplay", "continuitycapturewireless"].includes(e.macosTransportType ?? ""):
                        return "AIRPLAY";
                    case "audioinput" === e.type && nv(e, i):
                    case "audiooutput" === e.type && nv(e, n):
                        return "HEADSET";
                }
            })(t, e),
            windowsDeviceService: t.windowsDeviceService,
        }))
        .keyBy("id")
        .value();
}
function nU(e, t) {
    let n = e[t] ?? e[e5.dx] ?? S()(e).values().first();
    return null != n ? n.id : t;
}
function nw(e) {
    if (!(0, f.isWindows)() || !X.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects) return;
    let t = tm[e];
    t?.guid != null && ex(t.guid, e, td);
}
function nG(e) {
    td.setAudioInputDevice(e), nw(e);
}
function nx(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nk() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = eF.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let i = n === e2.W.USER ? e5.x.DEFAULT : e5.x.STREAM,
            r = i === e5.x.STREAM ? e5.Cn : e5.Hz,
            a = t[n] ?? {},
            { localMutes: s, localVolumes: l } = no(i);
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
function nF(e, t) {
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
    return null != e && no().videoHook && P.GH(e), { soundshareId: null, soundshareSession: null };
}
function nV() {
    let e = e5.x.DEFAULT,
        { videoToggleStateMap: t } = no(e);
    for (let [e, n] of Object.entries(t)) n === ew.bb8.AUTO_PROBING && delete t[e];
    nO({ videoToggleStateMap: t }, e, !1);
}
function nB(e) {
    let { enabled: t } = eH.A.getConfig({ location: "MediaEngineStore" });
    return !0 === e.enabled && t && td.supports(e5.O5.SPATIAL_AUDIO);
}
function nH(e) {
    (tZ = nB(e)), td.setAudioMixerOptions({ ...e, enabled: tZ });
}
function nj(e) {
    let t = no(),
        n = td.getAudioSubsystem(),
        r = td.getAudioLayer(),
        a = nU(tm, t.inputDeviceId),
        s = tm[a]?.name,
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
function nW() {
    let e = no(),
        t = t2.size > 0,
        n = e.inputDeviceId,
        i = eZ.A.hasEchoCancellation(n) || e.echoCancellation,
        r = eZ.A.hasNoiseSuppression(n) || e.noiseSuppression,
        a = nf(eZ.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation;
    td.setLoopback(t, {
        echoCancellation: i,
        echoCancellationPreEcho: !t,
        noiseSuppression: r,
        automaticGainControlConfig: a,
        noiseCancellation: s,
    }),
        nm();
}
async function nY() {
    if (!td.supports(e5.O5.VAAPI) || window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let e = await window.DiscordNative.processUtils.getSystemInfo();
    (e.electronGPUInfo?.gpuDevice ?? []).some((e) => 4098 === e.vendorId) &&
        ((nn = !0), (nt = td.supports(e5.O5.GAMESCOPE_CAPTURE)));
}
function nK() {
    return (tB || !1) && !tH;
}
async function n$() {
    try {
        await p.Ay.ensureModule("discord_krisp");
        let e = p.Ay.requireModule("discord_krisp");
        (tB = !0),
            (c = e.getSdkVersion?.()),
            (u = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (tj = e), i.emitChange();
            }),
            i.emitChange(),
            await p.Ay.ensureModule("discord_voice");
        let t = p.Ay.requireModule("discord_voice");
        t.setupKrispPath?.();
    } catch (t) {
        e6.warn(`Failed to load Krisp module: ${t.message}`), eY.A.captureException(t);
        let e = e5.CO.KRISP_INIT_ERROR;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? e5.CO.KRISP_INIT_ERROR : n;
        }
        (0, V.QW)({ type: V.iy.NOISE_CANCELLER_ERROR, underlyingError: nE(e) }),
            eU.default.track(ew.HAw.VOICE_PROCESSING, { noise_canceller_error: e });
    } finally {
        tV = !1;
    }
}
async function nz() {
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
function nZ(e) {
    e === e5.rB.AUTOMATIC
        ? (nO({ automaticAudioSubsystem: !0 }), nq())
        : (nO({ automaticAudioSubsystem: !1 }), td.setAudioSubsystem(e));
}
function nq() {
    td.queueAudioSubsystem(e5.rB.EXPERIMENTAL);
}
function nX(e) {
    let { section: t } = e;
    return t === ew.nc_.VOICE && ny(), !1;
}
class nQ extends L.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        let e;
        if (
            ((l ??= new e_(td, this)),
            tN.start(tt, () => {
                e6.error("Device enumeration timed out"), eU.default.track(ew.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
            }),
            td.on(y.bg.Connection, (e) => {
                let t;
                nW(), nd(e), nu(e), ng(e);
                let n = no();
                e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers),
                    e.setQoS(n.qos),
                    (0, f.isWindows)()
                        ? (e.setExperimentFlag(e5.fd.H265_HARDWARE_ONLY, !0),
                          (null != tQ
                              ? tQ
                              : "u" > typeof window
                                ? (tQ = ns().then((e) => ((tX = e), e)))
                                : Promise.resolve(!1)
                          ).then((t) => {
                              e.setExperimentFlag(e5.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                          }))
                        : (0, f.isMac)() && e.setExperimentFlag(e5.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                    (0, f.isLinux)() && n.openH264Enabled && e.setExperimentFlag(e5.fd.USE_LIBOPENH264_DECODER, !0),
                    (function (e) {
                        let { location: t, disable: n = !1 } = e;
                        return n ? eh.definition.defaultConfig : eh.getConfig({ location: t });
                    })({ location: "setupMediaEngine" }).enabled &&
                        e.setExperimentFlag(e5.fd.LOW_LATENCY_RATE_CONTROL, !0),
                    e.setExperimentFlag(e5.fd.RESET_DECODER_ON_ERRORS, !0),
                    e.setExperimentFlag(e5.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
                let { swallowVolumeOnlySpeakingEvents: r } = w.A.getConfig({ location: "MediaEngineStore" });
                if (
                    (r && e.setExperimentFlag(e5.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === e5.x.STREAM)
                ) {
                    let t = nx(tg);
                    e.setSoundshareDiscardRearChannels(t);
                }
                if ((0, f.isWindows)())
                    e.setExperimentFlag(e5.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(e5.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e5.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                else if ((0, f.isMac)())
                    e.setExperimentFlag(e5.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e5.fd.SIGNAL_AV1_HARDWARE_DECODE, !0),
                        e.setExperimentFlag(
                            e5.fd.H265_DISABLE_ENCODE,
                            !(
                                window?.DiscordNative?.os.arch === "arm64" &&
                                O().satisfies(window?.DiscordNative?.os.release, e5.Dk)
                            ),
                        );
                else if ((0, f.isLinux)()) {
                    let { enabled: t } = Z.getConfig({ location: "MediaEngineStore" });
                    t && e.setExperimentFlag(e5.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(e5.fd.SIGNAL_AV1_DECODE, !0);
                } else
                    ((0, f.isIOS)() || (0, f.isAndroid)()) &&
                        (e.setExperimentFlag(e5.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e5.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
                if ((0, f.isWeb)()) {
                    let { enabled: t } = et.getConfig({ location: "MediaEngineStore" });
                    e.setExperimentFlag(e5.fd.BROWSER_HEVC, t);
                }
                for (let r of ((0, f.isWindows)() &&
                    t5?.startsWith("AMD") &&
                    ey("MediaEngineStore").enabled &&
                    e.setExperimentFlag(e5.fd.WMF_GPU_ENCODE, !0),
                (0, f.isWindows)() &&
                    t5?.startsWith("Intel") &&
                    !0 === t4 &&
                    1 === t6 &&
                    eD.getConfig({ location: "MediaEngineStore" }).enabled &&
                    (e.setExperimentFlag(e5.fd.WMF_GPU_ENCODE, !0), e.setExperimentFlag(e5.fd.INTEL_GPU_DISABLE, !0)),
                (0, f.isWindows)() &&
                    t5?.startsWith("Intel") &&
                    !0 === t4 &&
                    1 === t6 &&
                    eO.getConfig({ location: "MediaEngineStore" }).enabled &&
                    e.setExperimentFlag(e5.fd.INTEL_GPU_DISABLE, !0),
                (0, f.isWindows)() &&
                    t5?.startsWith("Qualcomm") &&
                    ey("MediaEngineStore").enabled &&
                    e.setExperimentFlag(e5.fd.WMF_GPU_ENCODE, !0),
                td.setHasFullbandPerformance(null === (t = (0, F.A)()) || t >= 31),
                e.setRemoteAudioHistory(1e3),
                (0, x.A)(i) && e.setClipsKeyFrameInterval(e5.X1),
                (n = no(e.context)),
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
                e.on(y.yq.Speaking, (t, n, i, r) => {
                    b.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: r });
                }),
                    e.context === e5.x.DEFAULT &&
                        ((tM = !1),
                        e.on(y.yq.SpeakingWhileMuted, () => {
                            let e = !tM;
                            (tM = !0),
                                e && i.emitChange(),
                                tP.start(te, () => {
                                    (tM = !1), i.emitChange();
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
                    e.on(y.yq.NoiseCancellationError, nh),
                    e.on(y.yq.VoiceActivityDetectorError, nh),
                    e.on(y.yq.SdpError, (e, t, n, i) => {
                        eU.default.track(ew.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: i });
                    }),
                    e.on(y.yq.VideoState, (t) => {
                        b.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                    }),
                    e.setBitRate(ez.A.bitrate),
                    e.applyVideoQualityMode(eJ.A.mode),
                    (0, f.isWindows)() &&
                        td.supports(e5.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                        td.setAsyncVideoInputDeviceInit(!0);
            }),
            td.on(y.bg.DeviceChange, (e, t, n) => {
                tN.stop(),
                    b.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
            }),
            td.on(y.bg.VolumeChange, (e, t) => {
                b.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
            }),
            td.on(y.bg.DesktopSourceEnd, (e, t) => {
                b.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
            }),
            td.on(y.bg.AudioPermission, (e) => {
                (tJ = !0), b.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
            }),
            td.on(y.bg.VideoPermission, (e) => {
                b.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
            }),
            td.on(y.bg.WatchdogTimeout, async () => {
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
                    D.w.set("discord_watchdog_restart_timestamp", Date.now().toString()),
                    M.A.app.relaunch());
            }),
            td.on(y.bg.VideoInputInitialized, (e) => {
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
            td.on(y.bg.AudioInputInitialized, (e) => {
                eU.default.track(ew.HAw.AUDIO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_initialized_ms: Math.round(e.timeToInitialized * eW.A.Millis.SECOND),
                    rtc_connection_id: eX.A.getRTCConnectionId(),
                });
            }),
            td.on(y.bg.ClipsRecordingRestartNeeded, () => {
                b.h.dispatch({ type: "CLIPS_RESTART" });
            }),
            td.on(y.bg.ClipsInitFailure, (e, t) => {
                let n = tI < 3;
                (tI += 1),
                    b.h.wait(() => {
                        b.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t }),
                            n
                                ? b.h.dispatch({ type: "CLIPS_RESTART" })
                                : e6.warn(
                                      `Clips init failure budget exhausted (${tI} consecutive unhealthy attempts); skipping auto-restart. A settings flip / game change / app restart will retry.`,
                                  );
                    });
            }),
            td.on(y.bg.ClipsRecordingHealthy, () => {
                0 !== tI && (e6.info(`Clips bridge reported healthy; resetting restart budget (was ${tI}).`), (tI = 0));
            }),
            td.on(y.bg.ClipsRecordingReadyChanged, (e) => {
                tf !== e && (e6.info(`Clips recorder ready changed: ${e}`), (tf = e));
            }),
            td.on(y.bg.ClipsBridgeIdleShutdown, () => {
                e6.info("Clips bridge idle shutdown");
            }),
            td.on(y.bg.ClipsRecordingEnded, (e, t) => {
                s?.desktopSource?.id === e &&
                    (null != t && a?.desktopSource?.soundshareId !== t && P.c1(t), (s = null));
            }),
            td.on(y.bg.NativeScreenSharePickerUpdate, (e, t) => {
                b.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
            }),
            td.on(y.bg.NativeScreenSharePickerCancel, (e) => {
                b.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
            }),
            td.on(y.bg.NativeScreenSharePickerError, (e) => {
                b.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
            }),
            td.on(y.bg.AudioDeviceModuleError, (e, t, n) => {
                eU.default.track(ew.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
            }),
            td.on(y.bg.VideoCodecError, (e) => {
                let t = "encode" === e.mode ? V.iy.VIDEO_ENCODE_ERROR : V.iy.VIDEO_DECODE_ERROR,
                    n = { videoCodec: e.codecStandard, errorMessage: e.message };
                (0, V.QW)(
                    t === V.iy.VIDEO_ENCODE_ERROR
                        ? { type: t, ...n, videoEncoder: e.implName }
                        : { type: t, ...n, videoDecoder: e.implName },
                );
            }),
            td.on(y.bg.ConnectionStats, (e) => {
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
            td.on(y.bg.VoiceProcessingError, nh),
            td.on(y.bg.VideoFilterError, nI),
            td.on(y.bg.VoiceQueueMetrics, (e) => {
                let t = nJ(e);
                null !== t && eU.default.track(ew.HAw.VOICE_QUEUE_METRICS, t);
            }),
            td.setOnVideoContainerResized((e, t, n) => {
                b.h.wait(() =>
                    b.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
                );
            }),
            nY(),
            l.reset(),
            (0, ek.w)().then((e) => {
                null != e && ((t5 = e.gpu_brand), (t4 = e.has_intel_hybrid_igpu), (t6 = e.gpu_count));
            }),
            td.on(y.bg.SystemMicrophoneModeChange, (e) => {
                (E = e), td.eachConnection(ng), i.emitChange();
            }),
            null != (e = D.w.get("audio")) && (D.w.set(e7, { [e5.x.DEFAULT]: e }), D.w.remove("audio")),
            (tu = D.w.get(e7) ?? {}),
            S().each(tu, (e) => {
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
                    td.supports(e5.O5.SIDECHAIN_COMPRESSION) &&
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
            nL(),
            ((0, f.isWindows)() || (0, f.isLinux)() || (0, f.isMac)()) && !__OVERLAY__ && !tV && !tB
                ? ((tV = !0), n$())
                : (0, f.isWeb)() && td.supports(e5.O5.NOISE_CANCELLATION)
                  ? ((tB = !0), i.emitChange())
                  : (0, f.isWeb)() && nO({ noiseCancellation: !1 }),
            (0, f.isLinux)() && nz(),
            nV(),
            (0, f.isDesktop)() && f.isPlatformEmbedded && !ni)
        ) {
            async function t() {
                let e = await new Promise((e) => {
                    p.Ay.pollQueueMetrics((t) => {
                        e(t);
                    });
                });
                e.periodMs = e5.tl;
                let n = nJ(e);
                null !== n && eU.default.track(ew.HAw.VOICE_QUEUE_METRICS, n), setTimeout(t, e5.tl);
            }
            (ni = !0), setTimeout(t, e5.tl);
        }
        (0, f.isWindows)() &&
            f.isPlatformEmbedded &&
            null === tT &&
            td
                .getCodecSurvey()
                .then((e) => {
                    try {
                        let t = JSON.parse(e);
                        if (null == t || null == t.available_video_decoders)
                            throw Error("decoder survey is not available");
                        tT = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                    } catch (e) {
                        e6.error("Failed to parse codec survey", e), (tT = !1);
                    }
                })
                .catch((e) => {
                    e6.error("Failed to get codec survey", e), (tT = !1);
                })
                .finally(() => {
                    b.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
                }),
            (t3 = {
                [e5.O5.VIDEO]: td.supports(e5.O5.VIDEO),
                [e5.O5.DESKTOP_CAPTURE]: td.supports(e5.O5.DESKTOP_CAPTURE),
                [e5.O5.HYBRID_VIDEO]: td.supports(e5.O5.HYBRID_VIDEO),
            }),
            this.waitFor(e$.default, ez.A, eZ.A, eq.A, G.Ay, B.A, eX.A, j.Ay, eF.A, eQ.default, eJ.A);
    }
    supports(e) {
        return (e !== e5.O5.VIDEO || !!tc("MediaEngineStore.supports")) && td.supports(e);
    }
    supportsInApp(e) {
        return (e !== e5.O5.VIDEO || !!tc("MediaEngineStore.supportsInApp")) && (t3[e] || td.supports(e));
    }
    isSupported() {
        return td.supported();
    }
    isNoiseSuppressionSupported() {
        return td.supports(e5.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return nK();
    }
    isNoiseCancellationError() {
        return tK;
    }
    isAutomaticGainControlSupported() {
        return td.supports(e5.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nR() && (td.supports(e5.O5.LEGACY_AUDIO_SUBSYSTEM) || td.supports(e5.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return td.supports(e5.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === td.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return nK();
    }
    isAecDumpSupported() {
        return td.supports(e5.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return td.supports(e5.O5.VIDEO) && td.supports(e5.O5.SIMULCAST);
    }
    getAecDump() {
        return no().aecDumpEnabled;
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
        return tW;
    }
    isEnabled() {
        return tE;
    }
    isMute() {
        return this.isSelfMute() || tC;
    }
    isDeaf() {
        return this.isSelfDeaf() || tL;
    }
    isServerMute() {
        return tC;
    }
    isServerDeaf() {
        return tL;
    }
    getAudioMixerSettings() {
        return no().audioMixerSettings;
    }
    isSpatialAudioEnabled() {
        return !0 === this.getAudioMixerSettings().enabled;
    }
    isSpatialAudioActive() {
        return tZ;
    }
    hasContext(e) {
        return null != tu[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e5.x.DEFAULT;
        return e === e5.x.DEFAULT && tR;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e5.x.DEFAULT;
        return (
            !this.isEnabled() ||
            no(e).mute ||
            !eb.A.didHavePermission(e0.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === e5.x.DEFAULT && tO)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tb;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tb = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e5.x.DEFAULT,
            t = t8 && "voice_isolation" !== this.getSystemMicrophoneMode() && no(e).mode === ew.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (eZ.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return t7;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e5.x.DEFAULT;
        return !this.isSupported() || no(e).deaf;
    }
    isVideoEnabled() {
        return ty && tw;
    }
    isVideoAvailable() {
        return Object.values(tS).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return tw;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e5.x.STREAM;
        return th === e && null != a;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e5.x.STREAM;
        return th === e && null != a && a.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e5.x.DEFAULT;
        return e !== e$.default.getId() && (no(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return td.supports(e5.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e5.x.DEFAULT;
        return no(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e5.x.DEFAULT;
        return no(t).videoToggleStateMap[e] ?? ew.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e5.x.DEFAULT;
        return t === e5.x.DEFAULT && t0.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e5.x.DEFAULT;
        return e === e5.x.DEFAULT && t0.size > 0;
    }
    isMediaFilterSettingLoading() {
        return t$;
    }
    isNativeAudioPermissionReady() {
        return tJ;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return th;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return tp;
    }
    isH264MfDecodeAvailable() {
        return tT;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e5.x.DEFAULT,
            n = no(t).localPans[e];
        return null != n ? n : e8;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e5.x.DEFAULT,
            n = t === e5.x.STREAM ? e5.Cn : e5.Hz,
            i = no(t).localVolumes[e];
        return null != i ? i : n;
    }
    getInputVolume() {
        return no().inputVolume;
    }
    getOutputVolume() {
        return no().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e5.x.DEFAULT;
        return no(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e5.x.DEFAULT;
        return no(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            S().each(tu, (t, n) => {
                let {
                    mode: i,
                    modeOptions: { shortcut: r },
                } = t;
                i === ew.TBI.PUSH_TO_TALK && t_.has(n) && (e[n] = r);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nU(tm, no().inputDeviceId);
    }
    getOutputDeviceId() {
        return nU(tg, no().outputDeviceId);
    }
    getVideoDeviceId() {
        return nU(tS, no().videoDeviceId);
    }
    getInputDevices() {
        return tm;
    }
    getOutputDevices() {
        return tg;
    }
    getVideoDevices() {
        return tS;
    }
    getEchoCancellation() {
        let e = no();
        return eZ.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return td.supports(e5.O5.SIDECHAIN_COMPRESSION) && no().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return no().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return no().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tX && tX;
    }
    getOpenH264Enabled() {
        return (0, f.isLinux)() && no().openH264Enabled;
    }
    getLoopback() {
        return t2.size > 0;
    }
    getLoopbackReasons() {
        return t2;
    }
    getNoiseSuppression() {
        let e = no();
        return eZ.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = no();
        return eZ.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return no().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return no().noiseCancellation;
    }
    getHardwareEncoding() {
        return !0;
    }
    getEnableSilenceWarning() {
        return no().silenceWarning;
    }
    getDebugLogging() {
        return td.getDebugLogging();
    }
    getQoS() {
        return no().qos;
    }
    getAttenuation() {
        return no().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return no().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return no().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return nC() && no().automaticAudioSubsystem ? e5.rB.AUTOMATIC : td.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return td.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return no().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === e3.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e5.x.DEFAULT;
        return no(e);
    }
    getState() {
        return {
            settingsByContext: tu,
            inputDevices: tm,
            outputDevices: tg,
            appSupported: t3,
            krispModuleLoaded: tB,
            krispFatalError: tH,
            krispVersion: c,
            krispSuppressionLevel: u,
            goLiveSource: a,
            goLiveContext: th,
        };
    }
    getInputDetectedThisConnection() {
        return tG;
    }
    getInputDetected() {
        return l.inputDetected;
    }
    getLastInputDetectedUpdateTime() {
        return l.lastUpdateTime;
    }
    getNoInputDetectedNotice() {
        return tx;
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
        return tA;
    }
    getVideoHook() {
        return no().videoHook;
    }
    supportsVideoHook() {
        return td.supports(e5.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = no().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return td.supports(e5.O5.EXPERIMENTAL_SOUNDSHARE) && O().satisfies(M.A?.os.release, ec.$x);
    }
    supportsHookSoundshare() {
        return (0, f.isWindows)() && td.supports(e5.O5.SOUNDSHARE) && O().satisfies(M.A?.os.release, ec.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = no().useSystemScreensharePicker,
            n = (0, f.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return td.supports(e5.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return nn;
    }
    getVideoEncoderExperiments(e, t) {
        let n = ["unk"];
        if (
            (n.push("nvNewPresets"),
            e === e5.x.STREAM ? n.push("nvRelaxRc=250") : n.push("nvRelaxRc=75"),
            this.getUseVaapiEncoder() && n.push("vaapi"),
            (function (e) {
                let { location: t, disable: n = !1 } = e;
                return n ? ef.definition.defaultConfig : ef.getConfig({ location: t });
            })({ location: "getVideoEncoderExperiments" }).enabled && n.push("nvReconFrames"),
            e === e5.x.STREAM && "streamer" === t && (0, f.isWindows)())
        ) {
            n.push("useCaptureDeviceForEncode");
            let { overrideDeviceReuse: e } = eg.getConfig({ location: "handleReady" });
            e && n.push("videoCaptureDeviceOverrideReuse");
        }
        return n.push("linux-vulkan"), n.join(",");
    }
    getUseGamescopeCapture() {
        return nt;
    }
    getSpeakingWhileMuted() {
        return tM;
    }
    getKrispModelOverride() {
        return _;
    }
    getKrispModels() {
        return tj;
    }
    getKrispVadActivationThreshold() {
        return no().modeOptions.vadKrispActivationThreshold ?? 0.5;
    }
    hasActiveCallKitCall() {
        return ne;
    }
    setHasActiveCallKitCall(e) {
        ne = e;
    }
    supportsScreenSoundshare() {
        return (0, f.isMac)()
            ? td.supports(e5.O5.SOUNDSHARE) && O().satisfies(M.A?.os.release, ec.P$) && nN()
            : (0, f.isWindows)()
              ? td.supports(e5.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, f.isLinux)() && td.supports(e5.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, f.isWindows)()) {
            if (this.getBypassSystemInputProcessing()) return;
            return tq[this.getInputDeviceId()]?.active?.find((e) => "deep_noise_suppression" === e);
        }
        if ((0, f.isMac)() || (0, f.isIOS)()) return E;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e5.x.DEFAULT,
            t = this.supports(e5.O5.VIDEO)
                ? [{ rid: "100", type: e === e5.x.DEFAULT ? e5.mI.VIDEO : e5.mI.SCREEN, quality: e5.Y4 }]
                : [];
        return (
            this.isSimulcastSupported() &&
                e === e5.x.DEFAULT &&
                en.getConfig({ location: "MediaEngineStore.getVideoStreamParameters" }).enableSimulcast &&
                t.push({ rid: "50", type: e5.mI.VIDEO, quality: e5.Cl }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: (0, f.isWeb)() };
        return td.fetchAsyncResources(e);
    }
    startDavePreload() {
        !tz &&
            ((tz = !0),
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
        return tf;
    }
    isClipsRecordingReadySignalSupported() {
        return td.supports(e5.O5.CLIPS_RECORDING_READY_EVENTS);
    }
    getGpuBrand() {
        return t5;
    }
}
function nJ(e) {
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
let n0 = (i = new nQ(b.h, {
    VOICE_CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n, currentVoiceChannelId: i, video: r } = e;
        if ((i !== n && n_(r, null), null != t || null == n)) {
            tF = !1;
            return;
        }
        if (tF) return;
        tF = !0;
        let a = no();
        (a.mute || a.deaf) && (nO({ deaf: !1, mute: !1 }), td.eachConnection(nu));
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (r === t.sessionId) {
                (tC = t.mute || t.suppress), (tL = t.deaf), td.eachConnection(nu);
                let e = null != t.guildId && null != t.channelId && null != tY && tY !== t.channelId,
                    n = !tF && null == t.channelId;
                return n_(!e && !n && ty), (tY = t.channelId), !0;
            }
            return __OVERLAY__ || t.userId !== e$.default.getId() || null != eX.A.getChannelId() || n_(!1, null), e;
        }, !1);
    },
    CONNECTION_OPEN: function (e) {
        (r = e.sessionId), (tC = !1), (tL = !1);
        let t = no();
        nC() && (nR() ? nZ(e5.rB.AUTOMATIC) : t.automaticAudioSubsystem && nq()),
            td.supports(e5.O5.OFFLOAD_ADM_CONTROLS) && td.setOffloadAdmControls(!0),
            (0, f.isIOS)() &&
                el.getConfig({ location: "handleConnectionOpen" }).enabled &&
                td.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
            (0, f.isIOS)() && (td.setNcModels?.(eA.getConfig({ location: "setupKrisp" }).models), i.emitChange()),
            nw(t.inputDeviceId),
            nk();
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
                ny();
                break;
            case ew.S7L.RTC_CONNECTING:
                (tx = !1), (o = void 0), (d = void 0), (tG = !1), (t8 = !1), t9.stop(), tk.stop(), l.reset();
                break;
            case ew.S7L.RTC_CONNECTED:
                n_();
                break;
            case ew.S7L.DISCONNECTED:
                (nr = {}),
                    (function () {
                        if (0 === t0.size) return;
                        let e = e5.x.DEFAULT,
                            { disabledLocalVideos: t } = no(e);
                        t0.forEach((n) => {
                            m()(t[n], "If you are auto-disabled, then you are also disabled."),
                                delete t[n],
                                td.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
                        }),
                            t0.clear(),
                            nO({ disabledLocalVideos: t }, e, !1);
                    })(),
                    nV();
        }
    },
    AUDIO_SET_TEMPORARY_SELF_MUTE: function (e) {
        let { mute: t } = e;
        (tR = t), td.eachConnection(nu);
    },
    AUDIO_TOGGLE_SELF_MUTE: function (e) {
        let { context: t, playSoundEffect: n } = e,
            { mute: i, deaf: r } = no(t);
        if (t === e5.x.DEFAULT && (eb.A.requestPermission(e0.iL.AUDIO), tO)) return !1;
        (i = !r && !i) || (r = !1), n || (tb = !0), nO({ mute: i, deaf: r }, t), td.eachConnection(nu);
    },
    AUDIO_SET_SELF_MUTE: function (e) {
        let { context: t, mute: n, playSoundEffect: i } = e;
        nO({ mute: n }, t), i || (tb = !0), td.eachConnection(nu);
    },
    AUDIO_TOGGLE_SELF_DEAF: function (e) {
        let { context: t } = e;
        nO({ deaf: !no(t).deaf }, t), td.eachConnection(nu);
    },
    AUDIO_TOGGLE_LOCAL_MUTE: function (e) {
        let { context: t, userId: n } = e;
        if (n === e$.default.getId()) return;
        let { localMutes: i } = no(t);
        i[n] ? delete i[n] : (i[n] = !0),
            nO({ localMutes: i }, t),
            td.eachConnection((e) => e.setLocalMute(n, i[n] || !1), t);
    },
    AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
        let { context: t, userId: n, videoToggleState: i, persist: r, isAutomatic: a } = e;
        m()(!(r && a), "These are not allowed to both be true.");
        let s = i === ew.bb8.DISABLED,
            { disabledLocalVideos: l } = no(t),
            o = l[n] ?? !1,
            d = t0.has(n),
            c = i === ew.bb8.AUTO_ENABLED || i === ew.bb8.MANUAL_ENABLED;
        e6.info(`disableVideo=${s} currentlyDisabled=${o} currentlyAutoDisabled=${d}, isVideoShown=${c}`),
            m()(!(d && !o), "If you are auto-disabled, then you are also disabled.");
        let u = s !== o,
            _ = t === e5.x.DEFAULT,
            E = a && u && _,
            A = r && u && _;
        e6.info(`changed=${u} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${E} isManualToggleByUser=${A}`);
        let { videoToggleStateMap: h } = no(t);
        if (
            (h[n] === ew.bb8.AUTO_PROBING &&
                i === ew.bb8.AUTO_ENABLED &&
                (0, ev.A)(n, s ? e5.Al.AUTO_DISABLE : e5.Al.AUTO_ENABLE, c),
            (h[n] = i),
            nO({ videoToggleStateMap: h }, t, r),
            i === ew.bb8.AUTO_PROBING
                ? eX.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
                : eX.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
            t1 ||
                (e6.info(`isAutoDisableAllowed=${t1} - disabling VideoHealthManager`),
                eX.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
            E)
        ) {
            if ((!s && !d) || (s && !t1)) return;
            (0, ev.A)(n, s ? e5.Al.AUTO_DISABLE : e5.Al.AUTO_ENABLE, c), s ? t0.add(n) : t0.delete(n);
        } else
            A &&
                (d && !s
                    ? (e6.info("disallowing auto-disable for this session because of manual override by user"),
                      (t1 = !1),
                      eX.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                      (0, ev.A)(n, e5.Al.MANUAL_REENABLE, c))
                    : (0, ev.A)(n, s ? e5.Al.MANUAL_DISABLE : e5.Al.MANUAL_ENABLE, c));
        _ && !s && t0.delete(n),
            s ? (l[n] = !0) : delete l[n],
            nO({ disabledLocalVideos: l }, t, r),
            td.eachConnection((e) => e.setLocalVideoDisabled(n, l[n] ?? !1), t);
    },
    AUDIO_SET_LOCAL_VOLUME: function (e) {
        let { context: t, userId: n, volume: i } = e;
        if (n === e$.default.getId()) return;
        let r = t === e5.x.STREAM ? e5.Cn : e5.Hz,
            { localVolumes: a } = no(t);
        i === r ? delete a[n] : (a[n] = i),
            nO({ localVolumes: a }, t),
            td.eachConnection((e) => e.setLocalVolume(n, i), t);
    },
    AUDIO_SET_AUDIO_MIXER_SETTINGS: function (e) {
        let { context: t, settings: n } = e;
        nO({ audioMixerSettings: n }, t), nH(n), td.eachConnection((e) => e.setSpatialAudioEnabled(tZ), e5.x.DEFAULT);
    },
    AUDIO_SET_LOCAL_PAN: function (e) {
        let { context: t, userId: n, left: i, right: r } = e,
            { localPans: a } = no(t);
        (a[n] = { left: i, right: r }), nO({ localPans: a }, t), td.eachConnection((e) => e.setLocalPan(n, i, r), t);
    },
    AUDIO_SET_MODE: function (e) {
        let { context: t, mode: n, options: i } = e;
        nO({ mode: n, modeOptions: { ...i, updatedAt: Date.now() } }, t), td.eachConnection(nd);
    },
    AUDIO_SET_INPUT_VOLUME: function (e) {
        let { volume: t } = e;
        nO({ inputVolume: nc(t) }), td.setInputVolume(t);
    },
    AUDIO_SET_OUTPUT_VOLUME: function (e) {
        let { volume: t } = e;
        nO({ outputVolume: t }), td.setOutputVolume(t);
    },
    AUDIO_SET_INPUT_DEVICE: function (e) {
        let { id: t } = e;
        (t = nU(tm, t)),
            (tp = performance.now()),
            nO({ inputDeviceId: t }),
            nG(t),
            td.eachConnection(ng),
            (o = void 0),
            (d = void 0),
            t9.stop(),
            (t8 = !1);
        let { resetSilenceWarningOnDeviceChange: n } = ep.A.getConfig({
            location: "MediaEngineStore.handleSetInputDevice",
        });
        n && ((tG = !1), l.reset());
    },
    AUDIO_SET_OUTPUT_DEVICE: function (e) {
        let { id: t } = e;
        nO({ outputDeviceId: (t = nU(tg, t)) }), td.setAudioOutputDevice(t), td.eachConnection(ng);
    },
    AUDIO_SET_ACTIVE_INPUT_PROFILE: function (e) {
        let { inputProfile: t } = e;
        nO({ activeInputProfile: t });
        let n = no();
        td.eachConnection((e) => {
            nd(e), ng(e);
        }),
            td.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
            nW();
    },
    AUDIO_SET_ECHO_CANCELLATION: function (e) {
        let t = nO({ echoCancellation: e.enabled }),
            n = eZ.A.hasEchoCancellation(t.inputDeviceId) || t.echoCancellation;
        td.eachConnection((e) => e.setEchoCancellation(n)), nW(), nj(e.location);
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
        return t ? t2.add(n) : t2.delete(n), nW();
    },
    AUDIO_SET_NOISE_SUPPRESSION: function (e) {
        let t = nO({ noiseSuppression: e.enabled }),
            n = eZ.A.hasNoiseSuppression(t.inputDeviceId) || t.noiseSuppression;
        td.eachConnection((e) => e.setNoiseSuppression(n)), nW(), nj(e.location);
    },
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function (e) {
        let t = nO({ automaticGainControl: e.enabled });
        td.eachConnection((e) => np(e, t.automaticGainControl)), nW(), nj(e.location);
    },
    AUDIO_SET_NOISE_CANCELLATION: function (e) {
        let t = nO({ noiseCancellation: e.enabled });
        td.eachConnection((e) => nT(e, t.noiseCancellation)), nW(), nj(e.location);
    },
    AUDIO_SET_KRISP_MODEL_OVERRIDE: function (e) {
        eM.A.setKrispModelOverride(e.model), (_ = e.model), nW();
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
        (0, f.isWeb)() || ((tW = e.enabled), td.setNoiseCancellationEnableStats?.(e.enabled));
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
        let t = tm;
        if (
            ((tm = nP(e, { deviceType: e5.oh.AUDIO_INPUT, defaultName: e4.intl.string(e4.t["/QIjDA"]) })),
            !S().isEqual(tm, t))
        ) {
            let e = no();
            nG(nU(tm, e.inputDeviceId)), td.eachConnection(ng);
        }
        !(function (e) {
            let t = tg;
            if (
                ((tg = nP(e, { deviceType: e5.oh.AUDIO_OUTPUT, defaultName: e4.intl.string(e4.t.xlUg0v) })),
                !S().isEqual(tg, t))
            ) {
                let e = no(),
                    n = nU(tg, e.outputDeviceId);
                td.setAudioOutputDevice(n), td.eachConnection(ng);
                let i = nx(t),
                    r = nx(tg);
                i !== r &&
                    td.eachConnection((e) => {
                        e.context === e5.x.STREAM && e.setSoundshareDiscardRearChannels(r);
                    });
            }
        })(e);
        tw = e.videoDevices.length > 0;
        let n = tS;
        if (
            ((tS = nP(e, { deviceType: e5.oh.VIDEO_INPUT, defaultName: e4.intl.string(e4.t.WKWARY) })),
            ty && !S().isEqual(tS, n))
        ) {
            let e = void 0 !== tS[tD],
                t = tD === e5.dx && n[e5.dx]?.disabled,
                i = "Firefox" === C().name && "" === tD && n[tD]?.name === "Default" && !n[tD]?.disabled;
            n_(e || t || i);
        }
    },
    AUDIO_VOLUME_CHANGE: function (e) {
        let { inputVolume: t, outputVolume: n } = e;
        nO({ inputVolume: nc(t), outputVolume: n });
    },
    AUDIO_RESET: function () {
        D.w.remove(e7), location.reload();
    },
    AUDIO_INPUT_DETECTED: function (e) {
        let { inputDetected: t } = e;
        if (null == t) return !1;
        if (((tx = !0 !== tG && !t), t)) (tG = !0), (t8 = !1), t9.stop(), tk.stop();
        else if (no().mode === ew.TBI.VOICE_ACTIVITY && tG) {
            let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = ep.A.getConfig({
                location: "MediaEngineStore.handleInputDetected",
            });
            e &&
                t9.start(tn, () => {
                    eU.default.track(ew.HAw.HARDWARE_MUTE_GUESSED, {
                        input_device_name: tm[nU(tm, no().inputDeviceId)]?.name,
                        rtc_connection_id: eX.A.getRTCConnectionId(),
                    }),
                        (t8 = !0),
                        i.emitChange();
                }),
                null != t &&
                    tk.start(t * eW.A.Millis.MINUTE, () => {
                        (tG = !1), l.reset();
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
        nO({ bypassSystemInputProcessing: t }), td.setAudioInputBypassSystemProcessing(t), nm(), nj(e.location);
    },
    MEDIA_ENGINE_SET_AUDIO_ENABLED: function (e) {
        (tE = e.enabled), e.unmute && nO({ mute: !1, deaf: !1 }), td.eachConnection(nu);
    },
    MEDIA_ENGINE_SET_VIDEO_ENABLED: function (e) {
        let { enabled: t } = e;
        eb.A.requestPermission(e0.iL.CAMERA), n_(t);
    },
    MEDIA_ENGINE_PERMISSION: function (e) {
        let { kind: t, granted: n } = e;
        if (!n)
            switch (t) {
                case "audio":
                    (tE = !1), td.eachConnection(nu);
                    break;
                case "video":
                    n_(!1);
            }
    },
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
        let { settings: t } = e;
        if (t?.desktopSettings != null) {
            let e = null,
                n = null,
                { sourceId: i, sound: r } = t.desktopSettings,
                s = t.context ?? e5.x.DEFAULT,
                l = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
                o = ej.A.getPidFromDesktopSource(i);
            f.isPlatformEmbedded && ({ soundshareId: e, soundshareSession: n } = nF(o, r)),
                s !== th && (null != a && td.setGoLiveSource(null, th), (th = s)),
                n_(s === e5.x.STREAM && ty, {
                    desktopSource: { id: i, sourcePid: o, soundshareId: e, soundshareSession: n },
                    quality: { resolution: l.resolution, frameRate: l.frameRate },
                });
        } else if (t?.cameraSettings != null) {
            let e = t.context ?? e5.x.DEFAULT,
                { videoDeviceGuid: n, audioDeviceGuid: i, sound: r } = t.cameraSettings,
                a = e === e5.x.STREAM && ty,
                s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
            n_(a, {
                cameraSource: { videoDeviceGuid: n, audioDeviceGuid: i, sound: r },
                quality: { resolution: s.resolution, frameRate: s.frameRate },
            });
        } else n_(ty, null);
    },
    MEDIA_ENGINE_SET_VIDEO_DEVICE: function (e) {
        let { id: t } = e;
        nO({ videoDeviceId: (t = nU(tS, t)) }), n_();
    },
    MEDIA_ENGINE_INTERACTION_REQUIRED: function (e) {
        return tA !== e.required && ((tA = e.required), e.required || td.interact(), !0);
    },
    USER_SETTINGS_MODAL_INIT: nX,
    USER_SETTINGS_MODAL_SET_SECTION: nX,
    CERTIFIED_DEVICES_SET: function () {
        return td.eachConnection(ng), !1;
    },
    RPC_APP_CONNECTED: function (e) {
        let { application: t } = e;
        t_.add(t.id);
    },
    RPC_APP_DISCONNECTED: function (e) {
        let { application: t } = e;
        t_.delete(t.id);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { mediaEngineState: t } = e;
        (tu = t.settingsByContext),
            (tm = t.inputDevices),
            (tg = t.outputDevices),
            (t3 = t.appSupported),
            (tB = t.krispModuleLoaded),
            (tH = t.krispFatalError),
            (c = t.krispVersion),
            (th = t.goLiveContext);
    },
    APP_STATE_UPDATE: function (e) {
        let { state: t } = e,
            n = H.A.isEnabled();
        if (t === ew.g6G.BACKGROUND && ty && !n) (tU = !0), n_(!1);
        else {
            if (t !== ew.g6G.ACTIVE || !tU) return !1;
            (tU = !1), n_(!0);
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
        (tO = n), td.eachConnection(nu);
    },
    SET_NATIVE_PERMISSION: function (e) {
        let { state: t, permissionType: n } = e,
            i = t === e0.hL.ACCEPTED;
        switch (n) {
            case e0.iL.AUDIO:
                (tJ = !0), td.eachConnection(nu);
                break;
            case e0.iL.CAMERA:
                !i && ty && n_(!1);
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
        (tu = Object.values(e5.x).reduce((e, n) => {
            let i = ts();
            return (e[n] = S().merge(i, t[n])), e;
        }, {})),
            D.w.set(e7, tu),
            nL();
    },
    CHANNEL_DELETE: function () {
        if ((!ty && null == a) || null != eX.A.getRTCConnectionId()) return !1;
        n_(!1, null);
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: function (e) {
        if (e.code === e5.CO.KRISP_CPU_OVERUSE) {
            (nr.noiseCancellation = !1), (nr.noiseSuppression = !0);
            let e = no();
            return td.eachConnection((t) => nT(t, e.noiseCancellation)), nW(), nj(), !0;
        }
        return !1;
    },
    MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR: function (e) {
        return (
            e.code === e5.CO.KRISP_VAD_CPU_OVERUSE &&
            ((nr.modeOptions = { vadUseKrisp: !1 }), td.eachConnection((e) => nd(e)), !0)
        );
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function () {
        return !!tK && ((tK = !1), !0);
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
        let { settings: t } = e;
        td.applyMediaFilterSettings(t).finally(() => {
            (t$ = !1), i.emitChange();
        });
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function () {
        t$ = !0;
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function () {
        t$ = !1;
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            local: n,
            wasSaved: i,
        } = e;
        if (t !== e2.oD.PRELOADED_USER_SETTINGS || n || null != i) return !1;
        nk(!0);
    },
    CLIPS_INIT: function (e) {
        let { sourceId: t, applicationName: n, quality: r } = e;
        if (!(0, k.Ao)() || null == M.A || (s?.desktopSource.id === t && s.quality === r)) return !1;
        null != s &&
            (td.setClipsSource(null),
            (0, f.isWindows)() &&
                (null != s.desktopSource.soundshareId
                    ? P.c1(s.desktopSource.soundshareId)
                    : null != s.desktopSource.sourcePid && no().videoHook && P.c1(s.desktopSource.sourcePid)));
        let a = ej.A.getPidFromDesktopSource(t),
            { soundshareId: l, soundshareSession: o } = nF(a, !0);
        s = { desktopSource: { id: t, sourcePid: a, soundshareId: l, soundshareSession: o }, quality: r };
        let d = na("MediaEngineStore clips"),
            c = no().videoHook,
            u = !c || !ei.getConfig({ location: "handleClipsInit" }).enabled,
            _ = c && eN.getConfig({ location: "handleClipsInit" }).enabled,
            { minCaptureWidth: E, minCaptureHeight: A } = em.getConfig({ location: "handleClipsInit" });
        td.setClipsSource({
            desktopDescription: {
                id: s.desktopSource.id,
                soundshareId: s.desktopSource.soundshareId,
                useVideoHook: c,
                useHookFramePacer: u,
                useGraphicsCapture: nS(),
                useCaptureDeviceForEncode: !1,
                useLoopback: i.getExperimentalSoundshare(),
                useQuartzCapturer: !0,
                allowScreenCaptureKit: nN(),
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
            videoEncoderExperiments: i.getVideoEncoderExperiments(e5.x.STREAM, "streamer"),
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
        t7 = e.enabled;
    },
    MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: function (e) {
        let { deviceId: t, active: n, available: i } = e;
        (tq[t] = { active: n, available: i }), nm();
    },
}));
