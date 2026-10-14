let i, r, a, s, l, o, d, c, u, _, E, A;
(n.d(t, { yz: () => e7, Ay: () => nV }), n(323874), n(14289), n(35956), n(321073));
var h,
    f = n(823598),
    I = n(626584),
    p = n(723702),
    T = n(19575);
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
    supportsFeature: (e) => T.Ay.supportsFeature(e),
    setProcessPriority(e) {
        T.Ay.getDiscordUtils().setProcessPriority(e);
    },
    getVoiceEngine: () => T.Ay.getVoiceEngine(),
    getOpenH264LibraryPath: () => T.Ay.getOpenH264LibraryPath(),
});
var m = n(284009),
    g = n.n(m),
    S = n(435558),
    N = n.n(S),
    C = n(481613),
    O = n.n(C),
    R = n(299855),
    L = n.n(R),
    y = n(17928),
    D = n(205693),
    v = n(506774),
    b = n(451988),
    M = n(73153),
    P = n(77729),
    U = n(719129),
    w = n(894539),
    G = n(124838),
    x = n(274372),
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
    }),
    J = (0, W.mj)({
        name: "2026-05-disable-camera-simulcast",
        kind: "user",
        defaultConfig: { enableSimulcast: !0 },
        variations: { 1: { enableSimulcast: !1 } },
    });
