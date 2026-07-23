"use strict";
let i, r, a, s, l, o, d, c, u, _, E;
n.d(t, { yz: () => tn, Ay: () => nq }), n(323874), n(14289), n(35956), n(321073);
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
    es = n(118356),
    el = n(325278);
let eo = new es.Vy("InputWatcher");
class ed {
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
let e_ = (0, Y.mj)({
    name: "2026-07-mkl-zen-cpu-dispatch-override",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function eE(e) {
    return e_.getConfig({ location: e });
}
(0, Y.mj)({
    name: "2026-02-mobile-volume-output-slider-removal",
    kind: "user",
    defaultConfig: { audioOutputPresent: !0, nonContextualStreamOutputPresent: !0, showTileVolumeIndicator: !1 },
    variations: { 1: { audioOutputPresent: !1, nonContextualStreamOutputPresent: !1, showTileVolumeIndicator: !0 } },
});
let eA = (0, et.Ay)({
    kind: "user",
    name: "2026-07-nvenc-reconstructed-frames",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eh = n(801644);
let eI = (0, Y.mj)({
        kind: "user",
        name: "2026-06-systemwide-echo-cancellation-for-people-who-refuse-to-wear-headphones",
        defaultConfig: { echoReferenceMode: "mix" },
        variations: { 1: { echoReferenceMode: "auto" } },
    }),
    ef = (0, Y.mj)({
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
    eT = (0, Y.mj)({
        name: "2026-03-video-capture-device-no-reuse",
        kind: "user",
        defaultConfig: { overrideDeviceReuse: !1 },
        variations: { 1: { overrideDeviceReuse: !0 } },
    }),
    em = (0, Y.mj)({
        name: "2026-04-video-hook-dx12",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eg = (0, Y.mj)({
        name: "2026-02-wgc-dirty-regions-all",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eS = (0, Y.mj)({
        name: "2026-02-wgc-dirty-regions",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eN = (0, Y.mj)({
        name: "2026-06-wmf-cpu-encode-intel",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eC = (0, Y.mj)({
        name: "2025-12-wmf-gpu-encode",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function eO(e) {
    return eC.getConfig({ location: e });
}
let eR = (0, Y.mj)({
    name: "2026-01-wmf-gpu-encode-intel",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eL = n(75076),
    ey = n(91777),
    eD = n(559633),
    ev = n(205106),
    eb = n(174459),
    eM = n(652215);
let eP = new es.Vy("AudioEffects");
async function eU(e, t, n) {
    if (!(0, ea.uF)()) return Promise.reject(Error("Audio effects querying not supported on non-Windows platforms"));
    try {
        let i = await n.getDeviceAudioEffects(e);
        return (
            b.h.dispatch({ type: "MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS", deviceId: t, ...i }),
            eb.default.track(eM.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, {
                succeeded: !0,
                active_effects: i.active,
                available_effects: i.available,
            }),
            i
        );
    } catch (e) {
        eP.error("Failed to probe audio effects for device", e),
            eb.default.track(eM.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, { succeeded: !1 });
    }
}
var ew = n(967347),
    eG = n(617617),
    ex = n(125325),
    ek = n(499156),
    eF = n(738566),
    eV = n(353835),
    eB = n(927813),
    eH = n(38405),
    ej = n(350535),
    eW = n(280450),
    eY = n(131319),
    eK = n(347481),
    e$ = n(734057),
    ez = n(763827),
    eq = n(287809),
    eZ = n(117549),
    eX = n(765682);
let eQ = {
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
var eJ = n(355097),
    e0 = n(621380),
    e1 = n(731854),
    e2 = n(375708);
let e3 = new I.A("MediaEngineStore"),
    e6 = "MediaEngineStore",
    e4 = { left: 1, right: 1 },
    e5 = 5 * eB.A.Millis.SECOND,
    e7 = 2 * eB.A.Millis.SECOND,
    e8 = 30 * eB.A.Millis.SECOND,
    e9 = +eB.A.Millis.MINUTE,
    te = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2",
    tt = 0;
var tn =
    (((A = {}).WEBCAM = "WEBCAM"),
    (A.INTEGRATED = "INTEGRATED"),
    (A.BLUETOOTH = "BLUETOOTH"),
    (A.AIRPLAY = "AIRPLAY"),
    (A.HEADSET = "HEADSET"),
    A);
function ti() {
    return {
        mode: eM.TBI.VOICE_ACTIVITY,
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
        audioMixerSettings: { ...eQ },
        audioMixerSettingsVersion: 0,
        localPans: {},
        inputVolume: e1.Hz,
        outputVolume: e1.Hz,
        inputDeviceId: e1.dx,
        outputDeviceId: e1.dx,
        videoDeviceId: e1.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: ts.supports(e1.O5.VIDEO_HOOK),
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
let tr = {
        [e0.m.CUSTOM]: {},
        [e0.m.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [e0.m.STUDIO]: {
            mode: eM.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    ta = { modeOptions: { vadUseKrisp: !1 }, noiseCancellation: !1, noiseSuppression: !0 },
    ts = (0, y.hB)((0, y.WI)());
e3.enableNativeLogger(!0);
let tl = {},
    to = new Set([e1.x.DEFAULT]),
    td = ts.supports(e1.O5.AUTO_ENABLE),
    tc = !1,
    tu = e1.x.STREAM,
    t_ = 0,
    tE = !1,
    tA = performance.now(),
    th = null,
    tI = { [e1.dx]: nC("No Input Devices") },
    tf = { [e1.dx]: nC("No Output Devices") },
    tp = { [e1.dx]: nC("No Video Devices") },
    tT = new v.Ep(),
    tm = !1,
    tg = !1,
    tS = !1,
    tN = !1,
    tC = !1,
    tO = e1.qe,
    tR = e1.qe,
    tL = !1,
    ty = !1,
    tD = new v.Ep(),
    tv = !1,
    tb = !1,
    tM = !1,
    tP = !1,
    tU = new v.Ep(),
    tw = !1,
    tG = !1,
    tx = !1,
    tk = !1,
    tF = [],
    tV = !1,
    tB = null,
    tH = !1,
    tj = !1,
    tW = !1,
    tY = !1,
    tK = {},
    t$ = null,
    tz = null,
    tq = !1;
ey.A.hasPermission(eX.iL.AUDIO, { showAuthorizationError: !1 }),
    ey.A.hasPermission(eX.iL.CAMERA, { showAuthorizationError: !1 });
let tZ = new Set(),
    tX = !1,
    tQ = new Set(),
    tJ = {},
    t0 = null,
    t1 = null,
    t2 = null,
    t3 = !0,
    t6 = !1,
    t4 = new v.Ep(),
    t5 = !1,
    t7 = !1,
    t8 = !1,
    t9 = !1,
    ne = {};
function nt(e) {
    return (function (e) {
        let { location: t } = e;
        return ei.getConfig({ location: t });
    })({ location: e }).hdrCaptureMode;
}
async function nn() {
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
function ni() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e1.x.DEFAULT,
        t = tl[e];
    return null == t && ((t = ti()), (tl[e] = t)), t;
}
function nr() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e1.x.DEFAULT,
        t = ni(e),
        n = tr[t.activeInputProfile ?? e0.m.CUSTOM],
        i = nB() ? ne : ta,
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
function na(e) {
    let t = nr(e.context),
        n = t.mode;
    e.context === e1.x.DEFAULT && (0, eu.N)(!1, !1);
    let { showPTTSpeakingIndicator: i } = ek.A.getConfig({ location: "setInputMode" }),
        r = i && n === eM.TBI.PUSH_TO_TALK;
    e.setInputMode(n, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: !!r || t.modeOptions.autoThreshold,
        vadUseKrisp: (!!r || t.modeOptions.vadUseKrisp) && nB(),
        vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? 0.5,
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        vadDuringPreProcess: t.modeOptions.vadDuringPreProcess ?? !1,
        pttReleaseDelay: Math.round(t.modeOptions.delay),
    });
}
function ns(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e1.Hz;
    return S().clamp(e, 0, t);
}
function nl(e) {
    let t = nr(e.context),
        n = !td || t.mute || t.deaf;
    switch (e.context) {
        case e1.x.DEFAULT:
            n = n || tm || tg || tS || !ey.A.didHavePermission(eX.iL.AUDIO);
            break;
        case e1.x.STREAM:
            n = !0;
            break;
        default:
            e.context;
    }
    e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === e1.x.DEFAULT && U.A.updateNativeMute();
}
function no() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tC,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        n = a;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, f.isWindows)()
                ? P.c1(n.desktopSource.soundshareId)
                : null != n.desktopSource.sourcePid && nr().videoHook && P.c1(n.desktopSource.sourcePid),
            ts.setGoLiveSource(null, tu)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            ts.setGoLiveSource(null, tu),
        tC || e)
    ) {
        let t = nr().videoDeviceId;
        tC && t === e1.dx && tR === e1.dx && tO !== e1.qe ? (t = tO) : (tR = t),
            (tO = (tC = e) ? nD(tp, t) : e1.qe),
            ts.setVideoInputDevice(tO);
    }
    if (((a = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = nt("MediaEngineStore go live"),
                r = nr().videoHook,
                a = nf(),
                s = a ? ((0, f.isWindows)() && R().satisfies(M.A?.os.release, el.fG) ? el.zl : el.eg) : 0,
                l = !1;
            (0, f.isWindows)() &&
                s >= el.zl &&
                (l =
                    !0 === t1
                        ? eS.getConfig({ location: "updateVideo" }).enabled
                        : eg.getConfig({ location: "updateVideo" }).enabled);
            let o = !r || !ee.getConfig({ location: "updateVideo" }).enabled,
                d = r && em.getConfig({ location: "updateVideo" }).enabled,
                { minCaptureWidth: c, minCaptureHeight: u } = ef.getConfig({ location: "updateVideo" });
            ts.setGoLiveSource(
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
                        allowScreenCaptureKit: np(),
                        videoHookStaleFrameTimeoutMs: 500,
                        graphicsCaptureStaleFrameTimeoutMs: e5,
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
                tu,
            );
        }
        null != t.cameraSource &&
            ts.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: t.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: !1 === t.cameraSource.sound ? "" : t.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                tu,
            );
    }
}
function nd(e) {
    switch (e) {
        case e1.CO.KRISP_CPU_OVERUSE:
            return V.B6.KrispCpuOveruse;
        case e1.CO.KRISP_FAILED:
            return V.B6.KrispFailed;
        case e1.CO.KRISP_VAD_CPU_OVERUSE:
            return V.B6.KrispVadCpuOveruse;
        case e1.CO.KRISP_INIT_ERROR:
            return V.B6.KrispInitError;
        case e1.CO.KRISP_INIT_ERROR_NATIVE:
            return V.B6.KrispInitErrorNative;
        case e1.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED:
            return V.B6.KrispInitErrorSse4NotSupported;
        case e1.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED:
            return V.B6.KrispInitErrorAvx2NotSupported;
        case e1.CO.KRISP_INIT_ERROR_UNSIGNED:
            return V.B6.KrispInitErrorUnsigned;
        case e1.CO.KRISP_INIT_ERROR_GLOBAL_INIT:
            return V.B6.KrispInitErrorGlobalInit;
        case e1.CO.KRISP_INIT_ERROR_WEIGHT_8K:
            return V.B6.KrispInitErrorWeight8k;
        case e1.CO.KRISP_INIT_ERROR_WEIGHT_16K:
            return V.B6.KrispInitErrorWeight16k;
        case e1.CO.KRISP_INIT_ERROR_WEIGHT_32K:
            return V.B6.KrispInitErrorWeight32k;
        case e1.CO.KRISP_INIT_ERROR_WEIGHT_VAD:
            return V.B6.KrispInitErrorWeightVad;
        default:
            return;
    }
}
let nc = new Set([
    e1.CO.KRISP_INIT_ERROR,
    e1.CO.KRISP_INIT_ERROR_NATIVE,
    e1.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED,
    e1.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED,
    e1.CO.KRISP_INIT_ERROR_UNSIGNED,
    e1.CO.KRISP_INIT_ERROR_GLOBAL_INIT,
    e1.CO.KRISP_INIT_ERROR_WEIGHT_8K,
    e1.CO.KRISP_INIT_ERROR_WEIGHT_16K,
    e1.CO.KRISP_INIT_ERROR_WEIGHT_32K,
    e1.CO.KRISP_INIT_ERROR_WEIGHT_VAD,
]);
function nu(e) {
    if (
        (e3.warn(`Voice processing error: ${e}`),
        (0, V.QW)({ type: V.iy.NOISE_CANCELLER_ERROR, underlyingError: nd(e) }),
        eb.default.track(eM.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
        nc.has(e))
    ) {
        tk = !0;
        return;
    }
    e === e1.CO.KRISP_VAD_CPU_OVERUSE
        ? b.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e })
        : ((tH = !0), b.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e }));
}
function n_(e, t) {
    let n = t === e1.$C.LIVE;
    e3.warn(`Video filter error: ${e} (${n ? "live" : "preview"})`),
        n &&
            (0, V.QW)({
                type: V.iy.VIDEO_BACKGROUND_UNAVAILABLE,
                underlyingError: (function (e) {
                    switch (e) {
                        case e1.kv.UNSUPPORTED:
                            return V.B6.VideoBackgroundUnsupported;
                        case e1.kv.INIT_FAILED:
                            return V.B6.VideoBackgroundInitFailed;
                        default:
                            return;
                    }
                })(e),
            }),
        b.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_FILTER_ERROR", code: e, target: n ? "live" : "preview" });
}
function nE(e) {
    let t = z({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function nA(e, t) {
    e.setAutomaticGainControl(nE(t));
}
function nh(e, t) {
    let n = (0, ev.A)(t, i.getSystemMicrophoneMode());
    n !== t && e3.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: r } = z({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(r);
}
function nI(e) {
    let t = nr(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eK.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eK.A.hasNoiseSuppression(n) || t.noiseSuppression),
        nA(e, eK.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        nh(e, t.noiseCancellation),
        e.setSpatialAudioEnabled(nG(t.audioMixerSettings)),
        (0, f.isWindows)() && R().satisfies(M.A?.os.release, ">=10.0.15063") && e.context === e1.x.DEFAULT)
    ) {
        let t = (function (e) {
                let { location: t } = e;
                return eI.getConfig({ location: t });
            })({ location: "updateConnectionVoiceProcessing" }),
            n = nL(tI[i.getInputDeviceId()]) || nL(tf[i.getOutputDeviceId()]);
        e.setEchoReferenceMode(n ? "mix" : t.echoReferenceMode);
    }
    if ((0, f.isWeb)()) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function nf() {
    return (0, f.isWindows)() && R().satisfies(M.A?.os.release, el.yg);
}
function np() {
    return (0, f.isMac)() && ts.supports(e1.O5.SCREEN_CAPTURE_KIT) && R().satisfies(M.A?.os.release, el.e);
}
function nT() {
    return (
        (0, f.isWindows)() &&
        ts.supports(e1.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        ts.supports(e1.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nm() {
    return ts.supports(e1.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function ng(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e1.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = ni(t);
    return Object.assign(i, e), !__OVERLAY__ && n && D.w.set(e6, tl), i;
}
function nS() {
    let e = nr();
    nb(e.inputDeviceId),
        ts.setAudioOutputDevice(e.outputDeviceId),
        no(),
        ts.setInputVolume(e.inputVolume),
        ts.setOutputVolume(e.outputVolume),
        ts.setAecDump(e.aecDumpEnabled),
        ts.setSidechainCompression(e.sidechainCompression),
        ts.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        ts.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        (0, f.isLinux)() && p.Ay?.setOpenH264Enabled?.(e.openH264Enabled),
        nx(e.audioMixerSettings);
}
function nN() {
    td || ts.enable().then(() => b.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nC(e) {
    return { id: e1.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
}
function nO(e, t) {
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
let nR = /^HDAUDIO\\(?:SUB)?FUNC_\d+&VEN_(?:8086|1002|10DE)/;
function nL(e) {
    return e?.windowsDeviceService === "voicemodvad" || e?.name?.toLowerCase().includes("voicemod") === !0;
}
function ny(e, t) {
    let { deviceType: n, defaultName: i } = t,
        r = e[{ audioinput: "inputDevices", audiooutput: "outputDevices", videoinput: "videoDevices" }[n]];
    if (0 === r.length) {
        let e = nC(i);
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
                    case nO(e, r):
                        return "WEBCAM";
                    case ["builtin", "displayport", "hdmi"].includes(e.macosTransportType ?? ""):
                    case null != e.hardwareId && nR.test(e.hardwareId):
                        return "INTEGRATED";
                    case S()(e.hardwareId).startsWith("BTHENUM"):
                    case ["bluetooth", "bluetoothle"].includes(e.macosTransportType ?? ""):
                        return "BLUETOOTH";
                    case ["airplay", "continuitycapturewireless"].includes(e.macosTransportType ?? ""):
                        return "AIRPLAY";
                    case "audioinput" === e.type && nO(e, i):
                    case "audiooutput" === e.type && nO(e, n):
                        return "HEADSET";
                }
            })(t, e),
            windowsDeviceService: t.windowsDeviceService,
        }))
        .keyBy("id")
        .value();
}
function nD(e, t) {
    let n = e[t] ?? e[e1.dx] ?? S()(e).values().first();
    return null != n ? n.id : t;
}
function nv(e) {
    if (!(0, f.isWindows)() || !X.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects) return;
    let t = tI[e];
    t?.guid != null && eU(t.guid, e, ts);
}
function nb(e) {
    ts.setAudioInputDevice(e), nv(e);
}
function nM(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nP() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = eG.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let i = n === eJ.W.USER ? e1.x.DEFAULT : e1.x.STREAM,
            r = i === e1.x.STREAM ? e1.Cn : e1.Hz,
            a = t[n] ?? {},
            { localMutes: s, localVolumes: l } = nr(i);
        for (let [e, t] of Object.entries(a))
            null == (0, ex.tM)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== r ? (l[e] = t.volume) : delete l[e],
                ts.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (e)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == a[e] &&
                    (delete s[e],
                    delete l[e],
                    ts.eachConnection((t) => {
                        t.setLocalVolume(e, r), t.setLocalMute(e, !1);
                    }, i));
        ng({ localMutes: s, localVolumes: l }, i);
    }
}
function nU(e, t) {
    if (t) {
        let { soundshareId: t, soundshareSession: a } = (function (e) {
            if (null == i)
                return (
                    e3.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
                    { soundshareId: null, soundshareSession: "" }
                );
            {
                let t = i.getExperimentalSoundshare() ? e : eV.A.getAudioPid(e),
                    n = "";
                return null != t && (n = eV.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n };
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
    return null != e && nr().videoHook && P.GH(e), { soundshareId: null, soundshareSession: null };
}
function nw() {
    let e = e1.x.DEFAULT,
        { videoToggleStateMap: t } = nr(e);
    for (let [e, n] of Object.entries(t)) n === eM.bb8.AUTO_PROBING && delete t[e];
    ng({ videoToggleStateMap: t }, e, !1);
}
function nG(e) {
    let { enabled: t } = eF.A.getConfig({ location: "MediaEngineStore" });
    return !0 === e.enabled && t && ts.supports(e1.O5.SPATIAL_AUDIO);
}
function nx(e) {
    (tY = nG(e)), ts.setAudioMixerOptions({ ...e, enabled: tY });
}
function nk(e) {
    let t = nr(),
        n = ts.getAudioSubsystem(),
        r = ts.getAudioLayer(),
        a = nD(tI, t.inputDeviceId),
        s = tI[a]?.name,
        l = (0, ev.A)(t.noiseCancellation, i.getSystemMicrophoneMode());
    eb.default.track(eM.HAw.VOICE_PROCESSING, {
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
function nF() {
    let e = nr(),
        t = tQ.size > 0,
        n = e.inputDeviceId,
        i = eK.A.hasEchoCancellation(n) || e.echoCancellation,
        r = eK.A.hasNoiseSuppression(n) || e.noiseSuppression,
        a = nE(eK.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation;
    ts.setLoopback(t, {
        echoCancellation: i,
        echoCancellationPreEcho: !t,
        noiseSuppression: r,
        automaticGainControlConfig: a,
        noiseCancellation: s,
    });
}
async function nV() {
    if (!ts.supports(e1.O5.VAAPI) || window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let e = await window.DiscordNative.processUtils.getSystemInfo();
    (e.electronGPUInfo?.gpuDevice ?? []).some((e) => 4098 === e.vendorId) &&
        ((t8 = !0), (t7 = ts.supports(e1.O5.GAMESCOPE_CAPTURE)));
}
function nB() {
    return (tx || !1) && !tk;
}
async function nH() {
    try {
        await p.Ay.ensureModule("discord_krisp");
        let e = p.Ay.requireModule("discord_krisp");
        (tx = !0),
            (c = e.getSdkVersion?.()),
            (u = e.getSuppressionLevel?.() ?? 100),
            (0, f.isWindows)() && e.setMklZenOverrideEnabled?.(eE("setupKrispNativeModule").enabled),
            e.getNcModels?.().then((e) => {
                (tF = e), i.emitChange();
            }),
            i.emitChange(),
            await p.Ay.ensureModule("discord_voice");
        let t = p.Ay.requireModule("discord_voice");
        t.setupKrispPath?.();
    } catch (t) {
        e3.warn(`Failed to load Krisp module: ${t.message}`), eH.A.captureException(t);
        let e = e1.CO.KRISP_INIT_ERROR;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? e1.CO.KRISP_INIT_ERROR : n;
        }
        (0, V.QW)({ type: V.iy.NOISE_CANCELLER_ERROR, underlyingError: nd(e) }),
            eb.default.track(eM.HAw.VOICE_PROCESSING, { noise_canceller_error: e });
    } finally {
        tG = !1;
    }
}
async function nj() {
    try {
        let e,
            t = "",
            n = !1,
            i = URL.parse(te);
        if (null === i) return void e3.log("OpenH264 URL ", i, " is invalid");
        let r = i.pathname.split("/"),
            a = r[r.length - 1].replace(".bz2", "");
        try {
            let t = await p.Ay.downloadOpenH264(
                te,
                a,
                "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f",
                (e) => {
                    e3.log("OpenH264 download status", e);
                },
            );
            e3.log("OpenH264 is ready", t), (n = t.fetchedFromNetwork), (e = !0);
        } catch (n) {
            e3.error("OpenH264 download failed", n), (t = n.message), (e = !1);
        }
        if (
            (eb.default.track(eM.HAw.VIDEO_OPENH264_DOWNLOADED, {
                success: e,
                fetched_from_network: n,
                error_message: t,
            }),
            e)
        ) {
            let e = await p.Ay.cleanupUnusedOpenH264Files([a]);
            e3.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        e3.error("OpenH264 download failed", e);
    }
}
function nW(e) {
    e === e1.rB.AUTOMATIC
        ? (ng({ automaticAudioSubsystem: !0 }), nY())
        : (ng({ automaticAudioSubsystem: !1 }), ts.setAudioSubsystem(e));
}
function nY() {
    ts.queueAudioSubsystem(e1.rB.EXPERIMENTAL);
}
function nK(e) {
    let { section: t } = e;
    return t === eM.nc_.VOICE && nN(), !1;
}
class n$ extends L.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        let e;
        if (
            ((l ??= new ed(ts, this)),
            tT.start(e8, () => {
                e3.error("Device enumeration timed out"), eb.default.track(eM.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
            }),
            ts.on(y.bg.Connection, (e) => {
                let t;
                nF(), na(e), nl(e), nI(e);
                let n = nr();
                e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers),
                    e.setQoS(n.qos),
                    (0, f.isWindows)()
                        ? (e.setExperimentFlag(e1.fd.H265_HARDWARE_ONLY, !0),
                          (null != tz
                              ? tz
                              : "u" > typeof window
                                ? (tz = nn().then((e) => ((t$ = e), e)))
                                : Promise.resolve(!1)
                          ).then((t) => {
                              e.setExperimentFlag(e1.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                          }))
                        : (0, f.isMac)() && e.setExperimentFlag(e1.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                    (0, f.isLinux)() && n.openH264Enabled && e.setExperimentFlag(e1.fd.USE_LIBOPENH264_DECODER, !0),
                    (function (e) {
                        let { location: t, disable: n = !1 } = e;
                        return n ? ec.definition.defaultConfig : ec.getConfig({ location: t });
                    })({ location: "setupMediaEngine" }).enabled &&
                        e.setExperimentFlag(e1.fd.LOW_LATENCY_RATE_CONTROL, !0),
                    e.setExperimentFlag(e1.fd.RESET_DECODER_ON_ERRORS, !0),
                    e.setExperimentFlag(e1.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
                let { swallowVolumeOnlySpeakingEvents: r } = w.A.getConfig({ location: "MediaEngineStore" });
                if (
                    (r && e.setExperimentFlag(e1.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === e1.x.STREAM)
                ) {
                    let t = nM(tf);
                    e.setSoundshareDiscardRearChannels(t);
                }
                if ((0, f.isWindows)())
                    e.setExperimentFlag(e1.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(e1.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e1.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                else if ((0, f.isMac)())
                    e.setExperimentFlag(e1.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e1.fd.SIGNAL_AV1_HARDWARE_DECODE, !0),
                        e.setExperimentFlag(
                            e1.fd.H265_DISABLE_ENCODE,
                            !(
                                window?.DiscordNative?.os.arch === "arm64" &&
                                R().satisfies(window?.DiscordNative?.os.release, e1.Dk)
                            ),
                        );
                else if ((0, f.isLinux)()) {
                    let { enabled: t } = q.getConfig({ location: "MediaEngineStore" });
                    t && e.setExperimentFlag(e1.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(e1.fd.SIGNAL_AV1_DECODE, !0);
                } else
                    ((0, f.isIOS)() || (0, f.isAndroid)()) &&
                        (e.setExperimentFlag(e1.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e1.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
                if ((0, f.isWeb)()) {
                    let { enabled: t } = Q.getConfig({ location: "MediaEngineStore" });
                    e.setExperimentFlag(e1.fd.BROWSER_HEVC, t);
                }
                for (let r of ((0, f.isWindows)() &&
                    t0?.startsWith("AMD") &&
                    eO("MediaEngineStore").enabled &&
                    e.setExperimentFlag(e1.fd.WMF_GPU_ENCODE, !0),
                (0, f.isWindows)() &&
                    t0?.startsWith("Intel") &&
                    !0 === t1 &&
                    1 === t2 &&
                    eR.getConfig({ location: "MediaEngineStore" }).enabled &&
                    (e.setExperimentFlag(e1.fd.WMF_GPU_ENCODE, !0), e.setExperimentFlag(e1.fd.INTEL_GPU_DISABLE, !0)),
                (0, f.isWindows)() &&
                    t0?.startsWith("Intel") &&
                    !0 === t1 &&
                    1 === t2 &&
                    eN.getConfig({ location: "MediaEngineStore" }).enabled &&
                    e.setExperimentFlag(e1.fd.INTEL_GPU_DISABLE, !0),
                (0, f.isWindows)() &&
                    t0?.startsWith("Qualcomm") &&
                    eO("MediaEngineStore").enabled &&
                    e.setExperimentFlag(e1.fd.WMF_GPU_ENCODE, !0),
                ts.setHasFullbandPerformance(null === (t = (0, F.A)()) || t >= 31),
                e.setRemoteAudioHistory(1e3),
                (0, x.A)(i) && e.setClipsKeyFrameInterval(e1.X1),
                (n = nr(e.context)),
                e.setPostponeDecodeLevel(100),
                Object.keys(n.localMutes)))
                    r !== eW.default.getId() && e.setLocalMute(r, n.localMutes[r]);
                for (let t of Object.keys(n.localVolumes))
                    t !== eW.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
                for (let t of Object.keys(n.localPans)) {
                    let i = n.localPans[t];
                    e.setLocalPan(t, i.left, i.right);
                }
                for (let t of Object.keys(n.disabledLocalVideos)) e.setLocalVideoDisabled(t, n.disabledLocalVideos[t]);
                e.on(y.yq.Speaking, (t, n, i, r) => {
                    b.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: r });
                }),
                    e.context === e1.x.DEFAULT &&
                        ((ty = !1),
                        e.on(y.yq.SpeakingWhileMuted, () => {
                            let e = !ty;
                            (ty = !0),
                                e && i.emitChange(),
                                tD.start(e7, () => {
                                    (ty = !1), i.emitChange();
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
                            eb.default.track(eM.HAw.VIDEOHOOK_INITIALIZED, {
                                backend: e,
                                format: t,
                                framebuffer_format: n,
                                sample_count: i,
                                success: r,
                                reinitialization: s,
                                ...(0, W.A)(a?.desktopSource),
                            });
                    }),
                    e.on(y.yq.NoiseCancellationError, nu),
                    e.on(y.yq.VoiceActivityDetectorError, nu),
                    e.on(y.yq.SdpError, (e, t, n, i) => {
                        eb.default.track(eM.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: i });
                    }),
                    e.on(y.yq.VideoState, (t) => {
                        b.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                    }),
                    e.setBitRate(eY.A.bitrate),
                    e.applyVideoQualityMode(eZ.A.mode),
                    (0, f.isWindows)() &&
                        ts.supports(e1.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                        ts.setAsyncVideoInputDeviceInit(!0);
            }),
            ts.on(y.bg.DeviceChange, (e, t, n) => {
                tT.stop(),
                    b.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
            }),
            ts.on(y.bg.VolumeChange, (e, t) => {
                b.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
            }),
            ts.on(y.bg.DesktopSourceEnd, (e, t) => {
                b.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
            }),
            ts.on(y.bg.AudioPermission, (e) => {
                (tq = !0), b.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
            }),
            ts.on(y.bg.VideoPermission, (e) => {
                b.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
            }),
            ts.on(y.bg.WatchdogTimeout, async () => {
                let e;
                if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                    try {
                        await eV.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                    } catch (t) {
                        "number" == typeof t.status && (e = t.status);
                    }
                e3.warn(`Watchdog timeout, report submission status: ${e ?? 200}`);
                let t = null != M.A.processUtils.setCrashReason;
                try {
                    await eb.default.track(
                        eM.HAw.VOICE_WATCHDOG_TIMEOUT,
                        { minidump_submission_error: e, will_restart: t },
                        { flush: !0 },
                    );
                } catch (e) {
                    e3.error("Failed to flush voice watchdog timeout analytics event", e);
                }
                t &&
                    (e3.info("Relaunching app due to voice watchdog timeout"),
                    await M.A.processUtils.setCrashReason("voice-watchdog-timeout"),
                    D.w.set("discord_watchdog_restart_timestamp", Date.now().toString()),
                    M.A.app.relaunch());
            }),
            ts.on(y.bg.VideoInputInitialized, (e) => {
                eb.default.track(eM.HAw.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired
                        ? null
                        : Math.round(e.timeToFirstFrame * eB.A.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy,
                    media_session_id: ez.A.getMediaSessionId(),
                    rtc_connection_id: ez.A.getRTCConnectionId(),
                });
            }),
            ts.on(y.bg.AudioInputInitialized, (e) => {
                eb.default.track(eM.HAw.AUDIO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_initialized_ms: Math.round(e.timeToInitialized * eB.A.Millis.SECOND),
                    rtc_connection_id: ez.A.getRTCConnectionId(),
                });
            }),
            ts.on(y.bg.ClipsRecordingRestartNeeded, () => {
                b.h.dispatch({ type: "CLIPS_RESTART" });
            }),
            ts.on(y.bg.ClipsInitFailure, (e, t) => {
                let n = t_ < 3;
                (t_ += 1),
                    b.h.wait(() => {
                        b.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t }),
                            n
                                ? b.h.dispatch({ type: "CLIPS_RESTART" })
                                : e3.warn(
                                      `Clips init failure budget exhausted (${t_} consecutive unhealthy attempts); skipping auto-restart. A settings flip / game change / app restart will retry.`,
                                  );
                    });
            }),
            ts.on(y.bg.ClipsRecordingHealthy, () => {
                0 !== t_ && (e3.info(`Clips bridge reported healthy; resetting restart budget (was ${t_}).`), (t_ = 0));
            }),
            ts.on(y.bg.ClipsRecordingReadyChanged, (e) => {
                tE !== e && (e3.info(`Clips recorder ready changed: ${e}`), (tE = e));
            }),
            ts.on(y.bg.ClipsBridgeIdleShutdown, () => {
                e3.info("Clips bridge idle shutdown");
            }),
            ts.on(y.bg.ClipsRecordingEnded, (e, t) => {
                s?.desktopSource?.id === e &&
                    (null != t && a?.desktopSource?.soundshareId !== t && P.c1(t), (s = null));
            }),
            ts.on(y.bg.NativeScreenSharePickerUpdate, (e, t) => {
                b.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
            }),
            ts.on(y.bg.NativeScreenSharePickerCancel, (e) => {
                b.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
            }),
            ts.on(y.bg.NativeScreenSharePickerError, (e) => {
                b.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
            }),
            ts.on(y.bg.AudioDeviceModuleError, (e, t, n) => {
                eb.default.track(eM.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
            }),
            ts.on(y.bg.VideoCodecError, (e) => {
                let t = "encode" === e.mode ? V.iy.VIDEO_ENCODE_ERROR : V.iy.VIDEO_DECODE_ERROR,
                    n = { videoCodec: e.codecStandard, errorMessage: e.message };
                (0, V.QW)(
                    t === V.iy.VIDEO_ENCODE_ERROR
                        ? { type: t, ...n, videoEncoder: e.implName }
                        : { type: t, ...n, videoDecoder: e.implName },
                );
            }),
            ts.on(y.bg.ConnectionStats, (e) => {
                b.h.dispatch({
                    type: "MEDIA_ENGINE_CONNECTION_STATS",
                    connectionStats: e.map((e) => {
                        let { stats: t, connection: n } = e;
                        return {
                            stats: t,
                            mediaEngineConnectionId: n.mediaEngineConnectionId,
                            version: tt++,
                            context: n.context,
                        };
                    }),
                });
            }),
            ts.on(y.bg.VoiceProcessingError, nu),
            ts.on(y.bg.VideoFilterError, n_),
            ts.on(y.bg.VoiceQueueMetrics, (e) => {
                let t = nz(e);
                null !== t && eb.default.track(eM.HAw.VOICE_QUEUE_METRICS, t);
            }),
            ts.setOnVideoContainerResized((e, t, n) => {
                b.h.wait(() =>
                    b.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
                );
            }),
            nV(),
            l.reset(),
            (0, ew.w)().then((e) => {
                null != e && ((t0 = e.gpu_brand), (t1 = e.has_intel_hybrid_igpu), (t2 = e.gpu_count));
            }),
            ts.on(y.bg.SystemMicrophoneModeChange, (e) => {
                (E = e), ts.eachConnection(nI), i.emitChange();
            }),
            null != (e = D.w.get("audio")) && (D.w.set(e6, { [e1.x.DEFAULT]: e }), D.w.remove("audio")),
            (tl = D.w.get(e6) ?? {}),
            S().each(tl, (e) => {
                S().defaultsDeep(e, ti()),
                    null != e.modeOptions &&
                        "string" == typeof e.modeOptions.shortcut &&
                        (e.modeOptions.shortcut = (0, ej.OH)(e.modeOptions.shortcut)),
                    null != e.modeOptions &&
                        4 !== e.vadUseKrispSettingVersion &&
                        ((e.vadUseKrispSettingVersion = 4), (e.modeOptions.vadUseKrisp = !0)),
                    e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                    e.vadThrehsoldMigrated ||
                        ((e.vadThrehsoldMigrated = !0),
                        e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = -60)),
                    ts.supports(e1.O5.SIDECHAIN_COMPRESSION) &&
                        e.sidechainCompressionSettingVersion < 1 &&
                        ((e.sidechainCompressionSettingVersion = 1), (e.sidechainCompression = !0)),
                    e.audioMixerSettingsVersion < 3 &&
                        ((e.audioMixerSettingsVersion = 3), (e.audioMixerSettings = { ...eQ })),
                    (0, f.isWeb)()
                        ? 1 !== e.ncUseKrispjsSettingVersion &&
                          ((e.ncUseKrispjsSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                        : 1 !== e.ncUseKrispSettingVersion &&
                          ((e.ncUseKrispSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
            }),
            nS(),
            ((0, f.isWindows)() || (0, f.isLinux)() || (0, f.isMac)()) && !__OVERLAY__ && !tG && !tx
                ? ((tG = !0), nH())
                : (0, f.isWeb)() && ts.supports(e1.O5.NOISE_CANCELLATION)
                  ? ((tx = !0), i.emitChange())
                  : (0, f.isWeb)() && ng({ noiseCancellation: !1 }),
            (0, f.isLinux)() && nj(),
            nw(),
            (0, f.isDesktop)() && f.isPlatformEmbedded && !t9)
        ) {
            async function t() {
                let e = await new Promise((e) => {
                    p.Ay.pollQueueMetrics((t) => {
                        e(t);
                    });
                });
                e.periodMs = e1.tl;
                let n = nz(e);
                null !== n && eb.default.track(eM.HAw.VOICE_QUEUE_METRICS, n), setTimeout(t, e1.tl);
            }
            (t9 = !0), setTimeout(t, e1.tl);
        }
        (0, f.isWindows)() &&
            f.isPlatformEmbedded &&
            null === th &&
            ts
                .getCodecSurvey()
                .then((e) => {
                    try {
                        let t = JSON.parse(e);
                        if (null == t || null == t.available_video_decoders)
                            throw Error("decoder survey is not available");
                        th = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                    } catch (e) {
                        e3.error("Failed to parse codec survey", e), (th = !1);
                    }
                })
                .catch((e) => {
                    e3.error("Failed to get codec survey", e), (th = !1);
                })
                .finally(() => {
                    b.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
                }),
            (tJ = {
                [e1.O5.VIDEO]: ts.supports(e1.O5.VIDEO),
                [e1.O5.DESKTOP_CAPTURE]: ts.supports(e1.O5.DESKTOP_CAPTURE),
                [e1.O5.HYBRID_VIDEO]: ts.supports(e1.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eW.default, eY.A, eK.A, e$.A, G.Ay, B.A, ez.A, j.Ay, eG.A, eq.default, eZ.A);
    }
    supports(e) {
        return ts.supports(e);
    }
    supportsInApp(e) {
        return tJ[e] || ts.supports(e);
    }
    isSupported() {
        return ts.supported();
    }
    isNoiseSuppressionSupported() {
        return ts.supports(e1.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return nB();
    }
    isNoiseCancellationError() {
        return tH;
    }
    isAutomaticGainControlSupported() {
        return ts.supports(e1.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nm() && (ts.supports(e1.O5.LEGACY_AUDIO_SUBSYSTEM) || ts.supports(e1.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return ts.supports(e1.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === ts.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return nB();
    }
    isAecDumpSupported() {
        return ts.supports(e1.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return ts.supports(e1.O5.VIDEO) && ts.supports(e1.O5.SIMULCAST);
    }
    getAecDump() {
        return nr().aecDumpEnabled;
    }
    getMediaEngine() {
        return ts;
    }
    getVideoComponent() {
        return ts.Video;
    }
    getCameraComponent() {
        return ts.Camera;
    }
    getKrispSuppressionLevel() {
        return u ?? 100;
    }
    getKrispEnableStats() {
        return tV;
    }
    isEnabled() {
        return td;
    }
    isMute() {
        return this.isSelfMute() || tm;
    }
    isDeaf() {
        return this.isSelfDeaf() || tN;
    }
    isServerMute() {
        return tm;
    }
    isServerDeaf() {
        return tN;
    }
    getAudioMixerSettings() {
        return nr().audioMixerSettings;
    }
    isSpatialAudioEnabled() {
        return !0 === this.getAudioMixerSettings().enabled;
    }
    isSpatialAudioActive() {
        return tY;
    }
    hasContext(e) {
        return null != tl[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e1.x.DEFAULT;
        return e === e1.x.DEFAULT && tg;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e1.x.DEFAULT;
        return (
            !this.isEnabled() ||
            nr(e).mute ||
            !ey.A.didHavePermission(eX.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === e1.x.DEFAULT && tS)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tL;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tL = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e1.x.DEFAULT,
            t = t6 && "voice_isolation" !== this.getSystemMicrophoneMode() && nr(e).mode === eM.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (eK.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return t3;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e1.x.DEFAULT;
        return !this.isSupported() || nr(e).deaf;
    }
    isVideoEnabled() {
        return tC && tb;
    }
    isVideoAvailable() {
        return Object.values(tp).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return tb;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e1.x.STREAM;
        return tu === e && null != a;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e1.x.STREAM;
        return tu === e && null != a && a.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e1.x.DEFAULT;
        return e !== eW.default.getId() && (nr(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return ts.supports(e1.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e1.x.DEFAULT;
        return nr(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e1.x.DEFAULT;
        return nr(t).videoToggleStateMap[e] ?? eM.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e1.x.DEFAULT;
        return t === e1.x.DEFAULT && tZ.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e1.x.DEFAULT;
        return e === e1.x.DEFAULT && tZ.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tj;
    }
    isNativeAudioPermissionReady() {
        return tq;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return tu;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return tA;
    }
    isH264MfDecodeAvailable() {
        return th;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e1.x.DEFAULT,
            n = nr(t).localPans[e];
        return null != n ? n : e4;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e1.x.DEFAULT,
            n = t === e1.x.STREAM ? e1.Cn : e1.Hz,
            i = nr(t).localVolumes[e];
        return null != i ? i : n;
    }
    getInputVolume() {
        return nr().inputVolume;
    }
    getOutputVolume() {
        return nr().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e1.x.DEFAULT;
        return nr(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e1.x.DEFAULT;
        return nr(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            S().each(tl, (t, n) => {
                let {
                    mode: i,
                    modeOptions: { shortcut: r },
                } = t;
                i === eM.TBI.PUSH_TO_TALK && to.has(n) && (e[n] = r);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nD(tI, nr().inputDeviceId);
    }
    getOutputDeviceId() {
        return nD(tf, nr().outputDeviceId);
    }
    getVideoDeviceId() {
        return nD(tp, nr().videoDeviceId);
    }
    getInputDevices() {
        return tI;
    }
    getOutputDevices() {
        return tf;
    }
    getVideoDevices() {
        return tp;
    }
    getEchoCancellation() {
        let e = nr();
        return eK.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return ts.supports(e1.O5.SIDECHAIN_COMPRESSION) && nr().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return nr().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return nr().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== t$ && t$;
    }
    getOpenH264Enabled() {
        return (0, f.isLinux)() && nr().openH264Enabled;
    }
    getLoopback() {
        return tQ.size > 0;
    }
    getLoopbackReasons() {
        return tQ;
    }
    getNoiseSuppression() {
        let e = nr();
        return eK.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = nr();
        return eK.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return nr().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return nr().noiseCancellation;
    }
    getHardwareEncoding() {
        return !0;
    }
    getEnableSilenceWarning() {
        return nr().silenceWarning;
    }
    getDebugLogging() {
        return ts.getDebugLogging();
    }
    getQoS() {
        return nr().qos;
    }
    getAttenuation() {
        return nr().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return nr().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return nr().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return nT() && nr().automaticAudioSubsystem ? e1.rB.AUTOMATIC : ts.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return ts.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return nr().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === e0.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e1.x.DEFAULT;
        return nr(e);
    }
    getState() {
        return {
            settingsByContext: tl,
            inputDevices: tI,
            outputDevices: tf,
            appSupported: tJ,
            krispModuleLoaded: tx,
            krispFatalError: tk,
            krispVersion: c,
            krispSuppressionLevel: u,
            goLiveSource: a,
            goLiveContext: tu,
        };
    }
    getInputDetectedThisConnection() {
        return tM;
    }
    getInputDetected() {
        return l.inputDetected;
    }
    getLastInputDetectedUpdateTime() {
        return l.lastUpdateTime;
    }
    getNoInputDetectedNotice() {
        return tP;
    }
    getInputDeviceOSMuted() {
        return o;
    }
    getInputDeviceOSVolume() {
        return d;
    }
    getPacketDelay() {
        return f.isPlatformEmbedded || this.getMode() !== eM.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        ts.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return tc;
    }
    getVideoHook() {
        return nr().videoHook;
    }
    supportsVideoHook() {
        return ts.supports(e1.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = nr().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return ts.supports(e1.O5.EXPERIMENTAL_SOUNDSHARE) && R().satisfies(M.A?.os.release, el.$x);
    }
    supportsHookSoundshare() {
        return (0, f.isWindows)() && ts.supports(e1.O5.SOUNDSHARE) && R().satisfies(M.A?.os.release, el.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = nr().useSystemScreensharePicker,
            n = (0, f.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return ts.supports(e1.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return t8;
    }
    getVideoEncoderExperiments(e, t) {
        let n = ["unk"];
        if (
            (n.push("nvNewPresets"),
            e === e1.x.STREAM ? n.push("nvRelaxRc=250") : n.push("nvRelaxRc=75"),
            this.getUseVaapiEncoder() && n.push("vaapi"),
            (function (e) {
                let { location: t, disable: n = !1 } = e;
                return n ? eA.definition.defaultConfig : eA.getConfig({ location: t });
            })({ location: "getVideoEncoderExperiments" }).enabled && n.push("nvReconFrames"),
            e === e1.x.STREAM && "streamer" === t && (0, f.isWindows)())
        ) {
            n.push("useCaptureDeviceForEncode");
            let { overrideDeviceReuse: e } = eT.getConfig({ location: "handleReady" });
            e && n.push("videoCaptureDeviceOverrideReuse");
        }
        return n.push("linux-vulkan"), n.join(",");
    }
    getUseGamescopeCapture() {
        return t7;
    }
    getSpeakingWhileMuted() {
        return ty;
    }
    getKrispModelOverride() {
        return _;
    }
    getKrispModels() {
        return tF;
    }
    getKrispVadActivationThreshold() {
        return nr().modeOptions.vadKrispActivationThreshold ?? 0.5;
    }
    hasActiveCallKitCall() {
        return t5;
    }
    setHasActiveCallKitCall(e) {
        t5 = e;
    }
    supportsScreenSoundshare() {
        return (0, f.isMac)()
            ? ts.supports(e1.O5.SOUNDSHARE) && R().satisfies(M.A?.os.release, el.P$) && np()
            : (0, f.isWindows)()
              ? ts.supports(e1.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, f.isLinux)() && ts.supports(e1.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, f.isWindows)()) {
            if (this.getBypassSystemInputProcessing()) return;
            return tK[this.getInputDeviceId()]?.active?.find((e) => "deep_noise_suppression" === e);
        }
        if ((0, f.isMac)() || (0, f.isIOS)()) return E;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e1.x.DEFAULT,
            t = this.supports(e1.O5.VIDEO)
                ? [{ rid: "100", type: e === e1.x.DEFAULT ? e1.mI.VIDEO : e1.mI.SCREEN, quality: e1.Y4 }]
                : [];
        return (
            this.isSimulcastSupported() &&
                e === e1.x.DEFAULT &&
                J.getConfig({ location: "MediaEngineStore.getVideoStreamParameters" }).enableSimulcast &&
                t.push({ rid: "50", type: e1.mI.VIDEO, quality: e1.Cl }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: (0, f.isWeb)() };
        return ts.fetchAsyncResources(e);
    }
    startDavePreload() {
        !tW &&
            ((tW = !0),
            (0, f.isWeb)() &&
                ts.fetchAsyncResources({ fetchDave: !0 }).catch((e) => {
                    e3.warn("DAVE preload failed:", e), eH.A.captureException(e);
                }));
    }
    getSupportedSecureFramesProtocolVersion() {
        return ts.getSupportedSecureFramesProtocolVersion();
    }
    hasClipsSource() {
        return null != s;
    }
    isClipsRecordingReady() {
        return tE;
    }
    isClipsRecordingReadySignalSupported() {
        return ts.supports(e1.O5.CLIPS_RECORDING_READY_EVENTS);
    }
    getGpuBrand() {
        return t0;
    }
}
function nz(e) {
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
let nq = (i = new n$(b.h, {
    VOICE_CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n, currentVoiceChannelId: i, video: r } = e;
        if ((i !== n && no(r, null), null != t || null == n)) {
            tw = !1;
            return;
        }
        if (tw) return;
        tw = !0;
        let a = nr();
        (a.mute || a.deaf) && (ng({ deaf: !1, mute: !1 }), ts.eachConnection(nl));
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (r === t.sessionId) {
                (tm = t.mute || t.suppress), (tN = t.deaf), ts.eachConnection(nl);
                let e = null != t.guildId && null != t.channelId && null != tB && tB !== t.channelId,
                    n = !tw && null == t.channelId;
                return no(!e && !n && tC), (tB = t.channelId), !0;
            }
            return __OVERLAY__ || t.userId !== eW.default.getId() || null != ez.A.getChannelId() || no(!1, null), e;
        }, !1);
    },
    CONNECTION_OPEN: function (e) {
        (r = e.sessionId), (tm = !1), (tN = !1);
        let t = nr();
        nT() && (nm() ? nW(e1.rB.AUTOMATIC) : t.automaticAudioSubsystem && nY()),
            ts.supports(e1.O5.OFFLOAD_ADM_CONTROLS) && ts.setOffloadAdmControls(!0),
            (0, f.isIOS)() &&
                er.getConfig({ location: "handleConnectionOpen" }).enabled &&
                ts.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
            (0, f.isWindows)() &&
                tx &&
                p.Ay.requireModule("discord_krisp").setMklZenOverrideEnabled?.(eE("handleConnectionOpen").enabled),
            nv(t.inputDeviceId),
            nP();
    },
    CONNECTION_CLOSED: function () {
        r = null;
    },
    POST_CONNECTION_OPEN: function () {
        return (0, f.isWeb)() && i.startDavePreload(), !1;
    },
    RTC_CONNECTION_STATE: function (e) {
        switch (e.state) {
            case eM.S7L.CONNECTING:
                nN();
                break;
            case eM.S7L.RTC_CONNECTING:
                (tP = !1), (o = void 0), (d = void 0), (tM = !1), (t6 = !1), t4.stop(), tU.stop(), l.reset();
                break;
            case eM.S7L.RTC_CONNECTED:
                no();
                break;
            case eM.S7L.DISCONNECTED:
                (ne = {}),
                    (function () {
                        if (0 === tZ.size) return;
                        let e = e1.x.DEFAULT,
                            { disabledLocalVideos: t } = nr(e);
                        tZ.forEach((n) => {
                            m()(t[n], "If you are auto-disabled, then you are also disabled."),
                                delete t[n],
                                ts.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
                        }),
                            tZ.clear(),
                            ng({ disabledLocalVideos: t }, e, !1);
                    })(),
                    nw();
        }
    },
    AUDIO_SET_TEMPORARY_SELF_MUTE: function (e) {
        let { mute: t } = e;
        (tg = t), ts.eachConnection(nl);
    },
    AUDIO_TOGGLE_SELF_MUTE: function (e) {
        let { context: t, playSoundEffect: n } = e,
            { mute: i, deaf: r } = nr(t);
        if (t === e1.x.DEFAULT && (ey.A.requestPermission(eX.iL.AUDIO), tS)) return !1;
        (i = !r && !i) || (r = !1), n || (tL = !0), ng({ mute: i, deaf: r }, t), ts.eachConnection(nl);
    },
    AUDIO_SET_SELF_MUTE: function (e) {
        let { context: t, mute: n, playSoundEffect: i } = e;
        ng({ mute: n }, t), i || (tL = !0), ts.eachConnection(nl);
    },
    AUDIO_TOGGLE_SELF_DEAF: function (e) {
        let { context: t } = e;
        ng({ deaf: !nr(t).deaf }, t), ts.eachConnection(nl);
    },
    AUDIO_TOGGLE_LOCAL_MUTE: function (e) {
        let { context: t, userId: n } = e;
        if (n === eW.default.getId()) return;
        let { localMutes: i } = nr(t);
        i[n] ? delete i[n] : (i[n] = !0),
            ng({ localMutes: i }, t),
            ts.eachConnection((e) => e.setLocalMute(n, i[n] || !1), t);
    },
    AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
        let { context: t, userId: n, videoToggleState: i, persist: r, isAutomatic: a } = e;
        m()(!(r && a), "These are not allowed to both be true.");
        let s = i === eM.bb8.DISABLED,
            { disabledLocalVideos: l } = nr(t),
            o = l[n] ?? !1,
            d = tZ.has(n),
            c = i === eM.bb8.AUTO_ENABLED || i === eM.bb8.MANUAL_ENABLED;
        e3.info(`disableVideo=${s} currentlyDisabled=${o} currentlyAutoDisabled=${d}, isVideoShown=${c}`),
            m()(!(d && !o), "If you are auto-disabled, then you are also disabled.");
        let u = s !== o,
            _ = t === e1.x.DEFAULT,
            E = a && u && _,
            A = r && u && _;
        e3.info(`changed=${u} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${E} isManualToggleByUser=${A}`);
        let { videoToggleStateMap: h } = nr(t);
        if (
            (h[n] === eM.bb8.AUTO_PROBING &&
                i === eM.bb8.AUTO_ENABLED &&
                (0, eL.A)(n, s ? e1.Al.AUTO_DISABLE : e1.Al.AUTO_ENABLE, c),
            (h[n] = i),
            ng({ videoToggleStateMap: h }, t, r),
            i === eM.bb8.AUTO_PROBING
                ? ez.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
                : ez.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
            tX ||
                (e3.info(`isAutoDisableAllowed=${tX} - disabling VideoHealthManager`),
                ez.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
            E)
        ) {
            if ((!s && !d) || (s && !tX)) return;
            (0, eL.A)(n, s ? e1.Al.AUTO_DISABLE : e1.Al.AUTO_ENABLE, c), s ? tZ.add(n) : tZ.delete(n);
        } else
            A &&
                (d && !s
                    ? (e3.info("disallowing auto-disable for this session because of manual override by user"),
                      (tX = !1),
                      ez.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                      (0, eL.A)(n, e1.Al.MANUAL_REENABLE, c))
                    : (0, eL.A)(n, s ? e1.Al.MANUAL_DISABLE : e1.Al.MANUAL_ENABLE, c));
        _ && !s && tZ.delete(n),
            s ? (l[n] = !0) : delete l[n],
            ng({ disabledLocalVideos: l }, t, r),
            ts.eachConnection((e) => e.setLocalVideoDisabled(n, l[n] ?? !1), t);
    },
    AUDIO_SET_LOCAL_VOLUME: function (e) {
        let { context: t, userId: n, volume: i } = e;
        if (n === eW.default.getId()) return;
        let r = t === e1.x.STREAM ? e1.Cn : e1.Hz,
            { localVolumes: a } = nr(t);
        i === r ? delete a[n] : (a[n] = i),
            ng({ localVolumes: a }, t),
            ts.eachConnection((e) => e.setLocalVolume(n, i), t);
    },
    AUDIO_SET_AUDIO_MIXER_SETTINGS: function (e) {
        let { context: t, settings: n } = e;
        ng({ audioMixerSettings: n }, t), nx(n), ts.eachConnection((e) => e.setSpatialAudioEnabled(tY), e1.x.DEFAULT);
    },
    AUDIO_SET_LOCAL_PAN: function (e) {
        let { context: t, userId: n, left: i, right: r } = e,
            { localPans: a } = nr(t);
        (a[n] = { left: i, right: r }), ng({ localPans: a }, t), ts.eachConnection((e) => e.setLocalPan(n, i, r), t);
    },
    AUDIO_SET_MODE: function (e) {
        let { context: t, mode: n, options: i } = e;
        ng({ mode: n, modeOptions: { ...i, updatedAt: Date.now() } }, t), ts.eachConnection(na);
    },
    AUDIO_SET_INPUT_VOLUME: function (e) {
        let { volume: t } = e;
        ng({ inputVolume: ns(t) }), ts.setInputVolume(t);
    },
    AUDIO_SET_OUTPUT_VOLUME: function (e) {
        let { volume: t } = e;
        ng({ outputVolume: t }), ts.setOutputVolume(t);
    },
    AUDIO_SET_INPUT_DEVICE: function (e) {
        let { id: t } = e;
        (t = nD(tI, t)),
            (tA = performance.now()),
            ng({ inputDeviceId: t }),
            nb(t),
            ts.eachConnection(nI),
            (o = void 0),
            (d = void 0),
            t4.stop(),
            (t6 = !1);
        let { resetSilenceWarningOnDeviceChange: n } = eh.A.getConfig({
            location: "MediaEngineStore.handleSetInputDevice",
        });
        n && ((tM = !1), l.reset());
    },
    AUDIO_SET_OUTPUT_DEVICE: function (e) {
        let { id: t } = e;
        ng({ outputDeviceId: (t = nD(tf, t)) }), ts.setAudioOutputDevice(t), ts.eachConnection(nI);
    },
    AUDIO_SET_ACTIVE_INPUT_PROFILE: function (e) {
        let { inputProfile: t } = e;
        ng({ activeInputProfile: t });
        let n = nr();
        ts.eachConnection((e) => {
            na(e), nI(e);
        }),
            ts.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
            nF();
    },
    AUDIO_SET_ECHO_CANCELLATION: function (e) {
        let t = ng({ echoCancellation: e.enabled });
        ts.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nF(), nk(e.location);
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION: function (e) {
        let t;
        (t = ng({ sidechainCompression: e.enabled })), ts.setSidechainCompression(t.sidechainCompression);
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function (e) {
        let t = ng({ sidechainCompressionStrength: e.strength });
        ts.setSidechainCompressionStrength(t.sidechainCompressionStrength);
    },
    AUDIO_SET_LOOPBACK: function (e) {
        let { enabled: t, loopbackReason: n } = e;
        return t ? tQ.add(n) : tQ.delete(n), nF();
    },
    AUDIO_SET_NOISE_SUPPRESSION: function (e) {
        let t = ng({ noiseSuppression: e.enabled });
        ts.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nF(), nk(e.location);
    },
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function (e) {
        let t = ng({ automaticGainControl: e.enabled });
        ts.eachConnection((e) => nA(e, t.automaticGainControl)), nF(), nk(e.location);
    },
    AUDIO_SET_NOISE_CANCELLATION: function (e) {
        let t = ng({ noiseCancellation: e.enabled });
        ts.eachConnection((e) => nh(e, t.noiseCancellation)), nF(), nk(e.location);
    },
    AUDIO_SET_KRISP_MODEL_OVERRIDE: function (e) {
        eD.A.setKrispModelOverride(e.model), (_ = e.model), nF();
    },
    AUDIO_SET_DISPLAY_SILENCE_WARNING: function (e) {
        ng({ silenceWarning: e.enabled });
    },
    AUDIO_SET_DEBUG_LOGGING: function (e) {
        ts.setDebugLogging(e.enabled);
    },
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: function (e) {
        let { level: t } = e;
        (u = t), eD.A.setKrispSuppressionLevel(t);
    },
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: function (e) {
        (0, f.isWeb)() || ((tV = e.enabled), ts.setNoiseCancellationEnableStats?.(e.enabled));
    },
    MEDIA_ENGINE_SET_VIDEO_HOOK: function (e) {
        ng({ videoHook: e.enabled });
    },
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function (e) {
        ng({ experimentalSoundshare2: e.enabled });
    },
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: function (e) {
        let { enabled: t } = e;
        ng({ useSystemScreensharePicker: t });
    },
    AUDIO_SET_ATTENUATION: function (e) {
        let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i } = e,
            r = ng({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i });
        ts.eachConnection((e) =>
            e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers),
        );
    },
    AUDIO_SET_QOS: function (e) {
        let { enabled: t } = e;
        ng({ qos: t }), ts.eachConnection((e) => e.setQoS(t));
    },
    MEDIA_ENGINE_DEVICES: function (e) {
        let t = tI;
        if (
            ((tI = ny(e, { deviceType: e1.oh.AUDIO_INPUT, defaultName: e2.intl.string(e2.t["/QIjDA"]) })),
            !S().isEqual(tI, t))
        ) {
            let e = nr();
            nb(nD(tI, e.inputDeviceId)), ts.eachConnection(nI);
        }
        !(function (e) {
            let t = tf;
            if (
                ((tf = ny(e, { deviceType: e1.oh.AUDIO_OUTPUT, defaultName: e2.intl.string(e2.t.xlUg0v) })),
                !S().isEqual(tf, t))
            ) {
                let e = nr(),
                    n = nD(tf, e.outputDeviceId);
                ts.setAudioOutputDevice(n), ts.eachConnection(nI);
                let i = nM(t),
                    r = nM(tf);
                i !== r &&
                    ts.eachConnection((e) => {
                        e.context === e1.x.STREAM && e.setSoundshareDiscardRearChannels(r);
                    });
            }
        })(e);
        tb = e.videoDevices.length > 0;
        let n = tp;
        if (
            ((tp = ny(e, { deviceType: e1.oh.VIDEO_INPUT, defaultName: e2.intl.string(e2.t.WKWARY) })),
            tC && !S().isEqual(tp, n))
        ) {
            let e = void 0 !== tp[tO],
                t = tO === e1.dx && n[e1.dx]?.disabled,
                i = "Firefox" === C().name && "" === tO && n[tO]?.name === "Default" && !n[tO]?.disabled;
            no(e || t || i);
        }
    },
    AUDIO_VOLUME_CHANGE: function (e) {
        let { inputVolume: t, outputVolume: n } = e;
        ng({ inputVolume: ns(t), outputVolume: n });
    },
    AUDIO_RESET: function () {
        D.w.remove(e6), location.reload();
    },
    AUDIO_INPUT_DETECTED: function (e) {
        let { inputDetected: t } = e;
        if (null == t) return !1;
        if (((tP = !0 !== tM && !t), t)) (tM = !0), (t6 = !1), t4.stop(), tU.stop();
        else if (nr().mode === eM.TBI.VOICE_ACTIVITY && tM) {
            let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = eh.A.getConfig({
                location: "MediaEngineStore.handleInputDetected",
            });
            e &&
                t4.start(e9, () => {
                    eb.default.track(eM.HAw.HARDWARE_MUTE_GUESSED, {
                        input_device_name: tI[nD(tI, nr().inputDeviceId)]?.name,
                        rtc_connection_id: ez.A.getRTCConnectionId(),
                    }),
                        (t6 = !0),
                        i.emitChange();
                }),
                null != t &&
                    tU.start(t * eB.A.Millis.MINUTE, () => {
                        (tM = !1), l.reset();
                    });
        }
    },
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: function (e) {
        let { osVolume: t, osMuted: n } = e;
        (d = t), (o = n);
    },
    AUDIO_SET_SUBSYSTEM: function (e) {
        nW(e.subsystem);
    },
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: function (e) {
        let t = e.bypassEnabled;
        ng({ bypassSystemInputProcessing: t }), ts.setAudioInputBypassSystemProcessing(t), nk(e.location);
    },
    MEDIA_ENGINE_SET_AUDIO_ENABLED: function (e) {
        (td = e.enabled), e.unmute && ng({ mute: !1, deaf: !1 }), ts.eachConnection(nl);
    },
    MEDIA_ENGINE_SET_VIDEO_ENABLED: function (e) {
        let { enabled: t } = e;
        ey.A.requestPermission(eX.iL.CAMERA), no(t);
    },
    MEDIA_ENGINE_PERMISSION: function (e) {
        let { kind: t, granted: n } = e;
        if (!n)
            switch (t) {
                case "audio":
                    (td = !1), ts.eachConnection(nl);
                    break;
                case "video":
                    no(!1);
            }
    },
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
        let { settings: t } = e;
        if (t?.desktopSettings != null) {
            let e = null,
                n = null,
                { sourceId: i, sound: r } = t.desktopSettings,
                s = t.context ?? e1.x.DEFAULT,
                l = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
                o = eV.A.getPidFromDesktopSource(i);
            f.isPlatformEmbedded && ({ soundshareId: e, soundshareSession: n } = nU(o, r)),
                s !== tu && (null != a && ts.setGoLiveSource(null, tu), (tu = s)),
                no(s === e1.x.STREAM && tC, {
                    desktopSource: { id: i, sourcePid: o, soundshareId: e, soundshareSession: n },
                    quality: { resolution: l.resolution, frameRate: l.frameRate },
                });
        } else if (t?.cameraSettings != null) {
            let e = t.context ?? e1.x.DEFAULT,
                { videoDeviceGuid: n, audioDeviceGuid: i, sound: r } = t.cameraSettings,
                a = e === e1.x.STREAM && tC,
                s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
            no(a, {
                cameraSource: { videoDeviceGuid: n, audioDeviceGuid: i, sound: r },
                quality: { resolution: s.resolution, frameRate: s.frameRate },
            });
        } else no(tC, null);
    },
    MEDIA_ENGINE_SET_VIDEO_DEVICE: function (e) {
        let { id: t } = e;
        ng({ videoDeviceId: (t = nD(tp, t)) }), no();
    },
    MEDIA_ENGINE_INTERACTION_REQUIRED: function (e) {
        return tc !== e.required && ((tc = e.required), e.required || ts.interact(), !0);
    },
    USER_SETTINGS_MODAL_INIT: nK,
    USER_SETTINGS_MODAL_SET_SECTION: nK,
    CERTIFIED_DEVICES_SET: function () {
        return ts.eachConnection(nI), !1;
    },
    RPC_APP_CONNECTED: function (e) {
        let { application: t } = e;
        to.add(t.id);
    },
    RPC_APP_DISCONNECTED: function (e) {
        let { application: t } = e;
        to.delete(t.id);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { mediaEngineState: t } = e;
        (tl = t.settingsByContext),
            (tI = t.inputDevices),
            (tf = t.outputDevices),
            (tJ = t.appSupported),
            (tx = t.krispModuleLoaded),
            (tk = t.krispFatalError),
            (c = t.krispVersion),
            (tu = t.goLiveContext);
    },
    APP_STATE_UPDATE: function (e) {
        let { state: t } = e,
            n = H.A.isEnabled();
        if (t === eM.g6G.BACKGROUND && tC && !n) (tv = !0), no(!1);
        else {
            if (t !== eM.g6G.ACTIVE || !tv) return !1;
            (tv = !1), no(!0);
        }
        return !0;
    },
    SET_CHANNEL_BITRATE: function (e) {
        ts.eachConnection((t) => t.setBitRate(e.bitrate));
    },
    SET_VAD_PERMISSION: function (e) {
        let { hasPermission: t } = e,
            n = !t;
        if (n === tS) return !1;
        (tS = n), ts.eachConnection(nl);
    },
    SET_NATIVE_PERMISSION: function (e) {
        let { state: t, permissionType: n } = e,
            i = t === eX.hL.ACCEPTED;
        switch (n) {
            case eX.iL.AUDIO:
                (tq = !0), ts.eachConnection(nl);
                break;
            case eX.iL.CAMERA:
                !i && tC && no(!1);
                break;
            default:
                return !1;
        }
    },
    SET_CHANNEL_VIDEO_QUALITY_MODE: function (e) {
        ts.eachConnection((t) => t.applyVideoQualityMode(e.mode));
    },
    MEDIA_ENGINE_SET_AEC_DUMP: function (e) {
        let { enabled: t } = e,
            n = ng({ aecDumpEnabled: t });
        ts.setAecDump(n.aecDumpEnabled);
    },
    MEDIA_ENGINE_SET_OPENH264_ENABLED: function (e) {
        let { enabled: t } = e;
        ng({ openH264Enabled: t }), p.Ay?.setOpenH264Enabled?.(t);
    },
    MEDIA_ENGINE_RESET_SETTINGS: function (e) {
        let { overrides: t } = e;
        if (__OVERLAY__) return !1;
        (tl = Object.values(e1.x).reduce((e, n) => {
            let i = ti();
            return (e[n] = S().merge(i, t[n])), e;
        }, {})),
            D.w.set(e6, tl),
            nS();
    },
    CHANNEL_DELETE: function () {
        if ((!tC && null == a) || null != ez.A.getRTCConnectionId()) return !1;
        no(!1, null);
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: function (e) {
        if (e.code === e1.CO.KRISP_CPU_OVERUSE) {
            (ne.noiseCancellation = !1), (ne.noiseSuppression = !0);
            let e = nr();
            return ts.eachConnection((t) => nh(t, e.noiseCancellation)), nF(), nk(), !0;
        }
        return !1;
    },
    MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR: function (e) {
        return (
            e.code === e1.CO.KRISP_VAD_CPU_OVERUSE &&
            ((ne.modeOptions = { vadUseKrisp: !1 }), ts.eachConnection((e) => na(e)), !0)
        );
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function () {
        return !!tH && ((tH = !1), !0);
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
        let { settings: t } = e;
        ts.applyMediaFilterSettings(t).finally(() => {
            (tj = !1), i.emitChange();
        });
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function () {
        tj = !0;
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function () {
        tj = !1;
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            local: n,
            wasSaved: i,
        } = e;
        if (t !== eJ.oD.PRELOADED_USER_SETTINGS || n || null != i) return !1;
        nP(!0);
    },
    CLIPS_INIT: function (e) {
        let { sourceId: t, applicationName: n, quality: r } = e;
        if (!(0, k.Ao)() || null == M.A || (s?.desktopSource.id === t && s.quality === r)) return !1;
        null != s &&
            (ts.setClipsSource(null),
            (0, f.isWindows)() &&
                (null != s.desktopSource.soundshareId
                    ? P.c1(s.desktopSource.soundshareId)
                    : null != s.desktopSource.sourcePid && nr().videoHook && P.c1(s.desktopSource.sourcePid)));
        let a = eV.A.getPidFromDesktopSource(t),
            { soundshareId: l, soundshareSession: o } = nU(a, !0);
        s = { desktopSource: { id: t, sourcePid: a, soundshareId: l, soundshareSession: o }, quality: r };
        let d = nt("MediaEngineStore clips"),
            c = nr().videoHook,
            u = !c || !ee.getConfig({ location: "handleClipsInit" }).enabled,
            _ = c && em.getConfig({ location: "handleClipsInit" }).enabled,
            { minCaptureWidth: E, minCaptureHeight: A } = ef.getConfig({ location: "handleClipsInit" });
        ts.setClipsSource({
            desktopDescription: {
                id: s.desktopSource.id,
                soundshareId: s.desktopSource.soundshareId,
                useVideoHook: c,
                useHookFramePacer: u,
                useGraphicsCapture: nf(),
                useCaptureDeviceForEncode: !1,
                useLoopback: i.getExperimentalSoundshare(),
                useQuartzCapturer: !0,
                allowScreenCaptureKit: np(),
                videoHookStaleFrameTimeoutMs: 500,
                graphicsCaptureStaleFrameTimeoutMs: e5,
                hdrCaptureMode: d,
                videoHookAllowDx12: _,
                minCaptureWidth: E,
                minCaptureHeight: A,
            },
            quality: r,
            bitratePercent: r.bitratePercent,
            applicationName: n,
            videoEncoderExperiments: i.getVideoEncoderExperiments(e1.x.STREAM, "streamer"),
        });
    },
    CLIPS_RESTART: function () {
        s = null;
    },
    CLIPS_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        !1 === t.decoupledClipsEnabled && ((s = null), ts.setClipsSource(null)), !1 === t.clipsEnabled && (s = null);
    },
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function (e) {
        t3 = e.enabled;
    },
    MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: function (e) {
        let { deviceId: t, active: n, available: i } = e;
        tK[t] = { active: n, available: i };
    },
}));
