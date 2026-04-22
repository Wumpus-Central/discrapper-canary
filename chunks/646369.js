"use strict";
n.d(t, { A: () => N }), n(321073);
var r = n(119479),
    i = n.n(r),
    s = n(415955),
    a = n.n(s),
    o = n(128080),
    l = n.n(o),
    u = n(264968),
    d = n.n(u),
    c = n(141697),
    _ = n(118356),
    f = n(904986);
n(618792);
var E = n(466376),
    h = n(205693),
    p = n(138767),
    m = n(97113),
    g = n(823598),
    A = n(807908),
    I = n(731854),
    T = n(713754);
let S = 0;
function y(e) {
    return null != e && 0 !== e ? e + 1 : 0;
}
class N extends f.A {
    mediaEngineConnectionId = `Native-${S++}`;
    goLiveSourceIdentifier;
    selfVideo = !1;
    codecs = [];
    videoEncoderFallbackPending = !1;
    videoDecoderFallbackSent = new Set();
    desktopDegradationPreference = (0, g.lE)().DegradationPreference.MAINTAIN_FRAMERATE;
    sourceDesktopDegradationPreference = (0, g.lE)().DegradationPreference.DISABLED;
    videoDegradationPreference = (0, g.lE)().DegradationPreference.BALANCED;
    localPans = {};
    remoteAudioSSRCs = {};
    remoteVideoSSRCs = {};
    inputMode = T.TB.VOICE_ACTIVITY;
    vadThreshold = -40;
    vadAutoThreshold = !0;
    vadKrispActivationThreshold = 0.5;
    vadUseKrisp = !0;
    vadLeading = 5;
    vadTrailing = 25;
    vadDuringPreProcess = !1;
    pttReleaseDelay = 20;
    soundshareActive = !1;
    soundshareId = null;
    soundshareSentSpeakingEvent = !1;
    echoCancellation = !0;
    noiseSuppression = !0;
    automaticGainControl = { enabled: !0 };
    noiseCancellation = !1;
    noiseCancellationDuringProcessing = !1;
    noiseCancellationAfterProcessing = !1;
    vadAfterWebrtc = !1;
    attenuationFactor = 0.5;
    attenuateWhileSpeakingSelf = !1;
    attenuateWhileSpeakingOthers = !0;
    qos = !0;
    conn;
    minimumJitterBufferLevel = 0;
    postponeDecodeLevel = 100;
    reconnectInterval = 6e4;
    keyframeInterval = 0;
    clipsKeyFrameInterval = 0;
    videoQualityMeasurement = "";
    videoEncoderExperiments = "";
    numFastUdpReconnects = 0;
    lastPreparedTransitionId = -1;
    lastExecutedTransitionId = -1;
    logger;
    constructor(e, t, n) {
        super(e, t),
            (this.videoSupported = n),
            (this.logger = new _.Vy(`Connection(${e})`)),
            this.logger.enableNativeLogger(!0);
    }
    static create(e, t, n) {
        let r = new N(e, t, !0);
        return r.initialize(n), r;
    }
    static createReplay(e, t) {
        let n = new N(e, "0", !0),
            r = (0, g.lE)();
        n.initializeStreamParameters([{ type: I.mI.VIDEO, rid: "100", ssrc: 0, rtxSsrc: 0, quality: 100, active: !1 }]);
        let i = r.createReplayConnection(
            "default",
            (t, i) => {
                n.on(h.yq.Stats, n.handleStats),
                    n.conn.setOnVideoCallback(n.handleVideo),
                    r.getCodecCapabilities((t) => {
                        let r = (0, p.ZF)(n.experimentFlags);
                        (n.codecs = [
                            { type: "audio", name: T.UK.OPUS, priority: 1, payloadType: 120 },
                            ...(0, p.RQ)(t, r).map((e, t) => {
                                let n = 101 + 2 * t;
                                return {
                                    type: "video",
                                    name: e.name,
                                    priority: t + 1,
                                    payloadType: n,
                                    rtxPayloadType: n + 1,
                                    encode: e.encode,
                                    decode: e.decode,
                                };
                            }),
                        ]),
                            n.setCodecs(T.UK.OPUS, T.UK.H264, e),
                            n.conn.startReplay();
                    });
            },
            t,
        );
        return null == i ? null : ((n.conn = i), n);
    }
    transportInfo;
    beginInitializeAt;
    onConnectCallbackAt;
    onVideoCodecsCallbackAt;
    onEncryptionModesCallbackAt;
    initialize(e) {
        let t;
        this.logger.info(`Creating connection to ${e.address}:${e.port} with audio ssrc: ${e.ssrc}`),
            (this.beginInitializeAt = performance.now()),
            (this.audioSSRC = e.ssrc),
            (this.streamUserId = e.streamUserId),
            this.initializeStreamParameters(e.streamParameters),
            (e.streamParameters = [
                {
                    type: I.mI.AUDIO,
                    ssrc: this.audioSSRC,
                    rid: "",
                    maxBitrate: 64e3,
                    soundshare: this.context === T.x.STREAM,
                },
                ...this.videoStreamParameters,
            ]),
            (e.context = this.context);
        let n = (0, g.lE)(),
            r = (r, i) => {
                if (this.destroyed) return;
                if (null != r && "" !== r) {
                    this.setConnectionState(T.$I.NO_ROUTE), this.emit(h.yq.Error, r);
                    return;
                }
                if (null == i) throw Error("Invalid transport info");
                this.transportInfo = i;
                let { protocol: s, address: a, port: o } = i;
                this.logger.info(`Connected with local address ${a}:${o} and protocol: ${s}`),
                    (this.onConnectCallbackAt = performance.now()),
                    n.getCodecCapabilities((r) => {
                        (this.onVideoCodecsCallbackAt = performance.now()),
                            this.logger.info(`Available engine codecs: ${JSON.stringify(r)}`);
                        let i = (0, p.ZF)(this.experimentFlags);
                        this.logger.info(`Experimental codecs: ${JSON.stringify(i)}`),
                            (this.codecs = [
                                { type: "audio", name: T.UK.OPUS, priority: 1, payloadType: 120 },
                                ...(0, p.RQ)(r, i).map((e, t) => {
                                    let n = 101 + 2 * t;
                                    return {
                                        type: "video",
                                        name: e.name,
                                        priority: t + 1,
                                        payloadType: n,
                                        rtxPayloadType: n + 1,
                                        encode: e.encode,
                                        decode: e.decode,
                                    };
                                }),
                            ]),
                            this.logger.info(
                                `Audio codecs: ${this.codecs.filter((e) => "audio" === e.type).map((e) => e.name)}`,
                            ),
                            this.logger.info(
                                `Video codecs: ${this.codecs.filter((e) => "video" === e.type).map((e) => e.name + "[encode: " + e.encode + ", decode: " + e.decode + "]")}`,
                            ),
                            t.getEncryptionModes((r) => {
                                (this.onEncryptionModesCallbackAt = performance.now()),
                                    this.logger.info(`Encryption modes: ${r}`),
                                    t.setTransportOptions(this.getConnectionTransportOptions()),
                                    t.setSelfMute(this.selfMute || this.context === T.x.STREAM),
                                    t.setSelfDeafen(this.selfDeaf),
                                    t.setOnSpeakingCallback(this.handleSpeakingNative),
                                    t.setOnNativeMuteChangedCallback?.(this.handleNativeMuteChanged),
                                    t.setOnSpeakingWhileMutedCallback?.(this.handleSpeakingWhileMuted),
                                    t.setPingInterval?.(T.n8),
                                    t.setPingCallback(this.handlePing),
                                    t.setPingTimeoutCallback?.(this.handlePingTimeout),
                                    t.setOnVideoEncoderFallbackCallback?.(this.handleVideoEncoderFallback),
                                    t.setOnVideoDecoderFallbackCallback?.(this.handleVideoDecoderFallback),
                                    n.setTransportOptions({
                                        builtInEchoCancellation: !0,
                                        echoCancellation: this.echoCancellation,
                                        noiseSuppression: this.noiseSuppression,
                                        automaticGainControl: this.automaticGainControl.enabled,
                                        automaticGainControlConfig: this.automaticGainControl,
                                        noiseCancellation: this.noiseCancellation,
                                        noiseCancellationDuringProcessing: this.noiseCancellationDuringProcessing,
                                        noiseCancellationAfterProcessing: this.noiseCancellationAfterProcessing,
                                        vadAfterWebrtc: this.vadAfterWebrtc,
                                    }),
                                    n.setNoInputThreshold(-100),
                                    n.setNoInputCallback(this.handleNoInput),
                                    this.videoSupported &&
                                        (t.setOnVideoCallback(this.handleVideo),
                                        t.setOnFirstFrameCallback?.(this.handleFirstFrame),
                                        t.setOnFirstFrameDeliveredStatsCallback?.(this.handleFirstFrameStats),
                                        t.setOnFirstFrameEncryptedStatsCallback?.(this.handleFirstFrameEncryptedStats),
                                        t.setOnDesktopSourceEnded?.(this.handleDesktopSourceEnded),
                                        t.setOnSoundshare?.(this.handleSoundshare),
                                        t.setOnSoundshareEnded?.(this.handleSoundshareEnded),
                                        t.setOnSoundshareFailed?.(this.handleSoundshareFailed)),
                                    t.setOnMLSFailureCallback?.(this.handleMLSFailure),
                                    this.setConnectionState(T.$I.CONNECTED),
                                    this.emit(h.yq.Connected, s, {
                                        address: a,
                                        port: o,
                                        mode: this.chooseEncryptionMode(e.modes, r),
                                        codecs: this.codecs,
                                    }),
                                    this.on(h.yq.Stats, this.handleStats);
                                let i = this.getUserOptions();
                                for (let e of (i.forEach((e) =>
                                    this.logger.info(
                                        `Creating user: ${e.id} with audio SSRC: ${e.ssrc} and video SSRCs: ${e.videoSsrcs?.join(",") ?? 0}`,
                                    ),
                                ),
                                this.mergeUsers(i),
                                this.emit(h.yq.RemoteStreamsReady, i.length),
                                Object.keys(this.localSpeakingFlags)))
                                    e !== this.userId && this.setSpeakingFlags(e, this.localSpeakingFlags[e]);
                            });
                    });
            };
        if (null != n.createOwnStreamConnectionWithOptions)
            i =
                this.context === T.x.STREAM && this.streamUserId === this.userId
                    ? n.createOwnStreamConnectionWithOptions
                    : n.createVoiceConnectionWithOptions;
        else if (null != n.createOwnStreamConnection) {
            var i,
                s =
                    this.context === T.x.STREAM && this.streamUserId === this.userId
                        ? n.createOwnStreamConnection
                        : n.createVoiceConnection;
            i = (e, t, n) => s(t.ssrc, this.userId, t.address, t.port, n, t.experiments, t.streamParameters);
        } else
            i = (e, t, r) => new n.VoiceConnection(t.ssrc, e, t.address, t.port, r, t.experiments, t.streamParameters);
        (t = this.conn = i(this.userId, e, r)),
            t.setSecureFramesStateUpdateCallback?.((e) => {
                this.logger.info(`DAVE protocol state update: ${JSON.stringify(e)}`),
                    this.emit(h.yq.SecureFramesUpdate, e);
            }),
            t.setDesktopSourceStatusCallback?.((e) => {
                "videohook_start" === e.type
                    ? this.emit(h.yq.VideoHookStart)
                    : "videohook_stop" === e.type
                      ? this.emit(h.yq.VideoHookStop)
                      : "videohook_initialize" === e.type
                        ? this.emit(
                              h.yq.VideoHookInitialize,
                              e.backend,
                              e.format,
                              e.framebufferFormat,
                              e.sampleCount,
                              e.success,
                              e.reinitialization,
                          )
                        : "screenshare_finish" === e.type
                          ? this.emit(
                                h.yq.ScreenshareFinish,
                                e.screenshareFrames,
                                e.videohookFrames,
                                e.hybridDxgiFrames,
                                e.hybridGdiFrames,
                                e.hybridVideohookFrames,
                                e.hybridGraphicsCaptureFrames,
                                e.hybridCaptureMethodSwitches,
                                e.hybridGdiBitBltFrames,
                                e.hybridGdiPrintWindowFrames,
                                e.hybridGraphicsCaptureFramesUnique,
                                e.hybridDxgiFramesUnique,
                                e.hybridVideohookFramesUnique,
                                e.hybridGdiBitBltFramesUnique,
                                e.hybridGdiPrintWindowFramesUnique,
                                e.skipHistoryJson,
                                e.quartzFrames,
                                e.desktopCapturerType ?? e.desktop_capturer_type,
                                e.activity,
                                e.goLiveCameraFrames,
                                e.screenCaptureKitFrames,
                                e.hdrFramesCapable,
                                e.hdrFrames,
                                e.targetWindowElevated,
                            )
                          : "video_state" === e.type
                            ? this.emit(h.yq.VideoState, e.state)
                            : e.type.startsWith("soundshare_") && this.emit(h.yq.SoundshareTrace, e);
            }),
            this.on("newListener", this.handleNewListenerNative);
    }
    destroy() {
        this.conn.destroy(),
            Object.keys(this.localSpeakingFlags)
                .filter((e) => e !== this.userId)
                .forEach((e) => this.emit(h.yq.Speaking, e, T.ME.NONE, this.remoteAudioSSRCs[e])),
            this.setConnectionState(T.$I.DISCONNECTED),
            super.destroy();
    }
    setCodecs(e, t, n) {
        this.conn.setTransportOptions(this.getCodecOptions(e, t, n)),
            this.videoEncoderFallbackPending && (this.videoEncoderFallbackPending = !1);
    }
    getStats() {
        return this.connectionState === T.$I.DISCONNECTED
            ? Promise.resolve(null)
            : (0, c.timeout)(
                  new Promise((e) => {
                      null != this.conn.getFilteredStats
                          ? this.conn.getFilteredStats(I.yt.ALL, (t) =>
                                e(
                                    (0, A.A)(
                                        this.mediaEngineConnectionId,
                                        t,
                                        this.remoteVideoSinkWants,
                                        this.localVideoSinkWants,
                                    ),
                                ),
                            )
                          : null != this.conn.getStats
                            ? this.conn.getStats((t) =>
                                  e(
                                      (0, A.A)(
                                          this.mediaEngineConnectionId,
                                          t,
                                          this.remoteVideoSinkWants,
                                          this.localVideoSinkWants,
                                      ),
                                  ),
                              )
                            : (0, g.lE)().getStats((t) =>
                                  e(
                                      (0, A.A)(
                                          this.mediaEngineConnectionId,
                                          t,
                                          this.remoteVideoSinkWants,
                                          this.localVideoSinkWants,
                                      ),
                                  ),
                              );
                  }),
                  1e3,
              ).catch((e) => {
                  if (!(e instanceof c.TimeoutError)) throw e;
              });
    }
    createUser(e, t, n) {
        let r = this.remoteAudioSSRCs[e],
            i = this.remoteVideoSSRCs[e];
        if (null != r && 0 === t)
            return void this.logger.info(`Ignoring attempt to recreate user ${e} with 0 audio SSRC`);
        (i = void 0 !== i ? [...i].sort() : []), (n = void 0 === n ? (i ?? []) : [...n].sort());
        let s = !l()(i, n);
        if (
            ((this.remoteAudioSSRCs[e] = t), (this.remoteVideoSSRCs[e] = n ?? []), this.userId !== e && (r !== t || s))
        ) {
            let r = void 0 !== n && n.length > 0 ? n[0] : 0,
                i = {
                    id: e,
                    ssrc: t,
                    videoSsrc: r,
                    videoSsrcs: n,
                    rtxSsrc: y(r),
                    mute: this.getLocalMute(e),
                    volume: this.getLocalVolume(e),
                };
            this.connectionState === T.$I.CONNECTED &&
                (this.logger.info(`Creating user: ${e} with audio SSRC: ${t} and video SSRCs: ${n?.join(",") ?? 0}`),
                this.mergeUsers([i]));
            let s = this.localPans[e];
            null != s && this.setLocalPan(e, s.left, s.right);
            let a = this.localSpeakingFlags[e];
            null != a && a !== T.ME.NONE && this.setSpeakingFlags(e, a);
        }
    }
    destroyUser(e) {
        null != this.remoteAudioSSRCs[e] &&
            (this.conn.destroyUser(e), delete this.remoteAudioSSRCs[e], delete this.remoteVideoSSRCs[e]);
    }
    setSelfMute(e) {
        (this.selfMute = e), this.conn.setSelfMute(e), this.emit(h.yq.Mute, e);
    }
    getSelfMute() {
        return this.selfMute;
    }
    getSelfDeaf() {
        return this.selfDeaf;
    }
    setSelfDeaf(e) {
        (this.selfDeaf = e), this.conn.setSelfDeafen(e), this.emit(h.yq.Deafen, e);
    }
    setSoundshareSource(e, t) {
        if ((this.soundshareId === e && this.soundshareSentSpeakingEvent) || this.context !== T.x.STREAM) return;
        (this.soundshareId = e), (this.soundshareSentSpeakingEvent = !1);
        let n = e;
        null === n && (n = 0),
            this.conn.setTransportOptions({ soundsharePid: n, soundshareEventDriven: !0, soundshareLoopback: t });
    }
    setLocalMute(e, t) {
        (this.localMutes[e] = t), this.conn.setLocalMute(e, t), this.emit(h.yq.LocalMute, e, t);
    }
    fastUdpReconnect() {
        null != this.conn.fastUdpReconnect && ((this.numFastUdpReconnects += 1), this.conn.fastUdpReconnect());
    }
    getNumFastUdpReconnects() {
        return null != this.conn.fastUdpReconnect ? this.numFastUdpReconnects : null;
    }
    wasRemoteDisconnected() {
        this.conn.wasRemoteDisconnected?.();
    }
    setLocalVideoDisabled(e, t) {
        (this.disabledLocalVideos[e] = t), this.emit(h.yq.LocalVideoDisabled, e, t);
    }
    setMinimumJitterBufferLevel(e) {
        this.minimumJitterBufferLevel = e;
    }
    setPostponeDecodeLevel(e) {
        this.postponeDecodeLevel = e;
    }
    setClipRecordUser(e, t, n) {
        if (!this.destroyed) {
            let r;
            (r =
                "soundboard" === t
                    ? "soundboardAudio"
                    : (this.context === T.x.STREAM ? "application" : "user").concat("audio" === t ? "Audio" : "Video")),
                this.conn.setClipRecordUser?.(e, r, n);
        }
    }
    setClipsKeyFrameInterval(e) {
        this.context === T.x.STREAM &&
            ((this.clipsKeyFrameInterval = e),
            this.conn.setTransportOptions({
                keyframeInterval: this.getKeyFrameInterval(),
                alwaysSendVideo: this.keyframeInterval > 0,
            }));
    }
    setViewerSideClip(e) {
        this.context === T.x.STREAM && this.conn.setTransportOptions({ enableViewerSideClip: e });
    }
    setRemoteAudioHistory(e) {
        this.conn.setTransportOptions({ remoteAudioHistoryMs: e });
    }
    setQualityDecoupling(e) {
        this.context === T.x.STREAM && this.conn.setTransportOptions({ enableQualityDecoupling: e });
    }
    getLocalVolume(e) {
        var t;
        let n = this.localVolumes[e];
        return null == n && (n = this.context === T.x.DEFAULT ? T.Hz : T.Cn), (null != (t = n) ? t : T.Hz) / T.Hz;
    }
    setLocalVolume(e, t) {
        this.localVolumes[e] = t;
        try {
            this.conn.setLocalVolume(e, this.getLocalVolume(e));
        } catch {
            this.logger.warn(`Failed to set volume for user: ${e}: ${t}`);
        }
    }
    setLocalPan(e, t, n) {
        (this.localPans[e] = { left: t, right: n }), this.conn.setLocalPan(e, t, n);
    }
    isAttenuating() {
        return this.attenuationFactor < 1;
    }
    setAttenuation(e, t, n) {
        (this.attenuationFactor = (100 - e) / 100),
            (this.attenuateWhileSpeakingSelf = t),
            (this.attenuateWhileSpeakingOthers = n),
            this.conn.setTransportOptions(this.getAttenuationOptions());
    }
    setCanHavePriority(e, t) {
        this.conn.setRemoteUserCanHavePriority?.(e, t);
    }
    setBitRate(e) {
        this.setVoiceBitRate(e);
    }
    setVoiceBitRate(e) {
        if (this.voiceBitrate === e) return;
        this.voiceBitrate = e;
        let t = this.voiceBitrate;
        this.soundshareActive && (t = Math.max(T.kO, t)), this.conn.setTransportOptions({ encodingVoiceBitRate: t });
    }
    setCameraBitRate(e, t, n) {
        null != n || null != t
            ? this.videoQualityManager.setQualityOverwrite({ bitrateMin: null != n && n > 0 ? n : t, bitrateMax: t })
            : this.videoQualityManager.setQualityOverwrite({}),
            this.hasDesktopSource() ||
                this.conn.setTransportOptions({
                    encodingVideoBitRate: e,
                    encodingVideoMinBitRate: n,
                    encodingVideoMaxBitRate: t,
                });
    }
    setEchoCancellation(e) {
        (this.echoCancellation = e), (0, g.lE)().setTransportOptions({ echoCancellation: this.echoCancellation });
    }
    setNoiseSuppression(e) {
        (this.noiseSuppression = e), (0, g.lE)().setTransportOptions({ noiseSuppression: this.noiseSuppression });
    }
    setAutomaticGainControl(e) {
        (this.automaticGainControl = e),
            (0, g.lE)().setTransportOptions({
                automaticGainControl: this.automaticGainControl.enabled,
                automaticGainControlConfig: this.automaticGainControl,
            });
    }
    setNoiseCancellation(e) {
        (this.noiseCancellation = e), (0, g.lE)().setTransportOptions({ noiseCancellation: this.noiseCancellation });
    }
    setNoiseCancellationDuringProcessing(e) {
        (this.noiseCancellationDuringProcessing = e),
            (0, g.lE)().setTransportOptions({
                noiseCancellationDuringProcessing: this.noiseCancellationDuringProcessing,
            });
    }
    setNoiseCancellationAfterProcessing(e) {
        (this.noiseCancellationAfterProcessing = e),
            (0, g.lE)().setTransportOptions({
                noiseCancellationAfterProcessing: this.noiseCancellationAfterProcessing,
            });
    }
    setVADAfterWebrtc(e) {
        (this.vadAfterWebrtc = e), (0, g.lE)().setTransportOptions({ vadAfterWebrtc: this.vadAfterWebrtc });
    }
    getNoiseCancellation() {
        return this.noiseCancellation;
    }
    setQoS(e) {
        (this.qos = e), this.conn.setTransportOptions({ qos: this.qos });
    }
    setSoundshareDiscardRearChannels(e) {
        this.conn.setTransportOptions({ soundshareDiscardRearChannels: e });
    }
    setInputMode(e, t) {
        switch (((this.inputMode = e), e)) {
            case T.TB.PUSH_TO_TALK:
                this.pttReleaseDelay = t.pttReleaseDelay;
                break;
            case T.TB.VOICE_ACTIVITY:
                (this.vadThreshold = t.vadThreshold),
                    (this.vadAutoThreshold = t.vadAutoThreshold),
                    (this.vadUseKrisp = t.vadUseKrisp),
                    (this.vadLeading = t.vadLeading),
                    (this.vadTrailing = t.vadTrailing),
                    (this.vadKrispActivationThreshold = t.vadKrispActivationThreshold),
                    (this.vadDuringPreProcess = t.vadDuringPreProcess);
                break;
            default:
                throw Error(`Unknown Input Mode: ${e}`);
        }
        this.conn.setTransportOptions({
            inputMode: T.s6[this.inputMode],
            inputModeOptions: this.createInputModeOptions(),
        });
    }
    setSilenceThreshold(e) {
        (0, g.lE)().setNoInputThreshold(e);
    }
    setForceAudioInput(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.conn.setPTTActive(e, t, n);
    }
    setSpeakingFlags(e, t) {
        null != this.conn.setRemoteUserSpeakingStatus
            ? this.conn.setRemoteUserSpeakingStatus(e, t)
            : null != this.conn.setRemoteUserSpeaking &&
              this.conn.setRemoteUserSpeaking(e, (t & T.ME.VOICE) === T.ME.VOICE),
            this.handleSpeakingFlags(e, t);
    }
    clearAllSpeaking() {}
    setEncryption(e, t) {
        this.logger.info(`Selected encryption mode: ${e}`),
            this.conn.setTransportOptions({ encryptionSettings: { mode: e, secretKey: t } });
    }
    setReconnectInterval(e) {
        (this.reconnectInterval = e), this.conn.setTransportOptions({ reconnectInterval: this.reconnectInterval });
    }
    setKeyframeInterval(e) {
        (this.keyframeInterval = e),
            this.conn.setTransportOptions({
                keyframeInterval: this.getKeyFrameInterval(),
                alwaysSendVideo: this.keyframeInterval > 0,
            });
    }
    setVideoQualityMeasurement(e) {
        (this.videoQualityMeasurement = e),
            this.conn.setTransportOptions({ videoQualityMeasurement: this.videoQualityMeasurement });
    }
    setVideoEncoderExperiments(e) {
        (this.videoEncoderExperiments = e),
            this.conn.setTransportOptions({ videoEncoderExperiments: this.videoEncoderExperiments });
    }
    setVideoBroadcast(e) {
        this.selfVideo !== e && ((this.selfVideo = e), this.applyVideoTransportOptions());
    }
    setGoLiveSource(e) {
        let { resolution: t, frameRate: n } = e.quality,
            r = t <= 480 ? (t / 3) * 4 : (t / 9) * 16,
            i = null;
        if (
            (null != e.desktopDescription
                ? (i = e.desktopDescription.id)
                : null != e.cameraDescription &&
                  (i = `${e.cameraDescription.videoDeviceGuid}:${e.cameraDescription.audioDeviceGuid}`),
            this.goLiveSourceIdentifier === i)
        ) {
            if ((this.setDesktopEncodingOptions(r, t, n), null != e.desktopDescription)) {
                let { soundshareId: t, useLoopback: n } = e.desktopDescription;
                this.soundshareId !== t && this.setSoundshareSource(t, n);
            }
            return;
        }
        if (((this.goLiveSourceIdentifier = i), null != this.conn.setDesktopSource)) {
            if (null != e.desktopDescription) {
                let {
                    id: i,
                    soundshareId: s,
                    useLoopback: a,
                    useVideoHook: o,
                    useHookFramePacer: l,
                    useGraphicsCaptureApiLevel: u,
                    useCaptureDeviceForEncode: d,
                    useGraphicsCapture: c,
                    useQuartzCapturer: _,
                    allowScreenCaptureKit: f,
                    videoHookStaleFrameTimeoutMs: E,
                    graphicsCaptureStaleFrameTimeoutMs: h,
                    hdrCaptureMode: p,
                    enableGlobalFramePoolLock: m,
                    useGraphicsCaptureDirtyRegions: g,
                    videoHookAllowDx12: A,
                } = e.desktopDescription;
                this.setSoundshareSource(s, a);
                let [I, T] = null != i ? i.split(":") : ["", ""];
                null != i
                    ? this.logger.info(
                          `capturing desktop (type: ${I}, handle: ${T}, use-video-hook: ${o.toString()}, use-graphics-capture: ${c?.toString()}, use-graphics-capture-api-level: ${u?.toString()}, use-capture-device-for-encode: ${d?.toString()}).`,
                      )
                    : this.logger.info("capturing desktop (type: <stop>)."),
                    null != this.conn.setDesktopSourceWithOptions
                        ? null != i
                            ? (this.setDesktopEncodingOptions(r, t, n),
                              this.conn.setDesktopSourceWithOptions({
                                  type: I,
                                  sourceId: T,
                                  useVideoHook: o,
                                  useHookFramePacer: l,
                                  useGraphicsCapture: c,
                                  useGraphicsCaptureApiLevel: u,
                                  useCaptureDeviceForEncode: d,
                                  useQuartzCapturer: _,
                                  allowScreenCaptureKit: f,
                                  videoHookStaleFrameTimeoutMs: E,
                                  graphicsCaptureStaleFrameTimeoutMs: h,
                                  hdrCaptureMode: p,
                                  enableGlobalFramePoolLock: m,
                                  useGraphicsCaptureDirtyRegions: g,
                                  videoHookAllowDx12: A,
                              }))
                            : this.conn.clearDesktopSource()
                        : this.conn.setDesktopSource(`wumpus-${T}`, o, I);
            } else if (null != e.cameraDescription) {
                let { videoDeviceGuid: t, audioDeviceGuid: n } = e.cameraDescription;
                this.conn.setGoLiveDevices({ videoInputDeviceId: t, audioInputDeviceId: n });
            }
            this.setDesktopEncodingOptions(r, t, n);
        }
    }
    clearGoLiveDevices() {
        null != this.conn.clearGoLiveDevices && this.conn.clearGoLiveDevices();
    }
    clearDesktopSource() {
        (this.goLiveSourceIdentifier = null),
            null != this.conn.clearDesktopSource
                ? this.conn.clearDesktopSource()
                : this.conn.setDesktopSource("", !1, "");
    }
    setDesktopSourceStatusCallback(e) {
        this.conn.setDesktopSourceStatusCallback?.(e);
    }
    hasDesktopSource() {
        return null != this.goLiveSourceIdentifier;
    }
    setDesktopEncodingOptions(e, t, n) {
        if (this.destroyed) return;
        let r = (0 === t && n >= 10) || t > 720 || n > 30 ? I.oL : I.lo,
            i = { width: e, height: t, framerate: n },
            s = this.videoQualityManager.getQuality(),
            a = !E.Xb.equals(i, s.capture) || s.bitrateMax !== r,
            o = this.videoStreamParameters.findIndex((e) => e.quality === I.Y4);
        -1 === o && (o = 0),
            a &&
                (this.videoQualityManager.setGoliveQuality({ capture: i, encode: i, bitrateMax: r }),
                this.videoStreamParameters.length > o &&
                    ((this.videoStreamParameters[o].maxResolution = {
                        type: 0 === e && 0 === t ? T.ei.SOURCE : T.ei.FIXED,
                        width: e,
                        height: t,
                    }),
                    (this.videoStreamParameters[o].maxFrameRate = n),
                    (this.videoStreamParameters[o].maxBitrate = r)),
                this.emit(
                    h.yq.Video,
                    this.userId,
                    null,
                    this.audioSSRC,
                    this.videoStreamParameters[o].ssrc,
                    y(this.videoStreamParameters[o].ssrc),
                    this.videoStreamParameters,
                ),
                this.conn.setTransportOptions(this.applyQualityConstraints().constraints));
    }
    setSDP(e) {}
    setRemoteVideoSinkWants(e) {
        (this.remoteVideoSinkWants = e), this.updateVideoQuality(I.nJ);
    }
    setLocalVideoSinkWants(e) {
        let t = this.localVideoSinkWants;
        for (let [n, r] of Object.entries(this.remoteVideoSSRCs)) {
            let i = 0,
                s = 0;
            for (let n of r) (i += t?.[n]), (s += e?.[n]);
            0 === i && 0 !== s && this.conn.setDisableLocalVideo?.(n, !1),
                0 !== i && 0 === s && this.conn.setDisableLocalVideo?.(n, !0);
        }
        this.localVideoSinkWants = e;
    }
    startSamplesLocalPlayback(e, t, n, r) {
        if (t.numberOfChannels > 2) return void r(2, "Too many channels");
        if (null == this.conn.startSamplesLocalPlayback) return void r(3, "Not supported");
        for (var i = [], s = 0; s < t.numberOfChannels; s++) {
            var a = t.getChannelData(s);
            i.push(a);
        }
        this.conn.startSamplesLocalPlayback(e, { sampleRate: t.sampleRate, volume: n }, i, r);
    }
    stopAllSamplesLocalPlayback() {
        this.conn.stopAllSamplesLocalPlayback();
    }
    stopSamplesLocalPlayback(e) {
        this.conn.stopSamplesLocalPlayback?.(e);
    }
    setBandwidthEstimationExperiments(e) {
        this.conn.setTransportOptions({ bandwidthEstimationExperiments: e });
    }
    updateVideoQualityCore(e, t) {
        this.videoSupported && (this.destroyed || this.conn.setTransportOptions(e));
    }
    setStreamParameters(e) {
        return new Promise((t, n) => {
            for (let t of this.videoStreamParameters) {
                let r = e.findIndex((e) => e.rid === t.rid);
                if (-1 === r) return void n(Error("Invalid rid"));
                let i = [];
                l()(this.videoStreamParameters[r], e[r]) ||
                    ((this.videoStreamParameters[r] = { ...e[r] }), i.push({ ...e[r] })),
                    this.conn.setTransportOptions({ streamParameters: i });
            }
            t();
        });
    }
    applyVideoTransportOptions() {
        if (!this.videoSupported) return;
        let e = !1;
        this.hasDesktopSource() &&
            this.videoStreamParameters.length > 0 &&
            (e = this.videoStreamParameters[0].maxResolution?.type === T.ei.SOURCE),
            this.conn.setTransportOptions(
                this.applyQualityConstraints({
                    encodingVideoDegradationPreference: this.hasDesktopSource()
                        ? e
                            ? this.sourceDesktopDegradationPreference
                            : this.desktopDegradationPreference
                        : this.videoDegradationPreference,
                }).constraints,
            ),
            this.conn.setVideoBroadcast(this.selfVideo);
    }
    chooseEncryptionMode(e, t) {
        for (let n of t) for (let t of e) if (n === t) return n;
        return "xsalsa20_poly1305";
    }
    getUserOptions() {
        return Object.keys(this.remoteAudioSSRCs).map((e) => {
            let t =
                void 0 !== this.remoteVideoSSRCs[e] && this.remoteVideoSSRCs[e].length > 0
                    ? this.remoteVideoSSRCs[e][0]
                    : 0;
            return {
                id: e,
                ssrc: this.remoteAudioSSRCs[e],
                videoSsrc: t,
                videoSsrcs: this.remoteVideoSSRCs[e],
                rtxSsrc: y(t),
                mute: this.getLocalMute(e),
                volume: this.getLocalVolume(e),
            };
        });
    }
    createInputModeOptions() {
        switch (this.inputMode) {
            case T.TB.VOICE_ACTIVITY:
                return {
                    vadThreshold: this.vadThreshold,
                    vadAutoThreshold: this.vadAutoThreshold ? m.B.VERY_AGGRESSIVE : m.B.DISABLED,
                    vadUseKrisp: this.vadUseKrisp,
                    vadLeading: this.vadLeading,
                    vadTrailing: this.vadTrailing,
                    vadKrispActivationThreshold: this.vadKrispActivationThreshold,
                    vadDuringPreProcess: this.vadDuringPreProcess,
                };
            case T.TB.PUSH_TO_TALK:
                return { pttReleaseDelay: this.pttReleaseDelay };
            default:
                throw Error(`Unknown Input Mode: ${this.inputMode}`);
        }
    }
    getAttenuationOptions() {
        return {
            attenuation: this.isAttenuating(),
            attenuationFactor: this.attenuationFactor,
            attenuateWhileSpeakingSelf: this.attenuateWhileSpeakingSelf,
            attenuateWhileSpeakingOthers: this.attenuateWhileSpeakingOthers,
        };
    }
    getCodecParams(e, t) {
        return e !== T.UK.H264
            ? {}
            : t
              ? { "level-asymmetry-allowed": "1", "packetization-mode": "1", "profile-level-id": "42e034" }
              : {
                    "level-asymmetry-allowed": "1",
                    "packetization-mode": "1",
                    "profile-level-id": "android" === (0, g.lE)().platform ? "42e01f" : "4d0033",
                };
    }
    getCodecOptions(e, t, n) {
        let r;
        r = this.codecs.find((t) => t.name === e);
        let i = { type: r?.payloadType ?? 0, name: e, freq: 48e3, pacsize: 960, channels: 1, rate: 64e3 },
            s = this.codecs
                .filter((e) => "audio" === e.type)
                .map((e) => ({
                    type: e?.payloadType ?? 0,
                    name: e.name,
                    freq: 48e3,
                    channels: 2,
                    params: { stereo: "1" },
                }));
        n === T.x.STREAM && (i.channels = 2);
        let a = [],
            o = { name: "", type: 0, rtxType: 0, params: {} };
        for (r of this.codecs) {
            if (r.name === e) continue;
            let n = {
                name: (0, p.Q5)(r.name),
                type: r?.payloadType ?? 0,
                rtxType: r?.rtxPayloadType ?? 0,
                params: this.getCodecParams(r.name, !0),
            };
            if (
                (this.experimentFlags.has(I.fd.RESET_DECODER_ON_ERRORS) && (n.params["reset-on-errors"] = "1"),
                this.experimentFlags.has(I.fd.SOFTWARE_FALLBACK_ON_ERRORS) && (n.params["fallback-after-errors"] = "3"),
                this.experimentFlags.has(I.fd.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS) &&
                    (n.params["fallback-on-consecutive-errors"] = "1"),
                this.experimentFlags.has(I.fd.SIGNAL_AV1_HARDWARE_DECODE) && (n.params["hardware-av1-decode"] = "1"),
                "H265" === n.name &&
                    (n.params["software-h265"] = this.experimentFlags.has(I.fd.H265_HARDWARE_ONLY) ? "0" : "1"),
                (n.params["hardware-h264"] = this.useElectronVideo ? "1" : "0"),
                this.experimentFlags.has(I.fd.USE_LIBOPENH264_DECODER))
            ) {
                let e = (0, g.XH)();
                null != e && ((n.params.libopenh264 = "1"), (n.params["libopenh264-path"] = e));
            }
            a.push(n),
                r.name === t &&
                    ((o = { ...n, params: this.getCodecParams(r.name, !1) }),
                    this.experimentFlags.has(I.fd.VIDEOTOOLBOX_RATE_CONTROL) &&
                        (o.params["fixed-rate-presentation-timestamps"] = "1"),
                    this.experimentFlags.has(I.fd.LOW_LATENCY_RATE_CONTROL) &&
                        (o.params["low-latency-rate-control"] = "1"),
                    this.experimentFlags.has(I.fd.WMF_GPU_ENCODE) && (o.params["wmf-gpu"] = "1"));
        }
        return { videoEncoder: o, videoDecoders: a, audioEncoder: i, audioDecoders: s };
    }
    getKeyFrameInterval() {
        return this.keyframeInterval > 0 && this.clipsKeyFrameInterval > 0
            ? Math.min(this.keyframeInterval, this.clipsKeyFrameInterval)
            : Math.max(this.keyframeInterval, this.clipsKeyFrameInterval);
    }
    getConnectionTransportOptions() {
        let e = {
            selfMute: this.selfMute,
            inputMode: T.s6[this.inputMode],
            inputModeOptions: this.createInputModeOptions(),
            minimumJitterBufferLevel: this.minimumJitterBufferLevel,
            postponeDecodeLevel: this.postponeDecodeLevel,
            ...this.getAttenuationOptions(),
            fec: !0,
            packetLossRate: 0.3,
            qos: this.qos,
            prioritySpeakerDucking: T.zt,
            encodingVoiceBitRate: this.voiceBitrate,
            callBitRate: T.l2,
            callMinBitRate: T.KR,
            callMaxBitRate: T.us,
            encodingVideoDegradationPreference: this.videoDegradationPreference,
            reconnectInterval: this.reconnectInterval,
        };
        return (0, g.$b)(T.BY.VIDEO_EFFECTS) && this.context === T.x.STREAM && (e.enableVideoEffects = !0), e;
    }
    handleSpeakingNative = (e, t, n) => {
        let r = T.ME.NONE;
        (r = "boolean" == typeof t ? (t ? T.ME.VOICE : T.ME.NONE) : t), this.handleSpeakingFlags(e, r, n);
    };
    handleNativeMuteChanged = (e) => {
        this.emit(h.yq.NativeMuteChanged, e);
    };
    handleSpeakingFlags = (e, t, n) => {
        let r = this.localSpeakingFlags[e] ?? T.ME.NONE;
        if (this.experimentFlags.has(I.fd.SWALLOW_VOLUME_ONLY_SPEAKING_EVENTS) && r === t) return;
        this.localSpeakingFlags[e] = t;
        let i = e === this.userId ? this.audioSSRC : this.remoteAudioSSRCs[e];
        this.emit(h.yq.Speaking, e, t, i, n),
            (t & T.ME.SOUNDSHARE) != 0 &&
                !1 === this.soundshareSentSpeakingEvent &&
                (this.emit(h.yq.SoundshareSpeaking), (this.soundshareSentSpeakingEvent = !0));
    };
    handleSpeakingWhileMuted = () => {
        this.emit(h.yq.SpeakingWhileMuted);
    };
    handlePing = (e, t, n) => {
        this.emit(h.yq.Ping, e);
    };
    handlePingTimeout = (e, t, n, r) => {
        this.emit(h.yq.PingTimeout, n, r > 0 ? r : 4e3);
    };
    handleVideoEncoderFallback = (e) => {
        this.videoEncoderFallbackPending ||
            (this.logger.info(`Falling back from current video encoder: ${e}`),
            (this.codecs = this.codecs
                .map((t) => ((e === t.name || ("AV1" === t.name && "AV1X" === e)) && (t.encode = !1), t))
                .filter((e) => "video" !== e.type || !1 !== e.encode || !1 !== e.decode)),
            this.emit(h.yq.VideoEncoderFallback, this.codecs),
            (this.videoEncoderFallbackPending = !0));
    };
    handleVideoDecoderFallback = (e) => {
        this.videoDecoderFallbackSent.has(e) ||
            (this.videoDecoderFallbackSent.add(e),
            this.logger.info(`Falling back from current video decoder: ${e}`),
            (this.codecs = this.codecs
                .map((t) => ((e === t.name || ("AV1" === t.name && "AV1X" === e)) && (t.decode = !1), t))
                .filter((e) => "video" !== e.type || !1 !== e.encode || !1 !== e.decode)),
            this.emit(h.yq.VideoDecoderFallback, this.codecs));
    };
    handleVideo = (e, t, n, r) => {
        let i = a()(this.videoStreamParameters);
        e === this.userId
            ? null != r && Array.isArray(r) && r.length > 0
                ? r.forEach((e) => {
                      i.forEach((t, n) => {
                          if (t.rid === e.rid) {
                              let r = e.active;
                              i[n] = { ...t, ssrc: e.ssrc, rtxSsrc: e.rtxSsrc, active: r };
                          }
                      });
                  })
                : t > 0
                  ? ((i[0].active = !0), (i[0].ssrc = t), (i[0].rtxSsrc = y(t)))
                  : (i[0].active = !1)
            : t > 0 &&
              (void 0 !== this.remoteVideoSSRCs[e]
                  ? this.remoteVideoSSRCs[e].includes(t) ||
                    (this.remoteVideoSSRCs[e] = [...this.remoteVideoSSRCs[e], t])
                  : (this.remoteVideoSSRCs[e] = [t])),
            (this.videoStreamParameters = i),
            this.emit(
                h.yq.Video,
                e,
                null != n && "" !== n ? n : null,
                e === this.userId ? this.audioSSRC : this.remoteAudioSSRCs[e],
                t,
                y(t),
                this.videoStreamParameters,
            );
    };
    handleFirstFrame = (e, t, n) => {
        this.emit(h.yq.FirstFrame, e, t, n);
    };
    handleFirstFrameStats = (e) => {
        this.emit(h.yq.FirstFrameStats, e);
    };
    handleFirstFrameEncryptedStats = (e) => {
        this.emit(h.yq.FirstFrameEncryptedStats, e);
    };
    handleNoInput = (e) => {
        this.emit(h.yq.Silence, !e);
    };
    handleDesktopSourceEnded = (e, t) => {
        this.emit(h.yq.DesktopSourceEnd, e, t);
    };
    handleSoundshare = (e) => {
        e &&
            ((this.soundshareActive = !0),
            this.conn.setTransportOptions({ encodingVoiceBitRate: Math.max(T.kO, this.voiceBitrate) }),
            this.emit(h.yq.SoundshareAttached));
    };
    handleSoundshareFailed = (e, t, n) => {
        this.emit(h.yq.SoundshareFailed, { failureCode: e, failureReason: t, willRetry: n });
    };
    handleSoundshareEnded = () => {
        (this.soundshareActive = !1),
            this.destroyed || this.conn.setTransportOptions({ encodingVoiceBitRate: this.voiceBitrate });
    };
    handleNewListenerNative = (e) => {
        e === h.yq.ConnectionStateChange && this.emit(e, this.connectionState);
    };
    handleStats = (e) => {
        if (this.connectionState === T.$I.DISCONNECTED) return void this.off(h.yq.Stats, this.handleStats);
        if (null != e) {
            if (null != this.stats) {
                let t = d()(
                        e.rtp.outbound,
                        (e, t) => ((e.lost += t.packetsLost ?? 0), (e.sent += t.packetsSent ?? 0), e),
                        { lost: 0, sent: 0 },
                    ),
                    n = d()(
                        this.stats.rtp.outbound,
                        (e, t) => ((e.lost += t.packetsLost ?? 0), (e.sent += t.packetsSent ?? 0), e),
                        { lost: 0, sent: 0 },
                    ),
                    r = t.sent - n.sent,
                    s = t.lost - n.lost;
                if (0 === r) this.emit(h.yq.OutboundLossRate, 0);
                else if (r > 0 && s >= 0) {
                    let e = i()(s / (r + s), 0, 1);
                    this.emit(h.yq.OutboundLossRate, 100 * e);
                }
                let a = e.rtp.outbound.filter((e) => "audio" === e.type)[0],
                    o = this.stats.rtp.outbound.filter((e) => "audio" === e.type)[0];
                if (null != a && null != o && null != a.framesCaptured && null != o.framesCaptured) {
                    let e = a.framesCaptured - o.framesCaptured,
                        t =
                            null != a.noiseCancellerFrames
                                ? null != o.noiseCancellerFrames
                                    ? a.noiseCancellerFrames - o.noiseCancellerFrames
                                    : 0
                                : e;
                    if (
                        this.noiseCancellation &&
                        t > 50 &&
                        null != a.noiseCancellerProcessTime &&
                        null != o.noiseCancellerProcessTime
                    ) {
                        let e = a.noiseCancellerProcessTime - o.noiseCancellerProcessTime;
                        e / t > 8
                            ? this.emit(h.yq.NoiseCancellationError, T.CO.CPU_OVERUSE)
                            : 0 === e && this.emit(h.yq.NoiseCancellationError, T.CO.FAILED);
                    }
                    this.inputMode === T.TB.VOICE_ACTIVITY &&
                        this.vadAutoThreshold &&
                        this.vadUseKrisp &&
                        e > 50 &&
                        null != a.voiceActivityDetectorProcessTime &&
                        null != o.voiceActivityDetectorProcessTime &&
                        (a.voiceActivityDetectorProcessTime - o.voiceActivityDetectorProcessTime) / e > 4 &&
                        this.emit(h.yq.VoiceActivityDetectorError, T.CO.VAD_CPU_OVERUSE);
                }
            }
            this.stats = e;
        }
    };
    setStream(e) {
        throw Error("Method not implemented.");
    }
    getUserIdBySsrc(e) {}
    prepareSecureFramesTransition(e, t, n) {
        0 === e && ((this.lastExecutedTransitionId = -1), (this.lastPreparedTransitionId = -1)),
            (this.lastPreparedTransitionId = e),
            this.conn.prepareSecureFramesTransition?.(e, t, n);
    }
    prepareSecureFramesEpoch(e, t, n) {
        this.conn.prepareSecureFramesEpoch?.(e, t, n);
    }
    executeSecureFramesTransition(e) {
        if (
            !(
                -1 === this.lastExecutedTransitionId ||
                -1 === this.lastPreparedTransitionId ||
                (this.lastPreparedTransitionId >= this.lastExecutedTransitionId
                    ? e > this.lastExecutedTransitionId && e <= this.lastPreparedTransitionId
                    : e > this.lastExecutedTransitionId || e <= this.lastPreparedTransitionId)
            )
        ) {
            let t = `Skipping invalid transition ${e} outside of range (${this.lastExecutedTransitionId}-${this.lastPreparedTransitionId}]`;
            throw (this.logger.warn(t), Error(t));
        }
        (this.lastExecutedTransitionId = e), this.conn.executeSecureFramesTransition?.(e);
    }
    getMLSKeyPackage(e) {
        this.conn.getMLSKeyPackage?.(e);
    }
    updateMLSExternalSender(e) {
        this.conn.updateMLSExternalSender?.(e);
    }
    processMLSProposals(e, t) {
        this.conn.processMLSProposals?.(e, t);
    }
    prepareMLSCommitTransition(e, t, n) {
        (this.lastPreparedTransitionId = e), this.conn.prepareMLSCommitTransition?.(e, t, n);
    }
    processMLSWelcome(e, t, n) {
        (this.lastPreparedTransitionId = e), this.conn.processMLSWelcome?.(e, t, n);
    }
    getMLSPairwiseFingerprint(e, t, n) {
        this.conn.getMLSPairwiseFingerprint?.(e, t, n);
    }
    presentDesktopSourcePicker(e) {
        this.conn.presentDesktopSourcePicker?.(e);
    }
    handleMLSFailure = (e, t) => {
        this.emit(h.yq.MLSFailure, e, t);
    };
    mergeUsers(e) {
        this.conn.mergeUsers(e), this.emit(h.yq.UsersMerged, e);
    }
}
