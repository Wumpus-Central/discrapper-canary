"use strict";
let i, r, s, a, o, l, u, c, d, _, f;
n.d(t, { Ay: () => nb }), n(323874), n(14289), n(35956), n(321073);
var h = n(823598),
    p = n(626584),
    E = n(723702),
    m = n(19575);
(0, h.WQ)({
    supported() {
        try {
            if (__OVERLAY__);
            else if (E.isPlatformEmbedded) {
                let e = (0, h.lE)();
                if (null == e.VoiceConnection) throw Error("voe function missing");
                return !0;
            }
        } catch (e) {
            new p.A("injectMediaEngine").error("Potentially corrupt installation:", e.message);
        }
        return !1;
    },
    supportsFeature: (e) => m.Ay.supportsFeature(e),
    setProcessPriority(e) {
        m.Ay.getDiscordUtils().setProcessPriority(e);
    },
    getVoiceEngine: () => m.Ay.getVoiceEngine(),
    getOpenH264LibraryPath: () => m.Ay.getOpenH264LibraryPath(),
});
var g = n(284009),
    A = n.n(g),
    I = n(735438),
    T = n.n(I),
    S = n(481613),
    N = n.n(S),
    y = n(299855),
    C = n.n(y),
    v = n(17928),
    O = n(459838),
    R = n(506774),
    b = n(451988),
    D = n(228366),
    L = n(77729),
    w = n(719129),
    M = n(894539),
    P = n(124838),
    x = n(274372),
    U = n(915618),
    k = n(572164),
    G = n(680725),
    F = n(487329),
    V = n(736056),
    B = n(6494),
    H = n(952818),
    j = n(540305),
    Y = n(945810);
