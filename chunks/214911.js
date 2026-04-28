"use strict";
let i;
n.d(t, { A: () => e9 });
var r,
    s,
    a,
    o,
    l,
    _ = n(627968),
    d = n(214958),
    u = n.n(d);
(window.AudioContext = window.AudioContext ?? window.webkitAudioContext),
    null != window.RTCPeerConnection &&
        "Chrome" === u().name &&
        52 > ("u" < typeof platform ? 0 : parseInt(platform?.version ?? "0", 10)) &&
        ["createOffer", "createAnswer"].forEach((e) => {
            let t = RTCPeerConnection.prototype[e];
            RTCPeerConnection.prototype[e] = function () {
                for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                let r = this;
                if (n.length < 1 || (1 === n.length && "object" == typeof n[0])) {
                    let e = 1 === n.length ? n[0] : void 0;
                    return (
                        null != e &&
                            (e = {
                                mandatory: {
                                    OfferToReceiveAudio: e.offerToReceiveAudio || !1,
                                    OfferToReceiveVideo: e.offerToReceiveVideo || !1,
                                },
                                optional: [
                                    { VoiceActivityDetection: e.voiceActivityDetection || !1 },
                                    { IceRestart: e.iceRestart || !1 },
                                ],
                            }),
                        new Promise((n, i) => t.apply(r, [n, i, e]))
                    );
                }
                return t.apply(this, n);
            };
        });
var c = n(64700),
    E = n(284009),
    h = n.n(E),
    m = n(972347),
    f = n(738239),
    g = n.n(f),
    I = n(118356),
    A = n(904986),
    p = n(205693),
    T = n(70909);
let S = {},
    N = null;
function O(e) {
    let t = S[e] ?? 0;
    0 === t && N?.(e, !0), (S[e] = t + 1);
}
function R(e) {
    S[e]--, 0 === S[e] && N?.(e, !1);
}
var C = n(143236),
    y = n(223926),
    D = n.n(y),
    L = n(731854);
let v = null != navigator.mediaDevices && null != navigator.mediaDevices.enumerateDevices,
    w = v && "setSinkId" in HTMLAudioElement.prototype;
function P(e) {
    return { id: L.dx, type: e, index: 0, name: "Default" };
}
function b() {
    return {
        [L.oh.AUDIO_INPUT]: [P(L.oh.AUDIO_INPUT)],
        [L.oh.AUDIO_OUTPUT]: [P(L.oh.AUDIO_OUTPUT)],
        [L.oh.VIDEO_INPUT]: [P(L.oh.VIDEO_INPUT)],
    };
}
function k(e, t) {
    return {
        id: e.deviceId,
        type: e.kind,
        index: t,
        name: null != e.label && "" !== e.label ? e.label : 0 === t ? "Default" : `Device ${t}`,
    };
}
async function U() {
    if (!v) return b();
    try {
        let e = await navigator.mediaDevices.enumerateDevices(),
            { [L.oh.AUDIO_INPUT]: t = [], [L.oh.AUDIO_OUTPUT]: n = [], [L.oh.VIDEO_INPUT]: i = [] } = D()(e, "kind"),
            [r, s, a] = [t, n, i].map((e) => e.map(k));
        return { [L.oh.AUDIO_INPUT]: r, [L.oh.AUDIO_OUTPUT]: w ? s : [P(L.oh.AUDIO_OUTPUT)], [L.oh.VIDEO_INPUT]: a };
    } catch {
        return b();
    }
}
async function M() {
    return (await U())[L.oh.AUDIO_INPUT];
}
async function G() {
    return (await U())[L.oh.AUDIO_OUTPUT];
}
async function x() {
    return (await U())[L.oh.VIDEO_INPUT];
}
async function V() {
    let e = await U();
    return [e[L.oh.AUDIO_INPUT], e[L.oh.AUDIO_OUTPUT], e[L.oh.VIDEO_INPUT]];
}
class F {
    acquire(e) {
        return navigator.mediaDevices.getUserMedia(e);
    }
    release(e) {
        e.getTracks().forEach((e) => {
            (e.onended = function () {}), e.stop();
        });
    }
}
n(321073), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
class B {
    threshold;
    currentVolume = 0;
    analyser;
    interval;
    fftBins;
    source;
    speakingHistory;
    speakingHistoryIndex = 0;
    speakingCounter = 0;
    silenceThreshold;
    silentFrames;
    onProcess = null;
    constructor(e, t, n, i = 0.1, r = 10) {
        const s = e.createAnalyser();
        (s.fftSize = 512), (s.smoothingTimeConstant = i);
        const a = e.createMediaStreamSource(t);
        a.connect(s);
        const o = [];
        for (let e = 0; e < r; e++) o.push(!1);
        const l = window.setInterval(() => {
            this.update(), this.onProcess?.(this.speaking, this.currentVolume);
        }, 20);
        (this.threshold = n),
            (this.analyser = s),
            (this.interval = l),
            (this.fftBins = new Float32Array(s.fftSize)),
            (this.source = a),
            (this.speakingHistory = o),
            (this.silenceThreshold = this.speakingHistory.length),
            (this.silentFrames = this.silenceThreshold);
    }
    stop() {
        this.source.disconnect(), clearInterval(this.interval), (this.speakingCounter = 0);
    }
    get speaking() {
        return this.speakingCounter > 0 || this.silentFrames < this.silenceThreshold;
    }
    update() {
        (this.currentVolume = (function (e, t) {
            let n = -1 / 0;
            e.getFloatFrequencyData(t);
            for (let e = 4; e < t.length; e++) t[e] > n && t[e] < 0 && (n = t[e]);
            return n;
        })(this.analyser, this.fftBins)),
            this.speakingHistory[this.speakingHistoryIndex] && this.speakingCounter--;
        let e = this.currentVolume > this.threshold;
        (this.speakingHistory[this.speakingHistoryIndex] = e),
            e && this.speakingCounter++,
            ++this.speakingHistoryIndex === this.speakingHistory.length && (this.speakingHistoryIndex = 0),
            this.speakingCounter > 0 ? (this.silentFrames = 0) : this.silentFrames++;
    }
}
var H = n(818348);
let Y = new I.Vy("Output"),
    W = new F();
class K extends C.EventEmitter {
    stream;
    context;
    sourceId;
    _mute = !1;
    _echoCancellation = !0;
    _noiseSuppression = !0;
    _automaticGainControl = !0;
    _noiseCancellation = !1;
    _audioFilter = void 0;
    speaking = !1;
    mode = L.TB.VOICE_ACTIVITY;
    modeOptions = { delay: 20, threshold: -40 };
    cleanup;
    pttReleaseDelayTimeout;
    destroyed = !1;
    constructor(e) {
        super(), (this.context = e);
    }
    destroy() {
        this.removeAllListeners(),
            this.cleanup?.(),
            this.reset(),
            null != this.stream && (W.release(this.stream), (this.stream = void 0)),
            this._audioFilter?.dispose(),
            (this._audioFilter = void 0),
            (this.destroyed = !0);
    }
    reset() {
        this.setSpeaking(!1);
    }
    resume() {
        this.context.resume();
    }
    get state() {
        return this.context.state;
    }
    getDelayedStream() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0.2,
            t = this.context;
        if (null == this.stream) throw Error("AudioInput: No MediaStream");
        let n = t.createDelay(e);
        (n.delayTime.value = e), t.createMediaStreamSource(this.stream).connect(n);
        let i = t.createMediaStreamDestination();
        return n.connect(i), i.stream;
    }
    get mute() {
        return this._mute;
    }
    set mute(e) {
        (this._mute = e), this.updateAudioTracks(), this.setSpeaking(!1);
    }
    get echoCancellation() {
        return this._echoCancellation;
    }
    set echoCancellation(e) {
        this._echoCancellation !== e && ((this._echoCancellation = e), null != this.stream && this.enable());
    }
    get noiseSuppression() {
        return this._noiseSuppression;
    }
    set noiseSuppression(e) {
        this._noiseSuppression !== e && ((this._noiseSuppression = e), null != this.stream && this.enable());
    }
    get noiseCancellation() {
        return this._noiseCancellation;
    }
    set noiseCancellation(e) {
        this._noiseCancellation !== e && ((this._noiseCancellation = e), null != this.stream && this.enable());
    }
    get automaticGainControl() {
        return this._automaticGainControl;
    }
    set automaticGainControl(e) {
        this._automaticGainControl !== e && ((this._automaticGainControl = e), null != this.stream && this.enable());
    }
    async enable() {
        null != this.cleanup && (this.cleanup(), (this.cleanup = void 0)),
            null != this.stream && (W.release(this.stream), (this.stream = void 0));
        let e = await M(),
            t = {
                echoCancellation: this.echoCancellation,
                noiseSuppression: this.noiseSuppression,
                autoGainControl: this.automaticGainControl,
            };
        e.some((e) => e.id === this.sourceId) && (t.deviceId = { exact: this.sourceId });
        try {
            let e = await W.acquire({ audio: t });
            if (this.destroyed) throw (W.release(e), Error("AudioInput: Already destroyed"));
            if (this._noiseCancellation)
                try {
                    let t = await (i ??
                        (i = (async () => {
                            let { default: e } = await n.e("64920").then(n.t.bind(n, 259047, 23)),
                                t = new e({
                                    params: {
                                        logProcessStats: !1,
                                        useSharedArrayBuffer: !1,
                                        debugLogs: !1,
                                        bufferOverflowMS: 200,
                                        models: {
                                            model8: "https://cdn.discordapp.com/assets/krisp_browser_models/v1.0.11_1/model_8.kw",
                                            model16:
                                                "https://cdn.discordapp.com/assets/krisp_browser_models/v1.0.11_1/model_16.kw",
                                            model32:
                                                "https://cdn.discordapp.com/assets/krisp_browser_models/v1.0.11_1/model_32.kw",
                                        },
                                    },
                                });
                            return await t.init(), t;
                        })()));
                    (this._audioFilter = await t.createNoiseFilter(this.context)),
                        this._audioFilter.addEventListener("ready", (e) => {
                            this._audioFilter?.enable();
                        }),
                        this._audioFilter.addEventListener("dispose", (t) => {
                            W.release(e);
                        });
                    let r = this.context.createMediaStreamSource(e),
                        s = this.context.createMediaStreamDestination();
                    r.connect(this._audioFilter), this._audioFilter.connect(s), (this.stream = s.stream);
                } catch (t) {
                    Y.error("failure creating krisp node"), Y.error(t), (this.stream = e);
                }
            else this.stream = e;
            return (
                this.updateMode(),
                this.updateAudioTracks(),
                this.emit("permission", !0),
                this.emit("stream", this.stream),
                e
            );
        } catch (e) {
            if ("string" != typeof e)
                switch (e.name) {
                    case "PermissionDeniedError":
                    case "NotAllowedError":
                        throw (this.emit("permission", !1), H.xe.PERMISSION_DENIED);
                    case "PermissionDismissedError":
                        throw (this.emit("permission", !1), H.xe.PERMISSION_DISMISSED);
                    case "DevicesNotFoundError":
                    case "NotFoundError":
                        throw H.xe.NO_DEVICES_FOUND;
                    default:
                        throw e.name || "UNKNOWN";
                }
            throw e;
        }
    }
    setSource(e) {
        this.sourceId !== e && ((this.sourceId = e), null != this.stream && this.enable());
    }
    setPTTActive(e) {
        this.mute ||
            (this.speaking !== e &&
                (null != this.pttReleaseDelayTimeout &&
                    (window.clearTimeout(this.pttReleaseDelayTimeout), (this.pttReleaseDelayTimeout = void 0)),
                e
                    ? this.setSpeaking(e)
                    : (this.pttReleaseDelayTimeout = window.setTimeout(() => {
                          this.setSpeaking(!1), (this.pttReleaseDelayTimeout = void 0);
                      }, this.modeOptions.delay))));
    }
    setMode(e, t) {
        (this.mode = e), (this.modeOptions = t), null != this.stream && this.enable();
    }
    updateMode() {
        null != this.cleanup && (this.cleanup(), (this.cleanup = void 0)),
            null != this.stream &&
                this.mode === L.TB.VOICE_ACTIVITY &&
                (this.cleanup = this.setupVoiceActivity(this.modeOptions));
    }
    setupVoiceActivity(e) {
        let { threshold: t } = e;
        if (null == this.stream) throw Error("stream cannot be null");
        null == t && (t = -40);
        let n = new B(this.context, this.stream, t);
        return (
            (n.onProcess = (e, t) => {
                this.mute || this.setSpeaking(e), this.emit("voiceactivity", t);
            }),
            () => {
                null != n && (n.stop(), (n = null), this.setSpeaking(!1));
            }
        );
    }
    setSpeaking(e) {
        this.speaking !== e && ((this.speaking = e), this.emit("speaking", e));
    }
    updateAudioTracks() {
        if (null != this.stream) {
            let e = this.stream.getAudioTracks();
            for (let t = 0, n = e.length; t < n; t++) e[t].enabled = !this._mute;
        }
    }
}
n(142703);
var j = n(473318),
    $ = n.n(j),
    z = n(128080),
    q = n.n(z),
    X = n(201327);
let Q = new F();
class J extends C.EventEmitter {
    stream = new MediaStream();
    sourceId = L.qe;
    streamId = null;
    destroyed = !1;
    destroy() {
        null != this.stream && (Q.release(this.stream), (this.stream = null)),
            null != this.streamId && (0, X.it)(this.streamId),
            (this.destroyed = !0);
    }
    getStreamId() {
        return this.streamId;
    }
    async setSource(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (this.sourceId === e) return this.stream;
        (this.sourceId = e), null != this.stream && (Q.release(this.stream), (this.stream = null));
        let n = await x();
        if (this.sourceId === L.qe) return this.setStream(new MediaStream());
        let i = { width: 1280, ...t };
        n.some((e) => e.id === this.sourceId) && (i.deviceId = this.sourceId);
        try {
            let e = await Q.acquire({ audio: !1, video: i });
            if (this.destroyed) throw (Q.release(e), Error("VideoInput: Already destroyed"));
            return this.emit("permission", !0), this.setStream(e);
        } catch (e) {
            if ("string" != typeof e)
                switch (e.name) {
                    case "PermissionDeniedError":
                    case "NotAllowedError":
                        throw (this.emit("permission", !1), H.xe.PERMISSION_DENIED);
                    case "PermissionDismissedError":
                        throw (this.emit("permission", !1), H.xe.PERMISSION_DISMISSED);
                    case "DevicesNotFoundError":
                    case "NotFoundError":
                        throw H.xe.NO_DEVICES_FOUND;
                    default:
                        throw e.name || "UNKNOWN";
                }
            throw e;
        }
    }
    setStream(e) {
        return (
            null != this.streamId && ((0, X.it)(this.streamId), (this.streamId = null)),
            (this.stream = e),
            (e.onaddtrack = (e) => this.emit("add-video-track", e)),
            e.getVideoTracks().length > 0 && (this.streamId = (0, X.ju)(e)),
            this.emit("stream", e),
            this.emit("video", this.getStreamId()),
            e
        );
    }
}
var Z =
    (((r = {}).Stream = "stream"),
    (r.Video = "video"),
    (r.Mute = "mute"),
    (r.VoiceActivity = "voiceactivity"),
    (r.DesktopSourceEnd = "desktopsourceend"),
    (r.Speaking = "speaking"),
    (r.AudioPermission = "audio-permission"),
    (r.VideoPermission = "video-permission"),
    (r.AddVideoTrack = "add-video-track"),
    r);
