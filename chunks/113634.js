let i;
n.d(t, { A: () => tt });
var r,
    a,
    s,
    l,
    o,
    d,
    c,
    u,
    _ = n(477900),
    E = n(214958),
    A = n.n(E);
(window.AudioContext = window.AudioContext ?? window.webkitAudioContext),
    null != window.RTCPeerConnection &&
        "Chrome" === A().name &&
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
var h = n(582128),
    I = n(284009),
    f = n.n(I),
    p = n(972347),
    T = n(738239),
    m = n.n(T),
    g = n(941426),
    S = n(904986),
    N = n(459838),
    C = n(70909),
    O = n(782425),
    R = n(143236),
    L = n(737005),
    y = n.n(L),
    D = n(731854);
let v = null != navigator.mediaDevices && null != navigator.mediaDevices.enumerateDevices,
    b = v && "setSinkId" in HTMLAudioElement.prototype;
function M(e) {
    return { id: D.dx, type: e, index: 0, name: "Default" };
}
function P() {
    return {
        [D.oh.AUDIO_INPUT]: [M(D.oh.AUDIO_INPUT)],
        [D.oh.AUDIO_OUTPUT]: [M(D.oh.AUDIO_OUTPUT)],
        [D.oh.VIDEO_INPUT]: [M(D.oh.VIDEO_INPUT)],
    };
}
function U(e, t) {
    return {
        id: e.deviceId,
        type: e.kind,
        index: t,
        name: null != e.label && "" !== e.label ? e.label : 0 === t ? "Default" : `Device ${t}`,
    };
}
async function w() {
    if (!v) return P();
    try {
        let e = await navigator.mediaDevices.enumerateDevices(),
            { [D.oh.AUDIO_INPUT]: t = [], [D.oh.AUDIO_OUTPUT]: n = [], [D.oh.VIDEO_INPUT]: i = [] } = y()(e, "kind"),
            [r, a, s] = [t, n, i].map((e) => e.map(U));
        return { [D.oh.AUDIO_INPUT]: r, [D.oh.AUDIO_OUTPUT]: b ? a : [M(D.oh.AUDIO_OUTPUT)], [D.oh.VIDEO_INPUT]: s };
    } catch {
        return P();
    }
}
async function G() {
    return (await w())[D.oh.AUDIO_INPUT];
}
async function x() {
    return (await w())[D.oh.AUDIO_OUTPUT];
}
async function k() {
    return (await w())[D.oh.VIDEO_INPUT];
}
async function F() {
    let e = await w();
    return [e[D.oh.AUDIO_INPUT], e[D.oh.AUDIO_OUTPUT], e[D.oh.VIDEO_INPUT]];
}
class V {
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
        const a = e.createAnalyser();
        (a.fftSize = 512), (a.smoothingTimeConstant = i);
        const s = e.createMediaStreamSource(t);
        s.connect(a);
        const l = [];
        for (let e = 0; e < r; e++) l.push(!1);
        const o = window.setInterval(() => {
            this.update(), this.onProcess?.(this.speaking, this.currentVolume);
        }, 20);
        (this.threshold = n),
            (this.analyser = a),
            (this.interval = o),
            (this.fftBins = new Float32Array(a.fftSize)),
            (this.source = s),
            (this.speakingHistory = l),
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
let j = new g.Vy("Output"),
    W = new V();
class Y extends R.EventEmitter {
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
    mode = D.TB.VOICE_ACTIVITY;
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
        let e = await G(),
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
                            let { default: e } = await n.e("364920").then(n.t.bind(n, 259047, 23)),
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
                        a = this.context.createMediaStreamDestination();
                    r.connect(this._audioFilter), this._audioFilter.connect(a), (this.stream = a.stream);
                } catch (t) {
                    j.error("failure creating krisp node"), j.error(t), (this.stream = e);
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
                this.mode === D.TB.VOICE_ACTIVITY &&
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
var K = n(434933),
    $ = n.n(K),
    z = n(811315),
    q = n.n(z),
    Z = n(201327);
let X = new V();
class Q extends R.EventEmitter {
    stream = new MediaStream();
    sourceId = D.qe;
    streamId = null;
    destroyed = !1;
    destroy() {
        null != this.stream && (X.release(this.stream), (this.stream = null)),
            null != this.streamId && (0, Z.it)(this.streamId),
            (this.destroyed = !0);
    }
    getStreamId() {
        return this.streamId;
    }
    async setSource(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (this.sourceId === e) return this.stream;
        (this.sourceId = e), null != this.stream && (X.release(this.stream), (this.stream = null));
        let n = await k();
        if (this.sourceId === D.qe) return this.setStream(new MediaStream());
        let i = { width: 1280, ...t };
        n.some((e) => e.id === this.sourceId) && (i.deviceId = this.sourceId);
        try {
            let e = await X.acquire({ audio: !1, video: i });
            if (this.destroyed) throw (X.release(e), Error("VideoInput: Already destroyed"));
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
            null != this.streamId && ((0, Z.it)(this.streamId), (this.streamId = null)),
            (this.stream = e),
            (e.onaddtrack = (e) => this.emit("add-video-track", e)),
            e.getVideoTracks().length > 0 && (this.streamId = (0, Z.ju)(e)),
            this.emit("stream", e),
            this.emit("video", this.getStreamId()),
            e
        );
    }
}
var J =
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
class ee extends p.A {
    audio;
    video = new Q();
    desktop = null;
    stream;
    constructor(e) {
        super(),
            (this.audio = new Y(e)),
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
let et = new g.Vy("Output");
var en = (((a = {}).InteractionRequired = "interactionrequired"), (a.Speaking = "speaking"), (a.Video = "video"), a);
class ei extends p.A {
    id;
    _speakingFlags = D.ME.NONE;
    _mute = !1;
    _volume = D.Hz;
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
            null != this.videoStreamId && (0, Z.it)(this.videoStreamId),
            null != this.streamSourceNode && (this.streamSourceNode.disconnect(), (this.streamSourceNode = null)),
            null != this.levelNode &&
                (this.levelNode.disconnect(), this.levelNode.port.postMessage("close"), (this.levelNode = null)),
            this.setSpeakingFlags(D.ME.NONE),
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
                (null != this.videoStreamId && (0, Z.it)(this.videoStreamId),
                this.stream.getVideoTracks().forEach((t) => {
                    e !== t && ((t.discordIsTearingDown = !0), this.stream.removeTrack(t));
                }),
                (this.videoStreamId = (0, Z.ju)(this.stream)),
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
                (null != this.videoStreamId && (0, Z.it)(this.videoStreamId), this.emit("video", null)),
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
        return (this._speakingFlags & D.ME.PRIORITY) === D.ME.PRIORITY;
    }
    get volume() {
        return this._volume;
    }
    set volume(e) {
        (this._volume = Math.max(0, Math.min(Math.round(e), D.Hz))), this.updateAudioElement();
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
            null != t && b && e.setSinkId(t);
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
            a = e[t.ssrc];
        return null == a && ((a = new el(n, i, r)), (e[t.ssrc] = a)), a;
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
var ea =
    (((s = ea || {})[(s.NONE = 0)] = "NONE"),
    (s[(s.MILLISECONDS_FROM_SECONDS = 1)] = "MILLISECONDS_FROM_SECONDS"),
    (s[(s.BYTES_TO_BITS = 2)] = "BYTES_TO_BITS"),
    (s[(s.ROUND = 4)] = "ROUND"),
    s);
let es = {
    0: { multiplier: 1 },
    1: { postfix: "_in_ms", multiplier: 1e3 },
    2: { bitrate: !0, postfix: "", multiplier: 8 },
};
class el {
    accumulativeMetricKey;
    samplesMetricKey;
    previous;
    multiplier = 1;
    round = !1;
    constructor(e, t, n = 0) {
        for (const i in ((this.accumulativeMetricKey = e), (this.samplesMetricKey = t), ea)) {
            const e = Number(i);
            !isNaN(e) && (n & e) != 0 && i in es && (this.multiplier *= es[i]?.multiplier ?? 1);
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
        let a = t[this.samplesMetricKey],
            s = e[this.samplesMetricKey];
        if ("number" != typeof a || "number" != typeof s) return;
        let l = ((r - i) / (s - a)) * this.multiplier;
        return this.round ? Math.round(l) : l;
    }
}
var eo = n(752163);
function ed(e) {
    return { id: e.payloadType, name: e.mimeType.split("/").slice(1)[0] };
}
class ec {
    jitterStatsMap = new Map();
}
var eu = n(396574),
    e_ =
        (((l = {})[(l.AUDIO_BITRATE = 0)] = "AUDIO_BITRATE"),
        (l[(l.VIDEO_RESOLUTION_SCALE = 1)] = "VIDEO_RESOLUTION_SCALE"),
        (l[(l.VIDEO_BITRATE = 2)] = "VIDEO_BITRATE"),
        (l[(l.VIDEO_FRAMERATE = 3)] = "VIDEO_FRAMERATE"),
        l);
class eE extends S.A {
    input;
    silenced = !1;
    interacted = !1;
    outputVolume = D.Hz;
    sinkId = D.dx;
    lastPingTime = 0;
    outputs = {};
    webrtcStats = new er();
    silenceThreshold = -100;
    transformStatsState = new ec();
    canHavePriority = new Set();
    prioritySpeakers = new Set();
    audioContext;
    constructor(e) {
        super(e.context, e.userId),
            (this.input = new ee(e.audioContext)),
            e.audioContext.addEventListener("statechange", this.handleAudioContextStateChange),
            (this.audioContext = e.audioContext),
            this.input.on(J.AudioPermission, this.handleAudioPermission),
            this.input.on(J.VideoPermission, this.handleVideoPermission),
            this.input.on(J.Video, this.handleVideo),
            this.input.on(J.Mute, (e) => this.emit(N.yq.Mute, e)),
            this.input.on(J.Stream, this.handleStream),
            this.input.on(J.DesktopSourceEnd, this.handleDesktopSourceEnd),
            this.input.on(J.Speaking, this.handleInputSpeaking),
            this.input.on(J.AddVideoTrack, this.handleAddVideoTrack),
            this.input.on(J.Video, this.handleAddVideoTrack),
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
        return (function (e, t, n, i, r, a) {
            let s = {},
                l = {},
                o = [],
                d = [];
            for (let t of e.values())
                switch (t.type) {
                    case "candidate-pair":
                        s[t.id] = t;
                        break;
                    case "codec":
                        l[t.id] = t;
                        break;
                    case "inbound-rtp":
                        o.push(t);
                        break;
                    case "outbound-rtp":
                        d.push(t);
                }
            let c = Object.values(s).find((e) => "succeeded" === e.state);
            if (void 0 === c) return null;
            let u = [];
            for (let e of d) {
                let t = l[e.codecId];
                if (null == t) continue;
                let i = {
                    type: e.kind,
                    ssrc: e.ssrc,
                    timestamp: e.timestamp,
                    sinkWant: (0, eo.D)(n, e.ssrc, "video" === e.kind),
                    sinkWantAsInt: (0, eo.q)(n, e.ssrc),
                    codec: ed(t),
                    bytesSent: e.bytesSent,
                    packetsSent: e.packetsSent,
                    bitrateTarget: e.targetBitrate,
                };
                if ("audio" === e.kind) u.push({ ...i, type: "audio" });
                else if ("video" === e.kind && r) {
                    var _;
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
                            null == e.framesEncoded || null === (_ = e.totalEncodeTime) || 0 === _
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
                A = new Map();
            for (let e of o) {
                let r = l[e.codecId];
                if (null == r) continue;
                let s = t(e.ssrc);
                if (null == s) continue;
                let o = {
                    type: e.kind,
                    ssrc: e.ssrc,
                    timestamp: e.timestamp,
                    sinkWant: (0, eo.D)(n, e.ssrc, "video" === e.kind),
                    sinkWantAsInt: (0, eo.q)(n, e.ssrc),
                    sinkWantLocal: (0, eo.D)(i, e.ssrc, "video" === e.kind),
                    sinkWantLocalAsInt: (0, eo.q)(i, e.ssrc),
                    codec: ed(r),
                    bytesReceived: e.bytesReceived,
                    packetsReceived: e.packetsReceived,
                    packetsLost: e.packetsLost,
                    nackCount: e.nackCount,
                };
                if ("audio" === e.kind) {
                    let t = null,
                        n = null,
                        i = a.jitterStatsMap.get(e.ssrc) ?? {
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
                    A.set(e.ssrc, i),
                        null == E[s] && (E[s] = []),
                        E[s].push({
                            ...o,
                            audioLevel: e.audioLevel,
                            jitter: 1e3 * e.jitter,
                            jitterBuffer: t ?? i.lastJitterBuffer,
                            jitterBufferPreferred: n ?? i.lastJitterBufferTarget,
                            audioJitterBufferSamples: null != t ? [t] : [],
                            audioJitterTargetSamples: null != n ? [n] : [],
                        });
                } else if ("video" === e.kind) {
                    null == E[s] && (E[s] = []);
                    let t = null !== e.frameWidth ? { width: e.frameWidth, height: e.frameHeight } : void 0;
                    E[s].push({
                        ...o,
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
                        totalDecodeTime: null != e.totalDecodeTime ? 1e3 * e.totalDecodeTime : void 0,
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
            a.jitterStatsMap = A;
            let h =
                    "firefox" === (platform.name ?? "unknown").toLowerCase() &&
                    142 === parseInt(platform.version ?? "", 10),
                I = (c.currentRoundTripTime ?? 0) * (h ? 1 : 1e3);
            return {
                transport: {
                    availableOutgoingBitrate: c.availableOutgoingBitrate ?? 0,
                    bytesReceived: c.bytesReceived,
                    bytesSent: c.bytesSent,
                    ping: I,
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
                i = (n?.height ?? 0) > 720 ? D.oL : D.lo;
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
        (this.selfMute = e), this.input.setMute(e), this.emit(N.yq.Mute, e);
    };
    setNoiseCancellationDuringProcessing(e) {}
    setNoiseCancellationCpuDisablement(e) {}
    setSkipNoiseCancellationIfMuted(e) {}
    setEchoReferenceMode(e) {}
    getSelfMute() {
        return this.selfMute;
    }
    setInputMode(e, t) {
        this.input.setAudioMode(e, { delay: t.pttReleaseDelay, threshold: t.vadThreshold });
    }
    setSelfDeaf(e) {
        for (let t of ((this.selfDeaf = e), Object.keys(this.outputs))) this.outputs[t].mute = e || this.localMutes[t];
        this.emit(N.yq.Deafen, e);
    }
    getSelfDeaf() {
        return this.selfDeaf;
    }
    setLocalMute(e, t) {
        (this.localMutes[e] = t),
            null != this.outputs[e] && (this.outputs[e].mute = this.selfDeaf || t),
            this.emit(N.yq.LocalMute, e, t);
    }
    fastUdpReconnect() {}
    setUdpEndpoint() {}
    getNumFastUdpReconnects() {
        return null;
    }
    wasRemoteDisconnected() {}
    setRemoteVideoSinkWants(e) {
        (this.remoteVideoSinkWants = e), this.updateVideoQuality(D.nJ);
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
                a = t.capture.width / r;
            n = a < 1 ? void 0 : a;
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
            a = e.encodingVideoHeight;
        if (null != r && null != a)
            for (let e of i.getTracks()) {
                let t = e.getConstraints(),
                    n = t.width?.max,
                    i = t.height?.max;
                (n !== r || i !== a) &&
                    (this.logger.info(`BaseWebRTCConnection.updateVideoQuality: old: ${n} x ${i}, new: ${r} x ${a}`),
                    (t.width = { max: r }),
                    (t.height = { max: a }),
                    e.applyConstraints(t));
            }
    }
    handleAddVideoTrack = () => {
        this.updateVideoQuality();
    };
    handleAudioPermission = (e) => this.emit(N.yq.AudioPermission, e);
    handleVideoPermission = (e) => this.emit(N.yq.VideoPermission, e);
    handleVideo = (e) =>
        this.emit(
            N.yq.Video,
            this.userId,
            e,
            this.audioSSRC,
            this.videoStreamParameters[0].ssrc,
            this.videoStreamParameters[0].rtxSsrc ?? 0,
            this.videoStreamParameters,
        );
    handleDesktopSourceEnd = () => this.emit(N.yq.DesktopSourceEnd);
    handleStream = (e) => this.setStream(e);
    handleVoiceActivity = (e) => {
        let t = e <= this.silenceThreshold;
        this.silenced === t || this.input.mute() || ((this.silenced = t), this.emit(N.yq.Silence, t));
    };
    handleNewListener = (e) => {
        switch (e) {
            case N.yq.Video:
                this.videoReady && setImmediate(() => this.handleVideo(this.input.getVideoStreamId()));
                break;
            case N.yq.ConnectionStateChange:
                this.emit(e, this.connectionState);
                break;
            case N.yq.InteractionRequired:
                this.interacted || "suspended" !== this.input.getAudioState() || setImmediate(() => this.emit(e, !0));
        }
    };
    handleInputSpeaking = (e) => {
        this.emit(N.yq.Speaking, this.userId, e ? D.ME.VOICE : D.ME.NONE, this.audioSSRC);
    };
    handleAudioContextStateChange = () => {
        this.interacted ||
            "running" !== this.input.getAudioState() ||
            (this.interact(), this.emit(N.yq.InteractionRequired, !1));
    };
    setCanHavePriority(e, t) {
        let n = this.canHavePriority.size;
        t ? this.canHavePriority.add(e) : this.canHavePriority.delete(e),
            this.canHavePriority.size !== n && this.recalculatePrioritySpeakers();
    }
    setSpeakingFlags(e, t) {
        null != t && t !== D.ME.NONE ? (this.localSpeakingFlags[e] = t) : delete this.localSpeakingFlags[e];
        let n = this.outputs[e];
        null != n && n.setSpeakingFlags(t);
        let i = this.wantsPriority.size,
            r = D.ME.VOICE | D.ME.PRIORITY;
        (t & r) === r ? this.wantsPriority.add(e) : this.wantsPriority.delete(e),
            this.wantsPriority.size !== i && this.recalculatePrioritySpeakers();
    }
    clearAllSpeaking() {
        for (let e in this.localSpeakingFlags)
            delete this.localSpeakingFlags[e], null != this.outputs[e] && this.outputs[e].setSpeakingFlags(D.ME.NONE);
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
        return null == t && (t = this.context === D.x.DEFAULT ? D.Hz : D.Cn), null != t ? t : D.Hz;
    }
    computeLocalVolume(e) {
        let t = (this.outputVolume * this.getLocalVolume(e)) / D.Hz;
        return this.prioritySpeakers.size > 0 && !this.prioritySpeakers.has(e) ? t * D.zt : t;
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
            n.on(en.Speaking, (t) => this.emit(N.yq.Speaking, e, t, this.audioSSRC)),
            n.on(en.Video, (t) =>
                this.emit(
                    N.yq.Video,
                    e,
                    t,
                    this.audioSSRC,
                    this.videoStreamParameters[0].ssrc,
                    this.videoStreamParameters[0].rtxSsrc ?? 0,
                    this.videoStreamParameters,
                ),
            ),
            n.on(en.InteractionRequired, (e) => this.emit(N.yq.InteractionRequired, e)),
            n.setSpeakingFlags(this.localSpeakingFlags[e] ?? D.ME.NONE),
            n.setSinkId(this.sinkId),
            (this.outputs[e] = n)),
            n.addTrack(t);
    }
    destroyOutput(e, t) {
        let n = this.outputs[e];
        null != n && (null == t || 0 === n.removeTrack(t)) && (n.destroy(), delete this.outputs[e]);
    }
    handleStats = (e) => {
        this.connectionState === D.$I.DISCONNECTED
            ? this.off(N.yq.Stats, this.handleStats)
            : null != e &&
              (this.webrtcStats.update(e),
              (this.stats = e),
              Date.now() - this.lastPingTime >= D.n8 &&
                  (this.emit(N.yq.Ping, e.transport.ping), (this.lastPingTime = Date.now())));
    };
    setSilenceThreshold(e) {
        this.silenceThreshold = e;
    }
    setLocalPan(e, t, n) {}
    setUserPosition(e, t) {}
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
    setAudioVideoOverridesTransport(e) {}
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
var eA = n(800754),
    eh = n.n(eA),
    eI = n(226782),
    ef = n.n(eI),
    ep = n(316179);
let eT = new g.Vy("SDP");
var em =
    (((o = {}).SENDRECV = "sendrecv"),
    (o.SENDONLY = "sendonly"),
    (o.RECVONLY = "recvonly"),
    (o.INACTIVE = "inactive"),
    o);
let eg = "UDP/TLS/RTP/SAVPF";
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
function eC(e) {
    return ep.write({
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
function eO(e) {
    let {
        mid: t,
        type: n,
        setup: i,
        direction: r,
        baseSDP: a,
        codec: s,
        payload: l,
        bitrate: o,
        ssrcs: d,
        extensions: c,
        rtxPayload: u,
        sendingVideo: _,
        enableAudioNack: E,
    } = e;
    if ("inactive" === r && !eu.PF)
        return {
            connection: { ip: "0.0.0.0", version: 4 },
            direction: "inactive",
            fmtp: [],
            payloads: l,
            port: 0,
            protocol: eg,
            rtp: [{ codec: "NULL", payload: l, rate: 0 }],
            mid: void 0,
            type: n,
        };
    let {
        media: [h],
    } = ep.parse(a);
    if (
        ((h.type = n),
        (h.protocol = eg),
        (h.payloads = l),
        (h.setup = i),
        (h.mid = t),
        (h.rtcpMux = "rtcp-mux"),
        (h.direction = r),
        (h.ssrcs = d),
        d.length > 0 &&
            (null != u &&
                ((h.ssrcGroups = eh()(d, 4).map((e) => {
                    let t = e[0].id;
                    return { semantics: "FID", ssrcs: `${t} ${t + 1}` };
                })),
                (h.ssrcs = eh()(d, 4)
                    .map((e) => {
                        let t = e.map((e) => ((e = { ...e }), (e.id += 1), e));
                        return [...e, ...t];
                    })
                    .flat())),
            eu.PF || "Firefox" === A().name))
    ) {
        let e = d.find((e) => "msid" === e.attribute);
        if (null == e) throw Error("msid missing");
        (h.msid = e.value), (h.ssrcs = h.ssrcs.filter((e) => "cname" === e.attribute));
    }
    switch (n) {
        case "audio":
            "Firefox" === A().name
                ? (h.ext = c.filter((e) => "urn:ietf:params:rtp-hdrext:ssrc-audio-level" === e.uri))
                : ((h.ext = c.filter(
                      (e) =>
                          "urn:ietf:params:rtp-hdrext:ssrc-audio-level" === e.uri ||
                          "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01" === e.uri,
                  )),
                  (h.rtcpFb = [{ type: "transport-cc", payload: l }]),
                  !0 === E && h.rtcpFb?.push({ type: "nack", payload: l })),
                h.rtp.push({ codec: s, encoding: 2, payload: l, rate: 48e3 }),
                s === D.UK.OPUS &&
                    h.fmtp.push({ config: `minptime=10;useinbandfec=1;usedtx=${_ ? "0" : "1"}`, payload: l }),
                (h.maxptime = 60);
            break;
        case "video":
            (h.ext = c.filter(
                (e) =>
                    "urn:ietf:params:rtp-hdrext:toffset" === e.uri ||
                    "http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time" === e.uri ||
                    "urn:3gpp:video-orientation" === e.uri ||
                    "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01" === e.uri ||
                    "http://www.webrtc.org/experiments/rtp-hdrext/playout-delay" === e.uri,
            )),
                h.rtp.push({ codec: s, payload: l, rate: 9e4 });
            let I = `x-google-max-bitrate=${o}`;
            s === D.UK.H264
                ? (I += ";level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f")
                : s === D.UK.H265 && (I += ";level-id=180;profile-id=1;tier-flag=0;tx-mode=SRST"),
                h.fmtp.push({ config: I, payload: l }),
                (h.rtcpFb = [
                    { type: "ccm", subtype: "fir", payload: l },
                    { type: "nack", payload: l },
                    { type: "nack", subtype: "pli", payload: l },
                    { type: "goog-remb", payload: l },
                    { type: "transport-cc", payload: l },
                ]),
                null != u &&
                    (h.rtp.push({ codec: "rtx", payload: u, rate: 9e4 }),
                    h.fmtp.push({ config: `apt=${l}`, payload: u }),
                    (h.payloads = `${h.payloads} ${u}`));
    }
    return h;
}
function eR(e, t, n, i, r) {
    let a = e.find((e) => e.codec === i);
    if (null == a) return null;
    let s = t.find((e) => RegExp(`^apt=${a.payload}`).test(e.config)),
        l = null;
    if (null != s) {
        let t = e.find((e) => e.codec === D.UK.RTX && e.payload === s.payload);
        null != t && (l = t.payload);
    }
    return { type: n, name: i, priority: r + 1, payloadType: a.payload, rtxPayloadType: l };
}
function eL(e, t) {
    let n = ep.parse(e).media.reduce(
        (e, n) => {
            let i,
                { type: r, rtp: a, ssrcs: s, fmtp: l, direction: o, mid: d } = n;
            switch ((e.outboundStreams.push({ type: r, direction: o, mid: d }), r)) {
                case "audio":
                    [D.UK.OPUS].forEach((t, n) => {
                        let i = eR(a, l, r, t, n);
                        null != i && e.codecs.push(i);
                    }),
                        "sendrecv" === o &&
                            null != (i = s?.find((e) => "cname" === e.attribute)) &&
                            (e.audioSSRC = i.id);
                    break;
                case "video":
                    (t ? [D.UK.H265, D.UK.H264, D.UK.VP8, D.UK.VP9] : [D.UK.H264, D.UK.VP8, D.UK.VP9]).forEach(
                        (t, n) => {
                            let i = eR(a, l, r, t, n);
                            null != i && e.codecs.push(i);
                        },
                    ),
                        "sendrecv" === o &&
                            (null != (i = s?.find((e) => "cname" === e.attribute)) && (e.videoSSRC = i.id),
                            null != (i = s?.findLast((e) => "cname" === e.attribute)) &&
                                (i.id === e.videoSSRC && eT.warn("Unable to find a unique rtx SSRC!"),
                                (e.rtxSSRC = i.id)));
            }
            return e;
        },
        { outboundStreams: [], codecs: [], audioSSRC: 0, videoSSRC: 0, rtxSSRC: 0 },
    );
    return (n.codecs = ef()(n.codecs, q())), n;
}
function ey(e, t) {
    let { codecs: n } = eL(e, t),
        i = n.find((e) => e.name === D.UK.VP8),
        r = RegExp(`^a=ice|a=extmap|a=fingerprint|opus|VP8|${i?.rtxPayloadType ?? 0} rtx`, "i");
    return { sdp: [...new Set(e.split(/\r\n/).filter((e) => r.test(e)))].join("\n"), codecs: n };
}
function eD(e) {
    if (!e.includes("a=fingerprint")) return eT.error("Remote SDP does not include fingerprint!"), !1;
    if (!e.includes("a=ice-ufrag")) return eT.error("Remote SDP does not include ICE user name!"), !1;
    if (!e.includes("a=ice-pwd")) return eT.error("Remote SDP does not include ICE password!"), !1;
    if (!e.includes("a=candidate")) return eT.error("Remote SDP does not include ICE candidate!"), !1;
    if (!e.includes("c=")) return eT.error("Remote SDP does not include c-line!"), !1;
    let t = e
        .split("\n")
        .filter((e) => e.startsWith("c="))
        .join()
        .trim();
    return !(t.split(" ").length < 3) || (eT.error(`Incorrect c-line: ${t}`), !1);
}
function ev(e) {
    return [...new Set(e.split(/\r\n/).filter((e) => e.startsWith("a=extmap:")))].map((e) => {
        let t = e.split(" ");
        return { value: parseInt(t[0].split("/")[0].substr(9), 10), uri: t[1] };
    });
}
class eb extends R.EventEmitter {
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
        if (!eD(e)) throw Error(`Incorrect SDP received from rtc-worker: ${e}`);
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
                a = this.activeAudioSSRCs[n],
                s = this.activeVideoSSRCs[n],
                l = `${r}_inbound_${t}`;
            return [i, n, r, a === i || s === i ? this.direction : em.INACTIVE, l];
        });
        if ("Firefox" !== A().name) return this.connected ? t : [];
        let n = this.outboundStreams.map((e, t) => [0, "outbound", e.type, eS(e.direction), `${e.type}_outbound_${t}`]);
        if ("answer" !== e) return n.concat(t);
        {
            let e = n.length - t.length;
            return n
                .slice(0, e)
                .concat(t)
                .slice(0, n.length)
                .map((e, t) => {
                    let [n, i, r, a, s] = e;
                    return [n, i, r, eS(this.outboundStreams[t].direction), this.outboundStreams[t].mid];
                });
        }
    }
    generateSessionDescription(e) {
        let t = this.audioCodec,
            n = this.audioPayloadType,
            i = this.videoCodec,
            r = this.videoPayloadType,
            a = this.rtxPayloadType,
            s = this.sdp;
        if (null == t || null == n || null == i || null == r || null == a || null == s || null == this.direction)
            throw Error(
                `Invalid payload: audioCodec: ${t}, audioPayloadType: ${null == n ? "null" : n}, videoCodec: ${i}, videoCodecPayloadType: ${null == r ? "null" : r}, rtxPayloadType: ${null == a ? "null" : a}, sdp: ${s}`,
            );
        let l = (function (e) {
            let {
                    type: t,
                    baseSDP: n,
                    direction: i,
                    audioCodec: r,
                    audioPayloadType: a,
                    audioBitRate: s,
                    videoCodec: l,
                    videoPayloadType: o,
                    videoBitRate: d,
                    rtxPayloadType: c,
                    ssrcs: u,
                    extensions: _,
                } = e,
                E = [];
            if ((eT.info(`generateSessionDescription: ${JSON.stringify(u)}`), "Firefox" === A().name)) {
                let e = "answer" === t ? "passive" : "active";
                u.forEach((t) => {
                    let [i, u, A, h, I] = t;
                    ("video" === A && (0 === o || 0 === c)) ||
                        E.push(
                            eO({
                                mid: I,
                                type: A,
                                setup: e,
                                direction: h,
                                baseSDP: n,
                                codec: "audio" === A ? r : l,
                                payload: "audio" === A ? a : o,
                                bitrate: "audio" === A ? s : d,
                                ssrcs: eN(u, i, "audio" === A ? "a" : "v"),
                                extensions: _,
                            }),
                        );
                });
            } else {
                let e = "answer" === t ? "passive" : "actpass",
                    A = u
                        .filter((e) => {
                            let [t, n, i, r, a] = e;
                            return "inactive" !== r && "audio" === i;
                        })
                        .map((e) => {
                            let [t, n] = e;
                            return eN(n, t, "a");
                        });
                if (
                    (E.push(
                        eO({
                            mid: "audio",
                            type: "audio",
                            setup: e,
                            direction: i,
                            baseSDP: n,
                            codec: r,
                            payload: a,
                            bitrate: s,
                            ssrcs: A.flat(),
                            extensions: _,
                        }),
                    ),
                    o > 0)
                ) {
                    let t = u
                        .filter((e) => {
                            let [t, n, i, r, a] = e;
                            return "inactive" !== r && "video" === i;
                        })
                        .map((e) => {
                            let [t, n] = e;
                            return eN(n, t, "v");
                        });
                    E.push(
                        eO({
                            mid: "video",
                            type: "video",
                            setup: e,
                            direction: i,
                            baseSDP: n,
                            codec: l,
                            payload: o,
                            bitrate: d,
                            ssrcs: t.flat(),
                            extensions: _,
                            rtxPayload: c,
                        }),
                    );
                }
            }
            return new RTCSessionDescription({ type: t, sdp: eC(E) });
        })({
            type: e,
            baseSDP: s,
            direction: this.direction,
            audioCodec: t,
            audioPayloadType: n,
            audioBitRate: 40,
            videoCodec: i,
            videoPayloadType: r,
            videoBitRate: 2500,
            rtxPayloadType: a,
            ssrcs: this.getSSRCs(e),
            extensions: this.extensions,
        });
        return this.emit(e, l), Promise.resolve(l);
    }
}
let eM = new g.Vy("PeerConnection");
class eP extends R.EventEmitter {
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
            eM.info("Constructed RTCPeerConnection");
    }
    setBitRate(e) {
        this.bitrate !== e && ((this.bitrate = e), this.negotiationNeeded());
    }
    close() {
        eM.info("Close RTCPeerConnection"),
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
                if ("have-remote-offer" === e.signalingState) return eM.error(t), this.createOffer();
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
                    (eM.warn(
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
        eM.info("peerConnectionState =>", e),
            "connecting" === e
                ? "connected" === this.iceConnectionState
                    ? this.emit(e)
                    : this.emit(this.iceConnectionState)
                : this.emit(e);
    };
    handleIceConnectionStateChange = () => {
        let e = this.iceConnectionState;
        eM.info("iceConnectionState =>", e), "completed" === e && (e = "connected"), this.emit(e);
    };
    handleSignalingStateChange = () => {
        eM.info(`signalingState => ${this.signalingState}, negotiation needed: ${this._negotiationNeeded.toString()}`),
            "stable" === this.signalingState &&
                ((this.negotiating = !1), this._negotiationNeeded && this.negotiationNeeded());
    };
    handleIceGatheringStateChange = () => {
        eM.info("iceGatheringState =>", this.iceGatheringState);
    };
    handleTrack = (e) => {
        this.emitTrack(e.streams[0].id, e.track);
    };
}
n(667532);
var eU = n(429874),
    ew = n.n(eU),
    eG = n(480664),
    ex = n.n(eG);
n(323874), n(14289), n(35956);
var ek =
        (((d = {})[(d.INITIALIZE = 0)] = "INITIALIZE"),
        (d[(d.RTC_TRANSFORM = 1)] = "RTC_TRANSFORM"),
        (d[(d.SET_KEY_RATCHET = 2)] = "SET_KEY_RATCHET"),
        (d[(d.UPDATE_SSRC = 3)] = "UPDATE_SSRC"),
        (d[(d.UPDATE_CODECS = 4)] = "UPDATE_CODECS"),
        (d[(d.DESTROY_USER = 5)] = "DESTROY_USER"),
        d),
    eF = (((c = {})[(c.ENCRYPT = 0)] = "ENCRYPT"), (c[(c.DECRYPT = 1)] = "DECRYPT"), c),
    eV = (((u = {})[(u.PROTOCOL_VERSION_CHANGED = 0)] = "PROTOCOL_VERSION_CHANGED"), u),
    eB = n(264572).Buffer;
class eH extends p.A {
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
            (this.logger = new g.Vy("DaveSessionManager")),
            (this.dave = e),
            (this.transientKeys = t),
            (this.userId = n),
            (this.mlsSession = new e.Session("", "", (e, t) => {
                this.emit(N.yq.MLSFailure, e, t);
            })),
            (this.encryptionWorker = this.setupEncryptionWorker());
    }
    createUser(e) {
        this.recognizedUserIds.add(e), this.setupKeyRatchetForUser(e, this.latestPreparedTransitionVersion, eF.DECRYPT);
    }
    destroyUser(e) {
        this.recognizedUserIds.delete(e), this.encryptionWorker.postMessage({ type: ek.DESTROY_USER, userId: e });
    }
    updateLocalUserCodecs(e, t) {
        this.encryptionWorker.postMessage({ type: ek.UPDATE_CODECS, audioCodec: e, videoCodec: t });
    }
    updateSsrcs(e, t, n) {
        this.encryptionWorker.postMessage({ type: ek.UPDATE_SSRC, userId: e, audioSsrc: t, videoSsrcs: n });
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
            this.setupKeyRatchetForUser(this.userId, t, eF.ENCRYPT),
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
                t.type === eV.PROTOCOL_VERSION_CHANGED
                    ? ((this.currentEncryptorProtocolVersion = t.protocolVersion), this.onSecureFramesStateChanged())
                    : this.logger.warn("Unknown message type from encryption worker", t);
            }),
            (e.onerror = (e) => {
                this.logger.error("Encryption worker error", e);
            }),
            (e.onmessageerror = (e) => {
                this.logger.error("Encryption worker message error", e);
            }),
            e.postMessage({ type: ek.INITIALIZE }),
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
            this.encryptionWorker.postMessage({ type: ek.RTC_TRANSFORM, readable: t, writable: n }, [t, n]);
        } else throw Error("Encoded transforms not supported");
    }
    setupKeyRatchetForUser(e, t, n) {
        let i = this.makeUserKeyRatchet(e, t);
        this.encryptionWorker.postMessage({
            type: ek.SET_KEY_RATCHET,
            userId: e,
            operation: n,
            protocolVersion: t,
            keyRatchet: i,
        });
    }
    prepareSecureFramesRatchets(e, t) {
        for (let e of this.getRecognizedUserIDs()) e !== this.userId && this.setupKeyRatchetForUser(e, t, eF.DECRYPT);
        e === this.dave.kInitTransitionId
            ? (this.setupKeyRatchetForUser(this.userId, t, eF.ENCRYPT), this.onSecureFramesStateChanged())
            : this.secureFramesTransitions.set(e, t),
            (this.latestPreparedTransitionVersion = t);
    }
    onSecureFramesStateChanged() {
        let e = { version: this.currentEncryptorProtocolVersion ?? this.dave.kDisabledVersion, epochAuthenticator: "" };
        if (e.version !== this.dave.kDisabledVersion) {
            let t = this.mlsSession.GetLastEpochAuthenticator();
            e.epochAuthenticator = eB.from(t).toString("base64");
        }
        (null == this.lastSecureFramesStateUpdate ||
            this.lastSecureFramesStateUpdate.version !== e.version ||
            this.lastSecureFramesStateUpdate.epochAuthenticator !== e.epochAuthenticator) &&
            (this.logger.info(`DAVE protocol state update: ${JSON.stringify(e)}`),
            this.emit(N.yq.SecureFramesUpdate, e),
            (this.lastSecureFramesStateUpdate = e));
    }
}
let ej = new g.Vy("LibDaveManager"),
    eW = null,
    eY = null,
    eK = null,
    e$ = {
        onRuntimeInitialized: () => {
            ej.info("DAVE loaded");
        },
    };
function ez() {
    return ("Firefox" !== A().name || !(eu.It < 142)) && eu.PF && eu.zU;
}
let eq = A().name?.toLowerCase().includes("firefox");
function eZ(e, t) {
    e.sender.replaceTrack(t), (e.direction = null != t ? "sendrecv" : "recvonly");
}
class eX extends eE {
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
        super(e), (this.logger = new g.Vy(`UnifiedConnection(${e.context})`));
        let t = e.dave;
        null == t ||
            ez() ||
            (this.logger.warn("DAVE is initialized but encoded transforms are not supported"), (t = null)),
            null != t &&
                ((this.daveSessionManager = new eH(t, e.transientKeys, this.userId)),
                this.daveSessionManager.on(N.yq.MLSFailure, (e, t) => {
                    this.emit(N.yq.MLSFailure, e, t);
                }),
                this.daveSessionManager.on(N.yq.SecureFramesUpdate, (e) => {
                    this.emit(N.yq.SecureFramesUpdate, e);
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
            (e.experiments ?? []).includes("browser_transceiver_padding_removal") &&
                this.setExperimentFlag(D.fd.BROWSER_TRANSCEIVER_PADDING_REMOVAL, !0),
            !this.experimentFlags.has(D.fd.BROWSER_TRANSCEIVER_PADDING_REMOVAL) &&
                (this.addTransceivers("audio", "recvonly", 10),
                this.videoSupported && this.addTransceivers("video", "recvonly", 10)),
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
            (eZ(this.audioTransceiver, e.getAudioTracks()[0]),
            this.videoSupported && eZ(this.videoTransceiver, e.getVideoTracks()[0])),
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
                a = this.unassignedStreams.audio.length,
                s = 10 * !this.experimentFlags.has(D.fd.BROWSER_TRANSCEIVER_PADDING_REMOVAL) + a - n;
            this.addTransceivers("audio", "recvonly", s);
        }
        if (this.videoSupported && void 0 !== n && (!eq || void 0 === r.videoSSRC)) {
            let t = null != n && n.length > 0 ? n[0] : 0;
            if (t > 0) {
                if (r.videoSSRC !== t) {
                    (r.videoSSRC = t), (i = !0), this.unassignedStreams.video.push({ cname: e, ssrc: t });
                    let n = this.inactiveTransceivers.video.length,
                        a = this.unassignedStreams.video.length,
                        s = 10 * !this.experimentFlags.has(D.fd.BROWSER_TRANSCEIVER_PADDING_REMOVAL) + a - n;
                    this.addTransceivers("video", "recvonly", s);
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
            (super.setBitRate(e), this.setAudioEncoderParameters([{ parameter: e_.AUDIO_BITRATE, value: e }]));
    }
    setRemoteAudioHistory(e) {
        this.enableAudioNack = e > 0;
    }
    setSDP(e) {
        if (!eD(e)) throw Error(`Incorrect SDP received from rtc-worker: ${e}`);
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
        let a = (e) => {
            this.logger.error(
                `UnifiedConnection.setTransceiverEncodingProperty: setParameters failed: "${e}" (${JSON.stringify(t)})"`,
            );
        };
        n.setParameters(i)
            .then(
                () => {},
                (e) => a(e),
            )
            .catch((e) => a(e));
    }
    setAudioEncoderParameters(e) {
        let t = { [e_.AUDIO_BITRATE]: "maxBitrate" },
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
                [e_.VIDEO_BITRATE]: "maxBitrate",
                [e_.VIDEO_RESOLUTION_SCALE]: "scaleResolutionDownBy",
                [e_.VIDEO_FRAMERATE]: "maxFramerate",
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
                videoSSRC: a,
                rtxSSRC: s,
            } = eL(t, this.experimentFlags.has(D.fd.BROWSER_HEVC)),
            l = ev(t);
        return { sdp: t, outboundStreams: n, codecs: i, audioSSRC: r, videoSSRC: a, rtxSSRC: s, extensions: l };
    }
    addTransceivers(e, t, n, i) {
        let r = this.pc,
            a = r.getTransceivers().length;
        for (let s = a; s < a + n; s++) {
            let n = { direction: t };
            "video" === e && null != i && (n.streams = [i]);
            let a = r.addTransceiver(e, n);
            this.daveSessionManager?.setupEncodedTransformsForTransceiver(a),
                this.inactiveTransceivers[e].push(s.toString());
        }
    }
    buildSSRCsFromOutboundStreams(e, t, n, i) {
        return {
            ssrcs: e.map((e) => {
                let { mid: r, type: a, direction: s } = e;
                r = String(r);
                let l = this.assignedStreams.get(r);
                if (null != l) {
                    let e = i.get(l.cname),
                        t = "audio" === a ? e?.audioSSRC : e?.videoSSRC;
                    l.ssrc !== t &&
                        (this.logger.info(
                            `Deleting inactive stream for user with mid: ${r}, type: ${a}, ssrc: ${l.ssrc}`,
                        ),
                        (l = void 0),
                        this.assignedStreams.delete(r));
                }
                let o = "audio" === a ? t : n,
                    d = this.inactiveTransceivers[a],
                    c = d.indexOf(r);
                return (
                    null == l &&
                        o.length > 0 &&
                        -1 !== c &&
                        ((l = o.pop()), d.splice(c, 1), this.assignedStreams.set(r, l)),
                    null == l && (l = { ssrc: -1, cname: "" }),
                    { ssrc: l.ssrc, cname: l.cname, type: a, direction: eS(s), mid: r }
                );
            }),
            remainingAudioStreams: t,
            remainingVideoStreams: n,
        };
    }
    generateSDPAnswer(e, t, n, i) {
        let r = this.audioCodec,
            a = this.audioPayloadType,
            s = this.videoCodec,
            l = this.videoPayloadType,
            o = this.videoSupported && this.videoTransceiver?.sender?.track != null,
            d = this.rtxPayloadType,
            c = this.sdp;
        if (null == r || null == a || null == s || null == l || null == d || null == c)
            throw Error(
                `Invalid payload: audioCodec: ${r}, audioPayloadType: ${null == a ? "null" : a}, videoCodec: ${s}, videoCodecPayloadType: ${null == l ? "null" : l}, rtxPayloadType: ${null == d ? "null" : d}, sdp: ${null == c ? "null" : c}`,
            );
        let {
            ssrcs: u,
            remainingAudioStreams: _,
            remainingVideoStreams: E,
        } = this.buildSSRCsFromOutboundStreams(e, t, n, i);
        return {
            remainingAudioStreams: _,
            remainingVideoStreams: E,
            answer: (function (e) {
                let {
                        type: t,
                        baseSDP: n,
                        audioCodec: i,
                        audioPayloadType: r,
                        audioBitRate: a,
                        videoCodec: s,
                        videoPayloadType: l,
                        videoBitRate: o,
                        sendingVideo: d,
                        rtxPayloadType: c,
                        ssrcs: u,
                        extensions: _,
                        enableAudioNack: E,
                    } = e,
                    A = [],
                    h = "answer" === t ? "passive" : "actpass";
                return (
                    u.forEach((e) => {
                        let t,
                            { ssrc: u, cname: I, type: f, direction: p, mid: T } = e;
                        "" !== I
                            ? (t = eN(I, u, "audio" === f ? "a" : "v"))
                            : ((t = []), "sendonly" === p ? (p = "inactive") : "sendrecv" === p && (p = "recvonly")),
                            A.push(
                                eO({
                                    mid: T,
                                    type: f,
                                    setup: h,
                                    direction: p,
                                    baseSDP: n,
                                    codec: "audio" === f ? i : s,
                                    payload: "audio" === f ? r : l,
                                    bitrate: "audio" === f ? a : o,
                                    ssrcs: t,
                                    extensions: _,
                                    rtxPayload: "audio" === f ? null : c,
                                    sendingVideo: d,
                                    enableAudioNack: E,
                                }),
                            );
                    }),
                    new RTCSessionDescription({ type: t, sdp: eC(A) })
                );
            })({
                type: "answer",
                baseSDP: c,
                audioCodec: r,
                audioPayloadType: a,
                audioBitRate: this.voiceBitrate,
                videoCodec: s,
                videoPayloadType: l,
                videoBitRate: 2500,
                sendingVideo: o,
                rtxPayloadType: d,
                ssrcs: u,
                extensions: this.extensions,
                enableAudioNack: this.enableAudioNack,
            }),
        };
    }
    async setRemoteAnswer(e, t, n, i) {
        let r = this.pc,
            { answer: a, remainingAudioStreams: s, remainingVideoStreams: l } = this.generateSDPAnswer(e, t, n, i);
        try {
            await r.setRemoteDescription(a);
        } catch (e) {
            this.logger.warn(`Failed to set remote answer: ${e}, type: ${a.type}`),
                this.emit(N.yq.SdpError, "setRemoteDescription", e.message, a.type);
        }
        this.unassignedStreams.audio.unshift(...s),
            this.unassignedStreams.video.unshift(...l),
            (this.unassignedStreams.audio.length > 0 || this.unassignedStreams.video.length > 0) &&
                ((this.negotiationNeeded = !0),
                this.logger.info("Renegotiating: Streams left unassigned after negotiation - renegotiate")),
            (this.negotiating = !1),
            this.negotiationNeeded && this.handleNegotiationNeeded();
    }
    setConnected() {
        this.input.reset(),
            this.setConnectionState(D.$I.CONNECTED),
            this.on(N.yq.Stats, this.handleStats),
            this.input.on(J.VoiceActivity, this.handleVoiceActivity);
    }
    async handleNegotiationNeeded() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!e && (this.negotiating || null == this.sdp)) {
            this.negotiationNeeded = !0;
            return;
        }
        (this.negotiating = !0), (this.negotiationNeeded = !1);
        let t = ew()(this.unassignedStreams.audio),
            n = ew()(this.unassignedStreams.video),
            i = ex()(this.users);
        (this.unassignedStreams.audio = []), (this.unassignedStreams.video = []);
        let r = this.pc,
            a = await r.createOffer(this.makeOfferAnswerOptions());
        try {
            await r.setLocalDescription(a);
        } catch (e) {
            this.logger.warn(`Failed to set local offer: ${e}, type: ${a.type}, sdp: ${a.sdp}`),
                this.emit(N.yq.SdpError, "setLocalDescription", e.message, a.type);
        }
        let {
            sdp: s,
            outboundStreams: l,
            codecs: o,
            audioSSRC: d,
            videoSSRC: c,
            rtxSSRC: u,
            extensions: _,
        } = this.parseLocalDescription();
        (this.codecs = o),
            (this.extensions = _),
            (d !== this.audioSSRC || c !== this.videoSSRC) && this.daveSessionManager?.updateSsrcs(this.userId, d, [c]),
            (this.audioSSRC = d),
            (this.videoSSRC = c),
            (this.videoReady = c > 0 && u > 0),
            (this.videoStreamParameters[0].ssrc !== c ||
                this.videoStreamParameters[0].rtxSsrc !== u ||
                this.videoReady) &&
                ((this.videoStreamParameters[0].ssrc = 0 === c ? this.videoStreamParameters[0].ssrc : c),
                (this.videoStreamParameters[0].rtxSsrc = 0 === u ? this.videoStreamParameters[0].rtxSsrc : u),
                (this.videoStreamParameters[0].active = this.videoReady),
                this.emit(
                    N.yq.Video,
                    this.userId,
                    this.input.getVideoStreamId(),
                    this.audioSSRC,
                    c,
                    u,
                    this.videoStreamParameters,
                )),
            null == this.sdp
                ? this.emit(N.yq.Connected, "webrtc", ey(s, this.experimentFlags.has(D.fd.BROWSER_HEVC)))
                : this.setRemoteAnswer(l, t, n, i);
    }
    handlePeerConnectionStateChange = () => {
        let e = this.peerConnectionState;
        switch ((this.logger.info("peerConnectionState =>", e), e)) {
            case "connected":
                this.setConnected();
                break;
            case "connecting":
                "connected" === this.iceConnectionState
                    ? this.setConnectionState(D.$I.DTLS_CONNECTING)
                    : this.setConnectionState(D.$I.ICE_CHECKING);
                break;
            case "failed":
                this.setConnectionState(D.$I.NO_ROUTE);
                break;
            case "disconnected":
            case "closed":
                this.setConnectionState(D.$I.DISCONNECTED);
        }
    };
    handleIceConnectionStateChange = () => {
        let e = this.iceConnectionState;
        switch ((this.logger.info("iceConnectionState =>", e), e)) {
            case "connected":
                this.setConnected();
                break;
            case "checking":
                this.setConnectionState(D.$I.ICE_CHECKING);
                break;
            case "failed":
                this.setConnectionState(D.$I.NO_ROUTE);
                break;
            case "disconnected":
            case "closed":
                this.setConnectionState(D.$I.DISCONNECTED);
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
function eQ(e) {
    return e.split("-")[0];
}
class eJ extends eE {
    pc;
    fpc;
    codecs = [];
    logger;
    constructor(e) {
        super(e), (this.logger = new g.Vy(`Connection(${e.context})`));
        const t = new eb();
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
            (t.direction = null != this.input.stream ? em.SENDRECV : em.SENDONLY),
            (this.fpc = t);
        const n = new eP(this.voiceBitrate);
        n.on("addtrack", (e, t) => this.createOutput(eQ(e), t)),
            n.on("removetrack", (e, t) => this.destroyOutput(eQ(e), t)),
            n.once("connected", () => {
                this.input.reset(),
                    this.setConnectionState(D.$I.CONNECTED),
                    this.on(N.yq.Stats, this.handleStats),
                    this.input.on(J.VoiceActivity, this.handleVoiceActivity);
            }),
            n.on("connecting", () => this.setConnectionState(D.$I.DTLS_CONNECTING)),
            n.on("checking", () => this.setConnectionState(D.$I.ICE_CHECKING)),
            n.on("failed", () => this.setConnectionState(D.$I.NO_ROUTE)),
            n.on("disconnected", () => this.setConnectionState(D.$I.DISCONNECTED)),
            n.on("closed", () => this.setConnectionState(D.$I.DISCONNECTED)),
            n.on("offer", (e) => {
                let { sdp: n } = e,
                    { outboundStreams: i, codecs: r, audioSSRC: a, videoSSRC: s, rtxSSRC: l } = eL(n, !1);
                this.codecs = r;
                let o = ev(n);
                (t.outboundStreams = i),
                    (this.audioSSRC = a),
                    (t.extensions = o),
                    (this.videoStreamParameters[0].ssrc === s &&
                        this.videoStreamParameters[0].rtxSsrc === l &&
                        this.videoReady) ||
                        ((this.videoStreamParameters[0].ssrc = s),
                        (this.videoStreamParameters[0].rtxSsrc = l),
                        this.emit(
                            N.yq.Video,
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
                this.emit(N.yq.Connected, "webrtc", ey(t, !1));
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
        (this.fpc.direction = null != e ? em.SENDRECV : em.SENDONLY), this.pc.setStream(e ?? null);
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
let e0 = n.p + "worklet.8d84a64a97f8451a.js",
    e1 = { voiceActivityDetection: !0, offerToReceiveAudio: !0, offerToReceiveVideo: !1, iceRestart: !1 };
class e2 extends R.EventEmitter {
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
            (this.input = new Y(e)),
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
            n.setSpeakingFlags(D.ME.VOICE),
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
        this.pc1.createOffer(e1).then((e) => {
            this.pc1
                .setLocalDescription(
                    (function (e) {
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
class e3 extends R.EventEmitter {
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
            return new e3(await navigator.mediaDevices.getDisplayMedia(i), n);
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
            (this.streamId = (0, Z.ju)(e)),
            (this.pool = t);
    }
    reuse() {
        this.removeAllListeners(), this.pool.release(this);
    }
    destroy() {
        this.removeAllListeners(), (0, Z.it)(this.streamId), this.stream.getTracks().forEach((e) => e.stop());
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
class e5 {
    pool = {};
    async acquire(e, t) {
        let n = await e3.get(e, t, this);
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
var e6 = n(935399),
    e4 = n(503698),
    e7 = n.n(e4);
function e8(e) {
    let { streamId: t, paused: n = !1, onReady: i, onResize: r, className: a, ...s } = e,
        l = h.useRef(null),
        o = h.useRef({ width: 0, height: 0 });
    h.useLayoutEffect(() => {
        let e = l.current;
        if (null != e)
            return (
                (0, O.NM)(t),
                (e.srcObject = (0, Z.yL)(t)),
                () => {
                    (0, O.gm)(t), (e.srcObject = null), e.load();
                }
            );
    }, [t]),
        h.useEffect(
            () => (
                n ? (l.current?.pause(), (0, O.gm)(t)) : l.current?.play().catch(() => {}),
                () => {
                    n && (0, O.NM)(t);
                }
            ),
            [n],
        );
    let d = h.useCallback(() => {
        let { width: e, height: t } = o.current,
            n = l.current?.videoWidth ?? 0,
            i = l.current?.videoHeight ?? 0;
        if (e !== n || t !== i) {
            let e = { width: n, height: i };
            r?.(e), (o.current = e);
        }
    }, [r]);
    h.useLayoutEffect(() => {
        let e = l.current;
        if (null != e) return e.addEventListener("resize", d), () => e.removeEventListener("resize", d);
    }, [d]);
    let c = h.useCallback(() => {
            i?.();
        }, [i]),
        u = h.useCallback(
            (e) => {
                n || e.currentTarget.play();
            },
            [n],
        );
    return (0, _.jsx)("video", {
        className: e7()("media-engine-video", a),
        ref: l,
        autoPlay: !0,
        onPause: u,
        onCanPlayThrough: c,
        muted: !0,
        ...s,
    });
}
function e9(e) {
    let { deviceId: t = D.qe, width: n = 320, height: i = 180, disabled: r = !1, onDeviceChange: a } = e,
        [s, l] = h.useState(null),
        o = h.useMemo(() => new Q(), []);
    return (
        h.useEffect(
            () => (
                o.addListener("video", l),
                o.addListener("permission", () => a?.()),
                () => {
                    o.removeAllListeners();
                }
            ),
            [o, a],
        ),
        (0, e6.l0)(() => {
            o.destroy();
        }),
        h.useEffect(() => {
            r
                ? o.setSource(D.qe)
                : o.setSource(t, {
                      width: n * window.devicePixelRatio,
                      height: i * window.devicePixelRatio,
                      frameRate: 30,
                  });
        }, [t, n, i, r, o]),
        null == s
            ? (0, _.jsx)("div", { className: "media-engine-video", style: { width: n, height: i } })
            : (0, _.jsx)(e8, { streamId: s, style: { width: n, height: i } })
    );
}
let te = new g.Vy("MediaEngineWebRTC");
class tt extends p.A {
    Video = e8;
    Camera = (e) => (0, _.jsx)(e9, { ...e, onDeviceChange: this.handleDeviceChange });
    _audioContext = null;
    outputVolume = D.Hz;
    sourceId = D.dx;
    sinkId = D.dx;
    videoInputDeviceId = D.qe;
    enabled = !1;
    connections = new Set();
    interacted = !1;
    loopback = null;
    voiceActivityInput = null;
    desktopInputPool = new e5();
    enablePromise = null;
    dave = null;
    transientKeys = null;
    maxSupportedProtocolVersion = null;
    constructor() {
        super(),
            this.on("newListener", this.handleNewListener),
            this.on("removeListener", this.handleRemoveListener),
            (0, O.EV)(this.handleActiveSinksChange),
            (0, C.A)(this);
    }
    destroy() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        null != this.voiceActivityInput && (this.voiceActivityInput.destroy(), (this.voiceActivityInput = null)),
            this.eachConnection((t) => t.destroy(e)),
            this.emit(N.bg.Destroy),
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
                : (te.info("WebRTC is not supported on", A().name, A().version), !1))
        );
    }
    supported() {
        return !0;
    }
    supports(e) {
        switch (e) {
            case D.O5.AUDIO_INPUT_DEVICE:
                return v;
            case D.O5.AUDIO_OUTPUT_DEVICE:
                return b;
            case D.O5.VIDEO:
                return eu.g7;
            case D.O5.DESKTOP_CAPTURE:
                return navigator.mediaDevices?.getDisplayMedia != null;
            case D.O5.VOICE_PROCESSING:
                return "Chrome" === A().name;
            case D.O5.NATIVE_PING:
            case D.O5.DIAGNOSTICS:
                return eu.fA;
            case D.O5.DESKTOP_CAPTURE_APPLICATIONS:
            case D.O5.LOOPBACK:
            case D.O5.NOISE_SUPPRESSION:
            case D.O5.AUTOMATIC_GAIN_CONTROL:
                return "Safari" !== A().name;
            case D.O5.NOISE_CANCELLATION:
                return m()();
            case D.O5.QOS:
            case D.O5.ATTENUATION:
            case D.O5.AUTOMATIC_VAD:
            case D.O5.LEGACY_AUDIO_SUBSYSTEM:
            case D.O5.EXPERIMENTAL_AUDIO_SUBSYSTEM:
            case D.O5.AUTOMATIC_AUDIO_SUBSYSTEM:
            case D.O5.AUDIO_SUBSYSTEM_DEFERRED_SWITCH:
            case D.O5.DEBUG_LOGGING:
            case D.O5.VOICE_PANNING:
            case D.O5.AUTO_ENABLE:
            case D.O5.DESKTOP_CAPTURE_FORMAT:
            case D.O5.VIDEO_HOOK:
            case D.O5.AEC_DUMP:
            case D.O5.DISABLE_VIDEO:
            case D.O5.CONNECTION_REPLAY:
            case D.O5.SIMULCAST:
            case D.O5.SCREEN_CAPTURE_KIT:
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
            a,
            { ssrc: s, address: l, port: o, modes: d, streamUserId: c, streamParameters: u, experiments: _ } = n,
            E =
                ((i = {
                    context: e,
                    userId: t,
                    audioContext: this.getAudioContext(),
                    streamParameters: u,
                    dave: this.dave,
                    transientKeys: this.transientKeys,
                    experiments: _,
                }),
                (r = `${null != A().name && "" !== A().name ? A().name : "unknown"} ${null != A().version && "" !== A().version ? A().version : "unknown"}`),
                (a = new g.Vy(`Connection(${i.context})`)),
                eu.PF ? (a.info(`Using Unified Plan (${r})`), new eX(i)) : (a.info(`Using Plan B (${r})`), new eJ(i)));
        return (
            (E.streamUserId = c),
            E.setOutputVolume(this.outputVolume),
            E.setSinkId(this.sinkId),
            E.once(S.y.Destroy, (e) => this.connections.delete(e)),
            E.on(S.y.Silence, (e) => this.emit(N.bg.Silence, e)),
            E.on(S.y.DesktopSourceEnd, this.handleDesktopSourceEnd),
            E.on(S.y.AudioPermission, this.handleAudioPermission),
            E.on(S.y.VideoPermission, this.handleVideoPermission),
            this.interacted && E.interact(),
            e === D.x.DEFAULT && (E.setAudioSource(this.sourceId), this.enabled && E.input.enableAudioInput()),
            this.connections.add(E),
            this.emit(N.bg.Connection, E),
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
        await this.getAudioContext().audioWorklet.addModule(e0);
        let e = new Y(this.getAudioContext());
        e.on("permission", this.handleAudioPermission);
        try {
            await e.enable(),
                "Firefox" === A().name && (await this.handleDeviceChange()),
                (this.enabled = !0),
                this.eachConnection((e) => e.input.enableAudioInput(), D.x.DEFAULT),
                this.voiceActivityInput?.enable();
        } finally {
            e.destroy();
        }
    }
    setAudioMixerOptions(e) {}
    setInputVolume(e) {}
    setOutputVolume(e) {
        (this.outputVolume = e), this.connections.forEach((t) => t.setOutputVolume(e));
    }
    getNoiseCancellationStats() {
        return Promise.reject(Error("getNoiseCancellationStats is not supported on browsers."));
    }
    setNoiseCancellationEnableStats(e) {}
    setNoiseCancellationDuringProcessing(e) {}
    setNoiseCancellationCpuDisablement(e) {}
    getAudioInputDevices() {
        return G();
    }
    setAudioInputDevice(e) {
        let t = this.sourceId;
        (this.sourceId = e),
            this.eachConnection((t) => t.setAudioSource(e), D.x.DEFAULT),
            this.voiceActivityInput?.setSource(e),
            this.loopback?.setAudioSource(e),
            this.emit(N.bg.SelectedDeviceChange, D.oh.AUDIO_INPUT, t, e);
    }
    getAudioOutputDevices() {
        return x();
    }
    setAudioOutputDevice(e) {
        let t = this.sinkId;
        (this.sinkId = e),
            this.connections.forEach((t) => t.setSinkId(e)),
            this.loopback?.setAudioSink(e),
            this.emit(N.bg.SelectedDeviceChange, D.oh.AUDIO_OUTPUT, t, e);
    }
    getVideoInputDevices() {
        return k();
    }
    setVideoInputDevice(e) {
        (this.videoInputDeviceId = e), this.eachConnection((t) => t.setVideoSource(e), D.x.DEFAULT);
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
    getScreenPreviews(e, t, n) {
        return Promise.reject(Error("UNSUPPORTED"));
    }
    getWindowPreviews(e, t, n) {
        return Promise.reject(Error("UNSUPPORTED"));
    }
    getSingleWindowPreview(e, t, n, i) {
        return Promise.reject(Error("UNSUPPORTED"));
    }
    setClipsModulePath(e) {}
    setClipsDataPath(e) {}
    hasClipsV3Support() {
        return !1;
    }
    setClipsV3MLEnabled(e) {}
    setClipsRecordingEnabled(e) {}
    setClipsUIActive(e) {}
    setClipBufferLength(e) {}
    getSystemSteadyClockNowMs() {
        return null;
    }
    saveClipEx(e) {
        return Promise.reject(Error("UNSUPPORTED"));
    }
    updateClipMetadata(e, t) {
        return Promise.reject(Error("UNSUPPORTED"));
    }
    exportClipToFile(e, t, n) {
        return Promise.reject(Error("UNSUPPORTED"));
    }
    setClipsPerfMonitoring(e, t, n) {
        return Promise.reject(Error("UNSUPPORTED"));
    }
    saveScreenshot(e, t, n, i, r) {
        return Promise.reject(Error("UNSUPPORTED"));
    }
    setGoLiveSource(e, t) {
        if (null == e) this.eachConnection((e) => e.setDesktopInput(null), t);
        else if (null != e.desktopDescription && null != this.findConnection(t)) {
            f()(t === D.x.STREAM, "Go live context is not STREAM");
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
    setClipsQualitySettings(e, t, n, i) {
        return !1;
    }
    setSoundshareSource(e, t, n) {}
    setAudioSubsystem(e) {}
    queueAudioSubsystem(e) {}
    setOffloadAdmControls(e) {}
    updateFieldTrial(e, t) {}
    getAudioSubsystem() {
        return D.rB.STANDARD;
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
              (this.loopback = new e2(this.getAudioContext(), this.sourceId, this.sinkId)),
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
    setNcModels(e) {}
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
    setVoiceSampleRateCap(e) {}
    setVoiceChannelCountCap(e) {}
    setNativeDesktopVideoSourcePickerActive(e) {}
    presentNativeScreenSharePicker(e) {}
    releaseNativeDesktopVideoSourcePickerStream() {}
    getSystemMicrophoneMode() {
        return Promise.resolve("");
    }
    showSystemCaptureConfigurationUI(e) {}
    fetchAsyncResources(e) {
        return e.fetchDave
            ? ez()
                ? "object" != typeof WebAssembly
                    ? ((this.maxSupportedProtocolVersion = 0),
                      Promise.reject(Error("WebAssembly is not supported on this platform.")))
                    : new Promise((e, t) => {
                          (null != eW
                              ? eW
                              : (eW = new Promise((e, t) => {
                                    Promise.all([
                                        n.e("95625"),
                                        n.e("174086"),
                                        n.e("563197"),
                                        n.e("218269"),
                                        n.e("116566"),
                                    ])
                                        .then(n.bind(n, 22389))
                                        .then((n) => {
                                            let { DaveModuleFactory: i } = n;
                                            i(e$)
                                                .then((t) => {
                                                    ej.info("Successfully initialized DAVE"), (eY = t), e(t);
                                                })
                                                .catch((e) => {
                                                    ej.error("Failed to initialize DAVE", e), t(e);
                                                });
                                        })
                                        .catch((e) => {
                                            ej.error("Failed to load DAVE module", e), t(e);
                                        });
                                }))
                          )
                              .then((t) => {
                                  (this.dave = t),
                                      (this.transientKeys = (function () {
                                          if (null == eY) throw Error("DAVE module not loaded");
                                          return null == eK && (eK = new eY.TransientKeys()), eK;
                                      })()),
                                      (this.maxSupportedProtocolVersion = t.MaxSupportedProtocolVersion()),
                                      te.info(
                                          "Successfully initialized DAVE, version:",
                                          this.maxSupportedProtocolVersion,
                                      ),
                                      e();
                              })
                              .catch((e) => {
                                  (this.maxSupportedProtocolVersion = 0),
                                      te.error("Failed to initialize DAVE", e),
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
            case N.bg.DeviceChange:
                null != navigator.mediaDevices &&
                    null == navigator.mediaDevices.ondevicechange &&
                    ((navigator.mediaDevices.ondevicechange = () => {
                        this.handleDeviceChange();
                    }),
                    this.handleDeviceChange());
                break;
            case N.bg.VoiceActivity:
                null == this.voiceActivityInput &&
                    ((this.voiceActivityInput = new Y(this.getAudioContext())),
                    this.voiceActivityInput.setSource(this.sourceId),
                    this.voiceActivityInput.on("voiceactivity", this.handleVoiceActivity),
                    this.enabled && this.voiceActivityInput.enable());
        }
    };
    handleRemoveListener = (e) => {
        switch (e) {
            case N.bg.DeviceChange:
                navigator.mediaDevices?.ondevicechange != null &&
                    0 === this.listenerCount(N.bg.DeviceChange) &&
                    (navigator.mediaDevices.ondevicechange = null);
                break;
            case N.bg.VoiceActivity:
                null != this.voiceActivityInput &&
                    0 === this.listenerCount(N.bg.VoiceActivity) &&
                    (this.voiceActivityInput.destroy(), (this.voiceActivityInput = null));
        }
    };
    handleDeviceChange = async () => {
        let [e, t, n] = await F();
        this.emit(N.bg.DeviceChange, e, t, n);
    };
    handleVoiceActivity = (e) => {
        this.emit(N.bg.VoiceActivity, e, 0);
    };
    handleDesktopSourceEnd = () => {
        this.emit(N.bg.DesktopSourceEnd);
    };
    handleAudioPermission = (e) => {
        this.emit(N.bg.AudioPermission, e), this.handleDeviceChange();
    };
    handleVideoPermission = (e) => {
        this.emit(N.bg.VideoPermission, e), this.handleDeviceChange();
    };
}
