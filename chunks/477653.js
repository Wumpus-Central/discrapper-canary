let i, r, a, s, l, o, d, c, u, _, E, A;
(n.d(t, { yz: () => e4, hp: () => no, Ay: () => nF }), n(323874), n(14289), n(35956), n(321073));
var h,
    f = n(823598),
    I = n(626584),
    p = n(723702),
    m = n(19575);
(0, f.WQ)({
    supported() {
        try {
            if (__OVERLAY__);
            else if (p.isPlatformEmbedded) {
                let e = (0, f.lE)();
                if (null == e.VoiceConnection) throw Error("voe function missing");
                return !0;
            }
        } catch (e) {
            new I.A("injectMediaEngine").error("Potentially corrupt installation:", e.message);
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
var T = n(284009),
    g = n.n(T),
    S = n(435558),
    N = n.n(S),
    C = n(481613),
    O = n.n(C),
    R = n(299855),
    L = n.n(R),
    y = n(17928),
    D = n(205693),
    b = n(506774),
    v = n(451988),
    P = n(73153),
    M = n(77729),
    U = n(719129),
    w = n(894539),
    G = n(124838),
    x = n(738935),
    k = n(680725),
    F = n(487329),
    B = n(736056),
    V = n(6494),
    H = n(952818),
    j = n(540305),
    W = n(945810);
function Y(e) {
    return { agc2Enabled: !0, noiseCancellationDuringProcessing: !0, vadKrispActivationThreshold: e };
}
(0, W.mj)({
    kind: "user",
    name: "2026-09-agc2-mobile",
    defaultConfig: { agc2Enabled: !1, noiseCancellationDuringProcessing: !1, vadKrispActivationThreshold: 0.5 },
    variations: { 1: Y(0.4), 2: Y(0.5), 3: Y(0.6), 4: Y(0.7) },
});
let K = (0, W.mj)({
        name: "2026-06-av1-encode-linux",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    $ = { probeAudioEffects: !1 },
    z = (0, W.mj)({
        name: "2026-03-audio-effects-probe",
        kind: "user",
        defaultConfig: $,
        variations: { 1: { ...$, probeAudioEffects: !0 } },
    });
var X = n(403362);
let q = (0, W.mj)({
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
function Z(e, t) {
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
            (0, X.xb)(e);
    }
}
let Q = (0, W.mj)({
    name: "2025-08-browser-hevc",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var J = n(240921);
let ee = (0, J.Ay)({
        kind: "user",
        name: "2025-11-global-frame-pool-lock",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    et = (0, W.mj)({
        name: "2026-02-go-live-hdr",
        kind: "user",
        defaultConfig: { hdrCaptureMode: "never" },
        variations: { 1: { hdrCaptureMode: "always" }, 2: { hdrCaptureMode: "permittedDevicesOnly" } },
    }),
    en = (0, W.mj)({
        name: "2026-03-ios-audio-interrupt-handling",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var ei = n(574381),
    er = n(941426),
    ea = n(325278);
let es = new er.Vy("InputWatcher");
class el {
    mediaEngine;
    mediaEngineStore;
    stateChangeTimeout = new v.Ep();
    inputDetected = void 0;
    lastUpdateTime = performance.now();
    constructor(e, t) {
        ((this.mediaEngine = e), (this.mediaEngineStore = t), this.mediaEngine.on(D.bg.Silence, this.handleSilence));
    }
    reset() {
        (this.stateChangeTimeout.stop(),
            null != this.inputDetected && this.handleSilence(!this.inputDetected),
            (this.inputDetected = void 0));
    }
    fetchInputDeviceOSConfig = async () => {
        if ((0, ei.uF)() && L().satisfies(M.A?.os.release, ea.PH))
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
                    P.h.dispatch({ type: "AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED", osVolume: i, osMuted: r });
                }
            } catch (e) {
                es.warn(`Failed to get device OS volume and/or mute state: ${e}`);
            }
    };
    handleSilence = (e) => {
        let t = !e;
        this.stateChangeTimeout.start(t ? 1500 : 5e3, async () => {
            (es.info("Silence:", e),
                (this.inputDetected = t),
                (this.lastUpdateTime = performance.now()),
                e && (await this.fetchInputDeviceOSConfig()),
                P.h.dispatch({
                    type: "AUDIO_INPUT_DETECTED",
                    inputDetected: this.inputDetected,
                    lastUpdateTime: this.lastUpdateTime,
                }));
        });
    };
}
let eo = [
        { name: "small_NC_8k", maxSampleRate: 8e3, filename: "krisp-nc-o-nb-v2.kef" },
        { name: "small_NC", maxSampleRate: 16e3, filename: "krisp-nc-o-lite-v1.kef" },
        { name: "full_NC", maxSampleRate: 96e3, filename: "krisp-nc-o-med-v7-fp16.kef" },
    ],
    ed = (0, J.Ay)({
        kind: "user",
        name: "2025-10-low-latency-rate-control",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var ec = n(140175);
(0, W.mj)({
    name: "2026-02-mobile-volume-output-slider-removal",
    kind: "user",
    defaultConfig: { audioOutputPresent: !0, nonContextualStreamOutputPresent: !0, showTileVolumeIndicator: !1 },
    variations: { 1: { audioOutputPresent: !1, nonContextualStreamOutputPresent: !1, showTileVolumeIndicator: !0 } },
});
let eu = (0, W.mj)({
        kind: "user",
        name: "2026-08-mute-aware-noise-cancellation",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    e_ = (0, J.Ay)({
        kind: "user",
        name: "2026-07-nvenc-reconstructed-frames",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eE = (0, W.mj)({
        name: "2026-06-upscale-small-captured-frames",
        kind: "user",
        defaultConfig: { minCaptureWidth: 0, minCaptureHeight: 0 },
        variations: { 1: { minCaptureWidth: 130, minCaptureHeight: 130 } },
    }),
    eA = (0, W.mj)({
        name: "2026-03-video-capture-device-no-reuse",
        kind: "user",
        defaultConfig: { overrideDeviceReuse: !1 },
        variations: { 1: { overrideDeviceReuse: !0 } },
    });
var eh = n(625075);
let ef = (0, W.mj)({
        name: "2026-04-video-hook-dx12",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eI = (0, W.mj)({
        name: "2026-02-wgc-dirty-regions-all",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    ep = (0, W.mj)({
        name: "2026-06-wmf-cpu-encode-intel",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    em = (0, W.mj)({
        name: "2025-12-wmf-gpu-encode",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function eT(e) {
    return em.getConfig({ location: e });
}
let eg = (0, W.mj)({
    name: "2026-01-wmf-gpu-encode-intel",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eS = n(75076),
    eN = n(674966),
    eC = n(559633),
    eO = n(205106),
    eR = n(174459),
    eL = n(652215);
let ey = new er.Vy("AudioEffects");
async function eD(e, t, n) {
    if (!(0, ei.uF)()) return Promise.reject(Error("Audio effects querying not supported on non-Windows platforms"));
    if (!L().satisfies(M.A.os.release, ">=10.0.22000"))
        return Promise.reject(Error("Audio effects querying likely not supported on this Windows version."));
    try {
        let i = await n.getDeviceAudioEffects(e);
        return (
            P.h.dispatch({ type: "MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS", deviceId: t, ...i }),
            eR.default.track(eL.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, {
                succeeded: !0,
                active_effects: i.active,
                available_effects: i.available,
            }),
            i
        );
    } catch (e) {
        (ey.error("Failed to probe audio effects for device", e),
            eR.default.track(eL.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, { succeeded: !1 }));
    }
}
var eb = n(967347),
    ev = n(617617),
    eP = n(125325),
    eM = n(353835),
    eU = n(927813),
    ew = n(38405),
    eG = n(350535),
    ex = n(280450),
    ek = n(131319),
    eF = n(347481),
    eB = n(734057),
    eV = n(763827),
    eH = n(287809),
    ej = n(117549),
    eW = n(765682),
    eY = n(355097),
    eK = n(621380),
    e$ = n(731854),
    ez = n(105292);
let eX = new I.A("MediaEngineStore"),
    eq = "MediaEngineStore",
    eZ = {
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
    eQ = { left: 1, right: 1 },
    eJ = 5 * eU.A.Millis.SECOND,
    e0 = 2 * eU.A.Millis.SECOND,
    e1 = 30 * eU.A.Millis.SECOND,
    e2 = "https://ciscobinary.openh264.org/libopenh264-2.7.0-linux64.8.so.bz2",
    e3 = 0;
var e4 =
    (((h = {}).WEBCAM = "WEBCAM"),
    (h.INTEGRATED = "INTEGRATED"),
    (h.BLUETOOTH = "BLUETOOTH"),
    (h.AIRPLAY = "AIRPLAY"),
    (h.HEADSET = "HEADSET"),
    h);
function e5() {
    return {
        mode: eL.TBI.VOICE_ACTIVITY,
        modeOptions: {
            threshold: -60,
            autoThreshold: p.isPlatformEmbedded || __OVERLAY__,
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
let e6 = {
        [eK.m.CUSTOM]: {},
        [eK.m.VOICE_ISOLATION]: {
            modeOptions: { autoThreshold: !0, vadUseKrisp: !0 },
            echoCancellation: !0,
            noiseSuppression: !1,
            automaticGainControl: !0,
            noiseCancellation: !0,
            bypassSystemInputProcessing: !0,
        },
        [eK.m.STUDIO]: {
            mode: eL.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    e7 = { modeOptions: { vadUseKrisp: !1 }, noiseCancellation: !1, noiseSuppression: !0 },
    e8 = (0, D.hB)((0, D.WI)());
function e9(e) {
    return eh.k.getConfig({ location: e }).videoEnabled;
}
eX.enableNativeLogger(!0);
let te = {},
    tt = new Set([e$.x.DEFAULT]),
    tn = e8.supports(e$.O5.AUTO_ENABLE),
    ti = !1,
    tr = e$.x.STREAM,
    ta = 0,
    ts = !1,
    tl = performance.now(),
    to = null,
    td = { [e$.dx]: nh("No Input Devices", e$.oh.AUDIO_INPUT) },
    tc = { [e$.dx]: nh("No Output Devices", e$.oh.AUDIO_OUTPUT) },
    tu = { [e$.dx]: nh("No Video Devices", e$.oh.VIDEO_INPUT) },
    t_ = new v.Ep(),
    tE = !1,
    tA = !1,
    th = !1,
    tf = !1,
    tI = !1,
    tp = e$.qe,
    tm = e$.qe,
    tT = !1,
    tg = !1,
    tS = new v.Ep(),
    tN = !1,
    tC = !1,
    tO = !1,
    tR = !1,
    tL = !1,
    ty = !1,
    tD = !1,
    tb = !1,
    tv = [],
    tP = !1,
    tM = null,
    tU = !1,
    tw = !1,
    tG = !1,
    tx = {},
    tk = null,
    tF = null,
    tB = !1;
(eN.A.hasPermission(eW.iL.AUDIO, { showAuthorizationError: !1 }),
    eN.A.hasPermission(eW.iL.CAMERA, { showAuthorizationError: !1 }));
let tV = new Set(),
    tH = !1,
    tj = new Set(),
    tW = {},
    tY = null,
    tK = null,
    t$ = null,
    tz = !1,
    tX = !0,
    tq = !1,
    tZ = !1,
    tQ = !1,
    tJ = !1,
    t0 = {};
function t1(e) {
    return (function (e) {
        let { location: t } = e;
        return et.getConfig({ location: t });
    })({ location: e }).hdrCaptureMode;
}
async function t2() {
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
function t3() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT,
        t = te[e];
    return (null == t && ((t = e5()), (te[e] = t)), t);
}
function t4() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT,
        t = t3(e);
    if (e === e$.x.STREAM) return { ...t, modeOptions: { ...t.modeOptions, vadLeading: 0 } };
    let n = e6[t.activeInputProfile ?? eK.m.CUSTOM],
        i = nv() ? t0 : e7,
        r = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}), ...(i.modeOptions ?? {}) };
    return (
        ((null == r.vadKrispActivationThreshold && !0 === n.automaticGainControl) || !0 === t.automaticGainControl) &&
            (r.vadKrispActivationThreshold = 0.8),
        { ...t, ...n, ...i, modeOptions: r }
    );
}
function t5(e) {
    let t = t4(e.context),
        n = t.mode;
    (e.context === e$.x.DEFAULT && (0, ec.N)(e8, !1, !1),
        e.setInputMode(n, {
            vadThreshold: t.modeOptions.threshold,
            vadAutoThreshold: t.modeOptions.autoThreshold,
            vadUseKrisp: t.modeOptions.vadUseKrisp && nv(),
            vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? 0.5,
            vadLeading: t.modeOptions.vadLeading,
            vadTrailing: t.modeOptions.vadTrailing,
            pttReleaseDelay: Math.round(t.modeOptions.delay),
        }));
}
function t6(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e$.Hz;
    return N().clamp(e, 0, t);
}
function t7(e) {
    let t = t4(e.context),
        n = !tn || t.mute || t.deaf;
    switch (e.context) {
        case e$.x.DEFAULT:
            n = n || tE || tA || th || !eN.A.didHavePermission(eW.iL.AUDIO);
            break;
        case e$.x.STREAM:
            n = !0;
            break;
        default:
            e.context;
    }
    if ((e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === e$.x.DEFAULT)) {
        let { enabled: t } = (function (e) {
            let { location: t } = e;
            return eu.getConfig({ location: t });
        })({ location: "updateConnectionMuteDeaf" });
        (e.setSkipNoiseCancellationIfMuted(t && n), w.A.updateNativeMute());
    }
}
function t8() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tI,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        n = a;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, p.isWindows)()
                ? U.c1(n.desktopSource.soundshareId)
                : null != n.desktopSource.sourcePid && t4().videoHook && U.c1(n.desktopSource.sourcePid),
            e8.setGoLiveSource(null, tr)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            e8.setGoLiveSource(null, tr),
        tI || e)
    ) {
        let t = t4().videoDeviceId;
        (tI && t === e$.dx && tm === e$.dx && tp !== e$.qe ? (t = tp) : (tm = t),
            (tp = (tI = e) ? nT(tu, t) : e$.qe),
            e8.setVideoInputDevice(tp));
    }
    if (((a = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = t1("MediaEngineStore go live"),
                r = t4().videoHook,
                a = no(),
                s = a ? ((0, p.isWindows)() && L().satisfies(M.A?.os.release, ea.fG) ? ea.zl : ea.eg) : 0,
                l = !1;
            (0, p.isWindows)() && s >= ea.zl && (l = !0 === tK || eI.getConfig({ location: "updateVideo" }).enabled);
            let o = r && ef.getConfig({ location: "updateVideo" }).enabled,
                { minCaptureWidth: d, minCaptureHeight: c } = eE.getConfig({ location: "updateVideo" });
            e8.setGoLiveSource(
                {
                    desktopDescription: {
                        id: t.desktopSource.id,
                        soundshareId: t.desktopSource.soundshareId,
                        useVideoHook: r,
                        useGraphicsCapture: a,
                        useGraphicsCaptureApiLevel: s,
                        useCaptureDeviceForEncode: (0, p.isWindows)(),
                        useLoopback: i.getExperimentalSoundshare(),
                        useQuartzCapturer: !0,
                        allowScreenCaptureKit: nd(),
                        videoHookStaleFrameTimeoutMs: 500,
                        graphicsCaptureStaleFrameTimeoutMs: eJ,
                        hdrCaptureMode: n,
                        enableGlobalFramePoolLock: (function (e) {
                            let { location: t, disable: n = !1 } = e;
                            return n ? ee.definition.defaultConfig : ee.getConfig({ location: t });
                        })({ location: "updateVideo" }).enabled,
                        useGraphicsCaptureDirtyRegions: l,
                        videoHookAllowDx12: o,
                        minCaptureWidth: d,
                        minCaptureHeight: c,
                    },
                    quality: e,
                },
                tr,
            );
        }
        null != t.cameraSource &&
            e8.setGoLiveSource(
                {
                    cameraDescription: {
                        videoDeviceGuid: t.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: !1 === t.cameraSource.sound ? "" : t.cameraSource.audioDeviceGuid,
                    },
                    quality: e,
                },
                tr,
            );
    }
}
function t9(e) {
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
let ne = new Set([
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
function nt(e, t) {
    if (
        (eX.warn(`Voice processing error: ${e}`),
        (0, F.QW)({ type: F.iy.NOISE_CANCELLER_ERROR, underlyingError: t9(e), voiceProcessingErrorDetails: t }),
        eR.default.track(eL.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
        ne.has(e))
    ) {
        tb = !0;
        return;
    }
    e === e$.CO.KRISP_VAD_CPU_OVERUSE
        ? P.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e })
        : ((tU = !0), P.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e }));
}
function nn(e, t) {
    let n = t === e$.$C.LIVE;
    (eX.warn(`Video filter error: ${e} (${n ? "live" : "preview"})`),
        n &&
            (0, F.QW)({
                type: F.iy.VIDEO_BACKGROUND_UNAVAILABLE,
                underlyingError: (function (e) {
                    switch (e) {
                        case e$.kv.UNSUPPORTED:
                            return F.B6.VideoBackgroundUnsupported;
                        case e$.kv.INIT_FAILED:
                            return F.B6.VideoBackgroundInitFailed;
                        default:
                            return;
                    }
                })(e),
            }),
        P.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_FILTER_ERROR", code: e, target: n ? "live" : "preview" }));
}
function ni(e) {
    return { enabled: e, ...(e ? eZ : { useAGC2: !1 }) };
}
function nr(e, t) {
    e.setAutomaticGainControl(ni(t));
}
function na(e, t) {
    let n = (0, eO.A)(t, i.getSystemMicrophoneMode());
    (n !== t && eX.info("Falling back to system noise suppression."),
        (t = n),
        e.setNoiseCancellation(t),
        e.setNoiseCancellationDuringProcessing(t));
}
function ns() {
    let e = t4(),
        t = e.inputDeviceId,
        n = eF.A.hasEchoCancellation(t) || e.echoCancellation,
        r = eF.A.hasNoiseSuppression(t) || e.noiseSuppression,
        { maxSampleRateHz: a, maxChannelCount: s } = (function (e, t) {
            let { location: n } = e;
            if (!Z("any", t)) return { maxSampleRateHz: 0, maxChannelCount: 0 };
            let i = (function (e) {
                let { location: t } = e;
                return q.getConfig({ location: t });
            })({ location: n });
            return Z(i.condition, t)
                ? { maxSampleRateHz: 32e3 * !!i.capSampleRate, maxChannelCount: +!!i.capChannelCount }
                : { maxSampleRateHz: 0, maxChannelCount: 0 };
        })(
            { location: "updateVoiceFidelityCaps" },
            {
                krispEnabled: (0, eO.A)(e.noiseCancellation, i.getSystemMicrophoneMode()),
                noiseSuppressionEnabled: r,
                echoCancellationEnabled: n,
            },
        );
    (e8.setVoiceSampleRateCap(a), e8.setVoiceChannelCountCap(s));
}
function nl(e) {
    let t = t4(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eF.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eF.A.hasNoiseSuppression(n) || t.noiseSuppression),
        nr(e, eF.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        na(e, t.noiseCancellation),
        ns(),
        (0, p.isWindows)() && L().satisfies(M.A?.os.release, ">=10.0.15063") && e.context === e$.x.DEFAULT)
    ) {
        let t = np(td[i.getInputDeviceId()]) || np(tc[i.getOutputDeviceId()]);
        e.setEchoReferenceMode(t ? "mix" : "auto");
    }
    if ((0, p.isWeb)()) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function no() {
    return (0, p.isWindows)() && L().satisfies(M.A?.os.release, ea.yg);
}
function nd() {
    return (0, p.isMac)() && e8.supports(e$.O5.SCREEN_CAPTURE_KIT) && L().satisfies(M.A?.os.release, ea.e);
}
function nc() {
    return (
        (0, p.isWindows)() &&
        e8.supports(e$.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        e8.supports(e$.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nu() {
    return e8.supports(e$.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function n_(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e$.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = t3(t);
    return (Object.assign(i, e), !__OVERLAY__ && n && b.w.set(eq, te), i);
}
function nE() {
    let e = t4();
    (nN(e.inputDeviceId),
        e8.setAudioOutputDevice(e.outputDeviceId),
        t8(),
        e8.setInputVolume(e.inputVolume),
        e8.setOutputVolume(e.outputVolume),
        e8.setAecDump(e.aecDumpEnabled),
        e8.setSidechainCompression(e.sidechainCompression),
        e8.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        e8.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        (0, p.isLinux)() && m.Ay?.setOpenH264Enabled?.(e.openH264Enabled));
}
function nA() {
    tn || e8.enable().then(() => P.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function nh(e, t) {
    return {
        id: e$.dx,
        deviceType: t,
        index: 0,
        name: e,
        disabled: !0,
        guid: void 0,
        hardwareId: void 0,
        containerId: void 0,
    };
}
function nf(e, t) {
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
let nI = /^HDAUDIO\\(?:SUB)?FUNC_\d+&VEN_(?:8086|1002|10DE)/;
function np(e) {
    return e?.windowsDeviceService === "voicemodvad";
}
function nm(e, t) {
    let { deviceType: n, defaultName: i } = t,
        r = e[{ audioinput: "inputDevices", audiooutput: "outputDevices", videoinput: "videoDevices" }[n]];
    if (0 === r.length) {
        let e = nh(i, n);
        return { [e.id]: e };
    }
    return N()(r)
        .map((t) => ({
            id: t.id,
            deviceType: n,
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
                    case nf(e, r):
                        return "WEBCAM";
                    case ["builtin", "displayport", "hdmi"].includes(e.macosTransportType ?? ""):
                    case null != e.hardwareId && nI.test(e.hardwareId):
                        return "INTEGRATED";
                    case N()(e.hardwareId).startsWith("BTHENUM"):
                    case ["bluetooth", "bluetoothle"].includes(e.macosTransportType ?? ""):
                        return "BLUETOOTH";
                    case ["airplay", "continuitycapturewireless"].includes(e.macosTransportType ?? ""):
                        return "AIRPLAY";
                    case "audioinput" === e.type && nf(e, i):
                    case "audiooutput" === e.type && nf(e, n):
                        return "HEADSET";
                }
            })(t, e),
            windowsDeviceService: t.windowsDeviceService,
            windowsDeviceDescription: t.windowsDeviceDescription,
            windowsDeviceInterfaceFriendlyName: t.windowsDeviceInterfaceFriendlyName,
        }))
        .keyBy("id")
        .value();
}
function nT(e, t) {
    let n = e[t] ?? e[e$.dx] ?? N()(e).values().first();
    return null != n ? n.id : t;
}
async function ng(e) {
    if (!(0, p.isWindows)() || !z.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects) return;
    let t = td[e];
    if (t?.guid != null)
        try {
            await eD(t.guid, e, e8);
        } catch (e) {
            eX.warn("Unable to query audio effects", e);
        }
}
function nS(e) {
    if (null != e) return null != e.guid && "" !== e.guid ? e.guid : e.name;
}
function nN(e) {
    (e8.setAudioInputDevice(e),
        ng(e),
        (function (e) {
            if (!(0, p.isWindows)() && !(0, p.isMac)() && !(0, p.isLinux)()) return;
            let t = nS(td[e]);
            null != t && e8.watchDeviceHardwareMutedChange?.(t);
        })(e));
}
function nC(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nO() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = ev.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let i = n === eY.W.USER ? e$.x.DEFAULT : e$.x.STREAM,
            r = i === e$.x.STREAM ? e$.Cn : e$.Hz,
            a = t[n] ?? {},
            { localMutes: s, localVolumes: l } = t4(i);
        for (let [e, t] of Object.entries(a))
            null == (0, eP.tM)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== r ? (l[e] = t.volume) : delete l[e],
                e8.eachConnection((n) => {
                    (n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted));
                }, i));
        if (e)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == a[e] &&
                    (delete s[e],
                    delete l[e],
                    e8.eachConnection((t) => {
                        (t.setLocalVolume(e, r), t.setLocalMute(e, !1));
                    }, i));
        n_({ localMutes: s, localVolumes: l }, i);
    }
}
function nR(e, t) {
    if (t) {
        let { soundshareId: t, soundshareSession: a } = (function (e) {
            if (null == i)
                return (
                    eX.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
                    { soundshareId: null, soundshareSession: "" }
                );
            {
                let t = i.getExperimentalSoundshare() ? e : eM.A.getAudioPid(e),
                    n = "";
                return (null != t && (n = eM.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n });
            }
        })(e);
        if (null != t) {
            var n, r;
            return (
                (n = t),
                (r = a),
                (0, p.isWindows)() &&
                    n > 1 &&
                    U.GH(n, { soundshare_session: r }).then((e) => {
                        null == e ||
                            H.Ay.shouldContinueWithoutElevatedProcessForPID(n) ||
                            P.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: e });
                    }),
                { soundshareId: t, soundshareSession: a }
            );
        }
    }
    return (null != e && t4().videoHook && U.GH(e), { soundshareId: null, soundshareSession: null });
}
function nL() {
    let e = e$.x.DEFAULT,
        { videoToggleStateMap: t } = t4(e);
    for (let [e, n] of Object.entries(t)) n === eL.bb8.AUTO_PROBING && delete t[e];
    n_({ videoToggleStateMap: t }, e, !1);
}
function ny(e) {
    let t = t4(),
        n = e8.getAudioSubsystem(),
        r = e8.getAudioLayer(),
        a = nT(td, t.inputDeviceId),
        s = td[a]?.name,
        l = (0, eO.A)(t.noiseCancellation, i.getSystemMicrophoneMode());
    eR.default.track(eL.HAw.VOICE_PROCESSING, {
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
function nD() {
    let e = t4(),
        t = tj.size > 0,
        n = e.inputDeviceId,
        i = eF.A.hasEchoCancellation(n) || e.echoCancellation,
        r = eF.A.hasNoiseSuppression(n) || e.noiseSuppression,
        a = ni(eF.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation;
    (e8.setLoopback(t, {
        echoCancellation: i,
        echoCancellationPreEcho: !t,
        noiseSuppression: r,
        automaticGainControlConfig: a,
        noiseCancellation: s,
    }),
        ns());
}
async function nb() {
    if (!e8.supports(e$.O5.VAAPI) || window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let e = await window.DiscordNative.processUtils.getSystemInfo();
    (e.electronGPUInfo?.gpuDevice ?? []).some((e) => 4098 === e.vendorId) &&
        ((tQ = !0), (tZ = e8.supports(e$.O5.GAMESCOPE_CAPTURE)));
}
function nv() {
    return (tD || !1) && !tb;
}
async function nP() {
    try {
        await m.Ay.ensureModule("discord_krisp");
        let e = m.Ay.requireModule("discord_krisp");
        ((tD = !0),
            (u = e.getSdkVersion?.()),
            (_ = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                ((tv = e), i.emitChange());
            }),
            i.emitChange(),
            await m.Ay.ensureModule("discord_voice"));
        let t = m.Ay.requireModule("discord_voice");
        t.setupKrispPath?.();
    } catch (t) {
        (eX.warn(`Failed to load Krisp module: ${t.message}`), ew.A.captureException(t));
        let e = e$.CO.KRISP_INIT_ERROR;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? e$.CO.KRISP_INIT_ERROR : n;
        }
        ((0, F.QW)({ type: F.iy.NOISE_CANCELLER_ERROR, underlyingError: t9(e) }),
            eR.default.track(eL.HAw.VOICE_PROCESSING, { noise_canceller_error: e }));
    } finally {
        ty = !1;
    }
}
async function nM() {
    try {
        let e,
            t = "",
            n = !1,
            i = URL.parse(e2);
        if (null === i) return void eX.log("OpenH264 URL ", i, " is invalid");
        let r = i.pathname.split("/"),
            a = r[r.length - 1].replace(".bz2", "");
        try {
            let t = await m.Ay.downloadOpenH264(
                e2,
                a,
                "1522f873a482923c5ec018a4415e1866898197528828c50f90fd300c94620df3",
                (e) => {
                    eX.log("OpenH264 download status", e);
                },
            );
            (eX.log("OpenH264 is ready", t), (n = t.fetchedFromNetwork), (e = !0));
        } catch (n) {
            (eX.error("OpenH264 download failed", n), (t = n.message), (e = !1));
        }
        if (
            (eR.default.track(eL.HAw.VIDEO_OPENH264_DOWNLOADED, {
                success: e,
                fetched_from_network: n,
                error_message: t,
            }),
            e)
        ) {
            let e = await m.Ay.cleanupUnusedOpenH264Files([a]);
            eX.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        eX.error("OpenH264 download failed", e);
    }
}
function nU(e) {
    e === e$.rB.AUTOMATIC
        ? (n_({ automaticAudioSubsystem: !0 }), nw())
        : (n_({ automaticAudioSubsystem: !1 }), e8.setAudioSubsystem(e));
}
function nw() {
    e8.queueAudioSubsystem(e$.rB.EXPERIMENTAL);
}
function nG(e) {
    let { section: t } = e;
    return (t === eL.nc_.VOICE && nA(), !1);
}
class nx extends y.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        let e;
        if (
            ((l ??= new el(e8, this)),
            t_.start(e1, () => {
                (eX.error("Device enumeration timed out"), eR.default.track(eL.HAw.DEVICE_ENUMERATION_TIMEOUT, {}));
            }),
            e8.on(D.bg.Connection, (e) => {
                let t;
                (nD(), t5(e), t7(e), nl(e));
                let n = t4();
                (e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers),
                    e.setQoS(n.qos),
                    (0, p.isWindows)() || (0, p.isLinux)()
                        ? (null != tF
                              ? tF
                              : "u" > typeof window
                                ? (tF = t2().then((e) => ((tk = e), e)))
                                : Promise.resolve(!1)
                          ).then((t) => {
                              e.setExperimentFlag(e$.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                          })
                        : (0, p.isMac)() && e.setExperimentFlag(e$.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                    (0, p.isLinux)() && n.openH264Enabled && e.setExperimentFlag(e$.fd.USE_LIBOPENH264_DECODER, !0),
                    (function (e) {
                        let { location: t, disable: n = !1 } = e;
                        return n ? ed.definition.defaultConfig : ed.getConfig({ location: t });
                    })({ location: "setupMediaEngine" }).enabled &&
                        e.setExperimentFlag(e$.fd.LOW_LATENCY_RATE_CONTROL, !0),
                    e.setExperimentFlag(e$.fd.RESET_DECODER_ON_ERRORS, !0),
                    e.setExperimentFlag(e$.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0));
                let { swallowVolumeOnlySpeakingEvents: r } = G.A.getConfig({ location: "MediaEngineStore" });
                if (
                    (r && e.setExperimentFlag(e$.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === e$.x.STREAM)
                ) {
                    let t = nC(tc);
                    e.setSoundshareDiscardRearChannels(t);
                }
                if ((0, p.isWindows)())
                    (e.setExperimentFlag(e$.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(e$.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e$.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
                else if ((0, p.isMac)())
                    (e.setExperimentFlag(e$.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e$.fd.SIGNAL_AV1_HARDWARE_DECODE, !0),
                        e.setExperimentFlag(
                            e$.fd.H265_DISABLE_ENCODE,
                            !(
                                window?.DiscordNative?.os.arch === "arm64" &&
                                L().satisfies(window?.DiscordNative?.os.release, e$.Dk)
                            ),
                        ));
                else if ((0, p.isLinux)()) {
                    let { enabled: t } = K.getConfig({ location: "MediaEngineStore" });
                    (t && e.setExperimentFlag(e$.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(e$.fd.SIGNAL_AV1_DECODE, !0));
                } else
                    ((0, p.isIOS)() || (0, p.isAndroid)()) &&
                        (e.setExperimentFlag(e$.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(e$.fd.SIGNAL_AV1_HARDWARE_DECODE, !0),
                        e.setExperimentFlag(e$.fd.H265_HARDWARE_DECODE_AVAILABLE, !0));
                if ((0, p.isWeb)()) {
                    let { enabled: t } = Q.getConfig({ location: "MediaEngineStore" });
                    e.setExperimentFlag(e$.fd.BROWSER_HEVC, t);
                }
                for (let i of ((0, p.isWindows)() &&
                    tY?.startsWith("AMD") &&
                    eT("MediaEngineStore").enabled &&
                    e.setExperimentFlag(e$.fd.WMF_GPU_ENCODE, !0),
                (0, p.isWindows)() &&
                    tY?.startsWith("Intel") &&
                    !0 === tK &&
                    1 === t$ &&
                    eg.getConfig({ location: "MediaEngineStore" }).enabled &&
                    (e.setExperimentFlag(e$.fd.WMF_GPU_ENCODE, !0), e.setExperimentFlag(e$.fd.INTEL_GPU_DISABLE, !0)),
                (0, p.isWindows)() &&
                    tY?.startsWith("Intel") &&
                    !0 === tK &&
                    1 === t$ &&
                    ep.getConfig({ location: "MediaEngineStore" }).enabled &&
                    e.setExperimentFlag(e$.fd.INTEL_GPU_DISABLE, !0),
                (0, p.isWindows)() &&
                    tY?.startsWith("Qualcomm") &&
                    eT("MediaEngineStore").enabled &&
                    e.setExperimentFlag(e$.fd.WMF_GPU_ENCODE, !0),
                e8.setHasFullbandPerformance(null === (t = (0, k.A)()) || t >= 31),
                e.setRemoteAudioHistory(1e3),
                (n = t4(e.context)),
                e.setPostponeDecodeLevel(100),
                Object.keys(n.localMutes)))
                    i !== ex.default.getId() && e.setLocalMute(i, n.localMutes[i]);
                for (let t of Object.keys(n.localVolumes))
                    t !== ex.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
                for (let t of Object.keys(n.localPans)) {
                    let i = n.localPans[t];
                    e.setLocalPan(t, i.left, i.right);
                }
                for (let t of Object.keys(n.disabledLocalVideos)) e.setLocalVideoDisabled(t, n.disabledLocalVideos[t]);
                (e.on(D.yq.Speaking, (t, n, i, r) => {
                    P.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: r });
                }),
                    e.context === e$.x.DEFAULT &&
                        ((tg = !1),
                        e.on(D.yq.SpeakingWhileMuted, () => {
                            let e = !tg;
                            ((tg = !0),
                                e && i.emitChange(),
                                tS.start(e0, () => {
                                    ((tg = !1), i.emitChange());
                                }));
                        })),
                    e.on(D.yq.DesktopSourceEnd, (t, n) => {
                        P.h.dispatch({
                            type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                            settings: { context: e.context },
                            endReason: t,
                            errorCode: n,
                        });
                    }),
                    e.on(D.yq.InteractionRequired, (e) => {
                        P.h.dispatch({ type: "MEDIA_ENGINE_INTERACTION_REQUIRED", required: e });
                    }),
                    e.on(D.yq.VideoHookInitialize, (e, t, n, i, r, s) => {
                        a?.desktopSource != null &&
                            eR.default.track(eL.HAw.VIDEOHOOK_INITIALIZED, {
                                backend: e,
                                format: t,
                                framebuffer_format: n,
                                sample_count: i,
                                success: r,
                                reinitialization: s,
                                ...(0, j.A)(a?.desktopSource),
                            });
                    }),
                    e.on(D.yq.NoiseCancellationError, nt),
                    e.on(D.yq.VoiceActivityDetectorError, nt),
                    e.on(D.yq.SdpError, (e, t, n, i) => {
                        eR.default.track(eL.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: i });
                    }),
                    e.on(D.yq.VideoState, (t) => {
                        P.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                    }),
                    e.setBitRate(ek.A.bitrate),
                    e.applyVideoQualityMode(ej.A.mode),
                    (0, p.isWindows)() &&
                        e8.supports(e$.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                        e8.setAsyncVideoInputDeviceInit(!0));
            }),
            e8.on(D.bg.DeviceChange, (e, t, n) => {
                (t_.stop(),
                    P.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n }));
            }),
            e8.on(D.bg.VolumeChange, (e, t) => {
                P.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
            }),
            e8.on(D.bg.DesktopSourceEnd, (e, t) => {
                P.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
            }),
            e8.on(D.bg.AudioPermission, (e) => {
                ((tB = !0), P.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e }));
            }),
            e8.on(D.bg.VideoPermission, (e) => {
                P.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
            }),
            e8.on(D.bg.WatchdogTimeout, async () => {
                let e;
                if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                    try {
                        await eM.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                    } catch (t) {
                        "number" == typeof t.status && (e = t.status);
                    }
                eX.warn(`Watchdog timeout, report submission status: ${e ?? 200}`);
                let t = null != M.A.processUtils.setCrashReason;
                try {
                    await eR.default.track(
                        eL.HAw.VOICE_WATCHDOG_TIMEOUT,
                        { minidump_submission_error: e, will_restart: t },
                        { flush: !0 },
                    );
                } catch (e) {
                    eX.error("Failed to flush voice watchdog timeout analytics event", e);
                }
                t &&
                    (eX.info("Relaunching app due to voice watchdog timeout"),
                    await M.A.processUtils.setCrashReason("voice-watchdog-timeout"),
                    b.w.set("discord_watchdog_restart_timestamp", Date.now().toString()),
                    M.A.app.relaunch());
            }),
            e8.on(D.bg.VideoInputInitialized, (e) => {
                eR.default.track(eL.HAw.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired
                        ? null
                        : Math.round(e.timeToFirstFrame * eU.A.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy,
                    media_session_id: eV.A.getMediaSessionId(),
                    rtc_connection_id: eV.A.getRTCConnectionId(),
                });
            }),
            e8.on(D.bg.AudioInputInitialized, (e) => {
                eR.default.track(eL.HAw.AUDIO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_initialized_ms: Math.round(e.timeToInitialized * eU.A.Millis.SECOND),
                    rtc_connection_id: eV.A.getRTCConnectionId(),
                });
            }),
            e8.on(D.bg.ClipsRecordingRestartNeeded, () => {
                P.h.dispatch({ type: "CLIPS_RESTART" });
            }),
            e8.on(D.bg.ClipsInitFailure, (e, t) => {
                let n = ta < 3;
                ((ta += 1),
                    P.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t }),
                    n
                        ? P.h.dispatch({ type: "CLIPS_RESTART" })
                        : eX.warn(
                              `Clips init failure budget exhausted (${ta} consecutive unhealthy attempts); skipping auto-restart. A settings flip / game change / app restart will retry.`,
                          ));
            }),
            e8.on(D.bg.ClipsRecordingHealthy, () => {
                0 !== ta && (eX.info(`Clips bridge reported healthy; resetting restart budget (was ${ta}).`), (ta = 0));
            }),
            e8.on(D.bg.ClipsRecordingReadyChanged, (e) => {
                ts !== e && (eX.info(`Clips recorder ready changed: ${e}`), (ts = e));
            }),
            e8.on(D.bg.ClipsBridgeIdleShutdown, () => {
                eX.info("Clips bridge idle shutdown");
            }),
            e8.on(D.bg.ClipsRecordingEnded, (e, t) => {
                s?.desktopSource?.id === e &&
                    (null != t && a?.desktopSource?.soundshareId !== t && U.c1(t), (s = null));
            }),
            e8.on(D.bg.NativeScreenSharePickerUpdate, (e, t) => {
                P.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
            }),
            e8.on(D.bg.NativeScreenSharePickerCancel, (e) => {
                P.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
            }),
            e8.on(D.bg.NativeScreenSharePickerError, (e) => {
                P.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
            }),
            e8.on(D.bg.AudioDeviceModuleError, (e, t, n) => {
                eR.default.track(eL.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
            }),
            e8.on(D.bg.VideoCodecError, (e) => {
                let t = "encode" === e.mode ? F.iy.VIDEO_ENCODE_ERROR : F.iy.VIDEO_DECODE_ERROR,
                    n = { videoCodec: e.codecStandard, errorMessage: e.message };
                (0, F.QW)(
                    t === F.iy.VIDEO_ENCODE_ERROR
                        ? { type: t, ...n, videoEncoder: e.implName }
                        : { type: t, ...n, videoDecoder: e.implName },
                );
            }),
            e8.on(D.bg.ConnectionStats, (e) => {
                P.h.dispatch({
                    type: "MEDIA_ENGINE_CONNECTION_STATS",
                    connectionStats: e.map((e) => {
                        let { stats: t, connection: n } = e;
                        return {
                            stats: t,
                            mediaEngineConnectionId: n.mediaEngineConnectionId,
                            version: e3++,
                            context: n.context,
                        };
                    }),
                });
            }),
            e8.on(D.bg.VoiceProcessingError, nt),
            e8.on(D.bg.VideoFilterError, nn),
            e8.on(D.bg.VoiceQueueMetrics, (e) => {
                let t = nk(e);
                null !== t && eR.default.track(eL.HAw.VOICE_QUEUE_METRICS, t);
            }),
            e8.setOnVideoContainerResized((e, t, n) => {
                P.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } });
            }),
            nb(),
            l.reset(),
            (0, eb.w)().then((e) => {
                if (null != e) {
                    ((tY = e.gpu_brand), (tK = e.has_intel_hybrid_igpu), (t$ = e.gpu_count));
                    let t = e.gpus ?? [];
                    tz = t.length > 0 && t.every((e) => "10de" === e.vendor_id);
                }
            }),
            e8.on(D.bg.DeviceHardwareMutedChange, (e, t) => {
                P.h.dispatch({ type: "AUDIO_INPUT_DEVICE_HARDWARE_MUTED_CHANGED", deviceGuid: e, hardwareMuted: t });
            }),
            e8.on(D.bg.SystemMicrophoneModeChange, (e) => {
                ((A = e), e8.eachConnection(nl), i.emitChange());
            }),
            null != (e = b.w.get("audio")) && (b.w.set(eq, { [e$.x.DEFAULT]: e }), b.w.remove("audio")),
            (te = b.w.get(eq) ?? {}),
            N().each(te, (e) => {
                (N().defaultsDeep(e, e5()),
                    null != e.modeOptions &&
                        "string" == typeof e.modeOptions.shortcut &&
                        (e.modeOptions.shortcut = (0, eG.OH)(e.modeOptions.shortcut)),
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
                    (0, p.isWeb)()
                        ? 1 !== e.ncUseKrispjsSettingVersion &&
                          ((e.ncUseKrispjsSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                        : 1 !== e.ncUseKrispSettingVersion &&
                          ((e.ncUseKrispSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0)));
            }),
            nE(),
            ((0, p.isWindows)() || (0, p.isLinux)() || (0, p.isMac)()) && !__OVERLAY__ && !ty && !tD
                ? ((ty = !0), nP())
                : (0, p.isWeb)() && e8.supports(e$.O5.NOISE_CANCELLATION)
                  ? ((tD = !0), i.emitChange())
                  : (0, p.isWeb)() && n_({ noiseCancellation: !1 }),
            (0, p.isLinux)() && nM(),
            nL(),
            (0, p.isDesktop)() && p.isPlatformEmbedded && !tJ)
        ) {
            async function t() {
                let e = await new Promise((e) => {
                    m.Ay.pollQueueMetrics((t) => {
                        e(t);
                    });
                });
                e.periodMs = e$.tl;
                let n = nk(e);
                (null !== n && eR.default.track(eL.HAw.VOICE_QUEUE_METRICS, n), setTimeout(t, e$.tl));
            }
            ((tJ = !0), setTimeout(t, e$.tl));
        }
        ((0, p.isWindows)() &&
            p.isPlatformEmbedded &&
            null === to &&
            e8
                .getCodecSurvey()
                .then((e) => {
                    try {
                        let t = JSON.parse(e);
                        if (null == t || null == t.available_video_decoders)
                            throw Error("decoder survey is not available");
                        to = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                    } catch (e) {
                        (eX.error("Failed to parse codec survey", e), (to = !1));
                    }
                })
                .catch((e) => {
                    (eX.error("Failed to get codec survey", e), (to = !1));
                })
                .finally(() => {
                    P.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
                }),
            (tW = {
                [e$.O5.VIDEO]: e8.supports(e$.O5.VIDEO),
                [e$.O5.DESKTOP_CAPTURE]: e8.supports(e$.O5.DESKTOP_CAPTURE),
                [e$.O5.HYBRID_VIDEO]: e8.supports(e$.O5.HYBRID_VIDEO),
            }),
            this.waitFor(ex.default, ek.A, eF.A, eB.A, x.Ay, B.A, eV.A, H.Ay, ev.A, eH.default, ej.A));
    }
    supports(e) {
        return (e !== e$.O5.VIDEO || !!e9("MediaEngineStore.supports")) && e8.supports(e);
    }
    supportsInApp(e) {
        return (e !== e$.O5.VIDEO || !!e9("MediaEngineStore.supportsInApp")) && (tW[e] || e8.supports(e));
    }
    isSupported() {
        return e8.supported();
    }
    isNoiseSuppressionSupported() {
        return e8.supports(e$.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return nv();
    }
    isNoiseCancellationError() {
        return tU;
    }
    isAutomaticGainControlSupported() {
        return e8.supports(e$.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nu() && (e8.supports(e$.O5.LEGACY_AUDIO_SUBSYSTEM) || e8.supports(e$.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return e8.supports(e$.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === e8.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return nv();
    }
    isAecDumpSupported() {
        return e8.supports(e$.O5.AEC_DUMP);
    }
    getAecDump() {
        return t4().aecDumpEnabled;
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
        return _ ?? 100;
    }
    getKrispEnableStats() {
        return tP;
    }
    isEnabled() {
        return tn;
    }
    isMute() {
        return this.isSelfMute() || tE;
    }
    isDeaf() {
        return this.isSelfDeaf() || tf;
    }
    isServerMute() {
        return tE;
    }
    isServerDeaf() {
        return tf;
    }
    hasContext(e) {
        return null != te[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT;
        return e === e$.x.DEFAULT && tA;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT;
        return (
            !this.isEnabled() ||
            t4(e).mute ||
            !eN.A.didHavePermission(eW.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === e$.x.DEFAULT && th)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tT;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tT = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && eF.A.isHardwareMute(this.getInputDeviceId());
    }
    isHardwareMuteNoticeEnabled() {
        return tX;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT;
        return !this.isSupported() || t4(e).deaf;
    }
    isVideoEnabled() {
        return tI && tC;
    }
    isVideoAvailable() {
        return Object.values(tu).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return tC;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.STREAM;
        return tr === e && null != a;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.STREAM;
        return tr === e && null != a && a.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e$.x.DEFAULT;
        return e !== ex.default.getId() && (t4(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return e8.supports(e$.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e$.x.DEFAULT;
        return t4(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e$.x.DEFAULT;
        return t4(t).videoToggleStateMap[e] ?? eL.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e$.x.DEFAULT;
        return t === e$.x.DEFAULT && tV.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT;
        return e === e$.x.DEFAULT && tV.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tw;
    }
    isNativeAudioPermissionReady() {
        return tB;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return tr;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return tl;
    }
    isH264MfDecodeAvailable() {
        return to;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e$.x.DEFAULT,
            n = t4(t).localPans[e];
        return null != n ? n : eQ;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e$.x.DEFAULT,
            n = t === e$.x.STREAM ? e$.Cn : e$.Hz,
            i = t4(t).localVolumes[e];
        return null != i ? i : n;
    }
    getInputVolume() {
        return t4().inputVolume;
    }
    getOutputVolume() {
        return t4().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT;
        return t4(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT;
        return t4(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            N().each(te, (t, n) => {
                let {
                    mode: i,
                    modeOptions: { shortcut: r },
                } = t;
                i === eL.TBI.PUSH_TO_TALK && tt.has(n) && (e[n] = r);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nT(td, t4().inputDeviceId);
    }
    getOutputDeviceId() {
        return nT(tc, t4().outputDeviceId);
    }
    getVideoDeviceId() {
        return nT(tu, t4().videoDeviceId);
    }
    getInputDevices() {
        return td;
    }
    getOutputDevices() {
        return tc;
    }
    getVideoDevices() {
        return tu;
    }
    getEchoCancellation() {
        let e = t4();
        return eF.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return e8.supports(e$.O5.SIDECHAIN_COMPRESSION) && t4().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return t4().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return t4().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tk && tk;
    }
    getOpenH264Enabled() {
        return (0, p.isLinux)() && t4().openH264Enabled;
    }
    getLoopback() {
        return tj.size > 0;
    }
    getLoopbackReasons() {
        return tj;
    }
    getNoiseSuppression() {
        let e = t4();
        return eF.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = t4();
        return eF.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return t4().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return t4().noiseCancellation;
    }
    getHardwareEncoding() {
        return !0;
    }
    getEnableSilenceWarning() {
        return t4().silenceWarning;
    }
    getDebugLogging() {
        return e8.getDebugLogging();
    }
    getQoS() {
        return t4().qos;
    }
    getAttenuation() {
        return t4().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return t4().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return t4().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return nc() && t4().automaticAudioSubsystem ? e$.rB.AUTOMATIC : e8.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return e8.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return t4().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eK.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT;
        return t4(e);
    }
    getState() {
        return {
            settingsByContext: te,
            inputDevices: td,
            outputDevices: tc,
            appSupported: tW,
            krispModuleLoaded: tD,
            krispFatalError: tb,
            krispVersion: u,
            krispSuppressionLevel: _,
            goLiveSource: a,
            goLiveContext: tr,
        };
    }
    getInputDetectedThisConnection() {
        return tO;
    }
    getInputDetected() {
        return l.inputDetected;
    }
    getLastInputDetectedUpdateTime() {
        return l.lastUpdateTime;
    }
    getNoInputDetectedNotice() {
        return tR;
    }
    getInputDeviceOSMuted() {
        return o;
    }
    getInputDeviceHardwareMuted() {
        return c;
    }
    getInputDeviceOSVolume() {
        return d;
    }
    getPacketDelay() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT;
        return p.isPlatformEmbedded || this.getMode(e) !== eL.TBI.VOICE_ACTIVITY
            ? 0
            : this.getModeOptions(e).vadLeading;
    }
    setCanHavePriority(e, t) {
        e8.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return ti;
    }
    getVideoHook() {
        return t4().videoHook;
    }
    supportsVideoHook() {
        return e8.supports(e$.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = t4().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return e8.supports(e$.O5.EXPERIMENTAL_SOUNDSHARE) && L().satisfies(M.A?.os.release, ea.$x);
    }
    supportsHookSoundshare() {
        return (0, p.isWindows)() && e8.supports(e$.O5.SOUNDSHARE) && L().satisfies(M.A?.os.release, ea.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = t4().useSystemScreensharePicker,
            n = (0, p.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return e8.supports(e$.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return tQ;
    }
    getVideoEncoderExperiments(e, t) {
        let n = ["unk"];
        if (
            (n.push("nvNewPresets"),
            e === e$.x.STREAM ? n.push("nvRelaxRc=250") : n.push("nvRelaxRc=75"),
            this.getUseVaapiEncoder() && n.push("vaapi"),
            (function (e) {
                let { location: t, disable: n = !1 } = e;
                return n ? e_.definition.defaultConfig : e_.getConfig({ location: t });
            })({ location: "getVideoEncoderExperiments" }).enabled && n.push("nvReconFrames"),
            e === e$.x.STREAM && "streamer" === t && (0, p.isWindows)())
        ) {
            n.push("useCaptureDeviceForEncode");
            let { overrideDeviceReuse: e } = eA.getConfig({ location: "handleReady" });
            e && n.push("videoCaptureDeviceOverrideReuse");
        }
        return (n.push("linux-vulkan"), n.join(","));
    }
    getUseGamescopeCapture() {
        return tZ;
    }
    getSpeakingWhileMuted() {
        return tg;
    }
    getKrispModelOverride() {
        return E;
    }
    getKrispModels() {
        return tv;
    }
    getKrispVadActivationThreshold() {
        return t4().modeOptions.vadKrispActivationThreshold ?? 0.5;
    }
    hasActiveSystemTelecomCall() {
        return tq;
    }
    setHasActiveSystemTelecomCall(e) {
        tq = e;
    }
    supportsScreenSoundshare() {
        return (0, p.isMac)()
            ? e8.supports(e$.O5.SOUNDSHARE) && L().satisfies(M.A?.os.release, ea.P$) && nd()
            : (0, p.isWindows)()
              ? e8.supports(e$.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, p.isLinux)() && e8.supports(e$.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, p.isWindows)()) {
            if (this.getBypassSystemInputProcessing()) return;
            return tx[this.getInputDeviceId()]?.active?.find((e) => "deep_noise_suppression" === e);
        }
        if ((0, p.isMac)() || (0, p.isIOS)()) return A;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e$.x.DEFAULT;
        return this.supports(e$.O5.VIDEO)
            ? [{ rid: "100", type: e === e$.x.DEFAULT ? e$.mI.VIDEO : e$.mI.SCREEN, quality: e$.Y4 }]
            : [];
    }
    fetchAsyncResources() {
        let e = { fetchDave: (0, p.isWeb)() };
        return e8.fetchAsyncResources(e);
    }
    startDavePreload() {
        !tG &&
            ((tG = !0),
            (0, p.isWeb)() &&
                e8.fetchAsyncResources({ fetchDave: !0 }).catch((e) => {
                    (eX.warn("DAVE preload failed:", e), ew.A.captureException(e));
                }));
    }
    getSupportedSecureFramesProtocolVersion() {
        return e8.getSupportedSecureFramesProtocolVersion();
    }
    hasClipsSource() {
        return null != s;
    }
    isClipsRecordingReady() {
        return ts;
    }
    isClipsRecordingReadySignalSupported() {
        return e8.supports(e$.O5.CLIPS_RECORDING_READY_EVENTS);
    }
    getGpuBrand() {
        return tY;
    }
    getHasNvidiaGpu() {
        return tz || window.DiscordNative?.process?.env?.LIBVA_DRIVER_NAME === "nvidia";
    }
}
function nk(e) {
    if (null == e.taskMetrics || 0 === e.taskMetrics.length || 1 === e.taskMetrics.length) return null;
    let t = { metrics_period_ms: e.periodMs, total_tasks: 0, total_exec_time_ns: 0, queue_name: e.queueName };
    ((t.total_tasks = e.taskMetrics.reduce((e, t) => e + t.count, 0)),
        (t.total_exec_time_ns = e.taskMetrics.reduce((e, t) => e + t.totalExecTimeNs, 0)));
    let n = [...e.taskMetrics].sort((e, t) => t.longestExecTimeNs - e.longestExecTimeNs),
        i = [...e.taskMetrics].sort((e, t) => t.longestQueueTimeNs - e.longestQueueTimeNs);
    for (let e = 0; e < 3; e++)
        if (e < n.length) {
            let i = n[e];
            ((t[`slow_task_${e}_name`] = i.name), (t[`slow_task_${e}_longest_exec_time_ns`] = i.longestExecTimeNs));
        }
    for (let e = 0; e < 3; e++)
        if (e < i.length) {
            let n = i[e];
            ((t[`delayed_task_${e}_name`] = n.name),
                (t[`delayed_task_${e}_longest_queue_time_ns`] = n.longestQueueTimeNs));
        }
    return ((t.full_task_report = JSON.stringify(n)), t);
}
let nF = (i = new nx(P.h, {
    VOICE_CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n, currentVoiceChannelId: i, video: r } = e;
        if ((i !== n && t8(r, null), null != t || null == n)) {
            tL = !1;
            return;
        }
        if (tL) return;
        tL = !0;
        let a = t4();
        (a.mute || a.deaf) && (n_({ deaf: !1, mute: !1 }), e8.eachConnection(t7));
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (r === t.sessionId) {
                ((tE = t.mute || t.suppress), (tf = t.deaf), e8.eachConnection(t7));
                let e = null != t.guildId && null != t.channelId && null != tM && tM !== t.channelId,
                    n = !tL && null == t.channelId;
                return (t8(!e && !n && tI), (tM = t.channelId), !0);
            }
            return (__OVERLAY__ || t.userId !== ex.default.getId() || null != eV.A.getChannelId() || t8(!1, null), e);
        }, !1);
    },
    CONNECTION_OPEN: function (e) {
        ((r = e.sessionId), (tE = !1), (tf = !1));
        let t = t4();
        (nc() && (nu() ? nU(e$.rB.AUTOMATIC) : t.automaticAudioSubsystem && nw()),
            e8.supports(e$.O5.OFFLOAD_ADM_CONTROLS) && e8.setOffloadAdmControls(!0),
            (0, p.isIOS)() &&
                en.getConfig({ location: "handleConnectionOpen" }).enabled &&
                e8.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
            (0, p.isIOS)() && (e8.setNcModels?.(eo), i.emitChange()),
            ng(t.inputDeviceId),
            nO());
    },
    CONNECTION_CLOSED: function () {
        r = null;
    },
    POST_CONNECTION_OPEN: function () {
        return ((0, p.isWeb)() && i.startDavePreload(), !1);
    },
    RTC_CONNECTION_STATE: function (e) {
        switch (e.state) {
            case eL.S7L.CONNECTING:
                nA();
                break;
            case eL.S7L.RTC_CONNECTING:
                ((tR = !1), (o = void 0), (d = void 0), (c = void 0), (tO = !1), l.reset());
                break;
            case eL.S7L.RTC_CONNECTED:
                t8();
                break;
            case eL.S7L.DISCONNECTED:
                ((t0 = {}),
                    (function () {
                        if (0 === tV.size) return;
                        let e = e$.x.DEFAULT,
                            { disabledLocalVideos: t } = t4(e);
                        (tV.forEach((n) => {
                            (g()(t[n], "If you are auto-disabled, then you are also disabled."),
                                delete t[n],
                                e8.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e));
                        }),
                            tV.clear(),
                            n_({ disabledLocalVideos: t }, e, !1));
                    })(),
                    nL());
        }
    },
    AUDIO_SET_TEMPORARY_SELF_MUTE: function (e) {
        let { mute: t } = e;
        ((tA = t), e8.eachConnection(t7));
    },
    AUDIO_TOGGLE_SELF_MUTE: function (e) {
        let { context: t, playSoundEffect: n } = e,
            { mute: i, deaf: r } = t4(t);
        if (t === e$.x.DEFAULT && (eN.A.requestPermission(eW.iL.AUDIO), th)) return !1;
        ((i = !r && !i) || (r = !1), n || (tT = !0), n_({ mute: i, deaf: r }, t), e8.eachConnection(t7));
    },
    AUDIO_SET_SELF_MUTE: function (e) {
        let { context: t, mute: n, playSoundEffect: i } = e;
        (n_({ mute: n }, t), i || (tT = !0), e8.eachConnection(t7));
    },
    AUDIO_TOGGLE_SELF_DEAF: function (e) {
        let { context: t } = e;
        (n_({ deaf: !t4(t).deaf }, t), e8.eachConnection(t7));
    },
    AUDIO_TOGGLE_LOCAL_MUTE: function (e) {
        let { context: t, userId: n } = e;
        if (n === ex.default.getId()) return;
        let { localMutes: i } = t4(t);
        (i[n] ? delete i[n] : (i[n] = !0),
            n_({ localMutes: i }, t),
            e8.eachConnection((e) => e.setLocalMute(n, i[n] || !1), t));
    },
    AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
        let { context: t, userId: n, videoToggleState: i, persist: r, isAutomatic: a } = e;
        g()(!(r && a), "These are not allowed to both be true.");
        let s = i === eL.bb8.DISABLED,
            { disabledLocalVideos: l } = t4(t),
            o = l[n] ?? !1,
            d = tV.has(n),
            c = i === eL.bb8.AUTO_ENABLED || i === eL.bb8.MANUAL_ENABLED;
        (eX.info(`disableVideo=${s} currentlyDisabled=${o} currentlyAutoDisabled=${d}, isVideoShown=${c}`),
            g()(!(d && !o), "If you are auto-disabled, then you are also disabled."));
        let u = s !== o,
            _ = t === e$.x.DEFAULT,
            E = a && u && _,
            A = r && u && _;
        eX.info(`changed=${u} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${E} isManualToggleByUser=${A}`);
        let { videoToggleStateMap: h } = t4(t);
        if (
            (h[n] === eL.bb8.AUTO_PROBING &&
                i === eL.bb8.AUTO_ENABLED &&
                (0, eS.A)(n, s ? e$.Al.AUTO_DISABLE : e$.Al.AUTO_ENABLE, c),
            (h[n] = i),
            n_({ videoToggleStateMap: h }, t, r),
            i === eL.bb8.AUTO_PROBING
                ? eV.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
                : eV.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
            tH ||
                (eX.info(`isAutoDisableAllowed=${tH} - disabling VideoHealthManager`),
                eV.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
            E)
        ) {
            if ((!s && !d) || (s && !tH)) return;
            ((0, eS.A)(n, s ? e$.Al.AUTO_DISABLE : e$.Al.AUTO_ENABLE, c), s ? tV.add(n) : tV.delete(n));
        } else
            A &&
                (d && !s
                    ? (eX.info("disallowing auto-disable for this session because of manual override by user"),
                      (tH = !1),
                      eV.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                      (0, eS.A)(n, e$.Al.MANUAL_REENABLE, c))
                    : (0, eS.A)(n, s ? e$.Al.MANUAL_DISABLE : e$.Al.MANUAL_ENABLE, c));
        (_ && !s && tV.delete(n),
            s ? (l[n] = !0) : delete l[n],
            n_({ disabledLocalVideos: l }, t, r),
            e8.eachConnection((e) => e.setLocalVideoDisabled(n, l[n] ?? !1), t));
    },
    AUDIO_SET_LOCAL_VOLUME: function (e) {
        let { context: t, userId: n, volume: i } = e;
        if (n === ex.default.getId()) return;
        let r = t === e$.x.STREAM ? e$.Cn : e$.Hz,
            { localVolumes: a } = t4(t);
        (i === r ? delete a[n] : (a[n] = i),
            n_({ localVolumes: a }, t),
            e8.eachConnection((e) => e.setLocalVolume(n, i), t));
    },
    AUDIO_SET_LOCAL_PAN: function (e) {
        let { context: t, userId: n, left: i, right: r } = e,
            { localPans: a } = t4(t);
        ((a[n] = { left: i, right: r }), n_({ localPans: a }, t), e8.eachConnection((e) => e.setLocalPan(n, i, r), t));
    },
    AUDIO_SET_MODE: function (e) {
        let { context: t, mode: n, options: i } = e;
        (n_({ mode: n, modeOptions: { ...i, updatedAt: Date.now() } }, t), e8.eachConnection(t5));
    },
    AUDIO_SET_INPUT_VOLUME: function (e) {
        let { volume: t } = e;
        (n_({ inputVolume: t6(t) }), e8.setInputVolume(t));
    },
    AUDIO_SET_OUTPUT_VOLUME: function (e) {
        let { volume: t } = e;
        (n_({ outputVolume: t }), e8.setOutputVolume(t));
    },
    AUDIO_SET_INPUT_DEVICE: function (e) {
        let { id: t } = e;
        ((t = nT(td, t)),
            (tl = performance.now()),
            n_({ inputDeviceId: t }),
            nN(t),
            e8.eachConnection(nl),
            (o = void 0),
            (d = void 0),
            (c = void 0),
            (tO = !1),
            l.reset());
    },
    AUDIO_SET_OUTPUT_DEVICE: function (e) {
        let { id: t } = e;
        (n_({ outputDeviceId: (t = nT(tc, t)) }), e8.setAudioOutputDevice(t), e8.eachConnection(nl));
    },
    AUDIO_SET_ACTIVE_INPUT_PROFILE: function (e) {
        let { inputProfile: t } = e;
        n_({ activeInputProfile: t });
        let n = t4();
        (e8.eachConnection((e) => {
            (t5(e), nl(e));
        }),
            e8.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
            nD());
    },
    AUDIO_SET_ECHO_CANCELLATION: function (e) {
        let t = n_({ echoCancellation: e.enabled }),
            n = eF.A.hasEchoCancellation(t.inputDeviceId) || t.echoCancellation;
        (e8.eachConnection((e) => e.setEchoCancellation(n)), nD(), ny(e.location));
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION: function (e) {
        let t;
        ((t = n_({ sidechainCompression: e.enabled })), e8.setSidechainCompression(t.sidechainCompression));
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function (e) {
        let t = n_({ sidechainCompressionStrength: e.strength });
        e8.setSidechainCompressionStrength(t.sidechainCompressionStrength);
    },
    AUDIO_SET_LOOPBACK: function (e) {
        let { enabled: t, loopbackReason: n } = e;
        return (t ? tj.add(n) : tj.delete(n), nD());
    },
    AUDIO_SET_NOISE_SUPPRESSION: function (e) {
        let t = n_({ noiseSuppression: e.enabled }),
            n = eF.A.hasNoiseSuppression(t.inputDeviceId) || t.noiseSuppression;
        (e8.eachConnection((e) => e.setNoiseSuppression(n)), nD(), ny(e.location));
    },
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function (e) {
        let t = n_({ automaticGainControl: e.enabled });
        (e8.eachConnection((e) => nr(e, t.automaticGainControl)), nD(), ny(e.location));
    },
    AUDIO_SET_NOISE_CANCELLATION: function (e) {
        let t = n_({ noiseCancellation: e.enabled });
        (e8.eachConnection((e) => na(e, t.noiseCancellation)), nD(), ny(e.location));
    },
    AUDIO_SET_KRISP_MODEL_OVERRIDE: function (e) {
        (eC.A.setKrispModelOverride(e.model), (E = e.model), nD());
    },
    AUDIO_SET_DISPLAY_SILENCE_WARNING: function (e) {
        n_({ silenceWarning: e.enabled });
    },
    AUDIO_SET_DEBUG_LOGGING: function (e) {
        e8.setDebugLogging(e.enabled);
    },
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: function (e) {
        let { level: t } = e;
        ((_ = t), eC.A.setKrispSuppressionLevel(t));
    },
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: function (e) {
        (0, p.isWeb)() || ((tP = e.enabled), e8.setNoiseCancellationEnableStats?.(e.enabled));
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
        e8.eachConnection((e) =>
            e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers),
        );
    },
    AUDIO_SET_QOS: function (e) {
        let { enabled: t } = e;
        (n_({ qos: t }), e8.eachConnection((e) => e.setQoS(t)));
    },
    MEDIA_ENGINE_DEVICES: function (e) {
        let t = td;
        if (
            ((td = nm(e, { deviceType: e$.oh.AUDIO_INPUT, defaultName: ez.intl.string(ez.t["/QIjDA"]) })),
            !N().isEqual(td, t))
        ) {
            let e = t4();
            (nN(nT(td, e.inputDeviceId)), e8.eachConnection(nl));
        }
        !(function (e) {
            let t = tc;
            if (
                ((tc = nm(e, { deviceType: e$.oh.AUDIO_OUTPUT, defaultName: ez.intl.string(ez.t.xlUg0v) })),
                !N().isEqual(tc, t))
            ) {
                let e = t4(),
                    n = nT(tc, e.outputDeviceId);
                (e8.setAudioOutputDevice(n), e8.eachConnection(nl));
                let i = nC(t),
                    r = nC(tc);
                i !== r &&
                    e8.eachConnection((e) => {
                        e.context === e$.x.STREAM && e.setSoundshareDiscardRearChannels(r);
                    });
            }
        })(e);
        tC = e.videoDevices.length > 0;
        let n = tu;
        if (
            ((tu = nm(e, { deviceType: e$.oh.VIDEO_INPUT, defaultName: ez.intl.string(ez.t.WKWARY) })),
            tI && !N().isEqual(tu, n))
        ) {
            let e = void 0 !== tu[tp],
                t = tp === e$.dx && n[e$.dx]?.disabled,
                i = "Firefox" === O().name && "" === tp && n[tp]?.name === "Default" && !n[tp]?.disabled;
            t8(e || t || i);
        }
    },
    AUDIO_VOLUME_CHANGE: function (e) {
        let { inputVolume: t, outputVolume: n } = e;
        n_({ inputVolume: t6(t), outputVolume: n });
    },
    AUDIO_RESET: function () {
        (b.w.remove(eq), location.reload());
    },
    AUDIO_INPUT_DETECTED: function (e) {
        let { inputDetected: t } = e;
        if (null == t) return !1;
        ((tR = !0 !== tO && !t), t && (tO = !0));
    },
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: function (e) {
        let { osVolume: t, osMuted: n } = e;
        ((d = t), (o = n));
    },
    AUDIO_INPUT_DEVICE_HARDWARE_MUTED_CHANGED: function (e) {
        let { deviceGuid: t, hardwareMuted: n } = e,
            i = nT(td, t4().inputDeviceId),
            r = td[i];
        if (t !== nS(r)) return !1;
        ((c = n), eR.default.track(eL.HAw.HARDWARE_MUTE_DETECTED, { input_device_name: r?.name, hardware_muted: n }));
    },
    AUDIO_SET_SUBSYSTEM: function (e) {
        nU(e.subsystem);
    },
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: function (e) {
        let t = e.bypassEnabled;
        (n_({ bypassSystemInputProcessing: t }), e8.setAudioInputBypassSystemProcessing(t), ns(), ny(e.location));
    },
    MEDIA_ENGINE_SET_AUDIO_ENABLED: function (e) {
        ((tn = e.enabled), e.unmute && n_({ mute: !1, deaf: !1 }), e8.eachConnection(t7));
    },
    MEDIA_ENGINE_SET_VIDEO_ENABLED: function (e) {
        let { enabled: t } = e;
        (eN.A.requestPermission(eW.iL.CAMERA), t8(t));
    },
    MEDIA_ENGINE_PERMISSION: function (e) {
        let { kind: t, granted: n } = e;
        if (!n)
            switch (t) {
                case "audio":
                    ((tn = !1), e8.eachConnection(t7));
                    break;
                case "video":
                    t8(!1);
            }
    },
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
        let { settings: t } = e;
        if (t?.desktopSettings != null) {
            let e = null,
                n = null,
                { sourceId: i, sound: r } = t.desktopSettings,
                s = t.context ?? e$.x.DEFAULT,
                l = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
                o = i.startsWith(`${e$.fS.ACTIVITY}:`),
                d = o ? null : eM.A.getPidFromDesktopSource(i);
            (p.isPlatformEmbedded && !o && ({ soundshareId: e, soundshareSession: n } = nR(d, r)),
                s !== tr && (null != a && e8.setGoLiveSource(null, tr), (tr = s)),
                t8(s === e$.x.STREAM && tI, {
                    desktopSource: { id: i, sourcePid: d, soundshareId: e, soundshareSession: n },
                    quality: { resolution: l.resolution, frameRate: l.frameRate },
                }));
        } else if (t?.cameraSettings != null) {
            let e = t.context ?? e$.x.DEFAULT,
                { videoDeviceGuid: n, audioDeviceGuid: i, sound: r } = t.cameraSettings,
                a = e === e$.x.STREAM && tI,
                s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
            t8(a, {
                cameraSource: { videoDeviceGuid: n, audioDeviceGuid: i, sound: r },
                quality: { resolution: s.resolution, frameRate: s.frameRate },
            });
        } else t8(tI, null);
    },
    MEDIA_ENGINE_SET_VIDEO_DEVICE: function (e) {
        let { id: t } = e;
        (n_({ videoDeviceId: (t = nT(tu, t)) }), t8());
    },
    MEDIA_ENGINE_INTERACTION_REQUIRED: function (e) {
        return ti !== e.required && ((ti = e.required), e.required || e8.interact(), !0);
    },
    USER_SETTINGS_MODAL_INIT: nG,
    USER_SETTINGS_MODAL_SET_SECTION: nG,
    CERTIFIED_DEVICES_SET: function () {
        return (e8.eachConnection(nl), !1);
    },
    RPC_APP_CONNECTED: function (e) {
        let { application: t } = e;
        tt.add(t.id);
    },
    RPC_APP_DISCONNECTED: function (e) {
        let { application: t } = e;
        tt.delete(t.id);
    },
    OVERLAY_INITIALIZE: function (e) {
        let { mediaEngineState: t } = e;
        ((te = t.settingsByContext),
            (td = t.inputDevices),
            (tc = t.outputDevices),
            (tW = t.appSupported),
            (tD = t.krispModuleLoaded),
            (tb = t.krispFatalError),
            (u = t.krispVersion),
            (tr = t.goLiveContext));
    },
    APP_STATE_UPDATE: function (e) {
        let { state: t } = e,
            n = V.A.isEnabled();
        if (t === eL.g6G.BACKGROUND && tI && !n) ((tN = !0), t8(!1));
        else {
            if (t !== eL.g6G.ACTIVE || !tN) return !1;
            ((tN = !1), t8(!0));
        }
        return !0;
    },
    SET_CHANNEL_BITRATE: function (e) {
        e8.eachConnection((t) => t.setBitRate(e.bitrate));
    },
    SET_VAD_PERMISSION: function (e) {
        let { hasPermission: t } = e,
            n = !t;
        if (n === th) return !1;
        ((th = n), e8.eachConnection(t7));
    },
    SET_NATIVE_PERMISSION: function (e) {
        let { state: t, permissionType: n } = e,
            i = t === eW.hL.ACCEPTED;
        switch (n) {
            case eW.iL.AUDIO:
                ((tB = !0), e8.eachConnection(t7));
                break;
            case eW.iL.CAMERA:
                !i && tI && t8(!1);
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
            n = n_({ aecDumpEnabled: t });
        e8.setAecDump(n.aecDumpEnabled);
    },
    MEDIA_ENGINE_SET_OPENH264_ENABLED: function (e) {
        let { enabled: t } = e;
        (n_({ openH264Enabled: t }), m.Ay?.setOpenH264Enabled?.(t));
    },
    MEDIA_ENGINE_RESET_SETTINGS: function (e) {
        let { overrides: t } = e;
        if (__OVERLAY__) return !1;
        ((te = Object.values(e$.x).reduce((e, n) => {
            let i = e5();
            return ((e[n] = N().merge(i, t[n])), e);
        }, {})),
            b.w.set(eq, te),
            nE());
    },
    CHANNEL_DELETE: function () {
        if ((!tI && null == a) || null != eV.A.getRTCConnectionId()) return !1;
        t8(!1, null);
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: function (e) {
        if (e.code === e$.CO.KRISP_CPU_OVERUSE) {
            ((t0.noiseCancellation = !1), (t0.noiseSuppression = !0));
            let e = t4();
            return (e8.eachConnection((t) => na(t, e.noiseCancellation)), nD(), ny(), !0);
        }
        return !1;
    },
    MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR: function (e) {
        return (
            e.code === e$.CO.KRISP_VAD_CPU_OVERUSE &&
            ((t0.modeOptions = { vadUseKrisp: !1 }), e8.eachConnection((e) => t5(e)), !0)
        );
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function () {
        return !!tU && ((tU = !1), !0);
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
        let { settings: t } = e;
        e8.applyMediaFilterSettings(t).finally(() => {
            ((tw = !1), i.emitChange());
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
        if (t !== eY.oD.PRELOADED_USER_SETTINGS || n || null != i) return !1;
        nO(!0);
    },
    CLIPS_INIT: function (e) {
        let { sourceId: t, applicationName: n, quality: r } = e;
        if (null == M.A || (s?.desktopSource.id === t && s.quality === r)) return !1;
        null != s &&
            (e8.setClipsSource(null),
            (0, p.isWindows)() &&
                (null != s.desktopSource.soundshareId
                    ? U.c1(s.desktopSource.soundshareId)
                    : null != s.desktopSource.sourcePid && t4().videoHook && U.c1(s.desktopSource.sourcePid)));
        let a = eM.A.getPidFromDesktopSource(t),
            { soundshareId: l, soundshareSession: o } = nR(a, !0);
        s = { desktopSource: { id: t, sourcePid: a, soundshareId: l, soundshareSession: o }, quality: r };
        let d = t1("MediaEngineStore clips"),
            c = t4().videoHook,
            u = c && ef.getConfig({ location: "handleClipsInit" }).enabled,
            { minCaptureWidth: _, minCaptureHeight: E } = eE.getConfig({ location: "handleClipsInit" });
        e8.setClipsSource({
            desktopDescription: {
                id: s.desktopSource.id,
                soundshareId: s.desktopSource.soundshareId,
                useVideoHook: c,
                useGraphicsCapture: no(),
                useCaptureDeviceForEncode: !1,
                useLoopback: i.getExperimentalSoundshare(),
                useQuartzCapturer: !0,
                allowScreenCaptureKit: nd(),
                videoHookStaleFrameTimeoutMs: 500,
                graphicsCaptureStaleFrameTimeoutMs: eJ,
                hdrCaptureMode: d,
                videoHookAllowDx12: u,
                minCaptureWidth: _,
                minCaptureHeight: E,
            },
            quality: r,
            bitratePercent: r.bitratePercent,
            applicationName: n,
            videoEncoderExperiments: i.getVideoEncoderExperiments(e$.x.STREAM, "streamer"),
        });
    },
    CLIPS_RESTART: function () {
        s = null;
    },
    CLIPS_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        !1 === t.clipsEnabled && ((s = null), e8.setClipsSource(null));
    },
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function (e) {
        tX = e.enabled;
    },
    MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: function (e) {
        let { deviceId: t, active: n, available: i } = e;
        ((tx[t] = { active: n, available: i }), ns());
    },
}));
