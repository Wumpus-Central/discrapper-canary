"use strict";
let i, r, s, a, o, l, u, c, d, _, h;
n.d(t, { yz: () => e9, Ay: () => nB }), n(323874), n(14289), n(35956), n(321073);
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
    Z = (0, W.mj)({
        name: "2026-06-av1-encode-linux",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    X = { probeAudioEffects: !1 },
    Q = (0, W.mj)({
        name: "2026-03-audio-effects-probe",
        kind: "user",
        defaultConfig: X,
        variations: { 1: { ...X, probeAudioEffects: !0 } },
    }),
    J = (0, W.mj)({
        name: "2025-08-browser-hevc",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    ee = (0, W.mj)({
        name: "2026-05-disable-camera-simulcast",
        kind: "user",
        defaultConfig: { enableSimulcast: !0 },
        variations: { 1: { enableSimulcast: !1 } },
    }),
    et = (0, W.mj)({
        name: "2026-04-disable-hook-frame-pacer",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var en = n(240921);
let ei = (0, en.Ay)({
        kind: "user",
        name: "2025-11-global-frame-pool-lock",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    er = (0, W.mj)({
        name: "2026-02-go-live-hdr",
        kind: "user",
        defaultConfig: { hdrCaptureMode: "never" },
        variations: { 1: { hdrCaptureMode: "always" }, 2: { hdrCaptureMode: "permittedDevicesOnly" } },
    }),
    es = (0, W.mj)({
        name: "2026-03-ios-audio-interrupt-handling",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var ea = n(574381),
    eo = n(941426),
    el = n(325278);
let eu = new eo.Vy("InputWatcher");
class ec {
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
        if ((0, ea.uF)() && v().satisfies(w.A?.os.release, el.PH))
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
                L.h.dispatch({
                    type: "AUDIO_INPUT_DETECTED",
                    inputDetected: this.inputDetected,
                    lastUpdateTime: this.lastUpdateTime,
                });
        });
    };
}
let ed = (0, en.Ay)({
    kind: "user",
    name: "2025-10-low-latency-rate-control",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var e_ = n(140175);
(0, W.mj)({
    name: "2026-02-mobile-volume-output-slider-removal",
    kind: "user",
    defaultConfig: { audioOutputPresent: !0, nonContextualStreamOutputPresent: !0, showTileVolumeIndicator: !1 },
    variations: { 1: { audioOutputPresent: !1, nonContextualStreamOutputPresent: !1, showTileVolumeIndicator: !0 } },
});
var eh = n(801644);
let ef = (0, W.mj)({
        kind: "user",
        name: "2026-06-systemwide-echo-cancellation-for-people-who-refuse-to-wear-headphones",
        defaultConfig: { echoReferenceMode: "mix" },
        variations: { 1: { echoReferenceMode: "auto" } },
    }),
    ep = (0, W.mj)({
        name: "2026-06-upscale-small-captured-frames",
        kind: "user",
        defaultConfig: { minCaptureWidth: 0, minCaptureHeight: 0 },
        variations: { 1: { minCaptureWidth: 130, minCaptureHeight: 130 } },
    }),
    eE = (0, en.Ay)({
        kind: "user",
        name: "2025-10-vad-before-processing",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    em = (0, W.mj)({
        name: "2026-03-video-capture-device-no-reuse",
        kind: "user",
        defaultConfig: { overrideDeviceReuse: !1 },
        variations: { 1: { overrideDeviceReuse: !0 } },
    }),
    eg = (0, W.mj)({
        name: "2026-04-video-hook-dx12",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eA = (0, W.mj)({
        name: "2026-02-wgc-dirty-regions-all",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eI = (0, W.mj)({
        name: "2026-02-wgc-dirty-regions",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eT = (0, W.mj)({
        name: "2026-06-wmf-cpu-encode-intel",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eS = (0, W.mj)({
        name: "2025-12-wmf-gpu-encode",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function ey(e) {
    return eS.getConfig({ location: e });
}
let eC = (0, W.mj)({
    name: "2026-01-wmf-gpu-encode-intel",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eN = n(75076),
    ev = n(91777),
    eR = n(559633),
    eO = n(205106),
    eb = n(174459),
    eD = n(652215);
let eL = new eo.Vy("AudioEffects");
async function ew(e, t, n) {
    if (!(0, ea.uF)()) return Promise.reject(Error("Audio effects querying not supported on non-Windows platforms"));
    try {
        let i = await n.getDeviceAudioEffects(e);
        return (
            L.h.dispatch({ type: "MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS", deviceId: t, ...i }),
            eb.default.track(eD.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, {
                succeeded: !0,
                active_effects: i.active,
                available_effects: i.available,
            }),
            i
        );
    } catch (e) {
        eL.error("Failed to probe audio effects for device", e),
            eb.default.track(eD.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, { succeeded: !1 });
    }
}
var eM = n(967347),
    eP = n(617617),
    ex = n(125325),
    ek = n(499156),
    eU = n(353835),
    eG = n(927813),
    eF = n(38405),
    eV = n(350535),
    eB = n(495544),
    ej = n(131319),
    eH = n(347481),
    eY = n(734057),
    eW = n(763827),
    eK = n(287809),
    e$ = n(117549),
    ez = n(765682),
    eq = n(829997),
    eZ = n(355097),
    eX = n(621380),
    eQ = n(731854),
    eJ = n(375708);
let e0 = new E.A("MediaEngineStore"),
    e1 = "MediaEngineStore",
    e2 = { left: 1, right: 1 },
    e3 = 5 * eG.A.Millis.SECOND,
    e6 = 2 * eG.A.Millis.SECOND,
    e4 = 30 * eG.A.Millis.SECOND,
    e5 = +eG.A.Millis.MINUTE,
    e7 = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2",
    e8 = 0;
var e9 =
    (((f = {}).WEBCAM = "WEBCAM"),
    (f.INTEGRATED = "INTEGRATED"),
    (f.BLUETOOTH = "BLUETOOTH"),
    (f.AIRPLAY = "AIRPLAY"),
    (f.HEADSET = "HEADSET"),
    f);
function te() {
    return {
        mode: eD.TBI.VOICE_ACTIVITY,
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
        audioMixerSettings: { ...eq.b },
        audioMixerSettingsVersion: 0,
        localPans: {},
        inputVolume: eQ.Hz,
        outputVolume: eQ.Hz,
        inputDeviceId: eQ.dx,
        outputDeviceId: eQ.dx,
        videoDeviceId: eQ.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: ti.supports(eQ.O5.VIDEO_HOOK),
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
let tt = {
        [eX.m.CUSTOM]: {},
        [eX.m.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [eX.m.STUDIO]: {
            mode: eD.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    tn = { modeOptions: { vadUseKrisp: !1 }, noiseCancellation: !1, noiseSuppression: !0 },
    ti = (0, O.hB)((0, O.WI)());
e0.enableNativeLogger(!0);
let tr = {},
    ts = new Set([eQ.x.DEFAULT]),
    ta = ti.supports(eQ.O5.AUTO_ENABLE),
    to = !1,
    tl = eQ.x.STREAM,
    tu = 0,
    tc = performance.now(),
    td = null,
    t_ = { [eQ.dx]: nA("No Input Devices") },
    th = { [eQ.dx]: nA("No Output Devices") },
    tf = { [eQ.dx]: nA("No Video Devices") },
    tp = new D.Ep(),
    tE = !1,
    tm = !1,
    tg = !1,
    tA = !1,
    tI = !1,
    tT = eQ.qe,
    tS = eQ.qe,
    ty = !1,
    tC = !1,
    tN = new D.Ep(),
    tv = !1,
    tR = !1,
    tO = !1,
    tb = !1,
    tD = new D.Ep(),
    tL = !1,
    tw = !1,
    tM = !1,
    tP = !1,
    tx = [],
    tk = !1,
    tU = null,
    tG = !1,
    tF = !1,
    tV = !1,
    tB = {},
    tj = null,
    tH = null,
    tY = !1;
ev.A.hasPermission(ez.iL.AUDIO, { showAuthorizationError: !1 }),
    ev.A.hasPermission(ez.iL.CAMERA, { showAuthorizationError: !1 });
let tW = new Set(),
    tK = !1,
    t$ = new Set(),
    tz = {},
    tq = null,
    tZ = null,
    tX = null,
    tQ = !0,
    tJ = !1,
    t0 = new D.Ep(),
    t1 = !1,
    t2 = !1,
    t3 = !1,
    t6 = !1,
    t4 = {};
function t5(e) {
    return (function (e) {
        let { location: t } = e;
        return er.getConfig({ location: t });
    })({ location: e }).hdrCaptureMode;
}
async function t7() {
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
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eQ.x.DEFAULT,
        t = tr[e];
    return null == t && ((t = te()), (tr[e] = t)), t;
}
function t9() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eQ.x.DEFAULT,
        t = t8(e),
        n = tt[t.activeInputProfile ?? eX.m.CUSTOM],
        i = nM() ? t4 : tn,
        r = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}), ...(i.modeOptions ?? {}) };
    if (
        (null == r.vadDuringPreProcess &&
            (r.vadDuringPreProcess = (function (e) {
                let { location: t, disable: n = !1 } = e;
                return n ? eE.definition.defaultConfig : eE.getConfig({ location: t });
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
    e.context === eQ.x.DEFAULT && (0, e_.N)(!1, !1);
    let { showPTTSpeakingIndicator: i } = ek.A.getConfig({ location: "setInputMode" }),
        r = i && n === eD.TBI.PUSH_TO_TALK;
    e.setInputMode(n, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: !!r || t.modeOptions.autoThreshold,
        vadUseKrisp: (!!r || t.modeOptions.vadUseKrisp) && nM(),
        vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? 0.5,
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        vadDuringPreProcess: t.modeOptions.vadDuringPreProcess ?? !1,
        pttReleaseDelay: Math.round(t.modeOptions.delay),
    });
}
function nt(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eQ.Hz;
    return S().clamp(e, 0, t);
}
function nn(e) {
    let t = t9(e.context),
        n = !ta || t.mute || t.deaf;
    switch (e.context) {
        case eQ.x.DEFAULT:
            n = n || tE || tm || tg || !ev.A.didHavePermission(ez.iL.AUDIO);
            break;
        case eQ.x.STREAM:
            n = !0;
            break;
        default:
            e.context;
    }
    e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eQ.x.DEFAULT && P.A.updateNativeMute();
}
function ni() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tI,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
        n = s;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, m.isWindows)()
                ? M.c1(n.desktopSource.soundshareId)
                : null != n.desktopSource.sourcePid && t9().videoHook && M.c1(n.desktopSource.sourcePid),
            ti.setGoLiveSource(null, tl)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            ti.setGoLiveSource(null, tl),
        tI || e)
    ) {
        let t = t9().videoDeviceId;
        tI && t === eQ.dx && tS === eQ.dx && tT !== eQ.qe ? (t = tT) : (tS = t),
            (tT = (tI = e) ? ny(tf, t) : eQ.qe),
            ti.setVideoInputDevice(tT);
    }
    if (((s = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = t5("MediaEngineStore go live"),
                r = t9().videoHook,
                s = n_(),
                a = s ? ((0, m.isWindows)() && v().satisfies(w.A?.os.release, el.fG) ? el.zl : el.eg) : 0,
                o = !1;
            (0, m.isWindows)() &&
                a >= el.zl &&
                (o =
                    !0 === tZ
                        ? eI.getConfig({ location: "updateVideo" }).enabled
                        : eA.getConfig({ location: "updateVideo" }).enabled);
            let l = !r || !et.getConfig({ location: "updateVideo" }).enabled,
                u = r && eg.getConfig({ location: "updateVideo" }).enabled,
                { minCaptureWidth: c, minCaptureHeight: d } = ep.getConfig({ location: "updateVideo" });
            ti.setGoLiveSource(
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
                        allowScreenCaptureKit: nh(),
                        videoHookStaleFrameTimeoutMs: 500,
                        graphicsCaptureStaleFrameTimeoutMs: e3,
                        hdrCaptureMode: n,
                        enableGlobalFramePoolLock: (function (e) {
                            let { location: t, disable: n = !1 } = e;
                            return n ? ei.definition.defaultConfig : ei.getConfig({ location: t });
                        })({ location: "updateVideo" }).enabled,
                        useGraphicsCaptureDirtyRegions: o,
                        videoHookAllowDx12: u,
                        minCaptureWidth: c,
                        minCaptureHeight: d,
                    },
                    quality: e,
                },
                tl,
            );
        }
        null != t.cameraSource &&
            ti.setGoLiveSource(
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
        case eQ.CO.KRISP_CPU_OVERUSE:
            return V.B6.KrispCpuOveruse;
        case eQ.CO.KRISP_FAILED:
            return V.B6.KrispFailed;
        case eQ.CO.KRISP_VAD_CPU_OVERUSE:
            return V.B6.KrispVadCpuOveruse;
        case eQ.CO.KRISP_INIT_ERROR:
            return V.B6.KrispInitError;
        case eQ.CO.KRISP_INIT_ERROR_NATIVE:
            return V.B6.KrispInitErrorNative;
        case eQ.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED:
            return V.B6.KrispInitErrorSse4NotSupported;
        case eQ.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED:
            return V.B6.KrispInitErrorAvx2NotSupported;
        case eQ.CO.KRISP_INIT_ERROR_UNSIGNED:
            return V.B6.KrispInitErrorUnsigned;
        case eQ.CO.KRISP_INIT_ERROR_GLOBAL_INIT:
            return V.B6.KrispInitErrorGlobalInit;
        case eQ.CO.KRISP_INIT_ERROR_WEIGHT_8K:
            return V.B6.KrispInitErrorWeight8k;
        case eQ.CO.KRISP_INIT_ERROR_WEIGHT_16K:
            return V.B6.KrispInitErrorWeight16k;
        case eQ.CO.KRISP_INIT_ERROR_WEIGHT_32K:
            return V.B6.KrispInitErrorWeight32k;
        case eQ.CO.KRISP_INIT_ERROR_WEIGHT_VAD:
            return V.B6.KrispInitErrorWeightVad;
        default:
            return;
    }
}
let ns = new Set([
    eQ.CO.KRISP_INIT_ERROR,
    eQ.CO.KRISP_INIT_ERROR_NATIVE,
    eQ.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED,
    eQ.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED,
    eQ.CO.KRISP_INIT_ERROR_UNSIGNED,
    eQ.CO.KRISP_INIT_ERROR_GLOBAL_INIT,
    eQ.CO.KRISP_INIT_ERROR_WEIGHT_8K,
    eQ.CO.KRISP_INIT_ERROR_WEIGHT_16K,
    eQ.CO.KRISP_INIT_ERROR_WEIGHT_32K,
    eQ.CO.KRISP_INIT_ERROR_WEIGHT_VAD,
]);
function na(e) {
    if (
        (e0.warn(`Voice processing error: ${e}`),
        (0, V.QW)({ type: V.iy.NOISE_CANCELLER_ERROR, underlyingError: nr(e) }),
        eb.default.track(eD.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
        ns.has(e))
    ) {
        tP = !0;
        return;
    }
    e === eQ.CO.KRISP_VAD_CPU_OVERUSE
        ? L.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e })
        : ((tG = !0), L.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e }));
}
function no(e, t) {
    let n = t === eQ.$C.LIVE;
    e0.warn(`Video filter error: ${e} (${n ? "live" : "preview"})`),
        n &&
            (0, V.QW)({
                type: V.iy.VIDEO_BACKGROUND_UNAVAILABLE,
                underlyingError: (function (e) {
                    switch (e) {
                        case eQ.kv.UNSUPPORTED:
                            return V.B6.VideoBackgroundUnsupported;
                        case eQ.kv.INIT_FAILED:
                            return V.B6.VideoBackgroundInitFailed;
                        default:
                            return;
                    }
                })(e),
            }),
        L.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_FILTER_ERROR", code: e, target: n ? "live" : "preview" });
}
function nl(e) {
    let t = z({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function nu(e, t) {
    e.setAutomaticGainControl(nl(t));
}
function nc(e, t) {
    let n = (0, eO.A)(t, i.getSystemMicrophoneMode());
    n !== t && e0.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: r } = z({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(r);
}
function nd(e) {
    let t = t9(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eH.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eH.A.hasNoiseSuppression(n) || t.noiseSuppression),
        nu(e, eH.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        nc(e, t.noiseCancellation),
        e.setSpatialAudioEnabled(t.audioMixerSettings.enabled),
        (0, m.isWindows)() && v().satisfies(w.A?.os.release, ">=10.0.15063") && e.context === eQ.x.DEFAULT)
    ) {
        let t = (function (e) {
            let { location: t } = e;
            return ef.getConfig({ location: t });
        })({ location: "updateConnectionVoiceProcessing" });
        e.setEchoReferenceMode(t.echoReferenceMode);
    }
    if ((0, m.isWeb)()) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function n_() {
    return (0, m.isWindows)() && v().satisfies(w.A?.os.release, el.yg);
}
function nh() {
    return (0, m.isMac)() && ti.supports(eQ.O5.SCREEN_CAPTURE_KIT) && v().satisfies(w.A?.os.release, el.e);
}
function nf() {
    return (
        (0, m.isWindows)() &&
        ti.supports(eQ.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        ti.supports(eQ.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function np() {
    return ti.supports(eQ.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function nE(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eQ.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = t8(t);
    return Object.assign(i, e), !__OVERLAY__ && n && b.w.set(e1, tr), i;
}
function nm() {
    let e = t9();
    nN(e.inputDeviceId),
        ti.setAudioOutputDevice(e.outputDeviceId),
        ni(),
        ti.setInputVolume(e.inputVolume),
        ti.setOutputVolume(e.outputVolume),
        ti.setAecDump(e.aecDumpEnabled),
        ti.setSidechainCompression(e.sidechainCompression),
        ti.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        ti.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        (0, m.isLinux)() && g.Ay?.setOpenH264Enabled?.(e.openH264Enabled),
        ti.setAudioMixerOptions(e.audioMixerSettings);
}
function ng() {
    ta || ti.enable().then(() => L.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nA(e) {
    return { id: eQ.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
}
function nI(e, t) {
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
let nT = /^HDAUDIO\\(?:SUB)?FUNC_\d+&VEN_(?:8086|1002|10DE)/;
function nS(e, t) {
    let { deviceType: n, defaultName: i } = t,
        r = e[{ audioinput: "inputDevices", audiooutput: "outputDevices", videoinput: "videoDevices" }[n]];
    if (0 === r.length) {
        let e = nA(i);
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
                    case nI(e, r):
                        return "WEBCAM";
                    case ["builtin", "displayport", "hdmi"].includes(e.macosTransportType ?? ""):
                    case null != e.hardwareId && nT.test(e.hardwareId):
                        return "INTEGRATED";
                    case S()(e.hardwareId).startsWith("BTHENUM"):
                    case ["bluetooth", "bluetoothle"].includes(e.macosTransportType ?? ""):
                        return "BLUETOOTH";
                    case ["airplay", "continuitycapturewireless"].includes(e.macosTransportType ?? ""):
                        return "AIRPLAY";
                    case "audioinput" === e.type && nI(e, i):
                    case "audiooutput" === e.type && nI(e, n):
                        return "HEADSET";
                }
            })(t, e),
        }))
        .keyBy("id")
        .value();
}
function ny(e, t) {
    let n = e[t] ?? e[eQ.dx] ?? S()(e).values().first();
    return null != n ? n.id : t;
}
function nC(e) {
    if (!(0, m.isWindows)() || !Q.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects) return;
    let t = t_[e];
    t?.guid != null && ew(t.guid, e, ti);
}
function nN(e) {
    ti.setAudioInputDevice(e), nC(e);
}
function nv(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nR() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = eP.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let i = n === eZ.W.USER ? eQ.x.DEFAULT : eQ.x.STREAM,
            r = i === eQ.x.STREAM ? eQ.Cn : eQ.Hz,
            s = t[n] ?? {},
            { localMutes: a, localVolumes: o } = t9(i);
        for (let [e, t] of Object.entries(s))
            null == (0, ex.tM)(i, e) &&
                (t.muted ? (a[e] = !0) : delete a[e],
                t.volume !== r ? (o[e] = t.volume) : delete o[e],
                ti.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (e)
            for (let e of new Set([...Object.keys(a), ...Object.keys(o)]))
                null == s[e] &&
                    (delete a[e],
                    delete o[e],
                    ti.eachConnection((t) => {
                        t.setLocalVolume(e, r), t.setLocalMute(e, !1);
                    }, i));
        nE({ localMutes: a, localVolumes: o }, i);
    }
}
function nO(e, t) {
    if (t) {
        let { soundshareId: t, soundshareSession: s } = (function (e) {
            if (null == i)
                return (
                    e0.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
                    { soundshareId: null, soundshareSession: "" }
                );
            {
                let t = i.getExperimentalSoundshare() ? e : eU.A.getAudioPid(e),
                    n = "";
                return null != t && (n = eU.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n };
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
    return null != e && t9().videoHook && M.GH(e), { soundshareId: null, soundshareSession: null };
}
function nb() {
    let e = eQ.x.DEFAULT,
        { videoToggleStateMap: t } = t9(e);
    for (let [e, n] of Object.entries(t)) n === eD.bb8.AUTO_PROBING && delete t[e];
    nE({ videoToggleStateMap: t }, e, !1);
}
function nD(e) {
    let t = t9(),
        n = ti.getAudioSubsystem(),
        r = ti.getAudioLayer(),
        s = ny(t_, t.inputDeviceId),
        a = t_[s]?.name,
        o = (0, eO.A)(t.noiseCancellation, i.getSystemMicrophoneMode());
    eb.default.track(eD.HAw.VOICE_PROCESSING, {
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
function nL() {
    let e = t9(),
        t = t$.size > 0,
        n = e.inputDeviceId,
        i = eH.A.hasEchoCancellation(n) || e.echoCancellation,
        r = eH.A.hasNoiseSuppression(n) || e.noiseSuppression,
        s = nl(eH.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        a = e.noiseCancellation;
    ti.setLoopback(t, {
        echoCancellation: i,
        echoCancellationPreEcho: !t,
        noiseSuppression: r,
        automaticGainControlConfig: s,
        noiseCancellation: a,
    });
}
async function nw() {
    if (!ti.supports(eQ.O5.VAAPI) || window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let e = await window.DiscordNative.processUtils.getSystemInfo();
    (e.electronGPUInfo?.gpuDevice ?? []).some((e) => 4098 === e.vendorId) &&
        ((t3 = !0), (t2 = ti.supports(eQ.O5.GAMESCOPE_CAPTURE)));
}
function nM() {
    return (tM || !1) && !tP;
}
async function nP() {
    try {
        await g.Ay.ensureModule("discord_krisp");
        let e = g.Ay.requireModule("discord_krisp");
        (tM = !0),
            (c = e.getSdkVersion?.()),
            (d = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (tx = e), i.emitChange();
            }),
            i.emitChange(),
            await g.Ay.ensureModule("discord_voice");
        let t = g.Ay.requireModule("discord_voice");
        t.setupKrispPath?.();
    } catch (t) {
        e0.warn(`Failed to load Krisp module: ${t.message}`), eF.A.captureException(t);
        let e = eQ.CO.KRISP_INIT_ERROR;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eQ.CO.KRISP_INIT_ERROR : n;
        }
        (0, V.QW)({ type: V.iy.NOISE_CANCELLER_ERROR, underlyingError: nr(e) }),
            eb.default.track(eD.HAw.VOICE_PROCESSING, { noise_canceller_error: e });
    } finally {
        tw = !1;
    }
}
async function nx() {
    try {
        let e,
            t = "",
            n = !1,
            i = URL.parse(e7);
        if (null === i) return void e0.log("OpenH264 URL ", i, " is invalid");
        let r = i.pathname.split("/"),
            s = r[r.length - 1].replace(".bz2", "");
        try {
            let t = await g.Ay.downloadOpenH264(
                e7,
                s,
                "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f",
                (e) => {
                    e0.log("OpenH264 download status", e);
                },
            );
            e0.log("OpenH264 is ready", t), (n = t.fetchedFromNetwork), (e = !0);
        } catch (n) {
            e0.error("OpenH264 download failed", n), (t = n.message), (e = !1);
        }
        if (
            (eb.default.track(eD.HAw.VIDEO_OPENH264_DOWNLOADED, {
                success: e,
                fetched_from_network: n,
                error_message: t,
            }),
            e)
        ) {
            let e = await g.Ay.cleanupUnusedOpenH264Files([s]);
            e0.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        e0.error("OpenH264 download failed", e);
    }
}
function nk(e) {
    e === eQ.rB.AUTOMATIC
        ? (nE({ automaticAudioSubsystem: !0 }), nU())
        : (nE({ automaticAudioSubsystem: !1 }), ti.setAudioSubsystem(e));
}
function nU() {
    ti.queueAudioSubsystem(eQ.rB.EXPERIMENTAL);
}
function nG(e) {
    let { section: t } = e;
    return t === eD.nc_.VOICE && ng(), !1;
}
class nF extends R.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        let e;
        if (
            (tp.start(e4, () => {
                e0.error("Device enumeration timed out"), eb.default.track(eD.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
            }),
            ti.on(O.bg.Connection, (e) => {
                let t;
                nL(), ne(e), nn(e), nd(e);
                let n = t9();
                e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers),
                    e.setQoS(n.qos),
                    (0, m.isWindows)()
                        ? (e.setExperimentFlag(eQ.fd.H265_HARDWARE_ONLY, !0),
                          (null != tH
                              ? tH
                              : "u" > typeof window
                                ? (tH = t7().then((e) => ((tj = e), e)))
                                : Promise.resolve(!1)
                          ).then((t) => {
                              e.setExperimentFlag(eQ.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                          }))
                        : (0, m.isMac)() && e.setExperimentFlag(eQ.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                    (0, m.isLinux)() && n.openH264Enabled && e.setExperimentFlag(eQ.fd.USE_LIBOPENH264_DECODER, !0),
                    (function (e) {
                        let { location: t, disable: n = !1 } = e;
                        return n ? ed.definition.defaultConfig : ed.getConfig({ location: t });
                    })({ location: "setupMediaEngine" }).enabled &&
                        e.setExperimentFlag(eQ.fd.LOW_LATENCY_RATE_CONTROL, !0),
                    e.setExperimentFlag(eQ.fd.RESET_DECODER_ON_ERRORS, !0),
                    e.setExperimentFlag(eQ.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
                let { swallowVolumeOnlySpeakingEvents: r } = x.A.getConfig({ location: "MediaEngineStore" });
                if (
                    (r && e.setExperimentFlag(eQ.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === eQ.x.STREAM)
                ) {
                    let t = nv(th);
                    e.setSoundshareDiscardRearChannels(t);
                }
                if ((0, m.isWindows)())
                    e.setExperimentFlag(eQ.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(eQ.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eQ.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                else if ((0, m.isMac)())
                    e.setExperimentFlag(eQ.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eQ.fd.SIGNAL_AV1_HARDWARE_DECODE, !0),
                        e.setExperimentFlag(
                            eQ.fd.H265_DISABLE_ENCODE,
                            !(
                                window?.DiscordNative?.os.arch === "arm64" &&
                                v().satisfies(window?.DiscordNative?.os.release, eQ.Dk)
                            ),
                        );
                else if ((0, m.isLinux)()) {
                    let { enabled: t } = Z.getConfig({ location: "MediaEngineStore" });
                    t && e.setExperimentFlag(eQ.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(eQ.fd.SIGNAL_AV1_DECODE, !0);
                } else if ((0, m.isIOS)())
                    e.setExperimentFlag(eQ.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eQ.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                else if ((0, m.isAndroid)() && !1) {
                    let { enabled: t } = q.getConfig({ location: "MediaEngineStore" });
                    t &&
                        (e.setExperimentFlag(eQ.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eQ.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
                }
                if ((0, m.isWeb)()) {
                    let { enabled: t } = J.getConfig({ location: "MediaEngineStore" });
                    e.setExperimentFlag(eQ.fd.BROWSER_HEVC, t);
                }
                for (let r of ((0, m.isWindows)() &&
                    tq?.startsWith("AMD") &&
                    ey("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eQ.fd.WMF_GPU_ENCODE, !0),
                (0, m.isWindows)() &&
                    tq?.startsWith("Intel") &&
                    eC.getConfig({ location: "MediaEngineStore" }).enabled &&
                    e.setExperimentFlag(eQ.fd.WMF_GPU_ENCODE, !0),
                (0, m.isWindows)() &&
                    tq?.startsWith("Intel") &&
                    !0 === tZ &&
                    1 === tX &&
                    eT.getConfig({ location: "MediaEngineStore" }).enabled &&
                    e.setExperimentFlag(eQ.fd.INTEL_GPU, !0),
                (0, m.isWindows)() &&
                    tq?.startsWith("Qualcomm") &&
                    ey("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eQ.fd.WMF_GPU_ENCODE, !0),
                ti.setHasFullbandPerformance(null === (t = (0, F.A)()) || t >= 31),
                e.setRemoteAudioHistory(1e3),
                (0, U.A)(i) && e.setClipsKeyFrameInterval(eQ.X1),
                (n = t9(e.context)),
                e.setPostponeDecodeLevel(100),
                Object.keys(n.localMutes)))
                    r !== eB.default.getId() && e.setLocalMute(r, n.localMutes[r]);
                for (let t of Object.keys(n.localVolumes))
                    t !== eB.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
                for (let t of Object.keys(n.localPans)) {
                    let i = n.localPans[t];
                    e.setLocalPan(t, i.left, i.right);
                }
                for (let t of Object.keys(n.disabledLocalVideos)) e.setLocalVideoDisabled(t, n.disabledLocalVideos[t]);
                e.on(O.yq.Speaking, (t, n, i, r) => {
                    L.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: r });
                }),
                    e.context === eQ.x.DEFAULT &&
                        ((tC = !1),
                        e.on(O.yq.SpeakingWhileMuted, () => {
                            let e = !tC;
                            (tC = !0),
                                e && i.emitChange(),
                                tN.start(e6, () => {
                                    (tC = !1), i.emitChange();
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
                            eb.default.track(eD.HAw.VIDEOHOOK_INITIALIZED, {
                                backend: e,
                                format: t,
                                framebuffer_format: n,
                                sample_count: i,
                                success: r,
                                reinitialization: a,
                                ...(0, Y.A)(s?.desktopSource),
                            });
                    }),
                    e.on(O.yq.NoiseCancellationError, na),
                    e.on(O.yq.VoiceActivityDetectorError, na),
                    e.on(O.yq.SdpError, (e, t, n, i) => {
                        eb.default.track(eD.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: i });
                    }),
                    e.on(O.yq.VideoState, (t) => {
                        L.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                    }),
                    e.setBitRate(ej.A.bitrate),
                    e.applyVideoQualityMode(e$.A.mode),
                    (0, m.isWindows)() &&
                        ti.supports(eQ.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                        ti.setAsyncVideoInputDeviceInit(!0);
            }),
            ti.on(O.bg.DeviceChange, (e, t, n) => {
                tp.stop(),
                    L.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
            }),
            ti.on(O.bg.VolumeChange, (e, t) => {
                L.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
            }),
            ti.on(O.bg.DesktopSourceEnd, (e, t) => {
                L.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
            }),
            ti.on(O.bg.AudioPermission, (e) => {
                (tY = !0), L.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
            }),
            ti.on(O.bg.VideoPermission, (e) => {
                L.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
            }),
            ti.on(O.bg.WatchdogTimeout, async () => {
                let e;
                if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                    try {
                        await eU.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                    } catch (t) {
                        "number" == typeof t.status && (e = t.status);
                    }
                e0.warn(`Watchdog timeout, report submission status: ${e ?? 200}`);
                let t = null != w.A.processUtils.setCrashReason;
                try {
                    await eb.default.track(
                        eD.HAw.VOICE_WATCHDOG_TIMEOUT,
                        { minidump_submission_error: e, will_restart: t },
                        { flush: !0 },
                    );
                } catch (e) {
                    e0.error("Failed to flush voice watchdog timeout analytics event", e);
                }
                t &&
                    (e0.info("Relaunching app due to voice watchdog timeout"),
                    await w.A.processUtils.setCrashReason("voice-watchdog-timeout"),
                    b.w.set("discord_watchdog_restart_timestamp", Date.now().toString()),
                    w.A.app.relaunch());
            }),
            ti.on(O.bg.VideoInputInitialized, (e) => {
                eb.default.track(eD.HAw.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired
                        ? null
                        : Math.round(e.timeToFirstFrame * eG.A.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy,
                    media_session_id: eW.A.getMediaSessionId(),
                    rtc_connection_id: eW.A.getRTCConnectionId(),
                });
            }),
            ti.on(O.bg.AudioInputInitialized, (e) => {
                eb.default.track(eD.HAw.AUDIO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_initialized_ms: Math.round(e.timeToInitialized * eG.A.Millis.SECOND),
                    rtc_connection_id: eW.A.getRTCConnectionId(),
                });
            }),
            ti.on(O.bg.ClipsRecordingRestartNeeded, () => {
                L.h.dispatch({ type: "CLIPS_RESTART" });
            }),
            ti.on(O.bg.ClipsInitFailure, (e, t) => {
                let n = tu < 3;
                (tu += 1),
                    L.h.wait(() => {
                        L.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t }),
                            n
                                ? L.h.dispatch({ type: "CLIPS_RESTART" })
                                : e0.warn(
                                      `Clips init failure budget exhausted (${tu} consecutive unhealthy attempts); skipping auto-restart. A settings flip / game change / app restart will retry.`,
                                  );
                    });
            }),
            ti.on(O.bg.ClipsRecordingHealthy, () => {
                0 !== tu && (e0.info(`Clips bridge reported healthy; resetting restart budget (was ${tu}).`), (tu = 0));
            }),
            ti.on(O.bg.ClipsBridgeIdleShutdown, () => {
                e0.info("Clips bridge idle shutdown");
            }),
            ti.on(O.bg.ClipsRecordingEnded, (e, t) => {
                a?.desktopSource?.id === e &&
                    (null != t && s?.desktopSource?.soundshareId !== t && M.c1(t), (a = null));
            }),
            ti.on(O.bg.NativeScreenSharePickerUpdate, (e, t) => {
                L.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
            }),
            ti.on(O.bg.NativeScreenSharePickerCancel, (e) => {
                L.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
            }),
            ti.on(O.bg.NativeScreenSharePickerError, (e) => {
                L.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
            }),
            ti.on(O.bg.AudioDeviceModuleError, (e, t, n) => {
                eb.default.track(eD.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
            }),
            ti.on(O.bg.VideoCodecError, (e) => {
                let t = "encode" === e.mode ? V.iy.VIDEO_ENCODE_ERROR : V.iy.VIDEO_DECODE_ERROR,
                    n = { videoCodec: e.codecStandard, errorMessage: e.message };
                (0, V.QW)(
                    t === V.iy.VIDEO_ENCODE_ERROR
                        ? { type: t, ...n, videoEncoder: e.implName }
                        : { type: t, ...n, videoDecoder: e.implName },
                );
            }),
            ti.on(O.bg.ConnectionStats, (e) => {
                L.h.dispatch({
                    type: "MEDIA_ENGINE_CONNECTION_STATS",
                    connectionStats: e.map((e) => {
                        let { stats: t, connection: n } = e;
                        return {
                            stats: t,
                            mediaEngineConnectionId: n.mediaEngineConnectionId,
                            version: e8++,
                            context: n.context,
                        };
                    }),
                });
            }),
            ti.on(O.bg.VoiceProcessingError, na),
            ti.on(O.bg.VideoFilterError, no),
            ti.on(O.bg.VoiceQueueMetrics, (e) => {
                let t = nV(e);
                null !== t && eb.default.track(eD.HAw.VOICE_QUEUE_METRICS, t);
            }),
            ti.setOnVideoContainerResized((e, t, n) => {
                L.h.wait(() =>
                    L.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
                );
            }),
            nw(),
            o.reset(),
            (0, eM.w)().then((e) => {
                null != e && ((tq = e.gpu_brand), (tZ = e.has_intel_hybrid_igpu), (tX = e.gpu_count));
            }),
            ti.on(O.bg.SystemMicrophoneModeChange, (e) => {
                (h = e), ti.eachConnection(nd), i.emitChange();
            }),
            null != (e = b.w.get("audio")) && (b.w.set(e1, { [eQ.x.DEFAULT]: e }), b.w.remove("audio")),
            (tr = b.w.get(e1) ?? {}),
            S().each(tr, (e) => {
                S().defaultsDeep(e, te()),
                    null != e.modeOptions &&
                        "string" == typeof e.modeOptions.shortcut &&
                        (e.modeOptions.shortcut = (0, eV.OH)(e.modeOptions.shortcut)),
                    null != e.modeOptions &&
                        4 !== e.vadUseKrispSettingVersion &&
                        ((e.vadUseKrispSettingVersion = 4), (e.modeOptions.vadUseKrisp = !0)),
                    e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                    e.vadThrehsoldMigrated ||
                        ((e.vadThrehsoldMigrated = !0),
                        e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = -60)),
                    ti.supports(eQ.O5.SIDECHAIN_COMPRESSION) &&
                        e.sidechainCompressionSettingVersion < 1 &&
                        ((e.sidechainCompressionSettingVersion = 1), (e.sidechainCompression = !0)),
                    e.audioMixerSettingsVersion < 1 &&
                        ((e.audioMixerSettingsVersion = 1), (e.audioMixerSettings = { ...eq.b })),
                    (0, m.isWeb)()
                        ? 1 !== e.ncUseKrispjsSettingVersion &&
                          ((e.ncUseKrispjsSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                        : 1 !== e.ncUseKrispSettingVersion &&
                          ((e.ncUseKrispSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0));
            }),
            nm(),
            ((0, m.isWindows)() || (0, m.isLinux)() || (0, m.isMac)()) && !__OVERLAY__ && !tw && !tM
                ? ((tw = !0), nP())
                : (0, m.isWeb)() && ti.supports(eQ.O5.NOISE_CANCELLATION)
                  ? ((tM = !0), i.emitChange())
                  : (0, m.isWeb)() && nE({ noiseCancellation: !1 }),
            (0, m.isLinux)() && nx(),
            nb(),
            (0, m.isDesktop)() && m.isPlatformEmbedded && !t6)
        ) {
            t6 = !0;
            let e = async () => {
                let t = await new Promise((e) => {
                    g.Ay.pollQueueMetrics((t) => {
                        e(t);
                    });
                });
                t.periodMs = eQ.tl;
                let n = nV(t);
                null !== n && eb.default.track(eD.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, eQ.tl);
            };
            setTimeout(e, eQ.tl);
        }
        (0, m.isWindows)() &&
            m.isPlatformEmbedded &&
            null === td &&
            ti
                .getCodecSurvey()
                .then((e) => {
                    try {
                        let t = JSON.parse(e);
                        if (null == t || null == t.available_video_decoders)
                            throw Error("decoder survey is not available");
                        td = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                    } catch (e) {
                        e0.error("Failed to parse codec survey", e), (td = !1);
                    }
                })
                .catch((e) => {
                    e0.error("Failed to get codec survey", e), (td = !1);
                })
                .finally(() => {
                    L.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
                }),
            (0, m.isAndroid)(),
            (tz = {
                [eQ.O5.VIDEO]: ti.supports(eQ.O5.VIDEO),
                [eQ.O5.DESKTOP_CAPTURE]: ti.supports(eQ.O5.DESKTOP_CAPTURE),
                [eQ.O5.HYBRID_VIDEO]: ti.supports(eQ.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eB.default, ej.A, eH.A, eY.A, k.Ay, B.A, eW.A, H.Ay, eP.A, eK.default, e$.A);
    }
    supports(e) {
        return ti.supports(e);
    }
    supportsInApp(e) {
        return tz[e] || ti.supports(e);
    }
    isSupported() {
        return ti.supported();
    }
    isNoiseSuppressionSupported() {
        return ti.supports(eQ.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return nM();
    }
    isNoiseCancellationError() {
        return tG;
    }
    isAutomaticGainControlSupported() {
        return ti.supports(eQ.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !np() && (ti.supports(eQ.O5.LEGACY_AUDIO_SUBSYSTEM) || ti.supports(eQ.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return ti.supports(eQ.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === ti.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return nM();
    }
    isAecDumpSupported() {
        return ti.supports(eQ.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return ti.supports(eQ.O5.VIDEO) && ti.supports(eQ.O5.SIMULCAST);
    }
    getAecDump() {
        return t9().aecDumpEnabled;
    }
    getMediaEngine() {
        return ti;
    }
    getVideoComponent() {
        return ti.Video;
    }
    getCameraComponent() {
        return ti.Camera;
    }
    getKrispSuppressionLevel() {
        return d ?? 100;
    }
    getKrispEnableStats() {
        return tk;
    }
    isEnabled() {
        return ta;
    }
    isMute() {
        return this.isSelfMute() || tE;
    }
    isDeaf() {
        return this.isSelfDeaf() || tA;
    }
    isServerMute() {
        return tE;
    }
    isServerDeaf() {
        return tA;
    }
    getAudioMixerSettings() {
        return t9().audioMixerSettings;
    }
    hasContext(e) {
        return null != tr[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eQ.x.DEFAULT;
        return e === eQ.x.DEFAULT && tm;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eQ.x.DEFAULT;
        return (
            !this.isEnabled() ||
            t9(e).mute ||
            !ev.A.didHavePermission(ez.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eQ.x.DEFAULT && tg)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return ty;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        ty = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eQ.x.DEFAULT,
            t = tJ && "voice_isolation" !== this.getSystemMicrophoneMode() && t9(e).mode === eD.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (eH.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return tQ;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eQ.x.DEFAULT;
        return !this.isSupported() || t9(e).deaf;
    }
    isVideoEnabled() {
        return tI && tR;
    }
    isVideoAvailable() {
        return Object.values(tf).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return tR;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eQ.x.STREAM;
        return tl === e && null != s;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eQ.x.STREAM;
        return tl === e && null != s && s.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eQ.x.DEFAULT;
        return e !== eB.default.getId() && (t9(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return ti.supports(eQ.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eQ.x.DEFAULT;
        return t9(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eQ.x.DEFAULT;
        return t9(t).videoToggleStateMap[e] ?? eD.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eQ.x.DEFAULT;
        return t === eQ.x.DEFAULT && tW.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eQ.x.DEFAULT;
        return e === eQ.x.DEFAULT && tW.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tF;
    }
    isNativeAudioPermissionReady() {
        return tY;
    }
    getGoLiveSource() {
        return s;
    }
    getGoLiveContext() {
        return tl;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return tc;
    }
    isH264MfDecodeAvailable() {
        return td;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eQ.x.DEFAULT,
            n = t9(t).localPans[e];
        return null != n ? n : e2;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eQ.x.DEFAULT,
            n = t === eQ.x.STREAM ? eQ.Cn : eQ.Hz,
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
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eQ.x.DEFAULT;
        return t9(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eQ.x.DEFAULT;
        return t9(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            S().each(tr, (t, n) => {
                let {
                    mode: i,
                    modeOptions: { shortcut: r },
                } = t;
                i === eD.TBI.PUSH_TO_TALK && ts.has(n) && (e[n] = r);
            }),
            e
        );
    }
    getInputDeviceId() {
        return ny(t_, t9().inputDeviceId);
    }
    getOutputDeviceId() {
        return ny(th, t9().outputDeviceId);
    }
    getVideoDeviceId() {
        return ny(tf, t9().videoDeviceId);
    }
    getInputDevices() {
        return t_;
    }
    getOutputDevices() {
        return th;
    }
    getVideoDevices() {
        return tf;
    }
    getEchoCancellation() {
        let e = t9();
        return eH.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return ti.supports(eQ.O5.SIDECHAIN_COMPRESSION) && t9().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return t9().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return t9().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tj && tj;
    }
    getOpenH264Enabled() {
        return (0, m.isLinux)() && t9().openH264Enabled;
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
        return ti.getDebugLogging();
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
        return nf() && t9().automaticAudioSubsystem ? eQ.rB.AUTOMATIC : ti.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return ti.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return t9().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eX.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eQ.x.DEFAULT;
        return t9(e);
    }
    getState() {
        return {
            settingsByContext: tr,
            inputDevices: t_,
            outputDevices: th,
            appSupported: tz,
            krispModuleLoaded: tM,
            krispFatalError: tP,
            krispVersion: c,
            krispSuppressionLevel: d,
            goLiveSource: s,
            goLiveContext: tl,
        };
    }
    getInputDetectedThisConnection() {
        return tO;
    }
    getInputDetected() {
        return o.inputDetected;
    }
    getLastInputDetectedUpdateTime() {
        return o.lastUpdateTime;
    }
    getNoInputDetectedNotice() {
        return tb;
    }
    getInputDeviceOSMuted() {
        return l;
    }
    getInputDeviceOSVolume() {
        return u;
    }
    getPacketDelay() {
        return m.isPlatformEmbedded || this.getMode() !== eD.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        ti.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return to;
    }
    getVideoHook() {
        return t9().videoHook;
    }
    supportsVideoHook() {
        return ti.supports(eQ.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = t9().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return ti.supports(eQ.O5.EXPERIMENTAL_SOUNDSHARE) && v().satisfies(w.A?.os.release, el.$x);
    }
    supportsHookSoundshare() {
        return (0, m.isWindows)() && ti.supports(eQ.O5.SOUNDSHARE) && v().satisfies(w.A?.os.release, el.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = t9().useSystemScreensharePicker,
            n = (0, m.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return ti.supports(eQ.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return t3;
    }
    getVideoEncoderExperiments(e, t) {
        let n = ["unk"];
        if (
            (n.push("nvNewPresets"),
            e === eQ.x.STREAM ? n.push("nvRelaxRc=250") : n.push("nvRelaxRc=75"),
            this.getUseVaapiEncoder() && n.push("vaapi"),
            e === eQ.x.STREAM && "streamer" === t && (0, m.isWindows)())
        ) {
            n.push("useCaptureDeviceForEncode");
            let { overrideDeviceReuse: e } = em.getConfig({ location: "handleReady" });
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
        return tx;
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
        return (0, m.isMac)()
            ? ti.supports(eQ.O5.SOUNDSHARE) && v().satisfies(w.A?.os.release, el.P$) && nh()
            : (0, m.isWindows)()
              ? ti.supports(eQ.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, m.isLinux)() && ti.supports(eQ.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, m.isWindows)()) {
            if (this.getBypassSystemInputProcessing()) return;
            return tB[this.getInputDeviceId()]?.active?.find((e) => "deep_noise_suppression" === e);
        }
        if ((0, m.isMac)() || (0, m.isIOS)()) return h;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eQ.x.DEFAULT,
            t = this.supports(eQ.O5.VIDEO)
                ? [{ rid: "100", type: e === eQ.x.DEFAULT ? eQ.mI.VIDEO : eQ.mI.SCREEN, quality: eQ.Y4 }]
                : [];
        return (
            this.isSimulcastSupported() &&
                e === eQ.x.DEFAULT &&
                ee.getConfig({ location: "MediaEngineStore.getVideoStreamParameters" }).enableSimulcast &&
                t.push({ rid: "50", type: eQ.mI.VIDEO, quality: eQ.Cl }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: (0, m.isWeb)() };
        return ti.fetchAsyncResources(e);
    }
    startDavePreload() {
        !tV &&
            ((tV = !0),
            (0, m.isWeb)() &&
                ti.fetchAsyncResources({ fetchDave: !0 }).catch((e) => {
                    e0.warn("DAVE preload failed:", e), eF.A.captureException(e);
                }));
    }
    getSupportedSecureFramesProtocolVersion() {
        return ti.getSupportedSecureFramesProtocolVersion();
    }
    hasClipsSource() {
        return null != a;
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
(i = new nF(L.h, {
    VOICE_CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n, currentVoiceChannelId: i, video: r } = e;
        if ((i !== n && ni(r, null), null != t || null == n)) {
            tL = !1;
            return;
        }
        if (tL) return;
        tL = !0;
        let s = t9();
        (s.mute || s.deaf) && (nE({ deaf: !1, mute: !1 }), ti.eachConnection(nn));
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (r === t.sessionId) {
                (tE = t.mute || t.suppress), (tA = t.deaf), ti.eachConnection(nn);
                let e = null != t.guildId && null != t.channelId && null != tU && tU !== t.channelId,
                    n = !tL && null == t.channelId;
                return ni(!e && !n && tI), (tU = t.channelId), !0;
            }
            return __OVERLAY__ || t.userId !== eB.default.getId() || null != eW.A.getChannelId() || ni(!1, null), e;
        }, !1);
    },
    CONNECTION_OPEN: function (e) {
        (r = e.sessionId), (tE = !1), (tA = !1);
        let t = t9();
        nf() && (np() ? nk(eQ.rB.AUTOMATIC) : t.automaticAudioSubsystem && nU()),
            ti.supports(eQ.O5.OFFLOAD_ADM_CONTROLS) && ti.setOffloadAdmControls(!0),
            (0, m.isIOS)() &&
                es.getConfig({ location: "handleConnectionOpen" }).enabled &&
                ti.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
            nC(t.inputDeviceId),
            nR();
    },
    CONNECTION_CLOSED: function () {
        r = null;
    },
    POST_CONNECTION_OPEN: function () {
        return (0, m.isWeb)() && i.startDavePreload(), !1;
    },
    RTC_CONNECTION_STATE: function (e) {
        switch (e.state) {
            case eD.S7L.CONNECTING:
                ng();
                break;
            case eD.S7L.RTC_CONNECTING:
                (tb = !1), (l = void 0), (u = void 0), (tO = !1), (tJ = !1), t0.stop(), tD.stop(), o.reset();
                break;
            case eD.S7L.RTC_CONNECTED:
                ni();
                break;
            case eD.S7L.DISCONNECTED:
                (t4 = {}),
                    (function () {
                        if (0 === tW.size) return;
                        let e = eQ.x.DEFAULT,
                            { disabledLocalVideos: t } = t9(e);
                        tW.forEach((n) => {
                            I()(t[n], "If you are auto-disabled, then you are also disabled."),
                                delete t[n],
                                ti.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
                        }),
                            tW.clear(),
                            nE({ disabledLocalVideos: t }, e, !1);
                    })(),
                    nb();
        }
    },
    AUDIO_SET_TEMPORARY_SELF_MUTE: function (e) {
        let { mute: t } = e;
        (tm = t), ti.eachConnection(nn);
    },
    AUDIO_TOGGLE_SELF_MUTE: function (e) {
        let { context: t, playSoundEffect: n } = e,
            { mute: i, deaf: r } = t9(t);
        if (t === eQ.x.DEFAULT && (ev.A.requestPermission(ez.iL.AUDIO), tg)) return !1;
        (i = !r && !i) || (r = !1), n || (ty = !0), nE({ mute: i, deaf: r }, t), ti.eachConnection(nn);
    },
    AUDIO_SET_SELF_MUTE: function (e) {
        let { context: t, mute: n, playSoundEffect: i } = e;
        nE({ mute: n }, t), i || (ty = !0), ti.eachConnection(nn);
    },
    AUDIO_TOGGLE_SELF_DEAF: function (e) {
        let { context: t } = e;
        nE({ deaf: !t9(t).deaf }, t), ti.eachConnection(nn);
    },
    AUDIO_TOGGLE_LOCAL_MUTE: function (e) {
        let { context: t, userId: n } = e;
        if (n === eB.default.getId()) return;
        let { localMutes: i } = t9(t);
        i[n] ? delete i[n] : (i[n] = !0),
            nE({ localMutes: i }, t),
            ti.eachConnection((e) => e.setLocalMute(n, i[n] || !1), t);
    },
    AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
        let { context: t, userId: n, videoToggleState: i, persist: r, isAutomatic: s } = e;
        I()(!(r && s), "These are not allowed to both be true.");
        let a = i === eD.bb8.DISABLED,
            { disabledLocalVideos: o } = t9(t),
            l = o[n] ?? !1,
            u = tW.has(n),
            c = i === eD.bb8.AUTO_ENABLED || i === eD.bb8.MANUAL_ENABLED;
        e0.info(`disableVideo=${a} currentlyDisabled=${l} currentlyAutoDisabled=${u}, isVideoShown=${c}`),
            I()(!(u && !l), "If you are auto-disabled, then you are also disabled.");
        let d = a !== l,
            _ = t === eQ.x.DEFAULT,
            h = s && d && _,
            f = r && d && _;
        e0.info(`changed=${d} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${h} isManualToggleByUser=${f}`);
        let { videoToggleStateMap: p } = t9(t);
        if (
            (p[n] === eD.bb8.AUTO_PROBING &&
                i === eD.bb8.AUTO_ENABLED &&
                (0, eN.A)(n, a ? eQ.Al.AUTO_DISABLE : eQ.Al.AUTO_ENABLE, c),
            (p[n] = i),
            nE({ videoToggleStateMap: p }, t, r),
            i === eD.bb8.AUTO_PROBING
                ? eW.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
                : eW.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
            tK ||
                (e0.info(`isAutoDisableAllowed=${tK} - disabling VideoHealthManager`),
                eW.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
            h)
        ) {
            if ((!a && !u) || (a && !tK)) return;
            (0, eN.A)(n, a ? eQ.Al.AUTO_DISABLE : eQ.Al.AUTO_ENABLE, c), a ? tW.add(n) : tW.delete(n);
        } else
            f &&
                (u && !a
                    ? (e0.info("disallowing auto-disable for this session because of manual override by user"),
                      (tK = !1),
                      eW.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                      (0, eN.A)(n, eQ.Al.MANUAL_REENABLE, c))
                    : (0, eN.A)(n, a ? eQ.Al.MANUAL_DISABLE : eQ.Al.MANUAL_ENABLE, c));
        _ && !a && tW.delete(n),
            a ? (o[n] = !0) : delete o[n],
            nE({ disabledLocalVideos: o }, t, r),
            ti.eachConnection((e) => e.setLocalVideoDisabled(n, o[n] ?? !1), t);
    },
    AUDIO_SET_LOCAL_VOLUME: function (e) {
        let { context: t, userId: n, volume: i } = e;
        if (n === eB.default.getId()) return;
        let r = t === eQ.x.STREAM ? eQ.Cn : eQ.Hz,
            { localVolumes: s } = t9(t);
        i === r ? delete s[n] : (s[n] = i),
            nE({ localVolumes: s }, t),
            ti.eachConnection((e) => e.setLocalVolume(n, i), t);
    },
    AUDIO_SET_AUDIO_MIXER_SETTINGS: function (e) {
        let { context: t, settings: n } = e;
        nE({ audioMixerSettings: n }, t),
            ti.setAudioMixerOptions(n),
            ti.eachConnection((e) => e.setSpatialAudioEnabled(n.enabled), eQ.x.DEFAULT);
    },
    AUDIO_SET_LOCAL_PAN: function (e) {
        let { context: t, userId: n, left: i, right: r } = e,
            { localPans: s } = t9(t);
        (s[n] = { left: i, right: r }), nE({ localPans: s }, t), ti.eachConnection((e) => e.setLocalPan(n, i, r), t);
    },
    AUDIO_SET_MODE: function (e) {
        let { context: t, mode: n, options: i } = e;
        nE({ mode: n, modeOptions: { ...i, updatedAt: Date.now() } }, t), ti.eachConnection(ne);
    },
    AUDIO_SET_INPUT_VOLUME: function (e) {
        let { volume: t } = e;
        nE({ inputVolume: nt(t) }), ti.setInputVolume(t);
    },
    AUDIO_SET_OUTPUT_VOLUME: function (e) {
        let { volume: t } = e;
        nE({ outputVolume: t }), ti.setOutputVolume(t);
    },
    AUDIO_SET_INPUT_DEVICE: function (e) {
        let { id: t } = e;
        (t = ny(t_, t)),
            (tc = performance.now()),
            nE({ inputDeviceId: t }),
            nN(t),
            ti.eachConnection(nd),
            (l = void 0),
            (u = void 0),
            t0.stop(),
            (tJ = !1);
        let { resetSilenceWarningOnDeviceChange: n } = eh.A.getConfig({
            location: "MediaEngineStore.handleSetInputDevice",
        });
        n && ((tO = !1), o.reset());
    },
    AUDIO_SET_OUTPUT_DEVICE: function (e) {
        let { id: t } = e;
        nE({ outputDeviceId: (t = ny(th, t)) }), ti.setAudioOutputDevice(t);
    },
    AUDIO_SET_ACTIVE_INPUT_PROFILE: function (e) {
        let { inputProfile: t } = e;
        nE({ activeInputProfile: t });
        let n = t9();
        ti.eachConnection((e) => {
            ne(e), nd(e);
        }),
            ti.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
            nL();
    },
    AUDIO_SET_ECHO_CANCELLATION: function (e) {
        let t = nE({ echoCancellation: e.enabled });
        ti.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nL(), nD(e.location);
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION: function (e) {
        let t;
        (t = nE({ sidechainCompression: e.enabled })), ti.setSidechainCompression(t.sidechainCompression);
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function (e) {
        let t = nE({ sidechainCompressionStrength: e.strength });
        ti.setSidechainCompressionStrength(t.sidechainCompressionStrength);
    },
    AUDIO_SET_LOOPBACK: function (e) {
        let { enabled: t, loopbackReason: n } = e;
        return t ? t$.add(n) : t$.delete(n), nL();
    },
    AUDIO_SET_NOISE_SUPPRESSION: function (e) {
        let t = nE({ noiseSuppression: e.enabled });
        ti.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nL(), nD(e.location);
    },
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function (e) {
        let t = nE({ automaticGainControl: e.enabled });
        ti.eachConnection((e) => nu(e, t.automaticGainControl)), nL(), nD(e.location);
    },
    AUDIO_SET_NOISE_CANCELLATION: function (e) {
        let t = nE({ noiseCancellation: e.enabled });
        ti.eachConnection((e) => nc(e, t.noiseCancellation)), nL(), nD(e.location);
    },
    AUDIO_SET_KRISP_MODEL_OVERRIDE: function (e) {
        eR.A.setKrispModelOverride(e.model), (_ = e.model), nL();
    },
    AUDIO_SET_DISPLAY_SILENCE_WARNING: function (e) {
        nE({ silenceWarning: e.enabled });
    },
    AUDIO_SET_DEBUG_LOGGING: function (e) {
        ti.setDebugLogging(e.enabled);
    },
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: function (e) {
        let { level: t } = e;
        (d = t), eR.A.setKrispSuppressionLevel(t);
    },
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: function (e) {
        (0, m.isWeb)() || ((tk = e.enabled), ti.setNoiseCancellationEnableStats?.(e.enabled));
    },
    MEDIA_ENGINE_SET_VIDEO_HOOK: function (e) {
        nE({ videoHook: e.enabled });
    },
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function (e) {
        nE({ experimentalSoundshare2: e.enabled });
    },
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: function (e) {
        let { enabled: t } = e;
        nE({ useSystemScreensharePicker: t });
    },
    AUDIO_SET_ATTENUATION: function (e) {
        let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i } = e,
            r = nE({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i });
        ti.eachConnection((e) =>
            e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers),
        );
    },
    AUDIO_SET_QOS: function (e) {
        let { enabled: t } = e;
        nE({ qos: t }), ti.eachConnection((e) => e.setQoS(t));
    },
    MEDIA_ENGINE_DEVICES: function (e) {
        let t = t_;
        if (
            ((t_ = nS(e, { deviceType: eQ.oh.AUDIO_INPUT, defaultName: eJ.intl.string(eJ.t["/QIjDA"]) })),
            !S().isEqual(t_, t))
        ) {
            let e = t9();
            nN(ny(t_, e.inputDeviceId)), ti.eachConnection(nd);
        }
        !(function (e) {
            let t = th;
            if (
                ((th = nS(e, { deviceType: eQ.oh.AUDIO_OUTPUT, defaultName: eJ.intl.string(eJ.t.xlUg0v) })),
                !S().isEqual(th, t))
            ) {
                let e = t9(),
                    n = ny(th, e.outputDeviceId);
                ti.setAudioOutputDevice(n);
                let i = nv(t),
                    r = nv(th);
                i !== r &&
                    ti.eachConnection((e) => {
                        e.context === eQ.x.STREAM && e.setSoundshareDiscardRearChannels(r);
                    });
            }
        })(e);
        tR = e.videoDevices.length > 0;
        let n = tf;
        if (
            ((tf = nS(e, { deviceType: eQ.oh.VIDEO_INPUT, defaultName: eJ.intl.string(eJ.t.WKWARY) })),
            tI && !S().isEqual(tf, n))
        ) {
            let e = void 0 !== tf[tT],
                t = tT === eQ.dx && n[eQ.dx]?.disabled,
                i = "Firefox" === C().name && "" === tT && n[tT]?.name === "Default" && !n[tT]?.disabled;
            ni(e || t || i);
        }
    },
    AUDIO_VOLUME_CHANGE: function (e) {
        let { inputVolume: t, outputVolume: n } = e;
        nE({ inputVolume: nt(t), outputVolume: n });
    },
    AUDIO_RESET: function () {
        b.w.remove(e1), location.reload();
    },
    AUDIO_INPUT_DETECTED: function (e) {
        let { inputDetected: t } = e;
        if (null == t) return !1;
        if (((tb = !0 !== tO && !t), t)) (tO = !0), (tJ = !1), t0.stop(), tD.stop();
        else if (t9().mode === eD.TBI.VOICE_ACTIVITY && tO) {
            let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = eh.A.getConfig({
                location: "MediaEngineStore.handleInputDetected",
            });
            e &&
                t0.start(e5, () => {
                    eb.default.track(eD.HAw.HARDWARE_MUTE_GUESSED, {
                        input_device_name: t_[ny(t_, t9().inputDeviceId)]?.name,
                        rtc_connection_id: eW.A.getRTCConnectionId(),
                    }),
                        (tJ = !0),
                        i.emitChange();
                }),
                null != t &&
                    tD.start(t * eG.A.Millis.MINUTE, () => {
                        (tO = !1), o.reset();
                    });
        }
    },
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: function (e) {
        let { osVolume: t, osMuted: n } = e;
        (u = t), (l = n);
    },
    AUDIO_SET_SUBSYSTEM: function (e) {
        nk(e.subsystem);
    },
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: function (e) {
        let t = e.bypassEnabled;
        nE({ bypassSystemInputProcessing: t }), ti.setAudioInputBypassSystemProcessing(t), nD(e.location);
    },
    MEDIA_ENGINE_SET_AUDIO_ENABLED: function (e) {
        (ta = e.enabled), e.unmute && nE({ mute: !1, deaf: !1 }), ti.eachConnection(nn);
    },
    MEDIA_ENGINE_SET_VIDEO_ENABLED: function (e) {
        let { enabled: t } = e;
        ev.A.requestPermission(ez.iL.CAMERA), ni(t);
    },
    MEDIA_ENGINE_PERMISSION: function (e) {
        let { kind: t, granted: n } = e;
        if (!n)
            switch (t) {
                case "audio":
                    (ta = !1), ti.eachConnection(nn);
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
                a = t.context ?? eQ.x.DEFAULT,
                o = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
                l = eU.A.getPidFromDesktopSource(i);
            m.isPlatformEmbedded && ({ soundshareId: e, soundshareSession: n } = nO(l, r)),
                a !== tl && (null != s && ti.setGoLiveSource(null, tl), (tl = a)),
                ni(a === eQ.x.STREAM && tI, {
                    desktopSource: { id: i, sourcePid: l, soundshareId: e, soundshareSession: n },
                    quality: { resolution: o.resolution, frameRate: o.frameRate },
                });
        } else if (t?.cameraSettings != null) {
            let e = t.context ?? eQ.x.DEFAULT,
                { videoDeviceGuid: n, audioDeviceGuid: i, sound: r } = t.cameraSettings,
                s = e === eQ.x.STREAM && tI,
                a = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
            ni(s, {
                cameraSource: { videoDeviceGuid: n, audioDeviceGuid: i, sound: r },
                quality: { resolution: a.resolution, frameRate: a.frameRate },
            });
        } else ni(tI, null);
    },
    MEDIA_ENGINE_SET_VIDEO_DEVICE: function (e) {
        let { id: t } = e;
        nE({ videoDeviceId: (t = ny(tf, t)) }), ni();
    },
    MEDIA_ENGINE_INTERACTION_REQUIRED: function (e) {
        return to !== e.required && ((to = e.required), e.required || ti.interact(), !0);
    },
    USER_SETTINGS_MODAL_INIT: nG,
    USER_SETTINGS_MODAL_SET_SECTION: nG,
    CERTIFIED_DEVICES_SET: function () {
        return ti.eachConnection(nd), !1;
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
        (tr = t.settingsByContext),
            (t_ = t.inputDevices),
            (th = t.outputDevices),
            (tz = t.appSupported),
            (tM = t.krispModuleLoaded),
            (tP = t.krispFatalError),
            (c = t.krispVersion),
            (tl = t.goLiveContext);
    },
    APP_STATE_UPDATE: function (e) {
        let { state: t } = e,
            n = j.A.isEnabled();
        if (t === eD.g6G.BACKGROUND && tI && !n) (tv = !0), ni(!1);
        else {
            if (t !== eD.g6G.ACTIVE || !tv) return !1;
            (tv = !1), ni(!0);
        }
        return !0;
    },
    SET_CHANNEL_BITRATE: function (e) {
        ti.eachConnection((t) => t.setBitRate(e.bitrate));
    },
    SET_VAD_PERMISSION: function (e) {
        let { hasPermission: t } = e,
            n = !t;
        if (n === tg) return !1;
        (tg = n), ti.eachConnection(nn);
    },
    SET_NATIVE_PERMISSION: function (e) {
        let { state: t, permissionType: n } = e,
            i = t === ez.hL.ACCEPTED;
        switch (n) {
            case ez.iL.AUDIO:
                (tY = !0), ti.eachConnection(nn);
                break;
            case ez.iL.CAMERA:
                !i && tI && ni(!1);
                break;
            default:
                return !1;
        }
    },
    SET_CHANNEL_VIDEO_QUALITY_MODE: function (e) {
        ti.eachConnection((t) => t.applyVideoQualityMode(e.mode));
    },
    MEDIA_ENGINE_SET_AEC_DUMP: function (e) {
        let { enabled: t } = e,
            n = nE({ aecDumpEnabled: t });
        ti.setAecDump(n.aecDumpEnabled);
    },
    MEDIA_ENGINE_SET_OPENH264_ENABLED: function (e) {
        let { enabled: t } = e;
        nE({ openH264Enabled: t }), g.Ay?.setOpenH264Enabled?.(t);
    },
    MEDIA_ENGINE_RESET_SETTINGS: function (e) {
        let { overrides: t } = e;
        if (__OVERLAY__) return !1;
        (tr = Object.values(eQ.x).reduce((e, n) => {
            let i = te();
            return (e[n] = S().merge(i, t[n])), e;
        }, {})),
            b.w.set(e1, tr),
            nm();
    },
    CHANNEL_DELETE: function () {
        if ((!tI && null == s) || null != eW.A.getRTCConnectionId()) return !1;
        ni(!1, null);
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: function (e) {
        if (e.code === eQ.CO.KRISP_CPU_OVERUSE) {
            (t4.noiseCancellation = !1), (t4.noiseSuppression = !0);
            let e = t9();
            return ti.eachConnection((t) => nc(t, e.noiseCancellation)), nL(), nD(), !0;
        }
        return !1;
    },
    MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR: function (e) {
        return (
            e.code === eQ.CO.KRISP_VAD_CPU_OVERUSE &&
            ((t4.modeOptions = { vadUseKrisp: !1 }), ti.eachConnection((e) => ne(e)), !0)
        );
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function () {
        return !!tG && ((tG = !1), !0);
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
        let { settings: t } = e;
        ti.applyMediaFilterSettings(t).finally(() => {
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
        if (t !== eZ.oD.PRELOADED_USER_SETTINGS || n || null != i) return !1;
        nR(!0);
    },
    CLIPS_INIT: function (e) {
        let { sourceId: t, applicationName: n, quality: r } = e;
        if (!(0, G.Ao)() || null == w.A || (a?.desktopSource.id === t && a.quality === r)) return !1;
        null != a &&
            (ti.setClipsSource(null),
            (0, m.isWindows)() &&
                (null != a.desktopSource.soundshareId
                    ? M.c1(a.desktopSource.soundshareId)
                    : null != a.desktopSource.sourcePid && t9().videoHook && M.c1(a.desktopSource.sourcePid)));
        let s = eU.A.getPidFromDesktopSource(t),
            { soundshareId: o, soundshareSession: l } = nO(s, !0);
        a = { desktopSource: { id: t, sourcePid: s, soundshareId: o, soundshareSession: l }, quality: r };
        let u = t5("MediaEngineStore clips"),
            c = t9().videoHook,
            d = !c || !et.getConfig({ location: "handleClipsInit" }).enabled,
            _ = c && eg.getConfig({ location: "handleClipsInit" }).enabled,
            { minCaptureWidth: h, minCaptureHeight: f } = ep.getConfig({ location: "handleClipsInit" });
        ti.setClipsSource({
            desktopDescription: {
                id: a.desktopSource.id,
                soundshareId: a.desktopSource.soundshareId,
                useVideoHook: c,
                useHookFramePacer: d,
                useGraphicsCapture: n_(),
                useCaptureDeviceForEncode: !1,
                useLoopback: i.getExperimentalSoundshare(),
                useQuartzCapturer: !0,
                allowScreenCaptureKit: nh(),
                videoHookStaleFrameTimeoutMs: 500,
                graphicsCaptureStaleFrameTimeoutMs: e3,
                hdrCaptureMode: u,
                videoHookAllowDx12: _,
                minCaptureWidth: h,
                minCaptureHeight: f,
            },
            quality: r,
            applicationName: n,
            videoEncoderExperiments: i.getVideoEncoderExperiments(eQ.x.STREAM, "streamer"),
        });
    },
    CLIPS_RESTART: function () {
        a = null;
    },
    CLIPS_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        !1 === t.decoupledClipsEnabled && ((a = null), ti.setClipsSource(null));
    },
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function (e) {
        tQ = e.enabled;
    },
    MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: function (e) {
        let { deviceId: t, active: n, available: i } = e;
        tB[t] = { active: n, available: i };
    },
})),
    (o = new ec(ti, i));
let nB = i;