class ee extends m.A {
    audio;
    video = new J();
    desktop = null;
    stream;
    constructor(e) {
        super(),
            (this.audio = new K(e)),
            this.audio.addListener("voiceactivity", this.handleVoiceActivity),
            this.audio.addListener("speaking", this.handleSpeaking),
            this.audio.addListener("stream", this.mergeStreams),
            this.audio.addListener("permission", this.handleAudioPermission),
            this.video.addListener("stream", this.mergeStreams),
            this.video.addListener("permission", this.handleVideoPermission),
            this.video.addListener("add-video-track", (e) => this.emit("add-video-track", e));
    }
    destroy() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.removeAllListeners(), this.destroyStreams(e);
    }
    destroyStreams() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.audio.destroy(), this.video.destroy(), e ? this.desktop?.reuse() : this.desktop?.destroy();
    }
    setDesktop(e) {
        this.destroyStreams(),
            e?.addListener("desktopsourceend", this.handleDesktopSourceEnd),
            e?.addListener("speaking", this.handleSpeaking),
            (this.desktop = e),
            this.mergeStreams();
    }
    reset() {
        this.audio.reset(), this.desktop?.reset();
    }
    getVideoStream() {
        return null != this.desktop ? this.desktop.stream : this.video.stream;
    }
    getVideoStreamId() {
        return null != this.desktop ? this.desktop.getStreamId() : this.video.getStreamId();
    }
    enableAudioInput() {
        this.audio.enable();
    }
    setAudioMode(e, t) {
        this.audio.setMode(e, t);
    }
    setMute(e) {
        (this.audio.mute = e), this.emit("mute", e);
    }
    setEchoCancellation(e) {
        this.audio.echoCancellation = e;
    }
    setNoiseSuppression(e) {
        this.audio.noiseSuppression = e;
    }
    setNoiseCancellation(e) {
        this.audio.noiseCancellation = e;
    }
    getNoiseCancellation() {
        return this.audio.noiseCancellation;
    }
    setAutomaticGainControl(e) {
        this.audio.automaticGainControl = e.enabled;
    }
    setPTTActive(e) {
        this.audio.setPTTActive(e);
    }
    setAudioSource(e) {
        this.audio.setSource(e);
    }
    setVideoSource(e) {
        this.video.setSource(e);
    }
    mute() {
        return this.audio.mute;
    }
    resumeAudio() {
        this.audio.resume();
    }
    getAudioState() {
        return this.audio.state;
    }
    hasDesktopSource() {
        return null != this.desktop;
    }
    mergeStreams = () => {
        let e = new MediaStream();
        return (
            null != this.desktop
                ? (this.desktop.stream?.getTracks().forEach((t) => e.addTrack(t)), this.desktop.refreshSpeaking())
                : (this.audio.stream?.getAudioTracks().forEach((t) => e.addTrack(t)),
                  this.video.stream?.getVideoTracks().forEach((t) => e.addTrack(t))),
            (this.stream = e),
            this.emit("stream", e),
            this.emit("video", this.getVideoStreamId()),
            e
        );
    };
    handleVoiceActivity = (e) => {
        this.emit("voiceactivity", e);
    };
    handleDesktopSourceEnd = () => {
        this.emit("desktopsourceend");
    };
    handleSpeaking = (e) => {
        this.emit("speaking", e);
    };
    handleAudioPermission = (e) => {
        this.emit("audio-permission", e);
    };
    handleVideoPermission = (e) => {
        this.emit("video-permission", e);
    };
}
let et = new I.Vy("Output");
var en = (((s = {}).InteractionRequired = "interactionrequired"), (s.Speaking = "speaking"), (s.Video = "video"), s);
class ei extends m.A {
    id;
    _speakingFlags = L.ME.NONE;
    _mute = !1;
    _volume = L.Hz;
    sinkId = null;
    audioElement = null;
    stream = new MediaStream();
    videoStreamId = null;
    levelNode = null;
    streamSourceNode = null;
    audioContext;
    constructor(e, t) {
        super(), (this.id = e), (this.audioContext = t);
    }
    play() {
        this.audioElement?.play();
    }
    destroy() {
        this.audioElement?.pause(),
            null != this.videoStreamId && (0, X.it)(this.videoStreamId),
            null != this.streamSourceNode && (this.streamSourceNode.disconnect(), (this.streamSourceNode = null)),
            null != this.levelNode &&
                (this.levelNode.disconnect(), this.levelNode.port.postMessage("close"), (this.levelNode = null)),
            this.setSpeakingFlags(L.ME.NONE),
            this.removeAllListeners();
    }
    addTrack(e) {
        if (this.stream.getTracks().includes(e)) return this.stream.getTracks().length;
        if ((this.stream.addTrack(e), null == this.audioElement)) {
            let e = document.createElement("audio");
            e.srcObject = this.stream;
            let t = e.play();
            null != t && t.catch(() => this.emit("interactionrequired", !0)),
                (this.audioElement = e),
                this.updateAudioElement();
        }
        if (null == this.levelNode && this.stream.getAudioTracks().length > 0) {
            this.streamSourceNode = this.audioContext.createMediaStreamSource(this.stream);
            try {
                (this.levelNode = new AudioWorkletNode(this.audioContext, "level-processor")),
                    (this.levelNode.port.onmessage = (e) => {
                        this.emit("speaking", e.data);
                    }),
                    null != this.streamSourceNode && this.streamSourceNode.connect(this.levelNode);
            } catch (e) {
                et.warn(`Output#Failed to setup speaking indicator: ${e}`);
            }
        }
        return (
            "video" === e.kind &&
                (null != this.videoStreamId && (0, X.it)(this.videoStreamId),
                this.stream.getVideoTracks().forEach((t) => {
                    e !== t && ((t.discordIsTearingDown = !0), this.stream.removeTrack(t));
                }),
                (this.videoStreamId = (0, X.ju)(this.stream)),
                this.emit("video", this.videoStreamId)),
            "audio" === e.kind &&
                this.stream.getAudioTracks().forEach((t) => {
                    e !== t && ((t.discordIsTearingDown = !0), this.stream.removeTrack(t));
                }),
            this.stream.getTracks().length
        );
    }
    removeTrack(e) {
        return (
            this.stream.removeTrack(e),
            "video" === e.kind &&
                (null != this.videoStreamId && (0, X.it)(this.videoStreamId), this.emit("video", null)),
            this.stream.getTracks().length
        );
    }
    setSinkId(e) {
        (this.sinkId = e), this.updateAudioElement();
    }
    get mute() {
        return this._mute;
    }
    set mute(e) {
        (this._mute = e || !1), this.updateAudioElement();
    }
    get priority() {
        return (this._speakingFlags & L.ME.PRIORITY) === L.ME.PRIORITY;
    }
    get volume() {
        return this._volume;
    }
    set volume(e) {
        (this._volume = Math.max(0, Math.min(Math.round(e), L.Hz))), this.updateAudioElement();
    }
    get speakingFlags() {
        return this._speakingFlags;
    }
    setSpeakingFlags(e) {
        this._speakingFlags !== e && ((this._speakingFlags = e), this.updateAudioElement());
    }
    updateAudioElement() {
        let e = this.audioElement;
        if (null != e) {
            (e.muted = this._mute), (e.volume = this._volume / 100);
            let t = this.sinkId;
            null != t && w && e.setSinkId(t);
        }
    }
}
class er {
    inboundVideoBitrate = {};
    inboundDecodeFps = {};
    outboundVideoBitrate = {};
    outboundEncodeFps = {};
    update(e) {
        for (let t in e.rtp.inbound)
            for (let n of e.rtp.inbound[t])
                if ("video" === n.type) {
                    let e = this.getInboundBytesRecevierCalculator(n),
                        t = this.getInboundFrameDecodeRateCalculator(n);
                    (n.bitrate = e.calculate(n)), (n.frameRateDecode = t.calculate(n));
                }
        for (let t of e.rtp.outbound)
            if ("video" === t.type) {
                let e = this.getOutboundBytesSentCalculator(t),
                    n = this.getOutboundEncodeRateCalculator(t);
                (t.bitrate = e.calculate(t)), (t.frameRateEncode = n.calculate(t));
            }
    }
    static getCalculatorOrCreate(e, t, n, i) {
        let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
            s = e[t.ssrc];
        return null == s && ((s = new eo(n, i, r)), (e[t.ssrc] = s)), s;
    }
    getInboundBytesRecevierCalculator(e) {
        return er.getCalculatorOrCreate(this.inboundVideoBitrate, e, "bytesReceived", "timestamp", 3);
    }
    getInboundFrameDecodeRateCalculator(e) {
        return er.getCalculatorOrCreate(this.inboundDecodeFps, e, "framesDecoded", "timestamp", 5);
    }
    getOutboundBytesSentCalculator(e) {
        return er.getCalculatorOrCreate(this.outboundVideoBitrate, e, "bytesSent", "timestamp", 3);
    }
    getOutboundEncodeRateCalculator(e) {
        return er.getCalculatorOrCreate(this.outboundEncodeFps, e, "framesEncoded", "timestamp", 5);
    }
}
var es =
    (((a = es || {})[(a.NONE = 0)] = "NONE"),
    (a[(a.MILLISECONDS_FROM_SECONDS = 1)] = "MILLISECONDS_FROM_SECONDS"),
    (a[(a.BYTES_TO_BITS = 2)] = "BYTES_TO_BITS"),
    (a[(a.ROUND = 4)] = "ROUND"),
    a);
let ea = {
    0: { multiplier: 1 },
    1: { postfix: "_in_ms", multiplier: 1e3 },
    2: { bitrate: !0, postfix: "", multiplier: 8 },
};
class eo {
    accumulativeMetricKey;
    samplesMetricKey;
    previous;
    multiplier = 1;
    round = !1;
    constructor(e, t, n = 0) {
        for (const i in ((this.accumulativeMetricKey = e), (this.samplesMetricKey = t), es)) {
            const e = Number(i);
            !isNaN(e) && (n & e) != 0 && i in ea && (this.multiplier *= ea[i]?.multiplier ?? 1);
        }
        this.round = (4 & n) != 0;
    }
    calculate(e) {
        let t = this.previous;
        if (((this.previous = e), null == t)) return;
        let n = e.timestamp - t.timestamp;
        if (n <= 0 || "number" != typeof n) return;
        let i = t[this.accumulativeMetricKey],
            r = e[this.accumulativeMetricKey];
        if ("number" != typeof i || "number" != typeof r) return;
        let s = t[this.samplesMetricKey],
            a = e[this.samplesMetricKey];
        if ("number" != typeof s || "number" != typeof a) return;
        let o = ((r - i) / (a - s)) * this.multiplier;
        return this.round ? Math.round(o) : o;
    }
}
var el = n(752163);
function e_(e) {
    return { id: e.payloadType, name: e.mimeType.split("/").slice(1)[0] };
}
class ed {
    jitterStatsMap = new Map();
}
var eu = n(396574),
    ec =
        (((o = {})[(o.AUDIO_BITRATE = 0)] = "AUDIO_BITRATE"),
        (o[(o.VIDEO_RESOLUTION_SCALE = 1)] = "VIDEO_RESOLUTION_SCALE"),
        (o[(o.VIDEO_BITRATE = 2)] = "VIDEO_BITRATE"),
        (o[(o.VIDEO_FRAMERATE = 3)] = "VIDEO_FRAMERATE"),
        o);
