"use strict";
let i, r, a, s, l, o, d, c, u, _, E;
n.d(t, { yz: () => te, Ay: () => nj }), n(323874), n(14289), n(35956), n(321073);
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
var eA = n(801644);
let eh = (0, Y.mj)({
        kind: "user",
        name: "2026-06-systemwide-echo-cancellation-for-people-who-refuse-to-wear-headphones",
        defaultConfig: { echoReferenceMode: "mix" },
        variations: { 1: { echoReferenceMode: "auto" } },
    }),
    eI = (0, Y.mj)({
        name: "2026-06-upscale-small-captured-frames",
        kind: "user",
        defaultConfig: { minCaptureWidth: 0, minCaptureHeight: 0 },
        variations: { 1: { minCaptureWidth: 130, minCaptureHeight: 130 } },
    }),
    ef = (0, et.Ay)({
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
    eT = (0, Y.mj)({
        name: "2026-04-video-hook-dx12",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    em = (0, Y.mj)({
        name: "2026-02-wgc-dirty-regions-all",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eg = (0, Y.mj)({
        name: "2026-02-wgc-dirty-regions",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eS = (0, Y.mj)({
        name: "2026-06-wmf-cpu-encode-intel",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eN = (0, Y.mj)({
        name: "2025-12-wmf-gpu-encode",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function eC(e) {
    return eN.getConfig({ location: e });
}
let eO = (0, Y.mj)({
    name: "2026-01-wmf-gpu-encode-intel",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eR = n(75076),
    eL = n(91777),
    eD = n(559633),
    ey = n(205106),
    ev = n(174459),
    eb = n(652215);
let eM = new es.Vy("AudioEffects");
async function eP(e, t, n) {
    if (!(0, ea.uF)()) return Promise.reject(Error("Audio effects querying not supported on non-Windows platforms"));
    try {
        let i = await n.getDeviceAudioEffects(e);
        return (
            b.h.dispatch({ type: "MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS", deviceId: t, ...i }),
            ev.default.track(eb.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, {
                succeeded: !0,
                active_effects: i.active,
                available_effects: i.available,
            }),
            i
        );
    } catch (e) {
        eM.error("Failed to probe audio effects for device", e),
            ev.default.track(eb.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, { succeeded: !1 });
    }
}
var eU = n(967347),
    ew = n(617617),
    eG = n(125325),
    ex = n(499156),
    ek = n(353835),
    eF = n(927813),
    eV = n(38405),
    eB = n(350535),
    eH = n(280450),
    ej = n(131319),
    eW = n(347481),
    eY = n(734057),
    eK = n(763827),
    e$ = n(287809),
    ez = n(117549),
    eq = n(765682),
    eZ = n(829997),
    eX = n(355097),
    eQ = n(621380),
    eJ = n(731854),
    e0 = n(375708);
let e1 = new I.A("MediaEngineStore"),
    e2 = "MediaEngineStore",
    e3 = { left: 1, right: 1 },
    e6 = 5 * eF.A.Millis.SECOND,
    e4 = 2 * eF.A.Millis.SECOND,
    e7 = 30 * eF.A.Millis.SECOND,
    e5 = +eF.A.Millis.MINUTE,
    e8 = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2",
    e9 = 0;
var te =
    (((A = {}).WEBCAM = "WEBCAM"),
    (A.INTEGRATED = "INTEGRATED"),
    (A.BLUETOOTH = "BLUETOOTH"),
    (A.AIRPLAY = "AIRPLAY"),
    (A.HEADSET = "HEADSET"),
    A);
function tt() {
    return {
        mode: eb.TBI.VOICE_ACTIVITY,
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
        audioMixerSettings: { ...eZ.b },
        audioMixerSettingsVersion: 0,
        localPans: {},
        inputVolume: eJ.Hz,
        outputVolume: eJ.Hz,
        inputDeviceId: eJ.dx,
        outputDeviceId: eJ.dx,
        videoDeviceId: eJ.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: tr.supports(eJ.O5.VIDEO_HOOK),
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
let tn = {
        [eQ.m.CUSTOM]: {},
        [eQ.m.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [eQ.m.STUDIO]: {
            mode: eb.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    ti = { modeOptions: { vadUseKrisp: !1 }, noiseCancellation: !1, noiseSuppression: !0 },
    tr = (0, D.hB)((0, D.WI)());
e1.enableNativeLogger(!0);
let ta = {},
    ts = new Set([eJ.x.DEFAULT]),
    tl = tr.supports(eJ.O5.AUTO_ENABLE),
    to = !1,
    td = eJ.x.STREAM,
    tc = 0,
    tu = !1,
    t_ = performance.now(),
    tE = null,
    tA = { [eJ.dx]: ng("No Input Devices") },
    th = { [eJ.dx]: ng("No Output Devices") },
    tI = { [eJ.dx]: ng("No Video Devices") },
    tf = new v.Ep(),
    tp = !1,
    tT = !1,
    tm = !1,
    tg = !1,
    tS = !1,
    tN = eJ.qe,
    tC = eJ.qe,
    tO = !1,
    tR = !1,
    tL = new v.Ep(),
    tD = !1,
    ty = !1,
    tv = !1,
    tb = !1,
    tM = new v.Ep(),
    tP = !1,
    tU = !1,
    tw = !1,
    tG = !1,
    tx = [],
    tk = !1,
    tF = null,
    tV = !1,
    tB = !1,
    tH = !1,
    tj = {},
    tW = null,
    tY = null,
    tK = !1;
eL.A.hasPermission(eq.iL.AUDIO, { showAuthorizationError: !1 }),
    eL.A.hasPermission(eq.iL.CAMERA, { showAuthorizationError: !1 });
let t$ = new Set(),
    tz = !1,
    tq = new Set(),
    tZ = {},
    tX = null,
    tQ = null,
    tJ = null,
    t0 = !0,
    t1 = !1,
    t2 = new v.Ep(),
    t3 = !1,
    t6 = !1,
    t4 = !1,
    t7 = !1,
    t5 = {};
function t8(e) {
    return (function (e) {
        let { location: t } = e;
        return ei.getConfig({ location: t });
    })({ location: e }).hdrCaptureMode;
}
async function t9() {
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
function ne() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eJ.x.DEFAULT,
        t = ta[e];
    return null == t && ((t = tt()), (ta[e] = t)), t;
}
function nt() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eJ.x.DEFAULT,
        t = ne(e),
        n = tn[t.activeInputProfile ?? eQ.m.CUSTOM],
        i = nw() ? t5 : ti,
        r = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}), ...(i.modeOptions ?? {}) };
    if (
        (null == r.vadDuringPreProcess &&
            (r.vadDuringPreProcess = (function (e) {
                let { location: t, disable: n = !1 } = e;
                return n ? ef.definition.defaultConfig : ef.getConfig({ location: t });
            })({ location: "getSettings" }).enabled),
        (null == r.vadKrispActivationThreshold && !0 === n.automaticGainControl) || !0 === t.automaticGainControl)
    ) {
        let e = z({ location: "getSettings" });
        null != e.vadKrispActivationThreshold && (r.vadKrispActivationThreshold = e.vadKrispActivationThreshold);
    }
    return { ...t, ...n, ...i, modeOptions: r };
}
function nn(e) {
    let t = nt(e.context),
        n = t.mode;
    e.context === eJ.x.DEFAULT && (0, eu.N)(!1, !1);
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
function ni(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eJ.Hz;
    return S().clamp(e, 0, t);
}
function nr(e) {
    let t = nt(e.context),
        n = !tl || t.mute || t.deaf;
    switch (e.context) {
        case eJ.x.DEFAULT:
            n = n || tp || tT || tm || !eL.A.didHavePermission(eq.iL.AUDIO);
            break;
        case eJ.x.STREAM:
            n = !0;
            break;
        default:
            e.context;
    }
    e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eJ.x.DEFAULT && U.A.updateNativeMute();
}
function na() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tS,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        n = a;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, f.isWindows)()
                ? P.c1(n.desktopSource.soundshareId)
                : null != n.desktopSource.sourcePid && nt().videoHook && P.c1(n.desktopSource.sourcePid),
            tr.setGoLiveSource(null, td)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            tr.setGoLiveSource(null, td),
        tS || e)
    ) {
        let t = nt().videoDeviceId;
        tS && t === eJ.dx && tC === eJ.dx && tN !== eJ.qe ? (t = tN) : (tC = t),
            (tN = (tS = e) ? nO(tI, t) : eJ.qe),
            tr.setVideoInputDevice(tN);
    }
    if (((a = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = t8("MediaEngineStore go live"),
                r = nt().videoHook,
                a = nA(),
                s = a ? ((0, f.isWindows)() && R().satisfies(M.A?.os.release, el.fG) ? el.zl : el.eg) : 0,
                l = !1;
            (0, f.isWindows)() &&
                s >= el.zl &&
                (l =
                    !0 === tQ
                        ? eg.getConfig({ location: "updateVideo" }).enabled
                        : em.getConfig({ location: "updateVideo" }).enabled);
            let o = !r || !ee.getConfig({ location: "updateVideo" }).enabled,
                d = r && eT.getConfig({ location: "updateVideo" }).enabled,
                { minCaptureWidth: c, minCaptureHeight: u } = eI.getConfig({ location: "updateVideo" });
            tr.setGoLiveSource(
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
                        allowScreenCaptureKit: nh(),
                        videoHookStaleFrameTimeoutMs: 500,
                        graphicsCaptureStaleFrameTimeoutMs: e6,
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
                td,
            );
        }
        null != t.cameraSource &&
            tr.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: t.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: !1 === t.cameraSource.sound ? "" : t.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                td,
            );
    }
}
function ns(e) {
    switch (e) {
        case eJ.CO.KRISP_CPU_OVERUSE:
            return V.B6.KrispCpuOveruse;
        case eJ.CO.KRISP_FAILED:
            return V.B6.KrispFailed;
        case eJ.CO.KRISP_VAD_CPU_OVERUSE:
            return V.B6.KrispVadCpuOveruse;
        case eJ.CO.KRISP_INIT_ERROR:
            return V.B6.KrispInitError;
        case eJ.CO.KRISP_INIT_ERROR_NATIVE:
            return V.B6.KrispInitErrorNative;
        case eJ.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED:
            return V.B6.KrispInitErrorSse4NotSupported;
        case eJ.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED:
            return V.B6.KrispInitErrorAvx2NotSupported;
        case eJ.CO.KRISP_INIT_ERROR_UNSIGNED:
            return V.B6.KrispInitErrorUnsigned;
        case eJ.CO.KRISP_INIT_ERROR_GLOBAL_INIT:
            return V.B6.KrispInitErrorGlobalInit;
        case eJ.CO.KRISP_INIT_ERROR_WEIGHT_8K:
            return V.B6.KrispInitErrorWeight8k;
        case eJ.CO.KRISP_INIT_ERROR_WEIGHT_16K:
            return V.B6.KrispInitErrorWeight16k;
        case eJ.CO.KRISP_INIT_ERROR_WEIGHT_32K:
            return V.B6.KrispInitErrorWeight32k;
        case eJ.CO.KRISP_INIT_ERROR_WEIGHT_VAD:
            return V.B6.KrispInitErrorWeightVad;
        default:
            return;
    }
}
let nl = new Set([
    eJ.CO.KRISP_INIT_ERROR,
    eJ.CO.KRISP_INIT_ERROR_NATIVE,
    eJ.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED,
    eJ.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED,
    eJ.CO.KRISP_INIT_ERROR_UNSIGNED,
    eJ.CO.KRISP_INIT_ERROR_GLOBAL_INIT,
    eJ.CO.KRISP_INIT_ERROR_WEIGHT_8K,
    eJ.CO.KRISP_INIT_ERROR_WEIGHT_16K,
    eJ.CO.KRISP_INIT_ERROR_WEIGHT_32K,
    eJ.CO.KRISP_INIT_ERROR_WEIGHT_VAD,
]);
function no(e) {
    if (
        (e1.warn(`Voice processing error: ${e}`),
        (0, V.QW)({ type: V.iy.NOISE_CANCELLER_ERROR, underlyingError: ns(e) }),
        ev.default.track(eb.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
        nl.has(e))
    ) {
        tG = !0;
        return;
    }
    e === eJ.CO.KRISP_VAD_CPU_OVERUSE
        ? b.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e })
        : ((tV = !0), b.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e }));
}
function nd(e, t) {
    let n = t === eJ.$C.LIVE;
    e1.warn(`Video filter error: ${e} (${n ? "live" : "preview"})`),
        n &&
            (0, V.QW)({
                type: V.iy.VIDEO_BACKGROUND_UNAVAILABLE,
                underlyingError: (function (e) {
                    switch (e) {
                        case eJ.kv.UNSUPPORTED:
                            return V.B6.VideoBackgroundUnsupported;
                        case eJ.kv.INIT_FAILED:
                            return V.B6.VideoBackgroundInitFailed;
                        default:
                            return;
                    }
                })(e),
            }),
        b.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_FILTER_ERROR", code: e, target: n ? "live" : "preview" });
}
function nc(e) {
    let t = z({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function nu(e, t) {
    e.setAutomaticGainControl(nc(t));
}
function n_(e, t) {
    let n = (0, ey.A)(t, i.getSystemMicrophoneMode());
    n !== t && e1.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: r } = z({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(r);
}
function nE(e) {
    let t = nt(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eW.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eW.A.hasNoiseSuppression(n) || t.noiseSuppression),
        nu(e, eW.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        n_(e, t.noiseCancellation),
        e.setSpatialAudioEnabled(t.audioMixerSettings.enabled),
        (0, f.isWindows)() && R().satisfies(M.A?.os.release, ">=10.0.15063") && e.context === eJ.x.DEFAULT)
    ) {
        let t = (function (e) {
            let { location: t } = e;
            return eh.getConfig({ location: t });
        })({ location: "updateConnectionVoiceProcessing" });
        e.setEchoReferenceMode(t.echoReferenceMode);
    }
    if ((0, f.isWeb)()) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function nA() {
    return (0, f.isWindows)() && R().satisfies(M.A?.os.release, el.yg);
}
function nh() {
    return (0, f.isMac)() && tr.supports(eJ.O5.SCREEN_CAPTURE_KIT) && R().satisfies(M.A?.os.release, el.e);
}
function nI() {
    return (
        (0, f.isWindows)() &&
        tr.supports(eJ.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        tr.supports(eJ.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nf() {
    return tr.supports(eJ.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function np(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eJ.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = ne(t);
    return Object.assign(i, e), !__OVERLAY__ && n && y.w.set(e2, ta), i;
}
function nT() {
    let e = nt();
    nL(e.inputDeviceId),
        tr.setAudioOutputDevice(e.outputDeviceId),
        na(),
        tr.setInputVolume(e.inputVolume),
        tr.setOutputVolume(e.outputVolume),
        tr.setAecDump(e.aecDumpEnabled),
        tr.setSidechainCompression(e.sidechainCompression),
        tr.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        tr.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        (0, f.isLinux)() && p.Ay?.setOpenH264Enabled?.(e.openH264Enabled),
        tr.setAudioMixerOptions(e.audioMixerSettings);
}
function nm() {
    tl || tr.enable().then(() => b.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function ng(e) {
    return { id: eJ.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
}
function nS(e, t) {
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
let nN = /^HDAUDIO\\(?:SUB)?FUNC_\d+&VEN_(?:8086|1002|10DE)/;
function nC(e, t) {
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
                    case nS(e, r):
                        return "WEBCAM";
                    case ["builtin", "displayport", "hdmi"].includes(e.macosTransportType ?? ""):
                    case null != e.hardwareId && nN.test(e.hardwareId):
                        return "INTEGRATED";
                    case S()(e.hardwareId).startsWith("BTHENUM"):
                    case ["bluetooth", "bluetoothle"].includes(e.macosTransportType ?? ""):
                        return "BLUETOOTH";
                    case ["airplay", "continuitycapturewireless"].includes(e.macosTransportType ?? ""):
                        return "AIRPLAY";
                    case "audioinput" === e.type && nS(e, i):
                    case "audiooutput" === e.type && nS(e, n):
                        return "HEADSET";
                }
            })(t, e),
        }))
        .keyBy("id")
        .value();
}
function nO(e, t) {
    let n = e[t] ?? e[eJ.dx] ?? S()(e).values().first();
    return null != n ? n.id : t;
}
function nR(e) {
    if (!(0, f.isWindows)() || !X.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects) return;
    let t = tA[e];
    t?.guid != null && eP(t.guid, e, tr);
}
function nL(e) {
    tr.setAudioInputDevice(e), nR(e);
}
function nD(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function ny() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = ew.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let i = n === eX.W.USER ? eJ.x.DEFAULT : eJ.x.STREAM,
            r = i === eJ.x.STREAM ? eJ.Cn : eJ.Hz,
            a = t[n] ?? {},
            { localMutes: s, localVolumes: l } = nt(i);
        for (let [e, t] of Object.entries(a))
            null == (0, eG.tM)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== r ? (l[e] = t.volume) : delete l[e],
                tr.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (e)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == a[e] &&
                    (delete s[e],
                    delete l[e],
                    tr.eachConnection((t) => {
                        t.setLocalVolume(e, r), t.setLocalMute(e, !1);
                    }, i));
        np({ localMutes: s, localVolumes: l }, i);
    }
}
function nv(e, t) {
    if (t) {
        let { soundshareId: t, soundshareSession: a } = (function (e) {
            if (null == i)
                return (
                    e1.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
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
    return null != e && nt().videoHook && P.GH(e), { soundshareId: null, soundshareSession: null };
}
function nb() {
    let e = eJ.x.DEFAULT,
        { videoToggleStateMap: t } = nt(e);
    for (let [e, n] of Object.entries(t)) n === eb.bb8.AUTO_PROBING && delete t[e];
    np({ videoToggleStateMap: t }, e, !1);
}
function nM(e) {
    let t = nt(),
        n = tr.getAudioSubsystem(),
        r = tr.getAudioLayer(),
        a = nO(tA, t.inputDeviceId),
        s = tA[a]?.name,
        l = (0, ey.A)(t.noiseCancellation, i.getSystemMicrophoneMode());
    ev.default.track(eb.HAw.VOICE_PROCESSING, {
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
function nP() {
    let e = nt(),
        t = tq.size > 0,
        n = e.inputDeviceId,
        i = eW.A.hasEchoCancellation(n) || e.echoCancellation,
        r = eW.A.hasNoiseSuppression(n) || e.noiseSuppression,
        a = nc(eW.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation;
    tr.setLoopback(t, {
        echoCancellation: i,
        echoCancellationPreEcho: !t,
        noiseSuppression: r,
        automaticGainControlConfig: a,
        noiseCancellation: s,
    });
}
async function nU() {
    if (!tr.supports(eJ.O5.VAAPI) || window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let e = await window.DiscordNative.processUtils.getSystemInfo();
    (e.electronGPUInfo?.gpuDevice ?? []).some((e) => 4098 === e.vendorId) &&
        ((t4 = !0), (t6 = tr.supports(eJ.O5.GAMESCOPE_CAPTURE)));
}
function nw() {
    return (tw || !1) && !tG;
}
async function nG() {
    try {
        await p.Ay.ensureModule("discord_krisp");
        let e = p.Ay.requireModule("discord_krisp");
        (tw = !0),
            (c = e.getSdkVersion?.()),
            (u = e.getSuppressionLevel?.() ?? 100),
            (0, f.isWindows)() && e.setMklZenOverrideEnabled?.(eE("setupKrispNativeModule").enabled),
            e.getNcModels?.().then((e) => {
                (tx = e), i.emitChange();
            }),
            i.emitChange(),
            await p.Ay.ensureModule("discord_voice");
        let t = p.Ay.requireModule("discord_voice");
        t.setupKrispPath?.();
    } catch (t) {
        e1.warn(`Failed to load Krisp module: ${t.message}`), eV.A.captureException(t);
        let e = eJ.CO.KRISP_INIT_ERROR;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eJ.CO.KRISP_INIT_ERROR : n;
        }
        (0, V.QW)({ type: V.iy.NOISE_CANCELLER_ERROR, underlyingError: ns(e) }),
            ev.default.track(eb.HAw.VOICE_PROCESSING, { noise_canceller_error: e });
    } finally {
        tU = !1;
    }
}
async function nx() {
    try {
        let e,
            t = "",
            n = !1,
            i = URL.parse(e8);
        if (null === i) return void e1.log("OpenH264 URL ", i, " is invalid");
        let r = i.pathname.split("/"),
            a = r[r.length - 1].replace(".bz2", "");
        try {
            let t = await p.Ay.downloadOpenH264(
                e8,
                a,
                "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f",
                (e) => {
                    e1.log("OpenH264 download status", e);
                },
            );
            e1.log("OpenH264 is ready", t), (n = t.fetchedFromNetwork), (e = !0);
        } catch (n) {
            e1.error("OpenH264 download failed", n), (t = n.message), (e = !1);
        }
        if (
            (ev.default.track(eb.HAw.VIDEO_OPENH264_DOWNLOADED, {
                success: e,
                fetched_from_network: n,
                error_message: t,
            }),
            e)
        ) {
            let e = await p.Ay.cleanupUnusedOpenH264Files([a]);
            e1.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        e1.error("OpenH264 download failed", e);
    }
}
function nk(e) {
    e === eJ.rB.AUTOMATIC
        ? (np({ automaticAudioSubsystem: !0 }), nF())
        : (np({ automaticAudioSubsystem: !1 }), tr.setAudioSubsystem(e));
}
function nF() {
    tr.queueAudioSubsystem(eJ.rB.EXPERIMENTAL);
}
function nV(e) {
    let { section: t } = e;
    return t === eb.nc_.VOICE && nm(), !1;
}
class nB extends L.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        let e;
        if (
            ((l ??= new ed(tr, this)),
            tf.start(e7, () => {
                e1.error("Device enumeration timed out"), ev.default.track(eb.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
            }),
            tr.on(D.bg.Connection, (e) => {
                let t;
                nP(), nn(e), nr(e), nE(e);
                let n = nt();
                e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers),
                    e.setQoS(n.qos),
                    (0, f.isWindows)()
                        ? (e.setExperimentFlag(eJ.fd.H265_HARDWARE_ONLY, !0),
                          (null != tY
                              ? tY
                              : "u" > typeof window
                                ? (tY = t9().then((e) => ((tW = e), e)))
                                : Promise.resolve(!1)
                          ).then((t) => {
                              e.setExperimentFlag(eJ.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                          }))
                        : (0, f.isMac)() && e.setExperimentFlag(eJ.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                    (0, f.isLinux)() && n.openH264Enabled && e.setExperimentFlag(eJ.fd.USE_LIBOPENH264_DECODER, !0),
                    (function (e) {
                        let { location: t, disable: n = !1 } = e;
                        return n ? ec.definition.defaultConfig : ec.getConfig({ location: t });
                    })({ location: "setupMediaEngine" }).enabled &&
                        e.setExperimentFlag(eJ.fd.LOW_LATENCY_RATE_CONTROL, !0),
                    e.setExperimentFlag(eJ.fd.RESET_DECODER_ON_ERRORS, !0),
                    e.setExperimentFlag(eJ.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
                let { swallowVolumeOnlySpeakingEvents: r } = w.A.getConfig({ location: "MediaEngineStore" });
                if (
                    (r && e.setExperimentFlag(eJ.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === eJ.x.STREAM)
                ) {
                    let t = nD(th);
                    e.setSoundshareDiscardRearChannels(t);
                }
                if ((0, f.isWindows)())
                    e.setExperimentFlag(eJ.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(eJ.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eJ.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                else if ((0, f.isMac)())
                    e.setExperimentFlag(eJ.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eJ.fd.SIGNAL_AV1_HARDWARE_DECODE, !0),
                        e.setExperimentFlag(
                            eJ.fd.H265_DISABLE_ENCODE,
                            !(
                                window?.DiscordNative?.os.arch === "arm64" &&
                                R().satisfies(window?.DiscordNative?.os.release, eJ.Dk)
                            ),
                        );
                else if ((0, f.isLinux)()) {
                    let { enabled: t } = q.getConfig({ location: "MediaEngineStore" });
                    t && e.setExperimentFlag(eJ.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(eJ.fd.SIGNAL_AV1_DECODE, !0);
                } else
                    ((0, f.isIOS)() || (0, f.isAndroid)()) &&
                        (e.setExperimentFlag(eJ.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eJ.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
                if ((0, f.isWeb)()) {
                    let { enabled: t } = Q.getConfig({ location: "MediaEngineStore" });
                    e.setExperimentFlag(eJ.fd.BROWSER_HEVC, t);
                }
                for (let r of ((0, f.isWindows)() &&
                    tX?.startsWith("AMD") &&
                    eC("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eJ.fd.WMF_GPU_ENCODE, !0),
                (0, f.isWindows)() &&
                    tX?.startsWith("Intel") &&
                    !0 === tQ &&
                    1 === tJ &&
                    eO.getConfig({ location: "MediaEngineStore" }).enabled &&
                    (e.setExperimentFlag(eJ.fd.WMF_GPU_ENCODE, !0), e.setExperimentFlag(eJ.fd.INTEL_GPU_DISABLE, !0)),
                (0, f.isWindows)() &&
                    tX?.startsWith("Intel") &&
                    !0 === tQ &&
                    1 === tJ &&
                    eS.getConfig({ location: "MediaEngineStore" }).enabled &&
                    e.setExperimentFlag(eJ.fd.INTEL_GPU_DISABLE, !0),
                (0, f.isWindows)() &&
                    tX?.startsWith("Qualcomm") &&
                    eC("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eJ.fd.WMF_GPU_ENCODE, !0),
                tr.setHasFullbandPerformance(null === (t = (0, F.A)()) || t >= 31),
                e.setRemoteAudioHistory(1e3),
                (0, x.A)(i) && e.setClipsKeyFrameInterval(eJ.X1),
                (n = nt(e.context)),
                e.setPostponeDecodeLevel(100),
                Object.keys(n.localMutes)))
                    r !== eH.default.getId() && e.setLocalMute(r, n.localMutes[r]);
                for (let t of Object.keys(n.localVolumes))
                    t !== eH.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
                for (let t of Object.keys(n.localPans)) {
                    let i = n.localPans[t];
                    e.setLocalPan(t, i.left, i.right);
                }
                for (let t of Object.keys(n.disabledLocalVideos)) e.setLocalVideoDisabled(t, n.disabledLocalVideos[t]);
                e.on(D.yq.Speaking, (t, n, i, r) => {
                    b.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: r });
                }),
                    e.context === eJ.x.DEFAULT &&
                        ((tR = !1),
                        e.on(D.yq.SpeakingWhileMuted, () => {
                            let e = !tR;
                            (tR = !0),
                                e && i.emitChange(),
                                tL.start(e4, () => {
                                    (tR = !1), i.emitChange();
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
                            ev.default.track(eb.HAw.VIDEOHOOK_INITIALIZED, {
                                backend: e,
                                format: t,
                                framebuffer_format: n,
                                sample_count: i,
                                success: r,
                                reinitialization: s,
                                ...(0, W.A)(a?.desktopSource),
                            });
                    }),
                    e.on(D.yq.NoiseCancellationError, no),
                    e.on(D.yq.VoiceActivityDetectorError, no),
                    e.on(D.yq.SdpError, (e, t, n, i) => {
                        ev.default.track(eb.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: i });
                    }),
                    e.on(D.yq.VideoState, (t) => {
                        b.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                    }),
                    e.setBitRate(ej.A.bitrate),
                    e.applyVideoQualityMode(ez.A.mode),
                    (0, f.isWindows)() &&
                        tr.supports(eJ.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                        tr.setAsyncVideoInputDeviceInit(!0);
            }),
            tr.on(D.bg.DeviceChange, (e, t, n) => {
                tf.stop(),
                    b.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
            }),
            tr.on(D.bg.VolumeChange, (e, t) => {
                b.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
            }),
            tr.on(D.bg.DesktopSourceEnd, (e, t) => {
                b.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
            }),
            tr.on(D.bg.AudioPermission, (e) => {
                (tK = !0), b.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
            }),
            tr.on(D.bg.VideoPermission, (e) => {
                b.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
            }),
            tr.on(D.bg.WatchdogTimeout, async () => {
                let e;
                if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                    try {
                        await ek.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                    } catch (t) {
                        "number" == typeof t.status && (e = t.status);
                    }
                e1.warn(`Watchdog timeout, report submission status: ${e ?? 200}`);
                let t = null != M.A.processUtils.setCrashReason;
                try {
                    await ev.default.track(
                        eb.HAw.VOICE_WATCHDOG_TIMEOUT,
                        { minidump_submission_error: e, will_restart: t },
                        { flush: !0 },
                    );
                } catch (e) {
                    e1.error("Failed to flush voice watchdog timeout analytics event", e);
                }
                t &&
                    (e1.info("Relaunching app due to voice watchdog timeout"),
                    await M.A.processUtils.setCrashReason("voice-watchdog-timeout"),
                    y.w.set("discord_watchdog_restart_timestamp", Date.now().toString()),
                    M.A.app.relaunch());
            }),
            tr.on(D.bg.VideoInputInitialized, (e) => {
                ev.default.track(eb.HAw.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired
                        ? null
                        : Math.round(e.timeToFirstFrame * eF.A.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy,
                    media_session_id: eK.A.getMediaSessionId(),
                    rtc_connection_id: eK.A.getRTCConnectionId(),
                });
            }),
            tr.on(D.bg.AudioInputInitialized, (e) => {
                ev.default.track(eb.HAw.AUDIO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_initialized_ms: Math.round(e.timeToInitialized * eF.A.Millis.SECOND),
                    rtc_connection_id: eK.A.getRTCConnectionId(),
                });
            }),
            tr.on(D.bg.ClipsRecordingRestartNeeded, () => {
                b.h.dispatch({ type: "CLIPS_RESTART" });
            }),
            tr.on(D.bg.ClipsInitFailure, (e, t) => {
                let n = tc < 3;
                (tc += 1),
                    b.h.wait(() => {
                        b.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t }),
                            n
                                ? b.h.dispatch({ type: "CLIPS_RESTART" })
                                : e1.warn(
                                      `Clips init failure budget exhausted (${tc} consecutive unhealthy attempts); skipping auto-restart. A settings flip / game change / app restart will retry.`,
                                  );
                    });
            }),
            tr.on(D.bg.ClipsRecordingHealthy, () => {
                0 !== tc && (e1.info(`Clips bridge reported healthy; resetting restart budget (was ${tc}).`), (tc = 0));
            }),
            tr.on(D.bg.ClipsRecordingReadyChanged, (e) => {
                tu !== e && (e1.info(`Clips recorder ready changed: ${e}`), (tu = e));
            }),
            tr.on(D.bg.ClipsBridgeIdleShutdown, () => {
                e1.info("Clips bridge idle shutdown");
            }),
            tr.on(D.bg.ClipsRecordingEnded, (e, t) => {
                s?.desktopSource?.id === e &&
                    (null != t && a?.desktopSource?.soundshareId !== t && P.c1(t), (s = null));
            }),
            tr.on(D.bg.NativeScreenSharePickerUpdate, (e, t) => {
                b.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
            }),
            tr.on(D.bg.NativeScreenSharePickerCancel, (e) => {
                b.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
            }),
            tr.on(D.bg.NativeScreenSharePickerError, (e) => {
                b.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
            }),
            tr.on(D.bg.AudioDeviceModuleError, (e, t, n) => {
                ev.default.track(eb.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
            }),
            tr.on(D.bg.VideoCodecError, (e) => {
                let t = "encode" === e.mode ? V.iy.VIDEO_ENCODE_ERROR : V.iy.VIDEO_DECODE_ERROR,
                    n = { videoCodec: e.codecStandard, errorMessage: e.message };
                (0, V.QW)(
                    t === V.iy.VIDEO_ENCODE_ERROR
                        ? { type: t, ...n, videoEncoder: e.implName }
                        : { type: t, ...n, videoDecoder: e.implName },
                );
            }),
            tr.on(D.bg.ConnectionStats, (e) => {
                b.h.dispatch({
                    type: "MEDIA_ENGINE_CONNECTION_STATS",
                    connectionStats: e.map((e) => {
                        let { stats: t, connection: n } = e;
                        return {
                            stats: t,
                            mediaEngineConnectionId: n.mediaEngineConnectionId,
                            version: e9++,
                            context: n.context,
                        };
                    }),
                });
            }),
            tr.on(D.bg.VoiceProcessingError, no),
            tr.on(D.bg.VideoFilterError, nd),
            tr.on(D.bg.VoiceQueueMetrics, (e) => {
                let t = nH(e);
                null !== t && ev.default.track(eb.HAw.VOICE_QUEUE_METRICS, t);
            }),
            tr.setOnVideoContainerResized((e, t, n) => {
                b.h.wait(() =>
                    b.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
                );
            }),
            nU(),
            l.reset(),
            (0, eU.w)().then((e) => {
                null != e && ((tX = e.gpu_brand), (tQ = e.has_intel_hybrid_igpu), (tJ = e.gpu_count));
            }),
            tr.on(D.bg.SystemMicrophoneModeChange, (e) => {
                (E = e), tr.eachConnection(nE), i.emitChange();
            }),
            null != (e = y.w.get("audio")) && (y.w.set(e2, { [eJ.x.DEFAULT]: e }), y.w.remove("audio")),
            (ta = y.w.get(e2) ?? {}),
            S().each(ta, (e) => {
                S().defaultsDeep(e, tt()),
                    null != e.modeOptions &&
                        "string" == typeof e.modeOptions.shortcut &&
                        (e.modeOptions.shortcut = (0, eB.OH)(e.modeOptions.shortcut)),
                    null != e.modeOptions &&
                        4 !== e.vadUseKrispSettingVersion &&
                        ((e.vadUseKrispSettingVersion = 4), (e.modeOptions.vadUseKrisp = !0)),
                    e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                    e.vadThrehsoldMigrated ||
                        ((e.vadThrehsoldMigrated = !0),
                        e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = -60)),
                    tr.supports(eJ.O5.SIDECHAIN_COMPRESSION) &&
                        e.sidechainCompressionSettingVersion < 1 &&
                        ((e.sidechainCompressionSettingVersion = 1), (e.sidechainCompression = !0)),
                    e.audioMixerSettingsVersion < 1 &&
                        ((e.audioMixerSettingsVersion = 1), (e.audioMixerSettings = { ...eZ.b })),
                    (0, f.isWeb)()
                        ? 1 !== e.ncUseKrispjsSettingVersion &&
                          ((e.ncUseKrispjsSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                        : 1 !== e.ncUseKrispSettingVersion &&
                          ((e.ncUseKrispSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
            }),
            nT(),
            ((0, f.isWindows)() || (0, f.isLinux)() || (0, f.isMac)()) && !__OVERLAY__ && !tU && !tw
                ? ((tU = !0), nG())
                : (0, f.isWeb)() && tr.supports(eJ.O5.NOISE_CANCELLATION)
                  ? ((tw = !0), i.emitChange())
                  : (0, f.isWeb)() && np({ noiseCancellation: !1 }),
            (0, f.isLinux)() && nx(),
            nb(),
            (0, f.isDesktop)() && f.isPlatformEmbedded && !t7)
        ) {
            t7 = !0;
            let e = async () => {
                let t = await new Promise((e) => {
                    p.Ay.pollQueueMetrics((t) => {
                        e(t);
                    });
                });
                t.periodMs = eJ.tl;
                let n = nH(t);
                null !== n && ev.default.track(eb.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, eJ.tl);
            };
            setTimeout(e, eJ.tl);
        }
        (0, f.isWindows)() &&
            f.isPlatformEmbedded &&
            null === tE &&
            tr
                .getCodecSurvey()
                .then((e) => {
                    try {
                        let t = JSON.parse(e);
                        if (null == t || null == t.available_video_decoders)
                            throw Error("decoder survey is not available");
                        tE = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                    } catch (e) {
                        e1.error("Failed to parse codec survey", e), (tE = !1);
                    }
                })
                .catch((e) => {
                    e1.error("Failed to get codec survey", e), (tE = !1);
                })
                .finally(() => {
                    b.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
                }),
            (tZ = {
                [eJ.O5.VIDEO]: tr.supports(eJ.O5.VIDEO),
                [eJ.O5.DESKTOP_CAPTURE]: tr.supports(eJ.O5.DESKTOP_CAPTURE),
                [eJ.O5.HYBRID_VIDEO]: tr.supports(eJ.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eH.default, ej.A, eW.A, eY.A, G.Ay, B.A, eK.A, j.Ay, ew.A, e$.default, ez.A);
    }
    supports(e) {
        return tr.supports(e);
    }
    supportsInApp(e) {
        return tZ[e] || tr.supports(e);
    }
    isSupported() {
        return tr.supported();
    }
    isNoiseSuppressionSupported() {
        return tr.supports(eJ.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return nw();
    }
    isNoiseCancellationError() {
        return tV;
    }
    isAutomaticGainControlSupported() {
        return tr.supports(eJ.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nf() && (tr.supports(eJ.O5.LEGACY_AUDIO_SUBSYSTEM) || tr.supports(eJ.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return tr.supports(eJ.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === tr.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return nw();
    }
    isAecDumpSupported() {
        return tr.supports(eJ.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return tr.supports(eJ.O5.VIDEO) && tr.supports(eJ.O5.SIMULCAST);
    }
    getAecDump() {
        return nt().aecDumpEnabled;
    }
    getMediaEngine() {
        return tr;
    }
    getVideoComponent() {
        return tr.Video;
    }
    getCameraComponent() {
        return tr.Camera;
    }
    getKrispSuppressionLevel() {
        return u ?? 100;
    }
    getKrispEnableStats() {
        return tk;
    }
    isEnabled() {
        return tl;
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
        return nt().audioMixerSettings;
    }
    hasContext(e) {
        return null != ta[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eJ.x.DEFAULT;
        return e === eJ.x.DEFAULT && tT;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eJ.x.DEFAULT;
        return (
            !this.isEnabled() ||
            nt(e).mute ||
            !eL.A.didHavePermission(eq.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eJ.x.DEFAULT && tm)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tO;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tO = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eJ.x.DEFAULT,
            t = t1 && "voice_isolation" !== this.getSystemMicrophoneMode() && nt(e).mode === eb.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (eW.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return t0;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eJ.x.DEFAULT;
        return !this.isSupported() || nt(e).deaf;
    }
    isVideoEnabled() {
        return tS && ty;
    }
    isVideoAvailable() {
        return Object.values(tI).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return ty;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eJ.x.STREAM;
        return td === e && null != a;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eJ.x.STREAM;
        return td === e && null != a && a.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eJ.x.DEFAULT;
        return e !== eH.default.getId() && (nt(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return tr.supports(eJ.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eJ.x.DEFAULT;
        return nt(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eJ.x.DEFAULT;
        return nt(t).videoToggleStateMap[e] ?? eb.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eJ.x.DEFAULT;
        return t === eJ.x.DEFAULT && t$.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eJ.x.DEFAULT;
        return e === eJ.x.DEFAULT && t$.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tB;
    }
    isNativeAudioPermissionReady() {
        return tK;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return td;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return t_;
    }
    isH264MfDecodeAvailable() {
        return tE;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eJ.x.DEFAULT,
            n = nt(t).localPans[e];
        return null != n ? n : e3;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eJ.x.DEFAULT,
            n = t === eJ.x.STREAM ? eJ.Cn : eJ.Hz,
            i = nt(t).localVolumes[e];
        return null != i ? i : n;
    }
    getInputVolume() {
        return nt().inputVolume;
    }
    getOutputVolume() {
        return nt().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eJ.x.DEFAULT;
        return nt(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eJ.x.DEFAULT;
        return nt(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            S().each(ta, (t, n) => {
                let {
                    mode: i,
                    modeOptions: { shortcut: r },
                } = t;
                i === eb.TBI.PUSH_TO_TALK && ts.has(n) && (e[n] = r);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nO(tA, nt().inputDeviceId);
    }
    getOutputDeviceId() {
        return nO(th, nt().outputDeviceId);
    }
    getVideoDeviceId() {
        return nO(tI, nt().videoDeviceId);
    }
    getInputDevices() {
        return tA;
    }
    getOutputDevices() {
        return th;
    }
    getVideoDevices() {
        return tI;
    }
    getEchoCancellation() {
        let e = nt();
        return eW.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return tr.supports(eJ.O5.SIDECHAIN_COMPRESSION) && nt().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return nt().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return nt().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tW && tW;
    }
    getOpenH264Enabled() {
        return (0, f.isLinux)() && nt().openH264Enabled;
    }
    getLoopback() {
        return tq.size > 0;
    }
    getLoopbackReasons() {
        return tq;
    }
    getNoiseSuppression() {
        let e = nt();
        return eW.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = nt();
        return eW.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return nt().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return nt().noiseCancellation;
    }
    getHardwareEncoding() {
        return !0;
    }
    getEnableSilenceWarning() {
        return nt().silenceWarning;
    }
    getDebugLogging() {
        return tr.getDebugLogging();
    }
    getQoS() {
        return nt().qos;
    }
    getAttenuation() {
        return nt().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return nt().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return nt().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return nI() && nt().automaticAudioSubsystem ? eJ.rB.AUTOMATIC : tr.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return tr.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return nt().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eQ.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eJ.x.DEFAULT;
        return nt(e);
    }
    getState() {
        return {
            settingsByContext: ta,
            inputDevices: tA,
            outputDevices: th,
            appSupported: tZ,
            krispModuleLoaded: tw,
            krispFatalError: tG,
            krispVersion: c,
            krispSuppressionLevel: u,
            goLiveSource: a,
            goLiveContext: td,
        };
    }
    getInputDetectedThisConnection() {
        return tv;
    }
    getInputDetected() {
        return l.inputDetected;
    }
    getLastInputDetectedUpdateTime() {
        return l.lastUpdateTime;
    }
    getNoInputDetectedNotice() {
        return tb;
    }
    getInputDeviceOSMuted() {
        return o;
    }
    getInputDeviceOSVolume() {
        return d;
    }
    getPacketDelay() {
        return f.isPlatformEmbedded || this.getMode() !== eb.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        tr.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return to;
    }
    getVideoHook() {
        return nt().videoHook;
    }
    supportsVideoHook() {
        return tr.supports(eJ.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = nt().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return tr.supports(eJ.O5.EXPERIMENTAL_SOUNDSHARE) && R().satisfies(M.A?.os.release, el.$x);
    }
    supportsHookSoundshare() {
        return (0, f.isWindows)() && tr.supports(eJ.O5.SOUNDSHARE) && R().satisfies(M.A?.os.release, el.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = nt().useSystemScreensharePicker,
            n = (0, f.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return tr.supports(eJ.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return t4;
    }
    getVideoEncoderExperiments(e, t) {
        let n = ["unk"];
        if (
            (n.push("nvNewPresets"),
            e === eJ.x.STREAM ? n.push("nvRelaxRc=250") : n.push("nvRelaxRc=75"),
            this.getUseVaapiEncoder() && n.push("vaapi"),
            e === eJ.x.STREAM && "streamer" === t && (0, f.isWindows)())
        ) {
            n.push("useCaptureDeviceForEncode");
            let { overrideDeviceReuse: e } = ep.getConfig({ location: "handleReady" });
            e && n.push("videoCaptureDeviceOverrideReuse");
        }
        return n.push("linux-vulkan"), n.join(",");
    }
    getUseGamescopeCapture() {
        return t6;
    }
    getSpeakingWhileMuted() {
        return tR;
    }
    getKrispModelOverride() {
        return _;
    }
    getKrispModels() {
        return tx;
    }
    getKrispVadActivationThreshold() {
        return nt().modeOptions.vadKrispActivationThreshold ?? 0.5;
    }
    hasActiveCallKitCall() {
        return t3;
    }
    setHasActiveCallKitCall(e) {
        t3 = e;
    }
    supportsScreenSoundshare() {
        return (0, f.isMac)()
            ? tr.supports(eJ.O5.SOUNDSHARE) && R().satisfies(M.A?.os.release, el.P$) && nh()
            : (0, f.isWindows)()
              ? tr.supports(eJ.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, f.isLinux)() && tr.supports(eJ.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, f.isWindows)()) {
            if (this.getBypassSystemInputProcessing()) return;
            return tj[this.getInputDeviceId()]?.active?.find((e) => "deep_noise_suppression" === e);
        }
        if ((0, f.isMac)() || (0, f.isIOS)()) return E;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eJ.x.DEFAULT,
            t = this.supports(eJ.O5.VIDEO)
                ? [{ rid: "100", type: e === eJ.x.DEFAULT ? eJ.mI.VIDEO : eJ.mI.SCREEN, quality: eJ.Y4 }]
                : [];
        return (
            this.isSimulcastSupported() &&
                e === eJ.x.DEFAULT &&
                J.getConfig({ location: "MediaEngineStore.getVideoStreamParameters" }).enableSimulcast &&
                t.push({ rid: "50", type: eJ.mI.VIDEO, quality: eJ.Cl }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: (0, f.isWeb)() };
        return tr.fetchAsyncResources(e);
    }
    startDavePreload() {
        !tH &&
            ((tH = !0),
            (0, f.isWeb)() &&
                tr.fetchAsyncResources({ fetchDave: !0 }).catch((e) => {
                    e1.warn("DAVE preload failed:", e), eV.A.captureException(e);
                }));
    }
    getSupportedSecureFramesProtocolVersion() {
        return tr.getSupportedSecureFramesProtocolVersion();
    }
    hasClipsSource() {
        return null != s;
    }
    isClipsRecordingReady() {
        return tu;
    }
    isClipsRecordingReadySignalSupported() {
        return tr.supports(eJ.O5.CLIPS_RECORDING_READY_EVENTS);
    }
    getGpuBrand() {
        return tX;
    }
}
function nH(e) {
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
let nj = (i = new nB(b.h, {
    VOICE_CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n, currentVoiceChannelId: i, video: r } = e;
        if ((i !== n && na(r, null), null != t || null == n)) {
            tP = !1;
            return;
        }
        if (tP) return;
        tP = !0;
        let a = nt();
        (a.mute || a.deaf) && (np({ deaf: !1, mute: !1 }), tr.eachConnection(nr));
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (r === t.sessionId) {
                (tp = t.mute || t.suppress), (tg = t.deaf), tr.eachConnection(nr);
                let e = null != t.guildId && null != t.channelId && null != tF && tF !== t.channelId,
                    n = !tP && null == t.channelId;
                return na(!e && !n && tS), (tF = t.channelId), !0;
            }
            return __OVERLAY__ || t.userId !== eH.default.getId() || null != eK.A.getChannelId() || na(!1, null), e;
        }, !1);
    },
    CONNECTION_OPEN: function (e) {
        (r = e.sessionId), (tp = !1), (tg = !1);
        let t = nt();
        nI() && (nf() ? nk(eJ.rB.AUTOMATIC) : t.automaticAudioSubsystem && nF()),
            tr.supports(eJ.O5.OFFLOAD_ADM_CONTROLS) && tr.setOffloadAdmControls(!0),
            (0, f.isIOS)() &&
                er.getConfig({ location: "handleConnectionOpen" }).enabled &&
                tr.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
            (0, f.isWindows)() &&
                tw &&
                p.Ay.requireModule("discord_krisp").setMklZenOverrideEnabled?.(eE("handleConnectionOpen").enabled),
            nR(t.inputDeviceId),
            ny();
    },
    CONNECTION_CLOSED: function () {
        r = null;
    },
    POST_CONNECTION_OPEN: function () {
        return (0, f.isWeb)() && i.startDavePreload(), !1;
    },
    RTC_CONNECTION_STATE: function (e) {
        switch (e.state) {
            case eb.S7L.CONNECTING:
                nm();
                break;
            case eb.S7L.RTC_CONNECTING:
                (tb = !1), (o = void 0), (d = void 0), (tv = !1), (t1 = !1), t2.stop(), tM.stop(), l.reset();
                break;
            case eb.S7L.RTC_CONNECTED:
                na();
                break;
            case eb.S7L.DISCONNECTED:
                (t5 = {}),
                    (function () {
                        if (0 === t$.size) return;
                        let e = eJ.x.DEFAULT,
                            { disabledLocalVideos: t } = nt(e);
                        t$.forEach((n) => {
                            m()(t[n], "If you are auto-disabled, then you are also disabled."),
                                delete t[n],
                                tr.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
                        }),
                            t$.clear(),
                            np({ disabledLocalVideos: t }, e, !1);
                    })(),
                    nb();
        }
    },
    AUDIO_SET_TEMPORARY_SELF_MUTE: function (e) {
        let { mute: t } = e;
        (tT = t), tr.eachConnection(nr);
    },
    AUDIO_TOGGLE_SELF_MUTE: function (e) {
        let { context: t, playSoundEffect: n } = e,
            { mute: i, deaf: r } = nt(t);
        if (t === eJ.x.DEFAULT && (eL.A.requestPermission(eq.iL.AUDIO), tm)) return !1;
        (i = !r && !i) || (r = !1), n || (tO = !0), np({ mute: i, deaf: r }, t), tr.eachConnection(nr);
    },
    AUDIO_SET_SELF_MUTE: function (e) {
        let { context: t, mute: n, playSoundEffect: i } = e;
        np({ mute: n }, t), i || (tO = !0), tr.eachConnection(nr);
    },
    AUDIO_TOGGLE_SELF_DEAF: function (e) {
        let { context: t } = e;
        np({ deaf: !nt(t).deaf }, t), tr.eachConnection(nr);
    },
    AUDIO_TOGGLE_LOCAL_MUTE: function (e) {
        let { context: t, userId: n } = e;
        if (n === eH.default.getId()) return;
        let { localMutes: i } = nt(t);
        i[n] ? delete i[n] : (i[n] = !0),
            np({ localMutes: i }, t),
            tr.eachConnection((e) => e.setLocalMute(n, i[n] || !1), t);
    },
    AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
        let { context: t, userId: n, videoToggleState: i, persist: r, isAutomatic: a } = e;
        m()(!(r && a), "These are not allowed to both be true.");
        let s = i === eb.bb8.DISABLED,
            { disabledLocalVideos: l } = nt(t),
            o = l[n] ?? !1,
            d = t$.has(n),
            c = i === eb.bb8.AUTO_ENABLED || i === eb.bb8.MANUAL_ENABLED;
        e1.info(`disableVideo=${s} currentlyDisabled=${o} currentlyAutoDisabled=${d}, isVideoShown=${c}`),
            m()(!(d && !o), "If you are auto-disabled, then you are also disabled.");
        let u = s !== o,
            _ = t === eJ.x.DEFAULT,
            E = a && u && _,
            A = r && u && _;
        e1.info(`changed=${u} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${E} isManualToggleByUser=${A}`);
        let { videoToggleStateMap: h } = nt(t);
        if (
            (h[n] === eb.bb8.AUTO_PROBING &&
                i === eb.bb8.AUTO_ENABLED &&
                (0, eR.A)(n, s ? eJ.Al.AUTO_DISABLE : eJ.Al.AUTO_ENABLE, c),
            (h[n] = i),
            np({ videoToggleStateMap: h }, t, r),
            i === eb.bb8.AUTO_PROBING
                ? eK.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
                : eK.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
            tz ||
                (e1.info(`isAutoDisableAllowed=${tz} - disabling VideoHealthManager`),
                eK.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
            E)
        ) {
            if ((!s && !d) || (s && !tz)) return;
            (0, eR.A)(n, s ? eJ.Al.AUTO_DISABLE : eJ.Al.AUTO_ENABLE, c), s ? t$.add(n) : t$.delete(n);
        } else
            A &&
                (d && !s
                    ? (e1.info("disallowing auto-disable for this session because of manual override by user"),
                      (tz = !1),
                      eK.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                      (0, eR.A)(n, eJ.Al.MANUAL_REENABLE, c))
                    : (0, eR.A)(n, s ? eJ.Al.MANUAL_DISABLE : eJ.Al.MANUAL_ENABLE, c));
        _ && !s && t$.delete(n),
            s ? (l[n] = !0) : delete l[n],
            np({ disabledLocalVideos: l }, t, r),
            tr.eachConnection((e) => e.setLocalVideoDisabled(n, l[n] ?? !1), t);
    },
    AUDIO_SET_LOCAL_VOLUME: function (e) {
        let { context: t, userId: n, volume: i } = e;
        if (n === eH.default.getId()) return;
        let r = t === eJ.x.STREAM ? eJ.Cn : eJ.Hz,
            { localVolumes: a } = nt(t);
        i === r ? delete a[n] : (a[n] = i),
            np({ localVolumes: a }, t),
            tr.eachConnection((e) => e.setLocalVolume(n, i), t);
    },
    AUDIO_SET_AUDIO_MIXER_SETTINGS: function (e) {
        let { context: t, settings: n } = e;
        np({ audioMixerSettings: n }, t),
            tr.setAudioMixerOptions(n),
            tr.eachConnection((e) => e.setSpatialAudioEnabled(n.enabled), eJ.x.DEFAULT);
    },
    AUDIO_SET_LOCAL_PAN: function (e) {
        let { context: t, userId: n, left: i, right: r } = e,
            { localPans: a } = nt(t);
        (a[n] = { left: i, right: r }), np({ localPans: a }, t), tr.eachConnection((e) => e.setLocalPan(n, i, r), t);
    },
    AUDIO_SET_MODE: function (e) {
        let { context: t, mode: n, options: i } = e;
        np({ mode: n, modeOptions: { ...i, updatedAt: Date.now() } }, t), tr.eachConnection(nn);
    },
    AUDIO_SET_INPUT_VOLUME: function (e) {
        let { volume: t } = e;
        np({ inputVolume: ni(t) }), tr.setInputVolume(t);
    },
    AUDIO_SET_OUTPUT_VOLUME: function (e) {
        let { volume: t } = e;
        np({ outputVolume: t }), tr.setOutputVolume(t);
    },
    AUDIO_SET_INPUT_DEVICE: function (e) {
        let { id: t } = e;
        (t = nO(tA, t)),
            (t_ = performance.now()),
            np({ inputDeviceId: t }),
            nL(t),
            tr.eachConnection(nE),
            (o = void 0),
            (d = void 0),
            t2.stop(),
            (t1 = !1);
        let { resetSilenceWarningOnDeviceChange: n } = eA.A.getConfig({
            location: "MediaEngineStore.handleSetInputDevice",
        });
        n && ((tv = !1), l.reset());
    },
    AUDIO_SET_OUTPUT_DEVICE: function (e) {
        let { id: t } = e;
        np({ outputDeviceId: (t = nO(th, t)) }), tr.setAudioOutputDevice(t);
    },
    AUDIO_SET_ACTIVE_INPUT_PROFILE: function (e) {
        let { inputProfile: t } = e;
        np({ activeInputProfile: t });
        let n = nt();
        tr.eachConnection((e) => {
            nn(e), nE(e);
        }),
            tr.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
            nP();
    },
    AUDIO_SET_ECHO_CANCELLATION: function (e) {
        let t = np({ echoCancellation: e.enabled });
        tr.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nP(), nM(e.location);
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION: function (e) {
        let t;
        (t = np({ sidechainCompression: e.enabled })), tr.setSidechainCompression(t.sidechainCompression);
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function (e) {
        let t = np({ sidechainCompressionStrength: e.strength });
        tr.setSidechainCompressionStrength(t.sidechainCompressionStrength);
    },
    AUDIO_SET_LOOPBACK: function (e) {
        let { enabled: t, loopbackReason: n } = e;
        return t ? tq.add(n) : tq.delete(n), nP();
    },
    AUDIO_SET_NOISE_SUPPRESSION: function (e) {
        let t = np({ noiseSuppression: e.enabled });
        tr.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nP(), nM(e.location);
    },
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function (e) {
        let t = np({ automaticGainControl: e.enabled });
        tr.eachConnection((e) => nu(e, t.automaticGainControl)), nP(), nM(e.location);
    },
    AUDIO_SET_NOISE_CANCELLATION: function (e) {
        let t = np({ noiseCancellation: e.enabled });
        tr.eachConnection((e) => n_(e, t.noiseCancellation)), nP(), nM(e.location);
    },
    AUDIO_SET_KRISP_MODEL_OVERRIDE: function (e) {
        eD.A.setKrispModelOverride(e.model), (_ = e.model), nP();
    },
    AUDIO_SET_DISPLAY_SILENCE_WARNING: function (e) {
        np({ silenceWarning: e.enabled });
    },
    AUDIO_SET_DEBUG_LOGGING: function (e) {
        tr.setDebugLogging(e.enabled);
    },
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: function (e) {
        let { level: t } = e;
        (u = t), eD.A.setKrispSuppressionLevel(t);
    },
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: function (e) {
        (0, f.isWeb)() || ((tk = e.enabled), tr.setNoiseCancellationEnableStats?.(e.enabled));
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
        tr.eachConnection((e) =>
            e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers),
        );
    },
    AUDIO_SET_QOS: function (e) {
        let { enabled: t } = e;
        np({ qos: t }), tr.eachConnection((e) => e.setQoS(t));
    },
    MEDIA_ENGINE_DEVICES: function (e) {
        let t = tA;
        if (
            ((tA = nC(e, { deviceType: eJ.oh.AUDIO_INPUT, defaultName: e0.intl.string(e0.t["/QIjDA"]) })),
            !S().isEqual(tA, t))
        ) {
            let e = nt();
            nL(nO(tA, e.inputDeviceId)), tr.eachConnection(nE);
        }
        !(function (e) {
            let t = th;
            if (
                ((th = nC(e, { deviceType: eJ.oh.AUDIO_OUTPUT, defaultName: e0.intl.string(e0.t.xlUg0v) })),
                !S().isEqual(th, t))
            ) {
                let e = nt(),
                    n = nO(th, e.outputDeviceId);
                tr.setAudioOutputDevice(n);
                let i = nD(t),
                    r = nD(th);
                i !== r &&
                    tr.eachConnection((e) => {
                        e.context === eJ.x.STREAM && e.setSoundshareDiscardRearChannels(r);
                    });
            }
        })(e);
        ty = e.videoDevices.length > 0;
        let n = tI;
        if (
            ((tI = nC(e, { deviceType: eJ.oh.VIDEO_INPUT, defaultName: e0.intl.string(e0.t.WKWARY) })),
            tS && !S().isEqual(tI, n))
        ) {
            let e = void 0 !== tI[tN],
                t = tN === eJ.dx && n[eJ.dx]?.disabled,
                i = "Firefox" === C().name && "" === tN && n[tN]?.name === "Default" && !n[tN]?.disabled;
            na(e || t || i);
        }
    },
    AUDIO_VOLUME_CHANGE: function (e) {
        let { inputVolume: t, outputVolume: n } = e;
        np({ inputVolume: ni(t), outputVolume: n });
    },
    AUDIO_RESET: function () {
        y.w.remove(e2), location.reload();
    },
    AUDIO_INPUT_DETECTED: function (e) {
        let { inputDetected: t } = e;
        if (null == t) return !1;
        if (((tb = !0 !== tv && !t), t)) (tv = !0), (t1 = !1), t2.stop(), tM.stop();
        else if (nt().mode === eb.TBI.VOICE_ACTIVITY && tv) {
            let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = eA.A.getConfig({
                location: "MediaEngineStore.handleInputDetected",
            });
            e &&
                t2.start(e5, () => {
                    ev.default.track(eb.HAw.HARDWARE_MUTE_GUESSED, {
                        input_device_name: tA[nO(tA, nt().inputDeviceId)]?.name,
                        rtc_connection_id: eK.A.getRTCConnectionId(),
                    }),
                        (t1 = !0),
                        i.emitChange();
                }),
                null != t &&
                    tM.start(t * eF.A.Millis.MINUTE, () => {
                        (tv = !1), l.reset();
                    });
        }
    },
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: function (e) {
        let { osVolume: t, osMuted: n } = e;
        (d = t), (o = n);
    },
    AUDIO_SET_SUBSYSTEM: function (e) {
        nk(e.subsystem);
    },
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: function (e) {
        let t = e.bypassEnabled;
        np({ bypassSystemInputProcessing: t }), tr.setAudioInputBypassSystemProcessing(t), nM(e.location);
    },
    MEDIA_ENGINE_SET_AUDIO_ENABLED: function (e) {
        (tl = e.enabled), e.unmute && np({ mute: !1, deaf: !1 }), tr.eachConnection(nr);
    },
    MEDIA_ENGINE_SET_VIDEO_ENABLED: function (e) {
        let { enabled: t } = e;
        eL.A.requestPermission(eq.iL.CAMERA), na(t);
    },
    MEDIA_ENGINE_PERMISSION: function (e) {
        let { kind: t, granted: n } = e;
        if (!n)
            switch (t) {
                case "audio":
                    (tl = !1), tr.eachConnection(nr);
                    break;
                case "video":
                    na(!1);
            }
    },
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
        let { settings: t } = e;
        if (t?.desktopSettings != null) {
            let e = null,
                n = null,
                { sourceId: i, sound: r } = t.desktopSettings,
                s = t.context ?? eJ.x.DEFAULT,
                l = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
                o = ek.A.getPidFromDesktopSource(i);
            f.isPlatformEmbedded && ({ soundshareId: e, soundshareSession: n } = nv(o, r)),
                s !== td && (null != a && tr.setGoLiveSource(null, td), (td = s)),
                na(s === eJ.x.STREAM && tS, {
                    desktopSource: { id: i, sourcePid: o, soundshareId: e, soundshareSession: n },
                    quality: { resolution: l.resolution, frameRate: l.frameRate },
                });
        } else if (t?.cameraSettings != null) {
            let e = t.context ?? eJ.x.DEFAULT,
                { videoDeviceGuid: n, audioDeviceGuid: i, sound: r } = t.cameraSettings,
                a = e === eJ.x.STREAM && tS,
                s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
            na(a, {
                cameraSource: { videoDeviceGuid: n, audioDeviceGuid: i, sound: r },
                quality: { resolution: s.resolution, frameRate: s.frameRate },
            });
        } else na(tS, null);
    },
    MEDIA_ENGINE_SET_VIDEO_DEVICE: function (e) {
        let { id: t } = e;
        np({ videoDeviceId: (t = nO(tI, t)) }), na();
    },
    MEDIA_ENGINE_INTERACTION_REQUIRED: function (e) {
        return to !== e.required && ((to = e.required), e.required || tr.interact(), !0);
    },
    USER_SETTINGS_MODAL_INIT: nV,
    USER_SETTINGS_MODAL_SET_SECTION: nV,
    CERTIFIED_DEVICES_SET: function () {
        return tr.eachConnection(nE), !1;
    },
    RPC_APP_CONNECTED: function (e) {
        let { application: t } = e;
        ts.add(t.id);
    },
    RPC_APP_DISCONNECTED: function (e) {
        let { application: t } = e;
        ts.delete(t.id);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { mediaEngineState: t } = e;
        (ta = t.settingsByContext),
            (tA = t.inputDevices),
            (th = t.outputDevices),
            (tZ = t.appSupported),
            (tw = t.krispModuleLoaded),
            (tG = t.krispFatalError),
            (c = t.krispVersion),
            (td = t.goLiveContext);
    },
    APP_STATE_UPDATE: function (e) {
        let { state: t } = e,
            n = H.A.isEnabled();
        if (t === eb.g6G.BACKGROUND && tS && !n) (tD = !0), na(!1);
        else {
            if (t !== eb.g6G.ACTIVE || !tD) return !1;
            (tD = !1), na(!0);
        }
        return !0;
    },
    SET_CHANNEL_BITRATE: function (e) {
        tr.eachConnection((t) => t.setBitRate(e.bitrate));
    },
    SET_VAD_PERMISSION: function (e) {
        let { hasPermission: t } = e,
            n = !t;
        if (n === tm) return !1;
        (tm = n), tr.eachConnection(nr);
    },
    SET_NATIVE_PERMISSION: function (e) {
        let { state: t, permissionType: n } = e,
            i = t === eq.hL.ACCEPTED;
        switch (n) {
            case eq.iL.AUDIO:
                (tK = !0), tr.eachConnection(nr);
                break;
            case eq.iL.CAMERA:
                !i && tS && na(!1);
                break;
            default:
                return !1;
        }
    },
    SET_CHANNEL_VIDEO_QUALITY_MODE: function (e) {
        tr.eachConnection((t) => t.applyVideoQualityMode(e.mode));
    },
    MEDIA_ENGINE_SET_AEC_DUMP: function (e) {
        let { enabled: t } = e,
            n = np({ aecDumpEnabled: t });
        tr.setAecDump(n.aecDumpEnabled);
    },
    MEDIA_ENGINE_SET_OPENH264_ENABLED: function (e) {
        let { enabled: t } = e;
        np({ openH264Enabled: t }), p.Ay?.setOpenH264Enabled?.(t);
    },
    MEDIA_ENGINE_RESET_SETTINGS: function (e) {
        let { overrides: t } = e;
        if (__OVERLAY__) return !1;
        (ta = Object.values(eJ.x).reduce((e, n) => {
            let i = tt();
            return (e[n] = S().merge(i, t[n])), e;
        }, {})),
            y.w.set(e2, ta),
            nT();
    },
    CHANNEL_DELETE: function () {
        if ((!tS && null == a) || null != eK.A.getRTCConnectionId()) return !1;
        na(!1, null);
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: function (e) {
        if (e.code === eJ.CO.KRISP_CPU_OVERUSE) {
            (t5.noiseCancellation = !1), (t5.noiseSuppression = !0);
            let e = nt();
            return tr.eachConnection((t) => n_(t, e.noiseCancellation)), nP(), nM(), !0;
        }
        return !1;
    },
    MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR: function (e) {
        return (
            e.code === eJ.CO.KRISP_VAD_CPU_OVERUSE &&
            ((t5.modeOptions = { vadUseKrisp: !1 }), tr.eachConnection((e) => nn(e)), !0)
        );
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function () {
        return !!tV && ((tV = !1), !0);
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
        let { settings: t } = e;
        tr.applyMediaFilterSettings(t).finally(() => {
            (tB = !1), i.emitChange();
        });
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function () {
        tB = !0;
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function () {
        tB = !1;
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            local: n,
            wasSaved: i,
        } = e;
        if (t !== eX.oD.PRELOADED_USER_SETTINGS || n || null != i) return !1;
        ny(!0);
    },
    CLIPS_INIT: function (e) {
        let { sourceId: t, applicationName: n, quality: r } = e;
        if (!(0, k.Ao)() || null == M.A || (s?.desktopSource.id === t && s.quality === r)) return !1;
        null != s &&
            (tr.setClipsSource(null),
            (0, f.isWindows)() &&
                (null != s.desktopSource.soundshareId
                    ? P.c1(s.desktopSource.soundshareId)
                    : null != s.desktopSource.sourcePid && nt().videoHook && P.c1(s.desktopSource.sourcePid)));
        let a = ek.A.getPidFromDesktopSource(t),
            { soundshareId: l, soundshareSession: o } = nv(a, !0);
        s = { desktopSource: { id: t, sourcePid: a, soundshareId: l, soundshareSession: o }, quality: r };
        let d = t8("MediaEngineStore clips"),
            c = nt().videoHook,
            u = !c || !ee.getConfig({ location: "handleClipsInit" }).enabled,
            _ = c && eT.getConfig({ location: "handleClipsInit" }).enabled,
            { minCaptureWidth: E, minCaptureHeight: A } = eI.getConfig({ location: "handleClipsInit" });
        tr.setClipsSource({
            desktopDescription: {
                id: s.desktopSource.id,
                soundshareId: s.desktopSource.soundshareId,
                useVideoHook: c,
                useHookFramePacer: u,
                useGraphicsCapture: nA(),
                useCaptureDeviceForEncode: !1,
                useLoopback: i.getExperimentalSoundshare(),
                useQuartzCapturer: !0,
                allowScreenCaptureKit: nh(),
                videoHookStaleFrameTimeoutMs: 500,
                graphicsCaptureStaleFrameTimeoutMs: e6,
                hdrCaptureMode: d,
                videoHookAllowDx12: _,
                minCaptureWidth: E,
                minCaptureHeight: A,
            },
            quality: r,
            applicationName: n,
            videoEncoderExperiments: i.getVideoEncoderExperiments(eJ.x.STREAM, "streamer"),
        });
    },
    CLIPS_RESTART: function () {
        s = null;
    },
    CLIPS_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        !1 === t.decoupledClipsEnabled && ((s = null), tr.setClipsSource(null)), !1 === t.clipsEnabled && (s = null);
    },
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function (e) {
        t0 = e.enabled;
    },
    MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: function (e) {
        let { deviceId: t, active: n, available: i } = e;
        tj[t] = { active: n, available: i };
    },
}));