var ee = n(240921);
let et = (0, ee.Ay)({
        kind: "user",
        name: "2025-11-global-frame-pool-lock",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    en = (0, W.mj)({
        name: "2026-02-go-live-hdr",
        kind: "user",
        defaultConfig: { hdrCaptureMode: "never" },
        variations: { 1: { hdrCaptureMode: "always" }, 2: { hdrCaptureMode: "permittedDevicesOnly" } },
    }),
    ei = (0, W.mj)({
        name: "2026-03-ios-audio-interrupt-handling",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var er = n(574381),
    ea = n(941426),
    es = n(325278);
let el = new ea.Vy("InputWatcher");
class eo {
    mediaEngine;
    mediaEngineStore;
    stateChangeTimeout = new b.Ep();
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
        if ((0, er.uF)() && L().satisfies(P.A?.os.release, es.PH))
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
                    M.h.dispatch({ type: "AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED", osVolume: i, osMuted: r });
                }
            } catch (e) {
                el.warn(`Failed to get device OS volume and/or mute state: ${e}`);
            }
    };
    handleSilence = (e) => {
        let t = !e;
        this.stateChangeTimeout.start(t ? 1500 : 5e3, async () => {
            (el.info("Silence:", e),
                (this.inputDetected = t),
                (this.lastUpdateTime = performance.now()),
                e && (await this.fetchInputDeviceOSConfig()),
                M.h.dispatch({
                    type: "AUDIO_INPUT_DETECTED",
                    inputDetected: this.inputDetected,
                    lastUpdateTime: this.lastUpdateTime,
                }));
        });
    };
}
let ed = [
        { name: "small_NC_8k", maxSampleRate: 8e3, filename: "krisp-nc-o-nb-v2.kef" },
        { name: "small_NC", maxSampleRate: 16e3, filename: "krisp-nc-o-lite-v1.kef" },
        { name: "full_NC", maxSampleRate: 96e3, filename: "krisp-nc-o-med-v7-fp16.kef" },
    ],
    ec = (0, ee.Ay)({
        kind: "user",
        name: "2025-10-low-latency-rate-control",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var eu = n(140175);
(0, W.mj)({
    name: "2026-02-mobile-volume-output-slider-removal",
    kind: "user",
    defaultConfig: { audioOutputPresent: !0, nonContextualStreamOutputPresent: !0, showTileVolumeIndicator: !1 },
    variations: { 1: { audioOutputPresent: !1, nonContextualStreamOutputPresent: !1, showTileVolumeIndicator: !0 } },
});
let e_ = (0, W.mj)({
        kind: "user",
        name: "2026-08-mute-aware-noise-cancellation",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    eE = (0, ee.Ay)({
        kind: "user",
        name: "2026-07-nvenc-reconstructed-frames",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eA = (0, W.mj)({
        name: "2026-09-stream-zero-vad-leading",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eh = (0, W.mj)({
        kind: "user",
        name: "2026-06-systemwide-echo-cancellation-for-people-who-refuse-to-wear-headphones",
        defaultConfig: { echoReferenceMode: "mix" },
        variations: { 1: { echoReferenceMode: "auto" } },
    }),
    ef = (0, W.mj)({
        name: "2026-06-upscale-small-captured-frames",
        kind: "user",
        defaultConfig: { minCaptureWidth: 0, minCaptureHeight: 0 },
        variations: { 1: { minCaptureWidth: 130, minCaptureHeight: 130 } },
    }),
    eI = (0, W.mj)({
        name: "2026-03-video-capture-device-no-reuse",
        kind: "user",
        defaultConfig: { overrideDeviceReuse: !1 },
        variations: { 1: { overrideDeviceReuse: !0 } },
    });
var ep = n(625075);
let eT = (0, W.mj)({
        name: "2026-04-video-hook-dx12",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    em = (0, W.mj)({
        name: "2026-02-wgc-dirty-regions-all",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    eg = (0, W.mj)({
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
function eN(e) {
    return eS.getConfig({ location: e });
}
let eC = (0, W.mj)({
    name: "2026-01-wmf-gpu-encode-intel",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var eO = n(75076),
    eR = n(674966),
    eL = n(559633),
    ey = n(205106),
    eD = n(174459),
    ev = n(652215);
let eb = new ea.Vy("AudioEffects");
async function eM(e, t, n) {
    if (!(0, er.uF)()) return Promise.reject(Error("Audio effects querying not supported on non-Windows platforms"));
    if (!L().satisfies(P.A.os.release, ">=10.0.22000"))
        return Promise.reject(Error("Audio effects querying likely not supported on this Windows version."));
    try {
        let i = await n.getDeviceAudioEffects(e);
        return (
            M.h.dispatch({ type: "MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS", deviceId: t, ...i }),
            eD.default.track(ev.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, {
                succeeded: !0,
                active_effects: i.active,
                available_effects: i.available,
            }),
            i
        );
    } catch (e) {
        (eb.error("Failed to probe audio effects for device", e),
            eD.default.track(ev.HAw.AUDIO_EFFECTS_PROBE_COMPLETED, { succeeded: !1 }));
    }
}
var eP = n(967347),
    eU = n(617617),
    ew = n(125325),
    eG = n(353835),
    ex = n(927813),
    ek = n(38405),
    eF = n(350535),
    eB = n(280450),
    eV = n(131319),
    eH = n(347481),
    ej = n(734057),
    eW = n(763827),
    eY = n(287809),
    eK = n(117549),
    e$ = n(765682),
    ez = n(355097),
    eX = n(621380),
    eq = n(731854),
    eZ = n(660183);
let eQ = new I.A("MediaEngineStore"),
    eJ = "MediaEngineStore",
    e0 = {
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
    e1 = { left: 1, right: 1 },
    e2 = 5 * ex.A.Millis.SECOND,
    e3 = 2 * ex.A.Millis.SECOND,
    e6 = 30 * ex.A.Millis.SECOND,
    e5 = "https://ciscobinary.openh264.org/libopenh264-2.5.1-linux64.7.so.bz2",
    e4 = 0;
var e7 =
    (((h = {}).WEBCAM = "WEBCAM"),
    (h.INTEGRATED = "INTEGRATED"),
    (h.BLUETOOTH = "BLUETOOTH"),
    (h.AIRPLAY = "AIRPLAY"),
    (h.HEADSET = "HEADSET"),
    h);
function e8() {
    return {
        mode: ev.TBI.VOICE_ACTIVITY,
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
        inputVolume: eq.Hz,
        outputVolume: eq.Hz,
        inputDeviceId: eq.dx,
        outputDeviceId: eq.dx,
        videoDeviceId: eq.dx,
        qos: !1,
        qosMigrated: !1,
        videoHook: tt.supports(eq.O5.VIDEO_HOOK),
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
let e9 = {
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
            mode: ev.TBI.VOICE_ACTIVITY,
            modeOptions: { threshold: -84, autoThreshold: !1, vadUseKrisp: !1 },
            echoCancellation: !1,
            noiseSuppression: !1,
            automaticGainControl: !1,
            noiseCancellation: !1,
            bypassSystemInputProcessing: !0,
        },
    },
    te = { modeOptions: { vadUseKrisp: !1 }, noiseCancellation: !1, noiseSuppression: !0 },
    tt = (0, D.hB)((0, D.WI)());
function tn(e) {
    return ep.k.getConfig({ location: e }).videoEnabled;
}
eQ.enableNativeLogger(!0);
let ti = {},
    tr = new Set([eq.x.DEFAULT]),
    ta = tt.supports(eq.O5.AUTO_ENABLE),
    ts = !1,
    tl = eq.x.STREAM,
    to = 0,
    td = !1,
    tc = performance.now(),
    tu = null,
    t_ = { [eq.dx]: np("No Input Devices", eq.oh.AUDIO_INPUT) },
    tE = { [eq.dx]: np("No Output Devices", eq.oh.AUDIO_OUTPUT) },
    tA = { [eq.dx]: np("No Video Devices", eq.oh.VIDEO_INPUT) },
    th = new b.Ep(),
    tf = !1,
    tI = !1,
    tp = !1,
    tT = !1,
    tm = !1,
    tg = eq.qe,
    tS = eq.qe,
    tN = !1,
    tC = !1,
    tO = new b.Ep(),
    tR = !1,
    tL = !1,
    ty = !1,
    tD = !1,
    tv = !1,
    tb = !1,
    tM = !1,
    tP = !1,
    tU = [],
    tw = !1,
    tG = null,
    tx = !1,
    tk = !1,
    tF = !1,
    tB = {},
    tV = null,
    tH = null,
    tj = !1;
(eR.A.hasPermission(e$.iL.AUDIO, { showAuthorizationError: !1 }),
    eR.A.hasPermission(e$.iL.CAMERA, { showAuthorizationError: !1 }));
let tW = new Set(),
    tY = !1,
    tK = new Set(),
    t$ = {},
    tz = null,
    tX = null,
    tq = null,
    tZ = !1,
    tQ = !0,
    tJ = !1,
    t0 = !1,
    t1 = !1,
    t2 = !1,
    t3 = {};
function t6(e) {
    return (function (e) {
        let { location: t } = e;
        return en.getConfig({ location: t });
    })({ location: e }).hdrCaptureMode;
}
async function t5() {
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
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq.x.DEFAULT,
        t = ti[e];
    return (null == t && ((t = e8()), (ti[e] = t)), t);
}
function t7() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq.x.DEFAULT,
        t = t4(e);
    if (e === eq.x.STREAM)
        return {
            ...t,
            modeOptions: {
                ...t.modeOptions,
                vadLeading: eA.getConfig({ location: "MediaEngineStore.getSettings" }).enabled
                    ? 0
                    : t.modeOptions.vadLeading,
            },
        };
    let n = e9[t.activeInputProfile ?? eX.m.CUSTOM],
        i = nP() ? t3 : te,
        r = { ...(t.modeOptions ?? {}), ...(n.modeOptions ?? {}), ...(i.modeOptions ?? {}) };
    return (
        ((null == r.vadKrispActivationThreshold && !0 === n.automaticGainControl) || !0 === t.automaticGainControl) &&
            (r.vadKrispActivationThreshold = 0.8),
        { ...t, ...n, ...i, modeOptions: r }
    );
}
function t8(e) {
    let t = t7(e.context),
        n = t.mode;
    (e.context === eq.x.DEFAULT && (0, eu.N)(tt, !1, !1),
        e.setInputMode(n, {
            vadThreshold: t.modeOptions.threshold,
            vadAutoThreshold: t.modeOptions.autoThreshold,
            vadUseKrisp: t.modeOptions.vadUseKrisp && nP(),
            vadKrispActivationThreshold: t.modeOptions.vadKrispActivationThreshold ?? 0.5,
            vadLeading: t.modeOptions.vadLeading,
            vadTrailing: t.modeOptions.vadTrailing,
            pttReleaseDelay: Math.round(t.modeOptions.delay),
        }));
}
function t9(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eq.Hz;
    return N().clamp(e, 0, t);
}
function ne(e) {
    let t = t7(e.context),
        n = !ta || t.mute || t.deaf;
    switch (e.context) {
        case eq.x.DEFAULT:
            n = n || tf || tI || tp || !eR.A.didHavePermission(e$.iL.AUDIO);
            break;
        case eq.x.STREAM:
            n = !0;
            break;
        default:
            e.context;
    }
    if ((e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eq.x.DEFAULT)) {
        let { enabled: t } = (function (e) {
            let { location: t } = e;
            return e_.getConfig({ location: t });
        })({ location: "updateConnectionMuteDeaf" });
        (e.setSkipNoiseCancellationIfMuted(t && n), w.A.updateNativeMute());
    }
}
function nt() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tm,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
        n = a;
    if (
        (n?.desktopSource != null &&
            n.desktopSource.id !== t?.desktopSource?.id &&
            (null != n.desktopSource.soundshareId && (0, p.isWindows)()
                ? U.c1(n.desktopSource.soundshareId)
                : null != n.desktopSource.sourcePid && t7().videoHook && U.c1(n.desktopSource.sourcePid),
            tt.setGoLiveSource(null, tl)),
        n?.cameraSource != null &&
            (n.cameraSource.videoDeviceGuid !== t?.cameraSource?.videoDeviceGuid ||
                n.cameraSource.audioDeviceGuid !== t?.cameraSource?.audioDeviceGuid) &&
            tt.setGoLiveSource(null, tl),
        tm || e)
    ) {
        let t = t7().videoDeviceId;
        (tm && t === eq.dx && tS === eq.dx && tg !== eq.qe ? (t = tg) : (tS = t),
            (tg = (tm = e) ? nN(tA, t) : eq.qe),
            tt.setVideoInputDevice(tg));
    }
    if (((a = t), null != t)) {
        let e = { resolution: t.quality.resolution, frameRate: t.quality.frameRate };
        if (null != t.desktopSource) {
            let n = t6("MediaEngineStore go live"),
                r = t7().videoHook,
                a = nu(),
                s = a ? ((0, p.isWindows)() && L().satisfies(P.A?.os.release, es.fG) ? es.zl : es.eg) : 0,
                l = !1;
            (0, p.isWindows)() && s >= es.zl && (l = !0 === tX || em.getConfig({ location: "updateVideo" }).enabled);
            let o = r && eT.getConfig({ location: "updateVideo" }).enabled,
                { minCaptureWidth: d, minCaptureHeight: c } = ef.getConfig({ location: "updateVideo" });
            tt.setGoLiveSource(
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
                        allowScreenCaptureKit: n_(),
                        videoHookStaleFrameTimeoutMs: 500,
                        graphicsCaptureStaleFrameTimeoutMs: e2,
                        hdrCaptureMode: n,
                        enableGlobalFramePoolLock: (function (e) {
                            let { location: t, disable: n = !1 } = e;
                            return n ? et.definition.defaultConfig : et.getConfig({ location: t });
                        })({ location: "updateVideo" }).enabled,
                        useGraphicsCaptureDirtyRegions: l,
                        videoHookAllowDx12: o,
                        minCaptureWidth: d,
                        minCaptureHeight: c,
                    },
                    quality: e,
                },
                tl,
            );
        }
        null != t.cameraSource &&
            tt.setGoLiveSource(
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
function nn(e) {
    switch (e) {
        case eq.CO.KRISP_CPU_OVERUSE:
            return F.B6.KrispCpuOveruse;
        case eq.CO.KRISP_FAILED:
            return F.B6.KrispFailed;
        case eq.CO.KRISP_VAD_CPU_OVERUSE:
            return F.B6.KrispVadCpuOveruse;
        case eq.CO.KRISP_INIT_ERROR:
            return F.B6.KrispInitError;
        case eq.CO.KRISP_INIT_ERROR_NATIVE:
            return F.B6.KrispInitErrorNative;
        case eq.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED:
            return F.B6.KrispInitErrorSse4NotSupported;
        case eq.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED:
            return F.B6.KrispInitErrorAvx2NotSupported;
        case eq.CO.KRISP_INIT_ERROR_UNSIGNED:
            return F.B6.KrispInitErrorUnsigned;
        case eq.CO.KRISP_INIT_ERROR_GLOBAL_INIT:
            return F.B6.KrispInitErrorGlobalInit;
        case eq.CO.KRISP_INIT_ERROR_WEIGHT_8K:
            return F.B6.KrispInitErrorWeight8k;
        case eq.CO.KRISP_INIT_ERROR_WEIGHT_16K:
            return F.B6.KrispInitErrorWeight16k;
        case eq.CO.KRISP_INIT_ERROR_WEIGHT_32K:
            return F.B6.KrispInitErrorWeight32k;
        case eq.CO.KRISP_INIT_ERROR_WEIGHT_VAD:
            return F.B6.KrispInitErrorWeightVad;
        default:
            return;
    }
}
let ni = new Set([
    eq.CO.KRISP_INIT_ERROR,
    eq.CO.KRISP_INIT_ERROR_NATIVE,
    eq.CO.KRISP_INIT_ERROR_SSE4_NOT_SUPPORTED,
    eq.CO.KRISP_INIT_ERROR_AVX2_NOT_SUPPORTED,
    eq.CO.KRISP_INIT_ERROR_UNSIGNED,
    eq.CO.KRISP_INIT_ERROR_GLOBAL_INIT,
    eq.CO.KRISP_INIT_ERROR_WEIGHT_8K,
    eq.CO.KRISP_INIT_ERROR_WEIGHT_16K,
    eq.CO.KRISP_INIT_ERROR_WEIGHT_32K,
    eq.CO.KRISP_INIT_ERROR_WEIGHT_VAD,
]);
function nr(e, t) {
    if (
        (eQ.warn(`Voice processing error: ${e}`),
        (0, F.QW)({ type: F.iy.NOISE_CANCELLER_ERROR, underlyingError: nn(e), voiceProcessingErrorDetails: t }),
        eD.default.track(ev.HAw.VOICE_PROCESSING, { noise_canceller_error: e }),
        ni.has(e))
    ) {
        tP = !0;
        return;
    }
    e === eq.CO.KRISP_VAD_CPU_OVERUSE
        ? M.h.dispatch({ type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR", code: e })
        : ((tx = !0), M.h.dispatch({ type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR", code: e }));
}
function na(e, t) {
    let n = t === eq.$C.LIVE;
    (eQ.warn(`Video filter error: ${e} (${n ? "live" : "preview"})`),
        n &&
            (0, F.QW)({
                type: F.iy.VIDEO_BACKGROUND_UNAVAILABLE,
                underlyingError: (function (e) {
                    switch (e) {
                        case eq.kv.UNSUPPORTED:
                            return F.B6.VideoBackgroundUnsupported;
                        case eq.kv.INIT_FAILED:
                            return F.B6.VideoBackgroundInitFailed;
                        default:
                            return;
                    }
                })(e),
            }),
        M.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_FILTER_ERROR", code: e, target: n ? "live" : "preview" }));
}
function ns(e) {
    return { enabled: e, ...(e ? e0 : { useAGC2: !1 }) };
}
function nl(e, t) {
    e.setAutomaticGainControl(ns(t));
}
function no(e, t) {
    let n = (0, ey.A)(t, i.getSystemMicrophoneMode());
    (n !== t && eQ.info("Falling back to system noise suppression."),
        (t = n),
        e.setNoiseCancellation(t),
        e.setNoiseCancellationDuringProcessing(t));
}
function nd() {
    let e = t7(),
        t = e.inputDeviceId,
        n = eH.A.hasEchoCancellation(t) || e.echoCancellation,
        r = eH.A.hasNoiseSuppression(t) || e.noiseSuppression,
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
                krispEnabled: (0, ey.A)(e.noiseCancellation, i.getSystemMicrophoneMode()),
                noiseSuppressionEnabled: r,
                echoCancellationEnabled: n,
            },
        );
    (tt.setVoiceSampleRateCap(a), tt.setVoiceChannelCountCap(s));
}
function nc(e) {
    let t = t7(),
        n = t.inputDeviceId;
    if (
        (e.setEchoCancellation(eH.A.hasEchoCancellation(n) || t.echoCancellation),
        e.setNoiseSuppression(eH.A.hasNoiseSuppression(n) || t.noiseSuppression),
        nl(e, eH.A.hasAutomaticGainControl(n) || t.automaticGainControl),
        no(e, t.noiseCancellation),
        nd(),
        (0, p.isWindows)() && L().satisfies(P.A?.os.release, ">=10.0.15063") && e.context === eq.x.DEFAULT)
    ) {
        let t = (function (e) {
                let { location: t } = e;
                return eh.getConfig({ location: t });
            })({ location: "updateConnectionVoiceProcessing" }),
            n = ng(t_[i.getInputDeviceId()]) || ng(tE[i.getOutputDeviceId()]);
        e.setEchoReferenceMode(n ? "mix" : t.echoReferenceMode);
    }
    if ((0, p.isWeb)()) {
        let n = t.noiseCancellation ? -150 : -100;
        e.setSilenceThreshold(n);
    }
}
function nu() {
    return (0, p.isWindows)() && L().satisfies(P.A?.os.release, es.yg);
}
function n_() {
    return (0, p.isMac)() && tt.supports(eq.O5.SCREEN_CAPTURE_KIT) && L().satisfies(P.A?.os.release, es.e);
}
function nE() {
    return (
        (0, p.isWindows)() &&
        tt.supports(eq.O5.AUTOMATIC_AUDIO_SUBSYSTEM) &&
        tt.supports(eq.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH)
    );
}
function nA() {
    return tt.supports(eq.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING);
}
function nh(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eq.x.DEFAULT,
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = t4(t);
    return (Object.assign(i, e), !__OVERLAY__ && n && v.w.set(eJ, ti), i);
}
function nf() {
    let e = t7();
    (nO(e.inputDeviceId),
        tt.setAudioOutputDevice(e.outputDeviceId),
        nt(),
        tt.setInputVolume(e.inputVolume),
        tt.setOutputVolume(e.outputVolume),
        tt.setAecDump(e.aecDumpEnabled),
        tt.setSidechainCompression(e.sidechainCompression),
        tt.setSidechainCompressionStrength(e.sidechainCompressionStrength),
        tt.setAudioInputBypassSystemProcessing(e.bypassSystemInputProcessing),
        (0, p.isLinux)() && T.Ay?.setOpenH264Enabled?.(e.openH264Enabled));
}
function nI() {
    ta || tt.enable().then(() => M.h.dispatch({ type: "MEDIA_ENGINE_SET_AUDIO_ENABLED", enabled: !0, unmute: !1 }));
}
function np(e, t) {
    return {
        id: eq.dx,
        deviceType: t,
        index: 0,
        name: e,
        disabled: !0,
        guid: void 0,
        hardwareId: void 0,
        containerId: void 0,
    };
}
function nT(e, t) {
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
function ng(e) {
    return e?.windowsDeviceService === "voicemodvad" || e?.name?.toLowerCase().includes("voicemod") === !0;
}
function nS(e, t) {
    let { deviceType: n, defaultName: i } = t,
        r = e[{ audioinput: "inputDevices", audiooutput: "outputDevices", videoinput: "videoDevices" }[n]];
    if (0 === r.length) {
        let e = np(i, n);
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
                    case nT(e, r):
                        return "WEBCAM";
                    case ["builtin", "displayport", "hdmi"].includes(e.macosTransportType ?? ""):
                    case null != e.hardwareId && nm.test(e.hardwareId):
                        return "INTEGRATED";
                    case N()(e.hardwareId).startsWith("BTHENUM"):
                    case ["bluetooth", "bluetoothle"].includes(e.macosTransportType ?? ""):
                        return "BLUETOOTH";
                    case ["airplay", "continuitycapturewireless"].includes(e.macosTransportType ?? ""):
                        return "AIRPLAY";
                    case "audioinput" === e.type && nT(e, i):
                    case "audiooutput" === e.type && nT(e, n):
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
function nN(e, t) {
    let n = e[t] ?? e[eq.dx] ?? N()(e).values().first();
    return null != n ? n.id : t;
}
async function nC(e) {
    if (!(0, p.isWindows)() || !z.getConfig({ location: "MediaEngineStore.setInputDevice" }).probeAudioEffects) return;
    let t = t_[e];
    if (t?.guid != null)
        try {
            await eM(t.guid, e, tt);
        } catch (e) {
            eQ.warn("Unable to query audio effects", e);
        }
}
function nO(e) {
    (tt.setAudioInputDevice(e),
        nC(e),
        (function (e) {
            if (!(0, p.isWindows)() && !(0, p.isMac)()) return;
            let t = t_[e];
            t?.guid != null && tt.watchDeviceHardwareMutedChange?.(t.guid);
        })(e));
}
function nR(e) {
    return Object.values(e).some((e) => e.name.toLowerCase().includes("dualsense"));
}
function nL() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = eU.A.settings.audioContextSettings ?? { user: {}, stream: {} };
    for (let n of Object.keys(t)) {
        let i = n === ez.W.USER ? eq.x.DEFAULT : eq.x.STREAM,
            r = i === eq.x.STREAM ? eq.Cn : eq.Hz,
            a = t[n] ?? {},
            { localMutes: s, localVolumes: l } = t7(i);
        for (let [e, t] of Object.entries(a))
            null == (0, ew.tM)(i, e) &&
                (t.muted ? (s[e] = !0) : delete s[e],
                t.volume !== r ? (l[e] = t.volume) : delete l[e],
                tt.eachConnection((n) => {
                    (n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted));
                }, i));
        if (e)
            for (let e of new Set([...Object.keys(s), ...Object.keys(l)]))
                null == a[e] &&
                    (delete s[e],
                    delete l[e],
                    tt.eachConnection((t) => {
                        (t.setLocalVolume(e, r), t.setLocalMute(e, !1));
                    }, i));
        nh({ localMutes: s, localVolumes: l }, i);
    }
}
function ny(e, t) {
    if (t) {
        let { soundshareId: t, soundshareSession: a } = (function (e) {
            if (null == i)
                return (
                    eQ.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."),
                    { soundshareId: null, soundshareSession: "" }
                );
            {
                let t = i.getExperimentalSoundshare() ? e : eG.A.getAudioPid(e),
                    n = "";
                return (null != t && (n = eG.A.generateSessionFromPid(t)), { soundshareId: t, soundshareSession: n });
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
                            M.h.dispatch({ type: "MEDIA_ENGINE_SOUNDSHARE_FAILED", errorMessage: e });
                    }),
                { soundshareId: t, soundshareSession: a }
            );
        }
    }
    return (null != e && t7().videoHook && U.GH(e), { soundshareId: null, soundshareSession: null });
}
function nD() {
    let e = eq.x.DEFAULT,
        { videoToggleStateMap: t } = t7(e);
    for (let [e, n] of Object.entries(t)) n === ev.bb8.AUTO_PROBING && delete t[e];
    nh({ videoToggleStateMap: t }, e, !1);
}
function nv(e) {
    let t = t7(),
        n = tt.getAudioSubsystem(),
        r = tt.getAudioLayer(),
        a = nN(t_, t.inputDeviceId),
        s = t_[a]?.name,
        l = (0, ey.A)(t.noiseCancellation, i.getSystemMicrophoneMode());
    eD.default.track(ev.HAw.VOICE_PROCESSING, {
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
function nb() {
    let e = t7(),
        t = tK.size > 0,
        n = e.inputDeviceId,
        i = eH.A.hasEchoCancellation(n) || e.echoCancellation,
        r = eH.A.hasNoiseSuppression(n) || e.noiseSuppression,
        a = ns(eH.A.hasAutomaticGainControl(n) || e.automaticGainControl),
        s = e.noiseCancellation;
    (tt.setLoopback(t, {
        echoCancellation: i,
        echoCancellationPreEcho: !t,
        noiseSuppression: r,
        automaticGainControlConfig: a,
        noiseCancellation: s,
    }),
        nd());
}
async function nM() {
    if (!tt.supports(eq.O5.VAAPI) || window.DiscordNative?.processUtils?.getSystemInfo == null) return;
    let e = await window.DiscordNative.processUtils.getSystemInfo();
    (e.electronGPUInfo?.gpuDevice ?? []).some((e) => 4098 === e.vendorId) &&
        ((t1 = !0), (t0 = tt.supports(eq.O5.GAMESCOPE_CAPTURE)));
}
function nP() {
    return (tM || !1) && !tP;
}
async function nU() {
    try {
        await T.Ay.ensureModule("discord_krisp");
        let e = T.Ay.requireModule("discord_krisp");
        ((tM = !0),
            (u = e.getSdkVersion?.()),
            (_ = e.getSuppressionLevel?.() ?? 100),
            e.getNcModels?.().then((e) => {
                ((tU = e), i.emitChange());
            }),
            i.emitChange(),
            await T.Ay.ensureModule("discord_voice"));
        let t = T.Ay.requireModule("discord_voice");
        t.setupKrispPath?.();
    } catch (t) {
        (eQ.warn(`Failed to load Krisp module: ${t.message}`), ek.A.captureException(t));
        let e = eq.CO.KRISP_INIT_ERROR;
        if (t.message.includes(": ")) {
            let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
            e = isNaN(n) || 0 === n ? eq.CO.KRISP_INIT_ERROR : n;
        }
        ((0, F.QW)({ type: F.iy.NOISE_CANCELLER_ERROR, underlyingError: nn(e) }),
            eD.default.track(ev.HAw.VOICE_PROCESSING, { noise_canceller_error: e }));
    } finally {
        tb = !1;
    }
}
async function nw() {
    try {
        let e,
            t = "",
            n = !1,
            i = URL.parse(e5);
        if (null === i) return void eQ.log("OpenH264 URL ", i, " is invalid");
        let r = i.pathname.split("/"),
            a = r[r.length - 1].replace(".bz2", "");
        try {
            let t = await T.Ay.downloadOpenH264(
                e5,
                a,
                "d828a944d4d2bb64195ada89cf2cde9bc41733b1547d0788ef49fb8cb231b76f",
                (e) => {
                    eQ.log("OpenH264 download status", e);
                },
            );
            (eQ.log("OpenH264 is ready", t), (n = t.fetchedFromNetwork), (e = !0));
        } catch (n) {
            (eQ.error("OpenH264 download failed", n), (t = n.message), (e = !1));
        }
        if (
            (eD.default.track(ev.HAw.VIDEO_OPENH264_DOWNLOADED, {
                success: e,
                fetched_from_network: n,
                error_message: t,
            }),
            e)
        ) {
            let e = await T.Ay.cleanupUnusedOpenH264Files([a]);
            eQ.log("OpenH264 cleanup", e);
        }
    } catch (e) {
        eQ.error("OpenH264 download failed", e);
    }
}
function nG(e) {
    e === eq.rB.AUTOMATIC
        ? (nh({ automaticAudioSubsystem: !0 }), nx())
        : (nh({ automaticAudioSubsystem: !1 }), tt.setAudioSubsystem(e));
}
function nx() {
    tt.queueAudioSubsystem(eq.rB.EXPERIMENTAL);
}
function nk(e) {
    let { section: t } = e;
    return (t === ev.nc_.VOICE && nI(), !1);
}
class nF extends y.Ay.Store {
    static displayName = "MediaEngineStore";
    initialize() {
        let e;
        if (
            ((l ??= new eo(tt, this)),
            th.start(e6, () => {
                (eQ.error("Device enumeration timed out"), eD.default.track(ev.HAw.DEVICE_ENUMERATION_TIMEOUT, {}));
            }),
            tt.on(D.bg.Connection, (e) => {
                let t;
                (nb(), t8(e), ne(e), nc(e));
                let n = t7();
                (e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers),
                    e.setQoS(n.qos),
                    (0, p.isWindows)() || (0, p.isLinux)()
                        ? (null != tH
                              ? tH
                              : "u" > typeof window
                                ? (tH = t5().then((e) => ((tV = e), e)))
                                : Promise.resolve(!1)
                          ).then((t) => {
                              e.setExperimentFlag(eq.fd.H265_HARDWARE_DECODE_AVAILABLE, t);
                          })
                        : (0, p.isMac)() && e.setExperimentFlag(eq.fd.H265_HARDWARE_DECODE_AVAILABLE, !0),
                    (0, p.isLinux)() && n.openH264Enabled && e.setExperimentFlag(eq.fd.USE_LIBOPENH264_DECODER, !0),
                    (function (e) {
                        let { location: t, disable: n = !1 } = e;
                        return n ? ec.definition.defaultConfig : ec.getConfig({ location: t });
                    })({ location: "setupMediaEngine" }).enabled &&
                        e.setExperimentFlag(eq.fd.LOW_LATENCY_RATE_CONTROL, !0),
                    e.setExperimentFlag(eq.fd.RESET_DECODER_ON_ERRORS, !0),
                    e.setExperimentFlag(eq.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0));
                let { swallowVolumeOnlySpeakingEvents: r } = G.A.getConfig({ location: "MediaEngineStore" });
                if (
                    (r && e.setExperimentFlag(eq.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS, !0), e.context === eq.x.STREAM)
                ) {
                    let t = nR(tE);
                    e.setSoundshareDiscardRearChannels(t);
                }
                if ((0, p.isWindows)())
                    (e.setExperimentFlag(eq.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(eq.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eq.fd.SIGNAL_AV1_HARDWARE_DECODE, !0));
                else if ((0, p.isMac)())
                    (e.setExperimentFlag(eq.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eq.fd.SIGNAL_AV1_HARDWARE_DECODE, !0),
                        e.setExperimentFlag(
                            eq.fd.H265_DISABLE_ENCODE,
                            !(
                                window?.DiscordNative?.os.arch === "arm64" &&
                                L().satisfies(window?.DiscordNative?.os.release, eq.Dk)
                            ),
                        ));
                else if ((0, p.isLinux)()) {
                    let { enabled: t } = K.getConfig({ location: "MediaEngineStore" });
                    (t && e.setExperimentFlag(eq.fd.SIGNAL_AV1_ENCODE, !0),
                        e.setExperimentFlag(eq.fd.SIGNAL_AV1_DECODE, !0));
                } else
                    ((0, p.isIOS)() || (0, p.isAndroid)()) &&
                        (e.setExperimentFlag(eq.fd.SIGNAL_AV1_DECODE, !0),
                        e.setExperimentFlag(eq.fd.SIGNAL_AV1_HARDWARE_DECODE, !0),
                        e.setExperimentFlag(eq.fd.H265_HARDWARE_DECODE_AVAILABLE, !0));
                if ((0, p.isWeb)()) {
                    let { enabled: t } = Q.getConfig({ location: "MediaEngineStore" });
                    e.setExperimentFlag(eq.fd.BROWSER_HEVC, t);
                }
                for (let i of ((0, p.isWindows)() &&
                    tz?.startsWith("AMD") &&
                    eN("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eq.fd.WMF_GPU_ENCODE, !0),
                (0, p.isWindows)() &&
                    tz?.startsWith("Intel") &&
                    !0 === tX &&
                    1 === tq &&
                    eC.getConfig({ location: "MediaEngineStore" }).enabled &&
                    (e.setExperimentFlag(eq.fd.WMF_GPU_ENCODE, !0), e.setExperimentFlag(eq.fd.INTEL_GPU_DISABLE, !0)),
                (0, p.isWindows)() &&
                    tz?.startsWith("Intel") &&
                    !0 === tX &&
                    1 === tq &&
                    eg.getConfig({ location: "MediaEngineStore" }).enabled &&
                    e.setExperimentFlag(eq.fd.INTEL_GPU_DISABLE, !0),
                (0, p.isWindows)() &&
                    tz?.startsWith("Qualcomm") &&
                    eN("MediaEngineStore").enabled &&
                    e.setExperimentFlag(eq.fd.WMF_GPU_ENCODE, !0),
                tt.setHasFullbandPerformance(null === (t = (0, k.A)()) || t >= 31),
                e.setRemoteAudioHistory(1e3),
                (n = t7(e.context)),
                e.setPostponeDecodeLevel(100),
                Object.keys(n.localMutes)))
                    i !== eB.default.getId() && e.setLocalMute(i, n.localMutes[i]);
                for (let t of Object.keys(n.localVolumes))
                    t !== eB.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
                for (let t of Object.keys(n.localPans)) {
                    let i = n.localPans[t];
                    e.setLocalPan(t, i.left, i.right);
                }
                for (let t of Object.keys(n.disabledLocalVideos)) e.setLocalVideoDisabled(t, n.disabledLocalVideos[t]);
                (e.on(D.yq.Speaking, (t, n, i, r) => {
                    M.h.dispatch({ type: "SPEAKING", context: e.context, userId: t, speakingFlags: n, voiceDb: r });
                }),
                    e.context === eq.x.DEFAULT &&
                        ((tC = !1),
                        e.on(D.yq.SpeakingWhileMuted, () => {
                            let e = !tC;
                            ((tC = !0),
                                e && i.emitChange(),
                                tO.start(e3, () => {
                                    ((tC = !1), i.emitChange());
                                }));
                        })),
                    e.on(D.yq.DesktopSourceEnd, (t, n) => {
                        M.h.dispatch({
                            type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
                            settings: { context: e.context },
                            endReason: t,
                            errorCode: n,
                        });
                    }),
                    e.on(D.yq.InteractionRequired, (e) => {
                        M.h.dispatch({ type: "MEDIA_ENGINE_INTERACTION_REQUIRED", required: e });
                    }),
                    e.on(D.yq.VideoHookInitialize, (e, t, n, i, r, s) => {
                        a?.desktopSource != null &&
                            eD.default.track(ev.HAw.VIDEOHOOK_INITIALIZED, {
                                backend: e,
                                format: t,
                                framebuffer_format: n,
                                sample_count: i,
                                success: r,
                                reinitialization: s,
                                ...(0, j.A)(a?.desktopSource),
                            });
                    }),
                    e.on(D.yq.NoiseCancellationError, nr),
                    e.on(D.yq.VoiceActivityDetectorError, nr),
                    e.on(D.yq.SdpError, (e, t, n, i) => {
                        eD.default.track(ev.HAw.SDP_ERROR, { operation: e, error: t, type: n, sdp: i });
                    }),
                    e.on(D.yq.VideoState, (t) => {
                        M.h.dispatch({ type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED", videoState: t, context: e.context });
                    }),
                    e.setBitRate(eV.A.bitrate),
                    e.applyVideoQualityMode(eK.A.mode),
                    (0, p.isWindows)() &&
                        tt.supports(eq.O5.ASYNC_VIDEO_INPUT_DEVICE_INIT) &&
                        tt.setAsyncVideoInputDeviceInit(!0));
            }),
            tt.on(D.bg.DeviceChange, (e, t, n) => {
                (th.stop(),
                    M.h.dispatch({ type: "MEDIA_ENGINE_DEVICES", inputDevices: e, outputDevices: t, videoDevices: n }));
            }),
            tt.on(D.bg.VolumeChange, (e, t) => {
                M.h.dispatch({ type: "AUDIO_VOLUME_CHANGE", inputVolume: e, outputVolume: t });
            }),
            tt.on(D.bg.DesktopSourceEnd, (e, t) => {
                M.h.dispatch({ type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE", settings: null, endReason: e, errorCode: t });
            }),
            tt.on(D.bg.AudioPermission, (e) => {
                ((tj = !0), M.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "audio", granted: e }));
            }),
            tt.on(D.bg.VideoPermission, (e) => {
                M.h.dispatch({ type: "MEDIA_ENGINE_PERMISSION", kind: "video", granted: e });
            }),
            tt.on(D.bg.WatchdogTimeout, async () => {
                let e;
                if ("canary" === window.GLOBAL_ENV.RELEASE_CHANNEL)
                    try {
                        await eG.A.submitLiveCrashReport({ message: { message: "Voice Watchdog Timeout" } });
                    } catch (t) {
                        "number" == typeof t.status && (e = t.status);
                    }
                eQ.warn(`Watchdog timeout, report submission status: ${e ?? 200}`);
                let t = null != P.A.processUtils.setCrashReason;
                try {
                    await eD.default.track(
                        ev.HAw.VOICE_WATCHDOG_TIMEOUT,
                        { minidump_submission_error: e, will_restart: t },
                        { flush: !0 },
                    );
                } catch (e) {
                    eQ.error("Failed to flush voice watchdog timeout analytics event", e);
                }
                t &&
                    (eQ.info("Relaunching app due to voice watchdog timeout"),
                    await P.A.processUtils.setCrashReason("voice-watchdog-timeout"),
                    v.w.set("discord_watchdog_restart_timestamp", Date.now().toString()),
                    P.A.app.relaunch());
            }),
            tt.on(D.bg.VideoInputInitialized, (e) => {
                eD.default.track(ev.HAw.VIDEO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_first_frame_ms: e.initializationTimerExpired
                        ? null
                        : Math.round(e.timeToFirstFrame * ex.A.Millis.SECOND),
                    timed_out: e.initializationTimerExpired,
                    activity: e.entropy,
                    media_session_id: eW.A.getMediaSessionId(),
                    rtc_connection_id: eW.A.getRTCConnectionId(),
                });
            }),
            tt.on(D.bg.AudioInputInitialized, (e) => {
                eD.default.track(ev.HAw.AUDIO_INPUT_INITIALIZED, {
                    device_name: e.description.name,
                    time_to_initialized_ms: Math.round(e.timeToInitialized * ex.A.Millis.SECOND),
                    rtc_connection_id: eW.A.getRTCConnectionId(),
                });
            }),
            tt.on(D.bg.ClipsRecordingRestartNeeded, () => {
                M.h.dispatch({ type: "CLIPS_RESTART" });
            }),
            tt.on(D.bg.ClipsInitFailure, (e, t) => {
                let n = to < 3;
                ((to += 1),
                    M.h.dispatch({ type: "CLIPS_INIT_FAILURE", errMsg: e, applicationName: t }),
                    n
                        ? M.h.dispatch({ type: "CLIPS_RESTART" })
                        : eQ.warn(
                              `Clips init failure budget exhausted (${to} consecutive unhealthy attempts); skipping auto-restart. A settings flip / game change / app restart will retry.`,
                          ));
            }),
            tt.on(D.bg.ClipsRecordingHealthy, () => {
                0 !== to && (eQ.info(`Clips bridge reported healthy; resetting restart budget (was ${to}).`), (to = 0));
            }),
            tt.on(D.bg.ClipsRecordingReadyChanged, (e) => {
                td !== e && (eQ.info(`Clips recorder ready changed: ${e}`), (td = e));
            }),
            tt.on(D.bg.ClipsBridgeIdleShutdown, () => {
                eQ.info("Clips bridge idle shutdown");
            }),
            tt.on(D.bg.ClipsRecordingEnded, (e, t) => {
                s?.desktopSource?.id === e &&
                    (null != t && a?.desktopSource?.soundshareId !== t && U.c1(t), (s = null));
            }),
            tt.on(D.bg.NativeScreenSharePickerUpdate, (e, t) => {
                M.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_UPDATE", existing: e, content: t });
            }),
            tt.on(D.bg.NativeScreenSharePickerCancel, (e) => {
                M.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_CANCEL", existing: e });
            }),
            tt.on(D.bg.NativeScreenSharePickerError, (e) => {
                M.h.dispatch({ type: "NATIVE_SCREEN_SHARE_PICKER_ERROR", error: e });
            }),
            tt.on(D.bg.AudioDeviceModuleError, (e, t, n) => {
                eD.default.track(ev.HAw.AUDIO_DEVICE_MODULE_ERROR, { audio_device_module: e, code: t, device_name: n });
            }),
            tt.on(D.bg.VideoCodecError, (e) => {
                let t = "encode" === e.mode ? F.iy.VIDEO_ENCODE_ERROR : F.iy.VIDEO_DECODE_ERROR,
                    n = { videoCodec: e.codecStandard, errorMessage: e.message };
                (0, F.QW)(
                    t === F.iy.VIDEO_ENCODE_ERROR
                        ? { type: t, ...n, videoEncoder: e.implName }
                        : { type: t, ...n, videoDecoder: e.implName },
                );
            }),
            tt.on(D.bg.ConnectionStats, (e) => {
                M.h.dispatch({
                    type: "MEDIA_ENGINE_CONNECTION_STATS",
                    connectionStats: e.map((e) => {
                        let { stats: t, connection: n } = e;
                        return {
                            stats: t,
                            mediaEngineConnectionId: n.mediaEngineConnectionId,
                            version: e4++,
                            context: n.context,
                        };
                    }),
                });
            }),
            tt.on(D.bg.VoiceProcessingError, nr),
            tt.on(D.bg.VideoFilterError, na),
            tt.on(D.bg.VoiceQueueMetrics, (e) => {
                let t = nB(e);
                null !== t && eD.default.track(ev.HAw.VOICE_QUEUE_METRICS, t);
            }),
            tt.setOnVideoContainerResized((e, t, n) => {
                M.h.dispatch({ type: "VIDEO_SIZE_UPDATE", streamId: e, dimensions: { width: t, height: n } });
            }),
            nM(),
            l.reset(),
            (0, eP.w)().then((e) => {
                if (null != e) {
                    ((tz = e.gpu_brand), (tX = e.has_intel_hybrid_igpu), (tq = e.gpu_count));
                    let t = e.gpus ?? [];
                    tZ = t.length > 0 && t.every((e) => "10de" === e.vendor_id);
                }
            }),
            tt.on(D.bg.DeviceHardwareMutedChange, (e, t) => {
                M.h.dispatch({ type: "AUDIO_INPUT_DEVICE_HARDWARE_MUTED_CHANGED", deviceGuid: e, hardwareMuted: t });
            }),
            tt.on(D.bg.SystemMicrophoneModeChange, (e) => {
                ((A = e), tt.eachConnection(nc), i.emitChange());
            }),
            null != (e = v.w.get("audio")) && (v.w.set(eJ, { [eq.x.DEFAULT]: e }), v.w.remove("audio")),
            (ti = v.w.get(eJ) ?? {}),
            N().each(ti, (e) => {
                (N().defaultsDeep(e, e8()),
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
                    tt.supports(eq.O5.SIDECHAIN_COMPRESSION) &&
                        e.sidechainCompressionSettingVersion < 1 &&
                        ((e.sidechainCompressionSettingVersion = 1), (e.sidechainCompression = !0)),
                    (0, p.isWeb)()
                        ? 1 !== e.ncUseKrispjsSettingVersion &&
                          ((e.ncUseKrispjsSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
                        : 1 !== e.ncUseKrispSettingVersion &&
                          ((e.ncUseKrispSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0)));
            }),
            nf(),
            ((0, p.isWindows)() || (0, p.isLinux)() || (0, p.isMac)()) && !__OVERLAY__ && !tb && !tM
                ? ((tb = !0), nU())
                : (0, p.isWeb)() && tt.supports(eq.O5.NOISE_CANCELLATION)
                  ? ((tM = !0), i.emitChange())
                  : (0, p.isWeb)() && nh({ noiseCancellation: !1 }),
            (0, p.isLinux)() && nw(),
            nD(),
            (0, p.isDesktop)() && p.isPlatformEmbedded && !t2)
        ) {
            async function t() {
                let e = await new Promise((e) => {
                    T.Ay.pollQueueMetrics((t) => {
                        e(t);
                    });
                });
                e.periodMs = eq.tl;
                let n = nB(e);
                (null !== n && eD.default.track(ev.HAw.VOICE_QUEUE_METRICS, n), setTimeout(t, eq.tl));
            }
            ((t2 = !0), setTimeout(t, eq.tl));
        }
        ((0, p.isWindows)() &&
            p.isPlatformEmbedded &&
            null === tu &&
            tt
                .getCodecSurvey()
                .then((e) => {
                    try {
                        let t = JSON.parse(e);
                        if (null == t || null == t.available_video_decoders)
                            throw Error("decoder survey is not available");
                        tu = t.available_video_decoders.some((e) => "MediaFoundation H.264" === e);
                    } catch (e) {
                        (eQ.error("Failed to parse codec survey", e), (tu = !1));
                    }
                })
                .catch((e) => {
                    (eQ.error("Failed to get codec survey", e), (tu = !1));
                })
                .finally(() => {
                    M.h.dispatch({ type: "MEDIA_ENGINE_MF_AVAILABILITY_CHECKED" });
                }),
            (t$ = {
                [eq.O5.VIDEO]: tt.supports(eq.O5.VIDEO),
                [eq.O5.DESKTOP_CAPTURE]: tt.supports(eq.O5.DESKTOP_CAPTURE),
                [eq.O5.HYBRID_VIDEO]: tt.supports(eq.O5.HYBRID_VIDEO),
            }),
            this.waitFor(eB.default, eV.A, eH.A, ej.A, x.Ay, B.A, eW.A, H.Ay, eU.A, eY.default, eK.A));
    }
    supports(e) {
        return (e !== eq.O5.VIDEO || !!tn("MediaEngineStore.supports")) && tt.supports(e);
    }
    supportsInApp(e) {
        return (e !== eq.O5.VIDEO || !!tn("MediaEngineStore.supportsInApp")) && (t$[e] || tt.supports(e));
    }
    isSupported() {
        return tt.supported();
    }
    isNoiseSuppressionSupported() {
        return tt.supports(eq.O5.NOISE_SUPPRESSION);
    }
    isNoiseCancellationSupported() {
        return nP();
    }
    isNoiseCancellationError() {
        return tx;
    }
    isAutomaticGainControlSupported() {
        return tt.supports(eq.O5.AUTOMATIC_GAIN_CONTROL);
    }
    shouldOfferManualSubsystemSelection() {
        return !nA() && (tt.supports(eq.O5.LEGACY_AUDIO_SUBSYSTEM) || tt.supports(eq.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM));
    }
    showBypassSystemInputProcessing() {
        return tt.supports(eq.O5.AUDIO_BYPASS_SYSTEM_INPUT_PROCESSING) && "experimental" === tt.getAudioSubsystem();
    }
    isAdvancedVoiceActivitySupported() {
        return nP();
    }
    isAecDumpSupported() {
        return tt.supports(eq.O5.AEC_DUMP);
    }
    isSimulcastSupported() {
        return tt.supports(eq.O5.VIDEO) && tt.supports(eq.O5.SIMULCAST);
    }
    getAecDump() {
        return t7().aecDumpEnabled;
    }
    getMediaEngine() {
        return tt;
    }
    getVideoComponent() {
        return tt.Video;
    }
    getCameraComponent() {
        return tt.Camera;
    }
    getKrispSuppressionLevel() {
        return _ ?? 100;
    }
    getKrispEnableStats() {
        return tw;
    }
    isEnabled() {
        return ta;
    }
    isMute() {
        return this.isSelfMute() || tf;
    }
    isDeaf() {
        return this.isSelfDeaf() || tT;
    }
    isServerMute() {
        return tf;
    }
    isServerDeaf() {
        return tT;
    }
    hasContext(e) {
        return null != ti[e];
    }
    isSelfMutedTemporarily() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq.x.DEFAULT;
        return e === eq.x.DEFAULT && tI;
    }
    isSelfMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq.x.DEFAULT;
        return (
            !this.isEnabled() ||
            t7(e).mute ||
            !eR.A.didHavePermission(e$.iL.AUDIO) ||
            this.isSelfDeaf(e) ||
            (e === eq.x.DEFAULT && tp)
        );
    }
    shouldSkipMuteUnmuteSound() {
        return tN;
    }
    notifyMuteUnmuteSoundWasSkipped() {
        tN = !1;
    }
    isHardwareMute() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq.x.DEFAULT;
        return !this.isMute() && !this.isSelfMutedTemporarily(e) && eH.A.isHardwareMute(this.getInputDeviceId());
    }
    isHardwareMuteNoticeEnabled() {
        return tQ;
    }
    isSelfDeaf() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq.x.DEFAULT;
        return !this.isSupported() || t7(e).deaf;
    }
    isVideoEnabled() {
        return tm && tL;
    }
    isVideoAvailable() {
        return Object.values(tA).some((e) => {
            let { disabled: t } = e;
            return !t;
        });
    }
    hasVideoDevice() {
        return tL;
    }
    isScreenSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq.x.STREAM;
        return tl === e && null != a;
    }
    isSoundSharing() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq.x.STREAM;
        return tl === e && null != a && a.desktopSource?.soundshareId != null;
    }
    isLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eq.x.DEFAULT;
        return e !== eB.default.getId() && (t7(t).localMutes[e] || !1);
    }
    supportsDisableLocalVideo() {
        return tt.supports(eq.O5.DISABLE_VIDEO);
    }
    isLocalVideoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eq.x.DEFAULT;
        return t7(t).disabledLocalVideos[e] ?? !1;
    }
    getVideoToggleState(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eq.x.DEFAULT;
        return t7(t).videoToggleStateMap[e] ?? ev.bb8.NONE;
    }
    isLocalVideoAutoDisabled(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eq.x.DEFAULT;
        return t === eq.x.DEFAULT && tW.has(e);
    }
    isAnyLocalVideoAutoDisabled() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq.x.DEFAULT;
        return e === eq.x.DEFAULT && tW.size > 0;
    }
    isMediaFilterSettingLoading() {
        return tk;
    }
    isNativeAudioPermissionReady() {
        return tj;
    }
    getGoLiveSource() {
        return a;
    }
    getGoLiveContext() {
        return tl;
    }
    getLastAudioInputDeviceChangeTimestamp() {
        return tc;
    }
    isH264MfDecodeAvailable() {
        return tu;
    }
    getLocalPan(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eq.x.DEFAULT,
            n = t7(t).localPans[e];
        return null != n ? n : e1;
    }
    getLocalVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eq.x.DEFAULT,
            n = t === eq.x.STREAM ? eq.Cn : eq.Hz,
            i = t7(t).localVolumes[e];
        return null != i ? i : n;
    }
    getInputVolume() {
        return t7().inputVolume;
    }
    getOutputVolume() {
        return t7().outputVolume;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq.x.DEFAULT;
        return t7(e).mode;
    }
    getModeOptions() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq.x.DEFAULT;
        return t7(e).modeOptions;
    }
    getShortcuts() {
        let e = {};
        return (
            N().each(ti, (t, n) => {
                let {
                    mode: i,
                    modeOptions: { shortcut: r },
                } = t;
                i === ev.TBI.PUSH_TO_TALK && tr.has(n) && (e[n] = r);
            }),
            e
        );
    }
    getInputDeviceId() {
        return nN(t_, t7().inputDeviceId);
    }
    getOutputDeviceId() {
        return nN(tE, t7().outputDeviceId);
    }
    getVideoDeviceId() {
        return nN(tA, t7().videoDeviceId);
    }
    getInputDevices() {
        return t_;
    }
    getOutputDevices() {
        return tE;
    }
    getVideoDevices() {
        return tA;
    }
    getEchoCancellation() {
        let e = t7();
        return eH.A.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
    }
    getSidechainCompression() {
        return tt.supports(eq.O5.SIDECHAIN_COMPRESSION) && t7().sidechainCompression;
    }
    getSidechainCompressionStrength() {
        return t7().sidechainCompressionStrength;
    }
    getH265Enabled() {
        return t7().h265Enabled;
    }
    hasH265HardwareDecode() {
        return null !== tV && tV;
    }
    getOpenH264Enabled() {
        return (0, p.isLinux)() && t7().openH264Enabled;
    }
    getLoopback() {
        return tK.size > 0;
    }
    getLoopbackReasons() {
        return tK;
    }
    getNoiseSuppression() {
        let e = t7();
        return eH.A.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
    }
    getAutomaticGainControl() {
        let e = t7();
        return eH.A.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
    }
    getBypassSystemInputProcessing() {
        return t7().bypassSystemInputProcessing;
    }
    getNoiseCancellation() {
        return t7().noiseCancellation;
    }
    getHardwareEncoding() {
        return !0;
    }
    getEnableSilenceWarning() {
        return t7().silenceWarning;
    }
    getDebugLogging() {
        return tt.getDebugLogging();
    }
    getQoS() {
        return t7().qos;
    }
    getAttenuation() {
        return t7().attenuation;
    }
    getAttenuateWhileSpeakingSelf() {
        return t7().attenuateWhileSpeakingSelf;
    }
    getAttenuateWhileSpeakingOthers() {
        return t7().attenuateWhileSpeakingOthers;
    }
    getAudioSubsystem() {
        return nE() && t7().automaticAudioSubsystem ? eq.rB.AUTOMATIC : tt.getAudioSubsystem();
    }
    getMLSSigningKey(e, t) {
        return tt.getMLSSigningKey(e, t);
    }
    getActiveInputProfile() {
        return t7().activeInputProfile;
    }
    isInputProfileCustom() {
        let e = this.getActiveInputProfile();
        return null == e || e === eX.m.CUSTOM;
    }
    getSettings() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq.x.DEFAULT;
        return t7(e);
    }
    getState() {
        return {
            settingsByContext: ti,
            inputDevices: t_,
            outputDevices: tE,
            appSupported: t$,
            krispModuleLoaded: tM,
            krispFatalError: tP,
            krispVersion: u,
            krispSuppressionLevel: _,
            goLiveSource: a,
            goLiveContext: tl,
        };
    }
    getInputDetectedThisConnection() {
        return ty;
    }
    getInputDetected() {
        return l.inputDetected;
    }
    getLastInputDetectedUpdateTime() {
        return l.lastUpdateTime;
    }
    getNoInputDetectedNotice() {
        return tD;
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
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq.x.DEFAULT;
        return p.isPlatformEmbedded || this.getMode(e) !== ev.TBI.VOICE_ACTIVITY
            ? 0
            : this.getModeOptions(e).vadLeading;
    }
    setCanHavePriority(e, t) {
        tt.eachConnection((n) => n.setCanHavePriority(e, t));
    }
    isInteractionRequired() {
        return ts;
    }
    getVideoHook() {
        return t7().videoHook;
    }
    supportsVideoHook() {
        return tt.supports(eq.O5.VIDEO_HOOK);
    }
    getExperimentalSoundshare() {
        let e = t7().experimentalSoundshare2;
        return this.supportsExperimentalSoundshare() && ((e ?? !0) || !this.supportsHookSoundshare());
    }
    supportsExperimentalSoundshare() {
        return tt.supports(eq.O5.EXPERIMENTAL_SOUNDSHARE) && L().satisfies(P.A?.os.release, es.$x);
    }
    supportsHookSoundshare() {
        return (0, p.isWindows)() && tt.supports(eq.O5.SOUNDSHARE) && L().satisfies(P.A?.os.release, es.ws);
    }
    getUseSystemScreensharePicker() {
        let e = this.supportsSystemScreensharePicker(),
            t = t7().useSystemScreensharePicker,
            n = (0, p.isLinux)();
        return e && (t ?? n);
    }
    supportsSystemScreensharePicker() {
        return tt.supports(eq.O5.NATIVE_SCREENSHARE_PICKER);
    }
    getUseVaapiEncoder() {
        return t1;
    }
    getVideoEncoderExperiments(e, t) {
        let n = ["unk"];
        if (
            (n.push("nvNewPresets"),
            e === eq.x.STREAM ? n.push("nvRelaxRc=250") : n.push("nvRelaxRc=75"),
            this.getUseVaapiEncoder() && n.push("vaapi"),
            (function (e) {
                let { location: t, disable: n = !1 } = e;
                return n ? eE.definition.defaultConfig : eE.getConfig({ location: t });
            })({ location: "getVideoEncoderExperiments" }).enabled && n.push("nvReconFrames"),
            e === eq.x.STREAM && "streamer" === t && (0, p.isWindows)())
        ) {
            n.push("useCaptureDeviceForEncode");
            let { overrideDeviceReuse: e } = eI.getConfig({ location: "handleReady" });
            e && n.push("videoCaptureDeviceOverrideReuse");
        }
        return (n.push("linux-vulkan"), n.join(","));
    }
    getUseGamescopeCapture() {
        return t0;
    }
    getSpeakingWhileMuted() {
        return tC;
    }
    getKrispModelOverride() {
        return E;
    }
    getKrispModels() {
        return tU;
    }
    getKrispVadActivationThreshold() {
        return t7().modeOptions.vadKrispActivationThreshold ?? 0.5;
    }
    hasActiveCallKitCall() {
        return tJ;
    }
    setHasActiveCallKitCall(e) {
        tJ = e;
    }
    supportsScreenSoundshare() {
        return (0, p.isMac)()
            ? tt.supports(eq.O5.SOUNDSHARE) && L().satisfies(P.A?.os.release, es.P$) && n_()
            : (0, p.isWindows)()
              ? tt.supports(eq.O5.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
              : !!(0, p.isLinux)() && tt.supports(eq.O5.SCREEN_SOUNDSHARE);
    }
    getSystemMicrophoneMode() {
        if ((0, p.isWindows)()) {
            if (this.getBypassSystemInputProcessing()) return;
            return tB[this.getInputDeviceId()]?.active?.find((e) => "deep_noise_suppression" === e);
        }
        if ((0, p.isMac)() || (0, p.isIOS)()) return A;
    }
    getVideoStreamParameters() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq.x.DEFAULT,
            t = this.supports(eq.O5.VIDEO)
                ? [{ rid: "100", type: e === eq.x.DEFAULT ? eq.mI.VIDEO : eq.mI.SCREEN, quality: eq.Y4 }]
                : [];
        return (
            this.isSimulcastSupported() &&
                e === eq.x.DEFAULT &&
                J.getConfig({ location: "MediaEngineStore.getVideoStreamParameters" }).enableSimulcast &&
                t.push({ rid: "50", type: eq.mI.VIDEO, quality: eq.Cl }),
            t
        );
    }
    fetchAsyncResources() {
        let e = { fetchDave: (0, p.isWeb)() };
        return tt.fetchAsyncResources(e);
    }
    startDavePreload() {
        !tF &&
            ((tF = !0),
            (0, p.isWeb)() &&
                tt.fetchAsyncResources({ fetchDave: !0 }).catch((e) => {
                    (eQ.warn("DAVE preload failed:", e), ek.A.captureException(e));
                }));
    }
    getSupportedSecureFramesProtocolVersion() {
        return tt.getSupportedSecureFramesProtocolVersion();
    }
    hasClipsSource() {
        return null != s;
    }
    isClipsRecordingReady() {
        return td;
    }
    isClipsRecordingReadySignalSupported() {
        return tt.supports(eq.O5.CLIPS_RECORDING_READY_EVENTS);
    }
    getGpuBrand() {
        return tz;
    }
    getHasNvidiaGpu() {
        return tZ || window.DiscordNative?.process?.env?.LIBVA_DRIVER_NAME === "nvidia";
    }
}
function nB(e) {
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
let nV = (i = new nF(M.h, {
    VOICE_CHANNEL_SELECT: function (e) {
        let { guildId: t, channelId: n, currentVoiceChannelId: i, video: r } = e;
        if ((i !== n && nt(r, null), null != t || null == n)) {
            tv = !1;
            return;
        }
        if (tv) return;
        tv = !0;
        let a = t7();
        (a.mute || a.deaf) && (nh({ deaf: !1, mute: !1 }), tt.eachConnection(ne));
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            if (r === t.sessionId) {
                ((tf = t.mute || t.suppress), (tT = t.deaf), tt.eachConnection(ne));
                let e = null != t.guildId && null != t.channelId && null != tG && tG !== t.channelId,
                    n = !tv && null == t.channelId;
                return (nt(!e && !n && tm), (tG = t.channelId), !0);
            }
            return (__OVERLAY__ || t.userId !== eB.default.getId() || null != eW.A.getChannelId() || nt(!1, null), e);
        }, !1);
    },
    CONNECTION_OPEN: function (e) {
        ((r = e.sessionId), (tf = !1), (tT = !1));
        let t = t7();
        (nE() && (nA() ? nG(eq.rB.AUTOMATIC) : t.automaticAudioSubsystem && nx()),
            tt.supports(eq.O5.OFFLOAD_ADM_CONTROLS) && tt.setOffloadAdmControls(!0),
            (0, p.isIOS)() &&
                ei.getConfig({ location: "handleConnectionOpen" }).enabled &&
                tt.updateFieldTrial("WebRTC-Audio-iOS-Holding", "Enabled"),
            (0, p.isIOS)() && (tt.setNcModels?.(ed), i.emitChange()),
            nC(t.inputDeviceId),
            nL());
    },
    CONNECTION_CLOSED: function () {
        r = null;
    },
    POST_CONNECTION_OPEN: function () {
        return ((0, p.isWeb)() && i.startDavePreload(), !1);
    },
    RTC_CONNECTION_STATE: function (e) {
        switch (e.state) {
            case ev.S7L.CONNECTING:
                nI();
                break;
            case ev.S7L.RTC_CONNECTING:
                ((tD = !1), (o = void 0), (d = void 0), (c = void 0), (ty = !1), l.reset());
                break;
            case ev.S7L.RTC_CONNECTED:
                nt();
                break;
            case ev.S7L.DISCONNECTED:
                ((t3 = {}),
                    (function () {
                        if (0 === tW.size) return;
                        let e = eq.x.DEFAULT,
                            { disabledLocalVideos: t } = t7(e);
                        (tW.forEach((n) => {
                            (g()(t[n], "If you are auto-disabled, then you are also disabled."),
                                delete t[n],
                                tt.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e));
                        }),
                            tW.clear(),
                            nh({ disabledLocalVideos: t }, e, !1));
                    })(),
                    nD());
        }
    },
    AUDIO_SET_TEMPORARY_SELF_MUTE: function (e) {
        let { mute: t } = e;
        ((tI = t), tt.eachConnection(ne));
    },
    AUDIO_TOGGLE_SELF_MUTE: function (e) {
        let { context: t, playSoundEffect: n } = e,
            { mute: i, deaf: r } = t7(t);
        if (t === eq.x.DEFAULT && (eR.A.requestPermission(e$.iL.AUDIO), tp)) return !1;
        ((i = !r && !i) || (r = !1), n || (tN = !0), nh({ mute: i, deaf: r }, t), tt.eachConnection(ne));
    },
    AUDIO_SET_SELF_MUTE: function (e) {
        let { context: t, mute: n, playSoundEffect: i } = e;
        (nh({ mute: n }, t), i || (tN = !0), tt.eachConnection(ne));
    },
    AUDIO_TOGGLE_SELF_DEAF: function (e) {
        let { context: t } = e;
        (nh({ deaf: !t7(t).deaf }, t), tt.eachConnection(ne));
    },
    AUDIO_TOGGLE_LOCAL_MUTE: function (e) {
        let { context: t, userId: n } = e;
        if (n === eB.default.getId()) return;
        let { localMutes: i } = t7(t);
        (i[n] ? delete i[n] : (i[n] = !0),
            nh({ localMutes: i }, t),
            tt.eachConnection((e) => e.setLocalMute(n, i[n] || !1), t));
    },
    AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
        let { context: t, userId: n, videoToggleState: i, persist: r, isAutomatic: a } = e;
        g()(!(r && a), "These are not allowed to both be true.");
        let s = i === ev.bb8.DISABLED,
            { disabledLocalVideos: l } = t7(t),
            o = l[n] ?? !1,
            d = tW.has(n),
            c = i === ev.bb8.AUTO_ENABLED || i === ev.bb8.MANUAL_ENABLED;
        (eQ.info(`disableVideo=${s} currentlyDisabled=${o} currentlyAutoDisabled=${d}, isVideoShown=${c}`),
            g()(!(d && !o), "If you are auto-disabled, then you are also disabled."));
        let u = s !== o,
            _ = t === eq.x.DEFAULT,
            E = a && u && _,
            A = r && u && _;
        eQ.info(`changed=${u} isDefaultContext=${_} isUpdateCausedByVideoHealthManager=${E} isManualToggleByUser=${A}`);
        let { videoToggleStateMap: h } = t7(t);
        if (
            (h[n] === ev.bb8.AUTO_PROBING &&
                i === ev.bb8.AUTO_ENABLED &&
                (0, eO.A)(n, s ? eq.Al.AUTO_DISABLE : eq.Al.AUTO_ENABLE, c),
            (h[n] = i),
            nh({ videoToggleStateMap: h }, t, r),
            i === ev.bb8.AUTO_PROBING
                ? eW.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !0)
                : eW.A.getRTCConnection()?.pauseStatsCollectionForUser(n, !1),
            tY ||
                (eQ.info(`isAutoDisableAllowed=${tY} - disabling VideoHealthManager`),
                eW.A.getRTCConnection()?.getVideoHealthManager()?.disable()),
            E)
        ) {
            if ((!s && !d) || (s && !tY)) return;
            ((0, eO.A)(n, s ? eq.Al.AUTO_DISABLE : eq.Al.AUTO_ENABLE, c), s ? tW.add(n) : tW.delete(n));
        } else
            A &&
                (d && !s
                    ? (eQ.info("disallowing auto-disable for this session because of manual override by user"),
                      (tY = !1),
                      eW.A.getRTCConnection()?.getVideoHealthManager()?.disable(),
                      (0, eO.A)(n, eq.Al.MANUAL_REENABLE, c))
                    : (0, eO.A)(n, s ? eq.Al.MANUAL_DISABLE : eq.Al.MANUAL_ENABLE, c));
        (_ && !s && tW.delete(n),
            s ? (l[n] = !0) : delete l[n],
            nh({ disabledLocalVideos: l }, t, r),
            tt.eachConnection((e) => e.setLocalVideoDisabled(n, l[n] ?? !1), t));
    },
    AUDIO_SET_LOCAL_VOLUME: function (e) {
        let { context: t, userId: n, volume: i } = e;
        if (n === eB.default.getId()) return;
        let r = t === eq.x.STREAM ? eq.Cn : eq.Hz,
            { localVolumes: a } = t7(t);
        (i === r ? delete a[n] : (a[n] = i),
            nh({ localVolumes: a }, t),
            tt.eachConnection((e) => e.setLocalVolume(n, i), t));
    },
    AUDIO_SET_LOCAL_PAN: function (e) {
        let { context: t, userId: n, left: i, right: r } = e,
            { localPans: a } = t7(t);
        ((a[n] = { left: i, right: r }), nh({ localPans: a }, t), tt.eachConnection((e) => e.setLocalPan(n, i, r), t));
    },
    AUDIO_SET_MODE: function (e) {
        let { context: t, mode: n, options: i } = e;
        (nh({ mode: n, modeOptions: { ...i, updatedAt: Date.now() } }, t), tt.eachConnection(t8));
    },
    AUDIO_SET_INPUT_VOLUME: function (e) {
        let { volume: t } = e;
        (nh({ inputVolume: t9(t) }), tt.setInputVolume(t));
    },
    AUDIO_SET_OUTPUT_VOLUME: function (e) {
        let { volume: t } = e;
        (nh({ outputVolume: t }), tt.setOutputVolume(t));
    },
    AUDIO_SET_INPUT_DEVICE: function (e) {
        let { id: t } = e;
        ((t = nN(t_, t)),
            (tc = performance.now()),
            nh({ inputDeviceId: t }),
            nO(t),
            tt.eachConnection(nc),
            (o = void 0),
            (d = void 0),
            (c = void 0),
            (ty = !1),
            l.reset());
    },
    AUDIO_SET_OUTPUT_DEVICE: function (e) {
        let { id: t } = e;
        (nh({ outputDeviceId: (t = nN(tE, t)) }), tt.setAudioOutputDevice(t), tt.eachConnection(nc));
    },
    AUDIO_SET_ACTIVE_INPUT_PROFILE: function (e) {
        let { inputProfile: t } = e;
        nh({ activeInputProfile: t });
        let n = t7();
        (tt.eachConnection((e) => {
            (t8(e), nc(e));
        }),
            tt.setAudioInputBypassSystemProcessing(n.bypassSystemInputProcessing),
            nb());
    },
    AUDIO_SET_ECHO_CANCELLATION: function (e) {
        let t = nh({ echoCancellation: e.enabled }),
            n = eH.A.hasEchoCancellation(t.inputDeviceId) || t.echoCancellation;
        (tt.eachConnection((e) => e.setEchoCancellation(n)), nb(), nv(e.location));
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION: function (e) {
        let t;
        ((t = nh({ sidechainCompression: e.enabled })), tt.setSidechainCompression(t.sidechainCompression));
    },
    AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH: function (e) {
        let t = nh({ sidechainCompressionStrength: e.strength });
        tt.setSidechainCompressionStrength(t.sidechainCompressionStrength);
    },
    AUDIO_SET_LOOPBACK: function (e) {
        let { enabled: t, loopbackReason: n } = e;
        return (t ? tK.add(n) : tK.delete(n), nb());
    },
    AUDIO_SET_NOISE_SUPPRESSION: function (e) {
        let t = nh({ noiseSuppression: e.enabled }),
            n = eH.A.hasNoiseSuppression(t.inputDeviceId) || t.noiseSuppression;
        (tt.eachConnection((e) => e.setNoiseSuppression(n)), nb(), nv(e.location));
    },
    AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function (e) {
        let t = nh({ automaticGainControl: e.enabled });
        (tt.eachConnection((e) => nl(e, t.automaticGainControl)), nb(), nv(e.location));
    },
    AUDIO_SET_NOISE_CANCELLATION: function (e) {
        let t = nh({ noiseCancellation: e.enabled });
        (tt.eachConnection((e) => no(e, t.noiseCancellation)), nb(), nv(e.location));
    },
    AUDIO_SET_KRISP_MODEL_OVERRIDE: function (e) {
        (eL.A.setKrispModelOverride(e.model), (E = e.model), nb());
    },
    AUDIO_SET_DISPLAY_SILENCE_WARNING: function (e) {
        nh({ silenceWarning: e.enabled });
    },
    AUDIO_SET_DEBUG_LOGGING: function (e) {
        tt.setDebugLogging(e.enabled);
    },
    AUDIO_SET_KRISP_SUPPRESSION_LEVEL: function (e) {
        let { level: t } = e;
        ((_ = t), eL.A.setKrispSuppressionLevel(t));
    },
    AUDIO_SET_NOISE_CANCELLATION_ENABLE_STATS: function (e) {
        (0, p.isWeb)() || ((tw = e.enabled), tt.setNoiseCancellationEnableStats?.(e.enabled));
    },
    MEDIA_ENGINE_SET_VIDEO_HOOK: function (e) {
        nh({ videoHook: e.enabled });
    },
    MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function (e) {
        nh({ experimentalSoundshare2: e.enabled });
    },
    MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER: function (e) {
        let { enabled: t } = e;
        nh({ useSystemScreensharePicker: t });
    },
    AUDIO_SET_ATTENUATION: function (e) {
        let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i } = e,
            r = nh({ attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: i });
        tt.eachConnection((e) =>
            e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers),
        );
    },
    AUDIO_SET_QOS: function (e) {
        let { enabled: t } = e;
        (nh({ qos: t }), tt.eachConnection((e) => e.setQoS(t)));
    },
    MEDIA_ENGINE_DEVICES: function (e) {
        let t = t_;
        if (
            ((t_ = nS(e, { deviceType: eq.oh.AUDIO_INPUT, defaultName: eZ.intl.string(eZ.t["/QIjDA"]) })),
            !N().isEqual(t_, t))
        ) {
            let e = t7();
            (nO(nN(t_, e.inputDeviceId)), tt.eachConnection(nc));
        }
        !(function (e) {
            let t = tE;
            if (
                ((tE = nS(e, { deviceType: eq.oh.AUDIO_OUTPUT, defaultName: eZ.intl.string(eZ.t.xlUg0v) })),
                !N().isEqual(tE, t))
            ) {
                let e = t7(),
                    n = nN(tE, e.outputDeviceId);
                (tt.setAudioOutputDevice(n), tt.eachConnection(nc));
                let i = nR(t),
                    r = nR(tE);
                i !== r &&
                    tt.eachConnection((e) => {
                        e.context === eq.x.STREAM && e.setSoundshareDiscardRearChannels(r);
                    });
            }
        })(e);
        tL = e.videoDevices.length > 0;
        let n = tA;
        if (
            ((tA = nS(e, { deviceType: eq.oh.VIDEO_INPUT, defaultName: eZ.intl.string(eZ.t.WKWARY) })),
            tm && !N().isEqual(tA, n))
        ) {
            let e = void 0 !== tA[tg],
                t = tg === eq.dx && n[eq.dx]?.disabled,
                i = "Firefox" === O().name && "" === tg && n[tg]?.name === "Default" && !n[tg]?.disabled;
            nt(e || t || i);
        }
    },
    AUDIO_VOLUME_CHANGE: function (e) {
        let { inputVolume: t, outputVolume: n } = e;
        nh({ inputVolume: t9(t), outputVolume: n });
    },
    AUDIO_RESET: function () {
        (v.w.remove(eJ), location.reload());
    },
    AUDIO_INPUT_DETECTED: function (e) {
        let { inputDetected: t } = e;
        if (null == t) return !1;
        ((tD = !0 !== ty && !t), t && (ty = !0));
    },
    AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED: function (e) {
        let { osVolume: t, osMuted: n } = e;
        ((d = t), (o = n));
    },
    AUDIO_INPUT_DEVICE_HARDWARE_MUTED_CHANGED: function (e) {
        let { deviceGuid: t, hardwareMuted: n } = e,
            i = nN(t_, t7().inputDeviceId),
            r = t_[i];
        if (t !== r?.guid) return !1;
        ((c = n), eD.default.track(ev.HAw.HARDWARE_MUTE_DETECTED, { input_device_name: r?.name, hardware_muted: n }));
    },
    AUDIO_SET_SUBSYSTEM: function (e) {
        nG(e.subsystem);
    },
    AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING: function (e) {
        let t = e.bypassEnabled;
        (nh({ bypassSystemInputProcessing: t }), tt.setAudioInputBypassSystemProcessing(t), nd(), nv(e.location));
    },
    MEDIA_ENGINE_SET_AUDIO_ENABLED: function (e) {
        ((ta = e.enabled), e.unmute && nh({ mute: !1, deaf: !1 }), tt.eachConnection(ne));
    },
    MEDIA_ENGINE_SET_VIDEO_ENABLED: function (e) {
        let { enabled: t } = e;
        (eR.A.requestPermission(e$.iL.CAMERA), nt(t));
    },
    MEDIA_ENGINE_PERMISSION: function (e) {
        let { kind: t, granted: n } = e;
        if (!n)
            switch (t) {
                case "audio":
                    ((ta = !1), tt.eachConnection(ne));
                    break;
                case "video":
                    nt(!1);
            }
    },
    MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
        let { settings: t } = e;
        if (t?.desktopSettings != null) {
            let e = null,
                n = null,
                { sourceId: i, sound: r } = t.desktopSettings,
                s = t.context ?? eq.x.DEFAULT,
                l = t.qualityOptions ?? { resolution: 720, frameRate: 30 },
                o = i.startsWith(`${eq.fS.ACTIVITY}:`),
                d = o ? null : eG.A.getPidFromDesktopSource(i);
            (p.isPlatformEmbedded && !o && ({ soundshareId: e, soundshareSession: n } = ny(d, r)),
                s !== tl && (null != a && tt.setGoLiveSource(null, tl), (tl = s)),
                nt(s === eq.x.STREAM && tm, {
                    desktopSource: { id: i, sourcePid: d, soundshareId: e, soundshareSession: n },
                    quality: { resolution: l.resolution, frameRate: l.frameRate },
                }));
        } else if (t?.cameraSettings != null) {
            let e = t.context ?? eq.x.DEFAULT,
                { videoDeviceGuid: n, audioDeviceGuid: i, sound: r } = t.cameraSettings,
                a = e === eq.x.STREAM && tm,
                s = t.qualityOptions ?? { resolution: 720, frameRate: 30 };
            nt(a, {
                cameraSource: { videoDeviceGuid: n, audioDeviceGuid: i, sound: r },
                quality: { resolution: s.resolution, frameRate: s.frameRate },
            });
        } else nt(tm, null);
    },
    MEDIA_ENGINE_SET_VIDEO_DEVICE: function (e) {
        let { id: t } = e;
        (nh({ videoDeviceId: (t = nN(tA, t)) }), nt());
    },
    MEDIA_ENGINE_INTERACTION_REQUIRED: function (e) {
        return ts !== e.required && ((ts = e.required), e.required || tt.interact(), !0);
    },
    USER_SETTINGS_MODAL_INIT: nk,
    USER_SETTINGS_MODAL_SET_SECTION: nk,
    CERTIFIED_DEVICES_SET: function () {
        return (tt.eachConnection(nc), !1);
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
        ((ti = t.settingsByContext),
            (t_ = t.inputDevices),
            (tE = t.outputDevices),
            (t$ = t.appSupported),
            (tM = t.krispModuleLoaded),
            (tP = t.krispFatalError),
            (u = t.krispVersion),
            (tl = t.goLiveContext));
    },
    APP_STATE_UPDATE: function (e) {
        let { state: t } = e,
            n = V.A.isEnabled();
        if (t === ev.g6G.BACKGROUND && tm && !n) ((tR = !0), nt(!1));
        else {
            if (t !== ev.g6G.ACTIVE || !tR) return !1;
            ((tR = !1), nt(!0));
        }
        return !0;
    },
    SET_CHANNEL_BITRATE: function (e) {
        tt.eachConnection((t) => t.setBitRate(e.bitrate));
    },
    SET_VAD_PERMISSION: function (e) {
        let { hasPermission: t } = e,
            n = !t;
        if (n === tp) return !1;
        ((tp = n), tt.eachConnection(ne));
    },
    SET_NATIVE_PERMISSION: function (e) {
        let { state: t, permissionType: n } = e,
            i = t === e$.hL.ACCEPTED;
        switch (n) {
            case e$.iL.AUDIO:
                ((tj = !0), tt.eachConnection(ne));
                break;
            case e$.iL.CAMERA:
                !i && tm && nt(!1);
                break;
            default:
                return !1;
        }
    },
    SET_CHANNEL_VIDEO_QUALITY_MODE: function (e) {
        tt.eachConnection((t) => t.applyVideoQualityMode(e.mode));
    },
    MEDIA_ENGINE_SET_AEC_DUMP: function (e) {
        let { enabled: t } = e,
            n = nh({ aecDumpEnabled: t });
        tt.setAecDump(n.aecDumpEnabled);
    },
    MEDIA_ENGINE_SET_OPENH264_ENABLED: function (e) {
        let { enabled: t } = e;
        (nh({ openH264Enabled: t }), T.Ay?.setOpenH264Enabled?.(t));
    },
    MEDIA_ENGINE_RESET_SETTINGS: function (e) {
        let { overrides: t } = e;
        if (__OVERLAY__) return !1;
        ((ti = Object.values(eq.x).reduce((e, n) => {
            let i = e8();
            return ((e[n] = N().merge(i, t[n])), e);
        }, {})),
            v.w.set(eJ, ti),
            nf());
    },
    CHANNEL_DELETE: function () {
        if ((!tm && null == a) || null != eW.A.getRTCConnectionId()) return !1;
        nt(!1, null);
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: function (e) {
        if (e.code === eq.CO.KRISP_CPU_OVERUSE) {
            ((t3.noiseCancellation = !1), (t3.noiseSuppression = !0));
            let e = t7();
            return (tt.eachConnection((t) => no(t, e.noiseCancellation)), nb(), nv(), !0);
        }
        return !1;
    },
    MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR: function (e) {
        return (
            e.code === eq.CO.KRISP_VAD_CPU_OVERUSE &&
            ((t3.modeOptions = { vadUseKrisp: !1 }), tt.eachConnection((e) => t8(e)), !0)
        );
    },
    MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function () {
        return !!tx && ((tx = !1), !0);
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
        let { settings: t } = e;
        tt.applyMediaFilterSettings(t).finally(() => {
            ((tk = !1), i.emitChange());
        });
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function () {
        tk = !0;
    },
    MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function () {
        tk = !1;
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            local: n,
            wasSaved: i,
        } = e;
        if (t !== ez.oD.PRELOADED_USER_SETTINGS || n || null != i) return !1;
        nL(!0);
    },
    CLIPS_INIT: function (e) {
        let { sourceId: t, applicationName: n, quality: r } = e;
        if (null == P.A || (s?.desktopSource.id === t && s.quality === r)) return !1;
        null != s &&
            (tt.setClipsSource(null),
            (0, p.isWindows)() &&
                (null != s.desktopSource.soundshareId
                    ? U.c1(s.desktopSource.soundshareId)
                    : null != s.desktopSource.sourcePid && t7().videoHook && U.c1(s.desktopSource.sourcePid)));
        let a = eG.A.getPidFromDesktopSource(t),
            { soundshareId: l, soundshareSession: o } = ny(a, !0);
        s = { desktopSource: { id: t, sourcePid: a, soundshareId: l, soundshareSession: o }, quality: r };
        let d = t6("MediaEngineStore clips"),
            c = t7().videoHook,
            u = c && eT.getConfig({ location: "handleClipsInit" }).enabled,
            { minCaptureWidth: _, minCaptureHeight: E } = ef.getConfig({ location: "handleClipsInit" });
        tt.setClipsSource({
            desktopDescription: {
                id: s.desktopSource.id,
                soundshareId: s.desktopSource.soundshareId,
                useVideoHook: c,
                useGraphicsCapture: nu(),
                useCaptureDeviceForEncode: !1,
                useLoopback: i.getExperimentalSoundshare(),
                useQuartzCapturer: !0,
                allowScreenCaptureKit: n_(),
                videoHookStaleFrameTimeoutMs: 500,
                graphicsCaptureStaleFrameTimeoutMs: e2,
                hdrCaptureMode: d,
                videoHookAllowDx12: u,
                minCaptureWidth: _,
                minCaptureHeight: E,
            },
            quality: r,
            bitratePercent: r.bitratePercent,
            applicationName: n,
            videoEncoderExperiments: i.getVideoEncoderExperiments(eq.x.STREAM, "streamer"),
        });
    },
    CLIPS_RESTART: function () {
        s = null;
    },
    CLIPS_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        !1 === t.clipsEnabled && ((s = null), tt.setClipsSource(null));
    },
    MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE: function (e) {
        tQ = e.enabled;
    },
    MEDIA_ENGINE_SET_DEVICE_AUDIO_EFFECTS: function (e) {
        let { deviceId: t, active: n, available: i } = e;
        ((tB[t] = { active: n, available: i }), nd());
    },
}));