class eE extends A.A {
    input;
    silenced = !1;
    interacted = !1;
    outputVolume = L.Hz;
    sinkId = L.dx;
    lastPingTime = 0;
    outputs = {};
    webrtcStats = new er();
    silenceThreshold = -100;
    transformStatsState = new ed();
    canHavePriority = new Set();
    prioritySpeakers = new Set();
    audioContext;
    constructor(e) {
        super(e.context, e.userId),
            (this.input = new ee(e.audioContext)),
            e.audioContext.addEventListener("statechange", this.handleAudioContextStateChange),
            (this.audioContext = e.audioContext),
            this.input.on(Z.AudioPermission, this.handleAudioPermission),
            this.input.on(Z.VideoPermission, this.handleVideoPermission),
            this.input.on(Z.Video, this.handleVideo),
            this.input.on(Z.Mute, (e) => this.emit(p.yq.Mute, e)),
            this.input.on(Z.Stream, this.handleStream),
            this.input.on(Z.DesktopSourceEnd, this.handleDesktopSourceEnd),
            this.input.on(Z.Speaking, this.handleInputSpeaking),
            this.input.on(Z.AddVideoTrack, this.handleAddVideoTrack),
            this.input.on(Z.Video, this.handleAddVideoTrack),
            this.on("newListener", this.handleNewListener),
            this.initializeStreamParameters(e.streamParameters);
    }
    interact() {
        for (let e of ((this.interacted = !0), Object.keys(this.outputs))) this.outputs[e].play();
        this.input.resumeAudio();
    }
    destroy() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (let e of (super.destroy(), Object.keys(this.outputs))) this.destroyOutput(e);
        this.input.destroy(e);
    }
    async getStats() {
        if (!eu.fA) return null;
        let e = await this.getRawStats(),
            t = null !== this.input.getVideoStreamId();
        return (function (e, t, n, i, r, s) {
            let a = {},
                o = {},
                l = [],
                _ = [];
            for (let t of e.values())
                switch (t.type) {
                    case "candidate-pair":
                        a[t.id] = t;
                        break;
                    case "codec":
                        o[t.id] = t;
                        break;
                    case "inbound-rtp":
                        l.push(t);
                        break;
                    case "outbound-rtp":
                        _.push(t);
                }
            let d = Object.values(a).find((e) => "succeeded" === e.state);
            if (void 0 === d) return null;
            let u = [];
            for (let e of _) {
                let t = o[e.codecId];
                if (null == t) continue;
                let i = {
                    type: e.kind,
                    ssrc: e.ssrc,
                    timestamp: e.timestamp,
                    sinkWant: (0, el.D)(n, e.ssrc, "video" === e.kind),
                    sinkWantAsInt: (0, el.q)(n, e.ssrc),
                    codec: e_(t),
                    bytesSent: e.bytesSent,
                    packetsSent: e.packetsSent,
                    bitrateTarget: e.targetBitrate,
                };
                if ("audio" === e.kind) u.push({ ...i, type: "audio" });
                else if ("video" === e.kind && r) {
                    var c;
                    let t = null !== e.frameWidth ? { width: e.frameWidth, height: e.frameHeight } : void 0;
                    u.push({
                        ...i,
                        framesEncoded: e.framesEncoded,
                        keyFramesEncoded: e.keyFramesEncoded,
                        firCount: e.firCount,
                        nackCount: e.nackCount,
                        pliCount: e.pliCount,
                        qpSum: e.qpSum,
                        averageEncodeTime:
                            null == e.framesEncoded || null === (c = e.totalEncodeTime) || 0 === c
                                ? void 0
                                : ((1e3 * e.totalEncodeTime) / e.framesEncoded).toFixed(1),
                        resolution: t,
                        framesSent: e.framesSent,
                        frameRateInput: e.framesPerSecond,
                        encoderImplementationName: e.encoderImplementation,
                        powerEfficientEncoder: e.powerEfficientEncoder,
                        type: "video",
                    });
                }
            }
            let E = {},
                h = new Map();
            for (let e of l) {
                let r = o[e.codecId];
                if (null == r) continue;
                let a = t(e.ssrc);
                if (null == a) continue;
                let l = {
                    type: e.kind,
                    ssrc: e.ssrc,
                    timestamp: e.timestamp,
                    sinkWant: (0, el.D)(n, e.ssrc, "video" === e.kind),
                    sinkWantAsInt: (0, el.q)(n, e.ssrc),
                    sinkWantLocal: (0, el.D)(i, e.ssrc, "video" === e.kind),
                    sinkWantLocalAsInt: (0, el.q)(i, e.ssrc),
                    codec: e_(r),
                    bytesReceived: e.bytesReceived,
                    packetsReceived: e.packetsReceived,
                    packetsLost: e.packetsLost,
                    nackCount: e.nackCount,
                };
                if ("audio" === e.kind) {
                    let t = null,
                        n = null,
                        i = s.jitterStatsMap.get(e.ssrc) ?? {
                            lastJitterBufferDelay: 0,
                            lastJitterBufferTargetDelay: 0,
                            lastJitterBufferEmittedCount: 0,
                            lastJitterBuffer: 0,
                            lastJitterBufferTarget: 0,
                        };
                    if (
                        void 0 !== e.jitterBufferEmittedCount &&
                        i.lastJitterBufferEmittedCount !== e.jitterBufferEmittedCount
                    ) {
                        e.jitterBufferEmittedCount < i.lastJitterBufferEmittedCount &&
                            ((i.lastJitterBufferDelay = 0),
                            (i.lastJitterBufferTargetDelay = 0),
                            (i.lastJitterBufferEmittedCount = 0));
                        let r = e.jitterBufferEmittedCount - i.lastJitterBufferEmittedCount;
                        void 0 !== e.jitterBufferDelay &&
                            ((t = Math.round((1e3 * (e.jitterBufferDelay - i.lastJitterBufferDelay)) / r)),
                            (i.lastJitterBuffer = t),
                            (i.lastJitterBufferDelay = e.jitterBufferDelay)),
                            void 0 !== e.jitterBufferTargetDelay &&
                                ((n = Math.round(
                                    (1e3 * (e.jitterBufferTargetDelay - i.lastJitterBufferTargetDelay)) / r,
                                )),
                                (i.lastJitterBufferTarget = n),
                                (i.lastJitterBufferTargetDelay = e.jitterBufferTargetDelay)),
                            (i.lastJitterBufferEmittedCount = e.jitterBufferEmittedCount);
                    }
                    h.set(e.ssrc, i),
                        null == E[a] && (E[a] = []),
                        E[a].push({
                            ...l,
                            audioLevel: e.audioLevel,
                            jitter: 1e3 * e.jitter,
                            jitterBuffer: t ?? i.lastJitterBuffer,
                            jitterBufferPreferred: n ?? i.lastJitterBufferTarget,
                            audioJitterBufferSamples: null != t ? [t] : [],
                            audioJitterTargetSamples: null != n ? [n] : [],
                        });
                } else if ("video" === e.kind) {
                    null == E[a] && (E[a] = []);
                    let t = null !== e.frameWidth ? { width: e.frameWidth, height: e.frameHeight } : void 0;
                    E[a].push({
                        ...l,
                        resolution: t,
                        framesDecoded: e.framesDecoded,
                        keyFramesDecoded: e.keyFramesDecoded,
                        framesDropped: e.framesDropped,
                        framesReceived: e.framesReceived,
                        frameRateDecode: e.framesPerSecond,
                        averageDecodeTime:
                            null == e.framesDecoded || null == e.totalDecodeTime
                                ? void 0
                                : ((1e3 * e.totalDecodeTime) / e.framesDecoded).toFixed(1),
                        firCount: e.firCount,
                        pliCount: e.pliCount,
                        freezeCount: e.freezeCount,
                        pauseCount: e.pauseCount,
                        totalFreezesDuration: 1e3 * (e.totalFreezesDuration ?? 0),
                        totalPausesDuration: 1e3 * (e.totalPausesDuration ?? 0),
                        totalFramesDuration: 1e3 * (e.totalInterFrameDelay ?? 0),
                        sumOfSquaredFramesDurations: e.totalSquaredInterFrameDelay,
                        qpSum: e.qpSum,
                        decoderImplementationName: e.decoderImplementation ?? "WebRTC",
                        powerEfficientDecoder: e.powerEfficientDecoder,
                    });
                }
            }
            s.jitterStatsMap = h;
            let m =
                    "firefox" === (platform.name ?? "unknown").toLowerCase() &&
                    142 === parseInt(platform.version ?? "", 10),
                f = (d.currentRoundTripTime ?? 0) * (m ? 1 : 1e3);
            return {
                transport: {
                    availableOutgoingBitrate: d.availableOutgoingBitrate ?? 0,
                    bytesReceived: d.bytesReceived,
                    bytesSent: d.bytesSent,
                    ping: f,
                },
                rtp: { inbound: E, outbound: u },
            };
        })(e, this.getUserIdBySsrc, this.remoteVideoSinkWants, this.localVideoSinkWants, t, this.transformStatsState);
    }
    setEchoCancellation = (e) => this.input.setEchoCancellation(e);
    setNoiseSuppression = (e) => this.input.setNoiseSuppression(e);
    setNoiseCancellation = (e) => this.input.setNoiseCancellation(e);
    getNoiseCancellation = () => this.input.getNoiseCancellation();
    setAutomaticGainControl = (e) => this.input.setAutomaticGainControl(e);
    setAudioSource = (e) => this.input.setAudioSource(e);
    setVideoSource = (e) => this.input.setVideoSource(e);
    setDesktopInput = (e) => {
        if (null != e) {
            let t = e.stream.getVideoTracks()[0].getConstraints(),
                n = {
                    width: "number" == typeof t.width ? t.width : (t.width?.ideal ?? t.width?.max),
                    height: "number" == typeof t.height ? t.height : (t.height?.ideal ?? t.height?.max),
                },
                i = (n?.height ?? 0) > 720 ? L.oL : L.lo;
            this.videoQualityManager.setGoliveQuality({ encode: n, capture: n, bitrateMax: i });
        }
        this.input.setDesktop(e);
    };
    setForceAudioInput = (() => {
        var e = this;
        return function (t) {
            return (
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                e.input.setPTTActive(t)
            );
        };
    })();
    setSelfMute = (e) => {
        (this.selfMute = e), this.input.setMute(e), this.emit(p.yq.Mute, e);
    };
    setNoiseCancellationDuringProcessing(e) {}
    setNoiseCancellationAfterProcessing(e) {}
    setVADAfterWebrtc(e) {}
    getSelfMute() {
        return this.selfMute;
    }
    setInputMode(e, t) {
        this.input.setAudioMode(e, { delay: t.pttReleaseDelay, threshold: t.vadThreshold });
    }
    setSelfDeaf(e) {
        for (let t of ((this.selfDeaf = e), Object.keys(this.outputs))) this.outputs[t].mute = e || this.localMutes[t];
        this.emit(p.yq.Deafen, e);
    }
    getSelfDeaf() {
        return this.selfDeaf;
    }
    setLocalMute(e, t) {
        (this.localMutes[e] = t),
            null != this.outputs[e] && (this.outputs[e].mute = this.selfDeaf || t),
            this.emit(p.yq.LocalMute, e, t);
    }
    fastUdpReconnect() {}
    getNumFastUdpReconnects() {
        return null;
    }
    wasRemoteDisconnected() {}
    setRemoteVideoSinkWants(e) {
        (this.remoteVideoSinkWants = e), this.updateVideoQuality(L.nJ);
    }
    setLocalVideoSinkWants(e) {
        this.localVideoSinkWants = e;
    }
    updateVideoQualityCore(e, t) {
        let n;
        if (!this.videoSupported) return;
        let i = this.input.getVideoStream();
        if (null == i) return;
        if (
            null != t.capture &&
            null != t.capture.width &&
            null != t.capture.height &&
            null != e.remoteSinkWantsPixelCount &&
            0 !== e.remoteSinkWantsPixelCount &&
            0 !== t.capture.height
        ) {
            let i = t.capture.width / t.capture.height,
                r = Math.sqrt(e.remoteSinkWantsPixelCount * i),
                s = t.capture.width / r;
            n = s < 1 ? void 0 : s;
        }
        this.logger.verbose(
            `BaseWebRTCConnection.updateVideoQuality: resolutionScaleFactor: ${n}, encodingVideoWidth: ${e.encodingVideoWidth}, remoteSinkWantsMaxFramerate: ${e.remoteSinkWantsMaxFramerate}, encodingVideoMaxBitRate: ${e.encodingVideoMaxBitRate}, localWant: ${this.getLocalWant()}`,
        ),
            this.setVideoEncoderParameters([
                { parameter: 1, value: n },
                { parameter: 2, value: e.encodingVideoMaxBitRate },
                { parameter: 3, value: e.remoteSinkWantsMaxFramerate },
            ]);
        let r = e.encodingVideoWidth,
            s = e.encodingVideoHeight;
        if (null != r && null != s)
            for (let e of i.getTracks()) {
                let t = e.getConstraints(),
                    n = t.width?.max,
                    i = t.height?.max;
                (n !== r || i !== s) &&
                    (this.logger.info(`BaseWebRTCConnection.updateVideoQuality: old: ${n} x ${i}, new: ${r} x ${s}`),
                    (t.width = { max: r }),
                    (t.height = { max: s }),
                    e.applyConstraints(t));
            }
    }
    handleAddVideoTrack = () => {
        this.updateVideoQuality();
    };
    handleAudioPermission = (e) => this.emit(p.yq.AudioPermission, e);
    handleVideoPermission = (e) => this.emit(p.yq.VideoPermission, e);
    handleVideo = (e) =>
        this.emit(
            p.yq.Video,
            this.userId,
            e,
            this.audioSSRC,
            this.videoStreamParameters[0].ssrc,
            this.videoStreamParameters[0].rtxSsrc ?? 0,
            this.videoStreamParameters,
        );
    handleDesktopSourceEnd = () => this.emit(p.yq.DesktopSourceEnd);
    handleStream = (e) => this.setStream(e);
    handleVoiceActivity = (e) => {
        let t = e <= this.silenceThreshold;
        this.silenced === t || this.input.mute() || ((this.silenced = t), this.emit(p.yq.Silence, t));
    };
    handleNewListener = (e) => {
        switch (e) {
            case p.yq.Video:
                this.videoReady && setImmediate(() => this.handleVideo(this.input.getVideoStreamId()));
                break;
            case p.yq.ConnectionStateChange:
                this.emit(e, this.connectionState);
                break;
            case p.yq.InteractionRequired:
                this.interacted || "suspended" !== this.input.getAudioState() || setImmediate(() => this.emit(e, !0));
        }
    };
    handleInputSpeaking = (e) => {
        this.emit(p.yq.Speaking, this.userId, e ? L.ME.VOICE : L.ME.NONE, this.audioSSRC);
    };
    handleAudioContextStateChange = () => {
        this.interacted ||
            "running" !== this.input.getAudioState() ||
            (this.interact(), this.emit(p.yq.InteractionRequired, !1));
    };
    setCanHavePriority(e, t) {
        let n = this.canHavePriority.size;
        t ? this.canHavePriority.add(e) : this.canHavePriority.delete(e),
            this.canHavePriority.size !== n && this.recalculatePrioritySpeakers();
    }
    setSpeakingFlags(e, t) {
        null != t && t !== L.ME.NONE ? (this.localSpeakingFlags[e] = t) : delete this.localSpeakingFlags[e];
        let n = this.outputs[e];
        null != n && n.setSpeakingFlags(t);
        let i = this.wantsPriority.size,
            r = L.ME.VOICE | L.ME.PRIORITY;
        (t & r) === r ? this.wantsPriority.add(e) : this.wantsPriority.delete(e),
            this.wantsPriority.size !== i && this.recalculatePrioritySpeakers();
    }
    clearAllSpeaking() {
        for (let e in this.localSpeakingFlags)
            delete this.localSpeakingFlags[e], null != this.outputs[e] && this.outputs[e].setSpeakingFlags(L.ME.NONE);
    }
    setOutputVolume(e) {
        for (let t of ((this.outputVolume = e), Object.keys(this.outputs)))
            this.outputs[t].volume = this.computeLocalVolume(t);
    }
    setSinkId(e) {
        for (let t of ((this.sinkId = e), Object.keys(this.outputs))) this.outputs[t].setSinkId(e);
    }
    setStreamParameters(e) {
        return new Promise((t, n) => {
            for (let t of this.videoStreamParameters) {
                let i = e.findIndex((e) => e.rid === t.rid);
                if (-1 === i) return void n(Error("Invalid rid"));
                q()(this.videoStreamParameters[i], e[i]) || (this.videoStreamParameters[i] = { ...e[i] });
            }
            t();
        });
    }
    recalculatePrioritySpeakers() {
        (this.prioritySpeakers = new Set(Array.from(this.wantsPriority).filter((e) => this.canHavePriority.has(e)))),
            $()(this.outputs, (e, t) => {
                e.volume = this.computeLocalVolume(t);
            });
    }
    setBitRate(e) {
        this.voiceBitrate = e;
    }
    setLocalVolume(e, t) {
        (this.localVolumes[e] = t), null != this.outputs[e] && (this.outputs[e].volume = this.computeLocalVolume(e));
    }
    getLocalVolume(e) {
        let t = this.localVolumes[e];
        return null == t && (t = this.context === L.x.DEFAULT ? L.Hz : L.Cn), null != t ? t : L.Hz;
    }
    computeLocalVolume(e) {
        let t = (this.outputVolume * this.getLocalVolume(e)) / L.Hz;
        return this.prioritySpeakers.size > 0 && !this.prioritySpeakers.has(e) ? t * L.zt : t;
    }
    hasDesktopSource() {
        return this.input?.hasDesktopSource();
    }
    createOutput(e, t) {
        if (t.discordIsTearingDown)
            return void this.logger.info(`BaseWebRTCConnection.createOutput: ignoring track being torn down: ${t.id}`);
        let n = this.outputs[e];
        null == n &&
            (((n = new ei(e, this.audioContext)).mute = this.selfDeaf || this.localMutes[e]),
            (n.volume = this.computeLocalVolume(e)),
            n.on(en.Speaking, (t) => this.emit(p.yq.Speaking, e, t, this.audioSSRC)),
            n.on(en.Video, (t) =>
                this.emitUnsafe(
                    p.yq.Video,
                    e,
                    t,
                    this.audioSSRC,
                    this.videoStreamParameters[0].ssrc,
                    this.videoStreamParameters[0].rtxSsrc ?? 0,
                    this.videoStreamParameters,
                ),
            ),
            n.on(en.InteractionRequired, (e) => this.emit(p.yq.InteractionRequired, e)),
            n.setSpeakingFlags(this.localSpeakingFlags[e] ?? L.ME.NONE),
            n.setSinkId(this.sinkId),
            (this.outputs[e] = n)),
            n.addTrack(t);
    }
    destroyOutput(e, t) {
        let n = this.outputs[e];
        null != n && (null == t || 0 === n.removeTrack(t)) && (n.destroy(), delete this.outputs[e]);
    }
    handleStats = (e) => {
        this.connectionState === L.$I.DISCONNECTED
            ? this.off(p.yq.Stats, this.handleStats)
            : null != e &&
              (this.webrtcStats.update(e),
              (this.stats = e),
              Date.now() - this.lastPingTime >= L.n8 &&
                  (this.emit(p.yq.Ping, e.transport.ping), (this.lastPingTime = Date.now())));
    };
    setSilenceThreshold(e) {
        this.silenceThreshold = e;
    }
    setLocalPan(e, t, n) {}
    setQoS(e) {}
    setSoundshareDiscardRearChannels(e) {}
    isAttenuating() {
        return !1;
    }
    setAttenuation(e, t, n) {}
    setEncryption(e, t) {}
    setMinimumJitterBufferLevel(e) {}
    setPostponeDecodeLevel(e) {}
    setReconnectInterval(e) {}
    setKeyframeInterval(e) {}
    startSamplesLocalPlayback(e, t, n, i) {}
    stopSamplesLocalPlayback(e) {}
    stopAllSamplesLocalPlayback() {}
    setVideoQualityMeasurement(e) {}
    setVideoEncoderExperiments(e) {}
    setBandwidthEstimationExperiments(e) {}
    prepareSecureFramesTransition(e, t, n) {}
    prepareSecureFramesEpoch(e, t, n) {}
    executeSecureFramesTransition(e) {}
    getMLSKeyPackage(e) {}
    updateMLSExternalSender(e) {}
    processMLSProposals(e, t) {}
    prepareMLSCommitTransition(e, t, n) {}
    processMLSWelcome(e, t, n) {}
    getMLSPairwiseFingerprint(e, t, n) {}
}
n(775443);
var eh = n(267721),
    em = n.n(eh),
    ef = n(909203),
    eg = n.n(ef),
    eI = n(316179);
