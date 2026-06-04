"use strict";
let i, r, s, a, o, l, u, c, d, _, h;
n.d(t, { yz: () => e8, Ay: () => nU }), n(323874), n(14289), n(35956), n(321073);
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
    N = n.n(y),
    v = n(299855),
    C = n.n(v),
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
    H = n(6494),
    j = n(952818),
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
        name: "2026-05-av1-bitrate-tuning",
        kind: "user",
        defaultConfig: { bitrate: 35e5 },
        variations: { 1: { bitrate: 3e6 }, 2: { bitrate: 25e5 } },
    }),
    X = (0, W.mj)({
        name: "2026-04-av1-decode-android",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    Z = { probeAudioEffects: !1 },
    Q = (0, W.mj)({
        name: "2026-03-audio-effects-probe",
        kind: "user",
        defaultConfig: Z,
        variations: { 1: { ...Z, probeAudioEffects: !0 } },
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
        if ((0, ea.uF)() && C().satisfies(w.A?.os.release, el.PH))
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
    ep = (0, en.Ay)({
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
    eg = (0, en.Ay)({
        kind: "user",
        name: "2026-02-voice-timeout-mitigations",
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
var eN = n(75076),
    ev = n(91777),
    eC = n(559633),
    eR = n(205106),
    eO = n(174459),
    eb = n(652215);
let eD = new eo.Vy("AudioEffects");
async function eL(e, t, n) {
    if (!(0, ea.uF)()) return Promise.reject(Error("Audio effects querying not supported on non-Windows platforms"));
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
    eH = n(347481),
    ej = n(734057),
    eY = n(763827),
    eW = n(287809),
    eK = n(117549),
    e$ = n(765682),
    ez = n(829997),
    eq = n(355097),
    eX = n(621380),
    eZ = n(731854),
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
        inputVolume: eZ.Hz,
        outputVolume: eZ.Hz,
        inputDeviceId: eZ.dx,
        outputDeviceId: eZ.dx,
        videoDeviceId: eZ.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: tn.supports(eZ.O5.VIDEO_HOOK),
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
    tr = new Set([eZ.x.DEFAULT]),
    ts = tn.supports(eZ.O5.AUTO_ENABLE),
    ta = !1,
    to = eZ.x.STREAM,
    tl = performance.now(),
    tu = null,
    tc = { [eZ.dx]: np("No Input Devices") },
    td = { [eZ.dx]: np("No Output Devices") },
    t_ = { [eZ.dx]: np("No Video Devices") },
    th = new D.Ep(),
    tf = !1,
    tp = !1,
    tE = !1,
    tm = !1,
    tg = !1,
    tA = eZ.qe,
    tI = eZ.qe,
    tT = !1,
    tS = !1,
    ty = new D.Ep(),
    tN = !1,
    tv = !1,
    tC = !1,
    tR = !1,
    tO = new D.Ep(),
    tb = !1,
    tD = !1,
    tL = !1,
    tw = !1,
    tM = [],
    tP = !1,
    tx = null,
    tk = !1,
    tU = !1,
    tG = !1,
    tF = {},
    tV = null,
    tB = null,
    tH = !1;
ev.A.hasPermission(e$.iL.AUDIO, { showAuthorizationError: !1 }),
    ev.A.hasPermission(e$.iL.CAMERA, { showAuthorizationError: !1 });
let tj = new Set(),
    tY = !1,
    tW = new Set(),
    tK = {},
    t$ = null,
    tz = null,
    tq = !0,
    tX = !1,
    tZ = new D.Ep(),
    tQ = !1,
    tJ = !1,
    t0 = !1,
    t1 = !1,
    t2 = {};
function t3(e) {
    return (function (e) {
        let { location: t } = e;
        return er.getConfig({ location: t });
    })({ location: e }).hdrCaptureMode;
}
async function t6() {
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
function t4() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eZ.x.DEFAULT,
        t = ti[e];
    return null == t && ((t = e9()), (ti[e] = t)), t;
}
function t5() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eZ.x.DEFAULT,
        t = t4(e),
        n = te[t.activeInputProfile ?? eX.m.CUSTOM],
        i = nb() ? t2 : tt,
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
function t7(e) {
    let t = t5(e.context),
        n = t.mode;
    e.context === eZ.x.DEFAULT && (0, e_.N)(!1, !1);
    let { showPTTSpeakingIndicator: i } = ex.A.getConfig({ location: "setInputMode" }),
        r = i && n === eb.TBI.PUSH_TO_TALK;
    e.setInputMode(n, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: !!r || t.modeOptions.autoThreshold,
        vadUseKrisp: (!!r || t.modeOptions.vadUseKrisp) && nb(),
        vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? 0.5,
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        vadDuringPreProcess: t.modeOptions.vadDuringPreProcess ?? !1,
        pttReleaseDelay: Math.round(t.modeOptions.delay),
    });
}
function t8(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eZ.Hz;
    return S().clamp(e, 0, t);
}
function t9(e) {
    let t = t5(e.context),
        n = !ts || t.mute || t.deaf;
    e.context === eZ.x.DEFAULT
        ? (n = n || tf || tp || tE || !ev.A.didHavePermission(e$.iL.AUDIO))
        : e.context === eZ.x.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === eZ.x.DEFAULT && P.A.updateNativeMute();
}
function ne() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tg,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
        n = s;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, m.isWindows)()
                ? M.c1(n.desktopSource.soundshareId)
                : null != n.desktopSource.sourcePid && t5().videoHook && M.c1(n.desktopSource.sourcePid),
            tn.setGoLiveSource(null, to)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            tn.setGoLiveSource(null, to),
        tg || e)
    ) {
        let t = t5().videoDeviceId;
        tg && t === eZ.dx && tI === eZ.dx && tA !== eZ.qe ? (t = tA) : (tI = t),
            (tA = (tg = e) ? nA(t_, t) : eZ.qe),
            tn.setVideoInputDevice(tA);
    }
    if (((s = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = t3("MediaEngineStore go live"),
                r = t5().videoHook,
                s = nl(),
                a = s ? ((0, m.isWindows)() && C().satisfies(w.A?.os.release, el.fG) ? el.zl : el.eg) : 0,
                o = !1;
            (0, m.isWindows)() &&
                a >= el.zl &&
                (o =
                    !0 === tz
                        ? eI.getConfig({ location: "updateVideo" }).enabled
                        : eA.getConfig({ location: "updateVideo" }).enabled);
            let l = !r || !et.getConfig({ location: "updateVideo" }).enabled,
                u = r && em.getConfig({ location: "updateVideo" }).enabled;
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
                        allowScreenCaptureKit: nu(),
                        videoHookStaleFrameTimeoutMs: 500,
                        graphicsCaptureStaleFrameTimeoutMs: e2,
                        hdrCaptureMode: n,
                        enableGlobalFramePoolLock: (function (e) {
                            let { location: t, disable: n = !1 } = e;
                            return n ? ei.definition.defaultConfig : ei.getConfig({ location: t });
                        })({ location: "updateVideo" }).enabled,
                        useGraphicsCaptureDirtyRegions: o,
                        videoHookAllowDx12: u,
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
function nt(e) {
    switch (e) {
        case eZ.CO.KRISP_CPU_OVERUSE:
            return V.B6.KrispCpuOveruse;
        case eZ.CO.KRISP_FAILED:
            return V.B6.KrispFailed;
        case eZ.CO.KRISP_VAD_CPU_OVERUSE:
            return V.B6.KrispVadCpuOveruse;
        case eZ.CO.KRISP_INIT_ERROR:
            return V.B6.KrispInitError;
        case eZ.CO.KRISP_INIT_ERROR_NATIVE:
            return V.B6.KrispInitErrorNative;
        case eZ.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED:
            return V.B6.KrispInitErrorSse4NotSupported;
        case eZ.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED:
            return V.B6.KrispInitErrorAvx2NotSupported;
        case eZ.CO.KRISP_INIT_ERROR_UNSIGNED:
            return V.B6.KrispInitErrorUnsigned;
        case eZ.CO.KRISP_INIT_ERROR_GLOBAL_INIT:
            return V.B6.KrispInitErrorGlobalInit;
        case eZ.CO.KRISP_INIT_ERROR_WEIGHT_8K:
            return V.B6.KrispInitErrorWeight8k;
        case eZ.CO.KRISP_INIT_ERROR_WEIGHT_16K:
            return V.B6.KrispInitErrorWeight16k;
        case eZ.CO.KRISP_INIT_ERROR_WEIGHT_32K:
            return V.B6.KrispInitErrorWeight32k;
        case eZ.CO.KRISP_INIT_ERROR_WEIGHT_VAD:
            return V.B6.KrispInitErrorWeightVad;
        default:
            return;
    }
}
let nn = new Set([
    eZ.CO.KRISP_INIT_ERROR,
    eZ.CO.KRISP_INIT_ERROR_NATIVE,
    eZ.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED,
    eZ.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED,
    eZ.CO.KRISP_INIT_ERROR_UNSIGNED,
    eZ.CO.KRISP_INIT_ERROR_GLOBAL_INIT,
    eZ.CO.KRISP_INIT_ERROR_WEIGHT_8K,
    eZ.CO.KRISP_INIT_ERROR_WEIGHT_16K,
    eZ.CO.KRISP_INIT_ERROR_WEIGHT_32K,
    eZ.CO.KRISP_INIT_ERROR_WEIGHT_VAD,
]);
function ni(e) {
    if (
        (eJ.warn(`Voice processing error: ${e}`),
        (0, V.QW)({ type: V.iy.NOISE_CANCELLER_ERROR, underlyingError: nt(e) }),
        eO.default.track(eb.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
        nn.has(e))
    ) {
        tw = !0;
        return;
    }
    e === eZ.CO.KRISP_VAD_CPU_OVERUSE
        ? L.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e })
        : ((tk = !0), L.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e }));
}
function nr(e) {
    let t = z({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function ns(e, t) {
    e.setAutomaticGainControl(nr(t));
}
function na(e, t) {
    let n = (0, eR.A)(t, i.getSystemMicrophoneMode());
    n !== t && eJ.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: r } = z({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(r);
}
function no(e) {
    let t = t5(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eH.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eH.A.hasNoiseSuppression(n) || t.noiseSuppression),
        ns(e, eH.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        na(e, t.noiseCancellation),
        e.setSpatialAudioEnabled(t.audioMixerSettings.enabled),
        (0, m.isWindows)() && C().satisfies(w.A?.os.release, ">=10.0.15063") && e.context === eZ.x.DEFAULT)
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
function nl() {
    return (0, m.isWindows)() && C().satisfies(w.A?.os.release, el.yg);
}
function nu() {
    return (0, m.isMac)() && tn.supports(eZ.O5.SCREEN_CAPTURE_KIT) && C().satisfies(w.A?.os.release, el.e);
}
function nc() {
    return (
        (0, m.isWindows)() &&
        tn.supports(eZ.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        tn.supports(eZ.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nd() {
    return tn.supports(eZ.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function n_(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eZ.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = t4(t);
    return Object.assign(i, e), !__OVERLAY__ && n && b.w.set(e0, ti), i;
}
function nh() {
    let e = t5();
    nT(e.inputDeviceId),
        tn.setAudioOutputDevice(e.outputDeviceId),
        ne(),
        tn.setInputVolume(e.inputVolume),
        tn.setOutputVolume(e.outputVolume),
        tn.setAecDump(e.aecDumpEnabled),
        tn.setSidechainCompression(e.sidechainCompression),
        tn.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        tn.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        (0, m.isLinux)() && g.Ay?.setOpenH264Enabled?.(e.openH264Enabled),
        tn.setAudioMixerOptions(e.audioMixerSettings);
}
function nf() {
    ts || tn.enable().then(() => L.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function np(e) {
    return { id: eZ.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
}
function nE(e, t) {
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
let nm = /^HDAUDIO\\(?:SUB)?FUNC_\d+&VEN_(?:8086|1002|10DE)/;
function ng(e, t) {
    let { deviceType: n, defaultName: i } = t,
        r = e[{ audioinput: "inputDevices", audiooutput: "outputDevices", videoinput: "videoDevices" }[n]];
    if (0 === r.length) {
        let e = np(i);
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
                    case nE(e, r):
                        return "WEBCAM";
                    case ["builtin", "displayport", "hdmi"].includes(e.macosTransportType ?? ""):
                    case null != e.hardwareId && nm.test(e.hardwareId):
                        return "INTEGRATED";
                    case S()(e.hardwareId).startsWith("BTHENUM"):
                    case ["bluetooth", "bluetoothle"].includes(e.macosTransportType ?? ""):
                        return "BLUETOOTH";
                    case ["airplay", "continuitycapturewireless"].includes(e.macosTransportType ?? ""):
                        return "AIRPLAY";
                    case "audioinput" === e.type && nE(e, i):
                    case "audiooutput" === e.type && nE(e, n):
                        return "HEADSET";
                }
            })(t, e),
        }))
        .keyBy("id")
        .value();
}
function nA(e, t) {
    let n = e[t] ?? e[eZ.dx] ?? S()(e).values().first();
    return null != n ? n.id : t;
}
function nI(e) {
    if (!(0, m.isWindows)() || !Q.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects) return;
    let t = tc[e];
    t?.guid != null && eL(t.guid, e, tn);
}
function nT(e) {
    tn.setAudioInputDevice(e), nI(e);
}
function nS(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function ny() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = eM.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let i = n === eq.W.USER ? eZ.x.DEFAULT : eZ.x.STREAM,
            r = i === eZ.x.STREAM ? eZ.Cn : eZ.Hz,
            s = t[n] ?? {},
            { localMutes: a, localVolumes: o } = t5(i);
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
        n_({ localMutes: a, localVolumes: o }, i);
    }
}
function nN(e, t) {
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
                            j.Ay.shouldContinueWithoutElevatedProcessForPID(n) ||
                            L.h.wait(() => {
                                L.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: e });
                            });
                    }),
                { soundshareId: t, soundshareSession: s }
            );
        }
    }
    return null != e && t5().videoHook && M.GH(e), { soundshareId: null, soundshareSession: null };
}
function nv() {
    let e = eZ.x.DEFAULT,
        { videoToggleStateMap: t } = t5(e);
    for (let [e, n] of Object.entries(t)) n === eb.bb8.AUTO_PROBING && delete t[e];
    n_({ videoToggleStateMap: t }, e, !1);
}
function nC(e) {
    let t = t5(),
        n = tn.getAudioSubsystem(),
        r = tn.getAudioLayer(),
        s = nA(tc, t.inputDeviceId),
        a = tc[s]?.name,
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
function nR() {
    let e = t5(),
        t = tW.size > 0,
        n = e.inputDeviceId,
        i = eH.A.hasEchoCancellation(n) || e.echoCancellation,
        r = eH.A.hasNoiseSuppression(n) || e.noiseSuppression,
        s = nr(eH.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        a = e.noiseCancellation;
    tn.setLoopback(t, {
        echoCancellation: i,
        echoCancellationPreEcho: !t,
        noiseSuppression: r,
        automaticGainControlConfig: s,
        noiseCancellation: a,
    });
}
async function nO() {
    if (!tn.supports(eZ.O5.VAAPI) || window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let e = await window.DiscordNative.processUtils.getSystemInfo();
    (e.electronGPUInfo?.gpuDevice ?? []).some((e) => 4098 === e.vendorId) &&
        ((t0 = !0), (tJ = tn.supports(eZ.O5.GAMESCOPE_CAPTURE)));
}
function nb() {
    return (tL || !1) && !tw;
}
async function nD() {
    try {
        await g.Ay.ensureModule("discord_krisp");
        let e = g.Ay.requireModule("discord_krisp");
        (tL = !0),
            (c = e.getSdkVersion?.()),
            (d = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (tM = e), i.emitChange();
            }),
            i.emitChange(),
            await g.Ay.ensureModule("discord_voice");
        let t = g.Ay.requireModule("discord_voice");
        t.setupKrispPath?.();
    } catch (t) {
        eJ.warn(`Failed to load Krisp module: ${t.message}`), eG.A.captureException(t);
        let e = eZ.CO.KRISP_INIT_ERROR;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eZ.CO.KRISP_INIT_ERROR : n;
        }
        (0, V.QW)({ type: V.iy.NOISE_CANCELLER_ERROR, underlyingError: nt(e) }),
            eO.default.track(eb.HAw.VOICE_PROCESSING, { noise_canceller_error: e });
    } finally {
        tD = !1;
    }
}
async function nL() {
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
function nw(e) {
    e === eZ.rB.AUTOMATIC
        ? (n_({ automaticAudioSubsystem: !0 }), nM())
        : (n_({ automaticAudioSubsystem: !1 }), tn.setAudioSubsystem(e));
}
function nM() {
    tn.queueAudioSubsystem(eZ.rB.EXPERIMENTAL);
}
function nP(e) {
    let { section: t } = e;
    return t === eb.nc_.VOICE && nf(), !1;
}
class nx extends R.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        let e;
        if (
            (th.start(e6, () => {
                eJ.error("Device enumeration timed out"), eO.default.track(eb.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
            }),
            tn.on(O.bg.Connection, (e) => {
                let t;
                nR(),
                    t7(e),
                    t9(e),
                    no(e),
                    e.context === eZ.x.STREAM &&
                        e.setAv1CodecBitrateFunc(() => q.getConfig({ location: "MediaEngineStore" }).bitrate);
                let n = t5();
                e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers),
                    e.setQoS(n.qos),
                    (0, m.isWindows)()
                        ? (e.setExperimentFlag(eZ.fd.H265_HARDWARE_ONLY, !0),
                          (null != tB
                              ? tB
                              : "u" > typeof window
                                ? (tB = t6().then((e) => ((tV = e), e)))
                                : Promise.resolve(!1)
                          ).then((t) => {
                              e.setExperimentFlag(eZ.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                          }))
                        : (0, m.isMac)() && e.setExperimentFlag(eZ.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                    (0, m.isLinux)() && n.openH264Enabled && e.setExperimentFlag(eZ.fd.USE_LIBOPENH264_DECODER, !0),
                    (function (e) {
                        let { location: t, disable: n = !1 } = e;
                        return n ? ed.definition.defaultConfig : ed.getConfig({ location: t });
                    })({ location: "setupMediaEngine" }).enabled &&
                        e.setExperimentFlag(eZ.fd.LOW_LATENCY_RATE_CONTROL, !0),
                    e.setExperimentFlag(eZ.fd.RESET_DECODER_ON_ERRORS, !0),
                    e.setExperimentFlag(eZ.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
                let { swallowVolumeOnlySpeakingEvents: r } = x.A.getConfig({ location: "MediaEngineStore" });
                if (
                    (r && e.setExperimentFlag(eZ.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === eZ.x.STREAM)
                ) {
                    let t = nS(td);
                    e.setSoundshareDiscardRearChannels(t);
                }
                if ((0, m.isWindows)())
                    e.setExperimentFlag(eZ.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(eZ.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eZ.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                else if ((0, m.isMac)())
                    e.setExperimentFlag(eZ.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eZ.fd.SIGNAL_AV1_HARDWARE_DECODE, !0),
                        e.setExperimentFlag(
                            eZ.fd.H265_DISABLE_ENCODE,
                            !(
                                window?.DiscordNative?.os.arch === "arm64" &&
                                C().satisfies(window?.DiscordNative?.os.release, eZ.Dk)
                            ),
                        );
                else if ((0, m.isLinux)()) e.setExperimentFlag(eZ.fd.SIGNAL_AV1_DECODE, !0);
                else if ((0, m.isIOS)())
                    e.setExperimentFlag(eZ.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eZ.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                else if ((0, m.isAndroid)() && !1) {
                    let { enabled: t } = X.getConfig({ location: "MediaEngineStore" });
                    t &&
                        (e.setExperimentFlag(eZ.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eZ.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
                }
                if ((0, m.isWeb)()) {
                    let { enabled: t } = J.getConfig({ location: "MediaEngineStore" });
                    e.setExperimentFlag(eZ.fd.BROWSER_HEVC, t);
                }
                for (let r of ((0, m.isWindows)() &&
                    t$?.startsWith("AMD") &&
                    eS("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eZ.fd.WMF_GPU_ENCODE, !0),
                (0, m.isWindows)() &&
                    t$?.startsWith("Intel") &&
                    ey.getConfig({ location: "MediaEngineStore" }).enabled &&
                    e.setExperimentFlag(eZ.fd.WMF_GPU_ENCODE, !0),
                (0, m.isWindows)() &&
                    t$?.startsWith("Qualcomm") &&
                    eS("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eZ.fd.WMF_GPU_ENCODE, !0),
                tn.setHasFullbandPerformance(null === (t = (0, F.A)()) || t >= 31),
                e.setRemoteAudioHistory(1e3),
                (0, U.A)(i) && e.setClipsKeyFrameInterval(eZ.X1),
                (n = t5(e.context)),
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
                    e.context === eZ.x.DEFAULT &&
                        ((tS = !1),
                        e.on(O.yq.SpeakingWhileMuted, () => {
                            let e = !tS;
                            (tS = !0),
                                e && i.emitChange(),
                                ty.start(e3, () => {
                                    (tS = !1), i.emitChange();
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
                    e.on(O.yq.NoiseCancellationError, ni),
                    e.on(O.yq.VoiceActivityDetectorError, ni),
                    e.on(O.yq.SdpError, (e, t, n, i) => {
                        eO.default.track(eb.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: i });
                    }),
                    e.on(O.yq.VideoState, (t) => {
                        L.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                    }),
                    e.setBitRate(eB.A.bitrate),
                    e.applyVideoQualityMode(eK.A.mode),
                    (0, m.isWindows)() &&
                        tn.supports(eZ.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                        tn.setAsyncVideoInputDeviceInit(!0);
            }),
            tn.on(O.bg.DeviceChange, (e, t, n) => {
                th.stop(),
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
                let t =
                    eg.getConfig({ location: "watchdog_timeout" }).enabled && null != w.A.processUtils.setCrashReason;
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
                L.h.wait(() => {
                    L.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t });
                });
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
            tn.on(O.bg.VoiceProcessingError, ni),
            tn.on(O.bg.VoiceQueueMetrics, (e) => {
                let t = nk(e);
                null !== t && eO.default.track(eb.HAw.VOICE_QUEUE_METRICS, t);
            }),
            tn.setOnVideoContainerResized((e, t, n) => {
                L.h.wait(() =>
                    L.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
                );
            }),
            nO(),
            o.reset(),
            (0, ew.w)().then((e) => {
                null != e && ((t$ = e.gpu_brand), (tz = e.has_intel_hybrid_igpu));
            }),
            tn.on(O.bg.SystemMicrophoneModeChange, (e) => {
                (h = e), tn.eachConnection(no), i.emitChange();
            }),
            null != (e = b.w.get("audio")) && (b.w.set(e0, { [eZ.x.DEFAULT]: e }), b.w.remove("audio")),
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
                    tn.supports(eZ.O5.SIDECHAIN_COMPRESSION) &&
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
            nh(),
            ((0, m.isWindows)() || (0, m.isLinux)() || (0, m.isMac)()) && !__OVERLAY__ && !tD && !tL
                ? ((tD = !0), nD())
                : (0, m.isWeb)() && tn.supports(eZ.O5.NOISE_CANCELLATION)
                  ? ((tL = !0), i.emitChange())
                  : (0, m.isWeb)() && n_({ noiseCancellation: !1 }),
            (0, m.isLinux)() && nL(),
            nv(),
            (0, m.isDesktop)() && m.isPlatformEmbedded && !t1)
        ) {
            t1 = !0;
            let e = async () => {
                let t = await new Promise((e) => {
                    g.Ay.pollQueueMetrics((t) => {
                        e(t);
                    });
                });
                t.periodMs = eZ.tl;
                let n = nk(t);
                null !== n && eO.default.track(eb.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, eZ.tl);
            };
            setTimeout(e, eZ.tl);
        }
        (0, m.isWindows)() &&
            m.isPlatformEmbedded &&
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
                    L.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
                }),
            (0, m.isAndroid)(),
            (tK = {
                [eZ.O5.VIDEO]: tn.supports(eZ.O5.VIDEO),
                [eZ.O5.DESKTOP_CAPTURE]: tn.supports(eZ.O5.DESKTOP_CAPTURE),
                [eZ.O5.HYBRID_VIDEO]: tn.supports(eZ.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eV.default, eB.A, eH.A, ej.A, k.Ay, B.A, eY.A, j.Ay, eM.A, eW.default, eK.A);
    }
    supports(e) {
        return tn.supports(e);
    }
    supportsInApp(e) {
        return tK[e] || tn.supports(e);
    }
    isSupported() {
        return tn.supported();
    }
    isNoiseSuppressionSupported() {
        return tn.supports(eZ.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return nb();
    }
    isNoiseCancellationError() {
        return tk;
    }
    isAutomaticGainControlSupported() {
        return tn.supports(eZ.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nd() && (tn.supports(eZ.O5.LEGACY_AUDIO_SUBSYSTEM) || tn.supports(eZ.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return tn.supports(eZ.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === tn.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return nb();
    }
    isAecDumpSupported() {
        return tn.supports(eZ.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return tn.supports(eZ.O5.VIDEO) && tn.supports(eZ.O5.SIMULCAST);
    }
    getAecDump() {
        return t5().aecDumpEnabled;
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
        return tP;
    }
    isEnabled() {
        return ts;
    }
    isMute() {
        return this.isSelfMute() || tf;
    }
    isDeaf() {
        return this.isSelfDeaf() || tm;
    }
    getAudioMixerSettings() {
        return t5().audioMixerSettings;
    }
    hasContext(e) {
        return null != ti[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eZ.x.DEFAULT;
        return e === eZ.x.DEFAULT && tp;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eZ.x.DEFAULT;
        return (
            !this.isEnabled() ||
            t5(e).mute ||
            !ev.A.didHavePermission(e$.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eZ.x.DEFAULT && tE)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tT;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tT = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eZ.x.DEFAULT,
            t = tX && "voice_isolation" !== this.getSystemMicrophoneMode() && t5(e).mode === eb.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (eH.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return tq;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eZ.x.DEFAULT;
        return !this.isSupported() || t5(e).deaf;
    }
    isVideoEnabled() {
        return tg && tv;
    }
    isVideoAvailable() {
        return Object.values(t_).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return tv;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eZ.x.STREAM;
        return to === e && null != s;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eZ.x.STREAM;
        return to === e && null != s && s.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eZ.x.DEFAULT;
        return e !== eV.default.getId() && (t5(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return tn.supports(eZ.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eZ.x.DEFAULT;
        return t5(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eZ.x.DEFAULT;
        return t5(t).videoToggleStateMap[e] ?? eb.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eZ.x.DEFAULT;
        return t === eZ.x.DEFAULT && tj.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eZ.x.DEFAULT;
        return e === eZ.x.DEFAULT && tj.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tU;
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
        return tl;
    }
    isH264MfDecodeAvailable() {
        return tu;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eZ.x.DEFAULT,
            n = t5(t).localPans[e];
        return null != n ? n : e1;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eZ.x.DEFAULT,
            n = t === eZ.x.STREAM ? eZ.Cn : eZ.Hz,
            i = t5(t).localVolumes[e];
        return null != i ? i : n;
    }
    getInputVolume() {
        return t5().inputVolume;
    }
    getOutputVolume() {
        return t5().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eZ.x.DEFAULT;
        return t5(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eZ.x.DEFAULT;
        return t5(e).modeOptions;
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
        return nA(tc, t5().inputDeviceId);
    }
    getOutputDeviceId() {
        return nA(td, t5().outputDeviceId);
    }
    getVideoDeviceId() {
        return nA(t_, t5().videoDeviceId);
    }
    getInputDevices() {
        return tc;
    }
    getOutputDevices() {
        return td;
    }
    getVideoDevices() {
        return t_;
    }
    getEchoCancellation() {
        let e = t5();
        return eH.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return tn.supports(eZ.O5.SIDECHAIN_COMPRESSION) && t5().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return t5().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return t5().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tV && tV;
    }
    getOpenH264Enabled() {
        return (0, m.isLinux)() && t5().openH264Enabled;
    }
    getLoopback() {
        return tW.size > 0;
    }
    getLoopbackReasons() {
        return tW;
    }
    getNoiseSuppression() {
        let e = t5();
        return eH.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = t5();
        return eH.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return t5().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return t5().noiseCancellation;
    }
    getHardwareEncoding() {
        return !0;
    }
    getEnableSilenceWarning() {
        return t5().silenceWarning;
    }
    getDebugLogging() {
        return tn.getDebugLogging();
    }
    getQoS() {
        return t5().qos;
    }
    getAttenuation() {
        return t5().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return t5().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return t5().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return nc() && t5().automaticAudioSubsystem ? eZ.rB.AUTOMATIC : tn.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return tn.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return t5().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eX.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eZ.x.DEFAULT;
        return t5(e);
    }
    getState() {
        return {
            settingsByContext: ti,
            inputDevices: tc,
            outputDevices: td,
            appSupported: tK,
            krispModuleLoaded: tL,
            krispFatalError: tw,
            krispVersion: c,
            krispSuppressionLevel: d,
            goLiveSource: s,
            goLiveContext: to,
        };
    }
    getInputDetectedThisConnection() {
        return tC;
    }
    getInputDetected() {
        return o.inputDetected;
    }
    getLastInputDetectedUpdateTime() {
        return o.lastUpdateTime;
    }
    getNoInputDetectedNotice() {
        return tR;
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
        return t5().videoHook;
    }
    supportsVideoHook() {
        return tn.supports(eZ.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = t5().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return tn.supports(eZ.O5.EXPERIMENTAL_SOUNDSHARE) && C().satisfies(w.A?.os.release, el.$x);
    }
    supportsHookSoundshare() {
        return (0, m.isWindows)() && tn.supports(eZ.O5.SOUNDSHARE) && C().satisfies(w.A?.os.release, el.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = t5().useSystemScreensharePicker,
            n = (0, m.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return tn.supports(eZ.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return t0;
    }
    getVideoEncoderExperiments(e, t) {
        let n = ["unk"];
        if (
            (n.push("nvNewPresets"),
            e === eZ.x.STREAM ? n.push("nvRelaxRc=250") : n.push("nvRelaxRc=75"),
            this.getUseVaapiEncoder() && n.push("vaapi"),
            e === eZ.x.STREAM && "streamer" === t && (0, m.isWindows)())
        ) {
            n.push("useCaptureDeviceForEncode");
            let { overrideDeviceReuse: e } = eE.getConfig({ location: "handleReady" });
            e && n.push("videoCaptureDeviceOverrideReuse");
        }
        return n.push("linux-vulkan"), n.join(",");
    }
    getUseGamescopeCapture() {
        return tJ;
    }
    getSpeakingWhileMuted() {
        return tS;
    }
    getKrispModelOverride() {
        return _;
    }
    getKrispModels() {
        return tM;
    }
    getKrispVadActivationThreshold() {
        return t5().modeOptions.vadKrispActivationThreshold ?? 0.5;
    }
    hasActiveCallKitCall() {
        return tQ;
    }
    setHasActiveCallKitCall(e) {
        tQ = e;
    }
    supportsScreenSoundshare() {
        return (0, m.isMac)()
            ? tn.supports(eZ.O5.SOUNDSHARE) && C().satisfies(w.A?.os.release, el.P$) && nu()
            : (0, m.isWindows)()
              ? tn.supports(eZ.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, m.isLinux)() && tn.supports(eZ.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, m.isWindows)()) {
            if (this.getBypassSystemInputProcessing()) return;
            return tF[this.getInputDeviceId()]?.active?.find((e) => "deep_noise_suppression" === e);
        }
        if ((0, m.isMac)() || (0, m.isIOS)()) return h;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eZ.x.DEFAULT,
            t = this.supports(eZ.O5.VIDEO)
                ? [{ rid: "100", type: e === eZ.x.DEFAULT ? eZ.mI.VIDEO : eZ.mI.SCREEN, quality: eZ.Y4 }]
                : [];
        return (
            this.isSimulcastSupported() &&
                e === eZ.x.DEFAULT &&
                ee.getConfig({ location: "MediaEngineStore.getVideoStreamParameters" }).enableSimulcast &&
                t.push({ rid: "50", type: eZ.mI.VIDEO, quality: eZ.Cl }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: (0, m.isWeb)() };
        return tn.fetchAsyncResources(e);
    }
    startDavePreload() {
        !tG &&
            ((tG = !0),
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
        return t$;
    }
}
function nk(e) {
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
(i = new nx(L.h, {
    VOICE_CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n, currentVoiceChannelId: i, video: r } = e;
        if ((i !== n && ne(r, null), null != t || null == n)) {
            tb = !1;
            return;
        }
        if (tb) return;
        tb = !0;
        let s = t5();
        (s.mute || s.deaf) && (n_({ deaf: !1, mute: !1 }), tn.eachConnection(t9));
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (r === t.sessionId) {
                (tf = t.mute || t.suppress), (tm = t.deaf), tn.eachConnection(t9);
                let e = null != t.guildId && null != t.channelId && null != tx && tx !== t.channelId,
                    n = !tb && null == t.channelId;
                return ne(!e && !n && tg), (tx = t.channelId), !0;
            }
            return __OVERLAY__ || t.userId !== eV.default.getId() || null != eY.A.getChannelId() || ne(!1, null), e;
        }, !1);
    },
    CONNECTION_OPEN: function (e) {
        (r = e.sessionId), (tf = !1), (tm = !1);
        let t = t5();
        nc() && (nd() ? nw(eZ.rB.AUTOMATIC) : t.automaticAudioSubsystem && nM()),
            tn.supports(eZ.O5.OFFLOAD_ADM_CONTROLS) && tn.setOffloadAdmControls(!0),
            (0, m.isIOS)() &&
                es.getConfig({ location: "handleConnectionOpen" }).enabled &&
                tn.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
            nI(t.inputDeviceId),
            ny();
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
                nf();
                break;
            case eb.S7L.RTC_CONNECTING:
                (tR = !1), (l = void 0), (u = void 0), (tC = !1), (tX = !1), tZ.stop(), tO.stop(), o.reset();
                break;
            case eb.S7L.RTC_CONNECTED:
                ne();
                break;
            case eb.S7L.DISCONNECTED:
                (t2 = {}),
                    (function () {
                        if (0 === tj.size) return;
                        let e = eZ.x.DEFAULT,
                            { disabledLocalVideos: t } = t5(e);
                        tj.forEach((n) => {
                            I()(t[n], "If you are auto-disabled, then you are also disabled."),
                                delete t[n],
                                tn.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
                        }),
                            tj.clear(),
                            n_({ disabledLocalVideos: t }, e, !1);
                    })(),
                    nv();
        }
    },
    AUDIO_SET_TEMPORARY_SELF_MUTE: function (e) {
        let { mute: t } = e;
        (tp = t), tn.eachConnection(t9);
    },
    AUDIO_TOGGLE_SELF_MUTE: function (e) {
        let { context: t, playSoundEffect: n } = e,
            { mute: i, deaf: r } = t5(t);
        if (t === eZ.x.DEFAULT && (ev.A.requestPermission(e$.iL.AUDIO), tE)) return !1;
        (i = !r && !i) || (r = !1), n || (tT = !0), n_({ mute: i, deaf: r }, t), tn.eachConnection(t9);
    },
    AUDIO_SET_SELF_MUTE: function (e) {
        let { context: t, mute: n, playSoundEffect: i } = e;
        n_({ mute: n }, t), i || (tT = !0), tn.eachConnection(t9);
    },
    AUDIO_TOGGLE_SELF_DEAF: function (e) {
        let { context: t } = e;
        n_({ deaf: !t5(t).deaf }, t), tn.eachConnection(t9);
    },
    AUDIO_TOGGLE_LOCAL_MUTE: function (e) {
        let { context: t, userId: n } = e;
        if (n === eV.default.getId()) return;
        let { localMutes: i } = t5(t);
        i[n] ? delete i[n] : (i[n] = !0),
            n_({ localMutes: i }, t),
            tn.eachConnection((e) => e.setLocalMute(n, i[n] || !1), t);
    },
    AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
        let { context: t, userId: n, videoToggleState: i, persist: r, isAutomatic: s } = e;
        I()(!(r && s), "These are not allowed to both be true.");
        let a = i === eb.bb8.DISABLED,
            { disabledLocalVideos: o } = t5(t),
            l = o[n] ?? !1,
            u = tj.has(n),
            c = i === eb.bb8.AUTO_ENABLED || i === eb.bb8.MANUAL_ENABLED;
        eJ.info(`disableVideo=${a} currentlyDisabled=${l} currentlyAutoDisabled=${u}, isVideoShown=${c}`),
            I()(!(u && !l), "If you are auto-disabled, then you are also disabled.");
        let d = a !== l,
            _ = t === eZ.x.DEFAULT,
            h = s && d && _,
            f = r && d && _;
        eJ.info(`changed=${d} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${h} isManualToggleByUser=${f}`);
        let { videoToggleStateMap: p } = t5(t);
        if (
            (p[n] === eb.bb8.AUTO_PROBING &&
                i === eb.bb8.AUTO_ENABLED &&
                (0, eN.A)(n, a ? eZ.Al.AUTO_DISABLE : eZ.Al.AUTO_ENABLE, c),
            (p[n] = i),
            n_({ videoToggleStateMap: p }, t, r),
            i === eb.bb8.AUTO_PROBING
                ? eY.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
                : eY.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
            tY ||
                (eJ.info(`isAutoDisableAllowed=${tY} - disabling VideoHealthManager`),
                eY.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
            h)
        ) {
            if ((!a && !u) || (a && !tY)) return;
            (0, eN.A)(n, a ? eZ.Al.AUTO_DISABLE : eZ.Al.AUTO_ENABLE, c), a ? tj.add(n) : tj.delete(n);
        } else
            f &&
                (u && !a
                    ? (eJ.info("disallowing auto-disable for this session because of manual override by user"),
                      (tY = !1),
                      eY.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                      (0, eN.A)(n, eZ.Al.MANUAL_REENABLE, c))
                    : (0, eN.A)(n, a ? eZ.Al.MANUAL_DISABLE : eZ.Al.MANUAL_ENABLE, c));
        _ && !a && tj.delete(n),
            a ? (o[n] = !0) : delete o[n],
            n_({ disabledLocalVideos: o }, t, r),
            tn.eachConnection((e) => e.setLocalVideoDisabled(n, o[n] ?? !1), t);
    },
    AUDIO_SET_LOCAL_VOLUME: function (e) {
        let { context: t, userId: n, volume: i } = e;
        if (n === eV.default.getId()) return;
        let r = t === eZ.x.STREAM ? eZ.Cn : eZ.Hz,
            { localVolumes: s } = t5(t);
        i === r ? delete s[n] : (s[n] = i),
            n_({ localVolumes: s }, t),
            tn.eachConnection((e) => e.setLocalVolume(n, i), t);
    },
    AUDIO_SET_AUDIO_MIXER_SETTINGS: function (e) {
        let { context: t, settings: n } = e;
        n_({ audioMixerSettings: n }, t),
            tn.setAudioMixerOptions(n),
            tn.eachConnection((e) => e.setSpatialAudioEnabled(n.enabled), eZ.x.DEFAULT);
    },
    AUDIO_SET_LOCAL_PAN: function (e) {
        let { context: t, userId: n, left: i, right: r } = e,
            { localPans: s } = t5(t);
        (s[n] = { left: i, right: r }), n_({ localPans: s }, t), tn.eachConnection((e) => e.setLocalPan(n, i, r), t);
    },
    AUDIO_SET_MODE: function (e) {
        let { context: t, mode: n, options: i } = e;
        n_({ mode: n, modeOptions: { ...i, updatedAt: Date.now() } }, t), tn.eachConnection(t7);
    },
    AUDIO_SET_INPUT_VOLUME: function (e) {
        let { volume: t } = e;
        n_({ inputVolume: t8(t) }), tn.setInputVolume(t);
    },
    AUDIO_SET_OUTPUT_VOLUME: function (e) {
        let { volume: t } = e;
        n_({ outputVolume: t }), tn.setOutputVolume(t);
    },
    AUDIO_SET_INPUT_DEVICE: function (e) {
        let { id: t } = e;
        (t = nA(tc, t)),
            (tl = performance.now()),
            n_({ inputDeviceId: t }),
            nT(t),
            tn.eachConnection(no),
            (l = void 0),
            (u = void 0),
            tZ.stop(),
            (tX = !1);
        let { resetSilenceWarningOnDeviceChange: n } = eh.A.getConfig({
            location: "MediaEngineStore.handleSetInputDevice",
        });
        n && ((tC = !1), o.reset());
    },
    AUDIO_SET_OUTPUT_DEVICE: function (e) {
        let { id: t } = e;
        n_({ outputDeviceId: (t = nA(td, t)) }), tn.setAudioOutputDevice(t);
    },
    AUDIO_SET_ACTIVE_INPUT_PROFILE: function (e) {
        let { inputProfile: t } = e;
        n_({ activeInputProfile: t });
        let n = t5();
        tn.eachConnection((e) => {
            t7(e), no(e);
        }),
            tn.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
            nR();
    },
    AUDIO_SET_ECHO_CANCELLATION: function (e) {
        let t = n_({ echoCancellation: e.enabled });
        tn.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nR(), nC(e.location);
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION: function (e) {
        let t;
        (t = n_({ sidechainCompression: e.enabled })), tn.setSidechainCompression(t.sidechainCompression);
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function (e) {
        let t = n_({ sidechainCompressionStrength: e.strength });
        tn.setSidechainCompressionStrength(t.sidechainCompressionStrength);
    },
    AUDIO_SET_LOOPBACK: function (e) {
        let { enabled: t, loopbackReason: n } = e;
        return t ? tW.add(n) : tW.delete(n), nR();
    },
    AUDIO_SET_NOISE_SUPPRESSION: function (e) {
        let t = n_({ noiseSuppression: e.enabled });
        tn.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nR(), nC(e.location);
    },
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function (e) {
        let t = n_({ automaticGainControl: e.enabled });
        tn.eachConnection((e) => ns(e, t.automaticGainControl)), nR(), nC(e.location);
    },
    AUDIO_SET_NOISE_CANCELLATION: function (e) {
        let t = n_({ noiseCancellation: e.enabled });
        tn.eachConnection((e) => na(e, t.noiseCancellation)), nR(), nC(e.location);
    },
    AUDIO_SET_KRISP_MODEL_OVERRIDE: function (e) {
        eC.A.setKrispModelOverride(e.model), (_ = e.model), nR();
    },
    AUDIO_SET_DISPLAY_SILENCE_WARNING: function (e) {
        n_({ silenceWarning: e.enabled });
    },
    AUDIO_SET_DEBUG_LOGGING: function (e) {
        tn.setDebugLogging(e.enabled);
    },
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: function (e) {
        let { level: t } = e;
        (d = t), eC.A.setKrispSuppressionLevel(t);
    },
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: function (e) {
        (0, m.isWeb)() || ((tP = e.enabled), tn.setNoiseCancellationEnableStats?.(e.enabled));
    },
    MEDIA_ENGINE_SET_VIDEO_HOOK: function (e) {
        n_({ videoHook: e.enabled });
    },
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function (e) {
        n_({ experimentalSoundshare2: e.enabled });
    },
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: function (e) {
        let { enabled: t } = e;
        n_({ useSystemScreensharePicker: t });
    },
    AUDIO_SET_ATTENUATION: function (e) {
        let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i } = e,
            r = n_({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i });
        tn.eachConnection((e) =>
            e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers),
        );
    },
    AUDIO_SET_QOS: function (e) {
        let { enabled: t } = e;
        n_({ qos: t }), tn.eachConnection((e) => e.setQoS(t));
    },
    MEDIA_ENGINE_DEVICES: function (e) {
        let t = tc;
        if (
            ((tc = ng(e, { deviceType: eZ.oh.AUDIO_INPUT, defaultName: eQ.intl.string(eQ.t["/QIjDA"]) })),
            !S().isEqual(tc, t))
        ) {
            let e = t5();
            nT(nA(tc, e.inputDeviceId)), tn.eachConnection(no);
        }
        !(function (e) {
            let t = td;
            if (
                ((td = ng(e, { deviceType: eZ.oh.AUDIO_OUTPUT, defaultName: eQ.intl.string(eQ.t.xlUg0v) })),
                !S().isEqual(td, t))
            ) {
                let e = t5(),
                    n = nA(td, e.outputDeviceId);
                tn.setAudioOutputDevice(n);
                let i = nS(t),
                    r = nS(td);
                i !== r &&
                    tn.eachConnection((e) => {
                        e.context === eZ.x.STREAM && e.setSoundshareDiscardRearChannels(r);
                    });
            }
        })(e);
        tv = e.videoDevices.length > 0;
        let n = t_;
        if (
            ((t_ = ng(e, { deviceType: eZ.oh.VIDEO_INPUT, defaultName: eQ.intl.string(eQ.t.WKWARY) })),
            tg && !S().isEqual(t_, n))
        ) {
            let e = void 0 !== t_[tA],
                t = tA === eZ.dx && n[eZ.dx]?.disabled,
                i = "Firefox" === N().name && "" === tA && n[tA]?.name === "Default" && !n[tA]?.disabled;
            ne(e || t || i);
        }
    },
    AUDIO_VOLUME_CHANGE: function (e) {
        let { inputVolume: t, outputVolume: n } = e;
        n_({ inputVolume: t8(t), outputVolume: n });
    },
    AUDIO_RESET: function () {
        b.w.remove(e0), location.reload();
    },
    AUDIO_INPUT_DETECTED: function (e) {
        let { inputDetected: t } = e;
        if (null == t) return !1;
        if (((tR = !0 !== tC && !t), t)) (tC = !0), (tX = !1), tZ.stop(), tO.stop();
        else if (t5().mode === eb.TBI.VOICE_ACTIVITY && tC) {
            let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = eh.A.getConfig({
                location: "MediaEngineStore.handleInputDetected",
            });
            e &&
                tZ.start(e4, () => {
                    eO.default.track(eb.HAw.HARDWARE_MUTE_GUESSED, {
                        input_device_name: tc[nA(tc, t5().inputDeviceId)]?.name,
                        rtc_connection_id: eY.A.getRTCConnectionId(),
                    }),
                        (tX = !0),
                        i.emitChange();
                }),
                null != t &&
                    tO.start(t * eU.A.Millis.MINUTE, () => {
                        (tC = !1), o.reset();
                    });
        }
    },
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: function (e) {
        let { osVolume: t, osMuted: n } = e;
        (u = t), (l = n);
    },
    AUDIO_SET_SUBSYSTEM: function (e) {
        nw(e.subsystem);
    },
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: function (e) {
        let t = e.bypassEnabled;
        n_({ bypassSystemInputProcessing: t }), tn.setAudioInputBypassSystemProcessing(t), nC(e.location);
    },
    MEDIA_ENGINE_SET_AUDIO_ENABLED: function (e) {
        (ts = e.enabled), e.unmute && n_({ mute: !1, deaf: !1 }), tn.eachConnection(t9);
    },
    MEDIA_ENGINE_SET_VIDEO_ENABLED: function (e) {
        let { enabled: t } = e;
        ev.A.requestPermission(e$.iL.CAMERA), ne(t);
    },
    MEDIA_ENGINE_PERMISSION: function (e) {
        let { kind: t, granted: n } = e;
        if (!n)
            switch (t) {
                case "audio":
                    (ts = !1), tn.eachConnection(t9);
                    break;
                case "video":
                    ne(!1);
            }
    },
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
        let { settings: t } = e;
        if (t?.desktopSettings != null) {
            let e = null,
                n = null,
                { sourceId: i, sound: r } = t.desktopSettings,
                a = t.context ?? eZ.x.DEFAULT,
                o = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
                l = ek.A.getPidFromDesktopSource(i);
            m.isPlatformEmbedded && ({ soundshareId: e, soundshareSession: n } = nN(l, r)),
                a !== to && (null != s && tn.setGoLiveSource(null, to), (to = a)),
                ne(a === eZ.x.STREAM && tg, {
                    desktopSource: { id: i, sourcePid: l, soundshareId: e, soundshareSession: n },
                    quality: { resolution: o.resolution, frameRate: o.frameRate },
                });
        } else if (t?.cameraSettings != null) {
            let e = t.context ?? eZ.x.DEFAULT,
                { videoDeviceGuid: n, audioDeviceGuid: i, sound: r } = t.cameraSettings,
                s = e === eZ.x.STREAM && tg,
                a = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
            ne(s, {
                cameraSource: { videoDeviceGuid: n, audioDeviceGuid: i, sound: r },
                quality: { resolution: a.resolution, frameRate: a.frameRate },
            });
        } else ne(tg, null);
    },
    MEDIA_ENGINE_SET_VIDEO_DEVICE: function (e) {
        let { id: t } = e;
        n_({ videoDeviceId: (t = nA(t_, t)) }), ne();
    },
    MEDIA_ENGINE_INTERACTION_REQUIRED: function (e) {
        return ta !== e.required && ((ta = e.required), e.required || tn.interact(), !0);
    },
    USER_SETTINGS_MODAL_INIT: nP,
    USER_SETTINGS_MODAL_SET_SECTION: nP,
    CERTIFIED_DEVICES_SET: function () {
        return tn.eachConnection(no), !1;
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
            (tc = t.inputDevices),
            (td = t.outputDevices),
            (tK = t.appSupported),
            (tL = t.krispModuleLoaded),
            (tw = t.krispFatalError),
            (c = t.krispVersion),
            (to = t.goLiveContext);
    },
    APP_STATE_UPDATE: function (e) {
        let { state: t } = e,
            n = H.A.isEnabled();
        if (t === eb.g6G.BACKGROUND && tg && !n) (tN = !0), ne(!1);
        else {
            if (t !== eb.g6G.ACTIVE || !tN) return !1;
            (tN = !1), ne(!0);
        }
        return !0;
    },
    SET_CHANNEL_BITRATE: function (e) {
        tn.eachConnection((t) => t.setBitRate(e.bitrate));
    },
    SET_VAD_PERMISSION: function (e) {
        let { hasPermission: t } = e,
            n = !t;
        if (n === tE) return !1;
        (tE = n), tn.eachConnection(t9);
    },
    SET_NATIVE_PERMISSION: function (e) {
        let { state: t, permissionType: n } = e,
            i = t === e$.hL.ACCEPTED;
        switch (n) {
            case e$.iL.AUDIO:
                (tH = !0), tn.eachConnection(t9);
                break;
            case e$.iL.CAMERA:
                !i && tg && ne(!1);
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
            n = n_({ aecDumpEnabled: t });
        tn.setAecDump(n.aecDumpEnabled);
    },
    MEDIA_ENGINE_SET_OPENH264_ENABLED: function (e) {
        let { enabled: t } = e;
        n_({ openH264Enabled: t }), g.Ay?.setOpenH264Enabled?.(t);
    },
    MEDIA_ENGINE_RESET_SETTINGS: function (e) {
        let { overrides: t } = e;
        if (__OVERLAY__) return !1;
        (ti = Object.values(eZ.x).reduce((e, n) => {
            let i = e9();
            return (e[n] = S().merge(i, t[n])), e;
        }, {})),
            b.w.set(e0, ti),
            nh();
    },
    CHANNEL_DELETE: function () {
        if ((!tg && null == s) || null != eY.A.getRTCConnectionId()) return !1;
        ne(!1, null);
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: function (e) {
        if (e.code === eZ.CO.KRISP_CPU_OVERUSE) {
            (t2.noiseCancellation = !1), (t2.noiseSuppression = !0);
            let e = t5();
            return tn.eachConnection((t) => na(t, e.noiseCancellation)), nR(), nC(), !0;
        }
        return !1;
    },
    MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR: function (e) {
        return (
            e.code === eZ.CO.KRISP_VAD_CPU_OVERUSE &&
            ((t2.modeOptions = { vadUseKrisp: !1 }), tn.eachConnection((e) => t7(e)), !0)
        );
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function () {
        return !!tk && ((tk = !1), !0);
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
        let { settings: t } = e;
        tn.applyMediaFilterSettings(t).finally(() => {
            (tU = !1), i.emitChange();
        });
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function () {
        tU = !0;
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function () {
        tU = !1;
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            local: n,
            wasSaved: i,
        } = e;
        if (t !== eq.oD.PRELOADED_USER_SETTINGS || n || null != i) return !1;
        ny(!0);
    },
    CLIPS_INIT: function (e) {
        let { sourceId: t, applicationName: n, quality: r } = e;
        if (!(0, G.Ao)() || null == w.A || (a?.desktopSource.id === t && a.quality === r)) return !1;
        null != a &&
            (tn.setClipsSource(null),
            (0, m.isWindows)() &&
                (null != a.desktopSource.soundshareId
                    ? M.c1(a.desktopSource.soundshareId)
                    : null != a.desktopSource.sourcePid && t5().videoHook && M.c1(a.desktopSource.sourcePid)));
        let s = ek.A.getPidFromDesktopSource(t),
            { soundshareId: o, soundshareSession: l } = nN(s, !0);
        a = { desktopSource: { id: t, sourcePid: s, soundshareId: o, soundshareSession: l }, quality: r };
        let u = t3("MediaEngineStore clips"),
            c = t5().videoHook,
            d = !c || !et.getConfig({ location: "handleClipsInit" }).enabled,
            _ = c && em.getConfig({ location: "handleClipsInit" }).enabled;
        tn.setClipsSource({
            desktopDescription: {
                id: a.desktopSource.id,
                soundshareId: a.desktopSource.soundshareId,
                useVideoHook: c,
                useHookFramePacer: d,
                useGraphicsCapture: nl(),
                useCaptureDeviceForEncode: !1,
                useLoopback: i.getExperimentalSoundshare(),
                useQuartzCapturer: !0,
                allowScreenCaptureKit: nu(),
                videoHookStaleFrameTimeoutMs: 500,
                graphicsCaptureStaleFrameTimeoutMs: e2,
                hdrCaptureMode: u,
                videoHookAllowDx12: _,
            },
            quality: r,
            applicationName: n,
            videoEncoderExperiments: i.getVideoEncoderExperiments(eZ.x.STREAM, "streamer"),
        });
    },
    CLIPS_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        !1 === t.decoupledClipsEnabled && ((a = null), tn.setClipsSource(null));
    },
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function (e) {
        tq = e.enabled;
    },
    MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: function (e) {
        let { deviceId: t, active: n, available: i } = e;
        tF[t] = { active: n, available: i };
    },
})),
    (o = new ec(tn, i));
let nU = i;
