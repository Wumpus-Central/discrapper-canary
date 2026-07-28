"use strict";
let i, r, a, s, l, o, d, c, u, _, E;
n.d(t, { yz: () => tr, Ay: () => nQ }), n(323874), n(14289), n(35956), n(321073);
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
    }),
    ee = (0, Y.mj)({
        name: "2025-08-browser-hevc",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    et = (0, Y.mj)({
        name: "2026-05-disable-camera-simulcast",
        kind: "user",
        defaultConfig: { enableSimulcast: !0 },
        variations: { 1: { enableSimulcast: !1 } },
    }),
    en = (0, Y.mj)({
        name: "2026-04-disable-hook-frame-pacer",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var ei = n(240921);
let er = (0, ei.Ay)({
        kind: "user",
        name: "2025-11-global-frame-pool-lock",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    ea = (0, Y.mj)({
        name: "2026-02-go-live-hdr",
        kind: "user",
        defaultConfig: { hdrCaptureMode: "never" },
        variations: { 1: { hdrCaptureMode: "always" }, 2: { hdrCaptureMode: "permittedDevicesOnly" } },
    }),
    es = (0, Y.mj)({
        name: "2026-03-ios-audio-interrupt-handling",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var el = n(574381),
    eo = n(118356),
    ed = n(325278);
let ec = new eo.Vy("InputWatcher");
class eu {
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
        if ((0, el.uF)() && R().satisfies(M.A?.os.release, ed.PH))
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
                ec.warn(`Failed to get device OS volume and/or mute state: ${e}`);
            }
    };
    handleSilence = (e) => {
        let t = !e;
        this.stateChangeTimeout.start(t ? 1500 : 5e3, async () => {
            ec.info("Silence:", e),
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
let e_ = (0, ei.Ay)({
    kind: "user",
    name: "2025-10-low-latency-rate-control",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eE = n(140175);
let eA = (0, Y.mj)({
    name: "2026-07-mkl-zen-cpu-dispatch-override",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function eh(e) {
    return eA.getConfig({ location: e });
}
(0, Y.mj)({
    name: "2026-02-mobile-volume-output-slider-removal",
    kind: "user",
    defaultConfig: { audioOutputPresent: !0, nonContextualStreamOutputPresent: !0, showTileVolumeIndicator: !1 },
    variations: { 1: { audioOutputPresent: !1, nonContextualStreamOutputPresent: !1, showTileVolumeIndicator: !0 } },
});
let eI = (0, ei.Ay)({
    kind: "user",
    name: "2026-07-nvenc-reconstructed-frames",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var ef = n(801644);
let ep = (0, Y.mj)({
        kind: "user",
        name: "2026-06-systemwide-echo-cancellation-for-people-who-refuse-to-wear-headphones",
        defaultConfig: { echoReferenceMode: "mix" },
        variations: { 1: { echoReferenceMode: "auto" } },
    }),
    eT = (0, Y.mj)({
        name: "2026-06-upscale-small-captured-frames",
        kind: "user",
        defaultConfig: { minCaptureWidth: 0, minCaptureHeight: 0 },
        variations: { 1: { minCaptureWidth: 130, minCaptureHeight: 130 } },
    }),
    em = (0, ei.Ay)({
        kind: "user",
        name: "2025-10-vad-before-processing",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eg = (0, Y.mj)({
        name: "2026-03-video-capture-device-no-reuse",
        kind: "user",
        defaultConfig: { overrideDeviceReuse: !1 },
        variations: { 1: { overrideDeviceReuse: !0 } },
    }),
    eS = (0, Y.mj)({
        name: "2026-04-video-hook-dx12",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eN = (0, Y.mj)({
        name: "2026-02-wgc-dirty-regions-all",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eC = (0, Y.mj)({
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
    eR = (0, Y.mj)({
        name: "2025-12-wmf-gpu-encode",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function eL(e) {
    return eR.getConfig({ location: e });
}
let ey = (0, Y.mj)({
    name: "2026-01-wmf-gpu-encode-intel",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eD = n(75076),
    ev = n(91777),
    eb = n(559633),
    eM = n(205106),
    eP = n(174459),
    eU = n(652215);
let ew = new eo.Vy("AudioEffects");
async function eG(e, t, n) {
    if (!(0, el.uF)()) return Promise.reject(Error("Audio effects querying not supported on non-Windows platforms"));
    try {
        let i = await n.getDeviceAudioEffects(e);
        return (
            b.h.dispatch({ type: "MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS", deviceId: t, ...i }),
            eP.default.track(eU.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, {
                succeeded: !0,
                active_effects: i.active,
                available_effects: i.available,
            }),
            i
        );
    } catch (e) {
        ew.error("Failed to probe audio effects for device", e),
            eP.default.track(eU.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, { succeeded: !1 });
    }
}
var ex = n(967347),
    ek = n(617617),
    eF = n(125325),
    eV = n(499156),
    eB = n(738566),
    eH = n(353835),
    ej = n(927813),
    eW = n(38405),
    eY = n(350535),
    eK = n(280450),
    e$ = n(131319),
    ez = n(347481),
    eq = n(734057),
    eZ = n(763827),
    eX = n(287809),
    eQ = n(117549),
    eJ = n(765682);
let e0 = {
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
var e1 = n(355097),
    e2 = n(621380),
    e3 = n(731854),
    e6 = n(375708);
let e4 = new I.A("MediaEngineStore"),
    e5 = "MediaEngineStore",
    e7 = { left: 1, right: 1 },
    e8 = 5 * ej.A.Millis.SECOND,
    e9 = 2 * ej.A.Millis.SECOND,
    te = 30 * ej.A.Millis.SECOND,
    tt = +ej.A.Millis.MINUTE,
    tn = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2",
    ti = 0;
var tr =
    (((A = {}).WEBCAM = "WEBCAM"),
    (A.INTEGRATED = "INTEGRATED"),
    (A.BLUETOOTH = "BLUETOOTH"),
    (A.AIRPLAY = "AIRPLAY"),
    (A.HEADSET = "HEADSET"),
    A);
function ta() {
    return {
        mode: eU.TBI.VOICE_ACTIVITY,
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
        audioMixerSettings: { ...e0 },
        audioMixerSettingsVersion: 0,
        localPans: {},
        inputVolume: e3.Hz,
        outputVolume: e3.Hz,
        inputDeviceId: e3.dx,
        outputDeviceId: e3.dx,
        videoDeviceId: e3.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: to.supports(e3.O5.VIDEO_HOOK),
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
let ts = {
        [e2.m.CUSTOM]: {},
        [e2.m.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [e2.m.STUDIO]: {
            mode: eU.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    tl = { modeOptions: { vadUseKrisp: !1 }, noiseCancellation: !1, noiseSuppression: !0 },
    to = (0, y.hB)((0, y.WI)());
e4.enableNativeLogger(!0);
let td = {},
    tc = new Set([e3.x.DEFAULT]),
    tu = to.supports(e3.O5.AUTO_ENABLE),
    t_ = !1,
    tE = e3.x.STREAM,
    tA = 0,
    th = !1,
    tI = performance.now(),
    tf = null,
    tp = { [e3.dx]: nL("No Input Devices") },
    tT = { [e3.dx]: nL("No Output Devices") },
    tm = { [e3.dx]: nL("No Video Devices") },
    tg = new v.Ep(),
    tS = !1,
    tN = !1,
    tC = !1,
    tO = !1,
    tR = !1,
    tL = e3.qe,
    ty = e3.qe,
    tD = !1,
    tv = !1,
    tb = new v.Ep(),
    tM = !1,
    tP = !1,
    tU = !1,
    tw = !1,
    tG = new v.Ep(),
    tx = !1,
    tk = !1,
    tF = !1,
    tV = !1,
    tB = [],
    tH = !1,
    tj = null,
    tW = !1,
    tY = !1,
    tK = !1,
    t$ = !1,
    tz = {},
    tq = null,
    tZ = null,
    tX = !1;
ev.A.hasPermission(eJ.iL.AUDIO, { showAuthorizationError: !1 }),
    ev.A.hasPermission(eJ.iL.CAMERA, { showAuthorizationError: !1 });
let tQ = new Set(),
    tJ = !1,
    t0 = new Set(),
    t1 = {},
    t2 = null,
    t3 = null,
    t6 = null,
    t4 = !0,
    t5 = !1,
    t7 = new v.Ep(),
    t8 = !1,
    t9 = !1,
    ne = !1,
    nt = !1,
    nn = {};
function ni(e) {
    return (function (e) {
        let { location: t } = e;
        return ea.getConfig({ location: t });
    })({ location: e }).hdrCaptureMode;
}
async function nr() {
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
function na() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e3.x.DEFAULT,
        t = td[e];
    return null == t && ((t = ta()), (td[e] = t)), t;
}
function ns() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e3.x.DEFAULT,
        t = na(e),
        n = ts[t.activeInputProfile ?? e2.m.CUSTOM],
        i = nW() ? nn : tl,
        r = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}), ...(i.modeOptions ?? {}) };
    if (
        (null == r.vadDuringPreProcess &&
            (r.vadDuringPreProcess = (function (e) {
                let { location: t, disable: n = !1 } = e;
                return n ? em.definition.defaultConfig : em.getConfig({ location: t });
            })({ location: "getSettings" }).enabled),
        (null == r.vadKrispActivationThreshold && !0 === n.automaticGainControl) || !0 === t.automaticGainControl)
    ) {
        let e = z({ location: "getSettings" });
        null != e.vadKrispActivationThreshold && (r.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return { ...t, ...n, ...i, modeOptions: r };
}
function nl(e) {
    let t = ns(e.context),
        n = t.mode;
    e.context === e3.x.DEFAULT && (0, eE.N)(!1, !1);
    let { showPTTSpeakingIndicator: i } = eV.A.getConfig({ location: "setInputMode" }),
        r = i && n === eU.TBI.PUSH_TO_TALK;
    e.setInputMode(n, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: !!r || t.modeOptions.autoThreshold,
        vadUseKrisp: (!!r || t.modeOptions.vadUseKrisp) && nW(),
        vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? 0.5,
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        vadDuringPreProcess: t.modeOptions.vadDuringPreProcess ?? !1,
        pttReleaseDelay: Math.round(t.modeOptions.delay),
    });
}
function no(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e3.Hz;
    return S().clamp(e, 0, t);
}
function nd(e) {
    let t = ns(e.context),
        n = !tu || t.mute || t.deaf;
    switch (e.context) {
        case e3.x.DEFAULT:
            n = n || tS || tN || tC || !ev.A.didHavePermission(eJ.iL.AUDIO);
            break;
        case e3.x.STREAM:
            n = !0;
            break;
        default:
            e.context;
    }
    e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === e3.x.DEFAULT && U.A.updateNativeMute();
}
function nc() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tR,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        n = a;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, f.isWindows)()
                ? P.c1(n.desktopSource.soundshareId)
                : null != n.desktopSource.sourcePid && ns().videoHook && P.c1(n.desktopSource.sourcePid),
            to.setGoLiveSource(null, tE)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            to.setGoLiveSource(null, tE),
        tR || e)
    ) {
        let t = ns().videoDeviceId;
        tR && t === e3.dx && ty === e3.dx && tL !== e3.qe ? (t = tL) : (ty = t),
            (tL = (tR = e) ? nM(tm, t) : e3.qe),
            to.setVideoInputDevice(tL);
    }
    if (((a = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = ni("MediaEngineStore go live"),
                r = ns().videoHook,
                a = nm(),
                s = a ? ((0, f.isWindows)() && R().satisfies(M.A?.os.release, ed.fG) ? ed.zl : ed.eg) : 0,
                l = !1;
            (0, f.isWindows)() &&
                s >= ed.zl &&
                (l =
                    !0 === t3
                        ? eC.getConfig({ location: "updateVideo" }).enabled
                        : eN.getConfig({ location: "updateVideo" }).enabled);
            let o = !r || !en.getConfig({ location: "updateVideo" }).enabled,
                d = r && eS.getConfig({ location: "updateVideo" }).enabled,
                { minCaptureWidth: c, minCaptureHeight: u } = eT.getConfig({ location: "updateVideo" });
            to.setGoLiveSource(
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
                        allowScreenCaptureKit: ng(),
                        videoHookStaleFrameTimeoutMs: 500,
                        graphicsCaptureStaleFrameTimeoutMs: e8,
                        hdrCaptureMode: n,
                        enableGlobalFramePoolLock: (function (e) {
                            let { location: t, disable: n = !1 } = e;
                            return n ? er.definition.defaultConfig : er.getConfig({ location: t });
                        })({ location: "updateVideo" }).enabled,
                        useGraphicsCaptureDirtyRegions: l,
                        videoHookAllowDx12: d,
                        minCaptureWidth: c,
                        minCaptureHeight: u,
                    },
                    quality: e,
                },
                tE,
            );
        }
        null != t.cameraSource &&
            to.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: t.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: !1 === t.cameraSource.sound ? "" : t.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                tE,
            );
    }
}
function nu(e) {
    switch (e) {
        case e3.CO.KRISP_CPU_OVERUSE:
            return V.B6.KrispCpuOveruse;
        case e3.CO.KRISP_FAILED:
            return V.B6.KrispFailed;
        case e3.CO.KRISP_VAD_CPU_OVERUSE:
            return V.B6.KrispVadCpuOveruse;
        case e3.CO.KRISP_INIT_ERROR:
            return V.B6.KrispInitError;
        case e3.CO.KRISP_INIT_ERROR_NATIVE:
            return V.B6.KrispInitErrorNative;
        case e3.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED:
            return V.B6.KrispInitErrorSse4NotSupported;
        case e3.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED:
            return V.B6.KrispInitErrorAvx2NotSupported;
        case e3.CO.KRISP_INIT_ERROR_UNSIGNED:
            return V.B6.KrispInitErrorUnsigned;
        case e3.CO.KRISP_INIT_ERROR_GLOBAL_INIT:
            return V.B6.KrispInitErrorGlobalInit;
        case e3.CO.KRISP_INIT_ERROR_WEIGHT_8K:
            return V.B6.KrispInitErrorWeight8k;
        case e3.CO.KRISP_INIT_ERROR_WEIGHT_16K:
            return V.B6.KrispInitErrorWeight16k;
        case e3.CO.KRISP_INIT_ERROR_WEIGHT_32K:
            return V.B6.KrispInitErrorWeight32k;
        case e3.CO.KRISP_INIT_ERROR_WEIGHT_VAD:
            return V.B6.KrispInitErrorWeightVad;
        default:
            return;
    }
}
let n_ = new Set([
    e3.CO.KRISP_INIT_ERROR,
    e3.CO.KRISP_INIT_ERROR_NATIVE,
    e3.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED,
    e3.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED,
    e3.CO.KRISP_INIT_ERROR_UNSIGNED,
    e3.CO.KRISP_INIT_ERROR_GLOBAL_INIT,
    e3.CO.KRISP_INIT_ERROR_WEIGHT_8K,
    e3.CO.KRISP_INIT_ERROR_WEIGHT_16K,
    e3.CO.KRISP_INIT_ERROR_WEIGHT_32K,
    e3.CO.KRISP_INIT_ERROR_WEIGHT_VAD,
]);
function nE(e) {
    if (
        (e4.warn(`Voice processing error: ${e}`),
        (0, V.QW)({ type: V.iy.NOISE_CANCELLER_ERROR, underlyingError: nu(e) }),
        eP.default.track(eU.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
        n_.has(e))
    ) {
        tV = !0;
        return;
    }
    e === e3.CO.KRISP_VAD_CPU_OVERUSE
        ? b.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e })
        : ((tW = !0), b.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e }));
}
function nA(e, t) {
    let n = t === e3.$C.LIVE;
    e4.warn(`Video filter error: ${e} (${n ? "live" : "preview"})`),
        n &&
            (0, V.QW)({
                type: V.iy.VIDEO_BACKGROUND_UNAVAILABLE,
                underlyingError: (function (e) {
                    switch (e) {
                        case e3.kv.UNSUPPORTED:
                            return V.B6.VideoBackgroundUnsupported;
                        case e3.kv.INIT_FAILED:
                            return V.B6.VideoBackgroundInitFailed;
                        default:
                            return;
                    }
                })(e),
            }),
        b.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_FILTER_ERROR", code: e, target: n ? "live" : "preview" });
}
function nh(e) {
    let t = z({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function nI(e, t) {
    e.setAutomaticGainControl(nh(t));
}
function nf(e, t) {
    let n = (0, eM.A)(t, i.getSystemMicrophoneMode());
    n !== t && e4.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: r } = z({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(r);
}
function np() {
    let e = ns(),
        t = e.inputDeviceId,
        n = ez.A.hasEchoCancellation(t) || e.echoCancellation,
        r = ez.A.hasNoiseSuppression(t) || e.noiseSuppression,
        { maxSampleRateHz: a, maxChannelCount: s } = (function (e, t) {
            let { location: n } = e,
                i = (function (e) {
                    let { location: t } = e;
                    return J.getConfig({ location: t });
                })({ location: n });
            return !(function (e, t) {
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
            })(i.condition, t)
                ? { maxSampleRateHz: 0, maxChannelCount: 0 }
                : { maxSampleRateHz: 32e3 * !!i.capSampleRate, maxChannelCount: +!!i.capChannelCount };
        })(
            { location: "updateVoiceFidelityCaps" },
            {
                krispEnabled: (0, eM.A)(e.noiseCancellation, i.getSystemMicrophoneMode()),
                noiseSuppressionEnabled: r,
                echoCancellationEnabled: n,
            },
        );
    to.setVoiceSampleRateCap(a), to.setVoiceChannelCountCap(s);
}
function nT(e) {
    let t = ns(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(ez.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(ez.A.hasNoiseSuppression(n) || t.noiseSuppression),
        nI(e, ez.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        nf(e, t.noiseCancellation),
        e.setSpatialAudioEnabled(nF(t.audioMixerSettings)),
        np(),
        (0, f.isWindows)() && R().satisfies(M.A?.os.release, ">=10.0.15063") && e.context === e3.x.DEFAULT)
    ) {
        let t = (function (e) {
                let { location: t } = e;
                return ep.getConfig({ location: t });
            })({ location: "updateConnectionVoiceProcessing" }),
            n = nv(tp[i.getInputDeviceId()]) || nv(tT[i.getOutputDeviceId()]);
        e.setEchoReferenceMode(n ? "mix" : t.echoReferenceMode);
    }
    if ((0, f.isWeb)()) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function nm() {
    return (0, f.isWindows)() && R().satisfies(M.A?.os.release, ed.yg);
}
function ng() {
    return (0, f.isMac)() && to.supports(e3.O5.SCREEN_CAPTURE_KIT) && R().satisfies(M.A?.os.release, ed.e);
}
function nS() {
    return (
        (0, f.isWindows)() &&
        to.supports(e3.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        to.supports(e3.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nN() {
    return to.supports(e3.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function nC(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e3.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = na(t);
    return Object.assign(i, e), !__OVERLAY__ && n && D.w.set(e5, td), i;
}
function nO() {
    let e = ns();
    nU(e.inputDeviceId),
        to.setAudioOutputDevice(e.outputDeviceId),
        nc(),
        to.setInputVolume(e.inputVolume),
        to.setOutputVolume(e.outputVolume),
        to.setAecDump(e.aecDumpEnabled),
        to.setSidechainCompression(e.sidechainCompression),
        to.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        to.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        (0, f.isLinux)() && p.Ay?.setOpenH264Enabled?.(e.openH264Enabled),
        nV(e.audioMixerSettings);
}
function nR() {
    tu || to.enable().then(() => b.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nL(e) {
    return { id: e3.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
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
let nD = /^HDAUDIO\\(?:SUB)?FUNC_\d+&VEN_(?:8086|1002|10DE)/;
function nv(e) {
    return e?.windowsDeviceService === "voicemodvad" || e?.name?.toLowerCase().includes("voicemod") === !0;
}
function nb(e, t) {
    let { deviceType: n, defaultName: i } = t,
        r = e[{ audioinput: "inputDevices", audiooutput: "outputDevices", videoinput: "videoDevices" }[n]];
    if (0 === r.length) {
        let e = nL(i);
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
                    case null != e.hardwareId && nD.test(e.hardwareId):
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
function nM(e, t) {
    let n = e[t] ?? e[e3.dx] ?? S()(e).values().first();
    return null != n ? n.id : t;
}
function nP(e) {
    if (!(0, f.isWindows)() || !X.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects) return;
    let t = tp[e];
    t?.guid != null && eG(t.guid, e, to);
}
function nU(e) {
    to.setAudioInputDevice(e), nP(e);
}
function nw(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nG() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = ek.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let i = n === e1.W.USER ? e3.x.DEFAULT : e3.x.STREAM,
            r = i === e3.x.STREAM ? e3.Cn : e3.Hz,
            a = t[n] ?? {},
            { localMutes: s, localVolumes: l } = ns(i);
        for (let [e, t] of Object.entries(a))
            null == (0, eF.tM)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== r ? (l[e] = t.volume) : delete l[e],
                to.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (e)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == a[e] &&
                    (delete s[e],
                    delete l[e],
                    to.eachConnection((t) => {
                        t.setLocalVolume(e, r), t.setLocalMute(e, !1);
                    }, i));
        nC({ localMutes: s, localVolumes: l }, i);
    }
}
function nx(e, t) {
    if (t) {
        let { soundshareId: t, soundshareSession: a } = (function (e) {
            if (null == i)
                return (
                    e4.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
                    { soundshareId: null, soundshareSession: "" }
                );
            {
                let t = i.getExperimentalSoundshare() ? e : eH.A.getAudioPid(e),
                    n = "";
                return null != t && (n = eH.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n };
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
    return null != e && ns().videoHook && P.GH(e), { soundshareId: null, soundshareSession: null };
}
function nk() {
    let e = e3.x.DEFAULT,
        { videoToggleStateMap: t } = ns(e);
    for (let [e, n] of Object.entries(t)) n === eU.bb8.AUTO_PROBING && delete t[e];
    nC({ videoToggleStateMap: t }, e, !1);
}
function nF(e) {
    let { enabled: t } = eB.A.getConfig({ location: "MediaEngineStore" });
    return !0 === e.enabled && t && to.supports(e3.O5.SPATIAL_AUDIO);
}
function nV(e) {
    (t$ = nF(e)), to.setAudioMixerOptions({ ...e, enabled: t$ });
}
function nB(e) {
    let t = ns(),
        n = to.getAudioSubsystem(),
        r = to.getAudioLayer(),
        a = nM(tp, t.inputDeviceId),
        s = tp[a]?.name,
        l = (0, eM.A)(t.noiseCancellation, i.getSystemMicrophoneMode());
    eP.default.track(eU.HAw.VOICE_PROCESSING, {
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
function nH() {
    let e = ns(),
        t = t0.size > 0,
        n = e.inputDeviceId,
        i = ez.A.hasEchoCancellation(n) || e.echoCancellation,
        r = ez.A.hasNoiseSuppression(n) || e.noiseSuppression,
        a = nh(ez.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation;
    to.setLoopback(t, {
        echoCancellation: i,
        echoCancellationPreEcho: !t,
        noiseSuppression: r,
        automaticGainControlConfig: a,
        noiseCancellation: s,
    }),
        np();
}
async function nj() {
    if (!to.supports(e3.O5.VAAPI) || window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let e = await window.DiscordNative.processUtils.getSystemInfo();
    (e.electronGPUInfo?.gpuDevice ?? []).some((e) => 4098 === e.vendorId) &&
        ((ne = !0), (t9 = to.supports(e3.O5.GAMESCOPE_CAPTURE)));
}
function nW() {
    return (tF || !1) && !tV;
}
async function nY() {
    try {
        await p.Ay.ensureModule("discord_krisp");
        let e = p.Ay.requireModule("discord_krisp");
        (tF = !0),
            (c = e.getSdkVersion?.()),
            (u = e.getSuppressionLevel?.() ?? 100),
            (0, f.isWindows)() && e.setMklZenOverrideEnabled?.(eh("setupKrispNativeModule").enabled),
            e.getNcModels?.().then((e) => {
                (tB = e), i.emitChange();
            }),
            i.emitChange(),
            await p.Ay.ensureModule("discord_voice");
        let t = p.Ay.requireModule("discord_voice");
        t.setupKrispPath?.();
    } catch (t) {
        e4.warn(`Failed to load Krisp module: ${t.message}`), eW.A.captureException(t);
        let e = e3.CO.KRISP_INIT_ERROR;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? e3.CO.KRISP_INIT_ERROR : n;
        }
        (0, V.QW)({ type: V.iy.NOISE_CANCELLER_ERROR, underlyingError: nu(e) }),
            eP.default.track(eU.HAw.VOICE_PROCESSING, { noise_canceller_error: e });
    } finally {
        tk = !1;
    }
}
async function nK() {
    try {
        let e,
            t = "",
            n = !1,
            i = URL.parse(tn);
        if (null === i) return void e4.log("OpenH264 URL ", i, " is invalid");
        let r = i.pathname.split("/"),
            a = r[r.length - 1].replace(".bz2", "");
        try {
            let t = await p.Ay.downloadOpenH264(
                tn,
                a,
                "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f",
                (e) => {
                    e4.log("OpenH264 download status", e);
                },
            );
            e4.log("OpenH264 is ready", t), (n = t.fetchedFromNetwork), (e = !0);
        } catch (n) {
            e4.error("OpenH264 download failed", n), (t = n.message), (e = !1);
        }
        if (
            (eP.default.track(eU.HAw.VIDEO_OPENH264_DOWNLOADED, {
                success: e,
                fetched_from_network: n,
                error_message: t,
            }),
            e)
        ) {
            let e = await p.Ay.cleanupUnusedOpenH264Files([a]);
            e4.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        e4.error("OpenH264 download failed", e);
    }
}
function n$(e) {
    e === e3.rB.AUTOMATIC
        ? (nC({ automaticAudioSubsystem: !0 }), nz())
        : (nC({ automaticAudioSubsystem: !1 }), to.setAudioSubsystem(e));
}
function nz() {
    to.queueAudioSubsystem(e3.rB.EXPERIMENTAL);
}
function nq(e) {
    let { section: t } = e;
    return t === eU.nc_.VOICE && nR(), !1;
}
class nZ extends L.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        let e;
        if (
            ((l ??= new eu(to, this)),
            tg.start(te, () => {
                e4.error("Device enumeration timed out"), eP.default.track(eU.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
            }),
            to.on(y.bg.Connection, (e) => {
                let t;
                nH(), nl(e), nd(e), nT(e);
                let n = ns();
                e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers),
                    e.setQoS(n.qos),
                    (0, f.isWindows)()
                        ? (e.setExperimentFlag(e3.fd.H265_HARDWARE_ONLY, !0),
                          (null != tZ
                              ? tZ
                              : "u" > typeof window
                                ? (tZ = nr().then((e) => ((tq = e), e)))
                                : Promise.resolve(!1)
                          ).then((t) => {
                              e.setExperimentFlag(e3.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                          }))
                        : (0, f.isMac)() && e.setExperimentFlag(e3.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                    (0, f.isLinux)() && n.openH264Enabled && e.setExperimentFlag(e3.fd.USE_LIBOPENH264_DECODER, !0),
                    (function (e) {
                        let { location: t, disable: n = !1 } = e;
                        return n ? e_.definition.defaultConfig : e_.getConfig({ location: t });
                    })({ location: "setupMediaEngine" }).enabled &&
                        e.setExperimentFlag(e3.fd.LOW_LATENCY_RATE_CONTROL, !0),
                    e.setExperimentFlag(e3.fd.RESET_DECODER_ON_ERRORS, !0),
                    e.setExperimentFlag(e3.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
                let { swallowVolumeOnlySpeakingEvents: r } = w.A.getConfig({ location: "MediaEngineStore" });
                if (
                    (r && e.setExperimentFlag(e3.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === e3.x.STREAM)
                ) {
                    let t = nw(tT);
                    e.setSoundshareDiscardRearChannels(t);
                }
                if ((0, f.isWindows)())
                    e.setExperimentFlag(e3.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(e3.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e3.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                else if ((0, f.isMac)())
                    e.setExperimentFlag(e3.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e3.fd.SIGNAL_AV1_HARDWARE_DECODE, !0),
                        e.setExperimentFlag(
                            e3.fd.H265_DISABLE_ENCODE,
                            !(
                                window?.DiscordNative?.os.arch === "arm64" &&
                                R().satisfies(window?.DiscordNative?.os.release, e3.Dk)
                            ),
                        );
                else if ((0, f.isLinux)()) {
                    let { enabled: t } = q.getConfig({ location: "MediaEngineStore" });
                    t && e.setExperimentFlag(e3.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(e3.fd.SIGNAL_AV1_DECODE, !0);
                } else
                    ((0, f.isIOS)() || (0, f.isAndroid)()) &&
                        (e.setExperimentFlag(e3.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e3.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
                if ((0, f.isWeb)()) {
                    let { enabled: t } = ee.getConfig({ location: "MediaEngineStore" });
                    e.setExperimentFlag(e3.fd.BROWSER_HEVC, t);
                }
                for (let r of ((0, f.isWindows)() &&
                    t2?.startsWith("AMD") &&
                    eL("MediaEngineStore").enabled &&
                    e.setExperimentFlag(e3.fd.WMF_GPU_ENCODE, !0),
                (0, f.isWindows)() &&
                    t2?.startsWith("Intel") &&
                    !0 === t3 &&
                    1 === t6 &&
                    ey.getConfig({ location: "MediaEngineStore" }).enabled &&
                    (e.setExperimentFlag(e3.fd.WMF_GPU_ENCODE, !0), e.setExperimentFlag(e3.fd.INTEL_GPU_DISABLE, !0)),
                (0, f.isWindows)() &&
                    t2?.startsWith("Intel") &&
                    !0 === t3 &&
                    1 === t6 &&
                    eO.getConfig({ location: "MediaEngineStore" }).enabled &&
                    e.setExperimentFlag(e3.fd.INTEL_GPU_DISABLE, !0),
                (0, f.isWindows)() &&
                    t2?.startsWith("Qualcomm") &&
                    eL("MediaEngineStore").enabled &&
                    e.setExperimentFlag(e3.fd.WMF_GPU_ENCODE, !0),
                to.setHasFullbandPerformance(null === (t = (0, F.A)()) || t >= 31),
                e.setRemoteAudioHistory(1e3),
                (0, x.A)(i) && e.setClipsKeyFrameInterval(e3.X1),
                (n = ns(e.context)),
                e.setPostponeDecodeLevel(100),
                Object.keys(n.localMutes)))
                    r !== eK.default.getId() && e.setLocalMute(r, n.localMutes[r]);
                for (let t of Object.keys(n.localVolumes))
                    t !== eK.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
                for (let t of Object.keys(n.localPans)) {
                    let i = n.localPans[t];
                    e.setLocalPan(t, i.left, i.right);
                }
                for (let t of Object.keys(n.disabledLocalVideos)) e.setLocalVideoDisabled(t, n.disabledLocalVideos[t]);
                e.on(y.yq.Speaking, (t, n, i, r) => {
                    b.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: r });
                }),
                    e.context === e3.x.DEFAULT &&
                        ((tv = !1),
                        e.on(y.yq.SpeakingWhileMuted, () => {
                            let e = !tv;
                            (tv = !0),
                                e && i.emitChange(),
                                tb.start(e9, () => {
                                    (tv = !1), i.emitChange();
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
                            eP.default.track(eU.HAw.VIDEOHOOK_INITIALIZED, {
                                backend: e,
                                format: t,
                                framebuffer_format: n,
                                sample_count: i,
                                success: r,
                                reinitialization: s,
                                ...(0, W.A)(a?.desktopSource),
                            });
                    }),
                    e.on(y.yq.NoiseCancellationError, nE),
                    e.on(y.yq.VoiceActivityDetectorError, nE),
                    e.on(y.yq.SdpError, (e, t, n, i) => {
                        eP.default.track(eU.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: i });
                    }),
                    e.on(y.yq.VideoState, (t) => {
                        b.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                    }),
                    e.setBitRate(e$.A.bitrate),
                    e.applyVideoQualityMode(eQ.A.mode),
                    (0, f.isWindows)() &&
                        to.supports(e3.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                        to.setAsyncVideoInputDeviceInit(!0);
            }),
            to.on(y.bg.DeviceChange, (e, t, n) => {
                tg.stop(),
                    b.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
            }),
            to.on(y.bg.VolumeChange, (e, t) => {
                b.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
            }),
            to.on(y.bg.DesktopSourceEnd, (e, t) => {
                b.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
            }),
            to.on(y.bg.AudioPermission, (e) => {
                (tX = !0), b.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
            }),
            to.on(y.bg.VideoPermission, (e) => {
                b.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
            }),
            to.on(y.bg.WatchdogTimeout, async () => {
                let e;
                if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                    try {
                        await eH.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                    } catch (t) {
                        "number" == typeof t.status && (e = t.status);
                    }
                e4.warn(`Watchdog timeout, report submission status: ${e ?? 200}`);
                let t = null != M.A.processUtils.setCrashReason;
                try {
                    await eP.default.track(
                        eU.HAw.VOICE_WATCHDOG_TIMEOUT,
                        { minidump_submission_error: e, will_restart: t },
                        { flush: !0 },
                    );
                } catch (e) {
                    e4.error("Failed to flush voice watchdog timeout analytics event", e);
                }
                t &&
                    (e4.info("Relaunching app due to voice watchdog timeout"),
                    await M.A.processUtils.setCrashReason("voice-watchdog-timeout"),
                    D.w.set("discord_watchdog_restart_timestamp", Date.now().toString()),
                    M.A.app.relaunch());
            }),
            to.on(y.bg.VideoInputInitialized, (e) => {
                eP.default.track(eU.HAw.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired
                        ? null
                        : Math.round(e.timeToFirstFrame * ej.A.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy,
                    media_session_id: eZ.A.getMediaSessionId(),
                    rtc_connection_id: eZ.A.getRTCConnectionId(),
                });
            }),
            to.on(y.bg.AudioInputInitialized, (e) => {
                eP.default.track(eU.HAw.AUDIO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_initialized_ms: Math.round(e.timeToInitialized * ej.A.Millis.SECOND),
                    rtc_connection_id: eZ.A.getRTCConnectionId(),
                });
            }),
            to.on(y.bg.ClipsRecordingRestartNeeded, () => {
                b.h.dispatch({ type: "CLIPS_RESTART" });
            }),
            to.on(y.bg.ClipsInitFailure, (e, t) => {
                let n = tA < 3;
                (tA += 1),
                    b.h.wait(() => {
                        b.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t }),
                            n
                                ? b.h.dispatch({ type: "CLIPS_RESTART" })
                                : e4.warn(
                                      `Clips init failure budget exhausted (${tA} consecutive unhealthy attempts); skipping auto-restart. A settings flip / game change / app restart will retry.`,
                                  );
                    });
            }),
            to.on(y.bg.ClipsRecordingHealthy, () => {
                0 !== tA && (e4.info(`Clips bridge reported healthy; resetting restart budget (was ${tA}).`), (tA = 0));
            }),
            to.on(y.bg.ClipsRecordingReadyChanged, (e) => {
                th !== e && (e4.info(`Clips recorder ready changed: ${e}`), (th = e));
            }),
            to.on(y.bg.ClipsBridgeIdleShutdown, () => {
                e4.info("Clips bridge idle shutdown");
            }),
            to.on(y.bg.ClipsRecordingEnded, (e, t) => {
                s?.desktopSource?.id === e &&
                    (null != t && a?.desktopSource?.soundshareId !== t && P.c1(t), (s = null));
            }),
            to.on(y.bg.NativeScreenSharePickerUpdate, (e, t) => {
                b.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
            }),
            to.on(y.bg.NativeScreenSharePickerCancel, (e) => {
                b.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
            }),
            to.on(y.bg.NativeScreenSharePickerError, (e) => {
                b.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
            }),
            to.on(y.bg.AudioDeviceModuleError, (e, t, n) => {
                eP.default.track(eU.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
            }),
            to.on(y.bg.VideoCodecError, (e) => {
                let t = "encode" === e.mode ? V.iy.VIDEO_ENCODE_ERROR : V.iy.VIDEO_DECODE_ERROR,
                    n = { videoCodec: e.codecStandard, errorMessage: e.message };
                (0, V.QW)(
                    t === V.iy.VIDEO_ENCODE_ERROR
                        ? { type: t, ...n, videoEncoder: e.implName }
                        : { type: t, ...n, videoDecoder: e.implName },
                );
            }),
            to.on(y.bg.ConnectionStats, (e) => {
                b.h.dispatch({
                    type: "MEDIA_ENGINE_CONNECTION_STATS",
                    connectionStats: e.map((e) => {
                        let { stats: t, connection: n } = e;
                        return {
                            stats: t,
                            mediaEngineConnectionId: n.mediaEngineConnectionId,
                            version: ti++,
                            context: n.context,
                        };
                    }),
                });
            }),
            to.on(y.bg.VoiceProcessingError, nE),
            to.on(y.bg.VideoFilterError, nA),
            to.on(y.bg.VoiceQueueMetrics, (e) => {
                let t = nX(e);
                null !== t && eP.default.track(eU.HAw.VOICE_QUEUE_METRICS, t);
            }),
            to.setOnVideoContainerResized((e, t, n) => {
                b.h.wait(() =>
                    b.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
                );
            }),
            nj(),
            l.reset(),
            (0, ex.w)().then((e) => {
                null != e && ((t2 = e.gpu_brand), (t3 = e.has_intel_hybrid_igpu), (t6 = e.gpu_count));
            }),
            to.on(y.bg.SystemMicrophoneModeChange, (e) => {
                (E = e), to.eachConnection(nT), i.emitChange();
            }),
            null != (e = D.w.get("audio")) && (D.w.set(e5, { [e3.x.DEFAULT]: e }), D.w.remove("audio")),
            (td = D.w.get(e5) ?? {}),
            S().each(td, (e) => {
                S().defaultsDeep(e, ta()),
                    null != e.modeOptions &&
                        "string" == typeof e.modeOptions.shortcut &&
                        (e.modeOptions.shortcut = (0, eY.OH)(e.modeOptions.shortcut)),
                    null != e.modeOptions &&
                        4 !== e.vadUseKrispSettingVersion &&
                        ((e.vadUseKrispSettingVersion = 4), (e.modeOptions.vadUseKrisp = !0)),
                    e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                    e.vadThrehsoldMigrated ||
                        ((e.vadThrehsoldMigrated = !0),
                        e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = -60)),
                    to.supports(e3.O5.SIDECHAIN_COMPRESSION) &&
                        e.sidechainCompressionSettingVersion < 1 &&
                        ((e.sidechainCompressionSettingVersion = 1), (e.sidechainCompression = !0)),
                    e.audioMixerSettingsVersion < 3 &&
                        ((e.audioMixerSettingsVersion = 3), (e.audioMixerSettings = { ...e0 })),
                    (0, f.isWeb)()
                        ? 1 !== e.ncUseKrispjsSettingVersion &&
                          ((e.ncUseKrispjsSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                        : 1 !== e.ncUseKrispSettingVersion &&
                          ((e.ncUseKrispSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
            }),
            nO(),
            ((0, f.isWindows)() || (0, f.isLinux)() || (0, f.isMac)()) && !__OVERLAY__ && !tk && !tF
                ? ((tk = !0), nY())
                : (0, f.isWeb)() && to.supports(e3.O5.NOISE_CANCELLATION)
                  ? ((tF = !0), i.emitChange())
                  : (0, f.isWeb)() && nC({ noiseCancellation: !1 }),
            (0, f.isLinux)() && nK(),
            nk(),
            (0, f.isDesktop)() && f.isPlatformEmbedded && !nt)
        ) {
            async function t() {
                let e = await new Promise((e) => {
                    p.Ay.pollQueueMetrics((t) => {
                        e(t);
                    });
                });
                e.periodMs = e3.tl;
                let n = nX(e);
                null !== n && eP.default.track(eU.HAw.VOICE_QUEUE_METRICS, n), setTimeout(t, e3.tl);
            }
            (nt = !0), setTimeout(t, e3.tl);
        }
        (0, f.isWindows)() &&
            f.isPlatformEmbedded &&
            null === tf &&
            to
                .getCodecSurvey()
                .then((e) => {
                    try {
                        let t = JSON.parse(e);
                        if (null == t || null == t.available_video_decoders)
                            throw Error("decoder survey is not available");
                        tf = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                    } catch (e) {
                        e4.error("Failed to parse codec survey", e), (tf = !1);
                    }
                })
                .catch((e) => {
                    e4.error("Failed to get codec survey", e), (tf = !1);
                })
                .finally(() => {
                    b.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
                }),
            (t1 = {
                [e3.O5.VIDEO]: to.supports(e3.O5.VIDEO),
                [e3.O5.DESKTOP_CAPTURE]: to.supports(e3.O5.DESKTOP_CAPTURE),
                [e3.O5.HYBRID_VIDEO]: to.supports(e3.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eK.default, e$.A, ez.A, eq.A, G.Ay, B.A, eZ.A, j.Ay, ek.A, eX.default, eQ.A);
    }
    supports(e) {
        return to.supports(e);
    }
    supportsInApp(e) {
        return t1[e] || to.supports(e);
    }
    isSupported() {
        return to.supported();
    }
    isNoiseSuppressionSupported() {
        return to.supports(e3.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return nW();
    }
    isNoiseCancellationError() {
        return tW;
    }
    isAutomaticGainControlSupported() {
        return to.supports(e3.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nN() && (to.supports(e3.O5.LEGACY_AUDIO_SUBSYSTEM) || to.supports(e3.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return to.supports(e3.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === to.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return nW();
    }
    isAecDumpSupported() {
        return to.supports(e3.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return to.supports(e3.O5.VIDEO) && to.supports(e3.O5.SIMULCAST);
    }
    getAecDump() {
        return ns().aecDumpEnabled;
    }
    getMediaEngine() {
        return to;
    }
    getVideoComponent() {
        return to.Video;
    }
    getCameraComponent() {
        return to.Camera;
    }
    getKrispSuppressionLevel() {
        return u ?? 100;
    }
    getKrispEnableStats() {
        return tH;
    }
    isEnabled() {
        return tu;
    }
    isMute() {
        return this.isSelfMute() || tS;
    }
    isDeaf() {
        return this.isSelfDeaf() || tO;
    }
    isServerMute() {
        return tS;
    }
    isServerDeaf() {
        return tO;
    }
    getAudioMixerSettings() {
        return ns().audioMixerSettings;
    }
    isSpatialAudioEnabled() {
        return !0 === this.getAudioMixerSettings().enabled;
    }
    isSpatialAudioActive() {
        return t$;
    }
    hasContext(e) {
        return null != td[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e3.x.DEFAULT;
        return e === e3.x.DEFAULT && tN;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e3.x.DEFAULT;
        return (
            !this.isEnabled() ||
            ns(e).mute ||
            !ev.A.didHavePermission(eJ.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === e3.x.DEFAULT && tC)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tD;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tD = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e3.x.DEFAULT,
            t = t5 && "voice_isolation" !== this.getSystemMicrophoneMode() && ns(e).mode === eU.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (ez.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return t4;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e3.x.DEFAULT;
        return !this.isSupported() || ns(e).deaf;
    }
    isVideoEnabled() {
        return tR && tP;
    }
    isVideoAvailable() {
        return Object.values(tm).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return tP;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e3.x.STREAM;
        return tE === e && null != a;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e3.x.STREAM;
        return tE === e && null != a && a.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e3.x.DEFAULT;
        return e !== eK.default.getId() && (ns(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return to.supports(e3.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e3.x.DEFAULT;
        return ns(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e3.x.DEFAULT;
        return ns(t).videoToggleStateMap[e] ?? eU.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e3.x.DEFAULT;
        return t === e3.x.DEFAULT && tQ.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e3.x.DEFAULT;
        return e === e3.x.DEFAULT && tQ.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tY;
    }
    isNativeAudioPermissionReady() {
        return tX;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return tE;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return tI;
    }
    isH264MfDecodeAvailable() {
        return tf;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e3.x.DEFAULT,
            n = ns(t).localPans[e];
        return null != n ? n : e7;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e3.x.DEFAULT,
            n = t === e3.x.STREAM ? e3.Cn : e3.Hz,
            i = ns(t).localVolumes[e];
        return null != i ? i : n;
    }
    getInputVolume() {
        return ns().inputVolume;
    }
    getOutputVolume() {
        return ns().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e3.x.DEFAULT;
        return ns(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e3.x.DEFAULT;
        return ns(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            S().each(td, (t, n) => {
                let {
                    mode: i,
                    modeOptions: { shortcut: r },
                } = t;
                i === eU.TBI.PUSH_TO_TALK && tc.has(n) && (e[n] = r);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nM(tp, ns().inputDeviceId);
    }
    getOutputDeviceId() {
        return nM(tT, ns().outputDeviceId);
    }
    getVideoDeviceId() {
        return nM(tm, ns().videoDeviceId);
    }
    getInputDevices() {
        return tp;
    }
    getOutputDevices() {
        return tT;
    }
    getVideoDevices() {
        return tm;
    }
    getEchoCancellation() {
        let e = ns();
        return ez.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return to.supports(e3.O5.SIDECHAIN_COMPRESSION) && ns().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return ns().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return ns().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tq && tq;
    }
    getOpenH264Enabled() {
        return (0, f.isLinux)() && ns().openH264Enabled;
    }
    getLoopback() {
        return t0.size > 0;
    }
    getLoopbackReasons() {
        return t0;
    }
    getNoiseSuppression() {
        let e = ns();
        return ez.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = ns();
        return ez.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return ns().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return ns().noiseCancellation;
    }
    getHardwareEncoding() {
        return !0;
    }
    getEnableSilenceWarning() {
        return ns().silenceWarning;
    }
    getDebugLogging() {
        return to.getDebugLogging();
    }
    getQoS() {
        return ns().qos;
    }
    getAttenuation() {
        return ns().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return ns().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return ns().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return nS() && ns().automaticAudioSubsystem ? e3.rB.AUTOMATIC : to.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return to.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return ns().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === e2.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e3.x.DEFAULT;
        return ns(e);
    }
    getState() {
        return {
            settingsByContext: td,
            inputDevices: tp,
            outputDevices: tT,
            appSupported: t1,
            krispModuleLoaded: tF,
            krispFatalError: tV,
            krispVersion: c,
            krispSuppressionLevel: u,
            goLiveSource: a,
            goLiveContext: tE,
        };
    }
    getInputDetectedThisConnection() {
        return tU;
    }
    getInputDetected() {
        return l.inputDetected;
    }
    getLastInputDetectedUpdateTime() {
        return l.lastUpdateTime;
    }
    getNoInputDetectedNotice() {
        return tw;
    }
    getInputDeviceOSMuted() {
        return o;
    }
    getInputDeviceOSVolume() {
        return d;
    }
    getPacketDelay() {
        return f.isPlatformEmbedded || this.getMode() !== eU.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        to.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return t_;
    }
    getVideoHook() {
        return ns().videoHook;
    }
    supportsVideoHook() {
        return to.supports(e3.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = ns().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return to.supports(e3.O5.EXPERIMENTAL_SOUNDSHARE) && R().satisfies(M.A?.os.release, ed.$x);
    }
    supportsHookSoundshare() {
        return (0, f.isWindows)() && to.supports(e3.O5.SOUNDSHARE) && R().satisfies(M.A?.os.release, ed.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = ns().useSystemScreensharePicker,
            n = (0, f.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return to.supports(e3.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return ne;
    }
    getVideoEncoderExperiments(e, t) {
        let n = ["unk"];
        if (
            (n.push("nvNewPresets"),
            e === e3.x.STREAM ? n.push("nvRelaxRc=250") : n.push("nvRelaxRc=75"),
            this.getUseVaapiEncoder() && n.push("vaapi"),
            (function (e) {
                let { location: t, disable: n = !1 } = e;
                return n ? eI.definition.defaultConfig : eI.getConfig({ location: t });
            })({ location: "getVideoEncoderExperiments" }).enabled && n.push("nvReconFrames"),
            e === e3.x.STREAM && "streamer" === t && (0, f.isWindows)())
        ) {
            n.push("useCaptureDeviceForEncode");
            let { overrideDeviceReuse: e } = eg.getConfig({ location: "handleReady" });
            e && n.push("videoCaptureDeviceOverrideReuse");
        }
        return n.push("linux-vulkan"), n.join(",");
    }
    getUseGamescopeCapture() {
        return t9;
    }
    getSpeakingWhileMuted() {
        return tv;
    }
    getKrispModelOverride() {
        return _;
    }
    getKrispModels() {
        return tB;
    }
    getKrispVadActivationThreshold() {
        return ns().modeOptions.vadKrispActivationThreshold ?? 0.5;
    }
    hasActiveCallKitCall() {
        return t8;
    }
    setHasActiveCallKitCall(e) {
        t8 = e;
    }
    supportsScreenSoundshare() {
        return (0, f.isMac)()
            ? to.supports(e3.O5.SOUNDSHARE) && R().satisfies(M.A?.os.release, ed.P$) && ng()
            : (0, f.isWindows)()
              ? to.supports(e3.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, f.isLinux)() && to.supports(e3.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, f.isWindows)()) {
            if (this.getBypassSystemInputProcessing()) return;
            return tz[this.getInputDeviceId()]?.active?.find((e) => "deep_noise_suppression" === e);
        }
        if ((0, f.isMac)() || (0, f.isIOS)()) return E;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e3.x.DEFAULT,
            t = this.supports(e3.O5.VIDEO)
                ? [{ rid: "100", type: e === e3.x.DEFAULT ? e3.mI.VIDEO : e3.mI.SCREEN, quality: e3.Y4 }]
                : [];
        return (
            this.isSimulcastSupported() &&
                e === e3.x.DEFAULT &&
                et.getConfig({ location: "MediaEngineStore.getVideoStreamParameters" }).enableSimulcast &&
                t.push({ rid: "50", type: e3.mI.VIDEO, quality: e3.Cl }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: (0, f.isWeb)() };
        return to.fetchAsyncResources(e);
    }
    startDavePreload() {
        !tK &&
            ((tK = !0),
            (0, f.isWeb)() &&
                to.fetchAsyncResources({ fetchDave: !0 }).catch((e) => {
                    e4.warn("DAVE preload failed:", e), eW.A.captureException(e);
                }));
    }
    getSupportedSecureFramesProtocolVersion() {
        return to.getSupportedSecureFramesProtocolVersion();
    }
    hasClipsSource() {
        return null != s;
    }
    isClipsRecordingReady() {
        return th;
    }
    isClipsRecordingReadySignalSupported() {
        return to.supports(e3.O5.CLIPS_RECORDING_READY_EVENTS);
    }
    getGpuBrand() {
        return t2;
    }
}
function nX(e) {
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
let nQ = (i = new nZ(b.h, {
    VOICE_CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n, currentVoiceChannelId: i, video: r } = e;
        if ((i !== n && nc(r, null), null != t || null == n)) {
            tx = !1;
            return;
        }
        if (tx) return;
        tx = !0;
        let a = ns();
        (a.mute || a.deaf) && (nC({ deaf: !1, mute: !1 }), to.eachConnection(nd));
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (r === t.sessionId) {
                (tS = t.mute || t.suppress), (tO = t.deaf), to.eachConnection(nd);
                let e = null != t.guildId && null != t.channelId && null != tj && tj !== t.channelId,
                    n = !tx && null == t.channelId;
                return nc(!e && !n && tR), (tj = t.channelId), !0;
            }
            return __OVERLAY__ || t.userId !== eK.default.getId() || null != eZ.A.getChannelId() || nc(!1, null), e;
        }, !1);
    },
    CONNECTION_OPEN: function (e) {
        (r = e.sessionId), (tS = !1), (tO = !1);
        let t = ns();
        nS() && (nN() ? n$(e3.rB.AUTOMATIC) : t.automaticAudioSubsystem && nz()),
            to.supports(e3.O5.OFFLOAD_ADM_CONTROLS) && to.setOffloadAdmControls(!0),
            (0, f.isIOS)() &&
                es.getConfig({ location: "handleConnectionOpen" }).enabled &&
                to.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
            (0, f.isWindows)() &&
                tF &&
                p.Ay.requireModule("discord_krisp").setMklZenOverrideEnabled?.(eh("handleConnectionOpen").enabled),
            nP(t.inputDeviceId),
            nG();
    },
    CONNECTION_CLOSED: function () {
        r = null;
    },
    POST_CONNECTION_OPEN: function () {
        return (0, f.isWeb)() && i.startDavePreload(), !1;
    },
    RTC_CONNECTION_STATE: function (e) {
        switch (e.state) {
            case eU.S7L.CONNECTING:
                nR();
                break;
            case eU.S7L.RTC_CONNECTING:
                (tw = !1), (o = void 0), (d = void 0), (tU = !1), (t5 = !1), t7.stop(), tG.stop(), l.reset();
                break;
            case eU.S7L.RTC_CONNECTED:
                nc();
                break;
            case eU.S7L.DISCONNECTED:
                (nn = {}),
                    (function () {
                        if (0 === tQ.size) return;
                        let e = e3.x.DEFAULT,
                            { disabledLocalVideos: t } = ns(e);
                        tQ.forEach((n) => {
                            m()(t[n], "If you are auto-disabled, then you are also disabled."),
                                delete t[n],
                                to.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
                        }),
                            tQ.clear(),
                            nC({ disabledLocalVideos: t }, e, !1);
                    })(),
                    nk();
        }
    },
    AUDIO_SET_TEMPORARY_SELF_MUTE: function (e) {
        let { mute: t } = e;
        (tN = t), to.eachConnection(nd);
    },
    AUDIO_TOGGLE_SELF_MUTE: function (e) {
        let { context: t, playSoundEffect: n } = e,
            { mute: i, deaf: r } = ns(t);
        if (t === e3.x.DEFAULT && (ev.A.requestPermission(eJ.iL.AUDIO), tC)) return !1;
        (i = !r && !i) || (r = !1), n || (tD = !0), nC({ mute: i, deaf: r }, t), to.eachConnection(nd);
    },
    AUDIO_SET_SELF_MUTE: function (e) {
        let { context: t, mute: n, playSoundEffect: i } = e;
        nC({ mute: n }, t), i || (tD = !0), to.eachConnection(nd);
    },
    AUDIO_TOGGLE_SELF_DEAF: function (e) {
        let { context: t } = e;
        nC({ deaf: !ns(t).deaf }, t), to.eachConnection(nd);
    },
    AUDIO_TOGGLE_LOCAL_MUTE: function (e) {
        let { context: t, userId: n } = e;
        if (n === eK.default.getId()) return;
        let { localMutes: i } = ns(t);
        i[n] ? delete i[n] : (i[n] = !0),
            nC({ localMutes: i }, t),
            to.eachConnection((e) => e.setLocalMute(n, i[n] || !1), t);
    },
    AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
        let { context: t, userId: n, videoToggleState: i, persist: r, isAutomatic: a } = e;
        m()(!(r && a), "These are not allowed to both be true.");
        let s = i === eU.bb8.DISABLED,
            { disabledLocalVideos: l } = ns(t),
            o = l[n] ?? !1,
            d = tQ.has(n),
            c = i === eU.bb8.AUTO_ENABLED || i === eU.bb8.MANUAL_ENABLED;
        e4.info(`disableVideo=${s} currentlyDisabled=${o} currentlyAutoDisabled=${d}, isVideoShown=${c}`),
            m()(!(d && !o), "If you are auto-disabled, then you are also disabled.");
        let u = s !== o,
            _ = t === e3.x.DEFAULT,
            E = a && u && _,
            A = r && u && _;
        e4.info(`changed=${u} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${E} isManualToggleByUser=${A}`);
        let { videoToggleStateMap: h } = ns(t);
        if (
            (h[n] === eU.bb8.AUTO_PROBING &&
                i === eU.bb8.AUTO_ENABLED &&
                (0, eD.A)(n, s ? e3.Al.AUTO_DISABLE : e3.Al.AUTO_ENABLE, c),
            (h[n] = i),
            nC({ videoToggleStateMap: h }, t, r),
            i === eU.bb8.AUTO_PROBING
                ? eZ.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
                : eZ.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
            tJ ||
                (e4.info(`isAutoDisableAllowed=${tJ} - disabling VideoHealthManager`),
                eZ.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
            E)
        ) {
            if ((!s && !d) || (s && !tJ)) return;
            (0, eD.A)(n, s ? e3.Al.AUTO_DISABLE : e3.Al.AUTO_ENABLE, c), s ? tQ.add(n) : tQ.delete(n);
        } else
            A &&
                (d && !s
                    ? (e4.info("disallowing auto-disable for this session because of manual override by user"),
                      (tJ = !1),
                      eZ.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                      (0, eD.A)(n, e3.Al.MANUAL_REENABLE, c))
                    : (0, eD.A)(n, s ? e3.Al.MANUAL_DISABLE : e3.Al.MANUAL_ENABLE, c));
        _ && !s && tQ.delete(n),
            s ? (l[n] = !0) : delete l[n],
            nC({ disabledLocalVideos: l }, t, r),
            to.eachConnection((e) => e.setLocalVideoDisabled(n, l[n] ?? !1), t);
    },
    AUDIO_SET_LOCAL_VOLUME: function (e) {
        let { context: t, userId: n, volume: i } = e;
        if (n === eK.default.getId()) return;
        let r = t === e3.x.STREAM ? e3.Cn : e3.Hz,
            { localVolumes: a } = ns(t);
        i === r ? delete a[n] : (a[n] = i),
            nC({ localVolumes: a }, t),
            to.eachConnection((e) => e.setLocalVolume(n, i), t);
    },
    AUDIO_SET_AUDIO_MIXER_SETTINGS: function (e) {
        let { context: t, settings: n } = e;
        nC({ audioMixerSettings: n }, t), nV(n), to.eachConnection((e) => e.setSpatialAudioEnabled(t$), e3.x.DEFAULT);
    },
    AUDIO_SET_LOCAL_PAN: function (e) {
        let { context: t, userId: n, left: i, right: r } = e,
            { localPans: a } = ns(t);
        (a[n] = { left: i, right: r }), nC({ localPans: a }, t), to.eachConnection((e) => e.setLocalPan(n, i, r), t);
    },
    AUDIO_SET_MODE: function (e) {
        let { context: t, mode: n, options: i } = e;
        nC({ mode: n, modeOptions: { ...i, updatedAt: Date.now() } }, t), to.eachConnection(nl);
    },
    AUDIO_SET_INPUT_VOLUME: function (e) {
        let { volume: t } = e;
        nC({ inputVolume: no(t) }), to.setInputVolume(t);
    },
    AUDIO_SET_OUTPUT_VOLUME: function (e) {
        let { volume: t } = e;
        nC({ outputVolume: t }), to.setOutputVolume(t);
    },
    AUDIO_SET_INPUT_DEVICE: function (e) {
        let { id: t } = e;
        (t = nM(tp, t)),
            (tI = performance.now()),
            nC({ inputDeviceId: t }),
            nU(t),
            to.eachConnection(nT),
            (o = void 0),
            (d = void 0),
            t7.stop(),
            (t5 = !1);
        let { resetSilenceWarningOnDeviceChange: n } = ef.A.getConfig({
            location: "MediaEngineStore.handleSetInputDevice",
        });
        n && ((tU = !1), l.reset());
    },
    AUDIO_SET_OUTPUT_DEVICE: function (e) {
        let { id: t } = e;
        nC({ outputDeviceId: (t = nM(tT, t)) }), to.setAudioOutputDevice(t), to.eachConnection(nT);
    },
    AUDIO_SET_ACTIVE_INPUT_PROFILE: function (e) {
        let { inputProfile: t } = e;
        nC({ activeInputProfile: t });
        let n = ns();
        to.eachConnection((e) => {
            nl(e), nT(e);
        }),
            to.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
            nH();
    },
    AUDIO_SET_ECHO_CANCELLATION: function (e) {
        let t = nC({ echoCancellation: e.enabled }),
            n = ez.A.hasEchoCancellation(t.inputDeviceId) || t.echoCancellation;
        to.eachConnection((e) => e.setEchoCancellation(n)), nH(), nB(e.location);
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION: function (e) {
        let t;
        (t = nC({ sidechainCompression: e.enabled })), to.setSidechainCompression(t.sidechainCompression);
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function (e) {
        let t = nC({ sidechainCompressionStrength: e.strength });
        to.setSidechainCompressionStrength(t.sidechainCompressionStrength);
    },
    AUDIO_SET_LOOPBACK: function (e) {
        let { enabled: t, loopbackReason: n } = e;
        return t ? t0.add(n) : t0.delete(n), nH();
    },
    AUDIO_SET_NOISE_SUPPRESSION: function (e) {
        let t = nC({ noiseSuppression: e.enabled }),
            n = ez.A.hasNoiseSuppression(t.inputDeviceId) || t.noiseSuppression;
        to.eachConnection((e) => e.setNoiseSuppression(n)), nH(), nB(e.location);
    },
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function (e) {
        let t = nC({ automaticGainControl: e.enabled });
        to.eachConnection((e) => nI(e, t.automaticGainControl)), nH(), nB(e.location);
    },
    AUDIO_SET_NOISE_CANCELLATION: function (e) {
        let t = nC({ noiseCancellation: e.enabled });
        to.eachConnection((e) => nf(e, t.noiseCancellation)), nH(), nB(e.location);
    },
    AUDIO_SET_KRISP_MODEL_OVERRIDE: function (e) {
        eb.A.setKrispModelOverride(e.model), (_ = e.model), nH();
    },
    AUDIO_SET_DISPLAY_SILENCE_WARNING: function (e) {
        nC({ silenceWarning: e.enabled });
    },
    AUDIO_SET_DEBUG_LOGGING: function (e) {
        to.setDebugLogging(e.enabled);
    },
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: function (e) {
        let { level: t } = e;
        (u = t), eb.A.setKrispSuppressionLevel(t);
    },
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: function (e) {
        (0, f.isWeb)() || ((tH = e.enabled), to.setNoiseCancellationEnableStats?.(e.enabled));
    },
    MEDIA_ENGINE_SET_VIDEO_HOOK: function (e) {
        nC({ videoHook: e.enabled });
    },
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function (e) {
        nC({ experimentalSoundshare2: e.enabled });
    },
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: function (e) {
        let { enabled: t } = e;
        nC({ useSystemScreensharePicker: t });
    },
    AUDIO_SET_ATTENUATION: function (e) {
        let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i } = e,
            r = nC({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i });
        to.eachConnection((e) =>
            e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers),
        );
    },
    AUDIO_SET_QOS: function (e) {
        let { enabled: t } = e;
        nC({ qos: t }), to.eachConnection((e) => e.setQoS(t));
    },
    MEDIA_ENGINE_DEVICES: function (e) {
        let t = tp;
        if (
            ((tp = nb(e, { deviceType: e3.oh.AUDIO_INPUT, defaultName: e6.intl.string(e6.t["/QIjDA"]) })),
            !S().isEqual(tp, t))
        ) {
            let e = ns();
            nU(nM(tp, e.inputDeviceId)), to.eachConnection(nT);
        }
        !(function (e) {
            let t = tT;
            if (
                ((tT = nb(e, { deviceType: e3.oh.AUDIO_OUTPUT, defaultName: e6.intl.string(e6.t.xlUg0v) })),
                !S().isEqual(tT, t))
            ) {
                let e = ns(),
                    n = nM(tT, e.outputDeviceId);
                to.setAudioOutputDevice(n), to.eachConnection(nT);
                let i = nw(t),
                    r = nw(tT);
                i !== r &&
                    to.eachConnection((e) => {
                        e.context === e3.x.STREAM && e.setSoundshareDiscardRearChannels(r);
                    });
            }
        })(e);
        tP = e.videoDevices.length > 0;
        let n = tm;
        if (
            ((tm = nb(e, { deviceType: e3.oh.VIDEO_INPUT, defaultName: e6.intl.string(e6.t.WKWARY) })),
            tR && !S().isEqual(tm, n))
        ) {
            let e = void 0 !== tm[tL],
                t = tL === e3.dx && n[e3.dx]?.disabled,
                i = "Firefox" === C().name && "" === tL && n[tL]?.name === "Default" && !n[tL]?.disabled;
            nc(e || t || i);
        }
    },
    AUDIO_VOLUME_CHANGE: function (e) {
        let { inputVolume: t, outputVolume: n } = e;
        nC({ inputVolume: no(t), outputVolume: n });
    },
    AUDIO_RESET: function () {
        D.w.remove(e5), location.reload();
    },
    AUDIO_INPUT_DETECTED: function (e) {
        let { inputDetected: t } = e;
        if (null == t) return !1;
        if (((tw = !0 !== tU && !t), t)) (tU = !0), (t5 = !1), t7.stop(), tG.stop();
        else if (ns().mode === eU.TBI.VOICE_ACTIVITY && tU) {
            let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = ef.A.getConfig({
                location: "MediaEngineStore.handleInputDetected",
            });
            e &&
                t7.start(tt, () => {
                    eP.default.track(eU.HAw.HARDWARE_MUTE_GUESSED, {
                        input_device_name: tp[nM(tp, ns().inputDeviceId)]?.name,
                        rtc_connection_id: eZ.A.getRTCConnectionId(),
                    }),
                        (t5 = !0),
                        i.emitChange();
                }),
                null != t &&
                    tG.start(t * ej.A.Millis.MINUTE, () => {
                        (tU = !1), l.reset();
                    });
        }
    },
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: function (e) {
        let { osVolume: t, osMuted: n } = e;
        (d = t), (o = n);
    },
    AUDIO_SET_SUBSYSTEM: function (e) {
        n$(e.subsystem);
    },
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: function (e) {
        let t = e.bypassEnabled;
        nC({ bypassSystemInputProcessing: t }), to.setAudioInputBypassSystemProcessing(t), np(), nB(e.location);
    },
    MEDIA_ENGINE_SET_AUDIO_ENABLED: function (e) {
        (tu = e.enabled), e.unmute && nC({ mute: !1, deaf: !1 }), to.eachConnection(nd);
    },
    MEDIA_ENGINE_SET_VIDEO_ENABLED: function (e) {
        let { enabled: t } = e;
        ev.A.requestPermission(eJ.iL.CAMERA), nc(t);
    },
    MEDIA_ENGINE_PERMISSION: function (e) {
        let { kind: t, granted: n } = e;
        if (!n)
            switch (t) {
                case "audio":
                    (tu = !1), to.eachConnection(nd);
                    break;
                case "video":
                    nc(!1);
            }
    },
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
        let { settings: t } = e;
        if (t?.desktopSettings != null) {
            let e = null,
                n = null,
                { sourceId: i, sound: r } = t.desktopSettings,
                s = t.context ?? e3.x.DEFAULT,
                l = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
                o = eH.A.getPidFromDesktopSource(i);
            f.isPlatformEmbedded && ({ soundshareId: e, soundshareSession: n } = nx(o, r)),
                s !== tE && (null != a && to.setGoLiveSource(null, tE), (tE = s)),
                nc(s === e3.x.STREAM && tR, {
                    desktopSource: { id: i, sourcePid: o, soundshareId: e, soundshareSession: n },
                    quality: { resolution: l.resolution, frameRate: l.frameRate },
                });
        } else if (t?.cameraSettings != null) {
            let e = t.context ?? e3.x.DEFAULT,
                { videoDeviceGuid: n, audioDeviceGuid: i, sound: r } = t.cameraSettings,
                a = e === e3.x.STREAM && tR,
                s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
            nc(a, {
                cameraSource: { videoDeviceGuid: n, audioDeviceGuid: i, sound: r },
                quality: { resolution: s.resolution, frameRate: s.frameRate },
            });
        } else nc(tR, null);
    },
    MEDIA_ENGINE_SET_VIDEO_DEVICE: function (e) {
        let { id: t } = e;
        nC({ videoDeviceId: (t = nM(tm, t)) }), nc();
    },
    MEDIA_ENGINE_INTERACTION_REQUIRED: function (e) {
        return t_ !== e.required && ((t_ = e.required), e.required || to.interact(), !0);
    },
    USER_SETTINGS_MODAL_INIT: nq,
    USER_SETTINGS_MODAL_SET_SECTION: nq,
    CERTIFIED_DEVICES_SET: function () {
        return to.eachConnection(nT), !1;
    },
    RPC_APP_CONNECTED: function (e) {
        let { application: t } = e;
        tc.add(t.id);
    },
    RPC_APP_DISCONNECTED: function (e) {
        let { application: t } = e;
        tc.delete(t.id);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { mediaEngineState: t } = e;
        (td = t.settingsByContext),
            (tp = t.inputDevices),
            (tT = t.outputDevices),
            (t1 = t.appSupported),
            (tF = t.krispModuleLoaded),
            (tV = t.krispFatalError),
            (c = t.krispVersion),
            (tE = t.goLiveContext);
    },
    APP_STATE_UPDATE: function (e) {
        let { state: t } = e,
            n = H.A.isEnabled();
        if (t === eU.g6G.BACKGROUND && tR && !n) (tM = !0), nc(!1);
        else {
            if (t !== eU.g6G.ACTIVE || !tM) return !1;
            (tM = !1), nc(!0);
        }
        return !0;
    },
    SET_CHANNEL_BITRATE: function (e) {
        to.eachConnection((t) => t.setBitRate(e.bitrate));
    },
    SET_VAD_PERMISSION: function (e) {
        let { hasPermission: t } = e,
            n = !t;
        if (n === tC) return !1;
        (tC = n), to.eachConnection(nd);
    },
    SET_NATIVE_PERMISSION: function (e) {
        let { state: t, permissionType: n } = e,
            i = t === eJ.hL.ACCEPTED;
        switch (n) {
            case eJ.iL.AUDIO:
                (tX = !0), to.eachConnection(nd);
                break;
            case eJ.iL.CAMERA:
                !i && tR && nc(!1);
                break;
            default:
                return !1;
        }
    },
    SET_CHANNEL_VIDEO_QUALITY_MODE: function (e) {
        to.eachConnection((t) => t.applyVideoQualityMode(e.mode));
    },
    MEDIA_ENGINE_SET_AEC_DUMP: function (e) {
        let { enabled: t } = e,
            n = nC({ aecDumpEnabled: t });
        to.setAecDump(n.aecDumpEnabled);
    },
    MEDIA_ENGINE_SET_OPENH264_ENABLED: function (e) {
        let { enabled: t } = e;
        nC({ openH264Enabled: t }), p.Ay?.setOpenH264Enabled?.(t);
    },
    MEDIA_ENGINE_RESET_SETTINGS: function (e) {
        let { overrides: t } = e;
        if (__OVERLAY__) return !1;
        (td = Object.values(e3.x).reduce((e, n) => {
            let i = ta();
            return (e[n] = S().merge(i, t[n])), e;
        }, {})),
            D.w.set(e5, td),
            nO();
    },
    CHANNEL_DELETE: function () {
        if ((!tR && null == a) || null != eZ.A.getRTCConnectionId()) return !1;
        nc(!1, null);
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: function (e) {
        if (e.code === e3.CO.KRISP_CPU_OVERUSE) {
            (nn.noiseCancellation = !1), (nn.noiseSuppression = !0);
            let e = ns();
            return to.eachConnection((t) => nf(t, e.noiseCancellation)), nH(), nB(), !0;
        }
        return !1;
    },
    MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR: function (e) {
        return (
            e.code === e3.CO.KRISP_VAD_CPU_OVERUSE &&
            ((nn.modeOptions = { vadUseKrisp: !1 }), to.eachConnection((e) => nl(e)), !0)
        );
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function () {
        return !!tW && ((tW = !1), !0);
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
        let { settings: t } = e;
        to.applyMediaFilterSettings(t).finally(() => {
            (tY = !1), i.emitChange();
        });
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function () {
        tY = !0;
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function () {
        tY = !1;
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            local: n,
            wasSaved: i,
        } = e;
        if (t !== e1.oD.PRELOADED_USER_SETTINGS || n || null != i) return !1;
        nG(!0);
    },
    CLIPS_INIT: function (e) {
        let { sourceId: t, applicationName: n, quality: r } = e;
        if (!(0, k.Ao)() || null == M.A || (s?.desktopSource.id === t && s.quality === r)) return !1;
        null != s &&
            (to.setClipsSource(null),
            (0, f.isWindows)() &&
                (null != s.desktopSource.soundshareId
                    ? P.c1(s.desktopSource.soundshareId)
                    : null != s.desktopSource.sourcePid && ns().videoHook && P.c1(s.desktopSource.sourcePid)));
        let a = eH.A.getPidFromDesktopSource(t),
            { soundshareId: l, soundshareSession: o } = nx(a, !0);
        s = { desktopSource: { id: t, sourcePid: a, soundshareId: l, soundshareSession: o }, quality: r };
        let d = ni("MediaEngineStore clips"),
            c = ns().videoHook,
            u = !c || !en.getConfig({ location: "handleClipsInit" }).enabled,
            _ = c && eS.getConfig({ location: "handleClipsInit" }).enabled,
            { minCaptureWidth: E, minCaptureHeight: A } = eT.getConfig({ location: "handleClipsInit" });
        to.setClipsSource({
            desktopDescription: {
                id: s.desktopSource.id,
                soundshareId: s.desktopSource.soundshareId,
                useVideoHook: c,
                useHookFramePacer: u,
                useGraphicsCapture: nm(),
                useCaptureDeviceForEncode: !1,
                useLoopback: i.getExperimentalSoundshare(),
                useQuartzCapturer: !0,
                allowScreenCaptureKit: ng(),
                videoHookStaleFrameTimeoutMs: 500,
                graphicsCaptureStaleFrameTimeoutMs: e8,
                hdrCaptureMode: d,
                videoHookAllowDx12: _,
                minCaptureWidth: E,
                minCaptureHeight: A,
            },
            quality: r,
            bitratePercent: r.bitratePercent,
            applicationName: n,
            videoEncoderExperiments: i.getVideoEncoderExperiments(e3.x.STREAM, "streamer"),
        });
    },
    CLIPS_RESTART: function () {
        s = null;
    },
    CLIPS_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        !1 === t.decoupledClipsEnabled && ((s = null), to.setClipsSource(null)), !1 === t.clipsEnabled && (s = null);
    },
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function (e) {
        t4 = e.enabled;
    },
    MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: function (e) {
        let { deviceId: t, active: n, available: i } = e;
        (tz[t] = { active: n, available: i }), np();
    },
}));