let eA = new I.Vy("SDP");
var ep =
    (((l = {}).SENDRECV = "sendrecv"),
    (l.SENDONLY = "sendonly"),
    (l.RECVONLY = "recvonly"),
    (l.INACTIVE = "inactive"),
    l);
let eT = "UDP/TLS/RTP/SAVPF";
function eS(e) {
    switch (e) {
        case "recvonly":
            return "sendonly";
        case "sendonly":
            return "recvonly";
        case "sendrecv":
            return "sendrecv";
        default:
            return "inactive";
    }
}
function eN(e, t, n) {
    let i = `${e}-${t}`,
        r = `${n}${i}`;
    return [
        { attribute: "cname", id: t, value: i },
        { attribute: "msid", id: t, value: `${i} ${r}` },
        { attribute: "mslabel", id: t, value: i },
        { attribute: "label", id: t, value: r },
    ];
}
function eO(e) {
    return eI.write({
        version: 0,
        timing: { start: 0, stop: 0 },
        origin: {
            address: "127.0.0.1",
            ipVer: 4,
            netType: "IN",
            sessionId: "1420070400000",
            sessionVersion: 0,
            username: "-",
        },
        name: "-",
        msidSemantic: { semantic: "WMS", token: "*" },
        groups: [
            {
                type: "BUNDLE",
                mids: e
                    .filter((e) => null != e.mid)
                    .map((e) => e.mid)
                    .join(" "),
            },
        ],
        media: e,
    });
}
function eR(e) {
    let {
        mid: t,
        type: n,
        setup: i,
        direction: r,
        baseSDP: s,
        codec: a,
        payload: o,
        bitrate: l,
        ssrcs: _,
        extensions: d,
        rtxPayload: c,
        sendingVideo: E,
        enableAudioNack: h,
    } = e;
    if ("inactive" === r && !eu.PF)
        return {
            connection: { ip: "0.0.0.0", version: 4 },
            direction: "inactive",
            fmtp: [],
            payloads: o,
            port: 0,
            protocol: eT,
            rtp: [{ codec: "NULL", payload: o, rate: 0 }],
            mid: void 0,
            type: n,
        };
    let {
        media: [m],
    } = eI.parse(s);
    if (
        ((m.type = n),
        (m.protocol = eT),
        (m.payloads = o),
        (m.setup = i),
        (m.mid = t),
        (m.rtcpMux = "rtcp-mux"),
        (m.direction = r),
        (m.ssrcs = _),
        _.length > 0 &&
            (null != c &&
                ((m.ssrcGroups = em()(_, 4).map((e) => {
                    let t = e[0].id;
                    return { semantics: "FID", ssrcs: `${t} ${t + 1}` };
                })),
                (m.ssrcs = em()(_, 4)
                    .map((e) => {
                        let t = e.map((e) => ((e = { ...e }), (e.id += 1), e));
                        return [...e, ...t];
                    })
                    .flat())),
            eu.PF || "Firefox" === u().name))
    ) {
        let e = _.find((e) => "msid" === e.attribute);
        if (null == e) throw Error("msid missing");
        (m.msid = e.value), (m.ssrcs = m.ssrcs.filter((e) => "cname" === e.attribute));
    }
    switch (n) {
        case "audio":
            "Firefox" === u().name
                ? (m.ext = d.filter((e) => "urn:ietf:params:rtp-hdrext:ssrc-audio-level" === e.uri))
                : ((m.ext = d.filter(
                      (e) =>
                          "urn:ietf:params:rtp-hdrext:ssrc-audio-level" === e.uri ||
                          "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01" === e.uri,
                  )),
                  (m.rtcpFb = [{ type: "transport-cc", payload: o }]),
                  !0 === h && m.rtcpFb?.push({ type: "nack", payload: o })),
                m.rtp.push({ codec: a, encoding: 2, payload: o, rate: 48e3 }),
                a === L.UK.OPUS &&
                    m.fmtp.push({ config: `minptime=10;useinbandfec=1;usedtx=${E ? "0" : "1"}`, payload: o }),
                (m.maxptime = 60);
            break;
        case "video":
            (m.ext = d.filter(
                (e) =>
                    "urn:ietf:params:rtp-hdrext:toffset" === e.uri ||
                    "http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time" === e.uri ||
                    "urn:3gpp:video-orientation" === e.uri ||
                    "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01" === e.uri ||
                    "http://www.webrtc.org/experiments/rtp-hdrext/playout-delay" === e.uri,
            )),
                m.rtp.push({ codec: a, payload: o, rate: 9e4 });
            let f = `x-google-max-bitrate=${l}`;
            a === L.UK.H264
                ? (f += ";level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f")
                : a === L.UK.H265 && (f += ";level-id=180;profile-id=1;tier-flag=0;tx-mode=SRST"),
                m.fmtp.push({ config: f, payload: o }),
                (m.rtcpFb = [
                    { type: "ccm", subtype: "fir", payload: o },
                    { type: "nack", payload: o },
                    { type: "nack", subtype: "pli", payload: o },
                    { type: "goog-remb", payload: o },
                    { type: "transport-cc", payload: o },
                ]),
                null != c &&
                    (m.rtp.push({ codec: "rtx", payload: c, rate: 9e4 }),
                    m.fmtp.push({ config: `apt=${o}`, payload: c }),
                    (m.payloads = `${m.payloads} ${c}`));
    }
    return m;
}
function eC(e, t, n, i, r) {
    let s = e.find((e) => e.codec === i);
    if (null == s) return null;
    let a = t.find((e) => RegExp(`^apt=${s.payload}`).test(e.config)),
        o = null;
    if (null != a) {
        let t = e.find((e) => e.codec === L.UK.RTX && e.payload === a.payload);
        null != t && (o = t.payload);
    }
    return { type: n, name: i, priority: r + 1, payloadType: s.payload, rtxPayloadType: o };
}
function ey(e, t) {
    let n = eI.parse(e).media.reduce(
        (e, n) => {
            let i,
                { type: r, rtp: s, ssrcs: a, fmtp: o, direction: l, mid: _ } = n;
            switch ((e.outboundStreams.push({ type: r, direction: l, mid: _ }), r)) {
                case "audio":
                    [L.UK.OPUS].forEach((t, n) => {
                        let i = eC(s, o, r, t, n);
                        null != i && e.codecs.push(i);
                    }),
                        "sendrecv" === l &&
                            null != (i = a?.find((e) => "cname" === e.attribute)) &&
                            (e.audioSSRC = i.id);
                    break;
                case "video":
                    (t ? [L.UK.H265, L.UK.H264, L.UK.VP8, L.UK.VP9] : [L.UK.H264, L.UK.VP8, L.UK.VP9]).forEach(
                        (t, n) => {
                            let i = eC(s, o, r, t, n);
                            null != i && e.codecs.push(i);
                        },
                    ),
                        "sendrecv" === l &&
                            (null != (i = a?.find((e) => "cname" === e.attribute)) && (e.videoSSRC = i.id),
                            null != (i = a?.findLast((e) => "cname" === e.attribute)) &&
                                (i.id === e.videoSSRC && eA.warn("Unable to find a unique rtx SSRC!"),
                                (e.rtxSSRC = i.id)));
            }
            return e;
        },
        { outboundStreams: [], codecs: [], audioSSRC: 0, videoSSRC: 0, rtxSSRC: 0 },
    );
    return (n.codecs = eg()(n.codecs, q())), n;
}
function eD(e, t) {
    let { codecs: n } = ey(e, t),
        i = n.find((e) => e.name === L.UK.VP8),
        r = RegExp(`^a=ice|a=extmap|a=fingerprint|opus|VP8|${i?.rtxPayloadType ?? 0} rtx`, "i");
    return { sdp: [...new Set(e.split(/\r\n/).filter((e) => r.test(e)))].join("\n"), codecs: n };
}
function eL(e) {
    if (!e.includes("a=fingerprint")) return eA.error("Remote SDP does not include fingerprint!"), !1;
    if (!e.includes("a=ice-ufrag")) return eA.error("Remote SDP does not include ICE user name!"), !1;
    if (!e.includes("a=ice-pwd")) return eA.error("Remote SDP does not include ICE password!"), !1;
    if (!e.includes("a=candidate")) return eA.error("Remote SDP does not include ICE candidate!"), !1;
    if (!e.includes("c=")) return eA.error("Remote SDP does not include c-line!"), !1;
    let t = e
        .split("\n")
        .filter((e) => e.startsWith("c="))
        .join()
        .trim();
    return !(t.split(" ").length < 3) || (eA.error(`Incorrect c-line: ${t}`), !1);
}
function ev(e) {
    return [...new Set(e.split(/\r\n/).filter((e) => e.startsWith("a=extmap:")))].map((e) => {
        let t = e.split(" ");
        return { value: parseInt(t[0].split("/")[0].substr(9), 10), uri: t[1] };
    });
}
class ew extends C.EventEmitter {
    audioCodec = null;
    audioPayloadType = null;
    videoCodec = null;
    videoPayloadType = null;
    rtxPayloadType = null;
    direction = null;
    outboundStreams = [];
    extensions = [];
    streams = [];
    activeAudioSSRCs = {};
    activeVideoSSRCs = {};
    _sdp = null;
    connected = !1;
    negotiating = !1;
    _negotiationNeeded = !1;
    addStream(e, t, n) {
        let i = !1;
        this.streams.some((e) => e.ssrc === t) || this.streams.push({ ssrc: t, cname: e, type: "audio" }),
            this.activeAudioSSRCs[e] !== t &&
                ((this.activeAudioSSRCs = { ...this.activeAudioSSRCs, [e]: t }), (i = !0)),
            null != n &&
                (n > 0
                    ? (this.streams.some((e) => e.ssrc === n) ||
                          this.streams.push({ ssrc: n, cname: e, type: "video" }),
                      this.activeVideoSSRCs[e] !== n &&
                          ((this.activeVideoSSRCs = { ...this.activeVideoSSRCs, [e]: n }), (i = !0)))
                    : null != this.activeVideoSSRCs[e] &&
                      ((i = !0),
                      (this.activeVideoSSRCs = { ...this.activeVideoSSRCs }),
                      delete this.activeVideoSSRCs[e])),
            i && this.negotiationNeeded();
    }
    removeStream(e) {
        let t = !1;
        null != this.activeAudioSSRCs[e] &&
            ((t = !0), (this.activeAudioSSRCs = { ...this.activeAudioSSRCs }), delete this.activeAudioSSRCs[e]),
            null != this.activeVideoSSRCs[e] &&
                ((t = !0), (this.activeVideoSSRCs = { ...this.activeVideoSSRCs }), delete this.activeVideoSSRCs[e]),
            t && this.negotiationNeeded();
    }
    get sdp() {
        if (null == this._sdp) throw Error("sdp is not set");
        return this._sdp;
    }
    set sdp(e) {
        if (!eL(e)) throw Error(`Incorrect SDP received from rtc-worker: ${e}`);
        (this._sdp = e),
            this.createAnswer(),
            (this.connected = !0),
            this._negotiationNeeded && this.negotiationNeeded();
    }
    negotiationNeeded() {
        if (this.negotiating) {
            this._negotiationNeeded = !0;
            return;
        }
        null != this._sdp
            ? ((this.negotiating = !0), (this._negotiationNeeded = !1), this.generateSessionDescription("offer"))
            : (this._negotiationNeeded = !0);
    }
    setRemoteDescription(e) {
        return (this.negotiating = !1), this._negotiationNeeded && this.negotiationNeeded(), Promise.resolve();
    }
    createAnswer() {
        return this.generateSessionDescription("answer");
    }
    getSSRCs(e) {
        let t = this.streams.map((e, t) => {
            let { cname: n, ssrc: i, type: r } = e,
                s = this.activeAudioSSRCs[n],
                a = this.activeVideoSSRCs[n],
                o = `${r}_inbound_${t}`;
            return [i, n, r, s === i || a === i ? this.direction : ep.INACTIVE, o];
        });
        if ("Firefox" !== u().name) return this.connected ? t : [];
        let n = this.outboundStreams.map((e, t) => [0, "outbound", e.type, eS(e.direction), `${e.type}_outbound_${t}`]);
        if ("answer" !== e) return n.concat(t);
        {
            let e = n.length - t.length;
            return n
                .slice(0, e)
                .concat(t)
                .slice(0, n.length)
                .map((e, t) => {
                    let [n, i, r, s, a] = e;
                    return [n, i, r, eS(this.outboundStreams[t].direction), this.outboundStreams[t].mid];
                });
        }
    }
    generateSessionDescription(e) {
        let t = this.audioCodec,
            n = this.audioPayloadType,
            i = this.videoCodec,
            r = this.videoPayloadType,
            s = this.rtxPayloadType,
            a = this.sdp;
        if (null == t || null == n || null == i || null == r || null == s || null == a || null == this.direction)
            throw Error(
                `Invalid payload: audioCodec: ${t}, audioPayloadType: ${null == n ? "null" : n}, videoCodec: ${i}, videoCodecPayloadType: ${null == r ? "null" : r}, rtxPayloadType: ${null == s ? "null" : s}, sdp: ${a}`,
            );
        let o = (function (e) {
            let {
                    type: t,
                    baseSDP: n,
                    direction: i,
                    audioCodec: r,
                    audioPayloadType: s,
                    audioBitRate: a,
                    videoCodec: o,
                    videoPayloadType: l,
                    videoBitRate: _,
                    rtxPayloadType: d,
                    ssrcs: c,
                    extensions: E,
                } = e,
                h = [];
            if ((eA.info(`generateSessionDescription: ${JSON.stringify(c)}`), "Firefox" === u().name)) {
                let e = "answer" === t ? "passive" : "active";
                c.forEach((t) => {
                    let [i, u, c, m, f] = t;
                    ("video" === c && (0 === l || 0 === d)) ||
                        h.push(
                            eR({
                                mid: f,
                                type: c,
                                setup: e,
                                direction: m,
                                baseSDP: n,
                                codec: "audio" === c ? r : o,
                                payload: "audio" === c ? s : l,
                                bitrate: "audio" === c ? a : _,
                                ssrcs: eN(u, i, "audio" === c ? "a" : "v"),
                                extensions: E,
                            }),
                        );
                });
            } else {
                let e = "answer" === t ? "passive" : "actpass",
                    u = c
                        .filter((e) => {
                            let [t, n, i, r, s] = e;
                            return "inactive" !== r && "audio" === i;
                        })
                        .map((e) => {
                            let [t, n] = e;
                            return eN(n, t, "a");
                        });
                if (
                    (h.push(
                        eR({
                            mid: "audio",
                            type: "audio",
                            setup: e,
                            direction: i,
                            baseSDP: n,
                            codec: r,
                            payload: s,
                            bitrate: a,
                            ssrcs: u.flat(),
                            extensions: E,
                        }),
                    ),
                    l > 0)
                ) {
                    let t = c
                        .filter((e) => {
                            let [t, n, i, r, s] = e;
                            return "inactive" !== r && "video" === i;
                        })
                        .map((e) => {
                            let [t, n] = e;
                            return eN(n, t, "v");
                        });
                    h.push(
                        eR({
                            mid: "video",
                            type: "video",
                            setup: e,
                            direction: i,
                            baseSDP: n,
                            codec: o,
                            payload: l,
                            bitrate: _,
                            ssrcs: t.flat(),
                            extensions: E,
                            rtxPayload: d,
                        }),
                    );
                }
            }
            return new RTCSessionDescription({ type: t, sdp: eO(h) });
        })({
            type: e,
            baseSDP: a,
            direction: this.direction,
            audioCodec: t,
            audioPayloadType: n,
            audioBitRate: 40,
            videoCodec: i,
            videoPayloadType: r,
            videoBitRate: 2500,
            rtxPayloadType: s,
            ssrcs: this.getSSRCs(e),
            extensions: this.extensions,
        });
        return this.emit(e, o), Promise.resolve(o);
    }
}
let eP = new I.Vy("PeerConnection");
class eb extends C.EventEmitter {
    bitrate;
    pc;
    stream = null;
    senders = [];
    negotiating = !1;
    _negotiationNeeded = !1;
    constructor(e) {
        super(), (this.bitrate = e);
        const t = (this.pc = new RTCPeerConnection({ sdpSemantics: "plan-b" }));
        eu.LU
            ? ((t.onconnectionstatechange = this.handlePeerConnectionStateChange),
              (t.oniceconnectionstatechange = this.handlePeerConnectionStateChange))
            : (t.oniceconnectionstatechange = this.handleIceConnectionStateChange),
            (t.onsignalingstatechange = this.handleSignalingStateChange),
            (t.onicegatheringstatechange = this.handleIceGatheringStateChange),
            (t.ontrack = this.handleTrack.bind(this)),
            eP.info("Constructed RTCPeerConnection");
    }
    setBitRate(e) {
        this.bitrate !== e && ((this.bitrate = e), this.negotiationNeeded());
    }
    close() {
        eP.info("Close RTCPeerConnection"),
            "closed" !== this.signalingState && this.pc.close(),
            this.removeAllListeners();
    }
    get peerConnectionState() {
        return this.pc.connectionState;
    }
    get iceGatheringState() {
        return this.pc.iceGatheringState;
    }
    get iceConnectionState() {
        return this.pc.iceConnectionState;
    }
    get signalingState() {
        return this.pc.signalingState;
    }
    get connected() {
        return null != this.pc && /connected|completed/.test(this.pc.iceConnectionState);
    }
    setStream(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = this.pc,
            i = "closed" === this.iceConnectionState,
            r = !1;
        null == this.stream || i || (this.senders.forEach((e) => n.removeTrack(e)), (r = !0)),
            (this.stream = e),
            (this.senders = []),
            null == e ||
                i ||
                ((this.senders = [
                    ...e.getAudioTracks().map((t) => n.addTrack(t, e)),
                    ...e.getVideoTracks().map((t) => n.addTrack(t, e)),
                ]),
                (r = !0)),
            r && !t && this.negotiationNeeded();
    }
    createOffer() {
        let e = this.pc;
        return e
            .createOffer(this.makeOfferAnswerOptions())
            .then((t) => e.setLocalDescription(this.mungeLocalDescription(t)))
            .then(() => {
                let t = e.localDescription;
                if (null == t) throw Error("localDescription is null");
                return this.emit("offer", t), t;
            })
            .catch((t) => {
                if ("have-remote-offer" === e.signalingState) return eP.error(t), this.createOffer();
                throw t;
            });
    }
    createAnswer() {
        let e = this.pc;
        return e
            .createAnswer(this.makeOfferAnswerOptions())
            .then((t) => e.setLocalDescription(this.mungeLocalDescription(t)))
            .then(() => {
                let t = e.localDescription;
                if (null == t) throw Error("localDescription is null");
                return this.emit("answer", t), t;
            })
            .catch((t) => {
                throw (
                    (eP.warn(
                        `PeerConnection#createAnswer: Attempted to set local description in state: ${e.signalingState}`,
                    ),
                    t)
                );
            });
    }
    negotiationNeeded() {
        if (this.negotiating) {
            this._negotiationNeeded = !0;
            return;
        }
        (this.negotiating = !0), (this._negotiationNeeded = !1), this.createOffer();
    }
    setRemoteDescription(e) {
        return this.pc.setRemoteDescription(e);
    }
    getStats() {
        return this.pc.getStats();
    }
    makeOfferAnswerOptions() {
        return { offerToReceiveAudio: !0, offerToReceiveVideo: eu.g7, iceRestart: !1 };
    }
    mungeLocalDescription(e) {
        let t = e.sdp.split("\n");
        for (let e = 0; e < t.length; e++) {
            let n = t[e];
            if (/^a=mid:/.test(n)) {
                null != this.bitrate && t.splice(e + 1, 0, `b=AS:${Math.floor(this.bitrate / 1e3)}`);
                break;
            }
        }
        return (e.sdp = t.join("\n")), e;
    }
    emitTrack(e, t) {
        /^default/.test(t.id) ||
            ((t.onended = () => {
                this.emit("removetrack", e, t);
            }),
            this.emit("addtrack", e, t));
    }
    handlePeerConnectionStateChange = () => {
        let e = this.peerConnectionState;
        eP.info("peerConnectionState =>", e),
            "connecting" === e
                ? "connected" === this.iceConnectionState
                    ? this.emit(e)
                    : this.emit(this.iceConnectionState)
                : this.emit(e);
    };
    handleIceConnectionStateChange = () => {
        let e = this.iceConnectionState;
        eP.info("iceConnectionState =>", e), "completed" === e && (e = "connected"), this.emit(e);
    };
    handleSignalingStateChange = () => {
        eP.info(`signalingState => ${this.signalingState}, negotiation needed: ${this._negotiationNeeded.toString()}`),
            "stable" === this.signalingState &&
                ((this.negotiating = !1), this._negotiationNeeded && this.negotiationNeeded());
    };
    handleIceGatheringStateChange = () => {
        eP.info("iceGatheringState =>", this.iceGatheringState);
    };
    handleTrack = (e) => {
        this.emitTrack(e.streams[0].id, e.track);
    };
}
n(667532);
var ek = n(837385),
    eU = n.n(ek),
    eM = n(415955),
    eG = n.n(eM);