let W = {
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
    K = (0, Y.mj)({
        kind: "user",
        name: "2025-09-agc2-v2",
        defaultConfig: { noiseCancellationDuringProcessing: !1, noiseCancellationConfig: { useAGC2: !1 } },
        variations: {
            1: { noiseCancellationDuringProcessing: !0, noiseCancellationConfig: { useAGC2: !1 } },
            2: { noiseCancellationDuringProcessing: !0, noiseCancellationConfig: W, vadKrispActivationThreshold: 0.5 },
            3: { noiseCancellationDuringProcessing: !0, noiseCancellationConfig: W, vadKrispActivationThreshold: 0.7 },
            4: { noiseCancellationDuringProcessing: !0, noiseCancellationConfig: W, vadKrispActivationThreshold: 0.8 },
            5: { noiseCancellationDuringProcessing: !0, noiseCancellationConfig: W, vadKrispActivationThreshold: 0.9 },
            6: { noiseCancellationDuringProcessing: !0, noiseCancellationConfig: W, vadKrispActivationThreshold: 0.95 },
        },
    });
function z(e) {
    let { location: t, disable: n = !1 } = e;
    return n ? K.definition.defaultConfig : K.getConfig({ location: t });
}
let $ = (0, Y.mj)({
        name: "2026-05-av1-bitrate-tuning",
        kind: "user",
        defaultConfig: { bitrate: 35e5 },
        variations: { 1: { bitrate: 3e6 }, 2: { bitrate: 25e5 } },
    }),
    q = (0, Y.mj)({
        name: "2026-04-av1-decode-android",
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
        name: "2026-04-disable-hook-frame-pacer",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var ee = n(240921);
let et = (0, ee.Ay)({
        kind: "user",
        name: "2025-11-global-frame-pool-lock",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    en = (0, Y.mj)({
        name: "2026-02-go-live-hdr",
        kind: "user",
        defaultConfig: { hdrCaptureMode: "never" },
        variations: { 1: { hdrCaptureMode: "always" }, 2: { hdrCaptureMode: "permittedDevicesOnly" } },
    }),
    ei = (0, Y.mj)({
        name: "2026-03-ios-audio-interrupt-handling",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var er = n(574381),
    es = n(941426),
    ea = n(325278);
let eo = new es.Vy("InputWatcher");
class el {
    mediaEngine;
    mediaEngineStore;
    stateChangeTimeout = new b.Ep();
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
        if ((0, er.uF)() && C().satisfies(L.A?.os.release, ea.PH))
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
                    D.h.dispatch({ type: "AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED", osVolume: i, osMuted: r });
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
                D.h.dispatch({
                    type: "AUDIO_INPUT_DETECTED",
                    inputDetected: this.inputDetected,
                    lastUpdateTime: this.lastUpdateTime,
                });
        });
    };
}
let eu = (0, Y.mj)({
        name: "2026-03-linux-vulkan-capture",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    ec = (0, ee.Ay)({
        kind: "user",
        name: "2025-10-low-latency-rate-control",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var ed = n(140175);
(0, Y.mj)({
    name: "2026-02-mobile-volume-output-slider-removal",
    kind: "user",
    defaultConfig: { audioOutputPresent: !0, nonContextualStreamOutputPresent: !0, showTileVolumeIndicator: !1 },
    variations: { 1: { audioOutputPresent: !1, nonContextualStreamOutputPresent: !1, showTileVolumeIndicator: !0 } },
});
var e_ = n(801644);
let ef = (0, ee.Ay)({
        kind: "user",
        name: "2025-10-vad-before-processing",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eh = (0, Y.mj)({
        name: "2026-03-video-capture-device-no-reuse",
        kind: "user",
        defaultConfig: { overrideDeviceReuse: !1 },
        variations: { 1: { overrideDeviceReuse: !0 } },
    }),
    ep = (0, Y.mj)({
        name: "2026-04-video-hook-dx12",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eE = (0, ee.Ay)({
        kind: "user",
        name: "2026-02-voice-timeout-mitigations",
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
    eA = (0, Y.mj)({
        name: "2025-12-wmf-gpu-encode",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function eI(e) {
    return eA.getConfig({ location: e });
}
let eT = (0, Y.mj)({
    name: "2026-01-wmf-gpu-encode-intel",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eS = n(75076),
    eN = n(91777),
    ey = n(559633),
    eC = n(205106),
    ev = n(174459),
    eO = n(652215);
let eR = new es.Vy("AudioEffects");
async function eb(e, t, n) {
    if (!(0, er.uF)()) return Promise.reject(Error("Audio effects querying not supported on non-Windows platforms"));
    try {
        let i = await n.getDeviceAudioEffects(e);
        return (
            D.h.dispatch({ type: "MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS", deviceId: t, ...i }),
            ev.default.track(eO.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, {
                succeeded: !0,
                active_effects: i.active,
                available_effects: i.available,
            }),
            i
        );
    } catch (e) {
        eR.error("Failed to probe audio effects for device", e),
            ev.default.track(eO.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, { succeeded: !1 });
    }
}
var eD = n(967347),
    eL = n(879172),
    ew = n(617617),
    eM = n(499156),
    eP = n(353835),
    ex = n(927813),
    eU = n(38405),
    ek = n(350535),
    eG = n(495544),
    eF = n(131319),
    eV = n(347481),
    eB = n(734057),
    eH = n(763827),
    ej = n(287809),
    eY = n(117549),
    eW = n(765682),
    eK = n(355097),
    ez = n(509381),
    e$ = n(731854),
    eq = n(375708);
let eZ = new p.A("MediaEngineStore"),
    eX = "MediaEngineStore",
    eQ = { left: 1, right: 1 },
    eJ = 5 * ex.A.Millis.SECOND,
    e0 = 2 * ex.A.Millis.SECOND,
    e1 = 30 * ex.A.Millis.SECOND,
    e2 = +ex.A.Millis.MINUTE,
    e3 = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2",
    e6 = 0;
function e4() {
    return {
        mode: eO.TBI.VOICE_ACTIVITY,
        modeOptions: {
            threshold: -60,
            autoThreshold: E.isPlatformEmbedded || __OVERLAY__,
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
        audioMixerSettings: {
            enabled: !1,
            mode: "line",
            spatialBlend: 1,
            distance: 3,
            roomSize: 25,
            spread: 4,
            arcAngle: 180,
            gridColumns: 3,
            gridSpacing: 1.5,
            buckets: 10,
            listenerHeight: 0.15,
        },
        localPans: {},
        inputVolume: e$.Hz,
        outputVolume: e$.Hz,
        inputDeviceId: e$.dx,
        outputDeviceId: e$.dx,
        videoDeviceId: e$.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: e8.supports(e$.O5.VIDEO_HOOK),
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
let e5 = {
        [ez.m.CUSTOM]: {},
        [ez.m.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [ez.m.STUDIO]: {
            mode: eO.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    e7 = { modeOptions: { vadUseKrisp: !1 }, noiseCancellation: !1, noiseSuppression: !0 },
    e8 = (0, O.hB)((0, O.WI)());
eZ.enableNativeLogger(!0);
let e9 = {},
    te = new Set([e$.x.DEFAULT]),
    tt = e8.supports(e$.O5.AUTO_ENABLE),
    tn = !1,
    ti = e$.x.STREAM,
    tr = performance.now(),
    ts = null,
    ta = { [e$.dx]: nc("No Input Devices") },
    to = { [e$.dx]: nc("No Output Devices") },
    tl = { [e$.dx]: nc("No Video Devices") },
    tu = new b.Ep(),
    tc = !1,
    td = !1,
    t_ = !1,
    tf = !1,
    th = !1,
    tp = e$.qe,
    tE = e$.qe,
    tm = !1,
    tg = !1,
    tA = new b.Ep(),
    tI = !1,
    tT = !1,
    tS = !1,
    tN = !1,
    ty = new b.Ep(),
    tC = !1,
    tv = !1,
    tO = !1,
    tR = [],
    tb = !1,
    tD = null,
    tL = !1,
    tw = !1,
    tM = !1,
    tP = {},
    tx = null,
    tU = null,
    tk = !1;
eN.A.hasPermission(eW.iL.AUDIO, { showAuthorizationError: !1 }),
    eN.A.hasPermission(eW.iL.CAMERA, { showAuthorizationError: !1 });
let tG = new Set(),
    tF = !1,
    tV = new Set(),
    tB = {},
    tH = null,
    tj = null,
    tY = !0,
    tW = !1,
    tK = new b.Ep(),
    tz = !1,
    t$ = !1,
    tq = !1,
    tZ = !1,
    tX = {};
function tQ(e) {
    return (function (e) {
        let { location: t } = e;
        return en.getConfig({ location: t });
    })({ location: e }).hdrCaptureMode;
}
async function tJ() {
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
function t0() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT,
        t = e9[e];
    return null == t && ((t = e4()), (e9[e] = t)), t;
}
function t1() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT,
        t = t0(e),
        n = e5[t.activeInputProfile ?? ez.m.CUSTOM],
        i = tO ? tX : e7,
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
function t2(e) {
    let t = t1(e.context),
        n = t.mode;
    e.context === e$.x.DEFAULT && (0, ed.N)(!1, !1);
    let { showPTTSpeakingIndicator: i } = eM.A.getConfig({ location: "setInputMode" }),
        r = i && n === eO.TBI.PUSH_TO_TALK;
    e.setInputMode(n, {
        vadThreshold: t.modeOptions.threshold,
        vadAutoThreshold: !!r || t.modeOptions.autoThreshold,
        vadUseKrisp: (!!r || t.modeOptions.vadUseKrisp) && (tO || !1),
        vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? 0.5,
        vadLeading: t.modeOptions.vadLeading,
        vadTrailing: t.modeOptions.vadTrailing,
        vadDuringPreProcess: t.modeOptions.vadDuringPreProcess ?? !1,
        pttReleaseDelay: Math.round(t.modeOptions.delay),
    });
}
function t3(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e$.Hz;
    return T().clamp(e, 0, t);
}
function t6(e) {
    let t = t1(e.context),
        n = !tt || t.mute || t.deaf;
    e.context === e$.x.DEFAULT
        ? (n = n || tc || td || t_ || !eN.A.didHavePermission(eW.iL.AUDIO))
        : e.context === e$.x.STREAM && (n = !0),
        e.setSelfMute(n),
        e.setSelfDeaf(t.deaf),
        e.context === e$.x.DEFAULT && M.A.updateNativeMute();
}
function t4() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : th,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
        n = s;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, E.isWindows)()
                ? w.c1(n.desktopSource.soundshareId)
                : null != n.desktopSource.sourcePid && t1().videoHook && w.c1(n.desktopSource.sourcePid),
            e8.setGoLiveSource(null, ti)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            e8.setGoLiveSource(null, ti),
        th || e)
    ) {
        let t = t1().videoDeviceId;
        th && t === e$.dx && tE === e$.dx && tp !== e$.qe ? (t = tp) : (tE = t),
            (tp = (th = e) ? n_(tl, t) : e$.qe),
            e8.setVideoInputDevice(tp);
    }
    if (((s = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = tQ("MediaEngineStore go live"),
                r = t1().videoHook,
                s = ni(),
                a = s ? ((0, E.isWindows)() && C().satisfies(L.A?.os.release, ea.fG) ? ea.zl : ea.eg) : 0,
                o = !1;
            (0, E.isWindows)() &&
                a >= ea.zl &&
                (o =
                    !0 === tj
                        ? eg.getConfig({ location: "updateVideo" }).enabled
                        : em.getConfig({ location: "updateVideo" }).enabled);
            let l = !r || !J.getConfig({ location: "updateVideo" }).enabled,
                u = r && ep.getConfig({ location: "updateVideo" }).enabled;
            e8.setGoLiveSource(
                {
                    desktopDescription: {
                        id: t.desktopSource.id,
                        soundshareId: t.desktopSource.soundshareId,
                        useVideoHook: r,
                        useHookFramePacer: l,
                        useGraphicsCapture: s,
                        useGraphicsCaptureApiLevel: a,
                        useCaptureDeviceForEncode: (0, E.isWindows)(),
                        useLoopback: i.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: nr(),
                        videoHookStaleFrameTimeoutMs: 500,
                        graphicsCaptureStaleFrameTimeoutMs: eJ,
                        hdrCaptureMode: n,
                        enableGlobalFramePoolLock: (function (e) {
                            let { location: t, disable: n = !1 } = e;
                            return n ? et.definition.defaultConfig : et.getConfig({ location: t });
                        })({ location: "updateVideo" }).enabled,
                        useGraphicsCaptureDirtyRegions: o,
                        videoHookAllowDx12: u,
                    },
                    quality: e,
                },
                ti,
            );
        }
        null != t.cameraSource &&
            e8.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: t.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: t.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                ti,
            );
    }
}
function t5(e) {
    switch (e) {
        case e$.CO.KRISP_CPU_OVERUSE:
            return F.B6.KrispCpuOveruse;
        case e$.CO.KRISP_FAILED:
            return F.B6.KrispFailed;
        case e$.CO.KRISP_VAD_CPU_OVERUSE:
            return F.B6.KrispVadCpuOveruse;
        case e$.CO.KRISP_INIT_ERROR:
            return F.B6.KrispInitError;
        case e$.CO.KRISP_INIT_ERROR_NATIVE:
            return F.B6.KrispInitErrorNative;
        case e$.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED:
            return F.B6.KrispInitErrorSse4NotSupported;
        case e$.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED:
            return F.B6.KrispInitErrorAvx2NotSupported;
        case e$.CO.KRISP_INIT_ERROR_UNSIGNED:
            return F.B6.KrispInitErrorUnsigned;
        case e$.CO.KRISP_INIT_ERROR_GLOBAL_INIT:
            return F.B6.KrispInitErrorGlobalInit;
        case e$.CO.KRISP_INIT_ERROR_WEIGHT_8K:
            return F.B6.KrispInitErrorWeight8k;
        case e$.CO.KRISP_INIT_ERROR_WEIGHT_16K:
            return F.B6.KrispInitErrorWeight16k;
        case e$.CO.KRISP_INIT_ERROR_WEIGHT_32K:
            return F.B6.KrispInitErrorWeight32k;
        case e$.CO.KRISP_INIT_ERROR_WEIGHT_VAD:
            return F.B6.KrispInitErrorWeightVad;
        default:
            return;
    }
}
let t7 = new Set([
    e$.CO.KRISP_INIT_ERROR,
    e$.CO.KRISP_INIT_ERROR_NATIVE,
    e$.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED,
    e$.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED,
    e$.CO.KRISP_INIT_ERROR_UNSIGNED,
    e$.CO.KRISP_INIT_ERROR_GLOBAL_INIT,
    e$.CO.KRISP_INIT_ERROR_WEIGHT_8K,
    e$.CO.KRISP_INIT_ERROR_WEIGHT_16K,
    e$.CO.KRISP_INIT_ERROR_WEIGHT_32K,
    e$.CO.KRISP_INIT_ERROR_WEIGHT_VAD,
]);
function t8(e) {
    if (
        (eZ.warn(`Voice processing error: ${e}`),
        (0, F.QW)({ type: F.iy.NOISE_CANCELLER_ERROR, underlyingError: t5(e) }),
        ev.default.track(eO.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
        t7.has(e))
    ) {
        tO = !1;
        return;
    }
    e === e$.CO.KRISP_VAD_CPU_OVERUSE
        ? D.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e })
        : ((tL = !0), D.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e }));
}
function t9(e) {
    let t = z({ location: "getAutomaticGainControlConfig", disable: !e }).noiseCancellationConfig;
    return { enabled: e, ...t };
}
function ne(e, t) {
    e.setAutomaticGainControl(t9(t));
}
function nt(e, t) {
    let n = (0, eC.A)(t, i.getSystemMicrophoneMode());
    n !== t && eZ.info("Falling back to system noise suppression."), (t = n), e.setNoiseCancellation(t);
    let { noiseCancellationDuringProcessing: r } = z({ location: "setNoiseCancellation", disable: !t });
    e.setNoiseCancellationDuringProcessing(r);
}
function nn(e) {
    let t = t1(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eV.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eV.A.hasNoiseSuppression(n) || t.noiseSuppression),
        ne(e, eV.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        nt(e, t.noiseCancellation),
        (0, E.isWeb)())
    ) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function ni() {
    return (0, E.isWindows)() && C().satisfies(L.A?.os.release, ea.yg);
}
function nr() {
    return (0, E.isMac)() && e8.supports(e$.O5.SCREEN_CAPTURE_KIT) && C().satisfies(L.A?.os.release, ea.e);
}
function ns() {
    return (
        (0, E.isWindows)() &&
        e8.supports(e$.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        e8.supports(e$.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function na() {
    return e8.supports(e$.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function no(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e$.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = t0(t);
    return Object.assign(i, e), !__OVERLAY__ && n && R.w.set(eX, e9), i;
}
function nl() {
    let e = t1();
    nh(e.inputDeviceId),
        e8.setAudioOutputDevice(e.outputDeviceId),
        t4(),
        e8.setInputVolume(e.inputVolume),
        e8.setOutputVolume(e.outputVolume),
        e8.setAecDump(e.aecDumpEnabled),
        e8.setSidechainCompression(e.sidechainCompression),
        e8.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        e8.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        (0, E.isLinux)() && m.Ay?.setOpenH264Enabled?.(e.openH264Enabled),
        e8.setAudioMixerOptions(e.audioMixerSettings);
}
function nu() {
    tt || e8.enable().then(() => D.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nc(e) {
    return { id: e$.dx, index: 0, name: e, disabled: !0, guid: void 0, hardwareId: void 0, containerId: void 0 };
}
function nd(e, t) {
    if (0 === e.length) {
        let e = nc(t);
        return { [e.id]: e };
    }
    return T()(e)
        .map((e) => ({
            id: e.id,
            index: e.index,
            name: e.name,
            disabled: !1,
            facing: e.facing,
            guid: e.originalId,
            hardwareId: e.hardwareId,
            containerId: e.containerId,
            effects: e.effects,
        }))
        .keyBy("id")
        .value();
}
function n_(e, t) {
    let n = e[t] ?? e[e$.dx] ?? T()(e).values().first();
    return null != n ? n.id : t;
}
function nf(e) {
    if (!(0, E.isWindows)() || !X.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects) return;
    let t = ta[e];
    t?.guid != null && eb(t.guid, e, e8);
}
function nh(e) {
    e8.setAudioInputDevice(e), nf(e);
}
function np(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nE() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = ew.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let i = n === eK.W.USER ? e$.x.DEFAULT : e$.x.STREAM,
            r = i === e$.x.STREAM ? e$.Cn : e$.Hz,
            s = t[n] ?? {},
            { localMutes: a, localVolumes: o } = t1(i);
        for (let [e, t] of Object.entries(s))
            null == (0, eL.tM)(i, e) &&
                (t.muted ? (a[e] = !0) : delete a[e],
                t.volume !== r ? (o[e] = t.volume) : delete o[e],
                e8.eachConnection((n) => {
                    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
                }, i));
        if (e)
            for (let e of new Set([...Object.keys(a), ...Object.keys(o)]))
                null == s[e] &&
                    (delete a[e],
                    delete o[e],
                    e8.eachConnection((t) => {
                        t.setLocalVolume(e, r), t.setLocalMute(e, !1);
                    }, i));
        no({ localMutes: a, localVolumes: o }, i);
    }
}
function nm(e, t) {
    if (t) {
        let { soundshareId: t, soundshareSession: s } = (function (e) {
            if (null == i)
                return (
                    eZ.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
                    { soundshareId: null, soundshareSession: "" }
                );
            {
                let t = i.getExperimentalSoundshare() ? e : eP.A.getAudioPid(e),
                    n = "";
                return null != t && (n = eP.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n };
            }
        })(e);
        if (null != t) {
            var n, r;
            return (
                (n = t),
                (r = s),
                (0, E.isWindows)() &&
                    n > 1 &&
                    w.GH(n, { soundshare_session: r }).then((e) => {
                        null == e ||
                            H.Ay.shouldContinueWithoutElevatedProcessForPID(n) ||
                            D.h.wait(() => {
                                D.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: e });
                            });
                    }),
                { soundshareId: t, soundshareSession: s }
            );
        }
    }
    return null != e && t1().videoHook && w.GH(e), { soundshareId: null, soundshareSession: null };
}
function ng() {
    let e = e$.x.DEFAULT,
        { videoToggleStateMap: t } = t1(e);
    for (let [e, n] of Object.entries(t)) n === eO.bb8.AUTO_PROBING && delete t[e];
    no({ videoToggleStateMap: t }, e, !1);
}
function nA(e) {
    let t = t1(),
        n = e8.getAudioSubsystem(),
        r = e8.getAudioLayer(),
        s = n_(ta, t.inputDeviceId),
        a = ta[s]?.name,
        o = (0, eC.A)(t.noiseCancellation, i.getSystemMicrophoneMode());
    ev.default.track(eO.HAw.VOICE_PROCESSING, {
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
function nI() {
    let e = t1(),
        t = tV.size > 0,
        n = e.inputDeviceId,
        i = eV.A.hasEchoCancellation(n) || e.echoCancellation,
        r = eV.A.hasNoiseSuppression(n) || e.noiseSuppression,
        s = t9(eV.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        a = e.noiseCancellation;
    e8.setLoopback(t, {
        echoCancellation: i,
        echoCancellationPreEcho: !t,
        noiseSuppression: r,
        automaticGainControlConfig: s,
        noiseCancellation: a,
    });
}
async function nT() {
    if (!e8.supports(e$.O5.VAAPI) || window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let e = await window.DiscordNative.processUtils.getSystemInfo();
    (e.electronGPUInfo?.gpuDevice ?? []).some((e) => 4098 === e.vendorId) &&
        ((tq = !0), (t$ = e8.supports(e$.O5.GAMESCOPE_CAPTURE)));
}
async function nS() {
    try {
        await m.Ay.ensureModule("discord_krisp");
        let e = m.Ay.requireModule("discord_krisp");
        (tO = !0),
            (c = e.getSdkVersion?.()),
            (d = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                (tR = e), i.emitChange();
            }),
            i.emitChange(),
            await m.Ay.ensureModule("discord_voice");
        let t = m.Ay.requireModule("discord_voice");
        t.setupKrispPath?.();
    } catch (t) {
        eZ.warn(`Failed to load Krisp module: ${t.message}`), eU.A.captureException(t);
        let e = e$.CO.KRISP_INIT_ERROR;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? e$.CO.KRISP_INIT_ERROR : n;
        }
        (0, F.QW)({ type: F.iy.NOISE_CANCELLER_ERROR, underlyingError: t5(e) }),
            ev.default.track(eO.HAw.VOICE_PROCESSING, { noise_canceller_error: e });
    } finally {
        tv = !1;
    }
}
async function nN() {
    try {
        let e,
            t = "",
            n = !1,
            i = URL.parse(e3);
        if (null === i) return void eZ.log("OpenH264 URL ", i, " is invalid");
        let r = i.pathname.split("/"),
            s = r[r.length - 1].replace(".bz2", "");
        try {
            let t = await m.Ay.downloadOpenH264(
                e3,
                s,
                "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f",
                (e) => {
                    eZ.log("OpenH264 download status", e);
                },
            );
            eZ.log("OpenH264 is ready", t), (n = t.fetchedFromNetwork), (e = !0);
        } catch (n) {
            eZ.error("OpenH264 download failed", n), (t = n.message), (e = !1);
        }
        if (
            (ev.default.track(eO.HAw.VIDEO_OPENH264_DOWNLOADED, {
                success: e,
                fetched_from_network: n,
                error_message: t,
            }),
            e)
        ) {
            let e = await m.Ay.cleanupUnusedOpenH264Files([s]);
            eZ.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        eZ.error("OpenH264 download failed", e);
    }
}
function ny(e) {
    e === e$.rB.AUTOMATIC
        ? (no({ automaticAudioSubsystem: !0 }), nC())
        : (no({ automaticAudioSubsystem: !1 }), e8.setAudioSubsystem(e));
}
function nC() {
    e8.queueAudioSubsystem(e$.rB.EXPERIMENTAL);
}
function nv(e) {
    let { section: t } = e;
    return t === eO.nc_.VOICE && nu(), !1;
}
class nO extends v.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        let e;
        if (
            (tu.start(e1, () => {
                eZ.error("Device enumeration timed out"), ev.default.track(eO.HAw.DEVICE_ENUMERATION_TIMEOUT, {});
            }),
            e8.on(O.bg.Connection, (e) => {
                let t;
                nI(),
                    t2(e),
                    t6(e),
                    nn(e),
                    e.context === e$.x.STREAM &&
                        e.setAv1CodecBitrateFunc(() => $.getConfig({ location: "MediaEngineStore" }).bitrate);
                let n = t1();
                e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers),
                    e.setQoS(n.qos),
                    (0, E.isWindows)()
                        ? (e.setExperimentFlag(e$.fd.H265_HARDWARE_ONLY, !0),
                          (null != tU
                              ? tU
                              : "u" > typeof window
                                ? (tU = tJ().then((e) => ((tx = e), e)))
                                : Promise.resolve(!1)
                          ).then((t) => {
                              e.setExperimentFlag(e$.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                          }))
                        : (0, E.isMac)() && e.setExperimentFlag(e$.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                    (0, E.isLinux)() && n.openH264Enabled && e.setExperimentFlag(e$.fd.USE_LIBOPENH264_DECODER, !0),
                    (function (e) {
                        let { location: t, disable: n = !1 } = e;
                        return n ? ec.definition.defaultConfig : ec.getConfig({ location: t });
                    })({ location: "setupMediaEngine" }).enabled &&
                        e.setExperimentFlag(e$.fd.LOW_LATENCY_RATE_CONTROL, !0),
                    e.setExperimentFlag(e$.fd.RESET_DECODER_ON_ERRORS, !0),
                    e.setExperimentFlag(e$.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
                let { swallowVolumeOnlySpeakingEvents: r } = P.A.getConfig({ location: "MediaEngineStore" });
                if (
                    (r && e.setExperimentFlag(e$.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === e$.x.STREAM)
                ) {
                    let t = np(to);
                    e.setSoundshareDiscardRearChannels(t);
                }
                if ((0, E.isWindows)())
                    e.setExperimentFlag(e$.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(e$.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e$.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                else if ((0, E.isMac)())
                    e.setExperimentFlag(e$.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e$.fd.SIGNAL_AV1_HARDWARE_DECODE, !0),
                        e.setExperimentFlag(
                            e$.fd.H265_DISABLE_ENCODE,
                            !(
                                window?.DiscordNative?.os.arch === "arm64" &&
                                C().satisfies(window?.DiscordNative?.os.release, e$.Dk)
                            ),
                        );
                else if ((0, E.isLinux)()) e.setExperimentFlag(e$.fd.SIGNAL_AV1_DECODE, !0);
                else if ((0, E.isIOS)())
                    e.setExperimentFlag(e$.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e$.fd.SIGNAL_AV1_HARDWARE_DECODE, !0);
                else if ((0, E.isAndroid)() && !1) {
                    let { enabled: t } = q.getConfig({ location: "MediaEngineStore" });
                    t &&
                        (e.setExperimentFlag(e$.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e$.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
                }
                if ((0, E.isWeb)()) {
                    let { enabled: t } = Q.getConfig({ location: "MediaEngineStore" });
                    e.setExperimentFlag(e$.fd.BROWSER_HEVC, t);
                }
                for (let r of ((0, E.isWindows)() &&
                    tH?.startsWith("AMD") &&
                    eI("MediaEngineStore").enabled &&
                    e.setExperimentFlag(e$.fd.WMF_GPU_ENCODE, !0),
                (0, E.isWindows)() &&
                    tH?.startsWith("Intel") &&
                    eT.getConfig({ location: "MediaEngineStore" }).enabled &&
                    e.setExperimentFlag(e$.fd.WMF_GPU_ENCODE, !0),
                (0, E.isWindows)() &&
                    tH?.startsWith("Qualcomm") &&
                    eI("MediaEngineStore").enabled &&
                    e.setExperimentFlag(e$.fd.WMF_GPU_ENCODE, !0),
                e8.setHasFullbandPerformance(null === (t = (0, G.A)()) || t >= 31),
                e.setRemoteAudioHistory(1e3),
                (0, U.A)(i) && e.setClipsKeyFrameInterval(e$.X1),
                (n = t1(e.context)),
                e.setPostponeDecodeLevel(100),
                Object.keys(n.localMutes)))
                    r !== eG.default.getId() && e.setLocalMute(r, n.localMutes[r]);
                for (let t of Object.keys(n.localVolumes))
                    t !== eG.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
                for (let t of Object.keys(n.localPans)) {
                    let i = n.localPans[t];
                    e.setLocalPan(t, i.left, i.right);
                }
                for (let t of Object.keys(n.disabledLocalVideos)) e.setLocalVideoDisabled(t, n.disabledLocalVideos[t]);
                e.on(O.yq.Speaking, (t, n, i, r) => {
                    D.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: r });
                }),
                    e.context === e$.x.DEFAULT &&
                        ((tg = !1),
                        e.on(O.yq.SpeakingWhileMuted, () => {
                            let e = !tg;
                            (tg = !0),
                                e && i.emitChange(),
                                tA.start(e0, () => {
                                    (tg = !1), i.emitChange();
                                });
                        })),
                    e.on(O.yq.DesktopSourceEnd, (t, n) => {
                        D.h.dispatch({
                            type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                            settings: { context: e.context },
                            endReason: t,
                            errorCode: n,
                        });
                    }),
                    e.on(O.yq.InteractionRequired, (e) => {
                        D.h.dispatch({ type: "MEDIA_ENGINE_INTERACTION_REQUIRED", required: e });
                    }),
                    e.on(O.yq.VideoHookInitialize, (e, t, n, i, r, a) => {
                        s?.desktopSource != null &&
                            ev.default.track(eO.HAw.VIDEOHOOK_INITIALIZED, {
                                backend: e,
                                format: t,
                                framebuffer_format: n,
                                sample_count: i,
                                success: r,
                                reinitialization: a,
                                ...(0, j.A)(s?.desktopSource),
                            });
                    }),
                    e.on(O.yq.NoiseCancellationError, t8),
                    e.on(O.yq.VoiceActivityDetectorError, t8),
                    e.on(O.yq.SdpError, (e, t, n, i) => {
                        ev.default.track(eO.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: i });
                    }),
                    e.on(O.yq.VideoState, (t) => {
                        D.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                    }),
                    e.setBitRate(eF.A.bitrate),
                    e.applyVideoQualityMode(eY.A.mode),
                    (0, E.isWindows)() &&
                        e8.supports(e$.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                        e8.setAsyncVideoInputDeviceInit(!0);
            }),
            e8.on(O.bg.DeviceChange, (e, t, n) => {
                tu.stop(),
                    D.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n });
            }),
            e8.on(O.bg.VolumeChange, (e, t) => {
                D.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
            }),
            e8.on(O.bg.DesktopSourceEnd, (e, t) => {
                D.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
            }),
            e8.on(O.bg.AudioPermission, (e) => {
                (tk = !0), D.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e });
            }),
            e8.on(O.bg.VideoPermission, (e) => {
                D.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
            }),
            e8.on(O.bg.WatchdogTimeout, async () => {
                let e;
                if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                    try {
                        await eP.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                    } catch (t) {
                        "number" == typeof t.status && (e = t.status);
                    }
                eZ.warn(`Watchdog timeout, report submission status: ${e ?? 200}`);
                let t =
                    eE.getConfig({ location: "watchdog_timeout" }).enabled && null != L.A.processUtils.setCrashReason;
                try {
                    await ev.default.track(
                        eO.HAw.VOICE_WATCHDOG_TIMEOUT,
                        { minidump_submission_error: e, will_restart: t },
                        { flush: !0 },
                    );
                } catch (e) {
                    eZ.error("Failed to flush voice watchdog timeout analytics event", e);
                }
                t &&
                    (eZ.info("Relaunching app due to voice watchdog timeout"),
                    await L.A.processUtils.setCrashReason("voice-watchdog-timeout"),
                    R.w.set("discord_watchdog_restart_timestamp", Date.now().toString()),
                    L.A.app.relaunch());
            }),
            e8.on(O.bg.VideoInputInitialized, (e) => {
                ev.default.track(eO.HAw.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired
                        ? null
                        : Math.round(e.timeToFirstFrame * ex.A.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy,
                    media_session_id: eH.A.getMediaSessionId(),
                    rtc_connection_id: eH.A.getRTCConnectionId(),
                });
            }),
            e8.on(O.bg.AudioInputInitialized, (e) => {
                ev.default.track(eO.HAw.AUDIO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_initialized_ms: Math.round(e.timeToInitialized * ex.A.Millis.SECOND),
                    rtc_connection_id: eH.A.getRTCConnectionId(),
                });
            }),
            e8.on(O.bg.ClipsRecordingRestartNeeded, () => {
                D.h.dispatch({ type: "CLIPS_RESTART" });
            }),
            e8.on(O.bg.ClipsInitFailure, (e, t) => {
                D.h.wait(() => {
                    D.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t });
                });
            }),
            e8.on(O.bg.ClipsRecordingEnded, (e, t) => {
                a?.desktopSource?.id === e &&
                    (null != t && s?.desktopSource?.soundshareId !== t && w.c1(t), (a = null));
            }),
            e8.on(O.bg.NativeScreenSharePickerUpdate, (e, t) => {
                D.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
            }),
            e8.on(O.bg.NativeScreenSharePickerCancel, (e) => {
                D.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
            }),
            e8.on(O.bg.NativeScreenSharePickerError, (e) => {
                D.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
            }),
            e8.on(O.bg.AudioDeviceModuleError, (e, t, n) => {
                ev.default.track(eO.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
            }),
            e8.on(O.bg.VideoCodecError, (e) => {
                let t = "encode" === e.mode ? F.iy.VIDEO_ENCODE_ERROR : F.iy.VIDEO_DECODE_ERROR,
                    n = { videoCodec: e.codecStandard, errorMessage: e.message };
                (0, F.QW)(
                    t === F.iy.VIDEO_ENCODE_ERROR
                        ? { type: t, ...n, videoEncoder: e.implName }
                        : { type: t, ...n, videoDecoder: e.implName },
                );
            }),
            e8.on(O.bg.ConnectionStats, (e) => {
                D.h.dispatch({
                    type: "MEDIA_ENGINE_CONNECTION_STATS",
                    connectionStats: e.map((e) => {
                        let { stats: t, connection: n } = e;
                        return {
                            stats: t,
                            mediaEngineConnectionId: n.mediaEngineConnectionId,
                            version: e6++,
                            context: n.context,
                        };
                    }),
                });
            }),
            e8.on(O.bg.VoiceProcessingError, t8),
            e8.on(O.bg.VoiceQueueMetrics, (e) => {
                let t = nR(e);
                null !== t && ev.default.track(eO.HAw.VOICE_QUEUE_METRICS, t);
            }),
            e8.setOnVideoContainerResized((e, t, n) => {
                D.h.wait(() =>
                    D.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } }),
                );
            }),
            nT(),
            o.reset(),
            (0, eD.w)().then((e) => {
                null != e && ((tH = e.gpu_brand), (tj = e.has_intel_hybrid_igpu));
            }),
            e8.on(O.bg.SystemMicrophoneModeChange, (e) => {
                (f = e), e8.eachConnection(nn), i.emitChange();
            }),
            null != (e = R.w.get("audio")) && (R.w.set(eX, { [e$.x.DEFAULT]: e }), R.w.remove("audio")),
            (e9 = R.w.get(eX) ?? {}),
            T().each(e9, (e) => {
                T().defaultsDeep(e, e4()),
                    null != e.modeOptions &&
                        "string" == typeof e.modeOptions.shortcut &&
                        (e.modeOptions.shortcut = (0, ek.OH)(e.modeOptions.shortcut)),
                    null != e.modeOptions &&
                        4 !== e.vadUseKrispSettingVersion &&
                        ((e.vadUseKrispSettingVersion = 4), (e.modeOptions.vadUseKrisp = !0)),
                    e.qosMigrated || ((e.qosMigrated = !0), (e.qos = !1)),
                    e.vadThrehsoldMigrated ||
                        ((e.vadThrehsoldMigrated = !0),
                        e.modeOptions?.threshold === -40 && (e.modeOptions.threshold = -60)),
                    e8.supports(e$.O5.SIDECHAIN_COMPRESSION) &&
                        e.sidechainCompressionSettingVersion < 1 &&
                        ((e.sidechainCompressionSettingVersion = 1), (e.sidechainCompression = !0)),
                    (0, E.isWeb)()
                        ? 1 !== e.ncUseKrispjsSettingVersion &&
                          ((e.ncUseKrispjsSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                        : 1 !== e.ncUseKrispSettingVersion &&
                          ((e.ncUseKrispSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0)),
                    null == e.audioMixerSettings &&
                        (e.audioMixerSettings = {
                            enabled: !1,
                            mode: "line",
                            spatialBlend: 1,
                            distance: 3,
                            roomSize: 25,
                            spread: 4,
                            arcAngle: 180,
                            gridColumns: 3,
                            gridSpacing: 1.5,
                            buckets: 10,
                            listenerHeight: 0.15,
                        });
            }),
            nl(),
            ((0, E.isWindows)() || (0, E.isLinux)() || (0, E.isMac)()) && !__OVERLAY__ && !tv && !tO
                ? ((tv = !0), nS())
                : (0, E.isWeb)() && e8.supports(e$.O5.NOISE_CANCELLATION)
                  ? ((tO = !0), i.emitChange())
                  : (0, E.isWeb)() && no({ noiseCancellation: !1 }),
            (0, E.isLinux)() && nN(),
            ng(),
            (0, E.isDesktop)() && E.isPlatformEmbedded && !tZ)
        ) {
            tZ = !0;
            let e = async () => {
                let t = await new Promise((e) => {
                    m.Ay.pollQueueMetrics((t) => {
                        e(t);
                    });
                });
                t.periodMs = e$.tl;
                let n = nR(t);
                null !== n && ev.default.track(eO.HAw.VOICE_QUEUE_METRICS, n), setTimeout(e, e$.tl);
            };
            setTimeout(e, e$.tl);
        }
        (0, E.isWindows)() &&
            E.isPlatformEmbedded &&
            null === ts &&
            e8
                .getCodecSurvey()
                .then((e) => {
                    try {
                        let t = JSON.parse(e);
                        if (null == t || null == t.available_video_decoders)
                            throw Error("decoder survey is not available");
                        ts = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                    } catch (e) {
                        eZ.error("Failed to parse codec survey", e), (ts = !1);
                    }
                })
                .catch((e) => {
                    eZ.error("Failed to get codec survey", e), (ts = !1);
                })
                .finally(() => {
                    D.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
                }),
            (0, E.isAndroid)(),
            (tB = {
                [e$.O5.VIDEO]: e8.supports(e$.O5.VIDEO),
                [e$.O5.DESKTOP_CAPTURE]: e8.supports(e$.O5.DESKTOP_CAPTURE),
                [e$.O5.HYBRID_VIDEO]: e8.supports(e$.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eG.default, eF.A, eV.A, eB.A, x.A, V.A, eH.A, H.Ay, ew.A, ej.default, eY.A);
    }
    supports(e) {
        return e8.supports(e);
    }
    supportsInApp(e) {
        return tB[e] || e8.supports(e);
    }
    isSupported() {
        return e8.supported();
    }
    isNoiseSuppressionSupported() {
        return e8.supports(e$.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return tO || !1;
    }
    isNoiseCancellationError() {
        return tL;
    }
    isAutomaticGainControlSupported() {
        return e8.supports(e$.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !na() && (e8.supports(e$.O5.LEGACY_AUDIO_SUBSYSTEM) || e8.supports(e$.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return e8.supports(e$.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === e8.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return tO || !1;
    }
    isAecDumpSupported() {
        return e8.supports(e$.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return e8.supports(e$.O5.VIDEO) && e8.supports(e$.O5.SIMULCAST);
    }
    getAecDump() {
        return t1().aecDumpEnabled;
    }
    getMediaEngine() {
        return e8;
    }
    getVideoComponent() {
        return e8.Video;
    }
    getCameraComponent() {
        return e8.Camera;
    }
    getKrispSuppressionLevel() {
        return d ?? 100;
    }
    getKrispEnableStats() {
        return tb;
    }
    isEnabled() {
        return tt;
    }
    isMute() {
        return this.isSelfMute() || tc;
    }
    isDeaf() {
        return this.isSelfDeaf() || tf;
    }
    getAudioMixerSettings() {
        return t1().audioMixerSettings;
    }
    hasContext(e) {
        return null != e9[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT;
        return e === e$.x.DEFAULT && td;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT;
        return (
            !this.isEnabled() ||
            t1(e).mute ||
            !eN.A.didHavePermission(eW.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === e$.x.DEFAULT && t_)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tm;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tm = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT,
            t = tW && "voice_isolation" !== this.getSystemMicrophoneMode() && t1(e).mode === eO.TBI.VOICE_ACTIVITY;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && (eV.A.isHardwareMute(this.getInputDeviceId()) || t);
    }
    isHardwareMuteNoticeEnabled() {
        return tY;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT;
        return !this.isSupported() || t1(e).deaf;
    }
    isVideoEnabled() {
        return th && tT;
    }
    isVideoAvailable() {
        return Object.values(tl).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return tT;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.STREAM;
        return ti === e && null != s;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.STREAM;
        return ti === e && null != s && s.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e$.x.DEFAULT;
        return e !== eG.default.getId() && (t1(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return e8.supports(e$.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e$.x.DEFAULT;
        return t1(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e$.x.DEFAULT;
        return t1(t).videoToggleStateMap[e] ?? eO.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e$.x.DEFAULT;
        return t === e$.x.DEFAULT && tG.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT;
        return e === e$.x.DEFAULT && tG.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tw;
    }
    isNativeAudioPermissionReady() {
        return tk;
    }
    getGoLiveSource() {
        return s;
    }
    getGoLiveContext() {
        return ti;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return tr;
    }
    isH264MfDecodeAvailable() {
        return ts;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e$.x.DEFAULT,
            n = t1(t).localPans[e];
        return null != n ? n : eQ;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e$.x.DEFAULT,
            n = t === e$.x.STREAM ? e$.Cn : e$.Hz,
            i = t1(t).localVolumes[e];
        return null != i ? i : n;
    }
    getInputVolume() {
        return t1().inputVolume;
    }
    getOutputVolume() {
        return t1().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT;
        return t1(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT;
        return t1(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            T().each(e9, (t, n) => {
                let {
                    mode: i,
                    modeOptions: { shortcut: r },
                } = t;
                i === eO.TBI.PUSH_TO_TALK && te.has(n) && (e[n] = r);
            }),
            e
        );
    }
    getInputDeviceId() {
        return n_(ta, t1().inputDeviceId);
    }
    getOutputDeviceId() {
        return n_(to, t1().outputDeviceId);
    }
    getVideoDeviceId() {
        return n_(tl, t1().videoDeviceId);
    }
    getInputDevices() {
        return ta;
    }
    getOutputDevices() {
        return to;
    }
    getVideoDevices() {
        return tl;
    }
    getEchoCancellation() {
        let e = t1();
        return eV.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return e8.supports(e$.O5.SIDECHAIN_COMPRESSION) && t1().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return t1().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return t1().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tx && tx;
    }
    getOpenH264Enabled() {
        return (0, E.isLinux)() && t1().openH264Enabled;
    }
    getLoopback() {
        return tV.size > 0;
    }
    getLoopbackReasons() {
        return tV;
    }
    getNoiseSuppression() {
        let e = t1();
        return eV.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = t1();
        return eV.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return t1().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return t1().noiseCancellation;
    }
    getHardwareEncoding() {
        return !0;
    }
    getEnableSilenceWarning() {
        return t1().silenceWarning;
    }
    getDebugLogging() {
        return e8.getDebugLogging();
    }
    getQoS() {
        return t1().qos;
    }
    getAttenuation() {
        return t1().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return t1().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return t1().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return ns() && t1().automaticAudioSubsystem ? e$.rB.AUTOMATIC : e8.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return e8.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return t1().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === ez.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT;
        return t1(e);
    }
    getState() {
        return {
            settingsByContext: e9,
            inputDevices: ta,
            outputDevices: to,
            appSupported: tB,
            krispModuleLoaded: tO,
            krispVersion: c,
            krispSuppressionLevel: d,
            goLiveSource: s,
            goLiveContext: ti,
        };
    }
    getInputDetectedThisConnection() {
        return tS;
    }
    getInputDetected() {
        return o.inputDetected;
    }
    getLastInputDetectedUpdateTime() {
        return o.lastUpdateTime;
    }
    getNoInputDetectedNotice() {
        return tN;
    }
    getInputDeviceOSMuted() {
        return l;
    }
    getInputDeviceOSVolume() {
        return u;
    }
    getPacketDelay() {
        return E.isPlatformEmbedded || this.getMode() !== eO.TBI.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
    }
    setCanHavePriority(e, t) {
        e8.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return tn;
    }
    getVideoHook() {
        return t1().videoHook;
    }
    supportsVideoHook() {
        return e8.supports(e$.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = t1().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return e8.supports(e$.O5.EXPERIMENTAL_SOUNDSHARE) && C().satisfies(L.A?.os.release, ea.$x);
    }
    supportsHookSoundshare() {
        return (0, E.isWindows)() && e8.supports(e$.O5.SOUNDSHARE) && C().satisfies(L.A?.os.release, ea.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = t1().useSystemScreensharePicker,
            n = (0, E.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return e8.supports(e$.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return tq;
    }
    getVideoEncoderExperiments(e, t) {
        let n = ["unk"];
        if (
            (n.push("nvNewPresets"),
            e === e$.x.STREAM ? n.push("nvRelaxRc=250") : n.push("nvRelaxRc=75"),
            this.getUseVaapiEncoder() && n.push("vaapi"),
            e === e$.x.STREAM && "streamer" === t && (0, E.isWindows)())
        ) {
            n.push("useCaptureDeviceForEncode");
            let { overrideDeviceReuse: e } = eh.getConfig({ location: "handleReady" });
            e && n.push("videoCaptureDeviceOverrideReuse");
        }
        return (
            (function (e) {
                let { location: t } = e;
                return eu.getConfig({ location: t });
            })({ location: "handleReady" }).enabled && n.push("linux-vulkan"),
            n.join(",")
        );
    }
    getUseGamescopeCapture() {
        return t$;
    }
    getSpeakingWhileMuted() {
        return tg;
    }
    getKrispModelOverride() {
        return _;
    }
    getKrispModels() {
        return tR;
    }
    getKrispVadActivationThreshold() {
        return t1().modeOptions.vadKrispActivationThreshold ?? 0.5;
    }
    hasActiveCallKitCall() {
        return tz;
    }
    setHasActiveCallKitCall(e) {
        tz = e;
    }
    supportsScreenSoundshare() {
        return (0, E.isMac)()
            ? e8.supports(e$.O5.SOUNDSHARE) && C().satisfies(L.A?.os.release, ea.P$) && nr()
            : (0, E.isWindows)()
              ? e8.supports(e$.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, E.isLinux)() && e8.supports(e$.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, E.isWindows)()) {
            if (this.getBypassSystemInputProcessing()) return;
            return tP[this.getInputDeviceId()]?.active?.find((e) => "deep_noise_suppression" === e);
        }
        if ((0, E.isMac)() || (0, E.isIOS)()) return f;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT,
            t = this.supports(e$.O5.VIDEO)
                ? [{ rid: "100", type: e === e$.x.DEFAULT ? e$.mI.VIDEO : e$.mI.SCREEN, quality: e$.Y4 }]
                : [];
        return (
            this.isSimulcastSupported() &&
                e === e$.x.DEFAULT &&
                t.push({ rid: "50", type: e$.mI.VIDEO, quality: e$.Cl }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: (0, E.isWeb)() };
        return e8.fetchAsyncResources(e);
    }
    startDavePreload() {
        !tM &&
            ((tM = !0),
            (0, E.isWeb)() &&
                e8.fetchAsyncResources({ fetchDave: !0 }).catch((e) => {
                    eZ.warn("DAVE preload failed:", e), eU.A.captureException(e);
                }));
    }
    getSupportedSecureFramesProtocolVersion() {
        return e8.getSupportedSecureFramesProtocolVersion();
    }
    hasClipsSource() {
        return null != a;
    }
    getGpuBrand() {
        return tH;
    }
}
function nR(e) {
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
(i = new nO(D.h, {
    VOICE_CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n, currentVoiceChannelId: i, video: r } = e;
        if ((i !== n && t4(r, null), null != t || null == n)) {
            tC = !1;
            return;
        }
        if (tC) return;
        tC = !0;
        let s = t1();
        (s.mute || s.deaf) && (no({ deaf: !1, mute: !1 }), e8.eachConnection(t6));
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (r === t.sessionId) {
                (tc = t.mute || t.suppress), (tf = t.deaf), e8.eachConnection(t6);
                let e = null != t.guildId && null != t.channelId && null != tD && tD !== t.channelId,
                    n = !tC && null == t.channelId;
                return t4(!e && !n && th), (tD = t.channelId), !0;
            }
            return __OVERLAY__ || t.userId !== eG.default.getId() || null != eH.A.getChannelId() || t4(!1, null), e;
        }, !1);
    },
    CONNECTION_OPEN: function (e) {
        (r = e.sessionId), (tc = !1), (tf = !1);
        let t = t1();
        ns() && (na() ? ny(e$.rB.AUTOMATIC) : t.automaticAudioSubsystem && nC()),
            e8.supports(e$.O5.OFFLOAD_ADM_CONTROLS) && e8.setOffloadAdmControls(!0),
            (0, E.isIOS)() &&
                ei.getConfig({ location: "handleConnectionOpen" }).enabled &&
                e8.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
            nf(t.inputDeviceId),
            nE();
    },
    CONNECTION_CLOSED: function () {
        r = null;
    },
    POST_CONNECTION_OPEN: function () {
        return (0, E.isWeb)() && i.startDavePreload(), !1;
    },
    RTC_CONNECTION_STATE: function (e) {
        switch (e.state) {
            case eO.S7L.CONNECTING:
                nu();
                break;
            case eO.S7L.RTC_CONNECTING:
                (tN = !1), (l = void 0), (u = void 0), (tS = !1), (tW = !1), tK.stop(), ty.stop(), o.reset();
                break;
            case eO.S7L.RTC_CONNECTED:
                t4();
                break;
            case eO.S7L.DISCONNECTED:
                (tX = {}),
                    (function () {
                        if (0 === tG.size) return;
                        let e = e$.x.DEFAULT,
                            { disabledLocalVideos: t } = t1(e);
                        tG.forEach((n) => {
                            A()(t[n], "If you are auto-disabled, then you are also disabled."),
                                delete t[n],
                                e8.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
                        }),
                            tG.clear(),
                            no({ disabledLocalVideos: t }, e, !1);
                    })(),
                    ng();
        }
    },
    AUDIO_SET_TEMPORARY_SELF_MUTE: function (e) {
        let { mute: t } = e;
        (td = t), e8.eachConnection(t6);
    },
    AUDIO_TOGGLE_SELF_MUTE: function (e) {
        let { context: t, playSoundEffect: n } = e,
            { mute: i, deaf: r } = t1(t);
        if (t === e$.x.DEFAULT && (eN.A.requestPermission(eW.iL.AUDIO), t_)) return !1;
        (i = !r && !i) || (r = !1), n || (tm = !0), no({ mute: i, deaf: r }, t), e8.eachConnection(t6);
    },
    AUDIO_SET_SELF_MUTE: function (e) {
        let { context: t, mute: n, playSoundEffect: i } = e;
        no({ mute: n }, t), i || (tm = !0), e8.eachConnection(t6);
    },
    AUDIO_TOGGLE_SELF_DEAF: function (e) {
        let { context: t } = e;
        no({ deaf: !t1(t).deaf }, t), e8.eachConnection(t6);
    },
    AUDIO_TOGGLE_LOCAL_MUTE: function (e) {
        let { context: t, userId: n } = e;
        if (n === eG.default.getId()) return;
        let { localMutes: i } = t1(t);
        i[n] ? delete i[n] : (i[n] = !0),
            no({ localMutes: i }, t),
            e8.eachConnection((e) => e.setLocalMute(n, i[n] || !1), t);
    },
    AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
        let { context: t, userId: n, videoToggleState: i, persist: r, isAutomatic: s } = e;
        A()(!(r && s), "These are not allowed to both be true.");
        let a = i === eO.bb8.DISABLED,
            { disabledLocalVideos: o } = t1(t),
            l = o[n] ?? !1,
            u = tG.has(n),
            c = i === eO.bb8.AUTO_ENABLED || i === eO.bb8.MANUAL_ENABLED;
        eZ.info(`disableVideo=${a} currentlyDisabled=${l} currentlyAutoDisabled=${u}, isVideoShown=${c}`),
            A()(!(u && !l), "If you are auto-disabled, then you are also disabled.");
        let d = a !== l,
            _ = t === e$.x.DEFAULT,
            f = s && d && _,
            h = r && d && _;
        eZ.info(`changed=${d} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${f} isManualToggleByUser=${h}`);
        let { videoToggleStateMap: p } = t1(t);
        if (
            (p[n] === eO.bb8.AUTO_PROBING &&
                i === eO.bb8.AUTO_ENABLED &&
                (0, eS.A)(n, a ? e$.Al.AUTO_DISABLE : e$.Al.AUTO_ENABLE, c),
            (p[n] = i),
            no({ videoToggleStateMap: p }, t, r),
            i === eO.bb8.AUTO_PROBING
                ? eH.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
                : eH.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
            tF ||
                (eZ.info(`isAutoDisableAllowed=${tF} - disabling VideoHealthManager`),
                eH.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
            f)
        ) {
            if ((!a && !u) || (a && !tF)) return;
            (0, eS.A)(n, a ? e$.Al.AUTO_DISABLE : e$.Al.AUTO_ENABLE, c), a ? tG.add(n) : tG.delete(n);
        } else
            h &&
                (u && !a
                    ? (eZ.info("disallowing auto-disable for this session because of manual override by user"),
                      (tF = !1),
                      eH.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                      (0, eS.A)(n, e$.Al.MANUAL_REENABLE, c))
                    : (0, eS.A)(n, a ? e$.Al.MANUAL_DISABLE : e$.Al.MANUAL_ENABLE, c));
        _ && !a && tG.delete(n),
            a ? (o[n] = !0) : delete o[n],
            no({ disabledLocalVideos: o }, t, r),
            e8.eachConnection((e) => e.setLocalVideoDisabled(n, o[n] ?? !1), t);
    },
    AUDIO_SET_LOCAL_VOLUME: function (e) {
        let { context: t, userId: n, volume: i } = e;
        if (n === eG.default.getId()) return;
        let r = t === e$.x.STREAM ? e$.Cn : e$.Hz,
            { localVolumes: s } = t1(t);
        i === r ? delete s[n] : (s[n] = i),
            no({ localVolumes: s }, t),
            e8.eachConnection((e) => e.setLocalVolume(n, i), t);
    },
    AUDIO_SET_AUDIO_MIXER_SETTINGS: function (e) {
        let { context: t, settings: n } = e;
        no({ audioMixerSettings: n }, t), e8.setAudioMixerOptions(n);
    },
    AUDIO_SET_LOCAL_PAN: function (e) {
        let { context: t, userId: n, left: i, right: r } = e,
            { localPans: s } = t1(t);
        (s[n] = { left: i, right: r }), no({ localPans: s }, t), e8.eachConnection((e) => e.setLocalPan(n, i, r), t);
    },
    AUDIO_SET_MODE: function (e) {
        let { context: t, mode: n, options: i } = e;
        no({ mode: n, modeOptions: { ...i, updatedAt: Date.now() } }, t), e8.eachConnection(t2);
    },
    AUDIO_SET_INPUT_VOLUME: function (e) {
        let { volume: t } = e;
        no({ inputVolume: t3(t) }), e8.setInputVolume(t);
    },
    AUDIO_SET_OUTPUT_VOLUME: function (e) {
        let { volume: t } = e;
        no({ outputVolume: t }), e8.setOutputVolume(t);
    },
    AUDIO_SET_INPUT_DEVICE: function (e) {
        let { id: t } = e;
        (t = n_(ta, t)),
            (tr = performance.now()),
            no({ inputDeviceId: t }),
            nh(t),
            e8.eachConnection(nn),
            (l = void 0),
            (u = void 0),
            tK.stop(),
            (tW = !1);
        let { resetSilenceWarningOnDeviceChange: n } = e_.A.getConfig({
            location: "MediaEngineStore.handleSetInputDevice",
        });
        n && ((tS = !1), o.reset());
    },
    AUDIO_SET_OUTPUT_DEVICE: function (e) {
        let { id: t } = e;
        no({ outputDeviceId: (t = n_(to, t)) }), e8.setAudioOutputDevice(t);
    },
    AUDIO_SET_ACTIVE_INPUT_PROFILE: function (e) {
        let { inputProfile: t } = e;
        no({ activeInputProfile: t });
        let n = t1();
        e8.eachConnection((e) => {
            t2(e), nn(e);
        }),
            e8.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
            nI();
    },
    AUDIO_SET_ECHO_CANCELLATION: function (e) {
        let t = no({ echoCancellation: e.enabled });
        e8.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), nI(), nA(e.location);
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION: function (e) {
        let t;
        (t = no({ sidechainCompression: e.enabled })), e8.setSidechainCompression(t.sidechainCompression);
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function (e) {
        let t = no({ sidechainCompressionStrength: e.strength });
        e8.setSidechainCompressionStrength(t.sidechainCompressionStrength);
    },
    AUDIO_SET_LOOPBACK: function (e) {
        let { enabled: t, loopbackReason: n } = e;
        return t ? tV.add(n) : tV.delete(n), nI();
    },
    AUDIO_SET_NOISE_SUPPRESSION: function (e) {
        let t = no({ noiseSuppression: e.enabled });
        e8.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), nI(), nA(e.location);
    },
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function (e) {
        let t = no({ automaticGainControl: e.enabled });
        e8.eachConnection((e) => ne(e, t.automaticGainControl)), nI(), nA(e.location);
    },
    AUDIO_SET_NOISE_CANCELLATION: function (e) {
        let t = no({ noiseCancellation: e.enabled });
        e8.eachConnection((e) => nt(e, t.noiseCancellation)), nI(), nA(e.location);
    },
    AUDIO_SET_KRISP_MODEL_OVERRIDE: function (e) {
        ey.A.setKrispModelOverride(e.model), (_ = e.model), nI();
    },
    AUDIO_SET_DISPLAY_SILENCE_WARNING: function (e) {
        no({ silenceWarning: e.enabled });
    },
    AUDIO_SET_DEBUG_LOGGING: function (e) {
        e8.setDebugLogging(e.enabled);
    },
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: function (e) {
        let { level: t } = e;
        (d = t), ey.A.setKrispSuppressionLevel(t);
    },
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: function (e) {
        (0, E.isWeb)() || ((tb = e.enabled), e8.setNoiseCancellationEnableStats?.(e.enabled));
    },
    MEDIA_ENGINE_SET_VIDEO_HOOK: function (e) {
        no({ videoHook: e.enabled });
    },
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function (e) {
        no({ experimentalSoundshare2: e.enabled });
    },
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: function (e) {
        let { enabled: t } = e;
        no({ useSystemScreensharePicker: t });
    },
    AUDIO_SET_ATTENUATION: function (e) {
        let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i } = e,
            r = no({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i });
        e8.eachConnection((e) =>
            e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers),
        );
    },
    AUDIO_SET_QOS: function (e) {
        let { enabled: t } = e;
        no({ qos: t }), e8.eachConnection((e) => e.setQoS(t));
    },
    MEDIA_ENGINE_DEVICES: function (e) {
        let { inputDevices: t, outputDevices: n, videoDevices: i } = e,
            r = ta;
        if (((ta = nd(t, eq.intl.string(eq.t["/QIjDA"]))), !T().isEqual(ta, r))) {
            let e = t1();
            nh(n_(ta, e.inputDeviceId)), e8.eachConnection(nn);
        }
        !(function (e) {
            let t = to;
            if (((to = nd(e, eq.intl.string(eq.t.xlUg0v))), !T().isEqual(to, t))) {
                let e = t1(),
                    n = n_(to, e.outputDeviceId);
                e8.setAudioOutputDevice(n);
                let i = np(t),
                    r = np(to);
                i !== r &&
                    e8.eachConnection((e) => {
                        e.context === e$.x.STREAM && e.setSoundshareDiscardRearChannels(r);
                    });
            }
        })(n);
        tT = i.length > 0;
        let s = tl;
        if (((tl = nd(i, eq.intl.string(eq.t.WKWARY))), th && !T().isEqual(tl, s))) {
            let e = void 0 !== tl[tp],
                t = tp === e$.dx && s[e$.dx]?.disabled,
                n = "Firefox" === N().name && "" === tp && s[tp]?.name === "Default" && !s[tp]?.disabled;
            t4(e || t || n);
        }
    },
    AUDIO_VOLUME_CHANGE: function (e) {
        let { inputVolume: t, outputVolume: n } = e;
        no({ inputVolume: t3(t), outputVolume: n });
    },
    AUDIO_RESET: function () {
        R.w.remove(eX), location.reload();
    },
    AUDIO_INPUT_DETECTED: function (e) {
        let { inputDetected: t } = e;
        if (null == t) return !1;
        if (((tN = !0 !== tS && !t), t)) (tS = !0), (tW = !1), tK.stop(), ty.stop();
        else if (t1().mode === eO.TBI.VOICE_ACTIVITY && tS) {
            let { enableHardwareSilenceWarning: e, resetSilenceWarningAfterNMinutes: t } = e_.A.getConfig({
                location: "MediaEngineStore.handleInputDetected",
            });
            e &&
                tK.start(e2, () => {
                    ev.default.track(eO.HAw.HARDWARE_MUTE_GUESSED, {
                        input_device_name: ta[n_(ta, t1().inputDeviceId)]?.name,
                        rtc_connection_id: eH.A.getRTCConnectionId(),
                    }),
                        (tW = !0),
                        i.emitChange();
                }),
                null != t &&
                    ty.start(t * ex.A.Millis.MINUTE, () => {
                        (tS = !1), o.reset();
                    });
        }
    },
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: function (e) {
        let { osVolume: t, osMuted: n } = e;
        (u = t), (l = n);
    },
    AUDIO_SET_SUBSYSTEM: function (e) {
        ny(e.subsystem);
    },
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: function (e) {
        let t = e.bypassEnabled;
        no({ bypassSystemInputProcessing: t }), e8.setAudioInputBypassSystemProcessing(t), nA(e.location);
    },
    MEDIA_ENGINE_SET_AUDIO_ENABLED: function (e) {
        (tt = e.enabled), e.unmute && no({ mute: !1, deaf: !1 }), e8.eachConnection(t6);
    },
    MEDIA_ENGINE_SET_VIDEO_ENABLED: function (e) {
        let { enabled: t } = e;
        eN.A.requestPermission(eW.iL.CAMERA), t4(t);
    },
    MEDIA_ENGINE_PERMISSION: function (e) {
        let { kind: t, granted: n } = e;
        if (!n)
            switch (t) {
                case "audio":
                    (tt = !1), e8.eachConnection(t6);
                    break;
                case "video":
                    t4(!1);
            }
    },
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
        let { settings: t } = e;
        if (t?.desktopSettings != null) {
            let e = null,
                n = null,
                { sourceId: i, sound: r } = t.desktopSettings,
                a = t.context ?? e$.x.DEFAULT,
                o = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
                l = eP.A.getPidFromDesktopSource(i);
            E.isPlatformEmbedded && ({ soundshareId: e, soundshareSession: n } = nm(l, r)),
                a !== ti && (null != s && e8.setGoLiveSource(null, ti), (ti = a)),
                t4(a === e$.x.STREAM && th, {
                    desktopSource: { id: i, sourcePid: l, soundshareId: e, soundshareSession: n },
                    quality: { resolution: o.resolution, frameRate: o.frameRate },
                });
        } else if (t?.cameraSettings != null) {
            let e = t.context ?? e$.x.DEFAULT,
                { videoDeviceGuid: n, audioDeviceGuid: i } = t.cameraSettings,
                r = e === e$.x.STREAM && th,
                s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
            t4(r, {
                cameraSource: { videoDeviceGuid: n, audioDeviceGuid: i },
                quality: { resolution: s.resolution, frameRate: s.frameRate },
            });
        } else t4(th, null);
    },
    MEDIA_ENGINE_SET_VIDEO_DEVICE: function (e) {
        let { id: t } = e;
        no({ videoDeviceId: (t = n_(tl, t)) }), t4();
    },
    MEDIA_ENGINE_INTERACTION_REQUIRED: function (e) {
        return tn !== e.required && ((tn = e.required), e.required || e8.interact(), !0);
    },
    USER_SETTINGS_MODAL_INIT: nv,
    USER_SETTINGS_MODAL_SET_SECTION: nv,
    CERTIFIED_DEVICES_SET: function () {
        return e8.eachConnection(nn), !1;
    },
    RPC_APP_CONNECTED: function (e) {
        let { application: t } = e;
        te.add(t.id);
    },
    RPC_APP_DISCONNECTED: function (e) {
        let { application: t } = e;
        te.delete(t.id);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { mediaEngineState: t } = e;
        (e9 = t.settingsByContext),
            (ta = t.inputDevices),
            (to = t.outputDevices),
            (tB = t.appSupported),
            (tO = t.krispModuleLoaded),
            (c = t.krispVersion),
            (ti = t.goLiveContext);
    },
    APP_STATE_UPDATE: function (e) {
        let { state: t } = e,
            n = B.A.isEnabled();
        if (t === eO.g6G.BACKGROUND && th && !n) (tI = !0), t4(!1);
        else {
            if (t !== eO.g6G.ACTIVE || !tI) return !1;
            (tI = !1), t4(!0);
        }
        return !0;
    },
    SET_CHANNEL_BITRATE: function (e) {
        e8.eachConnection((t) => t.setBitRate(e.bitrate));
    },
    SET_VAD_PERMISSION: function (e) {
        let { hasPermission: t } = e,
            n = !t;
        if (n === t_) return !1;
        (t_ = n), e8.eachConnection(t6);
    },
    SET_NATIVE_PERMISSION: function (e) {
        let { state: t, permissionType: n } = e,
            i = t === eW.hL.ACCEPTED;
        switch (n) {
            case eW.iL.AUDIO:
                (tk = !0), e8.eachConnection(t6);
                break;
            case eW.iL.CAMERA:
                !i && th && t4(!1);
                break;
            default:
                return !1;
        }
    },
    SET_CHANNEL_VIDEO_QUALITY_MODE: function (e) {
        e8.eachConnection((t) => t.applyVideoQualityMode(e.mode));
    },
    MEDIA_ENGINE_SET_AEC_DUMP: function (e) {
        let { enabled: t } = e,
            n = no({ aecDumpEnabled: t });
        e8.setAecDump(n.aecDumpEnabled);
    },
    MEDIA_ENGINE_SET_OPENH264_ENABLED: function (e) {
        let { enabled: t } = e;
        no({ openH264Enabled: t }), m.Ay?.setOpenH264Enabled?.(t);
    },
    MEDIA_ENGINE_RESET_SETTINGS: function (e) {
        let { overrides: t } = e;
        if (__OVERLAY__) return !1;
        (e9 = Object.values(e$.x).reduce((e, n) => {
            let i = e4();
            return (e[n] = T().merge(i, t[n])), e;
        }, {})),
            R.w.set(eX, e9),
            nl();
    },
    CHANNEL_DELETE: function () {
        if ((!th && null == s) || null != eH.A.getRTCConnectionId()) return !1;
        t4(!1, null);
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: function (e) {
        if (e.code === e$.CO.KRISP_CPU_OVERUSE) {
            (tX.noiseCancellation = !1), (tX.noiseSuppression = !0);
            let e = t1();
            return e8.eachConnection((t) => nt(t, e.noiseCancellation)), nI(), nA(), !0;
        }
        return !1;
    },
    MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR: function (e) {
        return (
            e.code === e$.CO.KRISP_VAD_CPU_OVERUSE &&
            ((tX.modeOptions = { vadUseKrisp: !1 }), e8.eachConnection((e) => t2(e)), !0)
        );
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function () {
        return !!tL && ((tL = !1), !0);
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
        let { settings: t } = e;
        e8.applyMediaFilterSettings(t).finally(() => {
            (tw = !1), i.emitChange();
        });
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function () {
        tw = !0;
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function () {
        tw = !1;
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            local: n,
            wasSaved: i,
        } = e;
        if (t !== eK.oD.PRELOADED_USER_SETTINGS || n || null != i) return !1;
        nE(!0);
    },
    CLIPS_INIT: function (e) {
        let { sourceId: t, applicationName: n, quality: r } = e;
        if (!(0, k.Ao)() || null == L.A) return !1;
        null != a &&
            (e8.setClipsSource(null),
            (0, E.isWindows)() &&
                (null != a.desktopSource.soundshareId
                    ? w.c1(a.desktopSource.soundshareId)
                    : null != a.desktopSource.sourcePid && t1().videoHook && w.c1(a.desktopSource.sourcePid)));
        let s = eP.A.getPidFromDesktopSource(t),
            { soundshareId: o, soundshareSession: l } = nm(s, !0);
        a = { desktopSource: { id: t, sourcePid: s, soundshareId: o, soundshareSession: l }, quality: r };
        let u = tQ("MediaEngineStore clips"),
            c = t1().videoHook,
            d = !c || !J.getConfig({ location: "handleClipsInit" }).enabled,
            _ = c && ep.getConfig({ location: "handleClipsInit" }).enabled;
        e8.setClipsSource({
            desktopDescription: {
                id: a.desktopSource.id,
                soundshareId: a.desktopSource.soundshareId,
                useVideoHook: c,
                useHookFramePacer: d,
                useGraphicsCapture: ni(),
                useCaptureDeviceForEncode: !1,
                useLoopback: i.getExperimentalSoundshare(),
                useQuartzCapturer: !0,
                allowScreenCaptureKit: nr(),
                videoHookStaleFrameTimeoutMs: 500,
                graphicsCaptureStaleFrameTimeoutMs: eJ,
                hdrCaptureMode: u,
                videoHookAllowDx12: _,
            },
            quality: r,
            applicationName: n,
            videoEncoderExperiments: i.getVideoEncoderExperiments(e$.x.STREAM, "streamer"),
        });
    },
    CLIPS_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        !1 === t.decoupledClipsEnabled && ((a = null), e8.setClipsSource(null));
    },
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function (e) {
        tY = e.enabled;
    },
    MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: function (e) {
        let { deviceId: t, active: n, available: i } = e;
        tP[t] = { active: n, available: i };
    },
})),
    (o = new el(e8, i));
let nb = i;