n(323874), n(14289), n(35956);
var ex = n(206607),
    eV = n(264572).Buffer;
class eF extends m.A {
    logger;
    dave;
    transientKeys;
    mlsSession;
    encryptionWorker;
    userId;
    currentEncryptorProtocolVersion = 0;
    recognizedUserIds = new Set();
    secureFramesTransitions = new Map();
    latestPreparedTransitionVersion = 0;
    lastSecureFramesStateUpdate = null;
    constructor(e, t, n) {
        super(),
            (this.logger = new I.Vy("DaveSessionManager")),
            (this.dave = e),
            (this.transientKeys = t),
            (this.userId = n),
            (this.mlsSession = new e.Session("", "", (e, t) => {
                this.emit(p.yq.MLSFailure, e, t);
            })),
            (this.encryptionWorker = this.setupEncryptionWorker());
    }
    createUser(e) {
        this.recognizedUserIds.add(e),
            this.setupKeyRatchetForUser(e, this.latestPreparedTransitionVersion, ex.jU.DECRYPT);
    }
    destroyUser(e) {
        this.recognizedUserIds.delete(e), this.encryptionWorker.postMessage({ type: ex.lA.DESTROY_USER, userId: e });
    }
    updateLocalUserCodecs(e, t) {
        this.encryptionWorker.postMessage({ type: ex.lA.UPDATE_CODECS, audioCodec: e, videoCodec: t });
    }
    updateSsrcs(e, t, n) {
        this.encryptionWorker.postMessage({ type: ex.lA.UPDATE_SSRC, userId: e, audioSsrc: t, videoSsrcs: n });
    }
    setupEncodedTransformsForTransceiver(e) {
        this.setupEncodedTransforms(e.sender), this.setupEncodedTransforms(e.receiver);
    }
    prepareSecureFramesTransition(e, t, n) {
        this.prepareSecureFramesRatchets(e, t), n();
    }
    prepareSecureFramesEpoch(e, t, n) {
        if ("1" === e) {
            let e = null;
            null != this.transientKeys && (e = this.transientKeys.GetTransientPrivateKey(t)),
                this.mlsSession.Init(t, BigInt(n), this.userId, e),
                this.onSecureFramesStateChanged();
        } else this.mlsSession.SetProtocolVersion(t);
    }
    executeSecureFramesTransition(e) {
        if (!this.secureFramesTransitions.has(e))
            return void this.logger.warn("[TAG] Transition ID " + e + " not found, ignoring.");
        let t = this.secureFramesTransitions.get(e);
        this.secureFramesTransitions.delete(e),
            t === this.dave.kDisabledVersion && this.mlsSession.Reset(),
            this.setupKeyRatchetForUser(this.userId, t, ex.jU.ENCRYPT),
            this.onSecureFramesStateChanged();
    }
    getMLSKeyPackage(e) {
        e(this.mlsSession.GetMarshalledKeyPackage());
    }
    updateMLSExternalSender(e) {
        this.mlsSession.SetExternalSender(e);
    }
    processMLSProposals(e, t) {
        let n = this.mlsSession.ProcessProposals(e, this.getRecognizedUserIDs());
        n && t(n);
    }
    prepareMLSCommitTransition(e, t, n) {
        let i = this.mlsSession.ProcessCommit(t),
            r = null != i.rosterUpdate;
        r && this.prepareSecureFramesRatchets(e, this.mlsSession.GetProtocolVersion()),
            i.ignored || n(r, this.mlsSession.GetProtocolVersion(), i.rosterUpdate);
    }
    processMLSWelcome(e, t, n) {
        let i = this.mlsSession.ProcessWelcome(t, this.getRecognizedUserIDs());
        i && this.prepareSecureFramesRatchets(e, this.mlsSession.GetProtocolVersion()),
            n(null != i, this.mlsSession.GetProtocolVersion(), i);
    }
    setupEncryptionWorker() {
        let e = new Worker(
            new URL("/assets/" + n.u("52584"), n.b),
            Object.assign({}, { name: "encryption-worker" }, { type: void 0 }),
        );
        return (
            (e.onmessage = (e) => {
                let { data: t } = e;
                t.type === ex.h5.PROTOCOL_VERSION_CHANGED
                    ? ((this.currentEncryptorProtocolVersion = t.protocolVersion), this.onSecureFramesStateChanged())
                    : this.logger.warn("Unknown message type from encryption worker", t);
            }),
            (e.onerror = (e) => {
                this.logger.error("Encryption worker error", e);
            }),
            (e.onmessageerror = (e) => {
                this.logger.error("Encryption worker message error", e);
            }),
            e.postMessage({ type: ex.lA.INITIALIZE }),
            e
        );
    }
    getRecognizedUserIDs() {
        return Array.from(this.recognizedUserIds).concat([this.userId]);
    }
    makeUserKeyRatchet(e, t) {
        return t === this.dave.kDisabledVersion ? null : this.mlsSession.GetKeyRatchet(e);
    }
    setupEncodedTransforms(e) {
        if ("transform" in e) e.transform = new RTCRtpScriptTransform(this.encryptionWorker, {});
        else if ("createEncodedStreams" in e) {
            let { readable: t, writable: n } = e.createEncodedStreams();
            this.encryptionWorker.postMessage({ type: ex.lA.RTC_TRANSFORM, readable: t, writable: n }, [t, n]);
        } else throw Error("Encoded transforms not supported");
    }
    setupKeyRatchetForUser(e, t, n) {
        let i = this.makeUserKeyRatchet(e, t);
        this.encryptionWorker.postMessage({
            type: ex.lA.SET_KEY_RATCHET,
            userId: e,
            operation: n,
            protocolVersion: t,
            keyRatchet: i,
        });
    }
    prepareSecureFramesRatchets(e, t) {
        for (let e of this.getRecognizedUserIDs())
            e !== this.userId && this.setupKeyRatchetForUser(e, t, ex.jU.DECRYPT);
        e === this.dave.kInitTransitionId
            ? (this.setupKeyRatchetForUser(this.userId, t, ex.jU.ENCRYPT), this.onSecureFramesStateChanged())
            : this.secureFramesTransitions.set(e, t),
            (this.latestPreparedTransitionVersion = t);
    }
    onSecureFramesStateChanged() {
        let e = { version: this.currentEncryptorProtocolVersion ?? this.dave.kDisabledVersion, epochAuthenticator: "" };
        if (e.version !== this.dave.kDisabledVersion) {
            let t = this.mlsSession.GetLastEpochAuthenticator();
            e.epochAuthenticator = eV.from(t).toString("base64");
        }
        (null == this.lastSecureFramesStateUpdate ||
            this.lastSecureFramesStateUpdate.version !== e.version ||
            this.lastSecureFramesStateUpdate.epochAuthenticator !== e.epochAuthenticator) &&
            (this.logger.info(`DAVE protocol state update: ${JSON.stringify(e)}`),
            this.emit(p.yq.SecureFramesUpdate, e),
            (this.lastSecureFramesStateUpdate = e));
    }
}
let eB = new I.Vy("LibDaveManager"),
    eH = null,
    eY = null,
    eW = null,
    eK = {
        onRuntimeInitialized: () => {
            eB.info("DAVE loaded");
        },
    };
function ej() {
    return ("Firefox" !== u().name || !(eu.It < 142)) && eu.PF && eu.zU;
}
let e$ = u().name?.toLowerCase().includes("firefox");
function ez(e, t) {
    e.sender.replaceTrack(t), (e.direction = null != t ? "sendrecv" : "recvonly");
}
class eq extends eE {
    pc;
    sdp = null;
    negotiating = !1;
    negotiationNeeded = !1;
    audioTransceiver;
    videoTransceiver;
    users = new Map();
    userIdsBySsrc = new Map();
    assignedStreams = new Map();
    unassignedStreams = { audio: [], video: [] };
    inactiveTransceivers = { audio: [], video: [] };
    trackUserIds = {};
    audioCodec = null;
    audioPayloadType = null;
    videoCodec = null;
    videoPayloadType = null;
    rtxPayloadType = null;
    enableAudioNack = !1;
    extensions = [];
    codecs = [];
    daveSessionManager = null;
    logger;
    constructor(e) {
        super(e), (this.logger = new I.Vy(`UnifiedConnection(${e.context})`));
        let t = e.dave;
        null == t ||
            ej() ||
            (this.logger.warn("DAVE is initialized but encoded transforms are not supported"), (t = null)),
            null != t &&
                ((this.daveSessionManager = new eF(t, e.transientKeys, this.userId)),
                this.daveSessionManager.on(p.yq.MLSFailure, (e, t) => {
                    this.emit(p.yq.MLSFailure, e, t);
                }),
                this.daveSessionManager.on(p.yq.SecureFramesUpdate, (e) => {
                    this.emit(p.yq.SecureFramesUpdate, e);
                })),
            (this.videoSupported = eu.g7);
        const n = (this.pc = new RTCPeerConnection({
            bundlePolicy: "max-bundle",
            sdpSemantics: "unified-plan",
            encodedInsertableStreams: null != this.daveSessionManager,
        }));
        eu.LU
            ? ((n.onconnectionstatechange = this.handlePeerConnectionStateChange),
              (n.oniceconnectionstatechange = this.handlePeerConnectionStateChange))
            : (n.oniceconnectionstatechange = this.handleIceConnectionStateChange),
            (n.onsignalingstatechange = this.handleSignalingStateChange),
            (n.onicegatheringstatechange = this.handleIceGatheringStateChange),
            (n.ontrack = this.handleTrack),
            (this.audioTransceiver = n.addTransceiver("audio", {
                direction: "recvonly",
                sendEncodings: [{ maxBitrate: this.voiceBitrate }],
            })),
            this.daveSessionManager?.setupEncodedTransformsForTransceiver(this.audioTransceiver),
            this.videoSupported &&
                (this.addTransceivers("video", "recvonly", 1, this.input.getVideoStream()),
                (this.videoTransceiver = n.getTransceivers()[1])),
            this.addTransceivers("audio", "recvonly", 10),
            this.videoSupported && this.addTransceivers("video", "recvonly", 10),
            this.setStream(this.input.stream),
            this.logger.info(`Renegotiating: Initial negotiation, user id: ${e.userId}`),
            this.handleNegotiationNeeded(!0);
    }
    destroy() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.destroy(e), "closed" !== this.signalingState && this.pc.close();
    }
    setCodecs(e, t, n) {
        let i;
        (this.audioCodec !== e || this.videoCodec !== t) &&
            ((i = this.codecs.find((t) => t.name === e)),
            (this.audioCodec = e),
            (this.audioPayloadType = i?.payloadType ?? 0),
            (i = this.codecs.find((e) => e.name === t)),
            (this.videoCodec = t),
            (this.videoPayloadType = i?.payloadType ?? 0),
            (this.rtxPayloadType = i?.rtxPayloadType ?? 0),
            this.daveSessionManager?.updateLocalUserCodecs(e, t),
            this.logger.info("Renegotiating: Codecs changed"),
            this.handleNegotiationNeeded());
    }
    setStream(e) {
        let t = "closed" === this.iceConnectionState;
        null != e &&
            !t &&
            (ez(this.audioTransceiver, e.getAudioTracks()[0]),
            this.videoSupported && ez(this.videoTransceiver, e.getVideoTracks()[0])),
            this.logger.info("Renegotiating: Streams changed"),
            this.handleNegotiationNeeded();
    }
    createUser(e, t, n) {
        if ((this.daveSessionManager?.createUser(e), 0 === t))
            return void this.logger.warn(`Attempting to create user ${e} with 0 audio SSRC`);
        this.logger.info(`Creating user: ${e} with audio SSRC: ${t} and video SSRCs: ${n?.join(",") ?? 0}`);
        let i = !1,
            r = this.users.get(e);
        if ((null == r && (r = {}), r.audioSSRC !== t)) {
            (r.audioSSRC = t), (i = !0), this.unassignedStreams.audio.push({ cname: e, ssrc: t });
            let n = this.inactiveTransceivers.audio.length,
                s = this.unassignedStreams.audio.length;
            this.addTransceivers("audio", "recvonly", 10 + s - n);
        }
        if (this.videoSupported && void 0 !== n && (!e$ || void 0 === r.videoSSRC)) {
            let t = null != n && n.length > 0 ? n[0] : 0;
            if (t > 0) {
                if (r.videoSSRC !== t) {
                    (r.videoSSRC = t), (i = !0), this.unassignedStreams.video.push({ cname: e, ssrc: t });
                    let n = this.inactiveTransceivers.video.length,
                        s = this.unassignedStreams.video.length;
                    this.addTransceivers("video", "recvonly", 10 + s - n);
                }
            } else null != r.videoSSRC && ((r.videoSSRC = void 0), (i = !0));
        }
        if (i) {
            this.users.set(e, r), t > 0 && this.userIdsBySsrc.set(t, e);
            let i = null != n && n.length > 0 ? n[0] : 0;
            i > 0 && this.userIdsBySsrc.set(i, e),
                this.daveSessionManager?.updateSsrcs(e, t, n ?? []),
                this.logger.info("Renegotiating: User joined"),
                this.handleNegotiationNeeded();
        }
    }
    destroyUser(e) {
        this.daveSessionManager?.destroyUser(e);
        let t = this.users.get(e);
        if (null != t) {
            let { audioSSRC: n, videoSSRC: i } = t;
            this.users.delete(e),
                null != n && this.userIdsBySsrc.delete(n),
                null != i && this.userIdsBySsrc.delete(i),
                this.logger.info(`Renegotiating: User left: ${e}`),
                this.handleNegotiationNeeded();
        }
    }
    getUserIdBySsrc = (e) => this.userIdsBySsrc.get(e);
    setBitRate(e) {
        this.voiceBitrate !== e &&
            (super.setBitRate(e), this.setAudioEncoderParameters([{ parameter: ec.AUDIO_BITRATE, value: e }]));
    }
    setRemoteAudioHistory(e) {
        this.enableAudioNack = e > 0;
    }
    setSDP(e) {
        if (!eL(e)) throw Error(`Incorrect SDP received from rtc-worker: ${e}`);
        if ("have-local-offer" !== this.signalingState) throw Error(`Invalid signaling state ${this.signalingState}`);
        let { outboundStreams: t } = this.parseLocalDescription();
        (this.sdp = e), this.setRemoteAnswer(t, [], [], new Map());
    }
    prepareSecureFramesTransition(e, t, n) {
        this.daveSessionManager?.prepareSecureFramesTransition(e, t, n);
    }
    prepareSecureFramesEpoch(e, t, n) {
        this.daveSessionManager?.prepareSecureFramesEpoch(e, t, n);
    }
    executeSecureFramesTransition(e) {
        this.daveSessionManager?.executeSecureFramesTransition(e);
    }
    getMLSKeyPackage(e) {
        this.daveSessionManager?.getMLSKeyPackage(e);
    }
    updateMLSExternalSender(e) {
        this.daveSessionManager?.updateMLSExternalSender(e);
    }
    processMLSProposals(e, t) {
        this.daveSessionManager?.processMLSProposals(e, t);
    }
    prepareMLSCommitTransition(e, t, n) {
        this.daveSessionManager?.prepareMLSCommitTransition(e, t, n);
    }
    processMLSWelcome(e, t, n) {
        this.daveSessionManager?.processMLSWelcome(e, t, n);
    }
    get peerConnectionState() {
        return this.pc.connectionState;
    }
    get iceGatheringState() {
        return this.pc.iceGatheringState;
    }
    get iceConnectionState() {
        return this.pc.iceConnectionState;
    }
    get signalingState() {
        return this.pc.signalingState;
    }
    get connected() {
        return "connected" === this.pc.iceConnectionState;
    }
    setTransceiverEncodingParameters(e, t) {
        if (null == e || 0 === t.length) return;
        let n = e.sender,
            i = n.getParameters();
        if (null == i.encodings) return;
        let r = !1;
        for (let e of i.encodings)
            for (let { propertyName: n, value: i } of t)
                e[n] !== i &&
                    (this.logger.info(
                        `UnifiedConnection.setTransceiverEncodingParameters: ${n}: from '${e[n]}' to '${i}'`,
                    ),
                    (r = !0),
                    (e[n] = i));
        if (!r) return;
        let s = (e) => {
            this.logger.error(
                `UnifiedConnection.setTransceiverEncodingProperty: setParameters failed: "${e}" (${JSON.stringify(t)})"`,
            );
        };
        n.setParameters(i)
            .then(
                () => {},
                (e) => s(e),
            )
            .catch((e) => s(e));
    }
    setAudioEncoderParameters(e) {
        let t = { [ec.AUDIO_BITRATE]: "maxBitrate" },
            n = [];
        for (let { parameter: i, value: r } of e) {
            let e = t[i];
            if (null == e)
                return void this.logger.info(`UnifiedConnection.setEncoderParameter: Unable to set parameter "${i}"`);
            n.push({ propertyName: e, value: r });
        }
        this.setTransceiverEncodingParameters(this.audioTransceiver, n);
    }
    setVideoEncoderParameters(e) {
        let t = {
                [ec.VIDEO_BITRATE]: "maxBitrate",
                [ec.VIDEO_RESOLUTION_SCALE]: "scaleResolutionDownBy",
                [ec.VIDEO_FRAMERATE]: "maxFramerate",
            },
            n = [];
        for (let { parameter: i, value: r } of e) {
            let e = t[i];
            if (null == e)
                return void this.logger.info(`UnifiedConnection.setEncoderParameter: Unable to set parameter "${i}"`);
            n.push({ propertyName: e, value: r });
        }
        this.setTransceiverEncodingParameters(this.videoTransceiver, n);
    }
    getRawStats() {
        return this.pc.getStats();
    }
    makeOfferAnswerOptions() {
        return { iceRestart: !1 };
    }
    parseLocalDescription() {
        let e = this.pc.localDescription;
        if (null == e) throw Error("localDescription is null");
        let t = e.sdp,
            {
                outboundStreams: n,
                codecs: i,
                audioSSRC: r,
                videoSSRC: s,
                rtxSSRC: a,
            } = ey(t, this.experimentFlags.has(L.fd.BROWSER_HEVC)),
            o = ev(t);
        return { sdp: t, outboundStreams: n, codecs: i, audioSSRC: r, videoSSRC: s, rtxSSRC: a, extensions: o };
    }
    addTransceivers(e, t, n, i) {
        let r = this.pc,
            s = r.getTransceivers().length;
        for (let a = s; a < s + n; a++) {
            let n = { direction: t };
            "video" === e && null != i && (n.streams = [i]);
            let s = r.addTransceiver(e, n);
            this.daveSessionManager?.setupEncodedTransformsForTransceiver(s),
                this.inactiveTransceivers[e].push(a.toString());
        }
    }
    buildSSRCsFromOutboundStreams(e, t, n, i) {
        return {
            ssrcs: e.map((e) => {
                let { mid: r, type: s, direction: a } = e;
                r = String(r);
                let o = this.assignedStreams.get(r);
                if (null != o) {
                    let e = i.get(o.cname),
                        t = "audio" === s ? e?.audioSSRC : e?.videoSSRC;
                    o.ssrc !== t &&
                        (this.logger.info(
                            `Deleting inactive stream for user with mid: ${r}, type: ${s}, ssrc: ${o.ssrc}`,
                        ),
                        (o = void 0),
                        this.assignedStreams.delete(r));
                }
                let l = "audio" === s ? t : n,
                    _ = this.inactiveTransceivers[s],
                    d = _.indexOf(r);
                return (
                    null == o &&
                        l.length > 0 &&
                        -1 !== d &&
                        ((o = l.pop()), _.splice(d, 1), this.assignedStreams.set(r, o)),
                    null == o && (o = { ssrc: -1, cname: "" }),
                    { ssrc: o.ssrc, cname: o.cname, type: s, direction: eS(a), mid: r }
                );
            }),
            remainingAudioStreams: t,
            remainingVideoStreams: n,
        };
    }
    generateSDPAnswer(e, t, n, i) {
        let r = this.audioCodec,
            s = this.audioPayloadType,
            a = this.videoCodec,
            o = this.videoPayloadType,
            l = this.videoSupported && this.videoTransceiver?.sender?.track != null,
            _ = this.rtxPayloadType,
            d = this.sdp;
        if (null == r || null == s || null == a || null == o || null == _ || null == d)
            throw Error(
                `Invalid payload: audioCodec: ${r}, audioPayloadType: ${null == s ? "null" : s}, videoCodec: ${a}, videoCodecPayloadType: ${null == o ? "null" : o}, rtxPayloadType: ${null == _ ? "null" : _}, sdp: ${null == d ? "null" : d}`,
            );
        let {
            ssrcs: u,
            remainingAudioStreams: c,
            remainingVideoStreams: E,
        } = this.buildSSRCsFromOutboundStreams(e, t, n, i);
        return {
            remainingAudioStreams: c,
            remainingVideoStreams: E,
            answer: (function (e) {
                let {
                        type: t,
                        baseSDP: n,
                        audioCodec: i,
                        audioPayloadType: r,
                        audioBitRate: s,
                        videoCodec: a,
                        videoPayloadType: o,
                        videoBitRate: l,
                        sendingVideo: _,
                        rtxPayloadType: d,
                        ssrcs: u,
                        extensions: c,
                        enableAudioNack: E,
                    } = e,
                    h = [],
                    m = "answer" === t ? "passive" : "actpass";
                return (
                    u.forEach((e) => {
                        let t,
                            { ssrc: u, cname: f, type: g, direction: I, mid: A } = e;
                        "" !== f
                            ? (t = eN(f, u, "audio" === g ? "a" : "v"))
                            : ((t = []), "sendonly" === I ? (I = "inactive") : "sendrecv" === I && (I = "recvonly")),
                            h.push(
                                eR({
                                    mid: A,
                                    type: g,
                                    setup: m,
                                    direction: I,
                                    baseSDP: n,
                                    codec: "audio" === g ? i : a,
                                    payload: "audio" === g ? r : o,
                                    bitrate: "audio" === g ? s : l,
                                    ssrcs: t,
                                    extensions: c,
                                    rtxPayload: "audio" === g ? null : d,
                                    sendingVideo: _,
                                    enableAudioNack: E,
                                }),
                            );
                    }),
                    new RTCSessionDescription({ type: t, sdp: eO(h) })
                );
            })({
                type: "answer",
                baseSDP: d,
                audioCodec: r,
                audioPayloadType: s,
                audioBitRate: this.voiceBitrate,
                videoCodec: a,
                videoPayloadType: o,
                videoBitRate: 2500,
                sendingVideo: l,
                rtxPayloadType: _,
                ssrcs: u,
                extensions: this.extensions,
                enableAudioNack: this.enableAudioNack,
            }),
        };
    }
    async setRemoteAnswer(e, t, n, i) {
        let r = this.pc,
            { answer: s, remainingAudioStreams: a, remainingVideoStreams: o } = this.generateSDPAnswer(e, t, n, i);
        try {
            await r.setRemoteDescription(s);
        } catch (e) {
            this.logger.warn(`Failed to set remote answer: ${e}, type: ${s.type}`),
                this.emit(p.yq.SdpError, "setRemoteDescription", e.message, s.type);
        }
        this.unassignedStreams.audio.unshift(...a),
            this.unassignedStreams.video.unshift(...o),
            (this.unassignedStreams.audio.length > 0 || this.unassignedStreams.video.length > 0) &&
                ((this.negotiationNeeded = !0),
                this.logger.info("Renegotiating: Streams left unassigned after negotiation - renegotiate")),
            (this.negotiating = !1),
            this.negotiationNeeded && this.handleNegotiationNeeded();
    }
    setConnected() {
        this.input.reset(),
            this.setConnectionState(L.$I.CONNECTED),
            this.on(p.yq.Stats, this.handleStats),
            this.input.on(Z.VoiceActivity, this.handleVoiceActivity);
    }
    async handleNegotiationNeeded() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!e && (this.negotiating || null == this.sdp)) {
            this.negotiationNeeded = !0;
            return;
        }
        (this.negotiating = !0), (this.negotiationNeeded = !1);
        let t = eU()(this.unassignedStreams.audio),
            n = eU()(this.unassignedStreams.video),
            i = eG()(this.users);
        (this.unassignedStreams.audio = []), (this.unassignedStreams.video = []);
        let r = this.pc,
            s = await r.createOffer(this.makeOfferAnswerOptions());
        try {
            await r.setLocalDescription(s);
        } catch (e) {
            this.logger.warn(`Failed to set local offer: ${e}, type: ${s.type}, sdp: ${s.sdp}`),
                this.emit(p.yq.SdpError, "setLocalDescription", e.message, s.type);
        }
        let {
            sdp: a,
            outboundStreams: o,
            codecs: l,
            audioSSRC: _,
            videoSSRC: d,
            rtxSSRC: u,
            extensions: c,
        } = this.parseLocalDescription();
        (this.codecs = l),
            (this.extensions = c),
            (_ !== this.audioSSRC || d !== this.videoSSRC) && this.daveSessionManager?.updateSsrcs(this.userId, _, [d]),
            (this.audioSSRC = _),
            (this.videoSSRC = d),
            (this.videoReady = d > 0 && u > 0),
            (this.videoStreamParameters[0].ssrc !== d ||
                this.videoStreamParameters[0].rtxSsrc !== u ||
                this.videoReady) &&
                ((this.videoStreamParameters[0].ssrc = 0 === d ? this.videoStreamParameters[0].ssrc : d),
                (this.videoStreamParameters[0].rtxSsrc = 0 === u ? this.videoStreamParameters[0].rtxSsrc : u),
                (this.videoStreamParameters[0].active = this.videoReady),
                this.emit(
                    p.yq.Video,
                    this.userId,
                    this.input.getVideoStreamId(),
                    this.audioSSRC,
                    d,
                    u,
                    this.videoStreamParameters,
                )),
            null == this.sdp
                ? this.emit(p.yq.Connected, "webrtc", eD(a, this.experimentFlags.has(L.fd.BROWSER_HEVC)))
                : this.setRemoteAnswer(o, t, n, i);
    }
    handlePeerConnectionStateChange = () => {
        let e = this.peerConnectionState;
        switch ((this.logger.info("peerConnectionState =>", e), e)) {
            case "connected":
                this.setConnected();
                break;
            case "connecting":
                "connected" === this.iceConnectionState
                    ? this.setConnectionState(L.$I.DTLS_CONNECTING)
                    : this.setConnectionState(L.$I.ICE_CHECKING);
                break;
            case "failed":
                this.setConnectionState(L.$I.NO_ROUTE);
                break;
            case "disconnected":
            case "closed":
                this.setConnectionState(L.$I.DISCONNECTED);
        }
    };
    handleIceConnectionStateChange = () => {
        let e = this.iceConnectionState;
        switch ((this.logger.info("iceConnectionState =>", e), e)) {
            case "connected":
                this.setConnected();
                break;
            case "checking":
                this.setConnectionState(L.$I.ICE_CHECKING);
                break;
            case "failed":
                this.setConnectionState(L.$I.NO_ROUTE);
                break;
            case "disconnected":
            case "closed":
                this.setConnectionState(L.$I.DISCONNECTED);
        }
    };
    handleSignalingStateChange = () => {
        let e = this.signalingState;
        this.logger.info(`signalingState => ${e}`);
    };
    handleIceGatheringStateChange = () => {
        this.logger.info("iceGatheringState =>", this.iceGatheringState);
    };
    handleTrack = (e) => {
        let t = e.streams[0].id,
            n = e.track;
        if (!/^default/.test(n.id)) {
            let [e, i] = t.split("-");
            this.trackUserIds[n.id] = e;
            let r = this.users.get(e);
            if (r?.videoSSRC?.toString?.() !== i && r?.audioSSRC?.toString?.() !== i)
                return void this.logger.info(`Got stale ssrc ${i} for ${n.kind} track, user ID ${e}`);
            this.createOutput(e, n),
                (n.onunmute = () => this.createOutput(e, n)),
                (n.onmute = () => {
                    this.users.get(e)?.videoSSRC == null && this.destroyOutput(e, n);
                });
        }
    };
}
function eX(e) {
    return e.split("-")[0];
}
class eQ extends eE {
    pc;
    fpc;
    codecs = [];
    logger;
    constructor(e) {
        super(e), (this.logger = new I.Vy(`Connection(${e.context})`));
        const t = new ew();
        t.on("answer", (e) =>
            this.pc
                .setRemoteDescription(e)
                .catch((e) => this.logger.error(`Failed to set remote description (answer): ${e}`)),
        ),
            t.on("offer", (e) => {
                this.pc
                    .setRemoteDescription(e)
                    .then(() => this.pc.createAnswer())
                    .then((e) => this.fpc.setRemoteDescription(e))
                    .catch((e) => this.logger.error(`Failed to set remote description (offer): ${e}`));
            }),
            (t.direction = null != this.input.stream ? ep.SENDRECV : ep.SENDONLY),
            (this.fpc = t);
        const n = new eb(this.voiceBitrate);
        n.on("addtrack", (e, t) => this.createOutput(eX(e), t)),
            n.on("removetrack", (e, t) => this.destroyOutput(eX(e), t)),
            n.once("connected", () => {
                this.input.reset(),
                    this.setConnectionState(L.$I.CONNECTED),
                    this.on(p.yq.Stats, this.handleStats),
                    this.input.on(Z.VoiceActivity, this.handleVoiceActivity);
            }),
            n.on("connecting", () => this.setConnectionState(L.$I.DTLS_CONNECTING)),
            n.on("checking", () => this.setConnectionState(L.$I.ICE_CHECKING)),
            n.on("failed", () => this.setConnectionState(L.$I.NO_ROUTE)),
            n.on("disconnected", () => this.setConnectionState(L.$I.DISCONNECTED)),
            n.on("closed", () => this.setConnectionState(L.$I.DISCONNECTED)),
            n.on("offer", (e) => {
                let { sdp: n } = e,
                    { outboundStreams: i, codecs: r, audioSSRC: s, videoSSRC: a, rtxSSRC: o } = ey(n, !1);
                this.codecs = r;
                let l = ev(n);
                (t.outboundStreams = i),
                    (this.audioSSRC = s),
                    (t.extensions = l),
                    (this.videoStreamParameters[0].ssrc === a &&
                        this.videoStreamParameters[0].rtxSsrc === o &&
                        this.videoReady) ||
                        ((this.videoStreamParameters[0].ssrc = a),
                        (this.videoStreamParameters[0].rtxSsrc = o),
                        this.emit(
                            p.yq.Video,
                            this.userId,
                            this.input.getVideoStreamId(),
                            this.audioSSRC,
                            this.videoStreamParameters[0].ssrc,
                            this.videoStreamParameters[0].rtxSsrc,
                            this.videoStreamParameters,
                        ),
                        (this.videoReady = !0));
            }),
            n.once("offer", (e) => {
                let { sdp: t } = e;
                this.emit(p.yq.Connected, "webrtc", eD(t, !1));
            }),
            null != this.input.stream ? n.setStream(this.input.stream) : n.negotiationNeeded(),
            (this.pc = n);
    }
    destroy() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        super.destroy(e), this.pc.close();
    }
    setCodecs(e, t, n) {
        let i;
        (this.fpc.audioCodec !== e || this.fpc.videoCodec !== t) &&
            ((i = this.codecs.find((t) => t.name === e)),
            (this.fpc.audioCodec = e),
            (this.fpc.audioPayloadType = i?.payloadType ?? 0),
            (i = this.codecs.find((e) => e.name === t)),
            (this.fpc.videoCodec = t),
            (this.fpc.videoPayloadType = i?.payloadType ?? 0),
            (this.fpc.rtxPayloadType = i?.rtxPayloadType ?? 0),
            this.pc.negotiationNeeded());
    }
    setStream(e) {
        (this.fpc.direction = null != e ? ep.SENDRECV : ep.SENDONLY), this.pc.setStream(e ?? null);
    }
    createUser(e, t, n) {
        if (0 === t) return void this.logger.warn(`Attempting to create user ${e} with 0 audio SSRC`);
        this.logger.info(`Creating user: ${e} with audio SSRC: ${t} and video SSRCs: ${n?.join(",") ?? 0}`);
        let i = null != n && n.length > 0 ? n[0] : 0;
        this.fpc.addStream(e, t, i);
    }
    destroyUser(e) {
        this.fpc.removeStream(e);
    }
    setBitRate(e) {
        this.voiceBitrate !== e && (super.setBitRate(e), this.pc.setBitRate(e));
    }
    setSDP(e) {
        this.pc.on("offer", () => this.fpc.createAnswer()), (this.fpc.sdp = e);
    }
    getUserIdBySsrc(e) {}
    getRawStats() {
        return this.pc.getStats();
    }
    setVideoEncoderParameters(e) {}
}
let eJ = n.p + "worklet.8d84a64a97f8451a.js",
    eZ = { voiceActivityDetection: !0, offerToReceiveAudio: !0, offerToReceiveVideo: !1, iceRestart: !1 };
class e0 extends C.EventEmitter {
    userId;
    sinkId;
    input;
    pc1;
    pc2;
    senders = [];
    outputs = {};
    audioContext;
    constructor(e, t, n, i = "") {
        super(),
            (this.userId = i),
            (this.sinkId = n),
            (this.pc1 = new RTCPeerConnection()),
            (this.pc1.onicecandidate = (e) => {
                null != e.candidate && this.pc2.addIceCandidate(e.candidate);
            }),
            (this.pc2 = new RTCPeerConnection()),
            (this.pc2.onicecandidate = (e) => {
                null != e.candidate && this.pc1.addIceCandidate(e.candidate);
            }),
            (this.pc2.ontrack = this.handleTrack),
            (this.input = new K(e)),
            this.input.setSource(t),
            this.input.on("stream", this.handleStream),
            this.input.enable(),
            (this.audioContext = e);
    }
    stop() {
        for (let e of (this.pc1.close(), this.pc2.close(), this.input.destroy(), Object.keys(this.outputs)))
            this.destroyOutput(e);
    }
    setAudioSource(e) {
        this.input.setSource(e);
    }
    setAudioSink(e) {
        for (let t of ((this.sinkId = e), Object.keys(this.outputs))) this.outputs[t].setSinkId(e);
    }
    setNoiseCancellation(e) {
        this.input.noiseCancellation = e;
    }
    createOutput(e, t) {
        let n = this.outputs[e];
        null == n &&
            (((n = new ei(this.userId, this.audioContext)).mute = !1),
            (n.volume = 100),
            n.setSpeakingFlags(L.ME.VOICE),
            n.setSinkId(this.sinkId),
            (this.outputs[e] = n)),
            n.addTrack(t),
            n.play();
    }
    destroyOutput(e, t) {
        let n = this.outputs[e];
        null != n && (null == t || 0 === n.removeTrack(t)) && (n.destroy(), delete this.outputs[e]);
    }
    handshake() {
        this.pc1.createOffer(eZ).then((e) => {
            this.pc1
                .setLocalDescription(
                    ((e) => {
                        let t = e.sdp.split("\n");
                        for (let e = 0; e < t.length; e++) {
                            let n = t[e];
                            if (/^a=mid:/.test(n)) break;
                        }
                        return (e.sdp = t.join("\n")), e;
                    })(e),
                )
                .then(() => {
                    this.pc2.setRemoteDescription(e).then(() => {
                        this.pc2.createAnswer().then((e) => {
                            this.pc2.setLocalDescription(e).then(() => {
                                this.pc1.setRemoteDescription(e);
                            });
                        });
                    });
                });
        });
    }
    handleStream = () => {
        let e = this.input.getDelayedStream();
        this.senders.forEach((e) => this.pc1.removeTrack(e)),
            (this.senders = [...e.getAudioTracks().map((t) => this.pc1.addTrack(t, e))]),
            this.handshake();
    };
    handleTrack = (e) => {
        e.streams[0].getTracks().forEach((e) => {
            this.createOutput(e.id, e),
                (e.onmute = () => {
                    this.destroyOutput(e.id, e);
                });
        });
    };
}
class e1 extends C.EventEmitter {
    id;
    stream;
    pool;
    streamId;
    static async get(e, t, n) {
        let i = {
            audio: t && { echoCancellation: !1, noiseSuppression: !1, autoGainControl: !1 },
            video: { ...e, frameRate: 30 },
        };
        if (navigator.mediaDevices?.getDisplayMedia != null)
            return new e1(await navigator.mediaDevices.getDisplayMedia(i), n);
        throw Error("UNKNOWN");
    }
    constructor(e, t) {
        super(),
            e.getVideoTracks().forEach((e) => {
                e.onended = () => {
                    this.emit("desktopsourceend");
                };
            }),
            (this.id = e.getVideoTracks()[0].label),
            (this.stream = e),
            (this.streamId = (0, X.ju)(e)),
            (this.pool = t);
    }
    reuse() {
        this.removeAllListeners(), this.pool.release(this);
    }
    destroy() {
        this.removeAllListeners(), (0, X.it)(this.streamId), this.stream.getTracks().forEach((e) => e.stop());
    }
    reset() {
        this.refreshSpeaking();
    }
    getStreamId() {
        return this.streamId;
    }
    refreshSpeaking() {
        this.emit(
            "speaking",
            this.stream.getAudioTracks().some((e) => e.enabled),
        );
    }
}
class e2 {
    pool = {};
    async acquire(e, t) {
        let n = await e1.get(e, t, this);
        return (this.pool[n.id] = n), n;
    }
    get(e) {
        let t = this.pool[e];
        return delete this.pool[e], t;
    }
    release(e) {
        if (e.pool !== this) throw Error("DesktopInputPool: Input not from this pool");
        this.pool[e.id] = e;
    }
}
var e3 = n(935399),
    e6 = n(503698),
    e4 = n.n(e6);
function e7(e) {
    let { streamId: t, paused: n = !1, onReady: i, onResize: r, className: s, ...a } = e,
        o = c.useRef(null),
        l = c.useRef({ width: 0, height: 0 });
    c.useLayoutEffect(() => {
        let e = o.current;
        if (null != e)
            return (
                O(t),
                (e.srcObject = (0, X.yL)(t)),
                () => {
                    R(t), (e.srcObject = null), e.load();
                }
            );
    }, [t]),
        c.useEffect(
            () => (
                n ? (o.current?.pause(), R(t)) : o.current?.play().catch(() => {}),
                () => {
                    n && O(t);
                }
            ),
            [n],
        );
    let d = c.useCallback(() => {
        let { width: e, height: t } = l.current,
            n = o.current?.videoWidth ?? 0,
            i = o.current?.videoHeight ?? 0;
        if (e !== n || t !== i) {
            let e = { width: n, height: i };
            r?.(e), (l.current = e);
        }
    }, [r]);
    c.useLayoutEffect(() => {
        let e = o.current;
        if (null != e) return e.addEventListener("resize", d), () => e.removeEventListener("resize", d);
    }, [d]);
    let u = c.useCallback(() => {
            i?.();
        }, [i]),
        E = c.useCallback(
            (e) => {
                n || e.currentTarget.play();
            },
            [n],
        );
    return (0, _.jsx)("video", {
        className: e4()("media-engine-video", s),
        ref: o,
        autoPlay: !0,
        onPause: E,
        onCanPlayThrough: u,
        muted: !0,
        ...a,
    });
}
function e5(e) {
    let { deviceId: t = L.qe, width: n = 320, height: i = 180, disabled: r = !1, onDeviceChange: s } = e,
        [a, o] = c.useState(null),
        l = c.useMemo(() => new J(), []);
    return (
        c.useEffect(
            () => (
                l.addListener("video", o),
                l.addListener("permission", () => s?.()),
                () => {
                    l.removeAllListeners();
                }
            ),
            [l, s],
        ),
        (0, e3.l0)(() => {
            l.destroy();
        }),
        c.useEffect(() => {
            r
                ? l.setSource(L.qe)
                : l.setSource(t, {
                      width: n * window.devicePixelRatio,
                      height: i * window.devicePixelRatio,
                      frameRate: 30,
                  });
        }, [t, n, i, r, l]),
        null == a
            ? (0, _.jsx)("div", { className: "media-engine-video", style: { width: n, height: i } })
            : (0, _.jsx)(e7, { streamId: a, style: { width: n, height: i } })
    );
}
let e8 = new I.Vy("MediaEngineWebRTC");
class e9 extends m.A {
    Video = e7;
    Camera = (e) => (0, _.jsx)(e5, { ...e, onDeviceChange: this.handleDeviceChange });
    _audioContext = null;
    outputVolume = L.Hz;
    sourceId = L.dx;
    sinkId = L.dx;
    videoInputDeviceId = L.qe;
    enabled = !1;
    connections = new Set();
    interacted = !1;
    loopback = null;
    voiceActivityInput = null;
    desktopInputPool = new e2();
    enablePromise = null;
    dave = null;
    transientKeys = null;
    maxSupportedProtocolVersion = null;
    constructor() {
        super(),
            this.on("newListener", this.handleNewListener),
            this.on("removeListener", this.handleRemoveListener),
            (function (e) {
                N = e ?? null;
            })(this.handleActiveSinksChange),
            (0, T.A)(this);
    }
    destroy() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        null != this.voiceActivityInput && (this.voiceActivityInput.destroy(), (this.voiceActivityInput = null)),
            this.eachConnection((t) => t.destroy(e)),
            this.emit(p.bg.Destroy),
            this.removeAllListeners();
    }
    interact() {
        this.interacted || (document.createElement("audio").play(), (this.interacted = !0)),
            this.eachConnection((e) => e.interact());
    }
    static supported() {
        return (
            !__OVERLAY__ &&
            (eu.Hz && null != window.AudioContext && null != window.RTCPeerConnection
                ? (n(528416), !0)
                : (e8.info("WebRTC is not supported on", u().name, u().version), !1))
        );
    }
    supported() {
        return !0;
    }
    supports(e) {
        switch (e) {
            case L.O5.AUDIO_INPUT_DEVICE:
                return v;
            case L.O5.AUDIO_OUTPUT_DEVICE:
                return w;
            case L.O5.VIDEO:
                return eu.g7;
            case L.O5.DESKTOP_CAPTURE:
                return navigator.mediaDevices?.getDisplayMedia != null;
            case L.O5.VOICE_PROCESSING:
                return "Chrome" === u().name;
            case L.O5.NATIVE_PING:
            case L.O5.DIAGNOSTICS:
                return eu.fA;
            case L.O5.DESKTOP_CAPTURE_APPLICATIONS:
            case L.O5.LOOPBACK:
            case L.O5.NOISE_SUPPRESSION:
            case L.O5.AUTOMATIC_GAIN_CONTROL:
                return "Safari" !== u().name;
            case L.O5.NOISE_CANCELLATION:
                return g()();
            case L.O5.QOS:
            case L.O5.ATTENUATION:
            case L.O5.AUTOMATIC_VAD:
            case L.O5.LEGACY_AUDIO_SUBSYSTEM:
            case L.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM:
            case L.O5.AUTOMATIC_AUDIO_SUBSYSTEM:
            case L.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH:
            case L.O5.DEBUG_LOGGING:
            case L.O5.VOICE_PANNING:
            case L.O5.AUTO_ENABLE:
            case L.O5.DESKTOP_CAPTURE_FORMAT:
            case L.O5.VIDEO_HOOK:
            case L.O5.AEC_DUMP:
            case L.O5.DISABLE_VIDEO:
            case L.O5.CONNECTION_REPLAY:
            case L.O5.SIMULCAST:
            case L.O5.SCREEN_CAPTURE_KIT:
            default:
                return !1;
        }
    }
    getAudioContext() {
        return null == this._audioContext && (this._audioContext = new AudioContext()), this._audioContext;
    }
    connect(e, t, n) {
        var i;
        let r,
            s,
            { ssrc: a, address: o, port: l, modes: _, streamUserId: d, streamParameters: c } = n,
            E =
                ((i = {
                    context: e,
                    userId: t,
                    audioContext: this.getAudioContext(),
                    streamParameters: c,
                    dave: this.dave,
                    transientKeys: this.transientKeys,
                }),
                (r = `${null != u().name && "" !== u().name ? u().name : "unknown"} ${null != u().version && "" !== u().version ? u().version : "unknown"}`),
                (s = new I.Vy(`Connection(${i.context})`)),
                eu.PF ? (s.info(`Using Unified Plan (${r})`), new eq(i)) : (s.info(`Using Plan B (${r})`), new eQ(i)));
        return (
            (E.streamUserId = d),
            E.setOutputVolume(this.outputVolume),
            E.setSinkId(this.sinkId),
            E.once(A.y.Destroy, (e) => this.connections.delete(e)),
            E.on(A.y.Silence, (e) => this.emit(p.bg.Silence, e)),
            E.on(A.y.DesktopSourceEnd, this.handleDesktopSourceEnd),
            E.on(A.y.AudioPermission, this.handleAudioPermission),
            E.on(A.y.VideoPermission, this.handleVideoPermission),
            this.interacted && E.interact(),
            e === L.x.DEFAULT && (E.setAudioSource(this.sourceId), this.enabled && E.input.enableAudioInput()),
            this.connections.add(E),
            this.emit(p.bg.Connection, E),
            E
        );
    }
    findConnection(e) {
        return Array.from(this.connections).find((t) => null == e || t.context === e);
    }
    eachConnection(e, t) {
        this.connections.forEach((n) => {
            (null == t || n.context === t) && e(n);
        });
    }
    enable() {
        return (
            null == this.enablePromise &&
                (this.enablePromise = this._enable().finally(() => {
                    this.enablePromise = null;
                })),
            this.enablePromise
        );
    }
    async _enable() {
        if (this.enabled) return;
        await this.getAudioContext().audioWorklet.addModule(eJ);
        let e = new K(this.getAudioContext());
        e.on("permission", this.handleAudioPermission);
        try {
            await e.enable(),
                "Firefox" === u().name && (await this.handleDeviceChange()),
                (this.enabled = !0),
                this.eachConnection((e) => e.input.enableAudioInput(), L.x.DEFAULT),
                this.voiceActivityInput?.enable();
        } finally {
            e.destroy();
        }
    }
    setInputVolume(e) {}
    setOutputVolume(e) {
        (this.outputVolume = e), this.connections.forEach((t) => t.setOutputVolume(e));
    }
    getNoiseCancellationStats() {
        return Promise.reject(Error("getNoiseCancellationStats is not supported on browsers."));
    }
    setNoiseCancellationEnableStats(e) {}
    setNoiseCancellationDuringProcessing(e) {}
    setNoiseCancellationAfterProcessing(e) {}
    setVADAfterWebrtc(e) {}
    getAudioInputDevices() {
        return M();
    }
    setAudioInputDevice(e) {
        let t = this.sourceId;
        (this.sourceId = e),
            this.eachConnection((t) => t.setAudioSource(e), L.x.DEFAULT),
            this.voiceActivityInput?.setSource(e),
            this.loopback?.setAudioSource(e),
            this.emit(p.bg.SelectedDeviceChange, L.oh.AUDIO_INPUT, t, e);
    }
    getAudioOutputDevices() {
        return G();
    }
    setAudioOutputDevice(e) {
        let t = this.sinkId;
        (this.sinkId = e),
            this.connections.forEach((t) => t.setSinkId(e)),
            this.loopback?.setAudioSink(e),
            this.emit(p.bg.SelectedDeviceChange, L.oh.AUDIO_OUTPUT, t, e);
    }
    getVideoInputDevices() {
        return x();
    }
    setVideoInputDevice(e) {
        (this.videoInputDeviceId = e), this.eachConnection((t) => t.setVideoSource(e), L.x.DEFAULT);
    }
    getVideoInputDeviceId() {
        return this.videoInputDeviceId;
    }
    setAsyncVideoInputDeviceInit(e) {}
    getCodecCapabilities(e) {
        e("");
    }
    async getDesktopSource(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (await this.desktopInputPool.acquire(e, t)).id;
    }
    getScreenPreviews(e, t) {
        return Promise.reject(Error("UNSUPPORTED"));
    }
    getWindowPreviews(e, t) {
        return Promise.reject(Error("UNSUPPORTED"));
    }
    getSingleWindowPreview(e, t, n) {
        return Promise.reject(Error("UNSUPPORTED"));
    }
    setClipsModulePath(e) {}
    setClipsDataPath(e) {}
    setClipBufferLength(e) {}
    setClipsMLPipelineEnabled(e) {}
    setClipsMLPipelineTypeEnabled(e, t) {}
    saveClip(e, t) {
        return Promise.reject(Error("UNSUPPORTED"));
    }
    saveClipForUser(e, t, n) {
        return Promise.reject(Error("UNSUPPORTED"));
    }
    updateClipMetadata(e, t) {
        return Promise.reject(Error("UNSUPPORTED"));
    }
    exportClip(e, t) {
        return Promise.reject(Error("UNSUPPORTED"));
    }
    saveScreenshot(e, t, n, i, r) {
        return Promise.reject(Error("UNSUPPORTED"));
    }
    setGoLiveSource(e, t) {
        if (null == e) this.eachConnection((e) => e.setDesktopInput(null), t);
        else if (null != e.desktopDescription && null != this.findConnection(t)) {
            h()(t === L.x.STREAM, "Go live context is not STREAM");
            let n = !1,
                i = this.desktopInputPool.get(e.desktopDescription.id);
            if (null == i) return;
            this.eachConnection((e) => {
                e.streamUserId === e.userId && ((n = !0), e.setDesktopInput(i));
            }, t),
                n || this.desktopInputPool.release(i);
        }
    }
    setClipsSource(e) {}
    setClipsQualitySettings(e, t, n) {
        return !1;
    }
    setSoundshareSource(e, t, n) {}
    setAudioSubsystem(e) {}
    queueAudioSubsystem(e) {}
    setOffloadAdmControls(e) {}
    updateFieldTrial(e, t) {}
    getAudioSubsystem() {
        return L.rB.STANDARD;
    }
    getAudioLayer() {
        return "";
    }
    getDebugLogging() {
        return !1;
    }
    setDebugLogging(e) {}
    writeAudioDebugState() {
        return Promise.reject(Error("Audio debug state is not supported."));
    }
    setAudioInputBypassSystemProcessing(e) {}
    setLoopback(e, t) {
        e && null == this.loopback
            ? (this.enable(),
              (this.loopback = new e0(this.getAudioContext(), this.sourceId, this.sinkId)),
              this.loopback.setNoiseCancellation(t.noiseCancellation))
            : e || null == this.loopback || (this.loopback.stop(), (this.loopback = null));
    }
    getLoopback() {
        return null != this.loopback;
    }
    getCodecSurvey() {
        return Promise.reject(Error("getCodecSurvey is not implemented on MediaEngine of browsers."));
    }
    startAecDump() {}
    stopAecDump() {}
    setAecDump(e) {}
    startRecordingRawSamples(e) {
        throw Error("startRecordingRawSamples is not supported on browsers.");
    }
    stopRecordingRawSamples() {
        throw Error("stopRecordingRawSamples is not supported on browsers.");
    }
    processBatchAudioFiles(e, t, n, i) {
        throw Error("processBatchAudioFiles is not supported on browsers.");
    }
    cancelBatchAudioProcessing() {
        throw Error("cancelBatchAudioProcessing is not supported on browsers.");
    }
    createReplayConnection(e, t) {
        throw Error("Connection replay is not supported.");
    }
    setOnVideoContainerResized(e) {}
    setMaxSyncDelayOverride(e) {}
    rankRtcRegions(e) {
        return Promise.reject(Error("RTC region latency test is not supported."));
    }
    applyMediaFilterSettings(e) {
        return Promise.resolve();
    }
    startLocalAudioRecording() {
        return Promise.reject(Error("startLocalAudioRecording is not supported."));
    }
    stopLocalAudioRecording(e) {}
    setHasFullbandPerformance(e) {}
    getSupportedSecureFramesProtocolVersion() {
        if (null == this.maxSupportedProtocolVersion)
            throw Error("getSupportedSecureFramesProtocolVersion called before DAVE was initialized");
        return this.maxSupportedProtocolVersion;
    }
    getSupportedBandwidthEstimationExperiments(e) {
        e([]);
    }
    getMLSSigningKey(e, t) {
        return Promise.reject(Error("getMLSSigningKey is not supported."));
    }
    setSidechainCompression(e) {}
    setSidechainCompressionStrength(e) {}
    setNativeDesktopVideoSourcePickerActive(e) {}
    presentNativeScreenSharePicker(e) {}
    releaseNativeDesktopVideoSourcePickerStream() {}
    getSystemMicrophoneMode() {
        return Promise.resolve("");
    }
    showSystemCaptureConfigurationUI(e) {}
    fetchAsyncResources(e) {
        return e.fetchDave
            ? ej()
                ? "object" != typeof WebAssembly
                    ? ((this.maxSupportedProtocolVersion = 0),
                      Promise.reject(Error("WebAssembly is not supported on this platform.")))
                    : new Promise((e, t) => {
                          (null != eH
                              ? eH
                              : (eH = new Promise((e, t) => {
                                    Promise.all([n.e("95625"), n.e("74086"), n.e("63197"), n.e("18269"), n.e("16566")])
                                        .then(n.bind(n, 22389))
                                        .then((n) => {
                                            let { DaveModuleFactory: i } = n;
                                            i(eK)
                                                .then((t) => {
                                                    eB.info("Successfully initialized DAVE"), (eY = t), e(t);
                                                })
                                                .catch((e) => {
                                                    eB.error("Failed to initialize DAVE", e), t(e);
                                                });
                                        })
                                        .catch((e) => {
                                            eB.error("Failed to load DAVE module", e), t(e);
                                        });
                                }))
                          )
                              .then((t) => {
                                  (this.dave = t),
                                      (this.transientKeys = (function () {
                                          if (null == eY) throw Error("DAVE module not loaded");
                                          return null == eW && (eW = new eY.TransientKeys()), eW;
                                      })()),
                                      (this.maxSupportedProtocolVersion = t.MaxSupportedProtocolVersion()),
                                      e8.info(
                                          "Successfully initialized DAVE, version:",
                                          this.maxSupportedProtocolVersion,
                                      ),
                                      e();
                              })
                              .catch((e) => {
                                  (this.maxSupportedProtocolVersion = 0),
                                      e8.error("Failed to initialize DAVE", e),
                                      t(e);
                              });
                      })
                : ((this.maxSupportedProtocolVersion = 0),
                  Promise.reject(Error("Encoded transforms are not supported on this platform.")))
            : ((this.maxSupportedProtocolVersion = 0), Promise.resolve());
    }
    getDeviceOSVolume(e) {
        return Promise.resolve(void 0);
    }
    getDeviceOSMuted(e) {
        return Promise.resolve(void 0);
    }
    getDeviceAudioEffects(e) {
        return Promise.reject(Error("Device audio effect querying not supported on browsers."));
    }
    handleActiveSinksChange = (e, t) => {
        this.connections.forEach((n) =>
            n.setHasActiveVideoOutputSink(e, t, "MediaEngineWebRTC.handleActiveSinksChange"),
        );
    };
    handleNewListener = (e) => {
        switch (e) {
            case p.bg.DeviceChange:
                null != navigator.mediaDevices &&
                    null == navigator.mediaDevices.ondevicechange &&
                    ((navigator.mediaDevices.ondevicechange = () => {
                        this.handleDeviceChange();
                    }),
                    this.handleDeviceChange());
                break;
            case p.bg.VoiceActivity:
                null == this.voiceActivityInput &&
                    ((this.voiceActivityInput = new K(this.getAudioContext())),
                    this.voiceActivityInput.setSource(this.sourceId),
                    this.voiceActivityInput.on("voiceactivity", this.handleVoiceActivity),
                    this.enabled && this.voiceActivityInput.enable());
        }
    };
    handleRemoveListener = (e) => {
        switch (e) {
            case p.bg.DeviceChange:
                navigator.mediaDevices?.ondevicechange != null &&
                    0 === this.listenerCount(p.bg.DeviceChange) &&
                    (navigator.mediaDevices.ondevicechange = null);
                break;
            case p.bg.VoiceActivity:
                null != this.voiceActivityInput &&
                    0 === this.listenerCount(p.bg.VoiceActivity) &&
                    (this.voiceActivityInput.destroy(), (this.voiceActivityInput = null));
        }
    };
    handleDeviceChange = async () => {
        let [e, t, n] = await V();
        this.emit(p.bg.DeviceChange, e, t, n);
    };
    handleVoiceActivity = (e) => {
        this.emit(p.bg.VoiceActivity, e, 0);
    };
    handleDesktopSourceEnd = () => {
        this.emit(p.bg.DesktopSourceEnd);
    };
    handleAudioPermission = (e) => {
        this.emit(p.bg.AudioPermission, e), this.handleDeviceChange();
    };
    handleVideoPermission = (e) => {
        this.emit(p.bg.VideoPermission, e), this.handleDeviceChange();
    };
}
